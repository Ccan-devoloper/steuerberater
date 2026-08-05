import React, { lazy, Suspense, useState } from "react";
import "./fallsammlung-performance.css";

const FallsammlungsText = lazy(() => import("./FallsammlungsText.jsx"));

function Ladehinweis({ text = "Inhalt wird aufbereitet …" }) {
  return <p className="fallsammlung__ladehinweis" role="status">{text}</p>;
}

function Fallkarte({ fall, zielmodul, oeffnenModul, zeigeModulLink }) {
  const [offen, setOffen] = useState(false);
  const [loesungOffen, setLoesungOffen] = useState(false);

  return (
    <article className={`fallsammlung__fall${offen ? " fallsammlung__fall--offen" : ""}`}>
      <button
        type="button"
        className="fallsammlung__kopf fallsammlung__kopf--button"
        aria-expanded={offen}
        onClick={() => setOffen((wert) => !wert)}
      >
        <div>
          <span className="kicker">{fall.quellmodul} · {fall.titel}</span>
          <h3>{fall.quellmodul} – {fall.titel}</h3>
          <span className="fallsammlung__oeffnen">{offen ? "Fall schließen" : "Fall öffnen"}</span>
        </div>
        <span className="fallsammlung__kopf-rechts">
          <code>{fall.id}</code>
          <b aria-hidden="true">{offen ? "−" : "+"}</b>
        </span>
      </button>

      {offen && (
        <div className="fallsammlung__inhalt">
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
            <Suspense fallback={<Ladehinweis />}>
              <FallsammlungsText
                wert={fall.sachverhalt}
                variante="sachverhalt"
                sourcePage={fall.quelle?.fall_seite}
              />
            </Suspense>
          </section>

          <details
            className="fallsammlung__loesung"
            onToggle={(event) => setLoesungOffen(event.currentTarget.open)}
          >
            <summary>Lösung anzeigen</summary>
            {loesungOffen && (
              <div className="fallsammlung__loesungsinhalt">
                <h4>Lösung</h4>
                <Suspense fallback={<Ladehinweis text="Lösung wird aufbereitet …" />}>
                  <FallsammlungsText
                    wert={fall.loesung}
                    variante="loesung"
                    sourcePage={fall.quelle?.loesung_seite}
                  />
                </Suspense>
              </div>
            )}
          </details>

          <footer>Fallsammlung S. {fall.quelle?.fall_seite ?? "–"} · Lösung S. {fall.quelle?.loesung_seite ?? "–"}</footer>
        </div>
      )}
    </article>
  );
}

export default function Fallsammlungsfaelle({
  faelle,
  modulMap = new Map(),
  oeffnenModul,
  zeigeModulLink = false,
}) {
  return (
    <div className="fallsammlung">
      {faelle.map((fall) => (
        <Fallkarte
          key={fall.id}
          fall={fall}
          zielmodul={fall.zielmodul_id ? modulMap.get(fall.zielmodul_id) : null}
          oeffnenModul={oeffnenModul}
          zeigeModulLink={zeigeModulLink}
        />
      ))}
    </div>
  );
}
