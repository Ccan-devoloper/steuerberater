#!/usr/bin/env node
import assert from "node:assert/strict";
import { parseFallsammlungsText } from "../src/lib/fallsammlungsFormat.js";

const kosten = parseFallsammlungsText(`U entstanden folgende Kosten:\n\nKaufpreis                              200.000 €\nÜbernahme einer Hypothekenschuld       40.000 €\nNotariatsgebühren (brutto) für die\n• Übertragung der Hypothek                 357 €\n• Übertragung des Grundstücks              714 €\n\nWie ist das Gebäude handels- und steuerrechtlich anzusetzen und zu bewerten?`, "sachverhalt");
assert.equal(kosten[1].type, "table");
assert.equal(kosten[1].columns, 2);
assert.match(kosten[1].rows[2].cells[0].text, /Notariatsgebühren/);
assert.equal(kosten.at(-1).italic, true);

const buchung = parseFallsammlungsText(`Buchungssätze:\nTechnische Anlagen und\nMaschinen                     2.650.000 €    an    Bank                    1.150.000 €\nVerbindlichkeiten LuL         1.500.000 €`, "loesung");
assert.equal(buchung[0].type, "heading");
assert.equal(buchung[1].type, "table");
assert.equal(buchung[1].columns, 5);
assert.match(buchung[1].rows[0].cells[0].text, /Technische Anlagen und\nMaschinen/);

const hinweis = parseFallsammlungsText(`Hinweis: Wird ein unbebautes Grundstück erworben, sind die Abstandszahlungen Anschaffungskosten.`, "loesung");
assert.equal(hinweis[0].type, "paragraph");
assert.equal(hinweis[0].italic, true);
assert.equal(hinweis[0].lead, "Hinweis:");

const bilanz = parseFallsammlungsText(`Sonderbilanz C 01.01.2025\nGrund und Boden     300.000 €     Kapital     900.000 €\nGebäude             600.000 €\n                    900.000 €                 900.000 €`, "loesung");
assert.equal(bilanz[1].type, "table");
assert.equal(bilanz[1].columns, 4);

console.log("Fallsammlungsformat geprüft: Tabellen, Überschriften und Hervorhebungen erkannt");
