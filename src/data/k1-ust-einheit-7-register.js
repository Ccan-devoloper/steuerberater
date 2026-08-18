import "./k1-ust-einheit-6-register.js";
import k1UstEinheit2 from "./module-vertiefung-n.js";
import k1UstEinheit7, { k1Einheit7Ergaenzungen } from "./module-vertiefung-t.js";

/* Einheit 7 löst mehrere in Einheit 6 noch offene Quellenaufgaben und ergänzt
   anschließend neue Fälle/Module. Die gemeinsamen Objekt-Referenzen werden
   quellentreu angereichert; neue IDs werden nur einmal registriert. */
for (const [idText, ergaenzung] of Object.entries(k1Einheit7Ergaenzungen)) {
  const id = Number(idText);
  const ziel = k1UstEinheit2.find((inhalt) => inhalt.id === id);
  if (ziel) Object.assign(ziel, ergaenzung);
}

const vorhandeneIds = new Set(k1UstEinheit2.map((inhalt) => inhalt.id));
for (const inhalt of k1UstEinheit7) {
  if (!vorhandeneIds.has(inhalt.id)) {
    k1UstEinheit2.push(inhalt);
    vorhandeneIds.add(inhalt.id);
  }
}
