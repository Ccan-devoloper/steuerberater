/* Eigener K2-Reiter für die IStR-Hausaufgaben 2026 – Aufbau wie die IStR-Fallsammlung:
   Sachverhalt und Aufgabe offen, Lösungshinweise erst auf Klick, Wortlaut 1:1 aus den PDFs.
   Die am Rand der Musterlösung ausgewiesenen Punkte stehen an ihrem Absatz. */
import React, { useMemo, useState } from "react";
import { istrHausaufgaben, istrHausaufgabenQuelle } from "../data/istr-hausaufgaben.js";
import { istrModule } from "../data/istr-gesamt.js";
import "./istr-fallsammlung.css";
import "./istr-hausaufgaben.css";

const modulById = new Map(istrModule.map((m) => [m.id, m]));

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
                {zeile.map((zelle, j) => (
                  j === 0 ? <th key={j} scope="row">{zelle}</th> : <td key={j}>{zelle}</td>
                ))}
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

function Punkte({ wert }) {
  return (
    <span className="istr-ha-punkte" title={`${wert} ${wert === 1 ? "Punkt" : "Punkte"} laut Musterlösung`}>
      {wert} {wert === 1 ? "Punkt" : "Punkte"}
    </span>
  );
}

function Hausaufgabenkarte({ ha, onModulOeffnen }) {
  const module = (ha.modulIds || []).map((id) => modulById.get(id)).filter(Boolean);
  const vergeben = ha.loesung.reduce((n, b) => n + (b.punkte || 0), 0);
  return (
    <article className="panel istr-fs-fall istr-ha-karte" id={ha.id} data-ha-id={ha.id}>
      <header className="istr-fs-fall__kopf">
        <div>
          <span className="kicker">{ha.termin}. Fachtermin · {ha.punkte} Punkte</span>
          <h3>{ha.title}</h3>
          <p className="istr-ha-thema">{ha.thema}</p>
        </div>
        <div className="istr-fs-quellen" aria-label="Quellenangabe">
          <span>{ha.quelle}</span>
          <span>{ha.rechtsstand}</span>
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
        {ha.hinweise && (
          <>
            <h4 className="istr-fs-untertitel">Hinweise</h4>
            {ha.hinweise.map((element, i) => <Block key={i} element={element} />)}
          </>
        )}
      </section>

      <details className="istr-fs-details">
        <summary>Lösungshinweise anzeigen</summary>
        <section className="istr-fs-loesung">
          <b>Lösungshinweise</b>
          {ha.loesung.map((element, i) => <Block key={i} element={element} />)}
          <p className="istr-ha-summe">
            Summe der am Rand ausgewiesenen Punkte: {vergeben}. Die Musterlösung schließt mit{" "}
            {ha.punkteLoesung} Punkten ab.
            {ha.punkteLoesung !== ha.punkte && (
              <> Die Aufgabenstellung nennt abweichend {ha.punkte} erzielbare Punkte – die Abweichung steht so in der Quelle.</>
            )}
          </p>
          <small>Quelle: {ha.quelle}</small>
        </section>
      </details>

      {ha.anlage && (
        <details className="istr-fs-anlage istr-ha-anlage">
          <summary>Anlage: {ha.anlage.titel} · {ha.anlage.artikel.length} Artikel</summary>
          <div className="istr-fs-anlage__body">
            {ha.anlage.artikel.map((artikel) => (
              <section key={artikel.titel}>
                <h4>{artikel.titel}</h4>
                {artikel.absaetze.map((absatz, i) => <p key={i}>{absatz}</p>)}
              </section>
            ))}
          </div>
        </details>
      )}

      {module.length > 0 && (
        <footer className="istr-fs-crossrefs">
          <span className="kicker">Passende Lernmodule</span>
          <div>
            {module.map((m) => (
              <button type="button" key={m.id} onClick={() => onModulOeffnen?.(m.id)}>
                ↗ Einheit {m.unit} · {m.id} · {m.title}
              </button>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}

export default function IstrHausaufgaben({ onModulOeffnen }) {
  const [termin, setTermin] = useState("alle");
  const [suche, setSuche] = useState("");

  const volltext = (ha) => {
    const teile = [];
    const sammeln = (x) => {
      if (!x) return;
      if (typeof x === "string") { teile.push(x); return; }
      if (Array.isArray(x)) { x.forEach(sammeln); return; }
      if (typeof x === "object") Object.values(x).forEach(sammeln);
    };
    sammeln([ha.title, ha.thema, ha.normen, ha.sachverhalt, ha.aufgabe, ha.hinweise, ha.loesung]);
    return teile.join(" ").toLowerCase();
  };

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return istrHausaufgaben.filter((ha) => {
      if (termin !== "alle" && ha.termin !== Number(termin)) return false;
      if (!q) return true;
      return volltext(ha).includes(q);
    });
  }, [termin, suche]);

  const gesamtpunkte = istrHausaufgaben.reduce((n, ha) => n + ha.punkte, 0);

  return (
    <div className="istr-fs-page istr-ha-page">
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 2 · Internationales Steuerrecht · Hausaufgaben</span>
          <h1>IStR-Hausaufgaben 2026</h1>
          <p className="lead">
            Die Hausaufgaben zu den Fachterminen 1 bis 3 mit Sachverhalt, Aufgabenstellung und
            Lösungshinweisen im Wortlaut – die Lösung erst auf Klick, die Punkte an ihrem Absatz.
          </p>
        </div>
        <span className="zaehler">{gefiltert.length} von {istrHausaufgaben.length} · {gesamtpunkte} Punkte</span>
      </div>

      <section className="panel istr-fs-source">
        <strong>{istrHausaufgabenQuelle.reihe}</strong>
        <p>Didaktischer Hinweis des Herausgebers:</p>
        {istrHausaufgabenQuelle.didaktik.map((absatz) => <p key={absatz}>{absatz}</p>)}
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
          {[["alle", "Alle Fachtermine"], ["1", "1. Fachtermin"], ["2", "2. Fachtermin"], ["3", "3. Fachtermin"]].map(
            ([id, label]) => (
              <button type="button" key={id} aria-pressed={termin === id} onClick={() => setTermin(id)}>
                {label}
              </button>
            ),
          )}
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
