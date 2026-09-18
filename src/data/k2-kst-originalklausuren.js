/* Originalklausuren Körperschaftsteuer (K2).

   Die Original-Prüfungsaufgaben aus dem Gebiet der Körperschaftsteuer mit den
   Lösungshinweisen des Lehrgangs („Körperschaftsteuer, Umwandlungssteuerrecht
   und Gewerbesteuer · Steuerberaterprüfungen 2011 – 2015“, Rechtsstand 2025,
   Februar 2026, Bearbeiter RA/StB Ulrich Breier). Sachverhalt,
   Aufgabenstellung und Lösung sind wortlautgetreu aus dem Quell-PDF
   übernommen.

   Zeitlogik: Die Klausuren sind „überarbeitet und fortgeschrieben auf den
   Rechtsstand zum 31.12.2025“ und spielen im Veranlagungszeitraum 2025 –
   anders als die Ertragsteuerklausuren derselben Reihe, die in abstrakten
   Jahreszahlen rechnen. Die Jahreszahl im Titel bezeichnet den
   Prüfungsjahrgang des Original-Sachverhalts.

   Die Lösungshinweise weisen Randpunkte aus; die Quelle vermerkt dazu
   ausdrücklich: „Die Punktvergabe in den einzelnen Textziffern orientiert sich
   am amtlichen Lösungshinweis.“

   Ergänzt sind nur Thema, Normenliste und Themenchips sowie – ausdrücklich
   als solche gekennzeichnet – redaktionelle Hinweise.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen.
   Blocktypen wie bei den übrigen Klausurdatensätzen: text | titel | tabelle. */

export const kstOriginalklausurenQuelle = {
  reihe: "Körperschaftsteuer, Umwandlungssteuerrecht und Gewerbesteuer · Original-Prüfungsklausuren der Steuerberaterprüfungen 2011–2015",
  stand: "Rechtsstand 2025 (fortgeschrieben zum 31.12.2025), Februar 2026",
  verfasser: "RA/StB Ulrich Breier · Lehrgangsunterlage Steuerberater:in",
  didaktik: [
    "Die Körperschaftsteuerklausur der Steuerberaterprüfung ist fast immer eine Einkommensermittlung von oben nach unten: Ausgangspunkt ist der handelsrechtliche Jahresüberschuss, und jeder Einzelsachverhalt liefert eine außerbilanzielle Korrektur. Wer die Korrekturen in der Reihenfolge der Textziffern sammelt und erst am Ende addiert, verliert keine Punkte an der Darstellung.",
    "Die Quelle stellt dem Aufgabenteil einen eigenen Hinweis voran: Die Bearbeitung der Klausuren früherer Jahre sei „zu Wiederholungs- und Vertiefungszwecken besonders lohnend, da nach den Erfahrungen der Vergangenheit – gerade auch in den letzten Prüfungsjahren – vielfach Sachverhalte und Problemstellungen früherer Klausuren, die länger zurückliegen, erneut in aktuelle Klausuren aufgenommen werden“.",
    "Wiederkehrendes Grundmuster ist die Organschaft in allen ihren Schichten: eigenes Einkommen der Organgesellschaft, Bruttomethode des § 15 KStG, Ausgleichszahlungen nach § 16 KStG, Minder- und Mehrabführungen und die Zurechnung beim Organträger. Daneben stehen die verdeckte Gewinnausschüttung, das steuerliche Einlagekonto und § 8b KStG.",
  ],
};

export const kstOriginalklausuren = [
  {
    id: "kst-ok-a-gmbh-2011",
    block: "pruefung",
    blockLabel: "Steuerberaterprüfung · Körperschaftsteuer",
    nummer: 1,
    jahrgang: "2011",
    punkte: 35,
    title: "A-GmbH (Prüfung 2011) – Sachkapitalerhöhung mit verdeckter Gewinnausschüttung über 285 € und eine Organschaft im ersten Jahr",
    thema: "Eine Einkommensermittlung, an der vier Bausteine hängen: eine Sachkapitalerhöhung, bei der von sieben Kostenpositionen genau eine – 285 € für die Beurkundung der Übernahmeerklärung des Gesellschafters – eine verdeckte Gewinnausschüttung auslöst und dasselbe steuerliche Einlagekonto zugleich erhöht und mindert; eine erstmalige Organschaft, in der die Ausschüttung vororganschaftlicher Gewinne den allgemeinen Regeln folgt, die Bruttomethode des § 15 KStG die Dividende der Organgesellschaft erst beim Organträger korrigiert und eine Ausgleichszahlung von 17.000 € gleich zweimal wirkt; sowie ein Verlust aus atypisch stiller Beteiligung, den § 15 Abs. 4 Satz 6 EStG sperrt",
    rechtsstand: "Rechtsstand 2025 · Veranlagungszeitraum 2025",
    verfasser: "RA/StB Ulrich Breier",
    quelle: "Steuerberaterprüfung 2011, Prüfungsaufgabe aus dem Gebiet der Körperschaftsteuer · Körperschaftsteuer, Umwandlungssteuerrecht und Gewerbesteuer · Steuerberaterprüfungen 2011–2015, Februar 2026",
    normen: [
      "§ 1 Abs. 1 KStG", "§ 8 Abs. 1, Abs. 3 Sätze 1 und 2 KStG", "§ 8b Abs. 1 Satz 1, Abs. 4 Satz 1, Abs. 5 Satz 1 KStG",
      "§ 9 Abs. 1 Satz 1 Nr. 2, Abs. 2 Satz 1 KStG", "§ 10 Nr. 2 KStG",
      "§ 14 Abs. 1 Sätze 1 und 2, Abs. 1 Satz 1 Nr. 4, Abs. 4 Sätze 1, 3 und 6 KStG",
      "§ 15 Satz 1 Nr. 2 Sätze 1 und 2 KStG", "§ 16 Satz 2 KStG", "§ 17 Sätze 1 und 2 Nr. 1 KStG",
      "§ 19 Abs. 5 KStG", "§ 23 Abs. 1 KStG", "§ 27 Abs. 1 Sätze 1 und 3, Abs. 3 KStG", "§ 31 Abs. 1 Satz 1 KStG",
      "§ 4 Abs. 5 Satz 1 Nr. 9, Abs. 5b, Abs. 6 EStG", "§ 6 Abs. 6 Satz 1 EStG", "§ 15 Abs. 4 Satz 6 EStG", "§ 36 Abs. 2 Nr. 2 EStG",
      "§ 301 AktG", "§ 19 UStG",
      "R 8.5 Abs. 1 Satz 1, R 9 Abs. 5 Satz 1, R 14.5 Abs. 4 und Abs. 5, R 14.6 Abs. 1, R 14.8 Abs. 2, R 16 Abs. 2 Satz 3 KStR",
      "H 8.5 KStH", "H 15.8 Abs. 1 EStH",
      "BMF vom 29.09.2023 zum Wechsel zur Einlagelösung nach § 14 Abs. 4 KStG, BStBl I S. 889, Rz. 7",
    ],
    themen: ["Originalklausur", "Verdeckte Gewinnausschüttung", "Steuerliches Einlagekonto", "Organschaft", "Bruttomethode § 15 KStG", "Ausgleichszahlung § 16 KStG", "Minderabführung", "§ 8b KStG", "Atypisch stille Gesellschaft"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2011 · Prüfungsaufgabe aus dem Gebiet der Körperschaftsteuer · Rechtsstand 2025 · Bearbeitungszeit 2 Stunden" },
      { text: "Hilfsmittel: KStG, EStG, UStG, BewG, HGB, KStR, KStH, EStR, EStH. Der für die Lösung der Prüfungsaufgaben maßgebliche Rechtsstand ergibt sich aus dem jeweiligen Aufgabentext. Die Klausur ist überarbeitet und fortgeschrieben auf den Rechtsstand zum 31.12.2025. Sofern bei der Lösung einzelner Aufgaben ein anderer Rechtsstand als der aktuelle oder der des Vorjahres maßgeblich ist, sind die entsprechenden Rechtsvorschriften dem Aufgabentext als Anlage beigefügt. Vor der Bearbeitung sind Sachverhalt und Aufgaben vollständig zu lesen." },
      { typ: "titel", text: "A. Allgemeines" },
      { text: "Die A-GmbH mit Sitz in Münster/Westfalen wurde zum 01.01.2005 mit einem eingezahlten Stammkapital von 50.000 € gegründet. Gegenstand des Unternehmens ist der Handel mit Personenkraftwagen aller Art und entsprechendem Zubehör." },
      { text: "An der A-GmbH sind A mit 30 % stimmberechtigten Anteilen und Y mit 70 % stimmberechtigten Anteilen beteiligt. Sowohl A als auch Y sind zu Geschäftsführern der A-GmbH bestellt." },
      { typ: "tabelle", spalten: ["Handelsbilanz der A-GmbH zum 31.12.2025 – Aktiva", "Betrag", "Passiva", "Betrag"], zeilen: [
        ["div. Aktiva", "1.066.715 €", "Gezeichnetes Kapital", "100.000 €"],
        ["Forderung gg. B-GmbH", "75.285 €", "Jahresüberschuss", "492.000 €"],
        ["", "", "Kapitalrücklage", "10.000 €"],
        ["", "", "Sonstige Passiva", "540.000 €"],
        ["Summe", "1.142.000 €", "Summe", "1.142.000 €"],
      ] },
      { typ: "tabelle", spalten: ["Gewinn- und Verlustrechnung – Aufwendungen", "Betrag", "Erträge", "Betrag"], zeilen: [
        ["Aufwendungen", "1.000.000 €", "Erlöse", "1.492.000 €"],
        ["Jahresüberschuss", "492.000 €", "", ""],
        ["Summe", "1.492.000 €", "Summe", "1.492.000 €"],
      ] },
      { text: "Das Wirtschaftsjahr der A-GmbH und aller Tochtergesellschaften ist identisch mit dem Kalenderjahr. Der Bestand des steuerlichen Einlagekontos i. S. d. § 27 KStG wurde zum 31.12.2024 mit 30.000 € festgestellt. Der auf den 31.12.2024 ermittelte ausschüttbare Gewinn i. S. d. § 27 KStG beträgt 0 €." },
      { typ: "titel", text: "B. Einzelsachverhalte – 1. Steueraufwendungen und sonstige betriebliche Erträge" },
      { text: "Folgende Beträge buchte die A-GmbH im Wirtschaftsjahr 2025 in der Handelsbilanz als Aufwand: Geleistete Körperschaftsteuervorauszahlungen 30.000 €; Zuführung zur Bildung der Körperschaftsteuerrückstellung 2025 7.000 €; Zuführung zur Bildung der Gewerbesteuerrückstellung 2025 5.000 €." },
      { typ: "titel", text: "2. Kapitalerhöhung" },
      { text: "Am 15.06.2025 beschloss die Gesellschafterversammlung einstimmig eine Erhöhung des Stammkapitals von 50.000 € auf 100.000 € durch eine von Y zu erbringende Sacheinlage in Gestalt eines unbebauten Grundstücks, das Y am 15.06.2019 für 40.000 € zzgl. 2.000 € Nebenkosten (einschl. Grunderwerbsteuer) für private Zwecke erworben hatte. Der notariell beurkundete Beschluss über die Erhöhung des Stammkapitals enthält folgende Regelung:" },
      { text: "„Der Wert des von Y einzubringenden Grundstücks beträgt 90.000 €. Nach Abzug der mit übernommenen persönlichen Verbindlichkeiten i. H. v. 30.000 € wird der Einbringungswert auf 60.000 € festgesetzt. Hiervon wird ein Betrag von 50.000 € auf die zu übernehmende Stammeinlage angerechnet. Im Übrigen erfolgt eine Zuweisung zur Kapitalrücklage mit der Maßgabe, dass Auflösungen eines Gesellschafterbeschlusses bedürfen. Die Nebenkosten der Übertragung des Grundstücks trägt die A-GmbH.“" },
      { text: "Der Bemessung des Grundstückwertes liegt ein von der A-GmbH vorgelegtes und nicht zu beanstandendes Verkehrswertgutachten zugrunde. Y übernahm die zu leistende Stammeinlage in einer notariell beurkundeten Erklärung vom 16.06.2025. Mit notariell beurkundetem Kauf- und Auflassungsvertrag vom 17.06.2025 übertrug Y das Grundstück auf die A-GmbH. Besitz, Nutzungen und Lasten gehen laut Vertrag mit Ablauf des 17.06.2025 auf die A-GmbH über. Die Eintragung in das Grundbuch erfolgte am 03.11.2025. Die Kosten der Beurkundung und der Eintragung in das Grundbuch hat vereinbarungsgemäß die A-GmbH getragen. Die Eintragung der Kapitalerhöhung in das Handelsregister erfolgte am 01.09.2025." },
      { typ: "tabelle", spalten: ["Kosten anlässlich der Kapitalerhöhung und ihrer Durchführung", "Betrag"], zeilen: [
        ["Für die notarielle Beurkundung der Abänderung des Gesellschaftsvertrages", "264 €"],
        ["Für die notarielle Beurkundung der Übernahmeerklärung des Y", "285 €"],
        ["Für die notarielle Beurkundung des Kauf- und Auflassungsvertrags", "198 €"],
        ["Grunderwerbsteuer", "700 €"],
        ["Für die Eintragung der A-GmbH in das Grundbuch", "132 €"],
        ["Für die notarielle Beglaubigung der Anmeldung zum Handelsregister", "66 €"],
        ["Für die Eintragung in das Handelsregister und die öffentliche Bekanntmachung", "141 €"],
      ] },
      { text: "Umsatzsteuer fiel nicht an, weil der beauftragte Notar in 2025 unter die Kleinunternehmerregelung des § 19 UStG fiel. Der gesamte Vorgang wurde wie folgt zutreffend gebucht (zusammengefasst): Grund und Boden 91.030 € und sonstiger betrieblicher Aufwand 756 € an gezeichnetes Kapital 50.0000 € [so in der Quelle], Kapitalrücklage 10.000 €, übernommene Verbindlichkeiten 30.000 €, Verbindlichkeiten aus Nebenkosten 1.030 € und sonstige Verbindlichkeiten 756 €." },
      { text: "Der gebuchte sonstige betriebliche Aufwand setzt sich aus den Positionen Beurkundung der Abänderung des Gesellschaftsvertrages (264 €), notarielle Beurkundung der Übernahmeerklärung des Y (285 €), notarielle Beurkundung der Anmeldung zum Handelsregister (66 €) sowie Eintragung in das Handelsregister und öffentliche Bekanntmachung (141 €) zusammen. Die Bezahlung der Verbindlichkeiten erfolgte im Wirtschaftsjahr 2025." },
      { typ: "titel", text: "3. Organschaft" },
      { text: "a. Historie/Ausschüttung des Bilanzgewinns 2024 – Die A-GmbH ist seit Jahren zu 90 % an der B-GmbH in Dortmund beteiligt, die ebenfalls mit Personenkraftwagen aller Art handelt. Zwischen der A-GmbH und der B-GmbH liegen aufgrund eines in 2025 abgeschlossenen und im Handelsregister eingetragenen Gewinnabführungsvertrages für 2025 erstmals die Voraussetzungen einer körperschaftsteuerlichen Organschaft vor. Weiterer Gesellschafter der B-GmbH ist die C-GmbH aus Stuttgart, die nach den nicht zu beanstandenden Vereinbarungen von der A-GmbH am 30.12. eines Jahres für entgangene Dividenden eine jährliche Ausgleichszahlung i. H. v. 17.000 € erhält." },
      { text: "In der Bilanz der B-GmbH auf den 31.12.2024 war ein Bilanzgewinn in Höhe von 400.000 € ausgewiesen. Anfang November 2025 beschloss die Gesellschafterversammlung der B-GmbH die Vollausschüttung. Die Auszahlung erfolgte Ende November 2025 unter Einbehaltung von Kapitalertragsteuer i. H. v. insgesamt 100.000 € und unter Einbehaltung des Solidaritätszuschlags i. H. v. insgesamt 5.500 € und wurde von den Beteiligten als Aufwand gebucht. Ordnungsgemäße Steuerbescheinigungen liegen vor." },
      { typ: "tabelle", spalten: ["b. Handelsbilanz der B-GmbH zum 31.12.2025 – Aktiva", "Betrag", "Passiva", "Betrag"], zeilen: [
        ["Anlagevermögen", "173.450 €", "Gezeichnetes Kapital", "100.000 €"],
        ["Umlaufvermögen", "35.000 €", "Gewinnrücklage", "30.000 €"],
        ["", "", "KSt-Rückstellung", "3.000 €"],
        ["", "", "SolZ-Rückstellung", "165 €"],
        ["", "", "Gewinnabführungsverbindlichkeit", "75.285 €"],
        ["Summe", "208.450 €", "Summe", "208.450 €"],
      ] },
      { text: "c. Ausgleichszahlung – Die A-GmbH leistete die vereinbarte Ausgleichszahlung an die C-GmbH unter Abzug von Kapitalertragsteuer und Solidaritätszuschlag am 30.12.2025. Der Vorgang wurde ordnungsgemäß als Aufwand gebucht." },
      { text: "d. Gewinnrücklage – Die B-GmbH hat von ihrem vorläufigen Jahresüberschuss 2025 einen Betrag i. H. v. 30.000 € in die Gewinnrücklage eingestellt. Der Betrag soll in den Folgejahren für eine von der Geschäftsleitung bereits fest eingeplante und von der Gesellschafterversammlung genehmigte Errichtung mehrerer Filialen zur Verfügung stehen. Der übrige Teil des Jahresüberschuss ist in der Handelsbilanz als Gewinnabführungsverbindlichkeit ausgewiesen." },
      { text: "e. Dividendenerträge – Die B-GmbH ist seit Jahren mit 20 % an der T-GmbH beteiligt. Aus dieser Beteiligung erzielte sie in 2025 eine Bruttodividende in Höhe von 40.000 €, deren Vereinnahmung nach Abzug von Kapitalertragsteuer i. H. v. 10.000 € und nach Abzug des Solidaritätszuschlags i. H. v. 550 € als Aufwand gebucht wurde." },
      { text: "f. Spenden der B-GmbH – Die B-GmbH spendete in 2025 einen Betrag in Höhe von 3.000 € an die X-Partei (politische Partei i. S. d. § 2 des Parteiengesetzes) und einen Betrag in Höhe von 30.000 € an den örtlichen Tierschutzverein e. V. (Körperschaftsteuerfreistellungsbescheid liegt vor). Ordnungsgemäße Zuwendungsbestätigungen liegen – soweit erforderlich – ebenfalls vor. Beide Spenden wurden als Aufwand gebucht. Die Umsätze der B-GmbH in 2025 betrugen 2.000.000 €, die aufgewendeten Löhne und Gehälter 20.000 €." },
      { typ: "titel", text: "4. Beteiligungsverlust" },
      { text: "Die A-GmbH ist seit dem 01.01.2025 als Teilhaberin mit einer (bereits geleisteten) Einlage in Höhe von 100.000 € am Handelsgewerbe der Z-GmbH atypisch still beteiligt. Das Wirtschaftsjahr der Z-GmbH ist identisch mit dem Kalenderjahr. Der auf die A-GmbH entfallende Verlustanteil des Wirtschaftsjahres 2025 beträgt 20.000 €, wurde von dieser vereinbarungsgemäß per Banküberweisung ausgeglichen und als „Aufwendungen aus Verlustübernahmen“ erfolgswirksam gebucht." },
    ],
    aufgabe: [
      { typ: "titel", text: "C. Aufgabe" },
      { text: "1. Ermitteln Sie unter Berücksichtigung der allgemeinen Angaben und der Einzelsachverhalte in den Textziffern 1 bis 4 das zu versteuernde Einkommen und die verbleibende Körperschaftsteuer der nach § 1 Abs. 1 KStG unbeschränkt steuerpflichtigen und buchführungspflichtigen A-GmbH für den Veranlagungszeitraum 2025. Zu ermitteln ist das für die Steuerpflichtige jeweils günstigste Ergebnis. Ggf. erforderliche Anträge gelten als dargestellt. Auf Umsatzsteuerfragen ist insoweit einzugehen, wie dies für die Ermittlung der ertragsteuerlichen Bemessungsgrundlage erforderlich ist. Begründen Sie Ihre Entscheidung ausführlich unter Angabe der maßgeblichen Rechtsgrundlagen." },
      { text: "2. Ermitteln Sie den Bestand des steuerlichen Einlagekontos i. S. d. § 27 KStG zum 31.12.2025; ggf. erforderliche Steuerbescheinigungen sind an Anteilseigner in zutreffender Höhe ausgegeben worden." },
    ],
    loesung: [
      { typ: "titel", text: "Lösungshinweis zur Steuerberaterklausur 2011 · Körperschaftsteuer · 35 Punkte" },
      { text: "Hinweis der Quelle: Die Punktvergabe in den einzelnen Textziffern orientiert sich am amtlichen Lösungshinweis für die Steuerberaterklausur 2011. Die Klausur ist überarbeitet und fortgeschrieben auf den Rechtsstand zum 31.12.2025." },
      { typ: "titel", text: "Zu 1. Steueraufwendungen" },
      { text: "Die über Aufwand gebuchten Körperschaftsteuervorauszahlungen und die als Aufwand gebuchte Körperschaftsteuerrückstellung sind dem Jahresüberschuss gem. § 10 Nr. 2 KStG zur Ermittlung des zu versteuernden Einkommens außerbilanziell hinzuzurechnen, insgesamt also 37.000 €. Die Zuführung zur Gewerbesteuerrückstellung 2025 i. H. v. 5.000 € ist dem Jahresüberschuss gem. § 8 Abs. 1 KStG i. V. m. § 4 Abs. 5b EStG außerbilanziell hinzuzurechnen.", punkte: 2 },
      { typ: "titel", text: "Zu 2. Kapitalerhöhung" },
      { text: "Bei der Übertragung des Grundstücks auf die A-GmbH im Wege der Sachkapitalerhöhung handelt es sich um eine offene Einlage. Da die offene Einlage – anders als die verdeckte Einlage – nach herrschender Meinung als Tauschvorgang anzusehen ist, hat die A-GmbH – wie geschehen – das Grundstück gem. § 6 Abs. 6 S. 1 EStG mit dem gemeinen Wert von 90.000 € anzusetzen; Anwendung des § 6 Abs. 6 Satz 1 EStG." },
      { typ: "tabelle", spalten: ["Zutreffend aktivierte Nebenkosten", "Betrag"], zeilen: [
        ["Kosten der notariellen Beurkundung (Kauf- und Auflassungsvertrag)", "198 €"],
        ["Grunderwerbsteuer", "700 €"],
        ["Kosten der Grundbucheintragung", "132 €"],
        ["Summe", "1.030 €"],
      ], punkte: 2 },
      { text: "Soweit ein Betrag von 10.000 € nicht im Nennkapital (Stammkapital) gegengebucht, sondern in der Kapitalrücklage ausgewiesen wurde, kommt es zu einem Zugang beim steuerlichen Einlagekonto gem. § 27 Abs. 1 KStG.", punkte: 1 },
      { text: "Die Übernahme der Kapitalerhöhungskosten durch die A-GmbH sind insoweit gesellschaftsrechtlich veranlasst, als von der A-GmbH die Kosten für die notarielle Beurkundung der Übernahmeerklärung des Y übernommen werden. Insoweit liegt eine verdeckte Gewinnausschüttung gem. § 8 Abs. 3 Satz 2 KStG vor. Eine verdeckte Gewinnausschüttung ist eine Vermögensminderung oder verhinderte Vermögensmehrung, die durch das Gesellschaftsverhältnis veranlasst ist, sich auf die Höhe des Unterschiedsbetrags i. S. d. § 4 Abs. 1 EStG auswirkt und nicht auf einem den gesellschaftsrechtlichen Vorschriften entsprechenden Gewinnverteilungsbeschluss beruht (R 8.5 Abs. 1 S. 1 KStR)." },
      { text: "Die übernommenen Beurkundungskosten führen zu einer Vermögensminderung von 285 €, die sich auch auf den Unterschiedsbetrag nach § 4 Abs. 1 EStG ausgewirkt. (der unvollständige Satz so in der Quelle)", punkte: 1 },
      { text: "Diese Vermögensminderung ist durch das Gesellschaftsverhältnis veranlasst. Eine Veranlassung durch das Gesellschaftsverhältnis liegt vor, wenn ein ordentlicher und gewissenhafter Geschäftsleiter die Vermögensminderung oder verhinderte Vermögensmehrung gegenüber einer Person, die nicht Gesellschafter ist, unter sonst gleichen Umständen nicht hingenommen hätte (H 8.5 Veranlassung durch das Gesellschaftsverhältnis/Allgemeines KStH).", punkte: 1 },
      { text: "Die Kapitalerhöhungskosten dienen der Kapitalausstattung der GmbH, um deren Einkunftserzielungsabsicht besser verfolgen zu können, und sind daher ausschließlich betrieblich veranlasst. Dagegen betrifft die Übernahme der durch die Kapitalerhöhung neu ausgegebenen Anteile die Ebene des Gesellschafters. Diese Kosten hätte ein ordentlicher und gewissenhafter Geschäftsleiter nicht übernommen.", punkte: 1 },
      { text: "Deshalb ist in Höhe von 285 € gem. § 8 Abs. 3 Satz 2 KStG eine außerbilanzielle Hinzurechnung i. H. v. 285 € vorzunehmen.", punkte: 1 },
      { text: "In Höhe von 285 € kommt es zudem zu einer Minderung des auf den 31.12.2024 festgestellten steuerlichen Einlagekontos gem. § 27 Abs. 1 Satz 3 KStG, da der auf dem 31.12.2024 ermittelte ausschüttbare Gewinn 0 € beträgt. Die insoweit erforderliche Steuerbescheinigung gem. § 27 Abs. 3 KStG liegt nach dem Sachverhalt vor.", punkte: 1 },
      { typ: "titel", text: "Zu 3.a. Beginn der Organschaft und Ausschüttung vororganschaftlicher Gewinne" },
      { text: "Das Einkommen der B-GmbH ist der A-GmbH gem. § 14 Abs. 1 Satz 1 und 2 KStG erstmals für das Kalenderjahr zuzurechnen, in dem das Wirtschaftsjahr der B-GmbH endet, in dem der Gewinnabführungsvertrag wirksam wird. Seit 2025 liegen die Voraussetzungen der körperschaftsteuerlichen Organschaft vor, da der Gewinnabführungsvertrag in 2025 abgeschlossen und durch Eintragung im Handelsregister auch zivilrechtlich wirksam geworden ist (s. § 14 Abs. 1 Satz 2 KStG). Da das Wirtschaftsjahr der B-GmbH am 31.12.2025 endet, ist das im Kalenderjahr 2025 von der B-GmbH erzielte Einkommen der A-GmbH gem. § 14 Abs. 1 S. 1, § 17 KStG zuzurechnen." },
      { text: "Unbeachtlich für die Organschaft ist die Ausschüttung des Bilanzgewinns 2024 während der Organschaft im November 2025. Gem. § 17 Satz 2 Nr. 1 KStG darf die Gewinnabführung den in § 301 AktG genannten Betrag und damit den Jahresüberschuss des Organschaftsjahres nicht übersteigen. Gewinne, die in vororganschaftlicher Zeit erzielt wurden, dürfen (in der Regel) nicht abführt werden, sondern müssen ausgeschüttet werden (R 14.5 Abs. 4 Satz 4 und 5 KStR). Diese Gewinnausschüttungen unterliegen den allgemeinen Regelungen für Gewinnausschüttungen.", punkte: 1 },
      { text: "Von der Gewinnausschüttung in 2025 entfallen auf die A-GmbH 90 % von 400.000 € = 360.000 €, die von dieser zutreffend als Beteiligungsertrag gebucht wurden. Von der einbehaltenen Kapitalertragsteuer entfallen 90 % von 100.000 € = 90.000 € und vom einbehaltenen Solidaritätszuschlag 90 % von 5.500 € = 4.950 € auf die A-GmbH, die diese laut Sachverhalt als Steueraufwand i. H. v. 94.950 € gebucht hat.", punkte: 1 },
      { text: "Hinsichtlich des gebuchten Steueraufwands ist gem. § 10 Nr. 2 KStG eine außerbilanzielle Hinzurechnung i. H. v. 94.950 € vorzunehmen.", punkte: 1 },
      { text: "Gem. § 8b Abs. 5 Satz 1 KStG ist außerbilanziell ein Betrag von 5 % × 360.000 € = 18.000 € hinzuzurechnen.", punkte: 1 },
      { typ: "titel", text: "Zu 3.b. Einkommen der B-GmbH" },
      { text: "Dem handelsrechtlichen Jahresüberschuss der B-GmbH i. H. v. 0 € ist der Betrag der Gewinnabführung (= Gewinnverwendung) gem. § 8 Abs. 3 Satz 1 KStG zur Ermittlung des Einkommens der B-GmbH i. H. v. 75.285 € außerbilanziell hinzuzurechnen (R 14.6 Abs. 1 Satz 1 KStR). Der Aufwand aus der Körperschaftsteuerrückstellung und der Rückstellung für den Solidaritätszuschlag von insgesamt 3.165 € ist gem. § 10 Nr. 2 KStG außerbilanziell hinzuzurechnen.", punkte: 2 },
      { typ: "titel", text: "Zu 3.c. Ausgleichszahlung" },
      { text: "Die von der A-GmbH geleistete Ausgleichszahlung i. H. v. 17.000 € ist bei dieser dem Jahresüberschuss gem. § 8 Abs. 1 KStG, § 4 Abs. 5 Satz 1 Nr. 9 EStG als nicht abziehbare Betriebsausgabe außerbilanziell hinzuzurechnen.", punkte: 1 },
      { typ: "titel", text: "Zu 3.d. Gewinnrücklage und Minderabführung" },
      { text: "Die Bildung der Rücklage ist aufgrund der geplanten Investitionen bei vernünftiger kaufmännischer Beurteilung wirtschaftlich begründet. Gem. § 14 Abs. 1 Satz 1 Nr. 4 KStG steht die Rücklage daher der Durchführung des Gewinnabführungsvertrages nicht entgegen (R 14.5 Abs. 5 Nr. 3 KStR).", punkte: 1 },
      { text: "Da die Einstellung in die Gewinnrücklage ertragsteuerlich eine Gewinnverwendung darstellt, ist die i. H. v. 30.000 € gebildete Rücklage dem Jahresüberschuss gem. § 8 Abs. 3 Satz 1 KStG außerbilanziell zur Ermittlung des zu versteuernden Einkommens der B-GmbH hinzuzurechnen.", punkte: 1 },
      { text: "Durch die Bildung der Rücklage kommt es i. S. d. § 14 Abs. 4 Satz 6 KStG zu einer sog. Minderabführung i. H. v. 30.000 € (siehe R 14.8 Abs. 2 KStR zur Rechtslage bis VZ 2022). Gem. § 14 Abs. 4 Satz 1 KStG sind Minderabführungen der Organgesellschaft, die ihre Ursache in organschaftlicher Zeit haben, als Einlage durch den Organträger in die Organgesellschaft zu behandeln. Gem. § 14 Abs. 4 Satz 3 KStG erhöht die Einlage den Buchwert der Beteiligung an der Organgesellschaft. Deshalb hat die A-GmbH gem. § 14 Abs. 4 Satz 3 KStG in ihrer Steuerbilanz den Buchwert der Anteile an der B-GmbH um 30.000 zu erhöhen." },
      { text: "Die Bildung des aktiven Ausgleichspostens erfolgt innerbilanziell erfolgswirksam, so dass der steuerliche Gewinn der A-GmbH um 30.000 € zu erhöhen ist. Diese steuerliche Gewinnerhöhung stellt für den Organträger einen einkommensneutralen Vorgang dar. Der Ertrag, der sich aus der buchtechnischen Erhöhung des Beteiligungsbuchwerts ergibt, ist außerbilanziell zu korrigieren (Rz. 7 des BMF-Schreibens vom 29.9.2023 zum Wechsel zur Einlagelösung nach § 14 Absatz 4 KStG i. d. F. des Gesetzes zur Modernisierung des Körperschaftsteuerrechts vom 25. Juni 2022, BStBl I, Seite 889). Außerbilanziell ist deshalb der Betrag von 30.000 € wieder abzuziehen.", punkte: 1 },
      { typ: "titel", text: "Zu 3.e. Dividendenerträge und Bruttomethode" },
      { text: "Die Vereinnahmung der von der T-GmbH geleisteten Dividende ist von der B-GmbH laut Sachverhalt korrekt gebucht worden, so dass sie i. H. v. 40.000 € einen Dividendenertrag und i. H. v. 10.550 € einen Steueraufwand gebucht hat. Gem. § 10 Nr. 2 KStG ist der Steueraufwand i. H. v. 10.550 € außerbilanziell hinzuzurechnen.", punkte: 1 },
      { text: "Entgegen den allgemeinen Grundsätzen unterbleibt bei einer Organgesellschaft der außerbilanzielle Abzug des Beteiligungsertrages (40.000 €) gem. § 8b Abs. 1 Satz 1 KStG und die außerbilanzielle Hinzurechnung der 5 % (= 2.000 €) gem. § 8b Abs. 5 Satz 1 KStG; dies ergibt sich aus § 15 Satz 1 Nr. 2 Satz 1 KStG (sog. Bruttomethode). Erst bei der Organträgerin (A-GmbH) sind gem. § 15 Satz 1 Nr. 2 Satz 2 KStG die Korrekturen gem. § 8b Abs. 1 S. 1 und Abs. 5 S. 1 KStG vorzunehmen, wenn die Organträgerin – wie hier die A-GmbH – eine Kapitalgesellschaft ist und die Voraussetzungen des § 8b Abs. 4 S. 1 KStG nicht vorliegen. Da die B-GmbH an der T-GmbH mit mindestens 10 % beteiligt ist, kommt hier der Ausschluss der Steuerbefreiung des § 8b Abs. 1 S. 1 KStG über § 8b Abs. 4 S. 1 KStG nicht in Betracht.", punkte: 1 },
      { text: "Bei der Berechnung der verbleibenden Körperschaftsteuer der A-GmbH ist die im Steueraufwand der B-GmbH i. H. v. 10.000 € enthaltene Kapitalertragsteuer gem. § 19 Abs. 5 KStG anzurechnen.", punkte: 1 },
      { typ: "titel", text: "Zu 3.f. Spenden und Einkommen der B-GmbH" },
      { text: "Spenden an politische Parteien sind bei Körperschaften gem. § 4 Abs. 6 EStG nicht abziehbare Betriebsausgaben. Die Spende an die X-Partei i. H. v. 3.000 € ist deshalb außerbilanziell hinzuzurechnen.", punkte: 1 },
      { text: "Bei der Ermittlung des dem Organträgers zuzurechnenden Einkommens der Organgesellschaft ist § 9 Abs. 1 Satz 1 Nr. 2 KStG bei der Organgesellschaft eigenständig anzuwenden (R 9 Abs. 5 Satz 1 KStR). Deshalb ist die Barspende an den Tierschutzverein i. H. v. 30.000 € bei der Ermittlung des Einkommens der B-GmbH gem. § 9 Abs. 1 Satz 1 Nr. 2 KStG abziehbar in Höhe von bis zu 20 Prozent des Einkommens vor Abzug der Spende und eines etwaigen Verlustabzugs (§ 9 Abs. 2 Satz 1 KStG) oder bis zu 4 Promille der Summe der gesamten Umsätze und der im Kalenderjahr aufgewendeten Löhne und Gehälter.", punkte: 1 },
      { typ: "tabelle", spalten: ["Maßgebliches Einkommen der B-GmbH vor Spendenabzug (§ 9 Abs. 2 Satz 1 KStG)", "Betrag"], zeilen: [
        ["Jahresüberschuss", "0 €"],
        ["Gewinnabführung, lt. b)", "+ 75.285 €"],
        ["Steuern, lit. b)", "+ 3.165 €"],
        ["Gewinnrücklage, lit. d)", "+ 30.000 €"],
        ["Steuern, lit. e)", "+ 10.550 €"],
        ["Parteispende", "+ 3.000 €"],
        ["Geldspende", "+ 30.000 €"],
        ["= Einkommen vor Spendenabzug", "152.000 €"],
      ], punkte: 1 },
      { text: "Die Barspende von 30.000 € ist also bei der B-GmbH in voller Höhe abziehbar (Höchstbetrag: 20 % von 152.000 € = 30.400).", punkte: 1 },
      { text: "Das Einkommen der B-GmbH vor Zurechnung bei der A-GmbH beträgt demnach 122.000 € (152.000 € ./. 30.000 € abziehbare Spende).", punkte: 1 },
      { text: "Von ihrem Einkommen hat die B-GmbH gem. § 16 Satz 2 KStG 20/17 von 17.000 €, d. h. 20.000 € als eigenes Einkommen zu versteuern (vgl. auch R 16 Abs. 2 Satz 3 Nr. 2 KStR). Hinsichtlich der Berechnung des der A-GmbH zuzurechnenden verbleibenden Teils des Einkommens der B-GmbH bestehen folgende Darstellungsmöglichkeiten:" },
      { text: "Im Rahmen der Zurechnung des Einkommens der B-GmbH zum zu versteuernden Einkommen der A-GmbH ist das eigene Einkommen der A-GmbH um die geleistete Ausgleichszahlung i. H. v. 17.000 € zu mindern (R 16 Abs. 2 Satz 3 Nr. 1 KStR).", punkte: 1 },
      { text: "Anschließend ist der A-GmbH das von der B-GmbH erwirtschaftete Einkommen – d. h. einschließlich der genannten 20.000 €, jedoch abzüglich der hierauf entfallenden Körperschaftsteuer i. H. v. 3.000 € – als von ihr zu versteuerndes Einkommen der B-GmbH zuzurechnen (R 16 Abs. 2 Satz 3 Nr. 3 KStR). Die Summe ergibt das verbleibende dem Organträger zuzurechnende Einkommen der Organgesellschaft.", punkte: 1 },
      { typ: "tabelle", spalten: ["Zusammenfassung der Zurechnung", "Betrag"], zeilen: [
        ["Korrektur des eigenen Einkommens der A-GmbH", "- 17.000 €"],
        ["Zurechnung des Einkommens der B-GmbH nach Abzug der Körperschaftsteuer auf die Ausgleichszahlung (122.000 € ./. 3.000 €)", "+ 119.000 €"],
        ["= verbleibendes der A-GmbH zuzurechnendes Einkommen", "102.000 €"],
      ], punkte: 1 },
      { typ: "titel", text: "Zu 4. Beteiligungsverlust" },
      { text: "Der als Aufwand gebuchte Beteiligungsverlust i. H. v. 20.000 € ist dem Jahresüberschuss der A-GmbH zur Ermittlung des Einkommens gem. § 15 Abs. 4 Satz 6 EStG außerbilanziell hinzuzurechnen. Denn es handelt sich um einen Verlustanteil aus einer atypisch stillen Gesellschaft an einer Kapitalgesellschaft, bei der die A-GmbH als Mitunternehmerin anzusehen ist (H 15.8 Abs. 1 Stiller Gesellschafter EStH).", punkte: 2 },
      { typ: "tabelle", spalten: ["Zusammenfassung der Ermittlung des zu versteuernden Einkommens der A-GmbH", "Betrag"], zeilen: [
        ["Jahresüberschuss", "492.000 €"],
        ["Tz. 1 Steueraufwendungen, § 10 Nr. 2 KStG", "+ 37.000 €"],
        ["Tz. 1 Gewerbesteuer, § 8 Abs. 1 KStG, § 4 Abs. 5b EStG", "+ 5.000 €"],
        ["Tz. 2 Kapitalerhöhung – vGA (§ 8 Abs. 3 Satz 2 KStG)", "+ 285 €"],
        ["Tz. 3 Gewinnabführung der B-GmbH – R 14.6 Abs. 1 Satz 2 KStR", "- 75.285 €"],
        ["Tz. 3.a Gewinnausschüttung – § 10 Nr. 2 KStG", "+ 94.950 €"],
        ["Tz. 3.a Gewinnausschüttung – § 8b Abs. 1 KStG", "- 360.000 €"],
        ["Tz. 3.a Gewinnausschüttung – § 8b Abs. 5 KStG", "+ 18.000 €"],
        ["Tz. 3.c Ausgleichszahlung, § 4 Abs. 5 Nr. 9 EStG", "+ 17.000 €"],
        ["Tz. 3.d Erhöhung Buchwert der Anteile B-GmbH, § 14 Abs. 4 KStG", "+ 30.000 €"],
        ["Tz. 3.d einkommensneutrale Bildung, außerbilanzieller Abzug", "- 30.000 €"],
        ["Tz. 3.a–g zuzurechnendes Einkommen der B-GmbH", "+ 102.000 €"],
        ["Tz. 3.e Dividendenertrag der B-GmbH – § 8b Abs. 1 KStG", "- 40.000 €"],
        ["Tz. 3.e Dividendenertrag der B-GmbH – § 8b Abs. 5 KStG", "+ 2.000 €"],
        ["Tz. 4 Beteiligungsverlust, § 15 Abs. 4 Satz 6 EStG", "+ 20.000 €"],
        ["Zu versteuerndes Einkommen 2025", "312.950 €"],
      ], punkte: 2 },
      { typ: "tabelle", spalten: ["Ermittlung der verbleibenden Körperschaftsteuer", "Betrag"], zeilen: [
        ["312.950 € × 15 % gem. § 23 Abs. 1 KStG (festzusetzende KSt)", "46.942 €"],
        ["abzüglich anrechenbarer Kapitalertragsteuer aus der Dividendenausschüttung der B-GmbH (Tz. 3.a), § 31 Abs. 1 Satz 1 KStG, § 36 Abs. 2 Nr. 2 EStG", "- 90.000 €"],
        ["abzüglich anrechenbarer Kapitalertragsteuer aus der Ausschüttung der T-GmbH an die B-GmbH (Tz. 3.e), § 19 Abs. 5 KStG", "- 10.000 €"],
        ["= verbleibende Körperschaftsteuer", "- 53.058 €"],
      ] },
      { typ: "tabelle", spalten: ["Bestand des steuerlichen Einlagekontos i. S. d. § 27 KStG zum 31.12.2025", "Betrag"], zeilen: [
        ["Bestand zum 21.12.2024 (Verschreiber der Quelle; gemeint ist der 31.12.2024)", "30.000 €"],
        ["Zugang durch offene Einlage (Tz. 2)", "+ 10.000 €"],
        ["Abgang durch vGA (Tz. 2)", "- 285 €"],
        ["= Bestand zum 31.12.2023 (Verschreiber der Quelle; gemeint ist der 31.12.2025)", "39.715 €"],
      ] },
      { typ: "titel", text: "Redaktionelle Hinweise" },
      { text: "Redaktioneller Hinweis zum didaktischen Kern – 285 € entscheiden über zwei Rechtsfolgen: Von den sieben Kostenpositionen der Kapitalerhöhung sind drei zu **aktivieren** (Beurkundung des Kaufvertrags, Grunderwerbsteuer, Grundbucheintragung – zusammen 1.030 €), drei sind **laufender Aufwand** (Abänderung des Gesellschaftsvertrages, Anmeldung und Eintragung ins Handelsregister – zusammen 471 €), und **eine einzige** ist eine verdeckte Gewinnausschüttung: die Beurkundung der Übernahmeerklärung des Y über 285 €. Der Grund ist die Zuordnung der Sphären – die Kapitalerhöhung dient der Gesellschaft, die Übernahme der neuen Anteile betrifft den Gesellschafter. Wer hier pauschal alle Kosten als Betriebsausgaben behandelt, verliert fünf Randpunkte." },
      { text: "Redaktioneller Hinweis zum steuerlichen Einlagekonto – eine Kapitalerhöhung, zwei gegenläufige Bewegungen: Derselbe Vorgang erhöht das Einlagekonto um 10.000 € (der nicht ins Nennkapital gebuchte Teil der Sacheinlage) und mindert es um 285 € (die vGA). Die Minderung greift nur, weil der ausschüttbare Gewinn zum 31.12.2024 **0 €** beträgt – sonst wäre die vGA vorrangig aus diesem zu speisen (§ 27 Abs. 1 Satz 3 KStG). Diese Angabe im Sachverhaltsteil A ist also keine Nebenbemerkung, sondern trägt die zweite Aufgabe." },
      { text: "Redaktioneller Hinweis zur Bruttomethode: Die Dividende, die die **B-GmbH** von der T-GmbH bezieht, wird bei ihr **nicht** nach § 8b KStG korrigiert – § 15 Satz 1 Nr. 2 Satz 1 KStG schaltet die Vorschrift bei der Organgesellschaft ab. Erst beim Organträger wird sie angewandt. Deshalb tauchen in der Zusammenfassung des zvE der A-GmbH die - 40.000 € und die + 2.000 € auf, obwohl die A-GmbH die Dividende nie vereinnahmt hat. Die 10-Prozent-Grenze des § 8b Abs. 4 KStG ist dabei auf der Ebene der B-GmbH zu prüfen (Beteiligung 20 %) – ein Detail, das die Lösung eigens festhält." },
      { text: "Redaktioneller Hinweis zur Ausgleichszahlung – sie wirkt zweimal: Bei der A-GmbH ist sie zunächst nach § 4 Abs. 5 Satz 1 Nr. 9 EStG als nicht abziehbare Betriebsausgabe **hinzuzurechnen** (+ 17.000 €) und im Rahmen der Zurechnung des Organeinkommens wieder **abzuziehen** (- 17.000 €, R 16 Abs. 2 Satz 3 Nr. 1 KStR). Bei der B-GmbH führt sie dazu, dass diese 20/17 der Zahlung, also 20.000 €, als **eigenes** Einkommen zu versteuern hat; die darauf entfallende Körperschaftsteuer von 3.000 € mindert den zuzurechnenden Betrag. In der Zusammenfassung erscheinen deshalb + 17.000 € und ein zuzurechnendes Einkommen von 102.000 € statt 122.000 €." },
      { text: "Redaktioneller Hinweis zur Minderabführung nach neuem Recht: Die Einstellung in die Gewinnrücklage ist zulässig (§ 14 Abs. 1 Satz 1 Nr. 4 KStG), führt aber zu einer Minderabführung. Nach der seit 2022 geltenden **Einlagelösung** erhöht sie den Buchwert der Beteiligung (§ 14 Abs. 4 Satz 3 KStG) – innerbilanziell erfolgswirksam, außerbilanziell wieder zu neutralisieren. In der Zusammenfassung stehen deshalb + 30.000 € und - 30.000 € unmittelbar untereinander. Die Quelle verweist ausdrücklich auf R 14.8 Abs. 2 KStR „zur Rechtslage bis VZ 2022“ und auf Rz. 7 des BMF-Schreibens vom 29.09.2023 – der Fall zeigt also den Wechsel der Systematik." },
      { text: "Redaktioneller Hinweis zum Spendenhöchstbetrag – knapp, aber ausreichend: Die Barspende von 30.000 € ist voll abziehbar, weil der Höchstbetrag 20 % von 152.000 € = **30.400 €** beträgt. Der Abstand ist 400 €. Entscheidend ist dabei, dass die **Parteispende** von 3.000 € und die Geldspende selbst zuvor hinzugerechnet werden – ohne diese Hinzurechnungen läge das maßgebliche Einkommen bei 119.000 € und der Höchstbetrag bei 23.800 €, die Spende wäre dann nur teilweise abziehbar. Der alternative Höchstbetrag von 4 Promille der Umsätze und Löhne (4 ‰ von 2.020.000 € = 8.080 €) ist deutlich ungünstiger und bleibt außer Betracht." },
      { text: "Redaktioneller Hinweis zum Beteiligungsverlust: Der Verlust von 20.000 € aus der atypisch stillen Beteiligung an der Z-GmbH ist nach § 15 Abs. 4 Satz 6 EStG hinzuzurechnen. Die Vorschrift zielt genau auf diese Konstellation – eine Kapitalgesellschaft als **stille Mitunternehmerin** an einer anderen Kapitalgesellschaft; der Verlust ist nicht ausgleichsfähig, sondern nur mit künftigen Gewinnen aus derselben Beteiligung verrechenbar." },
      { text: "Redaktioneller Hinweis zur Rechenkontrolle: Alle Beträge sind unabhängig nachgerechnet und gehen auf. Nebenkosten 198 + 700 + 132 = 1.030 €; Aufwand 264 + 285 + 66 + 141 = 756 €; Grund und Boden 90.000 + 1.030 = 91.030 €. Organschaft: 90 % von 400.000 = 360.000 €; 90 % von 100.000 = 90.000 € und 90 % von 5.500 = 4.950 €, zusammen 94.950 €; 5 % von 360.000 = 18.000 €. B-GmbH: 0 + 75.285 + 3.165 + 30.000 + 10.550 + 3.000 + 30.000 = 152.000 €; 20 % davon = 30.400 €; 152.000 ./. 30.000 = 122.000 €; 20/17 × 17.000 = 20.000 €, darauf 15 % = 3.000 €; 122.000 ./. 3.000 ./. 17.000 = 102.000 €. zvE: 492.000 + 37.000 + 5.000 + 285 ./. 75.285 + 94.950 ./. 360.000 + 18.000 + 17.000 + 30.000 ./. 30.000 + 102.000 ./. 40.000 + 2.000 + 20.000 = 312.950 €; × 15 % = 46.942,50 → 46.942 €; ./. 90.000 ./. 10.000 = - 53.058 €. Einlagekonto: 30.000 + 10.000 ./. 285 = 39.715 €." },
      { text: "**Redaktioneller Hinweis zur Punktvergabe – eigene Feststellung:** Der Kopf des Lösungshinweises nennt **35 Punkte**. Zählt man die am Rand der einzelnen Absätze vergebenen Punkte aus, ergeben sich **36**. Im Datensatz sind 35 Punkte vergeben – dem Kopf der Quelle folgend; die Differenz von einem Randpunkt ist hier kenntlich gemacht statt stillschweigend geglättet." },
      { text: "Redaktioneller Hinweis zu Verschreibern der Quelle – wortlautgetreu übernommen und gekennzeichnet: „gez. Kapital 50.0000 €“ mit einer Null zu viel; der unvollständige Satz „…, die sich auch auf den Unterschiedsbetrag nach § 4 Abs. 1 EStG ausgewirkt“; „dürfen (in der Regel) nicht abführt werden“; „Bestand zum 21.12.2024“ statt 31.12.2024 und „Bestand zum 31.12.2023“ statt 31.12.2025 in der Ermittlung des Einlagekontos; ferner „Rechtsand 2025“ auf dem Deckblatt der Datei." },
    ],
  },
];

export default kstOriginalklausuren;
