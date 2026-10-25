"""Reels (1080×1920) und Karussell „Kein Selbstläufer“ für den Leadmagnet.
Je Szene ein Standbild mit großer Aussage + Sprecherin (ElevenLabs, Stimme Laura, Cache je Text).
Aufruf: python3 tools/leadmagnet/szene.py && python3 tools/leadmagnet/reels.py
Fakten: 121 von 421 Protokollen mit mindestens einem Durchgefallenen (≈ 29 %, „fast jedes dritte“);
§ 25 Abs. 2 DVStB (Zulassung bis 4,5), § 28 Abs. 1 Satz 2 DVStB (bestanden, wenn (schriftlich + mündlich) / 2 ≤ 4,15)."""
import hashlib, json, os, subprocess, urllib.request
from insta import Folie, F, HAND, W, INNEN, BREITE, BUILD, ZIEL, INK, LILA, ORANGE, GELB, GRUEN, ROT, GRAU, WEISS, \
    HELLGRUEN, HELLROT, HELLLILA, pdf_mockup, cta_folie
from PIL import ImageDraw

HIER = os.path.dirname(os.path.abspath(__file__))
RH = 1920
CACHE = os.path.join(BUILD, "tts")
VOICE, MODEL = "zKHQdbB8oaQ7roNTiDTK", "eleven_v4"     # Laura, wie in social/op/stimme.py
SETT = {"stability": 0.42, "similarity_boost": 0.82, "style": 0.4, "use_speaker_boost": True, "speed": 1.12}


def sprich(text):
    os.makedirs(CACHE, exist_ok=True)
    pfad = os.path.join(CACHE, hashlib.sha1(json.dumps([VOICE, MODEL, SETT, text]).encode()).hexdigest()[:16] + ".mp3")
    if not os.path.exists(pfad):
        body = {"text": text, "model_id": MODEL, "language_code": "de", "voice_settings": SETT}
        req = urllib.request.Request(f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE}?output_format=mp3_44100_128",
                                     data=json.dumps(body).encode(), headers={"Content-Type": "application/json"})
        open(pfad, "wb").write(urllib.request.urlopen(req, timeout=180).read())
    return pfad


def dauer(mp3):
    return float(subprocess.check_output(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", mp3]))


# -------------------------------------------------------------------- Bausteine für Reel-Szenen
def szene_gross(zeilen, unter=None, figur=None, szene=False, akzent=None, pille=None):
    """Große Aussage (Schlagzeile mit Marker), optional Untertitel, Figur oder Prüfungsszene."""
    f = Folie(1, 1, RH)
    y = 300
    if pille:
        f.pille(pille, INNEN, 230, fill=akzent or GELB, farbe=WEISS if akzent in (ROT, LILA) else INK, groesse=36)
        y = 360
    y = f.schlagzeile(zeilen, y, 112)
    if unter:
        y = f.text(unter, y + 30, "Bold", 50, GRAU, zeile=1.25)
    if szene:
        f.bild(os.path.join(BUILD, "szene.png"), "mitte", 0, w=BREITE + 60, unten=RH - 260)
    elif figur:
        f.bild(os.path.join(BUILD, figur + ".png"), "mitte", 0, h=min(760, RH - 260 - y - 40), unten=RH - 220)
    return f


def szene_kasten(etikett, text, fill, farbe, figur=None, oben=None, gewicht="Bold"):
    f = Folie(1, 1, RH)
    if oben:
        f.d.text((INNEN, 260), oben, font=HAND(76), fill=ORANGE)
    y = f.kasten(etikett, text, 400, fill, farbe, gewicht, 52)
    if figur:
        f.bild(os.path.join(BUILD, figur + ".png"), "mitte", 0, h=min(720, RH - 240 - y - 60), unten=RH - 220)
    return f


def szene_rechnung():
    f = Folie(1, 1, RH)
    f.d.text((INNEN, 260), "Die Rechnung", font=HAND(76), fill=ORANGE)
    f.karte(INNEN, 400, W - INNEN, 900, fill=WEISS)
    f.d.text((W / 2, 520), "(4,5 + 3,8) : 2", font=F("Black", 110), fill=INK, anchor="mm")
    f.d.text((W / 2, 690), "= 4,15", font=F("Black", 150), fill=ROT, anchor="mm")
    f.d.text((W / 2, 830), "gerade noch bestanden", font=F("Bold", 48), fill=GRAU, anchor="mm")
    f.text("§ 28 Abs. 1 Satz 2 DVStB: bestanden, wenn der Durchschnitt aus schriftlicher und mündlicher Note 4,15 nicht übersteigt.",
           980, "Bold", 40, GRAU, zeile=1.3)
    return f


def szene_cta():
    f = Folie(1, 1, RH)
    f.d.text((INNEN, 240), "Gratis-PDF", font=HAND(80), fill=ORANGE)
    y = f.schlagzeile([("Die", 0), ("10", 1), ("häufigsten", 0), ("Fehler", 1), ("der", 0), ("Mündlichen", 0)], 340, 112)
    y = f.text("Aus über 400 echten Prüfungsprotokollen – mit Prüfungsszenen und Lösungen.", y + 20, "Bold", 48, GRAU)
    f.bild(pdf_mockup(560, -5), 40, y + 30)
    f.bild(os.path.join(BUILD, "f2.png"), W - INNEN - 300, 0, h=640, unten=RH - 330)
    by = RH - 300
    f.d.rounded_rectangle((INNEN + 8, by + 8, W - INNEN + 8, by + 128), 26, fill=INK)
    f.d.rounded_rectangle((INNEN, by, W - INNEN, by + 120), 26, fill=LILA, outline=INK, width=5)
    f.d.text((W / 2, by + 60), "Link in der Bio", font=F("Black", 58), fill=WEISS, anchor="mm")
    return f


# -------------------------------------------------------------------- Reels
REELS = {
    "reel-01-was-dir-keiner-sagt": [
        (lambda: szene_gross([("Was", 0), ("dir", 0), ("keiner", 1), ("über", 0), ("die", 0), ("Mündliche", 0), ("sagt", 0)], szene=True),
         "Was dir keiner über die mündliche Steuerberaterprüfung sagt."),
        (lambda: szene_gross([("Sie", 0), ("ist", 0), ("kein", 1), ("Selbstläufer.", 1)], figur="f5"),
         "Sie ist kein Selbstläufer."),
        (lambda: szene_gross([("Fast", 0), ("jedes", 0), ("3.", 1), ("Protokoll:", 0)], "Mindestens ein Prüfling ist durchgefallen. Ausgewertet: über 400 echte Prüfungsprotokolle.", "f1", pille="Unsere Auswertung", akzent=ROT),
         "Wir haben über 400 echte Prüfungsprotokolle ausgewertet. In fast jedem dritten ist mindestens ein Prüfling durchgefallen."),
        (lambda: szene_gross([("Mit", 0), ("4,5", 1), ("brauchst", 0), ("du", 0), ("eine", 0), ("3,8", 1)], "im Schnitt in der Mündlichen. Sonst ist die Prüfung nicht bestanden.", "f3"),
         "Und wer mit einer Vornote von 4,5 kommt, braucht in der Mündlichen im Schnitt eine 3,8. Sonst ist die Prüfung nicht bestanden."),
        (lambda: szene_rechnung(), "Denn bestanden ist nur, wer im Durchschnitt aus schriftlicher und mündlicher Prüfung höchstens auf 4,15 kommt."),
        (lambda: szene_gross([("Oft", 0), ("scheitert", 0), ("es", 0), ("an", 0), ("vermeidbaren", 1), ("Fehlern", 1)], figur="f4"),
         "Und gescheitert wird oft nicht am Fachwissen, sondern an Fehlern, die man vermeiden kann."),
        (lambda: szene_cta(), "Die zehn häufigsten Fehler aus den Protokollen gibt es als Gratis-PDF. Link in der Bio."),
    ],
    "reel-02-der-haeufigste-fehler": [
        (lambda: szene_gross([("Dieser", 0), ("Fehler", 1), ("kann", 0), ("dich", 0), ("das", 0), ("Examen", 1), ("kosten", 0)], szene=True),
         "Dieser Fehler kann dich in der Mündlichen das Examen kosten."),
        (lambda: szene_gross([("Platz", 0), ("1", 1), ("von", 0), ("10", 0)], "Wir fanden ihn in mehr als jedem zweiten von über 400 Prüfungsprotokollen.", "f1", pille="Über 400 Protokolle ausgewertet"),
         "Wir fanden ihn in mehr als jedem zweiten von über 400 Prüfungsprotokollen."),
        (lambda: szene_kasten("PRÜFER", "Ihr Mandant hat ein vermietetes Mehrfamilienhaus aus seinem Privatvermögen sieben Jahre nach dem Kauf verkauft. Was sagen Sie ihm?", HELLLILA, LILA, "f4", "Die Frage"),
         "Die Frage: Ihr Mandant hat ein vermietetes Mehrfamilienhaus sieben Jahre nach dem Kauf verkauft. Was sagen Sie ihm?"),
        (lambda: szene_kasten("SCHWACH", "„Erst einmal gehört das Haus zum Privatvermögen, dann müssen wir die Einkünfte aus Vermietung prüfen, die AfA …“", HELLROT, ROT, "f3", "So geht's schief", "Regular"),
         "Viele fangen irgendwo an. Privatvermögen, Vermietung, AfA. Und der Prüfer wartet."),
        (lambda: szene_kasten("STARK", "„Entscheidend ist § 23 Abs. 1 Satz 1 Nr. 1 EStG: Zwischen Anschaffung und Veräußerung liegen nicht mehr als zehn Jahre. Der Gewinn ist steuerpflichtig.“", HELLGRUEN, GRUEN, "f2", "So geht's richtig", "Regular"),
         "Richtig ist: Erst die Kernfrage. Paragraf 23 Einkommensteuergesetz. Weniger als zehn Jahre, also ist der Gewinn steuerpflichtig."),
        (lambda: szene_cta(), "Die anderen neun Fehler stehen im Gratis-PDF. Link in der Bio."),
    ],
    "reel-03-nur-formsache": [
        (lambda: szene_gross([("Die", 0), ("Mündliche", 0), ("ist", 0), ("nur", 0), ("Formsache?", 1)], szene=True),
         "Du denkst, die Mündliche ist nur Formsache?"),
        (lambda: szene_gross([("Zugelassen", 0), ("bis", 0), ("4,5", 1)], "§ 25 Abs. 2 DVStB", "f3"),
         "Zur Mündlichen zugelassen wirst du bis zu einer Note von 4,5."),
        (lambda: szene_gross([("Bestanden", 0), ("erst", 0), ("bis", 0), ("4,15", 1)], "§ 28 Abs. 1 Satz 2 DVStB – Durchschnitt aus schriftlicher und mündlicher Note", "f4"),
         "Bestanden hast du aber erst, wenn der Durchschnitt aus schriftlich und mündlich höchstens 4,15 ist."),
        (lambda: szene_rechnung(), "Mit einer 4,5 brauchst du in der Mündlichen also im Schnitt eine 3,8."),
        (lambda: szene_gross([("Kurzvortrag", 0), ("+", 0), ("6", 1), ("Prüfungsrunden", 0)], "§ 26 Abs. 3 DVStB – rund fünf Stunden Prüfungstag", "f1"),
         "Dazu ein Kurzvortrag und sechs Prüfungsrunden. Rund fünf Stunden lang."),
        (lambda: szene_gross([("Fast", 0), ("jedes", 0), ("3.", 1), ("Protokoll:", 0)], "Mindestens ein Prüfling ist durchgefallen.", "f5", pille="Über 400 Protokolle ausgewertet", akzent=ROT),
         "Und in fast jedem dritten von über 400 Protokollen ist mindestens einer durchgefallen."),
        (lambda: szene_cta(), "Damit dir das nicht passiert: Die zehn häufigsten Fehler als Gratis-PDF. Link in der Bio."),
    ],
}


def reel(name, szenen):
    ordner = os.path.join(ZIEL, "06-reels", name)
    os.makedirs(ordner, exist_ok=True)
    teile = []
    for i, (bau, text) in enumerate(szenen):
        png = os.path.join(ordner, f"szene-{i + 1:02d}.png")
        bau().speichern(png)
        mp3 = sprich(text)
        d = dauer(mp3) + 0.35
        teil = os.path.join(BUILD, f"{name}-{i}.mp4")
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-loop", "1", "-i", png, "-i", mp3,
                        "-filter_complex", f"[0:v]scale=1080:1920,zoompan=z='min(zoom+0.0006,1.04)':d={int(d * 30)}:s=1080x1920:fps=30[v];[1:a]apad=pad_dur=0.35[a]",
                        "-map", "[v]", "-map", "[a]", "-t", f"{d:.2f}", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-preset", "veryfast",
                        "-c:a", "aac", "-ar", "44100", teil], check=True)
        teile.append(teil)
    liste = os.path.join(BUILD, name + ".txt")
    open(liste, "w").write("".join(f"file '{t}'\n" for t in teile))
    ziel = os.path.join(ordner, name + ".mp4")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", liste, "-c", "copy", ziel], check=True)
    print(name, f"{dauer(ziel):.1f} s")


# -------------------------------------------------------------------- Karussell 5: Kein Selbstläufer
def karussell_ernst():
    n, ordner = 7, os.path.join(ZIEL, "07-kein-selbstlaeufer")
    f = Folie(1, n)
    f.pille("Was dir keiner sagt", INNEN, 150, fill=ROT, farbe=WEISS)
    y = f.schlagzeile([("Die", 0), ("Mündliche", 0), ("ist", 0), ("kein", 1), ("Selbstläufer", 1)], 260, 120)
    f.text("Warum so viele kurz vor dem Ziel scheitern – mit Zahlen aus über 400 Prüfungsprotokollen.", y + 20, "Bold", 40, GRAU)
    f.bild(os.path.join(BUILD, "szene.png"), "mitte", 0, w=BREITE + 40, unten=f.h - 150)
    f.weiter(); f.speichern(os.path.join(ordner, "01.png"))

    f = Folie(2, n)
    f.d.text((INNEN, 150), "Zahl 1", font=HAND(64), fill=ORANGE)
    f.d.text((INNEN, 240), "Fast jedes", font=F("Black", 90), fill=INK)
    f.d.text((INNEN, 330), "3. Protokoll", font=F("Black", 150), fill=ROT)
    y = f.text("aus über 400 ausgewerteten: Mindestens ein Prüfling ist durchgefallen.", 540, "Black", 54, zeile=1.2)
    f.bild(os.path.join(BUILD, "f5.png"), W - INNEN - 220, 0, h=420, unten=f.h - 110)
    f.weiter(); f.speichern(os.path.join(ordner, "02.png"))

    f = Folie(3, n)
    f.d.text((INNEN, 150), "Zahl 2", font=HAND(64), fill=ORANGE)
    y = f.text("Zur Mündlichen zugelassen wirst du bis 4,5. Bestanden hast du aber erst bei 4,15.", 240, "Black", 60, zeile=1.18)
    y = f.text("§ 25 Abs. 2, § 28 Abs. 1 Satz 2 DVStB", y + 16, "Bold", 34, GRAU)
    f.karte(INNEN, y + 40, W - INNEN, y + 330, fill=WEISS)
    f.d.text((W / 2, y + 130), "(4,5 + 3,8) : 2 = 4,15", font=F("Black", 74), fill=INK, anchor="mm")
    f.d.text((W / 2, y + 240), "Mit 4,5 brauchst du im Schnitt eine 3,8.", font=F("Bold", 42), fill=ROT, anchor="mm")
    f.weiter(); f.speichern(os.path.join(ordner, "03.png"))

    f = Folie(4, n)
    f.d.text((INNEN, 150), "Zahl 3", font=HAND(64), fill=ORANGE)
    f.d.text((INNEN, 230), "6", font=F("Black", 260), fill=LILA)
    y = f.text("Prüfungsrunden plus Kurzvortrag. Jeder Prüfer prüft einzeln – rund fünf Stunden lang.", 540, "Black", 54, zeile=1.2)
    f.text("§ 26 Abs. 3 DVStB", y + 16, "Bold", 34, GRAU)
    f.bild(os.path.join(BUILD, "f1.png"), W - INNEN - 220, 0, h=420, unten=f.h - 110)
    f.weiter(); f.speichern(os.path.join(ordner, "04.png"))

    f = Folie(5, n)
    f.d.text((INNEN, 150), "Das Gefährliche", font=HAND(64), fill=ORANGE)
    y = f.text("Gescheitert wird oft nicht am Fachwissen – sondern an Fehlern, die sich vermeiden lassen.", 240, "Black", 60, zeile=1.18)
    y = f.kasten("ZUM BEISPIEL", "Die Frage nicht durchschauen, aus dem Kopf statt aus dem Gesetz antworten, schweigen statt laut denken.", y + 40, HELLROT, ROT, "Bold", 42)
    f.weiter(); f.speichern(os.path.join(ordner, "05.png"))

    f = Folie(6, n)
    f.d.text((INNEN, 150), "Die gute Nachricht", font=HAND(64), fill=GRUEN)
    y = f.text("Diese Fehler wiederholen sich. Wer sie kennt, kann sie vermeiden.", 240, "Black", 64, zeile=1.18)
    f.text("Wir haben die 10 häufigsten aus hunderten Protokollen gesammelt – mit Prüfungsszene und Lösung.", y + 30, "Bold", 42, GRAU)
    f.bild(os.path.join(BUILD, "f3.png"), W - INNEN - 220, 0, h=420, unten=f.h - 110)
    f.weiter(); f.speichern(os.path.join(ordner, "06.png"))

    f = Folie(7, n); cta_folie(f); f.speichern(os.path.join(ordner, "07.png"))


if __name__ == "__main__":
    karussell_ernst()
    for name, szenen in REELS.items():
        reel(name, szenen)
