/* KSt Teil III – Steuerliches Einlagekonto (§ 27 KStG) und Grundzüge der Kapital-
   herauf- und -herabsetzung (§ 28 KStG), Hamacher, 21. Auflage, Stand Mai 2025.

   Wortlautgetreue Übernahme des Lehrgangsskripts „Körperschaftsteuer, Teil III:
   Steuerliches Einlagekonto (§ 27 KStG); Grundzüge der Kapitalherauf- und
   -herabsetzung (§ 28 KStG)" aus den Lehrgangsunterlagen (39 Seiten). Das Skript
   hat drei Kapitel: 1 Steuerliches Einlagekonto (§ 27 KStG), 2 Grundzüge der
   Kapitalerhöhung (§ 28 Abs. 1 KStG) und 3 Grundzüge der Kapitalherabsetzung
   (§ 28 Abs. 2 KStG) einschließlich des Erwerbs und der Veräußerung eigener
   Anteile. Gegliedert wird hier nach den Abschnitten der Quelle; jeder Abschnitt
   steht als eigener Eintrag.

   STAND DER ÜBERNAHME: Aus Kapitel 1 sind die Abschnitte 1.1 (Einlagenrückgewähr
   mit dem Exkurs zum EK 04) und 1.2 (Auswirkungen der Einlagenrückgewähr –
   veräußerungsgleicher Vorgang, natürliche Person im Betriebs- und im
   Privatvermögen, Anteilseigner-Kapitalgesellschaft, Verteilung bei
   unterschiedlichen Anteilen und Einschränkung der Steuerfreiheit) übernommen.
   Es folgen die Feststellung des Einlagekontos (1.3), die
   Verwendungsfestschreibung (1.4) sowie die Kapitel 2 und 3; der Campus weist
   den Stand aus.

   HINWEIS ZUM RECHTSSTAND: Anders als die Teile I und II trägt dieses Skript den
   Stand Mai 2025 und rechnet seine Beispiele im VZ 2025.

   HINWEIS ZUR QUELLE: Der Text ist unmittelbar aus der PDF-Datei extrahiert
   (pypdf, 39 Seiten), weil die Textausgabe des Drive-Readers bei umfangreichen
   PDF-Dateien ohne Fehlermeldung abbrechen kann.

   Die Fußnoten der Quelle sind nicht als eigene Blöcke übernommen; die
   Fundstellen, auf die sie verweisen, stehen im Feld `normen` des jeweiligen
   Abschnitts. Die im PDF durch den Blocksatz entstandenen Trennstriche
   ("Einlage- konto") sind zusammengeführt.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen. */

const VERFASSER = "Hamacher";
const RECHTSSTAND = "Stand 05/2025";

export const kstTeil3Quelle = {
  reihe: "Körperschaftsteuer · Teil III: Steuerliches Einlagekonto (§ 27 KStG) und Kapitalmaßnahmen (§ 28 KStG) · Hamacher",
  stand: "Stand 05/2025 (21. Auflage)",
  verfasser: "Hamacher",
  didaktik: [
    "Wortlautgetreue Übernahme des Lehrgangsskripts; eigene Ergänzungen sind durchgehend als solche gekennzeichnet.",
    "Jeder Abschnitt der Quelle steht als eigener Eintrag; die Nummerierung folgt dem Inhaltsverzeichnis des Skripts.",
    "Sämtliche Zahlen der Beispiele sind unabhängig nachgerechnet; Abweichungen und Eigenheiten der Quelle sind mit „(so in der Quelle)“ gekennzeichnet.",
  ],
};

export const kstTeil3 = [
  {
    id: "kst-t3-1",
    kapitel: "1",
    abschnittNr: "1.1",
    title: "1.1 Einlagenrückgewähr – Hintergrund des Einlagekontos und Exkurs EK 04",
    thema: "Das steuerliche Einlagekonto dokumentiert die Einlagen, die das Nennkapital nicht erhöht haben. Es wird gesellschafts-, nicht gesellschafterbezogen geführt – die Gesellschaft hat immer nur einen Bestand",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil III (Hamacher), Abschnitt 1.1 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 27 KStG",
      "§ 27 Abs. 1 Satz 3 KStG",
      "§ 20 Abs. 1 Nr. 1 Satz 3 EStG",
      "§ 39 Abs. 1 KStG",
      "§ 36 KStG",
      "BFH vom 19.05.2010, BStBl. II 2014, 937",
    ],
    themen: ["Steuerliches Einlagekonto", "Gesellschaftsbezogene Führung", "Einlagenrückgewähr", "EK 04", "Anrechnungsverfahren"],
    bloecke: [
      { text: "Die Feststellung des steuerlichen Einlagekontos dient ausschließlich dazu, die vom Anteilseigner geleisteten (verdeckten) Einlagen zu erfassen, welche nicht das Nennkapital der Gesellschaft erhöhen. Denn während im Nennkapital die Hafteinlagen ausgewiesen werden, können die darüber hinaus gehenden Einlagen unter gewissen formellen Voraussetzungen wieder ausgekehrt werden. Das steuerliche Einlagekonto dokumentiert damit die „verwendbaren“ Einlagen, wenn z.B. der Bestand der Kapitalrücklage aufgelöst und ausgekehrt werden soll. Das steuerliche Einlagekonto wird aber nur „gesellschaftsbezogen“ (d.h. nicht gesellschafterbezogen) geführt. Dies bedeutet, dass die Gesellschaft immer nur über einen Bestand i.S. des § 27 KStG verfügen kann, unabhängig davon, welcher Gesellschafter die Einlage tatsächlich geleistet hat." },
      { text: "Bedeutung erlangt das steuerliche Einlagekonto erst im Fall einer Gewinnausschüttung. Kommt es dazu, weil dessen Bestand nach der gesetzlichen Verwendungsreihenfolge i.S. des § 27 Abs. 1 Satz 3 KStG dafür als verwendet gilt, handelt es sich um eine sog. Einlagenrückgewähr (siehe § 20 Abs. 1 Nr. 1 Satz 3 EStG). Dadurch wird auf Ebene des Anteilseigners sichergestellt, dass sich aus der Rückführung der Einlagen keine Beteiligungserträge ergeben." },
      { typ: "titel", text: "1.1.2 Exkurs: EK 04" },
      { text: "Das steuerliche Einlagekonto ist faktisch Restausläufer des alten „Anrechnungsverfahrens“. Nach § 39 Abs. 1 KStG war ein positiver Bestand des bisher festgestellten „EK 04“ zum 31.12.2000 als Anfangsbestand in das neue Recht zu übernehmen. Verfügte die Gesellschaft über keinen positiven Bestand des EK 04 bzw. konnte als Neugründungsfall nicht an der Umgliederungsrechnung i.S. des § 36 KStG teilnehmen, wurde der Anfangsbestand mit 0 € festgestellt." },
      { text: "Das EK 04 wurde im Rahmen der bisherigen Feststellung des verwendbaren Eigenkapitals jährlich als besonderer Eigenkapitalposten ausgewiesen. Dieser Bestand konnte nur durch Einlagen des Gesellschafters gebildet werden und beinhaltete somit die nicht steuerbaren Vermögensmehrungen der Körperschaft. Bedeutung hatte dieser Bestand erst dann, wenn dieser nach einer Verwendungsreihenfolge für Gewinnausschüttungen verwendet wurde. Denn die Verwendung des EK 04 führte beim Anteilseigner zu einer Einlagenrückgewähr." },
      { text: "Anmerkung zur gesellschaftsbezogenen Führung (eigene Ergänzung): Der unscheinbarste Satz des Abschnitts hat die weitreichendsten Folgen. Weil das Einlagekonto **nur einen** Bestand kennt und nicht nach Gesellschaftern getrennt geführt wird, profitiert von einer Einlagenrückgewähr jeder Anteilseigner nach seiner Quote – auch derjenige, der die Einlage nie geleistet hat. Die Quelle spricht das im folgenden Abschnitt ausdrücklich aus. Daraus entsteht die Grundkonstellation des ganzen Kapitels: Die Auskehrung kann bei einem Gesellschafter die Anschaffungskosten überschreiten, obwohl die Gesellschaft nur zurückgibt, was sie einmal erhalten hat." },
      { text: "Anmerkung zur Einordnung (eigene Ergänzung): Die Einlagenrückgewähr ist bereits im Teil II begegnet – dort als einer der Fälle des weiten Veräußerungsbegriffs des § 8b Abs. 2 Satz 3 KStG. Dieses Skript behandelt denselben Vorgang von der anderen Seite: nicht aus Sicht des Anteilseigners, der einen steuerfreien Gewinn erzielt, sondern aus Sicht der Gesellschaft, die den Bestand des Einlagekontos zu führen und festzustellen hat. Beide Skripte sind deshalb nebeneinander zu lesen." },
    ],
  },
  {
    id: "kst-t3-2",
    kapitel: "2",
    abschnittNr: "1.2.1 bis 1.2.1.1.2",
    title: "1.2.1 Veräußerungsgleicher Vorgang – Auswirkungen bei einer natürlichen Person",
    thema: "Die Einlagenrückgewähr mindert erfolgsneutral die Anschaffungskosten bis auf 0 €. Erst der Überhang löst Steuerfolgen aus – und zwar je nach Rechtsform und Zugehörigkeit des Anteils ganz unterschiedliche",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil III (Hamacher), Abschnitte 1.2.1 bis 1.2.1.1.2 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 20 Abs. 1 Nr. 1 Satz 3 EStG",
      "§ 20 Abs. 2 Nr. 1 EStG, § 20 Abs. 2 Satz 2 EStG",
      "§ 17 Abs. 3 und Abs. 4 EStG",
      "§ 3 Nr. 40 Buchstabe a und Buchstabe c EStG",
      "§ 3 Nr. 40 Buchstabe a Satz 2 EStG",
      "§ 3c Abs. 2 EStG",
      "BFH vom 16.03.1994, BStBl. II 1994, 527",
      "BFH vom 19.07.1994, BStBl. II 1995, 362",
      "BFH vom 20.04.1999, BStBl. II 1999, 647",
      "BFH vom 19.02.2013, BStBl. II 2013, 484",
      "OFD Frankfurt/Main vom 01.11.2023, S 2244 A-00094-0357-St5",
      "BMF vom 19.05.2022, BStBl. I 2022, 742, Tz. 92",
    ],
    themen: ["Erfolgsneutrale Verrechnung", "Überhang", "§ 17 Abs. 4 EStG", "Negative Anschaffungskosten", "Teileinkünfteverfahren"],
    bloecke: [
      { text: "Die Einlagenrückgewähr führt zunächst zu einer erfolgsneutralen Verrechnung mit den Anschaffungskosten bzw. dem Buchwert der Beteiligung bis auf maximal 0 €. Dies ist folgerichtig, weil dem Anteilseigner durch Verwendung des steuerlichen Einlagekontos die Einlagen zurückbezahlt werden, die zuvor in aller Regel seine Anschaffungskosten erhöht haben. Dies gilt auch in den Fällen, in denen der Anteilseigner selbst die Einlage nicht geleistet hat und an der nachfolgenden Einlagenrückgewähr partizipiert." },
      { text: "Bis zur Höhe der Anschaffungskosten bzw. des Buchwertes des Anteils sind die Auswirkungen der Einlagerückgewähr immer steuerneutral. Steuerfolgen können sich daraus nur in den Fällen des Überhangs der Auskehrung über den Betrag der Anschaffungskosten hinaus ergeben. Dazu kann es z.B. kommen, wenn der Anteilseigner" },
      { text: "• die Anteile nachträglich erworben hat und der Bestand des steuerlichen Einlagekontos nicht mit den Anschaffungskosten korrespondiert;" },
      { text: "• nicht mit dem Anteilseigner identisch ist, welcher die Einlagen geleistet hat;" },
      { text: "• auf den Betrag seiner Anschaffungskosten im Betriebsvermögen eine Teilwertabschreibung vorgenommen hat." },
      { text: "Die sich aus dem betragsmäßigen Überhang ergebenden Steuerfolgen sind je nach Rechtsform des Anteilseigners unterschiedlich:" },
      { typ: "titel", text: "1.2.1.1.1 Anteil im Betriebsvermögen" },
      { text: "Übersteigt die Einlagenrückgewähr die Anschaffungskosten bzw. den Buchwert des Anteils, entsteht dem Anteilseigner in Höhe dieses Überhangs ein Veräußerungsgewinn. Gehört der Anteil zum Betriebsvermögen, unterliegt der betriebliche Gewinn dem Teileinkünfteverfahren i.S. des § 3 Nr. 40 a und § 3c Abs. 2 EStG. Dabei sind aber auch die Einschränkungen des § 3 Nr. 40 a Satz 2 EStG zu beachten, wenn mit dem Anteil eine „alte“ Teilwertabschreibung im Zusammenhang steht." },
      { typ: "titel", text: "1.2.1.1.2 Anteil im Privatvermögen" },
      { text: "Befindet sich der Anteil im Privatvermögen und ist dieser nach § 17 EStG steuerverstrickt, entsteht in diesen Fällen ein Veräußerungsgewinn i.S. des § 17 Abs. 4 EStG. Der Freibetrag i.S. des § 17 Abs. 3 EStG kann dabei nicht beansprucht werden, weil der Anteil tatsächlich nicht veräußert wird. Der daraus resultierende Veräußerungsgewinn unterliegt nach § 3 Nr. 40c EStG und § 3c Abs. 2 EStG regulär dem Teileinkünfteverfahren." },
      { text: "Bei Anteilen des Privatvermögens i.S. des § 20 Abs. 2 Nr. 1 EStG führt die Auskehrung des steuerlichen Einlagekontos zu einem steuerneutralen Vorgang. Dadurch verringern sich die Anschaffungskosten des Anteils entsprechend. Ein Überhang dieser Auskehrung über die Anschaffungskosten führt aber nicht zu einem steuerpflichtigen Bezug, weil § 20 Abs. 2 Satz 2 EStG hinsichtlich der Einlagenrückgewähr keine diesbezügliche Regelung enthält. In diesen Fällen entstehen dem Anteilseigner ausnahmsweise negative Anschaffungskosten des Anteils." },
      { text: "Beispiel: A erhält eine Gewinnausschüttung der A-GmbH i.H. von 200.000 € (Beteiligungsquote im Privatvermögen: 20 %). Diese wurde ausweislich der Ausschüttungsbescheinigung i.H. von 90.000 € dem steuerlichen Einlagekonto entnommen. Die Anschaffungskosten der Beteiligung betragen im Zeitpunkt der Gewinnausschüttung a) 200.000 € b) 80.000 €" },
      { text: "Lösung: Die Gewinnausschüttung, welche aus dem steuerlichen Einlagekonto (§ 27 KStG) verwendet wurde (= 90.000 €), ist bei A zunächst bis zur Höhe seiner Anschaffungskosten steuerneutral, weil die Einlagenrückgewähr diesen Betrag (bis auf 0 €) reduziert. Besteuerungsfolgen ergeben sich nur in Fällen des Überhangs der Einlagenrückgewähr. Daraus resultieren nach § 20 Abs. 1 Nr. 1 Satz 3 EStG keine Beteiligungserträge." },
      { text: "Im Fall a) reduzieren sich die Anschaffungskosten der Beteiligung auf 110.000 € und der Vorgang ist vollkommen steuerneutral." },
      { text: "Im Unterfall b) werden die gesamten Anschaffungskosten von 80.000 € aufgezehrt. Aufgrund des Überhangs der Einlagenrückgewähr entsteht ein Veräußerungsvorgang i.S. des § 17 Abs. 4 EStG und gleichzeitig ein Veräußerungsgewinn von 10.000 € (90.000 € ./. 80.000 €). Der Veräußerungsgewinn ist nach Anwendung des Teileinkünfteverfahrens (§ 3 Nr. 40c und § 3c Abs. 2 EStG) in Höhe von 6.000 € steuerpflichtig. Die verbleibenden Anschaffungskosten betragen danach aber 0 €, weil A unverändert an der A-GmbH beteiligt ist." },
      { text: "Der Restbetrag der Gewinnausschüttung von 110.000 € ist beim Anteilseigner als Beteiligungsertrag i.S. des § 20 Abs. 1 Nr. 1 EStG zu besteuern." },
      { typ: "tabelle", spalten: ["Anteil des Anteilseigners", "Überhang über die Anschaffungskosten", "Rechtsgrundlage", "Besteuerung"], zeilen: [
        ["Betriebsvermögen einer natürlichen Person", "Veräußerungsgewinn", "§ 3 Nr. 40 Buchstabe a, § 3c Abs. 2 EStG", "Teileinkünfteverfahren, Einschränkung bei alter Teilwertabschreibung nach § 3 Nr. 40 a Satz 2 EStG"],
        ["Privatvermögen, steuerverstrickt nach § 17 EStG", "Veräußerungsgewinn", "§ 17 Abs. 4 EStG, § 3 Nr. 40c, § 3c Abs. 2 EStG", "Teileinkünfteverfahren – aber ohne den Freibetrag des § 17 Abs. 3 EStG"],
        ["Privatvermögen i. S. des § 20 Abs. 2 Nr. 1 EStG", "kein steuerpflichtiger Bezug", "§ 20 Abs. 2 Satz 2 EStG enthält keine Regelung", "keine Besteuerung – es entstehen ausnahmsweise negative Anschaffungskosten"],
      ] },
      { text: "Anmerkung zur Tabelle (eigene Ergänzung): Die dritte Zeile ist die bemerkenswerteste des Abschnitts und im Examen leicht zu übersehen. Bei Anteilen unter einem Prozent im Privatvermögen, die also nicht nach § 17 EStG steuerverstrickt sind, bleibt der Überhang **vollständig unbesteuert** – und zwar nicht deshalb, weil er freigestellt wäre, sondern weil das Gesetz für die Einlagenrückgewähr schlicht keinen Besteuerungstatbestand vorsieht. Die Folge sind **negative Anschaffungskosten**, die ein Dogma des Bilanzsteuerrechts durchbrechen: Bei einer späteren Veräußerung erhöhen sie den Veräußerungsgewinn, so dass die Besteuerung lediglich aufgeschoben und nicht aufgehoben ist. Wer die Anteile nie veräußert, wird insoweit nie besteuert." },
      { text: "Anmerkung zum fehlenden Freibetrag (eigene Ergänzung): Dass § 17 Abs. 3 EStG nicht beansprucht werden kann, wird mit einem knappen Satz begründet – der Anteil wird tatsächlich nicht veräußert. Das ist eine wichtige Abgrenzung: § 17 Abs. 4 EStG fingiert zwar die Veräußerung für die Ermittlung des Gewinns, aber nicht für die Vergünstigungen, die an eine tatsächliche Veräußerung anknüpfen. Dieselbe Überlegung trägt den Schlusssatz der Lösung – die Anschaffungskosten betragen danach 0 € und nicht etwa nichts mehr, weil A weiterhin beteiligt bleibt." },
      { text: "Rechenproben (eigene Ergänzung): Alle Zahlen des Beispiels gehen auf. Fall a): 200.000 € Anschaffungskosten ./. 90.000 € Einlagenrückgewähr = 110.000 €. Fall b): 90.000 € ./. 80.000 € = 10.000 € Überhang, davon 60 % = 6.000 € steuerpflichtig. Der Restbetrag der Ausschüttung beträgt in beiden Fällen 200.000 € ./. 90.000 € = 110.000 € und ist regulärer Beteiligungsertrag – im Privatvermögen nach § 20 Abs. 1 Nr. 1 EStG und damit grundsätzlich abgeltend besteuert, was die Quelle hier nicht eigens ausspricht." },
    ],
  },
  {
    id: "kst-t3-3",
    kapitel: "3",
    abschnittNr: "1.2.1.2 und 1.2.1.4",
    title: "1.2.1.2 Anteilseigner-Kapitalgesellschaft · 1.2.1.4 Verteilung bei unterschiedlichen Anteilen",
    thema: "Bei der Kapitalgesellschaft ist der Überhang nach § 8b Abs. 2 KStG steuerfrei, mit Fünf-Prozent-Pauschale. Besteht die Beteiligung aus mehreren Anteilen, ist die Einlagenrückgewähr zwingend nach dem Verhältnis der Nominalanteile aufzuteilen",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil III (Hamacher), Abschnitte 1.2.1.2 und 1.2.1.4 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8b Abs. 1, Abs. 2 und Abs. 5 KStG",
      "§ 8b Abs. 2 Satz 2 KStG",
      "§ 8b Abs. 3 Satz 1 und Satz 3 KStG",
      "§ 8b Abs. 4 Satz 1 KStG",
      "§ 20 Abs. 1 Nr. 1 Satz 3 EStG",
      "§ 17 Abs. 4 EStG",
      "§ 15 Abs. 2 GmbHG",
      "H 8b KStH „Ausschüttungen aus dem steuerlichen Einlagekonto“",
      "BFH vom 28.10.2009, BStBl. II 2011, 898",
      "BFH vom 29.07.1997, BStBl. II 1997, 727",
      "OFD Frankfurt/Main vom 16.06.2021, S 2244 A – 41 – St 519",
    ],
    themen: ["Anteilseigner-Kapitalgesellschaft", "§ 8b Abs. 2 KStG", "Mehrere Anteile", "Verhältnis der Nominalanteile", "Kein Wahlrecht"],
    bloecke: [
      { text: "Bei einer Anteilseigner-Kapitalgesellschaft ist der Buchwert der Beteiligung um den Betrag der Einlagenrückgewähr erfolgsneutral zu vermindern. Nur in den Fällen eines Überhangs der Auskehrung über den Buchwert entsteht ein Veräußerungsgewinn, welcher nach den Grundsätzen des § 8b Abs. 2 und § 8b Abs. 3 Satz 3 KStG zu behandeln ist." },
      { text: "Beispiel: Die Z-GmbH erhält eine Gewinnausschüttung der A-GmbH i.H. von 200.000 € (Beteiligungsquote: 20 %). Diese wurde ausweislich der Ausschüttungsbescheinigung i.H. von 100.000 € dem steuerlichen Einlagekonto entnommen. Der Buchwert der Beteiligung beträgt im Zeitpunkt der Gewinnausschüttung c) 200.000 € d) 80.000 € (Die Buchstaben c) und d) stehen so in der Quelle; die Lösung bezeichnet dieselben Varianten anschließend mit a) und b).)" },
      { text: "Lösung: Die Gewinnausschüttung, welche nicht dem steuerlichen Einlagekonto (§ 27 KStG) entnommen wurde (= 100.000 €), ist bei der Z-GmbH als Bezug i.S. des § 20 Abs. 1 Nr. 1 EStG gemäß § 8b Abs. 1 KStG steuerfrei. Die Streubesitzregelung des § 8b Abs. 4 Satz 1 KStG steht der Anwendung der Steuerbefreiung nicht entgegen. Gleichzeitig entstehen nach § 8b Abs. 5 KStG nicht abziehbare Betriebsausgaben von 5.000 €." },
      { text: "Die Ausschüttung, welche dem steuerlichen Einlagenkonto entnommen wurde, führt nicht zu Bezügen i.S. des § 20 Abs. 1 Nr. 1 EStG (siehe § 20 Abs. 1 Nr. 1 Satz 3 EStG). Diese stellt eine Einlagenrückgewähr das und ist zunächst erfolgsneutral mit dem Buchwert der Beteiligung zu verrechnen. Nur ein den Buchwert übersteigender Betrag der Ausschüttung ist steuerfrei (Anwendung des § 8b Abs. 2 KStG). (Das „das“ statt „dar“ steht so in der Quelle.)" },
      { text: "Im Fall a) reduziert sich der Buchwert der Beteiligung auf 100.000 € (Buchung: Bank an Beteiligung) und der Vorgang ist letztlich erfolgsneutral." },
      { text: "Im Unterfall b) wird der gesamte Buchwert von 80.000 € aufgezehrt. Der übersteigende Betrag von 20.000 € stellt einen Ertrag dar, welcher jedoch gemäß § 8b Abs. 2 KStG steuerfrei ist (aber: Wertaufholung i.S. des § 8b Abs. 2 Satz 2 KStG beachten). Daraus entstehen der Gesellschaft nicht abziehbare Betriebsausgaben von 1.000 € (§ 8b Abs. 3 Satz 1 KStG)." },
      { typ: "tabelle", spalten: ["Teil der Ausschüttung von 200.000 €", "Behandlung bei der Z-GmbH", "Pauschale"], zeilen: [
        ["100.000 € regulärer Bezug", "steuerfrei nach § 8b Abs. 1 KStG – kein Streubesitz, weil 20 %", "5.000 € nach § 8b Abs. 5 KStG"],
        ["100.000 € Einlagenrückgewähr, Fall mit Buchwert 200.000 €", "erfolgsneutrale Minderung auf 100.000 € (Bank an Beteiligung)", "keine"],
        ["100.000 € Einlagenrückgewähr, Fall mit Buchwert 80.000 €", "Buchwert aufgezehrt, Überhang 20.000 € steuerfrei nach § 8b Abs. 2 KStG", "1.000 € nach § 8b Abs. 3 Satz 1 KStG"],
      ] },
      { text: "Anmerkung zu den beiden Pauschalen (eigene Ergänzung): Derselbe Ausschüttungsbetrag von 200.000 € löst in diesem Beispiel **zwei verschiedene** Fünf-Prozent-Pauschalen aus verschiedenen Rechtsgrundlagen aus – 5.000 € nach § 8b Abs. 5 KStG für den regulären Bezug und 1.000 € nach § 8b Abs. 3 Satz 1 KStG für den Veräußerungsgewinn. Genau diesen Befund hatte schon der Teil II bei der Einlagenrückgewähr festgehalten: Eine einzige Ausschüttung kann drei Behandlungen nebeneinander auslösen, mit Pauschalen aus zwei verschiedenen Vorschriften. Beide bemessen sich jeweils nur nach dem ihnen zugeordneten Betrag; eine Saldierung findet nicht statt." },
      { typ: "titel", text: "1.2.1.4 Verteilung bei unterschiedlichen Anteilen" },
      { text: "Besteht die Beteiligung des Anteilseigners aus mehreren Anteilen, müssen die Anschaffungskosten der unterschiedlichen Anteile im Falle der Einlagenrückgewähr aufgeteilt werden. Denn jeder Anteil ist gesellschaftsrechtlich selbständig (siehe § 15 Abs. 2 GmbHG) und kann einzeln veräußert werden." },
      { text: "Der Einlagenrückgewähr sind daher die Anschaffungskosten sämtlicher Anteile gegenüberzustellen, weil von der Rückzahlung des steuerlichen Einlagekontos immer die gesamte Beteiligung betroffen ist. Der Anteilseigner hat diesbezüglich kein Wahlrecht, welche Anteile von den Auswirkungen des § 17 Abs. 4 EStG betroffen sein sollen. Die Aufteilung bestimmt sich nach dem jeweiligen Verhältnis der Nominalanteile." },
      { text: "Beispiel: A besitzt eine Beteiligung von 50 % an der A-GmbH, welche sich aus zwei zu unterschiedlichen Zeitpunkten erworbenen Anteile zusammensetzt: Anteil 1 von 30 % (Anschaffungskosten: 50.000 €), Anteil 2 von 20 % (Anschaffungskosten: 400.000 €). Im VZ 2025 erhält A eine Gewinnausschüttung von 1.000.000 €, welche ausweislich der zutreffenden Steuerbescheinigung i.H. von 600.000 € aus dem steuerlichen Einlagekonto der A-GmbH verwendet worden ist." },
      { text: "Lösung: Die Einlagenrückgewähr von 600.000 € führt nicht zu Bezügen i.S. des § 20 Abs. 1 Nr. 1 EStG (siehe § 20 Abs. 1 Nr. 1 Satz 3 EStG), sondern ist zunächst mit den Anschaffungskosten der Anteile zu verrechnen. Weil der Steuerpflichtige vorliegend über 2 getrennte Anteile verfügt, ist der einheitliche Betrag auf die beiden Anteile zu verteilen. Dafür ist das Verhältnis der Nominalanteile maßgebend, so dass sich folgende Aufteilung ergibt:" },
      { text: "Anteil 1: 360.000 € (600.000 € x 30/50). Weil die Anschaffungskosten dieses Anteils lediglich 50.000 € betragen, kommt es aufgrund des Überhangs der Einlagenrückgewähr insoweit zu einem Veräußerungsvorgang i.S. des § 17 Abs. 4 EStG. Daraus resultiert ein Veräußerungsgewinn von 310.000 €, welcher nach Anwendung des Teileinkünfteverfahrens (§§ 3 Nr. 40c und 3c Abs. 2 EStG) i.H. von 186.000 € steuerpflichtig ist. Die mit dem Anteil 1 zusammenhängenden Anschaffungskosten betragen danach 0 €." },
      { text: "Anteil 2: 240.000 € (600.000 € x 20/50). Die Einlagenrückgewähr übersteigt den Betrag der Anschaffungskosten von 400.000 € nicht, so dass der Vorgang insoweit steuerneutral ist. Die mit dem Anteil 2 zusammenhängenden Anschaffungskosten betragen danach 160.000 €." },
      { typ: "tabelle", spalten: ["Anteil", "Quote", "Anschaffungskosten", "Anteilige Einlagenrückgewähr", "Veräußerungsgewinn § 17 Abs. 4 EStG", "Anschaffungskosten danach"], zeilen: [
        ["Anteil 1", "30 %", "50.000 €", "360.000 € (600.000 € × 30/50)", "310.000 €, davon 186.000 € steuerpflichtig", "0 €"],
        ["Anteil 2", "20 %", "400.000 €", "240.000 € (600.000 € × 20/50)", "keiner", "160.000 €"],
        ["Summe", "50 %", "450.000 €", "600.000 €", "310.000 €", "160.000 €"],
      ] },
      { text: "Anmerkung zum fehlenden Wahlrecht (eigene Ergänzung): Die Aufteilung nach Nominalanteilen ist für den Steuerpflichtigen hier **nachteilig**, und genau deshalb betont die Quelle, dass er kein Wahlrecht hat. Rechnet man den Fall zusammengefasst, kämen den 600.000 € Einlagenrückgewähr Anschaffungskosten von insgesamt 450.000 € gegenüber – der Veräußerungsgewinn betrüge dann nur 150.000 € statt 310.000 €. Die zwingende Einzelbetrachtung führt also zu einem um 160.000 € höheren Gewinn, weil die überschüssigen Anschaffungskosten des Anteils 2 nicht auf den Anteil 1 übertragen werden dürfen. Diese Vergleichsrechnung stellt die Quelle nicht an; sie ist eigene Herleitung." },
      { text: "Rechenproben (eigene Ergänzung): Alle Zahlen gehen auf. 600.000 € × 30/50 = 360.000 € und 600.000 € × 20/50 = 240.000 €, zusammen 600.000 €. Anteil 1: 360.000 € ./. 50.000 € = 310.000 €, davon 60 % = 186.000 €. Anteil 2: 400.000 € ./. 240.000 € = 160.000 €. Der Restbetrag der Ausschüttung von 1.000.000 € ./. 600.000 € = 400.000 € ist regulärer Beteiligungsertrag; die Quelle spricht ihn in diesem Beispiel nicht an." },
    ],
  },
  {
    id: "kst-t3-4",
    kapitel: "4",
    abschnittNr: "1.2.2",
    title: "1.2.2 Einschränkung der Steuerfreiheit – alte Teilwertabschreibungen holen den Überhang zurück",
    thema: "Steuerwirksame Teilwertabschreibungen der Vergangenheit machen den Überhang steuerpflichtig – bei der Kapitalgesellschaft über § 8b Abs. 2 Sätze 4 und 5 KStG, bei natürlichen Personen über § 3 Nr. 40 EStG",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil III (Hamacher), Abschnitt 1.2.2 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 8b Abs. 2 Sätze 4 und 5 KStG",
      "§ 8b Abs. 1, Abs. 4 Satz 1 und Abs. 5 KStG",
      "§ 3 Nr. 40 Buchstabe a Satz 2 EStG",
      "§ 3 Nr. 40 Satz 3 EStG",
      "§ 20 Abs. 1 Nr. 1 Satz 3 EStG",
    ],
    themen: ["Alte Teilwertabschreibung", "Wertaufholung", "§ 8b Abs. 2 Satz 4 KStG", "Steuerpflichtiger Überhang", "Betriebsvermögen"],
    bloecke: [
      { text: "In den Fällen des Betriebsvermögens ist hinsichtlich der Steuerfreiheit des Veräußerungsgewinnes zu beachten, dass die Anwendung des Teileinkünfteverfahrens oder der Steuerfreiheit des § 8b Abs. 2 KStG durch in der Vergangenheit vorgenommene steuerwirksame Teilwertabschreibungen oder sonstige Abzüge eingeschränkt werden kann. Bei einer Anteilseigner-Kapitalgesellschaft sind daher die Einschränkungen des § 8b Abs. 2 Satz 4 und 5 KStG sowie bei natürlichen Personen § 3 Nr. 40 a Satz 2 EStG sowie § 3 Nr. 40 Satz 3 EStG zu überprüfen." },
      { text: "Beispiel: Die Z-GmbH erhält eine Gewinnausschüttung der A-GmbH i.H. von 200.000 € (Beteiligungsquote: 20 %). Diese wurde ausweislich der Ausschüttungsbescheinigung i.H. von 100.000 € dem steuerlichen Einlagekonto entnommen. Der Buchwert der Beteiligung beträgt im Zeitpunkt der Gewinnausschüttung noch 80.000 €. Zum 31.12.1997 wurde eine – steuerwirksame – Teilwertabschreibung von 100.000 € vorgenommen." },
      { text: "Lösung: Die Auskehrung aus dem steuerlichen Einlagekonto führt beim Anteilseigner nicht zu Einnahmen i.S. des § 20 Abs. 1 Nr. 1 EStG (siehe § 20 Abs. 1 Nr. 1 Satz 3 EStG), so dass § 8b Abs. 1 KStG insoweit auch nicht einschlägig ist. In Höhe der restlichen Ausschüttung von 100.000 € gelten § 8b Abs. 1 und Abs. 5 KStG, weil auch die Streubesitzregelung i.S. des § 8b Abs. 4 Satz 1 KStG dem nicht entgegensteht." },
      { text: "Die Einlagenrückgewähr führt insoweit zu einer Verminderung des Buchwertes bis auf 0 €. Der danach sich ergebende Überhang von 20.000 € ist steuerpflichtig (§ 8b Abs. 2 Satz 4 KStG), weil in der Vergangenheit eine einkommenswirksame Teilwertabschreibung vorgenommen wurde, welche zudem noch nicht in voller Höhe wertaufgeholt wurde." },
      { typ: "tabelle", spalten: ["Sachverhalt", "Überhang von 20.000 €", "Rechtsgrundlage", "Pauschale"], zeilen: [
        ["ohne alte Teilwertabschreibung (Abschnitt 1.2.1.2)", "steuerfrei", "§ 8b Abs. 2 Satz 1 KStG", "1.000 € nach § 8b Abs. 3 Satz 1 KStG"],
        ["mit steuerwirksamer Teilwertabschreibung von 1997", "steuerpflichtig", "§ 8b Abs. 2 Satz 4 KStG", "keine – die Pauschale bemisst sich nur nach dem steuerfreien Teil"],
      ] },
      { text: "Anmerkung zur Tabelle (eigene Ergänzung): Die beiden Zeilen zeigen denselben Zahlenfall mit und ohne Altabschreibung – die Quelle verwendet dafür bewusst dieselben Beträge wie in Abschnitt 1.2.1.2. Der Unterschied betrifft nur den Überhang von 20.000 €, und er kehrt sich vollständig um. Dass die Pauschale im zweiten Fall entfällt, spricht die Quelle nicht aus; es folgt aber zwingend daraus, dass § 8b Abs. 3 Satz 1 KStG an den nach Absatz 2 **steuerfreien** Gewinn anknüpft, und ist insoweit eigene Herleitung. Die Belastung steigt damit um 20.000 € steuerpflichtigen Ertrag und sinkt zugleich um 1.000 € nicht abziehbare Betriebsausgaben." },
      { text: "Anmerkung zur Reichweite (eigene Ergänzung): Die Vorschrift wirkt nur bis zur Höhe der historischen Abschreibung und nur, soweit diese noch nicht wertaufgeholt worden ist – beides steht im Beispiel ausdrücklich. Hier betrug die Abschreibung 100.000 €, der Überhang nur 20.000 €; das Volumen ist also bei weitem nicht ausgeschöpft. Wäre der Überhang höher als 100.000 €, bliebe der darüber liegende Teil nach § 8b Abs. 2 Satz 1 KStG steuerfrei – mit der Folge, dass dann doch wieder eine Pauschale anfiele, allerdings nur auf diesen freigestellten Teil." },
      { text: "Anmerkung zur Parallele bei natürlichen Personen (eigene Ergänzung): Die Quelle nennt für sie zwei Vorschriften nebeneinander, ohne sie zu unterscheiden. § 3 Nr. 40 Buchstabe a Satz 2 EStG betrifft den Anteil im **Betriebsvermögen** und macht den Gewinn insoweit voll steuerpflichtig, als eine frühere Teilwertabschreibung steuerwirksam war; § 3 Nr. 40 Satz 3 EStG erweitert das auf sonstige Abzüge. Für Anteile im **Privatvermögen** stellt sich die Frage nicht, weil dort schon keine Teilwertabschreibung möglich ist – der einleitende Satz des Abschnitts beschränkt die ganze Einschränkung deshalb ausdrücklich auf „die Fälle des Betriebsvermögens“." },
    ],
  },
];

export default kstTeil3;
