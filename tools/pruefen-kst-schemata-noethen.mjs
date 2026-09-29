/* Prüft die KSt-Prüfungsschemata (Nöthen).

   Aufruf: node tools/pruefen-kst-schemata-noethen.mjs */
import { kstSchemataNoethen, kstSchemataNoethenQuelle } from "../src/data/kst-schemata-noethen.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "KSt-Schemata (Nöthen)",
  quelle: kstSchemataNoethenQuelle,
  kapitel: kstSchemataNoethen,
});
