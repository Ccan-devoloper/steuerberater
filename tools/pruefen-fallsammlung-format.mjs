#!/usr/bin/env node
import assert from "node:assert/strict";
import { parseFallsammlungsText } from "../src/lib/fallsammlungsFormat.js";
import { zugeordneteFaelle } from "../src/data/fallsammlung.js";
import offeneFaelle from "../src/data/faelle-offen.js";
import { fallsammlungsTabellenGeometrie } from "../src/data/fallsammlungTabellenGeometrie.js";

const originalBuchung = parseFallsammlungsText(
  "Technische Anlagen und 2.650.000 € an Bank 1.150.000 € Maschinen Verbindlichkeiten LuL 1.500.000 €",
  "sachverhalt",
  { sourcePage: 1 },
);
const buchungstabelle = originalBuchung.find((block) => block.type === "table");
assert.equal(buchungstabelle?.original, true);
assert.equal(buchungstabelle?.sourceId, "F004-01");
assert.deepEqual(buchungstabelle?.columns, [30, 17, 6, 26, 21]);
assert.equal(buchungstabelle?.rowCount, 2);
assert.equal(buchungstabelle?.cells.find((cell) => cell.row === 0 && cell.col === 0)?.text, "Technische Anlagen und\nMaschinen");
assert.equal(buchungstabelle?.cells.find((cell) => cell.row === 0 && cell.col === 0)?.bold, false);
assert.equal(buchungstabelle?.cells.some((cell) => cell.row === 1 && cell.col < 3), false);
assert.equal(buchungstabelle?.cells.find((cell) => cell.row === 1 && cell.col === 3)?.text, "Verbindlichkeiten LuL");

const anzahlung = parseFallsammlungsText(
  "Bank 11.900 € an Erhaltene Anzahlungen 10.000 € Umsatzsteuer 1.900 €",
  "loesung",
  { sourcePage: 5 },
).find((block) => block.type === "table");
assert.equal(anzahlung?.sourceId, "L008-02");
assert.equal(anzahlung?.cells.some((cell) => cell.row === 1 && cell.col < 3), false);
assert.equal(anzahlung?.cells.find((cell) => cell.row === 1 && cell.col === 3)?.text, "Umsatzsteuer");

const kosten = parseFallsammlungsText(`U entstanden folgende Kosten:\n\nKaufpreis                              200.000 €\nÜbernahme einer Hypothekenschuld       40.000 €\nNotariatsgebühren (brutto) für die\n• Übertragung der Hypothek                 357 €\n• Übertragung des Grundstücks              714 €\n\nWie ist das Gebäude handels- und steuerrechtlich anzusetzen und zu bewerten?`, "sachverhalt");
const kostenTabelle = kosten.find((block) => block.type === "table");
assert.equal(kostenTabelle?.type, "table");
assert.equal(kostenTabelle?.columns, 2);
assert.equal(kosten.at(-1).italic, true);

const hinweis = parseFallsammlungsText("Hinweis: Wird ein unbebautes Grundstück erworben, sind die Abstandszahlungen Anschaffungskosten.", "loesung");
assert.equal(hinweis[0].type, "paragraph");
assert.equal(hinweis[0].italic, true);
assert.equal(hinweis[0].lead, "Hinweis:");

const alleFaelle = [...zugeordneteFaelle, ...offeneFaelle];
const gefundeneSachverhalte = new Set();
const gefundeneLoesungen = new Set();

for (const fall of alleFaelle) {
  for (const block of parseFallsammlungsText(fall.sachverhalt, "sachverhalt", { sourcePage: fall.quelle?.fall_seite })) {
    if (block.original) gefundeneSachverhalte.add(block.sourceId);
  }
  for (const block of parseFallsammlungsText(fall.loesung, "loesung", { sourcePage: fall.quelle?.loesung_seite })) {
    if (block.original) gefundeneLoesungen.add(block.sourceId);
  }
}

const erwarteteSachverhalte = new Set(fallsammlungsTabellenGeometrie.sachverhalt.map(([id]) => id));
const erwarteteLoesungen = new Set(fallsammlungsTabellenGeometrie.loesung.map(([id]) => id));
const fehlendeSachverhalte = [...erwarteteSachverhalte].filter((id) => !gefundeneSachverhalte.has(id));
const fehlendeLoesungen = [...erwarteteLoesungen].filter((id) => !gefundeneLoesungen.has(id));
if (fehlendeSachverhalte.length) console.error("Fehlende Falltabellen:", fehlendeSachverhalte.join(", "));
if (fehlendeLoesungen.length) console.error("Fehlende Lösungstabellen:", fehlendeLoesungen.join(", "));

assert.equal(gefundeneSachverhalte.size, 46, `46 Falltabellen erwartet, erkannt: ${gefundeneSachverhalte.size}`);
assert.equal(gefundeneLoesungen.size, 204, `204 Lösungstabellen erwartet, erkannt: ${gefundeneLoesungen.size}`);

console.log("Fallsammlungsformat geprüft: 46 Falltabellen und 204 Lösungstabellen PDF-getreu erkannt");
