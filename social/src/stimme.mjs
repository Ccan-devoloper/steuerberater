/* ==========================================================================
   Sprecherstimme für Reels.

   Primär: ElevenLabs (natürlichste deutsche Stimmen; Modell eleven_v3 bzw.
   eleven_multilingual_v2). Liefert je Szene eine MP3-Datei und – wenn
   verfügbar – Wort-Zeitmarken für die mitlaufenden Untertitel.
   Ohne ELEVENLABS_API_KEY: stiller Platzhalter mit geschätzter Dauer, damit
   Storyboard und Schnitt auch ohne Stimme getestet werden können.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { CONFIG } from "./config.mjs";

export function ffmpegPfad() {
  return process.env.FFMPEG_PATH || "ffmpeg";
}

/* Dauer einer Audiodatei in Sekunden (über ffmpeg, ohne ffprobe-Abhängigkeit). */
export function audioDauer(datei) {
  try {
    const out = execFileSync(ffmpegPfad(), ["-hide_banner", "-i", datei, "-f", "null", "-"], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    return 0;
  } catch (e) {
    const m = String(e.stderr || "").match(/time=(\d+):(\d+):(\d+\.\d+)/g);
    if (!m) return 0;
    const [, h, mi, s] = m[m.length - 1].match(/time=(\d+):(\d+):(\d+\.\d+)/);
    return Number(h) * 3600 + Number(mi) * 60 + Number(s);
  }
}

/* Geschätzte Sprechdauer: ca. 14 Zeichen je Sekunde bei ruhigem Tempo. */
export function sprechdauerSchaetzen(text) {
  const zeichen = String(text).replace(/\s+/g, " ").trim().length;
  return Math.max(1.6, zeichen / 14 + 0.5);
}

/* Wörter gleichmäßig über die Dauer verteilen (Fallback ohne Zeitmarken). */
export function woerterVerteilen(text, dauer, start = 0) {
  const woerter = String(text).split(/\s+/).filter(Boolean);
  const gewichte = woerter.map((w) => w.length + 2);
  const summe = gewichte.reduce((a, b) => a + b, 0);
  let t = start;
  return woerter.map((w, i) => { const d = (gewichte[i] / summe) * dauer; const o = { wort: w, von: t, bis: t + d }; t += d; return o; });
}

/* Zeichen-Alignment von ElevenLabs → Wortzeiten. */
function alignmentZuWoertern(alignment, text, start) {
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

/**
 * Spricht einen Text. Rückgabe: { datei (mp3|null), dauer, woerter:[{wort,von,bis}], echt }
 */
export async function sprechen(text, zielDatei, opt = {}) {
  const key = CONFIG.reel.elevenlabsKey;
  const stimme = opt.stimme || CONFIG.reel.stimme;
  if (key) {
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(stimme)}/with-timestamps?output_format=mp3_44100_128`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "xi-api-key": key, "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        model_id: CONFIG.reel.modell,
        language_code: "de",
        voice_settings: { stability: 0.45, similarity_boost: 0.8, style: 0.35, use_speaker_boost: true, speed: 1.0 },
      }),
    });
    if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const json = await res.json();
    fs.mkdirSync(path.dirname(zielDatei), { recursive: true });
    fs.writeFileSync(zielDatei, Buffer.from(json.audio_base64, "base64"));
    const dauer = audioDauer(zielDatei) || sprechdauerSchaetzen(text);
    const woerter = alignmentZuWoertern(json.alignment || json.normalized_alignment || {}, text, 0) || woerterVerteilen(text, dauer);
    return { datei: zielDatei, dauer, woerter, echt: true };
  }
  const dauer = sprechdauerSchaetzen(text);
  return { datei: null, dauer, woerter: woerterVerteilen(text, dauer), echt: false };
}
