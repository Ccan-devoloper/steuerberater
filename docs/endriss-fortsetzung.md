# Endriss: Wiederaufnahme und Abnahme

Maßgeblich sind aktuelle GitHub-Refs, `docs/endriss-fortschritt.json` und die dokumentbezogenen Checkpoints. Frühere Chatmeldungen oder historische Checkpoints sind keine aktuellen Zustandsmeldungen. Die vollständige vorige Anleitung ist bei Commit `5f0d4852f0d7f4a63917da2c3522b98c8af5af7c`, Pfad `docs/endriss-fortsetzung.md`, Blob `6d831a76f15bdaac33ecb477f7a252639075fb3d` erhalten.

## Auftrag und Freigabe

Vorhandene, bisher offene Endriss-Unterlagen quellengetreu als nutzbare Campusinhalte übernehmen. Keine Rechtsstandsprüfung; keine eigenen Lösungen als Original ausgeben. Der Nutzer hat Weiterbearbeitung, Wiederaufnahme nach Abbrüchen und getestete Teil-Merges autorisiert.

Ausdrückliche Entscheidung: „originalbestand kann bleiben, dass wird separat überarbeiten, kannst daher mergen“. Bereits vorhandene Originalseiten bleiben unverändert. Ihre separate Überarbeitung ist kein erneuter Blocker für native Inhalte und getestete Merges. Keine Veröffentlichung anderer privater Daten oder Zugangsdaten daraus ableiten.

## Bestätigter Stand nach PR 260

PRs 255–258 sind gemergt und veröffentlicht: ESt-Kurzskript I Seiten 80–162 und Mirbach-Lösungsblätter; IStR-Beispiel, Lohnsteuer-Mitschrift samt Korrektur und Horst-Fassung 1; die separat nachgewiesene Horst-Fassung 2; die erste FGO-Handschrift mit zwölf Stationen. Ihre ausführlichen früheren Prüf-/Veröffentlichungsnachweise bleiben im globalen Checkpoint über feste historische Commit-Verweise erhalten. Nichts davon erneut implementieren.

**PR 260 hat die gesamte FGO-Quelle abgeschlossen und veröffentlicht:** `FGO (2).pdf`, Drive `1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj`, 1.838.083 Bytes, 37 tatsächliche PDF-Seiten. Die bereits veröffentlichte erste Seite wird wiederverwendet; zusätzlich sind alle 36 Gesetzesseiten mit 67 gesonderten Handschrift-/Markierungseinträgen auf 22 Seiten nativ vorhanden. Gedruckter Änderungsstand 10.03.2023 unverändert. Kein bloßer Bildimport.

Merge-Commit `5b775a2715b29c2f3cc8e03f5deefc56ee21fc78`, gemergt am 29.09.2026 um 21:30:03 UTC. Deploy-Run `36633680434`, Build-Job `109628985728` und Deploy-Job `109629467756` erfolgreich. `.github/deploy-last.json` wurde für genau diesen Commit mit `status: success` zurückgelesen. Prüfungen am zusammengeführten HEAD `5f0d4852f0d7f4a63917da2c3522b98c8af5af7c`: vollständiges FGO `36633434379`, bestehende FGO-Fahrtroute `36633434394`, allgemeine PR-Validierung `36633434417`, jeweils erfolgreich.

Quellencheckpoint: `docs/endriss-fgo-fortschritt.json`. Datensatz: `src/data/endriss-fgo.js`; gedruckter Text: `endriss-fgo-gesetz.generated.js`; visuelle Markierungsaufzeichnungen: `endriss-fgo-seitenreview.js`. Alle 37 Originalbild-Hashes, sämtliche gedruckten Textblöcke und Notizen in tatsächlicher React-/Chromium-Ausgabe wurden geprüft. Desktop 1280 und Mobil 390, Suche, Abschnittssprung mit Tastaturfokus sowie Bild-/Index-Fallback. Die erzeugten Screenshots sind nicht zusätzlich manuell abgenommen worden. Keine automatische Prüfung ist eine Rechtsstandsprüfung.

Oberfläche: **Unterlagen-Nachträge → Abgabenordnung / FGO → FGO-Quelle**. Alle 37 Textabschnitte sind ohne Bildindex erreichbar; Originalbilder laden erst auf ausdrückliche Anforderung. Die bereits vorhandene zwölfstufige AO-Fahrtroute bleibt zusätzlich am bisherigen Schema-Einstieg erhalten. Die Beschriftung von Farben und Fundstellen ersetzt keine behauptete pixelidentische Nachbildung einzelner Markerstriche.

**PR 259** hat zwischenzeitlich das einseitige Notfallbuch getrennt veröffentlicht: Merge `422dd9a3cdc23fc0adfde3272b2aa8cb2b2bdf8e`, erfolgreicher Deploy-Status nachgelesen. Obere lesbare Reiter, FGO-Randliste und beide Vollstreckungsketten stehen nativ. Kleine oder verdeckte Seitenreiter sind ausdrücklich nicht als gelesen/transkribiert zertifiziert. Bereits veröffentlichten Inhalt nicht wiederholen; nur diese Reststellen gezielt prüfen. `docs/endriss-notfallbuch-fortschritt.json` trennt Veröffentlichung von dieser inhaltlichen Restunsicherheit. PR 260 hat die Notfallbuch-Dateien und Tests aus main unverändert behalten.

## Prozentmaßstab

Die ursprüngliche Claude-Liste umfasst acht A- und vier B-Gruppen. Streng vollständig übernommen und veröffentlicht sind jetzt **A1, A6, A7, A8, B2 und B4: 6/12 = 50 %**. B3 ist mit lesbarem Inhalt veröffentlicht, wegen der offenen kleinen Beschriftungen aber nicht zusätzlich vollständig angerechnet. Fünf andere Gruppen sind offen. Fehlende Original-Lösungen (C), geklärte Umfangsfrage (D) und Informationen ohne Lösungsteil (E) sind separat zu behandeln.

Diese Quote ist weder der Anteil des gesamten Campus noch eine Seiten- oder Arbeitszeitquote. Die großen KSt-, ErbSt- und Notizen-/Archivbestände sind nicht gleich groß wie kurze erledigte Quellen. Keine belastbare Gesamt-Campusquote behaupten.

## Konkreter nächster Inhalt

**PersG Fact Sheets**, Drive `179WkR77_ZOKvZAR4fEICG_IM7nXMYL-5`: Die ursprüngliche Liste nennt 24 Seiten. Identität und tatsächlichen Umfang prüfen, dann ab Seite 1 direkt visuell lesen, Tabellen und Schaubilder quellengetreu übernehmen oder konkret auf vorhandene Lerninhalte abbilden. In diesem FGO-Durchgang ist diese Quelle noch nicht neu bearbeitet worden. Den tatsächlichen seitenbezogenen Fortschritt früh speichern.

Danach Bilanz Fact Sheets; ErbSt-Einheiten 4/5; KSt-Abgleich aller sieben Quellen gegen vorhandene Module; Mitschriften, Markierungen und ZIP-Inhalte. Beim Notfallbuch nur noch die benannten Reststellen bearbeiten. **FGO nicht erneut bei Seite 2 beginnen**, den abgeschlossenen FGO-Textgenerator nicht erneut als schreibenden Publisher starten und keine zweite Fassung der kanonischen ersten Seite pflegen.

## Wiederaufnahme, Parallelität und Werkzeuge

Die eingerichtete Aufgabe ist eine stündliche Wiederaufnahme, keine unterbrechungsfreie KI-Bearbeitung. Kein unmittelbarer Chat-Abbruch-Trigger und kein 15-Minuten-Takt in dieser Aufgabenfunktion. GitHub Actions führt gestartete technische Schritte aus, liest aber nicht selbständig neue Handschriften.

Vor jedem Lauf aktuelle main-/Arbeitsrefs, globalen und dokumentbezogene Checkpoints und relevante PRs/Actions lesen. Gültige globale und quellenbezogene Sperren respektieren. Aktuelle Blob-SHAs verwenden, fremde Änderungen behalten, keine Force-Pushes. Nach Unterbrechungen nicht alte komplette Dateien über neue Arbeiten schreiben. Quelle, Seiten, Datensätze, Tests, Merge und tatsächlichen Deploy dokumentieren; eigene Sperre am Ende freigeben.

Ein lokaler Container-/Python-Fehler bedeutet nicht fehlenden GitHub-Schreibzugriff. In diesem Durchgang funktionierten verbundene Dateischreib-/PR-/Merge-Aktionen, echte Actions-Tests und Files-Seitenbilder; lokale Ausführung war nicht verfügbar. Nur tatsächlich beobachtete Ergebnisse behaupten. Schreib-/Berechtigungsprüfungen nicht umgehen. Drive-Rohdownloads und `files.read` mit Seitenbildern nutzen, keine unzuverlässige OCR-Ausgabe als fertige Handschrift ausgeben.

## Quellenbestand und Wiederherstellung

Arbeitsliste: `tools/endriss/quellen.tsv`; ursprüngliche Resteliste: `docs/offene-quellen.md`. Die Arbeitsliste ist kein neuer lückenloser Abgleich beider Drive-Ordnerbäume. Originalseiten-Publisher `36616059906` ist abgeschlossen und sein Bestand veröffentlicht. Keine erneute mehrgigabytegroße Massenaufbereitung ohne konkreten Bedarf.

Historische Wiederherstellungsartefakte aus Run `36589072803`: core `11043472165`, notes `11043506188`, erbst `11042489471`, kst `11043617979`, marks `11043770270`. Ablauf prüfen; bei Bedarf aus den Drive-IDs neu abrufen. Frühere lokale `/mnt/data`-Dateien nicht als dauerhaft verfügbar voraussetzen.

Die Bilanz-Fallsammlung Teil 3 hat tatsächlich drei PDF-Seiten und endet nach Sachverhalt 2. Keine weiteren Fälle erfinden; verbliebene alte Umfangsunsicherheiten anhand dieses Nachweises bereinigen.

## Bedeutung von 100 Prozent

Tatsächlichen relevanten Quellenumfang bestimmen, jede Inhaltsseite quellengetreu nativ übernehmen oder spezifisch gleichwertigem bestehenden Inhalt zuordnen, UI-Erreichbarkeit, Tests, Merge und Veröffentlichung nachweisen. Bilder, Platzhalter, pauschale Seitenreferenzen und selbst gesetzte Abschlussfelder reichen nicht. Fehlende Original-Lösungen und unlesbare Reststellen von Übernahmelücken unterscheiden und offen ausweisen.

Erst beim belegten Gesamtabschluss ein dokument-/seitenbezogenes Abschlussprotokoll erstellen und die stündliche Aufgabe deaktivieren. Bis dahin tatsächliche Inhaltspakete statt wiederholter unveränderter Statusberichte liefern.
