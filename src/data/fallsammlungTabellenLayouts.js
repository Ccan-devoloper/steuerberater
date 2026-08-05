import { tableLayoutFaelle } from "./fallsammlungTabellenFaelle.js";
import { tableLayoutLoesungen1 } from "./fallsammlungTabellenLoesungen1.js";
import { tableLayoutLoesungen2 } from "./fallsammlungTabellenLoesungen2.js";
import { tableLayoutLoesungen3 } from "./fallsammlungTabellenLoesungen3.js";
import { tableLayoutLoesungen4 } from "./fallsammlungTabellenLoesungen4.js";
import { tableLayoutLoesungen5 } from "./fallsammlungTabellenLoesungen5.js";
import { tableLayoutLoesungen6 } from "./fallsammlungTabellenLoesungen6.js";

export const fallsammlungsTabellenLayouts = {
  sachverhalt: tableLayoutFaelle,
  loesung: [
    ...tableLayoutLoesungen1,
    ...tableLayoutLoesungen2,
    ...tableLayoutLoesungen3,
    ...tableLayoutLoesungen4,
    ...tableLayoutLoesungen5,
    ...tableLayoutLoesungen6,
  ],
};
