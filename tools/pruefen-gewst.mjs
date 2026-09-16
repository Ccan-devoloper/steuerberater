/* Prüft die GewSt-Bestände (Struktur, Tabellen, Wasserzeichen).

   Geprüft werden Pflichtfelder, Blockstruktur und Tabellenbreiten – für die
   Hausaufgaben wie für die Übungsfälle der Fallsammlung. Zusätzlich wird
   geprüft, dass jeder Eintrag einem Fachtermin und einem Verfasser zugeordnet
   ist.

   Aufruf: node tools/pruefen-gewst.mjs */
import { gewstHausaufgaben, gewstHausaufgabenQuelle } from "../src/data/gewst-hausaufgaben.js";
import { gewstUebungsfaelle, gewstUebungsfaelleQuelle } from "../src/data/gewst-uebungsfaelle.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "GewSt-Hausaufgaben",
  quelle: gewstHausaufgabenQuelle,
  hausaufgaben: gewstHausaufgaben,
  pflichtfelder: ["termin", "verfasser"],
});

pruefeHausaufgaben({
  name: "GewSt-Übungsfälle",
  quelle: gewstUebungsfaelleQuelle,
  hausaufgaben: gewstUebungsfaelle,
  pflichtfelder: ["termin", "verfasser"],
  einheit: "Übungsfälle",
});
