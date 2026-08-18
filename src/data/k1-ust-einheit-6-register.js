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

/* Die Quellenlösung zu Beispiel 10 setzt für die erste Vermietungsphase 0 %
   Vorsteuerabzug und für die Nutzung ab 1.9.26 100 % an. Diese Formulierung
   vermeidet eine darüber hinausgehende Wertung der ersten Vermietungsphase. */
const beispiel10 = k1UstEinheit6.find((inhalt) => inhalt.id === 219);
if (beispiel10) {
  beispiel10.intro[0] = "Beispiel 10 eröffnet den eigentlichen §-15a-Block der sechsten Einheit. Ein neues Geschäftshaus wird zunächst nach der Quellenlösung mit 0 % Vorsteuerabzug genutzt und noch im Jahr der Fertigstellung an einen anderen Mieter überlassen, für dessen Nutzung die Quelle 100 % ansetzt.";
}

const vorhandeneIds = new Set(k1UstEinheit2.map((inhalt) => inhalt.id));
for (const inhalt of k1UstEinheit6) {
  if (!vorhandeneIds.has(inhalt.id)) {
    k1UstEinheit2.push(inhalt);
    vorhandeneIds.add(inhalt.id);
  }
}
