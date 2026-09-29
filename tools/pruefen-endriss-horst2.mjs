import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { endrissNativeQuellen, endrissNativeAudit, nativeFor, combineEndrissSources } from '../src/data/endriss-native-register.js';
import { horstFassung2Seitenabgleich } from '../src/data/endriss-persg-horst-fassung2.js';

const readJSON = name => JSON.parse(fs.readFileSync(new URL(`../${name}`, import.meta.url), 'utf8'));
const audit = endrissNativeAudit['persg-folien-2'];
const source = endrissNativeQuellen.find(s => s.id === 'persg-folien-2');
assert.ok(source, 'Second Horst source is absent from the native UI registry');
assert.equal(source.driveId, '1UKzwT0Pu7slpR8XpzKQN_d0waycqELOn');
assert.equal(source.canonicalSourceId, 'persg-folien-1');
assert.equal(audit.legalReview, false);
assert.equal(audit.ownSolutionsAdded, false);
assert.equal(audit.sameSourceBytes, false);
assert.equal(audit.sourceBytes, 10197674);
const expectedPages = Array.from({ length:16 }, (_, i) => i+1);
assert.deepEqual(audit.reviewedPages, expectedPages);
assert.deepEqual(horstFassung2Seitenabgleich.map(m => m.page), expectedPages);
assert.equal(nativeFor(source.id).length, 16);

// Bind the human-readable visual review record to the exact compared native file.
// A changed canonical transcription requires explicitly reconsidering this mapping.
const bytes = fs.readFileSync(new URL('../src/data/endriss-persg-horst-folien.js', import.meta.url));
const blob = createHash('sha1').update(Buffer.from(`blob ${bytes.length}\0`)).update(bytes).digest('hex');
assert.equal(blob, audit.comparedNativeBlob, 'Canonical native file changed: recheck and update the source mapping evidence');
const original = readJSON('public/endriss/quellen/sources/persg-folien-2.json');
const canonicalOriginal = readJSON('public/endriss/quellen/sources/persg-folien-1.json');
assert.equal(original.driveId, source.driveId);
assert.equal(original.sourceBytes, audit.sourceBytes);
assert.equal(original.sha256, 'cd264309029e88800c997ad351b3ffc0341733165b61d5c0299f562403524d70');
assert.notEqual(original.sha256, canonicalOriginal.sha256, 'Do not assert byte-identical original files');
assert.equal(original.physicalPages, 16);
assert.equal(original.pages.length, 16);
for (const mapping of horstFassung2Seitenabgleich) {
  const canonical = nativeFor('persg-folien-1').find(c => c.id === mapping.canonicalChapterId);
  const mapped = nativeFor('persg-folien-2').find(c => c.id === mapping.chapterId);
  assert.ok(canonical && mapped && mapping.evidence.trim());
  assert.deepEqual(mapped.pages, [mapping.page]);
  assert.equal(mapped.canonicalChapterId, canonical.id);
  assert.equal(mapped.title, canonical.title);
  assert.deepEqual(mapped.normen, canonical.normen);
  assert.deepEqual(mapping.page === 1 ? mapped.bloecke.slice(1) : mapped.bloecke, canonical.bloecke);
  assert.ok(original.pages.some(p => p.page === mapping.page));
}
const lastTables = nativeFor('persg-folien-2').find(c => c.id === 'horst-fassung2-15').bloecke.filter(b => b.typ === 'tabelle');
const realteilung = lastTables.at(-1);
assert.ok(realteilung.zeilen.some(row => row[2] === 'Kapital I A' && row[3] === '530.000 €'));
assert.ok(realteilung.zeilen.some(row => row[2] === 'Kapital I B' && row[3] === '610.000 €'));
assert.ok(realteilung.zeilen.some(row => row[1] === '1.140.000 €' && row[3] === '1.140.000 €'));
for (const index of [null, [], [{ id:'lst-mitschrift', importedPages:24 }]]) {
  assert.ok(combineEndrissSources(index).some(s => s.id === source.id), 'Optional image index hid the second source');
}
console.log('Horst Fassung 2 OK: 16 source pages mapped to 16 existing native chapters; independent original provenance, tables and fallback preserved. This is not 16 pages of new unique learning content or a legal review.');
