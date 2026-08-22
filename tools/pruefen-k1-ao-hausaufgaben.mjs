import fs from 'node:fs';
import {k1AoHausaufgaben,AO_HAUSAUFGABEN_PAGE_PLANS,AO_HAUSAUFGABEN_BY_MODULE} from '../src/data/k1-ao-hausaufgaben-alle.js';
import {AO_HAUSAUFGABEN_ORIGINALSEITEN,AO_HAUSAUFGABEN_ORIGINAL_SEITENZAHL} from '../src/data/k1-ao-hausaufgaben-originaltexte.js';
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};

const erwartet=new Map([
  ['AO-HA-1-2',{seiten:9,faelle:4,ids:['AO-HA12-1','AO-HA12-2','AO-HA12-3','AO-HA12-4']}],
  ['AO-HA-3',{seiten:11,faelle:3,ids:['AO-HA3-1','AO-HA3-2','AO-HA3-3']}],
  ['AO-HA-4',{seiten:13,faelle:3,ids:['AO-HA4-1','AO-HA4-2','AO-HA4-3']}],
  ['AO-HA-5',{seiten:15,faelle:3,ids:['AO-HA5-1','AO-HA5-2','AO-HA5-3']}],
  ['AO-HA-6',{seiten:16,faelle:4,ids:['AO-HA6-1','AO-HA6-2','AO-HA6-3','AO-HA6-4']}],
  ['AO-HA-7',{seiten:14,faelle:3,ids:['AO-HA7-1','AO-HA7-2','AO-HA7-3']}],
  ['AO-HA-8',{seiten:25,faelle:3,ids:['AO-HA8-1','AO-HA8-2','AO-HA8-3']}],
]);

const expandPages=text=>{
  const out=[];
  for(const token of String(text||'').match(/\d+(?:\s*[–-]\s*\d+)?/g)||[]){
    const nums=token.split(/[–-]/).map(x=>Number(x.trim()));
    if(nums.length===2&&Number.isFinite(nums[0])&&Number.isFinite(nums[1]))for(let p=nums[0];p<=nums[1];p++)out.push(p);
    else if(Number.isFinite(nums[0]))out.push(nums[0]);
  }
  return [...new Set(out)];
};
const fallQuellseiten=seiten=>{
  const parts=String(seiten||'').split('·');
  return {
    aufgabe:expandPages(parts.find(x=>/Aufgabe/i.test(x))||''),
    loesung:expandPages(parts.find(x=>/Lösung/i.test(x))||''),
  };
};

assert(k1AoHausaufgaben.length===7,'AO Hausaufgaben: 7 Unterlagen (1.+2. sowie 3.–8.) erwartet.');
assert(AO_HAUSAUFGABEN_ORIGINAL_SEITENZAHL===103,'AO Hausaufgaben: Originaltext-Ebene muss exakt 103 PDF-Seiten enthalten.');
assert(AO_HAUSAUFGABEN_ORIGINALSEITEN.size===7,'AO Hausaufgaben: Originaltext-Ebene muss alle 7 Unterlagen enthalten.');

for(const termin of k1AoHausaufgaben){
  const soll=erwartet.get(termin.id);
  assert(soll,`AO Hausaufgaben: unbekannte Unterlage ${termin.id}.`);
  assert(termin.rechtsstand==='2025'&&termin.seiten===soll.seiten,`AO Hausaufgaben: Quellenmetadaten ${termin.id} falsch.`);
  assert(termin.faelle.length===soll.faelle,`AO Hausaufgaben: Fallzahl ${termin.id} falsch.`);

  const original=AO_HAUSAUFGABEN_ORIGINALSEITEN.get(termin.id);
  assert(original?.length===soll.seiten,`AO Hausaufgaben ${termin.id}: Originaltext nicht ${soll.seiten}/${soll.seiten}.`);
  original.forEach((text,i)=>assert(typeof text==='string'&&text.trim().length>80,`AO Hausaufgaben ${termin.id}: Originaltext PDF-S. ${i+1} fehlt/ist leer.`));
  assert(original[0].includes('Hausaufgabe mit Lösung')&&original[0].includes('Didaktischer Hinweis'),`AO Hausaufgaben ${termin.id}: Originalseite 1 nicht wortgetreu hinterlegt.`);

  const plan=AO_HAUSAUFGABEN_PAGE_PLANS.get(termin.id);
  assert(plan&&Object.keys(plan).length===termin.seiten,`AO Hausaufgaben: Seitenplan ${termin.id} nicht ${termin.seiten}/${termin.seiten}.`);
  for(let p=1;p<=termin.seiten;p++)assert(plan[p],`AO Hausaufgaben ${termin.id}: PDF-Seite ${p} fehlt im Seitenplan.`);

  const byId=new Map(termin.faelle.map(f=>[f.id,f]));
  for(const id of soll.ids)assert(byId.has(id),`AO Hausaufgaben: ${id} fehlt.`);
  for(const fall of termin.faelle)assert(fall.normen?.length&&fall.querverweise?.length,`AO Hausaufgaben: Navigation ${fall.id} unvollständig.`);

  const displayed=new Set([1]);
  for(const fall of termin.faelle){
    const q=fallQuellseiten(fall.seiten);
    assert(q.aufgabe.length>0&&q.loesung.length>0,`AO Hausaufgaben ${fall.id}: Aufgabe-/Lösungsfundstelle nicht auswertbar.`);
    for(const p of [...q.aufgabe,...q.loesung])displayed.add(p);
  }
  for(let p=1;p<=termin.seiten;p++)assert(displayed.has(p),`AO Hausaufgaben ${termin.id}: PDF-S. ${p} wird in der 1:1-Anzeige nicht dargestellt.`);
}

assert(k1AoHausaufgaben.reduce((s,t)=>s+t.seiten,0)===103,'AO Hausaufgaben: Gesamtseitenzahl muss 103/103 betragen.');
assert(k1AoHausaufgaben.reduce((s,t)=>s+t.faelle.length,0)===23,'AO Hausaufgaben: insgesamt 23 Fälle erwartet.');

const allOriginal=Array.from(AO_HAUSAUFGABEN_ORIGINALSEITEN.values()).flat().join('\n');
for(const marker of [
  'ernstlichen Meinungsverschiedenheiten','Ursula Middendorf','Schülerskifreizeit','900.000 €','KölnArena KG','198.400 €',
  '6.820 €','Ernie & Bert OHG','Edgar Schönling','Bayer-Münch-Str. 7','1.000.000 € ./. 2.600.000 € = 38,5 %','Nichtzulassungsbeschwerde (NZB)'
])assert(allOriginal.includes(marker),`AO Hausaufgaben 1:1: Quellenmarker fehlt: ${marker}`);

const ui=fs.readFileSync(new URL('../src/components/AOHausaufgaben.jsx',import.meta.url),'utf8');
const campus=fs.readFileSync(new URL('../src/components/AOCampusV3.jsx',import.meta.url),'utf8');
assert(ui.includes('AO_HAUSAUFGABEN_ORIGINALSEITEN')&&ui.includes('OriginalSeiten')&&ui.includes('<pre>'),'AO Hausaufgaben: Originaltext-Ebene wird nicht gerendert.');
assert(ui.includes('<details')&&ui.includes('Lösung &amp; Ergebnis anzeigen'),'AO Hausaufgaben: Original-Lösung ist nicht aufklappbar.');
assert(!ui.includes('(fall.aufgabe||[]).map')&&!ui.includes('(fall.loesung||[]).map')&&!ui.includes('text={fall.ergebnis}'),'AO Hausaufgaben: paraphrasierte Aufgaben-/Lösungstexte werden noch gerendert.');
assert(ui.includes('wortgetreu 1:1')&&ui.includes('Originalquelle · PDF-S.'),'AO Hausaufgaben: 1:1-Quellenkennzeichnung fehlt.');
assert(ui.includes('Alle Fachtermine')&&ui.includes('k1AoHausaufgaben.map'),'AO Hausaufgaben: Fachterminfilter fehlt.');
assert(ui.includes('AOHausaufgabenHinweise')&&ui.includes('AO_HAUSAUFGABEN_BY_MODULE'),'AO Hausaufgaben: Rückverweise in Lernmodule fehlen.');
assert(campus.includes('AOHausaufgaben')&&campus.includes('AOHausaufgabenHinweise'),'AO Hausaufgaben: Campus-Einbindung fehlt.');
assert(campus.includes('hausaufgabenOeffnen')&&campus.includes('inhaltById={AO_BY_ID}'),'AO Hausaufgaben: bidirektionale Navigation fehlt.');
for(const id of [301,307,319,335,346,347,352,353,354,358,360,367,369,371,373,375,376,385,386,387,388,389,390,391,392,393])assert(AO_HAUSAUFGABEN_BY_MODULE.get(id)?.length,`AO Hausaufgaben: Modul-Rückverweis ${id} fehlt.`);

console.log('AO Hausaufgaben 1:1 geprüft: 103/103 Original-PDF-Seiten, 23 Fälle, Aufgaben- und Lösungstexte ausschließlich aus der Originaltext-Ebene, aufklappbare Lösungen und bidirektionale Querverweise.');
