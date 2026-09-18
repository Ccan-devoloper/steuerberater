/* Hervorhebungen in Fließtexten der Datensätze.

   Leads, Didaktik-Absätze und einzelne Textblöcke markieren wichtige Stellen
   mit **…**. Die beiden Blockrenderer geben ihren Text aber wörtlich aus, so
   dass die Sternchen bisher sichtbar blieben. Diese Funktion wandelt sie in
   <strong> um und lässt jeden Text ohne Sternchen unverändert. */
import React from "react";

const MUSTER = /\*\*(.+?)\*\*/g;

export function mitHervorhebung(text) {
  if (typeof text !== "string" || !text.includes("**")) return text;
  return text
    .split(MUSTER)
    .map((teil, i) => (i % 2 === 1 ? React.createElement("strong", { key: i }, teil) : teil));
}

export default mitHervorhebung;
