import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'esbuild';
import { endrissNative, endrissNativeAudit, endrissNativeQuellen, nativeFor, combineEndrissSources } from '../src/data/endriss-native-register.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const required = ['istr-hinzurechnung', 'lst-mitschrift', 'lst-korrektur', 'persg-folien-1', 'ao-notfallbuch'];
const ids = new Set();
let chapters = 0;
let tables = 0;
let pages = 0;
for (const source of endrissNativeQuellen) {
  assert.ok(source.id && !ids.has(source.id), 'Native source IDs must be unique');
  ids.add(source.id);
  assert.match(source.driveId, /^[A-Za-z0-9_-]+$/);
  assert.ok(Number.isInteger(source.physicalPages) && source.physicalPages > 0);
  const content = nativeFor(source.id);
  assert.ok(content.length, `${source.id}: registered source without native content`);
  const seen = new Set();
  const covered = new Set();
  for (const chapter of content) {
    assert.ok(chapter.id && !seen.has(chapter.id), `${source.id}: duplicate chapter`);
    seen.add(chapter.id);
    assert.equal(typeof chapter.title, 'string');
    assert.ok(chapter.title.trim());
    assert.ok(Array.isArray(chapter.pages) && chapter.pages.length);
    assert.ok(Array.isArray(chapter.normen));
    for (const page of chapter.pages) {
      assert.ok(Number.isInteger(page) && page >= 1 && page <= source.physicalPages, `${source.id}: page outside source`);
      covered.add(page);
    }
    assert.ok(Array.isArray(chapter.bloecke) && chapter.bloecke.length);
    for (const block of chapter.bloecke) {
      if (block.typ === 'tabelle') {
        tables++;
        assert.ok(Array.isArray(block.spalten) && block.spalten.length > 1);
        assert.ok(block.spalten.every(cell => typeof cell === 'string'));
        assert.ok(Array.isArray(block.zeilen) && block.zeilen.length);
        for (const row of block.zeilen) {
          assert.equal(row.length, block.spalten.length, `${chapter.id}: table column mismatch`);
          assert.ok(row.every(cell => typeof cell === 'string'), `${chapter.id}: non-text table cell`);
        }
      } else {
        assert.ok(!block.typ || block.typ === 'text' || block.typ === 'titel');
        assert.equal(typeof block.text, 'string');
        assert.ok(block.text.trim(), `${chapter.id}: empty content block`);
      }
    }
  }
  const expected = Array.from({ length: source.physicalPages }, (_, i) => i + 1);
  assert.deepEqual([...covered].sort((a,b) => a-b), expected, `${source.id}: native page coverage gap`);
  assert.deepEqual(endrissNativeAudit[source.id].reviewedPages, expected, `${source.id}: missing recorded review pages`);
  chapters += content.length;
  pages += source.physicalPages;
}
for (const id of required) assert.ok(ids.has(id), `Previously registered source lost: ${id}`);
assert.deepEqual(Object.keys(endrissNative).sort(), [...ids].sort());
assert.equal(endrissNativeAudit.legalReview, false);
assert.equal(endrissNativeAudit['persg-folien-1'].legalReview, false);
assert.equal(endrissNativeAudit['persg-folien-1'].ownSolutionsAdded, false);
assert.deepEqual(nativeFor('not-a-source'), []);
for (const input of [undefined, null, [], {}]) {
  const combined = combineEndrissSources(input);
  assert.deepEqual(combined.map(s => s.id).sort(), [...ids].sort());
  assert.ok(combined.every(s => s.importedPages === undefined), 'Source pages must not masquerade as published images');
}
const combined = combineEndrissSources([
  { id:'lst-mitschrift', importedPages:24 },
  { id:'image-only-source', title:'Not yet transcribed', importedPages:3, fach:'quer' },
]);
assert.equal(combined.filter(s => s.id === 'lst-mitschrift').length, 1);
assert.equal(combined.find(s => s.id === 'lst-mitschrift').driveId, endrissNativeQuellen.find(s => s.id === 'lst-mitschrift').driveId);
assert.ok(combined.some(s => s.id === 'persg-folien-1'), 'Partial image inventory hid native Horst content');
assert.deepEqual(nativeFor('image-only-source'), [], 'Image inventory must not imply transcription');

// Exercise the actual React components, not only an import-string assertion.
// This is server-side rendering; it is NOT a browser, visual or legal review.
const temporary = fs.mkdtempSync(path.join(root, '.endriss-render-'));
try {
  const output = path.join(temporary, 'components.mjs');
  await build({
    entryPoints: [path.join(root, 'src/components/EndrissNachtraege.jsx')],
    outfile: output,
    bundle: true,
    platform: 'node',
    format: 'esm',
    target: 'node22',
    packages: 'external',
    jsx: 'transform',
    loader: { '.js':'jsx', '.css':'empty' },
    define: { 'import.meta.env.BASE_URL': JSON.stringify('/steuerberater/') },
    logLevel: 'warning',
  });
  const { default: Overview, EndrissDokument } = await import(pathToFileURL(output).href);
  const all = renderToStaticMarkup(React.createElement(Overview, { fach:'alle' }));
  for (const id of required) assert.ok(all.includes(`data-endriss-source="${id}"`), `${id}: missing from rendered overview without image index`);
  const persg = renderToStaticMarkup(React.createElement(Overview, { fach:'persg' }));
  assert.ok(persg.includes('data-endriss-source="persg-folien-1"'));
  assert.ok(!persg.includes('data-endriss-source="lst-mitschrift"'));
  for (const source of endrissNativeQuellen) {
    const html = renderToStaticMarkup(React.createElement(EndrissDokument, { quelle:source, zurueck:() => {} }));
    assert.ok(html.includes(`data-endriss-source="${source.id}"`));
    assert.ok(html.includes('aria-label="Übertragene Inhalte"'));
    assert.ok(html.includes('Keine Rechtsstandsprüfung'));
    assert.ok(html.includes('Bildbestand nicht bestätigt'));
    assert.ok(!html.includes('<img'), 'Original images must not load before the reader is opened');
    const tableCount = (html.match(/<table\b/g) || []).length;
    const expectedTables = nativeFor(source.id).flatMap(c => c.bloecke).filter(b => b.typ === 'tabelle').length;
    assert.equal(tableCount, expectedTables, `${source.id}: not all native tables render`);
    assert.equal((html.match(/class="panel endriss-kapitel"/g) || []).length, nativeFor(source.id).length);
  }
} finally {
  fs.rmSync(temporary, { recursive:true, force:true });
}
console.log(`Endriss native: ${ids.size} sources, ${pages} source pages, ${chapters} chapters, ${tables} tables. Registry, page references and React server rendering OK. No browser or legal review asserted.`);
