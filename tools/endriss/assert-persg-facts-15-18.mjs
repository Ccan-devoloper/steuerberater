/* Independent image-read expectations for PDF9–10 / printed sheets15–18.
   These fixed fixtures preserve the source, not a newly calculated solution. */
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
export function assertPersgFacts15bis18(chapters) {
  const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
  assert.equal(hash(chapters.slice(0,15)), '8d302e6520ad44de2ec60df2a7ee97e275b48b8fa0ec665a85d8f7511bc24fde', 'Released PDF1–8 must not change');
  const chapter = n => chapters.find(c => c.id === `persg-facts-${n}`);
  const tables = n => chapter(n).bloecke.filter(b => b.typ === 'tabelle');
  assert.deepEqual(['15','16','17','18'].map(n=>tables(n).length), [8,5,3,4]);
  for (const [n,page,targets] of [['15',9,[22,20]],['16',9,[23,25,26]],['17',10,[24,27]],['18',10,[11,29,30]]]) {
    assert.deepEqual(chapter(n).pages,[page]); assert.deepEqual(chapter(n).printedSheets,[Number(n)]);
    assert.deepEqual(chapter(n).campusModules,targets);
    for (const block of chapter(n).bloecke) assert.deepEqual(block.quellenSeiten,[page]);
  }
  const pv=tables('15');
  assert.deepEqual(pv[0].zeilen,[['A_PV','A & B OHG','GruBo_2024 · grüner Übertragungspfeil'],['A','A & B OHG','90 %'],['B','A & B OHG','10 %']]);
  assert.deepEqual(pv[1].zeilen,[['VKP','150.000 €'],['./. AK','80.000 €'],['Überschuss =','70.000 €']]);
  assert.deepEqual(pv[2].zeilen,[['gem. Wert hingegeb. Gesellschaftsrechte','150.000 €'],['zzgl. NK (GrESt*)','500 €'],['AK =','150.500 €']]);
  assert.deepEqual(pv[3].zeilen,[['GruBo','150.'],['an KapI_A','100.000'],['ges.geb. KapRL','50.000'],['s. Verb.','500']], 'Original abbreviated booking must not silently acquire500');
  assert.deepEqual(pv[4].zeilen,[['= TW','150.000 €'],['GrESt*','0 €']]);
  assert.deepEqual(pv[5].zeilen,[['VKP','112.500 €'],['./. AK','60.000 €'],['Überschuss =','52.500 €']]);
  assert.deepEqual(pv[6].zeilen,[['AK: gem. W. hingeg. GesR','112.500 €'],['zzgl. NK','500 €'],['HR AK','113.000 €'],['Einlagewert 25 %','37.500 €'],['StR Zugangswert','150.500 €']]);
  assert.deepEqual(pv[7].zeilen,[['HR: GruBo 113. an','KapI_A 112.500'],['','so. Verb. 500'],['zus.StR:','GruBo 37.500 an sbE 37.500'],['außerbil.:','./. 37.500']]);
  const bv=tables('16');
  assert.deepEqual(bv[0].zeilen,[
    ['Überführung (kein Rechtsträgerwechsel)','EU1_A → EU2_A','§ 4 (1) S. 2, 8, § 6 (5) S. 1 EStG'],
    ['Überführung (kein Rechtsträgerwechsel)','EU_A ↔ SBV_A','§ 4 (1) S. 2, 8, § 6 (5) S. 2 EStG'],
  ]);
  assert.deepEqual(bv[2].zeilen,[['SBV_A bei A & B OHG','A & B OHG','↔'],['SBV_A bei A & B OHG','A & X KG','↔ · oder']]);
  for (const [i,nr,label] of [[1,1,'A'],[3,2,'SBV_A']]) {
    assert.deepEqual(bv[i].spalten,['Veräußerung','gegen [Mind.] Gesellschaftsrechte','unentgeltlich']);
    assert.deepEqual(bv[i].zeilen,[[`${label}: Aufdeckung st. Res. · OHG: AK`,'§ 6 (6) S. 4 EStG',''],['',`§ 6 (5) S. 3 Nr. ${nr} EStG: ZWINGEND Buchwert (in voller H.)`,`§ 6 (5) S. 3 Nr. ${nr} EStG: ZWINGEND Buchwert (in voller H.)`]]);
  }
  assert.deepEqual(bv[4].zeilen,[
    ['Übertragung (Rechtsträgerwechsel)','SBV_A bei A & B OHG → SBV_B bei A & B OHG','unentgeltlich: → § 6 (5) S. 3 Nr. 3 EStG: ZWINGEND Buchwert'],
    ['Neu:','A & B OHG → A & B KG','§ 6 (5) S. 3 Nr. 4 – beachte Beteiligungsidentität'],
  ]);
  const deadlines=tables('17');
  assert.equal(chapter('17').title,'17 · Sperrfristen gem. § 6 (5) S. 4–6 EStG');
  assert.deepEqual(deadlines[0].zeilen,[
    ['S. 4','Veräuß. / PE / Umw. innerh. von 3 Jahren','Ausnahme bei Nr. 1 + 2: neg. ErgBil für Übertr.'],
    ['S. 5','Erhöhung / Begründung Anteil durch Beteiligung KapG innerh. von 3 Jahren',''],
    ['S. 6, 7','Umwandlung / Einbringung / Anwachsung in/auf KapG innerhalb von 7 Jahren',''],
  ]);
  assert.deepEqual(deadlines[1].zeilen,[['EU_A','A-GmbH & Co. KG','Übertragungspfeil'],['A-GmbH','A-GmbH & Co. KG','0 %'],['A','A-GmbH & Co. KG','100 %']]);
  assert.deepEqual(deadlines[2].zeilen,[
    ['nachfolgende Kettenübertragung gem. § 6 (5) S. 3 EStG → neue Sperrfrist','„fiktive“ Entnahme i.S.d. § 4 (1) S. 3 EStG bzw. „fiktive“ Veräußerung i.S.d. § 12 KStG'],
    ['nachfolgende Realteilung → neue Sperrfrist','Umwandlungen, Einbringungen innerh. von 3 Jahren gleich ob zu BW/ZW oder gW'],
    ['Ausscheiden aufgrund höherer Gewalt','Umwandlung, Einbringung Anwachsung in/auf KapG innerhalb von 7 Jahren'],
    ['nachfolgende Kettenübertragung gem. § 6 (5) S. 1 od. 2 EStG → bish. Sperrfrist läuft weiter',''],
  ]);
  const foundation=tables('18');
  const columns=['A: Bargeld','B: Gebäude aus EU','C: GruBo aus PV','D: Einzelunternehmen'];
  assert.deepEqual(foundation[0].zeilen,columns.map((label,i)=>[label,'A, B, C, D – OHG',['Schwarz','Blau','Rot','Grün'][i]]));
  for (const table of foundation.slice(1)) { assert.deepEqual(table.spalten,columns); assert.equal(table.zeilen.length,1); }
  assert.deepEqual(foundation[1].zeilen[0],[
    'Wenn noch nicht in voller Höhe eingezahlt: Ausweis KapKto in voller Höhe und Forderung auf Aktivseite',
    'HR: Zeitwert · StR: zwing. BW, daher neg. ErgBili. ≠ Sperrfrist · § 6 (5) S. 3 Nr. 1 EStG → s. fc Nr. 14',
    'HR: Zeitwert · StR: § 6 (6) S. 1 EStG (bei C: § 23 EStG) → s. fc. Nr. 15',
    '§ 24 UmwStG → s. fc. Nr. 18 ff.',
  ]);
  assert.deepEqual(foundation[2].zeilen[0],[
    'Bei ungleichen Werten der Wirtschaftsgüter wird Differenz in der Regel über Zuzahlung geregelt ≠ Zuzahlung in PV',
    '– AfA_HR von Zeitwert · – AfA_StR von BW+NK (Achtung: § 52 (21b EStG bei Gebäuden) · – AfA über ErgBil korrig.',
    '– kein Fall der Einlage, da entgeltlich · – weitere Möglichkeiten: (§ 20 (2) EStG, § 17 EStG)',
    '– § 24 UmwStG gilt nur soweit Gesellschaftsrechte eingeräumt werden – bei Gegenleistungen darüber hinaus → ant. Veräußerung/Mischentgelt',
  ]);
  assert.deepEqual(foundation[3].zeilen,[['','Erl. Nr. 1 § 6/15 · Erl. Nr. 1 § 6/16','Erl. Nr. 1 § 4/13 · Erl. Nr. 1 § 4/15','Erl. Nr. 130']]);
  const text=JSON.stringify(chapters.slice(15));
  for (const marker of ['AK_2018 80.000 €, Bedarfsw. 100.000 €, TW 150.000 €','GrESt-Satz: 5 %','100.000 x 5% x 10 %','Schenkung an B','oder KapII_A','75 % entgeltl. / 25 % unentg.','25 %: kein § 23 EStG, ggf. (1) S. 5 Nr. 1','150.500 € werden nicht','gleichz. Übernahme Verb. unschädlich','gleichz. Übern. von Verb. → schädlich','Nachrangig ggü.: 1. § 6 (3) EStG · 2. § 24 UmwStG · 3. § 16 (3) S. 2 EStG','Zur Übertragung aus PV: → s. fc 13','[dagegen: BFH v. 31.07.13 – I R 44/12]','beim Übertragenden versteuert','§ 175 (1) S. 1 Nr. 2 AO','4 Möglichkeiten: jew. gegen Gutschrift auf KapKto I','„§ 52 (21b EStG“ fehlt im Original']) assert.ok(text.includes(marker),`Source detail missing: ${marker}`);
}
