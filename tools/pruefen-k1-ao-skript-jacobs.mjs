import { aoSkriptJacobs, aoSkriptJacobsQuelle } from "../src/data/k1-ao-skript-jacobs.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "AO-Skript (Jacobs)",
  quelle: aoSkriptJacobsQuelle,
  kapitel: aoSkriptJacobs,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
