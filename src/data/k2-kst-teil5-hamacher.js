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
   Wegfall des § 8c Abs. 2 KStG und der Sanierungsklausel) übernommen. Es
   folgen der Erwerberkreis (1.3), der Anteilserwerb (1.4), die
   Verschonungsgrenze (1.5), die Verlustkürzung (1.6), die Organschaftsfälle
   (1.7) sowie die Kapitel 2 bis 4; der Campus weist den Stand aus.

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
];

export default kstTeil5;
