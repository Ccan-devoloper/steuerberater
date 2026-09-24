/* Prüft das UmwStR-Lehrgangsskript (Hamacher, Teile I bis V).

   Geprüft werden Pflichtfelder, Blockstruktur, Tabellenbreiten, das
   personenbezogene Wasserzeichen aus dem Quell-PDF und – weil die
   Abschnittsnummerierung je Skriptteil neu beginnt – dass die Abschnitte
   eines Teils zusammenstehen und lückenlos durchnummeriert sind.

   Aufruf: node tools/pruefen-k3-umwstr-skript.mjs */
import { umwstrSkript, umwstrSkriptQuelle } from "../src/data/k3-umwstr-skript-hamacher.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "UmwStR-Skript (Hamacher)",
  quelle: umwstrSkriptQuelle,
  kapitel: umwstrSkript,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
