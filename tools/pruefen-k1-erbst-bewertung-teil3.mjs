/* Prüft das Bewertungsskript Teil 3 (Struktur, Tabellen, Wasserzeichen).

   Aufruf: node tools/pruefen-k1-erbst-bewertung-teil3.mjs */
import { erbstBewertungTeil3, erbstBewertungTeil3Quelle } from "../src/data/k1-erbst-bewertung-teil3.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "ErbSt Bewertungsskript Teil 3 (Schäfer)",
  quelle: erbstBewertungTeil3Quelle,
  kapitel: erbstBewertungTeil3,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
