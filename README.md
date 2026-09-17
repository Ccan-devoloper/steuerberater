# Examenscampus Bilanzen · Klausur 3

Lernplattform für die dritte Klausur des Steuerberaterexamens (Buchführung und Bilanzwesen).
React 18 + Vite, kein Framework-Overhead, kein Tailwind — ein einziges, durchgehendes CSS-Designsystem.

## Was drin ist

- **87 Lernobjekte**: 27 Einzelunternehmen, 9 Personengesellschaft, 7 Kapitalgesellschaft,
  6 Klausurtechnik, 38 durchgerechnete Originalfälle
- **Fallsammlung** mit 90 Fällen und Lösungen, alle einem Lernmodul zugeordnet
- **Hausaufgaben**: neun Fachtermine mit Aufgabenüberblick, Lösungsschwerpunkten, Normen und
  1:1 übernommenem Volltext (wird erst beim Aufklappen nachgeladen)
- **35 datengetriebene Schaubilder** (SVG, dunkelmodusfähig) — Flussdiagramme, Entscheidungsbäume, Zeitstrahlen, Säulen, HB/StB-Gegenüberstellungen, Stufenschemata
- **Normenregister** mit 420 Vorschriften, automatisch aus den Normenketten aller Module erzeugt
- **Formelsammlung** mit 19 Rechenwegen inkl. belegter Beispielrechnungen
- **Buchungssätze üben** (Reiter im Bilanz-Campus): elf Lektionen von „Was ist Soll und Haben?“
  bis Storno und Buchungskreise, Kontenplan mit T-Konten, 72 Beispiele mit Herleitung in
  Schritten und Grundfall, dazu ein Frage-Antwort-Trainer (Multiple Choice, Buchungssatz
  bauen, Soll oder Haben?, Kontenart, Gewinnauswirkung) mit Fehlerspeicher
- **Training**: 46 Quizfragen und 40 Karteikarten mit Themenfilter, Fehlerspeicher und
  Selbsteinschätzung, Zeitrechner (3,6 Minuten je Punkt)
- **Klausurmodus**: Fälle unter Zeitbedingungen — Punkte aus der veranschlagten Zeit,
  laufende Uhr, gesperrte Lösung, dreistufige Selbstbewertung und Auswertung mit Modullinks
- **Lernplan** über zwölf Wochen, Fortschritt via `localStorage`
- **Schritt für Schritt** (Reiter in den Campussen Personengesellschaften und UmwStR): zwei
  Lernpfade ohne Vorwissen – 18 Lektionen zur Bilanzierung von Personengesellschaften
  (Transparenzprinzip, Mitunternehmerschaft, zweistufige Gewinnermittlung, Kapitalkonten,
  Sonder- und Ergänzungsbilanzen, § 6 Abs. 5, § 6b, § 15a, § 16, Realteilung, § 24 UmwStG,
  Klausurfahrplan) und 16 Lektionen zum Umwandlungssteuerrecht (Grundidee und Landkarte,
  §§ 3–9, §§ 11–15, §§ 20–25, § 1a KStG, Klausurfahrplan). Jede Lektion mit Ziel, Normen,
  Beispiel in Zahlen, Klausurblock, Selbstcheck und Merksatz; Fortschritt via `localStorage`,
  Querverweise auf Module, Prüfschemata, Originalfälle und Hausaufgaben. Details:
  [`docs/k3-lernpfad.md`](docs/k3-lernpfad.md), Prüfung: `npm run check:k3-lernpfad`
- **Hausaufgaben PersG** (Reiter im Campus Personengesellschaften): die Hausaufgaben des
  Tageslehrgangs zu den Fachterminen 1 und 3 (XY OHG – Kurzklausur I, 30 Punkte; AB OHG –
  Gesellschafterwechsel und Ergänzungsbilanz, 20 Punkte) mit Sachverhalt, Aufgabenstellung
  und Lösungshinweisen im Wortlaut, Tabellen als Tabellen, Punkte am jeweiligen Absatz,
  Lösung erst auf Klick. Prüfung: `npm run check:k3-persg-hausaufgaben`
- **Hausaufgaben ErbSt** (Reiter im Campus Erbschaftsteuer): drei Hausaufgaben mit Lösung
  (Ertragswertverfahren und Kapitalforderungen, Sachwertverfahren mit Wohnrecht, Pflichtteil
  und Rentenvermächtnis, GmbH-Anteil im vereinfachten Ertragswertverfahren mit § 13a/§ 19a
  ErbStG) im Wortlaut, die Rechenwege der Musterlösung Zeile für Zeile als Tabelle.
  Prüfung: `npm run check:k1-erbst-hausaufgaben`
- **Hausaufgaben KSt** (Reiter im Campus Körperschaftsteuer): die Kurzklausuren des
  Tageslehrgangs mit Lösung – Fachtermin 1 (A-GmbH mit dreizehn Korrekturtatbeständen,
  optierende A/B-OHG nach § 1a KStG und Spendenabzug beim gemeinnützigen Verein, 74 Punkte)
  Fachtermin 3 (verdeckte Einlage, § 8b KStG, Einlagekonto und Gewerbeertrag, 48 Punkte),
  Fachtermin 4 (Gewinne und Verluste aus Anteilen und Forderungen gegen Tochtergesellschaften,
  45 Punkte), Fachtermin 5 (Einzelheiten zur vGA und Ausschüttungen in eine Personengesellschaft,
  91 Punkte) und Fachtermin 7 (Organschaft bei KSt und GewSt, 91 Punkte) – zusammen 349 Punkte.
  Prüfung: `npm run check:kst-hausaufgaben`
- **PersG-Skript (Melzer)** (Reiter im Campus Personengesellschaften): das Lehrgangsskript
  von Karsten Melzer, Rechtsanwalt und Steuerberater in Köln (April 2026, Rechtsstand 2025),
  im Wortlaut. Bisher erfasst sind **Teil I – Grundlagen** (7 Kapitel): Zuordnung in Handels-
  und Steuerbilanz mit den Nutzungsgrenzen von 10 % und 50 %, Gesamthandsvermögen und
  gesamthänderisch gebundenes Privatvermögen, Sonderbetriebsvermögen I mit dem Examensfall
  zum eingelegten Mietgrundstück (Einlage zum Teilwert, AfA-Bemessungsgrundlage nach
  § 7 Abs. 1 Satz 5 EStG, Sonderbilanz und Sonder-GuV), Sonderbetriebsvermögen II mit den
  Beteiligungsgrenzen von 10 % und 25 % an der Komplementär-GmbH, die Bilanzierungskonkurrenzen
  und das Verhältnis zur mitunternehmerischen Betriebsaufspaltung, die Ergänzungsbilanz und
  die additive zweistufige Gewinnermittlung – und **Teil II – § 6 Abs. 5 und § 6 Abs. 3 EStG**
  (7 Kapitel): Beteiligung und Spiegelbildmethode, Überführung und Übertragung einzelner
  Wirtschaftsgüter mit Trennungstheorie, Gesellschaftsrechten und Mischentgelt, die
  Übertragung zwischen Schwesterpersonengesellschaften einschließlich des BVerfG-Beschlusses
  vom 28.11.2023 und der neuen Nr. 4 aus dem JStG 2024, die Sperrfristen der Sätze 4 bis 7
  mit der Einmann-GmbH & Co. KG und der Körperschaftsteuerklausel, die Einbringung aus dem
  Privatvermögen mit der Abgrenzung von Tausch und verdeckter Einlage nach den
  Gesellschafterkonten, die Übertragungswege des § 6b EStG nach R 6b.2 Abs. 6 bis 8 EStR und
  die unentgeltliche Übertragung von Mitunternehmeranteilen nach § 6 Abs. 3 EStG samt
  Behaltefrist und mitunternehmerischer Betriebsaufspaltung. Beispiele, Bilanzen und
  Musterlösungen stehen vollständig; die Teile III bis V folgen.
  Prüfung: `npm run check:k3-persg-skript-melzer`
- **Fallsammlung PersG** (Reiter im Campus Personengesellschaften): dreizehn Fälle in fünf
  Blöcken (§ 6 Abs. 5 EStG, § 6 Abs. 3 EStG, Gesellschafterwechsel, § 24 UmwStG,
  Spiegelbildmethode) mit neun Abwandlungen im Wortlaut. Die Quelle druckt keine
  Musterlösungen ab; statt erfundener Lösungen führt jeder Fall über geprüfte Querverweise
  zu den Modulen, Prüfschemata, Originalfällen und Hausaufgaben, in denen derselbe Stoff
  durchgerechnet ist. Prüfung: `npm run check:k3-persg-fallsammlung`
- **Keyfacts AO** (Reiter im Campus Abgabenordnung, ersetzt den leeren Reiter „Fallsammlung"):
  die drei Übersichtsblätter des Lehrgangs zu Außenprüfung (§§ 193–202 AO), Vollstreckung
  (§§ 249 ff. AO inkl. Fähnchenkette) und Erhebungsverfahren (§§ 37, 218, 233a, 240, 152 AO)
  mit 95 Merksätzen im Wortlaut. Prüfung: `npm run check:k1-ao-keyfacts`
- **Campus Einkommensteuer** (K2, löst den Platzhalter-Campus ab): Cockpit mit dem
  nachprüfbaren Bestand (erfasst / noch nicht eingepflegt) und Examensprioritäten sowie der
  Reiter „Hausaufgaben ESt“ – Fachtermin 2 (Zorn/Frei und Merten: Zweitausbildung und
  20-Stunden-Grenze, degressive AfA § 7 Abs. 5a, Sonderabschreibung § 7b, verbilligte
  Überlassung § 21 Abs. 2, anschaffungsnahe Herstellungskosten) und Fachtermin 3
  (Lang, Engler und Ford: unechte Betriebsaufspaltung, Einlage zu Anschaffungskosten
  nach § 6 Abs. 1 Nr. 5 S. 1 Buchst. a/b, teilentgeltliche Überlassung mit § 3c Abs. 2
  S. 6 EStG, Betriebsaufgabe mit Teileinkünfteverfahren, gewerblicher Grundstückshandel
  über die Drei-Objekt-Grenze und § 7 Abs. 1 S. 5 EStG), Fachtermin 4 (Haardt,
  Müller/Hopf und Ludwig: Betriebsveräußerung im Ganzen mit Freibetrag § 16 Abs. 4,
  Rumpfwirtschaftsjahr und die Einnahmenüberschussrechnung mit Tausch, Kfz-Nutzung,
  Buchwertprivileg und § 12 Nr. 3 EStG), Fachtermin 6 (Holbein: privates
  Veräußerungsgeschäft nach Entnahme, Rentenbesteuerung, § 17 EStG mit
  Verlustbeschränkung, Forderungsverzicht und vGA), Fachtermin 7 (Hohl:
  vorweggenommene Erbfolge nach § 6 Abs. 3 EStG, Vorrang der Betriebsaufspaltung vor
  dem Verpächterwahlrecht, offene und verdeckte Ausschüttung im Betriebsvermögen) und
  Fachtermin 9 (Carter: § 15a EStG mit Einlageminderung und Abwandlung, Vermögensübergabe
  gegen Versorgungsleistungen, § 17 EStG beim Rechtsnachfolger) im Wortlaut.
  Alle sechs Hausaufgaben (6 Fachtermine, 92 Tabellen) liegen damit vollständig vor.
  Prüfung: `npm run check:est-hausaufgaben`
- **ESt-Fallsammlungen** (Reiter im ESt-Campus): die Fallrepetitorien des Lehrgangs, bei
  denen Aufgaben- und Lösungs-PDF wieder zu einem Fall zusammengeführt sind. Erfasst ist
  die Fallsammlung zu § 21 EStG (Blenkers, 04/2025) mit 28 Fällen – teilweise Vermietung
  mit Sachinbegriff, Erbbaurecht, erste Tätigkeitsstätte am Mietobjekt, Herstellungskosten
  über 27 Positionen, anschaffungsnahe Aufwendungen, verbilligte Vermietung, Sonder-AfA
  nach § 7b EStG, degressive Gebäude-AfA nach § 7 Abs. 5a EStG, AfaA nach Brandschaden,
  Damnum, Wohnmobilvermietung und drei große Vertiefungsfälle –,
  die Fallsammlung zu § 4 Abs. 3 EStG (Wiegmann, 05/2025) mit 32 Fällen – Zufluss und Abfluss,
  GWG und Sammelposten, Einlagen, Entnahmen und Tauschvorgänge –,
  die Fallsammlung zu § 16 EStG (Wiegmann, 05/2025) mit 20 Fällen – Freibetragsabschmelzung,
  Betriebsaufgabe, Verpächterwahlrecht, Veräußerung gegen Rente oder Raten, Teilbetrieb,
  Einbringungsgewinn I und die Aufnahme eines Gesellschafters –,
  die Fallsammlung zur Betriebsaufspaltung (Wiegmann/Vossel, 05/2025) mit 8 Aufgaben – von der
  Begründung über die Personengruppentheorie bis zur mitunternehmerischen Betriebsaufspaltung –,
  das Fallrepetitorium zum gewerblichen Grundstückshandel (Wiegmann, 05/2025) mit 10 Fällen
  samt Abwandlungen – Drei-Objekt-Grenze, Zurechnung beim Rechtsnachfolger, Beteiligungen an
  Grundstücksgesellschaften, Modernisierung als neuer Fristbeginn, Betriebsverpachtung und
  Errichtungsfall –, das Fallrepetitorium zu § 17 EStG (Wiegmann, 07/2025) mit 20 Fällen –
  Subsidiarität gegenüber § 20 EStG, mittelbare Beteiligungen und eigene Anteile, § 6 AStG und
  DBA-Fälle, entgeltlicher und unentgeltlicher Erwerb, verdeckte Einlage, Einbringungsgewinn I,
  Bürgschaft und Gesellschafterdarlehen, Liquidation, teilentgeltliche Übertragung, Raten- und
  Rentenveräußerung, Verlustausgleichsbeschränkung nach § 17 Abs. 2 S. 6 EStG, § 2a EStG bei
  Drittstaatengesellschaften und nachträgliche Anschaffungskosten –, das Skript zu den
  Übertragungen im Rahmen der vorweggenommenen Erbfolge (Blenkers, 07/2025) mit 18
  Abschnitten – Begriff und Abgrenzung nach dem BMF-Schreiben vom 13.01.1993,
  Gleichstellungsgeld und Abstandszahlung, Schuldübernahme, Aufspaltungsthese mit zwei
  AfA-Reihen, § 23 EStG bei Übergeber und Übernehmer, § 17 EStG, Betriebsvermögen mit
  Aufstockung und Eröffnungsbilanz, § 6b EStG, Mischfälle, fünf aktuelle Entscheidungen und
  der Fall mit vorbehaltenem Wohnrecht –, die Fallsammlung zu Erbfall, Erbengemeinschaft
  und Erbauseinandersetzung (Blenkers, 08/2025) mit 8 Beispielen – Realteilung mit
  Abfindung beim Mischnachlass, einfache und qualifizierte Nachfolgeklausel, Vermächtnis,
  durch den Erbfall begründete Betriebsaufspaltung, zwei AfA-Reihen nach Abfindung,
  § 6 Abs. 1 Nr. 1a EStG über den Rechtsvorgänger und ein Vertiefungsfall über vier
  Steuerpflichtige –, die Fallsammlung zu Vermögensübertragungen gegen Renten, Raten und
  dauernde Lasten (Blenkers, 11/2025) mit 15 Beispielen und der Vervielfältiger-Tabelle zu
  § 14 Abs. 1 BewG – Kaufpreisraten, betriebliche Veräußerungsrente mit Sofort- und
  Zuflussversteuerung, Versorgungsleistungen nach dem Rentenerlass, Kaufpreisrente ohne
  begünstigtes Vermögen, Renten- und Sachvermächtnis, Pflichtteil in Raten, Zugewinn-
  ausgleich, verlängerte Leibrente, dauernde Last, Vorbehaltsnießbrauch, begrenztes
  Realsplitting, betriebliche Versorgungsrente und Zeitrente –, die Fallsammlung zu
  § 23 EStG (Wiegmann, 05/2025) mit 23 Fällen und einer Vorbemerkung zum Lösungsaufbau –
  Subsidiarität gegenüber § 20 EStG, Fristberechnung nach dem obligatorischen Vertrag, selbst
  hergestellte Gebäude, Nutzung zu eigenen Wohnzwecken, gemischt genutztes Gebäude mit
  häuslichem Arbeitszimmer, vermögensverwaltende GbR, AfA-Nachversteuerung, Einlage und
  Entnahme als fiktive Veräußerung bzw. Anschaffung, verdeckte Einlage, Werbungskostenabzug
  im Zuflussjahr, FiFo bei Girosammelverwahrung und drei große Schlussfälle – sowie die
  Sammlung zu § 15a EStG (Wiegmann, 12/2025) mit 12 Beispielen
  samt Fortsetzungen und Abwandlungen – Kapitalkonto i. S. d. § 15a, erweiterte Außenhaftung,
  Einlage- und Haftungsminderung nach § 15a Abs. 3 EStG. Die Gegenüberstellung
  „ausgleichsfähig / verrechenbar“ steht als Tabelle. Neu hinzugekommen sind
  die Fallsammlung zu den Einkünften aus Gewerbebetrieb (Engelberth, 08/2026) mit 11 Fällen –
  abweichendes Wirtschaftsjahr und Rumpfwirtschaftsjahr, vermögensverwaltende OHG ohne
  gewerbliche Tätigkeit, gewerbliche Prägung und ihr Scheitern bei Kommanditisten-
  Geschäftsführung, vollständige Gewinnverteilungen mit Sonderbetriebseinnahmen und -ausgaben,
  Vorabgewinn statt Tätigkeitsvergütung, Abfärbung nach § 15 Abs. 3 Nr. 1 EStG mit Bagatellgrenze,
  Sonderbetriebsvermögen bei unentgeltlicher Überlassung, gemeinschaftliches Sonderbetriebs-
  vermögen von Eheleuten und die Abgrenzung zur mitunternehmerischen Betriebsaufspaltung –
  sowie die Fallsammlung zu den Einkünften aus Kapitalvermögen (Engelberth, Rechtslage
  31.12.2025, Stand 05/2026) mit 18 Fällen – Option zur unternehmerischen Beteiligung nach
  § 32d Abs. 2 Nr. 3 EStG mit Fünfjahresbindung, Werbungskostenabzug und Teilabzugsverbot,
  typisch stille Beteiligung unter nahestehenden Personen, Kapitallebensversicherungen vor und
  nach 2005, verdeckte Gewinnausschüttung beim Gesellschafterdarlehen, Zuflusszeitpunkt beim
  beherrschenden Gesellschafter, Verlustverrechnung auf Bankebene sowie Investmentsteuerrecht
  mit Teilfreistellung, Vorabpauschale und Basisertrag.
  Prüfung: `npm run check:est-fallsammlungen`
- **KSt-Kurz-Skript (Breier)** (Klausur 2, Reiter Körperschaftsteuer → „Kurz-Skript (Breier)“):
  das Lehrgangsskript von Ulrich Breier (Mai 2026, Rechtsstand 2026). Erfasst sind
  Teil 1 (Subjekte der Körperschaftsteuer mit dem Optionsmodell des § 1a KStG, unbeschränkte
  und beschränkte Steuerpflicht mit Typenvergleich und der Reihenfolge „erst § 49 EStG, dann
  DBA“, die drei Gründungsstadien und die Steuerbefreiungen mit den vier Sphären) und Teil 2
  (Bemessungsgrundlage, fehlende Privatsphäre mit Kostenmiete und Risikogeschäften,
  Einkunftsarten mit erweiterter Kürzung und kapitalistischer Betriebsaufspaltung, die
  zweistufige Einkommensermittlung, steuerfreie Erträge, die nicht abziehbaren Aufwendungen
  nach EStG, AO und § 10 KStG, der Umkehrschluss bei Erstattungen, der Spendenabzug und die
  Anrechnung ausländischer Steuern) sowie Teil 3 (verdeckte Einlagen: Abgrenzung zur
  verdeckten Gewinnausschüttung nach der Zuwendungsrichtung, Wertansatz beim Empfänger mit
  den Ausnahmen vom Teilwert, Forderungsverzicht mit Besserungsschein, Rangrücktritt und
  Pensionsverzicht, materielles und formelles Korrespondenzprinzip, die folgenlose
  Nutzungseinlage mit ihren drei Ausnahmen, Rückgewähr von Ausschüttungen sowie das
  steuerliche Einlagekonto mit ausschüttbarem Gewinn und Verwendungsfestschreibung) sowie der
  Anfang von Teil 4 (offene und verdeckte Gewinnausschüttungen, Zeitpunkt der Versteuerung der
  Dividende, Gewinnansprüche bei der Übertragung von Beteiligungen und Dividendenscheinen, die
  Kapitalgesellschaft als Anteilseigner mit § 8b Abs. 1, 4 und 5 KStG, Streubesitzdividenden
  samt der umstrittenen Auffassung der OFD Frankfurt, die Beteiligung über eine
  Mitunternehmerschaft, § 7 S. 4 GewStG bei Personengesellschaften sowie das materielle und
  formelle Korrespondenzprinzip mit § 32a KStG) – zusammen 27 Abschnitte, 881 Absätze,
  33 Tabellen.
  **Noch unvollständig:** Der Drive-Connector gibt das PDF nur bis etwa Seite 90 von 196 aus.
  Übernommen ist alles, was er ausgibt; der Rest von Teil 4 und die Teile 5 bis 10 sind
  darüber nicht erreichbar und stehen in `docs/offene-quellen.md`.
  Prüfung: `npm run check:kst-kurzskript`
- **KSt-Übungsfälle (Nöthen)** (Klausur 2, Reiter Körperschaftsteuer → „Übungsfälle (Nöthen)“):
  die Übungsfälle des Lehrgangs, Teil 1 (Stand 07/2025) mit drei Fällen – Abschlusszahlung zur
  Körperschaftsteuer mit den nichtabziehbaren Aufwendungen des § 10 KStG, zu versteuerndes
  Einkommen mit § 37b EStG, zinslosem Gesellschafterdarlehen und typisch stiller Beteiligung
  sowie die Vereinsbesteuerung über alle vier Sphären – und Teil 2 (Stand 12/2025) mit zwei
  Organschaftsfällen samt Handels- und Steuerbilanzen, Ausgleichszahlung nach § 16 KStG,
  Streubesitzdividende und Minderabführung. **Ohne Musterlösung:** Im freigegebenen Ordner
  liegt nur der Aufgabenteil; es wurde bewusst nichts ergänzt.
  Prüfung: `npm run check:kst-uebungsfaelle`
- **KSt-Schemata (Nöthen)** (Klausur 2, Reiter Körperschaftsteuer → „Schemata (Nöthen)“): die
  fünf Prüfungsaufbauten des Lehrgangs im Wortlaut – verdeckte Einlage und verdeckte
  Gewinnausschüttung (jeweils getrennt nach Gesellschafter mit Anteilen im Privat- oder
  Betriebsvermögen und nach Gesellschaft, mit erster und zweiter Stufe), § 8c/§ 8d KStG mit
  Konzern-, Stille-Reserven- und Sanierungsklausel, die ertragsteuerliche Organschaft mit ihren
  fünf Klausurproblemen und den gewerbesteuerlichen Folgen sowie die Vereinsbesteuerung.
  Prüfung: `npm run check:kst-schemata-noethen`
- **ESt-Übungsklausuren** (Klausur 2, Reiter Einkommensteuer → „Übungsklausuren“): die
  Übungsklausuren im Prüfungsformat, Aufgaben- und Lösungs-PDF wieder zusammengeführt.
  Erfasst sind die Übungsklausur Einkommensteuer 1 (Wiegmann/Grolle, Rechtsstand 2025,
  6 Stunden Bearbeitungszeit) mit allen drei Aufgabenteilen: Eheleute Potter (zu versteuerndes
  Einkommen über fünf Einkunftsarten – Rabattfreibetrag, Auslandsdienstreise mit Bußgeld,
  geerbtes Mietwohngrundstück mit § 11d EStDV und verbilligter Überlassung, stille Beteiligung,
  verdeckte Gewinnausschüttung, Ausbildungsfreibetrag), H.G. Butte (Begründung einer
  Betriebsaufspaltung im laufenden Jahr mit Einlage zum Teilwert, Stückzinsen als negative
  Einnahmen, § 15a EStG beim vermögensverwaltenden Immobilienfonds) und Hella Wahnsinn
  (gemischt veranlasstes Arbeitsverhältnis mit § 35a EStG, Spendenauflage nach § 153a StPO,
  Unterhalt für mehrere Personen). Dazu die Übungsklausur **Ertragsteuern 0**
  (Wiegmann/Leuers, Rechtsstand 2025, 6 Stunden) mit drei Aufgabenteilen: Eheleute Hase
  (Betriebsaufspaltung durch Verpachtung des zurückbehaltenen Fabrikgrundstücks, überhöhter
  Pachtzins als verdeckte Gewinnausschüttung, Wechsel von der degressiven zur linearen
  Gebäude-AfA, Betriebsveräußerung im Ganzen mit § 15a UStG-Rückforderung als
  Veräußerungskosten), Conrad Mertens (Betriebsveräußerung gegen Barpreis und Leibrente –
  Sofortversteuerung und nachträgliche Versteuerung beide vollständig durchgerechnet) und die
  Capsulé GmbH (eine vollständige Körperschaftsteuerklausur über neun Textziffern: Rückrechnung
  des Jahresüberschusses aus dem Bilanzgewinn, strenger formeller Fremdvergleich, Erdienbarkeit
  einer Pensionszusage, überhöhte Kaufpreise an nahestehende Personen, § 8b Abs. 4 KStG bei
  abweichendem Wirtschaftsjahr, vGA und verdeckte Einlage im Dreieck zwischen
  Schwestergesellschaften, § 8b Abs. 3 S. 4 KStG beim Gesellschafterdarlehen sowie das
  materielle Korrespondenzprinzip – mit Steuerrückstellungen und steuerlichem Einlagekonto).
  Dazu die Übungsklausur **Ertragsteuern 2** (Wiegmann/Breier, Rechtsstand 2025, 6 Stunden) mit
  zwei Aufgabenteilen: Eheleute Steuer (vorweggenommene Erbfolge gegen Versorgungsleistungen mit
  Buchwertfortführung nach § 6 Abs. 3 EStG, zwei Betriebsveräußerungen im Ganzen, gewerblicher
  Grundstückshandel, verbilligte Wohnungsüberlassung an den Sohn, teilentgeltlicher Anteilserwerb
  mit der Aufteilung zwischen § 17 EStG und § 20 Abs. 2 EStG, Novation bei der stillen
  Beteiligung, Grundstücksgemeinschaft mit Nutzung über den Miteigentumsanteil hinaus und
  anschaffungsnahen Herstellungskosten) und die X-GmbH (Pensionszusage bei Weiterbeschäftigung
  nach Eintritt des Versorgungsfalls und Verzicht auf den Pensionsanspruch, verbilligter
  Maschinenkauf von der Schwestergesellschaft als vGA-Einlage-Dreieck, Zinsverzicht des
  Gesellschafters mit materiellem Korrespondenzprinzip, Ausschüttung aus dem steuerlichen
  Einlagekonto, verbilligte Anteilsveräußerung an den Gesellschafter, atypisch stille Beteiligung
  mit § 15a und § 15 Abs. 4 S. 6 EStG, Streubesitzdividende sowie die rückwirkende Verschmelzung
  einer Tochtergesellschaft – mit Einlagekonto und gesonderten Feststellungen).
  Die Randpunkte der Musterlösung stehen an ihrem Absatz, wo das PDF sie eindeutig zuordnet,
  sonst als gesammelter Hinweis.
  Prüfung: `npm run check:est-klausuren`
- **KSt-Übungsklausur (Breier)** (Klausur 2, Reiter Körperschaftsteuer → „Übungsklausur
  (Breier)“): die Übungsklausur im Fachgebiet Körperschaftsteuer (Breier/Wenger,
  Rechtsstand 2025, 6 Stunden, 100 Punkte) mit ihren vier Sachverhalten – A-GmbH über
  dreizehn Textziffern (nicht abziehbare Steuern und Nebenleistungen, schädlicher Vorbehalt in
  der Pensionszusage, verdeckte Einlage der Muttergesellschaft mit materiellem
  Korrespondenzprinzip, ausländische Quellensteuer und Betriebsstätte ohne DBA, § 1 AStG beim
  zinsverbilligten Auslandsdarlehen, Bewirtungskosten ohne Nachweis, Einlage eines PKW aus dem
  Privatvermögen, § 160 AO, Zins- und Forderungsverzicht des Gesellschafters, Erstattungszinsen,
  Spendenabzug nach § 9 KStG, dazu die Anrechnung ausländischer Steuern und das Einlagekonto),
  Theaterverein (die vier Sphären eines gemeinnützigen Vereins mit Zweckbetrieb nach § 68 Nr. 7
  AO, Besteuerungsgrenze und § 44a Abs. 4 EStG), Teilwertabschreibung auf ein
  Gesellschafterdarlehen (§ 8b Abs. 3 S. 4 und 7 KStG) und K-GmbH (Spiegelbildmethode,
  einfacher Rangrücktritt nach § 5 Abs. 2a EStG und Forderungsverzicht mit Besserungsschein).
  Sie liegt im gemeinsamen Klausurbestand und wird im KSt-Campus gezeigt; der ESt-Campus zeigt
  die einkommensteuerlichen Klausuren.
  Prüfung: `npm run check:est-klausuren`
- **USt-Übungsklausur (Schröders)** (Klausur 1, Reiter Umsatzsteuer → „Übungsklausur (USt)“):
  die Teilklausur Umsatzsteuer der Übungsklausur AO/USt (Jacobs/Schröders, Korrektor Schulz,
  Rechtslage 2026, 3 Stunden, 50 Punkte) mit drei Sachverhalten – Marco Murrer (steuerfreie
  Bauträgerumsätze mit Vorsteuerausschluss, Werklieferung mit Materialbeistellung und
  Vermittlungsleistung ins EU-Ausland, Lohnveredelung an Gegenständen der Ausfuhr, Option bei
  der Untervermietung mit Bagatellgrenze und Vorsteueraufteilung, Reihengeschäft mit Ausfuhr
  und § 14c UStG sowie ein tauschähnlicher Umsatz mit Baraufgabe, § 13b UStG, § 15 Abs. 1b
  UStG und die kurzfristige Beherbergung), Franz Ferstl GmbH (Reihengeschäft
  Innsbruck–Amsterdam, kein Dreiecksgeschäft, innergemeinschaftlicher Erwerb mit doppeltem
  Erwerbsort nach § 3d Satz 2 UStG ohne Vorsteuerabzug) und Virus-GmbH (Einfuhr in Rotterdam
  und innergemeinschaftliches Verbringen nach § 1a Abs. 2 UStG). Der AO-Teil derselben Klausur
  ist als eigener Eintrag erfasst (siehe nächster Punkt).
  Prüfung: `npm run check:est-klausuren`
- **AO-Übungsklausur (Jacobs)** (Klausur 1, Reiter Abgabenordnung → „Übungsklausur (AO)“):
  die Teilklausur Abgabenordnung derselben Klausur AO/USt (Jacobs, Korrektor Schulz,
  Rechtsstand 2025, 3 Stunden, 50 Punkte) mit vier Sachverhalten – Ramona Rehauge (der
  Ablehnungsbescheid als einem Steuerbescheid gleichgestellter Verwaltungsakt, Jahresfrist des
  § 356 Abs. 2 AO bei fehlender Rechtsbehelfsbelehrung, Berichtigung eines Übernahmefehlers
  nach § 129 AO bzw. § 173a AO mit den Ablaufhemmungen des § 171 Abs. 2 und Abs. 3 AO),
  Rita Rund (Abgrenzung § 129 AO / § 173 Abs. 1 Nr. 2 AO / § 173a AO und Saldierung eines
  bereits verjährten gegenläufigen Rechtsfehlers nach § 177 Abs. 2 AO), Dr. Karin Ebben
  (Ablaufhemmung durch Außenprüfung, Fortbestand des Vorbehalts der Nachprüfung nach
  § 164 Abs. 4 AO und die Grenze der Ablaufhemmung durch den Umfang der Prüfungsanordnung)
  und Peter Petersen (verspäteter Einspruch, Fünfjahresgrenze des § 171 Abs. 4 S. 3 AO,
  gescheiterte schlichte Änderung, Berichtigung des vom Prüfer übernommenen Zahlendrehers
  nach § 129 AO und Saldierung nach § 177 Abs. 2 AO). Im selben Reiter steht die eigenständige
  **Übungsklausur Abgabenordnung/FGO** (Jacobs, Korrektor Otterbein, Rechtsstand 2025,
  6 Stunden, 100 Punkte) mit vier Sachverhalten: Friedrich Tisch (Zulässigkeit eines nicht
  unterschriebenen Einspruchs mit Bekanntgabefiktion über ein Wochenende, Gesamtüberprüfung
  mit Verböserung bei den Spenden – und in der Abwandlung dieselben vier materiellen Fehler
  getrennt nach § 129 AO, § 173 Abs. 1 Nr. 1 und Nr. 2 AO, § 173a AO und § 177 AO mit
  Berichtigungsrahmen und Rechtsfehlersaldo), Hanna Hansen (Feststellungsfrist mit
  verlängerter Frist wegen leichtfertiger Steuerverkürzung, Einspruch per ELSTER mit
  Bekanntgabe über den Jahreswechsel und einen Samstag, sachliche Anfechtungsbeschränkung des
  § 351 Abs. 1 AO mit beiden Halbsätzen), A (Teilverjährung zu zwei Zeitpunkten,
  Ablaufhemmungen nach § 171 Abs. 9 und Abs. 10 AO, falsch bezeichnete Korrekturvorschrift)
  und Willi Wutz (Kaufpreisminderung durch gerichtlichen Vergleich als rückwirkendes Ereignis
  mit dem eigenen Fristbeginn des § 175 Abs. 1 S. 2 AO).
  Prüfung: `npm run check:est-klausuren`
- **Übungsklausuren Bilanzierung** (Klausur 3, Reiter Allgemein → „Übungsklausuren“):
  **Bilanzierung 1** (Norbert Rott, Korrektoren S. Rehbann und L. Rehbann, Rechtslage 2025, 6 Stunden, 100 Punkte) in acht Aufgabenteilen.
  Teil I – Einzelunternehmer Karl-Heinz Arnold, Druckerei Paderborn, Steuerbilanz zum
  31.12.2025 (79 Punkte): Grundstück „Berliner Ring 15“ (Vermietung an sich selbst als
  Entnahme bei umsatzsteuerlichem Leistungsaustausch nach Option der Ehegattengemeinschaft,
  Einlage des hälftigen Grund und Bodens zum Teilwert, Einlage des Gebäudes höchstens mit den
  fortgeführten Herstellungskosten nach § 6 Abs. 1 Nr. 5 Satz 1 Buchst. a EStG, Einlage von
  Darlehen und Zinsverbindlichkeit, Grundstückskosten), Grundstück „Detmolder Str. 10“
  (Erwerb gegen Einmalzahlung und Leibrente nach der Rentenbarwertmethode, Produktionshalle
  mit AfA nach der tatsächlichen Nutzungsdauer und noch nicht verrechenbarer Vorsteuer,
  Finanzierungsleasing einer Druckmaschine mit Kaufoption samt Zinsstaffelmethode und
  aktivem Rechnungsabgrenzungsposten aus der Sondervorauszahlung), gebrauchte Druckmaschine
  (Pachterneuerungsrückstellung nach dem BMF-Schreiben vom 21.02.2002 mit Ansammlung und
  Abzinsung), Golf Variant (Einlage zum Teilwert mit der AfA-Bemessungsgrundlage des
  § 7 Abs. 1 Satz 5 EStG und Vorsteuerberichtigung nach § 15a UStG), Vorräte
  (Durchschnittsbewertung und Lifo beim Druckerpapier mit nur teilweise dauernder
  Wertminderung; Wertaufholung und unerwarteter Jahresbonus bei der Druckerschwärze) und
  uneinbringliche Forderung mit Berichtigung nach § 17 UStG. Teil II (21 Punkte): B-GmbH
  (außerplanmäßige Abschreibung auf das unbebaute Grundstück, wertbegründende Baugenehmigung
  und Wertaufholung, Damnum als Aufwand in der Handelsbilanz gegenüber dem aktiven RAP in der
  Steuerbilanz, aktive latente Steuern) und C-GmbH (Gewinnrealisation erst mit der Abnahme,
  unfertige Leistungen über eine Zuschlagskalkulation, Verwaltungskosten-Wahlrecht nach
  § 255 Abs. 2 Satz 3 HGB und § 6 Abs. 1 Nr. 1b EStG). Die Randpunkte der Musterlösung stehen
  im PDF ausschließlich blockweise am Seitenende; statt sie zu raten steht am Ende jeder
  Textziffer die vollständige Wertefolge mit der von der Quelle selbst ausgewiesenen Summe.

  Daneben steht **Bilanzierung 2** (Markus Nöthen, Korrektor Michael Leuers, Rechtsstand
  2025, 6 Stunden, 100 Punkte) in zehn Aufgabenteilen. 1. Teil – Einzelunternehmen Sebastian
  Reinsteiger (63 Punkte): Beteiligungen X-AG und D-GmbH (Einlage einer wertgeminderten
  Beteiligung stets mit den Anschaffungskosten, Teilwertabschreibung und Teileinkünfte-
  verfahren, Dividende mit Kapitalertragsteuer, Verkauf mit § 6b Abs. 10 EStG und einer
  verdeckten Gewinnausschüttung aus dem überhöhten Kaufpreis), Fremdwährungsforderung nach
  Luzern mit § 256a HGB, neue Verkaufsräume (Einlage des Grund und Bodens, Abbruchkosten und
  eingelegtes Altgebäude als Herstellungskosten nach H 6.4 EStH, Übertragung stiller Reserven
  auf das neue Gebäude, Schaufensteranlage und Parkplatz als selbständige Wirtschaftsgüter,
  Nutzungseinlage für Besichtigungsfahrten) sowie der Elektro-PKW (Tausch mit Baraufgabe,
  Investitionszuschuss mit Wahlrecht nach R 6.5 EStR, 1 %-Methode mit halbiertem
  Bruttolistenpreis, unentgeltliche Wertabgabe und § 4 Abs. 5 S. 1 Nr. 6 S. 3 EStG).
  2. Teil – Bayar-GmbH (37 Punkte): Domain mit Schuldübernahme, Aktien mit der
  „Abschreibungsfalle“ des § 8b Abs. 3 S. 3 KStG und permanenter Differenz, Bankbestand in
  Schweizer Franken mit unrealisiertem Kursgewinn und passiver Latenz, Erwerb eines
  Einzelunternehmens mit Firmenwert über 10 bzw. 15 Jahre und aktiver Latenz, Verkauf eines
  Grundstücks gegen unverzinsliche Ratenforderung mit § 6b-Rücklage sowie das
  Gesellschafter-Verrechnungskonto mit verdeckter Gewinnausschüttung. In dieser Klausur steht
  jeder Randpunkt unmittelbar vor seinem Absatz; die Werte sind deshalb an den Blöcken
  übernommen und gehen je Einzelsachverhalt und in der Summe auf 100 Punkte auf.

  Ebenfalls dort steht **Bilanzierung 3** (Karsten Melzer, Korrektor Nicky Neumayer,
  Rechtsstand 2025, 6 Stunden) in zehn Aufgabenteilen. Teil I – Werkzeugbau des Adonis
  Animalis (80 Punkte): Metallschneidemaschine (Zerstörung durch Sturm, Versicherungs-
  forderung, Übertragung stiller Reserven nach R 6.6 EStR mit Mehrentschädigung, degressive
  AfA und Sonderabschreibung, dazu die Instandhaltungsrückstellung für das Hallendach),
  Eisenstangen (Durchschnittsbewertung, Lifo und Fifo mit Fifo in der Handels- und Lifo in
  der Steuerbilanz), Investitionszuschuss (Wahlrecht nach R 6.5 EStR, Erinnerungswert von
  einem Euro, passiver Rechnungsabgrenzungsposten für den übersteigenden Ertragszuschuss,
  Auflösung einer zu Unrecht gebildeten Rückstellung), erhaltene Anzahlung, selbst
  hergestellte Metalltackermaschine (Verwaltungskosten und Bauzeitzinsen, degressive AfA und
  Sonderabschreibung), Drehstuhl und Desktop Computer (Hinzurechnung und Herabsetzung des
  Investitionsabzugsbetrags, GWG-Sofortabschreibung, einjährige Nutzungsdauer von
  Computerhardware), Aufbewahrungsrückstellung für den Archivraum (Vervielfältiger 4,5,
  20-%-Abschlag, Deckelung nach R 6.11 Abs. 3 EStR) und eine Yen-Forderung. Teil II –
  A-B-GmbH & Co. KG und X-OHG: verseuchtes Lagergrundstück mit außerplanmäßiger Abschreibung
  bei der OHG, aber ohne Abschreibung auf die Beteiligung in der Handelsbilanz der KG und mit
  der Spiegelbildmethode in deren Steuerbilanz, sowie der Verkauf von Gratisaktien nach
  Kapitalerhöhung aus Gesellschaftsmitteln mit Buchwertabspaltung, § 6b-Rücklage und
  Ergänzungsbilanz der Komplementär-GmbH. Diese Musterlösung weist keine Randspalte aus; die
  einzige Punktangabe innerhalb der Lösung ist „2. Eisenstangen (9 Punkte)“, und für Teil II
  fehlt eine Punktzahl ganz – beides ist im Datensatz als solches vermerkt statt ergänzt.

  Als vierte steht **Bilanzierung 4** (Norbert Rott, Korrektoren C. Cieplik, C. Koch und
  G. Ilci, Rechtsstand 2025, 6 Stunden, 100 Punkte) in neun Aufgabenteilen. Teil I –
  X-GmbH & Co. KG als doppelstöckige Personengesellschaft (40 Punkte): Geschäftsführungs-
  vergütung der Komplementär-GmbH als Sondervergütung mit Umsatzsteuer und Sonderbilanz,
  Grundstück des mittelbar beteiligten A als Sonderbetriebsvermögen I mit Darlehen und
  Zinsabgrenzung, Bürogebäude auf fremdem Grund und Boden als wirtschaftliches Eigentum der
  KG mit abweichender AfA in Handels- und Steuerbilanz, Überführung des Grundstücks der A+B
  OHG ins Sonderbetriebsvermögen und verdeckte Einlage des C mit zwingender Buchwert-
  fortführung nach § 6 Abs. 5 Satz 3 Nr. 2 EStG samt negativer Ergänzungsbilanz; abschließend
  die Überleitung vom handelsrechtlichen Jahresüberschuss (113.000 €) zum steuerlichen
  Gesamtgewinn der Mitunternehmerschaft (365.800 €) mit Entwicklung der Gesellschafterkonten.
  Teil II – Gründung der R+S OHG (30 Punkte): Einbringung eines Einzelunternehmens nach
  § 24 UmwStG mit sonstiger Gegenleistung, Einlage eines Privatgrundstücks als tauschähnlicher
  Vorgang, Firmenwert von 375.000 €, Eröffnungsbilanzen mit negativer Ergänzungsbilanz und die
  Fortentwicklung von Firmenwert, Gebäude und Maschinen über Gesamthands- und
  Ergänzungsbilanz. Teil III – Gesellschafterwechsel bei der ABC OHG (30 Punkte):
  Veräußerungsgewinn des C von 352.400 € einschließlich Auflösung und Verzinsung der
  § 6b-Rücklage, positive Ergänzungsbilanz des Eintretenden D mit Firmenwert von 270.000 € und
  dessen eigene AfA, Veräußerung des Grund und Bodens 2 mit § 6b-Rücklagen für A und B. Die
  Randpunkte stehen blockweise am Seitenende, wobei der letzte Wert jedes Blocks die laufende
  Zwischensumme ist; statt sie zu raten steht die vollständige Wertefolge mit allen
  Zwischensummen am Ende der Aufgabenteile, und sie geht auf 40,0 + 30,0 + 30,0 Punkte auf.
  Prüfung: `npm run check:est-klausuren`
- **Übungsklausur AO/USt/ErbSt/BewR 1** (Klausur 1, verteilt auf die drei Fachreiter):
  Die im Drive als „BewR 1“ abgelegte Datei enthält die gesamte Klausur (Hans-Jürgen Jacobs
  und Tim Schröders, Korrektoren G. Ilci, S. Schiffbauer und R. Grolle, Rechtsstand 2025,
  6 Stunden, 100 Punkte) in acht Aufgabenteilen; jeder Teil trägt ein Feld `fach`, damit die
  Campusse ihn zeigen können. **AO-Teil** (30 Punkte, Reiter Abgabenordnung →
  „Übungsklausur (AO)“): Britta Blau (Bekanntgabe an den Bevollmächtigten trotz
  Empfangsvollmacht, Heilung durch Weiterleitung, Anfechtungsbeschränkung des § 351 Abs. 1 AO
  mit Berichtigungsober- und -untergrenze und Rechtsfehlersaldo, 15 Punkte), Doris Draht
  (Rücknahme eines durch arglistige Täuschung erschlichenen Erlasses nach § 130 Abs. 2 AO und
  die Jahresfrist des § 130 Abs. 3 AO, 12 Punkte) und Fritz Friedlich (Säumniszuschläge nach
  verspäteter Bekanntgabe, 3 Punkte). **USt-Teil** (35 Punkte, Reiter Umsatzsteuer →
  „Übungsklausur (USt)“): der Tischler Hans Glück mit Maschinenerwerb aus Warschau für
  Stammhaus und belgische Filiale samt doppeltem Erwerbsort nach § 3d Satz 2 UStG,
  Möbelrestauration für die Stadt Zürich als Lohnveredelung an Gegenständen der Ausfuhr mit
  Versicherungszahlung als Entgelt von dritter Seite, Messeverkauf in Lüttich mit fiktiver
  innergemeinschaftlicher Lieferung durch Verbringen und Designer-Lampen aus Südafrika über
  Belgien in drei verschiedenen Bezugswegen. **ErbSt/BewR-Teil** (35 Punkte, Reiter
  Erbschaftsteuer → „Übungsklausur (Jacobs)“): der Erwerb von Todes wegen des Lukas Ball mit
  Ertragswertverfahren für ein gemischt genutztes Grundstück (Bodenrichtwertanpassung wegen
  abweichender GFZ, Bewirtschaftungskosten nach Anlage 23, Restnutzungsdauer ohne
  Modernisierungsverlängerung), Nachweis des niedrigeren gemeinen Werts nach § 198 BewG, den
  Verschonungen der §§ 13 Abs. 1 Nr. 4c und 13d ErbStG mit der Abzugsbeschränkung des
  § 10 Abs. 6a ErbStG, dem Kapitalwert einer Doppelleibrente nach § 14 BewG und
  Gegenwartswerten unverzinslicher Schulden – bis zur festzusetzenden Erbschaftsteuer von
  256.139 €. Im AO- und im USt-Teil stehen die Randpunkte blockweise am Seitenende; dort
  sind die ausgewiesenen Summen je Sachverhalt bzw. Abschnitt als Text vermerkt. Im
  ErbSt-Teil steht jeder Wert unmittelbar hinter seinem Absatz und ist am Block übernommen.
  Prüfung: `npm run check:est-klausuren`
- **Übungsklausur AO/USt/ErbSt/BewR 2** (Klausur 1, verteilt auf die drei Fachreiter):
  Auch die im Drive als „BewR 2“ abgelegte Datei enthält die gesamte Klausur (Hans-Jürgen
  Jacobs und Tim Schröders, Korrektoren S. Dudt und V. Wenger, Rechtsstand 2025, 6 Stunden,
  100 Punkte) in sieben Aufgabenteilen; jeder Teil trägt ein Feld `fach`, damit die Campusse
  ihn zeigen können. **Teil AO/FGO** (35 Punkte, Reiter Abgabenordnung →
  „Übungsklausuren (AO)“): die Sorgenfrei-Versicherungs-KG in Kleve mit vier Aufgaben – die
  vollendete Steuerhinterziehung der Komplementärin Eva Klamm durch zu niedrige Feststellung
  (Taterfolg am 26.08.03, Umfang 42.000 € nach Abzug der tatzugehörigen Sonderbetriebsausgaben,
  keine Selbstanzeige), die Berichtigungspflicht des gutgläubigen Franz Klamm nach
  § 153 Abs. 1 Satz 1 Nr. 1 AO, die Einzelbekanntgabe nach § 183 Abs. 2 AO wegen des
  Widerspruchs vom 03.11.07 (Wirksamkeit gegenüber EK erst am 06.03.09) mit der auf zehn
  Jahre verlängerten Feststellungsfrist sowie die Begründetheit des Einspruchs mit dem Wegfall
  des Vorbehalts der Nachprüfung zum 05.11.08, § 173 Abs. 1 Nr. 1 und Nr. 2 Satz 2 AO,
  alternativ § 172 Abs. 1 Satz 1 Nr. 2c AO, und der Folgeänderung nach § 175 Abs. 1 Satz 1
  Nr. 1 AO innerhalb der Frist des § 171 Abs. 10 AO bis zum 06.06.11. **Teil Umsatzsteuer**
  (40 Punkte, Reiter Umsatzsteuer → „Übungsklausur (USt)“): der Campingartikelhändler Ferdy
  Frosch in vier Sachverhalten – Umbau eines Altgebäudes in Essen-Kupferdreh mit ermäßigt
  besteuerter Beherbergung, Optionsverbot nach § 9 Abs. 2 UStG trotz Baujahr 1920 (kein
  Altgebäude, weil ein anderes Wirtschaftsgut entstanden ist), § 14c Abs. 1 UStG über 760 €
  und Vorsteueraufteilung von 114.000 € auf 76.000 € ohne § 15a UStG (11 Punkte); zwanzig
  Reihengeschäfte Hamburg – Frosch – Belgien mit der Zuordnung der bewegten Lieferung zum
  Zwischenhändler nach § 3 Abs. 6a Sätze 4 und 5 UStG, nicht steuerbarem Fernverkauf nach
  § 3c UStG und der unionsrechtskonformen Auslegung des § 14c UStG nach Abschn. 14c.1 Abs. 1a
  UStAE (13 Punkte); Zelt- und Wohnwagenüberlassung an die eigene GmbH ohne Organschaft, mit
  Entfallen der Mindestbemessungsgrundlage nach Abschn. 10.7 Abs. 6 UStAE und ohne
  unentgeltliche Wertabgabe mangels Vorsteuerabzug (8 Punkte); und die Verkaufsausstellung in
  Köln mit Bewirtungsleistung, Steuersätzen für Speisen und Getränke, dem Besteuerungsverbot
  des § 3 Abs. 1b Satz 2 UStG für die Kühlbox und der nicht steuerbaren Zuwendung des
  Hotelaufenthalts (8 Punkte). **Teil ErbSt/Bewertung** (25 Punkte, 1,5 Stunden, Reiter
  Erbschaftsteuer → „Übungsklausuren (Jacobs)“): der Erwerb der Alleinerbin Eva Müller mit
  § 13d ErbStG und der Kürzung von Hypothek und Nießbrauch nach § 10 Abs. 6a Satz 1 ErbStG,
  dem Kapitalwert des lebenslänglichen Nießbrauchs (321.720 €), dem Gegenwartswert der
  zweistufigen Ratenkaufpreisschuld (33.617 €), dem Gegenwartswert des mit 2 % verzinsten
  Darlehens (560.946 €) und der Aufteilung der Einkommensteuernachzahlung 2025 – bis zur
  festzusetzenden Erbschaftsteuer von 55.200 € (18 Punkte) – sowie die Übertragung von 20 %
  der Torwartschule-GmbH auf Norbert Neuer mit Verschonungsabschlag, Abzugsbetrag,
  anteiligem Schuldenabzug nach den Grundsätzen der gemischten Schenkung und Hinzurechnung
  der übernommenen Schenkungsteuer – festzusetzende Schenkungsteuer 17.732 € (7 Punkte).
  Die Randpunkte stehen in dieser Klausur durchgehend blockweise am Seitenende und lassen
  sich in der Extraktion nicht sicher von den Seitenzahlen trennen; deshalb trägt kein Block
  Randpunkte, die ausgewiesenen Summen stehen je Aufgabenteil als Text.
  Prüfung: `npm run check:est-klausuren`
- **ESt-Kurzskript I** (Klausur 2, Reiter Einkommensteuer → „Kurzskript I“): das Lehrgangsskript
  von Martin Engelberth (Stand 07/2026), Seiten 1 bis 79 – drei Teile mit 23 Kapiteln,
  1.017 Abschnitten und 30 Tabellen: die Einführung in die Einkommensteuer (persönliche
  Steuerpflicht, Veranlagungsformen, Ermittlungsschema des zu versteuernden Einkommens, Tarif,
  Kinder, Einkünftebegriff, Sonderausgaben, außergewöhnliche Belastungen, Steuerermäßigungen),
  die Einkünfte aus Vermietung und Verpachtung (Tatbestände, Subsidiarität, § 11 EStG mit der
  10-Tages-Regelung, Werbungskosten, Abschreibungen einschließlich § 7 Abs. 5a und § 7b EStG,
  Einkünfteerzielungsabsicht, Erbbaurecht und Nießbrauch) sowie der Beginn der Einkünfte aus
  Gewerbebetrieb (Begriff, Gewinnermittlung, Mitunternehmerschaft bis Tz. 3.5).
  **Noch unvollständig:** Ab Seite 80 gibt der Drive-Connector das PDF nicht mehr aus, und die
  6,6 MB große Datei lässt sich über den Connector nicht herunterladen. Es fehlen daher
  Tz. 3.6 und Kapitel 4 der gewerblichen Einkünfte sowie die Teile Betriebsaufspaltung,
  Gewerblicher Grundstückshandel, Betriebsbeendigung, Einnahmenüberschussrechnung, selbständige
  Arbeit und Kapitalvermögen. Das Cockpit weist das aus.
  Prüfung: `npm run check:est-kurzskript-1`
- **ESt-Kurzskript II** (Klausur 2, Reiter Einkommensteuer → „Kurzskript II“): das Lehrgangsskript
  von Martin Engelberth (Rechtslage 31.12.2025, Stand 05/2026) vollständig – acht Teile mit
  43 Kapiteln, 1.415 Abschnitten und 100 Tabellen: § 17 EStG, private Veräußerungsgeschäfte,
  sonstige Einkünfte, vorweggenommene Erbfolge, Erbfall und Erbauseinandersetzung,
  nichtselbständige Arbeit, § 15a EStG und wiederkehrende Leistungen bei Vermögensübertragungen,
  jeweils mit allen Beispielen, Lösungshinweisen und Ermittlungsschemata der Quelle.
  Prüfung: `npm run check:est-kurzskript-2`
- **GewSt-Campus** (Klausur 2, Reiter Gewerbesteuer): löst den Platzhalter ab. Erfasst sind das
  Kurzskript Gewerbesteuer (Engelberth/Breier, Stand 10/2025) mit allen zehn Kapiteln – von den
  Rechtsgrundlagen über Steuerpflicht, Gewerbeertrag nach § 7 GewStG, Hinzurechnungen (§ 8
  GewStG), Kürzungen (§ 9 GewStG) und Gewerbeverlust (§ 10a GewStG) bis zu Messbetrag, Zerlegung,
  Verfahrensrecht und der pauschalen Gewerbesteueranrechnung nach § 35 EStG, einschließlich
  sämtlicher Beispiele und Ermittlungsschemata –, die
  Hausaufgabe mit Lösung (Br, 2026) – atypisch stille Gesellschaft, Weg vom Handelsbilanzgewinn
  über § 7 S. 1, 2 und 4 GewStG zu Kürzungen, Hinzurechnungen, Verlustvortrag nach § 10a GewStG,
  Messbetrag und Zerlegung auf Bonn und Köln – sowie die vier Übungsfälle der Fallsammlung
  (Nöthen): Spedition mit Hinzurechnungen und zwei Beteiligungen, Betriebsaufspaltung mit
  Photovoltaikanlage, GmbH & Co. KG mit Gesellschafterdarlehen und Gesellschafterwechsel sowie
  Unternehmeridentität nach § 10a GewStG. Zur Fallsammlung liegt im freigegebenen Ordner kein
  Lösungsteil vor; die vier Fälle stehen deshalb bewusst ohne Musterlösung, was im Campus
  ausgewiesen wird. Prüfung: `npm run check:gewst`

Die Zahlen lassen sich mit `npm run check:fallsammlung` und `npm run check:hausaufgaben`
gegen die Daten prüfen.

## Examenspriorität: Legende

Alle Lerninhalte aller Campusse (K1 AO/USt/ErbSt, K2 KSt/ESt/GewSt/IStR, K3 Bilanz/PersG/UmwStR)
tragen einen von drei Markern. Grundlage sind die Auswertungen der Original-Musterlösungen der
Finanzverwaltung 2013–2024: Neunzig, DStR 2025, 1825 (Tag 1) · Neunzig/Zeck, DStR 2025, 1961 (Tag 2)
· Neunzig/Zeck, DStR 2025, 2097 (Tag 3); Langzeit-Gegencheck Herzig/Watrin, DStR 1994, 1282.

| Marker | Stufe | Bedeutung | Lernzeit |
| --- | --- | --- | --- |
| 🔴 | **Am häufigsten** (Dauerbrenner) | nahezu jährlich geprüft; Prüfungsschema muss ohne Nachdenken laufen | ca. 60 % |
| 🟠 | **Mittel** (regelmäßig) | regelmäßig, aber nicht jährlich – oder selten, dann aber zweistellig bepunktet („gefährliche Exoten“) | ca. 25 % |
| 🟢 | **Selten** (Exot) | 0–2-mal in zwölf Jahren; erst vertiefen, wenn die Kernblöcke sitzen | ca. 15 % |

Die Marker stehen an jeder Modul- und Fallkarte, in jeder Modul-/Fallseite, an Hausaufgaben,
Prüfschemata, Skriptblöcken, Rechenwegen, Karteikarten, Quizfragen, Lernwochen und als Punkt
hinter jeder Norm im Normenregister; Modullisten und die Fallsammlung lassen sich danach filtern.
Die Legende ist unter der Klausuren-Leiste in jedem Campus aufklappbar; das Cockpit jedes Campus
zeigt Legende, Prüfungskette und Häufigkeitstabelle des Fachs. Regelwerk und Fundstellen:
`src/data/examensprioritaet.js`; Methodik und Tabellen: [`docs/examensprioritaet.md`](docs/examensprioritaet.md);
vollständige Zuordnung aller Inhalte: [`docs/examensprioritaet-inventar.md`](docs/examensprioritaet-inventar.md)
(`npm run check:examensprioritaet` prüft, `npm run inventar:examensprioritaet` erzeugt).

## Starten

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # Produktionsbuild nach dist/
```

Der Build ist mit `base: "./"` konfiguriert und läuft damit sowohl unter einer eigenen Domain
als auch unter GitHub Pages in einem Unterverzeichnis. Der Workflow unter
`.github/workflows/deploy.yml` deployt bei jedem Push auf `main` automatisch nach GitHub Pages
(Repository → Settings → Pages → Source: „GitHub Actions").

## Projektstruktur

```
src/
  App.jsx                     Alle Ansichten: Cockpit, Module, Fälle, Klausurmodus,
                              Hausaufgaben, Schema, Formeln, Buchungssätze,
                              Normenregister, Training, Lernplan
  index.css                   Designsystem (ein Block, keine Überschreibungen)
  components/
    Schaubild.jsx             SVG-Renderer für sechs Diagrammtypen
    Bausteine.jsx             Norm, Normkette, Notiz, Rechnung, Buchungssatz, Bilanzspiegel
    Icons.jsx                 Icon-Set
    Falluebersicht.jsx        zentrale Fallsammlung mit Suche und Filter
    Fallsammlungsfaelle.jsx   einzelne Fallkarte, Lösung erst auf Klick
    FallsammlungsText.jsx     PDF-getreue Wiedergabe von Text und Tabellen
    Hausaufgaben.jsx          Hausaufgabenansicht + Rückverweis auf der Modulseite
    Klausurmodus.jsx          Klausurlauf mit Uhr, Selbstbewertung und Auswertung
    Pruefungsschemata.jsx     die sechs großen Prüfungsschemata
    Prioritaet.jsx            Examensprioritäts-Marker, Filter, Legende, Cockpit-Abschnitt
    Buchungssaetze.jsx        Reiter „Buchungssätze“: Lektionen, Kontenplan, Beispiele, Übungen
    K3Lernpfad.jsx            Reiter „Schritt für Schritt“ (PersG und UmwStR): Kapitel, Lektionen, Blocktypen
  data/
    module.js                 Sammelindex (nach Kennziffer sortiert) + Normenregister
    module-basis-a.js         Module 1–13   (Einzelunternehmen, Personengesellschaft)
    module-basis-b.js         Module 14–20  (Kapitalgesellschaft, Technik)
    module-vertiefung-a.js    Module 21–27  (Gewinnrealisierung … Verbindlichkeiten)
    module-vertiefung-b.js    Module 28–34  (Pensionsrückstellung … Klausurtechnik)
    module-vertiefung-c.js    Module 35–38 und Fälle 113–115
    module-vertiefung-d.js … -i.js
                              Fälle 116–137 aus den weiteren Kursmitschriften
    module-vertiefung-j.js    Module 39–44 (latente Steuern, Einlagen/Entnahmen,
                              Schuldzinsen, § 4f/§ 5 Abs. 7 EStG, Bewertungseinheiten)
    module-vertiefung-k.js    Module 45–50 (§ 15a EStG, Gesellschafterwechsel,
                              Betriebsveräußerung/§ 34 EStG, Realteilung,
                              Gewerbesteuerrückstellung, § 8b KStG)
    modules-faelle.js         Fälle 101–112 aus den Kursmitschriften
    fallsammlung.js           90 Fälle mit Lösungen, nach Modul gruppiert
    faelle-offen.js           Fälle ohne eindeutig einschlägiges Lernmodul
    hausaufgaben.js           die neun Fachtermine (Metadaten und Zusammenfassung)
    hausaufgaben-meta.js      Seiten- und Zeichenzahl der Volltexte
    hausaufgaben-volltext.js  Volltexte, per dynamischem Import nachgeladen
    schaubilder.js            Alle Schaubilder als Daten
    lernstoff.js              Formeln, Karteikarten, Quiz, Lernplan, Glossar
    buchungssaetze.js         Lektionen, Kontenplan, Beispiele und Übungen des Reiters „Buchungssätze“
    k3-lernpfad-persg.js      Lernpfad „Schritt für Schritt“ Personengesellschaften (18 Lektionen)
    k3-lernpfad-umwstr.js     Lernpfad „Schritt für Schritt“ Umwandlungssteuerrecht (16 Lektionen)
    sources.js                Quellenkatalog und Rechtsstand
    examensprioritaet.js      Regelwerk 🔴/🟠/🟢 aus den Beck-Auswertungen, Fachtabellen
```

Die Modulreihenfolge ergibt sich in `module.js` aus der aufsteigenden Kennziffer, nicht aus der
Reihenfolge der Importe. Neue Dateien können daher an beliebiger Stelle eingehängt werden.

## Designentscheidungen

Die frühere Optik entstand aus drei nacheinander angehängten CSS-Blöcken, die sich gegenseitig
überschrieben — daher der generische Eindruck. Das neue System ist ein einziger, zusammenhängender
Block mit einer klaren Bildsprache:

- **Klausurbogen & Kollegheft** statt Marketing-Landingpage: Tintenblau als Grundfarbe, die
  Korrekturfarben der Mitschrift als Bedeutungsträger (Rot = Ansatz, Orange = Bewertung,
  Magenta = Merke, Grün = Technik/Handelsbilanz)
- **IBM Plex** in drei Schnitten: Serif für Überschriften, Sans für Fließtext, Mono für Normen,
  Beträge und Kennzahlen
- **Textziffern statt Karten**: Jedes Modul ist wie eine Klausurlösung in Tz. gegliedert, mit
  Randziffernspalte
- **ABBA-Leiste** als Signaturelement — das Aufbauschema als Vier-Feld-Raster
- Keine Schatten, keine Farbverläufe, Radien nahe null

### Farbtoken

Alle Farben und Schriften kommen aus den CSS-Variablen in `src/index.css` — sie heißen **deutsch**:
`--papier`, `--grund`, `--feld`, `--linie`, `--linie-fein`, `--ink`, `--ink-weich`, `--tinte`,
`--tinte-dunkel`, `--tinte-feld`, `--rot`, `--orange`, `--magenta`, `--gruen`, `--marker`,
`--serif`, `--sans`, `--mono`.

Nur diese Namen verwenden. Englische Namen wie `--panel`, `--line`, `--text`, `--muted`, `--accent`
oder `--bg` sind **nicht** definiert. Eine Regel wie `border: 1px solid var(--line)` fällt still aus
— die Deklaration wird bei der Wertberechnung ungültig, `border-style` fällt auf `none` zurück und
die Fläche bleibt transparent. Der Fehler ist im Editor nicht sichtbar, nur im Browser.

Gegenprobe vor dem Commit:

```bash
grep -ohE 'var\(--[a-z0-9-]+' -r src | sed 's/var(//' | sort -u > /tmp/used.txt
grep -ohE '^\s*--[a-z0-9-]+:' src/index.css | tr -d ' :' | sort -u > /tmp/def.txt
comm -23 /tmp/used.txt /tmp/def.txt   # erwartet: nur lokal gesetzte Variablen
```

## Neue Inhalte ergänzen

### Ein neues Modul

Eine neue Datei unter `src/data/` anlegen (oder an eine bestehende anhängen) und in
`src/data/module.js` importieren. Datenschema:

```js
{
  id: 35,                          // eindeutig; Fälle bekommen 1xx
  area: "EU",                      // EU | PersG | KapG | Technik | Fall
  title: "…",
  law: "§ 255 HGB · § 6 EStG",     // Kurzzitat für Liste und Kopfzeile
  difficulty: "Klassiker",         // Grundlage | Aufbau | Klassiker | Vertiefung | Fortgeschritten | Examensniveau
  minutes: 28,
  diagram: "akhk",                 // optional: Key aus schaubilder.js
  intro: ["Absatz 1", "Absatz 2"],
  goals: ["…"],                    // Lernziele
  scheme: ["…"],                   // Prüfungsreihenfolge, nummerierte Schritte
  normchain: ["§ 255 Abs. 1 S. 1 HGB", "…"],   // speist das Normenregister
  example: {
    title: "…",
    facts: "Sachverhalt",
    solution: ["Lösungsschritt 1", "…"],
    result: "Ergebnissatz",
  },
  hbstb: {                         // optional: HB/StB-Gegenüberstellung
    datum: "31.12.2025",
    passivposten: true,            // nur setzen, wenn es ein Passivposten ist —
                                   // steuert die Deutung der latenten Steuern
    hb:  [{ label: "…", value: 100500 }, { label: "…", value: -7538 }],
    stb: [{ label: "…", value: 100500, subtotal: true }],
    hbSum: 92962, stbSum: 52762,
  },
  booking: [                       // optional: Buchungssätze
    { scope: "alle",               // alle | HB | StB
      title: "…",
      soll:  [{ konto: "Lieferwagen", betrag: 100500 }],
      haben: [{ konto: "Bank", betrag: 100500 }],
      note: "optionaler Hinweis" },
  ],
  merksatz: "Ein Satz, der hängen bleibt.",
  exam: ["Prüfungsrelevanz"],
  traps: ["typischer Fehler"],
  sourceIds: ["hgb", "estg"],      // Keys aus sources.js
}
```

Alle Felder außer `id`, `area`, `title`, `law`, `difficulty`, `minutes` und `intro` sind optional.

### Ein neues Schaubild

In `src/data/schaubilder.js` einen Key ergänzen. Sechs Typen stehen zur Verfügung:

| `typ` | wofür | Pflichtfelder |
|---|---|---|
| `fluss` | Ablauf in Stationen | `schritte: [{ nummer?, titel, zeilen[], ton }]` |
| `entscheidung` | Prüfungsbaum mit ja/nein | `ebenen: [{ frage, hinweis, zweig, zweigTon, zweigLabel, weiterLabel }]` |
| `zeitstrahl` | Perioden, Stichtage | `marken: [{ pos 0–1, label, sub[], ton }]`, optional `balken` |
| `saeulen` | Zahlenvergleich | `werte: [{ label, wert, anzeige, ton }]`, optional `fussnote` |
| `gegenueber` | HB gegen StB | `links` / `rechts: { titel, norm, punkte[], ton }` |
| `stufen` | Prüfungsreihenfolge | `stufen: [{ stufe, text, norm, ergebnis, ton }]` |

`ton` ist einer von `tinte`, `rot`, `orange`, `gruen`, `magenta`, `neutral`, `papier`. Die Farben
kommen aus CSS-Variablen, deshalb laufen alle Schaubilder im Dunkelmodus automatisch mit.

### Die sechs weiteren Kursmitschriften

Für die noch fehlenden PDFs empfiehlt sich dieses Vorgehen, weil pro Chat nur eine begrenzte
Zahl an Seiten verarbeitet werden kann:

1. **Ein PDF pro Chat** hochladen, nicht mehrere gleichzeitig.
2. Als Auftrag genügt: *„Erstelle aus dieser Mitschrift Module im Schema von
   `src/data/module-vertiefung-a.js`, mit `normchain`, `example`, `booking`, `hbstb`, `merksatz`
   und `traps`. Nur die fertige Datei ausgeben."*
3. Die erzeugte Datei als nächste freie `src/data/module-vertiefung-*.js` ablegen und in
   `src/data/module.js` importieren — mit `.js`-Endung, damit auch die Prüfskripte unter Node
   laufen, und in die Sammelliste aufnehmen:

   ```js
   import vertiefungJ from "./module-vertiefung-j.js";
   const grundmodule = [..., ...vertiefungJ, ...faelle].sort((a, b) => a.id - b.id);
   ```

4. IDs fortlaufend vergeben (39, 40, … für Lernmodule, 138, 139, … für Fälle), damit das
   Register eindeutig bleibt. Die Position im Import ist gleichgültig — sortiert wird nach `id`.
5. `npm run check:fallsammlung` ausführen: Das Skript prüft die Zielmodule gegen den
   tatsächlichen Bestand.

Neue Normen erscheinen automatisch im Normenregister, neue Schaubilder automatisch im Modul —
es ist an keiner weiteren Stelle etwas anzupassen.

## Rechtsstand

Redaktioneller Rechtsstand der Aufbereitung: 29.07.2026. Grundlage sind die amtlichen Gesetzestexte,
die BMF-Handbücher, die veröffentlichten Lösungsvorschläge der Bundessteuerberaterkammer 2021/2022
bis 2023/2024, öffentlich zugängliche Klausurauswertungen sowie die eigenen Kursmitschriften.
Bei Gesetzesänderungen ist der aktuelle amtliche Text vorrangig — die Quellenlinks stehen in jedem
Modul unter „Fundstellen und Rechtsstand".
