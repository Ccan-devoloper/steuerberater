import "../data/kst-einheit-2-register.js";
import "../data/kst-einheit-5-register.js";
import "../data/kst-einheit-6-register.js";
import "../data/k1-ust-einheit-2-nachtrag-register.js";
import "../data/k1-ust-einheit-3-register.js";
import "../data/k1-ust-einheit-4-register.js";
import "../data/k1-ust-einheit-5-register.js";
import "../data/k1-ust-einheit-6-register.js";
import "../data/k1-ust-einheit-7-register.js";
import "../data/k1-ust-einheit-8-register.js";
import React, { useCallback, useEffect, useState } from "react";
import App from "../App";
import K1Campus from "./K1Campus";
import K1OriginalfallAufgabenEnhancer from "./K1OriginalfallAufgabenEnhancer";
import K1Einheit7Enhancer from "./K1Einheit7Enhancer";
import K1Einheit8Enhancer from "./K1Einheit8Enhancer";
import KstCampus from "./KstCampus";
import { kstQuellen } from "../data/kst-module";
import { laden, sichern } from "../lib/fortschritt";

/* Reiner Bilanzstoff gehört ausschließlich in Klausur 3 und erscheint daher
   auch nicht als bloßer Quellenhinweis im KSt-Campus. */
const kstQuellenOhneK3 = kstQuellen.filter((quelle) => quelle.title !== "Notiz 30.07.2026");
kstQuellen.splice(0, kstQuellen.length, ...kstQuellenOhneK3);

export default function CampusShell() {
  const [campus, setCampus] = useState(() => laden("stb-campus", "k3"));

  const wechseln = useCallback((ziel) => {
    setCampus(ziel);
    sichern("stb-campus", ziel);
  }, []);

  /* App und KstCampus stammen aus der Zeit, in der K1 noch nicht existierte und
     rendern den ersten Klausur-Tab deshalb mit `disabled`. Bis die drei Campus
     eine gemeinsame Tab-Komponente nutzen, wird genau dieser eine Tab zentral
     aktiviert und auf den neuen K1-Campus geroutet. Der Observer hält die
     Verdrahtung auch nach internen Re-Renders der beiden Alt-Campus stabil. */
  useEffect(() => {
    if (campus === "k1") return undefined;

    const verdrahten = () => {
      const button = document.querySelector(".klausuren .klausur:first-child");
      if (!button) return;
      if (button.disabled) button.disabled = false;
      button.setAttribute("aria-disabled", "false");
      button.setAttribute("title", "Klausur 1 öffnen");
      button.dataset.k1Bridge = "true";
      button.onclick = () => wechseln("k1");
    };

    verdrahten();
    const observer = new MutationObserver(verdrahten);
    observer.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["disabled"] });

    return () => {
      observer.disconnect();
      const button = document.querySelector(".klausuren .klausur:first-child[data-k1-bridge='true']");
      if (button) button.onclick = null;
    };
  }, [campus, wechseln]);

  if (campus === "k1") {
    return (
      <>
        <K1Campus onKlausurwechsel={wechseln} />
        <K1OriginalfallAufgabenEnhancer />
        <K1Einheit7Enhancer />
        <K1Einheit8Enhancer />
      </>
    );
  }
  if (campus === "kst") return <KstCampus onKlausurwechsel={wechseln} />;

  return <App onKlausurwechsel={wechseln} />;
}
