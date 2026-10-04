import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { zeitpunktVon } from "../src/zeit.mjs";
import { planMitVorproduktionAbgleichen, naechsterTermin } from "../src/vorproduktion-zeitplan.mjs";
import { vorproduktionLiveAusfuehren } from "../src/vorproduktion-live.mjs";

const DATUM = "2026-10-04";

/* Stand vom 04.10.2026: Der Bot hatte den Tag um 00:25 mit b3 19:00
   übernommen, um 00:58 wurde b3 im Dashboard auf 17:00 gestellt. */
function dashboardTag() {
  return {
    datum: DATUM,
    renderVorschau: { status: "fertig" },
    plan: {
      beitraege: [
        { slot: "b1", zeit: "07:00", format: "wochenrueckblick" },
        { slot: "b3", zeit: "17:00", format: "reel", themaId: "ao-aufb-ao-jacobs-12-1" },
      ],
      stories: [
        { slot: "s3", zeit: "17:00", art: "teaser", beitragSlot: "b3" },
        { slot: "s8", zeit: "17:04", art: "tipp" },
      ],
    },
    inhalte: {
      b3: { format: "reel", bild: "op-cover", caption: "Wen darf das Finanzamt prüfen?", hashtags: ["#abgabenordnung"], themaId: "ao-aufb-ao-jacobs-12-1" },
      s3: { art: "teaser" },
      s8: { art: "tipp" },
    },
  };
}

function botPlan() {
  return {
    datum: DATUM,
    quelle: "vorproduktion",
    beitraege: [
      { slot: "b1", zeit: "08:30", format: "wochenrueckblick", status: "veroeffentlicht", medienId: "17886919434618140" },
      { slot: "b3", zeit: "19:00", format: "reel", themaId: "ao-aufb-ao-jacobs-12-1", status: "geplant" },
    ],
    stories: [
      { slot: "s3", zeit: "19:00", art: "teaser", beitragSlot: "b3", status: "geplant" },
      { slot: "s8", zeit: "17:04", art: "tipp", status: "veroeffentlicht", medienId: "18128140567699793" },
    ],
  };
}

test("zeitpunktVon rechnet Berliner Uhrzeit in Sommer- und Winterzeit um", () => {
  assert.equal(new Date(zeitpunktVon("2026-10-04", "17:00")).toISOString(), "2026-10-04T15:00:00.000Z");
  assert.equal(new Date(zeitpunktVon("2026-12-01", "17:00")).toISOString(), "2026-12-01T16:00:00.000Z");
  assert.equal(new Date(zeitpunktVon("2026-10-25", "07:00")).toISOString(), "2026-10-25T06:00:00.000Z");
});

test("Dashboard-Änderungen gelten auch nach der Übernahme des Tages, Gesendetes bleibt", () => {
  const plan = botPlan();
  const aenderungen = planMitVorproduktionAbgleichen(plan, dashboardTag());

  const b3 = plan.beitraege.find((e) => e.slot === "b3");
  const s3 = plan.stories.find((e) => e.slot === "s3");
  assert.equal(b3.zeit, "17:00");
  assert.equal(b3.status, "geplant");
  assert.equal(s3.zeit, "17:00");
  assert.ok(aenderungen.includes("b3 19:00 → 17:00"));
  assert.ok(aenderungen.includes("s3 19:00 → 17:00"));

  /* Bereits veröffentlicht: Uhrzeit und Medien-ID bleiben, wie sie waren. */
  const b1 = plan.beitraege.find((e) => e.slot === "b1");
  assert.equal(b1.zeit, "08:30");
  assert.equal(b1.medienId, "17886919434618140");

  /* Zweiter Abgleich ohne neue Änderung: nichts zu tun. */
  assert.deepEqual(planMitVorproduktionAbgleichen(plan, dashboardTag()), []);
});

test("Abgleich nimmt neue Slots auf, entfernt nur geplante und lässt Sendeversuche in Ruhe", () => {
  const plan = botPlan();
  plan.stories.push({ slot: "s9", zeit: "19:12", art: "merksatz", status: "geplant" });
  plan.stories.push({ slot: "s10", zeit: "20:00", art: "frage", status: "sendet" });
  const tag = dashboardTag();
  tag.plan.stories.push({ slot: "s11", zeit: "21:00", art: "frage" });

  const aenderungen = planMitVorproduktionAbgleichen(plan, tag);
  const slots = plan.stories.map((e) => e.slot);
  assert.ok(!slots.includes("s9"), "im Dashboard entfernter geplanter Slot fällt weg");
  assert.ok(slots.includes("s10"), "unbestätigter Sendeversuch bleibt stehen");
  assert.equal(plan.stories.find((e) => e.slot === "s11").status, "geplant");
  assert.ok(aenderungen.includes("s9 entfernt"));
  assert.ok(aenderungen.includes("s11 neu (21:00)"));
});

test("naechsterTermin: nächster offener Slot, ohne Vergangenes und frisch Gescheitertes", () => {
  const plan = botPlan();
  planMitVorproduktionAbgleichen(plan, dashboardTag());
  const um1650 = Date.parse("2026-10-04T14:50:00Z");
  assert.equal(new Date(naechsterTermin(plan, DATUM, um1650)).toISOString(), "2026-10-04T15:00:00.000Z");

  const um1701 = Date.parse("2026-10-04T15:01:00Z");
  assert.equal(naechsterTermin(plan, DATUM, um1701), null);

  plan.beitraege.find((e) => e.slot === "b3").fehler = "2026-10-04T14:49:00.000Z Container ERROR";
  assert.equal(naechsterTermin(plan, DATUM, um1650), null, "weder b3 noch dessen Teaser wecken sofort erneut");
});

test("Live-Lauf veröffentlicht b3 zur eingestellten Minute, nicht zur alten Planzeit", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "vorproduktion-punktgenau-"));
  try {
    const stateDir = path.join(dir, "state");
    const fertig = path.join(dir, "vorproduktion", DATUM, "fertig", "b3");
    fs.mkdirSync(fertig, { recursive: true });
    fs.mkdirSync(path.join(stateDir, "plaene"), { recursive: true });
    fs.writeFileSync(path.join(fertig, `${DATUM}-b3.mp4`), "video");
    fs.writeFileSync(path.join(fertig, `${DATUM}-b3-cover.jpg`), "cover");
    const stories = path.join(dir, "vorproduktion", DATUM, "fertig", "stories");
    fs.mkdirSync(stories, { recursive: true });
    fs.writeFileSync(path.join(stories, "s3-teaser.jpg"), "story");
    fs.writeFileSync(path.join(dir, "vorproduktion", `${DATUM}.json`), JSON.stringify(dashboardTag()));
    fs.writeFileSync(path.join(stateDir, "plaene", `${DATUM}.json`), JSON.stringify(botPlan()));

    /* Uhr: 16:55 Berlin. Schlafen stellt die Uhr nur vor. */
    let uhr = Date.parse("2026-10-04T14:55:00Z");
    const ablauf = [];
    const hosting = {
      dir,
      stateDir,
      jsonLesen: (name, standard) => {
        const p = path.join(stateDir, name);
        return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, "utf8")) : standard;
      },
      jsonSchreiben: (name, daten) => {
        const p = path.join(stateDir, name);
        fs.mkdirSync(path.dirname(p), { recursive: true });
        fs.writeFileSync(p, JSON.stringify(daten));
      },
      commit: (nachricht) => ablauf.push(`commit ${nachricht}`),
      push: async () => {},
      veroeffentlichen: async (dateien) => dateien.map((d) => `https://cdn.example/${path.basename(d)}`),
    };
    const instagram = {
      pruefen: async () => ({ konto: { username: "examenscampus" }, limit: { maximum: 100, genutzt: 0 } }),
      bereitsVeroeffentlicht: async () => null,
      reelPosten: async ({ vorVeroeffentlichen }) => {
        ablauf.push(`container fertig ${new Date(uhr).toISOString()}`);
        await vorVeroeffentlichen();
        ablauf.push(`media_publish b3 ${new Date(uhr).toISOString()}`);
        return "18000000000000001";
      },
      storyPosten: async ({ vorVeroeffentlichen }) => {
        await vorVeroeffentlichen();
        ablauf.push(`media_publish story ${new Date(uhr).toISOString()}`);
        return "18000000000000002";
      },
    };

    const protokoll = [];
    const ergebnis = await vorproduktionLiveAusfuehren({
      hosting,
      datum: DATUM,
      log: (z) => protokoll.push(z),
      jetzt: () => uhr,
      schlafen: async (ms) => { uhr += ms; },
      instagram,
    });

    assert.equal(ergebnis.veroeffentlicht, 2, protokoll.join("\n"));
    assert.ok(ablauf.includes("media_publish b3 2026-10-04T15:00:00.000Z"), ablauf.join("\n"));
    assert.ok(ablauf.includes("media_publish story 2026-10-04T15:00:00.000Z"), "Teaser s3 direkt nach b3");
    assert.ok(ablauf.some((z) => z.startsWith("commit Vorproduktion Zeitplan übernommen 2026-10-04: b3 19:00 → 17:00")));
    /* Die Sendesperre fällt erst zur Sendeminute, nicht schon beim Upload. */
    const sperre = ablauf.indexOf("commit Vorproduktion Sendeversuch 2026-10-04 b3");
    assert.ok(sperre > ablauf.indexOf("container fertig 2026-10-04T14:55:00.000Z"));

    const gespeichert = hosting.jsonLesen(`plaene/${DATUM}.json`);
    const b3 = gespeichert.beitraege.find((e) => e.slot === "b3");
    assert.equal(b3.status, "veroeffentlicht");
    assert.equal(b3.zeit, "17:00");
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test("Ein Termin mehr als 15 Minuten entfernt wird noch nicht angefasst", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "vorproduktion-zu-frueh-"));
  try {
    const stateDir = path.join(dir, "state");
    fs.mkdirSync(path.join(dir, "vorproduktion"), { recursive: true });
    fs.mkdirSync(path.join(stateDir, "plaene"), { recursive: true });
    fs.writeFileSync(path.join(dir, "vorproduktion", `${DATUM}.json`), JSON.stringify(dashboardTag()));
    fs.writeFileSync(path.join(stateDir, "plaene", `${DATUM}.json`), JSON.stringify(botPlan()));
    const protokoll = [];
    const ergebnis = await vorproduktionLiveAusfuehren({
      hosting: {
        dir,
        stateDir,
        jsonLesen: (name) => JSON.parse(fs.readFileSync(path.join(stateDir, name), "utf8")),
        jsonSchreiben: () => {},
        commit: () => {},
        push: async () => {},
      },
      datum: DATUM,
      log: (z) => protokoll.push(z),
      jetzt: () => Date.parse("2026-10-04T14:40:00Z"),
      instagram: { pruefen: async () => { throw new Error("darf nicht aufgerufen werden"); } },
    });
    assert.equal(ergebnis.veroeffentlicht, 0);
    assert.match(protokoll.join("\n"), /nichts fällig/);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
