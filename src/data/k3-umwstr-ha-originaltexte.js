import { UMWSTR_HA_SEITEN_1 } from "./k3-umwstr-ha-original-1.js";
import { UMWSTR_HA_SEITEN_2 } from "./k3-umwstr-ha-original-2.js";
import { UMWSTR_HA_SEITEN_3 } from "./k3-umwstr-ha-original-3.js";

/* Seitentexte der drei UmwStR-Hausaufgaben, 1:1 aus den PDF-Quellen.
   Aufbau wie bei den AO-Hausaufgaben: je Hausaufgabe ein Array mit einem
   Eintrag pro PDF-Seite. Die Personalisierungszeile der Quellen ist entfernt. */

export const UMWSTR_HA_ORIGINALSEITEN = new Map([
  ["UMW-HA-1", UMWSTR_HA_SEITEN_1],
  ["UMW-HA-2", UMWSTR_HA_SEITEN_2],
  ["UMW-HA-3", UMWSTR_HA_SEITEN_3],
]);

export default UMWSTR_HA_ORIGINALSEITEN;
