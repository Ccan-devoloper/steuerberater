/* Prüft das UmwSt-Kurz-Skript (Breier).

   Geprüft werden Pflichtfelder, Blockstruktur, Tabellenbreiten, das
   personenbezogene Wasserzeichen aus dem Quell-PDF und – weil die
   Abschnittsnummerierung je Teil neu beginnt – dass die Abschnitte eines
   Teils zusammenstehen und lückenlos durchnummeriert sind.

   Aufruf: node tools/pruefen-k3-umwst-kurzskript.mjs */
import { umwstKurzskript, umwstKurzskriptQuelle } from "../src/data/k3-umwst-kurzskript-breier.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "UmwSt-Kurz-Skript (Breier)",
  quelle: umwstKurzskriptQuelle,
  kapitel: umwstKurzskript,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
