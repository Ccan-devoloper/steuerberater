/* Independent fixed source expectations from original PDF15–16 / sheets27–30.
   No inferred solution, completed hidden note or recomputed original amount. */
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
export function assertPersgFacts27bis30(chapters) {
  assert.equal(createHash('sha256').update(JSON.stringify(chapters.slice(0,27))).digest('hex'),
    '4773954a1babd28a170a205e0f3f0006f0affe3a8dbddf60b5d68ba2b6ac0d2f','Published PDF1–14 must stay unchanged');
  const chapter=n=>chapters.find(c=>c.id===`persg-facts-${n}`);
  const tables=n=>chapter(n).bloecke.filter(b=>b.typ==='tabelle');
  const texts=n=>chapter(n).bloecke.map(b=>b.text||'').join('\n');
  for (const [n,page,count,targets] of [[27,15,0,[30,33,34]],[28,15,7,[39,40,23]],[29,16,7,[40,41]],[30,16,6,[40,42]]]) {
    assert.deepEqual(chapter(n).pages,[page]);assert.deepEqual(chapter(n).printedSheets,[n]);
    assert.equal(tables(n).length,count);assert.deepEqual(chapter(n).campusModules,targets);
    for(const b of chapter(n).bloecke) assert.deepEqual(b.quellenSeiten,[page]);
  }
  assert.ok(chapter(26).bloecke.find(b=>b.text?.startsWith('Fälle der Zuzahlung:')).text.endsWith('wird mit Zuzahlung'));
  assert.equal(chapter(27).bloecke[0].text,'getilgt');
  assert.equal(chapter(27).bloecke[1].text,'# neg. Kontokorrent im EU (privat veranlasst) wird bei Einbringung mit Zuzahlung getilgt');
  assert.equal(chapter(27).bloecke.length,3,'Sparse source: two source fragments and one separated provenance note, no filler');
  const over=tables(28);
  assert.deepEqual(over[0].zeilen,[['1. A, B & C – OHG → A & B – OHG','– Anwachsung','– Veräußerung'],['2. A & B – OHG → EU_A','– Auseinanders. Anspruch','– Anschaffung anteiliger WG']]);
  assert.deepEqual(over[1].zeilen,[['SBV_C (GrdSt.)','A, B & C – OHG','Schwarz; nach oben'],['A, B & C – OHG','A & B – OHG','Blau; entgeltlich']]);
  assert.deepEqual(over[2].zeilen,[
    ['a) Verkauf an A + B · C','→ § 16 (1) Nr. 2 EStG, Veräußerung MU-Anteil;'],
    ['A & B','a. MU-Betriebsaufspaltung, wenn Vermietung an OHG\nb. SBV A & B bei OHG, wenn unentg. Überlassung\nc. Bilanzierung bei Verkauf an OHG'],
    ['b) GrdSt wird PV des C','→ Aufgabe des MU-Anteils (§ 16 (3) S. 1 i.V.m. § 16 (1) Nr. 2 EStG'],
    ['c) Überführung in EU_C','→ § 6 (5) S. 2 EStG, Gewinn Gesamthandsbereich = lfder Gewinn'],
  ]);
  assert.deepEqual(over[3].zeilen,[['WG (st. Res. 30.000)','120.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Kap. C','40.000'],['','120.000','','120.000']]);
  assert.deepEqual(over[4].zeilen,[['WG (st. Res. 30.000)','120.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Verb. C','40.000'],['','120.000','','120.000']]);
  assert.deepEqual(over[5].zeilen,[['VKP','40.000'],['− BW','40.000'],['= Gewinn','0,–']]);
  assert.deepEqual(over[6].zeilen,[['40.000','40.000','40.000'],['AfA wie bisher','AfA wie bisher','AfA neu']]);
  const above=tables(29);
  assert.deepEqual(above[0].zeilen,[['WG (st. Res. 30.000)','120.000','Kap. A','40.000'],['(FW 60.000)','','Kap. B','40.000'],['','','Kap. C','40.000'],['','120.000','','120.000']]);
  assert.deepEqual(above[1].zeilen,[['VKP','70.000'],['./. Kap','40.000'],['= beg. Gewinn','30.000']]);
  assert.deepEqual(above[2].zeilen,[['WG (120.′ + 10.′)','130.000','Kap. A','40.000'],['FW','20.000','Kap. B','40.000'],['','','Abfind.verb.','70.000'],['','150.000','','150.000']]);
  assert.deepEqual(above[3].zeilen,[['WG','40.000','40.000','40.000'],['Aufstockung WG','','','+ 10.000 (10.′/30.′ der st. Reserven)'],['AK für WG bei A+B','','','50.000'],['FW','0','0','20.000 (20.′/30.′ der st. Reserven)']]);
  assert.deepEqual(above[4].zeilen,[['VKP','100.000'],['./. Kap','40.000'],['= beg. Gewinn','60.000']]);
  assert.deepEqual(above[5].zeilen,[['WG (120.′ + 10.′)','130.000','Kap. A','40.000'],['⅓ FW','20.000','./. Verl.','15.000'],['','','','25.000'],['sbA [im Original rot durchgestrichen]','30.000','Kap. B','40.000'],['','','./. Verl.','15.000'],['','','','25.000'],['','','Abfindverb.','100.000'],['','150.000','','150.000']]);
  assert.deepEqual(above[6].zeilen,[['sbA 30.000','./. Verl. 15.000 bei Kap. A','Blauer Pfeil; sbA-Zeile rot gestrichen'],['sbA 30.000','./. Verl. 15.000 bei Kap. B','Blauer Pfeil; sbA-Zeile rot gestrichen']]);
  const below=tables(30);
  assert.deepEqual(below[0].zeilen,[['1.','Aussch. G’ter verzichtet auf Mehrbetrag (z.B. um Zustimmung zum vorzeitigen Ausscheiden zu erhalten) → voll entgeltlicher Vorgang (s.u.)'],['2.','Einigung auf Minderabfindung (z.B. im Gesellschaftsvertrag) → teilentgeltlich (s. Fc 29)']]);
  assert.deepEqual(below[1].zeilen,[['Maschine','60.000','Kap. A','50.000'],['GruBo','120.000','Kap. B','50.000'],['Bank','10.000','Kap. C','50.000'],['','','Verb.','40.000'],['','190.000','','190.000']]);
  assert.deepEqual(below[2].zeilen,[['VKP','20.000'],['./. Kap','50.000'],['= Verlust','30.000']]);
  assert.deepEqual(below[3].zeilen,[['Masch.','60.000 / 180.000 × 30.000 =','10.000'],['GruBo','120.000 / 180.000 × 30.000 =','20.000'],['Summe','180.000','30.000']]);
  assert.deepEqual(below[4].zeilen,[['Maschine','50.000','Kap. A','50.000'],['GruBo','100.000','Kap. B','50.000'],['Bank','10.000','Abf.verb.','20.000'],['','','Verb.','40.000'],['','160.000','','160.000']]);
  assert.deepEqual(below[5].zeilen,[['20.000','20.000','20.000'],['','','./. 10.000*'],['','','= 10.000'],['AfA wie bisher','AfA wie bisher','AfA neu, RW/RND']]);
  assert.deepEqual(chapter(29).normen,['§ 728 BGB']);assert.deepEqual(chapter(30).normen,['§ 728 BGB']);
  assert.equal(chapter(30).bloecke.find(b=>b.text?.startsWith('Klebezettel: Stille Reserven')).text.split('\n')[0], 'Klebezettel: Stille Reserven aus SBV sind zusätzlich','No word borrowed from the other SBV note');
  for(const n of [29,30]) assert.ok(!JSON.stringify(chapter(n).normen).includes('135'),'No external HGB citation added to source');
  for(const text of ['1. Abfindung = BW','2. Abfindung > BW','3. Abfindung < BW','atypisch stillen Gesellschaften']) assert.ok(texts(28).includes(text));
  for(const text of ['vorher“; C rot durchgestrichen','im Verhältnis der stillen Reserven','(st. Res. WG / Σ aller st. Res.) × Aufstockungsbetrag','lästiger G’ter','darüber hinausgehender Anteil → Aufwand']) assert.ok(texts(29).includes(text));
  for(const text of ['um vorzeitig auszuscheiden','im Verhältnis der Buchwerte','Bank [rot durchgestrichen]','Verb. aufstocken [rot durchgestrichen]','Maschine, Grubo [grüner Haken]','keine (Sonder-)Abschr., sondern AK-Minderung','Klebezettel im Original um 180° gedreht','Warnsymbol','grüner Pfeil von „AfA neu“ zum Ergebnis 10.000']) assert.ok(texts(30).includes(text));
}
