#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

import { Hosting } from "../src/hosting.mjs";
import {
  browserBeenden,
  coverRendern,
  htmlZuJpeg,
  kontext,
  storyRendern,
} from "../src/render.mjs";
import { coverDaten } from "../src/reel.mjs";
import { teaserAusBeitrag } from "../src/autor.mjs";
import { folieHtml, MASSE } from "../src/vorlagen.mjs";
import { fachInfo } from "../src/inhalte.mjs";
import {
  examenscampusRegelnPruefen,
  providerfreieVorproduktionPruefen,
} from "../src/vorproduktion.mjs";

providerfreieVorproduktionPruefen();

const tage = process.argv.slice(2).filter((x) => /^\d{4}-\d{2}-\d{2}$/.test(x));
if (!tage.length) throw new Error("Mindestens ein Datum YYYY-MM-DD ist erforderlich.");

const hosting = new Hosting({ pushen: process.env.IG_NO_PUSH !== "true" }).vorbereiten();
const indexPfad = path.join(hosting.dir, "vorproduktion", "index.json");
const index = JSON.parse(fs.readFileSync(indexPfad, "utf8"));
const betroffeneStoryArten = new Set(["frage", "teaser", "norm", "zahl", "fehler"]);

function quizFrageText(wert) {
  const basis = String(wert || "").replace(/\s+/g, " ").trim().replace(/[.!]+$/, "");
  if (!basis) throw new Error("Quiz braucht eine sichtbare Frage.");
  if (/\?$/.test(basis)) return basis;
  return `Was gilt bei „${basis}“?`;
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

function normalisieren(tag) {
  for (const p of tag.plan?.stories || []) {
    const story = tag.inhalte?.[p.slot];
    if (!story) continue;
    if (p.art === "frage" || story.art === "frage") {
      p.art = "frage";
      story.art = "frage";
      const frage = quizFrageText(story.frage || story.titel);
      story.frage = frage;
      story.titel = frage;
    }
    if (p.art === "teaser" && p.beitragSlot) {
      const beitrag = tag.inhalte?.[p.beitragSlot];
      if (!beitrag) throw new Error(tag.datum + " " + p.slot + ": Feed-Bezug fehlt.");
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
  liveMetadatenSetzen(tag);
  examenscampusRegelnPruefen(tag);
}

function beitragsKontext(beitrag) {
  const fachKlausur = fachInfo(beitrag.fach)?.klausur;
  const klausur = beitrag.format === "klausurtechnik" && [1, 2, 3].includes(Number(fachKlausur))
    ? Number(fachKlausur)
    : beitrag.klausur;
  const formatLabel = beitrag.format === "klausurtechnik" && [1, 2, 3].includes(Number(klausur))
    ? "Klausurtechnik"
    : null;
  return kontext({
    fach: beitrag.fach,
    klausur,
    fachLabel: beitrag.fachLabel,
    formatLabel,
    variante: beitrag.variante,
  });
}

async function carouselCtaRendern(datum, slot, beitrag) {
  if (!Array.isArray(beitrag.folien)) return false;
  const i = beitrag.folien.findIndex((f) => f.art === "cta");
  if (i < 0) return false;
  const f = beitrag.folien[i];
  const ziel = path.join(
    hosting.dir,
    "vorproduktion",
    datum,
    "fertig",
    slot,
    `${beitrag.slug || datum + "-" + slot}-${String(i + 1).padStart(2, "0")}.jpg`,
  );
  await htmlZuJpeg(
    folieHtml(f, beitragsKontext(beitrag), i + 1, beitrag.folien.length),
    MASSE.beitrag,
    ziel,
  );
  return true;
}

async function reelCoverRendern(datum, slot, beitrag) {
  if (!Array.isArray(beitrag.szenen)) return false;
  const ziel = path.join(
    hosting.dir,
    "vorproduktion",
    datum,
    "fertig",
    slot,
    `${beitrag.slug || datum + "-" + slot}-cover.jpg`,
  );
  await coverRendern(coverDaten(beitrag, null), ziel, { variante: 0 });
  return true;
}

async function storiesRendern(datum, tag) {
  let n = 0;
  for (const p of tag.plan?.stories || []) {
    const story = tag.inhalte?.[p.slot];
    if (!story || !betroffeneStoryArten.has(story.art)) continue;
    const ziel = path.join(
      hosting.dir,
      "vorproduktion",
      datum,
      "fertig",
      "stories",
      `${p.slot}-${story.art}.jpg`,
    );
    await storyRendern({ ...story, bild: null, bildQuelle: null }, ziel, { variante: 0 });
    n++;
  }
  return n;
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
  });
}

try {
  for (const datum of tage) {
    const tagPfad = path.join(hosting.dir, "vorproduktion", datum + ".json");
    if (!fs.existsSync(tagPfad)) throw new Error("Vorproduktion fehlt: " + datum);
    const tag = JSON.parse(fs.readFileSync(tagPfad, "utf8"));
    normalisieren(tag);

    let ctas = 0;
    let covers = 0;
    for (const p of tag.plan?.beitraege || []) {
      const beitrag = tag.inhalte?.[p.slot];
      if (!beitrag || beitrag.rendern === false) continue;
      if (await carouselCtaRendern(datum, p.slot, beitrag)) ctas++;
      if (await reelCoverRendern(datum, p.slot, beitrag)) covers++;
    }
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
      statischerLayoutBackfill: true,
    };

    indexAktualisieren(datum, tag, stamp);
    fs.writeFileSync(tagPfad, JSON.stringify(tag, null, 2) + "\n");
    fs.writeFileSync(indexPfad, JSON.stringify(index, null, 2) + "\n");

    hosting.commit(`Dashboard-Backfill ${datum}: ${ctas} CTA · ${covers} Reel-Cover · ${stories} Stories`);
    await hosting.push();
    console.log(`✓ ${datum}: ${ctas} CTA · ${covers} Reel-Cover · ${stories} Stories`);
  }
} finally {
  await browserBeenden().catch(() => {});
}

console.log(JSON.stringify({ ok: true, tage, providerKostenUsd: 0 }, null, 2));
