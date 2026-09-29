/* Prüft die ErbSt-Originalklausuren (Struktur, Tabellen, Wasserzeichen).

   Die Lösungshinweise der Originalklausuren weisen keine Randpunkte aus;
   geprüft werden daher Pflichtfelder, Blockstruktur und Tabellenbreiten.

   Aufruf: node tools/pruefen-k1-erbst-originalklausuren.mjs */
import { erbstOriginalklausuren, erbstOriginalklausurenQuelle } from "../src/data/k1-erbst-originalklausuren.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "ErbSt-Originalklausuren",
  quelle: erbstOriginalklausurenQuelle,
  hausaufgaben: erbstOriginalklausuren,
  pflichtfelder: ["nummer", "verfasser", "block", "blockLabel"],
  einheit: "Originalklausuren",
});
