import React, { Suspense, lazy, useCallback, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";

/* Jeder Campus lädt als eigener Chunk erst beim Aufruf – inklusive seiner
   Daten und Register (die Einheiten-Register importieren die Campusse selbst
   als jeweils erste Importe). Das hält den Start-Chunk klein. */
const App = lazy(() => import("../App"));
const K1Campus = lazy(() => import("./K1Campus"));
const AOCampus = lazy(() => import("./AOCampusV3"));
const AOQuerverweiseEnhancer = lazy(() => import("./AOQuerverweiseEnhancer"));
const AOFall311Tabelle = lazy(() => import("./AOFall311Tabelle"));
const AOEinheit2RandseitenEnhancer = lazy(() => import("./AOEinheit2RandseitenEnhancer"));
const K1ErbStCampus = lazy(() => import("./K1ErbStCampus"));
const K1FachleisteEnhancer = lazy(() => import("./K1FachleisteEnhancer"));
const K1ThemenEnhancer = lazy(() => import("./K1ThemenEnhancer"));
const K1FallsammlungEnhancer = lazy(() => import("./K1FallsammlungEnhancer"));
const K1HausaufgabenEnhancer = lazy(() => import("./K1HausaufgabenEnhancer"));
const K1UebungsverweiseEnhancer = lazy(() => import("./K1UebungsverweiseEnhancer"));
const K1MeurerKurzskriptEnhancer = lazy(() => import("./K1MeurerKurzskriptEnhancer"));
const KstCampus = lazy(() => import("./KstCampus"));
const KstOriginalSchemataEnhancer = lazy(() => import("./KstOriginalSchemataEnhancer"));
const K2PlatzhalterCampus = lazy(() => import("./K2PlatzhalterCampus"));
const K2IStRCampus = lazy(() => import("./K2IStRCampus"));
const K3PersGCampus = lazy(() => import("./K3PersGCampus"));
const K3UmwStRCampus = lazy(() => import("./K3UmwStRCampus"));

const Laden = () => (
  <div className="campus-laden" role="status" aria-live="polite">Campus wird geladen …</div>
);

export default function CampusShell() {
  const [campus, setCampus] = useState(() => laden("stb-campus", "k3"));
  const [k1Fach, setK1Fach] = useState(() => laden("stb-k1-fach", "ust"));
  const [k2Fach, setK2Fach] = useState(() => laden("stb-k2-fach", "kst"));
  const [k3Fach, setK3Fach] = useState(() => laden("stb-k3-fach", "allgemein"));

  const wechseln = useCallback((ziel) => {
    setCampus(ziel);
    sichern("stb-campus", ziel);
  }, []);

  const k1FachWechseln = useCallback((ziel) => {
    setK1Fach(ziel);
    sichern("stb-k1-fach", ziel);
  }, []);

  const k2FachWechseln = useCallback((ziel) => {
    setK2Fach(ziel);
    sichern("stb-k2-fach", ziel);
  }, []);

  const k3FachWechseln = useCallback((ziel) => {
    setK3Fach(ziel);
    sichern("stb-k3-fach", ziel);
  }, []);

  if (campus === "k1") {
    if (k1Fach === "ao") {
      return (
        <Suspense fallback={<Laden />}>
          <AOCampus onKlausurwechsel={wechseln} onFachwechsel={k1FachWechseln} />
          <AOQuerverweiseEnhancer />
          <AOFall311Tabelle />
          <AOEinheit2RandseitenEnhancer />
        </Suspense>
      );
    }
    if (k1Fach === "erbst") {
      return <Suspense fallback={<Laden />}><K1ErbStCampus onKlausurwechsel={wechseln} onFachwechsel={k1FachWechseln} /></Suspense>;
    }
    return (
      <Suspense fallback={<Laden />}>
        <K1Campus onKlausurwechsel={wechseln} />
        <K1FachleisteEnhancer aktiv="ust" onWechsel={k1FachWechseln} />
        <K1ThemenEnhancer />
        <K1FallsammlungEnhancer />
        <K1HausaufgabenEnhancer />
        <K1UebungsverweiseEnhancer />
        <K1MeurerKurzskriptEnhancer />
      </Suspense>
    );
  }
  if (campus === "kst") {
    if (k2Fach === "istr") {
      return <Suspense fallback={<Laden />}><K2IStRCampus onKlausurwechsel={wechseln} onFachwechsel={k2FachWechseln} /></Suspense>;
    }
    if (k2Fach === "est" || k2Fach === "gewst") {
      return <Suspense fallback={<Laden />}><K2PlatzhalterCampus fach={k2Fach} onKlausurwechsel={wechseln} onFachwechsel={k2FachWechseln} /></Suspense>;
    }
    return (
      <Suspense fallback={<Laden />}>
        <KstCampus onKlausurwechsel={wechseln} onFachwechsel={k2FachWechseln} />
        <KstOriginalSchemataEnhancer />
      </Suspense>
    );
  }

  if (k3Fach === "umwstr") {
    return <Suspense fallback={<Laden />}><K3UmwStRCampus onKlausurwechsel={wechseln} onFachwechsel={k3FachWechseln} /></Suspense>;
  }
  if (k3Fach === "persg") {
    return <Suspense fallback={<Laden />}><K3PersGCampus onKlausurwechsel={wechseln} onFachwechsel={k3FachWechseln} /></Suspense>;
  }
  return (
    <Suspense fallback={<Laden />}>
      <App onKlausurwechsel={wechseln} onFachwechsel={k3FachWechseln} />
    </Suspense>
  );
}
