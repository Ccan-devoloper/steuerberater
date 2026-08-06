import { createHash } from "node:crypto";
import { gunzipSync } from "node:zlib";
import { readFileSync } from "node:fs";
import { volltextMeta } from "../src/data/hausaufgaben-meta.js";
import { teileHausaufgabenSeiten } from "../src/data/hausaufgaben-seiten.js";
import { teileHausaufgabenVolltext } from "../src/data/hausaufgaben-volltext-teilen.js";

const chunkHashes = [
  "405dcf85e0f79f82234283fd9756d708f1fcf0d7b9cb71bf1d15b0bad419d184",
  "5e347bcd060efd434d2685361d9e09396605e478e4984ece0513873e30e257d2",
  "6a1179fc9943761774220215f327f965cbcdcdab3a3e0303c32d9724cbff9d50",
  "20655d120844ea38a6fdb53dd5a7693a0f2871ee342bd45513d0b329723c5afa",
  "c951663489c88b3485fff7ee8d6b77e3f460ab238aac20a5032e3623ff3dffe4",
  "27e7af2df6c69f44270c14bf91e38a41ab3e0fdcb068deeb09f8f4c686ea6cab",
  "2b6659971578ec9a1771a8d60ada4219dd3be243f13c05e60c596a53b25988a4",
];

const erwartet = {
  1: [19851, "d4c61e06bf69370f5dfc311277c21d7f3d07937a6b57656fe0d7cacf7aea1527"],
  2: [25364, "6f7b09a064c9405b507afbb2cb3bef8e38fae38ba2dac124a5372d00faa7ba45"],
  3: [20958, "4a892785691495c2be6e2bbd0c38ec5c2c40bcecf7c88ac2743f1ea815632472"],
  4: [43065, "67ad9f7d26e09b6ca38e2a4df7bd04155437902bb99d5bb5a130c3081763f258"],
  5: [38490, "dd6526530fa3d8533938bc31afe8497b55656c6f1ec77ba078a4d3860f2b2afc"],
  6: [25921, "ff4a4f4466f51b03ad8dbc340c21536afb5b293cfc56f7d48c7b661218ad7d03"],
  7: [24160, "363c687217ea86c8a6d7ce9cca38f195c83a1927fe809407b68b25f7a1967794"],
  8: [29356, "13cf8d876ec9f27e10e0494c4f9309d5464130ad99e10dcfbdbc0e06fd57b1d7"],
  9: [29537, "18646f9a592af646ad917097ea2ce7833fbc756fab2a784d6d05dcee77ca7856"],
};

const chunks = Array.from({ length: 7 }, (_, i) => {
  const text = readFileSync(new URL(`../src/data/hausaufgaben-volltext/chunk-${i + 1}.b64`, import.meta.url), "utf8");
  const hash = createHash("sha256").update(text).digest("hex");
  if (hash !== chunkHashes[i]) throw new Error(`Chunk ${i + 1}: SHA-256 ${hash} statt ${chunkHashes[i]}`);
  return text;
});

const base64 = chunks.join("").replace(/\s+/g, "");
if (base64.length !== 83928) throw new Error(`Base64-Länge fehlerhaft: ${base64.length} statt 83928`);

const json = gunzipSync(Buffer.from(base64, "base64")).toString("utf8");
const daten = JSON.parse(json);

for (const [termin, [zeichen, hash]] of Object.entries(erwartet)) {
  const text = daten[termin];
  if (typeof text !== "string") throw new Error(`Fachtermin ${termin} fehlt.`);
  const unicodeZeichen = Array.from(text).length;
  if (unicodeZeichen !== zeichen) {
    throw new Error(`Fachtermin ${termin}: ${unicodeZeichen} statt ${zeichen} Unicode-Zeichen.`);
  }
  const istHash = createHash("sha256").update(text).digest("hex");
  if (istHash !== hash) throw new Error(`Fachtermin ${termin}: SHA-256 stimmt nicht.`);

  const seiten = teileHausaufgabenSeiten(text);
  const erwarteteSeitenzahl = volltextMeta[termin]?.seiten;
  if (seiten.length !== erwarteteSeitenzahl) {
    throw new Error(`Fachtermin ${termin}: ${seiten.length} statt ${erwarteteSeitenzahl} PDF-Seiten erkannt.`);
  }
  seiten.forEach((seite, index) => {
    if (seite.nummer !== index + 1) {
      throw new Error(`Fachtermin ${termin}: PDF-Seite ${index + 1} ist falsch nummeriert.`);
    }
    if (!seite.text || !seite.text.includes("\n")) {
      throw new Error(`Fachtermin ${termin}: PDF-Seite ${seite.nummer} enthält keinen vollständigen Layouttext.`);
    }
  });

  const { aufgabe, loesung } = teileHausaufgabenVolltext(termin, text);
  if (aufgabe.length < 500) throw new Error(`Fachtermin ${termin}: Aufgabenteil wurde nicht zuverlässig erkannt.`);
  if (loesung.length < 500) throw new Error(`Fachtermin ${termin}: Lösungsteil wurde nicht zuverlässig erkannt.`);
}

const layoutCss = readFileSync(new URL("../src/components/HausaufgabenDokument.css", import.meta.url), "utf8");
if (!/\.hausaufgabe__pdf-text[\s\S]*white-space:\s*pre\s*;/.test(layoutCss)) {
  throw new Error("PDF-Layoutprüfung: Leerzeichen und Tabellen werden nicht unverändert erhalten.");
}
if (/\.hausaufgabe__pdf-text[\s\S]*white-space:\s*pre-wrap\s*;/.test(layoutCss)) {
  throw new Error("PDF-Layoutprüfung: Automatischer Zeilenumbruch verschiebt Tabellen.");
}

if (Object.keys(daten).length !== 9) throw new Error(`Unerwartete Anzahl Fachtermine: ${Object.keys(daten).length}`);
console.log("Hausaufgaben-Volltexte vollständig: 9 Fachtermine, alle PDF-Seiten, Einrückungen und Tabellenzeilen bleiben erhalten; Aufgaben und Lösungen sind getrennt erkannt.");
