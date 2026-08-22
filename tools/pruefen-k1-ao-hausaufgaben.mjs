import fs from 'node:fs';
import {k1AoHausaufgaben,k1AoHausaufgabenDidaktik,AO_HAUSAUFGABEN_PAGE_PLANS,AO_HAUSAUFGABEN_BY_MODULE} from '../src/data/k1-ao-hausaufgaben-alle.js';
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};

assert(k1AoHausaufgaben.length===2,'AO Hausaufgaben: Unterlagen 1.+2. und 3. Fachtermin erwartet.');
assert(k1AoHausaufgabenDidaktik.length>=3,'AO Hausaufgaben: didaktischer Hinweis S. 1 fehlt.');

const erwartet=new Map([
  ['AO-HA-1-2',{seiten:9,faelle:4,ids:['AO-HA12-1','AO-HA12-2','AO-HA12-3','AO-HA12-4']}],
  ['AO-HA-3',{seiten:11,faelle:3,ids:['AO-HA3-1','AO-HA3-2','AO-HA3-3']}],
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

const dataAlt=fs.readFileSync(new URL('../src/data/k1-ao-hausaufgaben.js',import.meta.url),'utf8');
const dataNeu=fs.readFileSync(new URL('../src/data/k1-ao-hausaufgaben-3.js',import.meta.url),'utf8');
const ui=fs.readFileSync(new URL('../src/components/AOHausaufgaben.jsx',import.meta.url),'utf8');
const campus=fs.readFileSync(new URL('../src/components/AOCampusV3.jsx',import.meta.url),'utf8');

for(const marker of ['ernstlichen Meinungsverschiedenheiten','§ 122 Abs. 7','auf Null reduziert','04.08.12','15.05.12','01.09.12','52.000 €','40.000 €','17.10.07','17.11.07','17.10.08'])assert(dataAlt.includes(marker),`AO Hausaufgaben 1.+2.: Quellenmarker fehlt: ${marker}`);
for(const marker of ['31.12.2024 geltenden Fassung','80.000 €','92.000 €','14.04.17','Kurzbescheid','23.880 €','2.880 €','Finanzamt Moers','30.11.03','19.600 €','§ 357 Abs. 2 S. 4 AO'])assert(dataNeu.includes(marker),`AO Hausaufgabe 3: Quellenmarker fehlt: ${marker}`);

assert(ui.includes('<details')&&ui.includes('Ergebnis anzeigen'),'AO Hausaufgaben: Lösung und Ergebnis sind nicht aufklappbar.');
assert(ui.includes('Alle Fachtermine')&&ui.includes('k1AoHausaufgaben.map'),'AO Hausaufgaben: Fachterminfilter fehlt.');
assert(ui.includes('AOHausaufgabenHinweise')&&ui.includes('AO_HAUSAUFGABEN_BY_MODULE'),'AO Hausaufgaben: Rückverweise in Lernmodule fehlen.');
assert(campus.includes('AOHausaufgaben')&&campus.includes('AOHausaufgabenHinweise')&&!campus.includes('ansicht==="hausaufgaben"&&<Leer typ="Hausaufgaben AO"'),'AO Hausaufgaben: Campus-Platzhalter nicht ersetzt.');
assert(campus.includes('hausaufgabenOeffnen')&&campus.includes('inhaltById={AO_BY_ID}'),'AO Hausaufgaben: bidirektionale Navigation fehlt.');
for(const id of [305,307,312,313,314,318,319,322,323,324,326,329,330,331,333,335,336,346,347,360])assert(AO_HAUSAUFGABEN_BY_MODULE.get(id)?.length,`AO Hausaufgaben: Modul-Rückverweis ${id} fehlt.`);

console.log('AO Hausaufgaben vollständig: 1.+2. Fachtermin 9/9 Seiten + 3. Fachtermin 11/11 Seiten, 7 Fälle, aufklappbare Ergebnisse und bidirektionale Querverweise geprüft.');
