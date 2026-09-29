# Endriss: Wiederaufnahme und Abnahme

Stand dieses Übergabepunkts: 29.09.2026. Maßgeblich sind immer die aktuellen GitHub-Refs und `docs/endriss-fortschritt.json`, nicht ein alter Chatstatus.

## Auftrag

Die tatsächlich vorhandenen, bisher offenen Unterlagen aus dem verbundenen Drive-Bestand „Unterlagen StB Endriss“ quellengetreu als nutzbare Inhalte in den Examenscampus übernehmen. Keine Rechtsstandsprüfung. Der Nutzer hat die Weiterbearbeitung, die Wiederaufnahme nach Abbrüchen und sinnvolle Merges getesteter Pakete ausdrücklich beauftragt. Originalaufgaben ohne vorhandenen Lösungsteil bleiben als solche gekennzeichnet; keine selbst erzeugte Lösung als Original ausgeben.

## Ausführung nach einem Abbruch

Die eingerichtete Chat-Aufgabe ist eine stündliche Wiederaufnahme. Ein unmittelbarer Chat-Abbruch-Trigger und ein 15-Minuten-Takt stehen in der verwendeten Aufgabenfunktion nicht zur Verfügung. Dies ist keine Behauptung einer ununterbrochen laufenden KI-Bearbeitung. GitHub Actions erledigt ausschließlich seine tatsächlich gestarteten technischen Schritte und liest nicht selbständig neue Handschriften.

Zu Beginn jedes Laufs:

1. `main` und `codex/endriss-restbestaende-2026-09-29`, diesen Übergabepunkt, den JSON-Checkpoint und relevante jüngste Commits/PRs/Actions lesen.
2. Eine noch gültige Arbeitssperre im Checkpoint respektieren. Nicht parallel dieselben Dateien bearbeiten. Bei abgelaufener Sperre zuerst den tatsächlichen Zustand neu ermitteln und mit aktuellen Datei-SHAs arbeiten. Keine Force-Pushes.
3. Den konkret nächsten offenen Schritt aus `resume.nextSteps` durchführen; nicht erneut nur die gesamte Resteliste beschreiben. Kleine quellenseitengenaue Pakete wählen und bearbeitete Daten früh sichern.
4. Nach jedem Paket Quelle, Seiten, bearbeitete Dateien, Commit, Tests, Merge-/Deploymentstatus, verbleibende Unsicherheiten und den nächsten Schritt im Checkpoint aktualisieren. Eine gültige Sperre verlängern oder am Ende freigeben.
5. Bei fehlenden Funktionen den tatsächlich fehlgeschlagenen Aufruf benennen. Ein lokaler Containerfehler bedeutet nicht, dass der GitHub-Schreibzugriff fehlt: `create_file` und `update_file` haben in dieser Arbeit funktioniert. Umgekehrt niemals erfolgreiches Schreiben oder Testen ohne Rückmeldung behaupten.

## Aktuelles Arbeitspaket

Der erste Nachtrag ist über PR 255 gemergt: ESt-Kurzskript I, gedruckte Seiten 80–162; Mirbach-Quellenlösungen zu Fall 9, 14 und 28/Abwandlung 2. Der veröffentlichte Teilstand darf nicht mit der Vollständigkeit aller Unterlagen verwechselt werden.

Vier weitere Quellen sind im nativen Register `src/data/endriss-native-register.js` vorhanden: IStR-Beispiel (4 Seiten), Lohnsteuer-Mitschrift (24 Seiten), Korrekturblatt (1 Seite) und PersG-Folien Horst, Fassung 1 (16 tatsächliche PDF-Seiten). Seit Commit `83a34fde6a8fead24faf0f20982e9b3534c466a6` verwendet die Nachtragsoberfläche dieses Register. Ein fehlendes oder unvollständiges Bildverzeichnis darf diese Texte nicht mehr ausblenden. Bilder werden erst nach Öffnen der Originalansicht angefordert. Quellenseiten, verzeichnete Bildseiten und aufbereitete Textabschnitte werden getrennt gezählt.

`tools/pruefen-endriss-native.mjs` prüft tatsächliche Registerdaten, eindeutige IDs, lückenlose Quellen-Seitenreferenzen, dokumentierte Sichtungsseiten, Tabellenformen und serverseitig gerenderte React-Übersicht/Detailansichten. Diese Prüfung ist ausdrücklich keine Browser-, Sicht- oder Rechtsstandsprüfung. Der Workflow `Endriss Restbestaende` führt sie seit Commit `745fe913b6848746aa83a517675e2fc95fc1b9eb` zusätzlich zum Produktionsbuild und zum bisherigen ESt-/Mirbach-Nachtragscheck aus. Ergebnisse müssen nach dem tatsächlichen Lauf nachgetragen werden.

## Quellen und Wiederherstellung

Die Arbeitsliste liegt in `tools/endriss/quellen.tsv`; die dortigen Drive-IDs erneut über die verbundene Drive-Anbindung abrufen. Die Liste ist nicht automatisch ein vollständig neu zertifizierter Abgleich beider Drive-Ordnerbäume.

Bereits vorbereitete Review-Artefakte stammen aus GitHub Actions Run `36589072803`: core `11043472165`, notes `11043506188`, erbst `11042489471`, kst `11043617979`, marks `11043770270`. Diese IDs sind historische Wiederherstellungshilfen, keine Garantie ihrer dauerhaften Verfügbarkeit. Ablauf prüfen; bei abgelaufenen Artefakten anhand der Drive-IDs neu erzeugen. Nicht voraussetzen, dass `/mnt/data` oder frühere Chatdateien in einem geplanten Lauf noch verfügbar sind.

Der Originalseiten-Publisher ist separat zu prüfen. Ein früherer Lauf überschritt das selbst gesetzte 850-MiB-Budget; eine anschließende Änderung optimierte die Kodierung und bewahrte Berichte auch bei Fehlern. Nicht durch bloßes Heraufsetzen der Grenze als gelöst erklären. Aktuelle Logs, tatsächliche Bildlesbarkeit, Dateigrößen, persönliche Wasserzeichen und Schreibkonflikte prüfen. Ein Bildimport ist keine abgeschlossene Transkription.

## Verbleibender Inhalt

ErbSt-Einheiten 4/5; KSt-Abgleich aller sieben Quellen mit schon vorhandenen Modulen; Bilanz-/PersG-Fact-Sheets; zweite PersG-Folienfassung einschließlich Dublettenvergleich; AO/FGO und Notfallbuch; übrige Notizen, Mitschriften, Markierungen und ZIP-Inhalte. Innerhalb jeder Quelle die letzte wirklich bearbeitete Seite festhalten. Handschriften und Schaubilder visuell lesen; eine unzuverlässige Textebene nur als Hilfe benutzen. Unerkennbare Stellen ausdrücklich markieren, nicht ergänzen oder als fertig abzeichnen.

Der Umfangsverdacht zur Bilanz-Fallsammlung Teil 3 ist für das abgerufene Original geklärt: drei PDF-Seiten, Schluss nach Sachverhalt 2. Noch vorhandene gegenteilige Unsicherheitsvermerke anhand des Originals bereinigen.

## Bedeutung von 100 Prozent

100 Prozent darf erst gemeldet werden, wenn der relevante tatsächliche Quellenbestand vollständig bestimmt, jede vorhandene Inhaltsseite quellengetreu übernommen oder konkret auf gleichwertige bestehende Lerninhalte abgebildet, in der Oberfläche erreichbar, technisch geprüft und in der veröffentlichten Version nachgewiesen ist. Bloße Bildablage, Platzhalter, Metadaten und selbst gesetzte Statusfelder sind kein Abschluss. Fehlende Original-Lösungen getrennt von Übernahmelücken ausweisen. Keine pauschale Fertigquote aus unterschiedlich großen Dokumentgruppen ableiten.

Beim nachgewiesenen Gesamtabschluss ein dokument- und seitenbezogenes Protokoll mit Commits, Tests und Veröffentlichung erstellen und die stündliche Chat-Aufgabe deaktivieren. Bis dahin nur tatsächliche Fortschritte oder konkrete handlungsrelevante Blocker melden.
