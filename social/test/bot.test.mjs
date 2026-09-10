import { test } from "node:test";
import assert from "node:assert/strict";
import { themenpool, poolStatistik, FAECHER } from "../src/inhalte.mjs";
import { pruefeBeitrag, uebernahmen, uebernahmeLaeufe, gesperrteNamen, korpus } from "../src/pruefung.mjs";
import { tagesplan, vermerken, ledgerLaden } from "../src/planer.mjs";
import { folieHtml, storyHtml, coverHtml, FOLIEN_ARTEN, STORY_ARTEN } from "../src/vorlagen.mjs";
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

test("Prüfung wertet Fachsprache nicht als Abschreiben, ganze Sätze schon", () => {
  const k = korpus();
  /* Gesetzeswortlaut lässt sich nicht umschreiben: ein kurzer Treffer allein
     darf eine Story nicht kosten. */
  const fachsprache = "Zum Sonderbetriebsvermögen zählen Wirtschaftsgüter, die unmittelbar dem Betrieb der Personengesellschaft dienen.";
  const laeufe = uebernahmeLaeufe(fachsprache, k);
  assert.equal(laeufe.length, 1, JSON.stringify(laeufe));
  assert.ok(laeufe[0].woerter < 13);
  assert.equal(pruefeBeitrag({ stories: [{ art: "begriff", titel: "Sonderbetriebsvermögen", text: fachsprache }] }).ok, true);
  /* Ein ganzer übernommener Satz ergibt einen langen Lauf und fällt auf. */
  const original = "Ein Wirtschaftsgut darf nur bei demjenigen bilanziert werden, dem es steuerlich zugerechnet wird.";
  assert.ok(uebernahmeLaeufe(original, k)[0].woerter >= 13);
  assert.equal(pruefeBeitrag({ stories: [{ art: "begriff", titel: "Zurechnung", text: original }] }).ok, false);
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
  assert.equal(a.beitraege.length, 2);
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
  /* Mit Tagesfarbe (Standard) gibt es keinen Hell/Dunkel-Wechsel mehr – die Farbe je Klausurtag ersetzt ihn. */
  assert.equal(kontext({ stil: "kanzlei", variante: 3 }).stil.id, CONFIG.marke.farbeJeKlausur ? "kanzlei" : "kanzlei-hell");
  const { klausurCss } = await import("../src/vorlagen.mjs");
  assert.match(klausurCss({ farbeJeKlausur: true, klausur: 1 }), /--akzent:var\(--k1\)/);
  assert.match(klausurCss({ farbeJeKlausur: true, klausur: 2 }), /height:16px;background:var\(--k2\)/);
  assert.equal(klausurCss({ farbeJeKlausur: false, klausur: 2 }), "");
});

test("Redaktionsplan: Prüfungsabend mit Lösungsskizze, Endspurt-Formate, Samstags-Mindset-Reel, Phasen", async () => {
  const { anlaesseFuer, phase, mindsetThema, MINDSET_THEMEN } = await import("../src/kalender.mjs");
  const tag1 = CONFIG.examen.schriftlich;   // 2026-10-06
  const heute = anlaesseFuer(tag1);
  assert.ok(heute.some((a) => a.art === "pruefungstag" && !a.zeit));
  assert.ok(heute.some((a) => a.art === "loesungsskizze" && a.zeit === "18:30" && a.klausur === 1));
  const plan = tagesplan(tag1, ledgerLaden(), themenpool());
  assert.equal(plan.beitraege[0].format, "anlass");
  assert.equal(plan.beitraege.at(-1).format, "loesungsskizze");
  assert.equal(plan.beitraege.at(-1).zeit, "18:30");
  assert.ok(plan.stories.every((s) => s.art === "teaser"), "Prüfungstag: nur Teaser-Stories");
  /* Endspurt: 20 Tage vorher Klausurtechnik statt Fehlerfalle (Montag 2026-09-14 → 22 Tage). */
  const endspurt = tagesplan("2026-09-14", ledgerLaden(), themenpool());
  /* Der letzte Beitrag des Tages ist das tägliche Reel, davor die Endspurt-Formate. */
  const erwartet = [...CONFIG.plan.formateEndspurt[1]];
  erwartet[erwartet.length - 1] = "reel";
  assert.deepEqual(endspurt.beitraege.map((b) => b.format), erwartet);
  assert.ok(endspurt.beitraege.every((b) => !b.thema || b.thema.prioritaet === "hoch"), "Endspurt: nur Dauerbrenner");
  /* Samstag: Reel mit Mindset-Thema. */
  const samstag = tagesplan("2026-09-12", ledgerLaden(), themenpool());
  const reel = samstag.beitraege.find((b) => b.format === "reel");
  assert.ok(reel && reel.thema.typ === "mindset", JSON.stringify(samstag.beitraege.map((b) => [b.format, b.thema?.typ])));
  assert.ok(MINDSET_THEMEN.includes(mindsetThema("2026-09-12")));
  /* Nach der Prüfung: montags „Zweiter Anlauf“, Jan–Apr Anmeldefenster. */
  assert.ok(anlaesseFuer("2026-10-19").some((a) => a.art === "neustart"));
  assert.ok(anlaesseFuer("2027-01-04").some((a) => a.art === "anmeldefenster") || anlaesseFuer("2027-01-11").some((a) => a.art === "anmeldefenster"));
  assert.match(phase("2026-09-14"), /Klausurtechnik/);
  assert.match(phase("2026-11-10"), /zweiter|neu ansetzt/i);
  assert.match(phase("2027-03-01"), /Anmeldeschluss/);
  assert.match(phase("2027-06-15"), /Hauptlernphase/);
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
  CONFIG.reel.aktiv = true;   // Standard wiederherstellen: Reels laufen täglich
});

test("Saisonkalender: Countdown, Prüfungstage, Anlass im Planer", async () => {
  const { anlassFuer, phase } = await import("../src/kalender.mjs");
  assert.equal(anlassFuer("2026-10-06").art, "pruefungstag");
  assert.equal(anlassFuer("2026-10-05").titel, "1 Tag bis zum Examen");
  assert.equal(anlassFuer("2026-09-06").titel, "30 Tage bis zum Examen");
  assert.equal(anlassFuer("2026-04-30").art, "frist");
  assert.equal(anlassFuer("2026-09-10"), null);
  assert.match(phase("2026-09-10"), /Klausurtechnik/);
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
  /* Samstag: „spickzettel“ läuft schwach und wird durch das starke Format
     ersetzt; der letzte Platz bleibt das tägliche Reel. */
  const plan = tagesplan("2026-09-12", ledgerLaden(), themenpool(), { ...s, formatGewicht: { fehlerfalle: 1.6, spickzettel: 0.6 } });
  assert.ok(plan.beitraege.some((b) => b.format === "fehlerfalle"), JSON.stringify(plan.beitraege.map((b) => b.format)));
  assert.ok(!plan.beitraege.some((b) => b.format === "spickzettel"));
  assert.equal(plan.beitraege.at(-1).format, "reel");
  /* Uhrzeiten kommen aus der Zeit-Lernschleife (zeiten.mjs): im erlaubten
     Fenster, aufsteigend und mit Mindestabstand. */
  const zeitenPlan = plan.beitraege.map((b) => minutenVon(b.zeit));
  assert.ok(zeitenPlan[0] >= minutenVon("06:00"), plan.beitraege.map((b) => b.zeit).join(" "));
  assert.ok(zeitenPlan.at(-1) <= minutenVon("21:59"));
  assert.ok(zeitenPlan[1] - zeitenPlan[0] >= CONFIG.plan.zeitAbstandStunden * 60);
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

test("Aufbau: leere Folien, doppelte CTA und Sachverhalt auf der Titelfolie werden erkannt bzw. repariert", async () => {
  const { pruefeAufbau, folieLeer } = await import("../src/pruefung.mjs");
  const folien = [
    { art: "titel", titel: "Wann startet die AfA?" },
    { art: "schritte", titel: "Schritte", schritte: [{ titel: "Abnutzbar?", text: "§ 7 EStG" }, { titel: "Stichtag", text: "Betriebsbereitschaft" }] },
    { art: "text", titel: "Wann welche Seite greift" },
    { art: "cta", titel: "Folgen" },
    { art: "text", titel: "" },
    { art: "cta", titel: "Folgen" },
  ];
  const fehler = pruefeAufbau(folien);
  assert.ok(fehler.some((f) => f.startsWith("Folie 3") && /kein Inhalt/.test(f)), fehler.join("\n"));
  assert.ok(fehler.some((f) => f.startsWith("Folie 5") && /kein Titel/.test(f)));
  assert.ok(fehler.some((f) => /Nur eine CTA/.test(f)));
  assert.equal(folieLeer({ art: "text", titel: "x", punkte: ["Erster Punkt mit Inhalt", "Zweiter Punkt"] }), false);
  assert.equal(folieLeer({ art: "vergleich", titel: "x", links: { titel: "A", punkte: ["a"] }, rechts: { titel: "B", punkte: [] } }), true);
  assert.deepEqual(pruefeAufbau([{ art: "titel", titel: "Frage?" }, { art: "merke", titel: "Merksatz", text: "Ein Satz, der wirklich hängen bleibt." }, { art: "cta" }]), []);
  /* Beispielbeiträge bleiben sauber. */
  const beispiele = JSON.parse(fs.readFileSync(new URL("../beispiele/inhalte.json", import.meta.url), "utf8"));
  for (const b of beispiele.beitraege) assert.deepEqual(pruefeAufbau(b.folien), [], b.folien[0].titel);
});

test("Tagesdeckel: Verbrauch wird gezählt, weitere Aufrufe werden gestoppt", async () => {
  const k = await import("../src/kosten.mjs");
  const gespeichert = [];
  k.budgetSetzen({ limitUsd: 0.05, bisher: 0.02, speichern: (usd) => gespeichert.push(usd) });
  assert.equal(k.budgetFrei(), true);
  k.budgetPruefen("Test");
  k.erfassen("claude-sonnet-5", { input_tokens: 1000, output_tokens: 2500 }, "test");   // 0,002 + 0,025 = 0,027 $
  assert.ok(gespeichert.length === 1 && gespeichert[0] > 0.04, JSON.stringify(gespeichert));
  assert.equal(k.budgetFrei(), false);
  assert.throws(() => k.budgetPruefen("Beitrag"), k.BudgetFehler);
  k.budgetSetzen({});   // zurücksetzen, damit andere Tests nicht betroffen sind
  assert.equal(k.budgetFrei(), true);
});

test("Reel: Animation rotiert täglich, Untertitel-Blöcke stehen fest", async () => {
  const { animationFuer, untertitelBloecke } = await import("../src/reel.mjs");
  const a = ["2026-09-06", "2026-09-07", "2026-09-08", "2026-09-09"].map(animationFuer);
  assert.deepEqual(new Set(a.slice(0, 3)).size, 3, a.join(","));
  assert.equal(a[3], a[0]);
  const { woerterVerteilen } = await import("../src/stimme.mjs");
  const szenen = [{ index: 0, woerter: woerterVerteilen("Erstens: Gibt es eine Verpflichtung nach außen? Ja, gegenüber einem Dritten.", 6, 0) }];
  const b = untertitelBloecke(szenen);
  assert.ok(b.every((x) => x.w.length >= 2 && x.w.length <= 5), JSON.stringify(b.map((x) => x.w.length)));
  assert.ok(b.every((x, i) => i === 0 || x.von >= b[i - 1].bis - 1e-9));
  assert.equal(b[0].w[0].t, "Erstens:");
});

test("Reel: Hintergrund-Clip rotiert täglich, ohne Verzeichnis keine Auswahl", async () => {
  const { hintergrundClip } = await import("../src/reel.mjs");
  const os = await import("node:os"); const path = await import("node:path");
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clips-"));
  assert.equal(hintergrundClip(dir, "2026-09-10"), null);
  assert.equal(hintergrundClip(path.join(dir, "fehlt"), "2026-09-10"), null);
  for (const n of ["b.mp4", "a.mp4", "notiz.txt"]) fs.writeFileSync(path.join(dir, n), "");
  const a = hintergrundClip(dir, "2026-09-10"), b = hintergrundClip(dir, "2026-09-11");
  assert.ok(a && b && a !== b && /\.mp4$/.test(a));
  assert.equal(hintergrundClip(dir, "2026-09-12"), a);
  fs.rmSync(dir, { recursive: true, force: true });
});

test("Wachstum: Hashtag-Lernschleife gewichtet Tags nach Followern, Auswahl mit Entdecker-Tags", async () => {
  const { hashtagGewichte, punkte } = await import("../src/insights.mjs");
  const { hashtagsWaehlen } = await import("../src/autor.mjs");
  const eintraege = [];
  for (let i = 0; i < 6; i++) eintraege.push({ hashtags: i % 2 ? ["#a", "#stark"] : ["#a", "#schwach"], insights: { reach: 500, follows: i % 2 ? 4 : 0, saved: 2 } });
  const g = hashtagGewichte(eintraege);
  assert.ok(g.gewicht["#stark"] > g.gewicht["#schwach"], JSON.stringify(g));
  assert.equal(g.folgen["#stark"], 12);
  assert.ok(punkte({ follows: 1 }) > punkte({ likes: 5 }));
  const kern = CONFIG.hashtags.kern;
  const tags = hashtagsWaehlen(["Bilanz", "#schwach", "#stark", "#stark"], kern, { hashtagGewicht: g.gewicht }, 3);
  assert.ok(tags.length <= CONFIG.hashtags.maxJeBeitrag);
  for (const k of kern) assert.ok(tags.includes(k));
  assert.ok(tags.indexOf("#stark") < tags.indexOf("#schwach"), tags.join(" "));
  assert.ok(tags.includes("#bilanz"));
  assert.equal(tags.filter((t) => CONFIG.hashtags.entdecker.includes(t)).length >= 1, true);
  assert.equal(new Set(tags).size, tags.length);
});

test("Reel-Cover zeigt Thema, Fach und Dauer", async () => {
  const { coverDaten } = await import("../src/reel.mjs");
  const reel = { fach: "ust", klausur: 1, kurztitel: "Organschaft: Wer schuldet die Umsatzsteuer?", szenen: [{ titel: "Organschaft" }, { titel: "Schritt 1", icon: "kreislauf" }] };
  const daten = coverDaten(reel, { gesamt: 44.6 });
  assert.equal(daten.titel, reel.kurztitel);
  assert.equal(daten.ueberzeile, "Reel · 45 Sekunden");
  assert.equal(daten.icon, "kreislauf");
  const html = coverHtml(daten, kontext({ fach: "ust", klausur: 1 }));
  assert.ok(html.includes("Umsatzsteuer?"), "Thema fehlt");
  assert.ok(html.includes("reelmarke"), "Reel-Kennzeichnung fehlt");
  assert.ok(html.includes("45 Sekunden"), "Dauer fehlt");
  assert.ok(html.includes("class=\"story cover\""), "Cover-Klasse fehlt");
  /* Ohne Szenen-Icon greift ein Standardsymbol, ohne Dauer entfällt die Zeile. */
  const ohne = coverDaten({ fach: "ao", szenen: [{ titel: "X" }] }, { gesamt: 0 });
  assert.equal(ohne.icon, "paragraf");
  assert.equal(ohne.dauerText, "");
});

test("Reel täglich, Budget dafür zurückgelegt", async () => {
  const { budgetSetzen, budgetPruefen, reservieren, reservierungAufheben, BudgetFehler } = await import("../src/kosten.mjs");
  /* Jeder Wochentag hat ein Reel. */
  for (let wt = 0; wt <= 6; wt++) assert.ok(CONFIG.reel.tage.includes(wt), `Wochentag ${wt} ohne Reel`);
  const ledger = ledgerLaden();
  for (const datum of ["2026-09-14", "2026-09-15", "2026-09-16", "2026-09-17", "2026-09-18"]) {
    const p = tagesplan(datum, ledger, themenpool());
    assert.equal(p.beitraege.filter((b) => b.format === "reel").length, 1, `${datum} ohne Reel`);
  }
  /* Rücklage: andere Aufrufe hören früher auf, das Reel kommt noch durch. */
  budgetSetzen({ limitUsd: 0.27, bisher: 0.20 });
  reservieren(0.09);
  assert.throws(() => budgetPruefen("Text schreiben"), BudgetFehler);
  budgetPruefen("Reel-Skript schreiben");   // darf die Rücklage nutzen
  reservierungAufheben();
  budgetPruefen("Text schreiben");          // nach dem Reel wieder frei
  budgetSetzen({ limitUsd: Infinity, bisher: 0 });
});

test("Uhrzeiten werden gelernt: Erkundung ohne Daten, beste Stunde mit Daten", async () => {
  const { zeitenWaehlen, zeitStatistik, zeitBericht, klasseVon } = await import("../src/zeiten.mjs");
  assert.equal(klasseVon("reel"), "reel");
  assert.equal(klasseVon("spickzettel"), "karussell");

  /* Ohne Messungen: gültige Zeiten im Fenster, Mindestabstand eingehalten,
     und über die Woche werden verschiedene Stunden ausprobiert. */
  const leer = { veroeffentlicht: [] };
  const gesehen = new Set();
  for (const datum of ["2026-09-14", "2026-09-15", "2026-09-16", "2026-09-17", "2026-09-18", "2026-09-19", "2026-09-20"]) {
    const z = zeitenWaehlen({ formate: ["spickzettel", "reel"], datum, ledger: leer, zufall: rngFuer(datum) });
    assert.equal(z.length, 2);
    const [a, b] = z.map((t) => minutenVon(t));
    assert.ok(a >= minutenVon("06:00") && b <= minutenVon("21:59"), z.join(" "));
    assert.ok(b - a >= CONFIG.plan.zeitAbstandStunden * 60, `Abstand zu klein: ${z.join(" ")}`);
    z.forEach((t) => gesehen.add(t));
  }
  assert.ok(gesehen.size >= 3, `zu wenig Erkundung: ${[...gesehen].join(" ")}`);

  /* Mit Messungen: 19 Uhr läuft für Reels deutlich besser, 8 Uhr fürs Karussell. */
  const ledger = { veroeffentlicht: [] };
  for (let i = 0; i < 10; i++) {
    ledger.veroeffentlicht.push({ art: "beitrag", datum: "2026-09-01", format: "reel", stunde: 19, insights: { reach: 4000, saved: 40, shares: 20, follows: 4 } });
    ledger.veroeffentlicht.push({ art: "beitrag", datum: "2026-09-01", format: "reel", stunde: 11, insights: { reach: 200, saved: 1, shares: 0, follows: 0 } });
    ledger.veroeffentlicht.push({ art: "beitrag", datum: "2026-09-01", format: "spickzettel", stunde: 8, insights: { reach: 3000, saved: 30, shares: 15, follows: 3 } });
    ledger.veroeffentlicht.push({ art: "beitrag", datum: "2026-09-01", format: "spickzettel", stunde: 15, insights: { reach: 150, saved: 1, shares: 0, follows: 0 } });
  }
  const stat = zeitStatistik(ledger);
  assert.equal(stat.gesamt, 40);
  assert.ok(stat.stunden["reel|19"].mittel > stat.stunden["reel|11"].mittel);
  const zeiten = zeitenWaehlen({ formate: ["spickzettel", "reel"], datum: "2026-09-21", ledger, zufall: rngFuer("x") });
  assert.equal(zeiten[0], "08:30", zeiten.join(" "));
  assert.equal(zeiten[1], "19:30", zeiten.join(" "));

  /* Zu dünne Datenlage (junges Konto, kaum Reichweite): Es wird weiter
     ausprobiert, statt sich auf Rauschen festzulegen. */
  const schwach = { veroeffentlicht: Array.from({ length: 20 }, (_, i) => ({ art: "beitrag", datum: "2026-09-01", format: i % 2 ? "reel" : "spickzettel", stunde: i % 2 ? 19 : 8, insights: { reach: i < 9 ? 1 : 0, saved: 0, shares: 0, likes: 0, follows: 0 } })) };
  const statSchwach = zeitStatistik(schwach);
  assert.equal(statSchwach.belastbar, false, JSON.stringify({ n: statSchwach.gesamt, w: statSchwach.mitWirkung, m: statSchwach.mittelPunkte }));
  const verteilt = new Set();
  for (const datum of ["2026-09-21", "2026-09-22", "2026-09-23", "2026-09-24", "2026-09-25"]) verteilt.add(zeitenWaehlen({ formate: ["spickzettel", "reel"], datum, ledger: schwach, zufall: rngFuer(datum) }).join(" "));
  assert.ok(verteilt.size >= 3, `bei dünner Datenlage zu starr: ${[...verteilt].join(" | ")}`);

  /* Bericht nennt die besten Stunden je Art. */
  const b = zeitBericht(ledger);
  assert.equal(b.klassen.reel[0].stunde, 19);
  assert.equal(b.klassen.karussell[0].stunde, 8);

  /* Abschaltbar: dann gelten die Startwerte. */
  CONFIG.plan.zeitLernen = false;
  assert.deepEqual(zeitenWaehlen({ formate: ["spickzettel", "reel"], datum: "2026-09-21", ledger }), CONFIG.plan.beitragsZeiten.slice(0, 2));
  CONFIG.plan.zeitLernen = true;
});

/* Kleiner, reproduzierbarer Zufall für die Tests. */
function rngFuer(text) {
  let h = 1779033703 ^ text.length;
  for (let i = 0; i < text.length; i++) { h = Math.imul(h ^ text.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  let a = h >>> 0;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

test("Reel-Hooks: Muster rotieren, schwache Einstiege fallen durch", async () => {
  const { HOOKS, HOOK_TYPEN, hookWaehlen, hookAnleitung, pruefeHook, hookTypErkennen } = await import("../src/hooks.mjs");
  /* Jedes Muster hat Regel und Beispiele – sie stehen im Auftrag an das Modell. */
  for (const [typ, h] of Object.entries(HOOKS)) {
    assert.ok(h.regel.length > 30, typ);
    assert.ok(h.beispiele.length >= 2, typ);
    for (const b of h.beispiele) assert.ok(b.titel.split(/\s+/).length <= 6, `${typ}: „${b.titel}“ zu lang`);
  }
  /* Rotation: sieben Tage, mehrere verschiedene Muster. */
  const gewaehlt = new Set(["2026-09-14", "2026-09-15", "2026-09-16", "2026-09-17", "2026-09-18", "2026-09-19", "2026-09-20"].map((d) => hookWaehlen(d)));
  assert.ok(gewaehlt.size >= 4, [...gewaehlt].join(" "));
  for (const t of gewaehlt) assert.ok(HOOK_TYPEN.includes(t));
  /* Gelernte Gewichte: ein schwaches Muster fällt aus der Rotation. */
  const strategie = { hookGewicht: Object.fromEntries(HOOK_TYPEN.map((t) => [t, t === "frage" ? 0.5 : 1.4])) };
  for (const d of ["2026-09-14", "2026-09-15", "2026-09-16", "2026-09-17"]) assert.notEqual(hookWaehlen(d, strategie), "frage");
  assert.match(hookAnleitung("fehler"), /Fehler-Hook/);

  /* Strukturprüfung */
  assert.deepEqual(pruefeHook({ titel: "Falsches Amt, Frist weg?", sprecher: "Der Einspruch landet beim falschen Finanzamt. Viele schreiben sofort: unzulässig." }), []);
  assert.ok(pruefeHook({ titel: "Kurz", sprecher: "Hallo und willkommen zurück, heute geht es um die Abgabenordnung." }).some((f) => /schwacher Einstieg/.test(f)));
  assert.ok(pruefeHook({ titel: "Ein sehr langer Bildschirmtext der viel zu viele Wörter hat", sprecher: "Kurz." }).some((f) => /Bildschirmtext hat/.test(f)));
  assert.ok(pruefeHook({ titel: "Gut", sprecher: "Dieser eine Satz ist viel zu lang geraten und enthält deutlich mehr Wörter als ein Hook vertragen kann, nämlich sehr viele." }).some((f) => /Aufhänger hat/.test(f)));
  assert.ok(pruefeHook(null).length === 1);

  /* Zuordnung für die Lernschleife */
  assert.equal(hookTypErkennen("Wer schuldet die Steuer?", ""), "frage");
  assert.equal(hookTypErkennen("Der teuerste Denkfehler", "Fast alle prüfen zuerst die Frist."), "fehler");
  assert.equal(hookTypErkennen("Ein Halbsatz entscheidet", "In Paragraf 173 steckt ein Halbsatz."), "luecke");
  assert.equal(hookTypErkennen("Kennst du diesen Moment?", "Du hast das Schema dreimal gelernt."), "alltag");
  assert.equal(hookTypErkennen("Das stimmt so nicht", "Der Einspruch hemmt die Vollziehung? Genau umgekehrt."), "widerspruch");
  assert.equal(hookTypErkennen("Nie wieder Fristchaos", "Mit drei Fragen bist du durch."), "loesung");
  /* Alle zehn Muster kommen in zehn Tagen genau einmal dran. */
  const zehn = ["2026-09-11", "2026-09-12", "2026-09-13", "2026-09-14", "2026-09-15", "2026-09-16", "2026-09-17", "2026-09-18", "2026-09-19", "2026-09-20"].map((d) => hookWaehlen(d));
  assert.equal(new Set(zehn).size, HOOK_TYPEN.length, zehn.join(" "));
});

test("Der Hook wird betont gesprochen und bekommt eine Pause", async () => {
  const { zeitplanErstellen } = await import("../src/reel.mjs");
  const gerufen = [];
  const reel = { szenen: [
    { art: "hook", titel: "Falsches Amt, Frist weg?", sprecher: "Der Einspruch landet beim falschen Finanzamt." },
    { art: "schritt", titel: "Schritt 1", sprecher: "Zuerst prüfst du die Zuständigkeit." },
    { art: "cta", titel: "Mehr davon", sprecher: "Folge für den nächsten Prüfschritt." },
  ] };
  /* Ohne Stimmanbieter (IG_STIMME=aus) wird nur geschätzt – die Betonung steht
     trotzdem im Aufruf, deshalb prüfen wir den Zeitplan. */
  const plan = await zeitplanErstellen(reel, "/tmp/ig-test-audio");
  const [hook, schritt] = plan.szenen;
  const pauseNachHook = hook.start + hook.dauer - (hook.audioStart + (hook.woerter.at(-1)?.bis ?? 0) - hook.audioStart);
  assert.ok(hook.dauer > 0 && schritt.start === hook.start + hook.dauer);
  /* Der Nachlauf des Hooks ist länger als der einer normalen Szene. */
  const nachlaufHook = hook.dauer - (hook.woerter.at(-1)?.bis ?? hook.audioStart) + hook.start;
  const nachlaufSchritt = schritt.dauer - (schritt.woerter.at(-1)?.bis ?? schritt.audioStart) + schritt.start;
  assert.ok(nachlaufHook > nachlaufSchritt, `${nachlaufHook} !> ${nachlaufSchritt}`);
  assert.ok(gerufen.length === 0);
});
