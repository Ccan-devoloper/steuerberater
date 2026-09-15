/* Reiter „Hausaufgaben" im Campus Erbschaftsteuer.
   Drei Hausaufgaben mit Lösung; die Rechenwege der Musterlösung stehen als
   Tabellen. Layout aus HausaufgabenBloecke. */
import React from "react";
import HausaufgabenBloecke from "./HausaufgabenBloecke";
import { erbstHausaufgaben, erbstHausaufgabenQuelle } from "../data/k1-erbst-hausaufgaben.js";

export default function K1ErbStHausaufgaben({ onModulOeffnen }) {
  return (
    <HausaufgabenBloecke
      kicker="Klausur 1 · Erbschaftsteuer · Hausaufgaben"
      titel="ErbSt-Hausaufgaben 2026/2027"
      lead="Die Hausaufgaben zum Erbschaftsteuer- und Bewertungsrecht mit Sachverhalt, Aufgabenstellung und Lösungshinweisen im Wortlaut – Bodenwert, Gebäudeertragswert und Steuerberechnung Zeile für Zeile, die Lösung erst auf Klick."
      quelle={erbstHausaufgabenQuelle}
      hausaufgaben={erbstHausaufgaben}
      gruppeVon={(ha) => ha.nummer}
      gruppeLabel={(ha) => `Hausaufgabe ${ha.nummer}`}
      gruppeAria="Hausaufgaben"
      karteKicker={(ha) => `Hausaufgabe ${ha.nummer} · Erbschaftsteuer/Bewertungsrecht`}
      onModulOeffnen={onModulOeffnen}
      suchePlatzhalter="Name, Norm, Stichwort oder Betrag"
    />
  );
}
