/* Prüft die AO-Keyfacts: Pflichtfelder, Abschnittsstruktur, Wasserzeichen und
   dass jeder Abschnitt entweder Stichpunkte oder nummerierte Unterabschnitte
   trägt (und nicht beides leer lässt).

   Aufruf: node tools/pruefen-k1-ao-keyfacts.mjs */
import { aoKeyfacts, aoKeyfactsQuelle } from "../src/data/k1-ao-keyfacts.js";

const fehler = [];
const meldung = (id, text) => fehler.push(`${id}: ${text}`);
const wasserzeichen = /Persönliches PDF für/i;

if (!aoKeyfactsQuelle.autor) meldung("Quelle", "Autor fehlt");
if (!aoKeyfactsQuelle.hinweis) meldung("Quelle", "Einordnender Hinweis fehlt");

const ids = new Set();
for (const blatt of aoKeyfacts) {
  const id = blatt.id ?? "(ohne id)";
  if (ids.has(id)) meldung(id, "doppelte id");
  ids.add(id);

  for (const feld of ["titel", "datei"]) {
    if (!blatt[feld]) meldung(id, `Feld ${feld} fehlt`);
  }
  if (!blatt.themen?.length) meldung(id, "keine Themen angegeben");
  if (!blatt.normen?.length) meldung(id, "keine Normen angegeben");
  if (!blatt.abschnitte?.length) { meldung(id, "keine Abschnitte"); continue; }

  const titel = new Set();
  blatt.abschnitte.forEach((abschnitt, i) => {
    const ort = `abschnitte[${i}]`;
    if (!abschnitt.titel) meldung(id, `${ort}: Titel fehlt`);
    if (titel.has(abschnitt.titel)) meldung(id, `${ort}: doppelter Abschnittstitel ${abschnitt.titel}`);
    titel.add(abschnitt.titel);

    const punkte = abschnitt.punkte || [];
    const schritte = abschnitt.schritte || [];
    if (punkte.length === 0 && schritte.length === 0) meldung(id, `${ort}: weder Stichpunkte noch Unterabschnitte`);
    punkte.forEach((p, j) => {
      if (!p?.trim()) meldung(id, `${ort}.punkte[${j}]: leer`);
      if (wasserzeichen.test(p)) meldung(id, `${ort}.punkte[${j}]: Wasserzeichen aus der Quelle übernommen`);
    });
    schritte.forEach((schritt, j) => {
      if (!schritt.titel) meldung(id, `${ort}.schritte[${j}]: Titel fehlt`);
      if (!schritt.punkte?.length) meldung(id, `${ort}.schritte[${j}]: keine Stichpunkte`);
      (schritt.punkte || []).forEach((p, k) => {
        if (!p?.trim()) meldung(id, `${ort}.schritte[${j}].punkte[${k}]: leer`);
        if (wasserzeichen.test(p)) meldung(id, `${ort}.schritte[${j}].punkte[${k}]: Wasserzeichen`);
      });
    });
    if (abschnitt.hinweis && wasserzeichen.test(abschnitt.hinweis)) meldung(id, `${ort}.hinweis: Wasserzeichen`);
  });
}

if (fehler.length) {
  console.error(`AO-Keyfacts: ${fehler.length} Fehler`);
  fehler.forEach((f) => console.error(` - ${f}`));
  process.exit(1);
}

const abschnitte = aoKeyfacts.reduce((n, b) => n + b.abschnitte.length, 0);
const punkte = aoKeyfacts.reduce((n, b) => n + b.abschnitte.reduce(
  (m, a) => m + (a.punkte?.length || 0) + (a.schritte || []).reduce((k, s) => k + s.punkte.length, 0), 0), 0);
console.log(`AO-Keyfacts in Ordnung: ${aoKeyfacts.length} Blätter, ${abschnitte} Abschnitte, ${punkte} Stichpunkte.`);
