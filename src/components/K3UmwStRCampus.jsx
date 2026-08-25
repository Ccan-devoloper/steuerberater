import React, { useEffect, useMemo, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";
import { useAnsichtVerlauf } from "../lib/ansicht-verlauf";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K3Fachleiste from "./K3Fachleiste";
import { IconCockpit, IconSchema } from "./Icons";
import "./kst.css";
import "./k3-umwstr.css";

/**
 * Jede Seite der gelieferten PDF-Unterlagen liegt als eigenes, seitengetreu
 * gerendertes Bild unter public/umwstr/schema-<nr>-<seite>.webp.
 * breite/hoehe sind die Pixelmasse des Renders und liefern das Seitenverhaeltnis,
 * damit im Layout kein Springen entsteht, bevor das Bild geladen ist.
 * vorschauSeite bestimmt, welche Seite als Kachelvorschau dient - Seite 1 ist in
 * allen Unterlagen ein reines Titelblatt, das Schaubild steht dahinter.
 */
const SCHEMATA_ROH = [
  {
    nr: 2,
    vorschauSeite: 3,
    title: "Vorschriften des EStG und KStG zur Aufdeckung der stillen Reserven",
    subtitle: "Übertragung von Wirtschaftsgütern aus dem PV oder BV in eine Kapitalgesellschaft",
    focus: "EStG/KStG · Einzelwirtschaftsgüter · Sachgesamtheiten · §§ 17, 20, 23 EStG · § 8 Abs. 3 S. 2 KStG",
    seiten: [
      { breite: 1800, hoehe: 1273, titel: "Titelblatt" },
      { breite: 1800, hoehe: 1273, titel: "Ausgangsfrage außerhalb §§ 20, 21 UmwStG" },
      { breite: 1800, hoehe: 1273, titel: "Übertragung einzelner Wirtschaftsgüter unter dem wahren Wert" },
      { breite: 1800, hoehe: 1273, titel: "Übertragung von Sachgesamtheiten unter dem wahren Wert" },
    ],
  },
  {
    nr: 3,
    vorschauSeite: 2,
    title: "Voraussetzungen für Anwendung § 20 UmwStG",
    subtitle: "Grundvoraussetzungen des § 20 Abs. 1 UmwStG und Folgen zurückbehaltener Wirtschaftsgüter",
    focus: "§ 20 Abs. 1 UmwStG · funktional wesentliche Betriebsgrundlagen · Ausgabe neuer Anteile · SBV",
    seiten: [
      { breite: 1800, hoehe: 1013, titel: "Titelblatt" },
      { breite: 1800, hoehe: 1013, titel: "Grundvoraussetzungen des § 20 Abs. 1 UmwStG" },
      { breite: 1800, hoehe: 1013, titel: "Übertragene und zurückbehaltene Wirtschaftsgüter" },
    ],
  },
  {
    nr: 4,
    vorschauSeite: 2,
    title: "(Zivilrechtliche) Formen der Umwandlung in GmbH bei § 20 UmwStG",
    subtitle: "Einzelrechtsnachfolge, Ausgliederung, Formwechsel und Option nach § 1a KStG – mit Rechtsfolgen",
    focus: "§ 20 UmwStG · § 25 UmwStG · § 1a KStG · § 1 Abs. 3 UmwStG · § 123 Abs. 3 UmwG",
    seiten: [
      { breite: 1800, hoehe: 1013, titel: "Titelblatt" },
      { breite: 1800, hoehe: 1013, titel: "Wichtigste Übertragungsformen bei Einbringung in GmbH" },
    ],
  },
  {
    nr: 5,
    vorschauSeite: 2,
    title: "Gesetzliche Ausnahmen vom Buchwertansatz bei § 20 UmwStG",
    subtitle: "Trotz Buchwertantrag der übernehmenden KapGes · § 20 Abs. 2 S. 2 Nr. 2 u. Nr. 4 UmwStG",
    focus: "negativer Buchwert · sonstige Gegenleistung · 25 % / 500.000 € · Zwischenwertansatz",
    seiten: [
      { breite: 1800, hoehe: 1013, titel: "Titelblatt" },
      { breite: 1800, hoehe: 1013, titel: "Wichtigste Ausnahmen von der Zulässigkeit des BW-Ansatzes" },
    ],
  },
  {
    nr: 6,
    vorschauSeite: 2,
    title: "Folgen der Veräußerung der sperrfristbehafteten Anteile",
    subtitle: "Veräußerung der bei § 20 UmwStG erhaltenen Anteile oder Ersatztatbestände · § 22 Abs. 1 UmwStG",
    focus: "Einbringungsgewinn I · 7-Jahresfrist · § 22 Abs. 1 S. 1-4 u. S. 6 UmwStG · § 17 EStG",
    seiten: [
      { breite: 1800, hoehe: 1013, titel: "Titelblatt" },
      { breite: 1800, hoehe: 1013, titel: "Folgen bei Einbringendem und übernehmender KapGes" },
    ],
  },
];

/* Nach Schemanummer sortiert: die Uebersicht zeigt die Pruefschemata immer in der
   Reihenfolge der Originalunterlagen, unabhaengig davon, an welcher Stelle ein
   nachgereichtes Schema oben eingetragen wird. */
const SCHEMATA = [...SCHEMATA_ROH].sort((a, b) => a.nr - b.nr);

const TOTAL_PAGES = SCHEMATA.reduce((sum, schema) => sum + schema.seiten.length, 0);

export const UMWSTR_SCHEMATA = SCHEMATA;
export const seitenPfad = (nr, seite) =>
  `umwstr/schema-${String(nr).padStart(2, "0")}-${String(seite).padStart(2, "0")}.webp`;

function UmwStRSchemaPage({ schema, page, compact = false }) {
  const [fehler, setFehler] = useState(false);
  const daten = schema.seiten[page - 1];
  if (!daten) return null;

  const quelle = `${import.meta.env.BASE_URL}${seitenPfad(schema.nr, page)}`;

  if (fehler) {
    return (
      <div className="umw-source-page umw-source-page--fehler" style={{ aspectRatio: `${daten.breite} / ${daten.hoehe}` }}>
        <p>
          <b>Seitenansicht nicht ladbar</b>
          <span>Prüfschema {schema.nr}, Seite {page}</span>
        </p>
      </div>
    );
  }

  return (
    <div
      className={`umw-source-page ${compact ? "umw-source-page--compact" : ""}`}
      style={{ aspectRatio: `${daten.breite} / ${daten.hoehe}` }}
    >
      <img
        src={quelle}
        width={daten.breite}
        height={daten.hoehe}
        alt={`Prüfschema ${schema.nr}, Seite ${page}: ${daten.titel}`}
        loading={compact || page > 1 ? "lazy" : "eager"}
        decoding="async"
        onError={() => setFehler(true)}
      />
    </div>
  );
}

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
    return SCHEMATA.filter((schema) => [schema.nr, schema.title, schema.subtitle, schema.focus, ...schema.seiten.map((s) => s.titel)]
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
          <p>PDF-Seiten der Prüfschemata 2–6 seitengetreu erfasst</p>
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
          <span className="kicker">Klausur 3 · UmwStR · Prüfschemata 2–6</span>
          <h2>Umwandlungssteuerrecht <em>seitengetreu nach den bereitgestellten Prüfschemata.</em></h2>
          <p>
            Alle {SCHEMATA.length} bereitgestellten Prüfschemata (RA/StB U. Breier) sind mit sämtlichen {TOTAL_PAGES} PDF-Seiten
            als 1:1-Seitenansicht übernommen. Titelblätter, Pfeilstrukturen, Farbcodierungen und Folgeseiten bleiben
            unverändert erhalten.
          </p>
          <div className="these__aktionen">
            <button className="btn" onClick={() => schemaOeffnen(2)}>Mit Prüfschema 2 starten</button>
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
            <h2>Prüfschemata 2–6</h2>
          </div>
        </div>
        <div className="umwstr-quickgrid">
          {SCHEMATA.map((schema) => (
            <button key={schema.nr} className="umwstr-quick" onClick={() => schemaOeffnen(schema.nr)}>
              <span>Schema {schema.nr}</span>
              <b>{schema.title}</b>
              <small>{schema.seiten.length} {schema.seiten.length === 1 ? "Seite" : "Seiten"}</small>
            </button>
          ))}
        </div>
        <p className="umwstr-hinweis">
          Die Nummerierung folgt den Originalunterlagen. Weitere Prüfschemata werden ergänzt, sobald die
          zugehörigen PDF-Unterlagen vorliegen.
        </p>
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
          <h1>Prüfschemata 2–6</h1>
          <p className="lead">Originalgetreue Seitenansichten aller bereitgestellten Unterlagen · {TOTAL_PAGES} von {TOTAL_PAGES} Seiten erfasst.</p>
        </div>
        <span className="kicker">{liste.length} Schemata</span>
      </div>
      {suche && <p className="umwstr-search-note">Suche: „{suche}“</p>}
      <div className="umwstr-schema-grid">
        {liste.map((schema) => (
          <article className="umwstr-schema-card" key={schema.nr}>
            <button className="umwstr-schema-preview" onClick={() => schemaOeffnen(schema.nr)} aria-label={`Prüfschema ${schema.nr} öffnen`}>
              <UmwStRSchemaPage schema={schema} page={schema.vorschauSeite} compact />
            </button>
            <div className="umwstr-schema-card__body">
              <span className="kicker">Prüfschema {schema.nr} · {schema.seiten.length} {schema.seiten.length === 1 ? "Seite" : "Seiten"}</span>
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
  const anzahl = schema.seiten.length;
  return (
    <>
      <div className="pagehead umwstr-detail-head">
        <div>
          <button className="umwstr-back" onClick={zurueck}>← Alle Prüfschemata</button>
          <span className="kicker">Prüfschema {schema.nr} · {anzahl} {anzahl === 1 ? "Seite" : "Seiten"}</span>
          <h1>{schema.title}</h1>
          <p className="lead">{schema.subtitle}</p>
        </div>
      </div>
      <nav className="umwstr-pagechips" aria-label={`Seiten in Prüfschema ${schema.nr}`}>
        {schema.seiten.map((seite, index) => (
          <a key={index} href={`#umwstr-${schema.nr}-${index + 1}`}>Seite {index + 1}</a>
        ))}
      </nav>
      <div className="umwstr-pages">
        {schema.seiten.map((seite, index) => (
          <figure className="umwstr-page-card" id={`umwstr-${schema.nr}-${index + 1}`} key={index}>
            <div className="umwstr-page-meta">
              <span>Prüfschema {schema.nr}</span>
              <b>Seite {index + 1} / {anzahl}</b>
              <small>{seite.titel}</small>
            </div>
            <UmwStRSchemaPage schema={schema} page={index + 1} />
          </figure>
        ))}
      </div>
      <button className="btn btn--linie umwstr-bottom-back" onClick={zurueck}>← Zur Übersicht</button>
    </>
  );
}
