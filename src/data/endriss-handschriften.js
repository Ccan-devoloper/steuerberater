/* Visuell aus den angegebenen Originalseiten übertragen. Keine Rechtsstandsprüfung.
   Abkürzungen sind für die Lesbarkeit ausgeschrieben. Keine hinzuerfundenen
   Original-Lösungen; Widersprüche zwischen Quellenfassungen bleiben erkennbar. */
const p = text => ({ text });
const h = text => ({ typ: 'titel', text });
const t = (spalten, zeilen) => ({ typ: 'tabelle', spalten, zeilen });
const kapitel = (id, title, pages, normen, bloecke) => ({ id, title, pages, normen, bloecke });

export const endrissHandschriften = {
  'istr-hinzurechnung': [
    kapitel('istr-hinzurechnung-fall', 'Hinzurechnungsbesteuerung – A-Limited in den VAE', [1,2,3,4], ['§ 1 EStG','§§ 7, 8, 10, 12 AStG','§ 20 EStG','§ 34c EStG'], [
      h('Sachverhalt – PDF-Seite 1'),
      p('A, Wohnsitz Bonn, ist zu 100 % an der A-Limited beteiligt. Die A-Limited ist mit einer deutschen Kapitalgesellschaft vergleichbar; die Beteiligung befindet sich im Privatvermögen. Die Gesellschaft vermietet ein Grundstück und hat Sitz und Geschäftsleitung in den VAE (Dubai). Der Sachverhalt nennt für Kapitalgesellschaften eine Ertragsteuer von 9 % in den VAE. Im Wirtschaftsjahr des Examens erzielt die A-Limited einen Gewinn nach deutschem Steuerrecht von 100.000 €. Als ausdrückliche Fallannahme ist „Kein DBA mit VAE“ vorgegeben. Aufgabe: Beurteilung bei A.'),
      h('Lösungsweg – PDF-Seiten 1–3'),
      p('§ 1 Abs. 1 Satz 1 EStG ist erfüllt: A ist eine natürliche Person mit Wohnsitz im Inland, § 8 AO. Für A gilt das Welteinkommensprinzip im Sinne des § 2 Abs. 1 EStG, vorbehaltlich eines DBA.'),
      p('§ 7 Abs. 1 Satz 1 AStG ist erfüllt, da A als unbeschränkt Steuerpflichtiger die A-Limited zu 100 % beherrscht, § 7 Abs. 2 AStG.'),
      p('Die Handschrift verweist für die niedrige Besteuerung auf § 8 Abs. 5 AStG und nennt die 9 % in den VAE. Nach dem anschließenden Verweis auf § 8 Abs. 1 Nr. 6 Buchstabe b AStG ist die Hinzurechnungsbesteuerung wegen der Vermietung eines Grundstücks anwendbar.'),
      p('§ 10 Abs. 1 AStG: Hinzurechnungsbetrag. Zuordnung zu § 20 Abs. 1 Nr. 1 EStG nach § 10 Abs. 2 Satz 1 AStG. Die Quelle notiert ausdrücklich: ohne Teileinkünfteverfahren, ohne § 32d EStG; § 10 Abs. 2 Satz 4 AStG.'),
      t(['Position laut Handschrift','Ansatz'], [['Hinzurechnungsbetrag bei A','100.000 €'],['Besteuerung','Persönlicher Steuersatz des A']]),
      h('Anrechnung – PDF-Seite 4'),
      p('§ 12 Abs. 1 und Abs. 3 AStG, § 34c Abs. 1 EStG: Anrechnung der 9.000 € auf die deutsche Einkommensteuer. Eine weitergehende Rechnung zu einem konkreten persönlichen Steuersatz enthält das Blatt nicht.')
    ])
  ],
  'lst-mitschrift': [
    kapitel('lst-notiz-register', 'Farbiges Register zum Arbeitslohn-Prüfweg', [1], ['§ 19 EStG','§ 8 EStG','§ 2 LStDV','§ 40 EStG','§ 37b EStG'], [
      p('Die erste Seite zeigt ein farbiges Register an EStG/EStR/LStR. Die Farben ordnen die folgenden Fälle den Prüfungsschritten zu; die Originalabbildung bleibt als Farbvorlage erhalten.'),
      t(['Farbe / Stufe','Verweise aus der Skizze'], [
        ['Rot – Einnahme','§ 19 Abs. 1 Satz 1 Nr. 1 EStG; § 2 Abs. 1 LStDV; § 8 Abs. 1 Satz 1 EStG'],
        ['Orange – Steuerbarkeit','§ 19 Abs. 1 Satz 1 Nr. 1a EStG; R 19.6 LStR (Aufmerksamkeiten)'],
        ['Gelb – Steuerbefreiung','Die konkreten Befreiungen werden in den nachfolgenden Fällen ergänzt.'],
        ['Grün – Bewertung','§ 8 Abs. 2 Satz 1 und Satz 11 EStG; R 8.1 Abs. 2 Satz 3 LStR'],
        ['Blau – Pauschalierung / Rechtsfolge','§ 40 Abs. 2 EStG; § 37b Abs. 2 EStG']
      ])
    ]),
    kapitel('lst-notiz-wein', 'Kiste Wein zu Ostern – 50-€-Freigrenze und Abwandlung', [1,2,3,4,5], ['§ 19 EStG','§ 8 EStG','§ 37b EStG'], [
      h('Ausgangsfall: Wert 52 €'),
      p('Arbeitnehmer MN erhält zu Ostern eine Kiste Wein. Der Wert von 52 € entspricht dem üblichen Endpreis.'),
      p('I. Die Kiste Wein ist ein Sachbezug: § 19 Abs. 1 Satz 1 Nr. 1 EStG, § 2 Abs. 1 LStDV, § 8 Abs. 1 Satz 1 EStG. II. Steuerbarer Arbeitslohn; keine Aufmerksamkeit nach R 19.6 Abs. 1 LStR, da Ostern kein persönliches Ereignis ist. Stufe III enthält keinen zusätzlichen Eintrag. IV. § 8 Abs. 3 EStG ist nicht anwendbar.'),
      t(['Bewertung laut Handschrift','Betrag'], [['Üblicher Endpreis, § 8 Abs. 2 Satz 1 EStG','52,00 €'],['Üblicher Preisnachlass nach R 8.1 Abs. 2 Satz 3 LStR: 52 € × 96 %','49,92 €'],['§ 8 Abs. 2 Satz 11 EStG','50-€-Freigrenze nicht überschritten']]),
      h('Abwandlung: Wert 100 €'),
      p('Die Kiste Wein hat einen Wert von 100 €. Die Handschrift durchläuft erneut die Stufen I–IV: Sachbezug, steuerbarer Arbeitslohn, keine Anwendung des § 8 Abs. 3 EStG; Bewertung nach § 8 Abs. 2 Satz 1 EStG und R 8.1 Abs. 2 Satz 3 LStR.'),
      t(['Schritt','Rechnung / Ergebnis'], [['Bewertung','100 € × 96 % = 96 €'],['Freigrenze','50 € überschritten'],['Pauschalierung an Arbeitnehmer, § 37b Abs. 2 EStG','30 % der Brutto-Aufwendungen; § 37b Abs. 1 Sätze 1 und 2 EStG'],['Pauschale Steuer laut Quelle','100 € × 30 % = 30 €'],['§ 37b Abs. 3 Satz 1 EStG','Kein Ansatz in der Summe der Einkünfte']])
    ]),
    kapitel('lst-notiz-betriebsfest', 'Weihnachtsfeier, Begleitperson und erstattete Taxikosten', [6,7,8,9], ['§ 19 Abs. 1 Satz 1 Nr. 1a EStG','§ 3 Nr. 16 EStG','§ 40 Abs. 2 EStG'], [
      h('Sachverhalt'),
      p('MN nimmt mit einer Begleitperson an der Weihnachtsfeier des Arbeitgebers teil. Gesamtkosten der Feier: 10.000 €. Angemeldet sind 110 Personen, anwesend 100 Personen. Nach der Feier fährt MN mit einem Taxi im Einzeltransport nach Hause. Die Taxikosten von 40 € werden vom Arbeitgeber erstattet.'),
      h('Quellenweg'),
      p('Die Teilnahme an der Feier ist ein Sachbezug nach § 19 Abs. 1 Satz 1 Nr. 1 EStG, § 2 Abs. 1 LStDV, § 8 Abs. 1 Satz 1 EStG. Die Erstattung der Taxikosten ist Geld nach § 8 Abs. 1 Satz 2 EStG. Die betriebliche Ebene mit gesellschaftlichem Charakter führt zur Betriebsveranstaltung nach § 19 Abs. 1 Satz 1 Nr. 1a EStG.'),
      t(['Kostenaufteilung nach § 19 Abs. 1 Satz 1 Nr. 1a Satz 2 EStG','Betrag'], [['10.000 € / 100 anwesende Teilnehmer','100 € je Kopf'],['MN und Begleitung: 100 € × 2','200 €'],['Abzug nach § 19 Abs. 1 Satz 1 Nr. 1a Sätze 3 und 4 EStG','−110 €'],['Verbleibend','90 €']]),
      p('Die Taxikostenerstattung wird in der Handschrift unter § 3 Nr. 16 EStG als steuerfreie Reisekostenerstattung eingeordnet. Zugleich wird nach § 3c Abs. 1 EStG ein Werbungskostenabzug ausgeschlossen. Diese Einordnung wird als Quelleninhalt unverändert wiedergegeben.'),
      p('§ 8 Abs. 2 EStG ist wegen § 19 Abs. 1 Satz 1 Nr. 1a Satz 5 EStG nicht anwendbar. § 40 Abs. 2 Satz 1 Nr. 2 EStG: Pauschalierung mit 25 %; 90 € × 25 % = 22,50 € pauschale Lohnsteuer. § 40 Abs. 3 Sätze 3 und 4 EStG: nicht in der Summe der Einkünfte und keine Anrechnung der pauschalen Lohnsteuer.')
    ]),
    kapitel('lst-notiz-ebike', 'E-Bike – zusätzlich zum Lohn oder gegen Gehaltsverzicht', [10,11,12,13], ['§ 3 Nr. 37 EStG','§ 8 Abs. 4 EStG','§ 8 Abs. 2 Satz 10 EStG'], [
      p('MN erhält ab Januar 2025 ein E-Bike mit maximal 25 km/h; Herstellerpreis 4.110 €. Die Überlassung ist zunächst ein Sachbezug nach § 19 Abs. 1 Satz 1 Nr. 1 EStG, § 2 Abs. 1 LStDV und § 8 Abs. 1 Satz 1 EStG. Die Quelle behandelt das E-Bike als Fahrrad. Bei zusätzlicher Gewährung zum Lohn ist die Überlassung nach § 3 Nr. 37 EStG in Verbindung mit § 8 Abs. 4 EStG steuerfrei.'),
      h('Abwandlung: Verzicht auf Barlohn'),
      p('MN verzichtet auf Barlohn. Die Zusätzlichkeitsvoraussetzung ist nicht erfüllt; § 3 Nr. 37 EStG ist nach § 8 Abs. 4 EStG nicht anwendbar. Die Handschrift verweist ergänzend auf H 3.37 LStH.'),
      t(['Bewertung nach § 8 Abs. 2 Satz 10 EStG; Erlass vom 9.1.2020, Rn. 2','Rechnung'], [['Viertel des Herstellerpreises','4.110 € × 1/4 = 1.027,50 €'],['Abgerundete Bemessungsgrundlage laut Blatt','1.000 €'],['1 % je Monat','10 €'],['Keine 50-€-Freigrenze','Erlass, Rn. 3'],['Jahresansatz','10 € × 12 Monate = 120 €; Eingang in die Summe der Einkünfte']])
    ]),
    kapitel('lst-notiz-deutschlandticket', 'Deutschland-Ticket bei ausschließlich privater Nutzung', [13,14], ['§ 3 Nr. 15 EStG','§ 8 Abs. 4 EStG','§ 9 Abs. 1 Satz 3 Nr. 4 EStG'], [
      p('MN erhält ein Deutschland-Ticket, das er ausschließlich privat nutzt. I. Das Ticket ist Sachbezug, § 19 Abs. 1 Satz 1 Nr. 1 EStG, § 2 Abs. 1 LStDV, § 8 Abs. 1 Satz 1 EStG. Stufe II ist ohne weiteren Eintrag.'),
      p('III. § 3 Nr. 15 EStG und § 8 Abs. 4 EStG: Da die Gewährung zusätzlich zum Lohn erfolgt, ist das Ticket nach dem Lösungsblatt steuerfrei. Die Quelle nennt H 3.15 LStH und § 3 Nr. 15 Satz 3 EStG: Minderung der Werbungskosten nach § 9 Abs. 1 Satz 3 Nr. 4 EStG.')
    ]),
    kapitel('lst-notiz-elektronik', 'Überlassenes Firmenhandy', [14,15], ['§ 3 Nr. 45 EStG'], [
      p('MN erhält ein Firmenhandy zur Nutzung überlassen. Das Blatt ordnet die Überlassung unter § 3 Nr. 45 EStG ein: unabhängig vom Anteil der Nutzung steuerfrei. Einen Erwerb des Geräts oder einen zusätzlichen Zahlenfall enthält diese Passage nicht.')
    ]),
    kapitel('lst-notiz-pkw-ohne', 'Hybrid-Firmenwagen ohne Fahrtenbuch', [15,16,17,18,19], ['§ 8 Abs. 2 Sätze 2 und 3 EStG','§ 6 Abs. 1 Nr. 4 Satz 2 EStG','§ 40 Abs. 2 Satz 2 Nr. 1a EStG'], [
      h('Sachverhalt'),
      p('MN erhält ab 2.1.2025 einen angeschafften Hybrid-Firmenwagen, Bruttolistenpreis 68.320 €, Reichweite des Elektromotors 100 km. Er nutzt den Wagen privat und für Fahrten zwischen Wohnung und erster Tätigkeitsstätte. Entfernung: 25,2 km. Er fährt nachweislich achtmal je Monat zur ersten Tätigkeitsstätte.'),
      p('Die Überlassung ist Sachbezug nach § 19 Abs. 1 Satz 1 Nr. 1 EStG, § 2 Abs. 1 LStDV, § 8 Abs. 1 Satz 1 EStG. Für private Fahrten wird die 1-%-Methode nach § 8 Abs. 2 Satz 2 EStG und § 6 Abs. 1 Nr. 4 Satz 2 EStG verwendet. Die Viertelung ist nach dem Blatt nicht anwendbar, da ein Hybrid-Pkw vorliegt. Die Halbierung wird mit der Reichweite von 100 km begründet.'),
      t(['Berechnung laut Handschrift','Ergebnis'], [['68.320 € × 1/2','34.160 €'],['Abrundung nach R 8.1 Abs. 9 Nr. 1 Satz 6 LStR','34.100 €'],['Privat: 34.100 € × 1 % × 12 Monate','4.092 €'],['Wohnung/erste Tätigkeitsstätte: 34.100 € × 0,03 % × 25 km × 12 Monate','3.069 €'],['Einzelbewertung laut BMF vom 3.3.2022, Rn. 13: 34.100 € × 0,002 % × 8 Fahrten × 12 Monate × 25 km','1.637 € laut Blatt']]),
      h('Pauschalierung der Fahrten Wohnung/erste Tätigkeitsstätte'),
      p('§ 40 Abs. 2 Satz 2 Nr. 1a EStG: Pauschalierung mit 15 %, maximal in Höhe der Entfernungspauschale.'),
      t(['Schritt','Ergebnis laut Quelle'], [['20 km × 0,30 € × 96 Fahrten + 5 km × 0,38 € × 96 Fahrten','758 €'],['758 € × 15 %','114 € pauschale Steuer'],['Pauschalierter Anteil','Nicht in die Summe der Einkünfte; kein Werbungskostenabzug'],['Verbleibender Fahrtvorteil: 1.637 € − 758 €','879 € in die Summe der Einkünfte'],['Privatnutzung','4.092 € in die Summe der Einkünfte']])
    ]),
    kapitel('lst-notiz-pkw-fahrtenbuch', 'Hybrid-Firmenwagen mit Fahrtenbuch und Quellenkorrektur', [20,21,22,23,24], ['§ 8 Abs. 2 Satz 4 EStG','§ 6 Abs. 1 Nr. 4 Satz 3 EStG','§ 3 Nr. 46 EStG'], [
      h('Sachverhalt und Datumsangaben der Handschrift'),
      p('Das Beispiel beginnt mit „ab 01/26“. Die Folgeseiten rechnen jedoch mit Fahrleistungen und Anschaffung 2025. Dieser Widerspruch der Quelldatierung bleibt unverändert dokumentiert. Anschaffungskosten des Arbeitgebers: 50.000 € zuzüglich 19 % Umsatzsteuer. Hybrid-Pkw mit CO₂-Ausstoß 40 g/km. Ordnungsgemäßes Fahrtenbuch; der Arbeitgeber will nicht pauschalieren.'),
      t(['Kosten einschließlich Umsatzsteuer','Betrag'], [['Waschstraße','238 €'],['Kfz-Steuer','500 €'],['Benzin','4.000 €'],['Aufladen beim Arbeitgeber vor Ort','700 €'],['Kfz-Versicherung','400 €']]),
      t(['Fahrleistung laut Quelle','Umfang'], [['Gesamt','20.000 km'],['Privat','5.000 km'],['Wohnung/erste Tätigkeitsstätte','30 km Entfernung; 200 Fahrten; Hin- und Rückweg 12.000 km']]),
      h('Fahrtenbuchmethode'),
      p('§ 8 Abs. 2 Satz 4 EStG und § 6 Abs. 1 Nr. 4 Satz 3 EStG: keine Viertelung beim Hybrid-Pkw. Halbierung der Anschaffungskosten nach dem angegebenen Erwerbsjahr und CO₂-Ausstoß. Die Quelle nennt R 8.1 Abs. 9 Nr. 2 Satz 8 LStR sowie BMF vom 3.3.2022, Rn. 34, und rechnet mit acht Jahren Abschreibung.'),
      t(['Gesamtkostenberechnung','Betrag laut Blatt'], [['AfA: 59.500 € × 1/2 × 1/8','3.719 €'],['Waschstraße','+238 €'],['Kfz-Steuer','+500 €'],['Benzin','+4.000 €'],['Kfz-Versicherung','+400 €'],['Gesamtkosten','8.857 €'],['Aufladen beim Arbeitgeber vor Ort','Steuerfrei nach § 3 Nr. 46 EStG; nicht einbezogen'],['8.857 € / 20.000 km','0,44 € je km laut Blatt'],['Privat: 5.000 km × 0,44 €','2.200 €'],['Wohnung/erste Tätigkeitsstätte: 12.000 km × 0,44 €','5.280 €']]),
      h('Vergleichsrechnung – die zusätzliche Korrekturseite ist maßgebend für den Quellenstand'),
      p('Die ursprünglichen Seiten 23–24 runden 29.750 € irrtümlich auf 29.000 € ab und zeigen 3.480 € + 3.132 € = 6.612 €. Das separat bereitgestellte Blatt „Korrektur allerletzte Berechnung, Rundungsfehler.pdf“ streicht diese Werte in Rot und ersetzt sie durch die folgende Rechnung. Es handelt sich um die Korrektur des Verfassers, nicht um eine Rechtsstandsprüfung.'),
      t(['Korrigierter Schritt','Ergebnis laut Korrekturblatt'], [['59.500 € × 1/2','29.750 €'],['Abrundung nach R 8.1 Abs. 9 Nr. 1 Satz 6 LStR','29.700 €'],['29.700 € × 1 % × 12 Monate','3.564 €'],['29.700 € × 0,03 % × 30 km × 12 Monate','3.207 € laut Blatt'],['Gesamt laut Korrekturblatt','6.771 €'],['Quellenergebnis','1 % + 0,03 % günstiger; 6.771 € in die Summe der Einkünfte']]),
      p('Quellenbeträge mit bereits erfolgter Rundung werden nicht stillschweigend neu gerechnet. Die ursprüngliche und die korrigierte Fassung bleiben im Originalseiten-Reader nachvollziehbar.')
    ])
  ],
  'lst-korrektur': [
    kapitel('lst-korrektur-original', 'Rundungsfehler der letzten Firmenwagenrechnung – rote Quellenkorrekturen', [1], ['§ 8 Abs. 2 Sätze 2 und 3 EStG','R 8.1 Abs. 9 Nr. 1 Satz 6 LStR'], [
      p('Dieses Blatt korrigiert die letzte Rechnung der „Lohnsteuervideo Mitschrift“, Seiten 23–24. Die gestrichenen ursprünglichen Zahlen werden nicht als gültiges Ergebnis des Quellenbestands weitergeführt.'),
      t(['Position','Gestrichene Fassung','Korrektur in Rot'], [['Abgerundete Hälfte von 59.500 €','29.000 €','29.700 €'],['1 % × 12 Monate','3.480 €','3.564 €'],['0,03 % × 30 km × 12 Monate','3.132 €','3.207 €'],['Gesamt / Summe der Einkünfte','6.612 €','6.771 €']]),
      p('Unverändertes Fazit des Blatts: 1-%-Methode zuzüglich 0,03-%-Ansatz ist günstiger. Die in der Handschrift ausgewiesenen Rundungen werden beibehalten.')
    ])
  ]
};

export const endrissHandschriftenAudit = {
  legalReview: false,
  'istr-hinzurechnung': { reviewedPages: [1,2,3,4], nativeTranscription: 'complete' },
  'lst-mitschrift': { reviewedPages: Array.from({length:24}, (_,i)=>i+1), nativeTranscription: 'complete', correctionSource: 'lst-korrektur' },
  'lst-korrektur': { reviewedPages: [1], nativeTranscription: 'complete', correctsSource: 'lst-mitschrift', correctsPages: [23,24] }
};
