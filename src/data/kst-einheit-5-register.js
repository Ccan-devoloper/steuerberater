/* K2-Inhalte aus „KStG, 5. Einheit, Nöthen“ (bildbasierter Unterrichtsexport). */
import { kstModule, kstSchemata, kstQuellen } from "./kst-module.js";
import { kstFaelle } from "./kst-faelle.js";
import { kstQuizfragen, kstKarteikarten } from "./kst-lernstoff.js";

const Q = "KStG, 5. Einheit, Nöthen";

const moduleNeu = [
  {
    id: 24, area: "Gesellschafter", title: "vGA bei Waren, Wirtschaftsgütern und Nutzungsüberlassungen",
    law: "R 8.5 KStR · H 8.6 KStH · § 8 Abs. 3 S. 2 KStG", difficulty: "Klassiker", minutes: 36,
    intro: [
      "Bei der Hingabe von Wirtschaftsgütern ist die verdeckte Gewinnausschüttung grundsätzlich nach dem gemeinen Wert zu bemessen. Bei Nutzungsüberlassungen ist die erzielbare Vergütung der Fremdvergleichsmaßstab.",
      "Die Einheit verbindet Bewertung, innerbilanzielle Korrektur und außerbilanzielle Hinzurechnung. Umsatzsteuer oder nicht abziehbare Vorsteuer, die durch die vGA ausgelöst wird, darf nach R 8.6 KStR nicht ein zweites Mal über § 10 Nr. 2 KStG hinzugerechnet werden.",
    ],
    goals: ["gemeinen Wert und erzielbare Vergütung unterscheiden", "IDB und ADB ohne Doppelkorrektur darstellen", "Umsatzsteuerfolge in die vGA-Bewertung einordnen"],
    scheme: [
      "Leistung der Gesellschaft und begünstigte Person feststellen.",
      "Fremdpreis bestimmen: gemeiner Wert bei Wirtschaftsgütern, erzielbare Vergütung bei Nutzung.",
      "Gebuchten Erlös oder Aufwand innerbilanziell auf den Fremdwert korrigieren.",
      "Vermögensminderung oder verhinderte Vermögensmehrung als vGA nach § 8 Abs. 3 S. 2 hinzurechnen.",
      "Umsatzsteuer/Vorsteuer berücksichtigen, aber keine zusätzliche §-10-Nr.-2-Hinzurechnung vornehmen.",
      "Leistung nach § 27 KStG und Gesellschafterfolge ergänzen.",
    ],
    normchain: ["R 8.5 Abs. 1 KStR", "H 8.6 Hingabe von Wirtschaftsgütern KStH", "H 8.6 Nutzungsüberlassungen KStH", "R 8.6 KStR", "§ 8 Abs. 3 S. 2 KStG", "§ 27 Abs. 1 S. 3 KStG"],
    example: {
      title: "Kücheneinrichtung zum Vorzugspreis",
      facts: "Eine GmbH verkauft ihrer Alleingesellschafterin eine hochwertige Kücheneinrichtung für 10.000 € netto, obwohl der übliche Verkaufspreis 25.000 € netto beträgt.",
      solution: ["Der Preisvorteil beträgt netto 15.000 €.", "Der gebuchte Erlös ist innerbilanziell auf den fremdüblichen Wert zu korrigieren.", "Die durch das Gesellschaftsverhältnis veranlasste Differenz ist vGA.", "Die Umsatzsteuerfolge ist einzubeziehen; sie wird nicht nochmals nach § 10 Nr. 2 KStG hinzugerechnet."],
      result: "Fremdwert, IDB, vGA-ADB und § 27 werden in vier getrennten Schritten gezeigt.",
    },
    merksatz: "Wirtschaftsgut: gemeiner Wert. Nutzung: erzielbare Vergütung. Umsatzsteuer nicht doppelt hinzurechnen.",
    exam: ["Die Einheit wiederholt dieselbe Technik an Schreibtisch-, Waren- und Maschinenfällen."],
    traps: ["nur die Nettodifferenz betrachten, obwohl die Umsatzsteuer wirtschaftlich mitgetragen wird", "IDB und vGA doppelt gewinnerhöhend erfassen", "Umsatzsteuer zusätzlich nach § 10 Nr. 2 hinzurechnen"],
    sources: [`${Q}, PDF-S. 1–20, 49–61 und 71–100`],
  },
  {
    id: 25, area: "Gesellschafter", title: "§ 27 KStG: ausschüttbarer Gewinn und Einlagenrückgewähr",
    law: "§ 27 Abs. 1 KStG", difficulty: "Klassiker", minutes: 32,
    intro: [
      "Eine Leistung mindert das steuerliche Einlagekonto nur, soweit sie den ausschüttbaren Gewinn übersteigt. Deshalb sind Eigenkapital, gezeichnetes Kapital und der bisherige Bestand des Einlagekontos zunächst in einer Nebenrechnung zusammenzuführen.",
      "Auch eine verdeckte Gewinnausschüttung ist eine Leistung im Sinne des § 27 Abs. 1 S. 3 KStG. Die vGA-Prüfung und die Einlagekontorechnung sind aber zwei getrennte Rechenschritte.",
    ],
    goals: ["ausschüttbaren Gewinn berechnen", "Leistung zwischen Gewinn und Einlagekonto aufteilen", "Bestand des Einlagekontos fortschreiben"],
    scheme: [
      "Eigenkapital laut Steuerbilanz feststellen.",
      "Gezeichnetes Kapital und Bestand des steuerlichen Einlagekontos abziehen.",
      "Verbleibenden Betrag als ausschüttbaren Gewinn bestimmen.",
      "Leistung zuerst mit dem ausschüttbaren Gewinn verrechnen.",
      "Nur den übersteigenden Teil als Einlagenrückgewähr vom §-27-Bestand abziehen.",
      "Nullgrenze und Bescheinigungspflichten prüfen.",
    ],
    normchain: ["§ 27 Abs. 1 S. 3 KStG", "§ 27 Abs. 1 S. 5 KStG", "§ 27 Abs. 2 KStG", "§ 20 Abs. 1 Nr. 1 S. 3 EStG"],
    example: {
      title: "30.000-€-Leistung bei 25.000 € ausschüttbarem Gewinn",
      facts: "Eigenkapital 120.000 €, Stammkapital 50.000 €, Bestand des steuerlichen Einlagekontos 45.000 €. Die Gesellschaft erbringt eine Leistung von 30.000 €.",
      solution: ["Ausschüttbarer Gewinn: 120.000 € - 50.000 € - 45.000 € = 25.000 €.", "25.000 € der Leistung stammen aus ausschüttbarem Gewinn.", "Nur 5.000 € mindern das steuerliche Einlagekonto.", "Neuer Bestand: 45.000 € - 5.000 € = 40.000 €."],
      result: "Das steuerliche Einlagekonto beträgt danach 40.000 €.",
    },
    merksatz: "Leistung zuerst aus Gewinn, erst der Überhang aus dem Einlagekonto.",
    exam: ["Die Einheit übernimmt diese Rechnung aus einer amtlichen Ertragsteuerlösung."],
    traps: ["gesamte Leistung vom Einlagekonto abziehen", "Stammkapital nicht abziehen", "vGA und §-27-Minderung gleichsetzen"],
    sources: [`${Q}, PDF-S. 16–32`],
  },
  {
    id: 26, area: "Gesellschafter", title: "Erwerb eigener Anteile vom Gesellschafter",
    law: "§ 8 Abs. 3 S. 2 KStG · § 27 KStG · H 8.6 KStH", difficulty: "Vertiefung", minutes: 34,
    intro: [
      "Erwirbt die Gesellschaft eigene Anteile von einem Gesellschafter zu einem überhöhten Preis, ist der Vorgang in einen fremdüblichen Anteilserwerb und einen gesellschaftlich veranlassten Mehrbetrag zu zerlegen.",
      "Der Mehrbetrag kann eine vGA und zugleich eine Leistung nach § 27 KStG sein. Erwerbsnebenkosten, Umsatzsteuer und die bilanzielle Abbildung dürfen nicht pauschal mit der vGA vermischt werden.",
    ],
    goals: ["fremdüblichen Kaufpreis und Mehrbetrag trennen", "vGA und Anteilserwerb getrennt würdigen", "§ 27 beim Rückkauf eigener Anteile prüfen"],
    scheme: [
      "Rechtsgrund und gesellschaftsrechtliche Zulässigkeit des Rückkaufs feststellen.",
      "Fremdüblichen Wert der eigenen Anteile bestimmen.",
      "Kaufpreisüberschuss als gesellschaftlich veranlassten Vorteil prüfen.",
      "Bilanzielle Behandlung des Anteilserwerbs von der vGA-Korrektur trennen.",
      "Erwerbsnebenkosten und Umsatzsteuer gesondert würdigen.",
      "Leistung nach § 27 KStG berechnen.",
    ],
    normchain: ["R 8.5 Abs. 1 KStR", "§ 8 Abs. 3 S. 2 KStG", "§ 27 Abs. 1 S. 3 KStG", "§ 34 GmbHG"],
    example: {
      title: "Rückkauf zum Preis von 150.000 €",
      facts: "Eine GmbH erwirbt eigene Anteile mit einem Nennwert von 100.000 € vom ausscheidenden Gesellschafter für 150.000 €; zusätzlich fallen Notarkosten an.",
      solution: ["Der fremdübliche Wert ist gesondert festzustellen.", "Ein Kaufpreisüberschuss ist als möglicher Vorteil des Gesellschafters zu prüfen.", "Nur der gesellschaftlich veranlasste Mehrbetrag ist vGA.", "Die §-27-Folge wird anschließend in der Nebenrechnung ermittelt."],
      result: "Anteilserwerb und Vorteilszuwendung werden nicht in einem Sammelbetrag behandelt.",
    },
    merksatz: "Eigene Anteile zurückkaufen heißt: Wert des Anteils und Vorteil des Gesellschafters auseinanderziehen.",
    exam: ["Der Quellenfall stammt aus einer Bilanzaufgabe; in K2 wird ausschließlich die körperschaftsteuerliche vGA-/§-27-Seite übernommen."],
    traps: ["gesamten Kaufpreis als vGA behandeln", "Notarkosten automatisch dem Gesellschaftervorteil zurechnen", "§ 27 nicht prüfen"],
    sources: [`${Q}, PDF-S. 38–61`],
  },
  {
    id: 27, area: "Beteiligung", title: "Beteiligungsübertragung: vGA und § 8b KStG",
    law: "§ 8b Abs. 2, 3 KStG · § 8 Abs. 3 S. 2 KStG", difficulty: "Examensniveau", minutes: 40,
    intro: [
      "Wird eine Beteiligung zu einem nicht fremdüblichen Preis übertragen, ist zuerst der zutreffende Veräußerungsgewinn einschließlich der vGA-Korrektur zu bestimmen. Anschließend greift die Steuerbefreiung des § 8b KStG.",
      "Die Einheit betont ausdrücklich: Einkommenserhöhungen durch vGA im Zusammenhang mit der Übertragung von Anteilen fallen unter § 8b. Die vGA wird daher nicht außerhalb der Beteiligungsrechnung voll steuerpflichtig belassen.",
    ],
    goals: ["fremdüblichen Veräußerungsgewinn ermitteln", "vGA vor § 8b berechnen", "5-%-Pauschale korrekt anwenden"],
    scheme: [
      "Veräußerungserlös, Buchwert und fremdüblichen Wert der Beteiligung feststellen.",
      "Unter- oder Überpreis als vGA oder vE korrigieren.",
      "Zutreffenden Veräußerungsgewinn nach der Korrektur bestimmen.",
      "Gewinn nach § 8b Abs. 2 abziehen.",
      "5 % nach § 8b Abs. 3 als nicht abziehbare Betriebsausgaben hinzurechnen.",
      "§ 27 und Gesellschafterfolge ergänzen.",
    ],
    normchain: ["§ 8 Abs. 3 S. 2 KStG", "§ 8b Abs. 2 S. 1 KStG", "§ 8b Abs. 3 S. 1 KStG", "§ 27 Abs. 1 S. 3 KStG"],
    example: {
      title: "Anteile unter Wert an den Anteilseigner",
      facts: "Eine AG überträgt Anteile mit Buchwert 500 und gemeinem Wert 1.000 für 200 an ihren Anteilseigner.",
      solution: ["Gebuchter Verlust: 200 - 500 = -300.", "vGA in Höhe des Vorteils: 1.000 - 200 = 800.", "Zutreffender Gewinn nach Fremdvergleich: 500.", "Dieser Gewinn fällt unter § 8b Abs. 2; 5 % bleiben nach Abs. 3 steuerwirksam."],
      result: "Die vGA-Korrektur führt in die §-8b-Rechnung, nicht an ihr vorbei.",
    },
    merksatz: "Erst Fremdwert und vGA, dann § 8b - die Beteiligungsbefreiung erfasst auch die vGA-bedingte Gewinnerhöhung.",
    exam: ["Die Einheit zeigt den Ablauf als eigene §-8b-Anwendungsregel."],
    traps: ["gebuchten Verlust nach § 8b abziehen", "vGA zusätzlich voll steuerpflichtig lassen", "5-%-Pauschale auf den falschen Betrag anwenden"],
    sources: [`${Q}, PDF-S. 104–160`],
  },
  {
    id: 28, area: "Gesellschafter", title: "Nahestehende Personen, Schwester- und Konzerngesellschaften",
    law: "R 8.5 KStR · § 8 Abs. 3 S. 2 KStG", difficulty: "Vertiefung", minutes: 36,
    intro: [
      "Eine vGA kann auch vorliegen, wenn nicht der Gesellschafter selbst, sondern eine ihm nahestehende Person oder eine verbundene Gesellschaft den Vorteil erhält. Die Zurechnung erfolgt dennoch beim Gesellschafter.",
      "Bei Schwesterunternehmen ist zu prüfen, über welchen gemeinsamen Anteilseigner die Veranlassung läuft. Ob der Vorteil beim Gesellschafter ankommt, ist für den Tatbestand nicht entscheidend.",
    ],
    goals: ["nahestehende Person erkennen", "Vorteil in Schwesterstrukturen zurechnen", "Gesellschafts- und Gesellschafterebene trennen"],
    scheme: [
      "Begünstigten der Vermögensminderung bestimmen.",
      "Näheverhältnis zum unmittelbaren oder mittelbaren Gesellschafter feststellen.",
      "Fremdvergleich auf Ebene der leistenden Gesellschaft durchführen.",
      "vGA dem gemeinsamen Gesellschafter zurechnen.",
      "Bei der begünstigten Gesellschaft Einlage oder Ertrag gesondert prüfen.",
      "§ 8b und § 27 je Ebene ergänzen.",
    ],
    normchain: ["R 8.5 Abs. 1 KStR", "H 8.5 Nahestehende Person KStH", "H 8.5 Schwestergesellschaften KStH", "§ 8 Abs. 3 S. 2 KStG", "§ 8b Abs. 1 KStG"],
    example: {
      title: "Darlehen zwischen Schwestergesellschaften",
      facts: "Zwei GmbHs haben denselben beherrschenden Gesellschafter. Eine GmbH gewährt der anderen ein nicht fremdübliches Darlehen.",
      solution: ["Der Vorteil fließt der Schwestergesellschaft zu.", "Die gesellschaftliche Veranlassung wird über den gemeinsamen Gesellschafter hergestellt.", "Bei der leistenden Gesellschaft liegt eine vGA an den Gesellschafter vor.", "Bei der begünstigten Gesellschaft ist die Einlagefolge über den Gesellschafter zu prüfen."],
      result: "Die Zurechnung folgt der Beteiligungskette, nicht dem Zahlungsweg.",
    },
    merksatz: "Vorteil bei der Schwester - vGA an den gemeinsamen Gesellschafter - mögliche Einlage in die begünstigte Gesellschaft.",
    exam: ["Die Einheit zeichnet die Beteiligungsketten wiederholt als Drei-Ebenen-Schaubild."],
    traps: ["vGA ablehnen, weil der Gesellschafter kein Geld erhält", "nur die begünstigte Gesellschaft prüfen", "mittelbare Beteiligung übersehen"],
    sources: [`${Q}, PDF-S. 157–219`],
  },
  {
    id: 29, area: "Gesellschafter", title: "Beherrschender Gesellschafter: klare Vereinbarung im Voraus",
    law: "R 8.5 KStR · H 8.5 KStH", difficulty: "Klassiker", minutes: 34,
    intro: [
      "Bei einem beherrschenden Gesellschafter kann eine Zahlung bereits deshalb gesellschaftlich veranlasst sein, weil keine zivilrechtlich wirksame, klare, eindeutige und im Voraus abgeschlossene Vereinbarung besteht oder die Vereinbarung nicht tatsächlich durchgeführt wird.",
      "Rückwirkende Vergütungsabreden sind regelmäßig unbeachtlich. Die beherrschende Stellung muss spätestens im Zeitpunkt der Vereinbarung oder des Vollzugs der Vermögensminderung vorliegen.",
    ],
    goals: ["Beherrschung bestimmen", "formelle Sonderanforderungen prüfen", "Rückwirkung und tatsächliche Durchführung würdigen"],
    scheme: [
      "Beteiligungs- und Stimmrechtsverhältnisse bestimmen.",
      "Beherrschende Stellung im maßgeblichen Zeitpunkt prüfen.",
      "Zivilrechtlich wirksame, klare und eindeutige Vereinbarung feststellen.",
      "Abschluss vor Beginn der Leistung oder Vergütungsperiode prüfen.",
      "Tatsächliche Durchführung mit Vertrag vergleichen.",
      "Bei Verstoß vGA und §-27-Folge berechnen.",
    ],
    normchain: ["R 8.5 Abs. 2 KStR", "H 8.5 Beherrschender Gesellschafter KStH", "H 8.5 Rückwirkende Vereinbarung KStH", "§ 8 Abs. 3 S. 2 KStG"],
    example: {
      title: "Rückwirkende Gehaltserhöhung",
      facts: "Der Alleingesellschafter-Geschäftsführer erhält ab April eine Gehaltserhöhung, die rückwirkend ab Januar gelten soll; die Nachzahlung wird im April ausgezahlt.",
      solution: ["Die Änderung ist erst ab der klaren Vereinbarung zu berücksichtigen.", "Die rückwirkende Nachzahlung für Januar bis März erfüllt das Voraus-Erfordernis nicht.", "Der rückwirkende Teil ist als vGA zu prüfen.", "Die laufende Vergütung ab April bleibt dem Angemessenheitsvergleich vorbehalten."],
      result: "Rückwirkung und Angemessenheit sind getrennte Prüfungspunkte.",
    },
    merksatz: "Beherrschend heißt: Vertrag vorher, klar, wirksam und genau so durchgeführt.",
    exam: ["Die Einheit hebt Rückwirkung, Stimmrechtsausschluss und den Zeitpunkt der Beherrschung gesondert hervor."],
    traps: ["nur Angemessenheit prüfen", "mündliche oder rückwirkende Abrede anerkennen", "tatsächliche Durchführung nicht abgleichen"],
    sources: [`${Q}, PDF-S. 220–260`],
  },
  {
    id: 30, area: "Gesellschafter", title: "Gesellschafter-Geschäftsführer: Gehalt, Sonderzahlung und Überstunden",
    law: "§ 8 Abs. 3 S. 2 KStG · H 8.5 KStH", difficulty: "Examensniveau", minutes: 42,
    intro: [
      "Bei der Geschäftsführervergütung werden formelle Anerkennung und materielle Angemessenheit nacheinander geprüft. Das gilt für laufendes Gehalt, Weihnachtsgeld, Tantieme, Überstundenvergütung sowie Sonn-, Feiertags- und Nachtzuschläge.",
      "Überstundenvergütungen an einen Gesellschafter-Geschäftsführer sind regelmäßig gesellschaftlich veranlasst, weil die Gesamtvergütung typischerweise die gesamte Arbeitsleistung abdeckt. Ausnahmen verlangen eine überzeugende betriebliche Begründung und fremdübliche Durchführung.",
    ],
    goals: ["Vergütungsbestandteile einzeln prüfen", "Gesamtausstattung beurteilen", "Überstunden und Sonderzahlungen fremdvergleichen"],
    scheme: [
      "Für jeden Vergütungsbestandteil eine klare Vorausvereinbarung prüfen.",
      "Tatsächliche Auszahlung und Verbuchung abgleichen.",
      "Einzelbestandteil und Gesamtausstattung auf Angemessenheit prüfen.",
      "Überstunden- und Zuschlagsregelungen mit Fremdgeschäftsführern vergleichen.",
      "Urlaubsabgeltung und nicht beanspruchte Tage nur bei klarer Regelung anerkennen.",
      "Nicht anzuerkennende Beträge als vGA hinzurechnen.",
    ],
    normchain: ["§ 8 Abs. 3 S. 2 KStG", "H 8.5 Angemessenheit der Gesamtausstattung KStH", "H 8.5 Überstundenvergütung KStH", "H 8.5 Sonn-, Feiertags- und Nachtzuschläge KStH"],
    example: {
      title: "Gehalt, Weihnachtsgeld und 80 Überstunden",
      facts: "Ein Gesellschafter-Geschäftsführer erhält 132.000 € laufendes Gehalt, 11.000 € Weihnachtsgeld und 4.000 € Überstundenvergütung. Die Überstunden wurden monatlich zusätzlich ausgezahlt.",
      solution: ["Jeder Bestandteil braucht eine wirksame Vorausvereinbarung.", "Das Weihnachtsgeld ist mit Vertrag und tatsächlicher Durchführung abzugleichen.", "Die Überstundenvergütung ist wegen der Organstellung besonders kritisch und regelmäßig vGA.", "Danach ist die Angemessenheit der Gesamtausstattung zu prüfen."],
      result: "Formelle und materielle Prüfung dürfen nicht zu einer einzigen Angemessenheitsfrage verkürzt werden.",
    },
    merksatz: "Erst Vertrag und Durchführung, dann Einzelvergütung und Gesamtausstattung.",
    exam: ["Die Einheit arbeitet einen vollständigen amtlichen Geschäftsführervergütungsfall durch."],
    traps: ["laufendes Gehalt und Sonderzahlungen zusammen prüfen", "Überstunden eines Gesellschafter-Geschäftsführers ungeprüft anerkennen", "Gesamtausstattung nicht prüfen"],
    sources: [`${Q}, PDF-S. 249–269`],
  },
  {
    id: 31, area: "Sonderfall", title: "Option zur Körperschaftsbesteuerung nach § 1a KStG",
    law: "§ 1a KStG · BMF-Schreiben vom 10.11.2021", difficulty: "Vertiefung", minutes: 38,
    intro: [
      "Die Option nach § 1a KStG lässt eine Personenhandels- oder Partnerschaftsgesellschaft für ertragsteuerliche Zwecke wie eine Kapitalgesellschaft behandeln. Zivilrechtlich bleibt sie Personengesellschaft.",
      "Der Übergang wird steuerlich wie ein Formwechsel behandelt. Sonderbetriebsvermögen, funktional wesentliche Grundlagen, Antragsfrist, Gesellschafterzustimmung und das steuerliche Einlagekonto sind deshalb zentrale Prüfungspunkte.",
    ],
    goals: ["optionsfähige Gesellschaft erkennen", "Antrag und Zeitpunkt prüfen", "Formwechsel- und Einlagekontofolgen einordnen"],
    scheme: [
      "Optionsfähige Personenhandels- oder Partnerschaftsgesellschaft feststellen.",
      "Gesellschafterbeschluss und rechtzeitigen Antrag prüfen.",
      "Übergang als Formwechsel nach UmwStG würdigen.",
      "Funktional wesentliche Betriebsgrundlagen und Sonderbetriebsvermögen einbeziehen.",
      "Folgen für Anteilseignerbesteuerung und Leistungsbeziehungen bestimmen.",
      "Steuerliches Einlagekonto eröffnen und Bescheinigungen prüfen.",
    ],
    normchain: ["§ 1a Abs. 1 KStG", "§ 1a Abs. 2 KStG", "§ 1a Abs. 3 KStG", "§ 25 UmwStG", "§ 20 UmwStG", "§ 27 KStG"],
    example: {
      title: "KG optiert zum Beginn des Wirtschaftsjahres",
      facts: "Eine KG beantragt mit Zustimmung ihrer Gesellschafter die Option zur Körperschaftsbesteuerung für das nächste Wirtschaftsjahr. Im Gesamthands- und Sonderbetriebsvermögen befinden sich stille Reserven.",
      solution: ["Antragsberechtigung und Frist prüfen.", "Der Übergang wird wie ein Formwechsel behandelt.", "Funktional wesentliche Wirtschaftsgüter müssen in den Übertragungsvorgang einbezogen werden.", "Ab Optionszeitpunkt gelten Leistungs- und Ausschüttungsregeln wie bei einer Kapitalgesellschaft."],
      result: "Die Option ist kein bloßer Tarifwechsel, sondern ein systematischer Wechsel der Ertragsteuerlogik.",
    },
    merksatz: "§ 1a: zivilrechtlich Personengesellschaft, ertragsteuerlich Kapitalgesellschaft - mit Formwechselprüfung beim Einstieg.",
    exam: ["Die Einheit verwendet das BMF-Anwendungsschreiben und einen Optionsfall mit Einlagekontobescheinigung."],
    traps: ["Option als rückwirkenden Antrag behandeln", "Sonderbetriebsvermögen übersehen", "§ 27 nach der Option nicht eröffnen"],
    sources: [`${Q}, PDF-S. 210–260`],
  },
  {
    id: 32, area: "Gesellschafter", title: "Rückgängigmachung der vGA und nicht einlagefähige Vorteile",
    law: "H 8.5 KStH · H 8.9 KStH", difficulty: "Vertiefung", minutes: 30,
    intro: [
      "Wird eine verdeckte Gewinnausschüttung später zurückgezahlt, wird die ursprüngliche vGA grundsätzlich nicht rückwirkend beseitigt. Die Rückzahlung führt regelmäßig zu einer Einlage.",
      "Nicht jeder Vorteil der Gesellschaft ist einlagefähig. Unentgeltliche oder verbilligte Dienstleistungen, Gebrauchs- oder Nutzungsüberlassungen sowie zinslose oder niedrig verzinsliche Darlehen sind keine bilanzierbaren Nutzungsvorteile und daher regelmäßig keine verdeckte Einlage.",
    ],
    goals: ["Rückzahlung und ursprüngliche vGA trennen", "Einlagefähigkeit bilanzorientiert prüfen", "Dienstleistung und Nutzungsvorteil richtig behandeln"],
    scheme: [
      "Ursprüngliche vGA im Entstehungsjahr unverändert lassen.",
      "Rückzahlung im Zahlungsjahr als mögliche Einlage prüfen.",
      "Bei Vorteilen der Gesellschaft Bilanzierbarkeit feststellen.",
      "Dienstleistung, Nutzung und Zinsvorteil als nicht einlagefähige Vorteile abgrenzen.",
      "Nur einlagefähige Vermögensvorteile nach § 8 Abs. 3 S. 3 neutralisieren.",
      "§ 27-Zugang nur bei tatsächlicher verdeckter Einlage erfassen.",
    ],
    normchain: ["H 8.5 Rückgängigmachung KStH", "H 8.9 Nutzungsvorteile KStH", "§ 8 Abs. 3 S. 3 KStG", "§ 27 Abs. 1 S. 1 KStG"],
    example: {
      title: "Unentgeltliche Geschäftsführertätigkeit und spätere Rückzahlung",
      facts: "Ein Gesellschafter arbeitet unentgeltlich für seine GmbH. In einem anderen Vorgang zahlt er eine frühere vGA an die GmbH zurück.",
      solution: ["Die Arbeitsleistung ist kein einlagefähiger Vermögensvorteil; keine vE.", "Die ursprüngliche vGA bleibt im früheren Jahr bestehen.", "Die Rückzahlung ist im Zahlungsjahr als Einlage zu behandeln.", "Nur die Einlage erhöht das steuerliche Einlagekonto."],
      result: "Nicht jede Vorteilsgewährung ist vE; nicht jede Rückzahlung korrigiert die Vergangenheit.",
    },
    merksatz: "Rückzahlung ist neue Einlage, keine Zeitreise. Nutzungsvorteile sind regelmäßig nicht einlagefähig.",
    exam: ["Die Einheit stellt Rückgängigmachung und Nutzungsvorteile unmittelbar nebeneinander."],
    traps: ["vGA rückwirkend streichen", "unentgeltliche Arbeit als vE behandeln", "§ 27 ohne einlagefähigen Vermögensvorteil erhöhen"],
    sources: [`${Q}, PDF-S. 243–260`],
  },
  {
    id: 33, area: "Sonderfall", title: "Liquidation und Abwicklungsgewinn nach § 11 KStG",
    law: "§ 11 KStG", difficulty: "Aufbau", minutes: 24,
    intro: [
      "Nach Auflösung einer unbeschränkt steuerpflichtigen Körperschaft wird der während der Abwicklung erzielte Gewinn der Besteuerung zugrunde gelegt. Der Besteuerungszeitraum soll grundsätzlich drei Jahre nicht überschreiten.",
      "Der Abwicklungsgewinn ergibt sich aus dem Unterschied zwischen Abwicklungs-Endvermögen und Abwicklungs-Anfangsvermögen. Steuerfreie Vermögensmehrungen und Ausschüttungen im Abwicklungszeitraum sind gesondert zu berücksichtigen.",
    ],
    goals: ["Abwicklungszeitraum bestimmen", "Anfangs- und Endvermögen abgrenzen", "Abwicklungsgewinn systematisch berechnen"],
    scheme: [
      "Auflösung und Beginn der Abwicklung feststellen.",
      "Abwicklungszeitraum bestimmen.",
      "Abwicklungs-Endvermögen als zur Verteilung kommendes Vermögen ermitteln.",
      "Abwicklungs-Anfangsvermögen aus dem steuerlichen Betriebsvermögen ableiten.",
      "Steuerfreie Vermögensmehrungen und Ausschüttungen korrigieren.",
      "Differenz als Abwicklungsgewinn der Besteuerung unterwerfen.",
    ],
    normchain: ["§ 11 Abs. 1 KStG", "§ 11 Abs. 2 KStG", "§ 11 Abs. 3 KStG", "§ 11 Abs. 4 KStG"],
    example: {
      title: "Abwicklung über mehrere Veranlagungszeiträume",
      facts: "Eine GmbH wird aufgelöst und ihr Vermögen innerhalb von drei Jahren verwertet und an die Anteilseigner verteilt.",
      solution: ["Abwicklungszeitraum zusammenfassen.", "Endvermögen um steuerfreie Zuflüsse bereinigen.", "Anfangsvermögen aus dem letzten steuerlichen Betriebsvermögen ableiten.", "Differenz als Abwicklungsgewinn erfassen."],
      result: "Die Liquidation wird nicht als Reihe isolierter Jahresgewinne, sondern über den Abwicklungszeitraum gerechnet.",
    },
    merksatz: "Liquidation: Endvermögen minus Anfangsvermögen über den Abwicklungszeitraum.",
    exam: ["Die Einheit markiert § 11 KStG als eigenständigen Sonderfall im Gesetz."],
    traps: ["jedes Kalenderjahr isoliert abrechnen", "Ausschüttungen im Abwicklungszeitraum übersehen", "Anfangsvermögen ohne vorherige Ausschüttungskorrektur übernehmen"],
    sources: [`${Q}, PDF-S. 62–66`],
  },
];

const schemataNeu = [
  { id: "vga-wert-ust", title: "vGA: Wert, Umsatzsteuer und ADB", law: "R 8.5 · R 8.6 KStR", steps: ["Begünstigten und Leistung bestimmen.", "Gemeinen Wert oder erzielbare Vergütung feststellen.", "Buchung innerbilanziell korrigieren.", "vGA außerbilanziell hinzurechnen.", "Umsatzsteuer einbeziehen, aber nicht nochmals nach § 10 Nr. 2 hinzurechnen.", "§ 27 und Gesellschafterfolge prüfen."] },
  { id: "27-ausschuettbarer-gewinn", title: "§ 27: ausschüttbarer Gewinn", law: "§ 27 Abs. 1 KStG", steps: ["Eigenkapital übernehmen.", "Gezeichnetes Kapital abziehen.", "Bestand des Einlagekontos abziehen.", "Ausschüttbaren Gewinn bestimmen.", "Leistung zuerst hiermit verrechnen.", "Nur den Überhang vom Einlagekonto abziehen."] },
  { id: "vga-beteiligung-8b", title: "vGA bei Beteiligungsübertragung", law: "§ 8 Abs. 3 S. 2 · § 8b Abs. 2, 3 KStG", steps: ["Fremdwert der Beteiligung bestimmen.", "Unter-/Überpreis als vGA korrigieren.", "Zutreffenden Veräußerungsgewinn ermitteln.", "Gewinn nach § 8b Abs. 2 abziehen.", "5 % nach Abs. 3 hinzurechnen.", "§ 27 ergänzen."] },
  { id: "beherrschender-gesellschafter", title: "Beherrschender Gesellschafter", law: "R 8.5 Abs. 2 KStR", steps: ["Beherrschung prüfen.", "Zivilrechtlich wirksame Vereinbarung?", "Klar und eindeutig?", "Im Voraus abgeschlossen?", "Tatsächlich durchgeführt?", "Angemessenheit und vGA-Folge prüfen."] },
  { id: "gf-verguetung", title: "Gesellschafter-Geschäftsführer-Vergütung", law: "§ 8 Abs. 3 S. 2 KStG", steps: ["Vergütungsbestandteile einzeln erfassen.", "Vorausvereinbarung und Durchführung prüfen.", "Sonderzahlungen gesondert würdigen.", "Überstunden/Zuschläge kritisch prüfen.", "Gesamtausstattung fremdvergleichen.", "vGA und § 27 berechnen."] },
  { id: "option-1a", title: "Option nach § 1a KStG", law: "§ 1a KStG", steps: ["Optionsfähige Gesellschaft?", "Beschluss und Antrag fristgerecht?", "Formwechselprüfung nach UmwStG.", "Sonderbetriebsvermögen einbeziehen.", "Folgen ab Optionszeitpunkt bestimmen.", "§ 27 eröffnen und Bescheinigungen prüfen."] },
  { id: "liquidation-11", title: "Liquidation nach § 11 KStG", law: "§ 11 KStG", steps: ["Auflösung und Abwicklungszeitraum.", "Abwicklungs-Endvermögen.", "Abwicklungs-Anfangsvermögen.", "Steuerfreie Vermögensmehrungen.", "Ausschüttungskorrekturen.", "Abwicklungsgewinn berechnen."] },
];

const faelleNeu = [
  {
    id: 11, title: "Kücheneinrichtung zum Vorzugspreis", points: 6, moduleId: 24, source: `${Q}, PDF-S. 71–79`,
    facts: ["GmbH verkauft am 05.03. eine hochwertige Kücheneinrichtung an ihre Alleingesellschafterin.", "Üblicher Nettoverkaufspreis 25.000 €; berechnet und gebucht werden 10.000 € netto.", "Die Gesellschaft kann den Auftrag aus eigener Kapazität erfüllen."],
    task: "Bestimmen Sie IDB, vGA, Umsatzsteuerfolge und §-27-Auswirkung.",
    solution: ["Fremdpreis 25.000 €; Netto-Preisvorteil 15.000 €.", "Gebuchten Erlös innerbilanziell korrigieren.", "Differenz als vGA außerbilanziell erfassen.", "Umsatzsteuer in die Bewertung einbeziehen, aber keine zweite Hinzurechnung nach § 10 Nr. 2 KStG.", "Leistung nach § 27 prüfen."],
  },
  {
    id: 12, title: "Leistung über dem ausschüttbaren Gewinn", points: 5, moduleId: 25, source: `${Q}, PDF-S. 16–32`,
    facts: ["Eigenkapital 120.000 €.", "Stammkapital 50.000 €.", "Steuerliches Einlagekonto 45.000 €.", "Leistung 30.000 €."],
    task: "Ermitteln Sie den ausschüttbaren Gewinn und den neuen Bestand des steuerlichen Einlagekontos.",
    solution: ["Ausschüttbarer Gewinn 25.000 €.", "Nur 5.000 € der Leistung übersteigen den ausschüttbaren Gewinn.", "Einlagekonto sinkt von 45.000 € auf 40.000 €."],
  },
  {
    id: 13, title: "Rückkauf eigener Anteile", points: 6, moduleId: 26, source: `${Q}, PDF-S. 44–61`,
    facts: ["Eine GmbH erwirbt eigene Anteile mit Nennwert 100.000 € vom Gesellschafter für 150.000 €.", "Notarkosten 4.000 € zuzüglich Umsatzsteuer werden von der GmbH getragen."],
    task: "Trennen Sie Anteilserwerb, Erwerbsnebenkosten, möglichen Kaufpreisüberschuss und §-27-Folge.",
    solution: ["Fremdüblichen Wert der Anteile feststellen.", "Nur ein gesellschaftlich veranlasster Mehrpreis ist vGA.", "Nebenkosten und Umsatzsteuer gesondert beurteilen.", "vGA als Leistung in der §-27-Rechnung berücksichtigen."],
  },
  {
    id: 14, title: "Überhöhter Kaufpreis für eine 20-%-Beteiligung", points: 7, moduleId: 27, source: `${Q}, PDF-S. 104–127`,
    facts: ["Die N-GmbH erwirbt von ihrer Alleingesellschafterin eine 20-%-Beteiligung für 120.000 €.", "Verkehrswert im Erwerbszeitpunkt 90.000 €.", "Später werden eine Dividende bezogen und die Hälfte der Beteiligung an einen Dritten veräußert."],
    task: "Beurteilen Sie Erwerb, vGA, Dividendenertrag und spätere Veräußerung.",
    solution: ["Beteiligung nur mit 90.000 € aktivieren; 30.000 € Kaufpreisüberschuss ist vGA.", "vGA ist Leistung nach § 27.", "Dividende nach § 8b Abs. 1, 4 und 5 prüfen.", "Veräußerungsgewinn oder -verlust nach § 8b Abs. 2 und 3 behandeln."],
  },
  {
    id: 15, title: "Nicht fremdübliches Darlehen zwischen Schwestern", points: 6, moduleId: 28, source: `${Q}, PDF-S. 157–219`,
    facts: ["Zwei GmbHs stehen unter einem gemeinsamen beherrschenden Gesellschafter.", "Eine Gesellschaft gewährt der anderen ein Darlehen zu nicht fremdüblichen Bedingungen."],
    task: "Ordnen Sie Vorteil, vGA-Zurechnung und mögliche Einlagefolge zu.",
    solution: ["Vorteil bei der Schwestergesellschaft.", "vGA der leistenden Gesellschaft an den gemeinsamen Gesellschafter.", "Bei der begünstigten Gesellschaft mögliche verdeckte Einlage über den Gesellschafter.", "Folgen nach § 8b und § 27 je Ebene prüfen."],
  },
  {
    id: 16, title: "Rückwirkende Gehaltserhöhung und Überstunden", points: 8, moduleId: 30, source: `${Q}, PDF-S. 249–269`,
    facts: ["Alleingesellschafter-Geschäftsführer mit 132.000 € Jahresgehalt.", "Gehaltserhöhung wird im April rückwirkend ab Januar vereinbart.", "Zusätzlich 11.000 € Weihnachtsgeld und 4.000 € Überstundenvergütung."],
    task: "Prüfen Sie Vorausvereinbarung, tatsächliche Durchführung und Angemessenheit.",
    solution: ["Rückwirkende Nachzahlung für Januar bis März erfüllt das Voraus-Erfordernis nicht.", "Weihnachtsgeld nur bei klarer Vorausvereinbarung und tatsächlicher Durchführung.", "Überstundenvergütung ist bei Gesellschafter-Geschäftsführern regelmäßig vGA.", "Anschließend Gesamtausstattung prüfen."],
  },
];

const quizNeu = [
  { frage: "Welcher Wert ist bei der Hingabe eines Wirtschaftsguts für die vGA maßgeblich?", optionen: ["Buchwert", "Nennwert", "gemeiner Wert", "Restwert null"], richtig: 2, erklaerung: "H 8.6 KStH stellt bei Wirtschaftsgütern auf den gemeinen Wert ab." },
  { frage: "Wie wird eine durch die vGA ausgelöste nicht abziehbare Vorsteuer behandelt?", optionen: ["nochmals nach § 10 Nr. 2 hinzurechnen", "nicht zusätzlich hinzurechnen", "als Spende behandeln", "immer aktivieren"], richtig: 1, erklaerung: "R 8.6 KStR verhindert die doppelte Hinzurechnung." },
  { frage: "Eigenkapital 120, Kapital 50, Einlagekonto 45: ausschüttbarer Gewinn?", optionen: ["25", "45", "70", "120"], richtig: 0, erklaerung: "120 - 50 - 45 = 25." },
  { frage: "30 Leistung bei 25 ausschüttbarem Gewinn: Minderung des Einlagekontos?", optionen: ["30", "25", "5", "0"], richtig: 2, erklaerung: "Nur der Überhang von 5 mindert § 27." },
  { frage: "Was gilt bei einer vGA aus der Übertragung einer Beteiligung?", optionen: ["§ 8b ist ausgeschlossen", "die vGA-bedingte Gewinnerhöhung fällt in § 8b", "nur der Buchverlust ist steuerfrei", "immer volle Steuerpflicht"], richtig: 1, erklaerung: "Die Einheit stellt den Vorrang der §-8b-Rechnung heraus." },
  { frage: "Wem wird der Vorteil an eine Schwestergesellschaft zugerechnet?", optionen: ["niemandem", "dem gemeinsamen Gesellschafter", "nur der Bank", "dem Finanzamt"], richtig: 1, erklaerung: "Die vGA wird über den gemeinsamen Gesellschafter zugerechnet." },
  { frage: "Welche Anforderung gilt bei einem beherrschenden Gesellschafter zusätzlich?", optionen: ["nur Schriftform", "klare Vorausvereinbarung und tatsächliche Durchführung", "notarielle Beurkundung jeder Zahlung", "immer Marktgutachten"], richtig: 1, erklaerung: "Vereinbarung muss wirksam, klar, im Voraus geschlossen und durchgeführt sein." },
  { frage: "Wie sind Überstundenvergütungen an Gesellschafter-Geschäftsführer regelmäßig einzuordnen?", optionen: ["immer Arbeitslohn", "regelmäßig vGA", "immer Einlage", "steuerfrei"], richtig: 1, erklaerung: "Die Organvergütung deckt regelmäßig die gesamte Tätigkeit ab." },
  { frage: "Was bewirkt die Option nach § 1a KStG?", optionen: ["zivilrechtliche Umwandlung in eine GmbH", "ertragsteuerliche Behandlung wie Kapitalgesellschaft", "nur Gewerbesteuerbefreiung", "Auflösung der Gesellschaft"], richtig: 1, erklaerung: "Zivilrechtlich bleibt die Personengesellschaft bestehen." },
  { frage: "Beseitigt die Rückzahlung eine frühere vGA rückwirkend?", optionen: ["ja", "nur bei Gesellschafterbeschluss", "nein, regelmäßig neue Einlage", "nur bei Barzahlung"], richtig: 2, erklaerung: "Die Rückzahlung wird als neuer Einlagevorgang behandelt." },
  { frage: "Ist unentgeltliche Arbeit des Gesellschafters eine verdeckte Einlage?", optionen: ["immer", "regelmäßig nein", "nur bei GmbH", "nur im Gründungsjahr"], richtig: 1, erklaerung: "Die Dienstleistung ist kein bilanzierbarer Vermögensvorteil." },
  { frage: "Wie wird der Abwicklungsgewinn nach § 11 grundsätzlich ermittelt?", optionen: ["Umsatz minus Kosten", "Endvermögen minus Anfangsvermögen", "Ausschüttung minus Stammkapital", "nur Veräußerungsgewinne"], richtig: 1, erklaerung: "§ 11 arbeitet mit Abwicklungs-End- und Anfangsvermögen." },
];

const kartenNeu = [
  { vorn: "vGA-Wert bei Wirtschaftsgut", hinten: "Gemeiner Wert; bei Nutzungsüberlassung erzielbare Vergütung. IDB und ADB getrennt darstellen." },
  { vorn: "vGA und Umsatzsteuer", hinten: "Umsatzsteuerfolge einbeziehen, aber nach R 8.6 nicht zusätzlich über § 10 Nr. 2 KStG hinzurechnen." },
  { vorn: "§ 27: ausschüttbarer Gewinn", hinten: "Eigenkapital minus gezeichnetes Kapital minus steuerliches Einlagekonto." },
  { vorn: "§-27-Beispiel", hinten: "120.000 - 50.000 - 45.000 = 25.000; Leistung 30.000 mindert Einlagekonto um 5.000 auf 40.000." },
  { vorn: "Eigene Anteile", hinten: "Fremdüblichen Anteilserwerb und gesellschaftlich veranlassten Kaufpreisüberschuss trennen; Überschuss kann vGA sein." },
  { vorn: "vGA + Beteiligungsübertragung", hinten: "Fremdwert korrigieren, zutreffenden Gewinn bestimmen, dann § 8b Abs. 2 und 3 anwenden." },
  { vorn: "Schwestergesellschaft", hinten: "Vorteil bei Schwester; vGA an gemeinsamen Gesellschafter; mögliche Einlage in begünstigte Gesellschaft." },
  { vorn: "Beherrschender Gesellschafter", hinten: "Zivilrechtlich wirksame, klare, eindeutige Vorausvereinbarung und tatsächliche Durchführung." },
  { vorn: "GF-Überstunden", hinten: "Überstundenvergütung an Gesellschafter-Geschäftsführer ist regelmäßig vGA; Ausnahme nur mit starker betrieblicher Begründung." },
  { vorn: "Option § 1a KStG", hinten: "Zivilrechtlich Personengesellschaft, ertragsteuerlich Kapitalgesellschaft; Einstieg wie Formwechsel prüfen." },
  { vorn: "Rückzahlung einer vGA", hinten: "Frühere vGA bleibt bestehen; Rückzahlung ist regelmäßig eine Einlage im Zahlungsjahr." },
  { vorn: "§ 11 KStG", hinten: "Abwicklungsgewinn = Abwicklungs-Endvermögen minus Abwicklungs-Anfangsvermögen, mit gesetzlichen Korrekturen." },
];

/* Fachfremde K1-Seiten, reine Bilanzaufgaben und Navigations-/Videoframes werden nicht als K2-Lernstoff dupliziert. */
if (!kstModule.some((m) => m.id === 24)) { kstModule.push(...moduleNeu); kstModule.sort((a, b) => a.id - b.id); }
if (!kstSchemata.some((s) => s.id === "vga-wert-ust")) kstSchemata.push(...schemataNeu);
if (!kstFaelle.some((f) => f.id === 11)) kstFaelle.push(...faelleNeu);
if (!kstQuizfragen.some((q) => q.frage === quizNeu[0].frage)) kstQuizfragen.push(...quizNeu);
if (!kstKarteikarten.some((k) => k.vorn === kartenNeu[0].vorn)) kstKarteikarten.push(...kartenNeu);
if (!kstQuellen.some((q) => q.title === Q)) {
  kstQuellen.push({
    title: Q, pages: 279, status: "eingearbeitet",
    topics: "Vertiefung vGA: Bewertung und Umsatzsteuer, § 27 KStG, eigene Anteile, Beteiligungsübertragungen und § 8b, nahestehende Personen/Schwestergesellschaften, beherrschende Gesellschafter, Geschäftsführervergütung, Option nach § 1a KStG, Rückgängigmachung und Liquidation",
  });
}
