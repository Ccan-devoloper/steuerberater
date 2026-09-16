/* Prüft die ESt-Hausaufgaben (Struktur, Tabellen, Wasserzeichen).

   Die ESt-Musterlösungen weisen keine Randpunkte aus; geprüft werden daher
   Pflichtfelder, Blockstruktur und Tabellenbreiten.

   Aufruf: node tools/pruefen-est-hausaufgaben.mjs */
import { estHausaufgaben, estHausaufgabenQuelle } from "../src/data/est-hausaufgaben.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "ESt-Hausaufgaben",
  quelle: estHausaufgabenQuelle,
  hausaufgaben: estHausaufgaben,
  pflichtfelder: ["termin"],
});
