/* ==========================================================================
   Tageslauf – wird stündlich von GitHub Actions gestartet.

   1. Asset-Zweig holen (Bilder, Ledger, Tagesplan, Token-Tresor)
   2. Tagesplan laden oder für heute erzeugen
   3. Alle fälligen, noch nicht veröffentlichten Einträge abarbeiten:
      schreiben → prüfen → rendern → hochladen → veröffentlichen → vermerken
   4. Zustand committen und pushen

   Optionen:  --nur-planen   Plan anzeigen, nichts erzeugen
              --nur-rendern  Inhalte erzeugen und rendern, nichts veröffentlichen (wie IG_DRY_RUN=true)
              --datum=YYYY-MM-DD  Plan eines anderen Tages (für Tests)
              --alles        alle Einträge des Tages sofort (ohne Uhrzeit-Prüfung)
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CONFIG } from "./config.mjs";
import { themenpool } from "./inhalte.mjs";
import { tagesplan, auffuellplan, ledgerLaden, ledgerSpeichern, vermerken, naechsteVariante } from "./planer.mjs";
import { beitragSchreiben, storiesSchreiben, teaserAusBeitrag, aktuellRecherchieren, reelSchreiben } from "./autor.mjs";
import { reelBauen } from "./reel.mjs";
import { beitragRendern, storyRendern, browserBeenden } from "./render.mjs";
import { Instagram } from "./instagram.mjs";
import { Hosting } from "./hosting.mjs";
import { kommentareBeantworten } from "./interaktion.mjs";
import { lernschleife } from "./insights.mjs";
import { verteilen } from "./verteilen.mjs";
import { kartenVerschicken } from "./nachrichten.mjs";
import { berichtErstellen, berichtSenden } from "./bericht.mjs";
import { abschluss as kostenAbschluss } from "./kosten.mjs";
import { wochentag } from "./zeit.mjs";
import { heuteIso, lokaleMinuten, minutenVon } from "./zeit.mjs";

const hier = path.dirname(fileURLToPath(import.meta.url));
const args = new Map(process.argv.slice(2).map((a) => { const [k, v] = a.replace(/^--/, "").split("="); return [k, v ?? true]; }));
const datum = args.get("datum") || heuteIso();
const nurPlanen = args.has("nur-planen");
const trocken = args.has("nur-rendern") || CONFIG.instagram.trockenlauf;
const alles = args.has("alles");
const auffuellen = Number(args.get("auffuellen") || 0);
const AUSGABE = path.resolve(hier, "../out", datum);

function log(...t) { console.log(new Date().toISOString().slice(11, 19), ...t); }

/* Schwarz/Weiß-Wechsel: Beiträge alternieren fortlaufend über alle Tage
   (Schachbrett im Profil), Stories alternieren innerhalb des Tages. */
const tagIndex = Math.floor(new Date(`${datum}T12:00:00Z`).getTime() / 86400000);
const varianteStory = (slot) => (Number(slot.slice(1)) - 1) % 2;

/* Plan serialisierbar machen: Themen nur als ID + Titel, Inhalte separat. */
function planSpeichern(hosting, plan) {
  hosting.jsonSchreiben(`plaene/${plan.datum}.json`, plan);
}

async function main() {
  log(`Instagram-Bot · ${datum} · Stil ${CONFIG.marke.stil} · ${trocken ? "TROCKENLAUF" : "live"}`);

  const hosting = new Hosting({ pushen: !nurPlanen }).vorbereiten();
  const ledgerPfad = path.join(hosting.stateDir, "ledger.json");
  const ledger = ledgerLaden(ledgerPfad);
  const pool = themenpool();
  const poolIndex = new Map(pool.map((t) => [t.id, t]));

  /* Gelernte Strategie (Formate, Fächer, Uhrzeiten) aus der Lernschleife. */
  const strategie = hosting.jsonLesen("strategie.json", null);

  /* Plan des Tages – nur einmal erzeugen, danach fortschreiben. */
  let plan = hosting.jsonLesen(`plaene/${datum}.json`, null);
  if (!plan) {
    const p = tagesplan(datum, ledger, pool, strategie);
    plan = {
      datum: p.datum, erzeugt: new Date().toISOString(), anlass: p.anlass || null,
      beitraege: p.beitraege.map((b) => ({ slot: b.slot, zeit: b.zeit, format: b.format, themaId: b.thema?.id || null, themaTitel: b.thema?.titel || null, fach: b.thema?.fach || null, lang: b.lang, status: "geplant" })),
      stories: p.stories.map((s) => ({ slot: s.slot, zeit: s.zeit, art: s.art, themaId: s.thema?.id || null, beitragSlot: s.beitragSlot || null, tageBisExamen: s.tageBisExamen, status: "geplant" })),
    };
    planSpeichern(hosting, plan);
    log(`Tagesplan erzeugt: ${plan.beitraege.length} Beiträge, ${plan.stories.length} Stories`);
  }
  if (nurPlanen) {
    for (const b of plan.beitraege) log(`  ${b.zeit} Beitrag ${b.slot} ${b.format} ${b.themaTitel || ""} [${b.status}]`);
    for (const s of plan.stories) log(`  ${s.zeit} Story ${s.slot} ${s.art} ${s.beitragSlot ? "→ " + s.beitragSlot : poolIndex.get(s.themaId)?.titel || ""} [${s.status}]`);
    return;
  }

  if (auffuellen > 0) { await auffuellenLauf(auffuellen, { hosting, ledger, ledgerPfad, pool, poolIndex, strategie }); return; }

  const jetzt = lokaleMinuten();
  const faellig = (e) => e.status !== "veroeffentlicht" && (alles || minutenVon(e.zeit) <= jetzt);
  const beitraegeFaellig = plan.beitraege.filter(faellig);
  const storiesFaellig = plan.stories.filter(faellig);

  /* Instagram-Verbindung und Kontingent. */
  const ig = new Instagram({ trockenlauf: trocken, tresorDatei: path.join(hosting.stateDir, "token.enc") });
  let kontingent = { genutzt: 0, maximum: 100 };
  if (!trocken) {
    ig.tresorLaden();
    const { konto, limit } = await ig.pruefen();
    kontingent = limit;
    log(`Verbunden mit @${konto.username} · Kontingent ${limit.genutzt}/${limit.maximum}`);
    if (await ig.tokenAuffrischen()) log("Zugriffstoken verlängert und im Tresor gespeichert.");

    /* Interaktion: neue Kommentare beantworten – bei jedem Lauf, unabhängig vom Plan. */
    if (CONFIG.interaktion.aktiv) {
      try {
        const r = await kommentareBeantworten(ig, ledger, { log });
        if (r.beantwortet) { ledgerSpeichern(ledgerPfad, ledger); hosting.commit(`Kommentare beantwortet ${datum}`); await hosting.push(); }
        log(`Interaktion: ${r.beantwortet} Antworten (${r.geprueft} Beiträge, ${r.kommentare ?? 0} Kommentare geprüft)`);
      } catch (e) {
        console.error(`  ✗ Interaktion: ${e.message}`);
      }
    }
    /* Schlüsselwort-Nachrichten: Spickzettel-Karten an Kommentierende. */
    try {
      const karten = new Map((ledger.veroeffentlicht || []).filter((e) => e.art === "beitrag" && e.karteUrl && e.medienId).map((e) => [e.medienId, { bildUrl: e.karteUrl, titel: e.titel }]));
      const r = await kartenVerschicken(ig, ledger, karten, { log });
      if (r.gesendet) { ledgerSpeichern(ledgerPfad, ledger); hosting.commit(`Karten verschickt ${datum}`); await hosting.push(); }
    } catch (e) {
      console.error(`  ✗ Nachrichten: ${e.message}`);
    }
    /* Lernschleife: einmal am Tag beim ersten Lauf (Insights, Strategie, Follower). */
    const wochenStand = hosting.jsonLesen("lernschleife.json", { datum: null });
    if (wochenStand.datum !== datum) {
      try {
        await lernschleife(ig, ledger, hosting, { log });
        hosting.jsonSchreiben("lernschleife.json", { datum });
        ledgerSpeichern(ledgerPfad, ledger);
        hosting.commit(`Lernschleife ${datum}`); await hosting.push();
      } catch (e) { console.error(`  ✗ Lernschleife: ${e.message}`); }
    }
    /* Wochenbericht: montags beim ersten Lauf. */
    const berichtStand = hosting.jsonLesen("bericht.json", { woche: null });
    const kw = wochenKennung(datum);
    if (wochentag(new Date(`${datum}T12:00:00Z`)) === CONFIG.bericht.wochentag && berichtStand.woche !== kw) {
      try {
        const kostenWoche = hosting.jsonLesen("kosten.json", { wochen: {} });
        const text = berichtErstellen({ ledger, strategie: hosting.jsonLesen("strategie.json", null), follower: hosting.jsonLesen("follower.json", []), kosten: kostenWoche.wochen?.[wochenKennung(vorwoche(datum))] || kostenWoche.wochen?.[kw], datum, fehler: hosting.jsonLesen("fehler.json", []).slice(-10), hinweise: berichtHinweise() });
        hosting.jsonSchreiben(`berichte/${kw}.txt`, { text });
        const r = await berichtSenden(text, `Instagram-Bot · Wochenbericht ${kw}`);
        hosting.jsonSchreiben("bericht.json", { woche: kw, gesendet: r.gesendet, grund: r.grund || null });
        log(`Wochenbericht ${kw}: ${r.gesendet ? "per E-Mail gesendet" : `nur abgelegt (${r.grund})`}`);
      } catch (e) { console.error(`  ✗ Wochenbericht: ${e.message}`); }
    }
  }
  if (!beitraegeFaellig.length && !storiesFaellig.length) { log("Nichts fällig."); return; }
  const frei = () => kontingent.maximum - kontingent.genutzt - CONFIG.instagram.sicherheitsabstandLimit;

  /* Zuerst die Beiträge (wichtiger), dann die Stories. */
  const fertigeBeitraege = new Map();   // slot → Beitrag (für Teaser)
  let fehler = 0;

  for (const eintrag of beitraegeFaellig) {
    if (frei() <= 0) { log("Tageskontingent erschöpft – Beitrag verschoben."); break; }
    try {
      log(`Beitrag ${eintrag.slot} (${eintrag.format}) ${eintrag.themaTitel || ""}`);
      if (eintrag.format === "reel") {
        let reel = hosting.jsonLesen(`inhalte/${datum}-${eintrag.slot}.json`, null);
        if (!reel) {
          reel = await reelSchreiben({ thema: eintrag.themaId ? poolIndex.get(eintrag.themaId) : null, datum, lang: Boolean(eintrag.lang), anlass: plan.anlass });
          reel.slug = `${datum}-${eintrag.slot}`;
          hosting.jsonSchreiben(`inhalte/${datum}-${eintrag.slot}.json`, reel);
        }
        const varianteReel = naechsteVariante(ledger);
        const r = await reelBauen(reel, path.join(AUSGABE, "reels", eintrag.slot), { variante: varianteReel });
        const [videoUrl, coverUrl] = await hosting.veroeffentlichen([r.video, r.cover], datum, `Reel ${datum} ${eintrag.slot}`);
        const caption = `${reel.caption}\n\n${reel.hashtags.join(" ")}`;
        const medienId = await ig.reelPosten({ videoUrl, coverUrl, caption });
        kontingent.genutzt += 1;
        eintrag.status = "veroeffentlicht"; eintrag.medienId = medienId; eintrag.veroeffentlicht = new Date().toISOString();
        vermerken(ledger, { datum, art: "beitrag", slot: eintrag.slot, format: "reel", thema: reel.themaId, fach: reel.fach, titel: reel.szenen[0]?.titel || reel.kurztitel, hookTyp: reel.hookTyp, medienId, variante: varianteReel, veroeffentlicht: new Date().toISOString() });
        eintrag.kanaele = await verteilen({ art: "reel", videoUrl, videoPfad: r.video, bildUrls: [coverUrl], titel: reel.kurztitel || reel.szenen[0]?.titel, text: caption, hashtags: reel.hashtags }, { log, trockenlauf: trocken });
        fertigeBeitraege.set(eintrag.slot, { ...reel, folien: [{ art: "titel", titel: reel.szenen[0]?.titel, icon: reel.szenen[0]?.icon }], kurztitel: reel.kurztitel });
        ledgerSpeichern(ledgerPfad, ledger); planSpeichern(hosting, plan);
        hosting.commit(`Veröffentlicht: Reel ${datum} ${eintrag.slot}`); await hosting.push();
        log(`  ✓ Reel ${medienId} (${r.dauer.toFixed(0)} s, Stimme: ${r.anbieter})`);
        continue;
      }
      let beitrag = hosting.jsonLesen(`inhalte/${datum}-${eintrag.slot}.json`, null);
      if (!beitrag) {
        const thema = eintrag.themaId ? poolIndex.get(eintrag.themaId) : null;
        let recherche = null, wochenThemen = null;
        if (eintrag.format === "aktuell") {
          const bisher = (ledger.veroeffentlicht || []).filter((e) => e.format === "aktuell").slice(-12).map((e) => e.titel);
          recherche = await aktuellRecherchieren(datum, bisher);
          log(`  Recherche: ${recherche.titel || "(ohne Titel)"} · ${recherche.quellen.length} Quellen`);
        }
        if (eintrag.format === "wochenrueckblick") {
          const grenze = new Date(new Date(`${datum}T12:00:00Z`).getTime() - 7 * 86400000).toISOString().slice(0, 10);
          wochenThemen = (ledger.veroeffentlicht || []).filter((e) => e.art === "beitrag" && e.datum >= grenze).map((e) => e.titel);
          if (!wochenThemen.length) wochenThemen = pool.filter((t) => t.prioritaet === "hoch").slice(0, 5).map((t) => t.titel);
        }
        beitrag = await beitragSchreiben({ format: eintrag.format, thema, datum, recherche, wochenThemen, anlass: eintrag.format === "anlass" ? plan.anlass : null, strategie });
        beitrag.slug = `${datum}-${eintrag.slot}`;
        hosting.jsonSchreiben(`inhalte/${datum}-${eintrag.slot}.json`, beitrag);
      }
      const variante = naechsteVariante(ledger);
      const bilder = await beitragRendern(beitrag, path.join(AUSGABE, "beitraege"), { variante });
      const urls = await hosting.veroeffentlichen(bilder, datum, `Beitrag ${datum} ${eintrag.slot}`);
      const caption = `${beitrag.caption}\n\n${beitrag.hashtags.join(" ")}`;
      const medienId = await ig.beitragPosten({ bildUrls: urls, caption });
      kontingent.genutzt += 1;
      eintrag.status = "veroeffentlicht";
      eintrag.medienId = medienId;
      eintrag.veroeffentlicht = new Date().toISOString();
      const karteIndex = beitrag.folien.findIndex((f) => f.art === "karte");
      vermerken(ledger, { datum, art: "beitrag", slot: eintrag.slot, format: eintrag.format, thema: beitrag.themaId, fach: beitrag.fach, titel: beitrag.folien[0].titel, hookTyp: beitrag.hookTyp, medienId, variante, veroeffentlicht: new Date().toISOString(), karteUrl: karteIndex >= 0 ? urls[karteIndex] : null });
      fertigeBeitraege.set(eintrag.slot, beitrag);
      /* Auf weitere Kanäle verteilen (Threads, Facebook, LinkedIn …). */
      eintrag.kanaele = await verteilen({ art: "beitrag", bildUrls: urls, bildPfade: bilder, titel: beitrag.folien[0].titel, text: caption, hashtags: beitrag.hashtags }, { log, trockenlauf: trocken });
      ledgerSpeichern(ledgerPfad, ledger);
      planSpeichern(hosting, plan);
      hosting.commit(`Veröffentlicht: Beitrag ${datum} ${eintrag.slot}`);
      await hosting.push();
      log(`  ✓ ${medienId} (${urls.length} Folien)`);
    } catch (e) {
      fehler++;
      eintrag.fehler = `${new Date().toISOString()} ${e.message}`;
      planSpeichern(hosting, plan);
      console.error(`  ✗ Beitrag ${eintrag.slot}: ${e.message}`);
    }
  }

  /* Stories: Teaser aus fertigen Beiträgen, alle anderen in einem KI-Aufruf. */
  const eigenstaendig = storiesFaellig.filter((s) => s.art !== "teaser");
  let geschrieben = new Map();
  if (eigenstaendig.length) {
    const vorhanden = eigenstaendig.map((s) => [s.slot, hosting.jsonLesen(`inhalte/${datum}-${s.slot}.json`, null)]);
    const offen = vorhanden.filter(([, v]) => !v).map(([slot]) => eigenstaendig.find((s) => s.slot === slot));
    for (const [slot, v] of vorhanden) if (v) geschrieben.set(slot, v);
    if (offen.length) {
      try {
        const neu = await storiesSchreiben(offen.map((s) => ({ slot: s.slot, art: s.art, thema: s.themaId ? poolIndex.get(s.themaId) : null, tageBisExamen: s.tageBisExamen })), datum);
        for (const s of neu) { hosting.jsonSchreiben(`inhalte/${datum}-${s.slot}.json`, s); geschrieben.set(s.slot, s); }
      } catch (e) {
        fehler++;
        console.error(`  ✗ Stories schreiben: ${e.message}`);
      }
    }
  }

  for (const eintrag of storiesFaellig) {
    if (frei() <= 0) { log("Tageskontingent erschöpft – Story verschoben."); break; }
    try {
      let story;
      if (eintrag.art === "teaser") {
        let beitrag = fertigeBeitraege.get(eintrag.beitragSlot) || hosting.jsonLesen(`inhalte/${datum}-${eintrag.beitragSlot}.json`, null);
        const b = plan.beitraege.find((x) => x.slot === eintrag.beitragSlot);
        if (!beitrag || b?.status !== "veroeffentlicht") { log(`Story ${eintrag.slot}: Beitrag ${eintrag.beitragSlot} noch nicht veröffentlicht – später.`); continue; }
        story = teaserAusBeitrag(beitrag, eintrag.slot);
      } else {
        story = geschrieben.get(eintrag.slot);
        if (!story) continue;
        if (story.beanstandet) { log(`Story ${eintrag.slot} beanstandet: ${story.beanstandet.join("; ")} – übersprungen.`); eintrag.status = "uebersprungen"; continue; }
      }
      const bild = await storyRendern(story, path.join(AUSGABE, "stories", `${datum}-${eintrag.slot}-${story.art}.jpg`), { variante: varianteStory(eintrag.slot) });
      const [url] = await hosting.veroeffentlichen([bild], datum, `Story ${datum} ${eintrag.slot}`);
      const medienId = await ig.storyPosten({ bildUrl: url });
      kontingent.genutzt += 1;
      eintrag.status = "veroeffentlicht";
      eintrag.medienId = medienId;
      eintrag.veroeffentlicht = new Date().toISOString();
      vermerken(ledger, { datum, art: "story", slot: eintrag.slot, storyArt: story.art, thema: story.themaId || eintrag.themaId || null, fach: story.fach, titel: story.titel || story.text || "", medienId });
      ledgerSpeichern(ledgerPfad, ledger);
      planSpeichern(hosting, plan);
      hosting.commit(`Veröffentlicht: Story ${datum} ${eintrag.slot}`);
      await hosting.push();
      log(`  ✓ Story ${eintrag.slot} ${story.art} → ${medienId}`);
    } catch (e) {
      fehler++;
      eintrag.fehler = `${new Date().toISOString()} ${e.message}`;
      planSpeichern(hosting, plan);
      console.error(`  ✗ Story ${eintrag.slot}: ${e.message}`);
    }
  }

  /* Kosten der Woche und Fehler für den Bericht festhalten. */
  const kosten = kostenAbschluss();
  if (kosten.aufrufe) {
    const k = hosting.jsonLesen("kosten.json", { wochen: {} });
    const kw = wochenKennung(datum);
    const w = k.wochen[kw] || { usd: 0, aufrufe: 0, cacheSumme: 0 };
    w.usd += kosten.usd; w.aufrufe += kosten.aufrufe; w.cacheSumme += kosten.cacheAnteil * kosten.aufrufe; w.cacheAnteil = w.cacheSumme / w.aufrufe;
    k.wochen[kw] = w;
    hosting.jsonSchreiben("kosten.json", k);
  }
  const fehlerListe = hosting.jsonLesen("fehler.json", []);
  for (const e of [...plan.beitraege, ...plan.stories]) if (e.fehler && !fehlerListe.includes(e.fehler)) fehlerListe.push(e.fehler);
  hosting.jsonSchreiben("fehler.json", fehlerListe.slice(-50));

  const geloescht = hosting.aufraeumen();
  if (geloescht) hosting.commit(`Alte Bilder entfernt (${geloescht} Tage)`);
  planSpeichern(hosting, plan);
  hosting.commit(`Zustand ${datum}`);
  await hosting.push();
  if (trocken && ig.protokoll.length) fs.writeFileSync(path.join(AUSGABE, "trockenlauf.json"), JSON.stringify(ig.protokoll, null, 2));
  log(`Fertig · ${plan.beitraege.filter((b) => b.status === "veroeffentlicht").length}/${plan.beitraege.length} Beiträge, ${plan.stories.filter((s) => s.status === "veroeffentlicht").length}/${plan.stories.length} Stories · Fehler: ${fehler}`);
  if (fehler) process.exitCode = 1;
}

/* Auffüllen: n Beiträge am Stück veröffentlichen (Feed füllen). Fortschritt in
   state/auffuellen.json – ein Abbruch (z. B. leeres Guthaben) wird beim nächsten
   Aufruf mit derselben Zahl fortgesetzt. Keine Reels, keine Stories. */
async function auffuellenLauf(ziel, { hosting, ledger, ledgerPfad, pool, poolIndex, strategie }) {
  const stand = hosting.jsonLesen("auffuellen.json", { ziel: 0, fertig: 0, seed: datum });
  if (stand.ziel !== ziel) { stand.ziel = ziel; stand.fertig = Math.min(stand.fertig, ziel); stand.seed = stand.seed || datum; }
  if (stand.fertig >= ziel) { log(`Auffüllen: ${ziel} Beiträge sind bereits veröffentlicht.`); return; }
  const ig = new Instagram({ trockenlauf: trocken, tresorDatei: path.join(hosting.stateDir, "token.enc") });
  if (!trocken) { ig.tresorLaden(); const { konto, limit } = await ig.pruefen(); log(`Auffüllen ${stand.fertig}/${ziel} · @${konto.username} · Kontingent ${limit.genutzt}/${limit.maximum}`); if (limit.maximum - limit.genutzt < 3) { log("Tageskontingent erschöpft – später weiter."); return; } }
  const plan = auffuellplan(ziel, ledger, pool, stand.seed);
  let fehler = 0, versuche = 0;
  for (let i = stand.fertig; i < ziel; i++) {
    const eintrag = plan[i];
    const slot = `${datum}-${eintrag.slot}`;
    const variante = naechsteVariante(ledger);
    try {
      log(`Auffüllen ${i + 1}/${ziel}: ${eintrag.format} · ${eintrag.thema.titel}`);
      let beitrag = hosting.jsonLesen(`inhalte/${slot}.json`, null);
      if (!beitrag) {
        beitrag = await beitragSchreiben({ format: eintrag.format, thema: eintrag.thema, datum, strategie });
        beitrag.slug = slot;
        hosting.jsonSchreiben(`inhalte/${slot}.json`, beitrag);
      }
      const bilder = await beitragRendern(beitrag, path.join(AUSGABE, "auffuellen"), { variante });
      const urls = await hosting.veroeffentlichen(bilder, datum, `Auffüllen ${slot}`);
      const caption = `${beitrag.caption}\n\n${beitrag.hashtags.join(" ")}`;
      const medienId = await ig.beitragPosten({ bildUrls: urls, caption });
      const karteIndex = beitrag.folien.findIndex((f) => f.art === "karte");
      vermerken(ledger, { datum, art: "beitrag", slot: eintrag.slot, format: eintrag.format, thema: beitrag.themaId, fach: beitrag.fach, titel: beitrag.folien[0].titel, hookTyp: beitrag.hookTyp, medienId, variante, veroeffentlicht: new Date().toISOString(), karteUrl: karteIndex >= 0 ? urls[karteIndex] : null });
      stand.fertig = i + 1;
      versuche = 0;
      hosting.jsonSchreiben("auffuellen.json", stand);
      ledgerSpeichern(ledgerPfad, ledger);
      hosting.commit(`Auffüllen ${i + 1}/${ziel}`); await hosting.push();
      log(`  ✓ ${medienId}`);
      await verteilen({ art: "beitrag", bildUrls: urls, bildPfade: bilder, titel: beitrag.folien[0].titel, text: caption, hashtags: beitrag.hashtags }, { log, trockenlauf: trocken });
      if (i + 1 < ziel && !trocken) await new Promise((r) => setTimeout(r, 25000));
    } catch (e) {
      fehler++;
      console.error(`  ✗ Auffüllen ${i + 1}: ${e.message}`);
      if (/credit|billing|insufficient|402|quota/i.test(e.message)) { console.error("Guthaben oder Kontingent erschöpft – Auffüllen wird beim nächsten Aufruf fortgesetzt."); break; }
      if (fehler >= 4) { console.error("Vier Fehler – Auffüllen abgebrochen, Fortsetzung beim nächsten Aufruf."); break; }
      /* Denselben Beitrag noch einmal versuchen (ein gespeicherter Entwurf wird
         verworfen, falls er der Grund war), damit kein Platz übersprungen wird. */
      if (versuche++ < 2) { fs.rmSync(path.join(hosting.stateDir, `inhalte/${slot}.json`), { force: true }); i--; }
    }
  }
  hosting.commit(`Auffüllen Stand ${stand.fertig}/${ziel}`); await hosting.push();
  log(`Auffüllen: ${stand.fertig}/${ziel} veröffentlicht · Fehler: ${fehler}`);
  if (stand.fertig < ziel) process.exitCode = 1;
}

function wochenKennung(iso) {
  const d = new Date(`${iso}T12:00:00Z`);
  const tag = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - tag + 3);
  const erster = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const kw = 1 + Math.round(((d - erster) / 86400000 - 3 + ((erster.getUTCDay() + 6) % 7)) / 7);
  return `${d.getUTCFullYear()}-W${String(kw).padStart(2, "0")}`;
}
function vorwoche(iso) { return new Date(new Date(`${iso}T12:00:00Z`).getTime() - 7 * 86400000).toISOString().slice(0, 10); }
function berichtHinweise() {
  const h = [];
  if (CONFIG.verteilen.linkedin.token) h.push("LinkedIn-Token läuft nach 60 Tagen ab – bei Fehlern im Bericht erneuern.");
  if (!CONFIG.reel.elevenlabsKey) h.push("Reels sprechen mit der kostenlosen Piper-Stimme; ElevenLabs-Schlüssel schaltet die natürlichere Stimme frei.");
  return h;
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1; })
  .finally(() => browserBeenden());
