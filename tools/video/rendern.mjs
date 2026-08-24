#!/usr/bin/env node
/* Rendert Erklärvideos aus den Moduldaten.

   Aufruf:
     node tools/video/rendern.mjs --campus k3 --modul 1
     node tools/video/rendern.mjs --campus k3 --alle --ziel /pfad/zu/videos

   Voraussetzungen (nicht im Repository, siehe docs/erklaervideos.md):
     PIPER_MODELL  Pfad zum Stimmmodell (.onnx), z. B. de-thorsten-low.onnx
     FFMPEG        Pfad zu ffmpeg (Standard: "ffmpeg" aus dem Suchpfad)
   Zusätzlich: python3 mit piper-tts, playwright-core mit Chromium.

   Der Renderer erzeugt kein Wort selbst: Gesprochen und gezeigt wird nur,
   was im Modul steht. Die Sprache gibt den Takt vor – erst wird vertont,
   dann richtet sich die Bildzeitachse nach den echten Sprechdauern. */

import { execFile } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { buehneHtml, istRechenzeile } from "./buehne.mjs";
import { szenenAusModul, alsSprechtext } from "../../src/lib/erklaervideo-szenen.js";

const lauf = promisify(execFile);
const FFMPEG = process.env.FFMPEG || "ffmpeg";
const MODELL = process.env.PIPER_MODELL || "";
const MASTERING = "highpass=f=75,equalizer=f=180:t=q:w=1.2:g=-2,equalizer=f=3000:t=q:w=1.5:g=3,"
  + "acompressor=threshold=-18dB:ratio=3:attack=8:release=180,loudnorm=I=-16:TP=-1.5:LRA=11";
/* Ruhigere Sprechweise: langsamer, weniger Rauschen – passt zu Fachstoff. */
const PIPER_ARGS = ["--length-scale", "1.12", "--noise-scale", "0.5", "--noise-w-scale", "0.6",
                    "--sentence-silence", "0.35"];
const FPS = 25, BREITE = 1280, HOEHE = 720, PAUSE = 0.5;

const CAMPUS = {
  k3:  { marke: "3", name: "Examenscampus Klausur 3", fach: "Buchführung und Bilanzwesen",
         laden: async () => (await import("../../src/data/module.js")).default },
  ao:  { marke: "1", name: "Examenscampus Klausur 1", fach: "Verfahrensrecht · Abgabenordnung",
         laden: async () => (await Promise.all([1,2,3,4,5,6,7,8].map((i) =>
           import(`../../src/data/k1-ao-einheit-${i}.js`)))).flatMap((m) => m.default || []) },
  kst: { marke: "2", name: "Examenscampus Klausur 2", fach: "Ertragsteuerrecht · Körperschaftsteuer",
         laden: async () => { for (const i of [2,5,6,7]) await import(`../../src/data/kst-einheit-${i}-register.js`);
           return (await import("../../src/data/kst-module.js")).kstModule } },
};

function argument(name, standard = null) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return standard;
  const wert = process.argv[i + 1];
  return wert && !wert.startsWith("--") ? wert : true;
}

/* Aus den Szenen der Bibliothek wird die Video-Darstellung abgeleitet.
   Lösungsschritte mit Beträgen werden als Rechenweg gesetzt. */
function visualsFuer(szenen) {
  const rechenzeilen = [];
  szenen.forEach((s) => {
    if (s.visual?.rolle === "loesung" && istRechenzeile(s.visual.text)) {
      const m = s.visual.text.match(/^(.*?)(?:[:=]\s*)?((?:\d{1,3}(?:\.\d{3})*|\d+)(?:,\d+)?\s?€)\s*\.?$/);
      rechenzeilen.push({ text: (m ? m[1] : s.visual.text).trim().replace(/[:=]$/, ""), betrag: m ? m[2] : "" });
    }
  });
  let rwIndex = -1;
  return szenen.map((s) => {
    const v = s.visual || {};
    if (v.typ === "titel" || v.typ === "liste" || v.typ === "normen") return { visual: v };
    if (v.rolle === "loesung" && istRechenzeile(v.text)) {
      rwIndex += 1;
      return { visual: { typ: "rechenweg", titel: "Rechenweg", zeilen: rechenzeilen, bis: rwIndex } };
    }
    if (v.typ === "merksatz") return { visual: { typ: "block", titel: "Merksatz", text: v.text } };
    if (v.typ === "falle") return { visual: { typ: "block", titel: "Typische Falle", text: v.text, ton: "orange" } };
    if (v.rolle === "ergebnis") return { visual: { typ: "block", titel: "Ergebnis", text: v.text, ton: "gruen" } };
    if (v.rolle === "sachverhalt") return { visual: { typ: "block", titel: v.titel || "Sachverhalt", text: v.text } };
    return { visual: { typ: "text", text: v.text || s.text } };
  });
}

async function vertonen(szenen, arbeit) {
  if (!MODELL) throw new Error("PIPER_MODELL ist nicht gesetzt – siehe docs/erklaervideos.md");
  const zeiten = [];
  for (const [i, s] of szenen.entries()) {
    const roh = path.join(arbeit, `r${i}.wav`), fertig = path.join(arbeit, `s${String(i).padStart(3,"0")}.wav`);
    await lauf("python3", ["-m", "piper", "--model", MODELL, ...PIPER_ARGS, "--output_file", roh],
               { input: alsSprechtext(s.text), maxBuffer: 1 << 26 });
    await lauf(FFMPEG, ["-y", "-i", roh, "-af", MASTERING, "-ar", "22050", fertig], { maxBuffer: 1 << 26 });
    const kopf = fs.readFileSync(fertig).subarray(0, 44);
    zeiten.push((fs.statSync(fertig).size - 44) / (kopf.readUInt32LE(24) * kopf.readUInt16LE(32)));
  }
  let t = 0;
  const timeline = szenen.map((s, i) => {
    const e = { szene: s.kapitel, ut: s.text, start: +t.toFixed(3), ende: +(t + zeiten[i]).toFixed(3) };
    t += zeiten[i] + PAUSE;
    return e;
  });
  return { timeline, dauer: +(t - PAUSE + 0.9).toFixed(3) };
}

async function bilder(html, daten, arbeit) {
  const { chromium } = await import("playwright-core");
  const seite = path.join(arbeit, "buehne.html");
  fs.writeFileSync(seite, html);
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PFAD
    || "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell" });
  const p = await browser.newPage({ viewport: { width: BREITE, height: HOEHE } });
  await p.goto("file://" + seite, { waitUntil: "load" });
  await p.evaluate((d) => window.setzeTimeline(d), daten);
  const n = Math.round(daten.dauer * FPS);
  for (let f = 0; f < n; f++) {
    await p.evaluate((t) => window.render(t), f / FPS);
    await p.screenshot({ path: path.join(arbeit, `f${String(f).padStart(5, "0")}.png`) });
  }
  await browser.close();
  return n;
}

async function tonspur(daten, arbeit) {
  const ein = [], filter = [];
  daten.timeline.forEach((e, i) => {
    ein.push("-i", path.join(arbeit, `s${String(i).padStart(3,"0")}.wav`));
    filter.push(`[${i}:a]adelay=${Math.round(e.start*1000)}|${Math.round(e.start*1000)}[a${i}]`);
  });
  filter.push(daten.timeline.map((_, i) => `[a${i}]`).join("")
    + `amix=inputs=${daten.timeline.length}:normalize=0,apad,atrim=0:${daten.dauer}[out]`);
  const ziel = path.join(arbeit, "ton.wav");
  await lauf(FFMPEG, ["-y", ...ein, "-filter_complex", filter.join(";"), "-map", "[out]",
                      "-c:a", "pcm_s16le", ziel], { maxBuffer: 1 << 26 });
  return ziel;
}

async function rendere(campusId, modul, zielVerzeichnis) {
  const c = CAMPUS[campusId];
  const arbeit = fs.mkdtempSync(path.join(os.tmpdir(), "video-"));
  try {
    const szenen = szenenAusModul(modul, modul.area || "");
    const daten = await vertonen(szenen, arbeit);
    const html = buehneHtml({ campus: c, kopfzeile: `${c.fach} · Modul ${modul.id}`,
                              szenen: visualsFuer(szenen) });
    const anzahl = await bilder(html, daten, arbeit);
    const ton = await tonspur(daten, arbeit);
    const datei = path.join(zielVerzeichnis, `${campusId}-modul-${String(modul.id).padStart(3,"0")}.mp4`);
    await lauf(FFMPEG, ["-y", "-framerate", String(FPS), "-i", path.join(arbeit, "f%05d.png"),
      "-i", ton, "-c:v", "libx264", "-preset", "slow", "-crf", "24", "-pix_fmt", "yuv420p",
      "-c:a", "aac", "-b:a", "96k", "-ar", "44100", "-shortest", "-movflags", "+faststart", datei],
      { maxBuffer: 1 << 26 });
    /* Standbild aus der Mitte als Vorschau */
    await lauf(FFMPEG, ["-y", "-i", datei, "-ss", String(daten.dauer / 3), "-frames:v", "1",
      "-q:v", "4", datei.replace(/\.mp4$/, ".jpg")], { maxBuffer: 1 << 26 });
    return { datei, dauer: daten.dauer, szenen: szenen.length, bilder: anzahl,
             groesse: fs.statSync(datei).size };
  } finally {
    fs.rmSync(arbeit, { recursive: true, force: true });
  }
}

const campusId = argument("campus", "k3");
if (!CAMPUS[campusId]) { console.error(`Unbekannter Campus: ${campusId}`); process.exit(1); }
const ziel = argument("ziel", "video-ausgabe");
fs.mkdirSync(ziel, { recursive: true });
const moduleListe = await CAMPUS[campusId].laden();
const auswahl = argument("alle")
  ? moduleListe.filter((m) => m.intro?.length && m.scheme?.length)
  : moduleListe.filter((m) => String(m.id) === String(argument("modul", "1")));
if (!auswahl.length) { console.error("Kein passendes Modul gefunden."); process.exit(1); }

console.log(`${auswahl.length} Modul(e) aus ${campusId} · Ziel: ${ziel}`);
const manifestPfad = "src/data/video-manifest.json";
const manifest = JSON.parse(fs.readFileSync(manifestPfad, "utf8"));
for (const [i, m] of auswahl.entries()) {
  const t0 = Date.now();
  const r = await rendere(campusId, m, ziel);
  manifest.videos[`${campusId}-${m.id}`] = { dauer: r.dauer, groesse: r.groesse };
  console.log(`  [${i+1}/${auswahl.length}] Modul ${m.id}: ${(r.dauer/60).toFixed(1)} Min, `
    + `${(r.groesse/1048576).toFixed(1)} MB, ${Math.round((Date.now()-t0)/1000)}s`);
}
manifest.stand = new Date().toISOString().slice(0, 10);
fs.writeFileSync(manifestPfad, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Manifest aktualisiert: ${Object.keys(manifest.videos).length} Videos`);
