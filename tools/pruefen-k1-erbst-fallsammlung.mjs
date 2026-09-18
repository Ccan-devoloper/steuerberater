/* Prüft die ErbSt-Fallsammlung (Struktur, Tabellen, Wasserzeichen).

   Die Musterlösungen der Fallsammlung weisen keine Randpunkte aus; geprüft
   werden daher Pflichtfelder, Blockstruktur und Tabellenbreiten.

   Aufruf: node tools/pruefen-k1-erbst-fallsammlung.mjs */
import { erbstFallsammlung, erbstFallsammlungQuelle } from "../src/data/k1-erbst-fallsammlung.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "ErbSt-Fallsammlung",
  quelle: erbstFallsammlungQuelle,
  hausaufgaben: erbstFallsammlung,
  pflichtfelder: ["nummer", "verfasser", "block", "blockLabel"],
  einheit: "Übungsfälle",
});
