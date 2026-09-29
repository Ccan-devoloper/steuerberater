import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

// Independent source fixtures from directly inspected PDF7–8, not calculations.
export function assertPersgFacts11bis14(chapters) {
  assert.equal(createHash('sha256').update(JSON.stringify(chapters.slice(0,11))).digest('hex'),
    'ca75da4ad169153f59756358b27b156cf4fbd7bdab002562351995d3b2aac6ae', 'Previously released PDF1–6 changed');
  const table = id => chapters.find(c=>c.id===`persg-facts-${id}`).bloecke.filter(b=>b.typ==='tabelle');
  assert.deepEqual(table('11')[0].zeilen, [
    ['A-GmbH','A-GmbH & Co.KG','0 % · GF_KG'], ['A','A-GmbH & Co.KG','100 %'], ['A','A-GmbH','100 % · GF_GmbH'],
  ]);
  assert.deepEqual(table('11')[2].spalten, ['Gewinnverteilung','A-GmbH','A','KG']);
  assert.deepEqual(table('11')[2].zeilen, [
    ['JÜ 100.000','0 €','100.000 €','100.000 €'], ['Zuführung Verrkto A','','100.000 €',''],
    ['vGA § 8 (3) S. 2 KStG','5.000 €','− 5.000 €*','0 €'],
    ['§ 15 (1) Nr. 2 S. 1 1. HS EStG','5.000 €','95.000 €','100.000 €'],
    ['§ 15 (1) Nr. 2 S. 1 2. HS EStG','--','+ 5.000 €','5.000 €'],
    ['§ 3 Nr. 40 S. 1 d), S. 2 EStG','--','− 2.000 €','− 2.000 €'],
    ['Summe','5.000 €','98.000 €','103.000 €'],
  ]);
  assert.deepEqual(table('12')[0].zeilen, [
    ['B','X-GmbH','100 %'], ['A','A&B OHG','50 %'], ['B','A&B OHG','50 %'],
    ['X-GmbH','X-GmbH & Co. KG','0 %'], ['A&B OHG','X-GmbH & Co. KG','50 %'], ['C','X-GmbH & Co. KG','50 %'],
  ]);
  assert.deepEqual(table('12')[1].spalten, ['Gewinnverteilung','X-GmbH','OHG','C','A','B','KG']);
  assert.deepEqual(table('12')[1].zeilen, [
    ['JÜ 200.000','','','','','',''], ['− GF 100.000','100.000','','','','','100.000'],
    ['− Haf. 10.000','10.000','','','','','10.000'], ['Rest 90.000','--','45.000','45.000','--','--','90.000'],
    ['GmbH SBA','− 100.000','--','--','--','--','− 100.000'],
    ['SBE_B','--','--','--','--','100.000','100.000'], ['SBE_A','--','--','--','20.000','--','20.000'],
    ['Summe','10.000','45.000','45.000','20.000','100.000','220.000'],
  ]);
  assert.deepEqual(table('13')[3].zeilen, [
    ['Bet. OHG','100.000','gez. Kap.','300.000'], ['GrdSt','200.000','JÜ','11.000'],
    ['Forderung','10.000','',''], ['Bank_Miete','1.000','',''],
  ]);
  assert.deepEqual(table('13')[4].zeilen, [
    ['Bet. OHG','310.000','gez. Kap.','300.000'], ['GrdSt','0','JÜ','11.000'],
    ['Forderung','0','StAP','0'], ['Bank_Bet.ertrag','1.000','',''],
  ]);
  assert.deepEqual(table('13')[5].zeilen, [['Kap I GmbH','100.000'],['Kap II GmbH','10.000']]);
  assert.deepEqual(table('13')[6].zeilen, [
    ['GrdSt','200.000','Kap 1.1.','0'], ['','','NE','200.000'], ['','','PE','− 1.000'], ['','','Gewinn','1.000'],
  ]);
  assert.ok(table('13')[0].zeilen.every(row=>row[2].includes('kein Prozentsatz angegeben')));
  assert.deepEqual(table('14')[0].zeilen.map(row=>row[1]), ['PV_A → EU_A','PV_A → SBV_A','PV_A → A & B OHG']);
  assert.deepEqual(table('14')[1].zeilen, [
    ['A: ggf. §§ 17, 20 (2), 23 EStG; OHG: AK','= tauschähnlicher Umsatz !! · A: ggf. §§ 17, 20 (2), 23 EStG; OHG: AK','§ 4 (1) S. 8 EStG · A: ggf. § 23 (1) S. 5 EStG · OHG: § 6 (1) Nr. 5 EStG'],
    ['gegen Geld','KapKto I','ausschl. ges. geb. KapRL'],
    ['Übernahme Restschuld','KapKto I und KapKto II','ausschl. KapKto II (BMF 26.07.2016)'],
    ['Gutschr. auf Darl.kto','KapKto I und ges. geb. KapRL','KapKto II und ges. geb. KapRL'],
    ['','','HR: keine Buchung / sbE + · StR: sbE + außerbil. Korrektur'],
  ]);
  const text = JSON.stringify(chapters.slice(11));
  for (const marker of ['3. Sp.Str. 2. HS !!', 'sichtbare Quellnotiz endet nach diesem Paragraphenzeichen',
    'es können nicht mehr als 100.000 verteilt werden', 'SBV_A bei KG', 'SBE_B bei KG',
    'p.a. Miete 1.000 €', 'monatliche Miete', 'ohne außerbil. Korrekturen', 'keine TW-Abschreibung',
    '§ 8 (1) KStG iVm § 4 (5) Nr. 2 EStG: + 750 €', '§ 9 Nr. 2 GewStG: ./. 11.750 €',
    'handelsrechtliche Buchung entscheidend!', 'Erl. Nr. 1 § 4/13/15 + § 6/16',
    'tatsächliche Blattnummer 11','tatsächliche Blattnummer 12','tatsächliche Blattnummer 13','tatsächliche Blattnummer 14']) {
    assert.ok(text.includes(marker), `Missing original detail or explicit source boundary: ${marker}`);
  }
}
