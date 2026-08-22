export const persgQuelle = {
  id: "persg-tag-1",
  title: "1. Tag PersG",
  stand: "31.07.2026",
  pages: 14,
  label: "Unterrichtsnotizen · 1. Unterrichtstag Personengesellschaften",
};

export const persgBereiche = [
  { id: "alle", label: "Alle Oberthemen" },
  { id: "Grundlagen", label: "Mitunternehmerschaft" },
  { id: "Gewinn", label: "Gewinnermittlung & -verteilung" },
  { id: "BV", label: "Betriebsvermögen" },
  { id: "SBV", label: "Sonderbetriebsvermögen" },
];
export const persgBereichName = Object.fromEntries(persgBereiche.map((x) => [x.id, x.label]));

export const persgSeitenplan = [
  { page: 1, moduleId: 1, topic: "Mitunternehmerschaft und gewerbliche Einkünfte" },
  { page: 2, moduleId: 2, topic: "Abfärbung und gewerbliche Prägung" },
  { page: 3, moduleId: 3, topic: "Mitunternehmerinitiative und Mitunternehmerrisiko" },
  { page: 4, moduleId: 4, topic: "Zweistufige Gewinnermittlung" },
  { page: 5, moduleId: 5, topic: "ABC-OHG: Sachverhalt und Gewinnverteilung" },
  { page: 6, moduleId: 5, topic: "ABC-OHG: Sachverhalt, BGA und Aufgaben" },
  { page: 7, moduleId: 5, topic: "ABC-OHG: Lösung Gewinnermittlung und Gewinnverteilung" },
  { page: 8, moduleId: 6, topic: "Kapitalkonten, Betriebsvermögen und gesamthänderisches Privatvermögen" },
  { page: 9, moduleId: 6, topic: "Gesamthänderisches Privatvermögen und Einstieg Sonderbetriebsvermögen" },
  { page: 10, moduleId: 7, topic: "Definition SBV I / SBV II und Ausgangsfall" },
  { page: 11, moduleId: 7, topic: "Buchungen, Sonderbilanz und Sonder-GuV" },
  { page: 12, moduleId: 8, topic: "Korrespondierende Bilanzierung und Bilanzierungskonkurrenz" },
  { page: 13, moduleId: 8, topic: "Bilanzierungskonkurrenzen und Durchgriffsbeispiele" },
  { page: 14, moduleId: 8, topic: "Vorrang des SBV und Ausnahme MU-BAS" },
];

export const persgModule = [
  {
    id: 1, area: "Grundlagen", title: "Mitunternehmerschaft: Grundtatbestand des § 15 EStG",
    law: "§ 15 Abs. 1 S. 1 Nr. 2 S. 1 EStG · § 15 Abs. 3 EStG", difficulty: "Grundlage", minutes: 28, sourcePages: [1], visual: "grundtatbestand",
    intro: [
      "Die Unterrichtsnotiz startet mit dem Mitunternehmerbegriff. Für die Klausur werden drei Prüfungspunkte festgehalten: Personengesellschaft, gewerbliche Einkünfte und die Stellung des Gesellschafters als Mitunternehmer.",
      "Für die gewerblichen Einkünfte werden drei Zugänge nebeneinandergestellt: originär gewerbliche Einkünfte, gewerbliche Prägung sowie Infektions-/Abfärbetatbestände.",
    ],
    goals: ["den Tatbestand des § 15 Abs. 1 S. 1 Nr. 2 EStG in drei Schritten aufbauen", "OHG und KG als klausurtypische Personengesellschaften erkennen", "originäre Gewerblichkeit, Prägung und Abfärbung als getrennte Wege einordnen", "die Mitunternehmerstellung als eigenen Prüfungspunkt behandeln"],
    scheme: ["Personengesellschaft feststellen – in der Klausur insbesondere OHG oder KG.", "Gewerbliche Einkünfte der Gesellschaft begründen: originär, geprägt oder abgefärbt.", "Für jeden Gesellschafter die Mitunternehmerstellung prüfen.", "Erst danach Gewinnanteile und Sondervergütungen dem § 15 Abs. 1 S. 1 Nr. 2 EStG zuordnen."],
    normchain: ["§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§ 15 Abs. 3 Nr. 1 EStG", "§ 15 Abs. 3 Nr. 2 EStG"],
    merksatz: "Personengesellschaft + gewerbliche Einkünfte + Mitunternehmerstellung: Diese drei Punkte stehen am Anfang des PersG-Teils.",
    traps: ["Mitunternehmerstellung nur aus der zivilrechtlichen Gesellschafterstellung ableiten.", "Abfärbung und gewerbliche Prägung vermischen."],
  },
  {
    id: 2, area: "Grundlagen", title: "Abfärbung und gewerblich geprägte Personengesellschaft",
    law: "§ 15 Abs. 3 Nr. 1, Nr. 2 EStG", difficulty: "Klausurklassiker", minutes: 34, sourcePages: [1, 2], visual: "abfaerbung",
    intro: [
      "Die Quelle trennt horizontale und vertikale Abfärbung. Bei horizontaler Abfärbung liegen vermögensverwaltende und gewerbliche Tätigkeiten in derselben Gesellschaft; die Unterlage nennt hierfür die Bagatellgrenze von höchstens 3 % und höchstens 24.500 € Nettoumsatz des gewerblichen Anteils.",
      "Bei vertikaler Abfärbung bestehen Ober- und Untergesellschaft. Die Obergesellschaft ist vermögensverwaltend tätig, die Untergesellschaft erzielt gewerbliche Einkünfte; die Bagatellregelung gilt nach der Quelle hier nicht.",
      "Daneben wird die gewerblich geprägte Personengesellschaft anhand der GmbH & Co. KG abgegrenzt: Entscheidend ist, wer persönlich haftet und wer zur Geschäftsführung befugt ist.",
    ],
    goals: ["horizontale und vertikale Abfärbung unterscheiden", "die in der Quelle genannte Bagatellgrenze nur beim horizontalen Fall anwenden", "die Voraussetzungen der gewerblichen Prägung anhand der Geschäftsführungsbefugnis prüfen", "die drei Sachverhaltsvarianten der GmbH & Co. KG sicher unterscheiden"],
    scheme: ["Zunächst klären: Eine Gesellschaft mit zwei Tätigkeiten oder Ober-/Untergesellschaft?", "Horizontal: gewerbliche Teilaktivität und Bagatellgrenze prüfen.", "Vertikal: gewerbliche Beteiligungseinkünfte der Obergesellschaft erfassen; keine Bagatellregelung nach der Quelle.", "Prägung: persönlich haftende Gesellschafter und Geschäftsführungsbefugnis feststellen.", "Ist neben der Komplementär-GmbH ein Gesellschafter zur Geschäftsführung berechtigt, scheidet die Prägung in der gezeigten Variante aus; ein Nichtgesellschafter als weiterer Geschäftsführer ist unschädlich."],
    normchain: ["§ 15 Abs. 3 Nr. 1 EStG", "§ 15 Abs. 3 Nr. 2 EStG"],
    examples: [
      { label: "Sachverhalt 1", text: "Die KG erzielt Einkünfte aus Vermögensverwaltung. A ist Gesellschafter und Geschäftsführer der Komplementär-GmbH; die GmbH führt die Geschäfte der KG.", result: "Gewerblich geprägt." },
      { label: "Sachverhalt 2", text: "Wie zuvor, aber neben der GmbH ist auch B zur Geschäftsführung berechtigt.", result: "Nicht gewerblich geprägt." },
      { label: "Sachverhalt 4", text: "Wie zuvor, aber neben der GmbH ist auch C zur Geschäftsführung berechtigt; C ist in der dargestellten Variante kein Gesellschafter.", result: "Gewerblich geprägt." },
    ],
    merksatz: "Horizontal kann die Bagatellgrenze helfen; vertikal nach der Quelle nicht. Bei der Prägung immer Haftung und Geschäftsführung zusammendenken.",
    traps: ["Die Bagatellgrenze auf vertikale Abfärbung übertragen.", "Jede zusätzliche Geschäftsführungsbefugnis automatisch als schädlich behandeln."],
  },
  {
    id: 3, area: "Grundlagen", title: "Mitunternehmerstellung: Risiko und Initiative",
    law: "§ 15 Abs. 1 S. 1 Nr. 2 EStG · H 15.8 EStH", difficulty: "Kernschema", minutes: 34, sourcePages: [3], visual: "mitunternehmer",
    intro: ["Die Mitunternehmereigenschaft wird in der Mitschrift über zwei Seiten des Typusbegriffs aufgebaut: Mitunternehmerrisiko und Mitunternehmerinitiative. Beide Merkmale müssen vorliegen, können aber unterschiedlich stark ausgeprägt sein.", "Beim Risiko nennt die Quelle insbesondere Beteiligung am Gewinn/Verlust, Beteiligung an stillen Reserven als Hauptkriterium sowie Haftung. Für die Initiative stehen Geschäftsführungs- und Vertretungsbefugnisse sowie mindestens die Rechte eines Kommanditisten nach HGB."],
    goals: ["Mitunternehmerrisiko anhand der drei Quellenmerkmale prüfen", "Mitunternehmerinitiative anhand Geschäftsführung, Vertretung und Mindestkontrollrechten prüfen", "eine Gesamtwürdigung vornehmen, statt starre Einzelmerkmale zu zählen", "Folgen eines zivilrechtlichen Gesellschafters ohne Mitunternehmerstellung den anderen Einkunftsarten zuordnen"],
    scheme: ["Mitunternehmerrisiko: Gewinn/Verlust, stille Reserven, Haftung.", "Mitunternehmerinitiative: Geschäftsführung/Vertretung und zumindest die Mindestrechte eines Kommanditisten.", "Beide Merkmalsgruppen müssen vorhanden sein; die Intensität darf unterschiedlich sein.", "Fehlt die Mitunternehmerstellung, Leistungen des Gesellschafters außerhalb § 15 Abs. 1 S. 1 Nr. 2 EStG einordnen."],
    normchain: ["§ 15 Abs. 1 S. 1 Nr. 2 EStG", "H 15.8 EStH", "§ 19 EStG", "§ 20 EStG", "§ 21 EStG"],
    example: { title: "Freiberuflerpraxis – BFH vom 03.11.2015, VIII R 63/13", facts: "Die Quelle zeigt eine Ärztegemeinschaft mit umsatzabhängiger Vergütung, fehlender Beteiligung an den stillen Reserven und eingeschränkter Geschäftsführungsbefugnis.", solution: ["Gesamtwürdigung des Typusbegriffs vornehmen.", "Bei fehlender bzw. zu schwacher Mitunternehmerinitiative und fehlendem Mitunternehmerrisiko keine Mitunternehmerstellung."], result: "Nicht jeder zivilrechtliche Gesellschafter einer Personengesellschaft ist automatisch Mitunternehmer." },
    followUp: ["Arbeitskraft → § 19 EStG", "Vermietung → § 21 EStG", "Darlehen → § 20 EStG"],
    merksatz: "Risiko und Initiative müssen beide da sein – die Ausprägung kann sich gegenseitig ergänzen, aber nicht vollständig ersetzen.",
  },
  {
    id: 4, area: "Gewinn", title: "Zweistufige Gewinnermittlung bei Mitunternehmerschaften",
    law: "§ 15 Abs. 1 S. 1 Nr. 2 S. 1 EStG · § 60 Abs. 2 EStDV", difficulty: "Prüfungsschema", minutes: 38, sourcePages: [4], visual: "gewinnstufen",
    intro: ["Die Unterrichtsnotiz stellt die Gewinnermittlung zweistufig dar. Stufe I ist die Gesellschaftsebene mit Gesamthandsbilanz, Gewinnverteilung sowie gesellschaftsbezogenen Korrekturen. Stufe II ist die Gesellschafterebene mit Ergänzungsbilanz, Sonderbilanz und außerbilanziellen Sonderkorrekturen.", "Das Ergebnis sind zunächst die Gewinnanteile der Mitunternehmer und schließlich der Gewinn der Mitunternehmerschaft als Summe der beiden Ebenen."],
    goals: ["Stufe I Gesellschaft und Stufe II Gesellschafter strikt trennen", "Vorabgewinn, Kapitalverzinsung, Haftungs- und Tätigkeitsvergütungen in der Gewinnverteilung abbilden", "Ergänzungs- und Sonderbilanzen an der richtigen Stelle ergänzen", "außerbilanzielle Korrekturen der jeweiligen Ebene zuordnen"],
    scheme: ["Gesamthandsgewinn laut Bilanz übernehmen und Vorwegewinne/Gewinnverteilung abbilden.", "Gesellschafterindividuelle Wertkorrekturen der Ergänzungsbilanz ergänzen.", "Gewinn laut Sonderbilanz einschließlich Sondervergütungen und Sonderbetriebsausgaben erfassen.", "Außerbilanzielle Korrekturen der Sonderbilanz ergänzen.", "Gewinnanteile der Mitunternehmer und Gesamtgewinn der Mitunternehmerschaft zusammenführen."],
    normchain: ["§ 15 Abs. 1 S. 1 Nr. 2 S. 1 1. HS EStG", "§ 15 Abs. 1 S. 1 Nr. 2 S. 1 2. HS EStG", "§ 60 Abs. 2 S. 1 EStDV", "§ 4 Abs. 5 EStG", "§ 79 EStDV"],
    merksatz: "Stufe I gehört der Gesellschaft, Stufe II den Gesellschaftern – erst die Summe ergibt den steuerlichen Mitunternehmergewinn.",
  },
  {
    id: 5, area: "Gewinn", title: "ABC-OHG: Gewinn, Gewinnverteilung und Kapitalkonten",
    law: "§ 4 Abs. 4 EStG · § 15 Abs. 1 S. 1 Nr. 2 EStG", difficulty: "Originalfall", minutes: 48, sourcePages: [5, 6, 7], visual: "abc", originalCaseId: "persg-fall-1",
    intro: ["Der Originalfall verbindet die Korrektur des Jahresüberschusses mit gesellschaftsvertraglichen Vorabgewinnen und der Entwicklung zweier Kapitalkonten je Gesellschafter.", "Die Erneuerung sämtlicher Fenster und Türen wird in der Lösung als Erhaltungsaufwand behandelt. Dadurch wird die in der Handelsbilanz aktivierte BGA korrigiert und der Jahresüberschuss von 328.000 € um 108.000 € auf 220.000 € reduziert."],
    goals: ["Erhaltungsaufwand von einem aktivierten Wirtschaftsgut abgrenzen", "Kapitalverzinsung, Geschäftsführungsvorab und Haftungsvergütung nacheinander verteilen", "Restgewinn nach Beteiligungsverhältnis verteilen", "Kapitalkonten I und II zum 31.12. fortentwickeln"],
    scheme: ["Jahresüberschuss um die fehlerhafte Aktivierung korrigieren.", "Vorweg: Kapitalkonten II zu 8 % verzinsen.", "Vorweg: Geschäftsführungsvergütung laut Gesellschaftsvertrag verteilen.", "Vorweg: Haftungsvergütung des A berücksichtigen.", "Restgewinn zu je 1/3 verteilen.", "Gewinnanteile und Entnahmen auf Kapitalkonto II fortschreiben; Kapitalkonto I bleibt unverändert."],
    normchain: ["§ 4 Abs. 4 EStG", "§ 15 Abs. 1 S. 1 Nr. 2 S. 1 EStG", "§ 60 Abs. 2 EStDV"],
    merksatz: "Erst den Gesamtgewinn richtigstellen, dann verteilen – und erst danach die Kapitalkonten fortentwickeln.",
  },
  {
    id: 6, area: "BV", title: "Betriebsvermögen der Mitunternehmerschaft und gesamthänderisches Privatvermögen",
    law: "§ 5 Abs. 1 EStG · § 39 Abs. 1 AO · H 4.2 Abs. 11 EStH", difficulty: "Systematik", minutes: 36, sourcePages: [8, 9], visual: "betriebsvermoegen",
    intro: ["Die Quelle trennt das Vermögen der Mitunternehmerschaft in Gesamthandsvermögen der Gesellschaft und Vermögen der Gesellschafter. Steuerlich wird die Gesamthand um Sonderbetriebsvermögen I und II erweitert; Privatvermögen bleibt grundsätzlich außerhalb.", "Als Besonderheit zeigt die Mitschrift das gesamthänderische Privatvermögen: Gehört ein Wirtschaftsgut zivilrechtlich der Gesellschaft, dient aber ausschließlich der privaten Lebensführung eines oder mehrerer Mitunternehmer, kann es steuerlich notwendiges Privatvermögen sein."],
    goals: ["Gesamthandsvermögen, Sonderbetriebsvermögen und Privatvermögen räumlich trennen", "zivilrechtliche Zurechnung und steuerliche Zuordnung auseinanderhalten", "die Ausnahme des gesamthänderischen Privatvermögens erkennen", "HB- und StB-Folgen in der gezeigten Grundstückskonstellation gegenüberstellen"],
    scheme: ["Zivilrechtliches Eigentum und Gesamthandszugehörigkeit bestimmen.", "Steuerlich prüfen, ob das Wirtschaftsgut betrieblichen Zwecken der Gesellschaft oder eines Mitunternehmers dient.", "Dient das Wirtschaftsgut ausschließlich der privaten Lebensführung, notwendiges Privatvermögen prüfen.", "Handelsbilanz und Steuerbilanz getrennt buchen; steuerliche Entnahme-/Privatfolgen abbilden."],
    normchain: ["§ 246 Abs. 1 HGB", "§ 247 Abs. 2 HGB", "§ 253 Abs. 1 HGB", "§ 39 Abs. 1 AO", "H 4.2 Abs. 11 EStH"],
    example: { title: "A&B-OHG – Grundstück zur privaten Wohnnutzung", facts: "Die OHG erwirbt ein bebautes Grundstück. Grund und Boden kosten 100.000 €, das Gebäude 200.000 € (50 Jahre Nutzungsdauer). Das Grundstück wird A mit Zustimmung des B dauerhaft und unentgeltlich zur privaten Wohnnutzung mit seiner Familie überlassen.", solution: ["Handelsrechtlich bleibt das Grundstück Vermögen der OHG.", "Steuerlich wird wegen der ausschließlichen privaten Nutzung die Zuordnung zum notwendigen Privatvermögen geprüft; die Mitschrift stellt die entsprechenden Privatentnahme-/Zurechnungsfolgen gegenüber."], result: "Zivilrechtliche Gesamthand und steuerliches Betriebsvermögen können auseinanderfallen." },
    merksatz: "Gesamthand ist nicht automatisch Betriebsvermögen: Die ausschließliche Privatnutzung kann gesamthänderisches Privatvermögen erzeugen.",
  },
  {
    id: 7, area: "SBV", title: "Sonderbetriebsvermögen I und II: Definition, Buchung und Sonderbilanz",
    law: "R 4.2 Abs. 2 EStR · § 15 Abs. 1 S. 1 Nr. 2 EStG", difficulty: "Kernstoff", minutes: 46, sourcePages: [9, 10, 11], visual: "sbv",
    intro: ["Die Mitschrift definiert Sonderbetriebsvermögen I als Wirtschaftsgüter, die unmittelbar dem Betrieb der Personengesellschaft dienen. Genannt werden entgeltliche oder unentgeltliche Überlassung, Darlehen an die Gesellschaft und die Finanzierung von SBV I.", "Sonderbetriebsvermögen II dient der Begründung oder Stärkung der Gesellschafterstellung. Die Quelle nennt insbesondere die Finanzierung des Gesellschaftsanteils und Beteiligungen an der Komplementär-GmbH; für die gezeigte 10-%-Konstellation wird notwendiges SBV II hervorgehoben."],
    goals: ["SBV I und SBV II anhand ihres Funktionszusammenhangs unterscheiden", "Grundstück, Darlehen und Finanzierung richtig zuordnen", "Sonderbilanz und Sonder-GuV eines Gesellschafters aufstellen", "Sonderbetriebserträge und -aufwendungen in den Mitunternehmergewinn einbeziehen"],
    scheme: ["Wirtschaftsgut dem Gesellschafter zurechnen.", "Dient es unmittelbar dem Betrieb der Personengesellschaft? → SBV I.", "Dient es der Begründung oder Stärkung der Gesellschafterstellung? → SBV II.", "Zugehörige Schulden/Finanzierungen spiegelbildlich dem Sonderbereich zuordnen.", "Sonderbilanz und Sonder-GuV erstellen und über § 15 Abs. 1 S. 1 Nr. 2 EStG in den Gesamtgewinn einbeziehen."],
    normchain: ["R 4.2 Abs. 2 EStR", "H 4.2 Abs. 2 EStH", "§ 15 Abs. 1 S. 1 Nr. 2 EStG"],
    example: { title: "A vermietet ein Grundstück an die A&B-OHG", facts: "A verpachtet ab 01.07.2025 ein bebautes Grundstück an die OHG für monatlich 3.000 € zuzüglich 19 % USt. Die Anschaffungskosten betragen 400.000 €, davon 80 % Gebäude; die Finanzierung erfolgt über ein Bankdarlehen von 300.000 € zu 6 % p.a.", solution: ["Das Grundstück dient unmittelbar dem Betrieb der OHG und ist notwendiges SBV I des A.", "Die Quelle bildet für sechs Monate 18.000 € Mietertrag, 3.200 € AfA und 9.000 € Zinsaufwand ab.", "Der Sondergewinn des A beträgt 5.800 €."], result: "Sonder-GuV A: 18.000 € Mietertrag ./. 3.200 € AfA ./. 9.000 € Zinsaufwand = 5.800 € Gewinn." },
    merksatz: "SBV I fragt nach dem Betrieb der Gesellschaft; SBV II nach der Stellung des Gesellschafters.",
  },
  {
    id: 8, area: "SBV", title: "Korrespondierende Bilanzierung und Bilanzierungskonkurrenzen",
    law: "R 4.2 EStR · H 4.2 EStH · § 39 Abs. 2 Nr. 2 AO", difficulty: "Fortgeschritten", minutes: 42, sourcePages: [11, 12, 13, 14], visual: "konkurrenz",
    intro: ["Die letzten Seiten behandeln Forderungen des Gesellschafters gegen die Gesellschaft und Bilanzierungskonkurrenzen. Die Mitschrift arbeitet mit korrespondierender Bilanzierung: Forderung und Verbindlichkeit werden im Sonder- und Gesamthandsbereich aufeinander abgestimmt.", "Für Konkurrenzfälle wird mehrfach der Vorrang des Sonderbetriebsvermögens herausgestellt – auch bei Zwischenschaltung weiterer Gesellschaften. Die Schlussseite fasst als einzige genannte Ausnahme die MU-Betriebsaufspaltung zusammen."],
    goals: ["Gesellschafterforderungen korrespondierend zur Gesellschaftsverbindlichkeit abbilden", "Teilwertabschreibungen auf gesellschaftsbezogene Forderungen nach der Quellenlogik beurteilen", "SBV I bei mittelbaren Überlassungsstrukturen erkennen", "Vorrang des SBV und die in der Quelle genannte Ausnahme MU-BAS merken"],
    scheme: ["Forderung des Gesellschafters und Verbindlichkeit der Gesellschaft auf Zusammenhang prüfen.", "Korrespondierende Wertansätze in Sonderbilanz und Gesamthandsbilanz herstellen.", "Bei Überlassungsketten den wirtschaftlichen Funktionszusammenhang bis zur Mitunternehmerschaft verfolgen.", "Bei Bilanzierungskonkurrenz grundsätzlich SBV-Vorrang anwenden.", "Als in der Quelle ausdrücklich genannte Ausnahme die MU-Betriebsaufspaltung prüfen."],
    normchain: ["R 4.2 EStR", "H 4.2 EStH", "§ 39 Abs. 2 Nr. 2 S. 1 AO", "§ 15 EStG"],
    examples: [
      { label: "Korrespondierende Forderung", text: "A reicht der A&B-OHG ein Darlehen über 100.000 €. Die Quelle stellt Forderung im Sonderbereich und Darlehensverbindlichkeit der OHG korrespondierend gegenüber.", result: "Funktionaler Eigenkapitalzusammenhang; eine spätere Teilwertabschreibung wird in der Mitschrift verneint." },
      { label: "Zwischenschaltung", text: "Ein Parkplatz wird über eine Verwaltungs-GbR bzw. weitere Zwischengesellschaften an die A&B-OHG überlassen.", result: "Die Zwischenschaltung beseitigt den SBV-I-Zusammenhang nach der Quellenlogik nicht." },
    ],
    merksatz: "Bilanzierungskonkurrenz: SBV hat Vorrang. Einzige in der Quelle hervorgehobene Ausnahme: MU-BAS.",
  },
];

export const persgFaelle = [{
  id: "persg-fall-1", nr: 1, title: "ABC-OHG: Gewinnermittlung, Gewinnverteilung und Kapitalkonten", sourcePages: [5, 6, 7, 8], moduleIds: [4, 5, 6], law: "§ 4 Abs. 4 EStG · § 15 Abs. 1 S. 1 Nr. 2 EStG",
  facts: ["Die ABC OHG wurde am 02.01.2001 gegründet. A, B und C sind zu je 1/3 am Gewinn/Verlust und an den stillen Reserven beteiligt. Der Jahresüberschuss 2025 beträgt 328.000 €.", "Kapitalkonto I zum 01.01.2025: A 100.000 €, B 100.000 €, C 100.000 €. Kapitalkonto II: A 500.000 €, B 300.000 €, C 200.000 €. Entnahmen 2025: A 30.000 €, B 60.000 €, C 0 €.", "Der Gesellschaftsvertrag sieht 8 % Verzinsung der Kapitalkonten II, 24.000 € Haftungsvorab für A, Geschäftsführungsvorab von 10 % für A und je 5 % für B/C sowie Verteilung des Restgewinns zu je 1/3 vor.", "Die OHG hat Fenster und Türen für netto 120.000 € erneuern lassen und als BGA aktiviert; zum 31.12.2025 stehen nach 12.000 € Abschreibung 108.000 € in der Bilanz."],
  tasks: ["Gewinn der ABC OHG ermitteln.", "Gewinnverteilung vornehmen.", "Kapitalkonten der Gesellschafter fortentwickeln."],
  solution: ["Fenster und Türen: Erhaltungsaufwand. Die aktivierte BGA von 108.000 € wird korrigiert; aus 328.000 € Jahresüberschuss werden 220.000 € steuerlicher Gewinn.", "Kapitalkonten-II-Verzinsung: A 40.000 €, B 24.000 €, C 16.000 € = 80.000 €.", "Geschäftsführungsvorab aus 220.000 €: A 22.000 €, B 11.000 €, C 11.000 € = 44.000 €.", "Haftungsvorab A: 24.000 €. Danach verbleiben 72.000 € Restgewinn; je 24.000 € für A, B und C.", "Gewinnanteile: A 110.000 €, B 59.000 €, C 51.000 €; Summe 220.000 €.", "Kapitalkonto I bleibt für alle bei 100.000 €. Kapitalkonto II 31.12.2025: A 580.000 €, B 299.000 €, C 251.000 €."],
  result: "Steuerlicher Gewinn 220.000 €; Gewinnanteile A 110.000 €, B 59.000 €, C 51.000 €; Kapitalkonto II zum 31.12.: 580.000 € / 299.000 € / 251.000 €.",
}];

export const persgSchemata = [
  { id: "mitunternehmerschaft", title: "Mitunternehmerschaft", law: "§ 15 Abs. 1 S. 1 Nr. 2 EStG", moduleIds: [1, 2, 3], visual: "grundtatbestand" },
  { id: "abfaerbung", title: "Abfärbung & Prägung", law: "§ 15 Abs. 3 Nr. 1, Nr. 2 EStG", moduleIds: [2], visual: "abfaerbung" },
  { id: "mu-eigenschaft", title: "Mitunternehmerstellung", law: "§ 15 Abs. 1 S. 1 Nr. 2 EStG · H 15.8 EStH", moduleIds: [3], visual: "mitunternehmer" },
  { id: "gewinnstufen", title: "Zweistufige Gewinnermittlung", law: "§ 15 Abs. 1 S. 1 Nr. 2 EStG", moduleIds: [4, 5], visual: "gewinnstufen" },
  { id: "betriebsvermoegen", title: "Betriebsvermögen der Mitunternehmerschaft", law: "H 4.2 EStH", moduleIds: [6], visual: "betriebsvermoegen" },
  { id: "sbv", title: "Sonderbetriebsvermögen I / II", law: "R 4.2 Abs. 2 EStR", moduleIds: [7], visual: "sbv" },
  { id: "konkurrenz", title: "Bilanzierungskonkurrenz", law: "R 4.2 EStR", moduleIds: [8], visual: "konkurrenz" },
];

export const persgQuizfragen = [
  { q: "Welche zwei Merkmalsgruppen bestimmen die Mitunternehmerstellung?", options: ["Risiko und Initiative", "Haftung und Umsatz", "Kapital und Gewerbesteuer"], answer: 0, explanation: "Die Quelle stellt Mitunternehmerrisiko und Mitunternehmerinitiative gegenüber." },
  { q: "Gilt die in der Quelle genannte 3-%/24.500-€-Bagatellgrenze auch bei vertikaler Abfärbung?", options: ["Ja", "Nein", "Nur bei Verlusten"], answer: 1, explanation: "Die Zusammenfassungsfolie sagt für die vertikale Abfärbung ausdrücklich: Bagatellregelung gilt nicht." },
  { q: "Was ist auf Stufe II der zweistufigen Gewinnermittlung zu berücksichtigen?", options: ["Nur die Gesamthandsbilanz", "Ergänzungs- und Sonderbereich der Gesellschafter", "Nur die Gewerbesteuer"], answer: 1, explanation: "Stufe II ist die Gesellschafterebene." },
  { q: "Wie hoch ist der korrigierte Gewinn der ABC-OHG im Originalfall?", options: ["328.000 €", "220.000 €", "108.000 €"], answer: 1, explanation: "Die aktivierte BGA von 108.000 € wird als Erhaltungsaufwand korrigiert." },
  { q: "Wofür steht SBV I?", options: ["Wirtschaftsgüter, die unmittelbar dem Betrieb der PersG dienen", "Nur Beteiligungen an Kapitalgesellschaften", "Privatvermögen des Gesellschafters"], answer: 0, explanation: "Das ist die Definition auf Seite 10 der Quelle." },
  { q: "Welche Vorrangregel schließt den 1. Unterrichtstag ab?", options: ["Privatvermögen hat Vorrang", "SBV hat stets Vorrang; Ausnahme MU-BAS", "Handelsbilanz hat stets Vorrang"], answer: 1, explanation: "Genau diese zwei Punkte stehen auf Seite 14." },
];
