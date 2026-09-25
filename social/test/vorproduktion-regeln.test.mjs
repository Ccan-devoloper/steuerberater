import test from "node:test";
import assert from "node:assert/strict";

import { feedKategorie, FEED_KATEGORIEN } from "../src/feedfarben.mjs";
import { fachInfo, themenpool } from "../src/inhalte.mjs";
import { folieHtml, coverHtml, titelZeilen, MASSE } from "../src/vorlagen.mjs";
import { kontext } from "../src/render.mjs";
import { VORPRODUKTION_LAYOUT, layoutVertrag, examenscampusRegelnPruefen } from "../src/vorproduktion.mjs";

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


test("IStR-Socialpool entfernt dozenteneigene Merkhilfen vollständig", () => {
  const thema = themenpool().find((t) => t.id === "istr-modul-istr-istr3-01");
  assert.ok(thema, "IStR-Modul muss im Socialpool vorhanden sein");
  const text = JSON.stringify(thema);
  assert.equal(thema.titel, "Beschränkte Steuerpflicht mit DBA: nationales Recht vor DBA");
  for (const kuerzel of ["EIS", "AAVV", "ABBA", "WSV", "NNAS"]) {
    assert.doesNotMatch(text, new RegExp("\\b" + kuerzel + "\\b"));
  }
  assert.doesNotMatch(text, /Unterrichtsnotiz|Originalfall|der Einheit/i);
});

function gueltigerFeed(extraInhalte = {}) {
  return {
    plan: {
      beitraege: [
        { slot: "b1", format: "pruefungsfrage", fach: "ao", klausur: 1 },
        { slot: "b2", format: "reel", fach: "est", klausur: 2 },
        { slot: "b3", format: "schema", fach: "bilanz", klausur: 3 },
      ],
    },
    inhalte: {
      b1: { format: "pruefungsfrage", fach: "ao", klausur: 1, kurztitel: "AO", folien: [{ art: "titel", titel: "AO" }] },
      b2: { format: "reel", fach: "est", klausur: 2, kurztitel: "ESt", szenen: [{ art: "hook", titel: "ESt", text: "Sauber prüfen.", sprecher: "Sauber prüfen." }] },
      b3: { format: "schema", fach: "bilanz", klausur: 3, kurztitel: "Bilanz", folien: [{ art: "titel", titel: "Bilanz" }] },
      ...extraInhalte,
    },
  };
}

test("Vorproduktion erzwingt drei Feedbeiträge mit K1, K2, K3 und genau einem Reel", () => {
  const basis = gueltigerFeed();
  assert.equal(examenscampusRegelnPruefen({
    datum: "2026-09-25",
    plan: { ...basis.plan, stories: [] },
    inhalte: basis.inhalte,
  }), true);

  assert.throws(() => examenscampusRegelnPruefen({
    datum: "2026-09-25",
    plan: { beitraege: basis.plan.beitraege.slice(0, 2), stories: [] },
    inhalte: basis.inhalte,
  }), /genau 3 Feed-Beiträge/);

  const zweiReels = structuredClone(basis);
  zweiReels.plan.beitraege[2].format = "reel";
  zweiReels.inhalte.b3 = { format: "reel", fach: "bilanz", klausur: 3, kurztitel: "Bilanz", szenen: [{ art: "hook", titel: "Bilanz", text: "Sauber prüfen.", sprecher: "Sauber prüfen." }] };
  assert.throws(() => examenscampusRegelnPruefen({
    datum: "2026-09-25", plan: { ...zweiReels.plan, stories: [] }, inhalte: zweiReels.inhalte,
  }), /genau 1 Reel/);
});

test("Vorproduktion blockiert Dozentenbegriffe und inhaltliche Platzhalter", () => {
  const tag = (story) => {
    const basis = gueltigerFeed({ s1: story });
    return {
      datum: "2026-09-25",
      plan: { ...basis.plan, stories: [{ slot: "s1", art: story.art }] },
      inhalte: basis.inhalte,
    };
  };

  assert.throws(() => examenscampusRegelnPruefen(tag({
    art: "merksatz", fach: "istr", klausur: 2,
    titel: "DBA-Prüfung", text: "Danach folgt AAVV.",
  })), /Veröffentlichungsregel|Merkhilfe/);

  assert.throws(() => examenscampusRegelnPruefen(tag({
    art: "formel", fach: "bilanz", klausur: 3,
    titel: "Barwert", formel: "Barwert", text: "Bewertung prüfen.",
  })), /echte Formel/);

  assert.throws(() => examenscampusRegelnPruefen(tag({
    art: "begriff", fach: "bilanz", klausur: 3,
    titel: "Permanente Differenz", text: "Permanente Differenz",
  })), /echte Definition/);

  assert.throws(() => examenscampusRegelnPruefen(tag({
    art: "zahl", fach: "ao", klausur: 1,
    titel: "Feststellungsbescheid", zahl: "5",
    text: "Diese Punkte tragen die sichtbare Prüfungsstruktur.",
  })), /darf nicht.*erfunden/i);
});

test("Vorproduktion blockiert sichtbar abgeschnittene Reel-Texte", () => {
  const basis = gueltigerFeed();
  basis.inhalte.b2.szenen[0].titel = "Einkommensteuer sauber prüfen…";
  assert.throws(() => examenscampusRegelnPruefen({
    datum: "2026-09-25",
    plan: { ...basis.plan, stories: [] },
    inhalte: basis.inhalte,
  }), /künstlich mit … abgeschnitten/);
});

test("Reel-Cover nutzt die aktuelle HerrJurist-Safe-Area ohne Farbübernahme", () => {
  const ctx = kontext({ stil: "bunt", fach: "ust", klausur: 1, fachLabel: "Umsatzsteuer" });
  const html = coverHtml({ titel: "Innergemeinschaftlicher Erwerb", coverBildAuslassen: true }, ctx);
  assert.match(html, /story cover/);
  assert.match(html, /padding-top:150px;padding-bottom:130px/);
  assert.match(html, /margin:auto auto 0;width:460px;height:460px/);
  assert.equal(VORPRODUKTION_LAYOUT.farbenAusSchwesterkanalUebernehmen, false);
});
