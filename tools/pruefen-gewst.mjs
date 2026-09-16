/* Prüft die GewSt-Bestände (Struktur, Tabellen, Wasserzeichen).

   Geprüft werden Pflichtfelder, Blockstruktur und Tabellenbreiten – für die
   Hausaufgaben wie für die Übungsfälle der Fallsammlung. Zusätzlich wird
   geprüft, dass jeder Eintrag einem Fachtermin und einem Verfasser zugeordnet
   ist.

   Das Kurzskript hat eine eigene Form (Kapitel mit einer Blockliste statt
   Sachverhalt/Aufgabe/Lösung) und wird deshalb hier gesondert geprüft:
   Pflichtfelder, lückenlose Kapitelnummern, Blockstruktur, Tabellenbreiten und
   das personenbezogene Wasserzeichen aus dem Quell-PDF.

   Aufruf: node tools/pruefen-gewst.mjs */
import { gewstHausaufgaben, gewstHausaufgabenQuelle } from "../src/data/gewst-hausaufgaben.js";
import { gewstUebungsfaelle, gewstUebungsfaelleQuelle } from "../src/data/gewst-uebungsfaelle.js";
import { gewstKurzskript, gewstKurzskriptQuelle } from "../src/data/gewst-kurzskript.js";
import { pruefeHausaufgaben } from "./pruefen-hausaufgaben-bloecke.mjs";

pruefeHausaufgaben({
  name: "GewSt-Hausaufgaben",
  quelle: gewstHausaufgabenQuelle,
  hausaufgaben: gewstHausaufgaben,
  pflichtfelder: ["termin", "verfasser"],
});

pruefeHausaufgaben({
  name: "GewSt-Übungsfälle",
  quelle: gewstUebungsfaelleQuelle,
  hausaufgaben: gewstUebungsfaelle,
  pflichtfelder: ["termin", "verfasser"],
  einheit: "Übungsfälle",
});

/* Das Kurzskript kennt nur die Blockliste je Kapitel. */
function pruefeKurzskript({ name, quelle, kapitel }) {
  const fehler = [];
  const meldung = (id, text) => fehler.push(`${id}: ${text}`);
  const BLOCKTYPEN = new Set([undefined, "titel", "tabelle"]);

  if (!quelle?.didaktik?.length) meldung("Quelle", "didaktischer Hinweis fehlt");

  const ids = new Set();
  kapitel.forEach((k, index) => {
    const id = k.id ?? "(ohne id)";
    if (ids.has(id)) meldung(id, "doppelte id");
    ids.add(id);

    for (const feld of ["kapitel", "title", "thema", "rechtsstand", "quelle", "verfasser"]) {
      if (k[feld] === undefined || k[feld] === null || k[feld] === "") meldung(id, `Feld ${feld} fehlt`);
    }
    if (!k.normen?.length) meldung(id, "keine Normen angegeben");
    if (String(k.kapitel) !== String(index + 1)) {
      meldung(id, `Kapitelnummer ${k.kapitel} passt nicht zur Reihenfolge (erwartet ${index + 1})`);
    }

    if (!k.bloecke?.length) { meldung(id, "bloecke ist leer"); return; }
    k.bloecke.forEach((block, i) => {
      const ort = `bloecke[${i}]`;
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
      if (typeof block.text === "string" && /Persönliches PDF für/i.test(block.text)) {
        meldung(id, `${ort}: personenbezogenes Wasserzeichen aus der Quelle übernommen`);
      }
    });
  });

  if (fehler.length) {
    console.error(`${name}: ${fehler.length} Fehler`);
    fehler.forEach((f) => console.error(` - ${f}`));
    process.exit(1);
  }

  const bloecke = kapitel.reduce((n, k) => n + k.bloecke.length, 0);
  const tabellen = kapitel.reduce((n, k) => n + k.bloecke.filter((b) => b.typ === "tabelle").length, 0);
  console.log(`${name} in Ordnung: ${kapitel.length} Kapitel, ${bloecke} Blöcke, ${tabellen} Tabellen.`);
}

pruefeKurzskript({
  name: "GewSt-Kurzskript",
  quelle: gewstKurzskriptQuelle,
  kapitel: gewstKurzskript,
});
