/* Skript Grunderwerbsteuer (K1) – Dr. Stephan Vossel, Stand Januar 2026.

   Wortlautgetreue Übernahme des Lehrgangsskripts „Vorbereitung auf die
   Steuerberaterprüfung · Grunderwerbsteuer“. Gegliedert wie die Quelle in neun
   Abschnitte; jeder Abschnitt steht als eigener Eintrag.

   Die Beispiele der Quelle stehen mit ihrem eigenen Label („Beispiel“,
   „Lösung“) als Absatz, die Schaubilder des Skripts sind als Tabelle
   wiedergegeben. Die im PDF durch den Blocksatz entstandenen Trennstriche
   ("inlän- dischem") sind zusammengeführt; das ist ein Artefakt der
   Textextraktion und kein Merkmal der Quelle.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen. */

export const grestSkriptQuelle = {
  reihe: "Vorbereitung auf die Steuerberaterprüfung · Grunderwerbsteuer · Dr. Stephan Vossel",
  stand: "Stand 01/2026",
  verfasser: "Dr. Stephan Vossel, Steuerberater",
  didaktik: [
    "Die Grunderwerbsteuer ist eine Verkehrsteuer und folgt deshalb einem anderen Denkmuster als das Ertragsteuerrecht: Sie knüpft nicht an das wirtschaftliche Eigentum an, sondern an den Wechsel der Rechtsträgerzuordnung eines inländischen Grundstücks. Wer diesen Satz verinnerlicht hat, erkennt sofort, warum Einlage und Entnahme beim Einzelunternehmer nicht steuerbar sind, der Verkauf an die eigene Ein-Mann-GmbH aber schon.",
    "Das Prüfungsschema des Skripts hat fünf Stufen – Steuerbarkeit, Steuerpflicht beziehungsweise Befreiung, Bemessungsgrundlage, Steuersatz und Steuerberechnung sowie Steuerschuldner, Entstehung und Fälligkeit. Es ist bewusst parallel zum umsatzsteuerlichen Aufbau gestaltet; das Skript weist aber ausdrücklich darauf hin, dass das GrEStG seit 1983 selbständig ist und keine Verweise mehr auf das UStG enthält.",
    "Anders als in den Ertragsteuern sind Personengesellschaften hier **keine** transparenten Gebilde, sondern eigene Rechtsträger. Diese Abweichung trägt die gesamten §§ 5 und 6 GrEStG und ist die häufigste Fehlerquelle für Kandidatinnen und Kandidaten, die aus dem Ertragsteuerrecht kommen.",
  ],
};

const VERFASSER = "Dr. Stephan Vossel, Steuerberater";
const RECHTSSTAND = "Stand 01/2026";

export const grestSkript = [
  {
    id: "grest-01",
    kapitel: "1",
    romisch: "I",
    title: "I. Charakterisierung der Grunderwerbsteuer",
    thema: "Warum die Grunderwerbsteuer an den Wechsel der Rechtsträgerzuordnung anknüpft und nicht an das wirtschaftliche Eigentum – und warum Personengesellschaften hier eigene Rechtsträger sind",
    rechtsstand: RECHTSSTAND,
    quelle: "Skript Grunderwerbsteuer (Vossel), Abschnitt I · Stand 01/2026",
    verfasser: VERFASSER,
    normen: ["§ 1 Abs. 1 bis Abs. 3a GrEStG", "§ 2 GrEStG", "§ 6a GrEStG", "BFH vom 20.12.1972, I R 141/74, BStBl. II 1973, S. 365", "BFH vom 21.08.2019, II R 19/19, BStBl. II 2020, S. 337"],
    themen: ["Verkehrsteuer", "Rechtsträger", "Rechtsträgerwechsel", "Personengesellschaft", "Zivilrechtliche Anknüpfung", "Verhältnis zur Umsatzsteuer"],
    bloecke: [
      { text: "Die Grunderwerbsteuer ist eine Verkehrsteuer, welche an die Übertragung von inländischem Grundbesitz anknüpft. Der Grunderwerbsteuer unterliegen somit bestimmte – in § 1 Abs. 1 bis Abs. 3a GrEStG abschließend genannte – Rechtsvorgänge, die auf den unmittelbaren oder mittelbaren Erwerb von Grundstücken i. S. d. § 2 GrEStG gerichtet sind." },
      { text: "Der Erwerbsvorgang im Sinne des Grunderwerbsteuergesetzes setzt dabei mindestens zwei beteiligte Parteien voraus, zum einen den bisherigen Eigentümer des Grundstücks und zum anderen den Erwerber. An dieser Stelle ist jedoch bereits darauf hinzuweisen, dass ein Abstellen auf die Eigentümerstellung im zivilrechtlichen oder wirtschaftlichen Sinne weniger eine Rolle spielt, sondern die grunderwerbsteuerliche Zurechnung eines Grundstücks zu einem Rechtsträger. Grundvoraussetzung für einen steuerbaren Verkehrsvorgang ist somit der Wechsel der Rechtsträgerzuordnung eines Grundstücks." },
      { text: "Sind nicht verschiedene Rechtsträger involviert, liegt kein grunderwerbsteuerbarer Sachverhalt vor. Aus diesem Grunde fällt beispielsweise die Einlage eines Grundstücks aus dem Privatvermögen in das Betriebsvermögen eines Einzelunternehmers nicht unter das Grunderwerbsteuergesetz. Dasselbe gilt umgekehrt auch für die Entnahme eines Grundstücks aus dem betrieblichen in den privaten Bereich. Demhingegen wird ein Tatbestand des Grunderwerbsteuergesetzes verwirklicht, wenn der Grundstückswechsel zwischen einer natürlichen Person und einer juristischen Person stattfindet, auch wenn die natürliche Person zugleich alle Anteile an der juristischen Person hält." },
      { text: "Das Grunderwerbsteuergesetz orientiert sich überwiegend an zivilrechtlichen Überlegungen. Dies betrifft beispielsweise den relevanten steuerbaren Tatbestand, welcher im Gegensatz zum Ertragsteuerrecht nicht an den Übergang des wirtschaftlichen Eigentums anknüpft." },
      { typ: "titel", text: "Rechtsträger" },
      { text: "Zu den relevanten Parteien der Grundstücksübertragung (den sog. Rechtsträgern) zählen auch bestimmte Gesamthandsgemeinschaften. Auch Personengesellschaften sind grunderwerbsteuerlich als selbständige relevante Rechtsträger zu behandeln und nicht wie im Ertragsteuerrecht als transparent anzusehen." },
      { text: "Beispiel: An der ABC-OHG sind die natürlichen Personen A, B und C beteiligt. A veräußert ein inländisches Grundstück, welches bislang zu seinem Privatvermögen gehörte, an die ABC-OHG." },
      { text: "Lösung: Es liegt ein grunderwerbsteuerlich relevanter Vorgang vor, da ein inländisches Grundstück durch einen Rechtsträger (ABC-OHG) von einem anderen Rechtsträger (A) erworben wurde." },
      { text: "Gleiches gilt für BGB-Gesellschaften, nichtrechtsfähige Vereine, Europäische wirtschaftliche Interessenvertretungen sowie Partnerschaftsgesellschaften. Kein Rechtsträger i. S. d. Grunderwerbsteuergesetzes ist hingegen die (typische und atypische) stille Gesellschaft. Bei Erbengemeinschaften ist zu differenzieren, denn diese sind nur im Hinblick auf Außengeschäfte als grunderwerbsteuerliche Rechtsträger einzustufen (vgl. BFH v. 20.12.1972, I R 141/74, BStBl. II 1973, S. 365)." },
      { typ: "titel", text: "Verhältnis zur Umsatzsteuer" },
      { text: "In Wissenschaft und Praxis wird verschiedentlich das Verhältnis von Grunderwerbsteuer und Umsatzsteuer diskutiert. Dies liegt u. a. darin begründet, dass das grundlegende Prüfungsschema in beiden Steuerarten weitgehende Parallelen aufweist. Gleichwohl ist darauf hinzuweisen, dass das Grunderwerbsteuergesetz seit 1983 als selbständig anzusehen ist und keine weitergehenden Verweise auf das Umsatzsteuergesetz mehr beinhaltet. Dies unterstrich auch der BFH in seinen Urteilen zu § 6a GrEStG (vgl. beispielsweise BFH v. 21.08.2019, II R 19/19, BStBl. II 2020, S. 337)." },
    ],
  },
  {
    id: "grest-02",
    kapitel: "2",
    romisch: "II",
    title: "II. Prüfungsschema",
    thema: "Das fünfstufige Prüfungsschema der Quelle – Steuerbarkeit, Steuerpflicht, Bemessungsgrundlage, Steuersatz, Steuerschuldner – mit allen Tatbeständen des § 1 GrEStG und den Befreiungen der §§ 3 bis 7 GrEStG im Überblick",
    rechtsstand: RECHTSSTAND,
    quelle: "Skript Grunderwerbsteuer (Vossel), Abschnitt II · Stand 01/2026",
    verfasser: VERFASSER,
    normen: [
      "§ 1 Abs. 1 Nr. 1 bis 7, Abs. 2, Abs. 2a bis 2c, Abs. 3, Abs. 3a, Abs. 5, Abs. 6 GrEStG",
      "§ 2 Abs. 2 GrEStG", "§§ 3, 4, 5, 6, 6a, 7 GrEStG",
      "§ 8 Abs. 2, § 9 GrEStG", "§ 11, § 12 GrEStG", "§ 13, § 14 GrEStG",
      "§§ 94 ff. BGB", "§ 712a BGB", "§§ 3, 4 GBO", "§ 38 AO", "§ 1a KStG",
      "§ 1 Abs. 1 Nr. 1 bis 3 UmwG", "§§ 2, 20 Abs. 6, 24 Abs. 4 UmwStG",
    ],
    themen: ["Prüfungsschema", "Steuerbarkeit", "Haupttatbestand", "Nebentatbestände", "Ergänzungstatbestände", "Anteilsvereinigung", "Steuerbefreiungen", "Bemessungsgrundlage", "Steuerschuldner"],
    bloecke: [
      { text: "Im Folgenden wird das umfassende Prüfungsschema für die Grunderwerbsteuer dargestellt (mit kleineren Modifikationen und Aktualisierungen übernommen aus Philippen/Gellrich/Breckheimer/Joisten, Verkehr- und Substanzsteuern, Köln 2012)." },
      { typ: "titel", text: "I. Steuerbarkeit (§§ 1, 2 GrEStG)" },
      { text: "1. Grundstück gem. § 2 GrEStG i. V. m. §§ 94 ff. BGB i. V. m. §§ 3, 4 GBO: Begrenzter, katastermäßig vermessener und bezeichneter Teil der Erdoberfläche = bürgerlich-rechtliche Grundstücke, auch Eigentumswohnungen. Als Grundstücke gelten kraft gesetzlicher Fiktion: Erbbaurechte, Gebäude auf fremdem Boden, dinglich gesicherte Sondernutzungsrechte (§ 2 Abs. 2 GrEStG). 2. Inlandsbelegenheit." },
      { text: "Erwerbsvorgang gem. § 1 GrEStG – die Quelle stellt ihn als Schaubild mit fünf Tatbestandsgruppen dar:" },
      { typ: "tabelle", spalten: ["Tatbestandsgruppe", "Inhalt"], zeilen: [
        ["Haupttatbestand gem. § 1 Abs. 1 Nr. 1 (Verpflichtungsgeschäfte, obligatorische Rechtsgeschäfte)", "Verpflichtungsgeschäft mit Übereignungsanspruch für ein Grundstück: Kaufvertrag oder andere obligatorische Rechtsgeschäfte [Verträge] (z. B. Tauschverträge, Schenkungsverträge, Erbbaurechtsverträge)"],
        ["Nebentatbestand gem. § 1 Abs. 1 Nr. 2–7, 1. Gruppe: Eigentumsübergang ohne obligatorisches Rechtsgeschäft (§ 1 Abs. 1 Nr. 2–4)", "Nr. 2 Auflassung: dingliche Einigung über den Eigentumsübergang · Nr. 3 Eigentumsübergang: Unternehmensumstrukturierungen durch Umwandlung (nicht: formwechselnde Umwandlung); Anwachsung gem. § 712a BGB · Nr. 4 Meistgebot im Zwangsversteigerungsverfahren"],
        ["Nebentatbestand, 2. Gruppe: sog. Zwischengeschäfte (§ 1 Abs. 1 Nr. 5–7)", "Nr. 5 Abtretungsanspruch eines Übereignungsanspruchs oder Meistgebot · Nr. 6 Anspruch auf Abtretung der Rechte aus einem Kaufangebot oder eines anderen Vertrages · Nr. 7 Abtretung eines der in Nr. 5, 6 bezeichneten Rechte, ohne vorheriges Rechtsgeschäft"],
        ["Ersatztatbestand gem. § 1 Abs. 2", "Rechtliche und wirtschaftliche Verwertungsbefugnis ohne Übertragung des Eigentums und Abschluss von Verpflichtungsgeschäften (z. B. atypischer Maklervertrag, nicht: einfache Pachtverträge)"],
        ["Ergänzungstatbestand gem. § 1 Abs. 2a, 2b, 3, 3a", "§ 1 Abs. 2a: Fiktion eines Grundstückerwerbs bei unmittelbarer oder mittelbarer Gesellschafterbestandsänderung von mindestens 90 % innerhalb von 10 Jahren bei PersGes. · § 1 Abs. 2b: dasselbe bei KapGes. · Bei § 1 Abs. 2a und 2b Berücksichtigung der Börsenklausel nach § 1 Abs. 2c · § 1 Abs. 3, 4: Fiktion bei unmittelbarer oder mittelbarer Anteilsvereinigung / Weiterübertragung von mindestens 90 %; Anteilsvereinigung Nr. 1 oder 2; Übertragung vereinigter Anteile Nr. 3 oder 4 · § 1 Abs. 3a: Fiktion bei Erlangen einer wirtschaftlichen Beteiligung von mindestens 90 %"],
        ["Besonderheiten bei Grundstückstausch gem. § 1 Abs. 5 GrEStG", "Der Tausch fällt grundsätzlich unter § 1 Abs. 1 Nr. 1 GrEStG. Werden zwei Grundstücke gegeneinander getauscht, liegen zwei steuerbare Sachverhalte vor."],
      ] },
      { typ: "titel", text: "II. Steuerpflicht / -befreiung" },
      { typ: "tabelle", spalten: ["Befreiungsgruppe", "Inhalt"], zeilen: [
        ["Vollständige Steuerbefreiung – Allgemeine Ausnahmen § 3", "Beispielsweise § 3 Nr. 1: „Bagatellfälle“ – maßgebender Wert bis 2.500 € · § 3 Nr. 2: Erwerb von Todes wegen / Schenkung"],
        ["Besondere Ausnahmen § 4", "—"],
        ["Übergang auf eine Gesamthand (§ 5)", "§ 5 Abs. 1: Grundstücksübergang von mehreren Miteigentümern auf Gesamthand – keine Steuererhebung, soweit der Anteil des einzelnen am Vermögen der Gesamthand Beteiligten seinem Bruchteil am Grundstück entspricht. § 5 Abs. 2: Grundstücksübergang von Alleineigentümer auf Gesamthand – keine Steuererhebung in Höhe des Anteils, zu dem der Veräußerer am Vermögen der Gesamthand beteiligt ist. § 5 Abs. 3: Nichtanwendbarkeit der Abs. 1 und 2, soweit sich der Anteil des Veräußerers am Vermögen der Gesamthand innerhalb von 10 Jahren nach dem Übergang des Grundstücks auf die Gesamthand vermindert, oder bei Anwendung der Option nach § 1a KStG"],
        ["Übergang von einer Gesamthand (§ 6)", "§ 6 Abs. 1: Grundstücksübergang von einer Gesamthand in Miteigentum · § 6 Abs. 2: von Gesamthand in Alleineigentum · § 6 Abs. 3: von einer Gesamthand auf eine andere Gesamthand (mit (partieller) Gesamthänderidentität) · § 6 Abs. 4: Voraussetzung für die Anwendung der Abs. 1–3 ist eine mindestens zehnjährige Beteiligung an der Gesamthand (Nr. 1) bzw. Kongruenz zwischen Beteiligungsverhältnis und Auseinandersetzungsquote (Nr. 2). Zudem besteht eine fünfzehnjährige Vorbehaltensfrist für Erwerbsvorgänge i. S. d. § 1 Abs. 3 Nr. 1, 2 und Abs. 3a (Nr. 3)."],
        ["Konzerninterne Umstrukturierung § 6a", "Steuerbare Vorgänge i. S. des § 1 Abs. 1 Nr. 3, Abs. 2, 2a, 2b, 3, 3a, die auf einer Umwandlung i. S. des § 1 Abs. 1 Nr. 1–3 UmwG, Einbringungen oder anderen Erwerbsvorgängen auf gesellschaftsvertraglicher Grundlage beruhen, sofern die Umwandlung innerhalb eines Konzerns abläuft."],
        ["Umwandlung von gemeinschaftlichem Eigentum in Flächeneigentum (§ 7)", "—"],
        ["Partielle Steuerbegünstigung § 1 Abs. 6", "Nur anteilige Erhebung der Steuer bei vorausgegangenen Rechtsvorgängen, sofern die Bemessungsgrundlage für die späteren Rechtsvorgänge den Betrag übersteigt, von dem beim vorausgegangenen Rechtsvorgang die Steuer berechnet worden ist."],
      ] },
      { text: "(so in der Quelle: Die Zeile zu § 3 Nr. 1 nennt den Bagatellbetrag ohne Vergleichszeichen – im PDF steht dort ein durch die Textextraktion verlorenes Symbol vor „2.500 €“.)" },
      { typ: "titel", text: "III. Bemessungsgrundlage" },
      { text: "Beispielsweise § 9 Nr. 1 Kauf: Kaufpreis inkl. sonstiger Leistungen [Hypotheken, Schätzungs-/Vermessungskosten] und dem Verkäufer vorbehaltener Nutzungen [mietfreie Benutzung einer Wohnung]; zusätzlich § 9 Abs. 2: Zusatzleistungen; kraft Gesetzes übergehende Belastungen; Leistungen an andere zwecks Erwerbsverzicht [Vorkaufsrecht]; Drittleistungen für Grundstücksüberlassung. § 9 Nr. 2 Tausch: Tauschleistung inkl. vereinbarter zusätzlicher Leistung und § 9 Abs. 2." },
      { typ: "tabelle", spalten: ["Grundbesitzwert nach § 8 Abs. 2 GrEStG", "Fall"], zeilen: [
        ["§ 8 Abs. 2 Nr. 1", "Gegenleistung nicht vorhanden oder nicht ermittelbar"],
        ["§ 8 Abs. 2 Nr. 2", "Umwandlungen i. S. d. UmwG, bei Einbringung oder anderen Erwerbsvorgängen auf gesellschaftsvertraglicher Grundlage (z. B. Anwachsung)"],
        ["§ 8 Abs. 2 Nr. 3", "in Fällen des § 1 Abs. 2a, 2b, 3, 3a"],
        ["§ 8 Abs. 2 Nr. 4", "bei Erwerbsvorgang i. S. d. § 1 Abs. 1 Nr. 1 im Rückwirkungszeitraum nach §§ 2, 20 Abs. 6, 24 Abs. 4 UmwStG zwischen Umwandlungsparteien (bei Gegenleistung < Grundbesitzwert und steuerbarer Umstrukturierung nach § 1 Abs. 1 Nr. 3, Abs. 3, 3a)"],
      ] },
      { typ: "titel", text: "IV. Steuersatz und Steuerberechnung" },
      { text: "§ 11 Abs. 1: Steuersatz. Steuerberechnung: Grundsätzlich Bemessungsgrundlage × Steuersatz; Ausnahme: Pauschalbesteuerung gem. § 12. § 11 Abs. 2: Abrundung – die Steuer ist auf volle Euro nach unten abzurunden." },
      { typ: "titel", text: "V. Steuerschuldner, Entstehung und Fälligkeit der Steuer, Formalia" },
      { typ: "tabelle", spalten: ["Vorschrift", "Steuerschuldner"], zeilen: [
        ["§ 13 Nr. 1 – Grundfall", "Die an einem Erwerbsvorgang als Vertragsteile beteiligten Personen"],
        ["§ 13 Nr. 2 – Erwerb kraft Gesetzes", "Der bisherige Eigentümer und der Erwerber"],
        ["§ 13 Nr. 3 – Enteignungsverfahren", "Der Erwerber"],
        ["§ 13 Nr. 4 – Zwangsversteigerungsverfahren", "Der Meistbietende"],
        ["§ 13 Nr. 5 – Vereinigung aller Anteile einer Gesellschaft in der Hand", "1. des Erwerbers: der Erwerber · 2. mehrerer Unternehmen oder Personen: diese Beteiligten"],
        ["§ 13 Nr. 6 – Änderung des Gesellschafterbestandes einer Personengesellschaft", "Die Personengesellschaft"],
        ["§ 13 Nr. 7 – Änderung des Gesellschafterbestandes einer Kapitalgesellschaft", "Die Kapitalgesellschaft"],
        ["§ 13 Nr. 8 – Wirtschaftliche Beteiligung", "Der Rechtsträger, der die Beteiligung innehat"],
      ] },
      { text: "Grundfall: Die Grunderwerbsteuer entsteht mit Verwirklichung des Tatbestandes gem. § 38 AO. Sonderfälle, § 14: Die Entstehung der Grunderwerbsteuer tritt mit dem Eintritt einer Bedingung oder der Erteilung einer Genehmigung ein, wenn die Wirksamkeit des Erwerbsvorgangs hiervon abhängig ist." },
      { text: "Die Steuer ist einen Monat nach Bekanntgabe des Steuerbescheides fällig. Das Finanzamt darf eine längere Zahlungsfrist setzen." },
    ],
  },
];

export default grestSkript;
