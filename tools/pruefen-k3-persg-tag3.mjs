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
const register = fs.readFileSync(tag3Path,"utf8");
const campus = fs.readFileSync(campusPath,"utf8");
const visuals = fs.readFileSync(visualPath,"utf8");
const css = fs.readFileSync(cssPath,"utf8");
const assert = (ok,msg) => { if (!ok) throw new Error(`PersG Tag 3: ${msg}`); };

assert(persgQuelle.pages === 63, `Kernseiten Tag 1–3: erwartet 63, gefunden ${persgQuelle.pages}`);
assert(persgQuelle.companionPages === 459, `Einheitsfassung: erwartet 459, gefunden ${persgQuelle.companionPages}`);
assert(persgQuelle.physicalPages === 522, `Physische Gesamtseiten: erwartet 522, gefunden ${persgQuelle.physicalPages}`);
const t3 = persgQuelle.tags?.find((t)=>t.tag===3);
assert(t3?.pages===10 && t3?.companion?.pages===459, "Tag-3-Quellenmetadaten 10 + 459 fehlen");

const clean = persgSeitenplan.filter((x)=>x.tag===3).sort((a,b)=>a.pdfPage-b.pdfPage);
assert(clean.length===10, `Tagesnotiz: ${clean.length}/10 Seiten registriert`);
assert(clean.every((x,i)=>x.pdfPage===i+1), `Tagesnotiz nicht lückenlos 1–10: ${clean.map(x=>x.pdfPage).join(",")}`);
assert(new Set(clean.map((x)=>x.pdfPage)).size===10, "Tagesnotiz enthält doppelte Primärzuordnung");

const ranges = [...(persgQuelle.tag3CaptureRanges || [])].sort((a,b)=>a.start-b.start);
assert(ranges.length>0, "Seitencluster der Einheitsfassung fehlen");
let expected=1; const expanded=[];
for (const r of ranges) {
  assert(r.start===expected, `Einheitsfassung: Lücke/Überlappung vor S. ${r.start}, erwartet ${expected}`);
  assert(r.end>=r.start, `ungültiger Bereich ${r.start}–${r.end}`);
  for (let p=r.start;p<=r.end;p++) expanded.push(p);
  expected=r.end+1;
}
assert(expected===460, `Einheitsfassung endet bei ${expected-1} statt 459`);
assert(expanded.length===459 && new Set(expanded).size===459, `Einheitsfassung: ${new Set(expanded).size}/459 Seiten eindeutig erfasst`);
const tech = ranges.find((r)=>r.start===458 && r.end===458);
assert(tech && tech.moduleIds.length===0 && /technisch/i.test(tech.topic), "S. 458 muss als technische Unterbrechung ohne Fachmodul markiert sein");

for (let id=21;id<=29;id++) assert(persgModule.some((m)=>m.id===id), `Modul ${id} fehlt`);
for (let nr=8;nr<=13;nr++) assert(persgFaelle.some((f)=>f.nr===nr), `Originalfall ${nr} fehlt`);
const allData=JSON.stringify({persgQuelle,persgModule,persgFaelle,persgSchemata,persgQuizfragen});
for (const marker of [
  "80.000","150.000","70.000","112.500","37.500","52.500",
  "Wer Satz 3 sagt, muss auch Satz 4 sagen","400.000","600.000","300.000","500.000","100.000",
  "1.000","10.000","3.000","2.700","3.700","§ 6 Abs. 5 S. 3 Nr. 4","identisch beteiligten",
  "87.000","7.000","63.000","sieben Jahren","260.000","252.200","240.000","9.600","1.800",
  "BMF 08.12.2011","Trennungstheorie","§ 6 Abs. 5 S. 5–7","§ 3 Abs. 12 S. 2 UStG"
]) assert(allData.includes(marker), `Quellenmarker fehlt: ${marker}`);

const visualTypes=["transfer-master","pv-gubo","sechs5-system","sperrfrist","trennung","nr4-identisch","status-s5","ust-transfer","gesamtfall-afa"];
for (const type of visualTypes) assert(visuals.includes(`\"${type}\"`), `Digitales Schema fehlt: ${type}`);
for (const marker of ["52.500","500.000","2.700","3.700","87.000","63.000","7.800","9.600","1.800","101.800"]) assert(visuals.includes(marker), `Visual-Rechenwert fehlt: ${marker}`);
assert(visuals.includes("Quellenbegrenzung"), "USt-Modul muss die Quellenbegrenzung sichtbar machen");
assert(css.includes(".p3-table") && css.includes(".p3-warning") && css.includes("@media"), "Tag-3-CSS unvollständig");

assert(campus.startsWith('import "../data/k3-persg-tag2-register.js";\nimport "../data/k3-persg-tag3-register.js";'), "Tag-3-Register wird nicht nach Tag 2 und vor den Daten geladen");
assert(campus.includes("K3PersGTag3Visuals"), "Tag-3-Visuals fehlen im Campus");
assert(campus.includes("Tag 1 + 2 + 3") && campus.includes("63 Kernseiten"), "Tag-3-Gesamtstrecke fehlt im Campus");
assert(campus.includes("tag3Pages.length") && campus.includes("/ 10 Seiten"), "10/10-Tagesnotiz-Anzeige fehlt");
assert(campus.includes("459 / 459 Seiten erfasst") && campus.includes("captureRanges.map"), "459/459-Einheitsfassung-Anzeige fehlt");
assert(campus.includes("Quellenhinweis Einheitsfassung"), "Quellenhinweise der Einheitsfassung werden in Modulen nicht gerendert");
assert(campus.includes("Passende Originalfälle") && campus.includes("Passende Lernmodule"), "bidirektionale Fall-/Modulverweise fehlen");
assert(campus.includes("Ende Tag 3"), "Modulnavigation endet nicht bei Tag 3");

console.log("K3 Personengesellschaften · 3. Unterrichtstag ✅");
console.log("Tagesnotiz: 10/10 Seiten ✅");
console.log("Einheitsfassung: 459/459 Seiten in lückenlosen Quellenclustern ✅");
console.log("Neue Lernmodule: 9/9 (M21–M29) ✅");
console.log("Neue Originalfälle: 6/6 (Fall 8–13) ✅");
console.log("Digitale Schemata, Quellenhinweise und bidirektionale Querverweise ✅");
