import { k1UstHausaufgaben } from "../src/data/k1-ust-hausaufgaben.js";

const assert = (bedingung, meldung) => { if (!bedingung) throw new Error(meldung); };
const erwarteteSeiten = [11, 8, 8, 5, 6, 5, 3];
const erwarteteFaelle = [4, 2, 3, 2, 3, 1, 1];

assert(k1UstHausaufgaben.length === 7, `Erwartet 7 Fachtermine, gefunden ${k1UstHausaufgaben.length}.`);

const alleFaelle = [];
k1UstHausaufgaben.forEach((termin, index) => {
  const fachtermin = index + 1;
  assert(termin.fachtermin === fachtermin, `Fachtermin-Reihenfolge fehlerhaft bei ${fachtermin}.`);
  assert(termin.seiten === erwarteteSeiten[index], `Fachtermin ${fachtermin}: ${termin.seiten} statt ${erwarteteSeiten[index]} Seiten.`);
  assert(termin.faelle.length === erwarteteFaelle[index], `Fachtermin ${fachtermin}: ${termin.faelle.length} statt ${erwarteteFaelle[index]} Fälle.`);
  assert(termin.rechtsstand === "2025", `Fachtermin ${fachtermin}: Rechtsstand fehlt/abweichend.`);
  assert(termin.quelle && termin.quellentitel, `Fachtermin ${fachtermin}: Quellenangabe fehlt.`);

  termin.faelle.forEach((fall) => {
    assert(fall.id && fall.titel && fall.seiten, `Fachtermin ${fachtermin}: Fall-Metadaten unvollständig.`);
    assert(Array.isArray(fall.aufgabe) && fall.aufgabe.length > 0, `${fall.id}: Aufgabeninhalt fehlt.`);
    assert(Array.isArray(fall.loesung) && fall.loesung.length > 0, `${fall.id}: Lösung fehlt.`);
    assert(Array.isArray(fall.normen) && fall.normen.length > 0, `${fall.id}: Normen fehlen.`);
    assert(Array.isArray(fall.querverweise) && fall.querverweise.length > 0, `${fall.id}: Querverweise fehlen.`);
    fall.loesung.forEach((block) => assert(block.titel && Array.isArray(block.texte) && block.texte.length > 0, `${fall.id}: Lösungsblock unvollständig.`));
    alleFaelle.push(fall);
  });
});

assert(k1UstHausaufgaben.reduce((summe, termin) => summe + termin.seiten, 0) === 46, "Gesamtseitenzahl muss 46 betragen.");
assert(alleFaelle.length === 16, `Erwartet 16 Hausaufgabenfälle, gefunden ${alleFaelle.length}.`);
assert(new Set(alleFaelle.map((fall) => fall.id)).size === alleFaelle.length, "Hausaufgaben-IDs sind nicht eindeutig.");
assert(alleFaelle.reduce((summe, fall) => summe + fall.querverweise.length, 0) === 52, "Erwartet 52 K1-Querverweise.");

const byId = new Map(alleFaelle.map((fall) => [fall.id, fall]));
assert(byId.get("H1-4")?.aufgabe.length >= 29, "H1-4 muss alle Dienstleistungsort-Unterfälle einschließlich Nr. 22 enthalten.");
assert(byId.get("H2-1")?.loesung?.[0]?.texte?.some((text) => text.includes("65,78")), "H2-1: Rechentabelle Fall 1 nicht vollständig.");
assert(byId.get("H6-1")?.loesung.flatMap((block) => block.texte).some((text) => text.includes("10.625")), "H6-1: §15a-Gebäudekorrektur 10.625 € fehlt.");
assert(byId.get("H6-1")?.loesung.flatMap((block) => block.texte).some((text) => text.includes("2.976")), "H6-1: Fensterkorrektur 2.976 € fehlt.");
assert(byId.get("H7-1")?.loesung.flatMap((block) => block.texte).some((text) => text.includes("2.850")), "H7-1: Erwerbsteuer 2.850 € fehlt.");
assert(byId.get("H7-1")?.loesung.flatMap((block) => block.texte).some((text) => text.includes("475")), "H7-1: §13b-Steuer 475 € fehlt.");

console.log("K1-USt-Hausaufgaben vollständig: 7 Fachtermine, 46 PDF-Seiten, 16 Fälle, 52 Querverweise.");
