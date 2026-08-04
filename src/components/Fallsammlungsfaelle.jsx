import React from "react";

const text = (wert) => Array.isArray(wert) ? wert.join("\n\n") : String(wert || "");

export default function Fallsammlungsfaelle({
  faelle,
  modulMap = new Map(),
  oeffnenModul,
  zeigeModulLink = false,
}) {
  return (
    <div className="fallsammlung">
      {faelle.map((fall) => {
        const zielmodul = fall.zielmodul_id ? modulMap.get(fall.zielmodul_id) : null;
        return (
          <article className="fallsammlung__fall" key={fall.id}>
            <header className="fallsammlung__kopf">
              <div>
                <span className="kicker">{fall.quellmodul} · {fall.titel}</span>
                <h3>{fall.quellmodul} – {fall.titel}</h3>
              </div>
              <code>{fall.id}</code>
            </header>
            {zeigeModulLink && (
              <div className="fallsammlung__verknuepfung">
                {zielmodul ? (
                  <button type="button" className="fallsammlung__modullink" onClick={() => oeffnenModul(zielmodul.id)}>
                    <span>Zum Lernmodul</span>
                    <strong>{zielmodul.title}</strong>
                    <b aria-hidden="true">→</b>
                  </button>
                ) : (
                  <span className="fallsammlung__ohne-modul">Noch keinem Lernmodul eindeutig zugeordnet</span>
                )}
              </div>
            )}
            <section className="fallsammlung__sachverhalt">
              <h4>Sachverhalt</h4>
              <div className="fallsammlung__text">{text(fall.sachverhalt)}</div>
            </section>
            <details className="fallsammlung__loesung">
              <summary>Lösung anzeigen</summary>
              <div className="fallsammlung__loesungsinhalt">
                <h4>Lösung</h4>
                <div className="fallsammlung__text">{text(fall.loesung)}</div>
              </div>
            </details>
            <footer>Fallsammlung S. {fall.quelle?.fall_seite ?? "–"} · Lösung S. {fall.quelle?.loesung_seite ?? "–"}</footer>
          </article>
        );
      })}
    </div>
  );
}
