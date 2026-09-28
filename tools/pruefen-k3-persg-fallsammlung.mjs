/* Prüft die PersG-Fallsammlung: Pflichtfelder, Blockstruktur, Gruppenzuordnung,
   Wasserzeichen – und vor allem, dass jeder Querverweis auf ein Modul, ein
   Prüfschema, einen Originalfall oder eine Hausaufgabe zeigt, die es wirklich
   gibt. Erfundene Lösungen soll es hier nicht geben; die Verweise sind der
   Ersatz dafür und müssen deshalb stimmen.

   Aufruf: node tools/pruefen-k3-persg-fallsammlung.mjs */
import "../src/data/k3-persg-tag2-register.js";
import "../src/data/k3-persg-tag3-register.js";
import "../src/data/k3-persg-tag4-register.js";
import { persgModule, persgSchemata, persgFaelle } from "../src/data/k3-persg-tag1.js";
import { persgHausaufgaben } from "../src/data/k3-persg-hausaufgaben.js";
import {
  persgFallsammlung, persgFallsammlungGruppen, persgFallsammlungQuelle,
} from "../src/data/k3-persg-fallsammlung.js";
import {
  persgFallsammlungLoesungen, persgFallsammlungLoesungenQuelle,
} from "../src/data/k3-persg-fallsammlung-loesungen.js";

const fehler = [];
const meldung = (id, text) => fehler.push(`${id}: ${text}`);

const modulIds = new Set(persgModule.map((m) => m.id));
const schemaIds = new Set(persgSchemata.map((s) => s.id));
const fallIds = new Set(persgFaelle.map((f) => f.id));
const hausaufgabenIds = new Set(persgHausaufgaben.map((h) => h.id));
const gruppenIds = new Set(persgFallsammlungGruppen.map((g) => g.id));

if (!persgFallsammlungQuelle.hinweis) meldung("Quelle", "Hinweis zur Herkunft der Fälle und Lösungen fehlt");
if (!persgFallsammlungLoesungenQuelle?.datei) meldung("Lösungen", "Quellenangabe des Lösungsteils fehlt");

const ids = new Set();
const nummern = new Set();
for (const fall of persgFallsammlung) {
  const id = fall.id ?? "(ohne id)";
  if (ids.has(id)) meldung(id, "doppelte id");
  ids.add(id);
  if (nummern.has(fall.nummer)) meldung(id, `doppelte Fallnummer ${fall.nummer}`);
  nummern.add(fall.nummer);

  if (!gruppenIds.has(fall.gruppe)) meldung(id, `unbekannte Gruppe ${fall.gruppe}`);
  if (!fall.titel) meldung(id, "Titel fehlt");
  if (!fall.themen?.length) meldung(id, "keine Themen angegeben");
  if (!fall.normen?.length) meldung(id, "keine Normen angegeben");

  for (const [abschnitt, bloecke] of [["sachverhalt", fall.sachverhalt], ["aufgabe", fall.aufgabe]]) {
    if (!bloecke?.length) { meldung(id, `${abschnitt} ist leer`); continue; }
    bloecke.forEach((block, i) => {
      if (block.typ === "tabelle") {
        if (!block.spalten?.length || !block.zeilen?.length) meldung(id, `${abschnitt}[${i}]: unvollständige Tabelle`);
        block.zeilen?.forEach((zeile, z) => {
          if (zeile.length !== block.spalten.length) {
            meldung(id, `${abschnitt}[${i}]: Zeile ${z} hat ${zeile.length} Zellen, Kopf hat ${block.spalten.length}`);
          }
        });
      } else if (!block.text?.trim()) {
        meldung(id, `${abschnitt}[${i}]: leerer Text`);
      }
      if (typeof block.text === "string" && /Persönliches PDF für/i.test(block.text)) {
        meldung(id, `${abschnitt}[${i}]: personenbezogenes Wasserzeichen aus der Quelle übernommen`);
      }
    });
  }

  (fall.varianten || []).forEach((v, i) => {
    if (!v.titel || !v.text?.trim()) meldung(id, `varianten[${i}]: Titel oder Text fehlt`);
  });

  const v = fall.verweise || {};
  for (const modulId of v.module || []) if (!modulIds.has(modulId)) meldung(id, `Verweis auf unbekanntes Modul ${modulId}`);
  for (const schemaId of v.schemata || []) if (!schemaIds.has(schemaId)) meldung(id, `Verweis auf unbekanntes Prüfschema ${schemaId}`);
  for (const fallId of v.faelle || []) if (!fallIds.has(fallId)) meldung(id, `Verweis auf unbekannten Originalfall ${fallId}`);
  for (const haId of v.hausaufgaben || []) if (!hausaufgabenIds.has(haId)) meldung(id, `Verweis auf unbekannte Hausaufgabe ${haId}`);
  const anzahl = (v.module?.length || 0) + (v.schemata?.length || 0) + (v.faelle?.length || 0) + (v.hausaufgaben?.length || 0);
  if (anzahl === 0) meldung(id, "kein einziger Querverweis – ohne Musterlösung bliebe der Fall ohne Anschluss");
}

/* Der Lösungsteil: jeder Fall braucht eine Lösung, jede Lösung einen Fall, und
   die Blöcke folgen demselben Schema wie in den übrigen Beständen. */
const BLOCKTYPEN = new Set([undefined, "titel", "tabelle"]);
const fallsammlungIds = new Set(persgFallsammlung.map((f) => f.id));
for (const [fallId, bloecke] of Object.entries(persgFallsammlungLoesungen)) {
  if (!fallsammlungIds.has(fallId)) meldung(fallId, "Lösung ohne zugehörigen Fall");
  if (!bloecke.length) { meldung(fallId, "Lösung ist leer"); continue; }
  bloecke.forEach((block, i) => {
    const ort = `loesung[${i}]`;
    if (!BLOCKTYPEN.has(block.typ)) meldung(fallId, `${ort}: unbekannter Blocktyp ${block.typ}`);
    if (block.typ === "tabelle") {
      if (!block.spalten?.length) meldung(fallId, `${ort}: Tabelle ohne Spalten`);
      if (!block.zeilen?.length) meldung(fallId, `${ort}: Tabelle ohne Zeilen`);
      block.zeilen?.forEach((zeile, z) => {
        if (zeile.length !== block.spalten.length) {
          meldung(fallId, `${ort}: Zeile ${z} hat ${zeile.length} Zellen, Kopf hat ${block.spalten.length}`);
        }
      });
    } else if (!block.text?.trim()) {
      meldung(fallId, `${ort}: leerer Text`);
    }
    if (typeof block.text === "string" && /Persönliches PDF für/i.test(block.text)) {
      meldung(fallId, `${ort}: personenbezogenes Wasserzeichen aus der Quelle übernommen`);
    }
  });
}
for (const fall of persgFallsammlung) {
  if (!persgFallsammlungLoesungen[fall.id]?.length) meldung(fall.id, "keine Musterlösung hinterlegt");
}

for (const gruppe of persgFallsammlungGruppen) {
  if (!persgFallsammlung.some((f) => f.gruppe === gruppe.id)) meldung(gruppe.id, "Gruppe ohne Fälle");
}

if (fehler.length) {
  console.error(`PersG-Fallsammlung: ${fehler.length} Fehler`);
  fehler.forEach((f) => console.error(` - ${f}`));
  process.exit(1);
}

const varianten = persgFallsammlung.reduce((n, f) => n + (f.varianten?.length || 0), 0);
const verweise = persgFallsammlung.reduce((n, f) => {
  const v = f.verweise || {};
  return n + (v.module?.length || 0) + (v.schemata?.length || 0) + (v.faelle?.length || 0) + (v.hausaufgaben?.length || 0);
}, 0);
const loesungsbloecke = Object.values(persgFallsammlungLoesungen).reduce((n, b) => n + b.length, 0);
const loesungstabellen = Object.values(persgFallsammlungLoesungen).reduce((n, b) => n + b.filter((x) => x.typ === "tabelle").length, 0);
console.log(`PersG-Fallsammlung in Ordnung: ${persgFallsammlung.length} Fälle in ${persgFallsammlungGruppen.length} Blöcken, ${varianten} Abwandlungen, ${verweise} geprüfte Querverweise, ${Object.keys(persgFallsammlungLoesungen).length} Musterlösungen mit ${loesungsbloecke} Blöcken und ${loesungstabellen} Tabellen.`);
