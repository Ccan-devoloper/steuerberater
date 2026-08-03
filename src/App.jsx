import React, { useEffect, useMemo, useState } from "react";
import { module as alleModule, bereiche, bereichName, normenregister } from "./data/module";
import { sourceCatalog, researchNote } from "./data/sources";
import { formeln, karteikarten, quizfragen, wochenplan, glossar } from "./data/lernstoff";
import Schaubild from "./components/Schaubild";
import { Norm, Normkette, Notiz, Buchungssatz, Bilanzspiegel } from "./components/Bausteine";
import {
  IconCockpit, IconModule, IconSchema, IconFormel, IconRegister, IconTraining,
  IconPlan, IconSuche, IconSonne, IconMond, IconHaken,
} from "./components/Icons";

/* -------------------------------------------------------------- Speicher */
const laden = (schluessel, standard) => {
  try {
    const roh = localStorage.getItem(schluessel);
    return roh ? JSON.parse(roh) : standard;
  } catch {
    return standard;
  }
};
const sichern = (schluessel, wert) => {
  try {
    localStorage.setItem(schluessel, JSON.stringify(wert));
  } catch {
    /* Speicher nicht verfügbar – Fortschritt gilt dann nur für diese Sitzung. */
  }
};

const ansichten = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "module", label: "Lernmodule", Icon: IconModule },
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
export default function App() {
  const [ansicht, setAnsicht] = useState("cockpit");
  const [modulId, setModulId] = useState(null);
  const [suche, setSuche] = useState("");
  const [bereich, setBereich] = useState("alle");
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  const [erledigt, setErledigt] = useState(() => laden("stb-erledigt", []));
  const [planFertig, setPlanFertig] = useState(() => laden("stb-plan", []));

  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);
  useEffect(() => sichern("stb-erledigt", erledigt), [erledigt]);
  useEffect(() => sichern("stb-plan", planFertig), [planFertig]);
  useEffect(() => window.scrollTo({ top: 0, behavior: "auto" }), [ansicht, modulId]);

  const umschalten = (id) =>
    setErledigt((alt) => (alt.includes(id) ? alt.filter((x) => x !== id) : [...alt, id]));

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return alleModule.filter((m) => {
      if (bereich !== "alle" && m.area !== bereich) return false;
      if (!q) return true;
      const heu = [m.title, m.law, m.merksatz, (m.normchain || []).join(" "), (m.intro || []).join(" ")]
        .join(" ")
        .toLowerCase();
      return heu.includes(q);
    });
  }, [suche, bereich]);

  const modul = modulId ? alleModule.find((m) => m.id === modulId) : null;
  const quote = Math.round((erledigt.length / alleModule.length) * 100);

  const oeffnen = (id) => {
    setModulId(id);
    setAnsicht("module");
  };

  return (
    <div>
      <header className="topbar">
        <button className="brand" onClick={() => { setAnsicht("cockpit"); setModulId(null); }}>
          <span className="brand__mark">B</span>
          <span className="brand__text">
            <strong>Examenscampus Bilanzen</strong>
            <span>Klausur 3 · Buchführung und Bilanzwesen</span>
          </span>
        </button>
        <span className="topbar__spacer" />
        <label className="search">
          <IconSuche />
          <input
            type="search"
            value={suche}
            placeholder="Modul, Norm oder Stichwort suchen"
            aria-label="Module durchsuchen"
            onChange={(e) => {
              setSuche(e.target.value);
              setAnsicht("module");
              setModulId(null);
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
        <button className="klausur" disabled>
          <b>K1</b>
          <span><strong>Verfahrensrecht</strong> <small>und andere Steuerarten</small></span>
        </button>
        <button className="klausur" disabled>
          <b>K2</b>
          <span><strong>Ertragsteuerrecht</strong> <small>ESt · KSt · GewSt</small></span>
        </button>
        <button className="klausur" aria-current="true">
          <b>K3</b>
          <span><strong>Buchführung und Bilanzwesen</strong> <small>diese Plattform</small></span>
        </button>
      </nav>

      <aside className="rail">
        <nav className="rail__nav" aria-label="Hauptnavigation">
          {ansichten.map(({ id, label, Icon }) => (
            <button
              key={id}
              className="rail__link"
              aria-current={ansicht === id ? "true" : undefined}
              onClick={() => { setAnsicht(id); setModulId(null); }}
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
        </div>
      </aside>

      <main className="page">
        {ansicht === "cockpit" && <Cockpit quote={quote} erledigt={erledigt} oeffnen={oeffnen} setAnsicht={setAnsicht} setBereich={setBereich} />}
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
            zurueck={() => setModulId(null)}
            oeffnen={oeffnen}
          />
        )}
        {ansicht === "schema" && <Schemaseite />}
        {ansicht === "formeln" && <Formelseite />}
        {ansicht === "register" && <Registerseite oeffnen={oeffnen} />}
        {ansicht === "training" && <Trainingsseite />}
        {ansicht === "plan" && <Planseite fertig={planFertig} setFertig={setPlanFertig} />}
      </main>
    </div>
  );
}

/* ================================================================= Cockpit */
function Cockpit({ quote, erledigt, oeffnen, setAnsicht, setBereich }) {
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
            <button className="btn btn--linie" onClick={() => setAnsicht("schema")}>Prüfungsschema ansehen</button>
          </div>
        </section>
        <section className="panel fortschritt">
          <div className="ring" style={{ "--p": `${quote}%` }}>
            <b>{quote}%</b>
          </div>
          <h3>Bearbeitungsstand</h3>
          <p>{erledigt.length} von {alleModule.length} Modulen abgehakt</p>
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
          {["EU", "PersG", "KapG", "Technik", "Fall"].map((id) => (
            <article className="bereich" key={id}>
              <b>{zahl(id)} Module</b>
              <h3>{bereichName[id]}</h3>
              <p>{bereichBeschreibung[id]}</p>
              <button onClick={() => { setBereich(id); setAnsicht("module"); }}>Module öffnen →</button>
            </article>
          ))}
          <article className="bereich">
            <b>{formeln.length} Rechenwege</b>
            <h3>Formelsammlung</h3>
            <p>Zinsstaffel, Abzinsung, PWB, Sonder-AfA und Zeitbudget mit belegten Beispielrechnungen.</p>
            <button onClick={() => setAnsicht("formeln")}>Rechenwege öffnen →</button>
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

function Modulseite({ modul: m, erledigt, umschalten, zurueck, oeffnen }) {
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
            Definitionen und ein Zeitrechner für die Klausurplanung.
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

function Quiz() {
  const [nr, setNr] = useState(0);
  const [gewaehlt, setGewaehlt] = useState(null);
  const [punkte, setPunkte] = useState(0);
  const [fertig, setFertig] = useState(false);

  if (fertig) {
    return (
      <section className="panel quiz">
        <div className="mitte">
          <h2>{punkte} von {quizfragen.length} richtig</h2>
          <p>
            {punkte === quizfragen.length
              ? "Vollständig. Die Kernnormen sitzen."
              : punkte >= quizfragen.length * 0.7
                ? "Solide Basis. Die verbliebenen Lücken gezielt über die Module schließen."
                : "Noch Luft nach oben – am besten die Module zu den falsch beantworteten Themen erneut durchgehen."}
          </p>
          <button className="btn" style={{ marginTop: 12 }} onClick={() => { setNr(0); setPunkte(0); setGewaehlt(null); setFertig(false); }}>
            Noch einmal
          </button>
        </div>
      </section>
    );
  }

  const [frage, optionen, richtig, erklaerung] = quizfragen[nr];
  const weiter = () => {
    if (nr + 1 >= quizfragen.length) setFertig(true);
    else { setNr(nr + 1); setGewaehlt(null); }
  };

  return (
    <section className="panel quiz">
      <div className="quiz__meta">
        <span>Frage {nr + 1} von {quizfragen.length}</span>
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
            <button
              key={i}
              className={klasse}
              disabled={gewaehlt !== null}
              onClick={() => { setGewaehlt(i); if (i === richtig) setPunkte(punkte + 1); }}
            >
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
            {nr + 1 >= quizfragen.length ? "Auswertung" : "Nächste Frage"}
          </button>
        </div>
      )}
    </section>
  );
}

function Karteikartenstapel() {
  const [nr, setNr] = useState(0);
  const [offen, setOffen] = useState(false);
  const karte = karteikarten[nr];
  const weiter = (schritt) => {
    setOffen(false);
    setNr((alt) => (alt + schritt + karteikarten.length) % karteikarten.length);
  };
  return (
    <section className="panel">
      <div className="quiz__meta">
        <span>Karte {nr + 1} von {karteikarten.length}</span>
        <span>{karte.gruppe}</span>
      </div>
      <div className="karte">
        <p className="karte__frage">{karte.frage}</p>
        {offen && <div className="karte__antwort">{karte.antwort}</div>}
      </div>
      <div className="karte__steuerung">
        <button className="btn" onClick={() => setOffen((o) => !o)}>{offen ? "Antwort verbergen" : "Antwort zeigen"}</button>
        <button className="btn btn--linie" onClick={() => weiter(-1)}>← zurück</button>
        <button className="btn btn--linie" onClick={() => weiter(1)}>weiter →</button>
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
function Planseite({ fertig, setFertig }) {
  const umschalten = (i) =>
    setFertig((alt) => (alt.includes(i) ? alt.filter((x) => x !== i) : [...alt, i]));
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Lernplan</span>
          <h1>Acht Wochen bis zur Klausursimulation</h1>
          <p className="lead">
            Ein Vorschlag, der die Module in der Reihenfolge bündelt, in der sie aufeinander aufbauen.
            Die letzte Woche gehört einer vollständigen Originalklausur unter Zeitbedingungen.
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
