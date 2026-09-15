/* Prüft die PersG-Hausaufgaben (Struktur, Tabellen, Randpunkte).

   Aufruf: node tools/pruefen-k3-persg-hausaufgaben.mjs */
import { persgHausaufgaben, persgHausaufgabenQuelle } from "../src/data/k3-persg-hausaufgaben.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "PersG-Hausaufgaben",
  quelle: persgHausaufgabenQuelle,
  hausaufgaben: persgHausaufgaben,
  pflichtfelder: ["termin", "punkte"],
});
