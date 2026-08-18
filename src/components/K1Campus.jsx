import React, { useEffect, useMemo, useState } from "react";
import k1UstFaelle from "../data/module-vertiefung-m.js";
import Schaubild from "./Schaubild";
import { Normkette, Notiz } from "./Bausteine";
import { laden, sichern, useFortschritt, anteil } from "../lib/fortschritt";
import {
  IconCockpit, IconModule, IconFaelle, IconSuche, IconSonne, IconMond, IconHaken,
} from "./Icons";
import "./kst.css";

const fallIds = new Set(k1UstFaelle.map((fall) => fall.id));
const ansichten = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "module", label: "Umsatzsteuer", Icon: IconModule },
  { id: "faelle", label: "Originalfälle", Icon: IconFaelle },
];

export default function K1Campus({ onKlausurwechsel }) {
  const [ansicht, setAnsicht] = useState("cockpit");
  const [fallId, setFallId] = useState(null);
  const [suche, setSuche] = useState("");
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  const fortschritt = useFortschritt("stb-k1-ust-erledigt", fallIds);
  const erledigt = fortschritt.werte;

  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [ansicht, fallId]);

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
  const oeffnen = (id) => {
    setFallId(id);
    setAnsicht("module");
  };

  return (
    <div className="kst-campus">
      <header className="topbar">
        <button className="brand" onClick={() => { setAnsicht("cockpit"); setFallId(null); }}>
          <span className="brand__mark">1</span>
          <span className="brand__text">
            <strong>Examenscampus Klausur 1</strong>
            <span>Verfahrensrecht · andere Steuerarten · Umsatzsteuer</span>
          </span>
        </button>
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
              setAnsicht("module");
              setFallId(null);
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
        <button className="klausur" aria-current="true" onClick={() => { setAnsicht("cockpit"); setFallId(null); }}>
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
              onClick={() => { setAnsicht(id); setFallId(null); }}
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
        {ansicht === "cockpit" && <K1Cockpit quote={quote} erledigt={erledigt} oeffnen={oeffnen} setAnsicht={setAnsicht} />}
        {ansicht === "module" && !fall && (
          <K1Liste
            liste={gefiltert}
            suche={suche}
            erledigt={erledigt}
            umschalten={fortschritt.umschalten}
            oeffnen={oeffnen}
          />
        )}
        {ansicht === "module" && fall && (
          <K1Fallseite
            fall={fall}
            erledigt={erledigt}
            umschalten={fortschritt.umschalten}
            zurueck={() => setFallId(null)}
            oeffnen={oeffnen}
          />
        )}
        {ansicht === "faelle" && <K1Originalfaelle oeffnen={oeffnen} />}
      </main>
    </div>
  );
}

function K1Cockpit({ quote, erledigt, oeffnen, setAnsicht }) {
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
            <button className="btn btn--linie" onClick={() => setAnsicht("faelle")}>Originalfälle öffnen</button>
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
      </section>

      <section className="abschnitt">
        <h2>USt-Grundschema der Mitschrift</h2>
        <div className="kst-pruefpfad">
          {[
            ["1", "Steuerbarkeit", "§ 1 UStG"],
            ["2", "Steuerbefreiung", "§§ 4–9 UStG"],
            ["3", "Steuersatz", "§ 12 UStG"],
            ["4", "Bemessungsgrundlage", "§ 10 UStG"],
            ["5", "Steuerentstehung", "§ 13 UStG"],
            ["6", "Vorsteuerabzug", "§ 15 UStG"],
          ].map(([nummer, titel, text]) => (
            <div className="kst-pruefpfad__stufe" key={nummer}>
              <b>{nummer}</b>
              <div><h3>{titel}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function K1Liste({ liste, suche, erledigt, umschalten, oeffnen }) {
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

function K1Fallseite({ fall: m, erledigt, umschalten, zurueck, oeffnen }) {
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
        </div>
        <button className="gemeistert" aria-pressed={fertig} onClick={() => umschalten(m.id)}>
          {fertig ? "✓ bearbeitet" : "Als bearbeitet markieren"}
        </button>
      </header>

      <Tz nummer={n()} label="Einordnung" titel="Worum es geht">
        {(m.intro || []).map((p, i) => <p key={i}>{p}</p>)}
      </Tz>

      <Tz nummer={n()} label="Lernziele" titel="Das können Sie danach">
        <ul className="liste liste--haken">{(m.goals || []).map((g, i) => <li key={i}>{g}</li>)}</ul>
      </Tz>

      <Tz nummer={n()} label="Schema" titel="Prüfungsreihenfolge" art="ansatz">
        <ol className="schritte">{(m.scheme || []).map((s, i) => <li key={i}><span>{s}</span></li>)}</ol>
        {m.diagram && <Schaubild id={m.diagram} />}
      </Tz>

      <Tz nummer={n()} label="Normen" titel="Normenkette für die Klausur">
        <Normkette normen={m.normchain || []} />
      </Tz>

      {m.example && (
        <Tz nummer={n()} label="Originalfall" titel={m.example.title} art="bewertung">
          <div className="fall">
            <div className="fall__block fall__sachverhalt"><b>Sachverhalt</b><p>{m.example.facts}</p></div>
            <div className="fall__block"><b>Lösung</b><ol>{m.example.solution.map((s, i) => <li key={i}>{s}</li>)}</ol></div>
            <div className="fall__block fall__ergebnis"><b>Ergebnis</b><p>{m.example.result}</p></div>
          </div>
        </Tz>
      )}

      <Tz nummer={n()} label="Sichern" titel="Merksatz, Prüfungsrelevanz und Fallen">
        <Notiz><p>{m.merksatz}</p></Notiz>
        {m.exam?.length > 0 && <Notiz art="exkurs" titel="Prüfungsrelevanz"><ul className="liste">{m.exam.map((e, i) => <li key={i}>{e}</li>)}</ul></Notiz>}
        {m.traps?.length > 0 && <Notiz art="falle"><ul>{m.traps.map((t, i) => <li key={i}>{t}</li>)}</ul></Notiz>}
      </Tz>

      <nav className="blaettern">
        {vorher ? <button onClick={() => oeffnen(vorher.id)}><small>← Fall {vorher.id}</small><strong>{vorher.title}</strong></button> : <span />}
        {nachher ? <button onClick={() => oeffnen(nachher.id)}><small>Fall {nachher.id} →</small><strong>{nachher.title}</strong></button> : <span />}
      </nav>
    </article>
  );
}

function K1Originalfaelle({ oeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 1 · Fallsammlung</span>
          <h1>Originalfälle der USt-Mitschrift</h1>
          <p className="lead">Sachverhalt und Ergebnis stammen aus der aufbereiteten Mitschrift; die vollständige Lösung steht im jeweiligen Fall.</p>
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
            <div className="kst-sachverhalt">
              <b>Sachverhalt</b>
              <p>{m.example?.facts}</p>
            </div>
            <details>
              <summary>Ergebnis anzeigen</summary>
              <p>{m.example?.result}</p>
            </details>
          </article>
        ))}
      </div>
    </>
  );
}
