/* Die drei UmwStR-Hausaufgaben von RA/StB U. Breier.

   Aufbau wie bei den Bilanz-Hausaufgaben: eine strukturierte Kurzfassung für
   Übersicht, Suche und Themenfilter, dazu der 1:1 aus der PDF übernommene
   Volltext, der erst beim Aufklappen geladen wird.

   Die Zusammenfassungen unter aufgaben/loesung sind Orientierung, nicht Ersatz
   des Originals - massgeblich ist immer der Volltext. */

export const umwstrHausaufgaben = [
  {
    id: "umwstr-ha-1",
    termin: 1,
    titel: "Einlage und Einbringung in die Kapitalgesellschaft",
    untertitel: "Abgrenzung verdeckte Einlage zu §§ 20 ff. UmwStG und Option gem. § 1a KStG",
    zeit: "1. Fachtermin",
    rechtsstand: "2025",
    quelle: "B-TL-S25-UmwStR-Termin 1-Hausaufgabe-0426.pdf",
    themen: ["Verdeckte Einlage", "§ 20 UmwStG", "§ 1a KStG", "Formwechsel", "§ 17 EStG", "Einbringungsgewinn I", "Steuerliches Einlagekonto"],
    aufgaben: [
      "Sachverhalt 1 – Dr. Finke: Gründung der F-GmbH mit Agio, Zahlungen aus dem Privat- und dem Betriebsvermögen, Verkauf des handelschemischen Labors an die GmbH sowie Abspaltung eines Geschäftsanteils. Einkünfte aus selbständiger Arbeit, Gewerbebetrieb und Kapitalvermögen ermitteln und verdeckte Einlage von §§ 20 ff. UmwStG abgrenzen.",
      "Sachverhalt 2 – A-OHG (Alt und Edel): Option zur Körperschaftbesteuerung gem. § 1a Abs. 1 KStG mit Sonderbetriebsvermögen des Erwin Alt. Einkünfte aus Gewerbebetrieb 2025 für Alt und Edel ermitteln.",
      "Grunderwerbsteuerliche Folgen des Sachverhalts beurteilen.",
      "Steuerliches Einlagekonto gem. § 27 KStG auf den zutreffenden Stichtag ermitteln.",
      "Abwandlung: Klaus Edel veräußert am 1.3.2027 seinen 40 %igen Anteil an der A-OHG für 800.000 € – steuerliche Folgen für 2025 und 2027.",
    ],
    loesung: [
      "Die Zahlungen der F aus dem Privatvermögen sind Einlagen; das freiwillige Aufgeld aus dem Geschäftskonto ist als verdeckte Einlage zu würdigen. § 20 UmwStG ist auf den Verkauf nach seinem Wortlaut nicht anzuwenden, weil keine neuen Anteile gewährt werden.",
      "Die Betriebsaufgabe zum 1.4.2025 beendet die freiberufliche Tätigkeit; Aufgabegewinn und laufender Gewinn sind zu trennen. Der Freibetrag ist gem. § 17 Abs. 3 EStG zu berechnen.",
      "Die Option gem. § 1a KStG gilt als Formwechsel; über § 1a Abs. 2 S. 2 KStG ist § 25 i.V.m. §§ 20 ff. UmwStG für jeden Mitunternehmer einzeln zu prüfen. Funktional wesentliches Sonderbetriebsvermögen muss mit übertragen werden – bloße Vermietung genügt nicht.",
      "Wird das Grundstück des Erwin Alt nicht mit übertragen, scheidet der Buchwertansatz insoweit aus; die Rechtsfolgen sind für Alt und Edel getrennt darzustellen.",
      "In der Abwandlung löst die Anteilsveräußerung innerhalb der Sperrfrist einen Einbringungsgewinn I gem. § 22 Abs. 1 UmwStG aus; die Anschaffungskosten der erhaltenen Anteile erhöhen sich entsprechend.",
    ],
    normen: ["§§ 20, 22, 25 UmwStG", "§ 1a KStG", "§ 27 KStG", "§§ 16, 17, 18 EStG", "§ 6 Abs. 6 S. 2 EStG", "§ 180 AO", "GrEStG"],
  },
  {
    id: "umwstr-ha-2",
    termin: 2,
    titel: "Einbringung gem. §§ 20 und 21 UmwStG",
    untertitel: "Negatives Kapital, Rückbeziehung, Sperrfristverletzung und Anteilstausch",
    zeit: "2. Fachtermin",
    rechtsstand: "2025",
    quelle: "B-TL-S25-UmwStR-Termin 2-Hausaufgabe-0826.pdf",
    themen: ["§ 20 UmwStG", "§ 21 UmwStG", "Negatives Kapital", "Rückbeziehung", "Einbringungsgewinn I", "Einbringungsgewinn II", "Sachgründung"],
    aufgaben: [
      "Sachverhalt 1 – Dr. Franke: Einbringung eines Einzelunternehmens mit negativem Kapital von ./. 300.000 € im Wege der Sachgründung in die Antik-GmbH, Rückbeziehung auf den 1.1.2025, Zurückbehaltung des Darlehens und zinslose Darlehensverbindlichkeit gegenüber der Einbringenden. Steuerliche Eröffnungsbilanz der A-GmbH erstellen und die Einkünfte für 2025 und 2026 ermitteln.",
      "Abwandlung zu Sachverhalt 1: Veräußerung der Anteile an der A-GmbH am 1.3.2026 für 400.000 €.",
      "Sachverhalt 2 – Erwin Bauer und Klaus Schmidt: steuerliche Folgen der Einbringung eines Mitunternehmeranteils in die B-GmbH, laufende Einkünfte und Einbringungsgewinn I.",
      "Sachverhalt 3 – F und B-GmbH: Einbringung der Anteile an der Z-GmbH; die Beteiligten wollen den Vorgang so steuergünstig wie möglich gestalten. Folgen für F und die B-GmbH darstellen.",
    ],
    loesung: [
      "Bei negativem Kapital des eingebrachten Vermögens ist der Buchwertansatz gem. § 20 Abs. 2 S. 2 Nr. 2 UmwStG ausgeschlossen; zwingend ist der Zwischenwertansatz bis Kapital 0 €.",
      "Die zurückbehaltene Darlehensverbindlichkeit und die daraus folgende sonstige Gegenleistung sind gesondert zu würdigen; die Rückbeziehung ändert nichts am Wertansatz.",
      "Die rückwirkende Änderung des Steuerbescheides folgt aus § 22 Abs. 1 UmwStG i.V.m. § 175 AO, wenn die Anteile innerhalb der Sperrfrist veräußert werden.",
      "Der Einbringungsgewinn I mindert sich um ein Siebtel für jedes abgelaufene Jahr und gilt gem. § 22 Abs. 1 S. 4 UmwStG als nachträgliche Anschaffungskosten der erhaltenen Anteile; bei der übernehmenden GmbH führt der Erhöhungsbetrag zu zusätzlichem Abschreibungsvolumen.",
      "Für die Einbringung der Anteile an der Z-GmbH gilt § 21 UmwStG; eine Veräußerung innerhalb der Sperrfrist löst den Einbringungsgewinn II gem. § 22 Abs. 2 UmwStG aus.",
    ],
    normen: ["§§ 20, 21, 22, 23 UmwStG", "§ 20 Abs. 2 S. 2 Nr. 2 UmwStG", "§§ 16, 17 EStG", "§ 8b KStG", "§ 5 Abs. 4 GmbHG", "§ 175 AO"],
  },
  {
    id: "umwstr-ha-3",
    termin: 3,
    titel: "Verschmelzung von Kapitalgesellschaften und Umwandlung in ein Personenunternehmen",
    untertitel: "§§ 11–13 UmwStG sowie Formwechsel nach §§ 3 ff., 9 UmwStG",
    zeit: "3. Fachtermin",
    rechtsstand: "2025",
    quelle: "B-TL-S25-UmwStR-Termin 3-Hausaufgabe Kl. 3-0426.pdf",
    themen: ["Verschmelzung", "§ 11 UmwStG", "§ 12 UmwStG", "§ 13 UmwStG", "Formwechsel", "§§ 3–7 UmwStG", "Übernahmeergebnis", "Gewerbesteuer"],
    aufgaben: [
      "Sachverhalt 1 – Verschmelzung der B-GmbH auf die A-GmbH zum Umwandlungsstichtag 1.1.2026 (Aufwärtsverschmelzung, 80 % Beteiligung, Kapitalerhöhung für Erwin Bertram): Einkommensermittlung der A-GmbH unter Berücksichtigung der Verschmelzung.",
      "Steuerbilanz der A-GmbH zum 31.12.2025 nach Verschmelzung aufstellen und die zum 31.12.2025 festzustellenden Beträge ermitteln; Anschaffungskosten der 10 %-Anteile berechnen, auch mit Antragstellung gem. § 13 Abs. 2 UmwStG.",
      "Sachverhalt 2 – Formwechsel der M-GmbH in die A-GmbH & Co KG: grunderwerbsteuerliche Folgen für das Grundstück der M-GmbH beurteilen.",
      "Steuerliche Eröffnungsbilanz (Übernahmebilanz) der A-GmbH & Co KG auf den richtigen Stichtag erstellen.",
      "Steuerpflichtige Einkünfte der drei Gesellschafter aus der Umwandlung für 2025 ermitteln.",
      "Gewerbesteuerliche Folgen der Umwandlung bei der KG sowie Auswirkungen der Anteilsveräußerung durch Meyer am 1.12.2026 auf Einkommen- und Gewerbesteuer (Hebesatz 500 %).",
    ],
    loesung: [
      "Wird eine Gegenleistung nicht oder nur in Gesellschaftsrechten gewährt, kann die übertragende KapGes gem. § 11 Abs. 2 UmwStG auf Antrag den Buchwert ansetzen; andernfalls sind alle Wirtschaftsgüter einschließlich des Firmenwerts aufzudecken.",
      "Bei der Aufwärtsverschmelzung bleibt der Übernahmegewinn gem. § 12 Abs. 2 S. 1 UmwStG außer Ansatz; gem. § 12 Abs. 2 S. 2 UmwStG i.V.m. § 8b Abs. 3 S. 3 KStG sind 5 % als nicht abziehbare Betriebsausgaben hinzuzurechnen.",
      "Für Erwin Bertram gilt § 13 UmwStG; ohne Antrag ist der gemeine Wert anzusetzen, mit Antrag gem. § 13 Abs. 2 UmwStG treten die neuen Anteile steuerlich an die Stelle der alten.",
      "Beim Formwechsel gilt § 9 S. 1 UmwStG i.V.m. §§ 3 ff.: Die KapGes stellt eine steuerliche Schlussbilanz auf, die PersGes bucht die Werte in der Eröffnungsbilanz ein. Der Hinweis auf § 3 Abs. 2a UmwStG in der Fassung des JStG 2024 ist zu beachten.",
      "Die offenen Rücklagen gelten gem. § 7 UmwStG als Kapitalertrag der Gesellschafter; für Hans Meyer ergeben sich Einkünfte aus Kapitalvermögen, die über § 20 Abs. 8 EStG den Einkünften aus Gewerbebetrieb zugeordnet werden.",
      "Der formwechselnde Rechtsträger bleibt grunderwerbsteuerlich identisch; die Verlustsperre gem. § 4 Abs. 6 S. 6 UmwStG und die Hinzurechnung gem. § 8 Nr. 5 S. 1 GewStG sind gesondert zu prüfen.",
    ],
    normen: ["§§ 3, 4, 5, 7, 9 UmwStG", "§§ 11, 12, 13 UmwStG", "§ 8b KStG", "§§ 16, 17, 20 EStG", "§§ 4 ff., 13 ff. UmwG", "§ 8 Nr. 5, § 7 S. 2 GewStG", "GrEStG"],
  },
];

export const umwstrHausaufgabenSeiten = umwstrHausaufgaben.length;

export default umwstrHausaufgaben;
