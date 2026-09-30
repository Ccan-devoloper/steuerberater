# Endriss: Wiederaufnahme und Abnahme

Maßgeblich sind aktuelle GitHub-Refs, `docs/endriss-fortschritt.json` und alle dort registrierten dokumentbezogenen Checkpoints. Frühere Chatmeldungen und historische Pending-Felder sind keine aktuellen Zustandsmeldungen. Die vollständige vorige Anleitung bleibt bei Commit `a7e800090f995f44e94622ef1b9b08595bc04100`, Pfad `docs/endriss-fortsetzung.md`, Blob `4fee102268b7e8a6738ac850e7b1f1aa217d6492` erhalten; sie enthält ihrerseits feste Verweise auf frühere Fassungen. Keine früheren Quellen- oder Fehlernachweise gehen verloren.

## Auftrag und Freigabe

Vorhandene, bisher offene Endriss-Unterlagen quellengetreu als nutzbare Campusinhalte übernehmen. Keine Rechtsstandsprüfung; keine eigenen Lösungen als Original ausgeben. Der Nutzer hat Weiterbearbeitung, Wiederaufnahme nach Abbrüchen und getestete Teil-Merges autorisiert.

Ausdrückliche Entscheidung: „originalbestand kann bleiben, dass wird separat überarbeiten, kannst daher mergen“. Bereits vorhandene Originalseiten bleiben unverändert. Ihre separate Überarbeitung ist kein erneuter Blocker für native Inhalte und getestete Merges. Daraus keine Veröffentlichung neuer privater Daten oder Zugangsdaten ableiten. Keine neuen persönlichen Wasserzeichentexte veröffentlichen.

## Aktuell veröffentlicht: PR264, PersG Fact Sheets – viertes Teilpaket

**Original-PDF-Seiten 1–10 von 24 sind jetzt nativ übernommen und veröffentlicht.** PR261: PDF1–4/gedruckte Blätter1–6; PR262: PDF5–6/Blätter7–10; PR263: PDF7–8/Blätter11–14; PR264: ausschließlich **PDF9–10/Blätter15–18**. Insgesamt **19 Kapitel, 52 Tabellen und 22 verschiedene funktionierende vorhandene Modulziele**. Das sind 10/24 = ca.41,7% der Seiten dieser PDF-Quelle, keine Gesamt-Campus- oder Arbeitsaufwandquote und noch keine abgeschlossene A5-Gruppe. **PDF11–24 bleiben offen. Nächste Originalseite: PDF11.**

Original `B-S25-PersG-fact sheets-(Horst)-0425.pdf`, Drive `179WkR77_ZOKvZAR4fEICG_IM7nXMYL-5`, tatsächlich 24 PDF-Seiten und 17.436.897 Bytes, SHA-256 `28d8a41c60574a73de76381db08742f068faf7b912c414e8f271e09f420c2a67`. Frische verbundene Metadaten; die angehängte/backing Datei hat dieselbe Drive-Identität und wird nicht als neue unabhängige Quelle gezählt. Byte-/Hash-/Seitenabgleich unabhängig geprüft. Beide ganzen Originalseiten9/10 und alle vier vergrößerten Blätter15–18 direkt visuell gelesen und gegen den nativen Text kontrolliert; keine OCR.

Neue Daten: `src/data/endriss-persg-facts-15-18.js`, früher Sicherungscommit `6893b57eb81d987e9e4f05378cf48aa671ae958d`, Blob `e3e1be8ecb47a2d7fe65000ee77b0e3bb58c6796`. Integration über stabilen Adapter `src/data/endriss-persg-facts.js` in `7855d3c5200d485c7483f6f84638ce32385c460c`. Die Basis und vorige Fortsetzung bleiben unverändert, keine zweite editierbare Alttranskription. Quelle/Seiten/Audit/Tests sind im Quellencheckpoint verbunden.

PDF9 enthält drei vollständige PV-Grundstücksvarianten samt Originalbeträgen, GrESt, 90/10-Beteiligung, 75/25-Aufteilung und Buchungen sowie sämtliche BV-Überführungs-/Übertragungswege, Buchwertklammern und Randzettel. Die verkürzte Originalbuchung „GruBo150.“ bleibt neben dem Rechenergebnis150.500€ sichtbar; keine stille Ergänzung. PDF10 enthält die originalen Sperrfristangaben, Ausnahmen, R6.15-Beteiligungen, den ausdrücklich gegenläufigen BFH-Hinweis und sämtliche vier Gründungsalternativen mit Stolperfallen/Erlassen. ÜberschriftS4–6 versus ListenzeileS6,7, abweichende Fristgliederung gegenüber Modul27, leere A-Erlasszelle und fehlende Klammer in „§52(21b EStG“ bleiben erhalten. Originale fc13/14/15/18ff-Verweise werden nicht umnummeriert und zählen spätere Seiten nicht als umgesetzt. Keine Ergänzung aus anderen Modulen oder allgemeinem Wissen.

Module20,22–27,29,30 und Kapitalkontenkontext wurden für konkrete Verknüpfungen gelesen, nicht überschrieben. Alle bisherigen15nativen Kapitel sind mit unverändertem Hash `8d302e6520ad44de2ec60df2a7ee97e275b48b8fa0ec665a85d8f7511bc24fde` abgesichert. Acht neue Modulziele ergänzen insgesamt22. Lernfortschritte bleiben unverändert.

Einstiege: **Unterlagen-Nachträge → Personengesellschaften → PersG Fact Sheets** und **Klausur3 → Personengesellschaften → Hausaufgaben PersG → Fact Sheets (Horst) öffnen**. Sichtbare Teilgrenze10/24 und14offene Seiten werden aus dem nativen Stand abgeleitet, auch bei leerem oder irreführendem Originalbildindex. Neue Vier-Spalten-/Rechenpaar-Klassen sind eng begrenzt: Beschreibungstext darf umbrechen, Zahlen bleiben einzeilig. Alle vier Gründungs-Spalten passen auf Desktop gleichzeitig, auf Mobil bleiben sie mit Tastatur seitlich erreichbar.

## Bestätigte Freigabe und Veröffentlichung

PR264 am30.09.2026 um01:01:08UTC gemergt; Merge **`3843d036d597ee03110d6130c6dc4eeeddc23c29`**. Deploy **`36653091087`**, Build **`109691442737`**, Deploy **`109691687455`** vollständig erfolgreich. `.github/deploy-last.json` am Main-Commit **`249d7a244ad58987f990eff9bf585e6d00e9aa22`**, Blob `2f5e68fcbcddd7b148417d803d8eca063686d632`, bestätigt exakt diesen veröffentlichten Merge-SHA mit `success`. Main-Validate **36653091090** und Main-FGO **36653091237** ebenfalls erfolgreich. Arbeitsbranch danach ohne Force auf dieses bestätigte main synchronisiert; anschließend Abschlusscheckpoints und eigene Leasefreigabe.

Finaler Head **`008583a2ca90f95b6f402a2263af413b80d80b70`**, tatsächlicher PR-Test-Merge **`bb911ec2c8e4e7f1f3b940d2922d177ee58ef721`**: PersG **36652563758**, Validate einschließlich bot **36652563782**, FGO **36652563752**, alle erfolgreich. Vollständiger Produktionsbuild, Quellen-/Importregressionen, zehn Originalbild-Hashes, jede native Text-/Tabellenzelle, unabhängige Original-Fixtures und Alt-Kapitel-Hash geprüft. Echte Chromium1280/390-Navigation,22Modulsprünge, erhaltener gesetzter Test-Lernfortschritt, Suche/Abschnittsfokus, alle20neuen Tabellen plus Altregressionen, Pfeiltastenscrollen, letzte Spalte im Lesebereich, einzeilige Beträge und unverdeckte letzte Zellen per echtem Hit-Test. Alle acht vorhandenen Originalbild-/Index-Fallbackstrecken bestanden.

Finales Artefakt **11071545900**, SHA-256 **`a39b335bdf1ea45f5c220168999e6dd96d63b098406dcbf5b3136039f277b5f0`**, heruntergeladen und Hash geprüft. Tatsächlich gelesen: `endriss-persg-facts/report.json` passed(18Prüfpunkte), `viewport-report.json` passed(26Kapitel/Viewport-Kombinationen), `endriss-browser/report.json` passed(21Prüfpunkte).

Die erste vollständige CI-Abnahme am Head7855d3c5 war ebenfalls grün: PersG36651925421, Validate36651925412, FGO36651925439; Artefakt11070867529, SHA-256818cfb0aa273ec46c4d1be1126d431042319a74f30a1864ae5150976523d4013. Direkte Sichtung aller20neuen Desktop-Tabellen und der linken/rechten Mobilfragmente sämtlicher Tabellen15/16/17 zeigte noch unnötiges Desktopscrollen in der Vier-Spalten-Gründungstabelle. Vor Merge neue Quad-Mindestbreite64rem→56rem und strengere Desktopprüfung in008583a2 ergänzt. Danach alle vier Tabellen18 erneut im finalen Artefakt auf Desktop/Mobil links/rechts direkt angesehen. Diese genaue Sichtungsgrenze bleibt dokumentiert; nicht sämtliche älteren Bilder oder mittleren Mobilspalten als manuell geprüft ausgeben. Vollständiger Zelltext und Spaltenzugriff sind separat getestet.

**Keine tatsächlich fehlgeschlagenen Tests in diesem vierten Paket.** Der Desktopbefund war eine Verbesserung nach grüner CI, kein umetikettierter Fehler. Frühere echte PR263-Mobilfehler36647140794/36647717356 und ihre Logs/Reparaturen bleiben unverändert in `docs/endriss-persg-facts-layout-reparatur.json`. Lokale Quellen-/Native-/Notfallbuch-SSR sowie Vite-Bündelung bestanden. Kein vollständiger lokaler Produktionsbuild oder lokaler Browserlauf aus dem kleinen Quellsnapshot behauptet; komplette Produktion und Browserabnahme liefen im vollständigen CI-Checkout. Bestehende npm-/Chunkwarnungen sind keine erfolgreiche Sicherheitsprüfung. Keine Upgrades oder Zugriffsänderungen.

## Bereits veröffentlichte Inhalte nicht neu beginnen

PRs255–258: ESt-Kurzskript I gedruckteSeiten80–162 und Mirbach-Lösungen9/14/28Abwandlung2; IStR-Hinzurechnungsbeispiel, Lohnsteuer-Mitschrift samt Korrektur, Horst-FolienFassung1; unabhängig belegte Horst-Fassung2; erste FGO-Handschrift. Vollständige alte Quellen-/Test-/Merge-/Deploy-Nachweise über feste historische Checkpoints im globalen Protokoll.

**PR260 schloss FGO vollständig ab:**37tatsächliche PDF-Seiten, erste kanonische Handschrift wiederverwendet;36Gesetzesseiten mit67gesonderten Annotationszeilen auf22markierten Seiten. Gedruckter Stand10.03.2023 bleibt erhalten. Merge `5b775a2715b29c2f3cc8e03f5deefc56ee21fc78`, Deploy36633680434 erfolgreich zurückgelesen. `docs/endriss-fgo-fortschritt.json` hält den vollständigen Nachweis. Unterlagen-Nachträge → Abgabenordnung/FGO unabhängig vom Bildindex; bisherige12Stationen-Fahrtroute bleibt erreichbar. Nicht bei Seite2 neu anfangen, keinen abgeschlossenen Quellenpublisher wiederholen.

**PR259 Notfallbuch** ist für lesbare Inhalte veröffentlicht: obere Reiter, FGO-Randliste und beide Vollstreckungsketten. Kleine/verdeckte Seitenreiter bleiben ungeklärt. Nur diese Reststellen gezielt prüfen, nicht die veröffentlichten Inhalte neu übertragen. `docs/endriss-notfallbuch-fortschritt.json` unterscheidet die bestätigte Veröffentlichung von dieser Restunsicherheit. B3 zählt weiterhin nicht als vollständig übertragene Gruppe.

Die vollständigen PR261/262/263-Nachweise, frühere lokale Fehlversuche und die realen PR263-Breitenreparaturen bleiben bei `a7e800090f995f44e94622ef1b9b08595bc04100` und seinen historischen Referenzen erhalten. Frühere unverdeckte Screenshots/Tests nicht als neue Tests ausgeben. Die jährliche Miete1.000€ ohne Quote auf Blatt13 bleibt von dem anderen Modul14-Beispiel unterscheidbar; die nach einem Paragraphenzeichen endende Notiz auf Blatt11 wird nicht ergänzt.

## Fortschritt und genau nächster Schritt

Streng vollständig übertragen, getestet und veröffentlicht: **A1,A6,A7,A8,B2,B4 =6/12 =50%** der ursprünglichen achtA-/vierB-Restgruppen. A5 und B3 teilweise veröffentlicht; A2,A3,A4,B1 weiter offen. Große Gruppen sind unterschiedlich umfangreich, deshalb keine Seiten-/Arbeitszeit-/Campusquote daraus ableiten. Fehlende Original-Lösungen(C), geklärte Umfangsfrage(D) und Informationen ohne Lösungsteil(E) separat behandeln, nichts erfinden.

**Sofortiger Fortsetzungspunkt: PersG Fact Sheets, ORIGINAL-PDF-Seite11.** Aktuelle Refs, globalen und Quellencheckpoint sowie Sperren neu lesen. Eine frische begrenzte Sperre sichern, nächste Bildseiten direkt ansehen und erst dann deren tatsächliche gedruckte Blattnummern zuordnen. PDF1–10 nicht wiederholen. Daten/Audit/UI/Tests nur auf tatsächlich abgeschlossenen neuen Umfang erweitern; PDF11–24 bis dahin offen lassen.

Danach Bilanz-Fact-Sheets, ErbSt-Einheiten4/5, KSt-Quellenabgleich aller sieben Dateien gegen vorhandene Module und Mitschriften-/Markierungs-/ZIP-Archive. Beim Notfallbuch nur benannte kleine Restbeschriftungen. Vorhandene Doppelungen konkret zuordnen statt eine zweite Rechtsdarstellung zu erfinden.

## Wiederaufnahme, Parallelität und Quellenbestand

Die eingerichtete Aufgabe ist eine stündliche Wiederaufnahme, keine unterbrechungsfreie KI-Arbeit und kein unmittelbarer Chat-Abbruch-Trigger. Actions führt gestartete technische Schritte aus, liest nicht selbständig neue Handschriften. Keine nicht tatsächlich gestartete Hintergrundfortsetzung behaupten.

Vor jedem Lauf main-/Arbeitsrefs, alle Checkpoints, relevante PRs/Commits/Actions und gültige Sperren lesen. Nach Abbruch/abgelaufener Sperre neu synchronisieren. Aktuelle Blob-SHAs und nicht erzwungene Refupdates verwenden, fremde Änderungen und Lernfortschritt erhalten. Quelle, genaue Seiten, Dateien, Commits, Tests/Fehler, tatsächlich bestätigten Deploy und nächste Seite sichern; eigene Sperre am Ende freigeben. Fehler anhand tatsächlicher Logs beheben, transiente Fehler begrenzt wiederholen, keine Checks abschwächen oder Fehlschläge verschleiern.

GitHub-/Drive-Zugriff tatsächlich prüfen statt alte technische Fehler pauschal fortzuschreiben. Nur autorisierte Zugänge verwenden; keine Käufe, Berechtigungsänderungen, Freigabeumgehungen oder Veröffentlichung privater Zugangsdaten. Bildseiten direkt lesen, keine unzuverlässige OCR als geprüfte Handschrift ausgeben. Kleine lokale Quellsnapshots fehlen öffentliche Assets und ersetzen keinen vollständigen Produktionscheckout.

`tools/endriss/quellen.tsv` und `docs/offene-quellen.md` sind Arbeitslisten, noch kein neu belegter lückenloser Abgleich beider Drive-Bäume. Historische Vollständigkeits- und Unlesbarkeitsbehauptungen kritisch abgleichen. Der Originalseiten-Publisher36616059906 ist abgeschlossen; keine neue mehrgigabytegroße Massenaufbereitung ohne konkreten Bedarf. Wiederherstellungsartefakte aus36589072803: core11043472165, notes11043506188, erbst11042489471, kst11043617979, marks11043770270; Ablauf prüfen, ggf. aus Drive-ID neu abrufen. Nicht die Existenz alter /mnt/data-Dateien voraussetzen.

Bilanz-FallsammlungTeil3 hat nach tatsächlich geprüftem Umfang dreiPDF-Seiten und endet nachSachverhalt2; keine zusätzlichen Fälle erfinden. Fehlende Original-Lösungen nicht aus Allgemeinwissen ergänzen.

## Bedeutung von 100 Prozent

Tatsächlichen relevanten Quellenumfang vollständig bestimmen, jede Inhaltsseite quellengetreu nativ übernehmen oder spezifisch gleichwertigem vorhandenem Inhalt nachweisbar zuordnen, UI-Erreichbarkeit, Tests, Merge und Veröffentlichung belegen. Bilder, Platzhalter, pauschale Seitenverweise und selbst gesetzte Abschlussfelder genügen nicht. Fehlende Lösungen und unlesbare Originalreste offen von Übernahmelücken unterscheiden.

Erst bei nachgewiesenem Gesamtabschluss dokument-/seitenbezogenes Abschlussprotokoll erstellen und die bestehende Automation deaktivieren. Bis dahin echte abgeschlossene Inhaltspakete statt wiederholter unveränderter Statusmeldungen liefern.
