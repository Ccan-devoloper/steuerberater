/* Gemeinsame Ansicht für blockbasierte Kurzskripte.

   Ein Skript hat keine Sachverhalt/Aufgabe/Lösung-Dreiteilung wie die
   Hausaufgaben; es hat Kapitel mit fortlaufendem Text. Deshalb eine eigene,
   schlanke Ansicht - die Blockdarstellung selbst kommt aber aus
   HausaufgabenBloecke, damit Absätze, Zwischenüberschriften und Tabellen im
   ganzen Campus gleich aussehen.

   Kapitel sind aufgeklappt; die Filterleiste springt über die Kapitelnummern,
   die Suche greift auf den Volltext des Kapitels. */
import React, { useMemo, useState } from "react";
import { Block } from "./HausaufgabenBloecke";
import "./istr-fallsammlung.css";
import "./istr-hausaufgaben.css";

const volltext = (kapitel) => {
  const teile = [];
  const sammeln = (x) => {
    if (!x) return;
    if (typeof x === "string") { teile.push(x); return; }
    if (Array.isArray(x)) { x.forEach(sammeln); return; }
    if (typeof x === "object") Object.values(x).forEach(sammeln);
  };
  sammeln([kapitel.title, kapitel.thema, kapitel.normen, kapitel.themen, kapitel.bloecke]);
  return teile.join(" ").toLowerCase();
};

function Kapitelkarte({ kapitel, kicker }) {
  return (
    <article className="panel istr-fs-fall istr-ha-karte" id={kapitel.id} data-kapitel={kapitel.kapitel}>
      <header className="istr-fs-fall__kopf">
        <div>
          <span className="kicker">{kicker} {kapitel.kapitel}</span>
          <h3>{kapitel.title}</h3>
          <p className="istr-ha-thema">{kapitel.thema}</p>
        </div>
        <div className="istr-fs-quellen" aria-label="Quellenangabe">
          <span>{kapitel.quelle}</span>
          <span>{kapitel.rechtsstand}</span>
          {kapitel.verfasser && <span>{kapitel.verfasser}</span>}
        </div>
      </header>

      <div className="istr-fs-normen" aria-label="Einschlägige Normen">
        {kapitel.normen.map((norm) => <span className="norm" key={norm}>{norm}</span>)}
      </div>

      <section className="istr-fs-aufgabe">
        {kapitel.bloecke.map((element, i) => <Block key={i} element={element} />)}
        <small>Quelle: {kapitel.quelle}</small>
      </section>
    </article>
  );
}

export default function KurzskriptBloecke({
  kicker, titel, lead, quelle, kapitel,
  karteKicker = "Kapitel", suchePlatzhalter,
}) {
  const [gewaehlt, setGewaehlt] = useState("alle");
  const [suche, setSuche] = useState("");

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return kapitel.filter((k) => {
      if (gewaehlt !== "alle" && String(k.kapitel) !== gewaehlt) return false;
      if (!q) return true;
      return volltext(k).includes(q);
    });
  }, [gewaehlt, suche, kapitel]);

  const bloecke = kapitel.reduce((n, k) => n + k.bloecke.length, 0);
  const auswahl = [["alle", "Alle Kapitel"], ...kapitel.map((k) => [String(k.kapitel), k.kapitel])];

  return (
    <div className="istr-fs-page istr-ha-page">
      <div className="pagehead">
        <div>
          <span className="kicker">{kicker}</span>
          <h1>{titel}</h1>
          <p className="lead">{lead}</p>
        </div>
        <span className="zaehler">
          {gefiltert.length} von {kapitel.length} Kapiteln · {bloecke} Abschnitte
        </span>
      </div>

      <section className="panel istr-fs-source">
        <strong>{quelle.reihe}</strong>
        <p>Didaktischer Hinweis des Herausgebers:</p>
        {quelle.didaktik.map((absatz) => <p key={absatz}>{absatz}</p>)}
      </section>

      <section className="istr-fs-steuerung" aria-label="Kapitel filtern">
        <label className="istr-fs-suche">
          <span>Skript durchsuchen</span>
          <input
            type="search"
            value={suche}
            onChange={(event) => setSuche(event.target.value)}
            placeholder={suchePlatzhalter}
          />
        </label>
        <div className="istr-fs-kategorien" role="group" aria-label="Kapitel">
          {auswahl.map(([id, label]) => (
            <button type="button" key={id} aria-pressed={gewaehlt === id} onClick={() => setGewaehlt(id)}>{label}</button>
          ))}
        </div>
      </section>

      {gefiltert.length === 0 && (
        <section className="panel istr-fs-leer">
          <h3>Kein Kapitel gefunden</h3>
          <p>Suchbegriff oder Auswahl ändern.</p>
        </section>
      )}

      <div className="istr-fs-liste-faelle">
        {gefiltert.map((k) => <Kapitelkarte key={k.id} kapitel={k} kicker={karteKicker} />)}
      </div>
    </div>
  );
}
