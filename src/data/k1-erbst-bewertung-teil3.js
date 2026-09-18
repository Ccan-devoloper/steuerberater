/* Bewertungsrecht, Teil 3: Bewertung des Betriebsvermögens; gesonderte Feststellungen
   (Unterrichtsmaterial zum Steuerberaterlehrgang, Dipl.-Finanzwirt Martin Schäfer,
   Stand Oktober 2025).

   Das Skript ist wortlautgetreu erfasst. Die Übersichten und Beispielrechnungen der
   Quelle stehen als Tabellen, damit Vermögensaufstellungen und Wertermittlungen Zeile
   für Zeile nachvollziehbar bleiben. Ergänzt sind nur Thema, Normenliste und Themenchips
   sowie – ausdrücklich als solche gekennzeichnet – redaktionelle Hinweise und eigene
   Kontrollrechnungen. Wo die Quelle ein Beispiel ohne Ergebnis stehen lässt, ist das
   ausdrücklich vermerkt; erfunden wird nichts.

   Personenbezogene Wasserzeichen der Quell-PDF sind nicht übernommen.
   Blocktypen: text | titel | tabelle. */

const VERFASSER = "Martin Schäfer";
const RECHTSSTAND = "Stand Oktober 2025";

const TB1 = { teil: "I", teilLabel: "Teil I – Bewertung des Betriebsvermögens", teilTitel: "Begriff, Bewertungsverfahren, Substanzwert, vereinfachtes Ertragswertverfahren, Personen- und Kapitalgesellschaften" };

export const erbstBewertungTeil3Quelle = {
  reihe: "Bewertungsrecht · Unterrichtsmaterial zum Steuerberaterlehrgang, Teil 3 · Martin Schäfer",
  stand: "Oktober 2025 · Rechtsstand 2025",
  verfasser: VERFASSER,
  didaktik: [
    "Der Teil 3 des Bewertungsskripts behandelt die beiden Blöcke, die in der Examensklausur regelmäßig zusammen auftreten: die Bewertung des Betriebsvermögens nach §§ 95 bis 109 und §§ 199 bis 203 BewG und das Verfahren der gesonderten Feststellung nach §§ 151 bis 156 BewG.",
    "Der Aufbau folgt der Prüfungsreihenfolge: erst der Bewertungsgegenstand und die zulässigen Bewertungsverfahren, dann der Substanzwert als stets zu prüfende Untergrenze, danach das vereinfachte Ertragswertverfahren mit seinen Sonderbewertungen und schließlich die Besonderheiten bei Personen- und Kapitalgesellschaften.",
    "Die Beispiele der Quelle sind durchgerechnet wiedergegeben. Wo das Skript eine Vermögensaufstellung als Übung ohne Ergebnis stehen lässt, ist das kenntlich gemacht – die zugehörige Musterlösung liegt im Drive als eigene Datei.",
  ],
};

const QUELLE = erbstBewertungTeil3Quelle;

export const erbstBewertungTeil3 = [
  {
    ...TB1,
    id: "erbst-bew3-1",
    kapitel: "1",
    title: "Allgemeines, Begriff und Umfang des Betriebsvermögens und der Bewertungsgegenstand",
    thema: "§ 12 Abs. 5 ErbStG als Einstieg, der Gewerbebetrieb als Bewertungsgegenstand nach § 95 Abs. 1 BewG, die Gleichstellung der freien Berufe nach § 96 BewG und die vier Durchbrechungen der Bestandsidentität zwischen Steuerbilanz und bewertungsrechtlichem Betriebsvermögen",
    normen: ["§ 12 Abs. 5 ErbStG", "§ 11 ErbStG", "§ 9 ErbStG", "§ 151 Abs. 1 Satz 1 Nr. 2 BewG", "§ 18 BewG", "§ 95 Abs. 1 BewG", "§ 96 BewG", "§ 97 BewG", "§ 103 Abs. 2 BewG", "§ 103 Abs. 3 BewG", "§ 15 Abs. 1 und 2 EStG", "§ 18 EStG", "R B 95 ErbStR", "R B 95.1 Abs. 1 ErbStR", "R B 11.5 Abs. 3 ErbStR"],
    themen: ["Betriebsvermögen", "Gewerbebetrieb", "Bestandsidentität", "Freie Berufe", "Bewertungsgegenstand"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "I. Bewertung des Betriebsvermögens – 1. Allgemeines" },
      { text: "Gem. § 12 Abs. 5 ErbStG wird für inländisches Betriebsvermögen, für das nach § 151 Abs. 1 Satz 1 Nr. 2 BewG eine gesonderte Feststellung des Werts zu erfolgen hat, mit dem auf den Bewertungsstichtag (§ 11, § 9 ErbStG) festgestellten Wert angesetzt. Die Regelung des § 151 Abs. 1 Nr. 1 BewG verweist für den Wert des Betriebsvermögens oder des Anteils am Betriebsvermögen auf die §§ 95, 96, 97 BewG. (die Verweisung auf „§ 151 Abs. 1 Nr. 1 BewG“ steht so in der Quelle, obwohl der Satz zuvor § 151 Abs. 1 Satz 1 Nr. 2 BewG nennt)" },
      { typ: "titel", text: "2. Begriff und Umfang und Bewertungsgegenstand" },
      { text: "Während Betriebsvermögen begrifflich eine der drei Vermögensarten des Bewertungsgesetzes (§ 18 BewG) darstellt, bezeichnet der Begriff des Gewerbebetriebs den Bewertungsgegenstand (§ 95 Abs. 1 BewG). Da das Bewertungsgesetz keine eigene Definition für den Begriff Gewerbebetrieb enthält, leitet sich diese aus dem Einkommensteuerrecht ab. Die gewerbliche Betätigung setzt nach § 15 Abs. 2 S. 1 EStG folgende Merkmale voraus:" },
      { text: "- Selbständigkeit, - Nachhaltigkeit, - Gewinnerzielungsabsicht, - Beteiligung am allgemeinen wirtschaftlichen Verkehr." },
      { text: "Ferner darf es sich bei der Tätigkeit nicht um Land- und Forstwirtschaft, die Ausübung eines freien Berufs oder einer anderen selbständigen Arbeit im Sinne des § 18 EStG handeln. Einer Abgrenzung des Gewerbebetriebs zur freiberuflichen Tätigkeit bedarf es nicht, weil die Ausübung eines freien Berufs nach § 96 BewG dem Betrieb eines Gewerbes im Sinne des Bewertungsgesetzes gleichsteht." },
      { text: "Das Betriebsvermögen umfasst alle Teile eines Gewerbebetriebs im Sinne des § 15 Abs. 1 und 2 EStG, die bei der steuerlichen Gewinnermittlung zum Betriebsvermögen gehören (§ 95 Abs. 1 BewG). Damit werden grundsätzlich alle Wirtschaftsgüter und sonstigen aktiven Ansätze sowie Schulden und sonstigen Abzüge aus der Steuerbilanz dem Betriebsvermögen zugeordnet, soweit das Erbschaftsteuergesetz in Verbindung mit dem Bewertungsgesetz nicht ausdrücklich etwas anderes vorschreibt oder zulässt (R B 95.1 Abs. 1 ErbStR). Bei bilanzierenden Gewerbetreibenden und freiberuflich Tätigen (§ 4 Abs. 1 oder § 5 EStG) hat die Anknüpfung an die Grundsätze der steuerlichen Gewinnermittlung regelmäßig die Folge, dass es zu einer Identität zwischen der Steuerbilanz und dem bewertungsrechtlichen Betriebsvermögen kommt (Bestandsidentität). Der Grundsatz der Bestandsidentität wird insbesondere in folgenden Fällen durchbrochen:" },
      { text: "• Gewinnansprüche gegen eine beherrschte Gesellschaft als sonstigem Abzug bei der beherrschten Gesellschaft (§ 103 Abs. 2 BewG)" },
      { text: "• Rücklagen (§ 103 Abs. 3 BewG)" },
      { text: "• Selbst geschaffene immaterielle Wirtschaftsgüter des Anlagevermögens, Geschäfts- oder Firmenwert (R B 95 Abs. 2 S. 2 Nr. 4, R B 11.5 Abs. 3 S. 4 und 5 ErbStR)" },
      { text: "• Rückstellungen (R B 95 Abs. 2 S. 2 Nr. 5, R B 11.5 Abs. 3 S. 3 ErbStR)" },
      { text: "Zum Betriebsvermögen nicht bilanzierender Gewerbetreibender und freiberuflich Tätiger gehören alle Wirtschaftsgüter, die ausschließlich und unmittelbar für eigenbetriebliche Zwecke genutzt werden (notwendiges Betriebsvermögen, R B 95 Abs. 3 S. 1 ErbStR). Bei Grundstücken, die teilweise betrieblich und teilweise privat genutzt werden, kommt es für die Aufteilung auf die ertragsteuerliche Aufteilung an. Gewillkürtes Betriebsvermögen wird angesetzt, wenn die Bildung ertragsteuerlich zulässig ist und das Wirtschaftsgut tatsächlich dem Betriebsvermögen zugeordnet wurde. Forderungen und Verbindlichkeiten, die mit dem Betrieb in wirtschaftlichem Zusammenhang stehen, gehören zu Betriebsvermögen nicht bilanzierender Gewerbetreibender und freiberuflich Tätiger, ebenso Bargeld und Bankguthaben, die aus gewerblichen oder freiberuflichen Tätigkeiten herrühren. Bis zum Bewertungsstichtag entstandene Honoraransprüche freiberuflich Tätiger sind als Forderung zu erfassen. Sie sind in dem Zeitpunkt entstanden, in dem die zu erbringenden Leistungen vollendet waren. Bei Honoraransprüchen für Teilleistungen kommt es für die Entstehung darauf an, ob auf eine entsprechende Vergütung nach einer Gebührenordnung oder aufgrund von Sondervereinbarungen zwischen den Beteiligten ein Anspruch besteht (R B 95 Abs. 3 ErbStR)." },
      { text: "Die in § 97 BewG aufgezählten Körperschaften, Personenvereinigungen und Vermögensmassen gelten kraft Gesetzes stets als Gewerbebetrieb." },
    ],
  },
  {
    ...TB1,
    id: "erbst-bew3-2",
    kapitel: "2",
    title: "Bewertungsverfahren: Ableitung aus Verkäufen, Ertragswertmethode, alternative Verfahren und der Substanzwert als Untergrenze",
    thema: "Die Rangfolge des § 11 Abs. 2 BewG – zeitnahe Verkäufe, Ertragswert- oder andere übliche Methode, wahlweise das vereinfachte Ertragswertverfahren – und die obligatorische Prüfung des Substanzwerts als Mindestwert",
    normen: ["§ 109 Abs. 1 und 2 BewG", "§ 11 Abs. 1 BewG", "§ 11 Abs. 2 BewG", "§ 11 Abs. 2 Satz 3 BewG", "§ 11 Abs. 2 Satz 4 BewG", "§ 157 Abs. 5 BewG", "§§ 199 bis 203 BewG", "R B 11.2 Abs. 2 ErbStR", "R B 109.1 ErbStR", "R B 199.1 bis R B 203 ErbStR"],
    themen: ["Ableitung aus Verkäufen", "Ertragswertmethode", "Multiplikatorenverfahren", "Vereinfachtes Ertragswertverfahren", "Mindestwert"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "3. Bewertungsverfahren" },
      { text: "Das Betriebsvermögen von Gewerbebetrieben im Sinne des § 95 BewG und das Betriebsvermögen von freiberuflich Tätigen im Sinne des § 96 BewG ist gem. § 109 Abs. 1 BewG jeweils mit dem gemeinen Wert anzusetzen. Für die Ermittlung des gemeinen Werts gilt § 11 Abs. 2 BewG entsprechend (§ 157 Abs. 5 BewG). Die Ermittlung des gemeinen Werts für Anteile am Betriebsvermögen einer in § 97 BewG genannten Körperschaft, Personenvereinigung oder Vermögensmasse richtet sich ebenfalls nach § 11 Abs. 2 BewG i. V. m. § 109 Abs. 2 BewG (§ 157 Abs. 5 BewG, R B 109.1, R B 11.2 bis R B 11.6 ErbStR)." },
      { text: "Nach § 11 Abs. 2 BewG sind Anteile an Kapitalgesellschaften, die mangels einer Börsennotierung nicht unter § 11 Abs. 1 BewG fallen, mit dem gemeinen Wert ansetzen. Der gemeine Wert ist vorrangig aus Verkäufen abzuleiten, die weniger als 1 Jahr zurückliegen. Dieser Regelung liegt die unwiderlegbare Vermutung zugrunde, dass zeitnahe Verkäufe in der Vergangenheit den zutreffenden Marktwert zum Bewertungsstichtag widerspiegeln. (die Wendung „mit dem gemeinen Wert ansetzen“ so in der Quelle)" },
      { text: "Kann der gemeine Wert nicht aus zeitnahen Verkäufen abgeleitet werden, so ist er unter Berücksichtigung der Ertragsaussichten der Gesellschaft oder einer anderen anerkannten, auch im gewöhnlichen Geschäftsverkehr für nichtsteuerliche Zwecke üblichen Methode zu ermitteln. Insoweit besteht die Möglichkeit, den gemeinen Wert durch Vorlage eines methodisch nicht zu beanstandenden Gutachtens zu erklären, das auf den für die Verwendung in einem solchen Verfahren üblichen Daten der betreffenden Gesellschaft aufbaut (R B 11.2 Abs. 2 ErbStR)." },
      { text: "Üblicherweise wird die Ertragswertmethode zumindest bei großen Gesellschaften angewandt, weil sie von der Frage ausgeht, welches Kapital ein gedachter Investor einsetzen würde, um aus seinem Investment eine angemessene Rendite zu erzielen. Die Ertragswertmethode ist jedoch nicht für die Bewertung jedes Unternehmens geeignet bzw. am jeweiligen Markt nicht stets üblich. Wenn daher in solchen Fällen andere gebräuchliche Bewertungsmethoden zur Preisbildung angewandt werden, hat das an den gemeinen Wert anknüpfende Steuerrecht sich daran zu orientieren. Alternative Methoden sind u. a. vergleichsorientierte Methoden und Multiplikatorenverfahren (z. B. Discounted Cash-Flow-Verfahren). Die Feststellungslast, ob eine derartige Methode anstelle der Ertragswertmethode anwendbar ist, trägt jeweils derjenige, der sich darauf beruft. Dabei ist nach dem Wortlaut des § 11 Abs. 2 Satz 2 BewG die Methode anzuwenden, die ein Erwerber der Bemessung des Kaufpreises zugrunde legen würde. Der Gesetzgeber stellt insoweit auf die Erwerbersicht ab, um Schätzungsunschärfen zu vermeiden. Darüber hinaus dürfte ein gedachter Erwerber – im Unterschied zum Verkäufer - bemüht sein, den Preis möglichst niedrig zu halten." },
      { text: "Der Steuerpflichtige kann den gemeinen Wert auch im vereinfachten Ertragswertverfahren (§§ 199 bis 203 BewG, R B 199.1 bis R B 203 ErbStR) ermitteln. Sofern zum Bewertungsstichtag feststeht, dass die Berechnungsgrößen des Verfahrens durch bekannte objektive Umstände, z. B. wegen des Todes des Unternehmers, sich nachhaltig verändern, muss dies bei der Ermittlung entsprechend berücksichtigt werden (R B 11.2 Abs. 2 S. 5 ErbStR)." },
      { text: "Die Summe der gemeinen Werte und sonstigen aktiven Ansätze abzüglich der zum Betriebsvermögen gehörenden Schulden und Abzüge darf gem. § 11 Abs. 2 Satz 3 BewG nicht unterschritten werden. Damit ist Untergrenze stets der Substanzwert als Mindestwert, den ein Steuerpflichtiger am Markt erzielen könnte." },
      { typ: "titel", text: "Bewertungsmethoden – Überblick" },
      { typ: "tabelle", spalten: ["Bewertung des Betriebsvermögens und der nicht notierten Anteile an Kapitalgesellschaften, § 109, § 11 Abs. 2 BewG", "Einordnung"], zeilen: [
        ["Branchenübliches Ertragswertverfahren, z. B. DCF-Verfahren", "anerkannte Methode nach § 11 Abs. 2 Satz 2 BewG"],
        ["anderes branchenübliches Verfahren, z. B. Multiplikatorenverfahren", "anerkannte Methode nach § 11 Abs. 2 Satz 2 BewG"],
        ["Vereinfachtes Ertragswertverfahren §§ 11 Abs. 2 Satz 4 BewG", "- optional -"],
        ["Substanzwert = Mindestwert des BV", "- obligatorische Prüfung -"],
      ] },
      { text: "Redaktioneller Hinweis: Die Übersicht steht in der Quelle als Schaubild, dessen Kästen in der maschinellen Erfassung untereinander laufen. Die Zuordnung „optional“ beziehungsweise „obligatorische Prüfung“ steht so in der Quelle; die Einordnung der beiden branchenüblichen Verfahren ist aus dem vorangehenden Fließtext übernommen." },
    ],
  },
  {
    ...TB1,
    id: "erbst-bew3-3",
    kapitel: "3",
    title: "Substanzwert: Umfang des Betriebsvermögens, Betriebsgrundstücke sowie Schulden und sonstige Abzüge",
    thema: "Wann der Substanzwert als Mindestwert überhaupt greift, welche Wirtschaftsgüter trotz Aktivierungs- oder Passivierungsverbots anzusetzen sind, die Behandlung von Firmenwert, Genossenschaftsanteilen und Rücklagen sowie die Bewertung von Betriebsgrundstücken nach § 99 BewG",
    normen: ["§ 11 Abs. 2 Satz 3 BewG", "§§ 95 bis 97 BewG", "§ 99 Abs. 1 und 3 BewG", "§ 103 Abs. 1 BewG", "§ 103 Abs. 3 BewG", "§ 12 BewG", "§ 151 Abs. 1 Nr. 1 BewG", "§ 157 Abs. 2 und 3 BewG", "§§ 158 bis 175 BewG", "§§ 176 bis 198 BewG", "§ 5 Abs. 4a EStG", "R B 11.5 Abs. 1, 3 und 4 ErbStR", "R B 95 Abs. 2 ErbStR", "R B 99 ErbStR", "R B 103.1 bis R B 103.3 ErbStR"],
    themen: ["Substanzwert", "Mindestwert", "Immaterielle Wirtschaftsgüter", "Firmenwert", "Drohverlustrückstellung", "Rücklagen", "Betriebsgrundstücke"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "4. Substanzwert" },
      { text: "Der Substanzwert kommt als Mindestwert nur zum Ansatz, wenn der gemeine Wert nach dem vereinfachten Ertragswertverfahren (§§ 199 bis 203 BewG) oder mit einem Gutachterwert (Ertragswertverfahren oder andere im gewöhnlichen Geschäftsverkehr für nichtsteuerliche Zwecke übliche Methode) ermittelt wird. Leitet sich der gemeine Wert aus tatsächlichen Verkäufen unter fremdem Dritten ab, ist die Mindestwertregelung nicht anzuwenden (R B 11.5 Abs. 1 ErbStR)." },
      { typ: "titel", text: "a) Umfang des Betriebsvermögens" },
      { text: "Dem Grunde nach sind in die Ermittlung des Substanzwerts alle Wirtschaftsgüter einzubeziehen, die nach den §§ 95 bis 97 BewG zum Betriebsvermögen gehören. Bei Einzelunternehmen, Personengesellschaften und Kapitalgesellschaften im Sinne der §§ 95 bis 97 BewG richtet sich der Umfang des Betriebsvermögens somit nach der Zugehörigkeit der Wirtschaftsgüter zum ertragsteuerlichen Betriebsvermögen am Bewertungsstichtag." },
      { text: "Dem Grunde nach gehören aktive und passive Wirtschaftsgüter auch dann zum ertragsteuerlichen Betriebsvermögen, wenn für sie ein steuerliches Aktivierungs- oder Passivierungsverbot besteht. Eine handelsrechtlich gebotene Rückstellung (z. B. Drohverlustrückstellung), die ertragsteuerlich nicht passiviert werden darf (§ 5 Abs. 4a EStG), kommt im Rahmen der Ermittlung des Substanzwerts gleichwohl zum Ansatz (R B 11.5 Abs. 3 S. 2 und 3 ErbStR)." },
      { text: "Bei der Ermittlung des Substanzwerts sind auch selbst geschaffene oder entgeltlich erworbene immaterielle Wirtschaftsgüter (z. B. Patente, Lizenzen, Warenzeichen, Markenrechte, Konzessionen, Bierlieferrechte) zu berücksichtigen (R B 95 Abs. 2 S. 2 Nr. 4, R B 11.5 Abs. 3 S. 4 ErbStR)." },
      { text: "Der Geschäfts- oder Firmenwert oder Praxiswertbildende Faktoren, denen ein eigenständiger Wert zugewiesen werden kann (z. B. Kundenstamm, Know-how), kommen zum Ansatz, unabhängig davon, ob sie selbst geschaffen oder entgeltlich erworben wurden (R B 95 Abs. 2 S. 2 Nr. 4, R B 11.5 Abs. 3 S. 5 ErbStR)." },
      { text: "Zum Betriebsvermögen gehörende Genossenschaftsanteile sind grundsätzlich im Rahmen der Ermittlung des Substanzwertes als Kapitalforderung nach § 12 BewG mit dem Nennwert zu bewerten (R B 11.5 Abs. 3 S. 6 ErbStR). Eine zukünftige Ertragsteuerbelastung (latente Steuern) bleibt unberücksichtigt." },
      { text: "Da Rücklagen (z. B. Rücklagen nach § 6b EStG, R 6.5 EStR, R. 6.6 EStR) und Ausgleichsposten mit Rücklagencharakter Eigenkapitalcharakter haben, sind sie im Allgemeinen nicht abzugsfähig (§ 103 Abs. 3 BewG, R B 11.5 Abs. 4 ErbStR, R B 103.1 Abs. 2 ErbStR)." },
      { typ: "titel", text: "Durchbrechung der Bestandsidentität Steuerbilanz – bewertungsrechtliches Betriebsvermögen" },
      { typ: "tabelle", spalten: ["Ansatz", "ertragsteuerlich", "bewertungsrechtlich"], zeilen: [
        ["Gewinnansprüche gegen eine beherrschte Gesellschaft als sonstigem Abzug bei der beherrschten Gesellschaft § 103 Abs. 2 BewG", "nein", "ja"],
        ["Rücklagen § 103 Abs. 3 BewG", "ja", "nein"],
        ["Selbst geschaffene immaterielle Wirtschaftsgüter (z. B. Patente Lizenzen, Warenzeichen, Markenrechte, Konzessionen, Bierlieferrechte)", "nein", "ja"],
        ["Geschäfts- oder Firmenwert, Praxiswertfaktoren mit eigenständigem Wert", "ja/nein", "ja"],
        ["Rückstellungen (z. B. Drohverlustrückstellung)", "nein", "ja"],
      ] },
      { typ: "titel", text: "aa) Betriebsgrundstücke" },
      { text: "Die Zugehörigkeit eins Grundstücks zum Betriebsvermögen richtet sich nach den ertragsteuerlichen Grundsätzen (§ 99 Abs. 1 BewG, R B 99 ErbStR). Gehört nur ein Teil des Grundstücks zum Betriebsvermögen, ist der Grundbesitzwert für das gesamte Grundstück nach § 151 Abs. 1 Nr. 1 BewG zu ermitteln und entsprechend aufzuteilen. (die Schreibweise „eins Grundstücks“ so in der Quelle)" },
      { text: "Betriebsgrundstücke, die losgelöst von ihrer Zugehörigkeit zu dem Gewerbebetrieb zum Grundvermögen gehören würden (§ 99 Abs. 1 Nr. 1 BewG), sind gem. § 99 Abs. 3 BewG wie Grundvermögen zu bewerten (§ 157 Abs. 3 BewG, §§ 176 – 198 BewG). Für Betriebsgrundstücke im Sinne des § 99 Abs. 1 Nr. 2 BewG, die losgelöst von ihrer Zugehörigkeit zum Gewerbebetrieb einen Betrieb der Land- und Forstwirtschaft bilden würden, bestimmt § 99 Abs. 3 BewG die Bewertung nach Vorschriften für die Bewertung des Land- und forstwirtschaftlichen Vermögens (§ 157 Abs. 2 BewG, §§ 158 – 175 BewG)." },
      { typ: "titel", text: "bb) Schulden und sonstige Abzüge" },
      { text: "Bei bilanzierenden Gewerbetreibenden und freiberuflich Tätigen sind die Schulden und sonstigen passiven Ansätze dem Grunde nach mit den Steuerbilanzwerten zu berücksichtigen (§ 103 Abs. 1 BewG, R B 103.1 Abs. 1 ErbStR)." },
      { text: "Die Identität zwischen der Steuerbilanz und dem bewertungsrechtlichen Betriebsvermögen wird bei den Rücklagen insoweit durchbrochen, als in der Steuerbilanz gewinnmindernd gebildete Rücklagen nicht abzugsfähig sind (§ 103 Abs. 3 BewG, R B 103.1 Abs. 2, R B 11.5 Abs. 4 ErbStR)." },
      { text: "Hinsichtlich der Schulden und Abzüge bei nicht bilanzierenden Gewerbetreibenden und freiberuflich Tätigen wird auf R B 103.2 ErbStR verwiesen." },
      { text: "Schulden, die mit einem Betriebsgrundstück (§ 99 BewG) in wirtschaftlichen Zusammenhang stehen, sind abzuziehen, soweit sie bei der steuerlichen Gewinnermittlung zum Betriebsvermögen gehören (R B 103.3 ErbStR)." },
    ],
  },
  {
    ...TB1,
    id: "erbst-bew3-4",
    kapitel: "4",
    title: "Substanzwert: Wertermittlung mit den Vereinfachungsregeln und der Ableitung aus der letzten Vermögensaufstellung",
    thema: "Gemeiner Wert als Maßstab, die 30-Prozent-Regel für bewegliches Anlagevermögen, Wiederbeschaffungskosten beim Umlaufvermögen, die Kapitalisierung von Lizenzerträgen sowie die Fortschreibung einer Vermögensaufstellung auf den Besteuerungszeitpunkt – mit zwei Beispielen der Quelle",
    normen: ["§ 109 Abs. 1 BewG", "§ 11 Abs. 1 Satz 1 BewG", "§ 11 Abs. 2 Satz 3 BewG", "§ 151 Abs. 1 Nr. 1 bis 3 BewG", "§ 99 Abs. 1 Nr. 1 BewG", "§ 103 Abs. 1 BewG", "§ 103 Abs. 3 BewG", "§ 12 Abs. 3 ErbStG", "§§ 9, 11 ErbStG", "R B 11.5 Abs. 5 bis 8 ErbStR", "R B 109.3 Abs. 1 bis 4 ErbStR"],
    themen: ["Gemeiner Wert", "30-Prozent-Regel", "Umlaufvermögen", "Lizenzen", "Vermögensaufstellung", "Zeitanteilige Ableitung"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "b) Wertermittlung" },
      { text: "Die zum Betriebsvermögen gehörenden Wirtschaftsgüter und sonstigen aktiven Ansätze sowie die zum Betriebsvermögen gehörenden Schulden und sonstigen Abzüge sind bei der Ermittlung des Substanzwerts mit dem gemeinen Wert anzusetzen (§ 109 Abs. 1, § 11 Abs. 2 Satz 3 BewG)." },
      { text: "Grundbesitz, Betriebsvermögen und Anteile an Kapitalgesellschaften, für die § 151 Abs. 1 Nr. 1 bis 3 BewG eine gesonderte Wertfeststellung vorsieht, kommen mit dem auf den Bewertungsstichtag festgestellten Wert zum Ansatz (R B 11.5 Abs. 5 S. 2 ErbStR)." },
      { text: "Wirtschaftsgüter des beweglichen Anlagevermögens können aus Vereinfachungsgründen mit einem angemessenen Restwert in Höhe von mindestens 30 % der Anschaffungs- oder Herstellungskosten angesetzt werden, wenn dies nicht zu unzutreffenden Ergebnissen führt (R B 11.5 Abs. 7 ErbStR)." },
      { text: "Der gemeine Wert von Erfindungen und Urheberrechten, die in Lizenz vergeben oder in sonstiger Weise gegen Entgelt einem Dritten zur Ausnutzung überlassen sind, wird in der Weise ermittelt, dass der Anspruch auf die in wiederkehrenden Zahlungen bestehende Gegenleistung kapitalisiert wird, soweit keine anderen geeigneten Bewertungsgrundlagen zur Verfügung stehen. Ist keine feste Lizenzgebühr vereinbart oder die Vertragsdauer unbestimmt, kann auf die letzte vor dem Besteuerungszeitpunkt gezahlte Lizenzgebühr und eine Laufzeit von acht Jahren abgestellt werden. Der Kapitalisierung ist der marktübliche Zinssatz zugrunde zu legen (R B 11.5 Abs. 6 ErbStR)." },
      { text: "Wirtschaftsgüter des Umlaufvermögens sind gem. R B 11.5 Abs. 8 ErbStR mit ihren Wiederbeschaffungs- oder Wiederherstellungskosten anzusetzen." },
      { typ: "titel", text: "Wertansatz – gemeiner Wert" },
      { typ: "tabelle", spalten: ["Wirtschaftsgut", "Wertansatz"], zeilen: [
        ["Grundbesitz, Betriebsvermögen, Anteile an Kapitalgesellschaften", "gesondert festgestellter Wert, § 151 Abs. 1 Nr. 1 bis 3 BewG"],
        ["WG des beweglichen abnutzbaren Anlagevermögens", "Gemeiner Wert, vereinfacht mindestens 30 % der AK oder HK, R B 11.5 Abs. 7 ErbStR"],
        ["WG des Umlaufvermögens", "Wiederbeschaffungs- oder Wiederherstellungskosten, R B 11.5 Abs. 8 ErbStR"],
        ["Erfindungen, Urheberrechte", "Kapitalwert der in wiederkehrenden Zahlungen bestehenden Gegenleistungen, R B 11.5 Abs. 6 ErbStR"],
      ] },
      { typ: "titel", text: "Beispiel: Substanzwert eines Einzelunternehmens zum 09.08.2025" },
      { text: "Zu bewerten ist ein Einzelunternehmen zum Bewertungsstichtag 09.08.2025. Die Bilanz zum Todestag stellt sich wie folgt dar:" },
      { typ: "tabelle", spalten: ["Aktiva", "Betrag", "Passiva", "Betrag"], zeilen: [
        ["Grund und Boden (Produktion)", "230.000 €", "Kapital", "932.000 €"],
        ["Gebäude (Produktion)", "407.000 €", "Verbindlichkeiten", "15.000 €"],
        ["Maschinen", "30.000 €", "Rücklagen", "30.000 €"],
        ["Aktien", "60.000 €", "Gewerbesteuer-Rückstellung", "10.000 €"],
        ["Forderungen", "190.000 €", "", ""],
        ["Bank", "70.000 €", "", ""],
        ["Summe", "987.000 €", "Summe", "987.000 €"],
      ] },
      { text: "Der nach den Vorschriften des BewG ermittelte Bedarfswert der zum notwendigen Betriebsvermögen gehörenden Produktionshalle beträgt 710.000 €. Die Anschaffungskosten der Aktien, die ebenfalls notwendiges Betriebsvermögen darstellen, betrugen 60.000 € (Kurswert 90.000 €; Beteiligung zu 10 % am Stammkapital). Dem Bilanzwert der Maschinen liegen Anschaffungskosten in Höhe von 80.000 € zugrunde. Der gemeine Wert der Maschinen ist nicht bekannt. Die Bilanzansätze der übrigen Wirtschaftsgüter und Schulden entsprechen den gemeinen Werten." },
      { text: "Wie hoch ist der Substanzwert (Mindestwert)?" },
      { typ: "titel", text: "Lösung" },
      { typ: "tabelle", spalten: ["Position", "Betrag", "Vorschrift"], zeilen: [
        ["Bebautes Grundstück (Produktion)", "710.000 €", "Bedarfswert Betriebsgrundstück, § 11 Abs. 2 Satz 3 zweiter Halbsatz i. V. mit § 99 Abs. 1 Nr. 1 BewG"],
        ["Maschinen (AK Maschinen 80.000 € ./. 70 % 56.000 €)", "24.000 €", "R B 11.5 Abs. 7 ErbStR"],
        ["Aktien", "90.000 €", "Kurswert, § 11 Abs. 1 Satz 1 BewG"],
        ["Forderungen", "190.000 €", ""],
        ["Bank", "70.000 €", ""],
        ["Verbindlichkeiten", "./. 15.000 €", "§ 103 Abs. 1 BewG"],
        ["Rücklagen", "---", "kein Ansatz, § 11 Abs. 2 Satz 3 zweiter Halbsatz i. V. mit § 103 Abs. 3 BewG"],
        ["Gewerbesteuer-Rückstellung", "./. 10.000 €", "§ 103 Abs. 1 BewG"],
        ["Substanzwert", "1.059.000 €", ""],
      ] },
      { text: "Rechnerische Kontrolle: 710.000 + 24.000 + 90.000 + 190.000 + 70.000 − 15.000 − 10.000 = 1.059.000 €. Der Grund und Boden und das Gebäude der Produktion gehen mit dem einheitlichen Bedarfswert von 710.000 € statt mit den Bilanzwerten von zusammen 637.000 € ein; die Maschinen mit 30 % der Anschaffungskosten (24.000 €) statt mit dem Bilanzwert von 30.000 €; die Aktien mit dem Kurswert von 90.000 € statt mit den Anschaffungskosten von 60.000 €." },
      { typ: "titel", text: "Beispiel: Vermögensaufstellung mit Gegenüberstellung Steuerbilanz und Wert nach BewG" },
      { text: "Zum Nachlass des verstorbenen A, der auf die allein erbende Tochter übergeht, gehört ein Einzelunternehmen, für das zum Bewertungsstichtag die nachstehende Bilanz erstellt wurde. Der im vereinfachten Ertragswertverfahren ermittelte Wert beträgt 2.800.000 € (§ 11 Abs. 2, §§ 199 - 203 BewG)." },
      { typ: "tabelle", spalten: ["Aktiva", "Steuerbilanz"], zeilen: [
        ["Grund und Boden", "500.000 €"],
        ["Gebäude", "1.000.000 €"],
        ["Außenanlagen", "75.000 €"],
        ["Firmenwert (selbst geschaffen, eigenständiger Wert 16.000 €)", "----"],
        ["Bewegliches abnutzbares Anlagevermögen", "300.000 €"],
        ["Umlaufvermögen", "86.000 €"],
        ["Übrige Aktiva (Kundenforderungen, Bankguthaben u. a.)", "150.000 €"],
        ["Summe", "2.111.000"],
      ] },
      { typ: "tabelle", spalten: ["Passiva", "Steuerbilanz"], zeilen: [
        ["Kapital", "1.567.000 €"],
        ["Verbindlichkeiten", "480.000 €"],
        ["Rücklage § 6b EStG", "64.000 €"],
        ["Substanzwert", "2.111.000 €"],
      ] },
      { typ: "tabelle", spalten: ["Wert nach BewG", "Betrag"], zeilen: [
        ["Grundbesitzwert für das in vollem Umfang betrieblich genutzte Geschäftsgrundstück (§ 12 Abs. 3 ErbStG, § 151 Abs. 1 Nr. 1 BewG)", "3.000.000 €"],
        ["Bewegliches abnutzbares Anlagevermögen gemeiner Wert (30 % AK/HK)", "450.000 €"],
        ["Umlaufvermögen Wiederbeschaffungs-/Wiederherstellungskosten", "95.000 €"],
      ] },
      { text: "Redaktioneller Hinweis: Die Quelle stellt dieses Beispiel als Vermögensaufstellung mit zwei Spalten dar und weist für die Spalte „Wert nach BewG“ keine Summe aus; ein Lösungssatz folgt nicht. Der Substanzwert nach BewG ist hier deshalb nicht ergänzt. Die zugehörige Musterlösung liegt im Drive als eigene Datei (Bewertung 2025-2026 Teil 3 – Lösung)." },
      { text: "Eigene Kontrollrechnung, nicht Bestandteil der Quelle: Aus den angegebenen Werten – Grundbesitzwert 3.000.000 €, Firmenwert 16.000 €, bewegliches Anlagevermögen 450.000 €, Umlaufvermögen 95.000 €, übrige Aktiva 150.000 € abzüglich Verbindlichkeiten 480.000 € und ohne Ansatz der § 6b-Rücklage – ergäbe sich ein Substanzwert von 3.231.000 €, der über dem vereinfachten Ertragswert von 2.800.000 € läge und damit als Mindestwert zum Ansatz käme. Ob die Quelle genau so rechnet, ist ihrem Text nicht zu entnehmen." },
      { typ: "titel", text: "Ableitung aus der letzten Vermögensaufstellung" },
      { text: "Bei der Ermittlung des Substanzwerts ist das Betriebsvermögen mit dem Wert zum Bewertungsstichtag (§§ 9, 11 ErbStG) zugrunde zu legen (R B 109.3 Abs. 1 ErbStR)." },
      { text: "Der Erwerber von Betriebsvermögen hat nach amtlichem Vordruck eine Vermögensaufstellung auf den Bewertungsstichtag als Anlage zur Feststellungserklärung abzugeben, aus der sich die für die Wertermittlung erforderlichen Angaben ergeben (R B 109.3 Abs. 4 ErbStR)." },
      { text: "Entsteht die Erbschaft- bzw. Schenkungsteuer - wie im Regelfall - zu einem Zeitpunkt, der nicht mit dem Schluss des Wirtschaftsjahrs übereinstimmt, auf das der Betrieb regelmäßig einen jährlichen Abschluss macht, und erstellt der Betrieb keinen Zwischenabschluss, kann aus Vereinfachungsgründen der Wert des Betriebsvermögens aus der auf den Schluss des letzten vor dem Besteuerungszeitpunkt endenden Wirtschaftsjahrs erstellten Vermögensaufstellung abgeleitet werden, sofern dies im Einzelfall nicht zu unangemessenen Ergebnissen führt (R B 109.3 Abs. 2 ErbStR). Für diesen Fall bedarf es dann einer besonderen Ermittlung des Substanzwerts auf den Bewertungsstichtag." },
      { text: "Kann der Wert aus einer Vermögensaufstellung zum Ende des letzten Wirtschaftsjahres abgeleitet werden, ist zunächst der Saldo der gemeinen Werte derjenigen Wirtschaftsgüter, sonstigen aktiven Ansätze, Schulden und sonstigen Abzüge auf den Abschlusszeitpunkt zu bilden, die bei der Ermittlung des Substanzwerts des Betriebs anzusetzen sind (Ausgangswert)." },
      { text: "Den bis zum Besteuerungszeitpunkt eingetretenen Veränderungen ist durch vereinfachte Korrekturen Rechnung zu tragen (R B 109.3 Abs. 3 ErbStR). Als Korrekturen kommen insbesondere in Betracht:" },
      { text: "1. Hinzurechnung des Gewinns und der Einlagen sowie Abrechnung des Verlustes und der Entnahmen, die auf den Zeitraum vom letzten Abschlusszeitpunkt vor dem Besteuerungszeitpunkt bis zum Besteuerungszeitpunkt entfallen; Hinzurechnung von Abschreibungen (Normal-AfA, erhöhte AfA, Sonderabschreibungen, Teilwertabschreibungen) auf betrieblichen Grundbesitz (Grund und Boden, Betriebsgebäude, Außenanlagen, sonstige wesentliche Bestandteile und Zubehör), die das Ergebnis gemindert haben, mit dem Wertansatz der Betriebsgrundstücke aber abgegolten sind, sowie Abzug entsprechender Teilwertzuschreibungen;" },
      { text: "2. Berücksichtigung von Vermögensänderungen infolge Veräußerung oder Erwerb von Anlagevermögen, insbesondere von Betriebsgrundstücken, Wertpapieren, Anteilen und Genussscheinen von Kapitalgesellschaften und Beteiligungen an Personengesellschaften, soweit sie sich nicht bereits nach Nummer 1 ausgewirkt haben." },
      { text: "Der auf den Zeitraum vom letzten Abschlusszeitpunkt vor dem Besteuerungszeitpunkt bis zum Besteuerungszeitpunkt entfallende Gewinn oder Verlust und die Aufwendungen auf den Grundbesitz (vgl. Nr. 2) sind zeitanteilig aus den entsprechenden Jahresbeträgen abzuleiten, soweit dies nicht im Einzelfall zu unangemessenen Ergebnissen führt (R B 109.3 Abs. 3 S. 2 Nr. 1 S. 5 ErbStR). (die Quelle verweist im Klammerzusatz auf „Nr. 2“, obwohl die Aufwendungen auf den Grundbesitz unter Nummer 1 aufgeführt sind)" },
      { typ: "titel", text: "Beispiel: Grundstückserwerb zwischen Bilanzstichtag und Besteuerungszeitpunkt" },
      { text: "Zwischen dem Bilanzstichtag 31.12.2024 und dem Besteuerungszeitpunkt 30.09.2025 wurde ein Betriebsgrundstück mit einem Grundbesitzwert von 600.000 € erworben. Der zum Teil fremdfinanzierte Kaufpreis betrug 610.000 €." },
    ],
  },
];

export default erbstBewertungTeil3;
