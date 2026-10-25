"""Leadmagnet-PDF: Die 10 größten Fehler in der mündlichen Steuerberaterprüfung.

Inhalt aus der Auswertung echter Prüfungsprotokolle (Drive), Figuren aus der Open-Peeps-Bibliothek.
Aufruf: python3 tools/leadmagnet/szene.py && python3 tools/leadmagnet/pdf_muendliche.py
        -> landingpage/10-fehler-muendliche.pdf
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.lib.utils import ImageReader, simpleSplit
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

from inhalt_muendliche import ANZAHL, ABLAUF, GUT_ZU_WISSEN, FEHLER, THEMEN, CHECKLISTE, SZENEN

HIER = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HIER, "..", "..", "landingpage")
for n in ("Regular", "Bold", "Black"):
    pdfmetrics.registerFont(TTFont(f"N-{n}", os.path.join(HIER, "fonts", f"Nunito-{n}.ttf")))
pdfmetrics.registerFont(TTFont("Hand", os.path.join(HIER, "fonts", "Caveat.ttf")))

INK, PAPER, LILA, ORANGE, GELB, GRUEN, GRAU, BLAU = map(HexColor, [
    "#16161d", "#fffbe6", "#7c5cff", "#ff7a45", "#ffde59", "#23d98b", "#5c5c68", "#2d5be3"])
HELLGRUEN, HELLLILA = HexColor("#e3fbef"), HexColor("#efeaff")
W, H = A4
M = 46                      # Seitenrand
B = W - 2 * M               # Satzbreite

c = canvas.Canvas(os.path.join(OUT, "10-fehler-muendliche.pdf"), pagesize=A4)
c.setTitle("Die 10 größten Fehler in der mündlichen Steuerberaterprüfung")
c.setAuthor("examenscampus")
seite = [0]


def neue_seite():
    if seite[0]:
        c.showPage()
    seite[0] += 1
    c.setFillColor(PAPER); c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFont("N-Black", 10); c.setFillColor(INK); c.drawString(M, H - 34, "examens")
    c.setFillColor(LILA); c.drawString(M + c.stringWidth("examens", "N-Black", 10), H - 34, "campus")
    if seite[0] > 1:
        c.setFont("N-Regular", 8.5); c.setFillColor(GRAU)
        c.drawRightString(W - M, H - 34, "Die 10 größten Fehler in der Mündlichen")
        c.drawCentredString(W / 2, 26, str(seite[0]))


def absatz(text, x, y, breite, font="N-Regular", groesse=10.5, farbe=GRAU, zeile=None):
    zeile = zeile or groesse * 1.42
    c.setFont(font, groesse); c.setFillColor(farbe)
    for z in simpleSplit(text, font, groesse, breite):
        c.drawString(x, y, z); y -= zeile
    return y


def hoehe(text, breite, font="N-Regular", groesse=10.5, zeile=None):
    return len(simpleSplit(text, font, groesse, breite)) * (zeile or groesse * 1.42)


def karte(x, y, w, h, fill=white, schatten=True, r=12):
    """y = Oberkante."""
    c.setStrokeColor(INK); c.setLineWidth(2)
    if schatten:
        c.setFillColor(INK); c.roundRect(x + 4, y - h - 4, w, h, r, fill=1, stroke=0)
    c.setFillColor(fill); c.roundRect(x, y - h, w, h, r, fill=1, stroke=1)


def marker(text, x, y, font, groesse, farbe=GELB):
    w = c.stringWidth(text, font, groesse)
    c.setFillColor(farbe); c.rect(x - 3, y - groesse * 0.18, w + 6, groesse * 0.5, fill=1, stroke=0)
    c.setFillColor(INK); c.setFont(font, groesse); c.drawString(x, y, text)
    return w


def ueberschrift(text, y, hand=None):
    if hand:
        c.setFont("Hand", 19); c.setFillColor(ORANGE); c.drawString(M, y + 24, hand)
    c.setFont("N-Black", 25); c.setFillColor(INK); c.drawString(M, y, text)
    return y - 26


def bild(pfad, x, y, h=None, w=None):
    img = ImageReader(pfad); iw, ih = img.getSize()
    if h is None:
        h = w * ih / iw
    w = h * iw / ih
    c.drawImage(img, x, y, width=w, height=h, mask="auto")
    return w, h


# ---------------------------------------------------------------- 1 Titel
neue_seite()
c.setFont("Hand", 24); c.setFillColor(ORANGE); c.drawString(M, H - 112, "Gratis-Leitfaden für deine Mündliche")
y = H - 160
c.setFont("N-Black", 44); c.setFillColor(INK); c.drawString(M, y, "Die 10 größten")
marker("Fehler", M, y - 52, "N-Black", 44)
c.setFillColor(INK); c.drawString(M + c.stringWidth("Fehler ", "N-Black", 44), y - 52, "in der")
c.drawString(M, y - 104, "Mündlichen")
y = absatz("… und wie du sie vermeidest. Ausgewertet aus "
           f"{ANZAHL} echten Protokollen der mündlichen Steuerberaterprüfung.",
           M, y - 140, 330, groesse=13, farbe=GRAU, zeile=19)
bild(os.path.join(HIER, "build", "szene.png"), M - 6, 150, w=B + 12)

# ---------------------------------------------------------------- 2 Ablauf
neue_seite()
y = ueberschrift("So läuft die Mündliche ab", H - 100, "Damit dich nichts überrascht")
y -= 18
for i, (zeit, titel, text) in enumerate(ABLAUF):
    h = 26 + hoehe(text, B - 120, groesse=10)
    c.setFillColor(LILA if i % 2 == 0 else ORANGE); c.setStrokeColor(INK); c.setLineWidth(2)
    c.circle(M + 14, y - 12, 13, fill=1, stroke=1)
    c.setFillColor(white); c.setFont("N-Black", 11); c.drawCentredString(M + 14, y - 16, str(i + 1))
    if i < len(ABLAUF) - 1:
        c.setStrokeColor(INK); c.setLineWidth(2); c.setDash(2, 3); c.line(M + 14, y - 26, M + 14, y - h - 8); c.setDash()
    c.setFont("N-Black", 12.5); c.setFillColor(INK); c.drawString(M + 40, y - 16, titel)
    c.setFont("N-Bold", 9.5); c.setFillColor(LILA); c.drawRightString(W - M, y - 16, zeit)
    absatz(text, M + 40, y - 32, B - 120, groesse=10)
    y -= h + 14
y -= 6
inner = sum(hoehe(t, B - 40, groesse=10) + 6 for t in GUT_ZU_WISSEN)
karte(M, y, B, inner + 48, fill=HELLLILA)
c.setFont("N-Black", 13); c.setFillColor(INK); c.drawString(M + 20, y - 26, "Gut zu wissen")
yy = y - 46
for t in GUT_ZU_WISSEN:
    c.setFillColor(LILA); c.circle(M + 24, yy + 3.5, 3, fill=1, stroke=0)
    yy = absatz(t, M + 34, yy, B - 54, groesse=10, farbe=INK) - 6

# ---------------------------------------------------------------- Fehler: je eine Seite
FIGUREN = ["f1", "f2", "f3", "f4", "f5"]
ROT_TEXT, GRUEN_TEXT = HexColor("#c4302b"), HexColor("#0e8a55")
TS, ZS = 12, 18          # Textgröße, Zeilenabstand


def zeile_mit_marke(marke, farbe, text, y, font="N-Regular"):
    c.setFillColor(farbe); c.roundRect(M + 20, y - 14, 58, 19, 9.5, fill=1, stroke=0)
    c.setFillColor(white); c.setFont("N-Black", 8.5); c.drawCentredString(M + 49, y - 8, marke)
    return absatz(text, M + 90, y - 2, B - 112, font, TS, INK, ZS)


for n, (f, sz) in enumerate(zip(FEHLER, SZENEN), start=1):
    neue_seite()
    c.setFillColor(ORANGE); c.setStrokeColor(INK); c.setLineWidth(2.5)
    c.circle(M + 28, H - 108, 28, fill=1, stroke=1)
    c.setFillColor(white); c.setFont("N-Black", 26); c.drawCentredString(M + 28, H - 117, str(n))
    c.setFont("Hand", 19); c.setFillColor(ORANGE); c.drawString(M + 70, H - 94, f"Fehler {n} von 10")
    c.setFont("N-Black", 23); c.setFillColor(INK)
    titel = simpleSplit(f["titel"], "N-Black", 23, B - 74)
    for k, z in enumerate(titel):
        c.drawString(M + 70, H - 122 - k * 27, z)
    y = H - 122 - (len(titel) - 1) * 27 - 38
    y = absatz(f["text"], M, y, B, groesse=TS, farbe=GRAU, zeile=ZS) - 14

    # So kann es klingen: Prüferfrage, schwache und starke Antwort
    hf = hoehe(sz["frage"], B - 112, "N-Bold", TS, ZS)
    hs = hoehe(sz["schwach"], B - 112, groesse=TS, zeile=ZS)
    ht = hoehe(sz["stark"], B - 112, groesse=TS, zeile=ZS)
    kh = 40 + hf + 12 + hs + 12 + ht + 14
    karte(M, y, B, kh)
    c.setFont("N-Black", 9); c.setFillColor(LILA); c.drawString(M + 20, y - 22, "SO KANN ES IN DER PRÜFUNG KLINGEN")
    yy = zeile_mit_marke("PRÜFER", LILA, sz["frage"], y - 42, "N-Bold") - 12
    yy = zeile_mit_marke("SCHWACH", ROT_TEXT, sz["schwach"], yy) - 12
    zeile_mit_marke("STARK", GRUEN_TEXT, sz["stark"], yy)
    y -= kh + 20

    # Zitat aus einem Protokoll
    zitat = "„" + f["zitat"] + "“"
    zh = hoehe(zitat, B - 80, "N-Bold", 13, 19) + 44
    c.setFillColor(PAPER); c.setStrokeColor(INK); c.setLineWidth(1.5)
    c.roundRect(M, y - zh, B, zh, 12, fill=1, stroke=1)
    c.setFont("N-Black", 44); c.setFillColor(ORANGE); c.drawString(M + 14, y - zh / 2 - 10, "„")
    c.setFont("N-Bold", 8.5); c.setFillColor(GRAU); c.drawString(M + 56, y - 18, "AUS EINEM PRÜFUNGSPROTOKOLL")
    absatz(zitat, M + 56, y - 36, B - 80, "N-Bold", 13, INK, 19)
    y -= zh + 16

    # So machst du es besser
    bh = hoehe(f["besser"], B - 48, groesse=TS, zeile=ZS) + 46
    c.setFillColor(HELLGRUEN); c.setStrokeColor(GRUEN_TEXT); c.setLineWidth(1.5)
    c.roundRect(M, y - bh, B, bh, 12, fill=1, stroke=1)
    c.setFont("N-Black", 9); c.setFillColor(GRUEN_TEXT); c.drawString(M + 24, y - 20, "SO MACHST DU ES BESSER")
    absatz(f["besser"], M + 24, y - 38, B - 48, groesse=TS, farbe=INK, zeile=ZS)
    y -= bh + 16

    # Merke
    figbreite = 120
    mh = hoehe(sz["merke"], B - 70 - figbreite, "Hand", 21, 24) + 22
    c.setFillColor(GELB); c.setStrokeColor(INK); c.setLineWidth(2)
    c.roundRect(M, y - mh, B - figbreite - 20, mh, 12, fill=1, stroke=1)
    absatz(sz["merke"], M + 22, y - 26, B - 70 - figbreite, "Hand", 21, INK, 24)
    fig = os.path.join(HIER, "build", FIGUREN[(n - 1) % len(FIGUREN)] + ".png")
    fh = min(y - 50, 260)
    if fh > 90:
        bild(fig, W - M - figbreite + 10, 44, h=fh)

# ---------------------------------------------------------------- Themen + Checkliste
neue_seite()
y = ueberschrift("Was wirklich geprüft wird", H - 100, "Häufigkeit in den Protokollen") - 22
balken_x, balken_w = M + 150, B - 200
for name, pct in THEMEN:
    c.setFont("N-Bold", 10.5); c.setFillColor(INK); c.drawRightString(balken_x - 12, y - 4, name)
    c.setFillColor(HexColor("#ece6d2")); c.roundRect(balken_x, y - 9, balken_w, 14, 7, fill=1, stroke=0)
    c.setFillColor(LILA if pct >= 70 else ORANGE if pct >= 40 else GRUEN)
    c.roundRect(balken_x, y - 9, max(14, balken_w * pct / 100), 14, 7, fill=1, stroke=0)
    c.setFont("N-Black", 10); c.setFillColor(INK); c.drawString(balken_x + balken_w + 8, y - 5, f"{pct} %")
    y -= 24
y -= 24
y = ueberschrift("Checkliste für die letzten Wochen", y) - 16
for punkt in CHECKLISTE:
    c.setStrokeColor(INK); c.setLineWidth(2); c.setFillColor(white)
    c.roundRect(M, y - 4, 15, 15, 3, fill=1, stroke=1)
    y = absatz(punkt, M + 26, y, B - 30, groesse=11, farbe=INK) - 7

# ---------------------------------------------------------------- Schluss
neue_seite()
held = os.path.join(OUT, "held.webp")
bild(held, W - M - 190, 90, h=520)
y = ueberschrift("Du schaffst das.", H - 160, "Zum Schluss")
y = absatz("Die meisten Kommissionen prüfen auf Bestehen. Wer strukturiert antwortet, Normen nennt "
           "und nach einer schwachen Runde einfach weitermacht, hat beste Chancen.",
           M, y - 10, 280, groesse=12.5, farbe=GRAU, zeile=18)
y = absatz("In den nächsten Tagen bekommst du per E-Mail weitere Hilfen: Kurzvortrag-Themen mit "
           "Lösungsskizze, echte Prüferfragen und eine Checkliste für den Prüfungstag.",
           M, y - 14, 280, groesse=12.5, farbe=GRAU, zeile=18)
c.setFont("Hand", 26); c.setFillColor(LILA); c.drawString(M, y - 40, "Viel Erfolg! Dein examenscampus")
c.showPage()
c.save()
print("ok", seite[0], "Seiten")
