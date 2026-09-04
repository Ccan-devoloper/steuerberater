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

## Einmalige Einrichtung (ca. 30 Minuten, danach nie wieder)

### 1. Instagram-Konto vorbereiten
1. Instagram-Konto in ein **Business-Konto** umwandeln (Einstellungen → Konto → Zu professionellem Konto wechseln → Unternehmen). Stories lassen sich über die API nur mit Business-Konten veröffentlichen.
2. Profil ausfüllen: Name, Bio, Website-Link (die Beiträge sagen „Link in Bio“).

### 2. Meta-App und Zugriffstoken
Empfohlen: **Instagram-API mit Instagram-Login** (kein Facebook-Seitenzwang).
1. https://developers.facebook.com → *Meine Apps* → *App erstellen* → Anwendungsfall „Instagram“ (Business).
2. Im App-Dashboard unter **Instagram → API-Einrichtung mit Instagram-Login**: das Instagram-Konto hinzufügen und die Berechtigungen `instagram_business_basic` und `instagram_business_content_publish` bestätigen.
3. Dort **„Token generieren“** → es entsteht ein **langlebiger Token (60 Tage)**. Den Token und die angezeigte **Instagram-Konto-ID** kopieren.
4. Der Bot verlängert den Token **automatisch** (spätestens 20 Tage vor Ablauf) und legt ihn verschlüsselt im Asset-Zweig ab. Dafür braucht er einen frei gewählten Schlüssel (`IG_TOKEN_KEY`, beliebige lange Zeichenkette). Es ist danach keine manuelle Erneuerung mehr nötig.

Alternative: Instagram-Konto mit Facebook-Seite verbunden → `IG_GRAPH_HOST=facebook` und einen
**Seiten-Zugriffstoken ohne Ablauf** (über einen langlebigen Nutzer-Token erzeugt) verwenden; dann entfällt
die Verlängerung ganz.

### 3. Claude-API-Schlüssel
https://platform.claude.com → API-Schlüssel erstellen. Der Bot nutzt `claude-opus-5`; Kosten liegen
bei etwa 0,15–0,40 € je Tag (3 Beiträge, 9 Stories, eine Web-Recherche pro Woche).

### 4. Secrets und Variablen im Repository setzen
GitHub → Repository → *Settings* → *Secrets and variables* → *Actions*

**Secrets**

| Name | Wert |
| --- | --- |
| `ANTHROPIC_API_KEY` | Claude-API-Schlüssel |
| `IG_ACCESS_TOKEN` | Instagram-Token aus Schritt 2 |
| `IG_ACCOUNT_ID` | Instagram-Konto-ID (Zahl) |
| `IG_TOKEN_KEY` | frei gewählter Schlüssel für den Token-Tresor |
| `PEXELS_API_KEY` | *optional*: kostenloser Schlüssel von https://www.pexels.com/api – dann bekommen Titelfolien ein Stockfoto wie bei herrjurist; ohne Schlüssel werden Icons gerendert |

**Variables** (Reiter *Variables*)

| Name | Beispiel | Bedeutung |
| --- | --- | --- |
| `IG_HANDLE` | `@examenscampus` | wird auf jede Kachel gedruckt |
| `IG_STIL` | `kanzlei` | Stil: `kanzlei` (schwarz, herrjurist-Look) · `klausurbogen` (Papier/Tinte wie die Webseite) · `campus` (Indigo/Limette) |
| `IG_WEBSITE` | `ccan-devoloper.github.io/steuerberater` | Adresse auf den Kacheln |
| `IG_MARKE` | `Examenscampus` | Name des Kanals |
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
    render.mjs      Playwright → JPEG
    fotos.mjs       optionale Stockfotos (Pexels)
    hosting.mjs     Asset-Zweig: Bilder, Zustand, öffentliche URLs
    instagram.mjs   Graph API: Container, Carousel, Stories, Limit, Token-Tresor
    lauf.mjs        Tageslauf (Actions-Einstiegspunkt)
    beispiele.mjs   Beispielposts rendern
  beispiele/inhalte.json   Beispielinhalte (auch als Vorbild im Prompt)
  config/namen-sperrliste.json  zusätzlich gesperrte Namen
  fonts/            Anton, Oswald, Inter, Space Grotesk, IBM Plex (OFL)
  test/             node --test
```

## Was der Bot bewusst nicht tut

- Kein automatisches Folgen, Liken oder Kommentieren fremder Konten – das verstößt gegen die
  Instagram-Nutzungsbedingungen und bringt keine echten Follower. Die offizielle API erlaubt es ohnehin nicht.
- Keine Sticker (Umfragen, Quiz-Sticker) in Stories – die API unterstützt sie nicht; Quiz-Stories arbeiten
  deshalb mit Frage- und Auflösungskarte.
- Keine Reels. Das ist der größte Reichweiten-Hebel, den der Bot noch nicht hat; die Folien ließen sich
  später zu kurzen Videos animieren.

## Grenzen und Ehrlichkeit

Der Bot liefert Konsistenz, Qualität und Frequenz – die drei Dinge, die organisches Wachstum
tragen. Ob 5.000 Follower bis Anfang 2027 und 15.000 bis Mitte 2027 erreicht werden, hängt
zusätzlich von Faktoren ab, die kein Skript steuert (Reels, Interaktion in Kommentaren, Kooperationen
mit Repetitorien, Nischengröße: pro Jahr etwa 5.000 Prüflinge). Die Zahlen im Instagram-Insights-Reiter
sind die Messlatte; die Formate und der Wochenplan lassen sich in `src/config.mjs` jederzeit anpassen.
