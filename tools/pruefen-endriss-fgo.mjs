import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'esbuild';
import { fgoFahrtrouteQuelle as quelle, fgoFahrtrouteSchritte as steps } from '../src/data/endriss-fgo-fahrtroute.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'test-results/endriss-fgo');
fs.mkdirSync(out, { recursive: true });
const report = { testedCommit: process.env.GITHUB_SHA || null, source: quelle.driveId, sourcePages: [1], wholeSourceComplete: false, legalReview: false, checks: [], status: 'running', browser: 'not-requested' };
const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;');

try {
  assert.equal(quelle.driveId, '1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj');
  assert.equal(quelle.sourceBytes, 1838083);
  assert.equal(quelle.physicalPages, 37);
  assert.equal(quelle.complete, false);
  assert.equal(quelle.legalReview, false);
  assert.deepEqual(quelle.transcribedPages, [1]);
  assert.deepEqual(quelle.remainingPages, Array.from({ length: 36 }, (_, i) => i + 2));
  assert.deepEqual(steps.map(s => s.nummer), Array.from({ length: 12 }, (_, i) => i + 1));
  assert.equal(steps[10].norm, '§§ 64, 65 FGO');
  assert.equal(steps[11].norm, '§ 52d FGO');
  assert.ok(steps[9].notizen.some(s => s.includes('§ 54 FGO → § 222 ZPO → §§ 187, 188 BGB')));
  assert.ok(steps[9].notizen.some(s => s.includes('§ 56 FGO ≙ § 110 AO')));
  assert.ok(steps[10].notizen.some(s => s.includes('Nachlieferung')));
  assert.ok(steps[11].notizen.some(s => s.includes('beSt')));
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'public/endriss/quellen/sources/ao-fgo.json'), 'utf8'));
  assert.equal(manifest.driveId, quelle.driveId);
  assert.equal(manifest.sourceBytes, quelle.sourceBytes);
  assert.equal(manifest.physicalPages, quelle.physicalPages);
  assert.equal(manifest.pages.length, 37);
  const original = manifest.pages.find(p => p.page === 1);
  assert.ok(original && /^images\/[a-f0-9]+\.(webp|png|jpg)$/.test(original.image));
  const bytes = fs.readFileSync(path.join(root, 'public/endriss/quellen', original.image));
  assert.equal(createHash('sha256').update(bytes).digest('hex'), original.imageSha256);
  report.sourceSha256 = manifest.sha256;
  report.sourcePageImageSha256 = original.imageSha256;
  report.checks.push('source identity, existing source image integrity, twelve ordered stations and explicit remaining 36 pages');
  const dispatcher = fs.readFileSync(path.join(root, 'src/components/AOSchemataAlle.jsx'), 'utf8');
  assert.ok(dispatcher.includes('import EndrissFGOFahrtroute from "./EndrissFGOFahrtroute";'));
  assert.ok(dispatcher.includes('if (id === "ao6-fgo-fahrtroute") return <EndrissFGOFahrtroute />;'));
  const temporary = fs.mkdtempSync(path.join(root, '.endriss-fgo-'));
  try {
    const output = path.join(temporary, 'route.mjs');
    await build({ entryPoints: [path.join(root, 'src/components/EndrissFGOFahrtroute.jsx')], outfile: output, bundle: true, platform: 'node', format: 'esm', target: 'node22', packages: 'external', jsx: 'transform', loader: { '.js': 'jsx', '.css': 'empty' }, logLevel: 'warning' });
    const { default: Component } = await import(pathToFileURL(output).href);
    const html = renderToStaticMarkup(React.createElement(Component));
    assert.equal((html.match(/data-fgo-step=/g) || []).length, 12);
    for (const step of steps) {
      assert.ok(html.includes(escape(step.norm)));
      assert.ok(html.includes(escape(step.titel)));
      for (const note of step.notizen) assert.ok(html.includes(escape(note)), `Unrendered source note: ${note}`);
    }
    assert.ok(html.includes('Keine Rechtsstandsprüfung'));
    assert.ok(html.includes('PDF-Seiten 2–37'));
    assert.ok(!html.includes('endet im sichtbaren PDF-Ausschnitt'));
    report.checks.push('all source station labels and notes rendered by the actual React component; existing schema ID wired');
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
  if (process.argv.includes('--browser')) {
    const requireSocial = createRequire(path.join(root, 'social/package.json'));
    const { chromium } = requireSocial('playwright');
    const browser = await chromium.launch({ headless: true });
    try {
      for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
        const context = await browser.newContext({ viewport });
        await context.addInitScript(() => {
          localStorage.setItem('stb-campus', JSON.stringify('k1'));
          localStorage.setItem('stb-k1-fach', JSON.stringify('ao'));
        });
        const page = await context.newPage();
        page.setDefaultTimeout(20000);
        const errors = [];
        page.on('pageerror', e => errors.push(e.message));
        try {
          await page.goto(process.env.ENDRISS_TEST_URL || 'http://127.0.0.1:4173', { waitUntil: 'networkidle' });
          await page.getByRole('button', { name: 'Prüfschema', exact: true }).first().click();
          const route = page.locator('#ao-schema-fgo [data-endriss-fgo-fahrtroute="12"]');
          await route.waitFor({ state: 'visible' });
          assert.equal(await route.locator('[data-fgo-step]').count(), 12);
          for (const step of steps) {
            const text = await route.locator(`[data-fgo-step="${step.nummer}"]`).innerText();
            assert.ok(text.includes(step.norm));
            assert.ok(text.includes(step.titel));
            for (const note of step.notizen) assert.ok(text.includes(note));
          }
          await route.locator('[data-fgo-step="11"]').scrollIntoViewIfNeeded();
          await page.screenshot({ path: path.join(out, `fgo-stations11-12-${viewport.width}.png`) });
          const size = await route.evaluate(el => ({ client: el.clientWidth, scroll: el.scrollWidth }));
          assert.ok(size.scroll <= size.client + 2, `FGO component overflow: ${JSON.stringify(size)}`);
          assert.deepEqual(errors, [], 'Browser JavaScript error');
          report.checks.push(`real AO schema navigation and twelve source stations at viewport ${viewport.width}`);
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
  report.status = 'failed';
  report.error = error.stack || String(error);
  process.exitCode = 1;
} finally {
  report.finishedAt = new Date().toISOString();
  fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
}
