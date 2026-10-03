"""Vertonung der Reels mit ElevenLabs (Stimme Laura, eleven_v4) samt Wortzeiten.

Kosten: nur das Zeichenkontingent des ElevenLabs-Abos; Ergebnisse werden je Text zwischengespeichert, ein erneutes
Rendern desselben Textes kostet nichts. Der Proxy der Laufumgebung bzw. ELEVENLABS_API_KEY authentifiziert.
Die Gesamtlänge wird mit atempo (tonhöhenneutral) auf höchstens ZIEL_S gestrafft, höchstens um MAX_TEMPO.
"""
import base64, hashlib, json, os, subprocess, urllib.request, wave
import numpy as np
import imageio_ffmpeg
import opkern

VOICE = os.environ.get("OP_STIMME", "zKHQdbB8oaQ7roNTiDTK")      # Laura
MODEL = os.environ.get("OP_STIMM_MODELL", "eleven_v4")
SETT = {"stability": 0.42, "similarity_boost": 0.82, "style": 0.4, "use_speaker_boost": True, "speed": 1.2}
SR = 48000
ZIEL_S, MAX_TEMPO = 44.4, 1.12
CACHE = os.path.join(opkern.RES, "cache", "tts")
os.makedirs(CACHE, exist_ok=True)
FF = imageio_ffmpeg.get_ffmpeg_exe()


def _tts(text, vor, nach):
    body = {"text": text, "model_id": MODEL, "language_code": "de", "voice_settings": SETT}
    if vor: body["previous_text"] = vor
    if nach: body["next_text"] = nach
    kopf = {"Content-Type": "application/json"}
    if os.environ.get("ELEVENLABS_API_KEY"): kopf["xi-api-key"] = os.environ["ELEVENLABS_API_KEY"]
    req = urllib.request.Request(f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE}/with-timestamps?output_format=mp3_44100_128",
                                 data=json.dumps(body).encode(), headers=kopf)
    return json.load(urllib.request.urlopen(req, timeout=180))


def _trocken(text):
    """Ohne API: Zeichenzeiten geschätzt (≈ 11,5 Zeichen/s wie Laura bei speed 1.2), nur zum Prüfen von Aufbau und Länge."""
    zeichen, st, en, t = list(text), [], [], 0.0
    for ch in zeichen:
        st.append(t); t += 1 / 11.5; en.append(t)
    return None, {"characters": zeichen, "character_start_times_seconds": st, "character_end_times_seconds": en}


def _segment(text, vor, nach):
    if os.environ.get("OP_TTS_TROCKEN"):
        return _trocken(text)
    key = hashlib.sha1(json.dumps([VOICE, MODEL, SETT, text, vor, nach]).encode()).hexdigest()[:16]
    js, mp3 = os.path.join(CACHE, key + ".json"), os.path.join(CACHE, key + ".mp3")
    if not os.path.exists(js):
        r = _tts(text, vor, nach)
        open(mp3, "wb").write(base64.b64decode(r["audio_base64"]))
        json.dump({"text": text, "al": r.get("alignment") or r.get("normalized_alignment")}, open(js, "w"), ensure_ascii=False)
    return mp3, json.load(open(js))["al"]


def vertonen(segmente, ziel_wav, pausen=None):
    """segmente: [(id, text)]. Schreibt ziel_wav und gibt {dauer, segmente:[{name, start, ende, woerter}]} zurück."""
    roh = []
    for i, (name, text) in enumerate(segmente):
        mp3, al = _segment(text, segmente[i - 1][1] if i else None, segmente[i + 1][1] if i + 1 < len(segmente) else None)
        roh.append((name, text, mp3, al))
    pausen = pausen or {}
    def laenge(tempo):
        t = 0.15
        for name, _, _, al in roh:
            st, en = al["character_start_times_seconds"], al["character_end_times_seconds"]
            t += (en[-1] + 0.12 - max(0, st[0] - 0.04)) / tempo + pausen.get(name, 0.25)
        return t
    tempo = 1.0
    while laenge(tempo) > ZIEL_S and tempo < MAX_TEMPO: tempo = round(tempo + 0.01, 2)
    teile, t, segs = [np.zeros(int(0.15 * SR), np.int16)], 0.15, []
    for name, text, mp3, al in roh:
        st = [x / tempo for x in al["character_start_times_seconds"]]
        en = [x / tempo for x in al["character_end_times_seconds"]]
        if mp3 is None:
            pcm = np.zeros(int((en[-1] + 0.2) * SR), np.int16)
        else:
            pcm = np.frombuffer(subprocess.run([FF, "-v", "error", "-i", mp3, "-af", f"atempo={tempo}", "-ac", "1", "-ar", str(SR), "-f", "s16le", "-"],
                                               capture_output=True, check=True).stdout, np.int16)
        a0 = max(0.0, st[0] - 0.04); a1 = en[-1] + 0.12
        pcm = pcm[int(a0 * SR):int(a1 * SR)]
        woerter, cur, a, last = [], "", None, 0
        for ch, s, e in zip(al["characters"], st, en):
            if ch.isspace():
                if cur: woerter.append((cur, a - a0 + t, last - a0 + t)); cur = ""
                continue
            if not cur: a = s
            cur += ch; last = e
        if cur: woerter.append((cur, a - a0 + t, last - a0 + t))
        dauer = len(pcm) / SR
        segs.append(dict(name=name, text=text, start=round(t, 3), ende=round(t + dauer, 3), woerter=woerter))
        teile.append(pcm); t += dauer
        p = pausen.get(name, 0.25); teile.append(np.zeros(int(p * SR), np.int16)); t += p
    audio = np.concatenate(teile)
    audio = (audio.astype(np.float32) * (0.89 * 32767 / max(1, np.abs(audio).max()))).astype(np.int16) if np.abs(audio).max() else audio
    w = wave.open(ziel_wav, "wb"); w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes(audio.tobytes()); w.close()
    return dict(dauer=round(t, 3), tempo=tempo, segmente=segs)
