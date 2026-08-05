import { createHash } from "node:crypto";
import { gunzipSync } from "node:zlib";
import { readFileSync } from "node:fs";

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

const base64 = Array.from({ length: 7 }, (_, i) =>
  readFileSync(new URL(`../src/data/hausaufgaben-volltext/chunk-${i + 1}.b64`, import.meta.url), "utf8"),
).join("").replace(/\s+/g, "");

if (base64.length !== 83928) throw new Error(`Base64-Länge fehlerhaft: ${base64.length} statt 83928`);

const json = gunzipSync(Buffer.from(base64, "base64")).toString("utf8");
const daten = JSON.parse(json);

for (const [termin, [zeichen, hash]] of Object.entries(erwartet)) {
  const text = daten[termin];
  if (typeof text !== "string") throw new Error(`Fachtermin ${termin} fehlt.`);
  if (text.length !== zeichen) throw new Error(`Fachtermin ${termin}: ${text.length} statt ${zeichen} Zeichen.`);
  const istHash = createHash("sha256").update(text).digest("hex");
  if (istHash !== hash) throw new Error(`Fachtermin ${termin}: SHA-256 stimmt nicht.`);
}

if (Object.keys(daten).length !== 9) throw new Error(`Unerwartete Anzahl Fachtermine: ${Object.keys(daten).length}`);
console.log("Hausaufgaben-Volltexte vollständig: 9 Fachtermine, alle Zeichenlängen und SHA-256-Prüfsummen stimmen.");
