/* Amtliche Prüfungsaufgaben Einkommen- und Ertragsteuerrecht (K2).

   Die Original-Aufgabentexte des zweiten Prüfungstages der
   Steuerberaterprüfung im amtlichen Wortlaut – ohne Bearbeitung, ohne
   Fortschreibung auf einen neueren Rechtsstand und mit den Jahreszahlen des
   jeweiligen Prüfungsjahrgangs.

   Wichtig und ausdrücklich: Die Quelle enthält zu diesen Klausuren KEINE
   Lösung. Sie ist die reine Aufgabenstellung. Der Lösungsabschnitt jedes
   Eintrags sagt das offen und erfindet nichts; er nennt stattdessen, was die
   Aufgabenstellung selbst vorgibt, und verweist auf die Stellen im Campus, an
   denen dieselben Rechtsfragen mit Musterlösung behandelt sind. Die fehlenden
   Musterlösungen sind in docs/offene-quellen.md, Abschnitt A, vermerkt.

   Die Klausur besteht aus drei Teilen: Einkommensteuer, Gewerbesteuer und
   Körperschaftsteuer. Das Feld `fach` ordnet jeden Eintrag dem passenden
   Campus zu ("est", "gewst", "kst"); jeder Campus zeigt nur seine eigenen
   Einträge.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen.
   Blocktypen wie bei den übrigen Klausurdatensätzen: text | titel | tabelle. */

export const k2PruefungsklausurenQuelle = {
  reihe: "Steuerberaterprüfung · Prüfungsaufgaben aus dem Gebiet Einkommen- und Ertragsteuerrecht · amtlicher Wortlaut",
  stand: "Prüfungsjahrgang 2021/2022, Veranlagungszeitraum 2020 · Rechtsstand des Prüfungstages",
  verfasser: "Amtliche Prüfungsaufgabe der Steuerberaterprüfung – ohne Musterlösung",
  didaktik: [
    "Der zweite Prüfungstag dauert wie die übrigen sechs Stunden und zerfällt in Einkommensteuer, Gewerbesteuer und Körperschaftsteuer. Der Einkommensteuerteil trägt dabei das meiste Gewicht und besteht seinerseits aus mehreren voneinander unabhängigen Sachverhalten, die jeweils ihre eigene Aufgabenstellung und ihre eigenen Hinweise haben – wer nur den ersten Hinweisblock liest, übersieht, dass sich die Vorgaben von Sachverhalt zu Sachverhalt ändern.",
    "Zu diesen Aufgabentexten liegt keine Musterlösung vor. Die Aufgabenstellung selbst bleibt aber vollständig auswertbar: Sie sagt jedes Mal, welcher Zeitraum zu beurteilen ist, worauf ausdrücklich nicht einzugehen ist, ob Anträge als gestellt gelten und welches Ergebnis bei mehreren Lösungswegen zu wählen ist. Diese Sätze sind die halbe Klausur – sie schließen ganze Prüfungspfade aus und öffnen andere.",
    "Die Jahreszahlen sind die des Originaljahrgangs; die Klausur betrifft den Veranlagungszeitraum 2020. Wer sie nach heutigem Rechtsstand löst, muss selbst prüfen, was sich seither geändert hat – etwa bei der Verlustverrechnung für Termingeschäfte nach § 20 Abs. 6 EStG, bei der energetischen Sanierung nach § 35c EStG oder bei der Hinzurechnungsbesteuerung der §§ 7 ff. AStG, die zum 01.01.2022 neu gefasst wurde.",
  ],
};

const KEINE_LOESUNG = "Die Quelle ist die amtliche Prüfungsaufgabe im Wortlaut und enthält keine Lösung. Es wird hier bewusst keine erfunden: Jede Zahl, die an dieser Stelle stünde, wäre eine eigene Rechnung und keine Musterlösung. Die fehlenden Lösungen sind in docs/offene-quellen.md, Abschnitt A, vermerkt.";

const HINWEISE_STANDARD = [
  { text: "Erforderliche Anträge gelten als gestellt. Erforderliche Nachweise gelten als erbracht." },
  { text: "Auf Cent lautende Beträge sind (auch in Zwischenrechnungen) abzurunden." },
  { text: "In Zweifelsfällen ist der aktuellen Verwaltungsauffassung zu folgen." },
];

export const k2Pruefungsklausuren = [
  {
    id: "k2-pk-2021-est-sv1-anne-t",
    fach: "est",
    block: "amtlich",
    blockLabel: "Steuerberaterprüfung · amtliche Prüfungsaufgabe",
    nummer: 1,
    jahrgang: "2021/2022",
    teil: "I",
    wertung: "ohne Punkteangabe in der Quelle",
    title: "Teil I, Sachverhalt 1 – Anne T. (Prüfung 2021/2022): ein Zweifamilienhaus in vorweggenommener Erbfolge, eine energetische Sanierung und eine Aufstockung",
    thema: "Ein Zweifamilienhaus, das die Eltern Anfang der sechziger Jahre gebaut haben und das steuerlich längst abgeschrieben ist, geht zum 01.01.2020 auf die Tochter über – gegen eine Ausgleichszahlung von 350.000 € an den Bruder, bei der Leistung und Gegenleistung ausdrücklich nicht kaufmännisch abgewogen sind. Damit steht schon der erste Satz der Aufgabe: Ist die Übertragung unentgeltlich, teilentgeltlich oder voll entgeltlich? Danach folgen drei Baumaßnahmen mit drei verschiedenen Rechtsfolgen – eine energetische Sanierung mit Fachunternehmerbescheinigungen, eine Baderneuerung, die nicht dazugehört, und eine Aufstockung um ein ganzes Dachgeschoss, das ab Dezember vermietet wird. Die Wohnung im Obergeschoss ist an die Schwester des Vaters zur halben ortsüblichen Miete vermietet; die Tochter lebt im Übrigen von Kapitalerträgen aus Dividenden, Zinsen, Aktienverlusten und Termingeschäften",
    rechtsstand: "Rechtsstand des Prüfungsjahrgangs 2021/2022 · Veranlagungszeitraum 2020",
    quelle: "Steuerberaterprüfung 2021/2022, Prüfungsaufgaben aus dem Gebiet Einkommen- und Ertragsteuerrecht, Teil I: Einkommensteuer, Sachverhalt 1 · amtlicher Aufgabentext, Bearbeitungszeit 6 Stunden",
    normen: [
      "De-minimis-Verordnung",
    ],
    themen: ["Amtliche Prüfungsaufgabe", "Ohne Musterlösung", "Vorweggenommene Erbfolge", "Gleichstellungsgeld", "Verbilligte Vermietung", "Energetische Sanierung", "Anschaffungsnaher Aufwand", "Herstellungskosten", "Kapitaleinkünfte", "Termingeschäfte"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2021/2022 · Prüfungsaufgaben aus dem Gebiet Einkommen- und Ertragsteuerrecht · Teil I: Einkommensteuer · Sachverhalt 1" },
      { text: "Bearbeitungszeit: 6 Stunden. Hilfsmittel: Die zugelassenen Hilfsmittel ergeben sich aus den gleich lautenden Erlassen der obersten Finanzbehörden der Länder. Vor der Bearbeitung sind Sachverhalt und Aufgaben vollständig zu lesen." },
      { text: "Die Eheleute Ute und Heinz T. (Eheleute T), beide inzwischen 80 Jahre alt und wohnhaft in Bonn, haben Anfang der 60er Jahre auf einem 1.000 m² großen Grundstück, das sie für umgerechnet 10.000 € (inkl. Nebenkosten) erworben haben, ein Zweifamilienhaus errichtet. Das Erdgeschoss (EG) hat eine Wohnfläche von 150 m² und wurde seit Fertigstellung von den Eheleuten T zu eigenen Wohnzwecken selbst genutzt. Das Obergeschoss (OG) mit einer Wohnfläche von 100 m² wurde an Mathilda S. (MS), der Schwester von Heinz T., zu Wohnzwecken vermietet. MS zahlt für die Wohnung jeweils pünktlich zum Monatsersten eine monatliche Kaltmiete i. H. v. 500 € zzgl. der ortsüblichen umlagefähigen Nebenkosten i. H. v. 250 €. Die ortsübliche Kaltmiete für eine vergleichbare Wohnung beträgt im Jahr 2020 durchgängig 1.000 €." },
      { text: "Die Herstellungskosten, die sich gleichmäßig auf die einzelnen Gebäudeteile entsprechend der Wohnflächen verteilen, betrugen insgesamt umgerechnet 125.000 €. Im Laufe der Jahre hat die Immobilie erheblich an Wert gewonnen. So betrug der Verkehrswert des Gebäudes am 1. Januar 2020 500.000 € (bei gleichmäßiger Verteilung entsprechend der Wohnflächen). Steuerlich war das Haus zu diesem Zeitpunkt hingegen bereits vollständig abgeschrieben. Der Verkehrswert für den Grund und Boden betrug zum 1. Januar 2020 200 €/m²." },
      { text: "In 2019 beschlossen die Eheleute T, das Zweifamilienhaus auf ihre Tochter Anne T. (AT) im Rahmen der vorweggenommenen Erbfolge zu übertragen. In dem notariell beurkundeten Vertrag vom 10. Dezember 2019 ist als Übergang von Nutzen und Lasten der 1. Januar 2020 vereinbart. Um Streitereien mit ihrem Bruder Bernd T. (BT) zu vermeiden, verpflichtete sich AT gegenüber ihren Eltern, an BT eine Ausgleichszahlung i. H. v. 350.000 € zu leisten. Dabei sind Leistung und Gegenleistung weder objektiv noch subjektiv nach kaufmännischen Gesichtspunkten gegeneinander abgewogen worden. Die im Zusammenhang mit der Eigentumsumschreibung angefallenen Nebenkosten i. H. v. 14.000 € (Notar, Gerichtskosten, etc.) wurden von AT in 2020 gezahlt." },
      { text: "Zum 31. Dezember 2019 zogen die Eheleute T aus der Wohnung im EG aus und bewohnen seitdem eine Seniorenresidenz in Bonn. AT führte den zwischen den Eheleuten T und MS bestehenden Mietvertrag über den 1. Januar 2020 hinaus unverändert fort." },
      { text: "Nach dem Auszug der Eheleute T ließ AT das Gebäude zunächst umfangreich energetisch sanieren, bevor sie selbst die Wohnung im EG bezog. Dabei ließ sie die Fenster und die Heizung des Hauses erneuern und eine neue Wärmedämmfassade an das Gebäude anbringen. Im Zuge der energetischen Sanierungsmaßnahmen ließ AT auch das Bad im OG erneuern. Eine wesentliche Zustandsverbesserung des Gebäudes wurde mit den gesamten Maßnahmen nicht erreicht. Die Maßnahmen wurden im Mai 2020 fertiggestellt (Abnahme)." },
      { text: "Im Anschluss ließ AT das Gebäude um ein weiteres Stockwerk (Dachgeschoss – DG –) aufstocken. Den entsprechenden Bauantrag hierzu reichte AT im Januar 2020 beim Bauamt ein. In diesem DG ist eine neue Wohnung mit einer Gesamtwohnfläche von 80 m² entstanden, die nach der Fertigstellung zum 30. November 2020 ab dem 1. Dezember 2020 zu einer ortsüblichen Miete i. H. v. 800 € zzgl. der ortsüblichen umlagefähigen Nebenkosten i. H. v. 200 € dauerhaft zu Wohnzwecken vermietet wurde. Die Miete wurde pünktlich zum Monatsersten an AT überwiesen." },
      { text: "Die von den beteiligten Unternehmen in Rechnung gestellten und in besonderen Fachunternehmerbescheinigungen ausgewiesenen Kosten für die energetischen Sanierungsmaßnahmen lassen sich wie folgt zusammenfassen (jeweils inkl. 19 % Umsatzsteuer):" },
      { typ: "tabelle", spalten: ["Maßnahme", "Kosten"], zeilen: [
        ["Erneuerung der Fenster im EG", "12.000 €"],
        ["Erneuerung der Fenster im OG", "8.000 €"],
        ["Erneuerung Heizungsanlage", "15.000 €"],
        ["Anbringung Wärmedämmfassade", "14.000 €"],
        ["Kosten Energieberater", "1.000 €"],
      ] },
      { text: "Die Gesamtkosten mit Ausnahme der Kosten für die Erneuerung der Fenster verteilen sich gleichmäßig entsprechend der Wohnflächen auf das Bestandsgebäude (EG und OG) und wurden von AT im Juni 2020 auf die Konten der beteiligten Fachunternehmen überwiesen." },
      { text: "Der Aufwand für die Baderneuerung betrug insgesamt 20.000 €. Die Gesamtkosten für den Anbau betrugen insgesamt 200.000 €. Sämtliche Rechnungsbeträge wurden von AT in 2020 an die ausführenden Fachunternehmen überwiesen." },
      { text: "AT zahlte in 2020 für den Unterhalt des Gebäudes (Strom, Wasser, Heizung, etc.) monatlich 700 €, davon entfallen 400 € auf das EG und 300 € auf das OG. Im Dezember 2020 zahlt AT für die Wohnung im DG zusätzlich 250 € an Nebenkosten. Nebenkostenabrechnungen hat AT gegenüber ihren Mietern in 2020 nicht erstellt, sodass insoweit keine weiteren Zahlungen geflossen sind." },
      { text: "AT, die vor Jahren mehrere Millionen Euro im Lotto gewonnen hat, lebte bisher ausschließlich von ihren Kapitalerträgen. Ausweislich ihrer Depotabrechnungen erzielte AT im Jahr 2020 folgende Kapitalerträge bzw. -verluste, für die in zutreffender Höhe Kapitalertragsteuer einbehalten wurde:" },
      { typ: "tabelle", spalten: ["Kapitalertrag", "Betrag"], zeilen: [
        ["Dividenden", "25.000 €"],
        ["Zinsen", "15.000 €"],
        ["Verluste aus der Veräußerung von Aktien", "- 10.000 €"],
        ["Gewinne aus Termingeschäften", "40.000 €"],
      ] },
    ],
    aufgabe: [
      { text: "Würdigen Sie zunächst steuerrechtlich die Übertragung des Zweifamilienhauses und beurteilen Sie dann die einkommensteuerrechtlichen Auswirkungen des Sachverhalts für AT, bezogen auf den Veranlagungszeitraum 2020. Gehen Sie dabei auch auf tarifliche Besonderheiten ein. Begründen Sie Ihre Ergebnisse jeweils ausführlich unter Hinweis auf die einschlägigen Rechtsgrundlagen." },
      { text: "Auf allgemeine Fragen (Einkommensteuerpflicht, Tarif, etc.) ist nicht einzugehen. Gehen Sie in Ihrer Lösung davon aus, dass AT keine schädlichen De-minimis-Beihilfen im Sinne der De-minimis-Verordnung erhält. Gehen Sie aus Vereinfachungsgründen davon aus, dass AT mit ihren Einkünften einem linearen Steuersatz von 30 % unterliegt." },
      { typ: "titel", text: "Hinweise" },
      ...HINWEISE_STANDARD,
      { text: "Sofern verschiedene Lösungsmöglichkeiten bestehen, ist das für 2020 günstigste steuerliche Ergebnis zu wählen." },
    ],
    loesung: [
      { typ: "titel", text: "Keine Musterlösung in der Quelle" },
      { text: KEINE_LOESUNG },
      { text: "Was die Aufgabenstellung selbst vorgibt und was daher ohne Lösung feststeht: Die Klausur verlangt zwei Schritte in dieser Reihenfolge – erst die steuerrechtliche Würdigung der Übertragung, dann deren Auswirkungen auf den Veranlagungszeitraum 2020. Der Satz, dass Leistung und Gegenleistung „weder objektiv noch subjektiv nach kaufmännischen Gesichtspunkten gegeneinander abgewogen“ wurden, ist die entscheidende Sachverhaltsangabe für den ersten Schritt. Für die Kapitaleinkünfte ist ausdrücklich auch auf tarifliche Besonderheiten einzugehen, während allgemeine Tariffragen ausgeschlossen sind; der lineare Steuersatz von 30 % ist vorgegeben, damit eine Vergleichsrechnung überhaupt möglich ist. Die De-minimis-Klausel und die Fachunternehmerbescheinigungen weisen auf die Förderung energetischer Maßnahmen hin." },
      { text: "Zeitliche Einordnung: Die Klausur betrifft den Veranlagungszeitraum 2020. Zu prüfen ist bei einer Lösung nach heutigem Rechtsstand insbesondere, was sich seither bei der Verrechnung von Verlusten aus Termingeschäften und bei der Förderung energetischer Gebäudesanierung geändert hat." },
      { text: "Parallelfälle mit vollständiger Musterlösung im Campus: Die Abgrenzung zwischen unentgeltlicher, teilentgeltlicher und voll entgeltlicher Übertragung sowie die Behandlung von Gleichstellungsgeldern behandelt der Einkommensteuer-Campus in den Einheiten zur vorweggenommenen Erbfolge. Die verbilligte Vermietung an Angehörige und die Grenze des § 21 Abs. 2 EStG steht dort ebenfalls; die Abgrenzung von Erhaltungsaufwand, anschaffungsnahem Aufwand und Herstellungskosten zeigt Teil I der Prüfung 2012 (Einzelunternehmen Winter) im Bilanzen-Campus." },
    ],
  },
  {
    id: "k2-pk-2021-est-sv2-thomas-s",
    fach: "est",
    block: "amtlich",
    blockLabel: "Steuerberaterprüfung · amtliche Prüfungsaufgabe",
    nummer: 2,
    jahrgang: "2021/2022",
    teil: "I",
    wertung: "ohne Punkteangabe in der Quelle",
    title: "Teil I, Sachverhalt 2 – Thomas S. (Prüfung 2021/2022): eine Steuerberatungspraxis wird in eine GmbH eingebracht – ohne Oldtimer und ohne Honorarforderungen",
    thema: "Eine Einnahmen-Überschuss-Rechnung trifft auf eine Sacheinlage. Zum 31.12.2020 bringt ein Steuerberater seine Praxis gegen neue Anteile in eine eigens gegründete GmbH ein – aber zwei Positionen bleiben ausdrücklich draußen: ein Oldtimer mit Buchwert 0 € und Teilwert 50.000 €, der nur zu Werbezwecken gehalten wurde, und die offenen Honorarforderungen über 40.000 €, die er drei Monate später privat vereinnahmt. Beides ist der Kern der Aufgabe, denn es entscheidet darüber, ob alle wesentlichen Betriebsgrundlagen übergehen. Dazu ein Praxiswert von 500.000 €, ein Bürogebäude mit Bauantrag von 1986, Einbringungsnebenkosten von 60.000 €, die die GmbH trägt – und am Ende ein Verkauf des gesamten GmbH-Anteils für 2 Mio. € zum 31.12.2023, drei Jahre nach der Einbringung",
    rechtsstand: "Rechtsstand 2020 (ausdrücklich vorgegeben) · Veranlagungszeiträume 2020 und 2023",
    quelle: "Steuerberaterprüfung 2021/2022, Prüfungsaufgaben aus dem Gebiet Einkommen- und Ertragsteuerrecht, Teil I: Einkommensteuer, Sachverhalt 2 · amtlicher Aufgabentext",
    normen: [
      "§ 4 Abs. 3 EStG",
    ],
    themen: ["Amtliche Prüfungsaufgabe", "Ohne Musterlösung", "Einbringung", "Sacheinlage", "Wesentliche Betriebsgrundlage", "Wechsel der Gewinnermittlungsart", "Gewillkürtes Betriebsvermögen", "Sperrfrist", "Anteilsveräußerung"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2021/2022 · Teil I: Einkommensteuer · Sachverhalt 2" },
      { text: "Steuerberater Thomas S. (TS), ledig, 50 Jahre alt und wohnhaft in Dortmund, betreibt seit 2009 in Dortmund in eigenen Betriebsräumen eine Steuerberatungskanzlei. TS ermittelt seinen Gewinn zulässigerweise durch Einnahmen-Überschussrechnung nach § 4 Abs. 3 EStG." },
      { text: "TS beschließt, seine Steuerberatungspraxis zum 31. Dezember 2020 in eine eigens für diesen Zweck neu gegründete S-GmbH mit Sitz und Ort der Geschäftsleitung in Dortmund gegen neue Anteile einzubringen. Das Stammkapital der S-GmbH beträgt 25.000 € und wurde von TS aus seinem Privatvermögen bar eingezahlt. TS ist Alleingesellschafter der S-GmbH." },
      { text: "TS und die S-GmbH haben vertraglich u. a. Folgendes vereinbart: „Die S-GmbH hat durch Gesellschafterbeschluss vom 15. Dezember 2020 ihr Stammkapital in Höhe von 25.000 € um 25.000 € auf 50.000 € durch Ausgabe eines neuen Geschäftsanteils im Nennbetrag von 25.000 € gegen Sacheinlage erhöht. Der neue Geschäftsanteil wurde zu seinem Nennwert ausgegeben. Zur Übernahme des neuen Geschäftsanteils im Nennbetrag von 25.000 € wurde TS dergestalt zugelassen, dass er als Sacheinlagen auf diesen neuen Geschäftsanteil seine Steuerberatungspraxis, die nicht im Handelsregister eingetragen ist, mit allen Aktiva mit Ausnahme des Pkw „Oldtimer“ (Wert: 50.000 €), und der ausstehenden Honorarforderungen (Wert: 40.000 €) und mit allen Passiva und sämtlichen zur Steuerberatungspraxis gehörenden Vermögensgegenständen und Vertragsbeziehungen mit schuldrechtlicher Wirkung zum 31. Dezember 2020 in die Gesellschaft einbringt.“" },
      { text: "Der bisher zum 31. Dezember 2020 ermittelte vorläufige Gewinn aus der Steuerberatungskanzlei beträgt 50.000 €. Soweit unten nicht anders dargestellt, ist von einer zutreffenden Gewinnermittlung auszugehen." },
      { text: "Zur eingebrachten Steuerberatungspraxis gehört auch das zu seinem Betriebsvermögen gehörende Bürogebäude, für welches der Bauantrag im Juni 1986 gestellt worden ist. TS hat das Betriebsgrundstück zum 1. Januar 2009 für 500.000 € erworben (Anteil Grund und Boden: 20 %). Der gemeine Wert des Betriebsgrundstücks beträgt das ganze Jahr 2020 über 600.000 € (Anteil Grund und Boden: 20 %). Die im Zusammenhang mit der einbringungsbedingten Grundstücksübertragung entstandenen Nebenkosten (Grunderwerbsteuer, Notar, etc.) i. H. v. 60.000 € wurden von der S-GmbH übernommen. Weitere Kosten sind im Zusammenhang mit der Einbringung im Jahr 2020 nicht angefallen." },
      { text: "Zum Betriebsvermögen des TS gehört auch ein Oldtimer (Buchwert: 0 €, Teilwert: 50.000 €), den TS nicht in die S-GmbH einbringt, sondern seinem Privatvermögen zuführt. Der Oldtimer wurde von TS als gewillkürtes Betriebsvermögen ausschließlich zu Werbezwecken eingesetzt. Für betriebsnotwendige Fahrten nutzt TS einen geleasten Firmen-Pkw. Die bisher noch ausstehenden Honorarforderungen gegenüber Mandanten i. H. v. 40.000 € werden von TS ebenfalls nicht in die S-GmbH eingebracht, sondern zum 15. März 2021 privat vereinnahmt." },
      { text: "Der Buchwert (= Teilwert) der Betriebs- und Geschäftsausstattung beträgt zum 31. Dezember 2020 unstreitig 150.000 €. Abschreibungen wurden insoweit zutreffend in der vorläufigen Gewinnermittlung zum 31. Dezember 2020 erfasst. Das betriebliche Bankkonto wies zum 31. Dezember 2020 einen Stand i. H. v. 100.000 € aus. Die Verbindlichkeiten im Zusammenhang mit der Anschaffung des Betriebsgrundstücks beliefen sich zum 31. Dezember 2020 auf 200.000 €. Die zum 31. Dezember 2020 bestehenden Lohnverbindlichkeiten beliefen sich auf 30.000 €. Sonstige Verbindlichkeiten oder Forderungen bestanden nicht." },
      { text: "Der Praxiswert (= Firmenwert) beträgt zum 31. Dezember 2020 unstreitig 500.000 €. Weitere, im Sachverhalt nicht genannte stille Reserven existieren nicht. Zum 31. Dezember 2023 verkauft TS seinen gesamten Anteil an der S-GmbH für 2 Mio. €. Veräußerungskosten sind TS dabei nicht entstanden." },
    ],
    aufgabe: [
      { text: "Ermitteln Sie die steuerpflichtigen Einkünfte des TS für den Veranlagungszeitraum 2020 sowie die steuerpflichtigen Einkünfte aus der Veräußerung der Anteile an der S-GmbH im Jahre 2023. Gehen Sie dabei vom Rechtsstand 2020 aus. Stellen Sie auch die erforderlichen Bilanzen für TS und die S-GmbH auf. Buchungssätze sind nicht zu bilden." },
      { text: "Begründen Sie Ihre Ergebnisse jeweils ausführlich unter Hinweis auf die einschlägigen Rechtsgrundlagen. Auf allgemeine Fragen (Einkommensteuerpflicht, Tarif, etc.) ist nicht einzugehen." },
      { typ: "titel", text: "Hinweise" },
      { text: "Erforderliche Anträge gelten als gestellt. Erforderliche Nachweise gelten als erbracht." },
      { text: "Auf etwaige steuerliche Auswirkungen bei der Gewerbesteuer, Grunderwerbsteuer, Umsatzsteuer und den Solidaritätszuschlag ist nicht einzugehen." },
      { text: "Auf Cent lautende Beträge sind (auch in Zwischenberechnungen) abzurunden. In Zweifelsfällen ist der aktuellen Verwaltungsauffassung zu folgen." },
      { text: "Sofern verschiedene Lösungsmöglichkeiten bestehen, ist das für 2020 und 2023 günstigste steuerliche Ergebnis zu wählen." },
    ],
    loesung: [
      { typ: "titel", text: "Keine Musterlösung in der Quelle" },
      { text: KEINE_LOESUNG },
      { text: "Was die Aufgabenstellung selbst vorgibt: ausdrücklich Rechtsstand 2020, ausdrücklich zwei Veranlagungszeiträume (2020 und 2023) und ausdrücklich das für **beide** Jahre zusammen günstigste Ergebnis – die Wahl des Wertansatzes bei der Einbringung wirkt also über drei Jahre hinweg fort. Bilanzen für TS und für die S-GmbH sind aufzustellen, Buchungssätze nicht. Gewerbesteuer, Grunderwerbsteuer, Umsatzsteuer und Solidaritätszuschlag sind ausgeschlossen, obwohl der Sachverhalt Grunderwerbsteuer in den 60.000 € Nebenkosten ausdrücklich erwähnt." },
      { text: "Die beiden zurückbehaltenen Positionen – der Oldtimer als gewillkürtes Betriebsvermögen, das nur Werbezwecken diente, und die Honorarforderungen, die erst am 15. März 2021 zufließen – sind der Angelpunkt des Falls: Der Sachverhalt sagt eigens dazu, dass TS für betriebsnotwendige Fahrten einen geleasten Firmen-Pkw nutzt, und beziffert beide Werte. Auch der Bauantrag von Juni 1986 für das Bürogebäude ist keine Beiläufigkeit, sondern eine AfA-Angabe." },
      { text: "Parallelfälle mit vollständiger Musterlösung im Campus: Die Einbringung eines Betriebs in eine Kapitalgesellschaft nach § 20 UmwStG, die Wahl zwischen Buchwert, Zwischenwert und gemeinem Wert und die Sperrfrist des § 22 UmwStG behandelt der Reiter „Umwandlungssteuerrecht“ (Klausur 3). Der Wechsel von der Einnahmen-Überschuss-Rechnung zum Bestandsvergleich und der dabei entstehende Übergangsgewinn steht im Einkommensteuer-Campus." },
    ],
  },
  {
    id: "k2-pk-2021-est-sv3-hanno-p",
    fach: "est",
    block: "amtlich",
    blockLabel: "Steuerberaterprüfung · amtliche Prüfungsaufgabe",
    nummer: 3,
    jahrgang: "2021/2022",
    teil: "I",
    wertung: "ohne Punkteangabe in der Quelle",
    title: "Teil I, Sachverhalt 3 – Hanno P. (Prüfung 2021/2022): eine Wohnung in Frankfurt, eine Ltd. auf den Cayman Islands und eine Partnership auf den Bahamas",
    thema: "Der internationale Sachverhalt der Klausur, und er beginnt mit der Frage, die alles trägt: Begründet eine 60-Quadratmeter-Wohnung, die dreimal im Jahr für mehrere Wochen genutzt wird, einen Wohnsitz im Inland? Davon hängt ab, ob der in Katar lebende Steuerpflichtige unbeschränkt oder beschränkt steuerpflichtig ist – und damit der ganze Rest. Er hält 100 % an einer Ltd. auf den Cayman Islands ohne Ertragsbesteuerung, die Lizenzrechte an fremdentwickelter Software vermarktet, ein abweichendes Geschäftsjahr hat und 50.000 € ausschüttet. Und er ist zu 40 % an einer bahamaischen Partnership beteiligt, die ein deutsches Bürogebäude für 50 Mio. € gekauft und im November 2020 für 60 Mio. € wieder verkauft hat – und daneben brasilianische Vermietungseinkünfte mit 200.000 € brasilianischer Steuer erzielt. Drei Nicht-DBA-Staaten, kein einziges Abkommen als Rettung",
    rechtsstand: "Rechtsstand des Prüfungsjahrgangs 2021/2022 · Veranlagungszeitraum 2020",
    quelle: "Steuerberaterprüfung 2021/2022, Prüfungsaufgaben aus dem Gebiet Einkommen- und Ertragsteuerrecht, Teil I: Einkommensteuer, Sachverhalt 3 · amtlicher Aufgabentext",
    normen: [
      "Rechtstypenvergleich (Verwaltungsauffassung)",
    ],
    themen: ["Amtliche Prüfungsaufgabe", "Ohne Musterlösung", "Wohnsitz", "Unbeschränkte Steuerpflicht", "Hinzurechnungsbesteuerung", "Rechtstypenvergleich", "Beschränkte Steuerpflicht", "Grundstücksveräußerung", "Anrechnung ausländischer Steuern"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2021/2022 · Teil I: Einkommensteuer · Sachverhalt 3" },
      { text: "Hanno P. (HP), ledig und wohnhaft in Katar (Nicht-DBA-Staat), besitzt in Frankfurt am Main eine 60 m² große und vollumfänglich eingerichtete Eigentumswohnung mit drei Zimmern, die er über Jahre hinweg regelmäßig dreimal jährlich zu bestimmten Zeiten über mehrere Wochen nutzt, wenn er seine Schwester in Deutschland besucht. HP nutzt die Wohnung ausschließlich zu eigenen Wohnzwecken. Die Wohnung benutzt er ausschließlich alleine." },
      { text: "HP hält 100 % der Anteile an der erst am 1. April 2019 gegründeten O-Ltd. mit Sitz auf den Cayman Islands (Nicht-DBA-Staat). Die Gesellschaft ist im Rechtstypenvergleich vergleichbar mit einer deutschen Kapitalgesellschaft. Die O-Ltd. hat ein vom Kalenderjahr abweichendes Geschäftsjahr (1. April bis 31. März). Die O-Ltd. unterliegt nach dem nationalen Recht auf den Cayman Islands keiner Ertragsbesteuerung. Die O-Ltd. vermarktet im Wesentlichen Lizenzrechte an von Dritten entwickelten Softwareprodukten und erzielt hieraus im Geschäftsjahr 1. April 2019 bis 31. März 2020 einen nach deutschen Gewinnermittlungsvorschriften ermittelten Gewinn i. H. v. 150.000 €. Am 10. Juni 2020 schüttet die O-Ltd. 50.000 € (ohne Quellensteuerbelastung) an HP aus." },
      { text: "HP ist mit 40 % an der B-Property Partnership (BP-Partnership) beteiligt, die ihren Sitz auf den Bahamas (Nicht-DBA-Staat) hat. Die Gesellschaft ist im Rechtstypenvergleich vergleichbar mit einer deutschen nicht gewerblich geprägten Personengesellschaft. Die BP-Partnership hat ein kalenderjahrgleiches Wirtschaftsjahr. An der BP-Partnership sind neben HP ausschließlich nicht in Deutschland ansässige Personen beteiligt." },
      { text: "Die BP-Partnership ist Eigentümerin eines im Jahr 2005 errichteten Bürogebäudes in Deutschland, das sie am 15. Dezember 2015 (= Übergang Nutzen und Lasten) für 50 Mio. € erworben hat (Anteil Grund und Boden: 20 %). Aus der Vermietung der Büroflächen erzielt sie im Jahr 2020 nach deutschem Steuerrecht ermittelte Einkünfte i. H. v. 3 Mio. €. Zum 14. November 2020 (= Übergang Nutzen und Lasten) hat die BP-Partnership den Gebäudekomplex an einen ausländischen Investor für 60 Mio. € veräußert. Die Veräußerungskosten (Grunderwerbsteuer und Notar) wurden ausschließlich vom Erwerber getragen. Im Zusammenhang mit der Veräußerung sind der BP-Partnership Rechtsberatungskosten i. H. v. 300.000 € entstanden." },
      { text: "Die BP-Partnership erzielt aus der Vermietung einer weiteren Immobilie in Brasilien (Nicht-DBA-Staat) Vermietungseinkünfte i. H. v. 1 Mio. €. In Brasilien sind dabei Ertragsteuern zu Lasten der BP-Partnership i. H. v. 200.000 € festgesetzt und von dieser auch tatsächlich gezahlt worden. Die BP-Partnership kehrt am 15. Dezember 2020 einen Gesamtbetrag i. H. v. 2 Mio. € an ihre Gesellschafter aus. Weitere Tätigkeiten übt die BP-Partnership nicht aus." },
    ],
    aufgabe: [
      { text: "Beurteilen Sie die einkommensteuerlichen Auswirkungen des Sachverhalts für HP, bezogen auf den Veranlagungszeitraum 2020. Ermitteln Sie die steuerpflichtigen Einkünfte des HP für den Veranlagungszeitraum 2020. Gehen Sie dabei auch auf die persönliche Steuerpflicht des HP und auf tarifliche Besonderheiten ein." },
      { text: "Begründen Sie Ihre Ergebnisse jeweils ausführlich unter Hinweis auf die einschlägigen Rechtsgrundlagen." },
      { typ: "titel", text: "Hinweise" },
      ...HINWEISE_STANDARD,
      { text: "Sofern verschiedene Lösungsmöglichkeiten bestehen, ist das für 2020 günstigste steuerliche Ergebnis zu wählen." },
    ],
    loesung: [
      { typ: "titel", text: "Keine Musterlösung in der Quelle" },
      { text: KEINE_LOESUNG },
      { text: "Was die Aufgabenstellung selbst vorgibt: Es ist ausdrücklich auch auf die **persönliche Steuerpflicht** einzugehen – die Wohnungsfrage ist damit nicht Vorfrage, sondern Prüfungsgegenstand. Ebenso ausdrücklich gefragt sind die tariflichen Besonderheiten. Alle drei beteiligten Staaten sind im Sachverhalt eigens als Nicht-DBA-Staaten bezeichnet; die Rechtstypenvergleiche für die Ltd. und für die Partnership sind ebenfalls vorgegeben und damit nicht mehr zu begründen." },
      { text: "Zeitliche Einordnung: Die Klausur betrifft den Veranlagungszeitraum 2020. Die Hinzurechnungsbesteuerung der §§ 7 ff. AStG ist zum 01.01.2022 neu gefasst worden – insbesondere beim Beherrschungskriterium und beim Wegfall des Zeitversatzes über den „Hinzurechnungsbetrag zum Ablauf des Wirtschaftsjahres“. Das abweichende Geschäftsjahr der O-Ltd. (1. April bis 31. März) ist im Sachverhalt eigens erwähnt und deshalb nach dem Rechtsstand des Prüfungsjahrgangs zu würdigen." },
      { text: "Parallelfälle mit vollständiger Musterlösung im Campus: Beschränkte und unbeschränkte Steuerpflicht, § 49 EStG und die Anrechnung ausländischer Steuern nach § 34c EStG behandelt der Reiter „Internationales Steuerrecht“ (Klausur 2); dort stehen auch die Hinzurechnungsbesteuerung und der Rechtstypenvergleich. Die Zurechnung von Grundstückseinkünften einer ausländischen Personengesellschaft berührt außerdem der Reiter „Personengesellschaften“ (Klausur 3)." },
    ],
  },
];

export default k2Pruefungsklausuren;
