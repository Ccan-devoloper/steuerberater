import { kstTeil3, kstTeil3Quelle } from "../src/data/k2-kst-teil3-hamacher.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "KSt Teil III (Hamacher)",
  quelle: kstTeil3Quelle,
  kapitel: kstTeil3,
  pflichtfelder: ["abschnittNr"],
});
