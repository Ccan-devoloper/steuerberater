import test from "node:test";
import assert from "node:assert/strict";

import { beitragsEinordnung } from "../src/autor.mjs";
import { fussRechts } from "../src/vorlagen.mjs";

test("Wochenrückblick ist fachübergreifend und hat die eigene goldene Kategorie", () => {
  assert.deepEqual(beitragsEinordnung("wochenrueckblick"), {
    fach: null,
    klausur: 4,
    fachLabel: "Wochenrückblick",
  });
  assert.equal(fussRechts(beitragsEinordnung("wochenrueckblick")), "Wochenrückblick");
});

test("Fachgebundene Klausurtechnik behält den Klausurtag des Themas", () => {
  const meta = beitragsEinordnung("klausurtechnik", { fach: "bilanz", klausur: 3 });
  assert.deepEqual(meta, {
    fach: "bilanz",
    klausur: 3,
    fachLabel: "Bilanzsteuerrecht",
  });
  assert.equal(fussRechts(meta), "Klausur 3 · Tag 3");
});

test("Gewerbesteuer-Klausurtechnik gehört zu Klausur 2", () => {
  const meta = beitragsEinordnung("klausurtechnik", { fach: "gewst" });
  assert.deepEqual(meta, {
    fach: "gewst",
    klausur: 2,
    fachLabel: "Gewerbesteuer",
  });
  assert.equal(fussRechts(meta), "Klausur 2 · Tag 2");
});

test("Fachübergreifende Klausurtechnik bleibt violett", () => {
  const meta = beitragsEinordnung("klausurtechnik");
  assert.deepEqual(meta, {
    fach: null,
    klausur: 0,
    fachLabel: "Klausurtechnik",
  });
  assert.equal(fussRechts(meta), "Klausurtechnik");
});

test("Normale Fachbeiträge behalten ihre Facheinordnung", () => {
  assert.deepEqual(beitragsEinordnung("pruefungsfrage", { fach: "bilanz" }), {
    fach: "bilanz",
    klausur: 3,
    fachLabel: "Bilanzsteuerrecht",
  });
});


test("Themenlose Anlässe können den geplanten Fach-Farbslot übernehmen", () => {
  assert.deepEqual(beitragsEinordnung("anlass", null, null, null, 1), {
    fach: null,
    klausur: 1,
    fachLabel: "Steuerberaterexamen",
  });
  assert.deepEqual(beitragsEinordnung("anlass", null, null, null, 2).klausur, 2);
});
