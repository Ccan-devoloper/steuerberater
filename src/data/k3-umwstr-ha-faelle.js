/* Gliederung der drei UmwStR-Hausaufgaben nach Sachverhalten.

   Aufbau wie bei den AO-Hausaufgaben: je Hausaufgabe ein Fachtermin mit
   mehreren Fällen; jeder Fall nennt die Seiten seiner Aufgabe und seiner
   Lösung. Eine Seite kann zu zwei Fällen gehören, wenn dort der nächste
   Sachverhalt beginnt - das ist im Original so und wird nicht geglättet.

   Die Seitenbereiche sind aus den Sachverhalts- und Lösungsüberschriften der
   Quellen abgeleitet und werden von tools/pruefen-k3-umwstr-hausaufgaben.mjs
   gegen die Seitentexte geprüft. */

export const umwstrHausaufgaben = [
  {
    id: "UMW-HA-1",
    fachtermin: "1.",
    rechtsstand: "2025",
    seiten: 24,
    quellentitel: "Hausaufgabe 1 mit Lösung · Umwandlungssteuerrecht · 1. Fachtermin",
    untertitel: "Einlage und Einbringung in die Kapitalgesellschaft (Abgrenzung verdeckte Einlage zu §§ 20 ff. UmwStG) und steuerliche Auswirkungen der Option gem. § 1a KStG",
    quelle: "RA/StB U. Breier",
    faelle: [
      {
        id: "UMW-HA1-1",
        nummer: "1",
        titel: "Dr. Finke: Einlage, Einbringung und Verkauf des Labors an die F-GmbH",
        seiten: "Aufgabe S. 2–6 · Lösung S. 10–16",
        aufgabeSeiten: [2, 3, 4, 5, 6],
        loesungSeiten: [10, 11, 12, 13, 14, 15, 16],
        themen: ["Verdeckte Einlage", "Agio", "§ 20 UmwStG", "Betriebsaufgabe", "§ 17 EStG", "Anteilsabspaltung"],
        normen: ["§ 20 UmwStG", "§ 17 EStG", "§ 18 EStG", "§ 6 Abs. 6 S. 2 EStG", "§ 27 KStG"],
      },
      {
        id: "UMW-HA1-2",
        nummer: "2",
        titel: "A-OHG: Option zur Körperschaftbesteuerung gem. § 1a KStG mit Sonderbetriebsvermögen",
        seiten: "Aufgabe S. 7–9 · Lösung S. 16–24",
        aufgabeSeiten: [7, 8, 9],
        loesungSeiten: [16, 17, 18, 19, 20, 21, 22, 23, 24],
        themen: ["§ 1a KStG", "Formwechsel", "Sonderbetriebsvermögen", "Einbringungsgewinn I", "Einlagekonto", "Grunderwerbsteuer"],
        normen: ["§ 1a KStG", "§ 25 UmwStG", "§ 20 UmwStG", "§ 22 Abs. 1 UmwStG", "§ 27 KStG", "§ 180 AO"],
      },
    ],
  },
  {
    id: "UMW-HA-2",
    fachtermin: "2.",
    rechtsstand: "2025",
    seiten: 23,
    quellentitel: "Hausaufgabe 2 mit Lösung · Umwandlungssteuerrecht · 2. Fachtermin",
    untertitel: "Einbringung gem. §§ 20 und 21 UmwStG",
    quelle: "RA/StB U. Breier",
    faelle: [
      {
        id: "UMW-HA2-1",
        nummer: "1",
        titel: "Dr. Franke: Sachgründung mit negativem Kapital und Rückbeziehung",
        seiten: "Aufgabe S. 2–3 · Lösung S. 8–12",
        aufgabeSeiten: [2, 3],
        loesungSeiten: [8, 9, 10, 11, 12],
        themen: ["Negatives Kapital", "Zwischenwertansatz", "Rückbeziehung", "Sachgründung", "Sonstige Gegenleistung"],
        normen: ["§ 20 Abs. 2 S. 2 Nr. 2 UmwStG", "§ 20 Abs. 3 UmwStG", "§ 5 Abs. 4 GmbHG", "§ 175 AO"],
      },
      {
        id: "UMW-HA2-2",
        nummer: "2",
        titel: "Erwin Bauer und Klaus Schmidt: Formwechsel in eine Kapitalgesellschaft",
        seiten: "Aufgabe S. 3–5 · Lösung S. 12–19",
        aufgabeSeiten: [3, 4, 5],
        loesungSeiten: [12, 13, 14, 15, 16, 17, 18, 19],
        themen: ["Formwechsel", "Mitunternehmeranteil", "Einbringungsgewinn I", "7-Jahresfrist", "Wertaufstockung"],
        normen: ["§ 20 UmwStG", "§ 22 Abs. 1 UmwStG", "§ 23 UmwStG", "§ 16 EStG", "§ 17 EStG"],
      },
      {
        id: "UMW-HA2-3",
        nummer: "3",
        titel: "F und B-GmbH: Einbringung der Anteile an der Z-GmbH gem. § 21 UmwStG",
        seiten: "Aufgabe S. 5–7 · Lösung S. 19–23",
        aufgabeSeiten: [5, 6, 7],
        loesungSeiten: [19, 20, 21, 22, 23],
        themen: ["§ 21 UmwStG", "Anteilstausch", "Einbringungsgewinn II", "§ 8b KStG"],
        normen: ["§ 21 UmwStG", "§ 22 Abs. 2 UmwStG", "§ 8b KStG", "§ 17 EStG"],
      },
    ],
  },
  {
    id: "UMW-HA-3",
    fachtermin: "3.",
    rechtsstand: "2025",
    seiten: 29,
    quellentitel: "Hausaufgabe 3 mit Lösung · Umwandlungssteuerrecht · 3. Fachtermin",
    untertitel: "Verschmelzung von Kapitalgesellschaften und Umwandlung von der Kapitalgesellschaft in ein Personenunternehmen",
    quelle: "RA/StB U. Breier",
    faelle: [
      {
        id: "UMW-HA3-1",
        nummer: "1",
        titel: "A-GmbH und B-GmbH: Aufwärtsverschmelzung nach §§ 11–13 UmwStG",
        seiten: "Aufgabe S. 2–5 · Lösung S. 8–17",
        aufgabeSeiten: [2, 3, 4, 5],
        loesungSeiten: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        themen: ["Verschmelzung", "§ 11 UmwStG", "§ 12 UmwStG", "§ 13 UmwStG", "Übernahmeergebnis", "Einlagekonto"],
        normen: ["§ 11 UmwStG", "§ 12 UmwStG", "§ 13 UmwStG", "§ 8b KStG", "§§ 4 ff. UmwG"],
      },
      {
        id: "UMW-HA3-2",
        nummer: "2",
        titel: "M-GmbH: Formwechsel in die A-GmbH & Co KG",
        seiten: "Aufgabe S. 5–7 · Lösung S. 17–29",
        aufgabeSeiten: [5, 6, 7],
        loesungSeiten: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        themen: ["Formwechsel", "§§ 3–7 UmwStG", "Übernahmebilanz", "§ 7 UmwStG", "Gewerbesteuer", "Grunderwerbsteuer"],
        normen: ["§ 3 UmwStG", "§ 4 UmwStG", "§ 5 UmwStG", "§ 7 UmwStG", "§ 9 UmwStG", "§ 8 Nr. 5 GewStG", "§ 20 Abs. 8 EStG"],
      },
    ],
  },
];

export const UMWSTR_HA_SEITEN_GESAMT = umwstrHausaufgaben.reduce((s, t) => s + t.seiten, 0);
export const UMWSTR_HA_FAELLE_GESAMT = umwstrHausaufgaben.reduce((s, t) => s + t.faelle.length, 0);

export default umwstrHausaufgaben;
