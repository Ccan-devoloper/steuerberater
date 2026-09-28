import { k2Pruefungsklausuren, k2PruefungsklausurenQuelle } from "../src/data/k2-pruefungsklausuren.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "Amtliche Ertragsteuer-Prüfungsklausuren",
  quelle: k2PruefungsklausurenQuelle,
  hausaufgaben: k2Pruefungsklausuren,
  pflichtfelder: ["nummer", "fach", "block", "blockLabel", "jahrgang", "teil", "wertung"],
  einheit: "Aufgabenteile",
});
