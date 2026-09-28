import { k1Pruefungsklausuren, k1PruefungsklausurenQuelle } from "../src/data/k1-pruefungsklausuren.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "Amtliche Verfahrensrechts-Prüfungsklausuren",
  quelle: k1PruefungsklausurenQuelle,
  hausaufgaben: k1Pruefungsklausuren,
  pflichtfelder: ["nummer", "fach", "block", "blockLabel", "jahrgang", "teil", "wertung"],
  einheit: "Aufgabenteile",
});
