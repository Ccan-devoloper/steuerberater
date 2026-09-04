# Instagram-Bot · Examenscampus

Erstellt und veröffentlicht **vollautomatisch** jeden Tag 2–3 Beiträge (Carousels) und bis zu 10 Stories
für Instagram – aus den Lerninhalten dieser Webseite (alle drei Klausuren) und aus aktuellen Meldungen
aus dem Web. Kein Inhalt wird 1:1 übernommen: Der Bot bekommt nur Themen-Skelette (Titel, Normen,
Prüfgedanken), schreibt alles neu und prüft jeden Entwurf automatisch auf wörtliche Übernahmen,
Fallnamen und Quellenbezüge.

```
Themenpool (436 Themen)  →  Tagesplan  →  Claude schreibt  →  Prüfung  →  Chromium rendert JPEG
         ↓                                                                        ↓
  src/data der Webseite                       Asset-Zweig „instagram-assets“ (öffentliche Bild-URLs)
                                                                                  ↓
                                              Instagram Graph API: Carousel / Story veröffentlichen
```

## Was der Bot täglich tut

| | Werktag | Wochenende |
| --- | --- | --- |
| Beiträge (Carousel, 4–5 Folien, 1080×1350) | 3 (07:30 · 12:30 · 18:00) | 2 |
| Stories (1080×1920) | 9, verteilt 07:00–21:30 | 9 |

**Beitragsformate** (Wochenplan in `src/config.mjs`): Prüfungsfrage · Fehlerfalle · Prüfschema ·
Rechenweg · Mini-Fall (frei erfunden) · Gegenüberstellung · Klausurtechnik · Wochenrückblick (So) ·
**Aktuell** (Mi, Web-Recherche: BFH, BMF, Gesetzesänderungen, Prüfungstermine).

**Story-Arten**: Teaser zum Beitrag · Prüfungsfrage + Auflösung · Norm des Tages · Merksatz ·
Rechenweg · Begriff · Fehlerfalle · Klausurtipp · Zahl des Tages · Countdown bis zur Prüfung.

Themenwahl: gewichtet nach Examenspriorität der Webseite (🔴 60 % / 🟠 25 % / 🟢 15 %), Rotation über
alle Fächer, ein Thema frühestens nach 60 Tagen erneut (Ledger im Asset-Zweig).

**Optik**: Kanzlei-Stil, Kachel für Kachel im Wechsel Schwarz und Weiß (Schachbrett im Profil;
`IG_STIL_WECHSEL=false` schaltet das ab). Auf keiner Folie steht ein Name, ein Handle oder eine
Website – unten links bleibt Platz für das Handle, sobald `IG_HANDLE` gesetzt ist. Eine Website
(`IG_WEBSITE`) wird nur in Captions genannt und nur, wenn sie gesetzt ist. Zusätzlich zur Anweisung an
den Autor entfernt ein Filter jede Nennung von Website, Plattform oder „Link in Bio“.

**Interaktion**: Bei jedem Lauf liest der Bot die Kommentare unter den letzten 12 Beiträgen und
beantwortet neue Kommentare der letzten 14 Tage – kurz, fachlich, mit Norm, per Du. Nicht
beantwortet werden eigene Kommentare, bereits beantwortete, Spam, Werbung, reine Emojis und Bitten um
individuelle Steuerberatung. Höchstens 15 Antworten je Lauf (`IG_MAX_ANTWORTEN`), abschaltbar mit
`IG_INTERAKTION=false`. Alle Antworten stehen im Ledger.

## Einmalige Einrichtung (ca. 30 Minuten, danach nie wieder)

### 1. Instagram-Konto vorbereiten
1. Instagram-Konto in ein **Business-Konto** umwandeln (Einstellungen → Konto → Zu professionellem Konto wechseln → Unternehmen). Stories lassen sich über die API nur mit Business-Konten veröffentlichen.
2. Profil ausfüllen: Name, Bio, Website-Link (die Beiträge sagen „Link in Bio“).

### 2. Meta-App und Zugriffstoken
Empfohlen: **Instagram-API mit Instagram-Login** (kein Facebook-Seitenzwang).
1. https://developers.facebook.com → *Meine Apps* → *App erstellen* → Anwendungsfall „Instagram“ (Business).
2. Im App-Dashboard unter **Instagram → API-Einrichtung mit Instagram-Login**: das Instagram-Konto hinzufügen und die Berechtigungen `instagram_business_basic`, `instagram_business_content_publish` und `instagram_business_manage_comments` (Kommentar-Antworten) bestätigen.
3. Dort **„Token generieren“** → es entsteht ein **langlebiger Token (60 Tage)**. Den Token und die angezeigte **Instagram-Konto-ID** kopieren.
4. Der Bot verlängert den Token **automatisch** (spätestens 20 Tage vor Ablauf) und legt ihn verschlüsselt im Asset-Zweig ab. Dafür braucht er einen frei gewählten Schlüssel (`IG_TOKEN_KEY`, beliebige lange Zeichenkette). Es ist danach keine manuelle Erneuerung mehr nötig.

Alternative: Instagram-Konto mit Facebook-Seite verbunden → `IG_GRAPH_HOST=facebook` und einen
**Seiten-Zugriffstoken ohne Ablauf** (über einen langlebigen Nutzer-Token erzeugt) verwenden; dann entfällt
die Verlängerung ganz. Berechtigungen dort: `instagram_basic`, `instagram_content_publish`,
`instagram_manage_comments`, `pages_show_list`, `pages_read_engagement`.

### 3. Claude-API-Schlüssel
https://platform.claude.com → API-Schlüssel erstellen und Guthaben aufladen.

**Warum das Geld kostet:** Der Bot selbst ist kostenlos (GitHub Actions ist für öffentliche
Repositories gratis). Bezahlt wird nur das Schreiben der Texte: Für jeden Beitrag, jede Story-Runde,
jede Recherche und jede Kommentarantwort ruft der Bot die Claude API auf, und Anthropic rechnet das
nach verarbeiteten Wörtern (Tokens) ab – eine eigene Abrechnung mit Guthaben, unabhängig von einem
Claude-Abo. Standardmodell ist `claude-opus-5` (5 $ je Million Eingabe-Tokens, 25 $ je Million
Ausgabe-Tokens).

| Aufruf | je Tag | Tokens rein / raus (ca.) | Kosten |
| --- | --- | --- | --- |
| Beitrag schreiben (inkl. Nachbesserung) | 3 | 6.000 / 2.500 | 0,28 $ |
| Stories schreiben (ein Aufruf für alle) | 1 | 6.000 / 2.500 | 0,09 $ |
| Web-Recherche (nur mittwochs) | 1/7 | 15.000 / 3.000 | 0,02 $ |
| Kommentare beantworten | 3–5 | 3.000 / 500 | 0,08 $ |

Rund **0,45 $ ≈ 0,40 € pro Tag, also etwa 12 € im Monat**. Der stabile Teil des Prompts wird
zwischengespeichert (Prompt-Caching), was die Eingabekosten stark senkt – real eher 0,25 € pro Tag.
Mit `IG_KI_MODELL=claude-sonnet-5` (2 $ / 10 $) halbiert sich der Betrag noch einmal.

### 4. Secrets und Variablen im Repository setzen
GitHub → Repository → *Settings* → *Secrets and variables* → *Actions*

**Secrets**

| Name | Wert |
| --- | --- |
| `ANTHROPIC_API_KEY` | Claude-API-Schlüssel |
| `IG_ACCESS_TOKEN` | Instagram-Token aus Schritt 2 |
| `IG_ACCOUNT_ID` | Instagram-Konto-ID (Zahl) |
| `IG_TOKEN_KEY` | frei gewählter Schlüssel für den Token-Tresor |
| `ELEVENLABS_API_KEY` | *optional*: Schlüssel von elevenlabs.io – schaltet Reels mit Sprecherstimme frei |

**Variables** (Reiter *Variables*)

| Name | Beispiel | Bedeutung |
| --- | --- | --- |
| `IG_HANDLE` | leer | Handle unten links auf jeder Kachel – solange leer, steht dort nichts |
| `IG_STIL` | `kanzlei` | Stil: `kanzlei` (schwarz, herrjurist-Look) · `klausurbogen` (Papier/Tinte wie die Webseite) · `campus` (Indigo/Limette) |
| `IG_WEBSITE` | leer | nur in Captions, nur wenn gesetzt – nie auf Kacheln |
| `IG_MARKE` | leer | Kanalname im Prompt (nicht auf den Kacheln) |
| `IG_STIL_WECHSEL` | `true` | Kanzlei-Stil im Wechsel Schwarz/Weiß |
| `IG_INTERAKTION` | `true` | Kommentare automatisch beantworten |
| `ELEVENLABS_VOICE_ID` | *(Voice ID)* | Stimme für Reels; Reels laufen nur mit Secret `ELEVENLABS_API_KEY` |
| `IG_REELS` | `true` | Reels abschalten mit `false` |
| `IG_GRAPH_HOST` | `instagram` | `instagram` (Instagram-Login) oder `facebook` (Seiten-Token) |
| `IG_EXAMEN_DATUM` / `IG_EXAMEN_ENDE` | `2026-10-06` / `2026-10-08` | Countdown; nach der Prüfung auf das Folgejahr setzen (bundeseinheitlich Anfang Oktober) |

### 5. Erster Lauf
*Actions* → *Instagram-Bot* → *Run workflow* → Modus **trocken**. Der Lauf schreibt und rendert alles,
legt Bilder und Zustand im Zweig `instagram-assets` ab, veröffentlicht aber nichts. Bilder ansehen unter
`instagram-assets/bilder/<Datum>/`. Danach Modus **live** einmal manuell starten – ab dann läuft der
Zeitplan (stündlich, Cron in `.github/workflows/instagram.yml`) von selbst.

## Betrieb

- **Ablauf je Stunde**: Plan des Tages laden (oder erzeugen) → alle Einträge, deren Uhrzeit erreicht ist, schreiben, rendern, hochladen, veröffentlichen → Zustand committen. Wurde ein Lauf verpasst, holt der nächste ihn nach. Nichts wird doppelt veröffentlicht (Status je Eintrag im Tagesplan).
- **Tageslimit** der Instagram-API: 100 Veröffentlichungen je 24 h; der Bot hält 10 Reserve.
- **Fehler**: Ein fehlgeschlagener Eintrag wird beim nächsten Lauf erneut versucht; der Workflow ist dann rot und hängt die Ausgaben als Artefakt an. Läufe, in denen nichts fällig ist, dauern unter einer Minute.
- **Zustand** (`instagram-assets/state/`): `ledger.json` (was wann veröffentlicht wurde), `plaene/<Datum>.json`, `inhalte/<Datum>-<Slot>.json` (die fertigen Texte), `token.enc` (verschlüsselter Token). Bilder älter als 21 Tage werden gelöscht.

## Lokal ausprobieren

```bash
cd social && npm install
npm run beispiele                                  # rendert die Beispielposts in allen drei Stilen nach beispiele/out
node src/planer.mjs 2026-09-14                     # Tagesplan ansehen
IG_AUTOR=beispiele IG_DRY_RUN=true IG_NO_PUSH=true node src/lauf.mjs --alles   # ganzer Tageslauf ohne API-Aufrufe
ANTHROPIC_API_KEY=… IG_DRY_RUN=true IG_NO_PUSH=true node src/lauf.mjs --alles  # mit echten Texten, ohne Veröffentlichung
npm test
```

Für das Rendern wird Chromium gebraucht: `npx playwright install chromium` (oder `CHROMIUM_PATH` setzen).

## Projektstruktur

```
social/
  src/
    config.mjs      Marke, Zeiten, Formatplan, Modell, Hosting – alles Einstellbare
    inhalte.mjs     Themenpool aus src/data (ohne Fälle, Namen, Quellenbezüge)
    planer.mjs      Tagesplan (deterministisch je Datum) + Ledger
    autor.mjs       Claude API: Beiträge, Stories, Web-Recherche; Formate
    pruefung.mjs    Eigenständigkeitsprüfung (7-Wort-Shingles gegen alle Webseitendaten, Namen, Längen)
    stile.mjs       drei Stile + Icon-Set
    vorlagen.mjs    HTML/CSS der Folien- und Story-Arten
    interaktion.mjs Kommentare lesen, Antworten formulieren, posten
    reel.mjs        Reel: Zeitplan, Frame-Animation, ffmpeg-Schnitt
    stimme.mjs      Sprecherstimme (ElevenLabs mit Wort-Zeitmarken)
    render.mjs      Playwright → JPEG
    hosting.mjs     Asset-Zweig: Bilder, Zustand, öffentliche URLs
    instagram.mjs   Graph API: Container, Carousel, Stories, Limit, Token-Tresor
    lauf.mjs        Tageslauf (Actions-Einstiegspunkt)
    beispiele.mjs   Beispielposts rendern
  beispiele/inhalte.json   Beispielinhalte (auch als Vorbild im Prompt)
  config/namen-sperrliste.json  zusätzlich gesperrte Namen
  fonts/            Anton, Oswald, Inter, Space Grotesk, IBM Plex (OFL)
  test/             node --test
```

## Reels (Video mit Sprecherstimme)

Reels sind der größte Reichweiten-Hebel auf Instagram. Der Bot baut sie aus einem Skript mit
6–8 Szenen: Bildschirmtext (Essenz) plus Sprechertext (Erklärung), 45–60 Sekunden, Hochformat,
mitlaufende Untertitel Wort für Wort, dezentes Klangbett, Cover-Bild. Format: MP4, H.264, AAC,
1080×1920, 30 fps – direkt über die Graph API als `REELS` veröffentlicht (`share_to_feed`).

**Stimme.** Die Sprecherstimme kommt von [ElevenLabs](https://elevenlabs.io) (Modell `eleven_v3`),
derzeit die natürlichsten deutschen Stimmen. Der Sprechertext wird bewusst fürs Sprechen
geschrieben: kurze Hauptsätze, Pausen, „Also:“, „Kurz gesagt:“ – nicht Lehrbuch. ElevenLabs liefert
Wort-Zeitmarken, daran hängen die Untertitel exakt.

Einrichtung (5 Minuten):
1. https://elevenlabs.io → Konto anlegen. Der Tarif **Starter** (etwa 5 $/Monat, 30.000 Zeichen)
   reicht für drei Reels pro Woche (ein Reel ≈ 900 Zeichen).
2. Unter *Voices* eine deutsche Stimme wählen (Voice Library → Sprache Deutsch → z. B. eine ruhige,
   erwachsene Erzählstimme) und ihre **Voice ID** kopieren. Anhören lohnt sich: Die Stimme prägt den Kanal.
3. Unter *API Keys* einen Schlüssel erzeugen.
4. Im Repository: Secret `ELEVENLABS_API_KEY` (der Schlüssel) und Variable `ELEVENLABS_VOICE_ID`
   (die Voice ID). Fertig – Reels sind damit automatisch aktiv.

Rhythmus: An Reel-Tagen (Standard Di, Do, Sa – `reel.tage` in `src/config.mjs`) ist der 18-Uhr-Beitrag
ein Reel statt eines Carousels. Ohne ElevenLabs-Schlüssel bleibt alles beim Carousel; mit
`IG_REELS=false` lassen sich Reels trotz Schlüssel abschalten.

Lokal testen: `node src/reel.mjs beispiele/reel.json beispiele/reel-out` baut das Beispiel-Reel;
ohne Schlüssel stumm mit Platzhalter-Timing, mit Schlüssel mit Stimme. Voraussetzung: `ffmpeg`
im Pfad (auf den GitHub-Runnern vorinstalliert) oder `FFMPEG_PATH`.

## Was der Bot bewusst nicht tut

- Kein automatisches Folgen, Liken oder Kommentieren fremder Konten – das verstößt gegen die
  Instagram-Nutzungsbedingungen und bringt keine echten Follower. Die offizielle API erlaubt es ohnehin nicht.
  Interaktion findet nur unter den eigenen Beiträgen statt (Antworten auf Kommentare).
- Keine Sticker (Umfragen, Quiz-Sticker) in Stories – die API unterstützt sie nicht; Quiz-Stories arbeiten
  deshalb mit Frage- und Auflösungskarte.

## Grenzen und Ehrlichkeit

Der Bot liefert Konsistenz, Qualität und Frequenz – die drei Dinge, die organisches Wachstum
tragen. Ob 5.000 Follower bis Anfang 2027 und 15.000 bis Mitte 2027 erreicht werden, hängt
zusätzlich von Faktoren ab, die kein Skript steuert (Reels, Interaktion in Kommentaren, Kooperationen
mit Repetitorien, Nischengröße: pro Jahr etwa 5.000 Prüflinge). Die Zahlen im Instagram-Insights-Reiter
sind die Messlatte; die Formate und der Wochenplan lassen sich in `src/config.mjs` jederzeit anpassen.
