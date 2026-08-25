/* Trennt Aufgabe und Lösung einer UmwStR-Hausaufgabe.

   Alle drei Quellen sind fortlaufend paginiert und leiten die Lösung mit der
   Überschrift "Lösungshinweise" ein. Die Seitenzahl ist hier die verlässlichere
   Trennstelle: Die Überschrift taucht im Lauftext erneut auf, die Seitenmarke
   dagegen genau einmal. Die Werte stammen aus den Quell-PDFs und werden von
   tools/pruefen-k3-umwstr-hausaufgaben.mjs gegengeprüft. */

export const loesungsseiten = {
  1: 10,
  2: 8,
  3: 8,
};

export function teileUmwStRHausaufgabe(termin, text) {
  if (typeof text !== "string" || text.length === 0) return { aufgabe: "", loesung: "" };

  const seite = loesungsseiten[Number(termin)];
  const trennstelle = seite ? text.indexOf(`===== PDF-Seite ${seite} =====`) : -1;
  if (trennstelle <= 0) return { aufgabe: text.trim(), loesung: "" };

  return {
    aufgabe: text.slice(0, trennstelle).trim(),
    loesung: text.slice(trennstelle).trim(),
  };
}

export default teileUmwStRHausaufgabe;
