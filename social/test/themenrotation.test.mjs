import test from "node:test";
import assert from "node:assert/strict";

import { klausurenDesTages, tagesplan } from "../src/planer.mjs";

test("Klausurrotation wandert täglich durch K1, K2 und K3", () => {
  const tage = ["2026-09-21", "2026-09-22", "2026-09-23"];
  const rotationen = tage.map((datum) => klausurenDesTages(datum, 2));

  assert.deepEqual(new Set(rotationen.map((r) => r[0])), new Set([1, 2, 3]));
  assert.deepEqual(new Set(rotationen.map((r) => r[1])), new Set([1, 2, 3]));
  for (const r of rotationen) assert.notEqual(r[0], r[1]);
});

test("Tagesplan wählt Feed-Themen aus der für den Slot vorgesehenen Klausur", () => {
  const fach = { 1: "ao", 2: "kst", 3: "bilanz" };
  const typen = ["modul", "karteikarte", "quiz", "schema", "formel", "begriff"];
  const pool = [];
  for (const klausur of [1, 2, 3]) {
    for (const typ of typen) {
      for (let i = 0; i < 6; i++) {
        pool.push({
          id: `${fach[klausur]}-${typ}-${i}`,
          fach: fach[klausur],
          klausur,
          typ,
          prioritaet: "hoch",
          titel: `Test ${klausur} ${typ} ${i}`,
        });
      }
    }
  }

  const datum = "2026-09-21";
  const plan = tagesplan(datum, { veroeffentlicht: [], fachZaehler: {} }, pool, null);
  const rotation = klausurenDesTages(datum, plan.beitraege.length);

  for (const [i, beitrag] of plan.beitraege.entries()) {
    if (!beitrag.thema || beitrag.thema.fach === "mindset") continue;
    assert.equal(
      beitrag.thema.klausur,
      rotation[i],
      `${beitrag.slot} (${beitrag.format}) soll K${rotation[i]} tragen`,
    );
  }
});
