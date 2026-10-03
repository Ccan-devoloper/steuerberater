/* ==========================================================================
   Verbindliche Quellenregeln für alle Social-Inhalte.

   Die Lernunterlagen in src/data (Skripte, Kurzskripte, Lehrgangs-
   unterlagen) sind fachliche Grundlage, nie Vorlage. Was im Kanal erscheint,
   ist eigenständig formuliert und darf nicht als Bearbeitung einer
   bestimmten Unterlage wiedererkennbar sein.

   Diese Datei ist die einzige Fassung der Regeln: Der Autor-Prompt zitiert
   QUELLENREGELN wörtlich, pruefung.mjs ruft quellenregelBefunde() für jeden
   Beitrag auf, und social/QUELLENREGELN.md erläutert sie. Eine Änderung
   hier gilt damit überall.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const hier = path.dirname(fileURLToPath(import.meta.url));
const DATEN = path.resolve(hier, "../../src/data");

export const QUELLENREGELN = Object.freeze([
  "Kein Wortlaut: Keine Satzfolge aus einer Unterlage übernehmen – auch nicht mit ausgetauschten Einzelwörtern. Ab acht aufeinanderfolgenden übereinstimmenden Wörtern gilt ein Text als übernommen (Gesetzeszitate ausgenommen).",
  "Keine Gliederung der Unterlage: Überschriften, Kapitel- und Abschnittstitel, Gliederungsnummern (z. B. 1.5.2.1) sowie „Teil/Kapitel/Abschnitt …“ der Vorlage erscheinen nicht. Titel und Aufbau des Beitrags sind eigene.",
  "Keine Eigenschöpfungen der Verfasser: Selbst benannte Schemata, Methoden, Merkwörter, Kürzel, Eselsbrücken und Gliederungsetiketten (z. B. „EIS-Methode“, „Vorspann“) werden weder übernommen noch umbenannt oder umschrieben. Erklärt wird der Inhalt in eigener Struktur.",
  "Keine Herkunftsangaben: Keine Namen von Verfassern, Dozenten, Anbietern oder Lehrgängen, keine Seiten-, Folien-, Fall- oder Randnummern der Unterlage.",
  "Eigene Beispiele: Sachverhalte, Namen, Beträge und Zahlenfolgen werden frei erfunden. Beispiele und Fälle der Unterlage werden nicht nacherzählt, auch nicht mit geänderten Zahlen.",
  "Frei ist der Rechtsstoff: Normen, Tatbestandsmerkmale, Rechtsfolgen, Definitionen des Gesetzes und der Rechtsprechung sowie die aus dem Gesetz folgende Prüfungsreihenfolge dürfen verwendet werden – in eigenen Worten.",
]);

/* ---------- Index der Quellen (lazy, einmal pro Prozess) ---------- */

const TITELWORTE = new Set([
  "dr", "prof", "ra", "stb", "wp", "diplom", "finanzwirt", "finanzwirtin", "fh", "steuerberater",
  "steuerberaterin", "steuerberater:in", "regierungsdirektor", "regierungsdirektorin", "rechtsanwalt",
  "rechtsanwältin", "köln", "und", "lehrgangsunterlage", "amtliche", "prüfungsaufgabe", "der",
  "steuerberaterprüfung", "ohne", "musterlösung", "br",
]);

/* Gliederungspräfixe („C.“, „B. IV.“, „1.5.2“, „II.“) gehören nicht zur
   Überschrift; ohne sie wäre „C. Pensionszusagen …“ als Titel frei. */
const PRAEFIX = /^\s*(?:(?:[A-Za-z]|[IVXivx]{1,5})[.)]|\d{1,2}(?:\.\d{1,2})*\.?)\s+/;
const ohnePraefix = (s) => {
  let x = String(s || "");
  for (let i = 0; i < 4 && PRAEFIX.test(x); i++) x = x.replace(PRAEFIX, "");
  return x;
};
export const normal = (s) => ohnePraefix(s)
  .toLowerCase()
  .replace(/[„“"'’‚‘»«()[\]{}:;,.!?–—-]/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const unescape = (s) => s.replace(/\\"/g, "\"").replace(/\\n/g, " ").replace(/\\u00a0/g, " ");

/* Normzitate („§ 32b Abs. 1 S. 1 Nr. 3 EStG“) sind Rechtsstoff, keine
   Gliederung eines Verfassers. Eine Überschrift zählt nur mit mindestens
   vier Wörtern jenseits von Normbestandteilen; kürzere sind Fachbegriffe
   („Anschaffungs- und Herstellungskosten“). */
const NORMWORT = /^(?:§+|art|artikel|abs|s|satz|nr|buchst|lit|tz|rz|i|v|m|d|f|ff|\d+[a-z]?|[ivx]+|estg|kstg|ao|ustg|hgb|gewstg|erbstg|bewg|umwstg|astg|estdv|estr|kstr|ustae|aeao|dba|oecd|ma|gg|bgb|grestg|lstdv|gmbhg|aktg|bmf|eu|ewr)$/;
const substanzWorte = (n) => n.split(" ").filter((w) => w && !NORMWORT.test(w)).length;

let cache = null;
export function quellenIndex() {
  if (cache) return cache;
  const ueberschriften = new Set();
  const verfasser = new Set();
  const dateien = [];
  const lauf = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) lauf(p);
      else if (/\.(js|mjs|json)$/.test(e.name)) dateien.push(p);
    }
  };
  if (fs.existsSync(DATEN)) lauf(DATEN);
  const titelMuster = [
    /\btitle"?\s*:\s*"((?:[^"\\]|\\.){12,200})"/g,
    /\btyp"?\s*:\s*"titel"\s*,\s*"?text"?\s*:\s*"((?:[^"\\]|\\.){12,200})"/g,
    /\btext"?\s*:\s*"((?:[^"\\]|\\.){12,200})"\s*,\s*"?typ"?\s*:\s*"titel"/g,
  ];
  /* Verfasser stehen als Feld (verfasser: "…") oder als Konstante
     (const VERFASSER = "…", danach verfasser: VERFASSER). */
  const verfasserMuster = /\bverfasser"?\s*[:=]\s*"((?:[^"\\]|\\.){2,200})"/gi;
  for (const datei of dateien) {
    const text = fs.readFileSync(datei, "utf8");
    /* Nur Skript-Abschnitte tragen Verfasser; die Kurs- und Campusmodule
       der Webseite sind eigene Texte und ihre Titel deshalb frei. */
    if (!/\bverfasser\b/i.test(text)) continue;
    for (const muster of titelMuster) {
      for (const m of text.matchAll(muster)) {
        const n = normal(unescape(m[1]));
        if (substanzWorte(n) >= 4) ueberschriften.add(n);
      }
    }
    for (const m of text.matchAll(verfasserMuster)) {
      for (const teil of unescape(m[1]).split(/,|·|\bund\b|\//)) {
        const worte = teil.replace(/\([^)]*\)/g, " ").split(/\s+/).filter((w) => {
          const x = w.toLowerCase().replace(/[^a-zäöüß:-]/g, "");
          return x.length >= 3 && !TITELWORTE.has(x) && !/^diplom-/.test(x) && /^[A-ZÄÖÜ]/.test(w);
        });
        if (worte.length && worte.length <= 3) verfasser.add(worte.at(-1).replace(/[^A-Za-zÄÖÜäöüß-]/g, ""));
      }
    }
  }
  /* Schreibvarianten derselben Personen, die im Material vorkommen. */
  /* Ältere Unterlagen ohne verfasser-Feld nennen den Namen nur im Dateinamen. */
  verfasser.add("Meurer");
  for (const [a, b] of [["Moecker", "Möcker"], ["Schroeders", "Schröders"], ["Gruemmer", "Grümmer"]]) {
    if (verfasser.has(a) || verfasser.has(b)) { verfasser.add(a); verfasser.add(b); }
  }
  for (const v of [...verfasser]) if (v.length < 4) verfasser.delete(v);
  cache = { ueberschriften, verfasser: [...verfasser].sort(), dateien: dateien.length };
  return cache;
}

/* ---------- Prüfung ---------- */

const GLIEDERUNGSNUMMER = /(?<![\d.§])(?<!Nr\.\s)(?<!Tz\.\s)(?<!Rn\.\s)\b\d{1,2}\.\d{1,2}\.\d{1,2}(?:\.\d{1,2})*\b(?!\.\d)/;
const GLIEDERUNGSWORT = /\b(?:Teil|Kapitel|Abschnitt|Lektion|Lerneinheit|Fachtermin|Unterrichtstag)\s+(?:[IVX]{1,5}|\d{1,2}(?:\.\d+)*)\b/;
const HERKUNFT = /\b(?:Lehrgangsunterlage|Lehrgang|Kurzskript|Short-?Skript|Lernskript|Dozent(?:in|en)?|Referent(?:in)?|Kursleiter(?:in)?)\b/i;

export function ueberschriftenDes(beitrag) {
  const t = [beitrag?.titel, beitrag?.kurztitel, beitrag?.coverBadge];
  for (const f of beitrag?.folien || []) {
    t.push(f.titel, f.untertitel, f.links?.titel, f.rechts?.titel);
    for (const s of f.schritte || []) if (s && typeof s === "object") t.push(s.titel);
  }
  for (const s of beitrag?.szenen || []) t.push(s.titel, ...(s.marken || []));
  for (const s of beitrag?.stories || []) t.push(s.titel, s.ueberzeile);
  return t.filter((x) => typeof x === "string" && x.trim());
}

/* Liefert Fehlertexte im Stil von pruefeBeitrag. `texte` sind alle
   sichtbaren und gesprochenen Texte des Beitrags (alleTexte). */
export function quellenregelBefunde(beitrag, texte, index = quellenIndex()) {
  const fehler = [];
  const gesamt = texte.join("\n");

  const ueberschriften = ueberschriftenDes(beitrag);
  const gleich = new Set();
  for (const u of ueberschriften) {
    const n = normal(u);
    if (substanzWorte(n) < 4) continue;
    if (index.ueberschriften.has(n)) gleich.add(u);
  }
  /* Längere Quellüberschriften dürfen auch im Fließtext nicht stehen. */
  const fliess = ` ${normal(gesamt)} `;
  for (const q of index.ueberschriften) {
    if (substanzWorte(q) >= 5 && fliess.includes(` ${q} `)) gleich.add(q);
    if (gleich.size >= 3) break;
  }
  if (gleich.size) fehler.push(`Überschrift aus einer Lernunterlage übernommen (eigenen Titel formulieren): ${[...gleich].slice(0, 3).map((x) => `„${x}“`).join(" · ")}`);

  const nummer = gesamt.match(GLIEDERUNGSNUMMER) || gesamt.match(GLIEDERUNGSWORT);
  if (nummer) fehler.push(`Gliederung der Unterlage sichtbar (Nummer/Kapitelangabe entfernen): ${nummer[0]}`);

  const herkunft = gesamt.match(HERKUNFT);
  if (herkunft) fehler.push(`Herkunftsangabe entfernen (keine Lehrgänge, Skripte oder Dozenten nennen): ${herkunft[0]}`);

  const namen = index.verfasser.filter((v) => new RegExp(`(?<![A-Za-zÄÖÜäöüß])${v.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&")}(?![A-Za-zÄÖÜäöüß])`).test(gesamt));
  if (namen.length) fehler.push(`Name eines Verfassers/Dozenten im Beitrag (entfernen, auch als Fallname nicht verwenden): ${namen.join(", ")}`);

  return fehler;
}
