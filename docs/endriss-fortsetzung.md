# Endriss: Wiederaufnahme und Abnahme

Stand dieses Übergabepunkts: 29.09.2026. Maßgeblich sind immer die aktuellen GitHub-Refs und `docs/endriss-fortschritt.json`, nicht ein alter Chatstatus.

## Aktuelle Freigabe und erfolgter Merge

Der Nutzer hat ausdrücklich erklärt: „originalbestand kann bleiben, dass wird separat überarbeiten, kannst daher mergen“. Der bereits vorbereitete Originalbestand bleibt deshalb bei diesem Teilpaket unverändert enthalten. Seine separate Überarbeitung ist KEINE noch ausstehende Voraussetzung für diesen Merge und darf die native Weiterbearbeitung nicht erneut blockieren. Diese Freigabe behauptet weder eine Rechteprüfung noch die vollständige inhaltliche Übertragung aller Originalseiten.

PR **256** wurde am **29.09.2026 um 20:05:59 UTC** tatsächlich nach `main` gemergt. Merge-Commit: `72eba7f2b0ff4c05e2d56295c7e6a887a20ddfdd`; geprüfter PR-HEAD: `60b23516bffb28d9588f4cd303ccb92ccebc56f1`. Der Arbeitsbranch wurde anschließend ohne Force auf diesen Merge-Commit vorgezogen. Nicht erneut einen PR für das bereits gemergte Paket anlegen.

Bestätigte Prüfungen vor dem Merge: Endriss-Validierung Run `36621102653` erfolgreich; Browser-Abnahme Run `36621003284`, Job `109586091024`, erfolgreich; zusätzlich PR-Validierung Run `36623661522` erfolgreich. Der browsergeprüfte Commit `6384b65ae3d5dca44622ab767dc75b28196cfc38` unterscheidet sich vom PR-HEAD ausschließlich durch `docs/endriss-fortschritt.json`. Die zusammengeführte Version ergänzt gegenüber dem geprüften HEAD nur die bestehenden Deploy-/Validierungs-Statusdateien aus `main`, keinen abweichenden Laufzeitcode.

Veröffentlichung für diesen Merge: Run `36623930257` (Deploy to GitHub Pages). Den abschließend bestätigten Status im JSON-Checkpoint und in `.github/deploy-last.json` nachlesen; der Merge allein ist kein Nachweis einer fertigen Veröffentlichung.

## Auftrag

Die tatsächlich vorhandenen, bisher offenen Unterlagen aus dem verbundenen Drive-Bestand „Unterlagen StB Endriss“ quellengetreu als nutzbare Inhalte in den Examenscampus übernehmen. Keine Rechtsstandsprüfung. Der Nutzer hat die Weiterbearbeitung, die Wiederaufnahme nach Abbrüchen und sinnvolle Merges getesteter Pakete ausdrücklich beauftragt. Originalaufgaben ohne vorhandenen Lösungsteil bleiben als solche gekennzeichnet; keine selbst erzeugte Lösung als Original ausgeben.

## Ausführung nach einem Abbruch

Die eingerichtete Chat-Aufgabe ist eine stündliche Wiederaufnahme. Ein unmittelbarer Chat-Abbruch-Trigger und ein 15-Minuten-Takt stehen in der verwendeten Aufgabenfunktion nicht zur Verfügung. Dies ist keine Behauptung einer ununterbrochen laufenden KI-Bearbeitung. GitHub Actions erledigt ausschließlich seine tatsächlich gestarteten technischen Schritte und liest nicht selbständig neue Handschriften.

Zu Beginn jedes Laufs:

1. `main` und `codex/endriss-restbestaende-2026-09-29`, diesen Übergabepunkt, den JSON-Checkpoint und relevante jüngste Commits/PRs/Actions lesen.
2. Eine noch gültige Arbeitssperre im Checkpoint respektieren. Nicht parallel dieselben Dateien bearbeiten. Bei abgelaufener Sperre zuerst den tatsächlichen Zustand neu ermitteln und mit aktuellen Datei-SHAs arbeiten. Keine Force-Pushes.
3. Den konkret nächsten offenen Schritt aus `resume.nextSteps` durchführen; nicht erneut nur die gesamte Resteliste beschreiben. Kleine quellenseitengenaue Pakete wählen und bearbeitete Daten früh sichern.
4. Nach jedem Paket Quelle, Seiten, bearbeitete Dateien, Commit, Tests, Merge-/Deploymentstatus, verbleibende Unsicherheiten und den nächsten Schritt im Checkpoint aktualisieren. Eine gültige Sperre verlängern oder am Ende freigeben.
5. Bei fehlenden Funktionen den tatsächlich fehlgeschlagenen Aufruf benennen. Ein lokaler Containerfehler bedeutet nicht, dass der GitHub-Schreibzugriff fehlt: In diesem interaktiven Lauf funktionierten insbesondere PR-Erstellung, Merge und Branch-Aktualisierung, während `container.exec` mit ClientError scheiterte. Umgekehrt niemals erfolgreiches Schreiben oder Testen ohne Rückmeldung behaupten.

## Gemergte Inhaltspakete

Der erste Nachtrag ist über PR 255 gemergt: ESt-Kurzskript I, gedruckte Seiten 80–162; Mirbach-Quellenlösungen zu Fall 9, 14 und 28/Abwandlung 2. Der veröffentlichte Teilstand darf nicht mit der Vollständigkeit aller Unterlagen verwechselt werden.

Das zweite Paket ist über PR 256 gemergt. Vier weitere Quellen sind im nativen Register `src/data/endriss-native-register.js` vorhanden: IStR-Beispiel (4 Seiten), Lohnsteuer-Mitschrift (24 Seiten), Korrekturblatt (1 Seite) und PersG-Folien Horst, Fassung 1 (16 tatsächliche PDF-Seiten). Seit Commit `83a34fde6a8fead24faf0f20982e9b3534c466a6` verwendet die Nachtragsoberfläche dieses Register. Ein fehlendes oder unvollständiges Bildverzeichnis darf diese Texte nicht mehr ausblenden. Bilder werden erst nach Öffnen der Originalansicht angefordert. Quellenseiten, verzeichnete Bildseiten und aufbereitete Textabschnitte werden getrennt gezählt.

`tools/pruefen-endriss-native.mjs` prüft tatsächliche Registerdaten, eindeutige IDs, lückenlose Quellen-Seitenreferenzen, dokumentierte Sichtungsseiten, Tabellenformen und serverseitig gerenderte React-Übersicht/Detailansichten. Diese Prüfung ist ausdrücklich keine Browser-, Sicht- oder Rechtsstandsprüfung. Der Workflow `Endriss Restbestaende` führt sie zusätzlich zum Produktionsbuild und zum bisherigen ESt-/Mirbach-Nachtragscheck aus. Die separate echte Browserprüfung liegt in `tools/pruefen-endriss-browser.mjs` und `.github/workflows/endriss-browser.yml`. Testerfolg ist keine Behauptung einer visuellen Einzelprüfung sämtlicher Originalseiten.

## Quellen und Wiederherstellung

Die Arbeitsliste liegt in `tools/endriss/quellen.tsv`; die dortigen Drive-IDs erneut über die verbundene Drive-Anbindung abrufen. Die Liste ist nicht automatisch ein vollständig neu zertifizierter Abgleich beider Drive-Ordnerbäume.

Bereits vorbereitete Review-Artefakte stammen aus GitHub Actions Run `36589072803`: core `11043472165`, notes `11043506188`, erbst `11042489471`, kst `11043617979`, marks `11043770270`. Diese IDs sind historische Wiederherstellungshilfen, keine Garantie ihrer dauerhaften Verfügbarkeit. Ablauf prüfen; bei abgelaufenen Artefakten anhand der Drive-IDs neu erzeugen. Nicht voraussetzen, dass `/mnt/data` oder frühere Chatdateien in einem geplanten Lauf noch verfügbar sind.

Originalseiten-Publisher Run `36616059906` wurde erfolgreich abgeschlossen. Seine Ausgaben sind mit PR 256 übernommen. Ein früherer Lauf überschritt das selbst gesetzte 850-MiB-Budget; eine anschließende Änderung optimierte die Kodierung und bewahrte Berichte auch bei Fehlern. Nicht durch bloßes Heraufsetzen der Grenze als gelöst erklären. Keine erneute Massenaufbereitung ohne konkreten Bedarf. Die separate Überarbeitung des vorhandenen Originalbestands bleibt gemäß jüngster Nutzerfreigabe zurückgestellt; ein Bildimport ist weiterhin keine abgeschlossene Transkription.

## Verbleibender Inhalt

ErbSt-Einheiten 4/5; KSt-Abgleich aller sieben Quellen mit schon vorhandenen Modulen; Bilanz-/PersG-Fact-Sheets; zweite PersG-Folienfassung einschließlich dauerhaftem Dublettennachweis und Registrierung; AO/FGO und Notfallbuch; übrige Notizen, Mitschriften, Markierungen und ZIP-Inhalte. Innerhalb jeder Quelle die letzte wirklich bearbeitete Seite festhalten. Handschriften und Schaubilder visuell lesen; eine unzuverlässige Textebene nur als Hilfe benutzen. Unerkennbare Stellen ausdrücklich markieren, nicht ergänzen oder als fertig abzeichnen.

Die frühere Chatmeldung zur vollständigen Sichtung der zweiten Horst-Fassung ist noch nicht als Seitenvergleich und Registeränderung committed. Unterschiedliche Rohdatei-/Rohbild-Hashes allein beweisen weder Gleichheit noch inhaltliche Abweichung. Den tatsächlichen Nachweis wiederherstellen oder anhand der beiden Quellen erneut prüfen, bevor `persg-folien-2` als abgedeckt registriert wird. Gleiches gilt für nicht gesicherte AO/FGO-Transkriptionen.

Der Umfangsverdacht zur Bilanz-Fallsammlung Teil 3 ist für das abgerufene Original geklärt: drei PDF-Seiten, Schluss nach Sachverhalt 2. Noch vorhandene gegenteilige Unsicherheitsvermerke anhand des Originals bereinigen.

## Bedeutung von 100 Prozent

100 Prozent darf erst gemeldet werden, wenn der relevante tatsächliche Quellenbestand vollständig bestimmt, jede vorhandene Inhaltsseite quellengetreu übernommen oder konkret auf gleichwertige bestehende Lerninhalte abgebildet, in der Oberfläche erreichbar, technisch geprüft und in der veröffentlichten Version nachgewiesen ist. Bloße Bildablage, Platzhalter, Metadaten und selbst gesetzte Statusfelder sind kein Abschluss. Fehlende Original-Lösungen getrennt von Übernahmelücken ausweisen. Keine pauschale Fertigquote aus unterschiedlich großen Dokumentgruppen ableiten.

Beim nachgewiesenen Gesamtabschluss ein dokument- und seitenbezogenes Protokoll mit Commits, Tests und Veröffentlichung erstellen und die stündliche Chat-Aufgabe deaktivieren. Bis dahin nur tatsächliche Fortschritte oder konkrete handlungsrelevante Blocker melden.
