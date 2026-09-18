/* AO Short-Skript "Steuerliches Verfahrensrecht" von Hans-Jürgen Jacobs (Mai 2025, 49 Seiten).

   Wortlautgetreue Erfassung der Arbeitsunterlage im Blockformat - parallel zum
   grossen AO-Skript (k1-ao-skript-jacobs.js) und unabhaengig von der verdichteten
   Overlay-Fassung in ao-shortskript-2025.js, die dieselbe Quelle nur als
   Einblendung in die bestehenden AO-Lernmodule aufbereitet.

   Quelle im Drive: "B-S25-AO-Short-Skript-(Jacobs)-0425 (1).pdf",
   Drive-ID 1fuGSbReWCvFo0ClbWr8G7WaRfYeiRySC. Der Dateiname nennt April 2025,
   das Deckblatt der Datei selbst dagegen Mai 2025.

   Der personenbezogene PDF-Wasserzeichentext ist entfernt. Stellen, an denen die
   Quelle nicht aufgeht oder verschrieben ist, sind wortlautgetreu uebernommen und
   mit "(so in der Quelle)" gekennzeichnet; vgl. docs/quellenabgleich-drive.md. */

const VERFASSER = "Hans-Jürgen Jacobs";
const RECHTSSTAND = "Rechtsstand 2025";

const TS1 = { teil: "I", teilLabel: "Teil I – Die AO-Klausur in der schriftlichen Steuerberater-Prüfung", teilTitel: "Klausuraufbau, Gutachtenstil und typische AO-Probleme der Fallbearbeitung" };

export const aoShortSkriptJacobsQuelle = {
  reihe: "AO Short-Skript „Steuerliches Verfahrensrecht“ · Hans-Jürgen Jacobs, StB-Lehrgang",
  stand: "Mai 2025 · Rechtsstand 2025",
  didaktik: [
    "Das Short-Skript ergänzt das große AO-Skript um Klausurtechnik und Prüfungsschwerpunkte. Es versteht sich ausdrücklich nicht als vollständige Darstellung: Steuererhebungsverfahren, FGO-Verfahren, Steuerstrafrecht und Haftungsrecht sind nicht enthalten, bleiben nach der Quelle aber uneingeschränkt prüfungsrelevant.",
    "Der Teil I führt durch den Aufbau der Klausurlösung – von der Erfassung des Sachverhalts über den Gutachtenstil mit Obersatz, Subsumtion und Ergebnis bis zu den typischen allgemeinen AO-Problemen der Fallbearbeitung.",
    "Der Teil II wertet die Schwerpunkte der AO-Klausuren der Jahre 2016 bis 2024 aus und gibt zu jedem Prüfungsjahr den Sachverhalt, die Aufgabenstellungen mit ihrer Punktzahl und die zu prüfenden Vorschriften wieder.",
  ],
};

const QUELLE = aoShortSkriptJacobsQuelle;

export const aoShortSkriptJacobs = [
  {
    ...TS1,
    id: "ao-short-1",
    kapitel: "1",
    title: "Vorbemerkungen und Abschnitt 1, I bis III: Allgemeines, Klausurtechnik in fünf Schritten und Hilfsmittel",
    thema: "Reichweite der Arbeitsunterlage, Aufbau und Punkteverteilung der ersten Prüfungsklausur, die fünf Arbeitsschritte bei der Bearbeitung eines AO-Sachverhalts sowie AEAO, BpO, VollstrA und VollzA als zugelassene Hilfsmittel",
    normen: ["§§ 193ff AO", "AEAO", "BpO", "VollstrA", "VollzA"],
    themen: ["Klausurtechnik", "Gutachtenstil", "Hilfsmittel", "Zeiteinteilung"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "Short-Skript zum Fachgebiet „Steuerliches Verfahrensrecht“ – Teil I: Die AO-Klausur in der schriftlichen Steuerberater-Prüfung" },
      { typ: "titel", text: "Vorbemerkungen" },
      { text: "☞ Diese Arbeitsunterlage soll ergänzende Hinweise zur Klausurtechnik und zu den Schwerpunkten der AO-Klausur in der Steuerberaterprüfung geben." },
      { text: "☞ Im Hinblick auf die Stofffülle und den Umfang der bereits zur Verfügung gestellten Skripte werden nur die wichtigsten Teilgebiete des Verfahrensrechtes dargestellt." },
      { text: "☞ Nicht enthalten sind Ausführungen zum Steuererhebungsverfahren, zum FGO-Verfahren, zum Steuerstrafrecht und zum Haftungsrecht! Selbstverständlich sind diese Teilbereiche ebenfalls prüfungsrelevant!" },
      { typ: "titel", text: "Abschnitt 1: Aufbau der Klausurlösung, Gutachtenstil und wichtige allgemeine Hinweise" },
      { text: "Die meisten Kandidaten fürchten in der Steuerberaterprüfung besonders die gemischte Klausur und ganz besonders deren AO-Teil. Dies beruht vor allem darauf, dass AO-Klausuren zwei besondere Schwierigkeiten bieten:" },
      { text: "Erstens gibt es -anders als bei den übrigen Klausuren- kein einheitliches Prüfungsschema und keinen einheitlichen Lösungsaufbau und zweitens sind sie im Regelfall im Gutachtenstil zu lösen." },
      { text: "Im nachfolgenden Abschnitt wird deshalb gezeigt, wie AO-Klausuren gutachtlich bearbeitet werden und insbesondere wie die Lösung aufgebaut und dargestellt werden kann." },
      { typ: "titel", text: "I. Allgemeines" },
      { text: "Die erste Klausur, die in der Steuerberaterprüfung zu schreiben ist, enthält „Aufgaben aus dem Verfahrensrecht und anderen Steuerrechtsgebieten“. Sie besteht aus einem AO/FGO-Teil (im Regelfall 35 Punkte), einem USt-Teil (im Regelfall 35 Punkte) und einem ErbSt-Teil (im Regelfall 30 Punkte). Insgesamt werden in der Klausur 100 Punkte vergeben." },
      { text: "Der AO/FGO-Teil besteht ganz überwiegend aus einem längeren oder vereinzelt aus mehreren kürzeren Sachverhalten mit jeweils einer oder mehreren Aufgaben. Im AO/FGO-Teil erhält man fast alle Punkte für eine überzeugende Darstellung des Lösungswegs; dh die Anwendung der abstrakten Gesetzesvorschriften auf den konkreten und vorgegebenen Sachverhalt. Für die Formulierung des zutreffenden Ergebnisses gibt es i. d. R. nur wenige Punkte. Bei AO-Klausuren ist also der Weg das Ziel!" },
      { text: "Rechnerische Kontrolle: 35 Punkte AO/FGO zuzüglich 35 Punkte USt und 30 Punkte ErbSt ergeben die genannten 100 Punkte." },
      { typ: "titel", text: "II. Hinweise zur Klausurtechnik im Fachgebiet Abgabenordnung" },
      { text: "➢ Die nachfolgenden Ausführungen können nur eine Hilfestellung darstellen; jeder sollte anhand seiner bisherigen Erfahrungen den besten Weg zur Lösung von Klausuren finden!" },
      {
        typ: "tabelle",
        spalten: ["Schritt", "Vorgehen", "Erläuterungen"],
        zeilen: [
          ["1. Schritt", "Zunächst zuerst die Aufgabenstellung und danach den Sachverhalt einmal komplett durchlesen; hierbei sollten im Regelfall keine Markierungen oder Anmerkungen vorgenommen werden.", "• Wichtig ist, zunächst die Aufgabenstellungen sorgfältig durchzulesen und ggf. schon zu wissen, wo „die Richtung hingeht“; welche Teilbereiche der AO sind betroffen und was der Klausurverfasser „hören will“ = „Was bringt die Punkte?“"],
          ["2. Schritt", "Nochmaliges genaues Lesen der Aufgabenstellung und der Bearbeitungshinweise; falls eine genaue Reihenfolge Ihrer Lösungen verlangt wird, ist diese in jedem Fall einzuhalten!", "• Prüfen Sie insbesondere Bearbeitungshinweise und Anlagen (Gesetzestexte, Kalender usw.), da diese oft als Hilfestellung gedacht sind, um Ihnen ein ökonomisches und auf die eigentlichen Probleme der Klausur bezogenes Arbeiten zu ermöglichen. • Beantworten Sie nur die tatsächlich gestellten Fragen. Gehen Sie nicht auf Probleme ein, nach denen gar nicht gefragt ist. Sie verlieren dadurch nur Zeit und schaffen zusätzliche Fehlerquellen."],
          ["3. Schritt", "Gehen Sie entsprechend der vorgegebenen Aufgabenstellung Punkt für Punkt vor; hierbei sind Ihrer Ansicht nach wichtige Daten oder Angaben im Sachverhalt ggf. zu kennzeichnen bzw. zu markieren!", "• Nehmen Sie keine Ergänzungen oder Abweichungen hinsichtlich der Sachverhaltsdarstellung vor; idR ist bei Klausuren nur eine zutreffende Lösung möglich! • Bei mehreren Beteiligten und zahlreichen zeitlichen Daten ist ggf die Anfertigung einer Skizze oder Zeittabelle zweckmäßig. • Die Sachverhalte der letzten zehn Jahre erstreckten sich meist über drei bis fünf Seiten, enthielten viele Daten bzw. Informationen und waren oft sehr komplex. Ihre erste Aufgabe bei der Klausurlösung besteht folglich darin, unter Beachtung der Aufgabenstellung den Sachverhalt im Detail zu erfassen. • Der Idealzustand wäre, indem Sie (beim zweiten Durchlesen des Falles) die wichtigsten Daten und Fakten auf einem gesonderten DIN-A4-Blatt in einer Fallskizze oder Zeittabelle zusammenfassen. Alternativ ist wegen der „Zeitnot“ die Markierung der entscheidungserheblichen Angaben und Daten im Aufgabentext mit Anmerkungen im Regelfall der Vorzug zu geben."],
          ["4. Schritt", "Nunmehr stellen Sie fest, welche Gesetzesvorschriften auf die Aufgabenstellung Anwendung finden könnte. Bitte denken Sie an den Vorrang der Spezialvorschriften („Abweichend von Absatz 1.....“) vor den Grundvorschriften und achten auch auf nachfolgende Absätze und auf sich anschließenden Vorschriften („Gehen Sie auf alle in Betracht kommenden Vorschriften ein“)", "• Denken Sie daran, dass Ihnen neben der Abgabenordnung auch weitere Hilfen bei der Auslegung von Vorschriften in den Beck´schen-Steuerrichtlinien/Steuererlasse zur Verfügung stehen; insbesondere der Anwendungserlass zur AO (Beck-StR Nr. 800)!"],
          ["5. Schritt", "Entwickeln Sie unter Angabe der gesetzlichen Grundlagen die Lösung zu dem Ihnen vorgegebenen Sachverhalt = „Das Lösungskonzept wird zu Papier gebracht“!", "• Bemühen Sie sich um einen systematischen Aufbau Ihrer Lösung; insbesondere dann, wenn keine detaillierte Aufgabenstellung vorgegeben wird („Nehmen sie umfassend und unter Angabe der gesetzlichen Bestimmungen Stellung“) • Gesetzesvorschriften bestehen grundsätzlich aus mehreren Tatbestandsmerkmalen, die alle erfüllt sein müssen, um die Rechtsfolge der Vorschrift eintreten zu lassen. Nehmen Sie zu allen Tatbestandsmerkmalen unter Prüfung des Sachverhaltes Stellung bzw. erläutern Sie, aus welchen Gründen einzelne Tatbestandsmerkmale nicht erfüllt sind."],
        ],
      },
      { text: "„Im AO-Teil bringt nicht die richtige Lösung die meisten Punkte, sondern die Entwicklung und Begründung des Lösungsweges!“" },
      { text: "WICHTIG: Die Darstellung der Klausurtechnik ist jedoch in jedem Fall abhängig von der zur Verfügung stehenden Zeit, die für den AO-Teil idR 2 Stunden beträgt. Somit ist das vorstehende Schema nur ein Hinweis bei optimalen „Zeit“-Verhältnissen, die bei StB-Prüfungsklausuren regelmäßig nicht vorliegen werden. Die wenigsten Prüfungsteilnehmer werden in 6 Stunden fertig; auch das sollte man einkalkulieren. Vor allen Dingen in der gemischten Klausur wird empfohlen sich mit allen drei Teilbereichen beschäftigt werden und zumindest Lösungsansätze gefunden werden. (der letzte Satz ist in der Quelle verstellt; so in der Quelle)" },
      { text: "ABER: Egal, was von Lehrgangsanbietern oder in Blogs versprochen wird, es gibt kein Patentrezept. Sonst hätte ich mir dieses Patent schon eintragen lassen!" },
      { text: "Man kann es auch so sagen: „Viele Wege führen nach Rom; Hauptsache man kommt an“!" },
      { typ: "titel", text: "III. Hilfsmittel in der Verfahrensrechtsklausur neben der Abgabenordnung" },
      { text: "1. AEAO: Für den schriftlichen Teil der Prüfung sind die Textausgaben der Steuergesetze einschließlich Durchführungsverordnungen und Richtlinien zugelassen." },
      { text: "Darunter fällt auch der AEAO (Anwendungserlass zur AO), der als Hilfsmittel für die AO-Klausur wichtige Hinweise geben kann. Im AEAO sind viele prüfungsrelevante AO-Vorschriften (unter Berücksichtigung der BFH-Rechtsprechung) kommentiert. Dem AEAO können Argumente zur Begründung der Klausurlösung entnommen werden." },
      { text: "2. Die BpO, die VollstrA und die VollzA – Ebenfalls zugelassen sind" },
      { text: "• die BpO (Betriebsprüfungsordnung), die Verwaltungsvorschriften für die Außenprüfung (§§ 193 ff. AO) enthält und u.a. in der Steuerberaterprüfung2021 relevant war (Beck-Steuererlasse Nr. 800, § 193/1), sowie (fehlendes Leerzeichen so in der Quelle)" },
      { text: "• die VollstrA (Vollstreckungsanweisungen) und VollzA (Vollziehungsanweisungen), die in der Steuerberaterprüfung 2007 (deren Gegenstand u. a. Rechtsbehelfe gegen Pfändungen waren) und 2022 (allgemeine Vollstreckungsvoraussetzungen), herangezogen werden konnten (Beck-Steuererlasse, Nr. 800a und 800b)! In den letzten Jahren war das Vollstreckungsrecht selten und nur am Rande Gegenstand der Prüfung." },
      { text: "Auch an diese Verwaltungsvorschriften sollte man bei Abfragen zu diesen Themenbereichen denken. Insbesondere bei Fallgestaltungen zum Vollstreckungsrecht ist hierdurch eine wichtige Hilfestellung gegeben!" },
    ],
  },
  {
    ...TS1,
    id: "ao-short-2",
    kapitel: "2",
    title: "Abschnitt 1, IV: Allgemeine Hinweise zum Inhalt der AO-Klausuren – die fundamentale Aufbauregel",
    thema: "Welche Verwaltungsakte Gegenstand der Klausuren sind, der Vorrang des Einspruchsverfahrens vor den Korrekturvorschriften und die beiden typischen Beratungssituationen",
    normen: ["§§ 347 bis 367 AO", "§ 347 Abs. 1 AO", "§ 129 AO", "§ 164 AO", "§ 164 Abs. 2 AO", "§ 165 Abs. 2 AO", "§§ 172ff AO", "§ 177 AO", "§§ 169ff AO", "§ 171 Abs. 4 AO", "§ 351 Abs. 1 AO", "§ 351 Abs. 2 AO", "§ 45 AO", "§ 118 AO", "AEAO vor § 347 AO"],
    themen: ["Aufbauregel", "Einspruch", "Korrekturvorschriften", "Beratungssituation"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "IV. Allgemeine Hinweise zum Inhalt der AO-Klausuren" },
      { text: "Gegenstand der Klausuren waren sehr häufig fehlerhafte (= rechtswidrige) Steuerbescheide (ESt-Bescheide, Feststellungsbescheide, USt-Bescheide oder KSt-Bescheide), seltener sonstige Verwaltungsakte (z. B. Verspätungszuschläge, Pfändungen oder Prüfungsanordnungen)." },
      { text: "Im Wesentlichen war die Rechtmäßigkeit der o. g. Verwaltungsakte im Einspruchsverfahren oder aufgrund von Korrekturvorschriften zu erörtern. Bezüglich der Abgrenzung und unterschiedlichen Wirkungen der beiden Verfahren wird auf den AEAO vor § 347 AO, Nr. 1 verwiesen. Vorab kamen regelmäßig auch noch die Prüfung der wirksamen Entstehung und Bekanntgabe der Verwaltungsakte hinzu." },
      { typ: "titel", text: "Klausurhinweise: die fundamentale Aufbauregel" },
      { text: "Soweit die Aufgabenstellung ausdrücklich nichts Anderes verlangt, gilt für die Korrektur fehlerhafter Bescheide folgende fundamentale Aufbauregel:" },
      { text: "1. Prüfung der Änderung im Einspruchsverfahren (§§ 347 – 367 AO)" },
      { text: "2. Falls ein Einspruch nicht mehr in Betracht kommt oder unzulässig ist: Prüfung der Korrektur aufgrund von Korrekturvorschriften (§§ 164, 165, 129 AO und §§ 172 ff. AO)" },
      { text: "Geht es also um eine begehrte Korrektur eines Bescheides zugunsten des Stpfl. (z. B. um eine Steuerminderung), ist zunächst zu untersuchen, ob bereits Einspruch eingelegt worden ist (oder noch eingelegt werden kann) und der Fehler im Einspruchsverfahren (§§ 347 ff. AO) eliminiert werden kann. Der Einspruch bietet für den Stpfl. im Regelfall den größtmöglichen Rechtsschutz, vgl. AEAO vor § 347, Nr. 1 letzter Satz." },
      { text: "➢ Es ist jedoch häufig auch im Rahmen eines laufenden Rechtsbehelfsverfahrens zu prüfen, ob die vom Finanzamt als Rechtsgrundlagen gewählten Korrekturvorschriften zutreffend sind (§§ 129, 164 Abs. 2, 165 Abs. 2 oder 172 ff. AO) = Überprüfung der vom Finanzamt vorgenommenen Änderungen des Steuerbescheides im Einspruchsverfahren; hierbei ist auch die sachliche Anfechtungsbeschränkung des § 351 Abs. 2 AO zu beachten! (Absatzangabe so in der Quelle; die sachliche Anfechtungsbeschränkung bei Änderungsbescheiden steht in § 351 Abs. 1 AO, auf den die Quelle zwei Absätze später auch selbst abstellt – § 351 Abs. 2 AO betrifft die Bindung an Grundlagenbescheide)" },
      { text: "➢ Ebenso ist in diesem Zusammenhang dazu Stellung zu nehmen, ob eine Korrektur der materiellen Fehler nach den Grundsätzen der Festsetzungsverjährung (§§ 169ff AO) noch zulässig war." },
      { text: "➢ Darüber hinaus ist zu vielfältigen Problemen im Zusammenhang mit dem Erlass und der Wirksamkeit von Verwaltungsakten (Entstehungsfehler und ordnungsgemäße Bekanntgabe), Fälle der Gesamtrechtsnachfolge (§ 45 AO), der Wirksamkeit von sonstigen Verwaltungsakten (zB Prüfungsanordnung im Zusammenhang mit § 171 Abs. 4 AO) und Steuerstraftaten (Festsetzungsfrist) Stellung zu nehmen. Hierbei ist zu beachten, dass beim Erlass von Verwaltungsakten die Prüfung von formellen Fehlern Vorrang vor der Prüfung von materiellen Fehlern hat = „Ein nichtiger Verwaltungsakt kann nicht korrigiert werden“." },
      { text: "➢ Beliebt ist auch die Fallgestaltung, in der ein Stpfl. zu seinem steuerlichen Berater kommt, seinen Steuerfall ausführlich vorträgt und um ausführlichen Rechtsrat bittet. Hierzu sind folgende Fallgestaltungen abzugrenzen:" },
      {
        typ: "tabelle",
        spalten: ["Fallgestaltung", "Sachlage", "Typische Aufgabenstellung", "Prüfungsweg"],
        zeilen: [
          ["1. Alternative", "Die teilweisen rechtswidrigen ESt-Bescheide, Feststellungsbescheide oder USt-Bescheide sind bereits gegenüber dem Stpfl. erlassen worden. Die Einspruchsfrist ist noch nicht abgelaufen.", "„Prüfen Sie in welchem Umfang einer Herabsetzung der festgesetzten Steuerbeträge erfolgen kann bzw. die festgestellten Einkünfte herabgesetzt werden können.“", "☞ In diesem Fall ist vorrangig zu prüfen, ob die Einlegung eines Einspruchs noch in Betracht kommt. Im Rahmen der Begründetheit sind bei Änderungsbescheiden die Korrekturvorschriften und die Festsetzungsverjährung im Rahmen der sachlichen Anfechtungsbeschränkung des § 351 Abs. 1 AO zu prüfen."],
          ["2. Alternative", "Es wird z.B. auszugsweise ein Bp-Bericht (Kein VA iS des § 118 AO) oder ein Anschreiben des Finanzamts vorgestellt, in dem die beabsichtigten Änderungen dargestellt werden. Entsprechend geänderte Steuerbescheide sind jedoch bisher nicht erlassen worden. Somit kommt ein Einspruch wegen des noch nicht erlassenen Steuerbescheides nicht in Betracht.", "„Prüfen Sie in einem Gutachten, wie dem Stpfl. geholfen werden kann.“", "☞ In der 2. Alternative ist getrennt zu den einzelnen materiellen Fehlern ebenfalls zu den in Betracht kommenden Korrekturvorschriften (einschl. § 177 AO) und der Festsetzungsverjährung Stellung zu nehmen."],
        ],
      },
      { text: "Redaktioneller Hinweis: In der Aufgabenstellung der 1. Alternative steht „in welchem Umfang einer Herabsetzung … erfolgen kann“ (so in der Quelle). Die Gegenüberstellung der beiden Alternativen steht in der Quelle als fortlaufender Text; sie ist hier zur besseren Zuordnung als Tabelle wiedergegeben, der Wortlaut ist unverändert." },
    ],
  },
  {
    ...TS1,
    id: "ao-short-3",
    kapitel: "3",
    title: "Abschnitt 1, V: Erfassung von Sachverhalt und Aufgabenstellung sowie Aufbau der gutachtlichen Lösung",
    thema: "Bearbeitungshinweise und Prüfungsreihenfolge, Subsumtion, Gutachten- gegenüber Urteilsstil sowie das dreiteilige Grundschema mit Obersatz, Tatbestandsprüfung und Ergebnis – mit Beispielen zum Korrektur- und zum Rechtsbehelfsverfahren",
    normen: ["§ 110 AO", "§ 129 AO", "§ 164 Abs. 2 AO", "§ 165 Abs. 2 AO", "§ 171 Abs. 12 AO", "§§ 172ff AO", "§ 173 Abs. 1 Nr. 1 AO", "§ 175 Abs. 1 Satz 1 Nr. 1 AO", "§ 175 Abs. 1 Satz 1 Nr. 2 AO", "§ 347 Abs. 1 Satz 1 Nr. 1 AO", "§ 347 Abs. 2 AO", "§ 350 AO", "§ 352 AO", "§ 355 AO", "§ 355 Abs. 1 AO", "§ 356 AO", "§ 357 Abs. 1 AO", "§ 357 Abs. 2 AO", "§ 358 AO", "§ 360 AO", "§ 367 Abs. 2 Satz 1 AO", "§ 370 AO", "§ 378 AO"],
    themen: ["Gutachtenstil", "Obersatz", "Subsumtion", "Zulässigkeit", "Begründetheit"],
    quelle: QUELLE,
    verfasser: VERFASSER,
    rechtsstand: RECHTSSTAND,
    bloecke: [
      { typ: "titel", text: "V. Erfassung der Sachverhalt und der Aufgabenstellungen einschließlich der Bearbeitungshinweise (Überschrift so in der Quelle)" },
      { text: "Die Fallbearbeitung beginnt mit dem Lesen des Sachverhalts und der Aufgabenstellung. Der Sachverhalt ist dabei unbefangen und sorgfältig so oft durchzulesen (mindestens 2 x), bis er in seinen Grundzügen klar ist. Die Sachverhalte der AO-Prüfungsklausuren sind i. d. R. in epischer Breite über mehrere Seiten ausformuliert und enthalten viele (überflüssige) Details und ggf. noch Anlagen in Form von Steuerbescheiden, Prüfungsanordnungen und Schreiben des FA/Stpfl." },
      { typ: "titel", text: "1. Ausgangspunkt der Falllösung ist die Aufgabenstellung" },
      { text: "Bei der Klausurbearbeitung sind ausschließlich die gestellten Aufgaben zu lösen. Daher ist es wichtig, sich die Aufgabenstellung einschließlich der vorgegebenen Bearbeitungshinweise genau anzusehen. Die Bearbeitungshinweise geben wertvolle Hinweise für die Lösung oder schließen ggf. Annahmen aus, die sich aus dem Sachverhalt ergeben." },
      { text: "Beispiele für Bearbeitungshinweise: „Alle Verwaltungsakte sind mit einer zutreffenden Rechtsbehelfsbelehrung erlassen worden.“ – „Hinsichtlich der steuererhöhenden Feststellungen der Außenprüfung sind die Voraussetzungen der §§ 370 und 378 AO nicht erfüllt.“ – „Auf die verfahrensrechtlichen Folgen für den ausgeschiedenen Gesellschafter Theo Bund ist nicht einzugehen“." },
      { text: "Weiterhin sollten folgende Grundsätze beachtet werden:" },
      { text: "• Sind mehrere Aufgaben zu lösen, sollten Sie die vorgegebene Reihenfolge einhalten." },
      { text: "• Sind (im Rahmen einer Aufgabenstellung) mehrere Bescheide zu untersuchen (z. B. auf Änderungsmöglichkeiten hin), erörtern Sie diese in der im Aufgabentext angegebenen Reihenfolge. Auch wenn mehrere Personen „abzuprüfen“ sind, gehen Sie nach der Reihenfolge der Aufgabenstellung vor." },
      { text: "• Ist keine Reihenfolge vorgegeben, untersuchen Sie zunächst Grundlagenbescheide (z. B. Änderung gem. § 164 Abs. 2 bzw. §§ 172 ff. AO) und erst hiernach die Folgebescheide (z. B. Änderung gem. § 164 Abs. 2 bzw. § 175 Abs. 1 Nr. 1 AO)." },
      { text: "• Bei mehreren Veranlagungszeiträumen bauen Sie „historisch“ auf. D. h. erörtern Sie zunächst den frühesten Veranlagungszeitraum (z. B. den ESt-Bescheid 2020), sodann die nachfolgenden (z. B. den ESt-Bescheid 2021, danach den ESt-Bescheid 2022)." },
      { typ: "titel", text: "2. Aufbau der gutachtlichen Lösung" },
      { text: "Entscheidend in AO-Klausuren ist, ob der objektiv und in der Klausur wiedergegebene Sachverhalt den Inhalt einzelner oder mehrerer Rechtsnormen erfüllt. Hierzu ist die Rechtsnorm in ihre einzelnen Tatbestandsmerkmale aufzugliedern und diese einzeln mit dem vorgegebenen Geschehnisablauf abzugleichen." },
      { text: "Nur wenn sämtliche Tatbestandsmerkmale der Vorschrift erfüllt sind, tritt die ebenfalls in der Vorschrift genannte Rechtsfolge ein. Dieses ist die sogenannte Subsumtion und bringt die Punkte." },
      { text: "Bei der AO-Klausur ist der Weg und nicht die Lösung das Ziel. Wer genau und detailliert begründet, bekommt die notwendigen Punkte!" },
      { text: "Zur Anwendung der maßgebenden Vorschriften gilt folgendes:" },
      { text: "☞ Liegen die Voraussetzungen bzw. Tatbestandsmerkmale unproblematisch vor oder nicht vor, wird dies kurz dargestellt." },
      { text: "☞ Ist es dagegen problematisch, ob eine oder mehrere Tatbestandsmerkmale nicht erfüllt, muss dieses ausführlich dargestellt werden. Wichtig ist dabei die stichhaltige Begründung, warum die Voraussetzung zu bejahen ist oder nicht. (der Satz ist in der Quelle unvollständig; es fehlt „sind“)" },
      { text: "☞ Die Rechtsanwendung im Steuerrecht ist u. a. durch ein verzweigtes Rechtsnormgefüge kompliziert. Es wird kaum ein Sachverhalt durch eine einzige Norm geregelt. In Prüfungsklausuren muss daher immer eine Vielzahl von Vorschriften herangezogen werden." },
      { typ: "titel", text: "3. Gutachtenstil – Urteilsstil" },
      { text: "Stilistisches Kennzeichen des Gutachtenstils ist, dass der Satz, der ein (Zwischen-)Ergebnis wiedergibt, ein Adverb wie „also“, „somit“, „daher“, „folglich“ etc. enthält, das zum Ausdruck bringt, dass hier zum Ergebnis hin gefolgert worden ist." },
      { text: "Beim sog. Urteilsstil hingegen steht das Ergebnis am Anfang der Ausarbeitung und wird nachfolgend begründet. Kennzeichnende Verben sind hier z. B. „weil“, „da“ und „denn“. Der Urteilsstil kann -vorbehaltlich der konkreten Aufgabenstellung- in der Klausurlösung verwendet, wenn Unproblematisches kurz dargestellt werden soll. (es fehlt „werden“ – so in der Quelle)" },
      { text: "Der Aufbau einer gutachtlichen Falllösung erfolgt nach folgendem Grundschema:" },
      { typ: "titel", text: "a) Beginn: Einstieg in die Problematik mit abstrakter Darstellung des Rechtsproblems" },
      { text: "Die Lösung beginnt immer mit der Bildung eines Prüfungs-Obersatzes. Dieser muss sich (inhaltlich und sprachlich) auf die Aufgabenstellung beziehen und i. d. R. angeben, welche (einschlägige) „Antwortnorm“ untersucht wird. Einschlägige Antwortnormen sind Vorschriften," },
      { text: "• deren Rechtsfolge der Aufgabenstellung entspricht, • deren Rechtsfolge die Aufgabe also unmittelbar „beantwortet“ und • deren Voraussetzungen (mit einer gewissen Wahrscheinlichkeit) gegeben sein könnten." },
      { text: "Entscheidend für die Bildung des Obersatzes – und damit für die gesamte Lösung – ist die Angabe der einschlägige(n) Antwortnorm(en)." },
      { text: "In Prüfungsklausuren aus den AO-Hauptgebieten (Einspruchsverfahren und Korrekturvorschriften) ist das oft kein großes Problem, da die einschlägigen Normen in der Vorbereitung auf die Prüfung eingehend behandelt werden. Es gibt jedoch auch Fälle, in denen „Exotenwissen“ abgefragt wird (zB § 171 Abs. 12 AO)." },
      { text: "„Es ist zu prüfen, ob der Einkommensteuerbescheid 2020 vom 12.07.2023 nach den §§ 173 Abs. 1 Nr. 1 oder „§ 175 Abs. 1 Satz 1 Nr. 2 AO geändert werden kann.“ (das überzählige Anführungszeichen vor § 175 so in der Quelle)" },
      { text: "In leider immer wieder vorkommenden „exotischen“ Fällen muss die Antwortnorm jedoch erst gefunden werden. Bei der Suche nach den einschlägigen Vorschriften helfen systematische Überlegungen (z.B. Abgrenzung zwischen Steuerbescheiden/gleichgestellten Bescheiden und sonsfigen Verwaltungsakten) und die sich anschließende Schlussfolgerung, welche Rechtsvorschriften Anwendung finden. (Schreibweise „sonsfigen“ so in der Quelle)" },
      { typ: "titel", text: "b) Prüfung der Tatbestandsmerkmale der entscheidungserheblichen Vorschriften im Zusammenhang mit dem zu beurteilenden Sachverhalt" },
      { text: "Auf den Prüfungs-Obersatz hin folgt die Prüfung der im Obersatz angegebenen Antwortnorm(en): Der Sachverhalt wird unter die Voraussetzungen dieser Norm(en) subsumiert; d. h. es wird geprüft, ob sämtliche Voraussetzungen der Norm vorliegen." },
      { text: "Der konkret zu beurteilende Lebenssachverhalt ist mit sämtlichen Tatbestandsmerkmalen der Gesetzesnorm zu subsumieren und darzulegen, warum diese erfüllt bzw. nicht erfüllt sind." },
      { typ: "titel", text: "c) Formulierung des Ergebnisses = Wie ist nach der vorgegebenen Aufgabenstellung zu entscheiden?" },
      { text: "Am Ende des Gutachtens ist das (End-)Ergebnis zu formulieren. Der Schlusssatz muss sich sprachlich und inhaltlich auf die Aufgabenstellung bzw. den Prüfungs-Obersatz beziehen, diese beantworten und ggf. die die Lösung wesentlich tragenden Rechtsnormen angeben." },
      { typ: "titel", text: "Beispiel zum Korrekturverfahren" },
      { text: "In einem Sachverhalt geht es um den endgültigen ESt-Bescheid 01, der im Jahre 02 erlassen worden ist. Im Jahre 04 fällt im FA auf, dass die ESt um 2.600 € zu niedrig festgesetzt worden ist. Die Ursachen der zu niedrigen Festsetzung werden ausführlich beschrieben. Danach könnte die zu niedrige Festsetzung darauf beruhen, dass dem FA beim Erlass des ESt-Bescheids Einnahmen aus Vermietung i. H. von 8.000 € nicht bekannt waren." },
      { text: "Aufgabenstellung: „Prüfen Sie, ob der ESt-Bescheid 01 geändert werden kann.“" },
      { text: "Lösung: Der erste Satz der Klausurlösung kann wie folgt lauten: • „Der ESt-Bescheid 01 könnte nach § 173 Abs. 1 Nr. 1 AO geändert werden.“, oder • „Es ist zu prüfen, ob der ESt-Bescheid 01 nach § 173 Abs. 1 Nr. 1 AO geändert werden kann.“." },
      { text: "Kommt in dem Fall die Prüfung mehrerer Änderungsvorschriften in Betracht (z. B. weil er mehrere Fehler enthält), kann man den zunächst allgemein formulieren: • „Der ESt-Bescheid 01 kann nur geändert werden, soweit eine Korrekturvorschrift greift. • Wegen der ursprünglich nicht bekannten Einnahmen aus Vermietung könnte der Bescheid nach § 164 Abs. 2 oder im Wege der nachfolgenden Prüfung nach § 173 Abs. 1 Nr. 1 AO zu ändern sein.“ (im ersten Spiegelstrich fehlt das Bezugswort „Obersatz“ – so in der Quelle)" },
      { text: "Anschließend wird geprüft, ob die einzelnen Voraussetzungen des § 164 Abs. 2 AO (Vorrang) und ggf. anschließend § 173 Abs. 1 Nr. 1 AO gegeben sind. Dann kommt eine exakte Prüfung der Tatbestandsmerkmale der Vorschriften; dieses bringt dann im Regelfall die meisten Punkte!" },
      { typ: "titel", text: "Beispiel zum Rechtsbehelfsverfahren" },
      { text: "Häufig lautet die Aufgabe: „Prüfen Sie gutachtlich, ob der Einspruch des Stpfl. vom……….… Aussicht auf Erfolg hat.“" },
      { text: "Lösung: In solchen Fällen lautet der Einsfiegssatz: „Der Einspruch des Stpfl. vom … gegen den ESt-Bescheid 09 vom ... hat Aussicht auf Erfolg, wenn er zulässig und begründet ist“. Nachfolgend wird zunächst (unter I. Zulässigkeit) geprüft, ob alle Zulässigkeitsvoraussetzungen vorliegen (§ 358 AO). (Schreibweise „Einsfiegssatz“ so in der Quelle)" },
      { text: "Wenn dies der Fall ist, ist danach die Begründetheit zu erörtern. Dieser Aufbau ist gem. § 358 AO zwingend." },
      { text: "Bei der Zulässigkeitsprüfung nach § 358 AO sollten immer dargestellt werden: • die Statthaftigkeit (§ 347 Abs. 1 Satz 1 Nr. 1 und Abs. 2 AO), • die Form (§ 357 Abs. 1 AO), • die Frist (§§ 355, 356 AO) • die Anbringungsbehörde, § 357 Abs. 2 AO) und • die Beschwer (§ 350 AO • die Einspruchsbefugnis und die Frage der notwendigen Hinzuziehung bei einheitlichen und gesonderten Feststellungsbescheiden (§ 352 AO iVm § 360 AO). (die Klammern bei Anbringungsbehörde und Beschwer sind in der Quelle nicht gepaart)" },
      { text: "Soweit die einzelnen Zulässigkeitsvoraussetzungen eindeutig gegeben sind, geschieht dies kurz, jedoch immer unter Angabe der genau zu zitierenden gesetzlichen Bestimmungen." },
      { text: "Bei Zweifeln ist -wie immer- zu begründen, ob die jeweilige Zulässigkeitsvoraussetzung erfüllt ist oder nicht. Insbesondere die Berechnung der Einspruchsfrist erfordert in der Regel eine detaillierte Begründung und Berechnung." },
      { text: "Der „klassische“ Obersatz für die Begründetheitsprüfung lautet: „Der Einspruch ist begründet, wenn der angegriffene Bescheid rechtswidrig ist und der Stpfl. in seinen Rechten verletzt ist. Es gilt der Grundsatz der Gesamtüberprüfung (§ 367 Abs. 2 Satz 1 AO).“" },
      { text: "Danach wird der Bescheid auf alle aus dem Sachverhalt ersichtlichen Fehler hin, d. h. auf Verstöße gegen Rechtsnormen, überprüft." },
      { text: "Klausurhinweise: Kommt man zum Ergebnis, dass der Einspruch nicht zulässig ist (z. B. weil die Einspruchsfrist des § 355 Abs. 1 AO abgelaufen ist und keine Wiedereinsetzung gem. § 110 AO möglich ist), ist die Begründetheit nicht zu prüfen, es sei denn, es wird ausdrücklich danach gefragt." },
      { text: "Um hierbei größere Fehlerquellen zu vermeiden, werden ggf. in den Bearbeitungshinweisen zur Klausur folgende Hilfen gegeben: „Sollten Sie die Zulässigkeit des Rechtsbehelfs verneinen, ist dennoch hilfsweise zur Begründetheit Stellung zu nehmen.“ – „Bei einem unzulässigen Einspruch ist ergänzend zu prüfen, ob die materiellen Fehler im Bescheid aufgrund von Korrekturvorschriften (z. B. § 129 AO, § 164 Abs. 2 AO, § 165 Abs. 2 AO oder §§ 172ff. AO) geändert werden können.“" },
    ],
  },
];

export default aoShortSkriptJacobs;
