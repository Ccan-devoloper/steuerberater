const seitenmarker = /^===== PDF-Seite (\d+) =====[ \t]*$/gm;

function entferneLeereRandzeilen(text) {
  const zeilen = String(text || "").replace(/\r\n?/g, "\n").split("\n");
  while (zeilen.length && zeilen[0].trim() === "") zeilen.shift();
  while (zeilen.length && zeilen.at(-1).trim() === "") zeilen.pop();
  return zeilen.join("\n");
}

export function findePdfSeiteFuerTeil(gesamttext, teiltext) {
  const quelle = String(gesamttext || "").replace(/\r\n?/g, "\n");
  const teil = String(teiltext || "");
  const position = quelle.indexOf(teil);
  if (position < 0) return null;

  const matcher = new RegExp(seitenmarker.source, seitenmarker.flags);
  let seite = null;
  let treffer;
  while ((treffer = matcher.exec(quelle)) && treffer.index <= position) {
    seite = Number(treffer[1]);
  }
  return seite;
}

export function teileHausaufgabenSeiten(text, ersteSeite = null) {
  const quelle = String(text || "").replace(/\r\n?/g, "\n");
  if (!quelle.trim()) return [];

  const matcher = new RegExp(seitenmarker.source, seitenmarker.flags);
  const treffer = [...quelle.matchAll(matcher)];
  if (treffer.length === 0) {
    return [{ nummer: ersteSeite, text: entferneLeereRandzeilen(quelle) }];
  }

  const seiten = [];
  const vorspann = entferneLeereRandzeilen(quelle.slice(0, treffer[0].index));
  if (vorspann) seiten.push({ nummer: ersteSeite, text: vorspann });

  treffer.forEach((marke, index) => {
    let start = marke.index + marke[0].length;
    if (quelle[start] === "\n") start += 1;
    const ende = treffer[index + 1]?.index ?? quelle.length;
    const seitentext = entferneLeereRandzeilen(quelle.slice(start, ende));
    if (seitentext) seiten.push({ nummer: Number(marke[1]), text: seitentext });
  });

  return seiten;
}
