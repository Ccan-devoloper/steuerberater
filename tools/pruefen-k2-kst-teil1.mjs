import { kstTeil1, kstTeil1Quelle } from "../src/data/k2-kst-teil1-hamacher.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "KSt Teil I (Hamacher)",
  quelle: kstTeil1Quelle,
  kapitel: kstTeil1,
  pflichtfelder: ["abschnittNr"],
});
