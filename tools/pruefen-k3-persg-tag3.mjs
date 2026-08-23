import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const tag1Path = path.join(root, "src/data/k3-persg-tag1.js");
const tag3Path = path.join(root, "src/data/k3-persg-tag3-register.js");
const campusPath = path.join(root, "src/components/K3PersGCampus.jsx");
const visualPath = path.join(root, "src/components/K3PersGTag3Visuals.jsx");
const cssPath = path.join(root, "src/components/k3-persg-tag3.css");
for (const p of [tag1Path, tag3Path, campusPath, visualPath, cssPath]) if (!fs.existsSync(p)) throw new Error(`PersG Tag 3: Datei fehlt: ${path.relative(root,p)}`);

await import(pathToFileURL(tag3Path));
const { persgQuelle, persgSeitenplan, persgModule, persgFaelle, persgSchemata, persgQuizfragen } = await import(pathToFileURL(tag1Path));
const campus = fs.readFileSync(campusPath,"utf8");
const visuals = fs.readFileSync(visualPath,"utf8");
const css = fs.readFileSync(cssPath,"utf8");
const assert = (ok,msg) => { if (!ok) throw new Error(`PersG Tag 3: ${msg}`); };

assert(persgQuelle.pages === 63, `isolierte Kernseiten Tag 1–3: erwartet 63, gefunden ${persgQuelle.pages}`);
assert(persgQuelle.companionPages === 459, `isolierte Einheitsfassung: erwartet 459, gefunden ${persgQuelle.companionPages}`);
assert(persgQuelle.physicalPages === 522, `isolierte physische Gesamtseiten: erwartet 522, gefunden ${persgQuelle.physicalPages}`);
const t3 = persgQuelle.tags?.find((t)=>t.tag===3); assert(t3?.pages===10 && t3?.companion?.pages===459, "Tag-3-Quellenmetadaten 10 + 459 fehlen");
const clean=persgSeitenplan.filter((x)=>x.tag===3).sort((a,b)=>a.pdfPage-b.pdfPage); assert(clean.length===10,`Tagesnotiz: ${clean.length}/10`); assert(clean.every((x,i)=>x.pdfPage===i+1),"Tagesnotiz nicht lückenlos 1–10");
const ranges=[...(persgQuelle.tag3CaptureRanges||[])].sort((a,b)=>a.start-b.start); let expected=1,expanded=[]; for(const r of ranges){assert(r.start===expected,`Lücke/Überlappung vor S. ${r.start}`);for(let p=r.start;p<=r.end;p++)expanded.push(p);expected=r.end+1;} assert(expected===460&&expanded.length===459&&new Set(expanded).size===459,"Einheitsfassung nicht 459/459 eindeutig"); const tech=ranges.find((r)=>r.start===458&&r.end===458); assert(tech&&tech.moduleIds.length===0,"technische S.458 fehlt");
for(let id=21;id<=29;id++)assert(persgModule.some((m)=>m.id===id),`Modul ${id} fehlt`); for(let nr=8;nr<=13;nr++)assert(persgFaelle.some((f)=>f.nr===nr),`Originalfall ${nr} fehlt`);
const allData=JSON.stringify({persgQuelle,persgModule,persgFaelle,persgSchemata,persgQuizfragen}); for(const marker of ["52.500","Wer Satz 3 sagt, muss auch Satz 4 sagen","500.000","2.700","3.700","§ 6 Abs. 5 S. 3 Nr. 4","87.000","63.000","sieben Jahren","9.600","1.800","BMF 08.12.2011","Trennungstheorie","§ 6 Abs. 5 S. 5–7"])assert(allData.includes(marker),`Quellenmarker fehlt: ${marker}`);
for(const type of ["transfer-master","pv-gubo","sechs5-system","sperrfrist","trennung","nr4-identisch","status-s5","ust-transfer","gesamtfall-afa"])assert(visuals.includes(`\"${type}\"`),`Visual fehlt: ${type}`); assert(css.includes(".p3-table")&&css.includes(".p3-warning")&&css.includes("@media"),"Tag-3-CSS unvollständig");
assert(campus.includes('import "../data/k3-persg-tag3-register.js";'),"Tag-3-Register fehlt im gemeinsamen Campus"); assert(campus.includes("K3PersGTag3Visuals"),"Tag-3-Visuals fehlen"); assert(/Tag 1 bis [3-9]/.test(campus)&&campus.includes("captureRangesFor"),"gemeinsamer Campus bildet Tag 3 nicht mehr generisch ab"); assert(campus.includes("Quellenhinweis Einheitsfassung"),"Quellenhinweis fehlt in Modulen"); assert(campus.includes("Passende Originalfälle")&&campus.includes("Passende Lernmodule"),"Querverweise fehlen");
console.log("K3 Personengesellschaften · 3. Unterrichtstag ✅"); console.log("Tagesnotiz: 10/10 Seiten ✅"); console.log("Einheitsfassung: 459/459 Seiten ✅");
