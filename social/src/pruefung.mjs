/* ==========================================================================
   Qualitäts- und Eigenständigkeitsprüfung.

   1. Kein 1:1-Text: Jede Folge von N Wörtern des Beitrags darf nicht wörtlich
      in den Webseitendaten vorkommen (Shingle-Vergleich über src/data).
   2. Keine Fallnamen: Firmen-/Personennamen aus den Fällen der Webseite sind
      gesperrt (automatisch aus den Daten extrahiert + Sperrliste).
   3. Keine Quellenbezüge (Seite, Folie, Mitschrift, Fallnummer).
   4. Formale Grenzen: Überschriften, Folientexte, Caption, Hashtags.
   Rückgabe: { ok, fehler: [...] } – der Autor bekommt die Fehler als Feedback
   und formuliert neu.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const hier = path.dirname(fileURLToPath(import.meta.url));
const DATEN = path.resolve(hier, "../../src/data");

export const SHINGLE_LAENGE = 7;   // Wörter
export const GRENZEN = {
  titelZeichen: 110,
  folienTextZeichen: 420,
  storyTextZeichen: 260,
  captionZeichen: 2200,
  hashtagsMax: 30,
  folienMin: 3,
  folienMax: 10,
};

const SPERRLISTE_DATEI = path.resolve(hier, "../config/namen-sperrliste.json");

export function normalisieren(text) {
  return String(text)
    .toLowerCase()
    .replace(/[„“"'»«‚‘’]/g, " ")
    .replace(/[^a-z0-9äöüß§%€.,\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function woerter(text) {
  return normalisieren(text).split(" ").filter((w) => w.length > 0);
}

/* FNV-1a, 32 Bit – klein genug für ein Set aus Zahlen. */
function hash(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return h >>> 0;
}

function shingles(text, n = SHINGLE_LAENGE) {
  const w = woerter(text);
  const out = [];
  for (let i = 0; i + n <= w.length; i++) out.push(w.slice(i, i + n).join(" "));
  return out;
}

let korpusCache = null;

/* Baut einmal je Prozess den Shingle-Index über alle Datendateien der Webseite. */
export function korpus() {
  if (korpusCache) return korpusCache;
  const index = new Set();
  const namen = new Set();
  const dateien = [];
  const lauf = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) lauf(p);
      else if (/\.(js|mjs|md|json)$/.test(e.name)) dateien.push(p);
    }
  };
  lauf(DATEN);
  const namenMuster = /\b([A-ZÄÖÜ][a-zäöüß]{2,}(?:[- ][A-ZÄÖÜ][a-zäöüß]{2,})?)[- ](?:OHG|KG|GmbH|AG|GbR|UG|SE|e\.?\s?K\.?)\b/g;
  const anredeMuster = /\b(?:Herr|Frau|Unternehmer(?:in)?|Kaufmann|Kauffrau|Gesellschafter(?:in)?|Steuerpflichtige[r]?|Mandant(?:in)?)\s+([A-ZÄÖÜ][a-zäöüß]{3,})\b/g;
  for (const datei of dateien) {
    const text = fs.readFileSync(datei, "utf8");
    for (const s of shingles(text)) index.add(hash(s));
    for (const m of text.matchAll(namenMuster)) namen.add(m[1]);
    for (const m of text.matchAll(anredeMuster)) namen.add(m[1]);
  }
  /* Häufige Gattungswörter, die das Muster fälschlich als Namen erfasst. */
  const allgemein = new Set(["Bank", "Kunden", "Kunde", "Lieferant", "Käufer", "Verkäufer", "Betrieb", "Muster", "Beispiel", "Mutter", "Tochter", "Erwerber", "Eigentümer", "Vermieter", "Mieter", "Alt", "Neu", "Beteiligung", "Holding", "Vertrieb", "Handel", "Bau", "Immobilien", "Verwaltung", "Beratung", "Personen", "Kapital", "Komplementär", "Kommanditist"]);
  for (const n of allgemein) namen.delete(n);
  /* Gattungsbegriffe (Endungen -ung, -keit, -sätze …) und Artikel sind keine Namen. */
  for (const n of [...namen]) {
    const letztes = n.split(/[- ]/).pop();
    if (/^(Die|Der|Das|Ein|Eine|Diese|Jede)\b/.test(n) || /(ung|keit|heit|sätze|künfte|gewinn|züge|zeit|zinsen|verlust|kosten|wert|steuer|bilanz|konto|vermögen|recht|schaft|ner|ung)$/i.test(letztes) || n.length < 4) namen.delete(n);
  }
  let sperrliste = [];
  if (fs.existsSync(SPERRLISTE_DATEI)) sperrliste = JSON.parse(fs.readFileSync(SPERRLISTE_DATEI, "utf8"));
  for (const n of sperrliste) namen.add(n);
  korpusCache = { index, namen: [...namen], dateien: dateien.length };
  return korpusCache;
}

/* Liefert alle wörtlichen Übernahmen (7 Wörter am Stück) eines Textes. */
export function uebernahmen(text, k = korpus()) {
  const treffer = [];
  for (const s of shingles(text)) if (k.index.has(hash(s))) treffer.push(s);
  return [...new Set(treffer)];
}

export function gesperrteNamen(text, k = korpus()) {
  const t = ` ${String(text)} `;
  return k.namen.filter((n) => new RegExp(`(^|[^a-zäöüß])${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-zäöüß]|$)`, "u").test(t));
}

const QUELLENBEZUG = /\b(laut Quelle|Quelle|Seite \d+|S\. \d+|Folie|Mitschrift|Skript|Originalfall|Fall \d{2,3}|Hausaufgabe|Musterlösung der Finanzverwaltung|Frame)\b/i;

/* Normen sind wörtlich erlaubt – sie sind Gesetzestext-Zitate, keine Übernahme.
   Deshalb werden Norm-Ketten vor dem Shingle-Vergleich neutralisiert. */
function ohneNormen(text) {
  return String(text).replace(/§§?\s*[\d]+[a-z]?(?:\s*(?:Abs\.|Absatz)\s*\d+[a-z]?)?(?:\s*(?:S\.|Satz)\s*\d+)?(?:\s*(?:Nr\.|Nummer)\s*\d+[a-z]?)?(?:\s*(?:Buchst\.|Hs\.)\s*[a-z0-9]+\)?)?\s*(?:HGB|EStG|AO|UStG|KStG|GewStG|ErbStG|BewG|UmwStG|AStG|EStDV|EStR|KStR|UStAE|BGB|GrEStG|FGO|SolZG|DBA)\b/g, " NORM ");
}

function alleTexte(beitrag) {
  const teile = [];
  for (const f of beitrag.folien || []) {
    teile.push(f.titel || "", f.text || "", ...(f.punkte || []), ...(f.schritte || []).map((s) => (typeof s === "string" ? s : `${s.titel || ""} ${s.text || ""}`)), f.links?.text || "", f.rechts?.text || "", ...(f.links?.punkte || []), ...(f.rechts?.punkte || []));
  }
  teile.push(beitrag.caption || "");
  for (const s of beitrag.stories || []) teile.push(s.titel || "", s.text || "", ...(s.optionen || []));
  return teile.filter(Boolean);
}

export function pruefeBeitrag(beitrag, opt = {}) {
  const fehler = [];
  const k = opt.korpus || korpus();
  const texte = alleTexte(beitrag);
  const gesamt = texte.join("\n");

  /* 1. Wörtliche Übernahmen */
  const doppelt = uebernahmen(ohneNormen(gesamt), k);
  if (doppelt.length) fehler.push(`Wörtliche Übernahme aus der Webseite (bitte in eigenen Worten formulieren): ${doppelt.slice(0, 3).map((d) => `„${d}“`).join(" · ")}`);

  /* 2. Namen aus den Fällen */
  const namen = gesperrteNamen(gesamt, k);
  if (namen.length) fehler.push(`Gesperrte Fallnamen verwendet (bitte andere, frei erfundene Namen): ${[...new Set(namen)].join(", ")}`);

  /* 3. Quellenbezüge */
  if (QUELLENBEZUG.test(gesamt)) fehler.push(`Bezug auf Kursquelle/Seiten/Fallnummern entfernen: ${gesamt.match(QUELLENBEZUG)[0]}`);

  /* 4. Formales */
  if (beitrag.folien) {
    if (beitrag.folien.length < GRENZEN.folienMin || beitrag.folien.length > GRENZEN.folienMax) fehler.push(`Folienzahl ${beitrag.folien.length} außerhalb ${GRENZEN.folienMin}–${GRENZEN.folienMax}`);
    beitrag.folien.forEach((f, i) => {
      if ((f.titel || "").length > GRENZEN.titelZeichen) fehler.push(`Folie ${i + 1}: Titel zu lang (${f.titel.length} > ${GRENZEN.titelZeichen})`);
      const textLaenge = (f.text || "").length + (f.punkte || []).join(" ").length + (f.schritte || []).map((s) => (typeof s === "string" ? s : `${s.titel} ${s.text}`)).join(" ").length;
      if (textLaenge > GRENZEN.folienTextZeichen) fehler.push(`Folie ${i + 1}: Text zu lang (${textLaenge} > ${GRENZEN.folienTextZeichen} Zeichen)`);
    });
    if (!beitrag.folien[0]?.titel) fehler.push("Folie 1 braucht einen Titel (die Frage/den Aufhänger)");
  }
  if (beitrag.caption != null) {
    if (beitrag.caption.length > GRENZEN.captionZeichen) fehler.push(`Caption zu lang (${beitrag.caption.length})`);
    if ((beitrag.hashtags || []).length > GRENZEN.hashtagsMax) fehler.push("Zu viele Hashtags");
  }
  for (const s of beitrag.stories || []) {
    const l = (s.text || "").length;
    if (l > GRENZEN.storyTextZeichen) fehler.push(`Story „${s.titel || s.art}“: Text zu lang (${l} > ${GRENZEN.storyTextZeichen})`);
  }

  return { ok: fehler.length === 0, fehler };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const k = korpus();
  console.log(`Korpus: ${k.dateien} Dateien, ${k.index.size} Shingles, ${k.namen.length} gesperrte Namen`);
  console.log(k.namen.slice(0, 40).join(", "));
}
