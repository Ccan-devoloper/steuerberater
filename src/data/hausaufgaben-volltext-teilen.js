/* Die ersten fünf Fachtermine und Termin 9 kennzeichnen den Beginn der Lösung
   mit einer eigenen Überschrift. Bei den Terminen 6–8 stammen Aufgabe und
   Lösung dagegen aus einem fortlaufend paginierten Dokument; dort ist der
   Seitenwechsel die verlässliche Trennstelle. */
const loesungsseiten = {
  6: 5,
  7: 4,
  8: 10,
};

/* PDF-Textzeilen können eingerückt sein. Deshalb werden vor und nach der
   Überschrift nur horizontale Leerzeichen zugelassen; Zeilenumbrüche gehören
   ausdrücklich nicht zum Treffer. */
const loesungsueberschrift = /(?:^|\n)[ \t]*(?:LÖSUNGSHINWEIS|Lösung(?:sskizze)?(?:[ \t]+zur[ \t]+[^\r\n]+)?|Musterlösung|Lösungen?)[ \t]*:?[ \t]*(?=\r?\n|$)/im;

export function teileHausaufgabenVolltext(termin, text) {
  if (typeof text !== "string" || text.length === 0) return { aufgabe: "", loesung: "" };

  let trennstelle = -1;
  const loesungsseite = loesungsseiten[Number(termin)];
  if (loesungsseite) {
    trennstelle = text.indexOf(`===== PDF-Seite ${loesungsseite} =====`);
  }

  if (trennstelle < 0) {
    const treffer = loesungsueberschrift.exec(text);
    if (treffer) trennstelle = treffer.index + (treffer[0].startsWith("\n") ? 1 : 0);
  }

  if (trennstelle <= 0) return { aufgabe: text.trim(), loesung: "" };

  return {
    aufgabe: text.slice(0, trennstelle).trim(),
    loesung: text.slice(trennstelle).trim(),
  };
}

export default teileHausaufgabenVolltext;
