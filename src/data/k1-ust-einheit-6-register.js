import "./k1-ust-einheit-5-register.js";
import k1UstEinheit2 from "./module-vertiefung-n.js";
import k1UstEinheit5 from "./module-vertiefung-q.js";
import k1UstEinheit6, { k1Einheit6Ergaenzungen } from "./module-vertiefung-s.js";

/* Einheit 6 führt drei in Einheit 5 nur gestellte Aufgaben (200–202) mit den
   nun vorhandenen Quellenlösungen fort und ergänzt anschließend neue Inhalte.
   Die bereits im gemeinsamen Array registrierten Objekt-Referenzen werden
   quellentreu angereichert; neue IDs werden nur einmal angehängt. */
for (const [idText, ergaenzung] of Object.entries(k1Einheit6Ergaenzungen)) {
  const id = Number(idText);
  const ziel = k1UstEinheit5.find((inhalt) => inhalt.id === id);
  if (ziel) Object.assign(ziel, ergaenzung);
}

const vorhandeneIds = new Set(k1UstEinheit2.map((inhalt) => inhalt.id));
for (const inhalt of k1UstEinheit6) {
  if (!vorhandeneIds.has(inhalt.id)) {
    k1UstEinheit2.push(inhalt);
    vorhandeneIds.add(inhalt.id);
  }
}
