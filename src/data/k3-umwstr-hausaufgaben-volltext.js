import { umwstrHausaufgabenMeta } from "./k3-umwstr-hausaufgaben-volltext-meta";
import chunk1 from "./k3-umwstr-hausaufgaben-volltext/chunk-1.b64?raw";
import chunk2 from "./k3-umwstr-hausaufgaben-volltext/chunk-2.b64?raw";
import chunk3 from "./k3-umwstr-hausaufgaben-volltext/chunk-3.b64?raw";
import chunk4 from "./k3-umwstr-hausaufgaben-volltext/chunk-4.b64?raw";
import chunk5 from "./k3-umwstr-hausaufgaben-volltext/chunk-5.b64?raw";
import chunk6 from "./k3-umwstr-hausaufgaben-volltext/chunk-6.b64?raw";

/* Volltexte der drei UmwStR-Hausaufgaben, 1:1 aus den PDF-Quellen.
   Gleiche Bauart wie die Bilanz-Hausaufgaben: gzip-komprimiert, base64-kodiert
   und in Teilstuecke zerlegt, damit keine einzelne Quelldatei uebermaessig
   gross wird. Geladen wird erst beim Aufklappen.

   Die Personalisierungszeile der Quell-PDFs ist beim Extrahieren entfernt
   worden - dieselbe Regel wie bei den uebrigen Hausaufgaben. */

export { umwstrHausaufgabenMeta } from "./k3-umwstr-hausaufgaben-volltext-meta";

const chunks = [chunk1, chunk2, chunk3, chunk4, chunk5, chunk6];
let cache;


function base64ZuBytes(base64) {
  const binaer = atob(base64);
  const bytes = new Uint8Array(binaer.length);
  for (let i = 0; i < binaer.length; i += 1) bytes[i] = binaer.charCodeAt(i);
  return bytes;
}

async function sha256Hex(text) {
  if (!globalThis.crypto?.subtle) return null;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function ladeUmwStRHausaufgabenVolltext() {
  if (cache) return cache;
  if (typeof DecompressionStream === "undefined") {
    throw new Error("Der Browser unterstützt die Dekomprimierung der Volltexte nicht. Bitte einen aktuellen Browser verwenden.");
  }

  const bytes = base64ZuBytes(chunks.join("").replace(/\s+/g, ""));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  const daten = JSON.parse(await new Response(stream).text());

  for (const termin of Object.keys(umwstrHausaufgabenMeta)) {
    const text = daten[termin];
    if (typeof text !== "string") throw new Error(`Volltext für Hausaufgabe ${termin} fehlt.`);
    const erwartet = umwstrHausaufgabenMeta[termin];
    const zeichen = Array.from(text).length;
    if (zeichen !== erwartet.zeichen) {
      throw new Error(`Volltext für Hausaufgabe ${termin} ist unvollständig (${zeichen} statt ${erwartet.zeichen} Zeichen).`);
    }
    const summe = await sha256Hex(text);
    if (summe && summe !== erwartet.sha256) {
      throw new Error(`Volltext für Hausaufgabe ${termin} weicht von der geprüften Fassung ab.`);
    }
  }

  cache = daten;
  return cache;
}

export default ladeUmwStRHausaufgabenVolltext;
