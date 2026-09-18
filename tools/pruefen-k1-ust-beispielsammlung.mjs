import { ustBeispielsammlung, ustBeispielsammlungQuelle } from "../src/data/k1-ust-beispielsammlung-schroeders.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "Beispielsammlungen USt (Schröders)",
  quelle: ustBeispielsammlungQuelle,
  kapitel: ustBeispielsammlung,
  pflichtfelder: ["tag"],
});
