import React, { useCallback, useEffect, useState } from "react";
import App from "../App";
import KstCampus from "./KstCampus";
import PruefungsschemataPortal from "./PruefungsschemataPortal";
import { laden, sichern } from "../lib/fortschritt";

function Klausur2Activator({ onOpen }) {
  useEffect(() => {
    let button = null;

    const aktivieren = () => {
      const kandidat = document.querySelectorAll(".klausuren .klausur")[1];
      if (!kandidat) return;
      if (button && button !== kandidat) button.removeEventListener("click", onOpen);
      button = kandidat;
      button.disabled = false;
      button.removeAttribute("disabled");
      button.title = "Körperschaftsteuer-Campus öffnen";
      const unterzeile = button.querySelector("small");
      if (unterzeile) unterzeile.textContent = "ESt · KSt verfügbar · GewSt";
      button.removeEventListener("click", onOpen);
      button.addEventListener("click", onOpen);
    };

    aktivieren();
    const observer = new MutationObserver(aktivieren);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      if (button) button.removeEventListener("click", onOpen);
    };
  }, [onOpen]);

  return null;
}

export default function CampusShell() {
  const [campus, setCampus] = useState(() => laden("stb-campus", "k3"));

  const wechseln = useCallback((ziel) => {
    setCampus(ziel);
    sichern("stb-campus", ziel);
  }, []);

  if (campus === "kst") return <KstCampus onKlausurwechsel={wechseln} />;

  return (
    <>
      <App />
      <Klausur2Activator onOpen={() => wechseln("kst")} />
      <PruefungsschemataPortal />
    </>
  );
}
