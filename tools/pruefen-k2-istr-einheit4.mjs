import fs from "node:fs";
import {
  istrEinheit4Quelle,
  istrEinheit4Module,
  istrEinheit4Faelle,
  istrEinheit4Training,
  istrEinheit4CaptureRanges,
} from "../src/data/istr-einheit-4.js";
import { istrModule, istrFaelle, istrTraining, istrQuellen, istrBereichName } from "../src/data/istr-gesamt.js";

const assert = (ok, msg) => {
  if (!ok) throw new Error(`K2 IStR Einheit 4: ${msg}`);
};

const schemaText = fs.readFileSync(new URL("../src/components/IstrEinheit4Pruefungsschema.jsx", import.meta.url), "utf8");
const campusText = fs.readFileSync(new URL("../src/components/K2IStRCampus.jsx", import.meta.url), "utf8");
const gesamtText = fs.readFileSync(new URL("../src/data/istr-gesamt.js", import.meta.url), "utf8");

// Quelle und Umfang
assert(istrEinheit4Quelle.title === "Hinzurechnungsbesteuerung.pdf", "falscher Quellenname");
assert(istrEinheit4Quelle.pages === 91, `erwartet 91 physische Seiten/Frames, erhalten ${istrEinheit4Quelle.pages}`);
assert(istrEinheit4Module.length === 8, `erwartet 8 Lernmodule, erhalten ${istrEinheit4Module.length}`);
assert(istrEinheit4Faelle.length === 2, `erwartet 2 Fall-/Transferstrecken, erhalten ${istrEinheit4Faelle.length}`);
assert(istrEinheit4Training.length === 12, `erwartet 12 Trainingsfragen, erhalten ${istrEinheit4Training.length}`);

// 91/91: lückenlos, sortiert, ohne Überlappung.
let erwartet = 1;
const abdeckung = Array(istrEinheit4Quelle.pages + 1).fill(0);
for (const range of istrEinheit4CaptureRanges) {
  assert(Number.isInteger(range.start) && Number.isInteger(range.end), `ungültiger Bereich ${JSON.stringify(range)}`);
  assert(range.start === erwartet, `Lücke/Überlappung vor Frame ${range.start}; erwartet ${erwartet}`);
  assert(range.end >= range.start, `Bereich ${range.start}–${range.end} ist rückwärts`);
  assert(range.end <= istrEinheit4Quelle.pages, `Bereich endet hinter Frame 91: ${range.end}`);
  assert(typeof range.label === "string" && range.label.trim(), `Bereich ${range.start}–${range.end} ohne Bezeichnung`);
  for (let f = range.start; f <= range.end; f += 1) abdeckung[f] += 1;
  erwartet = range.end + 1;
}
assert(erwartet === 92, `Quellenregister endet bei ${erwartet - 1} statt 91`);
for (let f = 1; f <= 91; f += 1) assert(abdeckung[f] === 1, `Frame ${f} ist ${abdeckung[f]}-fach statt genau einmal zugeordnet`);

// Jedes Modul und jeder Fall muss im Quellenregister verankert sein.
for (const modul of istrEinheit4Module) {
  assert(modul.unit === 4, `${modul.id}: unit ist nicht 4`);
  assert(typeof istrBereichName[modul.area] === "string", `${modul.id}: Bereich ${modul.area} fehlt im Gesamtregister`);
  assert((modul.sourceFrames || []).length > 0, `${modul.id}: keine sourceFrames`);
  assert((modul.scheme || []).length > 0, `${modul.id}: kein Prüfungsschema`);
  assert((modul.normchain || []).length > 0, `${modul.id}: keine Normenkette`);
  assert(typeof modul.merksatz === "string" && modul.merksatz.trim(), `${modul.id}: kein Merksatz`);
  assert(istrEinheit4CaptureRanges.some((r) => (r.moduleIds || []).includes(modul.id)), `${modul.id}: im 91-Frame-Register nicht verankert`);
  for (const [a, b] of modul.sourceFrames) {
    assert(a >= 1 && b <= 91 && b >= a, `${modul.id}: sourceFrames ${a}–${b} liegen außerhalb von 1–91`);
  }
}
for (const fall of istrEinheit4Faelle) {
  assert(fall.unit === 4, `${fall.id}: unit ist nicht 4`);
  assert((fall.sourceFrames || []).length > 0, `${fall.id}: keine sourceFrames`);
  assert((fall.facts || []).length > 0 && (fall.solution || []).length > 0, `${fall.id}: Sachverhalt oder Lösung fehlt`);
  assert(istrEinheit4CaptureRanges.some((r) => (r.caseIds || []).includes(fall.id)), `${fall.id}: im 91-Frame-Register nicht verankert`);
}

// Querverweise müssen auf existierende Module/Fälle zeigen – auch über Einheitsgrenzen hinweg.
const alleModulIds = new Set(istrModule.map((m) => m.id));
const alleFallIds = new Set(istrFaelle.map((f) => f.id));
assert(alleModulIds.size === istrModule.length, "doppelte Modul-IDs im Gesamtregister");
assert(alleFallIds.size === istrFaelle.length, "doppelte Fall-IDs im Gesamtregister");
assert(new Set(istrTraining.map((q) => q.id)).size === istrTraining.length, "doppelte Trainings-IDs im Gesamtregister");
for (const modul of istrEinheit4Module) {
  for (const id of modul.links || []) assert(alleModulIds.has(id), `${modul.id}: Querverweis auf unbekanntes Modul ${id}`);
  for (const id of modul.caseIds || []) assert(alleFallIds.has(id), `${modul.id}: Querverweis auf unbekannten Fall ${id}`);
}
for (const fall of istrEinheit4Faelle) {
  for (const id of fall.moduleIds || []) assert(alleModulIds.has(id), `${fall.id}: Querverweis auf unbekanntes Modul ${id}`);
}
assert(istrEinheit4Module.some((m) => (m.links || []).some((id) => /^istr[123]-/.test(id))), "keine Rückverweise von Einheit 4 auf Einheit 1/2/3");
assert(istrModule.some((m) => m.unit !== 4 && (m.links || []).some((id) => id.startsWith("istr4-"))), "keine Vorverweise aus Einheit 1/2/3 auf Einheit 4");

// Zentrale fachliche Marker der gesamten Einheit.
const fachtext = JSON.stringify({ module: istrEinheit4Module, faelle: istrEinheit4Faelle, training: istrEinheit4Training });
for (const marker of [
  "§ 1 Abs. 1 S. 1 EStG",
  "§ 8 AO",
  "§ 7 Abs. 1 S. 1 AStG",
  "§ 7 Abs. 2 AStG",
  "§ 8 Abs. 5 AStG",
  "15 %",
  "9 %",
  "§ 8 Abs. 1 Nr. 6 Buchst. b AStG",
  "§ 8 Abs. 2 AStG",
  "§ 8 Abs. 3 AStG",
  "§ 9 AStG",
  "100.000",
  "§ 10 Abs. 1 AStG",
  "§ 10 Abs. 2 S. 1 AStG",
  "§ 10 Abs. 2 S. 4 AStG",
  "§ 20 Abs. 1 Nr. 1 EStG",
  "§ 32d EStG",
  "§ 11 AStG",
  "§ 12 Abs. 1 AStG",
  "§ 34c Abs. 1 EStG",
  "9.000 €",
  "A-Limited",
  "VAE",
]) assert(fachtext.includes(marker), `fachlicher Kernmarker fehlt: ${marker}`);

// Die AStG-Kette muss in der gesetzlichen Reihenfolge geprüft werden.
const kettenModule = ["istr4-02", "istr4-03", "istr4-04", "istr4-05", "istr4-06", "istr4-07", "istr4-08"];
const reihenfolge = istrEinheit4Module.map((m) => m.id);
let letzte = -1;
for (const id of kettenModule) {
  const i = reihenfolge.indexOf(id);
  assert(i > letzte, `Die AStG-Kette ist nicht chronologisch: ${id} steht zu früh`);
  letzte = i;
}

// Prüfungsschemata: 5 Schemata mit denselben Darstellungsmarken wie Einheit 2/3.
const schemaIds = [...schemaText.matchAll(/id: "(istr4-schema-[^"]+)"/g)].map((m) => m[1]);
assert(new Set(schemaIds).size === 5, `erwartet 5 Einheit-4-Schemata, gefunden ${new Set(schemaIds).size}`);
for (const marker of [
  "istr2-schema-block",
  "istr2-pruefschritt",
  "istr2-querverweis",
  "§ 7 Abs. 1 S. 1 AStG",
  "§ 8 Abs. 5 AStG",
  "§ 8 Abs. 1 Nr. 6 Buchst. b AStG",
  "§ 8 Abs. 3 AStG",
  "§ 9 AStG",
  "§ 10 Abs. 2 S. 4 AStG",
  "§ 12 Abs. 3 AStG",
  "§ 11 AStG",
]) assert(schemaText.includes(marker), `Schema-Marker fehlt: ${marker}`);

// Campus: Einheit 4 sichtbar, chronologisch nach Einheit 1/2/3, Post-it-Normverweise aktiv.
for (const marker of [
  "IstrEinheit4Pruefungsschema",
  "istrEinheit4Quelle",
  '"4","Einheit 4"',
  "Einheit 1 + 2 + 3 + 4",
  "gesamtFrames",
  "<SchemaPostitEnhancer",
  "istr4",
]) assert(campusText.includes(marker), `Campus-Marker fehlt: ${marker}`);
assert(campusText.indexOf("<IstrEinheit3Pruefungsschema") < campusText.indexOf("<IstrEinheit4Pruefungsschema"), "Einheit 4 steht im Schema-Campus nicht nach Einheit 3");
assert(/\[1,\s*2,\s*3,\s*4\]\.map\(\(unit\)/.test(campusText), "Das Training listet Einheit 4 nicht auf");

// Aggregation: Einheit 4 ist Bestandteil des Gesamtregisters.
for (const marker of [
  "istrEinheit4Quelle",
  "istrEinheit4Module",
  "istrEinheit4Faelle",
  "istrEinheit4Training",
  "istrEinheit4CaptureRanges",
  "...istrEinheit4Module",
  "...istrEinheit4Faelle",
  "...istrEinheit4Training",
  'id: "hzb", label: "Hinzurechnungsbesteuerung"',
]) assert(gesamtText.includes(marker), `Gesamtregister-Marker fehlt: ${marker}`);
assert(istrModule.filter((m) => m.unit === 4).length === 8, "Gesamtregister enthält nicht alle 8 Einheit-4-Module");
assert(istrFaelle.filter((f) => f.unit === 4).length === 2, "Gesamtregister enthält nicht alle 2 Einheit-4-Fälle");
assert(istrTraining.filter((q) => q.unit === 4).length === 12, "Gesamtregister enthält nicht alle 12 Einheit-4-Trainingsfragen");
const quelle4 = istrQuellen.find((q) => q.unit === 4);
assert(quelle4 && quelle4.ranges === istrEinheit4CaptureRanges, "Einheit 4 fehlt im Quellenstand des Campus");

// Private/technische Ansichten werden nur bezeichnet, nicht als persönliche Inhalte veröffentlicht.
for (const verboten of ["Persönliches PDF für", "private-user-images", "@gmail.com", "@outlook.com"]) {
  assert(!fachtext.includes(verboten) && !schemaText.includes(verboten), `private/personalisierende Veröffentlichung gefunden: ${verboten}`);
}

console.log(`K2 IStR Einheit 4 vollständig: 91/91 physische PDF-Seiten/Frames, ${istrEinheit4Module.length} Lernmodule, ${istrEinheit4Faelle.length} Fall-/Transferstrecken, ${new Set(schemaIds).size} digitale Schemata, ${istrEinheit4Training.length} Trainingsfragen; AStG-Kette §§ 7–12 und einheitenübergreifende Querverweise geprüft.`);
