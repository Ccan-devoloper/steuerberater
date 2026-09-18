/* Amtliche Prüfungsaufgaben Buchführung und Bilanzierung (K3).

   Die Original-Aufgabentexte der Steuerberaterprüfung im amtlichen Wortlaut,
   so wie sie den Kandidatinnen und Kandidaten am Prüfungstag vorgelegen haben
   – ohne jede Bearbeitung, ohne Fortschreibung auf einen neueren Rechtsstand
   und mit den Jahreszahlen des jeweiligen Prüfungsjahrgangs.

   Wichtig und ausdrücklich: Die Quelle enthält zu diesen Klausuren KEINE
   Lösung. Sie ist die reine Aufgabenstellung. Der Lösungsabschnitt jedes
   Eintrags sagt das offen und erfindet nichts; er nennt stattdessen die
   Vorschriften, die die Aufgabenstellung selbst aufruft, und verweist auf die
   Stellen im Campus, an denen dieselben Rechtsfragen mit Musterlösung
   behandelt sind. Die fehlenden Musterlösungen sind in
   docs/offene-quellen.md, Abschnitt A, vermerkt.

   Abgrenzung zu k3-bil-originalklausuren.js: Dort stehen die Prüfungen
   2011–2015 mit den Lösungshinweisen des Lehrgangs und auf Rechtsstand 2025
   fortgeschrieben. Hier stehen die unbearbeiteten amtlichen Aufgabentexte der
   jüngeren Jahrgänge. Beide Reihen ergänzen sich: Die eine zeigt, wie eine
   Musterlösung aufgebaut ist, die andere, wie eine Klausur tatsächlich
   aussieht – einschließlich der Wertungspunkte, die die Prüfung selbst je
   Aufgabenteil ausweist.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen.
   Blocktypen wie bei den übrigen Klausurdatensätzen: text | titel | tabelle. */

export const bilPruefungsklausurenQuelle = {
  reihe: "Steuerberaterprüfung · Prüfungsaufgaben aus dem Gebiet Buchführung und Bilanzierung · amtlicher Wortlaut",
  stand: "Prüfungsjahrgang 2022/2023, Wirtschaftsjahr 2021 · Rechtsstand des Prüfungstages",
  verfasser: "Amtliche Prüfungsaufgabe der Steuerberaterprüfung – ohne Musterlösung",
  didaktik: [
    "Diese Reihe zeigt die Klausur so, wie sie am Prüfungstag auf dem Tisch liegt: sechs Stunden Bearbeitungszeit, vier voneinander unabhängige Teile, 100 Wertungspunkte, und ein Deckblatt, das nur die zugelassenen Hilfsmittel und den Satz „Vor der Bearbeitung sind Sachverhalt und Aufgaben vollständig zu lesen“ enthält. Die Punkte je Teil stehen in der Überschrift – hier 33, 17, 22 und 28 – und sind damit selbst eine Zeitvorgabe: rund dreieinhalb Minuten pro Wertungspunkt.",
    "Zu diesen Aufgabentexten liegt keine Musterlösung vor. Das ist für das Training kein Mangel, sondern die realistischere Übung: Die Aufgabenstellung nennt jedes Mal ausdrücklich die Zielvorgabe (möglichst niedriger steuerlicher Gewinn, möglichst hohes Eigenkapital in der Handelsbilanz, und in welcher Rangfolge), und aus dieser Vorgabe folgt die Ausübung jedes Wahlrechts. Wer diesen Satz überliest, löst die Klausur systematisch falsch.",
    "Die Jahreszahlen sind die des Originaljahrgangs und nicht fortgeschrieben; die Klausuren spielen im Wirtschaftsjahr 2021. Wer sie nach heutigem Rechtsstand löst, muss selbst prüfen, welche Vorschrift sich seither geändert hat – etwa bei der Gebäude-AfA, den Abzinsungssätzen oder § 7g EStG. Die fortgeschriebenen Parallelfälle mit vollständiger Musterlösung stehen im Reiter „Originalklausuren (Prüfung)“.",
  ],
};

const KEINE_LOESUNG = "Die Quelle ist die amtliche Prüfungsaufgabe im Wortlaut und enthält keine Lösung. Es wird hier bewusst keine erfunden: Jede Zahl, die an dieser Stelle stünde, wäre eine eigene Rechnung und keine Musterlösung. Die fehlenden Lösungen sind in docs/offene-quellen.md, Abschnitt A, vermerkt.";

export const bilPruefungsklausuren = [
  {
    id: "bil-pk-2022-teil1-klein",
    block: "amtlich",
    blockLabel: "Steuerberaterprüfung · amtliche Prüfungsaufgabe",
    nummer: 1,
    jahrgang: "2022/2023",
    teil: "I",
    wertung: "33 von 100 Wertungspunkten",
    title: "Teil I – Einzelunternehmen Kevin Klein (33 von 100 Wertungspunkten): Mietereinbauten mit Rückbaupflicht, Bezugsrechte und ein Umlegungsverfahren",
    thema: "Der punktstärkste Teil der Klausur und zugleich der breiteste. Drei Textziffern, die nichts miteinander zu tun haben: Ein Verkaufsladen wird samt eingemauerter Trennwände von einem Schwager übernommen – gegen 30.000 € für die Einbauten und 9.500 €, die der Vorgänger für die Übernahme der Rückbaupflicht bezahlt –, und der Buchhalter hat den verrechneten Saldo schlicht als Raumkosten gebucht. Ein Aktienpaket im Anlagevermögen macht eine Kapitalerhöhung 6 zu 1 mit, wobei zehn junge Aktien erworben und vierzig Bezugsrechte verkauft werden, bevor das ganze Paket im Juli veräußert wird. Und ein Vorratsgrundstück geht in ein städtisches Umlegungsverfahren, aus dem es flächenmäßig kleiner, aber mit 30.000 € Wertausgleich zurückkommt",
    rechtsstand: "Rechtsstand des Prüfungsjahrgangs 2022/2023 · Wirtschaftsjahr 2021",
    quelle: "Steuerberaterprüfung 2022/2023, Prüfungsaufgaben aus dem Gebiet Buchführung und Bilanzierung, Teil I · amtlicher Aufgabentext, Bearbeitungszeit 6 Stunden",
    normen: [
      "§ 5 Abs. 1 Sätze 1 bis 3 EStG",
      "§ 43 Abs. 2 Satz 3 Nr. 2 EStG",
      "§ 60 Abs. 2 EStDV",
    ],
    themen: ["Amtliche Prüfungsaufgabe", "Ohne Musterlösung", "Mietereinbauten", "Rückbaurückstellung", "Abzinsung", "Bezugsrechte", "Kapitalerhöhung", "Umlegungsverfahren"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2022/2023 · Prüfungsaufgaben aus dem Gebiet Buchführung und Bilanzierung · Teil I: Einzelunternehmen Kevin Klein (33 von 100 Wertungspunkten)" },
      { text: "Bearbeitungszeit: 6 Stunden. Hilfsmittel: Die zugelassenen Hilfsmittel ergeben sich aus den gleich lautenden Erlassen der obersten Finanzbehörden der Länder. Vor der Bearbeitung sind Sachverhalt und Aufgaben vollständig zu lesen." },
      { typ: "titel", text: "Allgemeiner Sachverhalt" },
      { text: "Der Kaufmann Kevin Klein (K) betreibt seit 2005 als Einzelunternehmer auf eigenen und gemieteten Grundstücken in Frankfurt am Main die Produktion und den Vertrieb von Reinigungsgeräten." },
      { text: "Die Gewinnermittlung erfolgt nach § 5 Abs. 1 EStG. Das Kalenderjahr und das Wirtschaftsjahr stimmen überein. Etwa erforderliche Verzeichnisse nach § 5 Abs. 1 Sätze 2 und 3 EStG werden geführt." },
      { text: "Soweit sich aus den nachfolgenden Einzelsachverhalten nichts anderes ergibt, ist K zum Vorsteuerabzug berechtigt. Er versteuert seine Umsätze nach vereinbarten Entgelten mit dem Steuersatz von 19 %. Die Belege der Buchführung liegen vor und die Aufzeichnungspflichten wurden beachtet. In seinem steuerlichen Jahresabschluss wünscht K für das Wirtschaftsjahr 2021 den Ausweis eines möglichst niedrigen Gewinns. In der Handelsbilanz soll das Eigenkapital mit dem höchstmöglichen Wert ausgewiesen werden, allerdings nur soweit dies nicht zu steuerlichen Mehrbelastungen führt. K hat Sie gebeten, den Jahresabschluss für das Jahr 2021 zu erstellen." },
      { typ: "titel", text: "1. Neuer Verkaufsladen" },
      { text: "Sebastian Stern (S), der Schwager des K, betreibt in Frankfurt ein Einzelhandelsgeschäft mit mehreren Verkaufsläden. Nachdem infolge der Coronapandemie die Umsätze stark gesunken waren, entschloss sich S, den Verkaufsladen in der Innenstadt von Frankfurt aufzugeben. Die entsprechenden Räumlichkeiten hatte S seit dem 01.01.2011 für 20 Jahre angemietet. In Absprache mit dem Vermieter und Grundstückseigentümer Emil Ernst (E) hat S in die angemieteten Räumlichkeiten massive und mit dem Gebäude fest verbundene Trennwände eingemauert und in diesen zusätzliche elektrische Installationen verlegt. Zwischen E und S wurde vertraglich vereinbart, dass S zum Ende der Mietzeit am 31.12.2030 die Trennwände wieder beseitigen muss. Es ist davon auszugehen, dass die Beseitigung der Trennwände bei Vertragsende kurzfristig erfolgen kann." },
      { text: "Nachdem K von den Absichten seines Schwagers S erfahren hatte, kontaktierte er den Grundstückseigentümer E, da er seinerseits schon länger nach geeigneten Räumlichkeiten für einen weiteren Verkaufsladen in der Innenstadt von Frankfurt gesucht hatte. E, S und K trafen daraufhin zivilrechtlich wirksam folgende Vereinbarungen:" },
      { text: "1. K übernimmt die Rechte und Pflichten des S aus dem Mietvertrag mit E ab dem 01.07.2021, einschließlich der Pflicht zur Beseitigung der Trennwände. 2. K bezahlt S für die Übernahme der Trennwände 30.000 € zuzüglich 5.700 € Umsatzsteuer. 3. S entrichtet an K 9.500 € für die Übernahme der Pflicht zur Beseitigung der Trennwände." },
      { text: "Die beiden vereinbarten Geldbeträge sind angemessen. Die Bezahlung der verrechneten Beträge verbuchte der Buchhalter des K wie folgt:" },
      { typ: "tabelle", spalten: ["Soll", "Betrag", "Haben", "Betrag"], zeilen: [["Raumkosten", "20.500 €", "Bank", "26.200 €"], ["Vorsteuer", "5.700 €", "", ""]] },
      { text: "Eine Anfrage des K bei einem Abbruchunternehmen im Dezember 2021 ergab, dass die Beseitigung der Trennwände derzeit ca. 17.000 € zuzüglich Umsatzsteuer kosten würde; aufgrund absehbarer Preissteigerungen ist allerdings damit zu rechnen, dass Ende 2030 Kosten in Höhe von ca. 20.000 € zuzüglich Umsatzsteuer anfallen werden. Die monatlichen Mietzahlungen an E wurden zutreffend verbucht. Zum 31.12.2021 betrug der durchschnittliche Marktzins der vergangenen 7 Geschäftsjahre für 9-jährige Ausleihungen 1,1 %." },
      { typ: "titel", text: "2. Wertpapiere" },
      { text: "Im Dezember 2014 hat K zur Kapitalanlage 100 Aktien der X-AG für 10.000 € zuzüglich 100 € Bankspesen erworben. Diese Aktien wurden seither zutreffend mit 10.100 € im Anlagevermögen der Bilanzen ausgewiesen. K hat formgerecht nach § 43 Abs. 2 Satz 3 Nr. 2 EStG erklärt, dass sich die Aktien im Betriebsvermögen seines inländischen Betriebs befinden." },
      { text: "Im Februar 2021 hat die X-AG eine Kapitalerhöhung gegen Einlagen im Verhältnis 6 zu 1 beschlossen und durchgeführt. K erwarb 10 junge Aktien und verkaufte 40 Bezugsrechte. Am Tag vor der Kapitalerhöhung lag der Börsenkurs einer X-Aktie bei 202 €." },
      { text: "Die Bank rechnete insoweit wie folgt ab: Erwerb von 10 jungen Aktien der X-AG zu je 140 € = 1.400 €; Verkauf von 40 Bezugsrechten zu je 8 € = 320 €; Lastschrift 1.080 €. K buchte insoweit:" },
      { typ: "tabelle", spalten: ["Soll", "Betrag", "Haben", "Betrag"], zeilen: [["Wertpapiere", "1.080 €", "Bank", "1.080 €"]] },
      { text: "Da K im Zusammenhang mit der Übernahme der Trennwände (vgl. Tz. 1) finanzielle Mittel benötigte, verkaufte er im Juli 2021 seine gesamten Aktien an der X-AG. Die depotführende Bank rechnete insoweit wie folgt ab: Verkauf von 110 Aktien der X-AG zu je 200 € = 22.000 €; Spesen 220 €; Gutschrift 21.780 €. K buchte insoweit:" },
      { typ: "tabelle", spalten: ["Soll", "Betrag", "Haben", "Betrag"], zeilen: [["Bank", "21.780 €", "Wertpapiere", "11.180 €"], ["", "", "Sonst. betriebl. Erträge", "10.600 €"]] },
      { typ: "titel", text: "3. Umlegungsverfahren" },
      { text: "Nachdem K erfahren hatte, dass bei der Stadt Frankfurt überlegt wurde, in der Nähe seines Betriebs ein neues Gewerbegebiet zu erschließen, kaufte er dort spontan am 15.04.2018 ein unbebautes Grundstück mit einer Fläche von 2.000 qm als Vorratsgelände für eine spätere Erweiterung seines Betriebs. Dieses Grundstück ist in den Bilanzen des K bis zum 31.12.2020 zutreffend als Anlagevermögen mit den Anschaffungskosten von 160.000 € ausgewiesen." },
      { text: "Im Jahr 2021 führte die Stadt Frankfurt zur Erschließung des neuen Gewerbegebiets ein Umlegungsverfahren durch. K brachte sein unbebautes Grundstück in das Umlegungsverfahren ein; dieses hatte im Zeitpunkt der Einbringung einen Verkehrswert von 300.000 €. Durch das Umlegungsverfahren wurde K ein Grundstück mit einer Fläche von 1.440 qm zugeteilt. Da ihm nach einem Abschlag von 20 % für öffentliche Straßen, Parkplätze und Grünflächen eigentlich ein Grundstück mit einer Fläche von 1.600 qm zugestanden hätte, erhielt K wegen der Minderzuteilung von der Stadt Frankfurt einen Wertausgleich von 30.000 €, der bei Gutschrift auf dem betrieblichen Bankkonto wie folgt verbucht wurde:" },
      { typ: "tabelle", spalten: ["Soll", "Betrag", "Haben", "Betrag"], zeilen: [["Bank", "30.000 €", "Sonst. betriebl. Erträge", "30.000 €"]] },
    ],
    aufgabe: [
      { text: "Erläutern Sie unter Angabe der einschlägigen Vorschriften, wie die nachfolgenden Einzelsachverhalte handelsrechtlich und steuerrechtlich bei K zu behandeln sind. Die für die Erstellung der Handelsbilanz und der Steuerbilanz zum 31.12.2021 noch erforderlichen Buchungssätze (ggf. Korrekturbuchungssätze) sind anzugeben. Beachten Sie insoweit die Hinweise zu den Buchungskreisen." },
      { typ: "titel", text: "Hinweise" },
      { text: "Die Buchhaltung ist so eingerichtet, dass für Buchungen, die handelsrechtlich und steuerrechtlich identisch sind, der Buchungskreis „Alle Bereiche“ anzusprechen ist. Im Falle von Abweichungen ist jeweils in den besonderen Buchungskreisen „Nur Handelsrecht“ und / oder „Nur Steuerrecht“ zu buchen." },
      { text: "Außer den angesprochenen Buchungen sind zu den Einzelsachverhalten bisher keine weiteren Buchungen erfolgt." },
      { text: "Auf die Gewerbesteuer und latente Steuern ist nicht einzugehen. Cent-Beträge sind kaufmännisch auf volle Euro zu runden." },
    ],
    loesung: [
      { typ: "titel", text: "Keine Musterlösung in der Quelle" },
      { text: KEINE_LOESUNG },
      { text: "Was die Aufgabenstellung selbst vorgibt und was daher ohne Lösung feststeht: Der steuerliche Gewinn soll möglichst niedrig ausfallen, das handelsrechtliche Eigenkapital möglichst hoch – aber nur, soweit das nicht zu steuerlichen Mehrbelastungen führt. Diese Rangfolge entscheidet jedes Wahlrecht der Klausur. Die Buchungskreise „Alle Bereiche“, „Nur Handelsrecht“ und „Nur Steuerrecht“ sind vorgegeben; jede Abweichung zwischen Handels- und Steuerbilanz ist also nicht in einer Überleitungsrechnung, sondern als eigene Buchung darzustellen." },
      { text: "Parallelfälle mit vollständiger Musterlösung im Campus: Mietereinbauten und Rückbaurückstellungen sowie deren Abzinsung behandelt Teil II der Prüfung 2012 (Sommer GmbH) im Reiter „Originalklausuren (Prüfung)“ am Beispiel der Lärmschutzwand – dort mit dem Gegensatz von handelsrechtlicher Aufzinsung um künftige Preissteigerungen (§ 253 Abs. 1 Satz 2 HGB) und steuerlichem Verbot ebendieser Preissteigerungen (§ 6 Abs. 1 Nr. 3a Buchst. f EStG). Aktienpakete im Betriebsvermögen und die Frage der Abspaltung von Anschaffungskosten auf Bezugsrechte berührt Teil I der Prüfung 2011 (Einzelunternehmen Herbst) mit den beiden Aktienpaketen." },
    ],
  },
  {
    id: "bil-pk-2022-teil2-maier",
    block: "amtlich",
    blockLabel: "Steuerberaterprüfung · amtliche Prüfungsaufgabe",
    nummer: 2,
    jahrgang: "2022/2023",
    teil: "II",
    wertung: "17 von 100 Wertungspunkten",
    title: "Teil II – Maier GmbH (17 von 100 Wertungspunkten): ein Betriebsabrechnungsbogen, aus dem die Herstellungskosten zweier Aufträge zu entwickeln sind",
    thema: "Der kürzeste Teil der Klausur und der einzige, der Kostenrechnung verlangt. Ein vollständiger Betriebsabrechnungsbogen mit zwei Vorkostenstellen (Kantine, Reparatur) und vier Hauptkostenstellen ist gegeben, dazu sieben Feststellungen, die ihn korrigieren: Arbeitgeberanteile zur Sozialversicherung von 20 %, Lehrlingslöhne, ein Geschäftsführergehalt von 400.000 €, eine Teilwertabschreibung von 50.000 € in der Fertigung, die Umlage der Kantine nach Arbeitnehmerzahlen und die der Reparaturwerkstatt nach 3.000 Arbeitsstunden. Daraus sind die Bilanzansätze für zwei Werkverträge zu entwickeln: eine Maschine, die am 30.12.2021 nach § 640 BGB abgenommen, aber bis zum 03.01.2022 noch verwahrt wird, und eine zweite, die am Stichtag unfertig ist und auf die bereits 400.000 € angezahlt wurden",
    rechtsstand: "Rechtsstand des Prüfungsjahrgangs 2022/2023 · Wirtschaftsjahr 2021",
    quelle: "Steuerberaterprüfung 2022/2023, Prüfungsaufgaben aus dem Gebiet Buchführung und Bilanzierung, Teil II · amtlicher Aufgabentext",
    normen: [
      "§ 5 Abs. 1 EStG",
      "§§ 631 ff., § 640 BGB",
    ],
    themen: ["Amtliche Prüfungsaufgabe", "Ohne Musterlösung", "Betriebsabrechnungsbogen", "Herstellungskosten", "Unfertige Erzeugnisse", "Werkvertrag", "Gefahrübergang", "Erhaltene Anzahlungen"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2022/2023 · Teil II: Maier GmbH (17 von 100 Wertungspunkten)" },
      { text: "Die Maier GmbH (GmbH) betreibt in Dortmund eine Maschinenfabrik. Es werden ausschließlich Maschinen gefertigt, die von Kunden nach deren speziellen Anforderungen in Auftrag gegeben wurden. Die Preisfindung ist insoweit bei Auftragserteilung regelmäßig noch nicht abgeschlossen. Geschäftsführender Alleingesellschafter der GmbH ist Max Maier (M). Die GmbH ermittelt ihren Gewinn nach § 5 Abs. 1 EStG. Umsatzsteuerrechtlich unterliegen die Leistungen der GmbH der Regelbesteuerung." },
      { text: "Am 31.12.2021 (Bilanzstichtag) war ein Auftrag des Kunden Alt (A) noch nicht vollständig abgewickelt und ein Auftrag des Kunden Braun (B) noch in Bearbeitung. Beide Vertragsbeziehungen unterliegen dem Werkvertragsrecht der §§ 631 ff. BGB." },
      { text: "Die Maschine für den Kunden A wurde von diesem nach einem erfolgreichen Probelauf am 30.12.2021 nach § 640 BGB abgenommen. Nach der Abnahme wurde zwischen M und A vereinbart, dass das Eigentum an der Maschine an A übergehen soll, aber die GmbH die Maschine noch bis zum 03.01.2022 auf ihrem Betriebsgelände für A verwahrt, da dieser erst für diesen Tag den Transport zu seinem Unternehmen organisieren konnte. Die anteiligen Materialeinzelkosten (MEK) für diese Maschine betragen 250.000 € und die anteiligen Fertigungseinzelkosten (FEK) 350.000 €. Die Rechnung für diesen Auftrag über 1.200.000 € zuzüglich 228.000 € Umsatzsteuer wurde am 12.01.2022 erteilt." },
      { text: "Die Maschine für den Kunden B war am Bilanzstichtag noch im unfertigen Zustand. Bis dahin waren insoweit anteilige MEK in Höhe von 200.000 € und anteilige FEK in Höhe von 300.000 € angefallen. Für diesen Auftrag hat B am 10.11.2021 eine Anzahlung über 400.000 € auf das Bankkonto der GmbH überwiesen, die unter „Umsatzerlöse“ verbucht wurde." },
      { text: "Im Betriebsabrechnungsbogen (BAB) der GmbH wurden die MEK, die FEK und die primären Gemeinkosten wie folgt ermittelt (Angaben in €):" },
      { typ: "tabelle", spalten: ["Kostenarten", "Zahlen aus der Buchführung", "Kantine", "Reparatur", "Material", "Fertigung", "Verwaltung", "Vertrieb"], zeilen: [
        ["Materialeinzelkosten", "3.200.000", "", "", "3.200.000", "", "", ""],
        ["Fertigungseinzelkosten", "4.800.000", "", "", "", "4.800.000", "", ""],
        ["Gemeinkosten Löhne und Gehälter", "2.000.000", "100.000", "90.000", "120.000", "1.090.000", "400.000", "200.000"],
        ["Gehalt Geschäftsführer", "400.000", "", "30.000", "80.000", "250.000", "40.000", ""],
        ["Sozialkosten", "1.900.000", "", "", "", "1.900.000", "", ""],
        ["Miete, Leasing", "500.000", "20.000", "30.000", "40.000", "230.000", "150.000", "30.000"],
        ["Abschreibungen", "1.600.000", "50.000", "100.000", "100.000", "950.000", "200.000", "200.000"],
        ["Gewerbesteuer", "200.000", "5.000", "10.000", "20.000", "100.000", "15.000", "50.000"],
        ["Sonst. Gemeinkosten", "600.000", "30.000", "20.000", "50.000", "290.000", "140.000", "70.000"],
        ["Summe primäre Gemeinkosten", "7.200.000", "205.000", "250.000", "360.000", "2.740.000", "3.055.000", "590.000"],
      ] },
      { text: "(so in der Quelle: Die Zeilen „Gehalt Geschäftsführer“ und „Sozialkosten“ sind im PDF-Satz zusammengelaufen; die Verteilung des Geschäftsführergehalts auf Reparatur, Material, Fertigung und Verwaltung ergibt zusammen 400.000 €, die Sozialkosten sind dort nur mit einem Gesamtbetrag ausgewiesen. Die Summenzeile ist wortlautgetreu übernommen.)" },
      { text: "Zuschlagsbasis für die Ermittlung der Zuschlagssätze sind für die Materialgemeinkosten (MGK) die MEK, für die Fertigungsgemeinkosten (FGK) die FEK sowie für die Verwaltungsgemeinkosten und für die Vertriebsgemeinkosten jeweils die Herstellkosten." },
      { text: "Zu den Zahlen des BAB haben Sie noch folgende Feststellungen getroffen: 1. In den Sozialgemeinkosten sind sämtliche Arbeitgeberanteile zur Sozialversicherung enthalten, die 20 % der jeweiligen Aufwendungen für Löhne und Gehälter betragen. 2. Bei den FEK handelt es sich im vollen Umfang um Fertigungslöhne. 3. Bei den FGK sind Löhne für Lehrlinge in Höhe von 30.000 € enthalten. 4. Das Geschäftsführergehalt des M beträgt 400.000 € und wurde nach dem geschätzten zeitlichen Umfang seiner Tätigkeit auf die einzelnen Kostenstellen verteilt. M ist nicht sozialversicherungspflichtig. 5. In den Abschreibungen der Kostenstelle „Fertigung“ ist eine Teilwertabschreibung bzw. außerplanmäßige Abschreibung in Höhe von 50.000 € enthalten." },
      { text: "6. Die Kantine wird regelmäßig von Arbeitnehmern in Anspruch genommen, die in folgenden Bereichen beschäftigt sind: 2 Arbeitnehmer in der Reparaturwerkstatt, 2 Arbeitnehmer im Materiallager, 78 Arbeitnehmer in der Fertigung, 5 Arbeitnehmer in der Verwaltung, 3 Arbeitnehmer im Vertrieb. 7. Die Vorkostenstelle „Reparatur“ betrifft eine innerbetriebliche Werkstatt zur Instandhaltung der Anlagegüter. Von dieser Reparaturwerkstatt wurde im Wirtschaftsjahr 2021 eine Arbeitsleistung von 3.000 Stunden erbracht, die sich wie folgt verteilen: 100 Stunden für die Kostenstelle „Material“, 2.400 Stunden für die Kostenstelle „Fertigung“, 300 Stunden für die Kostenstelle „Verwaltung“, 200 Stunden für die Kostenstelle „Vertrieb“." },
      { text: "Die GmbH kalkuliert einen Gewinnaufschlag in Höhe von 10 % auf die Selbstkosten." },
    ],
    aufgabe: [
      { text: "Begutachten Sie unter Angabe der einschlägigen Vorschriften erschöpfend, wie der Sachverhalt in der Handelsbilanz und in der Steuerbilanz zu behandeln ist. Dabei sind für beide Bilanzen die Bilanzansätze zum 31.12.2021 zu ermitteln. Sie wurden von M gebeten, für die Steuerbilanz den steuerlich günstigsten Bilanzansatz zu wählen; in der Handelsbilanz soll jedoch – soweit dies nicht zu zusätzlichen steuerlichen Belastungen führt – ein möglichst hoher Jahresüberschuss ausgewiesen werden." },
      { text: "Hinweis: Centbeträge sind kaufmännisch auf volle Euro zu runden." },
    ],
    loesung: [
      { typ: "titel", text: "Keine Musterlösung in der Quelle" },
      { text: KEINE_LOESUNG },
      { text: "Was die Aufgabenstellung selbst vorgibt: In der Steuerbilanz ist der steuerlich günstigste Ansatz zu wählen, in der Handelsbilanz ein möglichst hoher Jahresüberschuss – Letzteres aber nur, soweit es keine zusätzlichen steuerlichen Belastungen auslöst. Für die Herstellungskosten laufen damit die handelsrechtliche Einbeziehungswahlrechte des § 255 Abs. 2 HGB und die steuerliche Einbeziehungspflicht des § 6 Abs. 1 Nr. 2 EStG in Verbindung mit R 6.3 EStR gegeneinander. Die sieben Feststellungen zum BAB sind die eigentliche Arbeit: Sie benennen die Bestandteile, die in den Zuschlagssätzen nichts zu suchen haben oder umzuverteilen sind." },
      { text: "Parallelfälle mit vollständiger Musterlösung im Campus: Die Aktivierung von Verwaltungskosten und Fremdkapitalzinsen in den Herstellungskosten – und die Frage, ob § 6 Abs. 1 Nr. 1b EStG und R 6.3 Abs. 5 EStR eigenständige steuerliche Wahlrechte sind – behandelt Teil I der Prüfung 2011 (Einzelunternehmen Herbst) im Reiter „Originalklausuren (Prüfung)“ an der selbst hergestellten Maschine." },
    ],
  },
  {
    id: "bil-pk-2022-teil3-maurer-hauser",
    block: "amtlich",
    blockLabel: "Steuerberaterprüfung · amtliche Prüfungsaufgabe",
    nummer: 3,
    jahrgang: "2022/2023",
    teil: "III",
    wertung: "22 von 100 Wertungspunkten",
    title: "Teil III – Maurer & Hauser OHG (22 von 100 Wertungspunkten): eine Realteilung mit Spitzenausgleich und zwei Veräußerungen zwei Jahre später",
    thema: "Eine OHG mit 1,1 Mio. € stillen Reserven und einem Firmenwert von 450.000 € wird zum Jahresende real geteilt. Die eine Gesellschafterin erhält ein bebautes Grundstück, das ausdrücklich kein Teilbetrieb ist, dazu eine 100-prozentige GmbH-Beteiligung und die Darlehensschuld; die andere erhält das übrige Vermögen, das einen Teilbetrieb darstellt. Weil die erste wertmäßig zu viel bekommt, zahlt sie 100.000 € aus ihrem Privatvermögen aus – ein Spitzenausgleich, der die Buchwertfortführung nur teilweise trägt. Und dann kommt die zweite Stufe: Im Jahr 2023 werden Grundstück, Beteiligung und Teilbetrieb an fremde Dritte veräußert, was rückwirkend auf 2021/2022 zurückschlagen kann",
    rechtsstand: "Rechtsstand des Prüfungsjahrgangs 2022/2023 · Auflösung zum 31.12.2021, Eröffnungsbilanzen zum 01.01.2022",
    quelle: "Steuerberaterprüfung 2022/2023, Prüfungsaufgaben aus dem Gebiet Buchführung und Bilanzierung, Teil III · amtlicher Aufgabentext",
    normen: [
      "§ 7 Abs. 1, Abs. 4 Satz 1 Nr. 1 EStG",
    ],
    themen: ["Amtliche Prüfungsaufgabe", "Ohne Musterlösung", "Realteilung", "Spitzenausgleich", "Teilbetrieb", "Sperrfrist", "Eröffnungsbilanz", "Gebäude-AfA nach Übernahme"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2022/2023 · Teil III: Maurer & Hauser OHG (22 von 100 Wertungspunkten)" },
      { text: "An der im Jahre 2006 gegründeten Maurer & Hauser OHG (künftig: OHG) mit Sitz in Freiburg sind die 45-jährige Nicole Maurer (N) und die 44-jährige Christine Hauser (C) je zur Hälfte am Gewinn und Verlust sowie am Liquidationserlös beteiligt." },
      { text: "Die Steuerbilanz der OHG zum 31.12.2021 hat – zusammengefasst – folgendes Aussehen:" },
      { typ: "tabelle", spalten: ["Aktiva", "Betrag", "Passiva", "Betrag"], zeilen: [
        ["Grund und Boden", "300.000 €", "Kapital Nicole Maurer", "350.000 €"],
        ["Gebäude", "680.000 €", "Kapital Christine Hauser", "350.000 €"],
        ["Maschinen", "350.000 €", "Darlehen", "680.000 €"],
        ["Betriebsausstattung", "240.000 €", "Übrige Passivposten", "820.000 €"],
        ["Beteiligung V-GmbH", "200.000 €", "", ""],
        ["Übrige Aktivposten", "430.000 €", "", ""],
        ["Summe", "2.200.000 €", "Summe", "2.200.000 €"],
      ] },
      { text: "Die Teilwerte = gemeinen Werte der einzelnen Wirtschaftsgüter betragen:" },
      { typ: "tabelle", spalten: ["Wirtschaftsgut", "Teilwert = gemeiner Wert"], zeilen: [
        ["Grund und Boden", "400.000 €"],
        ["Gebäude", "900.000 €"],
        ["Maschinen", "460.000 €"],
        ["Betriebsausstattung", "280.000 €"],
        ["Beteiligung V-GmbH", "380.000 €"],
        ["Übrige Aktivposten", "430.000 €"],
        ["Firmenwert", "450.000 €"],
        ["Summe", "3.300.000 €"],
      ] },
      { text: "Die OHG wird mit Ablauf des Jahres 2021 real aufgeteilt und damit handelsrechtlich und steuerrechtlich aufgelöst. Im Rahmen der Teilung erhält N das bebaute Grundstück, das keinen Teilbetrieb darstellt, die GmbH-Beteiligung und übernimmt die Darlehensschuld. C erhält das übrige Vermögen, das einen Teilbetrieb darstellt, und übernimmt die damit im Zusammenhang stehenden übrigen Schulden. Weil N wertmäßig zu viel erhalten hat, leistet sie an C eine Ausgleichszahlung von 100.000 €. Dieser Betrag stammt aus ihrem Privatvermögen und wurde Ende Januar 2022 überwiesen." },
      { text: "N und C überführen die übernommenen Wirtschaftsgüter am 01.01.2022 jeweils in ihre neu eröffneten Einzelunternehmen in Ludwigsburg." },
      { typ: "titel", text: "1. Erläuterungen zu den Wirtschaftsgütern" },
      { text: "Das bebaute Grundstück, das eine wesentliche Betriebsgrundlage darstellt, wurde im Januar 2017 für 1,1 Mio. € einschließlich Nebenkosten erworben (Anteil Grund und Boden 300.000 €). Das Gebäude wird nach § 7 Abs. 4 Satz 1 Nr. 1 EStG linear mit jährlich 3 % = 24.000 € abgeschrieben. Der Buchwert zum 31.12.2021 in Höhe von 680.000 € ist nicht zu beanstanden." },
      { text: "Die Maschine wurde im Januar 2019 für 500.000 € erworben und wird nach § 7 Abs. 1 EStG linear auf die betriebsgewöhnliche Nutzungsdauer von 10 Jahren mit jährlich 50.000 € abgeschrieben. Die Betriebsausstattung wurde im Januar 2021 für 300.000 € erworben und wird nach § 7 Abs. 1 EStG linear auf die betriebsgewöhnliche Nutzungsdauer von 5 Jahren mit jährlich 60.000 € abgeschrieben. Bei der im August 2016 erworbenen Beteiligung handelt es sich um eine 100%-ige Beteiligung an einer GmbH, die seit dem Erwerb mit den Anschaffungskosten von 200.000 € aktiviert ist." },
      { text: "Das mit einer Restschuld von 680.000 € bilanzierte Darlehen wurde im Zusammenhang mit dem Erwerb des Grundstücks aufgenommen." },
      { typ: "titel", text: "2. Veräußerung übernommenes Betriebsvermögen" },
      { text: "Gehen Sie davon aus, dass N das übernommene bebaute Grundstück im März 2023 für 1,5 Mio. € (Anteil Grund und Boden 500.000 €) und die übernommene Beteiligung im Juni 2023 für 420.000 €, C ihren übernommenen Teilbetrieb bereits im Oktober 2023 für 1 Mio. € an fremde Dritte veräußern werden." },
    ],
    aufgabe: [
      { text: "Erläutern Sie unter Angabe der einschlägigen Vorschriften, wie die Auflösung für die OHG und für die beiden Gesellschafterinnen steuerlich zu behandeln ist. Ermitteln Sie die eventuellen Aufgabegewinne von N und C." },
      { text: "Erstellen Sie die Eröffnungsbilanzen der neu eröffneten Einzelunternehmen von N und C zum 01.01.2022." },
      { text: "Berechnen Sie die AfA im Jahr 2022 für das von N übernommene Gebäude." },
      { text: "Erläutern Sie unter Angabe der einschlägigen Vorschriften, ob die unter 2. im Jahre 2023 erfolgenden Veräußerungen der Wirtschaftsgüter zu steuerlichen Folgen für N, C und die OHG im Jahre 2021/2022 führen. Erstellen Sie in diesem Fall bitte die berichtigten Eröffnungsbilanzen von N und/oder C." },
      { typ: "titel", text: "Hinweise" },
      { text: "Cent-Beträge sind auf volle Euro kaufmännisch zu runden." },
      { text: "N, C und die OHG möchten bei allen Vorgängen die niedrigsten Gewinne ausweisen und alle Steuerermäßigungen und Steuervergünstigungen im höchstmöglichen Umfang in Anspruch nehmen." },
      { text: "Sollten bei den nachfolgend unter 2. aufgeführten Veräußerungen rückwirkend stille Reserven aufgedeckt werden müssen, ist nach den Vereinbarungen der Gesellschafterinnen im Zusammenhang mit der Auflösung der OHG der dabei entstehende Veräußerungsgewinn in voller Höhe der veräußernden Gesellschafterin zuzurechnen." },
    ],
    loesung: [
      { typ: "titel", text: "Keine Musterlösung in der Quelle" },
      { text: KEINE_LOESUNG },
      { text: "Was die Aufgabenstellung selbst vorgibt: niedrigste Gewinne und alle Steuerermäßigungen und -vergünstigungen im höchstmöglichen Umfang. Die Aufgabe ist zweistufig gebaut – erst die Realteilung zum 31.12.2021 mit Eröffnungsbilanzen zum 01.01.2022, dann die Veräußerungen des Jahres 2023, deren mögliche Rückwirkung ausdrücklich abgefragt wird („berichtigte Eröffnungsbilanzen“). Die Angabe, dass das bebaute Grundstück keinen Teilbetrieb darstellt, das übrige Vermögen aber schon, ist der zentrale Sachverhaltsbaustein; ebenso die aus dem Privatvermögen gezahlte Ausgleichszahlung von 100.000 €." },
      { text: "Parallelfälle mit vollständiger Musterlösung im Campus: Die Realteilung nach § 16 Abs. 3 Sätze 2 bis 4 EStG samt Sperrfristen und Spitzenausgleich behandelt der Reiter „Personengesellschaften“ (Klausur 3) ausführlich. Ergänzungsbilanzen und die Behandlung eines Gesellschafterwechsels zeigt Teil III der Prüfung 2011 (A-B-GmbH & Co. KG) im Reiter „Originalklausuren (Prüfung)“." },
    ],
  },
  {
    id: "bil-pk-2022-teil4-killer",
    block: "amtlich",
    blockLabel: "Steuerberaterprüfung · amtliche Prüfungsaufgabe",
    nummer: 4,
    jahrgang: "2022/2023",
    teil: "IV",
    wertung: "28 von 100 Wertungspunkten",
    title: "Teil IV – Killer GmbH (28 von 100 Wertungspunkten): eine verbilligte Miete der Gesellschafterin, eine Grundstücksübertragung gegen Schuldübernahme und ein Mietverzicht des Bruders",
    thema: "Der Teil, der die Bilanzklausur in die Körperschaftsteuer hineinzieht. Die Alleingesellschafterin kauft das Betriebsgrundstück ihrer eigenen GmbH, senkt die angemessene Miete von 6.000 € auf 1.500 € im Monat und überträgt das Grundstück neun Monate später gegen bloße Übernahme des Darlehens von 420.000 € auf die GmbH – bei einem Verkehrswert von inzwischen 840.000 €. Parallel stundet ihr Bruder der GmbH die überhöhte Miete für ein unbebautes Grundstück und verzichtet am 01.11. rückwirkend auf das ganze Jahr. Gefragt sind der steuerliche Gewinn der GmbH, die Einkünfte beider Angehöriger, die Anschaffungskosten des GmbH-Anteils und das steuerliche Einlagekonto zum 31.12.2021 – also verdeckte Einlage, verdeckte Gewinnausschüttung und Betriebsaufspaltung in einem Sachverhalt",
    rechtsstand: "Rechtsstand des Prüfungsjahrgangs 2022/2023 · Wirtschaftsjahr 2021",
    quelle: "Steuerberaterprüfung 2022/2023, Prüfungsaufgaben aus dem Gebiet Buchführung und Bilanzierung, Teil IV · amtlicher Aufgabentext",
    normen: [
      "§ 5 EStG", "§ 7 Abs. 4 Satz 1 Nr. 2 Buchst. a EStG",
      "§ 32d Abs. 2 Nr. 3 EStG", "§ 60 Abs. 2 EStDV",
      "§ 253 Abs. 3 HGB",
      "§ 27 Abs. 1 Satz 2 KStG",
      "§ 4 Nr. 12 Buchst. a UStG",
    ],
    themen: ["Amtliche Prüfungsaufgabe", "Ohne Musterlösung", "Verdeckte Einlage", "Verdeckte Gewinnausschüttung", "Verbilligte Vermietung", "Steuerliches Einlagekonto", "Nahestehende Person", "Mietverzicht"],
    sachverhalt: [
      { typ: "titel", text: "Steuerberaterprüfung 2022/2023 · Teil IV: Killer GmbH (28 von 100 Wertungspunkten)" },
      { text: "Alleingesellschafterin der ein Bekleidungsgeschäft betreibenden Killer GmbH (künftig: GmbH) mit Sitz in Stuttgart ist die in Ludwigsburg wohnende, 52 Jahre alte Lea Killer (künftig: L)." },
      { text: "Die im Jahre 2004 von L gegründete GmbH ermittelt ihren Gewinn nach § 5 EStG. Das Kalenderjahr und das Wirtschaftsjahr stimmen überein. Sie versteuert ihre Umsätze nach vereinbarten Entgelten mit dem Steuersatz von 19 % und ist zum Vorsteuerabzug berechtigt, soweit sich aus dem Sachverhalt nichts anderes ergibt." },
      { text: "Die Anschaffungskosten der GmbH-Beteiligung betragen seit der Gründung der GmbH 150.000 €. Nachträgliche Änderungen dieser Anschaffungskosten sind bis zum 31.12.2020 nicht vorgekommen. Der Verkehrswert der GmbH-Beteiligung, der dem Teilwert/gemeinen Wert entspricht, hat am 31.12.2020 210.000 € betragen und erhöhte sich in der Zeit von Oktober bis Dezember 2021 auf 700.000 €." },
      { text: "Bis einschließlich 31.12.2020 erstellte die GmbH nicht zu beanstandende übereinstimmende Handels- und Steuerbilanzen. Sie schüttete ihre Jahresüberschüsse stets in voller Höhe an ihre Gesellschafterin aus, zuletzt am 18.02.2021 für das Jahr 2020 in Höhe von 40.000 €. Das steuerliche Einlagekonto nach § 27 Abs. 1 Satz 2 KStG zum 31.12.2020 wurde mit 100.000 € festgestellt." },
      { text: "Der Buchhalter der GmbH hat zum 31.12.2021 die nachfolgende, in sehr verkürzter Form wiedergegebene, vorläufige Handelsbilanz erstellt. Dabei ging er davon aus, dass wie in den Vorjahren keine davon abweichende Steuerbilanz zu erstellen ist." },
      { typ: "tabelle", spalten: ["Aktiva", "Betrag", "Passiva", "Betrag"], zeilen: [
        ["Grund und Boden", "105.000 €", "Gezeichnetes Kapital", "50.000 €"],
        ["Gebäude", "313.425 €", "Kapitalrücklage", "100.000 €"],
        ["Kommanditbeteiligung", "150.000 €", "Jahresüberschuss", "18.425 €"],
        ["Übrige Aktivposten", "170.000 €", "Darlehen", "420.000 €"],
        ["", "", "Übrige Passivposten", "150.000 €"],
        ["Summe", "738.425 €", "Summe", "738.425 €"],
      ] },
      { typ: "titel", text: "1. Erwerb, Vermietung und Veräußerung bebautes Grundstück durch L" },
      { text: "Die GmbH betreibt ihr Bekleidungsgeschäft in gemieteten Räumen, die optimal auf die Erfordernisse der GmbH abgestimmt sind. Der bisherige Eigentümer veräußerte dieses bebaute Grundstück am 1. Januar 2021 zum angemessenen Preis von 800.000 € einschließlich Nebenkosten an L. Hiervon entfielen 200.000 € auf den Grund und Boden. Zur Bestreitung des Kaufpreises nahm L ein Darlehen in Höhe von 420.000 € auf, den Restbetrag finanzierte sie aus eigenen privaten Mitteln. L führte den Mietvertrag mit der GmbH fort. Sie minderte aber ab Januar 2021 die bisherige monatliche angemessene Miete von 6.000 € auf 1.500 €, obwohl sich die GmbH nicht in finanziellen Schwierigkeiten befindet. Auf die Steuerbefreiung nach § 4 Nr. 12 Buchst. a UStG wurde nicht verzichtet. L behandelte das Grundstück und das Darlehen als Privatvermögen und schrieb das Gebäude (Baujahr 2004) nach § 7 Abs. 4 Satz 1 Nr. 2 Buchst. a EStG linear mit 2 % von 600.000 € = 12.000 €, für 2021 davon 9/12 = 9.000 €, ab." },
      { text: "L kündigte mit Ablauf September 2021 den Mietvertrag mit der GmbH und übertrug das Grundstück mit Ablauf September 2021 auf die GmbH. Diese musste lediglich das Darlehen in Höhe von 420.000 € übernehmen. Die kreditgebende Bank stimmte der Übernahme zu. Der Verkehrswert = Teilwert = gemeiner Wert des Grundstücks war bis zum 30.09.2021 auf 840.000 € gestiegen. Der Anteil des Grund und Bodens beträgt davon unverändert 25 %. Die GmbH buchte:" },
      { typ: "tabelle", spalten: ["Soll", "Betrag", "Haben", "Betrag"], zeilen: [["Grund und Boden", "105.000 €", "Darlehen", "420.000 €"], ["Gebäude", "315.000 €", "", ""]] },
      { text: "Die GmbH schreibt das Gebäude nach § 253 Abs. 3 HGB auf die voraussichtliche Restnutzungsdauer von 50 Jahren mit 2 % von 315.000 € = 6.300 €, für 2021 davon 3/12 = 1.575 € linear ab." },
      { text: "Im Zusammenhang mit dem Grundstück fielen neben der AfA folgende monatliche Kosten an: laufende Grundstückskosten 300 €, Darlehenszinsen 700 €. Die Kosten wurden bis einschließlich September 2021 von L und ab Oktober 2021 von der GmbH getragen. Die Buchung der AfA, der tatsächlichen Miete und der Kosten erfolgte von der GmbH zutreffend." },
      { typ: "titel", text: "2. Vermietung unbebautes Grundstück" },
      { text: "Bereits seit der Anschaffung im Januar 2010 vermietet David Hurtig (D), der Bruder von L, der GmbH ein unbebautes Grundstück für monatlich 3.000 €. Die angemessene Miete beträgt nur 1.000 €. Wegen der Corona-Pandemie stundete D Anfang Januar 2021 die Miete bis zum 31.10.2021, obwohl sich die GmbH nicht in finanziellen Schwierigkeiten befand. Am 01.11.2021 verzichtete er sogar rückwirkend auf die Miete für das ganze Jahr 2021. Gebucht wurde von der GmbH insoweit nichts. D erklärte mangels Zufluss Einkünfte aus Vermietung und Verpachtung von 0 €." },
    ],
    aufgabe: [
      { text: "Erläutern Sie unter Angabe der einschlägigen Vorschriften, wie die nachfolgenden Einzelsachverhalte handels- und steuerrechtlich bei der GmbH zu behandeln sind. Sofern Abweichungen von der vorläufigen Handelsbilanz der GmbH zum 31.12.2021 erforderlich sind, stellen Sie diese bitte am Ende einer jeden Textziffer dar. Gehen Sie dabei davon aus, dass die GmbH in ihrer Handelsbilanz die niedrigstmöglichen Wertansätze wünscht." },
      { text: "Sollten diese handelsrechtlichen Wertansätze mit den steuerlichen Vorschriften nicht übereinstimmen, passen Sie bitte am Ende einer jeden Textziffer die Ansätze in der Handelsbilanz durch Zusätze oder Anmerkungen an die steuerlichen Vorschriften an (§ 60 Abs. 2 EStDV) und ermitteln Sie den steuerlichen Gewinn der GmbH für 2021." },
      { text: "Ermitteln Sie die steuerpflichtigen Einkünfte von L aus der oder den offenen und verdeckten Gewinnausschüttungen der GmbH und aus der Vermietung und Übertragung des bebauten Grundstücks in das Betriebsvermögen der GmbH. Sollten bei L gewerbliche Einkünfte vorliegen, erstellen Sie bitte die Steuerbilanzen von L zum Beginn und zum Ende des Wirtschaftsjahres. Buchungssätze müssen nicht erstellt werden. Gehen Sie auf mögliche Steuerbefreiungen und Steuerermäßigungen ein. L hat keinen Antrag nach § 32d Abs. 2 Nr. 3 EStG gestellt. Gehen Sie davon aus, dass der Sparerpauschbetrag von L bereits anderweitig ausgeschöpft worden ist." },
      { text: "Ermitteln Sie die Einkünfte von D aus der Vermietung des unbebauten Grundstücks an die GmbH." },
      { text: "Stellen Sie die Auswirkungen der Geschäftsvorfälle auf die Anschaffungskosten des GmbH-Anteils für L dar und stellen Sie das steuerliche Einlagekonto der GmbH zum 31.12.2021 fest." },
      { typ: "titel", text: "Hinweise" },
      { text: "Auf die Grunderwerbsteuer und auf latente Steuern ist nicht einzugehen. Auf die Auswirkungen bei der Gewerbesteuer und auf eventuelle Änderungen der Steuerrückstellungen ist nicht einzugehen." },
      { text: "Erforderliche Bescheinigungen liegen vor bzw. wurden von der GmbH zutreffend erstellt. Steuerabzugsbeträge wurden bei der offenen Gewinnausschüttung in der richtigen Höhe einbehalten und an das Finanzamt abgeführt. Centbeträge sind kaufmännisch zu runden." },
    ],
    loesung: [
      { typ: "titel", text: "Keine Musterlösung in der Quelle" },
      { text: KEINE_LOESUNG },
      { text: "Was die Aufgabenstellung selbst vorgibt: Die GmbH wünscht handelsrechtlich die niedrigstmöglichen Wertansätze; Abweichungen zur Steuerbilanz sind nicht als eigener Buchungskreis, sondern als Zusätze und Anmerkungen nach § 60 Abs. 2 EStDV darzustellen. Abgefragt werden fünf Ergebnisse: der steuerliche Gewinn der GmbH 2021, die Einkünfte von L, die Einkünfte von D, die Anschaffungskosten des GmbH-Anteils und das steuerliche Einlagekonto zum 31.12.2021. Dass L keinen Antrag nach § 32d Abs. 2 Nr. 3 EStG gestellt hat und ihr Sparerpauschbetrag ausgeschöpft ist, ist keine Nebenbemerkung, sondern legt den Tarif der Kapitaleinkünfte fest." },
      { text: "Parallelfälle mit vollständiger Musterlösung im Campus: Die verdeckte Einlage eines Wirtschaftsguts und ihre Folgen für die Anschaffungskosten der Beteiligung nach § 6 Abs. 6 Satz 2 EStG zeigt Teil II der Prüfung 2012 (Sommer GmbH) im Reiter „Originalklausuren (Prüfung)“. Verdeckte Gewinnausschüttungen an nahestehende Personen und die Fortschreibung des steuerlichen Einlagekontos nach §§ 27, 28 KStG behandelt der Körperschaftsteuer-Campus (Klausur 2) mit eigenen Einheiten und Originalklausuren." },
    ],
  },
];

export default bilPruefungsklausuren;
