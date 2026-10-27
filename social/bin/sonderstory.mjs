#!/usr/bin/env node
/* ==========================================================================
   Sonderstory – eine einzelne, von Hand geschriebene Story veröffentlichen.

   node bin/sonderstory.mjs sonderstories/<datei>.html [--live]

   Ohne --live wird nur gerendert (JPEG neben der HTML-Datei) – nichts geht raus.
   Mit --live: Bild in den Asset-Zweig legen und als Story veröffentlichen.
   Kein Claude-Aufruf, keine Kosten.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { browserStarten, browserBeenden } from "../src/render.mjs";
import { Instagram } from "../src/instagram.mjs";
import { Hosting } from "../src/hosting.mjs";

const quelle = process.argv[2];
const live = process.argv.includes("--live");
if (!quelle || !fs.existsSync(quelle)) { console.error("Aufruf: node bin/sonderstory.mjs sonderstories/<datei>.html [--live]"); process.exit(1); }

const jpeg = quelle.replace(/\.html$/, ".jpg");
const b = await browserStarten();
const page = await b.newPage({ viewport: { width: 1080, height: 1920 } });
await page.goto(pathToFileURL(path.resolve(quelle)).href, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: jpeg, type: "jpeg", quality: 92 });
await page.close();
await browserBeenden();
console.log(`Gerendert: ${jpeg}`);
if (!live) process.exit(0);

const hosting = new Hosting().vorbereiten();
const [url] = await hosting.veroeffentlichen([jpeg], new Date().toISOString().slice(0, 10), `Sonderstory ${path.basename(quelle)}`);
const ig = new Instagram({ trockenlauf: false, tresorDatei: path.join(hosting.stateDir, "token.enc") });
ig.tresorLaden();
const id = await ig.storyPosten({ bildUrl: url });
console.log(`Story veröffentlicht: ${id}`);
