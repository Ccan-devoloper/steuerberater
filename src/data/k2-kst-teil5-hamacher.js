/* KSt Teil V – Verlustabzug und fortführungsgebundener Verlust (§§ 8c, 8d KStG),
   Zinsschranke (§ 4h EStG, § 8a KStG), Verluste aus stillen Beteiligungen
   (§ 15 Abs. 4 EStG), Hamacher, 21. Auflage, Rechtsstand Mai 2025.

   Wortlautgetreue Übernahme des Lehrgangsskripts „Körperschaftsteuer, Teil V:
   Verlustabzug und fortführungsgebundener Verlust (§ 8c, 8d KStG),
   Zinsschranke (§ 4h EStG, § 8a KStG), Verluste aus stillen Beteiligungen
   (§ 15 Abs. 4 EStG)" aus den Lehrgangsunterlagen (74 Seiten). Das Skript hat
   vier Kapitel: 1 Verlustabzug bei Körperschaften (§ 8c KStG),
   2 Fortführungsgebundener Verlust (§ 8d KStG), 3 Zinsschranke und
   4 Verluste aus stillen Beteiligungen. Gegliedert wird hier nach den
   Abschnitten der Quelle; jeder Abschnitt steht als eigener Eintrag.

   STAND DER ÜBERNAHME: Aus Kapitel 1 sind die Verfassungswidrigkeit des § 8c
   KStG (1.1) und die Tatbestandsmerkmale (1.2 mit dem schädlichen
   Anteilserwerb, den nicht genutzten Verlusten, der Gewerbesteuer, dem
   Wegfall des § 8c Abs. 2 KStG und der Sanierungsklausel) übernommen, dazu
   der Erwerberkreis (1.3 mit der Rechtsform des Erwerbers und den
   gleichgerichteten Interessen) und der Grundfall des Anteilserwerbs (1.4.1).
   Es folgen die gleichgestellten Sachverhalte und Sonderfälle (1.4.2 bis
   1.4.6), die Verschonungsgrenze (1.5), die Verlustkürzung (1.6), die
   Organschaftsfälle (1.7) sowie die Kapitel 2 bis 4; der Campus weist den
   Stand aus.

   HINWEIS ZUM RECHTSSTAND: Dieses Skript trägt den Rechtsstand Mai 2025.

   HINWEIS ZUR QUELLE: Der Text ist unmittelbar aus der PDF-Datei extrahiert
   (pypdf, 74 Seiten), weil die Textausgabe des Drive-Readers bei umfangreichen
   PDF-Dateien ohne Fehlermeldung abbrechen kann. Das personenbezogene
   Wasserzeichen der Vorlage ist auf allen 74 Seiten entfernt.

   Die Fußnoten der Quelle sind nicht als eigene Blöcke übernommen; die
   Fundstellen, auf die sie verweisen, stehen im Feld `normen` des jeweiligen
   Kapitels. */

const VERFASSER = "Hamacher";
const RECHTSSTAND = "Stand 05/2025";

export const kstTeil5Quelle = {
  reihe: "Körperschaftsteuer · Teil V: Verlustabzug (§§ 8c, 8d KStG), Zinsschranke, stille Beteiligungen · Hamacher",
  stand: "Stand 05/2025 (21. Auflage)",
  verfasser: "Hamacher",
  didaktik: [
    "Wortlautgetreue Übernahme des Lehrgangsskripts; eigene Ergänzungen sind durchgehend als solche gekennzeichnet.",
    "Jeder Abschnitt der Quelle steht als eigener Eintrag; die Nummerierung folgt dem Inhaltsverzeichnis des Skripts.",
    "Sämtliche Zahlen der Beispiele sind unabhängig nachgerechnet; Abweichungen und Eigenheiten der Quelle sind mit „(so in der Quelle)“ gekennzeichnet.",
  ],
};

export const kstTeil5 = [
  {
    id: "kst-t5-1",
    kapitel: "1",
    abschnittNr: "1.1",
    title: "1.1 Verfassungswidrigkeit des § 8c KStG und 1.2.1 der schädliche Anteilserwerb",
    thema: "Das BVerfG hat § 8c Abs. 1 Satz 1 KStG a. F. für 2008 bis 2015 verworfen; die Quotenstufe über 25 bis 50 % ist ersatzlos aufgehoben. Geblieben ist der vollständige Verlustuntergang bei Erwerben über 50 %",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil V (Hamacher), Abschnitte 1.1 und 1.2.1 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8c Abs. 1 KStG",
      "§ 8c Abs. 1 Satz 4 KStG",
      "§ 8c Abs. 1 Satz 5 bis 8 KStG",
      "§ 8d KStG",
      "§ 1a KStG",
      "§ 34 Abs. 6 Satz 1 KStG i. d. F. vom 11.12.2018",
      "Art. 3 GG",
      "BVerfG vom 29.03.2017, 2 BvL 6/11",
      "FG Hamburg vom 04.04.2011, 2 K 33/10",
      "FG Hamburg vom 29.08.2017, 2 K 245/17 (BVerfG 2 BvL 19/17)",
      "BMF vom 28.11.2017, BStBl. I 2017, 1645",
    ],
    themen: ["§ 8c KStG", "Verfassungswidrigkeit", "schädlicher Anteilserwerb", "Zählerwerb", "Mantelkauf", "Erwerbsquote", "optierende Gesellschaft"],
    bloecke: [
      { typ: "titel", text: "1.1.1 Aufhebung des § 8c Abs. 1 Satz 1 KStG a. F." },
      { text: "Mit Beschluss vom 29.03.2017 hat das Bundesverfassungsgericht § 8c Abs. 1 Satz 1 KStG a.F. für den Zeitraum 2008 – 2015 für nicht mit Art. 3 GG vereinbar erklärt. Damit hat das Gericht den Vorlagebeschluss des FG Hamburg bestätigt und dabei insbesondere festgestellt, dass es für die Annahme eines schädlichen Beteiligungserwerbs bei einer Erwerbsquote von > 25 % bis 50 % an einem sachlich überzeugenden Grund fehle. Als Reaktion darauf wurde § 8c Abs. 1 Satz 1 KStG a.F. für sämtliche Erwerbe nach dem 31.12.2007 ersatzlos aufgehoben. Damit können unmittelbare und mittelbare Erwerbe dieser Fallgruppe (> 25 % bis 50 %) zu keiner Verlustkürzung mehr führen. Die Erwerbe bleiben aber als Zählerwerbe bestehen und können nachfolgende Erwerbe unverändert beeinflussen." },
      { typ: "titel", text: "1.1.2 § 8c Abs. 1 Satz 2 KStG a. F." },
      { text: "Im Zusammenhang mit der bisherigen Norm des § 8c Abs. 1 Satz 2 KStG a.F. (jetzt: § 8c Abs. 1 Satz 1 KStG n.F.) ist derzeit beim BVerfG ein weiteres Verfahren anhängig. Das FG Hamburg hat mit Beschluss vom 29.08.2017 dem BVerfG ein Normenkontrollverfahrens angestrengt. Das Verfahren ist beim BVerfG unter dem Aktenzeichen 2 BvL 19/17 anhängig und soll voraussichtlich in Kürze entschieden werden." },
      { typ: "titel", text: "1.2.1 Abstellen auf den schädlichen Anteilserwerb" },
      { text: "Im Rahmen des § 8c KStG wird über das Schicksal eines nicht genutzten Verlustes einer unbeschränkt bzw. beschränkt steuerpflichtigen Kapitalgesellschaft, Personenvereinigung und Vermögensmasse, aber auch von Anstalten bzw. Stiftungen typisierend danach entschieden, ob bei dieser Verlustgesellschaft ein schädlicher Anteilserwerb stattgefunden hat. Jeder Anteilserwerb kann daher auch Auswirkungen auf den Verlustabzug der Körperschaft haben. Bei einer optierenden Gesellschaft i.S. des § 1a KStG ist diesbezüglich auf die Übertragung des Mitunternehmeranteils abzustellen, dessen Beteiligungsquote sich aus dem Kapitalkonto I ergibt. § 8c Abs. 1 KStG stellt diesbezüglich auf folgende Erwerbsquoten ab:" },
      { text: "– bei Erwerb von bis zu 50 % der Anteile am Nennkapital: Der Vorgang ist unschädlich (aber: Zählerwerb);" },
      { text: "– bei Erwerb von mehr als 50 % der Anteile am Nennkapital: Der steuerliche Verlust geht vollständig unter." },
      { text: "Bei dieser Quote hat sich der Gesetzgeber an die zivilrechtliche Qualität dieses Anteils orientiert. Denn bei einer Anteilsquote von mehr als 50 % ist der Erwerber anschließend der Mehrheitsgesellschafter. In diesen Fällen kann von einem sog. Mantelkauf ausgegangen werden, bei dem das vorrangige Ziel des Anteilserwerbs auf den Erwerb und den Erhalt des bestehenden Verlustabzugs der Körperschaft ausgerichtet gewesen ist. Denn der Gesellschafter hat es aufgrund seiner „Mehrheitsbeteiligung“ nunmehr selbst in der Hand, über deren Verluste zu verfügen und diese steueroptimal zu nutzen. Dies wäre z.B. der Fall, wenn nach dem Anteilserwerb durch Mehrheitsbeschluss der Gesellschafterversammlung der Gesellschaftszweck der bisherigen Verlustgesellschaft geändert würde und danach die „erworbenen“ Verluste zukünftig mit den Gewinnen aus der neuen Tätigkeit verrechnet werden könnten." },
      { text: "Entscheidend für die Erwerbsquote ist ausschließlich, dass mehr als 50 % des gesamten gezeichneten Kapitals oder der Gesellschaftsrechte erworben werden. Wieviel Prozent der Veräußerer von „seinem Anteil“ überträgt, ist hierfür letztlich unerheblich. Ist die Verlustgesellschaft keine Kapitalgesellschaft, gilt gleiches auch für den Erwerb von Mitgliedschafts- und Beteiligungsrechten sowie von Stimmrechten und vergleichbaren Sachverhalten." },
      { text: "Um § 8c KStG eindeutiger auf Missbrauchsfälle auszurichten, ist seit 2010 zum einen die sog. Verschonungsregelung des § 8c Abs. 1 Satz 5 – 8 KStG eingeführt worden, wonach der typisierende Verlustuntergang durch die Höhe der in dem erworbenen Anteil enthaltenen stillen Reserven begrenzt wird (siehe unter 1.5.1). Zeitgleich wurde zum anderen auch Konzernklausel i.S. des § 8c Abs. 1 Satz 4 KStG eingeführt, um die Auswirkungen auf konzerninterne Anteilsübertragungen auszuschließen (siehe unter 1.4.5). Seit VZ 2016 besteht zudem durch § 8d KStG die Möglichkeit, den zwingenden Verlustuntergang i.S. des § 8c KStG zu vermeiden (siehe unter 2.). (Die Form „wurde zum anderen auch Konzernklausel“ steht so in der Quelle.)" },
      { text: "Die Finanzverwaltung hat zur Anwendung des § 8c KStG mit BMF-Schreiben vom 28.11.2017 Stellung genommen." },
      { typ: "tabelle", spalten: ["Erwerbsquote am Nennkapital", "Rechtsfolge heute", "Rechtsfolge nach altem Recht"], zeilen: [
        ["bis 50 %", "unschädlich, bleibt aber Zählerwerb für spätere Erwerbe", "über 25 bis 50 %: quotaler Verlustuntergang – vom BVerfG verworfen und ersatzlos aufgehoben"],
        ["mehr als 50 %", "der steuerliche Verlust geht vollständig unter", "unverändert; die Verfassungsmäßigkeit ist beim BVerfG unter 2 BvL 19/17 anhängig"],
      ] },
      { typ: "tabelle", spalten: ["Korrektiv", "Norm", "Wirkung", "Abschnitt"], zeilen: [
        ["Verschonungsregelung", "§ 8c Abs. 1 Satz 5 bis 8 KStG, seit 2010", "der Verlustuntergang ist durch die im erworbenen Anteil enthaltenen stillen Reserven begrenzt", "1.5.1"],
        ["Konzernklausel", "§ 8c Abs. 1 Satz 4 KStG, seit 2010", "konzerninterne Anteilsübertragungen bleiben außer Betracht", "1.4.5"],
        ["fortführungsgebundener Verlustvortrag", "§ 8d KStG, seit VZ 2016", "der zwingende Verlustuntergang lässt sich auf Antrag vermeiden", "2."],
        ["Sanierungsklausel", "§ 8c Abs. 1a KStG", "der Erwerb wird vollständig ausgeblendet", "1.2.5"],
      ] },
      { text: "Anmerkung zur Zweiteilung der Quoten (eigene Ergänzung): Nach der Aufhebung der ersten Stufe kennt § 8c KStG heute nur noch **eine** Schwelle – mehr als 50 %. Das macht die Prüfung einfacher, als sie in älterer Literatur erscheint, und die Faustregel lautet: **alles oder nichts**. Entweder bleibt der Verlust vollständig erhalten oder er geht vollständig unter; einen quotalen Untergang gibt es nicht mehr. Wichtig ist dabei die Fortwirkung der aufgehobenen Stufe: Erwerbe zwischen 25 und 50 % sind zwar folgenlos, bleiben aber **Zählerwerbe** und können zusammen mit späteren Erwerben die 50-Prozent-Schwelle überschreiten." },
      { text: "Anmerkung zur Bezugsgröße (eigene Ergänzung): Der Satz, es komme ausschließlich darauf an, dass mehr als 50 % des **gesamten** gezeichneten Kapitals erworben werden, während es unerheblich sei, welchen Anteil der Veräußerer von „seinem Anteil“ überträgt, ist eine der häufigsten Fehlerquellen. Gemessen wird stets am **Kapital der Gesellschaft**, nie an der Beteiligung des Veräußerers. Wer von einem Gesellschafter mit 60 % dessen gesamte Beteiligung erwirbt, überschreitet die Schwelle; wer von zwei Gesellschaftern je 30 % ihres Anteils erwirbt, tut es nicht – obwohl in beiden Fällen „alles“ beziehungsweise „ein Teil“ übertragen wurde." },
      { text: "Anmerkung zur Begründung des Gesetzgebers (eigene Ergänzung): Die Quelle erklärt die Schwelle von 50 % ausdrücklich mit der **zivilrechtlichen** Qualität des Anteils: Ab dieser Quote ist der Erwerber Mehrheitsgesellschafter und kann durch Mehrheitsbeschluss den Gesellschaftszweck ändern, also die erworbenen Verluste mit Gewinnen aus einer ganz neuen Tätigkeit verrechnen. Genau darin liegt der **Mantelkauf**, den die Norm treffen soll. Das erklärt zugleich, weshalb das BVerfG die frühere Stufe von 25 bis 50 % verworfen hat: Dort fehlt dem Erwerber diese Verfügungsmacht, und damit fehlte der typisierenden Belastung der sachliche Grund." },
      { text: "Anmerkung zur optierenden Gesellschaft (eigene Ergänzung): Der kurze Satz zu § 1a KStG ist eine Neuerung, die man leicht überliest. Bei der zur Körperschaftsbesteuerung optierenden Personengesellschaft gibt es kein Nennkapital, an dem sich die Quote messen ließe. Die Quelle stellt deshalb auf die Übertragung des **Mitunternehmeranteils** ab und leitet die Beteiligungsquote aus dem **Kapitalkonto I** her – also aus dem festen Kapitalanteil, der bei Personengesellschaften die Beteiligungsverhältnisse abbildet. Damit wird die Systematik des § 8c KStG auf eine Rechtsform übertragen, für die sie ursprünglich nicht gedacht war." },
    ],
  },
  {
    id: "kst-t5-2",
    kapitel: "2",
    abschnittNr: "1.2.5",
    title: "1.2.2 bis 1.2.5 Betroffene Verluste, Gewerbesteuer und Sanierungsklausel",
    thema: "§ 8c KStG erfasst sämtliche nicht genutzten Verluste einschließlich Zinsvorträgen und wirkt über § 10a Satz 10 GewStG auch gewerbesteuerlich. Die Sanierungsklausel blendet den Erwerb vollständig aus – auch als Zählerwerb",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil V (Hamacher), Abschnitte 1.2.2 bis 1.2.5 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8c KStG",
      "§ 8c Abs. 1a KStG",
      "§ 8c Abs. 1a Satz 2 und Satz 3 KStG",
      "§ 8c Abs. 2 KStG",
      "§ 8a Abs. 1 Satz 3 KStG",
      "§ 8d KStG",
      "§ 10d Abs. 4 EStG",
      "§ 4h Abs. 1 Satz 5 EStG",
      "§ 3a EStG",
      "§§ 2a, 15a und 15 Abs. 4 EStG",
      "§ 10 Abs. 3 Satz 5 AStG",
      "§ 10a Satz 10 GewStG",
      "§ 175 Abs. 1 Nr. 2 AO",
      "R 7.1 Abs. 1 Nr. 34 und 37 KStR",
      "BMF vom 28.11.2017, BStBl. I 2017, 1645, Tz. 2",
      "BFH vom 24.04.2024, IV R 27/21",
      "BFH vom 05.06.2007, BStBl. II 2008, 986",
    ],
    themen: ["nicht genutzte Verluste", "Zinsvortrag", "Gewerbesteuer", "Sanierungsgewinn", "Sanierungsklausel", "Betriebsstrukturen", "Branchenwechsel"],
    bloecke: [
      { typ: "titel", text: "1.2.2 Nicht genutzte Verluste" },
      { text: "Von § 8c KStG betroffen sind sämtliche nicht genutzten Verluste, was insbesondere folgende Tatbestände betrifft:" },
      { text: "– Die Verlustvorträge i.S. des § 10d Abs. 4 EStG (bei Organgesellschaften: vororganschaftliche Verlustvorträge);" },
      { text: "– Der fortführungsgebundene Verlustvortrag i.S. des § 8d KStG (siehe unter 2.7);" },
      { text: "– Die laufenden (unterjährigen) Verluste;" },
      { text: "– Die Zinsvorträge i.S. des § 4h Abs. 1 Satz 5 EStG (siehe hierzu § 8a Abs. 1 Satz 3 KStG);" },
      { text: "– Verlustvorträge i.S. des § 10 Abs. 3 Satz 5 AStG;" },
      { text: "– Verluste i.S. der §§ 2a, 15a und 15 Abs. 4 EStG." },
      { typ: "titel", text: "1.2.3 Auswirkungen auf die Gewerbesteuer" },
      { text: "Für gewerbesteuerliche Zwecke sieht § 10a Satz 10 GewStG die Anwendung des § 8c KStG auf die Gewerbeertragsermittlung der Verlustgesellschaft vor." },
      { text: "Gleiches gilt in Fällen einer Mitunternehmerschaft, soweit an dieser eine Kapitalgesellschaft unmittelbar beteiligt (Nr. 1) ist bzw. bei mehrstöckigen Mitunternehmerschaften auf den anderen Stufen eine Kapitalgesellschaft (Nr. 2) beteiligt ist. Deren Anteilsveräußerungen greifen damit auch auf den Gewerbeverlust der Personengesellschaft durch. Die nachfolgenden Grundsätze gelten daher – von wenigen Ausnahmen abgesehen – auch für die Ermittlung des Gewerbeertrags." },
      { typ: "titel", text: "1.2.4 Wegfall bzw. Änderung des § 8c Abs. 2 KStG" },
      { text: "§ 8c Abs. 2 KStG stellt klar, dass § 8c KStG auch in den Fällen einer Sanierung i.S. des § 3a EStG vorrangig anzuwenden ist. Nach § 3a EStG wird ein etwaiger Sanierungsgewinn, welcher sich aus dem Wegfall der Unternehmensschulden durch Erlass oder Verzicht ergeben würde, steuerfrei gestellt und führt nach § 3a Abs. 2 EStG zu einer privilegierten Verrechnung etwaiger Verlustvorträge mit dem steuerfreien Gewinn. Trotzdem führt der schädliche Anteilserwerb an der sanierten Gesellschaft zu einem Verlustuntergang i.S. des § 8c KStG, so dass es für diese Zwecke unerheblich ist, ob der im Zuge der Sanierung ausgesprochene Schuldenerlass vor oder nach dem schädlichen Anteilserwerb erfolgt. Die Neuregelung gilt für sämtliche Fälle, bei denen der Schuldenerlass nach dem 08.02.2017 ausgesprochen wurde. Hintergrund dafür ist, dass es für Zwecke des § 8c KStG eine eigene Sanierungsklausel gibt (siehe unter 1.2.5)." },
      { typ: "titel", text: "1.2.5.1 Rechtsfolgen der Sanierungsklausel" },
      { text: "§ 8c Abs. 1a KStG beinhaltet für sämtliche Erwerbe nach dem 31.12.2007 eine Sanierungsklausel, um den typisierenden Verlustuntergang in Fällen einer mit dem schädlichen Erwerb verbundenen Unternehmenssanierung zu vermeiden. Greift die Sanierungsklausel, wird dieser Erwerb komplett ausgeblendet und kann für nachfolgende Erwerbe auch nicht als Zählerwerb berücksichtigt werden. Der bisher von § 8c KStG betroffene Verlust bleibt danach unverändert bestehen und kann steuerlich genutzt werden." },
      { typ: "titel", text: "1.2.5.2.1 Sanierungsmaßnahme" },
      { text: "Grundvoraussetzung ist, dass der Erwerb u.a. mit dem Ziel der Unternehmenssanierung erfolgt sein muss. Der Erwerber muss daher objektiv die Absicht verfolgen, dass Unternehmen zu sanieren. Darunter versteht § 8c Abs. 1a Satz 2 KStG sämtliche Maßnahmen, die auf die Beseitigung einer bereits eingetretenen oder drohenden Zahlungsunfähigkeit oder Überschuldung ausgerichtet sind. Erfolgt der Erwerb daher bereits vor der Krise, kann die Sanierungsklausel nicht angewendet werden. (Die Form „dass Unternehmen zu sanieren“ steht so in der Quelle.)" },
      { text: "Die Sanierungsmaßnahmen sind von der Körperschaft nachzuweisen, z.B. durch Vorlage eines Sanierungsplanes oder Bezeichnung der konkret beabsichtigten Maßnahmen. Diese müssen objektiv geeignet sein, das Unternehmen aus der Krise zu führen und wieder ertragsfähig zu machen. Dies wären z.B. Maßnahmen zur Kostenreduzierung, Umstrukturierung oder Erschließung etwaiger Finanzquellen. Vorausgesetzt wird zudem, dass die Sanierung im sachlichen Zusammenhang mit dem Anteilserwerb erfolgt. Ob diese Vorgänge letztlich auch erfolgreich sind, um die Sanierung herbeizuführen, ist nicht entscheidungsrelevant." },
      { text: "In Fällen eines mittelbaren Erwerbs bezieht sich diese Prüfung getrennt auf jede miterworbene Gesellschaft, was aufgrund § 10a Satz 10 GewStG auch bei einer miterworbenen Personengesellschaft gilt. Der Erwerber muss daher für sämtliche Gesellschaften seine Sanierungsmaßnahmen darlegen. Im Falle einer Organschaft gilt der gesamte Organkreis immer als Einheit." },
      { typ: "titel", text: "1.2.5.2.2 Erhalt der wesentlichen Betriebsstrukturen" },
      { text: "Dieser Erwerb darf nicht dazu führen, dass das Unternehmen faktisch zerschlagen wird. Daher ist gesetzlich vorgeschrieben, dass die wesentlichen Betriebsstrukturen zwingend zu erhalten sind. Diese Voraussetzung ist gegeben, wenn gemäß § 8c Abs. 1a Satz 3 KStG eine der nachfolgenden Vorgaben erfüllt ist:" },
      { text: "– Die Körperschaft eine geschlossene Betriebsvereinbarung mit einer Arbeitsplatzregelung befolgt (Nr. 1), oder" },
      { text: "– Die maßgebliche Lohnsumme nicht unterschritten wird (Nr. 2), oder" },
      { text: "– Der Körperschaft innerhalb von 12 Monaten nach dem Beteiligungserwerb durch Einlagen Betriebsvermögen in einer gesetzlich bestimmten Mindesthöhe zugeführt werden (Nr. 3). Dabei muss aber beachtet werden, dass diese Einlagen nicht innerhalb eines zeitlichen Zusammenhangs wieder an den Einlegenden zurückfließen, weswegen § 8c Abs. 1a Satz 3 Nr. 3 Satz 5 KStG innerhalb eines Zeitraums von 3 Jahren eine Verrechnung mit Leistungen der Gesellschaft vorsieht." },
      { typ: "titel", text: "1.2.5.2.3 Weitere Einschränkungen" },
      { text: "Eine Sanierung ist dann ausgeschlossen, wenn die Körperschaft ihren Geschäftsbetrieb im Zeitpunkt des Erwerbs bereits im Wesentlichen eingestellt hat (§ 8c Abs. 1a Satz 3 KStG). Dadurch soll vermieden werden, dass durch faktische „Scheinsanierungen“ die Verluste einer inaktiven Gesellschaft gerettet werden können. Ebenfalls kann die Sanierungsklausel nicht angewendet werden, wenn bei der sanierten Gesellschaft innerhalb von 5 Jahren ein Branchenwechsel erfolgt. Sofern die Sanierungsklausel bisher angewendet worden ist, liegt darin ein rückwirkendes Ereignis i.S. des § 175 Abs. 1 Nr. 2 AO und führt zum Untergang der bisherigen Verluste." },
      { typ: "tabelle", spalten: ["Von § 8c KStG erfasster Posten", "Fundstelle"], zeilen: [
        ["Verlustvorträge, bei Organgesellschaften die vororganschaftlichen", "§ 10d Abs. 4 EStG"],
        ["fortführungsgebundener Verlustvortrag", "§ 8d KStG"],
        ["laufende (unterjährige) Verluste", "R 7.1 Abs. 1 Nr. 34 und 37 KStR"],
        ["Zinsvorträge", "§ 4h Abs. 1 Satz 5 EStG in Verbindung mit § 8a Abs. 1 Satz 3 KStG"],
        ["Verlustvorträge der Hinzurechnungsbesteuerung", "§ 10 Abs. 3 Satz 5 AStG"],
        ["Auslandsverluste, Verluste beschränkt haftender Gesellschafter und aus stillen Beteiligungen", "§§ 2a, 15a und 15 Abs. 4 EStG – abweichend dazu BFH vom 24.04.2024, IV R 27/21"],
      ] },
      { typ: "tabelle", spalten: ["Voraussetzung der Sanierungsklausel", "Inhalt", "Ausschlussgrund"], zeilen: [
        ["Sanierungsmaßnahme", "objektive Absicht, das Unternehmen zu sanieren; Beseitigung einer eingetretenen oder drohenden Zahlungsunfähigkeit oder Überschuldung", "Erwerb bereits vor der Krise"],
        ["Nachweis", "Sanierungsplan oder Bezeichnung der konkreten Maßnahmen; objektiv geeignet und im sachlichen Zusammenhang mit dem Erwerb", "der Erfolg der Sanierung ist dagegen unerheblich"],
        ["Erhalt der Betriebsstrukturen", "eine von drei Alternativen: Betriebsvereinbarung mit Arbeitsplatzregelung, Einhaltung der Lohnsumme oder Zuführung von Betriebsvermögen binnen 12 Monaten", "Rückfluss der Einlagen – Verrechnung mit Leistungen der Gesellschaft binnen 3 Jahren"],
        ["aktiver Geschäftsbetrieb", "der Betrieb darf im Erwerbszeitpunkt nicht im Wesentlichen eingestellt sein", "„Scheinsanierung“ einer inaktiven Gesellschaft"],
        ["kein Branchenwechsel", "innerhalb von 5 Jahren nach der Sanierung", "rückwirkendes Ereignis nach § 175 Abs. 1 Nr. 2 AO – die Verluste gehen nachträglich unter"],
      ] },
      { text: "Anmerkung zur Reichweite der Aufzählung (eigene Ergänzung): Bemerkenswert ist, dass § 8c KStG nicht nur Verlustvorträge erfasst, sondern auch den **Zinsvortrag** nach § 4h Abs. 1 Satz 5 EStG – eine Verbindung zwischen dem ersten und dem dritten Kapitel dieses Skripts, die in der Klausur leicht übersehen wird. Wer einen schädlichen Anteilserwerb prüft, muss also **beide** Vortragsgrößen betrachten. Der ausdrückliche Hinweis auf den **fortführungsgebundenen** Verlustvortrag ist ebenfalls wichtig: Auch er geht bei einem erneuten schädlichen Erwerb unter, so dass § 8d KStG keine dauerhafte Immunisierung bewirkt. Und dass auch die **laufenden, unterjährigen** Verluste erfasst werden, ist die Grundlage für die ganze Berechnungstechnik des Abschnitts 1.6.2.2." },
      { text: "Anmerkung zum Vorrang vor § 3a EStG (eigene Ergänzung): Abschnitt 1.2.4 beschreibt eine für den Steuerpflichtigen harte Rangfolge. Die Steuerfreiheit des Sanierungsgewinns nach § 3a EStG **rettet die Verluste nicht** – der schädliche Anteilserwerb lässt sie gleichwohl untergehen, und zwar gleichgültig, ob der Schuldenerlass vor oder nach dem Erwerb ausgesprochen wurde. Die Begründung der Quelle ist systematisch überzeugend: Für § 8c KStG gibt es mit § 8c Abs. 1a KStG eine **eigene** Sanierungsklausel, und deren Voraussetzungen sollen nicht über den Umweg des § 3a EStG umgangen werden können. Wer saniert, muss also die Anforderungen des § 8c Abs. 1a KStG erfüllen, nicht nur die des § 3a EStG." },
      { text: "Anmerkung zur Ausblendung als Zählerwerb (eigene Ergänzung): Die Rechtsfolge der Sanierungsklausel geht weiter, als man erwartet, und ist deshalb hervorzuheben. Der Erwerb wird **komplett ausgeblendet** – er zählt nicht nur selbst nicht, sondern kann auch für **spätere** Erwerbe nicht als Zählerwerb berücksichtigt werden. Damit unterscheidet sich die Sanierungsklausel grundlegend von der aufgehobenen Quotenstufe des Abschnitts 1.1.1, bei der die Erwerbe gerade als Zählerwerbe bestehen bleiben. Für die Fünfjahresbetrachtung des Abschnitts 1.4.6 bedeutet das: Ein sanierungsbedingter Erwerb fällt vollständig aus der Rechnung heraus." },
      { text: "Anmerkung zur Struktur der Voraussetzungen (eigene Ergänzung): Die Sanierungsklausel verlangt **kumulativ** dreierlei und lässt nur an einer Stelle eine Wahl. Die Sanierungsabsicht und der Erhalt der Betriebsstrukturen müssen **beide** vorliegen; innerhalb des zweiten Merkmals genügt dagegen **eine** der drei Alternativen. Dazu treten zwei **negative** Voraussetzungen – kein bereits eingestellter Geschäftsbetrieb und kein Branchenwechsel binnen fünf Jahren. Besonders unangenehm ist die letzte: Sie wirkt **rückwirkend** über § 175 Abs. 1 Nr. 2 AO, so dass die bereits gewährte Verschonung Jahre später wieder entfällt. Wer die Klausel nutzt, bindet sich also fünf Jahre an die Branche." },
      { text: "Anmerkung zur Gewerbesteuer (eigene Ergänzung): Der Verweis des § 10a Satz 10 GewStG reicht weiter als der Wortlaut des § 8c KStG, und das ist der eigentliche Inhalt des Abschnitts 1.2.3. Erfasst werden nicht nur Körperschaften, sondern auch **Mitunternehmerschaften**, an denen unmittelbar oder über mehrere Stufen eine Kapitalgesellschaft beteiligt ist. Damit schlägt die Anteilsveräußerung auf der Gesellschafterebene auf den **Gewerbeverlust der Personengesellschaft** durch – ein Ergebnis, das aus dem Körperschaftsteuerrecht allein nicht folgt und in gemischten Strukturen leicht übersehen wird." },
    ],
  },
  {
    id: "kst-t5-3",
    kapitel: "3",
    abschnittNr: "1.3",
    title: "1.3 Erwerberkreis – wann mehrere Erwerber zu einem werden",
    thema: "Nahe stehende Personen werden zu einem Erwerberkreis zusammengefasst. Die Personengesellschaft gilt dabei selbst als ein Erwerber, die vermögensverwaltende dagegen ist transparent – und gleichgerichtete Interessen verlangen dokumentierte Absprachen",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil V (Hamacher), Abschnitte 1.3 bis 1.3.2 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8c Abs. 1 Satz 1 KStG",
      "§ 8c Abs. 1 Satz 2 KStG",
      "§ 8c Abs. 1 Satz 4 KStG",
      "§ 39 Abs. 2 Nr. 2 AO",
      "§ 6 Abs. 5 Satz 3 EStG",
      "§ 15 Abs. 3 Nr. 2 EStG",
      "§ 705 BGB",
      "BMF vom 28.11.2017, Tz. 11, 25, 26, 27 und 28",
      "BT-Drucksache 16/5491, Seite 53",
      "BFH vom 22.11.2016, BStBl. II 2017, 921",
    ],
    themen: ["Erwerberkreis", "nahe stehende Personen", "Personengesellschaft", "Bruchteilsbetrachtung", "gleichgerichtete Interessen", "Gesamtplan", "Absprachen"],
    bloecke: [
      { typ: "titel", text: "1.3.1 Person und Rechtsform des Erwerbers" },
      { text: "Die für § 8c KStG maßgebliche Quote ermittelt sich aus sämtlichen Erwerben eines Erwerbers bzw. eines Erwerberkreises, d.h. diese kann sich auch aus dem zusammengefassten Erwerb mehrerer Personen ergeben. Dafür ist entscheidend, welchen Anteil am Nennkapital der erworbene Anteil repräsentiert. Zu beachten ist, dass einander nahe stehende Personen zu einem Erwerberkreis zusammengefasst werden." },
      { text: "Beispiel: An der A-GmbH ist der Alleingesellschafter A beteiligt. In 2025 erwirbt C den hälftigen Anteil (= 50 % des Stammkapitals). Gleichzeitig erwirbt die Ehefrau des C die restlichen Anteile (= 50 % des Stammkapitals)." },
      { text: "Lösung: Erwerberkreis sind in diesem Fall C und dessen als nahe stehende Person anzusehende Ehefrau. Diesem Erwerberkreis wird danach eine Erwerbsquote von 100 % des Stammkapitals an der A-GmbH zugerechnet, so dass ein Anwendungsfall des § 8c Abs. 1 Satz 1 KStG gegeben ist." },
      { text: "Hinsichtlich der Rechtsform des Erwerbers gelten dabei grundsätzlich keine Besonderheiten. Lediglich bei einer Personengesellschaft ist zu beachten, dass diese für Zwecke des Erwerberkreises i.S. des § 8c KStG steuerlich nicht als transparent behandelt wird, d.h. deren unmittelbar erworbene Anteile werden nicht den Mitunternehmern zugerechnet. Eine Zusammenrechnung mit anderen Erwerbern kann sich dann nur in Fällen eines Erwerberkreises von nahe stehenden Personen oder nach den Grundsätzen des § 8c Abs. 1 Satz 2 KStG ergeben. Ein schädlicher Erwerb i.S. des § 8c KStG ist auch gegeben, wenn die bisherigen Anteilseigner ihre Anteile gemeinsam an ihre Personengesellschaft veräußern. Gleiches gilt umgekehrt, wenn die Personengesellschaft ihre bisher im Gesamthandsvermögen gehaltenen Anteile an ihre Gesellschafter veräußert bzw. diese nach § 6 Abs. 5 Satz 3 EStG ins Sonderbetriebsvermögen übertragen werden." },
      { text: "Anders ist dies hingegen bei einer vermögensverwaltenden Personengesellschaft, weil die von ihr gehaltenen Anteile bereits nach der Bruchteilsbetrachtung i.S. des § 39 Abs. 2 Nr. 2 AO unmittelbar ihren Gesellschaftern zugerechnet werden. In diesen Fällen dürften die Gesellschafter aber einen Erwerberkreis i.S. des § 8c Abs. 1 Satz 2 KStG bilden." },
      { text: "Beispiel: An der A-GmbH sind die Gesellschafter A und B zu jeweils 50 % beteiligt. In 2025 erwirbt die vermögensverwaltende C-GbR (Anteil X und Y jeweils 50 %) sämtliche Anteile an der A-GmbH." },
      { text: "Lösung: Zivilrechtlich erwirbt die C-GbR den Anteil an der A-GmbH. Für Zwecke des § 8c KStG wird die vermögensverwaltende Gesellschaft aber ausgeblendet, so dass der erworbene Anteil unmittelbar den Gesellschaftern zugerechnet werden (§ 39 Abs. 2 Nr. 2 AO). Weil diese wohl als einander nahe stehende Person anzusehen sind, erfolgt die Zusammenrechnung zu einem Erwerberkreis und damit ein schädlicher Anteilseigner von 100 %. Danach ergibt sich ein Anwendungsfall des § 8c Abs. 1 Satz 1 KStG. (Die Formen „der erworbene Anteil unmittelbar den Gesellschaftern zugerechnet werden“ und „ein schädlicher Anteilseigner von 100 %“ stehen so in der Quelle; gemeint ist ersichtlich ein schädlicher Anteils*erwerb*.)" },
      { text: "Beispiel: An der A-GmbH sind die Gesellschafter A und B zu jeweils 50 % beteiligt. In 2025 veräußern A und B ihre Anteile an die A+B GmbH & Co KG (gewerblich geprägt i.S. des § 15 Abs. 3 Nr. 2 EStG), an welcher A und B ebenfalls wieder zu jeweils 50 % beteiligt sind." },
      { text: "Lösung: Die A+B GmbH & Co KG gilt für Zwecke des § 8c KStG bereits als ein Erwerber, so dass durch den Erwerb des 100%igen Anteils ein Anwendungsfall des § 8c Abs. 1 Satz 1 KStG gegeben ist. Dass an dem Erwerber die bisherigen Anteilseigner der A-GmbH beteiligt sind, ist hierfür unerheblich. Denn es ist auf den zivilrechtlichen Anteilserwerb durch die Personengesellschaft abzustellen. Ein Anwendungsfall der Konzernklausel i.S. des § 8c Abs. 1 Satz 4 KStG ist nicht gegeben." },
      { typ: "titel", text: "1.3.2 Zusammenrechnung bei gleichgerichteten Interessen" },
      { text: "§ 8c Abs. 1 Satz 2 KStG führt ebenfalls zu einem Erwerberkreis, wenn die verschiedenen Erwerber über gleichgerichtete Interessen verfügen, z.B. bei einer einheitlichen Willensbildung, die sich im Rahmen der gemeinschaftlichen Beherrschung (§ 705 BGB) ergeben kann. Die Regelung zielt auf eine gesamtplanerisch handelnde Erwerbergruppe ab, bei welcher es gezielt darum geht, die Verluste der Gesellschaft zu verwerten. Auf die gemeinsame Verlustnutzung kommt es aber nicht an. Die Finanzverwaltung legt diesen Tatbestand weit aus, was auch der Verweis auf die bei beherrschenden Gesellschaftern bestehenden gleichgerichteten Interessen dokumentiert." },
      { text: "Der BFH hat zwischenzeitlich diesen unbestimmten Begriff präzisiert und vertritt diesbezüglich eine gegenüber der Finanzverwaltung engere Rechtsauffassung, wonach die Indizien, die zu gleichgerichteten Interessen führen können, spätestens im Zeitpunkt des schädlichen Anteilserwerbs konkretisiert sein und in Form von Abreden eindeutig dokumentiert vorliegen müssen. Insbesondere soll hierfür lediglich die abstrakte „Möglichkeit der nachfolgenden Beherrschung“ der Verlustgesellschaft nicht ausreichend sein. Danach können gleichgerichtete Interessen insbesondere in den Fällen angenommen werden, in denen die Personengruppe aufgrund eindeutiger Absprachen beim Anteilserwerb zusammenwirkt und anschließend aufgrund dieser Absprachen die Gesellschaft gemeinsam beherrscht. Damit wird die Qualität der vorherigen Absprachen eindeutig in den Vordergrund gestellt. Die Finanzverwaltung hat zwischenzeitlich ihre Aussage in Tz. 28 des BMF-Schreibens ergänzt und nimmt gleichgerichtete Interessen zumindest dann nicht mehr an, wenn sich die Absprachen zwischen den Beteiligten nur auf den Anteilserwerb beschränken." },
      { text: "Beispiel: An der A-GmbH ist der Gesellschafter A zu 100 % beteiligt. In 2025 erwirbt C den hälftigen Anteil des A (= 50 % des Stammkapitals). Gleichzeitig erwirbt D (kein persönlicher Bezug zu C) einen weiteren Anteil des A (= 10 % des Stammkapitals). Aufgrund vorheriger Abmachungen werden C und D alleinige Gesellschafter-Geschäftsführer der A-GmbH." },
      { text: "Lösung: Dem Grunde nach würden zwei getrennte Erwerberkreise vorliegen. Da aber aufgrund der gemeinsamen Gesellschafter-Geschäftsführerposition ein Interessengleichklang zwischen beiden Gesellschaftern angenommen werden kann und aufgrund eindeutiger Absprachen hinreichend nachweisbar ist, ist unter Berücksichtigung des § 8c Abs. 1 Satz 2 KStG eine Erwerbergruppe und somit ein kombinierter Erwerb von 60 % anzunehmen. Demnach ist ein Anwendungsfall des § 8c Abs. 1 Satz 1 KStG gegeben." },
      { typ: "tabelle", spalten: ["Erwerber", "Behandlung für § 8c KStG", "Folge"], zeilen: [
        ["einander nahe stehende Personen", "werden zu einem Erwerberkreis zusammengefasst", "die Erwerbsquoten werden addiert"],
        ["gewerbliche oder gewerblich geprägte Personengesellschaft", "gilt selbst als ein Erwerber – nicht transparent", "die Anteile werden den Mitunternehmern nicht zugerechnet; eine Zusammenrechnung nur über nahe stehende Personen oder § 8c Abs. 1 Satz 2 KStG"],
        ["vermögensverwaltende Personengesellschaft", "transparent nach der Bruchteilsbetrachtung des § 39 Abs. 2 Nr. 2 AO", "die Anteile werden unmittelbar den Gesellschaftern zugerechnet, die ihrerseits einen Erwerberkreis bilden dürften"],
        ["Erwerber mit gleichgerichteten Interessen", "Erwerberkreis nach § 8c Abs. 1 Satz 2 KStG", "die Erwerbsquoten werden addiert"],
      ] },
      { typ: "tabelle", spalten: ["Vorgang mit Beteiligung einer Personengesellschaft", "schädlich?"], zeilen: [
        ["die bisherigen Anteilseigner veräußern ihre Anteile gemeinsam an ihre eigene Personengesellschaft", "ja"],
        ["die Personengesellschaft veräußert die im Gesamthandsvermögen gehaltenen Anteile an ihre Gesellschafter", "ja"],
        ["Übertragung dieser Anteile nach § 6 Abs. 5 Satz 3 EStG ins Sonderbetriebsvermögen", "ja"],
      ] },
      { typ: "tabelle", spalten: ["Gleichgerichtete Interessen", "Finanzverwaltung", "BFH vom 22.11.2016"], zeilen: [
        ["Auslegung", "weit – Verweis auf die bei beherrschenden Gesellschaftern bestehenden gleichgerichteten Interessen", "enger"],
        ["Anforderungen an die Indizien", "ursprünglich gering", "spätestens im Zeitpunkt des schädlichen Erwerbs konkretisiert und in Form von Abreden eindeutig dokumentiert"],
        ["abstrakte Möglichkeit der Beherrschung", "genügte", "genügt nicht"],
        ["Absprachen nur zum Anteilserwerb", "nach der Ergänzung der Tz. 28 keine gleichgerichteten Interessen mehr", "reichen nicht aus"],
        ["gemeinsame Verlustnutzung", "nicht erforderlich", "nicht erforderlich"],
      ] },
      { text: "Rechenproben (eigene Ergänzung): Die Beispiele gehen auf. Ehegattenfall: 50 % + 50 % = 100 %, also mehr als 50 % und damit vollständiger Verlustuntergang. Fall der Geschäftsführer: 50 % + 10 % = 60 %, ebenfalls über der Schwelle – ohne die Zusammenrechnung bliebe es bei zwei unschädlichen Erwerben von 50 % und 10 %. Der Fall zeigt damit besonders deutlich, wie viel an der Erwerberkreisbildung hängt: Sie entscheidet hier allein über den vollständigen Untergang." },
      { text: "Anmerkung zum Gegensatz der beiden Personengesellschaftsfälle (eigene Ergänzung): Die beiden Beispiele enden gleich – § 8c Abs. 1 Satz 1 KStG greift –, aber über **entgegengesetzte** Wege, und genau darin liegt ihr Lehrwert. Die **vermögensverwaltende** GbR wird **ausgeblendet**, die Anteile werden ihren Gesellschaftern zugerechnet, und erst deren Zusammenfassung zu einem Erwerberkreis führt zur Quote von 100 %. Die **gewerblich geprägte** GmbH & Co. KG dagegen ist **selbst** der Erwerber; auf ihre Gesellschafter kommt es gar nicht an. Wer die beiden Wege verwechselt, kommt in Fällen mit unterschiedlichen Beteiligungsquoten zu falschen Ergebnissen – nur im Beispiel der Quelle führen beide zufällig zum selben Wert." },
      { text: "Anmerkung zur Nichttransparenz und ihrer Kehrseite (eigene Ergänzung): Dass die Personengesellschaft für § 8c KStG **nicht** transparent ist, widerspricht dem gewohnten Denken des Mitunternehmerrechts und hat eine unangenehme Kehrseite, die die Quelle ausdrücklich benennt: Der Vorgang ist in **beide** Richtungen schädlich. Veräußern die bisherigen Anteilseigner an ihre eigene Personengesellschaft, liegt ein Erwerb vor; veräußert die Personengesellschaft an ihre eigenen Gesellschafter zurück, ebenfalls. Sogar die **unentgeltliche** Übertragung ins Sonderbetriebsvermögen nach § 6 Abs. 5 Satz 3 EStG – ein Vorgang, der ertragsteuerlich gerade keine Veräußerung ist – schadet. Wirtschaftlich ändert sich in all diesen Fällen nichts an den Beteiligungsverhältnissen, steuerlich geht der Verlust gleichwohl unter." },
      { text: "Anmerkung zur Konzernklausel (eigene Ergänzung): Der Schlusssatz des zweiten Beispiels ist wichtig und wird leicht überlesen: Die **Konzernklausel** des § 8c Abs. 1 Satz 4 KStG greift **nicht**, obwohl an Erwerberin und Verlustgesellschaft dieselben Personen in denselben Quoten beteiligt sind. Wirtschaftlich handelt es sich um eine reine Umhängung, und trotzdem geht der Verlust unter. Die Quelle begründet das mit dem Abstellen auf den **zivilrechtlichen** Anteilserwerb durch die Personengesellschaft. Weshalb die Konzernklausel hier versagt, wird erst der Abschnitt 1.4.5 zeigen – ihre Fallgruppen setzen eine **Person** an der Spitze voraus, die die Quelle dort näher bestimmt." },
      { text: "Anmerkung zur Entwicklung bei den gleichgerichteten Interessen (eigene Ergänzung): Der Abschnitt dokumentiert eine Bewegung **zugunsten** des Steuerpflichtigen, die in zwei Schritten verlief. Zuerst hat der BFH 2016 verlangt, dass die Indizien spätestens im Erwerbszeitpunkt **konkretisiert** und durch **Abreden dokumentiert** sind, und die bloße abstrakte Möglichkeit einer späteren Beherrschung ausdrücklich verworfen. Dann hat die Verwaltung ihre Tz. 28 ergänzt und nimmt gleichgerichtete Interessen jedenfalls dann nicht mehr an, wenn sich die Absprachen **nur auf den Anteilserwerb** beschränken. Für die Klausur ergibt sich daraus eine klare Prüfungsfrage: Gibt es Absprachen, die über den Erwerb **hinausreichen** und die spätere gemeinsame Beherrschung tragen? Im Beispiel ist das die vorab vereinbarte gemeinsame Geschäftsführerstellung." },
      { text: "Anmerkung zur fehlenden Verlustnutzungsabsicht (eigene Ergänzung): Bemerkenswert ist der Satz, auf die gemeinsame Verlustnutzung komme es **nicht** an, obwohl die Gesetzesbegründung die Norm gerade auf eine gesamtplanerisch zur Verlustverwertung handelnde Gruppe zuschneidet. Beides zusammen bedeutet: Die Verlustnutzung ist der **Anlass** der Regelung, aber kein **Tatbestandsmerkmal**. Wer im Sachverhalt nachweist, dass die Erwerber die Verluste gar nicht nutzen wollten, hat damit nichts gewonnen – es bleibt bei der typisierenden Betrachtung, die das gesamte Kapitel prägt." },
    ],
  },
  {
    id: "kst-t5-4",
    kapitel: "4",
    abschnittNr: "1.4.1",
    title: "1.4.1 Anteilserwerb, Grundfall – jedes Entgelt schadet",
    thema: "Erfasst ist jede Übertragung von Gesellschaftsrechten, auch zwischen bisherigen Anteilseignern. Maßgeblich ist der Übergang des wirtschaftlichen Eigentums; der unentgeltliche Erwerb ist nur unter Angehörigen und nur bei vollständiger Unentgeltlichkeit unschädlich",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil V (Hamacher), Abschnitt 1.4.1 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8c Abs. 1 Satz 1 KStG",
      "§ 2 UmwStG",
      "§ 15 AO",
      "BMF vom 28.11.2017, Tz. 4, 5, 6, 13 und 15",
    ],
    themen: ["Anteilserwerb", "Gesellschaftsrechte", "wirtschaftliches Eigentum", "Umwandlung", "unentgeltlicher Erwerb", "Angehörige", "Trennungstheorie", "nämlicher Anteil"],
    bloecke: [
      { text: "Von der Grundregelung des § 8c KStG wird zunächst der herkömmliche Anteilserwerb erfasst. Entscheidend ist, dass es dadurch zu einer Übertragung von Gesellschaftsrechten kommt, d.h. in aller Regel führt dieser Vorgang beim Erwerber zu einer Erhöhung seiner Nominalbeteiligung, Stimmrechten oder Gewinnbezugsrechten. Als Erwerb in diesem Sinne zählt aber auch der Erwerb einer stimmrechtslosen Beteiligung. Unter diesem Gesichtspunkt sind daher auch Anteilserwerbe zwischen den bisherigen Anteilseignern zu beachten, d.h. es muss daher gerade nicht zu einem Eintritt eines neuen Anteilseigners kommen." },
      { text: "Der Anteilserwerb gilt für Zwecke des § 8c KStG mit Übergang des wirtschaftlichen Eigentums als erfolgt. Selbiges gilt, wenn der Anteil an der Verlustgesellschaft im Rahmen eines Umwandlungsvorganges (z.B. Verschmelzung des Anteilseigners der Verlustgesellschaft) übertragen wird. Der (rückwirkende) steuerliche Übertragungsstichtag i.S. des § 2 UmwStG gilt für diese Betrachtung nicht. Der Tag des Anteilserwerbs hat Bedeutung für den Verlustuntergang, weil der Anteilserwerb auch unterjährig erfolgen kann und dafür eine andere Zusammensetzung des ungenutzten Verlustes maßgeblich ist (siehe unter 1.6.2)." },
      { text: "Berücksichtigt wird im Rahmen des § 8c KStG dabei sowohl der entgeltliche als auch der unentgeltliche Erwerb. Unschädlich ist bei einer natürlichen Person aber wiederum nur der unentgeltliche Erwerb im Rahmen des Erbfalls bzw. der Erbauseinandersetzung oder der unentgeltlichen vorweggenommenen Erbfolge, wenn es sich um Angehörige i.S. des § 15 AO handelt. Wird ein Entgelt geleistet (z.B. Gleichstellungsgelder), ist der Vorgang für Zwecke des § 8c KStG wiederum schädlich. Dies gilt auch dann, wenn der Vorgang nicht voll entgeltlich ist, d.h. eine Aufteilung nach den Grundsätzen der Trennungstheorie ist nicht vorzunehmen." },
      { text: "Beispiel: An der A-GmbH ist A zu 100 % beteiligt. Mit Wirkung zum 01.01.2025 schenkt er seinen Anteil seinem Sohn S." },
      { text: "Lösung: Der Vorgang ist für Zwecke des § 8c KStG unschädlich, weil die unentgeltliche Anteilsübertragung zwischen Angehörigen i.S. des § 15 AO nicht als schädlicher Erwerb angesehen wird. Dabei ist aber zu beachten, dass der Vorgang insgesamt unentgeltlich vorgenommen werden muss, so dass jegliches Entgelt auch unabhängig von dessen Höhe schädlich ist und damit auch ein Anwendungsfall des § 8c KStG vorliegt." },
      { text: "Ist der unentgeltliche Erwerber kein Angehöriger i.S. des § 15 AO, kommt § 8c Abs. 1 Satz 1 KStG auch unabhängig von der unentgeltlichen Übertragung zur Anwendung." },
      { text: "Schädlich ist unter diesem Gesichtspunkt auch die Weiterübertragung eines Anteils, dessen Erwerb sich bereits im Rahmen des § 8c Abs. 1 Satz 1 KStG bei einem Erwerber ausgewirkt hat (sog. Erwerb des nämlichen Anteils). Dies ist zutreffend, weil sich die Frage nach dem schädlichen Erwerb i.S. des § 8c KStG bei jedem Erwerberkreis neu stellt." },
      { typ: "tabelle", spalten: ["Vorgang", "schädlich?", "Begründung"], zeilen: [
        ["Erwerb einer stimmrechtslosen Beteiligung", "ja", "auch darin liegt eine Übertragung von Gesellschaftsrechten"],
        ["Anteilserwerb zwischen bisherigen Anteilseignern", "ja", "der Eintritt eines neuen Anteilseigners ist nicht erforderlich"],
        ["Übertragung im Rahmen einer Umwandlung", "ja", "maßgeblich ist der Übergang des wirtschaftlichen Eigentums, nicht der rückwirkende Stichtag des § 2 UmwStG"],
        ["unentgeltlicher Erwerb durch Angehörige i. S. des § 15 AO im Erbfall, bei der Erbauseinandersetzung oder der vorweggenommenen Erbfolge", "nein", "ausdrückliche Ausnahme"],
        ["derselbe Vorgang gegen ein Entgelt, etwa Gleichstellungsgelder", "ja", "jedes Entgelt schadet, auch ein teilentgeltlicher Vorgang – keine Aufteilung nach der Trennungstheorie"],
        ["unentgeltlicher Erwerb durch einen Nichtangehörigen", "ja", "die Ausnahme gilt nur für Angehörige"],
        ["Weiterübertragung eines bereits einmal schädlich erworbenen Anteils", "ja", "Erwerb des nämlichen Anteils – die Frage stellt sich bei jedem Erwerberkreis neu"],
      ] },
      { text: "Anmerkung zur Reichweite des Erwerbsbegriffs (eigene Ergänzung): Der Abschnitt ist deshalb so wichtig, weil er fast jede denkbare Bewegung von Anteilen erfasst. Weder muss ein **neuer** Gesellschafter hinzutreten – auch die Verschiebung zwischen den bisherigen genügt –, noch muss der Anteil **stimmberechtigt** sein. Damit ist der Erwerbsbegriff deutlich weiter als der Zweck der Norm, der auf den Mantelkauf durch einen neuen Mehrheitsgesellschafter zielt. Wer in der Klausur prüft, sollte deshalb zuerst schlicht feststellen, **wer nach dem Vorgang wie viel hält**, und erst dann fragen, ob eine der Ausnahmen greift." },
      { text: "Anmerkung zur Unbeachtlichkeit der umwandlungssteuerlichen Rückwirkung (eigene Ergänzung): Der Hinweis, der rückwirkende Übertragungsstichtag des § 2 UmwStG gelte hier **nicht**, ist eine typische Klausurfalle. Für die Umwandlung selbst wird bis zu acht Monate zurückgerechnet, für § 8c KStG dagegen zählt der tatsächliche Übergang des **wirtschaftlichen Eigentums**. Beide Zeitpunkte können also in verschiedene Wirtschaftsjahre fallen – und weil der Tag des Erwerbs nach Abschnitt 1.6.2 darüber entscheidet, welcher Teil des Verlustes untergeht, wirkt sich der Unterschied unmittelbar auf die Zahlen aus." },
      { text: "Anmerkung zum Ausschluss der Trennungstheorie (eigene Ergänzung): Die Aussage, dass **jedes** Entgelt schadet und eine Aufteilung nach der Trennungstheorie **nicht** vorzunehmen ist, gehört zu den härtesten Regeln des Abschnitts. Ertragsteuerlich wäre eine teilentgeltliche Übertragung in einen entgeltlichen und einen unentgeltlichen Teil zu zerlegen; hier gilt das nicht. Ein symbolisches Gleichstellungsgeld an ein Geschwisterkind macht die gesamte Übertragung schädlich und lässt den Verlust vollständig untergehen. Die Quelle betont das ausdrücklich mit der Wendung „unabhängig von dessen Höhe“ – bei der Gestaltung einer vorweggenommenen Erbfolge ist das der entscheidende Punkt." },
      { text: "Anmerkung zum nämlichen Anteil (eigene Ergänzung): Dass die Weiterübertragung eines bereits einmal schädlich erworbenen Anteils **erneut** schädlich ist, klingt nach einer Doppelbelastung, ist aber folgerichtig: Die Prüfung erfolgt **erwerberbezogen**, nicht anteilsbezogen. Für den zweiten Erwerber ist der Anteil neu, und bei ihm stellt sich die Frage nach dem Mantelkauf unabhängig davon, was beim ersten geschehen ist. Praktisch bedeutet das, dass ein Anteil mehrfach hintereinander Verluste vernichten kann – allerdings nur, soweit nach dem ersten Untergang überhaupt noch neue Verluste entstanden sind." },
    ],
  },
];

export default kstTeil5;
