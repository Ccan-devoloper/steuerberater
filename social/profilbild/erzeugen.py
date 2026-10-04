"""Examenscampus-Logo: Bildmarke, Varianten und Wortmarken als SVG.

Aufruf: python3 erzeugen.py   (braucht fonttools; schreibt nach bildmarke/ und wortmarke/)
Alle Formen sind Pfade - die SVGs brauchen keine installierte Schrift.
"""
import itertools, json, math, os
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
              scheibe=CREME, para=TINTE, randlos=False, hintergrund=None, figur=None):
    """Bildmarke im 1000er-Raster, skaliert auf Durchmesser d um (cx, cy).

    innen   Radius der Ringinnenkante (kleiner = breiterer Ring)
    ring    'drei' | 'fuenf' | 'schwarz'
    randlos Farbring läuft über den Rand (für Instagrams Kreiszuschnitt)
    figur   Name aus figuren/figuren.json - ersetzt das § durch Figur mit Gesetzbuch
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
    if figur:
        t.append(figur_mit_buch(figur, r))
        t.append('</g>')
        return '\n'.join(t)
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


# ---------------------------------------------------------------- Figur mit Gesetzbuch
# Open-Peeps-Figuren (Pablo Stanley, CC0) als SVG-Fragmente, erzeugt mit figuren/figuren.js.
FIGUREN = json.load(open(os.path.join(HIER, 'figuren', 'figuren.json')))
ROT, ROT_DUNKEL = '#d62f2f', '#a31f24'
_ids = itertools.count(1)


def finger(cx, cy, seite, haut, n=4, lang=44, dick=26):
    """Finger, die von der Seite über die Buchkante greifen. seite=-1 links, +1 rechts."""
    t = []
    for i in range(n):
        y = cy + (i - (n - 1) / 2) * (dick - 1)
        l = lang - abs(i - (n - 1) / 2) * 8
        x = cx - l if seite > 0 else cx
        t.append(f'<rect x="{x:.1f}" y="{y - dick / 2:.1f}" width="{l:.1f}" height="{dick}" rx="{dick / 2}" '
                 f'fill="{haut}" stroke="{TINTE}" stroke-width="8"/>')
    return ''.join(t)


def gesetzbuch(cx, cy, w, h, winkel, haut):
    """Rotes Gesetzbuch „Steuergesetze“, von zwei Händen gehalten. Bewusst ohne Verlagslogo."""
    K = 12; x, y = cx - w / 2, cy - h / 2
    t = [f'<g transform="rotate({winkel} {cx} {cy})">',
         f'<rect x="{x + 16}" y="{y + 16}" width="{w}" height="{h}" rx="12" fill="{CREME}" stroke="{TINTE}" stroke-width="{K}"/>',
         f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{ROT}" stroke="{TINTE}" stroke-width="{K}"/>',
         f'<rect x="{x + K / 2}" y="{y + K / 2}" width="34" height="{h - K}" fill="{ROT_DUNKEL}"/>',
         f'<line x1="{x + 40}" y1="{y + K / 2}" x2="{x + 40}" y2="{y + h - K / 2}" stroke="{TINTE}" stroke-width="6"/>']
    v = 46; tx = x + 64; y1 = y + 96; y2 = y1 + v * 1.42
    t.append(wort('Steuer-', tx, y1, v, farbe=CREME, sperrung=0)[0])
    t.append(wort('gesetze', tx, y2, v, farbe=CREME, sperrung=0)[0])
    t.append(f'<rect x="{tx}" y="{y2 + 34}" width="{w - 104}" height="10" rx="5" fill="{CREME}"/>')
    t.append(finger(x - 14, y + h - 78, -1, haut))
    t.append(finger(x + w + 14, y + h - 92, +1, haut))
    t.append('</g>')
    return ''.join(t)


def figur_mit_buch(name, r):
    """Figur in der Scheibe; der Kopf ragt nach oben über den Ring hinaus, das Buch unten."""
    f = FIGUREN[name]; cid = f'scheibe{next(_ids)}'
    s, tx, ty = 0.8, f['tx'], f.get('ty', -2)
    g = f'<g transform="translate({tx} {ty}) scale({s})">'
    hals = f'<polygon points="{f["hals"]}" fill="{f["haut"]}"/>' if f['hals'] else ''
    # Körper nur innerhalb der Scheibe; alles oberhalb der Mitte darf hinausragen
    return (f'<defs><clipPath id="{cid}"><circle cx="500" cy="500" r="{r}"/>'
            f'<rect x="-500" y="-500" width="2000" height="1000"/></clipPath></defs>'
            f'<g clip-path="url(#{cid})">{g}{f["koerper"]}{hals}{f["koerperLinien"]}</g></g>'
            f'{g}{f["kopf"]}</g>'
            + gesetzbuch(500, 735, 330, 310, -5, f['haut']))


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


def zweizeilig(bild=None):
    """'Examens' über 'campus', campus mit Textmarker - kompakt, fast quadratisch."""
    v = 330; x = 1110
    w1, e1 = wort('Examens', x, 450, v)
    w2, e2 = wort('campus', x, 450 + v * 1.32, v, marker=LILA)
    return svg(bildmarke(**(bild or {})) + '\n' + w1 + '\n' + w2, max(e1, e2) + 60, 1000)


def gestapelt(bild=None):
    """Bildmarke oben, Schriftzug darunter - für Profil-Header, Avatare mit Text."""
    v = 240
    s = v / (VERSAL * 1000); bw = BLACK.breite('Examenscampus', s, -12)
    W = max(bw, 1000) + 160
    w, _ = wort('Examenscampus', (W - bw) / 2, 1000 + 120 + v, v, marker=LILA, von='campus')
    return svg(bildmarke(cx=W / 2, **(bild or {})) + '\n' + w, W, 1000 + 120 + v + 110)


def mit_klausurpillen(bild=None):
    """Schriftzug mit Unterzeile aus drei Pillen in den Klausurfarben."""
    v = 260; x = 1110
    w, ende = wort('Examenscampus', x, 420, v, marker=LILA, von='campus')
    px, teile = x + 4, []
    for text, farbe in (('Klausur 1', K1), ('Klausur 2', K2), ('Klausur 3', K3)):
        p, breite = pille(px, 530, text, farbe, hoehe=190, textfarbe=CREME if farbe == K1 else TINTE)
        teile.append(p); px += breite + 40
    return svg(bildmarke(**(bild or {})) + '\n' + w + '\n' + '\n'.join(teile), max(ende, px) + 60, 1000)


def mit_unterzeile(bild=None, zeile='Steuerberaterprüfung · Lernen mit Plan', marker=None):
    """Schriftzug plus ruhige Unterzeile in ExtraBold."""
    v = 280; x = 1110
    w, ende = wort('Examenscampus', x, 470, v, marker=marker, von='campus')
    u, ende2 = wort(zeile, x + 6, 470 + 210, 92,
                    farbe='#55555e', schrift=EXTRA, sperrung=0)
    return svg(bildmarke(**(bild or {})) + '\n' + w + '\n' + u, max(ende, ende2) + 60, 1000)


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


# ---------------------------------------------------------------- Figur-Logos
FIGUR_MARKEN = {
    '01-herr':              dict(figur='herr'),
    '02-frau':              dict(figur='frau'),
    '03-herr-fuenf-farben': dict(figur='herr', ring='fuenf'),
    '04-frau-fuenf-farben': dict(figur='frau', ring='fuenf'),
}
for name, opt in FIGUR_MARKEN.items():
    schreibe('figur', name, svg(bildmarke(**opt), 1000, 1000))
schreibe('.', 'instagram-profilbild-figur-herr', svg(bildmarke(figur='herr', randlos=True), 1000, 1000))
schreibe('.', 'instagram-profilbild-figur-frau', svg(bildmarke(figur='frau', randlos=True), 1000, 1000))

STB = 'Fit fürs Steuerberaterexamen'
FIGUR_WORTMARKEN = {
    '01-herr-unterzeile':     mit_unterzeile(dict(figur='herr'), STB, marker=LILA),
    '02-frau-unterzeile':     mit_unterzeile(dict(figur='frau'), STB, marker=LILA),
    '03-herr-quer-marker':    quer(LILA, bild=dict(figur='herr')),
    '04-frau-zweizeilig':     zweizeilig(dict(figur='frau')),
    '05-herr-klausurpillen':  mit_klausurpillen(dict(figur='herr')),
    '06-frau-gestapelt':      gestapelt(dict(figur='frau')),
    '07-herr-quer-dunkel':    quer(LILA, dunkel=True, bild=dict(figur='herr')),
}
for name, inhalt in FIGUR_WORTMARKEN.items():
    schreibe('figur-wortmarke', name, inhalt)

print('ok')
