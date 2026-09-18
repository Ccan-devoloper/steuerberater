/* Prüft das Bewertungsskript Teil 2 (Struktur, Tabellen, Wasserzeichen).

   Aufruf: node tools/pruefen-k1-erbst-bewertung-teil2.mjs */
import { erbstBewertungTeil2, erbstBewertungTeil2Quelle } from "../src/data/k1-erbst-bewertung-teil2.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "ErbSt Bewertungsskript Teil 2 (Schäfer)",
  quelle: erbstBewertungTeil2Quelle,
  kapitel: erbstBewertungTeil2,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
