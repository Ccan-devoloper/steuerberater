import { aoUnterlageMirbach, aoUnterlageMirbachQuelle } from "../src/data/k1-ao-unterlage-mirbach.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "Unterlage Verfahrensrecht (Mirbach)",
  quelle: aoUnterlageMirbachQuelle,
  kapitel: aoUnterlageMirbach,
  pflichtfelder: ["seite", "titelKurz"],
});
