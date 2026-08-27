import React, { useEffect, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";
import { useAnsichtVerlauf } from "../lib/ansicht-verlauf";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K2Fachleiste from "./K2Fachleiste";
import { IconCockpit, IconSchema, IconRegister } from "./Icons";
import IstrPruefungsschemata, { istrSchemata } from "./IstrPruefungsschemata";
import SchemaPostitEnhancer from "./SchemaPostitEnhancer";
import "./kst.css";

const ansichten = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "schema", label: "Prüfungsschema", Icon: IconSchema },
  { id: "quellen", label: "Quellenstand", Icon: IconRegister },
];

export default function K2IStRCampus({ onKlausurwechsel, onFachwechsel }) {
  /* Solange nur das erste Prüfschema vorliegt, startet der Campus direkt dort.
     Weitere PDFs können später ohne Strukturwechsel als Module/Fälle ergänzt werden. */
  const verlauf = useAnsichtVerlauf("schema");
  const [suche, setSuche] = useState("");
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));

  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);

  const ansichtOeffnen = (ansicht) => verlauf.oeffnen(ansicht);

  return (
    <div className="kst-campus">
      <CampusTopbar
        klausur="2"
        marke="2"
        name="Examenscampus Klausur 2"
        untertitel="Ertragsteuerrecht · Internationales Steuerrecht"
        aufCockpit={() => ansichtOeffnen("cockpit")}
        navZurueck={verlauf.zurueck}
        navVor={verlauf.vor}
        zurueckMoeglich={verlauf.zurueckMoeglich}
        vorMoeglich={verlauf.vorMoeglich}
        suche={suche}
        sucheSetzen={(wert) => {
          setSuche(wert);
          if (verlauf.ansicht !== "schema") verlauf.oeffnen("schema");
        }}
        suchePlatzhalter="IStR-Schema, Norm oder Stichwort suchen"
        sucheAria="Internationales-Steuerrecht-Prüfungsschema durchsuchen"
        dunkel={dunkel}
        dunkelUmschalten={() => setDunkel((wert) => !wert)}
      />

      <KlausurenLeiste aktiv="kst" aufCockpit={() => ansichtOeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />
      <K2Fachleiste aktiv="istr" onWechsel={onFachwechsel} />

      <aside className="rail">
        <nav className="rail__nav" aria-label="IStR-Hauptnavigation">
          {ansichten.map(({ id, label, Icon }) => (
            <button
              key={id}
              className="rail__link"
              aria-current={verlauf.ansicht === id ? "true" : undefined}
              onClick={() => ansichtOeffnen(id)}
            >
              <Icon />
              {label}
            </button>
          ))}
        </nav>
        <div className="rail__box">
          <b>IStR-Quellenstand</b>
          <strong>2 / 2</strong>
          <p>Quellseiten des ersten Schemas umgesetzt</p>
        </div>
      </aside>

      <main className="page">
        {verlauf.ansicht === "cockpit" && <IstrCockpit ansichtOeffnen={ansichtOeffnen} />}
        {verlauf.ansicht === "schema" && <IstrSchemaSeite suche={suche} />}
        {verlauf.ansicht === "quellen" && <IstrQuellenstand />}
      </main>
    </div>
  );
}

function IstrCockpit({ ansichtOeffnen }) {
  return (
    <>
      <div className="cockpit">
        <section className="these kst-these">
          <span className="kicker">Klausur 2 · IStR</span>
          <h2>Internationales Steuerrecht <em>im Prüfungsaufbau.</em></h2>
          <p>
            Der neue IStR-Bereich übernimmt das bereitgestellte Prüfungsschema vollständig über beide Quellseiten.
            Aufbau und Darstellung folgen der ausformulierten Schema-Ansicht aus Bilanzen; Normen werden wie dort
            über die vorhandene Schema-Verlinkung erschlossen.
          </p>
          <div className="these__aktionen">
            <button className="btn" onClick={() => ansichtOeffnen("schema")}>Prüfungsschema öffnen</button>
            <button className="btn btn--linie" onClick={() => ansichtOeffnen("quellen")}>Quellenstand</button>
          </div>
        </section>
        <section className="panel fortschritt">
          <div className="ring" style={{ "--p": "100%" }}><b>2/2</b></div>
          <h3>Quellseiten umgesetzt</h3>
          <p>Seite 1: IStR-Grundschema · Seite 2: DBA-Schema</p>
        </section>
      </div>

      <section className="abschnitt">
        <span className="kicker">Prüfungsweg</span>
        <h2>Vom persönlichen Steuerzugriff bis zum DBA</h2>
        <div className="raster raster--3">
          <article className="bereich">
            <b>1–2</b>
            <h3>Unbeschränkte Steuerpflicht</h3>
            <p>§ 1 Abs. 1 S. 1 EStG, anschließend die Antragsprüfung nach § 1 Abs. 3 EStG.</p>
          </article>
          <article className="bereich">
            <b>3–4</b>
            <h3>Wegzug / beschränkte Steuerpflicht</h3>
            <p>Wegzugsnormen und § 1 Abs. 4 EStG einschließlich § 49 und § 50 EStG.</p>
          </article>
          <article className="bereich">
            <b>DBA</b>
            <h3>Abkommensprüfung</h3>
            <p>Anwendbarkeit, Ansässigkeit, Verteilung und Vermeidung nach dem Schema der zweiten Quellseite.</p>
          </article>
        </div>
      </section>
    </>
  );
}

function IstrSchemaSeite({ suche }) {
  const [behaelter, setBehaelter] = useState(null);
  const [schema, setSchema] = useState(istrSchemata[0].id);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 2 · Internationales Steuerrecht</span>
          <h1>Prüfungsschema</h1>
          <p className="lead">Seitenvollständige Umsetzung des bereitgestellten IStR-Schemas im Darstellungsprinzip der Bilanzen-Schemata.</p>
        </div>
      </div>
      <div data-pruefungsschemata-portal ref={setBehaelter}>
        <IstrPruefungsschemata aktiv={schema} onWechsel={setSchema} suche={suche} />
        <SchemaPostitEnhancer root={behaelter} signal={`${schema}:${suche}`} />
      </div>
    </>
  );
}

function IstrQuellenstand() {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">IStR · Quellenstand</span>
          <h1>Quellenstand</h1>
          <p className="lead">Nur Inhalte aus den bereitgestellten Unterlagen; keine fachlichen Ergänzungen aus ungenannten Quellen.</p>
        </div>
      </div>
      <section className="panel">
        <span className="kicker">Schema IStR.pdf</span>
        <h2>2 von 2 Seiten umgesetzt</h2>
        <ul className="liste">
          <li><b>Seite 1:</b> Schema Internationales Steuerrecht – § 1 EStG, Wegzug, beschränkte Steuerpflicht und DBA-Verweis.</li>
          <li><b>Seite 2:</b> Schema DBA – Anwendbarkeit, Ansässigkeit, Verteilung und Vermeidung.</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          Die personenbezogene Personalisierungszeile der PDF ist kein fachlicher Inhalt und wird im öffentlichen Campus nicht veröffentlicht.
        </p>
      </section>
    </>
  );
}
