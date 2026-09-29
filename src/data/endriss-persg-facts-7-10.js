/* PersG Fact Sheets (Horst, 04/2025): PDF pages 5–6, printed sheets 7–10.
   Directly read from the original PDF images, including enlarged views.
   No OCR, current-law substitution or independently supplied source solutions.
   Printed sheet numbers differ from the source contents list; both are retained.
   Existing original images, personal delivery marks and learner state unchanged. */
const p = text => ({ text });
const h = text => ({ typ: 'titel', text });
const t = (spalten, zeilen) => ({ typ: 'tabelle', spalten, zeilen });
const k = (id, title, page, sheet, normen, campusModules, bloecke) => ({
  id: `persg-facts-${id}`, title, pages: [page], printedSheets: [sheet],
  normen, campusModules,
  bloecke: bloecke.map(block => ({ ...block, quellenSeiten: [page] })),
});

export const persgFacts7bis10 = [
  k('07', '7 · Bilanzierungskonkurrenzen – Darlehen', 5, 7, [], [8, 9], [
    h('Bilanzierungskonkurrenzen'),
    p('# Darlehen nach h.M. keine wesentliche Betriebsgrundlage'),
    p('Quellenumfang: Dies ist der einzige weitere Stichpunkt auf dem gedruckten Blatt 7; der übrige Karobereich bleibt im Original leer. Fortsetzung des Bilanzierungskonkurrenz-Blatts 6, keine ergänzte eigene Ausnahme oder Lösung.'),
  ]),
  k('08', '8 · Sondervergütungen / Sonderbetriebseinnahmen', 5, 8,
    ['§ 15 (1) Nr. 2 S. 1 2. HS EStG', 'H 15.8 (3) EStH', 'A 1.6 (3) UStAE', '§ 15a EStG', '§ 4 Nr. 12a UStG', '§ 19 UStG', '§ 15a UStG', '§ 8 Nr. 1 GewStG', '§ 13b UStG'], [10], [
    h('Sondervergütungen / Sonderbetriebseinnahmen · § 15 (1) Nr. 2 S. 1 2. HS EStG'),
    h('Abgrenzung: Gewinnvorab/Vorweggewinn ↔ Sondervergütung'),
    t(['Bereich', 'Gewinnvorab/Vorweggewinn', 'Sondervergütung'], [
      ['ESt', 'Frage der Gewinnverteilung (PE); Entnahmebuchung bei tats. Zahlung', 'schuldrechtl. Vereinb neben Gesellschaftsvertrag (z.B. Arbeits-, Dienst-, Werk-, Darlehensvertrag); kann im Gesellschaftsvertrag geregelt sein (ist aber eine separate Vereinbarung!); vorgesehene Aufwandsbuchung'],
      ['USt', 'grds. kein LAT (mangels Sonderentgelt)', 'grds. Unternehmer → grds. stpfl. LAT; ausgen.: # Befr., z.b. § 4 Nr. 12a UStG; # SV-Pfl. Kdt; # § 19 UStG, beachte: Wechsel = § 15a UStG'],
      ['GewSt', 'keine Minderung des Gewerbeertrags', 'Über SBE Neutralisierung des Aufwands; SBA mindern Gewerbeertrag; keine (zus.) Hinzur. SBE nach § 8 Nr. 1 GewStG'],
      ['SV', 'ggf. SV-Pflicht (s. rechts)', 'i.d.R. nicht: G’ter GbR, OHG, Kmpl., Kdt > 50 %; i.d.R. Pflicht bei Kdt ≤ 50 %; § 3 Nr. 62 EStG [im Original rot durchgestrichen]'],
    ]),
    p('Klebezettel links: H 15.8 (3) „Tätigkeitsvergütungen“ EStH. Weiterer Klebezettel: A 1.6 (3) UStAE. Klebezettel bei der Aufwandsbuchung: „beachte: § 15a EStG“.'),
    p('Markierungen: „PE“ und „Aufwands“ blau; „tats.“ und „kein“ unterstrichen. „separate“, „ausgen.“ und „nicht“ rot. Ein blauer gestrichelter Doppelpfeil verbindet „SV-Pfl. Kdt“ in der USt-Zeile mit der SV-Pflicht-Zeile. Die rote Durchstreichung von „§ 3 Nr. 62 EStG“ wird als Quellenmarkierung erhalten, nicht durch eine eigene Rechtsstandsentscheidung ersetzt.'),
    h('Beispiel · für Herstellung Gebäude'),
    t(['Von', 'Nach', 'Beschriftung des blauen Pfeils'], [
      ['EU_A [Elektriker]', 'A & B OHG', 'so. Leist. 10.000 + USt, ggf. § 13b UStG'],
      ['EU_B [Baustoffh.]', 'A & B OHG', 'Steine 5.000 + USt'],
    ]),
    p('A: SBE_A bei OHG, auch wenn HK bei OHG!!'),
    p('B: KEINE SBE, da Lieferung H 15.8 (3) 2. Spstr. EStH (auch Werklieferung wäre keine SBE)'),
    p('Hervorhebung im Beispiel: A/B blau und unterstrichen; „auch wenn HK bei OHG!!“ rot, „KEINE“ violett und „Werk“ unterstrichen.'),
    p('Nummerierung der Quelle: Die Inhaltsübersicht nennt „Sondervergütungen/SBE“ bei Blatt 7, die tatsächlich abgebildete Seite trägt Blattnummer 8. Beide Angaben bleiben erhalten.'),
  ]),
  k('09', '9 · Komplementär-GmbH', 6, 9,
    ['H 4.2 (2) EStH', '§ 20 (8) EStG', '§ 15 (1) S. 1 Nr. 2 EStG', '§ 3 Nr. 40 S. 1 d) i.V.m. S. 2 EStG', '§ 16 (1) Nr. 2 EStG', 'R 16 (3) S. 6,7 EStR', 'H 15.8 (1) EStH'], [7, 3], [
    h('Komplementär-GmbH · H 4.2 (2) „Anteile an Kapitalgesellschaften – Einzelfälle“ 4. Sp.str. EStH'),
    h('Ausgangssituation'),
    t(['Von', 'Nach', 'Beteiligung'], [
      ['A', 'A-GmbH', '100 %'],
      ['A', 'A-GmbH & Co.KG', '100 %'],
      ['A-GmbH', 'A-GmbH & Co.KG', '0 %'],
    ]),
    t(['Bilanz', 'Aktivseite', 'Passivseite'], [['Sonder-BV_A', 'A-GmbH 25.000', 'Kapital 25.000']]),
    h('Zur Zuordnung der Anteile an der Kmpl.-GmbH zum SBV des Kdt bei der KG:'),
    p('Grundsatz: Anteile an Kmpl.-GmbH sind notw. SBV II, bei Beteiligung über 10 %'),
    p('Ausnahme: Die Kmpl.-GmbH verfolgt einen eigenen Geschäftsbetrieb von nicht untergeordneter Bedeutung → dann aber ggf. gewillkürtes SBV II'),
    p('Rückausnahme: Anteile sind notw. SBV II, wenn Kmpl.-GmbH neben der Gf-Tätigkeit auch wirtschaftlich über ein normales Maß hinaus mit der KG verflochten ist, z.B. Alleinvertrieb für KG, allein hohe Gewinnbeteiligung der Kmpl.-GmbH reicht nicht aus'),
    h('Folgen der Zuordnung zum SBV II:'),
    p('Gewinnausschüttungen: § 20 (8) i.V.m. § 15 (1) S. 1 Nr. 2 EStG, TEV § 3 Nr. 40 S. 1 d) i.V.m. S. 2 EStG'),
    p('Veräußerung GmbH-Ant.: gewerbl. unter Berücks. TEV oder fiktiver Teilbetr. i.S.v. § 16 (1) Nr. 2 EStG bei Veräußerung einer 100 %-Beteiligung; dabei kann die Beteiligung auch im Eigentum mehrerer Persg’ter stehen (R 16 (3) S. 6,7 EStR)'),
    p('Aufwendungen: (z.B. Finanzierungskosten) können nur anteilig zu 60 % berücksichtigt werden'),
    p('Hinweis: auch ohne kapitalmäßige Bet. ist Kmpl.-GmbH Mitunternehmerin [H 15.8 (1) EStH]'),
    p('Quellenmarkierung: „II“ in Grundsatz, Ausnahme, Rückausnahme und Folgenüberschrift rot; bei der Rückausnahme „notw. SBV II“ unterstrichen. Die Quelle schreibt ausdrücklich „über 10 %“.'),
    p('Nummerierung der Quelle: Inhaltsübersicht „Komplementär-GmbH“ Blatt 8; tatsächliche Blattnummer 9.'),
  ]),
  k('10', '10 · Kapitalkonten der Kommanditgesellschaft', 6, 10, ['§ 15a'], [11], [
    h('Kapitalkonten der Kommanditgesellschaft'),
    p('Praxis: Dreikonten-Modell [ggf. + gesamth. geb. KapRL]'),
    p('Die drei Spalten führen eigenständige Kontenmerkmale auf; die Tabellenzeilen behaupten keine zusätzliche Verknüpfung zwischen diesen Listen.'),
    t(['Kapitalkonto I', 'Kapitalkonto II', 'Verrechnungskonto'], [
      ['Einlage laut Gesellschaftsvertrag', 'Gewinne des Komplementärs', 'entnahmefähige Gewinne Kdt.'],
      ['bei ausst. Einlage Kdt: insoweit lfde Gewinne', 'nicht entnahmef. Gewinne Kdt.', 'Zinsen, Tätigkeitsverg., PE, NE'],
      ['', 'Verluste (← beim 4-Kten-M. sep.)', '→ Korresp. Darst. in Sonderbilanz'],
    ]),
    p('Markierungen: „Komplementärs“, „nicht“ und „entnahmefähige“ rot. Der Pfeil zur korrespondierenden Darstellung in der Sonderbilanz ist unterhalb einer gestrichelten Linie grau hinterlegt.'),
    h('Bsp.:'),
    t(['Von', 'Nach', 'Beteiligung'], [
      ['A-GmbH', 'A-GmbH & Co.KG', '0 %'],
      ['A', 'A-GmbH & Co.KG', '100 %'],
    ]),
    p('Gesellschaftsvertrag: A-GmbH vorweg für Haftung 5.000 €'),
    p('Hafteinlage A: 50.000 €'),
    p('Gewinn 01: 100.000 €, Verlust 02: 60.000 €, Gewinn 03: 90.000'),
    h('Lösung: · Kontenentwicklung im Original'),
    p('Die Gruppenüberschriften des Originals sind „A-GmbH“ mit Kap I / Kap II und „A“ mit Kap I / Kap II / Verrechn.kto. „--“ bleibt als Strichfeld erhalten; die Beträge sind aus der Quellenlösung übernommen, nicht neu berechnet.'),
    t(['Zeitpunkt / Vorgang', 'A-GmbH · Kap I', 'A-GmbH · Kap II', 'A · Kap I', 'A · Kap II', 'A · Verrechn.kto.'], [
      ['01.01.01', '0 €', '0 €', '50.000 €', '0 €', '0 €'],
      ['Gewinn 01', '--', '5.000 €', '--', '--', '95.000 €'],
      ['31.12.01', '0 €', '5.000 €', '50.000 €', '0 €', '95.000 €'],
      ['Verlust 02', '--', '5.000 €', '--', '− 65.000 €', '--'],
      ['31.12.02', '0 €', '10.000 €', '50.000 €', '− 65.000 €', '95.000 €'],
      ['Gewinn 03', '--', '5.000 €', '--', '65.000 €', '20.000 €'],
      ['31.12.03', '0 €', '15.000 €', '50.000 €', '0 €', '115.000 €'],
    ]),
    p('Quellenmarkierungen zur Lösung: Die Jahreszahlen 01, 02 und 03 in den Gewinn-/Verlustzeilen sind gelb markiert. Rote Minuszeichen bei − 65.000 €. Rot umrahmt sind in der Zeile 31.12.02 die beiden A-Kapitalkonten 50.000 € und − 65.000 €. Ein roter Pfeil führt vom Klebezettel „§ 15a / -15.000“ zu dieser Umrahmung.'),
    p('Nummerierung der Quelle: Inhaltsübersicht „Kapitalkonten der KG“ Blatt 9; tatsächliche Blattnummer 10.'),
  ]),
];

export const persgFacts7bis10Evidence = [
  { page: 5, printedSheets: [7,8], chapters: ['persg-facts-07','persg-facts-08'], scope: 'Direct full image and enlarged sheet8 read: single loan exception, complete ESt/USt/GewSt/SV comparison and three sticky notes, red struck section3no62 citation, dashed SV link, two EU-to-OHG arrows and both printed conclusions. Sparse sheet7 is not filled. Printed numbering differs from original contents list.' },
  { page: 6, printedSheets: [9,10], chapters: ['persg-facts-09','persg-facts-10'], scope: 'Direct full image plus enlarged sheets9/10: three participation edges and 25000/25000 special balance; principle/exception/re-exception, dividends/disposal/cost consequences; three-account model, separate two-edge example, all 7x6 account cells including negative65000, final115000 and marked section15a/-15000 note. Source solution copied, not invented.' },
];
