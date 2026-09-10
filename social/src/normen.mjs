/* ==========================================================================
   Schreibweise der Normen.

   Auf dem Bildschirm gilt die Kurzform, wie sie in der Klausur geschrieben
   wird: § 7 (1) S. 1 Nr. 1 lit. a) aa) EStG. Der Absatz steht in Klammern,
   Satz, Nummer, Buchstabe und Doppelbuchstabe werden abgekürzt. Das spart
   Platz auf der Kachel und entspricht dem, was Korrektoren sehen wollen.

   Gesprochen geht das nicht: „(1)“ liest keine Stimme als „Absatz eins“.
   Deshalb gibt es zwei Fassungen – normKurz() für alles Sichtbare,
   normGesprochen() für den Sprechertext.
   ========================================================================== */

/* Reihenfolge zählt: Erst die langen Formen, dann die kurzen, damit nichts
   doppelt umgeschrieben wird. */
const KURZ = [
  /* Die gesprochene Form zurueck in die Schreibform. Das Modell schreibt
     gelegentlich „Paragraf 7 Absatz 1“ auch in die Caption, weil im selben
     Auftrag die Regel fuer den Sprechertext steht. Nur mit folgender Ziffer,
     damit „Der Paragraf regelt …“ stehen bleibt. */
  [/\bParagrafen\s*(?=\d)/g, "§§ "],
  [/\bParagraf\s*(?=\d)/g, "§ "],
  [/\bArtikel\s*(?=\d)/g, "Art. "],
  [/\bin Verbindung mit\b/g, "i.V.m."],
  /* Absatz → (1). Auch „Abs. 1a“ kommt vor. Bewusst ohne i-Flag: Der Zusatz
     hinter der Zahl ist immer klein („1a“); mit i-Flag verschluckte die Regel
     das große S aus „Abs. 1 S. 1“. */
  [/\b(?:Abs\.|Absatz|abs\.|absatz)\s*(\d+)\s*([a-z])?(?![A-Za-zÄÖÜäöüß.])/g, (_, n, b) => `(${n}${b || ""})`],
  /* Satz, Nummer, Halbsatz */
  [/\bSatz\s*(\d+)\b/gi, "S. $1"],
  [/\b(?:Nummer|nummer)\s*(\d+)\s*([a-z])?(?![A-Za-zÄÖÜäöüß.])/g, (_, n, b) => `Nr. ${n}${b || ""}`],
  [/\bHalbsatz\s*(\d+)\b/gi, "Hs. $1"],
  [/\bHs\.\s*(\d+)\b/gi, "Hs. $1"],
  /* Doppelbuchstabe vor Buchstabe prüfen, sonst greift der Buchstabe zuerst. */
  [/\b(?:Doppelbuchstabe|DBuchst\.|Doppelbuchst\.)\s*([a-z]{2})\)?/gi, "$1)"],
  [/\b(?:Buchstabe|Buchst\.|lit\.)\s*([a-z])\)?/gi, "lit. $1)"],
];

/** Kurzform für alles, was gelesen wird: Kacheln, Stories, Reel-Bildschirmtext. */
export function normKurz(text) {
  if (typeof text !== "string" || !text) return text;
  let out = text;
  for (const [muster, ersatz] of KURZ) out = out.replace(muster, ersatz);
  /* Aufräumen: doppelte Klammern und Leerzeichen vor der Klammer. */
  return out.replace(/\)\)+/g, ")").replace(/§\s*(\d)/g, "§ $1").replace(/\s{2,}/g, " ").trim();
}

const GESPROCHEN = [
  [/§§/g, "Paragrafen"],
  [/§/g, "Paragraf"],
  [/\((\d+)\s*([a-z])?\)/g, (_, n, b) => ` Absatz ${n}${b ? ` ${b}` : ""}`],
  [/\bAbs\./gi, "Absatz"],
  [/\bS\.\s*(\d+)/g, "Satz $1"],
  [/\bNr\.\s*(\d+)/g, "Nummer $1"],
  [/\bHs\.\s*(\d+)/g, "Halbsatz $1"],
  [/\blit\.\s*([a-z])\)?/gi, "Buchstabe $1"],
  [/\b([a-z]{2})\)/g, "Doppelbuchstabe $1"],
  [/\bi\.\s?V\.\s?m\./gi, "in Verbindung mit"],
];

/**
 * Fassung für die Stimme: Klammern und Abkürzungen ausgeschrieben, damit die
 * Sprachausgabe „Absatz eins Satz eins“ sagt statt „Klammer auf eins“.
 * Die Gesetzeskürzel (EStG, AO …) bleiben stehen; sie werden korrekt gelesen.
 */
/* Gesetzeskürzel, die eine Sprachausgabe nicht buchstabieren kann. „UStAE“
   kommt als „U-Es-Ta-A-E“ zerhackt heraus; gesagt wird ohnehin der volle Name.
   Nur die Kürzel mit gemischter Schreibweise stehen hier: Saubere Initialen
   wie AO, HGB oder BGB liest jede Stimme richtig, und ausgeschrieben klängen
   sie umständlich. */
const GESETZE = {
  EStG: "Einkommensteuergesetz",
  EStDV: "Einkommensteuer-Durchführungsverordnung",
  EStR: "Einkommensteuerrichtlinien",
  KStG: "Körperschaftsteuergesetz",
  KStR: "Körperschaftsteuerrichtlinien",
  GewStG: "Gewerbesteuergesetz",
  GewStR: "Gewerbesteuerrichtlinien",
  UStG: "Umsatzsteuergesetz",
  UStDV: "Umsatzsteuer-Durchführungsverordnung",
  UStAE: "Umsatzsteuer-Anwendungserlass",
  ErbStG: "Erbschaftsteuergesetz",
  ErbStR: "Erbschaftsteuerrichtlinien",
  GrEStG: "Grunderwerbsteuergesetz",
  BewG: "Bewertungsgesetz",
  UmwStG: "Umwandlungssteuergesetz",
  UmwG: "Umwandlungsgesetz",
  AStG: "Außensteuergesetz",
  InvStG: "Investmentsteuergesetz",
  SolzG: "Solidaritätszuschlaggesetz",
  GmbHG: "GmbH-Gesetz",
  AktG: "Aktiengesetz",
  InsO: "Insolvenzordnung",
  GewO: "Gewerbeordnung",
  FGO: "Finanzgerichtsordnung",
  VwVfG: "Verwaltungsverfahrensgesetz",
};
/* Lange Kürzel zuerst, sonst schlägt EStG innerhalb von EStGB zu. */
const GESETZ_MUSTER = new RegExp(`\\b(${Object.keys(GESETZE).sort((a, b) => b.length - a.length).join("|")})\\b`, "g");

export function normGesprochen(text) {
  if (typeof text !== "string" || !text) return text;
  let out = text;
  for (const [muster, ersatz] of GESPROCHEN) out = out.replace(muster, ersatz);
  out = out.replace(GESETZ_MUSTER, (k) => GESETZE[k]);
  return out.replace(/\s{2,}/g, " ").replace(/\s+([,.;:])/g, "$1").trim();
}

/** Die Regel, wie sie im Auftrag an das Modell steht. */
export const NORM_REGEL = 'Normen auf dem Bildschirm immer in der Klausur-Kurzform: § 7 (1) S. 1 Nr. 1 lit. a) aa) EStG. Absatz in Klammern, kein „Abs.“, kein „Satz“ ausgeschrieben.';
export const NORM_REGEL_STIMME = 'Im Sprechertext dagegen ausgeschrieben, damit die Stimme es richtig liest: „Paragraf 7 Absatz 1 Satz 1 Nummer 1 Buchstabe a EStG“ – dort keine Klammern und keine Abkürzungen.';

/** Wendet die Kurzform auf alle sichtbaren Felder eines Objekts an. */
export function felderKuerzen(objekt, felder) {
  for (const f of felder) if (typeof objekt?.[f] === "string") objekt[f] = normKurz(objekt[f]);
  if (Array.isArray(objekt?.punkte)) objekt.punkte = objekt.punkte.map(normKurz);
  if (Array.isArray(objekt?.optionen)) objekt.optionen = objekt.optionen.map(normKurz);
  return objekt;
}
