import k1UstEinheit2 from "./module-vertiefung-n.js";
import k1UstEinheit3 from "./module-vertiefung-o.js";

/* K1Campus bündelt derzeit Einheit 1 und den exportierten Array der Einheit 2.
   Bis die Datenquelle dort auf ein eigenes Register umgestellt wird, ergänzt
   dieses vor K1Campus geladene Register den bestehenden Array einmalig um die
   Inhalte der dritten Einheit. Die IDs sichern gegen doppelte Registrierung. */
const vorhandeneIds = new Set(k1UstEinheit2.map((inhalt) => inhalt.id));
for (const inhalt of k1UstEinheit3) {
  if (!vorhandeneIds.has(inhalt.id)) k1UstEinheit2.push(inhalt);
}
