/* ==========================================================================
   Sprecherstimme für Reels – drei Anbieter, automatisch gewählt:

     elevenlabs  natürlichste Stimme (Modell eleven_v3), kostenpflichtig,
                 liefert Wort-Zeitmarken. Aktiv, wenn ELEVENLABS_API_KEY gesetzt.
     piper       kostenlos, offline, neuronale Stimme „Thorsten“ (de_DE-thorsten-high).
                 Läuft im GitHub-Runner; Modell wird beim ersten Lauf geladen.
     pico        kostenlos, offline, SVOX Pico (apt: libttspico-utils). Deutlich
                 hörbar synthetisch – nur Notlösung und für Tests.
     aus         stumm mit geschätzter Dauer (Storyboard-Tests).

   IG_STIMME erzwingt einen Anbieter. Alle Anbieter liefern je Szene eine
   Audiodatei, die Dauer und Wortzeiten für die Untertitel. Bei piper/pico
   wird satzweise synthetisiert, damit die Untertitel je Satz sauber sitzen.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { CONFIG } from "./config.mjs";

export function ffmpegPfad() {
  return process.env.FFMPEG_PATH || "ffmpeg";
}

function vorhanden(befehl) {
  return spawnSync("sh", ["-c", `command -v ${befehl}`], { stdio: "ignore" }).status === 0;
}

/* Dauer einer Audiodatei in Sekunden (über ffmpeg, ohne ffprobe-Abhängigkeit). */
export function audioDauer(datei) {
  const r = spawnSync(ffmpegPfad(), ["-hide_banner", "-i", datei, "-f", "null", "-"], { encoding: "utf8" });
  const m = String(r.stderr || "").match(/time=(\d+):(\d+):(\d+\.\d+)/g);
  if (!m) return 0;
  const [, h, mi, s] = m[m.length - 1].match(/time=(\d+):(\d+):(\d+\.\d+)/);
  return Number(h) * 3600 + Number(mi) * 60 + Number(s);
}

/* Geschätzte Sprechdauer: ca. 15 Zeichen je Sekunde bei ruhigem Tempo. */
export function sprechdauerSchaetzen(text) {
  const zeichen = String(text).replace(/\s+/g, " ").trim().length;
  return Math.max(1.4, zeichen / 15 + 0.4);
}

/* Wörter gewichtet nach Länge über eine Dauer verteilen. */
export function woerterVerteilen(text, dauer, start = 0) {
  const woerter = String(text).split(/\s+/).filter(Boolean);
  const gewichte = woerter.map((w) => w.length + 2);
  const summe = gewichte.reduce((a, b) => a + b, 0);
  let t = start;
  return woerter.map((w, i) => { const d = (gewichte[i] / summe) * dauer; const o = { wort: w, von: t, bis: t + d }; t += d; return o; });
}

export function saetze(text) {
  return String(text).replace(/\s+/g, " ").trim().split(/(?<=[.!?…])\s+(?=[„"A-ZÄÖÜ0-9])/).filter(Boolean);
}

/* Welcher Anbieter läuft? */
export function stimmenAnbieter() {
  const wunsch = (process.env.IG_STIMME || "").toLowerCase();
  if (wunsch) return wunsch;
  if (CONFIG.reel.elevenlabsKey) return "elevenlabs";
  if (vorhanden("piper") && piperModell()) return "piper";
  if (vorhanden("pico2wave")) return "pico";
  return "aus";
}

function piperModell() {
  const dir = process.env.PIPER_VOICES_DIR || path.resolve(process.env.HOME || "/tmp", ".cache/piper-voices");
  const name = process.env.PIPER_VOICE || "de_DE-thorsten-high";
  const onnx = path.join(dir, `${name}.onnx`);
  return fs.existsSync(onnx) && fs.existsSync(`${onnx}.json`) ? onnx : null;
}

/* --- ElevenLabs --------------------------------------------------------- */
function alignmentZuWoertern(alignment, start) {
  const zeichen = alignment.characters || [];
  const anfang = alignment.character_start_times_seconds || [];
  const ende = alignment.character_end_times_seconds || [];
  const woerter = [];
  let aktuell = null;
  for (let i = 0; i < zeichen.length; i++) {
    const c = zeichen[i];
    if (/\s/.test(c)) { if (aktuell) { woerter.push(aktuell); aktuell = null; } continue; }
    if (!aktuell) aktuell = { wort: c, von: start + anfang[i], bis: start + ende[i] };
    else { aktuell.wort += c; aktuell.bis = start + ende[i]; }
  }
  if (aktuell) woerter.push(aktuell);
  return woerter.length ? woerter : null;
}

async function elevenlabs(text, zielDatei) {
  const key = CONFIG.reel.elevenlabsKey;
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(CONFIG.reel.stimme)}/with-timestamps?output_format=mp3_44100_128`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "xi-api-key": key, "Content-Type": "application/json" },
    body: JSON.stringify({ text, model_id: CONFIG.reel.modell, language_code: "de", voice_settings: { stability: 0.45, similarity_boost: 0.8, style: 0.35, use_speaker_boost: true, speed: 1.0 } }),
  });
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const json = await res.json();
  fs.writeFileSync(zielDatei, Buffer.from(json.audio_base64, "base64"));
  const dauer = audioDauer(zielDatei) || sprechdauerSchaetzen(text);
  const woerter = alignmentZuWoertern(json.alignment || json.normalized_alignment || {}, 0) || woerterVerteilen(text, dauer);
  return { datei: zielDatei, dauer, woerter, echt: true, anbieter: "elevenlabs" };
}

/* --- Offline-Anbieter: satzweise synthetisieren, dann zusammensetzen ------ */
function satzSynthese(anbieter, satz, wav) {
  if (anbieter === "piper") {
    const r = spawnSync("piper", ["-m", piperModell(), "-f", wav, "--length-scale", process.env.PIPER_TEMPO || "1.0", "--sentence-silence", "0.15"], { input: satz, encoding: "utf8" });
    if (r.status !== 0) throw new Error(`piper: ${r.stderr}`);
  } else if (anbieter === "pico") {
    const r = spawnSync("pico2wave", ["-l", "de-DE", "-w", wav, satz], { encoding: "utf8" });
    if (r.status !== 0) throw new Error(`pico2wave: ${r.stderr}`);
  } else throw new Error(`Unbekannter Stimmanbieter ${anbieter}`);
}

function offline(anbieter, text, zielDatei) {
  const teile = saetze(text);
  const dir = path.dirname(zielDatei);
  const basis = path.basename(zielDatei, path.extname(zielDatei));
  const pause = 0.22;
  const wavs = [];
  const woerter = [];
  let t = 0;
  teile.forEach((satz, i) => {
    const wav = path.join(dir, `${basis}-s${i}.wav`);
    satzSynthese(anbieter, satz, wav);
    const d = audioDauer(wav);
    const dEff = anbieter === "pico" ? d / 1.1 : d;   // Pico wird um 10 % gestrafft
    woerter.push(...woerterVerteilen(satz, Math.max(0.2, dEff - 0.1), t));
    wavs.push({ wav, d: dEff });
    t += dEff + pause;
  });
  /* Sätze mit kurzen Pausen aneinanderhängen, leicht entrauschen und angleichen. */
  const liste = path.join(dir, `${basis}-liste.txt`);
  const stille = path.join(dir, `${basis}-pause.wav`);
  execFileSync(ffmpegPfad(), ["-y", "-loglevel", "error", "-f", "lavfi", "-i", `anullsrc=r=16000:cl=mono`, "-t", String(pause), stille]);
  fs.writeFileSync(liste, wavs.flatMap((w, i) => [`file '${w.wav}'`, ...(i < wavs.length - 1 ? [`file '${stille}'`] : [])]).join("\n"));
  execFileSync(ffmpegPfad(), ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", liste, "-af", `${anbieter === "pico" ? "atempo=1.1," : ""}aresample=44100,highpass=f=80,loudnorm=I=-17:TP=-1.5:LRA=9`, "-c:a", "libmp3lame", "-q:a", "3", zielDatei]);
  for (const w of wavs) fs.rmSync(w.wav, { force: true });
  fs.rmSync(liste, { force: true }); fs.rmSync(stille, { force: true });
  const dauer = audioDauer(zielDatei) || t;
  return { datei: zielDatei, dauer, woerter, echt: true, anbieter };
}

/**
 * Spricht einen Text. Rückgabe: { datei (mp3|null), dauer, woerter:[{wort,von,bis}], echt, anbieter }
 */
export async function sprechen(text, zielDatei, opt = {}) {
  const anbieter = opt.anbieter || stimmenAnbieter();
  fs.mkdirSync(path.dirname(zielDatei), { recursive: true });
  if (anbieter === "elevenlabs") return elevenlabs(text, zielDatei);
  if (anbieter === "piper" || anbieter === "pico") return offline(anbieter, text, zielDatei);
  const dauer = sprechdauerSchaetzen(text);
  return { datei: null, dauer, woerter: woerterVerteilen(text, dauer), echt: false, anbieter: "aus" };
}
