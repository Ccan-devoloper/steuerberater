import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { vorproduktionLiveAusfuehren } from "../src/vorproduktion-live.mjs";

test("Vorproduktionsdatei sperrt den Normalbetrieb auch mit alten Review-Metadaten", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "vorproduktion-vorrang-"));
  try {
    const stateDir = path.join(dir, "state");
    fs.mkdirSync(path.join(dir, "vorproduktion"), { recursive: true });
    fs.mkdirSync(stateDir, { recursive: true });
    fs.writeFileSync(path.join(dir, "vorproduktion", "2026-09-29.json"), JSON.stringify({
      datum: "2026-09-29",
      freigabeBetreiber: false,
      liveRegel: { veroeffentlichen: false, freigabeErforderlich: true },
      renderVorschau: { status: "fertig" },
      plan: { beitraege: [], stories: [] },
      inhalte: {},
    }));

    const protokoll = [];
    const ergebnis = await vorproduktionLiveAusfuehren({
      hosting: {
        dir,
        stateDir,
        jsonLesen: () => null,
      },
      datum: "2026-09-29",
      trocken: true,
      log: (zeile) => protokoll.push(zeile),
    });

    assert.equal(ergebnis.aktiv, true);
    assert.equal(ergebnis.veroeffentlicht, 0);
    assert.match(protokoll.join(" "), /Vorproduktion hat Vorrang/);
    assert.doesNotMatch(protokoll.join(" "), /Normalbetrieb läuft weiter/);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test("Nur ohne Vorproduktionsdatei darf der Normalbetrieb übernehmen", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "vorproduktion-fallback-"));
  try {
    const ergebnis = await vorproduktionLiveAusfuehren({
      hosting: { dir },
      datum: "2026-11-01",
    });
    assert.deepEqual(ergebnis, { aktiv: false, grund: "keine Vorproduktion für diesen Tag" });
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
