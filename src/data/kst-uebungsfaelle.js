/* KSt-Übungsfälle (Markus Nöthen), Teil 1 (Stand 07/2025) und Teil 2
   (Stand 12/2025), Rechtsstand 2025.

   Wie bei den GewSt-Übungsfällen liegt im freigegebenen Ordner nur der
   Aufgabenteil. Die Fälle stehen hier deshalb bewusst ohne Musterlösung – es
   wurde nichts ergänzt, was nicht aus der Quelle stammt.

   Blocktypen wie bei den Hausaufgaben: text | titel | tabelle. */

export const kstUebungsfaelleQuelle = {
  reihe: "KSt-Übungsfälle · Markus Nöthen",
  stand: "Rechtsstand 2025",
  didaktik: [
    "Die Übungsfälle begleiten die KSt-Einheiten des Tageslehrgangs. Teil 1 führt von der Einkommensermittlung einer GmbH über die Hinzurechnungen des § 10 KStG bis zur Vereinsbesteuerung, Teil 2 behandelt die ertragsteuerliche Organschaft.",
    "Zum freigegebenen Aufgaben-PDF liegt im Ordner kein Lösungsteil. Die Fälle stehen hier deshalb bewusst ohne Musterlösung – es wurde nichts ergänzt, was nicht aus der Quelle stammt.",
    "Die Unterlagen sind urheberrechtlich geschützt; sie stehen hier ausschließlich für den eigenen Bedarf des Erwerbers.",
  ],
};

const OHNE_LOESUNG = { text: "Zu diesem Fall liegt im freigegebenen Ordner kein Lösungsteil vor. Es wurde bewusst keine Musterlösung ergänzt, die nicht aus der Quelle stammt. Sobald der Lösungsteil vorliegt, wird er hier wortlautgetreu nachgetragen." };

const HINWEISE = [
  { text: "• Cent-Beträge sind auf volle Euro abzurunden (bis 49 Cent) bzw. aufzurunden (ab 50 Cent)." },
  { text: "• Eventuell erforderliche Nachweise, Rechnungen und Bescheinigungen sind ordnungsgemäß, soweit sich aus dem Sachverhalt nichts Gegenteiliges ergibt." },
];

const TEIL1 = {
  teil: "1",
  teilLabel: "Teil 1 – Einkommensermittlung und Verein",
  quelle: "KSt-Übungsfälle Teil 1 (Nöthen), Stand 07/2025",
  verfasser: "Markus Nöthen",
  rechtsstand: "Rechtsstand 2025",
};

const TEIL2 = {
  teil: "2",
  teilLabel: "Teil 2 – Organschaft",
  quelle: "KSt-Übungsfälle Teil 2 (Nöthen), Stand 12/2025",
  verfasser: "Markus Nöthen",
  rechtsstand: "Rechtsstand 2025",
};

const faelleTeil1 = [
  {
    id: "kst-uf-1-01",
    title: "Fall 1 – MN-GmbH, Versandhandel in Osnabrück: Abschlusszahlung zur Körperschaftsteuer",
    thema: "Vom Steuerbilanzgewinn zur Abschlusszahlung: nichtabziehbare Aufwendungen nach § 10 KStG, ausländische Geldbußen und Geldstrafen, Beiratsvergütungen, Bewirtung, Hinterziehungszinsen und Spenden",
    normen: ["§ 10 Nr. 2 KStG", "§ 10 Nr. 3 KStG", "§ 10 Nr. 4 KStG", "§ 8 Abs. 1 KStG", "§ 4 Abs. 5 Satz 1 Nr. 2 EStG", "§ 4 Abs. 5 Satz 1 Nr. 8 EStG", "§ 4 Abs. 5b EStG", "§ 9 Abs. 1 Nr. 2 KStG", "§ 52 ff. AO", "§ 5 Abs. 4a EStG"],
    themen: ["Nichtabziehbare Aufwendungen", "Drohverlustrückstellung", "Ausländische Geldbußen", "Beiratsvergütung", "Bewirtungskosten", "Hinterziehungszinsen", "Parteispenden"],
    sachverhalt: [
      { text: "Die MN-GmbH hat ihren Sitz und ihre Geschäftsleitung in Osnabrück und betreibt einen Versandhandel. Das Wirtschaftsjahr entspricht dem Kalenderjahr. Alleingesellschafter der MN-GmbH ist MN, der seinen Wohnsitz in Münster hat." },
      { text: "Die MN-GmbH hat in 2025 einen Jahresüberschuss nach HGB über 480.000 € erzielt. Der Gewinn laut Steuerbilanz beträgt 500.000 €, weil die MN-GmbH in der Handelsbilanz eine Rückstellung für drohende Verluste aus schwebenden Geschäften gebildet hatte." },
      { text: "In der Gewinn- und Verlustrechnung sind folgende Aufwendungen und Erträge ertragswirksam erfasst worden:" },
      { typ: "titel", text: "a) Vorauszahlungen" },
      { text: "Die MN-GmbH hat pro Quartal 10.000 € Vorauszahlungen zur Körperschaftsteuer bzw. 550 € Vorauszahlungen zum Solidaritätszuschlag als Aufwand gebucht und geleistet. Ferner wurden pro Quartal 10.000 € Vorauszahlungen zur Gewerbesteuer entrichtet und aufwandswirksam gebucht." },
      { text: "Dazu wurden 200 € Verspätungszuschlag zur Körperschaftsteuer aufwandswirksam erfasst, weil die Steuererklärung 2023 verspätet abgegeben wurde." },
      { typ: "titel", text: "b) Geldbuße und Geldstrafe" },
      { text: "Die MN-GmbH hat je eine Geldbußen aus der Schweiz über umgerechnet 50 € und über 200 € aus Belgien als Aufwand gebucht. Ferner wurden 50 € für eine Geldstrafe aus Polen als Aufwand gebucht. (Satzbau „je eine Geldbußen“ so in der Quelle)" },
      { typ: "titel", text: "c) Beirat" },
      { text: "Die MN-GmbH verfügt über einen Beirat, der die Geschäftsführung überwacht. Die Vergütungen über 8.000 € wurden als Aufwand erfasst. Ebenfalls aufwandswirksam wurden 2.200 € tatsächlich angefallene Reisekosten erfasst." },
      { typ: "titel", text: "d) Bewirtungskosten" },
      { text: "In der Gewinn- und Verlustrechnung sind 1.000 € angemessene Bewirtungskosten für die Bewirtung von Geschäftspartnern als Aufwand auf dem Konto „sonstige unbeschränkt abziehbare Betriebsausgaben“ erfasst wurden. Die Vorsteuer über 190 € wurde geltend gemacht. (Satzbau „erfasst wurden“ so in der Quelle)" },
      { typ: "titel", text: "e) Steuerhinterziehung" },
      { text: "Ferner wurden 500 € Hinterziehungszinsen zur Körperschaftsteuer 2018 sowie zur 900 € Hinterziehungszinsen zur Umsatzsteuer aufwandwirksam erfasst. (Satzbau „sowie zur 900 €“ so in der Quelle)" },
      { typ: "titel", text: "f) Spenden" },
      { text: "An politische Parteien hat die MN-GmbH in 2025 500 € gespendet und als Aufwand gebucht. Außerdem wurden 1.000 € an einen gemeinnützigen Verein iSd. § 52 ff. AO gespendet und als Aufwand behandelt." },
    ],
    aufgabe: [
      { text: "• Ermitteln Sie die Abschlusszahlung zur Körperschaftsteuer sowie zum Solidaritätszuschlag. Auf allgemeine Fragen (Steuerpflicht etc.) ist nicht einzugehen." },
      { typ: "titel", text: "Hinweise" },
      { text: "• Die MN-GmbH wünscht in 2025 eine möglichst niedrige steuerliche Belastung." },
      ...HINWEISE,
    ],
    loesung: [OHNE_LOESUNG],
  },
  {
    id: "kst-uf-1-02",
    title: "Fall 2 – MN-GmbH, Spedition in Köln: zu versteuerndes Einkommen",
    thema: "Verspätungszuschläge zu Anmeldungssteuern, Erstattung früherer Nachzahlungszinsen, Geschenke mit § 37b EStG, zinsloses Gesellschafterdarlehen und der Verlustanteil aus einer typisch stillen Beteiligung",
    normen: ["§ 8 Abs. 1 KStG", "§ 8 Abs. 3 Satz 2 KStG", "§ 10 Nr. 2 KStG", "§ 4 Abs. 5 Satz 1 Nr. 1 EStG", "§ 37b EStG", "§ 20 Abs. 1 Nr. 4 EStG", "§ 15 Abs. 1 Satz 1 Nr. 2 EStG", "§ 233a AO"],
    themen: ["Verspätungszuschlag", "Zinserstattung", "Geschenke", "Pauschalsteuer § 37b", "Verdeckte Gewinnausschüttung", "Typisch stille Beteiligung"],
    sachverhalt: [
      { text: "Die im Kalenderjahr 2015 gegründete MN-GmbH hat ihren Sitz und ihre Geschäftsleitung in Köln und betreibt eine Spedition. Das Wirtschaftsjahr entspricht dem Kalenderjahr. Gesellschafter der MN-GmbH ist MN, der seine 40 % Beteiligung im Privatvermögen hält. MN seinen Wohnsitz in Leverkusen. Die weiteren 60 % an der MN-GmbH gehören Franz Fischer (FF), der in Porz wohnt. FF hat seine Beteiligung ebenfalls im Privatvermögen. (Satzbau „MN seinen Wohnsitz“ so in der Quelle)" },
      { text: "Die MN-GmbH hat in 2025 einen Bilanzgewinn von 400.000 € erzielt. Der Gewinnvortrag aus 2024 beträgt 55.000 €. In 2025 wurde eine Gewinnrücklage über 90.000 € gebildet." },
      { text: "In der Gewinn- und Verlustrechnung sind folgende Aufwendungen und Erträge ertragswirksam erfasst worden:" },
      { typ: "titel", text: "a) Verspätungszuschlag Lohnsteuer-Anmeldung und Kapitalertragsteuer-Anmeldung" },
      { text: "Die MN-GmbH hat einen Verspätungszuschlag wegen der verspäteten Abgabe der Lohnsteuer-Anmeldung über 200 € sowie wegen der verspäteten Abgabe der Kapitalertragsteuer-Anmeldung über 400 € als Aufwand gebucht." },
      { typ: "titel", text: "b) Nachzahlungszinsen" },
      { text: "Die MN-GmbH hat Nachzahlungszinsen zur Körperschaftsteuer in 2024 über 400 € aufwandswirksam gebucht. In 2025 kriegt die MN-GmbH die 400 € wegen eines erfolgreichen Einspruchsverfahrens wieder erstattet und bucht die Erstattung: Bank 400 € an Ertrag 400 €" },
      { typ: "titel", text: "c) Geschenke" },
      { text: "Die MN-GmbH hat dem Inhaber des Speditionsunternehmens Peter Pan zu Weihnachten eine Kiste Wein geschenkt. Die Kiste Wein hat 100 € zzgl. 19 € USt gekostet und wurde als Aufwand bzw. Vorsteuer gebucht. Peter Pan übernimmt für die MN-GmbH gelegentlich Fahrten, wenn die MN-GmbH einen personellen Engpass hat." },
      { text: "Die MN-GmbH möchte § 37b EStG anwenden. Weitere Buchungen als angegeben erfolgten noch nicht." },
      { typ: "titel", text: "d) Darlehen" },
      { text: "Die MN-GmbH hat MN ein zinsloses Darlehen über 10.000 € gegeben und ordnungsgemäß verbucht. Der angemessene Zins hätte 250 € jährlich betragen." },
      { typ: "titel", text: "e) Stille Beteiligung" },
      { text: "Die MN-GmbH ist seit Anfang 2025 als typisch stille Gesellschafterin an der X-GmbH beteiligt mit einer Einlage von 120.000 € beteiligt. Der MN-GmbH steht auch eine Beteiligung an den stillen Reserven bzw. stillen Lasten und am Firmenwert der X-GmbH zu. Der Verlustanteil über 100.000 € wurde buchhalterisch bei der MN-GmbH zutreffend als Aufwand erfasst. Auch die Beteiligung wurde zutreffend bilanziert. (Der Sachverhalt nennt die Beteiligung „typisch still“ und weist ihr zugleich eine Beteiligung an stillen Reserven und am Firmenwert zu – so in der Quelle)" },
    ],
    aufgabe: [
      { text: "• Ermitteln Sie das zu versteuernde Einkommen. Auf allgemeine Fragen (Steuerpflicht etc.) ist nicht einzugehen." },
      { typ: "titel", text: "Hinweise" },
      { text: "• Die MN-GmbH wünscht in 2025 eine möglichst niedrige steuerliche Belastung." },
      ...HINWEISE,
    ],
    loesung: [OHNE_LOESUNG],
  },
  {
    id: "kst-uf-1-03",
    title: "Fall 3 – Rheinland-Volksmusik-Verein: zu versteuerndes Einkommen und Steuerpflicht",
    thema: "Vier Sphären eines gemeinnützigen Vereins: ideeller Bereich, Vermögensverwaltung, Zweckbetrieb und wirtschaftlicher Geschäftsbetrieb – mit Freibetrag nach § 24 KStG",
    normen: ["§ 1 Abs. 1 Nr. 4 KStG", "§ 5 Abs. 1 Nr. 9 KStG", "§ 24 KStG", "§ 14 AO", "§ 52 Abs. 2 Satz 1 Nr. 5 AO", "§ 60a AO", "§ 64 Abs. 1 AO", "§ 64 Abs. 3 AO", "§ 67a AO", "§ 68 Nr. 7 AO", "§ 4 Abs. 3 EStG"],
    themen: ["Gemeinnützigkeit", "Ideeller Bereich", "Vermögensverwaltung", "Zweckbetrieb", "Wirtschaftlicher Geschäftsbetrieb", "Freibetrag § 24 KStG"],
    sachverhalt: [
      { text: "Der Rheinland-Volksmusik-Verein mit Sitz in Düsseldorf verfolgt seit seiner Gründung ausschließlich und unmittelbar gemeinnützige Zwecke gemäß § 52 Abs. 2 S. 1 Nr. 5 AO (Förderung der Kunst und Kultur) und unterhält ein Musik-Theater in der Düsseldorfer Altstadt. Vor den Konzerten und in den Pausen haben die Besucher die Chance, an einer Theke im Foyer des Getränke und Speisen zu erwerben. (Satzbau „im Foyer des Getränke und Speisen“ so in der Quelle)" },
      { text: "Der Rheinland-Volksmusik-Verein ist im Vereinsregister beim Amtsgericht Düsseldorf eingetragen. Er ermittelt seinen Gewinn - soweit dies für steuerliche Zwecke erforderlich ist - zulässigerweise nach § 4 Absatz 3 EStG. Das für die Besteuerung des Rheinland-Volksmusik-Vereins zuständige Finanzamt Düsseldorf-Nord hat die Einhaltung der satzungsgemäßen Voraussetzungen zutreffend nach § 60a AO festgestellt." },
      { text: "Aus der Überschussermittlung des Rheinland-Volksmusik-Vereins ergeben sich die nachstehenden Einnahmen und Ausgaben:" },
      { typ: "tabelle", spalten: ["Position", "Betrag"], zeilen: [
        ["Mitgliedsbeiträge der Vereinsmitglieder", "120.000 €"],
        ["Spenden", "50.000 €"],
        ["Zinsen", "1.200 €"],
        ["Eintrittsgelder Konzerte", "400.000 €"],
        ["Einnahmen Getränke und Speisen", "60.000 €"],
        ["Ausgaben Getränke und Speisen", "40.000 €"],
        ["Einnahmenüberschuss", "591.200 €"],
      ] },
    ],
    aufgabe: [
      { text: "Ermitteln Sie das der Körperschaftsteuer unterliegende zu versteuernde Einkommen des Vereins. Beurteilen Sie auch die Körperschaftsteuerpflicht." },
      { typ: "titel", text: "Hinweise" },
      { text: "• Auf Umsatzsteuer ist nicht einzugehen." },
      ...HINWEISE,
    ],
    loesung: [OHNE_LOESUNG],
  },
];

const faelleTeil2 = [
  {
    id: "kst-uf-2-01",
    title: "Fall 1 (Organschaft) – X-GmbH und Y-GmbH: zu zahlende Körperschaftsteuer",
    thema: "Organschaft mit außenstehendem Gesellschafter: Ausgleichszahlung nach § 16 KStG, § 8b KStG bei der Organgesellschaft, verdeckte Gewinnausschüttungen in beiden Gesellschaften und nichtabziehbare Aufwendungen",
    normen: ["§ 14 KStG", "§ 15 KStG", "§ 16 KStG", "§ 17 KStG", "§ 8b Abs. 1 KStG", "§ 8b Abs. 4 KStG", "§ 8b Abs. 5 KStG", "§ 8 Abs. 3 Satz 2 KStG", "§ 10 Nr. 2 KStG", "§ 9 Abs. 1 Nr. 2 KStG", "§ 4 Abs. 5 Satz 1 Nr. 9 EStG", "§ 233a AO", "R 8.5 KStR", "R 8.6 KStR", "R 14.6 KStR"],
    themen: ["Organschaft", "Ausgleichszahlung", "Außenstehender Gesellschafter", "Streubesitzdividende", "Verdeckte Gewinnausschüttung", "Nahestehende Person"],
    sachverhalt: [
      { text: "Die X-GmbH hat ihren Sitz und ihre Geschäftsleitung in Xanten und betreibt einen Versandhandel. Das Wirtschaftsjahr entspricht dem Kalenderjahr. Alleingesellschafter der X-GmbH ist X, der seinen Wohnsitz in Viersen hat. Die X-GmbH hat seit Jahren eine 90 % Beteiligung an der Y-GmbH mit den Anschaffungskosten von 22.500 € bilanziert. Zwischen der Y-GmbH und der X-GmbH besteht seit 2025 eine wirksame Organschaft. Die Y-GmbH unterhält ebenfalls einen Versandhandel und hat ihren Sitz und ihre Geschäftsleitung in Oberhausen. Mit 10 % ist MN an der Y-GmbH beteiligt. MN hat die Beteiligung an der Y-GmbH (Anschaffungskosten 2.500 €) im Privatvermögen. Sein Wohnsitz ist ebenfalls in Oberhausen." },
      { typ: "titel", text: "Handelsbilanz/Steuerbilanz 31.12.2025 X-GmbH" },
      { typ: "tabelle", spalten: ["Aktiva", "Betrag", "Passiva", "Betrag"], zeilen: [
        ["Beteiligung Y-GmbH", "22.500", "Stammkapital", "60.000"],
        ["Sonstiges Anlagevermögen", "17.500", "Jahresüberschuss/Bilanzgewinn", "135.000"],
        ["Forderung Gewinnabführung", "120.000", "Sonstige Passiva", "5.000"],
        ["Sonstiges Umlaufvermögen", "40.000", "", ""],
        ["", "200.000", "", "200.000"],
      ] },
      { typ: "titel", text: "Handelsbilanz/Steuerbilanz 31.12.2025 Y-GmbH" },
      { typ: "tabelle", spalten: ["Aktiva", "Betrag", "Passiva", "Betrag"], zeilen: [
        ["Beteiligung A-AG", "10.000", "Stammkapital", "25.000"],
        ["Sonstiges Anlagevermögen", "100.000", "Jahresüberschuss/Bilanzgewinn", "0"],
        ["Sonstiges Umlaufvermögen", "135.000", "Verbindlichkeit Gewinnabführung", "120.000"],
        ["", "", "Sonstige Passiva", "100.000"],
        ["", "245.000", "", "245.000"],
      ] },
      { typ: "titel", text: "a) Aufwendungen und Erträge 2025" },
      { text: "Die X-GmbH hat Säumniszuschläge zur KSt/SolZ über 200 € als Aufwand gebucht. Ferner hat die X-GmbH 1.000 € pro Quartal KSt-Vorauszahlungen (zzgl. SolZ-Vorauszahlungen) aufwandswirksam erfasst. Die Y-GmbH hat Hinterziehungszinsen zur USt 2022 über 400 € aufwandswirksam gebucht. Auf die Hinterziehungszinsen wurden § 233a AO-Zinsen über 2.000 € angerechnet und ebenfalls aufwandswirksam erfasst. Außerdem hat die Y-GmbH eine Ausgleichszahlung an MN über 16.000 € als Aufwand erfasst." },
      { typ: "titel", text: "b) A-AG" },
      { text: "Die Y-GmbH hat am 02.01.2025 eine 18 % Beteiligung an der A-AG erworben, die ihren Sitz in Hamburg hat. Am 12.10.2025 hat die Y-GmbH eine Dividende aus der A-AG über 16.000 € (vor Steuerabzug) erhalten. Die Dividende wurde bei der Y-GmbH buchhalterisch zutreffend erfasst." },
      { typ: "titel", text: "c) Darlehen" },
      { text: "Die X-GmbH hat X ein zinsloses Darlehen gegeben. Der übliche Zins hätte 2.000 € pro Jahr betragen. Da die X-GmbH selbst keine liquiden Mittel hatte, hat sie das Darlehen refinanziert und dafür 500 € Zinsaufwendungen gezahlt und als Aufwand erfasst." },
      { typ: "titel", text: "d) Grundstück Sternenstraße 10" },
      { text: "Die Y-GmbH hat der X-GmbH seit Januar 2025 das Grundstück Sternenstraße 10 für 2.000 € (ohne USt) pro Monat vermietet. Die Mieten wurden entsprechend als Mietaufwand bzw. Mietertrag gebucht und fristgerecht gezahlt. Die übliche Miete pro Monat liegt bei 5.000 € und beinhaltet auch einen Gewinnzuschlag." },
      { typ: "titel", text: "e) Geschenk an MN’s Tante" },
      { text: "Die Y-GmbH hat der Tante von MN im Mai 2025 ein gebrauchtes Tablet geschenkt. Der Buchwert des Tablets liegt bei 0 €. Der gemeine Wert bei 1.000 €. Der Einkaufspreis liegt im Zeitpunkt der Schenkung bei 800 € (ohne USt). Ursprünglich hat der Einkaufspreis 1.050 € (ohne USt) betragen. Die Y-GmbH hatte das Tablet von einer Privatperson gebraucht erworben." },
      { typ: "titel", text: "f) Spenden" },
      { text: "Die X-GmbH hat 1.000 € an einen gemeinnützigen Verein iSd. § 52 ff. AO gespendet und als Aufwand behandelt. Ferner hat die X-GmbH eine Spende über 500 € an eine politische Partei als Aufwand gebucht." },
    ],
    aufgabe: [
      { text: "• Ermitteln Sie die zu zahlende Körperschaftsteuer der X-GmbH und Y-GmbH. Auf allgemeine Fragen (Steuerpflicht etc.) ist nicht einzugehen. Die Voraussetzungen der Organschaft sind nicht zu prüfen." },
      { typ: "titel", text: "Hinweise" },
      { text: "• Alle Personen wünschen in 2025 eine möglichst niedrige steuerliche Belastung." },
      ...HINWEISE,
    ],
    loesung: [OHNE_LOESUNG],
  },
  {
    id: "kst-uf-2-02",
    title: "Fall 2 (Organschaft) – A-GmbH und B-GmbH: zu zahlende Körperschaftsteuer",
    thema: "Organschaft mit Verlustübernahme: Ausgleichszahlung an den außenstehenden Gesellschafter, zinsloses Darlehen der Organgesellschaft an den Organträger, Anteilsveräußerung nach § 8b Abs. 2 KStG und Drohverlustrückstellung als Minderabführung",
    normen: ["§ 14 KStG", "§ 14 Abs. 4 KStG", "§ 15 KStG", "§ 16 KStG", "§ 8b Abs. 2 KStG", "§ 8b Abs. 3 KStG", "§ 8 Abs. 3 Satz 2 KStG", "§ 9 Abs. 1 Nr. 2 KStG", "§ 4 Abs. 5 Satz 1 Nr. 9 EStG", "§ 5 Abs. 4a EStG", "§ 27 Abs. 6 KStG"],
    themen: ["Organschaft", "Verlustübernahme", "Ausgleichszahlung", "Minderabführung", "Veräußerungsgewinn § 8b", "Drohverlustrückstellung"],
    sachverhalt: [
      { text: "Die A-GmbH hat ihren Sitz und ihre Geschäftsleitung in Aachen und betreibt eine Spedition. Das Wirtschaftsjahr entspricht dem Kalenderjahr. Alleingesellschafter der A-GmbH ist A, der seinen Wohnsitz in Düren hat. Die A-GmbH hat seit Jahren eine 80 % Beteiligung an der B-GmbH mit den Anschaffungskosten von 50.000 € bilanziert. Zwischen der A-GmbH und der B-GmbH besteht seit 2025 eine wirksame Organschaft. Die B-GmbH unterhält einen Baumarkt und hat ihren Sitz und ihre Geschäftsleitung in Bonn. Mit 20 % ist B an der B-GmbH beteiligt. B hat die Beteiligung an der B-GmbH (Anschaffungskosten 10.000 €) im Privatvermögen. Sein Wohnsitz ist in Köln." },
      { typ: "titel", text: "Handelsbilanz 31.12.2025 A-GmbH" },
      { typ: "tabelle", spalten: ["Aktiva", "Betrag", "Passiva", "Betrag"], zeilen: [
        ["Beteiligung B-GmbH", "50.000", "Stammkapital", "25.000"],
        ["Sonstiges Anlagevermögen", "80.000", "Jahresüberschuss/Bilanzgewinn", "10.000"],
        ["Sonstiges Umlaufvermögen", "90.000", "Verbindlichkeit Verlustübernahme", "60.000"],
        ["", "", "Sonstige Passiva", "125.000"],
        ["", "220.000", "", "220.000"],
      ] },
      { typ: "titel", text: "Handelsbilanz 31.12.2025 B-GmbH" },
      { typ: "tabelle", spalten: ["Aktiva", "Betrag", "Passiva", "Betrag"], zeilen: [
        ["Anlagevermögen", "105.000", "Stammkapital", "60.000"],
        ["Forderung Verlustausgleich", "60.000", "Jahresüberschuss/Bilanzgewinn", "0"],
        ["", "", "Sonstige Passiva", "105.000"],
        ["", "165.000", "", "165.000"],
      ] },
      { typ: "titel", text: "a) Aufwendungen und Erträge 2025" },
      { text: "Die B-GmbH hat eine Ausgleichszahlung über 34.000 € an B geleistet und als Aufwand gebucht. Ferner hat die A-GmbH 500 € Parteispenden geleistet und als Aufwand gebucht." },
      { typ: "titel", text: "b) Darlehen" },
      { text: "Die B-GmbH hat der A-GmbH ein zinsloses Darlehen gegeben. Der übliche Zins hätte 2.000 € pro Jahr betragen. Das Darlehen wurde zutreffend als Verbindlichkeit bzw. Forderung bilanziert." },
      { typ: "titel", text: "c) Q-GmbH" },
      { text: "Die B-GmbH ist seit Jahren mit 5 % an der Q-GmbH beteiligt. Die Beteiligung ist zutreffend bilanziert. Am 15.01.2025 verkauft die B-GmbH die Q-GmbH (Anschaffungskosten 2022 9.000 € = Buchwert) für 100.000 €. Der Verkauf wurde zutreffend gebucht. Die Veräußerungskosten über 2.000 € zzgl. 380 € USt wurden bereits im Wirtschaftsjahr 2024 als Aufwand zutreffend bilanziell behandelt." },
      { typ: "titel", text: "d) Rückstellung" },
      { text: "Die B-GmbH hat in 2025 eine Rückstellung für einen drohenden Verlust in der Handelsbilanz über zutreffend 20.000 € gebildet." },
    ],
    aufgabe: [
      { text: "• Ermitteln Sie die zu zahlende Körperschaftsteuer der A-GmbH und B-GmbH. Auf allgemeine Fragen (Steuerpflicht etc.) ist nicht einzugehen. Die Voraussetzungen der Organschaft sind nicht zu prüfen." },
      { typ: "titel", text: "Hinweise" },
      { text: "• Alle Personen wünschen in 2025 eine möglichst niedrige steuerliche Belastung." },
      ...HINWEISE,
    ],
    loesung: [OHNE_LOESUNG],
  },
];

export const kstUebungsfaelle = [
  ...faelleTeil1.map((fall) => ({ ...TEIL1, ...fall })),
  ...faelleTeil2.map((fall) => ({ ...TEIL2, ...fall })),
];

export default kstUebungsfaelle;
