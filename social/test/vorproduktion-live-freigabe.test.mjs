import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { vorproduktionLiveAusfuehren } from "../src/vorproduktion-live.mjs";

test("Review-Datei im Dashboard sperrt weder Live-Betrieb noch veröffentlicht sie sich selbst", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "vorproduktion-freigabe-"));
  try {
    fs.mkdirSync(path.join(dir, "vorproduktion"));
    fs.writeFileSync(path.join(dir, "vorproduktion", "2026-09-29.json"), JSON.stringify({
      datum: "2026-09-29",
      freigabeBetreiber: false,
      liveRegel: { veroeffentlichen: false, freigabeErforderlich: true },
      renderVorschau: { status: "fertig" },
      plan: { beitraege: [{ slot: "b1", zeit: "08:30", format: "spickzettel" }], stories: [] },
    }));
    const protokoll = [];
    const ergebnis = await vorproduktionLiveAusfuehren({
      hosting: { dir }, datum: "2026-09-29", log: (zeile) => protokoll.push(zeile),
    });
    assert.deepEqual(ergebnis, { aktiv: false, grund: "vorproduktion-review-ohne-freigabe" });
    assert.match(protokoll.join(" "), /Normalbetrieb läuft weiter/);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
