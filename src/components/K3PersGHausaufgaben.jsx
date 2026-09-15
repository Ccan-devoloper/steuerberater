/* Reiter „Hausaufgaben PersG" im Campus Personengesellschaften.

   Aufbau wie bei den IStR-Hausaufgaben: Sachverhalt und Aufgabe offen,
   Lösungshinweise erst auf Klick, Wortlaut 1:1 aus den Quell-PDFs, die am Rand
   der Musterlösung ausgewiesenen Punkte stehen an ihrem Absatz. Das Layout der
   IStR-Hausaufgaben wird bewusst mitbenutzt statt kopiert - beide Reiter zeigen
   dieselbe Dokumentstruktur. */
import React, { useMemo, useState } from "react";
import { persgHausaufgaben, persgHausaufgabenQuelle } from "../data/k3-persg-hausaufgaben.js";
import { persgModule } from "../data/k3-persg-tag1";
import "./istr-fallsammlung.css";
import "./istr-hausaufgaben.css";

const modulById = new Map(persgModule.map((m) => [m.id, m]));

function Punkte({ wert }) {
  const label = wert === 1 ? "Punkt" : "Punkte";
  return (
    <span className="istr-ha-punkte" title={`${wert} ${label} laut Musterlösung`}>
      {wert} {label}
    </span>
  );
}

function Block({ element }) {
  if (element.typ === "titel") return <h4 className="istr-fs-untertitel">{element.text}</h4>;
  if (element.typ === "tabelle") {
    return (
      <div className="istr-fs-tabelle__rahmen">
        <table className="istr-fs-tabelle">
          {element.spalten.some((s) => s) && (
            <thead><tr>{element.spalten.map((s, i) => <th key={i} scope="col">{s}</th>)}</tr></thead>
          )}
          <tbody>
            {element.zeilen.map((zeile, i) => (
              <tr key={i}>
                {zeile.map((zelle, j) => (j === 0 ? <th key={j} scope="row">{zelle}</th> : <td key={j}>{zelle}</td>))}
              </tr>
            ))}
          </tbody>
        </table>
        {element.punkte ? <Punkte wert={element.punkte} /> : null}
      </div>
    );
  }
  return (
    <p className="istr-ha-absatz">
      {element.text}
      {element.punkte ? <Punkte wert={element.punkte} /> : null}
    </p>
  );
}

function Hausaufgabenkarte({ ha, onModulOeffnen }) {
  const module = (ha.modulIds || []).map((id) => modulById.get(id)).filter(Boolean);
  const vergeben = ha.loesung.reduce((n, b) => n + (b.punkte || 0), 0);
  return (
    <article className="panel istr-fs-fall istr-ha-karte" id={ha.id} data-ha-id={ha.id}>
      <header className="istr-fs-fall__kopf">
        <div>
          <span className="kicker">
            {ha.termin}. Fachtermin · {ha.punkte} Punkte{ha.zeit ? ` · ${ha.zeit}` : ""}
          </span>
          <h3>{ha.title}</h3>
          <p className="istr-ha-thema">{ha.thema}</p>
        </div>
        <div className="istr-fs-quellen" aria-label="Quellenangabe">
          <span>{ha.quelle}</span>
          <span>{ha.rechtsstand}</span>
          {ha.verfasser && <span>{ha.verfasser}</span>}
        </div>
      </header>

      <div className="istr-fs-normen" aria-label="Einschlägige Normen">
        {ha.normen.map((norm) => <span className="norm" key={norm}>{norm}</span>)}
      </div>

      <section className="istr-fs-aufgabe">
        <b>Sachverhalt (erzielbar: {ha.punkte} Punkte)</b>
        {ha.sachverhalt.map((element, i) => <Block key={i} element={element} />)}
        <h4 className="istr-fs-untertitel">Aufgabe</h4>
        {ha.aufgabe.map((element, i) => <Block key={i} element={element} />)}
        {ha.hilfsmittel && <p className="istr-ha-absatz"><b>Hilfsmittel:</b> {ha.hilfsmittel}</p>}
      </section>

      <details className="istr-fs-details">
        <summary>Lösungshinweise anzeigen</summary>
        <section className="istr-fs-loesung">
          <b>Lösungshinweise</b>
          {ha.loesung.map((element, i) => <Block key={i} element={element} />)}
          <p className="istr-ha-summe">
            Summe der am Rand ausgewiesenen Punkte: {vergeben} von {ha.punkte}.
          </p>
          <small>Quelle: {ha.quelle}</small>
        </section>
      </details>

      {module.length > 0 && (
        <footer className="istr-fs-crossrefs">
          <span className="kicker">Passende Lernmodule</span>
          <div>
            {module.map((m) => (
              <button type="button" key={m.id} onClick={() => onModulOeffnen?.(m.id)}>
                ↗ {m.id} · {m.title}
              </button>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}

const volltext = (ha) => {
  const teile = [];
  const sammeln = (x) => {
    if (!x) return;
    if (typeof x === "string") { teile.push(x); return; }
    if (Array.isArray(x)) { x.forEach(sammeln); return; }
    if (typeof x === "object") Object.values(x).forEach(sammeln);
  };
  sammeln([ha.title, ha.thema, ha.normen, ha.themen, ha.sachverhalt, ha.aufgabe, ha.loesung]);
  return teile.join(" ").toLowerCase();
};

export default function K3PersGHausaufgaben({ onModulOeffnen }) {
  const [termin, setTermin] = useState("alle");
  const [suche, setSuche] = useState("");

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return persgHausaufgaben.filter((ha) => {
      if (termin !== "alle" && ha.termin !== Number(termin)) return false;
      if (!q) return true;
      return volltext(ha).includes(q);
    });
  }, [termin, suche]);

  const gesamtpunkte = persgHausaufgaben.reduce((n, ha) => n + ha.punkte, 0);
  const termine = [["alle", "Alle Fachtermine"], ...persgHausaufgaben.map((ha) => [String(ha.termin), `${ha.termin}. Fachtermin`])];

  return (
    <div className="istr-fs-page istr-ha-page">
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 3 · Personengesellschaften · Hausaufgaben</span>
          <h1>PersG-Hausaufgaben 2026/2027</h1>
          <p className="lead">
            Die Hausaufgaben des Tageslehrgangs mit Sachverhalt, Aufgabenstellung und
            Lösungshinweisen im Wortlaut – die Lösung erst auf Klick, die Punkte an ihrem Absatz.
          </p>
        </div>
        <span className="zaehler">{gefiltert.length} von {persgHausaufgaben.length} · {gesamtpunkte} Punkte</span>
      </div>

      <section className="panel istr-fs-source">
        <strong>{persgHausaufgabenQuelle.reihe}</strong>
        <p>Didaktischer Hinweis des Herausgebers:</p>
        {persgHausaufgabenQuelle.didaktik.map((absatz) => <p key={absatz}>{absatz}</p>)}
      </section>

      <section className="istr-fs-steuerung" aria-label="Hausaufgaben filtern">
        <label className="istr-fs-suche">
          <span>Hausaufgaben durchsuchen</span>
          <input
            type="search"
            value={suche}
            onChange={(event) => setSuche(event.target.value)}
            placeholder="Name, Norm, Stichwort oder Betrag"
          />
        </label>
        <div className="istr-fs-kategorien" role="group" aria-label="Fachtermin">
          {termine.map(([id, label]) => (
            <button type="button" key={id} aria-pressed={termin === id} onClick={() => setTermin(id)}>
              {label}
            </button>
          ))}
        </div>
      </section>

      {gefiltert.length === 0 && (
        <section className="panel istr-fs-leer">
          <h3>Keine Hausaufgabe gefunden</h3>
          <p>Suchbegriff oder Fachtermin ändern.</p>
        </section>
      )}

      <div className="istr-fs-liste-faelle">
        {gefiltert.map((ha) => <Hausaufgabenkarte key={ha.id} ha={ha} onModulOeffnen={onModulOeffnen} />)}
      </div>
    </div>
  );
}
