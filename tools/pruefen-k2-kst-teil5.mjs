import { kstTeil5, kstTeil5Quelle } from "../src/data/k2-kst-teil5-hamacher.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "KSt Teil V (Hamacher)",
  quelle: kstTeil5Quelle,
  kapitel: kstTeil5,
  pflichtfelder: ["abschnittNr"],
});
