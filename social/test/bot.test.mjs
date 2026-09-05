import { test } from "node:test";
import assert from "node:assert/strict";
import { themenpool, poolStatistik, FAECHER } from "../src/inhalte.mjs";
import { pruefeBeitrag, uebernahmen, gesperrteNamen, korpus } from "../src/pruefung.mjs";
import { tagesplan, vermerken, ledgerLaden } from "../src/planer.mjs";
import { folieHtml, storyHtml, FOLIEN_ARTEN, STORY_ARTEN } from "../src/vorlagen.mjs";
import { kontext } from "../src/render.mjs";
import { STILE } from "../src/stile.mjs";
import { tageBis, minutenVon, hhmm, heuteIso } from "../src/zeit.mjs";
import { tokenVerschluesseln, tokenEntschluesseln } from "../src/instagram.mjs";
import fs from "node:fs";
import { CONFIG } from "../src/config.mjs";

const beispiele = JSON.parse(fs.readFileSync(new URL("../beispiele/inhalte.json", import.meta.url), "utf8"));

test("Themenpool: alle Fächer vertreten, keine Fälle, keine Quellenbezüge", () => {
  const pool = themenpool();
  const st = poolStatistik(pool);
  assert.ok(st.gesamt > 300, `nur ${st.gesamt} Themen`);
  for (const f of Object.keys(FAECHER)) assert.ok(st.jeFach[f] > 0, `Fach ${f} fehlt`);
  for (const t of pool) {
    assert.ok(!/Originalfall|Hausaufgabe|Seite \d/i.test(t.titel), `Quellenbezug im Titel: ${t.titel}`);
    assert.ok(["hoch", "mittel", "selten"].includes(t.prioritaet));
    assert.equal(t.kern.facts, undefined);
  }
});

test("Prüfung erkennt wörtliche Übernahmen aus den Webseitendaten", () => {
  const k = korpus();
  const original = "Ein Wirtschaftsgut darf nur bei demjenigen bilanziert werden, dem es steuerlich zugerechnet wird.";
  assert.ok(uebernahmen(original, k).length > 0, "Originalsatz müsste erkannt werden");
  const eigen = "Bilanzieren darf nur, wem das Wirtschaftsgut steuerlich zugerechnet ist – zivilrechtliches Eigentum ist nur der Startpunkt.";
  assert.equal(uebernahmen(eigen, k).length, 0);
});

test("Prüfung sperrt Fallnamen und lässt erfundene Namen zu", () => {
  const k = korpus();
  assert.ok(k.namen.length > 10);
  assert.ok(gesperrteNamen(`Die ${k.namen[0]} kauft eine Maschine.`, k).length > 0);
  assert.equal(gesperrteNamen("Die Nordlicht GmbH kauft eine Maschine.", k).length, 0);
});

test("Beispielbeiträge bestehen die Prüfung", () => {
  for (const b of beispiele.beitraege) {
    const r = pruefeBeitrag(b);
    assert.ok(r.ok, `${b.slug}: ${r.fehler.join(" | ")}`);
  }
  const r = pruefeBeitrag({ stories: beispiele.stories });
  assert.ok(r.ok, r.fehler.join(" | "));
});

test("Prüfung meldet zu lange Titel und Quellenbezug", () => {
  const r = pruefeBeitrag({ folien: [{ art: "titel", titel: "x".repeat(150) }, { art: "text", titel: "Laut Skript Seite 12" }, { art: "cta" }], caption: "" });
  assert.ok(!r.ok);
  assert.ok(r.fehler.some((f) => /Titel zu lang/.test(f)));
  assert.ok(r.fehler.some((f) => /Kursquelle/.test(f)));
});

test("Tagesplan ist deterministisch, ohne Themen-Dopplung, mit Countdown vor dem Examen", () => {
  const pool = themenpool();
  const a = tagesplan("2026-09-14", ledgerLaden(), pool);
  const b = tagesplan("2026-09-14", ledgerLaden(), pool);
  assert.deepEqual(a.beitraege.map((x) => x.thema?.id), b.beitraege.map((x) => x.thema?.id));
  assert.equal(a.beitraege.length, 3);
  assert.ok(a.stories.length >= 8 && a.stories.length <= 10, `Stories: ${a.stories.length}`);
  const ids = [...a.beitraege, ...a.stories].map((x) => x.thema?.id).filter(Boolean);
  const antwortenAbgezogen = ids.length - a.stories.filter((s) => s.art === "antwort").length;
  assert.equal(new Set(ids).size, antwortenAbgezogen, "Themen doppelt");
  assert.ok(a.stories.some((s) => s.art === "countdown"));
  const fi = a.stories.findIndex((s) => s.art === "frage");
  assert.equal(a.stories[fi + 1].art, "antwort");
  assert.equal(a.stories[fi + 1].zeit, a.stories[fi].zeit);
  const so = tagesplan("2026-09-13", ledgerLaden(), pool);
  assert.equal(so.beitraege.length, 2);
  assert.equal(so.beitraege[0].format, "wochenrueckblick");
});

test("Ledger sperrt Themen für die Wiederholfrist", () => {
  const pool = themenpool();
  const erst = tagesplan("2026-09-15", ledgerLaden(), pool);
  const ledger = ledgerLaden();
  for (const b of erst.beitraege) if (b.thema) vermerken(ledger, { datum: "2026-09-15", art: "beitrag", thema: b.thema.id, fach: b.thema.fach, titel: b.thema.titel });
  const zweit = tagesplan("2026-09-16", ledger, pool);
  const alt = new Set(erst.beitraege.map((b) => b.thema?.id));
  for (const b of zweit.beitraege) if (b.thema) assert.ok(!alt.has(b.thema.id), `Thema ${b.thema.id} zu früh wiederholt`);
});

test("Kanzlei-Stil wechselt zwischen Schwarz und Weiß", async () => {
  const { stilFuer } = await import("../src/stile.mjs");
  assert.equal(stilFuer("kanzlei", 0, true), "kanzlei");
  assert.equal(stilFuer("kanzlei", 1, true), "kanzlei-hell");
  assert.equal(stilFuer("kanzlei", 1, false), "kanzlei");
  assert.equal(stilFuer("campus", 1, true), "campus");
  assert.equal(kontext({ stil: "kanzlei", variante: 3 }).stil.id, "kanzlei-hell");
});

test("Keine Folie nennt Website, Repository oder Markennamen", () => {
  CONFIG.marke.handle = ""; CONFIG.marke.website = "";
  for (const stilName of Object.keys(STILE)) {
    const ctx = kontext({ stil: stilName, fach: "ao" });
    const alle = [...beispiele.beitraege.flatMap((b) => b.folien.map((f, i) => folieHtml(f, ctx, i + 1, b.folien.length))), ...beispiele.stories.map((s) => storyHtml(s, ctx))].join("\n");
    const sichtbar = alle.replace(/<style>[\s\S]*?<\/style>/g, "").replace(/<svg[\s\S]*?<\/svg>/g, "");
    assert.ok(!/github|examenscampus|ccan|website|link in bio/i.test(sichtbar), `${stilName}: ${sichtbar.match(/.{30}(github|examenscampus|ccan|website|link in bio).{30}/i)?.[0]}`);
  }
  for (const b of beispiele.beitraege) assert.ok(!/github|examenscampus|link in bio|website/i.test(b.caption), b.slug);
});

test("Interaktion: nur fremde, neue, unbeantwortete Kommentare werden ausgewählt", async () => {
  const { offeneKommentare } = await import("../src/interaktion.mjs");
  const jetzt = new Date().toISOString();
  const alt = new Date(Date.now() - 30 * 86400000).toISOString();
  const medien = [{ id: "m1", caption: "Teilwert?\nmehr", comments: { data: [
    { id: "c1", text: "Super erklärt, danke!", username: "lea", timestamp: jetzt, replies: { data: [] } },
    { id: "c2", text: "Gilt das auch bei Umlaufvermögen?", username: "tom", timestamp: jetzt, replies: { data: [{ id: "r1", text: "Ja", username: "meinkanal" }] } },
    { id: "c3", text: "Danke fürs Lesen", username: "meinkanal", timestamp: jetzt, replies: { data: [] } },
    { id: "c4", text: "🔥🔥", username: "bot", timestamp: jetzt, replies: { data: [] } },
    { id: "c5", text: "Frage von damals", username: "alt", timestamp: alt, replies: { data: [] } },
    { id: "c6", text: "Schon beantwortet", username: "x", timestamp: jetzt, replies: { data: [] } },
  ] } }];
  const offen = offeneKommentare(medien, "MeinKanal", { interaktionen: [{ kommentarId: "c6" }] });
  assert.deepEqual(offen.map((k) => k.id), ["c1"]);
  assert.equal(offen[0].beitrag, "Teilwert?");
});

test("Vorlagen rendern jede Folien- und Story-Art in jedem Stil ohne leere Felder", () => {
  for (const stilName of Object.keys(STILE)) {
    const ctx = kontext({ stil: stilName, fach: "ust" });
    for (const b of beispiele.beitraege) b.folien.forEach((f, i) => {
      const html = folieHtml(f, ctx, i + 1, b.folien.length);
      assert.ok(html.includes("<h1") || html.includes("<h2") || f.art === "cta");
      assert.ok(!/undefined|\[object Object\]/.test(html), `${stilName}/${f.art}: ${html.match(/.{40}undefined.{40}/)?.[0]}`);
    });
    for (const s of beispiele.stories) {
      const html = storyHtml(s, ctx);
      assert.ok(!/undefined|\[object Object\]/.test(html), `${stilName}/${s.art}`);
    }
  }
  assert.ok(FOLIEN_ARTEN.includes("vergleich") && STORY_ARTEN.includes("countdown"));
});

test("Zeit-Helfer", () => {
  assert.equal(tageBis("2026-10-06", new Date("2026-09-04T10:00:00Z")), 32);
  assert.equal(hhmm(minutenVon("07:30") + 45), "08:15");
  assert.match(heuteIso(new Date("2026-09-04T23:30:00Z")), /^2026-09-05$/);
});

test("Token-Tresor verschlüsselt und entschlüsselt", () => {
  CONFIG.instagram.tokenSchluessel = "test-schluessel";
  const enc = tokenVerschluesseln({ token: "abc", ablauf: "2026-12-01" });
  assert.deepEqual(tokenEntschluesseln(enc), { token: "abc", ablauf: "2026-12-01" });
  assert.ok(!enc.includes("abc"));
});

test("Reel: Zeitplan ohne Stimme, Frames-Seite mit Untertiteln, Format nur mit Stimme im Plan", async () => {
  const { zeitplanErstellen } = await import("../src/reel.mjs");
  const reel = JSON.parse(fs.readFileSync(new URL("../beispiele/reel.json", import.meta.url), "utf8"));
  process.env.IG_STIMME = "aus";
  const plan = await zeitplanErstellen(reel, "/tmp/ig-test-audio");
  assert.equal(plan.szenen.length, reel.szenen.length);
  assert.ok(plan.gesamt > 30 && plan.gesamt <= CONFIG.reel.maxSekunden, `Dauer ${plan.gesamt}`);
  const { saetze, woerterVerteilen } = await import("../src/stimme.mjs");
  assert.deepEqual(saetze("Erstens: Gibt es eine Verpflichtung? Ja. Und zwar nach außen."), ["Erstens: Gibt es eine Verpflichtung?", "Ja.", "Und zwar nach außen."]);
  const w = woerterVerteilen("Rückstellung ja oder nein", 4, 10);
  assert.equal(w.length, 4); assert.equal(w[0].von, 10); assert.ok(Math.abs(w.at(-1).bis - 14) < 1e-9);
  for (let i = 1; i < plan.szenen.length; i++) assert.ok(plan.szenen[i].start > plan.szenen[i - 1].start);
  const woerter = plan.szenen.flatMap((s) => s.woerter);
  assert.ok(woerter.every((w) => w.bis > w.von));
  assert.ok(!/github|examenscampus|website/i.test(JSON.stringify(reel)));
  const { tagesplan } = await import("../src/planer.mjs");
  CONFIG.reel.aktiv = false;
  assert.ok(!tagesplan("2026-09-08", ledgerLaden(), themenpool()).beitraege.some((b) => b.format === "reel"));
  CONFIG.reel.aktiv = true;
  const mitReel = tagesplan("2026-09-08", ledgerLaden(), themenpool());
  assert.equal(mitReel.beitraege.at(-1).format, "reel");
  assert.ok(mitReel.beitraege.at(-1).thema);
  CONFIG.reel.aktiv = false;
});

test("Saisonkalender: Countdown, Prüfungstage, Anlass im Planer", async () => {
  const { anlassFuer, phase } = await import("../src/kalender.mjs");
  assert.equal(anlassFuer("2026-10-06").art, "pruefungstag");
  assert.equal(anlassFuer("2026-10-05").titel, "1 Tag bis zum Examen");
  assert.equal(anlassFuer("2026-09-06").titel, "30 Tage bis zum Examen");
  assert.equal(anlassFuer("2026-04-30").art, "frist");
  assert.equal(anlassFuer("2026-09-10"), null);
  assert.match(phase("2026-09-10"), /heiße Phase/);
  const plan = tagesplan("2026-10-06", ledgerLaden(), themenpool());
  assert.equal(plan.beitraege[0].format, "anlass");
  assert.ok(plan.beitraege[0].anlass?.kontext);
});

test("Lernschleife: Gewichte, Hook-Typen, beste Uhrzeiten, Plan folgt der Strategie", async () => {
  const { strategieAbleiten, hookTyp, punkte } = await import("../src/insights.mjs");
  const ledger = { veroeffentlicht: [] };
  const f = ["pruefungsfrage", "fehlerfalle", "schema"];
  for (let i = 0; i < 12; i++) ledger.veroeffentlicht.push({ art: "beitrag", format: f[i % 3], fach: i % 2 ? "ust" : "bilanz", hookTyp: i % 3 === 1 ? "fehler" : "frage", insights: { reach: 1000, saved: f[i % 3] === "fehlerfalle" ? 40 : 5, shares: 2, likes: 30, comments: 3 } });
  const s = strategieAbleiten(ledger, { follower: 120, reichweite7: 3000, onlineStunden: Object.fromEntries(Array.from({ length: 24 }, (_, h) => [h, h === 6 || h === 11 || h === 17 ? 90 : 10])) });
  assert.ok(s.formatGewicht.fehlerfalle > s.formatGewicht.schema);
  assert.ok(s.hookGewicht.fehler > s.hookGewicht.frage);
  assert.equal(s.besteStunden.length, 3);
  assert.equal(hookTyp("Der Fehler, der 5 Punkte kostet"), "fehler");
  assert.ok(punkte({ saved: 1 }) > punkte({ likes: 1 }));
  const plan = tagesplan("2026-09-09", ledgerLaden(), themenpool(), { ...s, formatGewicht: { fehlerfalle: 1.6, vergleich: 0.6 } });
  assert.ok(plan.beitraege.some((b) => b.format === "fehlerfalle"));
  assert.ok(!plan.beitraege.some((b) => b.format === "vergleich"));
  assert.deepEqual(plan.beitraege.map((b) => b.zeit), s.besteStunden);
});

test("Wochenbericht und Schlüsselwort-Auswahl", async () => {
  const { berichtErstellen } = await import("../src/bericht.mjs");
  const { schluesselwortKommentare } = await import("../src/nachrichten.mjs");
  const ledger = { veroeffentlicht: [{ art: "beitrag", datum: "2026-09-05", format: "spickzettel", fach: "bilanz", titel: "Rückstellung", medienId: "m1", insights: { reach: 500, saved: 20, shares: 4, likes: 50, comments: 5 } }], interaktionen: [{ datum: "2026-09-05" }], nachrichten: [] };
  const text = berichtErstellen({ ledger, strategie: { reichweite7: 900, formatGewicht: {} }, follower: [{ datum: "2026-08-30", follower: 100 }, { datum: "2026-09-06", follower: 130 }], kosten: { usd: 2.5, aufrufe: 30, cacheAnteil: 0.7 }, datum: "2026-09-07" });
  assert.match(text, /Follower: 130 \(\+30 in 7 Tagen\)/);
  assert.match(text, /Rückstellung — spickzettel/);
  const jetzt = new Date().toISOString();
  const medien = [{ id: "m1", comments: { data: [{ id: "c1", text: "SCHEMA bitte!", username: "lea", timestamp: jetzt }, { id: "c2", text: "toll", username: "tom", timestamp: jetzt }, { id: "c3", text: "schema", username: "meinkanal", timestamp: jetzt }] } }, { id: "m2", comments: { data: [{ id: "c4", text: "SCHEMA", username: "x", timestamp: jetzt }] } }];
  const offen = schluesselwortKommentare(medien, "meinkanal", ledger, new Map([["m1", { bildUrl: "u", titel: "Karte" }]]));
  assert.deepEqual(offen.map((o) => o.kommentarId), ["c1"]);
});

test("Spickzettel-Folie und Hook-Wahl", async () => {
  const ctx = kontext({ stil: "kanzlei", fach: "bilanz" });
  const html = folieHtml({ art: "karte", titel: "Rückstellung in 6 Schritten", schritte: [{ titel: "Außenverpflichtung", text: "§ 249 Abs. 1 HGB" }, { titel: "Verursachung vor Stichtag", text: "R 5.7 EStR" }] }, ctx, 2, 5);
  assert.ok(html.includes('class="schritte karte"') && html.includes("Außenverpflichtung"));
  assert.ok(FOLIEN_ARTEN.includes("karte"));
});

test("Schwarz/Weiß-Wechsel: Ledger ohne Trockenlauf-Einträge, Helligkeit aus Bild", async () => {
  const { naechsteVariante } = await import("../src/planer.mjs");
  const { varianteAusHelligkeit, helligkeit, varianteErmitteln } = await import("../src/wechsel.mjs");
  const ledger = { veroeffentlicht: [
    { art: "beitrag", medienId: "1", variante: 0 },
    { art: "beitrag", medienId: "trocken", variante: 1 },
    { art: "story", medienId: "2", variante: 0 },
  ] };
  assert.equal(naechsteVariante(ledger), 1, "Trockenlauf-Einträge zählen nicht");
  assert.equal(naechsteVariante({ veroeffentlicht: [] }), 0);
  assert.equal(varianteAusHelligkeit(236), 1);
  assert.equal(varianteAusHelligkeit(20), 0);
  /* Ohne Instagram-Zugriff gilt das Ledger. */
  assert.equal(await varianteErmitteln({ ig: { letzterBeitrag: async () => { throw new Error("offline"); } }, ledger }), 1);
  assert.equal(await varianteErmitteln({ ig: null, ledger, trocken: true }), 1);
  const { spawnSync } = await import("node:child_process");
  const { ffmpegPfad } = await import("../src/stimme.mjs");
  const os = await import("node:os");
  const path = await import("node:path");
  if (spawnSync(ffmpegPfad(), ["-version"]).status !== 0) return;
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "wechsel-"));
  for (const [farbe, erwartet] of [["white", 1], ["black", 0]]) {
    const datei = path.join(dir, `${farbe}.jpg`);
    spawnSync(ffmpegPfad(), ["-hide_banner", "-loglevel", "error", "-f", "lavfi", "-i", `color=${farbe}:s=64x64`, "-frames:v", "1", "-y", datei]);
    assert.equal(varianteAusHelligkeit(helligkeit(datei)), erwartet, farbe);
  }
  fs.rmSync(dir, { recursive: true, force: true });
});
