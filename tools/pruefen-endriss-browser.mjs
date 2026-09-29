/* Browser acceptance for the actual built campus. No legal/content certification.
   Playwright is resolved from the existing, locked social tool dependencies;
   this file does not run social production or contact external services. */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { endrissNativeQuellen, nativeFor } from '../src/data/endriss-native-register.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requireSocial = createRequire(path.join(root, 'social/package.json'));
const { chromium } = requireSocial('playwright');
const origin = process.env.ENDRISS_TEST_URL || 'http://127.0.0.1:4173';
const output = path.join(root, 'test-results/endriss-browser');
await fs.mkdir(output, { recursive: true });
const report = {
  testedCommit: process.env.GITHUB_SHA || null,
  startedAt: new Date().toISOString(),
  status: 'running',
  legalReview: false,
  contentCompletenessCertification: false,
  checks: [],
};
// New native sources must receive the same real-browser checks automatically.
const sourceIds = endrissNativeQuellen.map(source => source.id);
assert.ok(sourceIds.includes('persg-folien-2'), 'Verified second Horst source must remain registered');
const browser = await chromium.launch({ headless: true });

async function snapshot(page, name) {
  await page.screenshot({ path: path.join(output, `${name}.png`), fullPage: false });
}
async function openWorkspace(page) {
  await page.goto(origin, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Unterlagen-Nachträge', exact: true }).click();
  await page.getByRole('heading', { name: 'Unterlagen-Nachträge', exact: true }).waitFor();
  await page.getByLabel('Fach', { exact: true }).selectOption('alle');
}
async function verifyImage(page, expectedSource) {
  const image = page.locator('article .endriss-bildfenster img');
  await image.waitFor({ state: 'visible' });
  await page.waitForFunction(() => {
    const img = document.querySelector('article .endriss-bildfenster img');
    return img?.complete && img.naturalWidth > 0 && img.naturalHeight > 0;
  }, null, { timeout: 20000 });
  const actual = await image.getAttribute('src');
  assert.ok(actual?.endsWith(expectedSource), `Unexpected source image: ${actual}`);
}
async function ensureViewport(page) {
  const width = await page.evaluate(() => ({
    available: document.documentElement.clientWidth,
    document: document.documentElement.scrollWidth,
  }));
  assert.ok(width.document <= width.available + 2,
    `Page-wide horizontal overflow: ${width.document} > ${width.available}`);
}

try {
  for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    page.setDefaultTimeout(20000);
    const errors = [];
    const sourceRequests = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => {
      if (/\/endriss\/quellen\/sources\//.test(request.url())) sourceRequests.push(request.url());
    });
    try {
      await openWorkspace(page);
      await ensureViewport(page);
      await snapshot(page, `overview-${viewport.width}`);
      for (const id of sourceIds) {
        const source = endrissNativeQuellen.find(s => s.id === id);
        assert.ok(source && nativeFor(id).length, `Native source missing: ${id}`);
        const manifest = JSON.parse(await fs.readFile(
          path.join(root, 'public/endriss/quellen/sources', `${id}.json`), 'utf8'));
        assert.equal(manifest.pages.length, source.physicalPages, `${id}: page count`);
        const before = sourceRequests.length;
        await page.locator(`button.endriss-quellenkarte[data-endriss-source="${id}"]`).click();
        const article = page.locator(`article[data-endriss-source="${id}"]`);
        await article.waitFor();
        const chapters = article.locator('.endriss-kapitel');
        assert.equal(await chapters.count(), nativeFor(id).length, `${id}: rendered chapters`);
        for (const chapter of nativeFor(id)) {
          assert.ok((await article.innerText()).includes(chapter.title), `${id}: missing ${chapter.title}`);
        }
        assert.equal(sourceRequests.length, before, `${id}: source image manifest loaded before explicit expansion`);
        await ensureViewport(page);
        await snapshot(page, `${id}-native-${viewport.width}`);
        await article.locator('summary').filter({ hasText: 'Originalseiten mit Handschrift und Markierungen laden' }).click();
        await verifyImage(page, manifest.pages[0].image);
        const previous = article.getByRole('button', { name: '← Vorherige', exact: true });
        assert.equal(await previous.isDisabled(), true, `${id}: first page previous button`);
        const select = article.getByLabel('Seite / Archivblatt');
        assert.equal(await select.locator('option').count(), manifest.pages.length);
        if (manifest.pages.length > 1) {
          await article.getByRole('button', { name: 'Nächste →', exact: true }).click();
          await verifyImage(page, manifest.pages[1].image);
          await select.selectOption(String(manifest.pages.length - 1));
          await verifyImage(page, manifest.pages.at(-1).image);
          assert.equal(await article.getByRole('button', { name: 'Nächste →', exact: true }).isDisabled(), true);
          await select.selectOption('0');
          await verifyImage(page, manifest.pages[0].image);
        }
        await article.getByRole('button', { name: 'Großansicht', exact: true }).click();
        assert.equal(await article.getByRole('button', { name: 'An Breite anpassen', exact: true }).getAttribute('aria-pressed'), 'true');
        await article.getByRole('button', { name: 'An Breite anpassen', exact: true }).click();
        await ensureViewport(page);
        await article.locator('.endriss-bildfenster').scrollIntoViewIfNeeded();
        await snapshot(page, `${id}-image-${viewport.width}`);
        await article.getByRole('button', { name: '← Zur Quellenübersicht', exact: true }).click();
        report.checks.push({ id, viewport: viewport.width, status: 'passed',
          renderedChapters: nativeFor(id).length, imagePages: manifest.pages.length,
          checks: ['native text', 'lazy image loading', 'first/next/last page', 'zoom', 'viewport containment', 'return navigation'] });
      }
      await page.getByLabel('Quelle oder übertragenen Text suchen').fill('Fahrtenbuch');
      assert.equal(await page.locator('button.endriss-quellenkarte[data-endriss-source="lst-mitschrift"]').count(), 1);
      await page.keyboard.press('Escape');
      await page.getByRole('button', { name: 'Unterlagen-Nachträge', exact: true }).waitFor({ state: 'visible' });
      // EndrissRahmen restores focus in requestAnimationFrame after the trigger
      // becomes visible. Await that observable outcome, not an arbitrary sleep.
      // A genuinely missing focus restoration still fails after five seconds.
      await page.waitForFunction(() => {
        const trigger = document.querySelector('button.endriss-start');
        return !!trigger && document.activeElement === trigger;
      }, null, { timeout: 5000 });
      assert.equal(await page.getByRole('button', { name: 'Unterlagen-Nachträge', exact: true }).evaluate(el => el === document.activeElement), true);
      assert.deepEqual(errors, [], 'Uncaught JavaScript errors');
      report.checks.push({ id: 'search-and-keyboard-return', viewport: viewport.width, status: 'passed' });
    } catch (error) {
      await snapshot(page, `failure-${viewport.width}`).catch(() => {});
      throw error;
    } finally { await context.close(); }
  }

  // A failed, empty or partial optional image index must never hide native text.
  for (const mode of ['missing', 'empty', 'partial']) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
    const page = await context.newPage();
    try {
      await page.route('**/endriss/quellen/index.json', route => mode === 'missing'
        ? route.fulfill({ status: 503, contentType: 'application/json', body: '{}' })
        : route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ sources: mode === 'empty' ? [] : [{ ...endrissNativeQuellen[0], importedPages: 4 }] }) }));
      await openWorkspace(page);
      for (const id of sourceIds) {
        await page.locator(`button.endriss-quellenkarte[data-endriss-source="${id}"]`).click();
        assert.equal(await page.locator('article .endriss-kapitel').count(), nativeFor(id).length);
        await page.getByRole('button', { name: '← Zur Quellenübersicht', exact: true }).click();
      }
      report.checks.push({ id: `native-fallback-${mode}`, status: 'passed' });
    } finally { await context.close(); }
  }
  report.status = 'passed';
} catch (error) {
  report.status = 'failed';
  report.error = error.stack || String(error);
  process.exitCode = 1;
} finally {
  report.finishedAt = new Date().toISOString();
  await browser.close();
  await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
}
