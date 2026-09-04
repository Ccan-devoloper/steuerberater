/* ==========================================================================
   Rendert Folien und Stories mit Chromium (Playwright) als JPEG.
   Instagram akzeptiert für Bilder nur JPEG; 1080×1350 (4:5) und 1080×1920.
   ========================================================================== */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { chromium } from "playwright";
import { folieHtml, storyHtml, MASSE } from "./vorlagen.mjs";
import { stil as stilLaden } from "./stile.mjs";
import { FAECHER } from "./inhalte.mjs";
import { CONFIG } from "./config.mjs";

let browser = null;

export async function browserStarten() {
  if (browser) return browser;
  const executablePath = process.env.CHROMIUM_PATH || undefined;
  browser = await chromium.launch({ executablePath, args: ["--font-render-hinting=none"] });
  return browser;
}

export async function browserBeenden() {
  if (browser) { await browser.close(); browser = null; }
}

export function kontext(opt = {}) {
  const stilName = opt.stil || CONFIG.marke.stil;
  return {
    stil: stilLaden(stilName),
    handle: opt.handle || CONFIG.marke.handle,
    website: opt.website || CONFIG.marke.website,
    fachLabel: opt.fachLabel || (opt.fach ? FAECHER[opt.fach]?.label : "Steuerberaterexamen") || "Steuerberaterexamen",
    klausur: opt.klausur || (opt.fach ? FAECHER[opt.fach]?.klausur : 3) || 3,
  };
}

async function htmlZuJpeg(html, masse, zielPfad, skala = Number(process.env.IG_RENDER_SKALA || 1)) {
  const b = await browserStarten();
  const page = await b.newPage({ viewport: { width: masse.breite, height: masse.hoehe }, deviceScaleFactor: skala });
  const tmp = path.join(os.tmpdir(), `ig-${process.pid}-${Math.random().toString(36).slice(2)}.html`);
  fs.writeFileSync(tmp, html);
  try {
    await page.goto(`file://${tmp}`, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(60);
    fs.mkdirSync(path.dirname(zielPfad), { recursive: true });
    await page.screenshot({ path: zielPfad, type: "jpeg", quality: skala < 1 ? 80 : 92, fullPage: false });
  } finally {
    await page.close();
    fs.rmSync(tmp, { force: true });
  }
  return zielPfad;
}

/* Rendert alle Folien eines Beitrags → Liste der JPEG-Pfade. */
export async function beitragRendern(beitrag, zielVerzeichnis, opt = {}) {
  const ctx = kontext({ ...opt, fach: beitrag.fach, klausur: beitrag.klausur, fachLabel: beitrag.fachLabel });
  const pfade = [];
  const n = beitrag.folien.length;
  for (let i = 0; i < n; i++) {
    const html = folieHtml(beitrag.folien[i], ctx, i + 1, n);
    const ziel = path.join(zielVerzeichnis, `${beitrag.slug || "beitrag"}-${String(i + 1).padStart(2, "0")}.jpg`);
    pfade.push(await htmlZuJpeg(html, MASSE.beitrag, ziel));
  }
  return pfade;
}

export async function storyRendern(story, zielPfad, opt = {}) {
  const ctx = kontext({ ...opt, fach: story.fach, klausur: story.klausur, fachLabel: story.fachLabel });
  return htmlZuJpeg(storyHtml(story, ctx), MASSE.story, zielPfad);
}
