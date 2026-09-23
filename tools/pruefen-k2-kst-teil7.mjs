import { kstTeil7, kstTeil7Quelle } from "../src/data/k2-kst-teil7-hamacher.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "KSt Teil VII (Hamacher)",
  quelle: kstTeil7Quelle,
  kapitel: kstTeil7,
  pflichtfelder: ["abschnittNr"],
});
