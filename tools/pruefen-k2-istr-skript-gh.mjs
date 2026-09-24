/* Prüft das IStR-Lehrgangsskript (Grümmer/Holzrichter).

   Geprüft werden Pflichtfelder, Blockstruktur, Tabellenbreiten, das
   personenbezogene Wasserzeichen aus dem Quell-PDF und – weil die
   Abschnittsnummerierung je Kapitel neu beginnt – dass die Abschnitte eines
   Kapitels zusammenstehen und lückenlos durchnummeriert sind.

   Aufruf: node tools/pruefen-k2-istr-skript-gh.mjs */
import { istrSkriptGh, istrSkriptGhQuelle } from "../src/data/k2-istr-skript-gh.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "IStR-Skript (Grümmer/Holzrichter)",
  quelle: istrSkriptGhQuelle,
  kapitel: istrSkriptGh,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
