/* ==========================================================================
   Themenpool für den Instagram-Bot.

   Lädt die Lerninhalte der Webseite (alle drei Klausuren) und reduziert sie
   auf das, was ein Beitrag braucht: Titel, Normen, Prüfungsgedanken, Merksatz,
   typische Fehler, Examenspriorität. Ausdrücklich NICHT übernommen werden:
     - Sachverhalte und Lösungen der Fälle (Namen, Zahlen, Fallnummern)
     - Hausaufgaben-Volltexte
     - Verweise auf Quelle, Seiten, Folien, Mitschriften
   Der Autor (autor.mjs) bekommt nur diese Skelette und formuliert alles neu;
   pruefung.mjs stellt anschließend sicher, dass nichts 1:1 übernommen wurde.
   ========================================================================== */

import { module as k3Module } from "../../src/data/module.js";
import { formeln, karteikarten, quizfragen, glossar } from "../../src/data/lernstoff.js";
import { kstModule, kstSchemata } from "../../src/data/kst-module.js";
import { kstQuizfragen, kstKarteikarten } from "../../src/data/kst-lernstoff.js";
import { istrModule, istrTraining } from "../../src/data/istr-gesamt.js";
import { persgModule, persgSchemata, persgQuizfragen } from "../../src/data/k3-persg-tag1.js";
import { k1Quizfragen, k1Karteikarten } from "../../src/data/k1-lernstoff.js";
import ao1 from "../../src/data/k1-ao-einheit-1.js";
import ao2 from "../../src/data/k1-ao-einheit-2.js";
import ao3 from "../../src/data/k1-ao-einheit-3.js";
import ao4 from "../../src/data/k1-ao-einheit-4.js";
import ao5 from "../../src/data/k1-ao-einheit-5.js";
import ao6 from "../../src/data/k1-ao-einheit-6.js";
import ao7 from "../../src/data/k1-ao-einheit-7.js";
import ao8 from "../../src/data/k1-ao-einheit-8.js";
import erbst1 from "../../src/data/k1-erbst-einheit-1.js";
import erbst2 from "../../src/data/k1-erbst-einheit-2.js";
import erbst3 from "../../src/data/k1-erbst-einheit-3.js";
import ust1 from "../../src/data/module-vertiefung-m.js";
import ust2 from "../../src/data/module-vertiefung-n.js";
import ust2b from "../../src/data/module-vertiefung-r.js";
import ust3 from "../../src/data/module-vertiefung-o.js";
import ust4 from "../../src/data/module-vertiefung-p.js";
import ust5 from "../../src/data/module-vertiefung-q.js";
import ust6 from "../../src/data/module-vertiefung-s.js";
import ust7 from "../../src/data/module-vertiefung-t.js";
import ust8 from "../../src/data/module-vertiefung-u.js";
import { prioritaetFuer } from "../../src/data/examensprioritaet.js";

export const FAECHER = {
  ao:     { label: "Abgabenordnung",            kurz: "AO",     klausur: 1 },
  ust:    { label: "Umsatzsteuer",              kurz: "USt",    klausur: 1 },
  erbst:  { label: "Erbschaftsteuer / Bewertung", kurz: "ErbSt", klausur: 1 },
  kst:    { label: "Körperschaftsteuer",        kurz: "KSt",    klausur: 2 },
  istr:   { label: "Internationales Steuerrecht", kurz: "IStR", klausur: 2 },
  bilanz: { label: "Bilanzsteuerrecht",         kurz: "Bilanz", klausur: 3 },
  persg:  { label: "Personengesellschaften",    kurz: "PersG",  klausur: 3 },
};

export const KLAUSUREN = {
  1: { label: "Klausur 1 · Verfahrensrecht, USt, ErbSt", kurz: "K1" },
  2: { label: "Klausur 2 · Ertragsteuern",               kurz: "K2" },
  3: { label: "Klausur 3 · Bilanzen",                    kurz: "K3" },
};

/* Sätze, die sich auf die Kursquelle beziehen, werden vor der Weitergabe
   entfernt – der Beitrag soll eigenständig klingen. */
const QUELLENBEZUG = /\b(Quelle|Seite\s*\d|Seiten\s*\d|Mitschrift|Frames?|Folie|PDF|Skript|Unterrichts|Kurs|Einheit\s+\d|Originalfall|Musterlösung|Hausaufgabe)\b/i;

function saetzeOhneQuellenbezug(text) {
  if (!text) return "";
  return String(text)
    .split(/(?<=[.!?])\s+/)
    .filter((s) => !QUELLENBEZUG.test(s))
    .join(" ")
    .trim();
}

function liste(arr, max = 8) {
  return (arr || []).map(saetzeOhneQuellenbezug).filter(Boolean).slice(0, max);
}

function normenAus(m) {
  const set = new Set();
  for (const n of [...(m.normchain || []), ...(m.normen || [])]) if (typeof n === "string") set.add(n.trim());
  if (typeof m.law === "string") for (const n of m.law.split("·")) set.add(n.trim());
  if (typeof m.norm === "string") set.add(m.norm.trim());
  return [...set].filter(Boolean).slice(0, 10);
}

/* Titel von Kurs-Präfixen befreien („Einheit 3 Recap: …“, „Tag 2: …“). */
function titelBereinigen(titel) {
  return String(titel || "")
    .replace(/^(Einheit\s*\d+\s*(Recap|Wiederholung)?\s*[:–-]\s*)/i, "")
    .replace(/^(Recap|Wiederholung|Tag\s*\d+)\s*[:–-]\s*/i, "")
    .replace(/\s*\((Einheit|Tag)\s*\d+\)\s*$/i, "")
    .trim();
}

function modulThema(fach, m, quelle) {
  return {
    id: `${fach}-modul-${quelle}-${m.id}`,
    fach,
    klausur: FAECHER[fach].klausur,
    typ: "modul",
    titel: titelBereinigen(m.title),
    normen: normenAus(m),
    kern: {
      einordnung: liste(m.intro, 3),
      lernziele: liste(m.goals, 6),
      pruefschritte: liste(m.scheme, 8),
      merksatz: saetzeOhneQuellenbezug(m.merksatz),
      fehler: liste(m.traps, 5),
      examen: liste(m.exam, 3),
    },
    prioritaet: prioritaetFuer(fach, m, { typ: "modul", id: m.id }).stufe,
  };
}

function karteThema(fach, k, i, quelle) {
  const frage = k.frage || k.vorn;
  const antwort = k.antwort || k.hinten;
  return {
    id: `${fach}-karte-${quelle}-${i}`,
    fach,
    klausur: FAECHER[fach].klausur,
    typ: "karteikarte",
    titel: saetzeOhneQuellenbezug(frage) || frage,
    normen: normenAus({ law: "", normchain: [] , norm: (antwort.match(/§[^,.;)]+?(?:HGB|EStG|AO|UStG|KStG|GewStG|ErbStG|BewG|UmwStG|AStG|EStDV|EStR|KStR|UStAE)/g) || []).join(" · ") }),
    kern: { frage: saetzeOhneQuellenbezug(frage), antwort: saetzeOhneQuellenbezug(antwort) },
    prioritaet: prioritaetFuer(fach, { title: frage, law: antwort }).stufe,
  };
}

function quizThema(fach, q, i, quelle) {
  const frage = q.frage || q.q || q[0];
  const optionen = q.optionen || q.options || q[1] || [];
  const richtig = q.richtig ?? q.answer ?? q[2];
  const erklaerung = q.erklaerung || q.explanation || q[3] || "";
  if (!frage || !optionen.length) return null;
  return {
    id: `${fach}-quiz-${quelle}-${i}`,
    fach,
    klausur: FAECHER[fach].klausur,
    typ: "quiz",
    titel: saetzeOhneQuellenbezug(frage) || frage,
    normen: [],
    kern: {
      frage: saetzeOhneQuellenbezug(frage),
      optionen: optionen.map(saetzeOhneQuellenbezug),
      richtig,
      erklaerung: saetzeOhneQuellenbezug(erklaerung),
    },
    prioritaet: prioritaetFuer(fach, { title: frage, law: erklaerung }).stufe,
  };
}

function formelThema(f) {
  return {
    id: `bilanz-formel-${f.id}`,
    fach: "bilanz",
    klausur: 3,
    typ: "formel",
    titel: f.titel,
    normen: normenAus({ law: f.norm }),
    kern: { ausdruck: f.ausdruck, erklaerung: saetzeOhneQuellenbezug(f.erklaerung), gruppe: f.gruppe },
    prioritaet: prioritaetFuer("bilanz", { title: f.titel, law: f.norm }).stufe,
  };
}

function glossarThema(g, i) {
  return {
    id: `bilanz-glossar-${i}`,
    fach: "bilanz",
    klausur: 3,
    typ: "begriff",
    titel: g.begriff,
    normen: normenAus({ law: g.norm }),
    kern: { begriff: g.begriff, definition: saetzeOhneQuellenbezug(g.text) },
    prioritaet: prioritaetFuer("bilanz", { title: g.begriff, law: g.norm }).stufe,
  };
}

function schemaThema(fach, s, i) {
  const schritte = s.schritte || s.steps || s.stufen || s.punkte || [];
  const zeilen = schritte.map((x) => (typeof x === "string" ? x : x.text || x.titel || x.title || "")).filter(Boolean);
  if (!zeilen.length) return null;
  return {
    id: `${fach}-schema-${i}`,
    fach,
    klausur: FAECHER[fach].klausur,
    typ: "schema",
    titel: saetzeOhneQuellenbezug(s.titel || s.title || s.name) || "Prüfschema",
    normen: normenAus(s),
    kern: { schritte: liste(zeilen, 8) },
    prioritaet: prioritaetFuer(fach, s).stufe,
  };
}

/* Nur Lernmodule, keine Fälle: Fälle enthalten Namen und Sachverhalte. */
const istModul = (m) => m && m.area !== "Fall" && m.difficulty !== "Originalfall" && Array.isArray(m.intro);

function faecherAusUst(m) {
  return istModul(m) ? m : null;
}

export function themenpool() {
  const pool = [];

  /* K3 Bilanz */
  for (const m of k3Module) if (istModul(m)) pool.push(modulThema("bilanz", m, "k3"));
  karteikarten.forEach((k, i) => pool.push(karteThema(k.bereich === "PersG" ? "persg" : "bilanz", k, i, "k3")));
  quizfragen.forEach((q, i) => { const t = quizThema(q[4] === "PersG" ? "persg" : "bilanz", q, i, "k3"); if (t) pool.push(t); });
  formeln.forEach((f) => pool.push(formelThema(f)));
  glossar.forEach((g, i) => pool.push(glossarThema(g, i)));

  /* K3 PersG */
  for (const m of persgModule) if (istModul(m)) pool.push(modulThema("persg", m, "persg"));
  (persgSchemata || []).forEach((s, i) => { const t = schemaThema("persg", s, i); if (t) pool.push(t); });
  (persgQuizfragen || []).forEach((q, i) => { const t = quizThema("persg", q, i, "persg"); if (t && !/Originalfall|OHG im/i.test(t.titel)) pool.push(t); });

  /* K2 KSt + IStR */
  for (const m of kstModule) if (istModul(m)) pool.push(modulThema("kst", m, "kst"));
  (kstSchemata || []).forEach((s, i) => { const t = schemaThema("kst", s, i); if (t) pool.push(t); });
  kstKarteikarten.forEach((k, i) => pool.push(karteThema("kst", k, i, "kst")));
  kstQuizfragen.forEach((q, i) => { const t = quizThema("kst", q, i, "kst"); if (t) pool.push(t); });
  for (const m of istrModule) if (istModul(m)) pool.push(modulThema("istr", m, "istr"));
  (istrTraining || []).forEach((q, i) => { const t = quizThema("istr", q, i, "istr"); if (t) pool.push(t); });

  /* K1 AO, USt, ErbSt */
  [ao1, ao2, ao3, ao4, ao5, ao6, ao7, ao8].flat().forEach((m) => { if (istModul(m)) pool.push(modulThema("ao", m, "ao")); });
  [erbst1, erbst2, erbst3].flat().forEach((m) => { if (istModul(m)) pool.push(modulThema("erbst", m, "erbst")); });
  [ust1, ust2, ust2b, ust3, ust4, ust5, ust6, ust7, ust8].flat().forEach((m) => { const x = faecherAusUst(m); if (x) pool.push(modulThema("ust", x, "ust")); });
  k1Karteikarten.forEach((k, i) => pool.push(karteThema("ust", k, i, "ust")));
  k1Quizfragen.forEach((q, i) => { const t = quizThema("ust", q, i, "ust"); if (t) pool.push(t); });

  /* Themen ohne Substanz aussortieren (z. B. reine Arbeitsmittel-Einführungen). */
  return pool.filter((t) => {
    if (t.typ === "modul") return (t.kern.pruefschritte.length + t.kern.lernziele.length) >= 3 && !/Arbeitsmittel|Kurslogik|Einführung|Überblick|Recap|Einheit\s*\d|Seitenplan|Fahrtroute/i.test(t.titel) && t.titel.length > 8;
    return true;
  });
}

/* Statistik für README und Tests. */
export function poolStatistik(pool = themenpool()) {
  const je = (key) => pool.reduce((acc, t) => { acc[t[key]] = (acc[t[key]] || 0) + 1; return acc; }, {});
  return { gesamt: pool.length, jeFach: je("fach"), jeTyp: je("typ"), jePrioritaet: je("prioritaet"), jeKlausur: je("klausur") };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(poolStatistik(), null, 2));
}
