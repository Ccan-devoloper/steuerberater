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
   Einträge. Der Prüfungstag 2021/2022 ist damit vollständig: drei
   Einkommensteuer-Sachverhalte, der Gewerbesteuerteil und der
   Körperschaftsteuerteil.

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
  {
    id: "k2-pk-2021-gewst-max-ohg",
    fach: "gewst",
    block: "amtlich",
    blockLabel: "Steuerberaterprüfung · amtliche Prüfungsaufgabe",
    nummer: 4,
    jahrgang: "2021/2022",
    teil: "II",
    wertung: "ohne Punkteangabe in der Quelle",
    title: "Teil II – MAX-OHG (Prüfung 2021/2022): zwei Geschäftszweige, eine stille Beteiligung nur an einem davon – und die Frage, ob daraus ein oder zwei Gewerbebetriebe werden",
    thema: "Eine kompakte Gewerbesteueraufgabe, die vollständig an einer einzigen Weichenstellung hängt. Die OHG führt Baustoffgroßhandel und Baumaschinenverleih als getrennte Geschäftseinheiten mit eigenen Räumen, eigener Belegschaft und eigener Buchhaltung. An nur einem der beiden Zweige ist eine Dritte still beteiligt – mit 20 % an Gewinn und Verlust, mit Beteiligung an den stillen Reserven, mit Kontrollrechten nach § 716 BGB und mit Widerspruchsrecht bei außergewöhnlichen Geschäften. Dieselbe Person ist zugleich Prokuristin mit 80.000 € Gehalt und Sozialversicherungsbeiträgen. Der Gesamtgewinn von 150.000 € setzt sich aus 350.000 € Gewinn im Verleih und 200.000 € Verlust im Großhandel zusammen – ob daraus ein Messbetrag wird oder zwei, entscheidet alles Weitere",
    rechtsstand: "Rechtsstand des Prüfungsjahrgangs 2021/2022 · Erhebungszeitraum 2020",
    quelle: "Steuerberaterprüfung 2021/2022, Prüfungsaufgaben aus dem Gebiet Einkommen- und Ertragsteuerrecht, Teil II: Gewerbesteuer · amtlicher Aufgabentext",
    normen: [
      "§ 4 Abs. 1, § 5 EStG", "§ 4 Abs. 4a bis 5b EStG",
      "§ 716 BGB",
    ],
    themen: ["Amtliche Prüfungsaufgabe", "Ohne Musterlösung", "Sachliche Gewerbesteuerpflicht", "Persönliche Gewerbesteuerpflicht", "Mehrheit von Betrieben", "Atypisch stille Gesellschaft", "Mitunternehmerschaft", "Sonderbetriebseinnahmen", "Gewerbesteuermessbetrag"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2021/2022 · Teil II: Gewerbesteuer" },
      { text: "Geschäftsgegenstand der am 1. Juni 2018 gegründeten MAX-OHG mit Sitz und Geschäftsleitung in Köln ist der Betrieb eines Baustoffgroßhandels sowie eines Verleihs für Baumaschinen. Der Gewinn wird durch Betriebsvermögensvergleich nach § 4 Abs. 1, § 5 EStG ermittelt; das Wirtschaftsjahr entspricht dem Kalenderjahr. Gesellschafter der MAX-OHG sind Moritz Meier und Cordula Cordes, die beide ihren Wohnsitz in Köln haben. Moritz Meier und Cordula Cordes sind zu gleichen Teilen am Gewinn und Verlust sowie am Vermögen der MAX-OHG beteiligt." },
      { text: "Die Geschäftszweige „Baustoffgroßhandel“ sowie „Verleih von Baumaschinen“ werden als selbständige Geschäftseinheiten geführt. Sie sind in getrennten Räumlichkeiten in Köln untergebracht. Sie haben jeweils eine eigenständige Belegschaft und selbständige Buchhaltung. Die Gewinne der Geschäftszweige werden zunächst getrennt ermittelt und sodann zu einem Gesamtgewinn der MAX-OHG zusammengeführt." },
      { text: "Pia Schmidt mit Wohnsitz in Köln ist seit dem 1. Juni 2018 im Rahmen einer stillen Beteiligung am Handelsgewerbe der MAX-OHG beteiligt. Die stille Beteiligung ist auf den Geschäftszweig „Baustoffgroßhandel“ beschränkt. Die Gewinn- und Verlustbeteiligung beträgt 20 % des Gewinns bzw. Verlustes des Geschäftszweigs „Baustoffgroßhandel“. Bei Beendigung der stillen Beteiligung hat Pia Schmidt Anspruch auf eine Beteiligung an den stillen Reserven des Geschäftszweigs „Baustoffgroßhandel“ von 20 %. Pia Schmidt stehen die Kontrollrechte i. S. d. § 716 BGB zu. Sie hat ein Widerspruchsrecht bei Geschäften des Geschäftszweigs „Baustoffgroßhandel“, die über den gewöhnlichen Betrieb hinausgehen." },
      { text: "Pia Schmidt ist seit dem 1. Juni 2018 bei der MAX-OHG als Prokuristin angestellt. Sie ist ausschließlich für den Geschäftszweig „Baustoffgroßhandel“ tätig. Die MAX-OHG führt zutreffend Sozialversicherungsbeiträge für Pia Schmidt an die Sozialversicherungsträger ab." },
      { text: "Der von der MAX-OHG nach Betriebsvermögensvergleich für das Jahr 2020 ermittelte Gewinn beträgt 150.000 €. Auf den Geschäftszweig „Baustoffgroßhandel“ entfällt dabei ein Verlust i. H. v. 200.000 €. Der Gewinn des Geschäftszweigs „Verleih von Baumaschinen“ beträgt 350.000 €." },
      { text: "Bei der Ermittlung des Verlusts des Geschäftszweigs „Baustoffgroßhandel“ hat die MAX-OHG u. a. einen Ertrag i. H. v. 50.000 € (20 % von 250.000 €) aufgrund der Verlustbeteiligung von Pia Schmidt erfasst. Im Zusammenhang mit der Anstellung von Pia Schmidt als Prokuristin hat die MAX-OHG folgende Beträge als Aufwand abgezogen (Berücksichtigung bei der Ermittlung des Verlusts des Geschäftszweigs „Baustoffgroßhandel“):" },
      { typ: "tabelle", spalten: ["Position", "Betrag"], zeilen: [
        ["Gehalt Pia Schmidt (ohne Sozialversicherungsbeiträge)", "80.000 €"],
        ["Arbeitnehmerbeiträge Sozialversicherung Pia Schmidt", "14.000 €"],
        ["Arbeitgeberbeiträge Sozialversicherung Pia Schmidt", "14.000 €"],
      ] },
      { text: "(so in der Quelle: Die Zeile lautet dort „Gehalt Pia Schmidt (ohne Sozialversicherungsbeiträge: 80.000 €“ mit nicht geschlossener Klammer, und „Arbeitnehmereiträge“ statt „Arbeitnehmerbeiträge“.)" },
      { text: "Die nach § 4 Abs. 4a bis 5b EStG nicht abziehbaren Betriebsausgaben betragen für den Geschäftszweig „Verleih von Baumaschinen“ 60.000 €. In der Gewinnermittlung des Geschäftszweigs „Baustoffgroßhandel“ sind keine nach § 4 Abs. 4a bis 5b EStG nicht abziehbaren Betriebsausgaben enthalten." },
    ],
    aufgabe: [
      { text: "1. Beurteilen Sie den Sachverhalt mit Blick auf die sachliche und persönliche Gewerbesteuerpflicht." },
      { text: "2. Ermitteln Sie den bzw. die für den Erhebungszeitraum 2020 festzusetzenden Gewerbesteuermessbeträge." },
      { text: "Begründen Sie Ihre Ergebnisse jeweils ausführlich unter Hinweis auf die einschlägigen Rechtsgrundlagen." },
      { typ: "titel", text: "Hinweise" },
      { text: "Auf die Umsatzsteuer, die Lohnsteuer und Fragen der Sozialversicherungspflicht ist nicht einzugehen." },
      { text: "Erforderliche Anträge gelten als gestellt. Auf Cent lautende Beträge sind (auch in Zwischenberechnungen) abzurunden. In Zweifelsfällen ist der aktuellen Verwaltungsauffassung zu folgen." },
      { text: "Sofern verschiedene Lösungsmöglichkeiten bestehen, ist das für 2020 günstigste steuerliche Ergebnis zu wählen." },
      { text: "Soweit sich Auswirkungen auf die Veranlagung ergeben, müssen auch Punkte behandelt werden, die in einem Grundlagenbescheid festzustellen sind (allerdings ohne formelles Feststellungsverfahren)." },
    ],
    loesung: [
      { typ: "titel", text: "Keine Musterlösung in der Quelle" },
      { text: KEINE_LOESUNG },
      { text: "Was die Aufgabenstellung selbst vorgibt: Gefragt sind ausdrücklich **sachliche und persönliche** Gewerbesteuerpflicht – und dann „der bzw. die“ Gewerbesteuermessbeträge. Die Formulierung im Plural ist selbst der Hinweis darauf, dass die Zahl der Steuergegenstände Teil der Aufgabe ist und nicht feststeht. Der Schlusshinweis, dass auch Punkte zu behandeln sind, die in einem Grundlagenbescheid festzustellen wären, weist auf die gesonderte und einheitliche Feststellung hin, ohne dass das Verfahren selbst darzustellen ist." },
      { text: "Alle Merkmale der stillen Beteiligung sind im Sachverhalt einzeln aufgezählt – Beteiligung an Gewinn und Verlust, Beteiligung an den stillen Reserven bei Beendigung, Kontrollrechte nach § 716 BGB, Widerspruchsrecht bei außergewöhnlichen Geschäften. Diese Aufzählung ist keine Ausschmückung: Sie ist der Prüfungsstoff für die Frage, ob eine typisch oder eine atypisch stille Gesellschaft vorliegt, und davon hängt die Behandlung von Gehalt und Sozialversicherungsbeiträgen der Prokuristin ab." },
      { text: "Die Zahlen der Quelle sind in sich schlüssig: 20 % von 250.000 € ergeben die erfassten 50.000 €, und ./. 250.000 € zuzüglich dieser 50.000 € ergeben den ausgewiesenen Verlust von 200.000 €; ./. 200.000 € und + 350.000 € ergeben den Gesamtgewinn von 150.000 €." },
      { text: "Parallelfälle mit vollständiger Musterlösung im Campus: Die sachliche Gewerbesteuerpflicht, die Abgrenzung mehrerer Betriebe und die Hinzurechnungen und Kürzungen der §§ 8 und 9 GewStG behandelt der Gewerbesteuer-Campus (Klausur 2). Die atypisch stille Gesellschaft als Mitunternehmerschaft und die Behandlung von Sondervergütungen steht im Reiter „Personengesellschaften“ (Klausur 3)." },
    ],
  },
  {
    id: "k2-pk-2021-kst-tip-ag",
    fach: "kst",
    block: "amtlich",
    blockLabel: "Steuerberaterprüfung · amtliche Prüfungsaufgabe",
    nummer: 5,
    jahrgang: "2021/2022",
    teil: "III",
    wertung: "ohne Punkteangabe in der Quelle",
    title: "Teil III – TIP-AG (Prüfung 2021/2022): fünf Beteiligungen, eine Organschaft mit Ausgleichszahlung und ein 30-Millionen-Gewinn, aus dem zwei Einkommen zu entwickeln sind",
    thema: "Der umfangreichste Teil des Prüfungstages – fünf Einzelsachverhalte, die alle auf dieselbe Schlussrechnung zulaufen. Nicht abziehbare Aufwendungen von Vorauszahlungen über Nachzahlungszinsen bis zu Hinterziehungszinsen und Aufsichtsratvergütungen. Eine 5-prozentige Beteiligung, die im Juni gekauft, im Juli mit einer bereits beschlossenen Ausschüttung bedient und im November mit 100.000 € Gewinn wieder verkauft wird – samt Darlehen und Vorfälligkeitsentschädigung. Ein Darlehen an die GmbH des Mehrheitsaktionärs zu 10 % statt fremdüblichen 4 %, bei dem beide anderen Bescheide bereits bestandskräftig sind. Eine Organschaft seit 2012 mit 34.000 € Ausgleichszahlung an den Minderheitsgesellschafter, einer 120.000-€-Rücklage aus 2019 und einer Gewinnabführung, die die Organgesellschaft selbst vorgerechnet hat – und deren Veräußerung mit Nutzen- und Lastenübergang am 31.12.2020 um 24 Uhr. Und schließlich eine GmbH & Co. KG, deren Komplementärin keine Haftungsvergütung erhält, obwohl 10.000 € fremdüblich wären",
    rechtsstand: "Rechtsstand des Prüfungsjahrgangs 2021/2022 · Veranlagungszeitraum 2020",
    quelle: "Steuerberaterprüfung 2021/2022, Prüfungsaufgaben aus dem Gebiet Einkommen- und Ertragsteuerrecht, Teil III: Körperschaftsteuer · amtlicher Aufgabentext",
    normen: [
      "§ 4 Abs. 1, § 5 EStG",
      "§ 14 Abs. 5 KStG", "R 7.2 KStR",
      "§ 233a AO", "§ 235 Abs. 4 AO",
      "§ 302 AktG", "§ 272 Abs. 3 HGB",
    ],
    themen: ["Amtliche Prüfungsaufgabe", "Ohne Musterlösung", "Nichtabziehbare Aufwendungen", "Hinterziehungszinsen", "Aufsichtsratvergütungen", "Streubesitzdividende", "Verdeckte Gewinnausschüttung", "Organschaft", "Ausgleichszahlung", "Gewinnrücklage", "Mitunternehmerschaft"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2021/2022 · Teil III: Körperschaftsteuer" },
      { text: "Geschäftsgegenstand der am 1. Mai 2010 gegründeten TIP-Aktiengesellschaft (TIP-AG) ist das Halten von Beteiligungen sowie die Herstellung und der Vertrieb von Webdiensten. Sitz und Geschäftsleitung der TIP-AG sind in Bochum. Der Gewinn wird durch Betriebsvermögensvergleich nach § 4 Abs. 1, § 5 EStG ermittelt; das Wirtschaftsjahr entspricht dem Kalenderjahr. Olaf Olm mit Wohnsitz in Bochum ist mit einem Anteil von 60 % am Grundkapital der TIP-AG beteiligt. Die übrigen Aktien der TIP-AG befinden sich im Streubesitz. Der von der TIP-AG nach Betriebsvermögensvergleich für das Jahr 2020 ermittelte Gewinn beträgt 30.000.000 €." },
      { typ: "titel", text: "a) Steuern / Aufsichtsratvergütungen" },
      { text: "Die TIP-AG hat folgende Zahlungen gewinnmindernd berücksichtigt:" },
      { typ: "tabelle", spalten: ["Position", "Betrag"], zeilen: [
        ["Körperschaftsteuervorauszahlungen 2020", "3.500.000 €"],
        ["Solidaritätszuschlag zur Körperschaftsteuervorauszahlung 2020", "192.500 €"],
        ["Gewerbesteuervorauszahlungen 2020", "3.700.000 €"],
        ["Umsatzsteuernachzahlung für 2014", "1.000.000 €"],
        ["Zinsen nach § 233a AO zur Umsatzsteuer 2014", "240.000 €"],
        ["Hinterziehungszinsen gem. § 235 AO zur Umsatzsteuer 2014", "40.000 €"],
        ["Aufsichtsratvergütungen", "200.000 €"],
      ] },
      { text: "Rückstellungen zur Körperschaftsteuer, zum Solidaritätszuschlag und zur Gewerbesteuer für 2020 hat die TIP-AG nicht gebildet." },
      { text: "Bei der Ermittlung der Hinterziehungszinsen zur Umsatzsteuer 2014 hat das zuständige Finanzamt Zinsen nach § 233a AO i. H. v. 240.000 € angerechnet (§ 235 Abs. 4 AO). Es hat die verbleibenden Hinterziehungszinsen sowie die Zinsen nach § 233a AO jeweils am 10. September 2020 festgesetzt." },
      { typ: "titel", text: "b) Beteiligung an der SAT-GmbH" },
      { text: "Die TIP-AG hat mit notariellem Vertrag vom 10. Juni 2020 und sofortigem Übergang von Nutzen und Lasten einen 5%igen Anteil an der SAT-GmbH zum Kaufpreis von 500.000 € erworben. Die SAT-GmbH hat ihren Sitz und ihre Geschäftsleitung in Solingen und betreibt dort einen Großhandel für Gartenprodukte. Die Nebenkosten des Erwerbs (Notar-/Gerichtskosten) hat vereinbarungsgemäß der Veräußerer getragen. Die TIP-AG hat den Erwerb wie folgt gebucht:" },
      { typ: "tabelle", spalten: ["Soll", "Betrag", "Haben", "Betrag"], zeilen: [["Beteiligung SAT-GmbH", "500.000 €", "Bank", "500.000 €"]] },
      { text: "Die Gesellschafterversammlung der SAT-GmbH hatte bereits am 1. Juni 2020 eine Gewinnausschüttung i. H. v. 400.000 € beschlossen und als Auszahlungszeitpunkt den 1. Juli 2020 bestimmt. Nach den Bestimmungen des notariellen Kaufvertrags vom 10. Juni 2020 ist der Anspruch auf Auszahlung der nach Abzug der Kapitalertragsteuer und des Solidaritätszuschlags verbleibenden Gewinnausschüttung auf die TIP-AG übergegangen. Die SAT-GmbH hat daraufhin am 1. Juli 2020 einen Betrag i. H. v. 14.725 € an die TIP-AG ausgezahlt. Die TIP-AG hat den Erhalt der Zahlung wie folgt gebucht:" },
      { typ: "tabelle", spalten: ["Soll", "Betrag", "Haben", "Betrag"], zeilen: [
        ["Bank", "14.725 €", "Beteiligungserträge", "20.000 €"],
        ["Steueraufwand (Kapitalertragsteuer)", "5.000 €", "", ""],
        ["Steueraufwand (Solidaritätszuschlag)", "275 €", "", ""],
      ] },
      { text: "Im November 2020 hat sich ein Investor an die TIP-AG mit dem Wunsch gewandt, den Anteil an der SAT-GmbH zum Kaufpreis von 600.000 € zu erwerben. Die TIP-AG ist auf das Angebot eingegangen, obwohl sie den Anteil ursprünglich dauerhaft halten wollte. Der notarielle Kaufvertrag wurde am 10. November 2020 abgeschlossen. Zu diesem Zeitpunkt sind auch Nutzen und Lasten auf den Erwerber übergegangen. Die im Zusammenhang mit der Übertragung angefallenen Notar- und Gerichtskosten hat vereinbarungsgemäß der Erwerber übernommen. Die TIP-AG hat die Veräußerung wie folgt gebucht:" },
      { typ: "tabelle", spalten: ["Soll", "Betrag", "Haben", "Betrag"], zeilen: [
        ["Bank", "600.000 €", "Beteiligung SAT-GmbH", "500.000 €"],
        ["", "", "sonstige betriebliche Erträge", "100.000 €"],
      ] },
      { text: "Die Anschaffungskosten für den Erwerb des Anteils an der SAT-GmbH hatte die TIP-AG in Höhe eines Teilbetrags von 200.000 € über ein Darlehen bei der B-Bank mit einer Laufzeit von zehn Jahren finanziert. Die TIP-AG hat das Darlehen im November 2020 aufgrund der Veräußerung des Anteils vorzeitig zurückgezahlt. Die B-Bank hat der TIP-AG neben den laufenden Zinsen für die Monate Juni bis November 2020 i. H. v. 2.000 € eine rechtlich zutreffende Vorfälligkeitsentschädigung i. H. v. 1.000 € in Rechnung gestellt. Die TIP-AG hat beide Beträge in ihrer Gewinnermittlung für 2020 als Aufwand erfasst. Die Darlehensgewährung selbst sowie die Rückzahlung hat die TIP-AG erfolgsneutral gebucht." },
      { typ: "titel", text: "c) Darlehen VEIT-GmbH" },
      { text: "Die TIP-AG hat der VEIT-GmbH am 1. Juli 2020 ein Darlehen i. H. v. 1.000.000 € zu einem Zinssatz i. H. v. 10 % gewährt. Das Darlehen ist durch eine Grundschuld an einem der VEIT-GmbH gehörenden Grundstück abgesichert. Es hat eine Laufzeit von 10 Jahren. Zinszahlungstermin ist der 31. Dezember eines jeden Jahres. Der fremdübliche Zinssatz beträgt 4 %. Die VEIT-GmbH hat ihren Sitz und ihre Geschäftsleitung in Düsseldorf und betreibt dort eine Werbeagentur. Alleingesellschafter der VEIT-GmbH ist Olaf Olm. Die Darlehensgewährung hat die TIP-AG wie folgt am 1. Juli 2020 gebucht:" },
      { typ: "tabelle", spalten: ["Soll", "Betrag", "Haben", "Betrag"], zeilen: [["Darlehensforderung", "1.000.000 €", "Bank", "1.000.000 €"]] },
      { text: "Bei Eingang der Zinsen 2020 am 31. Dezember 2020 hat die TIP-AG folgende Buchung vorgenommen:" },
      { typ: "tabelle", spalten: ["Soll", "Betrag", "Haben", "Betrag"], zeilen: [["Bank", "50.000 €", "Zinserträge", "50.000 €"]] },
      { text: "Das für die Besteuerung der VEIT-GmbH zuständige Finanzamt hat die Zinsen i. H. v. 50.000 € bei der Festsetzung der Körperschaftsteuer der VEIT-GmbH für 2020 einkommensmindernd berücksichtigt. Der Körperschaftsteuerbescheid ist verfahrensrechtlich nicht änderbar. Im Einkommensteuerbescheid von Olaf Olm für 2020 wurden aus dem Sachverhalt keine Konsequenzen gezogen. Der Einkommensteuerbescheid ist verfahrensrechtlich nicht änderbar." },
      { typ: "titel", text: "d) Beteiligung an der BERG-GmbH" },
      { text: "Die TIP-AG ist seit dem 10. Januar 2011 mit einem Anteil von 90 % an der BERG-GmbH beteiligt. Die Anschaffungskosten der Beteiligung haben 1.700.000 € betragen. Das entspricht dem Buchwert der Beteiligung in den von der TIP-AG auf den 31. Dezember 2019 bzw. auf den 31. Dezember 2020 aufgestellten Steuerbilanzen. Sitz und Geschäftsleitung der BERG-GmbH sind in Kassel, wo die BERG-GmbH einen Online-Versandhandel für Kosmetikprodukte betreibt. Der Gewinn der BERG-GmbH wird durch Betriebsvermögensvergleich nach § 4 Abs. 1, § 5 EStG ermittelt; das Wirtschaftsjahr entspricht dem Kalenderjahr. Weiterer Gesellschafter der BERG-GmbH mit einem Anteil von 10 % ist Tyll Tobes mit Wohnsitz in Paderborn." },
      { text: "Zwischen der TIP-AG und der BERG-GmbH liegen seit 2012 (= rechtswirksamer Abschluss des Gewinnabführungsvertrags) bis einschließlich 2020 die Voraussetzungen einer körperschaftsteuerlichen Organschaft vor. Tyll Tobes erhält nach den Bestimmungen des Gewinnabführungsvertrags eine jährliche Ausgleichszahlung nach § 302 AktG i. H. v. 34.000 €." },
      { text: "Die BERG-GmbH hat aus dem Jahresüberschuss für 2019 einen Teilbetrag i. H. v. 120.000 € in eine Gewinnrücklage i. S. d. § 272 Abs. 3 HGB eingestellt und nur den verbleibenden Gewinn an die TIP-AG abgeführt. Die Bildung der Rücklage erfolgte mit Blick auf den für 2021 geplanten Neubau einer Lagerhalle durch die BERG-GmbH zur Kapazitätserweiterung und war aus unternehmerischer Sicht gerechtfertigt. Die Rücklage wurde bis zum 31. Dezember 2020 nicht aufgelöst. Die BERG-GmbH und die TIP-AG haben den Sachverhalt in ihren zum 31. Dezember 2019 aufgestellten Steuerbilanzen zutreffend behandelt." },
      { text: "Die BERG-GmbH ist seit dem 10. Februar 2020 mit einem Anteil von 25 % an der TAG-GmbH beteiligt. Die TAL-GmbH hat ihren Sitz und ihre Geschäftsleitung in Kassel und betreibt dort einen Fahrradhandel. Die Gesellschafterversammlung der TAL-GmbH hat am 10. Mai 2020 eine Gewinnausschüttung i. H. v. 400.000 € beschlossen. Der Anteil der BERG-GmbH beträgt 100.000 €. Die Gutschrift auf dem Konto der BERG-GmbH erfolgte noch im Mai 2020 nach Einbehalt von Kapitalertragsteuer i. H. v. 25.000 € und Solidaritätszuschlag i. H. v. 1.375 €." },
      { text: "(so in der Quelle: Die Gesellschaft heißt an der ersten Stelle „TAG-GmbH“ und danach durchgehend „TAL-GmbH“ – ein Schreibfehler der Quelle; gemeint ist dieselbe Gesellschaft.)" },
      { text: "Die Gewinnabführung für 2020 hat die BERG-GmbH (verkürzt dargestellt) wie folgt berechnet:" },
      { typ: "tabelle", spalten: ["Position", "Betrag"], zeilen: [
        ["Gewinnausschüttung TAL-GmbH", "100.000 €"],
        ["weitere Erträge", "+ 10.000.000 €"],
        ["Kapitalertragsteuer zur Gewinnausschüttung der TAL-GmbH", "./. 25.000 €"],
        ["Solidaritätszuschlag zur Kapitalertragsteuer", "./. 1.375 €"],
        ["Körperschaftsteuervorauszahlung 2020", "./. 6.000 €"],
        ["Solidaritätszuschlag zur Körperschaftsteuervorauszahlung 2020", "./. 330 €"],
        ["Ausgleichszahlung Tyll Tobes", "./. 34.000 €"],
        ["weitere Aufwendungen", "./. 9.500.000 €"],
        ["Gewinnabführung an die TIP-AG", "533.295 €"],
      ] },
      { text: "Die TIP-AG hat die Gewinnabführung in ihrer steuerlichen Gewinn- und Verlustrechnung für 2020 als Ertrag erfasst." },
      { text: "Die TIP-AG hat ihre Beteiligung an der BERG-GmbH mit notariellem Vertrag vom 10. Dezember 2020 und Übergang von Nutzen und Lasten am 31. Dezember 2020 (24 Uhr) zum Kaufpreis von 2.500.000 € veräußert. Die im Zusammenhang mit der Übertragung angefallenen Notar- und Gerichtskosten hat vereinbarungsgemäß der Erwerber übernommen. Der Kaufpreis wurde dem Bankkonto der TIP-AG erst am 2. Januar 2021 gutgeschrieben. Die TIP-AG hat deshalb in ihrer auf den 31. Dezember 2020 aufgestellten Steuerbilanz keine Konsequenzen aus der Veräußerung gezogen. In der Gewinnermittlung sind insoweit keine Aufwendungen oder Erträge enthalten." },
      { typ: "titel", text: "e) Beteiligung an der WAL-GmbH & Co. KG" },
      { text: "Die TIP-AG ist alleinige Kommanditistin der im Jahr 2018 gegründeten WAL-GmbH & Co. KG, die ihren Sitz und ihre Geschäftsleitung in Dessau hat. Die WAL-GmbH & Co. KG betreibt in Dessau eine Online-Apotheke. Der Gewinn wird durch Betriebsvermögensvergleich gem. § 4 Abs. 1, § 5 EStG ermittelt; das Wirtschaftsjahr entspricht dem Kalenderjahr. Komplementärin der WAL-GmbH & Co. KG ist die WAL-Verwaltungs-GmbH, die ihren Sitz und ihre Geschäftsleitung ebenfalls in Dessau hat. Alleinige Gesellschafterin der WAL-Verwaltungs-GmbH ist die TIP-AG. Alleiniger Geschäftsgegenstand der im Jahr 2018 gegründeten WAL-Verwaltungs-GmbH ist das Halten der Beteiligung an der WAL-GmbH & Co. KG." },
      { text: "Die WAL-Verwaltungs-GmbH ist nicht am Gewinn und Verlust sowie am Vermögen der WAL-GmbH & Co. KG beteiligt. Eine Haftungsvergütung steht ihr nicht zu. Die fremdübliche Haftungsvergütung beträgt 10.000 € pro Jahr. Die Beteiligungsverhältnisse der WAL-GmbH & Co. KG und der WAL-Verwaltungs-GmbH haben sich seit deren Gründung im Jahr 2018 nicht verändert." },
      { text: "Die WAL-GmbH & Co. KG hat für das Jahr 2020 einen zutreffenden steuerlichen Gesamthandsgewinn i. H. v. 150.000 € ermittelt. Sie hat diesen – den Vorgaben des Gesellschaftsvertrags entsprechend – insgesamt der TIP-AG zugerechnet. Die TIP-AG hat in ihrer steuerlichen Gewinnermittlung für 2020 bisher keine Erträge bzw. Aufwendungen im Zusammenhang mit ihren Beteiligungen an der WAL-GmbH & Co. KG und der WAL-Verwaltungs-GmbH erfasst." },
    ],
    aufgabe: [
      { text: "1. Ermitteln Sie das zu versteuernde Einkommen, die festzusetzende Körperschaftsteuer und die verbleibende Körperschaftsteuer i. S. d. R 7.2 KStR der BERG-GmbH für den Veranlagungszeitraum 2020. Ermitteln Sie das gem. § 14 Abs. 5 KStG gesondert und einheitlich festzustellende Einkommen der BERG-GmbH für den Veranlagungszeitraum 2020, das der TIP-AG zuzurechnen ist." },
      { text: "2. Ermitteln Sie das zu versteuernde Einkommen, die festzusetzende Körperschaftsteuer und die verbleibende Körperschaftsteuer i. S. d. R 7.2 KStR der TIP-AG für den Veranlagungszeitraum 2020." },
      { text: "Begründen Sie Ihre Ergebnisse jeweils ausführlich unter Hinweis auf die einschlägigen Rechtsgrundlagen. Auf die persönliche Körperschaftsteuerpflicht ist nicht einzugehen. Die Voraussetzungen der körperschaftsteuerlichen Organschaft sind nicht zu prüfen." },
      { typ: "titel", text: "Hinweise" },
      { text: "Auf die Umsatzsteuer und die Schenkungsteuer ist nicht einzugehen. Erforderliche Bescheinigungen liegen vor. Erforderliche Anträge gelten als gestellt." },
      { text: "Auf Cent lautende Beträge (auch in Zwischenberechnungen) sind abzurunden. In Zweifelsfällen ist der aktuellen Verwaltungsauffassung zu folgen." },
      { text: "Sofern verschiedene Lösungsmöglichkeiten bestehen, ist das für 2020 günstigste steuerliche Ergebnis zu wählen." },
      { text: "Soweit sich Auswirkungen auf die Veranlagung ergeben, müssen auch Punkte behandelt werden, die in einem Grundlagenbescheid festzustellen sind (allerdings ohne formelles Feststellungsverfahren)." },
    ],
    loesung: [
      { typ: "titel", text: "Keine Musterlösung in der Quelle" },
      { text: KEINE_LOESUNG },
      { text: "Was die Aufgabenstellung selbst vorgibt: Es sind **zwei** Veranlagungen zu entwickeln – zuerst die der Organgesellschaft BERG-GmbH einschließlich des nach § 14 Abs. 5 KStG gesondert und einheitlich festzustellenden Einkommens, dann die der Organträgerin TIP-AG. Die Reihenfolge ist vorgegeben und sachlich zwingend, weil das festzustellende Einkommen in die Veranlagung der TIP-AG eingeht. Verlangt ist jeweils bis zur „verbleibenden Körperschaftsteuer i. S. d. R 7.2 KStR“, also einschließlich der Anrechnung von Vorauszahlungen und Steuerabzugsbeträgen. Die Voraussetzungen der Organschaft sind ausdrücklich **nicht** zu prüfen – nur ihre Rechtsfolgen." },
      { text: "Die Zahlen der Quelle sind in sich schlüssig und unabhängig nachgerechnet: Der Solidaritätszuschlag von 192.500 € entspricht 5,5 % der Körperschaftsteuervorauszahlung von 3.500.000 €. Bei der SAT-GmbH ergeben 5 % von 400.000 € die gebuchten 20.000 €, davon 25 % Kapitalertragsteuer = 5.000 € und 5,5 % darauf = 275 €, so dass 14.725 € ausgezahlt werden. Bei der BERG-GmbH entsprechen 25.000 € einem Viertel von 100.000 €, 1.375 € sind 5,5 % davon und 330 € sind 5,5 % von 6.000 €; die Gewinnabführungsrechnung geht auf 533.295 € auf." },
      { text: "Mehrere Sachverhaltsangaben sind ausdrücklich als Weichenstellungen gesetzt und keine Ausschmückung: dass die Nebenkosten des Erwerbs jeweils die Gegenseite getragen hat; dass die TIP-AG den SAT-Anteil „ursprünglich dauerhaft halten wollte“; dass beim Darlehen an die VEIT-GmbH sowohl deren Körperschaftsteuerbescheid als auch der Einkommensteuerbescheid von Olaf Olm verfahrensrechtlich nicht mehr änderbar sind; dass die Rücklage der BERG-GmbH unternehmerisch gerechtfertigt war und bis zum 31.12.2020 nicht aufgelöst wurde; und dass der Nutzen- und Lastenübergang bei der Veräußerung der BERG-Beteiligung auf den 31. Dezember 2020, 24 Uhr, gelegt ist." },
      { text: "Parallelfälle mit vollständiger Musterlösung im Campus: Nichtabziehbare Aufwendungen nach § 10 KStG, die Streubesitzregel des § 8b Abs. 4 KStG, verdeckte Gewinnausschüttungen an nahestehende Personen und die Organschaft nach §§ 14 bis 17 KStG einschließlich der Ausgleichszahlung nach § 16 KStG behandelt der Körperschaftsteuer-Campus (Klausur 2) mit eigenen Einheiten und mit den Originalklausuren 2011 bis 2015 – dort steht unter anderem eine vollständig durchgerechnete Organkreis-Aufgabe. Die Beteiligung einer Kapitalgesellschaft an einer GmbH & Co. KG und die Haftungsvergütung der Komplementärin behandelt der Reiter „Personengesellschaften“ (Klausur 3)." },
    ],
  },
];

export default k2Pruefungsklausuren;
