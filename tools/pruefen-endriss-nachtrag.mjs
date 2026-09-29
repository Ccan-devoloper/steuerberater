import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { estKurzskript1 } from '../src/data/est-kurzskript-1.js';
import { estKurzskript1Nachtrag, estKurzskript1FortsetzungGewerbe, estKurzskript1NachtragAudit as audit } from '../src/data/est-kurzskript-1-nachtrag.js';
import { erbstFallsammlungMirbach } from '../src/data/k1-erbst-fallsammlung-mirbach.js';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sha = data => createHash('sha256').update(data).digest('hex');
assert.equal(estKurzskript1.length, 58, 'Existing 23 and new 35 chapters must remain present');
assert.equal(new Set(estKurzskript1.map(k => k.id)).size, 58, 'No duplicate chapter IDs');
assert.equal(new Set(estKurzskript1.map(k => k.teil)).size, 9, 'All nine source parts');
assert.equal(estKurzskript1Nachtrag.length, 35);
assert.equal(audit.legalReview, false);
assert.equal(audit.rasterFiguresTranscribed, 17);
assert.equal(audit.vectorRegionsTranscribed, 4);
assert.equal(audit.nativeTableRegions, 24);
assert.deepEqual(audit.addedPrintedPages, Array.from({ length:83 }, (_, i) => i+80));
const pages = new Map();
const provenance = new Set();
function checkBlocks(blocks) {
  assert.ok(Array.isArray(blocks) && blocks.length);
  for (const b of blocks) {
    if (b.typ === 'tabelle') {
      assert.ok(b.spalten.length > 1 && b.zeilen.length);
      for (const row of b.zeilen) assert.equal(row.length, b.spalten.length, 'Table column count');
    } else assert.equal(typeof b.text, 'string');
  }
}
for (const k of [estKurzskript1FortsetzungGewerbe, ...estKurzskript1Nachtrag]) {
  checkBlocks(k.bloecke);
  for (const b of k.bloecke) {
    assert.ok(b.quellenSeite >= 80 && b.quellenSeite <= 162);
    assert.equal(b.pdfSeite, b.quellenSeite+1);
    provenance.add(b.quellenSeite);
  }
  for (const p of k.quellenseiten) {
    assert.match(p.src, /^endriss\/est-ks1\/p-\d{3}\.webp$/);
    assert.equal(p.pdfSeite, p.druckseite+1);
    const bytes = fs.readFileSync(path.join(root, 'public', p.src));
    assert.equal(sha(bytes), p.sha256, 'Versioned source image hash');
    assert.ok(p.width > 1000 && p.height > 1400);
    pages.set(p.druckseite, p);
  }
}
assert.equal(pages.size, 83);
assert.equal(provenance.size, 83);
const answers = erbstFallsammlungMirbach.flatMap(k => k.loesungen || []);
assert.deepEqual(answers.map(a=>a.id).sort(), ['mirbach-lsg-09','mirbach-lsg-14','mirbach-lsg-28-abw2']);
assert.deepEqual(answers.map(a=>a.sourcePages.length), [1,1,4]);
for (const answer of answers) checkBlocks(answer.bloecke);
assert.equal(erbstFallsammlungMirbach.length, 5, 'Original five case groups retained');
const reader = fs.readFileSync(path.join(root, 'src/components/KurzskriptBloecke.jsx'), 'utf8');
assert.ok(reader.includes('kapitel.loesungen') && reader.includes('<QuellenSeiten'));
console.log('Endriss-Nachtrag OK: 35 neue ESt-Kapitel / 83 Seiten, 17 Bildschemata, 4 Vektorlayouts, 24 Tabellenbereiche; 3 Mirbach-Quellenlösungen / 6 Seiten.');
