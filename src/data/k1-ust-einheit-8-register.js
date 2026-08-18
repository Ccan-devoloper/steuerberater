import "./k1-ust-einheit-7-register.js";
import k1UstEinheit2 from "./module-vertiefung-n.js";
import k1UstEinheit8, { k1Einheit8Ergaenzungen } from "./module-vertiefung-u.js";

/* Einheit 8 führt Fall 230 mit der nun vorhandenen Quellenlösung fort und
   ergänzt anschließend neue Originalfälle und Lernmodule. */
for (const [idText, ergaenzung] of Object.entries(k1Einheit8Ergaenzungen)) {
  const id = Number(idText);
  const ziel = k1UstEinheit2.find((inhalt) => inhalt.id === id);
  if (ziel) Object.assign(ziel, ergaenzung);
}

const vorhandeneIds = new Set(k1UstEinheit2.map((inhalt) => inhalt.id));
for (const inhalt of k1UstEinheit8) {
  if (!vorhandeneIds.has(inhalt.id)) {
    k1UstEinheit2.push(inhalt);
    vorhandeneIds.add(inhalt.id);
  }
}
