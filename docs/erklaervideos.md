# Erklärvideos

Zu jedem Lernmodul lässt sich ein Video erzeugen, das den Modulstoff Szene für
Szene vorträgt: Einordnung, Prüfungsreihenfolge, Normenkette, Originalfall mit
Rechenweg und Buchungssatz, Merksatz und typische Fallen.

**Es wird kein Text erfunden.** Gesprochen und gezeigt wird ausschließlich, was
in den Moduldaten steht. Ändert sich der Modultext, erzeugt ein erneuter Lauf
automatisch das passende Video.

## Warum die Videos nicht im Repository liegen

Zwei Gründe:

1. **Git vergisst nichts.** Textdateien speichert Git als Änderungszeilen –
   deshalb ist die gesamte Historie dieses Projekts nur wenige Megabyte groß.
   Videos sind Binärdateien: Jede neu gerenderte Fassung wird vollständig
   zusätzlich abgelegt, dauerhaft. Nach drei Durchläufen über alle Module lägen
   drei komplette Sätze in der Historie, und jeder Klon lädt sie mit.
2. **GitHub Pages begrenzt die veröffentlichte Seite auf 1 GB.** Bei rund 280
   Modulen und 3,1 MB je Video in 720p sind das etwa 870 MB – zu knapp, um noch
   Reserve zu haben, und jeder Deploy müsste die Dateien erneut hochladen.

Deshalb liegen die Videos in einem Objektspeicher mit CDN. Die Seite bindet sie
über eine Basisadresse ein; ist die Adresse leer, verhält sich alles wie zuvor.

## Cloudflare R2 einrichten

R2 eignet sich für Video besonders, weil **ausgehender Datenverkehr nichts
kostet** – anders als bei Amazon S3, wo jeder Abruf abgerechnet wird.

1. Cloudflare-Konto anlegen und R2 aktivieren.
2. Bucket erstellen, z. B. `examenscampus-videos`. Als Region **EU** wählen,
   damit die Dateien in Europa bleiben.
3. Unter *Settings → Public access* eine öffentliche Adresse aktivieren
   (`r2.dev`-Adresse oder eigene Domain).
4. Die Adresse in `.env` eintragen:

   ```
   VITE_VIDEO_BASIS=https://pub-xxxxxxxx.r2.dev
   ```

   Für den Pages-Deploy muss die Variable auch im Workflow gesetzt sein –
   entweder als Repository-Variable oder direkt im Build-Schritt.

Kosten bei 870 MB: rund 1,5 Cent im Monat. Die ersten 10 GB Speicher sind frei.

## Videos rendern

Der Renderer läuft lokal und braucht drei Dinge, die nicht im Repository liegen:

```bash
# 1. Sprachsynthese
pip install piper-tts

# 2. Deutsches Stimmmodell (~56 MB) – Thorsten, ruhige Sprechweise
curl -sSL -o thorsten.tar.gz \
  https://github.com/rhasspy/piper/releases/download/v0.0.2/voice-de-thorsten-low.tar.gz
tar xzf thorsten.tar.gz

# 3. ffmpeg und ein Chromium für Playwright
npm install ffmpeg-static playwright-core
```

Dann:

```bash
export PIPER_MODELL=/pfad/zu/de-thorsten-low.onnx
export FFMPEG=/pfad/zu/ffmpeg

# ein einzelnes Modul
node tools/video/rendern.mjs --campus k3 --modul 1 --ziel video-ausgabe

# alle Module eines Campus
node tools/video/rendern.mjs --campus k3 --alle --ziel video-ausgabe
```

Verfügbare Campusse: `k3` (Bilanzen), `ao` (Abgabenordnung), `kst`
(Körperschaftsteuer).

Der Lauf erzeugt je Modul eine `.mp4` und ein `.jpg` als Vorschaubild und
trägt Dauer und Größe in `src/data/video-manifest.json` ein. Nur Module, die
dort stehen, zeigen in der Seite einen Abspielknopf.

**Rechenzeit:** etwa vier bis sieben Minuten je Modul, überwiegend für die
Einzelbilder. Ein kompletter Campus läuft also über Nacht.

## Hochladen

```bash
# mit der AWS-CLI, die R2 über S3-Kompatibilität anspricht
aws s3 sync video-ausgabe/ s3://examenscampus-videos/ \
  --endpoint-url https://<konto-id>.r2.cloudflarestorage.com \
  --content-type video/mp4
```

Anschließend `src/data/video-manifest.json` committen – die Datei ist klein und
gehört ins Repository, die Videos selbst nicht.

## Stimme und Darstellung anpassen

Beides steht am Kopf von `tools/video/rendern.mjs`:

- `PIPER_ARGS` – Sprechtempo und Rauschanteil. Aktuell 12 % langsamer als der
  Standard, mit reduziertem Rauschen; das wirkt bei Fachstoff ruhiger.
- `MASTERING` – die Nachbearbeitung der Tonspur (Hochpass, Präsenzanhebung,
  Kompression, Normalisierung).
- Farben und Schriftgrößen der Bühne in `tools/video/buehne.mjs`.

## Urheberrecht

Die Videos geben Inhalte wieder, die aus Kursunterlagen stammen. Für den
eigenen Gebrauch ist das unproblematisch. Vor einer Weitergabe an Dritte –
auch an eine Lerngruppe – sollten die Nutzungsbedingungen des jeweiligen
Kursanbieters geprüft werden.
