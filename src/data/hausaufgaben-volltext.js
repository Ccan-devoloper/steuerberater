import chunk1 from "./hausaufgaben-volltext/chunk-1.b64?raw";
import chunk2 from "./hausaufgaben-volltext/chunk-2.b64?raw";
import chunk3 from "./hausaufgaben-volltext/chunk-3.b64?raw";
import chunk4 from "./hausaufgaben-volltext/chunk-4.b64?raw";
import chunk5 from "./hausaufgaben-volltext/chunk-5.b64?raw";
import chunk6 from "./hausaufgaben-volltext/chunk-6.b64?raw";
import chunk7 from "./hausaufgaben-volltext/chunk-7.b64?raw";

const chunks = [chunk1, chunk2, chunk3, chunk4, chunk5, chunk6, chunk7];
let cache;

export const volltextMeta = {
  1: { zeichen: 19851, seiten: 12, sha256: "d4c61e06bf69370f5dfc311277c21d7f3d07937a6b57656fe0d7cacf7aea1527" },
  2: { zeichen: 25364, seiten: 14, sha256: "6f7b09a064c9405b507afbb2cb3bef8e38fae38ba2dac124a5372d00faa7ba45" },
  3: { zeichen: 20958, seiten: 11, sha256: "4a892785691495c2be6e2bbd0c38ec5c2c40bcecf7c88ac2743f1ea815632472" },
  4: { zeichen: 43065, seiten: 23, sha256: "67ad9f7d26e09b6ca38e2a4df7bd04155437902bb99d5bb5a130c3081763f258" },
  5: { zeichen: 38490, seiten: 20, sha256: "dd6526530fa3d8533938bc31afe8497b55656c6f1ec77ba078a4d3860f2b2afc" },
  6: { zeichen: 25921, seiten: 11, sha256: "ff4a4f4466f51b03ad8dbc340c21536afb5b293cfc56f7d48c7b661218ad7d03" },
  7: { zeichen: 24160, seiten: 10, sha256: "363c687217ea86c8a6d7ce9cca38f195c83a1927fe809407b68b25f7a1967794" },
  8: { zeichen: 29356, seiten: 17, sha256: "13cf8d876ec9f27e10e0494c4f9309d5464130ad99e10dcfbdbc0e06fd57b1d7" },
  9: { zeichen: 29537, seiten: 16, sha256: "18646f9a592af646ad917097ea2ce7833fbc756fab2a784d6d05dcee77ca7856" },
};

function base64ZuBytes(base64) {
  const binaer = atob(base64);
  const bytes = new Uint8Array(binaer.length);
  for (let i = 0; i < binaer.length; i += 1) bytes[i] = binaer.charCodeAt(i);
  return bytes;
}

export async function ladeHausaufgabenVolltext() {
  if (cache) return cache;
  if (typeof DecompressionStream === "undefined") {
    throw new Error("Der Browser unterstützt die Dekomprimierung der Volltexte nicht. Bitte einen aktuellen Browser verwenden.");
  }

  const base64 = chunks.join("").replace(/\s+/g, "");
  const bytes = base64ZuBytes(base64);
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  const json = await new Response(stream).text();
  const daten = JSON.parse(json);

  for (let termin = 1; termin <= 9; termin += 1) {
    const text = daten[String(termin)];
    if (typeof text !== "string") throw new Error(`Volltext für Fachtermin ${termin} fehlt.`);
    const erwartet = volltextMeta[termin]?.zeichen;
    if (erwartet && text.length !== erwartet) {
      throw new Error(`Volltext für Fachtermin ${termin} ist unvollständig (${text.length} statt ${erwartet} Zeichen).`);
    }
  }

  cache = daten;
  return cache;
}

export default ladeHausaufgabenVolltext;
