/* Originalklausuren Buchführung und Bilanzwesen (K3).

   Die Original-Prüfungsaufgaben aus dem Gebiet der Buchführung und des
   Bilanzwesens mit den Lösungshinweisen des Lehrgangs („Bilanzierung nach
   Handels- und Steuerrecht · Steuerberaterprüfungen 2011 – 2015“, Februar
   2026; Verfasser Norbert Rott, Markus Schmidt und Alexander Horst).
   Sachverhalt, Aufgabenstellung und Lösung sind wortlautgetreu aus dem
   Quell-PDF übernommen.

   Aufbau: Jede Klausur hat drei Teile mit zusammen 100 Punkten – regelmäßig
   ein Einzelunternehmen (34 Punkte), eine Kapitalgesellschaft (33 Punkte) und
   eine Personengesellschaft (33 Punkte). Jeder Teil steht als eigener Eintrag.

   Zeitlogik: Die Klausuren sind auf den Rechtsstand 2025 fortgeschrieben und
   spielen im Wirtschaftsjahr 2025; die Jahreszahl im Titel bezeichnet den
   Prüfungsjahrgang. Wo die Quelle einen Teil inhaltlich abgewandelt hat, weil
   die ursprüngliche Problematik überholt ist, ist das im Datensatz vermerkt.

   Die Lösungshinweise weisen Randpunkte in halben Punkten aus; die Quelle
   vermerkt dazu: „Die Punktvergabe in den einzelnen Textziffern orientiert
   sich am amtlichen Lösungshinweis.“ Sie enthält außerdem ein Punkte- und
   Notenschema, das beim ersten Teil jeder Klausur wiedergegeben ist.

   Ergänzt sind nur Thema, Normenliste und Themenchips sowie – ausdrücklich
   als solche gekennzeichnet – redaktionelle Hinweise.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen.
   Blocktypen wie bei den übrigen Klausurdatensätzen: text | titel | tabelle. */

export const bilOriginalklausurenQuelle = {
  reihe: "Bilanzierung nach Handels- und Steuerrecht · Original-Prüfungsklausuren der Steuerberaterprüfungen 2011–2015",
  stand: "Rechtsstand 2025, Februar 2026",
  verfasser: "Norbert Rott, Markus Schmidt und Alexander Horst · Lehrgangsunterlage Steuerberater:in",
  didaktik: [
    "Die Bilanzklausur der Steuerberaterprüfung dauert sechs Stunden und besteht aus drei unabhängigen Teilen zu je rund einem Drittel der Punkte. Jeder Teil verlangt dasselbe Vorgehen für jeden Einzelsachverhalt: Zurechnung (§ 246 Abs. 1 Satz 2 HGB, § 39 AO), Zuordnung (Anlage- oder Umlaufvermögen, abnutzbar, notwendig oder gewillkürt), Bewertungsmaßstab, Wertansatz – und das getrennt für Handels- und Steuerbilanz.",
    "Entscheidend ist fast immer die Aufgabenstellung selbst: Sie nennt eine Priorität (etwa „möglichst hoher Eigenkapitalausweis in der Handelsbilanz, möglichst niedriger steuerlicher Gewinn“), und daran hängt die Ausübung jedes einzelnen Wahlrechts. Wo Handels- und Steuerrecht auseinanderfallen, ist die Abweichung für die Überleitungsrechnung nach § 60 Abs. 2 EStDV gesondert festzuhalten.",
    "Die Klausuren enden regelmäßig mit einer Anlage, in der die Änderungen des vorläufigen Jahresüberschusses je Textziffer zusammenzustellen sind – getrennt nach Handelsbilanz und steuerlichem Ergebnis und ergänzt um die außerbilanziellen Korrekturen. Für diese Anlage gibt es eigene Punkte; sie ist kein Anhang, sondern Teil der Aufgabe.",
  ],
};

export const bilOriginalklausuren = [
  {
    id: "bil-ok-2011-teil1-herbst",
    block: "pruefung",
    blockLabel: "Steuerberaterprüfung · Buchführung und Bilanzwesen",
    nummer: 1,
    jahrgang: "2011",
    teil: "I",
    punkte: 34,
    title: "Teil I – Einzelunternehmen Herbst (Prüfung 2011): fünf Textziffern, in denen eine einzige Prioritätenangabe jedes Wahlrecht entscheidet",
    thema: "Der Unternehmer wünscht einen möglichst hohen Eigenkapitalausweis in der Handelsbilanz (1. Priorität) und einen möglichst niedrigen steuerlichen Gewinn (2. Priorität) – und weil die erste Priorität vorgeht, fallen mehrere Wahlrechte anders aus, als man es vom Steuerrecht her erwarten würde. Dazu eine Baumaßnahme, bei der derselbe Außenanstrich zu einem Fünftel Herstellungskosten und zu vier Fünfteln Erhaltungsaufwand ist; ein selbst geschaffenes Patent, das handelsrechtlich aktiviert werden darf und steuerrechtlich nicht; eine selbst hergestellte Maschine, bei der Verwaltungskosten und Bauzinsen nur deshalb steuerlich aktiviert werden, weil die Handelsbilanz es vorgibt; zwei Aktienpakete mit derselben Fünf-Prozent-Grenze und entgegengesetztem Ergebnis; und eine Fremdwährungsforderung, bei der § 256a HGB das Realisationsprinzip aushebelt – aber nur handelsrechtlich",
    rechtsstand: "Rechtsstand 2025 · Wirtschaftsjahr 2025",
    verfasser: "Norbert Rott, Markus Schmidt und Alexander Horst",
    quelle: "Steuerberaterprüfung 2011, Prüfungsaufgabe aus dem Gebiet der Buchführung und des Bilanzwesens, Teil I · Bilanzierung nach Handels- und Steuerrecht · Steuerberaterprüfungen 2011–2015, Februar 2026",
    normen: [
      "§ 246 Abs. 1 Sätze 1 und 2, § 247 Abs. 2, § 248 Abs. 2 Satz 1 HGB",
      "§ 252 Abs. 1 Nr. 4, § 253 Abs. 1, Abs. 3, Abs. 5 HGB",
      "§ 255 Abs. 1, Abs. 2, Abs. 2a, Abs. 3 Satz 2 HGB", "§ 256a Sätze 1 und 2 HGB",
      "§ 5 Abs. 1 Satz 1 und Satz 2, Abs. 2, Abs. 6 EStG",
      "§ 6 Abs. 1 Nr. 1, Nr. 1b, Nr. 2 EStG", "§ 7 Abs. 1, Abs. 2, Abs. 4 EStG", "§ 7g EStG",
      "§ 3 Nr. 40 Buchst. a, § 3c Abs. 2 EStG", "§ 9b Abs. 1 EStG", "§ 48b EStG",
      "§ 11c Abs. 2 Satz 1 EStDV", "§ 60 Abs. 2 Satz 1 EStDV", "§ 39 Abs. 1 AO",
      "R 6.3 Abs. 5, R 7.4 Abs. 9 Satz 3 EStR", "H 6.3 „kalkulatorische Kosten“ EStH",
      "BMF vom 18.07.2003, BStBl I S. 386, Tz. 33", "BMF vom 02.09.2016 (Teilwertabschreibung), Rn. 17",
    ],
    themen: ["Originalklausur", "Herstellungskosten", "Erhaltungsaufwand", "Selbst geschaffene immaterielle Vermögensgegenstände", "Maßgeblichkeit", "Teilwertabschreibung", "Wertaufholung", "Fremdwährungsforderung", "Überleitungsrechnung"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2011 · Prüfungsaufgabe aus dem Gebiet der Buchführung und des Bilanzwesens (Rechtsstand 2025) · Bearbeitungszeit 6 Stunden · Teil I: Einzelunternehmen Herbst" },
      { text: "Hilfsmittel: amtlich zugelassene Hilfsmittel. Der für die Lösung der Prüfungsaufgaben maßgebliche Rechtsstand ergibt sich aus dem jeweiligen Aufgabentext. Vor der Bearbeitung sind Sachverhalt und Aufgaben vollständig zu lesen." },
      { typ: "titel", text: "Allgemeiner Sachverhalt" },
      { text: "Der Kaufmann Georg Herbst (GH) betreibt seit 2005 als Einzelunternehmer einen Großhandel mit Werkzeugen in Bremen. Einige Spezialwerkzeuge stellt er in einer Produktionshalle auf seinem Betriebsgrundstück auch selber her. Die Gewinnermittlung erfolgt nach § 5 Abs. 1 EStG. Etwa erforderliche Verzeichnisse nach § 5 Abs. 1 S. 2 und 3 EStG werden geführt. Die Voraussetzungen des § 7g EStG liegen nicht vor. Das Kalenderjahr und das Wirtschaftsjahr stimmen überein." },
      { text: "GH ist zum Vorsteuerabzug berechtigt. Er versteuert seine Umsätze nach vereinbarten Entgelten mit dem Steuersatz von 19 %. Die Belege der Buchführung liegen vor und die Aufzeichnungspflichten wurden beachtet." },
      { text: "GH wünscht im Jahr 2025 einen möglichst hohen Eigenkapitalausweis in seiner Handelsbilanz (1. Priorität) und einen möglichst niedrigen steuerlichen Gewinn (2. Priorität). Die planmäßigen Abschreibungen sollen handels- und steuerrechtlich linear erfolgen." },
      { text: "Nach dem vorläufigen Ergebnis der Buchführung ergibt sich ein Jahresüberschuss in Höhe von 500.000 €. GH hat Sie gebeten, den Jahresabschluss für das Jahr 2025 zu erstellen. Gehen Sie davon aus, dass Sie diese Arbeit am 31.03.2026 erledigen / erledigt haben. In Zweifelsfällen ist der Verwaltungsauffassung zu folgen." },
      { typ: "titel", text: "1. Baumaßnahmen Produktionshalle" },
      { text: "Die Produktionshalle hat GH aufgrund eines Bauantrags vom März 2017 auf seinem bilanzierten Grundstück errichten lassen. Die Herstellungskosten haben 300.000 € betragen. Die Halle wurde Anfang Januar 2018 fertiggestellt. Die Halle wird sowohl in der Handelsbilanz als auch in der Steuerbilanz nach den für massive Gebäude geltenden Vorschriften des Steuerrechts abgeschrieben." },
      { text: "Im Jahr 2024 hatte GH aus rechtlichen Gründen einen Teilabriss vornehmen lassen müssen. Er hatte daher zum 31.12.2024 zu Recht eine Absetzung für außerplanmäßige Abschreibung (AfaA) in Höhe von 40.000 € vorgenommen." },
      { text: "Im Jahr 2025 wurde die Produktionshalle in der Zeit von Anfang Juli bis Ende September – rechtlich zulässig – um 20 % vergrößert und sodann mit einem einheitlichen Außenanstrich versehen. Die Produktion konnte in dieser Zeit in eingeschränktem Umfang fortgeführt werden. Am 01.10.2025 wurde die vergrößerte Halle feierlich in Betrieb genommen." },
      { text: "Die Rechnung des Bauunternehmers buchte GH im Oktober 2025 wie folgt: Produktionshalle 100.000 € und Vorsteuer 19.000 € an Bank 119.000 €. Die Rechnung eines Malermeisters für den Ende September 2025 erfolgten Außenanstrich der gesamten Halle buchte GH ebenfalls im Oktober 2025: Sonstige betriebliche Aufwendungen 20.000 € und Vorsteuer 3.800 € an Bank 23.800 €. Weitere Buchungen sind bisher in diesem Zusammenhang für 2025 nicht erfolgt. Freistellungsbescheinigungen nach § 48b EStG liegen vor." },
      { typ: "titel", text: "2. Multifunktionswerkzeug" },
      { text: "Im Januar 2025 hatte GH bei der Inventur festgestellt, dass sich ein Werkzeug, das die Vorteile eines Hammers, einer Zange und eines Bohrers in sich vereinigte und zudem einfach zu handhaben und preisgünstig war, nicht in seinem Warenangebot befand. Bei Recherchen konnte er auch am Markt kein Werkzeug finden, das seinen Vorstellungen entsprach. Im Februar und im März verwendete er einige Mühe darauf, ein neuartiges Werkzeug dieser Art in sein Angebot aufnehmen zu können." },
      { text: "Am 01.04.2025 kam er durch eine überraschende Eingebung darauf, welche konkreten Eigenschaften dieses Werkzeug haben müsste, und es gelang ihm innerhalb weniger Tage, den Entwurf eines solchen Werkzeugs zu zeichnen und ein patenfähiges Konzept zu erstellen. (der Verschreiber „patenfähig“ statt patentfähig so in der Quelle)" },
      { text: "Die Materialkosten bei der Suche nach einer möglichen Realisierung seiner Vorstellungen im Februar und März 2025 betrugen 7.000 € und wurden als Betriebsausgaben gebucht. Die ebenfalls als Aufwand gebuchten Gemeinkosten in diesem Zusammenhang betrugen 5.000 €. Der eigene Arbeitslohn von GH wäre mit 6.000 € angemessen berücksichtigt. Eine Buchung des Arbeitslohns ist bisher nicht erfolgt." },
      { text: "Die gebuchten Aufwendungen im April für den Entwurf des Werkzeugs und das patenfähige Konzept betrugen insgesamt 9.000 €. Der angemessene Arbeitslohn von GH in Höhe von 4.000 € wurde auch hier nicht gebucht. Die als Aufwand gebuchten Beratungskosten und die Gebühr für die Registrierung des Patents betrugen daneben insgesamt 12.000 €. Das Patent ist damit für GH ab 01.09.2025 für 15 Jahre geschützt." },
      { text: "Der bisher nicht gebuchte Firmenwert ist durch die gesicherte Möglichkeit der konkurrenzlosen Fertigung des neuartigen Werkzeugs nach zutreffender Einschätzung vom Jahresbeginn bis zum 31.12.2025 von 300.000 € auf 450.000 € gestiegen." },
      { typ: "titel", text: "3. Herstellung einer Maschine" },
      { text: "Da eine geeignete Maschine zur Herstellung der neuartigen Werkzeuge (2. Einzelsachverhalt) am Markt nicht angeboten wurde, entschloss sich GH, diese Produktionsmaschine mit den Arbeitnehmern in seiner Firma selber herzustellen. Diese Maschine wird seit Fertigstellung am 01.09.2025 zur Produktion der neuartigen Werkzeuge eingesetzt." },
      { text: "Die Materialkosten und die Fertigungskosten betrugen 25.000 €. Die angemessenen Gemeinkosten betrugen 15.000 € und die anteiligen Kosten der allgemeinen Verwaltung beliefen sich auf 3.500 €. Außerdem nahm GH zur Finanzierung der Maschine ein Darlehen auf. Die auf den Zeitraum der Herstellung der Maschine entfallenden Zinsen betragen 1.200 €. Die genannten Kosten wurden zunächst als Aufwand gebucht." },
      { text: "Die Materialkosten und die Fertigungskosten hat GH sodann als Herstellungskosten angesehen und die Maschine, die eine Nutzungsdauer von fünf Jahren hat, unter Berücksichtigung einer linearen Abschreibung (AfA) von 5.000 € zum 31.12.2025 noch mit 20.000 € aktiviert." },
      { typ: "titel", text: "4. Wertpapiere" },
      { text: "GH hatte im Januar 2024 börsennotierte Aktien zur langfristigen Stärkung seines Betriebsvermögens erworben und mit den Anschaffungskosten wie folgt gebucht: Wertpapiere Anlagevermögen (X-Aktien) 100.000 € an Bank 100.000 €; Wertpapiere Anlagevermögen (Y-Aktien) 50.000 € an Bank 50.000 €." },
      { text: "Entgegen den Erwartungen von GH verloren die X-Aktien 2024 recht deutlich an Wert. Im Jahr 2025 und dann bis zur Jahresabschlusserstellung im Jahr 2026 gingen die Kurse weiter stetig, aber nur noch leicht, zurück. Die Werte der Y-Aktien verloren im Jahr 2024 noch deutlicher an Wert. Bis zur Bilanzaufstellung im März 2025 blieben die Kurse im Jahr 2025 zunächst unverändert. Im Herbst 2025 erholten sie sich jedoch überraschend deutlich und stiegen seitdem stetig leicht an. Die Kurse vom Januar 2024 wurden bisher aber noch nicht wieder erreicht." },
      { typ: "tabelle", spalten: ["Werte der bilanzierten Aktien", "31.12.2024", "31.03.2025", "31.12.2025", "31.03.2026"], zeilen: [
        ["X-Aktien", "74.000 €", "73.000 €", "72.000 €", "71.000 €"],
        ["Y-Aktien", "26.000 €", "26.000 €", "40.000 €", "41.000 €"],
      ] },
      { text: "Im Jahresabschluss zum 31.12.2024 hat GH die Aktien bei der Handelsbilanz mit dem höchstmöglichen Wert und in der Steuerbilanz mit dem niedrigstmöglichen Wert angesetzt. In der Buchführung 2025 sind bisher keine Buchungen vorgenommen worden." },
      { typ: "titel", text: "5. Forderungen" },
      { text: "Am 02.08.2025 hat GH Werkzeuge an einen Kunden in den Vereinigten Staaten (USA) auf der Basis von US-Dollar (USD) und mit einer Zahlungsfrist bis zum 01.05.2026 verkauft und geliefert. Die entstandene Forderung beträgt 30.000 USD und wurde mit dem – hier zu unterstellen – zutreffenden Kurs in Euro (€) umgerechnet und mit 22.000 € eingebucht." },
      { text: "Die zutreffenden Umrechnungskurse betragen für einen € am 31.12.2025 = 1,25 USD und am 31.03.2024 = 1,20 USD. Weitere Buchungen sind in diesem Zusammenhang bisher nicht erfolgt. (die Jahresangabe „31.03.2024“ statt 31.03.2026 so in der Quelle)" },
    ],
    aufgabe: [
      { text: "• Beurteilen Sie die nachfolgenden Einzelsachverhalte 1 – 5 unter Hinweis auf die gesetzlichen Bestimmungen des Handels- und Steuerrechts sowie die Verwaltungsanweisungen." },
      { text: "• Stellen Sie in der Anlage die Änderungen des vorläufigen Jahresüberschusses aufgrund der nachstehenden Einzelsachverhalte dar und berechnen Sie den sich danach ergebenden Jahresüberschuss in der Handelsbilanz und den steuerlichen Gewinn." },
    ],
    loesung: [
      { typ: "titel", text: "Lösungshinweis zur Steuerberaterklausur 2011 · Bilanz · Teil I: Einzelunternehmen Herbst (34 Punkte)" },
      { text: "Verfasser: Norbert Rott, Diplom-Finanzwirt; Markus Schmidt, Diplom-Finanzwirt – Steuerberater; Alexander Horst, Diplom-Finanzwirt – Steuerberater." },
      { typ: "tabelle", spalten: ["Punkte- und Notenschema der Quelle (für die gesamte Klausur, 100 Punkte)", "Note"], zeilen: [
        ["100 – 95", "sehr gut (1,0)"],
        ["88 – 94", "gut-sehr gut (1,5)"],
        ["81 – 87", "gut (2,0)"],
        ["74 – 80", "befriedigend-gut (2,5)"],
        ["67 – 73", "befriedigend (3,0)"],
        ["59 – 66", "ausreichend-befriedigend (3,5)"],
        ["50 – 58", "ausreichend (4,0)"],
        ["40 – 49", "mangelhaft-ausreichend (4,5)"],
        ["30 – 39", "mangelhaft (5,0)"],
        ["20 – 29", "ungenügend-mangelhaft (5,5)"],
        ["0 – 19", "ungenügend (6,0)"],
      ] },
      { text: "Hinweis der Quelle: Die Punktvergabe in den einzelnen Textziffern orientiert sich am amtlichen Lösungshinweis für die Steuerberaterklausur 2011. Die Klausur ist im Teil I und Teil III auf den Rechtsstand 2025 fortgeschrieben. Der Teil II beinhaltete im Original in der Textziffer 5 die Problematik des Übergangs zum BilMoG und wurde aus diesem Grund abgewandelt und ebenfalls auf die Rechtslage 2025 angepasst, da die Übergangsproblematik nicht mehr klausurrelevant sein wird." },
      { typ: "titel", text: "1. Baumaßnahmen Produktionshalle" },
      { text: "Die Produktionshalle ist GH ab Januar 2018 als zivilrechtlichem Eigentümer gem. § 39 Abs. 1 AO, § 246 Abs. 1 S. 2 1. HS HGB zuzurechnen. Es handelt sich um ein abnutzbares und unbewegliches Wirtschaftsgut des notwendigen Betriebsvermögens (Anlagevermögen) gem. § 246 Abs. 1 S. 1 und § 247 Abs. 2 HGB i. V. m. § 5 Abs. 1 S. 1 1. HS EStG.", punkte: 0.5 },
      { text: "Die Bewertung der Produktionshalle erfolgt gem. § 253 Abs. 1 und 3 HGB, § 6 Abs. 1 Nr. 1 EStG mit den fortgeführten Herstellungskosten. Die Herstellungskosten sind gem. § 255 Abs. 2 HGB, § 5 Abs. 1 Satz 1 1. HS EStG und § 9b Abs. 1 EStG zu ermitteln und betragen 300.000 €.", punkte: 0.5 },
      { text: "Die Regel-AfA bestimmt sich gem. § 7 Abs. 4 S. 1 Nr. 1 i. H. v. 3 % p. a. Da für das Jahr 2024 eine AfaA gem. § 7 Abs. 4 S. 3 i. V. m. Abs. 1 S. 7 EStG aufgrund des Teilabrisses vorgenommen werden musste, ist die reguläre AfA gem. § 11c Abs. 2 S. 1 EStDV und R 7.4 Abs. 9 S. 3 EStR wie folgt zu berechnen.", punkte: 0.5 },
      { typ: "tabelle", spalten: ["AfA-Bemessungsgrundlage ab 01.01.2025", "Betrag"], zeilen: [
        ["ursprüngliche AfA-BMG (Herstellungskosten)", "300.000 €"],
        ["abzüglich AfaA", "./. 40.000 €"],
        ["zuzüglich nachträgliche Herstellungskosten", "104.000 €"],
        ["AfA-BMG ab 01.01.2025", "364.000 €"],
      ], punkte: 1 },
      { text: "Als nachträgliche Herstellungskosten zählen neben den Aufwendungen für den Bauunternehmer auch ein Teil der Aufwendungen für den Malermeister. Denn hier fallen im Zusammenhang mit nachträglichen Herstellungskosten auch Erhaltungsaufwendungen an. Die Aufwendungen für den Malermeister sind gem. BMF (BStBl 2003 I, S. 386) Tz. 33 in Höhe von 4.000 € als nachträgliche Herstellungskosten zu qualifizieren, denn die Produktionshalle wurde um 20 % vergrößert. Auf die neue Substanz entfallen damit 20 % von 20.000 € = 4.000 €.", punkte: 1 },
      { text: "Die verbleibenden 16.000 € der Aufwendungen für den Malermeister sind als Erhaltungsaufwendungen sofort abzugsfähig. Die abzugsfähige Vorsteuer gehört weder zu den nachträglichen Herstellungskosten noch zu den Erhaltungsaufwendungen, § 9b Abs. 1 EStG.", punkte: 1 },
      { typ: "tabelle", spalten: ["Entwicklung des Buchwerts der Produktionshalle 2025", "Betrag"], zeilen: [
        ["Buchwert 01.01.2025", "197.000 €"],
        ["+ nachträgliche Herstellungskosten 2025", "104.000 €"],
        ["Zwischensumme", "301.000 €"],
        ["AfA 2025: 364.000 € × 3 %", "./. 10.920 €"],
        ["Buchwert 31.12.2025", "290.080 €"],
      ], punkte: 1.5 },
      { typ: "titel", text: "2. Multifunktionswerkzeug" },
      { text: "Seit der Einführung durch das BilMoG können gem. § 248 Abs. 2 S. 1 HGB selbst geschaffene immaterielle Vermögensgegenstände des Anlagevermögens in der Handelsbilanz aktiviert werden. Da GH laut Aufgabenstellung handelsbilanziell einen möglichst hohen Eigenkapitalausweis wünscht, ist das Aktivierungswahlrecht für das Multifunktionswerkzeug (Patent) auszuüben.", punkte: 0.5 },
      { text: "Das Patent ist GH ab dem 01.09.2025 als zivilrechtlichem Eigentümer gem. § 246 Abs. 1 S. 2 1. HS HGB und § 39 Abs. 1 AO zuzurechnen. Es handelt sich um ein unbewegliches abnutzbares Wirtschaftsgut des notwendigen betrieblichen Anlagevermögens, § 246 Abs. 1 S. 1, § 247 Abs. 2 HGB.", punkte: 0.5 },
      { text: "Allerdings gilt das Wahlrecht ausschließlich für die Handelsbilanz. Eine entsprechende steuerbilanzielle Aktivierung ist durch § 5 Abs. 2 EStG ausgeschlossen, wodurch es zu einer Durchbrechung der Maßgeblichkeit kommt.", punkte: 0.5 },
      { text: "Gem. § 253 Abs. 1 und 3 HGB erfolgt die Bewertung mit den fortgeführten Herstellungskosten. Nach § 255 Abs. 2a S. 1 HGB sind als Herstellungskosten eines selbst geschaffenen immateriellen Vermögensgegenstands des Anlagevermögens ausschließlich die bei dessen Entwicklung anfallenden Aufwendungen nach § 255 Abs. 2 HGB zu berücksichtigen. Zu unterscheiden sind daher in diesem Zusammenhang Aufwendungen für die Entwicklung § 255 Abs. 2a S. 2 HGB und die Forschung § 255 Abs. 2a S. 3 HGB.", punkte: 0.5 },
      { text: "Die aufgewendeten Materialkosten bei der Suche nach einer möglichen Realisierung der Vorstellungen des GH von einem Multifunktionswerkzeug in Höhe von 7.000 € Einzelkosten und 5.000 € Gemeinkosten sind hier als Forschungskosten zu identifizieren und damit als (laufende) Betriebsausgaben zu behandeln.", punkte: 1 },
      { text: "Der Unternehmerlohn des GH zählt ohnehin zu den sog. kalkulatorischen Kosten und ist damit schon nach § 255 Abs. 2 HGB nicht berücksichtigungsfähig (vgl. H 6.3 „kalkulatorische Kosten“ EStH). Auch als Betriebsausgaben darf er nicht geltend gemacht werden.", punkte: 0.5 },
      { typ: "tabelle", spalten: ["Entwicklungskosten des Patents", "Betrag"], zeilen: [
        ["Entwurf des Werkzeugs", "9.000 €"],
        ["Beratungskosten und Registrierungsgebühr", "12.000 €"],
        ["Herstellungskosten", "21.000 €"],
      ], punkte: 0.5 },
      { text: "Auch hier zählt der (angemessene) kalkulatorische Unternehmerlohn des GH nicht zu den Herstellungskosten. Die Zugangsbewertung erfolgt daher mit 21.000 €. Für unbewegliche Wirtschaftsgüter ist lediglich die lineare AfA zulässig. Der Buchwert des Patents ermittelt sich wie folgt: Herstellungskosten 01.09.2025 21.000 €, AfA 2025: 21.000 € : 15 Jahre × 4/12 = ./. 447 €, Buchwert 31.12.2025 = 20.533 €. (die Zahl 447 € so in der Quelle; der ausgewiesene Buchwert von 20.533 € setzt 467 € voraus, die Anlage rechnet mit 466 €)", punkte: 0.5 },
      { text: "§ 253 Abs. 3 S. 3 HGB kommt nicht zur Anwendung, da die Nutzungsdauer von 15 Jahren laut Sachverhalt feststeht. Der selbst geschaffene Firmenwert darf handelsrechtlich nicht aktiviert werden, da er keinen Vermögensgegenstand darstellt." },
      { typ: "titel", text: "3. Herstellung einer Maschine" },
      { text: "Die Produktionsmaschine ist GH ab 01.09.2025 als zivilrechtlichem Eigentümer gem. § 39 Abs. 1 AO, § 246 Abs. 1 S. 2 1. HS HGB zuzurechnen. Es handelt sich um ein abnutzbares und bewegliches Wirtschaftsgut des notwendigen betrieblichen Anlagevermögens gem. § 246 Abs. 1 S. 1 und § 247 Abs. 2 HGB i. V. m. § 5 Abs. 1 S. 1 1. HS EStG.", punkte: 0.5 },
      { text: "Die Bewertung der Maschine erfolgt gem. § 253 Abs. 1 und 3 HGB, § 6 Abs. 1 Nr. 1 EStG mit den fortgeführten Herstellungskosten. Die Herstellungskosten sind gem. § 255 Abs. 2 HGB, § 5 Abs. 1 Satz 1 1. HS EStG und § 9b Abs. 1 EStG zu ermitteln. Sowohl die Einzel- als auch die Gemeinkosten gehören zwingend zu den Herstellungskosten.", punkte: 1 },
      { text: "Laut Aufgabenstellung wünscht GH handelsrechtlich einen möglichst hohen Ausweis und steuerrechtlich einen möglichst niedrigen Gewinn. In Bezug auf die Herstellungskosten der Maschine ist gem. § 6 Abs. 1 Nr. 1b EStG das Wahlrecht zur Aktivierung der Kosten für die allgemeine Verwaltung, § 255 Abs. 2 S. 3 HGB, übereinstimmend auszuüben.", punkte: 1 },
      { text: "Für Fremdkapitalzinsen § 255 Abs. 3 S. 2 HGB gilt gem. R 6.3 Abs. 5 EStR auch für die Steuerbilanz ein Wahlrecht; Voraussetzung für die Berücksichtigung als Teil der Herstellungskosten ist, dass in der Handelsbilanz entsprechend verfahren wird.", punkte: 0.5 },
      { text: "Dieses bedeutet, dass steuerrechtlich nur dann von der Aktivierung abgesehen werden kann, falls es handelsrechtlich nicht zu einer Aktivierung kommt. § 6 Abs. 1 Nr. 1b EStG und R 6.3 Abs. 5 EStR stellen somit keine Wahlrechte im Sinne § 5 Abs. 1 S. 1 2. HS EStG dar. Da nach der Aufgabenstellung die handelsrechtliche Aufgabenstellung Vorrang hat, erfolgt auch steuerlich eine Aktivierung der Verwaltungskosten und der Fremdkapitalzinsen.", punkte: 1 },
      { typ: "tabelle", spalten: ["Ermittlung der Herstellungskosten der Maschine", "Handelsbilanz", "Steuerbilanz"], zeilen: [
        ["Materialeinzelkosten und Fertigungseinzelkosten", "25.000 €", "25.000 €"],
        ["angemessene Gemeinkosten", "15.000 €", "15.000 €"],
        ["allgemeine Verwaltung", "3.500 €", "3.500 €"],
        ["Fremdkapitalzinsen", "1.200 €", "1.200 €"],
        ["Herstellungskosten", "44.700 €", "44.700 €"],
        ["bisher", "25.000 €", "25.000 €"],
        ["Differenz (gebuchter Aufwand rückgängig zu machen)", "+ 19.700 €", "+ 19.700 €"],
      ], punkte: 3.5 },
      { text: "Im Jahr 2025 besteht steuerrechtlich ein Wahlrecht zwischen der linearen AfA gem. § 7 Abs. 1 S. 1 EStG und der degressiven AfA gem. § 7 Abs. 2 EStG, § 5 Abs. 1 Satz 1 2. HS. Das Wahlrecht zur degressiven AfA besteht auch handelsrechtlich gem. § 253 Abs. 3 Satz 1 und 2 HGB. Nach Aufgabenstellung soll aber linear abgeschrieben werden.", punkte: 1 },
      { typ: "tabelle", spalten: ["Entwicklung des Bilanzansatzes der Maschine", "Betrag"], zeilen: [
        ["Herstellungskosten", "44.700 €"],
        ["AfA 2025, 4 Monate", "- 2.980 €"],
        ["Buchwert 31.12.2025", "41.720 €"],
        ["bisher", "5.000 € AfA gebucht"],
        ["Differenz (gebuchter Aufwand rückgängig zu machen)", "+ 2.020 €"],
      ], punkte: 1 },
      { typ: "titel", text: "4. Wertpapiere" },
      { text: "Die Wertpapiere sind GH seit 2024 als zivilrechtlichem Eigentümer gem. § 39 Abs. 1 AO und § 246 Abs. 1 S. 2 1. HS HGB zuzurechnen und als nicht abnutzbare Wirtschaftsgüter dem gewillkürten, betrieblichen Anlagevermögen zuzuordnen, § 246 Abs. 1 S. 1 und § 247 Abs. 2 HGB i. V. m. § 5 Abs. 1 S. 1 1. HS EStG.", punkte: 0.5 },
      { text: "Die Bewertung erfolgt gem. § 253 Abs. 1 und Abs. 3 S. 5 HGB und § 6 Abs. 1 Nr. 2 EStG grundsätzlich mit den Anschaffungskosten gem. § 255 Abs. 1 HGB. Handelsrechtlich sind aufgrund des eingeschränkten Niederstwertprinzips bei dauernder Wertminderung zwingend Abschreibungen auf den beizulegenden Wert vorzunehmen. Steuerrechtlich müssen diese Abschreibungen nicht übernommen werden (§ 6 Abs. 1 Nr. 2 S. 2 EStG – „kann“, § 5 Abs. 1 Satz 1 2. HS EStG). Zu beachten ist das Wertaufholungsgebot gem. § 253 Abs. 5 HGB.", punkte: 0.5 },
      { text: "Beachte (Hinweis der Quelle): Da der Begriff der voraussichtlich dauernden Wertminderung handels- und steuerrechtlich nach u. E. nicht unterschiedlich ausgeübt werden darf, wird das u. a. BMF-Schreiben vom 02.09.2016 auch für das Handelsrecht angewendet." },
      { typ: "tabelle", spalten: ["Handelsbilanz", "31.12.2024", "31.12.2025", "Veränderung"], zeilen: [
        ["X-Aktien", "74.000 €", "74.000 € (zur Begründung siehe Steuerrecht)", "0 €"],
        ["Y-Aktien", "26.000 €", "40.000 €", "+ 14.000 €"],
      ], punkte: 1.5 },
      { text: "Steuerbilanz: Nach Rn. 17 des BMF-Schreibens § 6/12 zur Teilwertabschreibung und zur Frage der dauernden Wertminderung ist bei Aktien des Anlagevermögens von einer dauernden Wertminderung auszugehen, wenn der Kurs der Aktie am Bilanzstichtag mehr als 5 % unter dem Kurs bei Erwerb liegt. Kursänderungen nach dem Bilanzstichtag sind wertbegründend und haben somit keine Auswirkung auf die Bewertung zum Bilanzstichtag, § 252 Abs. 1 Nr. 4 HGB, § 5 Abs. 1 Satz 1 1. HS EStG. Für den nachfolgenden Stichtag wird die 5-%-Bagatellgrenze auf den vorangegangenen Bilanzstichtag bezogen.", punkte: 0.5 },
      { text: "Zum 31.12.2024 waren die Aktien wie folgt zu bewerten: X-Aktien AK 74.000 € (da Minderung > 5 %), Y-Aktien Teilwert 26.000 € (da Minderung > 5 %).", punkte: 0.5 },
      { text: "Für die Y-Aktien ist zum 31.12.2025 gem. § 6 Abs. 1 Nr. 2 S. 3 i. V. m. Nr. 1 S. 4 eine Teilwertzuschreibung auf den Kurs von 40.000 € vorzunehmen. Es ist weiterhin von einer dauernden Wertminderung auszugehen. Im Fall der Wertaufholung wäre die 5-%-Grenze nicht anwendbar. Die Kursentwicklung bis zur Bilanzaufstellung ist wertbegründend und somit nicht einzubeziehen.", punkte: 0.5 },
      { text: "Hinsichtlich der X-Aktien liegt weiterhin eine dauernde Wertminderung vor. Allerdings verbleibt es beim Ansatz von 74.000 €, da nach dem BMF-Schreiben nur dann eine weitergehende dauernde Wertminderung vorliegt, wenn der Kurs mehr als 5 % unter dem Kurs des vorangegangenen Bilanzstichtags liegt. Zum 31.12.2025 sind die Wertpapiere damit wie folgt zu bewerten: X-Aktien 74.000 €, Y-Aktien 40.000 €; Veränderung X-Aktien 0 €, Y-Aktien 14.000 €.", punkte: 0.5 },
      { text: "Außerbilanziell sind gem. § 3 Nr. 40 a) sowie § 3c Abs. 2 EStG in diesem Zusammenhang folgende Korrekturen erforderlich (40 % steuerfrei): X-Aktien 0 €, Y-Aktien ./. 5.600 €.", punkte: 1 },
      { typ: "titel", text: "5. Forderungen" },
      { text: "Die Forderung ist GH als zivilrechtlichem Eigentümer gem. § 39 Abs. 1 AO und § 246 Abs. 1 S. 2 1. HS HGB zuzurechnen und dem notwendigen betrieblichen Umlaufvermögens zuzuordnen und damit zu bilanzieren, § 246 Abs. 1 S. 1 HGB, § 247 Abs. 2 HGB i. U., § 5 Abs. 1 S. 1 1. HS EStG.", punkte: 0.5 },
      { text: "Die Bewertung erfolgt grundsätzlich gem. § 253 Abs. 1 HGB und § 6 Abs. 1 Nr. 2 EStG (maximal) mit den Anschaffungskosten zum Zeitpunkt des Zugangs, § 256a S. 1 HGB, § 255 Abs. 1 HGB, § 5 Abs. 1 Satz 1 1. HS EStG: 22.000 €. Zum 31.12.2025 beträgt der Wert der Forderung 30.000 USD : 1,25 USD/€ = 24.000 €.", punkte: 0.5 },
      { text: "Grundsätzlich ist dieser Wert aufgrund von § 253 Abs. 1 S. 1 und § 252 Abs. 1 Nr. 4 HGB nicht berücksichtigungsfähig. Da es sich jedoch um eine Fremdwährungsforderung mit einer Restlaufzeit am Bilanzstichtag von weniger als einem Jahr handelt, sind diese Vorschriften (Anschaffungskosten als Höchstgrenze und Realisationsprinzip) gem. § 256a S. 2 HGB nicht zu berücksichtigen.", punkte: 1 },
      { text: "Vor diesem Hintergrund ist die Forderung handelsrechtlich mit 24.000 € zu bewerten. Insofern kommt es zu einem (zulässigen) Ausweis nicht realisierter Gewinne von 2.000 €. Buchung: Forderung aus LuL 2.000 € an sonstiger betrieblicher Ertrag 2.000 €.", punkte: 1 },
      { text: "Steuerrechtlich bleibt es bei den Anschaffungskosten als Höchstgrenze für die Bewertung, wodurch es zu einer Durchbrechung der Maßgeblichkeit gem. § 5 Abs. 6 EStG kommt. Nicht realisierte Gewinne dürfen steuerlich nicht ausgewiesen werden.", punkte: 0.5 },
      { typ: "titel", text: "Anlage (1 Punkt pro Textziffer = 5 Punkte)" },
      { typ: "tabelle", spalten: ["Kaufmann Georg Herbst", "Ergebnis der Handelsbilanz", "Steuerliches Ergebnis"], zeilen: [
        ["Vorläufiger Jahresüberschuss 2023 (so in der Quelle; gemeint ist 2025)", "500.000 €", "500.000 €"],
        ["Änderungen laut Einzelsachverhalt „Produktionshalle“", "+ 4.000 € · ./. 10.920 €", "+ 4.000 € · ./. 10.920 €"],
        ["Änderungen laut Einzelsachverhalt „Multifunktionswerkzeug“", "+ 21.000 € · ./. 466 €", "–"],
        ["Änderungen laut Einzelsachverhalt „Maschine“", "+ 19.700 € · + 2.020 €", "+ 19.700 € · + 2.020 €"],
        ["Änderungen laut Einzelsachverhalt „Wertpapiere“", "(X-Aktien) 0 € · (Y-Aktien) + 14.000 €", "(X-Aktien) 0 € · (Y-Aktien) + 14.000 €"],
        ["Änderungen laut Einzelsachverhalt „Forderungen“", "+ 2.000 €", "–"],
        ["Jahresüberschuss nach den vorstehenden Änderungen", "551.334 €", "528.800 €"],
        ["Außerbilanzielle Korrekturen", "–", "(X-Aktien) 0 € · (Y-Aktien) ./. 5.600 €"],
        ["Steuerliches Ergebnis nach den vorstehenden Änderungen", "–", "523.200 €"],
      ], punkte: 5 },
      { typ: "titel", text: "Redaktionelle Hinweise" },
      { text: "Redaktioneller Hinweis zum didaktischen Kern – **ein Satz der Aufgabenstellung entscheidet fünf Wahlrechte**: „GH wünscht einen möglichst hohen Eigenkapitalausweis in seiner Handelsbilanz (1. Priorität) und einen möglichst niedrigen steuerlichen Gewinn (2. Priorität).“ Weil die **erste** Priorität vorgeht, fallen mehrere Entscheidungen anders aus, als es die zweite nahelegen würde: Das Patent wird handelsrechtlich aktiviert (Tz. 2), und bei der Maschine werden Verwaltungskosten und Bauzinsen **auch steuerlich** aktiviert (Tz. 3) – obwohl das den steuerlichen Gewinn erhöht. Der Grund steht ausdrücklich in der Lösung: § 6 Abs. 1 Nr. 1b EStG und R 6.3 Abs. 5 EStR sind **keine** eigenständigen steuerlichen Wahlrechte, sondern hängen an der handelsrechtlichen Behandlung." },
      { text: "Redaktioneller Hinweis zur Produktionshalle – ein Anstrich, zwei Rechtsfolgen: Der Außenanstrich wurde einheitlich über die **gesamte** Halle gelegt, die aber nur zu 20 % neu ist. Nach Tz. 33 des BMF-Schreibens vom 18.07.2003 folgt der Anstrich der Substanz: 20 % von 20.000 € = **4.000 € nachträgliche Herstellungskosten**, die restlichen 16.000 € sofort abzugsfähiger Erhaltungsaufwand. Die AfA-Bemessungsgrundlage ist außerdem um die AfaA des Vorjahres zu **kürzen** und um die nachträglichen Herstellungskosten zu erhöhen (§ 11c Abs. 2 Satz 1 EStDV): 300.000 ./. 40.000 + 104.000 = 364.000 €. Wer die AfaA vergisst, rechnet mit 404.000 € und liegt bei der AfA um 1.200 € daneben." },
      { text: "Redaktioneller Hinweis zum Patent – die Trennlinie zwischen Forschung und Entwicklung liegt auf einem Datum: Alles vor dem 01.04.2025 ist **Forschung** (§ 255 Abs. 2a Satz 3 HGB) und bleibt Aufwand – 7.000 € Material und 5.000 € Gemeinkosten. Alles ab der „überraschenden Eingebung“ ist **Entwicklung** und damit aktivierungsfähig: 9.000 € für den Entwurf und 12.000 € Beratung und Registrierung, zusammen 21.000 €. Der **Unternehmerlohn** (6.000 € und 4.000 €) fällt in beiden Phasen heraus: Er ist kalkulatorischer Aufwand und weder Herstellungskosten noch Betriebsausgabe. Und der gestiegene **Firmenwert** von 150.000 € bleibt vollständig außer Betracht, weil ein selbst geschaffener Geschäftswert kein Vermögensgegenstand ist – eine der teuersten Versuchungen des Sachverhalts." },
      { text: "**Redaktioneller Hinweis zu einer Unstimmigkeit der Quelle – eigene Feststellung:** Die AfA auf das Patent ist an drei Stellen verschieden beziffert. Der Lösungstext nennt **447 €**, der im selben Satz ausgewiesene Buchwert von 20.533 € setzt jedoch **467 €** voraus (21.000 ./. 467 = 20.533), und die Anlage rechnet mit **466 €**. Rechnerisch richtig sind 21.000 € : 15 Jahre × 4/12 = **466,67 €**; die 447 € sind ein Zahlendreher. Die Gesamtsumme der Anlage von 551.334 € geht mit 466 € auf. Alle drei Zahlen sind wortlautgetreu übernommen und hier kenntlich gemacht." },
      { text: "Redaktioneller Hinweis zu den beiden Aktienpaketen – dieselbe Grenze, entgegengesetztes Ergebnis: Für beide gilt die Fünf-Prozent-Regel des BMF-Schreibens vom 02.09.2016, und für den Folgestichtag ist sie auf den **vorangegangenen Bilanzstichtag** zu beziehen. Bei den **X-Aktien** beträgt der Rückgang von 74.000 € auf 72.000 € nur 2,7 % – die Grenze ist nicht erreicht, es bleibt beim Ansatz von 74.000 €, obwohl der Kurs weiter gefallen ist. Bei den **Y-Aktien** greift dagegen das Wertaufholungsgebot, und für die Zuschreibung gilt die Fünf-Prozent-Grenze **nicht**: von 26.000 € auf 40.000 €, also + 14.000 €. Die Kursentwicklung bis zur Bilanzaufstellung bleibt in beiden Fällen außen vor – sie ist wertbegründend, nicht werterhellend. Außerbilanziell mindern sich die 14.000 € um 40 % (§ 3 Nr. 40 Buchst. a EStG) auf 8.400 €." },
      { text: "Redaktioneller Hinweis zur Fremdwährungsforderung – § 256a HGB hebelt zwei Grundsätze aus: Normalerweise sperren die Anschaffungskosten als Höchstgrenze (§ 253 Abs. 1 Satz 1 HGB) und das Realisationsprinzip (§ 252 Abs. 1 Nr. 4 HGB) jeden Ausweis eines Kursgewinns. Weil die Restlaufzeit am Bilanzstichtag aber **weniger als ein Jahr** beträgt (Zahlungsfrist bis 01.05.2026), gilt Satz 2 der Vorschrift: Die Forderung ist mit dem Stichtagskurs zu bewerten, und 2.000 € nicht realisierter Gewinn sind handelsrechtlich auszuweisen. Steuerrechtlich bleibt es bei den Anschaffungskosten – eine weitere Durchbrechung der Maßgeblichkeit (§ 5 Abs. 6 EStG)." },
      { text: "Redaktioneller Hinweis zur Anlage – sie ist kein Anhang, sondern fünf Punkte: Für die Zusammenstellung der Änderungen je Textziffer gibt es **einen Punkt pro Textziffer**, zusammen also 5 von 34 Punkten des Teils. Sie zwingt dazu, jede Abweichung zwischen Handels- und Steuerbilanz noch einmal explizit zu machen – genau das, was die Überleitungsrechnung nach § 60 Abs. 2 Satz 1 EStDV verlangt. Drei Posten stehen nur in einer Spalte: das Patent und der Kursgewinn nur handelsrechtlich, die außerbilanzielle Korrektur nur steuerlich." },
      { text: "Redaktioneller Hinweis zur Rechenkontrolle: Alle Beträge sind unabhängig nachgerechnet und gehen auf. Produktionshalle: AfA 2018–2024 = 7 × 9.000 = 63.000 €; 300.000 ./. 63.000 ./. 40.000 = 197.000 € Buchwert zum 01.01.2025; nachträgliche HK 100.000 + 4.000 = 104.000 €; AfA-BMG 364.000 € × 3 % = 10.920 €; Buchwert 290.080 €. Patent: 9.000 + 12.000 = 21.000 €; 21.000 : 15 × 4/12 = 466,67 €. Maschine: 25.000 + 15.000 + 3.500 + 1.200 = 44.700 €; ./. 25.000 bisher = 19.700 €; AfA 44.700 : 5 × 4/12 = 2.980 €; bisher 5.000 € gebucht, Differenz 2.020 €. Wertpapiere: 40.000 ./. 26.000 = 14.000 €; davon 40 % = 5.600 €; Kursrückgang der X-Aktien 74.000 → 72.000 = 2,7 %, unter der 5-%-Grenze. Forderung: 30.000 : 1,25 = 24.000 €; ./. 22.000 = 2.000 €. Anlage Handelsbilanz: 500.000 + 4.000 ./. 10.920 + 21.000 ./. 466 + 19.700 + 2.020 + 14.000 + 2.000 = 551.334 €. Steuerlich: 500.000 + 4.000 ./. 10.920 + 19.700 + 2.020 + 14.000 = 528.800 €; ./. 5.600 = 523.200 €." },
      { text: "**Redaktioneller Hinweis zur Punktvergabe:** Die Überschrift nennt für diesen Teil **34 Punkte**, und die Auszählung der Randpunkte ergibt genau 34 – einschließlich der 5 Punkte für die Anlage. Die Randpunkte sind in halben Punkten vergeben; wo die Quelle mehrere Halbpunkte an einem Absatz sammelt, sind sie im Datensatz an dem Block zusammengefasst, zu dem sie gehören." },
      { text: "Redaktioneller Hinweis zu Verschreibern der Quelle – wortlautgetreu übernommen und gekennzeichnet: „patenfähiges Konzept“ (zweimal) statt patentfähig; der Umrechnungskurs „am 31.03.2024 = 1,20 USD“, wo der 31.03.2026 gemeint ist; „Vorläufiger Jahresüberschuss 2023“ in der Anlage statt 2025; „dem notwendigen betrieblichen Umlaufvermögens“; „das u. a. BMF-Schreibens“; und „Absetzung für außerplanmäßige Abschreibung (AfaA)“ im Sachverhalt, wo es Absetzung für außergewöhnliche Abnutzung heißt." },
    ],
  },
];

export default bilOriginalklausuren;
