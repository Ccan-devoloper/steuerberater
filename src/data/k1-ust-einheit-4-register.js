import "./k1-ust-einheit-3-register.js";
import k1UstEinheit2 from "./module-vertiefung-n.js";
import k1UstEinheit4 from "./module-vertiefung-p.js";

/* K1Campus bündelt Einheit 1 mit dem exportierten Array der Einheit 2.
   Einheit 3 wird bereits durch das vorgelagerte Register ergänzt; dieses
   Register hängt anschließend die vierte Einheit einmalig an denselben Array.
   Die ID-Prüfung verhindert doppelte Registrierung bei HMR/Re-Evaluation. */
const vorhandeneIds = new Set(k1UstEinheit2.map((inhalt) => inhalt.id));
for (const inhalt of k1UstEinheit4) {
  if (!vorhandeneIds.has(inhalt.id)) {
    k1UstEinheit2.push(inhalt);
    vorhandeneIds.add(inhalt.id);
  }
}
