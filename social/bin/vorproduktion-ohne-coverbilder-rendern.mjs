#!/usr/bin/env node
/**
 * Rendert die Examenscampus-Vorproduktion ohne kostenpflichtige Provider.
 *
 * Der Renderer ist derselbe wie im Live-Betrieb. Dadurch gelten dieselben
 * Layout-Gates wie beim Schwesterkanal, waehrend Farben und K1/K2/K3-
 * Zuordnung weiterhin aus Examenscampus stammen.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import {
  examenscampusRegelnPruefen,
  providerfreieVorproduktionPruefen,
  coverIconEinsetzen,
} from "../src/vorproduktion.mjs";

providerfreieVorproduktionPruefen();
if (String(process.env.IG_STIMME || "").toLowerCase() !== "piper") {
  throw new Error("Providerfreie Vorproduktion verlangt IG_STIMME=piper.");
}

const { Hosting } = await import("../src/hosting.mjs");
const { beitragRendern, storyRendern, browserBeenden } = await import("../src/render.mjs");
const { reelBauen } = await import("../src/reel.mjs");
const { ICONS } = await import("../src/stile.mjs");
const { ZUORDNUNG } = await import("../src/icons.mjs");

const tage = process.argv.slice(2).filter((x) => /^\d{4}-\d{2}-\d{2}$/.test(x));
if (!tage.length) throw new Error("Mindestens ein Datum YYYY-MM-DD ist erforderlich.");

const hosting = new Hosting({ pushen: process.env.IG_NO_PUSH !== "true" }).vorbereiten();
const temp = fs.mkdtempSync(path.join(os.tmpdir(), "examenscampus-vorproduktion-"));
const manifest = {
  version: 1,
  erzeugtAm: new Date().toISOString(),
  modus: "lokal-ohne-provider-mit-icon-cover",
  layoutQuelle: "herrjurist",
  semantikQuelle: "examenscampus",
  providerKostenUsd: 0,
  textProviderKostenUsd: 0,
  faktencheckProviderKostenUsd: 0,
  bildgenerierungKostenUsd: 0,
  coverbilder: false,
  coverIcons: true,
  tage: [],
};

function quizFrageText(fallbackTitel = "") {
  const basis = String(fallbackTitel || "").replace(/\s+/g, " ").trim().replace(/[.!]+$/, "");
  if (!basis) throw new Error("Quiz braucht eine sichtbare Frage.");
  if (/\?$/.test(basis)) return basis;
  return `Was gilt bei „${basis}“?`;
}

function quizStoriesNormalisieren(tag) {
  for (const p of tag.plan?.stories || []) {
    if (p.art !== "frage") continue;
    const story = tag.inhalte?.[p.slot];
    if (!story) continue;
    /* Backfill alter Reviewtage nur aus dem bereits gespeicherten,
       redaktionell geprüften Storytext ableiten. Niemals rohe Frage- oder
       Antwortoptionen aus dem Themenpool zurückkopieren: Sie können
       Quellenformulierungen enthalten, die bewusst nicht veröffentlicht
       werden dürfen. */
    const frage = quizFrageText(story.frage || story.titel);
    story.frage = frage;
    story.titel = frage;
  }
}

function titelVon(beitrag = {}) {
  return beitrag.kurztitel
    || beitrag.folien?.find((f) => f.art === "titel")?.titel
    || beitrag.szenen?.[0]?.titel
    || "Neuer Beitrag";
}

function teaserFuer(slot, beitrag, beitragSlot) {
  const titelFolie = beitrag.folien?.[0] || beitrag.szenen?.[0] || {};
  const motiv = beitrag.bild ? beitrag : titelFolie;
  const teaserTitel = beitrag.kurztitel || titelFolie.titel || "Neuer Beitrag";
  return {
    slot,
    art: "teaser",
    fach: beitrag.fach || null,
    klausur: beitrag.klausur ?? 0,
    fachLabel: beitrag.fachLabel || "Steuerberaterexamen",
    ueberzeile: "Neuer Beitrag",
    titel: teaserTitel,
    text: titelFolie.titel && titelFolie.titel !== teaserTitel ? titelFolie.titel : "",
    icon: titelFolie.icon || beitrag.szenen?.find((s) => s.icon)?.icon || "paragraf",
    bild: motiv.bild || null,
    bildFrei: motiv.bildFrei !== false,
    bildQuelle: motiv.bildQuelle || null,
    bildBreite: motiv.bildBreite || null,
    bildHoehe: motiv.bildHoehe || null,
    bildTyp: motiv.bildTyp || null,
    bildCharaktere: motiv.bildCharaktere || null,
    pille: "Jetzt im Feed",
    beitragSlot,
    abgeleitet: true,
    freigabeBetreiber: beitrag.freigabeBetreiber === true,
    vorproduktionStatus: beitrag.vorproduktionStatus || "review",
    textProviderKostenUsd: 0,
    faktencheckProviderKostenUsd: 0,
    bildStatus: motiv.bild ? "vorhanden" : "icon-statt-bild",
  };
}

function dateiRelativ(pfad) {
  return path.relative(hosting.dir, pfad).split(path.sep).join("/");
}

function expliziteIconKeysPruefen(wert, pfad = "inhalte") {
  if (!wert || typeof wert !== "object") return;
  if (typeof wert.icon === "string" && wert.icon.trim()) {
    const key = wert.icon.trim();
    if (!(key in ICONS) && !(key in ZUORDNUNG)) {
      throw new Error("Unbekannter Icon-Key vor Renderstart: " + key + " (" + pfad + ".icon)");
    }
  }
  if (Array.isArray(wert.icons)) {
    if (Array.isArray(wert.punkte) && wert.icons.length !== wert.punkte.length) {
      throw new Error("CTA-Icon-Anzahl passt nicht zu CTA-Punkten (" + pfad + ")");
    }
    for (const raw of wert.icons) {
      const key = String(raw || "").trim();
      if (!key || (!(key in ICONS) && !(key in ZUORDNUNG))) {
        throw new Error("Unbekannter CTA-Icon-Key vor Renderstart: " + (key || "<leer>") + " (" + pfad + ".icons)");
      }
    }
  }
  for (const [key, kind] of Object.entries(wert)) {
    if (key === "icon" || key === "icons") continue;
    if (Array.isArray(kind)) {
      kind.forEach((x, i) => expliziteIconKeysPruefen(x, pfad + "." + key + "[" + i + "]"));
    } else if (kind && typeof kind === "object") {
      expliziteIconKeysPruefen(kind, pfad + "." + key);
    }
  }
}

for (const datum of tage) {
  const tagPfad = path.join(hosting.dir, "vorproduktion", datum + ".json");
  if (!fs.existsSync(tagPfad)) throw new Error("Vorproduktion fehlt: " + datum);
  const tag = JSON.parse(fs.readFileSync(tagPfad, "utf8"));
  quizStoriesNormalisieren(tag);
  examenscampusRegelnPruefen(tag);
  expliziteIconKeysPruefen(tag.inhalte, datum + ".inhalte");
}

try {
  for (const datum of tage) {
    const tagPfad = path.join(hosting.dir, "vorproduktion", datum + ".json");
    const tag = JSON.parse(fs.readFileSync(tagPfad, "utf8"));
    const out = path.join(temp, datum);
    fs.mkdirSync(out, { recursive: true });

    const mTag = {
      datum,
      feed: [],
      stories: [],
      wartetLive: [],
    };

    for (const planBeitrag of tag.plan?.beitraege || []) {
      const slot = planBeitrag.slot;
      const beitrag = structuredClone(tag.inhalte?.[slot]);
      if (!beitrag) throw new Error(datum + " " + slot + ": Beitrag fehlt.");

      if (beitrag.rendern === false || planBeitrag.status === "wartet-auf-live-recherche") {
        mTag.wartetLive.push({
          slot,
          format: beitrag.format || planBeitrag.format,
          grund: beitrag.grund || "Live-Inhalt wird nicht vorab erfunden.",
        });
        continue;
      }

      /* Vorhandene Coverbilder bleiben erhalten. Fehlt eines, wird lokal ein
         thematisch passendes Icon eingesetzt – ohne Bild-API oder Netzwerk. */
      const coverIcon = coverIconEinsetzen(beitrag);

      const ziel = path.join(out, slot);
      fs.mkdirSync(ziel, { recursive: true });

      if (Array.isArray(beitrag.folien)) {
        const titel = beitrag.folien.find((f) => f.art === "titel") || beitrag.folien[0];
        const dateien = await beitragRendern(beitrag, ziel, { variante: 0 });
        mTag.feed.push({
          slot,
          format: beitrag.format,
          titel: titelVon(beitrag),
          klausur: beitrag.klausur,
          fach: beitrag.fach,
          coverBild: Boolean(titel.bild),
          coverIcon: titel.bild ? null : coverIcon,
          dateien: dateien.map((p) => path.basename(p)),
        });
      } else if (Array.isArray(beitrag.szenen)) {
        const reel = await reelBauen(beitrag, ziel, {
          datum,
          layout: "erklaer",
          clip: null,
          framesBehalten: false,
        });
        mTag.feed.push({
          slot,
          format: "reel",
          titel: titelVon(beitrag),
          klausur: beitrag.klausur,
          fach: beitrag.fach,
          coverBild: Boolean(beitrag.bild),
          coverIcon: beitrag.bild ? null : coverIcon,
          dateien: [path.basename(reel.cover), path.basename(reel.video)],
          reel: {
            dauer: reel.dauer,
            stimme: reel.anbieter,
            layout: reel.layout,
            szenen: reel.szenen,
          },
        });
      } else {
        throw new Error(datum + " " + slot + ": unbekanntes Beitragsformat.");
      }
    }

    /* Teaser werden nur fuer bereits renderbare Feed-Slots erzeugt. Eine
       Lösungsskizze am Prüfungsabend wartet bewusst auf echte Berichte; deren
       Teaser wartet mit und wird nicht mit erfundenem Inhalt vorproduziert. */
    for (const p of tag.plan?.stories || []) {
      if (p.art !== "teaser" || !p.beitragSlot || !p.slot) continue;
      const beitrag = tag.inhalte?.[p.beitragSlot];
      if (!beitrag) throw new Error(datum + " " + p.slot + ": Feed-Bezug " + p.beitragSlot + " fehlt.");
      if (beitrag.rendern === false) {
        mTag.wartetLive.push({
          slot: p.slot,
          art: "teaser",
          grund: "Teaser wartet auf Live-Feed-Slot " + p.beitragSlot,
        });
        continue;
      }
      tag.inhalte[p.slot] = teaserFuer(p.slot, beitrag, p.beitragSlot);
    }

    const storyDir = path.join(out, "stories");
    fs.mkdirSync(storyDir, { recursive: true });
    for (const p of tag.plan?.stories || []) {
      if (!p.slot) continue;
      if (p.beitragSlot && tag.inhalte?.[p.beitragSlot]?.rendern === false) continue;

      const story = structuredClone(tag.inhalte?.[p.slot]);
      if (!story) throw new Error(datum + " " + p.slot + ": Story-Inhalt fehlt.");
      story.bild = null;
      story.bildQuelle = null;

      const ziel = path.join(storyDir, p.slot + "-" + story.art + ".jpg");
      await storyRendern(story, ziel, { variante: 0 });
      mTag.stories.push({
        slot: p.slot,
        art: story.art,
        klausur: story.klausur,
        fach: story.fach,
        datei: path.basename(ziel),
      });
    }

    const erwarteteRenderbareStories = (tag.plan?.stories || []).filter((p) =>
      !(p.beitragSlot && tag.inhalte?.[p.beitragSlot]?.rendern === false)
    ).length;
    if (mTag.stories.length !== erwarteteRenderbareStories) {
      throw new Error(
        datum + ": erwartet " + erwarteteRenderbareStories
        + " renderbare Stories, gerendert " + mTag.stories.length
      );
    }

    tag.renderVorschau = {
      status: mTag.wartetLive.length ? "teilweise-fertig" : "fertig",
      erzeugtAm: new Date().toISOString(),
      pfad: "vorproduktion/" + datum + "/fertig",
      providerKostenUsd: 0,
      textProviderKostenUsd: 0,
      faktencheckProviderKostenUsd: 0,
      bildgenerierungKostenUsd: 0,
      coverbilder: false,
      coverIcons: true,
      reelStimme: "piper-offline",
      layoutQuelle: "herrjurist",
      semantikQuelle: "examenscampus",
      freigabeBetreiber: false,
      wartetLive: mTag.wartetLive,
    };
    tag.kostenPolicy = {
      ...(tag.kostenPolicy || {}),
      autorUsd: 0,
      faktencheckUsd: 0,
      sonstigeTextKiUsd: 0,
      bildgenerierungErlaubt: false,
      bildkostenUsd: 0,
      providerKostenUsd: 0,
      bilderStatus: "icon-statt-providerbild",
    };

    const ziel = path.join(hosting.dir, "vorproduktion", datum, "fertig");
    fs.rmSync(ziel, { recursive: true, force: true });
    fs.mkdirSync(path.dirname(ziel), { recursive: true });
    fs.cpSync(out, ziel, { recursive: true });
    fs.writeFileSync(tagPfad, JSON.stringify(tag, null, 2) + "\n");

    mTag.pfad = dateiRelativ(ziel);
    manifest.tage.push(mTag);
  }

  fs.writeFileSync(
    path.join(hosting.dir, "vorproduktion", "render-ohne-coverbilder-manifest.json"),
    JSON.stringify(manifest, null, 2) + "\n"
  );

  hosting.commit("Rendere Examenscampus-Vorproduktion " + tage.join(" + ") + " ohne Provider");
  await hosting.push();
} finally {
  await browserBeenden().catch(() => {});
  fs.rmSync(temp, { recursive: true, force: true });
}

console.log(JSON.stringify({
  ok: true,
  tage,
  providerKostenUsd: 0,
  bildgenerierungKostenUsd: 0,
  coverbilder: false,
  coverIcons: true,
  ziel: tage.map((d) => "vorproduktion/" + d + "/fertig"),
}, null, 2));
