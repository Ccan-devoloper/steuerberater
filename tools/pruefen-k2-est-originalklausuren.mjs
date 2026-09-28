/* Prüft den Datensatz der Original-Prüfungsklausuren Ertragsteuern (K2). */

import { estOriginalklausuren, estOriginalklausurenQuelle } from "../src/data/k2-est-originalklausuren.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "ESt-Originalklausuren",
  quelle: estOriginalklausurenQuelle,
  hausaufgaben: estOriginalklausuren,
  pflichtfelder: ["nummer", "verfasser", "block", "blockLabel", "jahrgang"],
  einheit: "Sachverhalte",
});
