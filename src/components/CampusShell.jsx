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
import React, { useCallback, useState } from "react";
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
