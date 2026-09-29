/* Prüft den Datensatz der Original-Prüfungsklausuren Körperschaftsteuer (K2). */

import { kstOriginalklausuren, kstOriginalklausurenQuelle } from "../src/data/k2-kst-originalklausuren.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "KSt-Originalklausuren",
  quelle: kstOriginalklausurenQuelle,
  hausaufgaben: kstOriginalklausuren,
  pflichtfelder: ["nummer", "verfasser", "block", "blockLabel", "jahrgang"],
  einheit: "Originalklausuren",
});
