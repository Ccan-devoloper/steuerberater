/* Gemeinsame Ansicht für blockbasierte Hausaufgaben (PersG und ErbSt).

   Aufbau wie bei den IStR-Hausaufgaben, deren Layout hier mitbenutzt statt
   kopiert wird: Sachverhalt und Aufgabe offen, Lösungshinweise erst auf Klick,
   Wortlaut 1:1 aus den Quell-PDFs, Rechenwege als Tabellen und - wo die
   Musterlösung sie ausweist - die Punkte an ihrem Absatz. */
import React, { useMemo, useState } from "react";
import { mitHervorhebung } from "../lib/hervorhebung";
import "./istr-fallsammlung.css";
import "./istr-hausaufgaben.css";

function Punkte({ wert }) {
  const label = wert === 1 ? "Punkt" : "Punkte";
  return (
    <span className="istr-ha-punkte" title={`${wert} ${label} laut Musterlösung`}>
      {wert} {label}
    </span>
  );
}

export function Block({ element }) {
  if (element.typ === "titel") return <h4 className="istr-fs-untertitel">{mitHervorhebung(element.text)}</h4>;
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
      {mitHervorhebung(element.text)}
      {element.punkte ? <Punkte wert={element.punkte} /> : null}
    </p>
  );
}

function Hausaufgabenkarte({ ha, kicker, module, onModulOeffnen }) {
  const vergeben = ha.loesung.reduce((n, b) => n + (b.punkte || 0), 0);
  return (
    <article className="panel istr-fs-fall istr-ha-karte" id={ha.id} data-ha-id={ha.id}>
      <header className="istr-fs-fall__kopf">
        <div>
          <span className="kicker">{kicker(ha)}</span>
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
        <b>Sachverhalt{ha.punkte ? ` (erzielbar: ${ha.punkte} Punkte)` : ""}</b>
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
          {vergeben > 0 && (
            <p className="istr-ha-summe">Summe der am Rand ausgewiesenen Punkte: {vergeben} von {ha.punkte}.</p>
          )}
          <small>Quelle: {ha.quelle}</small>
        </section>
      </details>

      {module.length > 0 && (
        <footer className="istr-fs-crossrefs">
          <span className="kicker">Passende Lernmodule</span>
          <div>
            {module.map((m) => (
              <button type="button" key={m.id} onClick={() => onModulOeffnen?.(m.id)}>↗ {m.label}</button>
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

export default function HausaufgabenBloecke({
  kicker, titel, lead, quelle, hausaufgaben,
  gruppeVon, gruppeLabel, gruppeAria = "Auswahl",
  karteKicker, moduleFuer = () => [], onModulOeffnen, suchePlatzhalter,
  einheit = "Hausaufgaben", einheitEinzahl = "Hausaufgabe",
}) {
  const [gruppe, setGruppe] = useState("alle");
  const [suche, setSuche] = useState("");

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return hausaufgaben.filter((ha) => {
      if (gruppe !== "alle" && String(gruppeVon(ha)) !== gruppe) return false;
      if (!q) return true;
      return volltext(ha).includes(q);
    });
  }, [gruppe, suche, hausaufgaben, gruppeVon]);

  const gesamtpunkte = hausaufgaben.reduce((n, ha) => n + (ha.punkte || 0), 0);
  /* Mehrere Fälle können zur selben Gruppe gehören (Fallsammlungen); die Map
     hält je Gruppe den ersten Eintrag und bewahrt die Reihenfolge. */
  const gruppen = [
    ["alle", `Alle ${gruppeAria}`],
    ...new Map(hausaufgaben.map((ha) => [String(gruppeVon(ha)), gruppeLabel(ha)])),
  ];

  return (
    <div className="istr-fs-page istr-ha-page">
      <div className="pagehead">
        <div>
          <span className="kicker">{kicker}</span>
          <h1>{titel}</h1>
          <p className="lead">{mitHervorhebung(lead)}</p>
        </div>
        <span className="zaehler">
          {gefiltert.length} von {hausaufgaben.length}{gesamtpunkte ? ` · ${gesamtpunkte} Punkte` : ""}
        </span>
      </div>

      <section className="panel istr-fs-source">
        <strong>{quelle.reihe}</strong>
        <p>Didaktischer Hinweis des Herausgebers:</p>
        {quelle.didaktik.map((absatz) => <p key={absatz}>{mitHervorhebung(absatz)}</p>)}
      </section>

      <section className="istr-fs-steuerung" aria-label={`${einheit} filtern`}>
        <label className="istr-fs-suche">
          <span>{einheit} durchsuchen</span>
          <input
            type="search"
            value={suche}
            onChange={(event) => setSuche(event.target.value)}
            placeholder={suchePlatzhalter}
          />
        </label>
        <div className="istr-fs-kategorien" role="group" aria-label={gruppeAria}>
          {gruppen.map(([id, label]) => (
            <button type="button" key={id} aria-pressed={gruppe === id} onClick={() => setGruppe(id)}>{label}</button>
          ))}
        </div>
      </section>

      {gefiltert.length === 0 && (
        <section className="panel istr-fs-leer">
          <h3>Keine {einheitEinzahl} gefunden</h3>
          <p>Suchbegriff oder Auswahl ändern.</p>
        </section>
      )}

      <div className="istr-fs-liste-faelle">
        {gefiltert.map((ha) => (
          <Hausaufgabenkarte
            key={ha.id}
            ha={ha}
            kicker={karteKicker}
            module={moduleFuer(ha)}
            onModulOeffnen={onModulOeffnen}
          />
        ))}
      </div>
    </div>
  );
}
