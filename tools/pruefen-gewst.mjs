/* Prüft die GewSt-Bestände (Struktur, Tabellen, Wasserzeichen).

   Geprüft werden Pflichtfelder, Blockstruktur und Tabellenbreiten – für die
   Hausaufgaben wie für die Übungsfälle der Fallsammlung. Zusätzlich wird
   geprüft, dass jeder Eintrag einem Fachtermin und einem Verfasser zugeordnet
   ist.

   Das Kurzskript hat eine eigene Form (Kapitel mit einer Blockliste statt
   Sachverhalt/Aufgabe/Lösung) und wird deshalb über pruefen-kurzskript-bloecke
   geprüft: Pflichtfelder, lückenlose Kapitelnummern, Blockstruktur,
   Tabellenbreiten und das personenbezogene Wasserzeichen aus dem Quell-PDF.

   Aufruf: node tools/pruefen-gewst.mjs */
import { gewstHausaufgaben, gewstHausaufgabenQuelle } from "../src/data/gewst-hausaufgaben.js";
import { gewstUebungsfaelle, gewstUebungsfaelleQuelle } from "../src/data/gewst-uebungsfaelle.js";
import { gewstKurzskript, gewstKurzskriptQuelle } from "../src/data/gewst-kurzskript.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

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

pruefeKurzskript({
  name: "GewSt-Kurzskript",
  quelle: gewstKurzskriptQuelle,
  kapitel: gewstKurzskript,
});
