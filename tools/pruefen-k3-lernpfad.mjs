import fs from "node:fs";
import path from "node:path";

/**
 * Prueft die beiden Lernpfade „Schritt fuer Schritt“ aus Klausur 3:
 *   src/data/k3-lernpfad-persg.js   (Personengesellschaften)
 *   src/data/k3-lernpfad-umwstr.js  (Umwandlungssteuerrecht)
 *
 * - Jede Lektion hat ID, Kapitel, Titel, Kurzzeile, Minuten, Normen, Ziel,
 *   Bloecke, Selbstcheck und Merksatz; IDs sind eindeutig, Kapitel existieren.
 * - Jede Lektion enthaelt einen Klausurblock („So laeuft es in der Klausur“)
 *   und mindestens einen Selbstcheck mit gueltigem Index der richtigen Antwort.
 * - Jeder Blocktyp ist der Komponente bekannt und traegt die Pflichtfelder.
 * - Querverweise zeigen auf vorhandene PersG-Module/-Schemata/-Faelle bzw.
 *   UmwStR-Pruefschemata 1–13 und Hausaufgaben 1–3.
 * - Beide Campusse binden den Reiter ein (Navigation, Ansicht, Cockpit-Einstieg).
 */

const root = process.cwd();
const assert = (ok, msg) => { if (!ok) throw new Error(`K3 Lernpfad: ${msg}`); };
const lies = (p) => { const voll = path.join(root, p); assert(fs.existsSync(voll), `Datei fehlt: ${p}`); return fs.readFileSync(voll, "utf8"); };

globalThis.window = undefined;
const persgDaten = await import(path.join(root, "src/data/k3-persg-tag1.js"));
await import(path.join(root, "src/data/k3-persg-tag2-register.js"));
await import(path.join(root, "src/data/k3-persg-tag3-register.js"));
await import(path.join(root, "src/data/k3-persg-tag4-register.js"));
await import(path.join(root, "src/data/k3-persg-tag5-register.js"));
const persg = await import(path.join(root, "src/data/k3-lernpfad-persg.js"));
const umw = await import(path.join(root, "src/data/k3-lernpfad-umwstr.js"));
const ha = await import(path.join(root, "src/data/k3-umwstr-ha-faelle.js"));

const BLOCKTYPEN = {
  absatz: ["text"], merke: ["text"], falle: ["text"], exkurs: ["titel", "text"],
  schritte: ["punkte"], liste: ["punkte"], tabelle: ["kopf", "zeilen"],
  beispiel: ["titel", "sachverhalt", "schritte", "ergebnis"], rechnung: ["zeilen"], buchung: ["satz"],
  bilanz: ["titel", "aktiva", "passiva"], klausur: ["punkte"], links: [],
};

function pruefeLernpfad(name, kapitel, lektionen, verweise) {
  assert(Array.isArray(kapitel) && kapitel.length >= 5, `${name}: mindestens fünf Kapitel erwartet`);
  assert(Array.isArray(lektionen) && lektionen.length >= 14, `${name}: mindestens 14 Lektionen erwartet, gefunden ${lektionen.length}`);
  const kapitelIds = new Set(kapitel.map((k) => k.id));
  const ids = new Set();
  for (const l of lektionen) {
    const wo = `${name} · Lektion „${l.id}“`;
    for (const feld of ["id", "kapitel", "titel", "kurz", "minuten", "normen", "ziel", "bloecke", "selbstcheck", "merksatz"]) {
      assert(l[feld] != null && (typeof l[feld] !== "string" || l[feld].trim()), `${wo}: Feld ${feld} fehlt`);
    }
    assert(!ids.has(l.id), `${wo}: doppelte ID`); ids.add(l.id);
    assert(kapitelIds.has(l.kapitel), `${wo}: unbekanntes Kapitel ${l.kapitel}`);
    assert(Number.isInteger(l.minuten) && l.minuten >= 5, `${wo}: Minuten unplausibel`);
    assert(l.normen.length >= 1, `${wo}: keine Normen`);
    assert(l.bloecke.length >= 4, `${wo}: zu wenige Blöcke`);
    assert(l.bloecke.some((b) => b.typ === "klausur"), `${wo}: Klausurblock fehlt`);
    assert(l.bloecke.some((b) => b.typ === "absatz" || b.typ === "beispiel"), `${wo}: kein erklärender Text`);
    for (const b of l.bloecke) {
      assert(BLOCKTYPEN[b.typ], `${wo}: unbekannter Blocktyp ${b.typ}`);
      for (const feld of BLOCKTYPEN[b.typ]) assert(b[feld] != null, `${wo}: Block ${b.typ} ohne ${feld}`);
      if (b.typ === "tabelle") for (const z of b.zeilen) assert(z.length === b.kopf.length, `${wo}: Tabellenzeile passt nicht zum Kopf (${z[0]})`);
      if (b.typ === "buchung") {
        const s = b.satz.soll.reduce((x, y) => x + y.betrag, 0), h = b.satz.haben.reduce((x, y) => x + y.betrag, 0);
        assert(s === h, `${wo}: Buchungssatz nicht ausgeglichen (${s} ≠ ${h})`);
      }
      if (b.typ === "bilanz") {
        const s = (z) => z.reduce((x, [, w]) => x + w, 0);
        assert(s(b.aktiva) === s(b.passiva), `${wo}: Bilanz „${b.titel}“ nicht ausgeglichen (${s(b.aktiva)} ≠ ${s(b.passiva)})`);
      }
      if (b.typ === "links") verweise(b, wo);
    }
    assert(l.selbstcheck.length >= 1, `${wo}: Selbstcheck fehlt`);
    for (const f of l.selbstcheck) {
      assert(f.frage && Array.isArray(f.optionen) && f.optionen.length >= 2, `${wo}: Selbstcheck unvollständig`);
      assert(Number.isInteger(f.richtig) && f.richtig >= 0 && f.richtig < f.optionen.length, `${wo}: Index der richtigen Antwort außerhalb der Optionen`);
      assert(f.erklaerung, `${wo}: Selbstcheck ohne Erklärung`);
    }
  }
  for (const k of kapitel) assert(lektionen.some((l) => l.kapitel === k.id), `${name}: Kapitel ${k.id} ohne Lektion`);
  return lektionen.length;
}

// PersG: Querverweise auf Module, Schemata, Faelle
const modulIds = new Set(persgDaten.persgModule.map((m) => m.id));
const schemaIds = new Set(persgDaten.persgSchemata.map((s) => s.id));
const fallIds = new Set(persgDaten.persgFaelle.map((f) => f.id));
const nPersg = pruefeLernpfad("PersG", persg.persgLernpfadKapitel, persg.persgLernpfad, (b, wo) => {
  for (const id of b.module || []) assert(modulIds.has(id), `${wo}: Modul ${id} existiert nicht`);
  for (const id of b.schemata || []) assert(schemaIds.has(id), `${wo}: Schema ${id} existiert nicht`);
  for (const id of b.faelle || []) assert(fallIds.has(id), `${wo}: Fall ${id} existiert nicht`);
});
const verlinkteModule = new Set(persg.persgLernpfad.flatMap((l) => l.bloecke.filter((b) => b.typ === "links").flatMap((b) => b.module || [])));
assert(verlinkteModule.size >= 25, `PersG: zu wenige Module aus dem Lernpfad verlinkt (${verlinkteModule.size})`);

// UmwStR: Querverweise auf Pruefschemata 1–13 und Hausaufgaben 1–3
const campusUmw = lies("src/components/K3UmwStRCampus.jsx");
const schemaNrn = new Set([...campusUmw.matchAll(/^ {4}nr: (\d+),/gm)].map((m) => Number(m[1])));
const nUmw = pruefeLernpfad("UmwStR", umw.umwstrLernpfadKapitel, umw.umwstrLernpfad, (b, wo) => {
  for (const nr of b.umwSchemata || []) assert(schemaNrn.has(nr), `${wo}: Prüfschema ${nr} existiert nicht`);
  for (const nr of b.hausaufgaben || []) assert(nr >= 1 && nr <= ha.umwstrHausaufgaben.length, `${wo}: Hausaufgabe ${nr} existiert nicht`);
});
const verlinkteSchemata = new Set(umw.umwstrLernpfad.flatMap((l) => l.bloecke.filter((b) => b.typ === "links").flatMap((b) => b.umwSchemata || [])));
for (const nr of schemaNrn) assert(verlinkteSchemata.has(nr), `UmwStR: Prüfschema ${nr} wird von keiner Lektion verlinkt`);

// Einbindung in beide Campusse
const campusPersg = lies("src/components/K3PersGCampus.jsx");
for (const [datei, quelle] of [["K3PersGCampus.jsx", campusPersg], ["K3UmwStRCampus.jsx", campusUmw]]) {
  assert(quelle.includes('import K3Lernpfad from "./K3Lernpfad"'), `${datei}: Lernpfad nicht importiert`);
  assert(quelle.includes('"lernpfad"') && quelle.includes("Schritt für Schritt"), `${datei}: Reiter „Schritt für Schritt“ fehlt in der Navigation`);
  assert(quelle.includes("verlauf.eintrag.lektionId"), `${datei}: Lektion kommt nicht aus dem Verlauf – Vor/Zurück überspringt Lektionen`);
  assert(quelle.includes('className="lernpfad-einstieg"'), `${datei}: Cockpit-Einstieg fehlt`);
}
const komponente = lies("src/components/K3Lernpfad.jsx");
for (const typ of Object.keys(BLOCKTYPEN)) assert(komponente.includes(`case "${typ}":`), `K3Lernpfad.jsx rendert Blocktyp ${typ} nicht`);
lies("src/components/k3-lernpfad.css");

console.log(`K3 Lernpfad ok: PersG ${nPersg} Lektionen (${persg.persgLernpfadGesamtminuten} Min.), UmwStR ${nUmw} Lektionen (${umw.umwstrLernpfadGesamtminuten} Min.), ${verlinkteModule.size} PersG-Module und alle ${schemaNrn.size} UmwStR-Prüfschemata verlinkt.`);
