import test from "node:test";
import fs from "node:fs";
import assert from "node:assert/strict";

import { feedKategorie, FEED_KATEGORIEN } from "../src/feedfarben.mjs";
import { fachInfo, themenpool } from "../src/inhalte.mjs";
import { folieHtml, storyHtml, coverHtml, titelZeilen, MASSE } from "../src/vorlagen.mjs";
import { kontext } from "../src/render.mjs";
import { teaserAusBeitrag } from "../src/autor.mjs";
import { coverDaten } from "../src/reel.mjs";
import { VORPRODUKTION_LAYOUT, layoutVertrag, examenscampusRegelnPruefen, passendesCoverIcon, coverIconEinsetzen } from "../src/vorproduktion.mjs";

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

test("Bildlose Vorproduktionscover bekommen passende lokale Icons", () => {
  const ust = {
    format: "klausurtechnik",
    fach: "ust",
    folien: [{ art: "titel", titel: "Vorsteuerabzug und § 14c", coverBildAuslassen: true }],
  };
  assert.equal(passendesCoverIcon(ust), "quittung");
  assert.equal(coverIconEinsetzen(ust), "quittung");
  assert.equal(ust.folien[0].icon, "quittung");
  assert.equal(ust.folien[0].coverBildAuslassen, false);

  const istr = {
    format: "reel",
    fach: "istr",
    kurztitel: "Beschränkte Steuerpflicht mit DBA",
    coverBildAuslassen: true,
    szenen: [{ art: "hook", titel: "Nationales Recht vor DBA", icon: null }],
  };
  assert.equal(coverIconEinsetzen(istr), "globus");
  assert.equal(istr.szenen[0].icon, "globus");
  assert.equal(istr.coverBildAuslassen, false);

  const mitBild = {
    fach: "bilanz",
    folien: [{ art: "titel", titel: "Bilanz", bild: "/tmp/cover.png", coverBildAuslassen: true }],
  };
  coverIconEinsetzen(mitBild);
  assert.equal(mitBild.folien[0].bild, "/tmp/cover.png");
  assert.equal(mitBild.folien[0].coverBildAuslassen, false);
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


function dreiFeedTag() {
  return {
    datum: "2026-09-29",
    plan: {
      beitraege: [
        { slot: "b1", format: "spickzettel", fach: "bilanz", klausur: 3 },
        { slot: "b2", format: "schema", fach: "ao", klausur: 1 },
        { slot: "b3", format: "reel", fach: "istr", klausur: 2 },
      ],
      stories: [],
    },
    inhalte: {
      b1: { format: "spickzettel", fach: "bilanz", klausur: 3, rendern: false, folien: [{ art: "titel", titel: "Bilanz" }] },
      b2: { format: "schema", fach: "ao", klausur: 1, rendern: false, folien: [{ art: "titel", titel: "AO" }] },
      b3: {
        format: "reel", fach: "istr", klausur: 2, rendern: false,
        szenen: [{ art: "hook", titel: "IStR", text: "Normbezug klären.", sprecher: "Normbezug klären." }],
      },
    },
  };
}

test("Drei-Feed-Vorproduktion erzwingt K3 → K1 → K2, zwei Karussells und ein Reel", () => {
  assert.equal(examenscampusRegelnPruefen(dreiFeedTag()), true);

  const falscheFolge = structuredClone(dreiFeedTag());
  [falscheFolge.plan.beitraege[0], falscheFolge.plan.beitraege[1]] =
    [falscheFolge.plan.beitraege[1], falscheFolge.plan.beitraege[0]];
  assert.throws(() => examenscampusRegelnPruefen(falscheFolge), /Klausurfolge K3/);

  const zweiReels = structuredClone(dreiFeedTag());
  zweiReels.plan.beitraege[1].format = "reel";
  zweiReels.inhalte.b2 = {
    format: "reel", fach: "ao", klausur: 1, rendern: false,
    szenen: [{ art: "hook", titel: "AO", text: "Frist prüfen.", sprecher: "Frist prüfen." }],
  };
  assert.throws(() => examenscampusRegelnPruefen(zweiReels), /genau 1 Reel/);

  const ohneFolien = structuredClone(dreiFeedTag());
  delete ohneFolien.inhalte.b1.folien;
  assert.throws(() => examenscampusRegelnPruefen(ohneFolien), /genau 2 gerenderte Karussells/);
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

test("Vorproduktion blockiert Dozentenbegriffe und inhaltliche Platzhalter", () => {
  const tag = (story) => ({
    datum: "2026-09-25",
    plan: { beitraege: [], stories: [{ slot: "s1", art: story.art }] },
    inhalte: { s1: story },
  });

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
  const day = {
    datum: "2026-09-25",
    plan: { beitraege: [{ slot: "b1", format: "reel", fach: "mindset", klausur: 0 }], stories: [] },
    inhalte: {
      b1: {
        format: "reel", fach: "mindset", klausur: 0,
        kurztitel: "Prüfungsabend",
        szenen: [{ art: "hook", titel: "Prüfungsangst am Abend…", text: "Ruhe organisieren.", sprecher: "Ruhe organisieren." }],
      },
    },
  };
  assert.throws(() => examenscampusRegelnPruefen(day), /künstlich mit … abgeschnitten/);
});

test("Reel-Cover nutzt die aktuelle HerrJurist-Safe-Area ohne Farbübernahme", () => {
  const ctx = kontext({ stil: "bunt", fach: "ust", klausur: 1, fachLabel: "Umsatzsteuer" });
  const html = coverHtml({ titel: "Innergemeinschaftlicher Erwerb", coverBildAuslassen: true }, ctx);
  assert.match(html, /story cover/);
  assert.match(html, /padding-top:150px;padding-bottom:130px/);
  assert.match(html, /margin:auto auto 0;width:460px;height:460px/);
  assert.equal(VORPRODUKTION_LAYOUT.farbenAusSchwesterkanalUebernehmen, false);
});


test("Quiz-Story zeigt eine echte Frage und die Vorproduktion erzwingt sie", () => {
  const html = storyHtml({
    slot: "s1",
    art: "frage",
    fach: "ao",
    klausur: 1,
    titel: "Festsetzungsverjährung",
    frage: "Wann beginnt die Festsetzungsfrist?",
    optionen: ["Mit Ablauf des Kalenderjahres", "Mit Bekanntgabe des Bescheids", "Mit Eingang der Steuererklärung"],
    richtig: 0,
  }, kontext({ stil: "bunt", fach: "ao", klausur: 1, fachLabel: "Abgabenordnung" }));
  assert.match(html, /Wann beginnt die Festsetzungsfrist\?/);
  assert.match(html, />A<\/b>/);
  assert.match(html, />B<\/b>/);
  assert.match(html, />C<\/b>/);
  assert.doesNotMatch(html, /<h1 class="klein">Festsetzungsverjährung<\/h1>/);

  const tag = {
    datum: "2026-09-29",
    plan: {
      beitraege: [],
      stories: [
        { slot: "s1", art: "frage" },
        { slot: "s2", art: "antwort" },
      ],
    },
    inhalte: {
      s1: { slot: "s1", art: "frage", fach: "ao", klausur: 1, pairId: "quiz-1", titel: "Festsetzungsverjährung" },
      s2: { slot: "s2", art: "antwort", fach: "ao", klausur: 1, pairId: "quiz-1", titel: "Antwort", text: "Erklärung" },
    },
  };
  assert.throws(() => examenscampusRegelnPruefen(tag), /Fragesatz mit Fragezeichen/);
  tag.inhalte.s1.frage = "Wann beginnt die Festsetzungsfrist?";
  assert.throws(() => examenscampusRegelnPruefen(tag), /genau 3 Optionen/);
  tag.inhalte.s1.optionen = ["A", "B", "C"];
  tag.inhalte.s1.richtig = 1;
  tag.inhalte.s2.optionen = ["A", "B", "C"];
  tag.inhalte.s2.richtig = 1;
  assert.equal(examenscampusRegelnPruefen(tag), true);
});

test("CTA nutzt die je Beitrag hinterlegten semantischen Icons", () => {
  const ctx = kontext({ stil: "bunt", fach: "bilanz", klausur: 3, fachLabel: "Bilanzsteuerrecht" });
  assert.doesNotThrow(() => folieHtml({
    art: "cta",
    titel: "Für die nächste Klausur",
    punkte: ["Norm markieren", "Prüfschritt kontrollieren", "Fehler vermeiden"],
    icons: ["dokument", "lupe", "warnung"],
  }, ctx, 5, 5));
  assert.throws(() => folieHtml({
    art: "cta",
    titel: "Für die nächste Klausur",
    punkte: ["Norm markieren"],
    icons: ["nicht-vorhanden"],
  }, ctx, 5, 5), /Unbekannter CTA-Icon-Key/);
});

test("Story-Teaser übernimmt Freisteller und erzwingt Kante-an-Kante", () => {
  const teaser = teaserAusBeitrag({
    fach: "bilanz",
    klausur: 3,
    fachLabel: "Bilanzsteuerrecht",
    kurztitel: "Bilanz richtig aufbauen",
    folien: [{
      art: "titel", titel: "Bilanz richtig aufbauen", icon: "hauptbuch",
      bild: "/tmp/motiv.png", bildFrei: true, bildTyp: "charakter",
      coverBildTop: 700, coverBildBottom: 180, coverBildX: 0.2,
    }],
  }, "s1");
  const html = storyHtml(teaser, kontext({ stil: "bunt", fach: "bilanz", klausur: 3, fachLabel: "Bilanzsteuerrecht" }));
  assert.match(html, /class="frei charakter edge-to-edge fit-width"/);
  assert.match(html, /left:0;right:0;top:auto;bottom:0/);
  assert.doesNotMatch(html, /bottom:180px/);
});

test("Reel-Cover übernimmt Herrjurist-Titel- und Motivprofil", () => {
  const d = coverDaten({
    fach: "istr", klausur: 2,
    kurztitel: "Wohnsitz im Ausland: Wer darf besteuern?",
    titelZeilen: ["Wohnsitz im Ausland:", "Wer darf besteuern?"],
    coverBadge: "Reel",
    coverText: "Wohnsitz zuerst prüfen",
    coverHinweisPlan: { noteX: 0.2, noteY: 0.3 },
    bild: "/tmp/motiv.png",
    bildTyp: "charakter",
    bildFrei: true,
    szenen: [{ art: "hook", titel: "Wer darf besteuern?", icon: "globus" }],
  }, { gesamt: 31 });
  assert.deepEqual(d.titelZeilen, ["Wohnsitz im Ausland:", "Wer darf besteuern?"]);
  assert.equal(d.coverText, "Wohnsitz zuerst prüfen");
  assert.equal(d.coverBildFit, "width");
  assert.equal(d.coverBildBottom, 0);
  assert.equal(d.coverBildEdgeToEdge, true);
});

test("Norm- und Zahl-Stories nutzen die aktuellen Spiegel-Layouts", () => {
  const ctx = kontext({ stil: "bunt", fach: "ao", klausur: 1, fachLabel: "Abgabenordnung" });
  const norm = storyHtml({ slot: "s1", art: "norm", fach: "ao", klausur: 1, norm: "§ 169 AO · § 170 AO", titel: "Festsetzungsfrist" }, ctx);
  assert.match(norm, /norm-liste/);
  const zahl = storyHtml({ slot: "s2", art: "zahl", fach: "ao", klausur: 1, zahl: "100.000", titel: "Grenzbetrag", text: "Grenze sauber einordnen." }, ctx);
  assert.match(zahl, /font-size:180px/);
});


test("Providerfreier Re-Render normalisiert Quizfragen auch im echten Renderdurchlauf", () => {
  const quelle = fs.readFileSync(new URL("../bin/vorproduktion-ohne-coverbilder-rendern.mjs", import.meta.url), "utf8");
  assert.equal((quelle.match(/quizStoriesNormalisieren\(tag\);/g) || []).length, 2,
    "Quiz-Normalisierung muss sowohl im Vorab-Check als auch nach dem erneuten Einlesen vor dem Rendern laufen");
  assert.equal((quelle.match(/liveMetadatenSetzen\(tag\);/g) || []).length, 2,
    "Live-Vorrang-Metadaten müssen in Vorab-Check und Renderdurchlauf synchronisiert werden");
  assert.match(quelle, /renderErzeugtAm:/);
  assert.match(quelle, /normalbetriebGesperrt: true/);
});

test("Performance-Dashboard zeigt Live-Vorrang und bricht den Asset-Cache nach Re-Render", () => {
  const dashboard = fs.readFileSync(new URL("../../public/instagram-dashboard.html", import.meta.url), "utf8");
  assert.match(dashboard, /Live-Vorrang aktiv/);
  assert.match(dashboard, /Normalbetrieb gesperrt/);
  assert.doesNotMatch(dashboard, /Review offen/);
  assert.doesNotMatch(dashboard, /noch nicht live verknüpft/);
  assert.match(dashboard, /renderStamp=Date\.parse/);
  assert.match(dashboard, /Medien: <b>aktuell gerendert<\/b>/);
});


test("Herrjurist-Spiegelung: CTA und Karussell-Innenfolien bleiben auf demselben Layoutvertrag", () => {
  const ctx = kontext({ stil: "bunt", fach: "bilanz", klausur: 3, fachLabel: "Bilanzsteuerrecht" });
  const cta = folieHtml({
    art: "cta",
    titel: "Für die nächste Klausur",
    punkte: ["Norm markieren", "Prüfungsschritte wiederholen", "Fehler kontrollieren"],
    icons: ["dokument", "lupe", "warnung"],
  }, ctx, 6, 6);
  assert.match(cta, /class="cta"/);
  assert.match(cta, /class="liste"/);
  assert.match(cta, /Tragende|Norm markieren/);

  const text = folieHtml({ art: "text", titel: "Kern der Prüfung", punkte: ["Punkt eins", "Punkt zwei"] }, ctx, 2, 6);
  assert.match(text, /class="punkte"/);
  const schritte = folieHtml({ art: "schritte", titel: "So gehst du vor", schritte: [{ titel: "Erstens", text: "Prüfen." }, { titel: "Zweitens", text: "Einordnen." }] }, ctx, 3, 6);
  assert.match(schritte, /class="schritte"/);
});


test("Herrjurist-Quiz-Backfill lässt Ersatzfragen vor der Auswahl durch den Veröffentlichungscheck", () => {
  const quelle = fs.readFileSync(new URL("../bin/vorproduktion-herrjurist-spiegel-backfill.mjs", import.meta.url), "utf8");
  assert.match(quelle, /import \{ pruefeBeitrag \} from "\.\.\/src\/pruefung\.mjs"/);
  assert.match(quelle, /function quizVeroeffentlichbar\(thema\)/);
  assert.match(quelle, /pruefeBeitrag\(\{ stories: \[v\.frage, v\.antwort\] \}\)\.ok/);
  assert.match(quelle, /quizVeroeffentlichbar\(t\)/);
});
