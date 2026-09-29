import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'esbuild';
import { endrissFGO, endrissFGOAudit } from '../src/data/endriss-fgo.js';
import { fgoErsteSeite } from '../src/data/endriss-fgo-arbeitsstand.js';
import { fgoGesetzSeiten } from '../src/data/endriss-fgo-gesetz.generated.js';
import { fgoGesetzQuelle, fgoSeitenReview } from '../src/data/endriss-fgo-seitenreview.js';
import { nativeFor, endrissNativeQuellen, endrissNativeAudit, combineEndrissSources } from '../src/data/endriss-native-register.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'test-results/endriss-fgo-gesetz');
fs.mkdirSync(out, { recursive: true });
const report = { testedCommit: process.env.GITHUB_SHA || null, sourceId: 'ao-fgo', sourceSha256: fgoGesetzQuelle.sha256,
  status: 'running', legalReview: false, ownSolutionsAdded: false, originalImagesChanged: false, checks: [], browser: 'not-requested' };
const hash = text => createHash('sha256').update(text).digest('hex');
const norm = text => text.replace(/\s+/g, ' ').trim();
const escape = text => text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#x27;');
const expectedPages = Array.from({ length: 37 }, (_, i) => i + 1);
const markedPages = [2,3,7,8,9,10,13,14,15,16,17,18,19,20,22,23,24,25,27,28,29,33];

try {
  execFileSync(process.execPath, ['tools/endriss/vorbereiten-fgo-gesetz.mjs', '--check'], { cwd: root, stdio: 'pipe' });
  assert.equal(endrissFGO.length, 37);
  assert.equal(endrissFGO[0], fgoErsteSeite[0], 'Do not fork the already deployed first-page transcript');
  assert.deepEqual(endrissFGO.flatMap(p => p.pages), expectedPages);
  assert.deepEqual(endrissFGOAudit.reviewedPages, expectedPages);
  assert.deepEqual(endrissFGOAudit.nativePages, expectedPages);
  assert.equal(endrissFGOAudit.legalReview, false);
  assert.equal(endrissNativeAudit['ao-fgo'], endrissFGOAudit);
  assert.equal(nativeFor('ao-fgo'), endrissFGO);
  assert.deepEqual(fgoSeitenReview.filter(p => p.notizen.length).map(p => p.page), markedPages);
  assert.equal(endrissFGOAudit.annotationRows, 67);
  assert.equal(fgoGesetzQuelle.printedAmendmentDate, '10.03.2023');
  const source = endrissNativeQuellen.find(s => s.id === 'ao-fgo');
  assert.equal(source.physicalPages, 37);
  for (const inventory of [null, [], [{ id: 'lst-mitschrift', importedPages: 24 }]]) {
    assert.ok(combineEndrissSources(inventory).some(s => s.id === 'ao-fgo'), 'Image-index fallback lost FGO');
  }
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'public/endriss/quellen/sources/ao-fgo.json'), 'utf8'));
  assert.equal(manifest.sha256, fgoGesetzQuelle.sha256);
  assert.equal(manifest.sourceBytes, 1838083);
  for (const page of manifest.pages) {
    assert.match(page.image, /^images\/[a-f0-9]+\.(webp|png|jpg)$/);
    assert.equal(hash(fs.readFileSync(path.join(root, 'public/endriss/quellen', page.image))), page.imageSha256, `Image ${page.page} changed`);
  }
  for (const printed of fgoGesetzSeiten) {
    const original = manifest.pages.find(p => p.page === printed.page);
    assert.equal(hash(original.text), printed.originalTextSha256);
    assert.equal(printed.imageSha256, original.imageSha256);
    const joined = norm(printed.blocks.map(b => b.text).join(' '));
    assert.equal(hash(joined), printed.textSha256);
    const native = endrissFGO.find(p => p.pages[0] === printed.page);
    const statutoryBlocks = native.bloecke.filter(b => b.quellenart === 'gesetzestext');
    assert.equal(norm(statutoryBlocks.map(b => b.text).join(' ')), joined, `Native text loss on ${printed.page}`);
    const annotations = native.bloecke.find(b => b.quellenart === 'markierungen');
    const reviewed = fgoSeitenReview.find(r => r.page === printed.page);
    if (reviewed.notizen.length) assert.deepEqual(annotations.zeilen, reviewed.notizen);
    else assert.ok(!annotations, 'Do not invent marks on unmarked pages');
  }
  const printedText = page => norm(fgoGesetzSeiten.find(p => p.page === page).blocks.map(b => b.text).join(' '));
  assert.ok(printedText(14).includes('binnen zwei Wochen'));
  assert.ok(printedText(14).includes('Ist eine Übermittlung aus technischen Gründen vorübergehend nicht möglich'));
  assert.ok(printedText(32).includes('mit dem dritten Tage nach Aufgabe zur Post'));
  assert.ok(printedText(18).includes('hat*'), 'Preserve original printed star, not an invented correction');
  assert.ok(printedText(10).includes('wird.*'), 'Preserve original printed star');
  assert.ok(printedText(37).includes('§ 184'));
  report.checks.push('37 source pages and existing page-1 identity', '36 reproducible printed-text transfers', '67 annotation rows on 22 marked pages', 'all 37 unchanged image hashes', 'historical wording and source punctuation retained', 'native registration and image-index fallback');

  const temporary = fs.mkdtempSync(path.join(root, '.endriss-fgo-gesetz-'));
  try {
    const output = path.join(temporary, 'component.mjs');
    await build({ entryPoints: [path.join(root, 'src/components/EndrissNachtraege.jsx')], outfile: output,
      bundle: true, platform: 'node', format: 'esm', target: 'node22', packages: 'external', jsx: 'transform',
      loader: { '.js': 'jsx', '.css': 'empty' }, define: { 'import.meta.env.BASE_URL': JSON.stringify('/steuerberater/') }, logLevel: 'warning' });
    const { default: Overview, EndrissDokument } = await import(pathToFileURL(output).href);
    const overview = renderToStaticMarkup(React.createElement(Overview, { fach: 'ao' }));
    assert.ok(overview.includes('data-endriss-source="ao-fgo"'));
    const html = renderToStaticMarkup(React.createElement(EndrissDokument, { quelle: source, zurueck: () => {} }));
    assert.equal((html.match(/class="panel endriss-kapitel"/g) || []).length, 37);
    assert.equal((html.match(/data-source-annotations=/g) || []).length, 22);
    assert.equal((html.match(/<table\b/g) || []).length, 23);
    assert.ok(html.includes('endriss-quellenfarbe--rosa') && html.includes('endriss-quellenfarbe--gelb'));
    assert.ok(html.includes('Keine Rechtsstandsprüfung'));
    assert.ok(!html.includes('<img'), 'Optional original images loaded during native render');
    for (const page of fgoGesetzSeiten) for (const block of page.blocks) {
      assert.ok(html.includes(escape(block.text)), `Printed page ${page.page}: missing rendered text ${block.text.slice(0,80)}`);
    }
    for (const page of fgoSeitenReview) for (const row of page.notizen) {
      assert.ok(html.includes(escape(row[1])) && html.includes(escape(row[2])), `Page ${page.page}: missing annotation`);
    }
    report.checks.push('actual React overview/detail renders every statute block and annotation', 'readable source-colour labels and native chapter selector');
  } finally { fs.rmSync(temporary, { recursive: true, force: true }); }

  if (process.argv.includes('--browser')) {
    const requireSocial = createRequire(path.join(root, 'social/package.json'));
    const { chromium } = requireSocial('playwright');
    const browser = await chromium.launch({ headless: true });
    try {
      for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
        const context = await browser.newContext({ viewport });
        const page = await context.newPage();
        page.setDefaultTimeout(20000);
        const errors = [], imageRequests = [];
        page.on('pageerror', e => errors.push(e.message));
        page.on('request', r => { if (/endriss\/quellen\/sources\/ao-fgo\.json/.test(r.url())) imageRequests.push(r.url()); });
        await page.route('**/endriss/quellen/index.json', route => route.fulfill({ status: 200, contentType: 'application/json', body: '{"sources":[]}' }));
        try {
          await page.goto(process.env.ENDRISS_TEST_URL || 'http://127.0.0.1:4173', { waitUntil: 'networkidle' });
          await page.getByRole('button', { name: 'Unterlagen-Nachträge', exact: true }).click();
          await page.getByLabel('Fach', { exact: true }).selectOption('ao');
          await page.getByLabel('Quelle oder übertragenen Text suchen').fill('Zoom-Call');
          await page.locator('button[data-endriss-source="ao-fgo"]').click();
          const article = page.locator('article[data-endriss-source="ao-fgo"]');
          assert.equal(await article.locator('.endriss-kapitel').count(), 37);
          const body = norm(await article.innerText());
          for (const printed of fgoGesetzSeiten) for (const block of printed.blocks) assert.ok(body.includes(norm(block.text)), `Browser missing page ${printed.page}`);
          for (const reviewed of fgoSeitenReview) for (const row of reviewed.notizen) assert.ok(body.includes(norm(row[2])), `Browser missing annotation on ${reviewed.page}`);
          assert.equal(imageRequests.length, 0);
          const jump = article.getByLabel('Zu einem Textabschnitt springen', { exact: true });
          assert.equal(await jump.locator('option').count(), 38);
          for (const n of [7, 17, 24, 37]) {
            await jump.selectOption(`endriss-fgo-gesetz-seite-${n}`);
            await page.waitForFunction(id => document.querySelector(`#${id} > summary`) === document.activeElement, `endriss-fgo-gesetz-seite-${n}`);
            await page.screenshot({ path: path.join(out, `native-page${n}-${viewport.width}.png`) });
          }
          const size = await page.evaluate(() => ({ client: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
          assert.ok(size.scroll <= size.client + 2, `Horizontal overflow: ${JSON.stringify(size)}`);
          assert.deepEqual(errors, []);
          report.checks.push(`full source text, notes, native search and chapter keyboard focus at ${viewport.width}px with empty image index`);
        } catch (error) {
          await page.screenshot({ path: path.join(out, `failure-${viewport.width}.png`) }).catch(() => {});
          throw error;
        } finally { await context.close(); }
      }
      report.browser = 'passed';
    } finally { await browser.close(); }
  }
  report.status = 'passed';
} catch (error) {
  report.status = 'failed'; report.error = error.stack || String(error); process.exitCode = 1;
} finally {
  report.finishedAt = new Date().toISOString();
  fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
}
