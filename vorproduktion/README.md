# Vorproduktion · Examenscampus

Dieser Ordner ist die Steuerstelle für die Review-Vorproduktion des Examenscampus. Die technische Idee entspricht dem Schwesterkanal **Herrjurist**, die fachliche und farbliche Semantik bleibt aber vollständig beim Examenscampus.

## Verbindliche Trennung

**Vom Herrjurist übernommen werden die Layout-Regeln:** Feed 1080×1350 (4:5), Stories und Reel-Cover 1080×1920 (9:16), dieselbe Cover-Hierarchie, dieselben sicheren Innenzonen, dieselben Einpass-/Geometrie-Gates und dieselben Layout-Karten für den Dashboard-Editor. Bildlose Review-Cover bekommen keine handschriftliche Ersatznotiz, sondern ein thematisch passendes Icon aus dem lokal installierten Iconify-Satz. Reel-Cover bleiben echte 9:16-Kompositionen; die wichtigen Informationen liegen zusätzlich in der 4:5-Profil-Safe-Area.

**Nicht übernommen werden Farben oder fachliche Kategorien.** Maßgeblich bleiben ausschließlich:

- `social/src/feedfarben.mjs` für sichtbare Kategorien und Reihenfolge,
- `social/src/inhalte.mjs` für Fächer und Klausuren,
- `social/src/config.mjs` für die Examenscampus-Markenregel,
- `social/src/planer.mjs` für Tagesplan, Formate und Prüfungstage.

Damit gilt weiterhin: **K1 = Blau**, **K2 = Orange**, **K3 = Grün**. Violett bleibt Inhalten ohne einzelnen Prüfungstag vorbehalten, Gold dem Wochenrückblick. Fachgebundene Klausurtechnik bleibt in der Farbe der zugehörigen Klausur. Die Vorproduktion darf keine Jura-Kategorien des Schwesterkanals (Zivilrecht, Strafrecht, Öffentliches Recht) einführen.

## Ablauf

Die Review-Daten und Renderings werden – wie beim Schwesterkanal – im Asset-Zweig `instagram-assets` unter `vorproduktion/YYYY-MM-DD` abgelegt. Der Hauptzweig enthält nur die Werkzeuge und diesen Vertrag.

Der providerfreie Review-Lauf besteht aus zwei Schritten:

```bash
cd social
node bin/vorproduktion-vorbereiten.mjs 2026-09-29 2026-09-30
IG_STIMME=piper IG_BILD_KI=false IG_CHARAKTERE=false \
  node bin/vorproduktion-ohne-coverbilder-rendern.mjs 2026-09-29 2026-09-30
```

Bequemer ist der manuelle GitHub-Workflow **„Vorproduktion · Examenscampus Review“**. Er verlangt die gewünschten Datumswerte ausdrücklich; ein Merge startet daher nicht automatisch eine Vorproduktion.

### Monatsserie mit drei Klausuren pro Tag

Für den Review vom 29.09. bis 28.10.2026 setzt der Vorbereiter mit
`IG_REEL_ZUSAETZLICH=true IG_VORPRODUKTION_DREI_KLAUSUREN=true` täglich
zwei Karussells und ein Reel an. Die Slots folgen K3 → K1 → K2 zu 08:30,
13:30 und 19:00 Uhr (Europe/Berlin). Diese Reihenfolge setzt die vorhandene
Feedfolge vom 28.09. ohne doppelte Klausurfarbe fort. Prüfungstage behalten
die drei Fachslots; aus tatsächlich noch unbekannten Klausurthemen werden
keine Lösungsskizzen erfunden.

Der Monatslauf verwendet die Themen der vorherigen Review-Tage und sperrt
jedes Thema für 60 Tage. Er bricht ab, wenn kein unverbrauchtes und formal
geeignetes Thema gefunden wird. Nach Auswahl aller Feedthemen ordnet er
eigenständige Stories neu zu: Sie wiederholen weder ein Feedthema des Monats
noch ein anderes Storythema oder ein Thema der vorherigen Review-Tage.
Quizfrage und unmittelbare Auflösung bilden weiterhin ein Paar.

Die JSON-Dateien enthalten für jeden Feed-Slot eine `coverRegie` mit zwei
Golden-Reference-Pfaden, Handlung und eindeutigem Bilddateinamen. Diese
Regie ist ein Bildauftrag, kein gerendertes Cover. Ohne Renderlauf bleibt
`renderVorschau.status` auf `ausstehend` und `freigabeBetreiber` auf `false`.
`IG_NO_PUSH=true` erlaubt, den Review-Lauf lokal vorzubereiten, ohne den
Asset-Zweig zu verändern.

## Prüfungstage

Die Mengen werden **nicht** aus Herrjurist kopiert. Es gilt immer der aktuelle Examenscampus-Tagesplan. Das ist besonders an den drei schriftlichen Prüfungstagen wichtig: Der Planer reduziert dort eigenständige Stories bewusst.

Lösungsskizzen am Prüfungsabend sind absichtlich nicht vorproduzierbar. Sie hängen von den tatsächlich berichteten Klausurthemen ab. Solche Slots werden als `wartet-auf-live-recherche` markiert und weder erfunden noch mit Platzhalter-Fachinhalt gerendert.

## Live-Vorrang ab 26.09.2026

Im stündlichen Instagram-Lauf gilt ein harter Kosten-Gate: **Existiert für das Datum eine Datei `vorproduktion/YYYY-MM-DD.json`, hat diese Vorproduktion immer Vorrang und der normale kostenpflichtige Content-Lauf wird vollständig übersprungen.** Das gilt auch für ältere Dateien, deren historische Review-Metadaten noch `freigabeBetreiber: false` oder `liveRegel.veroeffentlichen: false` enthalten.

Nur wenn für den betreffenden Kalendertag **gar keine Vorproduktionsdatei** existiert, fällt der Lauf auf die normale Pipeline zurück. Ist eine vorhandene Vorproduktion noch nicht fertig gerendert, bleibt der Normalbetrieb ebenfalls pausiert; dadurch entstehen keine ersatzweisen API-Kosten.

Live verwendet dabei nur die bereits vorproduzierten Texte, Stories und Reel-Videos. Fehlende Coverbilder werden lokal durch passende Icons ersetzt; vorhandene Bilder bleiben erhalten. Es werden keine Text-KI-, Faktencheck-, Bild-, Pexels- oder ElevenLabs-Aufrufe gestartet. Notwendig bleibt ausschließlich die Instagram Graph API zum eigentlichen Veröffentlichen; dafür fallen keine Providerkosten an.

## Kosten- und Freigaberegel

Der Vorproduktionslauf verweigert OpenAI-, Anthropic-, ElevenLabs- und Pexels-Secrets, deaktiviert Bild-KI/Charaktere und nutzt für Reels ausschließlich Piper offline. Seit dem 26.09.2026 gilt: **Das Vorhandensein der Tagesdatei ist zugleich die Live-Vorrangentscheidung.** Neue Vorproduktionstage werden deshalb als `live-freigegeben` markiert; ein zusätzlicher Freigabeschalter ist für den Lauf nicht erforderlich.

## Stand der 30-Tage-Serie · 26.09.2026

Der Zeitraum **29.09.–28.10.2026** ist vollständig vorbereitet und gerendert: 30 Tage, 90 Feed-Inhalte (60 Karussells + 30 Reels), 90 abgeleitete Feed-Teaser und 162 eigenständige Story-Slots. Die Prüfungstage 06.–08.10. enthalten planmäßig keine zusätzlichen eigenständigen Stories. Alle Renderings sind providerfrei erstellt. Ab dem 26.09.2026 werden sie an ihrem jeweiligen Kalendertag automatisch bevorzugt veröffentlicht; der normale Lauf greift nur an Tagen ohne Vorproduktionsdatei.
