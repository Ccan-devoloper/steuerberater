import { useCallback, useEffect, useRef, useState } from "react";

/* Vor-/Zurück-Verlauf für die Campusse ohne eigenen Verlaufszustand.
   Gleiche Semantik wie die großen Campusse: Abzweigen mitten im Verlauf
   verwirft den Vorwärtszweig.

   Ein Eintrag ist ein Zustandsobjekt, nicht nur eine Ansichts-ID. Campusse
   führen neben der Rail-Ansicht meist einen Detailzustand (geöffnetes Modul,
   geöffnetes Prüfschema). Läge der außerhalb des Verlaufs, würde das Öffnen
   eines Details keinen Schritt erzeugen und der Zurück-Pfeil spränge an der
   Liste vorbei oder bliebe deaktiviert.

   oeffnen(ziel)  legt einen neuen Schritt an – ziel ist eine Ansichts-ID
                  oder ein Objekt { ansicht, ... }.
   ersetzen(ziel) ändert den aktuellen Schritt, ohne einen neuen anzulegen.
                  Für Zustände, die sich laufend ändern (Suchfeld) – sonst
                  entstünde pro Tastendruck ein Verlaufsschritt. */

const alsEintrag = (ziel) => (typeof ziel === "string" ? { ansicht: ziel } : ziel);

const gleich = (a, b) => {
  const schluessel = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const s of schluessel) if ((a[s] ?? null) !== (b[s] ?? null)) return false;
  return true;
};

export function useAnsichtVerlauf(start = "cockpit") {
  const [verlauf, setVerlauf] = useState(() => [alsEintrag(start)]);
  const [index, setIndex] = useState(0);
  const eintrag = verlauf[index];

  /* Länge als Ref, damit vor() eine stabile Funktion bleibt und der
     Tastatur-Effekt nicht bei jedem Schritt neu registriert wird. */
  const laenge = useRef(verlauf.length);
  laenge.current = verlauf.length;

  const oeffnen = useCallback((ziel) => {
    const naechster = alsEintrag(ziel);
    if (gleich(naechster, verlauf[index])) return;
    setVerlauf([...verlauf.slice(0, index + 1), naechster]);
    setIndex(index + 1);
  }, [verlauf, index]);

  const ersetzen = useCallback((ziel) => {
    const naechster = alsEintrag(ziel);
    setVerlauf((alt) => {
      if (gleich(naechster, alt[index])) return alt;
      const neu = [...alt];
      neu[index] = naechster;
      return neu;
    });
  }, [index]);

  const zurueck = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const vor = useCallback(() => setIndex((i) => Math.min(laenge.current - 1, i + 1)), []);

  /* Alt + Pfeil links/rechts – die Kopfleiste bewirbt das Kürzel im Titel
     beider Knöpfe, also muss es überall greifen, wo dieser Hook läuft. */
  useEffect(() => {
    const tastatur = (event) => {
      if (!event.altKey) return;
      if (event.key === "ArrowLeft") { event.preventDefault(); zurueck(); }
      if (event.key === "ArrowRight") { event.preventDefault(); vor(); }
    };
    window.addEventListener("keydown", tastatur);
    return () => window.removeEventListener("keydown", tastatur);
  }, [zurueck, vor]);

  return {
    ansicht: eintrag.ansicht,
    eintrag,
    oeffnen,
    ersetzen,
    zurueck,
    vor,
    zurueckMoeglich: index > 0,
    vorMoeglich: index < verlauf.length - 1,
  };
}
