import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Schaubild from "./Schaubild";
import { useSprachausgabe } from "../lib/sprachausgabe";
import { szenenAusModul, alsSprechtext, anzeigedauer, kapitelListe } from "../lib/erklaervideo-szenen";
import { laden, sichern } from "../lib/fortschritt";
import "./erklaervideo.css";

const TEMPI = [0.85, 1, 1.25, 1.5];

/* Die einzelne Szene. Bewusst ohne eigene Zustände: Was gezeigt wird, ergibt
   sich allein aus dem Szenenobjekt, damit Springen und Zurückspulen immer
   dasselbe Bild erzeugen. */
function Bild({ visual }) {
  if (!visual) return null;

  if (visual.typ === "titel") {
    return (
      <div className="ev-bild ev-bild--titel">
        <span className="kicker">{visual.kicker}</span>
        <h3>{visual.titel}</h3>
        {visual.law && <p className="ev-norm">{visual.law}</p>}
        {visual.dauer && <span className="ev-dauer">{visual.dauer} Minuten Lernzeit</span>}
      </div>
    );
  }

  if (visual.typ === "schaubild") {
    return (
      <div className="ev-bild ev-bild--schaubild">
        <p className="ev-satz">{visual.text}</p>
        <div className="ev-schaubild"><Schaubild id={visual.id} /></div>
      </div>
    );
  }

  if (visual.typ === "liste") {
    return (
      <div className="ev-bild ev-bild--liste">
        <h4>{visual.titel}</h4>
        <ol className={`ev-liste ev-liste--${visual.stil}`}>
          {visual.punkte.map((p, i) => (
            <li key={i} className={i === visual.aktiv ? "ev-liste__aktiv" : i < visual.aktiv ? "ev-liste__erledigt" : ""}>
              <span className="ev-liste__marke">{visual.stil === "haken" ? (i <= visual.aktiv ? "✓" : "") : i + 1}</span>
              <span>{p}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (visual.typ === "normen") {
    return (
      <div className="ev-bild ev-bild--normen">
        <h4>Normenkette</h4>
        <div className="ev-normen">{visual.punkte.map((n, i) => <span key={i} className="ev-chip">{n}</span>)}</div>
      </div>
    );
  }

  if (visual.typ === "fall") {
    return (
      <div className={`ev-bild ev-bild--fall ev-bild--${visual.rolle}`}>
        {visual.titel && <span className="kicker">{visual.titel}</span>}
        <h4>{visual.rolle === "sachverhalt" ? "Sachverhalt" : visual.rolle === "loesung" ? "Lösung" : "Ergebnis"}</h4>
        {visual.punkte ? (
          <ol className="ev-liste ev-liste--schritte">
            {visual.punkte.map((p, i) => (
              <li key={i} className={i === visual.aktiv ? "ev-liste__aktiv" : i < visual.aktiv ? "ev-liste__erledigt" : ""}>
                <span className="ev-liste__marke">{i + 1}</span><span>{p}</span>
              </li>
            ))}
          </ol>
        ) : <p className="ev-satz">{visual.text}</p>}
      </div>
    );
  }

  if (visual.typ === "merksatz") {
    return <div className="ev-bild ev-bild--merksatz"><h4>Merksatz</h4><p className="ev-satz ev-satz--gross">{visual.text}</p></div>;
  }

  if (visual.typ === "falle") {
    return (
      <div className="ev-bild ev-bild--falle">
        <h4>Typische Falle</h4>
        <ul className="ev-liste ev-liste--fallen">
          {visual.punkte.map((p, i) => (
            <li key={i} className={i === visual.aktiv ? "ev-liste__aktiv" : ""}><span className="ev-liste__marke">!</span><span>{p}</span></li>
          ))}
        </ul>
      </div>
    );
  }

  return <div className="ev-bild"><p className="ev-satz">{visual.text}</p></div>;
}

export default function Erklaervideo({ modul, bereichName = "" }) {
  const szenen = useMemo(() => szenenAusModul(modul, bereichName), [modul, bereichName]);
  const kapitel = useMemo(() => kapitelListe(szenen), [szenen]);
  const [offen, setOffen] = useState(false);
  const [index, setIndex] = useState(0);
  const [laeuft, setLaeuft] = useState(false);
  const [ton, setTon] = useState(() => laden("stb-video-ton", true));
  const [tempo, setTempo] = useState(() => laden("stb-video-tempo", 1));
  const abbruchRef = useRef(null);
  const sprache = useSprachausgabe();

  const szene = szenen[index];
  const mitStimme = ton && sprache.verfuegbar;

  useEffect(() => { sichern("stb-video-ton", ton); }, [ton]);
  useEffect(() => { sichern("stb-video-tempo", tempo); }, [tempo]);

  const anhalten = useCallback(() => {
    abbruchRef.current?.();
    abbruchRef.current = null;
    sprache.stoppen();
  }, [sprache]);

  /* Ein Effekt steuert den Ablauf: Bei Stimme endet die Szene mit dem
     Sprechen, sonst nach einer aus der Textlänge berechneten Zeit. */
  useEffect(() => {
    if (!offen || !laeuft || !szene) return undefined;
    let abgelaufen = false;
    const weiter = () => {
      if (abgelaufen) return;
      abgelaufen = true;
      setIndex((i) => (i + 1 < szenen.length ? i + 1 : (setLaeuft(false), i)));
    };

    if (mitStimme) {
      const abbrechen = sprache.sprechen(alsSprechtext(szene.text), { tempo, fertig: weiter });
      abbruchRef.current = abbrechen;
      return () => { abgelaufen = true; abbruchRef.current = null; sprache.stoppen(); };
    }

    const timer = window.setTimeout(weiter, anzeigedauer(szene.text, tempo));
    return () => { abgelaufen = true; window.clearTimeout(timer); };
  }, [offen, laeuft, index, szene, mitStimme, tempo, szenen.length, sprache]);

  /* Beim Schließen oder Modulwechsel verstummt die Stimme sofort. */
  useEffect(() => () => sprache.stoppen(), [sprache]);
  useEffect(() => { setIndex(0); setLaeuft(false); anhalten(); }, [modul?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const springen = (ziel) => {
    anhalten();
    setIndex(Math.max(0, Math.min(szenen.length - 1, ziel)));
  };

  const abspielenUmschalten = () => {
    if (laeuft) { anhalten(); setLaeuft(false); return; }
    if (index >= szenen.length - 1) setIndex(0);
    setLaeuft(true);
  };

  if (!szenen.length) return null;

  if (!offen) {
    return (
      <button className="ev-start" onClick={() => { setOffen(true); setIndex(0); setLaeuft(true); }}>
        <span className="ev-start__play" aria-hidden="true">▶</span>
        <span>
          <strong>Erklärvideo starten</strong>
          <small>{szenen.length} Szenen · {kapitel.length} Kapitel{sprache.verfuegbar ? " · mit Vorlesestimme" : ""}</small>
        </span>
      </button>
    );
  }

  const fortschritt = ((index + 1) / szenen.length) * 100;

  return (
    <section className="ev" aria-label={`Erklärvideo zu ${modul.title}`}>
      <header className="ev__kopf">
        <div>
          <span className="kicker">Erklärvideo · {szene.kapitel}</span>
          <strong>{modul.title}</strong>
        </div>
        <button className="ev__schliessen" onClick={() => { anhalten(); setLaeuft(false); setOffen(false); }} aria-label="Erklärvideo schließen">✕</button>
      </header>

      <div className="ev__buehne" key={index}>
        <Bild visual={szene.visual} />
      </div>

      <div className="ev__fortschritt" role="progressbar" aria-valuenow={index + 1} aria-valuemin={1} aria-valuemax={szenen.length}>
        <span style={{ width: `${fortschritt}%` }} />
      </div>

      <div className="ev__steuerung">
        <div className="ev__knoepfe">
          <button onClick={() => springen(index - 1)} disabled={index === 0} aria-label="Vorherige Szene" title="Vorherige Szene">⏮</button>
          <button className="ev__play" onClick={abspielenUmschalten} aria-label={laeuft ? "Pause" : "Abspielen"}>{laeuft ? "⏸" : "▶"}</button>
          <button onClick={() => springen(index + 1)} disabled={index >= szenen.length - 1} aria-label="Nächste Szene" title="Nächste Szene">⏭</button>
          <span className="ev__zaehler">{index + 1} / {szenen.length}</span>
        </div>

        <div className="ev__optionen">
          <button
            className={`ev__option${mitStimme ? " ev__option--an" : ""}`}
            onClick={() => setTon((t) => !t)}
            disabled={!sprache.verfuegbar}
            title={sprache.verfuegbar ? `Stimme: ${sprache.stimmenname}` : "Auf diesem Gerät ist keine deutsche Stimme installiert – das Video läuft stumm."}
          >
            {mitStimme ? "🔊 Ton an" : sprache.verfuegbar ? "🔇 Ton aus" : "🔇 keine Stimme"}
          </button>
          <div className="ev__tempo" role="group" aria-label="Tempo">
            {TEMPI.map((t) => (
              <button key={t} className={t === tempo ? "ev__tempo--aktiv" : ""} onClick={() => { setTempo(t); if (laeuft) { anhalten(); setLaeuft(false); window.setTimeout(() => setLaeuft(true), 60); } }}>
                {t}×
              </button>
            ))}
          </div>
        </div>
      </div>

      <nav className="ev__kapitel" aria-label="Kapitel">
        {kapitel.map((k) => (
          <button
            key={k.name + k.start}
            className={index >= k.start && index < k.start + k.laenge ? "ev__kapitel--aktiv" : ""}
            onClick={() => springen(k.start)}
          >
            {k.name}
          </button>
        ))}
      </nav>
    </section>
  );
}
