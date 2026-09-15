/* Prüft die PersG-Hausaufgaben: Struktur der Blöcke, Tabellenbreiten und die
   Punktsumme gegen die in der Quelle ausgewiesene Gesamtpunktzahl.

   Aufruf: node tools/pruefen-k3-persg-hausaufgaben.mjs */
import { persgHausaufgaben, persgHausaufgabenQuelle } from "../src/data/k3-persg-hausaufgaben.js";

const fehler = [];
const meldung = (id, text) => fehler.push(`${id}: ${text}`);
const BLOCKTYPEN = new Set([undefined, "titel", "tabelle"]);

if (!persgHausaufgabenQuelle.didaktik?.length) meldung("Quelle", "didaktischer Hinweis fehlt");

const ids = new Set();
for (const ha of persgHausaufgaben) {
  const id = ha.id ?? "(ohne id)";
  if (ids.has(id)) meldung(id, "doppelte id");
  ids.add(id);

  for (const feld of ["termin", "title", "thema", "punkte", "rechtsstand", "quelle"]) {
    if (ha[feld] === undefined || ha[feld] === null || ha[feld] === "") meldung(id, `Feld ${feld} fehlt`);
  }
  if (!ha.normen?.length) meldung(id, "keine Normen angegeben");

  for (const [name, bloecke] of [["sachverhalt", ha.sachverhalt], ["aufgabe", ha.aufgabe], ["loesung", ha.loesung]]) {
    if (!bloecke?.length) { meldung(id, `${name} ist leer`); continue; }
    bloecke.forEach((block, i) => {
      const ort = `${name}[${i}]`;
      if (!BLOCKTYPEN.has(block.typ)) meldung(id, `${ort}: unbekannter Blocktyp ${block.typ}`);
      if (block.typ === "tabelle") {
        if (!block.spalten?.length) meldung(id, `${ort}: Tabelle ohne Spalten`);
        if (!block.zeilen?.length) meldung(id, `${ort}: Tabelle ohne Zeilen`);
        block.zeilen?.forEach((zeile, z) => {
          if (zeile.length !== block.spalten.length) {
            meldung(id, `${ort}: Zeile ${z} hat ${zeile.length} Zellen, Kopf hat ${block.spalten.length}`);
          }
        });
      } else if (!block.text?.trim()) {
        meldung(id, `${ort}: leerer Text`);
      }
      if (block.punkte !== undefined && !(block.punkte > 0)) meldung(id, `${ort}: ungültige Punktzahl`);
      if (typeof block.text === "string" && /Persönliches PDF für/i.test(block.text)) {
        meldung(id, `${ort}: personenbezogenes Wasserzeichen aus der Quelle übernommen`);
      }
    });
  }

  const summe = ha.loesung.reduce((n, b) => n + (b.punkte || 0), 0);
  if (Math.abs(summe - ha.punkte) > 0.001) {
    meldung(id, `Punktsumme der Lösung ${summe} weicht von der ausgewiesenen Gesamtpunktzahl ${ha.punkte} ab`);
  }
}

if (fehler.length) {
  console.error(`PersG-Hausaufgaben: ${fehler.length} Fehler`);
  fehler.forEach((f) => console.error(` - ${f}`));
  process.exit(1);
}

const punkte = persgHausaufgaben.reduce((n, ha) => n + ha.punkte, 0);
const bloecke = persgHausaufgaben.reduce((n, ha) => n + ha.sachverhalt.length + ha.aufgabe.length + ha.loesung.length, 0);
console.log(`PersG-Hausaufgaben in Ordnung: ${persgHausaufgaben.length} Hausaufgaben, ${bloecke} Blöcke, ${punkte} Punkte.`);
