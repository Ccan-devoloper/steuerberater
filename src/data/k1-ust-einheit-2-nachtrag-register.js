import k1UstEinheit2 from "./module-vertiefung-n.js";
import k1UstEinheit2Nachtrag from "./module-vertiefung-r.js";

/* Ergänzt ausschließlich die beim ersten Import technisch abgeschnittenen
   Seiten der zweiten Einheit. Die ID-Prüfung verhindert Doppelregistrierung. */
const vorhandeneIds = new Set(k1UstEinheit2.map((inhalt) => inhalt.id));
for (const inhalt of k1UstEinheit2Nachtrag) {
  if (!vorhandeneIds.has(inhalt.id)) {
    k1UstEinheit2.push(inhalt);
    vorhandeneIds.add(inhalt.id);
  }
}
