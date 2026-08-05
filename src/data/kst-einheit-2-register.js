/* Inhalte aus „KStG, 2. Einheit, Nöthen“ (464 Seiten). */
import { kstModule, kstSchemata, kstQuellen } from "./kst-module.js";
import { kstFaelle } from "./kst-faelle.js";
import { kstQuizfragen, kstKarteikarten } from "./kst-lernstoff.js";

const Q = "KStG, 2. Einheit, Nöthen";
const moduleNeu = [
  {
    id: 15, area: "Einkommen", title: "R 7.1 KStR: Vom Jahresüberschuss zum Einkommen",
    law: "R 7.1 KStR · § 8 Abs. 1 KStG", difficulty: "Aufbau", minutes: 30,
    intro: [
      "R 7.1 KStR ordnet die Korrekturen vom Jahresüberschuss oder Jahresfehlbetrag zum körperschaftsteuerlichen Einkommen. Ergebnisse aus Personengesellschaften werden nicht ungeprüft aus der Buchführung übernommen.",
      "Ein im Jahresüberschuss enthaltener Gewinn oder Verlust wird zunächst neutralisiert. Danach wird der steuerlich zutreffende Ergebnisanteil nach den Korrekturen und Verlustverrechnungsregeln der Mitunternehmerschaft eingesetzt.",
    ],
    goals: ["Ausgangswert nach R 7.1 bestimmen", "Personengesellschaftsergebnisse ohne Doppelansatz erfassen", "verrechenbare Verluste gesondert fortführen"],
    scheme: [
      "Jahresüberschuss/-fehlbetrag übernehmen.",
      "Enthaltenes Personengesellschaftsergebnis herausrechnen.",
      "Steuerlich zutreffenden Ergebnisanteil nach § 15a und weiteren Verlustregeln einsetzen.",
      "Weitere ADB wie vGA, vE, § 8b und Abzugsverbote ergänzen.",
      "Verlustabzug, Freibeträge und Tarif erst anschließend prüfen.",
    ],
    normchain: ["R 7.1 Abs. 1 KStR", "§ 8 Abs. 1 KStG", "§ 60 Abs. 2 EStDV", "§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§ 15a EStG"],
    example: {
      title: "Verlust aus einer Mitunternehmerschaft",
      facts: "Im Jahresüberschuss einer GmbH ist ein Verlustanteil aus einer Personengesellschaft enthalten; ein Teil ist nach § 15a EStG nur verrechenbar.",
      solution: ["Gebuchten Verlustanteil neutralisieren.", "Nur den steuerlich ausgleichsfähigen Anteil einsetzen.", "Den übrigen Betrag als verrechenbaren Verlust fortführen."],
      result: "Das Personengesellschaftsergebnis wird weder ungeprüft noch doppelt erfasst.",
    },
    merksatz: "Personengesellschaftsergebnis erst raus, steuerlich zutreffenden Anteil danach wieder rein.",
    exam: ["Die Einheit verwendet R 7.1 KStR als zentrale Korrekturliste."],
    traps: ["gebuchten Verlust ungeprüft stehen lassen", "steuerlichen Anteil zusätzlich ohne Neutralisierung erfassen"],
    sources: [`${Q}, S. 29–125`],
  },
  {
    id: 16, area: "Sonderfall", title: "Typische und atypisch stille Beteiligung",
    law: "§ 20 Abs. 1 Nr. 4 EStG · § 15 Abs. 1 S. 1 Nr. 2 EStG", difficulty: "Klassiker", minutes: 32,
    intro: [
      "Bei einer stillen Beteiligung entscheidet die wirtschaftliche Ausgestaltung und nicht die Vertragsüberschrift. Die atypisch stille Beteiligung führt bei Mitunternehmerinitiative und Mitunternehmerrisiko zur Mitunternehmerschaft.",
      "Die Beteiligung an stillen Reserven, stillen Lasten und Firmenwert ist in der Einheit das zentrale Merkmal des Mitunternehmerrisikos.",
    ],
    goals: ["typisch und atypisch still trennen", "Mitunternehmerinitiative und -risiko prüfen", "Widersprüche im Sachverhalt erkennen"],
    scheme: [
      "Vertragsbezeichnung nur als Ausgangspunkt notieren.",
      "Mitwirkungs- und Kontrollrechte prüfen.",
      "Teilnahme an Gewinn, Verlust, stillen Reserven und Firmenwert prüfen.",
      "Typisch still: § 20 Abs. 1 Nr. 4 EStG; atypisch still: § 15 Abs. 1 S. 1 Nr. 2 EStG.",
      "Verlustbeschränkungen anschließend gesondert prüfen.",
    ],
    normchain: ["§ 20 Abs. 1 Nr. 4 EStG", "§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§ 15a EStG", "§ 15 Abs. 4 S. 6–8 EStG"],
    example: {
      title: "120.000-€-Einlage mit Firmenwertbeteiligung",
      facts: "Die MN-GmbH leistet 120.000 € und ist am Gewinn, Verlust, an stillen Reserven, stillen Lasten und Firmenwert der X-GmbH beteiligt. Der Text nennt sie dennoch typisch still.",
      solution: ["Die Rechte begründen ausgeprägtes Mitunternehmerrisiko.", "Mit den Mitwirkungsrechten liegt eine atypisch stille Mitunternehmerschaft vor.", "Die unzutreffende Bezeichnung im Sachverhalt ist zu korrigieren."],
      result: "Der Vertragsinhalt geht der Bezeichnung vor.",
    },
    merksatz: "Wer am Firmenwert und an den stillen Reserven teilnimmt, ist regelmäßig nicht nur Kapitalgeber.",
    exam: ["Der Quellenfall enthält bewusst den Widerspruch zwischen 'typisch still' und den eingeräumten Rechten."],
    traps: ["Vertragsüberschrift ungeprüft übernehmen", "Mitunternehmerinitiative nicht ansprechen"],
    sources: [`${Q}, S. 1–28 und 121–130`],
  },
  {
    id: 17, area: "Verlust", title: "Verlustbeschränkung bei stillen Beteiligungen",
    law: "§ 15a EStG · § 15 Abs. 4 S. 6–8 EStG", difficulty: "Vertiefung", minutes: 34,
    intro: [
      "Die Einheit verbindet zwei Verlustschranken. Zuerst ist zu bestimmen, welcher Verlust nach § 15a EStG ausgleichs- oder abzugsfähig ist.",
      "§ 15 Abs. 4 S. 6–8 EStG wird nur auf den danach noch nutzbaren Verlust angewendet. Ist der Verlust bereits nach § 15a lediglich verrechenbar, bleibt für die zweite Schranke kein Raum.",
    ],
    goals: ["ausgleichsfähige und verrechenbare Verluste unterscheiden", "Prüfungsreihenfolge beherrschen", "verrechenbare Verluste fortführen"],
    scheme: [
      "Zurechenbaren Verlustanteil feststellen.",
      "Negatives Kapitalkonto und Haftungs-/Einlageerweiterungen nach § 15a prüfen.",
      "Nicht nutzbaren Anteil als verrechenbaren Verlust feststellen.",
      "§ 15 Abs. 4 S. 6–8 nur auf den nach § 15a verbleibenden Betrag anwenden.",
      "Spätere Gewinne aus derselben Beteiligung verrechnen.",
    ],
    normchain: ["§ 15a Abs. 1, 1a und 2 EStG", "§ 15 Abs. 4 S. 6–8 EStG", "R 7.1 KStR"],
    example: {
      title: "100.000 € Verlust bei 120.000 € Einlage",
      facts: "Die MN-GmbH ist mit 120.000 € atypisch still beteiligt. Der Verlustanteil von 100.000 € wurde als Aufwand erfasst.",
      solution: ["§ 15a ist trotz ausreichender Einlage ausdrücklich zu prüfen.", "Nur der danach nutzbare Betrag wird in R 7.1 übernommen.", "Eine weitere Beschränkung nach § 15 Abs. 4 folgt erst danach."],
      result: "Die Verlustnutzung folgt der gesetzlichen Rangfolge.",
    },
    merksatz: "Erst § 15a, dann § 15 Abs. 4.",
    exam: ["Die Rangfolge wird in der Einheit als eigener Prüfungspunkt hervorgehoben."],
    traps: ["beide Schranken parallel anwenden", "verrechenbaren Verlust wie einen allgemeinen Verlustvortrag behandeln"],
    sources: [`${Q}, S. 35–130`],
  },
  {
    id: 18, area: "Sonderfall", title: "Gemeinnütziger Verein: die vier steuerlichen Sphären",
    law: "§ 5 Abs. 1 Nr. 9 KStG · §§ 14, 64–68 AO", difficulty: "Klassiker", minutes: 32,
    intro: [
      "Die Vereinsbesteuerung wird in vier Sphären zerlegt: ideeller Bereich, Vermögensverwaltung, Zweckbetrieb und steuerpflichtiger wirtschaftlicher Geschäftsbetrieb.",
      "Mitgliedsbeiträge und Spenden gehören regelmäßig zum ideellen Bereich, Zinsen zur Vermögensverwaltung, kulturelle Veranstaltungen können Zweckbetrieb sein; Bewirtung und Warenverkauf sind getrennt zu prüfen.",
    ],
    goals: ["Einnahmen den vier Sphären zuordnen", "steuerfreie und steuerpflichtige Bereiche trennen", "Gewinn des wirtschaftlichen Geschäftsbetriebs ermitteln"],
    scheme: [
      "Steuerpflicht des Vereins nach § 1 Abs. 1 Nr. 4 KStG feststellen.",
      "Befreiung nach § 5 Abs. 1 Nr. 9 KStG prüfen.",
      "Ideellen Bereich und Vermögensverwaltung abgrenzen.",
      "Zweckbetrieb nach §§ 65–68 AO prüfen.",
      "Verbleibenden wirtschaftlichen Geschäftsbetrieb nach § 64 AO besteuern.",
      "Freibetrag nach § 24 KStG prüfen.",
    ],
    normchain: ["§ 1 Abs. 1 Nr. 4 KStG", "§ 5 Abs. 1 Nr. 9 KStG", "§ 8 Abs. 5 KStG", "§ 14 AO", "§ 64 AO", "§§ 65–68 AO", "§ 24 KStG"],
    example: {
      title: "Musiktheater mit Foyertheke",
      facts: "Ein gemeinnütziger Musikverein erzielt Beiträge, Spenden, Zinsen, Eintrittsgelder sowie Einnahmen aus Speisen und Getränken.",
      solution: ["Beiträge/Spenden: ideeller Bereich.", "Zinsen: Vermögensverwaltung.", "Konzerte: Zweckbetrieb.", "Speisen/Getränke: wirtschaftlicher Geschäftsbetrieb."],
      result: "Nur der Gewinn des wirtschaftlichen Geschäftsbetriebs fließt in das zvE ein.",
    },
    merksatz: "Nicht der Verein ist insgesamt steuerfrei oder steuerpflichtig – jede Tätigkeit bekommt ihre Sphäre.",
    exam: ["Die Einheit enthält einen vollständigen Vereinsfall."],
    traps: ["Gesamtergebnis besteuern", "Zweckbetrieb und wirtschaftlichen Geschäftsbetrieb vermischen"],
    sources: [`${Q}, S. 133–214 und 239–299`],
  },
  {
    id: 19, area: "Sonderfall", title: "Gemeinnützigkeit: Satzung und tatsächliche Geschäftsführung",
    law: "§§ 51–63 AO · § 60a AO", difficulty: "Vertiefung", minutes: 36,
    intro: [
      "Die Steuerbefreiung setzt einen begünstigten Zweck und die Anforderungen der Selbstlosigkeit, Ausschließlichkeit und Unmittelbarkeit voraus. Satzung und tatsächliche Geschäftsführung müssen übereinstimmen.",
      "§ 60a AO stellt die formelle Satzungsmäßigkeit fest, ersetzt aber nicht die laufende Prüfung der tatsächlichen Geschäftsführung, Mittelverwendung und Vermögensbindung.",
    ],
    goals: ["begünstigte Zwecke einordnen", "Selbstlosigkeit, Ausschließlichkeit und Unmittelbarkeit prüfen", "§ 60a richtig einordnen"],
    scheme: [
      "Zweck nach §§ 52–54 AO bestimmen.",
      "Selbstlosigkeit und Mittelverwendung nach § 55 AO prüfen.",
      "Ausschließlichkeit (§ 56) und Unmittelbarkeit (§ 57) prüfen.",
      "Satzungsmäßigkeit nach §§ 59–61 und § 60a würdigen.",
      "Tatsächliche Geschäftsführung nach § 63 abgleichen.",
    ],
    normchain: ["§§ 51–57 AO", "§§ 59–61 AO", "§ 60a AO", "§ 63 AO"],
    example: {
      title: "Förderung von Kunst und Kultur",
      facts: "Ein Verein betreibt ein Musiktheater; das Finanzamt hat die satzungsmäßigen Voraussetzungen nach § 60a AO festgestellt.",
      solution: ["Kunst und Kultur sind begünstigter Zweck.", "§ 60a betrifft nur die Satzung.", "Die tatsächliche Geschäftsführung und jede wirtschaftliche Tätigkeit bleiben gesondert zu prüfen."],
      result: "Die §-60a-Feststellung macht nicht sämtliche Tätigkeiten steuerfrei.",
    },
    merksatz: "Gemeinnützigkeit braucht Satzung auf dem Papier und passende Geschäftsführung in der Wirklichkeit.",
    exam: ["Die AO-Voraussetzungen werden in der Einheit systematisch am Gesetz durchgearbeitet."],
    traps: ["§ 60a als endgültige Steuerbefreiung verstehen", "Mittelverwendung nicht prüfen"],
    sources: [`${Q}, S. 166–238`],
  },
  {
    id: 20, area: "Sonderfall", title: "Zweckbetrieb und wirtschaftlicher Geschäftsbetrieb",
    law: "§§ 64–68 AO · § 24 KStG", difficulty: "Klassiker", minutes: 34,
    intro: [
      "Ein Zweckbetrieb bleibt trotz wirtschaftlicher Betätigung steuerbegünstigt. Die Einheit behandelt den allgemeinen Zweckbetrieb des § 65 AO und besondere Zweckbetriebe, insbesondere kulturelle Veranstaltungen.",
      "Nebengeschäfte wie Bewirtung oder Warenverkauf werden abgespalten und als eigener wirtschaftlicher Geschäftsbetrieb besteuert.",
    ],
    goals: ["§ 65 AO anwenden", "besondere Zweckbetriebe erkennen", "Nebengeschäfte abspalten", "§ 24 KStG berechnen"],
    scheme: [
      "Wirtschaftliche Tätigkeit nach § 14 AO feststellen.",
      "Spezialtatbestand der §§ 66–68 AO prüfen.",
      "Sonst § 65 AO prüfen.",
      "Nicht begünstigte Nebenleistungen abtrennen.",
      "Gewinn ermitteln und Freibetrag nach § 24 KStG abziehen.",
    ],
    normchain: ["§ 14 AO", "§ 64 Abs. 1 und 3 AO", "§ 65 AO", "§ 68 Nr. 7 AO", "§ 5 Abs. 1 Nr. 9 S. 2 KStG", "§ 24 KStG"],
    example: {
      title: "60.000 € Bewirtungsumsatz, 40.000 € Aufwand",
      facts: "Der Rheinland-Volksmusik-Verein erzielt aus Speisen und Getränken 60.000 € Einnahmen und 40.000 € Ausgaben.",
      solution: ["Konzerte sind im Quellenfall Zweckbetrieb.", "Die Foyertheke ist eigener wirtschaftlicher Geschäftsbetrieb.", "Gewinn: 20.000 €.", "Abzüglich des in der Einheit verwendeten Freibetrags von 5.000 € verbleiben 15.000 € zvE."],
      result: "zvE des Vereins: 15.000 €.",
    },
    merksatz: "Kultur bleibt Zweckbetrieb; die Pausenbewirtung fährt steuerlich auf einer eigenen Spur.",
    exam: ["Die Quellenlösung endet mit 20.000 € ./. 5.000 € = 15.000 €."],
    traps: ["Eintrittsgelder und Bewirtung zusammenfassen", "Einnahmengrenze und Gewinn verwechseln"],
    sources: [`${Q}, S. 179–249`],
  },
  {
    id: 21, area: "Gesellschafter", title: "Verdeckte Einlage: Bewertung bei der Gesellschaft",
    law: "R 8.9 Abs. 4 KStR · § 6 Abs. 1 Nr. 5 EStG", difficulty: "Vertiefung", minutes: 38,
    intro: [
      "Einlagefähig ist nur ein bilanzierungsfähiger Vermögensvorteil, der einen Aktivposten erhöht oder einen Passivposten mindert. Bloße Nutzungs- und Tätigkeitsvorteile sind ausgeschlossen.",
      "Grundsätzlich wird mit dem Teilwert abzüglich einer Gegenleistung bewertet. Bei innerhalb von drei Jahren angeschafften Wirtschaftsgütern kann der Ansatz auf fortgeführte Anschaffungskosten begrenzt sein, wenn beim Gesellschafter kein Realisationstatbestand greift.",
    ],
    goals: ["Einlagefähigkeit prüfen", "Teilwert und Gegenleistung bestimmen", "Drei-Jahres-Regel anwenden", "IDB, ADB und § 27 koordinieren"],
    scheme: [
      "Vorteil der Gesellschaft und gesellschaftliche Veranlassung prüfen.",
      "Bilanzierungsfähigkeit feststellen.",
      "Teilwert abzüglich Gegenleistung bestimmen.",
      "Anschaffung innerhalb von drei Jahren und Realisation nach §§ 17, 20 oder 23 EStG prüfen.",
      "Gegebenenfalls auf fortgeführte AK begrenzen.",
      "Einlageertrag IDB erfassen, nach § 8 Abs. 3 S. 3 KStG kürzen und § 27 erhöhen.",
    ],
    normchain: ["R 8.9 Abs. 1 und 4 KStR", "§ 6 Abs. 1 Nr. 5 EStG", "§ 8 Abs. 3 S. 3 KStG", "H 8.9 Nutzungsvorteile KStH", "§ 27 Abs. 1 S. 1 KStG"],
    example: {
      title: "Hermès-Mülleimer von der privaten Terrasse",
      facts: "MN erwarb im Juli 2024 einen privat genutzten Mülleimer für 1.200 € zuzüglich Umsatzsteuer; Teilwert im Juli 2025: 1.400 €. Übertragung unentgeltlich auf die GmbH.",
      solution: ["Der Vermögensvorteil ist einlagefähig.", "Die Anschaffung liegt innerhalb von drei Jahren.", "Im Quellenfall fehlt ein Realisationstatbestand beim Gesellschafter.", "Der Ansatz wird deshalb auf fortgeführte Anschaffungskosten begrenzt."],
      result: "Die unversteuerte Wertsteigerung wird nicht über den Einlageansatz in die GmbH übernommen.",
    },
    merksatz: "Teilwert ist der Grundsatz; innerhalb von drei Jahren kann die fortgeführte AK die Obergrenze sein.",
    exam: ["Die Einheit nennt ausdrücklich den Mülleimer und ein selbst genutztes Grundstück als Merkhilfen."],
    traps: ["Nutzungsvorteil als vE behandeln", "Drei-Jahres-Regel ohne Gesellschafterprüfung anwenden"],
    sources: [`${Q}, S. 300–339 und 393–418`],
  },
  {
    id: 22, area: "Gesellschafter", title: "Verdeckte Einlage: Folgen beim Gesellschafter",
    law: "§ 17 Abs. 1 S. 2 EStG · § 20 Abs. 2 S. 2 EStG · § 23 EStG", difficulty: "Fortgeschritten", minutes: 40,
    intro: [
      "Beim Gesellschafter erhöht die verdeckte Einlage grundsätzlich die Anschaffungskosten der Beteiligung. Zusätzlich kann die Übertragung des eingelegten Wirtschaftsguts einer Veräußerung gleichgestellt sein und stille Reserven aufdecken.",
      "Welcher Tatbestand greift, hängt von der Art und Herkunft des Wirtschaftsguts ab. Die Einheit trennt Beteiligungen im Privatvermögen, Grundstücke und sonstige private Wirtschaftsgüter.",
    ],
    goals: ["nachträgliche AK erfassen", "§§ 17, 20 und 23 abgrenzen", "Bewertung beider Ebenen abstimmen"],
    scheme: [
      "Vermögenszuordnung beim Gesellschafter feststellen.",
      "Nachträgliche Anschaffungskosten der Beteiligung bestimmen.",
      "Bei Anteilen § 17 Abs. 1 S. 2 oder § 20 Abs. 2 S. 2 prüfen.",
      "Bei privaten Grundstücken und sonstigen Wirtschaftsgütern § 23 prüfen.",
      "Fehlt ein Realisationstatbestand, mögliche AK-Begrenzung bei der Gesellschaft beachten.",
    ],
    normchain: ["§ 17 Abs. 1 S. 2 und Abs. 2a EStG", "§ 20 Abs. 2 S. 2 EStG", "§ 23 Abs. 1 S. 5 Nr. 2 EStG", "§ 6 Abs. 6 S. 2 EStG"],
    example: {
      title: "Einlage einer 2-%-Beteiligung",
      facts: "MN hält 2 % an der A-GmbH im Privatvermögen. Anschaffungskosten 2021: 1.000 €, Teilwert 2025: 7.000 €. Die Beteiligung wird unentgeltlich auf die MN-GmbH übertragen.",
      solution: ["Die Einlage erhöht die Anschaffungskosten der MN-GmbH-Beteiligung.", "Die Übertragung der A-GmbH-Anteile wird nach dem Quellenfall als Veräußerung behandelt.", "Die stillen Reserven von 6.000 € sind auf Gesellschafterebene zu würdigen."],
      result: "Einlagebewertung und Realisation beim Gesellschafter werden getrennt, aber korrespondierend geprüft.",
    },
    merksatz: "Verdeckte Einlage heißt nicht automatisch steuerneutral – das eingelegte Wirtschaftsgut kann als veräußert gelten.",
    exam: ["Die Einheit stellt drei private Wirtschaftsgüter mit unterschiedlichen Realisationsfolgen gegenüber."],
    traps: ["nur die Gesellschaftsebene prüfen", "nachträgliche AK und Veräußerungsgewinn saldieren"],
    sources: [`${Q}, S. 300–350 und 409–418`],
  },
  {
    id: 23, area: "Beteiligung", title: "Einlage von Beteiligungen aus Körperschaftsvermögen",
    law: "§ 8b Abs. 2 S. 6 KStG · § 8 Abs. 3 S. 3 KStG", difficulty: "Fortgeschritten", minutes: 38,
    intro: [
      "Legt eine Körperschaft eine Beteiligung in eine andere Kapitalgesellschaft ein, gilt die Einlage nach § 8b Abs. 2 S. 6 KStG als Veräußerung. Maßgeblich ist die Differenz zwischen Einlagewert und Buchwert.",
      "Der Gewinn bleibt grundsätzlich nach § 8b Abs. 2 außer Ansatz; 5 % gelten nach § 8b Abs. 3 als nichtabziehbare Betriebsausgaben. Die aufnehmende Gesellschaft aktiviert den Anteil und neutralisiert den Einlageertrag.",
    ],
    goals: ["Veräußerungsfiktion anwenden", "§-8b-Korrektur berechnen", "aufnehmende Gesellschaft spiegelbildlich behandeln"],
    scheme: [
      "Buchwert und Einlagewert bei der einlegenden Körperschaft bestimmen.",
      "Fiktiven Veräußerungsgewinn nach § 8b Abs. 2 S. 6 berechnen.",
      "Gewinn abziehen und 5 % nach § 8b Abs. 3 hinzurechnen.",
      "Bei der aufnehmenden Gesellschaft Beteiligung aktivieren und Einlageertrag nach § 8 Abs. 3 S. 3 kürzen.",
      "§ 27 KStG und Beteiligungsanschaffungskosten fortschreiben.",
    ],
    normchain: ["§ 8b Abs. 2 S. 1 und 6 KStG", "§ 8b Abs. 3 S. 1 KStG", "§ 8 Abs. 3 S. 3 KStG", "§ 27 Abs. 1 KStG"],
    example: {
      title: "Beteiligung mit stillen Reserven",
      facts: "Eine Körperschaft legt eine Beteiligung mit Buchwert 20.000 € und Teilwert 40.000 € unentgeltlich in eine beherrschte GmbH ein.",
      solution: ["Fiktiver Veräußerungsgewinn: 20.000 €.", "Abzug nach § 8b Abs. 2: 20.000 €.", "Hinzurechnung 5 %: 1.000 €.", "Die aufnehmende GmbH aktiviert 40.000 € und neutralisiert den Einlageertrag."],
      result: "Bei der einlegenden Körperschaft verbleiben 1.000 € steuerwirksam.",
    },
    merksatz: "Einlage von Anteilen ist bei der Körperschaft eine fiktive Veräußerung: Gewinn raus, fünf Prozent wieder rein.",
    exam: ["Die Schlussseiten der Einheit verbinden die verdeckte Einlage ausdrücklich mit § 8b KStG."],
    traps: ["Einlage als vollständig folgenlos behandeln", "5-%-Pauschale vergessen", "aufnehmende Gesellschaft nicht prüfen"],
    sources: [`${Q}, S. 327–350 und 409–464`],
  },
];

const schemataNeu = [
  { id: "stille-beteiligung", title: "Stille Beteiligung und Verlust", law: "§ 20 Abs. 1 Nr. 4 · § 15 Abs. 1 Nr. 2 · § 15a EStG", steps: ["Vertragsinhalt statt Überschrift prüfen.", "Mitunternehmerinitiative und -risiko feststellen.", "Typisch oder atypisch still einordnen.", "Gebuchten Ergebnisanteil in R 7.1 neutralisieren.", "§ 15a zuerst, § 15 Abs. 4 danach prüfen.", "Steuerlich nutzbaren Anteil einsetzen."] },
  { id: "verein-vier-sphaeren", title: "Gemeinnütziger Verein: vier Sphären", law: "§ 5 Abs. 1 Nr. 9 KStG · §§ 51–68 AO", steps: ["Steuerpflicht und Gemeinnützigkeit prüfen.", "Ideellen Bereich abgrenzen.", "Vermögensverwaltung abgrenzen.", "Zweckbetrieb bestimmen.", "Wirtschaftlichen Geschäftsbetrieb isolieren.", "Gewinn und §-24-Freibetrag berechnen."] },
  { id: "ve-bewertung", title: "Verdeckte Einlage: Bewertung und Korrespondenz", law: "R 8.9 KStR · § 6 Abs. 1 Nr. 5 EStG", steps: ["Einlagefähigkeit prüfen.", "Teilwert abzüglich Gegenleistung bestimmen.", "Drei-Jahres-Zeitraum prüfen.", "Realisation nach §§ 17, 20 oder 23 EStG prüfen.", "IDB und ADB bei der Gesellschaft darstellen.", "nAK und § 27 beim Gesellschafter fortschreiben."] },
];

const faelleNeu = [
  {
    id: 7, title: "Atypisch stille Beteiligung der MN-GmbH", points: 7, moduleId: 17, source: `${Q}, S. 1–130`,
    facts: ["Einlage 120.000 €.", "Der Text nennt die Beteiligung typisch still, räumt aber Gewinn-/Verlustbeteiligung sowie Teilnahme an stillen Reserven, Lasten und Firmenwert ein.", "Verlustanteil 100.000 € wurde als Aufwand erfasst."],
    task: "Ordnen Sie die Beteiligung ein und behandeln Sie den Verlust in der KSt-Einkommensermittlung.",
    solution: ["Atypisch stille Mitunternehmerschaft wegen Teilnahme an stillen Reserven und Firmenwert.", "Gebuchten Verlust für R 7.1 neutralisieren.", "Verlustnutzung zuerst nach § 15a, danach gegebenenfalls nach § 15 Abs. 4 prüfen.", "Nur den steuerlich nutzbaren Anteil einsetzen."],
  },
  {
    id: 8, title: "Rheinland-Volksmusik-Verein", points: 8, moduleId: 20, source: `${Q}, S. 179–249`,
    facts: ["Gemeinnütziger Musikverein mit §-60a-Feststellung.", "Beiträge 120.000 €, Spenden 50.000 €, Zinsen 1.200 €, Konzertkarten 400.000 €.", "Speisen/Getränke 60.000 €, zugehörige Ausgaben 40.000 €."],
    task: "Ordnen Sie die Tätigkeiten zu und ermitteln Sie das zvE.",
    solution: ["Beiträge/Spenden: ideeller Bereich; Zinsen: Vermögensverwaltung; Konzerte: Zweckbetrieb.", "Foyertheke: wirtschaftlicher Geschäftsbetrieb.", "Gewinn 20.000 €.", "./. 5.000 € Freibetrag nach dem Quellenstand = zvE 15.000 €."],
  },
  {
    id: 9, title: "Drei verdeckte Einlagen aus dem Privatvermögen", points: 9, moduleId: 22, source: `${Q}, S. 300–350`,
    facts: ["MN hält 70 % an der MN-GmbH.", "Grundstück: AK 2024 80.000 €, Teilwert 2025 140.000 €.", "Privat genutzter Mülleimer: AK 2024 1.200 € zzgl. USt, Teilwert 2025 1.400 €.", "2-%-Beteiligung: AK 1.000 €, Teilwert 7.000 €."],
    task: "Bestimmen Sie Einlagebewertung und Gesellschafterfolgen.",
    solution: ["Je Wirtschaftsgut Teilwertgrundsatz und Drei-Jahres-Regel prüfen.", "Beim Mülleimer fehlt nach der Unterrichtslösung ein Realisationstatbestand; fortgeführte AK begrenzen den Ansatz.", "Bei der 2-%-Beteiligung liegt eine Veräußerungsfiktion vor.", "Gesellschaft: Einlageertrag IDB, Kürzung nach § 8 Abs. 3 S. 3 und Zugang nach § 27."],
  },
  {
    id: 10, title: "Einlage einer Beteiligung aus Körperschaftsvermögen", points: 6, moduleId: 23, source: `${Q}, S. 327–350 und 409–464`,
    facts: ["Eine Körperschaft legt eine Beteiligung mit stillem Mehrwert in eine beherrschte Kapitalgesellschaft ein."],
    task: "Stellen Sie die Folgen bei einlegender und aufnehmender Körperschaft dar.",
    solution: ["Fiktive Veräußerung nach § 8b Abs. 2 S. 6.", "Gewinn nach Abs. 2 abziehen, 5 % nach Abs. 3 hinzurechnen.", "Aufnehmende Gesellschaft aktiviert den Einlagewert und neutralisiert den Ertrag.", "§ 27 und Beteiligungs-AK fortschreiben."],
  },
];

const quizNeu = [
  { frage: "Was entscheidet über typisch oder atypisch still?", optionen: ["Vertragsüberschrift", "tatsächliche Rechte und Risiken", "nur Einlagehöhe", "nur Rechtsform"], richtig: 1, erklaerung: "Maßgeblich sind Mitunternehmerinitiative und Mitunternehmerrisiko." },
  { frage: "Welche Verlustschranke wird zuerst geprüft?", optionen: ["§ 15 Abs. 4", "§ 15a", "§ 10d", "keine"], richtig: 1, erklaerung: "§ 15a geht § 15 Abs. 4 S. 6–8 in der Einheit vor." },
  { frage: "Welche Vereinssphäre ist grundsätzlich steuerpflichtig?", optionen: ["ideeller Bereich", "Vermögensverwaltung", "Zweckbetrieb", "wirtschaftlicher Geschäftsbetrieb"], richtig: 3, erklaerung: "Der wirtschaftliche Geschäftsbetrieb ist aus der Befreiung herausgelöst." },
  { frage: "Wie wird die Foyertheke eingeordnet?", optionen: ["ideell", "Vermögensverwaltung", "Zweckbetrieb", "eigener wirtschaftlicher Geschäftsbetrieb"], richtig: 3, erklaerung: "Bewirtung wird vom kulturellen Zweckbetrieb getrennt." },
  { frage: "Welches zvE ergibt der Vereinsfall?", optionen: ["0 €", "5.000 €", "15.000 €", "20.000 €"], richtig: 2, erklaerung: "20.000 € Gewinn minus 5.000 € Freibetrag." },
  { frage: "Bewertungsgrundsatz der verdeckten Einlage?", optionen: ["Buchwert", "Teilwert abzüglich Gegenleistung", "Nennwert", "immer AK"], richtig: 1, erklaerung: "Die Drei-Jahres-Regel ist eine Ausnahme vom Teilwertgrundsatz." },
  { frage: "Warum wird der Mülleimer nicht mit 1.400 € angesetzt?", optionen: ["kein Wirtschaftsgut", "Drei-Jahres-Begrenzung ohne Realisation", "gebraucht", "Sachanlagen haben keinen Teilwert"], richtig: 1, erklaerung: "Der Quellenfall begrenzt auf fortgeführte AK." },
  { frage: "Folge der Einlage von Anteilen aus Körperschaftsvermögen?", optionen: ["keine", "Veräußerungsfiktion § 8b Abs. 2 S. 6", "vGA", "voll steuerpflichtiger Teilwert"], richtig: 1, erklaerung: "Der Einlagegewinn fällt in § 8b; 5 % bleiben steuerwirksam." },
];

const kartenNeu = [
  { vorn: "R 7.1 und Personengesellschaft", hinten: "Gebuchten Ergebnisanteil neutralisieren, steuerlich zutreffenden Anteil nach Korrekturen und Verlustschranken einsetzen." },
  { vorn: "Atypisch still", hinten: "Mitunternehmerinitiative plus Mitunternehmerrisiko; stille Reserven und Firmenwert sind starke Risikomerkmale." },
  { vorn: "Rangfolge Verlustschranken", hinten: "Zuerst § 15a; § 15 Abs. 4 S. 6–8 nur auf den danach noch abzugsfähigen Verlust." },
  { vorn: "Vier Vereinssphären", hinten: "Ideeller Bereich, Vermögensverwaltung, Zweckbetrieb, steuerpflichtiger wirtschaftlicher Geschäftsbetrieb." },
  { vorn: "§ 60a AO", hinten: "Feststellung der Satzungsmäßigkeit; tatsächliche Geschäftsführung bleibt gesondert zu prüfen." },
  { vorn: "Vereinsfall", hinten: "Theke: 60.000 € - 40.000 € = 20.000 €; ./. 5.000 € = zvE 15.000 €." },
  { vorn: "vE-Bewertung", hinten: "Grundsatz Teilwert abzüglich Gegenleistung; innerhalb von drei Jahren mögliche Begrenzung auf fortgeführte AK." },
  { vorn: "Einlage von Körperschaftsanteilen", hinten: "§ 8b Abs. 2 S. 6: fiktive Veräußerung; Gewinn steuerfrei, 5 % nach Abs. 3 hinzurechnen." },
];

/* K3-Material bleibt aus dem K2-Quellenstand entfernt. */
for (let i = kstQuellen.length - 1; i >= 0; i -= 1) {
  if (kstQuellen[i]?.title === "Notiz 30.07.2026") kstQuellen.splice(i, 1);
}
if (!kstModule.some((m) => m.id === 15)) { kstModule.push(...moduleNeu); kstModule.sort((a, b) => a.id - b.id); }
if (!kstSchemata.some((s) => s.id === "stille-beteiligung")) kstSchemata.push(...schemataNeu);
if (!kstFaelle.some((f) => f.id === 7)) kstFaelle.push(...faelleNeu);
if (!kstQuizfragen.some((q) => q.frage === quizNeu[0].frage)) kstQuizfragen.push(...quizNeu);
if (!kstKarteikarten.some((k) => k.vorn === kartenNeu[0].vorn)) kstKarteikarten.push(...kartenNeu);
if (!kstQuellen.some((q) => q.title === Q)) {
  kstQuellen.push({
    title: Q, pages: 464, status: "eingearbeitet",
    topics: "R 7.1 KStR, typische/atypisch stille Beteiligung, § 15a und § 15 Abs. 4 EStG, Vereinsbesteuerung nach §§ 51–68 AO sowie Vertiefung der verdeckten Einlage und § 8b",
  });
}
