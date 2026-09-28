import { kstTeil4, kstTeil4Quelle } from "../src/data/k2-kst-teil4-hamacher.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "KSt Teil IV (Hamacher)",
  quelle: kstTeil4Quelle,
  kapitel: kstTeil4,
  pflichtfelder: ["abschnittNr"],
});
