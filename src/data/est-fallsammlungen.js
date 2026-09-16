/* ESt-Fallsammlungen 2026/2027 (K2, Einkommensteuer).

   Die Fallrepetitorien des Lehrgangs, die getrennt als Aufgaben- und
   Lösungs-PDF ausgegeben werden, hier wieder zu einem Fall zusammengeführt:
   Sachverhalt, Fragestellung und Lösungshinweise stehen wortlautgetreu
   nebeneinander, die Berechnungsschemata der Lösung als Tabellen. Ergänzt sind
   nur Thema, Normenliste und Themenchips. Personenbezogene Wasserzeichen der
   Quell-PDFs sind nicht übernommen.

   Fortsetzungen, Sachverhaltserweiterungen und Abwandlungen stehen bei dem
   Beispiel, zu dem sie gehören - im Sachverhalt wie in der Lösung jeweils als
   eigener Abschnitt, damit Aufgabe und Lösung nicht auseinanderlaufen.

   Blocktypen wie bei den Hausaufgaben: text | titel | tabelle. */

export const estFallsammlungenQuelle = {
  reihe: "Vorbereitung auf die Steuerberaterprüfung · Einkommensteuer · Fallrepetitorien",
  stand: "Rechtsstand 2025",
  didaktik: [
    "Die Fallsammlungen begleiten die Fachtermine des Tageslehrgangs. Sie vertiefen jeweils einen Problemkreis anhand kurzer, aufeinander aufbauender Beispiele und werden im Unterricht besprochen.",
    "Zweistellige Jahreszahlen sind „fiktive“ Jahre. Maßgebend ist immer der Rechtsstand zum 31.12.2025. Im Zweifel ist der Rechtsauffassung der Finanzverwaltung zu folgen.",
    "Die Unterlagen sind urheberrechtlich geschützt; sie stehen hier ausschließlich für den eigenen Bedarf des Erwerbers.",
  ],
};

const FS_15A = {
  sammlung: "15a",
  sammlungLabel: "§ 15a EStG",
  termin: 9,
  quelle: "Fallsammlung · Einkommensteuer · Fälle zu § 15a EStG (Stand 12/2025)",
  verfasser: "Thomas Wiegmann, Diplom-Finanzwirt und Steuerberater",
  rechtsstand: "Rechtsstand 2025",
};

const faelle15a = [
  {
    id: "est-fs-15a-01",
    title: "Beispiel 1 – Kapitalkonto I und II neben einem Verrechnungskonto",
    thema: "Welche Gesellschafterkonten bilden das Kapitalkonto i. S. d. § 15a EStG",
    normen: ["§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 2 EStG", "§ 15a Abs. 4 EStG", "§ 10d EStG", "§ 169 Abs. 3 HGB"],
    themen: ["Kapitalkonto i. S. d. § 15a EStG", "Verrechnungskonto", "Verrechenbarer Verlust", "Gesonderte Feststellung"],
    sachverhalt: [
      { text: "K’dt A ist an der Z-KG beteiligt. Laut Gesellschaftsvertrag werden für A folgende Konten geführt:" },
      { typ: "tabelle", spalten: ["Konto", "Stand 31.12.01"], zeilen: [
        ["Kapitalkonto I", "100.000 €"],
        ["Kapitalkonto II (Entnahmen, Einlagen, Verluste)", "50.000 €"],
        ["Verrechnungskonto (entnahmefähige Gewinne; Gewinn 01)", "150.000 €"],
      ] },
      { text: "Im Jahr 02 beträgt der Anteil des A am Ergebnis der KG ./. 250.000 €." },
    ],
    aufgabe: [
      { text: "Wie hoch ist das Kapital i. S. d. § 15a EStG? Inwieweit ist der Verlust ausgleichsfähig?" },
    ],
    loesung: [
      { text: "Das Kapitalkonto i. S. d. § 15a EStG setzt sich aus dem Kapitalkonto I und II zusammen. Das Verrechnungskonto stellt kein Eigenkapital der KG dar. Anmerkung: Der Kommanditist kann den Gewinnanteil 01 noch „entnehmen“. Er ist gem. § 169 Abs. 3 HGB nicht verpflichtet ihn zurück zu zahlen." },
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital I und II", "150.000 €", "", ""],
        ["Verlust 02", "./. 250.000 €", "./. 150.000 €", "./. 100.000 €"],
        ["Kapital 31.12.02", "./. 100.000 €", "", "./. 100.000 €"],
      ] },
      { text: "Der Verlust ist bis zur Höhe des Kapitalkontos von 150.000 € ausgleichsfähig (und nach § 10d EStG abzugsfähig). Infolge des verbleibenden Verlustanteils i. H. v. 100.000 € entsteht ein negatives Kapitalkonto. Deshalb ist der Verlust i. H. von 100.000 € gem. § 15a Abs. 1 Satz 1 i. V. mit Abs. 2 EStG nur mit künftigen Gewinnen aus der Beteiligung verrechenbar (§ 15a Abs. 2 EStG). Der verrechenbare Verlust wird gem. § 15a Abs. 4 EStG i. H. v. 100.000 € festgestellt." },
    ],
  },
  {
    id: "est-fs-15a-02",
    title: "Beispiel 2 – Verrechnungskonto, über das auch Verluste gebucht werden",
    thema: "Verrechnungskonto als Kapitalkonto, wenn es Verluste aufnimmt",
    normen: ["§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 2 EStG"],
    themen: ["Kapitalkonto i. S. d. § 15a EStG", "Verrechnungskonto", "Entnahmesperre"],
    sachverhalt: [
      { text: "K’dt A ist an der Z-KG beteiligt. Laut Gesellschaftsvertrag werden folgende Konten geführt:" },
      { typ: "tabelle", spalten: ["Konto", "Stand 31.12.01"], zeilen: [
        ["Kapitalkonto", "100.000 €"],
        ["Verrechnungskonto (Gewinn 01)", "150.000 €"],
      ] },
      { text: "Laut Gesellschaftsvertrag werden über das Verrechnungskonto sowohl Gewinne, als auch Verluste gebucht. Im Jahr 02 beträgt der Anteil des A am Ergebnis der KG ./. 250.000 €." },
    ],
    aufgabe: [
      { text: "Wie hoch ist das Kapital i. S. d. § 15a EStG? Inwieweit ist der Verlust ausgleichsfähig?" },
    ],
    loesung: [
      { text: "Das Verrechnungskonto stellt ein Kapitalkonto dar, da hierüber auch die Verluste verbucht werden. Der Kommanditist kann den Gewinnanteil 01, sobald sich ein Verlust abzeichnet, nicht mehr entnehmen." },
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital I, Verrech.kto.", "250.000 €", "", ""],
        ["Verlust 02", "./. 250.000 €", "./. 250.000 €", "./. 0 €"],
        ["Kapital 31.12.02", "0 €", "", "0 €"],
      ] },
    ],
  },
  {
    id: "est-fs-15a-03",
    title: "Beispiel 3 mit Fortsetzung – Sonderbereich neben dem verrechenbaren Verlust",
    thema: "Sonderbetriebseinnahmen und -ausgaben werden von § 15a EStG nicht erfasst",
    normen: ["§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 2 EStG", "§ 15a Abs. 4 EStG"],
    themen: ["Sonderbetriebseinnahmen", "Sonderbetriebsausgaben", "Refinanzierungszinsen", "Tätigkeitsvergütung", "Verrechenbarer Verlust"],
    sachverhalt: [
      { text: "Das Kapitalkonto des K`dt. K beträgt 200.000 €. Im Jahr 02 erhält K von der Gesellschaft Zinsen i. H. v. 8.000 € für das von ihm gewährte Darlehen. K selbst zahlte 5.000 € Darlehenszinsen für die Refinanzierung des Darlehens. Der KG-Verlustanteil beträgt 300.000 €." },
      { typ: "titel", text: "Fortsetzung Beispiel 3" },
      { text: "Der KG-Verlustanteil 03 beträgt 150.000 €. K erhält eine Tätigkeitsvergütung i. H. v. 50.000 €. Zinsen / Schuldzinsen sind in 03 nicht mehr angefallen." },
    ],
    aufgabe: [
      { text: "Wie hoch sind die ausgleichsfähigen Einkünfte des K? (Fortsetzung: Wie hoch sind die ausgleichsfähigen Einkünfte des K in 03?)" },
    ],
    loesung: [
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital I und II", "200.000 €", "", ""],
        ["Verlust 02", "./. 300.000 €", "./. 200.000 €", "./. 100.000 €"],
        ["Kapital 31.12.02", "./. 100.000 €", "", "./. 100.000 €"],
      ] },
      { typ: "tabelle", spalten: ["Sonderbereich 02", "Betrag"], zeilen: [
        ["Sonderbetriebseinnahmen", "8.000 €"],
        ["Sonderbetriebsausgaben", "./. 5.000 €"],
        ["Gewinn Sonderbereich", "3.000 €"],
      ] },
      { typ: "tabelle", spalten: ["Einkünfte 02", "Betrag"], zeilen: [
        ["§ 15 (1) Nr. 2 1. HS", "./. 200.000 €"],
        ["§ 15 (1) Nr. 2 2. HS", "3.000 €"],
        ["§ 15 (1) Nr. 2", "./. 197.000 €"],
        ["§ 15a (4) verrechenbarer Verlust 31.12.02", "./. 100.000 €"],
      ] },
      { typ: "titel", text: "Lösung Fortsetzung Beispiel 3" },
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital I und II", "200.000 €", "", ""],
        ["Verlust 02", "./. 300.000 €", "./. 200.000 €", "./. 100.000 €"],
        ["Kapital 31.12.02", "./. 100.000 €", "", "./. 100.000 €"],
        ["Verlust 03", "./. 150.000 €", "0 €", "./. 150.000 €"],
        ["Kapital 31.12.03", "./. 250.000 €", "", "./. 250.000 €"],
      ] },
      { typ: "tabelle", spalten: ["Sonderbereich 03", "Betrag"], zeilen: [
        ["Sonderbetriebseinnahmen", "50.000 €"],
        ["Sonderbetriebsausgaben", "./. 0 €"],
        ["Gewinn Sonderbereich", "50.000 €"],
      ] },
      { typ: "tabelle", spalten: ["Einkünfte 03", "Betrag"], zeilen: [
        ["§ 15 (1) Nr. 2 1. HS", "./. 0 €"],
        ["§ 15 (1) Nr. 2 2. HS", "50.000 €"],
        ["§ 15 (1) Nr. 2", "50.000 €"],
        ["§ 15a (4) verrechenbarer Verlust 31.12.03", "./. 250.000 €"],
      ] },
    ],
  },
  {
    id: "est-fs-15a-04",
    title: "Beispiel 4 mit Sachverhaltserweiterung – Verlust aus der Ergänzungsbilanz",
    thema: "Ergänzungsbilanzverluste gehören zum Kapitalkonto i. S. d. § 15a EStG, Refinanzierungszinsen nicht",
    normen: ["§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 2 EStG", "§ 15a Abs. 4 EStG"],
    themen: ["Ergänzungsbilanz", "Refinanzierungszinsen", "Sonderbereich", "Verrechenbarer Verlust"],
    sachverhalt: [
      { text: "Das Kapitalkonto (incl. Ergänzungsbilanz) des K zum 01.01.02 beträgt 200.000 €. Der Kommanditist K hat seine Beteiligung an der X-KG refinanziert. Er zahlt 5.000 € Darlehenszinsen für die Refinanzierung. Der KG-Verlustanteil 02 beträgt 300.000 €. Der Verlust aus der Ergänzungsbilanz beträgt 10.000 €." },
      { typ: "titel", text: "Sachverhaltserweiterung zu Beispiel 4" },
      { text: "In 03 beträgt der Verlustanteil bei der KG 150.000 € und im Ergänzungsbereich 10.000 €. Für die Refinanzierung sind Zinsen i. H. v. 4.800 € angefallen." },
    ],
    aufgabe: [
      { text: "Ermitteln Sie den ausgleichsfähigen und den verrechenbaren Verlust sowie die Einkünfte nach § 15 Abs. 1 Nr. 2 EStG." },
    ],
    loesung: [
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital / Ergänzungsbilanz", "200.000 €", "", ""],
        ["Verlust 02", "./. 300.000 €", "./. 200.000 €", "./. 100.000 €"],
        ["Verlust Ergänzungsbilanz 02", "./. 10.000 €", "", "./. 10.000 €"],
        ["Kapital 31.12.02", "./. 110.000 €", "", "./. 110.000 €"],
      ] },
      { typ: "tabelle", spalten: ["Sonderbereich 02 und Einkünfte", "Betrag"], zeilen: [
        ["Sonderbetriebseinnahmen", "0 €"],
        ["Sonderbetriebsausgaben", "./. 5.000 €"],
        ["Gewinn Sonderbereich", "./. 5.000 €"],
        ["§ 15 (1) Nr. 2 1. HS", "./. 200.000 €"],
        ["§ 15 (1) Nr. 2 2. HS", "./. 5.000 €"],
        ["§ 15 (1) Nr. 2", "./. 205.000 €"],
        ["§ 15a (4) verrechenbarer Verlust 31.12.02", "./. 110.000 €"],
      ] },
      { typ: "titel", text: "Lösung Fortsetzung Beispiel 4" },
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital / Ergänzungsbilanz", "200.000 €", "", ""],
        ["Verlust 02", "./. 300.000 €", "./. 200.000 €", "./. 100.000 €"],
        ["Verlust Ergänzungsbilanz 02", "./. 10.000 €", "", "./. 10.000 €"],
        ["Kapital 31.12.02", "./. 110.000 €", "", "./. 110.000 €"],
        ["Verlust 03", "./. 150.000 €", "0 €", "./. 150.000 €"],
        ["Verlust Ergänzungsbereich 03", "./. 10.000 €", "", "./. 10.000 €"],
        ["Kapital 31.12.03", "./. 270.000 €", "", "./. 270.000 €"],
      ] },
      { typ: "tabelle", spalten: ["Sonderbereich 03 und Einkünfte", "Betrag"], zeilen: [
        ["Sonderbetriebseinnahmen 03", "0 €"],
        ["Sonderbetriebsausgaben 03", "./. 4.800 €"],
        ["Gewinn Sonderbereich 03", "./. 4.800 €"],
        ["§ 15 (1) Nr. 2 1. HS für 03", "./. 0 €"],
        ["§ 15 (1) Nr. 2 2. HS für 03", "./. 4.800 €"],
        ["§ 15 (1) Nr. 2 für 03", "./. 4.800 €"],
        ["§ 15a (4) verrechenbarer Verlust 31.12.03 (incl. 02)", "./. 270.000 €"],
      ] },
    ],
  },
  {
    id: "est-fs-15a-05",
    title: "Beispiel 5 mit Sachverhaltserweiterung – erweiterter Verlustausgleich nach § 15a Abs. 1 S. 2 EStG",
    thema: "Nicht geleistete Pflichteinlage: erweiterter Verlustausgleich in Höhe der überschießenden Außenhaftung",
    normen: ["§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 1 S. 2 EStG", "§ 15a Abs. 2 EStG", "§ 15a Abs. 4 EStG", "§ 175 Abs. 1 S. 2 AO"],
    themen: ["Haftsumme", "Pflichteinlage", "Erweiterte Außenhaftung", "Erhöhung der Haftsumme", "Verrechenbarer Verlust"],
    sachverhalt: [
      { text: "Kommanditist A ist an der X-KG beteiligt. Die Haftsumme beträgt 50.000 €. Als Pflichteinlage sind 80.000 € vereinbart worden. Von der Einlage hat er bisher nur 10.000 € geleistet. Der Verlustanteil 02 beträgt 70.000 €, wodurch ein negatives Kapitalkonto von ./. 60.000 € entsteht." },
      { typ: "titel", text: "Sachverhaltserweiterung Beispiel 5" },
      { text: "In 03 wird die Haftsumme auf 70.000 € erhöht. Der Anteil des A am Gewinn 03 beträgt 0 €. In 04 beträgt der Verlustanteil des A 30.000 €." },
    ],
    aufgabe: [
      { text: "Ermitteln Sie den ausgleichsfähigen Verlust." },
    ],
    loesung: [
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["geleistete Einlage", "10.000 €", "", ""],
        ["Verlust 02", "./. 70.000 €", "./. 10.000 €", ""],
        ["erweiterte Außenhaftung § 15a (1) S. 2", "", "./. 40.000 €", ""],
        ["Kapital 31.12.02", "./. 60.000 €", "./. 50.000 €", "./. 20.000 €"],
      ] },
      { text: "Das steuerliche Kapitalkonto beträgt 10.000 €. Gem. § 15a (1) S. 1 EStG sind vom Verlustanteil 10.000 € abzugsfähig. Da für A eine zusätzliche Haftung i.H.v. 40.000 € (Haftsumme 50.000 € ./. eingezahlte Einlage 10.000 €) besteht, ist ein erweiterter Verlustausgleich im Jahr 02 i.H.v. 40.000 € möglich, § 15a (1) S. 2 EStG. In Höhe von 20.000 € ist der Verlust 02 nach § 15a (2) EStG nur verrechenbar (Feststellung gem. § 15a Abs. 4 EStG)." },
      { typ: "titel", text: "Lösung Sachverhaltserweiterung Beispiel 5" },
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["geleistete Einlage", "10.000 €", "", ""],
        ["Verlust 02", "./. 70.000 €", "./. 10.000 €", ""],
        ["erweiterte Außenhaftung § 15a (1) S. 2", "", "./. 40.000 €", ""],
        ["Kapital 31.12.02", "./. 60.000 €", "./. 50.000 €", "./. 20.000 €"],
        ["Erhöhung Haftsumme in 03 auf 70.000 €; Gewinn 03", "0 €", "", ""],
        ["Kapital 31.12.03", "./. 60.000 €", "", "./. 20.000 €"],
        ["Verlust 04", "./. 30.000 €", "./. 10.000 €", ""],
        ["erweiterte Außenhaftung § 15a (1) S. 2", "", "./. 20.000 €", ""],
        ["Kapital 31.12.04", "./. 90.000 €", "", "./. 30.000 €"],
      ] },
      { text: "Die Erhöhung der Haftsumme in 03 führt nicht dazu, dass der verrechenbare Verlust 02 (in Höhe von ./. 20.000 €) ausgleichsfähig wird. Hierzu wäre es notwendig gewesen, dass die Haftsumme noch in 02 erhöht wird. Der Verlust des Jahres 04 ist aufgrund der „noch nicht ausgenutzten Haftsumme“ i.H.v. 20.000 € ausgleichsfähig gem. § 15a (1) S. 2 EStG und i.H.v. 10.000 € verrechenbar (§ 15a Abs. 2 EStG). Der verrechenbare Verlust gem. § 15a (4) EStG beträgt zum 31.12.04 = 30.000 €." },
      { text: "Fällt die überschießende Außenhaftung in späteren Wirtschaftsjahren durch Leistung der Einlage weg, lässt dies den erweiterten Verlustausgleich in den vorangegangenen Wirtschaftsjahren unberührt. Es erfolgt keine Korrektur gem. § 175 (1) S. 2 EStG. Künftig gilt allein § 15a (1) S. 1 EStG, d.h. das um die Zahlung erhöhte Kapitalkonto." },
    ],
  },
  {
    id: "est-fs-15a-06",
    title: "Beispiel 6 – Wegfall der Außenhaftung durch spätere Bareinlage",
    thema: "Die Leistung der Einlage schafft kein zusätzliches Ausgleichsvolumen",
    normen: ["§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 1 S. 2 EStG", "§ 15a Abs. 2 EStG", "§ 15a Abs. 4 EStG", "§ 171 HGB", "R 15a Abs. 3 S. 6-8 EStR"],
    themen: ["Erweiterte Außenhaftung", "Bareinlage", "Wegfall der Haftung", "Verrechenbarer Verlust"],
    sachverhalt: [
      { text: "Die Hafteinlage des K‘dt A beträgt 50.000 €; seine tatsächlich geleistete Einlage 0 € und sein Verlustanteil im Jahr 01 50.000 €. Im Jahr 02 leistet er eine Bareinlage von 50.000 €. Sein Verlustanteil 02 beträgt erneut 50.000 €." },
    ],
    aufgabe: [
      { text: "Ermitteln Sie den ausgleichsfähigen Verlust." },
    ],
    loesung: [
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Hafteinlage 50.000 € / geleistete Einlage 0 €", "", "", ""],
        ["Verlust 01", "./. 50.000 €", "./. 0 €", ""],
        ["erweiterte Außenhaftung § 15a (1) S. 2", "", "./. 50.000 €", "0 €"],
        ["Kapital 31.12.01", "./. 50.000 €", "", "./. 0 €"],
        ["Bareinlage 02", "+ 50.000 €", "", ""],
        ["Verlustanteil 02", "./. 50.000 €", "", "./. 50.000 €"],
        ["Kapital 31.12.02", "./. 50.000 €", "", "./. 50.000 €"],
      ] },
      { text: "Im Jahr 01 ist durch den Verlust ein negatives Kapitalkonto entstanden (§ 15a Abs. 1 S. 1 EStG). Der Verlust ist jedoch – wegen der erweiterten Außenhaftung – nach § 15a Abs. 1 S. 2 EStG gleichwohl ausgleichsfähig. Im Jahr 02 erlischt durch die Einlage die Außenhaftung nach § 171 HGB. Die Ausgleichsfähigkeit des Verlustes bemisst sich nach dem Grundtatbestand. Durch den Verlust 02 ist zwar weder ein negatives Kapitalkonto entstanden, noch hat sich das bestehende erhöht. Der Wegfall der Außenhaftung durch Leistung der Einlage führt jedoch zu keinem weiteren Ausgleichsvolumen (R 15a Abs. 3 S. 6-8 EStR). Der Verlust muss deshalb als verrechenbar festgestellt werden (§ 15a Abs. 2 und 4 EStG)." },
    ],
  },
  {
    id: "est-fs-15a-07",
    title: "Beispiel 7 – Tätigkeitsvergütung trotz verrechenbarem Verlust",
    thema: "Der Sonderbereich bleibt ausgleichsfähig, spätere Gewinne mindern den verrechenbaren Verlust",
    normen: ["§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 2 EStG", "§ 15a Abs. 4 EStG"],
    themen: ["Tätigkeitsvergütung", "Sonderbereich", "Verlustverrechnung mit späteren Gewinnen"],
    sachverhalt: [
      { text: "K ist seit Gründung am 01.01.01 an der X-KG beteiligt. K erhält von der Gesellschaft eine jährliche Tätigkeitsvergütung i. H. v. 200.000 €. Aufwendungen im Zusammenhang mit der Vergütung sind K nicht entstanden. Das Kapitalkonto des K beträgt am 01.01.01 100.000 € (voll eingezahlt). Der KG-Verlustanteil 01 beträgt 150.000 € und der Gewinnanteil 02 20.000 €." },
    ],
    aufgabe: [
      { text: "Wie hoch sind die ausgleichsfähigen Einkünfte des K?" },
    ],
    loesung: [
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital 01.01.01", "100.000 €", "", ""],
        ["Verlust 01", "./. 150.000 €", "./. 100.000 €", "./. 50.000 €"],
        ["Kapital 31.12.01", "./. 50.000 €", "", "./. 50.000 €"],
        ["Gewinn 02", "20.000 €", "", "+ 20.000 €"],
        ["Kapital 31.12.02", "./. 30.000 €", "", "./. 30.000 €"],
      ] },
      { typ: "tabelle", spalten: ["Sonderbereich und Einkünfte 01", "Betrag"], zeilen: [
        ["Sonderbetriebseinnahmen", "200.000 €"],
        ["Sonderbetriebsausgaben", "./. 0 €"],
        ["Gewinn Sonderbereich", "200.000 €"],
        ["§ 15 (1) Nr. 2 1. HS", "./. 100.000 €"],
        ["§ 15 (1) Nr. 2 2. HS", "+ 200.000 €"],
        ["§ 15 (1) Nr. 2", "+ 100.000 €"],
        ["§ 15a (4) verrechenbarer Verlust 31.12.01", "./. 50.000 €"],
      ] },
      { typ: "tabelle", spalten: ["Einkünfte 02", "Betrag"], zeilen: [
        ["Gewinn § 15 (1) Nr. 2 (1. HS. = 0 € u. 2. HS. = 200.000 €) gesamt", "+ 200.000 €"],
        ["§ 15a (4) verrechenbarer Verlust 31.12.02", "./. 30.000 €"],
      ] },
    ],
  },
  {
    id: "est-fs-15a-08",
    title: "Beispiel 8 – nachträgliche Einlage ohne Verlust im Einlagejahr",
    thema: "BFH-Merkposten gegen den Nichtanwendungserlass des BMF vom 14.04.2004",
    normen: ["§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 2 EStG", "§ 15a Abs. 4 EStG", "BMF vom 14.04.2004"],
    themen: ["Nachträgliche Einlage", "Merkposten", "Nichtanwendungserlass", "Verrechenbarer Verlust"],
    sachverhalt: [
      { text: "K ist seit Gründung am 01.01.01 an der X-KG beteiligt. Das Kapitalkonto des K beträgt am 01.01.01 100.000 € (voll eingezahlt). Der KG-Verlustanteil 01 beträgt 150.000 € und 02 0 €. Am 10.01.02 leistet K eine Einlage i. H. v. 50.000 €, um sein Kapitalkonto auszugleichen." },
    ],
    aufgabe: [
      { text: "Ermitteln Sie den ausgleichsfähigen Verlust." },
    ],
    loesung: [
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital 01.01.01", "100.000 €", "", ""],
        ["Verlust 01", "./. 150.000 €", "./. 100.000 €", "./. 50.000 €"],
        ["31.12.01", "./. 50.000 €", "", ""],
        ["zu berücksichtigende Einkünfte 01", "./. 100.000 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 50.000 €"],
        ["NE in 02", "+ 50.000 €", "", ""],
        ["Verlust 02", "0 €", "", ""],
        ["31.12.02", "0 €", "", ""],
        ["zu berücksichtigende Einkünfte 02", "0 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 50.000 €"],
      ] },
      { text: "Lt. BFH bewirkt die Einklage des Jahres 02, dass zukünftige Verluste des K bis zur Höhe von 50.000 € ausgleichsfähig werden. Hierzu ist ein entsprechender „Merkposten“ zu bilden. Auf die Entscheidung des BFH hat das BMF mit einem Nichtanwendungserlass reagiert (vom 14.04.2004). Einlagen bewirken nur insoweit einen zusätzlichen Verlustausgleich, soweit der Verlust im Einlagejahr entstanden ist (vgl. Beispiel 9)." },
    ],
  },
  {
    id: "est-fs-15a-09",
    title: "Beispiel 9 – Einlage und Verlust im selben Jahr",
    thema: "Die Einlage schafft Ausgleichsvolumen nur für den Verlust des Einlagejahres",
    normen: ["§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 2 EStG", "§ 15a Abs. 4 EStG"],
    themen: ["Nachträgliche Einlage", "Verlust im Einlagejahr", "Verrechenbarer Verlust"],
    sachverhalt: [
      { text: "K ist seit Gründung am 01.01.01 an der X-KG beteiligt. Das Kapitalkonto des K beträgt am 01.01.01 100.000 € (voll eingezahlt). Der KG-Verlustanteil 01 beträgt 150.000 € und 02 70.000 €. Am 10.01.02 leistet K eine Einlage i. H. v. 50.000 €, um sein Kapitalkonto auszugleichen." },
    ],
    aufgabe: [
      { text: "Ermitteln Sie den ausgleichsfähigen und den verrechenbaren Verlust." },
    ],
    loesung: [
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital 01.01.01", "100.000 €", "", ""],
        ["Verlust 01", "./. 150.000 €", "./. 100.000 €", "./. 50.000 €"],
        ["31.12.01", "./. 50.000 €", "", ""],
        ["zu berücksichtigende Einkünfte 01", "./. 100.000 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 50.000 €"],
        ["NE in 02", "+ 50.000 €", "", ""],
        ["Verlust 02 (Einlage)", "./. 70.000 €", "./. 50.000 €", "./. 20.000 €"],
        ["31.12.02", "./. 70.000 €", "", ""],
        ["zu berücksichtigende Einkünfte 02", "./. 50.000 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 70.000 €"],
      ] },
    ],
  },
  {
    id: "est-fs-15a-10",
    title: "Beispiel 10 mit Abwandlung – Einlageminderung nach § 15a Abs. 3 EStG",
    thema: "Fiktiver Hinzurechnungsgewinn bei Entnahme der zusätzlich geleisteten Einlage",
    normen: ["§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 1 S. 2 EStG", "§ 15a Abs. 3 S. 1, 2 + 4 EStG", "§ 15a Abs. 4 EStG", "§ 172 Abs. 4 S. 2 HGB"],
    themen: ["Einlageminderung", "Fiktiver Hinzurechnungsgewinn", "Elfjahreszeitraum", "Bezahlter Verlust", "Verrechenbarer Verlust"],
    sachverhalt: [
      { typ: "tabelle", spalten: ["Jahr 01", "Betrag"], zeilen: [
        ["Haftsumme", "50.000 €"],
        ["geleistete Haft- bzw. Pflichteinlage", "50.000 €"],
        ["zusätzliche Einlage 01", "30.000 €"],
        ["Verlustanteil 01", "80.000 €"],
        ["Kapitalkonto 31.12.01", "0 €"],
      ] },
      { typ: "tabelle", spalten: ["Jahr 02", "Betrag"], zeilen: [
        ["Kapitalkonto 01.01.02", "0 €"],
        ["Entnahme 02", "./. 30.000 €"],
        ["Gewinnanteil 02", "0 €"],
        ["Kapitalkonto 31.12.02", "./. 30.000 €"],
      ] },
      { typ: "titel", text: "Abwandlung Beispiel 10" },
      { typ: "tabelle", spalten: ["Jahr 02 (Abwandlung)", "Betrag"], zeilen: [
        ["Kapitalkonto 01.01.02", "0 €"],
        ["Entnahme 02", "./. 30.000 €"],
        ["Gewinnanteil 02", "20.000 €"],
        ["Kapitalkonto 31.12.02", "./. 10.000 €"],
      ] },
    ],
    aufgabe: [
      { text: "Ermitteln Sie die zu berücksichtigenden Einkünfte und den verrechenbaren Verlust – im Ausgangsfall und in der Abwandlung." },
    ],
    loesung: [
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital 01.01.01 (geleistete Hafteinlage)", "50.000 €", "", ""],
        ["zusätzliche Einlage 01", "30.000 €", "", ""],
        ["Verlust 01", "./. 80.000 €", "./. 80.000 €", "./. 0 €"],
        ["31.12.01", "0 €", "", ""],
        ["zu berücksichtigende Einkünfte 01", "./. 80.000 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 0 €"],
        ["Entnahme (der zusätzlichen Einlage) 02", "./. 30.000 €", "", ""],
        ["Gewinn / Verlust 02", "0 €", "", ""],
        ["31.12.02", "./. 30.000 €", "", ""],
        ["zu berücksichtigende Einkünfte 02", "+ 30.000 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 30.000 €"],
      ] },
      { text: "Dem Kommanditisten ist gem. § 15a (3) S. 1 u. 2 EStG ein fiktiver Gewinn – bei gleichzeitiger Feststellung eines entsprechenden verrechenbaren Verlustes – zuzurechnen, soweit ein negatives Kapitalkonto des Kdt. durch Entnahmen entsteht oder sich erhöht (Einlageminderung); hier gegeben, da aufgrund der Entnahme von 30.000 € in 02 ein negatives Kapitalkonto i.H.v. 30.000 € entsteht;" },
      { text: "und soweit nicht aufgrund der Entnahmen eine nach § 15a (1) S. 2 EStG zu berücksichtigende Haftung besteht oder entsteht, hier entnimmt der Kdt. seine zusätzlich geleistete Einlage, d.h. die Hafteinlage gilt weiterhin als gezahlt, es handelt sich nicht um einen Fall des § 172 (4) S. 2 HGB; und soweit im Wj. der Einlageminderung und in zehn vorangegangenen Wj. (= Elfjahreszeitraum) Verlustanteile ausgleichs- oder abzugsfähig gewesen sind, hier ist im vorangegangenen Wj. ein Verlustanteil ausgleichsfähig gewesen (80.000 €)." },
      { text: "01 Es entsteht kein negatives Kapitalkonto, d.h. § 15a (1) S. 1 EStG kommt nicht zur Anwendung. Durch die Einlage i.H.v. 30.000 € hat der Kdt. sich Verlustausgleichsvolumen in entsprechender Höhe verschafft („bezahlter Verlust“); zu berücksichtigende Einkünfte ./. 80.000 €." },
      { text: "02 Durch die Entnahme („Einlageminderung“) entsteht ein negatives Kapitalkonto von ./. 30.000 €. Durch die Entnahme entsteht jedoch keine Außenhaftung nach § 15a (1) S. 2 EStG, da der Kommanditist lediglich seine zusätzlich geleistete Einlage (und nicht seine geleistete Hafteinlage) entnimmt. Dem Kdt. ist ein fiktiver Hinzurechnungsgewinn nach § 15a (3) S. 1 und 2 EStG zuzuweisen. Der Gewinn ist gem. § 15 (1) Nr. 2 1. HS EStG zu erfassen." },
      { text: "Durch die Gewinnzuweisung wird der vorherige Verlustausgleich (Wj. 01) rückgängig gemacht. Damit dieser Verlustanteil nicht verloren geht, ist es erforderlich, den verrechenbaren Verlust in gleichem Umfang zu erhöhen. In Höhe von ./. 30.000 € wird dem Kommanditisten daher gleichzeitig ein verrechenbarer Verlust nach § 15a (3) Satz 4 EStG zugewiesen (gesonderte Feststellung § 15a Abs. 4 EStG). Wäre dem Kommanditisten in 02 ein Gewinnanteil zugewiesen worden, könnte er diese bereits mit dem verrechenbaren Verlust nach § 15a (3) Satz 4 EStG verrechnen. Da dies nicht der Fall ist, erfolgt die Verrechnung in den Folgejahren." },
      { typ: "titel", text: "Lösung Abwandlung Beispiel 10" },
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital 01.01.01 (geleistete Hafteinlage)", "50.000 €", "", ""],
        ["zusätzliche Einlage 01", "30.000 €", "", ""],
        ["Verlust 01", "./. 80.000 €", "./. 80.000 €", "./. 0 €"],
        ["31.12.01", "0 €", "", ""],
        ["zu berücksichtigende Einkünfte 01", "./. 80.000 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 0 €"],
        ["Entnahme (der zusätzlichen Einlage) 02", "./. 30.000 €", "", ""],
        ["Gewinn 02", "20.000 €", "", ""],
        ["31.12.02", "./. 10.000 €", "", ""],
        ["zu berücksichtigende Einkünfte 02", "+ 30.000 €", "20.000 € verrechnet", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 10.000 €"],
      ] },
      { text: "02 Durch die Entnahme („Einlageminderung“) entsteht ein negatives Kapitalkonto von ./. 30.000 €. Durch die Entnahme entsteht jedoch keine Außenhaftung nach § 15a (1) S. 2 EStG, da der Kommanditist lediglich seine zusätzlich geleistete Einlage (und nicht seine geleistete Hafteinlage) entnimmt. Dem Kommanditisten ist ein fiktiver Hinzurechnungsbetrag nach § 15a (3) S. 1, 2 EStG zuzuweisen. Einkünfte § 15 (1) Nr. 2 1. HS = 30.000 €." },
      { text: "Durch die Gewinnzuweisung wird der vorherige Verlustausgleich (Wj. 01) rückgängig gemacht. Damit dieser Verlustanteil nicht verloren geht, ist es erforderlich, den verrechenbaren Verlust in gleichem Umfang zu erhöhen. In Höhe von ./. 30.000 € wird dem Kommanditisten daher gleichzeitig ein verrechenbarer Verlust nach § 15a (3) S. 4 EStG zugewiesen. Gem. § 15a (3) S. 4 EStG wird dieser verrechenbare Verlust mit dem Gewinn aus 02 verrechnet, so dass zum 31.12.02 ein verrechenbarer Verlust von ./. 10.000 € gem. § 15a (4) EStG festzustellen ist. Die Einkünfte aus § 15 (1) Nr. 2 1. HS EStG betragen 30.000 € (laufender Gewinn 20.000 € verrechnet mit § 15a (4) EStG mit ./. 20.000 € = 0; fiktiver Gewinn 30.000 €)." },
    ],
  },
  {
    id: "est-fs-15a-11",
    title: "Beispiel 11 – Entnahme der geleisteten Hafteinlage",
    thema: "Wiederaufleben der Außenhaftung nach § 172 Abs. 4 S. 2 HGB statt Hinzurechnung",
    normen: ["§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 1 S. 2 EStG", "§ 15a Abs. 3 S. 1 + 2 EStG", "§ 15a Abs. 4 EStG", "§ 171 Abs. 1 HGB", "§ 172 Abs. 4 S. 2 HGB"],
    themen: ["Entnahme der Hafteinlage", "Wiederaufleben der Außenhaftung", "Rechtsgrundlagenwechsel", "Verrechenbarer Verlust"],
    sachverhalt: [
      { text: "Der Kommanditist hat eine eingetragene Haftsumme von 300.000 €, die er auch eingezahlt hat. Sein Kapitalkonto ermittelt sich wie folgt:" },
      { typ: "tabelle", spalten: ["Kapitalkonto", "Betrag"], zeilen: [
        ["01.01.01", "300.000 €"],
        ["Verlust 01", "./. 400.000 €"],
        ["31.12.01", "./. 100.000 €"],
        ["Entnahme 02", "./. 100.000 €"],
        ["Verlust 02", "./. 100.000 €"],
        ["31.12.02", "./. 300.000 €"],
      ] },
    ],
    aufgabe: [
      { text: "Ermitteln Sie die zu berücksichtigenden Einkünfte und den verrechenbaren Verlust der Jahre 01 und 02." },
    ],
    loesung: [
      { text: "01 Der Verlust ist gem. § 15a (1) S. 1 EStG i.H.v. 300.000 € ausgleichsfähig und zu 100.000 € nur verrechenbar." },
      { text: "02 Aufgrund der Entnahme von 100.000 € wird die bereits geleistete Kapitaleinlage teilweise zurückgezahlt, so dass diese in dieser Höhe als nicht geleistet gilt, § 172 (4) S. 2 HGB. In Höhe von 100.000 € lebt daher die Außenhaftung nach § 171 (1) HGB, so dass sich die Rechtsgrundlage, nach der der bisherige Verlust ausgeglichen werden konnte, ändert. Denn nunmehr ist der Verlust von 100.000 € ausgleichsfähig nach § 15a (1) S. 2 EStG. Es kommt daher zu keiner Anwendung des § 15a (3) S. 1 und 2 EStG, da die Einlageminderung zur Entstehung eines Haftungstatbestandes geführt hat. Der Verlust 02 ist in voller Höhe nur verrechenbar, so dass der verrechenbare Verlust zum 31.12.02 insgesamt 200.000 € beträgt." },
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital 01.01.01 (geleistete Hafteinlage)", "300.000 €", "", ""],
        ["Verlust 01", "./. 400.000 €", "./. 300.000 €", "./. 100.000 €"],
        ["31.12.01", "./. 100.000 €", "", ""],
        ["zu berücksichtigende Einkünfte 01", "./. 300.000 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 100.000 €"],
        ["Entnahme (geleistete Hafteinlage) 02 – § 15a (1) S. 2", "./. 100.000 €", "", ""],
        ["Verlust 02", "./. 100.000 €", "", "./. 100.000 €"],
        ["31.12.02", "./. 300.000 €", "", ""],
        ["zu berücksichtigende Einkünfte 02", "0 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 200.000 €"],
      ] },
    ],
  },
  {
    id: "est-fs-15a-12",
    title: "Beispiel 12 mit Abwandlung – Haftungsminderung nach § 15a Abs. 3 S. 3 EStG",
    thema: "Herabsetzung der eingetragenen Haftsumme macht den erweiterten Verlustausgleich rückgängig",
    normen: ["§ 15a Abs. 1 S. 1 EStG", "§ 15a Abs. 1 S. 2 + 3 EStG", "§ 15a Abs. 3 S. 3 + 4 EStG", "§ 15a Abs. 4 EStG", "§ 171 Abs. 1 HGB"],
    themen: ["Haftungsminderung", "Herabsetzung der Haftsumme", "Fiktiver Hinzurechnungsgewinn", "Elfjahreszeitraum"],
    sachverhalt: [
      { typ: "tabelle", spalten: ["Jahr 01", "Betrag"], zeilen: [
        ["Hafteinlage laut Handelsregister", "100.000 €"],
        ["Eingezahlte Einlage", "50.000 €"],
        ["Verlust", "100.000 €"],
      ] },
      { text: "Jahr 02: Die Hafteinlage (Haftsumme) im Handelsregister wird auf 50.000 € reduziert." },
      { typ: "titel", text: "Abwandlung Beispiel 12" },
      { text: "Die eingezahlte Einlage beträgt 70.000 €." },
    ],
    aufgabe: [
      { text: "Ermitteln Sie die zu berücksichtigenden Einkünfte und den verrechenbaren Verlust – im Ausgangsfall und in der Abwandlung." },
    ],
    loesung: [
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital 01.01.01 (Hafteinlage 100.000)", "50.000 €", "", ""],
        ["Verlust 01", "./. 100.000 €", "./. 100.000 €", "./. 0 €"],
        ["31.12.01", "./. 50.000 €", "", ""],
        ["zu berücksichtigende Einkünfte 01 (§ 15a (1) S. 1, 2)", "./. 100.000 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 0 €"],
        ["Reduzierung der Hafteinlage auf 50.000 € – § 15a (1) S. 2 entfällt; Gewinn 02", "0 €", "", ""],
        ["31.12.02", "./. 50.000 €", "", ""],
        ["zu berücksichtigende Einkünfte 02 (§ 15a (3) S. 3)", "+ 50.000 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 50.000 €"],
      ] },
      { text: "Dem Kdt. ist ein fiktiver Gewinn – bei gleichzeitiger Feststellung eines entsprechenden verrechenbaren Verlustes – zuzurechnen, soweit der Haftungsbetrag i.S.d. § 15a (1) S. 2 EStG (Haftung § 171 Abs. 1 HGB) gemindert wird (Haftungsminderung), hier reduziert der Kdt. seine Hafteinlage um 50.000 €, so dass die erweiterte Außenhaftung i.S.d. § 15a (1) S. 2 EStG die bisher aufgrund der nicht voll eingezahlten Hafteinlage bestand, entfällt (neue Hafteinlage lt. HR = 50.000 € und eingezahlte Einlage = 50.000 €);" },
      { text: "und soweit im Wj. der Haftungsminderung und den zehn vorangegangenen Wj. (Elfjahreszeitraum) Verluste nach § 15a (1) S. 2 ausgleichs- oder abzugsfähig gewesen sind, hier war in 01 aufgrund der noch nicht geleisteten aber für 01 ins HR eingetragenen Hafteinlage der Verlust i.H.v. 50.000 € berücksichtigungsfähig." },
      { text: "01 In Höhe von ./. 50.000 € ist der Verlust nach § 15a (1) S. 1 EStG und i.H.v. weiteren ./. 50.000 € nach § 15a (1) S. 2 und EStG ausgleichs- oder abzugsfähig. 02 Hinzurechnungsgewinn § 15a (3) Satz 3 EStG i.H.v. 50.000 €. Der bisherige Verlustabzug nach § 15a (1) S. 2 und 3 EStG wird also rückgängig gemacht. Verrechenbarer Verlust nach § 15a (3) S. 4 EStG beträgt ./. 50.000 €, § 15 (4) EStG." },
      { typ: "titel", text: "Lösung zur Abwandlung Beispiel 12" },
      { typ: "tabelle", spalten: ["Position", "Betrag", "ausgleichsfähig", "verrechenbar"], zeilen: [
        ["Kapital 01.01.01 (Hafteinlage 100.000)", "70.000 €", "", ""],
        ["Verlust 01", "./. 100.000 €", "./. 100.000 €", "./. 0 €"],
        ["31.12.01", "./. 30.000 €", "", ""],
        ["zu berücksichtigende Einkünfte 01 (§ 15a (1) S. 1, 2)", "./. 100.000 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 0 €"],
        ["Reduzierung der Hafteinlage auf 50.000 € – § 15a (1) S. 2 entfällt; Gewinn 02", "0 €", "", ""],
        ["31.12.02", "./. 30.000 €", "", ""],
        ["zu berücksichtigende Einkünfte 02 (§ 15a (3) S. 3)", "+ 30.000 €", "", ""],
        ["§ 15a (4) EStG verrechenbarer Verlust", "", "", "./. 30.000 €"],
      ] },
      { text: "01 Zu 70.000 € ist der Verlust nach § 15a (1) S. 1 EStG und i.H.v. weiteren 30.000 € nach § 15a (1) S. 2, 3 EStG ausgleichs- oder abzugsfähig. 02 Hinzurechnungsgewinn gem. § 15a (3) S. 3 EStG + 30.000 €. Der bisherige Verlustabzug nach § 15a (1) S. 2, 3 EStG wird rückgängig gemacht. Gleichzeitig erfolgt die Feststellung eines verrechenbaren Verlustes i.H.v. ./. 30.000 €, § 15a (3) S. 4 u. (4) EStG. Der nach § 15a (1) S. 1 EStG für 01 ausgleichsfähige Verlust bleibt unberührt." },
    ],
  },
];

export const estFallsammlungen = [
  ...faelle15a.map((fall) => ({ ...FS_15A, ...fall })),
];

export default estFallsammlungen;
