import {
  persgQuelle, persgBereiche, persgBereichName, persgSeitenplan,
  persgModule, persgFaelle, persgSchemata, persgQuizfragen,
} from "./k3-persg-tag1.js";

/* 2. Unterrichtstag Personengesellschaften – PDF 04.08.2026, 39 Seiten.
   Die Arrays des 1. Tags werden bewusst erweitert, damit der PersG-Campus
   eine gemeinsame Lernstrecke und gemeinsame Querverweise behält. */

persgQuelle.title = "1. + 2. Tag PersG";
persgQuelle.stand = "04.08.2026";
persgQuelle.pages = 53;
persgQuelle.label = "Unterrichtsnotizen · 1. und 2. Unterrichtstag Personengesellschaften";
persgQuelle.tags = [
  { tag: 1, title: "1. Tag PersG", pages: 14, stand: "31.07.2026" },
  { tag: 2, title: "2. Tag PersG", pages: 39, stand: "04.08.2026" },
];

for (const bereich of [
  { id: "Spiegel", label: "Spiegelbildmethode" },
  { id: "Verlust", label: "§ 15a EStG & Verlust" },
  { id: "Sonderfall", label: "Zebra & Doppelstock" },
  { id: "Uebertragung", label: "Übertragung & § 6b" },
]) {
  if (!persgBereiche.some((b) => b.id === bereich.id)) persgBereiche.push(bereich);
  persgBereichName[bereich.id] = bereich.label;
}

const pageMap = [
  [1,9,"Mitunternehmerische Betriebsaufspaltung (MU-BAS)"],
  [2,9,"BMF 28.04.1998: Schwester-Personengesellschaft und Vorrang der BAS"],
  [3,10,"Gesellschaftervergütungen: Vorweggewinn oder Sonderbetriebseinnahme"],
  [4,10,"SBE-Buchungen und Übergang zu Kapitalkonten"],
  [5,11,"Zwei- und Drei-Konten-Modell; Verlustbuchungen"],
  [6,12,"Doppelstöckige Personengesellschaft: § 15 Abs. 1 Nr. 2 S. 2 EStG"],
  [7,13,"Titelblatt Spiegelbildmethode"],
  [8,13,"Spiegelbildmethode: Prüfungsrelevanz und Ausgangsfall"],
  [9,13,"Transparenzprinzip und theoretische anteilige Wirtschaftsgüter"],
  [10,13,"Spiegelung des Kapitalkontos und Klausurtechnik"],
  [11,14,"Spiegelbild-Ausgangsfall A-GmbH/OHG: Handelsbilanz"],
  [12,14,"Spiegelbild-Ausgangsfall A-GmbH/OHG: Steuerbilanz und Einkommen"],
  [13,14,"Übersicht Handelsrecht vs. Steuerrecht"],
  [14,15,"NWB: unterschiedliche Bilanzierung von PersG-Beteiligungen"],
  [15,15,"NWB: Grundlagen der Spiegelbildmethode und Grundfall"],
  [16,15,"Grundfall: Ausgangsbilanzen und Ergänzungsbilanz"],
  [17,15,"Grundfall: Sonder-/Ergänzungsbilanz und Jahresabschluss 2010"],
  [18,15,"Grundfall 2010: Feststellung und Bilanzierungskreise"],
  [19,15,"Grundfall 2010: A-GmbH und Einkommen 92.000 €"],
  [20,16,"§ 15a EStG: bilanzielle Umsetzung und Merkposten"],
  [21,16,"§ 15a-Abwandlung 2011: Nebenrechnung und verrechenbarer Verlust"],
  [22,16,"§ 15a-Abwandlung 2011: Sonder-/Ergänzungs- und Handels-/Steuerbilanz"],
  [23,16,"§ 15a-Abwandlung: Einkommen -93.000 €; Einstieg Zebra"],
  [24,17,"Zebragesellschaft: Umqualifizierung auf Beteiligtenebene"],
  [25,17,"Zebra Beispiel 1: Beteiligung < 10 % und Beteiligungskonto"],
  [26,17,"Zebra Abwandlung 20 %; Schattenrechnung; Einstieg Doppelstock"],
  [27,18,"Doppelstöckige PersG: Durchstockung und Beispiel 2"],
  [28,18,"Beispiel 2: Ausgangsbilanzen und Bottom-up-Vorgehen"],
  [29,18,"Beispiel 2: Ergänzungsbilanzen Ober-/Untergesellschaft"],
  [30,19,"§ 6b EStG: Übertragung stiller Reserven; Beispiel 3"],
  [31,19,"§ 6b Beispiel 3: Buchungen, negative Ergänzungsbilanz, Abwandlung 1"],
  [32,19,"§ 6b Abwandlungen 1 und 2; BilMoG"],
  [33,19,"§ 6b nach BilMoG und Fazit Spiegelbildmethode"],
  [34,20,"Übertragung/Überführung Einzel-WG aus Privat- in Betriebsvermögen"],
  [35,20,"BMF 29.03.2000: tauschähnlicher Vorgang"],
  [36,20,"BMF 2000: offene/verdeckte/teilentgeltliche Einbringung"],
  [37,20,"BMF 11.07.2011: Kapitalkonto I und weitere Gesellschafterkonten"],
  [38,20,"BMF 2011: Kapitalkonto II, Darlehenskonto und verdeckte Einlage"],
  [39,20,"BMF 26.07.2016: Kapitalkonto II nach BFH – Einlage statt Entgelt"],
];
for (const [page,moduleId,topic] of pageMap) persgSeitenplan.push({ page:`2/${page}`, tag:2, pdfPage:page, moduleId, topic });

persgModule.push(
  {
    id:9, sourceTag:2, area:"Grundlagen", title:"Mitunternehmerische Betriebsaufspaltung und Schwester-Personengesellschaft",
    law:"§ 15 Abs. 1 S. 1 Nr. 2 EStG · H 15.7 Abs. 4 EStH · BMF 28.04.1998", difficulty:"Klausurklassiker", minutes:38, sourcePages:[1,2], visual:"mu-bas",
    intro:[
      "Die Mitschrift beginnt mit der mitunternehmerischen Betriebsaufspaltung (MU-BAS): Eine Besitz-Personengesellschaft überlässt eine wesentliche Betriebsgrundlage an eine Betriebs-Personengesellschaft. Erforderlich sind sachliche und personelle Verflechtung.",
      "Die Quelle stellt ausdrücklich heraus, dass die Rechtsfolgen der Betriebsaufspaltung bei Schwester-Personengesellschaften grundsätzlich Vorrang vor einer Qualifikation des überlassenen Wirtschaftsguts als Sonderbetriebsvermögen der Betriebsgesellschaft haben.",
      "Nach dem BMF-Schreiben vom 28.04.1998 scheidet die MU-BAS bei unentgeltlicher Überlassung mangels Gewinnerzielungsabsicht der Besitzgesellschaft aus; bei Teilentgeltlichkeit ist die Gewinnerzielungsabsicht gesondert zu prüfen.",
    ],
    goals:["sachliche und personelle Verflechtung prüfen","Besitz- und Betriebspersonengesellschaft auseinanderhalten","Vorrang MU-BAS vor SBV bei Schwester-PersG anwenden","unentgeltliche und teilentgeltliche Überlassung als Ausnahme prüfen"],
    scheme:["Zwei Personengesellschaften und Nutzungsüberlassung feststellen.","Sachliche Verflechtung: wesentliche Betriebsgrundlage?","Personelle Verflechtung nach der in der Quelle dargestellten Personengruppentheorie prüfen.","Gewinnerzielungsabsicht der Besitzgesellschaft prüfen.","Bei MU-BAS: Besitzgesellschaft erzielt gewerbliche Einkünfte und bilanziert das überlassene Wirtschaftsgut; nicht als SBV bei der Betriebsgesellschaft behandeln."],
    normchain:["§ 15 Abs. 1 S. 1 Nr. 2 EStG","H 15.7 Abs. 4 EStH","BMF 28.04.1998 IV B 2 - S 2241 - 42/98","BFH 23.04.1996 VIII R 13/95"],
    merksatz:"Schwester-PersG: Erst MU-BAS prüfen. Liegt sie vor, hat die Betriebsaufspaltung nach der Quelle Vorrang vor SBV.",
    traps:["Das überlassene Wirtschaftsgut zusätzlich als SBV der Betriebsgesellschaft erfassen.","Bei unentgeltlicher Überlassung ohne Prüfung der Gewinnerzielungsabsicht MU-BAS annehmen."],
  },
  {
    id:10, sourceTag:2, area:"Gewinn", title:"Vergütungen an Gesellschafter: Vorweggewinn oder Sonderbetriebseinnahme",
    law:"§ 15 Abs. 1 S. 1 Nr. 2 S. 1 EStG · H 15.8 EStH · UStG", difficulty:"Abgrenzung", minutes:36, sourcePages:[3,4], visual:"verguetungen",
    intro:[
      "Die Unterrichtsnotiz trennt Vergütungen an Gesellschafter danach, wie die Zahlung in der Gesamthandsbuchführung behandelt wird. Ein gesellschaftsrechtlicher Vorweggewinn bleibt Teil der ersten Gewinnstufe; eine als Aufwand gebuchte Tätigkeitsvergütung wird auf der zweiten Stufe als Sonderbetriebseinnahme erfasst.",
      "Die Unterscheidung wirkt auch in Umsatzsteuer und Sozialversicherung: Der reine Vorweggewinn beruht nach der Mitschrift nicht auf einem Leistungsaustausch; die gesondert vergütete Tätigkeit kann dagegen eine steuerbare Leistung des Mitunternehmers sein.",
    ],
    goals:["Vorweggewinn und Sonderbetriebseinnahme nach der Buchung in der GHB abgrenzen","Tätigkeitsvergütung auf Stufe 2 erfassen","USt-Folge der Leistungsbeziehung getrennt prüfen","Zahlungen der OHG an A/B in Handels- und Steuerbilanz einordnen"],
    scheme:["Gesellschaftsvertrag und Buchung in der GHB prüfen.","Gewinnverteilungsbestandteil ohne Aufwandbuchung → Vorweggewinn/Stufe 1.","Aufwand der Gesellschaft für Tätigkeit/Darlehen/Vermietung → Sonderbetriebseinnahme/Stufe 2.","Korrespondierende Sonderbetriebsausgaben prüfen.","USt und ggf. sozialversicherungsrechtliche Folge eigenständig würdigen."],
    normchain:["§ 15 Abs. 1 S. 1 Nr. 2 S. 1 1. HS EStG","§ 15 Abs. 1 S. 1 Nr. 2 S. 1 2. HS EStG","H 15.8 Abs. 3 EStH","§ 1 Abs. 1 Nr. 1 UStG","§ 2 UStG"],
    merksatz:"Nicht die Überschrift der Zahlung entscheidet, sondern die gesellschaftsrechtliche Grundlage und ihre Buchung in der Gesamthand.",
  },
  {
    id:11, sourceTag:2, area:"Gewinn", title:"Kapitalkonten der Mitunternehmerschaft: Zwei- und Drei-Konten-Modell",
    law:"§§ 120, 121, 122, 169 HGB · § 15a EStG", difficulty:"Bilanztechnik", minutes:42, sourcePages:[4,5], visual:"kapitalkonten2",
    intro:[
      "Die Mitschrift stellt das gesetzliche Zwei-Konten-Modell dem gesellschaftsvertraglichen Drei-Konten-Modell gegenüber. Beim Zwei-Konten-Modell ist Kapitalkonto I Eigenkapital; Kapitalkonto II kann – je nach Ausgestaltung – Fremdkapitalcharakter haben.",
      "Im Drei-Konten-Modell ist Kapitalkonto I Festkapital, Kapitalkonto II variables Eigenkapital für Gewinn, Verlust und nicht entnehmbare Gewinnanteile, Kapitalkonto III ein Verrechnungskonto. Die Verlustbuchung und die gesellschaftsvertragliche Ausgestaltung entscheiden über Eigen- oder Fremdkapitalqualität.",
    ],
    goals:["Zwei- und Drei-Konten-Modell unterscheiden","Festkapital, variables Kapital und Verrechnungskonto zuordnen","Verlustbuchung als wesentliches Indiz erkennen","Folgen für § 15a EStG und Beteiligungsbuchwert vorbereiten"],
    scheme:["Gesellschaftsvertrag lesen: Welche Konten werden geführt?","Festkapital identifizieren.","Prüfen, auf welchem Konto Verluste gebucht werden und ob das Guthaben frei entziehbar ist.","Eigenkapital- und Fremdkapitalkonten trennen.","Für § 15a und Spiegelbildmethode nur die jeweils einschlägigen Eigenkapitalkonten heranziehen."],
    normchain:["§ 120 HGB","§ 121 HGB","§ 122 HGB","§ 169 HGB","§ 15a EStG"],
    merksatz:"Konto-Bezeichnung ist nicht genug: Verlusttragung und Entziehbarkeit entscheiden über Eigen- oder Fremdkapital.",
  },
  {
    id:12, sourceTag:2, area:"Grundlagen", title:"Doppelstöckige Personengesellschaft: Mitunternehmerkette nach § 15 EStG",
    law:"§ 15 Abs. 1 S. 1 Nr. 2 S. 2 EStG", difficulty:"Struktur", minutes:30, sourcePages:[5,6], visual:"doppelstock-grund",
    intro:[
      "Die Notiz zeigt die doppelstöckige Personengesellschaft: Ein Mitunternehmer ist über eine Obergesellschaft mittelbar an einer Untergesellschaft beteiligt. § 15 Abs. 1 S. 1 Nr. 2 S. 2 EStG zieht die Mitunternehmerstellung durch die Beteiligungskette.",
      "Ist A Mitunternehmer der Obergesellschaft und diese Mitunternehmerin der Untergesellschaft, wird A für die in der Quelle dargestellten Rechtsfolgen auch als Mitunternehmer der Untergesellschaft behandelt. Dadurch können Wirtschaftsgüter und Vergütungen auf der unteren Ebene Sonderbetriebsvermögen bzw. Sonderbetriebseinnahmen des mittelbar Beteiligten sein.",
    ],
    goals:["Ober- und Untergesellschaft benennen","Mitunternehmerkette nach Satz 2 aufbauen","SBV I und SBE des mittelbar Beteiligten der richtigen Gesellschaft zuordnen"],
    scheme:["Unmittelbare Mitunternehmerstellung an der Obergesellschaft prüfen.","Mitunternehmerstellung der Obergesellschaft an der Untergesellschaft prüfen.","§ 15 Abs. 1 S. 1 Nr. 2 S. 2 EStG anwenden.","Wirtschaftsgüter/Vergütungen des mittelbaren Gesellschafters auf SBV/SBE bei der Untergesellschaft prüfen."],
    normchain:["§ 15 Abs. 1 S. 1 Nr. 2 S. 2 EStG"],
    merksatz:"Mitunternehmer über Mitunternehmer: Satz 2 zieht die steuerliche Mitunternehmerstellung durch die Beteiligungskette.",
  },
  {
    id:13, sourceTag:2, area:"Spiegel", title:"Spiegelbildmethode: Transparenzprinzip und Beteiligungsansatz",
    law:"§ 15 Abs. 1 S. 1 Nr. 2 EStG · § 39 Abs. 2 Nr. 2 AO · § 60 Abs. 2 EStDV", difficulty:"Kernschema", minutes:44, sourcePages:[7,8,9,10], visual:"spiegel-grund",
    intro:[
      "Die Seiten 7–10 entwickeln die Spiegelbildmethode aus dem Transparenzprinzip. Handelsrechtlich ist die Beteiligung an der Personengesellschaft ein eigenständiger Vermögensgegenstand; steuerlich soll der Beteiligungsansatz das anteilige steuerliche Eigenkapital des Gesellschafters in der Personengesellschaft spiegeln.",
      "Die Mitschrift betont, dass dafür nicht jedes Wirtschaftsgut einzeln in der Bilanz des Gesellschafters erfasst werden muss. Maßgeblich ist vielmehr die Summe der steuerlichen Kapitalkonten einschließlich Ergänzungs- und Sonderbilanzkapital. Jede Veränderung dieses Kapitals wirkt sich grundsätzlich auf den Beteiligungsbuchwert aus.",
    ],
    goals:["Handelsbilanz- und Steuerbilanzansatz unterscheiden","Transparenzprinzip erklären","steuerlichen Beteiligungsbuchwert aus den Kapitalkonten ableiten","inner- und außerbilanzielle Vorgänge unterscheiden"],
    scheme:["Handelsrecht: Beteiligung als Vermögensgegenstand mit AK bzw. niedrigerem Wert.","Steuerrecht: Gesellschaftsbeteiligung ist kein selbständiges Wirtschaftsgut; Transparenzprinzip anwenden.","Gesamthandskapital + Ergänzungsbilanzkapital + Sonderbilanzkapital des Gesellschafters zusammenführen.","Diese Summe als spiegelbildlichen Beteiligungsansatz beim Gesellschafter ausweisen.","Außerbilanzielle Korrekturen der PersG nicht in den spiegelbildlichen Bilanzansatz ziehen."],
    normchain:["§ 15 Abs. 1 S. 1 Nr. 2 EStG","§ 39 Abs. 2 Nr. 2 AO","§ 60 Abs. 2 EStDV","§ 253 Abs. 3 HGB"],
    merksatz:"Steuerlicher Beteiligungsbuchwert = Spiegel des steuerlichen Kapitalkontos, nicht Anschaffungskostenfortführung wie in der Handelsbilanz.",
  },
  {
    id:14, sourceTag:2, area:"Spiegel", title:"Spiegelbildmethode im Ausgangsfall A-GmbH / A&B-OHG 2025",
    law:"§ 8 Abs. 1 KStG i.V.m. § 4 Abs. 5 Nr. 2 EStG · § 9 Nr. 2 GewStG", difficulty:"Anwendungsfall", minutes:44, sourcePages:[11,12,13], visual:"spiegel-2025", originalCaseId:"persg-fall-3",
    intro:[
      "Der handschriftliche Ausgangsfall verbindet Handels- und Steuerbilanz einer A-GmbH mit einer 50-%-Beteiligung an einer A&B-OHG. Die GmbH leistet 100.000 € Einlage, erhält 10.000 € Gewinnanteil, trägt 5.000 € Bewirtungskosten der OHG und vermietet ab 02.01.2025 ein Grundstück für monatlich 1.000 € umsatzsteuerfrei an die OHG.",
      "In der Handelsbilanz bleibt die Beteiligung mit 100.000 € stehen; Gewinnanspruch und Miete werden als Forderung/Ertrag erfasst. Steuerlich wird die OHG-Beteiligung spiegelbildlich auf 310.000 € fortentwickelt, während Grundstück und Forderungen wegen Sonderbetriebsvermögens bzw. korrespondierender Bilanzierung im Beteiligungsansatz aufgehen.",
    ],
    goals:["Handelsbilanzbuchungen des Gesellschafters erstellen","Sonderbetriebsvermögen und spiegelbildliche Steuerbilanz abbilden","Bewirtungskorrektur und Gewerbesteuerkürzung nachvollziehen"],
    scheme:["HB-Beteiligungsansatz und Forderungen buchen.","Steuerlichen Beteiligungsansatz aus GHB-/Sonderbilanzkapital spiegeln.","Grundstück als SBV I der A-GmbH bei der OHG behandeln.","Gewinnanteil und Sonderbetriebseinkünfte außer-/innerbilanziell korrekt zusammenführen.","KSt-/GewSt-Korrekturen aus der Quelle ergänzen."],
    normchain:["§ 15 Abs. 1 S. 1 Nr. 2 EStG","§ 4 Abs. 5 Nr. 2 EStG","§ 8 Abs. 1 KStG","§ 9 Nr. 2 GewStG"],
    merksatz:"In der StB des Gesellschafters werden Beteiligung, SBV und korrespondierende Forderungen über die Kapitalspiegelung zusammengeführt.",
  },
  {
    id:15, sourceTag:2, area:"Spiegel", title:"NWB-Grundfall: Erwerb einer Kommanditbeteiligung und Spiegelbildmethode 2010",
    law:"§ 15 EStG · § 39 Abs. 2 Nr. 2 AO · §§ 179, 180 AO", difficulty:"Vertiefung", minutes:58, sourcePages:[14,15,16,17,18,19], visual:"spiegel-nwb", originalCaseId:"persg-fall-4",
    intro:[
      "Der NWB-Grundfall lässt die A-GmbH zum 01.01.2010 eine 100-%-Kommanditbeteiligung an der B-GmbH & Co. KG für 150.000 € sowie die Komplementär-GmbH für 25.000 € erwerben. 15.000 € Beratungskosten entfallen auf die Kommanditbeteiligung.",
      "Handelsrechtlich werden Anschaffungskosten bilanziert. Steuerlich ist die Komplementärbeteiligung Sonderbetriebsvermögen; wegen des Kaufpreises oberhalb des Kapitalkontos entsteht eine Ergänzungsbilanz von 105.000 €. Die laufende Spiegelung führt Ende 2010 zu einem steuerlichen Beteiligungsansatz von 217.000 € und – nach den im Artikel dargestellten Korrekturen – zu einem Einkommen der A-GmbH von 92.000 €.",
    ],
    goals:["Erwerbspreis und Ergänzungsbilanz abstimmen","Komplementär-GmbH als SBV einordnen","Steuerbilanz des Gesellschafters spiegelbildlich fortführen","gesonderte und einheitliche Feststellung mit Gesellschafterbilanz verzahnen"],
    scheme:["Ausgangskapital der Unter-PersG feststellen.","Kaufpreisüberschuss einschließlich Anschaffungsnebenkosten in Ergänzungsbilanz erfassen.","Komplementärbeteiligung als Sonderbilanzposition ausgliedern.","Gesamthand + Ergänzung + Sonderbilanz zum Beteiligungsansatz spiegeln.","Laufende Ergebnisse und Entnahmen/Einlagen verfolgen; § 60 Abs. 2 EStDV beachten."],
    normchain:["§ 15 Abs. 1 S. 1 Nr. 2 EStG","§ 39 Abs. 2 Nr. 2 AO","§§ 179, 180 AO","§ 60 Abs. 2 EStDV"],
    merksatz:"Die Spiegelbildmethode ist nur so gut wie die Abstimmung aller drei Kapitalkreise: Gesamthand, Ergänzung und Sonderbilanz.",
  },
  {
    id:16, sourceTag:2, area:"Verlust", title:"§ 15a EStG innerhalb der Spiegelbildmethode: Verlust 2011 und Merkposten",
    law:"§ 15a EStG · OFD Frankfurt 17.06.1998", difficulty:"Fortgeschritten", minutes:52, sourcePages:[20,21,22,23], visual:"spiegel-15a",
    intro:[
      "Die Fortführung des NWB-Grundfalls zeigt, dass § 15a EStG die bilanzielle Zurechnung des Verlusts nicht ändert. Maßgebliches Kapitalkonto ist Gesamthands- plus Ergänzungsbilanzkapital; Sonderbilanzkapital bleibt für § 15a außer Betracht.",
      "2011 beträgt das maßgebliche Kapital 192.000 €, der bilanzielle Verlust 208.000 €. 16.000 € sind deshalb lediglich verrechenbar. Der Artikel bildet hierfür einen außerbilanziellen Merkposten; die Spiegelbildmethode selbst bleibt von § 15a unberührt.",
    ],
    goals:["maßgebliches §15a-Kapitalkonto bilden","ausgleichsfähigen und verrechenbaren Verlust trennen","außerbilanziellen Merkposten von der Bilanz abgrenzen","2011-Bilanzen mit der Spiegelbildmethode abstimmen"],
    scheme:["Kapitalkonto 1.1. aus GHB + Ergänzungsbilanz bilden; Sonderbilanz ausschließen.","Außenhaftung/geleistete Einlage prüfen.","Bilanziellen Verlust gegen Ausgleichspotenzial stellen.","Überhang als verrechenbaren Verlust feststellen.","Korrektur außerbilanziell als Merkposten führen; Beteiligungsbuchwert weiterhin spiegelbildlich fortführen."],
    normchain:["§ 15a Abs. 1 EStG","§ 15a Abs. 2 EStG","§ 15a Abs. 4 EStG"],
    merksatz:"§ 15a beschränkt den Verlustausgleich, nicht die bilanzielle Verlustzurechnung – deshalb kein Eingriff in den Spiegelbildansatz.",
  },
  {
    id:17, sourceTag:2, area:"Sonderfall", title:"Zebragesellschaft: vermögensverwaltende PersG mit betrieblichem Beteiligten",
    law:"§ 39 Abs. 2 Nr. 2 AO · § 20 Abs. 8 EStG · § 21 Abs. 3 EStG", difficulty:"Sonderfall", minutes:46, sourcePages:[23,24,25,26], visual:"zebra", originalCaseId:"persg-fall-5",
    intro:[
      "Als Zebragesellschaft bezeichnet die Quelle eine vermögensverwaltende Personengesellschaft, an der ein betrieblich Beteiligter beteiligt ist. Die Personengesellschaft bleibt auf ihrer Ebene vermögensverwaltend; die Umqualifizierung in gewerbliche Einkünfte erfolgt beim betrieblich Beteiligten.",
      "Die Finanzverwaltung verlangt grundsätzlich eine eigene bilanzielle Gewinnermittlung des betrieblichen Beteiligten. Vereinfachungen bestehen bei freiwilliger ergänzender Bestandsvergleichsrechnung der Gesellschaft und – auf Antrag – bei Beteiligungen unter 10 %. Beispiel 1 arbeitet mit einer 8-%-Beteiligung und einem Beteiligungskonto von 11.500 €; die Abwandlung erhöht die Beteiligung auf 20 % und verlangt eine Schattenrechnung.",
    ],
    goals:["Umqualifizierung auf Beteiligtenebene vornehmen","<10-%-Vereinfachung anwenden","Beteiligungskonto fortführen","bei 20 % Schattenrechnung nach §4/§5 EStG erstellen"],
    scheme:["Einkunftsart der PersG selbst feststellen.","Betriebliche Sphäre des Gesellschafters prüfen.","Anteilige Einkünfte beim Gesellschafter in gewerbliche Einkünfte umqualifizieren.","Gewinnermittlung grundsätzlich nach § 4 Abs. 1/§ 5 Abs. 1 EStG rekonstruieren.","Vereinfachungsregeln (<10 % bzw. ergänzende Gesellschaftsrechnung) prüfen."],
    normchain:["§ 39 Abs. 2 Nr. 2 AO","§ 20 Abs. 8 EStG","§ 21 Abs. 3 EStG","BMF 29.04.1994 BStBl I 282","BFH GrS 2/02"],
    merksatz:"Die Zebra bleibt auf Gesellschaftsebene vermögensverwaltend; gewerblich wird der Anteil erst beim betrieblich Beteiligten.",
  },
  {
    id:18, sourceTag:2, area:"Sonderfall", title:"Doppelstöckige Personengesellschaft: Ergänzungsbilanz und Durchstockung",
    law:"§ 15 EStG · § 39 Abs. 2 Nr. 2 AO", difficulty:"Fortgeschritten", minutes:50, sourcePages:[26,27,28,29], visual:"doppelstock-spiegel", originalCaseId:"persg-fall-6",
    intro:[
      "Der Artikel vertieft die doppelstöckige Personengesellschaft für die Spiegelbildmethode. Die bevorzugte Lösung bildet Mehrwerte bei der Gesellschaftsebene, zu deren Wirtschaftsgütern sie wirtschaftlich gehören: bei der Obergesellschaft für deren eigene Mehrwerte und bei der Untergesellschaft für die auf sie entfallenden Mehrwerte.",
      "Beispiel 2: X-GmbH erwirbt die 100-%-Kommanditbeteiligung an der Y-GmbH & Co. KG für 150.000 €. Y hält die Z-GmbH & Co. KG. Die stillen Reserven von insgesamt 85.000 € werden 15.000 € der Untergesellschaft und 70.000 € der Obergesellschaft zugeordnet. Die Quelle empfiehlt ausdrücklich das Vorgehen von unten nach oben.",
    ],
    goals:["Beteiligungshierarchie zeichnen","Ergänzungsbilanz am richtigen Stockwerk bilden","Durchstockung verstehen","Spiegelbildansätze bottom-up abstimmen"],
    scheme:["Unterste Gesellschaft zuerst bilanzieren.","Mehrwerte auf Wirtschaftsgüter der Untergesellschaft in Ergänzungsbilanz bei der Untergesellschaft abbilden.","Spiegelbildansatz der Obergesellschaft an der Untergesellschaft fortschreiben.","Mehrwerte der Obergesellschaft in deren Ergänzungsbilanz erfassen.","Beteiligungsansatz des Obergesellschafters aus der Summe der (Ergänzungs-)Bilanzen ableiten."],
    normchain:["§ 15 Abs. 1 S. 1 Nr. 2 EStG","§ 39 Abs. 2 Nr. 2 AO","BFH 28.09.1995 IV R 57/94"],
    merksatz:"Doppelstock immer bottom-up rechnen: erst Untergesellschaft, dann Obergesellschaft, zuletzt Obergesellschafter.",
  },
  {
    id:19, sourceTag:2, area:"Uebertragung", title:"Übertragung stiller Reserven nach § 6b EStG auf eine Personengesellschaft",
    law:"§ 6b EStG · R 6b.2 EStR · § 60 Abs. 2 EStDV", difficulty:"Bilanztechnik", minutes:52, sourcePages:[30,31,32,33], visual:"sechs-b", originalCaseId:"persg-fall-7",
    intro:[
      "Beispiel 3 behandelt die gesellschafterbezogene Übertragung stiller Reserven: Die H-GmbH ist zu 50 % an der W-OHG beteiligt, verkauft ihr 2007 ein Grundstück für 100.000 € bei Buchwert 20.000 € und erzielt 80.000 € begünstigten Gewinn.",
      "Die Quelle arbeitet die frühere umgekehrte Maßgeblichkeit, die OFD-/BMF-Technik und zwei Abwandlungen heraus. Im Grundfall wird in der Ergänzungsbilanz der H-GmbH ein negativer Mehrwert von 50.000 € abgebildet; nach BilMoG können rein steuerliche Wahlrechte wie § 6b unabhängig von der Handelsbilanz ausgeübt werden.",
    ],
    goals:["gesellschafterbezogenen §6b-Abzug begrenzen","negative Ergänzungsbilanz buchen","alte Maßgeblichkeit und BilMoG-Regime unterscheiden","Abwandlungen anhand Bilanzaufstellungs-/Veräußerungszeitpunkt lösen"],
    scheme:["Begünstigten Veräußerungsgewinn nach § 6b feststellen.","Reinvestitionsgut und Zurechnungsquote des Gesellschafters bestimmen.","Übertragbaren Betrag in Ergänzungsbilanz der PersG abbilden.","Nicht übertragbaren Betrag/Rücklage behandeln.","Für historische Fälle maßgeblichen Verwaltungsstand; für BilMoG-Zeiträume unabhängige steuerliche Wahlrechtsausübung beachten."],
    normchain:["§ 6b Abs. 1 EStG","§ 6b Abs. 3 EStG","§ 6b Abs. 4 EStG","R 6b.2 Abs. 6, 8 EStR","§ 60 Abs. 2 EStDV"],
    merksatz:"§ 6b ist gesellschafterbezogen: Übertragen wird nur, soweit das Reinvestitionsgut steuerlich dem Gesellschafter zuzurechnen ist.",
  },
  {
    id:20, sourceTag:2, area:"Uebertragung", title:"Einbringung einzelner Wirtschaftsgüter: Gesellschaftsrechte, Einlage und Kapitalkonto II",
    law:"§ 4 Abs. 1 S. 8 EStG · § 6 Abs. 1 Nr. 5 EStG · BMF 2000/2011/2016", difficulty:"Rechtsentwicklung", minutes:54, sourcePages:[34,35,36,37,38,39], visual:"einbringung",
    intro:[
      "Die Schlussseiten ordnen die Übertragung eines Einzelwirtschaftsguts aus dem Privatvermögen in das Betriebsvermögen der Personengesellschaft in drei Grundtypen: Veräußerung gegen sonstige Gegenleistung, Übertragung gegen Gewährung von Gesellschaftsrechten und unentgeltliche/verdeckte Einlage.",
      "Das BMF 2000 behandelt die offene Sacheinlage gegen Gesellschaftsrechte als tauschähnlichen Vorgang. Das BMF 2011 knüpft die Gewährung von Gesellschaftsrechten an Kapitalkonten. Nach den BFH-Urteilen 2015/2016 und BMF 26.07.2016 führt die ausschließliche Gutschrift auf Kapitalkonto II jedoch nicht mehr zu einem entgeltlichen Vorgang, sondern zu einer Einlage; maßgebend für Gesellschaftsrechte ist regelmäßig Kapitalkonto I.",
    ],
    goals:["entgeltliche, teilentgeltliche und unentgeltliche Übertragung trennen","Kapitalkonto I/II und Darlehenskonto nach aktueller Quellenlage unterscheiden","Rechtsentwicklung 2000–2016 nachvollziehen","§17/§23-Folgen der Quelle erkennen"],
    scheme:["Gegenleistung feststellen: Geld/Darlehensforderung, Gesellschaftsrechte oder keine Gegenleistung.","Bei Gesellschaftsrechten prüfen, welches Kapitalkonto angesprochen wird.","Kapitalkonto I → entgeltlicher/tauschähnlicher Vorgang; ausschließliche Buchung auf Kapitalkonto II nach BFH/BMF 2016 → Einlage.","Keine Gesellschaftsrechte und keine sonstige Gegenleistung → verdeckte Einlage nach § 4 Abs. 1 S. 8 i.V.m. § 6 Abs. 1 Nr. 5 EStG.","Gemischte Gegenleistung ggf. nach der in der Quelle dargestellten Rechtsentwicklung aufteilen."],
    normchain:["§ 4 Abs. 1 S. 8 EStG","§ 6 Abs. 1 Nr. 5 EStG","§ 17 EStG","§ 23 EStG","BMF 29.03.2000","BMF 11.07.2011","BMF 26.07.2016","BFH IV R 15/14","BFH IV R 46/12"],
    merksatz:"Aktuelle Quellenlage des PDFs: Kapitalkonto I vermittelt Gesellschaftsrechte; die ausschließliche Gutschrift auf Kapitalkonto II ist Einlage, nicht Entgelt.",
  }
);

persgFaelle.push(
  {
    id:"persg-fall-2", nr:2, sourceTag:2, title:"Gesellschaftervergütungen: Vorweggewinn oder Sonderbetriebseinnahme", sourcePages:[3,4], moduleIds:[10], law:"§ 15 Abs. 1 S. 1 Nr. 2 EStG",
    facts:["Die Quelle vergleicht Zahlungen an Gesellschafter einer OHG: gesellschaftsvertragliche Vorwegvergütung einerseits und als Aufwand der Gesellschaft gebuchte Tätigkeitsvergütung andererseits.","Zusätzlich werden Umsatzsteuer- und Sozialversicherungsfolgen sowie ein Beispiel mit Bauleistungen und Baustofflieferungen an eine A&B-OHG dargestellt."],
    tasks:["Zahlung der richtigen Gewinnstufe zuordnen.","Sonderbetriebseinnahme und korrespondierende Buchung prüfen.","Umsatzsteuerliche Folge getrennt beurteilen."],
    solution:["Vorweggewinn ohne Aufwandbuchung bleibt Bestandteil der Gewinnverteilung auf Stufe 1.","Als Aufwand gebuchte Tätigkeitsvergütung wird beim Mitunternehmer auf Stufe 2 als Sonderbetriebseinnahme erfasst.","Nur die echte Leistungsbeziehung wird umsatzsteuerlich als Leistungsaustausch geprüft."],
    result:"Buchung und Rechtsgrund der Vergütung bestimmen, ob Vorweggewinn oder SBE vorliegt.",
  },
  {
    id:"persg-fall-3", nr:3, sourceTag:2, title:"Spiegelbildmethode 2025: A-GmbH beteiligt an A&B-OHG", sourcePages:[11,12,13], moduleIds:[13,14], law:"§ 15 EStG · § 39 Abs. 2 Nr. 2 AO",
    facts:["A-GmbH beteiligt sich zum 01.01.2025 gegen 100.000 € Einlage zu 50 % an einer A&B-OHG.","Gewinnanteil 2025: 10.000 €. Bewirtungskosten der OHG: 5.000 €. Ab 02.01.2025 vermietet die A-GmbH ein Grundstück für 1.000 € monatlich umsatzsteuerfrei an die OHG."],
    tasks:["Handelsbilanz der A-GmbH fortführen.","Steuerbilanz nach Spiegelbildmethode aufstellen.","Sonderbetriebsvermögen und Einkommensermittlung ergänzen."],
    solution:["HB: Beteiligung bleibt mit 100.000 €, Gewinnanspruch und Mietforderung werden separat erfasst.","StB: Beteiligung spiegelt Gesamthands- und Sonderbilanzkapital; das Grundstück ist SBV I.","Die Quelle gelangt zum steuerlichen Beteiligungsansatz von 310.000 € und stellt KSt-/GewSt-Korrekturen gesondert dar."],
    result:"HB folgt Anschaffungskosten-/Forderungslogik; StB spiegelt die steuerlichen Kapitalkreise.",
  },
  {
    id:"persg-fall-4", nr:4, sourceTag:2, title:"NWB-Grundfall 2010/2011: A-GmbH und B-GmbH & Co. KG", sourcePages:[15,16,17,18,19,20,21,22,23], moduleIds:[15,16], law:"§ 15 EStG · § 15a EStG · § 39 Abs. 2 Nr. 2 AO",
    facts:["A-GmbH erwirbt zum 01.01.2010 die 100-%-Kommanditbeteiligung an der B-GmbH & Co. KG für 150.000 €, zusätzlich die B-GmbH für 25.000 €; Beratungskosten für den KG-Anteil 15.000 €.","2010 erzielt die KG 40.000 € Jahresüberschuss; 2011 folgt ein Verlustjahr mit 205.000 € Jahresfehlbetrag."],
    tasks:["Erwerbsbilanzierung und Ergänzungs-/Sonderbilanz aufstellen.","Spiegelbildansatz und Einkommen 2010 ermitteln.","§15a-Abwandlung 2011 einschließlich verrechenbarem Verlust lösen."],
    solution:["Ergänzungsbilanz beim Erwerb: 105.000 €; Komplementärbeteiligung 25.000 € in der Sonderbilanz.","2010 zeigt der Artikel einen spiegelbildlichen Beteiligungsansatz von 217.000 € und Einkommen der A-GmbH von 92.000 €.","2011: maßgebliches §15a-Kapital 192.000 €, bilanzieller Verlust 208.000 €, davon 16.000 € lediglich verrechenbar; Korrektur als außerbilanzieller Merkposten."],
    result:"Spiegelbildansatz bleibt bilanziell; §15a wirkt nur auf die Ausgleichsfähigkeit außerhalb der Bilanz.",
  },
  {
    id:"persg-fall-5", nr:5, sourceTag:2, title:"Zebragesellschaft: A-GmbH an vermögensverwaltender C-KG", sourcePages:[25,26], moduleIds:[17], law:"§ 39 Abs. 2 Nr. 2 AO · BMF 29.04.1994",
    facts:["A-GmbH ist seit 01.01.2008 mit 25.000 € bzw. 8 % an der vermögensverwaltenden C-KG beteiligt. Verlustanteile 2008–2010: 5.000 €, 4.000 €, 3.000 €. 2009 werden 1.500 € Grundstückserlös ausgekehrt; Verkauf der Beteiligung Ende 2010 für 40.000 €.","Abwandlung: Die 25.000 € Einlage repräsentiert 20 %."],
    tasks:["Beteiligungskonto bei 8 % fortführen.","KSt-Einkünfte 2010 bestimmen.","Folge der 20-%-Abwandlung erläutern."],
    solution:["Buchwert Beteiligungskonto Ende 2010: 11.500 €.","2010: Verlustanteil -3.000 €, Veräußerungserlös 40.000 €, Buchwert -11.500 € → Einkünfte aus Gewerbebetrieb 25.500 €.","Bei 20 % greift die <10-%-Vereinfachung nicht; die Quelle verlangt eine (fiktive) Gewinnermittlung/Schattenrechnung."],
    result:"8 %: Beteiligungskonto 11.500 € und Einkünfte 25.500 €; 20 %: Schattenrechnung.",
  },
  {
    id:"persg-fall-6", nr:6, sourceTag:2, title:"Doppelstock: X-GmbH – Y-GmbH & Co. KG – Z-GmbH & Co. KG", sourcePages:[27,28,29], moduleIds:[18], law:"§ 15 EStG · § 39 Abs. 2 Nr. 2 AO",
    facts:["Y-GmbH & Co. KG ist alleinige Kommanditistin der Z-GmbH & Co. KG. X-GmbH erwirbt zum 01.01.2010 die 100-%-Kommanditbeteiligung an Y für 150.000 €.","Vom Kaufpreis entfallen 50.000 € auf die Z-Beteiligung und 100.000 € auf sonstige Aktiva der Y."],
    tasks:["Beteiligungskette bilanzieren.","Ergänzungsbilanzen den richtigen Gesellschaftsebenen zuordnen.","Spiegelbildansatz der X-GmbH bestimmen."],
    solution:["15.000 € Mehrwerte betreffen die Untergesellschaft Z und werden dort in Ergänzungsbilanz abgebildet.","70.000 € Mehrwerte betreffen Aktiva der Obergesellschaft Y und werden dort für X ergänzt.","Der Artikel empfiehlt die Rechnung von unten nach oben; Beteiligungsansatz X an Y beträgt im Beispiel 150.000 €."],
    result:"85.000 € stille Reserven werden 15.000 € unten und 70.000 € oben zugeordnet.",
  },
  {
    id:"persg-fall-7", nr:7, sourceTag:2, title:"§ 6b EStG: H-GmbH überträgt stille Reserven auf W-OHG", sourcePages:[30,31,32,33], moduleIds:[19], law:"§ 6b EStG · R 6b.2 EStR",
    facts:["H-GmbH ist zu 50 % an der W-OHG beteiligt. 2007 verkauft sie ein unbebautes Lagergrundstück an die W-OHG für 100.000 €; Buchwert 20.000 €, begünstigter Gewinn 80.000 €.","Abwandlung 1: Bilanz der W-OHG wird erst am 02.04.2008 aufgestellt. Abwandlung 2: Verkauf am 01.04.2010."],
    tasks:["Übertragbaren §6b-Betrag bestimmen.","Buchungen bei H-GmbH und W-OHG einschließlich Ergänzungsbilanz darstellen.","Abwandlungen nach dem jeweils in der Quelle dargestellten Verwaltungsstand lösen."],
    solution:["Die Quelle überträgt im Grundfall 50.000 € entsprechend der 50-%-Zurechnung auf die negative Ergänzungsbilanz der H-GmbH.","Nicht übertragbarer Teil wird nach dem damaligen Regime über Rücklage/Handelsbilanztechnik behandelt.","Nach BilMoG werden rein steuerliche Wahlrechte wie §6b unabhängig von der Handelsbilanz ausgeübt."],
    result:"Gesellschafterbezogene Übertragung; die Ergänzungsbilanz bildet die Zurechnung zum einzelnen Gesellschafter ab.",
  }
);

persgSchemata.push(
  { id:"mu-bas", title:"Mitunternehmerische Betriebsaufspaltung", law:"§ 15 EStG · BMF 28.04.1998", moduleIds:[9], visual:"mu-bas" },
  { id:"verguetungen", title:"Gesellschaftervergütungen", law:"§ 15 Abs. 1 S. 1 Nr. 2 EStG", moduleIds:[10], visual:"verguetungen" },
  { id:"kapitalkonten2", title:"Zwei-/Drei-Konten-Modell", law:"HGB · § 15a EStG", moduleIds:[11], visual:"kapitalkonten2" },
  { id:"spiegel-grund", title:"Spiegelbildmethode", law:"§ 15 EStG · § 39 AO", moduleIds:[13,14,15], visual:"spiegel-grund" },
  { id:"spiegel-15a", title:"§ 15a innerhalb der Spiegelbildmethode", law:"§ 15a EStG", moduleIds:[16], visual:"spiegel-15a" },
  { id:"zebra", title:"Zebragesellschaft", law:"§ 39 Abs. 2 Nr. 2 AO", moduleIds:[17], visual:"zebra" },
  { id:"doppelstock-spiegel", title:"Doppelstöckige PersG / Durchstockung", law:"§ 15 EStG", moduleIds:[12,18], visual:"doppelstock-spiegel" },
  { id:"sechs-b", title:"§ 6b-Übertragung auf PersG", law:"§ 6b EStG", moduleIds:[19], visual:"sechs-b" },
  { id:"einbringung", title:"Einbringung Einzel-WG / Kapitalkonten", law:"§§ 4, 6 EStG · BMF 2016", moduleIds:[20], visual:"einbringung" },
);

persgQuizfragen.push(
  { q:"Welche Rechtsfigur hat bei entgeltlicher Vermietung zwischen Schwester-Personengesellschaften nach der Quelle grundsätzlich Vorrang vor SBV?", a:"Die mitunternehmerische Betriebsaufspaltung (MU-BAS)." },
  { q:"Wie trennt die Mitschrift Vorweggewinn und Sonderbetriebseinnahme?", a:"Entscheidend sind gesellschaftsrechtliche Grundlage und Buchung in der Gesamthand; als Aufwand gebuchte Sondervergütung wird auf Stufe 2 SBE." },
  { q:"Welche Kapitalkreise werden für den spiegelbildlichen Beteiligungsansatz zusammengeführt?", a:"Gesamthandskapital, Ergänzungsbilanzkapital und Sonderbilanzkapital des Gesellschafters." },
  { q:"Wirkt § 15a EStG nach der Quelle auf den spiegelbildlichen Bilanzansatz?", a:"Nein. § 15a ist ein außerbilanzielles Korrektiv der Verlustausgleichsfähigkeit." },
  { q:"Wo erfolgt bei der Zebragesellschaft die Umqualifizierung in gewerbliche Einkünfte?", a:"Auf Ebene des betrieblich beteiligten Gesellschafters, nicht auf Ebene der vermögensverwaltenden Personengesellschaft." },
  { q:"Wie soll eine doppelstöckige Beteiligung für die Spiegelbildmethode gerechnet werden?", a:"Von unten nach oben (Bottom-up); Mehrwerte werden auf der jeweils betroffenen Gesellschaftsebene ergänzt." },
  { q:"Wovon hängt der übertragbare §6b-Betrag bei Übertragung auf eine PersG ab?", a:"Davon, in welchem Umfang das Reinvestitionsgut dem übertragenden Gesellschafter steuerlich zuzurechnen ist." },
  { q:"Welche Folge hat nach BMF 26.07.2016 die ausschließliche Gutschrift auf Kapitalkonto II?", a:"Einlage; keine Gewährung von Gesellschaftsrechten und damit kein entgeltlicher Vorgang." },
);
