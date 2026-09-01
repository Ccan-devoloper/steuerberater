import inhalte,{ERBST2_SEITEN,erbst2Seitenplan}from"../src/data/k1-erbst-einheit-2.js";
const fail=m=>{console.error(`✗ ${m}`);process.exitCode=1};
if(ERBST2_SEITEN!==150)fail(`ERBST2_SEITEN=${ERBST2_SEITEN}, erwartet 150`);
const keys=Object.keys(erbst2Seitenplan).map(Number).sort((a,b)=>a-b);
if(keys.length!==150)fail(`Seitenplan enthält ${keys.length}/150 Seiten`);
for(let s=1;s<=150;s++)if(!erbst2Seitenplan[s])fail(`PDF-S. ${s} fehlt im Seitenplan`);
const ids=new Set(inhalte.map(x=>x.id));for(const [s,id]of Object.entries(erbst2Seitenplan))if(!ids.has(id))fail(`PDF-S. ${s} verweist auf unbekannte ID ${id}`);
const doppelt=inhalte.map(x=>x.id).filter((id,i,a)=>a.indexOf(id)!==i);if(doppelt.length)fail(`Doppelte IDs: ${doppelt.join(", ")}`);
for(const m of inhalte){if(!m.sourcePages?.length)fail(`ID ${m.id}: sourcePages leer`);if(!m.title||!m.law||!m.scheme?.length||!m.normchain?.length)fail(`ID ${m.id}: Pflichtfelder unvollständig`);for(const s of m.sourcePages)if(erbst2Seitenplan[s]!==m.id)fail(`ID ${m.id}: PDF-S. ${s} ist im Primärplan ${erbst2Seitenplan[s]} zugeordnet`)}
const erwartet=[509,510,511,512,513,514,515];for(const id of erwartet)if(!ids.has(id))fail(`Erwartete ID ${id} fehlt`);
if(!process.exitCode)console.log(`✓ ErbSt Einheit 2: ${inhalte.length} Inhalte, ${keys.length}/${ERBST2_SEITEN} PDF-Seiten lückenlos erfasst.`);
