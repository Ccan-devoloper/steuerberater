# StB Examenscampus – Klausur 3 Bilanzen

Statische, responsive Lernplattform für die dritte schriftliche Klausur des Steuerberaterexamens: **Buchführung und Bilanzwesen**.

Die Oberfläche ist bereits nach allen drei Klausurarten gegliedert. Inhaltlich ist in dieser Ausbaustufe Klausur 3 umgesetzt.

## Funktionen

- 37 Lernmodule für Einzelunternehmen, Personengesellschaft, Kapitalgesellschaft und Querschnittstechnik
- Universalschema **WER → WAS → WIE VIEL → WOHIN**
- Suche und Filter nach Thema, Klausurteil oder Fundstelle
- lokaler Lernfortschritt über `localStorage`
- 20-Fragen-Pool mit zehn zufälligen Fragen pro Training
- Zeitbudget-Rechner nach der 3,6-Minuten-Regel
- interaktiver 8-Wochen-Plan
- Dark Mode, responsive Navigation und Druckansicht
- keine externen Bibliotheken und kein Tracking

## GitHub Pages

Das Repository ist direkt für GitHub Pages vorbereitet:

1. **Settings → Pages** öffnen.
2. Unter **Build and deployment** die Quelle **Deploy from a branch** wählen.
3. Branch `main` und Ordner `/ (root)` auswählen.

Es ist kein Build-Prozess erforderlich.

## Lokal starten

Die Plattform muss über HTTP ausgeliefert werden:

```bash
python3 -m http.server 8080
```

Danach `http://localhost:8080` öffnen.

## Projektstruktur

```text
.
├── index.html                 # kleiner Browser-Loader
├── assets/favicon.svg
├── source
│   ├── index.html.gz          # vollständige ursprüngliche Seite
│   ├── assets/app.js.gz       # vollständige Anwendungslogik
│   ├── assets/styles.css.gz   # vollständiges Layout
│   └── data/bilanzen.js.gz    # vollständige Lerninhalte
├── tools/restore-source.sh
├── LICENSE
└── README.md
```

Die Quelldateien liegen verlustfrei gzip-komprimiert im Ordner `source`. Der Loader entpackt sie im Browser und startet anschließend die ursprüngliche Anwendung. Dadurch bleibt die Plattform ohne externe Abhängigkeiten auf GitHub Pages lauffähig.

## Editierbare Quelldateien wiederherstellen

```bash
bash tools/restore-source.sh
```

Danach liegen die ursprünglichen Dateien im Ordner `restored-project`.

## Fachlicher Hinweis

Die Seite ist ein Lern- und Wiederholungsinstrument. Sie ersetzt weder Gesetzestext, Richtlinien und Hinweise noch den jeweils geltenden Hilfsmittelerlass oder vollständiges Klausurtraining. Die Lernbasis nennt den Rechtsstand 27.07.2026 und ist vor der Prüfung fachlich zu aktualisieren.
