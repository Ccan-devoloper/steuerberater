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


def person(cx, unten, koerper, kopf, gesicht, farben, brille=None, bart=None, hoehe=430):
    f = figur("body/" + koerper, kopf, gesicht, bart=bart, brille=brille, farben=farben, hoehe=hoehe * K)
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
    person(cx * K, 780 * K, koerper, kopf, gesicht, farben, brille)
pult(1740 * K, 2640 * K, 610 * K, 660 * K, boden)
# Requisiten
d.rounded_rectangle((1010 * K, 540 * K, 1066 * K, 616 * K), 6 * K, fill=(255, 255, 255, 255), outline=INK, width=5 * K)
for i in range(3):
    d.line((1022 * K, (560 + i * 16) * K, 1054 * K, (560 + i * 16) * K), fill=INK, width=5 * K)
bx, by = 1800 * K, 618 * K       # aufgeschlagenes Buch auf dem rechten Pult
d.polygon([(bx, by), (bx + 50 * K, by - 8 * K), (bx + 100 * K, by), (bx + 100 * K, by - 46 * K), (bx + 50 * K, by - 54 * K), (bx, by - 46 * K)],
          fill=(255, 255, 255, 255), outline=INK, width=5 * K)
d.line((bx + 50 * K, by - 54 * K, bx + 50 * K, by - 8 * K), fill=INK, width=4 * K)
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
