import fs from "node:fs";
import path from "node:path";

/**
 * Prueft die UmwStR-Prueschemata aus Klausur 3:
 * - Zu jeder im Campus deklarierten Seite existiert ein Seitenrender.
 * - Jeder Render ist ein vollstaendiges, dekodierbares WebP.
 *   (Ein abgeschnittenes WebP laesst sich vom Browser nicht dekodieren und
 *   erscheint im Campus als weisse Kachel - genau dieser Fehler wird hier
 *   abgefangen.)
 * - Die im Campus hinterlegten Pixelmasse stimmen mit den Renders ueberein,
 *   damit das Seitenverhaeltnis der Kacheln stimmt.
 */

const root = process.cwd();
const campusPath = path.join(root, "src/components/K3UmwStRCampus.jsx");
const cssPath = path.join(root, "src/components/k3-umwstr.css");
const bilderVerzeichnis = path.join(root, "public/umwstr");

const assert = (ok, msg) => { if (!ok) throw new Error(`K3 UmwStR: ${msg}`); };

for (const p of [campusPath, cssPath, bilderVerzeichnis]) {
  assert(fs.existsSync(p), `Datei fehlt: ${path.relative(root, p)}`);
}

const campus = fs.readFileSync(campusPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");

// Schema-Bloecke aus der Campus-Datei lesen (nr + Seitenliste).
const schemata = [];
for (const block of campus.split(/\n {2}\{\n/).slice(1)) {
  const nrTreffer = block.match(/^ {4}nr: (\d+),/);
  if (!nrTreffer) continue;
  const seiten = [...block.matchAll(/\{ breite: (\d+), hoehe: (\d+), titel: "([^"]+)" \}/g)]
    .map(([, breite, hoehe, titel]) => ({ breite: Number(breite), hoehe: Number(hoehe), titel }));
  const titel = block.match(/^ {4}title: "([^"]+)"/m);
  const vorschau = block.match(/^ {4}vorschauSeite: (\d+),/m);
  schemata.push({
    nr: Number(nrTreffer[1]),
    titel: titel?.[1] ?? "",
    vorschauSeite: vorschau ? Number(vorschau[1]) : 0,
    seiten,
  });
}

assert(schemata.length === 5, `es müssen 5 Prüfschemata deklariert sein, gefunden: ${schemata.length}`);
assert(
  schemata.map((s) => s.nr).join(",") === "2,3,4,5,6",
  `Prüfschemata müssen der Originalnummerierung 2–6 folgen, gefunden: ${schemata.map((s) => s.nr).join(",")}`,
);

// Die Uebersicht muss chronologisch nach Schemanummer sortiert erscheinen; an welcher
// Stelle im Quelltext ein Schema eingetragen ist, spielt dadurch keine Rolle.
assert(
  campus.includes("[...SCHEMATA_ROH].sort((a, b) => a.nr - b.nr)"),
  "Campus sortiert die Prüfschemata nicht nach Schemanummer",
);

const erwarteteSeiten = { 2: 4, 3: 3, 4: 2, 5: 2, 6: 2 };
let seitenGesamt = 0;

/** Liest Groesse und Vollstaendigkeit eines WebP direkt aus dem RIFF-Container. */
function webpPruefen(datei) {
  const daten = fs.readFileSync(datei);
  assert(daten.length > 12, `${path.basename(datei)}: Datei ist leer oder zu kurz`);
  assert(daten.toString("ascii", 0, 4) === "RIFF", `${path.basename(datei)}: kein RIFF-Container`);
  assert(daten.toString("ascii", 8, 12) === "WEBP", `${path.basename(datei)}: kein WebP`);

  const angekuendigt = daten.readUInt32LE(4) + 8;
  assert(
    angekuendigt === daten.length,
    `${path.basename(datei)}: WebP ist abgeschnitten (Header kündigt ${angekuendigt} Bytes an, Datei hat ${daten.length}) – ` +
      "der Browser kann die Datei nicht dekodieren und zeigt eine weiße Kachel",
  );

  const fourcc = daten.toString("ascii", 12, 16);
  let breite;
  let hoehe;
  if (fourcc === "VP8 ") {
    // Lossy: Bildmasse im Keyframe-Header hinter dem Startcode 9d 01 2a.
    const start = daten.indexOf(Buffer.from([0x9d, 0x01, 0x2a]), 20);
    assert(start > 0, `${path.basename(datei)}: VP8-Keyframe-Startcode nicht gefunden`);
    breite = daten.readUInt16LE(start + 3) & 0x3fff;
    hoehe = daten.readUInt16LE(start + 5) & 0x3fff;
  } else if (fourcc === "VP8L") {
    const bits = daten.readUInt32LE(21);
    breite = (bits & 0x3fff) + 1;
    hoehe = ((bits >> 14) & 0x3fff) + 1;
  } else if (fourcc === "VP8X") {
    breite = (daten.readUIntLE(24, 3) & 0xffffff) + 1;
    hoehe = (daten.readUIntLE(27, 3) & 0xffffff) + 1;
  } else {
    throw new Error(`K3 UmwStR: ${path.basename(datei)}: unbekannter WebP-Typ ${fourcc}`);
  }
  return { breite, hoehe, bytes: daten.length };
}

for (const schema of schemata) {
  assert(
    schema.seiten.length === erwarteteSeiten[schema.nr],
    `Prüfschema ${schema.nr}: ${erwarteteSeiten[schema.nr]} Quellseiten erwartet, deklariert: ${schema.seiten.length}`,
  );
  assert(schema.titel.length > 10, `Prüfschema ${schema.nr}: Titel fehlt`);
  assert(
    schema.vorschauSeite >= 1 && schema.vorschauSeite <= schema.seiten.length,
    `Prüfschema ${schema.nr}: vorschauSeite ${schema.vorschauSeite} liegt außerhalb von 1–${schema.seiten.length}`,
  );
  assert(
    schema.vorschauSeite > 1,
    `Prüfschema ${schema.nr}: Seite 1 ist das Titelblatt und taugt nicht als Kachelvorschau`,
  );

  schema.seiten.forEach((seite, index) => {
    const nummer = index + 1;
    const name = `schema-${String(schema.nr).padStart(2, "0")}-${String(nummer).padStart(2, "0")}.webp`;
    const datei = path.join(bilderVerzeichnis, name);
    assert(fs.existsSync(datei), `Seitenrender fehlt: public/umwstr/${name}`);

    const bild = webpPruefen(datei);
    assert(
      bild.breite === seite.breite && bild.hoehe === seite.hoehe,
      `${name}: Render ist ${bild.breite}×${bild.hoehe}, im Campus deklariert sind ${seite.breite}×${seite.hoehe}`,
    );
    assert(bild.bytes > 8_000, `${name}: Render ist mit ${bild.bytes} Bytes verdächtig klein (leere Seite?)`);
    assert(seite.titel.length > 3, `${name}: Seitentitel fehlt`);
    seitenGesamt += 1;
  });
}

assert(seitenGesamt === 13, `13 Quellseiten erwartet, geprüft: ${seitenGesamt}`);

// Keine Reste der alten, defekten Atlas-Loesung.
assert(!fs.existsSync(path.join(bilderVerzeichnis, "atlas.webp")), "veraltete atlas.webp ist noch vorhanden");
assert(!campus.includes("atlas"), "Campus referenziert noch den alten Bild-Atlas");
assert(!css.includes("width: 200%"), "CSS enthält noch die Atlas-Verschiebung");

for (const marker of ["umw-source-page--fehler", "object-fit: contain"]) {
  assert(css.includes(marker), `CSS-Marker fehlt: ${marker}`);
}
for (const marker of ["onError={() => setFehler(true)}", "seitenPfad", "aspectRatio", "page={schema.vorschauSeite}"]) {
  assert(campus.includes(marker), `Campus-Marker fehlt: ${marker}`);
}

const dateien = fs.readdirSync(bilderVerzeichnis).filter((f) => f.endsWith(".webp"));
assert(
  dateien.length === seitenGesamt,
  `public/umwstr enthält ${dateien.length} WebP-Dateien, erwartet werden ${seitenGesamt}`,
);

console.log(`K3 UmwStR OK: ${schemata.length} Prüfschemata, ${seitenGesamt} Seitenrenders vollständig und dekodierbar.`);
