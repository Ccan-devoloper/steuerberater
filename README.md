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
- **Fallsammlung ErbSt** (Reiter „Fallsammlung" im Campus Erbschaftsteuer): die Übungsfälle
  der Fallsammlung Erbschaft- und Schenkungsteuer (Martin Schäfer, Rechtsstand 2025) mit
  Sachverhalt, Aufgabenstellung und Lösungshinweis **im Wortlaut**. Eingepflegt sind
  bisher zwei Fälle zur Bewertung von Unternehmensvermögen: **Beckmann** – 100 % der
  Anteile an einer GmbH im vereinfachten Ertragswertverfahren mit den Korrekturen des
  § 202 BewG (Teilwertabschreibung, Ertragsteueraufwand, Aufwendungen und Erträge des
  nicht betriebsnotwendigen Mietwohngrundstücks, Gewinnausschüttung der Tochter, Erträge
  der jungen Kapitalrücklage und überhöhtes Gesellschafter-Geschäftsführergehalt), der
  Sonderbewertung nach § 200 Abs. 2 bis 4 BewG und dem Hinweis auf den entfallenden
  Paketzuschlag nach R B 11.8 Abs. 2 Satz 3 ErbStR (Unternehmenswert 10.911.250 €);
  **Haßlinghaus** – Übertragung eines Einzelunternehmens auf den Sohn mit angemessenem
  Unternehmerlohn, Hinzurechnung des nicht betriebsnotwendigen Vermögens einschließlich
  des auf den Stichtag fortgeschriebenen Festgelds, Finanzmitteltest nach § 13b Abs. 4
  Nr. 5 ErbStG, jungem Verwaltungsvermögen ohne Schuldensaldierung, anteiligem
  Schuldenabzug, 85-prozentigem Verschonungsabschlag und Härteausgleich nach § 19 Abs. 3
  ErbStG (festzusetzende Schenkungsteuer 124.000 € statt 126.920 €). Dazu **Fietze** – die
  Übungsklausur Bewertungsrecht/Erbschaftsteuer mit drei Grundbesitzwertermittlungen: ein
  Einfamilienhaus im Sachwertverfahren mit doppelter Wertzahlinterpolation über
  vorläufigen Sachwert und Bodenrichtwert (520.086 €), ein gemischt genutztes Grundstück
  im Ertragswertverfahren mit der 20-Prozent-Grenze des § 186 Abs. 2 BewG, vollständig
  aufgeschlüsselten Bewirtschaftungskosten und Bodenwertverzinsung (672.743 €) und ein
  Erbbaurecht nach der finanzmathematischen Methode des § 193 BewG mit Vorder- und
  Hinterlandbewertung (436.315 €); anschließend die Erbschaftsteuer für die
  Wohnrechtsvermächtnisnehmerin (Kapitalwert nach §§ 14, 15 Abs. 2, 16 BewG, 45.260 €) und
  für den Alleinerben mit § 13d-Befreiung, Nachlassverbindlichkeiten und Vorerwerb nach
  § 14 ErbStG (307.021 €). Und **Pack** – der Nachlass eines Einzelunternehmers, in dem
  Substanzwert (1.596.290 €) und Ertragswert (3.067.944 €) nebeneinander ermittelt und
  verglichen werden und die Klausur bis zur festzusetzenden Erbschaftsteuer durchgerechnet
  wird: Finanzmitteltest und 90-Prozent-Test, Nettowert des Verwaltungsvermögens,
  85-prozentiger Verschonungsabschlag mit Abschmelzung des Abzugsbetrags nach § 13a Abs. 2
  ErbStG auf 28.820 €, steuerfreies Familienheim samt nicht abziehbarer Hypothek nach
  § 10 Abs. 6 Satz 1 ErbStG, Hausrats- und Pkw-Freibeträge, Kapitalwert der
  Lebensversicherungsrente und Anrechnung des Vorerwerbs von 2023 (festzusetzende
  Erbschaftsteuer 173.504 €). Jede Zwischensumme
  der Quelle ist unabhängig nachgerechnet und die Kontrollrechnung steht am Ende der
  Lösung; die Spaltenzuordnung der Rechenwerke ist dokumentiert. Neu hinzugekommen ist aus
  der **Fallsammlung zum 4. Fachtermin** die vollständige Klausur **„Ackermann"**: ein
  gemischt genutztes Grundstück im Ertragswertverfahren (Grundbesitzwert 758.035 €), seine
  Aufteilung in Betriebs- und Privatvermögen nach der Flächenquote von 77,78 %, der
  Substanzwert als Mindestwert (599.583 €) gegenüber dem vereinfachten
  Ertragswertverfahren (2.678.954 €), der Finanzmitteltest, die Regelverschonung mit auf
  24.078 € abgeschmolzenem Abzugsbetrag, das steuerfreie Familienheim, der
  10-Prozent-Abschlag des § 13d ErbStG und die Steuerberechnung bis zur festzusetzenden
  Erbschaftsteuer von 18.557 € samt Härteausgleichsprüfung. Diese Klausur ist zugleich die
  Probe aufs Exempel für beide Schäfer-Skripte: Index, Bewirtschaftungskostenansätze,
  Liegenschaftszinssatz, Abschmelzungsgrenzen des Abzugsbetrags und die
  Härteausgleichstabelle stimmen sämtlich mit ihnen überein. Dazu die Übungsaufgabe
  **„August Antensteiner"**, die denselben Nachlass einmal an den Sohn und einmal an den
  Neffen gehen lässt: **38.250 € gegenüber 235.608 €** Erbschaftsteuer, obwohl dem Neffen
  die Tarifbegrenzung des § 19a ErbStG einen Entlastungsbetrag von 38.142 € bringt. Vier
  Unterschiede machen den Abstand aus – steuerfreies Familienheim, dafür aber nicht
  abziehbare Darlehensschuld nach § 10 Abs. 6 Satz 1 ErbStG, getrennte statt
  zusammengefasste Freibeträge für Hausrat und Pkw und der persönliche Freibetrag von
  400.000 € statt 20.000 €. Hier greift auch der **Härteausgleich**, der im Fall Ackermann
  entfällt. Als dritter Fall die Übungsklausur **„Backhaus"** – der umfangreichste
  Rechengang der Sammlung: ein Gewerbebetrieb mit fremdvermietetem Grundstück durchläuft
  Finanzmitteltest, 90-Prozent-Test (16,94 %), quotale Schuldenverrechnung und
  10-Prozent-Quote; die Witwe verliert das Familienheim rückwirkend durch den Verkauf nach
  sieben Monaten, kann dafür aber die Hypothek voll abziehen; eine nicht zuzuordnende
  Einkommensteuerschuld von 10.000 € wird nach Nettowerten auf fünf Vermögensgruppen
  verteilt und dort jeweils gekürzt; am Ende stehen der um den Kapitalwert der Witwenrente
  gekürzte Versorgungsfreibetrag und eine Erbschaftsteuer von 631.313 €. Dazu **sieben
  Einzelfälle** zum begünstigungsfähigen Vermögen des § 13b Abs. 1 ErbStG: Sie tasten die
  drei Nummern der Vorschrift an ihren Rändern ab – Einzelwirtschaftsgüter statt ganzem
  Betrieb, mittelbare Betriebsschenkung, Mitunternehmeranteil und Teil davon – und zeigen
  an drei Varianten, dass die 25-Prozent-Grenze ausschließlich beim Erblasser oder Schenker
  und ausschließlich unmittelbar gemessen wird. Als fünfter Fall die Übungsklausur
  **„Engelkamp"** mit drei Steuerpflichtigen nebeneinander: Erbin (112.200 €),
  Pflichtteilsberechtigter (0 €, weil der Freibetrag den Anspruch deckt) und
  Vermächtnisnehmerin (13.290 €). Dazu die **Jahreswertbegrenzung des § 16 BewG** beim
  Wohnrecht, die dessen Jahreswert von 21.600 € auf 16.398 € drückt, und der Kapitalwert
  einer lebenslänglichen Rente – beide mit demselben Vervielfältiger 10,724, der in
  derselben Lösung einmal als Last und einmal als Erwerb auftritt. Als sechster Fall die
  Übungsklausur **„Kurt Glücklich"**: Der Betrieb geht als **Vorausvermächtnis** allein an
  den Neffen und wird deshalb vor der Teilung aus dem Nachlass herausgenommen; die Nichte
  bleibt trotz Wohnsitz in Amsterdam unbeschränkt steuerpflichtig, weil sie noch keine fünf
  Jahre im Ausland lebt; der Finanzmitteltest scheitert am Sockelbetrag, so dass die
  quotale Schuldenverrechnung ins Leere geht; und zwei Wohnungsbefreiungen scheitern aus
  verschiedenen Gründen – § 13 Abs. 1 Nr. 4c ErbStG, weil der Neffe kein Kind ist, und
  § 13d ErbStG, weil unentgeltliche Überlassung keine Vermietung ist. Als siebter Fall die
  Übungsklausur **„Morgenrot"**: Eine nichteheliche Lebensgefährtin erbt in Steuerklasse III
  – ohne Familienheimbefreiung, mit 20.000 € statt 500.000 € Freibetrag und zu 30 % statt
  19 % –, dafür ist die Darlehensschuld voll abziehbar. Zwei GmbH-Anteile liegen mit 12,4 %
  und 33,33 % beiderseits der Mindestbeteiligungsgrenze und zeigen deren Wirkung unmittelbar
  nebeneinander (Erbschaftsteuer 195.600 €). Als achter Fall die große Bewertungsklausur
  **„Müller Eisenwaren GmbH"**, die alles verbindet: Ertragswertverfahren für ein
  Mietwohngrundstück im Betriebsvermögen (831.370 €), vereinfachtes Ertragswertverfahren
  mit acht Korrekturen nach § 202 BewG und der Hinzurechnung nicht betriebsnotwendigen
  Vermögens (2.171.270 €), Substanzwert als Mindestwert (981.370 €) und der vollständige
  Verschonungsblock bis zur Erbschaftsteuer von 66.600 €. Die drei Mieten zeigen dabei die
  drei Fälle des § 186 BewG nebeneinander, und die betriebsnotwendige 20-Prozent-Beteiligung
  wird je nach Rechenweg dreimal unterschiedlich behandelt. Als neunter Fall die Klausur
  **„Walter Olfmann"**, in der ein vermachter GmbH-Anteil die Verschonung von der Erbin auf
  den Vermächtnisnehmer verschiebt: Bei ihr ist er nach § 13a Abs. 5 Satz 1 ErbStG nicht
  begünstigt und neutralisiert sich zwischen Vermögensanfall und Vermächtnislast, bei ihm
  greift die Verschonung voll. In der fiktiven Steuer der Steuerklasse I ist dabei der
  Härteausgleich mitzurechnen – eine Feinheit, die die Quelle ohne Kommentar mitführt
  (Steuer 82.845 € bzw. 20.858 €). Dazu die einzige **Schenkung** der Sammlung („Paul
  Pollmann"), in der vier Gegenleistungen auf vier verschiedene Arten behandelt werden –
  anteilig gekürzt, voll abziehbar, gar nicht abziehbar und ohne Kürzung trotz Freibetrag –
  und die Familienheimbefreiung daran scheitert, dass § 13 Abs. 1 Nr. 4c ErbStG nur für
  Erwerbe von Todes wegen gilt. Danach folgt ein kurzer Fall, in dem **Härteausgleich
  und Tarifbegrenzung ineinandergreifen**: Der Ausgleich wirkt in beiden Steuerklassen, und
  erst die korrigierten Beträge gehen in die Verhältnisrechnung ein; die Quelle zeigt dazu
  eine Kurzform, die den Entlastungsbetrag als Quote der Steuerdifferenz berechnet. Den
  Abschluss bildet der Schlussabschnitt zu **Weitergabeverpflichtung, Erbauseinandersetzung
  und Vorausvermächtnis** mit drei durchgerechneten Beispielen zu § 13a Abs. 5 ErbStG:
  das Vermächtnis eines 20-Prozent-GmbH-Anteils an die Lebensgefährtin, bei dem der Sohn
  271.890 € zahlt und die Lebensgefährtin trotz Steuerklasse III 0 € (Beispiel 1); dieselbe
  Vermögensverteilung als Erbauseinandersetzung mit Begünstigungstransfer (3.850 € bzw.
  274.075 €, Beispiel 2) und als Vorausvermächtnis nach § 2150 BGB (131.575 € bzw.
  152.950 €, Beispiel 3). Die drei Varianten zeigen, dass der Abzugsbetrag des § 13a Abs. 2
  ErbStG jedem Letzterwerber eigenständig zusteht und je nach Weg voll, abgeschmolzen oder
  gar nicht wirkt.
  Prüfung: `npm run check:k1-erbst-fallsammlung`
- **Originalklausuren** (Reiter „Originalklausuren (Prüfung)" im Campus Erbschaftsteuer):
  die Original-Sachverhalte der Steuerberaterprüfung mit den Lösungshinweisen des Lehrgangs
  („Steuerberaterprüfungen 2014–2015", Februar 2026 mit Rechtsstand 2025, Version 1.0)
  **im Wortlaut**. Die Sachverhalte sind auf den heutigen Rechtsstand fortgeschrieben – der
  Bewertungsstichtag liegt im Jahr 2025, die Jahreszahl im Titel bezeichnet den
  Prüfungsjahrgang. Eingepflegt ist die Klausur **„Robert Rundlich" (Prüfung 2014)**, die
  alle Bausteine der Examensklausur in einem Fall verbindet: ein gemischt genutztes
  Grundstück im Ertragswertverfahren, bei dem die Bodenwertverzinsung von 40.095 € den
  Grundstücksreinertrag von 32.163 € übersteigt und deshalb der Mindestwert von 891.000 €
  anzusetzen ist; die hälftige Befreiung nach § 13 Abs. 1 Nr. 4b ErbStG nach dem
  Flächenverhältnis (445.500 €), während § 13d ErbStG für das Ladengeschäft ausscheidet;
  ein Betrieb im vereinfachten Ertragswertverfahren mit fünf Korrekturen nach § 202 BewG,
  zwei nachzuholenden Abschreibungen auf nie gebuchte Wirtschaftsgüter und einer nur in der
  Bilanz stehenden Fremdfläche (Ertragswert 3.295.149 €); eine Verwaltungsvermögensrechnung,
  in der die Skulptur als **junges** Verwaltungsvermögen auch bei der Optionsverschonung
  voll steuerpflichtig bleibt (300.000 €); ein Sachleistungsanspruch aus dem noch nicht im
  Grundbuch vollzogenen Tankstellenkauf samt der zugehörigen Grunderwerbsteuerschuld; eine
  Rentenlast aus einem Rohrleitungsrecht, die in eine lebenslängliche (Vervielfältiger
  3,192) und eine immerwährende Rente (§ 13 Abs. 2 BewG, Faktor 18,6) zerfällt und wegen
  § 10 Abs. 6a Satz 1 ErbStG nur hälftig abziehbar ist; und die Aufteilung einer
  Kaufpreisschuld von 500 € auf vier Vermögensgruppen nach § 10 Abs. 6a Sätze 3, 4, 7 und 8
  ErbStG, von der am Ende 165 € abziehbar bleiben. Festzusetzende Erbschaftsteuer
  **174.306 €**. Drei Rundungen der Quelle (584 € statt 583,20 €, 3.065 € statt 3.064,32 €,
  Jahresertrag 217.829,00 € statt 217.829,63 €) sind wortlautgetreu übernommen und
  gekennzeichnet; sie bleiben ohne Auswirkung auf das Ergebnis. Dazu die Klausur
  **„Robert Rundlich" (Prüfung 2015)**, das Gegenstück im **Sachwertverfahren**:
  Alterswertminderung mit Modernisierungspunkten (8 von 14 – die Modifikation unterbleibt),
  ein Schwimmbecken, das mit 6,51 % an der 10-Prozent-Grenze für besonders werthaltige
  Außenanlagen scheitert, eine Wertzahl ohne Interpolation, weil beide Ausgangsgrößen
  außerhalb der Tabelle liegen, und die Aufteilung des Grundbesitzwerts von 269.921 € auf
  drei Geschosse – Privatwohnung, vermietete Wohnung und Lager. Dazu ein vereinfachtes
  Ertragswertverfahren, aus dem drei nicht betriebsnotwendige Wirtschaftsgüter samt ihrer
  Erträge und Aufwendungen herausgerechnet und anschließend gesondert hinzugerechnet werden,
  eine stille Beteiligung, die nach R B 12.4 ErbStR mit 128,35 % der Einlage anzusetzen ist,
  und drei Rentenschulden nebeneinander: verbundene Leibrenten mit dreimonatiger Aufschubzeit,
  eine abgekürzte Leibrente mit interpoliertem Vervielfältiger (10,853 gegenüber dem
  lebenslänglichen Wert 12,802) und sieben rückständige Raten. Steuer nach dem Wortlaut der
  Quelle **439.052 €**. Der Erwerb der Quelle lässt allerdings das private Grundvermögen von
  89.974 € aus, obwohl die Lösung es zuvor ausdrücklich als solches ausweist und keine
  Befreiung gewährt; die **eigene Kontrollrechnung** führt auf 456.152 € und ist im
  Lösungstext ausdrücklich als eigene gekennzeichnet.
  Prüfung: `npm run check:k1-erbst-originalklausuren`
- **Verschonung & Steuerberechnung** (Reiter „Verschonung & Steuerberechnung (Schäfer)" im
  Campus Erbschaftsteuer): das Unterrichtsmaterial „Erbschaft- und Schenkungsteuer,
  Teil 2: Steuerbefreiungen, Verschonungsregelungen, Berechnung der Steuer" von Martin
  Schäfer (Stand Dezember 2025) **im Wortlaut**. Dieses Skript schließt den größten
  offenen Posten des ErbSt-Campus: die Übertragung von Betriebsvermögen nach §§ 13a, 13b
  ErbStG, die laut Klausurauswertung in 11 von 11 Examensklausuren mit 7 bis 24 Punkten
  vorkam. Eingepflegt ist bisher der **Abschnitt I** – die sachlichen Steuerbefreiungen des
  § 13 ErbStG: die nach Steuerklassen gestaffelten Freibeträge für Hausrat (41.000 €) und
  andere bewegliche körperliche Gegenstände (12.000 €) mit ihren Ausnahmen, die Gegenstände
  im öffentlichen Interesse (60 % bzw. 85 %) mit der zehnjährigen Nachbehaltensfrist und
  der Korrektur nach § 175 Abs. 1 Nr. 2 AO, das **Familienheim** in den drei Varianten des
  § 13 Abs. 1 Nr. 4a bis 4c ErbStG – lebzeitige Zuwendung ohne Behaltensfrist, Erwerb von
  Todes wegen durch den Ehegatten mit Zehnjahresfrist, Erwerb durch Kinder zusätzlich mit
  der 200-qm-Grenze – samt dem durchgerechneten Beispiel (450.000 €, 300 qm: je Kind
  150.000 € von 225.000 € befreit) und dem Katalog der sonstigen Befreiungen. Dazu der
  Einstieg in den **Abschnitt II**: Regelverschonung von 85 % mit dem gleitenden
  Abzugsbetrag von 150.000 €, Optionsverschonung zu 100 %, das Wahlrecht bei Großerwerben
  über 26 Mio. € zwischen abschmelzendem Verschonungsabschlag (§ 13c ErbStG) und
  Verschonungsbedarfsprüfung (§ 28a ErbStG) sowie das begünstigungsfähige Vermögen der drei
  Nummern des § 13b Abs. 1 ErbStG bis zur Poolvereinbarung als Weg über die
  25-Prozent-Grenze. Weiter mit den **Tz. 3 und 4**: das **begünstigte Vermögen** des
  § 13b Abs. 2 ErbStG mit dem durchgerechneten Beispiel der Quelle (5.000.000 € Betriebs-
  vermögen, 1.000.000 € Nettowert Verwaltungsvermögen, 400.000 € unschädlich, 4.400.000 €
  begünstigt) und dem **90-Prozent-Test** samt seiner Bruttoberechnung und der Korrektur
  durch das BFH-Urteil vom 13.09.2023 und die Ländererlasse vom 19.06.2024; dazu die ersten
  beiden Fallgruppen des **Verwaltungsvermögenskatalogs** – Dritten zur Nutzung überlassene
  Grundstücke mit den fünf Rückausnahmen (Betriebsaufspaltung und Sonderbetriebsvermögen,
  Betriebsverpachtung im Ganzen, Konzernklausel, Wohnungsunternehmen, Absatz eigener
  Erzeugnisse) und Anteile an Kapitalgesellschaften von 25 % oder weniger mit der getrennten
  Prüfung von Gesamthands- und Sonderbetriebsvermögen. Dazu die übrigen Fallgruppen des
  Katalogs: Kunstgegenstände und Sammlungen, Wertpapiere mit der Abgrenzungsliste der
  Quelle und vor allem der **Finanzmitteltest** des § 13b Abs. 4 Nr. 5 ErbStG – Schulden-
  verrechnung, 15-Prozent-Sockelbetrag und verbleibender Schuldenabzug in zwei
  Grundbeispielen, die quotale Zusammenführung von Gesamthands- und Sonderbetriebsvermögen
  bei Beteiligungen an Personengesellschaften (A+B OHG, 102.500 €), die **jungen
  Finanzmittel** als vorab herauszunehmender Einlagenüberhang der letzten zwei Jahre und
  die Zusatzvoraussetzung gegen Cash-Gesellschaften, die den Sockelbetrag an einen
  begünstigten Hauptzweck knüpft und deshalb zwei Berechnungswege erzwingt. Alle sechs
  Beispiele dieses Blocks sind nachgerechnet. Weiter mit den **Tz. 5 bis 8**: das dem
  Gläubigerzugriff entzogene Deckungsvermögen der CTA-Strukturen nach § 13b Abs. 3 ErbStG,
  die auf Erwerbe von Todes wegen beschränkte **Investitionsklausel** mit Zweijahresfrist
  und vorgefasstem Plan des Erblassers, der **Nettowert des Verwaltungsvermögens** mit der
  quotalen Schuldenverrechnung des § 13b Abs. 6 ErbStG samt der Quotenformel der Quelle und
  das **unschädliche Verwaltungsvermögen** mit der vom Bundesverfassungsgericht nicht
  beanstandeten 10-Prozent-Quote. Dazu die **Tz. 9 und 10**: die Einschränkung der
  Schuldensaldierung mit drei Beispielen – darunter der vollständigste Rechenweg des
  Skriptteils, der vom 90-Prozent-Test über Finanzmitteltest und quotale
  Schuldenverrechnung bis zum begünstigten Betriebsvermögen von 12.532.585 € führt – und
  die **Verbundvermögensaufstellung** des § 13b Abs. 9 ErbStG gegen den Kaskadeneffekt,
  mit dem durchgerechneten Fall der A-GmbH/B-GmbH (begünstigtes Vermögen 2.661.285 €).
  Weiter mit den **Tz. 11 bis 13**: die **Regelverschonung** mit der erwerbsbezogenen
  Prüfschwelle von 26 Mio. €, ihrer Zehnjahres-Zusammenrechnung und ihrer Herleitung aus
  dem Steuertarif des § 19 Abs. 1 ErbStG, der **gleitende Abzugsbetrag**, der bei einem
  15-Prozent-Anteil von 450.000 € – einem Betriebsvermögen von 3.000.000 € – vollständig
  aufgezehrt ist, sowie die **Weitergabeverpflichtung** mit dem Begünstigungstransfer des
  § 13a Abs. 5 Satz 3 ErbStG und dem Fall der Teilungsanordnung, in dem der Ausgleich mit
  privatem Grundbesitz von 2.100.000 € nur bis zur Höhe des übertragenen begünstigten
  Vermögens von 2.000.000 € wirkt. Dazu die **Lohnsummenregelung** der Tz. 14: 400 % der
  Ausgangslohnsumme in fünf Jahren, die abgestuften Mindestlohnsummen von 250 % und 300 %
  bei kleinen Betrieben, der vollständige Verzicht bis fünf Beschäftigte, die
  verhältnismäßige Kürzung des Verschonungsabschlags bei Unterschreitung (im Beispiel der
  Quelle von 85 % auf 76,5 %) sowie die genaue Zusammensetzung der Lohnsumme mit den
  Ausnahmen für Saisonarbeiter, Auszubildende und Leiharbeiter. Dazu die **Behaltensregelung**
  der Tz. 15: die fünf Nachversteuerungstatbestände des § 13a Abs. 6 ErbStG einschließlich
  der Überentnahmegrenze von 150.000 € und der Aufhebung einer Poolvereinbarung, die
  **Reinvestitionsklausel** mit ihrer Sechsmonatsfrist und die zeitanteilige **Abschmelzung**
  des Verschonungsabschlags – mit dem vollständig durchgerechneten Fall, in dem Veräußerung
  und Lohnsummenverstoß zusammentreffen und nach R E 13a.19 Abs. 3 ErbStR der höhere
  Kürzungsbetrag zählt (Bemessungsgrundlage 600.000 € → 2.215.000 €). Den Abschluss des
  Abschnitts bilden die **Tz. 16 bis 18**: der **Vorab-Abschlag** von bis zu 30 % für
  gesellschaftsvertraglich gebundene Familienunternehmen mit seiner 20-Jahres-Bindung, die
  Anzeigepflichten und die **Optionsverschonung** – 100 % Steuerbefreiung gegen sieben Jahre
  Behaltensfrist, 700 % Mindestlohnsumme und eine Verwaltungsvermögensquote von höchstens
  20 %, ohne Rückfall auf die Regelverschonung, wenn die Grenze verfehlt wird. Damit ist der
  Abschnitt II – der Verschonungsblock der §§ 13a und 13b ErbStG – vollständig. Es folgen
  der **Abschnitt III** zu den Großerwerben über 26 Mio. € mit dem abschmelzenden
  Verschonungsabschlag des § 13c ErbStG (ein Prozentpunkt je volle 750.000 €) und der
  Verschonungsbedarfsprüfung des § 28a ErbStG samt dem Gesamtschaubild der Quelle sowie der
  **Abschnitt IV** zum 10-Prozent-Abschlag für zu Wohnzwecken vermietete Grundstücke
  (§ 13d ErbStG) mit der Amtshilfevoraussetzung für Drittstaaten nach dem
  Jahressteuergesetz 2024 und dem durchgerechneten Fall der Erbauseinandersetzung mit
  Ausgleichszahlung. Aus dem **Abschnitt V** stehen die Grundlagen der Steuerberechnung: die
  drei **Steuerklassen** des § 15 ErbStG, die **persönlichen Freibeträge** von 500.000 € bis
  20.000 € samt ihrer anteiligen Kürzung bei beschränkter Steuerpflicht (Schweizer Fall:
  400.000 € auf 100.000 €), die nach Alter gestaffelten **Versorgungsfreibeträge** und der
  **Stufentarif** des § 19 ErbStG mit dem **Härteausgleich**, der im Beispiel der Quelle die
  Mehrsteuer von 27.800 € auf 10.000 € begrenzt, samt der Grenzwerttabelle der ErbStH. Dazu
  die **Tarifbegrenzung** des § 19a ErbStG, die Erwerber der Steuerklassen II und III beim
  Betriebsvermögen auf das Niveau der Steuerklasse I bringt – mit dem vollständig
  durchgerechneten Fall (Quote 9,66 %, Entlastungsbetrag 23.310 €, Steuer 634.800 €) – und
  die **Berücksichtigung früherer Erwerbe** nach § 14 ErbStG mit fiktiver Abzugssteuer,
  dem Vorrang der höheren tatsächlich entrichteten Steuer und der Mindeststeuer des
  Satzes 4, gezeigt am Wechsel von der Steuerklasse III in die Steuerklasse I durch
  Eheschließung. Den Schluss bildet der **Abschnitt VI** zu Steuerfestsetzung und Erhebung:
  Steuerschuldner und Gesamtschuld bei Schenkungen, die Anzeigepflichten von Erwerber,
  Banken, Versicherungen, Gerichten und Notaren, die Steuererklärung sowie die
  Kleinbetragsgrenze von 50 € und die beiden Stundungstatbestände des § 28 ErbStG – sieben
  Jahre für begünstigtes Betriebsvermögen und zehn Jahre für zu Wohnzwecken genutzten
  Grundbesitz nach dem Jahressteuergesetz 2024. **Das Skript ist damit von der ersten bis
  zur letzten Seite vollständig erfasst.** Eingearbeitet sind außerdem die **zwölf
  Musterlösungen der zugehörigen Lösungsdatei**, jeweils im passenden Kapitel: die
  GmbH-Mindestbeteiligung, Nettowert (600.000 €) und unschädliches Verwaltungsvermögen
  (begünstigt 3.740.000 €), die Fortsetzung des im Skript abgebrochenen
  Schuldensaldierungsfalls (begünstigt 3.360.000 €), die drei Varianten des Abzugsbetrags
  (0 €, 225.000 €, 450.000 €), zwei Lohnsummenfälle (850.000 € bzw. 800.000 € höhere
  Bemessungsgrundlage), zwei Abschmelzungsfälle (Nachzahlung 163.350 € und 82.600 €), der
  Versorgungsfreibetrag (Vervielfältiger 11,050, verbleibend 123.400 €) und beide Fälle zur
  Tarifbegrenzung (Entlastungsbetrag 183.620 € und 22.455 €). Jede Zwischensumme ist
  unabhängig nachgerechnet.
  Prüfung: `npm run check:k1-erbst-verschonung`
- **Bewertungsrecht** (Reiter „Bewertungsrecht (Schäfer)" im Campus Erbschaftsteuer): das
  Unterrichtsmaterial zum Steuerberaterlehrgang von Martin Schäfer **im Wortlaut**, mit den
  Skriptteilen 1 und 3 in einem Reiter. Aus dem **Teil 1** („Bewertung nach den Allgemeinen
  Bewertungsvorschriften", Stand Mai 2025) sind die Abschnitte I und II eingepflegt:
  Aufgabe der Bewertung und der Einstieg über § 12 Abs. 1 ErbStG, die Gliederung des
  Bewertungsgesetzes in Allgemeinen und Besonderen Teil einschließlich des für die
  Grundsteuer angefügten 7. Abschnitts, die drei Vermögensarten des § 18 BewG sowie der
  Bewertungsgegenstand – wirtschaftliche Einheit und Wirtschaftsgut mit den drei
  Voraussetzungen der Zusammenfassung, die Zurechnung nach wirtschaftlichem Eigentum mit
  Sicherungsübereignung, Grundstückskauf und Eigentumsvorbehalt, die Sonderregel für
  Grundstückskaufverträge im Erbfall (Grundbucheintragung statt Besitz- und Lastenwechsel),
  das gemeinschaftliche Eigentum nach dem MoPeG und der Grundsatz der Gesamtbewertung mit
  dem Paketzuschlag. Dazu die Abschnitte III und IV: Bedingungen und Befristungen der
  §§ 4 bis 8 BewG – aufschiebend und auflösend, ungewisses gegen gewisses Ereignis – mit
  vier Beispielen, der Abgrenzung zur Betagung (nur die Fälligkeit ist hinausgeschoben,
  die Schuld ist bereits entstanden) und der vierspaltigen Übersicht zu Wirkung,
  Schwebezustand und Vorschriften; sowie der Bewertungsmaßstab mit gemeinem Wert, Teilwert
  und Ertragswert, den sechs abgeleiteten Maßstäben von Kurswert über Nennwert,
  Gegenwartswert und Rückkaufswert bis zum Kapitalwert und dem gemeinen Wert des § 9
  Abs. 1 BewG als Einzelveräußerungspreis einschließlich der Umsatzsteuer. Aus dem
  **Abschnitt V** steht die Bewertung der Wertpapiere und Anteile: Forderungspapiere und
  Schuldbuchforderungen mit dem Kurswert nach § 11 Abs. 1 BewG und der 30-Tage-Regel,
  Anteilspapiere und Anteilsrechte, nicht notierte Anteile mit dem gemeinen Wert nach § 11
  Abs. 2 BewG, Beteiligungen mit dem Paketzuschlag nach § 11 Abs. 3 BewG ab mehr als 25 %
  und bis zu 25 % Zuschlag, sowie Investmentanteile mit dem Rücknahmepreis nach § 11 Abs. 4
  BewG – samt dem fünfzeiligen Schaubild der Quelle, das alle fünf Fälle bis hin zum
  Nennwert nicht notierter Forderungspapiere zusammenfasst. Dazu die **Kapitalforderungen
  und Schulden**: der Nennwert des § 12 Abs. 1 BewG mit der Behandlung des Disagios und die
  vier Gründe, von ihm abzuweichen – uneinbringliche Forderungen (kein Ansatz) und
  zweifelhafte Forderungen (Schätzwert), unverzinsliche Forderungen mit dem Gegenwartswert
  nach § 12 Abs. 3 BewG bei 5,5 % über die Tabelle 1 für Fälligkeits- und die Tabelle 2 für
  Tilgungsforderungen einschließlich der tagegenauen Restlaufzeit mit 360-Tage-Jahr und
  linearer Interpolation, die 3- und 9-Prozent-Grenzen bei niedriger und hoher Verzinsung
  mit der Vierjahresfrist, die Einlage des typisch stillen Gesellschafters mit der
  Fünffachkorrektur nach R B 12.4 ErbStR und der Rückkaufswert noch nicht fälliger
  Versicherungsansprüche nach § 12 Abs. 4 BewG – samt dem zehnzeiligen Schaubild der Quelle
  von der kursnotierten Forderung bis zur Lebensversicherung. Sämtliche sechs Beispiele
  dieses Abschnitts stehen in der Quelle ohne Lösung und sind hier nicht aufgelöst.
  Den Abschluss bilden die **wiederkehrenden Nutzungen und Leistungen**: die Abgrenzung
  von Nutzungen und Leistungen (nur für erstere gilt die Jahreswertbegrenzung), die vier
  zeitlichen Arten der §§ 13 und 14 BewG, der Jahreswert nach § 15 BewG mit der Obergrenze
  des § 16 BewG – Wirtschaftsgutwert geteilt durch 18,6, weil 18,6 zugleich der höchste
  Vervielfältiger ist –, die Anlage 9a für bestimmte Zeit mit der Deckelung durch § 13
  Abs. 1 Satz 2 BewG und der Interpolation bei gebrochener Restlaufzeit, die Vervielfältiger
  18,6 und 9,3 für immerwährende und unbestimmte Dauer, der nach Alter und Geschlecht
  gestaffelte Vervielfältiger des § 14 Abs. 1 BewG nach dem BMF-Schreiben vom 09.12.2024
  (Sterbetafel 2021/2023, Stichtage ab 01.01.2025), die Regel des § 14 Abs. 3 BewG zum
  zuerst und zuletzt Sterbenden und die Behandlung sich mindernder Ehegattenrenten – samt
  dem Schlussüberblick über alle vier Arten. **Der Skriptteil 1 ist damit vollständig.**
  Die dreizehn Beispiele, die das Skript selbst ohne Lösung lässt, stehen mit der
  Musterlösung aus der zugehörigen Lösungsdatei an ihrer Stelle und sind sämtlich
  nachgerechnet – darunter die Gegenwartswerte über die Tabellen 1 und 2 mit Interpolation
  (88.100 € und 56.040 €), die Zinsdifferenzrechnung bei 1 % und bei 12 % (18.245 € und
  22.632 €), die stille Einlage mit 232,8 % beziehungsweise 88,35 % des Nennwerts
  (104.760 € und 39.757 €), die Höchst- und Mindestzeitrenten mit ihrem Vergleich von § 13
  und § 14 BewG und die Ehegattenrente nebeneinander mit dem Differenz-Vervielfältiger
  (141.492 €, aufgeteilt in 64.680 € und 76.812 €).
  Prüfung: `npm run check:k1-erbst-bewertung-teil1`.
  Aus dem **Teil 2** („Bewertung des Grundvermögens", Stand August 2025) sind die Tz. 1
  bis 3 eingepflegt: Begriff und Umfang des Grundvermögens als Teil des Oberbegriffs
  Grundbesitz, der bewertungsrechtliche Gebäudebegriff mit seinen fünf Merkmalen, die
  Abgrenzung zu sonstigen Bestandteilen, Zubehör und Betriebsvorrichtungen und die
  Zuordnung land- und forstwirtschaftlich genutzter Flächen nach § 159 BewG mit dem
  Vorrang des Absatzes 3; die Feststellung der Grundbesitzwerte mit dem gemeinen Wert als
  Verkehrswert nach § 194 BauGB, den Daten der Gutachterausschüsse, dem Grundsatz der
  Modellkonformität und der Dreijahresregel sowie der Ausblendung besonderer
  objektspezifischer Grundstücksmerkmale nach § 177 Abs. 4 BewG; und die unbebauten
  Grundstücke mit der Bewertung nach Bodenrichtwerten einschließlich der Aufteilung in
  Vorder- und Hinterland. Dazu die **bebauten Grundstücke**: der Begriff, die sechs
  Grundstücksarten des § 181 BewG mit ihren Prozentgrenzen – unter 50 % betriebliche
  Mitbenutzung beim Ein- und Zweifamilienhaus, mehr als 80 % Wohnnutzung beim
  Mietwohngrundstück, mehr als 80 % betriebliche oder öffentliche Nutzung beim
  Geschäftsgrundstück –, der Wohnungsbegriff des § 181 Abs. 9 BewG bis hin zu den
  Tiny-Häusern und drei Zuordnungsbeispielen, deren drittes mit **genau 80 %**
  Wohnnutzung der Grenzfall ist, in dem weder Absatz 3 noch Absatz 6 greift; sowie die
  Zuordnung zu den drei Bewertungsverfahren nach § 182 BewG mit dem Sachwertverfahren als
  Auffangverfahren und der Regel für Mischfälle. Dazu das **Vergleichswertverfahren** mit
  der hinreichenden – nicht absoluten – Übereinstimmung der Vergleichsgrundstücke, dem
  Vorrang der Gutachterausschuss-Daten vor dem eigenen Kaufpreis nach dem BFH-Urteil vom
  24.08.2022 und den Vergleichsfaktoren je Flächeneinheit; sowie der Aufbau des
  **Ertragswertverfahrens** mit dem Bodenwert als Mindestwert, dem vollständigen
  Rechenschema von der Jahresmiete über Bewirtschaftungskosten, Reinertrag und
  Bodenwertverzinsung bis zum Grundbesitzwert und dem Rohertrag nach § 186 BewG mit der
  **20-Prozent-Grenze** zur üblichen Miete, die in beide Richtungen wirkt. Dazu die
  **Bewirtschaftungskosten** nach Anlage 23 BewG – Verwaltungs- und Instandhaltungskosten,
  Mietausfallwagnis, getrennt für Wohn- und Nichtwohnnutzung – mit der Indizierung auf die
  Bewertungsstichtage 2025 (Verbraucherpreisindex 120,2 zu 77,1, also 359 €, 47 €, 14,00 €
  und 106 €) und einem vollständig durchgerechneten Beispiel mit zwölf Wohnungen, zwei
  Gewerbeeinheiten und vierzehn Tiefgaragenplätzen (28.560 €); der **Liegenschaftszinssatz**
  mit den vier gesetzlichen Sätzen von 3,5 % bis 6,0 % und der selbständig nutzbaren
  Teilfläche; sowie die **Restnutzungsdauer** mit der Mindestgrenze von 30 % der
  Gesamtnutzungsdauer, der Verlängerung durch Modernisierung nach dem Punktesystem des
  AEBew und der Verkürzung allein bei Abbruchverpflichtung. Schließlich das vollständige
  **Sachwertverfahren**: das Rechenschema von den Regelherstellungskosten der Anlage 24
  über Bruttogrundfläche und Baupreisindex zu den durchschnittlichen Herstellungskosten,
  weiter über Regionalfaktor und Alterswertminderungsfaktor zum Gebäudesachwert und
  zusammen mit dem Bodenwert zum vorläufigen Sachwert; die Baupreisindizes 183,3 und 186,7
  für 2025; der Regionalfaktor mit dem Auffangwert 1,0; die Alterswertminderung mit
  derselben 30-Prozent-Mindestgrenze wie im Ertragswertverfahren und der getrennten
  Bewertung selbständiger Gebäudeteile; sowie die **Wertzahlen der Anlage 25** mit dem
  Vorrang der Sachwertfaktoren der Gutachterausschüsse und der **Kreuzinterpolation**, die
  die Quelle in zwei gleichwertigen Rechenwegen vorführt (beide nachgerechnet, beide
  ergeben 1,653). Den Abschluss bilden die **Erbbaurechtsfälle und die Öffnungsklausel**:
  das **Erbbaurecht** nach § 193 BewG und das **Erbbaugrundstück** nach § 194 BewG als
  zwei getrennt zu bewertende wirtschaftliche Einheiten mit dem Mindestwert 0 €, jeweils
  mit dem Vorrang des vom Gutachterausschuss ermittelten Koeffizienten, sonst der
  finanzmathematischen Methode mit dem Auffangfaktor 1,0, der Abzinsung nach Anlage 26 und
  der Kapitalisierung nach Anlage 21 – der nicht zu entschädigende Gebäudewertanteil wird
  dabei beim Erbbaurecht abgezogen und beim Erbbaugrundstück hinzugerechnet; die **Gebäude
  auf fremdem Grund und Boden** nach § 195 BewG mit dem angemessenen
  Bodenwertverzinsungsbetrag, dem vertraglich vereinbarten Nutzungsentgelt und dem
  Wegfall des Gebäudewertanteils bei Abrissverpflichtung; die **Grundstücke im Zustand der
  Bebauung** nach § 196 BewG mit der Hinzurechnung der bis zum Stichtag entstandenen
  Herstellungskosten; und der **Nachweis des niedrigeren gemeinen Werts** nach § 198 BewG
  mit Gutachten und Kaufpreis als Nachweismitteln. Damit ist das Skript Teil 2 von der
  Tz. 1 bis zur Tz. 12 vollständig erfasst. Eingearbeitet sind außerdem die **elf
  Musterlösungen der zugehörigen Lösungsdatei**, jeweils im passenden Kapitel: das
  Mietwohngrundstück (1.021.604 €), die beiden Sachwertfälle (566.648 € und 541.189 €),
  die vier Erbbaurechtsfälle (1.032.268 €, 947.977 €, 802.775 € und 1.003.030 €), die
  beiden Erbbaugrundstücksfälle (420.000 € und 428.387 €), das Gebäude auf fremdem Grund
  und Boden samt belastetem Grundstück (294.337 € und 166.753 €) und das Grundstück im
  Zustand der Bebauung (358.000 €). Jede Zwischensumme ist unabhängig nachgerechnet;
  zwei eigene Kontrollrechnungen zeigen, dass die finanzmathematische Methode den
  Grundstückswert bis auf Rundungsdifferenzen von 7 € bzw. 1 € restlos auf die beiden
  wirtschaftlichen Einheiten aufteilt.
  Prüfung: `npm run check:k1-erbst-bewertung-teil2`.
  Der **Teil 3** („Bewertung des Betriebsvermögens; gesonderte Feststellungen", Stand
  Oktober 2025, 35 Seiten) steht vollständig. Eingepflegt ist bisher der Anfang des
  Teils I: § 12 Abs. 5 ErbStG als Einstieg, der Gewerbebetrieb als Bewertungsgegenstand
  nach § 95 Abs. 1 BewG mit der Gleichstellung der freien Berufe nach § 96 BewG und den
  vier Durchbrechungen der Bestandsidentität zwischen Steuerbilanz und
  bewertungsrechtlichem Betriebsvermögen; die Rangfolge der Bewertungsverfahren des
  § 11 Abs. 2 BewG von der Ableitung aus zeitnahen Verkäufen über Ertragswert- und
  Multiplikatorenverfahren bis zum optionalen vereinfachten Ertragswertverfahren, stets
  mit dem Substanzwert als obligatorisch zu prüfender Untergrenze; sowie der Substanzwert
  selbst – wann er überhaupt greift, welche Wirtschaftsgüter trotz Aktivierungs- oder
  Passivierungsverbots anzusetzen sind, Betriebsgrundstücke nach § 99 BewG, Schulden und
  sonstige Abzüge, die Wertermittlung mit der 30-Prozent-Regel für bewegliches
  Anlagevermögen, Wiederbeschaffungskosten beim Umlaufvermögen und der Kapitalisierung
  von Lizenzerträgen sowie die Fortschreibung einer Vermögensaufstellung auf den
  Besteuerungszeitpunkt. Die drei Beispiele der Quelle stehen durchgerechnet; wo die
  Quelle eine Vermögensaufstellung ohne Ergebnis stehen lässt, ist das ausdrücklich
  vermerkt und die eigene Kontrollrechnung als solche gekennzeichnet.
  Dazu das **vereinfachte Ertragswertverfahren**: der Anwendungsbereich mit dem Wahlrecht
  des § 199 BewG, der Abgrenzung zu branchentypischen Multiplikatorenverfahren und dem
  Katalog der Fälle offensichtlich unzutreffender Ergebnisse (zeitnahe Verkäufe,
  Erbauseinandersetzungen, verbundene Unternehmen, Branchenwechsel, Neugründungen); die
  drei Sonderbewertungen des § 200 BewG für nicht betriebsnotwendiges Vermögen,
  (Unter-)Beteiligungen ohne Mindestquote und junges Betriebsvermögen samt der Frage, wie
  die zugehörigen Erträge und Aufwendungen aus dem Jahresertrag auszuscheiden sind; sowie
  der zukünftig nachhaltig erzielbare Jahresertrag mit dem dreijährigen Ermittlungszeitraum
  und seinen Ausnahmen (Einbeziehung des laufenden Wirtschaftsjahres, verkürzter Zeitraum
  mit Division durch zwei, Rumpfwirtschaftsjahre, Umwandlungsfälle) und dem vollständigen
  Korrekturschema des § 202 BewG in 19 Zeilen vom Unterschiedsbetrag über drei
  Zwischensummen und die 30-Prozent-Pauschale bis zum bereinigten Betriebsergebnis,
  einschließlich der Erläuterungen zu Unternehmerlohn, Doppelerfassung und verdeckter
  Gewinnausschüttung.
  Schließlich der auf **13,75** festgeschriebene Kapitalisierungsfaktor mit der
  Verordnungsermächtigung des § 203 Abs. 2 BewG, das Überblicksschema von den drei
  Betriebsergebnissen über Durchschnittsertrag und Kapitalisierung bis zum gemeinen Wert
  einschließlich der drei Zurechnungen nach § 200 Abs. 2 bis 4 BewG, sowie drei Beispiele:
  Beispiel 2 (gewillkürtes Mietwohngrundstück und betriebsnotwendige Zuliefererbeteiligung,
  Ertragswert 3.805.079 €, gemeiner Wert 4.255.079 €) und Beispiel 3 (Teilwertabschreibung,
  einmaliger Veräußerungsgewinn, Schuldenabzug beim Mietwohngrundstück und eingelegter
  Parkplatz als junges Betriebsvermögen, gemeiner Wert 5.324.533 €) stehen vollständig
  durchgerechnet mit eigener Kontrollrechnung; von **Beispiel 1** steht nur der
  Sachverhalt, weil die Quelle seine Musterlösung als Grafik ohne Textebene enthält – das
  ist ausdrücklich vermerkt und die Lösung nicht rekonstruiert.
  Dazu die **Anteile am Betriebsvermögen einer Personengesellschaft**: MoPeG und der neue
  § 2a ErbStG, die das Transparenz- und Gesamthandsprinzip für die Erbschaftsteuer
  fortschreiben; der Umfang des Betriebsvermögens nach § 97 Abs. 1 Satz 1 Nr. 5 BewG
  einschließlich des Sonderbetriebsvermögens; die zweistufige Aufteilung nach § 97 Abs. 1a
  BewG – Kapitalkonten vorweg, Restwert nach dem Gewinnverteilungsschlüssel, Vorabgewinne
  und Ergänzungsbilanzen außer Betracht – mit der **A und B OHG vollständig durchgerechnet**
  (Gesamthandsbilanz und zwei Sonderbilanzen, beide Gesellschafter mit je 230.000 €); die
  Grenze von 0 € für den nicht nachschusspflichtigen Kommanditisten nach R B 97.5 ErbStR;
  sowie die Bruchteilsbetrachtung bei vermögensverwaltenden Personengesellschaften mit dem
  Abzug der Gesellschafterschulden über § 10 Abs. 5 ErbStG oder als Gegenleistung einer
  gemischten Schenkung. Auch hier enthält die Quelle zu einem zweiten Beispiel (A+B OHG,
  gemeiner Wert 1.500.000 €) nur den Sachverhalt in Textform; seine Lösung steht als Grafik
  ohne Textebene und ist nicht rekonstruiert.
  Den Abschluss des Teils I bilden die **Besonderheiten bei Kapitalgesellschaften**: die
  Ableitung des Substanzwerts aus der letzten Vermögensaufstellung mit ihren drei
  Korrekturen, die Wertanteile nach § 97 Abs. 1b BewG einschließlich des nicht vollständig
  eingezahlten Nennkapitals (ABC-GmbH durchgerechnet), die Sonderfälle nach R B 11.4 ErbStR
  und der Paketzuschlag mit der 25-Prozent-Grenze. Der **Teil II** bringt die gesonderten
  Feststellungen nach §§ 151 bis 156 BewG vollständig: die vier Feststellungsgegenstände,
  das mehrstufige Verfahren mit den Mechanismen für Grundlagen- und Folgebescheide, die
  Feststellungen zu Art, Zurechnung und Anteilshöhe, die Zusatzfeststellungen zu
  Lohnsummen, Finanzmitteln und Verwaltungsvermögen für §§ 13a, 13b und 19a ErbStG, die
  Basiswertregelung mit ihrer bedingten einjährigen Dauerwirkung, die örtliche
  Zuständigkeit von Lage-, Betriebs- und Sitzfinanzamt, die Erklärungspflicht sowie
  Beteiligte, Bekanntgabe, Rechtsbehelfsbefugnis und Außenprüfung.
  **Das Skript ist damit vollständig eingepflegt.** Drei Musterlösungen liegen im Skript
  selbst nur als Grafik ohne Textebene vor, ein viertes Beispiel lässt das Skript ohne
  Ergebnis; alle vier stehen jetzt aus der zugehörigen Lösungsdatei im Wortlaut an ihrer
  Stelle – darunter der Substanzwertvergleich mit 3.231.000 € gegen 2.800.000 €
  Ertragswert, die vollständige Lösung zur Schenkung des Einzelunternehmens (Substanzwert
  2.380.000 € gegen korrigierten Ertragswert 2.172.250 €, also Ansatz des Mindestwerts),
  die Aufteilung der A+B OHG (A 670.000 €) und der Anteilswert an der A-GmbH (150.000 €).
  Jede Lösung ist als aus der Lösungsdatei übernommen gekennzeichnet und nachgerechnet.
  Prüfung: `npm run check:k1-erbst-bewertung-teil3`
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
  Behaltefrist und mitunternehmerischer Betriebsaufspaltung – und **Teil III –
  Gesellschafterwechsel** (7 Kapitel): die Sicht auf den ausgewechselten und den
  eingewechselten Gesellschafter, die Fortentwicklung der positiven Ergänzungsbilanz nach
  dem BMF-Schreiben vom 19.12.2016 (BFH IV R 1/11) mit drei durchgerechneten Beispielen,
  negatives Kapitalkonto, § 6b-Rücklage und stille Lasten beim Anteilserwerb, das
  Ausscheiden eines Gesellschafters mit Anwachsung, Verrechnungs- und Aufstockungsmethode
  nach IDW RS HFA 7, die Abfindung zum, unter und über dem Buchwert samt Firmenwert und
  zwei AfA-Reihen, der lästige Gesellschafter und die private Zusatzzahlung sowie die
  Sachwertabfindung in das Privatvermögen (Zweistufentheorie) und in das Betriebsvermögen
  (unechte Realteilung nach dem Realteilungserlass vom 19.12.2018) – und **Teil IV –
  Realteilung, GmbH & Co. KG** (6 Kapitel): Konkurrenzen und Voraussetzungen der
  Realteilung, die Abgrenzung der echten von der unechten Realteilung nach BFH IV R 31/14,
  der Gegenstand der Realteilung mit dem Gesamtplan-Urteil BFH IV R 8/12 im Volltext,
  Spitzen- und Wertausgleich mit laufendem Gewinn, die Kapitalkontenanpassungsmethode, die
  dreijährige Sperrfrist des § 16 Abs. 3 Satz 3 EStG und die Siebenjahresfrist des
  § 16 Abs. 5 EStG samt Rechtsfolgen sowie ein vollständig durchgerechneter Beispielsfall
  zur Realteilung mit Spitzenausgleich; dazu die GmbH & Co. KG mit ihren Erscheinungsformen,
  Sonderbetriebsvermögen I und II, den Beteiligungsgrenzen von 10 % und 25 % nach
  BFH IV R 1/12 und IV R 15/19, den Fallgruppen der OFD Nordrhein-Westfalen zur funktional
  wesentlichen Betriebsgrundlage, den Gewinnausschüttungen im Teileinkünfteverfahren und
  der Tätigkeitsvergütung. Teil V die Gründung einer Personengesellschaft und das
  Umwandlungssteuerrecht: die vier Gründungsvarianten und die Aufteilung des Tauschs in
  Veräußerungs- und Anschaffungsvorgang, die Einbringung von Privatvermögen nach
  §§ 17, 20, 23 EStG mit Ermittlungsschema, die zwingende Buchwertfortführung nach
  § 6 Abs. 5 Satz 3 Nr. 1 EStG mit ihren drei Ausnahmen, die sachlichen, personellen und
  speziellen Voraussetzungen des § 24 UmwStG, das Bewertungswahlrecht des § 24 Abs. 2
  UmwStG mit Brutto- und Nettomethode, Zwischenwertansatz samt AfA-Folgen und Ansatz des
  gemeinen Wertes bei Einzel- und Gesamtrechtsnachfolge sowie der Eintritt in eine
  bestehende Personengesellschaft. Das Skript ist damit vollständig; Beispiele, Bilanzen
  und Musterlösungen stehen im Wortlaut.
  Prüfung: `npm run check:k3-persg-skript-melzer`
- **AO-Skript (Jacobs)** (Reiter „Skript (Jacobs)“ im Campus Abgabenordnung): das
  Lehrgangsskript „Steuerliches Verfahrensrecht“ von Hans-Jürgen Jacobs (Mai 2025,
  Rechtsstand 2025) im Wortlaut, Teil I mit den Abschnitten 1 bis 3 sowie dem
  vorangestellten Hinweis zur Viertagesfrist ab dem 01.01.2025. Abschnitt 1: Aufbau der AO,
  Zusammenspiel von materiellem und formellem Recht, Grundsätze der Rechtsanwendung mit
  3-Stufentheorie, Tatbestand und Rechtsfolge, der Schwarzgeld-Fall Samson/Grobi, Ermessen
  nach § 5 AO (Muss-, Soll- und Kann-Vorschriften), Rechtsnormen nach § 4 AO und die
  Verfahrensabläufe. Abschnitt 2: Ermittlungsverfahren der §§ 85 bis 104 AO mit
  Besteuerungsgrundsätzen, Legalitäts- und Opportunitätsprinzip, dem Erbfall Max Lieb,
  Untersuchungsgrundsatz und Verhältnismäßigkeit, Risikomanagement und
  Belegvorhaltepflicht, Mitwirkungspflichten und ihren Rechtsfolgen, Beweismitteln und der
  Reihenfolge der Ermittlungen, dem großen Übungsfall Egon Ernie mit acht Fragen und
  vollständigen Lösungshinweisen, den Auskunftsverweigerungsrechten samt
  Verwertungsverbot, Beweislast und Beweislastumkehr sowie der tatsächlichen
  Verständigung. Abschnitt 3: Verwaltungsakte von § 124 AO über die Einteilung der
  Steuerverwaltungsakte, das Prüfungsschema zu Entstehungs- und Bekanntgabefehlern, Form
  und Inhalt nach §§ 119 bis 121, 155 und 157 AO, den abgedruckten Einkommensteuerbescheid
  mit seinen 26 selbständigen Verwaltungsakten, Nichtigkeit nach § 125 AO,
  Gesamtrechtsnachfolge mit dem Übungsfall Trunk bis zur Bekanntgabe nach §§ 122, 122a AO.
  Aus Teil II ist Abschnitt 5 eingepflegt: der Vorbehalt der Nachprüfung nach § 164 AO
  (Anwendungsbereich, Gesamtüberprüfungsrecht, Einspruch gegenüber Änderungsantrag,
  Aufhebung und Wegfall kraft Gesetzes, Prüfungsfolge, Übungsfall zur Teilverjährung), die
  vorläufige Steuerfestsetzung nach § 165 AO (tatsächliche Ungewissheit und die
  Katalogfälle des Satzes 2, Bestimmbarkeit des Vermerks, Berichtigungsrahmen und
  Anfechtungsbeschränkung, der Übungsfall zur Ferienwohnung auf Sylt mit zwei Varianten
  und der Jahresfrist des § 171 Abs. 8 AO) sowie die Steueranmeldung nach §§ 167, 168 AO
  (die beiden gesetzlichen Fiktionen, Voranmeldung gegenüber Jahreserklärung, der
  Hinterziehungsfall Lammers und der Übungsfall Kelle zur Wahl zwischen Korrektur- und
  Einspruchsverfahren). Vorangestellt ist der Stoffverteilungsplan mit dem vollständigen
  Inhaltsverzeichnis aller fünfzehn Abschnitte. Abschnitt 6 bringt die
  Festsetzungsverjährung der §§ 169 bis 171 AO: Gegenstand und Wirkung, das
  Prüfungsschema, Anlaufhemmung bei Antrags- und Pflichtveranlagung samt
  Dreijahresgrenze, die vier Fristdauern und der Grundsatz der Teilverjährung, fünf
  Rechenbeispiele, die Wahrung der Frist durch Aufgabe zur Post und beim Datenabruf
  sowie die Ablaufhemmungen des § 171 AO – Gesamtübersicht über alle fünfzehn
  Absätze, dazu ausführlich Absatz 2 (offenbare Unrichtigkeit, Übungsfall Müller mit
  vier Abwandlungen), Absatz 3 und 3a (Antrag gegenüber Einspruch), Absatz 4
  (Außenprüfung mit Unterbrechung und Höchstfrist, Fälle Flimmer und Durst) sowie die
  Neuregelungen ab dem 01.01.2025 und die Absätze 5 und 7.
  Aus Teil III ist Abschnitt 7 (Korrektur von Verwaltungsakten) bis Seite 79 eingepflegt:
  die Korrekturterminologie und die Schnellübersicht zum Anwendungsbereich jeder
  Vorschrift, die dreistufige Systematik (§ 164 Abs. 2 AO – Korrekturvorschriften für
  endgültige Bescheide – Rechtsfehlersaldierung), die Berichtigung nach § 129 AO mit dem
  Fall Maja und drei weiteren Fällen, § 172 Abs. 1 Satz 1 Nr. 2a AO (schlichte Änderung
  gegenüber Einspruch) und Nr. 2c AO (unlautere Mittel), § 173 AO mit Tatsachenbegriff,
  nachträglichem Bekanntwerden, Rechtserheblichkeit, dem unterschiedlichen
  Tatsachenbegriff bei Einkommen- und Umsatzsteuer, grobem Verschulden und der Ausnahme
  des § 173 Abs. 1 Nr. 2 Satz 2 AO, der Änderungssperre des § 173 Abs. 2 AO und fünf
  Übungsfällen (Kiosk, Umsatzsteuer-Schätzung mit Rechtsfehlersaldierung nach § 177 AO,
  Geschäftsführergehalt, Selbstanzeige, Umsatzsteuer-Vorauszahlung), § 173a AO mit
  Gesetzesbegründung, Abgrenzung zu §§ 129 und 173 AO und dem vierteiligen Fallbeispiel
  Egon Müller, § 174 AO in allen fünf Absätzen – Überblick über positiven und negativen
  Widerstreit, das Tatbestandsmerkmal „bestimmter Sachverhalt“, Objekt-, Subjekt-,
  Perioden- und Zuständigkeitskollision, vier Fälle zu Absatz 1 (Schlampig mit drei
  Abwandlungen zur Jahresfrist, zusammenveranlagte Eheleute, Sonderbetriebsvermögen), das
  Fallbeispiel Dachreparatur zu Absatz 2, das Fallbeispiel Steinreich mit zwei Varianten
  zu Absatz 3 und der Abhilfebescheid zu Absatz 4 – sowie § 175 Abs. 1 Satz 1 Nr. 1 AO
  mit steuerlichen und außersteuerlichen Grundlagenbescheiden, den Ablaufhemmungen des
  § 171 Abs. 10 AO, der Abgrenzung zu § 35b GewStG, dem Fallbeispiel Architekt A und dem
  Umfang der Anpassung des Folgebescheides. Ab Seite 80 gibt der Drive-Connector das PDF
  nicht mehr aus; das ist in `docs/offene-quellen.md` vermerkt.
  Aus Teil IV ist Abschnitt 8 (außergerichtliches Rechtsbehelfsverfahren, §§ 347 bis
  367 AO) begonnen: die Durchbrechung der Bestandskraft und das Verhältnis von Korrektur-
  und Rechtsbehelfsverfahren, § 132 AO mit dem Fallbeispiel zu Abhilfe-, Teilabhilfe- und
  Änderungsbescheid, das Schaubild des Instanzenzugs vom Finanzamt über Finanzgericht und
  Bundesfinanzhof bis zum Bundesverfassungsgericht, der dreispaltige Lösungsaufbau aus
  Zulässigkeit, Begründetheit und Entscheidung samt Tenor und Verböserung, das Beispiel
  Nils zur verspäteten Einspruchseinlegung mit zwei Abwandlungen, die Statthaftigkeit nach
  § 347 AO mit der Auslegung zwischen Einspruch und schlichtem Änderungsantrag, der
  Umdeutung bei Rechtsirrtum und dem Untätigkeitseinspruch, Form und Inhalt nach § 357 AO
  mit dem Fallbeispiel zur Ablaufhemmung des § 171 Abs. 3a AO, Einspruchsfrist,
  Anbringungsbehörde und Fristberechnung mit dem Beispiel Fritz Frucht, fünf
  Rechenbeispielen zur Viertagesfrist und dem Fallbeispiel Max Krümelmonster zur
  Empfangsvollmacht, die Wiedereinsetzung nach § 110 AO mit acht Fallgruppen und den
  Übungsfällen Raab-GmbH und Arno Ehrlich, die Beschwer nach § 350 AO, die
  Einspruchsbefugnis nach § 352 AO mit Prüfungsschema, der bis zum 31.12.2023 und der ab
  dem 01.01.2024 geltenden Fassung samt Übergangsregelungen und dem dreiteiligen
  Fallbeispiel Sonne-KG, das beide Rechtsstände Zeile für Zeile gegenüberstellt, die
  Hinzuziehung nach § 360 AO, die Begründetheit mit Gesamtüberprüfungsrecht, Tenor,
  Abhilfebescheid und Teileinspruchsentscheidung, die Anfechtungsbeschränkung des § 351
  Abs. 2 AO mit den Fällen Grundstücks-GbR Potsdamer Platz und Karl Knick sowie der
  Änderungsumfang nach § 367 Abs. 2 und § 351 Abs. 1 AO mit Verböserung, Rücknahme des
  Einspruchs, Prüfungsschema und den beiden durchgerechneten Beispielen Dieter Kugel
  (Anfechtungsrahmen 108.000/100.000/98.000 €) und Anfechtungsrahmen 20.000/18.000/
  17.500 €. Abschnitt 8 ist damit vollständig.
  Abschnitt 9 (Klage- und Revisionsverfahren nach der FGO) ist bis zur Abbruchstelle des
  Connectors auf Seite 17 eingepflegt: die zwölf Sachurteilsvoraussetzungen vom
  Finanzrechtsweg über Aktiv- und Passivlegitimation bis zu Form und Inhalt der
  Klageschrift, die beiden Fallgruppen der Klagearten, Anfechtungs- und
  Verpflichtungsklage mit vier Musteranträgen (Haftungsbescheid, Ansparrücklage,
  gebundener Verwaltungsakt und Bescheidurteil bei Ermessensentscheidungen), vier
  Übungsfälle zur richtigen Klageart, die Fortsetzungsfeststellungsklage mit den beiden
  BFH-Fallgruppen und dem zweispaltigen Beispiel zur Abgrenzung von der Erledigung in der
  Hauptsache, das erfolglose Vorverfahren nach § 44 FGO, die Sprungklage mit
  durchgerechnetem Fristbeispiel, die Untätigkeitsklage mit ihren drei Voraussetzungen
  sowie Klagebefugnis, Beiladung nach dem MoPeG und die Berechnung der Klagefrist über
  § 222 ZPO.
  Aus **Teil V** ist Abschnitt 11 (Steuererhebungsverfahren, §§ 218 bis 240 AO) begonnen.
  Der Teil I ordnet Steuerfestsetzung, Anrechnungs-Verwaltungsakt und Steuererhebung
  einander zu – mit dem durchgerechneten Überblicksschaubild (ESt 140.000 ./. LSt 20.000
  ./. Vorauszahlungen 90.000 = 30.000 € Nachzahlung, fällig am 15.09.03) –, nennt die
  Voraussetzungen des § 218 Abs. 1 AO mit Beispielskatalog und Prüfungsfolge, den
  Sonderfall der Säumniszuschläge und das Beispiel der auf die Grobi-GmbH verschmolzenen
  Rumpel-GmbH, deren gegen die erloschene Gesellschaft gerichteter Umsatzsteuerbescheid
  nichtig ist. Der Teil II behandelt den Abrechnungsbescheid des § 218 Abs. 2 AO: seine
  Voraussetzungen und Anwendungsfälle, die Gegenüberstellung von Einwendungen gegen
  Festsetzung und Abrechnung, den Vorrang vor den §§ 130, 131 AO, die beiden Beispielsfälle
  Baghira (getrennte Korrektur von Steuerbescheid nach § 173 Abs. 1 Nr. 1 AO und
  Anrechnungsverfügung nach § 130 Abs. 1 AO) und Leo Lügner (arglistige Täuschung nach
  § 130 Abs. 2 Nr. 2 AO, Steuerhinterziehung und die zehnjährige Zahlungsverjährung nach
  § 228 Satz 2 AO) sowie die Korrekturvorschrift des § 218 Abs. 3 AO für widerstreitende
  Anrechnungsverfügungen bei Ehegatten und Lebenspartnern. Der **Teil III** (Erlöschen von
  Ansprüchen, § 47 AO) beginnt mit der Übersicht über die Erlöschenstatbestände im
  Festsetzungs- und im Erhebungsverfahren und dem Unterschied zwischen Festsetzungs- und
  Zahlungsverjährung; es folgt die **Aufrechnung nach § 226 AO** mit den Wortlauten der
  §§ 387 bis 389 BGB, den vier Voraussetzungen der Aufrechnungslage und zwei Übersichten,
  die Fälligkeit der Aktivforderung und Entstehung der Passivforderung getrennt danach
  aufschlüsseln, ob das Finanzamt oder der Steuerpflichtige aufrechnet. Dazu kommen die
  beiden Übungsfälle Anton Arm und Berta Brot mit vollständiger Fristberechnung und der
  Frage nach Säumniszuschlägen (600 € für vier angefangene Monate), die Rechtsfolgen des
  § 389 BGB und ihre Grenze in § 240 Abs. 1 Satz 5 AO samt durchgerechnetem Beispiel, die
  Rechtsbehelfe gegen Aufrechnungen beider Seiten und der Musterfall, in dem das Finanzamt
  das Umsatzsteuerguthaben des Ehemannes mangels Gegenseitigkeit nicht gegen die
  Umsatzsteuerrückstände der Ehefrau aufrechnen kann. Es folgt § 406 BGB bei abgetretenen
  Steuerforderungen – beide Alternativen mit Übersicht, ein Beispiel zur ersten und der
  Übungsfall Bruno Stein, in dem das Finanzamt nur mit der Einkommensteuer 02 wirksam gegen
  den an die Bank abgetretenen Erstattungsanspruch aufrechnen kann – und die vollständige
  **Zahlungsverjährung der §§ 228 bis 232 AO**: Abgrenzung zur Festsetzungsverjährung,
  Fristbeginn nach § 229 AO einschließlich Anlaufhemmung, Klarstellung bei Korrekturen und
  Haftungsbescheid ohne Zahlungsaufforderung, Fünf- und Zehnjahresfrist, Hemmung nach
  § 230 Abs. 2 AO, die abschließenden Unterbrechungstatbestände des § 231 AO mit
  Teilverjährung und Neubeginn – durchgerechnet an einem Beispiel mit Stundung und Mahnung
  –, Prüfungsschema, Rechtsfolgen und der zusammenfassende Übungsfall Hans Glück, in dem
  von 196.000 € Rückständen nach getrennter Prüfung von Einkommensteuer, Umsatzsteuer,
  Säumniszuschlägen und Haftungsschuld noch 76.000 € durchsetzbar sind. Die **Teile IV und
  V** schließen den Abschnitt ab: die Säumniszuschläge des § 240 AO mit Entstehung ohne
  Verschulden, den Schonfristen je nach Zahlungsart, der Berechnung von einem Prozent je
  angefangenem Monat und der Geltendmachung über den Abrechnungsbescheid; sowie sämtliche
  Zinstatbestände der §§ 233 bis 239 AO – der Zinsbescheid als steuerbescheidgleicher
  Verwaltungsakt mit Kleinbetragsregelung, Korrektur und zweijähriger Festsetzungsfrist, die
  **Vollverzinsung des § 233a AO** mit fünfzehnmonatiger Karenzzeit, der Gegenüberstellung
  von Soll- und Istverzinsung, den Sonderfällen des § 233a Abs. 2a AO, der rückwirkenden
  Absenkung auf 0,15 % pro Monat nach dem BVerfG-Beschluss vom 08.07.2021 samt
  Teilverzinsungszeiträumen und drei durchgerechneten Fallbeispielen (600 €, 348 € und
  1.095 €), und schließlich Stundungs- (§ 234 AO), Hinterziehungs- (§ 235 AO), Prozess-
  (§ 236 AO) und Aussetzungszinsen (§ 237 AO) mit Zinslauf, Zinsschuldner,
  Ausschlussgründen und Konkurrenzen. **Abschnitt 11 ist damit vollständig.**
  Aus demselben Band ist **Abschnitt 12** (Außenprüfung, §§ 193 bis 207 AO) begonnen. Der
  Teil I grenzt die Außenprüfung gegen betriebsnahe Veranlagung, Umsatzsteuer-, Lohnsteuer-
  und Kassen-Nachschau sowie die Steuerfahndung ab – mit dem Hinweis, dass nur die
  Außenprüfung die Ablaufhemmung des § 171 Abs. 4 AO auslöst –, nennt die Rechtsgrundlagen
  einschließlich der BpO und behandelt die Zulässigkeit nach § 193 AO: die uneingeschränkte
  Prüfung bei Gewinneinkünften und bei Steuerpflichtigen im Sinne des § 147a AO
  (Aufbewahrungspflicht ab 500.000 € Überschusseinkünften, keine Saldierung, getrennte
  Betrachtung bei Ehegatten, Prüfbarkeit auch der fünf Folgejahre), die eingeschränkte
  Prüfung nach Absatz 2 mit dem Beispiel des Vermieters von zwanzig Mehrfamilienhäusern in
  zwei Varianten, sowie Ehegatten als getrennte Prüfungssubjekte mit einem dreifach
  durchgeprüften Beispiel und die Gesellschaft als Subjekt der Prüfung nach § 194 Abs. 1
  Satz 3 und Abs. 2 AO. Der Teil II bringt den sachlichen und zeitlichen Prüfungsumfang mit
  den Größenklassen des § 3 BpO, der Anschlussprüfung bei Großbetrieben, dem
  Dreijahreszeitraum für Mittel-, Klein- und Kleinstbetriebe, der zeitnahen Außenprüfung
  nach § 4a BpO und den Erweiterungstatbeständen des § 4 Abs. 3 Satz 2 BpO einschließlich
  der 1.500-Euro-Grenze der BFH-Rechtsprechung. Der **Teil III** behandelt die
  Prüfungsanordnung der §§ 196, 197 AO: sie ist ein Bündel selbständig anfechtbarer
  Verwaltungsakte – je Steuerart und Veranlagungszeitraum einer, dazu Prüfungsbeginn und
  Prüfungsort –, während der Name des Prüfers keinen Verwaltungsakt darstellt; es folgen
  Form und Begründung (Rechtsgrundlage genügt bei der Routineprüfung, nicht bei der
  Erweiterung), die Bekanntgabe zwei bis vier Wochen vorher und ihr Zusammenspiel mit der
  Ablaufhemmung des § 171 Abs. 4 AO, die Sperrwirkung für die Selbstanzeige nach
  § 371 Abs. 2 AO samt der weiterhin möglichen Teilselbstanzeige, ein Fallbeispiel zur
  verspäteten Erweiterungsanordnung und die Bekanntgabe an Eheleute, juristische Personen,
  Personengesellschaften und Gesamtrechtsnachfolger. Dazu kommen zwei Übungsfälle: die
  Eheleute Meyer mit acht Fragen von der Zulässigkeit über Prüfungsbeginn und Prüfername
  bis zu den vier Korrekturvorschriften für die Jahre 01 bis 04, und ein Fall zur
  Ablaufhemmung, in dem die Frist für die Einkommensteuer mit der Unanfechtbarkeit des
  Änderungsbescheids am 05.05.08 und für die Umsatzsteuer drei Monate nach der Mitteilung
  ohne Änderung am 03.07.08 endet. Der **Teil IV** führt durch die Durchführung der Prüfung:
  Prüfungsbeginn und Prüfungsort als selbständige Verwaltungsakte mit dem Vorrang der
  Geschäftsräume nach § 6 BpO, die Prüfungsgrundsätze einschließlich Kontrollmitteilungen,
  die erweiterten Mitwirkungspflichten des § 200 AO und die Frage, wann ein Auskunfts- oder
  Vorlageverlangen zum Verwaltungsakt wird, der digitale Datenzugriff nach § 147 Abs. 5 und
  6 AO mit zwei BFH-Entscheidungen zur Lesbarmachung am Bildschirm und zum Sperren von
  Einzelkonten, Schlussbesprechung und Prüfungsbericht mit den Fällen, in denen beides
  entfällt, die abgekürzte Prüfung des § 203 AO, der begrenzte Vertrauensschutz bei der
  Abschnittsbesteuerung mit dem Achtzehnjahresbeispiel sowie die verbindliche Zusage der
  §§ 204 bis 207 AO samt den drei Tatbeständen für den Wegfall der Bindungswirkung. Der
  **Teil V** schließt mit den Neuregelungen des DAC-7-Umsetzungsgesetzes: Anforderung von
  Buchführungsunterlagen und Prüfungsschwerpunkte nach § 197 Abs. 3 und 4 AO, die
  Bekanntgabefrist des § 197 Abs. 5 AO und ihre Wirkung auf die Fünfjahresgrenze des
  § 171 Abs. 4 Satz 3 AO – durchgerechnet in zwei Beispielen bis zum 31.12.2035 – und der
  bindende Teilabschluss nach § 180 Abs. 1a AO. An dieser Stelle bricht die maschinelle
  Ausgabe der Quelldatei ab; der Rest ist in `docs/offene-quellen.md` vermerkt.
  Aus Teil VI ist Abschnitt 14 (Steuerstraf- und Bußgeldrecht) begonnen: die Abgrenzung von
  Steuerstraftat und Steuerordnungswidrigkeit mit Legalitäts- und Opportunitätsprinzip, der
  Aufbau der §§ 369 bis 412 AO, die Auswirkungen auf die Festsetzungsverjährung – Zehn- und
  Fünfjahresfrist, Grundsatz der Teilverjährung und die Ablaufhemmungen des § 171 Abs. 4, 5,
  7 und 9 AO mit drei durchgerechneten Fallbeispielen (Kontrollmitteilung, erweiterte
  Außenprüfung, Abgrenzung von § 153 AO und § 371 AO) –, die Korrekturvorschriften bei
  Hinterziehung und Leichtfertigkeit samt Rechtsfehlersaldierung verjährter Fehler nach
  § 177 AO und den unlauteren Mitteln des § 172 Abs. 1 Satz 1 Nr. 2c AO, das Verhältnis von
  Besteuerungs- und Strafverfahren nach § 393 AO, Haftung und Hinterziehungszinsen sowie die
  Strafverfolgungsverjährung nach §§ 78ff StGB und § 376 AO mit dem Fall Theo Trickreich, der
  50.000-Euro-Grenze des BGH und den Strafmaß-Leitlinien bei sechs- und siebenstelligen
  Hinterziehungsbeträgen. Aus Teil II stehen das vollständige Prüfungsschema zu § 370 AO
  (Tathandlung durch positives Tun und durch Unterlassen, doppelter Taterfolg, Kausalität,
  Vorsatz, Rechtswidrigkeit, Schuld sowie Strafausschließungs- und Strafaufhebungsgründe),
  die Erläuterungen zu den einzelnen Tatbestandsmerkmalen, die Anzahl der Taten mit zwei
  Beispielen zur Tatmehrheit nach § 53 StGB, das durchgerechnete Fallbeispiel zum
  Boss-Anzug und den verschwiegenen Bausparprovisionen (Taterfolg 2.400 €, materiell
  zutreffende Steuer 48.000 €, festsetzbar nur 47.400 €) sowie der Zeitpunkt des Taterfolgs
  bei Veranlagungssteuern mit der 95-Prozent-Grenze, bei Schätzungen in zwei Fallgruppen
  und bei der Umsatzsteuer einschließlich des Verhältnisses von zwölf Voranmeldungen zur
  Jahreserklärung nach dem BGH-Urteil vom 13.07.2017. Dazu kommen das strafrechtliche
  Kompensationsverbot des § 370 Abs. 4 Satz 3 AO mit der Abgrenzung von tatzugehörigen und
  tatfremden Gründen, der neuen Vorsteuer-Rechtsprechung des BGH, dem
  Gebrauchtwagen-Übungsfall (achtspaltiges Lösungsschema über vier Steuerarten und
  Zeiträume) und dem durchgerechneten Beispiel zu den Auswirkungen auf Festsetzungsfrist
  und Korrektur (Berichtigungsrahmen 56.000/40.000/36.000 €, Ergebnis 46.000 €) sowie zwei
  Übungsfälle: der Stpfl. Geizig in drei Varianten, bei denen derselbe objektive Tatbestand
  je nach subjektiver Seite zu einem Tatbestandsirrtum, einer leichtfertigen
  Steuerverkürzung nach § 378 AO oder einer Hinterziehung über 5.200 € führt, und der
  Rentner Glück mit der Steuerverkürzung durch Unterlassen und der 95-Prozent-Grenze.
  Weiter eingepflegt sind die Steuerhinterziehung bei Personengesellschaften – der
  unrichtige Feststellungsbescheid als vollendete Tat nach dem BGH-Urteil vom 10.12.2008,
  der weitere Taterfolg beim Folgebescheid ohne neue Tathandlung, die Aufteilung in eigenen
  und fremden Vorteil nach der Beteiligungsquote und die Folgen für Korrektur,
  Feststellungsfrist und Haftungsbescheid nach § 191 Abs. 3 Satz 3 AO –, die
  Zwei-Säulen-Theorie des BGH bei gleichzeitig verkürzter Umsatzsteuer und fingierter
  Vorsteuer, der ungerechtfertigte Steuervorteil des § 370 Abs. 4 Satz 2 AO mit dem
  Übungsfall zur erschlichenen Stundung, Täterschaft und Teilnahme mit Anstiftung und
  Beihilfe sowie der subjektive Tatbestand mit Vorsatzarten, Tatbestandsirrtum,
  Leichtfertigkeit, Rechtswidrigkeit, Schuld und der Abgrenzung von Selbstanzeige und
  Berichtigung nach § 153 AO. Hinzu kommen die Berichtigungspflicht des § 153 AO im
  Einzelnen – objektive Unrichtigkeit, nachträgliches Erkennen, Unverzüglichkeit der Anzeige
  und die erweiterte Pflicht des § 153 Abs. 4 AO ab 2025 – mit dem Beispiel Amadeus in vier
  Abwandlungen sowie der Erbfall nach § 153 Abs. 1 Satz 2 AO, in dem die vorsätzlich
  unterlassene Anzeige des Erben eine neue fünfzehnjährige Verjährungsfrist auslöst und über
  § 171 Abs. 7 AO zu einer steuerlich wirksamen Frist von insgesamt dreißig Jahren führt.
  Den Teil III bildet der zusammenfassende Übungsfall zur Gaststätten- und Großküchen GmbH:
  über drei Jahre verschwiegene Erlöse von je 120.000 € bei Körperschaft- und
  Umsatzsteuer, eine durch die Prüfungsanordnung gesperrte Selbstanzeige
  (§ 371 Abs. 2 Satz 1 Nr. 1a AO), eine vom Finanzamt rechtsfehlerhaft gestrichene Spende
  als tatfremder Grund und ein nicht erfasster Wareneinkauf als tatzugehöriger Grund, dazu
  ein Vorsteuerabzug ohne ordnungsgemäße Rechnung. Ergebnis sind sechs selbständige
  Straftaten (KSt 18.000/18.000/12.000 €, USt 22.800/22.800/24.700 €) sowie die
  Entscheidung über die drei Einsprüche mit Abhilfebescheiden zur Körperschaftsteuer und
  einer verbösernden Einspruchsentscheidung zur Umsatzsteuer 16 auf 82.900 €.
  Aus Teil IV ist die Straffreiheit bei wirksamer Selbstanzeige nach § 371 AO eingepflegt:
  die Abgrenzung zu § 153 AO, die sechs Voraussetzungen einer wirksamen Selbstanzeige, die
  steuerlichen Rechtsfolgen, die sie gerade nicht beseitigt (verlängerte Festsetzungsfrist,
  Ablaufhemmung nach § 171 Abs. 9 AO, Durchbrechung der Änderungssperre, Haftung und
  Hinterziehungszinsen), die Selbstanzeige als persönlicher Strafaufhebungsgrund nach § 28
  Abs. 2 StGB mit dem Beispiel des bestochenen Buchhalters sowie die Berichtigungserklärung
  im Einzelnen – Materiallieferung durch den Täter mit zwei Negativbeispielen, die
  Rechtsfolge der Unvollständigkeit, Formfreiheit, die getrennte Betrachtung je Steuerart,
  das Vollständigkeitsgebot mit der Geringfügigkeitsgrenze von fünf Prozent und die
  Berechnung des Zehnjahreszeitraums nach den AStBV (St) 2025. Dazu kommt der
  durchgerechnete Fall über zwölf Veranlagungszeiträume mit beiden Prüfungsschritten –
  strafrechtliche Verjährung nach §§ 78, 78a StGB und fiktive Zehnjahresfrist, die bei
  aktivem Tun an die Abgabe der Erklärung und bei Unterlassen an den Taterfolg anknüpft –
  samt Abwandlung für nicht abgegebene Erklärungen, sowie zwei Beispiele zum
  Vollständigkeitsgebot: die verschwiegene zweite Bank, bei der die Teilselbstanzeige auch
  für den offenbarten Teil keine Straffreiheit bringt, und die verschwiegene Erbschaft, bei
  der die getrennte Betrachtung der Steuerarten eine zweite Selbstanzeige offenhält. Es
  folgen die Sperrgründe des § 371 Abs. 2 AO im Einzelnen: die Prüfungsanordnung nach
  Nr. 1a, die für alle Tatbeteiligten wirkt, auch wenn sie davon nichts wissen, ihr
  sachlich und zeitlich beschränkter Umfang mit der dadurch möglichen Teilselbstanzeige und
  ihr Wiederaufleben nach Bekanntgabe der Änderungsbescheide, die Einleitung des
  Straf- oder Bußgeldverfahrens nach Nr. 1b, das Erscheinen des Amtsträgers zur Prüfung
  (Nr. 1c), zur Ermittlung einer Steuerstraftat (Nr. 1d) und zur Nachschau (Nr. 1e), die
  Tatentdeckung nach Nr. 2 mit objektiver und subjektiver Seite und dem Übungsfall
  Sparstrumpf in drei Varianten sowie die 25.000-Euro-Grenze der Nr. 3 mit den gestaffelten
  Zuschlägen des § 398a AO (10, 15 und 20 Prozent) und der schwere Fall nach Nr. 4.
  Den Abschluss bilden die Teilselbstanzeige bei Umsatzsteuer- und Lohnsteueranmeldungen
  nach § 371 Abs. 2a AO – mit der Ausnahme vom Vollständigkeitsgebot für Voranmeldungen,
  ihrer Grenze bei der Jahresanmeldung und dem Fall, in dem drei korrigierte
  Jahreserklärungen 39 Steuerstraftaten abdecken – sowie die fristgerechte Nachzahlung nach
  § 371 Abs. 3 AO mit dem Prinzip der Schadenswiedergutmachung, wegen dessen das
  Kompensationsverbot hier gerade nicht gilt, und vier Fallgestaltungen zur Hinterziehung
  zum Vorteil eines anderen. Den Abschluss bilden der Teil V mit der leichtfertigen
  Steuerverkürzung als Ordnungswidrigkeit – eigenes Prüfungsschema zu § 378 AO, der
  eingeschränkte Täterkreis, die bußgeldrechtliche Selbstanzeige, die anders als § 371 AO
  auch nach Prüfungsanordnung und Tatentdeckung offensteht, sowie Steuergefährdung
  (§ 379 AO) und Gefährdung der Abzugssteuern (§ 380 AO, § 26b UStG) mit ihrer
  Subsidiarität – und der Teil VI mit der Ablaufhemmung des § 171 Abs. 9 AO, die je nach
  Anzeige nach §§ 153, 371 oder 378 Abs. 3 AO auf einer Vier-, Zehn- oder Fünfjahresfrist
  aufsetzt, samt Fallbeispiel mit zwei Varianten. **Abschnitt 14 ist damit vollständig.**
  Aus Teil VI ist außerdem Abschnitt 15 (Vollstreckungsrecht, §§ 249 bis 327 AO) begonnen.
  Der Teil I ordnet die Vollstreckung wegen Geldforderungen in das Zusammenspiel von AO, BGB
  (§§ 90ff, 1120, 1362), ZPO (§§ 739, 769ff, 811ff, 865), ZVG sowie Vollstreckungs- und
  Vollziehungsanweisung ein und stellt die vier Normblöcke der §§ 249–267, 281–308, 309–321
  und 322–326 AO gegenüber. Der Teil II bringt die sechs allgemeinen Vollstreckungs-
  voraussetzungen: den vollziehbaren Verwaltungsakt des § 249 Abs. 1 AO mit den vier
  Fallgruppen zum wirksamen Verwaltungsakt – Bekanntgabefehler (Vollstreckungsmaßnahme nur
  anfechtbar, Heilung über § 126 AO möglich), Entstehungsfehler (Nichtigkeit, keine Heilung,
  Aufhebung nach § 257 Abs. 1 Nr. 2 AO), bloße Rechtswidrigkeit (§ 256 AO) und anhängiger
  Rechtsbehelf (§§ 361 Abs. 1 AO, 69 Abs. 1 FGO) – jeweils mit den Leitsätzen 1 bis 3 des BFH
  in BStBl II 2003, S. 109; den vollstreckbaren Verwaltungsakt des § 251 Abs. 1 AO; das
  Leistungsgebot des § 254 AO mit dem Anrechnungs-Verwaltungsakt zum Einkommensteuerbescheid
  und den drei Fallgruppen der Gesamtrechtsnachfolge; die Steueranmeldung als gesetzliches
  Leistungsgebot nach § 254 Abs. 1 Satz 4 AO samt dem Übungsfall zur Umsatzsteuer-
  Voranmeldung 08/01, dessen drei Varianten in einer vierspaltigen Lösungstabelle bis zum
  Vollstreckungsbeginn am 11.09.01, 19.09.01 und 07.11.01 durchgerechnet sind;
  Vollstreckungsschonfrist, Fälligkeit nach § 220 AO und die Mahnung als Sollvorschrift. Der
  Teil III behandelt Einstellung und Beschränkung der Vollstreckung nach § 257 AO mit zwei
  Fallbeispielen zur Pkw-Pfändung. Der **Teil IV** (Vollstreckung wegen Geldforderungen in
  bewegliche Sachen, §§ 281ff AO) ist vollständig: Pfändung als Verwaltungsakt i. S. v.
  § 118 AO, Zuständigkeit des Vollziehungsbeamten und das vierstufige Prüfungsschema der
  besonderen Vollstreckungsvoraussetzungen; die Abgrenzung der beweglichen Sache von
  wesentlichem Bestandteil (§ 94 BGB), Scheinbestandteil (§ 95 BGB) und Grundstückszubehör
  (§§ 97, 98, 1120 BGB, § 865 ZPO) mit dem Fertiggaragen-Beispiel in zwei Varianten, dem
  Ziegelei-Übungsfall Karl Dach samt Abwandlung und dem Prüfungsschema zum
  Hypothekenverband; die Sonderfälle bei Wertpapieren und beim Sparbuch (§§ 302, 312,
  315 Abs. 2 Satz 5 AO); Gewahrsam nach § 286 AO einschließlich evidentem Dritteigentum;
  Pfändungsverbote (§ 811 ZPO) und die Formerfordernisse der Pfändung „in der rechten
  Weise“ und „im rechten Umfang“; Pfändungspfandrecht und Verstrickung; die Rechtsbehelfe
  des Schuldners und des Dritten mit Drittwiderspruch und Drittwiderspruchsklage nach
  § 262 AO und dem durchgeprüften Beispiel des Taxiunternehmers S mit vier Einwendungen;
  sowie die Vollstreckung gegen Ehegatten in drei Fallgruppen mit der Doppelvermutung des
  § 263 AO (§ 1362 BGB für das Eigentum, § 739 ZPO für den Gewahrsam) und Prüfungsschema.
  Der **Teil V** (Einwendungen gegen Vollstreckungsmaßnahmen und Rechtsschutz) steht
  vollständig: das Vollstreckungsverfahren als selbständiges Verwaltungsverfahren, die
  Sperre des § 256 AO und die Pflicht der Vollstreckungsstelle zur Unterrichtung der
  zuständigen Stelle, die Einwendungen gegen Zulässigkeit sowie Vornahme und Gestaltung der
  Vollstreckung, der Katalog der statthaften Einsprüche, die Einspruchsfristen mit der
  Unterscheidung zwischen Forderungspfändung (§ 356 Abs. 2 AO) und Pfändung durch den
  Vollziehungsbeamten, sowie vorläufiger Rechtsschutz durch Aussetzung der Vollziehung,
  einstweilige Anordnung (§ 114 FGO) und Vollstreckungsaufschub (§ 258 AO). Aus dem
  **Teil VI** ist der Übungsfall 1 (Schriftsteller Benno Becker) mit dem vollständigen
  Sachverhalt und den Lösungshinweisen des Teils VII zu beiden Aufgaben eingepflegt: die
  allgemeinen Vollstreckungsvoraussetzungen, die Unpfändbarkeit der PC-Anlage als
  Arbeitsmittel nach § 295 Satz 1 AO iVm § 811 Abs. 1 Nr. 5 ZPO, die wirksame Pfändung der
  Stereoanlage trotz behaupteten Dritteigentums der Freundin sowie Einspruch, Aussetzung
  der Vollziehung der Pfändungen, Vollstreckungsaufschub und Drittwiderspruchsklage nach
  § 262 AO. Ebenso steht der **Übungsfall 2** (Handelsvertreter Jens Jägermeister, Passau)
  mit Sachverhalt und den Lösungshinweisen zu allen drei Aufgaben: die Pfändung von
  Home-Cinema-Ausrüstung, PC-Anlage und Standuhr als drei selbständige Verwaltungsakte,
  deren Einspruchsfrist bereits mit dem Anlegen des Pfandsiegels beginnt (§ 356 AO greift
  mangels schriftlichen Verwaltungsakts nicht), die Fristberechnung vom 09.06.07 über den
  Sonntag, den 08.07.07 bis zum 09.07.07 und die Ablehnung der Wiedereinsetzung wegen
  Vermögenslosigkeit; der Vorrang des § 262 AO vor dem Einspruch der Ehefrau, deren
  Einsprüche insgesamt unzulässig sind und als Widerspruch ausgelegt werden; sowie die
  Beseitigung der Pfändungen außerhalb des Einspruchsverfahrens – Einstellung des
  Zwangsgeldvollzugs nach § 335 AO und Beschränkung der Vollstreckung auf 7.100 €,
  Aufhebung der Home-Cinema-Pfändung wegen des Miteigentums der Ehefrau mit Verweis auf
  die Pfändung des Miteigentumsanteils nach § 321 Abs. 1 AO, Rücknahme der
  PC-Anlagen-Pfändung nach § 130 Abs. 1 AO bei auf null reduziertem Ermessen und Aufhebung
  der Standuhr-Pfändung wegen nachgewiesenen Dritteigentums. Den Abschluss bilden die
  beiden **Anlagen** mit den Gesetzesauszügen, auf die die Arbeitsunterlage durchgehend
  verweist: aus dem BGB die §§ 90, 90a, 91 bis 97 sowie 1120 und 1362, aus der ZPO die
  §§ 739, 769 bis 772, 811 mit dem vollständigen Katalog der unpfändbaren Sachen, 811a
  (Austauschpfändung) und 865. **Abschnitt 15 und damit der gesamte Teil VI sind
  vollständig eingepflegt.**
  Prüfung: `npm run check:k1-ao-skript-jacobs`
- **AO Short-Skript (Jacobs)** (Reiter „Short-Skript (Jacobs)" im AO-Campus): die
  Arbeitsunterlage „Steuerliches Verfahrensrecht" (Mai 2025, 49 Seiten) **im Wortlaut**.
  Der Teil I zeigt, wie eine AO-Klausur gutachtlich bearbeitet wird: Aufbau und
  Punkteverteilung der ersten Prüfungsklausur (35 AO/FGO, 35 USt, 30 ErbSt), die fünf
  Arbeitsschritte von der Aufgabenstellung bis zum Lösungskonzept, AEAO, BpO, VollstrA und
  VollzA als zugelassene Hilfsmittel, die fundamentale Aufbauregel „Einspruch vor
  Korrekturvorschriften" mit den beiden typischen Beratungssituationen sowie Gutachten- und
  Urteilsstil mit Obersatz, Subsumtion und Ergebnis – samt Beispielen zum Korrektur- und
  zum Rechtsbehelfsverfahren und der vollständigen Zulässigkeitsprüfung nach § 358 AO.
  Der Abschnitt 2 bringt die typischen allgemeinen AO-Probleme der Fallbearbeitung: die
  Wirksamkeit von Bescheiden mit dem zweistufigen Prüfungsschema, der Nichtigkeit nach
  § 125 AO und dem durchgeprüften Beispiel des verstorbenen Architekten A, dessen Erbe
  gegen einen an den Toten gerichteten Bescheid vorgeht – statthaft wegen des
  Rechtsscheins, ohne Bindung an die Einspruchsfrist, mit Musterangaben für den neu zu
  erlassenden Bescheid; die ordnungsgemäße Bekanntgabe mit Bekanntgabewille, Zugang und
  richtigem Adressaten, der Unterscheidung von Inhalts-, Bekanntgabeadressat und Empfänger,
  der Heilung von Bekanntgabemängeln, der Verlängerung der Bekanntgabefiktion auf vier Tage
  ab 2025 und dem Umzugsfall der StB-Prüfung 2013, in dem beide Bescheide erst am 18.03.04
  zugehen und die Frist über § 108 Abs. 3 AO am 20.04.04 endet; sowie das Verhältnis
  zwischen Feststellungs- und Steuerbescheiden mit den MoPeG-Folgeänderungen ab 2024, der
  Bindungswirkung des § 182 Abs. 1 AO, der Feststellungsverjährung einschließlich der
  besonderen Ablaufhemmung des § 181 Abs. 5 AO und der Regel, Feststellungs- und
  Folgebescheid stets getrennt zu prüfen. Den Abschluss des Abschnitts 2 bildet die
  **Festsetzungsverjährung** mit dem vollständigen Prüfungsschema zur Fristberechnung –
  Fristdauer von vier, zehn und fünf Jahren, Beginn mit Anlaufhemmung, Ende und
  Fristwahrung nach § 169 Abs. 1 Satz 3 AO – und dem Katalog aller zehn prüfungsrelevanten
  Ablaufhemmungen des § 171 AO; dazu die Besonderheiten der Feststellungsfrist mit dem
  Beispiel der XY-OHG, in dem derselbe Feststellungsbescheid vom 11.12.07 gegenüber X
  wirkt (Festsetzungsfrist bis Ende Kj. 07) und gegenüber Y nicht mehr (Frist bereits Ende
  Kj. 06 abgelaufen) – einschließlich der zweijährigen Ablaufhemmung des § 171 Abs. 10
  Satz 1 AO bis zum 14.12.09 und der Heilung eines fehlenden Hinweises nach § 126 AO.
  Der **Abschnitt 3** behandelt den Einspruch in der Fallbearbeitung: die vier Gründe, aus
  denen er den größeren Rechtsschutz bietet, Einstieg und Aufbau der Falllösung mit
  Obersatz, die Auslegung unklarer Erklärungen nach § 133 BGB (der Antrag auf Änderung, der
  als Einspruch zu lesen ist), die Vollüberprüfung und Verböserungsmöglichkeit in der
  Begründetheit, die sachliche Anfechtungsbeschränkung des § 351 Abs. 1 AO mit drei
  Grundregeln und einem zweiteiligen Rechenbeispiel – einschließlich der Abgrenzung, wann
  mit § 351 Abs. 1 AO und wann mit § 177 AO zu begründen ist – sowie die Bindung an
  Grundlagenbescheide nach § 351 Abs. 2 AO mit dem Fall des Arztes Dr. S, dessen Einspruch
  gegen den Folgebescheid zugleich als Einspruch gegen den Feststellungsbescheid auszulegen
  ist. Der **Abschnitt 4** schließt den Teil I ab: der Vorrang des Einspruchs, die Begriffe
  Berichtigung, Aufhebung, Änderung, Rücknahme und Widerruf, die dreiteilige Checkliste der
  allgemeinen Korrekturvoraussetzungen und die Übersicht, welche Vorschrift bei
  Steuerbescheiden und welche bei sonstigen Verwaltungsakten vorrangig oder nachrangig zu
  prüfen ist; danach alle zehn klausurrelevanten Korrekturvorschriften – § 164 Abs. 2 AO mit
  dem Fortgelten des Vorbehalts, § 165 Abs. 2 AO mit der Nichtigkeit eines unbestimmten
  Vorläufigkeitsvermerks, § 129 AO als einzige für beide Bescheidarten geltende Vorschrift,
  § 172 Abs. 1 Satz 1 Nr. 2 Buchst. a und c AO, § 173 Abs. 1 AO, § 173a AO, § 175 Abs. 1
  Satz 1 Nr. 1 und Nr. 2 AO mit dem durchgerechneten Beispiel zum Ratenausfall (Anlaufhemmung
  ab Ablauf 08, Frist bis 31.12.12), § 175b AO bei Datenübermittlung durch Dritte und
  § 177 AO mit vierstufigem Prüfungsschema und Kontrollrechnung.
  Die Quelle stellt ausdrücklich klar, dass Steuererhebungsverfahren, FGO-Verfahren,
  Steuerstrafrecht und Haftungsrecht nicht enthalten, aber gleichwohl prüfungsrelevant
  sind.
  Der **Teil II** stellt die Schwerpunkte aller neun AO-Klausuren von 2016 bis 2024
  zusammen. Vorangestellt ist die Vorbemerkung zur Veröffentlichung der Aufgabentexte
  (ab 2015 eingestellt, für das Prüfungsjahr 2021 im Jahre 2024 wieder aufgenommen,
  BStBl I 2024 Seite 954) und zur Angabe der Teilaufgaben-Punktzahlen seit 2022. Es
  folgen: **2024** der vollständige Sachverhalt der geschiedenen Mandantin mit den fünf
  Teilaufgaben (5 + 10 + 9 + 6 + 5 = 35 Punkte) von der Wirksamkeit des per
  Postzustellungsurkunde an einem Samstag zugestellten Bescheides über die Unterhalts-
  zahlungen nach Anlage U als rückwirkendes Ereignis bis zur Aussetzung der Vollziehung
  und Stundung; **2023** der Verspätungszuschlag mit Urlaubsfall und MeinElster-Einspruch
  vom 26.06.2023 (10 + 3 + 9 + 13 = 35 Punkte) samt nachgerechneter Fristberechnung
  (Bescheid 17.05.2023 + drei Tage = Samstag 20.05.2023, über § 108 Abs. 3 AO Montag
  22.05.2023, Fristende 22.06.2023 – der Einspruch war verspätet); **2022** die
  ausführliche Zulässigkeitsprüfung des Erben-Einspruchs mit doppelter Wiedereinsetzung
  (30 Punkte) und die allgemeinen Vollstreckungsvoraussetzungen mit dem Leistungsgebot
  nach § 254 Abs. 1 Satz 3 AO (5 Punkte); **2021** die Einsprüche gegen zwei
  Prüfungsanordnungen samt Herausgabeverlangen gegenüber der Ex-Gattin (§§ 101, 104
  Abs. 2, 200, 97, 93 AO); **2020** der geänderte ESt-Bescheid mit aufgegebenem
  Bekanntgabewillen (AEAO zu § 124 Nr. 4 bis 6) und übergangener Empfangsvollmacht;
  **2019** der Steuerbescheid gegen den „Nicht-Erben“ mit nachträglich aufgefundenem
  Testament (Aufgaben 1 und 2 ca. 25, Aufgabe 3 ca. 10 Punkte) und den Ablaufhemmungen
  des § 171 Abs. 12 und 14 AO; **2018** der Gewinnfeststellungsbescheid der
  Partnerschaftsgesellschaft mit Teilnichtigkeit nach § 182 Abs. 3 AO und
  Ergänzungsbescheid; **2017** die Rechtsbehelfe gegen die Ablehnung von Nichtigkeits-,
  Aufhebungs- und Erstattungsantrag samt Abrechnungsbescheid nach § 218 Abs. 2 AO; und
  **2016** die erneute Änderung eines ESt-Bescheids mit Verböserung nach § 367 Abs. 2 AO
  und der Kette der Ablaufhemmungen des § 171 Abs. 2, 3a, 4 und 10 AO.
  **Das Short-Skript ist damit vollständig eingepflegt.** Der Datensatz tritt neben die bereits vorhandene verdichtete Overlay-Fassung
  (`ao-shortskript-2025.js`), die dieselbe Quelle als Einblendung in die AO-Lernmodule
  aufbereitet. Prüfung: `npm run check:k1-ao-short-skript-jacobs`
- **Fallsammlung PersG** (Reiter im Campus Personengesellschaften): dreizehn Fälle in fünf
  Blöcken (§ 6 Abs. 5 EStG, § 6 Abs. 3 EStG, Gesellschafterwechsel, § 24 UmwStG,
  Spiegelbildmethode) mit neun Abwandlungen **und den Musterlösungen** im Wortlaut. Der
  Lösungsteil liegt im Drive als eigene Datei und war zunächst übersehen worden; er steht
  jetzt unter jedem Fall zum Ausklappen – 265 Blöcke mit 40 Bilanzen, Ergänzungs- und
  Sonderbilanzen, darunter der Gesellschafterwechsel der ABC OHG mit fünf Abwandlungen
  (Anwachsung, lästiger Gesellschafter, zwei Sachwertabfindungen, Abfindung unter dem
  Buchwert) und die § 24-UmwStG-Fälle in Buchwert-, Netto- und Zwischenwertvariante.
  Zusätzlich führt jeder Fall über geprüfte Querverweise zu den Modulen, Prüfschemata,
  Originalfällen und Hausaufgaben, in denen derselbe Stoff durchgerechnet ist.
  Prüfung: `npm run check:k3-persg-fallsammlung`
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
- **AO-Originalklausuren** (Klausur 1, Reiter Abgabenordnung → „Originalklausuren (Examen)"):
  die Original-Examensklausuren des Prüfungsteils Verfahrensrecht mit den Lösungsvorschlägen
  des Lehrgangs („Abgabenordnung – Steuerberaterprüfungen 2011–2015", Februar 2026)
  **im Wortlaut**, mit den Randpunkten der Musterlösung. Anders als in den
  Erbschaftsteuerklausuren sind die Jahreszahlen hier **nicht** fortgeschrieben: Die
  Klausuren spielen im Jahr ihres Prüfungsjahrgangs; wo eine Vorschrift zwischenzeitlich
  geändert wurde, gibt die Quelle die maßgebende Fassung als Anlage mit – hier § 171 Abs. 4
  AO in der bis zum 31.12.2022 geltenden Fassung. Eingepflegt ist die Klausur
  **„Sven Sieger" (Examen 2011, 35 Punkte)**, eine Gutachtenklausur, deren Ergebnis an drei
  geschachtelten Vorfragen hängt: Der Gewinnfeststellungsbescheid hätte mangels
  Auseinanderfallens von Wohnsitz- und Betriebsstättenfinanzamt gar nicht ergehen dürfen –
  er ist rechtswidrig, aber nicht nichtig und deshalb voll bindend (§ 182 Abs. 1 Satz 1 AO);
  der Änderungsbescheid der Betriebsprüfung ist dagegen nichtig, weil er einen bereits
  Verstorbenen als Inhaltsadressaten nennt und auch gegenüber der Erbin nicht wirksam wird;
  und die Prüfungsanordnung des unzuständigen Finanzamts bleibt trotz Rechtswidrigkeit
  wirksam, weil §§ 126 und 127 AO auf Ermessensverwaltungsakte nicht passen – sie legalisiert
  damit den Prüfungsbeginn und löst § 171 Abs. 4 AO aus. Daraus ergibt sich der Weg:
  Aufhebung des Feststellungsbescheids nach § 164 Abs. 2 AO (der Vorbehalt der Nachprüfung
  ist nach § 164 Abs. 4 Satz 2 AO noch nicht entfallen), dadurch eine neue zweijährige
  Ablaufhemmung nach § 171 Abs. 10 AO und schließlich die Änderung nach § 175 Abs. 1 Satz 1
  Nr. 1 AO. Der zweite Teil führt über das rückwirkende Ereignis des § 175 Abs. 1 Satz 1
  Nr. 2 AO und die Anlaufhemmung des Satzes 2 zu einem eigenen Fristbeginn. Alle Fristen sind
  unabhängig nachgerechnet; die Randpunkte summieren sich auf 31 der ausgewiesenen 35 Punkte,
  die Differenz ordnet die Quelle keinem Absatz zu. Dazu die Klausur **„Eheleute
  Schallhammer" (Examen 2012, 35 Punkte)**, die in drei Teilen fragt, wie viele Einsprüche
  zwei Schreiben auslösen, ob sie zulässig sind und ob sie Erfolg haben. Weil die
  Zusammenveranlagung nach § 155 Abs. 3 Satz 1 AO **zwei** Festsetzungen in einem Bescheid
  bündelt und der Gewinnfeststellungsbescheid wegen § 351 Abs. 2 AO gesondert anzufechten
  ist, ergeben sich **fünf** Einsprüche – von denen am Ende nur zwei zulässig bleiben. Die
  Zulässigkeit hängt an einer fehlgeschlagenen Ersatzzustellung: Die Hauseigentümerin gehört
  nicht zum Personenkreis des § 178 Abs. 1 ZPO, die Zustellung wird erst durch den
  tatsächlichen Zugang am 19.08.2012 nach § 8 VwZG geheilt – und genau am letzten Tag der so
  berechneten Frist (19.09.2012) geht das Schreiben des Steuerberaters ein; der hilfsweise
  gestellte Wiedereinsetzungsantrag wird dadurch überflüssig. In der Begründetheit greifen
  Gesamtaufrollung (§ 367 Abs. 2 Satz 1 AO) und Anfechtungsbeschränkung (§ 351 Abs. 1 AO)
  ineinander: Der übersehene Verlustfeststellungsbescheid senkt das zu versteuernde Einkommen
  von 98.155 € auf 68.155 €, der Änderungsrahmen gegenüber der letzten bestandskräftigen
  Festsetzung (60.000 €) beträgt damit 8.155 €, und die außergewöhnlichen Belastungen von
  4.700 € bleiben darunter – Endstand 63.455 €. Der Verfasser kritisiert die amtliche
  Musterlösung an mehreren Stellen offen und ergänzt zwei Prüfungspunkte, für die es keine
  Punkte gab (§ 173 Abs. 1 Nr. 2 AO bei den Renovierungskosten, § 351 Abs. 1 AO beim
  Zahlendreher); beide sind mit dem Vermerk „(0 Punkte)" übernommen. Hier gehen die
  Randpunkte genau auf: 26 × 1, 2 × 0,5, 2 × 2 und 1 × 4 Punkte ergeben die ausgewiesenen 35.
  Aus dem **Examen 2013** kommen zwei getrennte Sachverhalte hinzu, die ab hier – wie alle
  Klausuren der Jahrgänge 2013 bis 2015 – **keine Randpunkte** mehr ausweisen.
  **„Dorothea Dorn"** stellt zwei Bekanntgabestörungen nebeneinander: Beim
  Einkommensteuerbescheid greift die Drei-Tage-Fiktion nicht, weil unter der alten Anschrift
  kein Machtbereich mehr bestand – maßgebend ist der Zugang durch Nachsendung am 28.03.2013,
  und trotzdem ist die Frist versäumt, sodass nur die Wiedereinsetzung hilft; beim
  Feststellungsbescheid schlägt die Bekanntgabe ganz fehl (falscher Briefkasten) und wird
  erst durch die Übergabe am 05.05.2013 nach § 8 VwZG analog geheilt. Der Einspruch geht am
  03.06.2013 ein – genau am letzten Tag der Nachholfrist des § 110 Abs. 2 Satz 1 AO. In der
  Begründetheit zeigt der Fall eine Pointe: Derselbe Umzug, der über § 357 Abs. 2 Satz 2 und
  § 26 Satz 1 AO die Anbringungsbehörde rettet, lässt die Voraussetzungen der gesonderten
  Feststellung nachträglich entfallen (Fall von geringer Bedeutung, § 180 Abs. 3 Satz 1 Nr. 2
  AO) – und erst deren Aufhebung öffnet über § 351 Abs. 2 AO den Weg zum
  Einkommensteuerbescheid, dessen Gewinn dann von 120.000 € auf 117.620 € sinkt, weil ein
  ungedeckter Scheck keinen Zufluss auslöst. **„Kai Hundertmark"** hängt dagegen an einem
  einzigen Satz des Gesetzes: Weil die Betriebsprüfung zweieinhalb Stunden nach ihrem Beginn
  abgebrochen und erst fast ein Jahr später wieder aufgenommen wurde, gilt die Ablaufhemmung
  nach § 171 Abs. 4 Satz 2 AO als nicht eingetreten – die Einspruchseinlegung hat nach
  § 361 Abs. 1 AO gerade keine aufschiebende Wirkung, die den Abbruch gerechtfertigt hätte.
  Dasselbe Wirtschaftsgut wird deshalb in drei aufeinanderfolgenden Jahren völlig verschieden
  behandelt: **2006** gar nicht mehr (Frist abgelaufen, Vorbehalt der Nachprüfung nach
  § 164 Abs. 4 Satz 1 AO erloschen, § 173 Abs. 1 Nr. 1 AO verjährt), **2007** nach
  § 164 Abs. 2 AO mit Nachaktivierung von 193.500 € über den Bilanzenzusammenhang und
  **2008** nach § 175 Abs. 1 Satz 1 Nr. 2 AO mit 6.000 € AfA zugunsten des Steuerpflichtigen,
  ermöglicht durch die Anlaufhemmung des § 175 Abs. 1 Satz 2 AO. Die Zahlen 199.500 € und
  193.500 € setzt die Quelle ohne Rechenweg; ihre Herleitung (Monats-AfA für Dezember 2006
  bzw. Jahres-AfA 2007) ist im Datensatz als **eigene Ableitung** gekennzeichnet, ebenso die
  Unstimmigkeit, dass der Sachverhalt 220.000 € Abbruchkosten nennt, die Lösung aber
  durchgehend mit 200.000 € rechnet. Das **Examen 2014** („Bayerische-Wind-Energy-GmbH")
  hängt an einem einzigen Datum: Weil das Finanzamt die seit Juni 2012 aktenkundige
  Empfangsvollmacht überging und die Prüfungsanordnung an die Geschäftsadresse schickte, war
  sie nicht wirksam bekannt gegeben – aus dem „kann" des § 122 Abs. 1 Satz 3 AO wird durch
  die vorgelegte Vollmacht nach Satz 4 ein Muss. Geheilt wurde der Mangel erst am
  **14.01.2013**, und diese Verschiebung um drei Monate entscheidet alles: Für **2007** lief
  die Frist am 31.12.2012 ab, die Prüfung begann erst danach – keine Änderung. Für **2008**
  reicht es gerade, weil die Frist erst Ende 2013 endet – Änderung nach § 164 Abs. 2 AO. Für
  **2006** greift die Prüfungsanordnung gar nicht (sie erfasst nur 2007–2009), sodass die
  verdeckte Gewinnausschüttung als materieller Fehler nach § 177 Abs. 3 AO stehen bleibt,
  während die **Schmiergeldzahlung** wegen der zehnjährigen Frist des § 169 Abs. 2 Sätze 2
  und 3 AO noch bis Ende 2019 über § 173 Abs. 1 Nr. 1 AO korrigiert werden kann. Dazu die
  Zählaufgabe, wie viele selbständig anfechtbare Verwaltungsakte in einer Prüfungsanordnung
  stecken (**elf**: 3 Steuerarten × 3 Jahre plus Prüfungsort und Prüfungsbeginn; die
  Bestimmung der Prüferin ist keiner), die Frage nach einem Verwertungsverbot für Feststellungen
  zu einem nicht geprüften Jahr – sie scheitert daran, dass die Mitteilung der
  Staatsanwaltschaft schon vorher in der Akte lag – und ein lehrreicher Gegensatz zur Klausur
  2013: Auch hier wird die Prüfung über sechs Monate unterbrochen, diesmal aber **folgenlos**,
  weil sie kurz vor ihrem Abschluss und nicht unmittelbar nach ihrem Beginn abgebrochen wurde.
  Nicht die Dauer der Unterbrechung entscheidet, sondern ihr Zeitpunkt. Den Abschluss bildet
  das **Examen 2015** („Albert Täuscher"), in dem eine Selbstanzeige dazu zwingt, **jede
  einzelne Tatsache getrennt zu beurteilen**: Der verschwiegene Golfshop ist kein Teilbetrieb,
  also sind nicht „die Einkünfte aus dem Shop" eine Tatsache, sondern jede Einnahme und jede
  Ausgabe für sich. Die Umsätze (100.000 € netto) gehen deshalb über § 173 Abs. 1 Nr. 1 AO,
  die dafür gezahlten Mieten (8.000 € netto) über § 173 Abs. 1 Nr. 2 AO – und dort steht das
  grobe Verschulden im Weg, das nur der Kausalzusammenhang des Satzes 2 überwindet. Ein
  dritter Punkt – eine Miete der Ehefrau, die wegen der Scheckübergabe schon 2007 zugeflossen
  war – ist für sich **verjährt** und wird erst über die Kompensation des § 177 AO wieder
  erreichbar: Obergrenze 300.000 €, Untergrenze 192.000 €, materiell richtiges zu
  versteuerndes Einkommen 290.000 € – es liegt innerhalb der Bestandskraftdurchbrechungen.
  Dazu die Zurechnung beim Ehegatten in drei Varianten (Zehnjahresfrist nach § 169 Abs. 2
  Satz 3 AO, grobes Verschulden nach AEAO zu § 173 Nr. 5.2, arglistige Täuschung nach
  § 172 Abs. 1 Satz 1 Nr. 2c AO ohne eigene Täuschungshandlung), die Wirkung der
  Umsatzsteuerjahreserklärung als Steueranmeldung nach § 168 Satz 1 AO und die Zählaufgabe,
  wie viele Verwaltungsakte in einem zusammengefassten Einkommensteuerbescheid stecken – die
  Quelle benennt sie einzeln, nennt aber keine Summe; die Zusammenzählung auf zehn ist im
  Datensatz als **eigene Ableitung** gekennzeichnet. Bemerkenswert ist auch das Gegenstück zur
  Klausur 2013: Dort war der Scheck **nicht gedeckt** und löste keinen Zufluss aus, hier ist
  er gedeckt und fließt bereits mit der Übergabe zu – beide Male ist die spätere
  Kontobewegung die Ablenkung. Damit ist die AO-Datei des Drive-Ordners vollständig
  ausgewertet.
  Prüfung: `npm run check:k1-ao-originalklausuren`

- **Prüfungsklausuren im Original – ohne Musterlösung** (`src/data/k1-pruefungsklausuren.js`,
  Reiter „Prüfungsklausuren im Original“ im AO-Campus): die Aufgabentexte des **dritten
  Prüfungstages** (Verfahrensrecht und andere Steuerrechtsgebiete) im **amtlichen Wortlaut** –
  kein fortgeschriebener Rechtsstand, keine Bearbeitung, die Jahreszahlen des
  Originaljahrgangs. Eingepflegt ist der AO/FGO-Teil der Prüfung **2021/2022**; der Fall spielt
  im Jahr 2021.
  **Zu dieser Aufgabe enthält die Quelle keine Lösung** – und es wird hier keine erfunden.
  Der Eintrag sagt das offen, hält fest, was die Aufgabenstellung selbst vorgibt, und verweist
  auf die Parallelfälle mit Musterlösung im Campus.
  Die Klausur verlangt kein Ergebnis in Euro, sondern **drei Rechtsgutachten**: (1) die
  Zulässigkeit der Einsprüche gegen eine oder zwei Prüfungsanordnungen, (2) – ausdrücklich
  unabhängig davon – die Erfolgsaussichten der Einwendungen, (3) ob die geschiedene Ehefrau
  die Geschäftsunterlagen 2017 herausgeben muss und über ein Vorlageverweigerungsrecht zu
  belehren ist. Der Sachverhalt liefert die Gliederung für das zweite Gutachten selbst mit:
  Der Steuerberater nummeriert seine Einwendungen von 1 bis 6.
  Die gesetzten Weichen: eine Empfangsvollmacht, die eingegangen, aber noch nicht im
  elektronischen Speicher erfasst war; ein undatierter und nicht unterschriebener „Einspruch“
  auf der Rückseite eines Werbeflyers; eine Prüfungsanordnung, deren eingetragenes Datum drei
  Tage **nach** der tatsächlichen Zustellung liegt; und eine Rechtsbehelfsbelehrung, die nur
  die Bekanntgabefiktion für einfache Briefe nennt. Der Aufgabe liegt ein Jahreskalender 2021
  bei; die maßgeblichen Tage sind im Eintrag einzeln aufgeführt und gegengeprüft.
  Aus dem Jahrgang **2022/2023** kommt derselbe Aufgabentyp an einem ganz anderen Sachverhalt
  hinzu (Monika Beer, 35 von 100 Punkten – 30 für Aufgabe 1, 5 für Aufgabe 2): Ein
  Einkommensteuerbescheid geht am 02.03.2022 zur Post an eine 78-Jährige, die seit dem 14.02.
  mit Sauerstoff im Krankenhaus liegt – noch ansprechbar, aber von der Außenwelt
  abgeschnitten. Am 08.03. wird sie ins künstliche Koma versetzt, am 16.03. stirbt sie. Der
  testamentarische Alleinerbe erfährt am 02.05. davon, erhält am 18.05. die Wohnungsschlüssel,
  entnimmt am 22.05. den noch verschlossenen Umschlag dem überquellenden Briefkasten und legt
  am 24.05. „Widerspruch“ ein. Der Sachverhalt schließt mit dem Satz „Alle geschilderten
  Tatsachen entsprechen der Wahrheit“ und nimmt der Aufgabe damit jede Beweisfrage.
  Ein Detail lohnt den Vergleich der beiden Jahrgänge: Die Rechtsbehelfsbelehrung nennt hier
  den **vierten** Tag nach Aufgabe zur Post, im Jahrgang 2021/2022 noch den **dritten**.
  Dazu kommt der **Umsatzsteuerteil** desselben Prüfungstages, der im USt-Campus unter
  demselben Reiter steht (Bruno Bartel, BB-Baustoffhandels-GmbH und Paul Prager): drei
  Unternehmer, deren Umsätze sich gegenseitig bedingen, über die Besteuerungszeiträume 2020
  und 2021. Ein Dienstwagen wird im Oktober 2020 gekauft und erst im Januar 2021 übergeben.
  Eine Weihnachtsfeier für 32 Arbeitnehmer bringt drei Rechnungen mit drei verschiedenen
  Problemen mit – eine ordentliche Gastronomierechnung, ein Musikhonorar ganz ohne Rechnung
  und einen österreichischen Busunternehmer. Ein Gebäude mit vier Etagen zu je 200 m² wird
  schlüsselfertig errichtet, mit drei Abschlagszahlungen über zwei Jahre und Mietern, die
  erst nach und nach gefunden werden – die Vorverträge datieren teils vor, teils nach den
  einzelnen Abschlägen. Und aus einem Lagerplatz wird ein Baugebiet: fünf Einfamilienhäuser,
  ein Turmdrehkran mit Totalschaden auf der Rückfahrt, italienische Dachziegel über zwei
  Stationen und ein fünftes Haus, das die Tochter zur Hochzeit bekommt. Alle Beträge der
  Quelle sind unabhängig nachgerechnet und gehen auf.
  Aus dem Jahrgang **2022/2023** kommt der Umsatzsteuerteil hinzu (Inge Irlbacher, 35 von 100
  Punkten; die Quelle nennt selbst eine „grobe Punkteverteilung“ von 9, 10, 11 und 5): eine
  Kunst- und Antiquitätenhändlerin, die zur **Differenzbesteuerung** nach § 25a UStG optiert
  hat – und jeder der vier Sachverhalte prüft, ob diese Option hier trägt. Ein Gemälde wird in
  Salzburg von einer Privatperson gekauft, in Düsseldorf über ein Auktionshaus im eigenen
  Namen der Einlieferin versteigert und vom niederländischen Erwerber übernommen. Eine
  Meißner Figurengruppe wird im eigenen Namen, aber für fremde Rechnung an einen
  österreichischen Rechtsanwalt verkauft. Vier Gemälde eines Künstlers – zwei davon 2018
  gekauft, eines aus dessen Wiener Atelier innergemeinschaftlich geliefert – gehen an Käufer
  in Berlin, Köln, Mailand und Zürich. Und ein BMW wird zu 60 % im Kunsthandel, zu 10 % bei
  der steuerfreien Wohnraumvermietung und zu 30 % privat gefahren. Auch hier sind alle Beträge
  unabhängig nachgerechnet und gehen auf.
  Und schließlich der **Erbschaftsteuerteil 2022/2023** (Erbfall Schüssel), der eine Stufe
  weniger verlangt als sein Gegenstück: die **Bereicherung** der Erbin statt des
  steuerpflichtigen Erwerbs – dafür fast durchgehend Bewertungsarbeit. Ein Bergunfall an der
  Eiger-Nordwand, ein Testament zugunsten der Ehefrau bei Gütertrennung, eine kinderlose Ehe,
  eine angemietete Wohnung (also kein Familienheim im Nachlass). Der 60-Prozent-Komplementär­
  anteil an einer KG ist über das vereinfachte Ertragswertverfahren zu bewerten – mit drei
  Jahresüberschüssen, außerbilanziellen Korrekturen, Sonder- und Ergänzungsbilanzergebnissen,
  Gewerbesteueraufwand, Finanzmitteln, Schulden, drei Kapitalkonten, Entnahmen ohne jede
  Einlage und einem Alfa Romeo, dessen Anschaffungskosten, Steuerbilanzwert und
  Händlerangebot auseinanderfallen. Dazu ein Erbbaugrundstück mit Gebäude des
  Erbbauberechtigten, ein zweites Grundstück, das am Todestag gekauft, aber erst nach dem Tod
  bezahlt und umgeschrieben wurde, und eine Lebensversicherung über 2.000.000 €, bei der beide
  Eheleute Versicherungsnehmer sind. **Damit sind beide Drive-Dateien mit amtlichen
  Prüfungsaufgaben vollständig ausgewertet: alle 19 Aufgabenteile der sechs Prüfungstage
  zweier Jahrgänge.**
  Und schließlich der **Erbschaftsteuerteil** (Erbfall Max Muhr), der im ErbSt-Campus unter
  demselben Reiter steht: ein Motorradunfall im Allgäu, ein Berliner Testament, Gütertrennung –
  und ein Nachlass, der in fast jeder Position eine eigene Bewertungsfrage aufwirft. Der Sohn
  macht seinen Pflichtteil nicht geltend, erhält aber eine Rente bis längstens zum
  27. Geburtstag; die Witwe bezieht eine Witwenrente aus der gesetzlichen Sozialversicherung.
  Im Nachlass: 30 % an einer GmbH, deren Vermögensaufstellung eine Beteiligung mit dem
  Buchwert von 50.000 € statt dem festgestellten Anteilswert von 1.000.000 € ansetzt und ein
  Pfandbriefdepot gar nicht enthält – mit vier Jahresüberschüssen und vier Steueraufwendungen
  als Rechengrundlage; 15 % an einer nicht börsennotierten AG mit Stimmbindungs- und
  Verfügungsvereinbarung, deren Vertragspartner die Anteile im Dezember 2020 kauft; und ein
  Haus mit fünf gleich großen Stockwerken, von denen eines gewerblich, drei zu Wohnzwecken
  vermietet sind und eines die Ehewohnung war – die die Witwe noch im Dezember 2020 für Nizza
  aufgibt. Damit ist der Prüfungstag vollständig.
  Prüfung: `npm run check:k1-pruefungsklausuren`
- **USt-Originalklausuren** (Klausur 1, Reiter Umsatzsteuer →
  „Originalklausuren (Prüfung)"): die Original-Prüfungsklausuren des Umsatzsteuerteils mit
  den Lösungen des Lehrgangs („Umsatzsteuer Original Prüfungsklausuren 2011 – 2015 mit
  Lösungen", Rechtsstand 2026, April 2026) **im Wortlaut**. Anders als die Klausuren des
  Verfahrensrechts sind diese ausdrücklich **auf den Rechtsstand 2026 fortgeschrieben** –
  Besteuerungszeitraum ist das Jahr 2026, die Jahreszahl im Titel bezeichnet nur den
  Prüfungsjahrgang. Eingepflegt ist die Klausur **„Trachten Ferstl" (Prüfung 2011)**, deren
  halbe Lösung an einer **Organschaft auf Zeit** hängt: Sie entsteht mit der Einbringung des
  Einzelunternehmens zum 1.1.2026 und endet am 1.8.2026, weil mit der Übertragung von 60 %
  der Anteile die finanzielle und mit dem Rückzug aus der Geschäftsführung die
  organisatorische Eingliederung entfallen. Daran hängen drei Ergebnisse gleichzeitig: Die
  Miete für EG und 1. OG ist bis Juli nicht steuerbarer Innenumsatz und erst ab August
  steuerpflichtig; die ausgewiesene Steuer löst dabei **kein** § 14c UStG aus, weil ein
  innerbetrieblicher Buchungsbeleg keine Rechnung ist; und der Vorsteuerabzug aus der
  Notarrechnung der GmbH steht dem Organträger zu. Dazu ein vierstöckiges Gebäude mit drei
  Vermietungsarten und einer **Vorsteuerberichtigung nach Flächenschlüssel** (75 % gegen
  60,42 %, Berichtigungsbetrag 27,70 €), die Firmenwagenüberlassung als tauschähnlicher
  Umsatz auf Basis der Gesamtausgaben (6.300 € × 32 % = 2.016 €), zwei
  Preisausschreiben-Gewinne mit **entgegengesetztem Ergebnis** – die Lederhose steuerbar über
  den Auffangtatbestand des § 3 Abs. 1b Satz 1 Nr. 3 UStG und ohne Ausfuhrbefreiung (§ 6
  Abs. 5 UStG), das Gourmet-Menü mangels vergleichbaren Auffangtatbestands bei sonstigen
  Leistungen gar nicht –, eine Segelyacht, die als **neues Fahrzeug beide Richtungen
  durchläuft** (Erwerb nach § 1b UStG ohne Vorsteuerabzug, Verkauf nach § 2a UStG steuerfrei
  an eine Privatperson, nachträglicher Vorsteuerabzug nach § 15 Abs. 4a UStG auf 9.500 €
  begrenzt), und ein Reihengeschäft Innsbruck–Amsterdam, bei dem Deutschland physisch nie
  berührt wird und der Erwerb dennoch über § 3d Satz 2 UStG im Inland steuerbar ist – mit
  323 € Steuer ohne Vorsteuerabzug. Jede Zahl ist unabhängig nachgerechnet. Die
  Restaurantrechnung über „zutreffend 95,40 € USt" erklärt die Quelle nicht; die
  Rekonstruktion als Mischung aus 630 € zu 7 % und 270 € zu 19 % ist im Datensatz als
  **eigene Ableitung** gekennzeichnet. Dazu die Klausur **„Eheleute Taff" (Prüfung 2012)**,
  die um **einen einzigen Tag** gebaut ist: Der Verkauf über 2.000 € am 1. Dezember 2025 hebt
  den Gesamtumsatz von 24.500 € auf 26.500 € und sprengt die Kleinunternehmergrenze des
  § 19 Abs. 1 UStG – und nach Abschnitt 19.7 Abs. 1 Satz 3 UStAE ist **bereits dieser Umsatz**
  steuerpflichtig, nicht erst der nächste. Von da an ändert sich alles gleichzeitig, und zwar
  bei **beiden** Eheleuten: Die Vermietung der Ehefrau an den Ehemann kippt von steuerfrei mit
  § 14c-Schuld (190 € monatlich von Juli bis November) in steuerpflichtig durch Option; aus
  einer nicht abziehbaren Vorsteuer von 1.425 € wird ein Berichtigungsobjekt nach § 15a Abs. 3
  UStG; die Anzahlung des Eisenbahnmuseums wird nachversteuert; und der Pkw wird erstmals
  berichtigungsfähig, wobei die Privatnutzung überhaupt erst jetzt eine unentgeltliche
  Wertabgabe auslöst, weil es vorher keinen Vorsteuerabzug gab. Der **Totalschaden am
  31.12.2026** wirkt dann rückwirkend: Er verkürzt den Berichtigungszeitraum von 48 auf 17
  Monate, was die Berichtigung für 2025 von 31,67 € auf 89,41 € anhebt (Differenz 57,74 € in
  der Jahreserklärung 2026) und zusätzlich die Bemessungsgrundlage der Wertabgabe erhöht
  (Nachversteuerung 40,42 €). Ein einziger Unfall am letzten Tag des Jahres verändert damit
  vier Beträge in zwei Besteuerungszeiträumen. Bemerkenswert ist außerdem, dass die Klausur
  **§ 15a UStG fünfmal** prüft und dreimal an der Bagatellgrenze des § 44 UStDV scheitert, und
  dass die Rechnung des Museums die Anzahlung fälschlich als Nettobetrag behandelt – die
  Lösung rechnet aus 23.610 € brutto eine Bemessungsgrundlage von 19.840,34 € und teilt die
  Steuer von 3.769,66 € auf 159,66 € (VAZ 12/2025) und 3.610 € (VAZ 02/2026) auf. Die Klausur
  **„Terra GmbH" (Prüfung 2013)** ist dagegen um **Dreiergruppen** gebaut: drei Mieter lösen
  drei verschiedene Optionsergebnisse aus (möglich – nach § 9 Abs. 2 UStG gesperrt – nach
  § 9 Abs. 1 UStG gar nicht eröffnet); ein einziger Parkettkauf führt zu **drei
  innergemeinschaftlichen Erwerben an drei Orten** (400 qm nach Starnberg = 1.520 €; 600 qm
  nach Innsbruck mit doppeltem Erwerbsort nach § 3d Satz 2 UStG = 2.280 € ohne
  Vorsteuerabzug; 100 qm später umgelagert = innergemeinschaftliches Verbringen nach
  § 1a Abs. 2 UStG = 380 €, entstanden erst im Folgemonat mangels Rechnung); und drei Preise
  eines Preisausschreibens führen auf **drei verschiedenen Wegen zum selben Ergebnis** –
  beim Roller wird der Vorsteuerabzug versagt, sodass die Wertabgabe entfällt; beim Rundflug
  bleibt der Abzug erhalten, weil es für sonstige Leistungen keinen Auffangtatbestand gibt;
  bei den Bildbändern, weil sie Geschenke von geringem Wert sind. Der anspruchsvollste Teil
  ist das **Ausscheiden der Gesellschafterin** gegen ein Grundstück und 2,5 Mio. € Bargeld:
  für sie nicht steuerbar (bloßes Halten einer Beteiligung), für die GmbH eine
  **Geschäftsveräußerung im Ganzen** – und weil die Erwerberin nach § 1 Abs. 1a Satz 3 und
  § 15a Abs. 10 UStG den Berichtigungszeitraum fortführt, schlägt ihre eigene Nutzungsänderung
  vier Monate später auf einen Vorsteuerabzug durch, den Jahre zuvor die GmbH vorgenommen
  hatte (1.520 € zu ihren Lasten). Dabei wird die 10-Prozent-Grenze des § 44 Abs. 2 Satz 1
  UStDV **genau** erreicht – ein Monat weniger, und die Berichtigung entfiele. Bemerkenswert
  ist außerdem der Gegensatz zur Klausur 2011: Dort stand die Verwendung des Gewinns beim
  Einkauf **noch nicht** fest (Vorsteuerabzug bleibt, Wertabgabe wird versteuert), hier stand
  sie **bereits** fest (Vorsteuerabzug versagt, keine Wertabgabe) – entscheidend ist nicht die
  Zuwendung, sondern die Absicht im Zeitpunkt des Einkaufs. Eine Abweichung zwischen
  Sachverhalt (Abschreibung auf sechs Jahre) und Lösung (Verteilung auf acht Jahre) ist als
  **eigene Feststellung** gekennzeichnet und erklärt. Die Klausur
  **„Anton Asam" (Prüfung 2014)** dreht dieselbe Vorschrift um: Dort zerfällt **ein einziger
  Gebäudekauf in zwei umsatzsteuerliche Hälften** – für die beiden Etagen, deren
  Mietverhältnisse fortgeführt werden, liegt eine Geschäftsveräußerung im Ganzen vor, für das
  selbst genutzte Erdgeschoss und die eigene Wohnung dagegen eine steuerpflichtige Lieferung
  mit Steuerschuldnerschaft des Erwerbers (§ 13b Abs. 2 Nr. 3 UStG): 190.000 €, davon wegen
  § 15 Abs. 1b UStG nur 95.000 € abziehbar. Entscheidend ist die **Absicht im Zeitpunkt des
  Kaufs** – dass das Erdgeschoss noch drei Monate weitervermietet wird, ändert nichts. Die
  Fußstapfentheorie des § 15a Abs. 10 UStG greift damit nur für die halbe Immobilie und
  bleibt hier folgenlos, weil beide Mietverhältnisse unverändert weiterlaufen – das genaue
  Gegenstück zur Klausur 2013. Dazu die **Differenzbesteuerung in zwei Schwierigkeitsgraden**:
  beim Ölgemälde schlicht (4.000 € ./. 2.000 €, Bemessungsgrundlage 1.680,67 €, Steuer
  319,33 €), beim Kommissionsgeschäft erst zu konstruieren, weil der Einkaufspreis dem
  entspricht, was dem Einlieferer letztlich zusteht (90.000 € ./. 13.500 € Provision ./.
  4.000 € Spesen = 72.500 €; Differenz 17.500 €, Bemessungsgrundlage 14.705,88 €, Steuer
  2.794,12 €) – das Expertisenhonorar von 6.000 € bleibt dabei außen vor und ist eine eigene,
  voll steuerpflichtige Leistung. Beide Male sperrt § 25a Abs. 7 Nr. 3 UStG die
  innergemeinschaftliche Lieferung. Schließlich zwei unentgeltliche Abgaben mit gegenläufiger
  Begründung – die Bewirtung bleibt unversteuert **und** behält den Vorsteuerabzug, die
  Verlosung wird mit 7 % besteuert – und eine steuerfreie Lohnveredelung für einen Schweizer
  Auftraggeber. Ein Widerspruch innerhalb der Lösung (Vorsteuer aus der Partyservice-Rechnung
  einmal mit 950 €, einmal mit 600 € beziffert) ist als **eigene Feststellung** gekennzeichnet.
  Die Klausur **„Georg Gründlich“ (Prüfung 2015)** schließlich prüft **§ 13b UStG sechsmal an
  derselben Baustelle** und kommt sechsmal zu einem anderen Ergebnis: Abs. 2 Nr. 1 beim
  österreichischen Architekten, Abs. 2 Nr. 4 beim inländischen Erdbauer, **gar nicht** beim
  Innsbrucker Fensterhersteller, der ohne Einbau liefert und deshalb keine Bauleistung erbringt
  – an die Stelle des § 13b UStG tritt dort ein innergemeinschaftlicher Erwerb über 15.200 € –,
  Abs. 1 bei der österreichischen Spedition (innergemeinschaftliche Güterbeförderung nach
  § 3a Abs. 2 UStG), **Nr. 1 vor Nr. 4** beim tschechischen Monteur – und wieder **gar nicht**
  beim inländischen Gebäudereiniger, weil Gründlich selbst keine Gebäudereinigungsleistungen
  erbringt. Dazu die **Anzahlungsbesteuerung über drei Voranmeldungszeiträume** (Vereinnahmung,
  Restzahlung, Leistungszeitpunkt) und **drei ineinandergreifende Berichtigungen nach § 15a
  UStG**, die bis 2031 laufen: der Pkw (Anschaffung, Nutzungsänderung, Veräußerung – 410,40 €,
  1.846,80 € und 153,90 €) und die nachträgliche Lackierung als eigenes Berichtigungsobjekt
  (91,20 € und 7,60 €, letzteres an § 44 Abs. 1 UStDV scheiternd). Das Motorrad ist der
  **vierte Fahrzeugfall der Reihe**: § 1b UStG beim Erwerb (2.850 € Erwerbsteuer, Vorsteuer
  nach § 15 Abs. 4a UStG auf 1.900 € begrenzt) und § 2a UStG beim Verkauf – noch **„neu“**,
  weil zwischen Erstinbetriebnahme und Lieferung keine sechs Monate liegen. Schließlich zwei
  Geschenke mit **gegenläufiger Vorsteuerfolge**: zwanzig Werkzeugkoffer zu je 60 € bleiben
  abziehbar (228 €) und lösen eine Wertabgabe aus, das einzelne teurere Geschenk sperrt den
  Abzug nach § 15 Abs. 1a UStG und bleibt deshalb ohne Wertabgabe.
  Prüfung: `npm run check:k1-ust-originalklausuren`
- **ESt-Originalklausuren** (Klausur 2, Reiter Einkommensteuer → „Originalklausuren
  (Prüfung)“): die Original-Prüfungsaufgaben aus dem Gebiet der Ertragsteuern
  (Einkommensteuer und Gewerbesteuer) mit den Lösungsvorschlägen des Lehrgangs
  („Ertragsteuern · Steuerberaterprüfungen 2011 – 2015“, Rechtsstand 2025, März 2026).
  Jeder Sachverhalt steht als eigener Eintrag mit Bearbeitungshinweisen, Musterlösung und
  den **Randpunkten der Quelle**. Eigene Zeitlogik: Die Sachverhalte rechnen in abstrakten
  Jahreszahlen („Jahr 10“, „01.03.11“) – Platzhalter für aufeinanderfolgende
  Veranlagungszeiträume, nicht für Kalenderjahre; maßgeblich ist der Rechtsstand zum
  31.12.2025. Eingepflegt ist die **Prüfung 2011** mit ihren vier Sachverhalten (65 Punkte).
  **Sachverhalt 1 (Mayer GmbH & Co. KG, 19 Punkte)** baut das Sonderbetriebsvermögen über
  eine **zweite Personengesellschaft** auf: Eine mitunternehmerische Betriebsaufspaltung
  scheitert an einem einzigen Wort des Sachverhalts – die Überlassung ist
  **unentgeltlich** –, und der 80-prozentige Grundstücksanteil wird deshalb
  Sonderbetriebsvermögen I. AfA (14.223 €) und Schuldzinsen (30.800 €) lassen vom
  Gewinnanteil von 44.523 € nur 1.500 € übrig. Der zweite Teil ist eine reine
  **Günstigerprüfung** zu § 34a EStG: Der Entnahmeüberhang löst die Nachversteuerung aus,
  und die Rücknahme des Antrags ist um **440,31 €** günstiger. **Sachverhalt 2 (Bauen
  Döring KG, 22 Punkte)** dreht sich um einen einzigen Stichtag: Zum 01.03. wird aus dem
  Einzelunternehmen eine KG (Einbringung nach § 24 UmwStG zum Buchwert über eine negative
  Ergänzungsbilanz, Einbringungsgewinn 0 €) und aus dem leitenden Angestellten ein
  Kommanditist. Gehalt, Arbeitgeberanteile zur Sozialversicherung **und** die volle
  Zuführung zur Pensionsrückstellung von 150.000 € sind Sondervergütungen – zusammen
  263.000 €. Die Vergütung der Komplementärin ist dagegen **kein** Sondervergütung, weil
  der Gesellschaftsvertrag sie als Entnahme bucht. Gewerbesteuerlich bleibt die sachliche
  Steuerpflicht bestehen, die persönliche wechselt: **zwei Messbeträge** (3.357 € und
  790 €) mit je zeitanteiligem Freibetrag. **Sachverhalt 3 (Abel & Witte GbR, 10 Punkte)**
  ist ein **Verkauf an sich selbst**: Der GbR fehlt die Einkunftserzielungsabsicht, weil die
  Mieterin ihren Anteil zu eigenen Wohnzwecken nutzt. Die Asymmetrie ist die Pointe – die
  Veräußerung wird nicht anerkannt, soweit sie nützen würde (alte Anschaffungskosten bleiben
  AfA-Bemessungsgrundlage, Schuldzinsen in voller Höhe nicht abziehbar), wohl aber, soweit
  sie belastet: 118.750 € privates Veräußerungsgeschäft. **Sachverhalt 4
  (Grundbesitz-Verwaltungs GmbH & Co. KG, 14 Punkte)** stellt dieselbe Gesellschaft zweimal
  vor, mit einer einzigen geänderten Tatsache: Bei fremden Dritten an der Betriebs-GmbH ist
  die KG nur **gewerblich geprägt** und darf die erweiterte Kürzung nutzen (Messbetrag
  927 €); sind es dieselben Personen, entsteht eine **Betriebsaufspaltung**, die Prägung
  wird überflüssig und mit ihr fällt die erweiterte Kürzung weg (Messbetrag 3.423 €). Jede
  Zahl ist unabhängig nachgerechnet; die Herleitung der Nachzahlungszinsen von 95,00 € über
  die Abrundung des § 238 Abs. 2 AO ist als **eigene Nachvollziehung** gekennzeichnet.
  Aus der **Prüfung 2012** (ebenfalls vier Sachverhalte, 60 Punkte): **Sachverhalt 1 (Susi
  Schön, 17 Punkte)** ist eine Rechenkette, in der die **Reihenfolge** über das Ergebnis
  entscheidet – erst der Überentnahmesaldo über zwei Wirtschaftsjahre (500.000 € ./.
  100.000 €), der nach der Höchstgrenze des § 4 Abs. 4a Satz 4 EStG 17.950 € Schuldzinsen
  nicht abziehbar macht, dann § 8 Nr. 1 GewStG, wo genau diese 17.950 € die Hinzurechnung
  kürzen, weil nur hinzugerechnet wird, was den Gewinn tatsächlich gemindert hat. Am Ende
  die **Zerlegung** auf Essen und Bielefeld mit einem fiktiven Unternehmerlohn von 25.000 €
  nach § 31 Abs. 5 GewStG. Dieselbe Tatsache – der Grundstückserwerb zum 01.09. – wirkt
  dabei zweimal gegenläufig: Für die Kürzung nach § 9 Nr. 1 Satz 1 GewStG zählt der Stand
  zu **Jahresbeginn**, also keine Kürzung; für die Zerlegung begründet sie eine
  **Betriebsstätte**. **Sachverhalt 2 (Peter Panther, 13 Punkte)** teilt einen einzigen
  Vertrag in zwei Rechtsnaturen: 200.000 € Erbbauzins sind Nutzungsüberlassung und dürfen
  nach § 11 Abs. 1 Satz 3 EStG auf 99 Jahre verteilt werden (im Bestellungsjahr 673 €),
  400.000 € für das Gebäude sind Veräußerung – mangels **Anschaffung** aber nicht nach
  § 23 EStG steuerbar. Dazu zwei Baumaßnahmen mit umgekehrtem Ergebnis: Der Balkonanbau
  (nachträgliche Herstellungskosten) ist über das 4.000-€-Wahlrecht des R 21.1 Abs. 2 Satz 2
  EStR abziehbar, der Fassadenanstrich (der Sache nach Erhaltungsaufwand) nicht, weil P sich
  im Erbbaurechtsvertrag dazu verpflichtet hatte. **Sachverhalt 3 (Steuerpflichtiger R,
  14 Punkte)** lässt eine österreichische Dividende hälftig auf Betriebs- und Privatvermögen
  entfallen und prüft beide Wege nebeneinander; weil die deutsche Einkommensteuer 0 €
  beträgt, läuft die Anrechnung leer und es bleibt der Abzug nach § 34c Abs. 2 EStG –
  **doppelt begrenzt** auf die nach Art. 10 Abs. 2 Buchst. b DBA-Österreich zulässigen 15 %
  und auf die 60 % steuerpflichtigen Einkünfte, also 270 €. **Sachverhalt 4 (Wegzug nach
  Wien, 16 Punkte)** zeigt einen Umzug mit drei verschiedenen Folgen: Die
  Aufsichtsratsvergütung bleibt deutsch steuerbar (brutto 10.000 €, Steuerabzug 30 %), die
  Salzburger Wohnung ist freizustellen und danach nur noch Progressionsvorbehalt, und die
  100-prozentige Beteiligung an einer Wiener GmbH löst die **Wegzugsbesteuerung** nach
  § 6 AStG aus (60.000 €) – während der Mehrerlös von 50.000 € aus dem späteren Verkauf
  über dem gemeinen Wert unbesteuert bleibt. Die Anlagen der Klausur (Auszug aus dem
  ErbbauRG und aus dem DBA-Österreich) stehen mit ihren tragenden Vorschriften im Wortlaut
  im Datensatz. Eine Rundungsdifferenz von einem Euro bei der Zerlegung ist als **eigene
  Feststellung** gekennzeichnet.
  Prüfung: `npm run check:k2-est-originalklausuren`

- **Prüfungsklausuren im Original – ohne Musterlösung** (`src/data/k2-pruefungsklausuren.js`,
  Reiter „Prüfungsklausuren im Original“ im ESt-Campus): die Aufgabentexte des **zweiten
  Prüfungstages** (Einkommen- und Ertragsteuerrecht) im **amtlichen Wortlaut** – kein
  fortgeschriebener Rechtsstand, keine Bearbeitung, die Jahreszahlen des Originaljahrgangs.
  Eingepflegt ist der Einkommensteuerteil der Prüfung **2021/2022** mit seinen drei
  unabhängigen Sachverhalten; die Klausur betrifft den Veranlagungszeitraum 2020.
  **Zu diesen Aufgaben enthält die Quelle keine Lösung** – und es wird hier keine erfunden.
  Jeder Eintrag sagt das offen, hält fest, was die Aufgabenstellung selbst vorgibt, und
  verweist auf die Parallelfälle mit Musterlösung im Campus.
  **Sachverhalt 1** (Anne T.): Übertragung eines Zweifamilienhauses in vorweggenommener
  Erbfolge gegen 350.000 € Gleichstellungsgeld an den Bruder – bei ausdrücklich nicht
  kaufmännisch abgewogener Gegenleistung –, dazu eine energetische Sanierung mit
  Fachunternehmerbescheinigungen, eine Baderneuerung, die nicht dazugehört, eine Aufstockung
  um ein Dachgeschoss und Kapitalerträge aus Dividenden, Zinsen, Aktienverlusten und
  Termingeschäften. Die Wohnung im Obergeschoss ist an die Schwester des Vaters zur halben
  ortsüblichen Miete vermietet.
  **Sachverhalt 2** (Thomas S.): Einbringung einer Steuerberatungspraxis gegen neue Anteile in
  eine GmbH – ohne den Oldtimer (Buchwert 0 €, Teilwert 50.000 €, nur zu Werbezwecken
  gehalten) und ohne die offenen Honorarforderungen über 40.000 €, die erst im März 2021
  privat vereinnahmt werden; am Ende steht der Verkauf des gesamten Anteils für 2 Mio. € zum
  31.12.2023. Gefragt sind ausdrücklich beide Veranlagungszeiträume und das für beide zusammen
  günstigste Ergebnis.
  **Sachverhalt 3** (Hanno P.): eine dreimal jährlich genutzte Wohnung in Frankfurt, eine Ltd.
  auf den Cayman Islands ohne Ertragsbesteuerung und eine bahamaische Partnership, die ein
  deutsches Bürogebäude für 50 Mio. € gekauft und für 60 Mio. € verkauft hat – drei
  Nicht-DBA-Staaten. Auf die persönliche Steuerpflicht ist ausdrücklich einzugehen.
  Aus dem Jahrgang **2022/2023** kommen drei weitere Sachverhalte hinzu, die den
  Veranlagungszeitraum 2021 betreffen und ihre Wertungspunkte selbst ausweisen:
  **Sachverhalt 1** (Simone K., 25 von 100): eine Influencerin mit Lebensmittelpunkt in
  Düsseldorf, die sich an mehr als 183 Tagen im Jahr in Italien aufhält, dort eine
  Zweigniederlassung und drei Eigentumswohnungen hat, zu 30 % an einer italienischen S.R.L.
  im Betriebsvermögen der Betriebsstätte und zu 30 % an einer brasilianischen S.A. im
  inländischen Betriebsvermögen beteiligt ist – deren Ausschüttung dort das Einkommen
  gemindert hat – und Unterhalt sowohl an den geschiedenen Ehemann als auch an die frühere
  Schwiegermutter zahlt.
  **Sachverhalt 2** (Uli V., 17 von 100): ein Elektro-Firmenwagen bei 120 Bürotagen und
  110 Homeoffice-Tagen ohne Arbeitszimmer, ein 2013 im Rahmen einer Kapitalerhöhung
  verbilligt erworbener Geschäftsanteil (20.000 € statt 50.000 €), eine Ausschüttung von
  500.000 €, die zu vier Fünfteln aus dem steuerlichen Einlagekonto stammt, und die
  Übertragung der gesamten Beteiligung auf den Neffen gegen lebenslange Rente – zeitgleich
  mit dem Wechsel in der Geschäftsführung.
  **Sachverhalt 3** (Michael H., 18 von 100): eine bloß vermietende OHG, bei der sich die für
  eine Betriebsaufspaltung maßgeblichen Beteiligungsverhältnisse zum 1. März 2021 mitten im
  Jahr verschieben, und der Verkauf des Mitunternehmeranteils zum 1. Dezember für 1,5 Mio. €.
  Dazu die beiden übrigen Teile dieses Prüfungstages:
  **Teil II – Gewerbesteuer** (Elektro-OHG, 8 von 100): drei von vier Gesellschaftern wechseln
  in einem Jahr – einer überträgt am 1. Januar unentgeltlich auf seinen Sohn, zwei veräußern
  am 31. Dezember an denselben Erwerber –, während ein festgestellter Gewerbeverlust von
  200.000 € einem laufenden Gewinn von 80.000 € gegenübersteht. Anders als im Jahrgang
  2021/2022 ist die Gewerbesteuerpflicht hier ausdrücklich **nicht** zu prüfen.
  **Teil III – Körperschaftsteuer**, zwei sehr ungleiche Sachverhalte: die **Restaurant-GmbH**
  (28 von 100) mit einer 2019 falsch gebuchten Sacheinlage, die ausdrücklich mit zu prüfen ist,
  einer Ausgleichszahlung nach § 304 AktG, einem Darlehen zu 2 % statt fremdüblichen 5 %, einem
  rückwirkend erhöhten Geschäftsführergehalt, einem Bürogebäude ohne Aufteilung und ohne AfA,
  das an eine KG vermietet ist, deren Kommanditanteil dieselbe GmbH acht Monate später erwirbt,
  und einer Vorabausschüttung mit verspätet abgeführter Kapitalertragsteuer – und der
  **THEATER-Verein** (4 von 100), der kürzeste Aufgabenteil der ganzen Prüfung: sechs Zahlen,
  ein Einnahmenüberschuss von 10.000 € und die Frage, welche Position in welchen
  Tätigkeitsbereich gehört.
  Die Wertungspunkte dieses Prüfungstages ergeben zusammen genau 100: 25 + 17 + 18 (ESt) + 8
  (GewSt) + 28 + 4 (KSt).
  Dazu kommen die beiden übrigen Teile desselben Prüfungstages, die im GewSt- bzw. im
  KSt-Campus unter demselben Reiter stehen:
  **Teil II – Gewerbesteuer** (MAX-OHG): zwei Geschäftszweige mit eigenen Räumen, eigener
  Belegschaft und eigener Buchhaltung, an nur einem davon eine stille Beteiligung, deren
  Merkmale einzeln aufgezählt sind (20 % an Gewinn und Verlust, Beteiligung an den stillen
  Reserven, Kontrollrechte nach § 716 BGB, Widerspruchsrecht) – und dieselbe Person ist
  zugleich Prokuristin. Die Aufgabe fragt selbst nach „dem bzw. den“ Gewerbesteuermessbeträgen.
  **Teil III – Körperschaftsteuer** (TIP-AG): der umfangreichste Teil des Prüfungstages mit
  fünf Einzelsachverhalten – nichtabziehbare Aufwendungen bis hin zu Hinterziehungszinsen und
  Aufsichtsratvergütungen, eine Streubesitzbeteiligung mit Kauf, Ausschüttung und Verkauf
  innerhalb eines halben Jahres samt Vorfälligkeitsentschädigung, ein Darlehen an die GmbH des
  Mehrheitsaktionärs zu 10 % statt fremdüblichen 4 % bei bestandskräftigen Bescheiden auf
  beiden anderen Seiten, eine Organschaft seit 2012 mit Ausgleichszahlung und
  Gewinnrücklage – und deren Veräußerung mit Nutzen- und Lastenübergang am 31.12.2020 um
  24 Uhr – sowie eine GmbH & Co. KG ohne Haftungsvergütung für die Komplementärin. Zu
  entwickeln sind zwei Veranlagungen bis zur verbleibenden Körperschaftsteuer i. S. d.
  R 7.2 KStR.
  Prüfung: `npm run check:k2-pruefungsklausuren`
- **KSt-Originalklausuren** (Klausur 2, Reiter Körperschaftsteuer → „Originalklausuren
  (Prüfung)“): die Original-Prüfungsaufgaben aus dem Gebiet der Körperschaftsteuer mit den
  Lösungshinweisen des Lehrgangs („Körperschaftsteuer, Umwandlungssteuerrecht und
  Gewerbesteuer · Steuerberaterprüfungen 2011 – 2015“, Rechtsstand 2025, Februar 2026,
  Bearbeiter RA/StB Ulrich Breier), mit den **Randpunkten der Quelle**. Anders als die
  Ertragsteuerklausuren derselben Reihe spielen sie im Veranlagungszeitraum **2025**.
  Eingepflegt ist die **Prüfung 2011 (A-GmbH, 35 Punkte)**. Ihr Kern: Von den sieben
  Kostenpositionen einer Sachkapitalerhöhung sind drei zu aktivieren (1.030 €), drei sind
  laufender Aufwand (471 €) – und **eine einzige**, die Beurkundung der Übernahmeerklärung
  des Gesellschafters über **285 €**, ist eine verdeckte Gewinnausschüttung, weil sie die
  Ebene des Gesellschafters betrifft. Derselbe Vorgang bewegt das steuerliche Einlagekonto
  **in beide Richtungen**: + 10.000 € für den nicht ins Nennkapital gebuchten Teil der
  Sacheinlage, ./. 285 € für die vGA – letzteres nur, weil der ausschüttbare Gewinn 0 €
  beträgt (§ 27 Abs. 1 Satz 3 KStG). Dazu eine **Organschaft im ersten Jahr** mit vier
  Feinheiten: Die Ausschüttung vororganschaftlicher Gewinne folgt den allgemeinen Regeln
  (§ 8b KStG beim Organträger, 360.000 € und 18.000 €); die Bruttomethode des § 15 Satz 1
  Nr. 2 KStG schaltet § 8b KStG bei der Organgesellschaft ab, sodass die Dividende der
  T-GmbH erst beim Organträger korrigiert wird; die Ausgleichszahlung von 17.000 € wirkt
  zweimal (Hinzurechnung nach § 4 Abs. 5 Satz 1 Nr. 9 EStG und Minderung bei der Zurechnung
  nach R 16 Abs. 2 KStR), und die Organgesellschaft versteuert dafür 20/17 = 20.000 € als
  eigenes Einkommen; die Minderabführung aus der Gewinnrücklage wird nach der
  **Einlagelösung** des § 14 Abs. 4 KStG innerbilanziell erhöht (+ 30.000 €) und
  außerbilanziell wieder neutralisiert (./. 30.000 €). Am Ende ein zu versteuerndes
  Einkommen von 312.950 € und eine **negative** verbleibende Körperschaftsteuer von
  - 53.058 €, weil 100.000 € Kapitalertragsteuer anzurechnen sind. Jede Zahl ist unabhängig
  nachgerechnet; dass die Auszählung der Randpunkte 36 statt der im Kopf genannten
  35 Punkte ergibt, ist als **eigene Feststellung** gekennzeichnet.
  Die **Prüfung 2012 (A-UG, 40 Punkte)** beginnt mit einer **Rückrechnung**: Der
  Jahresüberschuss – Ausgangswert der ganzen Einkommensermittlung – steht nirgends im
  Sachverhalt und ist nur über die Rechtsform zu erschließen, weil eine
  Unternehmergesellschaft nach § 5a Abs. 3 GmbHG ein Viertel in die gesetzliche Rücklage
  einstellen muss: 7.500 € Zuführung ergeben 30.000 €. Danach fünf Bausteine. Bei der
  **Pensionszusage** sind zwei vergessene Bilanzposten nachzuholen – mit gegenläufigem
  Ergebnis: Die Rückstellung begrenzt das Nachholverbot des § 6a Abs. 4 Satz 1 EStG auf die
  2.000 € des laufenden Jahres, der Rückdeckungsanspruch ist mit vollen 6.500 € zu
  aktivieren (keine Saldierung, § 246 Abs. 2 HGB); dazu eine vGA, weil die Zusage ohne
  Probezeit erteilt wurde. Bei den **ausländischen Einkünften** aus einem Staat ohne DBA
  wird dieselbe Frage dreimal anders beantwortet: Die Quellensteuer auf die nach § 8b KStG
  steuerfreie Dividende bleibt endgültig hinzugerechnet, die Betriebsstättensteuer ist über
  § 34c **Abs. 3** EStG abziehbar, und der Betriebsstättengewinn ist mangels DBA voll
  steuerpflichtig. Beim **Geschäftsführergehalt** greift das Rückwirkungsverbot
  ausnahmsweise **nicht**: X ist zwar beherrschender Gesellschafter (30 % unmittelbar plus
  60 % über die von ihm beherrschte B-GmbH = 90 %), die Erhöhung war aber im Voraus klar
  vereinbart – unwirksam war nur die Vertretung, und § 184 BGB heilt rückwirkend. Die
  **Spende** an den Verein, dessen Vorstandsvorsitzender der Sohn des Gesellschafters ist,
  ist zugleich vGA und teilt sich bei der Bewertung auf zwei Vorschriften auf: 800 € gemeiner
  Wert nach § 8 Abs. 3 Satz 2 KStG, die restlichen 200 € nach § 8b Abs. 3 Satz 3 KStG. Und
  bei der **Aufwärtsverschmelzung** ist ausnahmsweise der Ansatz zum **gemeinen Wert**
  günstiger als der Buchwertansatz, weil der Übertragungsgewinn von 30.000 € sonst
  ungenutzten Verlustvortrag verbraucht; Übernahmegewinn 5.000 € (steuerfrei, davon 5 % nicht
  abziehbar) und ein Übernahmefolgegewinn von 15.000 €, den die Rücklage nach § 6 Abs. 1
  UmwStG neutralisiert. Zu versteuerndes Einkommen 57.450 €, Körperschaftsteuer 8.617 €.
  Auch hier ist die Abweichung der Randpunkte (42 gegen 40 im Kopf) als **eigene
  Feststellung** gekennzeichnet.
  Die **Prüfung 2013 (Invest-Deutschland Ltda, 33 Punkte)** verlässt die unbeschränkte
  Steuerpflicht. Sie steht und fällt mit einem Satz: Anders als unbeschränkt steuerpflichtige
  Kapitalgesellschaften, die nach § 8 Abs. 2 KStG **immer** gewerbliche Einkünfte haben,
  können beschränkt steuerpflichtige alle Einkunftsarten des EStG haben. Deshalb hat dieselbe
  brasilianische Gesellschaft nebeneinander Einkünfte aus Kapitalvermögen, gewerbliche
  Einkünfte kraft Fiktion (§ 49 Abs. 1 Nr. 2 Buchst. f Satz 2 EStG) und gewerbliche Einkünfte
  nach § 17 EStG – mit drei verschiedenen Erhebungsformen. Eine einzige **Kapitalherabsetzung**
  zerfällt nach § 28 Abs. 2 KStG in zwei Teile: Die ersten 400.000 € verbrauchen den
  Sonderausweis und gelten als Gewinnausschüttung (für die Gesellschafterin 120.000 €, mit
  Kapitalertragsteuerabzug), die restlichen 600.000 € laufen über das Einlagekonto und führen
  nach § 17 Abs. 4 EStG zu einem Veräußerungsgewinn von 80.000 € – nach § 8b Abs. 2 KStG
  steuerfrei, und zwar **ohne** die Fünf-Prozent-Pauschale, weil eine bloße Beteiligung keine
  Betriebsstätte vermittelt (BFH, BStBl II 2019, 144). Dieselbe fehlende Betriebsstätte wirkt
  dreimal: Sie erspart die Pauschale, macht die Kapitalertragsteuer nach § 32 Abs. 1 Nr. 2
  KStG **abgeltend** und lässt die Gewerbesteuer vollständig entfallen (§ 2 Abs. 1 Satz 3
  GewStG). Die Kehrseite der Abgeltung gleicht § 44a Abs. 9 EStG aus: Weil 25 % statt 15 %
  einbehalten werden und § 8b Abs. 1 KStG mangels Veranlagung leerläuft, sind **zwei Fünftel**
  zu erstatten – 14.690 € zuzüglich 807,95 € Solidaritätszuschlag. Dazu die unentgeltlich
  gelieferten Fenster, die **gleichzeitig** fiktive Betriebsausgabe bei den Vermietungseinkünften
  und Einnahme aus verdeckter Gewinnausschüttung im Privatvermögen sind (je 11.900 €, nach dem
  üblichen Verkaufspreis, nicht nach den Selbstkosten), sowie zwei verschiedene Zeitpunktregeln
  in einer Klausur – Bestandsvergleich bei der Vermietung, Zuflussprinzip bei der Beteiligung.
  Vermietungseinkünfte 66.100 €. Auch hier ist die Abweichung der Randpunkte (32 gegen 33 im
  Kopf) als **eigene Feststellung** gekennzeichnet.
  Die **Prüfung 2014 (43 Punkte)** besteht aus zwei Sachverhalten, die als eigene Einträge
  stehen. **Sachverhalt 1 (21 Punkte)** stellt dasselbe zinsgünstige, unbesicherte Darlehen
  **zweimal** dar und dreht nur die Beteiligungsrichtung um: Gibt die Tochter der Mutter das
  Darlehen, ist die Teilwertabschreibung eine **verdeckte Gewinnausschüttung** (+ 500.000 €),
  und beim Empfänger entsteht nichts, weil die Verbindlichkeit unverändert mit dem Nennwert
  passiviert bleibt; gibt die Mutter der Tochter dasselbe Darlehen, scheidet eine verdeckte
  Einlage aus und es greift das **Abzugsverbot des § 8b Abs. 3 Satz 4 KStG** – wirtschaftlich
  dasselbe Ergebnis auf ganz anderem Weg. Auslöser ist in beiden Fällen dieselbe Tatsache:
  die fehlenden Sicherheiten. Die zu niedrige Verzinsung trennt die Wege ein zweites Mal –
  einmal vGA von 20.000 € mit fiktivem Zinsaufwand beim Empfänger nach der **Fiktionstheorie**
  (Auswirkung ./. 19.000 €), einmal überhaupt keine Folge, weil ein Nutzungsvorteil nicht
  einlagefähig ist. **Sachverhalt 2 (22 Punkte)** ermittelt einen **einzigen**
  Gewerbesteuermessbetrag für einen Organkreis aus drei Gesellschaften: getrennt rechnen,
  gemeinsam festsetzen (gebrochene Einheitstheorie). Vier Punkte hängen dabei an der
  Organschaft – die **erweiterte Kürzung** bleibt der Grundstücksgesellschaft erhalten,
  obwohl Schwestergesellschaften kürzungsschädlich tätig sind; **§ 7a GewStG** zieht die
  körperschaftsteuerlich erst beim Organträger anzuwendende Bruttomethode für die
  Gewerbesteuer auf die Ebene der Organgesellschaft vor (./. 100.000 € und + 5.000 €); die
  Zinsen aus dem konzerninternen Darlehen bleiben **hinzurechnungsfrei**, weil sie sich im
  Organkreis nicht ausgewirkt haben; und der vororganschaftliche Verlustvortrag ist bei der
  Organgesellschaft nach § 10a Satz 3 GewStG **gesperrt**, beim Organträger dagegen voll
  gegen den zusammengefassten Ertrag nutzbar. Ergebnis: maßgebender Gewerbeertrag
  1.374.000 €, nach Mindestbesteuerung 149.600 €, Messbetrag **5.236 €**, Restvortrag
  1.775.600 €. Bei dieser Klausur gehen Kopfangabe und Auszählung der Randpunkte übrigens
  in beiden Sachverhalten auf.
  Die **Prüfung 2015 (40 Punkte)** schließt den Band ab und prüft **dieselbe Frage viermal
  nebeneinander**: Ab welcher Quote ist eine Ausschüttung begünstigt? Die Antwort fällt jedes
  Mal anders aus, weil § 8b Abs. 4 KStG (**10 %**) und § 9 Nr. 2a GewStG (**15 %**)
  verschiedene Maßstäbe anlegen und Beteiligungen nach verschiedenen Regeln zusammenrechnen.
  Bei der B-GmbH erreichen 8 % unmittelbar plus 8 % über die Mitunternehmerschaft in beiden
  Vorschriften die Grenze – geprüft **bei der KG** aber nicht, weshalb dort nach § 8 Nr. 5
  GewStG hinzuzurechnen ist. Bei der S-GmbH rettet die Rückbeziehung des § 8b Abs. 4 Satz 6
  KStG einen Erwerb vom November. Und bei der O-AG kippt der Fall vollständig: Die im Wege der
  **Wertpapierleihe** gehaltenen Aktien sind für § 8b Abs. 4 Satz 3 KStG dem Verleiher
  zuzurechnen (Quote 0 %, Dividende voll steuerpflichtig), während es im GewStG keine
  vergleichbare Regelung gibt und dieselbe Dividende über § 9 Nr. 2a GewStG wieder gekürzt
  wird – gemindert nur um die Leihgebühr. Für die **Eigentumsfrage** ist die Entleiherin
  dagegen nach § 39 Abs. 1 AO Eigentümerin. Dazu drei verschiedene Zeitbezüge in einer Aufgabe
  (abweichendes Wirtschaftsjahr, Gewinnanteil der KG, Stichtag des Erhebungszeitraums) und die
  Stadt Köln, die mit der Leihgebühr aus ihrem **Hoheitsvermögen** beschränkt steuerpflichtig
  wird und deren Steuer der Abzug nach § 32 KStG abgilt. **Sachverhalt 2** handelt vom Erwerb
  eigener Anteile zum überhöhten Preis – **ein Vorgang, zwei Qualifikationen**: bei der
  Gesellschaft wie eine Nennkapitalherabsetzung (§ 28 Abs. 2 KStG entsprechend), bei der
  Gesellschafterin als Veräußerung nach § 17 EStG; der überhöhte Teil von 10.000 € ist bei
  beiden eine verdeckte Gewinnausschüttung. Der ausschüttbare Gewinn ist dabei aus der
  Schlussbilanz **zurückzurechnen** (445.000 € steuerliches Eigenkapital, 125.000 €
  ausschüttbarer Gewinn), und weil die Leistungen von 45.000 € darunter bleiben, bleibt das
  Einlagekonto unverändert. Auch hier ist die Abweichung der Randpunkte (39 gegen 40 im Kopf)
  als **eigene Feststellung** gekennzeichnet. **Damit ist die KSt-Datei vollständig
  ausgewertet.**
  Prüfung: `npm run check:k2-kst-originalklausuren`
- **Bilanz-Originalklausuren** (Klausur 3, Reiter „Originalklausuren (Prüfung)“): die
  Original-Prüfungsaufgaben aus dem Gebiet der Buchführung und des Bilanzwesens mit den
  Lösungshinweisen des Lehrgangs („Bilanzierung nach Handels- und Steuerrecht ·
  Steuerberaterprüfungen 2011 – 2015“, Februar 2026; Verfasser Norbert Rott, Markus Schmidt
  und Alexander Horst), mit den **Randpunkten der Quelle** in halben Punkten. Jede Klausur
  dauert sechs Stunden und besteht aus drei unabhängigen Teilen zu zusammen 100 Punkten –
  regelmäßig ein Einzelunternehmen (34 Punkte), eine Kapitalgesellschaft (33 Punkte) und eine
  Personengesellschaft (33 Punkte); jeder Teil steht als eigener Eintrag. Eingepflegt ist
  **Teil I der Prüfung 2011 (Einzelunternehmen Herbst, 34 Punkte)**. Sein didaktischer Kern
  ist ein einziger Satz der Aufgabenstellung: „möglichst hoher Eigenkapitalausweis in der
  Handelsbilanz (1. Priorität), möglichst niedriger steuerlicher Gewinn (2. Priorität)“ – und
  weil die erste Priorität vorgeht, fallen mehrere Wahlrechte **anders aus, als man es vom
  Steuerrecht her erwarten würde**: Das selbst geschaffene Patent wird handelsrechtlich
  aktiviert (§ 248 Abs. 2 Satz 1 HGB) und steuerrechtlich nicht (§ 5 Abs. 2 EStG), und bei der
  selbst hergestellten Maschine werden Verwaltungskosten und Bauzinsen **auch steuerlich**
  aktiviert, obwohl das den Gewinn erhöht – § 6 Abs. 1 Nr. 1b EStG und R 6.3 Abs. 5 EStR sind
  eben keine eigenständigen steuerlichen Wahlrechte, sondern hängen an der Handelsbilanz. Dazu
  ein **Außenanstrich**, der über die ganze Halle geht, von der nur 20 % neu sind, und deshalb
  zu 4.000 € nachträgliche Herstellungskosten und zu 16.000 € Erhaltungsaufwand zerfällt; eine
  AfA-Bemessungsgrundlage, die um die AfaA des Vorjahres zu kürzen ist (§ 11c Abs. 2 Satz 1
  EStDV); die **Trennlinie zwischen Forschung und Entwicklung**, die hier auf einem Datum
  liegt (alles vor dem 01.04.2025 bleibt Aufwand), während der kalkulatorische Unternehmerlohn
  und der um 150.000 € gestiegene selbst geschaffene Firmenwert vollständig draußen bleiben;
  **zwei Aktienpakete**, bei denen dieselbe Fünf-Prozent-Grenze zu entgegengesetzten
  Ergebnissen führt (bei den einen greift sie nicht, weil der weitere Rückgang nur 2,7 %
  beträgt, bei den anderen gilt sie für die Zuschreibung gar nicht); und eine
  **Fremdwährungsforderung**, bei der § 256a Satz 2 HGB wegen der Restlaufzeit unter einem
  Jahr sowohl die Anschaffungskostenobergrenze als auch das Realisationsprinzip aushebelt –
  aber nur handelsrechtlich. Die Anlage mit der Überleitung ist kein Anhang, sondern 5 der
  34 Punkte. Eine Unstimmigkeit der Quelle (die Patent-AfA ist an drei Stellen mit 447 €,
  467 € und 466 € beziffert; rechnerisch richtig sind 466,67 €) ist als **eigene
  Feststellung** gekennzeichnet.
  **Teil II (X-GmbH, 33 Punkte)** macht die **latenten Steuern zum roten Faden**: Drei der fünf
  Textziffern erzeugen eine Differenz zwischen Handels- und Steuerbilanz – 80.000 € aus der
  Drohverlustrückstellung und 8.333 € aus dem Firmenwert sprechen für aktive, 300.000 € aus
  der § 6b-Rücklage für passive latente Steuern –, und keine davon lässt sich für sich allein
  entscheiden. Erst die **Gesamtdifferenzbetrachtung** ergibt einen Saldo von 211.666 €
  zugunsten des Steuerrechts und damit ein **Passivierungsgebot** nach § 274 Abs. 1 Satz 1 HGB
  über 63.500 €. Die Quelle kritisiert die amtliche Originallösung an dieser Stelle
  ausdrücklich und merkt an, dort seien für die Aussage zu den latenten Steuern überhaupt keine
  Punkte vergeben worden. Dazu ein **Erwerb eigener Anteile**, bei dem drei Beträge drei
  verschiedene Wege gehen (Nennwert 50.000 € offen vom gezeichneten Kapital abgesetzt, Aufpreis
  20.000 € erfolgsneutral mit den freien Rücklagen verrechnet, Nebenkosten 3.000 € Aufwand);
  ein **asset deal**, bei dem der Firmenwert erst als Restgröße entsteht (2.750.000 €
  Gegenleistung ./. 2.500.000 € Zeitwert) und dann handelsrechtlich über zehn, steuerrechtlich
  über fünfzehn Jahre abgeschrieben wird; eine **Betriebsprüfung**, die handelsrechtlich keine
  Bilanzberichtigung auslöst, wohl aber eine außerbilanzielle Korrektur von 11.200 € gegen die
  doppelte Besteuerung; und am Schluss eine **Steuerrückstellung, die sich selbst voraussetzt** –
  die Steuer bemisst sich nach einem Gewinn, den sie selbst mindert (zvE 52.133 €, je 7.819 €
  Gewerbe- und Körperschaftsteuer, handelsrechtlicher Jahresüberschuss 35.862 € gegen einen
  steuerlichen Gewinn von 47.695 €). Zwei Unstimmigkeiten der Quelle bei der Darstellung der
  latenten Steuern (ein falsches Stichtagsdatum und eine Verrechnungsbuchung über 27.500 €
  statt 24.000 €) sind als **eigene Feststellung** gekennzeichnet.
  **Teil III (A-B-GmbH & Co. KG, 33 Punkte)** stellt **denselben Vorfall auf zwei Ebenen**
  nebeneinander: Ein verseuchtes Grundstück rechtfertigt bei der **OHG** die
  Teilwertabschreibung auf einen Erinnerungswert von 1 € – und zugleich den Wechsel vom
  Umlauf- ins Anlagevermögen, weil die Verkaufsabsicht entfällt. Bei der beteiligten **KG**
  ist eine Abschreibung der Beteiligung dagegen **unzulässig**, weil deren Wert nicht am
  einzelnen Wirtschaftsgut hängt und in den übrigen Aktiva noch 1.535.000 € stille Reserven
  ruhen; handelsrechtlich ist die Buchung vollständig rückgängig zu machen. Über die
  **Spiegelbildmethode** schlägt derselbe Verlust steuerlich trotzdem mit 250.000 € durch –
  der Anteil steht handelsrechtlich bei 400.000 € und steuerlich bei 150.000 €. Dazu ein
  **Squeeze-out** nach § 327a AktG, bei dem die Rücklage für Ersatzbeschaffung ausscheidet,
  weil weder eine hoheitliche Stelle handelt (die Eintragung ins Handelsregister vollzieht nur
  eine privatrechtliche Umgestaltung) noch höhere Gewalt vorliegt; es bleibt § 6b Abs. 10
  EStG, den die Zwangsübertragung gerade nicht hindert – gesellschafterbezogen aber nur zu
  80 %, weshalb 6.000 € in eine **Ergänzungsbilanz** für die Komplementär-GmbH gehen (die
  Quelle bevorzugt ausdrücklich die Alternativlösung mit negativen Ergänzungsbilanzen für die
  Kommanditisten). Und schließlich die Übertragung eines Mietshauses aus dem Privatvermögen
  gegen Gesellschaftsrechte: Weil der Wert auf den Kapitalkonten I gutgeschrieben wird, ist
  das ein **voll entgeltliches Veräußerungsgeschäft** und keine Einlage – dass die Hälfte dem
  Sohn zufällt, ändert daran nichts, und die AfA bemisst sich deshalb nach § 6 Abs. 6 Satz 1
  EStG und nicht nach § 7 Abs. 1 Satz 5 EStG. Drei Unstimmigkeiten der Quelle (ein
  Zahlendreher im Gewinn der KG, die in beiden Bilanzen fehlende Einzahlung der
  Komplementär-GmbH über 162.500 € und eine Rundungsdifferenz bei den Verlustanteilen) sind
  als **eigene Feststellung** gekennzeichnet. **Damit ist die Prüfung 2011 vollständig.**
  Aus der **Prüfung 2012** kommt **Teil I (Einzelunternehmen Winter, 34 Punkte)** hinzu:
  Dasselbe Grundstück wird im **Mai** gekauft, im **September** modernisiert und im
  **Dezember** teilweise privat bezogen – und jeder Schritt baut auf dem vorigen auf. Es
  zerfällt in **vier Wirtschaftsgüter** (R 4.2 Abs. 3 Satz 3 Nr. 5 EStR), deren
  Anschaffungskosten von 214.247,50 € nach 75/25 und 240/320 bis auf den Cent aufzuteilen
  sind; dabei gehört die nicht abzugsfähige Vorsteuer von 47,50 € ausschließlich zum
  fremdvermieteten Teil. Die **Modernisierung** ist handelsrechtlich Erhaltungsaufwand – kein
  Standard in drei Gewerken –, steuerrechtlich dagegen **anschaffungsnaher Aufwand**, weil
  25.000 € die 15-Prozent-Grenze von 24.102,85 € um knapp 900 € überschreiten. Der **Einzug
  in die Wohnung** macht sie zwingend zu notwendigem Privatvermögen und erzwingt eine
  **Entnahme zum Teilwert**, der sich aus den abgelehnten Kaufangeboten von 300.000 € ergibt.
  Weil steuerlich der anschaffungsnahe Aufwand aktiviert ist, fällt der Entnahmegewinn
  auseinander: **21.871,48 €** handelsrechtlich gegen **14.659,69 €** steuerrechtlich; auch
  die AfA-Sätze weichen ab (2 % Nutzungsdauer gegen 2,5 % nach § 7 Abs. 4 Satz 1 Nr. 2
  Buchst. c EStG). Dazu ein **Darlehen**, dessen vertragliche und tatsächliche Zuordnung zum
  betrieblichen Grundstücksteil jede Aufteilung der Finanzierungskosten erspart (Ratingkosten
  sofort abziehbar, kein Disagio-Fall), und eine **Verpackungsmaschine**, bei der ein Probelauf
  am 30.12. über einen ganzen Monat Abschreibung entscheidet – mit auseinanderlaufenden
  Bemessungsgrundlagen von 16.000 € und 8.000 € nach dem Investitionsabzugsbetrag. Drei
  Unstimmigkeiten der Anlage 1 (eine nicht aufgehende Summe, ein widersprüchlicher
  Klammerzusatz und eine Textziffer, die noch dem alten § 7g EStG folgt) sind als **eigene
  Feststellung** gekennzeichnet.
  **Teil II der Prüfung 2012** (Sommer GmbH, 33 Punkte) dreht die Vorzeichen um: möglichst
  hohes Vermögen in der Handelsbilanz, möglichst **hohes** steuerliches Ergebnis. Ein
  **VIP-Logen-Paket** über 20.000 € für 20 Heimspiele zerfällt erst zeitlich – acht Spiele des
  Folgejahres sind geleistete Anzahlungen – und dann sachlich in Werbung (40 %), Bewirtung
  (30 %) und Geschenke (30 %), wobei die Eintrittskarten mit exakt 50 € je Person
  (3.600 € : 12 Spiele : 6 Personen) genau auf der Grenze des § 4 Abs. 5 Satz 1 Nr. 1 EStG
  liegen. Eine **Lärmschutzwand**, die erst 2029 gebaut wird, ist handelsrechtlich mit drei
  Jahren Preissteigerung aufzuzinsen und mit 4 % abzuzinsen (97.142 €), steuerrechtlich nach
  § 6 Abs. 1 Nr. 3a Buchst. e und f EStG ohne Preissteigerung mit 5,5 % (85.161 €) – die
  Differenz von 11.981 € erzeugt aktive latente Steuern. Überhöhte Lieferpreise der
  **finnischen Tochtergesellschaft** von 30.000 € sind handelsrechtlich Aufwand,
  steuerrechtlich verdeckte Einlage nach § 6 Abs. 6 Satz 2 EStG; zur Frage der latenten
  Steuern auf diese Differenz widersprechen die Verfasser der Musterlösung ausdrücklich. Am
  Ende steht ein Verlust von 594.281 €, aus dem § 274 Abs. 1 Satz 4 HGB latente Steuern von
  185.784 € auf die Verlustvorträge entstehen lässt. Drei Unstimmigkeiten sind als **eigene
  Feststellung** gekennzeichnet: der Zahlendreher „3.954 €“ gegen die durchgängig verwendeten
  3.594 €, der Widerspruch zwischen der Begründung (Geschenke abzugsfähig, Vorsteuer voll
  abziehbar) und der Abschlussrechnung (1.800 € Geschenke und 342 € Umsatzsteuer
  hinzugerechnet) sowie stehengebliebene Jahresangaben „2022/2023“ in der
  Verlustvortragstabelle.
  Prüfung: `npm run check:k3-bil-originalklausuren`

- **Prüfungsklausuren im Original – ohne Musterlösung** (`src/data/k3-bil-pruefungsklausuren.js`,
  Reiter „Prüfungsklausuren im Original“): die Aufgabentexte der Steuerberaterprüfung im
  **amtlichen Wortlaut**, so wie sie am Prüfungstag vorgelegen haben – kein fortgeschriebener
  Rechtsstand, keine Bearbeitung, die Jahreszahlen des Originaljahrgangs. Eingepflegt ist die
  Klausuren aus dem Gebiet Buchführung und Bilanzierung der Prüfungsjahrgänge **2022/2023**
  (vier Teile, 100 Wertungspunkte: 33 / 17 / 22 / 28) und **2021/2022** (drei Teile, in der
  Quelle ohne Punkteangabe) – je sechs Stunden Bearbeitungszeit.
  **Zu diesen Aufgaben enthält die Quelle keine Lösung** – und es wird hier keine erfunden.
  Jeder Eintrag sagt das offen, hält fest, was die Aufgabenstellung selbst als Zielvorgabe
  nennt, und verweist auf die Stellen im Campus, an denen dieselben Rechtsfragen mit
  vollständiger Musterlösung stehen. Die fehlenden Lösungen sind in
  `docs/offene-quellen.md`, Abschnitt A, vermerkt.
  **Teil I** (Einzelunternehmen Kevin Klein, 33 Punkte): Mietereinbauten mit Rückbaupflicht,
  die von einem Schwager gegen 30.000 € übernommen werden, während dieser 9.500 € für die
  Übernahme der Beseitigungspflicht zahlt; Bezugsrechte aus einer Kapitalerhöhung 6 zu 1; ein
  städtisches Umlegungsverfahren mit 30.000 € Wertausgleich für die Minderzuteilung.
  **Teil II** (Maier GmbH, 17 Punkte): der einzige Teil mit Kostenrechnung – aus einem
  vollständigen Betriebsabrechnungsbogen und sieben Korrekturfeststellungen sind die
  Herstellungskosten zweier Werkverträge zu entwickeln.
  **Teil III** (Maurer & Hauser OHG, 22 Punkte): Realteilung mit Spitzenausgleich aus dem
  Privatvermögen, gefolgt von Veräußerungen im Jahr 2023, deren Rückwirkung ausdrücklich
  abgefragt wird.
  **Teil IV** (Killer GmbH, 28 Punkte): verbilligte Miete der Alleingesellschafterin,
  Grundstücksübertragung gegen bloße Schuldübernahme bei 840.000 € Verkehrswert und ein
  rückwirkender Mietverzicht des Bruders – am Ende stehen steuerlicher Gewinn, Einkünfte
  beider Angehöriger, Anschaffungskosten des Anteils und das steuerliche Einlagekonto.
  Aus dem Jahrgang **2021/2022** kommen drei Teile hinzu, die im Wirtschaftsjahr 2020 spielen –
  mit dem unterjährigen Wechsel des Umsatzsteuersatzes, weshalb 16 % und 19 % in derselben
  Klausur nebeneinanderstehen.
  **Teil I** (Klaus Becker): Grundstückskauf gegen Schuldübernahme und lebenslängliche
  Leibrente, die nach fünf Monaten für 150.000 € abgelöst wird; ein Verwaltungsgebäude, das
  nicht bezahlt, sondern gegen eine gebrauchte Krananlage plus 174.000 € Barausgleich
  getauscht wird; eine selbst hergestellte Stahlladerampe samt vollständigem
  Zuschlagssatzgerüst; dazu ein Pkw mit 1-Prozent-Regelung, der auch freiberuflich genutzt
  wird.
  **Teil II** (Mutter-GmbH): eine rückwirkende Aufwärtsverschmelzung mit abweichendem
  Wirtschaftsjahr und Rumpfwirtschaftsjahr – die Verwertungsrechte an den Romanen eines für
  den Friedenspreis nominierten Autors stehen mit 12.500 € im Buch und sind 200.000 € wert –,
  daneben ein 5-prozentiger Kommanditanteil mit Ergänzungsbilanz über einen selbst
  geschaffenen Firmenwert.
  **Teil III** (Müller-OHG): vier kleinere Fälle – Gebäude in Leichtbauweise mit fest
  eingebauter Theke in einer Rechnungssumme, Verkauf einer 26-prozentigen Beteiligung, eine
  nach Unwetter teilabgerissene und wieder aufgebaute Garage und ein Kinderkarussell in
  kanadischen Dollar mit gestundetem Kaufpreis und einer bereits gebuchten
  Teilwertabschreibung „wegen Kursrückgang des CAD“.
  Prüfung: `npm run check:k3-bil-pruefungsklausuren`
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
- **GrESt-Campus** (Klausur 1, Reiter Grunderwerbsteuer): neuer Campus für ein Fach, das
  bislang keinen hatte. Erfasst ist das Lehrgangsskript „Vorbereitung auf die
  Steuerberaterprüfung · Grunderwerbsteuer“ von Dr. Stephan Vossel (Stand 01/2026)
  **vollständig** im Wortlaut – 20 Kapitel mit 488 Abschnitten und 12 Tabellen. Eingepflegt
  sind die Abschnitte **I** (Charakterisierung: steuerbar ist der Wechsel der
  Rechtsträgerzuordnung, nicht der Übergang wirtschaftlichen Eigentums – weshalb
  Personengesellschaften hier eigene Rechtsträger sind), **II** (das fünfstufige
  Prüfungsschema), **III** (Steuerbarkeit: inländisches Grundstück nach § 2 GrEStG,
  Haupttatbestand, die sechs Nebentatbestände, der Ersatztatbestand des § 1 Abs. 2 GrEStG und
  alle vier Ergänzungstatbestände – § 1 Abs. 2a, 2b nebst Börsenklausel, 3 und 3a – samt der
  Übergangsregeln des § 23 Abs. 20 ff. GrEStG und der Grundstückszurechnung nach § 1 Abs. 4a
  GrEStG) und **IV** (Steuerbefreiungen und Steuervergünstigungen: die acht Befreiungen des
  § 3 GrEStG und ihre Anwendung auf die Ergänzungstatbestände, § 4 GrEStG, die §§ 5, 6 GrEStG
  für Erwerbsvorgänge zwischen Gesamthändern mit Interpolation, Zehn- und
  Fünfzehnjahresfristen, die Konzernklausel des § 6a GrEStG, § 7 GrEStG zum Flächeneigentum
  und § 1 Abs. 6 GrEStG zum Aufeinanderfolgen von Tatbeständen), **V** (Bemessungsgrundlage:
  der Grundsatz der vereinbarten Gegenleistung, der Grundbesitzwert des § 8 Abs. 2 GrEStG, der
  einheitliche Erwerbsgegenstand, die Aufteilung der Gesamtgegenleistung und der Katalog des
  § 9 Abs. 2 GrEStG), **VI** (Steuersatz mit den Ländersätzen aller sechzehn Bundesländer,
  Abrundung, Pauschbesteuerung), **VII** (die acht Steuerschuldner-Tatbestände des § 13 GrEStG,
  Entstehung nach § 38 AO mit der Sonderregel des § 14 GrEStG, Fälligkeit), **VIII**
  (Belegenheitsfinanzamt, gesonderte Feststellungen, Anzeigepflichten der §§ 18 bis 21 GrEStG,
  Unbedenklichkeitsbescheinigung) und **IX** (§ 16 GrEStG mit der Rückgängigmachung, der
  Herabsetzung der Gegenleistung und dem Signing-Closing-Problem, das ein einziger
  Anteilsverkauf zweimal auslöst, samt § 16 Abs. 4a GrEStG und dem AdV-Beschluss des BFH vom
  09.07.2025). Prüfung: `npm run check:k1-grest-skript`
- **Lohnsteuer-Schema** (Klausur 2, Reiter Einkommensteuer → „Lohnsteuer-Schema“): das
  einseitige **Prüfungsschema Arbeitslohn von Markus Nöthen** im Wortlaut, fünf Kapitel mit
  24 Abschnitten und einer Tabelle. Die fünf Stufen der Quelle: Einnahme in Geld oder
  Geldeswert (§ 19 Abs. 1 S. 1 Nr. 1 EStG, § 2 Abs. 1 LStDV, § 8 Abs. 1 S. 1 EStG), steuerbarer
  Arbeitslohn mit den drei Fällen, in denen begrifflich keiner vorliegt (Betriebsveranstaltung,
  R 19.3 und R 19.6 LStR), steuerpflichtiger Arbeitslohn mit den fünf praxisrelevanten
  Befreiungen des § 3 EStG (Nr. 15 Jobticket, Nr. 16 Reisekosten, Nr. 37 Dienstfahrrad, Nr. 39
  Vermögensbeteiligung – dort mit dem Prüfungsbefehl, anschließend **immer** § 19a EStG zu
  prüfen –, Nr. 45 Elektronik), die Bewertung des Sachbezugs (50-Euro-Freigrenze nach § 8 Abs. 2
  EStG gegenüber dem Rabattfreibetrag von 1.080 € nach § 8 Abs. 3 EStG, dazu Pkw-Überlassung und
  Fahrrad durch Gehaltsumwandlung) und schließlich die Entscheidung zwischen Ansatz beim
  Arbeitnehmer und Pauschalversteuerung nach § 40 Abs. 2 oder § 37b Abs. 2 EStG samt deren
  Abgeltungswirkung. Die zweispaltige Bewertungsübersicht der Quelle ist als Tabelle
  rekonstruiert; ein Block unter der Tabelle weist das im Campus aus. Es ist die einzige Datei
  des Drive-Ordners „Lohnsteuer“ mit Textebene – die beiden übrigen sind reine Scans und stehen
  in `docs/offene-quellen.md`, Abschnitt A. Prüfung: `npm run check:k2-lst-schema`
- **Unterlage Verfahrensrecht (Mirbach)** (Klausur 1, Reiter Abgabenordnung → „Unterlage
  Verfahrensrecht (Mirbach)“): die neunseitige **unterrichtsbegleitende Arbeitsunterlage zum
  Tageslehrgang 2026/2027 von Dr. Christian Mirbach** im Wortlaut – sechs Kapitel mit
  57 Abschnitten und 6 Tabellen. Zwei Übersichten und dreizehn Fälle, geordnet nach dem Ablauf
  des Besteuerungsverfahrens: Mitwirkungspflichten und fünf Auskunftsersuchen mit der Frage nach
  Zulässigkeit **und** Verwertbarkeit; vier Bekanntgabekonstellationen (überquellender
  Briefkasten, telefonisch widerrufener Bekanntgabewille, ausgezogener Ehegatte beim
  Zusammenveranlagungsbescheid) entlang des Prüfrasters der Quelle; zwei Fristberechnungen; vier
  Fälle zu den neuen Tatsachen des § 173 AO (falsch beurteilte steuerfreie Einnahme, im Dezember
  gezahlte Januarmiete, falsche Wohnflächenangabe, vergessene Mietwohnung mit 9.500 € Verlust);
  die Wiedereinsetzung; und zuletzt der Lottogewinn vom Vortag gegenüber dem vom Folgetag als
  Schulbeispiel für die Abgrenzung von § 130 und § 131 AO.
  **Die Quelle enthält zu diesen Fällen keine Lösungen** – sie ist ein Arbeitsblatt mit
  Leerzeilen und leeren Tabellenspalten. Es wird hier keine erfunden; jeder Eintrag sagt das
  offen und verweist auf die Stellen im Campus, an denen dieselbe Rechtsfrage vollständig
  durchgeprüft ist. Einzige Ausnahme ist die **Übersicht Verschulden § 110 Abs. 1 AO** auf
  Seite 8, die den Fall 9 selbst auflöst und mit ihren acht Gegensatzpaaren vollständig
  übernommen ist. Prüfung: `npm run check:k1-ao-unterlage-mirbach`
- **Fallsammlung ErbSt/BewR (Mirbach)** (Klausur 1, Reiter Erbschaftsteuer → „Fallsammlung
  (Mirbach)“): die **unterrichtsbegleitende Fallsammlung Erbschaftsteuer/Bewertungsrecht von
  Dr. Christian Mirbach** (Version 1.1, Examen 2026/2027) im Wortlaut – fünf Kapitel mit
  112 Abschnitten und 3 Tabellen, **31 Fälle** nebst den Abwandlungen zu den Fällen 10, 12 und
  28. Geordnet nach dem Prüfungsschema: steuerpflichtiger Vorgang und persönliche Steuerpflicht
  (Fälle 1 bis 8, darunter der Inlandsvermögenskatalog an einem Nachlass aus acht Positionen
  vom Supermarkt auf Mallorca bis zum partiarischen Darlehen an ein Berliner Start-up);
  Nacherbfolge, mittelbare Grundstücksschenkung, Konfusion, schwebendes Geschäft und der
  vollständig durchzurechnende Nachlass mit Bestattungskosten, Grabpflege und Spielschulden
  (9 bis 15); zehn Bewertungsfälle zu Kapitalforderungen und Renten bis hin zur verbundenen
  Leibrente mit Mindest- und Höchstlaufzeit (16 bis 25); drei Grundbesitzfälle, darunter ein
  Mehrfamilienhaus, bei dem jede Etage eine andere Frage aufwirft – Werbefläche an der Fassade,
  Leerstand wegen Feuchtigkeitsschäden, verbilligte Vermietung an den Sohn – und ein
  Einfamilienhaus mit drei Erbbaurechts-Abwandlungen (26 bis 28); sowie drei Fälle zur
  Anteilsbewertung: Substanzwert mit Dreijahresrechnung, Bilanz ohne Zwischenabschluss und
  Zwischenabschluss auf den Stichtag (29 bis 31).
  **Die Quelle enthält zu keinem der 31 Fälle eine Lösung** – sie ist eine Arbeitsunterlage, in
  der hinter jedem Fall nur die Frage steht. Es wird hier keine erfunden; jedes Kapitel sagt das
  offen und verweist auf die Stellen im Campus, an denen dieselbe Rechtsfrage vollständig
  durchgerechnet ist. Die beiden handschriftlichen Lösungsblätter aus demselben Drive-Ordner
  sind nicht maschinenlesbar und stehen in `docs/offene-quellen.md`, Abschnitt A.
  Prüfung: `npm run check:k1-erbst-fallsammlung-mirbach`
- **Beispielsammlungen USt (Schröders)** (Klausur 1, Reiter Umsatzsteuer →
  „Beispielsammlungen (Schröders)“): die **sieben Beispielsammlungen zu den Unterrichtstagen 1
  bis 7** des Tageslehrgangs im Wortlaut, dazu die Übersicht „Umsatzbesteuerung bei PKW“
  (Abschn. 15.23 UStAE) – acht Kapitel mit 111 Abschnitten und 2 Tabellen. Der Aufbau folgt der
  Prüfungsreihenfolge: Unternehmereigenschaft, Leistungsart und Leistungsort (Tag 1);
  Grundstücksumsätze, Option, Bemessungsgrundlage und Vorsteuerabzug (Tag 2);
  Steuerschuldnerschaft, Reihengeschäft, Ausfuhr und Einfuhr (Tag 3); innergemeinschaftlicher
  Warenverkehr mit Dreiecksgeschäft, Verbringen und neuem Fahrzeug (Tag 4); Fernverkauf,
  Kommission, Differenzbesteuerung und Änderung der Bemessungsgrundlage (Tag 5); unentgeltliche
  Wertabgaben und Vorsteuerberichtigung in fünfzehn Beispielen (Tag 6); Reiseleistungen,
  Geschäftsveräußerung, Gesellschaftsverhältnisse und Kleinunternehmer (Tag 7).
  **Die Quellen enthalten keine Lösungen** – auf jeden Sachverhalt folgt nur die Frage. Es wird
  hier keine erfunden; jedes Kapitel sagt das offen und verweist auf die Stellen im Campus, an
  denen dieselbe Rechtsfrage vollständig durchgeprüft ist. Die PKW-Übersicht ist die einzige
  Ausnahme: Sie gibt eine Antwort, und zwar die Gegenüberstellung von unentgeltlicher Entnahme
  und entgeltlicher Überlassung mit ihren zwei Bemessungsgrundlagen, zwei Abschlagsregeln und
  zwei Verteilungszeiträumen bei der Fahrtenbuchmethode; ihre zweispaltige Form ist als Tabelle
  rekonstruiert und im Campus als Rekonstruktion ausgewiesen.
  Prüfung: `npm run check:k1-ust-beispielsammlung`
- **Übungsfälle laufender Unterricht (Nöthen)** (Klausur 3, Reiter Bilanzen → „Übungsfälle
  (Nöthen)“): die **Bilanz-Fallsammlung, die den laufenden Unterricht begleitet** – alle
  vier Teile mit 179 Abschnitten und 7 Tabellen. Jeder Teil hat einen durchgehenden
  Unternehmenssachverhalt, an den sich unabhängige Einzelfälle hängen: **Teil 1** die
  Schreinerei MN in Aachen mit dreizehn Fällen (Einzel- und Pauschalwertberichtigung,
  Substanzerhaltungsverpflichtung, Ehegattengrundstück, Leasing mit Kaufoption, Mietkauf,
  Beteiligung, Elektro-Pkw ohne Fahrtenbuch, Tausch mit Zuschuss, Erwerb auf Rentenbasis,
  zinslose Stundung, zweimal Herstellungskosten mit Betriebsabrechnungsbogen,
  Verbrauchsfolgeverfahren); **Teil 2** der Elektronikhandel Michael Nehring in Dortmund mit
  zehn Fällen (zerstörter Transporter mit Ersatzbeschaffung, Aktien und Aktienfonds,
  Fremdwährungsverbindlichkeit, Teilwert beim halbfertigen Erzeugnis, Gebäude mit
  Hausmeisterwohnung und vier Betriebsvorrichtungen, Mietereinbauten in drei Varianten,
  Ehegattengrundstück, zweimal Abbruchkosten, Erbbaurecht über 99 Jahre).
  **Teil 3** das Bauunternehmen „MN Bau“ in Potsdam, das mit einer Prüferbilanz aus einer
  Betriebsprüfung beginnt – die Aufgabe startet mit den notwendigen Kapitalanpassungsbuchungen –
  und mit einem Grundstücksverkauf endet, dessen stille Reserven nach dem Wunsch des Mandanten
  übertragen werden sollen; **Teil 4** sieben Fälle ausschließlich zum Rückstellungsrecht
  (unterlassene Instandhaltung, noch unentdeckte Patentrechtsverletzung, abgewiesene
  Schadensersatzklage mit laufender Berufungsfrist, Aufbewahrung von Geschäftsunterlagen in drei
  Räumen mit drei Fristen, Jubiläumsuhren mit künftiger Preissteigerung, Pensionsverpflichtung
  mit verpfändeter Rückdeckungsversicherung und der Schuldbeitritt mit §§ 4f, 5 Abs. 7 EStG).
  Die Aufgabenstellung ist in allen Teilen dieselbe – Beurteilung, Bilanzansätze zum
  31.12.2025 und Buchungssätze, mit einer Zielvorgabe, die in den Teilen 1 und 2 dem
  steuerlichen und in den Teilen 3 und 4 dem handelsrechtlichen Ergebnis den Vorrang gibt.
  **Die Quelle enthält keine Lösungen** – es sind Aufgabenblätter. Es wird hier keine erfunden.
  Prüfung: `npm run check:k3-bil-uebungsfaelle`
- **IStR-Schemata und Übungsfälle (Nöthen)** (Klausur 2, Reiter Internationales Steuerrecht →
  „Schemata und Fälle (Nöthen)“): fünf Kapitel mit 45 Abschnitten. Das **zweiteilige
  Prüfungsschema** ist die kürzeste brauchbare Landkarte des Gebiets – vier Stationen von
  § 1 Abs. 1 S. 1 EStG über § 1 Abs. 3 EStG und den Wegzugsfall bis § 1 Abs. 4 EStG, jede mit
  ihren Folgefragen, dazu der vierstufige DBA-Aufbau (Anwendbarkeit, Ansässigkeit, Verteilung,
  Vermeidung) mit den Merkhilfen der Quelle: dem „Meine Oma Prinzip“ für die Verteilungsnormen
  der Art. 6 ff. und der Frage „Wie kommt der Staat an die Kohle?“ für das Erhebungsverfahren
  bei beschränkter Steuerpflicht. Dazu **vier Fälle**, die genau die vier Klausurkonstellationen
  abdecken: der **Wegzug** eines freiberuflichen Musikers in den Irak (kein DBA) mit Wechsel der
  Steuerpflicht mitten im Jahr, einem Auftritt im Dezember und einer 30-prozentigen
  GmbH-Beteiligung; die **beschränkte Körperschaftsteuerpflicht** einer brasilianischen
  Limitada mit Grundstück in Dortmund und zwei Beteiligungen; und die zweiteilige
  **Fallsammlung DBA** mit unbeschränkter Steuerpflicht (Betriebsaufspaltung über die Grenze,
  Warenlager in Wien, 80 von 200 Arbeitstagen in Österreich) und beschränkter Steuerpflicht
  (Grundstücksklausel bei einer Gesellschaft mit Grundbesitz auf Sylt, Aufsichtsratsvergütung).
  **Die Quellen enthalten keine Lösungen** – die Fälle enden mit der Aufgabenstellung. Es wird
  hier keine erfunden. Prüfung: `npm run check:k2-istr-noethen`
- **KSt Teil I (Hamacher)** (Klausur 2, Reiter Körperschaftsteuer → „Teil I (Hamacher)“): das
  Lehrgangsskript **„Körperschaftsteuer, Teil I: Allgemeines und verdeckte Einlage (2026)“**
  (Stand 04/2026) **vollständig im Wortlaut** – alle vier Kapitel der 91-seitigen Quelle in
  46 Kapiteln mit 740 Abschnitten und 32 Tabellen.
  **Kapitel 1 (Steuerpflicht)**, Abschnitte 1.1 bis 1.6: die unbeschränkte Steuerpflicht mit der
  Anknüpfung an Sitz **oder** Geschäftsleitung, dem Typenvergleich bei ausländischen
  Kapitalgesellschaften einschließlich der britischen Ltd. nach dem Brexit und dem
  Welteinkommensprinzip; die beschränkte Steuerpflicht in ihren zwei Spielarten, darunter die des
  § 2 Nr. 2 KStG für juristische Personen des öffentlichen Rechts; Beginn und Ende der
  Steuerpflicht mit der Unterscheidung von Vorgründungsgesellschaft, Vorgesellschaft und
  eingetragener Kapitalgesellschaft; die **Steuerbefreiungen des § 5 KStG** mit Gemeinnützigkeit,
  Mustersatzung, Vier-Sphären-Abgrenzung, Geprägetheorie und der auf 50.000 € angehobenen
  Freigrenze des § 64 Abs. 3 AO; sowie die **Option nach § 1a KStG** mit Antragsfrist,
  Normenkatalog und den Folgen für den Mitunternehmer, der zum Anteilseigner wird.
  **Kapitel 2 (Einkommensermittlung)**, Abschnitte 2.1 bis 2.2.5: die Bemessungsgrundlage mit dem
  abweichenden Wirtschaftsjahr, die Brückenvorschrift des § 8 Abs. 1 Satz 1 KStG und die
  Umqualifizierung nach § 8 Abs. 2 KStG, die zweistufige Einkommensermittlung, das Schema des
  R 7.1 KStR mit der Rückrechnung vom Bilanzgewinn, die außerbilanziell herauszunehmenden
  „steuerfreien“ Erträge, die nicht abziehbaren Ausgaben des § 4 Abs. 5 EStG samt § 15 Abs. 1a
  UStG, das Abzugsverbot für Personensteuern mit der Besonderheit bei den Zinsen des § 233a AO,
  die hälftige Hinzurechnung der Aufsichtsratsvergütungen, der Spendenabzug mit beiden
  Höchstbeträgen und der **Verlustabzug** mit Rücktrag in zwei Jahre und Mindestbesteuerung.
  **Kapitel 3 (verdeckte Einlage)**, Abschnitte 3.1 bis 3.9 – der Schwerpunkt des Skripts: die
  Begriffsdefinition aus R 8.9 Abs. 1 KStR und die Abgrenzung zur offenen Einlage, die Rolle der
  Buchung für die Einkommenskorrektur, die Fallgruppen Vermögensmehrung und verhinderte
  Vermögensminderung; die gesellschaftsrechtliche Veranlassung nach dem Fremdvergleich, der
  einlagefähige Vermögensvorteil und der **niemals** einlagefähige Nutzungsvorteil, weshalb das
  zinslose Gesellschafterdarlehen keine verdeckte Einlage ist; die Zurechnung bei unmittelbarer,
  disquotaler und mittelbarer Einlage einschließlich der Beteiligungskette; die vollständige
  **Bewertung** mit Teilwert, der Drei-Jahres-Regelung des § 6 Abs. 1 Nr. 5 Buchstabe a EStG und
  der Einlage einer Beteiligung; die **neun Anwendungsfälle** von der verbilligten Übertragung
  über die überteuerte Lieferung und die Schuldübernahme bis zum **Forderungsverzicht**, bei dem
  ein Teilverzicht nach dem BFH zuerst den wertlosen Teil aufzehrt, und zum **Besserungsschein**,
  der bei Eintritt vollständig „zurückgedreht“ wird; der Exkurs zum **Rangrücktritt**, dessen
  steuerliche Folgen allein an der Tilgungsabrede hängen; die **Auswirkungen** bei Gesellschaft und
  Gesellschafter mit Einlagekonto, Zuflussfiktion und den Teilabzugsverboten des § 3c Abs. 2 EStG
  und § 8b Abs. 3 Satz 4 KStG; das **Korrespondenzprinzip** in materieller Gestalt mit der
  Soweit-Verknüpfung und in formeller Gestalt nach § 32a Abs. 2 KStG; das **Ausgangsvermögen** in
  allen fünf Konstellationen mit Zwangsentnahme und Zwangseinlage; die **Schenkungsteuer** nach
  § 7 Abs. 8 Satz 1 ErbStG, die ohne Zuwendungswillen auskommt und sogar Nutzungseinlagen erfasst;
  und das Verhältnis zu **§ 1 AStG**.
  **Kapitel 4 (Ermittlung der Körperschaftsteuer)**: der Tarif von 15 % mit der Absenkung um je
  einen Prozentpunkt in den Jahren 2028 bis 2032, der Solidaritätszuschlag auf die festzusetzende
  Körperschaftsteuer und das Berechnungsschema des R 7.2 KStR.
  Prüfung: `npm run check:k2-kst-teil1`
- **KSt Teil II (Hamacher)** (Klausur 2, Reiter Körperschaftsteuer → „Teil II (§ 8b KStG)“): das
  Lehrgangsskript **„Körperschaftsteuer, Teil II: Beteiligungserträge § 8b KStG (2026)“**
  (Stand 05/2026) im Wortlaut – **vollständig**, 45 Kapitel mit 608 Abschnitten und 44 Tabellen. § 8b KStG ist die Vorschrift, die das Körperschaftsteuerrecht zum System macht: Sie
  verhindert, dass ein einmal versteuerter Gewinn auf dem Weg durch eine Beteiligungskette
  mehrfach besteuert wird, und zieht daraus konsequent auch die Kehrseite – wer die Gewinne aus
  einer Beteiligung nicht versteuert, darf die Verluste aus ihr nicht abziehen. Das
  **Kapitel 1 (Bedeutung und persönlicher Anwendungsbereich)** ist vollständig, mit dem Merksatz,
  der über jeden Fall entscheidet: § 8b KStG greift nur, wo überhaupt eine inländische
  Einkommensermittlung stattfindet – wo die Kapitalertragsteuer nach § 32 Abs. 1 Nr. 2 KStG
  abgeltend wirkt, gibt es kein Einkommen zu korrigieren und damit auch keine Steuerfreiheit. Dazu
  die Sonderfälle der beschränkt Steuerpflichtigen ohne inländische Betriebsstätte: Bei
  Ausschüttungen schleust § 44a Abs. 9 EStG die 25%ige Quellensteuer über eine Erstattung von 2/5
  rechnerisch auf den Körperschaftsteuersatz von 15 % herunter (in EU/EWR-Fällen sogar vollständig
  nach § 43b EStG); bei Veräußerungsgewinnen bleibt es dagegen bei der Veranlagung, dann aber nach
  dem BFH-Urteil vom 31.05.2017 **ohne** die Fünf-Prozent-Pauschale des § 8b Abs. 3 Satz 1 KStG,
  weil ohne inländische Betriebsstätte keine inländischen Betriebsausgaben angefallen sein
  können – die Einkünfte betragen dann 0 €. Aus **Kapitel 2** sind der Begriff der
  Gewinnausschüttung und das Korrespondenzprinzip eingepflegt. Erfasst sind ordentliche **und
  verdeckte** Ausschüttungen, Genussrechte mit Eigenkapitalcharakter, Liquidations- und
  Kapitalherabsetzungsraten jenseits des Nennkapitals sowie Ausschüttungen nach einer
  Hinzurechnungsbesteuerung – alles vorbehaltlich der Streubesitzregelung des § 8b Abs. 4 KStG.
  Die **Ansässigkeit** der ausschüttenden Gesellschaft ist gleichgültig, und ein
  DBA-Schachtelprivileg verdrängt die nationale Norm nicht – was den Steuerpflichtigen die
  Fünf-Prozent-Pauschale des § 8b Abs. 5 KStG kostet, die bei alleiniger Abkommensfreistellung
  nicht anfiele. **Nicht** erfasst sind Auskehrungen aus dem steuerlichen Einlagekonto und die
  Gewinnabführung einer Organgesellschaft, beides aus demselben Grund: Es fehlt schon am Bezug
  i. S. des § 20 Abs. 1 Nr. 1 EStG. Das **materielle Korrespondenzprinzip** des
  § 8b Abs. 1 Satz 2 KStG versagt die Steuerfreiheit, soweit die Ausschüttung bei der leistenden
  Gesellschaft das Einkommen gemindert hat – im Beispiel versteuert die Anteilseignerin deshalb
  die vollen 980.000 € Miete, 500.000 € als Mieteinnahme und 480.000 € als nicht freigestellten
  Beteiligungsertrag. Die **formelle Korrespondenz** des § 32a Abs. 1 KStG nimmt das zurück, sobald
  der Bescheid der leistenden Körperschaft gerade wegen der verdeckten Gewinnausschüttung
  korrigiert wird; ein Grundlagenbescheid ist er auch dort nicht, weshalb das Finanzamt des
  Anteilseigners eigenständig prüfen darf. Eine Übersicht stellt diesen Mechanismus dem
  spiegelverkehrten der verdeckten Einlage aus Teil I gegenüber; eine Abwandlung zeigt
  § 32a Abs. 1 KStG in der umgekehrten Richtung, in der die Korrektur dem Anteilseigner eine
  bereits gewährte Steuerbefreiung wieder nimmt.
  Die **Streubesitzgrenze des § 8b Abs. 4 KStG** ist ebenfalls eingepflegt: Maßgebend ist allein
  die **unmittelbare** Beteiligung am Nenn- oder Stammkapital, nicht die Stimmrechte und nicht
  mittelbare Beteiligungen – wohl aber anteilig die über eine **Personengesellschaft** gehaltenen
  Anteile (§ 8b Abs. 4 Sätze 4 und 5 KStG), weil der Mitunternehmeranteil ertragsteuerlich
  transparent ist. Zwei Beispiele der Quelle unterscheiden sich nur in der Rechtsform der
  Zwischengesellschaft und gehen deshalb entgegengesetzt aus: über eine GmbH bleibt es bei 6 %
  und damit voller Steuerpflicht, über eine KG kommen 48 % hinzu und die Ausschüttung ist
  steuerfrei. Geliehene Anteile bleiben nach § 8b Abs. 4 Satz 3 KStG beim Verleiher, was die
  naheliegende Gestaltung des Zukaufs zum Stichtag abschneidet – die Vorschrift überspielt dafür
  sogar das wirtschaftliche Eigentum. Maßgeblicher Stichtag ist der **01.01. des Kalenderjahres**,
  und die Betrachtung wirkt in beide Richtungen: Ein späterer Anstieg über 10 % hilft nicht, ein
  späteres Absinken schadet nicht. Bei abweichendem Wirtschaftsjahr können in einem Wirtschaftsjahr
  zwei verschiedene Stichtage maßgebend sein, während die Gewerbesteuer nach § 9 Nr. 2a GewStG
  daneben auf den Beginn des Erhebungszeitraums abstellt. Die einzige Ausnahme von der
  Stichtagsregel ist der **Hinzuerwerb** eines Anteils von mindestens 10 %, der nach
  § 8b Abs. 4 Satz 6 KStG auf den 01.01. zurückbezogen wird – nach dem BFH auch bei mehreren
  Erwerben aus einem wirtschaftlich einheitlichen Vorgang, nicht aber bei zusammenhanglosen
  Zukäufen. Entscheidend ist der **erworbene** Anteil, nicht die erreichte Quote: Eine Aufstockung
  von 4 % auf 10 % bringt nichts, während der Erwerb eines 10%igen Anteils neben 4 % Altbestand zur
  Aufteilung der Ausschüttung führt (im Beispiel 140.000 € × 10/14 steuerfrei, × 4/14
  steuerpflichtig). Schließlich die **Kapitalertragsteuer**: Sie ist auch auf die steuerfreie
  Ausschüttung einzubehalten, und bei der Nettomethode sind zwei Schritte in fester Reihenfolge
  nötig – erst die Abzugssteuern nach § 10 Nr. 2 KStG hinzurechnen, um die Bruttoausschüttung
  herzustellen, dann diese nach § 8b Abs. 1 KStG abziehen. Im Ergebnis bleiben genau die 5 %
  nicht abziehbaren Betriebsausgaben im Einkommen.
  Die **Betriebsausgabenpauschalierung** des § 8b Abs. 5 KStG wirkt in zwei Richtungen: Die 5 %
  werden auch dann hinzugerechnet, wenn überhaupt keine Beteiligungsaufwendungen angefallen sind
  (das Bundesverfassungsgericht hat diese Typisierung gebilligt) – dafür bleiben die
  **tatsächlichen** Aufwendungen in voller Höhe abziehbar, weil § 8b Abs. 5 Satz 2 KStG sogar
  § 3c Abs. 1 EStG ausschließt. Bei hohen Finanzierungskosten ist die Pauschale deshalb günstiger
  als die allgemeine Regel. Sie greift auch bei **DBA-Schachteldividenden**, weil sie keine
  Gewinnbesteuerung ist und das Abkommen nur die Einnahmen freistellt, nicht die Einkünfte.
  Das **gewerbesteuerliche Schachtelprivileg** des § 9 Nr. 2a GewStG geht in drei Punkten eigene
  Wege: Es verlangt **15 %** statt 10 %, kennt **keinen Rückbezug** des unterjährigen Erwerbs – und
  berücksichtigt dafür auch **mittelbare** Beteiligungen. Die Abweichungen wirken in beide
  Richtungen, was zwei spiegelbildliche Fälle der Quelle zeigen: Wer am 15.04. eine 10%ige
  Beteiligung erwirbt, ist körperschaftsteuerlich fast vollständig freigestellt (Einkommen 5.000 €),
  gewerbesteuerlich aber voll belastet (Gewerbeertrag 100.000 € nach Hinzurechnung gemäß
  § 8 Nr. 5 GewStG); wer 8 % unmittelbar und 7 % mittelbar hält, versteuert körperschaftsteuerlich
  die vollen 100.000 € als Streubesitz, gewerbesteuerlich dagegen nichts.
  Der **Umfang der Kürzung** ist die nächste Feinheit: Sie läuft im Regelfall leer, weil die
  freigestellte Ausschüttung die Ausgangsgröße des § 7 Satz 1 GewStG gar nicht mehr erreicht, und
  die Pauschale gilt nach § 9 Nr. 2a Satz 4 GewStG ausdrücklich nicht als Ausschüttung. Praktische
  Bedeutung gewinnt die Kürzung erst dort, wo die Ebenen auseinanderfallen – vor allem beim
  materiellen Korrespondenzprinzip, das rein körperschaftsteuerlich ist: Die verdeckte
  Gewinnausschüttung bleibt dann körperschaftsteuerpflichtig und wird gewerbesteuerlich gleichwohl
  gekürzt. Bei den **beteiligungsbezogenen Aufwendungen** schließen sich zwei Wege gegenseitig
  aus: Ist die Ausschüttung körperschaftsteuerfrei, trennt die Pauschalierung den Zusammenhang
  zwischen Aufwand und Ertrag, und die Aufwendungen werden allein nach § 8 Nr. 1 GewStG behandelt;
  ist sie dagegen nur gewerbesteuerfrei, zehren sie zuerst den Kürzungsrahmen des
  § 9 Nr. 2a Satz 3 GewStG auf – bis auf null, denn eine „negative“ Kürzung soll die Vorschrift
  gerade verhindern –, und § 8 Nr. 1 GewStG greift nur noch für einen Überhang.
  Für **ausländische** Beteiligungen gilt mit § 9 Nr. 7 GewStG dasselbe wie im Inland – die Quelle
  rechnet denselben Fall mit einer brasilianischen Beteiligung durch und kommt auf dieselben
  Zahlen. Im **DBA-Fall** tritt § 9 Nr. 8 GewStG daneben, beide Vorschriften sind nebeneinander zu
  prüfen und für den Steuerpflichtigen gilt die günstigere: Die Abkommensgrenze kann die 15 % auf
  meist 10 % senken, während umgekehrt § 9 Nr. 7 GewStG den Stichtag liefert, den § 9 Nr. 8 GewStG
  offenlässt. Greift **kein** Schachtelprivileg, dreht § 8 Nr. 5 GewStG die körperschaftsteuerliche
  Freistellung wieder zurück, und zwar um **95 %** der Ausschüttung, weil die Pauschale
  gegenzurechnen ist – sie hat das Einkommen schon belastet. War die Ausschüttung dagegen bereits
  körperschaftsteuerlich Streubesitz, entfällt die Hinzurechnung ganz, weil sie ohnehin im
  Gewerbeertrag steckt. Über allem steht der Vorrang des Abkommensrechts: Verbietet ein DBA die
  Besteuerung der Dividende, ist nach dem BFH auch § 8 Nr. 5 GewStG verdrängt.
  **Damit sind die Kapitel 1 und 2 der Quelle vollständig.**
  Aus **Kapitel 3 (Steuerfreiheit von Veräußerungsgewinnen)** ist der Grundfall der Veräußerung
  eingepflegt. Er beginnt mit der wichtigsten Abgrenzung des Skripts: § 8b Abs. 2 KStG setzt
  **keine** Mindestbeteiligungsquote voraus – auch die Veräußerung von Streubesitzanteilen ist
  freigestellt, gleich ob in- oder ausländisch. Dieselbe Beteiligung kann also laufende
  Ausschüttungen steuerpflichtig erbringen und beim Verkauf steuerfrei bleiben. Der Gewinn ermittelt
  sich nach § 8b Abs. 2 Satz 2 KStG als Veräußerungspreis abzüglich Veräußerungskosten und
  Buchwert. **Kaufpreisveränderungen** wirken als rückwirkendes Ereignis nach § 175 Abs. 1 Nr. 2 AO
  auf das Veräußerungsjahr zurück, weil die Ermittlung stichtagsbezogen ist – ausgenommen sind
  gewinn- oder umsatzabhängige Kaufpreisteile, die im Zeitpunkt des Übergangs des wirtschaftlichen
  Eigentums noch nicht hinreichend bestimmt waren und deshalb erst im Jahr ihrer Entstehung erfasst
  werden (dort ebenfalls steuerfrei). Die **Veräußerungskosten** teilen das Schicksal des
  steuerfreien Gewinns; fallen sie in einem anderen Jahr an, werden sie durch gegenläufige
  außerbilanzielle Korrekturen in das Veräußerungsjahr verschoben – im Beispiel bleibt über beide
  Jahre hinweg genau die Pauschale von 22.500 € übrig.
  Der **weite Veräußerungsbegriff** des § 8b Abs. 2 Satz 3 KStG ist bis zur Einlagenrückgewähr
  eingepflegt. Die **verdeckte Einlage von Anteilen** löst schon nach § 6 Abs. 6 Satz 2 EStG eine
  Gewinnrealisierung aus; § 8b Abs. 2 Satz 6 KStG ordnet diesen Gewinn nur dem Anwendungsbereich
  des Absatzes 2 zu, ohne eine eigene Besteuerungsnorm zu begründen. Bei der **verbilligten
  Übertragung an den Gesellschafter** stellt die Hinzurechnung nach § 8 Abs. 3 Satz 2 KStG genau
  den Veräußerungsgewinn her, der bei angemessenem Preis entstanden wäre – beide Rechenwege führen
  im Beispiel auf dieselben 390.000 €. Bemerkenswert ist, dass die Pauschalen auf beiden Ebenen
  unterschiedlich hoch ausfallen (19.500 € bei der Gesellschaft, 20.000 € beim Gesellschafter),
  weil die Gesellschaft vom Gewinn **nach** Abzug der Veräußerungskosten rechnet, der Gesellschafter
  dagegen vom vollen Bezug. Zur Frage, ob bei unterbliebener Hinzurechnung die materielle
  Korrespondenz greift, vertritt die Quelle eine eigene, ausdrücklich als umstritten bezeichnete
  Auffassung: Sie verneint sie, weil eine Erfassung im Ergebnis nichts geändert hätte. Die
  **Einlagenrückgewähr** schließlich ist kein Bezug i. S. des § 20 Abs. 1 Nr. 1 EStG, mindert
  zunächst erfolgsneutral die Anschaffungskosten und führt erst oberhalb des Buchwerts zu einem
  nach § 8b Abs. 2 Satz 1 KStG steuerfreien Gewinn – eine einzige Ausschüttung kann dadurch drei
  Behandlungen nebeneinander auslösen, mit Pauschalen aus zwei verschiedenen Rechtsgrundlagen.
  Die **Sachdividende** verbindet beide Absätze in einem Vorgang: Bei der ausschüttenden
  Gesellschaft ist die Hingabe der Anteile eine Veräußerung zum gemeinen Wert (Absatz 2), beim
  Empfänger bleibt es bei einer Gewinnausschüttung (Absatz 1) einschließlich der Streubesitzprüfung.
  Die **Wertaufholung** folgt einer einfachen Symmetrie: Was steuerlich nicht abgezogen werden
  durfte, muss bei seiner Rückgängigmachung auch nicht versteuert werden. Für Teilwertabschreibungen
  bis zum 31.12.2001, die das Einkommen noch gemindert haben, ist die Aufholung deshalb nach
  § 8b Abs. 2 Satz 4 KStG **steuerpflichtig** – bis zur Höhe der historischen Abschreibung, der
  Überhang bleibt frei. Bestehen alte und neue Abschreibungen nebeneinander, wird nach dem
  BFH-Urteil vom 19.08.2009 **entgegen der Verwaltungsauffassung** zuerst die jüngere aufgeholt
  („last in – first out“), was dem Steuerpflichtigen regelmäßig zugutekommt. Vier durchgerechnete
  Fälle zeigen die Varianten; dabei bemisst sich die Fünf-Prozent-Pauschale jeweils nur nach dem
  **steuerfreien** Teil des Gewinns.
  Zur **Pauschalierung** merkt die Quelle einen Satz mit erheblichen Folgen an: Bei mehreren
  Veräußerungsgewinnen wird sie auf jeden einzelnen angewandt, **eine Saldierung – auch mit
  Veräußerungsverlusten – findet nicht statt**. Wer in einem Jahr eine Beteiligung mit 1.000.000 €
  Gewinn und eine andere mit 1.000.000 € Verlust veräußert, steht also nicht bei null, sondern hat
  50.000 € nicht abziehbare Betriebsausgaben. Bei **beschränkt Steuerpflichtigen** ohne inländische
  Betriebsstätte läuft die Pauschale dagegen leer, weil es keine abziehbaren Betriebsausgaben geben
  konnte – die inländischen Einkünfte betragen dann 0 €. **Gewerbesteuerlich** kommt der Abschnitt
  mit drei Sätzen aus, wo das Kapitel 2 vier Unterabschnitte brauchte: Freistellung und Pauschale
  schlagen über § 7 Satz 1 GewStG durch, ein Schachtelprivileg nach § 9 Nr. 2a oder Nr. 7 GewStG
  gibt es für Veräußerungsgewinne nicht – und es wird auch keines gebraucht, weil kein
  Hinzurechnungstatbestand die Freistellung zurückholt. Nur die steuerpflichtige Wertaufholung
  bleibt auf beiden Ebenen steuerpflichtig.
  **Damit sind die Kapitel 1 bis 3 der Quelle vollständig.**
  Aus **Kapitel 4 (Abzugsverbot von Gewinnminderungen)** ist der Begriff der Gewinnminderung
  eingepflegt. Er enthält die schärfste Asymmetrie des Skripts: Substanzbezogene Gewinnminderungen
  sind auch bei **Streubesitz** nicht abziehbar, weil § 8b Abs. 4 KStG nur den Absatz 1
  ausschließt – der Streubesitzgesellschafter trägt damit die Nachteile beider Systeme, volle
  Steuerpflicht der laufenden Erträge **und** volles Abzugsverbot der Substanzverluste. Ob das auch
  für die ausschüttungsbedingte Teilwertabschreibung gilt, ist beim BFH unter I R 24/25 anhängig.
  Nicht erfasst sind die laufenden Betriebsausgaben der Beteiligung. Beim **Ausfall der
  Kaufpreisforderung** entsteht kein abziehbarer Aufwand, sondern der Veräußerungsgewinn wird
  rückwirkend neu berechnet – in beiden Jahren rein außerbilanziell; zwei durchgerechnete Varianten
  zeigen, wie nah Steuerfreiheit und Abzugsverbot beieinanderliegen, denn welche Vorschrift greift,
  entscheidet allein das Vorzeichen des nach § 8b Abs. 2 Satz 2 KStG ermittelten Betrags. Die
  **Kosten eines gescheiterten Beteiligungserwerbs** bleiben dagegen voll abziehbar, weil es an
  einem „Anteil i. S. des Absatzes 2“ fehlt – der abgebrochene Erwerb ist steuerlich also günstiger
  als der erfolgreiche.
  Die **Gesellschafterdarlehen** (§ 8b Abs. 3 Sätze 4 bis 8 KStG, seit dem VZ 2008) unterliegen
  demselben Abzugsverbot, wenn der Darlehensgeber „qualifiziert“ ist – das sind der zu mehr als
  25 % beteiligte Gesellschafter, eine ihm nahestehende Person und ein rückgriffsberechtigter
  Dritter. Die Regelung ist das körperschaftsteuerliche Gegenstück zu § 3c Abs. 2 Satz 2 EStG aus
  Teil I und bewusst parallel gebaut; der Unterschied liegt in der Rechtsfolge, denn bei der
  Kapitalgesellschaft ist die Gewinnminderung **vollständig** nicht abziehbar statt nur zu 40 %
  gekürzt. Vorrangig zu prüfen ist stets, ob die Darlehensgewährung von Anfang an eine verdeckte
  Einlage war – dann scheitert der Abzug schon an Satz 3, und auf die 25-Prozent-Grenze kommt es
  nicht mehr an. Bei der Ermittlung dieser Grenze zählen – **anders als bei der Streubesitzgrenze
  des Absatzes 4** – auch mittelbare Beteiligungen mit, und zwar durchgerechnet und ohne dass es
  auf eine Beherrschung der Zwischengesellschaft ankäme (40 % × 80 % = 32 %). Eine Übersicht stellt
  die beiden Beteiligungsprüfungen gegenüber, die in derselben Vorschrift stehen und nach
  entgegengesetzten Regeln funktionieren.
  Gibt eine **Personengesellschaft** das Darlehen, entscheidet ihre Rechtsnatur über das Ergebnis:
  Bei der gewerblichen Mitunternehmerschaft zählt ihre **eigene** Beteiligung (30 % – Abzugsverbot
  greift über § 8b Abs. 6 KStG), bei der vermögensverwaltenden zerlegt § 39 Abs. 2 Nr. 2 AO das
  Gesamthandsvermögen und übrig bleiben durchgerechnete 9 % (kein Abzugsverbot). Derselbe
  Sachverhalt, ein um 300.000 € abweichendes Einkommen – und ausnahmsweise ist die fehlende
  Gewerblichkeit die günstigere Gestaltung. Die Begründung liegt in einer feinen Wortlautbeobachtung
  der Quelle: § 8b Abs. 3 Satz 4 KStG spricht vom **„Gesellschafter“**, § 3c Abs. 2 Satz 2 EStG vom
  **„Steuerpflichtigen“** – deshalb greift die körperschaftsteuerliche Norm auf Ebene der
  Personengesellschaft, die einkommensteuerliche erst bei den Mitunternehmern (die mit 10,5 %
  unter der Grenze bleiben). **Zeitlich** ist die Vorschrift außerordentlich weit: Sie greift nach
  vorn, weil ein Darlehen durch späteren Zukauf in sie hineinwachsen kann, und nach hinten, weil
  sie anwendbar bleibt, wenn die Beteiligung längst verkauft ist; auf die Dauer der qualifizierten
  Beteiligung kommt es nicht an. Einzige Schranke ist, dass der Darlehensgeber im Zeitpunkt der
  Hingabe überhaupt beteiligt war. Das ist wiederum das Gegenstück zur Stichtagsregel des
  Absatzes 4, die genau **einen** Tag prüft. Eine schon **vor** der Darlehenshingabe gesunkene
  Quote zählt dagegen nach der ausdrücklich umstrittenen Auffassung der Quelle nicht mit – anders
  nur bei gezielter Reduzierung im zeitlichen Zusammenhang mit der Darlehensvergabe.
  Die **nahe stehende Person als Darlehensgeber** erweitert das Abzugsverbot über
  § 8b Abs. 3 Satz 5 KStG auf Darlehen, bei denen der Geber selbst gar nicht oder nur gering
  beteiligt ist: die Mutter an die Enkelin ebenso wie die Schwester an die Schwester. Maßgebend
  ist § 1 Abs. 2 Nr. 1 bis 3 AStG, und dort sind stets zwei Rollen zu besetzen – die „Person“ ist
  immer der Darlehensgeber, der „Steuerpflichtige“ immer derjenige, der zu mehr als 25 % an der
  Darlehensnehmerin beteiligt ist. Die beiden Quoten arbeiten dabei gegeneinander: Für das
  Nahestehen genügen **mindestens** 25 %, für die qualifizierte Beteiligung sind **mehr als** 25 %
  nötig. Im Beispiel reicht die mittelbare Beteiligung von 25 % × 40 % = 10 % für Satz 4 nicht aus,
  das Nahestehen zur zwischengeschalteten Gesellschaft aber gerade eben. Über allem steht der
  Vorrang der **verdeckten Gewinnausschüttung**: § 8 Abs. 3 Satz 2 KStG geht § 8b Abs. 3 KStG
  generell vor, weil er auch beim Anteilseigner und beim Darlehensnehmer Folgen auslöst – weshalb
  der BFH 2018 offenlassen konnte, ob auch up-stream-Darlehen unter Satz 5 fallen. Ob der
  qualifiziert beteiligte Anteilseigner auch eine natürliche Person oder Personengesellschaft sein
  kann, bejaht die Finanzverwaltung in bundeseinheitlicher Abstimmung; die Frage ist beim BFH unter
  I R 11/24 anhängig.
  Beim **rückgriffsberechtigten Dritten** greift die Vorschrift über zwei Ecken: Der Gesellschafter
  gibt gar kein Darlehen, er bürgt nur – erst wenn die Bürgschaft gezogen wird, entsteht der
  Rückgewähranspruch gegen die eigene Gesellschaft, und dessen Abschreibung ist die Gewinnminderung
  i. S. des § 8b Abs. 3 Satz 4 KStG. Der Rückgriffstatbestand ist dabei **weit** auszulegen: Eine
  vertragliche Regelung ist nicht erforderlich, schon eine **faktische** Rückgriffsmöglichkeit
  genügt – Patronatserklärung oder bloßer Konzernrückhalt reichen aus. Beim ursprünglichen
  Darlehensgeber greift § 8b KStG dagegen nicht, weil sein Anspruch durch den Rückgriff bereits
  befriedigt ist. Die **Nichtabziehbarkeit** wirkt nur beim Darlehensgeber: § 8b Abs. 3 Satz 4 KStG
  sieht **keine** korrespondierende Behandlung beim Darlehensnehmer vor, dessen Wegfall des
  Passivpostens steuerpflichtiger Ertrag bleibt – derselbe Vorgang wird also zweimal besteuert, und
  der Gesetzgeber verweist dafür lediglich auf einen Billigkeitserlass, der Ermessensentscheidung
  und kein Rechtsanspruch ist. Erholt sich das Darlehen später wieder, stellt § 8b Abs. 3 Satz 9
  KStG die Symmetrie her: Im Besserungsfall ist der Ertrag bei der Einkommensermittlung wieder
  abzuziehen, soweit der Aufwand zuvor hinzugerechnet worden ist – im Beispiel heben sich
  Hinzurechnung 2026 und Abzug 2028 mit je 1.000.000 € auf. Vorrangig zu prüfen bleibt dabei stets,
  ob der Verzicht nicht in Höhe des werthaltigen Teils eine verdeckte Einlage ist; war die Forderung
  wertlos, ist der Teilwert 0 € und es bleibt bei Satz 4. Über **§ 8b Abs. 3 Satz 8 KStG** erfasst
  die Vorschrift schließlich auch sonstige Forderungen, die einer Darlehensgewährung wirtschaftlich
  vergleichbar sind – Pacht, Lizenzen, Lieferungen und Leistungen –, wobei schon das bloße
  **Stehenlassen** über einen längeren Zeitraum genügt. Nicht erfasst ist nach Auffassung der Quelle
  die neben der Darlehensforderung bestehende **Zinsforderung**, weil ihr Wegfall nur den vorher
  versteuerten Zinsertrag ausgleicht. Der tragende Gedanke schneidet die naheliegende
  Gegenargumentation ab: Dass das Grundgeschäft voll gewinnwirksam war, ist unerheblich, weil der
  Anteilseigner mit der Stundung eine davon **abtrennbare Finanzierungsentscheidung** trifft – und
  nur diese ist gesellschaftsrechtlich veranlasst.
  Der **Gegenbeweis** des § 8b Abs. 3 Satz 7 KStG bleibt daneben weitgehend theoretisch. Die
  Beweislast liegt beim Steuerpflichtigen, und die Gesetzesbegründung schließt ihn schon dann aus,
  wenn das Darlehen unverzinslich ist, keine Sicherheiten vereinbart wurden oder es in der Krise
  nicht abgezogen wird – also gerade in den Fällen, in denen es überhaupt zur Gewinnminderung
  kommt. Verlangt ist ausdrücklich ein **Drittvergleich**, nicht ein Fremdvergleich: Nicht die
  Angemessenheit der Konditionen ist die Frage, sondern ob die Gesellschaft das Kapital bei sonst
  gleichen Umständen überhaupt von einem Dritten erhalten hätte. Abstrakte Kreditwürdigkeitsanalysen
  genügen dafür nicht, verlangt sind konkrete Angebote eines Kreditinstituts. Und weil nur die
  **eigenen** Sicherheiten der Gesellschaft zählen (sog. stand-alone-Basis), scheitert der Nachweis
  regelmäßig schon daran, dass andere Bankdarlehen durch Gesellschafterbürgschaften besichert sind –
  denn damit hat ein Dritter bereits dokumentiert, dass er der Gesellschaft allein nicht getraut hat;
  im Bürgschaftsfall des Abschnitts 4.2.4 ist er begrifflich ausgeschlossen. Zu führen ist er auf
  den Zeitpunkt der ursprünglichen Kreditaufnahme **oder** des schädlichen Stehenlassens.
  Ausgenommen vom Abzugsverbot sind allein die **Wechselkursverluste**: Seit dem VZ 2022 stellt
  § 8b Abs. 3 Satz 6 KStG klar, dass sie keine Gewinnminderung i. S. des Satzes 4 sind – zum
  Gleichklang mit den Kursgewinnen, die mangels Befreiungstatbestand stets steuerpflichtig sind.
  Bis einschließlich VZ 2021 gilt das nicht, dort bleibt es nach dem BFH beim Abzugsverbot. Erfasst
  ist dabei nur der Kursverlust selbst; fällt dasselbe Fremdwährungsdarlehen wegen mangelnder
  Bonität aus, greift Satz 4 unverändert. **Gewerbesteuerlich** kommt das Kapitel mit zwei Sätzen
  aus: Für Gewinnminderungen i. S. des § 8b Abs. 3 KStG gibt es keine Ausnahmen, sie sind in der
  Ausgangsgröße des § 7 Satz 1 GewStG schon nicht mehr enthalten und unterliegen auch keiner
  Hinzurechnungsnorm. **Damit ist auch das Kapitel 4 der Quelle vollständig.**
  Aus **Kapitel 5 (mittelbare Beteiligung über eine Personengesellschaft)** sind die
  Steuerfreistellung der Beteiligungserträge und die Gewinnausschüttungen eingepflegt. § 8b Abs. 6
  KStG behandelt die über einen Mitunternehmeranteil bezogenen Ausschüttungen, Veräußerungsgewinne
  und Gewinnminderungen, als hätte die Kapitalgesellschaft sie unmittelbar bezogen – gleich ob die
  Beteiligung im Gesamthands- oder im Sonderbetriebsvermögen liegt. Bei einer **vermögensverwaltenden**
  Personengesellschaft läuft die Vorschrift dagegen leer, weil § 39 Abs. 2 Nr. 2 AO die Anteile
  ohnehin schon unmittelbar zurechnet. Verfahrensrechtlich am wichtigsten ist die **Bruttomethode**:
  Der Feststellungsbescheid nach § 180 AO weist die Einkünfte **ohne** die Wirkungen des § 8b KStG
  aus und teilt zusätzlich mit, welcher Betrag beim Mitunternehmer unter § 8b KStG bzw. §§ 3 Nr. 40,
  3c Abs. 2 EStG fällt – notwendig, weil dieselbe Ausschüttung je nach Rechtsform des Gesellschafters
  anders zu behandeln ist. Diese Zusatzangabe ist über § 182 Abs. 1 Satz 1 AO **bindend** und nicht
  nur nachrichtlich; gewerbesteuerlich gilt dagegen nach § 7 Satz 4 GewStG die Nettomethode.
  Bilanziell wird der Mitunternehmeranteil nach der **Spiegelbildmethode** entwickelt, wobei zum
  steuerlichen Kapital neben dem Gesamthandskapital auch das Sonderbetriebsvermögen zählt; im
  durchgerechneten Beispiel heben sich dort Sonderbetriebseinnahme und Entnahme sowie
  Sonderbetriebsausgabe und Einlage paarweise auf, so dass es bei 100.000 € bleibt. Bei der
  **Ausschüttung** sind vier Schritte in fester Reihenfolge nötig: Weil die Personengesellschaft nur
  die Nettoausschüttung als Ertrag gebucht hat, stellt erst die Hinzurechnung der anteiligen
  Kapitalertragsteuer nach § 10 Nr. 2 KStG die Bruttoausschüttung her, von der § 8b Abs. 1 KStG dann
  freistellen kann – wer den Schritt vergisst, kommt um den Steuerbetrag zu niedrig heraus. Die
  Streubesitzquote ist **durchzurechnen** (50 % an der KG × 30 % an der Tochter = 15 %), und die
  Kapitalertragsteuer wird nach § 31 KStG erst bei der Mitunternehmer-Kapitalgesellschaft
  angerechnet, weil die Personengesellschaft selbst keine Steuer schuldet.
  Bei den **Veräußerungsgewinnen** gilt § 8b Abs. 2 KStG nicht nur, wenn die Personengesellschaft
  einen Anteil aus dem Gesamthandsvermögen verkauft, sondern auch, wenn die Kapitalgesellschaft
  ihren **Mitunternehmeranteil** veräußert, in dem ein Kapitalgesellschaftsanteil steckt. Dabei
  laufen zwei Rechnungen nebeneinander, die nicht vermischt werden dürfen: Der Gesamtgewinn bemisst
  sich nach dem steuerlichen Kapitalkonto (500.000 € ./. 120.000 € = 380.000 €), der steuerfreie
  Teil dagegen nach dem anteiligen Buchwert der Beteiligung (200.000 € ./. 40.000 € = 160.000 €).
  Alte **Teilwertabschreibungen** holen den Gewinn anteilig in die Steuerpflicht zurück – im
  Beispiel sind von 200.000 € Gewinnanteil 100.000 € nach § 8b Abs. 2 Satz 4 KStG steuerpflichtig,
  weil die Hälfte der historischen Abschreibung von 1997 auf die Mitunternehmerin entfällt –, und
  die Pauschale bemisst sich wie in Kapitel 3 nur nach dem **steuerfreien** Teil. Bei den
  **Gewinnminderungen** steht der schärfste Kontrast des Kapitels: Dasselbe Darlehen über
  1.000.000 € an dieselbe Gesellschaft führt bei der Mitunternehmerin zu einer Hinzurechnung von
  400.000 €, wenn es im **Gesamthandsvermögen** liegt (dann ist die Personengesellschaft selbst die
  qualifizierte Darlehensgeberin und nur der 40%ige Anteil trifft die GmbH), und von 1.000.000 €,
  wenn es im **Sonderbetriebsvermögen** liegt. Dort scheitert die GmbH zwar mit ihren
  durchgerechneten 20 % an § 8b Abs. 3 Satz 4 KStG, wird aber über Satz 5 als nahestehende Person
  der Personengesellschaft erfasst, weil sie an dieser zu 40 % beteiligt ist. **Gewerbesteuerlich**
  gilt bei der Personengesellschaft anders als körperschaftsteuerlich die **Nettomethode** des
  § 7 Satz 4 GewStG – § 8b KStG bzw. das Teileinkünfteverfahren wirken je nach Rechtsform des
  Mitunternehmers schon dort; beim Mitunternehmer selbst wirkt der Gewinnanteil dann nicht noch
  einmal, weil § 9 Nr. 2 und § 8 Nr. 8 GewStG ihn herausnehmen. Zwei vollständig durchgerechnete
  **Mischfälle**, an denen eine natürliche Person und eine Kapitalgesellschaft als Mitunternehmer
  beteiligt sind, zeigen, wie weit das trägt. Sie unterscheiden sich in einer einzigen Zahl – der
  Beteiligungsquote der KG an der ausschüttenden Gesellschaft –, und der Gewerbeertrag springt von
  ./. 175.000 € auf 630.000 €. Der Grund ist, dass diese Quote **zweimal** wirkt: körperschaftsteuerlich
  über die durchgerechnete Streubesitzgrenze des § 8b Abs. 4 KStG (25 % gegen 6 %) und
  gewerbesteuerlich über das Schachtelprivileg des § 9 Nr. 2a GewStG mit seiner eigenen, höheren
  Grenze von 15 %. Im ersten Fall bleibt nach der Kürzung genau der Betrag stehen, der bei einer
  Kapitalgesellschaft als Anteilseignerin entstanden wäre – der Anteil der natürlichen Person ist
  vollständig neutralisiert, weil § 9 Nr. 2a Satz 3 GewStG den Kürzungsrahmen exakt um die
  abgezogenen Aufwendungen mindert. Im zweiten Fall verzahnen sich die beiden Hinzurechnungen: Die
  nach § 3c Abs. 2 EStG nicht abgezogenen 80.000 € haben die Ausgangsgröße nicht gemindert, können
  also nicht nach § 8 Nr. 1a GewStG hinzugerechnet werden, sondern mindern **vorrangig** die
  Hinzurechnung nach § 8 Nr. 5 GewStG. **Damit ist auch das Kapitel 5 der Quelle vollständig.**
  Das **Kapitel 6**, das die Quelle selbst mit „nur Hinweis“ überschreibt, rundet das Bild mit vier
  Sonderregeln ab. § 8b Abs. 7 KStG nimmt **Finanzunternehmen** i. S. des KWG die Steuerfreiheit,
  weil sonst ihre operativen Gewinne vollständig steuerbefreit wären – gibt ihnen dafür aber den
  vollen Abzug der Gewinnminderungen zurück. Genau das machte die Vorschrift bis 2016 zum
  Gestaltungsobjekt; seit dem VZ 2017 sind zwei **kumulative** Merkmale nötig, die eine
  Konzerngesellschaft nicht frei wählen kann: die Mehrheitsbeteiligung eines Kredit- oder
  Finanzdienstleistungsinstituts und der Ausweis der Anteile als Umlaufvermögen. § 8b Abs. 8 KStG
  schließt **Lebens- und Krankenversicherungsunternehmen** ganz aus, weil die handelsrechtlich
  bemessene Rückstellung für Beitragsrückerstattungen (§ 21 KStG) den Beteiligungsertrag schon
  einmal aus dem Einkommen nimmt – die Steuerbefreiung würde ihn ein zweites Mal herausnehmen, und
  bei Teilwertabschreibungen kehrt sich die Verwerfung zulasten des Steuerpflichtigen um. Bei der
  Wertaufholung gilt dort abweichend vom Regelfall des Kapitels 3, dass **zuerst** mit dem Volumen
  der steuerunwirksamen Abschreibung zu verrechnen ist. § 8b Abs. 9 KStG holt für **EU-Ausschüttungen**
  die Freistellung wieder zurück, weil die Mutter-Tochter-Richtlinie es verlangt – aber nur für
  Ausschüttungen, nicht für Veräußerungsgewinne und nicht für Gewinnminderungen. Und § 8b Abs. 10
  KStG beendet die **Wertpapierleihe** als Gestaltung: Leihgebühr und Ausgleichszahlung sind beim
  Entleiher nicht abziehbar, die Dividende ist dafür zu **100 %** frei, weil die Pauschale sonst zu
  einer Übermaßbesteuerung führen würde. Vorgeschaltet ist dabei stets die Frage des
  **wirtschaftlichen Eigentums** – nach dem BFH trägt es, wer Kurschance und Kursrisiko übernimmt.
  Seit der Streubesitzregelung genügt es, dass der Verleiher unter § 8b Abs. 4 KStG fällt; zugleich
  zählen geliehene Anteile nach § 8b Abs. 4 Satz 3 KStG für die Zehn-Prozent-Grenze **nicht** mit,
  weshalb derjenige, der seine gesamten 10 % nur geliehen hat, die Grenze nie erreicht – und die
  Gestaltung schon im Ansatz wertlos wird. **Damit ist das Skript vollständig übernommen – alle
  sechs Kapitel über 70 Seiten.**
  Prüfung: `npm run check:k2-kst-teil2`
- **KSt Teil III (Hamacher)** (Klausur 2, Reiter Körperschaftsteuer → „Teil III (§§ 27, 28 KStG)“):
  das Lehrgangsskript **„Körperschaftsteuer, Teil III: Steuerliches Einlagekonto (§ 27 KStG);
  Grundzüge der Kapitalherauf- und -herabsetzung (§ 28 KStG)“** (21. Auflage, Stand 05/2025) im
  Wortlaut – **vollständig**, 21 Kapitel mit 339 Abschnitten und 32 Tabellen. Anders als die
  Teile I und II trägt dieses Skript den Stand **Mai 2025** und rechnet seine Beispiele im VZ 2025.
  Das steuerliche Einlagekonto beantwortet eine einzige Frage: Was von dem, was die Gesellschaft
  auskehrt, hat der Gesellschafter ihr vorher selbst gegeben? Der entscheidende Satz steht gleich am
  Anfang und wird leicht überlesen – das Konto wird **gesellschaftsbezogen** geführt, nicht
  gesellschafterbezogen. Die Gesellschaft hat immer nur **einen** Bestand, gleichgültig wer die
  Einlage geleistet hat, und deshalb profitiert von einer Einlagenrückgewähr jeder Anteilseigner
  nach seiner Quote – auch derjenige, der nie etwas eingelegt hat. Genau daraus entsteht die
  Grundkonstellation des Kapitels: Die Auskehrung kann die Anschaffungskosten eines Gesellschafters
  überschreiten, obwohl die Gesellschaft nur zurückgibt, was sie einmal erhalten hat. Bis zur Höhe
  der Anschaffungskosten ist der Vorgang immer **steuerneutral**; erst der **Überhang** löst Folgen
  aus, und die fallen je nach Rechtsform und Zugehörigkeit des Anteils auseinander. Im
  Betriebsvermögen einer natürlichen Person und bei § 17 EStG entsteht ein Veräußerungsgewinn im
  Teileinkünfteverfahren – bei § 17 Abs. 4 EStG allerdings **ohne** den Freibetrag des Absatzes 3,
  weil tatsächlich gar nicht veräußert wird. Bei einer Kapitalgesellschaft greift § 8b Abs. 2 KStG,
  so dass dieselbe Ausschüttung **zwei verschiedene** Fünf-Prozent-Pauschalen aus zwei verschiedenen
  Vorschriften auslösen kann (5.000 € nach § 8b Abs. 5 KStG für den regulären Bezug, 1.000 € nach
  § 8b Abs. 3 Satz 1 KStG für den Veräußerungsgewinn). Bei Anteilen unter einem Prozent im
  Privatvermögen bleibt der Überhang dagegen **vollständig unbesteuert** – nicht weil er freigestellt
  wäre, sondern weil das Gesetz dafür keinen Tatbestand vorsieht; die Folge sind **negative
  Anschaffungskosten**, die ein Dogma des Bilanzsteuerrechts durchbrechen und die Besteuerung nur
  aufschieben. Besteht die Beteiligung aus mehreren Anteilen, ist zwingend nach dem Verhältnis der
  **Nominalanteile** aufzuteilen, und zwar ohne Wahlrecht – was im Beispiel der Quelle zu einem um
  160.000 € höheren Veräußerungsgewinn führt als eine zusammengefasste Betrachtung. Alte
  **steuerwirksame Teilwertabschreibungen** holen den Überhang schließlich über § 8b Abs. 2 Satz 4
  KStG bzw. § 3 Nr. 40 EStG in die Steuerpflicht zurück.
  Bei der **Feststellung** ist der Bescheid Grundlagenbescheid für den unmittelbar nachfolgenden
  Feststellungszeitraum. Wird er bestandskräftig, schreibt sich ein Fehler ohne zeitliche Grenze
  fort – typisch sind eine im Zuflussjahr nicht erfasste verdeckte Einlage und eine in der
  Verwendungsreihenfolge nicht abgezogene Ausschüttung –, und der einzige Ausweg über die
  Korrekturnormen der AO ist gerade beim übersehenen Zugang zur Kapitalrücklage **umstritten**.
  Zugleich besteht eine **Korrespondenz** zum Anteilseigner: Nur soweit die Ausschüttung in der
  Feststellung als Abgang berücksichtigt ist, liegt bei ihm eine Einlagenrückgewähr vor, und spätere
  Änderungen wirken nach § 175 Abs. 1 Nr. 2 AO als rückwirkendes Ereignis auf seine Steuerfestsetzung
  durch. Anfechten kann er den Bescheid aber **nicht** – kein Drittanfechtungsrecht, keine Beiladung.
  Die Steuerbescheinigung nach § 27 Abs. 3 KStG entfaltet demgegenüber gar keine Bindungswirkung, sie
  dient nur als Beweis. Bei den **Veränderungen** des Kontos gelten zwei Zeitpunktregeln nebeneinander:
  Einlagen und Leistungen zählen im Jahr des tatsächlichen Zu- bzw. Abflusses, organschaftliche und
  vororganschaftliche Ab- und Minderabführungen dagegen mit Ablauf des Wirtschaftsjahres der
  Organgesellschaft. Die **Verwendungsberechnung** beantwortet dann eine rein rechnerische Frage:
  Reicht das neutrale Vermögen – Eigenkapital des Vorjahres abzüglich Nennkapital und Einlagekonto –
  für die Ausschüttungen des Jahres? Nur der Überschuss kommt aus dem Einlagekonto. Daraus folgen
  drei Konsequenzen: keine Bezeichnungsfreiheit (auch die ausdrückliche „Rückzahlung der
  Kapitalrücklage“ wird zuerst gegen das neutrale Vermögen gerechnet), keine Einzelbetrachtung
  (alle Leistungen werden summiert und das Ergebnis nach dem Betragsverhältnis verteilt, im Beispiel
  200/220 zu 20/220 – auch auf die verdeckte Gewinnausschüttung) und kein Vorgriff (maßgebend sind
  allein die **Vorjahreswerte**, unterjährige Einlagen helfen erst im Folgejahr). Abgeflossen muss
  die Leistung sein: Eine bloß passivierte Ausschüttungsverbindlichkeit zählt nicht mit.
  **Damit ist der Abschnitt 1.3 der Quelle vollständig.** Für **ausländische** Gesellschaften – seit
  2023 auch solche aus Drittstaaten – wird im Antragsverfahren nach § 27 Abs. 8 KStG gerade **kein**
  Einlagekonto festgestellt, sondern nur der Betrag der Einlagenrückgewähr für diese eine Leistung,
  und zwar ausschließlich nach **nationalen** Maßstäben. Die Antragsfrist von zwölf Monaten nach dem
  Wirtschaftsjahr des Abflusses ist eine Ausschlussfrist mit harter Folge: Ohne rechtzeitigen Antrag
  ist die Leistung beim inländischen Anteilseigner voll steuerpflichtig, gleichgültig ob
  wirtschaftlich nur Einlagen zurückgezahlt wurden – handeln muss die Gesellschaft, die Last trägt
  der Gesellschafter. Im Inland trifft die Feststellungspflicht über § 27 Abs. 7 KStG auch
  Körperschaften, die keine Kapitalgesellschaften sind (Genossenschaften, Zweckvermögen, Betriebe
  gewerblicher Art – nicht aber rechtsfähige private Stiftungen), und zwar nach einer **abstrakten**
  Betrachtung auch in leistungslosen Jahren, damit keine „Feststellungspause“ die Kette der
  Grundlagenbescheide unterbricht. Beim **Beginn der unbeschränkten Steuerpflicht** ersetzt der
  fiktive Rückbezug des § 27 Abs. 2 Satz 3 KStG den fehlenden Vorjahresbestand – seit dem
  Jahressteuergesetz 2024 allerdings nicht mehr in Umwandlungsfällen des § 29 KStG, wo der
  übernommene Bestand im Erstjahr nicht ausgekehrt werden kann. Beim **Negativbestand** variiert die
  Quelle ihr eigenes Beispiel um eine einzige Zahl: Sinkt das Eigenkapital von 200.000 € auf
  100.000 €, steigt die Einlagenrückgewähr von 15.000 € auf 70.000 € – und trotzdem bleiben
  20.000 € steuerpflichtiger Bezug, weil § 27 Abs. 1 Satz 4 KStG beim Bestand von 0 € die Grenze
  zieht. Beim **Direktzugriff** gilt das gerade nicht: Die Vorschrift verbietet einen Negativbestand
  nur „durch **Leistungen**“, und der Abgang beim Eintritt des Besserungsfalls oder bei der
  Wiederpassivierung nach einem Rangrücktritt ist keine Leistung – das Konto darf hier ins Minus
  laufen. Damit gibt es zwei Kategorien von Abgängen mit unterschiedlichen Grenzen. Und die
  **optierende Gesellschaft** nach § 1a KStG verfügt über kein Nennkapital, weshalb ihr gesamtes
  steuerliches Eigenkapital den Anfangsbestand des Einlagekontos bildet (im Beispiel 900.000 €): Der
  ausschüttbare Gewinn des Erstjahres beträgt 0 €, jede Ausschüttung ist Einlagenrückgewähr – kein
  Schlupfloch, sondern systemgerecht, weil die Gewinne bei den Mitunternehmern bereits versteuert
  worden sind.
  Die **Verwendungsfestschreibung und Haftungsregelung** des § 27 Abs. 5 KStG schließt das Kapitel 1
  ab und kommt für die beiden Fehlerrichtungen zu entgegengesetzten Ergebnissen. Ein **zu niedriger**
  Ausweis wird festgeschrieben und darf nicht mehr korrigiert werden – gleichgültig, ob er wissentlich
  oder versehentlich erfolgte, und auch dann, wenn die Bescheinigung ganz fehlt: Bis zur Bekanntgabe
  des Feststellungsbescheides nicht erteilt, gilt ein Ausweis von **fiktiv 0 €** als unterstellt
  (passive Falschbescheinigung). Der praktisch wichtigste Fall ist die erst durch die Betriebsprüfung
  aufgedeckte verdeckte Gewinnausschüttung, für die im Ausschüttungsjahr niemand bescheinigen konnte;
  die naheliegende Gegenmaßnahme vorsorglicher Bescheinigungen erkennt die Finanzverwaltung nicht an,
  weil ihnen keine tatsächliche Leistung zugrunde liegt. Ein **überhöhter** Ausweis ist dagegen für
  das Besteuerungsverfahren unerheblich – an seine Stelle tritt die **Haftung** der Gesellschaft für
  die zu niedrige Kapitalertragsteuer, und zwar verschuldensunabhängig (§ 44 Abs. 5 EStG ist
  ausgeschlossen) und mit absolutem Vorrang vor der Veranlagung. Der gemeinsame Nenner beider Fälle
  ist unübersehbar: Der Gesellschaft verbleibt mehr Einlagekontopotential und der Anteilseigner
  versteuert mehr, als die Bescheinigung ausweist – nur der Weg dorthin ist ein anderer, dort die
  Festschreibung, hier die Haftung. Die Haftung selbst ist zunächst **erfolgsneutral**, weil die
  Gesellschaft nur für eine fremde Steuerschuld einsteht und in gleicher Höhe einen
  Rückforderungsanspruch gegen den Gesellschafter erwirbt (im Beispiel 21.100 €); erst der
  **Verzicht** darauf belastet sie, und dann verstärkt um die darauf wiederum entfallende
  Kapitalertragsteuer – ein Folgevorgang, der erneut eine Verwendungsfestschreibung auslösen kann.
  **Damit ist das Kapitel 1 der Quelle vollständig.**
  Bei der **Kapitalerhöhung** (Kapitel 2) entscheidet zuerst die Handelsregistereintragung, denn sie
  benennt die Art der Kapitalerhöhung und ist für die steuerliche Beurteilung **bindend**. Die
  **externe** Kapitalerhöhung ist bei der Gesellschaft ein reiner Aktiv-Passiv-Vorgang ohne
  Einkommenswirkung; die ins Nennkapital geleistete Einlage erhöht das Einlagekonto gerade **nicht**,
  wohl aber ein **Aufgeld**, weil insoweit kein Zugang beim Nennkapital erfolgt. Beim Anteilseigner
  droht das **Überspringen stiller Reserven**, wenn ein Nahestehender zu billig einsteigt: Im Beispiel
  zahlt der Sohn 100.000 € für einen Anteil im gemeinen Wert von 200.000 €, erwirbt also zur Hälfte
  unentgeltlich. Realisiert wird deshalb nichts – stattdessen spaltet sich 1/9 der Anschaffungskosten
  des Vaters ab (das Verhältnis der übergesprungenen 100.000 € zum bisherigen Wert von 900.000 €) und
  wandert mit 44.444 € auf den neuen Anteil, so dass die Besteuerung auf die spätere Veräußerung durch
  den Sohn verschoben wird. Bei der **internen** Kapitalerhöhung ändert sich nur die Zusammensetzung
  des Eigenkapitals, weshalb Gewinn und Einkommen unberührt bleiben; für die Feststellung fingiert
  § 28 Abs. 1 Satz 1 KStG aber **unabhängig von der tatsächlich verwendeten Rücklage** vorrangig den
  Verbrauch des Einlagekontos. Was darüber hinausgeht, wird als **Sonderausweis** festgestellt – ein
  Merkposten, der festhält, dass im Nennkapital versteuerter, ausschüttbarer Gewinn steckt, dessen
  spätere Auskehrung beim Gesellschafter zu einem Bezug führen muss. Er schmilzt nach § 28 Abs. 3
  KStG bei späteren Einlagen wieder ab, und weil diese Verrechnung die **letzte Maßnahme** vor der
  endgültigen Feststellung ist, können Einlagekonto und Sonderausweis nie nebeneinander festgestellt
  werden. Beim Anteilseigner sind die neuen Anteile weder Einkünfte (§ 1 KapErhStG) noch zusätzliche
  Anschaffungskosten – die vorhandenen werden lediglich nach dem Verhältnis der **Nennwerte** neu
  verteilt, im Beispiel 2/3 zu 1/3. Der Maßstab unterscheidet sich damit bewusst von dem der externen
  Kapitalerhöhung, weil dort Wert von einem Gesellschafter auf einen anderen übergeht, hier dagegen
  nicht. **Damit ist auch das Kapitel 2 der Quelle vollständig.**
  Die **Kapitalherabsetzung** (Kapitel 3) vollzieht genau die Gegenbewegung zu § 28 Abs. 1 KStG: Auf
  dem Weg **in** das Nennkapital wurde zuerst das Einlagekonto verbraucht und der Rest zum
  Sonderausweis; auf dem Weg **heraus** wird zuerst der Sonderausweis aufgelöst und nur der Überhang
  dem Einlagekonto gutgeschrieben. Beides zusammen stellt sicher, dass versteuerter Gewinn, der
  einmal ins Nennkapital gewandert ist, bei seiner Rückkehr nicht als Einlage behandelt wird – sonst
  ließe sich die Ausschüttungsbesteuerung über den Umweg des Nennkapitals dauerhaft vermeiden. Bei
  der **vereinfachten** Kapitalherabsetzung ohne Rückzahlung ändert sich nur die Zusammensetzung des
  Eigenkapitals; beim Anteilseigner löst sie nichts aus, weil ihm tatsächlich nichts zufließt – der
  Sonderausweis ist dann zwar verbraucht, aber nie besteuert worden, was konsequent ist, weil die
  spätere Auskehrung des erhöhten Einlagekontos die Anschaffungskosten mindert und bei deren
  Überschreiten doch noch zu einem Veräußerungsgewinn führt. Steuerlich wirkt die Maßnahme mit der
  **Handelsregistereintragung**, bilanziell erst zum darauf folgenden Bilanzstichtag. Kommt es
  dagegen zur **Auskehrung** (ordentliche Kapitalherabsetzung), tritt § 28 Abs. 2 Satz 3 KStG hinzu:
  Der Auszahlungsbetrag mindert das Einlagekonto **unmittelbar** und ausdrücklich **unabhängig von der
  allgemeinen Verwendungsreihenfolge** des § 27 Abs. 1 Satz 3 KStG – einer der Direktzugriffsfälle,
  weshalb die Nennkapitalrückzahlung dem Gesellschafter auch dann als Einlagenrückgewähr zugutekommen
  kann, wenn das neutrale Vermögen gar nicht verbraucht ist. Zugang und Abgang heben sich
  betragsmäßig auf, fallen zeitlich aber auseinander: der Zugang zum Abschluss des Wirtschaftsjahres
  der Eintragung, der Abgang erst bei der tatsächlichen Auskehrung. Die Auflösung des Sonderausweises
  führt zu Bezügen nach § 20 Abs. 1 Nr. 2 EStG mit Kapitalertragsteuer, die nach § 44 Abs. 1 Satz 2
  EStG ebenfalls erst mit der Auskehrung entsteht; reicht das Einlagekonto nicht aus, wird auch der
  Überhang nach § 28 Abs. 2 Satz 4 KStG zum Bezug. Bemerkenswert ist, dass die Gesellschaft über all
  das **keine** Steuerbescheinigung nach § 27 Abs. 3 KStG erteilt – weshalb die strenge
  Verwendungsfestschreibung mangels Anknüpfungspunkt ins Leere läuft und der Anteilseigner sich an
  der Bescheinigung über den Kapitalertragsteuerabzug nach § 45a EStG orientieren muss.
  Beim **Erwerb und der Veräußerung eigener Anteile** wird derselbe Vorgang auf beiden Ebenen nach
  völlig verschiedenen Regeln beurteilt, ohne dass das ein Systembruch wäre. Bei der Gesellschaft
  fehlt es an einem Erwerb, weil handelsrechtlich der Nennbetrag offen vom gezeichneten Kapital
  abzuziehen ist und gar kein Aktivum entsteht – der Vorgang ist eine Kapitalherabsetzung nach § 28
  Abs. 2 KStG. Beim Anteilseigner dagegen wird der Anteil gegen Entgelt übertragen; das ist eine
  Veräußerung wie jede andere. Die Zahlen beider Ebenen lassen sich deshalb **nicht** ineinander
  überführen: Die 190.000 € „technische Leistung“ der Gesellschaft tauchen beim Gesellschafter
  nirgends auf, der schlicht 200.000 € gegen seine Anschaffungskosten rechnet. Der Teil des
  Kaufpreises bis zum Nennbetrag löst Zugang und sofortigen Abgang beim Einlagekonto aus und lässt es
  im Saldo unverändert – ein bestehender Sonderausweis bleibt hier ausnahmsweise unberührt, anders
  als bei der gewöhnlichen Kapitalherabsetzung. Der angemessene Überhang gilt als **technische
  Leistung** ohne Kapitalertragsteuer, weil ihm auf der Gesellschafterebene nichts entspricht; nur
  der **überhöhte** Teil ist verdeckte Gewinnausschüttung mit Steuerabzug, und für ihn greift
  regelmäßig die passive Verwendungsfestschreibung des § 27 Abs. 5 KStG. Die spätere
  Weiterveräußerung wickelt den Vorgang **spiegelbildlich** zurück – der Nennbetrag kehrt ins
  Nennkapital zurück, der Überhang gilt wie ein Aufgeld –, weshalb § 8b Abs. 2 KStG gerade nicht
  anwendbar ist: Wer für 200.000 € kauft und für 300.000 € verkauft, erzielt keinen steuerpflichtigen
  Gewinn, sondern erhöht sein Einlagekonto. Liegt der Preis gesellschaftsrechtlich veranlasst zu
  niedrig, unterbleibt bei der Gesellschaft sogar die Hinzurechnung nach § 8 Abs. 3 Satz 2 KStG, weil
  es an einem gewinnrealisierenden Vorgang fehlt; die verdeckte Gewinnausschüttung sichert allein die
  Folgen beim Anteilseigner ab, der nach der **Fiktionstheorie** in gleicher Höhe zusätzliche
  Anschaffungskosten erhält und damit auf genau den angemessenen Wert kommt. **Damit ist das Skript
  vollständig übernommen – alle drei Kapitel über 39 Seiten.**
  Prüfung: `npm run check:k2-kst-teil3`
- **KSt Teil IV (Hamacher)** (Klausur 2, Reiter Körperschaftsteuer → „Teil IV (vGA)“): das
  Lehrgangsskript **„Körperschaftsteuer, Teil IV: Verdeckte Gewinnausschüttung i. S. des § 8 Abs. 3
  Satz 2 KStG“** (21. Auflage, Stand 07/2025) im Wortlaut – **in Arbeit**, derzeit 7 Kapitel mit 94
  Abschnitten und 11 Tabellen. Die verdeckte Gewinnausschüttung ist eine Vorteilszuwendung an den
  Gesellschafter oder eine ihm nahe stehende Person **außerhalb** der offenen Gewinnverwendung – und
  weil schon die offene Ausschüttung das Einkommen nach § 8 Abs. 3 Satz 1 KStG nicht mindern darf,
  gilt für die verdeckte nichts anderes. Der praktische Einstieg in jeden Klausurfall ist eine
  einzige Frage: **Wer erzielt den Vermögensvorteil?** Liegt er bei der Gesellschaft, ist es eine
  verdeckte Einlage; liegt er beim Gesellschafter oder einer nahe stehenden Person, eine verdeckte
  Gewinnausschüttung. Die Richtung des Vorteils entscheidet damit zugleich, welches der beiden
  Korrespondenzprinzipien greift. Technisch am wichtigsten: Die Korrektur erfolgt **ausschließlich
  außerhalb der Steuerbilanz** – diese bleibt unverändert, der überhöhte Aufwand bleibt gebucht, der
  zu niedrige Ertrag bleibt zu niedrig, und erst bei der Einkommensermittlung wird hinzugerechnet.
  Geprüft werden **fünf** Tatbestandsmerkmale, von denen vier aus R 8.5 Abs. 1 KStR stammen und das
  fünfte – die **Vorteilsgeneigtheit** – ungeschrieben vom BFH ergänzt wurde: Die Gewinnminderung
  muss überhaupt geeignet sein, beim Gesellschafter Einnahmen nach § 20 Abs. 1 Nr. 1 EStG
  auszulösen. Die beiden **Fallgruppen** unterscheiden sich nach der Richtung der Leistung, und
  daran hängt der Bewertungsmaßstab: Bei der **verhinderten Vermögensmehrung** (die Gesellschaft
  bekommt zu wenig) ist der **gemeine Wert** anzusetzen, also einschließlich des Gewinnaufschlags,
  den ein fremder Dritter gezahlt hätte; bei der **Vermögensminderung** (die Gesellschaft zahlt zu
  viel) die Differenz zum angemessenen Entgelt. Beim **Fremdvergleich** ist der ordentliche und
  gewissenhafte Geschäftsleiter der Maßstab – und zwar in **beide** Richtungen: Eine vGA kann auch in
  einer für die Gesellschaft **günstigen** Vereinbarung liegen, wenn kein fremder Dritter ihr
  zugestimmt hätte, wie im BFH-Fall der Nur-Pension oder beim Verzicht auf laufendes Gehalt.
  Entscheidend ist der Veranlassungszusammenhang, nicht die wirtschaftliche Vorteilhaftigkeit.
  Hinzugerechnet werden kann schließlich nur, was das Ergebnis der **Stufe 1** (§ 4 Abs. 1 Satz 1
  EStG) tatsächlich beeinflusst hat: Die Vorschrift stellt nicht den angemessenen Zustand her,
  sondern beseitigt nur eine eingetretene Gewinnminderung – was zugleich die Kontrollrechnung
  liefert, mit der sich jede Lösung prüfen lässt.
  Die **Sonderfälle** zeigen, wo dieser Grundsatz an seine Grenze stößt. Erwirbt die Gesellschaft ein
  **aktivierungspflichtiges Wirtschaftsgut** zu teuer, steckt der überhöhte Preis zunächst nur im
  Bilanzansatz und wirkt sich gar nicht auf den Gewinn aus. Hier ist deshalb ausnahmsweise **zuerst
  die Bilanz** auf den angemessenen Wert zu korrigieren – nicht wegen der vGA, sondern weil der
  Bilanzansatz selbst unzutreffend ist –, und erst der dadurch entstehende Aufwand trägt die
  außerbilanzielle Hinzurechnung. Die laufende Abschreibung aus dem zu hohen Buchwert ist dabei
  ausdrücklich **keine** anteilige vGA, sondern bloße „Reflexwirkung“. Im Warenbeispiel beträgt die
  Hinzurechnung in allen drei Unterfällen dieselben 50.000 €, obwohl sich Bilanzansatz und
  Wareneinsatz völlig unterschiedlich entwickeln: Die vGA bemisst sich nach dem überhöhten Kaufpreis,
  nicht nach dem Verbrauchsstand. Ist die Veranlagung des Anschaffungsjahres bereits
  **bestandskräftig**, vernichtet das endgültig Steuersubstrat, und zwar auf beiden Ebenen
  gleichzeitig: Bei der Gesellschaft bleibt die überhöhte Abschreibung der Vorjahre unwiderruflich
  stehen, und beim Gesellschafter versagt die **materielle Korrespondenz** des § 3 Nr. 40 Buchstabe d
  Satz 2 EStG die Begünstigung genau insoweit – im Beispiel bleiben von 200.000 € vGA nur 80.000 €
  begünstigt, die übrigen 120.000 € sind voll steuerpflichtig. Erst die **formelle Korrespondenz** des
  § 32a Abs. 1 KStG eröffnet ihm überhaupt die Korrektur seiner längst bestandskräftigen Veranlagung;
  beide Ausprägungen wirken hier also gegenläufig im selben Sachverhalt. Beim **Verkauf einer
  Beteiligung** ist zweistufig zu prüfen: Erst stellt § 8 Abs. 3 Satz 2 KStG den angemessenen
  Veräußerungsgewinn her, dann greift § 8b Abs. 2 KStG – wer die Reihenfolge umkehrt, hat gar keinen
  Gewinn, den er freistellen könnte, weil in der Buchführung nur ein Aufwand steht. Ergibt sich trotz
  Hinzurechnung ein Veräußerungsverlust, rechnet § 8b Abs. 3 Satz 3 KStG auch ihn wieder hinzu, so
  dass die Gesellschaft im Ergebnis so dasteht, als wäre der Vorgang vollständig erfolgsneutral
  gewesen.
  Prüfung: `npm run check:k2-kst-teil4`

Die Zahlen lassen sich mit `npm run check:fallsammlung` und `npm run check:hausaufgaben`
gegen die Daten prüfen.

## Examenspriorität: Legende

Alle Lerninhalte aller Campusse (K1 AO/USt/ErbSt/GrESt, K2 KSt/ESt/GewSt/IStR, K3 Bilanz/PersG/UmwStR)
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
