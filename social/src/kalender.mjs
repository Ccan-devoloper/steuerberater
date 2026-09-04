/* ==========================================================================
   Saisonkalender des Steuerberaterexamens.

   Liefert für ein Datum die anstehenden Anlässe (Prüfungstage, Fristen,
   Countdown-Meilensteine). Der Planer ersetzt an Anlasstagen den ersten
   Beitrag durch das Format „anlass“ und gibt dem Autor den Kontext mit.
   Termine: schriftliche Prüfung bundeseinheitlich Anfang Oktober (Konfig),
   Anmeldeschluss 30. April, Ergebnisse meist Januar/Februar, mündliche
   Prüfungen Januar bis April.
   ========================================================================== */

import { CONFIG } from "./config.mjs";
import { tageBis } from "./zeit.mjs";

function iso(jahr, monat, tag) { return `${jahr}-${String(monat).padStart(2, "0")}-${String(tag).padStart(2, "0")}`; }

/* Alle Anlässe eines Jahres rund um einen Prüfungstermin. */
export function anlaesse(datum = new Date().toISOString().slice(0, 10)) {
  const jahr = Number(datum.slice(0, 4));
  const [pj, pm, pt] = CONFIG.examen.schriftlich.split("-").map(Number);
  const [, , et] = CONFIG.examen.ende.split("-").map(Number);
  const pruefung = { jahr: pj, tag1: iso(pj, pm, pt), tag2: iso(pj, pm, pt + 1), tag3: iso(pj, pm, et) };
  const liste = [
    { datum: iso(jahr, 4, 30), art: "frist", titel: "Anmeldeschluss zur Steuerberaterprüfung", kontext: "Heute endet die Anmeldefrist (30. April) für die Prüfung im Herbst. Wer sich anmeldet, hat ab jetzt einen festen Plan nötig." },
    { datum: iso(jahr, 5, 1), art: "auftakt", titel: "Fünf Monate bis zum Examen", kontext: "Nach dem Anmeldeschluss beginnt die heiße Phase: fünf Monate, drei Klausuren, ein Lernplan." },
    { datum: iso(jahr, 1, 15), art: "muendlich", titel: "Vorbereitung auf die mündliche Prüfung", kontext: "Die Ergebnisse der schriftlichen Prüfung kommen in diesen Wochen; wer bestanden hat, bereitet sich jetzt auf die mündliche Prüfung vor: Vortrag, Prüfungsgespräch, Aktualitäten." },
    { datum: iso(jahr, 12, 31), art: "jahreswechsel", titel: "Jahreswechsel im Steuerrecht", kontext: "Zum Jahreswechsel treten Gesetzesänderungen in Kraft; für das Examen zählt der Rechtsstand, den die Prüfung vorgibt." },
  ];
  /* Countdown-Meilensteine vor der schriftlichen Prüfung. */
  for (const n of [100, 60, 30, 14, 7, 3, 1]) {
    const d = new Date(`${pruefung.tag1}T12:00:00Z`); d.setUTCDate(d.getUTCDate() - n);
    liste.push({ datum: d.toISOString().slice(0, 10), art: "countdown", titel: `${n} Tag${n === 1 ? "" : "e"} bis zum Examen`, kontext: `In ${n} Tag${n === 1 ? "" : "en"} beginnt die schriftliche Steuerberaterprüfung (${pruefung.tag1} bis ${pruefung.tag3}). ${n >= 60 ? "Jetzt zählt der Lernplan: Dauerbrenner zuerst, Klausuren unter Zeit." : n >= 7 ? "Jetzt nur noch wiederholen, was sitzt – keine neuen Themen mehr." : "Schlaf, Ruhe, Prüfschemata durchgehen – nichts Neues mehr anfangen."}` });
  }
  liste.push(
    { datum: pruefung.tag1, art: "pruefungstag", titel: "Tag 1: Verfahrensrecht, Umsatzsteuer, Erbschaftsteuer", kontext: "Heute ist der erste Prüfungstag (AO, USt, ErbSt/BewG). Ton: ruhig, ermutigend, ein letzter Klausurtipp – keine neuen Inhalte." },
    { datum: pruefung.tag2, art: "pruefungstag", titel: "Tag 2: Ertragsteuern", kontext: "Heute ist der zweite Prüfungstag (ESt, KSt, GewSt, IStR). Ton: ermutigend, ein Klausurtipp zur Zeiteinteilung." },
    { datum: pruefung.tag3, art: "pruefungstag", titel: "Tag 3: Buchführung und Bilanzwesen", kontext: "Heute ist der dritte und letzte Prüfungstag (Bilanzen). Ton: ermutigend, Hinweis auf Technikpunkte (Bilanzposten, Buchung, Gewinnauswirkung)." },
  );
  const nach = new Date(`${pruefung.tag3}T12:00:00Z`); nach.setUTCDate(nach.getUTCDate() + 1);
  liste.push({ datum: nach.toISOString().slice(0, 10), art: "danach", titel: "Geschafft: Der Tag nach der Prüfung", kontext: "Die schriftliche Prüfung ist vorbei. Ton: Anerkennung, Durchatmen, Ausblick auf Ergebnisse und mündliche Prüfung." });
  return liste;
}

/* Anlass für genau dieses Datum (oder null). */
export function anlassFuer(datum) {
  return anlaesse(datum).find((a) => a.datum === datum) || null;
}

/* Kurzer Kontext für den Autor: Wo stehen wir im Prüfungsjahr? */
export function phase(datum) {
  const tage = tageBis(CONFIG.examen.schriftlich, new Date(`${datum}T12:00:00Z`));
  if (tage < 0 && tage > -120) return "nach der schriftlichen Prüfung – Ergebnisse und mündliche Prüfung stehen an";
  if (tage <= 14) return "Endspurt vor der schriftlichen Prüfung – nur wiederholen, nichts Neues";
  if (tage <= 60) return "heiße Phase – Klausuren unter Zeit, Dauerbrenner sichern";
  if (tage <= 160) return "Aufbauphase – Schemata festigen, Lücken schließen";
  return "Grundlagenphase – Systematik und Prüfungsaufbau";
}
