import { kstTeil6, kstTeil6Quelle } from "../src/data/k2-kst-teil6-hamacher.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "KSt Teil VI (Hamacher)",
  quelle: kstTeil6Quelle,
  kapitel: kstTeil6,
  pflichtfelder: ["abschnittNr"],
});
