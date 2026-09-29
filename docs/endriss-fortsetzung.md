# Endriss: Wiederaufnahme und Abnahme

Maßgeblich sind aktuelle GitHub-Refs, `docs/endriss-fortschritt.json` und alle dort registrierten dokumentbezogenen Checkpoints. Frühere Chatmeldungen oder historische Checkpoints sind keine aktuellen Zustandsmeldungen. Die vorherige Anleitung ist bei Commit `2467bf253d500be397d1c144d8132aac5df52cc1`, Pfad `docs/endriss-fortsetzung.md`, Blob `0f0ae5142ed525df26fd3d8e60c89882a6c24272` erhalten; ihre frühere Fassung bei `5f0d4852f0d7f4a63917da2c3522b98c8af5af7c`, Blob `6d831a76f15bdaac33ecb477f7a252639075fb3d`.

## Auftrag und Freigabe

Vorhandene, bisher offene Endriss-Unterlagen quellengetreu als nutzbare Campusinhalte übernehmen. Keine Rechtsstandsprüfung; keine eigenen Lösungen als Original ausgeben. Der Nutzer hat Weiterbearbeitung, Wiederaufnahme nach Abbrüchen und getestete Teil-Merges autorisiert.

Ausdrückliche Entscheidung: „originalbestand kann bleiben, dass wird separat überarbeiten, kannst daher mergen“. Bereits vorhandene Originalseiten bleiben unverändert. Ihre separate Überarbeitung ist kein erneuter Blocker für native Inhalte und getestete Merges. Keine Veröffentlichung anderer privater Daten oder Zugangsdaten daraus ableiten.

## Neu veröffentlicht: PR 261, PersG Fact Sheets – erstes Teilpaket

Original `B-S25-PersG-fact sheets-(Horst)-0425.pdf`, Drive `179WkR77_ZOKvZAR4fEICG_IM7nXMYL-5`, tatsächlich 24 PDF-Seiten und 17.436.897 Bytes. SHA-256 `28d8a41c60574a73de76381db08742f068faf7b912c414e8f271e09f420c2a67`. **PDF-Seiten 1–4** direkt visuell gelesen und nativ übernommen: Deckblatt/Inhalt/Quellenhinweise sowie gedruckte Fact Sheets **1–6**. Sieben Abschnitte und elf Tabellen mit expliziten Diagrammkanten. Keine OCR; vergrößerte Gewinnschema-, Pensions- und Inhaltsdetails zusätzlich kontrolliert. Die Inhaltsübersicht nennt auch spätere Blätter, ohne diese damit als umgesetzt zu zählen.

Datensatz `src/data/endriss-persg-facts.js`; seitenbezogenes Protokoll `docs/endriss-persg-facts-fortschritt.json`. Bestehende PersG-Module 1, 2, 3, 4, 6, 7, 8 und Horst-Folien verglichen; Inhalte und Fortschrittsverwaltung nicht überschrieben. Das fünfspaltige Gewinnschema bleibt unausgefüllt. Die Quelle ordnet die Ergänzungsbilanz Stufe I zu; die anders gegliederte Darstellung im bestehenden Modul 4 bleibt erhalten und die Abweichung wird ausdrücklich benannt. Zahlen und Quellennormen nicht aktualisiert.

Erreichbar über **Unterlagen-Nachträge → Personengesellschaften → PersG Fact Sheets** sowie **Klausur 3 → Personengesellschaften → Hausaufgaben PersG → Fact Sheets (Horst) öffnen**. Dort funktionieren die Sprünge zu allen sieben bestehenden Modulen. Sichtbare Teilgrenze **4/24**, auch bei fehlendem oder irreführendem Bildindex. Breite Tabellen sind beschriftete, fokussierbare Scrollbereiche; Fachbegriffe werden nicht mitten im Wort zusammengedrückt.

Merge `d35c7485c74aecbc9061dcef6e06252c3ab24a7f`, PR 261 am 29.09.2026 um 22:15:36 UTC. Deploy `36638499096` mit Build `109644892118` und Deploy `109645272835` vollständig erfolgreich; `.github/deploy-last.json` am Main-Commit `4d848e6433c3cccd4a4f29ac0b1872082477fd3a` bestätigte genau diesen veröffentlichten SHA. Der Arbeitsbranch wurde danach ohne Force auf diesen main-Stand synchronisiert; erst anschließend wird dieser Dokumentationscheckpoint gespeichert.

Prüfungen am Head `2467bf253d500be397d1c144d8132aac5df52cc1`: Paket/Browser `36637961068`, vollständiges Validate einschließlich bot/Linter/Tests `36637961061`, FGO-Regression `36637960988`, jeweils erfolgreich. Im PR wurde der Zusammenführungsbaum `ba46fdfc5522df01fe11cccf8c6cd7d424e2957b` getestet. Enthalten: Produktionsbuild, Quellen-/Importregression, jede native Text-/Tabellenzelle, vier Originalbild-Hashes, Desktop 1280/Mobil 390, alle sieben Modulsprünge, erhaltener Test-Lernfortschritt, tatsächlicher Abschnittssprung, horizontale Pfeiltastennavigation bis zur letzten Spalte und alle acht Originalbild-/Index-Fallbacks. Main-Validate `36638499261` ebenfalls vollständig erfolgreich.

Die nativen Gewinnermittlungs- und Pensionstabellen wurden zusätzlich anhand konkret benannter Desktop-/Mobil-Screenshots aus Artefakt `11064599731` angesehen. Frühere grüne Tests hatten eine mobile Wortumbruchschwäche nicht erfasst; nach visueller Feststellung wurde sie mit einem strengeren Spalten-/Tastaturtest repariert. Nicht behaupten, jede erzeugte Aufnahme sei manuell geprüft. Der vollständige lokale Produktionsbuild im kleinen Quell-Snapshot schlug wegen fehlender `public/instagram-dashboard.html` fehl; der vollständige CI-Build bestand unabhängig davon. Lokale Chromium-Navigation war administrativ blockiert und wurde nicht umgangen. Details und frühere Testkorrekturen bleiben im Quellencheckpoint erhalten.

**Offen sind PDF-Seiten 5–24. A5 ist nicht vollständig.** Keine neue Prozentsteigerung für eine ganze Restgruppe aus diesem Teil-Merge ableiten.

## Bereits veröffentlichte Pakete nicht neu beginnen

PRs 255–258: ESt-Kurzskript I Seiten 80–162 und Mirbach-Lösungsblätter; IStR-Beispiel, Lohnsteuer-Mitschrift samt Korrektur und Horst-Fassung 1; separat nachgewiesene Horst-Fassung 2; erste FGO-Handschrift mit zwölf Stationen. Ausführliche Nachweise bleiben über feste historische Commit-Verweise im globalen Checkpoint erhalten.

**PR 260 schloss die gesamte FGO-Quelle ab:** Drive `1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj`, 1.838.083 Bytes, 37 PDF-Seiten. Bereits veröffentlichte erste Seite wiederverwendet; 36 Gesetzesseiten mit 67 getrennten Handschrift-/Markierungseinträgen auf 22 Seiten nativ. Gedruckter Änderungsstand 10.03.2023 unverändert. Merge `5b775a2715b29c2f3cc8e03f5deefc56ee21fc78`; Deploy `36633680434`, Build `109628985728`, Deploy-Job `109629467756` erfolgreich und zurückgelesen. Frühere vollständige Prüfungen `36633434379`, `36633434394`, `36633434417` bestanden. Quelle: `docs/endriss-fgo-fortschritt.json`; Daten `endriss-fgo.js`, `endriss-fgo-gesetz.generated.js`, `endriss-fgo-seitenreview.js`. Alle 37 Bild-Hashes, Text-/Notizblöcke, tatsächliche React-/Chromium-Ausgabe, Suche, Fokus und Fallbacks geprüft. Deren ältere Screenshots wurden nicht nachträglich als manuell kontrolliert ausgegeben.

FGO ist über Unterlagen-Nachträge → Abgabenordnung/FGO erreichbar, unabhängig vom Bildindex. Die zwölfstufige AO-Fahrtroute bleibt am bisherigen Schema-Einstieg. Farb-/Fundstellenbeschreibungen behaupten keine pixelidentische Reproduktion der Markerstriche. **Nicht erneut bei Seite 2 beginnen**, keinen abgeschlossenen Generator als Publisher wiederholen, keine zweite kanonische Handschrift pflegen.

**PR 259**: Notfallbuch, Merge `422dd9a3cdc23fc0adfde3272b2aa8cb2b2bdf8e`, erfolgreich veröffentlicht. Obere lesbare Reiter, FGO-Randliste und beide Vollstreckungsketten nativ. Kleine oder verdeckte Seitenreiter bleiben ausdrücklich uncertifiziert; nur diese gezielt prüfen, keine bereits veröffentlichten Inhalte wiederholen. `docs/endriss-notfallbuch-fortschritt.json` trennt Veröffentlichung von dieser Restunsicherheit. Die strenge Korrektur dieser Grenze bleibt erhalten.

## Prozentmaßstab und nächster Schritt

Die ursprüngliche Claude-Liste umfasst acht A- und vier B-Gruppen. Vollständig übernommen und veröffentlicht: **A1, A6, A7, A8, B2, B4 = 6/12 = 50 %**. B3 und A5 sind teilweise veröffentlicht; A2, A3, A4 und B1 bleiben weitere offene Gruppen. Fehlende Original-Lösungen (C), geklärte Umfangsfrage (D) und Informationen ohne Lösungsteil (E) separat behandeln. Keine Gesamt-Campus-, Seiten- oder Arbeitszeitquote daraus ableiten.

**Sofortiger Fortsetzungspunkt: PersG Fact Sheets, Original-PDF-Seite 5, nächstes gedrucktes Blatt 7.** Aktuelle Refs sowie den globalen und PersG-Quellencheckpoint lesen, eine neue begrenzte Arbeitssperre sichern, nächste Originalbildseiten direkt vergleichen. Seiten 1–4 nicht erneut übertragen. Bei Erweiterung des Pakets müssen Daten-, Audit-, UI- und Test-Seitenlisten gemeinsam den tatsächlich übernommenen Umfang abbilden; die übrigen Seiten bleiben ausdrücklich offen.

Danach Bilanz Fact Sheets; ErbSt-Einheiten 4/5; KSt-Abgleich aller sieben Quellen gegen vorhandene Module; Mitschriften, Markierungen und ZIP-Inhalte. Beim Notfallbuch nur die benannten kleinen Restbeschriftungen. Keine fehlenden Original-Lösungen aus allgemeinem Wissen herstellen.

## Wiederaufnahme, Parallelität und Werkzeuge

Die eingerichtete Aufgabe ist eine stündliche Wiederaufnahme, keine unterbrechungsfreie KI-Bearbeitung. Kein unmittelbarer Chat-Abbruch-Trigger oder 15-Minuten-Takt in dieser Aufgabenfunktion. Actions führt gestartete technische Schritte aus, liest nicht selbständig neue Handschriften.

Vor jedem Lauf aktuelle main-/Arbeitsrefs, globalen und alle dokumentbezogenen Checkpoints sowie relevante PRs/Actions lesen. Gültige globale und quellenbezogene Sperren respektieren. Aktuelle Blob-SHAs verwenden, fremde Änderungen behalten, keine Force-Pushes. Nach Unterbrechungen keine alten vollständigen Dateien über neue Arbeit schreiben. Quelle, genaue Seiten, Datensätze, Tests, Merge, tatsächlich bestätigten Deploy und nächste Seite dokumentieren; eigene Sperre am Ende freigeben.

GitHub- und Drive-Schreib-/Lesefähigkeit tatsächlich prüfen, nicht aus früheren Containerfehlern ableiten. In diesem PersG-Lauf funktionierten verbundene GitHub-Aktionen, Drive-Rohdownload, lokale PDF-Bilder und Node-SSR; echte Browser- und vollständige Produktionsprüfungen liefen in GitHub Actions. Lokale Laufzeit- oder Sicherheitsfehler ehrlich dokumentieren, keine Berechtigungsprüfung umgehen. Bildseiten direkt lesen; keine unzuverlässige OCR als geprüfte Handschrift ausgeben.

## Quellenbestand und Wiederherstellung

Arbeitsliste `tools/endriss/quellen.tsv`, ursprüngliche Resteliste `docs/offene-quellen.md`: noch kein neuer lückenloser Abgleich beider Drive-Bäume. Originalseiten-Publisher `36616059906` ist abgeschlossen und sein Bestand veröffentlicht. Keine neue mehrgigabytegroße Massenaufbereitung ohne konkreten Bedarf.

Historische Wiederherstellungsartefakte aus Run `36589072803`: core `11043472165`, notes `11043506188`, erbst `11042489471`, kst `11043617979`, marks `11043770270`. Ablauf prüfen; gegebenenfalls aus Drive-IDs neu abrufen. Frühere lokale `/mnt/data`-Dateien nicht voraussetzen. Der kleine Quellcode-Snapshot enthält nicht sämtliche öffentlichen Assets und ersetzt deshalb keinen vollständigen Produktionscheckout.

Bilanz-Fallsammlung Teil 3: tatsächlich drei PDF-Seiten, Ende nach Sachverhalt 2. Keine weiteren Fälle erfinden; alte Umfangsunsicherheiten anhand dieses Nachweises bereinigen.

## Bedeutung von 100 Prozent

Tatsächlichen relevanten Quellenumfang bestimmen, jede Inhaltsseite quellengetreu nativ übernehmen oder spezifisch gleichwertigem vorhandenen Inhalt zuordnen, UI-Erreichbarkeit, Tests, Merge und Veröffentlichung nachweisen. Bilder, Platzhalter, pauschale Seitenreferenzen und selbst gesetzte Abschlussfelder reichen nicht. Fehlende Lösungen und unlesbare Reststellen von Übernahmelücken unterscheiden und offen ausweisen.

Erst beim belegten Gesamtabschluss dokument-/seitenbezogenes Abschlussprotokoll erstellen und die stündliche Aufgabe deaktivieren. Bis dahin tatsächliche Inhaltspakete statt wiederholter unveränderter Statusberichte liefern.
