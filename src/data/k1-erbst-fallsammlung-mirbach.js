/* Unterrichtsbegleitende Fallsammlung Erbschaftsteuer/Bewertungsrecht (K1),
   Dr. Christian Mirbach, Version 1.1.

   Wortlautgetreue Übernahme der elfseitigen Fallsammlung zur Vorbereitung auf
   das Steuerberaterexamen 2026/2027: 31 Fälle, dazu die Abwandlungen zu den
   Fällen 10, 12 und 28.

   WICHTIG: Die Quelle enthält KEINE Lösungen. Sie ist eine Arbeitsunterlage
   für den Unterricht; hinter jedem Fall steht nur die Frage, eingeleitet durch
   das Zeichen ▷. Im selben Drive-Ordner liegen zwar zwei Lösungsblätter zu den
   Hausaufgabenfällen 9 und 14 sowie zur Abwandlung 2 des Falls 28 – beide sind
   jedoch Handschrift, deren Texterkennung für eine wortlautgetreue Übernahme
   unbrauchbar ist (siehe docs/offene-quellen.md, Abschnitt A). Es wird hier
   bewusst keine Lösung erfunden; stattdessen verweist jedes Kapitel auf die
   Stellen im Campus, an denen dieselbe Rechtsfrage mit vollständiger
   Musterlösung steht.

   Zwei Tabellen der Quelle (Fall 29 und Fall 30) kommen aus der Textextraktion
   spaltenweise ineinander geschoben. Sie sind in ihre Spaltenordnung
   zurückgebracht; wo die Zuordnung nicht aus dem Layout, sondern erst aus den
   Summen der Quelle folgt, sagt der Datensatz das an Ort und Stelle. Beide
   Tabellen gehen rechnerisch nicht vollständig auf – auch das ist an Ort und
   Stelle vermerkt und in docs/quellenabgleich-drive.md ausgeführt.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen. */

export const erbstFallsammlungMirbachQuelle = {
  reihe: "Vorbereitung auf das Steuerberaterexamen 2026/2027 · Unterrichtsbegleitende Fallsammlung Erbschaftsteuer/Bewertungsrecht · Dr. Christian Mirbach",
  stand: "Version 1.1",
  verfasser: "Dr. Christian Mirbach",
  didaktik: [
    "Diese Sammlung ist bewusst knapp gehalten: Jeder Fall besteht aus drei bis zehn Zeilen Sachverhalt und einer einzigen Frage. Das macht sie zum idealen Trainingsmaterial für den Einstieg – man kann in einer Stunde zwanzig Fälle durchdenken, ohne sich in Sachverhaltsarbeit zu verlieren. Die Quelle gibt die Lösungen nicht mit; wer sie braucht, findet dieselben Rechtsfragen in der Fallsammlung Schäfer, in den Hausaufgaben und in den Originalklausuren desselben Campus vollständig durchgerechnet.",
    "Der Aufbau folgt dem Prüfungsschema des ErbStG: zuerst der steuerpflichtige Vorgang (Fälle 1 bis 4), dann die persönliche Steuerpflicht mit den Erweiterungen für Wegzügler und dem Inlandsvermögenskatalog (Fälle 5 bis 7), dann Steuerübernahme, Vorerbschaft und Vorschenkungen, dann die Ermittlung des steuerpflichtigen Erwerbs, und erst danach das Bewertungsrecht – Kapitalforderungen, Renten, Grundbesitz, Anteile.",
    "Auffällig ist die Dichte der Bewertungsfälle: Allein zehn Fälle behandeln Kapitalforderungen und Renten (16 bis 25), drei den Grundbesitz (26 bis 28, letzterer mit drei Abwandlungen zum Erbbaurecht) und drei die Anteilsbewertung (29 bis 31). Genau diese Reihenfolge – Substanzwert, vereinfachtes Ertragswertverfahren, Zwischenabschluss – ist die, in der die Prüfung sie abfragt.",
  ],
};

const VERFASSER = "Dr. Christian Mirbach";
const RECHTSSTAND = "Version 1.1, Examen 2026/2027";
const OHNE_LOESUNG = "Die Quelle ist eine Arbeitsunterlage und enthält zu diesen Fällen keine Lösung – hinter jedem Fall steht nur die Frage. Es wird hier bewusst keine erfunden.";

export const erbstFallsammlungMirbach = [
  {
    id: "erbst-fs-m-01",
    kapitel: "1",
    gruppe: "Steuerpflichtiger Vorgang und persönliche Steuerpflicht",
    title: "Fälle 1 bis 8 – Steuerpflichtiger Vorgang, persönliche Steuerpflicht, Steuerübernahme",
    thema: "Zwei Lebensversicherungsfälle, die sich nur durch den Versicherungsnehmer unterscheiden; ein maschinenschriftliches Testament; der abgefundene Pflichtteilsverzicht; drei Fälle zur persönlichen Steuerpflicht mit einem Nachlass aus acht Positionen, der den Katalog des Inlandsvermögens durchdekliniert; und die Schuldübernahme mit Steuerübernahme",
    rechtsstand: RECHTSSTAND,
    quelle: "Unterrichtsbegleitende Fallsammlung ErbSt/BewR (Mirbach), Seiten 2 und 3",
    verfasser: VERFASSER,
    normen: [
      "§ 1 Abs. 1 Nr. 1 und 2 ErbStG", "§ 3 Abs. 1 Nr. 1, Nr. 4 ErbStG", "§ 3 Abs. 2 Nr. 4 ErbStG",
      "§ 7 Abs. 1 Nr. 1 ErbStG", "§ 2 Abs. 1 Nr. 1 Buchst. a und b, Nr. 3 ErbStG",
      "§ 4 Abs. 1 BewG", "§ 121 BewG", "§ 10 Abs. 2 ErbStG",
      "§§ 2247, 2231 BGB", "§ 2346 BGB",
    ],
    themen: ["Erwerb von Todes wegen", "Lebensversicherung", "Testamentsform", "Pflichtteilsverzicht", "Persönliche Steuerpflicht", "Erweiterte unbeschränkte Steuerpflicht", "Inlandsvermögen", "Steuerübernahme"],
    bloecke: [
      { typ: "titel", text: "Fall 1" },
      { text: "V stirbt, M ist Alleinerbin. V hatte eine Lebensversicherung abgeschlossen, aufgrund derer T nun nach dem Tod des V 1.000.000,00 € ausgezahlt bekommt. ▷ Steuerpflichtige Vorgänge?" },
      { typ: "titel", text: "Fall 2" },
      { text: "V stirbt, M ist Alleinerbin. V und M hatten gemeinsam eine Lebensversicherung abgeschlossen, aufgrund derer M nun nach dem Tod des V 1.000.000,00 € ausgezahlt bekommt. ▷ Steuerpflichtige Vorgänge?" },
      { typ: "titel", text: "Fall 3" },
      { text: "V stirbt, einzige noch lebende Verwandte sind seine Tochter und sein Bruder. Im Tresor des V befindet sich ein per Schreibmaschine verfasstes und von V unterschriebenes Testament, demzufolge sein Bruder Alleinerbe sein soll. ▷ Wer erbt?" },
      { typ: "titel", text: "Fall 4" },
      { text: "V stirbt, seine Tochter ist testamentarische Alleinerbin. Für eine Entschädigung von 500.000,00 € hat ihr Bruder nunmehr gegenüber seiner Schwester formwirksam den Verzicht auf die Geltendmachung seines Pflichtteils erklärt. ▷ Steuerpflichtige Vorgänge?" },
      { typ: "titel", text: "Fall 5" },
      { text: "V stirbt, T ist seine Alleinerbin. Beide sind Spanier und leben in Köln. ▷ Persönliche Steuerpflicht?" },
      { typ: "titel", text: "Fall 6" },
      { text: "V stirbt, T ist seine Alleinerbin. Beide sind Spanier und leben auf Mallorca. Vor 2 Jahren wohnten sie noch in Düsseldorf. ▷ Persönliche Steuerpflicht?" },
      { typ: "titel", text: "Fall 7" },
      { text: "V stirbt, T ist seine Alleinerbin. Beide haben die deutsche Staatsangehörigkeit und leben auf Mallorca. Vor 2 Jahren wohnten sie noch in Düsseldorf. Zum Nachlass gehören folgende Vermögensgegenstände:" },
      { text: "– Supermarkt in El Arenal (Wert 1,2 Mio. €)" },
      { text: "– 200.000,00 € in bar im Bankschließfach Sparkasse Gelsenkirchen" },
      { text: "– 750.000,00 € Bankguthaben bei der Volksbank Köln Bonn" },
      { text: "– Ferrari F430, derzeit in Reparatur in Fachwerkstatt in Düsseldorf (Wert 170.000,00 €)" },
      { text: "– 100 Aktien an der Porsche AG (Wert: 3.500,00 €)" },
      { text: "– Kleintransporter, derzeit vermietet an Lieferservice in Aachen (Wert: 25.000,00 €)" },
      { text: "– Eigentumswohnung in Brilon (Wert: 150.000,00 €)" },
      { text: "– Darlehensforderung 1 Mio. € gegenüber Start-Up in Berlin, keine dingliche Sicherung. Im Gegenzug Beteiligung am Gewinn- und Verlust zu 10 %" },
      { text: "▷ Persönliche Steuerpflicht?" },
      { typ: "titel", text: "Fall 8" },
      { text: "V erlässt T eine Schuld über 980.876,00 € und erklärt sich bereit, etwaige anfallende Schenkungsteuer zu übernehmen. ▷ Festzusetzende Steuer?" },
      { text: OHNE_LOESUNG + " Dieselben Fragen stehen im Campus mit vollständiger Lösung: die Lebensversicherungsfälle und der Pflichtteilsverzicht in der Fallsammlung (Schäfer) und in den Hausaufgaben ErbSt, die persönliche Steuerpflicht mit Inlandsvermögenskatalog in der Verschonungs- und Bewertungsstrecke, die Steuerübernahme des § 10 Abs. 2 ErbStG in den Originalklausuren." },
    ],
  },
  {
    id: "erbst-fs-m-02",
    kapitel: "2",
    gruppe: "Vorerbschaft, Vorschenkung und steuerpflichtiger Erwerb",
    title: "Fälle 9 bis 15 – Nacherbfolge, Vorschenkungen, Wert des steuerpflichtigen Erwerbs",
    thema: "Der Nacherbfall mit dem Antragsrecht auf Besteuerung nach dem Verhältnis zum Erblasser; die mittelbare Grundstücksschenkung gegenüber der reinen Geldschenkung; Konfusion beim Darlehen an den späteren Alleinerben; zwei Fälle zum schwebenden Geschäft; und der vollständig durchzurechnende Nachlass mit Bestattungskosten, Grabpflege und Spielschulden",
    rechtsstand: RECHTSSTAND,
    quelle: "Unterrichtsbegleitende Fallsammlung ErbSt/BewR (Mirbach), Seiten 3 bis 5",
    verfasser: VERFASSER,
    normen: [
      "§ 6 Abs. 2 ErbStG", "§ 14 ErbStG", "§ 9 Abs. 1 Nr. 1 ErbStG",
      "§ 10 Abs. 1, Abs. 5 Nr. 1 bis 3, Abs. 6, Abs. 9 ErbStG",
      "§ 13 Abs. 1 Nr. 4b, Nr. 4c ErbStG", "§ 13d ErbStG",
      "§ 15 Abs. 1, Abs. 3 ErbStG", "§ 16 ErbStG", "§ 19 ErbStG",
      "§ 12 BewG", "§ 157 BewG", "§§ 2100 ff. BGB", "§ 1922 BGB",
    ],
    themen: ["Vorerbschaft", "Nacherbfolge", "Mittelbare Grundstücksschenkung", "Vorschenkung", "Konfusion", "Schwebendes Geschäft", "Nachlassverbindlichkeiten", "Familienheim"],
    bloecke: [
      { typ: "titel", text: "Fall 9 (Hausaufgabe)" },
      { text: "V ist am 13.02.2021 in seiner Mietswohnung in Gütersloh verstorben. Er hatte seinen Bruder B testamentarisch zum Vorerben bestimmt. B ist nunmehr am 30.06.2025 an seinem Wohnort Duisburg verstorben. Daher geht das Vermögen auf die Tochter T des V über, da sie von V als Nacherbin bestimmt wurde. T ist 32 Jahre alt. Das schuldenfreie Vermögen hat nach Abzug sachlicher Steuerbefreiungen einen Wert von 600.000,00 €. B hat sein eigenes Vermögen seinen eigenen Kindern vererbt. ▷ Festzusetzende Steuer gegenüber T? Begünstigende Anträge gelten als gestellt." },
      { typ: "titel", text: "Fall 10" },
      { text: "V stirbt am 30.06.2025, T ist seine Alleinerbin. V hatte T am 03.05.2015 einen Geldbetrag von 500.000,00 € überwiesen, damit diese sich die Wohnung Aachener Str. 54, 52146 Würselen, 3. OG (links), kaufen konnte für 750.000,00 €. Der festzustellende Grundbesitzwert belief sich auf 600.000,00 €. Den Notarvertrag etc. hatte T am 07.07.2015 besiegelt. Am 10.10.2015 wurde sie als Eigentümerin im Grundbuch eingetragen. ▷ Relevante Vorschenkung?" },
      { typ: "titel", text: "Abwandlung Fall 10" },
      { text: "Der Geldbetrag wurde mit der Maßgabe überwiesen, dass T sich eine beliebige Wohnung davon kaufen soll. ▷ Relevante Vorschenkung?" },
      { typ: "titel", text: "Fall 11" },
      { text: "V hatte S kurz vor seinem Tod ein Darlehen über 1.000.000,00 € gewährt. Nun stirbt V und der S ist Alleinerbe. ▷ Beurteilung?" },
      { typ: "titel", text: "Fall 12" },
      { text: "V hatte sich kurz vor seinem Tod einen Porsche 911 Turbo S bestellt für 250.000,00 €. Er hatte bereits 150.000,00 € angezahlt. Das Fahrzeug wird nach dem Tod von V an den Alleinerben S ausgeliefert. Dieser zahlt den restlichen Kaufpreis an das Porsche Zentrum. ▷ WSV?" },
      { typ: "titel", text: "Abwandlung Fall 12 (Hausaufgabe)" },
      { text: "V hatte kurz vor seinem Tod den Notarvertrag über den Kauf einer Eigentumswohnung für 300.000,00 € unterschrieben (Grundbesitzwert nach BewG: 250.000,00 €). Die Eigentumsumschreibung sowie die Zahlung des Kaufpreises nebst Erwerbsnebenkosten von 10 % erfolgen erst nach dem Tod durch die Erbin T. ▷ WSV?" },
      { typ: "titel", text: "Fall 13" },
      { text: "M stirbt, T ist Alleinerbin. Zum Nachlass von M gehört ein Fiat 500 (gem. Wert 10.000,00 €). Für den Fiat ist noch eine Werkstattrechnung i. H. v. 500,00 € offen. ▷ WSV?" },
      { typ: "titel", text: "Fall 14 (Hausaufgabe)" },
      { text: "V stirbt am 30.06.2025, S ist Alleinerbe. Zum Nachlass von V gehört ein bebautes Grundstück mit vier baugleichen Etagen à 100qm. Der gesondert festgestellte Grundbesitzwert beträgt 800.000,00 €. Auf dem Grundstück lastet noch eine Restschuld von 200.000,00 €. Das Erdgeschoss ist an einen Kiosk vermietet. Die Wohnung im 1. OG steht leer, soll aber wieder vermietet werden. Im 2. OG wohnt S unentgeltlich. Nunmehr zieht S in die Wohnung im 3. OG, in der V bis zu seinem Tod gewohnt hatte. ▷ WSV?" },
      { typ: "titel", text: "Fall 15" },
      { text: "V stirbt am 30.06.2025. Alleinerbin ist seine 30-jährige Tochter T. Nachlass:" },
      { text: "– Mehrfamilienhaus, festgestellter Grundbesitzwert 1,6 Mio. €, Restschuld 1,2 Mio. €" },
      { text: "– Ferrari F430, gemeiner Wert 200.000,00 €" },
      { text: "– Spielschulden i. H. v. 9.000,00 €" },
      { text: "Für die Bestattung zahlt T 10.000,00 €. Für die Grabpflege zahlt sie 476,00 € p. a. ▷ Festzusetzende Steuer?" },
      { text: OHNE_LOESUNG + " Zu den Fällen 9 und 14 liegen im Drive-Ordner handschriftliche Lösungsblätter, deren Texterkennung für eine Übernahme unbrauchbar ist; sie stehen in docs/offene-quellen.md, Abschnitt A. Im Campus selbst sind dieselben Fragen vollständig durchgerechnet: die Nacherbfolge nach § 6 Abs. 2 ErbStG und die Vorschenkung nach § 14 ErbStG in den Originalklausuren und der Fallsammlung (Schäfer), das Familienheim und § 13d ErbStG in der Verschonungsstrecke, die Nachlassverbindlichkeiten samt Grabpflege-Kapitalisierung in den Hausaufgaben ErbSt." },
    ],
  },
  {
    id: "erbst-fs-m-03",
    kapitel: "3",
    gruppe: "Kapitalforderungen und Renten",
    title: "Fälle 16 bis 25 – Bewertung von Kapitalforderungen und wiederkehrenden Leistungen",
    thema: "Zehn kurze Bewertungsfälle in aufsteigender Schwierigkeit: die unverzinsliche Forderung mit festem Fälligkeitstag, die Tilgungsreihe, die niedrig verzinsliche Forderung, das partiarische Darlehen mit schwankender Gewinnbeteiligung – und fünf Rentenfälle von der einfachen Leibrente bis zur verbundenen Rente mit Mindest- und Höchstlaufzeit",
    rechtsstand: RECHTSSTAND,
    quelle: "Unterrichtsbegleitende Fallsammlung ErbSt/BewR (Mirbach), Seiten 5 und 6",
    verfasser: VERFASSER,
    normen: [
      "§ 12 Abs. 1, Abs. 3 BewG", "§ 13 Abs. 1, Abs. 2, Abs. 3 BewG", "§ 14 Abs. 1 bis 4 BewG",
      "§ 15 Abs. 1, Abs. 3 BewG", "§ 16 BewG", "Anlage 9a zum BewG",
    ],
    themen: ["Kapitalforderung", "Abzinsung", "Zinssatz 5,5 Prozent", "Leibrente", "Verbundene Leibrente", "Mindestlaufzeit", "Höchstlaufzeit", "Partiarisches Darlehen"],
    bloecke: [
      { typ: "titel", text: "Fall 16" },
      { text: "Stichtag 20.06.2025, zinslose Forderung über 200.000,00 €, Fälligkeit 31.10.2030. ▷ Gegenwartswert?" },
      { typ: "titel", text: "Fall 17" },
      { text: "Stichtag 20.06.2025, zinslose Forderung, Tilgung 2.000,00 € je am Monatsende, letztmalig 31.10.2030. ▷ Gegenwartswert?" },
      { typ: "titel", text: "Fall 18" },
      { text: "Stichtag 20.06.2025, Forderung über 200.000,00 €, Zins 2,00 % p. a., Fälligkeit 31.10.2030. ▷ Gegenwartswert?" },
      { typ: "titel", text: "Fall 19" },
      { text: "Stichtag 30.06.2025. Darlehen an Imbiss-Betrieb über 200.000,00 €, im Gegenzug Gewinnbeteiligung 5,00 %, Fälligkeit 31.10.2030. Gewinnanteile der letzten Jahre:" },
      { typ: "tabelle", spalten: ["Jahr", "Gewinnanteil"], zeilen: [
        ["2021", "0,00 €"],
        ["2022", "1.000,00 €"],
        ["2023", "0,00 €"],
        ["2024", "2.000,00 €"],
        ["2025", "4.000,00 €"],
      ] },
      { text: "▷ Bewertung der Forderung?" },
      { typ: "titel", text: "Fall 20 (Hausaufgabe)" },
      { text: "Stichtag 30.06.2025. S ist Alleinerbe lt. Testament. Wohnrechtsvermächtnis zugunsten der Lebensgefährtin (geb. 18.01.1994) am bislang vom Erblasser bewohnten EFH. Grundbesitzwert 186.000,00 €. Übliche Kaltmiete 900,00 € pro Monat. ▷ WSV beim Erben?" },
      { typ: "titel", text: "Fall 21" },
      { text: "Leibrente zugunsten von Herbert (67 Jahre) über mtl. 2.000,00 €. ▷ Wert der Rente?" },
      { typ: "titel", text: "Fall 22" },
      { text: "Leibrente zugunsten von Herbert (67 Jahre) über mtl. 2.000,00 €. Mindestlaufzeit 20 Jahre. ▷ Wert der Rente?" },
      { typ: "titel", text: "Fall 23" },
      { text: "Leibrente zugunsten von Herbert (67 Jahre) und Korinna (34 Jahre) über mtl. 2.000,00 € bis zum Tod des Erstversterbenden. ▷ Wert der Rente?" },
      { typ: "titel", text: "Fall 24" },
      { text: "Leibrente zugunsten von Herbert (67 Jahre) und Korinna (34 Jahre) über mtl. 2.000,00 € auf den Tod des Längerlebenden, jedoch nach dem Tod des Ersten verringert auf mtl. 1.500,00 €. ▷ Wert der Rente?" },
      { typ: "titel", text: "Fall 25" },
      { text: "Wie Fall 24, aber Mindestlaufzeit der Rente 5 Jahre und Höchstlaufzeit 20 Jahre. ▷ Wert der Rente?" },
      { text: OHNE_LOESUNG + " Die Bewertungstechnik zu allen zehn Fällen – Abzinsung nach § 12 Abs. 3 BewG, Kapitalisierung nach §§ 13, 14 BewG mit der Sterbetafel der Anlage 9a und die Sonderregeln des § 14 Abs. 2 bis 4 BewG für Mindest- und Höchstlaufzeiten – steht im Campus in der Bewertungsstrecke (Schäfer) und in den Originalklausuren mit vollständigem Rechenweg." },
    ],
  },
  {
    id: "erbst-fs-m-04",
    kapitel: "4",
    gruppe: "Grundbesitzbewertung",
    title: "Fälle 26 bis 28 – Grundbesitzwerte, mit drei Abwandlungen zum Erbbaurecht",
    thema: "Der Nachweis des niedrigeren gemeinen Werts einmal durch einen zeitnahen Kaufpreis und einmal durch Gutachten; ein Mehrfamilienhaus, bei dem jede der fünf Etagen eine andere Frage aufwirft – Werbefläche an der Fassade, Leerstand wegen Feuchtigkeitsschäden, verbilligte Vermietung an den Sohn; und ein Einfamilienhaus im Sachwertverfahren samt Garage und Erbbaurecht",
    rechtsstand: RECHTSSTAND,
    quelle: "Unterrichtsbegleitende Fallsammlung ErbSt/BewR (Mirbach), Seiten 7 und 8",
    verfasser: VERFASSER,
    normen: [
      "§ 151 Abs. 1 Satz 1 Nr. 1 BewG", "§ 157 BewG", "§ 176 Abs. 2 BewG", "§ 177 Abs. 1, Abs. 2 BewG",
      "§ 179 BewG", "§ 181 BewG", "§ 182 BewG", "§§ 184 bis 188 BewG", "§§ 189 bis 191 BewG",
      "§ 192 BewG", "§ 193 BewG", "§ 194 BewG", "§ 198 BewG",
    ],
    themen: ["Grundbesitzwert", "Niedrigerer gemeiner Wert", "Ertragswertverfahren", "Sachwertverfahren", "Bodenrichtwert", "Erbbaurecht", "Erbbaurechtskoeffizient", "Übliche Miete"],
    bloecke: [
      { typ: "titel", text: "Fall 26" },
      { text: "Zum Nachlass des am 30.06.2025 verstorbenen Erblassers gehört eine Eigentumswohnung in der Winkelgasse 3 in Gütersloh. Der Erblasser hatte die Wohnung 6 Monate vor seinem Tod für 200.000,00 € erworben. Vom Gutachterausschuss liegen keine Vergleichspreise oder -faktoren vor. Der Sachwert (§§ 189-191 BewG) beläuft sich auf 150.000,00 €. ▷ Gesondert festzustellender Grundbesitzwert?" },
      { typ: "titel", text: "Fall 27" },
      { text: "Zum Nachlass des am 30.06.2025 verstorbenen Erblassers gehört das Grundstück Winkelgasse 5 in Gütersloh. Eines Sachverständigengutachtens zufolge beläuft sich der Verkehrswert des Grundstücks am Bewertungsstichtag auf 500.000,00 €." },
      { text: "Das Grundstück ist 20,00 m breit und 30,00 m tief. Der auf den 01.01.2025 festgestellte Bodenrichtwert beläuft sich auf 400,00 €/qm. Auf den 01.01.2026 wurde ein Bodenrichtwert von 410,00 €/qm festgestellt." },
      { text: "Das Grundstück ist mit einem Gebäude mit fünf baugleichen Geschossen à 80,00 qm Wohn- bzw. Nutzfläche bebaut. Die Fertigstellung erfolgte zum 01.09.1985. Im Erdgeschoss befindet sich eine kleine Kneipe, die ortsüblich für monatlich 600,00 € zzgl. 200,00 € Nebenkosten vermietet ist. Zusätzlich wird dem Kneipenbetreiber die komplette Außenfassade als Werbefläche vermietet, wofür ein zusätzlicher Betrag von 150,00 € im Monat gezahlt wird." },
      { text: "Der Erblasser bewohnte bis zu seinem Tod die Wohnung im 1. Obergeschoss. Bis auf das Dachgeschoss werden alle anderen Wohnungen zu Wohnzwecken vermietet. Das Dachgeschoss steht zurzeit leer, weil es sich trotz intensiver Bemühungen aufgrund einiger Feuchtigkeitsschäden bislang schwierig gestaltete, einen Mieter zu finden." },
      { text: "Die Wohnung im 3. OG ist am Stichtag für fremdüblich 500,00 € zzgl. 100,00 € Nebenkosten an eine junge Studentin vermietet. Im 2. Obergeschoss wohnt der Sohn des Erblassers für eine Monatsmiete von 400,00 € zzgl. 100,00 € Nebenkosten. ▷ Gesondert festzustellender Grundbesitzwert?" },
      { typ: "titel", text: "Fall 28" },
      { text: "Zum Nachlass des am 30.06.2025 verstorbenen Erblassers gehört ein mit einem Einfamilienhaus gehobenen Standards bebautes Grundstück (Fertigstellung 01.09.1964) in der Winkelgasse 7 in Gütersloh. Es handelt sich um ein voll unterkellertes freistehendes Einfamilienhaus mit EG und OG. Das Dachgeschoss wurde nicht ausgebaut. Das Haus verfügt über eine komfortable Wohnfläche von 400 qm und über eine Bruttogrundfläche von 600 qm. Am Stichtag ist es für ortsüblich 2.000,00 € zzgl. 400,00 € Nebenkosten vermietet. Das Grundstück ist 500 qm groß. Der auf den 01.01.2025 festgestellte Bodenrichtwert beläuft sich auf 500,00 €/qm. ▷ Gesondert festzustellender Grundbesitzwert?" },
      { typ: "titel", text: "Abwandlung 1" },
      { text: "Weiterhin befindet sich auf dem Grundstück eine Garage mittleren Standards mit einer BGF von 20,00 qm. Die Garage wurde in 2019 errichtet." },
      { typ: "titel", text: "Abwandlung 2" },
      { text: "Das Einfamilienhaus wurde durch den Erblasser im Erbbaurecht erbaut. Das Erbbaurecht wurde zum 01.01.1963 begründet. Bei Ablauf des Erbbaurechts zum 31.12.2060 ist eine volle Entschädigung des Gebäudewerts vorgesehen. Der jährlich zu zahlende Erbbauzins beträgt 4.000,00 €. Vom Gutachterausschuss wurde lediglich ein Erbbaurechtsfaktor von 1,10 ermittelt. Der zugrunde gelegte Erbbauzinssatz beträgt 3,00 %." },
      { text: "Var. a) Der Erbbaurechtskoeffizient wurde mit 0,9 festgestellt." },
      { text: "Var. b) Weitere Gutachterinfos sind nicht vorhanden." },
      { text: OHNE_LOESUNG + " Zur Abwandlung 2 liegt im Drive-Ordner ein handschriftliches Lösungsblatt, dessen Texterkennung für eine Übernahme unbrauchbar ist (docs/offene-quellen.md, Abschnitt A). Im Campus stehen dieselben Bewertungswege vollständig: das Ertragswertverfahren mit der Abgrenzung der üblichen Miete, das Sachwertverfahren und die Erbbaurechtsbewertung nach §§ 192 ff. BewG in der Bewertungsstrecke (Schäfer), dort auch die große Bewertungsklausur mit drei Grundbesitzwertermittlungen." },
    ],
  },
  {
    id: "erbst-fs-m-05",
    kapitel: "5",
    gruppe: "Anteils- und Betriebsvermögensbewertung",
    title: "Fälle 29 bis 31 – Anteilsbewertung: Substanzwert, vereinfachtes Ertragswertverfahren, Zwischenabschluss",
    thema: "Die drei Wege zum Anteilswert nebeneinander – der Substanzwert mit einer Dreijahresrechnung nach § 4 Abs. 1 EStG und zwei Beteiligungen, deren eine betriebsnotwendig ist und deren andere nicht; die Bilanz zum 31.12.2024 ohne Zwischenabschluss; und der auf den Stichtag aufgestellte Zwischenabschluss mit Drohverlustrückstellung und § 6b-Rücklage",
    rechtsstand: RECHTSSTAND,
    quelle: "Unterrichtsbegleitende Fallsammlung ErbSt/BewR (Mirbach), Seiten 9 bis 11",
    verfasser: VERFASSER,
    normen: [
      "§ 11 Abs. 2 BewG", "§ 97 Abs. 1a BewG", "§ 99 BewG", "§ 109 BewG",
      "§§ 199 bis 203 BewG", "§ 200 Abs. 2 bis 4 BewG", "§ 202 BewG", "§ 203 BewG",
      "§ 4 Abs. 1 EStG", "§ 6b EStG", "§ 13b Abs. 4 Nr. 2 ErbStG",
    ],
    themen: ["Anteilsbewertung", "Substanzwert", "Vereinfachtes Ertragswertverfahren", "Zwischenabschluss", "Junges Verwaltungsvermögen", "Nicht betriebsnotwendiges Vermögen", "Drohverlustrückstellung", "Firmenwert"],
    bloecke: [
      { typ: "titel", text: "Fall 29" },
      { text: "Zum Vermögen des am 30.06.2025 verstorbenen Erblassers gehört ein 25 %-Anteil am Stammkapital der Flexx GmbH, die sich auf die Herstellung von Fitnessgeräten spezialisiert hat. Der zutreffend ermittelte Substanzwert der Flexx GmbH beläuft sich auf 18.500.000,00 €." },
      { text: "Im Betriebsvermögen befindet sich eine 10 %-Beteiligung an der Rollwerk GmbH, welche im Jahr 2019 zur Stärkung des Betriebskapitals erworben wurde. Der Anteilswert beläuft sich zum Bewertungsstichtag auf 200.000,00 €. Das zur Finanzierung des Beteiligungserwerbs aufgenommene Darlehen valutiert zum Bewertungsstichtag bei 100.000,00 €. Die seit 2013 bestehende Beteiligung an der Zero-Food GmbH (30 %) ist betriebsnotwendig. Der zum Bewertungsstichtag festgestellte gemeine Wert beläuft sich auf 300.000,00 €." },
      { text: "Zum Todeszeitpunkt liegen folgende Gewinnermittlungen nach § 4 Abs. 1 EStG vor:" },
      { typ: "tabelle", spalten: ["Position", "2022", "2023", "2024"], zeilen: [
        ["Rohertrag", "4.167.000 €", "4.893.000 €", "4.360.000 €"],
        ["Dividenden Rollwerk GmbH", "30.000 €", "35.000 €", "34.000 €"],
        ["Dividenden Zero-Food GmbH", "12.000 €", "12.000 €", "12.000 €"],
        ["Gewinn aus Maschinenverkauf", "—", "120.000 €", "—"],
        ["Sonstige Erträge", "250.000 €", "297.000 €", "243.000 €"],
        ["Summe", "4.459.000 €", "5.357.000 €", "4.649.000 €"],
        ["Betriebsausgaben inkl. GF-Gehalt", "2.583.000 €", "2.790.000 €", "2.165.000 €"],
        ["nicht abzugsfähige Betriebsausgaben", "7.000 €", "11.000 €", "7.000 €"],
        ["lineare AfA auf Firmenwert", "12.000 €", "12.000 €", "12.000 €"],
        ["lineare AfA auf bewegliches AV", "230.000 €", "260.000 €", "260.000 €"],
        ["lineare AfA auf Lizenzrecht", "10.000 €", "10.000 €", "10.000 €"],
        ["degressive AfA auf Firmen-Lkw", "—", "25.000 €", "18.750 €"],
        ["Portokosten", "7.500 €", "57.500 €", "32.500 €"],
        ["Schuldzinsen Anteil Rollwerk GmbH", "4.500 €", "4.000 €", "3.500 €"],
        ["Zwischensumme", "1.575.000 €", "2.197.500 €", "2.139.250 €"],
        ["GewSt", "270.000 €", "370.000 €", "360.000 €"],
        ["KSt und SolZ", "260.000 €", "350.000 €", "340.000 €"],
        ["Bilanzgewinn, § 4 Abs. 1 EStG", "1.045.000 €", "1.477.500 €", "1.439.250 €"],
      ] },
      { text: "Zur Tabelle zwei Hinweise. Erstens: Die Quelle stellt die drei Jahresspalten nebeneinander; die Textextraktion gibt sie zeilenweise aus, wobei bei den Zeilen „Gewinn aus Maschinenverkauf“ und „degressive AfA auf Firmen-Lkw“ die Spaltenzuordnung verlorengeht, weil dort nicht für jedes Jahr ein Wert steht. Die Zuordnung ist hier aus den Summen der Quelle zurückgerechnet: Der Maschinenverkauf gehört zu 2023 (4.893.000 + 35.000 + 12.000 + 297.000 = 5.237.000; die Quelle weist 5.357.000 aus, die Differenz von 120.000 € ist genau der Maschinenverkauf), die degressive Lkw-AfA zu 2023 und 2024, was auch zur Anschaffung im September 2023 passt. Zweitens: Die drei Zwischensummen gehen mit den darüber ausgewiesenen Positionen rechnerisch nicht auf – die Abweichungen betragen 30.000 € (2022), 10.000 € (2023) und 1.000 € (2024). Ob das an einzelnen Ziffern der Textextraktion oder an der Quelle selbst liegt, lässt sich nicht entscheiden; maßgeblich für die Aufgabe sind die Zwischensummen, wie die Quelle sie ausweist." },
      { text: "Der Steuerbilanzgewinn 2025 beläuft sich auf 1.380.000,00 €. Bei dem Gewinn aus dem Maschinenverkauf handelt es sich um die Veräußerung einer nicht mehr benötigten Maschine zur Herstellung von Kettlebells mit Sandfüllung." },
      { text: "Daneben wurde für einen im September 2023 für 100.000 € angeschafften LKW (ND 6 Jahre), der zur Auslieferung der Fitnessgeräte genutzt wird, degressive AfA geltend gemacht. ▷ Gesondert festzustellender Anteilswert?" },
      { typ: "titel", text: "Fall 30" },
      { text: "Zum Nachlass des am 30.06.2025 verstorbenen V gehört ein 20 %-Anteil an der Tivoli GmbH. Ein Zwischenabschluss wurde nicht erstellt. Die letzte vorliegende Steuerbilanz der Tivoli GmbH zeigt zum 31.12.2024 folgendes Bild:" },
      { typ: "tabelle", spalten: ["Aktiva", "Betrag", "Passiva", "Betrag"], zeilen: [
        ["Grund und Boden", "200.000 €", "Kapital", "1.341.500 €"],
        ["Gebäude", "487.500 €", "Verbindlichkeiten", "250.000 €"],
        ["BGA", "40.000 €", "GewSt-Rückstellung", "20.000 €"],
        ["Warenbestand", "120.000 €", "Sonstige Rückstellungen", "300.000 €"],
        ["Forderungen", "119.000 €", "Passiver RAP", "25.000 €"],
        ["Bank", "1.120.000 €", "Rücklage § 6b EStG", "50.000 €"],
        ["Bilanzsumme", "1.986.500 €", "Bilanzsumme", "1.986.500 €"],
      ] },
      { text: "Auch diese Bilanz steht in der Quelle zweispaltig und ist hier in ihre Spaltenordnung zurückgebracht. Eigene Feststellung: Die Passivseite geht mit 1.986.500 € genau auf, die Aktivseite dagegen nicht – die sechs Positionen ergeben 2.086.500 € und damit 100.000 € mehr als die ausgewiesene Bilanzsumme. Die Positionen stehen unverändert so, wie die Quelle sie ausweist." },
      { text: "Die in der Bilanz ausgewiesenen Werte sind nicht zu beanstanden, soweit sich nachfolgend nichts anderes ergibt. Der Wert im vereinfachten Ertragswertverfahren beläuft sich auf 1.100.000,00 €." },
      { text: "Für das sich im Betriebsvermögen der Gesellschaft befindende Grundstück ist zum Bewertungsstichtag ein Grundbesitzwert von 800.000,00 € gesondert festgestellt worden. Die jährliche Gebäude-AfA beläuft sich auf 15.000,00 €." },
      { text: "Zum 31.12.2024 hatte die Gesellschaft in ihrer Handelsbilanz rechtlich zutreffend eine Drohverlustrückstellung in Höhe von 40.000,00 € ausgewiesen. Mit dieser ist am Stichtag ebenfalls noch zu rechnen." },
      { text: "Da sich die Tivoli GmbH mittlerweile einen Namen gemacht hat, kann ihr ein Firmenwert von 150.000,00 € beigemessen werden. Die Wiederbeschaffung des Warenbestandes würde am Stichtag 80.000,00 € kosten. Die BGA wurde vor einigen Jahren für 100.000,00 € angeschafft. Der Gewinn der Gesellschaft des Jahres 2025 beläuft sich auf 225.000,00 €. ▷ Gesondert festzustellender Anteilswert?" },
      { typ: "titel", text: "Fall 31" },
      { text: "Zum Vermögen des am 30.06.2025 verstorbenen Erblassers gehört ein 40 %-Anteil am Stammkapital der Aquintus GmbH (A-GmbH). Der vereinfachte Ertragswert der A-GmbH beläuft sich auf 5.000.000,00 €. Einem auf den 30.06.2025 aufgestellten Zwischenabschluss zufolge beläuft sich der Saldo des Betriebsvermögens auf 3.000.000,00 €. Die hierin enthaltenen Werte sind nicht zu beanstanden, soweit sich nachfolgend nichts Gegenteiliges ergibt." },
      { text: "Das Betriebsgrundstück der A-GmbH weist am 30.06.2025 einen Buchwert von 1,3 Mio. € auf. Der gesondert festgestellte Grundbesitzwert beläuft sich auf 1,5 Mio. €." },
      { text: "Weiterhin befindet sich seit Anfang 2024 im Eigentum der A-GmbH ein Mehrfamilienhaus mit einem Buchwert von 1,8 Mio. €. Der gesondert festgestellte Grundbesitzwert beläuft sich auf 2,0 Mio. €." },
      { text: "Auf ihrem Depot bei Trade Republic verfügt die A-GmbH seit 2017 über ein Aktienvermögen im Streubesitz mit einem Kurswert von 1,00 Mio. €. Die Anschaffungskosten beliefen sich auf 300.000,00 €. Am Stichtag verfügt die A-GmbH über ein Bankguthaben von 1,00 Mio. €." },
      { text: "Die A-GmbH hat am Stichtag Verbindlichkeiten gegenüber Lieferanten i. H. v. 1,25 Mio. €. Außerdem befindet sich im Betriebsvermögen eine Rücklage nach § 6b EStG i. H. v. 250.000,00 €. Nicht enthalten ist hingegen eine handelsrechtlich zutreffend gebildete Drohverlustrückstellung i. H. v. 125.000,00 €. ▷ Steuerpflichtiger Wert des Anteils?" },
      { text: OHNE_LOESUNG + " Im Campus stehen alle drei Bewertungswege vollständig durchgerechnet: das vereinfachte Ertragswertverfahren nach §§ 199 ff. BewG mit den Hinzu- und Abrechnungen des § 202 BewG, der Substanzwert als Mindestwert nach § 11 Abs. 2 Satz 3 BewG und die Abgrenzung des Verwaltungsvermögens – in der Verschonungsstrecke, der Bewertungsstrecke (Schäfer) und den Originalklausuren." },
    ],
  },
];

export default erbstFallsammlungMirbach;
