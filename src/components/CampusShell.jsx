import React, { Suspense, lazy, useCallback, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";

/* Jeder Campus lädt als eigener Chunk erst beim Aufruf – inklusive seiner
   Daten und Register (die Einheiten-Register importieren die Campusse selbst
   als jeweils erste Importe). Das hält den Start-Chunk klein. */
const App = lazy(() => import("../App"));
const K1Campus = lazy(() => import("./K1Campus"));
const KstCampus = lazy(() => import("./KstCampus"));

const Laden = () => (
  <div className="campus-laden" role="status" aria-live="polite">Campus wird geladen …</div>
);

export default function CampusShell() {
  const [campus, setCampus] = useState(() => laden("stb-campus", "k3"));

  const wechseln = useCallback((ziel) => {
    setCampus(ziel);
    sichern("stb-campus", ziel);
  }, []);

  if (campus === "k1") {
    return (
      <Suspense fallback={<Laden />}>
        <K1Campus onKlausurwechsel={wechseln} />
      </Suspense>
    );
  }
  if (campus === "kst") {
    return (
      <Suspense fallback={<Laden />}>
        <KstCampus onKlausurwechsel={wechseln} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<Laden />}>
      <App onKlausurwechsel={wechseln} />
    </Suspense>
  );
}
