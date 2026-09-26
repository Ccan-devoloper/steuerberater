#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

import { Hosting } from "../src/hosting.mjs";
import { beitragRendern, browserBeenden, coverRendern, storyRendern } from "../src/render.mjs";
import { coverDaten } from "../src/reel.mjs";
import { teaserAusBeitrag } from "../src/autor.mjs";
import { fachInfo, themenpool } from "../src/inhalte.mjs";
import { pruefeBeitrag } from "../src/pruefung.mjs";
import {
  coverIconEinsetzen,
  examenscampusRegelnPruefen,
  providerfreieVorproduktionPruefen,
} from "../src/vorproduktion.mjs";

providerfreieVorproduktionPruefen();

const tage = process.argv.slice(2).filter((x) => /^\d{4}-\d{2}-\d{2}$/.test(x));
if (!tage.length) throw new Error("Mindestens ein Datum YYYY-MM-DD ist erforderlich.");

const hosting = new Hosting({ pushen: process.env.IG_NO_PUSH !== "true" }).vorbereiten();
const indexPfad = path.join(hosting.dir, "vorproduktion", "index.json");
const index = JSON.parse(fs.readFileSync(indexPfad, "utf8"));
const pool = themenpool();
const byId = new Map(pool.map((t) => [t.id, t]));
const tageDaten = tage.map((datum) => {
  const pfad = path.join(hosting.dir, "vorproduktion", datum + ".json");
  if (!fs.existsSync(pfad)) throw new Error("Vorproduktion fehlt: " + datum);
  return { datum, pfad, tag: JSON.parse(fs.readFileSync(pfad, "utf8")) };
});

function dreiOptionen(thema) {
  const optionen = (thema?.kern?.optionen || []).map((x) => String(x || "").trim()).filter(Boolean);
  const richtig = Number(thema?.kern?.richtig);
  if (!Number.isInteger(richtig) || richtig < 0 || richtig >= optionen.length || optionen.length < 3) return null;
  if (optionen.length === 3) return { optionen, richtig };
  const indices = [richtig, ...optionen.map((_, i) => i).filter((i) => i !== richtig).slice(0, 2)]
    .sort((a, b) => a - b);
  return { optionen: indices.map((i) => optionen[i]), richtig: indices.indexOf(richtig) };
}

function quizTauglich(thema) {
  return thema?.typ === "quiz" && Boolean(dreiOptionen(thema));
}

function quizVorschau(thema) {
  if (!quizTauglich(thema)) return null;
  const quiz = dreiOptionen(thema);
  const frageText = String(thema.kern?.frage || thema.titel || "").trim();
  const korrekt = quiz.optionen[quiz.richtig];
  /* Der Eignungscheck darf nicht die lange Original-Erklärung aus dem
     Lernkorpus zurück in die Social-Prüfung tragen. Frage + A/B/C sind die
     eigentliche Quizsemantik; für die Vorschau genügt eine kurze, neu gebaute
     Auflösung. Bei bereits gespeicherten Quizpaaren bleibt der redaktionell
     formulierte Antworttext später erhalten. */
  const erklaerung = "Richtig ist: " + korrekt + ".";
  const basis = {
    fach: thema.fach,
    klausur: thema.klausur,
    pairId: thema.id,
    optionen: quiz.optionen,
    richtig: quiz.richtig,
  };
  return {
    frage: { ...basis, slot: "q", art: "frage", titel: frageText, frage: frageText },
    antwort: { ...basis, slot: "a", art: "antwort", titel: korrekt, text: erklaerung },
  };
}

function quizVeroeffentlichbar(thema) {
  const v = quizVorschau(thema);
  if (!v) return false;
  return pruefeBeitrag({ stories: [v.frage, v.antwort] }).ok;
}

function quizScore(datum, slot, thema) {
  const prio = { hoch: 3, mittel: 2, selten: 1 };
  const hash = crypto.createHash("sha256").update(datum + ":" + slot + ":" + thema.id).digest().readUInt32BE(0);
  return (prio[thema.prioritaet] || 1) * 10 + hash / 0xffffffff;
}

function liveMetadatenSetzen(tag) {
  tag.freigabeBetreiber = true;
  tag.vorproduktionStatus = "live-freigegeben";
  tag.liveVorrangAktiv = true;
  tag.normalbetriebGesperrt = true;
  tag.liveRegel = {
    ...(tag.liveRegel || {}),
    veroeffentlichen: true,
    freigabeErforderlich: false,
    freigabeQuelle: "Vorproduktionsdatei vorhanden",
  };
  for (const inhalt of Object.values(tag.inhalte || {})) {
    if (!inhalt || typeof inhalt !== "object") continue;
    inhalt.freigabeBetreiber = true;
    inhalt.vorproduktionStatus = "live-freigegeben";
    inhalt.liveVorrangAktiv = true;
  }
}

const verwendet = new Set();
for (const { tag } of tageDaten) {
  for (const b of tag.plan?.beitraege || []) if (b.themaId) verwendet.add(b.themaId);
}
for (const { tag } of tageDaten) {
  for (const p of tag.plan?.stories || []) {
    if (p.art !== "frage") continue;
    const story = tag.inhalte?.[p.slot];
    const id = story?.pairId || p.themaId;
    if (quizVeroeffentlichbar(byId.get(id))) verwendet.add(id);
  }
}

function quizFuer(datum, slot, story, plan) {
  const bisher = byId.get(story?.pairId || plan?.themaId);
  if (quizVeroeffentlichbar(bisher)) return bisher;
  const kandidaten = pool.filter((t) =>
    quizVeroeffentlichbar(t)
    && t.fach === story.fach
    && Number(t.klausur) === Number(story.klausur)
    && !verwendet.has(t.id)
  );
  if (!kandidaten.length) throw new Error(datum + " " + slot + ": kein freies Quiz mit A/B/C für " + story.fach);
  kandidaten.sort((a, b) => quizScore(datum, slot, b) - quizScore(datum, slot, a));
  const thema = kandidaten[0];
  verwendet.add(thema.id);
  return thema;
}

function quizPaarAktualisieren(datum, tag) {
  let paare = 0;
  for (const fragePlan of tag.plan?.stories || []) {
    if (fragePlan.art !== "frage") continue;
    const frage = tag.inhalte?.[fragePlan.slot];
    if (!frage) throw new Error(datum + " " + fragePlan.slot + ": Frage fehlt.");
    const antwortPlan = (tag.plan.stories || []).find((x) =>
      x.art === "antwort"
      && (x.themaId === fragePlan.themaId || tag.inhalte?.[x.slot]?.pairId === frage.pairId)
    );
    if (!antwortPlan) throw new Error(datum + " " + fragePlan.slot + ": Auflösung fehlt.");
    const antwort = tag.inhalte?.[antwortPlan.slot];
    if (!antwort) throw new Error(datum + " " + antwortPlan.slot + ": Antwort-Inhalt fehlt.");

    const thema = quizFuer(datum, fragePlan.slot, frage, fragePlan);
    const quiz = dreiOptionen(thema);
    const korrekt = quiz.optionen[quiz.richtig];
    const frageText = String(thema.kern?.frage || thema.titel || "").trim();
    const gleichesThema = (frage.pairId || fragePlan.themaId) === thema.id;
    const bestehendeErklaerung = gleichesThema ? String(antwort.text || "").trim() : "";
    const sichereErklaerung = "Richtig ist: " + korrekt + ".";

    fragePlan.themaId = thema.id;
    antwortPlan.themaId = thema.id;

    Object.assign(frage, {
      art: "frage",
      pairId: thema.id,
      fach: thema.fach,
      klausur: thema.klausur,
      fachLabel: fachInfo(thema.fach)?.label || frage.fachLabel,
      ueberzeile: "Prüfungsfrage",
      frage: frageText,
      titel: frageText,
      optionen: quiz.optionen,
      richtig: quiz.richtig,
      quellen: [...new Set([...(thema.normen || []), "Themenpool: " + thema.id])],
    });

    Object.assign(antwort, {
      art: "antwort",
      pairId: thema.id,
      fach: thema.fach,
      klausur: thema.klausur,
      fachLabel: fachInfo(thema.fach)?.label || antwort.fachLabel,
      ueberzeile: "Auflösung",
      titel: korrekt,
      optionen: quiz.optionen,
      richtig: quiz.richtig,
      text: bestehendeErklaerung || sichereErklaerung,
      quellen: [...new Set([...(thema.normen || []), "Themenpool: " + thema.id])],
    });
    paare++;
  }
  return paare;
}

function teaserAktualisieren(tag) {
  for (const p of tag.plan?.stories || []) {
    if (p.art !== "teaser" || !p.beitragSlot) continue;
    const beitrag = tag.inhalte?.[p.beitragSlot];
    if (!beitrag || beitrag.rendern === false) continue;
    tag.inhalte[p.slot] = {
      ...teaserAusBeitrag(beitrag, p.slot),
      beitragSlot: p.beitragSlot,
      abgeleitet: true,
      freigabeBetreiber: true,
      vorproduktionStatus: "live-freigegeben",
      liveVorrangAktiv: true,
      textProviderKostenUsd: 0,
      faktencheckProviderKostenUsd: 0,
    };
  }
}

async function feedStatischRendern(datum, tag) {
  let karussells = 0;
  let reelCover = 0;
  for (const p of tag.plan?.beitraege || []) {
    const beitrag = tag.inhalte?.[p.slot];
    if (!beitrag || beitrag.rendern === false) continue;
    coverIconEinsetzen(beitrag);
    const ziel = path.join(hosting.dir, "vorproduktion", datum, "fertig", p.slot);
    fs.mkdirSync(ziel, { recursive: true });
    if (Array.isArray(beitrag.folien)) {
      await beitragRendern(beitrag, ziel, { variante: 0 });
      karussells++;
      continue;
    }
    if (Array.isArray(beitrag.szenen)) {
      if (/Gewinnabführungsvertrag/i.test(String(beitrag.kurztitel || "")) && !beitrag.coverTitel) {
        beitrag.coverTitel = "Organschaft: Ist der Vertrag wirksam?";
      }
      const cover = path.join(ziel, (beitrag.slug || datum + "-" + p.slot) + "-cover.jpg");
      await coverRendern(coverDaten(beitrag, null), cover, { variante: 0 });
      reelCover++;
    }
  }
  return { karussells, reelCover };
}

async function storiesRendern(datum, tag) {
  let stories = 0;
  const dir = path.join(hosting.dir, "vorproduktion", datum, "fertig", "stories");
  fs.mkdirSync(dir, { recursive: true });
  for (const p of tag.plan?.stories || []) {
    if (!p.slot) continue;
    if (p.beitragSlot && tag.inhalte?.[p.beitragSlot]?.rendern === false) continue;
    const story = tag.inhalte?.[p.slot];
    if (!story) throw new Error(datum + " " + p.slot + ": Story fehlt.");
    const ziel = path.join(dir, p.slot + "-" + story.art + ".jpg");
    await storyRendern({ ...story, bild: null, bildQuelle: null }, ziel, { variante: 0 });
    stories++;
  }
  return stories;
}

function indexAktualisieren(datum, tag, stamp) {
  index.liveVorrangAb = "2026-09-26";
  index.liveVorrangRegel = "Vorproduktionsdatei vorhanden = Normalbetrieb gesperrt; Fallback nur ohne Tagesdatei";
  const meta = (index.tage || []).find((x) => x && x.datum === datum);
  if (!meta) return;
  Object.assign(meta, {
    status: "vorproduziert",
    freigabeBetreiber: true,
    vorproduktionStatus: "live-freigegeben",
    liveVorrangAktiv: true,
    normalbetriebGesperrt: true,
    renderStatus: "fertig",
    renderErzeugtAm: stamp,
    reviewPfad: "vorproduktion/" + datum + "/fertig",
    providerKostenUsd: 0,
    coverbilder: false,
    coverIcons: true,
    bilderStatus: "icon-statt-providerbild",
    layoutQuelle: "herrjurist",
  });
}

try {
  for (const { datum, pfad, tag } of tageDaten) {
    const quizPaare = quizPaarAktualisieren(datum, tag);
    liveMetadatenSetzen(tag);
    teaserAktualisieren(tag);
    examenscampusRegelnPruefen(tag);

    const feed = await feedStatischRendern(datum, tag);
    const stories = await storiesRendern(datum, tag);
    const stamp = new Date().toISOString();

    tag.renderVorschau = {
      ...(tag.renderVorschau || {}),
      status: "fertig",
      erzeugtAm: stamp,
      providerKostenUsd: 0,
      textProviderKostenUsd: 0,
      faktencheckProviderKostenUsd: 0,
      bildgenerierungKostenUsd: 0,
      coverbilder: false,
      coverIcons: true,
      layoutQuelle: "herrjurist",
      semantikQuelle: "examenscampus",
      freigabeBetreiber: true,
      liveVorrangAktiv: true,
      normalbetriebGesperrt: true,
      herrjuristSpiegelBackfill: true,
      quizPaareMitAuswahl: quizPaare,
    };

    indexAktualisieren(datum, tag, stamp);
    fs.writeFileSync(pfad, JSON.stringify(tag, null, 2) + "\n");
    fs.writeFileSync(indexPfad, JSON.stringify(index, null, 2) + "\n");

    hosting.commit(
      `Herrjurist-Spiegel ${datum}: ${feed.karussells} Karussells · ${feed.reelCover} Reel-Cover · ${stories} Stories · ${quizPaare} Quizpaare`
    );
    await hosting.push();
    console.log(`✓ ${datum}: ${feed.karussells} Karussells · ${stories} Stories · ${quizPaare} Quizpaare`);
  }
} finally {
  await browserBeenden().catch(() => {});
}

console.log(JSON.stringify({ ok: true, tage, providerKostenUsd: 0 }, null, 2));
