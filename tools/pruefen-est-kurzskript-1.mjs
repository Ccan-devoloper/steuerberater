/* Prüft das ESt-Kurzskript I (Engelberth).

   Geprüft werden Pflichtfelder, Blockstruktur, Tabellenbreiten, das
   personenbezogene Wasserzeichen aus dem Quell-PDF sowie - weil das Skript
   mehrteilig ist und die Nummerierung je Teil neu beginnt - dass die Kapitel
   eines Teils zusammenstehen und innerhalb des Teils lückenlos
   durchnummeriert sind.

   Aufruf: node tools/pruefen-est-kurzskript-1.mjs */
import { estKurzskript1, estKurzskript1Quelle } from "../src/data/est-kurzskript-1.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "ESt-Kurzskript I",
  quelle: estKurzskript1Quelle,
  kapitel: estKurzskript1,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
