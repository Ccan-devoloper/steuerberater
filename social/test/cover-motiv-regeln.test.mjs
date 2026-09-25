import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { beitragRendern, browserBeenden, coverRendern } from "../src/render.mjs";
import { coverDaten } from "../src/reel.mjs";

const svgData = (svg) => `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

const charakterQuadrat = svgData(
  '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000">'
  + '<circle cx="820" cy="760" r="190" fill="#ffffff"/>'
  + '<circle cx="820" cy="760" r="130" fill="#111111"/>'
  + '</svg>'
);

test.after(async () => {
  await browserBeenden();
});

test("Reel-Cover: Charaktermotiv wird ohne Crop vollbreit und unten verankert", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "examenscampus-reel-cover-"));
  try {
    const daten = coverDaten({
      kurztitel: "Umsatzsteuer: Vorsteuer sauber prüfen",
      bild: charakterQuadrat,
      bildTyp: "charakter",
      bildFrei: true,
      bildBreite: 1000,
      bildHoehe: 1000,
      fach: "ust",
      klausur: 1,
      szenen: [{ titel: "Test", icon: "rechner" }],
    }, { gesamt: 22 });

    assert.equal(daten.coverBildFit, "width");
    assert.equal(daten.coverBildEdgeToEdge, true);

    const ziel = path.join(dir, "cover.jpg");
    await coverRendern(daten, ziel, { stil: "bunt" });
    const layout = JSON.parse(fs.readFileSync(ziel + ".layout.json", "utf8"));
    assert.equal(layout.breite, 1080);
    assert.equal(layout.hoehe, 1920);
    assert.equal(layout.bilder.length, 1);
    const box = layout.bilder[0].box;
    assert.ok(box.w >= 1075, `Reel-Motiv muss vollbreit sein, erhalten: ${box.w}px`);
    assert.ok(box.x <= 2, `Reel-Motiv muss links anliegen, erhalten x=${box.x}`);
    assert.ok(Math.abs(box.y + box.h - 1920) <= 3, "Reel-Motiv muss an der Unterkante anliegen");
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test("Karussell-Cover: Alpha-Motiv wächst maximal bis an die nächste Pille", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "examenscampus-carousel-cover-"));
  try {
    const beitrag = {
      slug: "layout-probe",
      fach: "ust",
      klausur: 1,
      fachLabel: "Umsatzsteuer",
      folien: [{
        art: "titel",
        titel: "Umsatzsteuer: Vorsteuer sauber prüfen",
        coverBadge: "Prüfungsfrage",
        bild: charakterQuadrat,
        bildTyp: "charakter",
        bildFrei: true,
        bildBreite: 1000,
        bildHoehe: 1000,
        icon: "rechner",
      }],
    };

    const [ziel] = await beitragRendern(beitrag, dir, { stil: "bunt" });
    const layout = JSON.parse(fs.readFileSync(ziel + ".layout.json", "utf8"));
    assert.equal(layout.bilder.length, 1);
    const box = layout.bilder[0].box;
    /* Alte feste Bühne + Number(null)-Fehler ergab hier etwa 650px.
       Die neue Kollisionssuche muss deutlich groesser werden, darf aber die
       Rechtsgebiets-Pille unten rechts ebenfalls nicht ueberdecken. */
    assert.ok(box.w >= 820, `Karussell-Motiv blieb zu klein: ${box.w}px`);
    assert.ok(Math.abs(box.y + box.h - 1350) <= 3, "Karussell-Motiv muss unten verankert bleiben");
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
