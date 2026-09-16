/* Prüft die KSt-Übungsfälle (Nöthen).

   Zur Quelle liegt kein Lösungsteil vor; geprüft werden deshalb Pflichtfelder,
   Blockstruktur, Tabellenbreiten und das Wasserzeichen sowie zusätzlich, dass
   jeder Fall einem Teil zugeordnet ist, die Teile eindeutig beschriftet sind
   und dass kein Fall eine erfundene Musterlösung trägt.

   Aufruf: node tools/pruefen-kst-uebungsfaelle.mjs */
import { kstUebungsfaelle, kstUebungsfaelleQuelle } from "../src/data/kst-uebungsfaelle.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

const HINWEIS = "kein Lösungsteil vor";
const label = new Map();
const fehler = [];
for (const fall of kstUebungsfaelle) {
  const vorhanden = label.get(fall.teil);
  if (vorhanden === undefined) label.set(fall.teil, fall.teilLabel);
  else if (vorhanden !== fall.teilLabel) {
    fehler.push(`${fall.id}: Teil ${fall.teil} trägt zwei Beschriftungen ("${vorhanden}" und "${fall.teilLabel}")`);
  }
  /* Solange die Quelle keinen Lösungsteil hat, darf hier auch keiner stehen. */
  const loesungstext = (fall.loesung ?? []).map((b) => b.text ?? "").join(" ");
  if (!loesungstext.includes(HINWEIS)) {
    fehler.push(`${fall.id}: Lösung ohne den Hinweis, dass die Quelle keinen Lösungsteil enthält`);
  }
}
if (fehler.length) {
  console.error(`KSt-Übungsfälle: ${fehler.length} Fehler`);
  fehler.forEach((f) => console.error(` - ${f}`));
  process.exit(1);
}

pruefeHausaufgaben({
  name: "KSt-Übungsfälle",
  quelle: kstUebungsfaelleQuelle,
  hausaufgaben: kstUebungsfaelle,
  pflichtfelder: ["teil", "teilLabel", "verfasser"],
  einheit: "Fälle",
});

console.log(`Teile: ${[...label.values()].join(", ")}.`);
