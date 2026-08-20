import aoEinheit2, { ao2Seitenplan } from "../src/data/k1-ao-einheit-2.js";

const assert=(ok,msg)=>{if(!ok)throw new Error(msg);};
const byId=new Map(aoEinheit2.map((x)=>[Number(x.id),x]));
const aoSchemaIds=[
  "ao-bekanntgabewille-handlungsfaehigkeit",
  "ao-bekanntgabe-zeitpunkt",
  "ao-fristenberechnung",
  "ao-tortenstueckfehlerlehre",
  "ao-fehlerhafter-va-plan-a-b",
  "ao-einspruch-grundlagen",
  "ao-einspruch-zulaessigkeit-form",
  "ao-einspruch-frist-wirkung",
];
assert(aoEinheit2.length===10,`AO Einheit 2: erwartet 10 Inhalte, gefunden ${aoEinheit2.length}.`);
assert(new Set(aoEinheit2.map((x)=>x.id)).size===aoEinheit2.length,"AO Einheit 2: doppelte IDs.");
const seiten=Object.keys(ao2Seitenplan).map(Number).sort((a,b)=>a-b);
assert(seiten.length===38,`AO Einheit 2: Seitenplan muss 38 Seiten enthalten, gefunden ${seiten.length}.`);
for(let s=1;s<=38;s+=1){assert(ao2Seitenplan[s],`AO Einheit 2: PDF-Seite ${s} fehlt.`);assert(byId.has(Number(ao2Seitenplan[s])),`AO Einheit 2: Seite ${s} verweist auf unbekannte ID ${ao2Seitenplan[s]}.`);}
for(const item of aoEinheit2){
  assert(item.einheit===2,`${item.id}: falsche Einheit.`);
  assert(item.title&&item.law,`${item.id}: Titel/Normen fehlen.`);
  assert(Array.isArray(item.intro)&&item.intro.length,`${item.id}: Einordnung fehlt.`);
  assert(Array.isArray(item.goals)&&item.goals.length,`${item.id}: Lernziele fehlen.`);
  assert(Array.isArray(item.scheme)&&item.scheme.length,`${item.id}: Schema fehlt.`);
  assert(Array.isArray(item.normchain)&&item.normchain.length,`${item.id}: Normenkette fehlt.`);
  assert(item.example?.facts&&item.example?.solution?.length&&item.example?.result,`${item.id}: Vertiefung/Fall unvollständig.`);
  assert(item.merksatz,`${item.id}: Merksatz fehlt.`);
  assert(Array.isArray(item.sourcePages)&&item.sourcePages.length,`${item.id}: Quellen-Seiten fehlen.`);
  for(const page of item.sourcePages)assert(page>=1&&page<=38,`${item.id}: ungültige Seite ${page}.`);
  if(item.area!=="Fall"){assert(item.diagram,`${item.id}: Lernmodul ohne digitales Schema.`);assert(aoSchemaIds.includes(item.diagram),`${item.id}: unbekannte Schema-ID ${item.diagram}.`);}
}
const module=aoEinheit2.filter((x)=>x.area!=="Fall");
const faelle=aoEinheit2.filter((x)=>x.area==="Fall");
assert(module.length===8,`AO Einheit 2: erwartet 8 Lernmodule, gefunden ${module.length}.`);
assert(faelle.length===2,`AO Einheit 2: erwartet 2 Originalfälle, gefunden ${faelle.length}.`);
for(const id of [312,313,314,315,316,317,318,319,320,321])assert(byId.has(id),`AO Einheit 2: Inhalt ${id} fehlt.`);
for(const schema of aoSchemaIds)assert(module.some((m)=>m.diagram===schema),`AO Einheit 2: Schema ${schema} ist keinem Lernmodul zugeordnet.`);
for(const p of [13,14,15,16])assert(ao2Seitenplan[p]===320,`AO Einheit 2: Tabellenfall 3 muss PDF-S. ${p} abdecken.`);
for(const p of [18,19])assert(ao2Seitenplan[p]===321,`AO Einheit 2: Fristenfall 4 muss PDF-S. ${p} abdecken.`);
console.log(`AO Einheit 2 vollständig: 38/38 PDF-Seiten, ${module.length} Lernmodule, ${faelle.length} Originalfälle, ${aoSchemaIds.length} neue digitale Schemata.`);
