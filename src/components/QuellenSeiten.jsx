import React, { useEffect, useState } from "react";
import "./quellen-seiten.css";

/** Nur lokale, versionierte Quellenabbildungen. Keine externen Tracking-URLs. */
export function quellenAsset(path) {
  if (typeof path !== "string" || !/^endriss\/[a-zA-Z0-9_./-]+$/.test(path) || path.includes("..")) return null;
  return `${import.meta.env.BASE_URL}${path}`;
}

export default function QuellenSeiten({ seiten = [], titel = "Originalseiten zur Kontrolle", offen = false }) {
  const [geoeffnet, setGeoeffnet] = useState(offen);
  const [index, setIndex] = useState(0);
  const [fehler, setFehler] = useState(false);
  useEffect(() => { setIndex(0); setFehler(false); }, [seiten]);
  const seite = seiten[Math.min(index, Math.max(0, seiten.length - 1))];
  const src = quellenAsset(seite?.src);
  const wechseln = (neu) => { setIndex(Math.max(0, Math.min(seiten.length - 1, neu))); setFehler(false); };
  if (!seiten.length) return null;
  return (
    <details className="quellen-seiten" open={geoeffnet} onToggle={(e) => setGeoeffnet(e.currentTarget.open)}>
      <summary>{titel} · {seiten.length} {seiten.length === 1 ? "Seite" : "Seiten"}</summary>
      {geoeffnet && (
        <div className="quellen-seiten__inhalt">
          <nav className="quellen-seiten__steuerung" aria-label="Originalseiten durchblättern">
            <button type="button" disabled={index === 0} onClick={() => wechseln(index - 1)}>← Vorherige</button>
            <label>Seite wählen
              <select value={index} onChange={(e) => wechseln(Number(e.target.value))}>
                {seiten.map((s, i) => <option key={`${s.src}-${i}`} value={i}>
                  {s.druckseite ? `Skript-S. ${s.druckseite} · ` : ""}PDF-S. {s.pdfSeite ?? s.page ?? i + 1}
                  {s.member ? ` · ${s.member}` : ""}
                </option>)}
              </select>
            </label>
            <button type="button" disabled={index >= seiten.length - 1} onClick={() => wechseln(index + 1)}>Nächste →</button>
          </nav>
          <p className="quellen-seiten__stand" aria-live="polite">
            {index + 1} von {seiten.length} · {seite.druckseite ? `Skriptseite ${seite.druckseite} · ` : ""}
            PDF-Seite {seite.pdfSeite ?? seite.page ?? index + 1}
            {seite.caption ? ` · ${seite.caption}` : ""}
          </p>
          {seite.hinweis && <p className="quellen-seiten__stand">{seite.hinweis}</p>}
          {!src || fehler ? <p role="alert">Die Quellenabbildung konnte nicht geladen werden. Bitte die Seite erneut öffnen.</p> : (
            <figure>
              <a href={src} target="_blank" rel="noopener noreferrer" aria-label="Quellenabbildung in voller Größe öffnen">
                <img key={src} src={src} alt={seite.alt || `Quellenseite ${seite.pdfSeite ?? seite.page ?? index + 1}`}
                  width={seite.width} height={seite.height} loading="lazy" decoding="async" onError={() => setFehler(true)} />
              </a>
              <figcaption>Originaldarstellung. Zum Vergrößern auf die Abbildung klicken. Der Quellenstand wird unverändert wiedergegeben.</figcaption>
            </figure>
          )}
        </div>
      )}
    </details>
  );
}
