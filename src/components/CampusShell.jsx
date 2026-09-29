import React, { Suspense, lazy, useCallback, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";
import EndrissRahmen from './EndrissRahmen';

/* Daten und Einheitenregister bleiben Teil des jeweiligen lazy Campus-Chunks. */
const App = lazy(() => import("../App"));
const K1Campus = lazy(() => import("./K1Campus"));
const AOCampus = lazy(() => import("./AOCampusV3"));
const AOQuerverweiseEnhancer = lazy(() => import("./AOQuerverweiseEnhancer"));
const AOFall311Tabelle = lazy(() => import("./AOFall311Tabelle"));
const AOEinheit2RandseitenEnhancer = lazy(() => import("./AOEinheit2RandseitenEnhancer"));
const K1ErbStCampus = lazy(() => import("./K1ErbStCampus"));
const K1GrEStCampus = lazy(() => import("./K1GrEStCampus"));
const K1FachleisteEnhancer = lazy(() => import("./K1FachleisteEnhancer"));
const K1ThemenEnhancer = lazy(() => import("./K1ThemenEnhancer"));
const K1FallsammlungEnhancer = lazy(() => import("./K1FallsammlungEnhancer"));
const K1HausaufgabenEnhancer = lazy(() => import("./K1HausaufgabenEnhancer"));
const K1UebungsverweiseEnhancer = lazy(() => import("./K1UebungsverweiseEnhancer"));
const K1MeurerKurzskriptEnhancer = lazy(() => import("./K1MeurerKurzskriptEnhancer"));
const KstCampus = lazy(() => import("./KstCampus"));
const KstOriginalSchemataEnhancer = lazy(() => import("./KstOriginalSchemataEnhancer"));
const K2EStCampus = lazy(() => import("./K2EStCampus"));
const K2GewStCampus = lazy(() => import("./K2GewStCampus"));
const K2IStRCampus = lazy(() => import("./K2IStRCampus"));
const K3PersGCampus = lazy(() => import("./K3PersGCampus"));
const K3UmwStRCampus = lazy(() => import("./K3UmwStRCampus"));
const Laden = () => <div className="campus-laden" role="status" aria-live="polite">Campus wird geladen …</div>;

export default function CampusShell() {
  const [campus, setCampus] = useState(() => laden("stb-campus", "k3"));
  const [k1Fach, setK1Fach] = useState(() => laden("stb-k1-fach", "ust"));
  const [k2Fach, setK2Fach] = useState(() => laden("stb-k2-fach", "kst"));
  const [k3Fach, setK3Fach] = useState(() => laden("stb-k3-fach", "allgemein"));
  const wechseln = useCallback(ziel => { setCampus(ziel); sichern("stb-campus", ziel); }, []);
  const k1FachWechseln = useCallback(ziel => { setK1Fach(ziel); sichern("stb-k1-fach", ziel); }, []);
  const k2FachWechseln = useCallback(ziel => { setK2Fach(ziel); sichern("stb-k2-fach", ziel); }, []);
  const k3FachWechseln = useCallback(ziel => { setK3Fach(ziel); sichern("stb-k3-fach", ziel); }, []);
  let fach, inhalt;
  if (campus === 'k1') {
    fach = k1Fach;
    if (k1Fach === 'ao') inhalt = <><AOCampus onKlausurwechsel={wechseln} onFachwechsel={k1FachWechseln} /><AOQuerverweiseEnhancer /><AOFall311Tabelle /><AOEinheit2RandseitenEnhancer /></>;
    else if (k1Fach === 'erbst') inhalt = <K1ErbStCampus onKlausurwechsel={wechseln} onFachwechsel={k1FachWechseln} />;
    else if (k1Fach === 'grest') inhalt = <K1GrEStCampus onKlausurwechsel={wechseln} onFachwechsel={k1FachWechseln} />;
    else inhalt = <><K1Campus onKlausurwechsel={wechseln} /><K1FachleisteEnhancer aktiv="ust" onWechsel={k1FachWechseln} /><K1ThemenEnhancer /><K1FallsammlungEnhancer /><K1HausaufgabenEnhancer /><K1UebungsverweiseEnhancer /><K1MeurerKurzskriptEnhancer /></>;
  } else if (campus === 'kst') {
    fach = k2Fach;
    if (k2Fach === 'istr') inhalt = <K2IStRCampus onKlausurwechsel={wechseln} onFachwechsel={k2FachWechseln} />;
    else if (k2Fach === 'est') inhalt = <K2EStCampus onKlausurwechsel={wechseln} onFachwechsel={k2FachWechseln} />;
    else if (k2Fach === 'gewst') inhalt = <K2GewStCampus onKlausurwechsel={wechseln} onFachwechsel={k2FachWechseln} />;
    else inhalt = <><KstCampus onKlausurwechsel={wechseln} onFachwechsel={k2FachWechseln} /><KstOriginalSchemataEnhancer /></>;
  } else {
    fach = k3Fach === 'allgemein' ? 'bilanz' : k3Fach;
    if (k3Fach === 'umwstr') inhalt = <K3UmwStRCampus onKlausurwechsel={wechseln} onFachwechsel={k3FachWechseln} />;
    else if (k3Fach === 'persg') inhalt = <K3PersGCampus onKlausurwechsel={wechseln} onFachwechsel={k3FachWechseln} />;
    else inhalt = <App onKlausurwechsel={wechseln} onFachwechsel={k3FachWechseln} />;
  }
  return <EndrissRahmen fach={fach}><Suspense fallback={<Laden />}>{inhalt}</Suspense></EndrissRahmen>;
}
