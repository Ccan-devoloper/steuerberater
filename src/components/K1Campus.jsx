import React, { useEffect, useMemo, useRef, useState } from "react";
import k1UstFaelle from "../data/module-vertiefung-m.js";
import Schaubild from "./Schaubild";
import UstPruefschema from "./UstPruefschema";
import { Notiz } from "./Bausteine";
import { SchemaVerweise, VerlinkteNormkette, VerlinkterText, grundschema } from "./K1SchemaLinks";
import { laden, sichern, useFortschritt, anteil } from "../lib/fortschritt";
import {
  IconCockpit, IconModule, IconFaelle, IconSchema, IconSuche, IconSonne, IconMond, IconHaken,
} from "./Icons";
import "./kst.css";

const fallIds = new Set(k1UstFaelle.map((fall) => fall.id));
const ansichten = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "module", label: "Umsatzsteuer", Icon: IconModule },
  { id: "faelle", label: "Originalfälle", Icon: IconFaelle },
  { id: "schema", label: "Prüfschema", Icon: IconSchema },
];

/* Skizzen aus der handschriftlichen Mitschrift. Die Darstellung übernimmt
   ausschließlich die dort notierten Beziehungen, Beträge, Zeitpunkte und
   Normhinweise; sie rechnet keine Werte neu. */
const loesungsskizzen = {
  141: [
    {
      typ: "fluss",
      titel: "Sony – Media Markt – Endkundin",
      schritte: [
        { titel: "Sony · München", zeilen: ["24.4. TV", "1.000 € + 190 € USt", "Rg. 2.5."], ton: "neutral" },
        { titel: "Media Markt · FFM", zeilen: ["Eingangsumsatz", "→ Ausgangsumsatz"], ton: "tinte" },
        { titel: "Kundin · Wetzlar", zeilen: ["24.6. TV", "2.000 € + 380 € USt", "Rg. 24.6."], ton: "neutral" },
      ],
      legende: "Skizze S. 3–12: Ausgangsumsatz zuerst prüfen; Vorsteuer 190 € auf der Eingangsseite. USt 380 € entsteht im VAZ 06, Vorsteuerabzug 190 € im VAZ 05.",
    },
  ],
  142: [
    {
      typ: "gegenueber",
      titel: "Ein Unternehmer – ein Unternehmen",
      links: {
        titel: "Unternehmensbereich",
        norm: "§ 2 Abs. 1 UStG",
        ton: "tinte",
        punkte: [
          "sämtliche Tätigkeitszweige gehören zum einen Unternehmen",
          "Grundgeschäft, Hilfsgeschäft und Nebengeschäft erfassen",
          "natürliche, juristische Personen und Personengesellschaften möglich",
        ],
      },
      rechts: {
        titel: "Abgrenzung",
        norm: "§ 1 Abs. 1 Nr. 1 UStG",
        ton: "orange",
        punkte: [
          "private Wohncouch: nicht im Rahmen des Unternehmens",
          "Umsätze zwischen eigenen Unternehmensteilen: Innenumsätze",
          "Innenumsätze sind nicht steuerbare Außenumsätze",
        ],
      },
      fussnote: "Skizze S. 18–20: Die Mitschrift zeichnet sämtliche Tätigkeitszweige in einen gemeinsamen Unternehmenskreis und markiert Vorgänge zwischen ihnen als nicht steuerbare Innenumsätze.",
    },
  ],
  143: [
    {
      typ: "stufen",
      titel: "Maschinenabholung in Dortmund",
      stufen: [
        { stufe: "1", text: "Kaufvertrag am 30.7.26", norm: "Vertrag", ton: "neutral" },
        { stufe: "2", text: "K holt die Maschine am 1.8.26 in Dortmund ab", norm: "Abholung", ton: "tinte" },
        { stufe: "3", text: "Verfügungsmacht an einem Gegenstand", norm: "§ 3 Abs. 1 UStG", ton: "tinte", ergebnis: "Lieferung" },
        { stufe: "4", text: "bewegte Lieferung beginnt in Dortmund", norm: "§ 3 Abs. 6 S. 1, 2 UStG", ton: "gruen", ergebnis: "Ort: Dortmund" },
      ],
      legende: "Skizze S. 23–25: Lieferung = Verschaffung der Verfügungsmacht an einem Gegenstand; bei der Abholung liegt der Beginn der Warenbewegung in Dortmund.",
    },
  ],
  146: [
    {
      typ: "fluss",
      titel: "Maschine mit Transport und Übernachtung",
      schritte: [
        { titel: "U · Aachen", zeilen: ["Maschine 238.000 €", "Transport 1.000 €", "Übernachtung 100 €"], ton: "tinte" },
        { titel: "Beförderung", zeilen: ["eigener Lkw", "Aachen → München"], ton: "neutral" },
        { titel: "K · München", zeilen: ["eine Hauptleistung", "Transport + Übernachtung", "= Nebenleistungen"], ton: "gruen" },
      ],
      legende: "Skizze S. 32–37: Maschine ist die Hauptleistung; Transport und die weiterbelastete Übernachtung teilen als Nebenleistungen deren umsatzsteuerliches Schicksal. Die Mitschrift verweist hierzu auf A 3.10 Abs. 5 UStAE.",
    },
  ],
  147: [
    {
      typ: "gegenueber",
      titel: "Zeitpunkt der sonstigen Leistung",
      links: {
        titel: "Grundsatz",
        norm: "mit Vollendung",
        ton: "tinte",
        punkte: [
          "Baggervermietung 1.1.26 bis 30.6.26",
          "ohne Teilleistungsvereinbarung: Vollendung am 30.6.",
        ],
      },
      rechts: {
        titel: "Ausnahme: Teilleistungen",
        norm: "§ 13 Abs. 1 Nr. 1 Buchst. a S. 2, 3 UStG",
        ton: "orange",
        punkte: [
          "monatliche Miete im Voraus vereinbart",
          "monatliche Teilleistungen",
          "jeweils eigener VAZ 01–06",
        ],
      },
      fussnote: "Skizzen S. 38 und 41–42: Die Mitschrift stellt Grundsatz und Ausnahme als zwei Äste gegenüber.",
    },
  ],
  148: [
    {
      typ: "gegenueber",
      titel: "Fliesenleger: Materialstellung entscheidet",
      links: {
        titel: "a) F stellt Material",
        norm: "§ 3 Abs. 4, § 3 Abs. 7 S. 1 UStG",
        ton: "tinte",
        punkte: [
          "Werklieferung",
          "unbewegte Lieferung",
          "Ort: Karlsruhe",
        ],
      },
      rechts: {
        titel: "b) K stellt Material",
        norm: "§ 3 Abs. 9 S. 1, § 3a Abs. 3 Nr. 1 UStG",
        ton: "gruen",
        punkte: [
          "sonstige Leistung",
          "Grundstücksleistung am Bürogebäude",
          "Ort: Karlsruhe",
        ],
      },
      fussnote: "Lösung S. 45; die vorgelagerte Skizze S. 43 trennt bei sonstigen Leistungen außerdem B2B (§ 3a Abs. 2 UStG) und B2C (§ 3a Abs. 1 UStG).",
    },
  ],
  150: [
    {
      typ: "gegenueber",
      titel: "Hotel Wien: Übernachtung und Frühstück",
      links: {
        titel: "Übernachtung",
        norm: "§ 12 Abs. 2 Nr. 11 UStG",
        ton: "gruen",
        punkte: [
          "7 %",
          "Beherbergungsleistung",
          "Ort Wien: § 3a Abs. 3 Nr. 1 UStG",
        ],
      },
      rechts: {
        titel: "Frühstück",
        norm: "§ 12 Abs. 1 UStG",
        ton: "orange",
        punkte: [
          "19 % nach der Mitschrift",
          "Nebenleistung, aber Aufteilungsgebot",
          "ab 2026 notiert: Essen 7 % / Getränke 19 %",
        ],
      },
      fussnote: "Box S. 53–54: Für den 2026-Exkurs sind 70 % Essen mit 7 % und 30 % Getränke mit 19 % notiert. Diese Quoten werden unverändert wiedergegeben.",
    },
  ],
  153: [
    {
      typ: "fluss",
      titel: "Leistungsaustausch gegen Entgelt",
      schritte: [
        { titel: "Unternehmer U", zeilen: ["Leistung"], ton: "tinte" },
        { titel: "Leistungsaustausch", zeilen: ["gegen Entgelt"], ton: "neutral" },
        { titel: "Kunde K", zeilen: ["Gegenleistung", "i. d. R. Geld"], ton: "gruen" },
      ],
      legende: "Skizze S. 64: Leistung des Unternehmers an den Kunden und Gegenleistung des Kunden bilden den Leistungsaustausch. Die Zeichnung ergänzt die Ortsprüfung des Telekommunikationsfalls.",
    },
  ],
};

function Loesungsskizzen({ fallId }) {
  const skizzen = loesungsskizzen[fallId] || [];
  if (!skizzen.length) return null;
  return (
    <div>
      {skizzen.map((spec, index) => <Schaubild key={`${fallId}-${index}`} spec={spec} />)}
    </div>
  );
}

function Loesungsblock({ m, onSchema }) {
  return (
    <div className="fall__block">
      <b>Lösung</b>
      <ol>
        {(m.example?.solution || []).map((s, i) => (
          <li key={i}><VerlinkterText text={s} onOpen={onSchema} compact /></li>
        ))}
      </ol>
      <Loesungsskizzen fallId={m.id} />
      {(m.normchain || []).length > 0 && (
        <div>
          <b>Normen der Lösung</b>
          <VerlinkteNormkette normen={m.normchain} onOpen={onSchema} />
        </div>
      )}
    </div>
  );
}

export default function K1Campus({ onKlausurwechsel }) {
  const [ansicht, setAnsicht] = useState("cockpit");
  const [fallId, setFallId] = useState(null);
  const [suche, setSuche] = useState("");
  const [schemaZiel, setSchemaZiel] = useState(null);
  const [navVerlauf, setNavVerlauf] = useState([
    { ansicht: "cockpit", fallId: null, schemaZiel: null, scrollY: 0 },
  ]);
  const [navIndex, setNavIndex] = useState(0);
  const scrollWiederherstellen = useRef(null);
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  const fortschritt = useFortschritt("stb-k1-ust-erledigt", fallIds);
  const erledigt = fortschritt.werte;

  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);

  useEffect(() => {
    const gespeicherterScroll = scrollWiederherstellen.current;
    scrollWiederherstellen.current = null;
    const timer = window.setTimeout(() => {
      if (typeof gespeicherterScroll === "number") {
        window.scrollTo({ top: gespeicherterScroll, behavior: "auto" });
        return;
      }
      if (ansicht === "schema" && schemaZiel) {
        document.getElementById(schemaZiel)?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [ansicht, fallId, schemaZiel]);

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    if (!q) return k1UstFaelle;
    return k1UstFaelle.filter((m) => [
      m.title,
      m.law,
      m.difficulty,
      ...(m.intro || []),
      ...(m.goals || []),
      ...(m.scheme || []),
      ...(m.normchain || []),
      m.example?.facts,
      ...(m.example?.solution || []),
      m.example?.result,
      m.merksatz,
      ...(m.exam || []),
      ...(m.traps || []),
    ].filter(Boolean).join(" ").toLowerCase().includes(q));
  }, [suche]);

  const fall = fallId ? k1UstFaelle.find((m) => m.id === fallId) : null;
  const quote = anteil(erledigt.length, k1UstFaelle.length);

  const ort = () => ({
    ansicht,
    fallId,
    schemaZiel,
    scrollY: window.scrollY,
  });

  const anwenden = (ziel, scrollY = null) => {
    scrollWiederherstellen.current = scrollY;
    setAnsicht(ziel.ansicht);
    setFallId(ziel.fallId ?? null);
    setSchemaZiel(ziel.schemaZiel ?? null);
  };

  const navigiere = (ziel) => {
    const naechster = {
      ansicht: ziel.ansicht,
      fallId: ziel.fallId ?? null,
      schemaZiel: ziel.schemaZiel ?? null,
      scrollY: 0,
    };
    if (
      naechster.ansicht === ansicht
      && naechster.fallId === fallId
      && naechster.schemaZiel === schemaZiel
    ) return;

    const aktuell = ort();
    setNavVerlauf((alt) => {
      const neu = alt.slice(0, navIndex + 1);
      neu[navIndex] = aktuell;
      neu.push(naechster);
      return neu;
    });
    setNavIndex(navIndex + 1);
    anwenden(naechster);
  };

  const navZurueck = () => {
    if (navIndex <= 0) return;
    const aktuell = ort();
    const ziel = navVerlauf[navIndex - 1];
    setNavVerlauf((alt) => {
      const neu = [...alt];
      neu[navIndex] = aktuell;
      return neu;
    });
    setNavIndex(navIndex - 1);
    anwenden(ziel, ziel.scrollY ?? 0);
  };

  const navVor = () => {
    if (navIndex >= navVerlauf.length - 1) return;
    const aktuell = ort();
    const ziel = navVerlauf[navIndex + 1];
    setNavVerlauf((alt) => {
      const neu = [...alt];
      neu[navIndex] = aktuell;
      return neu;
    });
    setNavIndex(navIndex + 1);
    anwenden(ziel, ziel.scrollY ?? 0);
  };

  useEffect(() => {
    const tastatur = (event) => {
      if (!event.altKey) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navZurueck();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        navVor();
      }
    };
    window.addEventListener("keydown", tastatur);
    return () => window.removeEventListener("keydown", tastatur);
  }, [navIndex, navVerlauf, ansicht, fallId, schemaZiel]);

  const ansichtOeffnen = (ziel) => navigiere({ ansicht: ziel });
  const oeffnen = (id) => navigiere({ ansicht: "module", fallId: id });
  const schemaOeffnen = (ziel = "schema-architektur") => navigiere({ ansicht: "schema", schemaZiel: ziel });

  return (
    <div className="kst-campus">
      <header className="topbar">
        <button className="brand" onClick={() => ansichtOeffnen("cockpit")}>
          <span className="brand__mark">1</span>
          <span className="brand__text">
            <strong>Examenscampus Klausur 1</strong>
            <span>Verfahrensrecht · andere Steuerarten · Umsatzsteuer</span>
          </span>
        </button>
        <div role="group" aria-label="Navigation in Klausur 1" style={{ display: "flex", gap: 4 }}>
          <button
            type="button"
            className="iconbtn"
            onClick={navZurueck}
            disabled={navIndex <= 0}
            aria-label="Zurück zur vorherigen Seite"
            title="Zurück (Alt + Pfeil links)"
          >
            ←
          </button>
          <button
            type="button"
            className="iconbtn"
            onClick={navVor}
            disabled={navIndex >= navVerlauf.length - 1}
            aria-label="Vor zur nächsten Seite"
            title="Vor (Alt + Pfeil rechts)"
          >
            →
          </button>
        </div>
        <span className="topbar__spacer" />
        <label className="search">
          <IconSuche />
          <input
            type="search"
            value={suche}
            placeholder="USt-Fall, Norm oder Stichwort suchen"
            aria-label="Umsatzsteuer-Fälle durchsuchen"
            onChange={(e) => {
              setSuche(e.target.value);
              if (ansicht !== "module" || fallId !== null) ansichtOeffnen("module");
            }}
          />
        </label>
        <button
          className="iconbtn"
          onClick={() => setDunkel((d) => !d)}
          aria-label={dunkel ? "Helles Design" : "Dunkles Design"}
          title={dunkel ? "Helles Design" : "Dunkles Design"}
        >
          {dunkel ? <IconSonne /> : <IconMond />}
        </button>
      </header>

      <nav className="klausuren" aria-label="Klausuren des schriftlichen Examens">
        <button className="klausur" aria-current="true" onClick={() => ansichtOeffnen("cockpit")}>
          <b>K1</b>
          <span><strong>Verfahrensrecht</strong> <small>USt verfügbar · weitere Steuerarten folgen</small></span>
        </button>
        <button className="klausur" onClick={() => onKlausurwechsel("kst")}>
          <b>K2</b>
          <span><strong>Ertragsteuerrecht</strong> <small>KSt verfügbar · ESt/GewSt folgen</small></span>
        </button>
        <button className="klausur" onClick={() => onKlausurwechsel("k3")}>
          <b>K3</b>
          <span><strong>Buchführung und Bilanzwesen</strong> <small>zur Plattform wechseln</small></span>
        </button>
      </nav>

      <aside className="rail">
        <nav className="rail__nav" aria-label="Klausur-1-Hauptnavigation">
          {ansichten.map(({ id, label, Icon }) => (
            <button
              key={id}
              className="rail__link"
              aria-current={ansicht === id ? "true" : undefined}
              onClick={() => ansichtOeffnen(id)}
            >
              <Icon />
              {label}
            </button>
          ))}
        </nav>
        <div className="rail__box">
          <b>USt-Fortschritt</b>
          <strong>{erledigt.length} / {k1UstFaelle.length}</strong>
          <p>Originalfälle als bearbeitet markiert</p>
          {erledigt.length > 0 && (
            <button
              className="rail__box-reset"
              onClick={() => {
                if (window.confirm("Bearbeitungsstand der USt-Fälle zurücksetzen?")) fortschritt.zuruecksetzen();
              }}
            >
              zurücksetzen
            </button>
          )}
        </div>
      </aside>

      <main className="page">
        {ansicht === "cockpit" && <K1Cockpit quote={quote} erledigt={erledigt} oeffnen={oeffnen} ansichtOeffnen={ansichtOeffnen} schemaOeffnen={schemaOeffnen} />}
        {ansicht === "module" && !fall && (
          <K1Liste
            liste={gefiltert}
            suche={suche}
            erledigt={erledigt}
            umschalten={fortschritt.umschalten}
            oeffnen={oeffnen}
            schemaOeffnen={schemaOeffnen}
          />
        )}
        {ansicht === "module" && fall && (
          <K1Fallseite
            fall={fall}
            erledigt={erledigt}
            umschalten={fortschritt.umschalten}
            zurueck={() => ansichtOeffnen("module")}
            oeffnen={oeffnen}
            schemaOeffnen={schemaOeffnen}
          />
        )}
        {ansicht === "faelle" && <K1Originalfaelle oeffnen={oeffnen} schemaOeffnen={schemaOeffnen} />}
        {ansicht === "schema" && <UstPruefschema />}
      </main>
    </div>
  );
}

function K1Cockpit({ quote, erledigt, oeffnen, ansichtOeffnen, schemaOeffnen }) {
  const naechstes = k1UstFaelle.find((m) => !erledigt.includes(m.id)) || k1UstFaelle[0];
  return (
    <>
      <div className="cockpit">
        <section className="these kst-these">
          <span className="kicker">Klausur 1 · andere Steuerarten · Umsatzsteuer</span>
          <h2>Umsatzsteuer systematisch: <em>Steuerbarkeit bis Vorsteuer.</em></h2>
          <p>
            Die erste USt-Einheit ist vollständig in Klausur 1 eingeordnet: {k1UstFaelle.length} Originalfälle aus der
            Mitschrift mit Normketten, Prüfungsschemata, konkreten Zahlen und vollständigen Lösungswegen.
          </p>
          <div className="these__aktionen">
            <button className="btn" onClick={() => oeffnen(naechstes.id)}>Weiterlernen</button>
            <button className="btn btn--linie" onClick={() => ansichtOeffnen("faelle")}>Originalfälle öffnen</button>
            <button className="btn btn--linie" onClick={() => schemaOeffnen("schema-architektur")}>Prüfschema öffnen</button>
          </div>
        </section>
        <section className="panel fortschritt">
          <div className="ring" style={{ "--p": `${quote}%` }}><b>{quote}%</b></div>
          <h3>Bearbeitungsstand</h3>
          <p>{erledigt.length} von {k1UstFaelle.length} Fällen abgehakt</p>
        </section>
      </div>

      <section className="abschnitt">
        <span className="kicker">Weiter in der USt-Einheit</span>
        <button className="weiter" onClick={() => oeffnen(naechstes.id)}>
          <span className="kicker">Originalfall {naechstes.id} · {naechstes.difficulty}</span>
          <h3>{naechstes.title}</h3>
          <p>{naechstes.intro[0]}</p>
          <span className="norm">{naechstes.law}</span>
        </button>
        <SchemaVerweise text={naechstes.law} onOpen={schemaOeffnen} />
      </section>

      <section className="abschnitt">
        <div className="kst-abschnitt-kopf">
          <h2>USt-Grundschema der Mitschrift</h2>
          <button className="kst-schema-alle" onClick={() => schemaOeffnen("schema-architektur")}>Gesamtes Prüfschema ↗</button>
        </div>
        <div className="kst-pruefpfad">
          {grundschema.map(([nummer, titel, text, ziel]) => (
            <button className="kst-pruefpfad__stufe" key={nummer} onClick={() => schemaOeffnen(ziel)}>
              <b>{nummer}</b>
              <div><h3>{titel}</h3><p>{text}</p><small>im Prüfschema ↗</small></div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function K1Liste({ liste, suche, erledigt, umschalten, oeffnen, schemaOeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 1 · Umsatzsteuer</span>
          <h1>{suche ? `Treffer für „${suche}“` : "USt-Einheit 1"}</h1>
          <p className="lead">Die 13 Sachverhalte der Mitschrift sind ausschließlich hier in Klausur 1 eingeordnet.</p>
        </div>
        <span className="zaehler">{liste.length} Fälle</span>
      </div>

      <div className="modules">
        {liste.map((m) => {
          const fertig = erledigt.includes(m.id);
          return (
            <div
              key={m.id}
              className={`modul${fertig ? " modul--fertig" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => oeffnen(m.id)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), oeffnen(m.id))}
            >
              <span
                className="modul__check"
                role="checkbox"
                aria-checked={fertig}
                aria-label="Als bearbeitet markieren"
                tabIndex={0}
                onClick={(e) => { e.stopPropagation(); umschalten(m.id); }}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), e.stopPropagation(), umschalten(m.id))}
              >
                <IconHaken />
              </span>
              <div>
                <div className="modul__kopf">
                  <span>Umsatzsteuer</span>
                  <span>Fall {m.id}</span>
                  <span>{m.difficulty}</span>
                  <span>{m.minutes} Min.</span>
                </div>
                <h3>{m.title}</h3>
                <div className="modul__norm">{m.law}</div>
                <SchemaVerweise text={m.law} onOpen={schemaOeffnen} compact stopPropagation />
              </div>
              <span className="modul__an">öffnen →</span>
            </div>
          );
        })}
        {liste.length === 0 && <p className="panel">Keine Treffer. Eine andere Schreibweise oder Norm versuchen.</p>}
      </div>
    </>
  );
}

function Tz({ nummer, label, titel, art, children }) {
  return (
    <section className={`tz${art ? ` tz--${art}` : ""}`}>
      <div className="tz__no"><b>Tz. {nummer}</b>{label}</div>
      <div className="tz__body">{titel && <h2 className="tz__titel">{titel}</h2>}{children}</div>
    </section>
  );
}

function K1Fallseite({ fall: m, erledigt, umschalten, zurueck, oeffnen, schemaOeffnen }) {
  const fertig = erledigt.includes(m.id);
  const index = k1UstFaelle.findIndex((x) => x.id === m.id);
  const vorher = k1UstFaelle[index - 1];
  const nachher = k1UstFaelle[index + 1];
  let tz = 0;
  const n = () => ++tz;

  return (
    <article className="lesson">
      <button className="zurueck" onClick={zurueck}>← Zurück zur USt-Übersicht</button>
      <header className="lesson__kopf">
        <div>
          <span className="kicker">Klausur 1 · Umsatzsteuer · Originalfall {m.id}</span>
          <h1>{m.title}</h1>
          <div className="tags">
            <span className="tag tag--fach">{m.difficulty}</span>
            <span className="tag">{m.minutes} Minuten</span>
            <span className="tag">{m.law}</span>
          </div>
          <SchemaVerweise text={m.law} onOpen={schemaOeffnen} />
        </div>
        <button className="gemeistert" aria-pressed={fertig} onClick={() => umschalten(m.id)}>
          {fertig ? "✓ bearbeitet" : "Als bearbeitet markieren"}
        </button>
      </header>

      <Tz nummer={n()} label="Einordnung" titel="Worum es geht">
        {(m.intro || []).map((p, i) => <VerlinkterText key={i} as="p" text={p} onOpen={schemaOeffnen} compact />)}
      </Tz>

      <Tz nummer={n()} label="Lernziele" titel="Das können Sie danach">
        <ul className="liste liste--haken">{(m.goals || []).map((g, i) => <li key={i}><VerlinkterText text={g} onOpen={schemaOeffnen} compact /></li>)}</ul>
      </Tz>

      <Tz nummer={n()} label="Schema" titel="Prüfungsreihenfolge" art="ansatz">
        <ol className="schritte">{(m.scheme || []).map((s, i) => <li key={i}><VerlinkterText text={s} onOpen={schemaOeffnen} compact /></li>)}</ol>
        {m.diagram && <Schaubild id={m.diagram} />}
      </Tz>

      <Tz nummer={n()} label="Normen" titel="Normenkette für die Klausur">
        <VerlinkteNormkette normen={m.normchain || []} onOpen={schemaOeffnen} />
      </Tz>

      {m.example && (
        <Tz nummer={n()} label="Originalfall" titel={m.example.title} art="bewertung">
          <div className="fall">
            <div className="fall__block fall__sachverhalt"><b>Sachverhalt</b><VerlinkterText as="p" text={m.example.facts} onOpen={schemaOeffnen} compact /></div>
            <Loesungsblock m={m} onSchema={schemaOeffnen} />
            <div className="fall__block fall__ergebnis"><b>Ergebnis</b><VerlinkterText as="p" text={m.example.result} onOpen={schemaOeffnen} compact /></div>
          </div>
        </Tz>
      )}

      <Tz nummer={n()} label="Sichern" titel="Merksatz, Prüfungsrelevanz und Fallen">
        <Notiz><VerlinkterText as="p" text={m.merksatz} onOpen={schemaOeffnen} compact /></Notiz>
        {m.exam?.length > 0 && <Notiz art="exkurs" titel="Prüfungsrelevanz"><ul className="liste">{m.exam.map((e, i) => <li key={i}><VerlinkterText text={e} onOpen={schemaOeffnen} compact /></li>)}</ul></Notiz>}
        {m.traps?.length > 0 && <Notiz art="falle"><ul>{m.traps.map((t, i) => <li key={i}><VerlinkterText text={t} onOpen={schemaOeffnen} compact /></li>)}</ul></Notiz>}
      </Tz>

      <nav className="blaettern">
        {vorher ? <button onClick={() => oeffnen(vorher.id)}><small>← Fall {vorher.id}</small><strong>{vorher.title}</strong></button> : <span />}
        {nachher ? <button onClick={() => oeffnen(nachher.id)}><small>Fall {nachher.id} →</small><strong>{nachher.title}</strong></button> : <span />}
      </nav>
    </article>
  );
}

function K1Originalfaelle({ oeffnen, schemaOeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 1 · Fallsammlung</span>
          <h1>Originalfälle der USt-Mitschrift</h1>
          <p className="lead">Sachverhalt, vollständige Lösung, Lösungsskizzen und zitierte Normen sind direkt in jeder Fallkarte aufklappbar.</p>
        </div>
        <span className="zaehler">{k1UstFaelle.length} Fälle</span>
      </div>
      <div className="kst-faelle">
        {k1UstFaelle.map((m) => (
          <article className="panel kst-fallkarte" key={m.id}>
            <div className="panel__head">
              <div><span className="kicker">Fall {m.id} · {m.minutes} Min.</span><h2>{m.title}</h2></div>
              <button className="btn btn--klein btn--linie" onClick={() => oeffnen(m.id)}>Fall öffnen</button>
            </div>
            <p className="kst-fallquelle">{m.law}</p>
            <SchemaVerweise text={m.law} onOpen={schemaOeffnen} compact />
            <div className="kst-sachverhalt">
              <b>Sachverhalt</b>
              <VerlinkterText as="p" text={m.example?.facts} onOpen={schemaOeffnen} compact />
            </div>
            <details>
              <summary>Lösung anzeigen</summary>
              <div className="fall">
                <Loesungsblock m={m} onSchema={schemaOeffnen} />
                <div className="fall__block fall__ergebnis"><b>Ergebnis</b><VerlinkterText as="p" text={m.example?.result} onOpen={schemaOeffnen} compact /></div>
              </div>
            </details>
          </article>
        ))}
      </div>
    </>
  );
}