import { k1UstOberthemaId } from "./k1-ust-themen.js";

/* Primäre Fachzuordnung der Originalfälle. Die IDs entsprechen derselben
   Kategorisierung, die im Reiter „Originalfälle“ verwendet wird. Die drei
   klausurübergreifenden Abschlussfälle 240–242 werden bewusst nicht automatisch
   einem einzelnen Lernmodul zugeordnet, weil sie mehrere Prüfungsblöcke bündeln. */
const originalfallThemen = new Map();
const zuordnen = (thema, ids) => ids.forEach((id) => originalfallThemen.set(id, thema));

zuordnen("steuerbarkeit", [141, 142]);
zuordnen("leistung-ort", [143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153]);
zuordnen("befreiung-steuersatz", [154, 155, 156, 157]);
zuordnen("bmg-entstehung", [158, 159, 196, 197, 198, 207]);
zuordnen("rechnung-schuld", [165, 166, 167, 214]);
zuordnen("eu", [168, 169, 170, 171, 172, 173, 184, 185, 186, 187, 188, 189, 190]);
zuordnen("drittland", [174, 175, 176, 182, 183, 217]);
zuordnen("vorsteuer", [200, 201, 202, 216, 219, 220, 221, 222, 223]);
zuordnen("sonder", [194, 195, 199, 203, 204, 205, 206, 215, 228, 229, 230, 231, 235, 236, 237, 238, 239]);

export const k1UstOriginalfallOberthemaId = (fall) => originalfallThemen.get(Number(fall?.id)) || null;

const STOPP = new Set([
  "aber", "alle", "auch", "beim", "bzw", "dann", "durch", "eine", "einem", "einen", "einer", "eines",
  "für", "gegen", "nach", "oder", "sowie", "über", "unter", "und", "vom", "von", "vor", "wegen", "zwischen",
  "ustg", "ustae", "abs", "satz", "nr", "buchst", "steuer", "umsatzsteuer", "fall", "beispiel",
]);

function textVon(inhalt) {
  return [inhalt?.title, inhalt?.law, ...(inhalt?.normchain || [])].filter(Boolean).join(" ");
}

function paragrafen(inhalt) {
  const set = new Set();
  const text = textVon(inhalt);
  const regex = /§{1,2}\s*(\d+[a-z]?)/gi;
  let treffer;
  while ((treffer = regex.exec(text))) set.add(treffer[1].toLowerCase());
  return set;
}

function woerter(inhalt) {
  return new Set(
    String(inhalt?.title || "")
      .toLowerCase()
      .replace(/[^a-zäöüß0-9]+/gi, " ")
      .split(/\s+/)
      .filter((wort) => wort.length >= 5 && !STOPP.has(wort)),
  );
}

function schnittmenge(a, b) {
  let anzahl = 0;
  for (const wert of a) if (b.has(wert)) anzahl += 1;
  return anzahl;
}

function naehe(a, b) {
  const gemeinsameNormen = schnittmenge(paragrafen(a), paragrafen(b));
  const gemeinsameWoerter = schnittmenge(woerter(a), woerter(b));
  const gleicheEinheit = Number(a?.einheit) === Number(b?.einheit) ? 1 : 0;
  return gemeinsameNormen * 10 + gemeinsameWoerter * 3 + gleicheEinheit * 2;
}

export function passendeOriginalfaelleZuModul(modul, originalfaelle, limit = 5) {
  const thema = k1UstOberthemaId(modul);
  if (!thema) return [];
  return originalfaelle
    .filter((fall) => k1UstOriginalfallOberthemaId(fall) === thema)
    .map((fall) => ({ fall, punkte: naehe(modul, fall) }))
    .sort((a, b) => b.punkte - a.punkte || Number(a.fall.id) - Number(b.fall.id))
    .slice(0, limit)
    .map(({ fall }) => fall);
}

export function passendeModuleZuOriginalfall(fall, module, limit = 4) {
  const thema = k1UstOriginalfallOberthemaId(fall);
  if (!thema) return [];
  return module
    .filter((modul) => k1UstOberthemaId(modul) === thema)
    .map((modul) => ({ modul, punkte: naehe(fall, modul) }))
    .sort((a, b) => b.punkte - a.punkte || Number(a.modul.id) - Number(b.modul.id))
    .slice(0, limit)
    .map(({ modul }) => modul);
}

export default passendeOriginalfaelleZuModul;
