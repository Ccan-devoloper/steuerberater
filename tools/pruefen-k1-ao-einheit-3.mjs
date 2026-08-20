import aoEinheit3,{ao3Seitenplan}from"../src/data/k1-ao-einheit-3.js";
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
const byId=new Map(aoEinheit3.map(x=>[Number(x.id),x]));
const schemaIds=["ao3-falsches-fa","ao3-beschwer","ao3-begruendetheit","ao3-einspruch-besonderheiten","ao3-einspruch-erledigung","ao3-plan-abc","ao3-korrekturformel","ao3-ff-beginn","ao3-ff-dauer","ao3-ff-ende","ao3-korrekturpaerchen","ao3-ablaufhemmungen"];
assert(aoEinheit3.length===13,`AO Einheit 3: erwartet 13 Inhalte, gefunden ${aoEinheit3.length}.`);
assert(new Set(aoEinheit3.map(x=>x.id)).size===aoEinheit3.length,"AO Einheit 3: doppelte IDs.");
assert(Object.keys(ao3Seitenplan).length===53,"AO Einheit 3: Seitenplan muss 53 Seiten enthalten.");
for(let s=1;s<=53;s+=1){const id=Number(ao3Seitenplan[s]);assert(id,`AO Einheit 3: PDF-Seite ${s} fehlt.`);assert(byId.has(id),`AO Einheit 3: Seite ${s} verweist auf unbekannte ID.`);assert(byId.get(id).sourcePages?.includes(s),`AO Einheit 3: Seite ${s} ist zwar im Seitenplan, fehlt aber in sourcePages von ${id}.`);}
for(const item of aoEinheit3){assert(item.einheit===3,`${item.id}: falsche Einheit.`);assert(item.title&&item.law,`${item.id}: Titel/Normen fehlen.`);assert(Array.isArray(item.intro)&&item.intro.length,`${item.id}: Einordnung fehlt.`);assert(Array.isArray(item.goals)&&item.goals.length,`${item.id}: Lernziele fehlen.`);assert(Array.isArray(item.scheme)&&item.scheme.length,`${item.id}: Schema fehlt.`);assert(Array.isArray(item.normchain)&&item.normchain.length,`${item.id}: Normenkette fehlt.`);assert(item.example?.facts&&item.example?.solution?.length&&item.example?.result,`${item.id}: Vertiefung/Fall unvollständig.`);assert(item.merksatz,`${item.id}: Merksatz fehlt.`);assert(item.sourcePages?.length,`${item.id}: Quellen-Seiten fehlen.`);for(const p of item.sourcePages){assert(p>=1&&p<=53,`${item.id}: ungültige Seite ${p}.`);assert(Number(ao3Seitenplan[p])===Number(item.id),`${item.id}: sourcePages enthält Seite ${p}, Seitenplan ordnet sie aber ${ao3Seitenplan[p]} zu.`);}if(item.area!=="Fall")assert(schemaIds.includes(item.diagram),`${item.id}: fehlendes/unbekanntes digitales Schema ${item.diagram}.`);}
const module=aoEinheit3.filter(x=>x.area!=="Fall"),faelle=aoEinheit3.filter(x=>x.area==="Fall");
assert(module.length===12,`AO Einheit 3: erwartet 12 Lernmodule, gefunden ${module.length}.`);assert(faelle.length===1&&faelle[0].id===334,"AO Einheit 3: Originalfall 334 fehlt.");
for(const id of [322,323,324,325,326,327,328,329,330,331,332,333,334])assert(byId.has(id),`AO Einheit 3: Inhalt ${id} fehlt.`);
for(const schema of schemaIds)assert(module.some(m=>m.diagram===schema),`AO Einheit 3: Schema ${schema} ist keinem Lernmodul zugeordnet.`);
for(const p of [42,43])assert(ao3Seitenplan[p]===334,`AO Einheit 3: Quellenfall muss S. ${p} abdecken.`);
for(const p of [27,28,29,30,31,32,33,34,35,36])assert(ao3Seitenplan[p]===328,`AO Einheit 3: Korrekturformel muss S. ${p} abdecken.`);
for(const p of [44,45,46,47,48,49,50])assert(ao3Seitenplan[p]===332,`AO Einheit 3: Korrekturpärchen muss S. ${p} abdecken.`);
for(const p of [51,52,53])assert(ao3Seitenplan[p]===333,`AO Einheit 3: Ablaufhemmungen müssen S. ${p} abdecken.`);
console.log(`AO Einheit 3 vollständig: 53/53 PDF-Seiten, ${module.length} Lernmodule, ${faelle.length} Originalfall, ${schemaIds.length} digitale Schemata.`);
