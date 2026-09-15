/* Prüft die ErbSt-Hausaufgaben (Struktur, Tabellen, Wasserzeichen).

   Die ErbSt-Musterlösungen weisen keine Randpunkte aus; geprüft werden daher
   Pflichtfelder, Blockstruktur und Tabellenbreiten.

   Aufruf: node tools/pruefen-k1-erbst-hausaufgaben.mjs */
import { erbstHausaufgaben, erbstHausaufgabenQuelle } from "../src/data/k1-erbst-hausaufgaben.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "ErbSt-Hausaufgaben",
  quelle: erbstHausaufgabenQuelle,
  hausaufgaben: erbstHausaufgaben,
  pflichtfelder: ["nummer", "verfasser"],
});
