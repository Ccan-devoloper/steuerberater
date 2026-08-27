import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const fachleistePath = path.join(root, "src/components/K2Fachleiste.jsx");
const shellPath = path.join(root, "src/components/CampusShell.jsx");
const campusPath = path.join(root, "src/components/K2IStRCampus.jsx");
const schemaPath = path.join(root, "src/components/IstrPruefungsschemata.jsx");

const assert = (ok, msg) => { if (!ok) throw new Error(`K2 IStR: ${msg}`); };

for (const datei of [fachleistePath, shellPath, campusPath, schemaPath]) {
  assert(fs.existsSync(datei), `Datei fehlt: ${path.relative(root, datei)}`);
}

const fachleiste = fs.readFileSync(fachleistePath, "utf8");
const shell = fs.readFileSync(shellPath, "utf8");
const campus = fs.readFileSync(campusPath, "utf8");
const schema = fs.readFileSync(schemaPath, "utf8");

assert(
  fachleiste.includes('{ id: "gewst", label: "Gewerbesteuer", kurz: "GewSt" },\n  { id: "istr", label: "Internationales Steuerrecht", kurz: "IStR" },'),
  "IStR-Reiter steht nicht unmittelbar neben Gewerbesteuer",
);
assert(shell.includes('const K2IStRCampus = lazy(() => import("./K2IStRCampus"));'), "IStR-Campus wird nicht lazy geladen");
assert(shell.includes('if (k2Fach === "istr")'), "IStR-Routing in CampusShell fehlt");
assert(campus.includes('<K2Fachleiste aktiv="istr"'), "IStR-Campus markiert den Fachreiter nicht aktiv");
assert(campus.includes('useAnsichtVerlauf("schema")'), "IStR-Campus startet nicht beim derzeit einzigen Fachinhalt, dem Prüfschema");
assert(campus.includes("<SchemaPostitEnhancer"), "Norm-/Querverweis-Anreicherung wie bei Bilanzen fehlt");

for (const marker of [
  'className="filter"',
  'className="panel"',
  'borderLeft: `6px solid ${farben[block.ton] || farben.neutral}`',
  'Quelle: © Markus Nöthen',
  'Quellseite {block.seite} / 2',
]) {
  assert(schema.includes(marker), `Bilanzen-nahe Darstellungsmarke fehlt: ${marker}`);
}

const seiten = [...schema.matchAll(/seite:\s*(\d+),/g)].map((treffer) => Number(treffer[1]));
assert(seiten.join(",") === "1,2", `Quellseiten 1 und 2 erwartet, gefunden: ${seiten.join(",") || "keine"}`);

const seite1 = [
  "Schema Internationales Steuerrecht",
  "§ 1 Abs. 1 S. 1 EStG?",
  "DBA (AAVV)",
  "§ 34c EStG / § 32d Abs. 5 EStG falls kein DBA",
  "§ 7 AStG",
  "§ 2a EStG",
  "§ 1a EStG",
  "Falls kein § 1 Abs. 1 S. 1 EStG:",
  "§ 1 Abs. 3 EStG?",
  "Antrag auf unb. Stpfl. mit inl. Einkünften nach § 49 EStG, damit Grundfreibetrag, Sonderausgaben und agB berücksichtigt werden, denn diese werden bei § 1 Abs. 4 EStG nicht berücksichtigt (§ 50 Abs. 1 S. 2, 4 EStG)",
  "⇒ Schema § 1 Abs. 3 EStG siehe § 1 Abs. 4 EStG",
  "Falls kein § 1 Abs. 3 EStG:",
  "Bei Wegzug (§§ 2 Abs. 7 S. 3, 32b Abs. 1 S. 1 Nr. 2 EStG, §§ 2, 6 AStG, § 19 Abs. 3 InvStG)",
  "§ 1 Abs. 4 EStG?",
  "1 der 7",
  "Inländische Einkünfte § 49 EStG",
  "Wie kommt der Staat an die Kohle?",
  "Steuerabzug: § 38 ff. EStG, § 43 ff. EStG, § 50a EStG",
  "⇒ § 50 Abs. 2 S. 1 EStG Steuerabzug hat Abgeltungswirkung, beachte § 50 Abs. 2 S. 2 EStG!",
  "Falls kein Steuerabzug: Abgabe Steuererklärung § 25 Abs. 1, Abs. 3 EStG ohne Grundfreibetrag, Sonderausgaben und agB § 50 Abs. 1 S. 2, 4 EStG",
  "DBA (AAV)",
];

const seite2 = [
  "Schema DBA",
  "Anwendbarkeit:",
  "Art. 1 persönlich und Art. 2 Abs. 1 sachlich",
  "Ansässigkeit:",
  "Art. 4 Abs. 1",
  "Verteilung:",
  "Wer besteuert? Art. 6 ff. („Meine Oma Prinzip“)",
  "Vermeidung",
  "(nur durch Ansässigkeitsstaat): Art. 22 oder Art. 23 oder Art. 24",
  "Anrechnungsmethode (Grds. Dividenden/Zinsen/Lizenzen)",
  "Freistellungsmethode mit PVB, § 32b Abs. 1 S. 1 Nr. 3 EStG,",
  "Rückausnahme kein PVB nach § 32b Abs. 1 S. 2 … EStG",
];

for (const marker of seite1) assert(schema.includes(marker), `Quellseite 1 unvollständig; fehlt: ${marker}`);
for (const marker of seite2) assert(schema.includes(marker), `Quellseite 2 unvollständig; fehlt: ${marker}`);

/* Die Personalisierungs-/Adresszeile des gelieferten PDFs ist kein Fachinhalt und
   darf nicht versehentlich im öffentlichen Repository landen. */
assert(!schema.includes("Persönliches PDF für"), "Personalisierungszeile aus dem PDF wurde veröffentlicht");
assert(!campus.includes("Persönliches PDF für"), "Personalisierungszeile aus dem PDF wurde im Campus veröffentlicht");

console.log(`K2 IStR OK: 1 Prüfschema, ${seiten.length}/2 Quellseiten, ${seite1.length + seite2.length} fachliche Vollständigkeitsmarker.`);
