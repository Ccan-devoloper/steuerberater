import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dataPath = path.join(root, "src/data/istr-einheit-1.js");
const gesamtPath = path.join(root, "src/data/istr-gesamt.js");
const campusPath = path.join(root, "src/components/K2IStRCampus.jsx");
const schemaPath = path.join(root, "src/components/IstrEinheit1Pruefungsschema.jsx");
const assert = (ok, msg) => { if (!ok) throw new Error(`K2 IStR Einheit 1: ${msg}`); };

for (const datei of [dataPath, gesamtPath, campusPath, schemaPath]) {
  assert(fs.existsSync(datei), `Datei fehlt: ${path.relative(root, datei)}`);
}

const data = await import(`${pathToFileURL(dataPath).href}?t=${Date.now()}`);
const gesamt = await import(`${pathToFileURL(gesamtPath).href}?t=${Date.now()}`);
const {
  istrEinheit1Quelle: quelle,
  istrEinheit1Module: module,
  istrEinheit1Faelle: faelle,
  istrEinheit1Training: training,
  istrEinheit1CaptureRanges: ranges,
} = data;
const { istrModule: alleModule, istrFaelle: alleFaelle } = gesamt;
const campus = fs.readFileSync(campusPath, "utf8");
const schema = fs.readFileSync(schemaPath, "utf8");
const datenText = fs.readFileSync(dataPath, "utf8");
const gesamtText = fs.readFileSync(gesamtPath, "utf8");

assert(quelle.title === "IStR, 1. Einheit.pdf", `falsche Quelle: ${quelle.title}`);
assert(quelle.pages === 342, `342 physische PDF-Seiten/Frames erwartet, deklariert: ${quelle.pages}`);
assert(module.length === 12, `12 Lernmodule erwartet, gefunden: ${module.length}`);
assert(faelle.length === 11, `11 Fall-/Transferstrecken erwartet, gefunden: ${faelle.length}`);
assert(training.length >= 12, `mindestens 12 Trainingsfragen erwartet, gefunden: ${training.length}`);

/* Jede physische Seite muss exakt einmal einem Quellenbereich zugeordnet sein. */
assert(ranges.length > 0, "Quellenbereiche fehlen");
assert(ranges[0].start === 1, `Quellenzuordnung beginnt bei ${ranges[0].start} statt 1`);
let gezaehlt = 0;
for (let i = 0; i < ranges.length; i += 1) {
  const r = ranges[i];
  assert(Number.isInteger(r.start) && Number.isInteger(r.end) && r.start <= r.end, `ungültiger Bereich ${JSON.stringify(r)}`);
  if (i > 0) assert(r.start === ranges[i - 1].end + 1, `Lücke/Überlappung zwischen ${ranges[i - 1].end} und ${r.start}`);
  gezaehlt += r.end - r.start + 1;
}
assert(ranges.at(-1).end === 342, `Quellenzuordnung endet bei ${ranges.at(-1).end} statt 342`);
assert(gezaehlt === 342, `342 Seiten erwartet, gezählt: ${gezaehlt}`);
assert(ranges.some((r) => r.kind === "technisch"), "technische Zwischenframes werden nicht separat ausgewiesen");
assert(ranges.some((r) => r.kind === "fall"), "Fallbereiche fehlen");
assert(ranges.some((r) => r.kind === "transfer"), "Klausurtransferbereiche fehlen");
assert(ranges.some((r) => r.kind === "gesetz"), "Gesetzesdurchgänge fehlen");

const modulIds = new Set(module.map((m) => m.id));
const fallIds = new Set(faelle.map((f) => f.id));
const alleModulIds = new Set(alleModule.map((m) => m.id));
const alleFallIds = new Set(alleFaelle.map((f) => f.id));
assert(modulIds.size === module.length, "doppelte Modul-ID");
assert(fallIds.size === faelle.length, "doppelte Fall-ID");

for (const r of ranges) {
  for (const id of r.moduleIds || []) assert(alleModulIds.has(id), `Quellenbereich ${r.start}–${r.end} referenziert unbekanntes Modul ${id}`);
  for (const id of r.caseIds || []) assert(alleFallIds.has(id), `Quellenbereich ${r.start}–${r.end} referenziert unbekannten Fall ${id}`);
}
const seiteIstZugeordnet = (seite) => ranges.some((r) => r.start <= seite && r.end >= seite);
for (const m of module) {
  assert(m.unit === 1, `${m.id}: Einheit nicht als 1 markiert`);
  assert(m.sourceFrames?.length > 0, `${m.id}: Quellenframes fehlen`);
  assert(m.normchain?.length > 0 && m.scheme?.length > 0 && m.goals?.length > 0, `${m.id}: Normkette, Prüfschritte oder Lernziele fehlen`);
  for (const id of m.links || []) assert(alleModulIds.has(id), `${m.id}: unbekannter Modul-Querverweis ${id}`);
  for (const id of m.caseIds || []) assert(alleFallIds.has(id), `${m.id}: unbekannter Fall-Querverweis ${id}`);
  for (const [a, b] of m.sourceFrames) {
    assert(Number.isInteger(a) && Number.isInteger(b) && a >= 1 && b <= 342 && a <= b, `${m.id}: ungültiger Quellenbereich ${a}–${b}`);
    assert(seiteIstZugeordnet(a) && seiteIstZugeordnet(b), `${m.id}: Quellenbereich ${a}–${b} liegt außerhalb der 342-Seiten-Zuordnung`);
  }
  /* Ein Modul kann direkt im Quellenregister oder über einen Originalfall auf denselben Seiten verankert sein. */
  const direkt = ranges.some((r) => (r.moduleIds || []).includes(m.id));
  const ueberFall = (m.caseIds || []).some((fallId) => ranges.some((r) => (r.caseIds || []).includes(fallId)));
  assert(direkt || ueberFall, `${m.id}: weder direkt noch über einen Quellenfall verankert`);
}
for (const f of faelle) {
  assert(f.unit === 1, `${f.id}: Einheit nicht als 1 markiert`);
  assert(f.facts?.length > 0 && f.solution?.length > 0 && f.sourceFrames?.length > 0, `${f.id}: Sachverhalt, Lösungsweg oder Quelle fehlt`);
  for (const id of f.moduleIds || []) assert(alleModulIds.has(id), `${f.id}: unbekannter Modul-Querverweis ${id}`);
  assert(ranges.some((r) => (r.caseIds || []).includes(f.id)), `${f.id}: in der 342-Seiten-Zuordnung nicht verankert`);
}

/* Fachliche Vollständigkeitsmarker aus dem gesamten 342-Seiten-Mitschnitt. */
for (const marker of [
  "§ 1 Abs. 1 EStG", "§ 8 AO", "§ 9 AO",
  "§ 34c", "§ 32d Abs. 5 EStG",
  "§ 2a EStG", "§ 7 AStG",
  "§ 1a EStG", "§ 26 EStG",
  "§ 1 Abs. 3 EStG", "90 %", "Grundfreibetrag",
  "§ 1 Abs. 4 EStG", "EIS",
  "§ 49 EStG", "R 49.3",
  "§ 50a EStG", "§ 50 EStG", "§ 50c EStG",
  "§ 2 Nr. 1 KStG", "§ 6 AStG",
  "Mohamed Nihad", "Shakira", "B-Limitada",
  "Brasilien", "Chile", "Frankreich", "Italien",
  "Klausur E 2022", "Klausurtransfer 2019", "Klausurtransfer 2021",
]) assert(datenText.includes(marker), `fachlicher Quellenmarker fehlt: ${marker}`);

/* Sechs Einheit-1-Schemata, Bilanzen-nahe Karten und EIS-Darstellung. */
for (const marker of [
  'id: "istr1-schema-auslandseinkuenfte"',
  'id: "istr1-schema-2a"',
  'id: "istr1-schema-1a"',
  'id: "istr1-schema-1abs3"',
  'id: "istr1-schema-eis"',
  'id: "istr1-schema-wegzug"',
  'className="filter istr2-schema-filter"',
  'className="panel istr2-schema-panel"',
  'className="istr2-schema-block"',
  'className="istr2-pruefschritt"',
  'badge: "E"', 'badge: "I"', 'badge: "S"',
  "§ 34c", "§ 32d Abs. 5", "§ 2a", "§ 1a", "§ 1 Abs. 3", "§ 49", "§ 50a", "§ 50", "Wegzug",
  'schemaId: "istr1-schema-eis"',
]) assert(schema.includes(marker), `Schema-/Darstellungsmarker fehlt: ${marker}`);

/* Campus: tatsächliche Einheit 1 steht vor Einheit 2 und beide sind gemeinsam navigierbar. */
for (const marker of [
  "IstrEinheit1Pruefungsschema",
  "IstrEinheit2Pruefungsschema",
  "istrModule", "istrFaelle", "istrTraining", "istrQuellen",
  "Einheit 1 + 2", "Alle Einheiten",
  "342", "453",
  "<SchemaPostitEnhancer",
  "Querverweise",
]) assert(campus.includes(marker), `Campus-Marker fehlt: ${marker}`);
assert(campus.indexOf("<IstrEinheit1Pruefungsschema") < campus.indexOf("<IstrEinheit2Pruefungsschema"), "Einheit-1-Schemata stehen nicht vor Einheit 2");

/* Aggregation: beide Einheiten und echte Querverweise in beide Richtungen. */
for (const marker of ["...istrEinheit1Module", "...istrEinheit2Module", '"istr2-01": ["istr1-05"', '"istr2-04": ["istr1-01"']) {
  assert(gesamtText.includes(marker), `Einheiten-/Querverweis-Aggregation fehlt: ${marker}`);
}
assert(alleModule.filter((m) => m.unit === 1).length === 12, "Gesamtregister enthält nicht 12 Module aus Einheit 1");
assert(alleModule.some((m) => m.unit === 2), "Einheit 2 ging bei der Neuordnung verloren");

/* Keine privaten Unterrichtsscreenshots/Personalisierungszeilen ins öffentliche Repo übernehmen. */
for (const text of [campus, schema, datenText, gesamtText]) {
  assert(!/\.webp|\.jpe?g|\.png/i.test(text), "unerwartete Screenshot-Bildreferenz im öffentlichen Einheit-1-Code");
  assert(!text.includes("Persönliches PDF für"), "Personalisierungszeile wurde übernommen");
}

console.log(`K2 IStR Einheit 1 OK: ${module.length} Module, ${faelle.length} Fälle/Transfers, ${ranges.length} Quellenbereiche und ${gezaehlt}/342 Seiten lückenlos zugeordnet; Einheit 2 bleibt integriert.`);
