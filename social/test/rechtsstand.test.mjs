import test from "node:test";
import assert from "node:assert/strict";
import { themenpool } from "../src/inhalte.mjs";
import { rechtsstandJahre, rechtsstandAuftrag } from "../src/rechtsstand.mjs";

const pool = themenpool();
const byId = (id) => {
  const thema = pool.find((t) => t.id === id);
  assert.ok(thema, "Thema fehlt im Social-Pool: " + id);
  return thema;
};
const byTitle = (rx) => {
  const thema = pool.find((t) => rx.test(t.titel || ""));
  assert.ok(thema, "Thema fehlt im Social-Pool: " + rx);
  return thema;
};
const kern = (thema) => JSON.stringify(thema.kern || {});

test("Entfernungspauschale nutzt 2026 0,38 Euro ab Kilometer 1", () => {
  const t = byId("bilanz-modul-k3-36");
  assert.match(kern(t), /0,38/);
  assert.match(kern(t), /ersten vollen Entfernungskilometer|ersten Kilometer/);
  assert.doesNotMatch(kern(t), /1\.884|2\.407|20 km × 0,30/);
  const auftrag = rechtsstandAuftrag(t, new Date("2026-09-19T12:00:00Z"));
  assert.match(auftrag, /Rechtsstand 2026/);
  assert.match(auftrag, /Rechtsstand 2025/);
});

test("§ 9 AStG verwendet Einkünfte statt Bruttoerträge", () => {
  const t = byId("istr-modul-istr-istr4-06");
  assert.match(kern(t), /gesamten Einkünfte/);
  assert.doesNotMatch(kern(t), /Bruttoerträge/);
});

test("§ 6b Social-Formeln enthalten keine erfundene Reihenfolge und beachten 2-Mio-Grenze", () => {
  const reihenfolge = byId("bilanz-formel-sechsb-reihenfolge");
  assert.doesNotMatch(kern(reihenfolge), /zuerst Grund und Boden|Erst wenn der Grund und Boden/);
  const abs10 = byId("bilanz-formel-sechsb-abs10");
  assert.match(kern(abs10), /2\.000\.000/);
});

test("wirtschaftliches Eigentum bei Miete ist nicht absolut ausgeschlossen", () => {
  const t = byTitle(/Begründet ein Mietverhältnis wirtschaftliches Eigentum/i);
  assert.match(kern(t), /in der Regel/);
  assert.match(kern(t), /§ 39 Abs\. 2 Nr\. 1 AO/);
  assert.doesNotMatch(kern(t), /Nein, niemals/);
});

test("Vereinsbesteuerung prüft § 64 Abs. 3 AO vor § 24 KStG", () => {
  const t = byId("kst-modul-kst-12");
  assert.match(kern(t), /§ 64 Abs\. 3 AO/);
  assert.match(kern(t), /50\.000/);
  const auftrag = rechtsstandAuftrag(t, new Date("2026-09-19T12:00:00Z"));
  assert.match(auftrag, /50\.000/);
  assert.match(auftrag, /45\.000/);
});

test("§ 8b-Themen enthalten Erwerbsfiktion des Satzes 6 und keine falsche Einzigkeitsbehauptung", () => {
  for (const id of ["kst-modul-kst-7", "bilanz-modul-k3-50"]) {
    assert.match(kern(byId(id)), /mindestens 10 %/);
    assert.match(kern(byId(id)), /§ 8b Abs\. 4 S\. 6 KStG/);
  }
  assert.doesNotMatch(kern(byId("bilanz-modul-k3-50")), /einzige Ausnahme von der Freistellung/i);
});

test("Rückstellungskatalog nennt die gesetzlichen Sonderfälle vollständig genug", () => {
  const t = byId("bilanz-modul-k3-29");
  assert.match(kern(t), /Abraumbeseitigung/);
  assert.match(kern(t), /Gewährleistungen ohne rechtliche Verpflichtung/);
  assert.doesNotMatch(kern(t), /einzige praktische Ausnahme/i);
});

test("Elektro-Pkw-Merksatz verallgemeinert nicht mehr auf Halbierung", () => {
  const t = byId("bilanz-modul-k3-35");
  assert.match(kern(t), /Viertelregel/);
  assert.doesNotMatch(kern(t), /Einkommensteuer halbiert/);
});

test("Gastronomie trägt den 2025/2026-Rechtsstandswechsel", () => {
  const t = byId("ust-modul-ust-161");
  const auftrag = rechtsstandAuftrag(t, new Date("2026-09-19T12:00:00Z"));
  assert.match(auftrag, /Rechtsstand 2026/);
  assert.match(auftrag, /7 %/);
  assert.match(auftrag, /Rechtsstand 2025/);
  assert.match(auftrag, /19 %/);
});

test("Jahreslogik rollt 2027 automatisch auf 2027/2026", () => {
  assert.deepEqual(rechtsstandJahre(new Date("2027-02-01T12:00:00Z")), { aktuell: 2027, vorjahr: 2026 });
});
