import "./k3-persg-tag3-register.js";
import {
  persgQuelle, persgBereiche, persgBereichName, persgSeitenplan,
  persgModule, persgFaelle, persgSchemata, persgQuizfragen,
} from "./k3-persg-tag1.js";

/* 4. Unterrichtstag Personengesellschaften – 06.08.2026.
   Kernquelle: „4. Tag PersG“ (20 Seiten).
   Begleit-/Einheitsfassung: „Personengesellschaften in Bilanz, 4. Einheit“
   mit 471 physischen Bildschirmframes. Die Einheitsfassung enthält zahlreiche
   identische Scroll-/Standbilder, Quellenaufrufe und technische Zwischenbilder.
   Jede physische Seite 1–471 wird über tag4CaptureRanges lückenlos einem
   Fachcluster bzw. einer technischen Unterbrechung zugeordnet. */

persgQuelle.title = "1. + 2. + 3. + 4. Tag PersG";
persgQuelle.stand = "06.08.2026";
persgQuelle.pages = 83;
persgQuelle.companionPages = 930;
persgQuelle.physicalPages = 1013;
persgQuelle.label = "Unterrichtsnotizen · 1. bis 4. Unterrichtstag Personengesellschaften";
persgQuelle.tags = [
  { tag:1, title:"1. Tag PersG", pages:14, stand:"31.07.2026" },
  { tag:2, title:"2. Tag PersG", pages:39, stand:"04.08.2026" },
  { tag:3, title:"3. Tag PersG", pages:10, stand:"05.08.2026", companion:{ title:"Personengesellschaften in Bilanz, 3. Einheit", pages:459 } },
  { tag:4, title:"4. Tag PersG", pages:20, stand:"06.08.2026", companion:{ title:"Personengesellschaften in Bilanz, 4. Einheit", pages:471 } },
];

if (!persgBereiche.some((b)=>b.id==="UmwStG")) persgBereiche.push({ id:"UmwStG", label:"§ 24 UmwStG & Einbringung" });
persgBereichName.UmwStG = "§ 24 UmwStG & Einbringung";

const tag4PageMap = [
  [1,30,"§ 24 UmwStG: Grundidee, Einbringungsgegenstand und Gegenleistung"],
  [2,31,"Einbringung eines ganzen Betriebs; funktional wesentliche Grundlage und SBV I"],
  [3,32,"Bewertungswahlrecht; gemeiner Wert, Buchwert und begünstigter Einbringungsgewinn"],
  [4,33,"Grundfall und Bruttomethode; Eröffnungsbilanz und AfA-Fortführung"],
  [5,34,"Nettomethode; positive und negative Ergänzungsbilanzen"],
  [6,33,"Grundfall § 24 ohne sonstige Gegenleistung – Sachverhalt"],
  [7,33,"Grundfall – Aufgabenstellung Brutto-/Nettomethode"],
  [8,33,"Grundfall – Lösung, Eröffnungsbilanz und negative Ergänzungsbilanz"],
  [9,33,"Grundfall – AfA Maschine, Gebäude und Firmenwert"],
  [10,33,"Bruttomethode 31.12.2024; Übergang Nettomethode"],
  [11,34,"Nettomethode – Ergänzungsbilanzen A/B und AfA Maschine/Gebäude"],
  [12,34,"Nettomethode – Mehr-/Minder-AfA und Firmenwert"],
  [13,34,"Nettomethode – Ergänzungsbilanzen 31.12.2024"],
  [14,35,"Abwandlung 1: sonstige Gegenleistung bis Buchwert"],
  [15,35,"Abwandlung 1 – Höchstgrenze, Darlehen und SBV I"],
  [16,35,"Abwandlung 1 – Lösung, GHB/ErgBil/Sonderbilanz"],
  [17,36,"Abwandlung 1 Abschluss; Abwandlung 2 über Buchwert"],
  [18,36,"Abwandlung 2 – Höchstgrenze und anteilige Aufdeckung stiller Reserven"],
  [19,36,"Abwandlung 2 – Zwischenwertansatz, Ergänzungsbilanz und AfA"],
  [20,37,"Einbringung von Mitunternehmeranteilen"],
];
for (const [page,moduleId,topic] of tag4PageMap) persgSeitenplan.push({ page:`4/${page}`, tag:4, pdfPage:page, moduleId, topic });

persgQuelle.tag4CaptureRanges = [
  { start:1, end:5, moduleIds:[30], topic:"Start/Überschrift des 4. Unterrichtstags" },
  { start:6, end:36, moduleIds:[21,22,23,24,25,26,27], topic:"Wiederholung: Klausurschema Übertragung einzelner Wirtschaftsgüter und § 6 Abs. 5 EStG" },
  { start:37, end:43, moduleIds:[30], topic:"Klausurtaktik und Übergang von Einzel-WG zur Einbringung nach § 24 UmwStG" },
  { start:44, end:62, moduleIds:[21,23,30], topic:"Wiederholungs-/Quellenframes zur Übertragung und Bewertungsnormen" },
  { start:63, end:75, moduleIds:[30,31], topic:"§ 24 UmwStG: Einbringungsobjekte, Gesellschaftsrechte und funktional wesentliche Betriebsgrundlagen" },
  { start:76, end:97, moduleIds:[30,32], topic:"Gesetzes-/Verwaltungsquellen zu § 24 UmwStG und Bewertungswahlrecht" },
  { start:98, end:138, moduleIds:[31,32], topic:"Grundschema § 24; Bewertungswahlrecht, Buchwert und Einbringungsgewinn" },
  { start:139, end:158, moduleIds:[32], topic:"Quellenrecherche und Rechtsfolgen des Bewertungsansatzes" },
  { start:159, end:240, moduleIds:[33], topic:"Grundfall ohne sonstige Gegenleistung – Bruttomethode, GHB, negative Ergänzungsbilanz und AfA" },
  { start:241, end:319, moduleIds:[34], topic:"Grundfall – Nettomethode, positive/negative Ergänzungsbilanzen und Fortentwicklung" },
  { start:320, end:344, moduleIds:[35], topic:"Abwandlung 1 – Aufgabenstellung und Prüfung sonstige Gegenleistung bis Buchwert" },
  { start:345, end:387, moduleIds:[35], topic:"Abwandlung 1 – GHB, Ergänzungsbilanz, Darlehensforderung und SBV I" },
  { start:388, end:392, moduleIds:[36], topic:"Quellenansichten zur Höchstgrenze sonstiger Gegenleistungen" },
  { start:393, end:428, moduleIds:[36], topic:"Abwandlung 2 – sonstige Gegenleistung über Buchwert, Zwischenwert und AfA-Folgen" },
  { start:429, end:444, moduleIds:[36], topic:"Quellen-/Rechtsansichten zur Abwandlung 2 und § 24 Abs. 2/3 UmwStG" },
  { start:445, end:451, moduleIds:[37], topic:"Übergang zur Einbringung von Mitunternehmeranteilen" },
  { start:452, end:457, moduleIds:[37], topic:"Klausurtechnik-/Hinweisframes zur Einbringung" },
  { start:458, end:458, moduleIds:[], topic:"Technischer Anruf-/Bildschirmframe ohne fachlichen Inhalt" },
  { start:459, end:471, moduleIds:[37], topic:"Einbringung von Mitunternehmeranteilen – Abschluss und Wiederholungsframes" },
];

persgModule.push(
  {
    id:30, sourceTag:4, area:"UmwStG", title:"§ 24 UmwStG: Einbringung in eine Personengesellschaft – Grundschema",
    law:"§ 24 Abs. 1–3 UmwStG", difficulty:"Kernschema", minutes:46, sourcePages:[1], capturePages:["1–5","37–97"], visual:"umw24-master",
    intro:[
      "Tag 4 beginnt mit der Idee des § 24 UmwStG: Ein Betrieb, Teilbetrieb oder Mitunternehmeranteil wird in eine Personengesellschaft eingebracht. Zivilrechtlich werden einzelne Wirtschaftsgüter übertragen; steuerlich wird der Vorgang als Einbringung einer betrieblichen Sachgesamtheit beurteilt.",
      "Als Gegenleistung müssen Gesellschaftsrechte gewährt werden. Die Mitschrift knüpft die Gesellschaftsrechtsgewährung – wie bereits an Tag 2/3 – an die Kapitalkonten und grenzt sonstige Gegenleistungen gesondert ab.",
      "Für die Klausur ist die Reihenfolge entscheidend: begünstigter Einbringungsgegenstand, aufnehmende Personengesellschaft, Gesellschaftsrechte/sonstige Gegenleistung, Bewertungswahlrecht, Einbringungsgewinn und anschließend Bilanz-/AfA-Fortführung.",
    ],
    goals:["Betrieb, Teilbetrieb und Mitunternehmeranteil als begünstigte Einbringungsgegenstände erkennen","§24 von der Einzel-WG-Übertragung nach §6 Abs.5 abgrenzen","Gesellschaftsrechte als notwendige Gegenleistung prüfen","Bewertung und Einbringungsgewinn erst nach dem Tatbestand prüfen"],
    scheme:["Einbringungsgegenstand: Betrieb, Teilbetrieb oder Mitunternehmeranteil?","Einbringung in das Betriebsvermögen einer Personengesellschaft/Mitunternehmerschaft?","Erhält der Einbringende Gesellschaftsrechte?","Sonstige Gegenleistungen zusätzlich feststellen.","Bewertung nach §24 Abs.2 und Gewinnfolge nach §24 Abs.3 prüfen.","AfA-/Rechtsnachfolge nach §24 Abs.4 i.V.m. §23/§12 UmwStG fortführen."],
    normchain:["§ 24 Abs. 1 UmwStG","§ 24 Abs. 2 UmwStG","§ 24 Abs. 3 UmwStG","§ 24 Abs. 4 UmwStG"],
    merksatz:"§ 24 betrifft die betriebliche Sachgesamtheit – nicht bloß ein einzelnes Wirtschaftsgut.",
  },
  {
    id:31, sourceTag:4, area:"UmwStG", title:"Funktional wesentliche Betriebsgrundlagen und Sonderbetriebsvermögen bei § 24",
    law:"§ 24 Abs. 1 UmwStG · § 15 Abs. 1 S. 1 Nr. 2 EStG", difficulty:"Tatbestand", minutes:32, sourcePages:[2], capturePages:["63–75","98–112"], visual:"umw24-sbv",
    intro:[
      "Die Mitschrift hebt eine Besonderheit hervor: Wird eine funktional wesentliche Betriebsgrundlage – etwa ein betrieblich genutztes Grundstück – nicht in das Gesamthandsvermögen übertragen, kann sie im Zusammenhang mit der Einbringung Sonderbetriebsvermögen I des Einbringenden bei der aufnehmenden Personengesellschaft werden.",
      "Für die Frage, ob der ganze Betrieb eingebracht wurde, darf deshalb nicht nur die Gesamthandsbilanz betrachtet werden. Entscheidend ist, ob die funktional wesentlichen Grundlagen im betrieblichen Vermögensverbund der Mitunternehmerschaft erhalten bleiben.",
    ],
    goals:["funktional wesentliche Betriebsgrundlagen identifizieren","GHV und SBV I gemeinsam betrachten","zurückbehaltene Privat-/Betriebspositionen sauber von SBV unterscheiden","Tatbestandsprüfung des §24 vor der Bewertung abschließen"],
    scheme:["Funktional wesentliche Grundlagen des Ausgangsbetriebs bestimmen.","Für jede Grundlage prüfen: GHV, SBV oder außerhalb des betrieblichen Verbunds?","Bei Nutzungsüberlassung an die PersG SBV-I-Qualifikation prüfen.","Erst danach beurteilen, ob der begünstigte Einbringungsgegenstand vollständig übertragen wurde."],
    normchain:["§ 24 Abs. 1 UmwStG","§ 15 Abs. 1 S. 1 Nr. 2 EStG"],
    merksatz:"Für § 24 zählt der betriebliche Verbund aus Gesamthand und Sonderbetriebsvermögen mit.",
  },
  {
    id:32, sourceTag:4, area:"UmwStG", title:"Bewertungswahlrecht nach § 24 Abs. 2: gemeiner Wert, Buchwert und Zwischenwert",
    law:"§ 24 Abs. 2 S. 1–3 UmwStG · § 24 Abs. 3 UmwStG", difficulty:"Bewertung", minutes:45, sourcePages:[3], capturePages:["76–158"], visual:"umw24-bewertung",
    intro:[
      "Die Personengesellschaft setzt die eingebrachten Wirtschaftsgüter grundsätzlich mit dem gemeinen Wert an. Auf Antrag ist – bei erfüllten gesetzlichen Voraussetzungen – Buchwert- oder Zwischenwertansatz möglich.",
      "Der Wertansatz der Personengesellschaft gilt für den Einbringenden als Veräußerungspreis. Damit entscheidet der gewählte Ansatz zugleich über die Höhe des Einbringungsgewinns.",
      "Die Quelle trennt einen begünstigten und einen nicht begünstigten Teil des Einbringungsgewinns und ordnet anschließend die Fortführung der Bilanzwerte und AfA an.",
    ],
    goals:["gemeinen Wert als Grundansatz erkennen","Buch-/Zwischenwertwahlrecht prüfen","Wertansatz als Veräußerungspreis des Einbringenden verstehen","Bewertung einheitlich in GHB/Sonderbereich anwenden"],
    scheme:["Gemeine Werte der eingebrachten Wirtschaftsgüter feststellen.","Antrag und Voraussetzungen des §24 Abs.2 S.2 prüfen.","Zulässigen Buch- oder Zwischenwert bestimmen.","Wertansatz als Veräußerungspreis nach §24 Abs.3 verwenden.","Begünstigung und Folgebewertung/AfA anschließen."],
    normchain:["§ 24 Abs. 2 S. 1 UmwStG","§ 24 Abs. 2 S. 2 UmwStG","§ 24 Abs. 2 S. 3 UmwStG","§ 24 Abs. 3 UmwStG"],
    merksatz:"Der Ansatz bei der PersG ist zugleich der Veräußerungspreis des Einbringenden.",
  },
  {
    id:33, sourceTag:4, area:"UmwStG", title:"§ 24 ohne sonstige Gegenleistung – Bruttomethode",
    law:"§ 24 Abs. 2–4 UmwStG · § 23 Abs. 1 · § 12 Abs. 3 UmwStG", difficulty:"Bilanztechnik", minutes:60, sourcePages:[4,6,7,8,9,10], capturePages:["159–240"], visual:"umw24-brutto", originalCaseId:"persg-fall-14",
    intro:[
      "Im Grundfall bringt A seinen Betrieb zum 01.01.2024 in die A+B-OHG ein; B zahlt 600.000 € in das Betriebsvermögen der OHG, beide sind zu 50 % beteiligt. Der Buchwert des eingebrachten Betriebs beträgt 300.000 €.",
      "Die Bruttomethode bildet die gemeinen Werte in der Gesamthandsbilanz ab und neutralisiert die Mehrwerte beim Einbringenden über eine negative Ergänzungsbilanz. So bleibt der beantragte Buchwertansatz steuerlich erhalten.",
      "Die Quelle rechnet anschließend die AfA für Maschine, Gebäude und Firmenwert so fort, dass GHB und Ergänzungsbilanz zusammen die Rechtsnachfolge des eingebrachten Einzelunternehmens abbilden.",
    ],
    goals:["Eröffnungs-GHB zu gemeinen Werten aufstellen","negative Ergänzungsbilanz A bilden","AfA Maschine/Gebäude/Firmenwert zwischen GHB und ErgBil abstimmen","Bilanz zum 31.12.2024 fortentwickeln"],
    scheme:["GHB zu gemeinen Werten inklusive Übertragungsnebenkosten aufstellen.","Differenz zum steuerlichen Buchwert des A in negativer Ergänzungsbilanz abbilden.","AfA GHB aus dortigen Ansätzen berechnen.","AfA-Ertrag/Minder-AfA der Ergänzungsbilanz so bestimmen, dass die Gesamt-AfA der Rechtsnachfolge entspricht.","GHB und ErgBil zum 31.12. fortschreiben."],
    normchain:["§ 24 Abs. 2 UmwStG","§ 24 Abs. 3 UmwStG","§ 24 Abs. 4 UmwStG","§ 23 Abs. 1 UmwStG","§ 12 Abs. 3 UmwStG","§ 5 Abs. 2 EStG"],
    merksatz:"Brutto: gemeine Werte in der GHB, Buchwertneutralisierung über die negative Ergänzungsbilanz des Einbringenden.",
  },
  {
    id:34, sourceTag:4, area:"UmwStG", title:"§ 24 ohne sonstige Gegenleistung – Nettomethode",
    law:"§ 24 UmwStG · Ergänzungsbilanztechnik", difficulty:"Bilanztechnik", minutes:58, sourcePages:[5,10,11,12,13], capturePages:["241–319"], visual:"umw24-netto", originalCaseId:"persg-fall-14",
    intro:[
      "Die Nettomethode setzt die Wirtschaftsgüter der Gesamthand näher am beantragten Buchwert an und verteilt die individuellen Mehr-/Minderwerte spiegelbildlich auf negative Ergänzungsbilanz A und positive Ergänzungsbilanz B.",
      "Im Quellenfall beträgt die Eröffnungs-GHB 940.000 €. A und B erhalten jeweils Kapital 450.000 €; für A entsteht eine negative und für B eine positive Ergänzungsbilanz von jeweils 150.000 €.",
      "Maschine, Gebäude und Firmenwert werden anschließend über Mehr-/Minder-AfA der Ergänzungsbilanzen fortentwickelt; beide Ergänzungsbilanzen enden zum 31.12.2024 bei 146.944 €.",
    ],
    goals:["Nettomethode von Bruttomethode unterscheiden","positive/negative Ergänzungsbilanz spiegelbildlich aufstellen","Mehr-/Minder-AfA für A und B rechnen","GHB und beide ErgBilanzen abstimmen"],
    scheme:["GHB mit Buchwert-/Nettomethodenansätzen aufstellen.","Mehrwerte hälftig/gesellschafterbezogen auf B und Minderwerte auf A in Ergänzungsbilanzen verteilen.","AfA der GHB bestimmen.","Mehr-AfA B und Minder-AfA A für Maschine, Gebäude und Firmenwert ergänzen.","Ergänzungsbilanzen zum Jahresende abstimmen."],
    normchain:["§ 24 Abs. 2 UmwStG","§ 24 Abs. 4 UmwStG","§ 23 Abs. 1 UmwStG","§ 12 Abs. 3 UmwStG"],
    merksatz:"Netto: Die Mehrwerte werden zwischen den Gesellschaftern über positive und negative Ergänzungsbilanzen gespiegelt.",
  },
  {
    id:35, sourceTag:4, area:"UmwStG", title:"Sonstige Gegenleistung bis zum Buchwert – Darlehen als SBV I",
    law:"§ 24 Abs. 2 S. 2 Nr. 2 UmwStG · § 15 Abs. 1 S. 1 Nr. 2 EStG", difficulty:"Abwandlung", minutes:46, sourcePages:[14,15,16,17], capturePages:["320–387"], visual:"umw24-gegenleistung", originalCaseId:"persg-fall-15",
    intro:[
      "Abwandlung 1: B zahlt 400.000 € in die OHG; A erhält neben Gesellschaftsrechten eine Darlehensforderung von 200.000 €. A und B sind weiterhin zu je 50 % beteiligt.",
      "Die Mitschrift prüft die Höchstgrenze der sonstigen Gegenleistung. Da die Darlehensforderung die maßgebliche Grenze im Quellenfall nicht überschreitet, bleibt der beantragte Buchwertansatz möglich.",
      "Die Darlehensforderung des A gegen die OHG wird als notwendiges Sonderbetriebsvermögen I behandelt und in einer Sonderbilanz A mit 200.000 € Forderung/200.000 € Kapital gezeigt.",
    ],
    goals:["sonstige Gegenleistung identifizieren","gesetzliche Höchstgrenze prüfen","Darlehensforderung steuerlich als SBV I einordnen","GHB, negative ErgBil und Sonderbilanz nebeneinander aufstellen"],
    scheme:["Gesellschaftsrechte und sonstige Gegenleistung trennen.","Sonstige Gegenleistung mit den Grenzen des §24 Abs.2 S.2 Nr.2 vergleichen.","Bei zulässigem Buchwertantrag GHB/ErgBil nach dem Grundfall aufstellen.","Darlehensforderung A als SBV I in Sonderbilanz erfassen.","Einbringungsgewinn und AfA-Fortführung prüfen."],
    normchain:["§ 24 Abs. 2 S. 2 Nr. 2 UmwStG","§ 24 Abs. 3 UmwStG","§ 15 Abs. 1 S. 1 Nr. 2 EStG"],
    merksatz:"Eine zusätzliche Darlehensforderung ist sonstige Gegenleistung – und beim Gesellschafter regelmäßig zugleich SBV I.",
  },
  {
    id:36, sourceTag:4, area:"UmwStG", title:"Sonstige Gegenleistung über Buchwert – Zwischenwert und anteilige Reservenaufdeckung",
    law:"§ 24 Abs. 2 S. 2 Nr. 2 · § 24 Abs. 3 UmwStG", difficulty:"Rechenklassiker", minutes:54, sourcePages:[17,18,19], capturePages:["388–444"], visual:"umw24-zwischenwert", originalCaseId:"persg-fall-16",
    intro:[
      "Abwandlung 2 erhöht die sonstige Gegenleistung: B zahlt 250.000 € in das Betriebsvermögen; A erhält 250.000 € Gesellschaftsrechte und zusätzlich eine Darlehensforderung von 350.000 €.",
      "Die Mitschrift vergleicht die tatsächliche sonstige Gegenleistung von 350.000 € mit der zulässigen Höchstgrenze von 300.000 €. Der Mehrbetrag von 50.000 € führt dazu, dass stille Reserven anteilig aufzudecken sind.",
      "Im Quellenweg wird der Zwischenwert des eingebrachten Betriebs mit 350.000 € angesetzt. Die Rechnung stellt den Mehrbetrag in Relation zum Unternehmenswert und verteilt die Reserven entsprechend; die AfA-Fortführung wird an den aufgedeckten Anteil angepasst.",
    ],
    goals:["Höchstgrenze sicher bestimmen","Mehrbetrag 50.000 € erkennen","Zwischenwert 350.000 € herleiten","Aufdeckung stiller Reserven und AfA-Folgen in GHB/ErgBil umsetzen"],
    scheme:["Tatsächliche sonstige Gegenleistung 350.000 € feststellen.","Zulässige Höchstgrenze 300.000 € bestimmen.","Mehrbetrag 50.000 € als auslösenden Betrag der Reservenaufdeckung erfassen.","Zwischenwertansatz/Einbringungsgewinn nach Quellenrechnung bestimmen.","GHB, Ergänzungsbilanz und künftige AfA an den Zwischenwert anpassen."],
    normchain:["§ 24 Abs. 2 S. 2 Nr. 2 UmwStG","§ 24 Abs. 2 S. 3 UmwStG","§ 24 Abs. 3 UmwStG"],
    merksatz:"Übersteigt die sonstige Gegenleistung die zulässige Grenze, ist der reine Buchwertansatz nicht mehr möglich; der Quellenfall arbeitet mit Zwischenwert 350.000 €.",
  },
  {
    id:37, sourceTag:4, area:"UmwStG", title:"Einbringung eines Mitunternehmeranteils nach § 24 UmwStG",
    law:"§ 24 Abs. 1 · § 24 Abs. 2 · § 24 Abs. 3 UmwStG", difficulty:"Sonderfall", minutes:44, sourcePages:[20], capturePages:["445–471"], visual:"umw24-muanteil", originalCaseId:"persg-fall-17",
    intro:[
      "Die Schlussseite wechselt vom Betrieb zur Einbringung eines Mitunternehmeranteils. Die Zeichnung zeigt den Anteil eines Mitunternehmers an einer bestehenden OHG und dessen Einbringung in eine neue/übergeordnete Personengesellschaft.",
      "Für die Klausur bleibt die §24-Systematik gleich: begünstigter Mitunternehmeranteil, Gewährung neuer Gesellschaftsrechte, Bewertungswahlrecht und Gewinnfolge. Der Anteil umfasst steuerlich nicht nur das Kapitalkonto der Gesamthand, sondern den gesamten Mitunternehmeranteil einschließlich Ergänzungs- und Sonderbetriebsvermögen, soweit diese zum Mitunternehmeranteil gehören.",
    ],
    goals:["MU-Anteil als Sachgesamtheit erkennen","Gesamthands-, Ergänzungs- und Sonderbereich zusammen betrachten","neue Gesellschaftsrechte als Gegenleistung prüfen","§24-Bewertung auf die Einbringung des MU-Anteils übertragen"],
    scheme:["Bestehende Mitunternehmerstellung und Umfang des MU-Anteils feststellen.","Einbringung des gesamten begünstigten MU-Anteils in die aufnehmende PersG prüfen.","Gewährung neuer Gesellschaftsrechte feststellen.","Bewertungswahlrecht nach §24 Abs.2 prüfen.","Wertansatz als Veräußerungspreis/Einbringungsgewinn nach §24 Abs.3 behandeln."],
    normchain:["§ 24 Abs. 1 UmwStG","§ 24 Abs. 2 UmwStG","§ 24 Abs. 3 UmwStG"],
    merksatz:"Beim MU-Anteil immer den gesamten steuerlichen Mitunternehmeranteil denken – Gesamthand plus Ergänzungs-/Sonderbereich.",
  }
);

persgFaelle.push(
  {
    id:"persg-fall-14", nr:14, sourceTag:4, title:"§ 24 Grundfall: A bringt Einzelunternehmen in A+B-OHG ein", sourcePages:[6,7,8,9,10,11,12,13], moduleIds:[32,33,34], law:"§ 24 UmwStG",
    facts:["A bringt seinen Betrieb zum 01.01.2024 in die A+B-OHG ein. B zahlt 600.000 € in das Betriebsvermögen; A und B sind je zu 50 % beteiligt.","Bilanz 31.12.2023: Maschine 60.000 €, Gebäude 240.000 €, Kapital 300.000 €. Maschine: AK 80.000 €, Anschaffung 01.01.2021, ND 12 Jahre, gemeiner Wert 70.000 €, neue Rest-ND 9 Jahre. Gebäude: HK 400.000 €, Fertigstellung 09/2011, AfA 3 %, gemeiner Wert 500.000 €. Übertragungsnebenkosten 40.000 € trägt die OHG."],
    tasks:["Buchwertantrag beurteilen.","Eröffnungsbilanz einschließlich Ergänzungsbilanzen erstellen.","Bilanzen zum 31.12.2024 fortentwickeln – Alternative a Bruttomethode, Alternative b Nettomethode."],
    solution:["Bruttomethode: GHB 01.01.2024 zu gemeinen Werten inkl. Firmenwert 30.000 €, Maschine 70.000 €, Gebäude 540.000 €, Bank 600.000 €; Kapital A/B je 600.000 €, Verbindlichkeiten 40.000 €. Negative Ergänzungsbilanz A 300.000 €.","AfA GHB: Maschine 7.778 €, Gebäude 16.200 €, Firmenwert 2.000 €; Ergänzungsbilanz neutralisiert auf die fortzuführenden Werte durch 1.110 €, 3.000 € und 2.000 € AfA-Ertrag.","Nettomethode: Eröffnungs-GHB 940.000 €, Kapital A/B je 450.000 €; negative ErgBil A und positive ErgBil B jeweils 150.000 €. Zum 31.12.2024 betragen beide Ergänzungsbilanzkapitale 146.944 €."],
    result:"Buchwertfortführung kann sowohl brutto als auch netto technisch dargestellt werden; GHB und Ergänzungsbilanzen müssen zusammen denselben steuerlichen Wert-/AfA-Verlauf ergeben.",
  },
  {
    id:"persg-fall-15", nr:15, sourceTag:4, title:"Abwandlung 1: 200.000 € Darlehen als sonstige Gegenleistung", sourcePages:[14,15,16,17], moduleIds:[35], law:"§ 24 Abs. 2 S. 2 Nr. 2 UmwStG",
    facts:["A bringt den Betrieb zum 01.01.2024 ein. B zahlt 400.000 € in die OHG. A erhält zusätzlich zu Gesellschaftsrechten eine Darlehensforderung von 200.000 €. A und B sind je zu 50 % beteiligt."],
    tasks:["Zulässigkeit des Buchwertansatzes trotz sonstiger Gegenleistung prüfen.","Eröffnungs-GHB, Ergänzungsbilanz und Sonderbilanz A darstellen."],
    solution:["Die Darlehensforderung ist sonstige Gegenleistung. Im Quellenfall überschreitet sie die maßgebliche Höchstgrenze nicht; der Buchwertantrag bleibt zulässig.","GHB zu gemeinen Werten: Firmenwert 30.000 €, Maschine 70.000 €, Gebäude 540.000 €, Bank 400.000 €; Kapital A/B je 400.000 €, Darlehen A 200.000 €, Verbindlichkeiten 40.000 €.","Negative Ergänzungsbilanz A 300.000 €. Darlehensforderung 200.000 € in der Sonderbilanz A als notwendiges SBV I."],
    result:"Buchwertansatz bleibt möglich; die Darlehensforderung ist zugleich sonstige Gegenleistung und SBV I des A.",
  },
  {
    id:"persg-fall-16", nr:16, sourceTag:4, title:"Abwandlung 2: 350.000 € Darlehen über Buchwert", sourcePages:[17,18,19], moduleIds:[36], law:"§ 24 Abs. 2/3 UmwStG",
    facts:["B zahlt 250.000 € in die OHG. A erhält 250.000 € Gesellschaftsrechte und zusätzlich eine Darlehensforderung von 350.000 €."],
    tasks:["Höchstgrenze der sonstigen Gegenleistung prüfen.","Erforderliche Aufdeckung stiller Reserven und Zwischenwert bestimmen.","Bilanz-/AfA-Folgen darstellen."],
    solution:["Tatsächliche sonstige Gegenleistung 350.000 €; Quellen-Höchstgrenze 300.000 €; Überschreitung 50.000 €.","Die Quellenrechnung führt deshalb zur anteiligen Reservenaufdeckung und zum Ansatz des eingebrachten Betriebs mit 350.000 € statt 300.000 € Buchwert.","Der aufgedeckte Anteil verändert Ergänzungsbilanz und künftige AfA; die Mitschrift zeigt die Fortführung ausgehend vom Zwischenwertansatz."],
    result:"50.000 € oberhalb der Grenze verhindern die reine Buchwertfortführung; Zwischenwert 350.000 €.",
  },
  {
    id:"persg-fall-17", nr:17, sourceTag:4, title:"Einbringung eines Mitunternehmeranteils", sourcePages:[20], moduleIds:[37], law:"§ 24 UmwStG",
    facts:["Die Schlusszeichnung zeigt die Einbringung eines bestehenden Mitunternehmeranteils in eine neue Personengesellschaft gegen Gewährung neuer Gesellschaftsrechte."],
    tasks:["Begünstigten MU-Anteil abgrenzen.","Umfang von Gesamthand, Ergänzungsbilanz und Sonderbetriebsvermögen bestimmen.","Bewertungswahlrecht und Einbringungsgewinn nach §24 prüfen."],
    solution:["Der Mitunternehmeranteil ist ein eigenständiger begünstigter Einbringungsgegenstand des §24 Abs.1 UmwStG.","Für den vollständigen MU-Anteil sind die steuerlich zugehörigen Kapitalkreise mitzudenken.","Anschließend gelten Bewertungswahlrecht und Gewinnfolge des §24 Abs.2/3 entsprechend."],
    result:"MU-Anteil als steuerliche Sachgesamtheit prüfen; nicht nur das sichtbare Gesamthands-Kapitalkonto übertragen.",
  }
);

persgSchemata.push(
  { id:"umw24-master", title:"§ 24 UmwStG – Grundschema Einbringung", law:"§ 24 Abs. 1–4 UmwStG", moduleIds:[30,31,32], visual:"umw24-master" },
  { id:"umw24-brutto", title:"§ 24 – Bruttomethode", law:"§ 24 UmwStG", moduleIds:[33], visual:"umw24-brutto" },
  { id:"umw24-netto", title:"§ 24 – Nettomethode", law:"§ 24 UmwStG", moduleIds:[34], visual:"umw24-netto" },
  { id:"umw24-gegenleistung", title:"§ 24 – sonstige Gegenleistung und Höchstgrenze", law:"§ 24 Abs. 2 S. 2 Nr. 2 UmwStG", moduleIds:[35,36], visual:"umw24-gegenleistung" },
  { id:"umw24-muanteil", title:"Einbringung eines Mitunternehmeranteils", law:"§ 24 Abs. 1 UmwStG", moduleIds:[37], visual:"umw24-muanteil" },
);

persgQuizfragen.push(
  { q:"Welche drei Einbringungsgegenstände nennt § 24 Abs. 1 UmwStG?", a:"Betrieb, Teilbetrieb und Mitunternehmeranteil." },
  { q:"Was ist der Grundansatz der aufnehmenden PersG nach § 24 Abs. 2 S. 1 UmwStG?", a:"Der gemeine Wert; Buch-/Zwischenwert kommen nur über das gesetzliche Wahlrecht auf Antrag in Betracht." },
  { q:"Wie funktioniert die Bruttomethode im Grundfall?", a:"Gemeine Werte in der GHB; die Differenz zum beantragten Buchwert des Einbringenden wird über dessen negative Ergänzungsbilanz neutralisiert." },
  { q:"Welche Ergänzungsbilanzen entstehen in der Nettomethode des Grundfalls?", a:"Negative Ergänzungsbilanz A und positive Ergänzungsbilanz B, jeweils zunächst 150.000 €." },
  { q:"Welche Doppelrolle hat das 200.000-€-Darlehen in Abwandlung 1?", a:"Es ist sonstige Gegenleistung nach § 24 Abs. 2 und zugleich notwendiges Sonderbetriebsvermögen I des A." },
  { q:"Was passiert in Abwandlung 2 bei 350.000 € Darlehen und 300.000 € Quellen-Höchstgrenze?", a:"Die Grenze wird um 50.000 € überschritten; stille Reserven werden anteilig aufgedeckt und der Quellenfall arbeitet mit Zwischenwert 350.000 €." },
);
