/* Prüft das Skript Grunderwerbsteuer (Vossel).

   Aufruf: node tools/pruefen-k1-grest-skript.mjs */
import { grestSkript, grestSkriptQuelle } from "../src/data/k1-grest-skript.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "Skript Grunderwerbsteuer",
  quelle: grestSkriptQuelle,
  kapitel: grestSkript,
  pflichtfelder: ["romisch"],
});
