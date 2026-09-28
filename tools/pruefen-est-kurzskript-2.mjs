/* Prüft das ESt-Kurzskript II (Engelberth).

   Geprüft werden Pflichtfelder, Blockstruktur, Tabellenbreiten, das
   personenbezogene Wasserzeichen aus dem Quell-PDF sowie - weil das Skript
   achtteilig ist und die Nummerierung je Teil neu beginnt - dass die Kapitel
   eines Teils zusammenstehen und innerhalb des Teils lückenlos
   durchnummeriert sind.

   Aufruf: node tools/pruefen-est-kurzskript-2.mjs */
import { estKurzskript2, estKurzskript2Quelle } from "../src/data/est-kurzskript-2.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "ESt-Kurzskript II",
  quelle: estKurzskript2Quelle,
  kapitel: estKurzskript2,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
