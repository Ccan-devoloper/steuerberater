// Wortlautgetreue IStR-Originalfälle aus den vom Nutzer bereitgestellten Fall-PDFs.
// Persönliche PDF-Fußzeilen werden bewusst nicht reproduziert.

export const istrOriginalfaelle = {
  "dba-unbeschraenkt": {
    id: "dba-unbeschraenkt",
    source: "Fallsammlung DBA.pdf · Seite 1",
    copyright: "© Markus Nöthen",
    title: "1. Unbeschränkte Steuerpflicht mit DBA",
    preface: "Beispiel:",
    sections: [
      {
        paragraphs: [
          "Der ledige MN hat seinen Wohnsitz in München. Ferner unterhält er einen Ferienwohnsitz in Kitzbühel (Österreich). Der Mittelpunkt seiner Lebensinteressen ist aber in Deutschland. MN erzielt folgende Einkünfte:",
        ],
      },
      {
        heading: "a)",
        paragraphs: [
          "MN hat 100 % an der MN-GmbH, die ihren Sitz und ihre Geschäftsleitung in Wien (Österreich) hat und einen Baumarkt unterhält. Aus der Vermietung eines Lagergrundstücks in Wien an die MN-GmbH erzielt MN Einkünfte in Höhe von 50.000 €.",
        ],
      },
      {
        heading: "b)",
        paragraphs: [
          "MN hat ferner 2 % an der Ö-GmbH (Sitz und Geschäftsleitung in Graz, Österreich). Die Anschaffungskosten der im Privatvermögen gehaltenen Beteiligung betragen im Jahr 2020 1.000 €. MN verkauft diese Beteiligung im laufenden Veranlagungszeitraum für 100.000 €.",
        ],
      },
      {
        heading: "c)",
        paragraphs: [
          "MN unterhält in München einen Versandhandel. Die Einkünfte betragen 100.000 €. Davon entfallen 5.000 € auf ein Warenlager in Wien.",
        ],
      },
      {
        heading: "d)",
        paragraphs: [
          "MN ist seit Jahren bei der X-AG (Sitz und Geschäftsleitung in München) angestellt. Für ein Projekt vom 01.03.2025 bis 30.06.2025 muss MN für die X-AG nach Wien. In diesem Zeitraum arbeitet MN 80 Arbeitstage in Wien. Am Wochenende kehrt er mit dem Flugzeug immer zurück nach München. In Wien lebt MN in einem Hotel. Für die Tätigkeit in Wien hat MN zutreffend 18.000 € Reisekosten von der X-AG erstattet bekommen. Diese Kosten sowie der Lohn für die Monate in Wien wurden von einer Betriebsstätte der X-AG in Wien bezahlt. Insgesamt hat MN im laufenden Kalenderjahr 200 Arbeitstage für die X-AG gearbeitet. Der Arbeitslohn beträgt insgesamt im Kalenderjahr 100.000 €.",
        ],
      },
    ],
    task: [
      "Beurteilen Sie die Steuerpflicht und ermitteln Sie die Summe der Einkünfte des MN. Gehen Sie auch auf tarifliche Besonderheiten ein.",
    ],
    solutionsByUnit: {
      1: {
        note: "Einheit 1 verwendet den Fall nur als DBA-Vorschau. Die vollständige AAVV-, Verteilungs- und Methodenlösung wird erst in Einheit 2 entwickelt.",
        sections: [
          {
            title: "Vorschau in Einheit 1",
            sourceFrames: [[4, 5]],
            steps: [
              "National zunächst § 1 Abs. 1 EStG und die Einkunftsarten bestimmen.",
              "Danach DBA-Anwendbarkeit und Ansässigkeit sowie für jede Einkunftsquelle die passende Verteilungsnorm prüfen.",
              "Die ausführliche Lösung folgt in Einheit 2; Einheit 1 nimmt sie an dieser Stelle noch nicht vorweg.",
            ],
          },
        ],
      },
      2: {
        note: "Die nachstehenden Schritte bilden den in Einheit 2 tatsächlich entwickelten Lösungsweg ab. Wo die Quelle Teilbeträge notiert, werden diese in derselben Reihenfolge wiedergegeben.",
        sections: [
          {
            title: "1. Persönliche Steuerpflicht und DBA-Ansässigkeit",
            sourceFrames: [[155, 167], [179, 181], [200, 217]],
            steps: [
              "§ 1 Abs. 1 EStG: Wohnsitz in München → unbeschränkte Steuerpflicht; Ausgangspunkt ist das Welteinkommen.",
              "DBA AAVV: persönlicher/sachlicher Anwendungsbereich und Art. 4 prüfen. Wegen des Ferienwohnsitzes in Kitzbühel wird die Doppelansässigkeit mit dem Tie-Breaker aufgelöst; der Mittelpunkt der Lebensinteressen liegt laut Sachverhalt in Deutschland → Ansässigkeitsstaat Deutschland.",
            ],
          },
          {
            title: "2. a) Lagergrundstück Wien – Art. 6 / Art. 23",
            sourceFrames: [[232, 244], [247, 275]],
            steps: [
              "Die Vermietung wird als Grundstückseinkunft behandelt; für die DBA-Verteilung wird Art. 6 herangezogen.",
              "Österreich erhält als Belegenheitsstaat das Besteuerungsrecht für die 50.000 €.",
              "Deutschland stellt nach dem in der Einheit verwendeten Methodenartikel Art. 23 frei.",
              "§ 32b Abs. 1 S. 1 Nr. 3 EStG wird geprüft; die Einheit markiert für diesen österreichischen Grundstücksfall die Rückausnahme des § 32b Abs. 1 S. 2 Nr. 3 EStG: kein Progressionsvorbehalt, da EU-Fall.",
            ],
          },
          {
            title: "3. b) Verkauf 2-%-Beteiligung Ö-GmbH",
            sourceFrames: [[284, 289], [299, 312]],
            steps: [
              "§ 17 Abs. 1 EStG wird für die 2-%-Beteiligung geprüft.",
              "Unterrichtsrechnung: Veräußerungspreis 100.000 € ./. Anschaffungskosten 1.000 € = 99.000 € Veräußerungsgewinn vor Teileinkünfteverfahren.",
              "Teileinkünfteverfahren in der Einheit: 60 % von 99.000 € = 59.400 €.",
              "DBA-Verteilung nach Art. 13 Abs. 5: Besteuerung im Ansässigkeitsstaat Deutschland; die 59.400 € bleiben in Deutschland steuerpflichtig.",
            ],
          },
          {
            title: "4. c) Versandhandel / Warenlager Wien",
            sourceFrames: [[327, 337]],
            steps: [
              "Für den Versandhandel wird Art. 7 DBA zusammen mit Art. 5 DBA geprüft.",
              "Die Einheit behandelt das bloße Warenlager in Wien nicht als Betriebsstätte; damit wird für die 5.000 € kein österreichisches Betriebsstättenbesteuerungsrecht eröffnet.",
              "Folge der Unterrichtslösung: Deutschland besteuert die gesamten 100.000 € aus dem Versandhandel.",
            ],
          },
          {
            title: "5. d) Arbeitslohn Wien – Art. 15 und Methodenebene",
            sourceFrames: [[359, 380]],
            steps: [
              "Arbeitslohn nach § 19 EStG; anschließend Art. 15 DBA.",
              "80 von insgesamt 200 Arbeitstagen entfallen auf Wien. Die Einheit ordnet damit 40 % des Jahresarbeitslohns, also 40.000 €, der Tätigkeit in Österreich zu.",
              "Die 183-Tage-Rückausnahme des Art. 15 Abs. 2 wird vollständig geprüft. Obwohl der Zeitraum unter 183 Tagen liegt und die X-AG ihren Sitz in München hat, trägt nach dem Sachverhalt die Wiener Betriebsstätte die Kosten/Löhne der Wiener Monate; deshalb greift die Rückausnahme nicht vollständig. Österreich darf den 40.000-€-Anteil besteuern.",
              "Deutschland stellt diesen österreichischen Arbeitslohnanteil nach Art. 23 frei; die Einheit bezieht ihn aber in den Progressionsvorbehalt ein.",
              "Der verbleibende deutsche Arbeitslohnanteil beträgt 60.000 €. Die Unterrichtsrechnung zieht den Arbeitnehmer-Pauschbetrag von 1.230 € ab → 58.770 €.",
              "Die 18.000 € Reisekostenerstattung werden in der Einheit nach § 3 Nr. 16 EStG als steuerfrei behandelt.",
            ],
          },
          {
            title: "6. Rechnerische Zusammenführung der in Einheit 2 notierten deutschen Einkünfte",
            sourceFrames: [[374, 381]],
            steps: [
              "Aus den im Unterricht notierten in Deutschland steuerpflichtigen Teilbeträgen ergibt sich rechnerisch: 59.400 € (§ 17) + 100.000 € (Versandhandel) + 58.770 € (deutscher Arbeitslohnanteil nach Pauschbetrag) = 218.170 €.",
              "Die 50.000 € österreichischen Grundstückseinkünfte sind in Deutschland freigestellt und nach der in der Einheit markierten EU-Rückausnahme ohne Progressionsvorbehalt; der österreichische Arbeitslohnanteil von 40.000 € ist freigestellt, wird aber für den Progressionsvorbehalt berücksichtigt.",
            ],
          },
        ],
      },
    },
  },

  "dba-beschraenkt": {
    id: "dba-beschraenkt",
    source: "Fallsammlung DBA.pdf · Seite 2",
    copyright: "© Markus Nöthen",
    title: "2. Beschränkte Steuerpflicht mit DBA",
    preface: "Beispiel:",
    sections: [
      {
        paragraphs: [
          "Der ledige Ö hat seinen Wohnsitz in Graz (Österreich) und ist österreichischer Staatsangehöriger. Ö erzielt folgende Einkünfte:",
        ],
      },
      {
        heading: "a)",
        paragraphs: [
          "Ö hat ein Mietobjekt in Bonn. Einkünfte: 150.000 €",
        ],
      },
      {
        heading: "b)",
        paragraphs: [
          "Ö hat 1 % an der Ö-GmbH, die Sitz sowie Geschäftsleitung in Graz hat. Die Beteiligung befindet sich seit Erwerb im Jahr 2019 im Privatvermögen (Anschaffungskosten 10.000 €). Das Aktivvermögen der Ö-GmbH besteht seit ihrer Gründung ausschließlich aus Grundbesitz auf Sylt. Im laufenden Veranlagungszeitraum verkauft Ö die Beteiligung für 100.000 €.",
        ],
      },
      {
        heading: "c)",
        paragraphs: [
          "Ö hat 75 % an der D-GmbH, die Sitz und Geschäftsleitung in Dresden hat. Die Beteiligung ist Privatvermögen. Die D-GmbH schüttet im September 16.000 € an den Ö aus. Ö hat leider seinen Freistellungsauftrag vergessen. Ö hat außerdem einen Antrag gem. § 32d Abs. 2 Nr. 3 a) EStG gestellt.",
        ],
      },
      {
        heading: "d)",
        paragraphs: [
          "Ö ist seit Jahren Aufsichtsrat der A-AG, Sitz und Geschäftsleitung in Augsburg. Für eine Sitzung in Augsburg erhält Ö 5.000 € Vergütung. Die Reisekosten, die Ö selbst getragen hat, belaufen sich auf 1.000 €.",
        ],
      },
    ],
    task: [
      "Beurteilen Sie die Steuerpflicht und ermitteln Sie das zu versteuernde Einkommen des MN. Gehen Sie auch auf tarifliche Besonderheiten ein. Gehen Sie aus Vereinfachungsgründen von einem einheitlichen Einkommensteuersatz von 40 % aus. § 1 Abs. 3 EStG ist nicht zu prüfen.",
    ],
    sourceNote: "Die Bezeichnung „MN“ in der Aufgabenstellung wird wortlautgetreu aus der Quelle übernommen und nicht stillschweigend zu „Ö“ korrigiert.",
    solutionsByUnit: {
      2: {
        note: "Einheit 2 eröffnet diesen Fall als Anwendung von EIS vor AAVV. Die ausführliche Berechnung und die Erhebungsfolgen werden in Einheit 3 fortgeführt.",
        sections: [
          {
            title: "Aufbau in Einheit 2",
            sourceFrames: [[383, 392], [398, 400], [402, 429]],
            steps: [
              "Ausgangspunkt ist § 1 Abs. 4 EStG; § 1 Abs. 3 EStG ist laut Aufgabe nicht zu prüfen.",
              "Für jede Einkunftsquelle zuerst EIS: Einkunftsart → konkrete Nummer des § 49 EStG → Erhebungsweg / § 50 EStG.",
              "Danach DBA AAVV mit Österreich. Die Einheit legt insbesondere Art. 6 für das Mietobjekt und Art. 13 für die immobiliengeprägte Beteiligungsveräußerung an.",
              "Bei Dividende und Aufsichtsratsvergütung werden nationaler Steuerabzug und DBA-Verteilung getrennt; die vollständige Fortführung folgt in Einheit 3.",
            ],
          },
        ],
      },
      3: {
        note: "Einheit 3 nimmt denselben Originalfall erneut auf und führt die nationale Erhebung, DBA-Begrenzung und die konkreten Rechnungen fort.",
        sections: [
          {
            title: "1. Grundaufbau – § 1 Abs. 4, EIS, dann AAVV",
            sourceFrames: [[1, 4], [13, 40]],
            steps: [
              "Kein deutscher Wohnsitz/gewöhnlicher Aufenthalt; § 1 Abs. 3 EStG ist ausdrücklich ausgeschlossen → § 1 Abs. 4 EStG.",
              "Jede Position wird separat über Einkunftsart, § 49-Inlandsanknüpfung und Erhebungsweg geprüft. Erst danach folgt DBA AAVV.",
            ],
          },
          {
            title: "2. a) Mietobjekt Bonn",
            sourceFrames: [[70, 95]],
            steps: [
              "Die 150.000 € aus dem deutschen Mietobjekt werden als inländische Vermietungseinkünfte in die Veranlagung einbezogen.",
              "Das DBA belässt Deutschland als Belegenheitsstaat das Besteuerungsrecht für das Grundstück.",
            ],
          },
          {
            title: "3. b) 1-%-Beteiligung an der immobiliengeprägten Ö-GmbH",
            sourceFrames: [[80, 94]],
            steps: [
              "Unterrichtsrechnung: Veräußerungspreis 100.000 € ./. Anschaffungskosten 10.000 € = 90.000 € Rohgewinn.",
              "Im behandelten Teileinkünfteweg werden 60 % angesetzt → 54.000 €.",
              "Die Einheit ordnet den deutschen Inlandsbezug über die ausschließlich aus Sylt-Grundbesitz bestehende Gesellschaft ein und prüft anschließend die DBA-Verteilung.",
              "Für a) und b) notiert die Einheit eine Summe der Einkünfte von 150.000 € + 54.000 € = 204.000 €.",
            ],
          },
          {
            title: "4. Tarifbesonderheit nach § 50 Abs. 1",
            sourceFrames: [[85, 94]],
            steps: [
              "Für die Tarifberechnung bei beschränkter Steuerpflicht wird der Grundfreibetrag nicht als persönlicher Freibetrag gewährt; die Einheit arbeitet mit der Hinzurechnung des 2025er Grundfreibetrags von 12.096 € zur tariflichen Bemessungsgröße.",
              "Unterrichtsskizze: 204.000 € + 12.096 € = 216.096 € als tarifliche Rechengröße. Diese Hinzurechnung ist kein zusätzlicher wirtschaftlicher Einkünftebetrag.",
            ],
          },
          {
            title: "5. c) Dividende D-GmbH – Kapitalertragsteuer, Art. 10 und § 50c",
            sourceFrames: [[13, 36], [73, 95]],
            steps: [
              "Dividende national über § 20 EStG und § 49 Abs. 1 Nr. 5 EStG einordnen; Kapitalertragsteuer nach §§ 43 ff. EStG und § 50 Abs. 2 EStG prüfen.",
              "DBA Art. 10: Österreich ist Ansässigkeitsstaat; Deutschland darf als Quellenstaat bei Ö als natürlicher Person nach der in der Einheit behandelten Grenze 15 % erheben. Die 5-%-Variante wird nicht allein durch die 75-%-Beteiligung ausgelöst.",
              "Soweit der innerstaatliche Einbehalt über dem DBA-Höchstbetrag liegt, behandelt die Einheit § 50c EStG als Freistellungs-/Erstattungsweg.",
              "Der im Sachverhalt genannte Antrag nach § 32d Abs. 2 Nr. 3 a) EStG wird nicht ungeprüft wie bei unbeschränkter Steuerpflicht übernommen; die Sonderregeln der beschränkten Steuerpflicht bleiben vorrangig zu prüfen.",
            ],
          },
          {
            title: "6. d) Aufsichtsratsvergütung – § 50a und Art. 16",
            sourceFrames: [[43, 68], [73, 78], [96, 109]],
            steps: [
              "Einkunftsart: § 18 Abs. 1 Nr. 3 EStG; Inlandsanknüpfung: § 49 Abs. 1 Nr. 3 EStG; Steuerabzug: § 50a Abs. 1 Nr. 4 EStG.",
              "§ 50a Abs. 2: 30 % von 5.000 € = 1.500 € Quellensteuer vor Berücksichtigung der Reisekosten.",
              "Für die in der Einheit behandelte EU/EWR-Konstellation werden die unmittelbar zusammenhängenden 1.000 € Reisekosten über § 50a Abs. 3 berücksichtigt: 5.000 € ./. 1.000 € = 4.000 €; 30 % = 1.200 €.",
              "DBA Art. 16 belässt Deutschland das Besteuerungsrecht für die Aufsichtsratsvergütung der deutschen A-AG.",
              "Anschließend prüft die Einheit § 50 Abs. 2 einschließlich der hervorgehobenen Veranlagungsausnahme. Die Unterrichtseinheit weist darauf hin, dass eine mögliche Veranlagung bei dem vereinfachten 40-%-Tarif nicht automatisch günstiger ist als der Quellensteuerweg.",
            ],
          },
        ],
      },
    },
  },

  "wegzug-mn": {
    id: "wegzug-mn",
    source: "IStR-Uebungsfall (Noethen).pdf · Seite 1",
    copyright: "© Markus Nöthen",
    title: "Übungsfall Wegzug",
    sections: [
      {
        paragraphs: [
          "Mohamed Nihad (MN) ist irakischer Staatsangehöriger und wohnt seit seiner Geburt am 07.01.1981 in Koblenz. Er ist ledig und kinderlos. Er arbeitet bereits seit Jahren als freiberuflicher Musiker. Ende Juni 2025 beschließt MN Deutschland dauerhaft zu verlassen und zu seiner restlichen Familie nach Bagdad (Irak, kein DBA) zurückzukehren. Dafür kündigt er fristgerecht für Ende Juni seinen Mietvertrag für seine angemietete Wohnung in Koblenz.",
          "Als Musiker erzielt er für das erste Halbjahr für verschiedene Auftritte 10.000 € an Einkünften, ermittelt nach § 4 Abs. 3 EStG. MN nimmt zutreffend die Regelung des § 19 UStG in Anspruch.",
          "In der zweiten Jahreshälfte tritt MN am 16.12.2025 an einem Abend bei einem langjährigen Kunden in Berlin auf. Sein Honorar für diesen Auftritt beträgt 2.000 €. An Reisekosten sind MN 400 € entstanden.",
          "MN ist bereits seit Jahren mit 30 % an der X-GmbH (Sitz Bonn) im Privatvermögen beteiligt. Der gemeine Wert der gesamten X-GmbH beträgt im gesamten Kalenderjahr 2025 1 Mio. €. Die Anschaffungskosten des MN betragen 20.000 €.",
          "Nach seinem Wegzug arbeitet MN ab August in Bagdad als Kellner in einer Bar. Seine monatlichen Einkünfte betragen umgerechnet für die Monate August bis Dezember 2.000 € / Monat. Werbungskosten sind MN für diese Tätigkeit keine entstanden.",
        ],
      },
    ],
    task: [
      "Ermitteln Sie die Summe der Einkünfte des MN. Beurteilen Sie dabei auch die Steuerpflicht. § 1 Abs. 3 EStG ist nicht zu prüfen.",
    ],
    solutionsByUnit: {
      1: {
        note: "Einheit 1 zeigt den Wegzugsfall als Vorschau auf den Wegzugszweig des IStR-Grundschemas. Die vollständige AStG-/Progressions-/§-50a-Lösung wird erst in Einheit 3 entwickelt.",
        sections: [
          {
            title: "Vorschau in Einheit 1",
            sourceFrames: [[6, 6]],
            steps: [
              "Bis Ende Juni unbeschränkte Steuerpflicht; nach Aufgabe der Wohnung persönliche Steuerpflicht neu bestimmen.",
              "Nach dem Wegzug deutsche Einkünfte über § 49 EStG und den jeweiligen Erhebungsweg prüfen.",
              "§ 2 Abs. 7 S. 3 EStG, § 32b Abs. 1 S. 1 Nr. 2 EStG sowie §§ 2 und 6 AStG sind als eigenständige Wegzugsprüfungen vorgemerkt; die Detailberechnung folgt in Einheit 3.",
            ],
          },
        ],
      },
      3: {
        note: "Einheit 3 arbeitet den Wegzugsfall vollständig entlang der Zeitachse und der getrennten Wegzugs-/Nachwegzugsfolgen durch.",
        sections: [
          {
            title: "1. Zeitachse der persönlichen Steuerpflicht",
            sourceFrames: [[111, 150]],
            steps: [
              "Bis Ende Juni 2025 besteht wegen der Wohnung in Koblenz unbeschränkte Steuerpflicht nach § 1 Abs. 1 EStG.",
              "Ende Juni wird die Wohnung endgültig aufgegeben; § 1 Abs. 3 EStG ist laut Aufgabe nicht zu prüfen. Für die Zeit danach werden deutsche Einkünfte über § 1 Abs. 4 i.V.m. § 49 EStG gesondert geprüft.",
              "§ 2 Abs. 7 S. 3 EStG wird für den unterjährigen Wechsel im selben Veranlagungszeitraum einbezogen.",
            ],
          },
          {
            title: "2. § 2 AStG – erweiterte beschränkte Steuerpflicht",
            sourceFrames: [[152, 177]],
            steps: [
              "§ 2 AStG wird als eigener Wegzugstatbestand vollständig geprüft.",
              "Die Prüfung scheitert im Unterricht bereits an der erforderlichen deutschen Staatsangehörigkeit: MN ist irakischer Staatsangehöriger.",
            ],
          },
          {
            title: "3. § 6 AStG – Wegzugsbesteuerung der X-GmbH-Beteiligung",
            sourceFrames: [[179, 219]],
            steps: [
              "§ 6 AStG wird unabhängig von § 2 AStG geprüft. Die Einheit knüpft an die 30-%-Beteiligung an der X-GmbH und die langjährige unbeschränkte Steuerpflicht an.",
              "Zum Wegzugszeitpunkt wird für die §-17-Beteiligung ein Ansatz zum gemeinen Wert fingiert. Anteiliger gemeiner Wert: 30 % von 1.000.000 € = 300.000 €.",
              "Unterrichtsrechnung im Teileinkünfteverfahren: 60 % von 300.000 € = 180.000 €; 60 % der Anschaffungskosten von 20.000 € = 12.000 €; daraus 168.000 € steuerpflichtiger Betrag.",
              "Die Einheit prüft außerdem die Rückkehrer-/Vorübergehendkeitsregeln des § 6 AStG; der Sachverhalt beschreibt den Wegzug nach Bagdad als dauerhaft.",
            ],
          },
          {
            title: "4. Irakische Kellnereinkünfte nach dem Wegzug – Progressionsvorbehalt",
            sourceFrames: [[225, 234]],
            steps: [
              "August bis Dezember: 5 × 2.000 € = 10.000 € aus der Tätigkeit als Kellner in Bagdad.",
              "Die Einheit zieht den Arbeitnehmer-Pauschbetrag von 1.230 € ab → 8.770 €.",
              "Die 8.770 € werden in der Unterrichtslösung über § 32b Abs. 1 S. 1 Nr. 2 EStG in den Progressionsvorbehalt einbezogen.",
            ],
          },
          {
            title: "5. Berliner Auftritt am 16.12.2025 – § 50a",
            sourceFrames: [[221, 237]],
            steps: [
              "Der nach dem Wegzug ausgeführte Berliner Musikerauftritt wird als eigene deutsche Quelle über § 49 EStG und § 50a EStG geprüft.",
              "Die Unterrichtsrechnung wendet den 15-%-Steuerabzug auf das Honorar von 2.000 € an → 300 €.",
              "Die 400 € Reisekosten werden in der Quelle beim Steuerabzug nicht abgezogen; die Einheit verweist beim Aufwandsabzug des § 50a Abs. 3 auf die EU/EWR-Voraussetzungen, die beim Wohnsitz Irak nicht erfüllt sind.",
              "§ 50 Abs. 2 S. 1 EStG wird anschließend als Abgeltungswirkung des Steuerabzugs festgehalten.",
            ],
          },
          {
            title: "6. Ergebnisdarstellung nach der Unterrichtslogik",
            sourceFrames: [[179, 237]],
            steps: [
              "Die Einheit hält die Blöcke bewusst getrennt: 10.000 € Musiker-Einkünfte des ersten Halbjahres im Zeitraum der unbeschränkten Steuerpflicht; 168.000 € Wegzugsgewinn nach § 6 AStG; 8.770 € irakische Arbeitseinkünfte nur für den Progressionsvorbehalt; Berliner Honorar mit 300 € Quellensteuer und Abgeltungswirkung.",
              "Da die Unterrichtsframes diese Blöcke getrennt nach Steuerpflicht, Progressionsvorbehalt und Quellensteuer behandeln, wird hier keine darüber hinausgehende einheitliche Endsumme konstruiert, die in der Quelle nicht ausdrücklich zusammengeführt wird.",
            ],
          },
        ],
      },
    },
  },

  "kst-limitada": {
    id: "kst-limitada",
    source: "Uebungsfall beschraenkte KSt Pflicht.pdf · Seiten 1–2",
    copyright: "© Markus Nöthen",
    title: "Fall beschränkte Körperschaftsteuerpflicht, § 2 Nr. 1 KStG iVm. § 49 EStG",
    sections: [
      {
        paragraphs: [
          "Die B-Limitada ist eine im Kalenderjahr 2012 in Rio (Brasilien, kein DBA) gegründete brasilianische Kapitalgesellschaft, die vergleichbar mit einer deutschen Kapitalgesellschaft ist. Sitz und Geschäftsleitung der B-Limitada ist ebenfalls in Rio. Alleingesellschafter der B-Limitada ist Bruno Costa (CB), der seinen Wohnsitz auch in Brasilien hat.",
          "Der Unternehmensgegenstand der B-Limitada ist laut Gesellschaftsvertrag ausschließlich die Vermögensverwaltung.",
        ],
      },
      {
        heading: "Tz. a) Grundstück Frankfurter Ring in Dortmund",
        paragraphs: [
          "Die B-Limitada hat mit Kaufvertrag vom 12. Februar 2025 das bebaute Grundstück Frankfurter Ring in Dortmund erworben. Die Eintragung im Grundbuch erfolgte am 17. August 2025. Der Übergang von Besitz, Nutzen und Lasten hat zum 01. April 2025 stattgefunden. Die Anschaffungskosten (inklusive Nebenkosten) haben für Grund und Boden 100.000 € und für Gebäude (Verwaltungsgebäude, Baujahr 2017) 400.000 € betragen. Die B-Limitada hat alle bestehenden Mietverträge zivilrechtlich wirksam übernommen. Die laufenden Grundstückskosten haben monatlich 2.000 € zzgl. 200 € Umsatzsteuer betragen, die monatlichen Einnahmen betrugen 50.000 € (umsatzsteuerfrei).",
        ],
      },
      {
        heading: "Tz. b) Beteiligung Beier-GmbH",
        paragraphs: [
          "Seit 2023 ist die B-Limitada an der Beier-GmbH mit 20 % beteiligt. Die Beier-GmbH hat ihren Sitz und ihre Geschäftsleitung in Dortmund. Die Anschaffungskosten haben 5.000 € betragen. Am 22. Oktober 2025 verkauft die B-Limitada ihre gesamte Beteiligung für 100.000 € an den fremden Dritten D. An Veräußerungskosten sind 1.000 € zzgl. 190 € Umsatzsteuer entstanden, die auch im Kalenderjahr 2024 von der B-Limitada bezahlt wurden.",
        ],
      },
      {
        heading: "Tz. c) A-GmbH",
        paragraphs: [
          "Die B-Limitada ist seit 2021 mit 0,5 % an der A-GmbH beteiligt, die ihren Sitz und ihre Geschäftsleitung in Freiburg hat. Die Anschaffungskosten der Beteiligung haben 5.000 € betragen. Am 09. Dezember 2025 hat die A-GmbH an ihre Gesellschafter insgesamt 500.000 € ausgeschüttet. Zum 15. Dezember 2025 hat die B-Limitada ihre Beteiligung an X verkauft. X hat seinen Wohnsitz in München. Der Veräußerungspreis hat 120.000 € betragen. Veräußerungskosten sind in Höhe von 2.000 € zzgl. 380 € Umsatzsteuer angefallen und wurden von der B-Limitada am 11. Dezember 2024 bezahlt.",
        ],
      },
    ],
    task: [
      "Ermitteln Sie die Summe der Einkünfte der B-Limitada und beurteilen Sie die Steuerpflicht. Gehen Sie auf mögliche Erstattungen der B-Limitada in Deutschland ein.",
    ],
    solutionsByUnit: {
      1: {
        note: "Einheit 1 zeigt den Fall als Vorschau auf die beschränkte Körperschaftsteuerpflicht. Die vollständige §-8b-/§-32-/Erstattungsvertiefung folgt in Einheit 3.",
        sections: [
          {
            title: "Vorschau in Einheit 1",
            sourceFrames: [[7, 8]],
            steps: [
              "Persönlicher Steuerzugriff über § 2 Nr. 1 KStG.",
              "Für jede deutsche Einkunftsquelle die einschlägige Nummer des § 49 EStG bestimmen.",
              "Kein DBA mit Brasilien im Sachverhalt; Erhebung und Körperschaftsteuer-Sonderfolgen werden in der späteren Einheit vertieft.",
            ],
          },
        ],
      },
      3: {
        note: "Einheit 3 arbeitet die B-Limitada ausführlich durch. Der Unterricht zeigt bei § 8b ausdrücklich erst ein älteres 5-%-Lösungsmuster und anschließend die Korrektur über BFH I R 37/15; beides wird hier transparent getrennt.",
        sections: [
          {
            title: "1. Persönliche Steuerpflicht / Einstieg",
            sourceFrames: [[241, 277]],
            steps: [
              "B-Limitada ist einer deutschen Kapitalgesellschaft vergleichbar, hat aber Sitz und Geschäftsleitung in Rio. Einstieg: beschränkte Körperschaftsteuerpflicht nach § 2 Nr. 1 KStG.",
              "Für jede einzelne Einkunftsquelle wird anschließend § 49 EStG als Inlandsanknüpfung geprüft; § 8 Abs. 2 KStG ersetzt diese Prüfung nicht.",
              "Brasilien wird im Sachverhalt ausdrücklich ohne DBA behandelt.",
            ],
          },
          {
            title: "2. Tz. a) Grundstück Dortmund",
            sourceFrames: [[284, 301]],
            steps: [
              "Die Einheit rechnet für 2025 ab Übergang von Besitz, Nutzen und Lasten zum 01.04.2025 mit neun Monaten.",
              "Mieteinnahmen: 9 × 50.000 € = 450.000 €.",
              "Laufende Grundstückskosten: 9 × 2.000 € = 18.000 €.",
              "AfA Gebäude in der Unterrichtsrechnung: 400.000 € × 3 % × 9/12 = 9.000 €.",
              "Unterrichtsergebnis Tz. a): 450.000 € ./. 18.000 € ./. 9.000 € = 423.000 €.",
            ],
          },
          {
            title: "3. Tz. b) Verkauf der 20-%-Beteiligung Beier-GmbH",
            sourceFrames: [[302, 337], [341, 367]],
            steps: [
              "Zuerst § 49-Inlandsanknüpfung des Beteiligungsverkaufs prüfen; erst danach § 8b KStG.",
              "Unterrichtsrechnung vor § 8b: Veräußerungspreis 100.000 € ./. Anschaffungskosten 5.000 € ./. Veräußerungskosten 1.190 € = 93.810 €.",
              "§ 8b Abs. 2 KStG stellt den Veräußerungsgewinn grundsätzlich steuerfrei.",
              "Die Einheit blendet anschließend ein älteres Klausurlösungsmuster ein, das 5 % nach § 8b Abs. 3 S. 1 KStG als nicht abziehbare Betriebsausgaben hinzurechnet.",
              "Danach erfolgt ausdrücklich die Unterrichtskorrektur mit BFH vom 31.05.2017 – I R 37/15: Bei der behandelten beschränkt steuerpflichtigen ausländischen Körperschaft ohne inländische Betriebsstätte oder ständigen Vertreter greift die 5-%-Fiktion in dieser Konstellation nicht. Die ältere 5-%-Lösung wird deshalb nicht als Endergebnis übernommen.",
            ],
          },
          {
            title: "4. Tz. c) Dividende der A-GmbH – Steuerabzug, § 32 KStG und Erstattung",
            sourceFrames: [[368, 380]],
            steps: [
              "B-Limitada hält 0,5 %; aus der Gesamtausschüttung von 500.000 € entfällt damit rechnerisch eine Dividende von 2.500 € auf die B-Limitada.",
              "Die Einheit prüft den Kapitalertragsteuerabzug nach §§ 43, 43a und 44 EStG und notiert 25 % Kapitalertragsteuer zuzüglich Solidaritätszuschlag.",
              "§ 32 Abs. 1 Nr. 2 KStG wird als Abgeltungswirkung des Steuerabzugs hervorgehoben.",
              "Für die Erstattung markiert die Einheit § 44a Abs. 9 S. 1 und 2 EStG und notiert ausdrücklich: 2/5 = 10 % zurück. Damit wird der Erstattungsmechanismus der Quelle wortsinngemäß wiedergegeben, ohne ein DBA zu unterstellen.",
              "Im Anschluss notiert die Quelle außerdem § 50c Abs. 3 i.V.m. § 36 Abs. 2 Nr. 2 EStG im Zusammenhang mit Anrechnung/Erstattung.",
            ],
          },
          {
            title: "5. Im PDF-Sachverhalt genannter Verkauf der 0,5-%-Beteiligung",
            sourceFrames: [[368, 380]],
            steps: [
              "Der Originalfall nennt zusätzlich den Verkauf der 0,5-%-Beteiligung an X für 120.000 € und die bereits 2024 gezahlten Veräußerungskosten.",
              "In den in Einheit 3 anschließend sichtbaren Lösungsframes wird nach der Dividenden-/Erstattungsprüfung keine eigenständige abschließende Berechnung dieses Verkaufs mehr dokumentiert. Deshalb wird hier bewusst keine nicht belegte Schlussrechnung ergänzt.",
            ],
          },
        ],
      },
    },
  },
};

export const istrOriginalfallZuordnung = {
  "istr1-fall-dba-vorschau": "dba-unbeschraenkt",
  "istr2-fall-unbeschraenkt-dba": "dba-unbeschraenkt",
  "istr2-fall-beschraenkt-dba": "dba-beschraenkt",
  "istr3-fall-oesterreich": "dba-beschraenkt",
  "istr1-fall-wegzug": "wegzug-mn",
  "istr3-fall-wegzug-mn": "wegzug-mn",
  "istr1-fall-kst-limitada": "kst-limitada",
  "istr3-fall-limitada": "kst-limitada",
};

export function verknuepfeIstrOriginalfall(fall) {
  const originalCaseId = istrOriginalfallZuordnung[fall.id];
  if (!originalCaseId) return fall;
  const originalCase = istrOriginalfaelle[originalCaseId];
  const unterricht = originalCase.solutionsByUnit?.[fall.unit] || null;
  return {
    ...fall,
    originalCaseId,
    originalCase,
    solutionNote: unterricht?.note || null,
    solutionSections: unterricht?.sections || [],
  };
}
