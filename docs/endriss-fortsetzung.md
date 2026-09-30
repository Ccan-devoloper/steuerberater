# Endriss: Wiederaufnahme und Abnahme

Maßgeblich sind aktuelle GitHub-Refs, `docs/endriss-fortschritt.json` und alle dort registrierten dokumentbezogenen Checkpoints. Frühere Chatmeldungen oder historische Checkpoints sind keine aktuellen Zustandsmeldungen. Die vollständige Anleitung nach PR261 bleibt bei `94bbdbc6f4f1ccb4c48d132cff95f45d4809d601`, Pfad `docs/endriss-fortsetzung.md`, Blob `25235aed3927953e0b6c96d5111a128d4a6f9ac3` erhalten. Ältere Fassungen: `2467bf253d500be397d1c144d8132aac5df52cc1`, Blob `0f0ae5142ed525df26fd3d8e60c89882a6c24272`; `5f0d4852f0d7f4a63917da2c3522b98c8af5af7c`, Blob `6d831a76f15bdaac33ecb477f7a252639075fb3d`.

## Auftrag und Freigabe

Vorhandene, bisher offene Endriss-Unterlagen quellengetreu als nutzbare Campusinhalte übernehmen. Keine Rechtsstandsprüfung; keine eigenen Lösungen als Original ausgeben. Der Nutzer hat Weiterbearbeitung, Wiederaufnahme nach Abbrüchen und getestete Teil-Merges autorisiert.

Ausdrückliche Entscheidung: „originalbestand kann bleiben, dass wird separat überarbeiten, kannst daher mergen“. Bereits vorhandene Originalseiten bleiben unverändert. Ihre separate Überarbeitung ist kein erneuter Blocker für native Inhalte und getestete Merges. Keine Veröffentlichung anderer privater Daten oder Zugangsdaten daraus ableiten.

## Aktuell veröffentlicht: PR262, PersG Fact Sheets – zweites Teilpaket

**Jetzt sind PDF-Seiten 1–6 von 24 nativ übernommen und veröffentlicht.** PR261 umfasst PDF1–4/gedruckteBlätter1–6; PR262 ergänzt ausschließlich **PDF5–6/gedruckteBlätter7–10**. Insgesamt elf Abschnitte und 18 Tabellen, zehn unterschiedliche bestehende Modulziele. Das sind 25% der PDF-Seiten dieser Quelle, nicht ein Viertel des Campus und keine abgeschlossene A5-Restgruppe. **PDF7–24 bleiben offen; nächste Originalseite ist PDF7, nächstes gedrucktes Blatt11.**

Original: `B-S25-PersG-fact sheets-(Horst)-0425.pdf`, Drive `179WkR77_ZOKvZAR4fEICG_IM7nXMYL-5`, 24 tatsächliche PDF-Seiten, 17.436.897 Bytes, SHA-256 `28d8a41c60574a73de76381db08742f068faf7b912c414e8f271e09f420c2a67`. Frische verbundene Metadaten und erneuter Byte-/Hash-/Seitenabgleich des authentischen Downloads. PDF5/6 und vergrößerte Blätter8/9/10 direkt visuell gelesen, danach nochmals mit dem nativen Text verglichen. Keine OCR, kein neuer Originalbild- oder Wasserzeichenimport.

Neue Daten `src/data/endriss-persg-facts-7-10.js`, eingebunden durch `src/data/endriss-persg-facts.js`. PDF5: knappe Darlehens-Fortsetzung und vollständige Sondervergütungs-Abgrenzung ESt/USt/GewSt/SV samt Klebezetteln, durchgestrichenem Zitat und zwei Leistungsbeispielen. PDF6: Komplementär-GmbH mit drei Beteiligungskanten und Sonderbilanz, Grundsatz/Ausnahme/Rückausnahme/Folgen; Drei-Konten-Modell und vollständige ursprüngliche siebenzeilige/sechsspaltige Kontenlösung. Alle Strichfelder, negative65.000, Schlussbetrag115.000 und §15a/-15.000-Notiz aus dem Original erhalten, nicht selbst ergänzt oder neu berechnet. Das fast leere Blatt7 wird nicht mit erfundenem Inhalt gefüllt. Abweichende Blattnummern gegenüber dem Inhaltsverzeichnis bleiben ausdrücklich sichtbar.

Bestehende Kapitel und Module nicht verändert: Die zuvor veröffentlichten sechs gedruckten Kapitel sind zusätzlich durch einen unveränderten Inhalts-Hash abgesichert. Modul9 zur Bilanzierungskonkurrenz, Modul10 zu Sondervergütungen und Modul11 zu Kapitalkonten sowie Module3/7/8 wurden für konkrete Sprungziele verglichen; Links behaupten keine identischen Quellenfassungen. Bestehende Lernfortschritte bleiben unverändert.

Einstiege unverändert: **Unterlagen-Nachträge → Personengesellschaften → PersG Fact Sheets** und **Klausur3 → Personengesellschaften → Hausaufgaben PersG → Fact Sheets (Horst) öffnen**. Der aktuelle Hinweis **6/24** und die 18 offenen Seiten werden aus dem nativen Stand abgeleitet; ein vollständiger oder irreführender Bildindex kann sie nicht überschreiben. Breite Tabellen bleiben beschriftete, fokussierbare Scrollbereiche. Die numerische Kontentabelle hält Minuszeichen, Betrag und Eurozeichen gemeinsam in einer Zeile.

PR262 gemergt am 29.09.2026 um 23:07:44 UTC, Merge **`c37b58ab98915402c32a7dd93ea71530e8069717`**. Deploy-Run **`36643512693`**, Build **`109661045181`**, Deploy **`109661376988`** vollständig erfolgreich. `.github/deploy-last.json` am Main-Commit **`27ff5c7414d507c1e7a25ca15c396f7ceb324e27`**, Blob `63ddebfaceec6d39d6853ad920f097492c18d2c1`, wurde mit genau diesem veröffentlichten Merge-SHA und `success` zurückgelesen. Der Arbeitsbranch wurde danach ohne Force auf diesen main-Stand synchronisiert; erst anschließend werden die Abschlusscheckpoints geschrieben und die eigene Sperre freigegeben.

Prüfungen am finalen Head `257f7864342f953dbea8f7634f8b69bd16ef402c`, tatsächlicher PR-Test-Merge `8256915b0a4ee6d7a8c18d2d6417b9d7778cb887`: Paket/Browser **36642668572**, vollständiges Validate einschließlich bot **36642668563**, FGO-Regression **36642668601**, alle erfolgreich. Main-Validate **36643512665** ebenfalls vollständig erfolgreich. Geprüft: Produktionsbuild, Source-/Importregressionen, sechs Originalbild-Hashes, jeder native Zelltext, exakte Kontenlösung, alter Kapitel-Hash, zehn tatsächliche Modulsprünge, erhaltener Test-Lernfortschritt, Desktop1280/Mobil390, Abschnittssprünge, Suche sowie alle acht Originalbild-/Index-Fallbacks.

Artefakt **11067610477**, SHA-256 `7cdd91544129e75ab0cb920b70aa9b143e25c76dedaa3c776ead64f4a169b265`, heruntergeladen und Hash geprüft. Alle drei Berichte gelesen und erfolgreich; konkret benannte neue Konten-, Beteiligungs-, Sonderbilanz- und Sondervergütungstabellen auf Desktop/Mobil direkt angesehen. Nicht sämtliche erzeugten Bilder als manuell geprüft ausgeben. Mobile Aufnahmen zeigen teils horizontale Ausschnitte; alle Spalten und Tastaturzugriff werden getrennt geprüft. Ein trotz erster grüner Tests sichtbarer Umbruch von Minus/Betrag/Euro wurde **vor Merge** behoben und durch tatsächliche Einzeilen-Textbereiche abgesichert. Details, erste grüne Runs und genaue Bildnamen stehen im Quellencheckpoint.

Lokale Quellen-/Native-/Notfallbuch-SSR und Vite-Bündelung bestanden. **Der vollständige lokale Produktionsbuild und die lokale Horst2-Assetprüfung schlugen im kleinen Quellsnapshot wegen fehlender public-Dateien fehl.** Diese lokalen Ergebnisse werden nicht rückwirkend als erfolgreich bezeichnet. Vollständiger CI-Checkout bestand beide Prüfungen unabhängig davon. Kein lokaler Browserlauf für dieses zweite Paket behauptet.

## Vorheriges PersG-Teilpaket PR261 bleibt erhalten

PDF1–4 wurden direkt visuell gelesen: Deckblatt/Inhalt/Quellenhinweise und gedruckteBlätter1–6, damals sieben Abschnitte und elf Tabellen. Die dortige Inhaltsübersicht zählt spätere Blätter nicht als umgesetzt. Das fünfspaltige Gewinnschema bleibt unausgefüllt. Die Stufe-I-Zuordnung der Ergänzungsbilanz im Original und die anders gegliederte Darstellung in Modul4 bleiben ausdrücklich unterscheidbar. Keine Quellennormen aktualisiert.

Merge `d35c7485c74aecbc9061dcef6e06252c3ab24a7f`, PR261 am29.09.2026 um22:15:36UTC. Deploy36638499096, Build109644892118 und Deploy109645272835 erfolgreich; exakter Status damals am Main4d848e6433c3cccd4a4f29ac0b1872082477fd3a zurückgelesen. Prüfungen am Head2467bf253d500be397d1c144d8132aac5df52cc1: Paket/Browser36637961068, Validate einschließlich bot36637961061, FGO36637960988, MainValidate36638499261, alle erfolgreich. Originale lokale Fehlschläge, administrativ gesperrte damalige lokale Browsernavigation und manueller Wortumbruchbefund bleiben unverändert im historischen Quellencheckpoint bei94bbdbc6 erhalten. Diese früheren Beobachtungen nicht als neu ausgeführte Tests ausgeben.

## Bereits veröffentlichte Pakete nicht neu beginnen

PRs255–258: ESt-Kurzskript I Seiten80–162 und Mirbach-Lösungsblätter; IStR-Beispiel, Lohnsteuer-Mitschrift samt Korrektur und Horst-Fassung1; separat nachgewiesene Horst-Fassung2; erste FGO-Handschrift mit zwölf Stationen. Ausführliche Nachweise bleiben über feste historische Commit-Verweise im globalen Checkpoint erhalten.

**PR260 schloss die gesamte FGO-Quelle ab:** Drive `1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj`,1.838.083Bytes,37PDF-Seiten. Erste veröffentlichte Seite wiederverwendet;36Gesetzesseiten mit67getrennten Handschrift-/Markierungseinträgen auf22Seiten nativ. Gedruckter Änderungsstand10.03.2023 unverändert. Merge `5b775a2715b29c2f3cc8e03f5deefc56ee21fc78`; Deploy36633680434, Build109628985728, Deploy109629467756 erfolgreich und zurückgelesen. Frühere vollständige Prüfungen36633434379/36633434394/36633434417 bestanden. Quelle: `docs/endriss-fgo-fortschritt.json`; Daten `endriss-fgo.js`, `endriss-fgo-gesetz.generated.js`, `endriss-fgo-seitenreview.js`. Alle37Bild-Hashes, Text-/Notizblöcke, echte React-/Chromium-Ausgabe, Suche, Fokus und Fallbacks geprüft. Deren ältere Screenshots wurden nicht nachträglich als manuell kontrolliert ausgegeben.

FGO ist über Unterlagen-Nachträge → Abgabenordnung/FGO unabhängig vom Bildindex erreichbar. Die zwölfstufige AO-Fahrtroute bleibt am bisherigen Schema-Einstieg. Farb-/Fundstellenbeschreibungen behaupten keine pixelidentische Reproduktion der Markerstriche. **Nicht erneut bei Seite2 beginnen**, keinen abgeschlossenen Generator als Publisher wiederholen, keine zweite kanonische Handschrift pflegen.

**PR259**: Notfallbuch, Merge `422dd9a3cdc23fc0adfde3272b2aa8cb2b2bdf8e`, erfolgreich veröffentlicht. Obere lesbare Reiter, FGO-Randliste und beide Vollstreckungsketten nativ. Kleine oder verdeckte Seitenreiter bleiben ungeklärt; nur diese gezielt prüfen, keine bereits veröffentlichten Inhalte wiederholen. `docs/endriss-notfallbuch-fortschritt.json` trennt Veröffentlichung von dieser Restunsicherheit. Die strenge Korrektur dieser Grenze bleibt erhalten.

## Prozentmaßstab und nächster Schritt

Die ursprüngliche Claude-Liste umfasst acht A- und vier B-Gruppen. Vollständig übernommen und veröffentlicht: **A1,A6,A7,A8,B2,B4 = 6/12 = 50%**. B3 und A5 sind teilweise veröffentlicht; A2,A3,A4 und B1 weitere offene Gruppen. Fehlende Original-Lösungen(C), geklärte Umfangsfrage(D) und Informationen ohne Lösungsteil(E) separat behandeln. Keine Gesamt-Campus-, Seiten- oder Arbeitszeitquote daraus ableiten.

**Sofortiger Fortsetzungspunkt: PersG Fact Sheets, Original-PDF-Seite7, nächstes gedrucktes Blatt11.** Aktuelle Refs, globalen und PersG-Quellencheckpoint lesen, eine neue begrenzte Arbeitssperre sichern, nächste Originalbildseiten direkt mit vorhandenen Modulen vergleichen. **Seiten1–6 nicht erneut übertragen.** Bei Erweiterung Daten-, Audit-, UI- und Test-Seitenlisten gemeinsam nur auf den tatsächlich abgeschlossenen Umfang setzen; PDF7–24 bleiben bis dahin offen.

Danach Bilanz Fact Sheets; ErbSt-Einheiten4/5; KSt-Abgleich aller sieben Quellen gegen vorhandene Module; Mitschriften, Markierungen und ZIP-Inhalte. Beim Notfallbuch nur die benannten kleinen Restbeschriftungen. Keine fehlenden Original-Lösungen aus allgemeinem Wissen herstellen.

## Wiederaufnahme, Parallelität und Werkzeuge

Die eingerichtete Aufgabe ist eine stündliche Wiederaufnahme, keine unterbrechungsfreie KI-Bearbeitung. Kein unmittelbarer Chat-Abbruch-Trigger oder15-Minuten-Takt in dieser Aufgabenfunktion. Actions führt gestartete technische Schritte aus, liest nicht selbständig neue Handschriften.

Vor jedem Lauf aktuelle main-/Arbeitsrefs, globalen und alle dokumentbezogenen Checkpoints sowie relevante PRs/Actions lesen. Gültige globale und quellenbezogene Sperren respektieren. Aktuelle Blob-SHAs verwenden, fremde Änderungen behalten, keine Force-Pushes. Nach Unterbrechungen keine alten vollständigen Dateien über neue Arbeit schreiben. Quelle, genaue Seiten, Datensätze, Tests, Merge, tatsächlich bestätigten Deploy und nächste Seite dokumentieren; eigene Sperre am Ende freigeben.

GitHub-/Drive-Schreib-/Lesefähigkeit tatsächlich prüfen, nicht aus früheren Containerfehlern ableiten. Verbundene Aktionen und lokal mögliche PDF-/Node-Arbeit benutzen; echte vollständige Produktions-/Browserabnahme erforderlichenfalls in vorhandenen Actions ausführen. Lokale Laufzeit- oder Sicherheitsfehler ehrlich dokumentieren, keine Berechtigungsprüfung umgehen. Bildseiten direkt lesen; keine unzuverlässige OCR als geprüfte Handschrift ausgeben.

## Quellenbestand und Wiederherstellung

Arbeitsliste `tools/endriss/quellen.tsv`, ursprüngliche Resteliste `docs/offene-quellen.md`: noch kein neuer lückenloser Abgleich beider Drive-Bäume. Originalseiten-Publisher36616059906 ist abgeschlossen und sein Bestand veröffentlicht. Keine neue mehrgigabytegroße Massenaufbereitung ohne konkreten Bedarf.

Historische Wiederherstellungsartefakte aus Run36589072803: core11043472165, notes11043506188, erbst11042489471, kst11043617979, marks11043770270. Ablauf prüfen; gegebenenfalls aus Drive-IDs neu abrufen. Frühere lokale `/mnt/data`-Dateien nicht voraussetzen. Der kleine Quellcode-Snapshot enthält nicht sämtliche öffentlichen Assets und ersetzt keinen vollständigen Produktionscheckout.

Bilanz-Fallsammlung Teil3: tatsächlich drei PDF-Seiten, Ende nach Sachverhalt2. Keine weiteren Fälle erfinden; alte Umfangsunsicherheiten anhand dieses Nachweises bereinigen.

## Bedeutung von100Prozent

Tatsächlichen relevanten Quellenumfang bestimmen, jede Inhaltsseite quellengetreu nativ übernehmen oder spezifisch gleichwertigem vorhandenen Inhalt zuordnen, UI-Erreichbarkeit, Tests, Merge und Veröffentlichung nachweisen. Bilder, Platzhalter, pauschale Seitenreferenzen und selbst gesetzte Abschlussfelder reichen nicht. Fehlende Lösungen und unlesbare Reststellen von Übernahmelücken unterscheiden und offen ausweisen.

Erst beim belegten Gesamtabschluss dokument-/seitenbezogenes Abschlussprotokoll erstellen und die stündliche Aufgabe deaktivieren. Bis dahin tatsächliche Inhaltspakete statt wiederholter unveränderter Statusberichte liefern.
