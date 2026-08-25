# K3 · UmwStR · Prüfschemata

## Quellenlage

Vorliegend sind dreizehn PDF-Unterlagen von RA/StB U. Breier, im Original mit
**1. bis 13. Prüfschema** nummeriert. Der Campus übernimmt diese Nummerierung
unverändert.

| Schema | Titel | Seiten | Seitenformat |
| --- | --- | --- | --- |
| 1 | Grundsätze zur Aufdeckung stiller Reserven bei Einlage und Einbringung in KapGes | 4 | A4 quer |
| 2 | Vorschriften des EStG und KStG zur Aufdeckung der stillen Reserven | 4 | A4 quer |
| 3 | Voraussetzungen für Anwendung § 20 UmwStG | 3 | 16:9 |
| 4 | (Zivilrechtliche) Formen der Umwandlung in GmbH bei § 20 UmwStG | 2 | 16:9 |
| 5 | Gesetzliche Ausnahmen vom Buchwertansatz bei § 20 UmwStG | 2 | 16:9 |
| 6 | Folgen der Veräußerung der sperrfristbehafteten Anteile (§ 22 Abs. 1) | 2 | 16:9 |
| 7 | Einlage und Einbringung von Anteilen an KapGes in eine andere KapGes | 2 | 16:9 |
| 8 | Veräußerung der gem. § 21 UmwStG erhaltenen Anteile (§ 22 Abs. 2) | 2 | 16:9 |
| 9 | Verschmelzung von KapGes – übertragende KapGes (§ 11) | 2 | A4 quer |
| 10 | Verschmelzung von KapGes – übernehmende KapGes (§ 12) | 2 | A4 quer |
| 11 | Formwechsel KapGes auf PersGes – formgewechselte KapGes (§ 3) | 2 | A4 quer |
| 12 | Formwechsel KapGes in PersGes – PersGes und Gesellschafter (§§ 4, 5, 7) | 2 | A4 quer |
| 13 | Abspaltung nach § 15 UmwStG im Unterschied zur Ausgliederung | 2 | A4 quer |

Summe: **31 Seiten**, alle als 1:1-Seitenansicht erfasst.

## Personalisierungszeile

Die Unterlagen zu Prüfschema 8 und 10 tragen im Original unten die Fußzeile
„Persönliches PDF für …“ mit Name und Wohnort des Kursteilnehmers. Repository
und veröffentlichte Seite sind öffentlich, deshalb weißt das Renderskript
diesen Streifen vor dem Rastern. Er steht als Fußzeile deutlich unterhalb der
Schaubilder; Lerninhalt geht nicht verloren.

Weil die Renders bit-reproduzierbar sind, hält `tools/pruefen-k3-umwstr.mjs`
die SHA-256-Prüfsummen dieser vier Seiten fest. Ein erneutes Rendern ohne
Bereinigung erzeugt andere Bytes und lässt den Check fehlschlagen.

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

## Übersichtskachel

Jede Kachel der Übersicht lässt sich an Ort und Stelle durchblättern, ohne das
Schema zu öffnen. Die Kachel startet auf `vorschauSeite` (dem Schaubild, nicht
dem Titelblatt) und blättert umlaufend — bei zwei bis vier Seiten sind tote
Pfeile an den Enden störender als der Sprung, den der Seitenzähler ohnehin
anzeigt. Die Bildfläche selbst bleibt der Einstieg in die vollständige Ansicht.

Die Pfeile liegen in seitlichen Rinnen **neben** dem Bild, nicht darüber: Auf
dichten Schaubildern verdeckten überlagerte Pfeile sonst einzelne Kästen.

Der Vorschaustreifen ist in beiden Themes weiß, weil er das Papier der
Originalseite zeigt. Seitenzähler und Seitentitel verwenden deshalb feste
dunkle Farben statt `var(--tinte)`: Die hellen Tinten des Dunkelmodus kämen auf
Weiß nur auf 2,3:1 und wären damit unlesbar. Mit den festen Werten liegen sie
bei 14,2:1 bzw. 7,3:1.

## Seitenrenders

Jede PDF-Seite liegt als eigener Render unter
`public/umwstr/schema-<nr>-<seite>.webp`. Renderparameter:

- Zielbreite **1800 px** (Zoomfaktor = 1800 / PDF-Breite in pt)
- kein Alphakanal, WebP mit `quality=90`, `method=6`
- keinerlei Beschnitt, Skalierungsverzerrung oder Nachbearbeitung – die
  Seite wird vollständig und unverändert abgebildet

Neu-Erzeugung über `tools/rendern-k3-umwstr.py` (benötigt `pymupdf` und `pillow`):

```
python3 tools/rendern-k3-umwstr.py <schema-nr> <pfad-zur-pdf>
```

Das Skript schreibt die Seitenrenders, prüft jeden geschriebenen WebP auf einen
vollständigen RIFF-Container und gibt den fertigen `SCHEMATA_ROH`-Eintrag aus.
Die zugrundeliegenden Schritte:

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

## Hausaufgaben 1–3

Neben den Prüfschemata liegen drei Hausaufgaben mit Lösung von RA/StB U. Breier
vor, erreichbar über den Reiter **Hausaufgaben**:

| Hausaufgabe | Thema | Seiten | Lösung ab Seite |
| --- | --- | --- | --- |
| 1 | Einlage und Einbringung in die KapGes, Option § 1a KStG | 24 | 10 |
| 2 | Einbringung gem. §§ 20 und 21 UmwStG | 23 | 8 |
| 3 | Verschmelzung und Umwandlung in ein Personenunternehmen | 29 | 8 |

Summe: **76 Seiten**, wörtlich 1:1 übernommen.

Der Aufbau folgt den Bilanz-Hausaufgaben: eine strukturierte Kurzfassung für
Übersicht, Suche und Themenfilter, dazu der Volltext, der erst beim Aufklappen
geladen wird. Die Ansicht nutzt `HausaufgabenDokument`, die Seitenaufteilung und
das Stylesheet der bestehenden Hausaufgaben unverändert mit.

| Datei | Inhalt |
| --- | --- |
| `src/components/K3UmwStRHausaufgaben.jsx` | Ansicht |
| `src/data/k3-umwstr-hausaufgaben.js` | Kurzfassung je Hausaufgabe |
| `src/data/k3-umwstr-hausaufgaben-volltext-meta.js` | Seiten, Zeichen, SHA-256 |
| `src/data/k3-umwstr-hausaufgaben-volltext.js` | Loader mit Integritätsprüfung |
| `src/data/k3-umwstr-hausaufgaben-volltext/*.b64` | gzip-komprimierte Textblöcke |
| `src/data/k3-umwstr-hausaufgaben-teilen.js` | Trennung Aufgabe/Lösung |

Die Volltexte werden mit `page.get_text("text", sort=True)` aus PyMuPDF
extrahiert. Gegengeprüft: Gegenüber der einfachen Extraktion geht dabei kein
Token verloren, die Spalten- und Tabellenausrichtung bleibt aber erhalten – was
für die `<pre>`-Darstellung entscheidend ist.

Die Personalisierungszeile der Quell-PDFs ist entfernt, wie bei allen übrigen
Hausaufgaben. `npm run check:k3-umwstr-hausaufgaben` entpackt die ausgelieferten
Textblöcke und prüft Zeichenzahl, SHA-256, lückenlose Seitenmarken, die
Trennstelle zur Lösung und die Abwesenheit der Personalisierungszeile.
