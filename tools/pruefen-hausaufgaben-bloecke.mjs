/* Gemeinsame Prüfung für blockbasierte Hausaufgaben-Datensätze
   (IStR-Bauart: text | titel | tabelle, jeweils optional mit punkte).

   Wird von pruefen-k3-persg-hausaufgaben.mjs und
   pruefen-k1-erbst-hausaufgaben.mjs benutzt. Prüft Pflichtfelder,
   Blockstruktur, Tabellenbreiten, Wasserzeichen aus den Quell-PDFs und - nur
   wenn die Quelle Randpunkte ausweist - die Punktsumme der Lösung. */

const BLOCKTYPEN = new Set([undefined, "titel", "tabelle"]);

export function pruefeHausaufgaben({ name, quelle, hausaufgaben, pflichtfelder = [] }) {
  const fehler = [];
  const meldung = (id, text) => fehler.push(`${id}: ${text}`);

  if (!quelle?.didaktik?.length) meldung("Quelle", "didaktischer Hinweis fehlt");

  const ids = new Set();
  for (const ha of hausaufgaben) {
    const id = ha.id ?? "(ohne id)";
    if (ids.has(id)) meldung(id, "doppelte id");
    ids.add(id);

    for (const feld of ["title", "thema", "rechtsstand", "quelle", ...pflichtfelder]) {
      if (ha[feld] === undefined || ha[feld] === null || ha[feld] === "") meldung(id, `Feld ${feld} fehlt`);
    }
    if (!ha.normen?.length) meldung(id, "keine Normen angegeben");

    for (const [abschnitt, bloecke] of [["sachverhalt", ha.sachverhalt], ["aufgabe", ha.aufgabe], ["loesung", ha.loesung]]) {
      if (!bloecke?.length) { meldung(id, `${abschnitt} ist leer`); continue; }
      bloecke.forEach((block, i) => {
        const ort = `${abschnitt}[${i}]`;
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

    /* Randpunkte gibt es nur, wo die Musterlösung sie ausweist. Wo es sie gibt,
       muss die Summe zur ausgewiesenen Gesamtpunktzahl passen. */
    const summe = ha.loesung?.reduce((n, b) => n + (b.punkte || 0), 0) ?? 0;
    if (summe > 0 && Math.abs(summe - ha.punkte) > 0.001) {
      meldung(id, `Punktsumme der Lösung ${summe} weicht von der ausgewiesenen Gesamtpunktzahl ${ha.punkte} ab`);
    }
    if (ha.punkte !== undefined && summe === 0) {
      meldung(id, "Gesamtpunktzahl angegeben, aber kein Block trägt Randpunkte");
    }
  }

  if (fehler.length) {
    console.error(`${name}: ${fehler.length} Fehler`);
    fehler.forEach((f) => console.error(` - ${f}`));
    process.exit(1);
  }

  const bloecke = hausaufgaben.reduce((n, ha) => n + ha.sachverhalt.length + ha.aufgabe.length + ha.loesung.length, 0);
  const tabellen = hausaufgaben.reduce(
    (n, ha) => n + [...ha.sachverhalt, ...ha.aufgabe, ...ha.loesung].filter((b) => b.typ === "tabelle").length, 0,
  );
  const punkte = hausaufgaben.reduce((n, ha) => n + (ha.punkte || 0), 0);
  const punkteText = punkte ? `, ${punkte} Punkte` : "";
  console.log(`${name} in Ordnung: ${hausaufgaben.length} Hausaufgaben, ${bloecke} Blöcke, ${tabellen} Tabellen${punkteText}.`);
}
