/* ==========================================================================
   Sichtbare Feed-Farben des Instagram-Kanals.

   Absichtlich ohne Imports: Auch der kostenlose Reserve-Entnahmepfad darf
   diese Regel verwenden, ohne dadurch Autor, Renderer oder andere bezahlte
   Produktionsmodule transitiv erreichbar zu machen.
   ========================================================================== */

const FACH_KATEGORIE = Object.freeze({
  mindset: 0,
  ao: 1,
  ust: 1,
  erbst: 1,
  est: 2,
  gewst: 2,
  kst: 2,
  istr: 2,
  bilanz: 3,
  persg: 3,
});

export const FEED_KATEGORIEN = Object.freeze({
  0: "Klausurtechnik / Kopfsache",
  1: "Klausur 1",
  2: "Klausur 2",
  3: "Klausur 3",
  4: "Wochenrückblick",
});

export function feedKategorie(eintrag = {}) {
  if (eintrag?.format === "wochenrueckblick" || eintrag?.fach === "wochenrueckblick") return 4;
  /* Violett ist nur noch für wirklich fachübergreifende Inhalte reserviert.
     Das Format "klausurtechnik" allein ändert die Klausurfarbe nicht: Hat der
     Beitrag ein Fachthema, bleibt dessen Klausurtag die primäre Einordnung. */
  if (
    eintrag?.fach === "mindset" ||
    eintrag?.thema?.fach === "mindset" ||
    String(eintrag?.thema || eintrag?.themaId || "").startsWith("mindset-")
  ) return 0;

  const fach = eintrag?.fach || eintrag?.thema?.fach;
  if (fach && FACH_KATEGORIE[fach] != null) return FACH_KATEGORIE[fach];

  if (eintrag?.klausur != null && Number.isFinite(Number(eintrag.klausur))) return Number(eintrag.klausur);
  if (eintrag?.thema?.klausur != null && Number.isFinite(Number(eintrag.thema.klausur))) return Number(eintrag.thema.klausur);
  return null;
}

export function feedFolgeErlaubt(vorher, nachher) {
  const a = feedKategorie(vorher), b = feedKategorie(nachher);
  return a == null || b == null || a !== b;
}
