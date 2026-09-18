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
  Nicht die Dauer der Unterbrechung entscheidet, sondern ihr Zeitpunkt.
  Prüfung: `npm run check:k1-ao-originalklausuren`
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
