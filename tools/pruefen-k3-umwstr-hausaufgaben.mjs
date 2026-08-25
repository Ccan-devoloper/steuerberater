import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { createHash } from "node:crypto";

/**
 * Prueft die drei UmwStR-Hausaufgaben.
 *
 * Der Kern ist eine echte Inhaltspruefung: Die ausgelieferten Textbloecke
 * werden dekodiert, entpackt und gegen Zeichenzahl und SHA-256 aus dem
 * Metamodul gehalten. Zusaetzlich wird geprueft, dass jede PDF-Seite als
 * Marke vorhanden ist, dass die Trennstelle zwischen Aufgabe und Loesung
 * existiert und dass keine Personalisierungszeile uebernommen wurde.
 */

const root = process.cwd();
const assert = (ok, msg) => { if (!ok) throw new Error(`K3 UmwStR Hausaufgaben: ${msg}`); };
const lies = (p) => {
  const voll = path.join(root, p);
  assert(fs.existsSync(voll), `Datei fehlt: ${p}`);
  return fs.readFileSync(voll, "utf8");
};

const metaQuelle = lies("src/data/k3-umwstr-hausaufgaben-volltext-meta.js");
const daten = lies("src/data/k3-umwstr-hausaufgaben.js");
const teilen = lies("src/data/k3-umwstr-hausaufgaben-teilen.js");
const ansicht = lies("src/components/K3UmwStRHausaufgaben.jsx");
const campus = lies("src/components/K3UmwStRCampus.jsx");

// 1. Metadaten einlesen
const meta = {};
for (const [, nr, zeichen, seiten, sha] of metaQuelle.matchAll(
  /(\d+): \{ zeichen: (\d+), seiten: (\d+), sha256: "([0-9a-f]{64})" \}/g,
)) {
  meta[Number(nr)] = { zeichen: Number(zeichen), seiten: Number(seiten), sha256: sha };
}
const termine = Object.keys(meta).map(Number).sort((a, b) => a - b);
assert(termine.join(",") === "1,2,3", `es müssen die Hausaufgaben 1–3 deklariert sein, gefunden: ${termine.join(",")}`);

// 2. Trennstellen einlesen
const loesungsseiten = {};
for (const [, nr, seite] of teilen.matchAll(/^\s{2}(\d+): (\d+),/gm)) {
  loesungsseiten[Number(nr)] = Number(seite);
}
assert(Object.keys(loesungsseiten).length === 3, "für jede Hausaufgabe muss eine Lösungsseite hinterlegt sein");

// 3. Ausgelieferte Volltexte dekodieren und pruefen
const verzeichnis = path.join(root, "src/data/k3-umwstr-hausaufgaben-volltext");
assert(fs.existsSync(verzeichnis), "Verzeichnis der Textblöcke fehlt");
const bloecke = fs.readdirSync(verzeichnis)
  .filter((f) => f.endsWith(".b64"))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
assert(bloecke.length > 0, "keine Textblöcke gefunden");

const loader = lies("src/data/k3-umwstr-hausaufgaben-volltext.js");
for (const block of bloecke) {
  assert(loader.includes(`chunk-${block.match(/\d+/)[0]}.b64`), `${block} wird vom Loader nicht eingebunden`);
}
assert(
  (loader.match(/\.b64\?raw/g) || []).length === bloecke.length,
  `Loader bindet ${(loader.match(/\.b64\?raw/g) || []).length} Blöcke ein, vorhanden sind ${bloecke.length}`,
);

const base64 = bloecke.map((f) => fs.readFileSync(path.join(verzeichnis, f), "utf8")).join("").replace(/\s+/g, "");
let volltexte;
try {
  volltexte = JSON.parse(zlib.gunzipSync(Buffer.from(base64, "base64")).toString("utf8"));
} catch (fehler) {
  throw new Error(`K3 UmwStR Hausaufgaben: Textblöcke lassen sich nicht entpacken (${fehler.message})`);
}

let seitenGesamt = 0;
for (const termin of termine) {
  const text = volltexte[String(termin)];
  assert(typeof text === "string", `Volltext für Hausaufgabe ${termin} fehlt`);

  const zeichen = Array.from(text).length;
  assert(
    zeichen === meta[termin].zeichen,
    `Hausaufgabe ${termin}: ${zeichen} Zeichen, im Metamodul stehen ${meta[termin].zeichen}`,
  );

  const summe = createHash("sha256").update(text, "utf8").digest("hex");
  assert(
    summe === meta[termin].sha256,
    `Hausaufgabe ${termin}: SHA-256 weicht ab – Volltext und Metamodul passen nicht zusammen`,
  );

  // Jede PDF-Seite muss als Marke vorhanden sein.
  const marken = [...text.matchAll(/^===== PDF-Seite (\d+) =====$/gm)].map((m) => Number(m[1]));
  const erwartet = Array.from({ length: meta[termin].seiten }, (_, i) => i + 1);
  assert(
    marken.join(",") === erwartet.join(","),
    `Hausaufgabe ${termin}: Seitenmarken ${marken.join(",") || "keine"} statt 1–${meta[termin].seiten}`,
  );

  // Trennstelle zwischen Aufgabe und Loesung muss existieren und im Dokument liegen.
  const trennseite = loesungsseiten[termin];
  assert(trennseite, `Hausaufgabe ${termin}: keine Lösungsseite hinterlegt`);
  assert(
    trennseite > 1 && trennseite <= meta[termin].seiten,
    `Hausaufgabe ${termin}: Lösungsseite ${trennseite} liegt außerhalb von 2–${meta[termin].seiten}`,
  );
  const position = text.indexOf(`===== PDF-Seite ${trennseite} =====`);
  assert(position > 0, `Hausaufgabe ${termin}: Trennstelle auf Seite ${trennseite} nicht gefunden`);
  assert(
    /Lösungshinweise/.test(text.slice(position, position + 900)),
    `Hausaufgabe ${termin}: auf Seite ${trennseite} beginnen keine Lösungshinweise – Trennstelle prüfen`,
  );

  // Personalisierungszeile darf nicht uebernommen sein.
  assert(
    !/Persönliches PDF für/.test(text) && !/Karaman/.test(text),
    `Hausaufgabe ${termin}: enthält die personenbezogene Zeile aus der Quell-PDF`,
  );

  seitenGesamt += meta[termin].seiten;
}

assert(seitenGesamt === 76, `76 PDF-Seiten erwartet, gezählt: ${seitenGesamt}`);

// 4. Uebersichtsdaten
const eintraege = [...daten.matchAll(/id: "umwstr-ha-(\d+)"/g)].map((m) => Number(m[1]));
assert(eintraege.join(",") === "1,2,3", `Übersicht muss die Hausaufgaben 1–3 führen, gefunden: ${eintraege.join(",")}`);
for (const feld of ["titel", "untertitel", "quelle", "themen", "aufgaben", "loesung", "normen"]) {
  const treffer = (daten.match(new RegExp(`^\\s+${feld}:`, "gm")) || []).length;
  assert(treffer === 3, `Feld ${feld} fehlt bei mindestens einer Hausaufgabe (${treffer} von 3)`);
}

// 5. Verdrahtung im Campus und in der Ansicht
for (const marker of ['ansichtOeffnen("hausaufgaben")', "K3UmwStRHausaufgaben", "IconHausaufgabe"]) {
  assert(campus.includes(marker), `Campus-Marker fehlt: ${marker}`);
}
for (const marker of ["ladeUmwStRHausaufgabenVolltext", "HausaufgabenDokument", "teileUmwStRHausaufgabe", "Integritätsprüfung beim Laden"]) {
  assert(ansicht.includes(marker), `Ansichts-Marker fehlt: ${marker}`);
}
assert(
  ansicht.includes('import("../data/k3-umwstr-hausaufgaben-volltext.js")'),
  "Volltexte müssen per dynamischem Import erst beim Aufklappen geladen werden",
);

console.log(
  `K3 UmwStR Hausaufgaben OK: 3 Hausaufgaben, ${seitenGesamt} PDF-Seiten, ` +
  "Zeichenzahl und SHA-256 stimmen, Seitenmarken lückenlos, keine Personalisierungszeile.",
);
