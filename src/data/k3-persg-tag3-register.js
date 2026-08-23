import "./k3-persg-tag2-register.js";
import {
  persgQuelle, persgBereiche, persgBereichName, persgSeitenplan,
  persgModule, persgFaelle, persgSchemata, persgQuizfragen,
} from "./k3-persg-tag1.js";

/* 3. Unterrichtstag Personengesellschaften – 05.08.2026.
   Primärquelle: „3. Tag PersG“ (10 Seiten).
   Begleit-/Einheitsfassung: „Personengesellschaften in Bilanz, 3. Einheit“
   (459 Seiten Bildschirmaufzeichnung mit Wiederholungs-/Scrollframes und
   zusätzlichen Quellenansichten). Jede physische Seite der Einheitsfassung
   wird über tag3CaptureRanges lückenlos einem Fachcluster oder – bei S. 458 –
   einer technischen Unterbrechung ohne Fachinhalt zugeordnet. */

persgQuelle.title = "1. + 2. + 3. Tag PersG";
persgQuelle.stand = "05.08.2026";
persgQuelle.pages = 63;
persgQuelle.companionPages = 459;
persgQuelle.physicalPages = 522;
persgQuelle.label = "Unterrichtsnotizen · 1. bis 3. Unterrichtstag Personengesellschaften";
persgQuelle.tags = [
  { tag: 1, title: "1. Tag PersG", pages: 14, stand: "31.07.2026" },
  { tag: 2, title: "2. Tag PersG", pages: 39, stand: "04.08.2026" },
  {
    tag: 3, title: "3. Tag PersG", pages: 10, stand: "05.08.2026",
    companion: { title: "Personengesellschaften in Bilanz, 3. Einheit", pages: 459 },
  },
];

const uebertragung = persgBereiche.find((b) => b.id === "Uebertragung");
if (uebertragung) uebertragung.label = "Übertragung, § 6b & § 6 Abs. 5";
persgBereichName.Uebertragung = "Übertragung, § 6b & § 6 Abs. 5";

const tag3PageMap = [
  [1,21,"Grundschema PV → BV; Veräußerung, Gesellschaftsrechte oder verdeckte Einlage"],
  [2,22,"PV-Grundstück: Kapitalkonto I, Kapitalkonto II und Rechtsfolgen"],
  [3,22,"PV-Grundstück: Mischfall 75/25; Einstieg BV → BV nach § 6 Abs. 5 EStG"],
  [4,23,"§ 6 Abs. 5 S. 3 EStG; Buchwertfortführung und negative Ergänzungsbilanz"],
  [5,24,"§ 6 Abs. 5 S. 4 EStG: Sperrfrist vs. negative Ergänzungsbilanz"],
  [6,25,"Teilentgeltliche Übertragung mit Schuldübernahme; Trennungstheorie"],
  [7,27,"§ 6 Abs. 5 S. 5 EStG: Körperschaftsbeteiligung / Statusverbesserung"],
  [8,28,"USt-Querverweis; Beginn Gesamtfall A&B-OHG"],
  [9,29,"Gesamtfall: Eröffnungsbilanz, Ergänzungsbilanz und GHB-AfA"],
  [10,29,"Gesamtfall: richtige AfA und Mehr-AfA der Ergänzungsbilanz"],
];
for (const [page,moduleId,topic] of tag3PageMap) {
  persgSeitenplan.push({ page:`3/${page}`, tag:3, pdfPage:page, moduleId, topic });
}

persgQuelle.tag3CaptureRanges = [
  { start:1, end:5, moduleIds:[9], topic:"Wiederholung MU-BAS und BMF 28.04.1998" },
  { start:6, end:10, moduleIds:[10], topic:"Wiederholung Gesellschaftervergütungen / SBE" },
  { start:11, end:13, moduleIds:[11], topic:"Wiederholung Zwei-/Drei-Konten-Modell" },
  { start:14, end:15, moduleIds:[12], topic:"Wiederholung doppelstöckige Personengesellschaft" },
  { start:16, end:17, moduleIds:[13], topic:"Wiederholung Spiegelbildmethode" },
  { start:18, end:27, moduleIds:[14], topic:"Wiederholung Spiegelbild-Ausgangsfall 2025" },
  { start:28, end:33, moduleIds:[20], topic:"Wiederholung Grundschema Übertragung/Überführung" },
  { start:34, end:44, moduleIds:[21], topic:"Tag-3-Grundschema Privatvermögen → Betriebsvermögen" },
  { start:45, end:94, moduleIds:[22], topic:"PV-Grundstück → OHG: Kapitalkonto I/II und Mischfall" },
  { start:95, end:132, moduleIds:[23], topic:"§ 6 Abs. 5 EStG und BMF 08.12.2011 – Systematik" },
  { start:133, end:232, moduleIds:[24], topic:"§ 6 Abs. 5 S. 3/S. 4 – Buchwert, Sperrfrist, Ergänzungsbilanz" },
  { start:233, end:324, moduleIds:[25], topic:"Teilentgeltliche Übertragung, Schuldübernahme und strenge Trennungstheorie" },
  { start:325, end:344, moduleIds:[26], topic:"§ 6 Abs. 5 S. 3 Nr. 4 – identisch beteiligte Mitunternehmer" },
  { start:345, end:365, moduleIds:[27], topic:"§ 6 Abs. 5 S. 5–7 – Körperschaftsbeteiligung und Statusregeln" },
  { start:366, end:370, moduleIds:[28], topic:"Umsatzsteuerlicher Querverweis der Unterrichtsnotiz" },
  { start:371, end:457, moduleIds:[29], topic:"Gesamtfall A&B-OHG – GHB, Ergänzungsbilanz und AfA" },
  { start:458, end:458, moduleIds:[], topic:"Technische Bildschirmunterbrechung – kein fachlicher Inhalt" },
  { start:459, end:459, moduleIds:[29], topic:"Gesamtfall – Abschluss AfA-Korrektur" },
];

persgModule.push(
  {
    id:21, sourceTag:3, area:"Uebertragung", title:"Grundschema: Einzelwirtschaftsgut vom Privat- ins Betriebsvermögen",
    law:"§ 4 Abs. 1 S. 8 EStG · § 6 Abs. 1 Nr. 5 EStG · §§ 17, 20, 23 EStG", difficulty:"Grundschema", minutes:34,
    sourcePages:[1], capturePages:["34–44"], visual:"transfer-master",
    intro:[
      "Tag 3 beginnt mit einem Ordnungsschema für Einzelwirtschaftsgüter aus dem Privatvermögen. Zuerst wird zwischen Überführung ohne Rechtsträgerwechsel und Übertragung mit zumindest teilweisem Rechtsträgerwechsel getrennt.",
      "Bei der Übertragung in das Gesamthandsvermögen stellt die Mitschrift drei Fallgruppen nebeneinander: Veräußerung gegen sonstige Gegenleistung, Übertragung gegen Gewährung von Gesellschaftsrechten und unentgeltliche/verdeckte Einlage. Entscheidend ist deshalb zuerst die Gegenleistung – nicht die bloße Bezeichnung der Buchung.",
      "Die Kontenmatrix der Quelle ordnet Geld, Schuldübernahme und Darlehens-/Verrechnungskonten der entgeltlichen Seite zu; Gesellschaftsrechte werden vor allem durch Kapitalkonto I vermittelt. Die ausschließliche Gutschrift auf Kapitalkonto II wird nach der bereits an Tag 2 behandelten Rechtsentwicklung als Einlage eingeordnet.",
    ],
    goals:["Überführung und Übertragung trennen","die drei Übertragungsvarianten systematisch bestimmen","Geld/Schuld/Darlehen von Gesellschaftsrechten abgrenzen","Privatveräußerungs- und Einlagefolgen erst nach der Gegenleistungsprüfung zuordnen"],
    scheme:["Rechtsträgerwechsel prüfen: nein → Überführung; ja/teilweise → Übertragung.","Gegenleistung feststellen: Geld/Schuld/Darlehensforderung, Gesellschaftsrechte oder keine Gegenleistung.","Gesellschaftsrechte anhand der angesprochenen Kapitalkonten prüfen.","Veräußerungsnorm des Privatvermögens (§ 17, § 20 Abs. 2 oder § 23 EStG) nur bei entgeltlichem Anteil prüfen.","Bei unentgeltlichem Anteil Einlagebewertung nach § 6 Abs. 1 Nr. 5 EStG und etwaige spätere Spezialfolgen prüfen."],
    normchain:["§ 4 Abs. 1 S. 8 EStG","§ 6 Abs. 1 Nr. 5 EStG","§ 17 EStG","§ 20 Abs. 2 EStG","§ 23 EStG"],
    merksatz:"Erst Rechtsträgerwechsel, dann Gegenleistung, dann Bewertung: Diese Reihenfolge trägt den gesamten Tag 3.",
  },
  {
    id:22, sourceTag:3, area:"Uebertragung", title:"PV-Grundstück → OHG: Kapitalkonto I, Kapitalkonto II und Mischfall",
    law:"§ 23 EStG · § 6 Abs. 1 Nr. 5 EStG · BMF 26.07.2016", difficulty:"Rechenfall", minutes:48,
    sourcePages:[1,2,3], capturePages:["45–94"], visual:"pv-gubo", originalCaseId:"persg-fall-8",
    intro:[
      "A überträgt ein im Privatvermögen gehaltenes Grundstück mit Anschaffungskosten 80.000 € und Teilwert/gemeinem Wert 150.000 € auf eine A&B-OHG (A 90 %, B 10 %). Die Mitschrift variiert ausschließlich die Gegenbuchung und zeigt damit die steuerliche Bedeutung der Kapitalkonten.",
      "Variante a: 100.000 € werden Kapitalkonto I und 50.000 € einer gesamthänderischen Rücklage gutgeschrieben. Die Quelle behandelt den Vorgang insgesamt als tauschähnlich gegen Gesellschaftsrechte; der Veräußerungsgewinn beträgt 70.000 €.",
      "Variante b: Ausschließliche Gutschrift von 150.000 € auf Kapitalkonto II. Nach der im Skript verwendeten BFH-/BMF-Linie vermittelt dies keine Gesellschaftsrechte; die Mitschrift behandelt den Vorgang als verdeckte Einlage.",
      "Variante c: 112.500 € Gesellschaftsrechte und 37.500 € unentgeltlicher Anteil. Die Trennung 75/25 führt beim entgeltlichen Anteil zu 52.500 € Gewinn (112.500 € ./. 60.000 € anteilige Anschaffungskosten).",
    ],
    goals:["Kapitalkonto I und II als Gegenleistung unterscheiden","70.000 € Gewinn der voll entgeltlichen Variante herleiten","den 75/25-Mischfall nach der Trennungstheorie rechnen","Gesamthandsbuchung und private Veräußerungsfolge zusammenführen"],
    scheme:["Verkehrswert/Teilwert 150.000 € und Anschaffungskosten 80.000 € festhalten.","Gegenbuchung analysieren.","KapI + gesamthänderische Rücklage in der Quelle als Gesellschaftsrechtsvorgang einordnen.","Ausschließlich KapII → verdeckte Einlage; keine unmittelbare §23-Veräußerung aus dieser Variante ableiten.","Mischfall nach Wertrelation entgeltlich/unentgeltlich aufteilen und Anschaffungskosten proportional zuordnen."],
    normchain:["§ 23 EStG","§ 6 Abs. 1 Nr. 5 EStG","BMF 26.07.2016 IV C 6 - S 2178/09/10001"],
    merksatz:"Dasselbe Grundstück kann je nach Gegenbuchung Veräußerung, Einlage oder Mischfall sein.",
  },
  {
    id:23, sourceTag:3, area:"Uebertragung", title:"§ 6 Abs. 5 EStG: Überführung, Übertragung und zwingende Buchwertfortführung",
    law:"§ 6 Abs. 5 S. 1–3 EStG · § 6 Abs. 6 S. 4 EStG · BMF 08.12.2011", difficulty:"Kernnorm", minutes:50,
    sourcePages:[3,4], capturePages:["95–132"], visual:"sechs5-system",
    intro:[
      "Mit dem Wechsel vom Privat- zum Betriebsvermögen endet das allgemeine Einlageschema; für Überführungen und Übertragungen innerhalb betrieblicher Vermögenssphären übernimmt § 6 Abs. 5 EStG die Steuerneutralität durch Buchwertfortführung.",
      "Die Tagesnotiz trennt Satz 1/2 (Überführung ohne Rechtsträgerwechsel) von Satz 3 (Übertragung mit Rechtsträgerwechsel). Bei einer Überführung zwischen eigenen Betriebsvermögen bzw. eigenem Betriebs- und Sonderbetriebsvermögen ist die Buchwertfortführung zwingend, sofern die Besteuerung der stillen Reserven gesichert bleibt.",
      "Die Einheitsfassung zeigt ergänzend das BMF-Schreiben vom 08.12.2011 zu Zweifelsfragen des § 6 Abs. 5 EStG. Für Satz-3-Fälle wird die Buchwertfortführung als Spezialregel behandelt; die Mitschrift betont dazu § 6 Abs. 6 S. 4 EStG: Absatz 5 bleibt unberührt.",
    ],
    goals:["Satz 1/2 und Satz 3 strukturell unterscheiden","Buchwertfortführung als zwingende Bewertungsfolge erkennen","§ 6 Abs. 6 S. 4 als Vorrangregel einordnen","Satz-3-Nummern als eigenständige Übertragungstatbestände lesen"],
    scheme:["Ausgangs- und Zielvermögen bestimmen.","Kein Rechtsträgerwechsel → Satz 1 oder Satz 2 prüfen.","Rechtsträgerwechsel → Satz 3 und passende Nummer prüfen.","Buchwertfortführung anwenden, wenn Tatbestand erfüllt und Besteuerung stiller Reserven gesichert.","§ 6 Abs. 6 nur nachrangig prüfen; § 6 Abs. 6 S. 4 hält Absatz 5 ausdrücklich unberührt."],
    normchain:["§ 6 Abs. 5 S. 1 EStG","§ 6 Abs. 5 S. 2 EStG","§ 6 Abs. 5 S. 3 EStG","§ 6 Abs. 6 S. 4 EStG","BMF 08.12.2011 IV C 6 - S 2241/10/10002, BStBl I 1279"],
    sourceNotes:["Die Einheitsfassung blendet das BMF-Schreiben vom 08.12.2011 „Zweifelsfragen zur Überführung und Übertragung von einzelnen Wirtschaftsgütern nach § 6 Absatz 5 EStG“ ein und verwendet es für die nachfolgenden Beispiele."],
    merksatz:"§ 6 Abs. 5 ist die Spezialspur für betriebliche Einzelwirtschaftsgüter: Tatbestand zuerst, Buchwertfolge unmittelbar danach.",
  },
  {
    id:24, sourceTag:3, area:"Uebertragung", title:"§ 6 Abs. 5 S. 4 EStG: Sperrfrist oder negative Ergänzungsbilanz",
    law:"§ 6 Abs. 5 S. 3, S. 4 EStG", difficulty:"Klausurpflicht", minutes:44,
    sourcePages:[4,5], capturePages:["133–232"], visual:"sperrfrist", originalCaseId:"persg-fall-9",
    intro:[
      "Im Beispiel überträgt A ein Grundstück aus seinem Sonderbetriebsvermögen (Buchwert 80.000 €, Teilwert 150.000 €) auf das Gesamthandsvermögen der A&B-OHG. Bei Gutschrift auf Kapitalkonto I ist der Vorgang zwar tauschähnlich, § 6 Abs. 5 S. 3 Nr. 2 EStG erzwingt jedoch die Buchwertfortführung.",
      "Die Quelle zeigt zwei Techniken: Entweder bucht die Gesamthand unmittelbar den Buchwert – dann ist die Sperrfrist des § 6 Abs. 5 S. 4 zu prüfen. Oder die Gesamthand bucht den Teilwert und eine negative Ergänzungsbilanz des A von 70.000 € ordnet die alten stillen Reserven vollständig A zu; dann greift nach der dargestellten Ausnahme die Sperrfrist nicht.",
      "Bei ausschließlicher Gutschrift auf Kapitalkonto II liegt in der Mitschrift kein Tausch vor; gleichwohl bleibt Satz 3 einschlägig und Satz 4 muss anschließend geprüft werden.",
    ],
    goals:["Buchwert- und Ergänzungsbilanztechnik unterscheiden","Satz 4 nach jedem Satz-3-Fall zwingend prüfen","negative Ergänzungsbilanz als Reservenzuordnung verstehen","§6 Abs.6 nicht bei einer reinen Einlage ohne Tausch zitieren"],
    scheme:["Tatbestand des § 6 Abs. 5 S. 3 feststellen.","Zwingende Buchwertfortführung bestimmen.","Technik wählen/aus Sachverhalt ablesen: GHB zum Buchwert oder GHB zum Teilwert + negative Ergänzungsbilanz.","Satz 4 prüfen: Sperrfrist oder Ausnahme wegen vollständiger Reservenzuordnung durch Ergänzungsbilanz.","Folgeveräußerungen während der Sperrfrist gesondert würdigen."],
    normchain:["§ 6 Abs. 5 S. 3 Nr. 2 EStG","§ 6 Abs. 5 S. 4 EStG","§ 6 Abs. 6 S. 4 EStG"],
    merksatz:"Wer Satz 3 sagt, muss auch Satz 4 sagen.",
  },
  {
    id:25, sourceTag:3, area:"Uebertragung", title:"Teilentgeltliche Übertragung und Schuldübernahme: strenge Trennungstheorie",
    law:"§ 6 Abs. 5 S. 3 EStG · BMF 08.12.2011 Rz. 15", difficulty:"Rechenklassiker", minutes:56,
    sourcePages:[5,6], capturePages:["233–324"], visual:"trennung", originalCaseId:"persg-fall-10",
    intro:[
      "Die N-GmbH überträgt ein Grundstück aus ihrem Sonderbetriebsvermögen auf die OHG. Buchwert 400.000 €, stille Reserven 200.000 €, gemeiner Wert 600.000 €. Die OHG übernimmt 300.000 € Darlehensschuld; zusätzlich werden 200.000 € auf einem Gesellschaftsrechtskonto gutgeschrieben.",
      "Die Mitschrift behandelt die Schuldübernahme als entgeltliche Gegenleistung und trennt nach der strengen Trennungstheorie. 300.000 € Gegenleistung entsprechen 50 % des gemeinen Werts. Der entgeltliche Anteil realisiert 100.000 € Gewinn (300.000 € ./. 200.000 € anteiliger Buchwert); der andere 50-%-Teil wird mit 200.000 € Buchwert fortgeführt. Der Gesamtansatz bei der OHG beträgt damit 500.000 €.",
      "Die Einheitsfassung ergänzt das BMF-Beispiel zu Rz. 15: PKW Buchwert 1.000 €, Verkehrswert 10.000 €, übernommene Schuld 3.000 €. Entgeltlicher Anteil 30 %, unentgeltlicher Anteil 70 %; Gewinn 2.700 €, Ansatz der OHG 3.700 €.",
    ],
    goals:["Schuldübernahme als Gegenleistung erkennen","Entgeltquote aus Gegenleistung/Verkehrswert berechnen","Buchwert proportional auf entgeltlichen und unentgeltlichen Anteil verteilen","BMF-Rz.-15-Beispiel als Kontrollrechnung nutzen"],
    scheme:["Verkehrswert und sämtliche Gegenleistungen bestimmen.","Entgeltquote = Gegenleistung / Verkehrswert.","Entgeltlichem Anteil den proportionalen Buchwert zuordnen und Gewinn ermitteln.","Unentgeltlichen/§6-Abs.-5-Anteil mit dem anteiligen Buchwert fortführen.","Erwerberansatz aus entgeltlicher Gegenleistung + fortgeführtem Buchwertanteil bilden."],
    normchain:["§ 6 Abs. 5 S. 3 EStG","BMF 08.12.2011, Rz. 15"],
    sourceNotes:["Die Einheitsfassung zeigt das BMF-Beispiel mit PKW (BW 1.000 €, Verkehrswert 10.000 €, Schuld 3.000 €) ausdrücklich unter der Überschrift „Trennungstheorie“."],
    merksatz:"Schuldübernahme ist Entgelt: Quote bilden, Buchwert proportional teilen, nur den entgeltlichen Anteil aufdecken.",
  },
  {
    id:26, sourceTag:3, area:"Uebertragung", title:"§ 6 Abs. 5 S. 3 Nr. 4: Gesamthand zu Gesamthand bei identischen Mitunternehmern",
    law:"§ 6 Abs. 5 S. 3 Nr. 4 EStG", difficulty:"Spezialtatbestand", minutes:28,
    sourcePages:[6], capturePages:["325–344"], visual:"nr4-identisch",
    intro:[
      "Die Tagesnotiz ergänzt den vierten Satz-3-Tatbestand: die unentgeltliche Übertragung eines Einzelwirtschaftsguts zwischen den Gesamthandsvermögen verschiedener Mitunternehmerschaften derselben, identisch beteiligten Mitunternehmer.",
      "Die Zeichnung zeigt zwei Personengesellschaften, an denen A und B jeweils zu 50 % beteiligt sind. Entscheidend ist damit nicht nur Personenidentität, sondern auch die identische Beteiligungsstruktur, wie sie die Quelle ausdrücklich hervorhebt.",
    ],
    goals:["Nr. 4 von Nr. 1–3 abgrenzen","Personen- und Beteiligungsidentität prüfen","unentgeltliche Gesamthand-zu-Gesamthand-Übertragung erkennen"],
    scheme:["Ausgangs- und Ziel-Gesamthandsvermögen verschiedener Mitunternehmerschaften feststellen.","Mitunternehmer auf beiden Seiten vergleichen.","Beteiligungsquoten vergleichen.","Unentgeltlichkeit prüfen.","Bei identischer Beteiligung § 6 Abs. 5 S. 3 Nr. 4 anwenden und anschließend Satz 4/Statusregeln mitprüfen."],
    normchain:["§ 6 Abs. 5 S. 3 Nr. 4 EStG","§ 6 Abs. 5 S. 4 EStG"],
    merksatz:"Nr. 4 verlangt dieselben Mitunternehmer in identischer Beteiligung – nicht bloß ähnliche Gesellschafterkreise.",
  },
  {
    id:27, sourceTag:3, area:"Uebertragung", title:"§ 6 Abs. 5 S. 5–7: Körperschaftsbeteiligung und Vermeidung der Statusverbesserung",
    law:"§ 6 Abs. 5 S. 5–7 EStG", difficulty:"Statusregel", minutes:46,
    sourcePages:[7,8], capturePages:["345–365"], visual:"status-s5", originalCaseId:"persg-fall-12",
    intro:[
      "Die Mitschrift bezeichnet die Sätze 5–7 als Regeln zur Vermeidung einer Statusverbesserung. In Satz-3-Fällen wird der Teilwert angesetzt, soweit durch die Übertragung ein Anteil einer Körperschaft, Personenvereinigung oder Vermögensmasse am übertragenen Wirtschaftsgut unmittelbar oder mittelbar begründet oder erhöht wird.",
      "Beispiel: A hält 90 %, die B-GmbH 10 % an der OHG. A überträgt ein Grundstück aus seinem SBV (BW 80.000 €, TW 150.000 €) unentgeltlich in die Gesamthand. Für A werden 90 % des Buchwerts = 72.000 € fortgeführt; der 10-%-Körperschaftsanteil wird mit 15.000 € Teilwert angesetzt. Gesamtsteuerwert 87.000 €, Gewinn 7.000 €. Bei GHB-Ansatz 150.000 € ergibt sich eine negative Ergänzungsbilanz von 63.000 €.",
      "Die in der Einheitsfassung eingeblendete Gesetzesfassung zeigt außerdem Satz 6 (rückwirkender Teilwert, wenn innerhalb von sieben Jahren ein solcher Körperschaftsanteil aus anderem Grund entsteht/steigt) und Satz 7 (entsprechender Statuswechsel zwischen Körperschaften).",
    ],
    goals:["Satz 5 unmittelbar beim Transfer prüfen","Buchwert- und Teilwertanteil bei Körperschaftsbeteiligung berechnen","Siebenjahresregel des Satzes 6 erkennen","Satz 7 als weiteren Statuswechsel-Tatbestand mitprüfen"],
    scheme:["Satz-3-Übertragung feststellen.","Prüfen, ob Körperschaft/Personenvereinigung/Vermögensmasse unmittelbar oder mittelbar am Wirtschaftsgut beteiligt wird bzw. Beteiligung steigt.","Betroffenen Anteil zum Teilwert, übrigen begünstigten Anteil zum Buchwert ansetzen.","Satz 6: siebenjährige Nachbeobachtung auf späteren Anteilserwerb/-anstieg.","Satz 7: Wechsel zu einer anderen Körperschaft/vergleichbarer Statuswechsel prüfen."],
    normchain:["§ 6 Abs. 5 S. 5 EStG","§ 6 Abs. 5 S. 6 EStG","§ 6 Abs. 5 S. 7 EStG"],
    merksatz:"Nach Satz 3 nie bei Satz 4 stehen bleiben: Beteiligung von Körperschaften löst zusätzlich die Statusprüfung der Sätze 5–7 aus.",
  },
  {
    id:28, sourceTag:3, area:"Uebertragung", title:"Umsatzsteuerlicher Querverweis bei Übertragung gegen Gesellschaftsrechte",
    law:"§ 3 Abs. 12 S. 2 UStG · § 3 Abs. 7 UStG · § 10 Abs. 2 UStG", difficulty:"Querverweis", minutes:20,
    sourcePages:[8], capturePages:["366–370"], visual:"ust-transfer",
    intro:[
      "Auf Seite 8 wechselt die Unterrichtsnotiz kurz zur Umsatzsteuer: A überträgt einen PKW aus seinem Sonderbetriebsvermögen auf die A&B-OHG und erhält eine Gutschrift auf Kapitalkonto I. Die Notiz verweist für die umsatzsteuerliche Prüfung auf § 3 Abs. 12 S. 2, § 3 Abs. 7 und § 10 Abs. 2 UStG.",
      "Die Quelle führt die umsatzsteuerliche Lösung an dieser Stelle nicht vollständig aus. Deshalb wird dieser Campus-Baustein bewusst als Querverweis geführt und ergänzt keine nicht in den Unterlagen enthaltene Endlösung.",
    ],
    goals:["Ertragsteuer und Umsatzsteuer als getrennte Prüfungen erkennen","die von der Quelle genannten USt-Normen auffinden","keine ertragsteuerliche Buchwertfolge automatisch auf die USt übertragen"],
    scheme:["Ertragsteuerliche Übertragung nach § 6 Abs. 5 EStG separat lösen.","Für die USt den von der Quelle markierten Leistungsaustausch-/Tauschpfad öffnen.","§ 3 Abs. 12 S. 2, § 3 Abs. 7 und § 10 Abs. 2 UStG prüfen.","Nur aus weiteren USt-Unterlagen eine abschließende USt-Lösung ergänzen."],
    normchain:["§ 3 Abs. 12 S. 2 UStG","§ 3 Abs. 7 UStG","§ 10 Abs. 2 UStG"],
    merksatz:"§ 6 Abs. 5 löst die Ertragsteuer – die Umsatzsteuer bleibt ein eigener Prüfungskreis.",
  },
  {
    id:29, sourceTag:3, area:"Uebertragung", title:"Gesamtfall A&B-OHG: Eröffnungsbilanz, Ergänzungsbilanz und AfA-Korrektur",
    law:"§ 6 Abs. 5 S. 3 EStG · § 7 Abs. 4 EStG · Ergänzungsbilanz", difficulty:"Gesamtfall", minutes:64,
    sourcePages:[8,9,10], capturePages:["371–457","459"], visual:"gesamtfall-afa", originalCaseId:"persg-fall-13",
    intro:[
      "Der Abschlussfall verbindet die Transferregeln mit der Bilanztechnik. A und B sind je zu 50 % an der A&B-OHG beteiligt. A bringt ein Gebäude auf fremdem Grund aus seinem Einzelunternehmen ein; B bringt ein Grundstück aus dem Privatvermögen sowie 70.000 € Geld ein. Die OHG trägt zusätzlich Übertragungsnebenkosten.",
      "Die Gesamthands-Eröffnungsbilanz wird mit Verkehrswerten/Nebenkosten aufgebaut: Grund und Boden 170.000 €, Gebäude 260.000 €, Bank 70.000 €; Bilanzsumme 500.000 €. A erhält eine negative Ergänzungsbilanz von 100.000 € auf das Gebäude, damit seine zwingende Buchwertfortführung erhalten bleibt. B realisiert aus seinem privaten Grundstück nach der Rechnung der Mitschrift 50.000 € Gewinn.",
      "Für die AfA zeigt die Quelle eine typische Ergänzungsbilanztechnik: GHB-AfA 260.000 € × 3 % = 7.800 €. Die steuerlich richtige Gesamt-AfA beträgt aufgrund historischer HK 200.000 € zuzüglich 40.000 € nachträglicher HK und 4-%-Satz 9.600 €. Die Differenz 1.800 € wird als Mehr-AfA in der Ergänzungsbilanz korrigiert; der negative Ergänzungsbilanzwert steigt auf 101.800 €.",
    ],
    goals:["Transferfolgen beider Gesellschafter getrennt lösen","Eröffnungs-GHB aus Verkehrswerten und Nebenkosten aufbauen","negative Ergänzungsbilanz für A herleiten","GHB-AfA und richtige steuerliche AfA vergleichen","Mehr-AfA 1.800 € korrekt in der Ergänzungsbilanz erfassen"],
    scheme:["A und B jeweils separat nach Herkunft und Gegenleistung prüfen.","GHB-Eröffnungswerte einschließlich Übertragungsnebenkosten bilden.","Für A die Buchwertfortführung durch negative Ergänzungsbilanz sicherstellen.","GHB-AfA aus dem dortigen Wertansatz bestimmen.","Historische steuerliche AfA-Bemessungsgrundlage/fortgeltenden AfA-Satz bestimmen.","Differenz als Mehr-/Minder-AfA der Ergänzungsbilanz korrigieren."],
    normchain:["§ 6 Abs. 5 S. 3 Nr. 1 EStG","§ 6 Abs. 6 S. 4 EStG","§ 7 Abs. 4 EStG","H 7.3 EStH"],
    merksatz:"Technik Ergänzungsbilanz: AfA der GHB ermitteln, richtige AfA ermitteln, Differenz stumpf korrigieren.",
  }
);

persgFaelle.push(
  {
    id:"persg-fall-8", nr:8, sourceTag:3, title:"PV-Grundstück: Kapitalkonto I, Kapitalkonto II und 75/25-Mischfall", sourcePages:[1,2,3], capturePages:["45–94"], moduleIds:[21,22], law:"§ 23 EStG · § 6 Abs. 1 Nr. 5 EStG",
    facts:["A überträgt 2025 ein Grundstück aus dem Privatvermögen auf die A&B-OHG (A 90 %, B 10 %). Anschaffungskosten 2018: 80.000 €; Teilwert/gemeiner Wert: 150.000 €.","Variante a: Gutschrift 100.000 € Kapitalkonto I + 50.000 € gesamthänderische Rücklage. Variante b: ausschließlich 150.000 € Kapitalkonto II. Variante c: 112.500 € Gesellschaftsrechte + 37.500 € unentgeltlicher Anteil."],
    tasks:["Varianten nach Gegenleistung qualifizieren.","Gewinn von A ermitteln.","Wertansatz/Buchung in der OHG bestimmen."],
    solution:["Variante a wird in der Quelle insgesamt als tauschähnlicher Vorgang gegen Gesellschaftsrechte behandelt: 150.000 € ./. 80.000 € = 70.000 € Gewinn; OHG-Ansatz 150.000 €.","Variante b: ausschließliche Gutschrift auf Kapitalkonto II vermittelt keine Gesellschaftsrechte; verdeckte Einlage, Ansatz nach § 6 Abs. 1 Nr. 5 EStG mit 150.000 €; keine unmittelbare §23-Veräußerung in der dargestellten Variante.","Variante c: 75 % entgeltlich / 25 % unentgeltlich. 112.500 € ./. 60.000 € anteilige AK = 52.500 € Gewinn auf dem entgeltlichen Teil."],
    result:"Variante a: 70.000 € Gewinn; b: verdeckte Einlage; c: 52.500 € Gewinn bei 75/25-Trennung.",
  },
  {
    id:"persg-fall-9", nr:9, sourceTag:3, title:"SBV-Grundstück → GHB: Satz 3, Satz 4 und Ergänzungsbilanz", sourcePages:[4,5], capturePages:["133–232"], moduleIds:[23,24], law:"§ 6 Abs. 5 S. 3 Nr. 2, S. 4 EStG",
    facts:["A überträgt ein Grundstück aus seinem Sonderbetriebsvermögen in das Gesamthandsvermögen der A&B-OHG. Buchwert 80.000 €, Teilwert 150.000 €.","Variante a: Gutschrift auf Kapitalkonto I. Variante b: ausschließliche Gutschrift auf Kapitalkonto II."],
    tasks:["Bewertung nach § 6 Abs. 5 bestimmen.","Sperrfrist des Satzes 4 prüfen.","Alternative Technik mit negativer Ergänzungsbilanz darstellen."],
    solution:["§ 6 Abs. 5 S. 3 Nr. 2 erzwingt die Buchwertfortführung. Bei KapI liegt zwar ein tauschähnlicher Vorgang vor; § 6 Abs. 6 verdrängt Absatz 5 wegen Satz 4 nicht.","GHB unmittelbar zu 80.000 €: Satz-4-Sperrfrist prüfen.","GHB 150.000 € plus negative Ergänzungsbilanz A -70.000 €: steuerlicher Gesamtbuchwert 80.000 €; nach der in der Quelle dargestellten Ausnahme keine Sperrfrist, weil die alten stillen Reserven A zugeordnet bleiben.","Nur KapII: kein Tausch; trotzdem Satz 3 und anschließend Satz 4 prüfen."],
    result:"Buchwert 80.000 € bleibt steuerlich erhalten; Satz 4 entscheidet über Sperrfrist bzw. Ergänzungsbilanz-Ausnahme.",
  },
  {
    id:"persg-fall-10", nr:10, sourceTag:3, title:"N-GmbH: Schuldübernahme und strenge Trennungstheorie", sourcePages:[5,6], capturePages:["233–324"], moduleIds:[25], law:"§ 6 Abs. 5 S. 3 EStG · BMF 08.12.2011",
    facts:["N-GmbH überträgt ein Grundstück aus dem Sonderbetriebsvermögen auf die OHG. Buchwert 400.000 €, stille Reserven 200.000 €, gemeiner Wert 600.000 €.","Die OHG übernimmt eine Darlehensschuld von 300.000 € und gewährt zusätzlich Gesellschaftsrechte von 200.000 €."],
    tasks:["Entgeltquote bestimmen.","Gewinn des entgeltlichen Teils berechnen.","Erwerberansatz der OHG ermitteln."],
    solution:["300.000 € Schuldübernahme / 600.000 € gemeiner Wert = 50 % entgeltlicher Teil.","Anteiliges Buchwertvolumen des entgeltlichen Teils: 200.000 €. Gewinn: 300.000 € ./. 200.000 € = 100.000 €.","Der übrige 50-%-Teil wird mit 200.000 € Buchwert fortgeführt. OHG-Ansatz: 300.000 € entgeltlicher Anteil + 200.000 € fortgeführter Anteil = 500.000 €."],
    result:"50/50-Trennung; Gewinn 100.000 €; steuerlicher Grundstücksansatz der OHG 500.000 €.",
  },
  {
    id:"persg-fall-11", nr:11, sourceTag:3, title:"BMF Rz. 15: PKW, Schuldübernahme und Trennungstheorie", sourcePages:[6], capturePages:["248–250","282"], moduleIds:[25], law:"BMF 08.12.2011 Rz. 15 · § 6 Abs. 5 S. 3 EStG",
    facts:["Die in der Einheitsfassung eingeblendete BMF-Rz. 15 verwendet einen PKW mit Buchwert 1.000 € und Verkehrswert 10.000 €. Bei der Übertragung übernimmt die Personengesellschaft eine Verbindlichkeit von 3.000 €."],
    tasks:["Entgeltlichen und unentgeltlichen Anteil bestimmen.","Gewinn des Übertragenden berechnen.","Wertansatz bei der Personengesellschaft bestimmen."],
    solution:["3.000 € / 10.000 € = 30 % entgeltlich, 70 % unentgeltlich.","Entgeltlicher Buchwertanteil 300 €; Gewinn 3.000 € ./. 300 € = 2.700 €.","Ansatz bei der Personengesellschaft: 3.000 € Gegenleistung + 700 € fortgeführter Buchwert = 3.700 €."],
    result:"30/70-Trennung; Gewinn 2.700 €; Erwerberansatz 3.700 €.",
  },
  {
    id:"persg-fall-12", nr:12, sourceTag:3, title:"Statusverbesserung: A 90 % / B-GmbH 10 %", sourcePages:[7,8], capturePages:["345–365"], moduleIds:[27], law:"§ 6 Abs. 5 S. 5–7 EStG",
    facts:["A hält 90 %, die B-GmbH 10 % an der A&B-OHG. A überträgt ein Grundstück aus seinem SBV unentgeltlich in das Gesamthandsvermögen. Buchwert 80.000 €, Teilwert 150.000 €."],
    tasks:["Satz 5 anwenden.","Steuerlichen Gesamtansatz und Gewinn bestimmen.","Ergänzungsbilanz bei einem GHB-Teilwertansatz ableiten."],
    solution:["90 % des Buchwerts: 72.000 € Buchwertfortführung für A.","10-%-Körperschaftsanteil: 15.000 € Teilwert statt 8.000 € Buchwertanteil; Gewinn 7.000 €.","Steuerlicher Gesamtansatz 87.000 €. Bei GHB 150.000 € ist eine negative Ergänzungsbilanz von 63.000 € erforderlich."],
    result:"Steuerwert 87.000 €, Gewinn 7.000 €, negative Ergänzungsbilanz 63.000 €; Sätze 6/7 für spätere Statusänderungen mitprüfen.",
  },
  {
    id:"persg-fall-13", nr:13, sourceTag:3, title:"Gesamtfall A&B-OHG: Transfer, Eröffnungsbilanz und AfA", sourcePages:[8,9,10], capturePages:["371–457","459"], moduleIds:[29], law:"§ 6 Abs. 5 EStG · § 7 Abs. 4 EStG",
    facts:["A und B sind 2025 je zu 50 % an der A&B-OHG beteiligt. A bringt ein Gebäude auf fremdem Grund aus seinem Einzelunternehmen ein: BW 120.000 €, historische HK 200.000 €, AfA-Satz 4 %, gemeiner Wert 220.000 €; die OHG trägt 40.000 € Übertragungsnebenkosten.","B bringt ein Grundstück aus dem Privatvermögen ein: AK 2020 100.000 €, Teilwert 150.000 €, außerdem 70.000 € Geld; die OHG trägt 20.000 € Nebenkosten."],
    tasks:["Transferfolgen für A und B bestimmen.","Eröffnungs-GHB und Ergänzungsbilanz A aufstellen.","AfA 2025 in GHB und Ergänzungsbilanz abstimmen."],
    solution:["B: Veräußerungspreis der Grundstückseinbringung nach der Mitschrift 220.000 € abzüglich 70.000 € Geld = 150.000 €; ./. AK 100.000 € → Gewinn 50.000 €.","Eröffnungs-GHB: Grund und Boden 170.000 €, Gebäude 260.000 €, Bank 70.000 € = 500.000 €. Passiv: KapI A 140.000 €, KapI B 140.000 €, gesamthänderische Rücklage 160.000 €, sonstige Verbindlichkeiten 60.000 €.","Negative Ergänzungsbilanz A: Gebäude -100.000 €. GHB-AfA: 260.000 € × 3 % = 7.800 €; GHB-Buchwert 31.12. = 252.200 €.","Richtige AfA: historische HK 200.000 € + 40.000 € nachträgliche HK = 240.000 € × 4 % = 9.600 €. Mehr-AfA Ergänzungsbilanz 1.800 €; negativer Ergänzungsbilanzwert 31.12. = 101.800 €."],
    result:"GHB 500.000 €; B-Gewinn 50.000 €; GHB-AfA 7.800 €, richtige AfA 9.600 €, Mehr-AfA 1.800 €.",
  }
);

persgSchemata.push(
  { id:"transfer-master", title:"Einzel-WG: Privatvermögen → Betriebsvermögen", law:"§§ 4, 6, 17, 20, 23 EStG", moduleIds:[21,22], visual:"transfer-master" },
  { id:"sechs5-system", title:"§ 6 Abs. 5 EStG – Satz 1/2 vs. Satz 3", law:"§ 6 Abs. 5 EStG", moduleIds:[23], visual:"sechs5-system" },
  { id:"sperrfrist-s4", title:"Satz 4: Sperrfrist oder negative Ergänzungsbilanz", law:"§ 6 Abs. 5 S. 4 EStG", moduleIds:[24], visual:"sperrfrist" },
  { id:"trennungstheorie", title:"Schuldübernahme / strenge Trennungstheorie", law:"BMF 08.12.2011 Rz. 15", moduleIds:[25], visual:"trennung" },
  { id:"nr4-identisch", title:"Gesamthand ↔ Gesamthand identischer Mitunternehmer", law:"§ 6 Abs. 5 S. 3 Nr. 4 EStG", moduleIds:[26], visual:"nr4-identisch" },
  { id:"status-s5", title:"Statusregeln Sätze 5–7", law:"§ 6 Abs. 5 S. 5–7 EStG", moduleIds:[27], visual:"status-s5" },
  { id:"gesamtfall-afa", title:"Ergänzungsbilanz & AfA-Korrektur", law:"§ 6 Abs. 5 · § 7 Abs. 4 EStG", moduleIds:[29], visual:"gesamtfall-afa" },
);

persgQuizfragen.push(
  { q:"Welche drei Grundformen trennt das Tag-3-Schema bei einer Übertragung aus dem Privatvermögen in die Gesamthand?", a:"Veräußerung gegen sonstige Gegenleistung, Übertragung gegen Gesellschaftsrechte und unentgeltliche/verdeckte Einlage." },
  { q:"A überträgt das PV-Grundstück (AK 80.000 €, Wert 150.000 €) voll gegen Gesellschaftsrechte. Wie hoch ist der Gewinn im Unterrichtsfall?", a:"70.000 €." },
  { q:"Wie hoch ist der Gewinn im 75/25-Mischfall mit 112.500 € Gesellschaftsrechten?", a:"52.500 €: 112.500 € ./. 60.000 € anteilige Anschaffungskosten." },
  { q:"Welcher Satz muss nach einem Tatbestand des § 6 Abs. 5 Satz 3 immer mitgeprüft werden?", a:"Satz 4 – die Unterrichtsnotiz formuliert: „Wer Satz 3 sagt, muss auch Satz 4 sagen.“" },
  { q:"Wann zeigt die Quelle bei einem GHB-Teilwertansatz keine Satz-4-Sperrfrist?", a:"Wenn eine negative Ergänzungsbilanz die beim Übertragenden entstandenen stillen Reserven vollständig diesem Gesellschafter zuordnet." },
  { q:"N-GmbH: Wert 600.000 €, übernommene Schuld 300.000 €. Wie groß ist der entgeltliche Anteil?", a:"50 %. Der Unterrichtsfall gelangt zu 100.000 € Gewinn und 500.000 € steuerlichem Erwerberansatz." },
  { q:"BMF-Rz.-15-PKW: BW 1.000 €, Wert 10.000 €, Schuld 3.000 €. Ergebnis?", a:"30 % entgeltlich / 70 % unentgeltlich; Gewinn 2.700 €; Ansatz bei der Personengesellschaft 3.700 €." },
  { q:"Was verlangt § 6 Abs. 5 Satz 3 Nr. 4 in der Tag-3-Quelle?", a:"Unentgeltliche Übertragung zwischen Gesamthandsvermögen verschiedener Mitunternehmerschaften derselben, identisch beteiligten Mitunternehmer." },
  { q:"Statusfall A 90 % / B-GmbH 10 %, BW 80.000 €, TW 150.000 €: Steuerwert und Gewinn?", a:"Steuerwert 87.000 € und Gewinn 7.000 €; bei GHB 150.000 € negative Ergänzungsbilanz 63.000 €." },
  { q:"Welche AfA-Korrektur ergibt der Gesamtfall?", a:"GHB-AfA 7.800 €, richtige AfA 9.600 €, daher Mehr-AfA 1.800 € in der Ergänzungsbilanz." },
);
