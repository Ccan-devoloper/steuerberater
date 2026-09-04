/* ==========================================================================
   Instagram Graph API – Veröffentlichen von Bildern, Carousels und Stories.

   Ablauf je Medium: Container anlegen → Status abwarten → veröffentlichen.
   Bilder müssen als öffentliche JPEG-URL erreichbar sein (hosting.mjs).
   Limit der API: 100 Veröffentlichungen je 24 Stunden (Beiträge + Stories).

   Zwei Anbindungen (config.instagram.host):
     facebook  → graph.facebook.com  (Instagram-Konto mit Facebook-Seite,
                 Seiten-Token ohne Ablauf; nichts aufzufrischen)
     instagram → graph.instagram.com (Instagram-API mit Instagram-Login,
                 60-Tage-Token; wird hier automatisch verlängert und
                 verschlüsselt im Asset-Zweig abgelegt)
   ========================================================================== */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { CONFIG } from "./config.mjs";

const schlafen = (ms) => new Promise((r) => setTimeout(r, ms));

export class InstagramFehler extends Error {
  constructor(nachricht, details) { super(nachricht); this.details = details; }
}

/* --- Token-Tresor: AES-256-GCM, Schlüssel aus IG_TOKEN_KEY ---------------- */
function tresorSchluessel() {
  const s = CONFIG.instagram.tokenSchluessel;
  if (!s) return null;
  return crypto.createHash("sha256").update(s).digest();
}

export function tokenVerschluesseln(daten) {
  const key = tresorSchluessel();
  if (!key) throw new Error("IG_TOKEN_KEY fehlt");
  const iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv("aes-256-gcm", key, iv);
  const enc = Buffer.concat([c.update(JSON.stringify(daten), "utf8"), c.final()]);
  return Buffer.concat([iv, c.getAuthTag(), enc]).toString("base64");
}

export function tokenEntschluesseln(text) {
  const key = tresorSchluessel();
  if (!key) return null;
  const buf = Buffer.from(text, "base64");
  const iv = buf.subarray(0, 12), tag = buf.subarray(12, 28), enc = buf.subarray(28);
  const d = crypto.createDecipheriv("aes-256-gcm", key, iv);
  d.setAuthTag(tag);
  return JSON.parse(Buffer.concat([d.update(enc), d.final()]).toString("utf8"));
}

export class Instagram {
  constructor(opt = {}) {
    this.host = opt.host || CONFIG.instagram.host;
    this.version = opt.version || CONFIG.instagram.version;
    this.kontoId = opt.kontoId || CONFIG.instagram.kontoId;
    this.token = opt.token || CONFIG.instagram.token;
    this.tokenAblauf = opt.tokenAblauf || null;   // ISO-Zeit oder null (unbekannt / ohne Ablauf)
    this.tresorDatei = opt.tresorDatei || null;   // Pfad im Asset-Zweig
    this.trockenlauf = opt.trockenlauf ?? CONFIG.instagram.trockenlauf;
    this.basis = this.host === "facebook" ? `https://graph.facebook.com/${this.version}` : `https://graph.instagram.com/${this.version}`;
    this.protokoll = [];
  }

  /* Token aus dem Tresor laden (falls vorhanden und neuer als das Secret). */
  tresorLaden() {
    if (!this.tresorDatei || !fs.existsSync(this.tresorDatei)) return false;
    try {
      const t = tokenEntschluesseln(fs.readFileSync(this.tresorDatei, "utf8"));
      if (t?.token) { this.token = t.token; this.tokenAblauf = t.ablauf || null; return true; }
    } catch (e) {
      console.warn(`Token-Tresor nicht lesbar (${e.message}) – verwende Secret.`);
    }
    return false;
  }

  tresorSpeichern() {
    if (!this.tresorDatei || !tresorSchluessel()) return false;
    fs.mkdirSync(path.dirname(this.tresorDatei), { recursive: true });
    fs.writeFileSync(this.tresorDatei, tokenVerschluesseln({ token: this.token, ablauf: this.tokenAblauf, gespeichert: new Date().toISOString() }));
    return true;
  }

  async anfrage(methode, pfad, params = {}, { basis = this.basis, versuche = 3 } = {}) {
    const url = new URL(`${basis}/${pfad.replace(/^\//, "")}`);
    const body = new URLSearchParams();
    for (const [k, v] of Object.entries({ ...params, access_token: this.token })) if (v != null) body.set(k, String(v));
    let letzter;
    for (let i = 1; i <= versuche; i++) {
      let res, json;
      try {
        if (methode === "GET") { url.search = body.toString(); res = await fetch(url); }
        else res = await fetch(url, { method: "POST", body });
        json = await res.json().catch(() => ({}));
      } catch (e) {
        letzter = new InstagramFehler(`Netzwerkfehler ${methode} ${pfad}: ${e.message}`);
        await schlafen(1500 * i);
        continue;
      }
      if (res.ok && !json.error) return json;
      const err = json.error || {};
      letzter = new InstagramFehler(`Instagram ${methode} ${pfad}: ${err.message || res.status} (code ${err.code}, subcode ${err.error_subcode || "-"})`, err);
      /* Vorübergehende Fehler (Rate-Limit, Serverfehler) erneut versuchen. */
      const voruebergehend = [1, 2, 4, 17, 32, 613].includes(err.code) || res.status >= 500;
      if (!voruebergehend) throw letzter;
      await schlafen(4000 * i);
    }
    throw letzter;
  }

  /* Verbindung, Konto und Token prüfen. */
  async pruefen() {
    const felder = "id,username";
    const konto = this.host === "facebook"
      ? await this.anfrage("GET", `${this.kontoId}`, { fields: `${felder},name` })
      : await this.anfrage("GET", "me", { fields: `user_id,username` });
    return { konto, limit: await this.limit() };
  }

  /* Tageskontingent der API (100 je 24 h). */
  async limit() {
    try {
      const r = await this.anfrage("GET", `${this.kontoId}/content_publishing_limit`, { fields: "quota_usage,config" });
      const d = r.data?.[0] || {};
      return { genutzt: d.quota_usage ?? 0, maximum: d.config?.quota_total ?? 100 };
    } catch (e) {
      return { genutzt: 0, maximum: 100, hinweis: e.message };
    }
  }

  /* Token verlängern (nur Instagram-Login). Rückgabe: true, wenn verlängert. */
  async tokenAuffrischen({ erzwingen = false } = {}) {
    if (this.host === "facebook") return false;
    const tageRest = this.tokenAblauf ? (new Date(this.tokenAblauf) - Date.now()) / 86400000 : null;
    if (!erzwingen && tageRest != null && tageRest > 20) return false;
    try {
      const r = await this.anfrage("GET", "refresh_access_token", { grant_type: "ig_refresh_token" }, { basis: "https://graph.instagram.com", versuche: 1 });
      if (r.access_token) {
        this.token = r.access_token;
        this.tokenAblauf = new Date(Date.now() + (r.expires_in || 60 * 86400) * 1000).toISOString();
        this.tresorSpeichern();
        return true;
      }
    } catch (e) {
      /* Ein frischer Token (< 24 h alt) lässt sich noch nicht verlängern – unkritisch. */
      console.warn(`Token-Verlängerung nicht möglich: ${e.message}`);
    }
    return false;
  }

  async containerWarten(id, { maxSekunden = 180 } = {}) {
    const start = Date.now();
    while (Date.now() - start < maxSekunden * 1000) {
      const r = await this.anfrage("GET", id, { fields: "status_code,status" });
      if (r.status_code === "FINISHED") return r;
      if (r.status_code === "ERROR" || r.status_code === "EXPIRED") throw new InstagramFehler(`Container ${id}: ${r.status_code} – ${r.status || ""}`, r);
      await schlafen(4000);
    }
    throw new InstagramFehler(`Container ${id} wurde nicht rechtzeitig fertig`);
  }

  async veroeffentlichen(containerId) {
    const r = await this.anfrage("POST", `${this.kontoId}/media_publish`, { creation_id: containerId });
    return r.id;
  }

  /* Einzelbild oder Carousel (2–10 Bilder). Rückgabe: Medien-ID oder "trocken". */
  async beitragPosten({ bildUrls, caption }) {
    if (this.trockenlauf) { this.protokoll.push({ art: "beitrag", bildUrls, caption }); return "trocken"; }
    if (bildUrls.length === 1) {
      const c = await this.anfrage("POST", `${this.kontoId}/media`, { image_url: bildUrls[0], caption });
      await this.containerWarten(c.id);
      return this.veroeffentlichen(c.id);
    }
    const kinder = [];
    for (const url of bildUrls.slice(0, 10)) {
      const c = await this.anfrage("POST", `${this.kontoId}/media`, { image_url: url, is_carousel_item: "true" });
      kinder.push(c.id);
    }
    for (const id of kinder) await this.containerWarten(id);
    const carousel = await this.anfrage("POST", `${this.kontoId}/media`, { media_type: "CAROUSEL", children: kinder.join(","), caption });
    await this.containerWarten(carousel.id);
    return this.veroeffentlichen(carousel.id);
  }

  async storyPosten({ bildUrl }) {
    if (this.trockenlauf) { this.protokoll.push({ art: "story", bildUrl }); return "trocken"; }
    const c = await this.anfrage("POST", `${this.kontoId}/media`, { image_url: bildUrl, media_type: "STORIES" });
    await this.containerWarten(c.id);
    return this.veroeffentlichen(c.id);
  }

  /* Letzte Beiträge samt Kommentaren und Antworten. */
  async neuesteMedien(anzahl = 12) {
    const r = await this.anfrage("GET", `${this.kontoId}/media`, {
      fields: "id,caption,timestamp,like_count,comments_count,permalink,media_type,comments.limit(50){id,text,username,timestamp,hidden,like_count,replies.limit(50){id,text,username,timestamp}}",
      limit: anzahl,
    });
    return r.data || [];
  }

  /* Auf einen Kommentar antworten. Rückgabe: ID der Antwort. */
  async kommentarBeantworten(kommentarId, text) {
    if (this.trockenlauf) { this.protokoll.push({ art: "antwort", kommentarId, text }); return "trocken"; }
    const r = await this.anfrage("POST", `${kommentarId}/replies`, { message: text });
    return r.id;
  }

  /* Eigener Nutzername (für die Erkennung eigener Kommentare). */
  async eigenerName() {
    if (this.host === "facebook") return (await this.anfrage("GET", `${this.kontoId}`, { fields: "username" })).username;
    return (await this.anfrage("GET", "me", { fields: "username" })).username;
  }
}

if (import.meta.url === `file://${process.argv[1]}` && process.argv.includes("--pruefen")) {
  const ig = new Instagram();
  ig.pruefen().then((r) => console.log(JSON.stringify(r, null, 2))).catch((e) => { console.error(e.message); process.exit(1); });
}
