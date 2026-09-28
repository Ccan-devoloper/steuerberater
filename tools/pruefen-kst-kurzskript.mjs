/* Prüft das KSt-Kurz-Skript (Breier).

   Geprüft werden Pflichtfelder, Blockstruktur, Tabellenbreiten, das
   personenbezogene Wasserzeichen aus dem Quell-PDF sowie - weil das Skript
   mehrteilig ist und die Abschnittsnummerierung je Teil neu beginnt - dass die
   Abschnitte eines Teils zusammenstehen und innerhalb des Teils lückenlos
   durchnummeriert sind.

   Aufruf: node tools/pruefen-kst-kurzskript.mjs */
import { kstKurzskript, kstKurzskriptQuelle } from "../src/data/kst-kurzskript.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "KSt-Kurz-Skript",
  quelle: kstKurzskriptQuelle,
  kapitel: kstKurzskript,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
