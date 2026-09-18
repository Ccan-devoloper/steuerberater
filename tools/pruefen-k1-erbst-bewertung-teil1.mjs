/* Prüft das Bewertungsskript Teil 1 (Struktur, Tabellen, Wasserzeichen).

   Aufruf: node tools/pruefen-k1-erbst-bewertung-teil1.mjs */
import { erbstBewertungTeil1, erbstBewertungTeil1Quelle } from "../src/data/k1-erbst-bewertung-teil1.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "ErbSt Bewertungsskript Teil 1 (Schäfer)",
  quelle: erbstBewertungTeil1Quelle,
  kapitel: erbstBewertungTeil1,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
