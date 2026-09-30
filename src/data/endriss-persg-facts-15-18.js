/* Direct visual transfer: original PDF9–10, printed sheets15–18.
   Source numbers, abbreviated bookings, blank fields and contradictions remain.
   No legal-currentness review and no independently calculated original solution. */
const p = text => ({ text });
const h = text => ({ typ: 'titel', text });
const t = (spalten, zeilen) => ({ typ: 'tabelle', spalten, zeilen, quellenart: 'textvergleich' });
const ledger = (spalten, zeilen) => ({ typ: 'tabelle', spalten, zeilen, quellenart: 'kontenentwicklung', ...(spalten.length === 2 ? { quellenlayout: 'rechenpaar' } : {}) });
const k = (id, title, page, normen, campusModules, bloecke) => ({
  id: `persg-facts-${id}`, title, pages: [page], printedSheets: [Number(id)], normen, campusModules,
  bloecke: bloecke.map(block => ({ ...block, quellenSeiten: [page] })),
});
const formationColumns = ['A: Bargeld','B: Gebäude aus EU','C: GruBo aus PV','D: Einzelunternehmen'];
export const persgFacts15bis18 = [
  k('15', '15 · Bsp zu Übertragung einzelner WG aus dem PV', 9,
    ['§ 23 EStG','§ 4 (1) S. 8 EStG','§ 6 (1) Nr. 5 EStG','§ 8 (2) Nr. 2 GrEStG','§ 5 (2) GrEStG','§ 3 Nr. 2 GrEStG'], [22,20], [
    h('Ausgangssachverhalt:'),
    t(['Von','Nach','Quellenangabe'], [
      ['A_PV','A & B OHG','GruBo_2024 · grüner Übertragungspfeil'],
      ['A','A & B OHG','90 %'], ['B','A & B OHG','10 %'],
    ]),
    p('AK_2018 80.000 €, Bedarfsw. 100.000 €, TW 150.000 € · GrESt-Satz: 5 %'),
    h('a) Gutschrift KapI_A 100.000 € + ges. geb. KapRL 50.000 €'),
    p('→ gegen Ges´rechte, Veräußerung · → tauschähnlicher Umsatz'),
    h('Rechtsfolgen A:'),
    ledger(['§ 23 EStG','Betrag'], [['VKP','150.000 €'],['./. AK','80.000 €'],['Überschuss =','70.000 €']]),
    h('Rechtsfolgen OHG:'),
    p('AK → Schema!'),
    ledger(['AK','Betrag'], [
      ['gem. Wert hingegeb. Gesellschaftsrechte','150.000 €'], ['zzgl. NK (GrESt*)','500 €'], ['AK =','150.500 €'],
    ]),
    p('(*100.000 x 5% x 10 %) · (§ 8 (2) Nr. 2, § 5 (2) GrEStG)'),
    h('Buchung im Original:'),
    ledger(['Soll / Haben','Quellenbetrag'], [['GruBo','150.'],['an KapI_A','100.000'],['ges.geb. KapRL','50.000'],['s. Verb.','500']]),
    p('Quellenabweichung: Die Rechnung nennt AK = 150.500 €, die anschließende Buchungszeile schreibt „GruBo 150.“. Die verkürzte Buchungsangabe wird nicht stillschweigend auf 150.500 ergänzt.'),
    h('b) Buchung gegen ges. geb. KapRL 150.000 € oder KapII_A'),
    p('→ verd. Einlage, § 4 (1) S. 8 EStG'),
    h('Rechtsfolgen A:'), p('Kein § 23 EStG'),
    h('Rechtsfolgen OHG:'), p('→ Schema! § 6 (1) Nr. 5 EStG'),
    ledger(['„an deren Stelle tretender Wert“','Betrag'], [['= TW','150.000 €'],['GrESt*','0 €']]),
    p('(*§ 3 Nr. 2 GrEStG, Schenkung an B)'),
    p('GruBo 150. an ges.geb. KapRL 150.'),
    h('c) Gutschrift KapI_A 112.500 €, ansonsten HR keine Buchung'),
    p('→ teilentgeltl. → 75 % entgeltl. / 25 % unentg. · „Trennungstheorie“'),
    h('Rechtsfolgen A:'),
    ledger(['75 %: § 23 EStG','Betrag'], [['VKP','112.500 €'],['./. AK','60.000 €'],['Überschuss =','52.500 €']]),
    p('25 %: kein § 23 EStG, ggf. (1) S. 5 Nr. 1'),
    h('Rechtsfolgen OHG:'),
    ledger(['Quellenposten','Betrag'], [
      ['AK: gem. W. hingeg. GesR','112.500 €'], ['zzgl. NK','500 €'], ['HR AK','113.000 €'],
      ['Einlagewert 25 %','37.500 €'], ['StR Zugangswert','150.500 €'],
    ]),
    t(['Buchung / Korrektur','Quellenangabe'], [
      ['HR: GruBo 113. an','KapI_A 112.500'], ['','so. Verb. 500'],
      ['zus.StR:','GruBo 37.500 an sbE 37.500'], ['außerbil.:','./. 37.500'],
    ]),
    p('Quellengestaltung: „Schema!“ und „Trennungstheorie“ rot; HR AK und StR Zugangswert gelb mit roter Schrift. Ausgangswerte, Beteiligungsquoten, 75/25 und sämtliche Rechnungen sind Originalangaben, keine neu ergänzte Lösung.'),
    p('Abgleich mit Modul 22: gleicher Grundtyp des PV-Grundstücks, dort als anderer Mitschriftsfall verknüpft. Der Fact-Sheet-Text enthält zusätzlich Bedarfswert, GrESt und die Buchungszeilen; dessen 150.500 € werden nicht durch den dort verkürzten Ansatz 150.000 € ersetzt.'),
  ]),
  k('16', '16 · Übertragung einzelner WG aus dem BV – Übersicht zu § 6 (5) EStG', 9,
    ['§ 6 (5) EStG','§ 4 (1) S. 2, 8 EStG','§ 6 (6) S. 4 EStG','§ 6 (3) EStG','§ 24 UmwStG','§ 16 (3) S. 2 EStG'], [23,25,26], [
    p('Erl. Nr. 1 § 6/15'),
    t(['Vorgang','Sachverhalt','Vorschriften'], [
      ['Überführung (kein Rechtsträgerwechsel)','EU1_A → EU2_A','§ 4 (1) S. 2, 8, § 6 (5) S. 1 EStG'],
      ['Überführung (kein Rechtsträgerwechsel)','EU_A ↔ SBV_A','§ 4 (1) S. 2, 8, § 6 (5) S. 2 EStG'],
    ]),
    p('Gelber Klebezettel zur Überführung: gleichz. Übernahme Verb. unschädlich'),
    h('Übertragung (Rechtsträgerwechsel): EU_A ↔ A & B OHG · 3 Möglichkeiten'),
    t(['Veräußerung','gegen [Mind.] Gesellschaftsrechte','unentgeltlich'], [
      ['A: Aufdeckung st. Res. · OHG: AK','§ 6 (6) S. 4 EStG',''],
      ['','§ 6 (5) S. 3 Nr. 1 EStG: ZWINGEND Buchwert (in voller H.)','§ 6 (5) S. 3 Nr. 1 EStG: ZWINGEND Buchwert (in voller H.)'],
    ]),
    h('Übertragung (Rechtsträgerwechsel): Sonderbetriebsvermögen'),
    t(['Ausgang','Ziel','Pfeile der Quelle'], [
      ['SBV_A bei A & B OHG','A & B OHG','↔'],
      ['SBV_A bei A & B OHG','A & X KG','↔ · oder'],
    ]),
    p('3 Möglichkeiten'),
    t(['Veräußerung','gegen [Mind.] Gesellschaftsrechte','unentgeltlich'], [
      ['SBV_A: Aufdeckung st. Res. · OHG: AK','§ 6 (6) S. 4 EStG',''],
      ['','§ 6 (5) S. 3 Nr. 2 EStG: ZWINGEND Buchwert (in voller H.)','§ 6 (5) S. 3 Nr. 2 EStG: ZWINGEND Buchwert (in voller H.)'],
    ]),
    t(['Vorgang','Sachverhalt','Vorschriften / Hinweis'], [
      ['Übertragung (Rechtsträgerwechsel)','SBV_A bei A & B OHG → SBV_B bei A & B OHG','unentgeltlich: → § 6 (5) S. 3 Nr. 3 EStG: ZWINGEND Buchwert'],
      ['Neu:','A & B OHG → A & B KG','§ 6 (5) S. 3 Nr. 4 – beachte Beteiligungsidentität'],
    ]),
    h('Randzettel zur Übertragung:'),
    p('gleichz. Übern. von Verb. → schädlich → (teil)entgeltl.'),
    p('Nachrangig ggü.: 1. § 6 (3) EStG · 2. § 24 UmwStG · 3. § 16 (3) S. 2 EStG'),
    p('Zur Übertragung aus PV: → s. fc 13'),
    p('unentgelt. od gg. Ges´R.: → Erl. Nr. 1 § 4/13 · → Erl. Nr. 1 § 4/15 · → Erl. Nr. 1 § 6/16'),
    p('Quellengestaltung: Überführung/Übertragung und ZWINGEND rot, Sätze 1/2/3 und Nummern 1/2/3 gelb markiert. Die Buchwertklammer umfasst jeweils Gesellschaftsrechte und unentgeltlich; ihre gemeinsame Aussage steht deshalb in beiden Tabellenspalten. Der originale Verweis „s. fc 13“ bleibt unverändert, ohne Umnummerierung auf eine andere Blattzählung.'),
  ]),
  k('17', '17 · Sperrfristen gem. § 6 (5) S. 4–6 EStG', 10,
    ['§ 6 (5) S. 3–7 EStG','§ 175 (1) S. 1 Nr. 2 AO','R 6.15 EStR','§ 4 (1) S. 3 EStG','§ 12 KStG'], [24,27], [
    p('– gilt ausschließlich für Übertragungen nach § 6 (5) S. 3 EStG'),
    h('Sperrfristen beim Übernehmer:'),
    t(['Quellenstelle','Vorgang / Frist','Ausnahme der Quelle'], [
      ['S. 4','Veräuß. / PE / Umw. innerh. von 3 Jahren','Ausnahme bei Nr. 1 + 2: neg. ErgBil für Übertr.'],
      ['S. 5','Erhöhung / Begründung Anteil durch Beteiligung KapG innerh. von 3 Jahren',''],
      ['S. 6, 7','Umwandlung / Einbringung / Anwachsung in/auf KapG innerhalb von 7 Jahren',''],
    ]),
    p('Gemeinsame Klammer: führt zum rückwirkenden Ansatz des Teilwerts bei der Übertragung. Folge: stille Reserven werden beim Übertragenden versteuert → § 175 (1) S. 1 Nr. 2 AO'),
    h('beachte: R 6.15 EStR'),
    t(['Von','Nach','Quellenangabe'], [
      ['EU_A','A-GmbH & Co. KG','Übertragungspfeil'],
      ['A-GmbH','A-GmbH & Co. KG','0 %'], ['A','A-GmbH & Co. KG','100 %'],
    ]),
    p('→ Sperrfrist auch bei Bildung einer negativen ErgBil zu beachten! [dagegen: BFH v. 31.07.13 – I R 44/12]'),
    t(['Keine Sperrfristverletzung','Sperrfristverletzung'], [
      ['nachfolgende Kettenübertragung gem. § 6 (5) S. 3 EStG → neue Sperrfrist','„fiktive“ Entnahme i.S.d. § 4 (1) S. 3 EStG bzw. „fiktive“ Veräußerung i.S.d. § 12 KStG'],
      ['nachfolgende Realteilung → neue Sperrfrist','Umwandlungen, Einbringungen innerh. von 3 Jahren gleich ob zu BW/ZW oder gW'],
      ['Ausscheiden aufgrund höherer Gewalt','Umwandlung, Einbringung Anwachsung in/auf KapG innerhalb von 7 Jahren'],
      ['nachfolgende Kettenübertragung gem. § 6 (5) S. 1 od. 2 EStG → bish. Sperrfrist läuft weiter',''],
    ]),
    p('Quellenabweichungen bleiben offen sichtbar: Die Überschrift nennt S. 4–6, die Liste enthält „S. 6,7“. Die Zuordnung der 3-/7-Jahres-Angaben wird wortgetreu übernommen, nicht mit der anders gegliederten Darstellung im verknüpften Modul 27 vereinheitlicht. Auch „dagegen“ mit BFH-Fundstelle wird nicht aufgelöst. Fristziffern und „Nr. 1 + 2“ rot, Übertragender violett; keine Rechtsstandsprüfung.'),
  ]),
  k('18', '18 · Gründung einer Personengesellschaft', 10,
    ['§ 6 (5) S. 3 Nr. 1 EStG','§ 6 (6) S. 1 EStG','§ 23 EStG','§ 24 UmwStG','§ 20 (2) EStG','§ 17 EStG'], [11,29,30], [
    p('4 Möglichkeiten: jew. gegen Gutschrift auf KapKto I'),
    t(['Einbringung','Ziel','Pfeilfarbe'], [
      ['A: Bargeld','A, B, C, D – OHG','Schwarz'], ['B: Gebäude aus EU','A, B, C, D – OHG','Blau'],
      ['C: GruBo aus PV','A, B, C, D – OHG','Rot'], ['D: Einzelunternehmen','A, B, C, D – OHG','Grün'],
    ]),
    t(formationColumns, [[
      'Wenn noch nicht in voller Höhe eingezahlt: Ausweis KapKto in voller Höhe und Forderung auf Aktivseite',
      'HR: Zeitwert · StR: zwing. BW, daher neg. ErgBili. ≠ Sperrfrist · § 6 (5) S. 3 Nr. 1 EStG → s. fc Nr. 14',
      'HR: Zeitwert · StR: § 6 (6) S. 1 EStG (bei C: § 23 EStG) → s. fc. Nr. 15',
      '§ 24 UmwStG → s. fc. Nr. 18 ff.',
    ]]),
    h('„ausgewählte“ Stolperfallen'),
    t(formationColumns, [[
      'Bei ungleichen Werten der Wirtschaftsgüter wird Differenz in der Regel über Zuzahlung geregelt ≠ Zuzahlung in PV',
      '– AfA_HR von Zeitwert · – AfA_StR von BW+NK (Achtung: § 52 (21b EStG bei Gebäuden) · – AfA über ErgBil korrig.',
      '– kein Fall der Einlage, da entgeltlich · – weitere Möglichkeiten: (§ 20 (2) EStG, § 17 EStG)',
      '– § 24 UmwStG gilt nur soweit Gesellschaftsrechte eingeräumt werden – bei Gegenleistungen darüber hinaus → ant. Veräußerung/Mischentgelt',
    ]]),
    h('Einschlägige Erlasse'),
    t(formationColumns, [['','Erl. Nr. 1 § 6/15 · Erl. Nr. 1 § 6/16','Erl. Nr. 1 § 4/13 · Erl. Nr. 1 § 4/15','Erl. Nr. 130']]),
    p('Quellengrenze: In „§ 52 (21b EStG“ fehlt im Original die schließende Absatzklammer; sie wird nicht als Originaltext ergänzt. Der Erlassbereich für A ist leer. Die Originalverweise auf fc Nr. 14, 15 und 18 ff. bleiben unverändert; ihre Nennung ist keine Umsetzung weiterer PDF-Seiten.'),
  ]),
];
export const persgFacts15bis18Evidence = [
  { page:9, printedSheets:[15,16], chapters:['persg-facts-15','persg-facts-16'], method:'Full original page and both enlarged sheets read directly; no OCR.', details:'All three PV alternatives with original calculations, tax side-notes and abbreviated bookings; explicit GrESt and150.500 vs150. source boundary. Every BV transfer edge, three-option bracket, rule, coloured marker and sidebar reference preserved. Existing modules22/20/23/25/26 linked, not overwritten.' },
  { page:10, printedSheets:[17,18], chapters:['persg-facts-17','persg-facts-18'], method:'Full original page and both enlarged sheets read directly; no OCR.', details:'Original deadlines, exception and contrary BFH note, comparison columns and formation four-way table including empty decree cell. Header4–6 versus row6,7, module27 differences and incomplete52(21b citation retained. Existing modules24/27/11/29/30 linked without replacing source text.' },
];
