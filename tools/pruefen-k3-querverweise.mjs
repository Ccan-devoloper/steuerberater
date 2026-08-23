import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root=process.cwd();
const enhancerPath=path.join(root,"src/components/K3QuerverweiseEnhancer.jsx");
const fachPath=path.join(root,"src/components/K3Fachleiste.jsx");
const cssPath=path.join(root,"src/components/k3-querverweise.css");
const allgDataPath=path.join(root,"src/data/module.js");
const fallPath=path.join(root,"src/data/fallsammlung.js");
const haPath=path.join(root,"src/data/hausaufgaben.js");
const persgPath=path.join(root,"src/data/k3-persg-tag1.js");
for(const p of [enhancerPath,fachPath,cssPath,allgDataPath,fallPath,haPath,persgPath]) if(!fs.existsSync(p)) throw new Error(`K3 Querverweise: Datei fehlt: ${path.relative(root,p)}`);

await import(pathToFileURL(path.join(root,"src/data/k3-persg-tag2-register.js")));
await import(pathToFileURL(path.join(root,"src/data/k3-persg-tag3-register.js")));
await import(pathToFileURL(path.join(root,"src/data/k3-persg-tag4-register.js")));
const {module:allgModule}=await import(pathToFileURL(allgDataPath));
const {zugeordneteFaelle}=await import(pathToFileURL(fallPath));
const {default:hausaufgaben}=await import(pathToFileURL(haPath));
const {persgModule,persgFaelle,persgSchemata}=await import(pathToFileURL(persgPath));
const enhancer=fs.readFileSync(enhancerPath,"utf8"),fach=fs.readFileSync(fachPath,"utf8"),css=fs.readFileSync(cssPath,"utf8");
const assert=(ok,msg)=>{if(!ok)throw new Error(`K3 Querverweise: ${msg}`);};

assert(allgModule.length>0,"Allgemein-Module fehlen");
assert(zugeordneteFaelle.length>0&&zugeordneteFaelle.every((f)=>f.zielmodul_id),"Fallsammlung ist nicht durchgehend Modul-zugeordnet");
assert(hausaufgaben.length>=9,"Hausaufgabenbasis unvollständig");
assert(persgModule.length>=37,"PersG-Module Tag 1–4 fehlen");
assert(persgFaelle.length>=17&&persgFaelle.every((f)=>(f.moduleIds||[]).length>0),"PersG-Originalfälle ohne Modul-Rückverweis");
assert(persgSchemata.length>=7&&persgSchemata.every((s)=>(s.moduleIds||[]).length>0),"PersG-Schema ohne Modulzuordnung");

for(const marker of [
  'import { module as allgemeinModule }', 'zugeordneteFaelle', 'hausaufgaben, { passendeModule }',
  'allgemeinSchemata', 'persgModule, persgFaelle, persgSchemata', 'oeffneAllgModul', 'oeffnePersgModul',
  'oeffneAllgFall', 'oeffnePersgFall', 'oeffneAllgSchema', 'oeffnePersgSchema', 'oeffneHausaufgabe',
  'Passende Fälle', 'Passende Originalfälle', 'Passende Prüfschemata', 'Passende Hausaufgaben',
  'Verwandte Lernmodule', 'PersG-Vertiefung', 'K3-Allgemein · Vertiefung',
  'allgemein:module:', 'allgemein:fall:', 'allgemein:schema:', 'allgemein:hausaufgabe:',
  'persg:module:', 'persg:fall:', 'persg:schema:', 'Querverweis-Systematik', 'createPortal'
]) assert(enhancer.includes(marker),`Enhancer-Marker fehlt: ${marker}`);

assert(fach.includes('K3QuerverweiseEnhancer')&&fach.includes('<K3QuerverweiseEnhancer />'),"globaler Mount in K3Fachleiste fehlt");
for(const marker of ['.k3-xref__grid','.k3-xref__gruppe','.k3-xref__prozess','.k3-xref-ziel','@media']) assert(css.includes(marker),`CSS-Marker fehlt: ${marker}`);

console.log("K3 Querverweissystem ✅");
console.log(`Allgemein: ${allgModule.length} Module · ${zugeordneteFaelle.length} verknüpfte Fälle · ${hausaufgaben.length} Hausaufgaben ✅`);
console.log(`PersG: ${persgModule.length} Module · ${persgFaelle.length} Originalfälle · ${persgSchemata.length} Prüfschemata ✅`);
console.log("Lernmodule ↔ Fälle ↔ Prüfschemata ↔ Hausaufgaben + Allgemein ↔ PersG ✅");
