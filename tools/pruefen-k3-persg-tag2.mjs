import fs from "node:fs";

const read = (p) => fs.readFileSync(new URL(`../${p}`, import.meta.url), "utf8");
const register = read("src/data/k3-persg-tag2-register.js");
const campus = read("src/components/K3PersGCampus.jsx");
const visuals = read("src/components/K3PersGTag2Visuals.jsx");
const css = read("src/components/k3-persg-tag2.css");

const assert = (ok, msg) => { if (!ok) throw new Error(msg); };

// 39 PDF-Seiten des 2. Unterrichtstags müssen einzeln registriert sein.
const pageMatches = [...register.matchAll(/\[(\d+),(\d+),"[^"]+"\]/g)]
  .map((m) => Number(m[1]))
  .filter((n) => n >= 1 && n <= 39);
const uniquePages = [...new Set(pageMatches)].sort((a,b)=>a-b);
assert(uniquePages.length === 39, `Tag 2: ${uniquePages.length}/39 Seiten im Seitenplan`);
assert(uniquePages.every((n,i)=>n===i+1), "Tag 2: Seitenplan ist nicht lückenlos 1–39");

for (let id=9; id<=20; id++) assert(new RegExp(`id:${id}(?:,|\\s)`).test(register), `Modul ${id} fehlt`);
for (let nr=2; nr<=7; nr++) assert(register.includes(`nr:${nr}`), `Originalfall ${nr} fehlt`);

const mustRegister = [
  "BMF 28.04.1998", "Spiegelbildmethode", "310.000", "105.000", "217.000", "92.000",
  "192.000", "208.000", "16.000", "93.000", "11.500", "25.500", "15.000", "70.000",
  "150.000", "50.000", "80.000", "Kapitalkonto II", "BMF 26.07.2016", "BFH IV R 15/14",
  "BFH IV R 46/12", "Zebragesellschaft", "Doppelstöckige", "§ 6b",
];
for (const marker of mustRegister) assert(register.includes(marker), `Quellenmarker fehlt: ${marker}`);

const visualTypes = [
  "mu-bas","verguetungen","kapitalkonten2","doppelstock-grund","spiegel-grund","spiegel-2025",
  "spiegel-nwb","spiegel-15a","zebra","doppelstock-spiegel","sechs-b","einbringung",
];
for (const type of visualTypes) assert(visuals.includes(`\"${type}\"`), `Digitales Schema fehlt: ${type}`);
assert(visuals.includes("310.000"), "Spiegelbildfall 2025 fehlt in Visuals");
assert(visuals.includes("217.000"), "NWB Beteiligungsansatz 2010 fehlt in Visuals");
assert(visuals.includes("16.000"), "§15a verrechenbarer Verlust fehlt in Visuals");
assert(visuals.includes("11.500") && visuals.includes("25.500"), "Zebra-Rechenwerte fehlen");
assert(visuals.includes("15.000") && visuals.includes("70.000"), "Doppelstock-Mehrwerte fehlen");
assert(visuals.includes("Kapitalkonto II"), "Kapitalkonto-II-Rechtsentwicklung fehlt");

assert(campus.startsWith('import "../data/k3-persg-tag2-register.js";'), "Tag-2-Register wird im Campus nicht vor den Daten geladen");
assert(campus.includes("K3PersGTag2Visuals"), "Tag-2-Visuals sind im Campus nicht eingebunden");
assert(campus.includes("53 Quellseiten") || campus.includes("persgQuelle.pages"), "Gemeinsame 53-Seiten-Abdeckung fehlt");
assert(campus.includes("tag2Pages.length") && campus.includes("/ 39 Seiten"), "39/39-Anzeige fehlt im Cockpit");
assert(campus.includes("Passende Originalfälle"), "Modul → Originalfall-Querverweise fehlen");
assert(campus.includes("Passende Lernmodule"), "Originalfall → Modul-Querverweise fehlen");
assert(campus.includes("<PersGVisual type={s.visual}"), "Prüfschemata rendern Tag-2-Visuals nicht");
assert(css.includes(".p2-table") && css.includes(".p2-flow") && css.includes("@media"), "Tag-2-Darstellung/CSS unvollständig");

console.log("K3 Personengesellschaften · 2. Unterrichtstag ✅");
console.log("PDF-Seiten: 39/39 ✅");
console.log("Neue Lernmodule: 12/12 (M9–M20) ✅");
console.log("Neue Originalfälle: 6/6 (Fall 2–7) ✅");
console.log("Digitale Schemata/Tabellen und bidirektionale Querverweise ✅");
