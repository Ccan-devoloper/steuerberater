import aoEinheit4,{ao4Seitenplan,ao4SchemaIds}from"../src/data/k1-ao-einheit-4.js";
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
const byId=new Map(aoEinheit4.map(x=>[Number(x.id),x]));
assert(aoEinheit4.length===11,`AO Einheit 4: erwartet 11 Inhalte, gefunden ${aoEinheit4.length}.`);
assert(new Set(aoEinheit4.map(x=>x.id)).size===aoEinheit4.length,"AO Einheit 4: doppelte IDs.");
assert(Object.keys(ao4Seitenplan).length===72,"AO Einheit 4: Seitenplan muss exakt 72 Seiten enthalten.");
for(let s=1;s<=72;s+=1){const id=Number(ao4Seitenplan[s]);assert(id,`AO Einheit 4: PDF-Seite ${s} fehlt.`);assert(byId.has(id),`AO Einheit 4: Seite ${s} verweist auf unbekannte ID ${id}.`);assert(byId.get(id).sourcePages?.includes(s),`AO Einheit 4: Seite ${s} ist im Seitenplan, fehlt aber in sourcePages von ${id}.`);}
for(const item of aoEinheit4){assert(item.einheit===4,`${item.id}: falsche Einheit.`);assert(item.title&&item.law,`${item.id}: Titel/Normen fehlen.`);assert(item.sourcePages?.length,`${item.id}: Quellen-Seiten fehlen.`);assert(item.diagram&&ao4SchemaIds.includes(item.diagram),`${item.id}: digitales Schema fehlt oder ist unbekannt (${item.diagram}).`);assert(item.example?.facts&&item.example?.solution?.length&&item.example?.result,`${item.id}: Vertiefung/Fall unvollständig.`);assert(item.merksatz,`${item.id}: Merksatz fehlt.`);for(const p of item.sourcePages){assert(p>=1&&p<=72,`${item.id}: ungültige Seite ${p}.`);assert(Number(ao4Seitenplan[p])===Number(item.id),`${item.id}: sourcePages enthält Seite ${p}, Seitenplan ordnet sie aber ${ao4Seitenplan[p]} zu.`);}if(item.area!=="Fall"){assert(Array.isArray(item.intro)&&item.intro.length,`${item.id}: Einordnung fehlt.`);assert(Array.isArray(item.goals)&&item.goals.length,`${item.id}: Lernziele fehlen.`);assert(Array.isArray(item.scheme)&&item.scheme.length,`${item.id}: Schema fehlt.`);assert(Array.isArray(item.normchain)&&item.normchain.length,`${item.id}: Normenkette fehlt.`);}}
const module=aoEinheit4.filter(x=>x.area!=="Fall"),faelle=aoEinheit4.filter(x=>x.area==="Fall");
assert(module.length===9,`AO Einheit 4: erwartet 9 Lernmodule, gefunden ${module.length}.`);
assert(faelle.length===2,`AO Einheit 4: erwartet 2 Originalfälle, gefunden ${faelle.length}.`);
for(const id of [335,336,337,338,339,340,341,342,343,344,345])assert(byId.has(id),`AO Einheit 4: Inhalt ${id} fehlt.`);
assert(faelle.some(x=>x.id===344&&x.sourcePages.includes(12)),"AO Einheit 4: AP-Zeitstrahl-Fall 344 / S. 12 fehlt.");
for(const p of [63,64,65,66,67,68,69])assert(ao4Seitenplan[p]===345,`AO Einheit 4: Erbfall 345 muss S. ${p} abdecken.`);
for(const p of [44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61])assert(ao4Seitenplan[p]===340,`AO Einheit 4: § 181-Block muss S. ${p} abdecken.`);
assert(ao4Seitenplan[72]===343,"AO Einheit 4: Masterübersicht muss S. 72 abdecken.");
const alleZuordnungen=aoEinheit4.flatMap(x=>x.sourcePages.map(p=>`${p}:${x.id}`));
assert(alleZuordnungen.length===72,"AO Einheit 4: Jede PDF-Seite muss genau einmal primär zugeordnet sein.");
assert(new Set(alleZuordnungen.map(x=>x.split(":")[0])).size===72,"AO Einheit 4: doppelte/fehlende Seiten in sourcePages.");
console.log(`AO Einheit 4 vollständig: 72/72 PDF-Seiten, ${module.length} Lernmodule, ${faelle.length} Originalfälle, ${ao4SchemaIds.length} digitale Schemata.`);
