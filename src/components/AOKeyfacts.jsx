/* Reiter „Keyfacts" im AO-Campus.

   An dieser Stelle stand bisher der leere Reiter „Fallsammlung AO"; eine
   AO-Fallsammlung gibt es in den Kursunterlagen nicht, wohl aber die drei
   Keyfacts-Blätter zu Außenprüfung, Vollstreckung und Erhebungsverfahren.
   Sie stehen hier im Wortlaut - knappe Merksätze mit Fundstelle. */
import React, { useMemo, useState } from "react";
import { aoKeyfacts, aoKeyfactsQuelle } from "../data/k1-ao-keyfacts.js";
import "./istr-fallsammlung.css";
import "./istr-hausaufgaben.css";

function Abschnitt({ abschnitt }) {
  return (
    <section className="istr-fs-aufgabe">
      <b>{abschnitt.titel}</b>
      {abschnitt.punkte && (
        <ul className="istr-fs-liste">
          {abschnitt.punkte.map((punkt, i) => <li key={i}>{punkt}</li>)}
        </ul>
      )}
      {(abschnitt.schritte || []).map((schritt) => (
        <div key={schritt.titel}>
          <h4 className="istr-fs-untertitel">{schritt.titel}</h4>
          <ul className="istr-fs-liste">
            {schritt.punkte.map((punkt, i) => <li key={i}>{punkt}</li>)}
          </ul>
        </div>
      ))}
      {abschnitt.hinweis && <p className="istr-ha-absatz"><b>{abschnitt.hinweis}</b></p>}
    </section>
  );
}

function Blatt({ blatt }) {
  return (
    <article className="panel istr-fs-fall istr-ha-karte" id={blatt.id}>
      <header className="istr-fs-fall__kopf">
        <div>
          <span className="kicker">Klausur 1 · Abgabenordnung · {aoKeyfactsQuelle.stand}</span>
          <h3>{blatt.titel}</h3>
          <p className="istr-ha-thema">{blatt.themen.join(" · ")}</p>
        </div>
        <div className="istr-fs-quellen" aria-label="Quellenangabe">
          <span>{aoKeyfactsQuelle.autor}</span>
        </div>
      </header>

      <div className="istr-fs-normen" aria-label="Einschlägige Normen">
        {blatt.normen.map((norm) => <span className="norm" key={norm}>{norm}</span>)}
      </div>

      {blatt.abschnitte.map((abschnitt) => <Abschnitt key={abschnitt.titel} abschnitt={abschnitt} />)}

      {blatt.fussnote && <p className="istr-ha-summe">{blatt.fussnote}</p>}

    </article>
  );
}

const volltext = (blatt) => [
  blatt.titel, blatt.themen.join(" "), blatt.normen.join(" "),
  ...blatt.abschnitte.flatMap((a) => [
    a.titel, ...(a.punkte || []), a.hinweis || "",
    ...(a.schritte || []).flatMap((s) => [s.titel, ...s.punkte]),
  ]),
].join(" ").toLowerCase();

export default function AOKeyfacts() {
  const [blattId, setBlattId] = useState("alle");
  const [suche, setSuche] = useState("");

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return aoKeyfacts.filter((blatt) => {
      if (blattId !== "alle" && blatt.id !== blattId) return false;
      if (!q) return true;
      return volltext(blatt).includes(q);
    });
  }, [blattId, suche]);

  return (
    <div className="istr-fs-page istr-ha-page">
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 1 · Abgabenordnung · Keyfacts</span>
          <h1>AO-Keyfacts</h1>
          <p className="lead">
            Die drei Übersichtsblätter des Lehrgangs zu Außenprüfung, Vollstreckung und
            Erhebungsverfahren – Merksatz für Merksatz im Wortlaut, jeweils mit Fundstelle.
          </p>
        </div>
        <span className="zaehler">{gefiltert.length} von {aoKeyfacts.length} Blättern</span>
      </div>

      <section className="panel istr-fs-source">
        <strong>{aoKeyfactsQuelle.autor}</strong>
        <p>{aoKeyfactsQuelle.hinweis}</p>
      </section>

      <section className="istr-fs-steuerung" aria-label="Keyfacts filtern">
        <label className="istr-fs-suche">
          <span>Keyfacts durchsuchen</span>
          <input
            type="search"
            value={suche}
            onChange={(event) => setSuche(event.target.value)}
            placeholder="Norm, Stichwort oder Merksatz"
          />
        </label>
        <div className="istr-fs-kategorien" role="group" aria-label="Blätter">
          <button type="button" aria-pressed={blattId === "alle"} onClick={() => setBlattId("alle")}>Alle Blätter</button>
          {aoKeyfacts.map((blatt) => (
            <button type="button" key={blatt.id} aria-pressed={blattId === blatt.id} onClick={() => setBlattId(blatt.id)}>
              {blatt.titel.replace("Keyfacts ", "")}
            </button>
          ))}
        </div>
      </section>

      {gefiltert.length === 0 && (
        <section className="panel istr-fs-leer">
          <h3>Kein Treffer</h3>
          <p>Suchbegriff oder Blatt ändern.</p>
        </section>
      )}

      <div className="istr-fs-liste-faelle">
        {gefiltert.map((blatt) => <Blatt key={blatt.id} blatt={blatt} />)}
      </div>
    </div>
  );
}
