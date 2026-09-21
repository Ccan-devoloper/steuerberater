import test from "node:test";
import assert from "node:assert/strict";

import { klausurenDesTages, tagesplan, auffuellplan } from "../src/planer.mjs";
import { feedKategorie, feedFolgeErlaubt } from "../src/inhalte.mjs";

const fach = { 1: "ao", 2: "kst", 3: "bilanz" };
const typen = ["modul", "karteikarte", "quiz", "schema", "formel", "begriff"];
const pool = [];
for (const klausur of [1, 2, 3]) {
  for (const typ of typen) {
    for (let i = 0; i < 20; i++) {
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

test("Klausurrotation läuft über Tagesgrenzen ohne Doppel-Farbe weiter", () => {
  const tage = ["2026-09-21", "2026-09-22", "2026-09-23"];
  const rotationen = tage.map((datum) => klausurenDesTages(datum, 2));

  for (const r of rotationen) assert.notEqual(r[0], r[1]);
  const folge = rotationen.flat();
  for (let i = 1; i < folge.length; i++) {
    assert.notEqual(folge[i - 1], folge[i], `K${folge[i]} folgt an der Tagesgrenze auf sich selbst`);
  }
  assert.deepEqual(new Set(rotationen.map((r) => r[0])), new Set([1, 2, 3]));
  assert.deepEqual(new Set(rotationen.map((r) => r[1])), new Set([1, 2, 3]));
});

test("Tagesplan hält die fünf sichtbaren Feed-Kategorien auch über Wochenende und Prüfungstage auseinander", () => {
  const ledger = { veroeffentlicht: [], fachZaehler: {} };
  let vorher = null;

  for (let i = 0; i < 24; i++) {
    const datum = new Date(Date.UTC(2026, 8, 18) + i * 864e5).toISOString().slice(0, 10);
    const plan = tagesplan(datum, ledger, pool, null);

    for (const beitrag of plan.beitraege) {
      const k = feedKategorie(beitrag);
      assert.ok([0, 1, 2, 3, 4].includes(k), `${datum} ${beitrag.slot}: unbekannte Feed-Kategorie ${k}`);
      if (vorher) {
        assert.ok(feedFolgeErlaubt(vorher, beitrag),
          `${datum} ${beitrag.slot}: Kategorie ${k} folgt direkt auf Kategorie ${feedKategorie(vorher)}`);
      }
      const fachName = beitrag.thema?.fach || null;
      const gespeichert = {
        datum, art: "beitrag", slot: beitrag.slot, format: beitrag.format,
        fach: fachName, klausur: k, thema: beitrag.thema?.id || null,
        medienId: `m-${datum}-${beitrag.slot}`,
      };
      ledger.veroeffentlicht.push(gespeichert);
      vorher = gespeichert;
    }
  }

  const samstag = tagesplan("2026-09-19", { veroeffentlicht: [], fachZaehler: {} }, pool, null);
  assert.equal(feedKategorie(samstag.beitraege.at(-1)), 0, "Samstags-Mindset ist nicht violett");

  const sonntag = tagesplan("2026-09-20", { veroeffentlicht: [], fachZaehler: {} }, pool, null);
  assert.equal(feedKategorie(sonntag.beitraege[0]), 4, "Wochenrückblick hat keine eigene Kategorie");

  const montag = tagesplan("2026-09-21", { veroeffentlicht: [], fachZaehler: {} }, pool, null);
  assert.equal(montag.beitraege[0].format, "klausurtechnik");
  assert.ok([1, 2, 3].includes(feedKategorie(montag.beitraege[0])), "Fachgebundene Klausurtechnik hat keinen Klausurtag");
  assert.equal(
    feedKategorie(montag.beitraege[0]),
    montag.beitraege[0].thema.klausur,
    "Fachgebundene Klausurtechnik weicht von ihrem Themen-Klausurtag ab",
  );
});

test("Normale Pool-Slots bleiben in ihrer geplanten Klausurfarbe", () => {
  const datum = "2026-09-24";
  const plan = tagesplan(datum, { veroeffentlicht: [], fachZaehler: {} }, pool, null);

  for (const beitrag of plan.beitraege) {
    if (!beitrag.thema || beitrag.thema.fach === "mindset") continue;
    assert.equal(
      beitrag.thema.klausur,
      beitrag.klausur,
      `${beitrag.slot} (${beitrag.format}) weicht vom geplanten Farbslot ab`,
    );
  }
});


test("Auffüllplan hält dieselbe Farbregel wie der Tagesfeed", () => {
  const ledger = {
    veroeffentlicht: [{ datum: "2026-09-20", art: "beitrag", format: "reel", fach: "bilanz", klausur: 3, thema: "alt", medienId: "m-alt" }],
    fachZaehler: {},
  };
  const plan = auffuellplan(18, ledger, pool, "farbtest");
  assert.equal(plan.length, 18);
  let vorher = ledger.veroeffentlicht[0];
  for (const beitrag of plan) {
    assert.ok(feedFolgeErlaubt(vorher, beitrag),
      `${beitrag.slot}: Kategorie ${feedKategorie(beitrag)} folgt direkt auf ${feedKategorie(vorher)}`);
    assert.equal(beitrag.thema.klausur, beitrag.klausur, "Auffüll-Fachbeitrag weicht von seiner Farbe ab");
    assert.equal(feedKategorie(beitrag), beitrag.thema.klausur, "Auffüll-Beitrag wird in der falschen Feed-Kategorie eingeordnet");
    vorher = beitrag;
  }
});
