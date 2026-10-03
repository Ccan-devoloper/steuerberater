# Tagesbeschreibung `tage/<datum>.json`

Ein Tag = drei Feed-Beiträge (`b1`, `b2` Karussell, `b3` Reel) und die Stories. Vorgaben je Tag (Slot, Zeit,
Format, Klausur, Fach, Thema, Reel-Typ, Hook-Stil, Story-Arten) stehen in `plan/rahmenplan.json` und werden
übernommen. Regeln: `REDAKTION.md` und `../QUELLENREGELN.md`. Prüfen: `python3 social/op/tag.py <datum> --ziel /tmp/x --pruefen-nur`.

```jsonc
{
  "datum": "2026-10-04",
  "beitraege": [ <Karussell>, <Karussell>, <Reel> ],
  "stories": [ <Story>, … ]                       // alle Stories des Rahmenplans, Teaser eingeschlossen
}
```

## Gemeinsame Felder eines Beitrags
`slot, zeit, format, klausur (0–3), fach, fachLabel, themaId, themaTitel` (aus dem Rahmenplan),
`caption` (Bildunterschrift: Suchzeile mit Thema, dann die Kernaussagen mit **vollständigen Fundstellen**,
Abschluss „Speichern für Klausur n 📌“, ≤ 2200 Zeichen, ohne Hashtags), `hashtags` (4: `#steuerberaterexamen
#steuerberaterprüfung #examensvorbereitung #<fach>`), `quellen` (Liste aller zitierten Normen/Fundstellen),
`figuren` (Besetzung, s. u.).

### Figuren
```jsonc
"figuren": {"A": {"name": "Paula", "kopf": "Bun 2", "haut": "#F3D0B5", "haar": "#6B3E26", "oberteil": "#F4A3B5",
                  "jacke": null, "bart": null, "brille": null, "bueste": "Tee 1"}}
```
Verwendung: `"A:froh"` = Brustbild (Mimik froh|sorge|fragt|redet|ernst|denkt|skeptisch|ruhig|erklaert|staunt|lacht|muede),
`"A/eilt"` = stehend (Pose eilt|sorge|skeptisch|erklaert|blazer|ruhig|laessig). Jeder Beitrag eigene Figuren (neue
Namen, andere Köpfe/Farben), höchstens zwei. Köpfe: Afro, Bangs, Bangs 2, Bantu Knots, Bun, Bun 2, Buns, Cornrows,
Dreads 1, Dreads 2, Flat Top, Flat Top Long, Gray Bun, Gray Medium, Gray Short, Hijab, Long, Long Afro, Long Bangs,
Long Curly, Medium 1–3, Medium Bangs (2, 3), Medium Straight, Mohawk, No Hair 1–3, Pomp, Shaved 1–3, Short 1–5,
Turban, Twists, Twists 2, hat-beanie, hat-hip. Büsten: Blazer Black Tee, Button Shirt 1, Button Shirt 2, Coffee,
Device, Dress, Explaining, Gym Shirt, Hoodie, Macbook, Paper, Pointing Up, Polo and Sweater, Shirt and Coat,
Sporty Tee, Striped Pocket Tee, Striped Tee, Sweater, Sweater Dots, Tee 1, Tee 2, Tee Arms Crossed, Turtleneck,
jacket. Bärte: Chin, Full, Full 2–4, Goatee 1–2, Moustache 1–9. Brillen: Glasses, Glasses 2–5, Sunglasses.
Kleidung nie in der Rahmenfarbe der Klausur. Haut realistisch und divers.

## Karussell: `"folien": [ … ]`
Erste Folie `cover`, dann Inhalt, vorletzte meist `merke`, letzte `gesetz`. 7–11 Folien. Farbnamen:
WEISS, GELB, GRUEN, ROT, BLAU, LILA, TUERKIS, ORANGE, PINK, HELL.

| typ | Felder |
|---|---|
| `cover` | `badge` (Format), `badgeFarbe`, `zeilen` (2 Zeilen Schlagzeile, ≤ 6 Wörter), `norm` (N3; weglassen, wenn Paragraf in der Schlagzeile), `unter` („in 4 Schritten“ …), `teaser` („+ Markier-Guide § X“), `motiv` ({typ: kalender, monat, tag, unter} · {typ: zahlblock, zeilen: [[text, stil, size], …]} · {typ: icon, name: "tabler:…", farbe}), `figur` |
| `schritte` | `titel`, `schritte`: [[titel, norm, text], …] (3–5), `teaser` (gelbe Leiste „Am Ende: § X markiert“) |
| `inhalt` | `titel`, `punkte`: [[text, zeichen ok\|nein\|warn\|null, stil Regular\|Bold\|ExtraBold, norm\|null], …], `extra`: [text, farbe, norm\|null], `falle`: true (Klausurfalle), `fundstellen`: […], `figur` + `x` (290 links / 790 rechts) + `blase`, `kalender`: [[monat, tag, unter], [monat, tag, unter]] |
| `zeitstrahl` | `titel`, `zeilen`: [[datum, text, farbe, norm\|null], …], `figur`, `x`, `blase` |
| `rechnung` | `titel`, `normen`: [..], `zeilen`: [[label, betrag, stil, farbe\|null], …] (≤ 7), `extra`: [text, farbe], `figur`, `x`, `blase` |
| `vergleich` | `titel`, `links`/`rechts`: {kopf, farbe, punkte: [[text, norm\|null], …]}, `figur`, `x`, `blase` |
| `merke` | `oben`: [zeile1, zeile2, farbe] (Lösung/Formel), `zeilen`: [[[text, "a"\|null], …], …] (Markierungen a–d, ≤ 4 Zeilen, je ≤ 26 Zeichen), `speichern`, `frage`, `teaser` |
| `gesetz` | `titel` („Im Gesetz markieren“ / „Im Erlass markieren“ / „In der Richtlinie markieren“), `kopf` („§ 108 Fristen und Termine“ bzw. „AEAO zu § 108 · Beck-Erlass 800 § 108/1“), `absaetze`: [[nr\|null, [[text, mark\|null], …]], …] (mark: g1, b1, r1, gr1 … – gelb, blau, rot, grün), `notizen`: [[text, mark], …] (≤ 4, kurz), `randnotiz`: [zeile1, zeile2] |

Grenzen (der Renderer bricht sonst ab): ≤ 40 Wörter je Folie (Normen zählen als ein Wort), Titel einzeilig.
Gesetzestext nur im Wortlaut der aktuellen Fassung (gesetze-im-internet.de), Auslassungen mit „[…]“.

## Reel
```jsonc
{ "slot": "b3", "format": "reel", "reelTyp": "rechnung", …, "figuren": {…},
  "sprecher": [ {"id": "hook", "text": "…"}, {"id": "s1", "text": "…"}, {"id": "s2", "text": "…"}, {"id": "cta", "text": "…"} ],
  "hook": {"zeilen": ["Dollar steigt.", "Schuld steigt?"], "pille": "Fremdwährungsschulden", "figur": "A/sorge", "name": "Ben",
           "icons": [["tabler:coin", "GELB", "<Wort, bei dem es verschwindet>"]],
           "stil": "split|kippen|knall",
           "split": [{"label": "Handelsbilanz", "wert": "100.000 €", "farbe": "GRUEN", "wort": "Handelsbilanz"}, {…}],   // nur split
           "richtig": {"label": "Richtig", "text": "…", "wort": "…", "farbe": "GRUEN"},                                       // nur kippen
           "stempel": {"text": "meist nicht!", "wort": "nicht"}},
  "szenen": [ {"seg": "s1", "titel": "Bei Aufnahme", "elemente": [ … ], "icon": ["tabler:coins", "GELB", "<wort>"],
               "sfx": [["muenzen", "<wort>", 0.9]], "figur": {"ref": "A:froh", "wort": "…", "hoehe": 440}} , … ],
  "merke": {"seg": "cta", "zeilen": [4 Zeilen], "woerter": [null, "nie", …], "cta": "Speichern für Klausur 3", "cta_wort": "…",
            "hinweis": "Alle Fundstellen in der Beschreibung"},
  "caption": "…" }
```
Elemente einer Szene (erscheinen beim gesprochenen `wort`, `neu: true` räumt die Szene leer):
`{"typ": "zahl", "text": "120.000 $", "size": 130}` · `{"typ": "pille", "text": "12 Jahre", "farbe": "WEISS"}` ·
`{"typ": "block", "label": "Zugangswert", "wert": "80.000 €", "farbe": "GELB"}` · `{"typ": "text", "text": "Höher nur bei", "unter": "dauernder Erhöhung"}` ·
`{"typ": "norm", "text": "§ 256a HGB"}` (höchstens eine je Szene). Jedes `wort` muss im Sprechertext des Segments
vorkommen (Wortanfang genügt, `nr` für das n-te Vorkommen). Sprechertext gesamt ≤ 520 Zeichen (≤ 45 s),
Zahlen und Paragrafen ausgeschrieben, wie sie gesprochen werden („Paragraf sechzehn“), keine Aufzählung
„eins, zwei, drei“. Geräusche: stempel, riss, rechner, muenzen. Icons: Iconify-Set tabler.

## Stories
Gemeinsam: `slot, zeit, art, klausur, fachLabel, themaId` (aus dem Rahmenplan), optional `figuren` + `figur`.
| art | Felder |
|---|---|
| `frage` | `frage` (2–3 Zeilen), `optionen` (3), `figur` |
| `antwort` | `titel` (1–2 Zeilen, Lösung), `optionen`, `richtig` (Index), `text`, `norm`, `figur` (dieselbe wie bei der Frage) |
| `teaser` | `beitragSlot`, `titel` ([1 Zeile]), `unter` („Prüfschema + Markier-Guide · im Profil“) |
| `norm` | `titel` (2 Zeilen), `norm`, `punkte`: [[text, ok\|warn\|nein, norm], …] (2), `figur` |
| `tipp` | `titel` (2 Zeilen), `normImTitel`, `punkte` (≤ 4), `icon`, `iconFarbe`, `figur` |
| `merksatz` | `titel` (2 Zeilen), `zeilen` (Markertext wie merke), `norm`, `figur` |
| `countdown` | `zahl`, `titel`, `punkte` (2–3), `figur` |
| `anlass` | `titel`, `text`, `punkte`, `figur` |
≤ 25 Wörter je Story. Figuren-Kürzel der Stories sind tageweit eindeutig (z. B. Q für das Quizpaar, N, T, M, C) – das Quizpaar nutzt dieselbe Figur.
