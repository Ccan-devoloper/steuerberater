import fs from "node:fs";
import aoEinheit8,{ao8Seitenplan,ao8SchemaIds} from "../src/data/k1-ao-einheit-8.js";

const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
const byId=new Map(aoEinheit8.map(x=>[Number(x.id),x]));
assert(aoEinheit8.length===9,`AO Einheit 8: erwartet 9 Lernmodule, gefunden ${aoEinheit8.length}.`);
assert(new Set(aoEinheit8.map(x=>x.id)).size===9,"AO Einheit 8: doppelte IDs.");
assert(Object.keys(ao8Seitenplan).length===150,"AO Einheit 8: Seitenplan muss exakt 150 Seiten enthalten.");
for(let s=1;s<=150;s+=1){const id=Number(ao8Seitenplan[s]);assert(id,`AO Einheit 8: Seite ${s} fehlt.`);assert(byId.has(id),`AO Einheit 8: Seite ${s} verweist auf unbekannte ID ${id}.`);assert(byId.get(id).sourcePages?.includes(s),`AO Einheit 8: Seite ${s} fehlt in sourcePages von ${id}.`);}
for(const item of aoEinheit8){assert(item.einheit===8,`${item.id}: falsche Einheit.`);assert(item.area==="Modul",`${item.id}: Einheit 8 enthält nach Quelle keine als Originalfall bezeichnete Aufgabe.`);assert(item.title&&item.law&&item.diagram,`${item.id}: Titel/Normen/Schema fehlen.`);assert(item.intro?.length&&item.goals?.length&&item.scheme?.length&&item.normchain?.length,`${item.id}: Lernstruktur unvollständig.`);assert(item.example?.facts&&item.example?.solution?.length&&item.example?.result,`${item.id}: Vertiefung unvollständig.`);assert(item.merksatz,`${item.id}: Merksatz fehlt.`);for(const p of item.sourcePages){assert(p>=1&&p<=150,`${item.id}: ungültige Seite ${p}.`);assert(Number(ao8Seitenplan[p])===Number(item.id),`${item.id}: Seitenplan-Widerspruch auf S. ${p}.`);}}
for(const id of Array.from({length:9},(_,i)=>385+i))assert(byId.has(id),`AO Einheit 8: Modul ${id} fehlt.`);
assert(byId.get(385).sourcePages.join(",")==="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15","AO 8: objektiver Tatbestand muss S. 1–15 umfassen.");
assert(byId.get(393).sourcePages.join(",")==="141,142,143,144,145,146,147,148,149,150","AO 8: § 74 muss S. 141–150 umfassen.");

const renderer=fs.readFileSync(new URL("../src/components/AOSchemataEinheit8.jsx",import.meta.url),"utf8");
const style=fs.readFileSync(new URL("../src/components/ao-einheit8.css",import.meta.url),"utf8");
const all=fs.readFileSync(new URL("../src/components/AOSchemataAlle.jsx",import.meta.url),"utf8");
const campus=fs.readFileSync(new URL("../src/components/AOCampusV3.jsx",import.meta.url),"utf8");
const pruefschema=fs.readFileSync(new URL("../src/components/AOPruefschema.jsx",import.meta.url),"utf8");
const links=fs.readFileSync(new URL("../src/components/AOSchemaLinks.jsx",import.meta.url),"utf8");
assert(ao8SchemaIds.length===9,`AO Einheit 8: erwartet 9 Schemata, gefunden ${ao8SchemaIds.length}.`);
for(const schema of ao8SchemaIds)assert(renderer.includes(`\"${schema}\"`),`AO Einheit 8: Schema ${schema} fehlt im Renderer.`);
assert(renderer.includes('import "./ao-einheit3.css"')&&renderer.includes('import "./ao-einheit5.css"')&&renderer.includes('import "./ao-einheit6.css"'),"AO Einheit 8: gemeinsamer AO-Schemastil fehlt.");
for(const shared of ["ao3-sheet","ao3-title","ao3-arrow","ao5-note"])assert(renderer.includes(shared),`AO Einheit 8: gemeinsamer Darstellungsbaustein ${shared} fehlt.`);
for(const token of ["var(--b)","var(--g)","var(--r)","var(--p)"])assert(style.includes(token),`AO Einheit 8: gemeinsame Farblogik ${token} fehlt.`);

for(const marker of ["zu viel VorSt","zu niedriger F-Bescheid","Nicht: Steuer lediglich nicht bezahlt","Wissen & Wollen","§ 378 Abs. 1 AO","Festsetzungsfrist 10 Jahre","keine Sperre nach § 173 Abs. 2 AO","25.000 € je Tat","keine wirksame Selbstanzeige = strafbare StHi"])assert(renderer.includes(marker),`AO Einheit 8: Steuerstrafrechts-Marker fehlt: ${marker}`);
for(const marker of ["Einstehenmüssen für eine fremde Schuld","§§ 69–76 AO","100.000 €","20.000 €","was die GmbH hätte zahlen können","schriftl. Vereinbarung","Gesamtverantwortung aller GF","zum fremden Vorteil","Fabrik / Gegenstand"])assert(renderer.includes(marker),`AO Einheit 8: Haftungs-Marker fehlt: ${marker}`);

assert(all.includes("AO8_SCHEMATA")&&all.includes("ao8SchemaIds"),"AO Einheit 8: Schemata nicht global registriert.");
assert(campus.includes('import aoEinheit8 from"../data/k1-ao-einheit-8.js"')&&campus.includes("...aoEinheit8"),"AO Einheit 8: nicht im Campus registriert.");
assert(campus.includes("34+38+53+72+44+77+371+150"),"AO Einheit 8: Gesamtseitenzahl muss 839 sein.");
assert(campus.includes("AO-Einheiten 1–8")&&campus.includes('id:"E8"'),"AO Einheit 8: Cockpit/Klausurmodus nicht erweitert.");
for(const id of [385,386,387,388,389,390,391,392,393])assert(campus.includes(String(id)),`AO Einheit 8: Modul ${id} fehlt in Oberthemenzuordnung.`);
assert(campus.includes("Haftung & §§ 69–76 AO")&&campus.includes("Steuerstrafrecht, Selbstanzeige & §§ 370/371/378 AO"),"AO Einheit 8: Oberthemen fehlen.");
for(const id of ["ao-schema-370-objektiv","ao-schema-370-subjektiv","ao-schema-370-folgen","ao-schema-371","ao-schema-haftung","ao-schema-69","ao-schema-mehrere-gf","ao-schema-71","ao-schema-74"])assert(pruefschema.includes(id),`AO Einheit 8: Prüfschema-Ziel ${id} fehlt.`);
for(const target of ["ao-schema-370-objektiv","ao-schema-370-subjektiv","ao-schema-370-folgen","ao-schema-371","ao-schema-haftung","ao-schema-69","ao-schema-71","ao-schema-74"])assert(links.includes(target),`AO Einheit 8: Normsprung ${target} fehlt.`);

const pages=aoEinheit8.flatMap(x=>x.sourcePages);
assert(pages.length===150,"AO Einheit 8: Jede PDF-Seite muss genau einmal primär zugeordnet sein.");
assert(new Set(pages).size===150,"AO Einheit 8: doppelte oder fehlende Seiten in sourcePages.");
console.log(`AO Einheit 8 vollständig: 150/150 PDF-Seiten, ${aoEinheit8.length} Lernmodule, ${ao8SchemaIds.length} digitale Schemata; §§ 370/371/378 sowie Haftung §§ 69/71/74 geprüft.`);
