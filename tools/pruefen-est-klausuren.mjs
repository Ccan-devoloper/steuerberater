/* Prüft die ESt-Übungsklausuren (Struktur, Tabellen, Wasserzeichen).

   Zusätzlich zur gemeinsamen Blockprüfung wird geprüft, dass jeder Eintrag
   einer Klausur und einem Aufgabenteil zugeordnet ist, dass die Klausuren
   eindeutig beschriftet sind und dass die Aufgabenteile einer Klausur
   zusammenstehen und nicht doppelt vergeben sind.

   Aufruf: node tools/pruefen-est-klausuren.mjs */
import { estKlausuren, estKlausurenQuelle } from "../src/data/est-klausuren.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

const label = new Map();
const teile = new Map();
const fehler = [];
for (const eintrag of estKlausuren) {
  const vorhanden = label.get(eintrag.klausur);
  if (vorhanden === undefined) label.set(eintrag.klausur, eintrag.klausurLabel);
  else if (vorhanden !== eintrag.klausurLabel) {
    fehler.push(`${eintrag.id}: Klausur ${eintrag.klausur} trägt zwei Beschriftungen ("${vorhanden}" und "${eintrag.klausurLabel}")`);
  }
  const gesehen = teile.get(eintrag.klausur) ?? new Set();
  if (gesehen.has(eintrag.teil)) fehler.push(`${eintrag.id}: Aufgabenteil ${eintrag.teil} ist in dieser Klausur doppelt vergeben`);
  gesehen.add(eintrag.teil);
  teile.set(eintrag.klausur, gesehen);
}
if (fehler.length) {
  console.error(`ESt-Klausuren: ${fehler.length} Fehler`);
  fehler.forEach((f) => console.error(` - ${f}`));
  process.exit(1);
}

pruefeHausaufgaben({
  name: "ESt-Klausuren",
  quelle: estKlausurenQuelle,
  hausaufgaben: estKlausuren,
  pflichtfelder: ["klausur", "klausurLabel", "teil", "fachgebiet", "bearbeitungszeit", "verfasser"],
  einheit: "Aufgabenteile",
});

console.log(`Klausuren: ${[...label.values()].join(", ")}.`);
