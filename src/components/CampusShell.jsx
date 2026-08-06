import "../data/kst-einheit-2-register.js";
import "../data/kst-einheit-5-register.js";
import "../data/kst-einheit-6-register.js";
import React, { useCallback, useState } from "react";
import App from "../App";
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

  if (campus === "kst") return <KstCampus onKlausurwechsel={wechseln} />;

  return <App onKlausurwechsel={wechseln} />;
}
