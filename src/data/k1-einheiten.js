/* Stempelt jedes K1-USt-Lernobjekt mit seiner Kurseinheit. Die Zuordnung
   folgt den Quelldateien der Einheiten; die Objekte werden als geteilte
   Referenzen markiert, sodass Reihenfolge gegenüber den Registern egal ist.
   Objekte ohne Stempel im Sammelarray sind Originale der zweiten Einheit. */
import k1UstEinheit1 from "./module-vertiefung-m.js";
import k1UstEinheit2Nachtrag from "./module-vertiefung-r.js";
import k1UstEinheit3 from "./module-vertiefung-o.js";
import k1UstEinheit4 from "./module-vertiefung-p.js";
import k1UstEinheit5 from "./module-vertiefung-q.js";
import k1UstEinheit6 from "./module-vertiefung-s.js";
import k1UstEinheit7 from "./module-vertiefung-t.js";
import k1UstEinheit7Zusatz from "./module-vertiefung-t-zusatz.js";
import k1UstEinheit8 from "./module-vertiefung-u.js";
import k1UstEinheit2 from "./module-vertiefung-n.js";

const stempeln = (liste, einheit) => {
  for (const inhalt of liste) if (inhalt.einheit == null) inhalt.einheit = einheit;
};

stempeln(k1UstEinheit1, 1);
stempeln(k1UstEinheit2Nachtrag, 2);
stempeln(k1UstEinheit3, 3);
stempeln(k1UstEinheit4, 4);
stempeln(k1UstEinheit5, 5);
stempeln(k1UstEinheit6, 6);
stempeln(k1UstEinheit7, 7);
stempeln(k1UstEinheit7Zusatz, 7);
stempeln(k1UstEinheit8, 8);
stempeln(k1UstEinheit2, 2);

export const k1EinheitenListe = [1, 2, 3, 4, 5, 6, 7, 8];
