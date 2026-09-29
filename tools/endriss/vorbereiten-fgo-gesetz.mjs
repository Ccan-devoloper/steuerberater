import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const source = JSON.parse(fs.readFileSync(path.join(root, 'public/endriss/quellen/sources/ao-fgo.json'), 'utf8'));
assert.equal(source.driveId, '1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj');
assert.equal(source.sourceBytes, 1838083);
assert.equal(source.sha256, 'f8c55095b205a2d116e9af3c1981a4aba1bccfd6bc3708829742403b33d89b4a');
assert.equal(source.pages.length, 37);
// Inspection only: this is deliberately not registered as native/complete content.
// The existing extracted text contains OCR remnants of annotations, which must be
// separately checked against the original page images before publication as text.
for (const page of source.pages.slice(1)) {
  console.log(`\n=== FGO SOURCE PAGE ${page.page} / PRINTED ${page.page - 1} ===`);
  console.log(page.text.split('\n').map(line => line.trim().replace(/ {2,}/g, ' ')).join('\n'));
  console.log(`=== END FGO SOURCE PAGE ${page.page} ===`);
}
