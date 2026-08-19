/* Trainingsdaten für Klausur 1 (Umsatzsteuer). Die Fragen und Karten decken
   ausschließlich Stoff der Einheiten 1–8 ab; Rechtsstand wie im Prüfschema
   (Kleinunternehmer-Reform und E-Rechnungspflicht 2025 eingearbeitet). */

export const k1Quizfragen = [
  {
    frage: "Welche Merkmale verlangt der Grundtatbestand des § 1 Abs. 1 Nr. 1 UStG?",
    optionen: [
      "Lieferung oder sonstige Leistung, Unternehmer, Inland, Entgelt, Rahmen des Unternehmens",
      "Nur Lieferung eines Unternehmers gegen Entgelt",
      "Jede Leistung im Inland, auch privat",
      "Leistung, Gewinnerzielungsabsicht und Buchführungspflicht",
    ],
    richtig: 0,
    erklaerung: "Alle fünf Merkmale müssen gemeinsam vorliegen; fehlt eines, ist der Umsatz nicht steuerbar.",
  },
  {
    frage: "Wo liegt der Ort einer bewegten Lieferung nach § 3 Abs. 6 S. 1 UStG?",
    optionen: ["am Ende der Beförderung", "wo sich der Gegenstand bei Beginn der Beförderung oder Versendung befindet", "am Sitz des Abnehmers", "wahlweise Beginn oder Ende"],
    richtig: 1,
    erklaerung: "Die bewegte Lieferung wird an den Beginn der Beförderung/Versendung verlegt; die ruhende Lieferung folgt § 3 Abs. 7 UStG.",
  },
  {
    frage: "Wie hoch ist die Erwerbsschwelle für Halbunternehmer nach § 1a Abs. 3 UStG?",
    optionen: ["10.000 €", "12.500 €", "17.500 €", "25.000 €"],
    richtig: 1,
    erklaerung: "Bleibt der Schwellenerwerber (z. B. Kleinunternehmer, pauschalierender Landwirt) unter 12.500 €, findet kein innergemeinschaftlicher Erwerb statt.",
  },
  {
    frage: "Wie lang ist der Berichtigungszeitraum des § 15a UStG bei Grundstücken?",
    optionen: ["5 Jahre", "10 Jahre", "15 Jahre", "unbegrenzt"],
    richtig: 1,
    erklaerung: "§ 15a Abs. 1 S. 2 UStG: zehn Jahre bei Grundstücken einschließlich ihrer wesentlichen Bestandteile, sonst fünf Jahre.",
  },
  {
    frage: "Was gilt seit 2025 für Umsätze eines Kleinunternehmers (§ 19 UStG n. F.)?",
    optionen: [
      "Die Steuer wird nicht erhoben, entsteht aber",
      "Die Umsätze sind steuerfrei gestellt",
      "Es gilt automatisch der ermäßigte Steuersatz",
      "Es ändert sich nichts gegenüber der alten Rechtslage",
    ],
    richtig: 1,
    erklaerung: "Seit dem 1.1.2025 sind Kleinunternehmerumsätze steuerfrei gestellt (Grenzen: Vorjahr 25.000 €, laufendes Jahr 100.000 €). Ein Vorsteuerabzug bleibt ausgeschlossen.",
  },
  {
    frage: "Ein Unternehmer weist in der Rechnung 19 % statt richtig 7 % aus. Was folgt daraus?",
    optionen: [
      "Er schuldet nur die 7 %",
      "Er schuldet auch den Mehrbetrag nach § 14c Abs. 1 UStG, kann die Rechnung aber berichtigen",
      "Die Rechnung ist nichtig",
      "Der Leistungsempfänger schuldet die Differenz",
    ],
    richtig: 1,
    erklaerung: "Unrichtiger Steuerausweis: Der Mehrbetrag wird nach § 14c Abs. 1 UStG geschuldet; nach Berichtigung entfällt er (§ 17 Abs. 1 UStG entsprechend).",
  },
  {
    frage: "Bemessungsgrundlage der unentgeltlichen Pkw-Nutzung (§ 3 Abs. 9a Nr. 1 UStG)?",
    optionen: [
      "der 1-%-Wert unverändert",
      "die bei der Ausführung entstandenen Ausgaben, soweit sie zum Vorsteuerabzug berechtigt haben",
      "der Bruttolistenpreis",
      "der halbierte Listenpreis wie bei der Einkommensteuer",
    ],
    richtig: 1,
    erklaerung: "§ 10 Abs. 4 S. 1 Nr. 2 UStG. Aus Vereinfachung darf vom 1-%-Wert ausgegangen und für nicht vorsteuerbelastete Kosten pauschal 20 % abgeschlagen werden – die ertragsteuerliche Halbierung/Viertelung gilt umsatzsteuerlich nicht.",
  },
  {
    frage: "Wer schuldet die Steuer bei einer Bauleistung unter § 13b UStG?",
    optionen: ["stets der leistende Unternehmer", "der Leistungsempfänger, wenn er selbst nachhaltig Bauleistungen erbringt", "beide gesamtschuldnerisch", "das Finanzamt zieht direkt beim Bauherrn ein"],
    richtig: 1,
    erklaerung: "Reverse-Charge: § 13b Abs. 2 Nr. 4, Abs. 5 S. 2 UStG verlagert die Steuerschuld auf den bauleistenden Leistungsempfänger.",
  },
  {
    frage: "Wann entsteht die Steuer bei Soll-Versteuerung (§ 13 Abs. 1 Nr. 1 Buchst. a UStG)?",
    optionen: [
      "mit Rechnungsstellung",
      "mit Ablauf des Voranmeldungszeitraums, in dem die Leistung ausgeführt wurde",
      "mit Zahlungseingang",
      "mit Vertragsschluss",
    ],
    richtig: 1,
    erklaerung: "Bei Anzahlungen vor Leistungsausführung greift die Mindest-Ist-Versteuerung (§ 13 Abs. 1 Nr. 1 Buchst. a S. 4 UStG).",
  },
  {
    frage: "Wie behandelt das UStG eine Geschäftsveräußerung im Ganzen (§ 1 Abs. 1a UStG)?",
    optionen: ["steuerbar und steuerpflichtig", "steuerbar, aber steuerfrei", "nicht steuerbar; der Erwerber tritt in die Rechtsposition ein", "nur bei Grundstücken begünstigt"],
    richtig: 2,
    erklaerung: "Die GiG ist nicht steuerbar; der Erwerber tritt an die Stelle des Veräußerers – wichtig auch für laufende §-15a-Berichtigungszeiträume.",
  },
  {
    frage: "Das Entgelt ändert sich nachträglich (z. B. Skonto, Forderungsausfall). Wann wird berichtigt?",
    optionen: [
      "rückwirkend im Voranmeldungszeitraum des Umsatzes",
      "im Voranmeldungszeitraum, in dem die Änderung eingetreten ist (§ 17 Abs. 1 S. 8 UStG)",
      "erst in der Jahreserklärung",
      "gar nicht",
    ],
    richtig: 1,
    erklaerung: "§ 17 UStG wirkt ex nunc: Steuer und Vorsteuer werden im Zeitraum der Änderung berichtigt – aus einem Bruttobetrag ist die Steuer herauszurechnen.",
  },
  {
    frage: "Welche Voraussetzungen hat der Vorsteuerabzug nach § 15 Abs. 1 S. 1 Nr. 1 UStG?",
    optionen: [
      "Leistung von einem Unternehmer für das Unternehmen und eine ordnungsgemäße Rechnung",
      "nur die Zahlung der Rechnung",
      "eine Genehmigung des Finanzamts",
      "mindestens 10 % unternehmerische Nutzung reicht immer und allein",
    ],
    richtig: 0,
    erklaerung: "Zusätzlich darf kein Ausschluss nach § 15 Abs. 2 UStG greifen (z. B. steuerfreie Vermietung ohne Option nach § 9 UStG).",
  },
  {
    frage: "Was gilt seit dem 1.1.2025 für Rechnungen im B2B-Inlandsgeschäft?",
    optionen: [
      "Papierrechnungen sind verboten",
      "Jeder Unternehmer muss E-Rechnungen empfangen können; die Ausstellungspflicht gilt mit Übergangsfristen",
      "Nur Großunternehmen betrifft die E-Rechnung",
      "Die E-Rechnung bleibt freiwillig",
    ],
    richtig: 1,
    erklaerung: "Die strukturierte E-Rechnung (EN 16931) ist im B2B-Inland der Regelfall; für die Ausstellung gelten gestaffelte Übergangsfristen.",
  },
  {
    frage: "Eine innergemeinschaftliche Lieferung an einen Unternehmer mit USt-IdNr. ist …",
    optionen: [
      "im Inland steuerpflichtig",
      "steuerfrei nach § 4 Nr. 1 Buchst. b i. V. m. § 6a UStG; der Abnehmer versteuert den Erwerb",
      "nicht steuerbar",
      "nur mit Genehmigung steuerfrei",
    ],
    richtig: 1,
    erklaerung: "Bestimmungslandprinzip: Steuerfreiheit beim Lieferer, innergemeinschaftlicher Erwerb nach § 1a UStG beim Abnehmer – die gültige USt-IdNr. ist materielle Voraussetzung.",
  },
  {
    frage: "Der Unternehmer verwendet selbst beschafften Hauptstoff für die Arbeiten am fremden Gegenstand. Was liegt vor?",
    optionen: ["Werkleistung", "Werklieferung (§ 3 Abs. 4 UStG)", "Dienstleistungskommission", "unentgeltliche Wertabgabe"],
    richtig: 1,
    erklaerung: "Beschafft der Unternehmer den Hauptstoff selbst, liegt eine Werklieferung vor; stellt der Besteller den Hauptstoff, ist es eine Werkleistung.",
  },
  {
    frage: "Wo ist eine sonstige Leistung an einen anderen Unternehmer für dessen Unternehmen ausgeführt (B2B-Grundregel)?",
    optionen: ["am Sitz des Leistenden", "am Ort des Leistungsempfängers (§ 3a Abs. 2 UStG)", "immer im Inland", "am Ort der tatsächlichen Nutzung"],
    richtig: 1,
    erklaerung: "B2B-Grundregel Empfängerort; B2C nach § 3a Abs. 1 UStG Sitz des Leistenden – die Sonderorte (§ 3a Abs. 3, § 3b UStG) gehen vor.",
  },
];

export const k1Karteikarten = [
  { vorn: "Prüfungsreihenfolge der USt-Klausur", hinten: "Steuerbarkeit (§ 1) → Steuerbefreiung (§ 4, ggf. Option § 9) → Bemessungsgrundlage (§ 10) → Steuersatz (§ 12) → Steuerschuldner (§ 13a/§ 13b) → Entstehung (§ 13) → Vorsteuer (§ 15) → Berichtigungen (§ 15a, § 17)." },
  { vorn: "Unternehmer (§ 2 Abs. 1 UStG)", hinten: "Wer eine gewerbliche oder berufliche Tätigkeit selbstständig ausübt; nachhaltig zur Erzielung von Einnahmen – Gewinnerzielungsabsicht ist nicht erforderlich." },
  { vorn: "Lieferung (§ 3 Abs. 1 UStG)", hinten: "Verschaffung der Verfügungsmacht an einem Gegenstand: Substanz, Wert und Ertrag gehen über." },
  { vorn: "Sonstige Leistung (§ 3 Abs. 9 UStG)", hinten: "Jede Leistung, die keine Lieferung ist – auch Dulden und Unterlassen." },
  { vorn: "Unentgeltliche Wertabgaben", hinten: "Gegenstandsentnahme § 3 Abs. 1b UStG (nur bei vorherigem Vorsteuerabzug), Verwendungs- und Leistungsentnahme § 3 Abs. 9a UStG; BMG: Einkaufspreis bzw. Ausgaben (§ 10 Abs. 4 UStG)." },
  { vorn: "Ort der ruhenden Lieferung", hinten: "§ 3 Abs. 7 UStG: wo sich der Gegenstand zur Zeit der Verschaffung der Verfügungsmacht befindet." },
  { vorn: "Mindestbemessungsgrundlage (§ 10 Abs. 5 UStG)", hinten: "Bei verbilligten Leistungen an nahestehende Personen oder Personal gilt mindestens die BMG des § 10 Abs. 4 UStG, gedeckelt auf das marktübliche Entgelt." },
  { vorn: "Option nach § 9 UStG", hinten: "Verzicht auf bestimmte Steuerbefreiungen (z. B. § 4 Nr. 9a, Nr. 12), nur an Unternehmer für dessen Unternehmen; bei Grundstücken zusätzlich Ausschließlichkeits- und Formerfordernisse (§ 9 Abs. 2, 3 UStG)." },
  { vorn: "§ 15a UStG – Eckdaten", hinten: "Berichtigung bei Änderung der Verwendungsverhältnisse: 5 Jahre, bei Grundstücken 10 Jahre; Bagatellgrenze § 44 UStDV (Vorsteuer des Wirtschaftsguts bis 1.000 € keine Berichtigung); pro Jahr 1/5 bzw. 1/10." },
  { vorn: "Ist-Versteuerung (§ 20 UStG)", hinten: "Auf Antrag bei Gesamtumsatz bis 800.000 € (seit 2024), fehlender Buchführungspflicht oder Freiberuflern: Steuer entsteht mit Vereinnahmung." },
  { vorn: "Steuersätze (§ 12 UStG)", hinten: "Regelsteuersatz 19 %, ermäßigt 7 % (Anlage 2 und Katalog des § 12 Abs. 2 UStG); aus Bruttobeträgen mit 19/119 bzw. 7/107 herausrechnen." },
  { vorn: "Halbunternehmer (§ 1a Abs. 3 UStG)", hinten: "Kleinunternehmer, pauschalierende Land- und Forstwirte, Unternehmer mit nur vorsteuerschädlichen Umsätzen, nichtunternehmerische juristische Personen – kein ig. Erwerb bis 12.500 € Erwerbsschwelle; Verzicht möglich (§ 1a Abs. 4 UStG)." },
  { vorn: "Pflichtangaben der Rechnung (§ 14 Abs. 4 UStG)", hinten: "U. a. vollständige Namen/Anschriften, Steuernummer oder USt-IdNr., Rechnungsdatum und fortlaufende Nummer, Menge/Art, Leistungszeitpunkt, Entgelt nach Steuersätzen aufgeschlüsselt, Steuersatz und Steuerbetrag." },
  { vorn: "Kleinunternehmer seit 2025 (§ 19 UStG n. F.)", hinten: "Umsätze sind steuerfrei gestellt; Grenzen: Vorjahresumsatz 25.000 €, laufendes Jahr 100.000 € (Überschreiten wirkt ab dem Umsatz, mit dem die Grenze gerissen wird). Kein Vorsteuerabzug; Verzicht bindet fünf Jahre." },
  { vorn: "§ 14c UStG – zwei Fälle", hinten: "Abs. 1 unrichtiger (zu hoher) Ausweis: Mehrbetrag wird geschuldet, Berichtigung möglich. Abs. 2 unberechtigter Ausweis (z. B. Nichtunternehmer): Steuer wird geschuldet, Berichtigung nur bei beseitigter Gefährdung des Steueraufkommens." },
  { vorn: "Innergemeinschaftlicher Erwerb (§ 1a UStG)", hinten: "Gegenstand gelangt von einem Mitgliedstaat ins Inland an einen Unternehmer für sein Unternehmen; Ort nach § 3d UStG; Erwerbsteuer und – bei Regelversteuerern – Vorsteuerabzug nach § 15 Abs. 1 S. 1 Nr. 3 UStG." },
];
