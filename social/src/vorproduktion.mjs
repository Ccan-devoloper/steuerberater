/* ==========================================================================
   Regeln fuer die Examenscampus-Vorproduktion.

   Layout und Review-Mechanik folgen dem Schwesterkanal Herrjurist. Farben,
   Fachzuordnung und Klausurtage kommen dagegen ausschliesslich aus den
   Examenscampus-Modulen. Diese Datei ist die Schranke zwischen beidem.
   ========================================================================== */

import { CONFIG } from "./config.mjs";
import { fachInfo, KLAUSUREN, FEED_KATEGORIEN, feedKategorie } from "./inhalte.mjs";

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

export function examenscampusRegelnPruefen(tag) {
  if (!tag?.plan || !tag?.inhalte) throw new Error("Vorproduktion: Plan oder Inhalte fehlen.");

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
    vorher = kategorie;
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
