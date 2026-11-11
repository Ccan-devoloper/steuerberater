/* Fixed original-PDF19–20 / sheets35–38 expectations.
   These literal source figures are not calculations inferred from campus modules. */
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
export function assertPersgFacts35bis38(chapters) {
  assert.equal(createHash('sha256').update(JSON.stringify(chapters.slice(0,35))).digest('hex'),
    '0e55c315baf62c61b1e067cd05d9a82bdc97e14ac32b5eac3ca789516a4094a8','Published PDF1–18 unchanged');
  const chapter=n=>chapters.find(c=>c.id===`persg-facts-${n}`);
  const tables=n=>chapter(n).bloecke.filter(b=>b.typ==='tabelle');
  const text=n=>chapter(n).bloecke.map(b=>b.text||'').join('\n');
  for (const [n,page,count,targets] of [[35,19,1,[40,43,16]],[36,19,7,[43,23,40]],[37,20,6,[43]],[38,20,9,[43,41]]]) {
    assert.deepEqual(chapter(n).pages,[page]); assert.deepEqual(chapter(n).printedSheets,[n]);
    assert.equal(tables(n).length,count); assert.deepEqual(chapter(n).campusModules,targets);
    for (const block of chapter(n).bloecke) assert.deepEqual(block.quellenSeiten,[page]);
  }
  const a=tables(35);
  assert.deepEqual(a[0].spalten,['a) Veräußerung MU-Anteil an alle verbl. G’ter','b) Veräußerung MU-Anteil an einzelne G’ter']);
  assert.deepEqual(a[0].zeilen,[
    ['– § 52 (33) S. 4 EStG i.V.m. R 15a (6) S. 4 EStR:\nÜbernahme neg. KapKto = sofort abzugsf. Verlust bei\nverbl. G’ter, soweit keine st. Res./Fw.','– kein direkt abzugsfähiger Aufwand'],
    ['– Untersch., ob mit Ausgleich noch gerechnet werden kann','– ErgBil des/der erwerbenden G’ter/s mit\nKorrekturposten, der erfolgsmindernd gegen zukünftige\nGewinne zu verrechnen ist'],
  ]);
  assert.equal(chapter(35).bloecke.filter(b=>b.typ==='titel').length,5);
  for (const phrase of ['Stille Reserven/Fw. ist vorhanden → Abfindungsanspruch des Ausscheidenden',
    'Forderung der verbl. G’ter','KapKto durch Entnahmen negativ geworden ist.',
    'auf Ausgleich wird durch verbl. G’ter aus betrieblichen Gründen verzichtet',
    'direkt abziehb. Aufw. (a.A. „Bad Will“)',
    'Aussch. muss nicht ausgl., da er Kdt ist, neg. KapKto wegen Verlusten',
    'unabh., ob vorher § 15a EStG, ggf. Verr. § 15a (4) EStG',
    'Differenzbetrag wird aus privaten Gründen erlassen',
    'unentgeltliche Übertragung nach § 6 (3) EStG, beim Ausscheidenden entsteht kein Gewinn',
    'Verbl. Gesellschafter führen KapKto des Ausscheidenden fort']) assert.ok(text(35).includes(phrase),phrase);
  const b=tables(36);
  assert.deepEqual(b[0].spalten,['Fall','Zivilrechtlich','Steuerrechtlich']);
  assert.deepEqual(b[0].zeilen,[['A,B & C – OHG → A,B & D – OHG','– Veräußerung\nGesellschaftsanteil','– Veräußerung\n– Anschaffung anteiliger WG']]);
  assert.deepEqual(b[1].zeilen,[['A, B & C – OHG','entgeltlich →','A,B & D – OHG']]);
  assert.deepEqual(b[2].zeilen,[
    ['a) Verkauf an D','→ § 16 (1) Nr. 2 EStG, Veräußerung MU-Anteil;','SBV_D, wenn Vermietung an OHG'],
    ['b) GrdSt wird PV des C','→ Aufgabe des MU-Anteils (§ 16 (3) S. 1 i.V.m. § 16 (1) Nr. 2 EStG',''],
    ['c) Überführung in EU_C','→ § 6 (5) S. 2 EStG','Gewinn Gesamthandsbereich = lfder Gewinn'],
  ],'Unclosed source parenthesis is not repaired');
  assert.deepEqual(b[3].zeilen,[['Abfindung = BW','Abfindung > BW','Abfindung < BW']]);
  assert.deepEqual(b[4].zeilen,[['WG (st. Res. 30.000)','120.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Kap. C','40.000'],['','120.000','','120.000']]);
  assert.deepEqual(b[5].zeilen,[['WG (st. Res. 30.000)','120.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Kap. D','40.000'],['','120.000','','120.000']]);
  assert.deepEqual(b[6].spalten,['A','B','C [im Original durchgestrichen] D']);
  assert.deepEqual(b[6].zeilen,[['40.000','40.000','40.000 (= AK_D)'],['AfA wie bisher','AfA wie bisher','AfA neu']]);
  for(const phrase of ['(s. fc. 26)','zu § 6b s. fc. 30','VKP 40.000 – BW 40.000 = Gewinn 0,–','schwarzer gebogener Pfeil','violette Pfeil vom Achtungszettel']) assert.ok(text(36).includes(phrase),phrase);
  const c=tables(37);
  assert.deepEqual(c[0].zeilen,[['WG (st. Res. 30.000)','120.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Kap. C','40.000'],['','120.000','','120.000']]);
  assert.deepEqual(c[1].zeilen,[['C','D','MU-Anteil →'],['D','C','70.000 · gestrichelter Rückpfeil']]);
  assert.deepEqual(c[2].zeilen,[['VKP','70.000'],['./. Kap','40.000'],['= beg. Gewinn','30.000']]);
  assert.deepEqual(c[3].zeilen,[['WG (⅓ st. Res.)','10.000','Kap.','30.000'],['Fw','20.000','',''],['','30.000','','30.000']]);
  assert.deepEqual(c[4].zeilen,[['40.000','40.000','40.000'],['','','+ 10.000 (st. Res.)'],['','','50.000 = AK_D'],['AfA wie bisher','AfA wie bisher','AfA neu']]);
  assert.deepEqual(c[5].zeilen,[['–','–','–'],['','','+ 20.000 (st. Res.)'],['','','20.000 = AK_D'],['AfA wie bisher (–)','AfA wie bisher (–)','AfA § 7 (1) S. 3 EStG']]);
  for (const phrase of ['Σ 70.000 € = gezahlter Preis','„richtiger“ AfA_D → Erbil_D!!',
    '✓ Gebäude: Änderung AfA-BMG, Neubeginn AfA, § 52 (21b) EStG [3 %]',
    '✓ Gebäude: Keine AfA mehr nach § 7 (5) EStG',
    '✓ Keine degressive AfA mehr nach § 7 (2) EStG ab 2011',
    '✓ Ggf. Anwendung von § 6 (2), (2a) EStG',
    '✓ Beachte auch: Neuschätzung der RND bei Anschaffung gebrauchter WG']) assert.ok(text(37).includes(phrase),phrase);
  const d=tables(38);
  assert.deepEqual(d[0].zeilen,[['WG (st. Res. 30.000)','120.000','Kap. A','10.000'],['','','Kap. B','10.000'],['','','Kap. C','10.000'],['','','RL § 6b','90.000'],['','120.000','','120.000']]);
  assert.deepEqual(d[1].zeilen,[['C','D','MU-Anteil →'],['D','C','70.000 · gestrichelter Rückpfeil']]);
  assert.deepEqual(d[2].zeilen,[['VKP','70.000'],['+ Auflösung § 6b','30.000'],['+ § 6b (7) EStG · (30.000 × 2 J. × 6 %)','3.600'],['./. Kapital (inkl. aufgel. ant. RL)','40.000'],['= beg. Gewinn','63.600']]);
  assert.deepEqual(d[3].zeilen,[['WG','120.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Kap. D','40.000'],['','120.000','','120.000']]);
  for (const index of [4,5,8]) assert.deepEqual(d[index].zeilen,[['Kap','30.000','RL § 6b','30.000'],['','30.000','','30.000']]);
  assert.deepEqual(d[6].zeilen,[['WG','10.000','Kap.','30.000'],['Fw','20.000','',''],['','30.000','','30.000']]);
  assert.deepEqual(d[7].zeilen,[['VKP','70.000'],['./. Kap (inkl. aufgel. ant. RL)','40.000'],['Gewinn','30.000']]);
  for(const phrase of ['R 6b.2 (10) S. 6 EStR','ErgBil_A','ErgBil_B','+ ErgBil_C',
    '2. Beibehaltung durch C (für verbleibenden Zeitraum nach § 6b (3) EStG)',
    'Bilanz ist dieselbe, da RL insoweit in der GHB stets aufzulösen!',
    '(Beg. § 16 + § 34 EStG scheidet für übrige st. Res aus, wenn RL aus wes. Betriebsgrdl.!)',
    'Ausw. D: s.o.','Bildung RL § 6b EStG anl. Verkauf / Überf. RL § 6b EStG in anderes BV']) assert.ok(text(38).includes(phrase),phrase);
  // All three materially different reserves remain tied to their own source view.
  assert.ok(text(38).includes('Keine Zahl aus dem 150.000-/50.000-Austrittsfall'));
}
