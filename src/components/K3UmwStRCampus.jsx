import React, { useEffect, useMemo, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";
import { useAnsichtVerlauf } from "../lib/ansicht-verlauf";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K3Fachleiste from "./K3Fachleiste";
import { IconCockpit, IconSchema } from "./Icons";
import "./kst.css";
import "./k3-umwstr.css";

const ATLAS = {
  "1-1": [0, 0, 424], "1-2": [600, 0, 424], "1-3": [0, 424, 424], "1-4": [600, 424, 424],
  "2-1": [0, 848, 424], "2-2": [600, 848, 424], "2-3": [0, 1272, 424], "2-4": [600, 1272, 424],
  "3-1": [0, 1696, 338], "3-2": [600, 1696, 338], "3-3": [0, 2034, 338],
  "4-1": [600, 2034, 338], "4-2": [0, 2372, 338],
  "5-1": [600, 2372, 338], "5-2": [0, 2710, 338],
  "6-1": [600, 2710, 338], "6-2": [0, 3048, 338],
  "7-1": [600, 3048, 338], "7-2": [0, 3386, 338],
  "8-1": [600, 3386, 338], "8-2": [0, 3724, 338],
  "9-1": [600, 3724, 424], "9-2": [0, 4148, 424],
  "10-1": [600, 4148, 424], "10-2": [0, 4572, 424],
  "11-1": [600, 4572, 424], "11-2": [0, 4996, 424],
  "12-1": [600, 4996, 424], "12-2": [0, 5420, 424],
  "13-1": [600, 5420, 424], "13-2": [0, 5844, 424],
};

const atlasUrl = `${import.meta.env.BASE_URL}umwstr/atlas.webp`;

function UmwStRSchemaPage({ nr, page, compact = false }) {
  const crop = ATLAS[`${nr}-${page}`];
  if (!crop) return null;
  const [x, y, height] = crop;
  return (
    <div
      className={`umw-source-page ${compact ? "umw-source-page--compact" : ""}`}
      style={{ aspectRatio: `600 / ${height}` }}
      role="img"
      aria-label={`Prüfschema ${nr}, Seite ${page}`}
    >
      <img
        src={atlasUrl}
        alt=""
        aria-hidden="true"
        loading={compact || page > 1 ? "lazy" : "eager"}
        decoding="async"
        style={{ left: `${-(x / 600) * 100}%`, top: `${-(y / height) * 100}%` }}
      />
    </div>
  );
}

const SCHEMATA = [
  {
    nr: 1,
    title: "Grundsätze zur Aufdeckung stiller Reserven bei Einlage und Einbringung in KapGes",
    subtitle: "Abgrenzung zu §§ 20, 21 UmwStG",
    pages: 4,
    focus: "Grundlagen · Einzelwirtschaftsgüter · Sachgesamtheiten · §§ 20, 21 UmwStG",
  },
  {
    nr: 2,
    title: "Vorschriften des EStG und KStG zur Aufdeckung stiller Reserven",
    subtitle: "Übertragung von Wirtschaftsgütern aus PV oder BV in eine Kapitalgesellschaft",
    pages: 4,
    focus: "EStG/KStG · EWG · Sachgesamtheiten · Aufdeckung stiller Reserven",
  },
  {
    nr: 3,
    title: "Voraussetzungen für Anwendung § 20 UmwStG",
    subtitle: "Grundvoraussetzungen und Folgen zurückbehaltener Wirtschaftsgüter",
    pages: 3,
    focus: "§ 20 Abs. 1 UmwStG · funktional wesentliche Betriebsgrundlagen · neue Anteile",
  },
  {
    nr: 4,
    title: "Formen der Umwandlung in GmbH bei § 20 UmwStG",
    subtitle: "Einzelrechtsnachfolge, Ausgliederung, Formwechsel und Option nach § 1a KStG",
    pages: 2,
    focus: "§ 20 UmwStG · § 25 UmwStG · § 1a KStG · UmwG",
  },
  {
    nr: 5,
    title: "Gesetzliche Ausnahmen vom Buchwertansatz bei § 20 UmwStG",
    subtitle: "§ 20 Abs. 2 S. 2 Nr. 2 und Nr. 4 UmwStG",
    pages: 2,
    focus: "negativer Buchwert · sonstige Gegenleistung · Zwischenwertansatz",
  },
  {
    nr: 6,
    title: "Veräußerung sperrfristbehafteter Anteile nach § 20 UmwStG",
    subtitle: "Folgen beim Einbringenden und bei der übernehmenden KapGes · § 22 Abs. 1 UmwStG",
    pages: 2,
    focus: "Einbringungsgewinn I · 7-Jahresfrist · § 17 EStG · § 23 UmwStG",
  },
  {
    nr: 7,
    title: "Einlage und Einbringung von Anteilen an KapGes in eine andere KapGes",
    subtitle: "Abgrenzung zu § 21 UmwStG",
    pages: 2,
    focus: "§ 21 UmwStG · § 17 EStG · § 6 Abs. 6 S. 2 EStG",
  },
  {
    nr: 8,
    title: "Veräußerung der gem. § 21 UmwStG erhaltenen Anteile",
    subtitle: "Folgen der Veräußerung durch die übernehmende KapGes · § 22 Abs. 2 UmwStG",
    pages: 2,
    focus: "Einbringungsgewinn II · 7-Jahresfrist · § 23 UmwStG · § 8b KStG",
  },
  {
    nr: 9,
    title: "Verschmelzung von Kapitalgesellschaften – übertragende KapGes",
    subtitle: "Steuerliche Folgen nach § 11 UmwStG",
    pages: 2,
    focus: "§ 11 UmwStG · Buchwert-/Zwischenwertansatz · steuerliche Rückwirkung",
  },
  {
    nr: 10,
    title: "Verschmelzung von Kapitalgesellschaften – übernehmende KapGes",
    subtitle: "Steuerliche Folgen nach § 12 UmwStG",
    pages: 2,
    focus: "§ 12 UmwStG · Einbuchung · Verschmelzungsgewinn · Einlagekonto",
  },
  {
    nr: 11,
    title: "Formwechsel von KapGes auf PersGes – übertragende KapGes",
    subtitle: "Steuerliche Folgen nach §§ 9 S. 1, 3 UmwStG",
    pages: 2,
    focus: "§§ 3, 9 UmwStG · Schlussbilanz · Zwischenwert · Rückwirkung",
  },
  {
    nr: 12,
    title: "Formwechsel von KapGes in PersGes – PersGes und Gesellschafter",
    subtitle: "Steuerliche Folgen nach § 9 S. 1 i.V.m. §§ 4, 5 und 7 UmwStG",
    pages: 2,
    focus: "§§ 4, 5, 7, 9 UmwStG · Übernahmegewinn/-verlust · Einkünfte aus Kapitalvermögen",
  },
  {
    nr: 13,
    title: "Abspaltung nach § 15 UmwStG im Unterschied zur Ausgliederung",
    subtitle: "Abspaltung aus KapGes auf eine andere KapGes vs. Ausgliederung nach § 20 UmwStG",
    pages: 2,
    focus: "§ 15 UmwStG · § 20 UmwStG · § 123 Abs. 2/3 UmwG",
  },
];

const TOTAL_PAGES = SCHEMATA.reduce((sum, schema) => sum + schema.pages, 0);

export default function K3UmwStRCampus({ onKlausurwechsel, onFachwechsel }) {
  const verlauf = useAnsichtVerlauf("schema");
  const [schemaNr, setSchemaNr] = useState(null);
  const [suche, setSuche] = useState("");
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));

  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [verlauf.ansicht, schemaNr]);

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    if (!q) return SCHEMATA;
    return SCHEMATA.filter((schema) => [schema.nr, schema.title, schema.subtitle, schema.focus]
      .join(" ")
      .toLowerCase()
      .includes(q));
  }, [suche]);

  const schema = SCHEMATA.find((item) => item.nr === schemaNr) || null;
  const ansichtOeffnen = (id) => {
    setSchemaNr(null);
    verlauf.oeffnen(id);
  };
  const schemaOeffnen = (nr) => {
    setSchemaNr(nr);
    if (verlauf.ansicht !== "schema") verlauf.oeffnen("schema");
  };

  return (
    <div className="kst-campus umwstr-campus">
      <CampusTopbar
        klausur="3"
        marke="3"
        name="Examenscampus Klausur 3"
        untertitel="Buchführung und Bilanzwesen · UmwStR"
        aufCockpit={() => ansichtOeffnen("cockpit")}
        navZurueck={verlauf.zurueck}
        navVor={verlauf.vor}
        zurueckMoeglich={verlauf.zurueckMoeglich}
        vorMoeglich={verlauf.vorMoeglich}
        suche={suche}
        sucheSetzen={(wert) => {
          setSuche(wert);
          setSchemaNr(null);
          if (verlauf.ansicht !== "schema") verlauf.oeffnen("schema");
        }}
        suchePlatzhalter="UmwStR-Schema, Norm oder Stichwort suchen"
        sucheAria="Umwandlungssteuerrecht-Prüfschemata durchsuchen"
        dunkel={dunkel}
        dunkelUmschalten={() => setDunkel((wert) => !wert)}
      />
      <KlausurenLeiste aktiv="k3" aufCockpit={() => ansichtOeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />
      <K3Fachleiste aktiv="umwstr" onWechsel={onFachwechsel} />

      <aside className="rail">
        <nav className="rail__nav" aria-label="UmwStR-Hauptnavigation">
          <button className="rail__link" aria-current={verlauf.ansicht === "cockpit" ? "true" : undefined} onClick={() => ansichtOeffnen("cockpit")}>
            <IconCockpit />Cockpit
          </button>
          <button className="rail__link" aria-current={verlauf.ansicht === "schema" ? "true" : undefined} onClick={() => ansichtOeffnen("schema")}>
            <IconSchema />Prüfschemata
          </button>
        </nav>
        <div className="rail__box">
          <b>Quellenabdeckung</b>
          <strong>{TOTAL_PAGES} / {TOTAL_PAGES}</strong>
          <p>PDF-Seiten vollständig als Seitenansicht erfasst</p>
        </div>
      </aside>

      <main className="page">
        {verlauf.ansicht === "cockpit" && <Cockpit schemaOeffnen={schemaOeffnen} />}
        {verlauf.ansicht === "schema" && !schema && <SchemaIndex liste={gefiltert} suche={suche} schemaOeffnen={schemaOeffnen} />}
        {verlauf.ansicht === "schema" && schema && <SchemaDetail schema={schema} zurueck={() => setSchemaNr(null)} />}
      </main>
    </div>
  );
}

function Cockpit({ schemaOeffnen }) {
  return (
    <>
      <div className="cockpit">
        <section className="these">
          <span className="kicker">Klausur 3 · UmwStR · Prüfschemata 1–13</span>
          <h2>Umwandlungssteuerrecht <em>seitengetreu nach den bereitgestellten Prüfschemata.</em></h2>
          <p>
            Alle {SCHEMATA.length} bereitgestellten Prüfschemata sind mit sämtlichen {TOTAL_PAGES} PDF-Seiten übernommen.
            Titelblätter, Übersichten, Pfeilstrukturen, Farbcodierungen und Folgeseiten bleiben als originale Seitenansicht erhalten.
          </p>
          <div className="these__aktionen">
            <button className="btn" onClick={() => schemaOeffnen(1)}>Mit Prüfschema 1 starten</button>
          </div>
        </section>
        <section className="panel umwstr-coverage">
          <span className="kicker">Abdeckung</span>
          <strong>{TOTAL_PAGES} / {TOTAL_PAGES}</strong>
          <h3>Seiten berücksichtigt</h3>
          <p>Keine Seite der gelieferten Unterlagen ist ausgelassen.</p>
        </section>
      </div>
      <section className="abschnitt">
        <div className="pagehead umwstr-pagehead-compact">
          <div>
            <span className="kicker">Direkteinstieg</span>
            <h2>Prüfschemata 1–13</h2>
          </div>
        </div>
        <div className="umwstr-quickgrid">
          {SCHEMATA.map((schema) => (
            <button key={schema.nr} className="umwstr-quick" onClick={() => schemaOeffnen(schema.nr)}>
              <span>Schema {schema.nr}</span>
              <b>{schema.title}</b>
              <small>{schema.pages} {schema.pages === 1 ? "Seite" : "Seiten"}</small>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function SchemaIndex({ liste, suche, schemaOeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 3 · UmwStR</span>
          <h1>Prüfschemata 1–13</h1>
          <p className="lead">Originalgetreue Seitenansichten aller bereitgestellten Unterlagen · {TOTAL_PAGES} von {TOTAL_PAGES} Seiten erfasst.</p>
        </div>
        <span className="kicker">{liste.length} Schemata</span>
      </div>
      {suche && <p className="umwstr-search-note">Suche: „{suche}“</p>}
      <div className="umwstr-schema-grid">
        {liste.map((schema) => (
          <article className="umwstr-schema-card" key={schema.nr}>
            <button className="umwstr-schema-preview" onClick={() => schemaOeffnen(schema.nr)} aria-label={`Prüfschema ${schema.nr} öffnen`}>
              <UmwStRSchemaPage nr={schema.nr} page={1} compact />
            </button>
            <div className="umwstr-schema-card__body">
              <span className="kicker">Prüfschema {schema.nr} · {schema.pages} {schema.pages === 1 ? "Seite" : "Seiten"}</span>
              <h3>{schema.title}</h3>
              <p>{schema.subtitle}</p>
              <small>{schema.focus}</small>
              <button className="btn btn--linie" onClick={() => schemaOeffnen(schema.nr)}>Alle Seiten öffnen</button>
            </div>
          </article>
        ))}
      </div>
      {liste.length === 0 && <div className="panel"><h3>Kein Prüfschema gefunden</h3><p>Bitte einen anderen Suchbegriff verwenden.</p></div>}
    </>
  );
}

function SchemaDetail({ schema, zurueck }) {
  const pages = Array.from({ length: schema.pages }, (_, index) => index + 1);
  return (
    <>
      <div className="pagehead umwstr-detail-head">
        <div>
          <button className="umwstr-back" onClick={zurueck}>← Alle Prüfschemata</button>
          <span className="kicker">Prüfschema {schema.nr} · {schema.pages} {schema.pages === 1 ? "Seite" : "Seiten"}</span>
          <h1>{schema.title}</h1>
          <p className="lead">{schema.subtitle}</p>
        </div>
      </div>
      <nav className="umwstr-pagechips" aria-label={`Seiten in Prüfschema ${schema.nr}`}>
        {pages.map((page) => <a key={page} href={`#umwstr-${schema.nr}-${page}`}>Seite {page}</a>)}
      </nav>
      <div className="umwstr-pages">
        {pages.map((page) => (
          <figure className="umwstr-page-card" id={`umwstr-${schema.nr}-${page}`} key={page}>
            <div className="umwstr-page-meta">
              <span>Prüfschema {schema.nr}</span>
              <b>Seite {page} / {schema.pages}</b>
              <small>Seitengetreue Ansicht</small>
            </div>
            <UmwStRSchemaPage nr={schema.nr} page={page} />
          </figure>
        ))}
      </div>
      <button className="btn btn--linie umwstr-bottom-back" onClick={zurueck}>← Zur Übersicht</button>
    </>
  );
}
