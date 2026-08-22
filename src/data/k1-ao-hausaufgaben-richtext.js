import {AO_HAUS_FONT_1_2} from "./ao-ha-font-1-2.js";
import {AO_HAUS_FONT_3} from "./ao-ha-font-3.js";
import {AO_HAUS_FONT_4} from "./ao-ha-font-4.js";
import {AO_HAUS_FONT_5} from "./ao-ha-font-5.js";
import {AO_HAUS_FONT_6} from "./ao-ha-font-6.js";
import {AO_HAUS_FONT_7} from "./ao-ha-font-7.js";
import {AO_HAUS_FONT_8A} from "./ao-ha-font-8a.js";
import {AO_HAUS_FONT_8B} from "./ao-ha-font-8b.js";

export const AO_HAUSAUFGABEN_FONTSTIL=new Map([
  ["AO-HA-1-2",AO_HAUS_FONT_1_2],
  ["AO-HA-3",AO_HAUS_FONT_3],
  ["AO-HA-4",AO_HAUS_FONT_4],
  ["AO-HA-5",AO_HAUS_FONT_5],
  ["AO-HA-6",AO_HAUS_FONT_6],
  ["AO-HA-7",AO_HAUS_FONT_7],
  ["AO-HA-8",[...AO_HAUS_FONT_8A,...AO_HAUS_FONT_8B]],
]);
