import { aoShortSkriptJacobs, aoShortSkriptJacobsQuelle } from "../src/data/k1-ao-short-skript-jacobs.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "AO Short-Skript (Jacobs)",
  quelle: aoShortSkriptJacobsQuelle,
  kapitel: aoShortSkriptJacobs,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
