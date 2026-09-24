import { erbstSkriptTeil1, erbstSkriptTeil1Quelle } from "../src/data/k1-erbst-skript-teil1.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "ErbSt Skript Teil 1 – Steuerpflicht, Vorgänge, Wertermittlung (Schäfer)",
  quelle: erbstSkriptTeil1Quelle,
  kapitel: erbstSkriptTeil1,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
