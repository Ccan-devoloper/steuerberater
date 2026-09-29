/* Unterrichtsbegleitende Unterlage Verfahrensrecht (K1 AO), Dr. Christian Mirbach.

   Wortlautgetreue Übernahme der neunseitigen Arbeitsunterlage zum Tageslehrgang
   Steuerberaterexamen 2026/2027 (Version 1.0). Die Unterlage besteht aus zwei
   Übersichten und dreizehn Fällen.

   WICHTIG: Die Quelle enthält – mit einer Ausnahme – KEINE Lösungen. Es sind
   Arbeitsblätter: hinter den Fragen stehen Leerzeilen, hinter den Tabellenzeilen
   leere Spalten zum Ausfüllen im Unterricht. Die Ausnahme ist die „Übersicht
   Verschulden § 110 Abs. 1 AO“ auf Seite 8, die den Fall 9 der Seite 7
   beantwortet. Es wird hier bewusst keine Lösung erfunden; stattdessen verweist
   jeder Eintrag auf die Stellen im Campus, an denen dieselbe Rechtsfrage mit
   vollständiger Begründung steht (AO-Skript und Short-Skript Jacobs, die
   Originalfälle der Einheiten 1 bis 8, die Keyfacts Mirbach).

   Zwei Stellen sind rekonstruiert und im Campus als Rekonstruktion ausgewiesen:
   die Übersicht „Ablauf des Besteuerungsverfahrens“ auf Seite 2 und die
   Übersicht „Verschulden § 110 Abs. 1 AO“ auf Seite 8 stehen im PDF als
   mehrspaltige Schaubilder, deren Spalten die Textextraktion zeilenweise
   ineinander schiebt. Beide sind als Tabelle in ihre Spaltenordnung
   zurückgebracht; inhaltlich ist nichts hinzugefügt.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen. */

export const aoUnterlageMirbachQuelle = {
  reihe: "Tageslehrgang Steuerberaterexamen 2026/2027 · Unterrichtsbegleitende Unterlage Verfahrensrecht · Dr. Christian Mirbach",
  stand: "Version 1.0",
  verfasser: "Dr. Christian Mirbach",
  didaktik: [
    "Diese Unterlage ist kein Skript, sondern ein Arbeitsblatt für den Unterricht: dreizehn Fälle, zu denen die Quelle die Antwort bewusst offenlässt. Sie ist deshalb genau dann wertvoll, wenn man sie zuerst selbst löst – die Musterlösungen zu denselben Rechtsfragen stehen im AO-Skript und im Short-Skript von Jacobs sowie in den Originalfällen der acht Einheiten.",
    "Die Reihenfolge der Fälle folgt dem Ablauf des Besteuerungsverfahrens, den die Übersicht auf Seite 2 vorgibt: Mitwirkungspflichten und Ermittlungsverfahren (Fälle 1 und 2), Bekanntgabe und Fristen (Fälle 3 und 4), Korrektur wegen neuer Tatsachen (Fälle 5 bis 8), Wiedereinsetzung (Fall 9), schließlich Rücknahme und Widerruf sonstiger Verwaltungsakte (Fälle 10 bis 13).",
    "Die einzige Lösung, die die Quelle mitliefert, ist die Übersicht zum Verschulden nach § 110 Abs. 1 AO. Sie ist es wert, auswendig zu sitzen: Sie stellt acht Paare gegenüber, bei denen jeweils dieselbe Lebenssituation einmal ohne und einmal mit Verschulden auftritt – Urlaub von vier bis sechs Wochen gegenüber kürzerem oder längerem Urlaub, Irrtum des Laien gegenüber Irrtum des Profis, Einspruch beim falschen Finanzamt eine Woche vor Fristablauf gegenüber kurz davor.",
  ],
};

const VERFASSER = "Dr. Christian Mirbach";
const RECHTSSTAND = "Version 1.0, Tageslehrgang 2026/2027";
const OHNE_LOESUNG = "Die Quelle ist eine Arbeitsunterlage für den Unterricht und enthält zu diesem Fall keine Lösung – hinter der Frage stehen im PDF Leerzeilen. Es wird hier bewusst keine erfunden.";

export const aoUnterlageMirbach = [
  {
    id: "ao-um-01",
    kapitel: "1",
    seite: "2",
    titelKurz: "Übersicht",
    title: "Übersicht: Ablauf des Besteuerungsverfahrens (Seite 2)",
    thema: "Das Schaubild, das die gesamte Unterlage ordnet: von der Steuerentstehung über Ermittlungsverfahren, Festsetzung und Bekanntgabe zu den Folgeverfahren – Vollstreckung, Haftung, Außenprüfung, Korrektur und Ablauf der Festsetzungsfrist",
    rechtsstand: RECHTSSTAND,
    quelle: "Unterrichtsbegleitende Unterlage Verfahrensrecht (Mirbach), Seite 2",
    verfasser: VERFASSER,
    normen: [
      "§ 38 AO", "§§ 85 ff. AO", "§§ 118 ff., §§ 155 ff. AO", "§§ 122 bis 127 AO",
      "§§ 140, 141, 147 ff., 153, 167, 168 AO", "§ 93 AO", "§ 97 AO", "§ 220 AO", "§ 240 AO",
      "§§ 169 bis 171 AO", "§§ 193 ff. AO", "§§ 249 ff. AO", "§§ 69, 71, 74, 191, 219 AO",
    ],
    themen: ["Besteuerungsverfahren", "Mitwirkungspflichten", "Bekanntgabe", "Festsetzungsfrist", "Haftung", "Vollstreckung", "Außenprüfung"],
    bloecke: [
      { typ: "titel", text: "Übersicht: Ablauf des Besteuerungsverfahrens" },
      { text: "Das Schaubild der Quelle zeigt den Ablauf in zwei Reihen. Die obere Reihe ist der Regelablauf von der Entstehung des Anspruchs bis zur wirksamen Bekanntgabe, die untere Reihe nennt die Verfahren, die daran anschließen können." },
      { typ: "tabelle", spalten: ["Stufe", "Normen", "Was die Quelle dazu notiert"], zeilen: [
        ["Steuerentstehung", "§ 38 AO i. V. m. …", "—"],
        ["Ermittlungsverfahren", "§§ 85 ff. AO", "Mitwirkungspflichten: Abgabe StErkl. §§ 147 ff. AO · Abgabe StAnm. §§ 167, 168 AO · Auskünfte (§ 93 AO), Urkunden (§ 97 AO) · Berichtigung § 153 AO · Buchführung §§ 140, 141 AO"],
        ["Festsetzung durch VA", "§§ 118 ff., §§ 155 ff. AO", "Ausnahmen: Steueranmeldung §§ 167, 168 AO · Säumniszuschläge § 240 AO"],
        ["Wirksame Bekanntgabe VA", "§§ 122 bis 127 AO", "Ab Wirksamkeit: Rechtsbehelfsverfahren i. d. R. 1 Monat Rechtsbehelfsfrist (Einspruch/Klage) · Erhebungsverfahren i. d. R. 1 Monat bis zur Fälligkeit (§ 220 AO), außer Erstattung"],
      ] },
      { typ: "tabelle", spalten: ["Anschließendes Verfahren", "Normen", "Was die Quelle dazu notiert"], zeilen: [
        ["ggf. Vollstreckung", "§§ 249 ff. AO", "—"],
        ["ggf. Haftung", "§§ 69 ff., §§ 191, § 219 AO", "Haftungstatbestände: Haftung des Vertreters § 69 · Haftung Steuerhinterzieher § 71 · Haftung Überlasser WG § 74 · Haftungsbescheid § 191 · Zahlungsaufforderung § 219"],
        ["ggf. Außenprüfung", "§§ 193 ff. AO", "—"],
        ["Korrekturverfahren", "—", "Korrekturnorm z. B.: Vorbehalt der Nachprüfung · Vorläufigkeit · Offenbare Unrichtigkeit · Neue Tatsachen · …"],
        ["Ablauf der Festsetzungsfrist", "§§ 169 bis 171 AO", "Verjährung grds.: nach 4 Jahren · Ablauf ggf. gehemmt oder Festsetzungsfrist verlängert (z. B. bei Steuerhinterziehung)"],
      ] },
      { text: "Diese beiden Tabellen sind eine Rekonstruktion: Die Quelle stellt den Ablauf als mehrspaltiges Schaubild dar, dessen Spalten die Textextraktion zeilenweise ineinander schiebt. Die Zuordnung der Stichpunkte zu den Stufen folgt den Normen, die die Quelle jeweils selbst nennt; inhaltlich ist nichts hinzugefügt." },
    ],
  },
  {
    id: "ao-um-02",
    kapitel: "2",
    seite: "3",
    titelKurz: "Fälle 1 und 2",
    title: "Fälle 1 und 2 – Mitwirkungspflichten und Auskunftsersuchen (Seite 3)",
    thema: "Welche Folgen eine verletzte Mitwirkungspflicht hat – und wann ein Auskunftsersuchen an einen anderen als den Steuerpflichtigen zulässig ist und ob das Ergebnis verwertet werden darf",
    rechtsstand: RECHTSSTAND,
    quelle: "Unterrichtsbegleitende Unterlage Verfahrensrecht (Mirbach), Seite 3",
    verfasser: VERFASSER,
    normen: ["§ 93 AO", "§ 97 AO", "§ 149 AO", "§ 152 AO", "§ 153 AO", "§ 240 AO", "§§ 328 ff. AO", "§ 102 AO"],
    themen: ["Mitwirkungspflichten", "Auskunftsersuchen", "Verwertungsverbot", "Beteiligtenvorrang", "Verspätungszuschlag"],
    bloecke: [
      { typ: "titel", text: "Fall 1" },
      { text: "Welche Konsequenzen drohen in den folgenden Fällen?" },
      { text: "– Verspätete Abgabe Steuererklärung/Steueranmeldung →" },
      { text: "– Ausbleibende Zahlung fälliger Steuerbeträge →" },
      { text: "– Unterbliebene Erteilung von Auskünften →" },
      { text: "– Unterbliebene Berichtigung nach § 153 AO" },
      { text: OHNE_LOESUNG + " Die Antworten stehen im Campus: der Verspätungszuschlag in den Keyfacts Erhebungsverfahren (Abschnitt VIII), der Säumniszuschlag dort in Abschnitt VII, die Zwangsmittel und die Folgen unterlassener Berichtigung im Skript und Short-Skript (Jacobs)." },
      { typ: "titel", text: "Fall 2" },
      { text: "Geben Sie in den nachfolgenden Fällen an, ob der Stpfl. zu Recht um Auskunft ersucht wurde und im Falle einer Auskunftserteilung die erlangten Erkenntnisse verwertet werden dürfen." },
      { typ: "tabelle", spalten: ["Sachverhalt", "Zu Recht?", "Verwertbar?"], zeilen: [
        ["Der Stpfl. wird bzgl. seines VuV-Objekts um Auskunft ersucht.", "", ""],
        ["Der Stpfl. erhält folgendes Auskunftsersuchen: „Nach den vorliegenden Unterlagen haben Sie am 12.03.2025 einen Betrag von 18.000 € an Herrn X überwiesen. Bitte teilen Sie mit, aus welchem Rechtsgrund die Zahlung erfolgte, z. B. Darlehen, Kaufpreis, Schenkung oder Arbeitslohn.“ Herr X wurde bislang nicht gefragt.", "", ""],
        ["Wie vorstehend, aber Herr X ist der Bruder des Stpfl.", "", ""],
        ["Der Steuerberater wird unmittelbar über die Belange des Mandanten um Auskunft ersucht, ohne zuvor den Stpfl. selbst um Auskunft zu ersuchen. Etwaige Belehrungen des Beraters sind nicht erfolgt.", "", ""],
        ["EM und EF werden zusammen zur ESt veranlagt. Der EM ist Alleineigentümer eines V+V-Objekts. Das FA ersucht die EF um Auskunft, ohne zuvor EM zu fragen. Eine Belehrung ist nicht erfolgt.", "", ""],
      ] },
      { text: "Die beiden rechten Spalten stehen in der Quelle leer – sie sind zum Ausfüllen im Unterricht gedacht. " + OHNE_LOESUNG },
    ],
  },
  {
    id: "ao-um-03",
    kapitel: "3",
    seite: "4 und 5",
    titelKurz: "Fälle 3 und 4",
    title: "Fälle 3 und 4 – Bekanntgabe und Einspruchsfrist (Seiten 4 und 5)",
    thema: "Vier Bekanntgabekonstellationen entlang eines festen Prüfrasters – überquellender Briefkasten, telefonisch widerrufener Bekanntgabewille, ausgezogener Ehegatte – und zwei Fristberechnungen mit der Frage, was der bloße Vortrag eines späteren Zugangs bewirkt",
    rechtsstand: RECHTSSTAND,
    quelle: "Unterrichtsbegleitende Unterlage Verfahrensrecht (Mirbach), Seiten 4 und 5",
    verfasser: VERFASSER,
    normen: ["§ 122 Abs. 2 Nr. 1 AO", "§ 122 Abs. 7 AO", "§ 124 AO", "§ 8 VwZG", "§ 355 Abs. 1 AO", "§ 108 AO", "§§ 187, 188 BGB"],
    themen: ["Bekanntgabe", "Bekanntgabewille", "Zugangsvermutung", "Einspruchsfrist", "Zusammenveranlagung", "Heilung"],
    bloecke: [
      { typ: "titel", text: "Fall 3" },
      { text: "Prüfen Sie, ob und ggfs. zu welchem Zeitpunkt der VA ordnungsgemäß bekanntgegeben wurde." },
      { text: "a) Das zuständige FA erlässt am 11.03.2026 einen EStB 2022. Der Bescheid ist dem Stpfl. am 13.03.2026 zugegangen." },
      { text: "b) Wie a), aber der Brief wurde vom Postboten im Hausflur des Mehrfamilienhauses, in dem der Stpfl. wohnt, auf einen Poststapel gelegt, weil der Einzelbriefkasten überquillt. Gefunden wurde er dort vom Stpfl. nachweislich erst am 18.04.2026." },
      { text: "c) Wie a), der zuständige Sachbearbeiter hat dem Stpfl. jedoch am 16.03.2026 telefonisch mitgeteilt, dass er seinen Willen zur Bekanntgabe widerrufe." },
      { text: "d) Das zuständige FA erlässt am 11.03.2026 einen Zusammenveranlagungsbescheid gegenüber den Eheleuten Herbert und Korinna Schmitz. Da Herbert in der Zwischenzeit aufgrund einer Ehekrise aus der ehelichen Wohnung ausgezogen war, erhält er erst am 22.05.2026 von dem Bescheid Kenntnis." },
      { text: "Die Quelle gibt zu jeder der vier Varianten dasselbe Prüfraster als leere Tabelle vor, das im Unterricht auszufüllen ist. Seine Spalten lauten: „Machtber.“ (Machtbereich) · „zutr. Empf.“ (zutreffender Empfänger) · „B-Wille“ (Bekanntgabewille) · „zust. SB“ (zuständiger Sachbearbeiter) · „Handlungsf.“ (Handlungsfähigkeit) · „Bek.-Adr.“ (Bekanntgabeadressat) · „Zeitpunkt“ · „Heilung § 8 VwZG“." },
      { text: OHNE_LOESUNG + " Dasselbe Raster und die vollständig durchgeprüften Fälle stehen im Campus im Prüfschema und in den Originalfällen der Einheit 2 (Bekanntgabe)." },
      { typ: "titel", text: "Fall 4" },
      { text: "Berechnen Sie in den nachfolgenden Fällen das Ende der Einspruchsfrist. Gehen Sie davon aus, dass der Bescheid jeweils wirksam bekanntgegeben wurde." },
      { text: "a) Das zuständige FA erlässt am 26.01.2026 einen Bescheid gegenüber dem Stpfl. Der Bescheid ist am 29.01.2026 zugegangen." },
      { text: "b) Das zuständige FA erlässt am 26.01.2026 einen Bescheid gegenüber dem Stpfl. Der Stpfl. ist der Meinung, den Bescheid erst am 31.01.2026 erhalten zu haben, weil der Bescheid im Briefkasten oben auf der Tageszeitung vom 31.01.2026 lag." },
      { text: OHNE_LOESUNG + " Die Fristberechnung nach § 122 Abs. 2 Nr. 1 AO in Verbindung mit §§ 187, 188 BGB und § 108 AO ist im Campus im Schaubild zum Beginn der Festsetzungsfrist und in den Originalfällen der Einheit 2 vollständig durchgerechnet." },
    ],
  },
  {
    id: "ao-um-04",
    kapitel: "4",
    seite: "6",
    titelKurz: "Fälle 5 bis 8",
    title: "Fälle 5 bis 8 – Neue Tatsachen nach § 173 AO (Seite 6)",
    thema: "Vier Konstellationen zur Abgrenzung von Tatsache und rechtlicher Würdigung: die falsch beurteilte steuerfreie Einnahme, die im Dezember gezahlte Januarmiete, die falsch angegebene Wohnfläche und die vergessene Mietwohnung mit einem Verlust von 9.500 Euro",
    rechtsstand: RECHTSSTAND,
    quelle: "Unterrichtsbegleitende Unterlage Verfahrensrecht (Mirbach), Seite 6",
    verfasser: VERFASSER,
    normen: ["§ 173 Abs. 1 Nr. 1 AO", "§ 173 Abs. 1 Nr. 2 AO", "§ 3 EStG", "§ 11 EStG", "§ 21 EStG"],
    themen: ["Neue Tatsachen", "Rechtsirrtum", "Grobes Verschulden", "Zufluss", "Werbungskosten"],
    bloecke: [
      { typ: "titel", text: "Fall 5" },
      { text: "Das Finanzamt erfasst eine Einnahme zu Unrecht als steuerfreie Einnahmen i. S. d. § 3 EStG. Dem FA fällt dieser Fehler später auf. Neue Tatsache i. S. d. § 173 AO?" },
      { typ: "titel", text: "Fall 6" },
      { text: "Der Stpfl. hat seine Mieteinnahmen aus § 21 EStG wie folgt erklärt:" },
      { typ: "tabelle", spalten: ["Position", "Betrag"], zeilen: [
        ["Miete Januar bis Dezember 2022", "24.000 €"],
        ["Miete Januar 2023, fällig am 01.01.2023, gezahlt am 30.12.2022", "2.000 €"],
        ["Summe", "26.000 €"],
      ] },
      { text: "Die Mieteinnahmen wurden erklärungsgemäß berücksichtigt. Nunmehr bemerkt der zuständige Sachbearbeiter, dass die Miete für Januar 2023 zu den Einnahmen des Jahres 2023 gehört. Neue Tatsache i. S. d. § 173 AO?" },
      { typ: "titel", text: "Fall 7" },
      { text: "Der Stpfl. hat ein Zweifamilienhaus erworben. Er bewohnt eine Wohnung selbst, die zweite Wohnung ist vermietet. Entsprechend den in der Steuererklärung angegebenen Wohnflächen berücksichtigt das Finanzamt 40 % der Schuldzinsen als Werbungskosten. Später stellt sich heraus, dass die Wohnfläche der eigengenutzten Wohnung 100 m² und die der vermieteten Wohnung 50 m² beträgt. Liegt eine (neue) Tatsache i. S. d. § 173 AO vor?" },
      { typ: "titel", text: "Fall 8" },
      { text: "Der Stpfl. erzielt seit Jahren Vermietungseinkünfte aus mehreren Mietobjekten. Im Veranlagungszeitraum 2022 hat er eine weitere Wohnung erworben und vermietet. Versehentlich wurden lediglich die Einkünfte aus den übrigen, bereits früher erworbenen Mietobjekten erklärt. Die Einnahmen aus der neuen Wohnung betragen 12.000 €, die Ausgaben 21.500 €. Änderung gem. § 173 AO möglich?" },
      { text: OHNE_LOESUNG + " Zu allen vier Konstellationen steht im Campus die vollständige Prüfung bereit: das Schaubild zu den neuen Tatsachen, die Originalfälle der Einheit 5 und der entsprechende Abschnitt des Skripts (Jacobs). Man beachte, dass Fall 8 wegen der Ausgaben von 21.500 € gegenüber Einnahmen von 12.000 € auf § 173 Abs. 1 Nr. 2 AO und damit auf die Verschuldensfrage zusteuert, während die Fälle 5 bis 7 zunächst die Vorfrage stellen, ob überhaupt eine Tatsache und nicht bloß eine geänderte rechtliche Würdigung vorliegt." },
    ],
  },
  {
    id: "ao-um-05",
    kapitel: "5",
    seite: "7 und 8",
    titelKurz: "Fall 9 mit Übersicht",
    title: "Fall 9 und die Übersicht Verschulden § 110 Abs. 1 AO (Seiten 7 und 8)",
    thema: "Der einzige Fall der Unterlage, den die Quelle selbst auflöst: neun Situationen zur Wiedereinsetzung – und auf der Folgeseite die Übersicht, die acht Paare von Verschulden und Nichtverschulden gegenüberstellt",
    rechtsstand: RECHTSSTAND,
    quelle: "Unterrichtsbegleitende Unterlage Verfahrensrecht (Mirbach), Seiten 7 und 8",
    verfasser: VERFASSER,
    normen: ["§ 110 Abs. 1 Satz 1 und 2 AO", "§ 91 AO", "§ 121 AO", "§ 355 Abs. 1 AO"],
    themen: ["Wiedereinsetzung", "Verschulden", "Urlaub", "Postlaufzeit", "Beraterverschulden", "Anhörung"],
    bloecke: [
      { typ: "titel", text: "Fall 9" },
      { text: "Entscheiden Sie, ob dem Stpfl. in den nachfolgenden Situationen ein Verschulden an dem Versäumnis seiner Einspruchsfrist vorzuwerfen wäre." },
      { typ: "tabelle", spalten: ["Situation", "≠ Verschulden", "Verschulden"], zeilen: [
        ["Leichte Krankheit, geplanter Eingriff", "", ""],
        ["plötzliche, schwere Krankheit (z. B. Koma)", "", ""],
        ["schwere Krankheit/Tod Angehöriger", "", ""],
        ["Urlaub 8 Wochen", "", ""],
        ["Urlaub 21 Tage", "", ""],
        ["Urlaub 30 Tage bis 2 Tage vor Fristende", "", ""],
        ["Einspruch bei falschem FA", "", ""],
        ["Verschulden anderer Person", "", ""],
        ["Irrtum bei Fristberechnung", "", ""],
      ] },
      { text: "Die beiden rechten Spalten stehen in der Quelle leer. Anders als bei den übrigen Fällen liefert die Quelle die Auflösung aber auf der Folgeseite nach:" },
      { typ: "titel", text: "Übersicht Verschulden § 110 Abs. 1 AO" },
      { typ: "tabelle", spalten: ["Kein Verschulden des Stpfl.", "Verschulden des Stpfl."], zeilen: [
        ["plötzliche, schwere Krankheit (z. B. Koma)", "Leichte Krankheit, geplanter Eingriff"],
        ["schwere Krankheit/Tod Angehöriger", "Arbeitsüberlastung"],
        ["Urlaub 4-6 Wochen und nicht min. 5 Tage zuhause innerhalb der Frist", "Urlaub < 4 oder > 6 Wochen"],
        ["verzögerter Postlauf (> 4 Tage), wenn rechtzeitig zur Post, zutreffend adressiert und frankiert", "zu spät zur Post, unterfrankiert, falsche Adresse, bekannter Poststreik"],
        ["Einspruch bei falschem FA min. 1 Woche vor Fristablauf", "Einspruch bei falschem FA kurz vor oder sogar erst nach Fristablauf"],
        ["Verschulden zuverlässiger Bote (z. B. Mama oder Bürokraft des Beraters)", "Verschulden des Beraters (Abs. 1 Satz 2) oder Auswahl-/Überwachungsverschulden"],
        ["Irrtum bei Fristberechnung durch Laie", "Irrtum bei Fristberechnung durch Profi"],
        ["Fehlende Anhörung (§ 91) und Begründung (§ 121) kausal für unterbliebene rechtzeitige Anfechtung", "Abweichung war auch ohne Anhörung oder Begründung für Stpfl. ersichtlich"],
      ] },
      { text: "Diese Tabelle ist eine Rekonstruktion der Spaltenordnung: Die Quelle stellt die Übersicht zweispaltig dar, die Textextraktion gibt die beiden Spalten zeilenweise abwechselnd aus. Die Paarbildung folgt genau dieser Abwechslung; inhaltlich ist nichts hinzugefügt." },
      { text: "Damit beantwortet die Quelle den Fall 9 selbst – bis auf die Zeile „Urlaub 30 Tage bis 2 Tage vor Fristende“, die zwei Kriterien der Übersicht zugleich berührt: die Urlaubsdauer von vier bis sechs Wochen und das Erfordernis, mindestens fünf Tage innerhalb der Frist zuhause gewesen zu sein." },
    ],
  },
  {
    id: "ao-um-06",
    kapitel: "6",
    seite: "9",
    titelKurz: "Fälle 10 bis 13",
    title: "Fälle 10 bis 13 – Rücknahme und Widerruf sonstiger Verwaltungsakte (Seite 9)",
    thema: "Der Lottogewinn am Vortag gegenüber dem Lottogewinn am Folgetag – das Schulbeispiel für die Abgrenzung von Rücknahme und Widerruf. Dazu der irrtümlich festgesetzte Verspätungszuschlag und der Haftungsbescheid nach Zahlung der Steuerschuld",
    rechtsstand: RECHTSSTAND,
    quelle: "Unterrichtsbegleitende Unterlage Verfahrensrecht (Mirbach), Seite 9",
    verfasser: VERFASSER,
    normen: ["§ 130 Abs. 1, Abs. 2 AO", "§ 131 Abs. 1, Abs. 2 AO", "§ 222 AO", "§ 152 AO", "§ 191 AO", "§ 219 AO", "§ 44 AO", "§ 47 AO"],
    themen: ["Rücknahme", "Widerruf", "Stundung", "Rechtswidriger Verwaltungsakt", "Haftungsbescheid", "Akzessorietät"],
    bloecke: [
      { typ: "titel", text: "Fall 10" },
      { text: "Der Stpfl. beantragt Zahlungsaufschub, da er aufgrund eines Diebstahls zahlungsunfähig ist. Da nach zutreffender Einschätzung des Finanzbeamten persönliche Stundungsgründe vorliegen, wird eine Stundung gewährt. Als der Stpfl. auf dem Rückweg unter seinem Autositz einen noch nicht eingelösten Lottoschein findet und kontrolliert, bemerkt er, dass er am Vortag den Euro-Jackpot geknackt hatte. Kann das Finanzamt die Stundung zurücknehmen?" },
      { typ: "titel", text: "Fall 11" },
      { text: "Der Stpfl. beantragt Zahlungsaufschub, da er aufgrund eines Diebstahls zahlungsunfähig ist. Da nach zutreffender Einschätzung des Finanzbeamten persönliche Stundungsgründe vorliegen, wird eine Stundung gewährt. Am Folgetag knackt er den Euro-Jackpot. Kann das Finanzamt die Stundung zurücknehmen?" },
      { typ: "titel", text: "Fall 12" },
      { text: "Das Finanzamt hatte im EStB aufgrund eines Irrtums einen Verspätungszuschlag i. H. v. 500,00 € festgesetzt, obwohl der Stpfl. seine Erklärung nicht zu spät eingereicht hatte. Zwei Monate später beantragt der Stpfl. die Aufhebung des Verspätungszuschlags. Rechtslage?" },
      { typ: "titel", text: "Fall 13" },
      { text: "Das Finanzamt hatte gegenüber einem Haftungsschuldner dem Grunde und der Höhe nach eine Haftungsschuld per Haftungsbescheid festgesetzt. Nach 2 Monaten kommt es zu einer vollständigen Zahlung der dazugehörigen Steuerschuld durch den Steuerschuldner. Ist eine Aufhebung des Haftungsbescheides noch möglich?" },
      { text: OHNE_LOESUNG + " Die Unterscheidung, um die es in den Fällen 10 und 11 geht, ist im Campus vollständig dargestellt: Die Fälle 10 und 12 betreffen einen von Anfang an rechtswidrigen Verwaltungsakt und damit § 130 AO, die Fälle 11 und 13 einen rechtmäßigen Verwaltungsakt, dessen Voraussetzungen erst später entfallen, und damit § 131 AO. Die durchgeprüften Fälle stehen in den Originalfällen der Einheiten 3 und 7 sowie im Skript (Jacobs)." },
    ],
  },
];

export default aoUnterlageMirbach;
