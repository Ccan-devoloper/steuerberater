import React, { useEffect, useMemo, useRef, useState } from "react";
import { kstBereiche, kstBereichName, kstModule, kstQuellen, kstSchemata } from "../data/kst-module";
import { kstFaelle } from "../data/kst-faelle";
import { kstKarteikarten, kstQuizfragen } from "../data/kst-lernstoff";
import { Normkette, Notiz } from "./Bausteine";
import { laden, sichern, useFortschritt, anteil } from "../lib/fortschritt";
import { erfasseSeitenzustand, stelleSeitenzustandWiederHer } from "../lib/campus-navigation";
import {
  IconCockpit, IconModule, IconSchema, IconRegister, IconTraining,
  IconFaelle, IconSuche, IconSonne, IconMond, IconHaken,
} from "./Icons";
import "./kst.css";

const modulIds = new Set(kstModule.map((m) => m.id));

const ansichten = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "module", label: "Lernmodule", Icon: IconModule },
  { id: "faelle", label: "Fälle", Icon: IconFaelle },
  { id: "schema", label: "Prüfungsschemata", Icon: IconSchema },
  { id: "training", label: "Training", Icon: IconTraining },
  { id: "quellen", label: "Quellenstand", Icon: IconRegister },
];

export default function KstCampus({ onKlausurwechsel }) {
  const [ansicht, setAnsicht] = useState("cockpit");
  const [modulId, setModulId] = useState(null);
  const [suche, setSuche] = useState("");
  const [bereich, setBereich] = useState("alle");
  const [navVerlauf, setNavVerlauf] = useState([
    { ansicht: "cockpit", modulId: null, bereich: "alle", scrollY: 0, offeneDetails: [] },
  ]);
  const [navIndex, setNavIndex] = useState(0);
  const wiederherstellenRef = useRef(null);
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  const fortschritt = useFortschritt("stb-kst-erledigt", modulIds);
  const erledigt = fortschritt.werte;

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
    return kstModule.filter((m) => {
      if (bereich !== "alle" && m.area !== bereich) return false;
      if (!q) return true;
      const text = [
        m.title,
        m.law,
        m.difficulty,
        ...(m.intro || []),
        ...(m.goals || []),
        ...(m.scheme || []),
        ...(m.normchain || []),
        m.merksatz,
      ].join(" ").toLowerCase();
      return text.includes(q);
    });
  }, [bereich, suche]);

  const modul = modulId ? kstModule.find((m) => m.id === modulId) : null;
  const quote = anteil(erledigt.length, kstModule.length);

  const ort = () => ({ ansicht, modulId, bereich, ...erfasseSeitenzustand() });

  const anwenden = (ziel, wiederherstellen = false) => {
    wiederherstellenRef.current = wiederherstellen ? ziel : null;
    setAnsicht(ziel.ansicht);
    setModulId(ziel.modulId ?? null);
    setBereich(ziel.bereich ?? bereich);
  };

  const navigiere = (ziel) => {
    const naechster = {
      ansicht: ziel.ansicht,
      modulId: ziel.modulId ?? null,
      bereich: ziel.bereich ?? bereich,
      scrollY: 0,
      offeneDetails: [],
    };
    if (naechster.ansicht === ansicht && naechster.modulId === modulId && naechster.bereich === bereich) return;
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
  }, [navIndex, navVerlauf, ansicht, modulId, bereich]);

  const ansichtOeffnen = (ziel) => navigiere({ ansicht: ziel });
  const bereichOeffnen = (ziel) => navigiere({ ansicht: "module", bereich: ziel });
  const oeffnen = (id) => navigiere({ ansicht: "module", modulId: id });

  return (
    <div className="kst-campus">
      <header className="topbar">
        <button className="brand" onClick={() => ansichtOeffnen("cockpit")}>
          <span className="brand__mark">K</span>
          <span className="brand__text">
            <strong>Examenscampus Körperschaftsteuer</strong>
            <span>Klausur 2 · Ertragsteuerrecht · KSt</span>
          </span>
        </button>
        <div role="group" aria-label="Navigation in Klausur 2" style={{ display: "flex", gap: 4 }}>
          <button type="button" className="iconbtn" onClick={navZurueck} disabled={navIndex <= 0} aria-label="Zurück zur vorherigen Seite" title="Zurück (Alt + Pfeil links)">←</button>
          <button type="button" className="iconbtn" onClick={navVor} disabled={navIndex >= navVerlauf.length - 1} aria-label="Vor zur nächsten Seite" title="Vor (Alt + Pfeil rechts)">→</button>
        </div>
        <span className="topbar__spacer" />
        <label className="search">
          <IconSuche />
          <input
            type="search"
            value={suche}
            placeholder="KSt-Modul, Norm oder Stichwort suchen"
            aria-label="Körperschaftsteuer-Module durchsuchen"
            onChange={(e) => {
              setSuche(e.target.value);
              if (ansicht !== "module" || modulId !== null) ansichtOeffnen("module");
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
        <button className="klausur" aria-current="true" onClick={() => ansichtOeffnen("cockpit")}>
          <b>K2</b>
          <span><strong>Ertragsteuerrecht</strong> <small>KSt verfügbar · ESt/GewSt folgen</small></span>
        </button>
        <button className="klausur" onClick={() => onKlausurwechsel("k3")}>
          <b>K3</b>
          <span><strong>Buchführung und Bilanzwesen</strong> <small>zur Plattform wechseln</small></span>
        </button>
      </nav>

      <aside className="rail">
        <nav className="rail__nav" aria-label="KSt-Hauptnavigation">
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
          <b>KSt-Fortschritt</b>
          <strong>{erledigt.length} / {kstModule.length}</strong>
          <p>Module als bearbeitet markiert</p>
          {erledigt.length > 0 && (
            <button
              className="rail__box-reset"
              onClick={() => {
                if (window.confirm("Bearbeitungsstand der KSt-Module zurücksetzen?")) fortschritt.zuruecksetzen();
              }}
            >
              zurücksetzen
            </button>
          )}
        </div>
      </aside>

      <main className="page">
        {ansicht === "cockpit" && (
          <KstCockpit
            quote={quote}
            erledigt={erledigt}
            oeffnen={oeffnen}
            ansichtOeffnen={ansichtOeffnen}
            bereichOeffnen={bereichOeffnen}
          />
        )}
        {ansicht === "module" && !modul && (
          <KstModulliste
            liste={gefiltert}
            bereich={bereich}
            setBereich={setBereich}
            suche={suche}
            erledigt={erledigt}
            umschalten={fortschritt.umschalten}
            oeffnen={oeffnen}
          />
        )}
        {ansicht === "module" && modul && (
          <KstModulseite
            modul={modul}
            erledigt={erledigt}
            umschalten={fortschritt.umschalten}
            zurueck={() => ansichtOeffnen("module")}
            oeffnen={oeffnen}
          />
        )}
        {ansicht === "faelle" && <KstFallseite oeffnen={oeffnen} />}
        {ansicht === "schema" && <KstSchemaseite oeffnen={oeffnen} />}
        {ansicht === "training" && <KstTraining />}
        {ansicht === "quellen" && <KstQuellenseite />}
      </main>
    </div>
  );
}

function KstCockpit({ quote, erledigt, oeffnen, ansichtOeffnen, bereichOeffnen }) {
  const naechstes = kstModule.find((m) => !erledigt.includes(m.id)) || kstModule[0];
  const fachbereiche = kstBereiche.filter((b) => b.id !== "alle");

  return (
    <>
      <div className="cockpit">
        <section className="these kst-these">
          <span className="kicker">Klausur 2 · KSt-Teil · Ausbaustufe 1</span>
          <h2>Immer zwei Ebenen: <em>Gesellschaft und Gesellschafter.</em></h2>
          <p>
            Die erste KSt-Ausbaustufe übernimmt die hochgeladenen Schemata, Mitschriften und den vollständigen
            Gründungsfall in die Struktur der Klausur-3-Plattform: {kstModule.length} Module, {kstFaelle.length} Fälle,
            feste Normketten, Prüfungsschemata und Training. Weitere Unterlagen lassen sich datengetrieben ergänzen.
          </p>
          <div className="these__aktionen">
            <button className="btn" onClick={() => oeffnen(naechstes.id)}>Weiterlernen</button>
            <button className="btn btn--linie" onClick={() => ansichtOeffnen("schema")}>KSt-Schemata öffnen</button>
          </div>
        </section>
        <section className="panel fortschritt">
          <div className="ring" style={{ "--p": `${quote}%` }}><b>{quote}%</b></div>
          <h3>Bearbeitungsstand</h3>
          <p>{erledigt.length} von {kstModule.length} Modulen abgehakt</p>
        </section>
      </div>

      <section className="abschnitt">
        <span className="kicker">Weiter im KSt-Stoff</span>
        <button className="weiter" onClick={() => oeffnen(naechstes.id)}>
          <span className="kicker">{kstBereichName[naechstes.area]} · Modul {naechstes.id}</span>
          <h3>{naechstes.title}</h3>
          <p>{naechstes.intro[0]}</p>
          <span className="norm">{naechstes.law}</span>
        </button>
      </section>

      <section className="abschnitt">
        <h2>Aufbau des KSt-Teils</h2>
        <div className="raster raster--3">
          {fachbereiche.map((b) => {
            const gesamt = kstModule.filter((m) => m.area === b.id).length;
            const fertig = kstModule.filter((m) => m.area === b.id && erledigt.includes(m.id)).length;
            return (
              <article className="bereich" key={b.id}>
                <b>{gesamt} Module</b>
                <h3>{b.label}</h3>
                <p>{bereichText[b.id]}</p>
                <div className="bereich__balken" role="img" aria-label={`${fertig} von ${gesamt} bearbeitet`}>
                  <span style={{ width: `${anteil(fertig, gesamt)}%` }} />
                </div>
                <small className="bereich__stand">{fertig} von {gesamt} bearbeitet</small>
                <button onClick={() => bereichOeffnen(b.id)}>Module öffnen →</button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="abschnitt">
        <h2>Das KSt-Grundgerüst</h2>
        <KstPruefpfad />
      </section>
    </>
  );
}

const bereichText = {
  Grundlage: "Steuerpflicht, Gründungsphasen und Beginn des KSt-Zeitraums.",
  Einkommen: "Vom Steuerbilanzgewinn über IDB und ADB zum zvE.",
  Gesellschafter: "vGA, vE, Korrespondenz, § 27 und Zinsvorteile auf zwei Ebenen.",
  Beteiligung: "Dividenden, Veräußerungsgewinne, Verluste und die 5-%-Pauschale.",
  Verlust: "Schädlicher Beteiligungserwerb, Rettungsklauseln und § 8d.",
  Sonderfall: "Organschaft und Vereinsbesteuerung als eigene Prüfungspfade.",
  Fall: "Der vollständige Gründungsfall mit der Schlussrechnung 5.150 €.",
};

function KstPruefpfad() {
  const felder = [
    { nummer: "1", titel: "Steuerpflicht", text: "Wer ist Steuersubjekt, ab wann und mit welchem Umfang?" },
    { nummer: "2", titel: "IDB", text: "Bilanzielle Behandlung und zutreffender Steuerbilanzgewinn." },
    { nummer: "3", titel: "ADB", text: "vGA, vE, Abzugsverbote, § 8b und sonstige Korrekturen." },
    { nummer: "4", titel: "zvE", text: "Verluste/Freibeträge, Tarif und Ergebnissatz." },
  ];
  return (
    <div className="kst-pruefpfad">
      {felder.map((f) => (
        <div className="kst-pruefpfad__stufe" key={f.nummer}>
          <b>{f.nummer}</b>
          <div><h3>{f.titel}</h3><p>{f.text}</p></div>
        </div>
      ))}
    </div>
  );
}

function KstModulliste({ liste, bereich, setBereich, suche, erledigt, umschalten, oeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">KSt-Lernmodule</span>
          <h1>{suche ? `Treffer für „${suche}“` : kstBereiche.find((b) => b.id === bereich)?.label}</h1>
          <p className="lead">Jedes Modul folgt derselben Reihenfolge: Einordnung, Lernziele, Prüfungsschema, Normenkette, Fall, Merksatz, Klausurfallen und Quellenbezug.</p>
        </div>
        <span className="zaehler">{liste.length} Module</span>
      </div>

      <div className="filter">
        {kstBereiche.map((b) => (
          <button key={b.id} aria-pressed={bereich === b.id} onClick={() => setBereich(b.id)}>{b.label}</button>
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
                  <span>{kstBereichName[m.area]}</span>
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
        {liste.length === 0 && <p className="panel">Keine Treffer. Filter zurücksetzen oder eine andere Schreibweise verwenden.</p>}
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

function KstModulseite({ modul: m, erledigt, umschalten, zurueck, oeffnen }) {
  const fertig = erledigt.includes(m.id);
  const index = kstModule.findIndex((x) => x.id === m.id);
  const vorher = kstModule[index - 1];
  const nachher = kstModule[index + 1];
  let tz = 0;
  const n = () => ++tz;

  return (
    <article className="lesson">
      <button className="zurueck" onClick={zurueck}>← Zurück zur KSt-Modulübersicht</button>
      <header className="lesson__kopf">
        <div>
          <span className="kicker">{kstBereichName[m.area]} · Modul {m.id}</span>
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

      <Tz nummer={n()} label="Einordnung" titel="Worum es geht">
        {m.intro.map((p, i) => <p key={i}>{p}</p>)}
      </Tz>

      <Tz nummer={n()} label="Lernziele" titel="Das können Sie danach">
        <ul className="liste liste--haken">{m.goals.map((g, i) => <li key={i}>{g}</li>)}</ul>
      </Tz>

      <Tz nummer={n()} label="Schema" titel="Prüfungsreihenfolge" art="ansatz">
        <ol className="schritte">{m.scheme.map((s, i) => <li key={i}><span>{s}</span></li>)}</ol>
      </Tz>

      <Tz nummer={n()} label="Normen" titel="Normenkette für die Klausur">
        <p>Die Reihenfolge folgt den hochgeladenen Schemata und Mitschriften. Nach jeder Norm einen knappen Ergebnissatz formulieren.</p>
        <Normkette normen={m.normchain} />
      </Tz>

      {m.example && (
        <Tz nummer={n()} label="Fall" titel={m.example.title} art="bewertung">
          <div className="fall">
            <div className="fall__block fall__sachverhalt"><b>Sachverhalt</b><p>{m.example.facts}</p></div>
            <div className="fall__block"><b>Lösung</b><ol>{m.example.solution.map((s, i) => <li key={i}>{s}</li>)}</ol></div>
            <div className="fall__block fall__ergebnis"><b>Ergebnis</b><p>{m.example.result}</p></div>
          </div>
        </Tz>
      )}

      <Tz nummer={n()} label="Sichern" titel="Merksatz und Klausurfallen">
        <Notiz><p>{m.merksatz}</p></Notiz>
        {m.exam?.length > 0 && <Notiz art="exkurs" titel="Prüfungsrelevanz"><ul className="liste">{m.exam.map((e, i) => <li key={i}>{e}</li>)}</ul></Notiz>}
        <Notiz art="falle"><ul>{m.traps.map((t, i) => <li key={i}>{t}</li>)}</ul></Notiz>
      </Tz>

      <Tz nummer={n()} label="Quellen" titel="Verarbeitete Unterlagen">
        <ul className="kst-quellenliste">{m.sources.map((s) => <li key={s}>{s}</li>)}</ul>
        <p className="rechtsstand">Redaktionelle Ausbaustufe: 05.08.2026. Inhaltlich auf die hochgeladenen Unterlagen beschränkt; weitere Dokumente können als zusätzliche Module und Fälle ergänzt werden.</p>
      </Tz>

      <nav className="blaettern">
        {vorher ? <button onClick={() => oeffnen(vorher.id)}><small>← Modul {vorher.id}</small><strong>{vorher.title}</strong></button> : <span />}
        {nachher ? <button onClick={() => oeffnen(nachher.id)}><small>Modul {nachher.id} →</small><strong>{nachher.title}</strong></button> : <span />}
      </nav>
    </article>
  );
}

function KstFallseite({ oeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">KSt-Fallsammlung</span>
          <h1>Fälle aus den hochgeladenen Unterlagen</h1>
          <p className="lead">Sachverhalt zuerst, Lösung auf Klick. Der Gründungsfall ist vollständig übernommen; die Mitschriftenfälle sind als kompakte Übungsfälle redaktionell gegliedert.</p>
        </div>
        <span className="zaehler">{kstFaelle.length} Fälle</span>
      </div>

      <div className="kst-faelle">
        {kstFaelle.map((fall) => (
          <article className="panel kst-fallkarte" key={fall.id}>
            <div className="panel__head">
              <div><span className="kicker">Fall {fall.id} · {fall.points} Punkte</span><h2>{fall.title}</h2></div>
              <button className="btn btn--klein btn--linie" onClick={() => oeffnen(fall.moduleId)}>Modul {fall.moduleId}</button>
            </div>
            <p className="kst-fallquelle">Quelle: {fall.source}</p>
            <div className="kst-sachverhalt">
              <b>Sachverhalt</b>
              {fall.facts.map((p, i) => <p key={i}>{p}</p>)}
              <p><strong>Aufgabe:</strong> {fall.task}</p>
            </div>
            <details>
              <summary>Lösung öffnen</summary>
              <ol className="kst-loesung">{fall.solution.map((s, i) => <li key={i}>{s}</li>)}</ol>
            </details>
          </article>
        ))}
      </div>
    </>
  );
}

function KstSchemaseite({ oeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Prüfungsschemata</span>
          <h1>Sieben feste KSt-Prüfungspfade</h1>
          <p className="lead">Die Schemata sind aus den hochgeladenen Übersichten und Mitschriften in eine einheitliche Klausurreihenfolge gebracht.</p>
        </div>
      </div>
      <KstPruefpfad />
      <div className="kst-schemata">
        {kstSchemata.map((schema) => (
          <section className="panel" key={schema.id}>
            <div className="panel__head"><div><span className="kicker">{schema.law}</span><h2>{schema.title}</h2></div></div>
            <ol className="schritte">{schema.steps.map((s, i) => <li key={i}><span>{s}</span></li>)}</ol>
          </section>
        ))}
      </div>
      <section className="panel kst-schemahinweis">
        <h2>Vom Schema zum Modul</h2>
        <p>Die Detailbegründungen, Beispiele und Klausurfallen stehen in den Lernmodulen. Als Einstieg eignen sich vGA (Modul 4), vE (Modul 5), § 8b (Module 7–8) und der Gründungsfall (Modul 13).</p>
        <div className="these__aktionen"><button className="btn" onClick={() => oeffnen(4)}>vGA öffnen</button><button className="btn btn--linie" onClick={() => oeffnen(13)}>Gründungsfall öffnen</button></div>
      </section>
    </>
  );
}

function KstTraining() {
  const [index, setIndex] = useState(0);
  const [antwort, setAntwort] = useState(null);
  const [punkte, setPunkte] = useState(0);
  const [karte, setKarte] = useState(0);
  const [gedreht, setGedreht] = useState(false);
  const frage = kstQuizfragen[index];

  const waehlen = (i) => {
    if (antwort !== null) return;
    setAntwort(i);
    if (i === frage.richtig) setPunkte((p) => p + 1);
  };
  const weiter = () => {
    setAntwort(null);
    setIndex((i) => (i + 1) % kstQuizfragen.length);
  };

  return (
    <>
      <div className="pagehead">
        <div><span className="kicker">Training</span><h1>Quiz und Karteikarten</h1><p className="lead">Die Fragen prüfen ausschließlich Inhalte der ersten KSt-Ausbaustufe.</p></div>
        <span className="zaehler">{punkte} richtige Antworten</span>
      </div>

      <section className="panel kst-quiz">
        <div className="panel__head"><span className="kicker">Frage {index + 1} / {kstQuizfragen.length}</span></div>
        <h2>{frage.frage}</h2>
        <div className="kst-optionen">
          {frage.optionen.map((o, i) => {
            const status = antwort === null ? "" : i === frage.richtig ? " richtig" : i === antwort ? " falsch" : "";
            return <button className={`kst-option${status}`} key={o} onClick={() => waehlen(i)}>{o}</button>;
          })}
        </div>
        {antwort !== null && (
          <div className="kst-erklaerung"><p>{frage.erklaerung}</p><button className="btn btn--klein" onClick={weiter}>Nächste Frage</button></div>
        )}
      </section>

      <section className="abschnitt">
        <h2>Karteikarten</h2>
        <button className={`kst-karte${gedreht ? " kst-karte--gedreht" : ""}`} onClick={() => setGedreht((g) => !g)}>
          <span className="kicker">Karte {karte + 1} / {kstKarteikarten.length}</span>
          <strong>{gedreht ? kstKarteikarten[karte].hinten : kstKarteikarten[karte].vorn}</strong>
          <small>{gedreht ? "nochmals klicken für Vorderseite" : "klicken zum Umdrehen"}</small>
        </button>
        <div className="kst-kartensteuerung">
          <button className="btn btn--linie" onClick={() => { setKarte((k) => (k - 1 + kstKarteikarten.length) % kstKarteikarten.length); setGedreht(false); }}>← vorherige</button>
          <button className="btn" onClick={() => { setKarte((k) => (k + 1) % kstKarteikarten.length); setGedreht(false); }}>nächste →</button>
        </div>
      </section>
    </>
  );
}

function KstQuellenseite() {
  const eingearbeitet = kstQuellen.filter((q) => q.status === "eingearbeitet").length;
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Quellenstand</span>
          <h1>Hochgeladene Unterlagen und Verarbeitungsstatus</h1>
          <p className="lead">Die Liste macht transparent, welche Inhalte bereits in KSt-Module überführt wurden und welches Dokument fachlich zur bestehenden Klausur-3-Plattform gehört.</p>
        </div>
        <span className="zaehler">{eingearbeitet} / {kstQuellen.length} KSt-eingearbeitet</span>
      </div>

      <div className="kst-quellenraster">
        {kstQuellen.map((q) => (
          <article className="panel kst-quelle" key={q.title}>
            <div className="panel__head"><div><span className={`kst-status kst-status--${q.status === "eingearbeitet" ? "fertig" : "k3"}`}>{q.status}</span><h2>{q.title}</h2></div><span className="zaehler">{q.pages} S.</span></div>
            <p>{q.topics}</p>
          </article>
        ))}
      </div>

      <Notiz art="exkurs" titel="Erweiterungslogik">
        <p>Weitere Unterlagen können als neue Objekte in <code>src/data/kst-module.js</code>, <code>kst-faelle.js</code> und <code>kst-lernstoff.js</code> ergänzt werden. Navigation, Suche, Fortschritt und Quellenstatus aktualisieren sich aus den Daten.</p>
      </Notiz>
    </>
  );
}
