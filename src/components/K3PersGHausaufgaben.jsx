/* Reiter „Hausaufgaben PersG" im Campus Personengesellschaften.
   Inhalt und Randpunkte kommen aus den Quell-PDFs, das Layout aus
   HausaufgabenBloecke. */
import React, { lazy, Suspense, useState } from "react";
import { persgFactsQuelle } from "../data/endriss-persg-facts.js";
import "./endriss-nachtraege.css";
const FactSheets = lazy(() => import("./EndrissNachtraege").then(module => ({ default: module.EndrissDokument })));
import HausaufgabenBloecke from "./HausaufgabenBloecke";
import { persgHausaufgaben, persgHausaufgabenQuelle } from "../data/k3-persg-hausaufgaben.js";
import { persgModule } from "../data/k3-persg-tag1";

const modulById = new Map(persgModule.map((m) => [m.id, m]));

export default function K3PersGHausaufgaben({ onModulOeffnen }) {
  const [factSheets, setFactSheets] = useState(false);
  if (factSheets) return <Suspense fallback={<p role="status">Fact Sheets werden geladen …</p>}><FactSheets quelle={persgFactsQuelle} zurueck={() => setFactSheets(false)} zurueckLabel="← Zurück zu den PersG-Hausaufgaben" onModulOeffnen={onModulOeffnen} /></Suspense>;
  return (<>
    <section className="panel" aria-label="Ergänzende PersG-Lernunterlagen"><h2>Fact Sheets (Horst)</h2><p>Quellengebundene Ergänzung zu den Lernmodulen: Mitunternehmerschaft, Gewinnermittlung, Betriebsvermögen und Bilanzierung sowie Sondervergütungen, Komplementär-GmbH und Kapitalkonten. Teilübernahme: {persgFactsQuelle.nativePages.length} von {persgFactsQuelle.physicalPages} PDF-Seiten; die übrigen Seiten bleiben offen.</p><button type="button" onClick={() => setFactSheets(true)}>Fact Sheets (Horst) öffnen</button></section>
    <HausaufgabenBloecke
      kicker="Klausur 3 · Personengesellschaften · Hausaufgaben"
      titel="PersG-Hausaufgaben 2026/2027"
      lead="Die Hausaufgaben des Tageslehrgangs mit Sachverhalt, Aufgabenstellung und Lösungshinweisen im Wortlaut – die Lösung erst auf Klick, die Punkte an ihrem Absatz."
      quelle={persgHausaufgabenQuelle}
      hausaufgaben={persgHausaufgaben}
      gruppeVon={(ha) => ha.termin}
      gruppeLabel={(ha) => `${ha.termin}. Fachtermin`}
      gruppeAria="Fachtermine"
      karteKicker={(ha) => `${ha.termin}. Fachtermin · ${ha.punkte} Punkte${ha.zeit ? ` · ${ha.zeit}` : ""}`}
      moduleFuer={(ha) => (ha.modulIds || [])
        .map((id) => modulById.get(id))
        .filter(Boolean)
        .map((m) => ({ id: m.id, label: `${m.id} · ${m.title}` }))}
      onModulOeffnen={onModulOeffnen}
      suchePlatzhalter="Name, Norm, Stichwort oder Betrag"
    />
  </>);
}
