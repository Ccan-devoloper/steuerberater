import { erbstVerschonung, erbstVerschonungQuelle } from "../src/data/k1-erbst-verschonung.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "ErbSt Skript Teil 2 – Verschonung und Steuerberechnung (Schäfer)",
  quelle: erbstVerschonungQuelle,
  kapitel: erbstVerschonung,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
