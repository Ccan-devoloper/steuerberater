/* Direct visual transfer of original PDF11–12, printed sheets19–22.
   No current-law review, no reconstructed source solutions or hidden digits. */
const p = text => ({ text });
const h = text => ({ typ: 'titel', text });
const t = (spalten, zeilen) => ({ typ: 'tabelle', quellenart: 'textvergleich', spalten, zeilen });
const balance = zeilen => ({ typ: 'tabelle', quellenart: 'kontenentwicklung', spalten: ['Aktiva','Betrag','Passiva','Betrag'], zeilen });
const calculation = (spalten, zeilen) => ({ typ: 'tabelle', quellenart: 'kontenentwicklung', quellenlayout: 'rechenpaar', spalten, zeilen });
const k = (number, title, page, normen, campusModules, bloecke) => ({
  id: `persg-facts-${number}`, title, pages: [page], printedSheets: [Number(number)], normen, campusModules, bloecke,
});

export const persgFacts19bis22 = [
  k('19', '19 · § 24 UmwStG – Struktur und Voraussetzungen', 11,
    ['§ 24 (1)–(6) UmwStG','§ 6 (3) EStG','Erl. Nr. 130 Tz. 24.01 i.V.m. 01.47','Tz. 24.05'], [30,31,11,37], [
    t(['Von','Nach','Quellenpfeil / Einbringung'], [
      ['A','A & B – OHG','EU · § 24 UmwStG ✓'],
      ['B','A & B – OHG','Geld/WG'],
    ]),
    p('B muss etwas in die PersG „mitbringen“, ansonsten keine Anw. § 24 UmwStG bei A'),
    h('Voraussetzungen:'),
    p('– ganzer Betr., Teilbetr. od. MU-Anteil (inkl.SBV)\n– Einbringung in PersG\n– Einbringender wird MU'),
    p('Gelbe Klebezettel: alle funktional wes. Betriebsgrdl. · Tz. 24.05: Überlassung reicht!'),
    h('Struktur der Vorschrift:'),
    t(['Quellenstelle','Quellenangabe'], [
      ['§ 24 (1) UmwStG','grds. Voraussetzungen'],
      ['§ 24 (2) S. 1 UmwStG','gem. Wert'],
      ['§ 24 (2) S. 2 UmwStG','auf Antrag: BW, ZW'],
      ['§ 24 (2) S. 3 UmwStG','Antrag durch PersG'],
      ['§ 24 (3) UmwStG','Ausw. Einbringender'],
      ['§ 24 (4) UmwStG','Ausw. PersG'],
      ['§ 24 (5) UmwStG','Einbringungsgewinn II'],
      ['§ 24 (6) UmwStG','Zinsvortr. geht unter'],
    ]),
    h('Zivilrechtliche Grundlagen:'),
    p('Erl. Nr. 130 Tz. 24.01 iVm 01.47:'),
    p('a) Einzelrechtsnachfolge („einzelne“ Übertragung): GruBo: Aufl.+Eintr.; Ford./Verb.: Schuldner/Gläubiger informieren; andere WG: Kaufvertr. → keine Rückwirkung'),
    p('b) Gesamtrechtsnachfolge („uno actu“) → UmwG, Eintragung im HR, Rückw. möglich!'),
    p('beachte: Ausw. auf 1. Zeitpkt + 2. Abschr. bei gem. W.!'),
    h('Buchung bei PersG:'),
    t(['Buchung der Quelle','Folge der Quelle'], [
      ['auf Kap I + gesamth. geb. KapRL','→ § 24 UmwStG'],
      ['auf Kap I','→ § 24 UmwStG'],
      ['ausschl. auf ges. geb. KapRL od. K II','→ § 6 (3) EStG'],
      ['Kap I/II + Verr.kto oder Geldkto','→ Mischentgelt!'],
    ]),
    h('Besonderheit bei Aufnahme Gesellschafter'),
    t(['Ausgang','Ziel','Quellenpfeil'], [
      ['A & B – OHG · A','A, B, C – OHG','Blau'],
      ['A & B – OHG · B','A, B, C – OHG','Orange'],
      ['C, Geld/WG','A, B, C – OHG','Grün'],
    ]),
    p('2 Einbr. (A bzw. B) d.h. pro MU-Anteil'),
    p('Quellengestaltung: „mitbringen“, PersG als Antragsteller, Rückwirkungshinweise und Mischentgelt rot; Voraussetzungen gelb, Absatznummern grün. A und B haben getrennte Einbringungspfeile. Kein Beteiligungsprozentsatz ist angegeben oder ergänzt.'),
  ]),
  k('20', '20 · § 24 UmwStG – Rechtsfolgen beim Einbringenden', 11,
    ['§ 24 (2) S. 1 UmwStG','§ 24 (3) UmwStG','§ 16 (2) S. 3 EStG','§§ 16 (4), 34 (1) oder (3) EStG','H 7.1 (3) GewStH'], [32], [
    p('→ ggf. Aufdeckung stiller Reserven (Merke: jede Umwandlung ist ein tauschähnliches Geschäft!):'),
    p('§ 24 (3) UmwStG: Wert, mit dem die PersG das eingebr. Vermögen ansetzt (inkl. ErgBil + SonderBil) = VKP des Einbringenden'),
    p('Antragswahlrecht (BW, ZW, gW) liegt bei PersG:'),
    t(['Buchwert','Zwischenwert','gemeiner Wert'], [[
      '– kein Einbringungsgewinn\n– soweit unwesentliche oder led. quantitativ wesentl. Betriebsgrundlagen im Rahmen der Einbringung veräußert werden → insoweit lfder Gewinn',
      '– laufender Gewinn\n– kein § 16 EStG\n– kein § 34 EStG\n– aber: keine GewSt\n(H 7.1 (3) „Entnahmevorgänge bei Umwandlung in eine PersG“ GewStH)',
      '– Anwendung von: §§ 16 (4) u. 34 (1) oder (3) EStG\n– keine GewSt\n– beachte: § 24 (3) S. 3 UmwStG i.V.m. § 16 (2) S. 3 EStG: lfder + gewstpfl. Gewinn, soweit an sich selbst verkauft!!',
    ]]),
    h('beachte zum Antrag:'),
    t(['Zettel der Quelle','Originaltext'], [
      ['1 · Grundsatz / Antrag','Grundsatz: gem. Wert · § 24 (2) S. 1 UmwStG\nWenn Antrag: BW oder ZW (Maßgabe der GHB + ErgBil. und SonderBil)'],
      ['2 · Einheitlichkeit','Ansatz in GHB + ErgBil und Sonderbil. nur einheitlich'],
      ['3 · Bindung','Antragswahlrecht ausschließl. durch PersG, Einbringender ist hieran gebunden'],
      ['4 · Frist [im Original unvollständig]','Antragstellung bis zur Abgabe der „steuerlichen Schlussbilanz“. Dies kann (nach ausdr. Hinweis) die'],
    ]),
    p('Quellengrenze: Der rechte Antragszettel endet auf dieser Originalseite tatsächlich mit „die“. Der fehlende Satzrest wird nicht ergänzt; die folgenden Blätter dieses Pakets enthalten ihn nicht. „VKP“ ist gelb hervorgehoben, die Bindung an die PersG durch den orangefarbenen Pfeil verbunden.'),
  ]),
  k('21', '21 · § 24 UmwStG – Rechtsfolgen bei aufnehmender PersG – Buchwertansatz', 12,
    ['§ 24 (4) UmwStG','§ 23 (1) UmwStG','§ 12 (3) 1. HS UmwStG','§ 4 (2) S. 3 UmwStG','Tz. 24.03 i.V.m. 23.06','Tz. 24.14'], [33,34], [
    p('§ 24 (4) i.V.m. § 23 (1) i.V.m. § 12 (3) 1. HS i.V.m. § 4 (2) S. 3 UmwStG: Eintritt in steuerl. Rechtsstellung'),
    p('s.a. Tz. 24.03 i.V.m. 23.06, dies bedeutet insbesondere:'),
    h('Buchwert'),
    t(['AfA, erhöhte AfA, SP','Rücklagen, Vorbesitzzeiten'], [[
      '– Fortführung der Werte des übertr. Untern.\n– Kontinuität hinsichtlich AfA-BMG als auch –Methode und Nutzungsdauer',
      '– Vollständiger Eintritt in die Rechtsstellung des übertragenden Unternehmens',
    ]]),
    t(['Darstellungsvariante 1','Darstellungsvariante 2 · Tz. 24.14'], [[
      '– GHB: gem. Werte (Zahlung im Kapital sofort ersichtlich)\n– + neg. ErgBil des Einbringenden',
      '– GHB: BW (Zahlung nur über ErgBil ers.)\n– + neg. ErgBil des Einbringenden\n– + pos. ErgBil der anderen G’ter',
    ]]),
    h('Vorher: EU_A'),
    balance([['AV (st. Res. 20.000)','90.000','Kap.','100.000'],['UV','10.000','',''],['','100.000','','100.000']]),
    p('B: 150.000 € · Orangefarbener Pfeil: Vorher → Nachher: A & B – OHG'),
    h('Nachher · Variante 1 · OHG (gem. Werte)'),
    balance([['AV','110.000','Kap.A','150.00…'],['UV','10.000','',''],['FW','30.000','Kap.B','150.00…'],['Bank','150.000','',''],['','300.000','','300.00…']]),
    p('Quellengrenze der Variante 1: Die letzten Ziffern von Kap.A, Kap.B und der rechten Bilanzsumme sind vom AfA-Klebezettel verdeckt; „150.00…“ bzw. „300.00…“ bezeichnet diese sichtbare Grenze, keinen ergänzten Betrag. Die auf Blatt 22 separat vollständig lesbare Bilanz bleibt dort belegt. Keine Ergänzung aus Rechenlogik.'),
    h('Variante 1 · ErgBil_A'),
    balance([['Kap','50.000','AV','20.000'],['','','FW','30.000'],['','50.000','','50.000']]),
    h('zur AfA AV:'),
    t(['Bereich','Klebezettel der Quelle'], [
      ['in GHB','nach Anschaffungsgrundsätzen, d.h. Neubeginn'],
      ['in ErgBil_A','Korrektur auf fortgeführte AfA'],
    ]),
    p('Quellengestaltung: AV 110.000 rot umrandet und mit dem AfA-Zettel verbunden; „AV“ gelb, Neubeginn/Korrektur violett. Die zentrale Raute verbindet die vier oberen Kästen mit „Buchwert“.'),
    h('Nachher · Variante 2 · OHG (BW)'),
    balance([['AV','90.000','Kap.A','125.000'],['UV','10.000','Kap.B','125.000'],['Bank','150.000','',''],['','250.000','','250.000']]),
    h('Variante 2 · ErgBil_A'),
    balance([['Kap','25.000','AV','10.000'],['','','FW','15.000'],['','25.000','','25.000']]),
    h('Variante 2 · ErgBil_B'),
    balance([['AV','10.000','Kap','25.000'],['FW','15.000','',''],['','25.000','','25.000']]),
    p('Abgleich: Die verknüpften Module 33/34 behandeln Brutto-/Nettomethode anhand eines anderen Unterrichtsfalls (B dort 600.000 €, Betriebsbuchwert 300.000 €). Die hier im Original sichtbaren 150.000 € und 100.000 € werden nicht ersetzt. Alle Bilanzpositionen und Leerfelder stammen aus diesem Blatt, nicht aus den Modul-Lösungen.'),
  ]),
  k('22', '22 · § 24 UmwStG – Rechtsfolgen bei aufnehmender PersG – Ansatz gem. Wert', 12,
    ['§ 24 (2) S. 1 UmwStG','§ 24 (4) i.V.m. § 23 (4) 1. / 2. HS','§ 24 (3) S. 1–3 UmwStG','§ 16 (2) S. 3 EStG','§ 7 (4) EStG','Tz. 24.03 i.V.m. 23.17 ff.'], [32,33], [
    p('§ 24 (2) S. 1 UmwStG, beachte: Unterschied Einzel- und Gesamtrechtsnachfolge Tz. 24.03 i.V.m. 23.17 ff.'),
    h('gem. Wert'),
    t(['Einzelrechtsnachfolge · § 24 (4) i.V.m. § 23 (4) 1. HS','Gesamtrechtsnachfolge · § 24 (4) i.V.m. § 23 (4) 2. HS'], [[
      '– Anschaffung von gebrauchten WG\n– Neubeginn AfA, GWG-Regelung, WR etc.\n– KEINE Besitzzeitanrechnung',
      '– keine Anschaffung – Regeln ZW-Ansatz\n– Fortführung AfA-Methode und –ND\n– auch KEINE Besitzzeitanrechnung',
    ]]),
    t(['Auswirkungen bei Einbringendem','Besonderheit degr. Gebäude-AfA'], [[
      '– Unabhängig von Einzel- oder Gesamtrechtsnachfolge\n– beachte: § 24 (3) S. 3 UmwStG i.V.m. § 16 (2) S. 3 EStG',
      '– bei Gesamtrechtsnachfolge auch weiterhin degr. AfA\n– Nach Ablauf 50 bzw. 25 Jahre → § 7 (4) EStG',
    ]]),
    h('Vorher: EU_A'),
    balance([['AV (st. Res. 20.000)','90.000','Kap.','100.000'],['UV','10.000','',''],['','100.000','','100.000']]),
    p('B: 150.000 € · Orangefarbener Pfeil: Vorher → Nachher: A & B – OHG'),
    h('Nachher: OHG'),
    balance([['AV','110.000','Kap.A','150.000'],['UV','10.000','',''],['FW','30.000','Kap.B','150.000'],['Bank','150.000','',''],['','300.000','','300.000']]),
    h('Unterschiede [gelber Klebezettel, Pfeil auf AV 110.000]:'),
    t(['Einzel-','od. Gesamtrechtsn.'], [['Neubeginn AfA','Regelungen ZW-Ans. (fc 22)']]),
    h('Auswirkungen bei A: § 24 (3) S. 1 UmwStG'),
    calculation(['Originalrechnung','Betrag'], [['VKP','150.000 €'],['./. Kap','100.000 €'],['Gewinn','50.000 €']]),
    t(['§ 24 (3) S. 2 UmwStG [grüner Pfeil]','§ 24 (3) S. 3 UmwStG [roter Pfeil]'], [
      ['[begünstigt]','[NICHT begünstigt]'],
      ['§§ 16, 34 EStG','§ 16 (2) S. 3 EStG'],
      ['25.000 €','25.000 € (lfder Gew. + GewSt)'],
    ]),
    p('Quellengrenze: Der gelbe Zettel verweist trotz tatsächlicher Blattnummer 22 auf „fc 22“. Dieser Verweis bleibt unverändert; er wird nicht als zusätzlich umgesetzte Seite oder stillschweigend korrigierter Verweis gezählt. Die beiden 25.000-€-Beträge sind die vorhandene Original-Lösung, keine neu berechnete Aufteilung. Die zentrale Raute lautet „gem. Wert“; AV 110.000 ist rot markiert.'),
  ]),
];

export const persgFacts19bis22Evidence = [
  { page:11, printedSheets:[19,20], chapters:['persg-facts-19','persg-facts-20'], method:'Direct full-page and both enlarged-sheet visual reading; no OCR.', details:'All prerequisites, eight statutory-structure rows, civil succession alternatives, four booking outcomes and separate admission arrows. Three valuation columns and all four application notes preserved. Last application note visibly ends with die; no continuation invented. Concrete existing modules30/31/11/37/32 checked and linked.' },
  { page:12, printedSheets:[21,22], chapters:['persg-facts-21','persg-facts-22'], method:'Direct full-page, both enlarged sheets and close-up of covered balance edge; no OCR.', details:'Both book-value presentation variants with six balance tables and depreciation note; three last digits hidden by the original sticky note explicitly marked. Separate fully readable market-value balance, succession comparison, original150000/100000/50000calculation and25000/25000split. Other-case module33/34numbers never substituted; source fc22 reference preserved.' },
];
