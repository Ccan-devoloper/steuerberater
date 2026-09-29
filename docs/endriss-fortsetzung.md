# Endriss: Wiederaufnahme und Abnahme

Maßgeblich sind die aktuellen GitHub-Refs, `docs/endriss-fortschritt.json` und ergänzende dokumentbezogene Checkpoints. Alte Chatmeldungen und ältere Fassungen dieser Anleitung sind kein aktueller Status.

## Auftrag und Freigabe

Die tatsächlich vorhandenen, bisher offenen Unterlagen aus dem verbundenen Drive-Bestand „Unterlagen StB Endriss“ quellengetreu als nutzbare Inhalte in den Examenscampus übernehmen. Keine Rechtsstandsprüfung. Keine selbst erzeugten Lösungen als Original ausgeben. Der Nutzer hat tatsächliche Weiterbearbeitung, Wiederaufnahme nach Abbrüchen und sinnvolle Merges getesteter Pakete autorisiert.

Der Nutzer hat ausdrücklich erklärt: „originalbestand kann bleiben, dass wird separat überarbeiten, kannst daher mergen“. Die bereits enthaltenen Originalseiten bleiben unverändert; ihre separate Überarbeitung darf die native Inhaltsarbeit oder getestete Teil-Merges nicht erneut blockieren. Dies ist keine Freigabe zur Veröffentlichung anderer privater Daten oder von Zugangsdaten.

## Tatsächlich erreichte Meilensteine

- PR 255: ESt-Kurzskript I, gedruckte Seiten 80–162 (83 Seiten) und Mirbach-Quellenlösungen zu Fall 9, 14 und 28/Abwandlung 2 (6 Seiten). Gemergt und veröffentlicht.
- PR 256: IStR-Beispiel (4 Seiten), Lohnsteuer-Mitschrift (24 Seiten) und Korrektur (1 Seite), Horst-PersG-Folien Fassung 1 (16 PDF-Seiten), Native-Register und Quellenansicht. Merge `72eba7f2b0ff4c05e2d56295c7e6a887a20ddfdd`, Deploy `36623930257` erfolgreich bestätigt. Originalbestand bleibt enthalten.
- PR 257: Horst-PersG-Folien Fassung 2, alle 16 PDF-Seiten unabhängig belegt und auf vorhandene Lernblöcke abgebildet. Merge `034872159d9089efcaf0e27bad5e174f5c3a0185`, Deploy `36626567185` erfolgreich bestätigt. Nicht erneut vergleichen oder als unregistriert behandeln. Unterschiedliche Quelldateien bleiben getrennte Quellen; kein behaupteter Bytegleichheitsnachweis und keine zweite editierbare Kopie der Lerninhalte.
- PR 258: Erste handschriftliche Seite von `FGO (2).pdf`, alle zwölf nummerierten Stationen samt Randverweisen und Hervorhebungsbeschreibung, am bisherigen AO-Schema eingebunden. Merge `d32019df630fe070cddd0740ab222dd8720b5103`. Der vollständige Veröffentlichungsnachweis ist im dokumentbezogenen Checkpoint zu prüfen; der Merge allein bestätigt kein Deployment.

Die vollständigen Tests, Commit- und Deploymentnachweise der ersten drei Pakete stehen im JSON-Checkpoint einschließlich historischer Referenzen. Vor diesem vierten Merge bestanden Endriss-Validierung `36627754504`, dedizierte FGO-/Browserprüfung `36627754397` (Job `109609001079`) und PR-Prüfungen `36628120458`/`36628120495`. Keine dieser automatischen Prüfungen wird als manuelle Screenshot- oder Rechtsstandsprüfung ausgegeben.

## Sofortiger Fortsetzungspunkt: FGO

Zuerst `docs/endriss-fgo-fortschritt.json` und den neuesten globalen Checkpoint lesen. Die erste FGO-Handschrift ist nicht mehr bloß ein Entwurf: `src/data/endriss-fgo-fahrtroute.js` ist die kanonische Transkription; `src/components/EndrissFGOFahrtroute.jsx` stellt sie dar; `AOSchemataAlle.jsx` erhält den vorhandenen Einstieg `ao6-fgo-fahrtroute`. Im AO-Campus: Klausur 1 → Abgabenordnung → Prüfschema → FGO-Fahrtroute. Die bisherige Tabellen-Schnittstelle `src/data/endriss-fgo-arbeitsstand.js` wird aus derselben Transkription erzeugt. Nicht erneut getrennt abtippen oder überschreiben.

Die Quelle `FGO (2).pdf`, Drive `1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj`, umfasst 37 tatsächliche PDF-Seiten und 1.838.083 Bytes. Nur Seite 1 ist nativ umgesetzt. Seiten 1–4 wurden in diesem FGO-Lauf bildlich geöffnet; Seiten 2–4 nur als Kontext, noch nicht vollständig auf Lerninhalte abgebildet. Der nächste native Schritt ist Seite 2; die nächste noch nicht geöffnete Bildseite ist Seite 5. Der Gesetzesauszug mit seinen Markierungen auf Seiten 2–37 bleibt offen. Nicht die Gesamtquelle oder Restelisten-Gruppe B2 nach diesem einseitigen Teilnachtrag als erledigt zählen.

Dedizierte Prüfungen: `tools/pruefen-endriss-fgo.mjs` und `.github/workflows/endriss-fgo.yml`. Sie kontrollieren Quelle/Originalbild-Integrität, sämtliche zwölf Textstationen/Randnotizen, tatsächliches React-Rendering sowie Navigation im echten AO-Campus auf Desktop und Mobil. Keine zusätzliche Quellenlösung oder Normaktualisierung aus allgemeinem Wissen ergänzen.

## Prozentmaßstab

Die ursprüngliche Claude-PDF hat acht Gruppen in Abschnitt A und vier in Abschnitt B: zusammen zwölf gleich gewichtete Restelisten-Gruppen. Nach PR 257 sind A1, A6, A7, A8 und B4 vollständig umgesetzt und veröffentlicht: 5/12 = rund 42 %. FGO-Seite 1 ist nur Teilfortschritt; B2 bleibt offen. Fehlende Original-Lösungen in C, die geklärte Umfangsfrage D und Informationsfälle E sind nicht als vergessene Umsetzung mitzuzählen.

Diese Quote misst weder den gesamten bereits vorher bestehenden Campus noch Seitenzahl, eigenständigen Lernstoff oder verbleibenden Arbeitsaufwand. KSt, ErbSt und Mitschriften/Archive sind wesentlich größere Gruppen als einige der erledigten Kurzquellen. Eine belastbare Gesamt-Campusquote ist nicht festgestellt.

## Wiederaufnahme nach Abbruch und Parallelität

Die eingerichtete Chat-Aufgabe ist eine stündliche Wiederaufnahme, keine unterbrechungsfreie KI-Bearbeitung. Ein unmittelbarer Chat-Abbruch-Trigger und ein 15-Minuten-Takt sind in der verwendeten Aufgabenfunktion nicht verfügbar. GitHub Actions erledigt ausschließlich tatsächlich gestartete technische Schritte; es liest keine neuen Handschriften selbständig.

Zu Beginn jedes Laufs aktuelle `main`-/Arbeitsbranch-Refs, globale und dokumentbezogene Checkpoints sowie relevante Commits/PRs/Actions lesen. Eine gültige Arbeitssperre respektieren, einschließlich ihres tatsächlichen Dateiumfangs. Bei abgelaufenen Sperren zunächst synchronisieren. Keine Force-Pushes, keine fremden Änderungen überschreiben, aktuelle Blob-SHAs für Dateien benutzen. Teilergebnisse früh sichern, danach Quelle, Seiten, Dateien, Tests, Merge/Deployment und genau nächsten Schritt protokollieren. Eigene Sperre am Ende freigeben.

Ein lokaler Container-/Python-Fehler beweist keinen fehlenden GitHub-Schreibzugriff. In interaktiven Läufen haben Dateischreiben, PR-Erstellung und Merges funktioniert; einige geplante Läufe wurden dagegen tatsächlich durch Schreibprüfungen blockiert. Nur den konkret beobachteten Fehler melden, nichts umgehen und keine nicht ausgeführten Tests behaupten. Drive-Rohdownload mit `include_base64=false` und `files.read` mit Seitenbildern ermöglicht die direkte Sichtung auch bei fehlender Textebene.

## Quellen und offene Bestände

Arbeitsliste: `tools/endriss/quellen.tsv`; historische Resteliste: `docs/offene-quellen.md`. Die Arbeitsliste ist noch kein vollständig neu zertifizierter Vergleich beider Drive-Ordnerbäume. Originalseiten-Publisher `36616059906` ist bereits abgeschlossen und sein Bestand veröffentlicht. Ohne konkreten Bedarf keine erneute mehrgigabytegroße Massenaufbereitung.

Historische Wiederherstellungsartefakte aus Run `36589072803`: core `11043472165`, notes `11043506188`, erbst `11042489471`, kst `11043617979`, marks `11043770270`. Verfügbarkeit/Ablauf prüfen; gegebenenfalls über die Drive-IDs neu abrufen. Nicht voraussetzen, dass frühere Chatdateien oder `/mnt/data` noch vorhanden sind.

Offen bleiben ErbSt-Einheiten 4/5; KSt-Abgleich aller sieben Quellen gegen vorhandene Module; Bilanz-/PersG-Fact-Sheets; restliche FGO-Seiten und Notfallbuch; übrige Notizen, Mitschriften, Markierungen und ZIP-Inhalte. Echte Handschriften/Tabellen/Schemata direkt ansehen und den letzten tatsächlich bearbeiteten Abschnitt festhalten. Unleserliche Stellen markieren statt raten. Die Umfangsfrage der Bilanz-Fallsammlung Teil 3 ist geklärt: drei tatsächliche PDF-Seiten, Ende nach Sachverhalt 2; keine weiteren Fälle erfinden.

## Bedeutung von 100 Prozent

Erst den relevanten tatsächlichen Quellenumfang bestimmen; jede Inhaltsseite quellengetreu nativ übernehmen oder konkret auf gleichwertige bestehende Lerninhalte abbilden; UI-Erreichbarkeit, relevante Tests, Merge und Veröffentlichung nachweisen. Bloße Bildablage, Platzhalter, pauschale Seitenreferenzen oder selbst gesetzte Abschlussfelder sind kein Abschluss. Fehlende Original-Lösungen getrennt von Übernahmelücken ausweisen.

Beim nachgewiesenen Gesamtabschluss dokument- und seitenbezogenes Protokoll mit Commits, Tests und Veröffentlichung erstellen und die stündliche Aufgabe deaktivieren. Bis dahin konkrete fertige Pakete oder handlungsrelevante Sperren melden, keine unveränderten Statusberichte anstelle von Inhaltsarbeit.
