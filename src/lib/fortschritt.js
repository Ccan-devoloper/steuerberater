import { useCallback, useEffect, useMemo, useState } from "react";

/* ---------------------------------------------------------------- Speicher */
export function laden(schluessel, standard) {
  try {
    const roh = localStorage.getItem(schluessel);
    return roh ? JSON.parse(roh) : standard;
  } catch {
    return standard;
  }
}

export function sichern(schluessel, wert) {
  try {
    localStorage.setItem(schluessel, JSON.stringify(wert));
  } catch {
    /* Speicher nicht verfügbar – Fortschritt gilt dann nur für diese Sitzung. */
  }
}

/* Gespeicherte Kennungen gegen den heutigen Bestand filtern.

   Ohne diesen Schritt zählt der Fortschritt Einträge mit, die es nicht mehr
   gibt: Wer in einer älteren Fassung Module abgehakt hat, die später entfallen
   oder umnummeriert wurden, sieht sonst Stände wie „80 von 75" und 107 %.
   Doppelte Einträge werden zugleich entfernt. */
export function bereinigen(werte, gueltig) {
  if (!Array.isArray(werte)) return [];
  const gehoertDazu =
    typeof gueltig === "function" ? gueltig : (id) => gueltig.has(id);
  return [...new Set(werte.filter(gehoertDazu))];
}

/* --------------------------------------------------------------- Fortschritt

   Eine Liste abgehakter Kennungen, die sich selbst speichert und beim Laden
   gegen den gültigen Bestand bereinigt. */
export function useFortschritt(schluessel, gueltig) {
  const [werte, setWerte] = useState(() => bereinigen(laden(schluessel, []), gueltig));

  useEffect(() => {
    sichern(schluessel, werte);
  }, [schluessel, werte]);

  const umschalten = useCallback((id) => {
    setWerte((alt) => (alt.includes(id) ? alt.filter((x) => x !== id) : [...alt, id]));
  }, []);

  const zuruecksetzen = useCallback(() => setWerte([]), []);

  const menge = useMemo(() => new Set(werte), [werte]);

  return { werte, menge, umschalten, zuruecksetzen, anzahl: werte.length };
}

/* Anteil in Prozent, hart auf 0–100 begrenzt. */
export function anteil(erledigt, gesamt) {
  if (!gesamt) return 0;
  return Math.min(100, Math.max(0, Math.round((erledigt / gesamt) * 100)));
}
