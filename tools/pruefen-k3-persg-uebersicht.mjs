import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

/* Prüft den generellen PersG-Überblick: vier Lebenszyklusfelder, farbcodierte
   Rechtsfolgen, gültige Modulverweise und die Einbindung in den Campus. */

const root = process.cwd();
const dataPath = path.join(root, "src/data/k3-persg-uebersicht.js");
const visualPath = path.join(root, "src/components/K3PersGUebersicht.jsx");
const cssPath = path.join(root, "src/components/k3-persg-uebersicht.css");
const campusPath = path.join(root, "src/components/K3PersGCampus.jsx");
for (const p of [dataPath, visualPath, cssPath, campusPath])
  if (!fs.existsSync(p)) throw new Error(`PersG Überblick: Datei fehlt: ${path.relative(root, p)}`);
const assert = (ok, msg) => { if (!ok) throw new Error(`PersG Überblick: ${msg}`); };

await import(pathToFileURL(path.join(root, "src/data/k3-persg-tag2-register.js")));
await import(pathToFileURL(path.join(root, "src/data/k3-persg-tag3-register.js")));
await import(pathToFileURL(path.join(root, "src/data/k3-persg-tag4-register.js")));
const { registerPersGTag5 } = await import(pathToFileURL(path.join(root, "src/data/k3-persg-tag5-register.js")));
registerPersGTag5();
const { persgModule } = await import(pathToFileURL(path.join(root, "src/data/k3-persg-tag1.js")));
const { persgUebersicht, persgUebersichtLegende, persgUebersichtTonName, persgUebersichtMerksatz } =
  await import(pathToFileURL(dataPath));

const modulIds = new Set(persgModule.map((m) => m.id));
const toene = new Set(persgUebersichtLegende.map((l) => l.ton));
assert(toene.size === 3 && ["buchwert", "gewinn", "folge"].every((t) => toene.has(t)), "Legende deckt nicht alle drei Rechtsfolgen ab");
assert(persgUebersichtLegende.every((l) => persgUebersichtTonName[l.ton] === l.label), "Legende und Tonbezeichnungen laufen auseinander");
assert(typeof persgUebersichtMerksatz === "string" && persgUebersichtMerksatz.length > 40, "Merksatz fehlt");

const gruppen = ["eintritt", "wechsel", "ausscheiden", "beendigung"];
assert(persgUebersicht.length === 4, `vier Lebenszyklusfelder erwartet, gefunden: ${persgUebersicht.length}`);
for (const id of gruppen) assert(persgUebersicht.some((g) => g.id === id), `Feld fehlt: ${id}`);

let eintraege = 0, verlinkt = 0;
for (const g of persgUebersicht) {
  assert(g.titel && g.leitfrage, `Feld ${g.id} ohne Titel/Leitfrage`);
  assert(g.eintraege.length >= 4, `Feld ${g.id} hat weniger als vier Grundfälle`);
  for (const e of g.eintraege) {
    eintraege += 1;
    assert(e.titel && e.norm && e.hinweis, `Grundfall ohne Titel/Norm/Hinweis in ${g.id}`);
    assert(toene.has(e.ton), `unbekannte Rechtsfolge „${e.ton}“ bei ${e.titel}`);
    for (const id of e.moduleIds || []) {
      assert(modulIds.has(id), `Grundfall „${e.titel}“ verweist auf unbekanntes Modul ${id}`);
      verlinkt += 1;
    }
  }
}
assert(verlinkt >= 15, `zu wenige Modulverweise: ${verlinkt}`);

const jsx = fs.readFileSync(visualPath, "utf8"), css = fs.readFileSync(cssPath, "utf8"), campus = fs.readFileSync(campusPath, "utf8");
for (const marker of ["persg-ueb-raster", "persg-ueb-gruppe", "persg-ueb-eintrag", "PersGUebersichtLegende", "persgUebersichtTonName", "modulOeffnen"])
  assert(jsx.includes(marker), `Marker in K3PersGUebersicht.jsx fehlt: ${marker}`);
for (const marker of [".persg-ueb-raster", ".persg-ueb-eintrag--buchwert", ".persg-ueb-eintrag--gewinn", ".persg-ueb-eintrag--folge", ".persg-ueb-legende", "@media"])
  assert(css.includes(marker), `CSS-Marker fehlt: ${marker}`);
for (const marker of ['"uebersicht", "Überblick"', "K3PersGUebersicht", "PersGUebersichtLegende", 'verlauf.ansicht==="uebersicht"', "Uebersichtsseite"])
  assert(campus.includes(marker), `Campus-Einbindung fehlt: ${marker}`);
assert(/--gruen|--rot|--linie/.test(css) && !/var\(--(line|panel|accent|text|muted|bg)\)/.test(css), "CSS nutzt undefinierte englische Farbtoken");

console.log("K3 Personengesellschaften · genereller Überblick ✅");
console.log(`${persgUebersicht.length} Felder · ${eintraege} Grundfälle · ${verlinkt} Modulverweise ✅`);
console.log("Eintritt · Gesellschafterwechsel · Ausscheiden · Beendigung ✅");
