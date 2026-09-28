/* Prüft die ESt-Fallsammlungen (Struktur, Tabellen, Wasserzeichen).

   Die Fallrepetitorien weisen keine Randpunkte aus; geprüft werden
   Pflichtfelder, Blockstruktur und Tabellenbreiten. Zusätzlich wird geprüft,
   dass jeder Fall einer Fallsammlung und einem Fachtermin zugeordnet ist und
   dass die Sammlungen eindeutig beschriftet sind.

   Aufruf: node tools/pruefen-est-fallsammlungen.mjs */
import { estFallsammlungen, estFallsammlungenQuelle } from "../src/data/est-fallsammlungen.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

const label = new Map();
const fehler = [];
for (const fall of estFallsammlungen) {
  const vorhanden = label.get(fall.sammlung);
  if (vorhanden === undefined) label.set(fall.sammlung, fall.sammlungLabel);
  else if (vorhanden !== fall.sammlungLabel) {
    fehler.push(`${fall.id}: Sammlung ${fall.sammlung} trägt zwei Beschriftungen ("${vorhanden}" und "${fall.sammlungLabel}")`);
  }
}
if (fehler.length) {
  console.error(`ESt-Fallsammlungen: ${fehler.length} Fehler`);
  fehler.forEach((f) => console.error(` - ${f}`));
  process.exit(1);
}

pruefeHausaufgaben({
  name: "ESt-Fallsammlungen",
  quelle: estFallsammlungenQuelle,
  hausaufgaben: estFallsammlungen,
  pflichtfelder: ["sammlung", "sammlungLabel", "termin", "verfasser"],
  einheit: "Fälle",
});

console.log(`Sammlungen: ${[...label.values()].join(", ")}.`);
