/* Prüft den Datensatz der Original-Prüfungsklausuren Buchführung und Bilanzwesen (K3). */

import { bilOriginalklausuren, bilOriginalklausurenQuelle } from "../src/data/k3-bil-originalklausuren.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "Bilanz-Originalklausuren",
  quelle: bilOriginalklausurenQuelle,
  hausaufgaben: bilOriginalklausuren,
  pflichtfelder: ["nummer", "verfasser", "block", "blockLabel", "jahrgang", "teil"],
  einheit: "Aufgabenteile",
});
