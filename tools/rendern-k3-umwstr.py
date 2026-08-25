#!/usr/bin/env python3
"""Rendert ein UmwStR-Pruefschema-PDF seitengetreu nach public/umwstr/.

Aufruf:  python3 tools/rendern-k3-umwstr.py <schema-nr> <pfad-zur-pdf>

Erzeugt public/umwstr/schema-<nr>-<seite>.webp fuer jede Seite und gibt den
fertigen SCHEMATA_ROH-Eintrag aus, der in src/components/K3UmwStRCampus.jsx
uebernommen werden kann.

Benoetigt: pip install pymupdf pillow

Die Renderparameter sind hier zentral festgelegt, damit jede nachgereichte
Unterlage exakt so abgebildet wird wie die bereits erfassten: volle Seite,
kein Beschnitt, keine Nachbearbeitung.

Einzige Ausnahme: Manche Unterlagen tragen unten eine Personalisierungszeile
("Persoenliches PDF fuer ..."), die Name und Wohnort des Kursteilnehmers
enthaelt. Da das Repository und die veroeffentlichte Seite oeffentlich sind,
wird diese Zeile vor dem Rendern geschwaerzt bzw. geweisst. Sie steht in der
Fusszeile deutlich unterhalb der Schaubilder; Lerninhalt geht dabei nicht
verloren.
"""

import os
import sys

import pymupdf
from PIL import Image

ZIELBREITE = 1800
QUALITAET = 90
METHODE = 6
AUSGABE = "public/umwstr"
PERSONALISIERUNG = "Persönliches PDF für"


def rendern(nr: int, pdf_pfad: str) -> None:
    if not os.path.isdir(AUSGABE):
        sys.exit(f"Verzeichnis {AUSGABE} fehlt – bitte im Projektwurzelverzeichnis aufrufen.")

    doc = pymupdf.open(pdf_pfad)
    seiten = []
    geschwaerzt = 0

    for index, seite in enumerate(doc):
        # Personalisierungszeile entfernen, bevor die Seite gerastert wird.
        for block in seite.get_text("blocks"):
            if PERSONALISIERUNG in block[4]:
                kasten = pymupdf.Rect(block[:4])
                seite.draw_rect(kasten, color=None, fill=(1, 1, 1), overlay=True)
                geschwaerzt += 1

        zoom = ZIELBREITE / seite.rect.width
        pix = seite.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
        bild = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
        name = f"schema-{nr:02d}-{index + 1:02d}.webp"
        ziel = os.path.join(AUSGABE, name)
        bild.save(ziel, "WEBP", quality=QUALITAET, method=METHODE)

        # Gegenprobe: vollstaendiger RIFF-Container, sonst weisse Kachel im Campus.
        rohdaten = open(ziel, "rb").read()
        angekuendigt = int.from_bytes(rohdaten[4:8], "little") + 8
        if angekuendigt != len(rohdaten):
            sys.exit(f"{name}: WebP unvollstaendig geschrieben ({angekuendigt} != {len(rohdaten)})")
        Image.open(ziel).load()

        # Die Personalisierungszeile ist im Bild geweisst; aus der Textebene des
        # PDF muss sie fuer die Ausgabe hier noch herausgefiltert werden.
        rohtext = "\n".join(
            z for z in seite.get_text().splitlines() if PERSONALISIERUNG not in z
        )
        text = " ".join(rohtext.split())
        seiten.append((pix.width, pix.height, name, len(rohdaten), text[:90]))

    if geschwaerzt:
        print(f"\nHinweis: Personalisierungszeile auf {geschwaerzt} Seite(n) entfernt.")

    print(f"\n{len(seiten)} Seite(n) nach {AUSGABE}/ geschrieben:\n")
    for breite, hoehe, name, groesse, text in seiten:
        print(f"  {name}  {breite}x{hoehe}  {groesse / 1024:6.0f} KB  {text}")

    print("\nEintrag fuer SCHEMATA_ROH (Titel und Seitentitel noch anpassen):\n")
    print("  {")
    print(f"    nr: {nr},")
    print("    vorschauSeite: 2,")
    print('    title: "",')
    print('    subtitle: "",')
    print('    focus: "",')
    print("    seiten: [")
    for breite, hoehe, _name, _groesse, text in seiten:
        titel = text[:60].replace('"', "'")
        print(f'      {{ breite: {breite}, hoehe: {hoehe}, titel: "{titel}" }},')
    print("    ],")
    print("  },")
    print("\nDanach tools/pruefen-k3-umwstr.mjs anpassen und npm run check:k3-umwstr ausfuehren.")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    rendern(int(sys.argv[1]), sys.argv[2])
