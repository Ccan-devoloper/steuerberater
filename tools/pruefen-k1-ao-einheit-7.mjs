import fs from "node:fs";
import aoEinheit7,{ao7Seitenplan,ao7SchemaIds} from "../src/data/k1-ao-einheit-7.js";

const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
const byId=new Map(aoEinheit7.map(x=>[Number(x.id),x]));

assert(aoEinheit7.length===16,`AO Einheit 7: erwartet 16 Inhalte, gefunden ${aoEinheit7.length}.`);
assert(new Set(aoEinheit7.map(x=>x.id)).size===16,"AO Einheit 7: doppelte IDs.");
assert(Object.keys(ao7Seitenplan).length===371,"AO Einheit 7: Seitenplan muss exakt 371 physische Seiten/Frames enthalten.");
for(let s=1;s<=371;s+=1){
  const id=Number(ao7Seitenplan[s]);
  assert(id,`AO Einheit 7: Seite/Frame ${s} fehlt.`);
  assert(byId.has(id),`AO Einheit 7: Seite ${s} verweist auf unbekannte ID ${id}.`);
  assert(byId.get(id).sourcePages?.includes(s),`AO Einheit 7: Seite ${s} fehlt in sourcePages von ${id}.`);
}
for(const item of aoEinheit7){
  assert(item.einheit===7,`${item.id}: falsche Einheit.`);
  assert(item.title&&item.law&&item.diagram,`${item.id}: Titel/Normen/Schema fehlen.`);
  assert(item.example?.facts&&item.example?.solution?.length&&item.example?.result,`${item.id}: Vertiefung/Fall unvollständig.`);
  assert(item.merksatz,`${item.id}: Merksatz fehlt.`);
  assert(item.intro?.length&&item.goals?.length&&item.scheme?.length&&item.normchain?.length,`${item.id}: Lern-/Prüfstruktur unvollständig.`);
  for(const p of item.sourcePages){
    assert(p>=1&&p<=371,`${item.id}: ungültige Seite ${p}.`);
    assert(Number(ao7Seitenplan[p])===Number(item.id),`${item.id}: sourcePages/Seitenplan widersprechen sich auf S. ${p}.`);
  }
}
const module=aoEinheit7.filter(x=>x.area!=="Fall"),faelle=aoEinheit7.filter(x=>x.area==="Fall");
assert(module.length===9,`AO Einheit 7: erwartet 9 Lernmodule, gefunden ${module.length}.`);
assert(faelle.length===7,`AO Einheit 7: erwartet 7 Originalfälle, gefunden ${faelle.length}.`);
for(const id of Array.from({length:16},(_,i)=>369+i))assert(byId.has(id),`AO Einheit 7: Inhalt ${id} fehlt.`);

const renderer=fs.readFileSync(new URL("../src/components/AOSchemataEinheit7.jsx",import.meta.url),"utf8");
const style=fs.readFileSync(new URL("../src/components/ao-einheit7.css",import.meta.url),"utf8");
const campus=fs.readFileSync(new URL("../src/components/AOCampusV3.jsx",import.meta.url),"utf8");
const schemaAll=fs.readFileSync(new URL("../src/components/AOSchemataAlle.jsx",import.meta.url),"utf8");
const pruefschema=fs.readFileSync(new URL("../src/components/AOPruefschema.jsx",import.meta.url),"utf8");
const links=fs.readFileSync(new URL("../src/components/AOQuerverweiseEnhancer.jsx",import.meta.url),"utf8");
const schemaLinks=fs.readFileSync(new URL("../src/components/AOSchemaLinks.jsx",import.meta.url),"utf8");

assert(ao7SchemaIds.length===16,`AO Einheit 7: erwartet 16 digitale Schemata/Falldarstellungen, gefunden ${ao7SchemaIds.length}.`);
for(const schema of ao7SchemaIds)assert(renderer.includes(`\"${schema}\"`),`AO Einheit 7: Schema ${schema} fehlt im Renderer.`);
for(const shared of ['import "./ao-einheit3.css"','import "./ao-einheit5.css"','import "./ao-einheit6.css"',"ao3-sheet","ao3-title","ao3-box","ao3-arrow","ao5-note"])assert(renderer.includes(shared),`AO Einheit 7: gemeinsamer Darstellungsbaustein fehlt: ${shared}`);
for(const token of ["var(--b)","var(--g)","var(--y)","var(--r)","var(--p)"])assert(style.includes(token),`AO Einheit 7: gemeinsame Farblogik ${token} fehlt.`);
assert(schemaAll.includes("AO7_SCHEMATA")&&schemaAll.includes("ao7SchemaIds"),"AO Einheit 7: Schemata nicht global registriert.");

assert(campus.includes('import aoEinheit7 from"../data/k1-ao-einheit-7.js"')&&campus.includes("...aoEinheit7"),"AO Einheit 7: nicht im Campus registriert.");
assert(campus.includes("34+38+53+72+44+77+371"),"AO Einheit 7: kumulative Seitenzahl enthält Einheit 7 nicht.");
assert(campus.includes("AO-Einheiten 1–")&&campus.includes('id:"E7",label:"AO Einheit 7"'),"AO Einheit 7: Cockpit/Klausurmodus nicht registriert.");
for(const id of [369,371,373,375,376,377,382,383,384])assert(campus.includes(String(id)),`AO Einheit 7: Modul ${id} fehlt in Oberthemenzuordnung.`);
for(const topicId of ['id:"wiedereinsetzung"','id:"gue"','id:"sonstigeva"','id:"steuerstrafrecht"'])assert(campus.includes(topicId),`AO Einheit 7: Oberthemen-ID fehlt: ${topicId}`);
assert(campus.includes("m.einheit===7"),"AO Einheit 7: native Falllösungen nicht direkt im Fallreiter aktiviert.");

for(const [p,id] of [[1,369],[26,370],[53,371],[77,372],[102,373],[114,374],[135,375],[214,376],[271,377],[302,378],[311,379],[323,380],[326,381],[332,382],[335,383],[368,384],[369,375],[371,375]])assert(Number(ao7Seitenplan[p])===id,`AO Einheit 7: Leitseite ${p} muss ID ${id} zugeordnet sein.`);

for(const marker of ["14.500 €","7.800 €","9.700 €","3.000 €","1.500 €","2.100 €","6.000 €"])assert(renderer.includes(marker),`AO Einheit 7: Quellenwert im §351-Fall fehlt: ${marker}`);
for(const marker of ["Leichte Krankheit / geplanter Eingriff","plötzliche, schwere Krankheit","Urlaub 8 Wochen","Urlaub 21 Tage","Einspruch bei falschem FA","Bote","Vertreter","Laie","Profi"])assert(renderer.includes(marker),`AO Einheit 7: Fall-9-Tabellenmarker fehlt: ${marker}`);
for(const marker of ["Gesetzliche Frist","ohne Verschulden versäumt","innerhalb von 1 Monat nach Wegfall des Hindernisses","Immer!","Meistens!","Nie zwingend!"])assert(renderer.includes(marker),`AO Einheit 7: §110-Quellenmarker fehlt: ${marker}`);
for(const marker of ["7.7.02","3.9.02","4.11.02","2.12.02","§ 8 VwZG analog","Zwei Einsprüche in derselben Sache"])assert(renderer.includes(marker),`AO Einheit 7: Zwei-Einsprüche-Zeitstrahl unvollständig: ${marker}`);
for(const marker of ["§ 14a Abs. 2 Nr. 2","§ 14a Abs. 3 Nr. 3","§ 183 AO","§ 183a AO","Wirkung für alle","§ 125 Abs. 4","§ 352 AO","Teilbefugnisse"])assert(renderer.includes(marker),`AO Einheit 7: GuE-Schema unvollständig: ${marker}`);
for(const marker of ["§ 130 AO","§ 131 AO","Erlasszeitpunkt","allwissender Sicht"])assert(renderer.includes(marker),`AO Einheit 7: sonstige-VA-Marker fehlt: ${marker}`);
for(const nr of ["10","11","12","13"])assert(renderer.includes(`nr=\"${nr}\"`),`AO Einheit 7: parametrisierte Fallkarte ${nr} fehlt.`);
for(const marker of ["Steuerhinterziehung","§ 370 Abs. 1 Nr. 1","Kausaler Taterfolg","zu viel VorSt","zu niedriger F-Bescheid"])assert(renderer.includes(marker),`AO Einheit 7: §370-Schema unvollständig: ${marker}`);
for(const marker of ["§ 249 (1)","§ 251 (1)","§ 361","§ 254 (1)","§ 220","§ 259","§ 281 (1)","§ 286","§ 263","§ 295"])assert(renderer.includes(marker),`AO Einheit 7: Vollstreckungswiederholung unvollständig: ${marker}`);

for(const id of ["ao-schema-351","ao-schema-110","ao-schema-110-antrag","ao-schema-zwei-einsprueche","ao-schema-gue-bekanntgabe","ao-schema-gue-einspruch","ao-schema-sonstige-va","ao-schema-plan-abc-7","ao-schema-steuerhinterziehung","ao-schema-vollstreckung-7"])assert(pruefschema.includes(id),`AO Einheit 7: Prüfschema-Ziel ${id} fehlt.`);
for(const target of ["ao-schema-351","ao-schema-110","ao-schema-110-antrag","ao-schema-zwei-einsprueche","ao-schema-gue-bekanntgabe","ao-schema-gue-einspruch","ao-schema-sonstige-va","ao-schema-steuerhinterziehung"])assert(schemaLinks.includes(target),`AO Einheit 7: Normsprung ${target} fehlt.`);
for(const id of [370,372,374,378,379,380,381])assert(links.includes(`id:${id}`),`AO Einheit 7: Originalfall ${id} fehlt im bidirektionalen Querverweis-System.`);
for(const id of [369,371,373,375,377,382])assert(links.includes(`${id}:`),`AO Einheit 7: Lernmodul ${id} hat keine passenden Fälle im Querverweis-System.`);

const alle=aoEinheit7.flatMap(x=>x.sourcePages.map(p=>`${p}:${x.id}`));
assert(alle.length===371,"AO Einheit 7: Jede physische Seite/Frame muss genau einmal primär zugeordnet sein.");
assert(new Set(alle.map(x=>x.split(":")[0])).size===371,"AO Einheit 7: doppelte/fehlende Seiten in sourcePages.");
assert(byId.get(375).sourcePages.includes(135)&&byId.get(375).sourcePages.includes(213)&&byId.get(375).sourcePages.includes(369)&&byId.get(375).sourcePages.includes(370)&&byId.get(375).sourcePages.includes(371),"AO Einheit 7: GuE-Bekanntgabe muss auch die Schlussframes 369–371 enthalten.");
assert(byId.get(384).sourcePages.join(",")==="368","AO Einheit 7: Vollstreckungsframe 368 fehlt.");

console.log(`AO Einheit 7 vollständig: 371/371 physische PDF-Seiten/Frames, ${module.length} Lernmodule, ${faelle.length} Originalfälle, ${ao7SchemaIds.length} digitale Schemata/Falldarstellungen; §351, §110, GuE/§352, §§130/131, Fälle 9–13, §370, Vollstreckung und Querverweise geprüft.`);
