/* Prüft die KSt-Hausaufgaben (Struktur, Tabellen, Randpunkte).

   Aufruf: node tools/pruefen-kst-hausaufgaben.mjs */
import { kstHausaufgaben, kstHausaufgabenQuelle } from "../src/data/kst-hausaufgaben.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "KSt-Hausaufgaben",
  quelle: kstHausaufgabenQuelle,
  hausaufgaben: kstHausaufgaben,
  pflichtfelder: ["termin", "punkte"],
});
