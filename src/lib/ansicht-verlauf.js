import { useState } from "react";

/* Minimaler Vor-/Zurück-Verlauf über die Rail-Ansichten – für Campusse ohne
   eigenen Verlaufszustand (Platzhalter). Gleiche Semantik wie die großen
   Campusse: Abzweigen mitten im Verlauf verwirft den Vorwärtszweig. */
export function useAnsichtVerlauf(start = "cockpit") {
  const [verlauf, setVerlauf] = useState([start]);
  const [index, setIndex] = useState(0);
  const ansicht = verlauf[index];

  const oeffnen = (ziel) => {
    if (ziel === ansicht) return;
    setVerlauf((alt) => [...alt.slice(0, index + 1), ziel]);
    setIndex(index + 1);
  };

  return {
    ansicht,
    oeffnen,
    zurueck: () => setIndex((i) => Math.max(0, i - 1)),
    vor: () => setIndex((i) => Math.min(verlauf.length - 1, i + 1)),
    zurueckMoeglich: index > 0,
    vorMoeglich: index < verlauf.length - 1,
  };
}
