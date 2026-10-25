"""Prüfungsszene im OpenPeeps-Stil: Kommission am Tisch, Prüfling davor.
Aufruf: python3 tools/leadmagnet/szene.py -> tools/leadmagnet/build/szene.png"""
import os, sys
HIER = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HIER, "..", "..", "social", "op", "ressourcen", "peeps-bibliothek"))
from lexpeeps import figur
from PIL import Image, ImageDraw, ImageFont

INK = (22, 22, 29, 255)
W, H = 2440, 1150
bild = Image.new("RGBA", (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(bild)

# Kommission: drei sitzende Figuren hinter dem Tisch
kommission = [
    ("sitting/mid-1", "Gray Short", "Serious", "Glasses 2", {"Top": "#2D5BE3"}),
    ("sitting/hands_back-1", "Short 3", "Calm", None, {"Top": "#FF7A45"}),
    ("sitting/mid-2", "Gray Bun", "Suspicious", "Glasses", {"Top": "#23D98B"}),
]
x = 1000
for pose, kopf, gesicht, brille, farben in kommission:
    f = figur(pose, kopf, gesicht, brille=brille, farben=farben, hoehe=780, spiegeln=True)
    bild.alpha_composite(f, (x, 300))
    x += 440

# Tisch über den Beinen
tisch_y = 300 + 400
d.rounded_rectangle((930, tisch_y, 2420, tisch_y + 70), 14, fill=(255, 222, 89, 255), outline=INK, width=8)
d.rectangle((960, tisch_y + 70, 2390, H - 10), fill=(255, 251, 230, 255), outline=INK, width=8)
for px in (1200, 1640, 2080):           # Papiere und Gesetzbuch
    d.rectangle((px - 60, tisch_y - 18, px + 60, tisch_y + 2), fill=(255, 255, 255, 255), outline=INK, width=5)

schrift = ImageFont.truetype(os.path.join(HIER, "fonts", "Caveat.ttf"), 120)
d.text((1675, tisch_y + 260), "Prüfungsausschuss", font=schrift, fill=INK, anchor="mm")

# Prüfling stehend davor
p = figur("standing/blazer-3", "Medium Straight", "Smile", brille="Glasses", farben={"Jacket": "#7C5CFF"}, hoehe=1100)
bild.alpha_composite(p, (120, H - p.height - 10))

bild = bild.crop(bild.getbbox())
os.makedirs(os.path.join(HIER, "build"), exist_ok=True)
bild.save(os.path.join(HIER, "build", "szene.png"))
print(bild.size)
