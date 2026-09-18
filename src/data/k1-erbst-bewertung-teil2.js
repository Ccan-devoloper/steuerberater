/* Bewertungsrecht, Teil 2: Bewertung des Grundvermögens
   (Unterrichtsmaterial zum Steuerberaterlehrgang, Dipl.-Finanzwirt Martin Schäfer,
   Stand August 2025).

   Das Skript ist wortlautgetreu erfasst. Übersichten und Beispiele der Quelle stehen als
   Tabellen. Ergänzt sind nur Thema, Normenliste und Themenchips sowie – ausdrücklich als
   solche gekennzeichnet – redaktionelle Hinweise und eigene Kontrollrechnungen. Wo die
   Quelle ein Beispiel ohne Ergebnis lässt, ist das vermerkt; erfunden wird nichts. Die
   zugehörige Lösungsdatei liegt im Drive unter
   1KG701MsTDFm91Fp8BBV_Nc3sRUDdN5y0.

   Personenbezogene Wasserzeichen der Quell-PDF sind nicht übernommen.
   Blocktypen: text | titel | tabelle. */

const VERFASSER = "Martin Schäfer";
const RECHTSSTAND = "Stand August 2025";

const TC1 = { teil: "2-1", teilLabel: "Skript Teil 2 · Tz. 1 bis 3", teilTitel: "Begriff und Umfang des Grundvermögens, Feststellung der Grundbesitzwerte und unbebaute Grundstücke" };
const TC2 = { teil: "2-4", teilLabel: "Skript Teil 2 · Tz. 4", teilTitel: "Bebaute Grundstücke: Begriff, die sechs Grundstücksarten und die Wahl des Bewertungsverfahrens" };

export const erbstBewertungTeil2Quelle = {
  reihe: "Bewertungsrecht · Unterrichtsmaterial zum Steuerberaterlehrgang, Teil 2 · Martin Schäfer",
  stand: "August 2025 · Rechtsstand 2025",
  verfasser: VERFASSER,
  didaktik: [
    "Der Teil 2 des Bewertungsskripts behandelt die Bewertung des Grundvermögens nach den §§ 176 bis 198 BewG – den Block, der in der Examensklausur regelmäßig den größten Rechenaufwand verursacht.",
    "Der Aufbau folgt dem Gesetz: erst Begriff und Umfang des Grundvermögens mit der Abgrenzung zu Betriebsvorrichtungen und land- und forstwirtschaftlichem Vermögen, dann die Feststellung der Grundbesitzwerte, danach die unbebauten und die bebauten Grundstücke mit den drei Bewertungsverfahren, schließlich Erbbaurecht, Erbbaugrundstück, Gebäude auf fremdem Grund und Boden, Grundstücke im Zustand der Bebauung und der Nachweis des niedrigeren gemeinen Werts.",
    "Zusammen mit dem Teil 1 (Allgemeine Bewertungsvorschriften) und dem Teil 3 (Betriebsvermögen und gesonderte Feststellungen) deckt dieser Teil das gesamte prüfungsrelevante Bewertungsrecht ab.",
  ],
};

const QUELLE = erbstBewertungTeil2Quelle;

export const erbstBewertungTeil2 = [
  {
    ...TC1,
    id: "erbst-bew2-1",
    kapitel: "1",
    title: "Begriff, Umfang und Bewertungsgegenstand des Grundvermögens",
    thema: "Das Grundvermögen als eine der drei Vermögensarten und Teil des Oberbegriffs Grundbesitz, der bewertungsrechtliche Gebäudebegriff mit seinen fünf Merkmalen, die Abgrenzung zu Bestandteilen, Zubehör und Betriebsvorrichtungen sowie die Zuordnung land- und forstwirtschaftlich genutzter Flächen nach § 159 BewG",
    normen: ["§ 12 Abs. 3 ErbStG", "§ 18 BewG", "§ 95 Abs. 1 BewG", "§ 97 Abs. 1 BewG", "§ 99 Abs. 1 Nr. 1 BewG", "§ 157 Abs. 1 und 3 BewG", "§ 159 Abs. 1 bis 3 BewG", "§ 176 Abs. 1 BewG", "§ 176 Abs. 2 Nr. 2 BewG", "§§ 93, 94, 97 BGB", "§ 15 Abs. 1 und 2 EStG", "R B 176.1 Abs. 3 ErbStR", "R B 176.2 Abs. 1 ErbStR", "Abgrenzungserlass vom 05.06.2013"],
    themen: ["Grundbesitz", "Grundvermögen", "Gebäudebegriff", "Außenanlagen", "Zubehör", "Betriebsvorrichtungen", "Bauland", "Wirtschaftliche Einheit"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "1. Begriff, Umfang und Bewertungsgegenstand" },
      { text: "Für die wirtschaftlichen Einheiten des Grundvermögens und für Betriebsgrundstücke im Sinne des § 99 Abs. 1 Nr. 1 BewG sind nach § 12 Abs. 3 ErbStG i. V. m. § 157 Abs. 3 BewG Grundbesitzwerte unter Anwendung der §§ 159 und 176 bis 198 BewG zu ermitteln." },
      { text: "Der Begriff Grundvermögen bezeichnet eine der 3 Vermögensarten des Bewertungsgesetzes (§ 18 BewG). Zusammen mit dem land- und forstwirtschaftlichen Vermögen und den Betriebsgrundstücken (§ 99 BewG) bildet das Grundvermögen den Grundbesitz (Oberbegriff, § 157 Abs. 1 BewG)." },
      { typ: "tabelle", spalten: ["Grundbesitz (§ 157 Abs. 1 BewG)", "Vorschrift"], zeilen: [
        ["Land- und forstwirtschaftliches Vermögen", "§§ 158, 159 BewG"],
        ["Grundvermögen", "§ 176 BewG"],
        ["Betriebsgrundstücke", "§ 99 BewG"],
      ] },
      { text: "Redaktioneller Hinweis: Die Übersicht steht in der Quelle als Schaubild mit drei Kästen unter dem Oberbegriff; sie ist zugeordnet als Tabelle wiedergegeben." },
      { text: "Grundvermögen ist damit Grundbesitz, bei dem es sich weder um land- und forstwirtschaftliches Vermögen noch um Betriebsgrundstücke handelt." },
      { text: "Nach § 176 Abs. 1 Nr. 1 BewG umfasst das Grundvermögen den Grund und Boden, die Gebäude, die sonstigen Bestandteile und das Zubehör. Ebenso gehören zum Grundvermögen das Erbbaurecht (§ 176 Abs. 1 Nr. 2 BewG) sowie das Wohnungseigentum und verwandte Rechte nach dem Wohnungseigentumsgesetz (§ 176 Abs. 1 Nr. 3 BewG)." },
      { text: "Zum Grund und Boden - im BGB als Grundstück bezeichnet - gehören bürgerlich rechtlich auch die wesentlichen Bestandteile (§§ 93, 94 BGB). Darunter fallen die mit dem Grund und Boden verbundenen Sachen, insbesondere die Gebäude, die Außenanlagen, sowie die Erzeugnisse des Grundstücks, solange sie mit dem Boden zusammenhängen." },
      { typ: "titel", text: "Der bewertungsrechtliche Gebäudebegriff" },
      { text: "Bewertungsrechtlich ist ein Bauwerk nur dann als Gebäude anzusehen, wenn es alle der fünf nachfolgend aufgeführten Merkmale erfüllt (Abgrenzungserlass vom 05.06.2013, BStBl. 2013 I Seite 734). Das Bauwerk muss" },
      { typ: "tabelle", spalten: ["Merkmal des Gebäudebegriffs"], zeilen: [
        ["Schutz gegen Witterungseinflüsse durch räumliche Umschließung gewähren,"],
        ["den Aufenthalt von Menschen gestatten,"],
        ["fest mit dem Grund und Boden verbunden sein,"],
        ["von einiger Beständigkeit und"],
        ["ausreichend standfest sein."],
      ] },
      { text: "Als sonstige Bestandteile gelten insbesondere die Außenanlagen (z. B. Wege- und Platzbefestigungen, Umzäunungen, Gartenanlagen, private Freischwimmbäder und Tennisplätze)." },
      { text: "Unter den Begriff Zubehör (§ 97 BGB) sind bewegliche Sachen zu fassen, die, ohne Bestandteil der Hauptsache zu sein, dem wirtschaftlichen Zweck der Hauptsache zu dienen bestimmt sind und zu ihr in einem Verhältnis wirtschaftlicher Unterordnung stehen (z. B. mitvermietete Treppenläufer, Beleuchtungskörper, Mülltonnen, Waschmaschinen, Öfen und der Heizölvorrat, soweit er der Gebäudeheizung dient)." },
      { text: "Neben den Bodenschätzen sind die Betriebsvorrichtungen nach § 176 Abs. 2 Nr. 2 BewG nicht in das Grundvermögen einzubeziehen, auch wenn sie wesentliche Bestandteile des Gebäudes bzw. des Grund und Bodens darstellen. Als Betriebsvorrichtungen werden die Maschinen und Vorrichtungen aller Art bezeichnet, mit denen ein Gewerbe unmittelbar betrieben wird (z. B. Kesselanlagen, Transformatorenstationen, Umspannanlagen, Lastenaufzüge, Kühlanlagen, Autowaschanlagen). Es handelt sich insoweit in der Regel um bewegliche Wirtschaftsgüter des abnutzbaren Anlagevermögens, die zum Betriebsvermögen gehören. Hinsichtlich der Einzelheiten zur Abgrenzung vom Grundvermögen wird auf den Abgrenzungserlass vom 05.06.2013 (BStBl. 2013 I Seite 734) verwiesen." },
      { typ: "titel", text: "Land- und forstwirtschaftlich genutzte Flächen im Grundvermögen" },
      { text: "Nach § 159 BewG gehören im Feststellungszeitpunkt noch land- und forstwirtschaftlich genutzte Flächen unter bestimmten Voraussetzungen zum Grundvermögen. Eine Zuordnung zum Grundvermögen erfolgt nach § 159 Abs. 3 BewG in jedem Fall, wenn die land- und forstwirtschaftlich genutzten Flächen planungsrechtlich als Bauland ausgewiesen sind und die übrigen Voraussetzungen dieser Vorschrift vorliegen. Dazu zählt insbesondere, dass eine sofortige Bebauung rechtlich und tatsächlich möglich ist und dass die Bebauung innerhalb des Plangebiets in benachbarten Bereichen begonnen hat oder schon durchgeführt ist." },
      { text: "Sofern die Voraussetzungen des § 159 Abs. 3 BewG nicht erfüllt sind, kommt ggf. über § 159 Abs. 1 oder Abs. 2 BewG eine Zurechnung land- und forstwirtschaftlich genutzter Flächen zum Grundvermögen in Betracht. § 159 Abs. 1 oder Abs. 2 BewG findet Anwendung, wenn in Zukunft damit zu rechnen ist, dass die Flächen anderen als land- und forstwirtschaftlichen Zwecken dienen. Genießen die Flächen nicht den Schutz des § 159 Abs. 2 BewG, der u. a. voraussetzt, dass der Betrieb der Land und Forstwirtschaft die Existenzgrundlage des Betriebsinhabers bildet, werden diese nach Absatz 1 bereits dann dem Grundvermögen zugerechnet, wenn in absehbarer Zeit eine andere Verwendung zu erwarten ist. Demgegenüber verlangt § 159 Abs. 2 BewG eine große Wahrscheinlichkeit dafür, dass eine Nutzungsänderung in spätestens 2 Jahren eintritt. Die Vorschrift des § 159 Abs. 3 BewG hat als Spezialregelung Vorrang gegenüber den Absätzen 1 und 2. Es empfiehlt sich deshalb, zuerst die Voraussetzungen des § 159 Abs. 3 BewG zu prüfen. (die Schreibweise „der Betrieb der Land und Forstwirtschaft“ so in der Quelle)" },
      { text: "Die Abgrenzung zwischen Grundvermögen und den Betriebsgrundstücken richtet sich nach § 176 Abs. 1 BewG i. V. m. § 95 und § 99 BewG. Gem. § 95 Abs. 1 BewG umfasst das Betriebsvermögen alle Teile eines Gewerbebetriebs im Sinne des § 15 Abs. 1 und Abs. 2 EStG, die bei der steuerlichen Gewinnermittlung zum Betriebsvermögen gehören. Grundbesitz der in § 97 Abs. 1 BewG bezeichneten Kapitalgesellschaften und Personengesellschaften gehört grundsätzlich kraft Rechtsform zum Betriebsvermögen (R B 176.1 Abs. 3 ErbStR)." },
      { text: "Bewertungsgegenstand des Grundvermögens ist als wirtschaftliche Einheit das Grundstück (R B 176.2 Abs. 1 ErbStR)." },
      { text: "Querbezug: Das Beispiel des Teils 1, in dem eine landwirtschaftlich genutzte Fläche im Bebauungsplan als Bauland ausgewiesen ist und deshalb nach § 159 Abs. 3 BewG zum Grundvermögen gehört, ist genau der hier beschriebene Vorrangfall." },
    ],
  },
  {
    ...TC1,
    id: "erbst-bew2-2",
    kapitel: "2",
    title: "Feststellung von Grundbesitzwerten und der gemeine Wert als Bewertungsmaßstab",
    thema: "Die gesonderte Feststellung nach § 151 Abs. 1 Nr. 1 BewG, der gemeine Wert als Verkehrswert im Sinne des § 194 BauGB, die Verwendung der Daten der Gutachterausschüsse mit dem Grundsatz der Modellkonformität und der Dreijahresregel sowie die Ausblendung besonderer objektspezifischer Grundstücksmerkmale nach § 177 Abs. 4 BewG",
    normen: ["§ 157 Abs. 1 BewG", "§ 177 Abs. 1 bis 4 BewG", "§ 179 BewG", "§§ 182 bis 196 BewG", "§ 183 Abs. 2 BewG", "§ 188 Abs. 1 und 2 BewG", "§ 191 Satz 1 BewG", "§ 198 Abs. 2 und 3 BewG", "§ 9 BewG", "§ 151 Abs. 1 Nr. 1 BewG", "§ 179 AO", "§ 194 BauGB", "§§ 192 ff. BauGB", "§ 193 Abs. 5 Satz 2 BauGB", "§ 8 Abs. 3 ImmoWertV", "§ 10 Abs. 1 Satz 1 ImmoWertV", "R B 177 ErbStR", "AEBew JStG 2022"],
    themen: ["Gesonderte Feststellung", "Gemeiner Wert", "Verkehrswert", "Gutachterausschuss", "Modellkonformität", "Dreijahresregel", "Objektspezifische Merkmale", "Niedrigerer gemeiner Wert"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "2. Feststellung von Grundbesitzwerten, Bewertung" },
      { text: "Gem. § 157 Abs. 1 BewG werden Grundbesitzwerte unter Berücksichtigung der tatsächlichen Verhältnisse und der Wertverhältnisse zum Besteuerungszeitpunkt festgestellt. Es bedarf insoweit einer gesonderten Feststellung (§ 179 AO), wenn die Werte für die Erbschaft- oder Schenkungsteuer (§ 151 Abs. 1 Nr. 1 BewG) oder eine andere Feststellung i. S. d. § 151 BewG von Bedeutung sind." },
      { text: "Den Bewertungen nach den §§ 179 und 182 bis 196 BewG ist nach § 177 Abs. 1 BewG der gemeine Wert (§ 9 BewG) zugrunde zu legen. Dieser entspricht inhaltlich dem Verkehrswert (Marktwert) nach § 194 BauGB (R B 177 ErbStR, Rz. 2 AEBew JStG 2022, gleichlautende Ländererlasse vom 20.03.2023, BStBl. 2023 I Seite 738)." },
      { text: "Bei den Bewertungen nach den §§ 182 bis 196 BewG sind die von den Gutachterausschüssen im Sinne der §§ 192 ff. BauGB ermittelten sonstigen für die Wertermittlung erforderlichen Daten im Sinne des § 193 Abs. 5 S. 2 BauGB anzuwenden, wenn diese Daten unter Berücksichtigung des Grundsatzes der Modellkonformität (Rz. 6 AEBew JStG 2022) als geeignet anzusehen sind (§ 177 Abs. 2 BewG). Zu den sonstigen für die Wertermittlung erforderlichen Daten gehören insbesondere Vergleichsfaktoren (§ 183 Abs. 2 BewG, § 20 ImmoWertV), Liegenschaftszinssätze (§ 188 Abs. 1 u. 2 S. 1 BewG, § 21 Abs. 1 u. 2 ImmoWertV) und Sachwertfaktoren (§ 191 S. 1 BewG, § 21 Abs. 1 u. 3 ImmoWertV)." },
      { text: "Hat der Gutachterausschuss diese Daten auf einen Stichtag bezogen, ist der letzte Stichtag vor dem Bewertungsstichtag maßgeblich, sofern dieser nicht mehr als drei Jahre vor dem Bewertungsstichtag zurückliegt. Liegt der Bezugsstichtag mehr als drei Jahre zurück oder ist keine Bezugsstichtag bestimmt, sind die sonstigen für die Wertermittlung erforderlichen Daten anzuwenden, die von den Gutachterausschüssen für den letzten Auswertungszeitraum abgeleitet werden, der vor dem Kalenderjahr endet, in dem der Bewertungsstichtag liegt. Auch diese Daten sind dann für längstens drei Jahre ab dem Ende des Kalenderjahres maßgeblich, in dem der vom Gutachterausschuss zugrunde gelegte Auswertungszeitraum endet. Nur wenn sich die maßgeblichen Wertverhältnisse nicht wesentlich geändert haben, können die Daten auch über einen längeren Zeitraum als drei Jahre hinaus angewendet werden (§ 177 Abs. 2 BewG). (die Wendung „ist keine Bezugsstichtag bestimmt“ so in der Quelle)" },
      { text: "Gem. § 177 Abs. 3 BewG sind die sonstigen für die Wertermittlung erforderlichen Daten im Sinne des § 177 Abs. 2 BewG als geeignet anzusehen, wenn deren Ableitung weitgehend in demselben Modell erfolgt ist, wie die Bewertung. Im Hinblick auf den Grundsatz der Modellkonformität sind gemäß § 10 Abs. 1 S. 1 ImmoWertV bei Anwendung der von den Gutachterausschüssen ermittelten sonstigen für die Wertermittlung erforderlichen Daten grundsätzlich dieselben Modelle und Modellansätze zu verwenden, die der Ermittlung dieser Daten zugrunde lagen." },
      { text: "Soweit in den §§ 179 und 182 bis 196 BewG nichts anderes bestimmt ist, bleiben gem. § 177 Abs. 4 BewG Besonderheiten, wie z. B. die den Wert beeinflussenden Belastungen privatrechtlicher und öffentlicher Art, unberücksichtigt. Als derartige Besonderheiten sind insbesondere die besonderen objektspezifischen Grundstücksmerkmale im Sinne des § 8 Abs. 3 ImmoWertV anzusehen. Dazu zählen z. B. besondere Ertragsverhältnisse, Baumängel und Bauschäden, Bodenverunreinigungen, Bodenschätze und grundstücksbezogene Rechte und Belastungen. Wenn derartige Besonderheiten vorliegen, besteht laut Gesetzesbegründung lediglich die Möglichkeit, gem. § 198 BewG einen niedrigeren gemeinen Wert nachzuweisen (Gutachten § 198 Abs. 2 BewG, Nachweis durch einen Kaufpreis § 198 Abs. 3 BewG)." },
      { text: "Querbezug: Vom Nachweis des niedrigeren gemeinen Werts nach § 198 BewG macht der ErbSt-Teil der Übungsklausur AO/USt/ErbSt/BewR 1 Gebrauch; die Tz. 12 dieses Skriptteils behandelt ihn gesondert." },
    ],
  },
  {
    ...TC1,
    id: "erbst-bew2-3",
    kapitel: "3",
    title: "Unbebaute Grundstücke: Begriff und Bewertung nach Bodenrichtwerten",
    thema: "Wann ein Grundstück als unbebaut gilt – auch bei dauerhaft nicht nutzbaren oder zerstörten Gebäuden –, und die Bewertung nach § 179 BewG über die Bodenrichtwerte der Gutachterausschüsse einschließlich der Aufteilung in Vorder- und Hinterland",
    normen: ["§ 178 Abs. 1 BewG", "§ 178 Abs. 2 BewG", "§ 179 BewG", "§ 179 Satz 4 BewG", "§ 193 Abs. 3 BauGB", "§ 196 Abs. 1 BauGB", "R B 179.2 Abs. 4 ErbStR"],
    themen: ["Unbebautes Grundstück", "Bezugsfertigkeit", "Bodenrichtwert", "Kaufpreissammlung", "Vorderland", "Hinterland"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "3. Unbebaute Grundstücke – a) Begriff" },
      { text: "Unbebaute Grundstücke sind Grundstücke, auf denen sich keine benutzbaren Gebäude befinden (§ 178 Abs. 1 BewG). Die Benutzbarkeit beginnt im Zeitpunkt der Bezugsfertigkeit. Hinsichtlich der Bezugsfertigkeit kommt es darauf an, dass den zukünftigen Bewohnern oder sonstigen Benutzern zugemutet werden kann, die Gebäude zu benutzen. Die Abnahme durch die Bauaufsichtsbehörde ist unmaßgeblich." },
      { text: "Grundstücke mit Gebäuden, die auf Dauer keiner Nutzung zugeführt werden können, gelten gem. § 178 Abs. 2 BewG als unbebaut. Als unbebaut gilt auch ein Grundstück, auf dem infolge von Zerstörung und Verfall der Gebäude auf Dauer kein benutzbarer Raum mehr vorhanden ist." },
      { typ: "titel", text: "b) Bewertung" },
      { text: "Die Bewertung unbebauter Grundstücke erfolgt auf der Basis von Bodenrichtwerten die von den Gutachterausschüssen ermittelt und den Finanzämtern mitgeteilt werden (§ 179 BewG). Bei der Wertermittlung ist stets der Bodenrichtwert anzusetzen, der von den Gutachterausschüssen zuletzt festzustellen war. Die Gutachterausschüsse leiten die Bodenrichtwerte aus Kaufpreissammlungen ab, die von ihnen nach § 193 Abs. 3 BauGB i. V. m. § 196 Abs. 1 BauGB zu führen sind. Bodenrichtwerte sind, soweit nichts anderes bestimmt ist, jeweils zum Ende eines Kalenderjahres zu ermitteln. Landesrecht sieht teilweise die Ermittlung in Zweijahresabständen vor." },
      { text: "Wird vom Gutachterausschuss kein Bodenwert ermittelt, ist der Bodenwert aus den Werten vergleichbar Flächen abzuleiten (§ 179 Satz 4 BewG). (die Wendung „aus den Werten vergleichbar Flächen“ so in der Quelle)" },
      { text: "Sofern die Bodenrichtwerte in Abhängigkeit von der Grundstückstiefe ermittelt worden sind, bedarf es einer Aufteilung der Grundstücksfläche in Vorderland und Hinterland. Die Grundstückstiefe wird nach ihrer Tiefe in Zonen gegliedert, deren Abgrenzung sich nach den Vorgaben des Gutachterausschusses richtet (R B 179.2 Abs. 4 ErbStR)." },
      { text: "Querbezug: Die Aufteilung in Vorder- und Hinterland wendet der Übungsfall Fietze der ErbSt-Fallsammlung beim Erbbaugrundstück in Herten an – 60 m × 35 m zu 40 €/qm Vorderland und 60 m × 5 m zu 10 €/qm Hinterland, also 25 % des Vorderlandpreises. Die Musterlösung belegt die Aufteilung dort mit derselben Richtlinienstelle (allerdings versehentlich als „R B 179.2 Abs. 4 ErbStG“)." },
    ],
  },
  {
    ...TC2,
    id: "erbst-bew2-4",
    kapitel: "1",
    title: "Bebaute Grundstücke: Begriff und die sechs Grundstücksarten des § 181 BewG",
    thema: "Wann ein Grundstück bebaut ist, was zur wirtschaftlichen Einheit gehört, und die sechs Grundstücksarten mit ihren Prozentgrenzen – vom Ein- und Zweifamilienhaus über Mietwohngrundstück, Wohnungs- und Teileigentum bis zum Geschäftsgrundstück, gemischt genutzten und sonstigen bebauten Grundstück, dazu der Wohnungsbegriff des § 181 Abs. 9 BewG",
    normen: ["§ 180 Abs. 1 und 2 BewG", "§ 181 Abs. 1 bis 9 BewG", "§ 182 BewG", "§ 1 Abs. 2 und 3 WEG", "R B 176.1 Abs. 1 und 4 ErbStR", "R B 180 Abs. 3 ErbStR", "AEBew JStG 2022"],
    themen: ["Bebautes Grundstück", "Grundstücksarten", "Wohnungsbegriff", "80-Prozent-Grenze", "50-Prozent-Grenze", "Teileigentum", "Tiny-Häuser"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "4. Bebaute Grundstücke – a) Begriff" },
      { text: "Bebaute Grundstücke sind gem. § 180 Abs. 1 BewG Grundstücke, auf denen sich benutzbare Gebäude befinden. Bei einem Gebäude, das in Bauabschnitten errichtet wird, ist der fertiggestellte Teil als benutzbares Gebäude anzusehen. Darüber hinaus gelten als bebaute Grundstücke auch Gebäude auf fremdem Grund und Boden sowie die Gebäude, die in sonstigen Fällen einem anderen als dem Eigentümer des Grund und Boden zugerechnet werden (§ 180 Abs. 2 BewG)." },
      { text: "Zur wirtschaftlichen Einheit eines bebauten Grundstücks gehören der Grund und Boden, die Gebäude, die Außenanlagen, sonstige wesentliche Bestandteile und das Zubehör. Nicht einzubeziehen sind Maschinen und Betriebsvorrichtungen (R B 180 Abs. 3, R B 176.1 Abs. 1 und Abs. 4 ErbStR)." },
      { typ: "titel", text: "b) Grundstücksarten" },
      { text: "Für die Bewertung bebauter Grundstücke sieht § 182 BewG drei verschiedene Bewertungsverfahren vor, deren Anwendung sich vornehmlich nach der Art des jeweiligen Grundstücks richtet. Nach § 181 Abs. 1 BewG sind die folgenden Grundstücksarten zu unterscheiden (Rz. 8 AEBew JStG 2022):" },
      { typ: "tabelle", spalten: ["Grundstücksart", "Vorschrift", "Merkmal"], zeilen: [
        ["Ein- und Zweifamilienhäuser", "§ 181 Abs. 2 BewG", "Wohngrundstücke bis zu zwei Wohnungen, kein Wohnungseigentum; Mitbenutzung für betriebliche oder öffentliche Zwecke unschädlich unter 50 % der Wohn- oder Nutzfläche"],
        ["Mietwohngrundstücke", "§ 181 Abs. 3 BewG", "zu mehr als 80 % der Wohn- und Nutzfläche Wohnzwecken dienend, kein Ein-/Zweifamilienhaus und kein Wohnungseigentum"],
        ["Wohnungs- und Teileigentum", "§ 181 Abs. 4 und 5 BewG", "Sondereigentum an einer Wohnung beziehungsweise an nicht zu Wohnzwecken dienenden Räumen, jeweils mit Miteigentumsanteil"],
        ["Geschäftsgrundstücke", "§ 181 Abs. 6 BewG", "zu mehr als 80 % der Wohn- oder Nutzfläche eigenen oder fremden betrieblichen oder öffentlichen Zwecken dienend"],
        ["Gemischt genutzte Grundstücke", "§ 181 Abs. 7 BewG", "teils Wohnzwecken, teils betrieblichen oder öffentlichen Zwecken dienend und keine der übrigen Arten"],
        ["Sonstige bebaute Grundstücke", "§ 181 Abs. 8 BewG", "alle Grundstücke, die nicht zu den übrigen Arten gehören"],
      ] },
      { text: "Redaktioneller Hinweis: Die Quelle zählt die sechs Grundstücksarten zunächst auf und erläutert sie anschließend in eigenen Absätzen. Die Übersicht fasst beides zusammen; die Merkmale sind wörtlich aus den nachfolgenden Absätzen übernommen." },
      { text: "Zu den Ein- und Zweifamilienhäusern gehören nach § 181 Abs. 2 BewG Wohngrundstücke, die bis zu zwei Wohnungen enthalten und kein Wohnungseigentum darstellen. Eine Mitbenutzung für betriebliche (gewerbliche, freiberufliche, land- und forstwirtschaftliche) oder öffentliche Zwecke ist unschädlich, wenn diese weniger als 50 %, berechnet nach der Wohn- oder Nutzfläche, beträgt, und dadurch die Eigenart als Ein- oder Zweifamilienhaus nicht wesentlich beeinträchtigt wird." },
      { text: "Eine gesetzliche Definition der Wohnung im bewertungsrechtlichen Sinne enthält § 181 Abs. 9 BewG. Wohnung ist danach die Zusammenfassung mehrerer Räume, die in ihrer Gesamtheit so beschaffen sein müssen, dass die Führung eines selbständigen Haushalts möglich ist. Die Zusammenfassung der Räume muss eine von anderen Wohnungen oder Räumen, insbesondere Wohnräumen, baulich getrennte, in sich geschlossene Wohneinheit bilden und einen selbständigen Zugang haben. Darüber hinaus ist es erforderlich, dass die die Führung eines selbständigen Haushalts notwendigen Nebenräumen (Küche, Bad oder Dusche, Toilette) vorhanden sind. Die Wohnfläche soll mindestens 20 qm haben. Es ist nach Rz. 10 S. 6 AEBew JStG 2022 im Einzelfall zu prüfen, ob bei einer geringeren Wohnfläche nach der Verkehrsanschauung noch von einer Wohnung im bewertungsrechtlichen Sinne ausgegangen werden kann (z. B. bei sogenannten Tiny-Häusern, d. h. Kleinst- oder Mikrohäusern, Wohnungen in einem Studentenwohnheim). (die Wendung „dass die die Führung eines selbständigen Haushalts notwendigen Nebenräumen“ so in der Quelle)" },
      { text: "Als Mietwohngrundstücke gelten Grundstücke, die zu mehr als 80 %, berechnet nach der Wohn- und Nutzfläche, Wohnzwecken dienen, und nicht Ein- und Zweifamilienhäuser oder Wohnungseigentum sind (§ 181 Abs. 3 BewG)." },
      { text: "Wohnungseigentum ist das Sondereigentum an einer Wohnung in Verbindung mit dem Miteigentumsanteil an dem gemeinschaftlichen Eigentum, zu dem es gehört (§ 181 Abs. 4 BewG). Die Begriffsbestimmung für diese Grundstücksart folgt dem Wohnungseigentumsgesetz (vgl. § 1 Abs. 2 Wohnungseigentumsgesetz). Bei einem Sondereigentum an nicht zu Wohnzwecken dienenden Räumen eines Gebäudes in Verbindung mit dem Miteigentum an dem gemeinschaftlichen Eigentum, zu dem es gehört, handelt es sich um Teileigentum (§ 181 Abs. 5 BewG, vgl. § 1 Abs. 3 Wohnungseigentumsgesetz)." },
      { text: "Als Geschäftsgrundstücke werden gem. § 181 Abs. 6 BewG Grundstücke definiert, die, berechnet nach der Wohn- oder Nutzfläche, zu mehr als 80 % eigenen oder fremden betrieblichen (gewerblichen, freiberuflichen, land- und forstwirtschaftlichen) oder öffentlichen Zwecken dienen." },
      { text: "Gemischt genutzte Grundstücke sind Grundstücke, die teils Wohnzwecken, teils eigenen oder fremden betrieblichen oder öffentlichen Zwecken dienen und nicht Ein- und Zweifamilienhäuser, Mietwohngrundstücke, Wohnungseigentum, Teileigentum oder Geschäftsgrundstücke sind (§ 181 Abs. 7 BewG)." },
      { text: "Als sonstige bebaute Grundstücke gelten gem. § 181 Abs. 8 BewG solche Grundstücke, die nicht zu den übrigen Grundstücksarten gehören. Darunter fallen z. B. Clubhäuser, Vereinsheime, Jagdhütten, Turnhallen und ähnliche Grundstücke, die weder Wohnzwecken noch gewerblichen oder öffentlichen Zwecken dienen." },
      { typ: "titel", text: "Beispiele: Zuordnung nach der Flächenverteilung" },
      { text: "Bei den nachstehend aufgeführten Grundstücken handelt sich nicht um Ein- und Zweifamilienhäuser oder Wohnungs- bzw. Teileigentum. (die Wendung „handelt sich nicht“ so in der Quelle)" },
      { typ: "tabelle", spalten: ["Verteilung der Wohn- und Nutzflächen (qm)", "Fall 1", "Fall 2", "Fall 3"], zeilen: [
        ["Wohnzwecke", "2200", "200", "2000"],
        ["Betriebliche Zwecke", "300", "1800", "400"],
        ["Öffentliche Zwecke", "–", "500", "100"],
        ["Summe", "2500", "2500", "2500"],
        ["Grundstücksart", "Mietwohngrundstück", "Geschäftsgrundstück", "Gemischt genutztes Grundstück"],
      ] },
      { text: "Rechnerische Kontrolle: Alle drei Fälle gehen auf und ergeben die von der Quelle genannte Grundstücksart. Fall 1: 2.200 von 2.500 qm sind 88 % Wohnnutzung, also mehr als 80 % – Mietwohngrundstück nach § 181 Abs. 3 BewG. Fall 2: 1.800 + 500 = 2.300 von 2.500 qm sind 92 % betriebliche und öffentliche Nutzung, also mehr als 80 % – Geschäftsgrundstück nach § 181 Abs. 6 BewG. Fall 3 ist der Grenzfall: 2.000 von 2.500 qm sind genau 80 % Wohnnutzung, also nicht mehr als 80 %; zugleich erreichen die betrieblichen und öffentlichen Zwecke mit 500 qm nur 20 %. Damit greift weder § 181 Abs. 3 noch Abs. 6 BewG, und es bleibt beim gemischt genutzten Grundstück nach § 181 Abs. 7 BewG." },
      { text: "Redaktioneller Hinweis zur Spaltenzuordnung: Die Quelle druckt die Zeile „Öffentliche Zwecke“ mit nur zwei Beträgen (500 und 100). Sie gehören zu den Fällen 2 und 3; im Fall 1 gibt es keine öffentliche Nutzung. Nur so ergeben alle drei Spalten die ausgewiesene Summe von 2.500 qm." },
    ],
  },
  {
    ...TC2,
    id: "erbst-bew2-5",
    kapitel: "2",
    title: "Die drei Bewertungsverfahren und ihre Zuordnung nach § 182 BewG",
    thema: "Welches Verfahren für welche Grundstücksart gilt – Vergleichswertverfahren für Wohnungs- und Teileigentum sowie Ein- und Zweifamilienhäuser, Ertragswertverfahren für Renditeobjekte mit ermittelbarer üblicher Miete, Sachwertverfahren als Auffangverfahren – und die Regel für Mischfälle",
    normen: ["§ 182 Abs. 1 bis 4 BewG", "§ 183 BewG", "§§ 184 bis 188 BewG", "§§ 189 bis 191 BewG", "§ 179 BewG", "R B 182 Abs. 5 ErbStR"],
    themen: ["Vergleichswertverfahren", "Ertragswertverfahren", "Sachwertverfahren", "Übliche Miete", "Renditeobjekt", "Mischfälle"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "c) Bewertungsverfahren" },
      { text: "Für die Bewertung bebauter Grundstücke sieht § 182 Abs. 1 BewG drei verschiedene Bewertungsverfahren vor: Vergleichswertverfahren, Ertragswertverfahren und Sachwertverfahren." },
      { text: "Das Vergleichswertverfahren (§ 182 Abs. 2, § 183 BewG) kommt nur für Grundstücke in Betracht, die mit weitgehend gleichartigen Gebäuden bebaut sind und bei denen sich der Grundstücksmarkt an Vergleichswerten orientiert. Das Vergleichswertverfahren ist daher regelmäßig für Wohnungseigentum, Teileigentum sowie Ein- und Zweifamilienhäuser anzuwenden. Beim Vergleichswertverfahren wird der Marktwert eines Grundstücks in der Regel aus tatsächlich realisierten Kaufpreisen von anderen Grundstücken abgeleitet, die hinreichend vergleichbar sind." },
      { text: "Das Ertragswertverfahren (§ 182 Abs. 3 BewG) findet regelmäßig Anwendung bei bebauten Grundstücken, bei denen der nachhaltig erzielbare Ertrag für die Werteinschätzung am Grundstücksmarkt im Vordergrund steht (typische Renditeobjekte). Im Ertragswertverfahren sind zu bewerten Mietwohngrundstücke sowie Geschäftsgrundstücke und gemischt genutzte Grundstücke, für die sich auf dem örtlichen Grundstücksmarkt eine übliche Miete ermitteln lässt." },
      { text: "Der Wert von bebauten Grundstücken wird beim Ertragswertverfahren auf der Grundlage des für diese Grundstücke nachhaltig erzielbaren Ertrags ermittelt. Es erfolgt eine getrennte Wertermittlung für den Wert der baulichen Anlagen und den Bodenwert. Die Bewertung des Grund und Bodens richtet sich nach der Regelung des § 179 BewG für die Bewertung der unbebauten Grundstücke." },
      { text: "Grundstücke, bei denen es für die Werteinschätzung am Grundstücksmarkt nicht in erster Linie auf den Ertrag ankommt, sondern die Herstellungskosten im gewöhnlichen Geschäftsverkehr wertbestimmend sind, werden gem. § 182 Abs. 4 BewG im Sachwertverfahren bewertet. Das Sachwertverfahren findet Anwendung für die folgenden Grundstücke: Wohnungseigentum, Teileigentum, Ein- und Zweifamilienhäuser, wenn kein Vergleichswert vorliegt; Geschäftsgrundstücke und gemischt genutzte Grundstücke, für die sich auf dem örtlichen Grundstücksmarkt keine übliche Miete ermitteln lässt; sowie sonstige bebaute Grundstücke." },
      { text: "Bei Anwendung des Sachwertverfahrens (§§ 189 bis 191 BewG) ist der Gebäudesachwert getrennt vom Bodenwert auf der Grundlage von durchschnittlichen Herstellungskosten zu bemessen. Der Bodenwert wird wie bei unbebauten Grundstücken nach Maßgabe des § 179 BewG ermittelt." },
      { text: "Befinden sich auf einem Grundstück nicht nur Gebäude oder Gebäudeteile, die im Ertragswertverfahren zu bewerten sind, (Mischfälle), erfolgt die Wertermittlung für die gesamte wirtschaftliche Einheit einheitlich nach dem Sachwertverfahren (R B 182 Abs. 5 ErbStR)." },
      { text: "Einen Überblick über die jeweils anzuwendenden Bewertungsverfahren zeigt das Schaubild auf der nächsten Seite." },
      { typ: "titel", text: "Bewertungsverfahren – Überblick" },
      { typ: "tabelle", spalten: ["Grundstücke", "Verfahren"], zeilen: [
        ["Wohnungseigentum; Teileigentum; Einfamilienhäuser; Zweifamilienhäuser", "Vergleichswertverfahren §§ 182 Abs. 2, 183 BewG,"],
        ["Mietwohngrundstücke; Geschäftsgrundstücke und gemischt genutzte Grundstücke, für die sich am örtlichen Grundstücksmarkt eine übliche Miete ermitteln lässt", "Ertragswertverfahren § 182 Abs. 3 BewG, §§ 184 - 188 BewG"],
        ["Wohnungseigentum, Teileigentum, Einfamilienhäuser und Zweifamilienhäuser, wenn kein Vergleichswert vorliegt; Geschäftsgrundstücke und gemischt genutzte Grundstücke, für die sich auf dem örtlichen Grundstücksmarkt keine übliche Miete ermitteln lässt; sonstige bebaute Grundstücke", "Sachwertverfahren § 182 Abs. 4 BewG, §§ 189 - 191 BewG"],
      ] },
      { text: "Redaktioneller Hinweis: Das Schaubild steht in der Quelle als dreigeteilte Grafik, in der die Grundstücksgruppen jeweils vor dem zugehörigen Verfahren stehen. Es ist zugeordnet als Tabelle wiedergegeben; der Wortlaut einschließlich des Kommas am Ende der ersten Verfahrensangabe ist unverändert." },
      { text: "Querbezug: Die Weiche dieser Tz. erklärt die Verfahrenswahl in allen bisher eingepflegten Fällen. Im Übungsfall Fietze wird das Einfamilienhaus in Hagen mangels Vergleichswert im Sachwertverfahren bewertet (§ 182 Abs. 4 Nr. 1 BewG), das gemischt genutzte Grundstück in Bochum dagegen im Ertragswertverfahren (§ 182 Abs. 3 Nr. 2 BewG) und die Reitsporthalle in Herten als Geschäftsgrundstück ohne ermittelbare Vergleichsmiete wieder im Sachwertverfahren. Die Hausaufgabe 2 bewertet ein Mietwohngrundstück im Ertragswertverfahren." },
    ],
  },
];

export default erbstBewertungTeil2;
