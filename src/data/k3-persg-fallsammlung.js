/* PersG-Fallsammlung (Karsten Melzer, April 2026, Rechtsstand 2025).

   Die Quelle enthält ausschließlich die Fälle - Lösungen sind in ihr nicht
   abgedruckt, sie werden in den Unterrichtseinheiten erarbeitet. Deshalb stehen
   hier nur die Sachverhalte, Aufgabenstellungen und Abwandlungen im Wortlaut;
   es wurden keine Lösungen erfunden. Statt einer Musterlösung führt jeder Fall
   in die Stellen des Campus, an denen genau dieser Stoff durchgerechnet ist:
   Lernmodule, Prüfschemata, Originalfälle und Hausaufgaben.

   Die Querverweise werden von tools/pruefen-k3-persg-fallsammlung.mjs gegen die
   tatsächlich vorhandenen Module, Schemata, Fälle und Hausaufgaben geprüft.
   Personenbezogene Wasserzeichen der Quell-PDF sind nicht übernommen. */

export const persgFallsammlungQuelle = {
  titel: "Personengesellschaften Fallsammlung",
  verfasser: "RA/StB Karsten Melzer, Köln",
  stand: "April 2026 · Rechtsstand 2025",
  datei: "B-S25-PersG-Fallsammlung-(Melzer)-0426.pdf",
  hinweis:
    "Die Fallsammlung enthält die Aufgabentexte ohne Musterlösungen; die Lösungen werden im Unterricht erarbeitet. Die Verweise unter jedem Fall führen deshalb zu den Modulen, Prüfschemata, Originalfällen und Hausaufgaben des Campus, in denen derselbe Stoff mit Zahlen durchgerechnet ist.",
};

export const persgFallsammlungGruppen = [
  { id: "sechs5", titel: "1 Fälle zu § 6 Abs. 5 EStG" },
  { id: "sechs3", titel: "2 Fälle zu § 6 Abs. 3 EStG" },
  { id: "wechsel", titel: "3 Fallvarianten zum Gesellschafterwechsel / Ausscheiden eines Gesellschafters" },
  { id: "umw24", titel: "4 Fälle § 24 UmwStG" },
  { id: "spiegel", titel: "5 Fälle Spiegelbildmethode" },
];

export const persgFallsammlung = [
  {
    id: "persg-fs-1", nummer: 1, gruppe: "sechs5",
    titel: "Fleischsäge zwischen zwei Einzelunternehmen",
    themen: ["Überführung", "Zwei Betriebe eines Steuerpflichtigen", "Buchwertfortführung"],
    normen: ["§ 6 Abs. 5 S. 1 EStG"],
    sachverhalt: [
      { text: "A betreibt eine Metzgerei als Einzelunternehmen und eine Bäckerei als Einzelunternehmen. Eine Fleischsäge (Buchwert 40.000 €, Teilwert 80.000 €), welche er seit 5 Jahren im Betriebsvermögen hält und nicht mehr benötigt, transportiert er von der Metzgerei zu der Bäckerei, um damit ab sofort Brötchen zu schneiden." },
    ],
    aufgabe: [
      { text: "Welche Konsequenzen ergeben sich daraus für den Ansatz in Handels- und Steuerbilanz? Eine Fortentwicklung der Bilanzansätze ist nicht erforderlich." },
    ],
    verweise: { module: [23], schemata: ["sechs5-system"], faelle: [], hausaufgaben: [] },
  },
  {
    id: "persg-fs-2", nummer: 2, gruppe: "sechs5",
    titel: "Sechs Übertragungswege des A zwischen Einzelunternehmen, AB OHG und AC OHG",
    themen: ["Überführung und Übertragung", "Sonderbetriebsvermögen", "Schwesterpersonengesellschaft", "Unentgeltliche Übertragung"],
    normen: ["§ 6 Abs. 5 S. 1–3 EStG", "§ 6 Abs. 5 S. 3 Nr. 1–3 EStG", "§ 6 Abs. 3 EStG"],
    sachverhalt: [
      { text: "An der AB OHG ist A mit 20 % und B mit 80 % beteiligt. A verpachtet an die AB OHG ein Lagergrundstück. An der AC OHG ist A mit 40 % und C mit 60 % beteiligt. A betreibt zudem eine Schreinerei als Einzelunternehmen." },
    ],
    aufgabe: [
      { text: "Sind die folgenden Übertragungsvorgänge in der Steuerbilanz möglich, ohne stille Reserven aufzudecken? Dabei ist nur kurz auf die gesetzliche Fundstelle einzugehen." },
      { text: "a) A löst den Pachtvertrag mit der AB OHG und nutzt das Lagergrundstück in seinem Einzelunternehmen." },
      { text: "b) A löst den Pachtvertrag mit der AB OHG und verpachtet das Lagergrundstück an die AC OHG." },
      { text: "c) A bringt das Lagergrundstück in die AB OHG ein. Es erfolgt eine Buchung auf seinem Kapitalkonto I." },
      { text: "d) A bringt eine Maschine aus der Schreinerei in die AB OHG unentgeltlich ein." },
      { text: "e) A schenkt das Lagergrundstück dem B, welcher es weiterhin an die AB OHG verpachtet." },
      { text: "f) A bringt das Lagergrundstück unentgeltlich in die AC OHG ein." },
    ],
    verweise: { module: [20, 23, 26], schemata: ["sechs5-system", "einbringung", "nr4-identisch"], faelle: ["persg-fall-9"], hausaufgaben: [] },
  },
  {
    id: "persg-fs-3", nummer: 3, gruppe: "sechs5",
    titel: "Lagergrundstück aus dem Sonderbetriebsvermögen in ein neues Einzelunternehmen",
    themen: ["Sonderbetriebsvermögen I", "Überführung in eigenes Betriebsvermögen", "Handels- und Steuerbilanz"],
    normen: ["§ 6 Abs. 5 S. 2 EStG", "§ 15 Abs. 1 Nr. 2 EStG"],
    sachverhalt: [
      { text: "A und B sind zu jeweils 50 % an der AB-OHG beteiligt. A besitzt ein Grundstück (Zeitwert/Teilwert 60.000 €, Buchwert 40.000 €), auf welchem die AB-OHG ihre Waren lagert. Dieses Grundstück vermietet A an die AB-OHG für ein monatliches Entgelt. Die AB-OHG benötigt das Lagergrundstück des A nicht mehr. A will nun dieses Grundstück im Rahmen eines im eigenen Namen neu gegründeten Einzelunternehmens als Lagergrundstück einsetzen." },
    ],
    aufgabe: [
      { text: "Wie ist dieser Übertragungsvorgang in Handels- und Steuerbilanz zu behandeln?" },
    ],
    verweise: { module: [7, 23], schemata: ["sbv", "sechs5-system"], faelle: ["persg-fall-9"], hausaufgaben: [] },
  },
  {
    id: "persg-fs-4", nummer: 4, gruppe: "sechs5",
    titel: "Bagger gegen Gesellschaftsrechte in die AB-OHG",
    themen: ["Gewährung von Gesellschaftsrechten", "Ergänzungsbilanz", "AfA-Fortführung", "Überspringen stiller Reserven"],
    normen: ["§ 6 Abs. 5 S. 3 Nr. 1 EStG", "§ 6 Abs. 5 S. 4 EStG", "§ 7 Abs. 1 EStG"],
    sachverhalt: [
      { text: "A und B möchten zum 01.01.2025 eine OHG gründen. An dieser sollen beide zu jeweils 50 % beteiligt sein. In seinem Einzelunternehmen hat A einen Bagger (Nutzungsdauer 10 Jahre, Anschaffung am 01.01.2020 für netto 100.000 €, Abschreibung linear) mit einem Buchwert von 50.000 € zum 31.12.2024. Der Verkehrswert des Baggers beträgt zu diesem Zeitpunkt 66.000 €. A überträgt den Bagger gegen Gewährung von Gesellschaftsrechten zum 01.01.2025 in das Gesamthandsvermögen der AB-OHG, um seine Einlageverpflichtung zu erfüllen. Zu diesem Zeitpunkt hat der Bagger noch eine zutreffend geschätzte Restnutzungsdauer von 6 Jahren. B erbringt eine Bareinlage in Höhe von 66.000 €." },
    ],
    aufgabe: [
      { text: "In der Handelsbilanz soll ein möglichst hoher Eigenkapitalausweis erfolgen. In der Steuerbilanz sollen die stillen Reserven A mittels einer Ergänzungsbilanz zugeordnet werden und in der Gesamthand soll der Teilwert angesetzt werden. Entwickeln Sie die Ansätze bis zum 31.12.2025 fort. Auf § 7g EStG ist nicht einzugehen." },
    ],
    varianten: [
      { titel: "Abwandlung", text: "In der Handelsbilanz soll ein möglichst hoher Eigenkapitalausweis erfolgen. In der Steuerbilanz sollen die Buchwerte angesetzt werden und die stillen Reserven sollen so weit als möglich auf B überspringen. Zum 31.12.2025 wird der Bagger für 60.000 € verkauft. Entwickeln Sie die Ansätze bis zum 31.12.2025 fort. Auf § 7g EStG ist nicht einzugehen." },
    ],
    verweise: { module: [20, 24, 29], schemata: ["einbringung", "sperrfrist-s4", "gesamtfall-afa"], faelle: ["persg-fall-13"], hausaufgaben: [] },
  },
  {
    id: "persg-fs-5", nummer: 5, gruppe: "sechs5",
    titel: "PKW mit Darlehensübernahme in die AB-OHG",
    themen: ["Teilentgeltliche Übertragung", "Schuldübernahme", "Verwaltungsauffassung", "Körperschaftsbeteiligung"],
    normen: ["§ 6 Abs. 5 S. 3 Nr. 1 EStG", "§ 6 Abs. 5 S. 5 und 6 EStG", "BMF-Schreiben zur Trennungstheorie"],
    sachverhalt: [
      { text: "A und B sind zu jeweils 50 % an der AB-OHG beteiligt. In seinem Einzelunternehmen hat A einen PKW (Nutzungsdauer 5 Jahre, Anschaffung am 01.01.2021 für netto 20.000 €) mit einem Buchwert von 4.000 € zum 31.12.2024. Der Verkehrswert des PKW beträgt zu diesem Zeitpunkt 10.000 €. Zudem hat A eine Verbindlichkeit bei der Bank des PKW-Herstellers i. H. v. 3.000 € zum 31.12.2024. A überträgt den PKW gegen Gewährung von Gesellschaftsrechten zum 01.01.2025 in das Gesamthandsvermögen der AB-OHG. Dabei übernimmt die AB-OHG auch das Darlehen. Zu diesem Zeitpunkt hat der PKW noch eine zutreffend geschätzte Restnutzungsdauer von 4 Jahren." },
    ],
    aufgabe: [
      { text: "Wie ist dieser Übertragungsvorgang in Handels- und Steuerbilanz zu behandeln? Entwickeln Sie die Ansätze bis zum 31.12.2025 fort. Auf § 7g EStG ist nicht einzugehen. Es ist nach der Verwaltungsauffassung zu lösen." },
    ],
    varianten: [
      { titel: "Abwandlung", text: "A überträgt den PKW aus seinem Einzelunternehmen gegen Gewährung von Gesellschaftsrechten zum 01.01.2025 in das Gesamthandsvermögen einer GmbH & Co. KG, an welcher A und B mit 45 % beteiligt sind und die GmbH mit 10 %. Wie ist dieser Übertragungsvorgang in Handels- und Steuerbilanz zu behandeln? Entwickeln Sie die Ansätze bis zum 31.12.2025 fort. Auf § 7g EStG ist nicht einzugehen. Es ist nach der Verwaltungsauffassung zu lösen." },
    ],
    verweise: { module: [25, 27], schemata: ["trennungstheorie", "status-s5"], faelle: ["persg-fall-10", "persg-fall-11", "persg-fall-12"], hausaufgaben: [] },
  },
  {
    id: "persg-fs-6", nummer: 6, gruppe: "sechs5",
    titel: "Grundstücksverkauf zwischen Schwester-OHGs mit gegenläufigen Beteiligungsquoten",
    themen: ["Gesamthand zu Gesamthand", "Identische Mitunternehmer", "Ergänzungsbilanzen", "Buchungssätze"],
    normen: ["§ 6 Abs. 5 S. 3 Nr. 4 EStG", "§ 6b EStG"],
    sachverhalt: [
      { text: "Im Gesamthandsvermögen der AB-OHG 1, an welcher A mit 80 % und B mit 20 % beteiligt ist, befindet sich ein Grundstück (Buchwert 100.000 €, Verkehrswert 200.000 €, angeschafft am 01.01.2015). Das Grundstück wird für 200.000 € an die AB-OHG 2 am 01.01.2025 verkauft, an welcher A mit 20 % und B mit 80 % beteiligt ist." },
    ],
    aufgabe: [
      { text: "Es sollen möglichst keine stillen Reserven aufgedeckt werden und stille Reserven sollen soweit möglich übertragen werden. Für die Lösung sind die Buchungssätze in der Steuerbilanz zu fertigen. Weiterhin sind Gesamthands- und Ergänzungsbilanzen in beiden OHGs zu fertigen, falls dies erforderlich ist." },
    ],
    verweise: { module: [19, 26], schemata: ["nr4-identisch", "sechs-b"], faelle: ["persg-fall-7"], hausaufgaben: [] },
  },
  {
    id: "persg-fs-7", nummer: 7, gruppe: "sechs3",
    titel: "XYZ GmbH & Co. KG: unentgeltliche Anteilsübertragung mit Marke (Auszug aus dem Steuerberaterexamen)",
    themen: ["Unentgeltliche Übertragung des Mitunternehmeranteils", "Funktional wesentliche Betriebsgrundlage", "Sonderbetriebsvermögen", "Komplementär-GmbH-Anteil"],
    normen: ["§ 6 Abs. 3 EStG", "§ 15 Abs. 1 Nr. 2 EStG", "§ 4 MarkenG", "§ 27 MarkenG"],
    sachverhalt: [
      { text: "X, Y und Z sind Kommanditisten der XYZ GmbH & Co. KG. Einzige Komplementärin der KG ist die XZ GmbH. X und Z sind an der KG zu je 40 %, Y zu 20 % beteiligt. An die Stelle von Z ist am 01.01.2025 S getreten. Die GmbH ist vermögensmäßig nicht an der KG beteiligt. An der GmbH sind X und Z jeweils mit 50 % beteiligt. X ist alleiniger Geschäftsführer der GmbH. Neben ihrer Stellung als Komplementärin geht die GmbH keiner weiteren Geschäftstätigkeit nach. Das Stammkapital der Komplementär-GmbH beträgt 25.000 € und ist voll eingezahlt. Die GmbH-Anteile enthalten keine stillen Reserven. X, Y und Z sind Brüder. Das Geschäfts- bzw. Wirtschaftsjahr der KG entspricht dem Kalenderjahr. Geschäftszweck ist die Produktion und der Vertrieb von diätetischen Lebensmitteln." },
      { typ: "tabelle", spalten: ["Vereinfachte Handelsbilanz der KG zum 31.12.2024", "Aktiva", "Passiva"], zeilen: [
        ["Bebaute Grundstücke", "200.000 €", ""],
        ["Gebäude", "400.000 €", ""],
        ["Bank", "1.000.000 €", ""],
        ["Diverse Aktiva", "100.000 €", ""],
        ["Kapital X", "", "400.000 €"],
        ["Kapital Y", "", "200.000 €"],
        ["Kapital Z", "", "400.000 €"],
        ["Diverse Passiva", "", "700.000 €"],
        ["Summe", "1.700.000 €", "1.700.000 €"],
      ] },
      { text: "Die stillen Reserven der Aktiva betragen 1.000.000 €. Diese entfallen vollständig auf das bebaute Grundstück, und zwar in Höhe von 600.000 € auf den Grund und Boden und 400.000 € auf das Gebäude." },
      { text: "Z ist Inhaber der Marke „Z“, die seit vielen Jahren bundesweit bekannt ist. Diese Marke hatte sich Z vor vielen Jahren selbst ausgedacht, und zwar ausschließlich mit dem Ziel, sie der KG zur Verwertung zu überlassen. Z gestattet der KG die Nutzung der Marke gegen eine monatliche Zahlung von 20.000 € (fremdüblich). Die KG verkauft ihre Produkte bundesweit unter dem Namen der Marke „Z“. Die Marke hat Verkehrsgeltung i. S. d. § 4 MarkenG." },
      { text: "Zum 01.01.2025 überträgt Z seinen Anteil an der KG unentgeltlich auf seinen Sohn S. Er überträgt an S ebenfalls die Rechte an der Marke „Z“ gemäß § 27 MarkenG. S überlässt die Marke weiterhin gegen ein Entgelt von 20.000 € pro Monat der KG, die dieses jeweils zum 1. jedes Monats im Voraus per Banküberweisung auf das private Bankkonto des S überweist. Z bleibt wie bisher an der GmbH beteiligt." },
      { text: "Die KG hat den Vorgang in ihrer Buchführung wie folgt erfasst: „Kapital Z 400.000 € an Kapital S 400.000 €“. Die Zahlungen für die Überlassung der Marke wurden bei der KG – wie schon in den Vorjahren – als Aufwand erfasst; Buchungssatz jeweils zum 1. jedes Monats: „Aufwand für Markenrechte 20.000 € an Bank 20.000 €“." },
    ],
    aufgabe: [
      { text: "Gewünscht ist ein möglichst hoher Eigenkapitalausweis in der Handelsbilanz und in der Steuerbilanz ein möglichst niedriger Gewinn." },
    ],
    verweise: { module: [7, 8, 31], schemata: ["sbv", "konkurrenz", "umw24-muanteil"], faelle: [], hausaufgaben: [] },
  },
  {
    id: "persg-fs-8", nummer: 8, gruppe: "sechs3",
    titel: "AB GmbH & Co. KG: Schenkung des Kommanditanteils an die Tochter (Gestaltungsfall)",
    themen: ["Gestaltungsberatung", "Teilanteilsübertragung", "Sperrfristen", "Verhaltensregeln"],
    normen: ["§ 6 Abs. 3 EStG", "§ 6 Abs. 3 S. 2 EStG", "§ 15 Abs. 1 Nr. 2 EStG"],
    sachverhalt: [
      { text: "An der AB GmbH & Co. KG (KG) sind A und B als Kommanditisten mit einem Anteil von jeweils 45 v. H. sowohl am Gewinn und Verlust als auch an den stillen Reserven beteiligt. Die KG unterhält einen Lebensmitteleinzelhandel. Komplementärin der KG mit einem Beteiligungsumfang von 10 % ist die AB Verwaltungs-GmbH (GmbH). Gesellschafter der GmbH sind seit deren Gründung im Jahr 2016 A mit einem Anteil von 60 v. H. am Stammkapital (Stammkapital insgesamt 50.000 €) und B mit einem Anteil von 40 %." },
    ],
    aufgabe: [
      { text: "A möchte sich im nächsten Jahr aus der KG zurückziehen und seiner Tochter (T) – wenn möglich – die gesamten Anteile an der KG, also 45 %, schenken. Notfalls wäre er auch bereit, Anteile an der KG zurückzubehalten. Er bittet Sie um Rat, welche Möglichkeiten es gibt, die Anteile ohne Aufdeckung stiller Reserven zu übertragen. Weiterhin möchte er wissen, ob es bei den einzelnen Möglichkeiten für die Zukunft Verhaltensregeln gibt." },
    ],
    verweise: { module: [7, 8, 31], schemata: ["sbv", "umw24-muanteil"], faelle: [], hausaufgaben: [] },
  },
  {
    id: "persg-fs-9", nummer: 9, gruppe: "wechsel",
    titel: "ABC OHG: Gesellschafterwechsel und Ausscheiden mit fünf Abwandlungen",
    themen: ["Gesellschafterwechsel", "Ergänzungsbilanz", "Sachwertabfindung", "Überpreis", "Nicht dauernde Wertminderung", "§ 16 und § 34 EStG"],
    normen: ["§ 16 Abs. 1 Nr. 2 EStG", "§ 16 Abs. 4 EStG", "§ 34 EStG", "§ 6 Abs. 1 Nr. 1 und 2 EStG", "§ 7 Abs. 4 EStG", "§ 24 UmwStG"],
    sachverhalt: [
      { text: "Am Gewinn und Vermögen der ABC OHG, die einen Gewerbebetrieb betreibt, sind A, B und C zu je einem Drittel beteiligt. Das Wirtschaftsjahr der OHG stimmt mit dem Kalenderjahr überein." },
      { typ: "tabelle", spalten: ["Schlussbilanz (Handels- und Steuerbilanz) zum 31.12.2024", "Aktiva", "Passiva"], zeilen: [
        ["Grund und Boden", "300.000 €", ""],
        ["Gebäude", "48.000 €", ""],
        ["Maschinen", "60.000 €", ""],
        ["GWG", "0 €", ""],
        ["Waren", "5.000 €", ""],
        ["Kapital A", "", "100.000 €"],
        ["Kapital B", "", "100.000 €"],
        ["Kapital C", "", "100.000 €"],
        ["Verbindlichkeiten", "", "113.000 €"],
        ["Summe", "413.000 €", "413.000 €"],
      ] },
      { text: "Grund und Boden: Teilwert 480.000 €, angeschafft am 17.03.2000. Gebäude: Teilwert 360.000 €, fertiggestellt am 01.01.2004 (Bauantrag 01.05.2000), Herstellungskosten 300.000 €, Restnutzungsdauer am 01.01.2025 zutreffend geschätzt 33 1/3 Jahre. Maschine: angeschafft am 01.01.2021 für 100.000 €, Restnutzungsdauer damals 10 Jahre, Abschreibung in Handels- und Steuerbilanz zutreffend linear, Teilwert 77.000 €, heutige Restnutzungsdauer 7 Jahre. GWG: Teilwert 6.000 €; Waren: Teilwert 8.000 €." },
      { text: "Ausgangsfall: C veräußert mit Wirkung vom 01.01.2025 seinen Anteil an D für 287.667 €. A und B haben dem Gesellschafterwechsel unter der Bedingung zugestimmt, dass D das Kapitalkonto des C unverändert übernimmt. D hat den Kaufpreis von 287.667 € am 02.01.2026 an C verzinst gezahlt. Die Zinsen wurden zutreffend behandelt." },
    ],
    aufgabe: [
      { text: "Nehmen Sie zu den bilanziellen Folgen in Handels- und Steuerbilanz Stellung und stellen Sie die handelsrechtliche und steuerliche Eröffnungsbilanz der OHG zum 01.01.2025 mit Begründung und nachvollziehbaren Berechnungen auf. Dabei sind – falls erforderlich – Sonder- und Ergänzungsbilanzen auf den 01.01.2025 zu erstellen und bis zum 31.12.2025 fortzuentwickeln." },
      { text: "Es ist ein eigener Buchungskreis für die Handelsbilanz und die Steuerbilanz zu führen. Auch für eventuell erforderliche Sonder- und Ergänzungsbilanzen sind die Buchungssätze anzugeben. Die Voraussetzungen von § 7g EStG haben zu keinem Zeitpunkt vorgelegen. Die Buchhaltung ist so eingerichtet, dass für handels- und steuerrechtlich identische Buchungen der Buchungskreis „Alle Bereiche“ anzusprechen ist; bei abweichenden steuerrechtlichen Buchungen die Buchungskreise „Nur Handelsbilanz“ oder „Nur Gesamthands-Steuerbilanz“." },
      { text: "Entwickeln Sie unter den gleichen Anforderungen die handels- und steuerliche Schlussbilanz zum 31.12.2025. Die Bilanzen selbst sind nicht darzustellen. Gehen Sie dabei lediglich von den Folgewirkungen des Ausscheidens von C aus und unterstellen Sie, dass sich in 2025 keine weiteren Geschäftsvorfälle ereignen. Nehmen Sie auch zu den ertragsteuerlichen Folgen bei C (65 Jahre) Stellung." },
      { text: "Anmerkungen: Im Zweifel ist der Auffassung der Finanzverwaltung zu folgen. Die Voraussetzungen des § 7g EStG waren weder in 2024 noch in 2025 erfüllt. GWG sind voll abzuschreiben. Auf die Grunderwerbsteuer ist nicht einzugehen." },
    ],
    varianten: [
      { titel: "Abwandlung 1", text: "Gesellschafter C ist mit Wirkung vom 01.01.2025 durch Kündigung aus der OHG ausgeschieden. Er erhielt eine Abfindung von 287.667 €, die ihm am 30.01.2026 verzinst vom Bankkonto der OHG überwiesen wurde. Die Zinsen wurden zutreffend behandelt." },
      { titel: "Abwandlung 2", text: "Gesellschafter C ist mit Wirkung vom 01.01.2025 durch Kündigung ausgeschieden. Er erhielt eine Abfindung von 287.667 €, die ihm am 30.01.2026 überwiesen wurde. 30.000 € wurden von A und B über dem tatsächlichen Wert des Anteils des C gezahlt, damit C so schnell als möglich die Gesellschaft verlässt. Gerade im Jahr 2024 hat er ständig die Beschlüsse in den Gesellschafterversammlungen zu torpedieren versucht und hat in angetrunkenem Zustand die Gesellschafter vor ihren Kunden mehrfach beleidigt." },
      { titel: "Abwandlung 3", text: "Gesellschafter C ist mit Wirkung vom 01.01.2025 durch Kündigung ausgeschieden. Anstatt einer angemessenen Abfindung in Höhe von 287.667 € bekommt er die Maschine und den angemessenen Geldbetrag als Abfindung. Die Maschine übernimmt er sofort in sein Privatvermögen, die Zahlung des Geldbetrags erfolgt aber erst in 2026. Auf die Umsatzsteuer ist nicht einzugehen." },
      { titel: "Abwandlung 4", text: "Gesellschafter C ist mit Wirkung vom 01.01.2025 durch Kündigung ausgeschieden. Anstatt einer angemessenen Abfindung in Höhe von 287.667 € bekommt er das Grundstück und das Gebäude und muss einen angemessenen Geldbetrag als Zuzahlung leisten. Grund und Boden übernimmt er sofort in sein Privatvermögen, die Zahlung des Geldbetrags erfolgt aber erst in 2026. Auf die Umsatzsteuer ist nicht einzugehen." },
      { titel: "Abwandlung 5", text: "Sachverhalt wie Ausgangsfall, jedoch sind sich die Gesellschafter einig, dass kein Firmenwert vorhanden ist und der Grund und Boden einen Teilwert von 291.000 €, das Gebäude einen Teilwert von 33.000 €, die Maschine einen Teilwert von 77.000 €, die GWG einen Teilwert von 6.000 € und die Waren einen Teilwert von 8.000 € haben. Die Minderwerte beruhen auf voraussichtlich nicht dauerhaften Wertminderungen. A und B sind nicht bereit, eine Abfindung über den anteiligen Teilwerten zu zahlen. Aufgabe: Entwickeln Sie mit Begründung die steuerliche Eröffnungsbilanz der OHG (einschließlich der Buchung des Ausscheidensvorgangs) und entwickeln Sie diese fort. Auf das Handelsrecht ist nicht einzugehen." },
    ],
    verweise: { module: [29, 37], schemata: ["gesamtfall-afa", "umw24-muanteil"], faelle: ["persg-fall-13"], hausaufgaben: ["persg-ha-3"] },
  },
  {
    id: "persg-fs-10", nummer: 10, gruppe: "umw24",
    titel: "§ 24 UmwStG Grundfall: A bringt sein Einzelunternehmen in die A-B OHG ein",
    themen: ["Einbringung eines Betriebs", "Zurückbehaltenes Grundstück", "Bruttomethode", "Nettomethode", "Zwischenwertansatz"],
    normen: ["§ 24 UmwStG", "§ 24 Abs. 2 UmwStG", "§ 6 Abs. 1 Nr. 1 EStG", "§ 7 Abs. 4 EStG"],
    sachverhalt: [
      { text: "A (45 Jahre) betreibt seit Jahren ein Einzelunternehmen in Köln. Er gründet mit B (46 Jahre) mit Wirkung zum 01.01.2025 die A-B OHG. An dieser neu gegründeten Gesellschaft sind A und B zu gleichen Teilen an den stillen Reserven sowie am Gewinn und Verlust beteiligt. Alle angegebenen gemeinen Werte sind ebenso die Zeitwerte, ermittelt zum 01.01.2025." },
      { text: "Vereinbarungsgemäß bringt A sein Einzelunternehmen bis auf das Grundstück Domplatz gegen Gewährung von Gesellschaftsrechten in die A-B OHG ein. Das Grundstück Domplatz behält A zurück und vermietet es an die A-B OHG gegen ein angemessenes Entgelt." },
      { typ: "tabelle", spalten: ["Bisherige Bilanz des Einzelunternehmens A zum 31.12.2024", "Aktiva", "Passiva"], zeilen: [
        ["Grund und Boden Schillerstr. 10", "100.000 €", ""],
        ["Gebäude Schillerstr. 10", "201.000 €", ""],
        ["Grund und Boden Domplatz", "150.000 €", ""],
        ["Gebäude Domplatz", "376.000 €", ""],
        ["Maschine", "60.000 €", ""],
        ["Bank", "10.000 €", ""],
        ["Kapital", "", "626.000 €"],
        ["Sonstige Verbindlichkeiten", "", "271.000 €"],
        ["Summe", "897.000 €", "897.000 €"],
      ] },
      { text: "Grund und Boden Schillerstr. 10: am 30.01.2000 für 100.000 € erworben, gemeiner Wert 130.000 €. Am 25.05.2013 wurde mit der Errichtung des betrieblich genutzten Gebäudes begonnen, das am 15.01.2014 fertiggestellt war (Bauantrag 15.01.2013). Herstellungskosten 300.000 €, gemeiner Wert 351.000 €. Die AfA wurde zutreffend ermittelt; das Gebäude hat zum 01.01.2025 eine tatsächliche Restnutzungsdauer von 50 Jahren." },
      { text: "Grund und Boden Domplatz: Grundstück mit Gebäude am 15.01.2023 für 550.000 € angeschafft, davon 150.000 € Grund und Boden und 400.000 € Gebäude. Gemeiner Wert Grund und Boden 200.000 €, Gebäude 406.000 €. Die AfA wurde zutreffend ermittelt; das Gebäude hat eine tatsächliche Restnutzungsdauer von 50 Jahren." },
      { text: "Maschine: am 01.01.2021 für 100.000 € (Restnutzungsdauer 10 Jahre) angeschafft, linear abgeschrieben, gemeiner Wert 77.000 €, Restnutzungsdauer 7 Jahre. B erbringt eine Bareinlage in Höhe von 312.000 €." },
    ],
    aufgabe: [
      { text: "Erstellen Sie die Eröffnungsbilanz der A-B OHG auf den 01.01.2025. Gehen Sie davon aus, dass die Kapitalkonten I der Gesellschafter die Beteiligungsverhältnisse in Höhe der gemeinen Werte wiedergeben sollen. Eine Gewinnrealisierung soll nach Möglichkeit vermieden werden. In der Handelsbilanz ist ein möglichst hohes Eigenkapital auszuweisen. Es ist eine Eröffnungsbilanz für die Handelsbilanz und eine eigene für die Steuerbilanz aufzustellen. Dabei sind – falls erforderlich – Sonder- und Ergänzungsbilanzen auf den 01.01.2025 zu erstellen und bis zum 31.12.2025 fortzuentwickeln." },
    ],
    varianten: [
      { titel: "Variante", text: "In der Gesamthands-Steuerbilanz sollen die Buchwerte fortgeführt werden (Nettomethode). Dabei sind – falls erforderlich – Sonder- und Ergänzungsbilanzen auf den 01.01.2025 zu erstellen und bis zum 31.12.2025 fortzuentwickeln. Es sind nur die Buchungen in der Gesamthands-Steuerbilanz und den Ergänzungsbilanzen anzugeben." },
      { titel: "Abwandlung", text: "Es sollen in der Steuerbilanz 10 % der stillen Reserven aufgedeckt werden. Eine Handelsbilanz ist nicht zu erstellen. Es sind nur die Buchungen in der Gesamthands-Steuerbilanz und der Ergänzungsbilanz anzugeben. In der Gesamthands-Steuerbilanz sind die gemeinen Werte anzusetzen." },
    ],
    verweise: { module: [30, 31, 32, 33, 34], schemata: ["umw24-master", "umw24-brutto", "umw24-netto"], faelle: ["persg-fall-14"], hausaufgaben: [] },
  },
  {
    id: "persg-fs-11", nummer: 11, gruppe: "umw24",
    titel: "§ 24 UmwStG: Eintritt des C in die A-B OHG gegen Bareinlage",
    themen: ["Eintritt eines Gesellschafters", "Kapitalkonten I", "Gemeiner Wert in der Gesamthand", "Gezielte Aufdeckung stiller Reserven"],
    normen: ["§ 24 UmwStG", "§ 24 Abs. 2 UmwStG", "§ 7 Abs. 4 EStG"],
    sachverhalt: [
      { text: "A und B (beide 45 Jahre) betreiben seit Jahren eine OHG in Köln. An dieser sind sie zu gleichen Teilen an den stillen Reserven sowie am Gewinn und Verlust beteiligt. Mit Wirkung zum 01.01.2025 tritt C gegen eine Bareinlage von 334.500 € in die OHG ein. Es ist vereinbart, dass nach dem Eintritt alle Gesellschafter jeweils zu 1/3 beteiligt sind. Alle angegebenen gemeinen Werte sind ebenso wie die Zeitwerte zum 01.01.2025 ermittelt." },
      { typ: "tabelle", spalten: ["Bisherige Bilanz der A-B-OHG zum 31.12.2024", "Aktiva", "Passiva"], zeilen: [
        ["Grund und Boden", "300.000 €", ""],
        ["Gebäude Schillerstr. 10", "64.000 €", ""],
        ["GWG", "0 €", ""],
        ["Bank", "10.000 €", ""],
        ["Kapital A", "", "150.000 €"],
        ["Kapital B", "", "150.000 €"],
        ["Sonstige Verbindlichkeiten", "", "74.000 €"],
        ["Summe", "374.000 €", "374.000 €"],
      ] },
      { text: "Grund und Boden und Gebäude: Der Grund und Boden wurde am 01.01.2000 für 300.000 € erworben und hat einen gemeinen Wert von 442.000 €. Am 25.05.2000 wurde mit der Errichtung des betrieblich genutzten Gebäudes begonnen, das am 15.01.2004 fertiggestellt war (Bauantrag 15.01.2000). Die Herstellungskosten betrugen 400.000 €, der gemeine Wert beträgt 234.000 €. Die AfA wurde zutreffend ermittelt. In den GWG sind stille Reserven in Höhe von 12.000 € enthalten." },
    ],
    aufgabe: [
      { text: "Erstellen Sie die Eröffnungsbilanzen der A-B-C OHG auf den 01.01.2025. Gehen Sie davon aus, dass die Kapitalkonten I der Gesellschafter die Beteiligungsverhältnisse wiedergeben sollen. Es ist das Erstellen einer Handelsbilanz erwünscht. In der Gesamthands-Steuerbilanz sollen die gemeinen Werte angesetzt werden. A möchte keine stillen Reserven aufdecken. B möchte – falls möglich – stille Reserven in Höhe von 61.500 € aufdecken." },
      { text: "Die Voraussetzungen von § 7g EStG haben zu keinem Zeitpunkt vorgelegen. Handels- und Steuerbilanz sind zum 31.12.2025 fortzuentwickeln; Schlussbilanzen sind nicht zu erstellen. Für handels- und steuerrechtlich identische Buchungen ist der Buchungskreis „Alle Bereiche“ anzusprechen, bei Abweichungen „Nur Handelsbilanz“ oder „Nur Gesamthands-Steuerbilanz“; ebenso ist ein eigener Buchungskreis für die Ergänzungsbilanzen zu führen." },
    ],
    verweise: { module: [30, 32, 36], schemata: ["umw24-master", "umw24-gegenleistung"], faelle: ["persg-fall-14", "persg-fall-16"], hausaufgaben: [] },
  },
  {
    id: "persg-fs-12", nummer: 12, gruppe: "spiegel",
    titel: "Spiegelbildmethode: Gewinnanteil, Entnahme und Einlage bei der A-B-C-OHG",
    themen: ["Spiegelbildmethode", "Variables Kapitalkonto", "Entnahme und Einlage", "Beteiligungsansatz"],
    normen: ["§ 15 Abs. 1 Nr. 2 EStG", "§ 4 Abs. 1 EStG", "§ 6 Abs. 1 Nr. 2 EStG"],
    sachverhalt: [
      { text: "A hält eine Beteiligung an der A-B-C-OHG in Höhe von 50.000 € im Betriebsvermögen seines Einzelunternehmens." },
      { text: "1. Auf A entfällt ein Gewinnanteil von 30.000 €, den die OHG in ihrer Bilanz dem variablen Kapitalkonto von A gutgeschrieben hat. 2. A lässt zu Lasten seines variablen Kapitalkontos II bei der OHG 20.000 € auf sein privates Bankkonto überweisen; in dieser Höhe wurde ihm im Vorjahr ein Gewinnanteil auf seinem Kapitalkonto II gutgeschrieben. 3. A legt 80.000 € aus seinem Einzelunternehmen in die OHG ein." },
    ],
    aufgabe: [
      { text: "Wie sind die Geschäftsvorfälle in der OHG und wie im Einzelunternehmen zu erfassen?" },
    ],
    verweise: { module: [11, 13, 14], schemata: ["kapitalkonten2", "spiegel-grund"], faelle: ["persg-fall-3"], hausaufgaben: [] },
  },
  {
    id: "persg-fs-13", nummer: 13, gruppe: "spiegel",
    titel: "A-B-GmbH & Co. KG und X-OHG: verseuchtes Grundstück und Abschreibung der Beteiligung",
    themen: ["Spiegelbildmethode", "Teilwertabschreibung", "Beteiligung an Personengesellschaft", "Schadensersatzforderung"],
    normen: ["§ 15 Abs. 1 Nr. 2 EStG", "§ 6 Abs. 1 Nr. 2 S. 2 EStG", "§ 253 Abs. 3 HGB", "§ 252 Abs. 1 Nr. 4 HGB"],
    sachverhalt: [
      { text: "A und B sind Kommanditisten der A-B-GmbH & Co. KG mit Sitz in Hannover. Geschäftszweck ist der Handel mit Finanzdienstleistungsprodukten. A und B sind am Gewinn der KG zu jeweils 40 %, die Komplementär-GmbH ist zu 20 % beteiligt. Gesellschafter der Komplementär-GmbH sind A und B zu jeweils 50 %. Das Geschäfts- bzw. Wirtschaftsjahr der KG entspricht dem Kalenderjahr." },
      { text: "Den Anteil an der X-OHG i. H. v. 400.000 € hatte die KG bereits unmittelbar nach ihrer Gründung im Jahr 1989 erworben. Geschäftszweck der OHG ist der Bau und Verkauf von Solaranlagen. Außer der KG ist an der OHG noch X beteiligt, der mit A und B nicht verwandt ist. X und die KG sind zu je 50 % beteiligt; dies entspricht auch der Beteiligung am Gewinn und Verlust. Auch bei der OHG entspricht das Geschäfts- bzw. Wirtschaftsjahr dem Kalenderjahr." },
      { typ: "tabelle", spalten: ["Vereinfachte Handelsbilanz der X-OHG zum 31.12.2025", "Aktiva", "Passiva"], zeilen: [
        ["Diverse Aktiva", "1.500.000 €", ""],
        ["Unbebaute Grundstücke", "500.000 €", ""],
        ["Kapital X", "", "400.000 €"],
        ["Kapital KG", "", "400.000 €"],
        ["Diverse Passiva", "", "1.200.000 €"],
        ["Summe", "2.000.000 €", "2.000.000 €"],
      ] },
      { text: "Bei dem unbebauten Grundstück der OHG (3.000 m²) handelt es sich um Bauland, welches die OHG zulässigerweise bilanziert hat und schon seit längerem verkaufen will. Aufgrund eines Unfalls in einer benachbarten Chemiefabrik in der Nacht zum 02.04.2025 wird das Grundstück jedoch verseucht. Der als Ordnungsbehörde zuständige Landkreis Schaumburg hat den Betreiber der Chemiefabrik per Verwaltungsakt zur Beseitigung der Schäden verpflichtet; aus der Begründung ergibt sich, dass der Landkreis die OHG als Eigentümerin nicht ebenfalls heranziehen will." },
      { text: "Es steht fest, dass die geforderte Sanierung nur dazu führt, dass vom Grundstück keine Gefahren für die angrenzenden Grundstücke und das Grundwasser mehr ausgehen. Nach einem Sachverständigengutachten ist das Grundstück auch nach der Sanierung nicht mehr als Bauland verwendbar und am Markt nicht mehr zu verkaufen. Die OHG will es nach der Sanierung als Lagerplatz verwenden. Die OHG hat gegen den Betreiber Schadensersatzforderungen geltend gemacht, die abgelehnt werden; mit Schriftsatz vom 16.01.2026 hat sie Klage beim Landgericht eingereicht. Mit einem Urteil ist vor Mitte 2028 nicht zu rechnen. Das operative Geschäft und die zukünftigen Gewinnerwartungen der OHG werden durch den Vorfall nicht beeinträchtigt." },
      { text: "Die OHG erfasst den Vorfall in der laufenden Buchführung wie folgt: „Außerplanmäßige Abschreibungen auf Sachanlagen 499.999 € an Unbebaute Grundstücke 499.999 €“. In der KG wird der Geschäftsvorfall ebenfalls erfasst: „Abschreibungen auf Finanzanlagen 399.999 € an Beteiligung X-OHG 399.999 €“." },
    ],
    aufgabe: [
      { text: "Wie ist dieser Sachverhalt in der GmbH & Co. KG und wie in der OHG zu behandeln?" },
    ],
    verweise: { module: [13, 15, 16], schemata: ["spiegel-grund", "spiegel-15a"], faelle: ["persg-fall-4"], hausaufgaben: [] },
  },
];

export default persgFallsammlung;
