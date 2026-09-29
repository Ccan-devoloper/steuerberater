/* ==========================================================================
   Adapter: Skript-Abschnitte (src/data) → Themenpool.

   Die importierten Lernunterlagen (Skripte, Kurzskripte, Lehrgangs-
   unterlagen) liegen als Abschnitte mit Originaltext vor. Dieser Text kommt
   NIE in den Pool. In den Pool kommt nur, was in social/aufbereitung/*.json
   redaktionell in eigenen Worten aufbereitet wurde (QUELLENREGELN.md). Der
   Quellabschnitt liefert dazu die Metadaten: Normen, Fach, Priorität und die
   Herkunft für die interne Nachverfolgung.

   Format eines Eintrags in social/aufbereitung/<fach>.json:
     {
       "quelle": "kst-t4-6",               // id des Abschnitts in src/data
       "titel": "…",                        // eigener Titel (Frage oder Aussage)
       "einordnung": ["…"],                 // 1–3 eigene Sätze
       "lernziele": ["…"],                  // 1–5 eigene Sätze
       "pruefschritte": ["…", "…"],         // 2–6 eigene Schritte, je ≥ 22 Zeichen
       "fehler": ["…"],                     // 0–4 typische Fehler
       "merksatz": "…",                     // optional
       "normen": ["§ … KStG"]               // optional, sonst aus dem Abschnitt
     }
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { aoSkriptJacobs } from "../../src/data/k1-ao-skript-jacobs.js";
import { aoShortSkriptJacobs } from "../../src/data/k1-ao-short-skript-jacobs.js";
import { ustSkriptMoecker } from "../../src/data/k1-ust-skript-moecker.js";
import { erbstSkriptTeil1 } from "../../src/data/k1-erbst-skript-teil1.js";
import { erbstVerschonung } from "../../src/data/k1-erbst-verschonung.js";
import { erbstBewertungTeil1 } from "../../src/data/k1-erbst-bewertung-teil1.js";
import { erbstBewertungTeil2 } from "../../src/data/k1-erbst-bewertung-teil2.js";
import { erbstBewertungTeil3 } from "../../src/data/k1-erbst-bewertung-teil3.js";
import { kstTeil1 } from "../../src/data/k2-kst-teil1-hamacher.js";
import { kstTeil2 } from "../../src/data/k2-kst-teil2-hamacher.js";
import { kstTeil3 } from "../../src/data/k2-kst-teil3-hamacher.js";
import { kstTeil4 } from "../../src/data/k2-kst-teil4-hamacher.js";
import { kstTeil5 } from "../../src/data/k2-kst-teil5-hamacher.js";
import { kstTeil6 } from "../../src/data/k2-kst-teil6-hamacher.js";
import { kstTeil7 } from "../../src/data/k2-kst-teil7-hamacher.js";
import { kstKurzskript } from "../../src/data/kst-kurzskript.js";
import { kstSchemataNoethen } from "../../src/data/kst-schemata-noethen.js";
import { istrSkriptGh } from "../../src/data/k2-istr-skript-gh.js";
import { istrNoethen } from "../../src/data/k2-istr-noethen.js";
import { estKurzskript1 } from "../../src/data/est-kurzskript-1.js";
import { estKurzskript2 } from "../../src/data/est-kurzskript-2.js";
import { gewstKurzskript } from "../../src/data/gewst-kurzskript.js";
import { bilSkriptMelzer } from "../../src/data/k3-bil-skript-melzer.js";
import { persgSkriptMelzer } from "../../src/data/k3-persg-skript-melzer.js";
import { umwstKurzskript } from "../../src/data/k3-umwst-kurzskript-breier.js";
import { umwstrSkript } from "../../src/data/k3-umwstr-skript-hamacher.js";
import { prioritaetFuer } from "../../src/data/examensprioritaet.js";

const hier = path.dirname(fileURLToPath(import.meta.url));
export const AUFBEREITUNG_DIR = path.resolve(hier, "../aufbereitung");

/* Welche Unterlage zu welchem Fach gehört. */
export const SKRIPT_QUELLEN = Object.freeze({
  ao: [aoSkriptJacobs, aoShortSkriptJacobs],
  ust: [ustSkriptMoecker],
  erbst: [erbstSkriptTeil1, erbstVerschonung, erbstBewertungTeil1, erbstBewertungTeil2, erbstBewertungTeil3],
  kst: [kstTeil1, kstTeil2, kstTeil3, kstTeil4, kstTeil5, kstTeil6, kstTeil7, kstKurzskript, kstSchemataNoethen],
  istr: [istrSkriptGh, istrNoethen],
  est: [estKurzskript1, estKurzskript2],
  gewst: [gewstKurzskript],
  bilanz: [bilSkriptMelzer],
  persg: [persgSkriptMelzer],
  umwst: [umwstKurzskript, umwstrSkript],
});

/* Titel, die nach Kursorganisation statt nach Fachstoff klingen. */
export const KURS_TITEL = /Arbeitsmittel|Kurslogik|Lernlogik|Einführung|Überblick|Recap|Einheit\s*\d|Seitenplan|Fahrtroute|Handbuch|Reiter|Markierung|Lineal|Farbcode|Navigation|Beck-Text|Gesetzessammlung/i;

/* examensprioritaet.js führt das Umwandlungssteuerrecht als „umwstg“. */
const PRIORITAET_FACH = { umwst: "umwstg" };

let abschnitte = null;
export function skriptAbschnitte() {
  if (abschnitte) return abschnitte;
  abschnitte = new Map();
  for (const [fach, listen] of Object.entries(SKRIPT_QUELLEN)) {
    for (const liste of listen) {
      for (const a of liste || []) if (a?.id) abschnitte.set(a.id, { fach, abschnitt: a });
    }
  }
  return abschnitte;
}

export function aufbereitungLaden(dir = AUFBEREITUNG_DIR) {
  if (!fs.existsSync(dir)) return [];
  const eintraege = [];
  for (const name of fs.readdirSync(dir).filter((n) => /^[a-z]+\.json$/.test(n)).sort()) {
    const fach = name.replace(/\.json$/, "");
    const inhalt = JSON.parse(fs.readFileSync(path.join(dir, name), "utf8"));
    for (const e of Array.isArray(inhalt) ? inhalt : inhalt.themen || []) eintraege.push({ fach, ...e });
  }
  return eintraege;
}

const saetze = (arr, max) => (Array.isArray(arr) ? arr : arr ? [arr] : [])
  .map((x) => String(x || "").replace(/\s+/g, " ").trim())
  .filter(Boolean)
  .slice(0, max);

/* Formale Mindestanforderungen einer Aufbereitung. Die inhaltlichen
   Quellenregeln prüft test/aufbereitung.test.mjs mit pruefeBeitrag. */
export function aufbereitungBefunde(e) {
  const fehler = [];
  const quelle = skriptAbschnitte().get(e.quelle);
  if (!quelle) fehler.push(`Quellabschnitt „${e.quelle}“ unbekannt`);
  else if (quelle.fach !== e.fach) fehler.push(`Quellabschnitt „${e.quelle}“ gehört zu ${quelle.fach}, nicht zu ${e.fach}`);
  if (!String(e.titel || "").trim() || String(e.titel).length > 90) fehler.push("Titel fehlt oder ist länger als 90 Zeichen");
  if (KURS_TITEL.test(String(e.titel || ""))) fehler.push(`Titel klingt nach Kursorganisation (${String(e.titel).match(KURS_TITEL)[0]}); fachlich formulieren`);
  const schritte = saetze(e.pruefschritte, 6);
  if (schritte.length < 2) fehler.push("mindestens zwei Prüfschritte");
  if (schritte.some((s) => s.length < 22)) fehler.push("Prüfschritte brauchen je mindestens 22 Zeichen");
  if (saetze(e.lernziele, 5).length + saetze(e.einordnung, 3).length < 2) fehler.push("mindestens zwei Sätze Lernziel/Einordnung");
  return fehler;
}

/* Themen im Pool-Format. klausurVon(fach) kommt aus inhalte.mjs, damit
   dieses Modul FAECHER nicht importieren muss. */
export function aufbereiteteThemen(klausurVon, dir = AUFBEREITUNG_DIR) {
  const themen = [];
  const ids = new Set();
  for (const e of aufbereitungLaden(dir)) {
    if (aufbereitungBefunde(e).length) continue;
    const { abschnitt } = skriptAbschnitte().get(e.quelle);
    const id = `${e.fach}-aufb-${e.quelle}${e.variante ? "-" + e.variante : ""}`;
    if (ids.has(id)) continue;
    ids.add(id);
    const normen = saetze(e.normen?.length ? e.normen : abschnitt.normen, 10);
    themen.push({
      id,
      fach: e.fach,
      klausur: klausurVon(e.fach),
      typ: "modul",
      titel: String(e.titel).trim(),
      normen,
      kern: {
        einordnung: saetze(e.einordnung, 3),
        lernziele: saetze(e.lernziele, 5),
        pruefschritte: saetze(e.pruefschritte, 6),
        merksatz: String(e.merksatz || "").trim(),
        fehler: saetze(e.fehler, 4),
        examen: [],
      },
      prioritaet: e.prioritaet || prioritaetFuer(PRIORITAET_FACH[e.fach] || e.fach, {
        title: e.titel,
        law: normen.join(" · "),
        subtitle: abschnitt.title,
        thema: abschnitt.thema,
        themen: abschnitt.themen || [],
      }).stufe,
      herkunft: e.quelle,
    });
  }
  return themen;
}
