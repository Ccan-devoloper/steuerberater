import fs from "node:fs";
import {
  istrEinheit3Quelle,
  istrEinheit3Module,
  istrEinheit3Faelle,
  istrEinheit3Training,
  istrEinheit3CaptureRanges,
} from "../src/data/istr-einheit-3.js";
import { istrModule, istrFaelle } from "../src/data/istr-gesamt.js";

const assert = (ok, msg) => {
  if (!ok) throw new Error(`K2 IStR Einheit 3: ${msg}`);
};

const schemaText = fs.readFileSync(new URL("../src/components/IstrEinheit3Pruefungsschema.jsx", import.meta.url), "utf8");
const campusText = fs.readFileSync(new URL("../src/components/K2IStRCampus.jsx", import.meta.url), "utf8");
const gesamtText = fs.readFileSync(new URL("../src/data/istr-gesamt.js", import.meta.url), "utf8");

// Quelle und Umfang
assert(istrEinheit3Quelle.title === "IStR 3. Einheit.pdf", "falscher Quellenname");
assert(istrEinheit3Quelle.pages === 411, `erwartet 411 physische Seiten/Frames, erhalten ${istrEinheit3Quelle.pages}`);
assert(istrEinheit3Module.length === 14, `erwartet 14 Lernmodule, erhalten ${istrEinheit3Module.length}`);
assert(istrEinheit3Faelle.length === 5, `erwartet 5 Fall-/Transferstrecken, erhalten ${istrEinheit3Faelle.length}`);
assert(istrEinheit3Training.length === 14, `erwartet 14 Trainingsfragen, erhalten ${istrEinheit3Training.length}`);

// 411/411: lückenlos, sortiert, ohne Überlappung.
let erwartet = 1;
const abdeckung = Array(istrEinheit3Quelle.pages + 1).fill(0);
for (const range of istrEinheit3CaptureRanges) {
  assert(Number.isInteger(range.start) && Number.isInteger(range.end), `ungültiger Bereich ${JSON.stringify(range)}`);
  assert(range.start === erwartet, `Lücke/Überlappung vor Frame ${range.start}; erwartet ${erwartet}`);
  assert(range.end >= range.start, `Bereich ${range.start}–${range.end} ist rückwärts`);
  assert(range.end <= istrEinheit3Quelle.pages, `Bereich endet hinter Frame 411: ${range.end}`);
  assert(typeof range.label === "string" && range.label.trim(), `Bereich ${range.start}–${range.end} ohne Bezeichnung`);
  for (let f = range.start; f <= range.end; f += 1) abdeckung[f] += 1;
  erwartet = range.end + 1;
}
assert(erwartet === 412, `Quellenregister endet bei ${erwartet - 1} statt 411`);
for (let f = 1; f <= 411; f += 1) assert(abdeckung[f] === 1, `Frame ${f} ist ${abdeckung[f]}-fach statt genau einmal zugeordnet`);

// Jedes Modul und jeder Fall muss im Quellenregister verankert sein.
for (const modul of istrEinheit3Module) {
  assert(modul.unit === 3, `${modul.id}: unit ist nicht 3`);
  assert((modul.sourceFrames || []).length > 0, `${modul.id}: keine sourceFrames`);
  assert(istrEinheit3CaptureRanges.some((r) => (r.moduleIds || []).includes(modul.id)), `${modul.id}: im 411-Seiten-Register nicht verankert`);
}
for (const fall of istrEinheit3Faelle) {
  assert(fall.unit === 3, `${fall.id}: unit ist nicht 3`);
  assert((fall.sourceFrames || []).length > 0, `${fall.id}: keine sourceFrames`);
  assert(istrEinheit3CaptureRanges.some((r) => (r.caseIds || []).includes(fall.id)), `${fall.id}: im 411-Seiten-Register nicht verankert`);
}

// Querverweise müssen auf existierende Module/Fälle zeigen – auch über Einheitsgrenzen hinweg.
const alleModulIds = new Set(istrModule.map((m) => m.id));
const alleFallIds = new Set(istrFaelle.map((f) => f.id));
assert(alleModulIds.size === istrModule.length, "doppelte Modul-IDs im Gesamtregister");
assert(alleFallIds.size === istrFaelle.length, "doppelte Fall-IDs im Gesamtregister");
for (const modul of istrEinheit3Module) {
  for (const id of modul.links || []) assert(alleModulIds.has(id), `${modul.id}: Querverweis auf unbekanntes Modul ${id}`);
  for (const id of modul.caseIds || []) assert(alleFallIds.has(id), `${modul.id}: Querverweis auf unbekannten Fall ${id}`);
}
for (const fall of istrEinheit3Faelle) {
  for (const id of fall.moduleIds || []) assert(alleModulIds.has(id), `${fall.id}: Querverweis auf unbekanntes Modul ${id}`);
}
assert(istrEinheit3Module.some((m) => (m.links || []).some((id) => id.startsWith("istr1-") || id.startsWith("istr2-"))), "keine Rückverweise von Einheit 3 auf Einheit 1/2");
assert(istrModule.some((m) => m.unit !== 3 && (m.links || []).some((id) => id.startsWith("istr3-"))), "keine Vorverweise aus Einheit 1/2 auf Einheit 3");

// Zentrale fachliche Marker der gesamten Einheit.
const fachtext = JSON.stringify({ module: istrEinheit3Module, faelle: istrEinheit3Faelle, training: istrEinheit3Training });
for (const marker of [
  "§ 1 Abs. 4 EStG",
  "§ 49 Abs. 1 Nr. 5 EStG",
  "Art. 10 DBA",
  "§ 50c EStG",
  "§ 50a Abs. 1 Nr. 4",
  "Art. 16 DBA",
  "§ 2 Abs. 7 S. 3 EStG",
  "§ 32b Abs. 1 S. 1 Nr. 2 EStG",
  "§ 2 AStG",
  "§ 6 AStG",
  "§ 2 Nr. 1 KStG",
  "§ 8b Abs. 2",
  "I R 37/15",
  "§ 32 KStG",
  "§ 4 Abs. 1 S. 3 EStG",
  "§ 4g EStG",
  "§ 12 Abs. 1 KStG",
  "423.000 €",
  "168.000 €",
]) assert(fachtext.includes(marker), `fachlicher Kernmarker fehlt: ${marker}`);

// Prüfungsschemata: 8 Schemata, klare Prüfschritte, EIS und blau umkreistes AAVV wie bisher.
const schemaIds = [...schemaText.matchAll(/id: "(istr3-schema-[^"]+)"/g)].map((m) => m[1]);
assert(new Set(schemaIds).size === 8, `erwartet 8 Einheit-3-Schemata, gefunden ${new Set(schemaIds).size}`);
for (const marker of [
  "istr2-schema-block",
  "istr2-pruefschritt",
  "merkSchritt",
  "istr2-eis-badge",
  "aavvSchritt",
  "istr2-aavv-badge",
  "data-aavv-schritt",
  "istr2-querverweis",
  "§ 50c EStG",
  "§ 2 AStG",
  "§ 6 AStG",
  "I R 37/15",
  "§ 12 Abs. 1 KStG",
]) assert(schemaText.includes(marker), `Schema-Marker fehlt: ${marker}`);
assert((schemaText.match(/typ: "aavvSchritt"/g) || []).length >= 8, "AAVV wird nicht ausreichend als eigene Prüfschritte dargestellt");
assert(schemaText.includes('badge: "A"') && schemaText.includes('badge: "V"'), "AAVV-Buchstaben fehlen");

// Campus: Einheit 3 sichtbar, chronologisch nach Einheit 1/2, Post-it-Normverweise aktiv.
for (const marker of [
  "IstrEinheit3Pruefungsschema",
  "istrEinheit3Quelle",
  '"3","Einheit 3"',
  "Einheit 1 + 2 + 3",
  "gesamtFrames",
  "<SchemaPostitEnhancer",
  "istr3",
]) assert(campusText.includes(marker), `Campus-Marker fehlt: ${marker}`);
assert(campusText.indexOf("<IstrEinheit1Pruefungsschema") < campusText.indexOf("<IstrEinheit2Pruefungsschema"), "Schema-Reihenfolge Einheit 1 → 2 ist beschädigt");
assert(campusText.indexOf("<IstrEinheit2Pruefungsschema") < campusText.indexOf("<IstrEinheit3Pruefungsschema"), "Einheit 3 steht im Schema-Campus nicht nach Einheit 2");

// Aggregation: Einheit 3 und bidirektionale Querverweise sind Bestandteil des Gesamtregisters.
for (const marker of [
  "istrEinheit3Quelle",
  "istrEinheit3Module",
  "istrEinheit3Faelle",
  "istrEinheit3Training",
  "istrEinheit3CaptureRanges",
  "...istrEinheit3Module",
  "...istrEinheit3Faelle",
  "...istrEinheit3Training",
  '"istr1-06": ["istr3-06"',
  '"istr2-03": ["istr1-11", "istr3-02"',
]) assert(gesamtText.includes(marker), `Gesamtregister-Marker fehlt: ${marker}`);
assert(istrModule.filter((m) => m.unit === 3).length === 14, "Gesamtregister enthält nicht alle 14 Einheit-3-Module");
assert(istrFaelle.filter((f) => f.unit === 3).length === 5, "Gesamtregister enthält nicht alle 5 Einheit-3-Fälle");

// Private/technische Ansichten werden nur bezeichnet, nicht als persönliche Inhalte veröffentlicht.
for (const verboten of ["Persönliches PDF für", "private-user-images", "@gmail.com", "@outlook.com"]) {
  assert(!fachtext.includes(verboten) && !schemaText.includes(verboten), `private/personalisierende Veröffentlichung gefunden: ${verboten}`);
}

console.log(`K2 IStR Einheit 3 vollständig: 411/411 physische PDF-Seiten/Frames, ${istrEinheit3Module.length} Lernmodule, ${istrEinheit3Faelle.length} Fall-/Transferstrecken, ${new Set(schemaIds).size} digitale Schemata, ${istrEinheit3Training.length} Trainingsfragen; EIS/AAVV und einheitenübergreifende Querverweise geprüft.`);
