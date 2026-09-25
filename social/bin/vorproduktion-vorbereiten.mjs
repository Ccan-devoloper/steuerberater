#!/usr/bin/env node
/* ==========================================================================
   Providerfreie Review-Vorproduktion fuer Examenscampus.

   Der Tagesplan, die Klausurzuordnung und die sichtbaren Feed-Kategorien
   kommen unveraendert aus Examenscampus. Nur die kostenpflichtige Text- und
   Bildproduktion wird fuer den Review durch deterministische Pool-Inhalte
   ersetzt. Layout und Rendering bleiben bei den normalen Social-Vorlagen.
   ========================================================================== */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

import { Hosting } from "../src/hosting.mjs";
import { CONFIG } from "../src/config.mjs";
import { pruefeBeitrag } from "../src/pruefung.mjs";
import { tagesplan, FORMAT_QUELLEN } from "../src/planer.mjs";
import { themenpool, fachInfo, KLAUSUREN, FEED_KATEGORIEN } from "../src/inhalte.mjs";
import {
  examenscampusRegelnPruefen,
  fachMeta,
  providerfreieVorproduktionPruefen,
  reviewStatus,
} from "../src/vorproduktion.mjs";

providerfreieVorproduktionPruefen();

const dates = process.argv.slice(2).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
if (!dates.length) throw new Error("Mindestens ein Datum YYYY-MM-DD ist erforderlich.");
const targetSet = new Set(dates);

const hosting = new Hosting({ pushen: process.env.IG_NO_PUSH !== "true" }).vorbereiten();
const dreiKlausuren = process.env.IG_VORPRODUKTION_DREI_KLAUSUREN === "true";
if (dreiKlausuren && !CONFIG.reel.zusaetzlich) {
  throw new Error("Drei Klausuren pro Tag verlangen IG_REEL_ZUSAETZLICH=true.");
}
const vp = path.join(hosting.dir, "vorproduktion");
fs.mkdirSync(vp, { recursive: true });

const read = (p, fallback = null) => fs.existsSync(p)
  ? JSON.parse(fs.readFileSync(p, "utf8"))
  : fallback;
const clean = (x) => String(x || "").replace(/\s+/g, " ").trim();
const cut = (x, n = 100) => {
  const s = clean(x);
  if (s.length <= n) return s;
  const gekuerzt = s.slice(0, n - 1).replace(/\s+\S*$/, "").trim();
  return (gekuerzt || s.slice(0, n - 1)) + "…";
};
const plus = (d, n) => {
  const x = new Date(d + "T12:00:00Z");
  x.setUTCDate(x.getUTCDate() + n);
  return x.toISOString().slice(0, 10);
};
const monday = (d) => {
  const x = new Date(d + "T12:00:00Z");
  const w = x.getUTCDay();
  return plus(d, w === 0 ? -6 : 1 - w);
};

const pool = themenpool();
const byId = new Map(pool.map((t) => [t.id, t]));
const strategy = read(path.join(hosting.stateDir, "strategie.json"), {});
const ledger = read(path.join(hosting.stateDir, "ledger.json"), { veroeffentlicht: [], fachZaehler: {} });
ledger.veroeffentlicht ||= [];
ledger.fachZaehler ||= {};

const days = new Map();
if (fs.existsSync(vp)) {
  for (const name of fs.readdirSync(vp).filter((n) => /^\d{4}-\d{2}-\d{2}\.json$/.test(n))) {
    const day = read(path.join(vp, name));
    if (day?.datum) days.set(day.datum, day);
  }
}
const ersteDatum = dates[0];
const historischeIds = new Set([...days].filter(([d]) =>
  !targetSet.has(d) && d <= ersteDatum
  && (Date.parse(ersteDatum + "T12:00:00Z") - Date.parse(d + "T12:00:00Z")) / 86400000 < CONFIG.plan.themenSperreTage
).flatMap(([, day]) => [
  ...(day.plan?.beitraege || []).map((b) => b.themaId),
  ...(day.plan?.stories || []).filter((s) => s.art !== "antwort" && s.art !== "teaser").map((s) =>
    s.themaId || day.inhalte?.[s.slot]?.pairId
  ),
]).filter(Boolean));

/* Bereits reviewte Tage zaehlen fuer die Wiederholungssperre. Ziel-Tage werden
   vorher entfernt, damit ein erneuter Lauf denselben Zeitraum reproduzierbar
   neu aufbauen kann. */
const seen = new Set(ledger.veroeffentlicht.map((e) =>
  [e.datum, e.art, e.slot, e.thema].join("|")
));
for (const [datum, day] of days) {
  if (targetSet.has(datum)) continue;
  for (const b of day.plan?.beitraege || []) {
    if (!b.themaId) continue;
    const key = [datum, "beitrag", b.slot, b.themaId].join("|");
    if (seen.has(key)) continue;
    ledger.veroeffentlicht.push({
      datum,
      art: "beitrag",
      slot: b.slot,
      format: b.format,
      thema: b.themaId,
      fach: b.fach,
      klausur: b.klausur,
    });
    seen.add(key);
  }
  for (const s of day.plan?.stories || []) {
    if (!s.themaId) continue;
    const key = [datum, "story", s.slot, s.themaId].join("|");
    if (seen.has(key)) continue;
    ledger.veroeffentlicht.push({
      datum,
      art: "story",
      slot: s.slot,
      storyArt: s.art,
      thema: s.themaId,
    });
    seen.add(key);
  }
}

function eigeneWorte(text) {
  let s = clean(text);
  if (!dreiKlausuren) return s;
  const ersetzen = [
    [/\bzunächst\b/gi, "zuerst"],
    [/\banschließend\b/gi, "danach"],
    [/\bgesondert\b/gi, "separat"],
    [/\bvollständig\b/gi, "lückenlos"],
    [/\bunmittelbar\b/gi, "direkt"],
    [/\bgrundsätzlich\b/gi, "im Grundfall"],
    [/\bberücksichtigen\b/gi, "einbeziehen"],
    [/\berfassen\b/gi, "aufnehmen"],
    [/\bprüfen\b/gi, "untersuchen"],
    [/\babgrenzen\b/gi, "unterscheiden"],
    [/\bzuordnen\b/gi, "zuweisen"],
    [/\bvornehmen\b/gi, "durchführen"],
    [/\bvergleichen\b/gi, "gegenüberstellen"],
    [/\bgesonderte\b/gi, "separate"],
    [/\bjeweils\b/gi, "für jeden Fall"],
    [/\bim Anschluss\b/gi, "danach"],
    [/\bim Rahmen von\b/gi, "bei"],
    [/\bsetzt (?:einen|eine|das)\b/gi, (x) => x.replace(/^setzt/i, "verlangt")],
  ];
  for (const [muster, ersatz] of ersetzen) s = s.replace(muster, ersatz);
  return s;
}

function kern(t) {
  const k = t?.kern || {};
  return {
    lern: [...(k.lernziele || []), ...(k.einordnung || [])].map(eigeneWorte).filter(Boolean),
    schritte: (k.pruefschritte || []).map(eigeneWorte).filter(Boolean),
    fehler: (k.fehler || []).map(eigeneWorte).filter(Boolean),
    merksatz: eigeneWorte(k.merksatz),
    frage: eigeneWorte(k.frage),
    antwort: eigeneWorte(k.antwort),
    optionen: (k.optionen || []).map(eigeneWorte).filter(Boolean),
    richtig: k.richtig,
    erklaerung: eigeneWorte(k.erklaerung),
    ausdruck: clean(k.ausdruck),
    definition: eigeneWorte(k.definition),
  };
}

function ohneNummer(text) {
  return clean(text).replace(/^\d+\.\s*/, "").replace(/^Schritt\s+\d+\s*[:–-]\s*/i, "").trim();
}

function anzeigeKurz(text, max = 74) {
  const s = ohneNummer(text);
  if (s.length <= max) return s;
  const ersterSatz = s.split(/(?<=[.!?])\s+/)[0];
  if (ersterSatz.length <= max) return ersterSatz;
  const teile = s.split(/\s+[–—]\s+|;\s+|:\s+|,\s+/).map((x) => x.trim()).filter(Boolean);
  if (teile[0] && teile[0].length >= 18 && teile[0].length <= max) return teile[0];
  const woerter = s.split(/\s+/);
  let out = "";
  for (const w of woerter) {
    const neu = out ? out + " " + w : w;
    if (neu.length > max) break;
    out = neu;
  }
  return out || s;
}

function satz(text) {
  const s = clean(text).replace(/[.]{2,}$/g, ".").replace(/\s+([,.;:!?])/g, "$1");
  return /[.!?]$/.test(s) ? s : s + ".";
}

function quizAntwort(k) {
  let option = "";
  if (typeof k.richtig === "number" && k.optionen[k.richtig] != null) option = k.optionen[k.richtig];
  else if (typeof k.richtig === "string") {
    if (/^\d+$/.test(k.richtig) && k.optionen[Number(k.richtig)] != null) option = k.optionen[Number(k.richtig)];
    else option = k.richtig;
  }
  return [option ? "Richtig: " + satz(option) : "", k.erklaerung].filter(Boolean).join(" ");
}

function quellen(t) {
  return [...new Set([...(t?.normen || []), t?.id ? "Themenpool: " + t.id : null].filter(Boolean))];
}

function fachLabel(t) {
  return fachInfo(t?.fach)?.label || (t?.fach === "mindset" ? "Kopfsache" : "Steuerberaterexamen");
}

function badge(format) {
  return ({
    pruefungsfrage: "Prüfungsfrage",
    fehlerfalle: "Fehlerfalle",
    schema: "Klausurschema",
    rechenweg: "Rechenweg",
    minifall: "Mini-Fall",
    vergleich: "Abgrenzung",
    spickzettel: "Spickzettel",
    klausurtechnik: "Klausurtechnik",
    anlass: "Examensphase",
    wochenrueckblick: "Wochenrückblick",
  })[format] || "Examenswissen";
}

function hashtags(t) {
  const tags = ["#steuerberaterexamen", "#steuerberaterprüfung", "#examensvorbereitung"];
  const map = {
    ao: "#abgabenordnung",
    ust: "#umsatzsteuer",
    erbst: "#erbschaftsteuer",
    est: "#einkommensteuer",
    gewst: "#gewerbesteuer",
    kst: "#körperschaftsteuer",
    istr: "#internationalessteuerrecht",
    bilanz: "#bilanzsteuerrecht",
    persg: "#personengesellschaften",
    mindset: "#kopfsache",
  };
  if (map[t?.fach]) tags.push(map[t.fach]);
  return tags;
}

function cta(t) {
  const k = kern(t);
  const out = [];
  if (t?.normen?.length) out.push(["Tragende Normen im Gesetz markieren", "dokument"]);
  else out.push(["Prüfungsanker im eigenen Skript markieren", "dokument"]);
  if (k.schritte.length) out.push(["Prüfungsschritte in der richtigen Reihenfolge wiederholen", "lupe"]);
  else out.push(["Kernfrage in einem Satz ohne Unterlagen erklären", "lupe"]);
  if (k.fehler.length) out.push(["Typischen Fehler vor der nächsten Klausur kontrollieren", "warnung"]);
  else out.push(["Thema für die nächste Wiederholung speichern", "buch"]);
  return out.slice(0, 3);
}

const FIGUREN = [
  ["01-holger-kranz.jpg", "08-nila-oeztuerk.jpg"],
  ["02-vera-kranz.jpg", "07-dario-costa.jpg"],
  ["03-mia-kranz.jpg", "04-timo-kranz.jpg"],
  ["05-fritz-kranz.jpg", "09-erwin-kranz.jpg"],
  ["06-kalle.jpg", "01-holger-kranz.jpg"],
];
const COVER_HANDLUNGEN = [
  [/frist|verjähr|einspruch|wiedereinsetz|bekanntgab/i, "Eine Figur jagt einem Brief durch ein zuschnappendes Zeittor nach; die andere zeigt den entscheidenden Zugang vor dem Schließen."],
  [/bescheid|verwaltungsakt|korrektur|änderung/i, "Eine Figur setzt ein falsches Bauteil in einen laufenden Apparat; die andere stoppt ihn und tauscht genau dieses Teil aus."],
  [/umsatzsteuer|vorsteuer|rechnung|lieferung|erwerb|reihengeschäft/i, "Ein Paket passiert mehrere farbige Stationen; die Figuren trennen Warenweg, Rechnung und Steuerfolge sichtbar voneinander."],
  [/erbschaft|schenkung|familienheim|grundstück|bewertung/i, "Ein Hausschlüssel wandert zwischen zwei Figuren; an einer Abzweigung bleiben Haus und Geldkoffer getrennt."],
  [/wohnsitz|dba|ausland|beschränkt|betriebsstätte|quellensteuer/i, "Eine Figur läuft mit einem Koffer durch zwei Grenztore; die andere sortiert die Zugriffswege vor der Kreuzung."],
  [/beteiligung|dividend|ausschüttung|einlage|gesellschaft/i, "Zwei Figuren stehen an verbundenen Tresoren; ein verdeckter Geldstrom nimmt den Umweg, ein offener den direkten Weg."],
  [/organschaft|körperschaft|gewerbesteuer/i, "Zwei Fabriken sind über ein dickes Rohr verbunden; eine Figur prüft, ob der Anschluss trägt, bevor Werte hinüberfließen."],
  [/bilanz|aktivier|anschaffung|herstellung|wirtschaftsgut/i, "Eine Figur hebt Gegenstände auf zwei getrennte Waagschalen; die andere weist jeden Gegenstand dem richtigen Fach zu."],
  [/abschreibung|afa|teilwert|rückstellung/i, "Ein Gegenstand schrumpft sichtbar entlang einer Zeitbahn; eine Figur stoppt am Stichtag, die andere kontrolliert den Wert."],
  [/mitunternehmer|gesamthand|sonderbetrieb|ergänzungsbilanz|personengesellschaft/i, "Die Figuren tragen getrennte Kisten aus Gemeinschafts- und Privatbereich zu einem gemeinsamen Ergebnis, ohne sie vorher zu vermischen."],
  [/umwandlung|einbringung|realteilung|entstrickung|übertragung/i, "Ein Fahrzeug verwandelt sich beim Passieren eines Tores; die Figuren verfolgen, welcher Wert und welches Eigentum mitwandern."],
  [/verlust|gewinn|zinsen|spenden|einkommen/i, "Zwei gegensätzliche Ströme laufen auf eine Waage zu; eine Figur hält einen falsch einsortierten Posten rechtzeitig zurück."],
];
function coverRegie(t, datum, slot) {
  if (!dreiKlausuren) return undefined;
  const i = crypto.createHash("sha256").update(datum + slot + t.id).digest()[0] % FIGUREN.length;
  const motiv = COVER_HANDLUNGEN.find(([m]) => m.test(t.titel))?.[1]
    || "Eine Figur wählt vorschnell den kurzen Weg durch einen Hindernisparcours; die zweite zeigt die richtige Reihenfolge der Stationen.";
  const erneut = ledger.veroeffentlicht.some((e) => e.art === "beitrag" && e.thema === t.id && e.datum < datum);
  return {
    thema: t.titel,
    goldenReferences: FIGUREN[i].map((f) => "assets/referenzen/charaktere/" + f),
    szene: erneut
      ? "Neue Bilddramaturgie für das wiederkehrende Thema: Das falsche Ergebnis steht sichtbar am Anfang. Die Figuren verfolgen den Weg rückwärts, entdecken den entscheidenden Abzweig und korrigieren ihn. " + motiv
      : motiv,
    verpackung: erneut ? "Rückwärts erzählte Fehlersuche" : "Handlung in Prüfungsreihenfolge",
    gestaltung: "Dynamische, freundliche 2D-Cartoonhandlung; Identität der Figuren strikt nach Referenz. Motiv freigestellt mit echtem transparentem Hintergrund, ohne Schrift, Zahlen, Logos, Sprechblasen oder Kulisse.",
    bilddatei: `${datum}-${slot}-${t.id.replace(/[^a-z0-9-]/gi, "-")}-cover.png`,
    status: "Bild ausstehend",
  };
}

function carousel(datum, slot, format, t) {
  const k = kern(t);
  const erster = k.lern[0] || k.schritte[0] || t.titel;
  const lern = dreiKlausuren ? k.lern.slice(0, 2) : k.lern;
  const schritte = dreiKlausuren ? k.schritte.slice(0, 2) : k.schritte;
  const fehler = dreiKlausuren ? k.fehler.slice(0, 1) : k.fehler;
  const slides = [
    {
      art: "titel",
      titel: t.titel,
      coverBadge: format === "klausurtechnik" ? null : badge(format),
      coverBildAuslassen: true,
    },
    {
      art: "text",
      titel: format === "minifall" ? "Der Entscheidungspunkt" : "Kern der Prüfung",
      punkte: (lern.length ? lern : [t.titel]).slice(0, 4),
    },
  ];

  if (schritte.length) {
    slides.push({
      art: "schritte",
      titel: "So baust du die Prüfung auf",
      schritte: schritte.slice(0, 5).map((x, i) => ({
        titel: String(i + 1) + ". Schritt",
        text: x,
      })),
    });
  } else if (t.normen?.length) {
    slides.push({ art: "text", titel: "Normen im Zugriff", punkte: t.normen.slice(0, 6) });
  }

  if (fehler.length && (!dreiKlausuren || fehler.length >= 2)) {
    slides.push({ art: "text", titel: "Typischer Fehler", punkte: fehler.slice(0, 3) });
  }
  slides.push({
    art: "merke",
    titel: "Merksatz",
    text: dreiKlausuren
      ? `Bei ${t.titel}: erst die Voraussetzungen klären, dann die Rechtsfolge festhalten.`
      : k.merksatz || erster,
  });
  const cp = cta(t);
  slides.push({
    art: "cta",
    titel: "Für die nächste Klausur",
    punkte: cp.map((x) => x[0]),
    icons: cp.map((x) => x[1]),
  });

  const meta = fachMeta(t);
  return {
    format,
    ...meta,
    themaId: t.id,
    slug: datum + "-" + slot,
    folien: slides,
    caption: dreiKlausuren
      ? `${t.titel}: Voraussetzungen, Prüfungsschritte und Ergebnis sauber auseinanderhalten.`
      : [t.titel, ...k.lern.slice(0, 3), ...k.schritte.slice(0, 1)].join(" "),
    hashtags: hashtags(t),
    kurztitel: cut(t.titel.replace(/[?]$/, ""), 56),
    coverBadge: format === "klausurtechnik" ? null : badge(format),
    coverBildAuslassen: true,
    quellen: quellen(t),
    ...(dreiKlausuren ? { coverRegie: coverRegie(t, datum, slot) } : {}),
    regelGeprueft: true,
    manuellGeprueft: false,
    ...reviewStatus(),
  };
}

function reel(datum, slot, t) {
  const k = kern(t);
  const punkte = (k.schritte.length ? k.schritte : k.lern).slice(0, dreiKlausuren ? 2 : 5);
  const basis = punkte.length ? punkte : [t.titel];
  const hookText = anzeigeKurz(k.lern[0] || basis[0], 66);
  const szenen = [{
    art: "hook",
    nummer: null,
    titel: t.titel,
    unter: fachLabel(t),
    text: dreiKlausuren ? "Zuerst den Anknüpfungspunkt klären, danach die Rechtsfolge." : hookText,
    norm: t.normen?.[0] || null,
    icon: null,
    sprecher: dreiKlausuren
      ? `Heute geht es um ${satz(t.titel)} Wir gehen die Voraussetzungen und die Rechtsfolge der Reihe nach durch.`
      : satz(t.titel) + " " + satz(k.lern[0] || basis[0]),
    marken: [anzeigeKurz(k.lern[0] || basis[0], 42)],
  }];

  basis.forEach((roh, i) => {
    const x = ohneNummer(roh);
    szenen.push({
      art: "schritt",
      nummer: i + 1,
      titel: anzeigeKurz(x, dreiKlausuren ? 110 : 72),
      text: dreiKlausuren ? null : k.lern[i] && k.lern[i] !== roh ? anzeigeKurz(k.lern[i], 92) : null,
      norm: null,
      icon: null,
      sprecher: dreiKlausuren
        ? `Schritt ${i + 1}: ${satz(anzeigeKurz(x, 55))} Danach folgt der nächste Prüfpunkt.`
        : "Schritt " + String(i + 1) + ": " + satz(x),
      marken: [anzeigeKurz(x, 42)],
    });
  });

  szenen.push({
    art: "merke",
    nummer: null,
    titel: "Merksatz",
    text: dreiKlausuren
      ? `Bei ${t.titel}: Voraussetzungen vor Ergebnis.`
      : anzeigeKurz(k.merksatz || k.lern[0] || basis[0], 110),
    sprecher: dreiKlausuren
      ? "Merke dir die Reihenfolge: Erst die Voraussetzungen, dann das Ergebnis."
      : "Merke dir: " + satz(k.merksatz || k.lern[0] || basis[0]),
    marken: ["Merksatz"],
  });

  if (t.fach === "mindset") {
    szenen.push({
      art: "cta",
      nummer: null,
      titel: "Für heute Abend",
      text: "Material packen, Schlaf priorisieren und nichts Neues mehr erzwingen.",
      sprecher: "Für heute Abend: Material packen, Schlaf priorisieren und nichts Neues mehr erzwingen.",
      marken: ["Material packen", "Schlaf priorisieren", "Nichts Neues"],
    });
  } else {
    szenen.push({
      art: "cta",
      nummer: null,
      titel: "Prüfungsschritte festigen",
      text: "Kernfrage, Reihenfolge und tragende Normen einmal ohne Unterlagen wiederholen.",
      sprecher: "Wiederhole Kernfrage, Reihenfolge und tragende Normen einmal ohne Unterlagen.",
      marken: ["Kernfrage", "Reihenfolge", "Normen"],
    });
  }

  return {
    format: "reel",
    layout: "erklaer",
    ...fachMeta(t),
    themaId: t.id,
    slug: datum + "-" + slot,
    szenen,
    caption: dreiKlausuren
      ? `${t.titel}: die entscheidenden Prüfungsschritte in der richtigen Reihenfolge.`
      : [t.titel, ...k.lern.slice(0, 3)].map(satz).join(" "),
    hashtags: hashtags(t),
    kurztitel: t.titel,
    coverBadge: "Reel",
    coverBildAuslassen: true,
    quellen: quellen(t),
    ...(dreiKlausuren ? { coverRegie: coverRegie(t, datum, slot) } : {}),
    regelGeprueft: true,
    manuellGeprueft: false,
    ...reviewStatus(),
  };
}
function recent(id, art, datum) {
  const letztes = (ledger.veroeffentlicht || [])
    .filter((e) => e.art === art && e.thema === id)
    .map((e) => e.datum)
    .sort()
    .at(-1);
  if (!letztes) return false;
  const diff = (Date.parse(datum + "T12:00:00Z") - Date.parse(letztes + "T12:00:00Z")) / 86400000;
  return diff < (art === "story" ? 60 : CONFIG.plan.themenSperreTage);
}

function pick(datum, { art = "beitrag", klausur = null, types = null, filter = null, used = new Set(), seed = "x" } = {}) {
  let kandidaten = pool.filter((t) =>
    !used.has(t.id)
    && (!dreiKlausuren || !historischeIds.has(t.id))
    && (klausur == null || Number(t.klausur) === Number(klausur))
    && (!types || types.includes(t.typ))
    && (!filter || filter(t))
  );
  const frei = kandidaten.filter((t) => !recent(t.id, art, datum));
  if (dreiKlausuren && !frei.length) {
    throw new Error("Kein unverbrauchtes Thema für " + datum + "/" + seed);
  }
  if (frei.length) kandidaten = frei;
  if (!kandidaten.length) throw new Error("Kein Thema für " + datum + "/" + seed);

  const prio = { hoch: 3, mittel: 2, selten: 1 };
  const score = (t) => {
    const hash = crypto.createHash("sha256").update(datum + ":" + seed + ":" + t.id).digest().readUInt32BE(0);
    return (prio[t.prioritaet] || 1) * (strategy.fachGewicht?.[t.fach] || 1) + hash / 0xffffffff;
  };
  return kandidaten.sort((a, b) => score(b) - score(a))[0];
}

function story(datum, planStory, t, used) {
  const art = planStory.art;
  if (art === "countdown") {
    return {
      slot: planStory.slot,
      art,
      fach: null,
      klausur: 0,
      fachLabel: "Steuerberaterexamen",
      ueberzeile: "Noch",
      zahl: String(Math.max(0, Number(planStory.tageBisExamen ?? 0))),
      titel: "Tage bis zum Examen",
      text: "Wiederholen, Klausurtechnik sichern, nichts Neues erzwingen.",
      fortschritt: 0,
      ...reviewStatus(),
    };
  }

  if (!t) throw new Error(datum + " " + planStory.slot + ": Story ohne Thema.");
  used.add(t.id);
  const k = kern(t);
  const basis = {
    slot: planStory.slot,
    art,
    ...fachMeta(t),
    pairId: t.id,
    quellen: quellen(t),
    regelGeprueft: true,
    manuellGeprueft: false,
    ...reviewStatus(),
  };

  if (art === "frage") {
    return { ...basis, ueberzeile: "Prüfungsfrage", titel: t.titel };
  }
  if (art === "antwort") {
    return {
      ...basis,
      ueberzeile: "Auflösung",
      titel: "Kern der Antwort",
      text: quizAntwort(k) || k.antwort || (k.lern.length ? k.lern : k.schritte).slice(0, 3).map(satz).join(" "),
    };
  }
  if (art === "norm") {
    return {
      ...basis,
      ueberzeile: "Norm des Tages",
      norm: t.normen?.[0] || "Prüfungsschema",
      titel: t.titel,
      text: (k.lern.length ? k.lern : k.schritte).slice(0, 2).join(" "),
    };
  }
  if (art === "merksatz") {
    return { ...basis, ueberzeile: "Merksatz", titel: t.titel, text: k.merksatz || k.lern[0] || k.schritte[0] };
  }
  if (art === "begriff") {
    if (!k.definition) planStory.art = "tipp";
    else return {
      ...basis,
      ueberzeile: "Begriff des Tages",
      titel: t.titel,
      text: k.definition,
      norm: t.normen?.[0] || undefined,
    };
  }
  if (art === "fehler") {
    const falsch = k.fehler[0] || "Prüfungsschritt überspringen oder zu früh zum Ergebnis springen.";
    return {
      ...basis,
      ueberzeile: "Typischer Fehler",
      titel: t.titel,
      falsch,
      richtigText: k.lern[0] || k.schritte[0] || k.merksatz || t.titel,
    };
  }
  if (art === "formel") {
    if (!k.ausdruck) planStory.art = "tipp";
    else return {
      ...basis,
      ueberzeile: "Rechenweg",
      titel: t.titel,
      formel: k.ausdruck,
      text: k.erklaerung || k.lern[0] || k.merksatz || "",
    };
  }
  if (art === "zahl") {
    /* Providerfrei niemals eine scheinbare Fachzahl aus der Anzahl von
       Stichpunkten erfinden. Ohne explizit strukturierten Zahlenfakt wird aus
       dem Slot ein normaler Klausurtipp. */
    planStory.art = "tipp";
  }
  return {
    ...basis,
    art: "tipp",
    ueberzeile: "Klausurtipp",
    titel: t.titel,
    text: satz(k.schritte[0] || k.merksatz || k.lern[0] || t.titel),
  };
}

function recap(datum, slot) {
  const rows = [];
  const start = monday(datum);
  for (let i = 0; i < 6; i++) {
    const d = plus(start, i);
    const day = days.get(d);
    for (const b of day?.plan?.beitraege || []) {
      const t = b.themaId ? byId.get(b.themaId) : null;
      if (t) rows.push(t);
    }
  }

  for (const e of ledger.veroeffentlicht || []) {
    if (e.art !== "beitrag" || e.datum < start || e.datum > datum || !e.thema) continue;
    const t = byId.get(e.thema);
    if (t) rows.push(t);
  }

  const eindeutig = [...new Map(rows.map((t) => [t.id, t])).values()];
  const gruppen = { 1: [], 2: [], 3: [] };
  for (const t of eindeutig) if (gruppen[t.klausur]) gruppen[t.klausur].push(t);

  const slides = [{
    art: "titel",
    titel: "Wochenrückblick: K1 · K2 · K3",
    coverBadge: "Wochenrückblick",
    coverBildAuslassen: true,
  }];

  const wiederholungsanker = {
    1: "K1-Anker: Tatbestand, Verfahren und Umsatzsteuerfolge getrennt prüfen.",
    2: "K2-Anker: Einkunftsart, Normkette und Rechenweg in der richtigen Reihenfolge sichern.",
    3: "K3-Anker: Bilanzansatz, Bewertung und gesellschafterbezogene Ebenen sichtbar trennen.",
  };
  for (const nr of [1, 2, 3]) {
    const punkte = gruppen[nr].slice(0, 4).map((t) => {
      const k = kern(t);
      return anzeigeKurz(t.titel, 58) + ": " + anzeigeKurz(k.lern[0] || k.schritte[0] || "Kernfrage wiederholen", 118);
    });
    if (!punkte.length) punkte.push("Im Review-Zeitraum noch kein Feedthema dieser Klausur.");
    if (punkte.length === 1) punkte.push(wiederholungsanker[nr]);
    slides.push({
      art: "text",
      titel: KLAUSUREN[nr].label,
      punkte,
    });
  }
  slides.push({
    art: "cta",
    titel: "Drei Klausuren, eine Wiederholung",
    punkte: [
      "K1: Verfahrensrecht, Umsatzsteuer und Erbschaftsteuer bündeln",
      "K2: Ertragsteuern mit Norm und Rechenweg wiederholen",
      "K3: Bilanzposten und Personengesellschaften sauber trennen",
    ],
    icons: ["dokument", "lupe", "buch"],
  });

  return {
    format: "wochenrueckblick",
    fach: "wochenrueckblick",
    klausur: 4,
    fachLabel: FEED_KATEGORIEN[4],
    themaId: null,
    slug: datum + "-" + slot,
    folien: slides,
    caption: "Wochenrückblick getrennt nach den drei schriftlichen Klausuren des Steuerberaterexamens.",
    hashtags: ["#steuerberaterexamen", "#examensvorbereitung", "#wochenrückblick"],
    kurztitel: "Wochenrückblick K1 · K2 · K3",
    coverBadge: "Wochenrückblick",
    coverBildAuslassen: true,
    quellen: [...new Set(eindeutig.flatMap(quellen))],
    regelGeprueft: true,
    manuellGeprueft: false,
    ...reviewStatus(),
  };
}

function anlassBeitrag(datum, slot, b) {
  const a = b.anlass || {};
  const klausur = Number(b.klausur || a.klausur || 0);
  const titel = a.titel || "Examensphase";
  const kontext = a.kontext || "Die Examensphase bestimmt heute den Schwerpunkt.";
  const label = KLAUSUREN[klausur]?.label || "Steuerberaterexamen";
  return {
    format: "anlass",
    fach: null,
    klausur,
    fachLabel: label,
    themaId: null,
    slug: datum + "-" + slot,
    folien: [
      { art: "titel", titel, coverBadge: "Examensphase", coverBildAuslassen: true },
      { art: "text", titel: "Heute zählt", text: kontext },
      {
        art: "cta",
        titel: "Für heute",
        punkte: [
          "Nur Bekanntes wiederholen",
          "Zeit und Material für die Klausur sichern",
          "Mit ruhigem Aufbau Punkte sammeln",
        ],
        icons: ["buch", "uhr", "haken"],
      },
    ],
    caption: kontext,
    hashtags: ["#steuerberaterexamen", "#examensvorbereitung"],
    kurztitel: cut(titel, 56),
    coverBadge: "Examensphase",
    coverBildAuslassen: true,
    quellen: ["Examenskalender"],
    regelGeprueft: true,
    manuellGeprueft: false,
    ...reviewStatus(),
  };
}

function livePlatzhalter(datum, slot, b) {
  const nr = Number(b.klausur || b.anlass?.klausur || 0);
  return {
    format: b.format,
    fach: null,
    klausur: nr,
    fachLabel: KLAUSUREN[nr]?.label || "Steuerberaterexamen",
    themaId: null,
    slug: datum + "-" + slot,
    rendern: false,
    grund: "Lösungsskizzen beruhen auf Berichten aus der tatsächlich geschriebenen Klausur und werden nicht vorab erfunden.",
    ...reviewStatus({ vorproduktionStatus: "wartet-auf-live-recherche" }),
  };
}

function addLedger(datum, p, inhalte) {
  for (const b of p.beitraege || []) {
    const id = b.thema?.id;
    if (!id) continue;
    ledger.veroeffentlicht.push({
      datum,
      art: "beitrag",
      slot: b.slot,
      format: b.format,
      thema: id,
      fach: b.thema.fach,
      klausur: b.klausur,
    });
  }
  for (const s of p.stories || []) {
    if (s.beitragSlot) continue;
    const id = inhalte[s.slot]?.pairId;
    if (!id) continue;
    ledger.veroeffentlicht.push({
      datum,
      art: "story",
      slot: s.slot,
      storyArt: s.art,
      thema: id,
      fach: inhalte[s.slot]?.fach,
    });
  }
}

for (const datum of dates) {
  const p = tagesplan(datum, ledger, pool, strategy);
  if (dreiKlausuren) {
    if (p.beitraege.length !== 3) throw new Error(datum + ": genau drei Feed-Slots erwartet.");
    // Nach dem 28.09. endet die bestehende Folge mit K2: K3, K1, K2
    // setzt sie ohne Farbduplikat über jede Tagesgrenze fort.
    const farben = [3, 1, 2];
    const benutzt = new Set();
    p.beitraege.forEach((b, i) => {
      b.zeit = ["08:30", "13:30", "19:00"][i];
      const original = b.format;
      b.format = i === 2 ? "reel"
        : ["anlass", "loesungsskizze", "wochenrueckblick", "aktuell"].includes(original)
          ? "spickzettel" : original;
      if (["pruefungsfrage", "rechenweg", "minifall"].includes(b.format)) {
        // Diese providerfreien Kacheln enthalten weder Quizauflösung noch
        // ausgerechneten Fall: ihr ehrliches Format ist ein Lern-Spickzettel.
        b.format = "spickzettel";
      }
      b.klausur = farben[i];
      const typen = FORMAT_QUELLEN[b.format] || FORMAT_QUELLEN.pruefungsfrage;
      const passend = pool.some((t) => t.klausur === b.klausur && typen.includes(t.typ));
      if (!passend) b.format = "pruefungsfrage";
      b.thema = pick(datum, {
        klausur: b.klausur,
        types: FORMAT_QUELLEN[b.format],
        used: benutzt,
        seed: "drei-klausuren-" + b.slot,
        filter: (t) => {
          const k = kern(t);
          if (!k.lern.length || !k.schritte.length) return false;
          if (b.format !== "reel" && k.schritte.slice(0, 2).some((x) =>
            x.length < 22 || /Quellenhinweis|Quellenmatrix|Skript|Mitschrift/i.test(x)
          )) return false;
          const entwurf = b.format === "reel"
            ? reel(datum, b.slot, t)
            : carousel(datum, b.slot, b.format, t);
          return pruefeBeitrag(entwurf).ok
            && !/Unterrichtsnotiz|Originalfall|Musterlösung|Hausaufgabe|laut (?:Skript|Unterlage|Mitschrift)|aus (?:dem|der) (?:Skript|Unterlage|Mitschrift)|der Einheit|im Kurs/i.test(JSON.stringify(entwurf))
            && (b.format !== "reel" || !JSON.stringify(entwurf.szenen).includes("…"));
        },
      });
      benutzt.add(b.thema.id);
    });
    const klausuren = p.beitraege.map((b) => b.klausur).sort().join(",");
    if (klausuren !== "1,2,3" || p.beitraege.filter((b) => b.format === "reel").length !== 1) {
      throw new Error(datum + ": K1/K2/K3 mit zwei Karussells und einem Reel verfehlt.");
    }
    const storyThemen = new Set(benutzt);
    let frageThema = null;
    const storyTypen = {
      frage: ["quiz", "karteikarte"], norm: ["modul", "begriff"],
      merksatz: ["modul"], begriff: ["begriff", "karteikarte"],
      fehler: ["modul"], tipp: ["modul"], zahl: ["formel", "modul"],
      formel: ["formel"],
    };
    for (const s of p.stories) {
      if (s.beitragSlot) {
        s.zeit = p.beitraege.find((b) => b.slot === s.beitragSlot)?.zeit || s.zeit;
        continue;
      }
      if (s.art === "countdown") continue;
      if (s.art === "antwort") {
        s.thema = frageThema;
        continue;
      }
      const waehlen = () => pick(datum, {
        art: "story", types: storyTypen[s.art], used: storyThemen,
        seed: "story-" + s.slot,
        filter: (t) => {
          const vorschau = story(datum, { ...s }, t, new Set());
          const text = String(vorschau.text || "").trim();
          if (s.art === "begriff" && (!kern(t).definition || text === t.titel)) return false;
          if (s.art === "formel" && (!kern(t).ausdruck || vorschau.formel === vorschau.titel)) return false;
          if (s.art === "fehler" && (!vorschau.falsch || !vorschau.richtigText)) return false;
          if (!pruefeBeitrag({ stories: [vorschau] }).ok) return false;
          if (s.art === "frage") {
            const antwort = story(datum, { ...s, art: "antwort" }, t, new Set());
            return Boolean(antwort.text) && pruefeBeitrag({ stories: [antwort] }).ok;
          }
          return true;
        },
      });
      try {
        s.thema = waehlen();
      } catch (e) {
        if (s.art === "tipp" || !String(e.message).startsWith("Kein unverbrauchtes Thema")) throw e;
        s.art = "tipp";
        s.thema = waehlen();
      }
      storyThemen.add(s.thema.id);
      if (s.art === "frage") frageThema = s.thema;
    }
  }
  const used = new Set(p.beitraege.map((b) => b.thema?.id).filter(Boolean));

  /* "Aktuell" braucht im Live-Betrieb Webrecherche. Im providerfreien Review
     wird nur fuer dieses Format ein gleichfarbiges Pool-Thema eingesetzt. */
  for (const b of p.beitraege) {
    if (b.format === "aktuell" && !b.thema) {
      b.format = "pruefungsfrage";
      b.thema = pick(datum, {
        klausur: b.klausur,
        types: FORMAT_QUELLEN.pruefungsfrage,
        used,
        seed: "aktuell-" + b.slot,
      });
      used.add(b.thema.id);
    }
  }

  const inhalte = {};
  for (const b of p.beitraege) {
    if (b.format === "wochenrueckblick") inhalte[b.slot] = recap(datum, b.slot);
    else if (b.format === "anlass") inhalte[b.slot] = anlassBeitrag(datum, b.slot, b);
    else if (b.format === "loesungsskizze") inhalte[b.slot] = livePlatzhalter(datum, b.slot, b);
    else if (b.format === "reel") {
      if (!b.thema) throw new Error(datum + " " + b.slot + ": Reel ohne Thema.");
      inhalte[b.slot] = reel(datum, b.slot, b.thema);
    } else {
      if (!b.thema) throw new Error(datum + " " + b.slot + ": Beitrag ohne Thema.");
      inhalte[b.slot] = carousel(datum, b.slot, b.format, b.thema);
    }
  }

  const storyUsed = new Set(used);
  for (const s of p.stories || []) {
    if (s.beitragSlot) continue;
    let thema = s.thema || null;
    if (!thema && s.art !== "countdown") {
      thema = pick(datum, { art: "story", used: storyUsed, seed: s.slot });
    }
    inhalte[s.slot] = story(datum, s, thema, storyUsed);
  }

  const plan = {
    beitraege: p.beitraege.map((b) => ({
      slot: b.slot,
      zeit: b.zeit,
      format: b.format,
      themaId: b.thema?.id || null,
      themaTitel: b.thema?.titel || null,
      fach: b.thema?.fach || inhalte[b.slot]?.fach || null,
      klausur: b.klausur,
      ...(inhalte[b.slot]?.rendern === false ? { status: "wartet-auf-live-recherche" } : {}),
      ...(b.format === "reel" ? { lang: Boolean(b.lang) } : {}),
    })),
    stories: (p.stories || []).map((s) => ({
      slot: s.slot,
      zeit: s.zeit,
      art: s.art,
      ...(s.thema?.id ? { themaId: s.thema.id } : {}),
      ...(s.beitragSlot ? { beitragSlot: s.beitragSlot, status: "aus-beitrag-ableitbar" } : {}),
      ...(s.tageBisExamen != null ? { tageBisExamen: s.tageBisExamen } : {}),
    })),
  };

  const day = {
    datum,
    status: "vorproduziert",
    freigabeBetreiber: false,
    liveVerknuepft: false,
    vorproduktionStatus: "review",
    layoutQuelle: "herrjurist",
    semantikQuelle: "examenscampus",
    kostenPolicy: {
      textUndFaktencheckUsd: 0,
      bildgenerierungUsd: 0,
      providerKostenUsd: 0,
      piperOffline: true,
      coverbilder: false,
    },
    plan,
    inhalte,
    renderVorschau: {
      status: "ausstehend",
      coverbilder: false,
      charakterLayer: "bewusst-ausgelassen",
      reelLayout: "erklaer",
      audio: "piper-offline",
      providerKostenUsd: 0,
    },
    liveRegel: {
      veroeffentlichen: false,
      freigabeErforderlich: true,
    },
  };

  examenscampusRegelnPruefen(day);
  fs.writeFileSync(path.join(vp, datum + ".json"), JSON.stringify(day, null, 2) + "\n");
  days.set(datum, day);
  addLedger(datum, p, inhalte);
  const wartend = plan.beitraege.filter((b) => b.status === "wartet-auf-live-recherche").length;
  console.log(
    datum + ": " + plan.beitraege.length + " Feed + " + plan.stories.length
    + " Stories vorbereitet" + (wartend ? " (" + wartend + " Live-Slot wartet)" : "")
  );
}

if (dreiKlausuren) {
  // Die Themenwahl für alle Feed-Slots steht jetzt fest. Eigenständige Stories
  // dürfen keines dieser 90 Themen an einem anderen Tag vorwegnehmen.
  const feedIds = new Set(dates.flatMap((d) =>
    days.get(d).plan.beitraege.map((b) => b.themaId).filter(Boolean)
  ));
  ledger.veroeffentlicht = ledger.veroeffentlicht.filter((e) =>
    !targetSet.has(e.datum) || e.art !== "story"
  );
  const storyIds = new Set();
  const typen = {
    frage: ["quiz", "karteikarte"], norm: ["modul", "begriff"],
    merksatz: ["modul"], begriff: ["begriff", "karteikarte"],
    fehler: ["modul"], tipp: ["modul"], zahl: ["formel", "modul"],
    formel: ["formel"],
  };
  for (const datum of dates) {
    const day = days.get(datum);
    let frage = null;
    for (const s of day.plan.stories) {
      if (s.beitragSlot || s.art === "countdown") continue;
      if (s.art === "antwort") {
        if (!frage) throw new Error(datum + ": Antwort ohne Frage.");
        s.themaId = frage.id;
        day.inhalte[s.slot] = story(datum, s, frage, new Set());
        continue;
      }
      const erlaubt = (t) => {
        const v = story(datum, { ...s }, t, new Set());
        if (/Unterrichtsnotiz|Originalfall|Musterlösung|Hausaufgabe|laut (?:Skript|Unterlage|Mitschrift)|aus (?:dem|der) (?:Skript|Unterlage|Mitschrift)|der Einheit|im Kurs/i.test(JSON.stringify(v))) return false;
        if (s.art === "begriff" && (!kern(t).definition || v.text === t.titel)) return false;
        if (s.art === "formel" && (!kern(t).ausdruck || v.formel === v.titel)) return false;
        if (s.art === "fehler" && (!v.falsch || !v.richtigText)) return false;
        if (!pruefeBeitrag({ stories: [v] }).ok) return false;
        if (s.art !== "frage") return true;
        const a = story(datum, { ...s, art: "antwort" }, t, new Set());
        return Boolean(a.text) && pruefeBeitrag({ stories: [a] }).ok;
      };
      const alt = byId.get(s.themaId);
      let t = alt && !historischeIds.has(alt.id) && !feedIds.has(alt.id) && !storyIds.has(alt.id)
        && !recent(alt.id, "story", datum) && erlaubt(alt) ? alt : null;
      if (!t) {
        const waehlen = () => pick(datum, {
          art: "story", types: typen[s.art], used: new Set([...feedIds, ...storyIds]),
          seed: "exklusiv-" + s.slot, filter: erlaubt,
        });
        try { t = waehlen(); }
        catch (e) {
          if (s.art === "tipp" || !String(e.message).startsWith("Kein unverbrauchtes Thema")) throw e;
          s.art = "tipp";
          t = waehlen();
        }
      }
      s.themaId = t.id;
      day.inhalte[s.slot] = story(datum, s, t, new Set());
      storyIds.add(t.id);
      if (s.art === "frage") frage = t;
    }
    examenscampusRegelnPruefen(day);
    fs.writeFileSync(path.join(vp, datum + ".json"), JSON.stringify(day, null, 2) + "\n");
    addLedger(datum, { beitraege: [], stories: day.plan.stories }, day.inhalte);
  }
}

const indexPath = path.join(vp, "index.json");
const index = read(indexPath, { version: 1, tage: [] });
index.stand = dates.at(-1);
index.layoutQuelle = "herrjurist";
index.semantikQuelle = "examenscampus";
index.kostenPolicy = {
  ...(index.kostenPolicy || {}),
  textUndFaktencheckUsd: 0,
  bildgenerierungInNeuenReviewTagen: false,
  providerKostenNeueReviewTageUsd: 0,
};
const map = new Map((index.tage || []).map((x) => [x.datum, x]));
for (const datum of dates) {
  const day = days.get(datum);
  const teaser = day.plan.stories.filter((s) => s.beitragSlot).length;
  const eigen = day.plan.stories.length - teaser;
  const wartend = day.plan.beitraege.filter((b) => b.status === "wartet-auf-live-recherche").length;
  map.set(datum, {
    datum,
    status: wartend ? "teilweise-vorproduziert" : "vorproduziert",
    freigabeBetreiber: false,
    liveVerknuepft: false,
    vorproduktionStatus: "review",
    feed: day.plan.beitraege.length,
    storiesEigenstaendig: eigen,
    teaserAbgeleitet: teaser,
    wartetLive: wartend,
    reviewPfad: "vorproduktion/" + datum + "/fertig",
    coverbilder: false,
    providerKostenUsd: 0,
  });
}
index.tage = [...map.values()].sort((a, b) => a.datum.localeCompare(b.datum));
fs.writeFileSync(indexPath, JSON.stringify(index, null, 2) + "\n");

hosting.commit("Examenscampus-Vorproduktion " + dates[0] + " bis " + dates.at(-1) + " providerfrei vorbereiten");
await hosting.push();
console.log("0,00 USD Providerkosten.");
