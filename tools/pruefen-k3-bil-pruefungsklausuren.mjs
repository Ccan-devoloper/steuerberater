import { bilPruefungsklausuren, bilPruefungsklausurenQuelle } from "../src/data/k3-bil-pruefungsklausuren.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "Amtliche Bilanz-Prüfungsklausuren",
  quelle: bilPruefungsklausurenQuelle,
  hausaufgaben: bilPruefungsklausuren,
  pflichtfelder: ["nummer", "block", "blockLabel", "jahrgang", "teil", "wertung"],
  einheit: "Aufgabenteile",
});
