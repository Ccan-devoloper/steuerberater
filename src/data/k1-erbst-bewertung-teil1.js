/* Bewertungsrecht, Teil 1: Bewertung nach den Allgemeinen Bewertungsvorschriften
   (Unterrichtsmaterial zum Steuerberaterlehrgang, Dipl.-Finanzwirt Martin Schäfer,
   Stand Mai 2025; im Kopf der Quelle als „Skript B 1/3“ bezeichnet).

   Das Skript ist wortlautgetreu erfasst. Übersichten und Beispiele der Quelle stehen als
   Tabellen. Ergänzt sind nur Thema, Normenliste und Themenchips sowie – ausdrücklich als
   solche gekennzeichnet – redaktionelle Hinweise und eigene Kontrollrechnungen.
   Erfunden wird nichts.

   Personenbezogene Wasserzeichen der Quell-PDF sind nicht übernommen.
   Blocktypen: text | titel | tabelle. */

const VERFASSER = "Martin Schäfer";
const RECHTSSTAND = "Stand Mai 2025";

const TA1 = { teil: "1-I", teilLabel: "Skript Teil 1 · Abschnitte I und II", teilTitel: "Einführung, Aufbau des Bewertungsgesetzes, Vermögensarten und der Bewertungsgegenstand" };

export const erbstBewertungTeil1Quelle = {
  reihe: "Bewertungsrecht · Unterrichtsmaterial zum Steuerberaterlehrgang, Teil 1 · Martin Schäfer",
  stand: "Mai 2025 · Rechtsstand 2025",
  verfasser: VERFASSER,
  didaktik: [
    "Der Teil 1 des Bewertungsskripts behandelt den Ersten Teil des Bewertungsgesetzes, die Allgemeinen Bewertungsvorschriften der §§ 1 bis 16 BewG. Über § 12 Abs. 1 ErbStG sind sie der Ausgangspunkt jeder erbschaftsteuerlichen Bewertung, soweit § 12 Abs. 2 bis 6 ErbStG nichts anderes bestimmt.",
    "Der Aufbau folgt der Prüfungsreihenfolge: erst der Bewertungsgegenstand – wirtschaftliche Einheit, Wirtschaftsgut und Zurechnung –, dann Bedingungen und Befristungen, der gemeine Wert als Bewertungsmaßstab und schließlich die besonderen Bewertungsregeln für Wertpapiere, Kapitalforderungen sowie wiederkehrende Nutzungen und Leistungen.",
    "Die Beispiele der Quelle sind durchgerechnet wiedergegeben. Der Teil 1 bildet zusammen mit dem Teil 3 (Betriebsvermögen und gesonderte Feststellungen) die Grundlage für die Bewertungsaufgaben der Examensklausur.",
  ],
};

const QUELLE = erbstBewertungTeil1Quelle;

export const erbstBewertungTeil1 = [
  {
    ...TA1,
    id: "erbst-bew1-1",
    kapitel: "1",
    title: "Einführung: Aufgabe der Bewertung, Gliederung und Geltungsbereich des Bewertungsgesetzes, Vermögensarten",
    thema: "Warum es überhaupt gesetzliche Bewertungsvorschriften gibt, wie das Bewertungsgesetz in Allgemeinen und Besonderen Teil zerfällt, welcher Abschnitt für die Erbschaftsteuer und welcher für die Grundsteuer gilt, und die drei Vermögensarten des § 18 BewG",
    normen: ["§ 12 Abs. 1 ErbStG", "§ 12 Abs. 2 bis 6 ErbStG", "§ 1 Abs. 1 und 2 BewG", "§ 9 BewG", "§ 10 BewG", "§ 11 BewG", "§ 12 BewG", "§§ 13 bis 16 BewG", "§ 17 Abs. 1 BewG", "§ 18 BewG", "§§ 157 bis 203 BewG", "§§ 218 bis 263 BewG", "§ 6 EStG"],
    themen: ["Aufgabe der Bewertung", "Allgemeine Bewertungsvorschriften", "Geltungsvorbehalt", "Grundsteuerreform", "Vermögensarten"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "I. Einführung – 1. Begriff und Aufgabe der Bewertung" },
      { text: "Die Erbschaft- und Schenkungsteuer erfordert eine Bewertung des Vermögens, das im Rahmen eines Erwerbs von Todes wegen oder einer Schenkung unter Lebenden auf einen Erwerber übergeht. Bewerten heißt, nicht in Geld bestehende Güter für Zwecke der Besteuerung in Geld umzurechnen. Da dieser Umrechnungsvorgang seiner Natur nach von subjektiven Vorstellungen beeinflusst wird, hat der Gesetzgeber auch unter dem Gesichtspunkt der Gleichmäßigkeit der Besteuerung Bewertungsvorschriften erlassen, die die Regeln der Bewertung für steuerliche Zwecke gesetzlich festlegen. Damit soll bei der Wertfindung objektiven Verhältnissen Rechnung getragen werden." },
      { text: "Nach § 12 Abs. 1 ErbStG richtet sich die Bewertung, soweit in § 12 Abs. 2 bis Abs. 6 ErbStG nicht etwas anderes bestimmt ist, nach den Vorschriften des Ersten Teils des Bewertungsgesetzes (Allgemeine Bewertungsvorschriften)." },
      { typ: "titel", text: "2. Gliederung und Geltungsbereich des Bewertungsgesetzes" },
      { text: "Das Bewertungsgesetz gliedert sich in einen Allgemeinen Teil (1. Teil: Allgemeine Bewertungsvorschriften, §§ 1 – 16 BewG) und einen Besonderen Teil (2. Teil: Besondere Bewertungsvorschriften, §§ 17 – 203 BewG). Der 3. Teil mit den §§ 204 und 205 BewG enthält die Schlussbestimmungen." },
      { typ: "tabelle", spalten: ["Teil des Bewertungsgesetzes", "Vorschriften"], zeilen: [
        ["1. Teil: Allgemeine Bewertungsvorschriften", "§§ 1 - 16 BewG"],
        ["2. Teil: Besondere Bewertungsvorschriften", "§§ 17 - 263 BewG"],
        ["2. Teil, 1. Abschnitt: Einheitsbewertung", "§§ 19 ff BewG"],
        ["…", "…"],
        ["2. Teil, 5. Abschnitt: Gesonderte Feststellungen", "§§ 151 – 156 BewG"],
        ["2. Teil, 6. Abschnitt: Bewertung von Grundbesitz, von nicht notierten Anteilen an Kapitalgesellschaften und von Betriebsvermögen für die Erbschaftsteuer ab dem 01.01.2009", "§§ 157 – 203 BewG"],
        ["2. Teil, 7. Abschnitt: Bewertung des Grundbesitzes für die Grundsteuer ab 01.01.2022", "§§ 218 – 263 BewG"],
        ["3. Teil: Schlussbestimmungen", "§§ 264 - 266 BewG"],
      ] },
      { text: "Redaktioneller Hinweis: Der Fließtext und die Übersicht der Quelle weichen voneinander ab. Der Fließtext nennt für den 2. Teil „§§ 17 – 203 BewG“ und für den 3. Teil „die §§ 204 und 205 BewG“, die Übersicht dagegen „§§ 17 - 263 BewG“ und „§§ 264 - 266 BewG“. Die Angaben der Übersicht berücksichtigen den durch das Grundsteuer-Reformgesetz angefügten 7. Abschnitt, die des Fließtextes nicht. Beide Fassungen sind unverändert übernommen (so in der Quelle)." },
      { text: "Die allgemeinen Bewertungsvorschriften gelten für den in § 1 Abs. 1 BewG festgelegten Bereich. Der Geltungsvorbehalt in § 1 Abs. 2 BewG räumt den Bewertungsvorschriften in den Einzelsteuergesetzen (z. B. § 6 EStG) und den Bestimmungen zur Bewertung im Zweiten Teil des BewG Vorrang vor den allgemeinen Bewertungsvorschriften ein." },
      { text: "Im Allgemeinen Teil sind Regelungen zu den Bewertungsmaßstäben gemeiner Wert (Bewertungsgrundsatz § 9 BewG) und Teilwert (§ 9 BewG) enthalten. Darüber hinaus finden sich dort besondere Bewertungsregeln für Wertpapiere und Anteile (§ 11 BewG), für Kapitalforderungen und Schulden (§ 12 BewG) sowie für wiederkehrende Nutzungen und Leistungen (§§ 13 – 16 BewG) (die Fundstelle „Teilwert (§ 9 BewG)“ so in der Quelle; der Teilwert ist in § 10 BewG geregelt, § 9 BewG bestimmt den gemeinen Wert; der Schlusspunkt des Satzes fehlt ebenfalls)" },
      { text: "Nach § 17 Abs. 1 BewG sind die besonderen Bewertungsvorschriften nach Maßgabe der jeweiligen Einzelsteuergesetze anzuwenden. Im Besonderen Teil ist u. a. die Bewertung des land- und forstwirtschaftlichen Vermögens, des Grundvermögens und des Betriebsvermögens geregelt." },
      { text: "Der 6. Abschnitt des 2. Teils mit den §§ 157 bis 203 BewG enthält die Vorschriften für die Bewertung von Grundbesitz, von nicht notierten Anteilen an Kapitalgesellschaften und von Betriebsvermögen für die Erbschaftsteuer ab dem 01.01.2009 (§§ 157 – 203 BewG)." },
      { text: "Zur Bewertung des Grundbesitzes für die Grundsteuer ab dem 01.01.2022 wurde durch das Grundsteuer-Reformgesetz vom 26.11.2019 im 2. Teil ein 7. Abschnitt angefügt (§§ 218 – 263 BewG)." },
      { typ: "titel", text: "3. Vermögensarten" },
      { text: "Nach § 18 BewG umfasst das Vermögen, das nach den Vorschriften des Zweiten Teils des Bewertungsgesetzes zu bewerten ist, 3 Vermögensarten:" },
      { text: "• Land- und forstwirtschaftliches Vermögen" },
      { text: "• Grundvermögen" },
      { text: "• Betriebsvermögen" },
      { text: "Im Hinblick auf verschiedene Bewertungsmethoden und Bewertungsmaßstäbe und wegen der erbschaft- und schenkungsteuerlichen Auswirkung der entsprechenden Zuordnung von Wirtschaftsgütern kommt der Abgrenzung der drei Vermögensarten nach den gesetzlich bestimmten Merkmalen eine wesentliche Bedeutung zu." },
    ],
  },
  {
    ...TA1,
    id: "erbst-bew1-2",
    kapitel: "2",
    title: "Bewertungsgegenstand: wirtschaftliche Einheit und Wirtschaftsgut",
    thema: "Die wirtschaftliche Einheit als Bewertungsgegenstand des § 2 BewG, das Wirtschaftsgut als kleinste Einheit des Bewertungsrechts und die drei Voraussetzungen, unter denen mehrere Wirtschaftsgüter zu einer wirtschaftlichen Einheit zusammengefasst werden",
    normen: ["§ 2 Abs. 1 BewG", "§ 2 Abs. 2 BewG", "§ 159 Abs. 3 BewG"],
    themen: ["Wirtschaftliche Einheit", "Wirtschaftsgut", "Verkehrsanschauung", "Einheitliches Eigentum", "Vermögensart"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "II. Bewertungsgegenstand – 1. Wirtschaftliche Einheit und Wirtschaftsgut" },
      { text: "Bewertungsgegenstand im Sinne des Bewertungsgesetzes ist die wirtschaftliche Einheit (§ 2 BewG). Für den Begriff der wirtschaftlichen Einheit enthält das Bewertungsgesetz keine gesetzliche Definition, sondern nur eine Umschreibung. Die wirtschaftliche Einheit besteht aus einem oder mehreren Wirtschaftsgütern. Das Wirtschaftsgut ist die kleinste Einheit des Bewertungsrechts. Der Begriff des Wirtschaftsguts ist weder im Bewertungsgesetz noch in anderen Steuergesetzen definiert, sondern von der Rechtsprechung entwickelt worden. Zu den Wirtschaftsgütern gehören alle im wirtschaftlichen Verkehr nach der Verkehrsanschauung selbständig bewertbaren Güter jeder Art einschließlich der negativen Wirtschaftsgüter (= Schulden und Lasten). Bewertungsfähig sind Güter, die einen Geldwert haben, selbständig umsatzfähig und dem wirtschaftlichen Verkehr nicht entzogen sind." },
      { text: "Die dem allgemeinen Geschäftsverkehr entzogenen Sachen stellen keine Wirtschaftsgüter dar (z. B. Grabsteine, implantierte Herzschrittmacher oder sonstige Körperersatzstücke)." },
      { text: "Einzelne Wirtschaftsgüter, die für sich allein genutzt werden und von anderen Gütern unabhängig sind, bilden eine selbständige wirtschaftliche Einheit (z. B. das einem Privatmann gehörende unbebaute Grundstück oder dessen Pkw). Im Wirtschaftsleben bilden jedoch häufig mehrere Wirtschaftsgüter eine wirtschaftliche Einheit, weil sie zu einem bestimmten Zweck zusammengefasst sind. So setzt sich der Gewerbebetrieb als wirtschaftliche Einheit des Betriebsvermögens aus einer Vielzahl von Wirtschaftsgütern zusammen. Auch beim land- und forstwirtschaftlichen Vermögen besteht die wirtschaftliche Einheit des Betriebs der Land- und Forstwirtschaft aus verschiedenen Wirtschaftsgütern." },
      { text: "Die Zusammenfassung mehrerer Wirtschaftsgüter zu einer wirtschaftlichen Einheit knüpft an drei Voraussetzungen: Die einzelnen Wirtschaftsgüter" },
      { typ: "tabelle", spalten: ["Voraussetzung", "Vorschrift"], zeilen: [
        ["1. bilden nach der Verkehrsanschauung eine wirtschaftliche Einheit", "§ 2 Abs. 1 S. 2 BewG"],
        ["2. gehören demselben Eigentümer", "§ 2 Abs. 2 BewG"],
        ["3. und zu derselben Vermögensart", "—"],
      ] },
      { text: "Gem. § 2 Abs. 1 BewG ist nach der Verkehrsanschauung zu entscheiden, was als wirtschaftliche Einheit zu gelten hat. Der Begriff Verkehrsanschauung steht für die Auffassung der Allgemeinheit vernünftig denkender Menschen. Damit wird auf die Meinung abgestellt, die urteilsfähige, unvoreingenommene Bürger von einer Sache haben. Als Hilfskriterien sind die" },
      { text: "- örtliche Gewohnheit, - tatsächliche Übung, - Zweckbestimmung und - wirtschaftliche Zusammengehörigkeit der einzelnen Wirtschaftsgüter zu berücksichtigen." },
      { text: "Neben der Verkehrsanschauung erfordert die Zusammenfassung mehrerer Wirtschaftsgüter zu einer wirtschaftlichen Einheit, dass die Wirtschaftsgüter demselben Eigentümer gehören (Grundsatz des einheitlichen Eigentums, § 2 Abs. 2 BewG)." },
      { text: "Die Zusammenrechnung mehrerer Wirtschaftsgüter zu einer wirtschaftlichen Einheit setzt ferner voraus, dass alle Wirtschaftsgüter zu derselben Vermögensart gehören. Der Grund dafür liegt im System des Bewertungsgesetzes, das auf verschiedenen Vermögensarten basiert, die nach verschiedenen Bewertungsmaßstäben und -methoden bewertet werden." },
      { typ: "titel", text: "Beispiel: Bauland im Bebauungsplan" },
      { text: "Eine landwirtschaftlich genutzte Fläche ist im Bebauungsplan als Bauland ausgewiesen und kann sofort bebaut werden." },
      { text: "Wenngleich die Fläche noch land- und forstwirtschaftlichen Zwecken dient, gehört sie gem. § 159 Abs. 3 BewG zum Grundvermögen." },
    ],
  },
  {
    ...TA1,
    id: "erbst-bew1-3",
    kapitel: "3",
    title: "Zurechnung: wirtschaftliches und gemeinschaftliches Eigentum sowie Gesamt- und Einzelbewertung",
    thema: "Wann die Zurechnung vom bürgerlich-rechtlichen Eigentum abweicht, warum beim Erwerb von Todes wegen gleichwohl die Grundbucheintragung entscheidet, wie gemeinschaftliches Eigentum nach dem MoPeG behandelt wird und was der Grundsatz der Gesamtbewertung für den Wert bedeutet",
    normen: ["§ 39 Abs. 1 AO", "§ 39 Abs. 2 Nr. 1 AO", "§ 39 Abs. 2 Nr. 2 AO", "§ 2 Abs. 1 Satz 2 BewG", "§ 2 Abs. 2 BewG", "§ 2 Abs. 3 BewG", "§ 22 Abs. 2 BewG", "§ 11 Abs. 3 BewG", "§ 97 Abs. 1a und 1b BewG", "§ 151 Abs. 1 BewG", "§ 151 Abs. 2 Nr. 2 BewG", "§ 154 Abs. 1 Satz 2 BewG", "§ 2a Satz 1 ErbStG", "§ 873 BGB", "§§ 1008 ff. BGB", "§§ 1419, 2033, 2040 BGB", "R E 12.2 Abs. 1 und 2 ErbStR", "R B 11.8 Abs. 3 und 9 ErbStR"],
    themen: ["Wirtschaftliches Eigentum", "Sicherungsübereignung", "Eigentumsvorbehalt", "Grundstückskaufvertrag", "MoPeG", "Gesamtbewertung", "Paketzuschlag"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "2. Zurechnung – a) Wirtschaftliches Eigentum" },
      { text: "Im Zusammenhang mit der Bewertung muss auch entschieden werden, bei welcher Person die wirtschaftliche Einheit zu erfassen ist. Die Zurechnung folgt grundsätzlich dem bürgerlich-rechtlichen Eigentum (§ 39 Abs. 1 AO). Abweichend davon werden die Wirtschaftsgüter einem anderen als dem Eigentümer zugerechnet, wenn dieser die tatsächliche Herrschaft über ein Wirtschaftsgut in der Weise ausübt, dass er den bürgerlich-rechtlichen Eigentümer für die gewöhnliche Nutzungsdauer von der Einwirkung auf das Wirtschaftsgut wirtschaftlich ausschließen kann (§ 39 Abs. 2 Nr. 1 AO). Dieses sog. wirtschaftliche Eigentum leitet sich aus der im Steuerrecht geltenden wirtschaftlichen Betrachtungsweise ab. Zu den in § 39 Abs. 2 S. 2 AO aufgezählten Fällen des wirtschaftlichen Eigentums zählen bei Treuhandverhältnissen der Treugeber, beim Sicherungseigentum der Sicherungsgeber und beim Eigenbesitz der Eigenbesitzer. (die Fundstelle „§ 39 Abs. 2 S. 2 AO“ so in der Quelle; die aufgezählten Fälle stehen in § 39 Abs. 2 Nr. 1 Satz 2 AO)" },
      { typ: "titel", text: "Beispiele" },
      { text: "1. Im Zusammenhang mit einer Darlehensaufnahme hat der Gewerbetreibende A der Bank sicherungshalber eine Maschine übereignet. — Dem A ist als wirtschaftlicher Eigentümer die Maschine gem. § 39 Abs. 2 Nr. 1 AO zuzurechnen." },
      { text: "2. B erwarb mit notariellem Kaufvertrag vom 15.10.02 ein unbebautes Grundstück, Übergang von Nutzen und Lasten am 1.12.02. Die Umschreibung im Grundbuch erfolgte am 10.2.03. — Mit dem Übergang von Nutzen und Lasten hat B das wirtschaftliche Eigentum an dem Grundstück erlangt, das ihm ab diesem Zeitpunkt steuerlich zuzurechnen ist. Dem Eigentumswechsel hat das Finanzamt im Wege einer Zurechnungsfortschreibung zum 1.1.03 Rechnung zu tragen (§ 22 Abs. 2 BewG)." },
      { text: "3. Die von C erworbene Maschine bleibt bis zur vollständigen Kaufpreiszahlung Eigentum des Verkäufers. — Wenngleich der Verkäufer bis zur vollständigen Kaufpreiszahlung bürgerlich-rechtlich Eigentümer bleibt, wird die Maschine gem. § 39 Abs. 2 Nr. 1 AO dem C als wirtschaftlicher Eigentümer zugerechnet." },
      { text: "Für die Zurechnung eines Grundstücks zum Nachlass bei noch nicht - vollständig - erfüllten Grundstückskaufverträgen ist der Übergang des Eigentums nach dem zivilrechtlichen Eigentumsbegriff entscheidend. Auf den Übergang des wirtschaftlichen Eigentums im Sinne des § 39 Abs. 2 Nr. 1 AO kommt es insoweit nicht an. Insbesondere ist nicht auf den Zeitpunkt des Besitz- und Lastenwechsels abzustellen. Zivilrechtlich geht das Eigentum gem. § 873 BGB erst mit der Grundbucheintragung auf den Erwerber über. Die grundsätzliche Anknüpfung an das Zivilrecht gilt nicht nur hinsichtlich des Erbrechts selbst, sondern auch hinsichtlich der Frage, was erbschaftsteuerlich zum Erwerb von Todes wegen gehört. Beim Erwerb von Todes wegen ist daher ein Grundstück erbschaftsteuerrechtlich bis zur Eintragung des Eigentumswechsels im Grundbuch bei den Erben nach dem Veräußerer zu erfassen (R E 12.2 Abs. 1 und Abs. 2 ErbStR)." },
      { typ: "titel", text: "b) Gemeinschaftliches Eigentum" },
      { text: "Auch bei gemeinschaftlichem Eigentum (Bruchteilseigentum §§ 1008 ff BGB, Gesamthandseigentum (§§ 1419, 2033, 2040 BGB) gilt der Grundsatz des einheitlichen Eigentums (§ 2 Abs. 2 BewG). Der Unterscheidung Bruchteils- und Gesamthandseigentum kommt steuerlich keine Bedeutung zu, weil auch das Gesamthandseigentum gem. § 39 Abs. 2 Nr. 2 AO steuerlich wie Bruchteilseigentum behandelt wird. Mit der Abschaffung des Gesamthandsprinzips durch das Gesetz zur Modernisierung des Personengesellschaftsrechts (MoPeG) zum 01.01.2024 bedurfte es mit § 2a S. 1 ErbStG - eingefügt durch das Gesetz vom 22.12.2023 (Kreditzweitmarktförderungsgesetz) - einer Regelung, dass das zivilrechtlich für Personengesellschaften aufgegebene Gesamthandsprinzip für Zwecke der Erbschaft- und Schenkungsteuer weitergelten soll. Rechtsfähige Personengesellschaften sind demzufolge als Gesamthand und deren Vermögen als Gesamthandsvermögen anzusehen. (die nicht gepaarte Klammer in der Aufzählung des gemeinschaftlichen Eigentums so in der Quelle)" },
      { text: "Der Wert eines mehreren Personen zustehenden Wirtschaftsguts ist im Ganzen zu ermitteln und auf die Beteiligten nach dem Verhältnis ihrer Anteile zu verteilen, sofern nicht besondere Aufteilungsvorschriften bestehen (§ 97 Abs. 1a und 1b BewG) oder eine Zurechnung auf eine Erbengemeinschaft in Betracht kommt (§ 151 Abs. 2 Nr. 2 BewG). Die Wertermittlung und Wertaufteilung erfolgt im Regelfall im Rahmen einer gesonderten und einheitlichen Feststellung (§ 151 Abs. 1, § 154 Abs. 1 S. 2 BewG). Eine Aufteilung erübrigt sich, soweit die Gemeinschaft nach dem maßgebenden Steuergesetz selbständig steuerpflichtig ist." },
      { typ: "titel", text: "3. Gesamtbewertung, Einzelbewertung" },
      { text: "Nach § 2 Abs.1 S. 2 BewG ist der Wert einer wirtschaftlichen Einheit im Ganzen festzustellen. Nach diesem Grundsatz der Gesamtbewertung ergibt sich der Wert einer wirtschaftlichen Einheit nicht durch Addition der auf die Wirtschaftsgüter entfallenden Einzelwerte, sondern dadurch, dass die wirtschaftliche Einheit unmittelbar im Ganzen bewertet wird. Ein Beispiel dafür ist das Ertragswertverfahren zur Bewertung des Grundvermögens: Zur Grundstückswertermittlung wird die Jahresrohmiete mit einem bestimmten Vervielfältiger multipliziert. Der so gefundene Wert schließt die Einzelwerte des Grund und Bodens, der Gebäude und evtl. Außenanlagen ein." },
      { text: "Redaktioneller Hinweis: Die Quelle erläutert den Grundsatz der Gesamtbewertung am Ertragswertverfahren mit der „Jahresrohmiete“. Das Ertragswertverfahren der §§ 184 bis 188 BewG, das der Teil 3 desselben Skripts und die Übungsfälle der Fallsammlung anwenden, geht dagegen vom Rohertrag nach § 186 BewG aus. Der Wortlaut ist unverändert übernommen." },
      { text: "Das Prinzip der Gesamtbewertung beeinflusst auch die Höhe des zu ermittelnden Werts." },
      { typ: "titel", text: "Beispiel: 70 Prozent des Aktienkapitals" },
      { text: "Zum Privatvermögen des A gehören 70 % des Aktienkapitals einer AG. Der Kurswert der Aktien beträgt zum maßgebenden Stichtag 750.000 €." },
      { text: "Weil die Höhe der Beteiligung die Beherrschung der Aktiengesellschaft ermöglicht, ist im Rahmen einer Gesamtbewertung der gemeine Wert der Beteiligung maßgebend und ein Paketzuschlag zu machen (§ 11 Abs. 3 BewG, R B 11.8 Abs. 3 und Abs. 9 ErbStR)." },
      { text: "Die Addition von Einzelwerten - Einzelbewertung - kommt nur in dem vom Bewertungsgesetz ausdrücklich vorgeschriebenen Fällen in Betracht (§ 2 Abs. 3 BewG). (die Wendung „in dem … vorgeschriebenen Fällen“ so in der Quelle)" },
      { text: "Querbezug: Die 70-Prozent-Beteiligung des Beispiels überschreitet die Grenze von 25 %, die der Teil 3 desselben Skripts für den Paketzuschlag nennt (R B 11.8 Abs. 3 ErbStR); der Zuschlag kann dort im Allgemeinen bis zu 25 % betragen (R B 11.8 Abs. 9 ErbStR). Einen Zahlenwert für das Beispiel nennt die Quelle nicht." },
    ],
  },
];

export default erbstBewertungTeil1;
