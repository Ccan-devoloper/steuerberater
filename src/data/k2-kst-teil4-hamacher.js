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
   Gesellschaftsverhältnis) und 1.5.1 (Beeinflussung des Gewinnes) übernommen.
   Es folgen die Sonderfälle der Gewinnauswirkung (1.5.2) und die übrigen
   Abschnitte des Kapitels 1 sowie die Kapitel 2 bis 6; der Campus weist den
   Stand aus.

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
];

export default kstTeil4;
