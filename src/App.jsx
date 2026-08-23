import React, { useEffect, useMemo, useRef, useState } from "react";
import { module as alleModule, bereiche, bereichName, normenregister } from "./data/module";
import { zugeordneteFaelle } from "./data/fallsammlung";
import offeneFaelle from "./data/faelle-offen";
import { sourceCatalog, researchNote } from "./data/sources";
import { formeln, karteikarten, quizfragen, wochenplan, glossar } from "./data/lernstoff";
import Schaubild from "./components/Schaubild";
import Fallsammlungsfaelle from "./components/Fallsammlungsfaelle";
import Falluebersicht from "./components/Falluebersicht";
import Hausaufgabenseite, { HausaufgabenZuModul, IconHausaufgabe } from "./components/Hausaufgaben";
import Klausurmodus, { IconKlausur } from "./components/Klausurmodus";
import { Norm, Normkette, Notiz, Buchungssatz, Bilanzspiegel } from "./components/Bausteine";
import Pruefungsschemata, { schemata as pruefungsschemata } from "./components/Pruefungsschemata";
import SchemaPostitEnhancer from "./components/SchemaPostitEnhancer";
import { laden, sichern, useFortschritt, anteil } from "./lib/fortschritt";
import { erfasseSeitenzustand, stelleSeitenzustandWiederHer } from "./lib/campus-navigation";
import {
  IconCockpit, IconModule, IconSchema, IconFormel, IconRegister, IconTraining,
  IconFaelle, IconPlan, IconHaken,
} from "./components/Icons";
import { CampusTopbar, KlausurenLeiste } from "./components/CampusKopf";
import Erklaervideo from "./components/Erklaervideo";
import K3Fachleiste from "./components/K3Fachleiste";

/* Gültige Kennungen für die Bereinigung des gespeicherten Fortschritts. */
const modulIds = new Set(alleModule.map((m) => m.id));
const wochenIds = wochenplan.map((_, i) => i);

const ansichten = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "module", label: "Lernmodule", Icon: IconModule },
  { id: "faelle", label: "Fälle", Icon: IconFaelle },
  { id: "klausur", label: "Klausurmodus", Icon: IconKlausur },
  { id: "hausaufgaben", label: "Hausaufgaben", Icon: IconHausaufgabe },
  { id: "schema", label: "Prüfungsschema", Icon: IconSchema },
  { id: "formeln", label: "Rechenwege", Icon: IconFormel },
  { id: "register", label: "Normenregister", Icon: IconRegister },
  { id: "training", label: "Training", Icon: IconTraining },
  { id: "plan", label: "Lernplan", Icon: IconPlan },
];

const abbaFelder = [
  { buchstabe: "A", titel: "Ansatz I – Zurechnung", text: "Wem ist das Wirtschaftsgut zuzurechnen? § 246 Abs. 1 S. 2 HGB, § 39 AO." },
  { buchstabe: "A", titel: "Ansatz II – Zuordnung", text: "Was ist es? Anlage- oder Umlaufvermögen, abnutzbar, notwendig oder gewillkürt." },
  { buchstabe: "B", titel: "Bewertung I und II", text: "Welcher Maßstab gilt, und wie hoch sind AK/HK oder Erfüllungsbetrag?" },
  { buchstabe: "B", titel: "Bewertung III und IV", text: "Fortführung über AfA, Abzinsung, Wertberichtigung – Wertansatz getrennt für HB und StB." },
];

/* =========================================================== Hauptkomponente */
export default function App({ onKlausurwechsel, onFachwechsel }) {
  const [ansicht, setAnsicht] = useState("cockpit");
  const [modulId, setModulId] = useState(null);
  const [suche, setSuche] = useState("");
  const [bereich, setBereich] = useState("alle");
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  const [hausaufgabenAnker, setHausaufgabenAnker] = useState(null);
  const [navVerlauf, setNavVerlauf] = useState([
    { ansicht: "cockpit", modulId: null, bereich: "alle", hausaufgabenAnker: null, scrollY: 0, offeneDetails: [] },
  ]);
  const [navIndex, setNavIndex] = useState(0);
  const wiederherstellenRef = useRef(null);

  /* Beide Stände werden beim Laden gegen den heutigen Bestand bereinigt. */
  const module = useFortschritt("stb-erledigt", modulIds);
  const plan = useFortschritt("stb-plan", (i) => wochenIds.includes(i));
  const erledigt = module.werte;
  const umschalten = module.umschalten;

  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);

  useEffect(() => {
    const snapshot = wiederherstellenRef.current;
    wiederherstellenRef.current = null;
    if (snapshot) return stelleSeitenzustandWiederHer(snapshot);
    window.scrollTo({ top: 0, behavior: "auto" });
    return undefined;
  }, [ansicht, modulId]);

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return alleModule.filter((m) => {
      if (bereich !== "alle" && m.area !== bereich) return false;
      if (!q) return true;
      const falltext = (m.fallsammlung || []).flatMap((fall) => [fall.titel, fall.quellmodul, fall.sachverhalt, fall.loesung]).join(" ");
      const heu = [m.title, m.law, m.merksatz, (m.normchain || []).join(" "), (m.intro || []).join(" "), falltext]
        .join(" ")
        .toLowerCase();
      return heu.includes(q);
    });
  }, [suche, bereich]);

  const modul = modulId ? alleModule.find((m) => m.id === modulId) : null;
  const quote = anteil(erledigt.length, alleModule.length);

  /* Zweite Kennzahl: Fälle, die im Klausurmodus tatsächlich bearbeitet wurden.
     Gezählt wird jeder Fall einmal, egal wie oft er vorkam. */
  const gerechnet = useMemo(() => {
    const laeufe = laden("stb-klausurlauf", []);
    const liste = Array.isArray(laeufe) ? laeufe : [];
    const gesamt = alleModule.filter((m) => m.area === "Fall" && m.example?.facts).length;
    const ids = new Set(liste.flatMap((l) => (l.faelle || []).map((f) => f.modulId)));
    return { anzahl: ids.size, gesamt, quote: anteil(ids.size, gesamt), letzter: liste[0] || null };
  }, [ansicht]);

  const ort = () => ({ ansicht, modulId, bereich, hausaufgabenAnker, ...erfasseSeitenzustand() });

  const anwenden = (ziel, wiederherstellen = false) => {
    wiederherstellenRef.current = wiederherstellen ? ziel : null;
    setAnsicht(ziel.ansicht);
    setModulId(ziel.modulId ?? null);
    setBereich(ziel.bereich ?? bereich);
    setHausaufgabenAnker(ziel.hausaufgabenAnker ?? null);
  };

  const navigiere = (ziel) => {
    const naechster = {
      ansicht: ziel.ansicht,
      modulId: ziel.modulId ?? null,
      bereich: ziel.bereich ?? bereich,
      hausaufgabenAnker: ziel.hausaufgabenAnker ?? null,
      scrollY: 0,
      offeneDetails: [],
    };
    if (
      naechster.ansicht === ansicht
      && naechster.modulId === modulId
      && naechster.bereich === bereich
      && naechster.hausaufgabenAnker === hausaufgabenAnker
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
    anwenden(ziel, true);
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
    anwenden(ziel, true);
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
  }, [navIndex, navVerlauf, ansicht, modulId, bereich, hausaufgabenAnker]);

  const ansichtOeffnen = (ziel) => navigiere({ ansicht: ziel });
  const bereichOeffnen = (ziel) => navigiere({ ansicht: "module", bereich: ziel });
  const oeffnen = (id) => navigiere({ ansicht: "module", modulId: id });

  /* Sprung von einer Modulseite zu einer bestimmten Hausaufgabe. */
  const oeffnenHausaufgabe = (id) => navigiere({ ansicht: "hausaufgaben", hausaufgabenAnker: id });

  return (
    <div>
      <CampusTopbar
        klausur="3"
        marke="3"
        name="Examenscampus Klausur 3"
        untertitel="Buchführung und Bilanzwesen"
        aufCockpit={() => ansichtOeffnen("cockpit")}
        navZurueck={navZurueck}
        navVor={navVor}
        zurueckMoeglich={navIndex > 0}
        vorMoeglich={navIndex < navVerlauf.length - 1}
        suche={suche}
        sucheSetzen={(wert) => {
          setSuche(wert);
          if (ansicht !== "module" || modulId !== null) ansichtOeffnen("module");
        }}
        suchePlatzhalter="Modul, Norm oder Stichwort suchen"
        sucheAria="Module durchsuchen"
        dunkel={dunkel}
        dunkelUmschalten={() => setDunkel((d) => !d)}
      />

      <KlausurenLeiste aktiv="k3" aufCockpit={() => ansichtOeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />

      <K3Fachleiste aktiv="allgemein" onWechsel={onFachwechsel} />

      <aside className="rail">
        <nav className="rail__nav" aria-label="Hauptnavigation">
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
          <b>Fortschritt</b>
          <strong>{erledigt.length} / {alleModule.length}</strong>
          <p>Module als bearbeitet markiert</p>
          {erledigt.length > 0 && (
            <button
              className="rail__box-reset"
              onClick={() => {
                if (window.confirm("Bearbeitungsstand aller Module zurücksetzen?")) module.zuruecksetzen();
              }}
            >
              zurücksetzen
            </button>
          )}
        </div>
      </aside>

      <main className="page">
        {ansicht === "cockpit" && <Cockpit quote={quote} gerechnet={gerechnet} erledigt={erledigt} oeffnen={oeffnen} ansichtOeffnen={ansichtOeffnen} bereichOeffnen={bereichOeffnen} />}
        {ansicht === "module" && !modul && (
          <Modulliste
            liste={gefiltert}
            bereich={bereich}
            setBereich={setBereich}
            suche={suche}
            erledigt={erledigt}
            umschalten={umschalten}
            oeffnen={oeffnen}
          />
        )}
        {ansicht === "module" && modul && (
          <Modulseite
            modul={modul}
            erledigt={erledigt}
            umschalten={umschalten}
            zurueck={() => ansichtOeffnen("module")}
            oeffnen={oeffnen}
            oeffnenHausaufgabe={oeffnenHausaufgabe}
          />
        )}
        {ansicht === "faelle" && (
          <Falluebersicht
            zugeordneteFaelle={zugeordneteFaelle}
            offeneFaelle={offeneFaelle}
            module={alleModule}
            oeffnenModul={oeffnen}
          />
        )}
        {ansicht === "klausur" && <Klausurmodus module={alleModule} oeffnenModul={oeffnen} />}
        {ansicht === "hausaufgaben" && (
          <Hausaufgabenseite
            module={alleModule}
            anker={hausaufgabenAnker}
            setAnker={setHausaufgabenAnker}
            oeffnenModul={oeffnen}
          />
        )}
        {ansicht === "schema" && <Schemaseite />}
        {ansicht === "formeln" && <Formelseite />}
        {ansicht === "register" && <Registerseite oeffnen={oeffnen} />}
        {ansicht === "training" && <Trainingsseite />}
        {ansicht === "plan" && <Planseite fertig={plan.werte} umschalten={plan.umschalten} />}
      </main>
    </div>
  );
}

/* ================================================================= Cockpit */
function Cockpit({ quote, gerechnet, erledigt, oeffnen, ansichtOeffnen, bereichOeffnen }) {
  const naechstes = alleModule.find((m) => !erledigt.includes(m.id)) || alleModule[0];
  const zahl = (bereichId) => alleModule.filter((m) => m.area === bereichId).length;

  return (
    <>
      <div className="cockpit">
        <section className="these">
          <span className="kicker">Klausur 3 · sechs Stunden · 100 Punkte</span>
          <h2>Jede Textziffer beginnt gleich: <em>Mach ABBA.</em></h2>
          <p>
            Zurechnung, Zuordnung, Bewertung, Wertansatz – und danach Buchung im richtigen Buchungskreis.
            Diese Plattform baut den Stoff genau in dieser Reihenfolge auf: {alleModule.length} Module,
            Originalfälle aus den Kursmitschriften, vollständige Normketten und Rechenwege.
          </p>
          <div className="these__aktionen">
            <button className="btn" onClick={() => oeffnen(naechstes.id)}>Weiterlernen</button>
            <button className="btn btn--linie" onClick={() => ansichtOeffnen("schema")}>Prüfungsschema ansehen</button>
          </div>
        </section>
        <section className="panel fortschritt">
          <div className="fortschritt__ringe">
            <div>
              <div className="ring" style={{ "--p": `${quote}%` }}><b>{quote}%</b></div>
              <h3>Bearbeitungsstand</h3>
              <p>{erledigt.length} von {alleModule.length} Modulen abgehakt</p>
            </div>
            <div>
              <div className="ring ring--gerechnet" style={{ "--p": `${gerechnet.quote}%` }}>
                <b>{gerechnet.quote}%</b>
              </div>
              <h3>Selbst gerechnet</h3>
              <p>{gerechnet.anzahl} von {gerechnet.gesamt} Fällen im Klausurmodus bearbeitet</p>
            </div>
          </div>
          {gerechnet.letzter && (
            <p className="fortschritt__lauf">
              Letzter Klausurlauf: {gerechnet.letzter.erreicht} von {gerechnet.letzter.moeglich} Punkten,{" "}
              {gerechnet.letzter.minuten > gerechnet.letzter.sollminuten
                ? `${gerechnet.letzter.minuten - gerechnet.letzter.sollminuten} Minuten über Sollzeit`
                : `${gerechnet.letzter.sollminuten - gerechnet.letzter.minuten} Minuten unter Sollzeit`}
            </p>
          )}
        </section>
      </div>

      <section className="abschnitt">
        <span className="kicker">Weiter im Stoff</span>
        <button className="weiter" onClick={() => oeffnen(naechstes.id)}>
          <span className="kicker">{bereichName[naechstes.area]} · Modul {naechstes.id}</span>
          <h3>{naechstes.title}</h3>
          <p>{naechstes.intro[0]}</p>
          <span className="norm">{naechstes.law}</span>
        </button>
      </section>

      <section className="abschnitt">
        <h2>Aufbau der Plattform</h2>
        <div className="raster raster--3">
          {["EU", "PersG", "KapG", "Technik", "Fall"].map((id) => {
            const gesamt = zahl(id);
            const fertig = alleModule.filter((m) => m.area === id && erledigt.includes(m.id)).length;
            return (
              <article className="bereich" key={id}>
                <b>{gesamt} Module</b>
                <h3>{bereichName[id]}</h3>
                <p>{bereichBeschreibung[id]}</p>
                <div className="bereich__balken" role="img" aria-label={`${fertig} von ${gesamt} bearbeitet`}>
                  <span style={{ width: `${anteil(fertig, gesamt)}%` }} />
                </div>
                <small className="bereich__stand">{fertig} von {gesamt} bearbeitet</small>
                <button onClick={() => bereichOeffnen(id)}>Module öffnen →</button>
              </article>
            );
          })}
          <article className="bereich">
            <b>{formeln.length} Rechenwege</b>
            <h3>Formelsammlung</h3>
            <p>Zinsstaffel, Abzinsung, PWB, Sonder-AfA und Zeitbudget mit belegten Beispielrechnungen.</p>
            <button onClick={() => ansichtOeffnen("formeln")}>Rechenwege öffnen →</button>
          </article>
        </div>
      </section>

      <section className="abschnitt">
        <h2>Das Aufbauschema</h2>
        <AbbaLeiste />
        <Schaubild id="buchungskreise" />
      </section>
    </>
  );
}

const bereichBeschreibung = {
  EU: "Ansatz, Bewertung und Fortführung der Aktiv- und Passivseite – der größte Aufgabenteil.",
  PersG: "Gesamthand, Ergänzungs- und Sonderbilanz bis zum steuerlichen Gesamtgewinn.",
  KapG: "Eigenkapital, Ausschüttung, Einlagekonto, verdeckte Gewinnausschüttung und Einlage.",
  Technik: "Buchungssätze, Mehr-/Weniger-Rechnung, Bilanzberichtigung, Zeit- und Punktemanagement.",
  Fall: "Vollständig durchgerechnete Originalfälle mit Buchungen und HB-/StB-Gegenüberstellung.",
};

function AbbaLeiste() {
  return (
    <div className="abba">
      {abbaFelder.map((f, i) => (
        <div className="abba__feld" key={i}>
          <span className="abba__buchstabe">{f.buchstabe}</span>
          <b>{f.titel}</b>
          <span>{f.text}</span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================= Modulliste */
function Modulliste({ liste, bereich, setBereich, suche, erledigt, umschalten, oeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Lernmodule</span>
          <h1>{suche ? `Treffer für „${suche}“` : bereiche.find((b) => b.id === bereich)?.label}</h1>
          <p className="lead">
            Jedes Modul folgt derselben Gliederung: Einordnung, Lernziele, Prüfungsschema, Normenkette,
            durchgerechneter Fall, Buchungssätze, Merksatz und Klausurfallen.
          </p>
        </div>
        <span className="zaehler">{liste.length} Module</span>
      </div>

      <div className="filter">
        {bereiche.map((b) => (
          <button key={b.id} aria-pressed={bereich === b.id} onClick={() => setBereich(b.id)}>
            {b.label}
          </button>
        ))}
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
                  <span>{bereichName[m.area]}</span>
                  <span>Modul {m.id}</span>
                  <span>{m.difficulty}</span>
                  <span>{m.minutes} Min.</span>
                </div>
                <h3>{m.title}</h3>
                <div className="modul__norm">{m.law}</div>
              </div>
              <span className="modul__an">öffnen →</span>
            </div>
          );
        })}
        {liste.length === 0 && (
          <p className="panel">Keine Treffer. Andere Schreibweise probieren oder den Filter zurücksetzen.</p>
        )}
      </div>
    </>
  );
}

/* ============================================================= Modulseite */
function Tz({ nummer, label, titel, art, children }) {
  return (
    <section className={`tz${art ? ` tz--${art}` : ""}`}>
      <div className="tz__no">
        <b>Tz. {nummer}</b>
        {label}
      </div>
      <div className="tz__body">
        {titel && <h2 className="tz__titel">{titel}</h2>}
        {children}
      </div>
    </section>
  );
}

function Modulseite({ modul: m, erledigt, umschalten, zurueck, oeffnen, oeffnenHausaufgabe }) {
  const fertig = erledigt.includes(m.id);
  const index = alleModule.findIndex((x) => x.id === m.id);
  const vorher = alleModule[index - 1];
  const nachher = alleModule[index + 1];
  let tz = 0;
  const n = () => ++tz;

  return (
    <article className="lesson">
      <button className="zurueck" onClick={zurueck}>← Zurück zur Modulübersicht</button>

      <header className="lesson__kopf">
        <div>
          <span className="kicker">{bereichName[m.area]} · Modul {m.id}</span>
          <h1>{m.title}</h1>
          <div className="tags">
            <span className="tag tag--fach">{m.difficulty}</span>
            <span className="tag">{m.minutes} Minuten</span>
            <span className="tag">{m.law}</span>
          </div>
        </div>
        <button className="gemeistert" aria-pressed={fertig} onClick={() => umschalten(m.id)}>
          {fertig ? "✓ bearbeitet" : "Als bearbeitet markieren"}
        </button>
      </header>

      {m.area === "Fall" && <AbbaLeiste />}

      <Erklaervideo modul={m} bereichName={bereichName[m.area]} />

      <Tz nummer={n()} label="Einordnung" titel="Worum es geht">
        {m.intro.map((p, i) => <p key={i}>{p}</p>)}
        {m.diagram && <Schaubild id={m.diagram} />}
      </Tz>

      {m.goals?.length > 0 && (
        <Tz nummer={n()} label="Lernziele" titel="Das können Sie danach">
          <ul className="liste liste--haken">
            {m.goals.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
        </Tz>
      )}

      {m.scheme?.length > 0 && (
        <Tz nummer={n()} label="Schema" titel="Prüfungsreihenfolge" art="ansatz">
          <ol className="schritte">
            {m.scheme.map((s, i) => <li key={i}><span>{s}</span></li>)}
          </ol>
        </Tz>
      )}

      {m.normchain?.length > 0 && (
        <Tz nummer={n()} label="Normen" titel="Normenkette für die Klausur">
          <p>
            In dieser Reihenfolge zitieren. Jede Norm gehört zu genau einem Prüfungsschritt und wird mit
            einem Ergebnissatz abgeschlossen.
          </p>
          <Normkette normen={m.normchain} />
        </Tz>
      )}

      {m.example && (
        <Tz nummer={n()} label="Fall" titel={m.example.title} art="bewertung">
          <div className="fall">
            <div className="fall__block fall__sachverhalt">
              <b>Sachverhalt</b>
              <p>{m.example.facts}</p>
            </div>
            <div className="fall__block">
              <b>Lösung</b>
              <ol>
                {m.example.solution.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
            </div>
            <div className="fall__block fall__ergebnis">
              <b>Ergebnis</b>
              <p>{m.example.result}</p>
            </div>
          </div>
        </Tz>
      )}

      {m.fallsammlung?.length > 0 && (
        <Tz nummer={n()} label="Fallsammlung" titel="Fälle & Lösungen" art="bewertung">
          <p>Die folgenden Fälle sind ausschließlich diesem fachlich einschlägigen Lernmodul zugeordnet. Der Sachverhalt ist direkt sichtbar; die Lösung lässt sich einzeln öffnen.</p>
          <Fallsammlungsfaelle faelle={m.fallsammlung} />
        </Tz>
      )}

      {m.hbstb && (
        <Tz nummer={n()} label="Wertansatz" titel={`Handelsbilanz und Steuerbilanz zum ${m.hbstb.datum}`} art="bewertung">
          <Bilanzspiegel daten={m.hbstb} />
        </Tz>
      )}

      {m.booking?.length > 0 && (
        <Tz nummer={n()} label="Technik" titel="Buchungssätze" art="technik">
          <p>Jede Buchung trägt ihren Buchungskreis. Ohne diese Angabe fehlt in der Klausur ein Punkt.</p>
          {m.booking.map((b, i) => <Buchungssatz key={i} satz={b} />)}
        </Tz>
      )}

      <Tz nummer={n()} label="Sichern" titel="Merksatz und Klausurfallen">
        {m.merksatz && <Notiz><p>{m.merksatz}</p></Notiz>}
        {m.exam?.length > 0 && (
          <Notiz art="exkurs" titel="Prüfungsrelevanz">
            <ul className="liste">
              {m.exam.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </Notiz>
        )}
        {m.traps?.length > 0 && (
          <Notiz art="falle">
            <ul>
              {m.traps.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </Notiz>
        )}
      </Tz>

      {m.sourceIds?.length > 0 && (
        <Tz nummer={n()} label="Quellen" titel="Fundstellen und Rechtsstand">
          <ul className="quellen">
            {m.sourceIds.map((id) => {
              const q = sourceCatalog[id];
              if (!q) return null;
              return (
                <li key={id}>
                  <a href={q.url} target="_blank" rel="noopener noreferrer">
                    <b>{q.title}</b>
                    <span>{q.publisher}</span>
                    <small>{q.note}</small>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="rechtsstand">{researchNote}</p>
        </Tz>
      )}

      <HausaufgabenZuModul
        modulId={m.id}
        module={alleModule}
        oeffnenHausaufgabe={oeffnenHausaufgabe}
      />

      <nav className="blaettern">
        {vorher ? (
          <button onClick={() => oeffnen(vorher.id)}>
            <small>← Modul {vorher.id}</small>
            <strong>{vorher.title}</strong>
          </button>
        ) : <span />}
        {nachher ? (
          <button onClick={() => oeffnen(nachher.id)}>
            <small>Modul {nachher.id} →</small>
            <strong>{nachher.title}</strong>
          </button>
        ) : <span />}
      </nav>
    </article>
  );
}

/* =========================================================== Schemaseite */
/* Die sechs großen Prüfungsschemata werden regulär hier gerendert. Das Attribut
   data-pruefungsschemata-portal bleibt als Stil-Anker erhalten — SchemaPostitEnhancer.css
   hängt sein Lesefreundlich-Layout daran auf. */
function Schemablock() {
  /* Als Zustand, nicht als Ref: SchemaPostitEnhancer braucht den Knoten als
     Abhängigkeit seines Effekts, und ref.current löst kein erneutes Rendern aus. */
  const [behaelter, setBehaelter] = useState(null);
  const [schema, setSchema] = useState(pruefungsschemata[0].id);
  return (
    <div data-pruefungsschemata-portal ref={setBehaelter}>
      <Pruefungsschemata aktiv={schema} onWechsel={setSchema} />
      <SchemaPostitEnhancer root={behaelter} signal={schema} />
    </div>
  );
}

function Schemaseite() {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Prüfungsschema</span>
          <h1>Von der Textziffer zur Gewinnauswirkung</h1>
          <p className="lead">
            Das Gerüst, das in jedem Einzelsachverhalt trägt – unabhängig davon, ob es um einen Lieferwagen,
            eine Rückstellung oder eine verdeckte Gewinnausschüttung geht.
          </p>
        </div>
      </div>

      <AbbaLeiste />
      <Schemablock />

      <section className="panel">
        <h2>Schritt für Schritt</h2>
        <ol className="schritte">
          <li><span><b>Ansatz I – Zurechnung.</b> Zivilrechtliches Eigentum feststellen, dann wirtschaftliches Eigentum prüfen (<Norm>§ 39 Abs. 2 Nr. 1 AO</Norm>). Ergebnissatz schreiben.</span></li>
          <li><span><b>Ansatz II – Zuordnung.</b> Anlage- oder Umlaufvermögen, abnutzbar oder nicht, notwendig oder gewillkürt (<Norm>§ 247 Abs. 2 HGB</Norm>).</span></li>
          <li><span><b>Bewertung I – Maßstab.</b> Fortgeführte AK/HK, Erfüllungsbetrag oder Teilwert?</span></li>
          <li><span><b>Bewertung II – Höhe.</b> AK/HK nach <Norm>§ 255 HGB</Norm> aufbauen, Vorsteuer nach <Norm>§ 9b Abs. 1 EStG</Norm> herausrechnen.</span></li>
          <li><span><b>Bewertung III – Fortführung.</b> AfA, Sonderabschreibung, Abzinsung, Wertberichtigung.</span></li>
          <li><span><b>Bewertung IV – Wertansatz.</b> Getrennt für Handels- und Steuerbilanz, mit Verzeichnis nach <Norm>§ 5 Abs. 1 S. 1 Hs. 2 EStG</Norm>.</span></li>
          <li><span><b>Technik.</b> Bilanzposten, Buchungssatz im richtigen Buchungskreis, Gewinnauswirkung beziffern.</span></li>
        </ol>
        <Notiz><p>Auch bei falscher Zurechnung werden die Folgeschritte bewertet, solange sie konsequent aus der eigenen Lösung entwickelt werden. Deshalb: nie eine Textziffer unbearbeitet lassen.</p></Notiz>
      </section>

      <section className="panel">
        <h2>Die drei Buchungskreise</h2>
        <Schaubild id="buchungskreise" />
      </section>

      <section className="panel">
        <h2>Maßgeblichkeit und ihre Durchbrechungen</h2>
        <Schaubild id="massgeblichkeit" />
      </section>

      <section className="panel">
        <h2>Von der Handelsbilanz zum Einkommen</h2>
        <Schaubild id="mehrWeniger" />
      </section>

      <section className="panel">
        <h2>Begriffe, die in jeder Lösung auftauchen</h2>
        <div className="register">
          {glossar.map((g) => (
            <div className="register__zeile" key={g.begriff}>
              <div>
                <strong>{g.begriff}</strong>
                <div><Norm>{g.norm}</Norm></div>
              </div>
              <div><span>{g.text}</span></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* =========================================================== Formelseite */
function Formelseite() {
  const gruppen = useMemo(() => {
    const map = new Map();
    for (const f of formeln) {
      if (!map.has(f.gruppe)) map.set(f.gruppe, []);
      map.get(f.gruppe).push(f);
    }
    return [...map.entries()];
  }, []);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Rechenwege</span>
          <h1>Formelsammlung mit belegten Beispielen</h1>
          <p className="lead">
            Alle Rechenschritte, die in der Klausur unter Zeitdruck sitzen müssen – jeweils mit Anwendungsbereich,
            Norm und einer durchgerechneten Zahl aus den Originalfällen.
          </p>
        </div>
        <span className="zaehler">{formeln.length} Rechenwege</span>
      </div>

      {gruppen.map(([gruppe, liste]) => (
        <section className="abschnitt" key={gruppe}>
          <h2>{gruppe}</h2>
          <div className="raster raster--2">
            {liste.map((f) => (
              <article className="formel" key={f.id}>
                <h3>{f.titel}</h3>
                <div className="formel__ausdruck">{f.ausdruck}</div>
                <p>{f.erklaerung}</p>
                <div className="formel__bsp">{f.beispiel}</div>
                <p style={{ marginTop: 10 }}><Norm>{f.norm}</Norm></p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="abschnitt">
        <h2>Zinsstaffel im Bild</h2>
        <Schaubild id="zinsstaffel" />
      </section>
    </>
  );
}

/* ========================================================== Registerseite */
function Registerseite({ oeffnen }) {
  const [filter, setFilter] = useState("");
  const register = useMemo(() => normenregister(), []);
  const q = filter.trim().toLowerCase();
  const gefiltert = register
    .map((g) => ({ ...g, eintraege: g.eintraege.filter((e) => !q || e.norm.toLowerCase().includes(q)) }))
    .filter((g) => g.eintraege.length > 0);
  const gesamt = register.reduce((s, g) => s + g.eintraege.length, 0);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Normenregister</span>
          <h1>Von der Vorschrift zum Modul</h1>
          <p className="lead">
            Das Register wird automatisch aus den Normenketten aller Module erzeugt. Wer in der Wiederholung
            über eine Vorschrift stolpert, findet hier sofort den passenden Sachverhalt.
          </p>
        </div>
        <span className="zaehler">{gesamt} Fundstellen</span>
      </div>

      <div className="panel" style={{ marginBottom: 14 }}>
        <label>
          <span className="kicker">Norm filtern</span>
          <input
            className="rechner-input"
            style={{ width: "100%", height: 42, padding: "0 12px", border: "1px solid var(--linie)", background: "var(--feld)", fontFamily: "var(--mono)", marginTop: 8 }}
            value={filter}
            placeholder="z. B. 255 oder 7g oder R 5.7"
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
      </div>

      {gefiltert.map((g) => (
        <section key={g.gesetz}>
          <div className="gesetzgruppe">
            <h2>{g.gesetz}</h2>
            <span>{g.eintraege.length} Vorschriften</span>
          </div>
          <div className="register">
            {g.eintraege.map((e) => (
              <div className="register__zeile" key={e.norm}>
                <div><Norm>{e.norm}</Norm></div>
                <div>
                  {e.treffer.map((t) => (
                    <button className="register__treffer" key={t.id} onClick={() => oeffnen(t.id)}>
                      {t.id} · {t.title}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      {gefiltert.length === 0 && <p className="panel">Keine Vorschrift gefunden.</p>}
    </>
  );
}

/* ========================================================== Trainingsseite */
function Trainingsseite() {
  const [modus, setModus] = useState("quiz");
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Training</span>
          <h1>Abfragen, wiederholen, Zeit rechnen</h1>
          <p className="lead">
            Kurze Einheiten für die Wiederholung: Multiple Choice zu den Kernnormen, Karteikarten für
            Definitionen und ein Zeitrechner für die Klausurplanung. Jeder Durchlauf wird neu gemischt,
            damit nicht die Reihenfolge mitgelernt wird.
          </p>
        </div>
      </div>

      <div className="filter">
        <button aria-pressed={modus === "quiz"} onClick={() => setModus("quiz")}>Quiz</button>
        <button aria-pressed={modus === "karten"} onClick={() => setModus("karten")}>Karteikarten</button>
      </div>

      <div className="training">
        {modus === "quiz" ? <Quiz /> : <Karteikartenstapel />}
        <div>
          <section className="panel rechner">
            <span className="kicker">Zeitrechner</span>
            <h2 style={{ margin: "6px 0 12px" }}>Punkte in Minuten</h2>
            <Zeitrechner />
          </section>
          <section className="panel">
            <span className="kicker">Klausurtakt</span>
            <Schaubild id="klausurzeit" />
          </section>
        </div>
      </div>
    </>
  );
}

/* Fisher-Yates. Die Kopie bleibt stabil, solange der Durchlauf läuft. */
function mischen(liste) {
  const kopie = [...liste];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

const trainingsbereiche = [
  { id: "alle", label: "Alle" },
  { id: "EU", label: "Einzelunternehmen" },
  { id: "PersG", label: "Personengesellschaft" },
  { id: "KapG", label: "Kapitalgesellschaft" },
  { id: "Technik", label: "Technik" },
];

/* ================================================================== Quiz */
function Quiz() {
  const [bereich, setBereich] = useState("alle");
  const [nurFehler, setNurFehler] = useState(false);
  const [fehler, setFehler] = useState(() => {
    const roh = laden("stb-quiz-fehler", []);
    return Array.isArray(roh) ? roh : [];
  });
  const [durchlauf, setDurchlauf] = useState(0);
  const [nr, setNr] = useState(0);
  const [gewaehlt, setGewaehlt] = useState(null);
  const [punkte, setPunkte] = useState(0);
  const [fertig, setFertig] = useState(false);

  useEffect(() => {
    sichern("stb-quiz-fehler", fehler);
  }, [fehler]);

  const fehlerMenge = useMemo(() => new Set(fehler), [fehler]);

  /* Die Auswahl wird pro Durchlauf einmal gemischt. `durchlauf` erzwingt die
     Neuberechnung, wenn erneut gestartet oder der Filter gewechselt wird. */
  const fragen = useMemo(() => {
    const auswahl = quizfragen.filter(
      ([frage, , , , b]) => (bereich === "alle" || b === bereich) && (!nurFehler || fehlerMenge.has(frage))
    );
    return mischen(auswahl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bereich, nurFehler, durchlauf]);

  const neuStarten = (weitereAenderung) => {
    weitereAenderung?.();
    setDurchlauf((d) => d + 1);
    setNr(0);
    setGewaehlt(null);
    setPunkte(0);
    setFertig(false);
  };

  const steuerung = (
    <>
      <div className="filter filter--klein">
        {trainingsbereiche.map((b) => (
          <button
            key={b.id}
            aria-pressed={bereich === b.id}
            onClick={() => neuStarten(() => setBereich(b.id))}
          >
            {b.label}
          </button>
        ))}
      </div>
      <div className="training__schalter">
        <button
          className="btn btn--klein btn--linie"
          aria-pressed={nurFehler}
          disabled={fehler.length === 0}
          title={fehler.length === 0 ? "Noch keine falsch beantworteten Fragen gespeichert" : undefined}
          onClick={() => neuStarten(() => setNurFehler((w) => !w))}
        >
          Nur Fehler wiederholen ({fehler.length})
        </button>
        {fehler.length > 0 && (
          <button className="training__loeschen" onClick={() => neuStarten(() => { setFehler([]); setNurFehler(false); })}>
            Fehlerspeicher leeren
          </button>
        )}
      </div>
    </>
  );

  if (fragen.length === 0) {
    return (
      <section className="panel quiz">
        {steuerung}
        <div className="mitte">
          <h2>Keine Fragen</h2>
          <p>
            {nurFehler
              ? "In diesem Bereich sind keine falsch beantworteten Fragen gespeichert."
              : "Für diesen Bereich sind noch keine Fragen hinterlegt."}
          </p>
        </div>
      </section>
    );
  }

  if (fertig) {
    return (
      <section className="panel quiz">
        {steuerung}
        <div className="mitte">
          <h2>{punkte} von {fragen.length} richtig</h2>
          <p>
            {punkte === fragen.length
              ? "Vollständig. Die Kernnormen sitzen."
              : punkte >= fragen.length * 0.7
                ? "Solide Basis. Die verbliebenen Lücken gezielt über die Module schließen."
                : "Noch Luft nach oben – am besten die Module zu den falsch beantworteten Themen erneut durchgehen."}
          </p>
          {fehler.length > 0 && <p className="quiz__hinweis">{fehler.length} Fragen im Fehlerspeicher.</p>}
          <button className="btn" style={{ marginTop: 12 }} onClick={() => neuStarten()}>Noch einmal</button>
        </div>
      </section>
    );
  }

  const [frage, optionen, richtig, erklaerung] = fragen[nr];
  const antworten = (i) => {
    setGewaehlt(i);
    if (i === richtig) {
      setPunkte((p) => p + 1);
      setFehler((alt) => alt.filter((f) => f !== frage));
    } else {
      setFehler((alt) => (alt.includes(frage) ? alt : [...alt, frage]));
    }
  };
  const weiter = () => {
    if (nr + 1 >= fragen.length) setFertig(true);
    else { setNr(nr + 1); setGewaehlt(null); }
  };

  return (
    <section className="panel quiz">
      {steuerung}
      <div className="quiz__meta">
        <span>Frage {nr + 1} von {fragen.length}{nurFehler ? " · Fehlerwiederholung" : ""}</span>
        <span>{punkte} richtig</span>
      </div>
      <h2>{frage}</h2>
      <div className="optionen">
        {optionen.map((o, i) => {
          let klasse = "";
          if (gewaehlt !== null) {
            if (i === richtig) klasse = "richtig";
            else if (i === gewaehlt) klasse = "falsch";
          }
          return (
            <button key={i} className={klasse} disabled={gewaehlt !== null} onClick={() => antworten(i)}>
              {o}
            </button>
          );
        })}
      </div>
      {gewaehlt !== null && (
        <div className="antwort">
          <b>{gewaehlt === richtig ? "Richtig." : "Nicht ganz."}</b>
          <p>{erklaerung}</p>
          <button className="btn btn--klein" style={{ marginTop: 10 }} onClick={weiter}>
            {nr + 1 >= fragen.length ? "Auswertung" : "Nächste Frage"}
          </button>
        </div>
      )}
    </section>
  );
}

/* ========================================================== Karteikarten */
function Karteikartenstapel() {
  const [gruppe, setGruppe] = useState("alle");
  const [stand, setStand] = useState(() => {
    const roh = laden("stb-karten-stand", {});
    return roh && typeof roh === "object" && !Array.isArray(roh) ? roh : {};
  });
  const [durchlauf, setDurchlauf] = useState(0);
  const [warteschlange, setWarteschlange] = useState([]);
  const [offen, setOffen] = useState(false);
  const [erledigt, setErledigt] = useState(0);

  useEffect(() => {
    sichern("stb-karten-stand", stand);
  }, [stand]);

  const gruppen = useMemo(
    () => ["alle", ...[...new Set(karteikarten.map((k) => k.gruppe))].sort((a, b) => a.localeCompare(b, "de"))],
    []
  );

  const auswahl = useMemo(
    () => karteikarten.filter((k) => gruppe === "alle" || k.gruppe === gruppe),
    [gruppe]
  );

  /* Der Stapel wird pro Durchlauf gemischt; „saß nicht“ hängt die Karte hinten
     wieder an, „saß“ nimmt sie aus dem Durchlauf. */
  useEffect(() => {
    setWarteschlange(mischen(auswahl));
    setOffen(false);
    setErledigt(0);
  }, [auswahl, durchlauf]);

  const karte = warteschlange[0];
  const gesamt = auswahl.length;

  const bewerten = (sicher) => {
    if (!karte) return;
    setStand((alt) => ({ ...alt, [karte.frage]: sicher ? "sicher" : "unsicher" }));
    setOffen(false);
    setWarteschlange((alt) => (sicher ? alt.slice(1) : [...alt.slice(1), alt[0]]));
    if (sicher) setErledigt((z) => z + 1);
  };

  const steuerung = (
    <div className="filter filter--klein">
      {gruppen.map((g) => (
        <button key={g} aria-pressed={gruppe === g} onClick={() => { setGruppe(g); setDurchlauf((d) => d + 1); }}>
          {g === "alle" ? "Alle Gruppen" : g}
        </button>
      ))}
    </div>
  );

  if (!karte) {
    const sicher = auswahl.filter((k) => stand[k.frage] === "sicher").length;
    return (
      <section className="panel">
        {steuerung}
        <div className="mitte">
          <h2>Stapel durchgearbeitet</h2>
          <p>{gesamt} Karten bearbeitet, {sicher} davon als „saß“ markiert.</p>
          <button className="btn" style={{ marginTop: 12 }} onClick={() => setDurchlauf((d) => d + 1)}>
            Neuer Durchlauf
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="panel">
      {steuerung}
      <div className="quiz__meta">
        <span>{erledigt} von {gesamt} sitzen · {warteschlange.length} im Stapel</span>
        <span>
          {karte.gruppe}
          {stand[karte.frage] && ` · zuletzt ${stand[karte.frage] === "sicher" ? "saß" : "saß nicht"}`}
        </span>
      </div>
      <div className="karte">
        <p className="karte__frage">{karte.frage}</p>
        {offen && <div className="karte__antwort">{karte.antwort}</div>}
      </div>
      <div className="karte__steuerung">
        {offen ? (
          <>
            <button className="btn" onClick={() => bewerten(true)}>saß</button>
            <button className="btn btn--linie" onClick={() => bewerten(false)}>saß nicht</button>
          </>
        ) : (
          <button className="btn" onClick={() => setOffen(true)}>Antwort zeigen</button>
        )}
        <button className="btn btn--linie" onClick={() => { setOffen(false); setWarteschlange((a) => [...a.slice(1), a[0]]); }}>
          zurückstellen →
        </button>
      </div>
    </section>
  );
}

function Zeitrechner() {
  const [punkte, setPunkte] = useState(25);
  const minuten = Math.round(punkte * 3.6);
  const std = Math.floor(minuten / 60);
  const rest = minuten % 60;
  return (
    <div>
      <input
        type="number"
        min="1"
        max="100"
        value={punkte}
        aria-label="Punkte des Aufgabenteils"
        onChange={(e) => setPunkte(Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
      />
      <strong>{std > 0 ? `${std}:${String(rest).padStart(2, "0")} Std.` : `${minuten} Min.`}</strong>
      <p>3,6 Minuten je Punkt – 360 Minuten Bearbeitungszeit für 100 Punkte. Rund 30 Minuten Reserve für Lesen, Gliederung und Endkontrolle abziehen.</p>
    </div>
  );
}

/* ============================================================== Planseite */
function Planseite({ fertig, umschalten }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Lernplan</span>
          <h1>{wochenplan.length} Wochen bis zur Klausursimulation</h1>
          <p className="lead">
            Ein Vorschlag, der die Module in der Reihenfolge bündelt, in der sie aufeinander aufbauen.
            Die letzte Woche gehört einer vollständigen Originalklausur unter Zeitbedingungen.
            Der Plan verweist auf konkrete Modul- und Fallnummern des heutigen Bestands.
          </p>
        </div>
        <span className="zaehler">{fertig.length} / {wochenplan.length} Wochen</span>
      </div>

      <div className="modules">
        {wochenplan.map((w, i) => (
          <label className={`woche${fertig.includes(i) ? " woche--fertig" : ""}`} key={i}>
            <input type="checkbox" checked={fertig.includes(i)} onChange={() => umschalten(i)} />
            <b>W {i + 1}</b>
            <div>
              <h3>{w.titel}</h3>
              <p>{w.inhalt}</p>
            </div>
          </label>
        ))}
      </div>
    </>
  );
}
