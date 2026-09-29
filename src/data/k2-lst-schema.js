/* Lohnsteuer – Prüfungsschema Arbeitslohn (K2), Markus Nöthen.

   Wortlautgetreue Übernahme des einseitigen Prüfungsschemas aus dem
   Drive-Ordner „Lohnsteuer“. Die fünf Stufen der Quelle (I bis V) stehen als
   je ein Eintrag, damit sie einzeln auffindbar bleiben.

   Eine Stelle ist rekonstruiert: Die Bewertungsübersicht in Stufe IV steht im
   PDF zweispaltig (links § 8 Abs. 2 EStG, rechts § 8 Abs. 3 EStG) und kommt
   aus der Textextraktion zeilenweise ineinander verschränkt heraus. Sie ist
   hier als Tabelle in die ursprüngliche Spaltenordnung zurückgebracht; ein
   Block unter der Tabelle sagt das im Campus ausdrücklich.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen. */

export const lstSchemaQuelle = {
  reihe: "Lohnsteuer – Prüfungsschema Arbeitslohn · Markus Nöthen",
  stand: "ohne Datumsangabe in der Quelle",
  verfasser: "Markus Nöthen",
  didaktik: [
    "Das Schema führt in fünf Stufen von der Einnahme bis zur Rechtsfolge. Der Aufbau ist bewusst derselbe wie in der Umsatzsteuer: erst die Einnahme dem Grunde nach, dann die Steuerbarkeit, dann die Steuerpflicht, dann die Bewertung, dann die Rechtsfolge. Wer diese Reihenfolge einhält, prüft in der Klausur nicht am falschen Ende – die häufigste Fehlerquelle ist, sofort zu bewerten, bevor geklärt ist, ob überhaupt steuerbarer Arbeitslohn vorliegt.",
    "Die Stufen II und III trennen zwei Dinge, die im Sprachgebrauch oft vermischt werden: Nicht steuerbarer Arbeitslohn (Stufe II) liegt vor, wenn die Zuwendung schon begrifflich kein Arbeitslohn ist – Aufmerksamkeiten, Zuwendungen im ganz überwiegend eigenbetrieblichen Interesse. Steuerfreier Arbeitslohn (Stufe III) ist dagegen Arbeitslohn, den eine Befreiungsnorm des § 3 EStG freistellt.",
    "Die Quelle notiert an einer Stelle einen Prüfungsbefehl, den man sich merken sollte: Bei § 3 Nr. 39 EStG ist im Anschluss IMMER § 19a EStG zu prüfen – die vorläufige Nichtbesteuerung bei Vermögensbeteiligungen.",
  ],
};

const VERFASSER = "Markus Nöthen";
const RECHTSSTAND = "ohne Datumsangabe in der Quelle";

export const lstSchema = [
  {
    id: "lst-01",
    kapitel: "1",
    romisch: "I",
    title: "I. Einnahme in Geld oder Geldeswert",
    thema: "Die erste Stufe: Liegt überhaupt eine Einnahme vor – in Geld oder in Geldeswert, also als Sachbezug beziehungsweise geldwerter Vorteil?",
    rechtsstand: RECHTSSTAND,
    quelle: "Lohnsteuer – Prüfungsschema Arbeitslohn (Nöthen), Stufe I",
    verfasser: VERFASSER,
    normen: ["§ 19 Abs. 1 Satz 1 Nr. 1 EStG", "§ 8 Abs. 1 Satz 1 EStG", "§ 2 Abs. 1 LStDV"],
    themen: ["Arbeitslohn", "Sachbezug", "Geldwerter Vorteil", "Einnahme"],
    bloecke: [
      { typ: "titel", text: "I. Einnahme in Geld oder Geldeswert (= Sachbezug, geldwerter Vorteil)" },
      { text: "Es liegt eine Einnahme in Geld (oder Geldeswert) vor, § 19 Abs. 1 S. 1 Nr. 1 EStG, § 2 Abs. 1 LStDV, § 8 Abs. 1 S. 1 EStG" },
    ],
  },
  {
    id: "lst-02",
    kapitel: "2",
    romisch: "II",
    title: "II. Steuerbarer Arbeitslohn?",
    thema: "Die zweite Stufe fragt nach der Steuerbarkeit – und nennt die drei Fallgruppen, in denen schon begrifflich kein steuerbarer Arbeitslohn vorliegt",
    rechtsstand: RECHTSSTAND,
    quelle: "Lohnsteuer – Prüfungsschema Arbeitslohn (Nöthen), Stufe II",
    verfasser: VERFASSER,
    normen: ["§ 19 Abs. 1 Satz 1 Nr. 1a EStG", "R 19.3 LStR", "R 19.6 LStR"],
    themen: ["Steuerbarkeit", "Betriebsveranstaltung", "Aufmerksamkeiten", "Eigenbetriebliches Interesse"],
    bloecke: [
      { typ: "titel", text: "II. Steuerbarer Arbeitslohn?" },
      { text: "Kein steuerbarer Arbeitslohn in den Fällen:" },
      { text: "• § 19 Abs. 1 S. 1 Nr. 1a EStG (Betriebsveranstaltung)" },
      { text: "• R 19.3 LStR" },
      { text: "• R 19.6 LStR ⇒ Aufmerksamkeiten" },
    ],
  },
  {
    id: "lst-03",
    kapitel: "3",
    romisch: "III",
    title: "III. Steuerpflichtiger Arbeitslohn?",
    thema: "Die dritte Stufe listet die fünf Befreiungen des § 3 EStG auf, die in der Klausur regelmäßig vorkommen – mit dem Prüfungsbefehl, bei der Vermögensbeteiligung immer § 19a EStG anzuschließen",
    rechtsstand: RECHTSSTAND,
    quelle: "Lohnsteuer – Prüfungsschema Arbeitslohn (Nöthen), Stufe III",
    verfasser: VERFASSER,
    normen: [
      "§ 3 Nr. 15 EStG", "§ 3 Nr. 16 EStG", "§ 3 Nr. 37 EStG", "§ 3 Nr. 39 EStG", "§ 3 Nr. 45 EStG",
      "§ 8 Abs. 4 EStG", "§ 19a EStG",
    ],
    themen: ["Steuerbefreiung", "Jobticket", "Reisekosten", "Dienstfahrrad", "Vermögensbeteiligung", "Zusätzlichkeitserfordernis"],
    bloecke: [
      { typ: "titel", text: "III. Steuerpflichtiger Arbeitslohn?" },
      { text: "Kein steuerpflichtiger Arbeitslohn insbesondere in den Fällen:" },
      { text: "o § 3 Nr. 15 EStG: Bahnticket ÖPNV zusätzlich § 8 Abs. 4 EStG" },
      { text: "o § 3 Nr. 16 EStG: Erstattung Reisekosten und DHHF" },
      { text: "o § 3 Nr. 37 EStG: Fahrrad/Bike zusätzlich § 8 Abs. 4 EStG" },
      { text: "o § 3 Nr. 39 EStG: Vermögensbeteiligung, wenn allen ArbN angeboten; ⇨ Prüfe im Anschluss IMMER § 19a EStG (vorläufige Nichtbesteuerung bei Vermögensbeteiligungen)" },
      { text: "o § 3 Nr. 45 EStG: Überlassung Elektronik" },
    ],
  },
  {
    id: "lst-04",
    kapitel: "4",
    romisch: "IV",
    title: "IV. Bewertung des Sachbezugs",
    thema: "Die vierte Stufe stellt die allgemeine Bewertung nach § 8 Abs. 2 EStG mit der 50-Euro-Freigrenze der Bewertung nach § 8 Abs. 3 EStG mit dem Rabattfreibetrag von 1.080 Euro gegenüber – und nennt zwei Spezialfälle: Pkw-Überlassung und Fahrrad durch Gehaltsumwandlung",
    rechtsstand: RECHTSSTAND,
    quelle: "Lohnsteuer – Prüfungsschema Arbeitslohn (Nöthen), Stufe IV",
    verfasser: VERFASSER,
    normen: [
      "§ 8 Abs. 2 Satz 1, Satz 2, Satz 3, Satz 10, Satz 11 EStG", "§ 8 Abs. 3 EStG",
      "R 8.1 Abs. 2 Satz 3 LStR", "R 8.1 Abs. 9 Nr. 1 Satz 6 LStR",
      "BMF-Schreiben Beck-Erlasse § 8/2, Rn. 13", "Erlass Beck-Erlasse § 8/16",
    ],
    themen: ["Bewertung", "Rabattfreibetrag", "50-Euro-Freigrenze", "Pkw-Überlassung", "Gehaltsumwandlung", "Dienstfahrrad"],
    bloecke: [
      { typ: "titel", text: "IV. Bewertung des Sachbezugs" },
      { text: "Bewertung nach: § 8 Abs. 2 … EStG oder § 8 Abs. 3 EStG" },
      { typ: "tabelle", spalten: ["Allgemeine Bewertung", "Bewertung bei Sachbezug aus dem Arbeitgeber-Sortiment"], zeilen: [
        ["§ 8 Abs. 2 S. 1 EStG i. V. m. R 8.1 Abs. 2 S. 3 LStR", "§ 8 Abs. 3 EStG"],
        ["i. V. m. § 8 Abs. 2 S. 11 EStG: 50 € Freigrenze/Monat", "Rabattfreibetrag 1.080 €, wenn Sachbezug aus ArbG-Sortiment"],
      ] },
      { text: "Diese Gegenüberstellung steht in der Quelle als zweispaltiges Schaubild, dessen Text die Extraktion zeilenweise verschränkt ausgibt; die Tabelle gibt die ursprüngliche Spaltenordnung wieder und fügt inhaltlich nichts hinzu." },
      { text: "Oder spezielle Bewertung, z. B. PKW Überlassung § 8 Abs. 2 S. 2, 3 EStG, R 8.1 Abs. 9 Nr. 1 S. 6 LStR, BMF § 8/2, Rn. 13 oder Fahrrad/Bike durch Gehaltsumwandlung § 8 Abs. 2 S. 10 EStG i. V. m. Erlass § 8/16" },
    ],
  },
  {
    id: "lst-05",
    kapitel: "5",
    romisch: "V",
    title: "V. Summe der Einkünfte oder Pauschalversteuerung?",
    thema: "Die fünfte Stufe entscheidet über die Rechtsfolge: Ansatz beim Arbeitnehmer oder Pauschalversteuerung durch den Arbeitgeber – mit der Konsequenz, dass dann beim Arbeitnehmer nichts mehr anzusetzen ist",
    rechtsstand: RECHTSSTAND,
    quelle: "Lohnsteuer – Prüfungsschema Arbeitslohn (Nöthen), Stufe V",
    verfasser: VERFASSER,
    normen: [
      "§ 40 Abs. 2 EStG", "§ 40 Abs. 3 Satz 3 EStG", "§ 37b Abs. 2 EStG", "§ 37b Abs. 3 Satz 1 EStG",
    ],
    themen: ["Pauschalversteuerung", "Abgeltungswirkung", "Summe der Einkünfte"],
    bloecke: [
      { typ: "titel", text: "V. SdE oder Pauschalversteuerung?" },
      { text: "SdE oder Wenn laut Sachverhalt Pauschalversteuerung erwünscht, insbesondere:" },
      { text: "• § 40 Abs. 2 EStG" },
      { text: "• § 37b Abs. 2 EStG" },
      { text: "Rechtsfolge der Pauschalversteuerung: § 40 Abs. 3 Satz 3 EStG (§ 37b Abs. 3 S. 1 EStG): Kein weiterer Ansatz beim ArbN in SdE" },
    ],
  },
];

export default lstSchema;
