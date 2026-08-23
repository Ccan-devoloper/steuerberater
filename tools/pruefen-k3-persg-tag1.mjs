import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dataPath = path.join(root, "src/data/k3-persg-tag1.js");
const campusPath = path.join(root, "src/components/K3PersGCampus.jsx");
const visualPath = path.join(root, "src/components/K3PersGVisuals.jsx");
const cssPath = path.join(root, "src/components/k3-persg.css");

for (const p of [dataPath, campusPath, visualPath, cssPath]) {
  if (!fs.existsSync(p)) throw new Error(`PersG Tag 1: Datei fehlt: ${path.relative(root, p)}`);
}

const { persgQuelle, persgSeitenplan, persgModule, persgFaelle, persgSchemata, persgQuizfragen } = await import(pathToFileURL(dataPath));
const campus = fs.readFileSync(campusPath, "utf8");
const visuals = fs.readFileSync(visualPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");

const assert = (ok, msg) => { if (!ok) throw new Error(`PersG Tag 1: ${msg}`); };

assert(persgQuelle.pages === 14, "Quellenumfang der isolierten Tag-1-Daten ist nicht 14 Seiten.");
assert(persgSeitenplan.length === 14, `Seitenplan hat ${persgSeitenplan.length} statt 14 Einträge.`);
const pages = persgSeitenplan.map((x) => x.page).sort((a, b) => a - b);
assert(pages.every((p, i) => p === i + 1), `Seitenplan ist nicht lückenlos 1–14: ${pages.join(", ")}`);
assert(new Set(persgSeitenplan.map((x) => x.page)).size === 14, "Eine PDF-Seite ist doppelt primär zugeordnet.");
assert(persgModule.length === 8, `Erwartet 8 Lernmodule, gefunden ${persgModule.length}.`);
assert(persgFaelle.length === 1 && persgFaelle[0].nr === 1, "Originalfall 1 (ABC-OHG) fehlt.");
assert(persgSchemata.length >= 7, "Prüfschema-Sammlung ist unvollständig.");
assert(persgQuizfragen.length >= 6, "Training ist unvollständig.");

const allData = JSON.stringify({ persgModule, persgFaelle, persgSchemata });
for (const marker of [
  "§ 15 Abs. 1 S. 1 Nr. 2", "3 %", "24.500", "Mitunternehmerrisiko", "Mitunternehmerinitiative",
  "328.000", "220.000", "110.000", "59.000", "51.000", "580.000", "299.000", "251.000",
  "gesamthänderisches Privatvermögen", "Sonderbetriebsvermögen I", "Sonderbetriebsvermögen II",
  "400.000", "300.000", "18.000", "5.800", "100.000", "Teilwertabschreibung", "MU-BAS"
]) assert(allData.includes(marker), `Quellenmarker fehlt: ${marker}`);

for (const marker of ["Grundtatbestand", "Abfaerbung", "Mitunternehmer", "Gewinnstufen", "Abc", "Betriebsvermoegen", "Sbv", "Konkurrenz"]) {
  assert(visuals.includes(`function ${marker}`), `Visual ${marker} fehlt.`);
}
assert(visuals.includes("persg-table--stufen"), "Zweistufige Gewinnermittlung ist nicht als Tabelle digitalisiert.");
assert(visuals.includes("Sonder-GuV A"), "Sonder-GuV aus Seite 11 fehlt.");
assert(visuals.includes("SBV hat stets Vorrang") || allData.includes("SBV hat stets Vorrang"), "Schlussregel Seite 14 fehlt.");

for (const marker of ["Originalfälle", "Klausurmodus", "Prüfschema", "Training", "persgFaelle.map", "fallOeffnen", "K3PersGVisuals", "useFortschritt"]) {
  assert(campus.includes(marker), `Campusintegration fehlt: ${marker}`);
}
assert(!campus.includes("Noch keine eigenen Quelldaten"), "Alter PersG-Platzhalter ist noch aktiv.");
assert(campus.includes("Tag 1 · 14 Seiten") || campus.includes("14 / 14 Seiten") || campus.includes("/ 14 Seiten"), "14-Seiten-Hinweis für Tag 1 fehlt im gemeinsamen Cockpit.");
assert(css.includes(".persg-sheet") && css.includes(".persg-table") && css.includes(".persg-finalrules"), "PersG-Schemastile unvollständig.");

console.log("K3 PersG · Tag 1 OK: isolierte Quelle 14/14 Seiten; Inhalte im gemeinsamen Tag-1-bis-3-Campus weiter vollständig integriert.");
