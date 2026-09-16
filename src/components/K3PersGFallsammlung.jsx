/* Reiter „Fallsammlung" im Campus Personengesellschaften.

   Die Quelle (Fallsammlung Melzer) druckt nur die Fälle ab, keine Lösungen.
   Deshalb zeigt die Ansicht Sachverhalt, Aufgabe und Abwandlungen im Wortlaut
   und darunter die Stellen im Campus, an denen derselbe Stoff durchgerechnet
   ist – statt einer erfundenen Musterlösung. */
import React, { useMemo, useState } from "react";
import {
  persgFallsammlung, persgFallsammlungGruppen, persgFallsammlungQuelle,
} from "../data/k3-persg-fallsammlung.js";
import { persgModule, persgSchemata, persgFaelle } from "../data/k3-persg-tag1";
import { persgHausaufgaben } from "../data/k3-persg-hausaufgaben.js";
import { Block } from "./HausaufgabenBloecke";
import "./istr-fallsammlung.css";
import "./istr-hausaufgaben.css";

const modulById = new Map(persgModule.map((m) => [m.id, m]));
const schemaById = new Map(persgSchemata.map((s) => [s.id, s]));
const fallById = new Map(persgFaelle.map((f) => [f.id, f]));
const hausaufgabeById = new Map(persgHausaufgaben.map((h) => [h.id, h]));

function Verweise({ verweise, oeffnen }) {
  const { module = [], schemata = [], faelle = [], hausaufgaben = [] } = verweise || {};
  const eintraege = [
    ...module.map((id) => modulById.get(id)).filter(Boolean)
      .map((m) => ({ key: `m${m.id}`, label: `Modul ${m.id} · ${m.title}`, klick: () => oeffnen.modul(m.id) })),
    ...schemata.map((id) => schemaById.get(id)).filter(Boolean)
      .map((s) => ({ key: `s${s.id}`, label: `Prüfschema · ${s.title}`, klick: () => oeffnen.schema(s.id) })),
    ...faelle.map((id) => fallById.get(id)).filter(Boolean)
      .map((f) => ({ key: `f${f.id}`, label: `Originalfall ${f.nr} · ${f.title}`, klick: () => oeffnen.fall(f.id) })),
    ...hausaufgaben.map((id) => hausaufgabeById.get(id)).filter(Boolean)
      .map((h) => ({ key: `h${h.id}`, label: `Hausaufgabe ${h.termin}. Fachtermin · ${h.title}`, klick: () => oeffnen.hausaufgabe(h.id) })),
  ];
  if (eintraege.length === 0) return null;
  return (
    <footer className="istr-fs-crossrefs">
      <span className="kicker">Hier ist der Stoff durchgerechnet</span>
      <div>
        {eintraege.map((e) => (
          <button type="button" key={e.key} onClick={e.klick}>↗ {e.label}</button>
        ))}
      </div>
    </footer>
  );
}

function Fallkarte({ fall, gruppe, oeffnen }) {
  return (
    <article className="panel istr-fs-fall istr-ha-karte" id={fall.id}>
      <header className="istr-fs-fall__kopf">
        <div>
          <span className="kicker">Fall {fall.nummer} · {gruppe}</span>
          <h3>{fall.titel}</h3>
          <p className="istr-ha-thema">{fall.themen.join(" · ")}</p>
        </div>
        <div className="istr-fs-quellen" aria-label="Quellenangabe">
          <span>{persgFallsammlungQuelle.titel}</span>
          <span>{persgFallsammlungQuelle.stand}</span>
        </div>
      </header>

      <div className="istr-fs-normen" aria-label="Einschlägige Normen">
        {fall.normen.map((norm) => <span className="norm" key={norm}>{norm}</span>)}
      </div>

      <section className="istr-fs-aufgabe">
        <b>Sachverhalt</b>
        {fall.sachverhalt.map((element, i) => <Block key={i} element={element} />)}
        <h4 className="istr-fs-untertitel">Aufgabe</h4>
        {fall.aufgabe.map((element, i) => <Block key={i} element={element} />)}
      </section>

      {(fall.varianten || []).length > 0 && (
        <details className="istr-fs-details">
          <summary>{fall.varianten.length === 1 ? "Abwandlung anzeigen" : `${fall.varianten.length} Abwandlungen anzeigen`}</summary>
          <section className="istr-fs-loesung">
            {fall.varianten.map((v) => (
              <React.Fragment key={v.titel}>
                <h4 className="istr-fs-untertitel">{v.titel}</h4>
                <p className="istr-ha-absatz">{v.text}</p>
              </React.Fragment>
            ))}
          </section>
        </details>
      )}

      <Verweise verweise={fall.verweise} oeffnen={oeffnen} />
    </article>
  );
}

const volltext = (fall) => [
  fall.titel, fall.themen.join(" "), fall.normen.join(" "),
  ...fall.sachverhalt.map((b) => b.text || (b.zeilen || []).flat().join(" ")),
  ...fall.aufgabe.map((b) => b.text || ""),
  ...(fall.varianten || []).map((v) => `${v.titel} ${v.text}`),
].join(" ").toLowerCase();

export default function K3PersGFallsammlung({ oeffnen }) {
  const [gruppe, setGruppe] = useState("alle");
  const [suche, setSuche] = useState("");

  const gruppenName = useMemo(
    () => new Map(persgFallsammlungGruppen.map((g) => [g.id, g.titel.replace(/^\d+\.?\s*/, "")])),
    [],
  );

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return persgFallsammlung.filter((fall) => {
      if (gruppe !== "alle" && fall.gruppe !== gruppe) return false;
      if (!q) return true;
      return volltext(fall).includes(q);
    });
  }, [gruppe, suche]);

  return (
    <div className="istr-fs-page istr-ha-page">
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 3 · Personengesellschaften · Fallsammlung</span>
          <h1>PersG-Fallsammlung</h1>
          <p className="lead">
            Dreizehn Fälle in fünf Blöcken – § 6 Abs. 5 EStG, § 6 Abs. 3 EStG, Gesellschafterwechsel,
            § 24 UmwStG und Spiegelbildmethode – im Wortlaut der Quelle, mit allen Abwandlungen.
          </p>
        </div>
        <span className="zaehler">{gefiltert.length} von {persgFallsammlung.length} Fällen</span>
      </div>

      <section className="panel istr-fs-source">
        <strong>{persgFallsammlungQuelle.titel} · {persgFallsammlungQuelle.verfasser}</strong>
        <p>{persgFallsammlungQuelle.stand}</p>
        <p>{persgFallsammlungQuelle.hinweis}</p>
      </section>

      <section className="istr-fs-steuerung" aria-label="Fallsammlung filtern">
        <label className="istr-fs-suche">
          <span>Fälle durchsuchen</span>
          <input
            type="search"
            value={suche}
            onChange={(event) => setSuche(event.target.value)}
            placeholder="Name, Norm, Stichwort oder Betrag"
          />
        </label>
        <div className="istr-fs-kategorien" role="group" aria-label="Fallblöcke">
          <button type="button" aria-pressed={gruppe === "alle"} onClick={() => setGruppe("alle")}>Alle Blöcke</button>
          {persgFallsammlungGruppen.map((g) => (
            <button type="button" key={g.id} aria-pressed={gruppe === g.id} onClick={() => setGruppe(g.id)}>
              {gruppenName.get(g.id)}
            </button>
          ))}
        </div>
      </section>

      {gefiltert.length === 0 && (
        <section className="panel istr-fs-leer">
          <h3>Kein Fall gefunden</h3>
          <p>Suchbegriff oder Block ändern.</p>
        </section>
      )}

      <div className="istr-fs-liste-faelle">
        {gefiltert.map((fall) => (
          <Fallkarte key={fall.id} fall={fall} gruppe={gruppenName.get(fall.gruppe)} oeffnen={oeffnen} />
        ))}
      </div>
    </div>
  );
}
