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
  k1UstGruppieren,
  k1UstOberthemaId,
  k1UstOberthemen,
} from "../src/data/k1-ust-themen.js";

const assert = (bedingung, meldung) => {
  if (!bedingung) throw new Error(meldung);
};

const inhalte = [...einheit1, ...einheit2];
const module = inhalte.filter((inhalt) => inhalt.area !== "Fall");
const ids = module.map((modul) => modul.id);

assert(k1UstOberthemen.length === 9, `Erwartet 9 Oberthemen, gefunden ${k1UstOberthemen.length}.`);
assert(new Set(k1UstOberthemen.map((thema) => thema.id)).size === k1UstOberthemen.length, "Oberthemen-IDs sind nicht eindeutig.");
assert(new Set(ids).size === ids.length, "Lernmodul-IDs sind nicht eindeutig.");

const erlaubteThemen = new Set(k1UstOberthemen.map((thema) => thema.id));
for (const modul of module) {
  const themaId = k1UstOberthemaId(modul);
  assert(themaId, `Modul ${modul.id}: kein Oberthema ermittelt.`);
  assert(erlaubteThemen.has(themaId), `Modul ${modul.id}: unbekanntes Oberthema ${themaId}.`);
}

const gruppen = k1UstGruppieren(module);
const gruppierteIds = gruppen.flatMap((gruppe) => gruppe.module.map((modul) => modul.id));
assert(gruppierteIds.length === module.length, `Gruppierung enthält ${gruppierteIds.length} statt ${module.length} Lernmodule.`);
assert(new Set(gruppierteIds).size === gruppierteIds.length, "Mindestens ein Lernmodul erscheint in mehreren Oberthemen.");
assert(ids.every((id) => gruppierteIds.includes(id)), "Mindestens ein Lernmodul fehlt in der Oberthemen-Gruppierung.");

const statistik = gruppen.map((gruppe) => `${gruppe.label}: ${gruppe.module.length}`).join(" | ");
console.log(`K1-USt-Oberthemen vollständig: ${module.length} Lernmodule in 9 eindeutigen Oberthemen. ${statistik}`);
