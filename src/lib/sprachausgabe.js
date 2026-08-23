import { useCallback, useEffect, useRef, useState } from "react";

/* Vorlesestimme über die Web Speech API des Browsers: kostenlos, offline und
   ohne Fremddienst. Nicht jedes System bringt eine deutsche Stimme mit – dann
   meldet der Hook "nichtVerfuegbar" und das Video läuft stumm weiter. */

function deutscheStimme(stimmen) {
  const deutsche = stimmen.filter((s) => /^de/i.test(s.lang));
  if (!deutsche.length) return null;
  /* Lokal installierte Stimmen klingen gleichmäßiger und brauchen kein Netz. */
  return deutsche.find((s) => s.localService) || deutsche[0];
}

export function useSprachausgabe() {
  const [stimme, setStimme] = useState(null);
  const [bereit, setBereit] = useState(false);
  const aktuelleRef = useRef(null);
  const keepaliveRef = useRef(null);

  useEffect(() => {
    const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
    if (!synth) { setBereit(true); return undefined; }

    const uebernehmen = () => {
      setStimme(deutscheStimme(synth.getVoices() || []));
      setBereit(true);
    };
    uebernehmen();
    synth.addEventListener?.("voiceschanged", uebernehmen);
    /* Manche Browser liefern die Liste erst verzögert nach. */
    const nachzuegler = window.setTimeout(uebernehmen, 800);

    return () => {
      synth.removeEventListener?.("voiceschanged", uebernehmen);
      window.clearTimeout(nachzuegler);
      synth.cancel();
    };
  }, []);

  const stoppen = useCallback(() => {
    const synth = window.speechSynthesis;
    if (keepaliveRef.current) { window.clearInterval(keepaliveRef.current); keepaliveRef.current = null; }
    if (aktuelleRef.current) { aktuelleRef.current.onend = null; aktuelleRef.current.onerror = null; aktuelleRef.current = null; }
    synth?.cancel();
  }, []);

  /* Spricht den Text und ruft fertig() am Ende auf. Rückgabe: Abbruchfunktion. */
  const sprechen = useCallback((text, { tempo = 1, fertig } = {}) => {
    const synth = window.speechSynthesis;
    if (!synth || !stimme || !text) { fertig?.(); return () => {}; }
    synth.cancel();

    const aeusserung = new SpeechSynthesisUtterance(text);
    aeusserung.voice = stimme;
    aeusserung.lang = stimme.lang;
    aeusserung.rate = Math.min(2, Math.max(0.5, tempo));
    aeusserung.pitch = 1;

    let beendet = false;
    const abschliessen = () => {
      if (beendet) return;
      beendet = true;
      if (keepaliveRef.current) { window.clearInterval(keepaliveRef.current); keepaliveRef.current = null; }
      fertig?.();
    };
    aeusserung.onend = abschliessen;
    /* "interrupted"/"canceled" entstehen beim bewussten Umschalten – die zählen
       nicht als Fehler, sonst würde das Video eine Szene überspringen. */
    aeusserung.onerror = (e) => {
      if (e?.error === "interrupted" || e?.error === "canceled") return;
      abschliessen();
    };

    aktuelleRef.current = aeusserung;
    synth.speak(aeusserung);

    /* Chromium bricht lange Äußerungen nach etwa 15 Sekunden ab; ein kurzes
       pause/resume im Takt hält die Ausgabe am Leben. */
    keepaliveRef.current = window.setInterval(() => {
      if (!synth.speaking || synth.paused) return;
      synth.pause();
      synth.resume();
    }, 9000);

    return abschliessen;
  }, [stimme]);

  const pausieren = useCallback(() => { window.speechSynthesis?.pause(); }, []);
  const fortsetzen = useCallback(() => { window.speechSynthesis?.resume(); }, []);

  return { verfuegbar: !!stimme, bereit, stimmenname: stimme?.name || null, sprechen, stoppen, pausieren, fortsetzen };
}
