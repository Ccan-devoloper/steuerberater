/* Fixed expectations from directly read original PDF13–14 (sheets23–26).
   Never compute or replace a source answer from a linked learning module. */
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
export function assertPersgFacts23bis26(chapters) {
  assert.equal(createHash('sha256').update(JSON.stringify(chapters.slice(0,23))).digest('hex'),
    '0c829d8e3b1ccb55e94c65dcb7ff0242e2a35ecf77f4ac573bb823dcd29160ec', 'Published PDF1–12 must stay unchanged');
  const chapter = n => chapters.find(c => c.id === `persg-facts-${n}`);
  const tables = n => chapter(n).bloecke.filter(b => b.typ === 'tabelle');
  for (const [n,page,count,targets] of [[23,13,7,[32,36,33]],[24,13,5,[33,36]],[25,14,6,[37,30,32]],[26,14,9,[30,33,34]]]) {
    assert.deepEqual(chapter(n).pages,[page]); assert.deepEqual(chapter(n).printedSheets,[n]);
    assert.equal(tables(n).length,count); assert.deepEqual(chapter(n).campusModules,targets);
    for (const block of chapter(n).bloecke) assert.deepEqual(block.quellenSeiten,[page]);
  }
  const zw=tables(23);
  assert.deepEqual(zw[2].zeilen,[['Vorher: EU_A','Nachher: A & B – OHG','Orange'],['Technik AfA AV: (3 Schritte)','OHG · AV 110.000','Rot; AV 110.000 im Original umkreist']]);
  const before=[['AV (st. Res. 20.000)','90.000','Kap.','100.000'],['UV','10.000','',''],['','100.000','','100.000']];
  assert.deepEqual(zw[3].zeilen,before);
  assert.deepEqual(zw[4].zeilen,[['AV','110.000','Kap.A','150.000'],['UV','10.000','',''],['FW','30.000','Kap.B','150.000'],['Bank','150.000','',''],['','300.000','','300.000']]);
  assert.deepEqual(zw[5].zeilen,[['Kap (nicht aufged. st. Res.)','15.000','AV (20/50)','6.000'],['','','FW (30/50)','9.000'],['','15.000','','15.000']]);
  assert.deepEqual(zw[6].zeilen,[
    ['1.','In Gesamthandsbilanz\nAfA nach Anschaffungsgrundsätzen'],
    ['2.','Schattenrechnung\nFrage: Mit welchem Wert müsste das WG abgeschrieben werden (bish. BW + Aufstockungsbetrag ./. AfA nach bish. Methode)'],
    ['3.','Korrektur AfA über Ergänzungsbilanz'],
  ]);
  const succession=tables(24);
  const opening=[['Eröffnungsbilanzwert 1.1.','500.000'],['450.000 × 5 % × 50 % =','11.250'],['Zwischensumme','511.250']];
  assert.deepEqual(succession[0].zeilen,opening); assert.deepEqual(succession[2].zeilen,opening);
  assert.deepEqual(succession[1].zeilen,[['511.250 × 3 % =','./. 15.337'],['31.12.','495.913']], 'Original integer result, not recalculated cents');
  assert.deepEqual(succession[3].zeilen,[['bish. BMG: HK','400.000'],['+ aufged. st. Res.','280.000'],['+ NK','11.250'],['BMG_neu','691.250']]);
  assert.deepEqual(succession[4].zeilen,[['691.250 × 4 % =','./. 27.650'],['31.12.','483.600']]);
  const admission=tables(25);
  assert.deepEqual(admission[0].zeilen,[['A & B – OHG · A','A, B, C – OHG','Blau'],['A & B – OHG · B','A, B, C – OHG','Orange'],['C, Geld','A, B, C – OHG','Grün']]);
  assert.deepEqual(admission[1].zeilen,[['AV (st. Res. 20.000)','90.000','Kap.A','50.000'],['','','Kap.B','50.000'],['UV','10.000','',''],['','100.000','','100.000']]);
  assert.deepEqual(admission[2].zeilen,[['AV','110.000','Kap.A','75.000'],['UV','10.000','Kap.B','75.000'],['FW','30.000','Kap.C','75.000'],['Bank','75.000','',''],['','225.000','','225.000']]);
  assert.deepEqual(admission[3].zeilen,[['Kap','25.000','AV','10.000'],['','','FW','15.000'],['','25.000','','25.000']]);
  assert.deepEqual(admission[4].zeilen,[['VKP','50.000','75.000'],['./. Kap','50.000','50.000'],['Gew.','0','25.000']]);
  assert.deepEqual(admission[5].zeilen,[['[begünstigt (1/3)]','[NICHT begünst. (2/3)]'],['8.334','16.666']], 'Keep original unequal rounding, not a calculated replacement');
  const pv=tables(26);
  assert.deepEqual(pv[0].zeilen,before);
  assert.deepEqual(pv[1].zeilen,[['VKP','75.000'],['./. ½ Kap:','50.000'],['lfder. Gew. (+ GewSt)','25.000']]);
  assert.deepEqual(pv[2].zeilen,[['A · ½ EU','A & B – OHG','Grün'],['B · ½ EU','A & B – OHG','Grün']]);
  assert.deepEqual(pv[3].zeilen,[['AV (st. Res. 10.000)','45.000','Kap.','50.000'],['UV','5.000','',''],['','50.000','','50.000']]);
  assert.deepEqual(pv[4].zeilen,[['AV','55.000','Kap.','75.000'],['FW','15.000','',''],['UV','5.000','',''],['','75.000','','75.000']]);
  assert.deepEqual(pv[5].zeilen,[['AV','110.000','Kap. A','75.000'],['UV','10.000','Kap. B','75.000'],['FW','30.000','',''],['','150.000','','150.000']]);
  assert.deepEqual(pv[6].zeilen,[['Kap','25.000','AV','10.000'],['','','Fw','15.000'],['','25.000','','25.000']]);
  assert.deepEqual(pv[7].zeilen,[['AV','90.000','Kap. A','50.000'],['UV','10.000','Kap. B','50.000'],['','100.000','','100.000']]);
  assert.deepEqual(pv[8].zeilen,[['AV','10.000','Kap','25.000'],['Fw','15.000','',''],['','25.000','','25.000']]);
  assert.ok(!JSON.stringify(pv).includes('Bank'), 'No bank/payment-to-company invented in the PV example');
  const lastNote=chapter(26).bloecke.find(b=>b.text?.startsWith('Fälle der Zuzahlung:')).text;
  assert.ok(lastNote.endsWith('wird mit Zuzahlung'), 'The final source sentence is incomplete on this page');
  const flat=JSON.stringify(chapters.slice(23));
  for (const text of ['einheitlichen %-Satz','Aufgabe Stufentheorie seit SeStEG','Besitzzeitanrechnung § 23 (1) iVm § 4 (2) S. 3',
    '(st. Res._WG / st. Res._insgesamt) × st. Res._aufgedeckt','Antrag: Aufdeckung 35.000 €',
    'soweit Höchstbetr. überschr.','HK 400.000','BW 31.12.VJ 220.000','Bedarfswert 450.000)',
    '§§ 24 (4), 23 (4) UmwStG','§§ 23 (3), 12 (3) UmwStG','§§ 7 (4) Nr. 1, 52 (21b) EStG',
    'AfA-Berechnung und der Rückwirkung','separates Wahlrecht durch neue PersG','stellt für A BW-Antrag',
    'mangels Antrag für B','Wert A & B OHG_bish: 150 T€','zu 2/3!','insges. 1/3 erhält','Tz. 24.16',
    'Kmpl.-GmbH zu 0 %','zwingend BW-Fortführung – Tz. 01.47','2 halbe Unternehmen',
    'neg. ErgBil A','pos. ErgBil B','Kein Satzende ergänzt']) assert.ok(flat.includes(text), `Missing original detail: ${text}`);
}
