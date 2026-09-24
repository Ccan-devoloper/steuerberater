import test from "node:test";
import assert from "node:assert/strict";

import { feedKategorie, FEED_KATEGORIEN } from "../src/feedfarben.mjs";
import { fachInfo } from "../src/inhalte.mjs";
import { folieHtml, titelZeilen, MASSE } from "../src/vorlagen.mjs";
import { kontext } from "../src/render.mjs";
import { VORPRODUKTION_LAYOUT, layoutVertrag } from "../src/vorproduktion.mjs";

test("Vorproduktion behält die Examenscampus-Klausurzuordnung", () => {
  for (const fach of ["ao", "ust", "erbst"]) {
    assert.equal(feedKategorie({ fach }), 1, fach + " muss K1 bleiben");
  }
  for (const fach of ["est", "gewst", "kst", "istr"]) {
    assert.equal(feedKategorie({ fach }), 2, fach + " muss K2 bleiben");
  }
  for (const fach of ["bilanz", "persg"]) {
    assert.equal(feedKategorie({ fach }), 3, fach + " muss K3 bleiben");
  }
  assert.equal(feedKategorie({ fach: "mindset" }), 0);
  assert.equal(feedKategorie({ format: "wochenrueckblick" }), 4);
});

test("Fachgebundene Klausurtechnik bleibt in der Fachfarbe", () => {
  assert.equal(feedKategorie({ format: "klausurtechnik", fach: "ao", klausur: 0 }), 1);
  assert.equal(feedKategorie({ format: "klausurtechnik", fach: "kst", klausur: 0 }), 2);
  assert.equal(feedKategorie({ format: "klausurtechnik", fach: "bilanz", klausur: 0 }), 3);
  assert.equal(fachInfo("est")?.klausur, 2);
  assert.equal(fachInfo("gewst")?.klausur, 2);
});

test("Bildloses Review-Cover nutzt Cover-v2 ohne Handschrift oder Ersatzmotiv", () => {
  const ctx = kontext({
    stil: "bunt",
    fach: "ao",
    klausur: 1,
    fachLabel: "Abgabenordnung",
  });
  const html = folieHtml({
    art: "titel",
    titel: "Festsetzungsverjährung: Beginn und Ablauf sauber trennen",
    coverBadge: "Prüfungsfrage",
    coverBildAuslassen: true,
  }, ctx, 1, 6);

  assert.match(html, /art-titel cover-ohne-bild/);
  assert.match(html, /titel-stack/);
  assert.match(html, /cover-badge/);
  assert.doesNotMatch(html, /class="pille"/);
  assert.doesNotMatch(html, /class="karte2"/);
  assert.doesNotMatch(html, /class="illu"/);
});

test("Titelzeilen bleiben kompakt und kennen Steuerrechtsnormen", () => {
  const zeilen = titelZeilen("§ 15 Abs. 1 Nr. 2 EStG: Sondervergütungen richtig einordnen");
  assert.ok(zeilen.length >= 2 && zeilen.length <= 4);
  assert.match(zeilen.join(" "), /EStG/);
  assert.ok(!zeilen.slice(0, -1).some((z) => /(?:§|Abs\.|Nr\.)\s*$/.test(z)));
});

test("Vorproduktionslayout entspricht Herrjurist, Kategorien bleiben Examenscampus", () => {
  assert.deepEqual(MASSE.beitrag, { breite: 1080, hoehe: 1350 });
  assert.deepEqual(MASSE.story, { breite: 1080, hoehe: 1920 });
  assert.equal(VORPRODUKTION_LAYOUT.feed.verhaeltnis, "4:5");
  assert.equal(VORPRODUKTION_LAYOUT.story.verhaeltnis, "9:16");
  assert.equal(VORPRODUKTION_LAYOUT.reelCover.profilSafeArea, "4:5");
  assert.equal(VORPRODUKTION_LAYOUT.bildlosesCoverMitHandschrift, false);

  const vertrag = layoutVertrag();
  assert.equal(vertrag.feedKategorien[1], FEED_KATEGORIEN[1]);
  assert.equal(vertrag.feedKategorien[2], FEED_KATEGORIEN[2]);
  assert.equal(vertrag.feedKategorien[3], FEED_KATEGORIEN[3]);
  assert.equal(vertrag.farbenAusSchwesterkanalUebernehmen, false);
});
