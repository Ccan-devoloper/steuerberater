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
  Rechtsstand 2025) im Wortlaut, Teil I vollständig mit den Abschnitten 1 bis 4 sowie dem
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
  Gesamtrechtsnachfolge mit dem Übungsfall Trunk bis zur Bekanntgabe nach §§ 122, 122a AO,
  inzwischen fortgeführt über die Voraussetzungen einer wirksamen Bekanntgabe (Inhalts- und
  Bekanntgabeadressat, Zugang, Aufgabe des Bekanntgabewillens, Heilung analog § 8 VwZG), die
  Viertagesfiktion und ihr Verhältnis zu § 108 Abs. 3 AO mit dem Fallbeispiel zur
  Rechtsscheinwirkung, die Zusammenfassung der vier Bekanntgabekonstellationen und die
  Zustellung nach dem VwZG, die Bekanntgabe zusammengefasster Verwaltungsakte an Ehegatten und
  Gesamtschuldner sowie die Bekanntgabe an Bevollmächtigte mit dem BFH-Urteil vom 11.06.2024 zum
  Widerruf der Vollmacht und den Beispielen Sorglos und Lasse/Wickie, dazu Teil V
  (Verspätungszuschläge nach §§ 149, 152 AO mit Muss- und Kann-Regelung, Berechnungstabelle,
  Beispiel und der MoPeG-Neuregelung für Feststellungserklärungen) und Teil VI (Zwangsmittel
  nach §§ 328 bis 335 AO mit dem Übungsfall Claudia Schiffer). **Abschnitt 3 ist damit
  vollständig** (Seiten 31 bis 57; die bisher blockierten Seiten sind über den Datei-Download
  lesbar geworden). Abschnitt 4 (Feststellungsbescheide, §§ 179 bis 183 AO) ist begonnen: die
  Vorbemerkungen zum MoPeG – rechtsfähige und nicht rechtsfähige GbR, Gesellschaftsregister,
  Vertretung und Auflösung – und zu den AO-Anpassungen (§ 39 Abs. 2 Nr. 2, § 14a, §§ 34, 79 und
  § 181 AO), dazu Grundlagen des Feststellungsverfahrens, örtliche Zuständigkeit und die Arten
  der gesonderten Feststellungen, das Fallbeispiel Bernd B. zu Folgeänderung und § 171 Abs. 10 AO,
  Umfang, Teilbarkeit, Ergänzungs- und Richtigfeststellungsbescheid, die besondere Feststellung
  bei Unterbeteiligung und Treuhand mit dem Beispiel K & L-KG sowie die Aufgabe mit dem
  abgedruckten Feststellungsbescheid der Sesamstrasse GmbH & Co KG; zum Schluss die Bekanntgabe
  von Feststellungsbescheiden nach § 183 AO aF (3-Stufen-Theorie, Ausnahmen, Rückausnahme) und
  nach § 183 AO nF und § 183a AO ab 2024 mit dem Wahlrecht für 2024 und 2025, das Fallbeispiel
  Solartechnik GmbH & Co KG und der Übungsfall A+B+C-KG. **Teil I ist damit vollständig.**
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
  Neuregelungen ab dem 01.01.2025 und die Absätze 5 und 7; über den Datei-Download nachgeholt
  sind inzwischen Absatz 9 (Selbstanzeige mit Beispiel in zwei Varianten) und Absatz 10 Sätze 1
  bis 3 (Grundlagenbescheid, außersteuerliche Grundlagenbescheide mit dem Beispiel zum Grad der
  Behinderung), Satz 4 mit der Prüfungsfolge in sechs Schritten und die drei Fälle Komplementär K,
  Bernd Brot und Architekt Blei; dazu die gesonderte Feststellung nach Ablauf der
  Feststellungsfrist (§ 181 Abs. 5 AO) mit Hinweispflicht, Prüfungsfolge und den Übungsfällen
  Kino-GmbH & Co KG und Kleine und Pflicht GbR, und zum Schluss § 171 Abs. 10a AO (Daten nach
  § 93c AO), Abs. 14 (Erstattungsanspruch und Nichtigkeit mit dem Umsatzsteuer-Beispiel in vier
  Varianten) und Abs. 15 (Steuerabzugsverfahren). **Teil II ist damit vollständig.**
  Teil III ist vollständig eingepflegt; er besteht allein aus Abschnitt 7 (Korrektur von Verwaltungsakten):
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
  Umfang der Anpassung des Folgebescheides; über den Datei-Download nachgeholt sind die
  Seiten 80 bis 118: die Lösungshinweise zum Übungsfall M (Folgewirkungen, Saldierung nach
  § 177 AO, § 174 Abs. 1 AO in der Abwandlung), § 175 Abs. 1 Satz 1 Nr. 2 und Abs. 2 AO mit
  der Abgrenzung zu § 173 AO, den Anwendungsfällen Mieten und Anlage U, der Rechtsprechung zu
  §§ 16 und 17 EStG und drei Übungsfällen (Kaufpreisminderung und Forderungsausfall,
  Sträflich, Willi Wutz), § 175a AO mit dem Fallbeispiel de Vries, § 175b AO in allen vier
  Absätzen mit fünf Beispielen, der Vertrauensschutz nach § 176 AO, die Rechtsfehlersaldierung
  nach § 177 AO (Grundsätze, Verhältnis zu § 351 Abs. 1 AO, Fallbeispiel Pflug, Beispiele zu
  Abs. 1 und 2, Systematik mit Prüfungsschema und Kontrollrechnung am Fall Buschfeld,
  Übungsfall mit teilverjährten Werbungskosten) und zum Schluss §§ 130 und 131 AO für
  sonstige Verwaltungsakte mit Rücknahme, Bestandskraft, Mischwirkung, Widerruf und den
  Übungsfällen Haftungsbescheid, Fritz Schmierig, Lottogewinn und Stundung vor der
  Erbschaft. **Teil III ist damit vollständig.**
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
  Abschnitt 9 (Klage- und Revisionsverfahren nach der FGO) ist vollständig eingepflegt: die zwölf Sachurteilsvoraussetzungen vom
  Finanzrechtsweg über Aktiv- und Passivlegitimation bis zu Form und Inhalt der
  Klageschrift, die beiden Fallgruppen der Klagearten, Anfechtungs- und
  Verpflichtungsklage mit vier Musteranträgen (Haftungsbescheid, Ansparrücklage,
  gebundener Verwaltungsakt und Bescheidurteil bei Ermessensentscheidungen), vier
  Übungsfälle zur richtigen Klageart, die Fortsetzungsfeststellungsklage mit den beiden
  BFH-Fallgruppen und dem zweispaltigen Beispiel zur Abgrenzung von der Erledigung in der
  Hauptsache, das erfolglose Vorverfahren nach § 44 FGO, die Sprungklage mit
  durchgerechnetem Fristbeispiel, die Untätigkeitsklage mit ihren drei Voraussetzungen
  sowie Klagebefugnis, Beiladung nach dem MoPeG und die Berechnung der Klagefrist über
  § 222 ZPO; über den Datei-Download nachgeholt sind die Seiten 18 bis 47: das
  Fallbeispiel zur Klagefrist, Anbringungsbehörde und Wiedereinsetzung nach § 56 FGO,
  Form und Inhalt der Klageschrift (§§ 64, 65 FGO, beSt-Nutzungspflicht, Muss- und
  Sollinhalte, Klageerweiterung), die Übungsfälle Anton Schmitz (mit allen
  Sachurteilsvoraussetzungen und kommentierter Musterklageschrift) und Hans Meier
  (Sprungklage mit Kalenderauszug, Klageerweiterung, Revision und NZB), die Änderung des
  angefochtenen Bescheides nach § 68 FGO mit dem Fallbeispiel Balou, die Übersicht der
  Entscheidungsformen des Finanzgerichts und Revision und Nichtzulassungsbeschwerde mit
  den Zulassungsgründen des § 115 Abs. 2 FGO.
  Abschnitt 10 (vorläufiger Rechtsschutz, § 361 AO, §§ 69 und 114 FGO) ist als eigener Teil
  vollständig eingepflegt: das Einführungsbeispiel van Dyck (Säumniszuschläge trotz vollem
  Einspruchserfolg), Aussetzung und einstweilige Anordnung im Vergleich, vollziehbare und
  nicht vollziehbare Verwaltungsakte, die Beschränkung auf den Antrag im Hauptverfahren und
  auf das Leistungsgebot (§ 361 Abs. 2 Satz 4 AO) mit drei Fallgruppen und den Übungsfällen
  mit vier Abrechnungsbildern, die Aufhebung der Vollziehung bis zur vorläufigen Erstattung
  von Vorauszahlungen bei Existenzbedrohung (Fall Fleißig), ernstliche Zweifel,
  Aussetzungszinsen, die AdV bei Feststellungsbescheiden mit Folge-AdV und Gewerbesteuer-
  messbescheid, Anbringungsbehörde und Zugangsvoraussetzungen des § 69 Abs. 4 FGO, der
  zusammengefasste Übungsfall Valentin Vau sowie die einstweilige Anordnung mit
  Sicherungs- und Regelungsanordnung und dem Übungsfall zu § 258 AO. **Teil IV ist damit
  vollständig.**
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
  bindende Teilabschluss nach § 180 Abs. 1a AO; über den Datei-Download nachgeholt sind die
  Seiten 28 bis 38: das qualifizierte Mitwirkungsverlangen mit Mitwirkungsverzögerungsgeld
  nach § 200a AO, **Teil VI** (Rechtsbehelfe gegen einzelne Prüfungsmaßnahmen als Tabelle),
  **Teil VII** (Rechtsfolgen der Außenprüfung: § 164 Abs. 3, § 171 Abs. 4, § 173 Abs. 2 und
  § 371 Abs. 2 AO) und **Teil VIII** (Verwertungsverbot mit Fallgruppen, Ausnahmen,
  Wiederholungsprüfung, Prüfungsschema und zwei Übungsfällen). **Abschnitt 12 ist damit
  vollständig**.
  Abschnitt 13 (Haftungsrecht) ist als eigener Teil vollständig eingepflegt (84 Skriptseiten): die
  Vorbemerkung zum MoPeG, Steuer- und Haftungsschuld mit Akzessorietät und Gesamtschuld,
  zivil- und steuerrechtliche Haftung, die Gesamtrechtsnachfolge mit dem Fall Fritz Trunk,
  die Übersicht über das materielle und formelle Haftungsverfahren mit den vier „W“ und die
  Geschäftsführerhaftung nach § 69 AO – Prüfungsschema, verpflichteter Personenkreis mit
  § 35 GmbHG, Pflichtverletzung, Steuerausfall und hypothetischer Kausalverlauf mit dem
  durchgerechneten Beispiel A-GmbH (§§ 69 und 71 AO) und mehrere Geschäftsführer; dazu
  (Seiten 21 bis 40) Verschulden und Haftungszeitraum mit dem Übungsfall Z-GmbH, die
  vorrangige Lohnsteuer mit dem Beispiel X-GmbH, der Grundsatz der Gleichbehandlung der
  Gläubiger mit den drei Liquiditätsphasen, das Schema zur Haftungsquote mit den
  Fallbeispielen XY-GmbH (6.000 €) und X-GmbH (31.000 €, auch nach dem Verwaltungsschema),
  §§ 15a und 15b InsO mit dem Haftungsausschluss des § 15b Abs. 8 InsO, die Drittwirkung
  nach § 166 AO und die Zahlungsaufforderung nach § 219 AO; weiter (Seiten 41 bis 52) das
  vollständige Muster eines Haftungsbescheides mit Begründung und Rechtsbehelfsbelehrung,
  der Übungsfall Anton Sorglos zur Korrektur von Haftungsbescheiden (§ 130 Abs. 2 AO beim
  Rechtsfehler, § 129 AO beim Tippfehler) und die Haftung des Steuerhinterziehers nach § 71 AO
  mit den Fallbeispielen A-GmbH (18.050 €) und A+B-OHG; weiter (Seiten 53 bis 63) die
  Besonderheiten des § 71 AO (Drittwirkung, Zahlungsaufforderung, Konkurrenz zu § 69 AO), die
  Organschaftshaftung nach § 73 AO, die Eigentümerhaftung nach § 74 AO mit Fallbeispiel
  A+B-GmbH und der Übungsfall A-GmbH & Co. KG mit Komplementär-GmbH, Kommanditist,
  Geschäftsführer und Buchhalter; zum Schluss (Seiten 64 bis 84) die Betriebsübernehmerhaftung
  nach § 75 AO mit sachlicher, zeitlicher und gegenständlicher Beschränkung, § 25 HGB mit dem
  Übungsfall Fix & Fertig-Bauunternehmung (34.000 € nach HGB, 22.000 € nach § 75 AO), die
  Haftung der Gesellschafter von OHG, GbR und KG, das Prüfungsschema für den Erlass eines
  Haftungsbescheides und die Anlage mit der Kurzdarstellung aller prüfungsrelevanten
  Haftungsnormen. **Teil V und damit das gesamte AO-Skript (Abschnitte 1 bis 15) sind
  vollständig.**
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

- **USt-Skript (Moecker)** (Klausur 1, Reiter Umsatzsteuer → „USt-Skript (Moecker)“): das
  Umsatzsteuer-Skript von Udo Moecker in 13 Blöcken mit Arbeitspapieren (neun PDF-Dateien, 1.071
  Seiten, Stände 07/2025 bis 06/2026) im Wortlaut – **in Arbeit**; Block 1 ist mit 12 Kapiteln
  vollständig, Block 2 (Leistungen im Leistungsaustausch) mit 13 Kapiteln ebenfalls vollständig,
  Block 3 (Unternehmer / Unternehmen) mit 25 Kapiteln einschließlich der Arbeitspapiere A 1 bis
  A 27 ebenfalls vollständig, Block 4 (Entgeltliche Lieferungen) mit 22 Kapiteln einschließlich
  der Arbeitspapiere A 1 bis A 27 ebenfalls vollständig, Block 5 (Entgeltliche sonstige
  Leistungen) vollständig mit Textteil und Arbeitspapieren A 1 bis A 52 in 35 Kapiteln eingepflegt,
  Block 6 (Werkverträge, § 13b UStG, GiG, Gutscheine) mit vollständigem Textteil (Werklieferung, § 13b UStG, Geschäftsveräußerung
  im Ganzen, Gutscheine) und Arbeitspapieren Seite 1 bis 35 vollständig in 33 Kapiteln,
  Block 7 (Innergemeinschaftlicher Erwerb) begonnen mit Systematik, Grundtatbestand, Begriff
  des Erwerbs, Warenbewegung, Lieferer, Erwerber, Erwerbsort (Pflicht- und Straferwerb) und
  erweitertem Erwerberkreis mit Erwerbsschwelle, Schwellenerwerbern, Option und
  Ausschlussgegenständen, Freihäfen, Steuerbefreiungen nach § 4b UStG, Bemessungsgrundlage
  und Steuerentstehung, Vorsteuerabzug, territorialen Begriffen und Brexit (vollständiger
  Textteil I bis VIII und Arbeitspapiere A 1 bis A 12 vollständig in 23 Kapiteln),
  Block 8 Teil I (Steuerfreie Umsätze mit Vorsteuerabzug) begonnen mit Überblick und
  Ausfuhrlieferungen nach § 6 Abs. 1 Nr. 1 und 2 UStG einschließlich ausländischem Abnehmer
  und Zweigniederlassungen, Freihafenfällen, Ausfuhren im Reihengeschäft, zwischengeschalteter
  Be- oder Verarbeitung, den Einschränkungen nach § 6 Abs. 3 und 3a UStG und der
  Lohnveredelung nach § 7 UStG, Drei-Fall-Regelung, Bedeutung der USt-IdNr. ab 2020 und
  Tatbestand der innergemeinschaftlichen Lieferung mit Warenbewegung, Abnehmer und
  Erwerbsbesteuerung, USt-IdNr., Buch- und Belegnachweis, Vertrauensschutz und sonstigen
  Vorschriften sowie innergemeinschaftlichen Reihengeschäften (26 Kapitel).
  Jeder Block ist ein eigener Teil mit eigener Kapitelzählung und eigenem Stand; die Daten liegen je
  Block unter `src/data/k1-ust-moecker/`. Block 1 legt das Gerüst der Prüfung: Die
  Ausgangsumsatzsteuer wird über die §§ 1, 4, 10, 12 und 13 UStG ermittelt, und steuerbar ist ein
  Umsatz nur, wenn er sämtliche Tatbestandsmerkmale einer der drei Nummern des § 1 Abs. 1 UStG
  erfüllt; fehlt der Leistungsaustausch, sind die unentgeltlichen Wertabgaben nach § 3 Abs. 1b und
  Abs. 9a UStG zu prüfen, fehlt dagegen der Inlandsort, endet die Prüfung. Es folgen
  Steuerbefreiung und Steuerpflicht, die Übersicht der Bemessungsgrundlagen, die Steuersätze
  mit Herausrechnungsfaktoren, der Vorsteuerabzug nach § 15 Abs. 1 Nr. 1 bis 5 UStG (die
  Auslagerung ist zum 1.1.2026 entfallen), die Ausschlüsse nach § 15 Abs. 1a, 1b, 2 und 3 UStG
  mit Gesamtübersicht sowie die Arbeitspapiere 1 bis 8 mit Prüfungsschema, Kernfragen,
  Prüfungswegen, der typischen Klausuraufgabenstellung und der Übung „Bäcker B“. Block 2
  beginnt mit den vier Voraussetzungen des Leistungsaustauschs, dem Leistungsbegriff
  (Leistungswille, Zwangsversteigerung, Tausch, Entnahme und Innenumsatz, Mindest-BMG unter
  Angehörigen), Verpflichtungs- und Erfüllungsgeschäft mit Leistungsbereitschaft und
  entgeltlichem Rechtsverzicht, dem Umfang der Leistung (Haupt- und Nebenleistung mit der
  Rechtsprechung von Saatgut bis „Stadion Amsterdam“) sowie Gegenleistung und Kausalität
  (Preisgelder beim Berufspokerspieler). Es folgen die Sonderfälle Sponsoring, Abmahnungen,
  Ausfallhonorar und Weiterberechnung von Kosten, die Fälle fehlenden Leistungsaustauschs
  (unentgeltliche Wertabgaben, Schenkung, echter und unechter Schadenersatz mit den
  Blechschaden-Fällen, Minderung, Vertragsstrafen, Mahnkosten, Transport- und
  Warenkreditversicherung) und die Arbeitspapiere A 1 bis A 14. Block 3 beginnt mit der Bedeutung
  des Unternehmerbegriffs und der Unternehmerfähigkeit (Bruchteilsgemeinschaft zwischen BFH,
  JStG 2022 und EuGH, Eheleute, Gesellschafter, Insolvenzverwalter), den juristischen Personen
  mit § 2b UStG (Freibad, Tiefgarage unter 17.500 Euro, Kunsthochschule) und den
  nichtrechtsfähigen Personenvereinigungen (Innen- und Außengesellschaften, Einkaufsring,
  quotaler Leistungsempfänger beim Ehegatten-EFH, ARGE, Sozietät), der gewerblichen oder
  beruflichen Tätigkeit (Holding, Geschäftsführung durch Gesellschafter, Nachhaltigkeit mit
  Sammler- und eBay-Fällen, zehn Urteilen und Photovoltaikanlagen), der
  Einnahmeerzielungsabsicht und der Selbständigkeit; es folgen Beginn und Ende der
  Unternehmereigenschaft (Vorbereitungshandlungen, Vorgründungs- und Vorgesellschaft,
  Umwandlung, Erbfall, Löschung), das Auftreten nach außen (Eigenhändler, Kommissionär, Agent,
  Dienstleistungskommission) und der Rahmen des Unternehmens (Unternehmenseinheit,
  Innenumsätze, Grund-, Hilfs- und Nebengeschäfte, nichtunternehmerische Bereiche), die
  Gegenstände des Unternehmensvermögens mit den Zuordnungswahlrechten und die Organschaft
  (Organträger, Organgesellschaft, drei Eingliederungsmerkmale, grenzüberschreitende Organschaft)
  sowie die Arbeitspapiere A 1 bis A 27 mit Schaubildern und Fällen (Bruchteilsgemeinschaften,
  Aufsichtsrat, Zuordnungswahlrecht am PC-Beispiel, Einmann-GmbH & Co. KG). Block 4 beginnt mit
  dem Begriff der Lieferung, dem Liefergegenstand (Sachgesamtheiten, vertretbare Sachen,
  Miteigentumsanteile, einheitliche Leistung, Gehaltslieferung) und der Verschaffung der
  Verfügungsmacht an unbeweglichen und beweglichen Sachen einschließlich der Ersatzübergaben,
  gefolgt von Ort und Zeitpunkt der Lieferung (bewegte Lieferung nach § 3 Abs. 6 UStG mit
  Befördern, Versenden und Gefahrübergang, rechtsgeschäftsloses Verbringen, „shipment on hold“,
  unbewegte Lieferung mit 4-W-Fragen und Kauf auf Probe), der Ortsverlagerung nach § 3 Abs. 8
  UStG, den Sonderfällen der Verfügungsmacht (Eigentumsvorbehalt, Leasing, Kommission, durch
  Dritte an Dritte, Sicherungsgut mit Doppel- und Dreifachumsatz), der Rückgängigmachung
  (Rückgabe, Umtausch, Rücklieferung), der Lieferung von Gas, Strom, Wärme und Kälte und dem
  Reihengeschäft ab 2020 (Grundsätze, Zuordnungsregeln, Inlandsfälle, Fälle aus dem Drittland,
  Lieferung vor der Einfuhr) sowie den Arbeitspapieren A 1 bis A 27 mit Übersichten und den
  Stichsägen- und Zürich-Fällen. Block 5 beginnt mit Begriff und Erscheinungsformen der
  sonstigen Leistung, den Restaurationsumsätzen bis 2025 und ab 2026 (7 % auf Speisen,
  Kombiangebote, Gutscheine), Software, dem Leistungszeitpunkt und der Dienstleistungskommission
  einschließlich Branchenlösung nach § 3 Abs. 11a UStG, gefolgt vom Leistungsort im B2B-Bereich
  (Grundregel § 3a Abs. 2 UStG mit Nachweis des Empfängerstatus und zwölf Anwendungsfällen,
  grundstücksbezogene Leistungen, Messebau und Messeveranstaltungen, kurzfristige Vermietung von
  Beförderungsmitteln, Restaurationsumsätze, Eintrittsberechtigungen einschließlich virtueller
  Teilnahme, Drittlandsfälle nach § 3a Abs. 8 UStG, Personenbeförderung, Folgeänderungen bei
  Rechnung und ZM) und dem Einstieg in den B2C-Bereich (Grundregel § 3a Abs. 1 UStG,
  Grundstücksleistungen an Private, Vermietung von Beförderungsmitteln einschließlich Sportbooten,
  Auftritts- und Veranstaltungsleistungen samt Streaming und Online-Veranstaltungen,
  Werkleistungen und Begutachtung, Vermittlungsleistungen, Katalogleistungen nach § 3a Abs. 4 UStG
  mit dem Steuerberater-Schema und dem Leistungskatalog, TRFE-Leistungen nach § 3a Abs. 5 UStG,
  Personen- und Güterbeförderung einschließlich gebrochener Beförderung, Restauration an Bord),
  dem Reverse-Charge-Verfahren in der EU (Art. 194 und 196 MwStSystRL) und den ersten
  Arbeitspapieren (Software, Imbissstand, BFH-Rechtsprechung, Partyservice, Restaurationsumsätze
  ab 2026, Leistungskommission, Systematik des Leistungsorts B2B/B2C mit Nachweisfragen,
  B2B-Beispielen zu Wartung, Vermittlung mit § 4 Nr. 5 UStG, Katalogleistungen und
  Güterbeförderungen, § 3a Abs. 8 UStG und Übersicht zum B2B-Dienstleistungsort, Grundstücks-,
  Messe- und Vermietungsleistungen, Restauration, Auftritts- und Eintrittsleistungen,
  Personenbeförderung, Übersicht zum B2C-Dienstleistungsort, B2C-Ausnahmen mit Musicalfall und
  Online-Veranstaltungen, TRFE-Leistungen mit OSS und Art. 194/196 MwStSystRL im Vergleich).
  Prüfung: `npm run check:k1-ust-skript-moecker`
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
  Satz 2 KStG“** (21. Auflage, Stand 07/2025) im Wortlaut – **vollständig** mit 57 Kapiteln, 952
  Abschnitten und 89 Tabellen. Die verdeckte Gewinnausschüttung ist eine Vorteilszuwendung an den
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
  Bei den **Schadensersatzansprüchen der Gesellschaft** entscheidet eine einzige Frage: **Hat sich
  der Gesellschafter selbst einen Vorteil verschafft?** Beim **„schlampigen Gesellschafter“** lautet
  die Antwort nein – er hat nur gegen seine Sorgfaltspflichten aus § 43 Abs. 1 GmbHG verstoßen, der
  Schaden liegt allein bei der Gesellschaft, und deshalb ist der zivilrechtliche Ersatzanspruch
  **vorrangig zu aktivieren**, notfalls im Wege der Bilanzberichtigung. Er schließt die vGA aus,
  solange er durchsetzbar ist; sie entsteht erst, wenn die Gesellschaft ausdrücklich verzichtet, den
  Anspruch verjähren lässt oder er uneinbringlich wird. Maßgeblich ist damit nicht das Schadensjahr,
  sondern das Jahr des Verzichts – wer den Fall im Schadensjahr löst, kommt zum falschen Ergebnis.
  Der **Alleingesellschafter-Geschäftsführer** haftet aus eigenen Geschäften ohnehin nicht, weil er
  sich die Zustimmung selbst erteilen kann; die Grenze sind die Kapitalerhaltungsvorschriften der
  §§ 30, 31, 43 Abs. 3 GmbHG. Beim **„gierigen Gesellschafter“** lautet die Antwort dagegen ja: Er
  hat wissentlich und zweckgerichtet Vermögen entzogen, die vGA ist mit dem Grundgeschäft bereits
  vollzogen, und der Rückforderungsanspruch ist nur noch eine steuerlich unbeachtliche
  **Einlageforderung**, die zu einer verdeckten Einlage führt. Das gilt ausdrücklich auch für
  **Satzungs- und Steuerklauseln**, mit denen sich die Gesellschafter zur Rückzahlung entdeckter
  verdeckter Gewinnausschüttungen verpflichten: Über beide Jahre bleibt es bei genau **einer**
  Einkommenskorrektur, alles Weitere ist erfolgsneutral – der Bezug beim Gesellschafter bleibt
  bestehen, die Hinzurechnung bei der Gesellschaft bleibt bestehen, und obendrein hat er
  zurückgezahlt. Das steuerliche Einlagekonto erhöht sich dabei nur, wenn tatsächlich gezahlt wird;
  eine bloße Einlageforderung berührt den Bestand nach dem Zuflussprinzip des Teils III nicht.
  Die **Vorteilsgeneigtheit** wirkt als Filter: Die vGA erfasst nur die Zuwendung selbst, nicht ihre
  Begleitkosten. **Schuldzinsen** für ein Bankdarlehen, mit dem die Gesellschaft das überhöhte Gehalt
  finanziert, sind keine weitere vGA und bleiben als Betriebsausgaben abziehbar – die Probe liefert
  die Quelle selbst: Auch bei einer **offenen** Ausschüttung wären die Zinsen einer Fremdfinanzierung
  abziehbar, und weil die vGA der offenen Ausschüttung gleichgestellt werden soll, darf sie nicht
  schlechter behandelt werden. Das Finanzierungsgeschäft wird dabei vollständig losgelöst beurteilt:
  Gibt der Gesellschafter selbst das Darlehen, sind angemessene Zinsen unschädlich, überhöhte eine
  weitere vGA. Ebenso bleiben Beiträge zur **Rückdeckungsversicherung** abziehbar, selbst wenn die
  abgesicherte Pensionszusage eine vGA ist – die Ansprüche daraus stehen der Gesellschaft zu. Der
  Zufluss muss dabei nach dem BFH nur **grundsätzlich denkbar** sein und nicht zeitgleich eintreten,
  was die Hürde niedrig hält. Schließlich ist die vGA durchweg **objektiv** zu beurteilen: Weder eine
  Ausschüttungsabsicht noch eine Einigung der Beteiligten ist erforderlich, weil § 8 Abs. 3 Satz 2
  KStG an einen Veranlassungszusammenhang anknüpft und nicht an einen Willen – wer argumentiert, die
  Unangemessenheit sei niemandem bewusst gewesen, hat damit nichts gewonnen. Die einzige Ausnahme
  verlangt zweierlei zugleich: einen **Irrtum** des Gesellschafter-Geschäftsführers und das Fehlen
  eines Zuwendungswillens. Die Gesellschaft muss sich das Handeln ihrer Organe sogar dann zurechnen
  lassen, wenn der Gesellschafter sich den Vorteil durch **Untreue oder Unterschlagung** erschlichen
  hat – entscheidend ist, dass sie ihn hat „gewähren lassen“. Beim nichtbeherrschenden
  Gesellschafter, der nicht Geschäftsführer ist, bedarf es dagegen einer, notfalls stillschweigenden,
  Billigung.
  Bei **nahe stehenden Personen** ist für die Korrektur auf Ebene der Gesellschaft gleichgültig, wem
  der Vorteil zufließt – die **Bezüge** dagegen kann nach § 20 Abs. 5 EStG nur der Anteilseigner
  erzielen. Steuerlich wird der Vorgang deshalb in zwei Schritte zerlegt: erst eine Ausschüttung an
  den Gesellschafter, dann eine Schenkung von ihm an den Empfänger. Das führt zu einem Ergebnis, das
  auf den ersten Blick ungerecht wirkt und in der Klausur oft falsch gelöst wird – der Anteilseigner
  versteuert einen Bezug, obwohl ihm **nichts zugeflossen** ist, und darf die Weitergabe nicht
  abziehen; beim Empfänger mindern sich dafür die eigenen Einnahmen, und zwischen beiden ist § 7
  Abs. 1 Nr. 1 ErbStG zu prüfen. Sind mehrere Gesellschafter dem Empfänger nahe stehend, will die
  Quelle anteilig zurechnen („m.E.“) – es sei denn, das Handeln lässt sich konkret einem von ihnen
  zuordnen. Anders liegt es, wenn die nahe stehende Person **selbst beteiligt** ist: Ab einer
  erheblichen Beteiligung von mindestens 10 % spricht der **Beweis des ersten Anscheins** für eigene
  Veranlassung, sie versteuert die vGA selbst, und eine Schenkung zwischen den Gesellschaftern
  scheidet aus – eine Doppelbelastung wird so vermieden. Umgekehrt wird die vGA doch dem
  Mehrheitsgesellschafter zugerechnet, wenn sein Zuwendungswille feststellbar und seine Beteiligung
  für die vGA ursächlich war. Die beiden Beispiele der Quelle führen den Unterschied vor: Schließt die
  Ehefrau den Pachtvertrag selbst mit der Gesellschaft, bleibt es bei ihr; ändert dagegen die
  **Gesellschafterversammlung** den Anstellungsvertrag, wäre die vGA ohne die Stimmen des
  Mehrheitsgesellschafters nie entstanden. Das Unterscheidungsmerkmal ist damit weniger die
  Beteiligungshöhe als die Frage, ob ein Gesellschafterbeschluss nötig war. Bei der **durchgeleiteten
  vGA** über eine Zwischengesellschaft entsteht auf jeder Stufe eine weitere vGA, weil die
  Weiterleitung selbst gesellschaftsrechtlich veranlasst ist; Ertrag und Aufwand heben sich dort
  bilanziell auf, und übrig bleibt genau die **Fünf-Prozent-Pauschale** des § 8b Abs. 5 KStG – eine
  dreistufige Kette kostet also dreimal 500 €, obwohl der Zwischengesellschaft wirtschaftlich nichts
  zugeflossen ist. Beim obersten Gesellschafter verbraucht sich die vGA nach der **Fiktionstheorie**
  in Werbungskosten, soweit er das Darlehen für eine Einkunftsquelle verwendet hat.
  Der **Vorteilsausgleich** beseitigt die vGA nur unter engen Voraussetzungen: Beide Geschäfte müssen
  einander bedingen und durch eine eindeutige, **im Voraus** getroffene Vereinbarung verknüpft sein –
  ein bloß zeitlicher Zusammenhang genügt ausdrücklich nicht. Der Grund liegt in der Konstruktion: Der
  Ausgleich funktioniert nur, weil beide Vorgänge zu einem einheitlichen, **tauschähnlichen** Geschäft
  verschmelzen; ohne vorherige Verknüpfung bleiben es zwei getrennte Rechtsgeschäfte, von denen eines
  fremdunüblich ist. Gleichartig müssen die Leistungen nicht sein (Nutzungsüberlassung gegen
  Lieferung), wohl aber **gleichwertig** und der Höhe nach gesichert. Bleibt ein Nachteil, wird nur
  die Differenz hinzugerechnet; übersteigt die Gegenleistung den Nachteil, ist der Überhang nach
  Auffassung der Quelle eine verdeckte Einlage. Bei der **Beweislast** gilt Zweierlei nebeneinander,
  was leicht als Widerspruch missverstanden wird: Die Finanzverwaltung hat die Nachweispflicht für das
  Vorliegen der vGA und muss die Amtsermittlung nach § 88 AO ausschöpfen – die Kapitalgesellschaft
  trägt aber die **objektive Beweislast** für die betriebliche Veranlassung ihres Aufwands. Spricht der
  Fremdvergleich gegen sie, muss sie die Umstände darlegen, die eine andere Beurteilung tragen, und
  ein verbleibender Rest an Ungewissheit geht zu ihren Lasten. Eine **Rückzahlung** macht die vGA nie
  rückgängig: Sie ist ein davon getrennter, nachfolgender Vorgang und wird als verdeckte Einlage
  behandelt – gleichgültig, ob sie freiwillig, aufgrund einer Satzungsklausel oder zur Erfüllung eines
  Ersatzanspruchs erfolgt. Für den Gesellschafter ist sie doppelt nachteilig, weil er das Geld
  zurückgibt und es trotzdem versteuert; er erhält im Gegenzug nur zusätzliche Anschaffungskosten.
  Bei der **Schenkungsteuer** hat der BFH 2017 in drei Urteilen an einem Tag die Verwaltungsauffassung
  gekippt, und die Verwaltung ist ihm inzwischen uneingeschränkt gefolgt (R E 7.5 ErbStR): Im
  Verhältnis zwischen Gesellschaft und Gesellschafter gibt es begrifflich **nichts Freigebiges** –
  entweder ein Leistungsaustausch oder eine Ausschüttung –, und dasselbe gilt gegenüber einer ihm nahe
  stehenden Person, weil der Vorgang Ausfluss des Gesellschaftsverhältnisses ist. Das bedeutet keine
  Steuerfreiheit, sondern eine **Verlagerung**: Zu prüfen bleibt die Zuwendung zwischen dem
  Gesellschafter und der nahe stehenden Person, die bei Angehörigen i. S. des § 15 AO regelmäßig
  anzunehmen ist. Schenkungsteuer und Einkommensteuer schließen sich dabei **betragsmäßig** aus:
  Soweit ein Gesellschafter die vGA selbst als Beteiligungsertrag versteuert, kann ihm insoweit nichts
  geschenkt worden sein. **Damit ist das Kapitel 1 der Quelle vollständig.**
  Beim **beherrschenden Gesellschafter** (Kapitel 2) zählt die **Stimmrechts-, nicht die
  Kapitalmehrheit**: Eigene Anteile der Gesellschaft und stimmrechtslose Anteile bleiben bei der
  Berechnung außen vor, so dass schon eine nominale Beteiligung von 45 oder 46 % beherrschend sein
  kann – ein Stimmrechtsausschluss nach § 47 Abs. 4 GmbHG bleibt dagegen unberücksichtigt, weil die
  betroffenen Anteile dem Grunde nach stimmberechtigt sind. Verlangt die Satzung **generell** eine
  qualifizierte Mehrheit, muss der Gesellschafter auch über diese verfügen; gilt das Erfordernis nur
  für außerordentliche Vorgänge, genügt die einfache Mehrheit. Bei der **Aktiengesellschaft** greift
  die Stimmrechtsmehrheit ins Leere, weil über den Vorstandsvertrag allein der weisungsfreie
  Aufsichtsrat entscheidet – Beherrschung ist also **funktional** zu verstehen und nicht formal; ein
  mittelbarer Einfluss über die Besetzung des Aufsichtsrats bleibt aber eine Frage des Einzelfalls.
  Bei der **Personengruppentheorie** gilt jeder einzelne Gesellschafter der Gruppe als beherrschend,
  auch der mit der kleinsten Quote; die bloße Angehörigeneigenschaft reicht nach dem
  Bundesverfassungsgericht dafür nicht, es müssen gleichgerichtete **wirtschaftliche** Interessen
  hinzukommen, wofür die gemeinsame Geschäftsführerstellung das wichtigste Indiz ist. Die schärfste
  Regel des ganzen Skripts ist dann der **strenge formelle Vergleich**: Schon das Scheitern der Form
  führt zur vGA, und zwar „ungeachtet ihrer Angemessenheit“. Ein Geschäftsführergehalt kann also der
  Höhe nach völlig marktüblich sein und trotzdem in voller Höhe hinzugerechnet werden, wenn die
  Vereinbarung nicht klar, nicht im Voraus getroffen, nicht zivilrechtlich wirksam oder nicht
  tatsächlich durchgeführt worden ist – diese vier Punkte bilden eine Reihenfolge, die **vor** der
  Angemessenheitsprüfung abzuarbeiten ist. **Klar und eindeutig** ist eine Vereinbarung nur, wenn die
  Höhe allein durch **Rechenvorgänge** und für einen externen Dritten nachvollziehbar feststeht: Jeder
  Gremiumsvorbehalt, jede bloße Ober- oder Untergrenze und jede Abhängigkeit von der „wirtschaftlichen
  Lage“ genügt dem nicht, und zwei für sich einwandfreie, aber widersprüchliche Vereinbarungen lösen
  zusammen eine vGA aus. Eine nachträgliche Klarstellung wirkt dabei **nur für die Zukunft**. In
  grenzüberschreitenden Fällen entfaltet allerdings der Fremdvergleichsgrundsatz des Art. 9 OECD-MA
  eine **Sperrwirkung**, weil er nur materielle, nicht aber rein formelle Abweichungen trägt.
  Bei der **zivilrechtlichen Wirksamkeit** ist das Skript trotz seines strengen Grundsatzes
  bemerkenswert **heilungsfreundlich**: Die unterbliebene Beteiligung der Gesellschafterversammlung
  nach § 46 Nr. 5 GmbHG heilt eine nachträgliche Genehmigung nach § 184 BGB – spätestens die wirksame
  Feststellung des Jahresabschlusses –, und die fehlende Befreiung vom Selbstkontrahierungsverbot des
  § 181 BGB heilt die nachgeholte Handelsregistereintragung, die als Genehmigung des schwebend
  unwirksamen Geschäfts wirkt. Dazu kommt eine Auffanglösung, die in der Klausur oft übersehen wird:
  Konnten die Beteiligten nach fachkundigem Rat von der Wirksamkeit ausgehen, entsteht **trotz**
  Unwirksamkeit keine vGA – der formelle Vergleich soll den Missbrauch der Beherrschungsmacht
  verhindern, nicht ehrliche Rechtsirrtümer bestrafen. Nur die **qualifizierte (doppelte)
  Schriftformklausel** sperrt sich selbst gegen jede mündliche Korrektur, während die einfache durch
  wiederholte mündliche Anpassungen konkludent aufgehoben werden kann. Beim **Rückwirkungsverbot**
  ist das zweite Beispiel der lehrreichste Fall des Kapitels, weil dieselbe Vereinbarung vom selben
  Tag für drei Vergütungsbestandteile zu verschiedenen Ergebnissen führt: Das laufende Gehalt wird
  monatsweise verdient und ist unproblematisch; **Weihnachtsgeld und Tantieme** dagegen werden für das
  gesamte Kalenderjahr gezahlt und sind in den zurückliegenden Monaten bereits anteilig entstanden –
  von 1.000 € Erhöhung sind 500 € vGA, von 5 Prozentpunkten Tantiemeerhöhung 2,5 Prozentpunkte. Die
  Faustregel: Wer eine jahresbezogene Sonderzahlung erhöhen will, muss das **vor Beginn** des
  Wirtschaftsjahres tun. Und selbst wenn alle Arbeitnehmer dieselbe rückwirkende Erhöhung erhalten,
  bleibt es beim Verstoß – nicht weil die Höhe unangemessen wäre, sondern weil beim beherrschenden
  Gesellschafter neben das Arbeitsverhältnis **immer** auch das Gesellschaftsverhältnis tritt. Bei der
  Aktiengesellschaft läuft das Verbot dagegen leer, solange kein Einfluss auf den Aufsichtsrat
  feststellbar ist.
  Mit der **tatsächlichen Durchführung** schließt sich der Kreis des formellen Vergleichs: Die drei
  vorangegangenen Abschnitte prüfen den Vertrag auf dem **Papier**, erst dieser fragt, ob er auch
  **gelebt** wird. Zahlt die Gesellschaft das Gehalt unregelmäßig oder nicht zu den vorgesehenen
  Zeitpunkten, liegt schon darin ein Verstoß – auch dann, wenn Lohnsteuer und Sozialversicherungs-
  abgaben ordnungsgemäß geleistet werden, weil gerade die tatsächliche Auszahlung das aussagekräftige
  Indiz ist. Umgekehrt schadet ein wegen unrichtiger Bewertung **zu niedriger** Lohnsteuerabzug nicht.
  Ein **Liquiditätsengpass** hilft nur über eine doppelte Hürde hinweg: Er muss nachgewiesen sein
  **und** es muss eine dem Fremdvergleich standhaltende Stundungsvereinbarung vorliegen – beschäftigt
  die Gesellschaft weitere Arbeitnehmer, nur dann, wenn sich auch diese auf Gehaltsstundungen
  eingelassen haben. Bemerkenswert ist, dass der Vergleich mit der Belegschaft hier erstmals
  **zugunsten** des Gesellschafters wirkt, während er beim Rückwirkungsverbot gerade nicht half. Die
  **Schuldnovation**, also die Umwandlung der Gehalts- in eine Darlehensforderung, ist zivilrechtlich
  möglich, steuerlich aber nur bei einer **besonderen schriftlichen** Vereinbarung – der typische
  Rettungsversuch nach einer Betriebsprüfung scheitert deshalb fast immer an der Form. Bei
  **Tantiemen** gilt eine der wenigen festen Fristenstaffeln des Skripts, und sie läuft nicht ab dem
  Bilanzstichtag, sondern ab der **Fälligkeit**, die mangels abweichender Vereinbarung erst mit
  Feststellung des Jahresabschlusses eintritt: Auszahlung binnen drei Monaten ist stets unschädlich,
  drei bis sechs Monate sind Einzelfall (bei einmaligem, nachgewiesenem Engpass wohl unschädlich), und
  erst die **regelmäßige** Überschreitung von sechs Monaten belegt die fehlende Durchführung. Der
  strenge formelle Vergleich gilt schließlich auch dann, wenn die vGA einer dem beherrschenden
  Gesellschafter **nahe stehenden Person** zufließt. Im Beispiel erhält der Sohn als Geschäftsführer
  eine rückwirkende und ausdrücklich **angemessene** Gehaltserhöhung von 7.000 € auf 10.000 € – wer
  nur die Angemessenheit prüft, kommt zum falschen Ergebnis, denn 4 × 3.000 € = 12.000 € sind allein
  wegen des **Formverstoßes** hinzuzurechnen. Die Einschaltung einer nahe stehenden Person ist also
  kein Ausweg aus dem formellen Vergleich. **Damit ist auch das Kapitel 2 der Quelle vollständig.**
  Die **Bewertung** (Kapitel 3) beginnt mit einem Satz, der den Schlüssel zum ganzen Kapitel enthält:
  Die vGA entspricht dem bei der **Kapitalgesellschaft** eingetretenen Vermögensnachteil. Bewertet
  wird also nicht der Vorteil beim Gesellschafter, sondern der Nachteil bei der Gesellschaft – und
  weil dieser Maßstab ausdrücklich auch für § 20 Abs. 1 Nr. 1 Satz 2 EStG gilt, laufen beide Ebenen
  gleich. Welcher Wert anzusetzen ist, hängt an der **Fallgruppe**: Bei der Vermögensminderung ist es
  die Differenz zwischen überhöhtem Entgelt und angemessenem Entgelt, bei der verhinderten
  Vermögensmehrung der **gemeine Wert** bzw. die erzielbare Nutzungsvergütung. Der Unterschied ist
  kein formaler, denn nur der gemeine Wert enthält einen angemessenen **Gewinnzuschlag** – bei der
  verhinderten Vermögensmehrung wird der Gesellschaft ein Geschäft entzogen, bei der
  Vermögensminderung hat sie nur zu viel bezahlt. Ein Fallgruppenfehler verdirbt deshalb die gesamte
  Bewertung. Bei der **Wohnraumüberlassung** tritt an die Stelle des gemeinen Wertes die
  **Kostenmiete** zuzüglich eines angemessenen Gewinnzuschlags, die die Marktmiete gerade bei
  aufwendig hergestellten Objekten deutlich übersteigt; die marktübliche Miete zählt nur in der engen
  Rückausnahme, dass sich schon mit ihr eine angemessene **Rendite** hinreichend absehbar erzielen
  lässt.
  Der **Umsatzsteuer-Exkurs** ordnet sich nach der Leistungsrichtung: Bei der verhinderten
  Vermögensmehrung leistet die Gesellschaft, bei der Vermögensminderung der Gesellschafter oder die
  nahe stehende Person – die Steuerbefreiungen des § 4 UStG und die umsatzsteuerliche Organschaft sind
  dabei stets vorab zu prüfen, weil sich mit ihnen der ganze Exkurs erledigt. Leistet die Gesellschaft
  **unentgeltlich**, entsteht eine unentgeltliche Wertabgabe nach § 3 Abs. 1b bzw. § 3 Abs. 9a UStG,
  deren Bemessungsgrundlage nach § 10 Abs. 4 UStG der **Einkaufspreis** ist. Die daraus folgende
  Umsatzsteuer bleibt nach **R 8.6 KStR** abziehbare Betriebsausgabe: Weil die vGA bereits brutto mit
  dem gemeinen Wert angesetzt ist, steckt diese Umsatzsteuer schon in der Hinzurechnung, und eine
  zweite Korrektur über § 10 Nr. 2 KStG würde denselben Betrag doppelt erfassen. Genau hier entsteht
  die Lücke, um die gestritten wird. Im Beispiel der Quelle (Buchwert 50.000 €, gemeiner Wert
  150.000 €, Einkaufspreis 100.000 €) ergibt sich ein Einkommen von 81.000 €; nach der abweichenden
  Auffassung, die nur die tatsächliche Umsatzsteuer berücksichtigt, wären es 76.050 €. Die Differenz
  von **4.950 €** ist nicht willkürlich, sondern exakt der Abstand zwischen hypothetischer und
  tatsächlicher Umsatzsteuer: Im gemeinen Wert stecken rechnerisch 23.950 € Umsatzsteuer, angefallen
  sind nur 19.000 €. Beim Anteilseigner bleibt der Beteiligungsertrag in beiden Varianten der gemeine
  Wert von 150.000 €, so dass nach der Gegenauffassung über die **materielle Korrespondenz** des § 3
  Nr. 40d Satz 2 EStG genau diese 4.950 € die Begünstigung des Teileinkünfteverfahrens verlieren.
  Leistet die Gesellschaft **verbilligt**, greift die **Mindestbemessungsgrundlage** des § 10 Abs. 5
  Nr. 1 UStG: Die Bemessungsgrundlage muss mindestens dem Wert nach § 10 Abs. 4 UStG entsprechen, und
  die Umsatzsteuer wird in Höhe der Differenz nacherhoben – bei voll vorsteuerabzugsberechtigten
  Unternehmern allerdings nur, wenn die Eingangsleistung dem Grunde nach der Berichtigung nach § 15a
  UStG unterliegen kann, also im Regelfall nur bei der **Lieferung von Wirtschaftsgütern**.
  Bemerkenswert ist, dass diese Grenze zu genau demselben Mindestbetrag führt wie die unentgeltliche
  Wertabgabe; der Gesetzgeber stellt die verbilligte Leistung der unentgeltlichen also bewusst gleich.
  Der entscheidende Unterschied liegt beim Empfänger: Bei der unentgeltlichen Leistung ist der
  Vorsteuerabzug endgültig ausgeschlossen, weil über den Vorgang **keine Rechnung** erteilt werden
  kann; bei der verbilligten gibt es eine Rechnung, sie ist nur nach § 14 Abs. 4 Satz 2 UStG zu
  **korrigieren** – und bis dahin aktiviert der Empfänger einen noch nicht realisierten
  Vermögensanspruch. Im Beispiel (gemeiner Wert 200.000 €, Einkaufspreis 100.000 €, Buchwert 50.000 €,
  Kaufpreis 80.000 € zzgl. 19 %) ergibt sich ein Einkommen von 131.000 €, nach der abweichenden
  Auffassung 118.067 €, und der Korrespondenzbetrag beträgt 12.933 €.
  Leistet umgekehrt der **Gesellschafter** überhöht an die Gesellschaft (Fallgruppe der
  Vermögensminderung), bleibt die Umsatzsteuer schlicht unverändert – der Vorsteuerabzug der
  Gesellschaft richtet sich nach der ordnungsgemäßen Rechnung. Die vGA bemisst sich deshalb auf beiden
  Ebenen nur nach dem **Nettowert**, und die Quelle stützt das auf zwei Argumente, die genau den beiden
  Ebenen entsprechen: Bei der Gesellschaft fehlt es an der **Entreicherung**, weil ihr Vorsteueranspruch
  erhalten bleibt; beim Anteilseigner an der **Bereicherung**, weil er die vereinnahmte Umsatzsteuer
  abführen muss – und damit, wie die Quelle ausdrücklich sagt, an der **Vorteilsgeneigtheit**. Hier
  begrenzt dieses Merkmal also nicht das Ob der vGA, sondern ihre Höhe. Der scheinbare Widerspruch zu
  den beiden vorangegangenen Abschnitten – dort brutto, hier netto – löst sich über den Maßstab des
  Abschnitts 3.1: Gibt die Gesellschaft ein Wirtschaftsgut her, verliert sie den vollen Marktwert
  einschließlich der darin steckenden Umsatzsteuer; zahlt sie zu viel, bleibt ihr die Vorsteuer
  erhalten, so dass sie nur um den Nettobetrag ärmer wird. Einzige Ausnahme ist der **unrichtige
  Steuerausweis** nach § 14c Abs. 1 UStG: Dort scheidet der Vorsteuerabzug dem Grunde nach aus, der
  bisherige Abzug ist aufwandswirksam anzupassen, und dieser Aufwand bleibt nach R 8.6 KStR abziehbare
  Betriebsausgabe – daneben und davon unabhängig bleibt es bei der bilanziellen Anpassung auf den
  Teilwert. **Damit ist auch das Kapitel 3 der Quelle vollständig.**
  Bei den **Auswirkungen** (Kapitel 4) wird die vGA außerbilanziell hinzugerechnet, und die
  Steuerbilanz bleibt unberührt – einzige Ausnahme ist die überteuerte Anschaffung eines
  Wirtschaftsguts, das mit dem Teilwert auszuweisen ist. Maßgeblich ist der Veranlagungszeitraum der
  **Gewinnbeeinflussung**, nicht der Abfluss: Erhöht sich der Alleingesellschafter am 15.12.2024
  rückwirkend das Gehalt und wird erst am 15.01.2025 ausgezahlt, ist 2024 hinzuzurechnen. Der
  Abflusszeitpunkt behält dabei zwei Funktionen, die leicht untergehen – er entscheidet über die
  **Verwendungsreihenfolge** beim steuerlichen Einlagekonto (§ 27 Abs. 1 Satz 3 KStG) und über den
  Zufluss beim Anteilseigner (§ 20 EStG). Die beiden Ebenen korrespondieren also der Höhe nach und
  laufen zeitlich auseinander.
  Ist ein **Passivposten** durch das Gesellschaftsverhältnis veranlasst, bleibt er unverändert in der
  Bilanz stehen; korrigiert wird allein außerbilanziell. Daraus folgt eine für den Fiskus unangenehme
  Konsequenz: Hat das Finanzamt die vGA im Jahr der Rückstellungsbildung übersehen und ist die
  Veranlagung bestandskräftig, ist sie **endgültig** verloren – der Posten darf gerade **nicht** in
  einem späteren offenen Jahr erfolgswirksam ausgebucht werden, um die Hinzurechnung nachzuholen.
  Bleibt nur der natürliche **Wegfallgewinn**. Wurde die vGA dagegen zutreffend erfasst und fällt der
  Posten später gewinnwirksam weg, ist zur Vermeidung der Doppelbelastung ein einkommenswirksamer
  Abzug vorzunehmen (R 7.1 Abs. 1 Punkt 8 KStR); beim Verzicht auf einen voll **werthaltigen**
  Anspruch heben sich Wegfallgewinn und verdeckte Einlage nach § 8 Abs. 3 Satz 3 KStG ohnehin auf.
  Genau dafür führt die Finanzverwaltung bei Pensions- und Tantiemerückstellungen zwei
  **Teilbeträge** in einer internen Nebenberechnung, die keine offizielle Feststellung ist und für den
  Steuerpflichtigen nicht erkennbar bleibt: **Teilbetrag I** ist der Betrag der vGA unabhängig von der
  Hinzurechnung, **Teilbetrag II** die tatsächlich hinzugerechnete vGA. Die Differenz der beiden ist
  damit der Teil, der endgültig unversteuert geblieben ist – im Beispiel der Quelle im Unterfall b)
  die vollen 100.000 €. Auf andere Passivposten kann verzichtet werden, weil sie erfüllt werden und
  bei der Auflösung keine Gewinnauswirkung entfalten; Pensions- und Tantiemerückstellungen dagegen
  können **wegfallen**, ohne dass gezahlt wird. Weil die Teilbeträge nicht selbständig festgestellt
  werden, sind sie auch nicht selbständig angreifbar – wer sie für falsch hält, muss den
  Körperschaftsteuerbescheid des Wegfalljahres angreifen.
  Die **Bedeutung** der beiden Teilbeträge erschließt sich über ihre Arbeitsteilung, und wer die
  begriffen hat, braucht die Definitionen nicht auswendig zu lernen: **Teilbetrag I** arbeitet beim
  **Gesellschafter** und bestimmt nach § 20 Abs. 1 Nr. 1 EStG den Umfang der Beteiligungserträge, die
  bei späterem Zufluss zu versteuern sind; **Teilbetrag II** arbeitet bei der **Gesellschaft** und
  sichert als Erinnerungsposten den außerbilanziellen Abzug bei der Auflösung. Der schärfste Satz des
  Abschnitts betrifft dabei den Gesellschafter: Er versteuert **unabhängig davon**, ob es bei der
  Gesellschaft zu einer Hinzurechnung gekommen ist – dort hilft die Bestandskraft, hier nicht. Der
  Vorbehalt der **materiellen Korrespondenz** wirkt sogar verschärfend statt mildernd, weil die
  Begünstigung gerade insoweit versagt wird, als die vGA beim Einkommen der Gesellschaft nicht erfasst
  wurde. Dass die Korrektur bei der Auflösung außerbilanziell erfolgt, ist konsequent: Was außen
  hinzugerechnet wurde, wird außen wieder abgezogen – der Teilbetrag II ist das Gedächtnis dieser
  **Gegenberichtigung**.
  Bei der **Auflösung** zeigt der Grundfall, dass die Teilbeträge in der Normalsituation gar nichts
  bewirken: Wird die Tantieme einfach ausgezahlt, verschwindet die Rückstellung erfolgsneutral gegen
  die Bank, und beide Unterfälle enden gleich. Ihre Stunde schlägt erst, wenn der Posten **ohne
  Zahlung** wegfällt, und die beiden Abwandlungen unterscheiden sich dabei in einem einzigen
  Sachverhaltsmerkmal – der **Werthaltigkeit** des Anspruchs. Verzichtet der Gesellschafter auf einen
  voll werthaltigen Anspruch, opfert er etwas Wertvolles: Das ist eine verdeckte **Einlage**, sie wird
  nach § 8 Abs. 3 Satz 3 KStG abgezogen und dem Einlagekonto gutgeschrieben – in beiden Unterfällen
  gleichermaßen, der Teilbetrag II wird gar nicht gebraucht. Ist der Anspruch **wertlos**, opfert er
  nichts, es gibt keine Einlage, und nur der Teilbetrag II kann den Auflösungsertrag noch beseitigen.
  Erst hier trennen sich die Unterfälle: Mit 100.000 € ergibt sich eine Einkommensauswirkung von
  ./. 100.000 €, mit 0 € bleibt der Ertrag voll steuerpflichtig. Darin liegt ausdrücklich **keine**
  Nachholung der Hinzurechnung, sondern nur die Rückabwicklung des zu Unrecht gebliebenen Abzugs –
  über beide Jahre gerechnet ergibt sich null, dem Fiskus entgeht wirtschaftlich nur der
  **Zinsvorteil**. Das abschließende **Pensionsbeispiel** führt die Fortschreibung vor und zeigt, dass
  eine erstmalige Beanstandung immer nur in die Zukunft wirkt: 2024 kann nicht die gesamte Rückstellung
  von 62.000 € aufgegriffen werden, sondern nur die Zuführung des Jahres von 12.000 €. Dass die beiden
  Teilbeträge dabei auseinanderlaufen, ist bei Pensionszusagen der Normalfall – und für den
  Gesellschafter gilt der größere: Fließt ihm später die Pension zu, sind die vollen 62.000 € als
  Beteiligungsertrag anzusetzen, obwohl bei der Gesellschaft nur 12.000 € hinzugerechnet wurden.
  Ist der Passivposten nur **teilweise** gesellschaftsrechtlich veranlasst, wird die Gewinnerhöhung im
  Verhältnis des **Teilbetrags I zum gesamten Bilanzposten** aufgeteilt. Der Fall lebt davon, dass zwei
  ganz verschiedene Quoten aufeinandertreffen: Die 50 % beschreiben, welcher Teil der Rückstellung von
  Anfang an gesellschaftsrechtlich veranlasst war – eine Frage des Fremdvergleichs –, die 40 %, wie
  werthaltig der Anspruch im Zeitpunkt des Verzichts noch war – eine Frage der Bonität. Entscheidend
  ist die **Reihenfolge** der beiden Abzüge: Die Quelle zieht erst die verdeckte Einlage von 40.000 €
  ab und wendet die Quote dann auf den **Rest** an, so dass nur 50 % von 60.000 € = 30.000 € mit dem
  Teilbetrag II verrechnet werden können statt 50.000 €. Die Folge benennt sie selbst – 20.000 €
  Teilbetrag II gehen **ungenutzt unter**, dieser Teil der bereits versteuerten vGA wird nie wieder
  abgezogen. Im Ergebnis 30.000 € zu versteuerndes Einkommen in der Variante a), 60.000 € in der
  Variante b). Nebenbei zeigt der Fall, dass der **Teilbetrag I** auf der Ebene der Gesellschaft doch
  nicht ganz bedeutungslos ist: Seine unmittelbare Einkommenswirkung bleibt null, aber er liefert die
  Quote. Die Posten der **Aktivseite** erledigt die Quelle mit einem Verweis auf 1.5.2.1 – und darin
  liegt der Merksatz des ganzen Abschnitts 4.1: Bei Passivposten bleibt die Bilanz unberührt, bei
  Aktivposten ist ausnahmsweise zuerst die Bilanz zu berichtigen.
  Die **Kapitalertragsteuer** entsteht, weil die vGA beim Anteilseigner zu Bezügen nach § 20 Abs. 1
  Nr. 1 Satz 2 EStG führt. Bei **inländischen** Anteilseignern kann auf die Nacherhebung verzichtet
  werden, wenn die Nachversteuerung zweifelsfrei sichergestellt ist – der Grund ist rein
  verfahrensrechtlich: Die Kapitalertragsteuer ist nur Erhebungsform, und wird derselbe Betrag ohnehin
  veranlagt, würde sie anschließend angerechnet. Beim **ausländischen** Anteilseigner fehlt gerade
  dieses Veranlagungsverfahren, der Abzug wirkt abgeltend, und deshalb lässt § 50d Abs. 1 EStG keinen
  Verzicht zu; ein Freistellungsbescheid des Bundeszentralamts im Zeitpunkt des Zuflusses hindert die
  Erhebung. Übernimmt die Gesellschaft die Steuer, ohne zurückzufordern, entsteht eine **zweite vGA**,
  die die Bemessungsgrundlage erhöht, woraus wieder Steuer entsteht – diese Spirale löst Tz. 183a des
  BMF-Schreibens vom 19.05.2022 rechnerisch durch Hochrechnung auf.
  Beim **steuerlichen Einlagekonto** gilt die vGA als Leistung i. S. des § 27 Abs. 1 Satz 3 KStG, geht
  aber erst im Zeitpunkt des tatsächlichen **Abflusses** in die Verwendungsreihenfolge ein – hier löst
  sich ein, was Abschnitt 4.1.2 nur angedeutet hatte: Für das Einlagekonto gilt ein **anderer
  Zeitpunkt** als für die Hinzurechnung, beide können in verschiedene Veranlagungszeiträume fallen.
  Bei Ratenzahlung wird unterstellt, dass die Raten zunächst den angemessenen Kaufpreis abdecken, was
  den Abfluss der vGA so weit wie möglich nach hinten schiebt. Weil sich die Verwendung auf
  **sämtliche** Leistungen des Veranlagungszeitraums bezieht, lässt sich der Bestand keiner einzelnen
  Ausschüttung zuordnen. Und weil die vGA regelmäßig nicht erklärt und deshalb beim Einlagekonto nicht
  erfasst wurde, greift die **Verwendungsfestschreibung** des § 27 Abs. 5 KStG – im Ergebnis steht für
  die nachträglich aufgedeckte vGA praktisch kaum je Einlagekonto zur Verfügung, sie bleibt also fast
  immer ein voll steuerpflichtiger Bezug. **Damit ist der Abschnitt 4.1 vollständig.**
  Beim **Gesellschafter** führt die vGA zu Einnahmen aus Kapitalvermögen nach § 20 Abs. 1 Nr. 1 Satz 2
  EStG, und zwar auch bei der mittelbaren vGA, weil § 20 Abs. 5 EStG die Beteiligungserträge nur dem
  Anteilseigner zurechnet. Dass zwischen den beiden Besteuerungsebenen **keine Bindungswirkung**
  besteht, wirkt harmlos, ist aber weitreichend: Der Bescheid der Gesellschaft ist für den des
  Gesellschafters kein Grundlagenbescheid, beide Finanzämter entscheiden selbständig – genau deshalb
  braucht es die materielle Korrespondenz und § 32a KStG, die eine Bindung nicht voraussetzen, sondern
  ersetzen. Und weil die Besteuerung beim Anteilseigner **keine Gewinnauswirkung** bei der Gesellschaft
  voraussetzt, kann er selbst dann versteuern, wenn dort nichts hinzuzurechnen war. Beim
  **Zuflusszeitpunkt** gilt für den nicht beherrschenden Gesellschafter mit Anteilen im
  Privatvermögen § 11 EStG, für den **beherrschenden** dagegen die Vorverlagerung auf die
  **Fälligkeit** – dieselbe Logik wie beim strengen formellen Vergleich: Wer die Gesellschaft
  beherrscht, hat wirtschaftlich bereits die Verfügungsmacht. Die **Zahlungsfähigkeit** ist deshalb
  keine willkürliche Zusatzbedingung, sondern die logische Grenze dieser Fiktion. Das Beispiel führt
  drei Veranlagungszeiträume vor, jeder mit eigener Funktion: Hinzurechnung 2023 (Gewinnbeeinflussung),
  Zufluss beim Gesellschafter 2024 (Fälligkeit), Verwendung des Einlagekontos 2025 (Abfluss). Bei
  Anteilen im **Betriebsvermögen** verschwindet die Zuflussfrage vollständig, weil der
  Betriebsvermögensvergleich gilt – dort laufen beide Ebenen regelmäßig zeitgleich, und das gilt
  ausdrücklich auch für Kapitalgesellschaften als Anteilseigner.
  Die drei **Besteuerungsregime** unterscheiden sich weniger im Auslöser als in der Rechtsfolge der
  Korrespondenz, und wer die drei Fundstellen beisammen hat, hat den Abschnitt beisammen: Beim
  **Teileinkünfteverfahren** (Anteile im Betriebsvermögen einer natürlichen Person, oder im
  Privatvermögen mit Option nach § 32d Abs. 2 Nr. 3 EStG) entfällt die 40-prozentige Freistellung
  nach § 3 Nr. 40 Buchstabe d Satz 2 EStG; bei der **Abgeltungsteuer** entfällt nach § 32d Abs. 2 Nr. 4
  EStG nicht eine Freistellung, sondern der **Sondersteuersatz** von 25 % zugunsten des persönlichen
  Tarifs; bei der **Kapitalgesellschaft** entfällt die Steuerfreiheit nach § 8b Abs. 1 Satz 2 KStG,
  wobei zusätzlich die Streubesitzgrenze des § 8b Abs. 4 KStG vorab zu prüfen ist und die
  Fünf-Prozent-Pauschale des § 8b Abs. 5 Satz 1 KStG folgt. Überraschend – und von der Quelle für
  beide Anteilseignertypen ausdrücklich gesagt – ist, dass die materielle Korrespondenz dem
  gewerbesteuerlichen **Schachtelprivileg** *nicht* entgegensteht: Die Kürzung nach § 9 Nr. 2a bzw.
  Nr. 7 GewStG greift auch dann, wenn die Begünstigung ertragsteuerlich verloren ist, weil die
  Kürzungsvorschriften eine Mindestbeteiligung, aber keine Vorbelastung verlangen. Greift das Privileg
  nicht, führt § 8 Nr. 5 GewStG die Erträge in den Gewerbeertrag zurück.
  Der Satz, jede vGA **verbrauche sich im Umkehrschluss**, ist der Schlüssel zu den beiden folgenden
  Abschnitten: Die vGA ist kein zusätzlicher Vorteil, sondern die **Umetikettierung** eines bereits
  erfassten Vorgangs. Bei der **Vermögensminderung** hat der Gesellschafter tatsächlich Geld erhalten
  und bereits als Lohn, Miete oder Zins versteuert – dieser Posten ist vorhanden und wird deshalb
  **umqualifiziert**, um eine Doppelerfassung zu vermeiden. Dass diese Korrektur **unabhängig** davon
  erfolgt, ob die materielle Korrespondenz greift, ist systematisch zwingend: Die Korrespondenz
  entscheidet nur, *wie* der Beteiligungsertrag besteuert wird, nicht ob daneben eine Doppelerfassung
  droht. Bei nahe stehenden Personen ziehen sich die Rechtsfolgen auseinander – versteuern muss der
  **Anteilseigner**, mindern darf nur die **nahe stehende Person**, und die Weitergabe ist beim
  Anteilseigner nach § 12 Nr. 2 EStG nicht abziehbar.
  Bei der **verhinderten Vermögensmehrung** scheidet die Umqualifizierung aus, weil der Gesellschafter
  nur **Aufwendungen erspart** hat; es gibt keine Einnahme, die sich mindern ließe. An ihre Stelle
  tritt die **Verbrauchstheorie**: In Höhe der vGA entstehen zusätzliche Anschaffungs- bzw.
  Herstellungskosten, Werbungskosten oder Betriebsausgaben. Der lange Begründungssatz der Quelle lässt
  sich auf einen Vergleichsfall zurückführen – hätte der Gesellschafter das angemessene Entgelt
  gezahlt und die Gesellschaft es sofort wieder ausgeschüttet, hätte er **Aufwand und
  Beteiligungsertrag** gehabt; genau dieses Ergebnis stellt die Theorie her. Es geht also nicht um
  eine Vergünstigung, sondern um die Gleichstellung mit dem ordnungsgemäß abgewickelten Fall. Weil die
  Rechtsprechung den Vorgang heute nicht mehr als Fiktion, sondern als **realen Geschäftsvorfall**
  behandelt, gelten die allgemeinen Abzugsregeln: Die Aufwendungen sind nur steuerwirksam, wenn der
  Gesellschafter aus dem zugrundeliegenden Rechtsgeschäft selbst Einkünfte erzielt – beim vermieteten
  Mehrfamilienhaus sind es 10.000 € Werbungskosten nach § 21 EStG, beim eigengenutzten Einfamilienhaus
  scheitert der Abzug an § 12 Nr. 1 EStG. Die Einschränkung des **§ 3c Abs. 2 EStG** greift nur, wenn
  die fingierten Aufwendungen wirtschaftlich mit Beteiligungserträgen zusammenhängen, etwa beim
  verbilligten Darlehen zum Erwerb einer Beteiligung; die fingierten Zinsen für ein vermietetes Haus
  bleiben deshalb **voll** abziehbar, obwohl der Beteiligungsertrag selbst nur zu 60 % steuerpflichtig
  ist – diese Asymmetrie ist gewollt und die häufigste Fehlerquelle des Abschnitts. Bei einer
  Kapitalgesellschaft als Anteilseigner ist der Aufwand ohnehin immer voll abziehbar. Welche **Buchung**
  zutrifft, hängt allein davon ab, wo die Beteiligung liegt und wo der Vorteil landet: Beteiligung im
  Betriebsvermögen, Vorteil im Privatvermögen ergibt eine **Nutzungsentnahme**; beide im
  Betriebsvermögen bleibt es im Betrieb; Beteiligung im Privatvermögen, Vorteil im Betriebsvermögen
  ergibt eine **Einlage**. Im Maschinenbeispiel führt das zu einem Bilanzansatz von 109.500 € – genau
  der gemeine Wert abzüglich der tatsächlich angefallenen Umsatzsteuer, dasselbe Muster wie bei den
  181.000 € des Abschnitts 3.2.2.
  Bei **nahe stehenden Personen** hängt der ganze Abschnitt an einer einzigen Frage: Ist der Vorteil
  in einem **Wirtschaftsgut** verkörpert oder nicht? Beim Wirtschaftsgut wandert ein Vermögenswert
  mit und bleibt bei der nahe stehenden Person als „geschenkte“ Anschaffungskosten sichtbar – im
  Beispiel der Ehefrau 100.000 € gezahlt zuzüglich 400.000 € zugewendet, also genau der volle gemeine
  Wert von 500.000 €; die Verbrauchstheorie stellt sie so, als hätte sie den vollen Preis bezahlt.
  Beim bloßen **Nutzungsvorteil** wandert dagegen nichts Greifbares, sondern nur eine Ersparnis, und
  eine Ersparnis lässt sich nicht aktivieren. Deshalb bricht die Kette dort ab: Der Anteilseigner
  versteuert, aber **niemand** darf abziehen – bei ihr, weil ihr tatsächlich keine Aufwendungen
  entstanden sind, bei ihm, weil er aus der Finanzierung keine eigenen Einkünfte erzielt und § 12
  Nr. 2 EStG die Zuwendung sperrt. Der Vergleich mit dem vorigen Abschnitt macht das Ergebnis
  greifbar: Hätte der Gesellschafter selbst das zinslose Darlehen erhalten, wären 10.000 €
  Werbungskosten abziehbar gewesen; erhält es die Ehefrau, versteuert er dieselben 10.000 € und der
  Abzug entfällt vollständig. Die Begründung des Großen Senats – maßgebend sind nur **tatsächliche
  oder rechtliche**, nicht fiktive Gegebenheiten – zeigt dabei, dass die Verbrauchstheorie keine
  Billigkeitsregel ist, sondern eine Konsequenz der Zurechnung: Wo eine Belastung eingetreten ist,
  darf abgezogen werden; wo nicht, nicht.
  **§ 32a Abs. 1 KStG** löst genau das Problem, das die fehlende Bindungswirkung aufwirft: Weil der
  Bescheid des Gesellschafters nicht automatisch mitläuft, ist er bei Aufdeckung der vGA häufig längst
  bestandskräftig oder verjährt. Die Vorschrift schafft dafür eine eigene **Änderungsnorm**, die die
  §§ 171 ff. AO verdrängt und auch bei einkommensteuerpflichtigen Anteilseignern gilt, sowie eine
  eigene **Ablaufhemmung**: Die Festsetzungsfrist endet nicht vor Ablauf eines Jahres nach Bestandskraft
  des Bescheids der benachteiligten Gesellschaft. Die fehlende Bindung lässt sie ausdrücklich bestehen –
  genau darin liegt der Unterschied zwischen **formeller** und **materieller** Korrespondenz: Die
  materielle regelt, *wie hoch* besteuert wird, die formelle nur, *ob überhaupt noch geändert* werden
  darf. Sie wirkt dabei in **beide** Richtungen: Sie erlaubt nicht nur die nachträgliche Erfassung,
  sondern verpflichtet das Finanzamt auch, die Begünstigung zu gewähren, und greift ebenso, wenn die
  Gesellschaft die vGA im Klageverfahren wieder wegbekommt. Weil eine **Korrekturpflicht** ohne
  Ermessensspielraum besteht, ist sie ein echter Anspruch des Steuerpflichtigen. Drei Grenzen
  entscheiden in der Klausur die Punkte: Die Änderung des Körperschaftsteuerbescheids muss **gerade
  die vGA** betreffen (ob sich die festgesetzte Steuer ändert, ist dagegen gleichgültig – wichtig in
  Verlustjahren); der **Gewerbesteuermessbetrag** ist nicht erfasst, dort führt der Weg über § 35b
  GewStG; und die erhöhten **Abschreibungen der Folgejahre** hält die Quelle ausdrücklich als eigene
  Auffassung für nicht abgedeckt. Im Beispiel wirkt die Vorschrift doppelt: Die Einkünfte nach § 19
  EStG sinken um 480.000 €, die nach § 20 EStG steigen um 288.000 € – die Differenz von 192.000 € ist
  genau der nach § 3 Nr. 40 Buchstabe d EStG freigestellte Teil.
  Beim Verhältnis zu **§ 1 AStG** wirkt der Abschnitt auf den ersten Blick widersprüchlich: Es gebe
  keinen Vorrang, und doch sei § 1 AStG ausgeschlossen, wenn die vGA das zutreffende Einkommen bereits
  erfasst hat. Beides passt zusammen, sobald man die Normen als **Stufen** liest – § 8 Abs. 3 Satz 2
  KStG arbeitet bis zum **gemeinen Wert**, § 1 AStG geht darüber hinaus bis zum **Verrechnungspreis**.
  Stimmen beide Werte überein, bleibt für die zweite Stufe nichts übrig, nicht weil sie verdrängt
  wäre, sondern weil ihr Anwendungsbereich leerläuft; liegt der Verrechnungspreis niedriger, schließt
  § 1 Abs. 1 Satz 4 AStG den Spalt. Im Beispiel der Quelle ergeben 400.000 € vGA (1.000.000 € ./.
  600.000 €) und 100.000 € nach § 1 AStG (600.000 € ./. 500.000 €) zusammen genau die Differenz
  zwischen Kaufpreis und Verrechnungspreis – die beiden Korrekturen ergänzen sich **lückenlos und
  überschneidungsfrei**. Dass der Medianwert unter dem gemeinen Wert liegt, ist dabei kein Zufall,
  sondern die typische Folge des § 1 Abs. 3a Satz 4 AStG: Der Median ist ein normativ bestimmter Punkt
  innerhalb einer Bandbreite, der gemeine Wert ein einzelner Marktwert. Entscheidend ist ferner, dass
  das zutreffende Inlandseinkommen stets **unter Ausblendung** der Beteiligungserträge des
  Anteilseigners ermittelt wird – ob der ausländische Gesellschafter die vGA in seinem Staat
  versteuert, spielt keine Rolle. Damit ist dieser Abschnitt die Gegenrichtung zur Sperrwirkung des
  Art. 9 OECD-MA aus Abschnitt 2.2: Dort ist die vGA im Auslandsfall schwächer, weil der formelle
  Vergleich gesperrt ist, hier stärker, weil sie durch § 1 AStG ergänzt wird. **Damit ist auch das
  Kapitel 4 der Quelle vollständig.**
  Die **Dreiecksfälle** (Kapitel 5) betreffen vGA zwischen Schwestergesellschaften und verlangen eine
  **zweistufige** Betrachtung: die unübliche Leistung der benachteiligten Gesellschaft an den
  Anteilseigner einerseits, die Vorteilszuwendung an die andere Gesellschaft andererseits. Man zeichne
  sich das einmal als Dreieck: Die Leistung geht waagerecht von der einen Schwester zur anderen,
  steuerlich läuft sie aber über die **Spitze** – erst hinauf zum gemeinsamen Gesellschafter als vGA,
  dann wieder hinunter als verdeckte Einlage. Dieser Umweg ist zwingend, denn zwischen den beiden
  Schwestern besteht **kein** Gesellschaftsverhältnis; die für eine vGA erforderliche Veranlassung
  gibt es nur über den gemeinsamen Gesellschafter, und die Brücke dorthin bilden die **nahe stehenden
  Personen** aus Abschnitt 1.9. Die **Beteiligungsquote** ist unerheblich, und im Zweifel wird dem
  gemeinsamen Gesellschafter die vollständige vGA und Einlage zugerechnet, obwohl er wirtschaftlich
  nur anteilig profitiert – das kehrt sich nur um, wenn ein ausdrücklicher **Zuwendungswille** an die
  Mitgesellschafter feststellbar ist. Praktisch ist deshalb jeder Dreiecksfall in **vier** Schritten
  zu lösen: benachteiligte Gesellschaft, Anteilseigner (Bezug), Anteilseigner (Einlage), bevorteilte
  Gesellschaft – jeder Schritt mit eigener Norm. Die Quelle unterscheidet vier Fallgruppen:
  unentgeltliche oder verbilligte Lieferung, überteuerte Lieferung, überteuerte Dienstleistung und
  verbilligte Dienstleistung.
  Die erste Fallgruppe, die **verbilligte Lieferung von Wirtschaftsgütern**, führt das Schema
  vollständig vor. Bei der benachteiligten Gesellschaft ist die vGA als verhinderte Vermögensmehrung
  mit dem **gemeinen Wert** hinzuzurechnen; beim gemeinsamen Gesellschafter entsteht ein Bezug, der
  sich sogleich in einer **verdeckten Einlage** verbraucht und seine Anschaffungskosten an der
  bevorteilten Gesellschaft erhöht; dort ist das Wirtschaftsgut mit dem **Teilwert** zu aktivieren und
  der Nachaktivierungsertrag nach § 8 Abs. 3 Satz 3 KStG wieder abzuziehen, bei gleichzeitigem Zugang
  beim steuerlichen Einlagekonto. Grundfall und Abwandlung unterscheiden sich **nur** in der
  Rechtsform des gemeinsamen Gesellschafters, und genau daran lässt sich der Unterschied der beiden
  Begünstigungsregime ablesen: Bei der natürlichen Person bleiben **240.000 €** steuerpflichtig, bei
  der Kapitalgesellschaft nur **20.000 €** – ein Verhältnis von zwölf zu eins, weil das
  Teileinkünfteverfahren nur 40 % freistellt, § 8b Abs. 1 KStG dagegen 100 % und lediglich 5 %
  pauschal wieder hinzurechnet. Bei den beiden Gesellschaften ändert sich dagegen nichts. Die
  Zerlegung, die die Quelle anschließt – Einlage des Kaufpreises, Erwerb zum vollen Preis,
  Veräußerungsgewinn, Ausschüttung –, ist dabei mehr als eine Erläuterung: Sie ist die **Probe** auf
  jede Dreiecksfalllösung, derselbe Gedanke, der schon die Verbrauchstheorie getragen hat.
  Sichtbar wird dabei, dass im Dreiecksfall **zwei Bewertungssysteme** aufeinandertreffen, die nichts
  voneinander wissen: Die abgehende Seite folgt dem vGA-Recht und bewertet mit dem **gemeinen Wert**,
  die ankommende dem Einlagerecht (§ 6 Abs. 1 Nr. 5 und Abs. 6 Satz 2 EStG) und bewertet mit dem
  **Teilwert**. Solange beide übereinstimmen, fällt das nicht auf; sobald sie auseinanderfallen,
  bleibt beim Gesellschafter zwangsläufig ein Rest – ein **voll abziehbarer Aufwand**. Im
  Maschinenbeispiel sind das 95.000 €, und der Betrag ist nicht zufällig: Er ist genau die im
  gemeinen Wert steckende Umsatzsteuer (500.000 € Teilwert × 19 % = 95.000 €, 500.000 € + 95.000 € =
  595.000 €), weil der gemeine Wert ein Brutto-, der Teilwert ein Nettowert ist. Mit der
  **tatsächlich** angefallenen Umsatzsteuer von 47.500 € hat er nichts zu tun, deren
  Bemessungsgrundlage der Einkaufspreis von 250.000 € ist – dasselbe Auseinanderfallen von
  hypothetischer und tatsächlicher Umsatzsteuer, das in Abschnitt 3.2.1 die umstrittenen 4.950 €
  erzeugt hat, hier aber ohne Streit. Auf diesen Aufwand greift weder § 10 Nr. 2 KStG (es ist nicht
  die Umsatzsteuer **des Gesellschafters**) noch § 3c Abs. 2 EStG (er hat den Betrag nicht
  **tatsächlich aufgewendet**), so dass er den steuerpflichtigen Teil des Beteiligungsertrags von
  357.000 € auf 262.000 € drückt – obwohl der Ertrag selbst nur zu 60 % steuerpflichtig ist.
  Bei der **überteuerten Lieferung** (5.3) läuft derselbe Dreiecksweg in der Gegenrichtung: Die
  kaufende Gesellschaft muss das Wirtschaftsgut mit den **angemessenen** Anschaffungskosten
  aktivieren, der überhöhte Teil ist im Wege der **Bilanzberichtigung** erfolgswirksam abzustocken,
  und erst der dadurch entstehende Aufwand trägt die Hinzurechnung – genau das Muster aus Abschnitt
  1.5.2.1. Der Überpreis fließt als **verdeckte Einlage** in die liefernde Schwestergesellschaft.
  Anders als in 5.2 entsteht beim Gesellschafter dabei **kein** Aufwand, und der Grund ist
  systematisch: Bei der verhinderten Vermögensmehrung wird die vGA mit dem gemeinen Wert bewertet,
  also **brutto**, die Einlage mit dem Teilwert, also **netto** – daraus entstand dort die Lücke. Bei
  der Vermögensminderung bemisst sich die vGA nach Abschnitt 3.2.3 von vornherein nur nach dem
  **Nettowert**, weil die Gesellschaft in Höhe der Vorsteuer gar nicht entreichert ist; beide Seiten
  arbeiten also mit Nettowerten und gehen punktgenau auf (250.000 € gegen 250.000 €). Das
  Maschinenbeispiel ist erkennbar mit denselben Zahlenverhältnissen gebaut wie das aus 5.2, damit der
  Unterschied sichtbar wird. Bemerkenswert ist ferner, was bei der liefernden Gesellschaft **stehen
  bleibt**: Von 400.000 € gebuchtem Ertrag werden nur 250.000 € abgezogen, die verbleibenden
  150.000 € sind der **angemessene Veräußerungsgewinn** (Teilwert 250.000 € abzüglich Buchwert
  100.000 €), den sie auch gegenüber einem Fremden erzielt hätte. Umsatzsteuerlich ändert sich nichts:
  Die Bemessungsgrundlage bleibt das tatsächlich vereinbarte Entgelt, und der Vorsteueranspruch der
  kaufenden Gesellschaft bleibt in voller Höhe erhalten.
  Die **überteuerte Dienstleistung** (5.4) ist die einfachste der vier Fallgruppen, und der Grund ist
  ein sachlicher: Der zugewendete Vorteil ist **Geld**, nicht ein Wirtschaftsgut. Damit entfallen auf
  einen Schlag drei Problemfelder – keine Bilanzberichtigung, weil nichts zu aktivieren ist; keine
  Bewertungsfrage, weil Geld zum Nennwert angesetzt wird; keine Umsatzsteuerdifferenz. Teilwert und
  Betrag der vGA stimmen deshalb zwangsläufig überein. Im Darlehensbeispiel bleiben bei der
  empfangenden Gesellschaft von 200.000 € gebuchtem Zinsertrag 100.000 € steuerpflichtig, und die
  zahlende darf 100.000 € abziehen – über beide Gesellschaften gerechnet also genau das Bild eines
  **fremdüblichen** Darlehens. Bemerkenswert ist schließlich, dass hier **dieselbe** Gesellschaft
  leistet und bevorteilt wird, während die liefernde Gesellschaft in 5.2 die benachteiligte und in 5.3
  die bevorteilte war. Wer die Lösung an der Leistungsrichtung aufhängt, kommt durcheinander –
  maßgeblich ist allein, **wer ärmer und wer reicher** geworden ist.
  Die **verbilligte Dienstleistung** (5.5) fällt aus dem Rahmen der übrigen drei Fallgruppen, weil ein
  bloßer **Nutzungsvorteil kein Wirtschaftsgut** und damit nicht einlagefähig ist – derselbe
  Grundsatz, der schon in Abschnitt 4.2.5.2 die nahe stehenden Personen betraf. Bei der bevorteilten
  Gesellschaft geschieht deshalb **überhaupt nichts**: kein Ertrag, kein Abzug, kein Zugang beim
  steuerlichen Einlagekonto, das in allen anderen Fallgruppen anwuchs. An die Stelle der Einlage tritt
  der **Aufwandsverbrauch** beim gemeinsamen Gesellschafter: Er wird behandelt, als hätte er die
  Aufwendungen im Interesse der bevorteilten Gesellschaft getragen, weil diese eigene Kosten spart,
  ihr Gewinn steigt und ihm daraus künftig Beteiligungserträge zufließen können – eine „mittelbare
  Verknüpfung“, die die Quelle ausdrücklich genügen lässt. Daraus folgt die praktisch wichtige
  Konsequenz, dass Ertrag und Aufwand an **verschiedenen** Beteiligungen hängen. Das Ergebnis ist
  überraschend asymmetrisch: Die natürliche Person landet bei **0 €**, weil das Teileinkünfteverfahren
  Ertrag und Aufwand gleichermaßen auf 60 % kürzt und sich die Korrekturen von je 32.000 € aufheben;
  die Kapitalgesellschaft dagegen bei **./. 76.000 €**, weil § 8b Abs. 1 KStG den Ertrag zu 100 %
  freistellt, der Aufwand aber voll abziehbar bleibt und die Fünf-Prozent-Pauschale sich nur nach dem
  **Ertrag** bemisst. Im Privatvermögen schließlich bleiben volle 80.000 € Bemessungsgrundlage stehen,
  weil § 20 Abs. 9 EStG jeden Abzug sperrt – ein starkes Argument für die Option nach § 32d Abs. 2
  Nr. 3 EStG.
  Das **Korrespondenzprinzip in Dreiecksfällen** (5.6) ordnet die Regeln nicht nach Vorschriften,
  sondern danach, **auf welcher Ebene** der Sachverhalt gerade gewürdigt wird: Bei der bevorteilten
  Gesellschaft hilft § 8 Abs. 3 Satz 5 KStG, beim Anteilseigner § 8b Abs. 1 Satz 2 KStG, § 3 Nr. 40
  Buchstabe d Satz 2 EStG oder § 32d Abs. 2 Nr. 4 EStG. Beide setzen den **Einkommensschaden** bei der
  leistenden Gesellschaft voraus, und weder der Grund des Schadens noch die verfahrensrechtliche
  Änderbarkeit spielen eine Rolle – das trennt die **materielle** Korrespondenz klar von der
  **formellen** des § 32a KStG, die genau umgekehrt nur das Verfahren betrifft. § 8 Abs. 3 Satz 5 KStG
  gilt **ausschließlich** in Dreiecksfällen und ordnet die Nachversteuerung des Schadens bei der
  bevorteilten Gesellschaft an; folgerichtig entstehen dem Gesellschafter nach Satz 6 dann auch keine
  nachträglichen Anschaffungskosten – wobei Satz 6 nur auf Satz 5 verweist und in den Fällen des
  Satzes 4 gerade nicht gilt. Auffällig ist, dass die Einlage trotz der Nachversteuerung gleichwohl
  dem **steuerlichen Einlagekonto** zuwächst: § 8 Abs. 3 Satz 5 KStG betrifft nur die
  Einkommensermittlung, und § 27 KStG kennt keine materielle Korrespondenz. Einkommen und Einlagekonto
  laufen hier also bewusst auseinander. Der Streit zwischen dem BFH-Urteil vom 13.06.2018 und dem
  **Nichtanwendungserlass** lässt sich auf eine Frage zuspitzen: Genügt es, dass das Einkommen des
  Gesellschafters rechnerisch dasselbe wäre, oder muss der Beteiligungsertrag tatsächlich angesetzt
  worden sein? Das stärkste Argument der Verwaltung ist dabei, dass bei vollständiger Erfassung eben
  nicht 0 €, sondern **5 %** des Ertrags steuerpflichtig geworden wären.
  Die **Rückausnahme** des § 8 Abs. 3 Satz 5 KStG („es sei denn“) macht die Prüfungsreihenfolge
  zwingend: Zuerst ist zu fragen, ob bei der **leistenden** Gesellschaft überhaupt ein
  Einkommensschaden eingetreten ist. Fehlt er, ist die Sache erledigt, und die Nichtversteuerung beim
  Gesellschafter spielt keine Rolle mehr. Dahinter steht eine Abgrenzung, die die ganze Norm trägt:
  § 8 Abs. 3 Satz **4** KStG soll die Nachbesteuerung der **verdeckten Einlage** sichern, Satz **5**
  dagegen nur, dass deren **Auslöser** – die vGA – „einmal im Einkommen“ der beteiligten
  Gesellschaften erscheint. Der Sonderfall ist die **Übertragung einer Beteiligung**: Weil § 8b Abs. 2
  KStG den hinzugerechneten Veräußerungsgewinn sogleich wieder freistellt, bleibt die Hinzurechnung im
  Ergebnis wirkungslos – dieselbe zweistufige Prüfung wie in Abschnitt 1.5.2.2 – und damit kann kein
  Einkommensschaden entstehen. Sämtliche Korrespondenzregeln laufen dann leer, auch beim
  Gesellschafter: § 8b Abs. 1 Satz 2 KStG, § 3 Nr. 40 Buchstabe d Satz 2 EStG und § 32d Abs. 2 Nr. 4
  EStG sind jeweils mit **„soweit“** formuliert und versagen die Begünstigung nur in dem Umfang, in
  dem das Einkommen tatsächlich gemindert wurde. Alle Korrespondenzregeln des Skripts hängen damit an
  derselben Größe.
  Bei der **materiellen Korrespondenz an den Einnahmen** (5.6.2) entsteht ein Konflikt, der sich fast
  zwangsläufig ergibt: § 8 Abs. 3 Satz 5 KStG setzt voraus, dass die vGA **weder** bei der leistenden
  Gesellschaft **noch** beim Anteilseigner berücksichtigt wurde. Wird sie nun beim Anteilseigner
  erfasst – und zwar voll steuerpflichtig, weil dort ihrerseits die Korrespondenz greift –, entfällt
  rückwirkend die zweite Voraussetzung. Die Folge ist die Korrektur der Veranlagung der bevorteilten
  Gesellschaft nach **§ 32a Abs. 2 KStG**; der Vorrang des Anteilseigners ist also kein
  Wertungsentscheid, sondern folgt aus dem Tatbestand selbst. Hier zeigt sich zugleich, wofür die
  **formelle** Korrespondenz in den Dreiecksfällen gebraucht wird: Während § 32a Abs. 1 KStG den
  Bescheid des Anteilseigners öffnet, öffnet Abs. 2 den umgekehrten Weg – den Bescheid der
  Gesellschaft, die die verdeckte Einlage empfangen hat. Materielle und formelle Korrespondenz greifen
  damit ineinander: Die eine bestimmt, **was** zu besteuern ist, die andere sorgt dafür, dass der
  **Bescheid** noch geändert werden kann. Leitgedanke bleibt die **Einmalversteuerung** – das
  vGA-Potential soll genau einmal besteuert werden, nicht keinmal und nicht zweimal. Das ergibt
  zugleich die Kontrollfrage für jede Klausurlösung: Taucht der Betrag der vGA am Ende genau einmal in
  einer Bemessungsgrundlage auf?
  Die **Rückausnahme des § 8b Abs. 1 Satz 5 KStG** stellt die Steuerfreiheit beim Anteilseigner wieder
  her, wenn sich das Einkommen der bevorteilten Gesellschaft tatsächlich erhöht hat **und** § 32a KStG
  auf deren Veranlagung nicht anwendbar ist. Sie macht sichtbar, dass die materielle Korrespondenz
  kein Selbstzweck ist, sondern ein Instrument gegen **weiße Einkünfte**: Sie versagt die Begünstigung
  nur, weil der Betrag sonst nirgends besteuert würde – ist er im Ausland bereits erfasst, entfällt
  der Grund, und ohne die Rückausnahme entstünde die umgekehrte Fehlbesteuerung, nämlich eine
  **Doppelbesteuerung** im In- und Ausland. Die zweite Voraussetzung wirkt zunächst überflüssig und
  ist doch der eigentliche Auslöser: Solange sich die Einkommenserhöhung bei der bevorteilten
  Gesellschaft über § 32a Abs. 2 KStG **zurückdrehen** lässt, muss das geschehen; nur wo dieser Weg
  versperrt ist, weil ein **ausländischer** Bescheid nicht nach einer deutschen Vorschrift geändert
  werden kann, bleibt die Steuerfreiheit als einziges Mittel. Maßgebend sind dabei die tatsächlichen
  ausländischen Verhältnisse, und den Nachweis trägt der Steuerpflichtige, etwa durch Vorlage des
  ausländischen Steuerbescheids. In beiden Auslandsbeispielen bleibt am Ende genau die
  **Fünf-Prozent-Pauschale** steuerpflichtig – 25.000 € bzw. 5.000 €.
  Beim **periodenübergreifenden Sonderfall** – der verbilligten Übertragung eines Wirtschaftsguts ins
  Ausland – ist umstritten, ob die spätere Gewinnerhöhung durch Minderabschreibung oder
  Veräußerungsgewinn genügt. Die Literatur liest § 8b Abs. 1 Satz 5 KStG **periodenübergreifend**, die
  Verwaltung **periodenbezogen** und prüft abschließend im Jahr der Einlage; ihr sprachlicher Anker
  ist die Vergangenheitsform des Gesetzes („erhöht **hat**“), die Minderabschreibung sei bloße
  **Reflexwirkung**. Das Schweizer Beispiel und das Inlandsbeispiel gehören dabei zusammen gelesen:
  Beide betreffen die verhinderte Vermögensmehrung und gehen doch entgegengesetzt aus, und den
  Unterschied macht allein, **was** zugewendet wird. Beim **Wirtschaftsgut** wird bei der Erwerberin
  mit dem niedrigen Wert aktiviert, ihr Einkommen steigt zunächst nicht, die Rückausnahme scheitert.
  Beim **Nutzungsvorteil** ist nichts aktivierbar, der ersparte Aufwand wirkt sich aber **sofort** im
  Einkommen aus, die Rückausnahme greift. Genau deshalb ist der Nutzungsvorteil der **einzig
  denkbare** inländische Anwendungsfall: Immer wenn ein Wirtschaftsgut wandert, entsteht eine
  verdeckte Einlage und damit die Anwendbarkeit des § 32a Abs. 2 KStG – die zweite Voraussetzung ist
  dann nicht erfüllt. Im Inlandsbeispiel ergibt sich ein zu versteuerndes Einkommen von
  **./. 380.000 €** – dasselbe Muster wie die ./. 76.000 € aus Abschnitt 5.5, weil § 8b Abs. 1 KStG
  den Ertrag zu 100 % freistellt, der beteiligungsbezogene Aufwand voll abziehbar bleibt und die
  Pauschale sich nur nach dem Ertrag bemisst.
  Bei der **Anwendung des § 1 AStG in Dreiecksfällen** hängt alles an einer Frage, die die Quelle mit
  „gegenläufig wieder verbraucht“ umschreibt: Bleibt die Einkünftekorrektur im Inland stehen oder
  nicht? Wandert ein Wirtschaftsgut oder Geld zur ausländischen Schwester, verbraucht sich die vGA
  beim Gesellschafter in einer **verdeckten Einlage**, die nur die Anschaffungskosten erhöht und das
  Einkommen nicht mindert – die Korrektur bleibt wirksam, und § 1 AStG wird nicht gebraucht. Wandert
  dagegen ein **Nutzungsvorteil**, verbraucht sie sich in **abziehbarem Aufwand**: Der Hinzurechnung
  von 80.000 € bei der leistenden Gesellschaft stünden 80.000 € Aufwand beim Gesellschafter gegenüber,
  das Inlandseinkommen wäre 0 € – und genau dieses Ergebnis verwirft die Quelle als unzutreffend, weil
  der Verbrauch wirtschaftlich im **Ausland** eintreten müsste. Dann verdrängt § 1 AStG die vGA
  **insgesamt**, so dass beim gemeinsamen Anteilseigner überhaupt keine vGA-Folgen mehr eintreten –
  weder Beteiligungserträge noch Aufwandsverbrauch. Das unterscheidet die Konstellation deutlich von
  Abschnitt 4.4, wo beide Normen nebeneinanderstanden und § 1 AStG nur ergänzend hinzurechnete. Das
  Nahestehen prüft die Quelle dabei über eine eigene Vorschrift: nicht § 8 Abs. 3 Satz 2 KStG, sondern
  § 1 Abs. 2 Nr. 3 Buchstabe a AStG mit seiner **Mindestbeteiligung von 25 %** – die Schwestern stehen
  einander nicht unmittelbar nahe, sondern über die Mutter als „dritte Person“.
  Bei der **Schenkungsteuer** (5.7) ist § 7 Abs. 8 Satz 2 ErbStG zu beachten, der die freigebigen
  Zuwendungen im Konzern **abschließend** definiert. Der wichtigste Unterschied: Satz 1 enthält eine
  **Fiktion**, Satz 2 setzt den **Bereicherungswillen voraus** – die Gesellschaft muss fremdnützig
  gehandelt haben. Bei nahen Angehörigen i. S. des § 15 AO wird dieser Wille **widerlegbar
  unterstellt**; wer nachweist, dass ausschließlich im eigenbetrieblichen Interesse gehandelt wurde,
  entgeht der Steuer trotz eingetretener Wertverschiebung. Zuwendender ist die Kapitalgesellschaft,
  bei der die vGA ausgelöst wurde – und weil zu einer juristischen Person nie ein
  Verwandtschaftsverhältnis besteht, stellt **§ 15 Abs. 4 ErbStG** für die Steuerberechnung auf das
  persönliche Verhältnis der **Anteilseigner** ab, was Steuersatz und Freibetrag verändert. Im
  Beispiel ist B zu 50 % an der bevorteilten Gesellschaft beteiligt, so dass seine Anteile um
  250.000 € an Wert gewinnen; die anderen 250.000 € entfallen auf A selbst, und insoweit kann er sich
  nichts schenken. Sind beide Gesellschaften **beteiligungsidentisch**, scheidet die Schenkungsteuer
  aus, denn jeder Gesellschafter verliert bei der einen Gesellschaft genau so viel, wie er bei der
  anderen gewinnt – ertragsteuerlich bleibt es gleichwohl bei vGA und verdeckter Einlage, beide
  Steuern laufen also auseinander. Damit schließt sich der Kreis zu Abschnitt 1.13: Der BFH hatte 2017
  entschieden, zwischen Gesellschaft und Gesellschafter gebe es nichts Freigebiges; § 7 Abs. 8 ErbStG
  ist die Gegenbewegung des Gesetzgebers, und im Ergebnis wandert die Schenkungsteuer von der Achse
  Gesellschaft–Gesellschafter auf die Achse **Gesellschafter–Gesellschafter**. **Damit ist auch das
  Kapitel 5 der Quelle vollständig.**
  Bei der **Pensionszusage** (Kapitel 6) enthält schon die Prüfungsreihenfolge die praktisch
  wichtigste Aussage, und sie wirkt zunächst überraschend: Scheitert die Rückstellung bereits an
  § 6a EStG, ist eine vGA **ausgeschlossen**. Der Grund ist derselbe, der das ganze Skript durchzieht –
  hinzugerechnet werden kann nur, was den Gewinn tatsächlich gemindert hat; wird die Rückstellung im
  Wege der **Bilanzberichtigung** korrigiert, verschwindet die Gewinnminderung schon innerhalb der
  Bilanz. Wer sofort mit dem Fremdvergleich beginnt, rechnet doppelt. Erst auf der zweiten Stufe
  folgen die sechs Kriterien: Ernsthaftigkeit, Erdienbarkeit, Warte- und Probezeit, Angemessenheit,
  Unverfallbarkeit und Finanzierbarkeit. Zentral und leicht zu übersehen ist dabei, dass die beiden
  Ebenen über Jahrzehnte **auseinanderlaufen**: Bei der Gesellschaft wird Jahr für Jahr die Zuführung
  hinzugerechnet, beim Gesellschafter fließt bis zum Versorgungsfall oder einem Verzicht überhaupt
  nichts zu – genau dafür braucht die Verwaltung die **Teilbetragsberechnung** aus Abschnitt 4.1.3.1.
  Drei **Altersgrenzen** stehen nebeneinander und bedeuten Verschiedenes: **60 Jahre** ist die
  Höchstgrenze im **Zusagezeitpunkt** und betrifft die Erdienbarkeit (unabhängig davon, ob der
  Geschäftsführer beherrschend ist); **62 Jahre** ist die Untergrenze des vereinbarten
  **Pensionsalters** und betrifft die Ernsthaftigkeit – eine vGA **dem Grunde nach**, bei Altzusagen
  vor dem 09.12.2016 waren es 60 Jahre; **67 Jahre** ist dieselbe Untergrenze bei **beherrschenden**
  Geschäftsführern und betrifft die Angemessenheit – eine vGA **der Höhe nach**, nämlich in Höhe des
  Unterschieds zwischen der Berechnung auf das vereinbarte und auf das 67. Lebensjahr. Der
  **Erdienenszeitraum** beträgt bei beherrschenden Geschäftsführern zwingend zehn Jahre, und schon ein
  kurzes Unterschreiten führt zur vGA; beim nicht beherrschenden genügen drei Jahre, wenn er dem
  Betrieb mindestens zwölf Jahre angehört – der Unterschied hat einen klaren Grund: Weil dort das
  **Rückwirkungsverbot** nicht gilt, darf die bereits abgeleistete Dienstzeit mitzählen. Im Beispiel
  der Quelle sind einem 59-Jährigen sechs Jahre zu wenig, elf dagegen genug.
  **Warte- und Probezeit** betreffen ganz verschiedene Dinge und laufen nebeneinander: fünf Jahre
  Wartezeit knüpfen an das **Unternehmen** an (gesicherte Erkenntnisse über die Ertragsentwicklung),
  zwei bis drei Jahre Probezeit an die **Person** des Geschäftsführers. Bei einer eingebrachten
  Einzelunternehmung oder bekannter Vortätigkeit entfallen sie. Einschneidend ist der Wechsel der
  Rechtsauffassung ab dem 29.07.2010: Nach altem Recht war der Verstoß ein **vorübergehender** Mangel,
  der mit Fristablauf heilte; nach neuem Recht ist er **endgültig** – maßgeblich ist allein der
  Zusagezeitpunkt, und der einzige Ausweg ist die Aufhebung und Neuerteilung der Zusage. Bei der
  **Unverfallbarkeit** stuft die Quelle die Rechtsfolge fein ab: Verboten ist nicht die
  Unverfallbarkeit als solche, sondern nur die **sofortige volle** beim beherrschenden Gesellschafter;
  die **ratierliche** ist ausdrücklich zulässig, und hinzuzurechnen ist deshalb nur der
  **Differenzbetrag** zwischen der tatsächlichen Rückstellung nach § 6a EStG und derjenigen bei
  ratierlicher Unverfallbarkeit. Dahinter steht der Fremdvergleich: Ein fremder Geschäftsführer
  erdient sich seine Anwartschaft über die Jahre.
  Bei der **Angemessenheit** geht die Zusage mit der **fiktiven Jahresnettoprämie** in die
  Gesamtausstattung ein – nach dem Alter im Zusagezeitpunkt und mit den Rechnungsgrundlagen der
  Rückstellung. Eine **Überversorgung** liegt vor, wenn die versprochenen Leistungen zusammen mit
  gesetzlicher Rente und Direktversicherung **75 %** der letzten steuerlich anzuerkennenden
  Aktivbezüge übersteigen. Eine Feinheit ist leicht falsch zu machen: Die fiktive Jahresnettoprämie
  zählt zwar **in** die Gesamtausstattung, aber **nicht** zu den Aktivbezügen – andernfalls entstünde
  ein Zirkelschluss, weil eine höhere Zusage ihre eigene Bezugsgröße und damit ihre Angemessenheit
  herbeirechnen würde. Die Rechtsfolge hängt an der Art der Zusage: Bei der **entgeltsabhängigen**
  Zusage (fester Prozentsatz des Endgehalts) bleibt die Bilanz unberührt, und die Zuführungen sind
  laufend vGA, soweit die Rückstellung die Grenze übersteigt. Bei der **Festbetragszusage** greift
  dagegen § 6a Abs. 3 Satz 2 Nr. 1 Satz 4 EStG: Die Rückstellung wird **innerhalb der Bilanz** auf
  75 % der Aktivbezüge zurückgeführt, eine vGA entsteht zunächst nicht – dafür aber bei der
  **Auszahlung**, weil der Aufwand dort durch keine Rückstellung mehr gedeckt ist. Die **Nur-Pension**
  ist die Zuspitzung: Ohne laufende Bezüge ist die Bezugsgröße null, die Überversorgung beträgt 100 %,
  die Rückstellung ist vollständig aufzulösen – und auch hier kehrt die vGA bei der Auszahlung zurück.
  Darin liegt das durchgehende Muster: **Wo die Bilanz korrigiert wird, verdrängt das die vGA – aber
  nur vorläufig.** Sie verschwindet nie, sie verschiebt sich nur; dasselbe hatten Abschnitt 6.1 und
  Abschnitt 4.1.3 schon gesagt.
  Die **Finanzierbarkeit** verlangt eine **fiktive Überschuldungsprüfung**, bei der die
  Pensionsverpflichtung mit dem **Anwartschaftsbarwert** anzusetzen ist – der Maßstab ist also
  strenger, als man meint: Geprüft wird nicht, ob die laufenden Zuführungen tragbar sind, sondern ob
  die Gesellschaft überlebte, wenn der Versorgungsfall **sofort** einträte. Maßgeblich ist wieder der
  Zusagezeitpunkt, so dass eine spätere Krise die Zusage nicht nachträglich zur vGA macht; die
  Ausnahme knüpft nicht an die Krise an, sondern an ein **Unterlassen** – bleibt eine vertraglich
  vorgesehene Anpassung aus, indiziert das gesellschaftsrechtlich motiviertes Verhalten. Die
  **Rückdeckungsversicherung** schließlich ist nicht zwingend erforderlich, und ihre Beiträge sind
  **selbst dann** keine vGA, wenn die abgesicherte Zusage eine ist: Der Anspruch aus der Versicherung
  steht der **Gesellschaft** zu, so dass es an der **Vorteilsgeneigtheit** fehlt – dieselbe
  Begründung, mit der Abschnitt 1.7 schon die Schuldzinsen für ein überhöhtes Gehalt abziehbar
  gelassen hat. Damit endet das Skript nicht zufällig bei einem Merkmal aus dem ersten Kapitel: Die
  sechs Prüfungskriterien der Pensionszusage sind durchweg Anwendungen dessen, was die Kapitel 1 und 2
  allgemein entwickelt haben – das Kapitel 6 ist weniger ein neues Thema als die **Probe** auf alles
  Vorangegangene. **Damit ist das Skript vollständig übernommen.**
  Prüfung: `npm run check:k2-kst-teil4`

- **KSt Teil V (Hamacher)** (Klausur 2, Reiter Körperschaftsteuer → „Teil V (§§ 8c, 8d,
  Zinsschranke)“): das Lehrgangsskript **„Körperschaftsteuer, Teil V: Verlustabzug und
  fortführungsgebundener Verlust (§ 8c, 8d KStG), Zinsschranke (§ 4h EStG, § 8a KStG), Verluste aus
  stillen Beteiligungen (§ 15 Abs. 4 EStG)“** (21. Auflage, Rechtsstand 05/2025) im Wortlaut –
  **vollständig** mit 46 Kapiteln, 931 Abschnitten und 109 Tabellen über alle vier Kapitel und
  74 Seiten; die Kapitel 1 und 2 des Skripts sind **vollständig**; Kapitel 1 des Skripts (§ 8c KStG) ist damit **vollständig**. Nach der Aufhebung der ersten
  Quotenstufe kennt **§ 8c KStG** heute nur noch **eine** Schwelle: mehr als 50 % der Anteile am
  Nennkapital. Die Faustregel lautet deshalb **alles oder nichts** – entweder bleibt der Verlust
  vollständig erhalten oder er geht vollständig unter; einen quotalen Untergang gibt es nicht mehr.
  Das BVerfG hatte die frühere Stufe von über 25 bis 50 % mit Beschluss vom 29.03.2017 für
  unvereinbar mit Art. 3 GG erklärt, weil es dort an einem sachlich überzeugenden Grund fehle, und
  der Gesetzgeber hat sie für alle Erwerbe nach dem 31.12.2007 **ersatzlos aufgehoben**. Der Grund
  für die verbliebene Schwelle ist die **zivilrechtliche** Qualität des Anteils: Ab mehr als 50 % ist
  der Erwerber Mehrheitsgesellschafter, kann durch Mehrheitsbeschluss den Gesellschaftszweck ändern
  und die erworbenen Verluste mit Gewinnen aus einer ganz neuen Tätigkeit verrechnen – genau das ist
  der **Mantelkauf**, den die Norm treffen soll. Die aufgehobenen Erwerbe bleiben allerdings
  **Zählerwerbe** und können zusammen mit späteren die Schwelle überschreiten. Gemessen wird dabei
  stets am **gesamten** gezeichneten Kapital, nie an der Beteiligung des Veräußerers – wer von einem
  Gesellschafter mit 60 % dessen gesamte Beteiligung erwirbt, überschreitet die Schwelle; wer von
  zwei Gesellschaftern je 30 % ihres Anteils erwirbt, nicht. Bei der zur Körperschaftsbesteuerung
  **optierenden** Gesellschaft nach § 1a KStG tritt an die Stelle des Nennkapitals das Kapitalkonto I
  des Mitunternehmeranteils.
  Erfasst sind **sämtliche** nicht genutzten Verluste, und die Aufzählung reicht weiter als der Name
  der Norm vermuten lässt: neben den Verlustvorträgen auch der **Zinsvortrag** nach § 4h Abs. 1
  Satz 5 EStG – eine Verbindung zum dritten Kapitel des Skripts, die in der Klausur leicht übersehen
  wird –, der **fortführungsgebundene** Verlustvortrag (§ 8d KStG bewirkt also keine dauerhafte
  Immunisierung) und die laufenden unterjährigen Verluste. Über § 10a Satz 10 GewStG schlägt die Norm
  auf den **Gewerbeertrag** durch, und zwar sogar auf den Gewerbeverlust von Mitunternehmerschaften,
  an denen unmittelbar oder über mehrere Stufen eine Kapitalgesellschaft beteiligt ist. Die
  Steuerfreiheit eines Sanierungsgewinns nach § 3a EStG **rettet die Verluste nicht**: Der schädliche
  Anteilserwerb lässt sie gleichwohl untergehen, gleichgültig ob der Schuldenerlass vor oder nach dem
  Erwerb ausgesprochen wurde – denn für § 8c KStG gilt die **eigene** Sanierungsklausel des
  Absatzes 1a, deren Voraussetzungen nicht über § 3a EStG umgangen werden sollen. Deren Rechtsfolge
  geht weiter, als man erwartet: Der Erwerb wird **komplett ausgeblendet** und zählt auch für spätere
  Erwerbe nicht als Zählerwerb, fällt also aus der Fünfjahresbetrachtung heraus. Verlangt werden
  **kumulativ** die Sanierungsabsicht und der Erhalt der wesentlichen Betriebsstrukturen – innerhalb
  des zweiten Merkmals genügt eine von drei Alternativen (Betriebsvereinbarung, Lohnsumme oder
  Zuführung von Betriebsvermögen binnen zwölf Monaten) –, dazu treten zwei **negative**
  Voraussetzungen: kein bereits im Wesentlichen eingestellter Geschäftsbetrieb und kein
  **Branchenwechsel** binnen fünf Jahren. Die letzte ist besonders unangenehm, weil sie über § 175
  Abs. 1 Nr. 2 AO **rückwirkend** greift – wer die Klausel nutzt, bindet sich fünf Jahre an die
  Branche.
  Beim **Erwerberkreis** werden einander nahe stehende Personen zusammengefasst, so dass zwei für
  sich unschädliche Erwerbe von je 50 % zu einer Quote von 100 % werden. Bei der Rechtsform des
  Erwerbers lohnt der Vergleich der beiden Beispiele der Quelle: Sie enden gleich, laufen aber über
  **entgegengesetzte** Wege. Die **vermögensverwaltende** GbR wird ausgeblendet, ihre Anteile werden
  nach der Bruchteilsbetrachtung des § 39 Abs. 2 Nr. 2 AO unmittelbar den Gesellschaftern zugerechnet,
  und erst deren Zusammenfassung ergibt die schädliche Quote. Die **gewerblich geprägte** GmbH & Co.
  KG dagegen ist für § 8c KStG **selbst** der Erwerber und gerade **nicht** transparent – auf ihre
  Gesellschafter kommt es nicht an, und auch die Konzernklausel des § 8c Abs. 1 Satz 4 KStG hilft
  nicht, obwohl an Erwerberin und Verlustgesellschaft dieselben Personen in denselben Quoten beteiligt
  sind. Die Nichttransparenz hat dabei eine unangenehme Kehrseite: Der Vorgang ist in **beide**
  Richtungen schädlich – die Veräußerung an die eigene Personengesellschaft ebenso wie die
  Rückveräußerung an die Gesellschafter und sogar die unentgeltliche Übertragung ins
  Sonderbetriebsvermögen nach § 6 Abs. 5 Satz 3 EStG, also ein Vorgang, der ertragsteuerlich keine
  Veräußerung ist. Bei den **gleichgerichteten Interessen** hat sich die Lage in zwei Schritten
  zugunsten des Steuerpflichtigen bewegt: Der BFH verlangt seit 2016, dass die Indizien spätestens im
  Erwerbszeitpunkt konkretisiert und durch Abreden dokumentiert sind, und verwirft die bloße abstrakte
  Möglichkeit späterer Beherrschung; die Verwaltung hat daraufhin ihre Tz. 28 ergänzt und nimmt
  gleichgerichtete Interessen nicht mehr an, wenn sich die Absprachen **nur auf den Anteilserwerb**
  beschränken. Die gemeinsame Verlustnutzung ist dabei der **Anlass** der Regelung, aber kein
  Tatbestandsmerkmal.
  Der **Erwerbsbegriff** des Grundfalls ist deutlich weiter als der Normzweck des Mantelkaufs: Weder
  muss ein **neuer** Gesellschafter hinzutreten – auch die Verschiebung zwischen den bisherigen
  genügt –, noch muss der Anteil **stimmberechtigt** sein. Maßgeblich ist der Übergang des
  **wirtschaftlichen Eigentums**; der rückwirkende Übertragungsstichtag des § 2 UmwStG gilt hier
  ausdrücklich **nicht**, so dass beide Zeitpunkte in verschiedene Wirtschaftsjahre fallen können –
  und weil der Tag des Erwerbs über die Zusammensetzung des untergehenden Verlustes entscheidet, wirkt
  sich das unmittelbar auf die Zahlen aus. Am härtesten ist der Ausschluss der **Trennungstheorie**:
  Der unentgeltliche Erwerb ist nur unter Angehörigen i. S. des § 15 AO und nur bei **vollständiger**
  Unentgeltlichkeit unschädlich – ein symbolisches Gleichstellungsgeld macht die gesamte Übertragung
  schädlich, „unabhängig von dessen Höhe“. Und weil die Prüfung **erwerberbezogen** erfolgt, ist auch
  die Weiterübertragung eines bereits einmal schädlich erworbenen Anteils erneut schädlich.
  Die Folge dieser erwerberbezogenen Prüfung führt das Beispiel der Quelle drastisch vor:
  **Derselbe** 60%ige Anteil löst 2024 und 2025 jeweils einen vollständigen Verlustuntergang aus,
  einmal beim Erwerb durch C und einmal bei der Weiterveräußerung an D. Noch schärfer ist die
  Rückübertragungsvariante – gibt C den Anteil an den ursprünglichen Veräußerer **A** zurück, gilt
  auch A wieder als Erwerber und bildet einen eigenen Erwerberkreis: Eine Rückabwicklung ist
  steuerlich keine Rückabwicklung, sondern ein weiterer schädlicher Erwerb. Die **gleichgestellten
  Sachverhalte** zeigen, dass die Norm nicht nur an die Übertragung von Anteilen anknüpft, sondern an
  jede Verschiebung der wirtschaftlichen Position: Auch der **Erwerb eigener Anteile** durch die
  Verlustgesellschaft selbst, die **Kapitalherabsetzung** und sogar bloße **Stimmrechtsbindungen** –
  also schuldrechtliche Abreden ohne dingliche Wirkung – können schädlich sein. Bei **Vorzugsaktien**
  gilt in jedem der drei Fälle eine andere Bezugsgröße, was leicht zu verwechseln ist: Werden nur
  Stammaktien übertragen, zählt allein das **stimmberechtigte** Kapital (20 Prozentpunkte werden so zu
  33 % und nicht zu 20 %); werden nur Vorzugsaktien übertragen, zählt das **gesamte Nennkapital**;
  werden beide übertragen, sind zwei Quoten zu bilden und die **höhere** ist maßgebend – nicht die
  Summe.
  Bei **Umwandlungen** gilt nach Tz. 00.02 des UmwSt-Erlasses jeder Vorgang zugleich als Veräußerungs-
  und Anschaffungsvorgang, so dass § 8c KStG greift, sobald die Kapitalerhöhung die
  Beteiligungsverhältnisse über 50 % verschiebt. Die praktisch wichtigste Erkenntnis lautet:
  **Verwässerung wirkt wie Veräußerung.** Im Beispiel behält B seine 50.000 € Stammkapital
  unverändert und verliert allein dadurch die Mehrheit, dass neues Kapital hinzutritt – 150.000 € ÷
  200.000 € = 75 % für den Einbringenden, 25 % für ihn selbst. Wer eine Verlustgesellschaft durch eine
  Sacheinlage stärken will, vernichtet dabei ihre Verluste. Entscheidend ist ferner der **Zeitpunkt**:
  Die Umwandlung wirkt steuerlich auf den 31.12.2024 zurück, der schädliche Erwerb tritt aber erst
  2025 mit der **Handelsregistereintragung** beziehungsweise dem Übergang des wirtschaftlichen
  Eigentums ein – der Verlust des Jahres 2024 bleibt also zunächst bestehen. Auch die Umwandlung der
  **Anteilseigner-Gesellschaft** ist schädlich, weil aus Sicht der Verlustgesellschaft ein
  unmittelbarer Anteilseignerwechsel eintritt, und zwar trotz des Rechtsnachfolgeprinzips des § 12
  Abs. 3 UmwStG. Einzige folgenlose Umwandlungsart ist der **Formwechsel** nach § 190 UmwG, weil
  zivilrechtlich kein Vermögen übergeht. Die vorrangigen §§ 4 Abs. 2 Satz 2 und 15 Abs. 3 UmwStG
  stehen dabei nur scheinbar in Konkurrenz: Sie betreffen den Verlust der **übertragenden**
  Gesellschaft, § 8c KStG den der **übernehmenden** – im Verschmelzungsbeispiel geht der Verlust der
  B-GmbH nach § 8c KStG unter, während der Verlust der A-GmbH schon gar nicht erst übergeht.
  Bei der **Kapitalerhöhung** liefert der Vergleich mit dem Umwandlungsfall den lehrreichsten Kontrast
  des ganzen Kapitels: Beide Beispiele enden bei **derselben** Quote von 75 % und doch mit
  entgegengesetztem Ergebnis. Im Umwandlungsfall hielt der Einbringende vorher **nichts** und erwirbt
  deshalb 75 % – schädlich. Im Kapitalerhöhungsfall hielt B bereits 50 % und wächst auf 75 %, erwirbt
  also nur **25 Prozentpunkte** – unschädlich, wenn auch als Zählerwerb zu merken. Gemessen wird also
  nicht die **neue Quote**, sondern ihr **Zuwachs**; wer beides verwechselt, kommt genau hier zum
  falschen Ergebnis. Erfasst ist dabei auch die **interne** Kapitalerhöhung durch Rücklagenumwandlung,
  obwohl dort kein Cent von außen zufließt – allerdings nur, soweit sie **disquotal** erfolgt und die
  Beteiligungsquoten verschiebt.
  Beim **mittelbaren Erwerb** gilt der Grundsatz, dass **jedwede** Veränderung oberhalb der
  Verlustgesellschaft zu prüfen ist, und die Quelle hebt eigens hervor: Das gilt auch dann, wenn sich
  bei der Verlustgesellschaft selbst **gar nichts** ändert – deren Gesellschafterliste bleibt
  unverändert, der Verlust geht trotzdem unter. Weder Rechtsform noch **Ansässigkeit** der
  Zwischengesellschaft spielen eine Rolle, so dass auch rein ausländische Vorgänge erfasst werden; für
  die Praxis bedeutet das eine erhebliche Überwachungslast, denn von Transaktionen auf höheren
  Konzernstufen erfährt die Verlustgesellschaft unter Umständen nichts. Maßgeblich ist die
  **durchgerechnete** Quote, und das wirkt in beide Richtungen: Aus einem unmittelbaren Erwerb von
  80 % werden über zwei Stufen 80 % × 80 % × 90 % = 57,6 %. Je länger die Kette und je niedriger die
  Zwischenquoten, desto eher bleibt eine tiefer liegende Verlustgesellschaft verschont – im Beispiel
  der Abwärtsverschmelzung genügen zwei Stufen allerdings noch für 72 %. Ob die bloße **Verkürzung
  der Beteiligungskette** schädlich sein kann, ist umstritten und beim BFH anhängig.
  Die **Konzernklausel** ist keine Billigkeitsregel, sondern die **teleologische Korrektur** einer zu
  weit geratenen Typisierung: Unschädlich ist der Erwerb, weil ausgeschlossen ist, dass an den
  Verlusten eine **fremde Person** partizipiert – genau das ist ja der Grund, weshalb § 8c KStG
  überhaupt eingreift. Sie gilt für alle Erwerbe nach dem 31.12.2009 und erfasst auch **unentgeltliche**
  Übertragungen, etwa verdeckte Einlagen. Ihre erste Fallgruppe betrifft die Übertragung
  konzernintern **aufwärts**, bei der sich die Beteiligungskette verkürzt, und arbeitet mit **zwei**
  leicht zu verwechselnden Quoten: Die 100 % betreffen das Verhältnis des Erwerbers zur
  **Veräußerin** – dort darf keine fremde Person beteiligt sein –, während die Beteiligung an der
  **Verlustgesellschaft** selbst darunter liegen darf; im Beispiel sind es nur 90 %, und der
  10-Prozent-Gesellschafter gewinnt durch den Vorgang nichts hinzu. Erwerber kann auch eine
  **Personenhandelsgesellschaft** sein – womit bestätigt ist, dass sie für § 8c KStG nicht als
  transparent gilt –, allerdings nur KG, OHG oder vergleichbare ausländische Gesellschaften, nicht
  die GbR und erst recht keine bloße **Personengruppe**; zudem müssen beide Beteiligungen dem
  **Gesamthandsvermögen** zugerechnet werden. Erfasst wird schließlich auch die **Abwärtsverschmelzung**
  einer Tochtergesellschaft: Der von ihr gehaltene Anteil an der Verlustgesellschaft geht im Wege
  eines **Direkterwerbs** auf die Muttergesellschaft über, so dass der Vorgang trotz seines Aussehens
  als reine Verschmelzung einen Anteilserwerb enthält.
  Die drei Fallgruppen der Konzernklausel lassen sich als drei **Richtungen** im Konzernaufbau merken,
  und damit ist ihr Anwendungsbereich vollständig abgedeckt: **Nr. 1** ist die Bewegung nach **oben**,
  dort muss der **Erwerber** zu 100 % an der Veräußerin beteiligt sein; **Nr. 2** die Bewegung nach
  **unten**, dort spiegelbildlich der **Veräußerer** am Erwerber; **Nr. 3** die Bewegung zur
  **Seite**, wo weder das eine noch das andere zutrifft und es deshalb einer dritten Ebene oberhalb
  beider bedarf – der **Zurechnungsebene**, die als Klammer über den beiden handelnden Rechtsträgern
  liegt. Wer sich die Richtung merkt, findet die zugehörige Beteiligungsvoraussetzung von selbst. In
  allen drei Fällen gilt dieselbe Asymmetrie, die die Quelle bei Nr. 3 ausdrücklich für alle Nummern
  bestätigt: **100 % innerhalb** der Konzernbeziehung, **beliebig wenig** an der Verlustgesellschaft –
  im Beispiel 70 % bzw. 80 %, und die fremden Restgesellschafter schaden nicht, weil sie durch die
  konzerninterne Verschiebung nichts hinzugewinnen. Dass sogar eine **börsennotierte** AG Erwerberin
  sein kann, wirkt zunächst wie ein Widerspruch zum Gedanken der fehlenden Fremdpartizipation, löst
  sich aber auf: Ihre Aktionäre waren schon vorher mittelbar beteiligt, die Übertragung verkürzt nur
  die Kette – geprüft wird allein das Verhältnis zwischen Erwerber und Veräußerin, nicht die Struktur
  **oberhalb** des Erwerbers. Aufschlussreich ist schließlich die Gegenprobe zum gescheiterten Fall
  aus Abschnitt 1.4.4: Dort hielten A und B die Anteile **unmittelbar** und konnten nicht als Einheit
  gelten; halten dieselben Personen ihre Beteiligung dagegen **über eine KG**, gilt diese als
  „dieselbe Person“ und die Mitunternehmerebene wird ausgeblendet. Eine **Holding-Personengesellschaft**
  kann die Konzernklausel also überhaupt erst eröffnen.
  Die **Rechtsfolge** ist weitreichender, als das Wort „Ausnahme“ vermuten lässt, und wirkt in drei
  Richtungen: Der begünstigte Erwerb ist selbst unschädlich, zählt nicht als **Zählerwerb** für
  spätere Erwerbe und beeinflusst – wie die Quelle ausdrücklich sagt – auch **vorangegangene** Erwerbe
  nicht; hinzu kommt, dass er den Fünfjahreszeitraum gar nicht erst **auslöst**. Er ist damit kein
  neutraler Posten in der Rechnung, sondern kommt in ihr überhaupt nicht vor – dieselbe Technik wie
  bei der Sanierungsklausel und der Gegensatz zur aufgehobenen Quotenstufe, deren Erwerbe als
  Zählerwerbe bestehen bleiben. Im Beispiel hält die C-GmbH nach allen drei Vorgängen zivilrechtlich
  **87 %** an der Verlustgesellschaft (60 % + 20 % + 7 %), für § 8c KStG zählen davon aber nur
  **27 %**. Weil § 8c Abs. 1 Satz 4 KStG bei **jedem** Erwerb getrennt zu prüfen ist und jeder
  Zählerwerb seine **eigene** Fünfjahresfrist hat – die aus 2019 läuft 2024 aus, die aus 2023 erst
  2028 –, empfiehlt sich in der Klausur eine Tabelle mit einer Zeile je Erwerb samt Ablaufdatum statt
  einer Gesamtbetrachtung.
  Beim **fünfjährigen Betrachtungszeitraum** ist der Schlüssel, dass jeder Zählerwerb begrifflich
  einen **eigenen** Zeitraum auslöst und sich mehrere deshalb **überlappen**. Im zweiten Beispiel
  laufen zwei Zeiträume gleichzeitig: der erste ab 02.01.2017 mit 35 %, der zweite ab 05.03.2018 mit
  25 %. Die Abwandlung zeigt die Tragweite – ein und derselbe Erwerb von 30 % ist am 04.03.2023
  schädlich (25 % + 30 % = 55 %) und am 31.12.2023 folgenlos; neun Monate entscheiden. Wer nur mit
  einem einzigen Zeitfenster rechnet, kommt hier zwangsläufig falsch heraus. Das dritte Beispiel liegt
  exakt auf der Grenze: Nach Wegfall des Erwerbs von 2016 summieren sich die Zählerwerbe auf genau
  **50 %** – und weil § 8c Abs. 1 Satz 1 KStG **mehr als** 50 % verlangt, bleibt der Verlust
  erhalten; die Quelle nennt die Zahl, zieht diese Folgerung aber nicht ausdrücklich. Auch die
  Fristberechnung nach § 108 Abs. 1 AO wirkt sich aus: Weil der Zeitraum erst am **Folgetag** beginnt,
  endet er einen Tag später als intuitiv gerechnet. Nach einem schädlichen Erwerb tritt
  **Sanktionsverbrauch** ein – die Vorerwerbe haben ihre Wirkung verbraucht, und neue Verluste sind
  erst wieder gefährdet, wenn die neue Zählung die Schwelle überschreitet. Praktisch am unangenehmsten
  ist, dass ein Verlustvortrag im Erwerbszeitpunkt **nicht vorhanden** sein muss: Wer einen Anteil an
  einer gesunden Gesellschaft erwirbt, sammelt einen Zählerwerb an, der Jahre später – wenn sie in die
  Verlustzone gerät – den Untergang mit auslöst; im Beispiel kostet das 10 Millionen Euro.
  Die **Verschonungsgrenze** des § 8c Abs. 1 Satz 5 bis 8 KStG ist wie die Konzernklausel eine
  **teleologische Korrektur** der Typisierung, und die Quelle liefert die Rechtfertigung in einem
  Satz: Von einem Mantelkauf kann nur ausgegangen werden, wenn dem Anteil ein Verlustpotential
  anhaftet, er **darüber hinaus aber wertlos** ist – wer viel Geld zahlt, kauft offensichtlich keinen
  Mantel. Die typisierende Formel „gemeiner Wert abzüglich steuerliches Eigenkapital“ kommt ohne jede
  Einzelbewertung aus und unterstellt, dass die gesamte Differenz zwischen Marktwert und Buchwert aus
  stillen Reserven besteht – also auch ein selbst geschaffener **Firmenwert**, der bilanziell gar
  nicht ansetzbar wäre. Zu beachten ist die **Hochrechnung**: Im Beispiel werden die 6.000.000 € für
  60 % auf einen gemeinen Wert von 10.000.000 € hochgerechnet, weil der Verlust dem Grunde nach
  vollständig untergeht und ihm deshalb die stillen Reserven der **gesamten** Gesellschaft
  gegenüberstehen – 10.000.000 € ./. 2.000.000 € = 8.000.000 € verschont, 12.000.000 € gehen unter.
  Die **Verrechnungsreihenfolge** ist dabei für den Steuerpflichtigen tendenziell ungünstig: Die
  stillen Reserven verschonen **vorrangig den laufenden Verlust**, der ohnehin verrechenbar gewesen
  wäre, und erst ein Überhang rettet den Verlustvortrag, der sonst ersatzlos verfällt. Im Organkreis
  wird schließlich deutlich weniger verschont als sonst: Beim **Organträger** zählen die stillen
  Reserven der Beteiligung an der Organgesellschaft nicht mit, bei der **Organgesellschaft** stehen
  ihre eigenen nur für den laufenden Verlust und einen vororganschaftlichen Verlustvortrag zur
  Verfügung.
  Bei einem Erwerb unter 100 % ist der gemeine Wert auf **100 %** **hochzurechnen**, weil der Verlust
  ohnehin vollständig untergeht. Ist das steuerliche Eigenkapital **negativ**, versagt die
  Vereinfachung des § 8c Abs. 1 Satz 6 KStG vollständig, weil sie allein aus dem Minus rechnerische
  stille Reserven erzeugt: Bei einem Eigenkapital von ./. 5.000.000 € und einem symbolischen
  Kaufpreis von 1 € wären das rund 5.000.000 €, ohne dass auch nur ein Euro davon tatsächlich
  vorhanden sein müsste – dass der Kaufpreis bei 1 € liegt, spricht sogar dagegen (die Bezifferung
  ist eine eigene Ergänzung, die Quelle beschreibt den Effekt nur verbal). § 8c Abs. 1 Satz 7 KStG
  tauscht deshalb die **Ausgangsgröße** aus: nicht mehr der gemeine Wert des **Anteils**, sondern der
  des **Betriebsvermögens**, zu ermitteln im Wege einer **Unternehmensbewertung** – das gezahlte
  Entgelt ist dafür unmaßgeblich. Der Preis dieser Genauigkeit ist erheblicher Aufwand, den der
  Steuerpflichtige tragen muss, wenn er die Verschonung beanspruchen will. Häufigster
  Anwendungsfall ist die Sanierungskonstellation, in der das Negativkapital auf
  **Gesellschafterdarlehen** beruht und der Altgesellschafter im Zuge der Anteilsübertragung darauf
  verzichtet.
  Berücksichtigt werden ferner nur die **im Inland steuerpflichtigen** stillen Reserven – die
  konsequente Fortsetzung des Verschonungsgedankens, denn was im Inland nicht besteuert werden kann,
  braucht dort auch keinen Verlust. Auszuscheiden sind stille Reserven des ausländischen
  Betriebsvermögens in einem DBA-Staat, solche von **Beteiligungen i. S. des § 8b Abs. 2 KStG** und
  – allein für die Gewerbesteuer über § 10a Satz 10 GewStG – die stillen Reserven eines
  **Mitunternehmeranteils**, weil die Personengesellschaft selbst gewerbesteuerpflichtig ist und ihre
  Reserven nur ihren eigenen Gewerbeverlust verschonen können. Daraus folgt, dass die
  Verschonungsrechnungen für Körperschaft- und Gewerbesteuer **auseinanderfallen** können. Im
  Beispiel kostet eine einzige Beteiligung 400.000 € Verschonungsvolumen: Aus 10.000.000 € ./.
  4.000.000 € = 6.000.000 € werden nach Abzug der stillen Reserven der Z-Beteiligung
  (500.000 € ./. 100.000 €) noch **5.600.000 €**.
  Eine naheliegende Gestaltung sperrt § 8c Abs. 1 Satz 8 KStG: Wer nach dem schädlichen Erwerb eine
  werthaltige Gesellschaft **rückwirkend** auf die Verlustgesellschaft verschmilzt, erzeugt damit
  keine stillen Reserven zum maßgeblichen Stichtag. Maßgebend sind die Verhältnisse, die sich **ohne**
  die Umwandlung ergeben hätten – die Rückwirkung des § 2 Abs. 1 UmwStG gilt für § 8c KStG also auch
  hier **nicht**, ebenso wenig wie für den Zeitpunkt des Erwerbs. Im Beispiel liegen der Erwerb am
  10.04.2025, der Vollzug der Verschmelzung am 04.05.2025 und der steuerliche Übertragungsstichtag am
  31.12.2024, also **vor** dem Erwerb; ohne die Sperre entstünden genau die 10.000.000 € stiller
  Reserven, die der gefährdete Verlust benötigte.
  Beim **Zinsvortrag** entscheidet wiederum die Reihenfolge. § 8a Abs. 1 Satz 3 KStG erstreckt § 8c
  KStG auf ihn, doch die stillen Reserven verschonen **zuerst** den Verlust; nur ein Überhang rettet
  den Zinsvortrag. Die Quelle nennt diese Verschonung deshalb selbst „eher theoretisch“ – sie greift
  praktisch nur bei hohen stillen Reserven und vergleichsweise geringem Verlust, und gerade dort ist
  der Verlustuntergang das kleinere Problem. Im Beispiel verschonen 12.000.000 € stille Reserven
  zunächst den Verlust von 10.000.000 € vollständig; der Überhang von 2.000.000 € rettet einen Teil
  des Zinsvortrags von 5.000.000 €, die übrigen 3.000.000 € gehen unter. Der **EBITDA-Vortrag** wird
  nach dem eindeutigen Wortlaut des § 8a Abs. 1 Satz 3 KStG dagegen gar nicht erfasst und bleibt
  unberührt – für die Klausur eine reine Merkfrage: Zinsvortrag ja, EBITDA-Vortrag nein.
  Bei der **Verlustkürzung** ist zunächst die maßgebliche Größe zu klären: Verlust im Sinne der Norm
  ist der negative **Gesamtbetrag der Einkünfte** (R 7.1 Zeile 31), ausdrücklich **nicht** der
  bilanzielle Verlust – zwischen beiden liegen sämtliche außerbilanziellen Korrekturen von der
  verdeckten Gewinnausschüttung bis zu § 8b KStG, so dass ein bilanzieller Verlust durchaus zu einem
  positiven Gesamtbetrag der Einkünfte führen kann. Die Kürzung ist **verbindlich** in der
  Verlustfeststellung des Wirtschaftsjahres zu entscheiden, in dem der schädliche Erwerb liegt, und
  kann später **nicht nachgeholt** werden; das wirkt in beide Richtungen, denn eine übersehene
  Kürzung bleibt ebenso endgültig wie eine zu hohe. Erfasst werden dabei zwei Größen an zwei
  verschiedenen Stellen: der **Verlustvortrag** durch Kürzung in der Feststellung, der **laufende
  Verlust** durch Hinzurechnung im Einkommen (R 7.1 Zeile 34). Wer nur die Feststellung betrachtet,
  findet den zweiten Betrag nicht wieder und hält die Rechnung für falsch – in der Abwandlung des
  unterjährigen Beispiels stehen 10.000.000 € in der Feststellung und 300.000 € im Einkommen, zusammen
  die genannten 10.300.000 €.
  Erfolgt der Erwerb **mit Ablauf** des Wirtschaftsjahres, verschonen die stillen Reserven zuerst den
  laufenden Verlust und erst der Überhang den Vortrag: Aus 5.000.000 € Reserven decken 3.000.000 € den
  laufenden Verlust, die verbleibenden 2.000.000 € retten einen Teil des Vortrags, 8.000.000 € gehen
  unter. Erzielt die Gesellschaft dagegen einen **Gewinn**, gilt eine für den Steuerpflichtigen
  günstige Reihenfolge, die leicht übersehen wird: Der Vortrag wird zunächst nach § 10d Abs. 2 EStG
  verrechnet (1.000.000 € Grundabzug + 70 % des Überhangs = 2.400.000 €) und **erst danach** gekürzt.
  Beide Beispiele enden bei einem Bestand von 5.000.000 € – gerettet wird jeweils genau in Höhe der
  stillen Reserven, nur mit unterschiedlichem Ansatzpunkt.
  Beim **unterjährigen** Erwerb tritt zum Verlustvortrag der bis zum Stichtag aufgelaufene Verlust
  hinzu. Er ist punktgenau zu bestimmen, und zwar nicht nur durch einen **Zwischenabschluss**, sondern
  zusätzlich durch eine **Zwischeneinkommensermittlung**, weil die Norm auf den Gesamtbetrag der
  Einkünfte abstellt; eine Schätzung über betriebswirtschaftliche Auswertung oder zeitanteilige
  Aufteilung bleibt dem **Ausnahmefall** vorbehalten und ist bei saisonalem Geschäft untauglich – im
  Beispiel entfallen auf das erste Quartal nur 300.000 € von 3.000.000 €, also ein Zehntel statt eines
  Viertels. Die schnellste Kontrolle solcher Aufgaben ist der Vergleich der Endbestände:
  4.700.000 € ./. 2.700.000 € = 2.000.000 €, genau der Betrag der stillen Reserven. Der Ausschluss des
  **Verlustrücktrags** beruht allein auf dem BMF-Schreiben und nicht auf dem Gesetzeswortlaut; er
  liegt dem BFH unter **I R 1/23** zur Entscheidung vor.
  Ein unterjähriger **Gewinn** wirkt genau umgekehrt: Er wird mit dem Verlustvortrag des Vorjahres
  verrechnet, und zwar **ohne** die Schranken der Mindestbesteuerung – nur der danach verbleibende
  Überhang unterliegt der Kürzung. Das ist die für den Steuerpflichtigen günstigste Aussage des
  Abschnitts und folgt nicht aus dem Gesetz, sondern aus Tz. 34 des BMF-Schreibens; der Grund liegt
  darin, dass § 10d Abs. 2 EStG den Verlustabzug **strecken** und nicht vernichten soll – wendete man
  ihn hier an, ginge der gestreckte Teil nach § 8c KStG endgültig unter. Unerheblich ist dabei
  ausdrücklich das **Jahresergebnis**: In der bewusst paradox gebauten Variante b) werden bis zum
  01.03.2025 6.000.000 € verdient, im gesamten Jahr aber nur 4.000.000 € – zwischen März und Dezember
  entsteht also ein Verlust, und verschont werden gleichwohl die vollen 6.000.000 €. Darin liegt eine
  erhebliche Gestaltungschance: Wer den Erwerb auf einen Zeitpunkt nach einem gewinnstarken
  Zwischenabschluss legt, rettet Verlustvolumen, das bei einer Jahresbetrachtung verloren wäre. Die
  beiden Fallgruppen des unterjährigen Erwerbs bilden damit ein Gegensatzpaar, das sich in einem Satz
  merken lässt: Ein unterjähriger **Verlust** wird vom Untergang **mit erfasst**, ein unterjähriger
  **Gewinn** wird **verrechnet** – derselbe Zwischenabschluss dient also einmal dem Ziel eines
  möglichst kleinen, einmal dem eines möglichst großen Zwischenbetrags.
  Treffen unterjähriger Gewinn und stille Reserven zusammen, gilt eine zwingende Reihenfolge: erst
  die unterjährige Verrechnung, dann die Verschonung des Überhangs nach § 8c Abs. 1 Satz 5 KStG,
  zuletzt die Nutzung des verschonten Betrags im Veranlagungszeitraum nach § 10d Abs. 2 EStG, jetzt
  wieder **mit** Mindestbesteuerung. In der Abwandlung der Variante a) geht die Rechnung der Quelle
  allerdings nicht auf: Sie übernimmt die Begrenzung des Grundfalls („max. 2.000.000 €") unverändert,
  obwohl nach der auf 5.800.000 € verringerten Kürzung 4.200.000 € Verlustvortrag zur Verfügung
  stehen. Die eigene Nachrechnung führt zu 1.000.000 € + 70 % × 3.000.000 € = 3.100.000 € Abzug,
  900.000 € zvE und einem Endbestand von 1.100.000 € statt 1.200.000 €. Der Text und die Tabellen der
  Quelle sind gleichwohl wortlautgetreu wiedergegeben; die abweichende Rechnung steht als eigene
  Ergänzung daneben. Variante b) der Abwandlung geht dagegen auf, und die Gegenprobe über die
  Endbestände bestätigt sie: 4.100.000 € ./. 2.900.000 € = 1.200.000 €, genau die stillen Reserven.
  Beim **abweichenden Wirtschaftsjahr** entsteht ein **Zeitversatz** zwischen zwei Größen: Der Verlust
  wird zum Ende des **Veranlagungszeitraums** festgestellt, der schädliche Erwerb wirkt aber auf einen
  Zeitpunkt im **Wirtschaftsjahr**. Liegt er nach Ablauf des Verlustentstehungsjahres, aber noch
  innerhalb desselben Veranlagungszeitraums – im Beispiel am 01.07.2025 bei einem Wirtschaftsjahr vom
  01.06. bis 31.05. –, kennt die Feststellung zum 31.12.2025 nur das Wj. 2024/2025 und wiese den
  ungekürzten Verlust aus. Tz. 36 des BMF-Schreibens zieht die Kürzung deshalb in diese Feststellung
  **vor**; stehen die Ergebnisse des nachfolgenden Wirtschaftsjahres noch nicht fest – der Regelfall,
  weil es erst am 31.05.2026 endet –, ist sie insoweit **vorläufig** nach § 165 Abs. 1 Nr. 1 AO
  durchzuführen. Die beiden Beispiele der Quelle unterscheiden sich nur im **Vorzeichen** des
  Folgejahres und laufen genau entgegengesetzt: Der unterjährige **Gewinn** von 3.000.000 € rettet
  einen Teil des Vortrags, so dass nur 7.000.000 € gekürzt werden und 3.000.000 € festgestellt
  bleiben; der unterjährige **Verlust** von 3.000.000 € vergrößert dagegen den Schaden – der Vortrag
  geht vollständig unter und der laufende Verlust wird zusätzlich erfasst. Ein einziger
  Erwerbsvorgang wirkt dann in **zwei** Veranlagungszeiträumen: 10.000.000 € als Kürzung in der
  Feststellung zum 31.12.2025, 3.000.000 € als Hinzurechnung im Einkommen 2026. Wer nur einen der
  beiden Zeiträume prüft, übersieht die Hälfte der Rechtsfolge. Das Einkommen 2025 bleibt dabei
  unberührt, weil es allein vom Wj. 2024/2025 abhängt – der Unterschied zum unterjährigen Erwerb bei
  deckungsgleichem Wirtschaftsjahr, wo beide Größen betroffen sind. Die Zwischenangabe von
  12.000.000 € im zweiten Beispiel geht allerdings nicht auf: Betroffen sind 10.000.000 € Vortrag und
  3.000.000 € unterjähriger Verlust, zusammen 13.000.000 €; beide Beträge finden sich in den Tabellen
  der Quelle wieder, die im Übrigen aufgehen. Die **Organschaftsfälle** verweist die Quelle mit einem
  Satz auf das Skript Teil VI.
  Das zweite Kapitel des Skripts behandelt den **fortführungsgebundenen Verlustvortrag** nach
  § 8d KStG, zu dem die Finanzverwaltung mit BMF-Schreiben vom 18.03.2021 (BStBl. I 2021, 363)
  Stellung genommen hat. Die Norm gilt für schädliche Erwerbe **nach dem 31.12.2015**, wobei frühere
  **Zählerwerbe** mitzählen und erst die späteren Erwerbe die Quote überschreiten lassen können.
  § 34 Abs. 6a Satz 1 KStG sperrt sie zusätzlich, wenn der Geschäftsbetrieb **vor** dem 01.01.2016
  eingestellt oder ruhend gestellt war – die Vorschrift schaut damit **weiter zurück** als § 8d KStG
  selbst und verhindert, dass alte Mäntel wiederbelebt werden, um ihre Verluste unter den Schutz der
  Norm zu stellen. Ihre Rechtsfolge ist dabei **teilbar**: Betroffen sind nicht die Gesellschaft,
  sondern nur die vor 2016 entstandenen **Altverluste**, so dass ein und derselbe Erwerb den Verlust
  in zwei Teile zerlegt – einen nach § 8c KStG untergehenden und einen fortführungsgebundenen. Im
  Beispiel bleiben von 16.000.000 € nach Abzug der Altverluste 12.000.000 € gerettet.
  Entscheidend ist der unterschiedliche **Bemessungszeitpunkt**, den die Quelle nur in einer Klammer
  erwähnt: § 8c KStG erfasst den Verlust **im Zeitpunkt des Erwerbs** (im Beispiel 13.000.000 €),
  § 8d KStG dagegen den Verlust zum **Ende des Wirtschaftsjahres** (16.000.000 €). Der nach dem Erwerb
  entstandene Verlust wird also mit erfasst, obwohl ihn § 8c KStG gar nicht bedroht hätte – kein
  Nachteil, sondern die Kehrseite der Bindung, denn auch er unterliegt künftig den schädlichen
  Ereignissen des § 8d Abs. 2 KStG.
  Der **Antrag** setzt einen dem Grunde nach schädlichen Erwerb voraus. **Konzernklausel**,
  unentgeltlicher Erwerb zwischen Angehörigen i.S. des § 15 AO und **Sanierungsklausel** schließen
  § 8d KStG deshalb aus – dort liegt schon kein schädlicher Erwerb vor, und ohne drohenden Untergang
  gibt es nichts zu retten. Wer sich auf eine dieser Klauseln stützen kann, steht sogar besser, weil
  sein Verlust nicht fortführungsgebunden wird. Die **Verschonungsregelung** des § 8c Abs. 1 Satz 5
  KStG wirkt anders: Sie macht den Erwerb nicht ungeschehen, sondern mindert nur die Rechtsfolge,
  so dass § 8d KStG anwendbar bleibt – ihn zu beantragen **verdrängt** sie dann allerdings. Ein
  Nebeneinander beider Begünstigungen gibt es nicht, weshalb vor der Antragstellung zu rechnen ist:
  Reichen die stillen Reserven ohnehin weitgehend aus, ist die Verschonung vorzuziehen, weil sie den
  Verlust **unbelastet** erhält, während § 8d KStG zwar mehr rettet, den gesamten Bestand aber den
  schädlichen Ereignissen aussetzt.
  Gestellt wird der Antrag nach § 8d Abs. 1 Satz 5 KStG in der **Steuererklärung** des
  Veranlagungszeitraums des Erwerbs und in der Form des § 31 Abs. 1a KStG, praktisch aber bis zur
  **Unanfechtbarkeit** der Festsetzung oder Feststellung – ausdrücklich auch dann noch, wenn erst eine
  **Betriebsprüfung** die Auswirkungen des § 8c KStG aufdeckt; danach hilft nur eine
  AO-Korrekturvorschrift. Die Rücknahme ist unter denselben Voraussetzungen möglich, verlangt aber
  eine **berichtigte Steuererklärung** – die Kehrseite der Formbindung. Über § 10a Sätze 11 und 12
  GewStG wirkt der Antrag **einheitlich** auch für die Gewerbesteuer; nur soweit der gewerbesteuerliche
  Fehlbetrag wegen der Hinzurechnungen und Kürzungen der §§ 8, 9 GewStG abweicht, ist für diesen
  Mehrbetrag ein eigener Antrag nötig. § 36 Abs. 5a GewStG erfasst dabei auch Erhebungszeiträume vor
  2020.
  Der **Betrachtungszeitraum** besteht aus zwei Fenstern mit gleichem Beginn. **Zeitraum A** reicht vom
  Beginn des dritten dem Erwerbsjahr vorausgehenden Veranlagungszeitraums – bei einem Erwerb in 2025
  also vom 01.01.2022 – bis zum schädlichen Anteilserwerb und prüft, ob **derselbe Geschäftsbetrieb**
  bestand. **Zeitraum B** beginnt am selben Tag, endet aber erst zum Ende des Erwerbsjahres und prüft
  die **schädlichen Ereignisse** des § 8d Abs. 2 KStG; zusammen sind das die vier Veranlagungszeiträume
  2022 bis 2025. Für die Gründung zählt dabei der **Abschluss des Gesellschaftsvertrags** und damit der
  Beginn der Vorgesellschaft, nicht die Eintragung im Handelsregister – bei jungen Gesellschaften kann
  das mehrere Monate ausmachen.
  Ein **Wechsel** oder die Einstellung eines zweiten Geschäftsbetriebs **vor** dem Betrachtungszeitraum
  ist unschädlich, spaltet den Verlust aber in zwei Teile: Was der frühere Betrieb erwirtschaftet hat,
  bleibt von § 8d KStG ausgenommen und geht nach § 8c KStG unter. In der Abwandlung der Quelle sind
  das 1.000.000 € von 1.300.000 €, so dass nur die vier Jahresverluste des Autohandels von zusammen
  400.000 € fortführungsgebunden erhalten bleiben – der Wechsel fällt dort punktgenau mit dem Beginn
  des Betrachtungszeitraums am 01.01.2022 zusammen; einen Tag später wäre § 8d KStG insgesamt
  ausgeschlossen. Die **Aufteilung** des Verlustvortrags obliegt dem Steuerpflichtigen und läuft
  praktisch auf eine Schätzung hinaus; bei den **stillen Reserven** gilt umgekehrt die für ihn günstige
  widerlegbare Vermutung, dass sie dem fortgeführten Geschäftsbetrieb zuzurechnen sind. Nicht zu
  verwechseln ist all das mit § 34 Abs. 6a Satz 1 KStG: Beide Vorschriften schauen hinter den
  Betrachtungszeitraum zurück, aber auf verschiedene Betriebe – die eine auf den aufgegebenen, die
  andere auf den fortgeführten.
  Den **Geschäftsbetrieb** selbst bestimmen nach § 8d Abs. 1 Sätze 3 und 4 KStG vier **qualitative**
  Merkmale: angebotene Dienstleistungen oder Produkte, Kunden- und Lieferantenkreis, bediente Märkte
  und Qualifikation der Arbeitnehmer. Sie sind der gewerbesteuerlichen **Unternehmensidentität** und
  der Rechtsprechung zur **Segmentierung** entlehnt – wer jene beherrscht, kann dieselben Argumente
  hier verwenden. Die Aufzählung ist durch „insbesondere“ **nicht abschließend**, es besteht **keine
  Rangfolge** und keine Mindestzahl erfüllter Merkmale; verlangt ist eine **Gesamtbetrachtung**, so
  dass in der Klausur weniger das Ergebnis als die Abwägung zählt. Die in „bediente Märkte“ und
  „Kundenkreis“ mitschwingende **quantitative** Komponente darf nicht den Ausschlag geben: Bloßes
  Wachstum – dieselben Produkte statt regional nun bundesweit – ändert den Geschäftsbetrieb nicht.
  **Mehrere** Geschäftsbetriebe im Betrachtungszeitraum schließen § 8d KStG von vornherein aus, und
  jede Tätigkeit ist dafür getrennt zu betrachten. Das trifft gerade mittelständische Gesellschaften
  mit zwei historischen Standbeinen – im Beispiel Autohandel und Modeboutique – und begünstigt damit
  das schmale, unveränderte Unternehmen, obwohl beim diversifizierten die Gefahr eines Mantelkaufs
  eher geringer ist. Es helfen nur zwei eng gefasste Ausnahmen: der **einheitliche Geschäftsbetrieb**
  und die wirtschaftlich **geringfügige** Betätigung. Ersterer verlangt einen **gegenseitigen** Förder-
  und Sachzusammenhang – die Tätigkeiten bedingen einander oder stehen als Haupt- und Nebentätigkeit
  zueinander, Indizien sind gemeinsamer Außenauftritt unter einer Marke, gemeinsame Produkte und ein
  gemeinsamer Lieferanten- und Kundenkreis. Räumliche Trennung oder Andersartigkeit sprechen dagegen,
  und eine bloß gemeinsame **Buchführung oder Verwaltung** genügt ausdrücklich nicht: Sie lässt sich
  jederzeit herstellen und sagt über die wirtschaftliche Verbindung nichts aus.
  Die beiden Beispiele der Quelle zeigen, dass nicht die **Art** der Tätigkeit den Ausschlag gibt,
  sondern ihre **Verflechtung**: Die Kfz-Werkstatt im angeschlossenen Gebäude lebt von den Kunden des
  Autohauses und bildet mit ihm einen einheitlichen Geschäftsbetrieb, die Waschanlage 60 Kilometer
  entfernt in Münster dagegen nicht – obwohl beide kfz-nahe Dienstleistungen neben einem Autohandel
  sind. Im ersten Fall sagt die Quelle sogar ausdrücklich, die Unterschiede nach § 8d Abs. 1 Satz 4
  KStG seien „gegeben“, und lässt sie vom Förder- und Sachzusammenhang **überlagern**. Für die Klausur
  folgt daraus eine zweistufige Prüfung: erst die vier Merkmale, dann der Zusammenhang, der das
  Ergebnis der ersten Stufe umstoßen kann.
  Die zweite Ausnahme, die wirtschaftlich **geringfügige** Betätigung, lässt einen weiteren
  Geschäftsbetrieb unberücksichtigt, wenn seine Nettoumsätze **3 %** der Gesamtnettoerlöse und
  **24.500 €** nicht übersteigen. Beide Werte stammen nicht aus § 8d KStG, sondern aus der
  Rechtsprechung zur **Abfärbetheorie** des § 15 Abs. 3 Nr. 1 EStG und gelten nur entsprechend auf
  Grundlage von Tz. 24 des BMF-Schreibens; der absolute Betrag entspricht dem Gewerbesteuerfreibetrag.
  Die Grenzen wirken **kumulativ**: Im Beispiel sind 20.000 € von 1.000.000 € Umsatz genau 2 % und
  unschädlich, während 30.000 € an der absoluten Grenze scheiterten und dieselben 20.000 € bei einem
  Gesamtumsatz von 500.000 € mit 4 % bereits schädlich wären. Geprüft wird in **jedem**
  Veranlagungszeitraum, und ein einziges Überschreiten genügt; überschreitet der Nebenbetrieb später
  im **Nachbetrachtungszeitraum**, gilt er als weiterer Geschäftsbetrieb im Sinne des § 8d Abs. 2
  Satz 2 Nr. 3 KStG und der fortführungsgebundene Verlust fällt weg. Wer sich auf die Bagatellregelung
  stützt, erkauft sich die Begünstigung also mit der Pflicht, einen Geschäftsbereich dauerhaft klein
  zu halten.
  Die beiden **weiteren Einschränkungen** des § 8d Abs. 1 Satz 2 KStG wirken völlig verschieden und
  sind in der Klausur zuerst auseinanderzuhalten. **Nr. 1** – Einstellung oder Ruhendstellung des
  Geschäftsbetriebs – greift nur der **Höhe** nach: Die Norm bleibt anwendbar, nur die vorher
  entstandenen Verluste fallen heraus und gehen nach § 8c KStG unter; im Beispiel bleiben von
  14.000.000 € Verlustvortrag 10.000.000 € als fortführungsgebundener Verlust erhalten. Dass dabei der
  volle Jahresverlust 2025 von 4.000.000 € einbezogen wird und nicht nur der bis zum Erwerb entstandene
  Teil von 1.000.000 €, ist wieder die Folge des abweichenden Bemessungszeitpunkts. Über
  § 34 Abs. 6a Satz 2 KStG gilt diese Einschränkung erstmals bei einem schädlichen Erwerb ab dem
  Veranlagungszeitraum 2020 – die Einstellung muss nach dem 31.12.2015 und zugleich vor dem
  Betrachtungszeitraum liegen, was sich erstmals für das Jahr 2016 bei einem ab 01.01.2017 laufenden
  Zeitraum vereinbaren lässt. **Nr. 2** – Organträger nach § 14 KStG oder Mitunternehmer einer
  Personengesellschaft zu Beginn oder innerhalb des Betrachtungszeitraums – schließt § 8d KStG dagegen
  dem **Grunde** nach vollständig aus: Der Verlust enthält dann Bestandteile eines **fremden**
  Tätigkeitsbereichs, der selbst als Geschäftsbetrieb gilt, so dass die Voraussetzung eines einzigen
  Geschäftsbetriebs systematisch verfehlt ist. Bemerkenswert ist, dass die Norm nicht danach
  unterscheidet, ob überhaupt Verluste aus diesen Quellen stammen. Wird das Organschaftsverhältnis
  **rückwirkend** beseitigt – etwa durch einen **Durchführungsmangel** innerhalb der Mindestlaufzeit
  des § 14 Abs. 1 Nr. 3 KStG – oder der Mitunternehmeranteil mit steuerlicher Rückwirkung nach
  § 20 UmwStG eingebracht, ist das unschädlich, sofern es auf einen Zeitpunkt **vor Beginn** des
  Betrachtungszeitraums wirkt. Die Organträgerstellung ist damit nicht nach dem Handelsregister,
  sondern nach dem steuerlichen Bestand der Organschaft zu beurteilen.
  **Rechtsfolge** des § 8d KStG ist, dass § 8c KStG vollkommen verdrängt und stattdessen ein
  **fortführungsgebundener Verlustvortrag** nach § 10d Abs. 4 EStG festgestellt wird. Die Quelle setzt
  hinter das Wort „Ende“ ein Ausrufezeichen, und das zu Recht: Maßgebend ist der Verlust zum **Ende**
  des Veranlagungszeitraums, während § 8c KStG **taggenau** auf den Erwerb rechnet. Wer beide Normen
  prüft, muss deshalb **zwei verschiedene Verlustbeträge** ermitteln – im ersten Beispiel unterscheiden
  sie sich um 2.700.000 €, den nach dem 31.03.2025 entstandenen Teil des Jahresverlustes.
  Drei Erweiterungen werden dabei leicht übersehen. Erstens bleibt die **Verlustverrechnung** mit dem
  laufenden positiven Gesamtbetrag der Einkünfte des ganzen Veranlagungszeitraums erhalten;
  fortführungsgebunden wird nur, was danach übrig ist. Zweitens lebt der **Verlustrücktrag** wieder
  auf, den § 8c KStG gerade ausschließt – weil § 8d KStG ihn vollständig verdrängt, entfällt auch
  diese Sperre. Drittens erfasst die Norm **sämtliche** ungenutzten Verluste: auch solche nach § 2a,
  § 15a und § 15b EStG, die Verlustvorträge nach § 10a GewStG und den **Zinsvortrag**, der unter
  § 8c KStG nur über den engen Umweg des § 8a Abs. 1 Satz 3 KStG zu retten war.
  Der Preis des Antrags lässt sich am zweiten Beispiel beziffern, das beide Wege nebeneinander stellt.
  Ohne Antrag beträgt das zvE 1.000.000 € und der Verlust ist vollständig verbraucht oder untergegangen;
  mit Antrag beträgt das zvE 900.000 € – weil die günstige Begrenzung „max. 2.000.000 €“ entfällt,
  sobald genug Verlust vorhanden ist – und es bleiben **6.900.000 €** fortführungsgebundener Verlust.
  Der Antrag kostet also 100.000 € mehr Verlustverbrauch im laufenden Jahr und bringt dafür ein
  Vielfaches an gerettetem Volumen; die Gegenleistung ist die dauerhafte Bindung nach § 8d Abs. 2 KStG.
  Der gebundene Verlust ist der Höhe nach **festgeschrieben**: Er kann sich nur noch verringern, nie
  erhöhen. Künftige Verluste desselben Geschäftsbetriebs werden deshalb nicht ebenfalls gebunden,
  sondern laufen als gewöhnlicher **Neuverlust** in einer getrennten Feststellung nach § 10d Abs. 4
  EStG daneben – woraus eine günstige Entwicklung folgt: Der gebundene Anteil am Gesamtverlust wird von
  Jahr zu Jahr kleiner, so dass ein schädliches Ereignis mit der Zeit immer weniger trifft. Verbraucht
  wird er nach § 8d Abs. 1 Satz 8 KStG **vorrangig** vor dem Neuverlust. Das ist zweischneidig:
  **günstig**, weil gerade dieser Verlust dauerhaft gefährdet ist und dem Zugriff des § 8d Abs. 2 KStG
  durch den Verbrauch entzogen wird; **ungünstig**, weil der Steuerpflichtige keine Wahl hat und den
  sicheren Neuverlust nicht vorziehen kann. Entscheidend ist dabei, dass insgesamt nur **ein**
  Verlustverrechnungskreis besteht: Grundabzug und 70-%-Grenze des § 10d Abs. 2 EStG gelten für beide
  Töpfe **zusammen** und nicht je Topf – andernfalls wären in Variante 1 bis zu 3.400.000 € statt
  1.700.000 € abziehbar gewesen. Die getrennte Feststellung dient allein der Zuordnung, nicht der
  Vervielfachung des Abzugsvolumens. In Variante 2 geht die Zwischenzahl der Quelle allerdings nicht
  auf: Von der höchstzulässigen Verrechnung von 4.500.000 € entfallen 2.000.000 € auf den gebundenen
  Vortrag, auf den Neuverlust damit **2.500.000 €** und nicht die genannten 2.000.000 €. Die Endzahl
  der Quelle bestätigt die eigene Rechnung, denn der Neuverlust sinkt von 4.000.000 € auf 1.500.000 €.
  Das **Fortführungserfordernis** des § 8d Abs. 2 KStG ist der eigentliche Preis des Antrags: Es gilt
  **zeitlich unbegrenzt**. Anders als die Fünfjahresfristen des § 8c Abs. 1a KStG oder die
  Rückbetrachtung des § 8d Abs. 1 Satz 1 KStG läuft hier keine Frist ab; die einzige Befreiung ist der
  **Verbrauch** des Verlustes durch Verrechnung – weshalb die vorrangige Verwendung nach
  § 8d Abs. 1 Satz 8 KStG zugleich der einzige Weg aus der Bindung ist. Eine Gesellschaft mit hohem
  gebundenem Verlust und dauerhaft geringen Gewinnen bleibt praktisch auf unabsehbare Zeit in ihrem
  Geschäftsbetrieb gefangen.
  Bei einem Verstoß geht der **zuletzt festgestellte** Bestand unter, nicht der Verlust im Zeitpunkt
  des Ereignisses. Daraus folgt eine Feinheit, die im Beispiel über 1.000.000 € entscheidet: Maßgebend
  sind auch die stillen Reserven **zum Ende des Vorjahres** – im Sachverhalt 1.000.000 € zum
  31.12.2026 statt der 2.000.000 € aus dem Erwerbsjahr 2024 –, weil beide Größen denselben Stichtag
  haben müssen. Der Verlust des **Ereignisjahres** selbst bleibt dagegen unberührt, ein deutlicher
  Unterschied zu § 8c KStG: § 8d Abs. 2 Satz 1 KStG greift auf den **festgestellten** Bestand zu, und
  der laufende Verlust ist noch nicht festgestellt. Der verschonte Teil wechselt anschließend als
  gewöhnlicher Verlust zurück in die Feststellung nach § 10d Abs. 4 EStG. Für die Verschonung zitiert
  die Quelle allerdings § 8c Abs. 1 Satz 6 und Satz 7 KStG, während dieselben Regeln in Abschnitt 1.5
  desselben Skripts als Satz 5 und Satz 6 geführt werden – die Verweise sind hier um einen Satz
  verschoben, inhaltlich bleibt die Aussage richtig.
  Der Katalog der weiteren schädlichen Sachverhalte in § 8d Abs. 2 Satz 2 KStG wirkt dabei in **zwei
  Richtungen**, was die Quelle in einem leicht zu übergehenden Satz voranstellt: nach **vorn**
  vernichtet er den bereits festgestellten Verlust, nach **hinten** – im Zeitraum B – verhindert er,
  dass § 8d KStG überhaupt greift. Derselbe Katalog ist also Eintrittsvoraussetzung und Dauerbedingung
  zugleich. **Nr. 1** erfasst die **Ruhendstellung**: Unschädlich sind vorübergehende Schließungen –
  die Fußnote nennt die Corona-Maßnahmen und zeigt damit die Herkunft der Frage –, Betriebsferien und
  Saisonbetriebe, weil es auf die **Absicht der Wiederaufnahme** ankommt; schädlich ist dagegen die
  **Betriebsverpachtung im Ganzen**, obwohl der Betrieb wirtschaftlich weiterläuft, denn er wird nicht
  mehr von der Verlustgesellschaft **selbst** geführt. **Nr. 2** erfasst den **Branchenwechsel**, aber
  nur bei einer Änderung von Qualität und Umfang „in enormer Art und Weise“ – ein ungewöhnlich hoher
  Maßstab, der den Tatbestand auf krasse Fälle beschränkt; **strukturelle Anpassungen** an geänderte
  wirtschaftliche Rahmenbedingungen bleiben erlaubt, und als Indiz nennt die Quelle die Änderung des
  vertraglichen Gesellschaftszwecks, die sich im Sachverhalt meist unmittelbar findet. **Nr. 3**
  erfasst die Aufnahme eines **weiteren Geschäftsbetriebs** und schließt damit den Kreis zur
  Bagatellregelung: Wächst die geringwertige Tätigkeit über 3 % oder 24.500 € hinaus, **gilt** das als
  Neuaufnahme – der Verlust fällt weg, obwohl sich an der Tätigkeit nichts geändert hat außer ihrem
  Erfolg; die Einbringung eines Teilbetriebs kann zudem **unabhängig** von Nr. 6 schädlich sein, weil
  Nr. 6 den Wertansatz und Nr. 3 die Tätigkeit betrifft. **Nr. 4** und **Nr. 5** spiegeln
  § 8d Abs. 1 Satz 2 Nr. 2 KStG und sind unnachgiebig: Beim **Mitunternehmeranteil** kommt es
  ausdrücklich nicht auf den Umfang an – schon ein Prozent oder eine **atypisch stille** Beteiligung
  genügt, und die Grenze verläuft allein zur **vermögensverwaltenden** Beteiligung; bei der
  **Organschaft** ist der Zusatz zur **Organschaftskette** die eigentliche Falle, denn eine Gesellschaft
  in der Mitte einer Kette ist zugleich Organträger der unteren und Organgesellschaft der oberen Stufe.
  **Nr. 6** erfasst die Übertragung von Wirtschaftsgütern **unter dem gemeinen Wert** in
  Umwandlungsfällen nach §§ 11, 15, 20 und 21 UmwStG. Die Vorschrift schützt dabei nicht den Verlust,
  sondern die **Symmetrie**: Würden stille Reserven zu Buchwerten auf die Verlustgesellschaft
  verlagert, könnte deren spätere Aufdeckung mit dem gebundenen Verlust verrechnet werden – derselbe
  Gedanke wie bei § 8c Abs. 1 Satz 8 KStG, nur auf der anderen Seite der Zeitachse. Eine Ausnahme gilt
  bei einem **Sperrfristverstoß im 1. Zeitjahr**: Dann ist der volle Einbringungsgewinn zu versteuern,
  die Gesellschaft kann nach § 23 Abs. 2 UmwStG aufstocken und erreicht faktisch den gemeinen Wert –
  im Beispiel 400.000 €, so dass § 8d KStG anwendbar bleibt und 1.000.000 € Verlust gerettet werden.
  Greift dagegen die **Siebtelung**, bleibt es beim Verstoß: Der Einbringungsgewinn sinkt auf
  342.857 €, die Aufstockung erreicht nur 442.857 € und bleibt um 57.143 € unter dem gemeinen Wert.
  Dass bereits **ein** fehlendes Siebtel den gesamten § 8d KStG kostet, ist eine bemerkenswerte Härte –
  eine anteilige Lösung sieht die Verwaltung nicht vor, so dass eine spätere Veräußerung ungünstiger
  sein kann als eine frühere. Lehrreich ist zudem, dass sich zwei Nachteile gegenseitig aufheben: Der
  Sperrfristverstoß kostet **A** die Versteuerung von 400.000 €, der Vorteil fällt bei der **A-GmbH**
  an – in der Beratung ein Fall für eine ausdrückliche Vereinbarung. Die **verdeckte Einlage** ist
  dagegen unschädlich; der Teilwert liegt zwar als Nettogröße unter dem gemeinen Wert, doch werden
  dort keine Reserven verlagert, sondern gerade aufgedeckt, so dass der Zweck der Norm nicht berührt
  ist.
  Kommt es später zu einem **erneuten schädlichen Erwerb**, hat **§ 8c KStG Vorrang** und erfasst den
  fortführungsgebundenen Verlust wie jeden anderen; § 8d Abs. 2 KStG tritt daneben nicht ein. Bei
  einem unterjährigen Erwerb verschont ein bis dahin erzielter Gewinn den Verlust, und für die stillen
  Reserven gilt dieselbe feste Reihenfolge wie sonst – erst der laufende Verlust, dann der
  Verlustvortrag, zu dem der gebundene Verlust gehört und in dem er damit an **letzter** Stelle steht.
  Die wichtigste Rechtsfolge hebt die Quelle mit einem eigenen „Beachte“ hervor, und sie ist
  überraschend **günstig**: Was nach § 8c KStG übrig bleibt, verliert seine **Bindung** und wandert in
  die gewöhnliche Verlustfeststellung – der zweite Erwerb wirkt also als Befreiung von einer zeitlich
  unbegrenzten Fessel. Alternativ kann die Gesellschaft erneut einen Antrag nach § 8d KStG stellen und
  damit § 8c KStG wiederum verdrängen; sämtliche Verluste zum Jahresende werden dann erneut gebunden.
  Die beiden Beispiele zeigen beide Ausgänge: Im ersten stehen 11.000.000 € gebundener Verlust gegen
  6.000.000 € freien – ein klarer Vorteil; im zweiten 4.600.000 € gegen 1.600.000 €, wo die
  Entscheidung offen ist, weil der freie Verlust sicher, der gebundene jederzeit gefährdet ist. Als
  Faustregel gilt: Je größer der drohende Untergang im Verhältnis zum verschonten Rest, desto eher
  lohnt der erneute Antrag. Im zweiten Beispiel rechnet die Quelle allerdings durchgängig mit **60 %**
  des Überhangs, während § 10d Abs. 2 Satz 1 EStG **70 %** vorsieht und sämtliche übrigen Beispiele
  dieses Skripts ebenfalls mit 70 % rechnen. Das Beispiel ist in sich stimmig; mit dem geltenden Satz
  ergäben sich ein Abzug von 3.800.000 €, ein z.v.E. von 1.200.000 €, ein Endbestand von 1.200.000 €
  und ein gebundener Restbetrag von 4.200.000 € statt der genannten 4.600.000 €.
  Fallen der schädliche Erwerb und ein schädliches Ereignis in **denselben** Veranlagungszeitraum,
  geht § 8c KStG wiederum **vor** – für sich genommen günstig, weil dann die Verschonungsregelung und
  damit die stillen Reserven zur Verfügung stehen. Zugleich ist ein erneuter Antrag nach § 8d KStG
  aber **gesperrt**, weil das schädliche Ereignis bereits im Zeitraum B liegt. Beides zusammen
  bedeutet, dass die Gesellschaft die Wahlmöglichkeit verliert, die ihr sonst offensteht. Der Preis
  lässt sich beziffern: Ohne den Erwerb des Mitunternehmeranteils hätte die A-GmbH erneut den Antrag
  stellen und 12.000.000 € retten können; tatsächlich bleiben ihr 3.000.000 €. Der Erwerb kostet sie
  also 9.000.000 € Verlustvolumen, und zwar nicht wegen seiner eigenen Rechtsfolge, sondern weil er
  die Tür zu § 8d KStG verschließt. Auf die **Reihenfolge** der beiden Vorgänge kommt es dabei nicht
  an – auch ein erst im Dezember erworbener Mitunternehmeranteil läge im Zeitraum B, der bis zum Ende
  des Veranlagungszeitraums reicht; die Sperre greift also auch für ein Ereignis, das zum Zeitpunkt der
  Anteilsveräußerung noch gar nicht eingetreten war. Die Auswirkungen des § 8d KStG auf
  vororganschaftliche Verluste verweist die Quelle auf das Skript Teil VI. Damit ist auch Kapitel 2
  vollständig.
  Das dritte Kapitel behandelt die **Zinsschranke** nach § 4h EStG und § 8a KStG. Die Fassung bis
  einschließlich VZ 2023 liegt dem Bundesverfassungsgericht unter **2 BvL 1/16** vor, nachdem der BFH
  sie 2015 wegen eines möglichen Verstoßes gegen Art. 3 GG vorgelegt hatte; die Entscheidung steht
  noch aus. Für Wirtschaftsjahre, die nach dem 14.12.2023 beginnen und nicht vor dem 01.01.2024 enden,
  gilt die an die **ATAD** angepasste Neufassung – die doppelte Bedingung schließt dabei eine Lücke bei
  Rumpfwirtschaftsjahren. Ihre Kerninhalte sind ein vereinheitlichter und erweiterter **Zinsbegriff**,
  ein geänderter **Konzernbegriff**, die neu eingeführte **Stand-alone-Betrachtung** und
  Einschränkungen bei Zins- und EBITDA-Vortrag; dazu hat die Verwaltung mit BMF-Schreiben vom
  24.03.2025 Stellung genommen.
  Abziehbar ist der Zinsaufwand bis zur Höhe von **30 % des steuerlichen EBITDA** (dem verrechenbaren
  EBITDA); der Überhang wird außerbilanziell hinzugerechnet und als **Zinsvortrag** in die Folgejahre
  übernommen. Umgekehrt entsteht ein **EBITDA-Vortrag**, wenn der Zinsaufwand unter dem verrechenbaren
  EBITDA bleibt – beide Vorträge sind spiegelbildlich und gleichen Schwankungen zwischen den Jahren
  aus. Die Aussage der Quelle, es müssten „im Umkehrschluss 70% der Zinsaufwendungen“ hinzugerechnet
  werden, trifft allerdings nicht zu: Die 30 % beziehen sich auf das **EBITDA**, nicht auf die
  Zinsaufwendungen, und wie hoch der hinzuzurechnende Anteil ausfällt, hängt vom Verhältnis beider
  Größen ab. Bei einem EBITDA von 10.000.000 € und einem Zinsaufwand von 4.000.000 € etwa sind
  3.000.000 € abziehbar und 1.000.000 € – also 25 % – hinzuzurechnen. Der Anwendungsbereich reicht
  dabei weiter, als der Normzweck vermuten lässt: Erfasst sind **Gesellschafterdarlehen und
  Bankfinanzierung gleichermaßen** und **sämtliche** Betriebe mit Gewinneinkünften nach §§ 13, 15 oder
  18 EStG, also auch Einzelunternehmer und Freiberufler. Der Ausgleich erfolgt nicht über den
  Tatbestand, sondern über die Ausnahmetatbestände. Das Prüfungsschema des Abschnitts 3.1 steht im
  Skript als Grafik und ließ sich aus der PDF-Datei nicht extrahieren; es ist deshalb nicht
  wiedergegeben und wird auch nicht erfunden.
  Maßgeblich ist der seit 2024 in § 4h Abs. 1 Satz 3 EStG definierte **Nettozinsaufwand**:
  Zinsaufwendungen sind zunächst immer in Höhe der Zinserträge abziehbar, und nur ein Überhang zählt.
  Die Zinsschranke trifft damit nicht den Fremdfinanzierten schlechthin, sondern den **einseitig**
  Fremdfinanzierten – ein Betrieb mit 10.000.000 € Zinsaufwand und 9.000.000 € Zinsertrag bleibt mit
  1.000.000 € sogar unter der **Freigrenze von 3.000.000 €**, die den Nettozinsaufwand einschließlich
  Zinsvortrag erfasst. Berücksichtigt werden nur **tatsächlich abgezogene** Zinsen; andere
  Abzugsverbote – verdeckte Gewinnausschüttung nach § 8 Abs. 3 Satz 2 KStG, § 1 AStG,
  § 4 Abs. 4a EStG – gehen der Zinsschranke **vor**. Das hat eine unangenehme Kehrseite: Solche Zinsen
  gehen nicht in den **Zinsvortrag** ein und sind endgültig verloren, weshalb die Prüfungsreihenfolge
  strikt einzuhalten ist. Umgekehrt können sogar **fiktive** Zinsen erfasst sein, etwa beim
  Vorteilsverbrauch aus einer verdeckten Gewinnausschüttung in Gestalt der verhinderten
  Vermögensmehrung.
  Der **Zinsbegriff** ist nach der Neufassung bewusst weit: Erfasst sind auch Gewinn- und
  Umsatzbeteiligungen bei partiarischen Darlehen, typisch stillen Beteiligungen und Genussrechten,
  **Damnum**, **Disagio**, **Vorfälligkeitsentschädigung**, Provisionen und Vermittlungsgebühren
  einschließlich der **arrangement-fees** sowie **zurückgestellte** Zinsen. Nicht dazu gehören
  Erbbauzinsen, die Aufzinsung von Rückstellungen, aktivierte Bauzeitzinsen, Abschreibungen auf
  Kapitalforderungen und Zinsen nach §§ 233 ff. AO. Die Abgrenzung folgt einem erkennbaren Muster:
  Was wirtschaftlich den **Preis der Fremdkapitalüberlassung** bildet, ist Zinsaufwand; was den Wert
  eines Wirtschaftsguts oder eine andere Leistung vergütet, nicht. Bei Mitunternehmerschaften bleiben
  Zinsen außer Betracht, soweit ihnen korrespondierend steuerpflichtige Sonderbetriebseinnahmen
  gegenüberstehen.
  Der **Betriebsbegriff** ist folgenreich: Körperschaften, Mitunternehmerschaften einschließlich
  Sonderbetriebsvermögen und der **Organkreis** nach § 15 Satz 1 Nr. 3 KStG haben stets nur **einen**
  Betrieb, Betriebsstätten sind keine eigenen Betriebe. Die Freigrenze steht damit nur **einmal** zur
  Verfügung und lässt sich nicht durch die Bildung mehrerer Sparten vervielfachen; umgekehrt können
  sich Zinsaufwand und Zinsertrag innerhalb dieser Einheit verrechnen. Nur der **Einzelunternehmer**
  kann mehrere Betriebe und damit mehrere Freigrenzen haben – eine Gestaltungsmöglichkeit, die
  Kapitalgesellschaften verschlossen ist.
  Das **steuerliche EBITDA** entsteht in zwei Stufen, die im Schema ineinander übergehen. Zuerst
  werden Verlust- und Spendenabzug **rückgängig** gemacht, weil sie erst nach der Einkommensermittlung
  im engeren Sinne greifen; das Ergebnis ist das **maßgebliche Einkommen** des § 8a Abs. 1 Satz 2
  KStG. Dann werden sämtliche Abschreibungen – ausdrücklich auch die GWG- und die Poolabschreibung
  nach § 6 Abs. 2a EStG – sowie der Nettozinsaufwand hinzugerechnet. Damit erklärt sich die Abkürzung:
  der Gewinn vor Zinsen, Steuern und Abschreibungen, also ein von Finanzierungs- und
  Abschreibungspolitik unabhängiges Ertragsmaß. Das **verrechenbare EBITDA** beträgt davon **immer
  30 %** und bildet die Höchstgrenze für den Abzug des Nettozinsaufwands einschließlich Zinsvortrag.
  Der feste Satz macht die Norm rechnerisch einfach, aber wirtschaftlich hart: Es gibt keine Staffelung
  nach Größe, Branche oder Verschuldungsgrad, so dass in einem Ertragseinbruch das Abzugsvolumen
  gerade dann gegen null sinkt, wenn der Zinsaufwand am meisten drückt. Übersteigt der
  Nettozinsaufwand das verrechenbare EBITDA, wird der Überhang außerbilanziell hinzugerechnet und
  bildet den **Zinsvortrag**; bleibt er darunter, entsteht ein **EBITDA-Vortrag**. Wichtig für die
  Klausur ist die Verbindung zur Gewerbesteuer: Soweit die Zinsschranke greift, entfällt die
  Hinzurechnung nach § 8 Nr. 1a GewStG, weil die Zinsen den Gewerbeertrag bereits nicht gemindert
  haben und eine erneute Hinzurechnung denselben Betrag doppelt belasten würde.
  Der **Zinsvortrag** nimmt den nicht abziehbaren Überhang auf und wird nach § 4h Abs. 4 EStG i.V. mit
  § 10d Abs. 4 EStG gesondert festgestellt. Der entscheidende Satz ist dabei leicht zu übersehen: Der
  Vortrag gilt in den Folgejahren als **Zinsaufwand** und erhöht den Nettozinsaufwand, lässt den
  maßgeblichen Gewinn und damit das **steuerliche EBITDA** aber **unberührt**. Daraus folgt eine
  ungünstige Asymmetrie – er vergrößert die Seite, die begrenzt wird, ohne die Seite zu vergrößern,
  die begrenzt. Ein Betrieb mit gleichbleibendem EBITDA und gleichbleibendem Zinsaufwand baut seinen
  Vortrag deshalb nie ab; genutzt wird er nur, soweit der laufende Zinsaufwand unter das verrechenbare
  EBITDA sinkt. Im Beispiel gelingt genau das: Der originäre Aufwand fällt von 5.000.000 € auf
  2.000.000 €, und erst dieser Rückgang schafft Raum für 1.000.000 € Vortragsnutzung. Weil der Vortrag
  in den Nettozinsaufwand eingeht, wirkt er auch auf die **Freigrenze** – 2026 liegen die originären
  2.000.000 € darunter, erst der Vortrag führt zu 4.000.000 € und damit überhaupt in die Zinsschranke.
  Gewerbesteuerlich kehrt sich die Wirkung mit zeitlicher Verzögerung um: Im Jahr der Hinzurechnung
  entfällt § 8 Nr. 1a GewStG, im Jahr der Nutzung des Vortrags ist die Hinzurechnung zu prüfen.
  Der **EBITDA-Vortrag** entsteht spiegelbildlich, wenn der Nettozinsaufwand einschließlich Zinsvortrag
  das verrechenbare EBITDA nicht ausschöpft. Er setzt allerdings voraus, dass die Zinsschranke dem
  Grunde nach **anwendbar** ist: Wer keinen Nettozinsaufwand hat oder unter einen Ausnahmetatbestand
  des § 4h Abs. 2 EStG fällt, sammelt kein Potential an – das trifft gerade kleinere Betriebe unter der
  Freigrenze, die deshalb ohne Puffer dastehen, wenn sie die Grenze später einmal überschreiten. Der
  Vortrag ist auf die folgenden **fünf** Wirtschaftsjahre befristet, wird **einheitlich** festgestellt
  und in **zeitlicher Reihenfolge** verbraucht, so dass die ältesten Jahrgänge zuerst genutzt werden –
  die für den Steuerpflichtigen günstigste Regel, weil sie den Verfall vermeidet. Die Frist läuft dabei
  **kalendarisch** und nicht nach Nutzungsgelegenheiten: Ein Betrieb, der zwischenzeitlich unter die
  Freigrenze rutscht, verliert sein Potential trotzdem Jahr für Jahr. Zusammen mit der einheitlichen
  Feststellung erzwingt das eine Nebenrechnung, die aus dem Bescheid nicht hervorgeht – im dritten
  Beispiel laufen von den festgestellten 4.500.000 € genau 4.000.000 € Ende 2030 und der Rest Ende
  2031 aus. Dort ordnet die Quelle die 2027 verwendeten 4.200.000 € allerdings dem Vortrag „aus
  2025“ zu, der nur 4.000.000 € beträgt: 200.000 € stammen aus dem Jahrgang 2026 – was die Quelle mit
  ihrem eigenen Schlusssatz und dem bis 2031 nutzbaren Restbetrag von 300.000 € selbst bestätigt.
  Beide Vorträge hängen eng am **Betrieb**. Veräußerung, Liquidation und Umwandlung vernichten nach
  § 4h Abs. 5 EStG **beide**, eine Teilbetriebsübertragung und ein Mitunternehmerwechsel anteilig.
  An einer entscheidenden Stelle trennt die Quelle sie allerdings – in einer Fußnote: Bei § 8c KStG
  geht **nur der Zinsvortrag** unter, der **EBITDA-Vortrag bleibt unberührt**, was allein auf dem
  Wortlaut des § 8a Abs. 1 Satz 3 KStG beruht. Daraus ergibt sich eine einfache Merkregel:
  betriebsbezogene Ereignisse vernichten beides, der Anteilserwerb nur den Zinsvortrag. Für dessen
  Erhalt lässt sich auch § 8d KStG beantragen – um den Preis, dass Verlust und Zinsvortrag künftig
  dem Fortführungserfordernis unterliegen. Bemerkenswert ist der **Durchgriff** des § 4h Abs. 5 Satz 3
  EStG: Obwohl die Personengesellschaft ein eigener Betrieb mit eigenem Zinsvortrag ist, lässt ein
  schädlicher Anteilserwerb bei einer beteiligten Kapitalgesellschaft ihren Zinsvortrag anteilig
  untergehen – Personengesellschaften können den Erhalt des Zinsvortrags nicht abschirmen, wie es
  § 10a Satz 10 GewStG beim Gewerbeverlust ebenso vorsieht. Tritt das Ereignis unterjährig ein,
  entfällt nur der **festgestellte** Vortrag des Vorjahres; Nettozinsaufwand und verrechenbares EBITDA
  des laufenden Jahres bleiben erhalten.
  Die **Freigrenze** des § 4h Abs. 2 Satz 1a EStG formuliert die Quelle ungewöhnlich über den
  Höchstbetrag von **2.999.999 €**, und das aus gutem Grund: Es ist eine echte Freigrenze und kein
  Freibetrag. Wird sie um einen Euro überschritten, unterliegt der **gesamte** Nettozinsaufwand der
  Schranke – bei 2.999.999 € sind alle Zinsen abziehbar, bei 3.000.000 € nur noch 30 % des EBITDA.
  Umso auffälliger ist, dass die Quelle wenige Zeilen später selbst vom „Freibetrag“ spricht. Im
  Organkreis gilt die Grenze nach § 15 Satz 1 Nr. 3 KStG nur **einmal**. Unerwartet ist die Kehrseite
  aller Ausnahmen: Greift eine von ihnen, entsteht **kein EBITDA-Vortrag** – die Befreiung kostet also
  das Potential des Jahres, was gerade den Betrieb trifft, der zwischen Jahren mit und ohne Anwendung
  wechselt.
  Die **Stand-alone-Betrachtung** des § 4h Abs. 2 Satz 1b EStG verlangt seit 2024 nur noch zweierlei:
  dass dem Betrieb **keine Person** im Sinne des § 1 Abs. 2 AStG nahesteht und dass er über **keine
  ausländische Betriebsstätte** verfügt. Sie ist damit deutlich enger, als ihr Name verspricht, denn
  bereits eine Beteiligung von **25 %** begründet ein Näheverhältnis – und zwar **in beide
  Richtungen**, also auch dann, wenn der Betrieb selbst ein Viertel an einer anderen Gesellschaft
  hält. Für die typische Ein-Personen- oder Familien-GmbH läuft die Regelung vollständig leer; im
  ersten Beispiel genügen zwei Gesellschafter mit je 30 %, und erst zehn Gesellschafter zu je 10 %
  unterschreiten die Grenze. Dann aber kann eine einzige **ausländische Betriebsstätte** die Ausnahme
  wieder zunichtemachen, gleichgültig wie klein sie ist und ob überhaupt Zinsen mit ihr
  zusammenhängen. Zwischen den beiden Ausnahmen bleibt eine Lücke, die die Quelle ausdrücklich
  benennt: Die Escape-Klausel des § 4h Abs. 2 Satz 1c EStG hilft nur **Konzern**gesellschaften, die
  Stand-alone-Regel nur Betrieben **ohne** nahestehende Person – die nicht konzernzugehörige
  Gesellschaft mit einem Gesellschafter von mindestens 25 %, also der Regelfall des Mittelstands,
  fällt durch beide Raster. Im **Organkreis** wird ausschließlich auf Ebene des **Organträgers**
  geprüft, was in beide Richtungen wirken kann. Die früher zusätzlich zu prüfende
  Gesellschafterfremdfinanzierung des § 8a Abs. 2 KStG a.F. ist ersatzlos aufgehoben, weil das
  Merkmal der nahestehenden Person dasselbe Ergebnis erreicht – wer mit älterer Literatur arbeitet,
  findet dort also eine Prüfungsstufe, die es seit 2024 nicht mehr gibt.
  Auch der **Konzernbegriff** hat sich gravierend geändert: Konzern ist nach § 4h Abs. 3 Satz 4 EStG
  nur noch, wer nach den maßgeblichen Rechnungslegungsstandards **tatsächlich voll konsolidiert** wird.
  Die Prüfung verschiebt sich damit von einer rechtlichen auf eine **bilanzielle** Frage – nicht die
  beherrschende Beteiligung entscheidet, sondern ob der Abschluss in einen Konzernabschluss eingeht.
  Wer nach §§ 290 ff. HGB von der Konsolidierung befreit ist, gehört nicht zum Konzern, verliert damit
  die Escape-Klausel und gewinnt nichts hinzu, weil die Stand-alone-Ausnahme an der
  25-Prozent-Beteiligung der Mutter scheitert. Dasselbe gilt für den **Gleichordnungskonzern**, jene
  deutsche Sonderform ohne Mutter-Tochter-Verhältnis: Er ist für die Zinsschranke entfallen, und die
  betroffenen Familiengesellschaften fallen nun in dieselbe Lücke. Der Konzernbegriff ist dabei nicht
  auf das Inland beschränkt – auch die einzige inländische Gesellschaft eines internationalen Konzerns
  gehört dazu.
  Die **Escape-Klausel** des § 4h Abs. 2 Satz 1c EStG steht nur konzernabhängigen Gesellschaften offen
  und verlangt eine **Eigenkapitalquote** – Eigenkapital zur Bilanzsumme –, die die des Gesamtkonzerns
  erreicht oder um höchstens **zwei Prozentpunkte** unterschreitet. Der Gedanke dahinter: Wer im
  Konzernvergleich vertretbar kapitalisiert ist, verlagert keine Gewinne über Finanzierungsinstrumente.
  Maßgebend sind die Verhältnisse zum **Schluss des Vorjahres** – günstig, weil die Quoten bei Abgabe
  der Erklärung feststehen und eine Kapitalzuführung zum Bilanzstichtag die Klausel für das Folgejahr
  sichert; in der Klausur eine Fehlerquelle, weil der Sachverhalt meist die Quoten des laufenden Jahres
  nennt. Die Toleranz bezieht sich auf **Prozentpunkte**, nicht auf Prozent: Ein Fall von 4 % auf 2 %
  halbiert die Quote und bleibt dennoch innerhalb der Grenze. Für den Vergleich gilt eine feste
  Rangfolge – IFRS, dann das Handelsrecht eines EU-Mitgliedstaates, dann US-GAAP oder HGB –, wobei
  eine **Fünfjahressperre** verhindert, kurzfristig auf den günstigeren Standard umzustellen; für den
  inländischen Mittelstand ist die dritte Stufe damit der Regelfall. Die Berechnungsgrafik des
  Abschnitts 3.7.3.2 ließ sich aus der PDF-Datei nicht extrahieren und ist deshalb nicht wiedergegeben.
  Bei Kapitalgesellschaften tritt der **Zehn-Prozent-Check** des § 8a Abs. 3 KStG hinzu: Die Escape-
  Klausel greift nur, wenn Vergütungen für **konzernfremde** Gesellschafterfremdfinanzierung – an
  Gesellschafter mit mindestens 25 %, ihnen nahestehende Personen oder rückgriffsberechtigte Dritte
  etwa aus Bürgschaft oder Patronatserklärung – zusammengerechnet nicht mehr als 10 % des
  Nettozinsaufwands ausmachen. Im Beispiel sind das 500.000 € von 5.000.000 €, die tatsächlichen
  300.000 € bleiben darunter, und mit 30 % gegenüber 28 % Eigenkapitalquote gelingt der Nachweis. Die
  weitreichendste Aussage steht dabei in einem einzigen Satz: Der Check bezieht sich auf **sämtliche**
  Konzerngesellschaften **weltweit** – wird irgendeine von ihnen zu mehr als 10 % konzernfremd
  finanziert, verlieren **alle inländischen** Gesellschaften die Klausel. Für die inländische Tochter
  eines großen Konzerns ist der Nachweis damit kaum zu führen. Hinzu kommt eine ungewöhnliche
  Wechselwirkung: Darlehen der eigenen Konzernmutter verbrauchen die Zehn-Prozent-Grenze **nicht**,
  weil sie konsolidiert werden – sie mindern aber die **Eigenkapitalquote** und gefährden damit die
  zweite Stufe. Eine Finanzierung, die die eine Prüfung rettet, kann die andere kosten.
  Schließlich schließt § 4h Abs. 1 Satz 7 EStG eine Lücke, die die Quelle treffend benennt: Ohne sie
  hätte sich ein Zinsvortrag in einem Ausnahmejahr „wie ein Verlustvortrag“ ausgewirkt, und die
  Zinsschranke wäre zu einer bloßen zeitlichen Verschiebung geworden. Für den **Vortragsteil** gilt die
  Schranke deshalb **immer**, auch wenn der Betrieb im Übrigen befreit ist. Das führt zu einer
  gespaltenen Prüfung innerhalb desselben Jahres: Im Beispiel bleibt der laufende Nettozinsaufwand von
  900.000 € voll abziehbar, weil die Freigrenze nicht überschritten ist, während der Zinsvortrag von
  2.000.000 € nur bis zur Höhe des verrechenbaren EBITDA von 900.000 € genutzt werden darf und
  1.100.000 € verbleiben. In der Abwandlung mit einem EBITDA von 10.000.000 € ist der Vortrag
  vollständig verbraucht, und es entsteht sogar ein **EBITDA-Vortrag** von 1.000.000 € – scheinbar im
  Widerspruch zur Regel, dass Ausnahmen kein Potential entstehen lassen, doch die Quelle löst das auf:
  Bezogen auf den Zinsvortrag ist die Schranke gerade nicht ausgeschlossen.
  Das vierte Kapitel behandelt die **Verluste aus stillen Beteiligungen** nach § 15 Abs. 4 Sätze 6 bis
  8 EStG. Verluste, die eine Kapitalgesellschaft als Mitunternehmerin aus einer **atypisch stillen**
  Gesellschaft, einer Unterbeteiligung oder einer sonstigen Innengesellschaft an einer **anderen
  Kapitalgesellschaft** erzielt, sind nicht mit ihrem übrigen Einkommen ausgleichsfähig und
  außerbilanziell hinzuzurechnen; verrechenbar sind sie nur mit Gewinnen aus **derselben** Beteiligung,
  im Wege des Rücktrags in das Vorjahr oder des Vortrags. Der historische Hintergrund erklärt die
  Härte: Nach Abschaffung der **Mehrmütterorganschaft** ab 2004 bot sich die **GmbH & atypisch Still**
  als Ersatz an, weil der stille Gesellschafter am Verlust beteiligt ist, ohne dass es
  Gewinnabführungsvertrag und finanzielle Eingliederung bräuchte. Die Norm ist damit keine
  Missbrauchsvorschrift im engeren Sinne, sondern eine **Absicherung** der Organschaftsvoraussetzungen.
  **Natürliche Personen** sind nach § 15 Abs. 4 Satz 8 EStG ausgenommen – bei ihnen droht keine
  Umgehung, weil sie ohnehin nicht Organträgerin sein könnten –, ihre Verluste bleiben vorbehaltlich
  des § 15a EStG abziehbar. Die **mittelbare** Beteiligung über Personengesellschaften ist dagegen
  ausdrücklich erfasst, so dass sich die Norm nicht durch Zwischenschaltung einer KG umgehen lässt,
  und über § 20 Abs. 1 Nr. 4 Satz 2 EStG gilt sie entsprechend auch für die **typisch** stille
  Gesellschaft: Die sonst zentrale Abgrenzung zwischen typisch und atypisch still ist hier
  ausnahmsweise nicht entscheidend.
  Das Zusammenspiel mit den vorangegangenen Kapiteln wirkt dreifach zulasten des Steuerpflichtigen.
  Die besonderen Verluste gehören zu den **ungenutzten Verlusten** des § 8c KStG und gehen bei einem
  schädlichen Erwerb unter. Verschonen können sie nur die stillen Reserven, die auf die **atypisch
  stille Gesellschaft** entfallen – die Reserven der Kapitalgesellschaft selbst helfen nicht, was in
  der Praxis meist bedeutet, dass keine Verschonung eintritt. Und **§ 8d KStG ist von vornherein
  ausgeschlossen**, weil das Halten des Mitunternehmeranteils nach § 8d Abs. 1 Satz 2 Nr. 2 KStG
  schädlich ist. Verfahrensrechtlich ergibt sich eine ungewöhnliche Aufteilung: Die einheitliche
  Feststellung der GmbH & atypisch Still ermittelt den Verlustanteil **ohne** die Einschränkung und
  teilt ihn nur **nachrichtlich** mit; die eigentliche Feststellung erfolgt beim Finanzamt der
  Mitunternehmer-Kapitalgesellschaft **neben** der allgemeinen Verlustfeststellung – die Gesellschaft
  führt also zwei Verlustkonten.
  Daraus folgen **zwei getrennte Verrechnungskreise** mit je eigenem Grundabzug von 1.000.000 € –
  anders als bei § 8d KStG, wo fortführungsgebundener und gewöhnlicher Verlust ausdrücklich **einen**
  Kreis bilden; hier ist die Lösung für den Steuerpflichtigen günstiger. Die Reihenfolge ist zwingend:
  zuerst der besondere Vortrag gegen den Gewinn aus derselben stillen Beteiligung nach § 10d Abs. 2
  EStG, dann fließt erst der verbleibende Gewinnanteil in das übrige Einkommen. Wie hart die
  **Mindestbesteuerung** in diesem engen Kreis wirkt, zeigt das zweite Beispiel: Die Z-GmbH hat über
  zwei Jahre aus der Beteiligung wirtschaftlich **null** verdient – 1.600.000 € Verlust und
  1.600.000 € Gewinn heben sich auf – und ihr Eigengeschäft steht bei ./. 300.000 €; versteuern muss
  sie gleichwohl einen Gewinnanteil von 180.000 €, weil 1.000.000 € + 70 % × 600.000 € = 1.420.000 €
  die Grenze des Abzugs bilden. Die Belastung entsteht allein aus der zeitlichen Streckung und
  gleicht sich erst über den allgemeinen Verlustvortrag von 120.000 € aus – sofern es je dazu kommt.
  Im Verhältnis zu **§ 15a EStG**, der bei der atypisch stillen Beteiligung über § 15a Abs. 5 Nr. 1
  EStG ebenfalls gilt, zeigen sich drei Unterschiede, die sich alle auf dieselben Zahlen auswirken.
  Erstens der **Rücktrag**: § 15 Abs. 4 EStG erlaubt ihn auf Vorjahresgewinne aus derselben stillen
  Gesellschaft, § 15a EStG kennt nur die Verrechnung mit künftigen Gewinnen. Zweitens das
  **Sonderbetriebsvermögen**: Für § 15a EStG ist es unmaßgeblich, weil nur das Kapitalkonto der
  **Gesamthand** zählt – die Folge ist, dass ein Sonderbetriebsgewinn voll zu versteuern ist, im
  Beispiel 100.000 €, obwohl im selben Jahr ein Verlust von 1.600.000 € zugerechnet wird. § 15 Abs. 4
  EStG erfasst dagegen den **Saldo** beider Bereiche: Aus 1.600.000 € Gesamthandsverlust und
  500.000 € Sonderbetriebsgewinn wird ein besonderer Verlust von 1.100.000 €. Dieselbe Größe wird also
  einmal ausgeblendet und einmal einbezogen, und die Bemessungsgrundlage ist **zweimal verschieden**
  zu bilden. Drittens die **Mindestbesteuerung**: Sie gilt für den späteren Abzug des besonderen
  Verlustes, nicht aber für den § 15a-Verlust, der den entsprechenden Gesamthandsgewinn **immer in
  voller Höhe** mindert – ein Vorteil, der den breiteren Verlusttopf bei größeren Beträgen teilweise
  wieder aufwiegt.
  **§ 15a EStG geht dabei vor**; nur die von ihm nicht erfassten Verluste unterliegen § 15 Abs. 4
  EStG. Ein einziger Verlustanteil kann sich deshalb **aufteilen**: Von 150.000 € entfallen im
  Beispiel 50.000 € auf § 15a EStG, soweit das Kapitalkonto negativ wird, und 100.000 € auf
  § 15 Abs. 4 EStG. Beide Teile sind nicht abziehbar, werden aber auf verschiedenen Ebenen
  festgestellt – der eine bei der Mitunternehmerschaft, der andere beim Gesellschafter – und folgen
  verschiedenen Regeln. Die eleganteste Stelle des Kapitels ist der Schluss dieses Beispiels: Der
  Sonderbetriebsgewinn von 50.000 € lässt sich **nicht** mit dem § 15a-Verlust verrechnen, weil dieser
  nur Gesamthandsgewinne mindert, **wohl aber** mit dem besonderen Verlust, dessen
  Bemessungsgrundlage den Sonderbereich einschließt. Das steuerpflichtige Einkommen beträgt damit 0 €
  statt 50.000 € – hier zahlt sich der Nachrang des § 15 Abs. 4 EStG aus, weil der verbleibende
  Verlusttopf der **breitere** ist. Für die Klausur ergibt sich daraus eine feste Prüfungsreihenfolge:
  erst § 15a EStG, dann § 15 Abs. 4 EStG, dann § 8c KStG.
  Prüfung: `npm run check:k2-kst-teil5`

- **KSt Teil VI (Hamacher)** (Klausur 2, Reiter Körperschaftsteuer → „Teil VI (Organschaft)“):
  das Lehrgangsskript **„Körperschaftsteuer, Teil VI: Körperschaft- und gewerbesteuerliche
  Organschaft (§§ 14 – 19 KStG; § 2 Abs. 2 Satz 2 GewStG)“** (21. Auflage, Rechtsstand 05/2025) im
  Wortlaut – **vollständig** mit 79 Kapiteln, 1.350 Abschnitten und 116 Tabellen über alle vier Kapitel und 98 Seiten. Die Organschaft hebt
  die **Trennung der Rechtssphären** auf: Sämtliche steuerlichen Konsequenzen verlagern sich auf den
  **Organträger**, und das ist sachgerecht, weil der Gewinn nach § 301 AktG tatsächlich abgeführt und
  der Verlust nach § 302 AktG tatsächlich ausgeglichen wird. Die Zurechnung folgt also dem **Geld** –
  woraus sich auch erklärt, warum die **tatsächliche Durchführung** des Vertrags eine eigenständige
  Tatbestandsvoraussetzung ist. Für die Organschaft sprechen vier Erwägungen, die sich in zwei Gruppen
  ordnen lassen: **Ergebnisverrechnung** und **Verlustnutzung** betreffen dieselbe Sache aus zwei
  Blickwinkeln, während die Vermeidung **verdeckter Gewinnausschüttungen** und die Wirkung bei der
  **Zinsschranke** Nebeneffekte sind – letztere allerdings zweischneidig, weil der Organkreis als
  **ein Betrieb** gilt und die Freigrenze von 3.000.000 € deshalb nur einmal zur Verfügung steht.
  Die drei Organschaftsformen verhalten sich dabei asymmetrisch: Die **gewerbesteuerliche** folgt der
  körperschaftsteuerlichen **automatisch**, weil § 2 Abs. 2 Satz 2 GewStG schlicht auf deren
  Voraussetzungen verweist; die **umsatzsteuerliche** ist dagegen vollständig eigenständig – sie
  verlangt zusätzlich **wirtschaftliche und organisatorische** Eingliederung, verzichtet aber auf den
  Gewinnabführungsvertrag, so dass beide unabhängig voneinander vorliegen können. Ihre Folge ist eine
  andere: Organträger und Organgesellschaft gelten als **ein Unternehmen**, Leistungen zwischen ihnen
  sind nicht steuerbare **Innenumsätze**, und nur der Organträger ist Unternehmer.
  Geprüft wird in **fünf Schritten**, die zugleich das Klausurschema bilden: Organgesellschaft,
  Organträger mit deutschem Besteuerungsrecht, finanzielle Eingliederung, formwirksamer Vertrag mit
  fünfjähriger Mindestlaufzeit und dessen tatsächliche Durchführung. Die ersten beiden betreffen die
  **Personen**, der dritte die **Beteiligung**, die letzten beiden den **Vertrag** in rechtlicher
  Gestalt und tatsächlicher Handhabung – und beide sind getrennt zu prüfen, denn ein wirksamer Vertrag
  ohne Durchführung nützt ebenso wenig wie eine Abführung ohne wirksamen Vertrag.
  **Organgesellschaft** kann nur eine **Kapitalgesellschaft** sein: AG, KGaA und SE unmittelbar nach
  § 14 Abs. 1 Satz 1 KStG, GmbH und UG über § 17 Abs. 1 KStG, nach den BFH-Entscheidungen vom
  11.12.2024 auch eine Gesellschaft, an der eine **atypisch stille** Gesellschaft besteht – eine
  Kehrtwende, die genau die Konstellation betrifft, die § 15 Abs. 4 Sätze 6 bis 8 EStG im Skript
  Teil V verschließen soll. Verlangt sind zwei Merkmale, die sauber zu trennen sind: **Geschäftsleitung
  im Inland**, was die unbeschränkte Steuerpflicht begründet, und **Sitz in einem EU- oder
  EWR-Staat**. Daraus folgt der Ausschluss der **Drittstaatengesellschaft**, deren inländische
  Geschäftsleitung ihr nichts nützt, ebenso wie das Scheitern der „Organschaft über die Grenze“ am
  fehlenden Inlandsbezug. Die nach § 1a KStG **optierende** Gesellschaft scheidet aus rein
  **zivilrechtlichem** Grund aus – für sie gibt es keinen eintragungsfähigen Gewinnabführungsvertrag –,
  kann aber sehr wohl **Organträgerin** sein; die Option wirkt also in beide Richtungen verschieden.
  **Organträger** kann nach § 14 Abs. 1 Nr. 2 KStG jedes **gewerbliche Unternehmen** sein, und zwar
  **rechtsformunabhängig**; maßgeblich ist die Gewerblichkeit nach § 2 Abs. 1 Satz 2 GewStG. Der Grund
  für dieses Merkmal trägt die gesamte Systematik: Die Gewerbesteuerpflicht der Organgesellschaft, die
  stets Kapitalgesellschaft ist, soll sich auf der Ebene des Organträgers **fortsetzen** – ohne das
  Merkmal ginge Gewerbesteuersubstrat verloren. Deshalb scheiden **Freiberufler** und **Land- und
  Forstwirte** aus, während bei der **Kapitalgesellschaft** die Rechtsform allein genügt: Auch eine
  dauerdefizitäre oder rein vermögensverwaltende Gesellschaft ist nach § 2 Abs. 2 GewStG
  gewerbesteuerpflichtig. Eine Befreiung des Organträgers nach **§ 3 GewStG** greift dabei **nicht
  durch**, weil sie eine persönliche Vergünstigung ist: Das eigene Ergebnis bleibt steuerfrei, der
  zugerechnete Gewerbeertrag der Organgesellschaft dagegen steuerpflichtig – ein deutlicher Unterschied
  zur persönlichen Befreiung nach § 5 KStG, die den Rechtsträger schon als Organträger ausschließt. Die
  gewerbliche Tätigkeit muss zudem **nicht ununterbrochen** bestehen, sondern erst im Zeitpunkt der
  **Entstehung des Gewinnabführungsanspruchs** – eine für den Steuerpflichtigen günstige Abweichung
  von der sonstigen Strenge, die der BFH 2013 entschieden hat.
  Für die **Personengesellschaft** als Organträger verlangt § 14 Abs. 1 Nr. 2 Satz 2 KStG zusätzlich
  eine **originär** gewerbliche Tätigkeit von **substanzieller Bedeutung**. Diese Verschärfung zielt
  genau auf die alte **Mehrmütterorganschaft**: Zwei Gesellschafter mit je 50 % konnten die Organschaft
  für sich nicht begründen, weil keinem die Stimmrechtsmehrheit zukam; eine zwischengeschaltete
  **Willensbildungsgesellschaft** bündelte die Anteile und erreichte, was den Beteiligten einzeln
  verschlossen war. Die Trennlinie zwischen ausreichenden und nicht ausreichenden Tätigkeiten folgt
  dabei einem klaren Muster: Ausreichend sind **tatsächliche** unternehmerische Betätigungen – die
  Besitzgesellschaft einer Betriebsaufspaltung, entgeltliche Dienstleistungen gegenüber
  Konzerngesellschaften und die **geschäftsleitende** Holding; nicht ausreichend ist die nur **kraft
  gesetzlicher Fiktion** vermittelte Gewerblichkeit, also die **Prägung** nach § 15 Abs. 3 Nr. 2 EStG,
  die **Abfärbung** nach § 15 Abs. 3 Nr. 1 EStG – auch oberhalb der Bagatellgrenze von 3 % oder
  24.500 € – und die bloße Beteiligung an einer gewerblich tätigen Personengesellschaft. Eine teilweise
  originäre Tätigkeit genügt, sie darf aber nicht geringfügig sein: Im Beispiel der Quelle stehen
  1.000 € eigener Gewinn einem Beteiligungsergebnis von 1.000.000 € gegenüber, was die Quelle mit
  0,09 % beziffert – nachgerechnet sind es 0,0999 %, also gerundet 0,10 %, was am Ergebnis nichts
  ändert. Schließlich dürfen an der Personengesellschaft **keine steuerbefreiten Körperschaften**
  beteiligt sein, es sei denn, das Organeinkommen wird einem wirtschaftlichen Geschäftsbetrieb
  zugerechnet, wo es ohnehin besteuert wird.
  Für die **inländische Besteuerung des Organeinkommens** hat der Gesetzgeber den Anknüpfungspunkt
  verschoben, was die Erwartung umkehrt: Während die Organgesellschaft zwingend im Inland geleitet
  werden muss, kommt es beim **Organträger** auf Sitz, Geschäftsleitung und Wohnsitz **gar nicht an** –
  er darf Steuerausländer und sogar in einem **Drittstaat** ansässig sein. Den Inlandsbezug stellt
  allein die **Beteiligung** her, die nach § 14 Abs. 1 Nr. 2 Satz 4 KStG ununterbrochen einer
  inländischen Betriebsstätte zuzuordnen ist; das sichert das Besteuerungsrecht und erklärt zugleich,
  warum § 18 KStG a.F. entbehrlich wurde. In **Inlandsfällen** ist die Prüfung bedeutungslos, bei einem
  **ausländischen** Organträger dagegen entscheidend: ohne DBA nach § 12 AO, mit DBA nach der
  **funktionalen Zuordnung** zu einer Betriebsstätte im Sinne des **Art. 5 OECD-MA**. Genau hier liegt
  eine Falle für den Mittelstand: Die **Besitzpersonengesellschaft** einer Betriebsaufspaltung gilt
  national als gewerblich und kann Organträgerin sein, begründet abkommensrechtlich aber **keine**
  Betriebsstätte, weil die bloße Vermietung keine feste Geschäftseinrichtung eigener Tätigkeit ist.
  Die **finanzielle Eingliederung** verlangt nach § 14 Abs. 1 Nr. 1 Satz 1 KStG die Mehrheit der
  **Stimmrechte**, nicht der nominellen Beteiligung – und das wirkt in beide Richtungen:
  **Mehrfachstimmrechte** können die Mehrheit auch bei geringerer Kapitalbeteiligung herstellen, während
  eine im Gesellschaftsvertrag vorgesehene **qualifizierte** Mehrheit auch erreicht werden muss.
  Erforderlich ist zudem das **wirtschaftliche Eigentum**: Ein bloßer **Stimmrechtsbindungsvertrag**
  genügt nicht – ein auffälliger Gegensatz zu § 8c KStG, wo dieselbe Bindung nach dem Skript Teil V
  gerade ein gleichgestellter Vorgang ist und den Verlustuntergang auslösen kann.
  **Mittelbare** Anteile zählen nur unter zwei Bedingungen, die sauber zu trennen sind: Der Organträger
  muss die **vermittelnde** Gesellschaft **beherrschen** – dort gilt die Schwelle von mehr als 50 % als
  reine Ja-Nein-Frage –, und die Quote wird anschließend **durchgerechnet**. Die Beispiele zeigen beide
  Stufen: 30 % + 100 % × 70 % = 100 %; 41 % + 51 % × 30 % = 56,3 %; bei genau 50 % an der
  Zwischengesellschaft fällt die gesamte mittelbare Beteiligung dagegen weg, obwohl 50 % + 50 % × 50 %
  = 75 % zur Mehrheit geführt hätten – es scheitert also nicht an der Höhe, sondern an der fehlenden
  Beherrschung. Die Zwischengesellschaft muss dabei **selbst nicht organschaftsfähig** sein; auch eine
  ausländische Gesellschaft ohne Inlandsbezug oder eine nicht gewerbliche Personengesellschaft genügt,
  weil sie nur als Rechenposten dient. Eine **ausschließlich mittelbare** Beteiligung reicht aus, der
  Gewinnabführungsvertrag wird gleichwohl unmittelbar zwischen Organträger und Organgesellschaft
  geschlossen. Dass § 14 Abs. 1 Nr. 1 Satz 3 KStG die mittelbaren Anteile ausblendet, wenn schon
  unmittelbar die Mehrheit besteht, ist keine Vereinfachung, sondern eine Weichenstellung für die
  Zurechnung der **Mehr- und Minderabführungen** nach § 14 Abs. 4 KStG.
  Bei der **Personengesellschaft** müssen die maßgeblichen Anteile im **Gesamthandsvermögen** liegen;
  im **Sonderbetriebsvermögen** gehaltene Anteile der Mitunternehmer bleiben ausgeblendet, obwohl sie
  sonst zum Betriebsvermögen rechnen. Die Stoßrichtung ist dieselbe wie beim Erfordernis der originär
  gewerblichen Tätigkeit: Die Gesellschaft soll die Organgesellschaft **selbst** beherrschen und nicht
  als Rechenhilfe für die Anteile ihrer Gesellschafter dienen. Auch hier fällt der Gegensatz zum
  Skript Teil V auf, wo die gewerblich geprägte Personengesellschaft für § 8c KStG selbst der Erwerber
  ist, als Organträgerin aber gerade nicht genügt.
  **Zeitlich** muss die finanzielle Eingliederung **vom Beginn des Wirtschaftsjahres** der
  Organgesellschaft an **ununterbrochen** bestehen. Ein **Rückbezug** scheidet aus, und der BFH
  begründet das überzeugend: Die Eingliederung ist ein **tatsächlicher Lebenssachverhalt**, der eine
  wirkliche und nicht nur fingierte Beherrschung verlangt. Davon zu unterscheiden sind zwei Fallgruppen,
  die auf den ersten Blick gleich aussehen. Bei der **umwandlungsbedingten Rechtsnachfolge** – dem
  Anteilstausch nach § 21 UmwStG und der Verschmelzung – wird dem Erwerber die **Vorbesitzzeit** des
  Rechtsvorgängers zugerechnet: Die Beherrschung hat stattgefunden, nur durch eine andere Person. Beim
  **steuerlichen Rückbezug** der Einbringung nach § 20 Abs. 5 und 6 UmwStG in eine **bestehende**
  Gesellschaft wird dagegen eine Beherrschung fingiert, die es nie gab – das genügt nicht. Fein ist der
  Grenzfall der **Sachgründung**: Entsteht die Gesellschaft erst durch die Einbringung, gibt es keine
  Zeitspanne fremder Beherrschung, und die erstmals gewährten Anteile wirken zurück.
  Die praktische Lösung nennt die Quelle beiläufig, sie ist aber die wichtigste Erkenntnis des
  Abschnitts: die **Umstellung des Wirtschaftsjahres**. Ein Rumpfwirtschaftsjahr ab dem Erwerbstag
  lässt die Eingliederung auf dieses Jahr bezogen von Anfang an bestehen; ohne Umstellung kostet ein
  Erwerb am 01.03. ein ganzes Jahr. Im Jahr der Begründung darf sogar **zweimal** umgestellt werden –
  erst auf den Beginn des Organschaftsverhältnisses, dann auf den im Organkreis üblichen Stichtag –,
  und die Zustimmung nach § 7 Abs. 4 Satz 3 KStG **ist** zu erteilen, weil die Organschaft ein
  gewichtiger Grund ist. Spiegelbildlich löst R 14.4 Abs. 2 KStR den **Veräußerungsfall**: Bei einer
  Veräußerung zum Ende des Wirtschaftsjahres wird der Übergang exakt zwischen **24:00 Uhr** und
  **00:00 Uhr** geschnitten, so dass **beide** Organschaften bestehen – die alte für das abgelaufene,
  die neue für das folgende Jahr; bei unterjähriger Veräußerung hilft wieder nur die Umstellung.
  Für die **Folgejahre** hat sich die Lage erheblich gebessert. Nach früherer Verwaltungsauffassung
  vernichtete ein einziges Jahr ohne finanzielle Eingliederung die Organschaft für die gesamte
  Restlaufzeit und riss dabei regelmäßig die Mindestlaufzeit ein. Der BFH hat dem widersprochen, die
  Verwaltung ist gefolgt: Die Eingliederung ist ein **zeitpunktbezogenes** Merkmal des jeweiligen
  Wirtschaftsjahres, kein vertragslaufzeitbezogenes Erfordernis. Fehlt sie in einem Jahr, entfällt nur
  dieses, und die Organschaft lebt danach wieder auf – vorausgesetzt, der Gewinnabführungsvertrag wird
  auch in der Zwischenzeit **tatsächlich durchgeführt**.
  Der **Gewinnabführungsvertrag** ist das zentrale Element der Organschaft und verpflichtet **beide**
  Seiten: die Organgesellschaft zur Abführung ihres **handelsbilanziellen** Ergebnisses, den
  Organträger zum Ausgleich ihrer handelsbilanziellen Verluste. Erst dadurch arbeitet die
  Organgesellschaft **auf Rechnung** des Organträgers, was die Einkommenszurechnung rechtfertigt.
  Bemerkenswert ist die Anknüpfung ans **Handelsrecht**: Abgeführt wird der handelsbilanzielle Gewinn,
  zugerechnet dagegen das **steuerliche** Einkommen – aus dieser Abweichung entstehen die später
  behandelten Mehr- und Minderabführungen.
  Bei einer **AG oder KGaA** verlangt § 291 AktG Schriftform, Zustimmung der Hauptversammlung mit
  Dreiviertelmehrheit und **Eintragung** in das Handelsregister – und diese wirkt **konstitutiv**: Vor
  ihr besteht kein wirksamer Vertrag und damit keine Organschaft. § 14 Abs. 1 Satz 2 KStG knüpft die
  erstmalige Zurechnung genau daran, so dass die Dauer des Registerverfahrens über den Beginn
  entscheidet – ein **Zeitrisiko**, das der Steuerpflichtige nicht beherrscht. Nur bei der
  **eingegliederten AG** nach §§ 319 bis 327 AktG wird der Vertrag schon mit schriftlichem Abschluss
  wirksam, weil die Eingliederung selbst eingetragen wird. Für die **GmbH** fehlen entsprechende
  handelsrechtliche Vorschriften; der Weg des Gesetzgebers ist verschlungen: Die §§ 291 ff. AktG gelten
  nach überwiegender Auffassung **analog**, § 17 Abs. 1 Satz 1 KStG verweist auf die §§ 14 bis 16 KStG,
  die ihrerseits das Aktienrecht voraussetzen – im Ergebnis gelten aktienrechtliche Anforderungen, ohne
  dass ein Gesetz sie unmittelbar anordnet, ergänzt um die **notarielle Beurkundung** entsprechend
  § 53 Abs. 2 Satz 1 GmbHG. Hinzu tritt bei der GmbH die **Verlustübernahmeklausel** des § 17 Abs. 1
  Satz 2 Nr. 2 KStG mit einem **dynamischen Verweis** auf § 302 AktG in der jeweils gültigen Fassung.
  Sie hat eine leidvolle Vorgeschichte – zahllose Organschaften scheiterten daran, dass die Klausel
  nach einer Gesetzesänderung nicht mehr passte – und ist seit dem 26.02.2013 vorgeschrieben. Bei der
  **AG** wäre sie überflüssig, weil § 302 AktG dort unmittelbar gilt: eine einfache Prüffrage für die
  Klausur.
  Beim **ausländischen** Gewinnabführungsvertrag laufen zwei Prüfungen nebeneinander, die sauber zu
  trennen sind. Inhaltlich muss er dem **deutschen** Maßstab genügen – vollständig § 291 AktG
  einschließlich der Verlustübernahme nach § 302 AktG –, formal dagegen dem **ausländischen** Recht und
  dort eintragungspflichtig sein, entweder durch Registerpflicht für den Vertrag selbst oder durch
  Aufnahme in die Satzung bei Eintragungspflicht für Satzungsänderungen. Beides kann auseinanderfallen;
  nur wenn es zusammentrifft, wird die Organschaft anerkannt, und auch dann erst ab dem Jahr der
  **Eintragung im dortigen Register**. Der Grundkonflikt bleibt, weshalb die EU-Kommission ein
  **Vertragsverletzungsverfahren** eingeleitet hat: Für den Abschluss ist ausschließlich das
  Gesellschaftsrecht des Sitzstaats maßgeblich – kennt dieses keinen solchen Vertrag, ist die
  Organschaft dort von vornherein unerreichbar, so dass die deutsche Regelung faktisch als
  Marktzugangshindernis wirkt.
  Die **Mindestlaufzeit** von fünf **Zeitjahren** muss im Vertrag stehen und tatsächlich eingehalten
  werden; eine kürzere vereinbarte Laufzeit lässt die Organschaft scheitern. Entscheidend ist ihr
  **Beginn**: Sie läuft erst ab dem Wirtschaftsjahr, in dem **sämtliche** Voraussetzungen des
  § 14 Abs. 1 Satz 1 KStG erstmals erfüllt sind – der vertraglich gewollte Beginn bleibt unbeachtlich.
  Daraus folgt die wichtigste Klausel des gesamten Vertrags. Wer ein **festes Enddatum** vereinbart,
  trägt das Zeitrisiko des Registerverfahrens: Im Beispiel wird der Vertrag erst am 01.02.2026
  eingetragen, so dass von der Laufzeit bis zum 31.12.2029 nur die Jahre 2026 bis 2029 – also **vier**
  Zeitjahre – zählen und die Organschaft scheitert; bei einer Laufzeit bis zum 31.12.2030 wäre sie
  knapp erfüllt gewesen. Wer die Laufzeit dagegen **relativ** formuliert – Beginn im Wirtschaftsjahr
  der Eintragung, erstmalige Kündigung nach Ablauf von fünf Jahren –, verschiebt mit der Eintragung
  auch das Ende. Auf Billigkeit nach § 163 AO ist kein Verlass: Der BFH hat sie selbst dann versagt,
  wenn den Steuerpflichtigen **kein Verschulden** an der verspäteten Eintragung trifft, weil die
  Mindestlaufzeit ein Tatbestandsmerkmal und nicht bloß eine Verfahrensfrist ist.
  Gerechnet wird die Mindestlaufzeit in **60 Monaten**, also taggenau und unabhängig vom Rhythmus der
  Wirtschaftsjahre; fällt das Ende in ein laufendes Wirtschaftsjahr, wird schlicht **unterstellt**, die
  Organgesellschaft werde bei einer Kündigung umstellen – die Mindestlaufzeit ist eine reine
  **Rechengröße**. In **Umwandlungsfällen** zählt auch die Zeitspanne der steuerlichen Rückwirkung mit,
  in der die Organgesellschaft zivilrechtlich noch gar nicht bestand. Das zugehörige Beispiel ist der
  lehrreichste Fall des Abschnitts, weil dieselbe Fiktion für zwei Merkmale **verschieden** wirkt: Für
  die **Mindestlaufzeit** zählt die Zeit ab dem Rückwirkungsstichtag mit, für die **finanzielle
  Eingliederung** erst ab der wirksamen Gründung – die Fiktion trägt, wo es um eine Rechengröße geht,
  und trägt nicht, wo es um tatsächliche Beherrschung geht. Scheitert die Mindestlaufzeit, liegt eine
  **verunglückte Organschaft** vor; ein neuer Vertrag rettet nur die Zukunft und lässt die fünf Jahre
  **vollständig neu** beginnen. Im ersten Beispiel des Abschnitts geht die Rechnung der Quelle
  allerdings nicht auf: Zwischen dem 01.07.2025 und dem 30.06.2029 liegen **48 Monate** und damit vier
  Zeitjahre; fünf Zeitjahre endeten erst am 30.06.2030. Für die Aussage des Beispiels bleibt das ohne
  Bedeutung, weil auch dieser Tag nach der Umstellung in ein laufendes Wirtschaftsjahr fiele.
  Abzuführen ist der Betrag des **§ 301 AktG**, und zwar **betragsgenau** – sowohl ein Zuwenig als auch
  ein Zuviel ist ein **Durchführungsmangel**. Die fünf Positionen des Schemas lassen sich auf zwei
  Gedanken zurückführen: Die drei **Abzüge** schützen jeweils fremde Interessen – der
  **vororganschaftliche Verlustvortrag** darf nicht vom Organträger getragen werden, die **gesetzliche
  Rücklage** nach § 300 AktG dient dem Gläubigerschutz, die **sonstigen Gewinnrücklagen** dürfen nur
  unter den Voraussetzungen des § 14 Abs. 1 Nr. 4 KStG gebildet werden –, während die **Hinzurechnung**
  zurückgibt, was während der Organschaft zurückgelegt wurde. Das **BilMoG** hat dabei eine
  Asymmetrie geschaffen, die die Quelle offen benennt: § 301 AktG verweist ausdrücklich auf die
  Ausschüttungssperre des **§ 268 Abs. 8 HGB** für aktivierte selbst geschaffene immaterielle
  Wirtschaftsgüter und aktive latente Steuern, § 302 AktG dagegen nicht – im **Gewinnfall** mindert die
  Sperre die Abführung, im **Verlustfall** erhöht sie nach herrschender Meinung die Verlustübernahme
  nicht. Eine Äußerung der Finanzverwaltung steht aus.
  **Vorvertragliche** Gewinn- und Kapitalrücklagen unterliegen **nie** der Gewinnabführung, auch nicht
  bei späterer Auflösung; sie können nur außerhalb des Vertrags an die Anteilseigner ausgeschüttet
  werden. Der tragende Gedanke ist der Schutz der **Minderheitsgesellschafter**, die vor Beginn der
  Organschaft an einer Ausschüttung teilgehabt hätten – und er wirkt **typisierend**, also auch dann,
  wenn es gar keine Minderheitsgesellschafter gibt. Maßgeblich ist der Zeitpunkt der **Bildung** und
  nicht der Auflösung, weshalb die Rücklagen getrennt nach Entstehungszeit zu führen sind. Die
  Auszahlung ist eine gewöhnliche Gewinnausschüttung nach § 20 Abs. 1 Nr. 1 EStG und durchläuft die
  Verwendungsreihenfolge des § 27 Abs. 1 Satz 3 KStG, so dass auch eine Einlagenrückgewähr in Betracht
  kommt. Wird eine solche Rücklage **irrtümlich abgeführt**, ist das nicht durch § 301 AktG gedeckt und
  kostet die Anerkennung der Organschaft – seit Einführung der Heilungsregelung des § 14 Abs. 1 Nr. 3
  Satz 4 f. KStG immerhin nicht mehr zwangsläufig endgültig.
  Bei **Kapitalrücklagen** geht die Regel weiter und wird deshalb leicht verwechselt: Anders als bei
  Gewinnrücklagen kommt es auf den Zeitpunkt der Bildung **nicht** an – auch eine während der
  Organschaft gebildete Kapitalrücklage unterliegt bei ihrer Auflösung nicht der Gewinnabführung, weil
  § 301 AktG sie schlicht nicht einbezieht. Wirtschaftlich leuchtet das ein, weil sie aus **Einlagen**
  stammt und nicht aus erwirtschaftetem Gewinn.
  Die **tatsächliche Durchführung** ist Kerninhalt der Organschaft und verlangt der Sache nach **drei**
  Schritte, die je für sich einen Durchführungsmangel begründen können: Der Betrag muss **zutreffend
  ermittelt** sein – schon ein Bilanzierungsfehler genügt –, Forderung und Verbindlichkeit müssen zum
  Bilanzstichtag **gebucht** werden, und der Anspruch muss **zeitnah erfüllt** werden, also Geld
  fließen. Zulässig sind dabei die Umwandlung in ein **Darlehen** und die Verrechnung mit werthaltigen
  Gegenansprüchen, weil der Anspruch dann durch eine neue Rechtsbeziehung ersetzt wird; das bloße
  **Stehenlassen** genügt nicht. Eine feste Frist nennt die Quelle nicht, ihre Fußnote hält **3 bis 12
  Monate** für angemessen, und das anhängige Verfahren I R 37/22 könnte sie schärfen. Die beiden
  Listen der schädlichen und unschädlichen Tatbestände folgen einem gemeinsamen Maßstab: Schädlich ist,
  was den Betrag des § 301 AktG **verfälscht** – Abführung nicht dazugehöriger Beträge, Unterlassen
  gebotener Abzüge, unzulässige Zurückbehaltung –, unschädlich, was er **selbst vorsieht**. Fein
  unterscheidet die Quelle schließlich zwischen **Entstehung**, **Fälligkeit** und **Verzinsung**:
  Beide Ansprüche entstehen zum Bilanzstichtag, doch die **Verlustübernahme** wird sofort fällig, die
  **Gewinnabführung** erst mit der Bilanzerstellung. Für die Organschaft bleibt das folgenlos, weil die
  Verzinsung nur eine **vertragliche Nebenpflicht** ist und eine daraus folgende verdeckte
  Gewinnausschüttung im Organkreis als vorweggenommene Gewinnabführung ohnehin unschädlich wäre.
  Die **Heilungsvorschrift** des § 14 Abs. 1 Nr. 3 Sätze 4 ff. KStG entschärft eine Lage, die früher
  kaum tragbar war: Maßgeblich ist die Abführung, die sich bei **objektiv ordnungsgemäßer**
  Bilanzierung ergäbe – also der richtige, nicht der gebuchte Betrag –, so dass jeder Bilanzierungsfehler
  die Organschaft zunichtemachte, und zwar regelmäßig erst Jahre später durch eine Betriebsprüfung, mit
  Rückwirkung auf alle Jahre wegen der dann gerissenen Mindestlaufzeit. Die Gesetzesbegründung geht von
  einem **weiten Fehlerbegriff** aus: Erfasst sind auch Fehler, die den Bilanzansatz gar nicht
  berühren – der unterlassene Ausgleich mit einem vororganschaftlichen Verlust ist eine Frage der
  Verwendungsrechnung, die Abführung vorvertraglicher Rücklagen eine Frage des Beschlusses. Nicht die
  **Art** des Fehlers entscheidet also, sondern seine **Wirkung auf den Betrag**. Zwei Ausnahmen bleiben,
  und ihnen liegt ein gemeinsamer Grund zugrunde, den die Quelle nicht ausspricht: Beim Verstoß gegen
  § 14 Abs. 1 Nr. 4 KStG und bei der **unterlassenen Buchung** fehlt es nicht an der Richtigkeit des
  Abschlusses, sondern am **Willen zur Durchführung** – ein solcher Mangel lässt sich nachträglich nicht
  beseitigen. Die Fehlerabstufung ist schließlich dreistufig: Ein **nichtiger** Abschluss nach § 256
  AktG gilt als nicht festgestellt und ist von der Heilung ausgenommen; ein gewichtiger, aber nicht
  nichtigkeitsbegründender **GoB-Verstoß** ist gerade ihr Anwendungsfall; und dazwischen steht die
  **Heilung durch Zeitablauf** nach § 256 Abs. 6 AktG, wonach Nichtigkeitsgründe nach **drei Jahren**
  nicht mehr geltend gemacht werden können – wer einen nichtigen Abschluss vorfindet, prüft deshalb
  zuerst das Datum.
  Eigentümlich ist der Aufbau der Norm, weil sie zwei Maßstäbe verbindet, die sonst als Gegensätze
  gelten: Für die **Höhe** der Abführung gilt der **objektive** Fehlerbegriff, für die **Heilung**
  dagegen ein **subjektives** Element – der Fehler darf bei kaufmännischer Sorgfalt nicht erkennbar
  gewesen sein. Wer ihn kannte oder hätte kennen müssen, kann handelsrechtlich korrigieren, rettet
  damit aber die Organschaft nicht: Die Heilung schützt den sorgfältigen, nicht den nachlässigen
  Steuerpflichtigen. Den Nachweis führt ein **uneingeschränktes Testat**, und zwar mit **unwiderlegbarer**
  Wirkung – die Sorgfaltsfrage ist dann nicht mehr verhandelbar, auch nicht für das Finanzamt. Die
  Kehrseite ist ebenso scharf: Ein **eingeschränktes** Testat ist **immer** schädlich, ausdrücklich auch
  bei Einschränkungen zu ganz anderen Fragen, und die Aufzählung der Nachweismittel ist
  **abschließend**. Für nicht prüfungspflichtige Gesellschaften bleibt damit nur die
  **IDW-7-Bescheinigung**, deren Einholung faktisch Pflicht wird. Eine Falle betrifft internationale
  Konzerne: Nutzt die Organgesellschaft die Befreiung des **§ 264 Abs. 3 HGB**, ist in den
  IFRS-Konzernabschluss gar kein HGB-Abschluss eingegangen, und die Fiktion greift nicht – in
  Organschaftsfällen ist der handelsrechtliche Abschluss deshalb **immer** zu erstellen.
  Die **Korrekturfrist** bürdet dem Steuerpflichtigen ein erhebliches Risiko auf, und die Quelle sagt
  das ungewöhnlich deutlich. Korrigiert werden muss spätestens im nächsten nach der **Beanstandung**
  aufzustellenden Jahresabschluss beider Gesellschaften, wobei ein Wahlrecht zwischen Korrektur in
  laufender Rechnung und im Fehlerjahr besteht. Die Beanstandung setzt die Frist in Gang, ist aber
  **kein Verwaltungsakt** nach § 118 AO und damit nicht anfechtbar; ein Rechtsbehelf gegen die
  Feststellung **unterbricht die Frist nicht**. Wer die Auffassung des Finanzamts für falsch hält, muss
  also vorsorglich korrigieren und den Streit getrennt führen. Entlastend wirkt die
  **Wesentlichkeitsschwelle**: Was handelsrechtlich nicht korrigiert werden muss, verlangt auch das
  Steuerrecht nicht – die Beurteilung obliegt dem **Abschlussprüfer**, bindet das Finanzamt aber nicht.
  Erfasst sind damit nur **wesentliche** Fehler, die der Prüfer **nicht erkannt** hat.
  **Verstoß** und **Beendigung** sind sauber zu trennen: Jener ist ein Mangel in der **Durchführung** des
  fortbestehenden Vertrags und nach den vorstehenden Regeln **heilbar**, diese beseitigt den **Vertrag
  selbst** und lässt sich nur durch einen **wichtigen Grund** rechtfertigen. Bei beiden ist die Zäsur
  nach fünf Jahren die folgenreichste Unterscheidung des Kapitels: **Innerhalb** der Mindestlaufzeit
  vernichtet ein Verstoß die Organschaft **von Anfang an** – denn wird die Mindestlaufzeit gerissen,
  fehlt sie rückwirkend –, **danach** wirkt er nur auf den Beginn des laufenden Jahres zurück. Leicht
  überlesen wird, wovon die Zukunft abhängt: Der Vertrag besteht **unverändert fort**, und die
  Organschaft lebt ab dem Folgejahr wieder auf, wenn seine **Restlaufzeit** noch mindestens fünf Jahre
  beträgt – ein weiteres Argument für eine großzügige Laufzeitgestaltung.
  Der **wichtige Grund** für eine vorzeitige Beendigung ist nach der Präzisierung des BFH ein rein
  **steuerlicher** Begriff, weil dem Zivilrecht eine Mindestlaufzeit des Gewinnabführungsvertrags
  **unbekannt** ist. Daraus folgt der Prüfstein: Eine Beendigung, die **ausschließlich steuerlich
  motiviert** ist und die fünf Jahre unterlaufen soll, genügt nie. Anerkannt sind Vorgänge, die die
  Organschaft ohnehin gegenstandslos machen – Veräußerung oder Einbringung der Beteiligung,
  Umwandlung, Liquidation, Insolvenz – sowie eine ernsthafte **Störung des Vertragsverhältnisses**. Am
  schärfsten ist die Gegenausnahme: Stand die vorzeitige Beendigung schon **bei Vertragsschluss** fest,
  ist die Anerkennung **von Anfang an** zu versagen. Und der wichtige Grund rettet nur die
  **Mindestlaufzeit**, nicht die **tatsächliche Durchführung** – war der Vertrag in den Vorjahren
  mangelhaft durchgeführt, bleibt es bei der Nichtanerkennung, wie der BFH 2022 bestätigt hat.
  Bei **Umwandlungen** ist die Aussage feiner, als sie klingt: Veräußerung und Einbringung der
  Organbeteiligung sind **unverändert** wichtige Gründe, für Umwandlungen gilt dagegen nur eine
  **Regelvermutung**, die kippt, wenn erhebliche **außersteuerliche Gründe** nicht erkennbar sind – bei
  konzerninternen Umwandlungen innerhalb der Mindestlaufzeit sollten sie deshalb dokumentiert werden.
  Eine **unterjährige Kündigung** wirkt nach § 14 Abs. 1 Nr. 3 Satz 3 KStG auf den **Beginn des
  Wirtschaftsjahres** zurück, so dass dieses Jahr entfällt; die Norm ist eine reine
  **Rechtssicherheitsnorm**, weil im Gesellschaftsrecht ungeklärt ist, wann eine unterjährige
  Beendigung wirkt, und sie greift nur, wenn der Vertrag zivilrechtlich überhaupt unterjährig beendet
  werden kann. Erfolgt die Beendigung **nach** Ablauf der Mindestlaufzeit, entfällt die Organschaft nur
  ab dem Jahr der Beendigung, und zwar auch **ohne** wichtigen Grund.
  **Liquidation und Insolvenz** beenden den Vertrag mit Verfahrenseröffnung und gelten als wichtiger
  Grund, so dass die Vorjahre unberührt bleiben – vorausgesetzt, der Vertrag war dort ordnungsgemäß
  durchgeführt, was gerade in der Insolvenz oft nicht der Fall ist. Der **Abwicklungsgewinn** fällt
  dann bei der Organgesellschaft selbst an, weil ohne Vertrag keine Zurechnung mehr stattfindet; im
  Gegensatz dazu unterliegt bei einer **Aufspaltung** nach § 123 UmwG der **Übertragungsgewinn** noch
  der Abführung und ist beim Organträger zu versteuern. Muss die Organgesellschaft schließlich nach
  **§ 73 AO** für Steuerschulden des Organträgers haften, kann sie den Aufwand **nicht abziehen**: Die
  Inanspruchnahme beruht auf der gesellschaftsrechtlichen Verbindung, so dass die Zahlung eine
  **verdeckte Gewinnausschüttung** ist – wirtschaftlich trägt sie damit die Steuer auf fremdes
  Einkommen ohne jede steuerliche Entlastung. Damit ist auch Kapitel 2 vollständig.
  Das dritte Kapitel beginnt mit dem **Feststellungsverfahren** des § 14 Abs. 5 KStG, das mehr leistet,
  als sein Wortlaut vermuten lässt: Festgestellt werden Organeinkommen, Mehr- und Minderabführungen,
  Aufwendungen nach § 15 Nr. 2 KStG, Zinsgrößen nach § 15 Nr. 3 KStG und Anrechnungsbeträge nach
  § 19 Abs. 5 KStG – und der Bescheid **dokumentiert zugleich das Vorliegen der Organschaft**. Das
  Finanzamt der Organgesellschaft prüft dafür jährlich sämtliche Tatbestandsmerkmale; bei einem
  Verstoß ergeht ein **negativer Feststellungsbescheid**. Weil der Bescheid für beide Gesellschaften
  **Grundlagenbescheid** nach § 171 Abs. 10 und § 175 Abs. 1 Nr. 1 AO ist, wird der Streit dort und
  nicht in den Folgebescheiden geführt: Ein Einspruch gegen den eigenen Körperschaftsteuerbescheid ist
  **unbegründet**, soweit er die Ermittlung des Organeinkommens angreift, und beide Gesellschaften sind
  gegen die Feststellung einspruchsbefugt. Örtlich zuständig ist allein das **Betriebsfinanzamt der
  Organgesellschaft**, die auch allein erklärungspflichtig ist – die Befreiung des Organträgers gilt
  allerdings nur, solange sie ihre Pflicht **tatsächlich erfüllt**. Für die Gewerbesteuer gilt das
  Verfahren nicht; dort greift **§ 35b GewStG**.
  Ausgangsgröße der Einkommensermittlung bei der Organgesellschaft ist der Jahresüberschuss **vor**
  Abführung. Weil die Abführungsverpflichtung handelsrechtlich als **Aufwand** gebucht wird und die
  Verlustübernahme spiegelbildlich als Ertrag, beträgt der Bilanzgewinn regelmäßig **0 €** und taugt
  nicht als Ausgangsgröße – der erste Schritt ist deshalb stets die **Eliminierung** der gebuchten
  Abführung nach R 7.1 Zeile 21 KStR; wer ihn vergisst, ermittelt ein Organeinkommen von null. Das
  Beispiel zeigt anschließend den Kern des gesamten Kapitels in einer einzigen Zahl: Abgeführt werden
  **500.000 €** – der handelsrechtliche Gewinn –, zugerechnet werden **510.000 €** – das steuerliche
  Einkommen; die Differenz sind die nicht abziehbaren Betriebsausgaben. Genau solche Abweichungen
  führen in anderer Gestalt zu den später behandelten Mehr- und Minderabführungen.
  Beim **vororganschaftlichen Verlustvortrag** greifen drei zuvor einzeln behandelte Regeln ineinander.
  **Handelsrechtlich** zwingt § 301 AktG die Organgesellschaft, ihn **selbst** auszugleichen, so dass
  im Beispiel nur 500.000 € abgeführt werden dürfen – eine höhere Abführung wäre ein
  Durchführungsmangel. **Steuerlich** bleibt der Verlust ungenutzt, weil § 15 Satz 1 Nr. 1 KStG den
  Verlustabzug bei der Organgesellschaft ausschließt; zugerechnet werden die vollen 1.010.000 €. Und
  **bilanziell** entsteht aus der Differenz zwischen abgeführten 500.000 € und steuerbilanziellem
  Gewinn von 1.000.000 € eine **Minderabführung** von 500.000 €, die nach § 14 Abs. 3 KStG als
  **vororganschaftlich** gilt, weil sie auf einem Verlust aus vororganschaftlicher Zeit beruht. Ihre
  Rechtsfolge ist eine **Einlage**: Beim Organträger erhöhen sich die **Anschaffungskosten** der
  Beteiligung, bei der Organgesellschaft der Bestand des **steuerlichen Einlagekontos**. Der Verlust
  wird damit nicht vernichtet, sondern umgewandelt – er schlägt sich erst bei einer späteren
  Veräußerung oder Rückgewähr nieder.
  Das **Einkommensermittlungsschema** besteht aus drei Blöcken, deren Reihenfolge nicht beliebig ist:
  Zuerst wird die gebuchte Abführung **eliminiert**, dann folgt die gewöhnliche Einkommensermittlung
  einer Kapitalgesellschaft mit Gewinnkorrekturen, vorweggenommener Gewinnabführung, verdeckter
  Einlage, nicht abziehbaren Betriebsausgaben und dem zweigeteilten Spendenabzug, und schließlich wird
  das **Organeinkommen** abgezogen. Das eigene Einkommen der Organgesellschaft beträgt danach
  **regelmäßig null**; die einzige Ausnahme nennt das Schema selbst – **Ausgleichszahlungen** nach
  § 16 KStG.
  Eine echte **verdeckte Gewinnausschüttung** ist bei der Organgesellschaft begrifflich kaum denkbar,
  weil sie ihren ganzen Gewinn ohnehin abführt; der Vorteil wird dem Organträger nicht **entzogen**,
  sondern nur **vorweg** und auf anderem Weg gewährt. Genau das erklärt, warum die **tatsächliche
  Durchführung unberührt** bleibt – der Organträger erhält im Ergebnis die zutreffende Abführung
  einschließlich des Vorteils. Die Korrektur erfolgt gleichwohl nach denselben Regeln, nur **analog**
  § 8 Abs. 3 Satz 2 KStG und unter der Bezeichnung **vorweggenommene Gewinnabführung**: im Beispiel
  500.000 € gemeiner Wert abzüglich 10.000 € Gegenleistung, also 490.000 €, die das Organeinkommen auf
  590.000 € erhöhen. Spiegelbildlich wird eine **verdeckte Einlage** nach § 8 Abs. 3 Satz 3 KStG
  abgezogen und erhöht das Einlagekonto; im Beispiel heben sich der Ertrag aus der Einbuchung des
  Grundstücks und der Abzug in Höhe von je 500.000 € auf, so dass es beim Organeinkommen von
  100.000 € bleibt. Die **materielle Korrespondenz** des § 8 Abs. 3 Satz 4 KStG verhindert dabei, dass
  der Abzug greift, soweit der Vorteil beim Organträger gewinnmindernd berücksichtigt wurde.
  Der **Spendenabzug** durchbricht schließlich den Grundgedanken der Organschaft, was im Schema
  sichtbar wird: Hinzurechnung und Abzug stehen **vor** der Zurechnung des Organeinkommens. Obwohl die
  Einkommen zusammengerechnet werden, bleibt der Spendenabzug **getrennt**, und der Höchstbetrag
  bemisst sich allein nach den Verhältnissen der **Organgesellschaft**. Das wirkt in beide Richtungen:
  Eine ertragsstarke Organgesellschaft schafft eigenes Abzugsvolumen, eine ertragsschwache kann ihre
  Spenden nur in einen **Spendenvortrag** nach § 9 Abs. 1 Nr. 2 Satz 9 KStG einstellen – der ihr
  allerdings erhalten bleibt, weil § 15 Satz 1 Nr. 1 KStG nur § 10d EStG ausschließt.
  Die **Nichtgeltung von Vorschriften** zerfällt in zwei sehr verschiedene Regelungen. Der
  **Ausschluss des § 10d EStG** betrifft den **vororganschaftlichen** Verlust. Er wird nicht
  vernichtet, sondern **eingefroren**: Während der Organschaft ist er weder bei der Organgesellschaft
  abziehbar – sie hat regelmäßig ohnehin kein eigenes Einkommen – noch auf den Organträger
  übertragbar, denn § 15 Satz 1 Nr. 1 Satz 2 KStG ordnet ausdrücklich an, dass er beim Organträger
  nicht abgezogen werden darf. Erst nach Beendigung der Organschaft lebt er wieder auf. Diese Sperre
  ist die **Kehrseite** der handelsrechtlichen Regelung: § 301 AktG zwingt die Organgesellschaft, den
  Verlustvortrag zunächst selbst auszugleichen, so dass er wirtschaftlich schon einmal verbraucht
  ist; ein zweiter, steuerlicher Abzug beim Organträger wäre eine Doppelbegünstigung. Gefährlich ist
  die **Wartezeit**: Ein Anteilseignerwechsel nach **§ 8c KStG** während des Einfrierens vernichtet
  den Verlust endgültig – ein erhebliches Risiko, weil eine Organschaft fünf Jahre bindet. Dieselbe
  Sperre erfasst die Verluste nach **§ 15 Abs. 4 EStG** und **§ 15a EStG** sowie den
  fortführungsgebundenen Verlust nach **§ 8d KStG**, der dadurch **doppelt** gebunden ist: eingefroren
  wie jeder andere Verlust und zusätzlich weiterhin an die schädlichen Ereignisse des § 8d Abs. 2
  KStG gefesselt – im dritten Beispiel rettet der § 8d-Antrag 1.000.000 €, die dann aber jahrelang
  unbenutzbar bleiben. **Spiegelbildlich** gilt für Verluste, die **während** der Organschaft
  entstehen: Sie erreichen die Ebene des Verlustvortrags gar nicht erst, weil der Organträger sie
  nach § 302 AktG ausgleicht und ihm das negative Einkommen zugerechnet wird.
  Die **Bruttomethode** des § 15 Satz 1 Nr. 2 KStG löst ein ganz anderes Problem, nämlich ein
  **Zurechnungs**problem. Weil das Organeinkommen dem Organträger zugerechnet wird, dessen Rechtsform
  aber über die Behandlung von Beteiligungserträgen entscheidet, wäre eine Anwendung des § 8b KStG
  schon bei der Organgesellschaft eine Vorentscheidung nach der **falschen** Rechtsform. § 15 Satz 1
  Nr. 2 Satz 1 KStG schließt ihn deshalb bei der Organgesellschaft aus, das Ergebnis geht **brutto**
  über, und erst **beim Organträger** entscheidet Satz 2 nach dessen Verhältnissen: Freistellung nach
  § 8b KStG bei einer Kapitalgesellschaft, **Teileinkünfteverfahren** nach § 3 Nr. 40 EStG bei einer
  natürlichen Person, bei einer Personengesellschaft gesellschafterbezogen gemischt. Die
  **Streubesitzgrenze** des § 8b Abs. 4 KStG prüft Satz 4 **getrennt** für jede Ebene – die
  Beteiligungen von Organträger und Organgesellschaft werden also **nicht** zusammengerechnet. Das
  wirkt in beide Richtungen: Im zweiten Beispiel bleiben 10 % beim Organträger und 8 % bei der
  Organgesellschaft je für sich zu beurteilen, obwohl sie zusammen 18 % ergäben. Die
  **Kapitalertragsteuer**, die die Organgesellschaft wirtschaftlich getragen hat, rechnet § 19 Abs. 5
  KStG beim **Organträger** an – die Anrechnung folgt damit derselben Verlagerung wie das Einkommen.
  Das erste Beispiel zeigt, wie das zu einem **negativen** Ergebnis führen kann: Das Organeinkommen
  beträgt 50.000 € (100.000 € Ausschüttung ./. 50.000 € Betriebsausgaben), beim Organträger werden
  aber 95.000 € freigestellt, so dass ./. 45.000 € verbleiben – die Betriebsausgaben bleiben in
  voller Höhe abziehbar, während der Ertrag fast vollständig steuerfrei ist.
  Die **Zinsschranke** behandelt die Quelle ausdrücklich nur als Hinweis – sie ist im KSt-Skript
  Teil V entfaltet –, folgt organschaftlich aber demselben Muster wie der Verlustabzug. **§ 15 Satz 1
  Nr. 3 Satz 1 KStG** schließt sie **bei der Organgesellschaft** aus, so dass deren Zinsaufwendungen
  und Zinserträge i.S. des § 4h Abs. 3 EStG **unverändert** im Organeinkommen bleiben; sie werden
  ebenso wie die Bestandteile des steuerlichen EBITDA über den Feststellungsbescheid nach § 14 Abs. 5
  KStG an den Organträger **mitgeteilt**. Der Ausschluss ist deshalb **keine Befreiung**, sondern nur
  eine Verschiebung der Prüfungsebene – die Ermittlungspflicht bleibt vollständig bestehen. Ein
  **vororganschaftlicher Zinsvortrag** und ebenso ein vororganschaftlicher **EBITDA-Vortrag** bleiben
  wie der Verlust **eingefroren** und leben erst nach Beendigung der Organschaft wieder auf. Der
  **Rechtsgrund** ist allerdings ein anderer als beim Verlust: Dort folgt die Sperre aus der Kürzung
  nach § 301 AktG, hier aus der **Betriebsfiktion** – der alte Vortrag gehört zu einem Betrieb, den
  es als eigenständigen nicht mehr gibt.
  Geprüft wird allein **beim Organträger**, weil der Organkreis nach § 15 Satz 1 Nr. 3 Satz 2 KStG
  als **ein Betrieb** gilt und Satz 3 sämtliche Zinsaufwendungen und Zinserträge dort zusammenführt.
  Diese Fiktion wirkt in **beide Richtungen**. Günstig ist sie, wo sie Zinsaufwand der einen mit
  Zinsertrag der anderen Gesellschaft **saldiert** und wo sie die Beteiligung des Organträgers an
  seinen eigenen Organgesellschaften für die stand-alone-Prüfung **ausblendet** – ohne diese
  Klarstellung wäre jede Organschaft schon deshalb konzernzugehörig. Ungünstig ist sie, wo sie die
  **Freigrenze** nur **einmal** für den gesamten Kreis gewährt. Die drei Ausnahmetatbestände des
  § 4h Abs. 2 EStG bauen **stufenweise** aufeinander auf, und jede spätere Stufe ist aufwendiger als
  die vorige: die **Freigrenze** (Buchst. a) ist eine einzige Zahl; die **stand-alone-Betrachtung**
  (Buchst. b) verlangt die Beteiligungsstruktur und scheitert an jeder Beteiligung von mindestens
  25 % – dann liegt eine nahestehende Person i.S. des § 1 Abs. 2 AStG vor – ebenso wie an jeder
  ausländischen Betriebsstätte; die **Konzernklausel** (Buchst. c) schließlich verlangt einen
  Konzernabschluss und bei einer Organträger-Kapitalgesellschaft zusätzlich den **10%-Check** des
  § 8a Abs. 3 KStG. Bei ihr kehrt sich die gewohnte Anschauung um: Wer **keinem Konzern** angehört,
  hat **keine Vergleichsgröße** für den **Eigenkapitalvergleich** und kann ihn deshalb gar nicht
  führen – die Zinsschranke greift also gerade dann. Im Beispiel treffen 3.000.000 € Zinsaufwand der
  Organgesellschaft und 1.000.000 € des Organträgers zu einem **Nettozinsaufwand von 4.000.000 €**
  zusammen: Erst die Zusammenfassung überschreitet die Freigrenze, die der Zinsaufwand der
  Organgesellschaft allein genau erreicht hätte. Weil beide Anteilseigner zu je 50 % beteiligt sind
  und die B-GmbH in keinen Konzernabschluss einbezogen wird, greift keine der drei Ausnahmen; da
  **§ 8a Abs. 2 KStG a.F.** ersatzlos aufgehoben ist, entscheidet allein das verrechenbare EBITDA
  über den Umfang des Abzugsverbots und damit über einen Zins- oder EBITDA-Vortrag.
  Die **Ausgleichszahlungen** nach § 16 KStG sind die zivilrechtliche Kehrseite der vollständigen
  Abführung. Weil § 301 AktG den ganzen Jahresüberschuss dem Organträger zuweist, bleibt für eine
  Dividende der Minderheitsgesellschafter **nichts übrig**; ihre Beteiligung wäre ohne Ausgleich
  wirtschaftlich entwertet. **§ 304 AktG** gibt ihnen deshalb einen **Ausgleichsanspruch**, und die
  Sanktionen sind scharf: Fehlt er im Vertrag, ist dieser bei AG und KGaA nach § 304 Abs. 3 AktG
  **nichtig**; tritt ein außenstehender Gesellschafter erst während der Organschaft hinzu, **endet**
  der Vertrag nach § 307 AktG von selbst zum Ende des Wirtschaftsjahres – besonders gefährlich, weil
  der notwendige Neuabschluss die **Mindestlaufzeit neu** beginnen lässt. Bei der **GmbH** löst die
  Quelle den zivilrechtlichen Streit mit einem prozessualen Argument: Nicht die Rechtslage
  entscheidet, sondern dass sie **unklar** ist – und eine im Zeitpunkt des Vertragsschlusses ungeklärte
  Zivilrechtsfrage darf nach der Rechtsprechung des BFH nicht zu Lasten des Steuerpflichtigen wirken.
  Die Organschaft ist dort also auch **ohne** vereinbarte Ausgleichszahlung anzuerkennen.
  Der Begriff des **außenstehenden Gesellschafters** entscheidet über **zwei gegenläufige Risiken**,
  die beide die Organschaft treffen: Wird **nicht** gezahlt, obwohl der Gesellschafter außensteht,
  droht bei AG und KGaA die Nichtigkeit; wird gezahlt, obwohl er über Konzernbeziehungen verbunden
  ist, liegt ein **Durchführungsmangel** vor, weil dann nicht mehr der **ganze** Gewinn i.S. des
  § 301 AktG abgeführt wird. Zwischen beiden Fehlern liegt allein die Einordnung eines
  Gesellschafters – und für sie gibt es, wie die Quelle ausdrücklich einräumt, **keine abschließende
  Definition**. Nicht außenstehend ist, wer zu 100 % in den Konzern einbezogen ist, wessen Vermögen
  mit dem des anderen Vertragsteils eine **wirtschaftliche Einheit** bildet oder wessen Erträge diesem
  zufließen; nach einer Schrifttumsmeinung genügt sogar ein **faktisches Konzernverhältnis**. Die
  Quelle formuliert deshalb **negativ** und rät damit zur Prüfung in der sicheren Richtung.
  Die **Bemessung** folgt § 304 Abs. 2 Satz 1 AktG: Die Zahlung muss aus einem **festen Betrag**
  bestehen – der **Garantiedividende** – und ist auch in **Verlustjahren** zu leisten. Der außenstehende
  Gesellschafter ist damit besser gestellt als ein gewöhnlicher Anteilseigner, während der Organträger
  im selben Jahr den Verlust nach § 302 AktG ausgleicht. Eine **ausschließlich variable** Bemessung am
  Gewinn der **Organgesellschaft** wird nicht anerkannt, eine am Gewinn des **Organträgers** dagegen
  schon – der Unterschied beantwortet eine einzige Frage: **wessen** Gewinn gemindert wird. Die erste
  verteilt das Ergebnis der Organgesellschaft um und verletzt § 301 AktG, die zweite belastet den
  Empfänger des Gewinns, nicht dessen Quelle. Der Festbetrag ist deshalb kein Selbstzweck, sondern das
  Mittel, die Zahlung vom Ergebnis der Organgesellschaft **abzukoppeln**.
  Die **gemischte** Ausgleichszahlung aus Festbetrag und variablem Zuschlag rettet **§ 14 Abs. 2 KStG**
  mit einer **Durchführungsfiktion** – ein seltener Fall, in dem der Gesetzgeber eine
  Verwaltungsauffassung **gegen den BFH** in Gesetzesform gießt. Die Norm prüft gar nicht mehr, ob der
  ganze Gewinn abgeführt wurde, sondern setzt an dessen Stelle eine **betragsmäßige Obergrenze**: den
  Gewinnanteil, der dem außenstehenden Gesellschafter **ohne** Organschaft zugestanden hätte. Deren
  Maßstab ist eine **doppelte Fiktion** – der handelsrechtliche Gesamtgewinn **vor Abführung** und
  **ohne Annahme einer Organschaft**, ein Ergebnis also, das in keiner Bilanz steht. Maßgeblich ist
  allein die **Nominalbeteiligung**, so dass disquotale Gewinnverteilungsabreden den Höchstbetrag nicht
  anheben können, und er ist **für jedes Wirtschaftsjahr erneut** zu berechnen. Hinzu kommt der
  **Kaufmannstest** des § 14 Abs. 2 Satz 3 KStG, der unter fremden Dritten regelmäßig erfüllt ist. Wird
  die variable Komponente in einem Jahr **nicht gezahlt**, ist § 14 Abs. 2 KStG dort nicht anwendbar –
  keine Sanktion, sondern das Gegenteil: Gezahlt wurde nur der ohnehin unschädliche Festbetrag. Wird
  der Höchstbetrag dagegen **überschritten**, ist das ein Durchführungsmangel, der **innerhalb der
  Mindestlaufzeit** auf sämtliche Vorjahre zurückwirkt (R 14.5 Abs. 8 KStR) – ein erhebliches Risiko,
  weil ein unerwartet schlechtes Ergebnis eine seit Jahren unveränderte Vereinbarung erstmals über die
  Grenze treten lassen kann. Eine vertragliche Begrenzungsklausel liegt deshalb nahe.
  Bei den **Auswirkungen** der Ausgleichszahlung greifen **zwei** Korrekturen ineinander, die
  sorgfältig zu trennen sind, weil sie verschiedene Personen und sogar verschiedene Jahre betreffen.
  **§ 4 Abs. 5 Nr. 9 EStG** macht die Zahlung zur **nichtabziehbaren Betriebsausgabe** und trifft
  **denjenigen, der sie leistet** – die Organgesellschaft oder den Organträger. **§ 16 KStG** weist
  dagegen **immer der Organgesellschaft** ein eigenes Einkommen von **20/17** der Ausgleichszahlungen
  zu, gleichgültig wer gezahlt hat. Nur wenn die Organgesellschaft selbst leistet, laufen beide
  Vorschriften bei derselben Person zusammen. Der Bruch **20/17** ist dabei keine willkürliche Größe,
  sondern die **Umkehrung** der Körperschaftsteuerbelastung: Die Zahlung kann nur aus **versteuertem**
  Einkommen stammen, von einem Einkommen x bleiben nach 15 % noch 17/20 x übrig, also beträgt das
  zugehörige Einkommen 20/17 der Zahlung. Die Probe bestätigt es – 58.824 € abzüglich 8.824 €
  Körperschaftsteuer ergeben genau die 50.000 € Ausgleichszahlung; der Solidaritätszuschlag von
  485 € ist im Bruch **nicht** berücksichtigt.
  Zeitlich fallen die beiden Korrekturen auseinander: Die Hinzurechnung folgt dem **Bilanzrecht** und
  greift schon mit der **Passivierung**, die Besteuerung nach § 16 KStG folgt dem **Abflussprinzip**
  und greift erst mit der **Zahlung**, weil das Gesetz von „geleisteten“ Ausgleichszahlungen spricht.
  Dass das Einkommen **stets** bei der Organgesellschaft verbleibt, begründet die Quelle ausdrücklich:
  Die Belastung darf sich nicht nach der **Rechtsform des Organträgers** richten – sonst hinge die
  Steuer auf denselben Vorgang davon ab, ob dieser eine Kapitalgesellschaft oder eine natürliche
  Person ist. Aus demselben Grund mindert die entstehende Steuerschuld in **beiden** Fällen die
  **Gewinnabführung**. Als Ausgleichszahlung gilt nach R 14.6 Abs. 4 Satz 4 KStR auch eine **vGA** an
  den außenstehenden Gesellschafter. Bemerkenswert ist der **Verlustfall**: Die Organgesellschaft
  versteuert die 20/17 **unabhängig** von ihrem übrigen Ergebnis, hat also ein positives eigenes
  Einkommen, während dem Organträger gleichzeitig ein negatives Organeinkommen zugerechnet wird; ein
  **vororganschaftlicher** Verlustvortrag hilft ihr nicht, weil § 15 Satz 1 Nr. 1 KStG den Abzug auch
  gegen dieses Einkommen sperrt. Die Ausgleichszahlung ist damit der praktisch wichtigste Fall, in dem
  eine Organgesellschaft überhaupt eigene Körperschaftsteuer zahlt.
  Die **Abwandlung** – Zahlung durch den Organträger – stellt die Quelle in **zwei** Rechenwegen dar,
  die zu **verschiedenen** Organeinkommen führen: 1.050.485 € und 1.000.485 €, also genau um die
  50.000 € auseinander. Beim Organträger gleichen sie sich wieder aus, weil der erste Weg die
  Ausgleichszahlung „gegenläufig“ wieder abzieht; beide enden bei 1.000.485 €. Konsequent ist
  allerdings nur der **zweite** Weg, denn zahlt der Organträger, ist bei der Organgesellschaft **gar
  kein Aufwand gebucht**, der hinzuzurechnen wäre – so sagt es die Quelle unmittelbar zuvor selbst.
  Weil der Feststellungsbescheid nach § 14 Abs. 5 KStG nur **einen** Betrag ausweisen kann, ist die
  Abweichung nicht bloß rechnerischer Natur; die Quelle löst sie nicht auf. Sämtliche Zahlen beider
  Fälle sind unabhängig nachgerechnet und gehen auf.
  **Kapitalertragsteuer und Einlagekonto** folgen aus einem einzigen Satz, den die Quelle ausdrücklich
  ausspricht: Die Ausgleichszahlung ist rechtlich **stets eine Leistung der Organgesellschaft**,
  gleichgültig aus wessen Kasse sie fließt. Daraus ergibt sich zwanglos jede Einzelfolge – **sie**
  schuldet und meldet die Kapitalertragsteuer nach § 43 Abs. 1 Satz 1 Nr. 1 EStG, **ihr**
  Einlagekonto wird verwendet, und maßgebend ist dessen Bestand zum **Ende des Vorjahres**, selbst
  wenn der Organträger auszahlt. Dessen Zahlung ist nur ein **abgekürzter Zahlungsweg**, weil sie
  wirtschaftlich aus der Gewinnabführung stammt. Für denselben Vorgang nennt das Skript damit **vier**
  Bezugszeitpunkte, die in der Klausur auseinanderzuhalten sind: die **Passivierung** (§ 4 Abs. 5
  Nr. 9 EStG), der **Abfluss** (§ 16 KStG), der **Zufluss** beim Gesellschafter (Kapitalertragsteuer,
  § 44 Abs. 1 Satz 2 EStG) und das **Vorjahresende** (Einlagekonto).
  Beim **Minderheitsgesellschafter** ist die Zahlung eine Einnahme nach § 20 Abs. 1 Nr. 1 EStG, deren
  Behandlung sich nach **seiner** Rechtsform richtet: Steuerfreiheit nach § 8b Abs. 1 KStG mit dem
  Vorbehalt des § 8b Abs. 4 KStG bei der Kapitalgesellschaft, Teileinkünfteverfahren oder
  Abgeltungsteuer bei der natürlichen Person. Das ist ein aufschlussreicher **Gegensatz** zur Ebene
  der Organgesellschaft, wo § 16 KStG gerade dafür sorgt, dass die Belastung **nicht** von der
  Rechtsform abhängt – derselbe Vorgang wird auf der einen Seite rechtsformneutral, auf der anderen
  rechtsformabhängig besteuert. Rechnet man beide Ebenen zusammen, zeigt sich der Zweck des Bruchs
  20/17: Vorbelastung auf Gesellschaftsebene, begünstigte Erfassung beim Empfänger – die
  Ausgleichszahlung wird also **genau wie eine Dividende** behandelt, was dem Minderheitenschutz des
  § 304 AktG entspricht. Weil die Organgesellschaft regelmäßig **keinen ausschüttbaren Gewinn** hat,
  ist dabei die **Einlagenrückgewähr** nicht die Ausnahme, sondern der Normalfall: Die Zahlung mindert
  zunächst die **Anschaffungskosten** und verschiebt die Belastung; ein **Überhang** führt zu einem
  Veräußerungstatbestand nach § 17 Abs. 4 EStG oder §§ 15, 16 EStG, ohne dass etwas veräußert wurde.
  Nur bei Anteilen i.S. des § 20 Abs. 2 EStG entstehen stattdessen negative Anschaffungskosten.
  **Gewinnausschüttungen** der Organgesellschaft sind trotz vollständiger Abführung in **fünf** Fällen
  möglich, und die Aufzählung wirkt nur auf den ersten Blick zusammengewürfelt: Erfasst ist genau das,
  was der **Abführungspflicht des § 301 AktG nicht unterliegt**. Bei Ausgleichszahlungen und vGA an
  Minderheitsgesellschafter ist es die gesetzliche Ausnahme des § 16 KStG; bei den
  **vororganschaftlichen** Gewinn- und Kapitalrücklagen der Minderheitenschutz, der sie der Abführung
  dauerhaft entzieht; bei den **Kapital**rücklagen kommt hinzu, dass § 301 AktG ihre Auflösung
  ohnehin nicht einbezieht, weil sie aus Einlagen stammen – deshalb stehen dort sogar die **während**
  der Organschaft gebildeten zur Verfügung; und die **Mehrabführung** ist gar keine echte
  Ausschüttung, sondern wird von § 14 Abs. 3 KStG nur als solche **fingiert**. In allen fünf Fällen
  durchläuft die Leistung die Verwendungsreihenfolge des § 27 Abs. 1 Satz 3 KStG, trifft mangels
  ausschüttbaren Gewinns auf das **Einlagekonto** und führt beim Anteilseigner zur
  **Einlagenrückgewähr**; die **Verwendungsfestschreibung** des § 27 Abs. 5 KStG ist dabei besonders
  zu beachten, weil eine einmal erteilte oder unterbliebene Bescheinigung nicht mehr korrigiert werden
  kann. Damit ist die Einkommensermittlung bei der Organgesellschaft vollständig abgebildet.
  **Beim Organträger** vollzieht sich **dieselbe Bewegung mit umgekehrtem Vorzeichen** wie bei der
  Organgesellschaft: Dort war der erste Schritt die Eliminierung der als **Aufwand** gebuchten
  Abführung, hier ist es die Eliminierung des als **Ertrag** gebuchten Abführungsanspruchs
  (R 7.1 Zeile 21 KStR). Der Grund ist derselbe – die handelsrechtliche Buchung ist bereits die
  **Erfüllung** des Vertrags, zugerechnet wird aber das **steuerliche** Einkommen; ohne die Korrektur
  würde derselbe Betrag zweimal erfasst. Der knappe Hinweis, für die Verrechnung gälten die
  **Grundsätze des § 10d EStG nicht**, hat erhebliche Tragweite und ist nicht mit dem Ausschluss des
  Verlustabzugs bei der Organgesellschaft zu verwechseln: Gemeint ist, dass die Zusammenrechnung
  **kein Verlustabzug** ist, ein negatives Organeinkommen also **unmittelbar und unbeschränkt** mit
  dem positiven Einkommen des Organträgers verrechnet wird – die **Mindestbesteuerung** des § 10d
  Abs. 2 EStG greift nicht. Darin liegt einer der praktischen Hauptvorteile der Organschaft.
  **Zeitlich** entscheidet allein das Wirtschaftsjahresende der **Organgesellschaft**, und die Quelle
  begründet das mit einem Satz, der die ganze Regel trägt: Ohne Organschaft hätte die
  Organgesellschaft ihr Einkommen in eben diesem Jahr versteuern müssen, und die Organschaft darf den
  **Besteuerungszeitraum nicht verschieben**. Sie ändert also, **wer** versteuert, nicht **wann**. Bei
  **abweichenden Wirtschaftsjahren** fallen Zurechnung und Eliminierung deshalb **auseinander**: Im
  Beispiel wird das Organeinkommen 2025 (Wirtschaftsjahresende 31.12.2025) dem VZ 2025 des
  Organträgers zugerechnet und trifft dort auf dessen Ergebnis zum 31.05.2025 – also auf ein
  Wirtschaftsjahr, das **vor** dem Entstehen des Anspruchs endete –, während der Ertrag selbst erst im
  Wirtschaftsjahr 2025/2026 gebucht und damit erst im VZ 2026 eliminiert wird. In jedem laufenden Jahr
  wird so das Organeinkommen des **aktuellen** und der Abführungsanspruch des **Vorjahres** erfasst;
  bei durchgehender Organschaft gleicht sich das aus, im ersten und letzten Jahr nicht. Ist Organträger
  eine **Personengesellschaft**, erhält der unterjährig ausgeschiedene Mitunternehmer **nichts**, auch
  nicht zeitanteilig – die Gewinnabführung ist ein **zeitpunktbezogener** Vorgang, der erst mit Ablauf
  des Wirtschaftsjahres entsteht; wer dann nicht mehr beteiligt ist, war an ihm nie berechtigt.
  Bei **Beteiligungserträgen** greift die zweite Hälfte der Bruttomethode: § 15 Satz 1 Nr. 2 Satz 2
  KStG verlagert die Würdigung auf den Organträger. Dieselbe Linie trägt das **Wahlrecht** zum Abzug
  einer **ausländischen Steuer** nach § 34c Abs. 2 EStG – auch dieser Antrag steht dem Organträger zu,
  und das ist folgerichtig, weil sich der Abzug nur dort beurteilen lässt, wo alle Ergebnisse
  zusammentreffen. Der Feststellungsbescheid nach § 14 Abs. 5 KStG trägt die Beträge hinüber und
  erweist sich damit zum dritten Mal als **Datenbrücke** zwischen den beiden Einkommensermittlungen.
  Die eigenen **laufenden** Beteiligungsaufwendungen des Organträgers sind **voll abziehbar**, und der
  Grund ist schlicht: § 3c Abs. 2 EStG und § 8b Abs. 5 KStG knüpfen an **steuerfreie Einnahmen** an –
  die bezieht er aus der Organbeteiligung aber nicht, denn die Gewinnabführung ist keine Dividende und
  wird ohnehin eliminiert. Refinanzierungszinsen für den Erwerb einer Organbeteiligung sind deshalb
  ungekürzt abziehbar, anders als bei der schlichten Beteiligung. Kommt es doch zu einer Ausschüttung,
  laufen die Rechtsformen auseinander: § 8b Abs. 5 KStG arbeitet mit einer **Pauschale** und lässt den
  tatsächlichen Aufwand unberührt, § 3c Abs. 2 EStG dagegen mit einem **Zusammenhang** und verlangt
  eine **Aufteilung** im Schätzungswege nach dem Verhältnis von Ausschüttung und Gewinnabführung.
  **Substanzbezogene** Gewinnminderungen – etwa eine Teilwertabschreibung auf die Organbeteiligung –
  bleiben dagegen stets außer Ansatz, weil § 8b Abs. 3 Satz 3 KStG nicht an steuerfreie Einnahmen,
  sondern an die **Beteiligung als solche** anknüpft. Für den Organträger gilt damit eine klare
  Zweiteilung: laufender Aufwand voll abziehbar, substanzbezogener Aufwand nicht.
  Die **weiteren Einzelfragen** kreisen sämtlich um einen Gedanken: **keine doppelte Erfassung
  desselben Vorgangs**. Die handelsrechtlich gebotene **Drohverlustrückstellung** für die
  Verlustübernahme scheitert schon am allgemeinen Passivierungsverbot des § 5 Abs. 4a EStG, wäre aber
  auch sachlich verfehlt: Der Verlust der Organgesellschaft erreicht den Organträger ohnehin als
  **negatives Organeinkommen**, so dass er sonst zweimal abgezogen würde. Die **Teilwertabschreibung**
  auf die Organbeteiligung scheitert an **zwei** unabhängigen Hürden, die in der Klausur
  auseinanderzuhalten sind. Die erste betrifft die **Bewertung**: Eine erwartete Verlustübernahme
  taugt gar nicht erst als Begründung, weil § 302 AktG den Verlust **ausgleicht** – die Beteiligung
  verliert durch ihn also gerade **nicht** an Wert. Die zweite betrifft die **Auswirkung**: Selbst
  eine sachlich berechtigte Abschreibung bliebe nach § 8b Abs. 3 Satz 3 KStG außer Ansatz. Der
  **Spendenabzug** bleibt spiegelbildlich zur Organgesellschaft **getrennt**: Das zugerechnete
  Organeinkommen hebt den Höchstbetrag des Organträgers **nicht** an, maßgebend ist allein sein
  eigener Gewinn vor dessen Erfassung. Wer den Abzug optimieren will, muss die Spende deshalb dort
  leisten, wo das Volumen entsteht.
  Bei der **vorweggenommenen Gewinnabführung** wird dem Organträger das erhöhte Organeinkommen
  zugerechnet; nach R 14.7 Abs. 2 KStR ist dann bei ihm – und **nur** bei ihm, nie am Organeinkommen –
  zu korrigieren. Die beiden Beispiele zeigen, warum das Endergebnis gleichwohl verschieden ausfällt.
  Im **Zinsfall** (überhöhter Zinssatz von 10 % statt 5 %, also 50.000 € bei einem aus dem Zinsertrag
  von 100.000 € ableitbaren Darlehen von 1.000.000 €) hat der Organträger den Betrag bereits als
  Ertrag vereinnahmt; die Korrektur nimmt genau das wieder heraus, was die Zurechnung zusätzlich
  bringt, so dass sein zu versteuerndes Einkommen mit **2.000.000 €** unverändert bleibt. Im
  **Grundstücksfall** (Verkauf für 10.000 € bei einem gemeinen Wert von 500.000 €, also 490.000 €
  verhinderte Vermögensmehrung) hat er dagegen einen **Vermögensvorteil** erhalten, den er noch gar
  nicht versteuert hatte: Die Zuaktivierung holt ihn in die Bilanz, die Korrektur verhindert nur die
  **doppelte** Erfassung, nicht die Erfassung überhaupt – es verbleiben **2.490.000 €**. Das ist auch
  wirtschaftlich richtig, denn er hält ein Grundstück im Wert von 500.000 €, für das er 10.000 €
  gezahlt hat; seine Anschaffungskosten betragen folgerichtig genau 500.000 €. Der im Sachverhalt
  genannte Buchwert von 100.000 € taucht in keiner Zeile der Lösung auf, weil er bereits im
  Jahresüberschuss der Organgesellschaft steckt – die Gegenprobe bestätigt es: Bei angemessenem
  Entgelt hätte sie 400.000 € Gewinn erzielt, tatsächlich erzielte sie ./. 90.000 €, Differenz
  490.000 €.
  Die **verdeckte Einlage** ist der **spiegelbildliche** Fall: Dort fließt der Vorteil von der
  Organgesellschaft zum Organträger, hier umgekehrt. Ihr Ertrag wird nach § 8 Abs. 3 Satz 3 KStG
  neutralisiert, so dass das Organeinkommen **unberührt** bleibt und eine Korrektur nach R 14.7 Abs. 2
  KStR gerade **nicht** nötig ist; ihr Einlagekonto steigt um den Teilwert. Beim Organträger leistet
  eine einzige Buchung **zweierlei**: Sie erhöht die **Anschaffungskosten** der Organbeteiligung um
  den Teilwert von 500.000 € und deckt zugleich die **stillen Reserven** von 400.000 € auf. Er steht
  damit so, als hätte er das Grundstück zum gemeinen Wert **veräußert** und den Erlös **eingelegt**;
  der Übertragungsgewinn ist ein regulärer Gewinn, weil er aus dem Grundstück stammt und nicht aus der
  Beteiligung. Was hier eingelegt wird, kehrt später als **Einlagenrückgewähr** zurück, weil die
  Organgesellschaft regelmäßig keinen ausschüttbaren Gewinn hat. Sämtliche Zahlen aller drei Beispiele
  sind unabhängig nachgerechnet und gehen auf.
  Bei **§ 8c KStG im Organkreis** entscheidet allein der **Zeitpunkt** des schädlichen Erwerbs, und
  der Unterschied ist erheblich. Erfolgt er **unterjährig**, unterbleibt jede
  **Ergebniskonsolidierung**, und die Quelle begründet das mit einer zeitlichen Überlegung, die sie
  ausdrücklich als zutreffend bezeichnet: Die Gewinnabführung entsteht erst mit **Ablauf** des
  Wirtschaftsjahres, im Erwerbszeitpunkt gibt es also noch **keine Zurechnung**, die konsolidiert
  werden könnte – Organgesellschaft und Organträger stehen sich in diesem Augenblick wie zwei
  **selbstständige** Gesellschaften gegenüber. Daraus folgt alles Weitere: die getrennte Kürzung auf
  beiden Ebenen, die getrennte Prüfung der stillen Reserven und die Notwendigkeit von
  **Zwischenabschlüssen**, denn nur ausnahmsweise darf geschätzt werden. Erfolgt der Erwerb dagegen
  **mit Ablauf des Wirtschaftsjahres**, wird zuerst **konsolidiert**; das negative Organeinkommen
  wird damit Teil des Verlustes des Organträgers und geht mit unter.
  Wie stark sich das auswirkt, zeigt der Vergleich beider Beispiele, die bis auf den Erwerbszeitpunkt
  identisch sind. **Unterjährig** (01.07.2025) gehen bei der Organgesellschaft 500.000 € laufender
  Verlust unter, so dass ein Organeinkommen von ./. 400.000 € verbleibt; beim Organträger gehen
  600.000 € laufender Verlust und der Verlustvortrag von 1.000.000 € unter – gleichwohl weist seine
  Verlustfeststellung zum 31.12.2025 wieder **1.000.000 €** aus, weil der **nach** dem Erwerb
  entstandene Verlust und das zugerechnete negative Organeinkommen unberührt bleiben. **Mit Ablauf
  des Wirtschaftsjahres** (31.12.2025) verlagert sich der gesamte Verlust der Organgesellschaft als
  Organeinkommen von ./. 900.000 € zum Organträger, dessen konsolidiertes Ergebnis von ./. 2.100.000 €
  vollständig untergeht – zusammen mit seinem Verlustvortrag und dem vororganschaftlichen Verlust der
  Organgesellschaft insgesamt **3.400.000 €**; es verbleibt **nichts**. Ein Erwerb einen Tag vor dem
  Bilanzstichtag ist für den Erwerber also spürbar **günstiger** als einer mit dessen Ablauf.
  Für die **Organgesellschaft** kehrt sich das Bild um: Unterjährig trifft § 8c KStG ihren **eigenen**
  laufenden Verlust, beim Stichtagserwerb bleibt dieser erhalten, weil er sich bereits verlagert hat,
  und es kann nur noch der **vororganschaftliche** Verlust untergehen. Dass dieser in **beiden**
  Fällen verloren ist, bestätigt die Warnung aus § 15 Satz 1 Nr. 1 KStG: Der eingefrorene Verlust ist
  über Jahre nicht nutzbar, bleibt aber die ganze Zeit **gefährdet**. Die **Stille-Reserven-Klausel**
  wirkt im Organkreis **ungünstiger** als bei sonst gleicher Lage, und der Grund ist systematisch:
  Beim Organträger bleiben die stillen Reserven der **Organbeteiligung** außer Betracht, weil ihre
  Realisierung nach § 8b Abs. 2 KStG **steuerfrei** wäre – und was steuerfrei ist, kann keinen Verlust
  verschonen. Damit fällt gerade der Posten aus, in dem sich die Werthaltigkeit des Organkreises
  typischerweise sammelt. Bei der Organgesellschaft wirken sie nur für ihre **eigenen** Verluste, und
  zwar in fester **Rangfolge**: zuerst das laufende unterjährige negative Einkommen, erst danach der
  vororganschaftliche Verlust. Erzielt der Organträger bis zum Erwerb einen **Gewinn**, wird der
  Verlustvortrag damit **ohne Mindestbesteuerung** verrechnet und ist insoweit dem Zugriff des § 8c
  KStG entzogen – eine für den Steuerpflichtigen günstige Reihenfolge, die im ersten Beispiel 600.000 €
  rettet. Sämtliche Zahlen aller vier Rechnungen sind unabhängig nachgerechnet.
  **§ 8d KStG** ist beim **Organträger ausgeschlossen**, und der Grund liegt in der Bauweise der
  Vorschrift: Sie setzt voraus, dass die Körperschaft **denselben Geschäftsbetrieb** unverändert
  fortführt – genau daran fehlt es dort, wo **fremdes** Einkommen zugerechnet wird und sich das
  Ergebnis aus **mehreren** Geschäftsbetrieben speist. Das Gesetz nennt die Organträgerstellung
  deshalb doppelt: als **Antragshindernis** (§ 8d Abs. 1 Satz 2 Nr. 2 KStG) und als **schädliches
  Ereignis** (§ 8d Abs. 2 Satz 2 Nr. 5 KStG); die eine Vorschrift verhindert die Entstehung, die
  andere beendet einen bestehenden fortführungsgebundenen Verlust. In der **Kettenorganschaft** gilt
  der Ausschluss auch für die mittlere Gesellschaft, die zugleich Organgesellschaft ist – der Antrag
  steht dort nur der **untersten** Gesellschaft offen.
  Die **Organgesellschaft** kann ihn dagegen selbst stellen und **verdrängt damit § 8c KStG**
  vollständig. Warum der unterjährige Verlust dabei ungeschmälert erhalten bleibt, erklärt ein
  einziger Halbsatz: Für Zwecke des § 8d KStG ist auf den Verlust **zum Ende des Wirtschaftsjahres**
  abzustellen. § 8c KStG greift also auf den Stand im **Erwerbszeitpunkt** zu, § 8d KStG auf den
  Stand am **Bilanzstichtag** – dieselbe Unterscheidung zwischen Zeitpunkt und Stichtag, die schon
  die zeitliche Erfassung und die beiden § 8c-Fälle prägt. Weil der Sachverhalt des Beispiels mit dem
  des unterjährigen Erwerbs **identisch** ist und allein der Antrag hinzutritt, lässt sich sein Wert
  exakt beziffern. Er wirkt an **zwei** Stellen: Erstens rettet er den **laufenden** Verlust von
  500.000 €, der sonst bei der Organgesellschaft untergegangen wäre; er fließt als Teil des
  Organeinkommens (nunmehr ./. 900.000 € statt ./. 400.000 €) zum Organträger und erhöht dessen
  Verlustfeststellung von 1.000.000 € auf **1.500.000 €** – die Differenz von genau 500.000 € ist die
  rechnerische Probe. Zweitens rettet er den **vororganschaftlichen** Verlust von 300.000 €, der sonst
  ersatzlos verloren gewesen wäre und nun erstmals als **fortführungsgebundener** Verlust festgestellt
  wird. Das Bemerkenswerteste steht am Schluss: Der beim Organträger ankommende Verlust ist **nicht**
  fortführungsgebunden, weil § 8d KStG dort gar nicht anwendbar ist. Der Antrag der Organgesellschaft
  verschafft dem Organträger also **ungebundenes** Verlustpotential, während die Bindung allein am
  vororganschaftlichen Restbestand hängen bleibt. Für diesen vervollständigt sich damit das Bild aus
  § 15 Satz 1 Nr. 1 KStG: Er ist während der Organschaft nicht nutzbar, war schon durch § 8c KStG
  gefährdet und unterliegt nun zusätzlich § 8d Abs. 2 KStG – **doppelt gebunden**, ohne in dieser Zeit
  Nutzen zu stiften. Der Antrag lohnt gleichwohl, weil der gerettete laufende Verlust beim Organträger
  **sofort** verwendbar ist. Damit sind die Auswirkungen beim Organträger vollständig abgebildet.
  Die **Mehr- und Minderabführungen** haben ihre Wurzel im Gewinnabführungsvertrag selbst, und die
  Quelle benennt sie gleich im ersten Absatz: Abgeführt wird der **handelsrechtliche** Gewinn,
  zugerechnet wird das **steuerliche** Einkommen – zwei Größen, die praktisch **nie** übereinstimmen.
  Die Differenz ist deshalb kein Ausnahmefall und kein Fehler, sondern die zwangsläufige Folge der
  Zweigleisigkeit von Handels- und Steuerbilanz; genau darum braucht es mit § 14 Abs. 4 KStG eine
  eigene Rechtsgrundlage für ihre Behandlung. **§ 14 Abs. 4 Satz 6 KStG** stellt dabei allein auf die
  **rechnerische Differenz zwischen Handels- und Steuerbilanz** ab. Ein **tatsächlicher
  Vermögenstransfer** in dieser Höhe ist **nicht** erforderlich, und **außerbilanzielle** Korrekturen
  bleiben außer Betracht – der wichtigste Merksatz des Abschnitts, der sich leicht erklärt: Eine nicht
  abziehbare Betriebsausgabe steht in der Handels- **wie** in der Steuerbilanz als Aufwand und mindert
  beide gleichermaßen; erst die Einkommensermittlung rechnet sie hinzu. Zwischen den **Bilanzen**
  besteht also gar keine Differenz, und nur auf diese kommt es an.
  Genau dort setzt die **abweichende BFH-Rechtsprechung** an, und der Streit lässt sich auf eine Frage
  zuspitzen: Genügt die **Bilanz**differenz, oder muss auch die **Einkommens**differenz bestehen? Die
  Verwaltung liest § 14 Abs. 4 Satz 6 KStG als **abschließende** Definition und kommt mit dem rein
  rechnerischen Vergleich aus; der BFH verlangt zusätzlich, dass sich die Differenz **steuerlich
  auswirkt**. Im Urteilsfall von 2012 war ein Verlust aus einem Mitunternehmeranteil steuerbilanziell
  nach der **Spiegelbildmethode** gewinnmindernd erfasst, durch **§ 15a EStG** aber außerbilanziell
  wieder hinzugerechnet worden – auf das Einkommen bezogen blieb also nichts übrig, und der BFH
  verneinte die Mehrabführung. Die Grundsätze sind nach dem BMF-Schreiben von 2013 jedoch **nicht zu
  verallgemeinern**: Geklärt ist allein der „§ 15a-Verlust“, sonst bleibt es beim bilanziellen
  Maßstab. Beim **Ertragszuschuss** schlägt der BFH 2017 die **Gegenrichtung** ein und bejaht eine
  Mehrabführung, wo die Verwaltung sie verneinte. Der Vorgang läuft in zwei Schritten: Der Zuschuss
  ist zunächst eine **verdeckte Einlage**, erhöht also das Einlagekonto und bleibt einkommensneutral
  (Organeinkommen 0 €), und wird anschließend über die **Gewinnabführung** an den Organträger
  zurückgereicht. Ohne die Mehrabführung bliebe das **Einlagekonto** dauerhaft erhöht, obwohl bei der
  Organgesellschaft „im Saldo kein Vermögensvorteil geblieben“ ist – § 27 Abs. 6 KStG stellt das
  richtig; tragender Gedanke ist die **Einmalbesteuerung**. Bemerkenswert ist der Zeitablauf: Das
  Urteil stammt von 2017, wurde aber erst **2024** im Bundessteuerblatt veröffentlicht, und die
  Verwaltung hat ihre Auffassung erst mit dem BMF-Schreiben vom 04.07.2024 aufgegeben, ausdrücklich
  nur „was die Handhabung des Ertragszuschusses angeht“.
  Die Richtung der Abweichung merkt man sich an einer einzigen Frage: **Wo bleibt Vermögen zurück?**
  Bei der **Minderabführung** führt die Organgesellschaft **weniger** ab, als sie steuerlich verdient
  hat, so dass Vermögen **bei ihr** bleibt. Die Quelle nennt drei Fallgruppen, die sich sauber in zwei
  Gruppen trennen lassen. Die ersten beiden betreffen die **Gewinnverwendung** – Einstellungen in die
  gesetzliche Rücklage (§ 300 Nr. 1 AktG) oder in zulässige Gewinnrücklagen (§ 14 Abs. 1 Nr. 4 KStG)
  mindern die Abführung, nicht aber den steuerlichen Gewinn; hier knüpft der Abschnitt unmittelbar an
  die Abführungssperren an. Die dritte betrifft die **Bewertung**: Wo Handels- und Steuerbilanz
  auseinanderfallen, entsteht die Differenz von selbst, ohne dass jemand etwas zurückbehält – die
  **Drohverlustrückstellung** ist dafür der Standardfall und zugleich die Kehrseite des
  Passivierungsverbots, an dem dieselbe Rückstellung beim Organträger scheiterte. In beiden Beispielen
  entspricht die Minderabführung genau dem Posten, der die Bilanzen auseinandertreten lässt: 100.000 €
  Rücklage im ersten, 500.000 € Rückstellung im zweiten Fall. Beide Rechnungen sind unabhängig
  nachgerechnet.
  Bei der **Mehrabführung** steht es genau umgekehrt: Abgeführt wird **mehr**, als steuerlich
  erwirtschaftet wurde. Der Abschnitt zeigt zugleich, dass Mehr- und Minderabführungen typischerweise
  **paarweise** auftreten und sich über die Zeit **ausgleichen**. Die Gewinnrücklage erzeugt im Jahr
  ihrer **Bildung** eine Minderabführung und im Jahr ihrer **Auflösung** eine Mehrabführung in
  derselben Höhe – die Quelle nennt das ausdrücklich eine „Folgewirkung“. Bei der
  **Drohverlustrückstellung** ist es ebenso: Ihre Bildung führt zur Minderabführung, weil sie
  steuerlich nicht passiviert werden darf, ihr **Verbrauch** zur Mehrabführung, weil der Aufwand dann
  erstmals steuerlich wirkt. Handels- und Steuerbilanz verhalten sich dabei spiegelbildlich –
  handelsrechtlich ist der Aufwand vorweggenommen und der Eintritt nur noch eine **erfolgsneutrale**
  Ausbuchung, steuerlich wirkt er **erstmals**. Die zeitliche Verschiebung des Aufwands zwischen
  beiden Rechenwerken ist die eigentliche Ursache; Mehr- und Minderabführung sind nur ihr bilanzieller
  Ausdruck. Wer den Zusammenhang erkennt, kann jede Mehrabführung auf ihre frühere Minderabführung
  zurückführen und braucht die Fallgruppen nicht auswendig zu lernen.
  Beim **Organeinkommen** schlägt die Abweichung unmittelbar durch, weil es aus dem
  **Steuerbilanz**gewinn abgeleitet wird: Die Minderabführung erhöht es, die Mehrabführung mindert es.
  Der Feststellungsbescheid weist deshalb **beides** aus – das Organeinkommen und den Betrag der
  Abweichung. Das ist kein Doppel, sondern notwendig, weil beide Größen **verschiedene Adressaten**
  haben: Das Einkommen wird dem Organträger zugerechnet und versteuert, die Abweichung löst bei ihm
  eine **bilanzielle** Folge aus – eine Einlage oder eine Einlagenrückgewähr nach der Einlagenlösung.
  Beim **steuerlichen Einlagekonto** durchbricht **§ 27 Abs. 6 KStG** gleich **drei** Grundsätze des
  § 27 KStG, und alle drei haben denselben Grund: Die Mehrabführung ist kein gewöhnlicher Vorgang
  zwischen Gesellschaft und Gesellschafter, sondern eine bloße **bilanzielle Korrekturgröße**.
  Erstens gilt die **Verwendungsreihenfolge** des § 27 Abs. 1 Satz 3 KStG nicht, weil die
  Gewinnabführung keine „Leistung“ ist – es wird also gar nicht geprüft, ob ein ausschüttbarer Gewinn
  vorhanden ist. Zweitens wird die Mehrabführung **immer vorrangig** vor allen übrigen Leistungen
  abgezogen (§ 27 Abs. 6 Satz 2 KStG). Drittens kann der Bestand dadurch sogar **negativ** werden,
  was § 27 Abs. 1 Satz 4 KStG ausdrücklich zulässt, während er sonst gerade einen Negativbestand
  verhindert. Der **Vorrang** hat dabei erhebliche praktische Sprengkraft: Er zehrt genau den Bestand
  auf, aus dem sonst die **Einlagenrückgewähr** bedient wird – und weil die Organgesellschaft
  regelmäßig keinen ausschüttbaren Gewinn hat, hängt daran die Behandlung ihrer eigenen Leistungen.
  Für den außenstehenden Gesellschafter kann aus einer steuerneutralen Rückgewähr seiner
  **Ausgleichszahlung** damit ein **steuerpflichtiger Beteiligungsertrag** werden; die Reihenfolge des
  § 27 Abs. 6 Satz 2 KStG entscheidet also mittelbar über seine Steuerpflicht. Das durchgerechnete
  Beispiel über zwei Jahre zeigt schließlich, dass sich alles **vollständig ausgleicht**: 2025 erhöhen
  Minderabführung und Einlagekonto sich um je 500.000 €, 2026 mindern sie sich um denselben Betrag –
  in der Summe null Einkommenswirkung und ein unveränderter Einlagekontostand.
  Beim **Organträger** hat sich die Behandlung **ab 2022 gravierend geändert**: An die Stelle der
  **Ausgleichspostenregelung** ist die **Einlagenlösung** getreten. Beide Systeme verfolgen dasselbe
  Ziel – die **Doppelerfassung** desselben Betrags zu vermeiden –, setzen aber verschieden an. Der
  **Ausgleichsposten** war eine reine **Merkgröße** außerhalb des Beteiligungsansatzes, die sich erst
  bei der Veräußerung auflöste und dogmatisch stets umstritten war; die **Einlagenlösung** bucht
  unmittelbar dort, wo der Vorgang wirtschaftlich hingehört – in die **Anschaffungskosten** der
  Beteiligung. Das stellt zugleich den **Gleichklang** mit dem Einlagekonto der Organgesellschaft her,
  das nach § 27 Abs. 6 KStG dieselbe Bewegung vollzieht. Die Altposten waren **2022 zwingend**
  aufzulösen; überstieg ein **passiver** Posten den Buchwert, entstand ein sofort steuerwirksamer
  Gewinn, für den § 34 Abs. 6e Satz 7 ff. KStG wahlweise eine über neun Wirtschaftsjahre ratierlich
  aufzulösende **Rücklage** gewährt. Maßgeblich ist stets das Wirtschaftsjahr der **Organgesellschaft**,
  so dass die Neuregelung schon für jedes nach dem 31.12.2021 **endende** Wirtschaftsjahr galt.
  Die **Minderabführung als Einlage** führt in Höhe des Betrags zu **nachträglichen
  Anschaffungskosten** – und zwar **einkommensneutral**, weshalb der in der Steuerbilanz entstehende
  Ertrag außerbilanziell wieder zu beseitigen ist. Der Zweck ist keine Begünstigung, sondern eine
  **Vermeidungsregel**: Den steuerbilanziellen Mehrwert hat der Organträger über das Organeinkommen
  **bereits versteuert**; ohne die Erhöhung träfe ihn derselbe Betrag ein **zweites Mal** als höherer
  Veräußerungsgewinn beim späteren Verkauf. Zugerechnet wird stets der **volle** Betrag, unabhängig
  von der Beteiligungsquote – folgerichtig, weil auch das Organeinkommen ungeachtet der Quote
  vollständig zugerechnet wird; die Quote spielt in der Organschaft durchgehend keine Rolle.
  Die **Mehrabführung als Einlagenrückgewähr** mindert die Anschaffungskosten, aber **höchstens bis
  0 €**, weil ein negativer Beteiligungsansatz ausgeschlossen ist. Ein **Überhang** muss deshalb
  irgendwo hin, und das Gesetz behandelt ihn als **Veräußerungsgewinn**, obwohl nichts veräußert
  wurde – dieselbe Technik wie in § 17 Abs. 4 EStG. Bei einer Kapitalgesellschaft als Organträger
  bleibt er nach § 8b Abs. 2 KStG steuerfrei, unterliegt aber der **5%igen Pauschale** des § 8b Abs. 3
  Satz 1 KStG; bei einer natürlichen Person greifen Teileinkünfteverfahren und § 3c Abs. 2 EStG.
  Genau darin liegt der Unterschied zur alten Rechtslage: Der passive Ausgleichsposten löste sich erst
  bei der tatsächlichen Veräußerung auf, jetzt wird, wie die Quelle sagt, „zeitnaher“ versteuert. Die
  drei durchgerechneten Fälle zeigen das Muster: In **Variante a)** bleibt der Vorgang vollständig
  neutral (Buchwert 50.000 € ./. 40.000 € = 10.000 €); in **Variante b)** verbleibt bei einem Überhang
  von 150.000 € ein zu versteuerndes Einkommen von **7.500 €**, bei **Saldierung** von Minder- und
  Mehrabführung desselben Wirtschaftsjahres (§ 14 Abs. 4 Satz 7 KStG) ein solches von **5.500 €**. In
  beiden Fällen entspricht das Ergebnis **genau der 5%-Pauschale** – alles andere hebt sich auf, was
  zugleich die Probe darauf ist, dass der Vorgang im Übrigen steuerneutral bleibt. Sämtliche Zahlen
  sind unabhängig nachgerechnet.
  Bei der **mittelbaren Organschaft** stößt die Einlagenlösung auf ein einfaches Problem: Sie bucht in
  die **Anschaffungskosten** derjenigen Beteiligung, über die Organträger und Organgesellschaft
  verbunden sind – besteht **keine unmittelbare** Beteiligung, gibt es beim Organträger gar keinen
  Ansatz, den er erhöhen oder mindern könnte. **§ 14 Abs. 4 Satz 4 KStG** setzt deshalb an der
  **vermittelnden** Beteiligung an. Daraus folgt zugleich die Abgrenzung: Genügt die unmittelbare
  Beteiligung schon für sich zur finanziellen Eingliederung, liegt nach § 14 Abs. 1 Nr. 1 Satz 3 KStG
  **keine** mittelbare Organschaft vor, und eine daneben bestehende mittelbare Beteiligung bleibt
  **vollständig folgenlos** – obwohl sie wirtschaftlich dieselbe Verbindung schafft. Die Prüfung
  verläuft also in zwei Schritten: erst klären, **woraus** sich die Stimmrechtsmehrheit ergibt, dann
  die Rechtsfolge bestimmen.
  Läuft die Eingliederung über eine **Zwischengesellschaft**, wird die Korrektur **auf jeder
  Beteiligungsstufe** nachvollzogen – dass zwischen den einzelnen Gesellschaften kein
  Organschaftsverhältnis besteht, ist ausdrücklich unerheblich. Es entsteht eine **Kaskade**, die in
  beide Richtungen läuft: Die **Minderabführung** fließt von **oben nach unten** (der Organträger legt
  in die Zwischengesellschaft ein, diese leitet in die Organgesellschaft weiter; auf jeder Stufe
  steigen ein Beteiligungsbuchwert und ein Einlagekonto), die **Mehrabführung** von **unten nach
  oben** (die Organgesellschaft mindert ihr Einlagekonto, die Zwischengesellschaft verrechnet mit
  ihrem Buchwert und mindert ihr eigenes Konto, der Organträger verrechnet mit seinem Buchwert an der
  Zwischengesellschaft). Aufschlussreich ist, **wo** dabei Steuer entsteht: Im Beispiel bleibt der
  Vorgang beim **Organträger** vollständig neutral, weil sein Buchwert an der Zwischengesellschaft mit
  100.000 € für die Mehrabführung von 90.000 € ausreicht und auf 10.000 € sinkt. Bei der
  **Zwischengesellschaft** reicht der Buchwert von 60.000 € dagegen nicht, so dass dort ein
  **Überhang von 30.000 €** als Beteiligungsertrag entsteht und die 5%-Pauschale von **1.500 €**
  anfällt – bei derjenigen Gesellschaft also, die gar nicht Partei des Gewinnabführungsvertrags ist.
  Die Steuerlast hängt damit davon ab, **auf welcher Stufe** der niedrigere Buchwert steht. Die Quelle
  weist für diese Einkommensermittlung **kein Endergebnis** aus; es beträgt nach eigener Rechnung
  1.500 € und entspricht damit wiederum genau der Pauschale. Nicht zuletzt schließt der Abschnitt eine
  echte Regelungslücke: **§ 27 Abs. 6 Satz 3 KStG** i.d.F. des **JStG 2024** schafft erstmals die
  Rechtsgrundlage für den Zugriff auf das Einlagekonto der **Zwischengesellschaft**, die selbst keine
  Organgesellschaft ist – rückwirkend für alle nach dem 31.12.2021 erfolgenden Mehr- und
  Minderabführungen und damit für den gesamten Anwendungszeitraum der Einlagenlösung.
  Wird die finanzielle Eingliederung erst durch **Zusammenrechnung** beider Stränge erreicht, ist die
  Mehr- oder Minderabführung **aufzuteilen** – und zwar nach dem Verhältnis, in dem sie zur
  **Stimmrechtsmehrheit beitragen**, nicht nach der Höhe der Beteiligungen selbst. Im Grundfall sind
  das 30 zu 24 Prozentpunkte, woraus sich **56 % zu 44 %** ergeben; der Nenner ist dabei stets die
  Gesamtquote von 54 %, nicht 100 %. Der unmittelbare Teil folgt den Regeln der Einlagenlösung, der
  mittelbare durchläuft dieselbe **Kaskade** wie bei der Zwischengesellschaft. Die erste Abwandlung
  enthält eine überraschende Feststellung: Die Aufteilung gilt **auch dann**, wenn die mittelbare
  Beteiligung für sich schon zur Eingliederung genügt hätte. Daraus ergibt sich eine **Asymmetrie**,
  die beim Nebeneinanderlegen beider Abwandlungen sichtbar wird – genügt die **unmittelbare**
  Beteiligung allein, bleibt die mittelbare folgenlos (§ 14 Abs. 1 Nr. 1 Satz 3 KStG); genügt die
  **mittelbare** allein, wird gleichwohl aufgeteilt. Der Grund liegt schlicht im Wortlaut des Satzes 3,
  der nur einen der beiden Fälle nennt.
  In der **Kettenorganschaft** greift § 14 Abs. 4 KStG auf jeder Stufe, weil die nachfolgende
  Organgesellschaft zugleich Organträgerin ist – und die Abweichung **pflanzt sich fort**. Der Grund
  steht in einem einzigen Satz der Quelle: Die Buchwertkorrektur bei der Zwischen-Organgesellschaft
  ist zwar **einkommens**neutral, **berührt aber trotzdem deren Steuerbilanzgewinn**. Weil § 14 Abs. 4
  Satz 6 KStG allein auf die **Bilanzdifferenz** abstellt, löst sie dort eine **eigene** Mehr- oder
  Minderabführung aus, und das wiederholt sich Stufe um Stufe bis zum obersten Organträger. Das ist
  die unmittelbare Folge des rein bilanziellen Begriffs. Aufschlussreich ist dabei der
  **Größenunterschied** zwischen den Stufen: Aus einer Mehrabführung von 70.000 € unten werden oben
  nur **60.000 €**, weil nur der durch den Buchwert gedeckte Teil als **Aufwand** gebucht wird,
  während der Überhang von 10.000 € als **Ertrag** erscheint und den Steuerbilanzgewinn gerade nicht
  mindert. Bei der **Minderabführung** fehlt diese Verzweigung, weshalb dort auf beiden Stufen
  derselbe Betrag von 30.000 € steht – wer das übersieht, rechnet oben mit der falschen Zahl.
  Der Fall verbindet schließlich zwei zuvor getrennt behandelte Vorschriften: Der Überhang von
  10.000 € wäre bei der Zwischen-Organgesellschaft ein Beteiligungsertrag nach § 8b Abs. 2 KStG, doch
  **§ 15 Satz 1 Nr. 2 Satz 1 KStG sperrt** die Vorschrift dort, weil sie selbst Organgesellschaft ist.
  Der Betrag wandert deshalb **brutto** im Organeinkommen nach oben und wird erst beim obersten
  Organträger gewürdigt – mit dem Ergebnis von **500 €** Pauschale. Der Feststellungsbescheid muss den
  Beteiligungsertrag folglich **gesondert** ausweisen, weil er sonst im Organeinkommen gar nicht mehr
  auffindbar wäre. Damit sind die organschaftlichen Mehr- und Minderabführungen vollständig
  abgebildet; sämtliche Zahlen sind unabhängig nachgerechnet.
  **Vororganschaftlich** verursacht ist eine Abweichung, deren **Ursache** zeitlich vor Geltung des
  Gewinnabführungsvertrags liegt und die sich erst danach **umkehrt**. Entscheidend ist also nicht,
  wann sie sich auswirkt, sondern wann sie entstanden ist – es ist derselbe Zwei-Jahres-Zyklus wie bei
  den organschaftlichen Abweichungen, nur dass sein erster Teil **vor** den Vertrag fällt. Deshalb
  folgt einer vororganschaftlichen Minderabführung eine organschaftliche Mehrabführung und umgekehrt.
  Die Quelle grenzt sorgfältig gegen den weiteren Begriff „außerorganschaftlich“ ab, der jeden nicht
  vom Vertrag erfassten Vorgang umfassen würde und damit zu weit ginge.
  Die **Rechtsfolgen** des § 14 Abs. 3 KStG unterscheiden sich von denen des Absatzes 4 **nur bei der
  Mehrabführung** – und darin liegt der Kern des ganzen Abschnitts. Die **Minderabführung** ist in
  beiden Fällen eine **Einlage**; die **Mehrabführung** ist organschaftlich eine
  **Einlagenrückgewähr**, die zunächst nur Buchwert verzehrt, vororganschaftlich dagegen eine
  **Gewinnausschüttung** mit Kapitalertragsteuer, Verwendungsreihenfolge und § 8b KStG. Der Grund
  liegt im **Ursprung** des Vermögens: Eine organschaftliche Mehrabführung führt Vermögen ab, das über
  das Organeinkommen ohnehin beim Organträger versteuert wird – eine Ausschüttungsbesteuerung wäre
  Doppelerfassung. Eine vororganschaftliche führt dagegen Vermögen ab, das aus der Zeit **vor** der
  Organschaft stammt und bei der Organgesellschaft **selbst versteuert** wurde; es verlässt sie wie
  eine gewöhnliche Dividende. § 14 Abs. 3 KStG ist damit keine Sanktion, sondern die folgerichtige
  Anwendung des Ausschüttungsrechts auf vorgefundenes Altvermögen. Aus derselben Verschiedenheit folgt
  das **Saldierungsverbot**: Beide Arten dürfen **nicht** verrechnet werden, obwohl § 14 Abs. 4 Satz 7
  KStG die Saldierung innerhalb derselben Kategorie gerade anordnet. Bemerkenswert ist schließlich der
  **Definitionsmaßstab**: Für § 14 Abs. 3 KStG gilt gerade **nicht** die Legaldefinition des § 14
  Abs. 4 Satz 6 KStG – der BFH verlangt hier zusätzlich, dass die Differenz das **Einkommen** des
  Organträgers beeinflusst hat, also genau jene Auffassung, die er für die organschaftlichen Fälle
  vergeblich vertreten hatte. Dieselbe Streitfrage findet je nach Absatz eine andere Antwort.
  Beim **Organträger** bildet die ausdrücklich **gedankliche** Buchung **„Aufwand an Ertrag“** den
  Vorgang ab, und sie leistet zweierlei: Der **Ertrag** ist die fingierte **Ausschüttung** und wird
  nach § 8b KStG gewürdigt; der **Aufwand** hat gar keinen wirtschaftlichen Gehalt – er gleicht nur
  die Buchung aus, weil dem Organträger real nichts zusätzlich zufließt, und ist deshalb
  außerbilanziell hinzuzurechnen. Der Hinweis der Quelle zeigt den Unterschied zur organschaftlichen
  Mehrabführung, wo die Gegenbuchung „Aufwand an **Beteiligung**“ lautet, weil dort tatsächlich
  Buchwert verzehrt wird. **Per Saldo** bleibt bei einer Kapitalgesellschaft als Organträger nur die
  **5%-Pauschale** übrig; im Beispiel sind das 25.000 € bei einer Mehrabführung von 500.000 €, und das
  Gesamteinkommen von 125.000 € besteht aus dem eigenen Gewinn von 100.000 € zuzüglich dieser
  Pauschale. Praktisch unangenehm ist das **Auseinanderfallen der Zeitpunkte**: Der Beteiligungsertrag
  gilt nach § 14 Abs. 3 Satz 3 KStG schon mit **Ablauf des Wirtschaftsjahres** als zugeflossen, die
  **Kapitalertragsteuer** entsteht nach § 44 Abs. 7 EStG erst mit **Feststellung der Handelsbilanz**,
  spätestens acht Monate später – angerechnet werden darf sie aber nur im Veranlagungszeitraum des
  Ertrags, so dass die Veranlagung des Vorjahres offenzuhalten oder zu ändern ist. Ob es überhaupt zur
  Kapitalertragsteuer kommt, entscheidet schließlich die **Verwendungsreihenfolge**: Reicht der
  ausschüttbare Gewinn, bleibt es bei der Ausschüttung; greift die Leistung auf das **Einlagekonto**
  durch, wird daraus eine Einlagenrückgewähr ohne Kapitalertragsteuer, die den Beteiligungsbuchwert
  verzehrt.
  Bei der **Minderabführung** unterscheiden sich die beiden Absätze im Ergebnis **nicht**: Sie ist
  stets **Einlage** und erhöht erfolgsneutral die Anschaffungskosten der Organbeteiligung. Ein feiner
  Unterschied liegt nur in der Rechtsgrundlage – dort ordnet § 14 Abs. 4 Satz 3 KStG die Erhöhung
  ausdrücklich an, hier wird auf die **allgemeinen** Einlagengrundsätze des § 6 Abs. 6 Satz 2 EStG
  zurückgegriffen; und beim Einlagekonto gilt hier der reguläre § 27 Abs. 1 Satz 1 KStG statt des
  Sonderrechts des Absatzes 6. Der Musterfall ist der **vororganschaftliche Verlustvortrag**, bei dem
  drei Regeln ineinandergreifen: **Handelsrechtlich** zwingt § 301 AktG die Organgesellschaft, ihn
  **selbst** auszugleichen, so dass im Beispiel nur 1.000.000 € statt 10.000.000 € abgeführt werden
  dürfen; **steuerlich** bleibt er ungenutzt, weil § 15 Satz 1 Nr. 1 KStG den Verlustabzug
  ausschließt; **bilanziell** entsteht aus der Differenz eine Minderabführung von 9.000.000 €, die
  nach § 14 Abs. 3 KStG zur **Einlage** wird. Der Verlust wird also nicht vernichtet, sondern in
  **Anschaffungskosten und Einlagekonto umgewandelt** und bleibt dem Organträger als künftiges
  Veräußerungspotential erhalten. Der beiläufige Schlusshinweis der Quelle ist dabei der praktisch
  wichtigste Satz: Wer die Abführung **nicht** um den vororganschaftlichen Verlust kürzt, verletzt
  § 301 AktG und lässt die Organschaft **verunglücken** – die Minderabführung ist also nicht nur eine
  Rechtsfolge, sondern das Kennzeichen einer **korrekt durchgeführten** Organschaft in dieser Lage.
  Bei der **Organgesellschaft** löst die Mehrabführung keine Einkommensfolgen aus, durchläuft aber
  die **reguläre** Verwendungsreihenfolge des § 27 Abs. 1 Satz 3 KStG – und der knappe Hinweis, dass
  **§ 27 Abs. 6 KStG hier nicht anwendbar** ist, hat erhebliche Folgen: **Keine** der drei dortigen
  Durchbrechungen greift, es wird also zuerst der ausschüttbare Gewinn geprüft, kein vorrangiger
  Abzug vorgenommen und ein **Negativbestand bleibt ausgeschlossen**. Das ist folgerichtig, denn die
  vororganschaftliche Mehrabführung ist keine bloße bilanzielle Korrekturgröße, sondern eine echte
  Ausschüttung. Das lehrreichste der beiden Beispiele zeigt **beide Richtungen in einem einzigen
  Sachverhalt**: Schreibt die Handelsbilanz einen Firmenwert auf fünf Jahre ab, die Steuerbilanz nach
  § 7 Abs. 1 Satz 3 EStG aber auf fünfzehn, entstehen zunächst **Minderabführungen** von jährlich
  20.000 € (Einlagen, einkommensneutral); ist die Handelsbilanz ab 2029 fertig, während die
  Steuerbilanz weiterläuft, kehrt sich das Verhältnis um und es entstehen **Mehrabführungen** von
  10.000 € (Ausschüttungen mit § 8b KStG, Pauschale und Kapitalertragsteuer). Über die gesamte
  Laufzeit gleicht sich die Differenz vollständig aus, die **steuerlichen Folgen jedoch nicht** – der
  Steuerpflichtige zahlt in der zweiten Phase, was er in der ersten nicht gespart hat. Dasselbe
  Ausgleichsmuster bestätigt die Probe beim ersten Beispiel: Die Summe der Mehrabführungen
  (9 × 10.000 € + 5.000 €) entspricht **genau** der Bilanzansatzerhöhung von 95.000 €.
  Wie stark die **Rechtsform des Organträgers** wirkt, macht der unmittelbare Vergleich beider
  Aufstellungen deutlich: Dieselbe Mehrabführung von 10.000 € führt bei einer **Kapitalgesellschaft**
  zu einer Einkommenswirkung von **500 €** (der 5%-Pauschale), bei einer **natürlichen Person**
  dagegen zu **6.000 €** (dem steuerpflichtigen Teil von 60 %) – dem **Zwölffachen**, und dies vor dem
  Unterschied zwischen Einkommensteuertarif und 15 % Körperschaftsteuer. Sämtliche Zahlen beider
  Beispiele sind unabhängig nachgerechnet.
  Die **verunglückte Organschaft** trifft beide Seiten, aber ungleich schwer. Die bisherige
  **Gewinnabführung** wird zur **verdeckten Gewinnausschüttung**, und maßgeblich ist dabei – die
  Quelle betont es ausdrücklich – die **tatsächliche handelsrechtliche Abführung** und **nicht** das
  steuerliche Einkommen. Der Grund ist einfach: Ohne Organschaft gibt es kein zuzurechnendes
  Organeinkommen mehr; geflossen ist allein die Abführung, und genau sie hat den Gewinn gemindert.
  Die Differenz zwischen beiden Größen, die zuvor Mehr- und Minderabführungen erzeugte, verliert damit
  ihre Bedeutung. Bemerkenswert ist das **Auseinanderfallen der Jahre**: Bei der Organgesellschaft
  wirkt die Hinzurechnung im Jahr der **Gewinnentstehung**, beim Organträger der Beteiligungsertrag
  erst im Jahr des **Zuflusses**, der sich nach der **Fälligkeit** und damit nach der Feststellung des
  Jahresabschlusses richtet. Nachträgliche Rettungsversuche verschließt die Quelle gleich zweifach:
  Eine **Rückforderung** kann die verwirklichte vGA nicht mehr beseitigen, sondern ist selbst eine
  verdeckte Einlage; und die **Einlagenrückgewähr** ist praktisch versperrt, weil § 27 Abs. 5 KStG die
  Verwendung **festschreibt** und eine seinerzeit nicht erteilte Steuerbescheinigung nicht nachgeholt
  werden kann. Die verunglückte Organschaft führt deshalb nahezu zwangsläufig zur vollen
  Ausschüttungsbesteuerung – wenn auch bei einer Kapitalgesellschaft als Organträger weitgehend durch
  § 8b KStG abgefedert, vorbehaltlich der **materiellen Korrespondenz** nach dessen Absatz 1 Satz 2.
  Die bisherige **Verlustübernahme** wird dagegen zur **verdeckten Einlage** und bleibt auf **beiden**
  Seiten **einkommensneutral**: Bei der Organgesellschaft neutralisiert § 8 Abs. 3 Satz 3 KStG den als
  Ertrag gebuchten Anspruch, beim Organträger erhöhen sich lediglich die Anschaffungskosten nach § 6
  Abs. 6 Satz 2 EStG. Wirtschaftlich trifft die verunglückte Organschaft den Steuerpflichtigen im
  **Gewinnfall** also deutlich härter. Die eigentliche Härte des Verlustfalls steht allerdings nicht
  in der Rechnung: Der Verlust von 310.000 € bleibt nun **bei der Organgesellschaft** hängen und geht
  in **ihren** Verlustvortrag ein, statt dem Organträger zugerechnet und dort sofort mit dessen
  Gewinnen verrechnet zu werden. Er ist damit nicht verloren, aber auf Jahre gebunden und durch § 8c
  KStG gefährdet – genau die sofortige Verlustverrechnung, die den praktischen Hauptvorteil der
  Organschaft ausmacht, entfällt. Der Sachverhalt ist schließlich mit Bedacht so gewählt, dass die
  **Heilung** ausscheidet, weil der Jahresabschluss **nicht testiert** wurde und damit die
  unwiderlegliche Fiktion der Sorgfalt fehlt: Ein Bilanzierungsfehler von 90.000 € kostet hier die
  gesamte Organschaft, der bei geprüftem Abschluss folgenlos geblieben wäre. Für die Praxis folgt
  daraus, dass eine **freiwillige Prüfung** auch bei kleinen Organgesellschaften erwägenswert ist.
  Damit sind die Kapitel 1 bis 3 des Skripts vollständig abgebildet.
  Die **gewerbesteuerliche Organschaft** hat **keine eigenen** Voraussetzungen: § 2 Abs. 2 Satz 2
  GewStG verweist vollständig auf die körperschaftsteuerlichen Tatbestandsmerkmale, so dass jede
  Prüfung dort zugleich diese hier erledigt. Der Gleichlauf wirkt allerdings auch in die **ungünstige**
  Richtung – ein **Durchführungsmangel** vernichtet beide Organschaften zugleich, innerhalb der
  Mindestlaufzeit rückwirkend; die Folgen einer verunglückten Organschaft verdoppeln sich damit.
  Anders als die Zinsschranke, die den Organkreis ausdrücklich als **einen Betrieb** fingiert, folgt
  die Gewerbesteuer der **gebrochenen Einheitstheorie**: Die Gewerbeerträge werden zunächst
  **getrennt** ermittelt und erst danach zusammengeführt – die Einheit ist also „gebrochen“, und genau
  daraus entstehen die Besonderheiten bei Hinzurechnungen und Kürzungen. Verfahrensrechtlich hat das
  erhebliches Gewicht: Es ergeht nur **ein** Messbetragsbescheid an den Organträger, das
  Feststellungsverfahren des § 14 Abs. 5 KStG gilt gewerbesteuerlich **nicht** (so der BFH 2023), und
  die Besteuerungsgrundlagen der Organgesellschaft werden nur **nachrichtlich** mitgeteilt. Sie kann
  daher gegen ihren eigenen Gewerbeertrag **gar nichts** unternehmen – der Rechtsbehelf ist vom
  **Organträger** gegen dessen Messbescheid einzulegen; wer den Streit auf der falschen Ebene führt,
  verliert ihn aus formalen Gründen. Gewerbesteuerlich gilt die Organgesellschaft zudem als
  **Betriebsstätte** des Organträgers, was ein Verteilungsproblem löst: Ohne diese Fiktion stünde das
  gesamte Aufkommen der Gemeinde des Organträgers zu; die **Zerlegung** nach § 28 GewStG sichert jeder
  beteiligten Gemeinde ihren Anteil.
  Ausgangsgröße der Ermittlung ist nach § 7 Satz 1 GewStG das **körperschaftsteuerliche Einkommen vor
  Zurechnung** – der Angelpunkt des ganzen Kapitels, denn die aufwendige Einkommensermittlung mit
  Bruttomethode, Zinsschranke und allen übrigen Korrekturen ist damit **auch** gewerbesteuerlich
  erledigt und muss nicht wiederholt werden. Eine deutliche Abweichung besteht bei **§ 16 KStG**:
  Körperschaftsteuerlich behält die Organgesellschaft bei Ausgleichszahlungen ein eigenes Einkommen
  von 20/17 – praktisch der einzige Fall, in dem sie überhaupt Körperschaftsteuer zahlt.
  Gewerbesteuerlich wird das **nicht nachvollzogen**: Ihr gesamter Gewerbeertrag geht über, sie
  schuldet **niemals** eigene Gewerbesteuer, und die Belastung aus der Ausgleichszahlung trägt der
  **Organträger** – eine Verschiebung, die bei deren Bemessung zu bedenken ist.
  Bei den **Hinzurechnungen** zeigt sich die Kehrseite der getrennten Ermittlung: Ein konzerninternes
  Darlehen erscheint bei der Organgesellschaft wie ein gewöhnliches Geschäft mit einem Dritten, so
  dass § 8 Nr. 1 GewStG zugriffe – obwohl sich Zinsaufwand und Zinsertrag im einheitlichen
  Gewerbeertrag ohnehin aufheben. Die **Rückausnahme** der R 7.1 (5) Satz 3 GewStR lässt die
  Hinzurechnung deshalb unterbleiben und stellt nachträglich her, was bei einer reinen
  Einheitsbetrachtung von vornherein gälte. Sie erfasst auch Vorgänge zwischen
  **Schwestergesellschaften** und gilt ebenso für **Miet- und Pachtaufwendungen**; steht dem Aufwand
  dagegen **kein** Ertrag im Organkreis gegenüber, bleibt es bei der regulären Hinzurechnung. Es ist
  also ein **Korrespondenzprinzip**, kein allgemeines Konzernprivileg. Derselbe Gedanke trägt die
  Ausnahme bei den **Kürzungen**: Wird Grundbesitz **innerhalb** des Organkreises überlassen, ist die
  **erweiterte Kürzung** ausgeschlossen, weil sie den ohnehin ausgeglichenen Ertrag ein zweites Mal
  entlasten würde; bei Überlassung **nach außen** bleibt sie erhalten. Für konzerneigene
  Besitzgesellschaften ist das eine empfindliche Einschränkung, die bei gemischter Nutzung eine
  genaue Zuordnung der Erträge verlangt.
  Beim **gewerbesteuerlichen Schachtelprivileg** ist die **Reihenfolge** der Prüfungsschritte das
  eigentliche Streitthema, und der Abschnitt wird erst verständlich, wenn man das erkennt. Die
  **Bruttomethode** lässt die Ausschüttung **ungekürzt** in die gewerbesteuerliche Ausgangsgröße
  gelangen; damit sind bei der Organgesellschaft die Voraussetzungen des § 9 Nr. 2a GewStG
  **originär erfüllt**, und die Kürzung erfasst den **vollen** Betrag – auch jene 5 %, die
  körperschaftsteuerlich als Pauschale steuerpflichtig bleiben. Genau das stellte der **BFH 2014**
  fest: Steht nichts mehr im Gewerbeertrag, kann beim Organträger auch nichts mehr hinzugerechnet
  werden; die von der Verwaltung beabsichtigte Besteuerung der Pauschale unterblieb. Mit **§ 7a
  GewStG** hat der Gesetzgeber ab 2017 reagiert und die Verwaltungsauffassung, wie die Quelle sagt,
  **rechtsprechungsbrechend** auf eine gesetzliche Grundlage gestellt. Die Norm kehrt die Reihenfolge
  um: Zuerst schließt Absatz 1 die Schachtelprivilegien der §§ 9 Nr. 2a, 7, 8 GewStG aus (und für
  zugehörige Kosten auch § 8 Nr. 1 GewStG), dann ordnet Absatz 2 die **Nettomethode** an, so dass
  § 8b KStG beziehungsweise das Teileinkünfteverfahren **schon bei der Organgesellschaft** wirken, und
  **erst danach** greifen Kürzungen und Hinzurechnungen. Weil § 9 Nr. 2a **Satz 4** GewStG die
  Pauschale ausdrücklich nicht kürzt, bleibt sie damit im Gewerbeertrag erhalten.
  Bemerkenswert ist die **Umkehrung der Zuständigkeit**, die die Quelle eigens hervorhebt:
  **Abweichend** von der körperschaftsteuerlichen Behandlung wird **bei der Organgesellschaft** über
  das Schicksal der Ausschüttung entschieden. Körperschaftsteuerlich ist § 8b KStG dort gesperrt und
  wirkt erst beim Organträger; gewerbesteuerlich wird er über § 7a Abs. 2 GewStG **eine Ebene tiefer**
  angewandt – der Maßstab bleibt aber die **Rechtsform des Organträgers**. Und die entscheidet im
  Grundfall über **alles oder nichts**, aus einem feinen systematischen Grund: Bei einer
  **Kapitalgesellschaft** stellt § 8b Abs. 1 KStG die Ausschüttung **vollständig** frei, so dass
  allein die Pauschale von **5.000 €** im Gewerbeertrag verbleibt, die Satz 4 nicht mehr kürzen kann.
  Bei einem **Personenunternehmen** stellt § 3 Nr. 40 EStG dagegen nur 60 % frei, so dass 60.000 € im
  Gewerbeertrag stehen – und genau diese trifft die Kürzung des § 9 Nr. 2a **Satz 1** GewStG in voller
  Höhe, weil Satz 4 nur die Pauschale des § 8b Abs. 5 KStG ausnimmt. Der Organkreis mit
  Kapitalgesellschaft an der Spitze zahlt damit Gewerbesteuer auf 5.000 €, der mit Personenunternehmen
  **gar keine**. Im Grundfall stimmen Einkommen und Gewerbeertrag mit je 5.000 € überein – genau
  dieser Gleichlauf war das Ziel der Gesetzesänderung –, in der Abwandlung fallen sie mit 60.000 € und
  0 € auseinander. Nicht zu übersehen ist schließlich die **Anwendungsgrenze**: § 7a GewStG setzt
  einen Fall des § 9 Nr. 2a GewStG voraus, also mindestens **15 %** zu **Beginn** des
  Erhebungszeitraums; fehlt es daran, verbleibt die Bruttoausschüttung im Gewerbeertrag, und für § 8
  Nr. 5 GewStG bleibt kein Raum, weil nichts gekürzt wurde.
  Kommen **Kosten** hinzu, durchlaufen sie eine **Schleife**, die man sich merken sollte. Zunächst
  schaltet § 7a Abs. 1 Satz 2 GewStG die Hinzurechnung nach § 8 Nr. 1 GewStG **aus** – solange die
  Ausschüttung noch brutto im Gewerbeertrag steht, wäre eine Hinzurechnung der zugehörigen Zinsen
  verfrüht. Nach Anwendung der Nettomethode holt § 7a Abs. 2 Satz 2 GewStG sie **nach**, aber nur für
  die Aufwendungen, **die sich bisher mindernd ausgewirkt haben**. Genau diese Einschränkung erklärt
  die Zahlen: Bei der Kapitalgesellschaft haben sich die Zinsen voll ausgewirkt, weshalb 25 % des
  vollen Betrags hinzuzurechnen sind (12.500 € bei 50.000 €, 37.500 € bei 150.000 €); beim
  Personenunternehmen sind dagegen 40 % bereits durch § 3c Abs. 2 EStG neutralisiert.
  Dabei **kehrt sich der Rechtsformvorteil um**. Ohne Kosten stand das **Personenunternehmen** besser
  (Gewerbeertrag 0 € statt 5.000 €); bei **hohen** Kosten steht es schlechter. Der Grund ist § 9
  Nr. 2a **Satz 3** GewStG, der den **Kürzungsrahmen** um die im Gewerbeertrag enthaltenen
  Aufwendungen **reduziert**: Bei 50.000 € Zinsen verbleibt eine Kürzung von 30.000 € und damit ein
  Gewerbeertrag von 0 €; bei 150.000 € ist der Rahmen von 60.000 € durch die verbliebenen Kosten von
  90.000 € **vollständig aufgezehrt**, die Kürzung unterbleibt, und der Überhang wird sogar noch
  hinzugerechnet. Bei der **Kapitalgesellschaft** stellt sich diese Frage gar nicht, weil dort die
  Ausschüttung nach § 8b Abs. 1 KStG **vollständig** aus dem Gewerbeertrag ausscheidet und für § 9
  Nr. 2a GewStG nichts übrig bleibt. In der Alternative treffen die Zinsen beim Personenunternehmen
  damit **drei** Regelungen nacheinander, was die Quelle in einer einzigen Klammer zusammenfasst:
  § 3c Abs. 2 EStG kürzt um 40 % auf 90.000 €, § 9 Nr. 2a Satz 3 GewStG zehrt mit ihnen den
  Kürzungsrahmen von 60.000 € auf, und der verbleibende Überhang von 30.000 € unterliegt der
  Hinzurechnung – die Rechnung 150.000 € ./. 60.000 € ./. 60.000 € = 30.000 € führt genau diese drei
  Stufen vor.
  **Vororganschaftliche Gewerbeverluste** schließlich sind wie ihre körperschaftsteuerlichen
  Gegenstücke **eingefroren**: Sie können während der Organschaft nicht genutzt werden, werden jedes
  Jahr unverändert festgestellt und leben erst nach deren Beendigung wieder auf – bleiben aber die
  ganze Zeit durch einen schädlichen Anteilserwerb **gefährdet**. Bemerkenswert ist, dass beide
  Steuerarten **verschiedene Wege** zum selben Ergebnis gehen: Körperschaftsteuerlich folgt das
  Abzugsverbot **mittelbar** daraus, dass § 15 Satz 1 Nr. 1 KStG die Anwendung des § 10d EStG
  aufhebt, gewerbesteuerlich ordnet § 10a Satz 3 GewStG es **unmittelbar** an; dieselbe Doppelung
  findet sich bei der Feststellung (§ 10d Abs. 4 EStG einerseits, § 10a Satz 6 GewStG andererseits).
  Sämtliche Zahlen aller vier Fallvarianten sind unabhängig nachgerechnet.
  Das **zusammenfassende Beispiel** verbindet auf engem Raum nahezu alle Themen des Skripts und
  eignet sich deshalb als Schlussprobe. Enthalten sind die **Ausgleichszahlung** an den außenstehenden
  Gesellschafter mit ihrer doppelten Wirkung – nichtabziehbare Betriebsausgabe **und** eigenes
  Einkommen von 20/17 –, die **Bruttomethode** mit der getrennten Streubesitzprüfung nach § 15 Satz 1
  Nr. 2 Satz 4 KStG, die **eingefrorenen** vororganschaftlichen Verluste in beiden Steuerarten, die
  **konzerninternen Zinsen** mit der Rückausnahme bei der Hinzurechnung und schließlich **§ 7a
  GewStG** mit der Rettung der Pauschale. Aufschlussreich ist, wie die Einzelregelungen ineinander
  greifen: Die 250.000 € Kapitalertragsteuer erhöhen zunächst das Organeinkommen und werden dann beim
  Organträger angerechnet; die 85.000 € Ausgleichszahlung werden hinzugerechnet und kehren als
  **100.000 €** eigenes Einkommen zurück – die Probe dazu ist, dass 100.000 € abzüglich 15 %
  Körperschaftsteuer genau die 85.000 € ergeben; die 1.000.000 € Beteiligungsertrag (netto 750.000 €
  zuzüglich 250.000 € Kapitalertragsteuer) wandern brutto nach oben und werden dort zu **50.000 €**
  Pauschale.
  Am Schluss zeigt der Fall den systematischen Unterschied beider Steuerarten in Zahlen:
  Körperschaftsteuerlich verbleiben der Organgesellschaft **100.000 €** eigenes Einkommen, der
  Organträger versteuert 9.600.000 €; gewerbesteuerlich verbleibt ihr **nichts** – ihr gesamter
  Gewerbeertrag von 600.000 € geht über, und der einheitliche Gewerbeertrag beträgt 9.700.000 €. Die
  Differenz von genau 100.000 € zwischen beiden Endgrößen ist das nach § 16 KStG bei der
  Organgesellschaft verbliebene Einkommen, das gewerbesteuerlich eben nicht bei ihr bleibt. Eine
  Besonderheit der Darstellung ist dabei erklärungsbedürftig und als eigene Ergänzung vermerkt: Die
  gewerbesteuerliche Aufstellung überschreibt ihre erste Zeile mit „Organeinkommen (vor Zurechnung)“
  und nennt 1.550.000 €, obwohl das Organeinkommen 1.450.000 € beträgt. Gemeint ist der steuerliche
  Gewinn **vor Abzug** des bei der Organgesellschaft verbleibenden Einkommens – genau darauf kommt es
  gewerbesteuerlich an, weil § 16 KStG dort nicht nachvollzogen wird. Wer stattdessen mit 1.450.000 €
  rechnete, käme auf 500.000 € und würde die 100.000 € aus der Ausgleichszahlung nirgends erfassen.
  Damit ist das Skript über alle vier Kapitel und 98 Seiten vollständig abgebildet; sämtliche Zahlen
  sind unabhängig nachgerechnet.
  Prüfung: `npm run check:k2-kst-teil6`

- **KSt Teil VII (Hamacher)** (Klausur 2, Reiter Körperschaftsteuer → „Teil VII (Liquidation)“):
  das Lehrgangsskript **„Körperschaftsteuer, Teil VII: Liquidation (§ 11 KStG)“** (21. Auflage,
  Stand 06/2025) im Wortlaut – **vollständig** mit 35 Kapiteln, 373 Abschnitten und 41 Tabellen
  über beide Kapitel und 28 Seiten. Der Liquidation ist die
  **Auflösung** vorgeschaltet, und beide Vorgänge sind streng zu trennen: Die Auflösung ist das
  auslösende Ereignis – ein Gesellschafterbeschluss mit qualifizierter Mehrheit, der Ablauf der
  bestimmten Zeit, die Eröffnung des Insolvenzverfahrens oder deren Abweisung mangels Masse, eine
  Verfügung des Registergerichts oder die Löschung wegen Vermögenslosigkeit –, die **Abwicklung** das
  anschließende Verfahren, in dem das Vermögen verwertet und verteilt wird. Die Auflösung ist dabei
  **nicht** gleichbedeutend mit der Beendigung: Die Gesellschaft bleibt **rechtlich existent**, nur ihr
  **Zweck** wechselt zur Abwicklung, erkennbar am Zusatz „i.A.“ oder „i.L.“. Daraus folgt der
  Schlüssel für die gesamte Liquidationsbesteuerung – weil die Gesellschaft fortbesteht, bleibt sie
  **steuerpflichtig**; § 11 KStG regelt nicht, **ob** besteuert wird, sondern nur, **wie** das
  Einkommen während der Abwicklung ermittelt wird.
  An die Stelle der Geschäftsführung tritt der **Liquidator** (bei der AG der **Abwickler**), in aller
  Regel die bisherige Geschäftsführung. Er darf neue Geschäfte nur zur Beendigung schwebender oder zum
  Zweck der Abwicklung dienender Rechtsgeschäfte schließen – was bei einer Veräußerung des gesamten
  Unternehmens aber durchaus umfangreiche Neugeschäfte erfordern kann. Er hat eine **Eröffnungsbilanz**
  und jährliche Abschlüsse aufzustellen und nach **§ 34 AO** auch die **steuerlichen Pflichten** zu
  erfüllen: Er muss die Steuern „aus den Mitteln, die er verwaltet“, entrichten und kann sogar
  für Zeiträume **vor** der Auflösung zur Abgabe der Erklärungen herangezogen werden. Verletzt er diese
  Pflicht, droht die persönliche Haftung nach § 69 AO.
  Die **Schlussverteilung** an die Gesellschafter ist erst nach Ablauf des **Sperrjahres** zulässig,
  das mit der Bekanntmachung des Gläubigeraufrufs beginnt. Es ist die zivilrechtliche Absicherung der
  Reihenfolge **„erst die Gläubiger, dann die Gesellschafter“** – und zu den Gläubigern gehört eben
  auch das Finanzamt. Bemerkenswert ist die Klarstellung zur Ausnahme: Wer Vermögen **zurückbehält**,
  um noch Steuern zu zahlen, hat gerade noch verteilungsfähiges Vermögen und kann daher **nicht**
  vorzeitig beenden. Der Abwicklungszeitraum erstreckt sich deshalb regelmäßig über mehr als ein Jahr –
  der Grund für die Dreijahresregel des § 11 Abs. 1 Satz 2 KStG. Die **Löschung** im Handelsregister
  hat schließlich nur **deklaratorische** Bedeutung: Beendet ist die Gesellschaft erst, wenn
  **zusätzlich** die Abwicklung abgeschlossen ist. Taucht nach der Löschung noch Vermögen auf – etwa
  ein Erstattungsanspruch gegen das Finanzamt –, besteht sie insoweit fort. Nur bei der **Löschung
  wegen Vermögenslosigkeit** fallen Auflösung und Beendigung ohne Abwicklung zusammen.
  Steuerlich ist **§ 11 KStG** die Sondervorschrift gegenüber § 7 Abs. 3 und 4 KStG, die das Einkommen
  sonst an das Kalender- oder Wirtschaftsjahr binden. Er ist aber keine vollständige Sonderordnung,
  sondern ersetzt nur **Zeitraum und Methode** der Gewinnermittlung – vGA, verdeckte Einlage, § 8b und
  § 10 KStG gelten weiter. Ziel ist die Erfassung des **Abwicklungsgewinns**, und dessen zwei
  Bestandteile erklären, warum es einen eigenen Tatbestand überhaupt braucht: Die **laufenden**
  Ergebnisse aus dem Auslaufen des Geschäfts würden auch sonst erfasst; die **stillen Reserven**
  dagegen würden ohne Veräußerung nie realisiert, denn eine Kapitalgesellschaft kann nichts
  „entnehmen“. Endet ihre Existenz, müssen die über Jahre angesammelten Wertsteigerungen ein
  letztes Mal auf Gesellschaftsebene versteuert werden, bevor das Vermögen den Gesellschaftern
  zufließt. Die **Schlussauskehrung** selbst ist dagegen **Einkommensverwendung** (§ 8 Abs. 3 Satz 1
  KStG) und beeinflusst den Abwicklungsgewinn nicht; besteuert wird sie allein beim **Anteilseigner**,
  und zwar zerlegt in **Einnahmen** nach § 20 Abs. 1 Nr. 2 EStG und die **Rückzahlung von Einlagen**
  als veräußerungsgleichen Tatbestand.
  Anwendbar ist § 11 KStG nur auf **unbeschränkt steuerpflichtige** Kapitalgesellschaften,
  Genossenschaften und Versicherungsvereine auf Gegenseitigkeit – folgerichtig, denn nur bei diesen
  gibt es Anteilseigner, an die in einer Schlussverteilung ausgekehrt wird. Vereine, Stiftungen und
  Betriebe gewerblicher Art unterliegen den allgemeinen Grundsätzen der Betriebsaufgabe nach § 16
  EStG. Objektiv verlangt die Vorschrift eine **tatsächliche und ernsthafte** Abwicklung; eine
  **Scheinliquidation**, bei der die Gesellschaft unverändert am Wirtschaftsleben teilnimmt, genügt
  nicht – sonst ließe sich schon durch einen bloßen Beschluss eine mehrjährige Steuerpause erreichen.
  Wird eine ernsthaft begonnene Liquidation **eingestellt**, endet sie spätestens mit der
  Wiederaufnahme der Tätigkeit, und das Einkommen ist nach den **allgemeinen** Grundsätzen zu
  ermitteln: Der besondere Vergleich zwischen Abwicklungs-Anfangs- und Endvermögen setzt eine
  **abgeschlossene** Abwicklung voraus, und ohne Schlussverteilung gibt es kein Endvermögen, das man
  vergleichen könnte. Für das **Insolvenzverfahren** ordnet § 11 Abs. 7 KStG die sinngemäße Anwendung
  auch ohne Abwicklung an; kommt es aber zu einem **Insolvenzplan mit Fortführung**, endet der
  Besteuerungszeitraum mit dem bestätigenden Beschluss, und für die Zeit danach gilt – gegebenenfalls
  mit einem Rumpfwirtschaftsjahr – wieder die Regelbesteuerung.
  Der **Besteuerungszeitraum** umfasst den gesamten Abwicklungszeitraum, **soll** aber nach § 11 Abs. 1
  Satz 2 KStG **drei Zeitjahre** nicht übersteigen. Er ersetzt die jährlichen Veranlagungszeiträume;
  Wirtschaftsjahre sind steuerlich ohne Bedeutung, alle Feststellungen erfolgen zu seinem Ablauf, und
  maßgebend ist der Rechtsstand des Jahres, in dem er endet. Die Grenze wirkt in **beide** Richtungen.
  Für den Fiskus verhindert sie eine **Steuerpause**, denn während des Zeitraums werden keine
  Erklärungen abgegeben. Für den Steuerpflichtigen kann sie dagegen empfindlich sein, wie das zweite
  Beispiel drastisch zeigt: Über vier Jahre heben sich Verluste von 30.000.000 € und ein Gewinn in
  derselben Höhe genau auf – hätte ein einziger Zeitraum alles umfasst, wären **0 €** zu versteuern
  gewesen. Weil der Gewinn aber in einen **zweiten** Zeitraum fällt, greift die **Mindestbesteuerung**:
  Nach dem Grundabzug von 1.000.000 € und 70 % des Rests verbleiben **8.700.000 €** Einkommen, und ein
  gleich hoher Restverlust geht mit der Gesellschaft endgültig unter – betragsgleich, weil bei gleich
  hohem Gewinn und Verlust jeder nicht abziehbare Euro einem Euro Einkommen entspricht. Genau deshalb
  ist die **Verlängerung** des Zeitraums in Verlustlagen ein zentrales Gestaltungsmittel. Die
  Dreijahresgrenze ist nur eine **Sollvorschrift**; das Finanzamt kann den Zeitraum auf **Antrag**
  nach Ermessen (§ 5 AO) verlängern, etwa wenn die Abwicklung kurz nach Ablauf absehbar endet oder
  sich unverschuldet verzögert. Weil es die Ablehnung nicht begründen muss, sofern kein besonderes
  rechtliches Interesse geltend gemacht wird, sollte ein solches ausdrücklich vorgetragen werden.
  Beim **Rumpfwirtschaftsjahr** vor der Auflösung fallen Handels- und Steuerrecht auseinander:
  handelsrechtlich Pflicht, steuerlich **Wahlrecht**. Der Verzicht zieht das Ergebnis in den
  Abwicklungszeitraum und erlaubt die Saldierung eines Verlustes ohne Mindestbesteuerung; die Bildung
  ermöglicht es, das Ergebnis noch regulär **auszuschütten**. Das **Ende** des Zeitraums verschiebt
  die Wahl nicht, denn die Frist läuft stets ab der Auflösung – so dass in Extremfällen **47 Monate**
  (bis zu 11 Monate davor plus 36 danach) zusammenkommen. Im Insolvenzfall entfällt das Wahlrecht,
  weil § 155 Abs. 2 InsO zwingend ein neues Geschäftsjahr beginnen lässt. Dauert die Abwicklung
  **länger** als drei Jahre, wird nach dem ersten Zeitraum **jährlich** veranlagt, und die besondere
  Gewinnermittlung gilt nur im **letzten** Zeitraum – folgerichtig, weil das zur Verteilung kommende
  Endvermögen erst am Ende feststeht. Ob die früheren Bescheide **endgültig** oder bloße
  **Zwischenveranlagungen** sind, ist beim BFH (I R 36/18) offen; das FG Düsseldorf hat Letzteres
  bejaht. Der Streit entscheidet unmittelbar über die Mindestbesteuerung, weshalb einschlägige
  Bescheide offengehalten werden sollten. Das **Ende** des Abwicklungszeitraums schließlich tritt
  erst mit rechtsgültigem Abschluss **einschließlich des Sperrjahres** ein – auch wenn das Vermögen
  schon vorher vollständig ausgeschüttet wurde; die Löschung ist ohne Bedeutung.
  Die **Gewinnermittlung** nach § 11 Abs. 2 KStG ist ein **Betriebsvermögensvergleich** über den
  gesamten Abwicklungszeitraum, und ihre Korrekturposten folgen dem Muster des § 4 Abs. 1 EStG: Was an
  die Gesellschafter abgeflossen ist – Vorschüsse, verdeckte Gewinnausschüttungen –, wird dem
  Endvermögen hinzugerechnet, was von ihnen hineingekommen ist – Einlagen –, wird abgezogen; ebenso
  werden steuerfreie Einnahmen herausgenommen und nichtabziehbare Aufwendungen hinzugerechnet. Die
  Spenden erscheinen zweimal: Zunächst werden **sämtliche** hinzugerechnet, nach dem Zwischenergebnis
  die **abzugsfähigen** wieder abgezogen, weil sich der Höchstbetrag nach dem Einkommen bemisst. Der
  Abwicklungsgewinn gilt mit Ablauf des letzten Besteuerungszeitraums als bezogen und ist – anders als
  der Aufgabegewinn eines Einzelunternehmers – **auch gewerbesteuerpflichtig**, weil die
  Gewerbesteuerpflicht der Kapitalgesellschaft erst mit der Schlussverteilung endet.
  Das **Abwicklungs-Anfangsvermögen** ist das Betriebsvermögen laut **letzter Steuerbilanz** vor der
  Abwicklung, und zwar zum **Buchwert**; fehlt eine Veranlagung, ist der Wert fiktiv zu ermitteln.
  Daraus entsteht eine bewusste **Asymmetrie**: Buchwert am Anfang, **gemeiner Wert** am Ende – genau
  diese Differenz macht die stillen Reserven sichtbar, ohne dass es einer Veräußerung bedürfte. Nach
  § 11 Abs. 4 Satz 3 KStG ist das Anfangsvermögen um **Gewinnausschüttungen für Wirtschaftsjahre vor
  der Auflösung** zu mindern, die erst im Abwicklungszeitraum fließen; ohne die Korrektur würde die
  Ausschüttung als Buchverlust den Abwicklungsgewinn mindern, obwohl sie reine Gewinnverwendung ist
  (im Beispiel 300.000 € ./. 70.000 € = 230.000 €). Beim Anteilseigner bleiben diese Beträge reguläre
  Beteiligungserträge nach § 20 Abs. 1 **Nr. 1** EStG, während die Schlussauskehrung unter **Nr. 2**
  fällt. Wird die Gesellschaft **im Gründungsjahr** aufgelöst, fehlt eine Vorjahresbilanz; § 11 Abs. 5
  KStG setzt dann die **geleisteten und noch zu erbringenden Einlagen** an – im Beispiel 105.000 €
  einschließlich Agio und offener Einlageforderung. Bildet die Gesellschaft dagegen ein
  **Rumpfwirtschaftsjahr**, gilt dessen Schlussbilanz als Anfangsvermögen (im Beispiel 0 €), und der
  bis dahin entstandene Verlust wird als Verlustvortrag in den Besteuerungszeitraum getragen – mit
  dem Vorbehalt der Mindestbesteuerung bei größeren Beträgen. Bei **mehreren Besteuerungszeiträumen**
  gilt der besondere Vermögensvergleich nur im **letzten**, und er beginnt mit der Steuerbilanz des
  **vorletzten**; so wird jeder Gewinnbestandteil genau einmal erfasst.
  Das **Abwicklungs-Endvermögen** (§ 11 Abs. 3 KStG) ist das verteilbare Vermögen, bewertet ohne
  Maßgeblichkeit und ohne §§ 5, 6 EStG mit dem **gemeinen Wert**; der originäre Firmenwert geht in
  aller Regel unter, ein Gesellschafterdarlehen wird durch die bloße Auflösung **nicht** erlassen.
  **Vorschüsse** erhöhen das Endvermögen (500.000 € + 100.000 € = 600.000 €), ebenso **verdeckte
  Zuwendungen** zum gemeinen Wert abzüglich Gegenleistung (500.000 € + 400.000 € = 900.000 €).
  **Steuerfreie Erträge** und **verdeckte Einlagen** mindern es bereits auf dieser Stufe – im
  Beispiel ./. 1.000.000 € nach § 8b Abs. 2 KStG mit 50.000 € nicht abziehbaren Betriebsausgaben.
  § 11 Abs. 6 KStG hält die allgemeinen Hinzurechnungen aufrecht, und beim **Verlustabzug** nach
  § 10d EStG kann die Mindestbesteuerung im letzten Zeitraum zum **endgültigen Untergang** führen.
  Das **Gesamtbeispiel** (Abwicklung 2019 – 2021) führt vom Vermögensvergleich 502.000 € ./. 380.000 €
  = 122.000 € über die Hinzurechnung der Körperschaftsteuer (+ 18.000 €) zum Abwicklungsgewinn von
  140.000 € und 21.000 € Körperschaftsteuer. Beim **Einlagekonto** gilt zuerst das übrige Eigenkapital
  als verwendet (allgemeine Verwendungsreihenfolge, Stand der Liquidationsschlussbilanz), danach das
  **Nennkapital** im Direktzugriff nach § 28 Abs. 2 KStG; ein **Sonderausweis** wird vorrangig
  verrechnet und führt insoweit zu Bezügen nach § 20 Abs. 1 Nr. 2 EStG. Vier Beispiele zeigen die
  Aufteilung in Bezüge und Einlagenrückgewähr bis hin zum Fall, dass das verteilbare Vermögen unter
  dem Nennkapital liegt. Beim **Anteilseigner** erfasst § 17 Abs. 4 EStG (Teileinkünfteverfahren)
  bzw. § 20 Abs. 2 Nr. 1 EStG die Einlagenrückgewähr im Privatvermögen; im Betriebsvermögen einer
  Kapitalgesellschaft gilt § 8b Abs. 2 KStG mit der Ausnahme für frühere gewinnwirksame
  Teilwertabschreibungen (§ 8b Abs. 2 Satz 4 KStG). Der übrige Teil – einschließlich Sonderausweis –
  führt zu Einnahmen nach § 20 Abs. 1 Nr. 2 EStG (im Beispiel 430.000 € neben 70.000 €
  Kapitalrückzahlung). Die **Gewerbesteuerpflicht** endet erst mit der Vermögensverteilung, und § 16
  GewStDV verteilt den Gewerbeertrag nach Monaten (239.000 € × 5/29, 12/29, 12/29). Die
  **Umsatzsteuer** kennt keinen mehrjährigen Zeitraum; die Auskehrung von Gegenständen ist ein
  tauschähnlicher Umsatz, und für die Organschaft unterscheidet die Quelle Liquidation und
  Insolvenz von Organträger und Organgesellschaft.
  Damit ist das Skript vollständig abgebildet; sämtliche Zahlen sind unabhängig nachgerechnet.
  Prüfung: `npm run check:k2-kst-teil7`

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
