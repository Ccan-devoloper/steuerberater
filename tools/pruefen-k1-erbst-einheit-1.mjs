import inhalte,{erbst1Seitenplan,ERBST1_SEITEN,ERBST1_TARIF,ERBST1_HAERTEAUSGLEICH}from"../src/data/k1-erbst-einheit-1.js";

const fail=(m)=>{console.error(`FEHLER: ${m}`);process.exitCode=1};
const ids=new Set(inhalte.map(x=>x.id));
if(ids.size!==inhalte.length)fail("doppelte Modul-ID");
for(const m of inhalte){
  for(const key of ["title","law","intro","goals","scheme","normchain","merksatz","exam","traps","sourcePages"])if(m[key]==null)fail(`Modul ${m.id}: Feld ${key} fehlt`);
  if(!m.sourcePages.length)fail(`Modul ${m.id}: keine sourcePages`);
}
const pages=Array.from({length:ERBST1_SEITEN},(_,i)=>i+1);
for(const p of pages){
  if(!(p in erbst1Seitenplan))fail(`PDF-Seite ${p} fehlt im Seitenplan`);
  else if(!ids.has(erbst1Seitenplan[p]))fail(`PDF-Seite ${p} verweist auf unbekannte Modul-ID ${erbst1Seitenplan[p]}`);
}
for(const p of Object.keys(erbst1Seitenplan).map(Number))if(p<1||p>ERBST1_SEITEN)fail(`Seitenplan enthält ungültige Seite ${p}`);
for(const m of inhalte){for(const p of m.sourcePages){if(erbst1Seitenplan[p]!==m.id)fail(`Modul ${m.id}: PDF-S. ${p} ist im Primär-Seitenplan Modul ${erbst1Seitenplan[p]} zugeordnet`)}}
if(ERBST1_TARIF.length!==7)fail("§19-Tarif muss 7 Wertstufen enthalten");
if(ERBST1_HAERTEAUSGLEICH.length!==7)fail("Härteausgleichstabelle muss 7 Wertgrenzen enthalten");
if(!process.exitCode)console.log(`OK: ErbSt Einheit 1 - ${inhalte.length} Module, ${ERBST1_SEITEN}/${ERBST1_SEITEN} Seiten erfasst, Tarif- und Härteausgleichstabellen vollständig.`);
