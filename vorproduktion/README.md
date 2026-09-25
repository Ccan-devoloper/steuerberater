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

## Prüfungstage

Die Mengen werden **nicht** aus Herrjurist kopiert. Es gilt immer der aktuelle Examenscampus-Tagesplan. Das ist besonders an den drei schriftlichen Prüfungstagen wichtig: Der Planer reduziert dort eigenständige Stories bewusst.

Lösungsskizzen am Prüfungsabend sind absichtlich nicht vorproduzierbar. Sie hängen von den tatsächlich berichteten Klausurthemen ab. Solche Slots werden als `wartet-auf-live-recherche` markiert und weder erfunden noch mit Platzhalter-Fachinhalt gerendert.

## Live-Vorrang ab 25.09.2026

Seit dem Betreiberauftrag vom 25.09.2026 gilt im stündlichen Instagram-Lauf ein einfacher Tages-Gate: Existiert im Asset-Zweig eine Datei `vorproduktion/YYYY-MM-DD.json`, übernimmt ausschließlich die Vorproduktion dieses Datums. Der normale Veröffentlichungs- und Content-Lauf bleibt für diesen Tag vollständig aus. Am ersten Datum ohne Vorproduktionsdatei läuft die bisherige Normalpipeline automatisch wieder weiter.

Live verwendet dabei nur die bereits vorproduzierten Texte, Stories und Reel-Videos. Fehlende Coverbilder werden lokal durch passende Icons ersetzt; vorhandene Bilder bleiben erhalten. Es werden keine Text-KI-, Faktencheck-, Bild-, Pexels- oder ElevenLabs-Aufrufe gestartet. Notwendig bleibt ausschließlich die Instagram Graph API zum eigentlichen Veröffentlichen; dafür fallen keine Providerkosten an.

## Kosten- und Freigaberegel

Der Review-Lauf verweigert OpenAI-, Anthropic-, ElevenLabs- und Pexels-Secrets, deaktiviert Bild-KI/Charaktere und nutzt für Reels ausschließlich Piper offline. Neue Review-Tage starten weiterhin als Review. Die Live-Freigabe wird durch den oben beschriebenen Tages-Gate erteilt, sobald für das Datum eine fertige Vorproduktionsdatei vorhanden ist.
