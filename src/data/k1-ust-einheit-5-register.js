import "./k1-ust-einheit-4-register.js";
import k1UstEinheit2 from "./module-vertiefung-n.js";
import k1UstEinheit5 from "./module-vertiefung-q.js";

/* Einheit 4 ist durch das vorgelagerte Register bereits im gemeinsamen
   K1-USt-Array enthalten. Dieses Register ergänzt Einheit 5 einmalig. */
const vorhandeneIds = new Set(k1UstEinheit2.map((inhalt) => inhalt.id));
for (const inhalt of k1UstEinheit5) {
  if (!vorhandeneIds.has(inhalt.id)) {
    k1UstEinheit2.push(inhalt);
    vorhandeneIds.add(inhalt.id);
  }
}
