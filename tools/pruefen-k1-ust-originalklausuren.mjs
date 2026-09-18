/* Prüft die USt-Originalklausuren (Struktur, Tabellen, Wasserzeichen).

   Aufruf: node tools/pruefen-k1-ust-originalklausuren.mjs */
import { ustOriginalklausuren, ustOriginalklausurenQuelle } from "../src/data/k1-ust-originalklausuren.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "USt-Originalklausuren",
  quelle: ustOriginalklausurenQuelle,
  hausaufgaben: ustOriginalklausuren,
  pflichtfelder: ["nummer", "verfasser", "block", "blockLabel", "jahrgang"],
  einheit: "Originalklausuren",
});
