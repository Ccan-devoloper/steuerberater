import {ORIGINALSEITEN_1_2} from "./k1-ao-hausaufgaben-original-1-2.js";
import {ORIGINALSEITEN_3_P1} from "./k1-ao-hausaufgaben-original-3a.js";
import {ORIGINALSEITEN_3_P2} from "./k1-ao-hausaufgaben-original-3b.js";
import {ORIGINALSEITEN_4_P1} from "./k1-ao-hausaufgaben-original-4a.js";
import {ORIGINALSEITEN_4_P2} from "./k1-ao-hausaufgaben-original-4b.js";
import {ORIGINALSEITEN_5_P1} from "./k1-ao-hausaufgaben-original-5a.js";
import {ORIGINALSEITEN_5_P2} from "./k1-ao-hausaufgaben-original-5b.js";
import {ORIGINALSEITEN_6_P1} from "./k1-ao-hausaufgaben-original-6a.js";
import {ORIGINALSEITEN_6_P2} from "./k1-ao-hausaufgaben-original-6b.js";
import {ORIGINALSEITEN_7_P1} from "./k1-ao-hausaufgaben-original-7a.js";
import {ORIGINALSEITEN_7_P2} from "./k1-ao-hausaufgaben-original-7b.js";
import {ORIGINALSEITEN_8_P1} from "./k1-ao-hausaufgaben-original-8a.js";
import {ORIGINALSEITEN_8_10_13} from "./k1-ao-hausaufgaben-original-8b1.js";
import {ORIGINALSEITEN_8_14_17} from "./k1-ao-hausaufgaben-original-8b2.js";
import {ORIGINALSEITEN_8_18_21} from "./k1-ao-hausaufgaben-original-8c1.js";
import {ORIGINALSEITEN_8_22_25} from "./k1-ao-hausaufgaben-original-8c2.js";

export const AO_HAUSAUFGABEN_ORIGINALSEITEN=new Map([
  ["AO-HA-1-2",ORIGINALSEITEN_1_2],
  ["AO-HA-3",[...ORIGINALSEITEN_3_P1,...ORIGINALSEITEN_3_P2]],
  ["AO-HA-4",[...ORIGINALSEITEN_4_P1,...ORIGINALSEITEN_4_P2]],
  ["AO-HA-5",[...ORIGINALSEITEN_5_P1,...ORIGINALSEITEN_5_P2]],
  ["AO-HA-6",[...ORIGINALSEITEN_6_P1,...ORIGINALSEITEN_6_P2]],
  ["AO-HA-7",[...ORIGINALSEITEN_7_P1,...ORIGINALSEITEN_7_P2]],
  ["AO-HA-8",[...ORIGINALSEITEN_8_P1,...ORIGINALSEITEN_8_10_13,...ORIGINALSEITEN_8_14_17,...ORIGINALSEITEN_8_18_21,...ORIGINALSEITEN_8_22_25]],
]);

export const aoHausaufgabeOriginalSeite=(terminId,seite)=>AO_HAUSAUFGABEN_ORIGINALSEITEN.get(terminId)?.[Number(seite)-1]||"";
export const AO_HAUSAUFGABEN_ORIGINAL_SEITENZAHL=Array.from(AO_HAUSAUFGABEN_ORIGINALSEITEN.values()).reduce((sum,pages)=>sum+pages.length,0);
