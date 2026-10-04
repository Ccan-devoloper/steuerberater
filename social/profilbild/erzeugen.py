import math, os

# Erzeugt die Examenscampus-Bildmarke als Vektor (SVG). Aufruf: python3 erzeugen.py
HIER = os.path.dirname(os.path.abspath(__file__))
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.transformPen import TransformPen

F = TTFont(os.path.join(HIER, '..', 'fonts', 'Nunito-Black.woff2')); GS = F.getGlyphSet(); CM = F.getBestCmap()
OUT = HIER

K1, K2, K3 = '#2d5be3', '#ff7a45', '#23d98b'
TINTE, CREME, LILA = '#151515', '#fff8ec', '#b8a9f5'

def glyph_path(ch, x, y, s):
    """Glyphe als Pfad, Ursprung (x,y) = Grundlinie links, Skala s, y nach unten."""
    pen = SVGPathPen(GS)
    GS[CM[ord(ch)]].draw(TransformPen(pen, (s, 0, 0, -s, x, y)))
    return pen.getCommands()

def bounds(ch):
    b = BoundsPen(GS); GS[CM[ord(ch)]].draw(b); return b.bounds

def text_paths(text, x, y, s, tracking=0):
    hm = F['hmtx']; out = []
    for ch in text:
        g = CM[ord(ch)]; out.append(glyph_path(ch, x, y, s)); x += (hm[g][0] + tracking) * s
    return ' '.join(out), x

def sektor(r1, r2, a1, a2, farbe):
    p = lambda r, a: (500 + r * math.cos(math.radians(a)), 500 + r * math.sin(math.radians(a)))
    (x1, y1), (x2, y2), (x3, y3), (x4, y4) = p(r2, a1), p(r2, a2), p(r1, a2), p(r1, a1)
    gr = 1 if (a2 - a1) % 360 > 180 else 0
    return (f'<path fill="{farbe}" d="M{x1:.2f},{y1:.2f} A{r2},{r2} 0 {gr} 1 {x2:.2f},{y2:.2f} '
            f'L{x3:.2f},{y3:.2f} A{r1},{r1} 0 {gr} 0 {x4:.2f},{y4:.2f}Z"/>')

def zeichen(variante='farbe', marker=True, hintergrund=None, randlos=False):
    """Bildmarke im 1000er-Raster, Mittelpunkt 500/500."""
    R, RING_INNEN, K = 500, 356, 14            # Außenradius, Ringinnenkante, Konturstärke
    teile = []
    if hintergrund: teile.append(f'<rect width="1000" height="1000" fill="{hintergrund}"/>')
    if variante == 'farbe':
        farben = [(210, 330, K1), (330, 450, K2), (90, 210, K3)]   # Blau oben, Orange rechts, Grün links
        ring, flaeche, tinte, mark = None, CREME, TINTE, LILA
    else:  # einfarbig
        farben = None; ring, flaeche, tinte, mark = TINTE, CREME, TINTE, None
    # randlos: Ring läuft über den Bildrand hinaus, damit Instagrams Kreiszuschnitt keine Kontur anschneidet
    AUSSEN = 720 if randlos else R - K
    if not randlos: teile.append(f'<circle cx="500" cy="500" r="{R}" fill="{TINTE}"/>')
    else: teile.append(f'<circle cx="500" cy="500" r="{RING_INNEN}" fill="{TINTE}"/>')
    if farben:
        for a1, a2, f in farben: teile.append(sektor(RING_INNEN, AUSSEN, a1, a2, f))
        for a in (90, 210, 330):   # schwarze Fugen zwischen den Klausurfarben
            c, s = math.cos(math.radians(a)), math.sin(math.radians(a))
            teile.append(f'<line x1="{500+RING_INNEN*c:.2f}" y1="{500+RING_INNEN*s:.2f}" x2="{500+(AUSSEN+K)*c:.2f}" y2="{500+(AUSSEN+K)*s:.2f}" stroke="{TINTE}" stroke-width="{K}"/>')
    teile.append(f'<circle cx="500" cy="500" r="{RING_INNEN - K}" fill="{flaeche}"/>')
    # § optisch zentriert
    x0, y0, x1, y1 = bounds('§'); H = 505; s = H / (y1 - y0)
    gx = 500 - (x0 + x1) / 2 * s; gy = 500 + (y0 + y1) / 2 * s
    if marker and mark:
        bw, bh = 420, 124
        teile.append(f'<rect x="{500-bw/2}" y="{500+18-bh/2}" width="{bw}" height="{bh}" rx="16" fill="{mark}"/>')
    teile.append(f'<path fill="{tinte}" d="{glyph_path("§", gx, gy, s)}"/>')
    return '\n'.join(teile)

def svg(inhalt, w=1000, h=1000):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">\n{inhalt}\n</svg>\n'

open(f'{OUT}/examenscampus-logo.svg', 'w').write(svg(zeichen()))
open(f'{OUT}/examenscampus-logo-ohne-marker.svg', 'w').write(svg(zeichen(marker=False)))
open(f'{OUT}/examenscampus-logo-einfarbig.svg', 'w').write(svg(zeichen('mono')))
open(f'{OUT}/instagram-profilbild.svg', 'w').write(svg(zeichen(randlos=True)))

# Wortmarke rechts neben der Bildmarke
skala = 400 / 1000          # Versalhöhe ~ zur Bildmarke
wort, ende = text_paths("Examenscampus", 1110, 500 + 705 * skala / 2, skala, tracking=-12)
lockup = (f'<g>{zeichen()}</g>\n<path fill="{TINTE}" d="{wort}"/>')
open(f'{OUT}/examenscampus-logo-wortmarke.svg', 'w').write(svg(lockup, w=int(ende + 60), h=1000))
print('ok', int(ende + 60))
