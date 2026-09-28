/* Gemeinsame Prüfung für blockbasierte Kurzskript-Datensätze.

   Ein Skript hat keine Sachverhalt/Aufgabe/Lösung-Dreiteilung wie die
   Hausaufgaben, sondern Kapitel mit einer Blockliste (text | titel | tabelle).
   Geprüft werden Pflichtfelder, Blockstruktur, Tabellenbreiten und das
   personenbezogene Wasserzeichen aus den Quell-PDFs.

   `reihenfolge: true` verlangt zusätzlich lückenlos aufsteigende
   Kapitelnummern (1, 2, 3 …). Bei mehrteiligen Skripten, deren Nummerierung je
   Teil neu beginnt, wird stattdessen geprüft, dass die Kapitel eines Teils
   zusammenhängen und innerhalb des Teils lückenlos durchnummeriert sind. */

const BLOCKTYPEN = new Set([undefined, "titel", "tabelle"]);

export function pruefeKurzskript({ name, quelle, kapitel, pflichtfelder = [], reihenfolge = true }) {
  const fehler = [];
  const meldung = (id, text) => fehler.push(`${id}: ${text}`);

  if (!quelle?.didaktik?.length) meldung("Quelle", "didaktischer Hinweis fehlt");

  const ids = new Set();
  kapitel.forEach((k) => {
    const id = k.id ?? "(ohne id)";
    if (ids.has(id)) meldung(id, "doppelte id");
    ids.add(id);

    for (const feld of ["kapitel", "title", "thema", "rechtsstand", "quelle", "verfasser", ...pflichtfelder]) {
      if (k[feld] === undefined || k[feld] === null || k[feld] === "") meldung(id, `Feld ${feld} fehlt`);
    }
    if (!k.normen?.length) meldung(id, "keine Normen angegeben");

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

  if (reihenfolge) {
    /* Einteilige Skripte: eine durchlaufende Nummernfolge. Mehrteilige: je Teil
       eine eigene, und die Kapitel eines Teils müssen zusammenstehen. */
    const mehrteilig = kapitel.some((k) => k.teil !== undefined);
    if (!mehrteilig) {
      kapitel.forEach((k, i) => {
        if (String(k.kapitel) !== String(i + 1)) {
          meldung(k.id, `Kapitelnummer ${k.kapitel} passt nicht zur Reihenfolge (erwartet ${i + 1})`);
        }
      });
    } else {
      const gesehen = new Set();
      let aktuell = null;
      let zaehler = 0;
      kapitel.forEach((k) => {
        if (k.teil !== aktuell) {
          if (gesehen.has(k.teil)) meldung(k.id, `Teil ${k.teil} steht nicht zusammenhängend`);
          gesehen.add(k.teil);
          aktuell = k.teil;
          zaehler = 0;
        }
        zaehler += 1;
        if (String(k.kapitel) !== String(zaehler)) {
          meldung(k.id, `Kapitelnummer ${k.kapitel} passt nicht zur Reihenfolge im Teil (erwartet ${zaehler})`);
        }
      });
    }
  }

  if (fehler.length) {
    console.error(`${name}: ${fehler.length} Fehler`);
    fehler.forEach((f) => console.error(` - ${f}`));
    process.exit(1);
  }

  const bloecke = kapitel.reduce((n, k) => n + k.bloecke.length, 0);
  const tabellen = kapitel.reduce((n, k) => n + k.bloecke.filter((b) => b.typ === "tabelle").length, 0);
  const teile = new Set(kapitel.map((k) => k.teil).filter((t) => t !== undefined));
  const teilText = teile.size ? `${teile.size} Teile, ` : "";
  console.log(`${name} in Ordnung: ${teilText}${kapitel.length} Kapitel, ${bloecke} Blöcke, ${tabellen} Tabellen.`);
}
