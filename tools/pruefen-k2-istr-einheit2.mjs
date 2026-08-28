import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dataPath = path.join(root, "src/data/istr-einheit-2.js");
const campusPath = path.join(root, "src/components/K2IStRCampus.jsx");
const schemaPath = path.join(root, "src/components/IstrEinheit2Pruefungsschema.jsx");
const cssPath = path.join(root, "src/components/istr-einheit2.css");
const assert = (ok, msg) => { if (!ok) throw new Error(`K2 IStR Einheit 2: ${msg}`); };

for (const datei of [dataPath, campusPath, schemaPath, cssPath]) {
  assert(fs.existsSync(datei), `Datei fehlt: ${path.relative(root, datei)}`);
}

const data = await import(`${pathToFileURL(dataPath).href}?t=${Date.now()}`);
const {
  istrEinheit2Quelle: quelle,
  istrEinheit2Module: module,
  istrEinheit2Faelle: faelle,
  istrEinheit2Training: training,
  istrEinheit2CaptureRanges: ranges,
} = data;
const campus = fs.readFileSync(campusPath, "utf8");
const schema = fs.readFileSync(schemaPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");
const datenText = fs.readFileSync(dataPath, "utf8");

assert(quelle.pages === 453, `453 Quellframes erwartet, deklariert: ${quelle.pages}`);
assert(module.length === 9, `9 Lernmodule erwartet, gefunden: ${module.length}`);
assert(faelle.length === 5, `5 Fall-/Transferstrecken erwartet, gefunden: ${faelle.length}`);
assert(training.length >= 8, `mindestens 8 Trainingsfragen erwartet, gefunden: ${training.length}`);

/* Jede physische PDF-Seite muss exakt einmal einem Quellenbereich zugeordnet sein. */
assert(ranges.length > 0, "Quellenbereiche fehlen");
assert(ranges[0].start === 1, `Quellenzuordnung beginnt bei ${ranges[0].start} statt 1`);
let gezaehlt = 0;
for (let i = 0; i < ranges.length; i += 1) {
  const r = ranges[i];
  assert(Number.isInteger(r.start) && Number.isInteger(r.end) && r.start <= r.end, `ungültiger Bereich ${JSON.stringify(r)}`);
  if (i > 0) assert(r.start === ranges[i - 1].end + 1, `Lücke/Überlappung zwischen ${ranges[i - 1].end} und ${r.start}`);
  gezaehlt += r.end - r.start + 1;
}
assert(ranges.at(-1).end === 453, `Quellenzuordnung endet bei ${ranges.at(-1).end} statt 453`);
assert(gezaehlt === 453, `453 Frames erwartet, gezählt: ${gezaehlt}`);

const modulIds = new Set(module.map((m) => m.id));
const fallIds = new Set(faelle.map((f) => f.id));
assert(modulIds.size === module.length, "doppelte Modul-ID");
assert(fallIds.size === faelle.length, "doppelte Fall-ID");

for (const r of ranges) {
  for (const id of r.moduleIds || []) assert(modulIds.has(id), `Quellenbereich ${r.start}–${r.end} referenziert unbekanntes Modul ${id}`);
  for (const id of r.caseIds || []) assert(fallIds.has(id), `Quellenbereich ${r.start}–${r.end} referenziert unbekannten Fall ${id}`);
}
for (const m of module) {
  assert(m.sourceFrames?.length > 0, `${m.id}: Quellenframes fehlen`);
  assert(m.normchain?.length > 0 && m.scheme?.length > 0, `${m.id}: Normkette oder Prüfschritte fehlen`);
  for (const id of m.links || []) assert(modulIds.has(id), `${m.id}: unbekannter Modul-Querverweis ${id}`);
  for (const id of m.caseIds || []) assert(fallIds.has(id), `${m.id}: unbekannter Fall-Querverweis ${id}`);
  assert(ranges.some((r) => (r.moduleIds || []).includes(m.id)), `${m.id}: in der 453-Frame-Zuordnung nicht verankert`);
}
for (const f of faelle) {
  assert(f.facts?.length > 0 && f.solution?.length > 0, `${f.id}: Sachverhalt oder Lösungsweg fehlt`);
  for (const id of f.moduleIds || []) assert(modulIds.has(id), `${f.id}: unbekannter Modul-Querverweis ${id}`);
  assert(ranges.some((r) => (r.caseIds || []).includes(f.id)), `${f.id}: in der 453-Frame-Zuordnung nicht verankert`);
}

/* Fachliche Marker, die aus den über alle 453 Frames geprüften Themenclustern stammen. */
for (const marker of [
  "§ 1 Abs. 3 EStG", "90-%", "Grundfreibetrag", "§ 1 Abs. 4 EStG", "EIS",
  "§ 49 Abs. 1 Nr. 5 EStG", "§ 50 Abs. 2 EStG", "9 K 1179/20",
  "München", "Kitzbühel", "Graz", "Bonn", "Berlin Property", "Panama",
  "Art. 4 Abs. 2", "Mittelpunkt der Lebensinteressen", "Art. 5", "Art. 6", "Art. 7", "Art. 13", "Art. 15",
  "Art. 23", "§ 32b Abs. 1 S. 2 EStG",
]) {
  assert(datenText.includes(marker), `fachlicher Quellenmarker fehlt: ${marker}`);
}

/* Campus muss jetzt dieselbe Struktur wie die anderen gebietsübergreifenden Fächer anbieten. */
for (const marker of [
  '["cockpit",',
  'id: "module"',
  'id: "faelle"',
  'id: "schema"',
  'id: "training"',
  'id: "quellen"',
  "istrEinheit2Module",
  "istrEinheit2Faelle",
  "istrEinheit2CaptureRanges",
  "453/453",
  "<SchemaPostitEnhancer",
  "<IstrEinheit2Pruefungsschema",
  "Querverweise",
]) {
  assert(campus.includes(marker), `Campus-Marker fehlt: ${marker}`);
}

/* Schemata: Bilanzen-nahe Filter/Panel/Blockdarstellung, EIS und blau umkreistes AAVV. */
for (const marker of [
  'id: "istr2-schema-eis"',
  'id: "istr2-schema-aavv"',
  'className="filter istr2-schema-filter"',
  'className="panel istr2-schema-panel"',
  'className="istr2-schema-block"',
  'badge: "E"', 'badge: "I"', 'badge: "S"',
  '["A", "A", "V", "V"]',
  'const aavvBlau = "#2563eb";',
  "Art. 4 Abs. 2",
  "ständige Wohnstätte",
  "Mittelpunkt der Lebensinteressen",
  "gewöhnlicher Aufenthalt",
  "Staatsangehörigkeit",
  "Verständigungsverfahren",
  "Art. 7 + Art. 5",
  "Art. 15",
  "§ 32b Abs. 1 S. 2 EStG",
]) {
  assert(schema.includes(marker), `Schema-Marker fehlt: ${marker}`);
}
for (const marker of [
  ".istr2-aavv-badge", "border-radius: 50%", "#2563eb",
  ".istr2-pruefschritt", ".istr2-schema-raster", ".istr2-tiebreaker", ".istr2-querverweis",
]) {
  assert(css.includes(marker), `CSS-Marker fehlt: ${marker}`);
}

/* Der öffentliche Campus soll keine Screenshots mit privaten Notability-/Personenansichten veröffentlichen. */
for (const text of [campus, schema, datenText]) {
  assert(!/\.webp|\.jpe?g|\.png/i.test(text), "Einheit 2 referenziert unerwartet ein Screenshot-Bild");
  assert(!text.includes("Persönliches PDF für"), "Personalisierungszeile wurde übernommen");
}
assert(datenText.includes("Video- und Personenansicht – nicht reproduziert"), "private Abschlussframes sind nicht ausdrücklich technisch zugeordnet");

console.log(`K2 IStR Einheit 2 OK: ${module.length} Module, ${faelle.length} Fälle/Transfers, ${ranges.length} Quellenbereiche und ${gezaehlt}/453 Frames lückenlos zugeordnet.`);
