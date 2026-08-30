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
assert(campus.includes('useAnsichtVerlauf("cockpit")'), "IStR-Campus startet nach Ergänzung der Lernstrecke nicht im Cockpit");
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

for (const marker of [
  'borderRadius: 10',
  'background: "var(--feld)"',
  'display: "grid"',
]) {
  assert(schema.includes(marker), `Prüfschritt-Hervorhebung fehlt: ${marker}`);
}

/* Prüfungspunkte bleiben fett hervorgehoben - die Karte selbst trägt keine
   Farbe mehr, farbig sind nur noch die einzelnen Norm-Post-its. */
assert(
  schema.includes('fontWeight: 700'),
  "Der Titel eines Prüfungspunktes muss weiterhin fett hervorgehoben sein",
);
assert(
  !schema.includes("istr-postit"),
  "Die flächige Post-it-Umrandung ganzer Prüfungspunkte ist ersetzt worden und darf nicht zurückkehren",
);

/* Jede Norm bekommt ein eigenes Post-it - wie in den Bilanzen-Schemata:
   Hover zeigt die amtliche Überschrift, ein Klick öffnet dejure.org.
   SchemaPostitEnhancer erkennt die anzureichernden Blöcke am Ton; das
   IStR-Schema trägt seine Überschrift in einer Flex-Zeile und muss ihn
   deshalb ausdrücklich als data-schema-ton mitgeben. */
const enhancer = fs.readFileSync(path.join(root, "src/components/SchemaPostitEnhancer.jsx"), "utf8");
assert(
  schema.includes("data-schema-ton={block.ton}"),
  "Ohne data-schema-ton reichert SchemaPostitEnhancer die IStR-Normen nicht an",
);
assert(
  /function tonAusBlock\(block\)\s*\{[^}]*dataset\.schemaTon/s.test(enhancer),
  "SchemaPostitEnhancer wertet data-schema-ton nicht aus",
);
assert(
  enhancer.includes('const TOENE = new Set(["ansatz", "bewertung", "ausserbilanz", "hinweis"])'),
  "Ein unbekannter Ton muss verworfen werden, sonst entstehen Post-its ohne Farbe",
);

const toene = [...schema.matchAll(/ton: "(\w+)"/g)].map((m) => m[1]);
assert(
  toene.join(",") === "ansatz,bewertung",
  `Die beiden Quellseiten müssen die Töne ansatz und bewertung tragen, gefunden: ${toene.join(",") || "keine"}`,
);

/* Die im Schema zitierten Gesetze müssen der Enhancer-Erkennung bekannt sein,
   sonst bleibt die Norm stummer Fließtext. */
for (const gesetz of ["EStG", "AStG", "InvStG"]) {
  assert(
    new RegExp(`^\\s*"${gesetz}",$`, "m").test(enhancer),
    `${gesetz} fehlt in GESETZ_ABKUERZUNGEN - Normen dieses Gesetzes bekommen kein Post-it`,
  );
}

/* Stichproben: Überschriften der tragenden IStR-Normen, damit der Tooltip mehr
   zeigt als die Fundstelle selbst. */
for (const [referenz, ueberschrift] of [
  ["EStG/1", "Steuerpflicht"],
  ["EStG/49", "Beschränkt steuerpflichtige Einkünfte"],
  ["EStG/50", "Sondervorschriften für beschränkt Steuerpflichtige"],
  ["EStG/34c", "Steuerermäßigung bei ausländischen Einkünften"],
  ["AStG/6", "Besteuerung des Vermögenszuwachses"],
]) {
  assert(
    enhancer.includes(`"${referenz}": "${ueberschrift}"`),
    `Normüberschrift fehlt: ${referenz}`,
  );
}

assert(
  enhancer.includes("https://dejure.org/gesetze/"),
  "Der Klick auf ein Norm-Post-it muss dejure.org öffnen",
);

const aavvBadges = [...schema.matchAll(/badge:\s*"([AV])"/g)].map((treffer) => treffer[1]);
assert(aavvBadges.join("") === "AAVV", `DBA-AAVV-Badges erwartet, gefunden: ${aavvBadges.join("") || "keine"}`);
for (const marker of [
  'const aavvBlau = "#2563eb";',
  'data-aavv-schritt={element.badge || undefined}',
  'borderRadius: "50%"',
  'border: `2px solid ${aavvBlau}`',
  'color: aavvBlau',
]) {
  assert(schema.includes(marker), `AAVV-Kreis-/Farbmarkierung fehlt: ${marker}`);
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

const merkCss = fs.readFileSync(path.join(root, "src/components/istr-merkhilfe.css"), "utf8");

for (const marker of seite1) assert(schema.includes(marker), `Quellseite 1 unvollständig; fehlt: ${marker}`);
for (const marker of seite2) assert(schema.includes(marker), `Quellseite 2 unvollständig; fehlt: ${marker}`);

assert(!schema.includes("Persönliches PDF für"), "Personalisierungszeile aus dem PDF wurde veröffentlicht");
assert(!campus.includes("Persönliches PDF für"), "Personalisierungszeile aus dem PDF wurde im Campus veröffentlicht");

const merk = [...schema.matchAll(/merk: "([EIS])"/g)].map((m) => m[1]);
assert(merk.join("") === "EIS", `Merkbuchstaben müssen E, I, S in dieser Reihenfolge sein, gefunden: ${merk.join("") || "keine"}`);
assert(schema.includes('merkhilfe: "eis"'), "Merkhilfe ist nicht am Punkt § 1 Abs. 4 EStG hinterlegt");
assert(schema.includes("function EisBild"), "Merkbild fehlt");
assert(schema.includes("Merkhilfe EIS: Einkunftsart · Inländische Einkünfte · Steuerabzug"), "Der Merkhilfe fehlt die ausgeschriebene Auflösung");
assert(merkCss.includes("color: var(--gruen)"), "Die Merkbuchstaben müssen das Grün des Designsystems nutzen, damit sie in beiden Themes lesbar bleiben");

console.log(`K2 IStR Basis OK: 1 Basisschema, ${seiten.length}/2 Quellseiten, AAVV visuell markiert und Merkhilfe EIS vorhanden.`);
