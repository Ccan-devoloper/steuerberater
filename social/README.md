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

**Story-Arten**: Teaser zum Beitrag · Prüfungsfrage + Auflösung (direkt hintereinander) · Norm des Tages · Merksatz ·
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
2. Im App-Dashboard unter **Instagram → API-Einrichtung mit Instagram-Login**: das Instagram-Konto hinzufügen und die Berechtigungen `instagram_business_basic`, `instagram_business_content_publish`, `instagram_business_manage_comments` (Kommentar-Antworten), `instagram_business_manage_insights` (Lernschleife) und `instagram_business_manage_messages` (Karten per Nachricht) bestätigen.
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
Claude-Abo.

Was in den ersten Läufen auffiel: Hoher Denkaufwand („effort high“) und drei Nachbesserungsrunden je
Beitrag haben den Verbrauch etwa verdreifacht. Deshalb gilt jetzt: Beiträge und Reels mit
`claude-opus-5` (5 $ / 25 $ je Million Tokens rein/raus) bei „effort medium“; Stories, Recherche und
Kommentare mit `claude-sonnet-5` (2 $ / 10 $); der feste Prompt-Teil ist groß genug für
Prompt-Caching (Cache-Lesen kostet ein Zehntel).

| Aufruf | je Tag | Tokens rein / raus (ca.) | Kosten |
| --- | --- | --- | --- |
| Beitrag/Reel schreiben, Opus 5 (inkl. Nachbesserung) | 3 | 8.000 (meist aus dem Cache) / 4.000 | 0,33 $ |
| Stories schreiben, Sonnet 5 (ein Aufruf für alle) | 1 | 8.000 / 3.000 | 0,04 $ |
| Web-Recherche, Sonnet 5 (nur mittwochs) | 1/7 | 15.000 / 3.000 | 0,01 $ |
| Kommentare beantworten, Sonnet 5 | 3–5 | 3.000 / 500 | 0,03 $ |

Rund **0,40 $ ≈ 0,35 € pro Tag, also etwa 11 € im Monat**. Sparmodus: Variable
`IG_KI_MODELL` = `claude-sonnet-5` stellt alles auf Sonnet um (≈ 4 € im Monat, Texte etwas einfacher).

**Damit der Bot nie stehen bleibt:** In der Anthropic-Konsole unter *Organisations-Credits* →
**„Automatisches Neuladen aktivieren“** einschalten (z. B. 10 $ nachladen, sobald das Guthaben unter
5 $ fällt). Ohne Guthaben schlagen die Läufe fehl, bis wieder Guthaben da ist.

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
| `ELEVENLABS_VOICE_ID` | *(Voice ID)* | Stimme für ElevenLabs (nur mit Secret `ELEVENLABS_API_KEY`) |
| `IG_STIMME` | leer | Stimmanbieter erzwingen: `elevenlabs` · `piper` · `pico` · `aus` |
| `IG_REELS` | `true` | Reels abschalten mit `false` |
| `IG_GRAPH_HOST` | `instagram` | `instagram` (Instagram-Login) oder `facebook` (Seiten-Token) |
| `IG_EXAMEN_DATUM` / `IG_EXAMEN_ENDE` | `2026-10-06` / `2026-10-08` | Countdown; nach der Prüfung auf das Folgejahr setzen (bundeseinheitlich Anfang Oktober) |

### 5. Erster Lauf
*Actions* → *Instagram-Bot* → *Run workflow* → Modus **trocken**. Der Lauf schreibt und rendert alles,
legt Bilder und Zustand im Zweig `instagram-assets` ab, veröffentlicht aber nichts. Bilder ansehen unter
`instagram-assets/bilder/<Datum>/`. Danach Modus **live** einmal manuell starten – ab dann läuft der
Zeitplan (stündlich, Cron in `.github/workflows/instagram.yml`) von selbst.

## Pausieren und Modus

- **Manueller Start** (Actions → Instagram-Bot → Run workflow): Vorgabe ist **trocken** – es wird alles
  erzeugt und in den Zweig `instagram-assets` gelegt, nichts veröffentlicht. Nur die Auswahl **live**
  veröffentlicht.
- **Zeitplan** (stündlich): veröffentlicht live. Zum Pausieren die Variable `IG_PAUSE` auf `true`
  setzen (Settings → Secrets and variables → Actions → Variables); die Läufe erzeugen dann weiter
  Bilder in den Asset-Zweig, posten aber nicht. Zum Weitermachen die Variable löschen oder auf `false`
  setzen. Alternativ den Workflow unter Actions über „…“ → „Disable workflow“ ganz anhalten.

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
    insights.mjs    Lernschleife: Statistiken lesen, Strategie ableiten
    kalender.mjs    Saisonkalender des Prüfungsjahres
    faktencheck.mjs zweiter Prüfaufruf je Text
    verteilen.mjs   Threads, YouTube, Facebook, TikTok, LinkedIn
    nachrichten.mjs Schlüsselwort → Karte per Direktnachricht
    bericht.mjs     Wochenbericht per E-Mail
    kosten.mjs      API-Verbrauch mitschreiben
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

**Stimme – drei Varianten, automatisch gewählt** (`IG_STIMME` erzwingt eine):

| Anbieter | Qualität | Kosten | Wann aktiv |
| --- | --- | --- | --- |
| `elevenlabs` | am natürlichsten (Atmung, Betonung, Pausen), Wort-Zeitmarken für die Untertitel | ab ≈ 5 $/Monat (Starter, 30.000 Zeichen ≈ 3 Reels/Woche) | sobald Secret `ELEVENLABS_API_KEY` gesetzt ist |
| `piper` | gut – neuronale Offline-Stimme „Thorsten“ (`de_DE-thorsten-high`), klar und ruhig, hörbar synthetischer als ElevenLabs | kostenlos | Standard ohne ElevenLabs-Schlüssel; der Workflow lädt das Modell einmal und cached es |
| `pico` | Notlösung (SVOX Pico, Navi-Qualität) | kostenlos | nur wenn nichts anderes verfügbar ist |

Der Sprechertext wird bewusst fürs Sprechen geschrieben: kurze Hauptsätze, Pausen, „Also:“,
„Kurz gesagt:“ – nicht Lehrbuch. Bei Piper und Pico wird satzweise synthetisiert, damit die
Untertitel je Satz sauber sitzen. Reels sind damit **auch ohne jeden Schlüssel aktiv**
(`IG_REELS=false` schaltet sie ab).

ElevenLabs einrichten (optional, 5 Minuten):
1. https://elevenlabs.io → Konto anlegen (Tarif Starter reicht).
2. Unter *Voices* eine deutsche Stimme wählen (Voice Library → Deutsch → ruhige, erwachsene
   Erzählstimme) und ihre **Voice ID** kopieren. Die Stimme prägt den Kanal – anhören lohnt sich.
3. Unter *API Keys* einen Schlüssel erzeugen.
4. Im Repository: Secret `ELEVENLABS_API_KEY`, Variable `ELEVENLABS_VOICE_ID`.

Rhythmus: An Reel-Tagen (Standard Di, Do, Sa – `reel.tage` in `src/config.mjs`) ist der 18-Uhr-Beitrag
ein Reel statt eines Carousels.

Lokal testen: `node src/reel.mjs beispiele/reel.json beispiele/reel-out` baut das Beispiel-Reel
mit der besten verfügbaren Stimme (`IG_STIMME=aus` für ein stummes Storyboard). Voraussetzung: `ffmpeg`
im Pfad (auf den GitHub-Runnern vorinstalliert) oder `FFMPEG_PATH`.

## Wachstumsbausteine (alle automatisch)

**Lernschleife.** Einmal täglich liest der Bot die Instagram-Statistiken (Reichweite, Speicherungen,
Teilungen, Likes, Kommentare, Reel-Aufrufe) für alle Beiträge der letzten 30 Tage und die Online-Zeiten
der Follower. Daraus entsteht `state/strategie.json`: Gewichte je Format, Fach und Hook-Typ
(Frage / Fehler / Zahl / Aussage) sowie die drei besten Uhrzeiten. Ab sechs bewerteten Beiträgen
passt der Planer den Wochenplan an (schwache Formate weichen dem stärksten), der Autor wählt aus
drei Hook-Varianten die nach Erfahrung beste, und die Beiträge wandern zu den Uhrzeiten, zu denen
die Follower online sind. Berechtigung in der Meta-App: `instagram_business_manage_insights`.
Abschaltbar mit `IG_LERNEN=false`.

**Reels täglich.** Jeden Tag um 18 Uhr ein Kurz-Reel (20–35 s, ein Aha-Punkt), sonntags ein langes
Schema-Reel (bis 60 s). Stimme: Piper „Thorsten“ oder ElevenLabs (siehe oben).

**Spickzettel.** Donnerstags und samstags ein Beitrag, dessen zweite Folie das komplette Prüfschema
als dichte Karte zeigt – das Format, das am meisten gespeichert und geteilt wird. Der CTA lautet
„Kommentiere SCHEMA, dann schicke ich dir die Karte als Nachricht“ (Schlüsselwort: `IG_SCHLUESSELWORT`).

**Schlüsselwort-Nachrichten.** Wer unter einem Spickzettel das Schlüsselwort kommentiert, bekommt die
Karte als Bild per Direktnachricht (private Antwort auf den Kommentar, bis 7 Tage danach möglich).
Voraussetzung: Berechtigung `instagram_business_manage_messages` mit **Advanced Access**. Dafür
verlangt Meta einmalig eine App-Prüfung („App Review“): im App-Dashboard unter *App-Prüfung →
Berechtigungen und Features* die Berechtigung beantragen, Anwendungsfall beschreiben („Automatische
Antwort mit Lernkarte auf Kommentare mit Schlüsselwort unter eigenen Beiträgen“) und ein kurzes
Bildschirmvideo hochladen. Bis zur Freigabe setzt der Bot den Versand selbständig aus und versucht
es täglich neu; alles andere läuft normal. Abschaltbar mit `IG_NACHRICHTEN=false`.

**Saisonkalender.** An Terminen des Prüfungsjahres wird der erste Beitrag des Tages zum Anlass-Beitrag:
100/60/30/14/7/3/1 Tage vor der schriftlichen Prüfung, die drei Prüfungstage, der Tag danach,
Anmeldeschluss 30. April, Vorbereitung auf die mündliche Prüfung (Mitte Januar), Jahreswechsel.
Alle Texte kennen außerdem die Phase im Prüfungsjahr (Grundlagen, Aufbau, heiße Phase, Endspurt).

**Faktencheck.** Jeder Beitrag und jedes Reel-Skript geht vor der Veröffentlichung durch einen zweiten,
unabhängigen Prüfaufruf (Normen, Fristen, Prozentsätze, Rechtsstand). Eindeutige Fehler gehen mit
Korrekturvorschlag an den Autor zurück. Abschaltbar mit `IG_FAKTENCHECK=false`.

**Suchtext.** Die erste Caption-Zeile nennt das Thema mit den Wörtern, die jemand bei Instagram oder
Google eintippen würde – Beiträge tauchen so auch in der Suche auf.

**Weiterverteilen auf andere Plattformen.** Jeder Kanal ist aktiv, sobald seine Zugangsdaten hinterlegt
sind; Fehler auf einem Kanal berühren Instagram nie.

| Kanal | Was | Einmalige Einrichtung | Secrets / Variablen |
| --- | --- | --- | --- |
| Threads | Beiträge als Bild-Carousel + Text, Reels als Video | Meta-App: Anwendungsfall „Threads API“ hinzufügen, Threads-Konto verbinden, langlebigen Token erzeugen (60 Tage; der Bot verlängert ihn wie den Instagram-Token) | `THREADS_ACCESS_TOKEN`, `THREADS_USER_ID` |
| YouTube Shorts | Reels als Shorts | Google Cloud: Projekt, YouTube Data API v3 aktivieren, OAuth-Client (Desktop), einmal per OAuth-Playground `youtube.upload` freigeben → Refresh-Token (läuft nicht ab, solange die App „In Produktion“ steht) | `YT_CLIENT_ID`, `YT_CLIENT_SECRET`, `YT_REFRESH_TOKEN` |
| Facebook-Seite | Beiträge als Foto-Post, Reels als Reel | Facebook-Seite anlegen, Seiten-Token ohne Ablauf (über langlebigen Nutzer-Token) mit `pages_manage_posts`, `pages_read_engagement` | `FB_PAGE_TOKEN`, `FB_PAGE_ID` |
| TikTok | Reels | TikTok for Developers: App mit „Content Posting API“ (Direct Post), Prüfung durch TikTok, Refresh-Token (365 Tage) | `TT_CLIENT_KEY`, `TT_CLIENT_SECRET`, `TT_REFRESH_TOKEN` |
| LinkedIn | Beiträge als Text mit Titelbild auf dem eigenen Profil | LinkedIn-App mit „Share on LinkedIn“, Token mit `w_member_social` (60 Tage – LinkedIn erneuert nicht automatisch; der Wochenbericht meldet, wenn er abläuft) | `LI_ACCESS_TOKEN`, `LI_PERSON_URN` |

**Wochenbericht.** Montags beim ersten Lauf: Follower und Zuwachs, Reichweite, Beiträge/Stories/Reels,
beantwortete Kommentare, verschickte Karten, Kosten der Woche, beste Beiträge, gelernte Gewichte,
Fehler. Liegt immer unter `state/berichte/` im Asset-Zweig und geht per E-Mail, wenn SMTP
konfiguriert ist:

| Name | Typ | Beispiel |
| --- | --- | --- |
| `BERICHT_EMAIL` | Variable | deine Adresse |
| `SMTP_HOST` / `SMTP_PORT` | Variable | `smtp.gmail.com` / `587` (Gmail: App-Passwort nötig), `mail.gmx.net` / `587`, `smtp.web.de` / `587` |
| `SMTP_USER` / `SMTP_PASS` | Secret | Postfach und Passwort bzw. App-Passwort |
| `SMTP_FROM` | Variable | Absender (Standard: `SMTP_USER`) |

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
