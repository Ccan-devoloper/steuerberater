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

const hosting = new Hosting({ pushen: true }).vorbereiten();
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

function kern(t) {
  const k = t?.kern || {};
  return {
    lern: [...(k.lernziele || []), ...(k.einordnung || [])].map(clean).filter(Boolean),
    schritte: (k.pruefschritte || []).map(clean).filter(Boolean),
    fehler: (k.fehler || []).map(clean).filter(Boolean),
    merksatz: clean(k.merksatz),
    frage: clean(k.frage),
    antwort: clean(k.antwort),
    optionen: (k.optionen || []).map(clean).filter(Boolean),
    richtig: k.richtig,
    erklaerung: clean(k.erklaerung),
    ausdruck: clean(k.ausdruck),
    definition: clean(k.definition),
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

function carousel(datum, slot, format, t) {
  const k = kern(t);
  const erster = k.lern[0] || k.schritte[0] || t.titel;
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
      punkte: (k.lern.length ? k.lern : [t.titel]).slice(0, 4),
    },
  ];

  if (k.schritte.length) {
    slides.push({
      art: "schritte",
      titel: "So baust du die Prüfung auf",
      schritte: k.schritte.slice(0, 5).map((x, i) => ({
        titel: String(i + 1) + ". Schritt",
        text: x,
      })),
    });
  } else if (t.normen?.length) {
    slides.push({ art: "text", titel: "Normen im Zugriff", punkte: t.normen.slice(0, 6) });
  }

  if (k.fehler.length) {
    slides.push({ art: "text", titel: "Typischer Fehler", punkte: k.fehler.slice(0, 3) });
  }
  slides.push({
    art: "merke",
    titel: "Merksatz",
    text: k.merksatz || erster,
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
    caption: [t.titel, ...k.lern.slice(0, 3), ...k.schritte.slice(0, 1)].join(" "),
    hashtags: hashtags(t),
    kurztitel: cut(t.titel.replace(/[?]$/, ""), 56),
    coverBadge: format === "klausurtechnik" ? null : badge(format),
    coverBildAuslassen: true,
    quellen: quellen(t),
    regelGeprueft: true,
    manuellGeprueft: false,
    ...reviewStatus(),
  };
}

function reel(datum, slot, t) {
  const k = kern(t);
  const punkte = (k.schritte.length ? k.schritte : k.lern).slice(0, 5);
  const basis = punkte.length ? punkte : [t.titel];
  const hookText = anzeigeKurz(k.lern[0] || basis[0], 66);
  const szenen = [{
    art: "hook",
    nummer: null,
    titel: t.titel,
    unter: fachLabel(t),
    text: hookText,
    norm: t.normen?.[0] || null,
    icon: null,
    sprecher: satz(t.titel) + " " + satz(k.lern[0] || basis[0]),
    marken: [anzeigeKurz(k.lern[0] || basis[0], 42)],
  }];

  basis.forEach((roh, i) => {
    const x = ohneNummer(roh);
    szenen.push({
      art: "schritt",
      nummer: i + 1,
      titel: anzeigeKurz(x, 72),
      text: k.lern[i] && k.lern[i] !== roh ? anzeigeKurz(k.lern[i], 92) : null,
      norm: null,
      icon: null,
      sprecher: "Schritt " + String(i + 1) + ": " + satz(x),
      marken: [anzeigeKurz(x, 42)],
    });
  });

  szenen.push({
    art: "merke",
    nummer: null,
    titel: "Merksatz",
    text: anzeigeKurz(k.merksatz || k.lern[0] || basis[0], 110),
    sprecher: "Merke dir: " + satz(k.merksatz || k.lern[0] || basis[0]),
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
    caption: [t.titel, ...k.lern.slice(0, 3)].map(satz).join(" "),
    hashtags: hashtags(t),
    kurztitel: t.titel,
    coverBadge: "Reel",
    coverBildAuslassen: true,
    quellen: quellen(t),
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
    && (klausur == null || Number(t.klausur) === Number(klausur))
    && (!types || types.includes(t.typ))
    && (!filter || filter(t))
  );
  const frei = kandidaten.filter((t) => !recent(t.id, art, datum));
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

  for (const nr of [1, 2, 3]) {
    const punkte = gruppen[nr].slice(0, 4).map((t) => {
      const k = kern(t);
      return cut(t.titel, 58) + ": " + cut(k.lern[0] || k.schritte[0] || "Kernfrage wiederholen", 125);
    });
    slides.push({
      art: "text",
      titel: KLAUSUREN[nr].label,
      punkte: punkte.length ? punkte : ["Im Review-Zeitraum noch kein Thema dieser Klausur."],
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
