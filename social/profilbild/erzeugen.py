"""Examenscampus-Logo: Bildmarke, Varianten und Wortmarken als SVG.

Aufruf: python3 erzeugen.py   (braucht fonttools; schreibt nach bildmarke/ und wortmarke/)
Alle Formen sind Pfade - die SVGs brauchen keine installierte Schrift.
"""
import math, os
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.transformPen import TransformPen

HIER = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(HIER, '..', 'fonts')

# Farben der Feed-Kacheln (stile.mjs, Stil "bunt")
K0, K1, K2, K3, K4 = '#6b4bd6', '#2d5be3', '#ff7a45', '#23d98b', '#f2c94c'
TINTE, CREME, LILA, GELB = '#151515', '#fff8ec', '#b8a9f5', '#f8d775'


class Schrift:
    def __init__(self, datei):
        self.f = TTFont(os.path.join(FONTS, datei))
        self.gs, self.cm, self.hm = self.f.getGlyphSet(), self.f.getBestCmap(), self.f['hmtx']

    def zeichen(self, ch, x, y, s):
        """Glyphe als Pfad; (x, y) = Grundlinie links, y wächst nach unten."""
        pen = SVGPathPen(self.gs)
        self.gs[self.cm[ord(ch)]].draw(TransformPen(pen, (s, 0, 0, -s, x, y)))
        return pen.getCommands()

    def grenzen(self, ch):
        b = BoundsPen(self.gs); self.gs[self.cm[ord(ch)]].draw(b); return b.bounds

    def breite(self, text, s, sperrung=0):
        return sum((self.hm[self.cm[ord(c)]][0] + sperrung) * s for c in text) - sperrung * s

    def text(self, text, x, y, s, sperrung=0):
        """Liefert Pfad und die x-Position jedes Zeichens (für Marker)."""
        teile, pos = [], []
        for c in text:
            pos.append(x)
            if c != ' ': teile.append(self.zeichen(c, x, y, s))
            x += (self.hm[self.cm[ord(c)]][0] + sperrung) * s
        pos.append(x - sperrung * s)
        return ' '.join(teile), pos


BLACK = Schrift('Nunito-Black.woff2')
EXTRA = Schrift('Nunito-ExtraBold.woff2')
VERSAL = 705 / 1000   # Versalhöhe Nunito


def sektor(cx, cy, r1, r2, a1, a2, farbe):
    p = lambda r, a: (cx + r * math.cos(math.radians(a)), cy + r * math.sin(math.radians(a)))
    (x1, y1), (x2, y2), (x3, y3), (x4, y4) = p(r2, a1), p(r2, a2), p(r1, a2), p(r1, a1)
    gr = 1 if (a2 - a1) % 360 > 180 else 0
    return (f'<path fill="{farbe}" d="M{x1:.2f},{y1:.2f} A{r2},{r2} 0 {gr} 1 {x2:.2f},{y2:.2f} '
            f'L{x3:.2f},{y3:.2f} A{r1},{r1} 0 {gr} 0 {x4:.2f},{y4:.2f}Z"/>')


def ringfarben(art):
    """Blau oben, im Uhrzeigersinn. 'drei' = Klausurtage, 'fuenf' = alle Feed-Kategorien."""
    if art == 'drei': folge = [K1, K2, K3]
    elif art == 'fuenf': folge = [K1, K2, K3, K4, K0]
    else: return None
    n = len(folge); w = 360 / n; start = -90 - w / 2
    return [(start + i * w, start + (i + 1) * w, f) for i, f in enumerate(folge)]


def bildmarke(cx=500, cy=500, d=1000, ring='drei', innen=356, marker=LILA,
              scheibe=CREME, para=TINTE, randlos=False, hintergrund=None):
    """Bildmarke im 1000er-Raster, skaliert auf Durchmesser d um (cx, cy).

    innen   Radius der Ringinnenkante (kleiner = breiterer Ring)
    ring    'drei' | 'fuenf' | 'schwarz'
    randlos Farbring läuft über den Rand (für Instagrams Kreiszuschnitt)
    """
    K = 14; R = 500
    t = [f'<g transform="translate({cx - d / 2:.2f} {cy - d / 2:.2f}) scale({d / 1000:.5f})">']
    if hintergrund: t.append(f'<rect width="1000" height="1000" fill="{hintergrund}"/>')
    aussen = 720 if randlos else R - K
    t.append(f'<circle cx="500" cy="500" r="{innen if randlos else R}" fill="{TINTE}"/>')
    farben = ringfarben(ring)
    if farben:
        for a1, a2, f in farben: t.append(sektor(500, 500, innen, aussen, a1, a2, f))
        for a1, _, _ in farben:   # schwarze Fugen zwischen den Farben
            c, s = math.cos(math.radians(a1)), math.sin(math.radians(a1))
            t.append(f'<line x1="{500 + innen * c:.2f}" y1="{500 + innen * s:.2f}" '
                     f'x2="{500 + (aussen + K) * c:.2f}" y2="{500 + (aussen + K) * s:.2f}" '
                     f'stroke="{TINTE}" stroke-width="{K}"/>')
    r = innen - K
    t.append(f'<circle cx="500" cy="500" r="{r}" fill="{scheibe}"/>')
    # § optisch zentriert, Höhe proportional zur Scheibe
    x0, y0, x1, y1 = BLACK.grenzen('§'); H = r * 1.48; s = H / (y1 - y0)
    gx = 500 - (x0 + x1) / 2 * s; gy = 500 + (y0 + y1) / 2 * s
    if marker:
        bw, bh = r * 1.23, r * 0.36
        t.append(f'<rect x="{500 - bw / 2:.2f}" y="{500 + r * 0.05 - bh / 2:.2f}" width="{bw:.2f}" '
                 f'height="{bh:.2f}" rx="{r * 0.047:.2f}" fill="{marker}"/>')
    t.append(f'<path fill="{para}" d="{BLACK.zeichen("§", gx, gy, s)}"/>')
    t.append('</g>')
    return '\n'.join(t)


def pille(x, y, text, farbe, hoehe=120, schrift=BLACK, textfarbe=TINTE):
    """Pille wie auf den Kacheln: Farbfläche, schwarze Kontur, harter Versatzschatten."""
    s = hoehe * 0.40 / (VERSAL * 1000)   # Versalhöhe = 40 % der Pillenhöhe
    tb = schrift.breite(text, s)
    pad = hoehe * 0.42; w = tb + 2 * pad; k = hoehe * 0.075; v = hoehe * 0.09
    pfad, _ = schrift.text(text, x + pad, y + hoehe / 2 + VERSAL * 1000 * s / 2, s)
    return (f'<rect x="{x + v:.2f}" y="{y + v:.2f}" width="{w:.2f}" height="{hoehe}" rx="{hoehe / 2}" fill="{TINTE}"/>'
            f'<rect x="{x:.2f}" y="{y:.2f}" width="{w:.2f}" height="{hoehe}" rx="{hoehe / 2}" fill="{farbe}" stroke="{TINTE}" stroke-width="{k:.2f}"/>'
            f'<path fill="{textfarbe}" d="{pfad}"/>'), w + v


def wort(text, x, y, versal, farbe=TINTE, marker=None, von=None, schrift=BLACK, sperrung=-12):
    """Schriftzug mit optionalem Textmarker unter den Zeichen von..Ende."""
    s = versal / (VERSAL * 1000)
    pfad, pos = schrift.text(text, x, y, s, sperrung)
    t = []
    if marker:
        i = text.index(von) if von else 0
        x0, x1 = pos[i] - versal * 0.08, pos[-1] + versal * 0.08
        hoch = versal * 0.5
        t.append(f'<rect x="{x0:.2f}" y="{y - hoch * 0.78:.2f}" width="{x1 - x0:.2f}" height="{hoch:.2f}" '
                 f'rx="{versal * 0.06:.2f}" fill="{marker}"/>')
    t.append(f'<path fill="{farbe}" d="{pfad}"/>')
    return '\n'.join(t), pos[-1]


def svg(inhalt, w, h, hintergrund=None):
    bg = f'<rect width="{w:.0f}" height="{h:.0f}" fill="{hintergrund}"/>\n' if hintergrund else ''
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" '
            f'width="{w:.0f}" height="{h:.0f}">\n{bg}{inhalt}\n</svg>\n')


def schreibe(ordner, name, inhalt):
    os.makedirs(os.path.join(HIER, ordner), exist_ok=True)
    with open(os.path.join(HIER, ordner, name + '.svg'), 'w') as f: f.write(inhalt)


# ---------------------------------------------------------------- Bildmarken
BILDMARKEN = {
    '01-standard':       dict(),
    '02-ring-schmal':    dict(innen=400),
    '03-ring-breit':     dict(innen=310),
    '04-marker-gelb':    dict(marker=GELB),
    '05-fuenf-farben':   dict(ring='fuenf'),
    '06-fuenf-farben-gelb': dict(ring='fuenf', marker=GELB),
    '07-ohne-marker':    dict(marker=None),
    '08-dunkel':         dict(scheibe=TINTE, para=CREME, marker='#4b3fa0'),
    '09-einfarbig':      dict(ring='schwarz', marker=None),
}
for name, opt in BILDMARKEN.items():
    schreibe('bildmarke', name, svg(bildmarke(**opt), 1000, 1000))

# Instagram: randlos, damit der Kreiszuschnitt keine Kontur anschneidet
schreibe('.', 'instagram-profilbild', svg(bildmarke(randlos=True), 1000, 1000))
schreibe('.', 'instagram-profilbild-fuenf-farben', svg(bildmarke(randlos=True, ring='fuenf'), 1000, 1000))


# ---------------------------------------------------------------- Wortmarken
def quer(marker_wort=None, dunkel=False, bild=None):
    """Bildmarke links, Schriftzug rechts, eine Zeile."""
    farbe = CREME if dunkel else TINTE
    v = 300; x = 1110
    w, ende = wort('Examenscampus', x, 500 + v / 2, v, farbe,
                   ('#4b3fa0' if dunkel and marker_wort else marker_wort), 'campus')
    return svg(bildmarke(**(bild or {})) + '\n' + w, ende + 60, 1000, TINTE if dunkel else None)


def zweizeilig():
    """'Examens' über 'campus', campus mit Textmarker - kompakt, fast quadratisch."""
    v = 330; x = 1110
    w1, e1 = wort('Examens', x, 450, v)
    w2, e2 = wort('campus', x, 450 + v * 1.32, v, marker=LILA)
    return svg(bildmarke() + '\n' + w1 + '\n' + w2, max(e1, e2) + 60, 1000)


def gestapelt():
    """Bildmarke oben, Schriftzug darunter - für Profil-Header, Avatare mit Text."""
    v = 240
    s = v / (VERSAL * 1000); bw = BLACK.breite('Examenscampus', s, -12)
    W = max(bw, 1000) + 160
    w, _ = wort('Examenscampus', (W - bw) / 2, 1000 + 120 + v, v, marker=LILA, von='campus')
    return svg(bildmarke(cx=W / 2) + '\n' + w, W, 1000 + 120 + v + 110)


def mit_klausurpillen():
    """Schriftzug mit Unterzeile aus drei Pillen in den Klausurfarben."""
    v = 260; x = 1110
    w, ende = wort('Examenscampus', x, 420, v, marker=LILA, von='campus')
    px, teile = x + 4, []
    for text, farbe in (('Klausur 1', K1), ('Klausur 2', K2), ('Klausur 3', K3)):
        p, breite = pille(px, 530, text, farbe, hoehe=190, textfarbe=CREME if farbe == K1 else TINTE)
        teile.append(p); px += breite + 40
    return svg(bildmarke() + '\n' + w + '\n' + '\n'.join(teile), max(ende, px) + 60, 1000)


def mit_unterzeile():
    """Schriftzug plus ruhige Unterzeile in ExtraBold."""
    v = 280; x = 1110
    w, ende = wort('Examenscampus', x, 470, v)
    u, ende2 = wort('Steuerberaterprüfung · Lernen mit Plan', x + 6, 470 + 210, 92,
                    farbe='#55555e', schrift=EXTRA, sperrung=0)
    return svg(bildmarke() + '\n' + w + '\n' + u, max(ende, ende2) + 60, 1000)


WORTMARKEN = {
    '01-quer':                quer(),
    '02-quer-marker':         quer(LILA),
    '03-zweizeilig':          zweizeilig(),
    '04-gestapelt':           gestapelt(),
    '05-klausurpillen':       mit_klausurpillen(),
    '06-unterzeile':          mit_unterzeile(),
    '07-quer-dunkel':         quer(LILA, dunkel=True),
    '08-quer-fuenf-farben':   quer(LILA, bild=dict(ring='fuenf')),
}
for name, inhalt in WORTMARKEN.items():
    schreibe('wortmarke', name, inhalt)

print('ok')
