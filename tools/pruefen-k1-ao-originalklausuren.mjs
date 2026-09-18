/* Prüft die AO-Originalklausuren (Struktur, Tabellen, Randpunkte, Wasserzeichen).

   Aufruf: node tools/pruefen-k1-ao-originalklausuren.mjs */
import { aoOriginalklausuren, aoOriginalklausurenQuelle } from "../src/data/k1-ao-originalklausuren.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "AO-Originalklausuren",
  quelle: aoOriginalklausurenQuelle,
  hausaufgaben: aoOriginalklausuren,
  pflichtfelder: ["nummer", "verfasser", "block", "blockLabel", "jahrgang"],
  einheit: "Originalklausuren",
});
