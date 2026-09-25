/* ==========================================================================
   Regeln fuer die Examenscampus-Vorproduktion.

   Layout und Review-Mechanik folgen dem Schwesterkanal Herrjurist. Farben,
   Fachzuordnung und Klausurtage kommen dagegen ausschliesslich aus den
   Examenscampus-Modulen. Diese Datei ist die Schranke zwischen beidem.
   ========================================================================== */

import { CONFIG } from "./config.mjs";
import { fachInfo, KLAUSUREN, FEED_KATEGORIEN, feedKategorie } from "./inhalte.mjs";
import { pruefeBeitrag } from "./pruefung.mjs";

export const VORPRODUKTION_LAYOUT = Object.freeze({
  feed: Object.freeze({ breite: 1080, hoehe: 1350, verhaeltnis: "4:5" }),
  story: Object.freeze({ breite: 1080, hoehe: 1920, verhaeltnis: "9:16" }),
  reelCover: Object.freeze({
    breite: 1080,
    hoehe: 1920,
    verhaeltnis: "9:16",
    profilSafeArea: "4:5",
  }),
  renderer: "social/src/render.mjs",
  vorlagen: "social/src/vorlagen.mjs",
  farbquelle: "social/src/feedfarben.mjs",
  bildlosesCoverMitHandschrift: false,
  farbenAusSchwesterkanalUebernehmen: false,
});

export function fachMeta(eintrag = {}) {
  const fach = eintrag.fach || eintrag.thema?.fach || null;
  const info = fach ? fachInfo(fach) : null;
  const klausur = Number(
    eintrag.klausur
      ?? eintrag.thema?.klausur
      ?? info?.klausur
      ?? 0
  );
  return {
    fach,
    klausur,
    fachLabel: info?.label
      || (klausur === 4 ? FEED_KATEGORIEN[4] : null)
      || (KLAUSUREN[klausur]?.label ?? "Steuerberaterexamen"),
  };
}

export function reviewStatus(extra = {}) {
  return {
    freigabeBetreiber: false,
    vorproduktionStatus: "review",
    textProviderKostenUsd: 0,
    faktencheckProviderKostenUsd: 0,
    bildStatus: "bewusst-ausgelassen",
    ...extra,
  };
}

export function providerfreieVorproduktionPruefen() {
  for (const key of ["OPENAI_API_KEY", "ANTHROPIC_API_KEY", "ELEVENLABS_API_KEY", "PEXELS_API_KEY"]) {
    if (String(process.env[key] || "").trim()) {
      throw new Error("Providerfreie Vorproduktion verweigert Secret: " + key);
    }
  }
  if (String(process.env.IG_BILD_KI || "false").toLowerCase() !== "false") {
    throw new Error("Providerfreie Vorproduktion verlangt IG_BILD_KI=false.");
  }
  if (String(process.env.IG_CHARAKTERE || "false").toLowerCase() !== "false") {
    throw new Error("Providerfreie Vorproduktion verlangt IG_CHARAKTERE=false.");
  }
  if (CONFIG.marke.farbeJeKlausur !== true) {
    throw new Error("Examenscampus-Vorproduktion verlangt die bestehende Klausurfarben-Regel.");
  }
}

function sichtbareKategorie(planEintrag, inhalt) {
  return feedKategorie({
    format: planEintrag?.format || inhalt?.format,
    fach: inhalt?.fach || planEintrag?.fach,
    klausur: inhalt?.klausur ?? planEintrag?.klausur,
    thema: inhalt?.thema || null,
  });
}

const QUELLENSPRACHE = /\b(?:Unterrichtsnotiz|Originalfall|Musterlösung|Hausaufgabe|laut (?:Skript|Unterlage|Mitschrift)|aus (?:dem|der) (?:Skript|Unterlage|Mitschrift)|der Einheit|im Kurs)\b/i;
const GENERISCHE_ZAHL = /Diese Punkte tragen die sichtbare Prüfungsstruktur/i;

function publikationsregelnPruefen(inhalt, label) {
  const lokal = pruefeBeitrag(inhalt);
  if (!lokal.ok) {
    throw new Error(label + ": Veröffentlichungsregel verletzt: " + lokal.fehler.join(" | "));
  }
  const roh = JSON.stringify(inhalt);
  if (QUELLENSPRACHE.test(roh)) {
    throw new Error(label + ": Kurs-/Dozentensprache darf nicht in Social-Inhalte gelangen.");
  }
  if (Array.isArray(inhalt?.szenen)) {
    for (const [i, s] of inhalt.szenen.entries()) {
      for (const [feld, wert] of [["titel", s.titel], ["text", s.text], ["marken", (s.marken || []).join(" ")]]) {
        if (String(wert || "").includes("…")) {
          throw new Error(label + " Szene " + (i + 1) + ": sichtbarer " + feld + "-Text ist künstlich mit … abgeschnitten.");
        }
      }
    }
  }
}

function storySemantikPruefen(story, label) {
  publikationsregelnPruefen({ stories: [story] }, label);
  if (story.art === "antwort" && !String(story.text || "").trim()) {
    throw new Error(label + ": Auflösung ohne Antworttext.");
  }
  if (story.art === "formel") {
    const formel = String(story.formel || "").trim();
    if (!formel || formel.toLowerCase() === String(story.titel || "").trim().toLowerCase()) {
      throw new Error(label + ": Rechenweg braucht eine echte Formel und darf nicht nur den Titel wiederholen.");
    }
  }
  if (story.art === "begriff") {
    const text = String(story.text || "").trim();
    if (!text || text.toLowerCase() === String(story.titel || "").trim().toLowerCase()) {
      throw new Error(label + ": Begriff braucht eine echte Definition.");
    }
  }
  if (story.art === "zahl" && GENERISCHE_ZAHL.test(String(story.text || ""))) {
    throw new Error(label + ": Zahl des Tages darf nicht aus der Anzahl generischer Stichpunkte erfunden werden.");
  }
  if (story.art === "fehler" && (!String(story.falsch || "").trim() || !String(story.richtigText || "").trim())) {
    throw new Error(label + ": Fehler-Story braucht Fehler und konkrete Korrektur.");
  }
}

export function examenscampusRegelnPruefen(tag) {
  if (!tag?.plan || !tag?.inhalte) throw new Error("Vorproduktion: Plan oder Inhalte fehlen.");

  const feed = tag.plan.beitraege || [];
  if (feed.length !== 3) {
    throw new Error(tag.datum + ": Vorproduktion verlangt genau 3 Feed-Beiträge.");
  }
  const reels = feed.filter((b) => b.format === "reel");
  if (reels.length !== 1) {
    throw new Error(tag.datum + ": Vorproduktion verlangt genau 1 Reel.");
  }
  const klausuren = feed.map((b) => Number(b.klausur)).sort();
  if (JSON.stringify(klausuren) !== JSON.stringify([1, 2, 3])) {
    throw new Error(tag.datum + ": Vorproduktion muss K1, K2 und K3 je genau einmal abdecken.");
  }
  const karussells = feed.filter((b) => b.format !== "reel");
  if (karussells.length !== 2 || karussells.some((b) => !Array.isArray(tag.inhalte[b.slot]?.folien))) {
    throw new Error(tag.datum + ": Vorproduktion verlangt genau 2 gerenderte Karussells.");
  }

  let vorher = null;
  for (const b of tag.plan.beitraege || []) {
    const inhalt = tag.inhalte[b.slot];
    if (!inhalt) throw new Error(tag.datum + " " + b.slot + ": Inhalt fehlt.");

    if (inhalt.rendern === false) continue;

    const kategorie = sichtbareKategorie(b, inhalt);
    if (kategorie == null || !Object.hasOwn(FEED_KATEGORIEN, kategorie)) {
      throw new Error(tag.datum + " " + b.slot + ": ungueltige Feed-Kategorie " + String(kategorie));
    }

    const info = fachInfo(inhalt.fach);
    if (info && [1, 2, 3].includes(Number(info.klausur)) && kategorie !== Number(info.klausur)) {
      throw new Error(
        tag.datum + " " + b.slot + ": Fach " + inhalt.fach
        + " gehoert zu K" + info.klausur + ", geplant ist aber K" + kategorie + "."
      );
    }

    if (vorher != null && vorher === kategorie) {
      throw new Error(tag.datum + " " + b.slot + ": Feed-Kategorie " + kategorie + " folgt direkt auf sich selbst.");
    }
    publikationsregelnPruefen(inhalt, tag.datum + " " + b.slot);
    vorher = kategorie;
  }

  for (const s of tag.plan.stories || []) {
    if (s.art === "teaser") continue;
    const story = tag.inhalte[s.slot];
    if (!story) throw new Error(tag.datum + " " + s.slot + ": Story-Inhalt fehlt.");
    storySemantikPruefen(story, tag.datum + " " + s.slot);
  }

  return true;
}

export function layoutVertrag() {
  return {
    ...VORPRODUKTION_LAYOUT,
    klausuren: Object.fromEntries(
      Object.entries(KLAUSUREN).map(([k, v]) => [k, v.label])
    ),
    feedKategorien: { ...FEED_KATEGORIEN },
  };
}
