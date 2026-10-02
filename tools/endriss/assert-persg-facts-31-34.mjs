/* Fixed expectations read independently from original PDF17–18, sheets31–34.
   Do not solve unfinished calculations or repair the source's contradictions. */
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
export function assertPersgFacts31bis34(chapters) {
  assert.equal(createHash('sha256').update(JSON.stringify(chapters.slice(0,31))).digest('hex'),
    '80a0c8f14d4df51a4e47250f87d959cbbcb0eb39daf0f8412555fa0563b892a2','Published PDF1–16 unchanged');
  const chapter=n=>chapters.find(c=>c.id===`persg-facts-${n}`);
  const tables=n=>chapter(n).bloecke.filter(b=>b.typ==='tabelle');
  const texts=n=>chapter(n).bloecke.map(b=>b.text||'').join('\n');
  for(const [n,page,count,targets] of [[31,17,6,[39,40,41]],[32,17,5,[41]],[33,18,0,[41]],[34,18,7,[42,41,44]]]) {
    assert.deepEqual(chapter(n).pages,[page]);assert.deepEqual(chapter(n).printedSheets,[n]);
    assert.equal(tables(n).length,count);assert.deepEqual(chapter(n).campusModules,targets);
    for(const block of chapter(n).bloecke) assert.deepEqual(block.quellenSeiten,[page]);
  }
  const a=tables(31);
  assert.deepEqual(a[0].zeilen,[['Maschine','60.000','Kap. A','50.000'],['GruBo','120.000','Kap. B','50.000'],['Bank','10.000','Kap. C','50.000'],['','','Verb.','40.000'],['','190.000','','190.000']]);
  assert.deepEqual(a[1].zeilen,[['VKP','20.000'],['./. Kap','50.000'],['= Verlust','30.000']]);
  assert.deepEqual(a[2].zeilen,[['1.','Fortführung der Buchwerte unter teilw. Neuberechnung AfA'],['2.','Gewinnerhöhung i.H.d. Unterschiedsbetrags (30.000)']]);
  assert.deepEqual(a[3].zeilen,[['Maschine','60.000','Kap. A','65.000'],['GruBo','120.000','Kap. B','65.000'],['Bank','10.000','Abf.verb.','20.000'],['','','Verb.','40.000'],['','190.000','','190.000']]);
  assert.deepEqual(a[4].zeilen,[['20.000','20.000','20.000']]);
  assert.deepEqual(a[5].zeilen,[['Buchwertfortführung','20.000 × 30/50','AfA wie bisher'],['Anschaffung','20.000 × 20/50','AfA neu, RW/RND']]);
  assert.deepEqual(chapter(31).normen,['§ 728 BGB','BFH v. 11.07.1973 I R 126/71']);
  for(const item of ['wg. Gesellschaftsvertrag','Zwei blaue Pfeile führen von diesem Hinweis zu Kap. A 65.000 und Kap. B 65.000','grüne Klammer verbindet A, B und die Buchwertfortführung','von „AfA neu“ zur Anschaffung']) assert.ok(texts(31).includes(item));
  assert.ok(!JSON.stringify(chapter(31)).includes('12.000')&&!JSON.stringify(chapter(31)).includes('8.000'),'Original fraction products remain uncalculated');
  const b=tables(32);
  assert.deepEqual(b[0].zeilen,[['WG','150.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Kap. C','40.000'],['','','RL § 6b','30.000'],['','150.000','','150.000']]);
  assert.deepEqual(b[1].zeilen,[['RL § 6b (3)','10.000'],['+ § 6b (7) · (10.000 × 2 J. × 6 %)','1.200'],['+ Abfindung','50.000'],['./. KapKto (inkl. aufgel. ant. RL)','50.000'],['beg. Gewinn','11.200']]);
  assert.deepEqual(b[2].zeilen,[['WG','150.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Verbindl.','50.000'],['','','RL § 6b','20.000'],['','150.000','','150.000']]);
  assert.deepEqual(b[3].zeilen,[['VKP','50.000'],['./. Kap (inkl. aufgel. ant. RL)','50.000'],['Gewinn','0']]);
  assert.deepEqual(b[4].zeilen,[['Kap','10.000','RL § 6b','10.000'],['','10.000','','10.000']]);
  for(const item of ['1. (ant.) Auflösen\n2. beibehalten','Bilanz ist dieselbe, da RL insoweit in der GHB stets aufzulösen!','kann er Sie in einer „vermögenslosen“ Ergänzungsbilanz fortführen.','Klebezettel: Diese Ausführungen gelten auch für Rücklagen in der\nQuellenhinweis:','siehe 2. (ErgBil)']) assert.ok(texts(32).includes(item));
  assert.equal(chapter(33).bloecke.length,3,'One original line plus title citation and separated scope note only');
  assert.equal(chapter(33).bloecke[1].text,'– Überführung RL § 6b EStG in anderes BV (im Zeitpunkt der Reinvestition)');
  assert.ok(texts(33).includes('kein Satzende'));assert.equal(tables(33).length,0);
  const c=tables(34);
  assert.deepEqual(c[0].zeilen,[['GruBo (st. Res. 20.000)','30.000','Kap. A','40.000'],['WG (st. Res. 10.000)','90.000','Kap. B','40.000'],['','','Kap. C','40.000'],['','120.000','','120.000']]);
  assert.deepEqual(c[1].zeilen,[['„VKP“','50.000'],['./. Kap','40.000'],['= beg. Gewinn','10.000']]);
  assert.deepEqual(c[2].zeilen,[['GruBo 10.000','GruBo 10.000','GruBo 10.000'],['','','+ 6.666'],['','','16.666']]);
  assert.deepEqual(c[3].zeilen,[['GruBo (st. Res. 13.334)','36.666','Kap. A','40.000'],['WG (st. Res. 6.666)','93.334','Kap. B','40.000'],['','','Abf.Verb.','50.000'],['','130.000','','130.000']]);
  assert.deepEqual(c[4].zeilen,[['Abf.Verb. C','50.000','GruBo','36.666'],['','','sbE','13.334']]);
  assert.deepEqual(c[5].zeilen,[['GruBo','0','Kap. A','46.667'],['WG (st. Res. 6.666)','93.334','Kap. B','46.667'],['','93.334','','93.334']]);
  assert.deepEqual(c[6].zeilen,[['BW GruBo','10.000','10.000','16.666'],['VKP','16.667','16.667','16.666'],['Gewinn','6.667','6.667','0']]);
  for(const item of ['Veräußerungsgewinn (=Abfindungsverb.) C bestimmen','(st.Res. WG / Se aller st. Res) × Aufstockungsbetrag','Nach Schritt 1 · A,B,C OHG','Nach Schritt 2 · A,B,C OHG','vom sbE-Betrag 13.334 zu Kap. A 46.667 und Kap. B 46.667','zur 0 in der ehemaligen C-Spalte','(→ Erl. Nr. 1 § 16/3)']) assert.ok(texts(34).includes(item));
  assert.ok(!texts(34).includes('Σ'),'Do not normalize the literal source Se');
  for(const n of [31,34]) assert.ok(tables(n).some(t=>t.spalten.some(s=>s.includes('durchgestrichen'))),'Original former-C columns stay labelled');
}
