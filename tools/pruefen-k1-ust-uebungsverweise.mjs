import "../src/data/k1-ust-einheit-2-nachtrag-register.js";
import "../src/data/k1-ust-einheit-3-register.js";
import "../src/data/k1-ust-einheit-4-register.js";
import "../src/data/k1-ust-einheit-5-register.js";
import "../src/data/k1-ust-einheit-6-register.js";
import "../src/data/k1-ust-einheit-7-register.js";
import "../src/data/k1-ust-einheit-8-register.js";
import einheit1 from "../src/data/module-vertiefung-m.js";
import einheit2 from "../src/data/module-vertiefung-n.js";
import {
  passendeModuleZuOriginalfall,
  passendeOriginalfaelleZuModul,
} from "../src/data/k1-ust-uebungsverweise.js";

const assert = (bedingung, meldung) => { if (!bedingung) throw new Error(meldung); };
const inhalte = [...einheit1, ...einheit2];
const module = inhalte.filter((inhalt) => inhalt.area !== "Fall");
const faelle = inhalte.filter((inhalt) => inhalt.area === "Fall");
const fallIds = new Set(faelle.map((fall) => Number(fall.id)));
const modulIds = new Set(module.map((modul) => Number(modul.id)));

let links = 0;
for (const modul of module) {
  const passende = passendeOriginalfaelleZuModul(modul, faelle);
  assert(passende.length > 0, `Modul ${modul.id}: kein passender Originalfall.`);
  assert(passende.length <= 5, `Modul ${modul.id}: mehr als fünf Originalfälle ausgegeben.`);
  assert(passende.every((fall) => fallIds.has(Number(fall.id)) && fall.area === "Fall"), `Modul ${modul.id}: ungültiger Originalfall-Link.`);
  assert(new Set(passende.map((fall) => fall.id)).size === passende.length, `Modul ${modul.id}: doppelter Originalfall-Link.`);
  links += passende.length;
}

for (const fall of faelle) {
  const passende = passendeModuleZuOriginalfall(fall, module);
  assert(passende.length <= 4, `Originalfall ${fall.id}: mehr als vier Lernmodule ausgegeben.`);
  assert(passende.every((modul) => modulIds.has(Number(modul.id)) && modul.area !== "Fall"), `Originalfall ${fall.id}: ungültiger Lernmodul-Link.`);
  assert(new Set(passende.map((modul) => modul.id)).size === passende.length, `Originalfall ${fall.id}: doppelter Lernmodul-Link.`);
}

console.log(`K1-USt-Übungsverweise vollständig: ${module.length} Lernmodule mit ${links} priorisierten Originalfall-Links; Rückverweise geprüft.`);
