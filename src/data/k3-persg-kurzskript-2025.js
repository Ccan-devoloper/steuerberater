import "./k3-persg-tag4-register.js";
import { registerPersGTag5 } from "./k3-persg-tag5-register.js";
import { persgQuelle, persgModule } from "./k3-persg-tag1.js";

registerPersGTag5();

const source = {
  title: "Steuerberater PersG 2025",
  author: "Alexander Horst",
  pdfPages: 16,
  fachPages: "2–16",
};

persgQuelle.kurzskript2025 = source;

const MODULE_KURZSKRIPT_2025 = {
  2: {
    pages: "2–4",
    title: "Abfärbung und gewerbliche Prägung",
    points: [
      "Horizontale Abfärbung: Das Kurzskript stellt für trennbare Tätigkeiten die Bagatellgrenze mit einem gewerblichen Nettoumsatzanteil von höchstens 3 % und höchstens 24.500 € dar (BFH 27.08.2014 – VIII R 6/12).",
      "Vertikale Abfärbung: Bei gewerblichen Beteiligungseinkünften einer vermögensverwaltenden Obergesellschaft behandelt das Kurzskript die Bagatellgrenze als nicht anwendbar (BFH 06.06.2019 – IV R 30/16). Den gewerbesteuerlichen Hinweis stellt die Quelle separat über den Ländererlass vom 01.10.2020 und den Verweis auf BFH 05.09.2023 – IV R 24/20 dar.",
      "Die Fazitfolie trennt horizontal (eine Gesellschaft mit verschiedenen Tätigkeiten) und vertikal (Ober- und Untergesellschaft) und betont, dass positive oder negative gewerbliche Beteiligungseinkünfte für die Abfärbungsprüfung nicht unterschiedlich behandelt werden.",
      "Zur gewerblichen Prägung zeigt das Kurzskript eine GmbH & Co. KG mit Komplementär-GmbH sowie mehrere Varianten zur Geschäftsführungsbefugnis von Gesellschaftern und Nichtgesellschaftern.",
    ],
    crossRefs: [3],
  },
  3: {
    pages: "5",
    title: "Mitunternehmerstellung in einer Freiberuflerpraxis",
    points: [
      "BFH 03.11.2015 – VIII R 63/13: Eine nur umsatzabhängig vergütete Person, die von der Teilhabe an den stillen Reserven ausgeschlossen ist, trägt nur ein schwach ausgeprägtes Mitunternehmerrisiko.",
      "Ein schwaches Risiko kann nach der im Kurzskript wiedergegebenen BFH-Linie nur durch eine besonders ausgeprägte Mitunternehmerinitiative ausgeglichen werden. Daran fehlt es, wenn trotz gemeinsamer Geschäftsführungsbefugnis tatsächlich wesentliche Geschäftsführungsbereiche ausgeschlossen sind.",
      "Der Mitunternehmer ist ein Typusbegriff. Erforderlich ist eine Gesamtwürdigung; die zivilrechtliche Gesellschafterstellung allein genügt nicht.",
    ],
    crossRefs: [2,4],
  },
  4: {
    pages: "5",
    title: "Zweistufige Gewinnermittlung / -verteilung",
    points: [
      "Die Kurzskript-Tabelle beginnt mit dem Gewinn laut Gesamthandsbilanz, zieht Vorweggewinne (Kapitalverzinsung, Haftung, Tätigkeit) ab, verteilt den Restgewinn und berücksichtigt danach steuerliche Korrekturen.",
      "Die Ergänzungsbilanz ist in der Tabelle noch vor dem ausdrücklich als „Stufe II – Gesellschafter“ markierten Sonderbilanzbereich angeordnet. Diese Quellenanordnung wird hier sichtbar gemacht, ohne die bestehende Modulgliederung zu überschreiben.",
      "Im Sonderbilanzbereich werden Gewinn laut Sonderbilanz und außerbilanzielle Korrekturen erfasst; am Ende stehen die Gewinnanteile der Mitunternehmer und der Gewinn der Mitunternehmerschaft.",
    ],
    crossRefs: [5],
  },
  5: {
    pages: "6",
    title: "ABC-OHG: Gewinnverteilung und Kapitalkonten",
    points: [
      "Wiederholungsfall des Kurzskripts: Jahresüberschuss 2023 = 328.000 €; Kapitalkonto I von A/B/C jeweils 100.000 €; Kapitalkonto II zu Jahresbeginn A 500.000 €, B 300.000 €, C 200.000 €.",
      "Entnahmen 2023: A 30.000 €, B 60.000 €, C 0 €. Gewinnverteilung: 8 % Verzinsung der Kapitalkonten II, 24.000 € Vorabgewinn für A wegen Haftungsrisiko, Geschäftsführungsvergütung A 10 % sowie B und C jeweils 5 % des Jahresüberschusses; Restgewinn nach Beteiligungsquote.",
      "Zusatzsachverhalt: Fenster und Türen des Bürogebäudes werden für 120.000 € erneuert. Die OHG hatte die Maßnahme als BGA aktiviert, über zehn Jahre abgeschrieben (12.000 €) und mit 108.000 € zum 31.12.2023 bilanziert. Aufgabe der Quelle: Gewinn korrigieren, verteilen und Kapitalkonten fortentwickeln.",
    ],
    crossRefs: [4,6],
  },
  23: {
    pages: "7",
    title: "§ 6 Abs. 5 EStG – Überblick",
    points: [
      "Sätze 1 und 2: Überführung ohne Rechtsträgerwechsel. Das Kurzskript nennt die Buchwertübernahme bei Entnahme im abgebenden und Einlage im aufnehmenden Betriebsvermögen; eine gleichzeitige Übernahme von Verbindlichkeiten wird hier als unschädlich dargestellt.",
      "Satz 3: Übertragung mit Rechtsträgerwechsel gegen Gewährung/Minderung von Gesellschaftsrechten oder unentgeltlich; der Vorgang wird als Spezialregel und nicht als Veräußerung eingeordnet.",
      "Die Folie stellt § 6 Abs. 5 als nachrangig gegenüber § 6 Abs. 3 und § 24 UmwStG dar und verweist für Satz-3-Fälle auf die besonderen Sperrfristen.",
    ],
    crossRefs: [24,25,26],
  },
  24: {
    pages: "7",
    title: "§ 6 Abs. 5 – Sperrfristen",
    points: [
      "Das Kurzskript verweist für Übertragungen nach Satz 3 ausdrücklich auf die Sperrfristen des § 6 Abs. 5 S. 4–6 EStG und nennt in der Übersicht Zeiträume von drei bzw. sieben Jahren.",
      "Die Sperrfristprüfung folgt in der Kurzskript-Systematik erst nach der Einordnung des Übertragungstatbestands und der Buchwertfolge.",
    ],
    crossRefs: [23,25,27],
  },
  25: {
    pages: "7",
    title: "Teilentgeltlichkeit und Verbindlichkeiten",
    points: [
      "Für Satz-3-Übertragungen bezeichnet die Übersicht die gleichzeitige Übernahme von Verbindlichkeiten als schädlich und verweist damit auf die teilentgeltliche Prüfung.",
      "Die Quelle stellt die damalige Verwaltungsauffassung (BMF 08.12.2011 und 12.09.2013: Trennungstheorie) der BFH-Linie IX R 1/12 („modifizierte“ Trennungstheorie) gegenüber. Dieser Gegensatz wird als Quellenstand sichtbar gehalten und nicht stillschweigend aufgelöst.",
    ],
    crossRefs: [23,24,26],
  },
  26: {
    pages: "7",
    title: "Schwester-Personengesellschaften",
    points: [
      "Die Übersicht greift die Übertragung einzelner Wirtschaftsgüter zwischen den Gesamthandsvermögen von Schwester-Personengesellschaften auf und verweist auf BVerfG 2 BvL 8/13.",
      "Als gesetzliche Folge nennt das Kurzskript § 6 Abs. 5 S. 3 Nr. 4 EStG für diesen Übertragungsweg.",
    ],
    crossRefs: [23,25],
  },
  30: {
    pages: "8",
    title: "§ 24 UmwStG – sonstige Gegenleistung und Höchstgrenze",
    points: [
      "Die Vergleichsfolie zu § 20 Abs. 2 S. 2 Nr. 4 und § 24 Abs. 2 S. 2 Nr. 2 UmwStG stellt die Höchstgrenze für sonstige Gegenleistungen als die für den Einbringenden günstigere Alternative dar: 25 % des Buchwerts des eingebrachten Betriebsvermögens oder 500.000 €, jeweils begrenzt durch den Buchwert des eingebrachten Betriebsvermögens.",
      "Die Tabelle der Quelle verdeutlicht: bis 500.000 € Buchwert kann die sonstige Gegenleistung höchstens den Buchwert erreichen; bei 500.001–2.000.000 € höchstens 500.000 €; oberhalb 2.000.000 € höchstens 25 % des Buchwerts ohne absolute 500.000-€-Grenze.",
    ],
    crossRefs: [32,35,36],
  },
  33: {
    pages: "7, 9",
    title: "§ 24 ohne sonstige Gegenleistung und AfA-Fortführung",
    points: [
      "Grundfall: A bringt seinen Betrieb zum 01.01.2024 in die A+B-OHG ein, B zahlt 600.000 € in das Betriebsvermögen, beide sind zu 50 % beteiligt. Ausgangsbilanz: Maschine 60.000 €, Gebäude 240.000 €, Kapital 300.000 €.",
      "Maschine: Anschaffung 01.01.2021 für 80.000 €, Nutzungsdauer 12 Jahre, gemeiner Wert 70.000 €, neue geschätzte Restnutzungsdauer 9 Jahre. Gebäude: Herstellung 09/2011, HK 400.000 €, AfA 3 %, gemeiner Wert 500.000 €. Übertragungsnebenkosten 40.000 € trägt die OHG. Die Quelle verlangt Brutto- und Nettomethode.",
      "Zusatzfall zur AfA bei Einzelrechtsnachfolge: Gebäude auf fremdem Grund und Boden, HK 400.000 €, AfA 3 %, Buchwert 220.000 €, gemeiner Wert 500.000 €, Grundbesitzwert 450.000 €; die A+B-OHG trägt 3,5 % Grunderwerbsteuer. Die AfA ist unter Einbeziehung der Einbringungs-/Nebenkostenfolgen zu bestimmen.",
    ],
    crossRefs: [34,35],
  },
  35: {
    pages: "8",
    title: "§ 24 mit sonstiger Gegenleistung bis Buchwert",
    points: [
      "Abwandlung 1: B zahlt 400.000 € in das Betriebsvermögen der OHG; A erhält zusätzlich eine Darlehensforderung von 200.000 €. A und B bleiben zu je 50 % beteiligt.",
      "Die OHG beantragt den Buchwertansatz. Die Aufgabe verlangt die Eröffnungsbilanz einschließlich Ergänzungsbilanzen; in der Gesamthandsbilanz sollen die gemeinen Werte ausgewiesen werden.",
    ],
    crossRefs: [30,33,36],
  },
  36: {
    pages: "9",
    title: "§ 24 mit sonstiger Gegenleistung über Buchwert",
    points: [
      "Abwandlung 2: B zahlt 250.000 € in das Betriebsvermögen. A erhält 250.000 € Gesellschaftsrechte und zusätzlich eine Darlehensforderung von 350.000 € gegen die A+B-OHG.",
      "Der Kurzskript-Fall dient als Gegenstück zur Buchwert-Abwandlung und ist mit der Höchstgrenzenprüfung des § 24 Abs. 2 S. 2 Nr. 2 UmwStG zu verknüpfen.",
    ],
    crossRefs: [30,35],
  },
  40: {
    pages: "10",
    title: "Austritt – Grundfall ohne stille Reserven",
    points: [
      "Beispiel 1: A, B und C sind zu je 1/3 beteiligt; C scheidet zum 01.01.2024 aus und erhält den Buchwert seiner Beteiligung von 200.000 € als Abfindung. Alternative der Quelle: keine stillen Reserven.",
      "Ausgangsbilanz 31.12.2023: Grubo 1 100.000 €, Gebäude 1 60.000 €, Grubo 2 50.000 €, Gebäude 2 264.000 €, Maschine 1 42.188 €, Maschine 2 30.000 €, Bank 105.812 €; Kapital A/B/C je 200.000 €, Verbindlichkeiten 52.000 €.",
      "Die Quelle verlangt Eröffnungsbilanz nach dem Ausscheiden, AfA-Fortentwicklung bis 31.12.2024, Schlussbilanz/G&V sowie Begleichung des Ausgleichsanspruchs am 10.01.2024; A und B wollen einen möglichst geringen Gewinn ausweisen.",
    ],
    crossRefs: [41],
  },
  41: {
    pages: "10–12",
    title: "Austritt – Abwandlung, § 6b-Rücklage und Beispiel 2",
    points: [
      "Abwandlung zu Beispiel 1: C erhält 210.000 € Abfindung. Die Bilanz enthält zusätzlich eine § 6b-Rücklage von 30.000 €; der auf C entfallende Anteil soll im Rahmen seines Ausscheidens aufgelöst werden.",
      "Beispiel 2: C scheidet auf Wunsch von A und B trotz vertraglich späterer Kündigungsmöglichkeit zum 01.01.2024 aus. Neben einer Abfindung von 60.000 € werden anteilige Teilwerte der Wirtschaftsgüter berücksichtigt; vereinbart ist insgesamt eine Abfindung von 592.000 € einschließlich Zahlung für die entgehende Gewinnchance.",
      "Stille Reserven laut Kurzskript: Grubo 1 60.000 €, Gebäude 1 240.000 €, Grubo 2 15.000 €, Gebäude 2 48.000 €, Maschine 1 9.000 €, Maschine 2 12.000 €. Die § 6b-Rücklage beträgt 27.000 € und stammt aus der Veräußerung eines unbebauten Grundstücks im Jahr 2021.",
      "Die Aufgabe verlangt Veräußerungsgewinn C, Eröffnungsbilanz 01.01.2024, Auflösung des C-Anteils der § 6b-Rücklage, AfA-Fortentwicklung und Schlussbilanz/G&V zum 31.12.2024.",
    ],
    crossRefs: [40,42],
  },
  42: {
    pages: "12–13",
    title: "Sachwertabfindung",
    points: [
      "Ausgangsbilanz 31.12.2023: Grubo 1 70.000 €, Grubo 2 100.000 €, Maschinen 100.000 €, Waren 70.000 €, übrige Aktiva 310.000 €; Kapital A/B/C je 100.000 €, übrige Passiva 350.000 €.",
      "Auseinandersetzungsbilanz: Grubo 1 100.000 €, Grubo 2 130.000 €, Maschinen 115.000 €, Waren 85.000 €, übrige Aktiva 310.000 €; Kapital A/B/C je 130.000 €, übrige Passiva 350.000 €.",
      "Statt Barabfindung wird das ungenutzte unbebaute Grundstück Grubo 2 auf C übertragen. Die OHG hatte es am 05.04.2009 für 100.000 € erworben; C nutzt es künftig im Privatvermögen. Eigentumsübergang 01.02.2024. Gefordert sind Eröffnungsbilanz der AB-OHG und buchmäßige Abbildung des Eigentumsübergangs bei möglichst niedrigem Gewinn.",
    ],
    crossRefs: [40,41,43],
  },
  43: {
    pages: "13–14",
    title: "Gesellschafterwechsel zum und über Buchwert",
    points: [
      "Buchwertfall: C (1/4 beteiligt) veräußert seinen Mitunternehmeranteil zum 01.01.2024 für 100.000 € an D; Sonderbetriebsvermögen ist nicht vorhanden. Die Gesamthandsbilanz umfasst u.a. Grubo 100.000 €, Gebäude 120.000 €, Maschine 100.000 €, Forderungen 10.000 €, Bank 90.000 €; Kapital A/B je 150.000 €, C 100.000 €, Verbindlichkeiten 20.000 €.",
      "Die Quelle verlangt den Veräußerungsvorgang auf Personenebene, eine Eröffnungsbilanz nach dem Gesellschafterwechsel und die Bilanz zum 31.12.2024 unter Beachtung der AfA- und Verbindlichkeitsfortführung.",
      "Über-Buchwert-Fall: C veräußert seinen 1/3-Anteil an D für 120.000 €. Ausgangsbilanz: Grubo 50.000 €, Gebäude 100.000 €, Maschinen 40.000 €, Waren 60.000 €, sonstige Aktiva 150.000 €; Kapital A/B/C je 70.000 €, Verbindlichkeiten 190.000 €. Teilwerte: Grubo 110.000 €, Gebäude 150.000 €, Maschinen 55.000 €, Waren 60.000 €.",
    ],
    crossRefs: [42,44],
  },
  44: {
    pages: "14–15",
    title: "Realteilung ohne Spitzenausgleich",
    points: [
      "A und B sind zu je 50 % an der AB-OHG beteiligt. Zum 01.01.2024 wird die OHG real geteilt; A erhält die Wirtschaftsgüter 1, B die Wirtschaftsgüter 2 und beide führen getrennte Einzelunternehmen in derselben Branche mit denselben Kunden fort.",
      "Ausgangsbilanz: Grubo 1 100.000 €, Gebäude 1 150.000 €, Grubo 2 50.000 €, Gebäude 2 300.000 €, Maschine 1 80.000 €, Maschine 2 40.000 €; Kapital A/B je 360.000 €.",
      "Handelsrechtliche Realteilungsbilanz: Gruppe 1 (Grubo 160.000 €, Gebäude 180.000 €, Maschine 80.000 €, Kundenstamm 90.000 €) = 530.000 €; Gruppe 2 (Grubo 65.000 €, Gebäude 350.000 €, Maschine 45.000 €, Kundenstamm 70.000 €) = 530.000 €.",
      "Aufgabe: steuerliche Folgen für A und B und Eröffnungsbilanzen der beiden Einzelunternehmen; etwaige Umsatzsteuer wird laut Quelle separat gerechnet und ist nicht Teil dieser Lösung.",
    ],
    crossRefs: [45,46],
  },
  46: {
    pages: "15–16",
    title: "Realteilung mit Spitzenausgleich",
    points: [
      "Der zweite Realteilungsfall verwendet denselben Ausgangssachverhalt, verschiebt aber den Wert der zweiten Gruppe: Grubo 2 wird mit 145.000 € angesetzt; Kapital I B beträgt dadurch 610.000 €, während Kapital I A 530.000 € beträgt.",
      "Aufgrund der Realteilungsbilanz muss B an A einen Ausgleich von 40.000 € zahlen.",
      "Gefordert sind die steuerlichen Folgen für beide Realteiler sowie die Eröffnungsbilanzen der jeweiligen Einzelunternehmen; eine gegebenenfalls anfallende Umsatzsteuer wird nach der Quelle gesondert abgerechnet.",
    ],
    crossRefs: [44,45],
  },
};

for (const [id, data] of Object.entries(MODULE_KURZSKRIPT_2025)) {
  const modul = persgModule.find((m) => m.id === Number(id));
  if (modul) modul.kurzskript2025 = data;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function buildKurzskriptSection(moduleId, data) {
  const section = el("section", "persg-block persg-kurzskript-2025");
  section.dataset.persgKurzskript = String(moduleId);

  const head = el("div", "persg-kurzskript-2025__head");
  const headText = el("div");
  headText.appendChild(el("span", "kicker", `Kurzskript PersG 2025 · PDF-S. ${data.pages}`));
  headText.appendChild(el("h2", "", data.title));
  head.appendChild(headText);
  head.appendChild(el("span", "persg-kurzskript-2025__source", `${source.author} · 2025`));
  section.appendChild(head);

  const note = el("p", "persg-kurzskript-2025__note", "Ergänzung aus dem Kurzskript – in das bestehende Lernmodul eingeordnet; Originalfälle und bisherige Unterrichtsquellen bleiben unverändert.");
  section.appendChild(note);

  const list = el("ul", "persg-list persg-kurzskript-2025__list");
  for (const point of data.points || []) list.appendChild(el("li", "", point));
  section.appendChild(list);

  if (data.crossRefs?.length) {
    const refs = el("div", "persg-kurzskript-2025__refs");
    refs.appendChild(el("b", "", "Querverweise"));
    for (const id of data.crossRefs) refs.appendChild(el("span", "persg-chip", `Modul ${id}`));
    section.appendChild(refs);
  }
  return section;
}

function ensureKurzskriptStyles() {
  if (document.getElementById("persg-kurzskript-2025-styles")) return;
  const style = document.createElement("style");
  style.id = "persg-kurzskript-2025-styles";
  style.textContent = `
    .persg-kurzskript-2025{border:1px solid var(--linie);border-left:4px solid #1454e8;background:var(--papier);padding:18px 20px}
    .persg-kurzskript-2025__head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding-bottom:10px;margin-bottom:12px;border-bottom:1px solid var(--linie)}
    .persg-kurzskript-2025__head h2{margin:4px 0 0;font-size:clamp(20px,2.2vw,26px)}
    .persg-kurzskript-2025__source{white-space:nowrap;color:var(--ink-weich);font:700 10.5px/1.4 var(--mono)}
    .persg-kurzskript-2025__note{margin:0 0 12px;padding:10px 12px;border-left:3px solid #1454e8;background:#f5f8ff;color:var(--ink-weich);font-size:.88rem;line-height:1.5}
    .persg-kurzskript-2025__list{margin:0}.persg-kurzskript-2025__list li{line-height:1.58}
    .persg-kurzskript-2025__refs{display:flex;align-items:center;flex-wrap:wrap;gap:7px;margin-top:14px;padding-top:11px;border-top:1px dashed var(--linie)}
    .persg-kurzskript-2025__refs>b{margin-right:4px;font:700 10.5px var(--mono);letter-spacing:.06em;text-transform:uppercase}
    @media(max-width:760px){.persg-kurzskript-2025{padding:15px}.persg-kurzskript-2025__head{flex-direction:column}.persg-kurzskript-2025__source{white-space:normal}}
  `;
  document.head.appendChild(style);
}

function decorateKurzskript() {
  ensureKurzskriptStyles();
  const lessonHead = document.querySelector(".persg-lesson-head");
  if (!lessonHead) return;
  const kicker = lessonHead.querySelector(".kicker")?.textContent || "";
  const match = kicker.match(/Modul\s+(\d+)/i);
  if (!match) return;
  const moduleId = Number(match[1]);
  const data = MODULE_KURZSKRIPT_2025[moduleId];
  if (!data) return;
  if (document.querySelector(`[data-persg-kurzskript="${moduleId}"]`)) return;

  const blocks = [...document.querySelectorAll("main.page > .persg-block, main.page .persg-block")];
  const einordnung = blocks.find((block) => block.querySelector(":scope > h2")?.textContent?.trim() === "Einordnung");
  if (!einordnung) return;
  einordnung.insertAdjacentElement("afterend", buildKurzskriptSection(moduleId, data));
}

if (typeof document !== "undefined" && typeof MutationObserver !== "undefined" && !globalThis.__persgKurzskript2025Observer) {
  let pending = false;
  const schedule = () => {
    if (pending) return;
    pending = true;
    const run = () => { pending = false; decorateKurzskript(); };
    typeof requestAnimationFrame === "function" ? requestAnimationFrame(run) : setTimeout(run, 0);
  };
  const observer = new MutationObserver(schedule);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  globalThis.__persgKurzskript2025Observer = observer;
  schedule();
}
