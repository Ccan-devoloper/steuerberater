import test from "node:test";
import assert from "node:assert/strict";

import { QUELLENREGELN, quellenIndex, quellenregelBefunde } from "../src/quellenregeln.mjs";
import { aufbereitungLaden, aufbereitungBefunde, aufbereiteteThemen, skriptAbschnitte } from "../src/skripte.mjs";
import { aufbereitungPruefen } from "../src/aufbereitung-pruefung.mjs";
import { alleTexte } from "../src/pruefung.mjs";
import { themenpool, FAECHER } from "../src/inhalte.mjs";

test("Quellenregeln: Überschrift, Gliederung, Herkunft und Verfasser werden erkannt", () => {
  assert.ok(QUELLENREGELN.length >= 5);
  const index = quellenIndex();
  assert.ok(index.ueberschriften.size > 500, "Quellüberschriften fehlen im Index");
  for (const name of ["Hamacher", "Melzer", "Möcker", "Jacobs", "Breier", "Holzrichter"]) {
    assert.ok(index.verfasser.includes(name), name + " fehlt in der Verfasserliste");
  }
  const [, x] = [...skriptAbschnitte()].find(([, a]) => /Pensionszusagen an Gesellschafter-Geschäftsführer/.test(a.abschnitt.title));
  const titel = x.abschnitt.title.replace(/^[A-Z]\.\s*/, "");
  const beitrag = { folien: [{ art: "titel", titel }, { art: "text", titel: "Aus 1.5.2.1", text: "Wie im Kurzskript von Hamacher in Kapitel 3." }] };
  const befunde = quellenregelBefunde(beitrag, alleTexte(beitrag)).join(" | ");
  assert.match(befunde, /Überschrift aus einer Lernunterlage/);
  assert.match(befunde, /Gliederung der Unterlage/);
  assert.match(befunde, /Herkunftsangabe/);
  assert.match(befunde, /Hamacher/);
});

test("Quellenregeln: Rechtsstoff und eigene Titel bleiben frei", () => {
  const beitrag = {
    folien: [
      { art: "titel", titel: "Pensionszusage an die Geschäftsführerin: Wann kippt sie in die vGA?" },
      { art: "text", titel: "§ 8 Abs. 3 Satz 2 KStG", text: "Erst die Steuerbilanz nach § 6a EStG, dann die Veranlassung durch das Gesellschaftsverhältnis prüfen. Stichtag 31.12.2025." },
    ],
  };
  assert.deepEqual(quellenregelBefunde(beitrag, alleTexte(beitrag)), []);
});

test("Aufbereitungen halten Format und Quellenregeln ein", () => {
  const eintraege = aufbereitungLaden();
  const fehler = [];
  const quellen = new Map();
  for (const e of eintraege) {
    const f = [...aufbereitungBefunde(e), ...aufbereitungPruefen(e)];
    if (f.length) fehler.push(`${e.fach} ${e.quelle}: ${f.join(" | ")}`);
    const key = e.quelle + (e.variante ? "-" + e.variante : "");
    if (quellen.has(key)) fehler.push(`${key}: doppelt aufbereitet`);
    quellen.set(key, true);
  }
  assert.deepEqual(fehler, []);
});

test("Aufbereitete Themen kommen mit Fach, Klausur und Herkunft in den Pool", () => {
  const eintraege = aufbereitungLaden();
  const themen = aufbereiteteThemen((fach) => FAECHER[fach]?.klausur);
  assert.equal(themen.length, eintraege.length);
  const pool = new Map(themenpool().map((t) => [t.id, t]));
  for (const t of themen) {
    assert.ok([1, 2, 3].includes(t.klausur), t.id + ": Klausur fehlt");
    assert.ok(t.herkunft, t.id + ": Herkunft fehlt");
    assert.ok(pool.has(t.id), t.id + " fehlt im Themenpool");
    const text = JSON.stringify(pool.get(t.id));
    assert.ok(!/"bloecke"|"verfasser"/.test(text), t.id + ": Originaltext im Pool");
  }
});
