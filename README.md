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
- **ESt-Übungsklausuren** (Klausur 2, Reiter Einkommensteuer → „Übungsklausuren“): die
  Übungsklausuren im Prüfungsformat, Aufgaben- und Lösungs-PDF wieder zusammengeführt.
  Erfasst ist die Übungsklausur Einkommensteuer 1 (Wiegmann/Grolle, Rechtsstand 2025,
  6 Stunden Bearbeitungszeit) mit allen drei Aufgabenteilen: Eheleute Potter (zu versteuerndes
  Einkommen über fünf Einkunftsarten – Rabattfreibetrag, Auslandsdienstreise mit Bußgeld,
  geerbtes Mietwohngrundstück mit § 11d EStDV und verbilligter Überlassung, stille Beteiligung,
  verdeckte Gewinnausschüttung, Ausbildungsfreibetrag), H.G. Butte (Begründung einer
  Betriebsaufspaltung im laufenden Jahr mit Einlage zum Teilwert, Stückzinsen als negative
  Einnahmen, § 15a EStG beim vermögensverwaltenden Immobilienfonds) und Hella Wahnsinn
  (gemischt veranlasstes Arbeitsverhältnis mit § 35a EStG, Spendenauflage nach § 153a StPO,
  Unterhalt für mehrere Personen). Die Randpunkte der Musterlösung stehen an ihrem Absatz,
  wo das PDF sie eindeutig zuordnet, sonst als gesammelter Hinweis.
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
