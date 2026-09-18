/* KSt Teil II – Beteiligungserträge i. S. des § 8b KStG (K2), Hamacher, Stand 05/2026.

   Wortlautgetreue Übernahme des Lehrgangsskripts „Körperschaftsteuer, Teil II:
   Beteiligungserträge § 8b KStG (2026)“ aus den Lehrgangsunterlagen. Das Skript
   hat sechs Kapitel: 1 Bedeutung und Inhalt, 2 Steuerfreiheit von
   Gewinnausschüttungen (§ 8b Abs. 1 KStG), 3 Steuerfreiheit von
   Veräußerungsgewinnen (§ 8b Abs. 2 KStG), 4 Abzugsverbot von Gewinnminderungen
   (§ 8b Abs. 3 KStG), 5 mittelbare Beteiligung über eine Personengesellschaft
   und 6 weitere Tatbestände. Gegliedert wird hier nach den Abschnitten der
   Quelle; jeder Abschnitt steht als eigener Eintrag.

   STAND DER ÜBERNAHME: Das Kapitel 1 (Bedeutung und persönlicher
   Anwendungsbereich) ist vollständig. Aus Kapitel 2 sind der Begriff der
   Gewinnausschüttung (2.1.1) und das Korrespondenzprinzip (2.1.2) übernommen.
   Es folgen die Mindestbeteiligungsquote (2.1.3), die Kapitalertragsteuer
   (2.1.4), die Betriebsausgabenpauschalierung (2.2) und die
   gewerbesteuerliche Behandlung (2.3) sowie die Kapitel 3 bis 6; der Campus
   weist den Stand aus.

   HINWEIS ZUR QUELLE: Wie bei Teil I ist der Text unmittelbar aus der PDF-Datei
   extrahiert (pypdf, 70 Seiten), weil die Textausgabe des Drive-Readers bei
   umfangreichen PDF-Dateien ohne Fehlermeldung abbrechen kann.

   Die Fußnoten der Quelle sind nicht als eigene Blöcke übernommen; die
   Fundstellen, auf die sie verweisen, stehen im Feld `normen` des jeweiligen
   Abschnitts. Die im PDF durch den Blocksatz entstandenen Trennstriche
   ("Körperschaft- steuer") sind zusammengeführt.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen. */

const VERFASSER = "Hamacher";
const RECHTSSTAND = "Stand 05/2026";

export const kstTeil2Quelle = {
  reihe: "Körperschaftsteuer · Teil II: Beteiligungserträge § 8b KStG (2026) · Hamacher",
  stand: "Stand 05/2026",
  verfasser: "Hamacher",
  didaktik: [
    "§ 8b KStG ist die Vorschrift, die das Körperschaftsteuerrecht zum System macht: Sie sorgt dafür, dass ein einmal versteuerter Gewinn auf dem Weg durch eine Beteiligungskette nicht mehrfach besteuert wird. Das Skript stellt diesen Zweck an den Anfang und leitet daraus alles Weitere ab – die Steuerfreiheit von Ausschüttungen und Veräußerungsgewinnen ebenso wie ihre notwendige Kehrseite, das Abzugsverbot für Gewinnminderungen.",
    "Der Aufbau folgt dem Gesetz: erst der persönliche Anwendungsbereich (wer überhaupt in den Genuss kommt), dann Absatz 1 (Ausschüttungen), Absatz 2 (Veräußerungsgewinne), Absatz 3 (Gewinnminderungen), die Besonderheiten der Personengesellschaft und schließlich die Sondertatbestände.",
    "**Der wichtigste Merksatz des ersten Kapitels** lautet: § 8b KStG greift nur, wo überhaupt eine inländische Einkommensermittlung stattfindet. Wo die Kapitalertragsteuer nach § 32 Abs. 1 Nr. 2 KStG abgeltende Wirkung hat, gibt es kein Einkommen zu korrigieren – und damit auch keine Steuerfreiheit. Diese Weichenstellung entscheidet über den ganzen Fall und wird in der Klausur oft übersprungen.",
    "Sämtliche Auswirkungen des § 8b KStG spielen sich **außerbilanziell** ab, auf der zweiten Stufe der Einkommensermittlung (R 7.1 Zeile 20 KStR). Die Steuerbilanz bleibt unberührt.",
  ],
};

export const kstTeil2 = [
  {
    id: "kst-t2-01",
    kapitel: "1",
    abschnittNr: "1.1 und 1.2.1",
    title: "1. Bedeutung und Inhalt des § 8b KStG – Hintergrund und inländische Steuerpflicht",
    thema: "Warum es die Vorschrift gibt: Sie verhindert die Doppelbesteuerung ausgeschütteter Gewinne und stellt eine verursachungsgerechte Einmalbesteuerung her. Anwendbar ist sie bei jeder Körperschaft, bei der eine inländische Einkommensermittlung durchzuführen ist – auch bei beschränkt Steuerpflichtigen mit inländischer Betriebsstätte",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil II (Hamacher), Abschnitte 1.1 und 1.2.1 · Stand 05/2026",
    verfasser: VERFASSER,
    normen: [
      "§ 8b KStG", "§ 8b Abs. 1 Satz 1 KStG", "§ 8b Abs. 2 KStG", "§ 8b Abs. 5 KStG",
      "§ 1 Abs. 1 KStG", "§ 1a KStG", "§ 2 Nr. 1 KStG",
      "§ 31 Abs. 1 KStG", "§ 32 Abs. 1 Nr. 2 KStG",
      "§ 8 Abs. 1 Satz 1 KStG",
      "§ 49 Abs. 1 Nr. 2 Buchstabe a EStG",
      "R 7.1 Zeile 20 KStR",
      "Art. 5 Abs. 1 DBA-NL",
      "BMF vom 28.04.2003, BStBl. I 2003, 292, Tz. 4 und 13",
    ],
    themen: ["Doppelbesteuerung", "Einmalbesteuerung", "Außerbilanzielle Korrektur", "Persönlicher Anwendungsbereich", "Betriebsstätte", "Abgeltungswirkung"],
    bloecke: [
      { typ: "titel", text: "1.1 Hintergrund des § 8b KStG" },
      { text: "§ 8b KStG vermeidet bei einer Körperschaft eine Doppelbesteuerung ausgeschütteter Gewinne. Diese hätte ansonsten gedroht, wenn einerseits die ausschüttende Gesellschaft ihre (ausgeschütteten) Gewinne sowie andererseits auch die Anteilseigner-Kapitalgesellschaft die Gewinnausschüttung voll besteuern müssten. Gleiches gilt für Anteilsveräußerungsgewinne, weil dies faktisch zu einer Vollausschüttung der in den Anteilen enthaltenen stillen und offenen Reserven führt. Die Steuerfreistellung i. S. des § 8b KStG führt daher zu einer sachgerechten Einmalbesteuerung, wodurch die Steuerlast verursachungsgerecht nur auf Ebene der Kapitalgesellschaft anfällt, welche die ausgeschütteten Gewinne erzielt bzw. die in den Anteilen enthaltenen stillen Reserven erwirtschaftet hat. Andererseits können mit diesen Anteilen zusammenhängende Gewinnminderungen, wie z. B. Teilwertabschreibungen oder Veräußerungsverluste, das Einkommen der Anteilseigner-Kapitalgesellschaft nicht mindern. Zudem besteht ein Abzugsverbot von Gewinnminderungen aus Gesellschafterdarlehen." },
      { text: "Sämtliche Auswirkungen des § 8b KStG ergeben sich ausschließlich im Rahmen der außerbilanziellen Einkommensermittlung (R 7.1 Zeile 20 KStR)." },
      { text: "Anmerkung zur Systematik (eigene Ergänzung): Der erste Absatz enthält den Gedanken, aus dem sich das ganze Skript erklärt – und zugleich die Antwort auf die häufigste Verständnisfrage zu § 8b KStG: Warum das Abzugsverbot für Gewinnminderungen? Weil es die notwendige Kehrseite der Steuerfreiheit ist. Wer die Gewinne aus einer Beteiligung nicht versteuert, darf auch die Verluste aus ihr nicht abziehen. Die Vorschrift ist in beide Richtungen konsequent; sie ist keine Vergünstigung, sondern eine Zuordnungsregel." },
      { typ: "titel", text: "1.2.1 Inländische Steuerpflicht" },
      { text: "§ 8b KStG ist bei sämtlichen Körperschaften anwendbar, die im Inland steuerpflichtig sind und bei denen eine Einkommensermittlung durchzuführen ist. Dies wären neben" },
      { text: "– unbeschränkt steuerpflichtigen Körperschaften i. S. des § 1 Abs. 1 KStG (inklusive einer optierenden Gesellschaft i. S. des § 1a KStG) auch" },
      { text: "– beschränkt Steuerpflichtige i. S. des § 2 Nr. 1 KStG mit ihren inländischen Betriebsstätteneinkünften i. S. des § 49 Abs. 1 Nr. 2 Buchstabe a EStG." },
      { text: "Für diese Einkünfte gilt die Abgeltungswirkung nach § 32 Abs. 1 Nr. 2 KStG nicht, so dass diese im Rahmen einer inländischen Einkommensermittlung zu erfassen sind. Die im Zusammenhang mit einer Gewinnausschüttung einbehaltene Kapitalertragsteuer (inkl. Solz) ist entsprechend anzurechnen (siehe § 31 Abs. 1 KStG). Gleiches gilt in den Fällen einer Anteilsveräußerung hinsichtlich der Anwendung des § 8b Abs. 2 KStG. Dies gilt auch in den Fällen, in denen mit dem Sitzstaat der ausländischen Gesellschaft ein Doppelbesteuerungsabkommen abgeschlossen wurde. Denn für die Betriebsstätteneinkünfte steht der Bundesrepublik Deutschland das Besteuerungsrecht zu." },
      { text: "Beispiel: Die niederländische Bouw B.V. (Sitz und Geschäftsleitung in den NL) unterhält in Aachen eine Betriebsstätte. Zur Betriebsstätte gehört auch eine Beteiligung an einer inländischen A-GmbH, aus welcher sie in 2026 Gewinnausschüttungen bezieht." },
      { text: "Lösung: Die Bouw B.V. unterliegt der beschränkten Steuerpflicht (§ 2 Nr. 1 KStG). Für deren inländischen (Betriebsstätten-)Einkünfte i. S. des § 8 Abs. 1 Satz 1 KStG i. V. mit § 49 Abs. 1 Nr. 2 Buchstabe a EStG muss mangels Abgeltungswirkung i. S. des § 32 Abs. 1 Nr. 2 KStG auch eine inländische Veranlagung durchgeführt werden. Die im Rahmen dieser Veranlagung anzusetzenden Beteiligungserträge sind nach § 8b Abs. 1 Satz 1 KStG steuerfrei, führen gleichzeitig aber auch zur Anwendung der Betriebsausgabenpauschalierung i. S. des § 8b Abs. 5 KStG. Für dieses Einkommen besitzt Deutschland auch gemäß Art. 5 Abs. 1 DBA-NL das Besteuerungsrecht." },
      { text: "Merke: Die Steuerfreiheit des § 8b KStG kommt bei sämtlichen Körperschaften zur Anwendung, bei denen eine (inländische) Einkommensermittlung durchgeführt werden muss. Dies gilt sowohl für unbeschränkt als auch beschränkt steuerpflichtige Körperschaften." },
    ],
  },
  {
    id: "kst-t2-02",
    kapitel: "2",
    abschnittNr: "1.2.2",
    title: "1.2.2 Beschränkt Steuerpflichtige ohne inländische Betriebsstätte",
    thema: "Ohne Betriebsstätte gibt es keine Einkommensermittlung – und ohne Einkommensermittlung keinen § 8b KStG. Bei Ausschüttungen wirkt die Kapitalertragsteuer abgeltend, gemildert durch die Erstattung nach § 44a Abs. 9 EStG; bei Veräußerungsgewinnen bleibt es dagegen bei der Veranlagung, dann aber ohne die Betriebsausgabenpauschalierung",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil II (Hamacher), Abschnitt 1.2.2 · Stand 05/2026",
    verfasser: VERFASSER,
    normen: [
      "§ 2 Nr. 1 KStG", "§ 8 Abs. 1 Satz 1 KStG",
      "§ 8b Abs. 1 KStG", "§ 8b Abs. 2, Abs. 2 Satz 1 KStG",
      "§ 8b Abs. 3 Satz 1 KStG", "§ 8b Abs. 3 Satz 3 KStG",
      "§ 32 Abs. 1 Nr. 2 KStG", "§ 32 Abs. 5 KStG",
      "§ 20 Abs. 1 Nr. 1 EStG", "§ 43 Abs. 1 Nr. 1 EStG", "§ 43b EStG",
      "§ 44a Abs. 9 EStG",
      "§ 49 Abs. 1 Nr. 2 Buchstabe e EStG", "§ 49 Abs. 1 Nr. 5 Buchstabe a EStG",
      "§ 17 Abs. 1 Satz 1 EStG", "§ 17 Abs. 2 EStG",
      "Art. 10 Abs. 2 OECD-MA", "Art. 13 Abs. 4 und Abs. 5 OECD-MA",
      "BFH vom 31.05.2017, BStBl. II 2018, 144",
    ],
    themen: ["Beschränkte Steuerpflicht", "Abgeltungswirkung", "Quellensteuer", "Erstattung", "Übermaßbesteuerung", "Betriebsausgabenpauschalierung"],
    bloecke: [
      { typ: "titel", text: "a) Gewinnausschüttungen" },
      { text: "Bei beschränkt Steuerpflichtigen i. S. des § 2 Nr. 1 KStG führen die Beteiligungserträge in den Fällen, in denen diese nicht einer inländischen Betriebsstätte zuzurechnen sind, zu inländischen Einkünften i. S. des § 20 Abs. 1 Nr. 1 EStG i. V. mit § 49 Abs. 1 Nr. 5 Buchstabe a EStG. Dabei kommt es aufgrund des Kapitalertragsteuerabzugs (= inländische Quellensteuer) gemäß § 32 Abs. 1 Nr. 2 KStG bereits zu einer Abgeltungswirkung. Mangels einer (inländischen) Einkommensermittlung kommt § 8b KStG somit nicht zur Anwendung. Die ausländische Körperschaft kann in diesen Fällen aber beim Bundeszentralamt für Steuern gemäß § 44a Abs. 9 EStG eine teilweise Erstattung der Kapitalertragsteuer (= 2/5 der 25%igen Kapitalertragsteuer) beantragen, damit die Steuerbelastung der Gewinnausschüttung insgesamt bei 15 % liegt." },
      { text: "Nach § 43b EStG kann in Fällen einer Gewinnausschüttung innerhalb der EU/EWR auf Antrag die Kapitalertragsteuer vollständig erstattet werden (Mindestbeteiligungsquote von 10 %). In bestimmten Sonderfällen ist dies (nur in EU/ERW-Fällen) auch nach § 32 Abs. 5 KStG möglich. Daher kommt es regelmäßig nur in Drittstaatenfällen zur Entstehung einer Quellensteuer." },
      { typ: "titel", text: "b) Veräußerungsgewinne und -verluste" },
      { text: "Handelt es sich bei dem Beteiligungsertrag um einen Veräußerungsgewinn bzw. -verlust, resultieren daraus inländische Einkünfte i. S. des § 17 Abs. 1 Satz 1 EStG i. V. mit § 49 Abs. 1 Nr. 2 Buchstabe e EStG. Dieser ist im Rahmen einer inländischen Einkommensermittlung zu erfassen, wenn dafür ein deutsches Besteuerungsrecht besteht (z. B. in Nicht-DBA-Fällen). Der Veräußerungsgewinn ist dann nach § 8b Abs. 2 KStG steuerfrei bzw. ein Veräußerungsverlust kann nach § 8b Abs. 3 Satz 3 KStG nicht abgezogen werden. Diesbezüglich hat der BFH mit Urteil vom 31.05.2017 entschieden, dass die im Falle eines Veräußerungsgewinnes durchzuführende Betriebsausgabenpauschalierung des § 8b Abs. 3 Satz 1 KStG dann aber mangels in Deutschland angefallener Betriebsausgaben nicht zur Anwendung kommen kann. Diese Einkünfte sind dann aufgrund der ausschließlichen Anwendung des § 8b Abs. 2 KStG in voller Höhe steuerfrei, um eine Übermaßbesteuerung zu verhindern. Etwas Anderes gilt nur dann, wenn die Beteiligung einer deutschen Betriebsstätte zuzuordnen wäre (siehe unter 1.2.1). Besteht mit dem Sitzstaat der Anteilsveräußerin ein Doppelbesteuerungsabkommen, steht das Besteuerungsrecht für diese inländischen Einkünfte nach Art. 13 Abs. 5 OECD-MA nur dem Sitzstaat des Anteilseigners zu, so dass keine Einkommensermittlung durchzuführen ist." },
      { text: "Fußnote der Quelle zu dieser Zuweisung: Ausnahme sind Grundbesitz-Gesellschaften i. S. des Art. 13 Abs. 4 OECD-MA." },
      { text: "Beispiel: Die in Brasilien (kein DBA-Staat) ansässige „Dante-Ltda“ bezieht in 2026 aus einer 9%igen Beteiligung an der P-GmbH (Sitz: Darmstadt) eine Gewinnausschüttung von 100.000 €. Die Beteiligung ist keiner inländischen Betriebsstätte zuzurechnen. Zudem veräußert sie in 2026 eine 12%ige Beteiligung an der X-GmbH (Sitz: Kassel) und erzielt daraus einen Veräußerungsgewinn von 200.000 €." },
      { text: "Lösung: Weil die Dante-Ltda (nach Typenvergleich: GmbH) weder ihren Sitz noch ihre Geschäftsleitung im Inland hat, unterliegt sie nur mit ihren inländischen Einkünften der beschränkten Steuerpflicht (§ 2 Nr. 1 KStG). Diese inländischen Einkünfte entstehen ihr in Form der Gewinnausschüttung (= Bezüge i. S. des § 20 Abs. 1 Nr. 1 EStG; § 8 Abs. 1 Satz 1 KStG i. V. mit § 49 Abs. 1 Nr. 5 Buchstabe a EStG). Mangels entgegenstehendem DBA besteht dafür ein deutsches Besteuerungsrecht, wobei aufgrund der Abgeltungswirkung i. S. des § 32 Abs. 1 Nr. 2 KStG keine Einkommensermittlung durchzuführen ist. Nach § 43 Abs. 1 Nr. 1 EStG unterliegen die Bezüge dem 25%igen Kapitalertragsteuerabzug (= 25.000 €, zzgl. Solidaritätszuschlag). Mangels Einkommensermittlung kommt daher auch § 8b Abs. 1 KStG nicht zur Anwendung. Hinsichtlich der einbehaltenen Kapitalertragsteuer kann die Gesellschaft aber gemäß § 44a Abs. 9 EStG eine Erstattung von 2/5 der einbehaltenen Kapitalertragsteuer beantragen (= 10.000 €), so dass die darauf lastende Gesamtbelastung mit 15.000 € letztlich dem Körperschaftsteuersatz von 15 % entspricht." },
      { text: "Hinweis: Ein Anwendungsfall des § 32 Abs. 5 KStG, welcher eine komplette Erstattung der einbehaltenen Kapitalertragsteuer vorsehen würde, ist nicht gegeben. Der Gläubiger muss für Zwecke dieser Vorschrift in der EU/EWR ansässig sein." },
      { text: "Aus der Anteilsveräußerung resultieren inländische Einkünfte i. S. des § 8 Abs. 1 Satz 1 KStG i. V. mit § 49 Abs. 1 Nr. 2 Buchstabe e EStG, weil es sich dabei mangels Betriebsvermögenszugehörigkeit um einen Einkünftetatbestand i. S. des § 17 EStG handelt. Der Veräußerungsgewinn ist somit im Rahmen der beschränkten Steuerpflicht zu erfassen und ergibt sich aus der Gewinnermittlung i. S. des § 8 Abs. 1 Satz 1 KStG i. V. mit § 17 Abs. 2 EStG. Der Gewinn von 200.000 € ist nach § 8b Abs. 2 Satz 1 KStG steuerfrei. Die Anwendung der Betriebsausgabenpauschalierung ist aber ausgeschlossen, weil nach der Rechtsprechung des BFH keine inländischen Betriebsausgaben angefallen sein können. Die Einkünfte betragen danach 0 €." },
      { text: "Rechenprobe (eigene Ergänzung): Die Kapitalertragsteuer beträgt 25 % von 100.000 € = 25.000 €; die Erstattung von 2/5 sind 10.000 €; es verbleiben 15.000 €, also genau 15 % der Ausschüttung und damit der Körperschaftsteuersatz. Die Mechanik des § 44a Abs. 9 EStG besteht also darin, den Quellensteuersatz rechnerisch auf den Körperschaftsteuersatz herunterzuschleusen – der beschränkt Steuerpflichtige ohne Betriebsstätte wird im Ergebnis so belastet, als hätte er veranlagt werden können." },
      { typ: "tabelle", spalten: ["Beschränkt steuerpflichtige Körperschaft", "Gewinnausschüttung", "Veräußerungsgewinn"], zeilen: [
        ["mit inländischer Betriebsstätte (1.2.1)", "Veranlagung; § 8b Abs. 1 KStG steuerfrei, aber § 8b Abs. 5 KStG (5 % nicht abziehbar)", "Veranlagung; § 8b Abs. 2 KStG steuerfrei, § 8b Abs. 3 Satz 1 KStG anwendbar"],
        ["ohne inländische Betriebsstätte, Drittstaat (1.2.2)", "keine Veranlagung – Abgeltung nach § 32 Abs. 1 Nr. 2 KStG; § 8b KStG nicht anwendbar; Erstattung von 2/5 nach § 44a Abs. 9 EStG", "Veranlagung; § 8b Abs. 2 KStG steuerfrei, Pauschalierung nach BFH ausgeschlossen – Einkünfte 0 €"],
        ["ohne inländische Betriebsstätte, EU/EWR", "wie vor, jedoch vollständige Erstattung nach § 43b EStG bzw. § 32 Abs. 5 KStG", "wie vor"],
        ["ohne inländische Betriebsstätte, DBA-Staat", "Quellensteuer nach Art. 10 Abs. 2 OECD-MA reduziert", "kein deutsches Besteuerungsrecht nach Art. 13 Abs. 5 OECD-MA – keine Einkommensermittlung"],
      ] },
      { text: "Anmerkung zur Tabelle (eigene Ergänzung): Sie ordnet die Fälle, die die Quelle in den Abschnitten 1.2.1 und 1.2.2 nacheinander behandelt, nach den beiden Ertragsarten. Bemerkenswert ist die Asymmetrie in der zweiten Zeile: Dieselbe Gesellschaft wird bei der Ausschüttung gar nicht veranlagt, beim Veräußerungsgewinn dagegen schon – und zahlt dort im Ergebnis nichts, weil § 8b Abs. 2 KStG ohne die Pauschalierung des Absatzes 3 Satz 1 zu einer vollständigen Freistellung führt. Der BFH begründet das mit dem Verbot der Übermaßbesteuerung: Eine Pauschale für nicht abziehbare Betriebsausgaben setzt voraus, dass es überhaupt inländische Betriebsausgaben geben kann." },
    ],
  },
  {
    id: "kst-t2-03",
    kapitel: "3",
    abschnittNr: "2.1.1.1",
    title: "2. Steuerfreiheit von Gewinnausschüttungen (§ 8b Abs. 1 KStG) – Bezüge i. S. des § 20 EStG",
    thema: "Welche Bezüge die Steuerfreiheit erfasst: ordentliche und verdeckte Gewinnausschüttungen, Genussrechte mit Eigenkapitalcharakter, Liquidations- und Kapitalherabsetzungsraten jenseits des Nennkapitals sowie Ausschüttungen nach einer Hinzurechnungsbesteuerung – vorbehaltlich der Streubesitzregelung",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil II (Hamacher), Abschnitt 2.1.1.1 · Stand 05/2026",
    verfasser: VERFASSER,
    normen: [
      "§ 8b Abs. 1 Satz 1 KStG", "§ 8b Abs. 1 Satz 2 KStG", "§ 8b Abs. 4 KStG",
      "§ 8 Abs. 3 Satz 2 KStG", "§ 1a KStG",
      "§ 20 Abs. 1 Nr. 1 Satz 1 EStG", "§ 20 Abs. 1 Nr. 1 Satz 2 EStG",
      "§ 20 Abs. 1 Nr. 2 EStG", "§ 20 Abs. 1 Nr. 9 EStG", "§ 20 Abs. 1 Nr. 10a EStG",
      "§ 3 Nr. 41a EStG", "§ 10 AStG",
      "BFH vom 26.04.2017, BStBl. II 2018, 492",
    ],
    themen: ["Gewinnausschüttung", "Verdeckte Gewinnausschüttung", "Genussrecht", "Liquidationsrate", "Hinzurechnungsbesteuerung", "Streubesitz"],
    bloecke: [
      { text: "§ 8b Abs. 1 Satz 1 KStG führt bei einer Körperschaft zur Steuerfreistellung sämtlicher Beteiligungserträge i. S. des § 20 Abs. 1 Nr. 1, Nr. 2, Nr. 9 und Nr. 10a EStG. Dazu gehören insbesondere" },
      { text: "– ordnungsgemäße (ordentliche) Gewinnausschüttung, welche zu Bezügen i. S. des § 20 Abs. 1 Nr. 1 Satz 1 EStG führt (nach der Fußnote der Quelle auch von einer optierenden Gesellschaft i. S. des § 1a KStG);" },
      { text: "– andere Gewinnausschüttungen, z. B. bei einer verdeckten Gewinnausschüttung (Bezug i. S. des § 20 Abs. 1 Nr. 1 Satz 2 EStG) bzw. verunglückten offenen Gewinnausschüttung (z. B. bei nichtigem Ausschüttungsbeschluss). Diesbezüglich sind aber die Grundsätze des materiellen Korrespondenzprinzips i. S. des § 8b Abs. 1 Satz 2 KStG zu beachten (siehe hierzu unter 2.2.1.2);" },
      { text: "– Bezüge aufgrund eines Genussrechtes i. S. des § 8 Abs. 3 Satz 2 KStG, welches Eigenkapitalcharakter besitzt;" },
      { text: "– Rückzahlungen im Rahmen von Liquidationsverfahren (Auskehrung von Liquidationsraten) bzw. Rückzahlungen in Fällen der Kapitalherabsetzung, sofern es sich nicht um die Rückzahlung von Nennkapital handelt (Bezug i. S. des § 20 Abs. 1 Nr. 2 EStG);" },
      { text: "– Gewinnausschüttungen ausländischer Kapitalgesellschaften, bei denen in der Vergangenheit eine Hinzurechnungsbesteuerung i. S. des § 10 AStG vorgenommen wurde. Die vollständige Steuerfreiheit i. S. des § 3 Nr. 41a EStG ist auf Kapitalgesellschaften nicht anwendbar." },
      { text: "Voraussetzung für die Steuerfreistellung ist, dass beim Empfänger tatbestandlich ein Bezug i. S. des § 20 Abs. 1 Nr. 1 oder Nr. 2 EStG vorliegt. Die Steuerfreiheit des § 8b Abs. 1 Satz 1 KStG ist aber ausgeschlossen, wenn die Streubesitzregelung des § 8b Abs. 4 KStG greift. Die Steuerfreiheit setzt eine Mindestbeteiligung von 10 % an der ausschüttenden Gesellschaft voraus (siehe hierzu unter 2.1.3)." },
      { text: "Merke: Sämtliche Bezüge i. S. des § 20 Abs. 1 Nr. 1 und Nr. 2 EStG sind bei einer Kapitalgesellschaft steuerfrei. Dabei sind aber die Einschränkungen durch die Streubesitzregelung des § 8b Abs. 4 KStG zu beachten." },
      { text: "Anmerkung zum Verweis (so in der Quelle): Der Text verweist für das materielle Korrespondenzprinzip auf „2.2.1.2“; nach dem Inhaltsverzeichnis der Quelle steht dieser Stoff unter **2.1.2** (2.1.2.1 Einschränkung der Steuerbefreiung, 2.1.2.2 formelle Korrespondenz). Der Wortlaut ist unverändert übernommen." },
      { text: "Anmerkung zur Reichweite der Aufzählung (eigene Ergänzung): Zwei Punkte der Liste werden in der Klausur leicht übersehen. Erstens erfasst die Steuerfreiheit auch die **verdeckte** Gewinnausschüttung – der Empfänger stellt sie also ebenso frei wie eine offene, allerdings nur unter dem Vorbehalt des materiellen Korrespondenzprinzips, das genau dann eingreift, wenn die ausschüttende Gesellschaft ihr Einkommen nicht entsprechend erhöht hat. Zweitens sind Liquidations- und Kapitalherabsetzungsraten nur insoweit erfasst, als sie **nicht** Rückzahlung von Nennkapital sind; die Rückzahlung des Nennkapitals selbst ist schon kein Bezug i. S. des § 20 Abs. 1 Nr. 2 EStG und braucht daher keine Freistellung." },
    ],
  },
  {
    id: "kst-t2-04",
    kapitel: "4",
    abschnittNr: "2.1.1.2 und 2.1.1.3",
    title: "2.1.1.2 Ansässigkeit der ausschüttenden Gesellschaft – 2.1.1.3 Keine Tatbestände des § 8b Abs. 1 KStG",
    thema: "Woher die Ausschüttung kommt, ist gleichgültig – auch ausländische Körperschaften sind erfasst, und ein DBA-Schachtelprivileg verdrängt die nationale Norm nicht. Nicht erfasst sind dagegen Auskehrungen aus dem steuerlichen Einlagekonto und die Gewinnabführung einer Organgesellschaft",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil II (Hamacher), Abschnitte 2.1.1.2 und 2.1.1.3 · Stand 05/2026",
    verfasser: VERFASSER,
    normen: [
      "§ 8b Abs. 1 KStG", "§ 8b Abs. 5 KStG", "§ 27 KStG",
      "§ 14 Abs. 3 KStG", "§ 15 Nr. 2 KStG",
      "§ 20 Abs. 1 Nr. 1 Satz 3 EStG", "§ 301 AktG",
      "R 14.5 Abs. 4 Satz 4 KStR",
      "BMF vom 28.04.2003, Tz. 6",
      "BFH vom 26.04.2017, Tz. 11", "BFH vom 23.06.2010, BStBl. II 2011, 129",
      "BFH-Beschluss vom 22.09.2016, I R 29/15",
      "BFH vom 28.10.2009, BStBl. II 2011, 898",
    ],
    themen: ["Ausländische Ausschüttungen", "DBA-Schachtelprivileg", "Steuerliches Einlagekonto", "Organschaft", "Gewinnabführung", "Vororganschaftliche Rücklagen"],
    bloecke: [
      { typ: "titel", text: "2.1.1.2 Ansässigkeit der ausschüttenden Gesellschaft" },
      { text: "Für die Anwendung des § 8b Abs. 1 KStG ist zudem die Ansässigkeit der ausschüttenden Gesellschaft unmaßgeblich, d. h. die Steuerbefreiung erstreckt sich auch auf Ausschüttungen ausländischer Körperschaften. Dabei ist ebenfalls unerheblich, ob mit dem ausländischen Sitzstaat der ausschüttenden Gesellschaft ein DBA abgeschlossen wurde, welches ein sog. DBA-Schachtelprivileg enthält und sich daraus bereits die Steuerfreiheit ergeben würde. Denn das DBA-Schachtelprivileg verdrängt grundsätzlich nicht die Steuerfreiheit nach § 8b Abs. 1 KStG. Zwar führen beide Regelungen zu einer Steuerfreistellung des Beteiligungsertrages, aber aufgrund des systematischen Vorrangs der nationalen Steuernormen läuft das abkommensrechtliche Schachtelprivileg zunächst parallel neben dieser nationalen Norm. Das DBA-Schachtelprivileg würde erst dann eine eigenständige Bedeutung erlangen, wenn es abweichend davon zu einer Besteuerung kommen würde. Dadurch ist ebenfalls die Anwendung der Betriebsausgabenpauschalierung i. S. des § 8b Abs. 5 KStG gedeckt, wodurch es gerade nicht zu einer unzulässigen Gewinnbesteuerung kommt." },
      { text: "Anmerkung zur praktischen Bedeutung (eigene Ergänzung): Der Satz vom Parallellauf hat eine unmittelbare Folge, die die Quelle nur andeutet. Weil § 8b Abs. 1 KStG und nicht das Abkommen die Freistellung trägt, greift auch die Fünf-Prozent-Pauschale des § 8b Abs. 5 KStG – eine nach dem Abkommen allein freigestellte Dividende wäre dagegen zu 100 % steuerfrei. Der systematische Vorrang der nationalen Norm kostet den Steuerpflichtigen also 5 % der Dividende; der BFH hält das für zulässig, weil darin keine unzulässige Besteuerung des Gewinns selbst liegt." },
      { typ: "titel", text: "2.1.1.3 Keine Tatbestände des § 8b Abs. 1 KStG" },
      { text: "Nicht unter § 8b Abs. 1 KStG fallen hingegen Gewinnausschüttungen, welche aus dem steuerlichen Einlagekonto (§ 27 KStG) der ausschüttenden Gesellschaft finanziert werden. Dies deshalb, weil § 20 Abs. 1 Nr. 1 Satz 3 EStG diese Auskehrungen nicht als herkömmliche Gewinnausschüttung ansieht. Dabei handelt es sich um einen veräußerungsgleichen Vorgang (siehe unter 3.2.2.4)." },
      { text: "§ 8b Abs. 1 KStG gilt auch nicht für die Gewinnabführung einer Organgesellschaft an den Organträger. Dabei handelt es sich gerade nicht um eine Gewinnausschüttung, sondern nur um eine vertraglich geregelte Verpflichtung zur Abführung des gesamten handelsbilanziellen Gewinnes (§ 301 AktG). Lediglich eigene Beteiligungserträge der Organgesellschaft sind auch auf Ebene des Organträgers steuerlich als solche zu würdigen, d. h. entweder nach den Grundsätzen des § 8b KStG oder des Teileinkünfteverfahrens (siehe § 15 Nr. 2 KStG). In Ausnahmefällen kann auch von der Organgesellschaft eine Gewinnausschüttung vorgenommen werden, z. B. bei der Ausschüttung sog. vororganschaftlicher Gewinnrücklagen oder in Fällen des § 14 Abs. 3 KStG." },
      { text: "Anmerkung zur Abgrenzung (eigene Ergänzung): Beide Ausnahmen haben denselben Grund, den die Quelle jeweils nur kurz nennt: Es fehlt schon am **Bezug** i. S. des § 20 Abs. 1 Nr. 1 EStG, den § 8b Abs. 1 KStG voraussetzt. Bei der Einlagenrückgewähr nimmt § 20 Abs. 1 Nr. 1 Satz 3 EStG die Auskehrung ausdrücklich aus; bei der Organschaft beruht die Abführung nicht auf einem Gewinnverwendungsbeschluss, sondern auf dem Ergebnisabführungsvertrag. Die Prüfung des § 8b Abs. 1 KStG beginnt deshalb immer mit der Frage, ob überhaupt ein Bezug vorliegt – erst danach stellen sich die Fragen nach Streubesitz und Korrespondenz." },
    ],
  },
  {
    id: "kst-t2-05",
    kapitel: "5",
    abschnittNr: "2.1.2.1",
    title: "2.1.2 Materielles Korrespondenzprinzip – 2.1.2.1 Einschränkung der Steuerbefreiung",
    thema: "Die Steuerfreiheit entfällt, soweit die Ausschüttung bei der leistenden Gesellschaft das Einkommen gemindert hat. Praktisch trifft das die verdeckte Gewinnausschüttung, bei der die Hinzurechnung nach § 8 Abs. 3 Satz 2 KStG unterblieben ist – der Einkommensschaden wird dann beim Anteilseigner nachversteuert",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil II (Hamacher), Abschnitt 2.1.2.1 · Stand 05/2026",
    verfasser: VERFASSER,
    normen: [
      "§ 8b Abs. 1 Satz 1 KStG", "§ 8b Abs. 1 Satz 2 KStG", "§ 8b Abs. 1 Satz 5 KStG",
      "§ 8b Abs. 4 KStG", "§ 8 Abs. 3 Satz 2 KStG", "§ 32a Abs. 1 KStG",
      "§ 20 Abs. 1 Nr. 1 Satz 2 EStG",
      "§ 3 Nr. 40 Buchstabe d Satz 2 EStG", "§ 32d Abs. 2 Nr. 4 EStG",
    ],
    themen: ["Materielles Korrespondenzprinzip", "Verdeckte Gewinnausschüttung", "Einkommensschaden", "Soweit-Verknüpfung", "Genussrechte", "Nachversteuerung"],
    bloecke: [
      { text: "§ 8b Abs. 1 Satz 2 KStG schränkt die Steuerfreiheit dann bereits ein, soweit die Gewinnausschüttung bei der leistenden (= ausschüttenden) Gesellschaft zu einer Einkommensminderung geführt hat. Diese Einschränkung ist insbesondere in Fällen einer verdeckten Gewinnausschüttung von Bedeutung, die beim Anteilseigner zu Beteiligungserträgen i. S. des § 20 Abs. 1 Nr. 1 Satz 2 EStG führt. Die Steuerfreiheit der verdeckten Gewinnausschüttung hängt beim Anteilseigner nach dem „weiten“ Gesetzeswortlaut davon ab, dass die verdeckte Gewinnausschüttung bei der „benachteiligten“ Gesellschaft das Einkommen tatsächlich nicht gemindert hat. (Die Quelle setzt dabei nach ihrer Fußnote voraus, dass keine Streubesitzdividende i. S. des § 8b Abs. 4 KStG vorliegt.)" },
      { text: "Ist es dazu gekommen, z. B. weil bei der leistenden Kapitalgesellschaft die Einkommenshinzurechnung i. S. des § 8 Abs. 3 Satz 2 KStG unterblieben ist, wird beim Anteilseigner die Steuerfreiheit des Beteiligungsertrags ausgeschlossen (= materielle Korrespondenz). Dies führt beim Anteilseigner zu einer Nachversteuerung des bei der leistenden Körperschaft eingetretenen Einkommensschadens. Für die Anwendung dieser Regelung ist es unerheblich, worauf die unberücksichtigte Hinzurechnung bei der leistenden Gesellschaft beruht. Ob dies bei dieser mutwillig geschehen ist oder die Gesellschaft im Gegensatz zum Anteilseigner noch keine KSt-Steuererklärung abgegeben hat und daher bei dieser noch keine Einkommensauswirkungen eingetreten sein können, spielt hierfür keine Rolle. Ebenso ist unerheblich, ob die leistende Gesellschaft im In- oder Ausland ansässig ist. Bei natürlichen Personen sieht § 3 Nr. 40 Buchstabe d Satz 2 EStG bzw. § 32d Abs. 2 Nr. 4 EStG ebenfalls ein materielles Korrespondenzprinzip vor. Daneben sind auch die Auswirkungen der formellen Korrespondenz i. S. des § 32a Abs. 1 KStG zu beachten (siehe hierzu unter 2.1.2.3)." },
      { text: "Anmerkung zum Verweis (so in der Quelle): Der Text verweist auf „2.1.2.3“; einen solchen Abschnitt gibt es nicht – die formelle Korrespondenz steht unter **2.1.2.2**. Es ist der zweite Verweisfehler dieser Art im Kapitel 2." },
      { text: "Der Wortlaut des § 8b Abs. 1 Satz 2 KStG ist aber nicht nur ausschließlich auf Beteiligungserträge aus einer verdeckten Gewinnausschüttung anwendbar. Darunter können auch Vergütungen für Genussrechte subsumiert werden, die nach deutschem Recht beim Anteilseigner zu Beteiligungserträgen i. S. des § 20 Abs. 1 Nr. 1 EStG führen würden, im Sitzstaat der leistenden Körperschaft aber als Betriebsausgaben abgezogen wurden." },
      { text: "Zu beachten ist diesbezüglich auch die „soweit“-Verknüpfung, d. h. die Versagung der Steuerfreiheit ist eindeutig nur auf den Betrag des tatsächlichen Einkommensschadens begrenzt. Dies hat Bedeutung in den Fällen, in denen die verdeckte Gewinnausschüttung bei der „benachteiligten“ Gesellschaft nach § 8 Abs. 3 Satz 2 KStG rechtsfehlerhaft nur teilweise hinzugerechnet wurde oder der Ertrag bei der leistenden Gesellschaft steuerfrei wäre (siehe hierzu unter 3.2.2.2)." },
      { text: "Merke: Insbesondere bei Bezügen aus einer verdeckten Gewinnausschüttung schränkt die materielle Korrespondenzprinzip die Steuerfreiheit des § 8b Abs. 1 KStG ein. Dies setzt voraus, dass die verdeckte Gewinnausschüttung bei der leistenden Körperschaft mangels Hinzurechnung (nach § 8 Abs. 3 Satz 2 KStG) zu einem Einkommensschaden geführt hat. (Der Genusfehler „die materielle Korrespondenzprinzip“ steht so in der Quelle.)" },
      { text: "§ 8b Abs. 1 Satz 2 KStG wird durch eine Sonderregelung für Dreiecksfälle i. S. des § 8b Abs. 1 Satz 5 KStG ergänzt. (Diese Regelung wird nach dem Hinweis der Quelle im Skript KSt Teil IV „Verdeckte Gewinnausschüttung“ dargestellt.)" },
      { text: "Beispiel: Die A-GmbH erhält als Alleingesellschafterin der B-GmbH in 2026 für die Überlassung eines Grundstücks eine Miete von 980.000 €. Angemessen sind lt. Feststellungen des Finanzamtes aber nur 500.000 €, d. h. der Mehrbetrag von 480.000 € beruht ausschließlich auf gesellschaftsrechtlicher Veranlassung. Bei der B-GmbH (= leistende Körperschaft) wurden die Betriebsausgaben von 980.000 € rechtsfehlerhaft berücksichtigt." },
      { text: "Lösung: Die überhöhte Mietzahlung von 480.000 € stellt eine verdeckte Gewinnausschüttung dar. Diese führt bei der A-GmbH zu Bezügen i. S. des § 20 Abs. 1 Nr. 1 Satz 2 EStG, die aber nicht nach § 8b Abs. 1 Satz 1 KStG steuerfrei sind. Zwar steht die Streubesitzregelung des § 8b Abs. 4 KStG aufgrund der erfüllten 10%igen Mindestbeteiligung der Steuerfreiheit des § 8b Abs. 1 Satz 1 KStG nicht entgegen. Dafür müssen aber die Einschränkungen der materiellen Korrespondenzregelung i. S. des § 8b Abs. 1 Satz 2 KStG beachtet werden. Denn die verdeckte Gewinnausschüttung hat das Einkommen der leistenden B-GmbH gemindert, weil das Finanzamt die Anwendung des § 8 Abs. 3 Satz 2 KStG unterlassen hat. Dies führt beim Anteilseigner zu einer Nachversteuerung des bei der B-GmbH eingetretenen Einkommensschadens. Die von der A-GmbH bezogenen Mieteinnahmen sind daher sowohl in Höhe von 500.000 € als auch in Höhe des Beteiligungsertrags (= verdeckte Gewinnausschüttung) in Höhe von 480.000 € voll steuerpflichtig. Eine Einkommenskorrektur ist daher nicht vorzunehmen." },
      { text: "Hinweis: Wäre der Anteilseigner eine natürliche Person, würde die materielle Korrespondenz des § 3 Nr. 40 Buchstabe d Satz 2 EStG die Anwendung des Teileinkünfteverfahrens ausschließen. Für Zwecke der Abgeltungsteuer ist § 32d Abs. 2 Nr. 4 EStG zu beachten." },
      { text: "Rechenprobe und Einordnung (eigene Ergänzung): Von den 980.000 € Miete sind 500.000 € angemessenes Entgelt und 480.000 € verdeckte Gewinnausschüttung. Bemerkenswert ist, dass die A-GmbH im Ergebnis den vollen Betrag von 980.000 € versteuert – die 500.000 € als gewöhnliche Mieteinnahme, die 480.000 € als Beteiligungsertrag, dem die Steuerbefreiung versagt bleibt. Der Fall zeigt damit besonders klar, was die materielle Korrespondenz leistet: Sie verlagert den Einkommensschaden von der Gesellschaft, bei der er entstanden ist, auf den Anteilseigner, bei dem er greifbar ist. Wirtschaftlich zahlt dieselbe Unternehmensgruppe die Steuer, nur an anderer Stelle." },
      { text: "Anmerkung zur Blickrichtung (eigene Ergänzung): Die materielle Korrespondenz begegnet in diesem Skript spiegelverkehrt zu Teil I. Dort ging es um die **verdeckte Einlage**, und § 8 Abs. 3 Satz 4 KStG erhöhte das Einkommen der bevorteilten **Gesellschaft**, weil der Vorgang beim Gesellschafter nicht erfasst war. Hier geht es um die **verdeckte Gewinnausschüttung**, und § 8b Abs. 1 Satz 2 KStG versagt die Steuerfreiheit beim **Gesellschafter**, weil der Vorgang bei der Gesellschaft nicht erfasst war. Dieselbe Technik, umgekehrte Richtung – wer sich das einmal klarmacht, verwechselt die beiden Normen nicht mehr." },
    ],
  },
  {
    id: "kst-t2-06",
    kapitel: "6",
    abschnittNr: "2.1.2.2",
    title: "2.1.2.2 Formelle Korrespondenz",
    thema: "Wird der Bescheid der leistenden Körperschaft später korrigiert, entfällt der Einkommensschaden – und § 32a Abs. 1 KStG erlaubt es, die Steuerbefreiung beim Anteilseigner nachträglich zu gewähren. Die Korrektur muss gerade wegen der verdeckten Gewinnausschüttung erfolgt sein",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil II (Hamacher), Abschnitt 2.1.2.2 · Stand 05/2026",
    verfasser: VERFASSER,
    normen: [
      "§ 32a Abs. 1 KStG", "§ 32a KStG",
      "§ 8b Abs. 1 Satz 1 KStG",
      "§ 3 Nr. 40 Buchstabe d EStG", "§ 32d Abs. 1 EStG", "§ 10d Abs. 4 EStG",
      "BFH vom 10.12.2019, BStBl. II 2020, 679",
      "Erlass des FM Schleswig-Holstein vom 08.06.2023, VI 313 - S 2845a - 003",
      "FG Münster vom 11.10.2019, 13 K 172/17 E",
      "Heinemann in Rödder/Herlinghaus/Neumann, KStG § 32a Rz. 32",
    ],
    themen: ["Formelle Korrespondenz", "Korrekturvorschrift", "Grundlagenbescheid", "Verlustfeststellung", "Eigene Prüfungskompetenz"],
    bloecke: [
      { text: "Führt die materielle Korrespondenz beim Anteilseigner zu einem Ausschluss der Steuerbefreiung, muss aber zukünftig die formelle Korrespondenz des § 32a Abs. 1 KStG beachtet werden. Danach ist der Steuerbescheid des Anteilseigners zu korrigieren und die Steuerbefreiung (§ 8b Abs. 1 Satz 1 KStG bzw. § 3 Nr. 40 Buchstabe d EStG oder § 32d Abs. 1 EStG) zu gewähren, wenn der Körperschaftsteuerbescheid der leistenden Körperschaft durch Erfassung der verdeckten Gewinnausschüttung tatsächlich und unter Anwendung der AO-Korrekturnormen korrigiert worden ist. Weil danach auf Ebene der leistenden Körperschaft kein Einkommensschaden mehr besteht, gibt es für die Anwendung der materiellen Korrespondenz beim Anteilseigner keine Grundlage mehr. Gleiches gilt auch in den Fällen einer nachträglichen „Rücknahme“ und damit Wegfalls der verdeckten Gewinnausschüttung, z. B. aufgrund eines erfolgreichen Klageverfahrens der „benachteiligten“ Gesellschaft." },
      { text: "Zwingende Voraussetzung für die Anwendung des § 32a Abs. 1 KStG ist die Korrektur des Steuerbescheides der leistenden Körperschaft nach AO-Vorschriften bzw. die erstmalige Steuerfestsetzung unter Berücksichtigung der Hinzurechnung der verdeckten Gewinnausschüttung. Dies bedeutet, dass die Korrektur im Hinblick auf die Erfassung der verdeckten Gewinnausschüttung erfolgt sein muss. Ausschließlich andere Korrekturgründe können beim Anteilseigner die Anwendung des § 32a Abs. 1 KStG damit nicht auslösen. Unerheblich ist hingegen, ob sich durch die tatsächliche Erfassung der verdeckten Gewinnausschüttung im Steuerbescheid auch eine Änderung der festgesetzten Steuer ergibt." },
      { text: "Es bleibt aber dabei, dass der Körperschaftsteuerbescheid kein materiell-rechtlicher Grundlagenbescheid für den Steuerbescheid des Anteilseigners darstellt, weil zwischen beiden Veranlagungen lediglich eine formelle Korrespondenz besteht. Daher hat das Finanzamt des Anteilseigners die Möglichkeit, das Vorliegen und die Höhe einer verdeckten Gewinnausschüttung selbst zu überprüfen. Ob daneben auch eine Korrektur des Verlustfeststellungsbescheides i. S. des § 10d Abs. 4 EStG der leistenden Körperschaft bereits ausreicht, um die Rechtsfolge des § 32a KStG auf Ebene des Anteilseigners auszulösen, ist umstritten. Dies muss nach dem eindeutigen Gesetzeswortlaut, welcher lediglich auf den „Steuerbescheid der Körperschaft“ verweist, wohl auch zu verneinen." },
      { typ: "tabelle", spalten: ["Merkmal", "Verdeckte Einlage (Teil I, Abschnitte 3.6.1 und 3.6.2)", "Verdeckte Gewinnausschüttung (hier, Abschnitt 2.1.2)"], zeilen: [
        ["Wo entsteht der Einkommensschaden?", "beim Gesellschafter (Einkünfte nicht erfasst)", "bei der leistenden Gesellschaft (Hinzurechnung unterblieben)"],
        ["Wo wird er ausgeglichen?", "bei der Gesellschaft – Einkommenserhöhung nach § 8 Abs. 3 Satz 4 KStG", "beim Gesellschafter – Versagung der Steuerfreiheit nach § 8b Abs. 1 Satz 2 KStG"],
        ["Verfahrensrechtliche Korrekturnorm", "§ 32a Abs. 2 KStG (Bescheid der Gesellschaft)", "§ 32a Abs. 1 KStG (Bescheid des Gesellschafters)"],
        ["Grundlagenbescheid?", "nein", "nein"],
        ["Soweit-Verknüpfung?", "ja – begrenzt auf das steuerpflichtige Einkommen", "ja – begrenzt auf den tatsächlichen Einkommensschaden"],
      ] },
      { text: "Anmerkung zur Tabelle (eigene Ergänzung): Sie stellt die beiden Korrespondenzmechanismen gegenüber, die in Teil I und Teil II an verschiedenen Stellen behandelt werden und in der Klausur regelmäßig verwechselt werden. Die Technik ist in beiden Fällen dieselbe: Ein Vorgang wird auf einer Ebene nicht erfasst, also wird er auf der anderen nachgeholt, und wenn die erste Ebene später korrigiert wird, darf die zweite verfahrensrechtlich zurückgenommen werden. Nur die Richtung ist umgekehrt – und daran entscheidet sich, ob § 32a Abs. 1 oder Abs. 2 KStG einschlägig ist." },
      { text: "Anmerkung zur eigenen Prüfungskompetenz (eigene Ergänzung): Der Satz, dass der Körperschaftsteuerbescheid **kein Grundlagenbescheid** ist, hat eine praktische Folge, die die Quelle ausspricht und die leicht unterschätzt wird: Das Finanzamt des Anteilseigners darf Vorliegen und Höhe der verdeckten Gewinnausschüttung eigenständig prüfen. Es kann also zu einem anderen Ergebnis kommen als das Finanzamt der Gesellschaft – dieselbe Zahlung kann bei der einen Ebene als verdeckte Gewinnausschüttung behandelt werden und bei der anderen nicht. Die Korrespondenz ist eine verfahrensrechtliche Brücke, keine Bindung." },
    ],
  },
];

export default kstTeil2;
