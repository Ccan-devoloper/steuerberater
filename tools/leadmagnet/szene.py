"""Prüfungsszene wie in den Mündlichen-Videos: Ausschuss links (Prüfer, Prüfer, Vorsitz),
Prüflinge rechts, je hinter einem schrägen Holzpult, Namensschilder als Pillen.
Aufruf: python3 tools/leadmagnet/szene.py -> tools/leadmagnet/build/szene.png"""
import os, sys
HIER = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HIER, "..", "..", "social", "op", "ressourcen", "peeps-bibliothek"))
from lexpeeps import figur
from PIL import Image, ImageDraw, ImageFont

K = 2                                   # Supersampling
INK = (34, 30, 28, 255)
HOLZ, HOLZ_HELL, HOLZ_DUNKEL = (176, 122, 74, 255), (222, 163, 104, 255), (120, 80, 48, 255)
STUHL, STUHL_RAND = (88, 96, 110, 255), (122, 84, 52, 255)
BODEN = (236, 230, 216, 255)
PILLE = {"grau": (238, 238, 232, 255), "lila": (232, 228, 255, 255), "frage": (184, 170, 245, 255)}
W, H = 2700 * K, 1100 * K
img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(img)
schrift = lambda s: ImageFont.truetype(os.path.join(HIER, "fonts", "Nunito-Black.ttf"), s * K)


def stuhl(cx, oben):
    w, h = 280 * K, 300 * K
    d.rounded_rectangle((cx - w // 2, oben, cx + w // 2, oben + h), 22 * K, fill=STUHL_RAND, outline=INK, width=6 * K)
    d.rounded_rectangle((cx - w // 2 + 22 * K, oben + 22 * K, cx + w // 2 - 22 * K, oben + h), 14 * K, fill=STUHL)


def person(cx, unten, koerper, kopf, gesicht, farben, brille=None, bart=None, hoehe=430, spiegeln=False):
    f = figur("body/" + koerper, kopf, gesicht, bart=bart, brille=brille, farben=farben, hoehe=hoehe * K, spiegeln=spiegeln)
    img.alpha_composite(f, (cx - f.width // 2, unten - f.height))


def pult(x0, x1, oben_l, oben_r, unten):
    """Schräges Pult: Platte (Parallelogramm) + Front."""
    t = 46 * K
    d.polygon([(x0 - 14 * K, oben_l), (x1 + 14 * K, oben_r), (x1 + 14 * K, oben_r + t), (x0 - 14 * K, oben_l + t)],
              fill=HOLZ_HELL, outline=INK, width=6 * K)
    d.polygon([(x0, oben_l + t), (x1, oben_r + t), (x1, unten), (x0, unten)], fill=HOLZ, outline=INK, width=6 * K)


def pille(cx, cy, text, art="grau"):
    f = schrift(40)
    w = d.textlength(text, font=f) + 56 * K
    h = 80 * K
    d.rounded_rectangle((cx - w / 2 + 7 * K, cy - h / 2 + 7 * K, cx + w / 2 + 7 * K, cy + h / 2 + 7 * K), h // 2, fill=INK)
    d.rounded_rectangle((cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2), h // 2, fill=PILLE[art], outline=INK, width=5 * K)
    d.text((cx, cy), text, font=f, fill=INK, anchor="mm")


boden = 1000 * K
# Ausschuss links
links = [(330, "Button Shirt 1", "Short 4", "Calm", {"Top": "#2a2a30"}, None),
         (790, "Blazer Black Tee", "No Hair 2", "Smile", {"Jacket": "#5b6170", "Clothes": "#5b6170"}, "Glasses 2"),
         (1250, "Blazer Black Tee", "Gray Medium", "Smile", {"Jacket": "#2f3447", "Clothes": "#2f3447"}, "Glasses")]
for cx, *_ in links:
    stuhl(cx * K, 470 * K)
for cx, koerper, kopf, gesicht, farben, brille in links:
    person(cx * K, 760 * K, koerper, kopf, gesicht, farben, brille)
pult(120 * K, 1460 * K, 660 * K, 610 * K, boden)
# Prüflinge rechts
rechts = [(1960, "Button Shirt 2", "Bangs", "Smile", {"Top": "#2e7d74"}, None),
          (2430, "Button Shirt 1", "Short 2", "Calm", {"Top": "#7fa6d9"}, "Glasses")]
for cx, *_ in rechts:
    stuhl(cx * K, 500 * K)
for cx, koerper, kopf, gesicht, farben, brille in rechts:
    person(cx * K, 780 * K, koerper, kopf, gesicht, farben, brille, spiegeln=True)   # Blick zum Ausschuss
pult(1740 * K, 2640 * K, 610 * K, 660 * K, boden)
# Gesetzestexte: rote Beck-Bände, aufrecht auf der schrägen Platte (Maßstab: Band ca. 19 x 12 x 5 cm)
ROT, ROT_DUNKEL, PAPIER = (196, 30, 36, 255), (140, 18, 24, 255), (246, 240, 226, 255)


def gesetz(x, y, winkel, titel="Steuergesetze", breite=124, dicke=36, tiefe=22):
    """Liegender Band, Rücken zum Betrachter, Oberseite in leichter Draufsicht; (x, y) = unten links."""
    b, dk, t = breite * K, dicke * K, tiefe * K
    lage = Image.new("RGBA", (b + 24 * K, dk + t + 24 * K), (0, 0, 0, 0))
    g = ImageDraw.Draw(lage)
    o = 10 * K
    g.polygon([(o, o + t), (o + 10 * K, o), (o + b + 10 * K, o), (o + b, o + t)], fill=ROT_DUNKEL, outline=INK, width=4 * K)
    g.rounded_rectangle((o, o + t, o + b, o + t + dk), 5 * K, fill=ROT, outline=INK, width=4 * K)
    g.rectangle((o + 14 * K, o + t + 6 * K, o + b - 14 * K, o + t + dk - 6 * K), fill=PAPIER)
    g.text((o + b / 2, o + t + dk / 2), titel, font=ImageFont.truetype(os.path.join(HIER, "fonts", "Nunito-Black.ttf"), 11 * K), fill=INK, anchor="mm")
    lage = lage.rotate(winkel, resample=Image.BICUBIC, expand=True)
    img.alpha_composite(lage, (int(x), int(y - lage.height + 8 * K)))
    return dk + 2 * K


neigung_l, neigung_r = 2.1, -3.2      # Grad: linke Platte steigt nach rechts an, rechte fällt
for x, y in ((560, 650), (1000, 634)):                    # Ausschuss: je ein Stapel zwischen den Prüfern
    h = gesetz(x * K, y * K, neigung_l, "Steuergesetze")
    gesetz((x + 4) * K, y * K - h, neigung_l, "Steuerrichtlinien")
for x, y in ((1770, 622), (2190, 645)):                   # Prüflinge: Gesetze vor sich
    h = gesetz(x * K, y * K, neigung_r, "Steuergesetze")
    gesetz((x - 3) * K, y * K - h, neigung_r, "Steuerrichtlinien")

# Namensschilder
pille(330 * K, 840 * K, "Prüfer")
pille(790 * K, 820 * K, "Prüfer", "lila")
pille(1250 * K, 800 * K, "Vorsitz")
pille(1960 * K, 800 * K, "Kandidatin", "lila")
pille(2430 * K, 820 * K, "Kandidat", "lila")
# Boden
d.rectangle((0, boden, W, boden + 70 * K), fill=BODEN)
d.line((0, boden, W, boden), fill=INK, width=6 * K)

img = img.resize((W // K, H // K), Image.LANCZOS)
img = img.crop(img.getbbox())
os.makedirs(os.path.join(HIER, "build"), exist_ok=True)
img.save(os.path.join(HIER, "build", "szene.png"))
print(img.size)
