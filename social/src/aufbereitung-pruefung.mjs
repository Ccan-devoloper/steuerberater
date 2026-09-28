/* ==========================================================================
   Quellenregel-Prüfung einer Aufbereitung (social/aufbereitung/*.json).

   Zwei Stufen:
   1. Dieselbe Prüfung wie jeder Beitrag (pruefeBeitrag): kein Lauf von acht
      Wörtern aus irgendeiner Datei in src/data, keine Quellüberschriften,
      keine Gliederung, keine Verfasser, keine Merkhilfen, keine Fallnamen.
   2. Strenger gegen den eigenen Quellabschnitt: Schon sechs aufeinander-
      folgende gleiche Wörter gelten als wiedererkennbar. Normzitate zählen
      nicht mit, sie sind Gesetzeswortlaut.
   ========================================================================== */

import { pruefeBeitrag } from "./pruefung.mjs";
import { skriptAbschnitte } from "./skripte.mjs";

export const NAEHE_WOERTER = 6;

const FORMAL = /^(?:Folie|Folienzahl|Caption|Zu viele Hashtags|Story|Nur eine CTA|Die CTA)/;

const ohneNormen = (s) => String(s || "")
  .replace(/(?:§§?|Art\.)\s*[\d\w]+(?:\s+(?:Abs\.|Satz|S\.|Nr\.|Buchst\.|lit\.)\s*[\d\w]+)*(?:\s+[A-ZÄÖÜ][A-Za-zÄÖÜäöü]*(?:G|V|StG|DV|R|AE|O))?/g, " ");

const worte = (s) => ohneNormen(s).toLowerCase().replace(/[^a-zäöüß0-9]+/g, " ").trim().split(" ").filter(Boolean);

function laeufe(text, quelle, n = NAEHE_WOERTER) {
  const q = worte(quelle);
  const set = new Set();
  for (let i = 0; i + n <= q.length; i++) set.add(q.slice(i, i + n).join(" "));
  const w = worte(text);
  const treffer = [];
  for (let i = 0; i + n <= w.length; i++) {
    const s = w.slice(i, i + n).join(" ");
    if (set.has(s)) { treffer.push(s); i += n - 1; }
  }
  return treffer;
}

export function aufbereitungTexte(e) {
  return [
    e.titel, ...(e.einordnung || []), ...(e.lernziele || []), ...(e.pruefschritte || []),
    ...(e.fehler || []), e.merksatz,
  ].filter((x) => typeof x === "string" && x.trim());
}

export function aufbereitungPruefen(e) {
  const fehler = [];
  const beitrag = {
    folien: [
      { art: "titel", titel: e.titel },
      { art: "text", titel: "Einordnung", punkte: [...(e.einordnung || []), ...(e.lernziele || [])] },
      { art: "schritte", titel: "Prüfung", schritte: e.pruefschritte || [] },
      ...(e.fehler?.length ? [{ art: "text", titel: "Typische Fehler", punkte: e.fehler }] : []),
      ...(e.merksatz ? [{ art: "merke", titel: "Merke", text: e.merksatz }] : []),
      { art: "cta", titel: "" },
    ],
  };
  fehler.push(...pruefeBeitrag(beitrag).fehler.filter((f) => !FORMAL.test(f)));

  const quelle = skriptAbschnitte().get(e.quelle)?.abschnitt;
  if (quelle) {
    const quelltext = [quelle.title, quelle.thema, ...(quelle.bloecke || []).map((b) =>
      [b.text, ...(b.spalten || []), ...(b.zeilen || []).flat()].filter(Boolean).join(" "))].join(" ");
    const nah = laeufe(aufbereitungTexte(e).join(" "), quelltext);
    if (nah.length) fehler.push(`Zu nah am Quellabschnitt (${NAEHE_WOERTER}+ gleiche Wörter in Folge, neu formulieren): ${nah.slice(0, 3).map((x) => `„${x}“`).join(" · ")}`);
  }
  return fehler;
}
