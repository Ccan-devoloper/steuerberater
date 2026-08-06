import React, { memo, useMemo } from "react";
import { teileHausaufgabenSeiten } from "../data/hausaufgaben-seiten";
import "./HausaufgabenDokument.css";

function HausaufgabenDokument({ text, bezeichnung, ersteSeite = null }) {
  const seiten = useMemo(
    () => teileHausaufgabenSeiten(text, ersteSeite),
    [text, ersteSeite],
  );

  return (
    <div className="hausaufgabe__pdf-dokument">
      {seiten.map((seite, index) => {
        const seitentitel = seite.nummer
          ? `PDF-Seite ${seite.nummer}`
          : `${bezeichnung} · Abschnitt ${index + 1}`;
        return (
          <section className="hausaufgabe__pdf-seite" key={`${seite.nummer ?? "abschnitt"}-${index}`}>
            <header className="hausaufgabe__pdf-seitenkopf">
              <span>{bezeichnung}</span>
              <b>{seitentitel}</b>
            </header>
            <div
              className="hausaufgabe__pdf-scroll"
              role="region"
              aria-label={`${bezeichnung}, ${seitentitel}`}
              tabIndex={0}
            >
              <pre className="hausaufgabe__pdf-text">{seite.text}</pre>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default memo(HausaufgabenDokument);
