import { tableLayoutFaelle } from "./fallsammlungTabellenGeometrieFaelle.js";
import { tableLayoutLoesungen1 } from "./fallsammlungTabellenGeometrieLoesungen1.js";
import { tableLayoutLoesungen2 } from "./fallsammlungTabellenGeometrieLoesungen2.js";
import { tableLayoutLoesungen3 } from "./fallsammlungTabellenGeometrieLoesungen3.js";
import { tableLayoutLoesungen4 } from "./fallsammlungTabellenGeometrieLoesungen4.js";
import { tableLayoutLoesungen5 } from "./fallsammlungTabellenGeometrieLoesungen5.js";
import { tableLayoutLoesungen6 } from "./fallsammlungTabellenGeometrieLoesungen6.js";
import { tableLayoutKorrekturenLoesungen } from "./fallsammlungTabellenGeometrieKorrekturen.js";

const loesungen = [
  ...tableLayoutLoesungen1,
  ...tableLayoutLoesungen2,
  ...tableLayoutLoesungen3,
  ...tableLayoutLoesungen4,
  ...tableLayoutLoesungen5,
  ...tableLayoutLoesungen6,
].filter(([id]) => id !== "L037-02");

export const fallsammlungsTabellenGeometrie = {
  sachverhalt: tableLayoutFaelle,
  loesung: [...loesungen, ...tableLayoutKorrekturenLoesungen],
};
