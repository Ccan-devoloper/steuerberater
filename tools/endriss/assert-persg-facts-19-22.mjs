/* Independent direct-image expectations: PDF11–12 / printed sheets19–22.
   Explicit original values, not calculations imported from learning modules. */
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
export function assertPersgFacts19bis22(chapters) {
  const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
  assert.equal(hash(chapters.slice(0,19)), '3c39b4f492bfd64ba93631844ebf86a735c3ca3317043a04f1ae7c20f6fbcdb5', 'Released PDF1–10 must not change');
  const chapter = n => chapters.find(c => c.id === `persg-facts-${n}`);
  const tables = n => chapter(n).bloecke.filter(b => b.typ === 'tabelle');
  for (const [n,page,count,targets] of [['19',11,4,[30,31,11,37]],['20',11,2,[32]],['21',12,9,[33,34]],['22',12,7,[32,33]]]) {
    assert.deepEqual(chapter(n).pages,[page]); assert.deepEqual(chapter(n).printedSheets,[Number(n)]);
    assert.equal(tables(n).length,count); assert.deepEqual(chapter(n).campusModules,targets);
    for (const b of chapter(n).bloecke) assert.deepEqual(b.quellenSeiten,[page]);
  }
  const structure = tables('19');
  assert.deepEqual(structure[0].zeilen,[['A','A & B – OHG','EU · § 24 UmwStG ✓'],['B','A & B – OHG','Geld/WG']]);
  assert.deepEqual(structure[1].zeilen,[
    ['§ 24 (1) UmwStG','grds. Voraussetzungen'],['§ 24 (2) S. 1 UmwStG','gem. Wert'],
    ['§ 24 (2) S. 2 UmwStG','auf Antrag: BW, ZW'],['§ 24 (2) S. 3 UmwStG','Antrag durch PersG'],
    ['§ 24 (3) UmwStG','Ausw. Einbringender'],['§ 24 (4) UmwStG','Ausw. PersG'],
    ['§ 24 (5) UmwStG','Einbringungsgewinn II'],['§ 24 (6) UmwStG','Zinsvortr. geht unter'],
  ]);
  assert.deepEqual(structure[2].zeilen,[
    ['auf Kap I + gesamth. geb. KapRL','→ § 24 UmwStG'],['auf Kap I','→ § 24 UmwStG'],
    ['ausschl. auf ges. geb. KapRL od. K II','→ § 6 (3) EStG'],['Kap I/II + Verr.kto oder Geldkto','→ Mischentgelt!'],
  ]);
  assert.deepEqual(structure[3].zeilen,[
    ['A & B – OHG · A','A, B, C – OHG','Blau'],['A & B – OHG · B','A, B, C – OHG','Orange'],['C, Geld/WG','A, B, C – OHG','Grün'],
  ]);
  assert.deepEqual(tables('20')[0].spalten,['Buchwert','Zwischenwert','gemeiner Wert']);
  assert.deepEqual(tables('20')[0].zeilen,[[
    '– kein Einbringungsgewinn\n– soweit unwesentliche oder led. quantitativ wesentl. Betriebsgrundlagen im Rahmen der Einbringung veräußert werden → insoweit lfder Gewinn',
    '– laufender Gewinn\n– kein § 16 EStG\n– kein § 34 EStG\n– aber: keine GewSt\n(H 7.1 (3) „Entnahmevorgänge bei Umwandlung in eine PersG“ GewStH)',
    '– Anwendung von: §§ 16 (4) u. 34 (1) oder (3) EStG\n– keine GewSt\n– beachte: § 24 (3) S. 3 UmwStG i.V.m. § 16 (2) S. 3 EStG: lfder + gewstpfl. Gewinn, soweit an sich selbst verkauft!!',
  ]]);
  assert.deepEqual(tables('20')[1].zeilen,[
    ['1 · Grundsatz / Antrag','Grundsatz: gem. Wert · § 24 (2) S. 1 UmwStG\nWenn Antrag: BW oder ZW (Maßgabe der GHB + ErgBil. und SonderBil)'],
    ['2 · Einheitlichkeit','Ansatz in GHB + ErgBil und Sonderbil. nur einheitlich'],
    ['3 · Bindung','Antragswahlrecht ausschließl. durch PersG, Einbringender ist hieran gebunden'],
    ['4 · Frist [im Original unvollständig]','Antragstellung bis zur Abgabe der „steuerlichen Schlussbilanz“. Dies kann (nach ausdr. Hinweis) die'],
  ], 'The source note stops at die; no invented sentence ending');
  const bv = tables('21');
  const before = [['AV (st. Res. 20.000)','90.000','Kap.','100.000'],['UV','10.000','',''],['','100.000','','100.000']];
  assert.deepEqual(bv[2].zeilen,before);
  assert.deepEqual(bv[3].zeilen,[['AV','110.000','Kap.A','150.00…'],['UV','10.000','',''],['FW','30.000','Kap.B','150.00…'],['Bank','150.000','',''],['','300.000','','300.00…']], 'Covered digits must not be filled by arithmetic');
  assert.deepEqual(bv[4].zeilen,[['Kap','50.000','AV','20.000'],['','','FW','30.000'],['','50.000','','50.000']]);
  assert.deepEqual(bv[5].zeilen,[['in GHB','nach Anschaffungsgrundsätzen, d.h. Neubeginn'],['in ErgBil_A','Korrektur auf fortgeführte AfA']]);
  assert.deepEqual(bv[6].zeilen,[['AV','90.000','Kap.A','125.000'],['UV','10.000','Kap.B','125.000'],['Bank','150.000','',''],['','250.000','','250.000']]);
  assert.deepEqual(bv[7].zeilen,[['Kap','25.000','AV','10.000'],['','','FW','15.000'],['','25.000','','25.000']]);
  assert.deepEqual(bv[8].zeilen,[['AV','10.000','Kap','25.000'],['FW','15.000','',''],['','25.000','','25.000']]);
  const gw = tables('22');
  assert.deepEqual(gw[2].zeilen,before);
  assert.deepEqual(gw[3].zeilen,[['AV','110.000','Kap.A','150.000'],['UV','10.000','',''],['FW','30.000','Kap.B','150.000'],['Bank','150.000','',''],['','300.000','','300.000']], 'Only this separately reviewed balance has visible complete right-column digits');
  assert.deepEqual(gw[4].zeilen,[['Neubeginn AfA','Regelungen ZW-Ans. (fc 22)']]);
  assert.deepEqual(gw[5].zeilen,[['VKP','150.000 €'],['./. Kap','100.000 €'],['Gewinn','50.000 €']]);
  assert.deepEqual(gw[6].spalten,['§ 24 (3) S. 2 UmwStG [grüner Pfeil]','§ 24 (3) S. 3 UmwStG [roter Pfeil]']);
  assert.deepEqual(gw[6].zeilen,[['[begünstigt]','[NICHT begünstigt]'],['§§ 16, 34 EStG','§ 16 (2) S. 3 EStG'],['25.000 €','25.000 € (lfder Gew. + GewSt)']]);
  const flat = JSON.stringify(chapters.slice(19));
  for (const text of ['Überlassung reicht!','Tz. 24.05','„mitbringen“','keine Rückwirkung','Rückw. möglich!',
    '2 Einbr. (A bzw. B) d.h. pro MU-Anteil','inkl. ErgBil + SonderBil','Quantitativ',
    '§ 24 (4) i.V.m. § 23 (1) i.V.m. § 12 (3) 1. HS i.V.m. § 4 (2) S. 3 UmwStG',
    'Kontinuität hinsichtlich AfA-BMG','Rücklagen, Vorbesitzzeiten','Vollständiger Eintritt','Tz. 24.14',
    'Zahlung im Kapital sofort ersichtlich','Zahlung nur über ErgBil ers.','pos. ErgBil der anderen G’ter',
    'Anschaffung von gebrauchten WG','GWG-Regelung, WR etc.','KEINE Besitzzeitanrechnung',
    'Regeln ZW-Ansatz','Fortführung AfA-Methode und –ND','Unabhängig von Einzel- oder Gesamtrechtsnachfolge',
    'Nach Ablauf 50 bzw. 25 Jahre → § 7 (4) EStG','im Original unvollständig','vom AfA-Klebezettel verdeckt',
    'anderen Unterrichtsfalls','nicht aus den Modul-Lösungen']) {
    assert.ok(flat.toLowerCase().includes(text.toLowerCase()), `Missing source detail: ${text}`);
  }
  assert.equal(gw[0].zeilen.length,1); assert.equal(gw[1].zeilen.length,1);
  // Other-case module figures may appear only in the labelled comparison, never the original ledgers.
  for (const tab of [...bv,...gw]) assert.ok(!JSON.stringify(tab).includes('600.000'));
}
