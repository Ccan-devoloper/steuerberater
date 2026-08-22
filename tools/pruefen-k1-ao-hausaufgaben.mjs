import fs from 'node:fs';
import {k1AoHausaufgaben,k1AoHausaufgabenDidaktik,AO_HAUSAUFGABEN_PAGE_PLANS,AO_HAUSAUFGABEN_BY_MODULE} from '../src/data/k1-ao-hausaufgaben-alle.js';
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};

assert(k1AoHausaufgaben.length===7,'AO Hausaufgaben: Unterlagen 1.+2. sowie 3.–8. Fachtermin erwartet.');
assert(k1AoHausaufgabenDidaktik.length>=3,'AO Hausaufgaben: didaktischer Hinweis S. 1 fehlt.');

const erwartet=new Map([
  ['AO-HA-1-2',{seiten:9,faelle:4,ids:['AO-HA12-1','AO-HA12-2','AO-HA12-3','AO-HA12-4']}],
  ['AO-HA-3',{seiten:11,faelle:3,ids:['AO-HA3-1','AO-HA3-2','AO-HA3-3']}],
  ['AO-HA-4',{seiten:13,faelle:3,ids:['AO-HA4-1','AO-HA4-2','AO-HA4-3']}],
  ['AO-HA-5',{seiten:15,faelle:3,ids:['AO-HA5-1','AO-HA5-2','AO-HA5-3']}],
  ['AO-HA-6',{seiten:16,faelle:4,ids:['AO-HA6-1','AO-HA6-2','AO-HA6-3','AO-HA6-4']}],
  ['AO-HA-7',{seiten:14,faelle:3,ids:['AO-HA7-1','AO-HA7-2','AO-HA7-3']}],
  ['AO-HA-8',{seiten:25,faelle:3,ids:['AO-HA8-1','AO-HA8-2','AO-HA8-3']}],
]);

for(const termin of k1AoHausaufgaben){
  const soll=erwartet.get(termin.id);
  assert(soll,`AO Hausaufgaben: unbekannte Unterlage ${termin.id}.`);
  assert(termin.rechtsstand==='2025'&&termin.seiten===soll.seiten,`AO Hausaufgaben: Quellenmetadaten ${termin.id} falsch.`);
  assert(termin.faelle.length===soll.faelle,`AO Hausaufgaben: Fallzahl ${termin.id} falsch.`);
  const plan=AO_HAUSAUFGABEN_PAGE_PLANS.get(termin.id);
  assert(plan&&Object.keys(plan).length===termin.seiten,`AO Hausaufgaben: Seitenplan ${termin.id} nicht ${termin.seiten}/${termin.seiten}.`);
  for(let p=1;p<=termin.seiten;p++)assert(plan[p],`AO Hausaufgaben ${termin.id}: PDF-Seite ${p} fehlt im Seitenplan.`);
  const byId=new Map(termin.faelle.map(f=>[f.id,f]));
  for(const id of soll.ids)assert(byId.has(id),`AO Hausaufgaben: ${id} fehlt.`);
  const covered=new Set([1,...termin.faelle.flatMap(f=>f.sourcePages||[])]);
  for(let p=1;p<=termin.seiten;p++)assert(covered.has(p),`AO Hausaufgaben ${termin.id}: PDF-Seite ${p} ist keinem Fall/Didaktikblock zugeordnet.`);
  for(const fall of termin.faelle)assert(fall.aufgabe?.length&&fall.loesung?.length&&fall.ergebnis&&fall.normen?.length&&fall.querverweise?.length,`AO Hausaufgaben: ${fall.id} unvollständig.`);
}

assert(k1AoHausaufgaben.reduce((s,t)=>s+t.seiten,0)===103,'AO Hausaufgaben: Gesamtseitenzahl muss 103/103 betragen.');
assert(k1AoHausaufgaben.reduce((s,t)=>s+t.faelle.length,0)===23,'AO Hausaufgaben: insgesamt 23 Fälle erwartet.');

const dataAlt=fs.readFileSync(new URL('../src/data/k1-ao-hausaufgaben.js',import.meta.url),'utf8');
const data3=fs.readFileSync(new URL('../src/data/k1-ao-hausaufgaben-3.js',import.meta.url),'utf8');
const data4=fs.readFileSync(new URL('../src/data/k1-ao-hausaufgaben-4.js',import.meta.url),'utf8');
const data5=fs.readFileSync(new URL('../src/data/k1-ao-hausaufgaben-5.js',import.meta.url),'utf8');
const data6=fs.readFileSync(new URL('../src/data/k1-ao-hausaufgaben-6.js',import.meta.url),'utf8');
const data7=fs.readFileSync(new URL('../src/data/k1-ao-hausaufgaben-7.js',import.meta.url),'utf8');
const data8=fs.readFileSync(new URL('../src/data/k1-ao-hausaufgaben-8.js',import.meta.url),'utf8');
const ui=fs.readFileSync(new URL('../src/components/AOHausaufgaben.jsx',import.meta.url),'utf8');
const campus=fs.readFileSync(new URL('../src/components/AOCampusV3.jsx',import.meta.url),'utf8');

for(const marker of ['ernstlichen Meinungsverschiedenheiten','§ 122 Abs. 7','auf Null reduziert','04.08.12','15.05.12','01.09.12','52.000 €','40.000 €'])assert(dataAlt.includes(marker),`AO Hausaufgaben 1.+2.: Quellenmarker fehlt: ${marker}`);
for(const marker of ['31.12.2024 geltenden Fassung','Kurzbescheid','23.880 €','2.880 €','19.600 €'])assert(data3.includes(marker),`AO Hausaufgabe 3: Quellenmarker fehlt: ${marker}`);
for(const marker of ['900.000 €','800.000 €','60.000 €','25.000 €','120.000 €','90.000 €','elf selbständige sonstige Verwaltungsakte','§ 69 Abs. 4 FGO'])assert(data4.includes(marker),`AO Hausaufgabe 4: Quellenmarker fehlt: ${marker}`);
for(const marker of ['250.000 €','96.000 €','100.000 €','24.08.03','500.000 €','420.000 €','23.07.15','24.09.14','+800 €','160.000 €','10.02.18'])assert(data5.includes(marker),`AO Hausaufgabe 5: Quellenmarker fehlt: ${marker}`);
for(const marker of ['40.000 €','34.000 €','6.000 €','21.06.02','1.000 €','5.000 €','35.000 €','4.800 €','31.12.23','13.08.18','198.400 €','39.800 €','06.04.11','96.400 €'])assert(data6.includes(marker),`AO Hausaufgabe 6: Quellenmarker fehlt: ${marker}`);
for(const marker of ['6.820 €','6.020 €','13.08.03','25.03.04','600.000 €','17.04.04','5.000 €','-30.000 €','151.200 €','03.02.11','§ 171 Abs. 3a','150.000 €'])assert(data7.includes(marker),`AO Hausaufgabe 7: Quellenmarker fehlt: ${marker}`);
for(const marker of ['18.000 €','24.10.07','§ 371 Abs. 2 Nr. 1a AO','30.11.10','34.500 €','31.416 €','96.000 €','38,5 %','2.600.000 €','Bayer-Münch-Str. 7','20.11.09','12.01.11'])assert(data8.includes(marker),`AO Hausaufgabe 8: Quellenmarker fehlt: ${marker}`);
assert(data8.includes('USt-Voranmeldungen August bis November 06')&&data8.includes('250.000 €')&&data8.includes('51.500 €'),'AO Hausaufgabe 8: USt-Tabelle S. 7 nicht vollständig erfasst.');

assert(ui.includes('<details')&&ui.includes('Ergebnis anzeigen'),'AO Hausaufgaben: Lösung und Ergebnis sind nicht aufklappbar.');
assert(ui.includes('AOHausaufgabenTabelle')&&ui.includes('ao-ha-table'),'AO Hausaufgaben: quellengetreue Tabellenanzeige fehlt.');
assert(ui.includes('Alle Fachtermine')&&ui.includes('k1AoHausaufgaben.map'),'AO Hausaufgaben: Fachterminfilter fehlt.');
assert(ui.includes('AOHausaufgabenHinweise')&&ui.includes('AO_HAUSAUFGABEN_BY_MODULE'),'AO Hausaufgaben: Rückverweise in Lernmodule fehlen.');
assert(campus.includes('AOHausaufgaben')&&campus.includes('AOHausaufgabenHinweise')&&!campus.includes('ansicht==="hausaufgaben"&&<Leer typ="Hausaufgaben AO"'),'AO Hausaufgaben: Campus-Platzhalter nicht ersetzt.');
assert(campus.includes('hausaufgabenOeffnen')&&campus.includes('inhaltById={AO_BY_ID}'),'AO Hausaufgaben: bidirektionale Navigation fehlt.');
for(const id of [301,307,319,335,346,347,352,353,354,358,360,367,369,371,373,375,376,385,386,387,388,389,390,391,392,393])assert(AO_HAUSAUFGABEN_BY_MODULE.get(id)?.length,`AO Hausaufgaben: Modul-Rückverweis ${id} fehlt.`);

console.log('AO Hausaufgaben vollständig: 1.+2. sowie 3.–8. Fachtermin = 103/103 PDF-Seiten, 23 Fälle, aufklappbare Ergebnisse, Tabellen und bidirektionale Querverweise geprüft.');
