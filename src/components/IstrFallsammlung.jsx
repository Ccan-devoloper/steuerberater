/* Eigener K2-Reiter für die IStR-Fallsammlung 2026 – Aufbau wie die USt-Fallsammlung in K1:
   Sachverhalt offen, Lösung erst auf Klick, Wortlaut 1:1 aus den beiden Original-PDFs. */
import React, { useMemo, useState } from "react";
import {
  istrFallsammlung, istrFallsammlungKategorien, istrFallsammlungQuelle, istrFallsammlungAnlagen,
} from "../data/istr-fallsammlung.js";
import { istrModule } from "../data/istr-gesamt.js";
import "./istr-fallsammlung.css";

const modulById = new Map(istrModule.map((m) => [m.id, m]));

function Block({ element }) {
  if (typeof element === "string") return <p>{element}</p>;
  if (element.typ === "titel") return <h4 className="istr-fs-untertitel">{element.text}</h4>;
  if (element.typ === "liste") {
    return <ul className="liste istr-fs-liste">{element.punkte.map((p) => <li key={p}>{p}</li>)}</ul>;
  }
  if (element.typ === "tabelle") {
    return (
      <div className="istr-fs-tabelle__rahmen">
        <table className="istr-fs-tabelle">
          {element.spalten.some((s) => s) && (
            <thead>
              <tr>{element.spalten.map((s, i) => <th key={i} scope="col">{s}</th>)}</tr>
            </thead>
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
      </div>
    );
  }
  return null;
}

function Fallkarte({ fall, onModulOeffnen }) {
  const module = (fall.modulIds || []).map((id) => modulById.get(id)).filter(Boolean);
  return (
    <article className="panel istr-fs-fall" id={`istr-fs-${fall.id}`} data-fs-id={fall.id}>
      <header className="istr-fs-fall__kopf">
        <div>
          <span className="kicker">Fall {fall.nummer} · {fall.kategorie}</span>
          <h3>{fall.title}</h3>
        </div>
        <div className="istr-fs-quellen" aria-label="Quellenstellen">
          <span>{fall.aufgabeQuelle}</span>
          <span>{fall.loesungQuelle}</span>
        </div>
      </header>

      {fall.normen?.length > 0 && (
        <div className="istr-fs-normen" aria-label="Einschlägige Normen">
          {fall.normen.map((norm) => <span className="norm" key={norm}>{norm}</span>)}
        </div>
      )}

      <section className="istr-fs-aufgabe">
        <b>Sachverhalt und Aufgabe</b>
        {fall.aufgabe.map((element, i) => <Block key={i} element={element} />)}
      </section>

      <details className="istr-fs-details">
        <summary>Lösung anzeigen</summary>
        <section className="istr-fs-loesung">
          <b>Lösung</b>
          {fall.loesung.map((element, i) => <Block key={i} element={element} />)}
          <small>Quelle: {fall.loesungQuelle}</small>
        </section>
      </details>

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

export default function IstrFallsammlung({ onModulOeffnen }) {
  const [kategorie, setKategorie] = useState("alle");
  const [suche, setSuche] = useState("");

  const volltext = (fall) => {
    const teile = [];
    const sammeln = (x) => {
      if (!x) return;
      if (typeof x === "string") { teile.push(x); return; }
      if (Array.isArray(x)) { x.forEach(sammeln); return; }
      if (typeof x === "object") Object.values(x).forEach(sammeln);
    };
    sammeln([fall.id, fall.title, fall.kategorie, fall.normen, fall.aufgabe, fall.loesung]);
    return teile.join(" ").toLowerCase();
  };

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    const label = istrFallsammlungKategorien.find((e) => e.id === kategorie)?.label;
    return istrFallsammlung.filter((fall) => {
      if (kategorie !== "alle" && fall.kategorie !== label) return false;
      if (!q) return true;
      return volltext(fall).includes(q);
    });
  }, [kategorie, suche]);

  const gruppen = useMemo(() => {
    const map = new Map();
    for (const fall of gefiltert) {
      if (!map.has(fall.kategorie)) map.set(fall.kategorie, []);
      map.get(fall.kategorie).push(fall);
    }
    return Array.from(map.entries());
  }, [gefiltert]);

  return (
    <div className="istr-fs-page">
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 2 · Internationales Steuerrecht · Fallsammlung</span>
          <h1>IStR-Fallsammlung 2026</h1>
          <p className="lead">
            Neun Originalfälle mit den zugehörigen Lösungen – Sachverhalt und Lösung wortlautgetreu aus den
            Original-PDFs, die Lösung erst auf Klick.
          </p>
        </div>
        <span className="zaehler">{gefiltert.length} von {istrFallsammlung.length} Fällen</span>
      </div>

      <section className="panel istr-fs-source">
        <strong>Quellenstand · {istrFallsammlungQuelle.stand}</strong>
        <p>{istrFallsammlungQuelle.aufgaben} · {istrFallsammlungQuelle.loesungen}</p>
        <p>{istrFallsammlungQuelle.hinweis}</p>
      </section>

      <section className="istr-fs-steuerung" aria-label="Fallsammlung filtern">
        <label className="istr-fs-suche">
          <span>Fallsammlung durchsuchen</span>
          <input
            type="search"
            value={suche}
            onChange={(event) => setSuche(event.target.value)}
            placeholder="Fallnummer, Name, Norm oder Betrag"
          />
        </label>
        <div className="istr-fs-kategorien" role="group" aria-label="Kategorien">
          {istrFallsammlungKategorien.map((eintrag) => (
            <button
              type="button"
              key={eintrag.id}
              aria-pressed={kategorie === eintrag.id}
              onClick={() => setKategorie(eintrag.id)}
            >
              {eintrag.label}
            </button>
          ))}
        </div>
      </section>

      {gruppen.length === 0 && (
        <section className="panel istr-fs-leer">
          <h3>Keine Fälle gefunden</h3>
          <p>Suchbegriff oder Kategorie ändern.</p>
        </section>
      )}

      {gruppen.map(([gruppenname, faelle]) => (
        <section className="istr-fs-gruppe" key={gruppenname}>
          <div className="istr-fs-gruppe__kopf">
            <div>
              <span className="kicker">Kategorie</span>
              <h2>{gruppenname}</h2>
            </div>
            <span>{faelle.length} {faelle.length === 1 ? "Fall" : "Fälle"}</span>
          </div>
          <div className="istr-fs-liste-faelle">
            {faelle.map((fall) => <Fallkarte key={fall.id} fall={fall} onModulOeffnen={onModulOeffnen} />)}
          </div>
        </section>
      ))}

      <section className="istr-fs-gruppe" id="istr-fs-anlagen">
        <div className="istr-fs-gruppe__kopf">
          <div>
            <span className="kicker">Anlagen zur Aufgabenstellung</span>
            <h2>DBA-Auszüge</h2>
          </div>
          <span>{istrFallsammlungAnlagen.length} Abkommen</span>
        </div>
        <p className="istr-fs-anlagen__hinweis">
          Wortlaut der Anlagen aus dem Aufgaben-PDF (Seiten 5–30). Sie gehören zur Fallsammlung und
          liegen in der Klausur als Arbeitsmittel vor.
        </p>
        {istrFallsammlungAnlagen.map((anlage) => (
          <details className="panel istr-fs-anlage" key={anlage.titel}>
            <summary>{anlage.titel} · {anlage.artikel.length} Artikel</summary>
            <div className="istr-fs-anlage__body">
              {anlage.artikel.map((artikel) => (
                <section key={artikel.titel}>
                  <h4>{artikel.titel}</h4>
                  {artikel.absaetze.length === 0
                    ? <p className="istr-fs-anlage__leer">– im Auszug nicht abgedruckt –</p>
                    : artikel.absaetze.map((absatz, i) => <p key={i}>{absatz}</p>)}
                </section>
              ))}
            </div>
          </details>
        ))}
      </section>
    </div>
  );
}
