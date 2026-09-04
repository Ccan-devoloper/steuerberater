/* ==========================================================================
   Reels: aus einem Reel-Skript (Szenen mit Bildschirmtext + Sprechertext)
   wird ein 9:16-Video mit Sprecherstimme, mitlaufenden Untertiteln und
   dezentem Klangbett.

   Ablauf: Stimme je Szene erzeugen (stimme.mjs) → Zeitplan aus den
   Audiodauern → Frames mit Chromium rendern (JS-gesteuerte Animation, Bild
   für Bild deterministisch) → ffmpeg: H.264/AAC MP4 + Cover-JPEG.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { browserStarten } from "./render.mjs";
import { css } from "./vorlagen.mjs";
import { stil as stilLaden, iconSvg } from "./stile.mjs";
import { FAECHER } from "./inhalte.mjs";
import { CONFIG } from "./config.mjs";
import { sprechen, ffmpegPfad } from "./stimme.mjs";

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* Zeitplan: jede Szene = kurzer Vorlauf + Sprechdauer + Nachlauf. */
export async function zeitplanErstellen(reel, audioDir) {
  const szenen = [];
  let t = 0;
  for (const [i, s] of reel.szenen.entries()) {
    const stimme = await sprechen(s.sprecher, path.join(audioDir, `szene-${String(i + 1).padStart(2, "0")}.mp3`));
    const vorlauf = i === 0 ? 0.35 : 0.25;
    const nachlauf = s.art === "cta" ? 1.2 : 0.55;
    const dauer = vorlauf + stimme.dauer + nachlauf;
    szenen.push({ ...s, index: i, start: t, dauer, audioStart: t + vorlauf, audio: stimme.datei, woerter: stimme.woerter.map((w) => ({ ...w, von: w.von + t + vorlauf, bis: w.bis + t + vorlauf })), echt: stimme.echt });
    t += dauer;
  }
  return { szenen, gesamt: Math.min(t, CONFIG.reel.maxSekunden), echt: szenen.every((s) => s.echt) };
}

/* Die Seite: alle Szenen im DOM, Sichtbarkeit und Animation über setzeZeit(t). */
function reelHtml(reel, plan, ctx) {
  const stil = ctx.stil;
  const szenenHtml = plan.szenen.map((s) => {
    let inhalt = "";
    if (s.art === "hook") inhalt = `<div class="hook"><h1>${esc(s.titel)}</h1>${s.unter ? `<p class="unter">${esc(s.unter)}</p>` : ""}${s.icon ? `<div class="illu">${iconSvg(s.icon, 300)}</div>` : ""}</div>`;
    else if (s.art === "schritt") inhalt = `<div class="schritt"><div class="nummer">${esc(s.nummer)}</div><h2>${esc(s.titel)}</h2>${s.text ? `<p class="text">${esc(s.text)}</p>` : ""}</div>`;
    else if (s.art === "merke") inhalt = `<div class="merkeblock"><div class="ueber">Merksatz</div><h2 class="merke-titel">${esc(s.titel)}</h2>${s.norm ? `<div class="norm">${esc(s.norm)}</div>` : ""}</div>`;
    else if (s.art === "cta") inhalt = `<div class="ctablock"><h2>${esc(s.titel)}</h2>${s.text ? `<p class="text">${esc(s.text)}</p>` : ""}<span class="pille">Folgen</span></div>`;
    else inhalt = `<div class="schritt"><h2>${esc(s.titel)}</h2><p class="text">${esc(s.text || "")}</p></div>`;
    return `<section class="szene" data-i="${s.index}" data-start="${s.start}" data-dauer="${s.dauer}">${inhalt}</section>`;
  }).join("");
  const woerter = plan.szenen.flatMap((s) => s.woerter.map((w) => ({ ...w, szene: s.index })));
  const kl = { 1: "k1", 2: "k2", 3: "k3" }[ctx.klausur] || "k3";
  return `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>${css(stil, "story")}
.reel{position:relative;width:1080px;height:1920px;overflow:hidden;background:var(--grund);font-family:var(--sans)}
.stil-campus .reel{background:radial-gradient(1300px 1100px at 30% 10%,#243070 0%,#141a3a 55%,#0e1230 100%)}
.fortschritt{position:absolute;left:84px;right:84px;top:118px;height:8px;border-radius:999px;background:var(--linie);overflow:hidden}
.fortschritt i{display:block;height:100%;background:var(--akzent);width:0}
.reel .kopf{position:absolute;left:84px;right:84px;top:150px}
.szene{position:absolute;left:84px;right:84px;top:300px;bottom:640px;opacity:0;display:flex;flex-direction:column;justify-content:center}
.szene.aktiv{opacity:1}
.hook h1{font-size:132px;margin-top:0}
.hook .unter{margin-top:34px;font-size:44px;line-height:1.35;color:var(--text-weich)}
.hook .illu{position:absolute;right:0;bottom:-40px;width:400px;height:400px;display:flex;align-items:center;justify-content:center;color:var(--akzent)}
.hook .illu::before{content:"";position:absolute;inset:0;border-radius:50%;border:3px solid var(--linie)}
.schritt .nummer{font-family:var(--titel);font-size:260px;line-height:.9;color:var(--akzent);font-weight:${stil.schrift.titelGewicht}}
.schritt h2{font-size:108px;margin-top:20px;line-height:1.02}
.schritt .text{margin-top:30px;font-size:46px;line-height:1.35;color:var(--text-weich);max-width:880px}
.merkeblock .ueber{font-size:34px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-weich);font-weight:700}
.merke-titel{font-size:96px;margin-top:24px;line-height:1.05}
.merkeblock .norm{margin-top:40px;font-family:var(--mono);font-size:40px;color:var(--akzent);line-height:1.3}
.stil-klausurbogen .merkeblock .norm{color:var(--rot)}
.ctablock h2{font-size:104px;margin-top:0}
.ctablock .text{margin-top:30px;font-size:46px;color:var(--text-weich)}
.ctablock .pille{margin-top:50px;font-size:40px;padding:22px 48px}
.anim{transition:none}
.untertitel{position:absolute;left:84px;right:84px;bottom:230px;min-height:300px;display:flex;align-items:flex-end}
.untertitel .zeile{font-family:var(--titel);font-size:76px;line-height:1.12;text-wrap:balance;letter-spacing:.005em}
.untertitel .w{opacity:.32;transition:none}
.untertitel .w.gesagt{opacity:.85}
.untertitel .w.jetzt{opacity:1;color:var(--akzent)}
.stil-klausurbogen .untertitel .w.jetzt{color:var(--rot)}
.familie-kanzlei .untertitel .w.jetzt{color:var(--k3)}
.reel .fuss{position:absolute;left:84px;right:84px;bottom:110px}
</style></head><body class="stil-${stil.id} familie-${stil.familie || stil.id}"><div class="reel">
<div class="fortschritt"><i id="balken"></i></div>
<div class="kopf"><span class="etikett ${kl}"><i class="punkt"></i>${esc(ctx.fachLabel)}</span><span class="zaehler"></span></div>
${szenenHtml}
<div class="untertitel"><div class="zeile" id="zeile"></div></div>
<div class="fuss"><span class="handle">${esc(ctx.handle || "")}</span><span class="klausur">${esc({ 1: "Klausur 1 · Tag 1", 2: "Klausur 2 · Tag 2", 3: "Klausur 3 · Tag 3" }[ctx.klausur] || "")}</span></div>
</div>
<script>
const WOERTER = ${JSON.stringify(woerter)};
const GESAMT = ${plan.gesamt};
const szenen = [...document.querySelectorAll(".szene")].map((el) => ({ el, start: +el.dataset.start, dauer: +el.dataset.dauer, kinder: [...el.querySelectorAll("h1,h2,p,.nummer,.illu,.norm,.pille,.ueber")] }));
const ease = (x) => 1 - Math.pow(1 - Math.min(1, Math.max(0, x)), 3);
function fenster(i) {
  /* Untertitel-Fenster: bis zu 7 Wörter, an Satzzeichen umbrechen. */
  const w = WOERTER[i];
  let a = i, b = i;
  while (a > 0 && WOERTER[a - 1].szene === w.szene && i - a < 3 && !/[.!?:]$/.test(WOERTER[a - 1].wort)) a--;
  while (b < WOERTER.length - 1 && WOERTER[b + 1].szene === w.szene && b - a < 6 && !/[.!?:]$/.test(WOERTER[b].wort)) b++;
  return [a, b];
}
window.setzeZeit = function (t) {
  document.getElementById("balken").style.width = (100 * Math.min(1, t / GESAMT)) + "%";
  let aktiv = -1;
  szenen.forEach((s, i) => {
    const lokal = t - s.start;
    const drin = lokal >= 0 && lokal < s.dauer;
    s.el.classList.toggle("aktiv", drin);
    if (drin) aktiv = i;
    if (!drin) return;
    /* Einblenden: Kinder nacheinander von unten, Ausblenden am Ende. */
    const aus = s.dauer - lokal;
    const fade = aus < 0.25 ? aus / 0.25 : 1;
    s.kinder.forEach((k, j) => {
      const p = ease((lokal - 0.08 * j) / 0.42);
      k.style.opacity = String(p * fade);
      k.style.transform = "translateY(" + (36 * (1 - p)) + "px)";
    });
    const nummer = s.el.querySelector(".nummer");
    if (nummer) { const p = ease(lokal / 0.5); nummer.style.transform = "translateY(" + (40 * (1 - p)) + "px) scale(" + (0.85 + 0.15 * p) + ")"; }
    const illu = s.el.querySelector(".illu");
    if (illu) illu.style.transform = "rotate(" + (Math.sin(lokal * 1.2) * 2) + "deg)";
  });
  /* Untertitel */
  const zeile = document.getElementById("zeile");
  let i = WOERTER.findIndex((w) => t >= w.von && t < w.bis);
  if (i < 0) { const n = WOERTER.filter((w) => w.bis <= t && (aktiv < 0 || w.szene === aktiv)); i = n.length ? WOERTER.indexOf(n[n.length - 1]) : -1; }
  if (i < 0 || (aktiv >= 0 && WOERTER[i].szene !== aktiv)) { zeile.innerHTML = ""; return; }
  const [a, b] = fenster(i);
  zeile.innerHTML = WOERTER.slice(a, b + 1).map((w, k) => '<span class="w ' + (a + k < i ? "gesagt" : a + k === i ? "jetzt" : "") + '">' + w.wort.replace(/[&<>]/g, "") + "</span>").join(" ");
};
</script></body></html>`;
}

/* Frames rendern. */
async function framesRendern(html, plan, frameDir, fps) {
  fs.mkdirSync(frameDir, { recursive: true });
  const b = await browserStarten();
  const page = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  const tmp = path.join(frameDir, "reel.html");
  fs.writeFileSync(tmp, html);
  await page.goto(`file://${tmp}`, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  const n = Math.ceil(plan.gesamt * fps);
  for (let f = 0; f < n; f++) {
    await page.evaluate((t) => window.setzeZeit(t), f / fps);
    await page.screenshot({ path: path.join(frameDir, `f${String(f).padStart(5, "0")}.jpg`), type: "jpeg", quality: 88 });
  }
  await page.close();
  fs.rmSync(tmp, { force: true });
  return n;
}

/* Dezentes Klangbett: leiser Akkord mit langsamer Bewegung, tief gefiltert. */
function klangbettFilter(dauer) {
  return `aevalsrc='0.20*sin(2*PI*110*t)*(0.6+0.4*sin(2*PI*0.11*t))+0.14*sin(2*PI*164.8*t)*(0.6+0.4*sin(2*PI*0.07*t+1))+0.10*sin(2*PI*220*t)*(0.5+0.5*sin(2*PI*0.05*t+2))+0.06*sin(2*PI*329.6*t)*(0.5+0.5*sin(2*PI*0.09*t+3))':s=48000:d=${dauer.toFixed(2)},lowpass=f=900,highpass=f=60,afade=t=in:d=1.5,afade=t=out:st=${Math.max(0, dauer - 2).toFixed(2)}:d=2,volume=0.12`;
}

/**
 * Baut das Reel. Rückgabe: { video, cover, dauer, echt }
 */
export async function reelBauen(reel, ausgabeDir, opt = {}) {
  ausgabeDir = path.resolve(ausgabeDir);
  const fps = CONFIG.reel.fps;
  const ctx = { stil: stilLaden(opt.stil || (CONFIG.marke.stil === "kanzlei" && opt.variante ? "kanzlei-hell" : CONFIG.marke.stil)), handle: CONFIG.marke.handle, klausur: reel.klausur || FAECHER[reel.fach]?.klausur || 3, fachLabel: FAECHER[reel.fach]?.label || "Steuerberaterexamen" };
  fs.mkdirSync(ausgabeDir, { recursive: true });
  const plan = await zeitplanErstellen(reel, path.join(ausgabeDir, "audio"));
  const frameDir = path.join(ausgabeDir, "frames");
  const n = await framesRendern(reelHtml(reel, plan, ctx), plan, frameDir, fps);

  const video = path.join(ausgabeDir, `${reel.slug || "reel"}.mp4`);
  const cover = path.join(ausgabeDir, `${reel.slug || "reel"}-cover.jpg`);
  const args = ["-y", "-hide_banner", "-loglevel", "error", "-framerate", String(fps), "-i", path.join(frameDir, "f%05d.jpg")];
  const audioEingaben = plan.szenen.filter((s) => s.audio);
  for (const s of audioEingaben) args.push("-i", s.audio);
  const filter = [];
  const mix = [];
  audioEingaben.forEach((s, k) => { filter.push(`[${k + 1}:a]aresample=48000,adelay=${Math.round(s.audioStart * 1000)}|${Math.round(s.audioStart * 1000)},apad=whole_dur=${plan.gesamt.toFixed(2)}[v${k}]`); mix.push(`[v${k}]`); });
  if (CONFIG.reel.hintergrundmusik) { filter.push(`${klangbettFilter(plan.gesamt)}[bett]`); mix.push("[bett]"); }
  if (mix.length) {
    filter.push(`${mix.join("")}amix=inputs=${mix.length}:normalize=0:duration=first,alimiter=limit=0.95[aout]`);
    args.push("-filter_complex", filter.join(";"), "-map", "0:v", "-map", "[aout]", "-c:a", "aac", "-b:a", "160k", "-ar", "48000");
  } else args.push("-an");
  args.push("-c:v", "libx264", "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p", "-r", String(fps), "-t", plan.gesamt.toFixed(2), "-movflags", "+faststart", video);
  execFileSync(ffmpegPfad(), args, { stdio: ["ignore", "pipe", "pipe"] });
  fs.copyFileSync(path.join(frameDir, `f${String(Math.min(n - 1, Math.round(0.9 * fps))).padStart(5, "0")}.jpg`), cover);
  if (!opt.framesBehalten) fs.rmSync(frameDir, { recursive: true, force: true });
  return { video, cover, dauer: plan.gesamt, echt: plan.echt, szenen: plan.szenen.length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const datei = process.argv[2] || new URL("../beispiele/reel.json", import.meta.url).pathname;
  const reel = JSON.parse(fs.readFileSync(datei, "utf8"));
  const ziel = process.argv[3] || new URL("../beispiele/reel-out", import.meta.url).pathname;
  const t0 = Date.now();
  const r = await reelBauen(reel, ziel, { framesBehalten: process.argv.includes("--frames") });
  console.log(`${r.video} · ${r.dauer.toFixed(1)} s · ${r.szenen} Szenen · Stimme: ${r.echt ? "ElevenLabs" : "Platzhalter (stumm)"} · ${((Date.now() - t0) / 1000).toFixed(0)} s`);
  const { browserBeenden } = await import("./render.mjs");
  await browserBeenden();
}
