/* Prüft das Bilanz-Skript Termin 1 von Karsten Melzer.

   Geprüft werden Pflichtfelder, Blockstruktur, Tabellenbreiten, das
   personenbezogene Wasserzeichen aus dem Quell-PDF und – weil die
   Abschnittsnummerierung je Kapitel neu beginnt – dass die Abschnitte eines
   Kapitels zusammenstehen und lückenlos durchnummeriert sind.

   Aufruf: node tools/pruefen-k3-bil-skript-melzer.mjs */
import { bilSkriptMelzer, bilSkriptMelzerQuelle } from "../src/data/k3-bil-skript-melzer.js";
import { pruefeKurzskript } from "./pruefen-kurzskript-bloecke.mjs";

pruefeKurzskript({
  name: "Bilanz-Skript (Melzer)",
  quelle: bilSkriptMelzerQuelle,
  kapitel: bilSkriptMelzer,
  pflichtfelder: ["teil", "teilLabel", "teilTitel"],
});
