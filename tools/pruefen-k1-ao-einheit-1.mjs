import fs from "node:fs";
import aoEinheit1, { ao1Seitenplan } from "../src/data/k1-ao-einheit-1.js";
import {aoFallNummer,aoFallAnzeige,AO_FALLID_BY_NUMMER} from "../src/data/ao-originalfall-nummern.js";

const assert = (ok, msg) => { if (!ok) throw new Error(msg); };
const byId = new Map(aoEinheit1.map((x) => [Number(x.id), x]));
const aoSchemaIds = [
  "ao-besteuerungsverfahren",
  "ao-ermittlungsverfahren",
  "ao-verweigerungsrecht",
  "ao-va-pruefungsfalle",
  "ao-va-arten",
  "ao-wirksamkeit-nichtigkeit",
  "ao-bekanntgabe",
  "ao-vertreter-ehegatten",
  "ao-handbuch",
];

assert(aoEinheit1.length === 11, `AO Einheit 1: erwartet 11 Inhalte, gefunden ${aoEinheit1.length}.`);
assert(new Set(aoEinheit1.map((x) => x.id)).size === aoEinheit1.length, "AO Einheit 1: doppelte IDs.");

const seiten = Object.keys(ao1Seitenplan).map(Number).sort((a,b)=>a-b);
assert(seiten.length === 34, `AO Einheit 1: Seitenplan muss 34 Seiten enthalten, gefunden ${seiten.length}.`);
for (let s=1; s<=34; s+=1) {
  assert(ao1Seitenplan[s], `AO Einheit 1: PDF-Seite ${s} fehlt im Seitenplan.`);
  assert(byId.has(Number(ao1Seitenplan[s])), `AO Einheit 1: PDF-Seite ${s} verweist auf unbekannte ID ${ao1Seitenplan[s]}.`);
}

for (const item of aoEinheit1) {
  assert(item.einheit === 1, `${item.id}: falsche Einheit.`);
  assert(item.title && item.law, `${item.id}: Titel oder Normen fehlen.`);
  assert(Array.isArray(item.intro) && item.intro.length, `${item.id}: Einordnung fehlt.`);
  assert(Array.isArray(item.goals) && item.goals.length, `${item.id}: Lernziele fehlen.`);
  assert(Array.isArray(item.scheme) && item.scheme.length, `${item.id}: Prüfungsschema fehlt.`);
  assert(Array.isArray(item.normchain) && item.normchain.length, `${item.id}: Normenkette fehlt.`);
  assert(item.example?.facts && item.example?.solution?.length && item.example?.result, `${item.id}: Fall/Vertiefung unvollständig.`);
  assert(item.merksatz, `${item.id}: Merksatz fehlt.`);
  assert(Array.isArray(item.sourcePages) && item.sourcePages.length, `${item.id}: Quellen-Seiten fehlen.`);
  for (const page of item.sourcePages) assert(page >= 1 && page <= 34, `${item.id}: ungültige Quellen-Seite ${page}.`);
  if (item.area !== "Fall") {
    assert(item.diagram, `${item.id}: Lernmodul ohne digitales Schema.`);
    assert(aoSchemaIds.includes(item.diagram), `${item.id}: unbekannte Schema-ID ${item.diagram}.`);
  }
}

const module = aoEinheit1.filter((x)=>x.area!=="Fall");
const faelle = aoEinheit1.filter((x)=>x.area==="Fall");
assert(module.length === 9, `AO Einheit 1: erwartet 9 Lernmodule, gefunden ${module.length}.`);
assert(faelle.length === 2, `AO Einheit 1: erwartet 2 Originalfälle, gefunden ${faelle.length}.`);

for (const id of [301,302,303,304,305,306,307,308,309,310,311]) assert(byId.has(id), `AO Einheit 1: Inhalt ${id} fehlt.`);
for (const schema of aoSchemaIds) assert(module.some((m)=>m.diagram===schema), `AO Einheit 1: Schema ${schema} ist keinem Lernmodul zugeordnet.`);

assert(aoFallNummer(310)===1&&aoFallAnzeige(310)==="Fall 1", "AO Einheit 1: interne ID 310 muss sichtbar als Fall 1 erscheinen.");
assert(aoFallNummer(311)===2&&aoFallAnzeige(311)==="Fall 2", "AO Einheit 1: interne ID 311 muss sichtbar als Fall 2 erscheinen.");
assert(AO_FALLID_BY_NUMMER.get(1)===310&&AO_FALLID_BY_NUMMER.get(2)===311, "AO Einheit 1: Rückauflösung Fall 1/2 auf interne IDs fehlerhaft.");
const enhancer=fs.readFileSync(new URL("../src/components/AOQuerverweiseEnhancer.jsx",import.meta.url),"utf8");
assert(enhancer.includes("ao-inline-fall-link")&&enhancer.includes("verlinkeFallreferenzenInSchemata"), "AO Prüfschema: direkte Fallverlinkung fehlt.");
assert(enhancer.includes('302: [{ id:310'), "AO Prüfschema Ermittlungsverfahren muss Fall 1 zugeordnet sein.");
assert(!enhancer.includes('`Originalfall ${r.id}`'), "AO Originalfälle: interne 3xx-ID wird noch als sichtbare Fallnummer ausgegeben.");

console.log(`AO Einheit 1 vollständig: 34/34 PDF-Seiten, ${module.length} Lernmodule, ${faelle.length} Originalfälle, ${aoSchemaIds.length} digitale Schemata; Fall 1/2 sichtbar quellengetreu nummeriert und aus Prüfschemata verlinkt.`);