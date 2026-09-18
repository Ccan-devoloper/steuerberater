import { kstTeil2, kstTeil2Quelle } from "../src/data/k2-kst-teil2-hamacher.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "KSt Teil II (Hamacher)",
  quelle: kstTeil2Quelle,
  kapitel: kstTeil2,
  pflichtfelder: ["abschnittNr"],
});
