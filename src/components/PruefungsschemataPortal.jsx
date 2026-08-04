import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Pruefungsschemata from "./Pruefungsschemata";
import SchemaPostitEnhancer from "./SchemaPostitEnhancer";

const ATTRIBUT = "data-pruefungsschemata-portal";

function istSchemaseite(page) {
  if (!page) return false;
  return [...page.querySelectorAll(".pagehead .kicker")]
    .some((element) => element.textContent?.trim() === "Prüfungsschema");
}

export default function PruefungsschemataPortal() {
  const [ziel, setZiel] = useState(null);

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return undefined;

    const aktualisieren = () => {
      const page = document.querySelector("main.page");
      const vorhanden = document.querySelector(`[${ATTRIBUT}]`);

      if (!istSchemaseite(page)) {
        vorhanden?.remove();
        setZiel(null);
        return;
      }

      if (vorhanden && vorhanden.isConnected) {
        setZiel(vorhanden);
        return;
      }

      const container = document.createElement("div");
      container.setAttribute(ATTRIBUT, "");

      const abba = [...page.children].find((element) => element.classList?.contains("abba"));
      if (abba) abba.insertAdjacentElement("afterend", container);
      else page.querySelector(".pagehead")?.insertAdjacentElement("afterend", container);

      setZiel(container);
    };

    aktualisieren();
    const observer = new MutationObserver(aktualisieren);
    observer.observe(root, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      document.querySelector(`[${ATTRIBUT}]`)?.remove();
    };
  }, []);

  return ziel ? createPortal(
    <>
      <Pruefungsschemata />
      <SchemaPostitEnhancer root={ziel} />
    </>,
    ziel,
  ) : null;
}
