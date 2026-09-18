/* Erbschaft- und Schenkungsteuer, Teil 2: Steuerbefreiungen, Verschonungsregelungen,
   Berechnung der Steuer (Unterrichtsmaterial zum Steuerberaterlehrgang,
   Dipl.-Finanzwirt Martin Schäfer, Stand Dezember 2025).

   Das Skript ist wortlautgetreu erfasst. Übersichten, Schaubilder und Beispiele der Quelle
   stehen als Tabellen. Ergänzt sind nur Thema, Normenliste und Themenchips sowie –
   ausdrücklich als solche gekennzeichnet – redaktionelle Hinweise und eigene
   Kontrollrechnungen. Wo die Quelle ein Beispiel ohne Ergebnis lässt, ist das vermerkt;
   erfunden wird nichts. Die zugehörige Lösungsdatei liegt im Drive unter
   1LASeajqIfpq5PYMCg1htyXI7voY2EF_4.

   Personenbezogene Wasserzeichen der Quell-PDF sind nicht übernommen.
   Blocktypen: text | titel | tabelle. */

const VERFASSER = "Martin Schäfer";
const RECHTSSTAND = "Stand Dezember 2025";

const TV1 = { teil: "V-I", teilLabel: "Skript Teil 2 · Abschnitt I", teilTitel: "Sachliche Steuerbefreiungen nach § 13 ErbStG" };
const TV2 = { teil: "V-II", teilLabel: "Skript Teil 2 · Abschnitt II (Tz. 1 und 2)", teilTitel: "Verschonung von Betriebsvermögen: Überblick und begünstigungsfähiges Vermögen" };

export const erbstVerschonungQuelle = {
  reihe: "Erbschaft- und Schenkungsteuer · Unterrichtsmaterial zum Steuerberaterlehrgang, Teil 2 · Martin Schäfer",
  stand: "Dezember 2025 · Rechtsstand 2025/2026",
  verfasser: VERFASSER,
  didaktik: [
    "Der Teil 2 des Erbschaftsteuerskripts behandelt die zweite Hälfte der Klausur: die Steuerbefreiungen der §§ 13 bis 13d ErbStG, die Verschonung des Betriebsvermögens und die eigentliche Steuerberechnung. Er schließt damit genau die Lücke, die die Auswertung der Examensklausuren als wichtigsten offenen Posten des ErbSt-Campus ausweist – die Übertragung von Betriebsvermögen nach §§ 13a, 13b ErbStG kam in 11 von 11 Klausuren vor.",
    "Der Aufbau folgt dem Gesetz: erst die sachlichen Befreiungen des § 13 ErbStG einschließlich des Familienheims, dann der große Block der §§ 13a bis 13c und 28a ErbStG vom begünstigungsfähigen über das begünstigte Vermögen und das Verwaltungsvermögen bis zu Lohnsummen- und Behaltensregelung, anschließend die Großerwerbe über 26 Mio. €, die Befreiung für zu Wohnzwecken vermietete Grundstücke und schließlich Steuerklassen, Freibeträge, Steuersätze, Tarifbegrenzung und die Berücksichtigung früherer Erwerbe.",
    "Die Beispiele der Quelle sind überwiegend kurz und zielen jeweils auf eine einzelne Rechtsfrage. Wo die Quelle ein Beispiel ohne Lösung lässt, ist das hier vermerkt; die zugehörige Lösungsdatei liegt im selben Drive-Ordner.",
  ],
};

const QUELLE = erbstVerschonungQuelle;

export const erbstVerschonung = [
  {
    ...TV1,
    id: "erbst-v-1",
    kapitel: "1",
    title: "Hausrat, Kunstgegenstände und Sammlungen sowie Gegenstände im öffentlichen Interesse",
    thema: "Der Einstieg über § 10 Abs. 1 S. 1 ErbStG und die nach Steuerklassen gestaffelten Freibeträge des § 13 Abs. 1 Nr. 1 ErbStG samt ihrer Grenzen sowie die teilweise Steuerfreiheit für Gegenstände, deren Erhaltung im öffentlichen Interesse liegt, mit der zehnjährigen Nachbehaltensfrist",
    normen: ["§ 10 Abs. 1 Satz 1 ErbStG", "§ 13 Abs. 1 Nr. 1 ErbStG", "§ 13 Abs. 1 Nr. 2 und 3 ErbStG", "§ 16 ErbStG", "§ 17 ErbStG", "§ 13a ErbStG", "§ 13b ErbStG", "§ 13d ErbStG", "§ 175 Abs. 1 Nr. 2 AO"],
    themen: ["sachliche Steuerbefreiungen", "Hausrat", "Kunstgegenstände", "Freibeträge nach Steuerklassen", "öffentliches Interesse", "Nachbehaltensfrist"],
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    quelle: QUELLE,
    bloecke: [
      { typ: "titel", text: "I. Sachliche Steuerbefreiungen nach § 13 ErbStG" },
      { text: "Gem. § 10 Abs. 1 S. 1 ErbStG gilt als steuerpflichtiger Erwerb die Bereicherung des Erwerbers, soweit sie nicht steuerfrei ist. Hinsichtlich der persönlichen Befreiungen wird auf § 16 ErbStG (Persönliche Freibeträge) und § 17 ErbStG (Besonderer Versorgungsfreibetrag) verwiesen. Die sachlichen Steuerbefreiungen regelt § 13 ErbStG, jede der dort aufgeführten Befreiungsvorschriften ist für sich anzuwenden. Darüber hinaus enthält § 13a ErbStG eine Steuerbefreiung (Verschonungsregelung) für Betriebsvermögen, Betriebe der Land- und Forstwirtschaft und Anteile an Kapitalgesellschaften (Begünstigtes Vermögen i. S. d. § 13b ErbStG) und § 13d ErbStG eine Steuerbefreiung für zu Wohnzwecken vermietete Grundstücke." },
      { typ: "titel", text: "1. Hausrat, Kunstgegenstände, Sammlungen und andere bewegliche körperliche Gegenstände" },
      { text: "Die in § 13 Abs. 1 Nr. 1 ErbStG geregelten Freibeträge für Hausrat einschließlich Wäsche und Kleidungsstücke sowie Kunstgegenstände, Sammlungen und andere bewegliche körperliche Gegenstände sind in ihrer Höhe von der jeweiligen Steuerklasse abhängig. Für Kunstgegenstände und Sammlungen gilt § 13 Abs. 1 Nr. 1 ErbStG nur, wenn diese nicht nach § 13 Abs. 1 Nr. 2 ErbStG befreit sind." },
      { text: "Beim Erwerb durch Personen der Steuerklasse I beträgt der Freibetrag 41.000 € (§ 13 Abs. 1 Nr. 1a ErbStG). Für andere bewegliche körperliche Gegenstände, zu denen neben den Kraftfahrzeugen auch Kunstgegenstände und Sammlungen gehören, wird nach § 13 Abs. 1 Nr. 1b ErbStG bei Steuerklasse I ein Freibetrag von 12.000 € gewährt." },
      { text: "In den Steuerklassen II und III ist für Hausrat einschließlich Wäsche und Kleidungsstücke sowie für andere bewegliche körperliche Gegenstände einheitlich ein Freibetrag von 12.000 € zu berücksichtigen (§ 13 Abs. 1 Nr. 1c ErbStG)." },
      { text: "Die Freibeträge werden jeweils pro Person (Erwerber) gewährt und folgen einer Weitergabeverpflichtung. Hat ein Erbe entsprechende Nachlassgegenstände i. S. d. § 13 Abs. 1 Nr. 1 ErbStG an einen Vermächtnisnehmer weiterzugeben, kann nur der Vermächtnisnehmer und nicht der Erbe die Freibeträge beanspruchen." },
      { typ: "titel", text: "Freibeträge nach § 13 Abs. 1 Nr. 1 ErbStG – Überblick" },
      { typ: "tabelle", spalten: ["", "Hausrat einschl. Wäsche und Kleidungsstücke", "andere bewegl. körperliche Gegenstände"], zeilen: [
        ["Steuerklasse I", "41.000 €", "12.000 €"],
        ["Steuerklasse II und III", "12.000 €", "12.000 €"],
      ] },
      { text: "Redaktioneller Hinweis: In der Quelle steht der Betrag von 12.000 € für die Steuerklassen II und III nur einmal, über beide Spalten hinweg – § 13 Abs. 1 Nr. 1c ErbStG fasst Hausrat und andere bewegliche körperliche Gegenstände dort zu einem einheitlichen Freibetrag zusammen. Für die Tabellendarstellung ist der Betrag in beide Spalten übernommen; ein zweiter Freibetrag entsteht dadurch nicht." },
      { text: "Die Befreiung gilt gem. § 13 Abs. 1 Nr. 1 Satz 2 ErbStG nicht für Gegenstände, die zum land- und forstwirtschaftlichen Vermögen, zum Grundvermögen oder zum Betriebsvermögen gehören, für Zahlungsmittel, Wertpapiere, Münzen, Edelmetalle, Edelsteine und Perlen." },
      { typ: "titel", text: "2. Gegenstände, deren Erhaltung im öffentlichen Interesse liegt" },
      { text: "Gem. § 13 Abs. 1 Nr. 2 und 3 ErbStG bleiben Grundbesitz oder Teile von Grundbesitz, Kunstgegenstände, Kunstsammlungen, wissenschaftliche Sammlungen, Bibliotheken und Archive ganz oder teilweise (60 %, Grundbesitz oder Teile von Grundbesitz 85 % ihres Werts) steuerfrei, wenn deren Erhaltung im öffentlichen Interesse liegt und bestimmte Zusatzvoraussetzungen erfüllt sind." },
      { text: "Die Steuerbefreiung geht mit Wirkung für die Vergangenheit verloren, wenn die Gegenstände innerhalb von 10 Jahren nach dem Erwerb veräußert werden oder die Voraussetzungen für die Steuerbefreiung innerhalb dieses Zeitraums entfallen. Der ursprüngliche Erbschafsteuerbescheid ist dann nach § 175 Abs. 1 Nr. 2 AO zu berichtigen. (die Schreibweise „Erbschafsteuerbescheid“ so in der Quelle)" },
    ],
  },
  {
    ...TV1,
    id: "erbst-v-2",
    kapitel: "2",
    title: "Das Familienheim in den drei Varianten des § 13 Abs. 1 Nr. 4a bis 4c ErbStG",
    thema: "Die Steuerfreiheit selbst genutzter Wohnimmobilien – lebzeitige Zuwendung unter Ehegatten, Erwerb von Todes wegen durch den überlebenden Ehegatten und Erwerb durch Kinder mit der 200-qm-Grenze –, jeweils mit Weitergabeverpflichtung, Zehnjahresfrist und den zwingenden Gründen, sowie der Katalog der sonstigen Befreiungen des § 13 Abs. 1 ErbStG",
    normen: ["§ 13 Abs. 1 Nr. 4a ErbStG", "§ 13 Abs. 1 Nr. 4b ErbStG", "§ 13 Abs. 1 Nr. 4c ErbStG", "§ 13 Abs. 1 Nr. 7, 9, 11, 14, 15, 16 und 18 ErbStG", "§ 181 Abs. 1 Nr. 1 bis 5 BewG", "R E 13.3 Abs. 2 ErbStR", "R E 13.4 Abs. 6 ErbStR"],
    themen: ["Familienheim", "Selbstnutzung", "Zehnjahresfrist", "200-qm-Grenze", "Weitergabeverpflichtung", "sonstige Steuerbefreiungen"],
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    quelle: QUELLE,
    bloecke: [
      { typ: "titel", text: "3. Steuerfreiheit für selbst genutzte Wohnimmobilien" },
      { text: "Zuwendungen unter Lebenden, mit denen ein Ehegatte dem anderen Ehegatten das (Mit-)Eigentum an einem bebauten Grundstück im Sinne des § 181 Abs. 1 Nr. 1 bis 5 BewG verschafft (u. a. Ein- und Zweifamilienhäuser, Mietwohngrundstücke, Wohnungseigentum), soweit darin eine Wohnung zu eigenen Wohnzwecken genutzt wird (Familienheim), sind gem. § 13 Abs. 1 Nr. 4a ErbStG steuerfrei. Die Regelung gilt auch für Zuwendungen zwischen Lebenspartnern (§ 13 Abs. 1 Nr. 4a Satz 3 ErbStG). In der Wohnung muss sich der Mittelpunkt des familiären Lebens befinden. Die Befreiung eines Erwerbs ist deshalb nicht möglich, wenn die Wohnung als Ferien- oder Wochenendwohnung genutzt wird oder für einen Berufspendler nur die Zweitwohnung darstellt (R E 13.3 Abs. 2 S. 4 und 5 ErbStR)." },
      { text: "Während die Regelung des § 13 Abs. 1 Nr. 4a ErbStG für die Steuerbefreiung auf lebzeitige Zuwendung von selbstgenutzten Wohnimmobilien abstellt, ist auch der Erwerb von Todes wegen einer vom Erblasser zu Wohnzwecken selbstgenutzten Immobilie durch den Ehegatten bzw. einen eingetragenen Lebenspartner steuerfrei, wenn der erwerbende Ehegatte/Lebenspartner das erworbene Grundstück für einen Zeitraum von 10 Jahren weiter zu eigenen Wohnzwecken nutzt (§ 13 Abs. 1 Nr. 4b ErbStG)." },
      { text: "Ein Erwerber kann die Steuerbefreiung nicht in Anspruch nehmen, soweit er das begünstigte Vermögen auf Grund einer letztwilligen Verfügung des Erblassers (z. B. Vermächtnis) oder eine rechtsgeschäftlichen Verfügung des Erblassers auf einen Dritten übertragen muss (Weitergabeverpflichtung). Das Gleiche gilt, wenn der Erbe im Rahmen der Teilung des Nachlasses begünstigtes Vermögen einem Mieterben überträgt. (die Wendungen „eine rechtsgeschäftlichen Verfügung“ und „einem Mieterben“ so in der Quelle; gemeint ist der Miterbe)" },
      { text: "Wird die Nutzung innerhalb des Zehn-Jahres-Zeitraums ohne objektiv zwingende Gründe aufgegeben, entfällt die Steuerbefreiung rückwirkend. Objektiv zwingende Gründe liegen z. B im Fall des Todes oder im Fall einer Pflegebedürftigkeit vor, die die Führung eines eigenen Haushalts nicht mehr zulässt, nicht dagegen bei einer beruflichen Versetzung (R E 13.4 Abs. 6 S. 9 ErbStR)." },
      { text: "Unter grundsätzlich identischen Voraussetzungen ist auch der Erwerb von Todes wegen von vom Erblasser zu eigenen Wohnzwecken genutzten Grundstücken durch Kinder oder Enkel, deren Eltern vorverstorben sind, steuerfrei (§ 13 Abs. 1 Nr. 4c ErbStG). Auch insoweit führt eine Aufgabe der eigenen Wohnnutzung innerhalb von 10 Jahren nach dem Erwerb unter den oben geschilderten Voraussetzungen rückwirkend zu einem vollständigen Verlust der Steuerbefreiung. Die Steuerbefreiung wird insoweit jedoch nicht gewährt, soweit die Wohnfläche 200 qm übersteigt." },
      { typ: "titel", text: "Beispiel:" },
      { text: "Der Erblasser E hinterlässt seinen beiden Kindern K1 und K2 je zur Hälfte ein bis dahin von ihm selbstgenutztes Einfamilienhaus mit einem Grundbesitzwert von 450.000 € und einer Wohnfläche von 300 qm. Beide Kinder nutzen das Haus nach seinem Tode mehr als 10 Jahre." },
      { text: "Da auf die Wohnung des Erblassers abzustellen ist, sind insgesamt nur 200 qm begünstigt, das entspricht 2/3 der Gesamtwohnfläche von 300 qm. Bei jedem Kind sind mithin von dem hälftigen Grundbesitzwert von 225.000 € nur 2/3 (= 150.000 €) befreit." },
      { text: "Redaktioneller Hinweis: Die Lösung steht in der Quelle. Nachgerechnet: 450.000 € / 2 = 225.000 € je Kind, davon 2/3 = 150.000 € steuerfrei, 75.000 € je Kind bleiben steuerpflichtig. Der Kern der Regelung wird an der Zahl sichtbar – die 200-qm-Grenze bezieht sich auf die Wohnung des Erblassers, nicht auf den Erwerbsanteil des einzelnen Kindes; sie wird also nicht pro Kind gewährt." },
      { text: "Ist der Erwerber verpflichtet ist, das begünstigt erworbene Grundstück auf Dritte zu übertragen (z. B. aufgrund eines Vermächtnisses oder einer Teilungsanordnung) oder das Grundstück im Rahmen der Teilung des Nachlasses (z. B. bei der Erbauseinandersetzung) an Miterben weiterzugeben, kann der Erwerber die Steuerbefreiung nicht in Anspruch nehmen. (die doppelte Wendung „Ist der Erwerber verpflichtet ist“ so in der Quelle)" },
      { typ: "titel", text: "Steuerbefreiungen § 13 Abs. 1 Nr. 4a bis 4c ErbStG – Überblick" },
      { typ: "tabelle", spalten: ["§ 13 Abs. 1 Nr. 4a ErbStG", "§ 13 Abs. 1 Nr. 4b ErbStG", "§ 13 Abs. 1 Nr. 4c ErbStG"], zeilen: [
        ["Zuwendungen unter Lebenden", "Erwerb von Todes wegen", "Erwerb von Todes wegen"],
        ["Ehegatten/Lebenspartner", "Ehegatten/Lebenspartner", "Kinder oder Kinder verstorbener Kinder der Steuerklasse I Nr. 2"],
        ["Familienheim = Nutzung zu eigenen Wohnzwecken", "Familienwohnheim = Nutzung zu eignen Wohnzwecken durch den Erblasser bis zum Erbfall, Ausnahme: zwingende Hinderungsgründe", "Familienwohnheim = wie Nr. 4b und soweit die Wohnfläche der Wohnung 200 qm nicht übersteigt"],
        ["", "unverzügliche Selbstnutzung durch den Erwerber", "unverzügliche Selbstnutzung durch den Erwerber"],
        ["", "Wegfall der Steuerbefreiung bei Aufgabe der Selbstnutzung innerhalb von 10 Jahren nach dem Erwerb, Ausnahme: zwingende Gründe", "Wegfall der Steuerbefreiung bei Aufgabe der Selbstnutzung innerhalb von 10 Jahren nach dem Erwerb, Ausnahme: zwingende Gründe"],
      ] },
      { text: "Redaktioneller Hinweis: Die Übersicht ist als Tabelle wiedergegeben; die Spalte zu Nr. 4a hat in der Quelle nur drei Einträge, die beiden letzten Zeilen bleiben dort leer. Die Schreibweise „zu eignen Wohnzwecken“ steht so in der Quelle. Inhaltlich zeigt die Gegenüberstellung den entscheidenden Unterschied: Die lebzeitige Zuwendung nach Nr. 4a kennt weder eine Behaltensfrist noch eine Flächengrenze, der Erwerb von Todes wegen nach Nr. 4b eine Zehnjahresfrist, und nur Nr. 4c für Kinder zusätzlich die 200-qm-Grenze." },
      { typ: "titel", text: "4. Sonstige Steuerbefreiungen" },
      { text: "Aus § 13 Abs. 1 ErbStG ergeben sich u. a. noch folgende Steuerbefreiungen:" },
      { text: "– Ansprüche nach dem Lastenausgleichsgesetz und ähnlichen Gesetzen, § 13 Abs. 1 Nr. 7 ErbStG," },
      { text: "– Zuwendungen als Dank für Pflege und Unterhalt bis zu 20.000 €, § 13 Abs. 1 Nr. 9 ErbStG," },
      { text: "– Verzicht auf die Geltendmachung des Pflichtteils- oder des Erbersatzanspruchs, § 13 Abs. 1 Nr. 11 ErbStG," },
      { text: "– übliche Gelegenheitsgeschenke, § 13 Abs. 1 Nr. 14 ErbStG," },
      { text: "– Zuwendungen an den Bund, ein Land oder eine inländische Gemeinde, § 13 Abs. 1 Nr. 15 ErbStG," },
      { text: "– Zuwendungen an Religionsgesellschaften und Körperschaften, Personenvereinigungen und Vermögensmassen, die kirchlichen, mildtätigen oder gemeinnützigen Zwecken dienen, § 13 Abs. 1 Nr. 16 ErbStG," },
      { text: "– Zuwendungen an politische Parteien, § 13 Abs. 1 Nr. 18 ErbStG." },
    ],
  },
  {
    ...TV2,
    id: "erbst-v-3",
    kapitel: "1",
    title: "Die Verschonung im Überblick: Regelverschonung, Optionsverschonung und die Schwelle von 26 Mio. €",
    thema: "Der Einstieg in die §§ 13a bis 13c und 28a ErbStG mit dem Verschonungsabschlag von 85 %, dem gleitenden Abzugsbetrag von höchstens 150.000 €, der Optionsverschonung zu 100 % und dem Wahlrecht bei Großerwerben zwischen abschmelzendem Verschonungsabschlag und Verschonungsbedarfsprüfung, dazu das Schaubild der Quelle zur Regelverschonung",
    normen: ["§ 13a Abs. 1 Satz 1 ErbStG", "§ 13a Abs. 2 ErbStG", "§ 13a Abs. 10 ErbStG", "§ 13b Abs. 1 Nr. 1 bis 3 ErbStG", "§ 13b Abs. 2 ErbStG", "§ 13c ErbStG", "§ 28a ErbStG", "BVerfG vom 17.12.2014, 1 BvL 21/12"],
    themen: ["Regelverschonung", "Optionsverschonung", "Abzugsbetrag", "Schwellenwert 26 Mio. €", "Verschonungsbedarfsprüfung", "Verwaltungsvermögen"],
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    quelle: QUELLE,
    bloecke: [
      { typ: "titel", text: "II. Steuerbefreiung für Betriebsvermögen, Betriebe der Land- und Forstwirtschaft und Anteile an Kapitalgesellschaften" },
      { typ: "titel", text: "1. Allgemeines" },
      { text: "Die §§ 13a bis 13c und 28a ErbStG regeln die zu gewährenden Verschonungen beim Erwerb von begünstigtem Betriebsvermögen, land- und forstwirtschaftlichem Vermögen oder begünstigten Anteilen an Kapitalgesellschaften (§ 13b Abs. 2 ErbStG). Die Regelverschonung beträgt 85 % (§ 13a Abs. 1 Satz 1 ErbStG) mit einem zusätzlichen gleitenden Abzugsbetrag von höchstens 150 000 € (§ 13a Abs. 2 ErbStG), wenn der Wert des begünstigten Vermögens (§ 13b Abs. 2 ErbStG) den Schwellenwert von 26 Millionen € nicht überschreitet. Auf Antrag wird statt der Regelverschonung eine Befreiung zu 100 % gewährt (Optionsverschonung, § 13a Abs. 10 ErbStG)." },
      { text: "Einen Überblick über die gesetzlichen Bestimmungen zur Regelverschonung zeigt das Schaubild auf der nächsten Seite." },
      { text: "Entsprechend der Forderung des BVerfG (Urteil vom 17.12.2014, 1 BvL 21/12) dass im Zusammenhang mit Großerwerben von begünstigtem Vermögen im Sinne des § 13b Abs. 2 ErbStG ein Verschonungsbedürfnis nachgewiesen werden muss, sieht das Gesetz in den Fällen, in denen der Erwerb die Prüfschwelle von 26 Mio. € überschreitet, ein Wahlrecht für den Erwerber vor. Insoweit besteht die Möglichkeit, entweder einen besonderen (abschmelzenden) Verschonungsabschlag in Anspruch zu nehmen (§ 13c ErbStG) oder eine Verschonungsbedarfsprüfung (§ 28a ErbStG) durchzuführen." },
      { typ: "titel", text: "Schaubild zu §§ 13a, 13b ErbStG – Regelverschonung" },
      { typ: "tabelle", spalten: ["Stufe", "Inhalt"], zeilen: [
        ["Ausgangspunkt", "Erwerb von begünstigtem Vermögen – begünstigungsfähiges Vermögen – § 13b Abs. 1 Nr. 1 bis 3 ErbStG"],
        ["Ermittlung", "Betriebsvermögenswert Einzelunternehmen ./. nicht begünstigtes Verwaltungsvermögen (= Nettowert des Verwaltungsvermögen ./. unschädliches Verwaltungsvermögen) = begünstigtes Vermögen § 13b Abs. 2 S. 1 ErbStG"],
        ["Aufteilung", "85 % / 15 %"],
        ["85 %", "Verschonungsabschlag begünstigtes Vermögen ≤ 26 Mio. € § 13a Abs. 1 ErbStG"],
        ["15 %", "(Gleitender) Abzugsbetrag 150.000 € § 13a Abs. 2 ErbStG"],
        ["Ergebnis", "Begünstigtes Vermögen nach Verschonung + nicht begünstigtes Verwaltungsvermögen = steuerpflichtiges Betriebsvermögen"],
      ] },
      { text: "Redaktioneller Hinweis: Das Schaubild steht in der Quelle als Grafik mit zwei nebeneinander laufenden Strängen (85 % und 15 %); es ist hier als Tabelle wiedergegeben, der Wortlaut ist unverändert – einschließlich „Nettowert des Verwaltungsvermögen“ ohne Genitiv-s (so in der Quelle). Der Aufbau ist der Rechenweg jeder Verschonungsaufgabe: Erst wird das begünstigte Vermögen ermittelt, dann der Abschlag von 85 % gewährt, und erst auf den verbleibenden Rest von 15 % wirkt der gleitende Abzugsbetrag. Die Angabe „150 000 €“ ohne Tausenderpunkt steht so in der Quelle." },
    ],
  },
  {
    ...TV2,
    id: "erbst-v-4",
    kapitel: "2",
    title: "Begünstigungsfähiges Vermögen: Land- und Forstwirtschaft, Betriebsvermögen und Anteile an Kapitalgesellschaften",
    thema: "Die drei Nummern des § 13b Abs. 1 ErbStG – der inländische Wirtschaftsteil ohne Betriebswohnungen und Wohnteil, das ertragsteuerliche Betriebsvermögen beim Erwerb ganzer Betriebe, Teilbetriebe und Mitunternehmeranteile sowie Kapitalgesellschaftsanteile ab einer unmittelbaren Mindestbeteiligung von mehr als 25 %, mit der Poolvereinbarung als Weg über diese Grenze",
    normen: ["§ 13b Abs. 1 Nr. 1 ErbStG", "§ 13b Abs. 1 Nr. 2 ErbStG", "§ 13b Abs. 1 Nr. 3 ErbStG", "§ 168 Abs. 1 BewG", "§ 160 Abs. 7 bis 9 BewG", "§ 159 BewG", "§§ 95 bis 97 Abs. 1 Satz 1 BewG", "§ 15 Abs. 1 Nr. 2 und Abs. 3 EStG", "§ 18 Abs. 4 EStG", "§ 9 ErbStG", "R E 13b.4 ErbStR", "R E 13b.5 Abs. 3 ErbStR"],
    themen: ["begünstigungsfähiges Vermögen", "land- und forstwirtschaftliches Vermögen", "Betriebsvermögen", "Kapitalgesellschaftsanteile", "Mindestbeteiligung 25 %", "Poolvereinbarung"],
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    quelle: QUELLE,
    bloecke: [
      { typ: "titel", text: "2. Begünstigungsfähiges Vermögen, § 13b Abs. 1 ErbStG" },
      { text: "Die Vorschrift § 13b Abs. 1 Nr. 1 bis 3 ErbStG definiert das begünstigungsfähige Vermögen, für das grundsätzlich eine Verschonung nach § 13a und § 13c ErbStG oder im Rahmen einer individuellen Verschonungsbedarfsprüfung nach § 28a ErbStG in Betracht kommt." },
      { typ: "titel", text: "a) Land- und forstwirtschaftliches Vermögen" },
      { text: "Zum begünstigungsfähigen land- und forstwirtschaftlichen Vermögen gehören gem. § 13b Abs. 1 Nr. 1 ErbStG der inländische Wirtschaftsteil des land- und forstwirtschaftlichen Vermögens (§ 168 Abs. 1 Nr. 1 BewG) mit Ausnahme der Stückländereien (§ 160 Abs. 7 BewG) und selbst bewirtschaftete Grundstücke im Sinne des § 159 BewG. Der Wert der Betriebswohnungen (§ 168 Abs. 1 Nr. 2, § 160 Abs. 8 BewG) sowie der Wert des Wohnteils (§ 168 Abs. 1 Nr. 3, § 160 Abs. 9 BewG) sind nicht begünstigungsfähig. Neben dem inländischen begünstigungsfähigen land- und forstwirtschaftlichen Vermögen wird auch entsprechendes Vermögen in den anderen EU-Mitgliedstaaten und den Staaten des Europäischen Wirtschaftsraums einbezogen." },
      { text: "Begünstigungsfähig ist der Erwerb von land- und forstwirtschaftlichem Vermögen im Sinne des und selbst bewirtschafteten Grundstücken, die im Zeitpunkt der Steuerentstehung als solche vom Erblasser oder Schenker auf den Erwerber übergehen und in der Hand des Erwerbers entweder land- und forstwirtschaftliches Vermögen oder selbst bewirtschaftete Grundstücke im Sinne des bleiben. Auf die ertragsteuerrechtliche Beurteilung als land- und forstwirtschaftliches Betriebsvermögen kommt es nicht an (R E 13b.4 ErbStR). (an beiden Stellen bricht die Wendung „im Sinne des“ ohne Normangabe ab – so in der Quelle; gemeint sind nach dem vorangehenden Absatz § 168 Abs. 1 Nr. 1 BewG und § 159 BewG)" },
      { typ: "titel", text: "b) Betriebsvermögen" },
      { text: "Bei inländischem Betriebsvermögen (§§ 95 bis 97 Abs. 1 S. 1 BewG) geht die Prüfung, inwieweit begünstigungsfähiges Vermögen vorliegt, von dem Vermögen aus, das ertragsteuerlich zum Betriebsvermögen gehört. Um begünstigungsfähiges Vermögen handelt es sich gem. § 13b Abs. 1 Nr. 2 ErbStG beim Erwerb eines ganzen Gewerbebetriebs, eine Teilbetriebs, eines Anteils an einer Gesellschaft im Sinne des § 15 Abs. 1 Nr. 2 und Abs. 3 oder § 18 Abs. 4 EStG, eines Anteils eines persönlich haftenden Gesellschafters einer Kommanditgesellschaft auf Aktien oder eines Anteils daran (Anteil an einer Personengesellschaft). Begünstigungsfähig ist nur der unmittelbare Übergang von Betriebsvermögen. Als Erwerb einer Beteiligung gilt auch, wenn eine Person in ein bestehendes Einzelunternehmen aufgenommen wird oder ein Teil einer Beteiligung an einer Personengesellschaft übertragen wird (R E 13b.5 Abs. 3 ErbStR). (die Wendung „eine Teilbetriebs“ so in der Quelle)" },
      { text: "Neben inländischem Betriebsvermögen ist auch entsprechendes Betriebsvermögen begünstigungsfähig, das einer Betriebsstätte in einem Mitgliedstaat der Europäischen Union oder in einem Staat des Europäischen Wirtschaftsraums dient, nicht jedoch ausländischen Betriebsvermögen in Drittstaaten." },
      { typ: "titel", text: "c) Anteile an Kapitalgesellschaften" },
      { text: "Anteile an Kapitalgesellschaften gehören nach § 13b Abs. 1 Nr. 3 ErbStG zum begünstigungsfähigen Vermögen, wenn die Kapitalgesellschaft zur Zeit der Entstehung der Steuer (§ 9 ErbStG) ihren Sitz oder die Geschäftsleitung im Inland oder in einem EU-Mitgliedstaat oder einem Staat des Europäischen Wirtschaftsraums hat und der Erblasser oder Schenker am Nennkapital dieser Gesellschaft zu mehr als 25 % unmittelbar beteiligt war (Mindestbeteiligung > 25 %). Die Beteiligungsgrenze von mehr als 25 % steht als Indiz dafür, dass der Anteilseigner unternehmerisch in die Gesellschaft eingebunden ist und nicht nur als Kapitalanleger auftritt." },
      { typ: "titel", text: "Beispiel:" },
      { typ: "tabelle", spalten: ["Fall", "GmbH-Anteil", "Übertragung", "§ 13b Abs. 1 Nr. 3 ErbStG ?"], zeilen: [
        ["a)", "26 %", "1 %", ""],
        ["b)", "25 %", "25 %", ""],
      ] },
      { text: "Redaktioneller Hinweis: Das Beispiel steht in der Quelle ohne Lösung und ist hier nicht aufgelöst; die Spalte mit der Frage bleibt dort leer. Die Lösung liegt in der zugehörigen Lösungsdatei (Drive-ID `1LASeajqIfpq5PYMCg1htyXI7voY2EF_4`), die noch nicht geöffnet ist. Die Anlage der beiden Fälle ist erkennbar: Sie stellen den Umfang der übertragenen Beteiligung der Beteiligungsquote des Übertragenden gegenüber – im Fall a) eine kleine Übertragung aus einer die Grenze überschreitenden Beteiligung, im Fall b) eine große Übertragung aus einer Beteiligung genau an der Grenze. Maßgeblich ist nach dem zitierten Wortlaut die Beteiligung des Erblassers oder Schenkers, nicht der übertragene Anteil." },
      { text: "Ob der Erblasser oder Schenker die Mindestbeteiligung erfüllt, ist nach der Summe der dem Erblasser oder Schenker unmittelbar zuzurechnenden Anteile und der Anteile weiterer Gesellschafter zu bestimmen, wenn der Erblasser oder Schenker und die weiteren Gesellschafter unwiderruflich untereinander verpflichtet sind, über die Anteile nur einheitlich zu verfügen oder auf andere, derselben Verpflichtung unterliegende Anteilseigner zu übertragen und das Stimmrecht gegenüber nicht gebundenen Gesellschaftern einheitlich auszuüben (Stimmrechtsbündelung und Verfügungsbeschränkung, Poolvereinbarung). Diese Regelung bezieht sich insbesondere auf sog. Familien-Kapitalgesellschaften, deren Anteile über mehrere Generationen hinweg weitergegeben wurden mit der Folge, dass die einzelnen Familiengesellschafter häufig die Mindestbeteiligungsquote nicht mehr erreichen. Die Unternehmensgründer bzw. deren Nachfolger haben jedoch oft dafür gesorgt, dass die Anteile nicht beliebig veräußert werden können und der bestimmende Einfluss der Familie erhalten bleibt." },
      { text: "Eine einheitliche Stimmrechtsausübung bedeutet, dass die Einflussnahme einzelner Anteilseigner zum Zwecke der einheitlichen Willensbildung zurücktreten muss (z. B. gemeinsame Bestimmung eines Sprechers oder eines Aufsichts- bzw. Leitungsgremiums, Verzicht einzelner Anteilseigner auf ihr Stimmrecht oder Anteile von vornherein stimmrechtslos). Voraussetzung für die Einbeziehung in die Entlastung ist daher nicht die tatsächliche Stimmrechtsausübung. Ferner kommt es nicht darauf an, dass die Einflussnahme auf die Geschicke der Gesellschaft ausschließlich durch Anteilseigner (Familienmitglieder) erfolgt." },
    ],
  },
];

export default erbstVerschonung;
