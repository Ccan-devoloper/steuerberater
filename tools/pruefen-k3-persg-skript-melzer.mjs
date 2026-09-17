/* Prüft das PersG-Skript von Karsten Melzer (Teile I bis V).

   Geprüft werden Pflichtfelder, Blockstruktur, Tabellenbreiten, das
   personenbezogene Wasserzeichen aus den Quell-PDFs sowie - weil das Skript
   mehrteilig ist und die Kapitelnummerierung je Teil neu beginnt - dass die
   Kapitel eines Teils zusammenstehen und innerhalb des Teils lückenlos
   durchnummeriert sind.

   Aufruf: node tools/pruefen-k3-persg-skript-melzer.mjs */
import { persgSkriptMelzer, persgSkriptMelzerQuelle } from "../src/data/k3-persg-skript-melzer.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "PersG-Skript (Melzer)",
  quelle: persgSkriptMelzerQuelle,
  kapitel: persgSkriptMelzer,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
