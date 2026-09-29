import { bilUebungsfaelle, bilUebungsfaelleQuelle } from "../src/data/k3-bil-uebungsfaelle-noethen.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "Bilanz-Übungsfälle laufender Unterricht (Nöthen)",
  quelle: bilUebungsfaelleQuelle,
  kapitel: bilUebungsfaelle,
  pflichtfelder: ["abschnitt"],
});
