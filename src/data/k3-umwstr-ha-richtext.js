import { UMWSTR_HA_FONT_1 } from "./k3-umwstr-ha-font-1.js";
import { UMWSTR_HA_FONT_2 } from "./k3-umwstr-ha-font-2.js";
import { UMWSTR_HA_FONT_3 } from "./k3-umwstr-ha-font-3.js";

/* Zeilenweise Schriftinformation aus den PDF-Quellen: je Zeile der Volltext (l)
   und die Teilstuecke (p) als [Text, fett]. Daraus stellt die Ansicht den
   Fettdruck des Originals wieder her, statt ihn zu erfinden. */

export const UMWSTR_HA_FONTSTIL = new Map([
  ["UMW-HA-1", UMWSTR_HA_FONT_1],
  ["UMW-HA-2", UMWSTR_HA_FONT_2],
  ["UMW-HA-3", UMWSTR_HA_FONT_3],
]);

export default UMWSTR_HA_FONTSTIL;
