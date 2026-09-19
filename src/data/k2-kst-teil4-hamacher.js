/* KSt Teil IV – Verdeckte Gewinnausschüttung i. S. des § 8 Abs. 3 Satz 2 KStG,
   Hamacher, 21. Auflage, Stand Juli 2025.

   Wortlautgetreue Übernahme des Lehrgangsskripts „Körperschaftsteuer, Teil IV:
   Verdeckte Gewinnausschüttung i.S. des § 8 Abs. 3 Satz 2 KStG" aus den
   Lehrgangsunterlagen (87 Seiten). Das Skript hat sechs Kapitel:
   1 Tatbestandsmerkmale, 2 Besonderheiten beim beherrschenden Gesellschafter,
   3 Bewertung der verdeckten Gewinnausschüttung, 4 Auswirkungen der verdeckten
   Gewinnausschüttung, 5 verdeckte Gewinnausschüttungen in Dreiecksfällen und
   6 Pensionszusage als verdeckte Gewinnausschüttung. Gegliedert wird hier nach
   den Abschnitten der Quelle; jeder Abschnitt steht als eigener Eintrag.

   STAND DER ÜBERNAHME: Aus Kapitel 1 sind die Abschnitte 1.1 (Definition),
   1.2 (Tatbestandsmerkmale), 1.3 (Fallgruppen), 1.4 (Veranlassung durch das
   Gesellschaftsverhältnis) und 1.5 (Auswirkung auf den Gewinn) übernommen –
   letzterer einschließlich der Sonderfälle zum Erwerb eines
   aktivierungspflichtigen Wirtschaftsguts (1.5.2.1) und zum Verkauf einer
   Beteiligung (1.5.2.2). Es folgen die Schadensersatzansprüche (1.5.2.3) und
   die übrigen Abschnitte des Kapitels 1 sowie die Kapitel 2 bis 6; der Campus
   weist den Stand aus.

   HINWEIS ZUM RECHTSSTAND: Dieses Skript trägt den Stand Juli 2025.

   HINWEIS ZUR QUELLE: Der Text ist unmittelbar aus der PDF-Datei extrahiert
   (pypdf, 87 Seiten), weil die Textausgabe des Drive-Readers bei umfangreichen
   PDF-Dateien ohne Fehlermeldung abbrechen kann.

   Die Fußnoten der Quelle sind nicht als eigene Blöcke übernommen; die
   Fundstellen, auf die sie verweisen, stehen im Feld `normen` des jeweiligen
   Abschnitts. Die im PDF durch den Blocksatz entstandenen Trennstriche
   ("Gewinnaus- schüttung") sind zusammengeführt.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen. */

const VERFASSER = "Hamacher";
const RECHTSSTAND = "Stand 07/2025";

export const kstTeil4Quelle = {
  reihe: "Körperschaftsteuer · Teil IV: Verdeckte Gewinnausschüttung (§ 8 Abs. 3 Satz 2 KStG) · Hamacher",
  stand: "Stand 07/2025 (21. Auflage)",
  verfasser: "Hamacher",
  didaktik: [
    "Wortlautgetreue Übernahme des Lehrgangsskripts; eigene Ergänzungen sind durchgehend als solche gekennzeichnet.",
    "Jeder Abschnitt der Quelle steht als eigener Eintrag; die Nummerierung folgt dem Inhaltsverzeichnis des Skripts.",
    "Sämtliche Zahlen der Beispiele sind unabhängig nachgerechnet; Abweichungen und Eigenheiten der Quelle sind mit „(so in der Quelle)“ gekennzeichnet.",
  ],
};

export const kstTeil4 = [
  {
    id: "kst-t4-1",
    kapitel: "1",
    abschnittNr: "1.1 und 1.2",
    title: "1.1 Definition der verdeckten Gewinnausschüttung · 1.2 Die fünf Tatbestandsmerkmale",
    thema: "Die vGA ist eine Vorteilszuwendung außerhalb der offenen Gewinnverwendung. Korrigiert wird sie ausschließlich außerhalb der Steuerbilanz – und die entscheidende Vorfrage lautet immer: Wer erzielt den Vorteil?",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil IV (Hamacher), Abschnitte 1.1 und 1.2 · Stand 07/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8 Abs. 3 Satz 1 und Satz 2 KStG",
      "§ 20 Abs. 1 Nr. 1 EStG",
      "R 8.5 Abs. 1 KStR",
      "H 8.5 KStH „Zuflusseignung/Vorteilsgeneigtheit“",
      "BFH vom 06.07.2000, BStBl. II 2002, 490",
      "BMF vom 28.05.2002, BStBl. I 2002, 603",
    ],
    themen: ["Definition", "Abgrenzung zur verdeckten Einlage", "Außerbilanzielle Korrektur", "Fünf Tatbestandsmerkmale", "Vorteilsgeneigtheit"],
    bloecke: [
      { text: "Als verdeckte Gewinnausschüttung (vGA) wird aus ertragsteuerlicher Sicht eine (Vorteils-)Zuwendung der Gesellschaft an den Anteilseigner oder an eine diesem nahe stehende Person bezeichnet, die außerhalb einer regulären und offen beschlossenen Gewinnverwendung erfolgt. Dadurch erleidet die Gesellschaft immer einen Vermögensnachteil. Das Gegenteil zur verdeckten Gewinnausschüttung ist damit die „offene Gewinnausschüttung“, welche erkennbar durch die Gesellschafterversammlung beschlossen wird und somit „offen“ erfolgt. Weil die offene Gewinnausschüttung als Tatbestand der Einkommensverwendung das Einkommen gemäß § 8 Abs. 3 Satz 1 KStG nicht beeinflussen kann, gilt selbiges somit auch für die verdeckte Gewinnausschüttung." },
      { text: "Tritt bei der Gesellschaft dadurch eine Gewinnminderung ein, muss diese bei der Einkommensermittlung wieder beseitigt werden. Hierfür ist § 8 Abs. 3 Satz 2 KStG die zentrale Einkommensermittlungsvorschrift. Danach wird der durch die verdeckte Gewinnausschüttung einkommenswirksam gewordene Vermögensnachteil wieder beseitigt, was letztlich zu einer „Gewinnkorrektur“ führt. Durch Erfassung der vGA wird bei der Kapitalgesellschaft das Einkommen ermittelt, welche sich auch bei angemessenen bzw. fremdvergleichbaren Rahmenbedingungen ergeben hätte. Die Korrektur i.S. des § 8 Abs. 3 Satz 2 KStG erfolgt dabei ausschließlich außerhalb der Steuerbilanz, d.h. eine Bilanzberichtigung ist in aller Regel nicht vorzunehmen (siehe hierzu auch unter 4.1). (Das Bezugswort „welche“ steht so in der Quelle; gemeint ist das Einkommen.)" },
      { text: "Die Abgrenzung zwischen einer verdeckten Gewinnausschüttung und der verdeckten Einlage ist für die weitere Sachverhaltslösung von entscheidender Bedeutung, weil die verdeckte Einlage genau das Gegenteil darstellt. Dabei hilft immer die Fragestellung, wer aus dem Sachverhalt den Vermögensvorteil erzielt:" },
      { typ: "tabelle", spalten: ["Wer erzielt den Vermögensvorteil?", "Rechtsfolge"], zeilen: [
        ["Vorteil bei der Kapitalgesellschaft", "verdeckte Einlage"],
        ["Vorteil beim Anteilseigner oder einer nahe stehenden Person", "verdeckte Gewinnausschüttung"],
      ] },
      { text: "Anmerkung zur Abgrenzungsfrage (eigene Ergänzung): Diese eine Frage ist der praktische Einstieg in jeden Klausurfall und lässt sich in zwei Sätzen beantworten, wo die Prüfung der Tatbestandsmerkmale eine halbe Seite braucht. Sie entscheidet zugleich über die gesamte weitere Behandlung: Die verdeckte Einlage erhöht nach § 8 Abs. 3 Satz 3 KStG das Einlagekonto und beim Gesellschafter die Anschaffungskosten (siehe Teil III), die verdeckte Gewinnausschüttung dagegen führt zur Hinzurechnung bei der Gesellschaft und zu einem Bezug beim Gesellschafter. Die Richtung des Vorteils bestimmt damit auch, welches der beiden Korrespondenzprinzipien greift." },
      { typ: "titel", text: "1.2 Tatbestandsmerkmale" },
      { text: "Die Tatbestandsmerkmale einer verdeckten Gewinnausschüttung i.S. des § 8 Abs. 3 Satz 2 KStG ergeben sich aus R 8.5 Abs. 1 KStR. Zusätzlich dazu verlangt der BFH als weiteres „sog. Fünftes ungeschriebenes“ Tatbestandsmerkmal auch, dass die bei der Gesellschaft eingetretene Gewinnminderung dazu geeignet sein muss, um beim Anteilseigner überhaupt Einnahmen i.S. des § 20 Abs. 1 Nr. 1 EStG auszulösen (sog. Vorteilsgeneigtheit). Daraus ergeben sich folgende Tatbestandsmerkmale:" },
      { text: "1. Verhinderte Vermögensmehrung oder Vermögensminderung" },
      { text: "2. Veranlassung durch das Gesellschaftsverhältnis" },
      { text: "3. Gewinnauswirkung" },
      { text: "4. Kein Zusammenhang zu einer offenen Gewinnausschüttung" },
      { text: "5. Vorteilsgeneigtheit des Sachverhaltes" },
      { typ: "tabelle", spalten: ["Nr.", "Tatbestandsmerkmal", "Behandelt in Abschnitt", "Rechtsgrundlage"], zeilen: [
        ["1", "verhinderte Vermögensmehrung oder Vermögensminderung", "1.3", "R 8.5 Abs. 1 KStR"],
        ["2", "Veranlassung durch das Gesellschaftsverhältnis", "1.4", "R 8.5 Abs. 1 KStR"],
        ["3", "Gewinnauswirkung", "1.5", "R 8.5 Abs. 1 KStR"],
        ["4", "kein Zusammenhang zu einer offenen Gewinnausschüttung", "1.6", "R 8.5 Abs. 1 KStR"],
        ["5", "Vorteilsgeneigtheit des Sachverhaltes", "1.7", "ungeschrieben – Rechtsprechung des BFH, H 8.5 KStH"],
      ] },
      { text: "Anmerkung zur Tabelle (eigene Ergänzung): Die Gliederung des ganzen Kapitels 1 folgt exakt dieser Reihenfolge – jedes Tatbestandsmerkmal erhält einen eigenen Abschnitt. Das fünfte ist dabei das einzige, das **nicht** in den Richtlinien steht; der BFH hat es hinzugefügt, weil § 8 Abs. 3 Satz 2 KStG nur dort korrigieren soll, wo der Gesellschaft ein Nachteil entsteht, der beim Gesellschafter zu einem Vorteil führen **kann**. Fehlt diese Eignung, bleibt es bei einer bloßen Vermögensminderung ohne Hinzurechnung." },
      { text: "Anmerkung zur ausschließlich außerbilanziellen Korrektur (eigene Ergänzung): Der Satz, dass § 8 Abs. 3 Satz 2 KStG **ausschließlich außerhalb der Steuerbilanz** wirkt, ist der wichtigste technische Grundsatz des ganzen Skripts und in der Klausur die häufigste Fehlerquelle. Die Steuerbilanz bleibt unverändert – der überhöhte Aufwand bleibt gebucht, der zu niedrige Ertrag bleibt zu niedrig –, und erst bei der Einkommensermittlung wird der Betrag hinzugerechnet. Nur in den Sonderfällen des Abschnitts 1.5.2 ist zusätzlich eine bilanzielle Anpassung nötig, und auch dort aus einem anderen Grund: weil der Bilanzansatz selbst unzutreffend ist, nicht wegen der vGA." },
    ],
  },
  {
    id: "kst-t4-2",
    kapitel: "2",
    abschnittNr: "1.3",
    title: "1.3 Fallgruppen – verhinderte Vermögensmehrung und Vermögensminderung",
    thema: "Zwei Fallgruppen, die sich danach unterscheiden, in welche Richtung geleistet wird. Sie haben nicht nur verschiedene Sachverhalte, sondern auch verschiedene Bewertungsmaßstäbe",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil IV (Hamacher), Abschnitt 1.3 · Stand 07/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8 Abs. 3 Satz 2 KStG",
      "R 8.5 Abs. 1 KStR",
    ],
    themen: ["Verhinderte Vermögensmehrung", "Vermögensminderung", "Gemeiner Wert", "Erzielbare Vergütung", "Fallgruppen"],
    bloecke: [
      { text: "Eine vGA der Fallgruppe „verhinderte Vermögensmehrung“ liegt vor, wenn die Gesellschaft für eine von ihr an den Anteilseigner oder diesem nahe stehenden Person ausgeführte Leistung keine oder eine zu geringe Gegenleistung erhält, als ihr fremdvergleichbar eigentlich zugestanden hätte. Aus der Differenz zwischen dem fehlenden bzw. verbilligten Leistungsentgelt und der angemessenen Vergütung ergibt sich sodann die verhinderte Vermögensmehrung. Durch Erfassung des dann zu geringen Ertrags kommt es zu einer Einkommensbeeinflussung, was durch Hinzurechnung nach § 8 Abs. 3 Satz 2 KStG wieder ausgeglichen wird. Zur Bewertung in diesen Fällen siehe unter 3.1.2 Verhinderte Vermögensmehrung." },
      { text: "Beispiel: Die A-GmbH liefert ihrem Anteilseigner unentgeltlich ein Grundstück (gemeiner Wert: 1.000.000 €)." },
      { text: "Lösung: Die unentgeltliche Lieferung des Grundstücks führt bei der A-GmbH zu einem Vermögensnachteil in Form einer verhinderten Vermögensmehrung von 1.000.000 €. Denn aufgrund dieses Sachverhaltes wird eine Erhöhung des Gesellschaftsvermögens in Höhe des angemessenen Kaufpreises aus gesellschaftsrechtlichen Gründen verhindert. Die vGA ist in dieser Fallgruppe mit dem gemeinen Wert zu bewerten." },
      { text: "Beispiel: Die A-GmbH gibt ihrem Anteilseigner ein Darlehen zu einem Zinssatz von 2 %, obwohl die angemessene Verzinsung bei 6 % liegt." },
      { text: "Lösung: Die Vereinbarung eines um 4 %-Punkte niedrigen Zinssatzes führt aus Sicht der A-GmbH zu einer auf gesellschaftsrechtlicher Basis beruhenden verhinderten Vermögensmehrung. Dieser Zinsnachteil wird durch außerbilanzielle Korrektur i.S. des § 8 Abs. 3 Satz 2 KStG wieder beseitigt. Die vGA ist in dieser Fallgruppe mit der erzielbaren Vergütung zu bewerten." },
      { typ: "titel", text: "1.3.2 Vermögensminderung" },
      { text: "Eine vGA der Fallgruppe „Vermögensminderung“ liegt vor, wenn die Gesellschaft für eine vom Anteilseigner oder dessen nach stehende Person erhaltene Leistung mehr zahlt, als angemessen gewesen wäre. In Höhe der Differenz zwischen dem angemessenen Entgelt und der tatsächlichen Zahlung resultiert eine Vermögensminderung, die als Aufwand den Gewinn der Gesellschaft gemindert hat. Über § 8 Abs. 3 Satz 2 KStG wird dieser Nachteil bei der Einkommensermittlung wieder korrigiert. Zur Bewertung der vGA in diesen Fällen siehe unter 3.1.1. (Die Schreibweise „dessen nach stehende Person“ steht so in der Quelle; gemeint ist „nahe stehende“.)" },
      { text: "Beispiel: Der Alleingesellschafter der A-GmbH erhält für seine Geschäftsführertätigkeit ein Gehalt von 3.000.000 €, obwohl nur ein Betrag von 1.000.000 € angemessen wäre." },
      { text: "Lösung: In Höhe des überhöhten Gehaltes von 2.000.000 € erleidet die A-GmbH eine Vermögensminderung, weil sie aus gesellschaftsrechtlichen Gründen einen höheren Betrag als angemessen leistet. Dieser Vermögensnachteil, der zu einem überhöhten Aufwand abgebildet ist, wird über § 8 Abs. 3 Satz 2 KStG korrigiert." },
      { text: "Beispiel: Der Alleingesellschafter der A-GmbH liefert seiner Gesellschaft ein Grundstück für einen Kaufpreis von 5.000.000 €, obwohl dieses einen gemeinen Wert von 3.000.000 € hat." },
      { text: "Lösung: Weil die Gesellschaft aus gesellschaftsrechtlichen Gründen einen überhöhten Kaufpreis von 2.000.000 € leistet, erleidet sie in dieser Höhe eine Vermögensminderung. Dieser Vermögensnachteil wird nach den Grundsätzen des § 8 Abs. 3 Satz 2 KStG korrigiert." },
      { typ: "tabelle", spalten: ["Fallgruppe", "Richtung der Leistung", "Typischer Sachverhalt", "Bilanzielle Abbildung", "Bewertungsmaßstab"], zeilen: [
        ["verhinderte Vermögensmehrung", "die Gesellschaft leistet an den Gesellschafter", "unentgeltliche oder verbilligte Lieferung, zu niedriger Zins", "der Ertrag ist zu niedrig oder fehlt ganz", "gemeiner Wert bzw. erzielbare Vergütung"],
        ["Vermögensminderung", "der Gesellschafter leistet an die Gesellschaft", "überhöhtes Gehalt, überhöhter Kaufpreis", "der Aufwand ist zu hoch", "Differenz zum angemessenen Entgelt"],
      ] },
      { text: "Anmerkung zur Tabelle (eigene Ergänzung): Die Unterscheidung ist mehr als eine Ordnungsfrage, weil an ihr der **Bewertungsmaßstab** hängt – die Quelle verweist dafür eigens auf zwei verschiedene Abschnitte des Kapitels 3. Bei der verhinderten Vermögensmehrung ist mit dem **gemeinen Wert** zu bewerten, also einschließlich des Gewinnaufschlags, den ein fremder Dritter gezahlt hätte; bei der Vermögensminderung dagegen mit der Differenz zum angemessenen Entgelt. Praktisch bedeutet das: Verschenkt die Gesellschaft ein Wirtschaftsgut, wird ihr der volle Marktwert zugerechnet und nicht etwa nur ihr Selbstkostenpreis." },
      { text: "Anmerkung zur Merkhilfe (eigene Ergänzung): Wer die Richtung bestimmen will, fragt am einfachsten, **wo das Geld hinfließt beziehungsweise nicht hinfließt**. Zahlt die Gesellschaft zu viel, ist es eine Vermögensminderung; bekommt sie zu wenig, ist es eine verhinderte Vermögensmehrung. Der Vermögensnachteil ist in beiden Fällen derselbe, nur seine bilanzielle Spur ist eine andere – einmal ein überhöhter Aufwand, einmal ein zu niedriger Ertrag. Genau darauf kommt es beim dritten Tatbestandsmerkmal an, der Gewinnauswirkung." },
    ],
  },
  {
    id: "kst-t4-3",
    kapitel: "3",
    abschnittNr: "1.4",
    title: "1.4 Veranlassung durch das Gesellschaftsverhältnis – Fremdvergleich und unübliche Vereinbarungen",
    thema: "Maßstab ist der ordentliche und gewissenhafte Geschäftsleiter. Eine vGA kann aber auch dann vorliegen, wenn die Vereinbarung für die Gesellschaft günstig ist – nämlich dann, wenn kein fremder Dritter sie geschlossen hätte",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil IV (Hamacher), Abschnitt 1.4 · Stand 07/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8 Abs. 3 Satz 2 KStG",
      "§ 12 Nr. 2 EStG",
      "H 8.5 KStH „Allgemeines“",
      "H 8.7 KStH „Nur-Pension“",
      "H 8.8 KStH „Umsatztantieme“",
      "BFH vom 07.12.1988, BStBl. II 1989, 248",
      "BFH vom 17.05.1995, BStBl. II 1996, 204",
      "BFH vom 21.09.2009, BStBl. II 2010, 672",
      "BFH vom 06.04.2005, BStBl. II 2005, 666",
      "BFH vom 13.12.1989, BStBl. II 1990, 454",
      "BMF vom 06.07.2010, BStBl. I 2010, 614",
      "BMF vom 28.01.2005, BStBl. I 2005, 387",
    ],
    themen: ["Fremdvergleich", "Ordentlicher und gewissenhafter Geschäftsleiter", "Aufteilung", "Unübliche Vereinbarungen", "Nur-Pension"],
    bloecke: [
      { text: "Eine Veranlassung durch das Gesellschaftsverhältnis ist gegeben, wenn die Gesellschaft dem Anteilseigner einen Vorteil einräumt, den sie bei Anwendung der Sorgfalt eines ordentlichen und gewissenhaften Geschäftsleiters einem Nichtgesellschafter nicht gewährt hätte (sog. Fremdvergleich). Die Denkfigur des ordentlichen und gewissenhaften Geschäftsleiters wird insbesondere dann herangezogen, wenn ein Rechtsverhältnis zu beurteilen ist, dass ebenso im Verhältnis zwischen der Gesellschaft und einem Nichtgesellschafter bestehen könnte. In diesen Fällen dient der Vergleich mit dem Nichtgesellschafter zur Abgrenzung der betrieblichen von der gesellschaftsrechtlichen Veranlassung. (Die Schreibweise „dass ebenso“ steht so in der Quelle; gemeint ist „das ebenso“.)" },
      { text: "Ein ordentlicher und gewissenhafter Geschäftsleiter muss dafür Sorge tragen, dass der Kapitalgesellschaft ein angemessener Gewinn verbleibt. Eine Veranlassung durch das Gesellschaftsverhältnis ist daher anzunehmen, wenn Leistung und Gegenleistung nicht angemessen und daher auch nicht gegeneinander ausgewogen sind. Gleiches gilt, wenn der Gesellschafter-Geschäftsführer gegen Maßstäbe verstoßen hat, die ein ordentlicher und gewissenhafter Geschäftsleiter im Hinblick auf die Gewinnerzielungsabsicht seiner Gesellschaft beachten würde." },
      { text: "Bei der Überprüfung der gesellschaftsrechtlichen Veranlassung einer Gestaltung gelten die allgemeinen Rechtsgrundsätze. Danach ist eine Mitveranlassung durch das Gesellschaftsverhältnis regelmäßig anzunehmen, wenn bei vergleichbaren Aufwendungen eines „sonstigen Unternehmers“ die Grundsätze des § 12 Nr. 2 EStG greifen würden. Daraus kann sich in Ausnahmefällen auch die Notwendigkeit einer Aufteilung ergeben, wenn sich sowohl eine betriebliche als auch eine gesellschaftsrechtliche Veranlassung feststellen lässt. Voraussetzung ist hierfür aber das Vorliegen eines objektiven Aufteilungsmaßstabes." },
      { typ: "titel", text: "1.4.2 Unübliche Vereinbarungen" },
      { text: "Nach der Rechtsprechung des BFH kann eine vGA auch dadurch entstehen, wenn eine Kapitalgesellschaft mit ihrem Anteilseigner zwar eine für sie günstige Vereinbarung trifft, ein fremder Dritter diesem Geschäft aber nicht zugestimmt hätte. In dem Urteilsfall ging es um die Vereinbarung einer sog. „Nur-Pension“. Der BFH behandelte die Pensionszusage aufgrund der Unüblichkeit als verdeckte Gewinnausschüttung. Denn ein fremder Dritter als Angestellter hätte auch ohne Rücksicht auf die finanziellen Belange der Gesellschaft auf sein angemessenes Entgelt bestanden." },
      { text: "Unter diesem Gesichtspunkt sind insbesondere beispielhaft auch folgende Gestaltungen zu nennen:" },
      { text: "– Verzicht auf laufende Gehaltszahlung" },
      { text: "– Umsatztantiemen." },
      { typ: "tabelle", spalten: ["Richtung des Vergleichs", "Frage", "Rechtsfolge"], zeilen: [
        ["üblicher Fremdvergleich (1.4.1)", "Hätte die Gesellschaft diesen Vorteil auch einem Nichtgesellschafter gewährt?", "vGA, wenn Leistung und Gegenleistung nicht ausgewogen sind"],
        ["Vergleich aus Sicht des Vertragspartners (1.4.2)", "Hätte ein fremder Dritter dieser für die Gesellschaft günstigen Vereinbarung zugestimmt?", "vGA wegen Unüblichkeit – trotz Vorteilhaftigkeit für die Gesellschaft"],
      ] },
      { text: "Anmerkung zur Tabelle (eigene Ergänzung): Die zweite Zeile enthält den überraschendsten Gedanken des Abschnitts und wird in der Klausur gern übersehen. Man erwartet eine vGA dort, wo die Gesellschaft zu viel gibt – hier liegt sie umgekehrt darin, dass sie zu **wenig** gibt beziehungsweise zu günstig abschließt. Der Grund ist, dass der Fremdvergleich in beide Richtungen zu führen ist: Wenn ein angestellter Fremder niemals auf sein laufendes Gehalt verzichtet und sich allein mit einer Pensionszusage abgefunden hätte, dann beruht die Vereinbarung nicht auf dem Anstellungs-, sondern auf dem Gesellschaftsverhältnis. Der Veranlassungszusammenhang ist damit das entscheidende Kriterium, nicht die wirtschaftliche Vorteilhaftigkeit." },
      { text: "Anmerkung zur Aufteilung (eigene Ergänzung): Der Hinweis auf § 12 Nr. 2 EStG und die mögliche Aufteilung ist die Brücke zum allgemeinen Ertragsteuerrecht. Gemeint ist der gemischt veranlasste Aufwand – etwa eine Feier, die sowohl betriebliche als auch gesellschaftsrechtliche Züge trägt. Die Quelle lässt eine Aufteilung ausdrücklich nur zu, wenn ein **objektiver Aufteilungsmaßstab** vorliegt; fehlt er, bleibt es bei der Gesamtbetrachtung. Das entspricht der Rechtsprechung des Großen Senats zu den gemischten Aufwendungen, überträgt sie aber auf die Ebene der Kapitalgesellschaft." },
    ],
  },
  {
    id: "kst-t4-4",
    kapitel: "4",
    abschnittNr: "1.5.1",
    title: "1.5.1 Auswirkung auf den Gewinn – die Beeinflussung der Stufe 1",
    thema: "Hinzugerechnet werden kann nur, was das Ergebnis des Bestandsvergleichs tatsächlich beeinflusst hat. Ohne diese Spur in der Stufe 1 läuft § 8 Abs. 3 Satz 2 KStG leer",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil IV (Hamacher), Abschnitt 1.5.1 · Stand 07/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8 Abs. 3 Satz 2 KStG",
      "§ 4 Abs. 1 Satz 1 EStG",
    ],
    themen: ["Stufe 1", "Bestandsvergleich", "Gewinnauswirkung", "Verbilligte Übertragung", "Überhöhtes Gehalt"],
    bloecke: [
      { text: "Für die Einkommenshinzurechnung nach § 8 Abs. 3 Satz 2 KStG ist Voraussetzung, dass die vGA das Ergebnis der Stufe 1 (= Ergebnis des Bestandsvergleichs i.S. des § 4 Abs. 1 Satz 1 EStG) auch tatsächlich beeinflusst hat. Denn nur in dieser Situation ist die Anwendung des § 8 Abs. 3 Satz 2 KStG sachgerecht, weil in Form der außerbilanziellen Hinzurechnung der Vermögensnachteil wieder beseitigt wird." },
      { text: "Beispiel 1: Die A-GmbH liefert ihrem Anteilseigner ein Grundstück für 100.000 € (gemeiner Wert: 400.000 €). Der Buchwert des Grundstücks betrug im Zeitpunkt der Übertragung 50.000 €." },
      { text: "Lösung: Die verbilligte Übertragung des Grundstücks führt auf Ebene der A-GmbH zu einer verhinderten Vermögensmehrung von 300.000 €. Diese hat sich bilanziell in der Weise ausgewirkt, dass der gebuchte Veräußerungsgewinn lediglich 50.000 € und nicht – wie angemessen – 350.000 € betragen hat. Durch § 8 Abs. 3 Satz 2 KStG wird daher im Rahmen der Einkommensermittlung der Vermögensnachteil von 300.000 € wieder hinzugerechnet. Die vGA ist in dieser Fallgruppe nämlich mit dem gemeinen Wert von 400.000 € zu bewerten, abzüglich der tatsächlich geleisteten Zahlung von 100.000 €. Unter Berücksichtigung der Hinzurechnung versteuert die A-GmbH damit ein angemessenes Einkommen von 350.000 €." },
      { typ: "tabelle", spalten: ["Beispiel 1", "Tatsächlich", "Bei angemessenem Preis"], zeilen: [
        ["Veräußerungspreis", "100.000 €", "400.000 €"],
        ["./. Buchwert", "./. 50.000 €", "./. 50.000 €"],
        ["= Veräußerungsgewinn (Stufe 1)", "50.000 €", "350.000 €"],
        ["+ Hinzurechnung nach § 8 Abs. 3 Satz 2 KStG", "+ 300.000 €", "—"],
        ["= Einkommen", "350.000 €", "350.000 €"],
      ] },
      { text: "Beispiel 2: Der Anteilseigner erhält als Geschäftsführer ein monatliches Gehalt von 10.000 €. Angemessen wären jedoch nur 5.000 €. Bei Auszahlung des Gehalts buchte die Gesellschaft: Lohnaufwand an Bank. Das Dezembergehalt wurde zum 31.12. als Verbindlichkeit ausgewiesen." },
      { text: "Lösung: Der Anteilseigner erhält ein überhöhtes Gehalt von monatlich 5.000 € (10.000 € ./. 5.000 €). Insoweit liegt bei der Gesellschaft eine Vermögensminderung vor, die sich aufgrund der vorgenommenen Aufwandsbuchungen auch auf das Einkommen ausgewirkt hat. Es kommt daher zu einer Einkommenshinzurechnung von 60.000 € (12 × 5.000 €), so dass im Einkommen nur das angemessene Gehalt enthalten ist." },
      { text: "Rechenproben (eigene Ergänzung): Beide Beispiele gehen auf. Beispiel 1: gebuchter Gewinn 100.000 € ./. 50.000 € = 50.000 €; angemessener Gewinn 400.000 € ./. 50.000 € = 350.000 €; die vGA beträgt 400.000 € ./. 100.000 € = 300.000 €, und 50.000 € + 300.000 € = 350.000 € führen genau auf den angemessenen Wert. Beispiel 2: (10.000 € ./. 5.000 €) × 12 = 60.000 €." },
      { text: "Anmerkung zur Kontrollrechnung (eigene Ergänzung): Beispiel 1 zeigt die Probe, mit der sich jede vGA-Lösung überprüfen lässt: Das Einkommen **nach** der Hinzurechnung muss genau dem entsprechen, was die Gesellschaft bei angemessenen Konditionen versteuert hätte. Stimmen die beiden Werte nicht überein, ist entweder der Bewertungsmaßstab falsch gewählt oder die Gewinnauswirkung der Stufe 1 unzutreffend ermittelt worden. Die Quelle stellt diese Gegenüberstellung nicht in einer Tabelle dar; sie ergibt sich aber unmittelbar aus ihren Zahlen." },
      { text: "Anmerkung zum Dezembergehalt (eigene Ergänzung): Der letzte Satz des zweiten Sachverhalts ist keine beiläufige Angabe, sondern ein Hinweis auf das, was die Quelle im Abschnitt 4.1.3 unter der **Teilbetragsrechnung** entwickelt. Für die Hinzurechnung des laufenden Jahres macht es keinen Unterschied, ob das überhöhte Gehalt ausgezahlt oder nur passiviert wurde – beide Male hat es den Gewinn der Stufe 1 gemindert, und beide Male sind 60.000 € hinzuzurechnen. Bedeutung gewinnt die Unterscheidung erst später, wenn der Passivposten wieder wegfällt, denn dann darf sich dieselbe vGA nicht ein zweites Mal auswirken." },
      { text: "Anmerkung zur Bedeutung des dritten Tatbestandsmerkmals (eigene Ergänzung): Dass die vGA die Stufe 1 **tatsächlich** beeinflusst haben muss, grenzt § 8 Abs. 3 Satz 2 KStG von einer bloßen Ergebniskorrektur ab. Die Vorschrift stellt nicht etwa den angemessenen Zustand her, sondern beseitigt nur eine eingetretene Gewinnminderung. Wo es an ihr fehlt – etwa weil der Vorgang ohnehin erfolgsneutral gebucht wurde –, gibt es nichts hinzuzurechnen. Genau diesen Fällen widmet die Quelle die Sonderfälle des folgenden Abschnitts 1.5.2, in denen der Erwerb eines aktivierungspflichtigen Wirtschaftsguts zunächst gar keine Gewinnauswirkung hat." },
    ],
  },
  {
    id: "kst-t4-5",
    kapitel: "5",
    abschnittNr: "1.5.2.1.1",
    title: "1.5.2.1.1 Erwerb eines aktivierungspflichtigen Wirtschaftsguts – die bilanzielle Anpassung",
    thema: "Der überhöhte Kaufpreis steckt zunächst nur im Bilanzansatz und wirkt sich nicht auf den Gewinn aus. Erst die Anpassung auf den angemessenen Wert macht ihn gewinnwirksam – und öffnet damit die Tür für § 8 Abs. 3 Satz 2 KStG",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil IV (Hamacher), Abschnitt 1.5.2.1.1 · Stand 07/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8 Abs. 3 Satz 2 KStG",
      "§ 4 Abs. 1 Satz 1 EStG",
      "BMF vom 28.05.2002, BStBl. I 2002, 603, Tz. 42",
    ],
    themen: ["Aktivierungspflichtiges Wirtschaftsgut", "Bilanzielle Anpassung", "Teilwert", "Abschreibungsbemessungsgrundlage", "Reflexwirkung"],
    bloecke: [
      { text: "Erwirbt die Gesellschaft ein aktivierungspflichtiges Wirtschaftsgut zu einem überhöhten Preis, ist dieses in der Steuerbilanz der Kapitalgesellschaft mit dem angemessenen Wert (= Teilwert) zu bilanzieren. Hat diese das Wirtschaftsgut bisher mit dem überhöhten Kaufpreis aktiviert, kann dies mangels einer Gewinnauswirkung des überhöhten Kaufpreises noch nicht zur Anwendung des § 8 Abs. 3 Satz 2 KStG führen. Die laufende Abschreibung ist dabei keine aus der vGA resultierende Gewinnminderung, sondern nur eine unmittelbare Reflexwirkung aus der Anschaffung und der Abnutzung des Wirtschaftsgutes." },
      { text: "Der überhöhte Buchwert des Wirtschaftsgutes muss daher an den angemessenen Wert angepasst werden. Erst dadurch wird der überhöhte Kaufpreis gewinnwirksam, was nachfolgend zur Hinzurechnung im Rahmen des § 8 Abs. 3 Satz 2 KStG führt. Gleichzeitig verändert sich dadurch auch das Abschreibungsvolumen und die Abschreibungsbemessungsgrundlage des Wirtschaftsguts. Denn die Abschreibung ist zukünftig nur von den angemessenen Anschaffungskosten zu bemessen, was im laufenden VZ auch zu einer Folgekorrektur hinsichtlich der bisher vorgenommenen Abschreibung führen kann." },
      { text: "Der Anteilseigner versteuert die bezogene verdeckte Gewinnausschüttung im Jahr des Zuflusses, d.h. bei Erhalt des Veräußerungspreises. Sofern dessen Veranlagung noch korrigiert werden kann, unterliegt der Beteiligungsertrag den allgemeinen Begünstigungen." },
      { text: "Anmerkung zur Ausnahme vom Grundsatz (eigene Ergänzung): Hier zeigt sich, warum der Abschnitt 1.5 überhaupt eigenständig geprüft werden muss. Nach dem Grundsatz aus 1.1 wirkt § 8 Abs. 3 Satz 2 KStG **ausschließlich außerbilanziell** – hier ist aber ausnahmsweise **zuerst** die Bilanz zu korrigieren, und zwar nicht wegen der vGA, sondern weil der Bilanzansatz selbst unzutreffend ist: Anzusetzen ist der angemessene Wert. Erst diese Korrektur erzeugt den Aufwand, an den die außerbilanzielle Hinzurechnung anknüpfen kann. Die Reihenfolge ist damit umgekehrt zum Normalfall: dort erst die Gewinnminderung, dann die Hinzurechnung; hier erst die Bilanzkorrektur, die die Gewinnminderung überhaupt herstellt." },
      { text: "Anmerkung zur Reflexwirkung (eigene Ergänzung): Der Satz, die laufende Abschreibung sei „nur eine unmittelbare Reflexwirkung“, verhindert ein falsches Ergebnis, das sich sonst aufdrängen würde. Man könnte meinen, die überhöhte Abschreibung aus dem zu hohen Buchwert sei jedes Jahr anteilig als vGA hinzuzurechnen. Das ist ausdrücklich **nicht** der Fall – die vGA ist ein einmaliger Vorgang im Zeitpunkt des überhöhten Erwerbs, und sie wirkt sich erst mit der Bilanzanpassung in voller Höhe aus. Praktische Bedeutung gewinnt das im folgenden Abschnitt, wenn die Anpassung erst Jahre später möglich ist: Die bis dahin verbrauchte überhöhte Abschreibung ist dann unwiderruflich verloren." },
      { text: "Beispiel: Der Anteilseigner liefert in 2025 seiner A-GmbH Waren zum Kaufpreis von 100.000 €, obwohl nur 50.000 € angemessen waren (die Umsatzsteuer soll außen vor bleiben). Zum 31.12.2025 sind die Waren a) noch vollständig vorhanden (Ansatz: 100.000 €) b) zur Hälfte veräußert (Ansatz: 50.000 €) c) vollständig veräußert" },
      { text: "Lösung: Aufgrund der überteuerten Lieferung der Waren entsteht der Gesellschaft eine Vermögensminderung von 50.000 €." },
      { text: "Im Unterfall a) ist der Bilanzansatz auf 50.000 € (Stufe 1) zu reduzieren, da die Waren mit den angemessenen Werten zu bilanzieren sind. Dadurch erhöht sich der Wareneinsatz auf 50.000 €, wodurch die gesellschaftlich veranlasste Vermögensminderung auch Auswirkungen auf den Gewinn hatte. Dieser Vorgang ist über § 8 Abs. 3 Satz 2 KStG wieder Einkommen hinzuzurechnen (Stufe 2: + 50.000 €)." },
      { text: "Im Unterfall b) ist der vorhandene Warenbestand mit dem angemessenen Kaufpreis von 25.000 € (50 % von 50.000 €) zu bilanzieren. Dadurch erhöht sich der Wareneinsatz auf 75.000 € (Stufe 1). Unter normalen Umständen hätte der Wareneinsatz nur 25.000 € betragen, so dass die Differenz in dem überhöhten Kaufpreis ruht. Daher ist gemäß § 8 Abs. 3 Satz 2 KStG das Einkommen wieder um 50.000 € zu erhöhen, so dass der einkommenswirksame Wareneinsatz letztlich 25.000 € beträgt (50 % von angemessenen 50.000 €)." },
      { text: "Im Unterfall c) haben sich die überhöhten Kosten von 50.000 € im Wareneinsatz ausgewirkt. Das Einkommen ist über § 8 Abs. 3 Satz 2 KStG um 50.000 € zu erhöhen." },
      { typ: "tabelle", spalten: ["Unterfall", "Bilanzansatz bisher", "Zutreffender Ansatz", "Wareneinsatz Stufe 1", "Hinzurechnung Stufe 2", "Einkommenswirksamer Wareneinsatz"], zeilen: [
        ["a) alles vorhanden", "100.000 €", "50.000 €", "50.000 €", "+ 50.000 €", "0 €"],
        ["b) zur Hälfte veräußert", "50.000 €", "25.000 €", "75.000 €", "+ 50.000 €", "25.000 €"],
        ["c) vollständig veräußert", "0 €", "0 €", "100.000 €", "+ 50.000 €", "50.000 €"],
      ] },
      { text: "Anmerkung zur Tabelle (eigene Ergänzung): Die Hinzurechnung beträgt in allen drei Unterfällen **dieselben 50.000 €**, obwohl sich der Bilanzansatz und der Wareneinsatz völlig unterschiedlich entwickeln. Das ist der Kern des Abschnitts: Die vGA bemisst sich nach dem überhöhten Kaufpreis, nicht nach dem Verbrauchsstand. Was sich ändert, ist allein der Weg, auf dem der überhöhte Betrag gewinnwirksam wird – im Unterfall a) vollständig durch die Bilanzanpassung, im Unterfall c) vollständig durch den Wareneinsatz, im Unterfall b) je zur Hälfte. Die letzte Spalte zeigt die Probe: Der einkommenswirksame Wareneinsatz entspricht immer dem angemessenen Wert der tatsächlich verbrauchten Ware." },
      { text: "Beispiel: Der Anteilseigner liefert zum 01.01.2025 seiner Gesellschaft eine Maschine zum Kaufpreis von 500.000 €, obwohl nur 300.000 € angemessen waren. In der Bilanz zum 31.12.2025 wurde die Maschine mit dem Kaufpreis angesetzt und zutreffend linear auf die Laufzeit von 5 Jahren abgeschrieben (Buchwert: 400.000 €)." },
      { text: "Lösung: Die Maschine hätte von Anfang an mit 300.000 € bilanziert werden müssen. Der um 200.000 € überhöhte Kaufpreis ist daher im Rahmen einer bilanziellen Anpassung zu beseitigen. Dies erfolgt bilanztechnisch vor Abschreibung des Wirtschaftsgutes, weil die Abschreibung zukünftig von der reduzierten Bemessungsgrundlage vorzunehmen ist." },
      { text: "Der aufgrunddessen entstehende Aufwand von 200.000 € entspricht auch dem Wert der verdeckten Gewinnausschüttung, da in dieser Höhe bei der Gesellschaft eine Vermögensminderung eingetreten ist. Daher ist die Gewinnminderung von 200.000 € wieder außerbilanziell nach § 8 Abs. 3 Satz 2 KStG dem Einkommen hinzuzurechnen." },
      { text: "Zum 31.12.2025 beträgt der zutreffende Buchwert der Maschine 240.000 € (300.000 € ./. 60.000 €). Die Gewinnauswirkung beträgt daher insgesamt ./. 160.000 € (./. 200.000 € + 40.000 € Afa-Differenz). Die Abschreibung richtet sich dann nach den ordnungsgemäßen Anschaffungskosten von 300.000 €." },
      { typ: "tabelle", spalten: ["Maschinenfall 2025", "Bisher", "Zutreffend", "Differenz"], zeilen: [
        ["Anschaffungskosten", "500.000 €", "300.000 €", "200.000 €"],
        ["Abschreibung 2025 (5 Jahre linear)", "100.000 €", "60.000 €", "40.000 €"],
        ["Buchwert zum 31.12.2025", "400.000 €", "240.000 €", "160.000 €"],
        ["Gewinnauswirkung der Korrektur", "—", "—", "./. 160.000 €"],
        ["Hinzurechnung nach § 8 Abs. 3 Satz 2 KStG", "—", "—", "+ 200.000 €"],
      ] },
      { text: "Rechenproben (eigene Ergänzung): Alle Zahlen gehen auf. Warenfall: 100.000 € ./. 50.000 € = 50.000 € vGA; Unterfall b) 100.000 € Zugang ./. 25.000 € Bestand = 75.000 € Wareneinsatz, davon nach Hinzurechnung 25.000 € einkommenswirksam. Maschinenfall: Abschreibung bisher 500.000 € / 5 = 100.000 €, zutreffend 300.000 € / 5 = 60.000 €, Differenz 40.000 €; Buchwert 400.000 € gegen 240.000 € = 160.000 €, und ./. 200.000 € + 40.000 € = ./. 160.000 € führt genau auf diese Differenz. Die Gegenüberstellung der Buchwerte bildet die Quelle nicht; sie ist eigene Ergänzung und bestätigt das von ihr genannte Ergebnis." },
      { text: "Anmerkung zur Reihenfolge im Maschinenfall (eigene Ergänzung): Der Hinweis, die Anpassung erfolge „bilanztechnisch **vor** Abschreibung des Wirtschaftsgutes“, ist keine Formalie, sondern entscheidet über das Ergebnis. Wer zuerst von 500.000 € abschreibt und dann anpasst, kommt zwar auf denselben Buchwert, weist aber eine zu hohe Abschreibung und eine zu niedrige Anpassung aus – und damit eine falsch bemessene vGA. Richtig ist: erst die Anschaffungskosten auf 300.000 € korrigieren, dann von dieser Bemessungsgrundlage abschreiben. Bemerkenswert ist dabei, dass die Hinzurechnung mit 200.000 € **höher** ausfällt als die Gewinnauswirkung von 160.000 € – die Differenz von 40.000 € ist die eingesparte überhöhte Abschreibung, die das Ergebnis bereits erhöht hat." },
    ],
  },
  {
    id: "kst-t4-6",
    kapitel: "6",
    abschnittNr: "1.5.2.1.2",
    title: "1.5.2.1.2 Anschaffung im Vorjahr – verlorenes vGA-Potential und formelle Korrespondenz",
    thema: "Ist die Veranlagung des Anschaffungsjahres bestandskräftig, wird die Korrektur in das erste offene Jahr verschoben. Die überhöhte Abschreibung der Vorjahre bleibt unwiderruflich – und kostet den Gesellschafter die Begünstigung",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil IV (Hamacher), Abschnitt 1.5.2.1.2 · Stand 07/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8 Abs. 3 Satz 2 KStG",
      "§ 4 Abs. 2 EStG",
      "§ 20 Abs. 1 Nr. 1 Satz 2 EStG",
      "§ 3 Nr. 40 Buchstabe d Satz 2 EStG",
      "§ 8b Abs. 1 KStG",
      "§ 32a Abs. 1 KStG",
      "BMF vom 28.05.2002, Tz. 43",
    ],
    themen: ["Bestandskraft", "Bilanzberichtigung", "Verlorenes vGA-Potential", "Materielle Korrespondenz", "Formelle Korrespondenz"],
    bloecke: [
      { text: "Diese Auswirkungen sind auch in den Fällen zu beachten, in denen die Gesellschaft das Wirtschaftsgut bereits in einem Vorjahr angeschafft hat und die Veranlagung dieses Jahres bestandskräftig geworden ist. Bei der Gesellschaft wird die vGA dann abweichend von der herkömmlichen Vorgehensweise erst in dem Jahr erfasst, dessen Veranlagung noch nach AO-Vorschriften korrigiert werden kann. Dabei ist für Zwecke der Bilanzierung der Wert maßgebend, den das Wirtschaftsgut bei von Anfang an zutreffender Bewertung gehabt hätte. Bei abnutzbaren Wirtschaftsgütern ist hierfür die Abschreibung zu berücksichtigen, die von den fremdüblichen Anschaffungskosten angefallen wäre. Bilanztechnisch wird dies durch eine Bilanzberichtigung i.S. des § 4 Abs. 2 EStG nachvollzogen, die zum Beginn des entsprechenden Wj. erfolgt. Dadurch ergibt sich aber bei abnutzbaren Wirtschaftsgütern die unvermeidbare Konsequenz, dass das Potential der vGA i.S. des § 8 Abs. 3 Satz 2 KStG um den Betrag der bereits in den Vorjahren vorgenommenen Abschreibung vermindert wird, da diese mangels Korrekturmöglichkeit unwiderruflich bleibt." },
      { text: "Zu beachten sind in diesem Zusammenhang auch die Auswirkungen beim Anteilseigner. Dieser besteuert die vGA als Beteiligungsertrag i.S. des § 20 Abs. 1 Nr. 1 Satz 2 EStG bereits im Zeitpunkt des tatsächlichen Zuflusses, d.h. bei der überhöhten Kaufpreiszahlung. Der Anteilseigner dürfte in den Vorjahren aber nicht in den Genuss des Teileinkünfteverfahrens oder des § 8b Abs. 1 KStG kommen, weil dem bei zutreffender Handhabung die materielle Korrespondenz entgegensteht. Sofern die Veranlagung des Anteilseigners verfahrensrechtlich korrigiert werden kann, kann die Begünstigung des Teileinkünfteverfahrens, der Abgeltungsteuer oder des § 8b KStG nur in Höhe der tatsächlichen Hinzurechnung der vGA greifen. Daher scheidet diese Begünstigung in Höhe der unverändert gebliebenen Vorjahresabschreibung aus, weil dessen Einkommensschaden insoweit definitiv wird." },
      { text: "Die Veranlagung des Anteilseigners, die im Zuflussjahr zu einer Erfassung der vGA und der Korrektur des aus der überteuerten Lieferung entstandenen Veräußerungsgewinnes führt, richtet sich dann ausschließlich nach der formellen Korrespondenz i.S. des § 32a Abs. 1 KStG. Siehe hierzu unter 4.3." },
      { text: "Beispiel: Der Anteilseigner A liefert zum 01.01.2022 seiner Gesellschaft eine Maschine zum Kaufpreis von 500.000 €, obwohl nur 300.000 € angemessen waren (Buchwert: 200.000 €). In der Bilanz zum 31.12.2022 wurde die Maschine mit dem Kaufpreis angesetzt und zutreffend linear auf die Laufzeit von 5 Jahren abgeschrieben. Die Veranlagungen bis einschließlich 2024 sind bestandskräftig. Beim Anteilseigner wurde in 2022 lediglich der bilanzielle Ertrag aus der Veräußerung der Maschine erfasst (Gewinn: 300.000 €)." },
      { text: "Lösung: Die Maschine hätte von Anfang an mit 300.000 € bilanziert werden müssen. Weil die Veranlagungen bis einschließlich 2024 bestandskräftig sind, kann die überhöhte Bewertung daher frühestens zu Beginn des Wj. 2025 korrigiert werden (d.h. zum 01.01.2025). Maßgebend ist dabei der Bilanzansatz, den das Wirtschaftsgut bei zutreffender Bilanzierung gehabt hätte:" },
      { typ: "tabelle", spalten: ["Ermittlung des Anpassungsbetrags zum 01.01.2025", "Betrag"], zeilen: [
        ["angemessene Anschaffungskosten", "300.000 €"],
        ["./. Afa für 3 Jahre (2022 – 2024)", "./. 180.000 €"],
        ["= zutreffender Buchwert", "120.000 €"],
        ["falscher Buchwert zum 31.12.2024 bisher", "200.000 €"],
        ["= gewinnwirksame Anpassung", "80.000 €"],
      ] },
      { text: "Es ist daher eine gewinnwirksame Anpassung um 80.000 € auf 120.000 € vorzunehmen (Buchung: Aufwand an Maschine). Bei der Einkommensermittlung 2025 ist das Einkommen nach § 8 Abs. 3 Satz 2 KStG anschließend wieder um 80.000 € zu erhöhen. Die Differenz zwischen der Anpassung in 2025 und der tatsächlichen Vermögensminderung von 120.000 € (200.000 € ./. 80.000 €) ergibt sich aus der überhöhten Abschreibung der Vorjahre, die unwiderruflich erhalten bleibt (3 × 40.000 €)." },
      { text: "Die weitere Abschreibung für 2025 beträgt dann 60.000 €, so dass zum 31.12.2025 der zutreffende Buchwert 60.000 € beträgt. Hat die Gesellschaft im Rahmen ihrer Gewinnermittlung die Abschreibung bisher von den unzutreffenden Werten vorgenommen, ergibt sich aufgrund dessen eine Afa-Korrektur – die aber keine weitere vGA auslöst – von 40.000 € (unzutreffende Afa: 100.000 €)." },
      { text: "Auswirkungen beim Anteilseigner: A versteuert in 2022 die vGA als Beteiligungsertrag i.S. des § 20 Abs. 1 Nr. 1 Satz 2 EStG i.H. von 200.000 €. Da die Einkommenshinzurechnung bei der GmbH bisher unterblieben ist, kann auf den Bezug von 200.000 € das Teileinkünfteverfahren nicht angewendet werden (§ 3 Nr. 40d Satz 2 EStG). Erst die Einkommenskorrektur bei der Gesellschaft in 2025 eröffnet für den Anteilseigner in 2022 auch die Anwendung des Teileinkünfteverfahrens. Die Veranlagung ist dafür nach § 32a Abs. 1 KStG zu korrigieren, weil der Steuerbescheid der Kapitalgesellschaft durch Erfassung der vGA tatsächlich korrigiert worden ist. Das Teileinkünfteverfahren kann aufgrund § 3 Nr. 40 d Satz 2 EStG aber nur in Höhe von 80.000 € angewendet werden kann. Die übrigen 120.000 € (verlorenes Potential der Vorjahre) bleiben in voller Höhe steuerpflichtig. Die steuerpflichtigen Einnahmen betragen danach 168.000 € (120.000 € + 48.000 €). Gleichzeitig vermindert sich der bisher erfasste Veräußerungsgewinn um 200.000 € auf angemessene 100.000 € (Buchung: Bank 500.000 € an Beteiligungsertrag aus vGA 200.000 € und Ertrag 100.000 € und Maschine 200.000 €). (Das doppelte „kann“ steht so in der Quelle.)" },
      { typ: "tabelle", spalten: ["Auswirkung beim Anteilseigner A in 2022", "Betrag"], zeilen: [
        ["verdeckte Gewinnausschüttung insgesamt", "200.000 €"],
        ["davon begünstigt, weil bei der GmbH hinzugerechnet", "80.000 €"],
        ["davon voll steuerpflichtig (verlorenes Potential)", "120.000 €"],
        ["steuerpflichtig: 120.000 € + 60 % von 80.000 €", "168.000 €"],
        ["Korrektur des Veräußerungsgewinns von 300.000 € auf", "100.000 €"],
      ] },
      { text: "Rechenproben (eigene Ergänzung): Alle Zahlen gehen auf. Zutreffende Afa 300.000 € / 5 = 60.000 € jährlich, für drei Jahre 180.000 €; zutreffender Buchwert 300.000 € ./. 180.000 € = 120.000 €. Bisheriger Buchwert 500.000 € ./. 3 × 100.000 € = 200.000 € – diese Herleitung nennt die Quelle nicht, sie gibt nur das Ergebnis an. Anpassung 200.000 € ./. 120.000 € = 80.000 €. Verlorenes Potential 200.000 € ./. 80.000 € = 120.000 € = 3 × 40.000 € überhöhte Jahresabschreibung. Buchwert zum 31.12.2025: 120.000 € ./. 60.000 € = 60.000 €. Beim Anteilseigner: 60 % von 80.000 € = 48.000 €, zuzüglich 120.000 € ergibt 168.000 €. Der Buchungssatz geht auf: 500.000 € im Soll gegen 200.000 € + 100.000 € + 200.000 € im Haben." },
      { text: "Anmerkung zum verlorenen Potential (eigene Ergänzung): Dieser Fall ist der unangenehmste des ganzen Abschnitts, weil die Bestandskraft hier **endgültig** Steuersubstrat vernichtet – und zwar auf beiden Ebenen gleichzeitig. Bei der Gesellschaft bleiben 120.000 € überhöhte Abschreibung stehen, die nie hinzugerechnet werden; beim Gesellschafter bleiben dieselben 120.000 € voll steuerpflichtig, weil die Begünstigung nach § 3 Nr. 40 Buchstabe d Satz 2 EStG nur greift, **soweit** bei der Gesellschaft tatsächlich hinzugerechnet worden ist. Der Fiskus gewinnt also doppelt: Er behält die Wirkung der überhöhten Abschreibung bei der Gesellschaft nicht, und er versagt dem Gesellschafter zugleich die Entlastung. Je länger die Bestandskraft zurückreicht, desto größer wird dieser Effekt – bei einem vollständig abgeschriebenen Wirtschaftsgut bliebe von der vGA gar kein Korrekturpotential mehr übrig." },
      { text: "Anmerkung zum Zusammenspiel der beiden Korrespondenzprinzipien (eigene Ergänzung): Der Fall führt beide Ausprägungen in einem Sachverhalt vor, und sie wirken gegenläufig. Die **materielle** Korrespondenz des § 3 Nr. 40 Buchstabe d Satz 2 EStG **versagt** dem Gesellschafter die Begünstigung, solange bei der Gesellschaft nicht hinzugerechnet worden ist. Die **formelle** Korrespondenz des § 32a Abs. 1 KStG **eröffnet** ihm anschließend die Korrektur seiner bestandskräftigen Veranlagung des Jahres 2022, sobald der Bescheid der Gesellschaft tatsächlich geändert wird. Ohne § 32a Abs. 1 KStG wäre die Veranlagung 2022 längst zu – die Vorschrift ist hier also das einzige Verfahrensmittel, das dem Gesellschafter überhaupt noch hilft." },
      { text: "Anmerkung zur Buchung beim Anteilseigner (eigene Ergänzung): Der Buchungssatz zerlegt den einen Zahlungsvorgang in seine drei steuerlichen Bestandteile und ist deshalb lehrreich. A hat 500.000 € erhalten; davon entfallen 200.000 € auf den Buchwert der hingegebenen Maschine, 100.000 € auf den angemessenen Veräußerungsgewinn und 200.000 € auf den Beteiligungsertrag aus der vGA. Ursprünglich hatte er den gesamten Überschuss von 300.000 € als Veräußerungsgewinn erfasst; die Umqualifizierung nimmt davon 200.000 € heraus und ordnet sie den Kapitaleinkünften zu. Diese Umqualifizierung ist der Gegenstand des Abschnitts 4.2.4 der Quelle." },
    ],
  },
  {
    id: "kst-t4-7",
    kapitel: "7",
    abschnittNr: "1.5.2.2",
    title: "1.5.2.2 Verkauf einer Beteiligung – vGA und § 8b KStG in zwei Schritten",
    thema: "Erst stellt § 8 Abs. 3 Satz 2 KStG den angemessenen Veräußerungsgewinn her, dann greift § 8b Abs. 2 KStG. Ergibt sich trotz Hinzurechnung ein Verlust, ist auch er nicht abziehbar",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil IV (Hamacher), Abschnitt 1.5.2.2 · Stand 07/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8 Abs. 3 Satz 2 KStG",
      "§ 8b Abs. 2 Satz 1 und Satz 2 KStG",
      "§ 8b Abs. 3 Satz 1 KStG",
      "§ 8b Abs. 3 Satz 3 KStG",
      "BMF vom 28.04.2003, Tz. 21",
    ],
    themen: ["Verkauf einer Beteiligung", "Zweistufige Prüfung", "Steuerfreier Veräußerungsgewinn", "Veräußerungsverlust", "Pauschale"],
    bloecke: [
      { text: "Veräußert die Kapitalgesellschaft eine Beteiligung zu einem unangemessen niedrigen Preis, ist zunächst in Höhe der dadurch eingetretenen verhinderten Vermögensmehrung eine Einkommenserhöhung nach § 8 Abs. 3 Satz 2 KStG vorzunehmen. Der erst dadurch erfasste Veräußerungsgewinn ist anschließend unter den weiteren Voraussetzungen des § 8b Abs. 2 KStG steuerfrei. Ergibt sich nach Anwendung des § 8 Abs. 3 Satz 2 KStG ein Veräußerungsverlust, kann dieser gemäß § 8b Abs. 3 Satz 3 KStG nicht berücksichtigt werden." },
      { text: "Beispiel: Die A-GmbH überträgt in 2025 ihrem Anteilseigner unentgeltlich eine Beteiligung an der B-GmbH (Buchwert: 100.000 €; gemeiner Wert: 500.000 €). An Veräußerungskosten sind ihr 1.000 € angefallen." },
      { text: "Lösung: Im Rahmen der Einkommensermittlung wird die verhinderte Vermögensmehrung von 500.000 € dem Einkommen hinzugerechnet (§ 8 Abs. 3 Satz 2 KStG). Dadurch wird der in der Buchführung erfasste Aufwand von 101.000 € beseitigt, wodurch der Gesellschaft zunächst ein Einkommen von 399.000 € entsteht (500.000 € ./. 101.000 €). Dies entspricht auch dem zutreffenden Veräußerungsgewinn i.S. des § 8b Abs. 2 Satz 2 KStG, welcher steuerfrei ist und dem Einkommen wieder abgezogen wird. Gleichzeitig entstehen nicht abziehbare Betriebsausgaben von 19.950 € (§ 8b Abs. 3 Satz 1 KStG; 5 % von 399.000 €)." },
      { typ: "tabelle", spalten: ["Einkommensauswirkung – Gewinnfall", "Betrag"], zeilen: [
        ["+ § 8 Abs. 3 Satz 2 KStG", "+ 500.000 €"],
        ["./. § 8b Abs. 2 KStG", "./. 399.000 €"],
        ["+ § 8b Abs. 3 Satz 1 KStG", "+ 19.950 €"],
      ] },
      { text: "Beispiel: Die A-GmbH überträgt in 2025 ihrem Anteilseigner unentgeltlich eine Beteiligung an der B-GmbH (Buchwert: 300.000 €; Verkehrswert: 200.000 €). An Veräußerungskosten sind ihr 1.000 € angefallen." },
      { text: "Lösung: Die aus der verdeckten Gewinnausschüttung entstehende verhinderte Vermögensmehrung beträgt 200.000 €. Diese ist dem Einkommen nach § 8 Abs. 3 Satz 2 KStG wieder hinzuzurechnen. Dadurch wird im Einkommen ein Veräußerungsverlust von 101.000 € (200.000 € ./. 301.000 €) erfasst. Dieser kann gemäß § 8b Abs. 3 Satz 3 KStG nicht berücksichtigt werden." },
      { typ: "tabelle", spalten: ["Einkommensauswirkung – Verlustfall", "Betrag"], zeilen: [
        ["+ § 8 Abs. 3 Satz 2 KStG", "+ 200.000 €"],
        ["+ § 8b Abs. 3 Satz 3 KStG", "+ 101.000 €"],
      ] },
      { text: "Rechenproben (eigene Ergänzung): Beide Fälle gehen auf. Gewinnfall: Der gebuchte Aufwand von 101.000 € setzt sich aus dem Buchwert von 100.000 € und den Veräußerungskosten von 1.000 € zusammen; 500.000 € ./. 101.000 € = 399.000 € Veräußerungsgewinn, davon 5 % = 19.950 € Pauschale. Die Summe der Einkommensauswirkung beträgt 500.000 € ./. 399.000 € + 19.950 € = 120.950 € – diesen Saldo nennt die Quelle nicht, er ist eigene Herleitung und setzt sich aus dem beseitigten Aufwand von 101.000 € und der Pauschale von 19.950 € zusammen. Verlustfall: 200.000 € ./. 300.000 € ./. 1.000 € = ./. 101.000 €; die Einkommensauswirkung beträgt 200.000 € + 101.000 € = 301.000 € und entspricht damit genau dem beseitigten Aufwand aus Buchwert und Veräußerungskosten." },
      { text: "Anmerkung zur Reihenfolge (eigene Ergänzung): Der Abschnitt zeigt eine **zweistufige** Prüfung, die unbedingt in dieser Reihenfolge abzuarbeiten ist. Zuerst stellt § 8 Abs. 3 Satz 2 KStG den Zustand her, der bei angemessenem Preis bestanden hätte; erst auf dieses Ergebnis wird § 8b KStG angewandt. Wer die Reihenfolge umkehrt, hat gar keinen Veräußerungsgewinn, den er freistellen könnte – im Gewinnfall steht in der Buchführung ja nur ein Aufwand von 101.000 €. Die vGA-Korrektur ist damit die Voraussetzung dafür, dass § 8b Abs. 2 KStG überhaupt einen Anknüpfungspunkt hat." },
      { text: "Anmerkung zum Ergebnis des Gewinnfalls (eigene Ergänzung): Bemerkenswert ist, was per Saldo übrig bleibt. Die Hinzurechnung von 500.000 € und die Freistellung von 399.000 € heben sich weitgehend auf; belastet wird die Gesellschaft im Ergebnis mit dem rückgängig gemachten Aufwand von 101.000 € und der Pauschale von 19.950 €. Wirtschaftlich ist das folgerichtig: Hätte sie die Beteiligung zum angemessenen Preis verkauft, wäre der Gewinn von 399.000 € ebenfalls bis auf die Pauschale steuerfrei geblieben – der einzige Unterschied besteht darin, dass sie bei der Verschenkung zusätzlich den Buchwert und die Kosten nicht abziehen darf." },
      { text: "Anmerkung zum Verlustfall (eigene Ergänzung): Er zeigt die schärfste Konsequenz des Abschnitts. Obwohl die Gesellschaft wirtschaftlich einen echten Verlust erleidet – die Beteiligung ist weniger wert, als sie in den Büchern steht –, bleibt davon steuerlich nichts übrig: § 8b Abs. 3 Satz 3 KStG rechnet auch den nach der vGA-Korrektur verbleibenden Verlust wieder hinzu. Die Einkommensauswirkung von insgesamt 301.000 € entspricht damit exakt dem gesamten gebuchten Aufwand. Die Gesellschaft steht also so da, als wäre der Vorgang vollständig erfolgsneutral gewesen – und das ist dieselbe Symmetrie, die der Teil II für die substanzbezogenen Gewinnminderungen entwickelt hat." },
    ],
  },
];

export default kstTeil4;
