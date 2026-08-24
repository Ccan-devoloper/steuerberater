import React, { useState } from "react";
import { videoUrl, vorschauUrl, videoEintrag } from "../lib/video";
import "./modulvideo.css";

/* Erklärvideo eines Moduls, ausgeliefert aus dem Objektspeicher.

   Bewusst mit preload="none": Ohne Klick wird kein einziges Byte geladen,
   sonst würde schon das Öffnen einer Modulseite Datenverkehr verursachen.
   Fehlt die Datei oder ist keine Basisadresse gesetzt, rendert die Komponente
   nichts – die Seite bleibt dann unverändert. */
export default function Modulvideo({ campus, modul }) {
  const [laeuft, setLaeuft] = useState(false);
  const url = videoUrl(campus, modul.id);
  const eintrag = videoEintrag(campus, modul.id);
  if (!url) return null;

  const dauer = eintrag?.dauer
    ? `${Math.floor(eintrag.dauer / 60)}:${String(Math.round(eintrag.dauer % 60)).padStart(2, "0")} Min`
    : null;

  if (!laeuft) {
    return (
      <button className="mv-start" onClick={() => setLaeuft(true)}>
        <span className="mv-start__play" aria-hidden="true">▶</span>
        <span>
          <strong>Erklärvideo ansehen</strong>
          <small>{[dauer, "mit Fall und Rechenweg"].filter(Boolean).join(" · ")}</small>
        </span>
      </button>
    );
  }

  return (
    <figure className="mv">
      <video
        className="mv__player"
        src={url}
        poster={vorschauUrl(campus, modul.id) || undefined}
        controls
        autoPlay
        preload="none"
        playsInline
      >
        Ihr Browser kann dieses Video nicht abspielen.
        <a href={url}>Datei herunterladen</a>
      </video>
      <figcaption>
        Erklärvideo zu Modul {modul.id} · {modul.title}
        <button className="mv__zu" onClick={() => setLaeuft(false)}>schließen</button>
      </figcaption>
    </figure>
  );
}
