# Open-Peeps-Vorproduktion (Variante C)

Rendert Karussells, Reels und Stories für Examenscampus aus Tagesbeschreibungen in `tage/<datum>.json`.
Die Redaktionsregeln stehen in [REDAKTION.md](REDAKTION.md), die Quellenregeln in [../QUELLENREGELN.md](../QUELLENREGELN.md).

```
bash social/op/einrichten.sh                         # einmalig: Schriften, Icons, Blasen-Engine (.res/)
python3 social/op/tag.py 2026-10-04 --ziel <instagram-assets-Checkout>
python3 social/op/tag.py 2026-10-04 --ziel … --pruefen-nur   # nur rendern und prüfen, nichts schreiben
```

| Datei | Aufgabe |
|---|---|
| `opkern.py` | Palette, Rahmen in der Klausurfarbe, Schlagzeile, Normzeile, Kalenderblatt, Zahlblock, Gesetzesseite |
| `figuren.py` | Besetzung je Beitrag aus der Open-Peeps-Bibliothek (CC0), Kürzel `A:froh` (Brustbild) / `A/eilt` (stehend) |
| `karussell.py` | Folientypen cover, schritte, inhalt, zeitstrahl, rechnung, vergleich, merke, gesetz |
| `story.py` | Story-Arten frage, antwort, teaser, norm, countdown, tipp, merksatz, anlass |
| `reel.py`, `stimme.py` | Reel mit Hook-Stilen, Szenen, Merke; Vertonung ElevenLabs (Laura) mit Wortzeiten |
| `serien/*.json` | Wiederkehrende Serien, z. B. `lernplan-2027.json` (am 1. jedes Monats bis 01.10.2027 ein Lernplan-Karussell als `b4`). `tag.py` hängt die Einträge unter `beitraege.<datum>` an den Tag an; ein Slot, der schon in der Tagesbeschreibung steht, bricht ab. Gerendert wird nur, wenn `tage/<datum>.json` existiert: Wer einen Tag neu schreibt, plant den Serienslot farblich mit ein (Lila nie neben Lila). |
| `tag.py` | Tageslauf: rendern, Quellenprüfung (`bin/op-pruefen.mjs`), Ablage für `vorproduktion-live.mjs` und Dashboard |

Kosten: Rendern lokal (0 €). Reels verbrauchen nur das Zeichenkontingent des ElevenLabs-Abos; gleiche Texte
kommen aus dem Cache. Lizenzen: Open Peeps CC0, Nunito/DM Sans/Liberation SIL OFL, Tabler/Phosphor/Fluent MIT,
MingCute Apache 2.0, Pepicons/Streamline CC BY 4.0, Comical.js/perfect-freehand MIT, Geräusche Freesound CC0
(Herkunft in `ressourcen/sfx/herkunft.json`).
