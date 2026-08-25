# K3 · UmwStR · Prüfschemata

## Quellenlage

Vorliegend sind fünf PDF-Unterlagen von RA/StB U. Breier, die im Original mit
**2. bis 6. Prüfschema** nummeriert sind. Der Campus übernimmt diese
Nummerierung unverändert.

| Schema | Titel | Seiten | Seitenformat |
| --- | --- | --- | --- |
| 2 | Vorschriften des EStG und KStG zur Aufdeckung der stillen Reserven | 4 | A4 quer (842×595 pt) |
| 3 | Voraussetzungen für Anwendung § 20 UmwStG | 3 | 16:9 (960×540 pt) |
| 4 | (Zivilrechtliche) Formen der Umwandlung in GmbH bei § 20 UmwStG | 2 | 16:9 (960×540 pt) |
| 5 | Gesetzliche Ausnahmen vom Buchwertansatz bei § 20 UmwStG | 2 | 16:9 (960×540 pt) |
| 6 | Folgen der Veräußerung der sperrfristbehafteten Anteile | 2 | 16:9 (960×540 pt) |

Summe: **13 Seiten**, alle als 1:1-Seitenansicht erfasst.

Ein „1. Prüfschema“ sowie Schemata ab Nr. 7 liegen **nicht** vor — für sie wurden
nie Quellunterlagen bereitgestellt. Sie werden ergänzt, sobald die zugehörigen
PDFs vorliegen.

## Reihenfolge

Die Übersicht zeigt die Prüfschemata immer aufsteigend nach Schemanummer. Der
Campus sortiert `SCHEMATA_ROH` dafür zur Laufzeit nach `nr`; ein nachgereichtes
Schema kann deshalb an beliebiger Stelle im Array eingetragen werden und
erscheint trotzdem an der richtigen Position. `npm run check:k3-umwstr` stellt
sicher, dass diese Sortierung nicht versehentlich entfernt wird.

Zum Ergänzen eines Schemas sind drei Stellen anzupassen:

1. Seitenrenders nach `public/umwstr/` legen (Parameter siehe unten).
2. Eintrag in `SCHEMATA_ROH` in `src/components/K3UmwStRCampus.jsx` mit `nr`,
   Titeln, `vorschauSeite` und je Seite `breite`/`hoehe`/`titel`.
3. In `tools/pruefen-k3-umwstr.mjs` die erwartete Schemazahl, die
   Nummernfolge und `erwarteteSeiten` aktualisieren.

## Seitenrenders

Jede PDF-Seite liegt als eigener Render unter
`public/umwstr/schema-<nr>-<seite>.webp`. Renderparameter:

- Zielbreite **1800 px** (Zoomfaktor = 1800 / PDF-Breite in pt)
- kein Alphakanal, WebP mit `quality=90`, `method=6`
- keinerlei Beschnitt, Skalierungsverzerrung oder Nachbearbeitung – die
  Seite wird vollständig und unverändert abgebildet

Neu-Erzeugung (benötigt `pymupdf` und `pillow`):

```python
import pymupdf
from PIL import Image

doc = pymupdf.open(pdf_pfad)
for i, page in enumerate(doc):
    zoom = 1800 / page.rect.width
    pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
    im = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    im.save(f"public/umwstr/schema-{nr:02d}-{i + 1:02d}.webp", "WEBP", quality=90, method=6)
```

## Warum vorher weiße Kacheln erschienen

Die frühere Umsetzung legte alle Seiten in einer einzigen Atlas-Datei
`public/umwstr/atlas.webp` ab und schnitt daraus per CSS-Offset einzelne
Seiten aus. Die committete Atlas-Datei war jedoch **abgeschnitten**: Der
RIFF-Header kündigte 748.086 Bytes an, tatsächlich lagen nur 12.038 Bytes vor.
Ein solches WebP lässt sich von keinem Browser dekodieren – die Kacheln
blieben weiß.

Zwei Konsequenzen daraus:

1. Es gibt keinen Atlas mehr. Jede Seite ist eine eigenständige Datei; ein
   beschädigter Render kann damit höchstens eine Seite betreffen.
2. `npm run check:k3-umwstr` prüft für jeden Render, dass die im RIFF-Header
   angekündigte Länge der tatsächlichen Dateigröße entspricht und dass die
   Bildmaße zu den im Campus deklarierten Werten passen. Ein abgeschnittenes
   WebP lässt den Check fehlschlagen, statt still zu einer weißen Kachel zu
   werden.

Zusätzlich blendet der Campus bei einem Ladefehler eines Bildes einen
sichtbaren Hinweis anstelle einer leeren Fläche ein
(`.umw-source-page--fehler`).
