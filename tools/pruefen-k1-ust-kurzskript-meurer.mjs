import "../src/data/k1-ust-einheit-8-register.js";
import einheit1 from "../src/data/module-vertiefung-m.js";
import einheit2 from "../src/data/module-vertiefung-n.js";
import {
  MEURER_KURZSKRIPT_META,
  meurerKurzskriptBloecke,
  meurerNeueLernmodule,
} from "../src/data/k1-ust-kurzskript-meurer.js";

const assert = (bedingung, meldung) => {
  if (!bedingung) throw new Error(meldung);
};

const inhalte = [...einheit1, ...einheit2];
const module = inhalte.filter((inhalt) => inhalt.area !== "Fall");
const faelle = inhalte.filter((inhalt) => inhalt.area === "Fall");
const modulIds = new Set(module.map((modul) => Number(modul.id)));
const fallIds = new Set(faelle.map((fall) => Number(fall.id)));

assert(MEURER_KURZSKRIPT_META.pdfSeiten === 124, "Meurer-Kurzskript: erwartet werden 124 PDF-Seiten.");
assert(MEURER_KURZSKRIPT_META.redaktion[0] === 1 && MEURER_KURZSKRIPT_META.redaktion[1] === 6, "Redaktionelle Seiten 1–6 fehlen im Nachweis.");

const deckung = Array.from({ length: MEURER_KURZSKRIPT_META.pdfSeiten + 1 }, () => 0);
for (let seite = MEURER_KURZSKRIPT_META.redaktion[0]; seite <= MEURER_KURZSKRIPT_META.redaktion[1]; seite += 1) deckung[seite] += 1;

for (const block of meurerKurzskriptBloecke) {
  const [von, bis] = block.pdf;
  assert(Number.isInteger(von) && Number.isInteger(bis) && von >= 7 && bis <= 124 && von <= bis, `${block.id}: ungültiger PDF-Seitenbereich.`);
  assert(block.skript[0] === von - 1 && block.skript[1] === bis - 1, `${block.id}: PDF-/Skript-Seitenzählung stimmt nicht überein.`);
  assert(modulIds.has(Number(block.zielId)), `${block.id}: Ziel ${block.zielId} ist kein vorhandenes Lernmodul.`);
  assert(!fallIds.has(Number(block.zielId)), `${block.id}: Ziel ${block.zielId} verweist fälschlich auf einen Originalfall.`);
  assert(block.kernaussagen.length > 0, `${block.id}: keine fachlichen Kernaussagen.`);
  assert(block.klausur.length > 0, `${block.id}: keine Klausurtechnik hinterlegt.`);
  for (let seite = von; seite <= bis; seite += 1) deckung[seite] += 1;
}

for (let seite = 1; seite <= 124; seite += 1) {
  assert(deckung[seite] === 1, `PDF-Seite ${seite}: Deckung ${deckung[seite]} statt genau 1.`);
}

const teile = new Set(meurerKurzskriptBloecke.map((block) => block.teil));
for (const teil of ["Teil A", "Teil B", "Teil C", "Teil D", "Teil E", "Teil F"]) {
  assert(teile.has(teil), `${teil} fehlt in der Kurzskript-Integration.`);
}

const neueIds = meurerNeueLernmodule.map((modul) => Number(modul.id));
assert(new Set(neueIds).size === neueIds.length, "Neue Meurer-Lernmodule enthalten doppelte IDs.");
for (const modul of meurerNeueLernmodule) {
  assert(modulIds.has(Number(modul.id)), `Neues Lernmodul ${modul.id} wurde nicht registriert.`);
  assert(meurerKurzskriptBloecke.some((block) => Number(block.zielId) === Number(modul.id)), `Neues Lernmodul ${modul.id} hat keine Kurzskript-Seitenzuordnung.`);
  assert(modul.einheit === "Kurzskript", `Neues Lernmodul ${modul.id}: Quellenkennzeichnung fehlt.`);
}

const fachseiten = meurerKurzskriptBloecke.reduce((summe, block) => summe + block.pdf[1] - block.pdf[0] + 1, 0);
assert(fachseiten === 118, `Erwartet 118 fachliche PDF-Seiten (7–124), gefunden ${fachseiten}.`);

const zielStatistik = new Map();
for (const block of meurerKurzskriptBloecke) {
  zielStatistik.set(block.zielId, (zielStatistik.get(block.zielId) || 0) + 1);
}

console.log(
  `Meurer-USt-Kurzskript vollständig: 124/124 PDF-Seiten erfasst, ${meurerKurzskriptBloecke.length} fachliche Blöcke, ` +
  `${meurerNeueLernmodule.length} neue Unterthemen, ${zielStatistik.size} Lernmodule mit Kurzskript-Vertiefung.`,
);
