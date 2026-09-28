/* Schemata und Übungsfälle Internationales Steuerrecht (K2), Markus Nöthen.

   Wortlautgetreue Übernahme der Blätter aus dem IStR-Ordner des Lehrgangsarchivs:
   das zweiteilige Prüfungsschema (Internationales Steuerrecht und DBA), zwei
   Übungsfälle und die zweiteilige Fallsammlung DBA.

   WICHTIG: Die Quellen enthalten KEINE Lösungen. Die Übungsfälle und die
   Fallsammlung enden jeweils mit der Aufgabenstellung. Es wird hier bewusst
   keine Lösung erfunden; stattdessen verweist jedes Kapitel auf die Stellen im
   Campus, an denen dieselbe Rechtsfrage vollständig durchgeprüft ist – die
   Einheiten 1 bis 4, die Fallsammlung, die Hausaufgaben und die Originalfälle.

   Der Übungsfall Wegzug liegt im Drive-Ordner zweimal (einmal als
   „IStR-Uebungsfall (Noethen) (1).pdf“, einmal als „Uebungsfall laufender
   Unterricht IStR.pdf“); beide Fassungen sind wortgleich und stehen hier
   deshalb einmal.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen. */

export const istrNoethenQuelle = {
  reihe: "Internationales Steuerrecht · Schemata und Übungsfälle · Markus Nöthen",
  stand: "Veranlagungszeitraum 2025",
  verfasser: "Markus Nöthen",
  didaktik: [
    "Das Schema auf dem ersten Blatt ist die kürzeste brauchbare Landkarte des internationalen Steuerrechts: Es fragt zuerst nach § 1 Abs. 1 S. 1 EStG, dann – falls der nicht greift – nach § 1 Abs. 3 EStG, dann nach dem Wegzugsfall und zuletzt nach § 1 Abs. 4 EStG. Jede Station verweist auf die Folgefragen, die dort zu stellen sind, und mündet am Ende immer in dieselbe Frage nach dem DBA.",
    "Die Merkhilfen der Quelle sind es wert, festgehalten zu werden. Zum DBA-Aufbau: Anwendbarkeit, Ansässigkeit, Verteilung, Vermeidung. Zur Verteilungsnorm der Art. 6 ff.: das „Meine Oma Prinzip“. Und zur beschränkten Steuerpflicht die Frage, die das ganze Erhebungsverfahren aufschließt: „Wie kommt der Staat an die Kohle?“ – Steuerabzug mit Abgeltungswirkung nach § 50 Abs. 2 S. 1 EStG oder, falls kein Abzug greift, Veranlagung ohne Grundfreibetrag, Sonderausgaben und außergewöhnliche Belastungen.",
    "Die vier Fälle decken genau die vier Konstellationen ab, die in der Klausur vorkommen: unbeschränkte Steuerpflicht mit DBA, beschränkte Steuerpflicht mit DBA, Wegzug ohne DBA und beschränkte Körperschaftsteuerpflicht. Wer sie in dieser Reihenfolge durcharbeitet, hat das Prüfungsschema einmal vollständig angewandt.",
  ],
};

const VERFASSER = "Markus Nöthen";
const RECHTSSTAND = "Veranlagungszeitraum 2025";
const OHNE_LOESUNG = "Die Quelle endet mit der Aufgabenstellung und enthält keine Lösung. Es wird hier bewusst keine erfunden.";

export const istrNoethen = [
  {
    id: "istr-no-01",
    kapitel: "1",
    gruppe: "Schemata",
    title: "Schema Internationales Steuerrecht und Schema DBA",
    thema: "Die Landkarte in vier Stationen – § 1 Abs. 1 S. 1, § 1 Abs. 3, Wegzug, § 1 Abs. 4 EStG – und das vierstufige DBA-Schema mit Anwendbarkeit, Ansässigkeit, Verteilung und Vermeidung",
    rechtsstand: RECHTSSTAND,
    quelle: "Schema Internationales Steuerrecht (Nöthen)",
    verfasser: VERFASSER,
    normen: [
      "§ 1 Abs. 1 Satz 1, Abs. 3, Abs. 4 EStG", "§ 1a EStG", "§ 2 Abs. 7 Satz 3 EStG",
      "§ 2a EStG", "§ 25 Abs. 1, Abs. 3 EStG", "§ 32b Abs. 1 Satz 1 Nr. 2 und Nr. 3, Satz 2 EStG",
      "§ 32d Abs. 5 EStG", "§ 34c EStG", "§§ 38 ff., §§ 43 ff., § 49, § 50 Abs. 1 Satz 2 und 4, Abs. 2 Satz 1 und 2, § 50a EStG",
      "§§ 2, 6, 7 AStG", "§ 19 Abs. 3 InvStG",
      "Art. 1, Art. 2 Abs. 1, Art. 4 Abs. 1, Art. 6 ff., Art. 22 bis 24 OECD-MA",
    ],
    themen: ["Prüfungsschema", "Unbeschränkte Steuerpflicht", "Fiktive unbeschränkte Steuerpflicht", "Wegzug", "Beschränkte Steuerpflicht", "Steuerabzug", "Abgeltungswirkung", "DBA-Aufbau", "Anrechnungsmethode", "Freistellungsmethode"],
    bloecke: [
      { typ: "titel", text: "Schema Internationales Steuerrecht" },
      { text: "1. § 1 Abs. 1 S. 1 EStG? – DBA (AAVV) – § 34c EStG / § 32d Abs. 5 EStG falls kein DBA – § 7 AStG – § 2a EStG – § 1a EStG" },
      { text: "Falls kein § 1 Abs. 1 S. 1 EStG: 2. § 1 Abs. 3 EStG? Antrag auf unb. Stpfl. mit inl. Einkünften nach § 49 EStG, damit Grundfreibetrag, Sonderausgaben und agB berücksichtigt werden, denn diese werden bei § 1 Abs. 4 EStG nicht berücksichtigt (§ 50 Abs. 1 S. 2, 4 EStG) ⇨ Schema § 1 Abs. 3 EStG siehe § 1 Abs. 4 EStG" },
      { text: "Falls kein § 1 Abs. 3 EStG: 3. Bei Wegzug (§§ 2 Abs. 7 S. 3, 32b Abs. 1 S. 1 Nr. 2 EStG, §§ 2, 6 AStG, § 19 Abs. 3 InvStG)" },
      { text: "4. § 1 Abs. 4 EStG? a) 1 der 7 b) Inländische Einkünfte § 49 EStG c) Wie kommt der Staat an die Kohle? o Steuerabzug: § 38 ff. EStG, § 43 ff. EStG, § 50a EStG ⇨ § 50 Abs. 2 S. 1 EStG Steuerabzug hat Abgeltungswirkung, beachte § 50 Abs. 2 S. 2 EStG! o Falls kein Steuerabzug: Abgabe Steuererklärung § 25 Abs. 1, Abs. 3 EStG ohne Grundfreibetrag, Sonderausgaben und agB § 50 Abs. 1 S. 2, 4 EStG d) DBA (AAV)" },
      { typ: "titel", text: "Schema DBA" },
      { text: "Anwendbarkeit: Art. 1 persönlich und Art. 2 Abs. 1 sachlich" },
      { text: "Ansässigkeit: Art. 4 Abs. 1" },
      { text: "Verteilung: Wer besteuert? Art. 6 ff. („Meine Oma Prinzip“)" },
      { text: "Vermeidung (nur durch Ansässigkeitsstaat): Art. 22 oder Art. 23 oder Art. 24 – Anrechnungsmethode (Grds. Dividenden/Zinsen/Lizenzen) – Freistellungsmethode mit PVB, § 32b Abs. 1 S. 1 Nr. 3 EStG, Rückausnahme kein PVB nach § 32b Abs. 1 S. 2 … EStG" },
      { text: "Eigene Feststellung zur Abkürzung: Das Schema kürzt den DBA-Aufbau an der ersten Station mit „AAVV“ ab, an der letzten mit „AAV“. Gemeint sind beide Male dieselben vier Schritte – Anwendbarkeit, Ansässigkeit, Verteilung, Vermeidung –, wie sie das Schema DBA auf der Folgeseite ausführt. Beide Schreibweisen stehen unverändert." },
    ],
  },
  {
    id: "istr-no-02",
    kapitel: "2",
    gruppe: "Übungsfälle",
    title: "Übungsfall Wegzug – Mohamed Nihad",
    thema: "Der Wechsel von der unbeschränkten in die beschränkte Steuerpflicht mitten im Jahr, bei einem Wegzug in einen Nicht-DBA-Staat – mit einem Auftritt im Dezember, einer 30-prozentigen GmbH-Beteiligung im Privatvermögen und ausländischen Einkünften aus fünf Monaten",
    rechtsstand: RECHTSSTAND,
    quelle: "Übungsfall Wegzug (Nöthen)",
    verfasser: VERFASSER,
    normen: [
      "§ 1 Abs. 1 Satz 1, Abs. 4 EStG", "§ 2 Abs. 7 Satz 3 EStG", "§ 4 Abs. 3 EStG",
      "§ 18 EStG", "§ 17 EStG", "§ 49 Abs. 1 Nr. 2 Buchst. d, Nr. 3 EStG",
      "§ 50a Abs. 1 Nr. 1 EStG", "§ 32b Abs. 1 Satz 1 Nr. 2 EStG", "§ 6 AStG", "§ 19 UStG",
    ],
    themen: ["Wegzug", "Wechsel der Steuerpflicht", "Nicht-DBA-Staat", "Künstlerische Tätigkeit", "Steuerabzug nach § 50a EStG", "Wegzugsbesteuerung", "Progressionsvorbehalt"],
    bloecke: [
      { typ: "titel", text: "Übungsfall Wegzug" },
      { text: "Mohamed Nihad (MN) ist irakischer Staatsangehöriger und wohnt seit seiner Geburt am 07.01.1981 in Koblenz. Er ist ledig und kinderlos. Er arbeitet bereits seit Jahren als freiberuflicher Musiker. Ende Juni 2025 beschließt MN Deutschland dauerhaft zu verlassen und zu seiner restlichen Familie nach Bagdad (Irak, kein DBA) zurückzukehren. Dafür kündigt er fristgerecht für Ende Juni seinen Mietvertrag für seine angemietete Wohnung in Koblenz." },
      { text: "Als Musiker erzielt er für das erste Halbjahr für verschiedene Auftritte 10.000 € an Einkünften, ermittelt nach § 4 Abs. 3 EStG. MN nimmt zutreffend die Regelung des § 19 UStG in Anspruch." },
      { text: "In der zweiten Jahreshälfte tritt MN am 16.12.2025 an einem Abend bei einem langjährigen Kunden in Berlin auf. Sein Honorar für diesen Auftritt beträgt 2.000 €. An Reisekosten sind MN 400 € entstanden." },
      { text: "MN ist bereits seit Jahren mit 30 % an der X-GmbH (Sitz Bonn) im Privatvermögen beteiligt. Der gemeine Wert der gesamten X-GmbH beträgt im gesamten Kalenderjahr 2025 1 Mio. €. Die Anschaffungskosten des MN betragen 20.000 €." },
      { text: "Nach seinem Wegzug arbeitet MN ab August in Bagdad als Kellner in einer Bar. Seine monatlichen Einkünfte betragen umgerechnet für die Monate August bis Dezember 2.000 € / Monat. Werbungskosten sind MN für diese Tätigkeit keine entstanden." },
      { text: "Aufgabe: Ermitteln Sie die Summe der Einkünfte des MN. Beurteilen Sie dabei auch die Steuerpflicht. § 1 Abs. 3 EStG ist nicht zu prüfen." },
      { text: OHNE_LOESUNG + " Der Wechsel der Steuerpflicht innerhalb eines Veranlagungszeitraums nach § 2 Abs. 7 S. 3 EStG, der Steuerabzug bei künstlerischer Tätigkeit nach § 50a EStG und die Wegzugsbesteuerung nach § 6 AStG stehen im Campus in den Einheiten 1 und 2, in der Fallsammlung und in den Originalfällen mit vollständiger Lösung." },
    ],
  },
  {
    id: "istr-no-03",
    kapitel: "3",
    gruppe: "Übungsfälle",
    title: "Fall beschränkte Körperschaftsteuerpflicht – B-Limitada",
    thema: "Eine brasilianische Kapitalgesellschaft ohne DBA mit drei Inlandsberührungen: ein vermietetes Grundstück in Dortmund, eine 20-prozentige und eine 0,5-prozentige Beteiligung an deutschen GmbHs – und die Frage nach möglichen Erstattungen",
    rechtsstand: RECHTSSTAND,
    quelle: "Fall beschränkte Körperschaftsteuerpflicht (Nöthen)",
    verfasser: VERFASSER,
    normen: [
      "§ 2 Nr. 1 KStG", "§ 8 Abs. 1 KStG", "§ 8b Abs. 1 bis 5 KStG", "§ 32 Abs. 1 Nr. 2, Abs. 5 KStG",
      "§ 49 Abs. 1 Nr. 2 Buchst. e und f, Nr. 5, Nr. 6 EStG", "§ 17 EStG",
      "§ 43 Abs. 1 Satz 1 Nr. 1, § 43b EStG", "§ 50d EStG", "§ 7 Abs. 4 EStG",
    ],
    themen: ["Beschränkte Körperschaftsteuerpflicht", "Nicht-DBA-Staat", "Vermietungseinkünfte", "Beteiligungsveräußerung", "Kapitalertragsteuer", "Abgeltungswirkung", "Erstattung"],
    bloecke: [
      { typ: "titel", text: "Fall beschränkte Körperschaftsteuerpflicht, § 2 Nr. 1 KStG i. V. m. § 49 EStG" },
      { text: "Die B-Limitada ist eine im Kalenderjahr 2012 in Rio (Brasilien, kein DBA) gegründete brasilianische Kapitalgesellschaft, die vergleichbar mit einer deutschen Kapitalgesellschaft ist. Sitz und Geschäftsleitung der B-Limitada ist ebenfalls in Rio. Alleingesellschafter der B-Limitada ist Bruno Costa (CB), der seinen Wohnsitz auch in Brasilien hat. Der Unternehmensgegenstand der B-Limitada ist laut Gesellschaftsvertrag ausschließlich die Vermögensverwaltung." },
      { typ: "titel", text: "Tz. a) Grundstück Frankfurter Ring in Dortmund" },
      { text: "Die B-Limitada hat mit Kaufvertrag vom 12. Februar 2025 das bebaute Grundstück Frankfurter Ring in Dortmund erworben. Die Eintragung im Grundbuch erfolgte am 17. August 2025. Der Übergang von Besitz, Nutzen und Lasten hat zum 01. April 2025 stattgefunden. Die Anschaffungskosten (inklusive Nebenkosten) haben für Grund und Boden 100.000 € und für Gebäude (Verwaltungsgebäude, Baujahr 2017) 400.000 € betragen. Die B-Limitada hat alle bestehenden Mietverträge zivilrechtlich wirksam übernommen. Die laufenden Grundstückskosten haben monatlich 2.000 € zzgl. 200 € Umsatzsteuer betragen, die monatlichen Einnahmen betrugen 50.000 € (umsatzsteuerfrei)." },
      { typ: "titel", text: "Tz. b) Beteiligung Beier-GmbH" },
      { text: "Seit 2023 ist die B-Limitada an der Beier-GmbH mit 20 % beteiligt. Die Beier-GmbH hat ihren Sitz und ihre Geschäftsleitung in Dortmund. Die Anschaffungskosten haben 5.000 € betragen. Am 22. Oktober 2025 verkauft die B-Limitada ihre gesamte Beteiligung für 100.000 € an den fremden Dritten D. An Veräußerungskosten sind 1.000 € zzgl. 190 € Umsatzsteuer entstanden, die auch im Kalenderjahr 2024 von der B-Limitada bezahlt wurden (so in der Quelle; die Veräußerung liegt im Jahr 2025)." },
      { typ: "titel", text: "Tz. c) A-GmbH" },
      { text: "Die B-Limitada ist seit 2021 mit 0,5 % an der A-GmbH beteiligt, die ihren Sitz und ihre Geschäftsleitung in Freiburg hat. Die Anschaffungskosten der Beteiligung haben 5.000 € betragen. Am 09. Dezember 2025 hat die A-GmbH an ihre Gesellschafter insgesamt 500.000 € ausgeschüttet. Zum 15. Dezember 2025 hat die B-Limitada ihre Beteiligung an X verkauft. X hat seinen Wohnsitz in München. Der Veräußerungspreis hat 120.000 € betragen. Veräußerungskosten sind in Höhe von 2.000 € zzgl. 380 € Umsatzsteuer angefallen und wurden von der B-Limitada am 11. Dezember 2024 bezahlt (so in der Quelle; auch dieser Vorgang liegt im Jahr 2025)." },
      { text: "Aufgabe: Ermitteln Sie die Summe der Einkünfte der B-Limitada und beurteilen Sie die Steuerpflicht. Gehen Sie auf mögliche Erstattungen der B-Limitada in Deutschland ein." },
      { text: OHNE_LOESUNG + " Die beschränkte Körperschaftsteuerpflicht nach § 2 Nr. 1 KStG, die Abgeltungswirkung des Kapitalertragsteuerabzugs und die Erstattungsregelung des § 32 Abs. 5 KStG stehen im Campus in den Einheiten 3 und 4 sowie in den Originalfällen mit vollständiger Prüfung." },
    ],
  },
  {
    id: "istr-no-04",
    kapitel: "4",
    gruppe: "Fallsammlung DBA",
    title: "Fallsammlung DBA 1 – Unbeschränkte Steuerpflicht mit DBA",
    thema: "Ein Steuerpflichtiger mit Wohnsitz in München und Ferienwohnsitz in Kitzbühel, vier Sachverhalte nach Österreich: Betriebsaufspaltung über die Grenze, Streubesitzanteil, Warenlager als Betriebsstättenfrage und ein Projekt mit 80 von 200 Arbeitstagen in Wien, bezahlt von einer dortigen Betriebsstätte",
    rechtsstand: RECHTSSTAND,
    quelle: "Fallsammlung DBA, Fall 1 (Nöthen)",
    verfasser: VERFASSER,
    normen: [
      "§ 1 Abs. 1 Satz 1 EStG", "§ 15, § 17, § 19, § 21 EStG", "§ 32b Abs. 1 Satz 1 Nr. 3 EStG",
      "§ 34c EStG", "§ 12 AO",
      "Art. 4 Abs. 2, Art. 6, Art. 7, Art. 13, Art. 15 Abs. 1 und 2, Art. 23 OECD-MA",
    ],
    themen: ["Ansässigkeit", "Mittelpunkt der Lebensinteressen", "Betriebsstätte", "Warenlager", "183-Tage-Regel", "Progressionsvorbehalt", "Anrechnung"],
    bloecke: [
      { typ: "titel", text: "1. Unbeschränkte Steuerpflicht mit DBA" },
      { text: "Beispiel: Der ledige MN hat seinen Wohnsitz in München. Ferner unterhält er einen Ferienwohnsitz in Kitzbühel (Österreich). Der Mittelpunkt seiner Lebensinteressen ist aber in Deutschland. MN erzielt folgende Einkünfte:" },
      { text: "a) MN hat 100 % an der MN-GmbH, die ihren Sitz und ihre Geschäftsleitung in Wien (Österreich) hat und einen Baumarkt unterhält. Aus der Vermietung eines Lagergrundstücks in Wien an die MN-GmbH erzielt MN Einkünfte in Höhe von 50.000 €." },
      { text: "b) MN hat ferner 2 % an der Ö-GmbH (Sitz und Geschäftsleitung in Graz, Österreich). Die Anschaffungskosten der im Privatvermögen gehaltenen Beteiligung betragen im Jahr 2020 1.000 €. MN verkauft diese Beteiligung im laufenden Veranlagungszeitraum für 100.000 €." },
      { text: "c) MN unterhält in München einen Versandhandel. Die Einkünfte betragen 100.000 €. Davon entfallen 5.000 € auf ein Warenlager in Wien." },
      { text: "d) MN ist seit Jahren bei der X-AG (Sitz und Geschäftsleitung in München) angestellt. Für ein Projekt vom 01.03.2025 bis 30.06.2025 muss MN für die X-AG nach Wien. In diesem Zeitraum arbeitet MN 80 Arbeitstage in Wien. Am Wochenende kehrt er mit dem Flugzeug immer zurück nach München. In Wien lebt MN in einem Hotel. Für die Tätigkeit in Wien hat MN zutreffend 18.000 € Reisekosten von der X-AG erstattet bekommen. Diese Kosten sowie der Lohn für die Monate in Wien wurden von einer Betriebsstätte der X-AG in Wien bezahlt. Insgesamt hat MN im laufenden Kalenderjahr 200 Arbeitstage für die X-AG gearbeitet. Der Arbeitslohn beträgt insgesamt im Kalenderjahr 100.000 €." },
      { text: "Aufgabe: Beurteilen Sie die Steuerpflicht und ermitteln Sie die Summe der Einkünfte des MN. Gehen Sie auch auf tarifliche Besonderheiten ein." },
      { text: OHNE_LOESUNG + " Im Campus stehen die Ansässigkeitsprüfung nach Art. 4 OECD-MA, der Betriebsstättenbegriff einschließlich der Frage nach dem Warenlager und die 183-Tage-Regel des Art. 15 OECD-MA samt Betriebsstättenvorbehalt vollständig in den Einheiten 2 und 3 sowie in der Fallsammlung." },
    ],
  },
  {
    id: "istr-no-05",
    kapitel: "5",
    gruppe: "Fallsammlung DBA",
    title: "Fallsammlung DBA 2 – Beschränkte Steuerpflicht mit DBA",
    thema: "Das Spiegelbild: ein Österreicher mit vier Inlandsberührungen – Mietobjekt in Bonn, eine Grundstücksgesellschaft mit Grundbesitz auf Sylt, eine 75-prozentige Beteiligung an einer Dresdner GmbH mit vergessenem Freistellungsauftrag und ein Aufsichtsratsmandat in Augsburg",
    rechtsstand: RECHTSSTAND,
    quelle: "Fallsammlung DBA, Fall 2 (Nöthen)",
    verfasser: VERFASSER,
    normen: [
      "§ 1 Abs. 4 EStG", "§ 17 EStG", "§ 20 Abs. 1 Nr. 1 EStG", "§ 32d Abs. 2 Nr. 3 Buchst. a EStG",
      "§ 49 Abs. 1 Nr. 2 Buchst. e, Nr. 3, Nr. 5, Nr. 6 EStG", "§ 50 Abs. 1, Abs. 2 EStG",
      "§ 50a Abs. 1 Nr. 4 EStG",
      "Art. 6, Art. 13 Abs. 4, Art. 10, Art. 16 OECD-MA",
    ],
    themen: ["Beschränkte Steuerpflicht", "Grundstücksklausel", "Aufsichtsratsvergütung", "Kapitalertragsteuer", "Teileinkünfteverfahren", "Antrag nach § 32d Abs. 2 Nr. 3 EStG"],
    bloecke: [
      { typ: "titel", text: "2. Beschränkte Steuerpflicht mit DBA" },
      { text: "Beispiel: Der ledige Ö hat seinen Wohnsitz in Graz (Österreich) und ist österreichischer Staatsangehöriger. Ö erzielt folgende Einkünfte:" },
      { text: "a) Ö hat ein Mietobjekt in Bonn. Einkünfte: 150.000 €" },
      { text: "b) Ö hat 1 % an der Ö-GmbH, die Sitz sowie Geschäftsleitung in Graz hat. Die Beteiligung befindet sich seit Erwerb im Jahr 2019 im Privatvermögen (Anschaffungskosten 10.000 €). Das Aktivvermögen der Ö-GmbH besteht seit ihrer Gründung ausschließlich aus Grundbesitz auf Sylt. Im laufenden Veranlagungszeitraum verkauft Ö die Beteiligung für 100.000 €." },
      { text: "c) Ö hat 75 % an der D-GmbH, die Sitz und Geschäftsleitung in Dresden hat. Die Beteiligung ist Privatvermögen. Die D-GmbH schüttet im September 16.000 € an den Ö aus. Ö hat leider seinen Freistellungsauftrag vergessen. Ö hat außerdem einen Antrag gem. § 32d Abs. 2 Nr. 3 a) EStG gestellt." },
      { text: "d) Ö ist seit Jahren Aufsichtsrat der A-AG, Sitz und Geschäftsleitung in Augsburg. Für eine Sitzung in Augsburg erhält Ö 5.000 € Vergütung. Die Reisekosten, die Ö selbst getragen hat, belaufen sich auf 1.000 €." },
      { text: "Aufgabe: Beurteilen Sie die Steuerpflicht und ermitteln Sie das zu versteuernde Einkommen des MN (so in der Quelle; gemeint ist Ö). Gehen Sie auch auf tarifliche Besonderheiten ein. Gehen Sie aus Vereinfachungsgründen von einem einheitlichen Einkommensteuersatz von 40 % aus. § 1 Abs. 3 EStG ist nicht zu prüfen." },
      { text: OHNE_LOESUNG + " Die Grundstücksklausel des Art. 13 Abs. 4 OECD-MA – der Grund, warum die Beteiligung an einer österreichischen Gesellschaft mit Grundbesitz auf Sylt hier überhaupt eine Rolle spielt –, der Steuerabzug bei Aufsichtsratsvergütungen nach § 50a Abs. 1 Nr. 4 EStG und das Zusammenspiel von § 32d Abs. 2 Nr. 3 EStG mit § 50 Abs. 2 EStG stehen im Campus in den Einheiten 1 und 4 sowie in den Originalfällen." },
    ],
  },
];

export default istrNoethen;
