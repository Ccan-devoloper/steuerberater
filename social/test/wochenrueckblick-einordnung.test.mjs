import test from "node:test";
import assert from "node:assert/strict";

import { beitragsEinordnung } from "../src/autor.mjs";
import { fussRechts } from "../src/vorlagen.mjs";

test("Wochenrückblick ist fachübergreifend statt Bilanzsteuerrecht", () => {
  assert.deepEqual(beitragsEinordnung("wochenrueckblick"), {
    fach: null,
    klausur: 0,
    fachLabel: "Wochenrückblick",
  });
});

test("Wochenrückblick zeigt keinen Klausur-3-Footer", () => {
  const meta = beitragsEinordnung("wochenrueckblick");
  assert.equal(fussRechts(meta), "");
});

test("Normale Fachbeiträge behalten ihre Facheinordnung", () => {
  assert.deepEqual(beitragsEinordnung("pruefungsfrage", { fach: "bilanz" }), {
    fach: "bilanz",
    klausur: 3,
    fachLabel: "Bilanzsteuerrecht",
  });
});
