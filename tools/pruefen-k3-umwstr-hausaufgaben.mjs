import fs from "node:fs";
import path from "node:path";

/**
 * Prueft die drei UmwStR-Hausaufgaben.
 *
 * Darstellung wie bei den AO-Hausaufgaben: Seitentexte 1:1 plus zeilenweise
 * Schriftinformation, aus der die Ansicht den Fettdruck des Originals
 * wiederherstellt. Geprueft werden Vollstaendigkeit der Seiten, Abdeckung durch
 * die Fallgliederung, die Fettdruckdaten und die Abwesenheit der
 * Personalisierungszeile.
 */

const root = process.cwd();
const assert = (ok, msg) => { if (!ok) throw new Error(`K3 UmwStR Hausaufgaben: ${msg}`); };
const lies = (p) => {
  const voll = path.join(root, p);
  assert(fs.existsSync(voll), `Datei fehlt: ${p}`);
  return fs.readFileSync(voll, "utf8");
};

/* Die Datendateien sind reine JS-Literale; das Array laesst sich direkt aus der
   Zuweisung loesen, ohne die Datei auszufuehren. */
const ladeArray = (datei, name) => {
  const quelle = lies(datei);
  const start = quelle.indexOf("[", quelle.indexOf(name));
  assert(start > 0, `${datei}: ${name} nicht gefunden`);
  const ende = quelle.lastIndexOf("]");
  return JSON.parse(quelle.slice(start, ende + 1));
};

const HAUSAUFGABEN = [
  { id: "UMW-HA-1", nr: 1, seiten: 24 },
  { id: "UMW-HA-2", nr: 2, seiten: 23 },
  { id: "UMW-HA-3", nr: 3, seiten: 29 },
];

const faelleQuelle = lies("src/data/k3-umwstr-ha-faelle.js");
const ansicht = lies("src/components/K3UmwStRHausaufgaben.jsx");
const campus = lies("src/components/K3UmwStRCampus.jsx");
const css = lies("src/components/k3-umwstr-hausaufgaben.css");

let seitenGesamt = 0;
let faelleGesamt = 0;

for (const { id, nr, seiten } of HAUSAUFGABEN) {
  const texte = ladeArray(`src/data/k3-umwstr-ha-original-${nr}.js`, `UMWSTR_HA_SEITEN_${nr}`);
  const fonts = ladeArray(`src/data/k3-umwstr-ha-font-${nr}.js`, `UMWSTR_HA_FONT_${nr}`);

  assert(texte.length === seiten, `${id}: ${texte.length} Seitentexte statt ${seiten}`);
  assert(fonts.length === seiten, `${id}: ${fonts.length} Font-Seiten statt ${seiten}`);

  texte.forEach((text, i) => {
    assert(typeof text === "string" && text.trim().length > 40, `${id}: Seite ${i + 1} ist leer oder zu kurz`);
    assert(!/Persönliches PDF für/.test(text), `${id}: Seite ${i + 1} enthält die personenbezogene Zeile`);
  });

  let fettZeilen = 0;
  fonts.forEach((zeilen, i) => {
    assert(Array.isArray(zeilen) && zeilen.length > 0, `${id}: Seite ${i + 1} ohne Schriftinformation`);
    for (const z of zeilen) {
      assert(typeof z.l === "string" && Array.isArray(z.p), `${id}: Seite ${i + 1} hat eine fehlerhafte Zeile`);
      assert(!/Persönliches PDF für/.test(z.l), `${id}: Seite ${i + 1} führt die personenbezogene Zeile im Fontstil`);
      if (z.p.length > 0 && z.p.every(([, fett]) => fett)) fettZeilen += 1;
    }
  });
  assert(fettZeilen >= 20, `${id}: nur ${fettZeilen} durchgehend fette Zeilen – Schriftinformation prüfen`);

  // Fallgliederung: jede Seite ab 2 muss einem Sachverhalt zugeordnet sein.
  /* Blockgrenze am naechsten Hausaufgaben-Eintrag, nicht nach fester Laenge -
     sonst laufen die Seitenbereiche der Nachbarn mit hinein. */
  const beginn = faelleQuelle.indexOf(`id: "${id}"`);
  assert(beginn > 0, `${id}: Eintrag in der Fallgliederung fehlt`);
  const naechster = faelleQuelle.indexOf('id: "UMW-HA-', beginn + 10);
  const block = faelleQuelle.slice(beginn, naechster > 0 ? naechster : undefined);
  const bereiche = [...block.matchAll(/(aufgabeSeiten|loesungSeiten): \[([\d, ]+)\]/g)]
    .map((m) => m[2].split(",").map((x) => Number(x.trim())));
  assert(bereiche.length >= 4, `${id}: zu wenige Seitenbereiche in der Fallgliederung`);

  const abgedeckt = new Set(bereiche.flat());
  for (let s = 2; s <= seiten; s += 1) {
    assert(abgedeckt.has(s), `${id}: Seite ${s} ist keinem Sachverhalt zugeordnet`);
  }
  for (const s of abgedeckt) {
    assert(s >= 2 && s <= seiten, `${id}: Fallgliederung verweist auf Seite ${s} außerhalb von 2–${seiten}`);
  }

  // Die Lösung muss dort beginnen, wo die Quelle sie ankündigt.
  const ersteLoesung = Math.min(...[...block.matchAll(/loesungSeiten: \[(\d+)/g)].map((m) => Number(m[1])));
  assert(
    /Lösungshinweise/.test(texte[ersteLoesung - 1]),
    `${id}: auf Seite ${ersteLoesung} beginnen keine Lösungshinweise – Fallgliederung prüfen`,
  );

  seitenGesamt += seiten;
  faelleGesamt += (block.match(/id: "UMW-HA\d-\d"/g) || []).length;
}

assert(seitenGesamt === 76, `76 PDF-Seiten erwartet, gezählt: ${seitenGesamt}`);
assert(faelleGesamt === 7, `7 Sachverhalte erwartet, gezählt: ${faelleGesamt}`);

// Darstellung nach dem Vorbild der AO-Hausaufgaben.
for (const marker of ["ao-hausaufgaben.css", "k1-hausaufgaben.css", "ao-ha-source-bold", "ao-ha-originalseite", "RenderStyledLine", "UMWSTR_HA_FONTSTIL"]) {
  assert(ansicht.includes(marker), `Ansicht folgt nicht dem AO-Muster, Marker fehlt: ${marker}`);
}
assert(!/<pre>\{teile/.test(ansicht), "Ansicht darf den Fließtext nicht als Monospace-Block ausgeben");

// Spaltenaufstellungen behalten ihre Ausrichtung.
for (const marker of ["istTabellenzeile", "SPALTENABSTAND", "umw-ha-tabelle", "ohneGemeinsameEinrueckung"]) {
  assert(ansicht.includes(marker), `Tabellenerkennung fehlt: ${marker}`);
}
assert(css.includes("white-space: pre"), "Aufstellungen müssen ihren Leerraum behalten");
assert(css.includes("overflow-x: auto"), "Breite Aufstellungen müssen horizontal scrollen können");

// Verdrahtung im Campus, Ansicht erst beim Öffnen laden.
for (const marker of ['ansichtOeffnen("hausaufgaben")', "K3UmwStRHausaufgaben", 'lazy(() => import("./K3UmwStRHausaufgaben"))']) {
  assert(campus.includes(marker), `Campus-Marker fehlt: ${marker}`);
}

console.log(
  `K3 UmwStR Hausaufgaben OK: 3 Hausaufgaben, ${faelleGesamt} Sachverhalte, ${seitenGesamt} PDF-Seiten ` +
  "mit Schriftinformation, alle Seiten zugeordnet, keine Personalisierungszeile.",
);
