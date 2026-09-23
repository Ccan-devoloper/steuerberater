import { ustSkriptMoecker, ustSkriptMoeckerQuelle } from "../src/data/k1-ust-skript-moecker.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "USt-Skript (Moecker)",
  quelle: ustSkriptMoeckerQuelle,
  kapitel: ustSkriptMoecker,
  pflichtfelder: ["teil", "abschnittNr"],
});
