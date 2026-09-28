import { istrNoethen, istrNoethenQuelle } from "../src/data/k2-istr-noethen.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "IStR-Schemata und Übungsfälle (Nöthen)",
  quelle: istrNoethenQuelle,
  kapitel: istrNoethen,
  pflichtfelder: ["gruppe"],
});
