import React from "react";
import { SchemaVerweise } from "./K1SchemaLinks";
import "./k1-originalfall-aufgaben.css";

/* Aufgabenstellung eines Originalfalls – früher per DOM-Enhancer injiziert,
   jetzt regulär aus k1-fall-extras gerendert. */
export function K1Aufgabenblock({ daten, law, onSchema }) {
  if (!daten) return null;
  return (
    <div className="k1-originalfall-aufgabe">
      <div className="k1-originalfall-aufgabe__kopf">
        <strong>Aufgabenstellung</strong>
        <small>Quelle: {daten.seiten}</small>
      </div>
      {daten.fragen?.length > 0 && (
        <ol>{daten.fragen.map((frage, i) => <li key={i}>{frage}</li>)}</ol>
      )}
      {daten.hinweis && <p>{daten.hinweis}</p>}
      {law && onSchema && (
        <div className="k1-originalfall-aufgabe__schema">
          <SchemaVerweise text={law} onOpen={onSchema} compact stopPropagation />
        </div>
      )}
    </div>
  );
}

/* Rekonstruierte Tafel-/Pfeilskizze aus der Mitschrift. */
export function K1Quellskizze({ spec }) {
  if (!spec) return null;
  return (
    <figure className="k1-quellskizze">
      <figcaption>{spec.titel}</figcaption>
      <div className="k1-quellskizze__raster">
        {spec.spuren.map((spur, zeilenIndex) => (
          <div className="k1-quellskizze__spur" key={zeilenIndex}>
            {spur.map((text, index) => (
              <React.Fragment key={index}>
                <span>{text}</span>
                {index < spur.length - 1 && <i aria-hidden="true">→</i>}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      {spec.note && <p>{spec.note}</p>}
    </figure>
  );
}
