import fs from "node:fs";
import aoEinheit6,{ao6Seitenplan,ao6SchemaIds} from "../src/data/k1-ao-einheit-6.js";

const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
const byId=new Map(aoEinheit6.map(x=>[Number(x.id),x]));

assert(aoEinheit6.length===11,`AO Einheit 6: erwartet 11 Inhalte, gefunden ${aoEinheit6.length}.`);
assert(new Set(aoEinheit6.map(x=>x.id)).size===aoEinheit6.length,"AO Einheit 6: doppelte IDs.");
assert(Object.keys(ao6Seitenplan).length===77,"AO Einheit 6: Seitenplan muss exakt 77 Seiten enthalten.");
for(let s=1;s<=77;s+=1){
  const id=Number(ao6Seitenplan[s]);
  assert(id,`AO Einheit 6: PDF-Seite ${s} fehlt.`);
  assert(byId.has(id),`AO Einheit 6: Seite ${s} verweist auf unbekannte ID ${id}.`);
  assert(byId.get(id).sourcePages?.includes(s),`AO Einheit 6: Seite ${s} fehlt in sourcePages von ${id}.`);
}
for(const item of aoEinheit6){
  assert(item.einheit===6,`${item.id}: falsche Einheit.`);
  assert(item.title&&item.law,`${item.id}: Titel/Normen fehlen.`);
  assert(item.sourcePages?.length,`${item.id}: Quellen-Seiten fehlen.`);
  assert(item.diagram&&ao6SchemaIds.includes(item.diagram),`${item.id}: Schema fehlt/unbekannt.`);
  assert(item.example?.facts&&item.example?.solution?.length&&item.example?.result,`${item.id}: Vertiefung/Fall unvollständig.`);
  assert(item.merksatz,`${item.id}: Merksatz fehlt.`);
  for(const p of item.sourcePages){
    assert(p>=1&&p<=77,`${item.id}: ungültige Seite ${p}.`);
    assert(Number(ao6Seitenplan[p])===Number(item.id),`${item.id}: sourcePages/Seitenplan widersprechen sich auf S. ${p}.`);
  }
  if(item.area!=="Fall"){
    assert(item.intro?.length,`${item.id}: Einordnung fehlt.`);
    assert(item.goals?.length,`${item.id}: Lernziele fehlen.`);
    assert(item.scheme?.length,`${item.id}: Schema fehlt.`);
    assert(item.normchain?.length,`${item.id}: Normenkette fehlt.`);
  }
}
const module=aoEinheit6.filter(x=>x.area!=="Fall"),faelle=aoEinheit6.filter(x=>x.area==="Fall");
assert(module.length===9,`AO Einheit 6: erwartet 9 Lernmodule, gefunden ${module.length}.`);
assert(faelle.length===2,`AO Einheit 6: erwartet 2 Originalfälle, gefunden ${faelle.length}.`);
for(const id of [358,359,360,361,362,363,364,365,366,367,368])assert(byId.has(id),`AO Einheit 6: Inhalt ${id} fehlt.`);

const renderer=fs.readFileSync(new URL("../src/components/AOSchemataEinheit6.jsx",import.meta.url),"utf8");
const style=fs.readFileSync(new URL("../src/components/ao-einheit6.css",import.meta.url),"utf8");
const campus=fs.readFileSync(new URL("../src/components/AOCampusV3.jsx",import.meta.url),"utf8");
const schemaAll=fs.readFileSync(new URL("../src/components/AOSchemataAlle.jsx",import.meta.url),"utf8");
const pruefschema=fs.readFileSync(new URL("../src/components/AOPruefschema.jsx",import.meta.url),"utf8");
const links=fs.readFileSync(new URL("../src/components/AOQuerverweiseEnhancer.jsx",import.meta.url),"utf8");
const schemaLinks=fs.readFileSync(new URL("../src/components/AOSchemaLinks.jsx",import.meta.url),"utf8");

for(const schema of ao6SchemaIds)assert(renderer.includes(`\"${schema}\"`),`AO Einheit 6: Schema ${schema} fehlt im Renderer.`);
assert(ao6SchemaIds.length===11,`AO Einheit 6: erwartet 11 digitale Schemata/Falldarstellungen, gefunden ${ao6SchemaIds.length}.`);
assert(renderer.includes('import "./ao-einheit3.css"')&&renderer.includes('import "./ao-einheit5.css"'),"AO Einheit 6: gemeinsamer AO-Schemastil fehlt.");
for(const shared of ["ao3-sheet","ao3-title","ao3-box","ao3-arrow","ao5-note","ao5-pairs"])assert(renderer.includes(shared),`AO Einheit 6: gemeinsamer Darstellungsbaustein ${shared} fehlt.`);
for(const token of ["var(--b)","var(--g)","var(--y)","var(--r)","var(--p)"])assert(style.includes(token),`AO Einheit 6: gemeinsame Farblogik ${token} fehlt.`);

assert(schemaAll.includes("AO6_SCHEMATA")&&schemaAll.includes("ao6SchemaIds"),"AO Einheit 6: Schemas nicht global registriert.");
assert(campus.includes('import aoEinheit6 from"../data/k1-ao-einheit-6.js"')&&campus.includes("...aoEinheit6"),"AO Einheit 6: nicht im Campus registriert.");
assert(campus.includes("34+38+53+72+44+77"),"AO Einheit 6: Gesamtseitenzahl im Campus nicht auf 318 erweitert.");
assert(campus.includes("AO-Einheiten 1–6")&&campus.includes('id:"E6"'),"AO Einheit 6: Cockpit/Klausurmodus nicht erweitert.");
for(const id of [358,359,360,361,362,363,366,367,368])assert(campus.includes(String(id)),`AO Einheit 6: Modul ${id} fehlt in Oberthemenzuordnung.`);
assert(campus.includes("Saldierung & § 177 AO")&&campus.includes("FGO & Vollstreckung"),"AO Einheit 6: neue Oberthemen fehlen.");

for(const [p,id] of [[1,358],[8,359],[14,360],[21,361],[26,362],[31,363],[39,364],[50,365],[71,366],[75,367],[76,368],[77,368]])assert(Number(ao6Seitenplan[p])===id,`AO Einheit 6: Leitseite ${p} muss ID ${id} zugeordnet sein.`);
assert(byId.get(364).diagram==="ao6-fall-saldierung"&&byId.get(365).diagram==="ao6-fall-einspruch-351","AO Einheit 6: Fall-Schemata fehlen.");

for(const marker of ["10.000 €","3.000 €","1.500 €","2.100 €","14.500 €","7.900 €","9.700 €"])assert(renderer.includes(marker),`AO Einheit 6: Quellenwert fehlt im §177-Fall: ${marker}`);
for(const marker of ["SFFEB","D.B.E.W.W","N.O.N.B.H","RRAG","7.7.26","§ 351 Abs. 1 AO"])assert(renderer.includes(marker),`AO Einheit 6: Quellenmarker fehlt in der Einspruchsabwandlung: ${marker}`);
for(const marker of ["kein Ermittlungsfehler FA","kein grobes Verschulden","Kompensationsverbot","Bindungswirkung ∞","Rückwirkendes Ereignis","Spinnenregel","Obj. Tatbestand","Subj. T","Selbstanzeige","Vollstreckung","FGO-Fahrtroute"])assert(renderer.includes(marker),`AO Einheit 6: Quellen-/Schema-Marker fehlt: ${marker}`);
for(const marker of ["§ 249 Abs. 1","§ 251 Abs. 1","§ 361","§ 254 Abs. 1","§ 220","§ 259","§ 281 Abs. 1","§ 286","§ 263","§ 295"])assert(renderer.includes(marker),`AO Einheit 6: Vollstreckungsnorm fehlt: ${marker}`);
for(const marker of ["§ 33 FGO","§ 35 FGO","§ 38 FGO","§§ 57, 62 FGO","§ 58 FGO","§ 63 FGO","§§ 40, 41 FGO","§ 44 FGO","§ 40(2) FGO","§ 47 FGO / § 54 FGO"])assert(renderer.includes(marker),`AO Einheit 6: FGO-Station fehlt: ${marker}`);

for(const id of ["ao-schema-173-verschulden","ao-schema-173-rechtserheblichkeit","ao-schema-172","ao-schema-175-grundlagen","ao-schema-175-rueckwirkend","ao-schema-177","ao-schema-handbuch","ao-schema-vollstreckung","ao-schema-fgo"])assert(pruefschema.includes(id),`AO Einheit 6: Prüfschema-Ziel ${id} fehlt.`);
for(const target of ["ao-schema-172","ao-schema-175-grundlagen","ao-schema-175-rueckwirkend","ao-schema-177","ao-schema-vollstreckung","ao-schema-fgo"])assert(schemaLinks.includes(target),`AO Einheit 6: Normsprung ${target} fehlt.`);
for(const id of [364,365])assert(links.includes(`id:${id}`),`AO Einheit 6: Originalfall ${id} fehlt im bidirektionalen Querverweis-System.`);
assert(links.includes("363:")&&links.includes("id:363"),"AO Einheit 6: §177-Lernmodul ist nicht bidirektional mit den Fällen verlinkt.");

const alle=aoEinheit6.flatMap(x=>x.sourcePages.map(p=>`${p}:${x.id}`));
assert(alle.length===77,"AO Einheit 6: Jede Seite muss genau einmal primär zugeordnet sein.");
assert(new Set(alle.map(x=>x.split(":")[0])).size===77,"AO Einheit 6: doppelte/fehlende Seiten in sourcePages.");
assert(byId.get(366).sourcePages.join(",")==="71,72,73,74","AO Einheit 6: Handbuch-Seiten 71–74 nicht vollständig gebündelt.");
assert(byId.get(367).sourcePages.join(",")==="75","AO Einheit 6: Vollstreckungsseite 75 fehlt.");
assert(byId.get(368).sourcePages.join(",")==="76,77","AO Einheit 6: FGO-Seiten 76–77 fehlen.");

console.log(`AO Einheit 6 vollständig: 77/77 PDF-Seiten, ${module.length} Lernmodule, ${faelle.length} Originalfälle, ${ao6SchemaIds.length} digitale Schemata; §177-Fälle, Handbuch, Vollstreckung, FGO, Querverweise und gemeinsamer AO-Stil geprüft.`);
