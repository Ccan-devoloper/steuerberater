import { erbstFallsammlungMirbach, erbstFallsammlungMirbachQuelle } from "../src/data/k1-erbst-fallsammlung-mirbach.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "Fallsammlung ErbSt/BewR (Mirbach)",
  quelle: erbstFallsammlungMirbachQuelle,
  kapitel: erbstFallsammlungMirbach,
  pflichtfelder: ["gruppe"],
});
