/* Source-bound acceptance for the explicitly PARTIAL PersG Fact Sheets release.
   --source-assets checks existing image hashes; --browser uses actual Chromium.
   No automatic claim that a later source page was visually read. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'esbuild';
import { persgFacts, persgFactsQuelle as source, persgFactsAudit as audit } from '../src/data/endriss-persg-facts.js';
import { nativeFor, nativeCoverageFor, combineEndrissSources } from '../src/data/endriss-native-register.js';
import { persgModule } from '../src/data/k3-persg-tag1.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'test-results/endriss-persg-facts');
fs.mkdirSync(output, { recursive: true });
const report = { testedCommit: process.env.GITHUB_SHA || null, status: 'running',
  sourceId: source.id, reviewedPages: [1,2,3,4], remainingPages: Array.from({length:20},(_,i)=>i+5),
  legalReview: false, sourceComplete: false, sourceAssets: 'not-requested', browser: 'not-requested', checks: [] };
const ids = [1,2,3,4,6,7,8];
const norm = text => text.replace(/\s+/g, ' ').trim();
const escape = text => text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#x27;');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
let browser;
try {
  assert.equal(source.driveId, '179WkR77_ZOKvZAR4fEICG_IM7nXMYL-5');
  assert.equal(source.physicalPages, 24);
  assert.equal(audit.sourceBytes, 17436897);
  assert.equal(audit.sourceSha256, '28d8a41c60574a73de76381db08742f068faf7b912c414e8f271e09f420c2a67');
  assert.equal(audit.sourceComplete, false);
  assert.equal(audit.legalReview, false);
  assert.equal(audit.ownSolutionsAdded, false);
  assert.equal(source.partial, true);
  assert.equal(nativeFor(source.id), persgFacts);
  assert.deepEqual(audit.reviewedPages, [1,2,3,4]);
  assert.deepEqual(source.nativePages, [1,2,3,4]);
  assert.deepEqual(audit.nativePages, [1,2,3,4]);
  assert.deepEqual(audit.remainingPages, report.remainingPages);
  assert.deepEqual(persgFacts.map(chapter => chapter.pages), [[1],[2],[2],[3],[3],[4],[4]]);
  assert.deepEqual(persgFacts.flatMap(chapter => chapter.printedSheets), [1,2,3,4,5,6]);
  assert.deepEqual(audit.pageEvidence.map(page => page.page), [1,2,3,4]);
  for (const page of audit.pageEvidence) {
    assert.deepEqual(page.chapters, persgFacts.filter(chapter => chapter.pages.includes(page.page)).map(chapter => chapter.id));
  }
  assert.deepEqual([...new Set(persgFacts.flatMap(chapter => chapter.campusModules))], ids);
  for (const id of ids) assert.ok(persgModule.some(module => module.id === id), `Missing actual module ${id}`);
  for (const published of [null, [], [{id:source.id, physicalPages:4, nativePages:Array.from({length:24},(_,i)=>i+1), partial:false, importedPages:24}]]) {
    const combined = combineEndrissSources(published).find(item => item.id === source.id);
    assert.equal(combined.physicalPages, 24);
    assert.equal(combined.partial, true);
    assert.deepEqual(combined.nativePages, [1,2,3,4]);
  }
  assert.deepEqual(nativeCoverageFor(source.id), {pages:[1,2,3,4],remaining:report.remainingPages,total:24,partial:true});
  assert.equal(nativeCoverageFor('not-registered'), null);
  const scheme = persgFacts[2].bloecke.find(block => block.typ === 'tabelle');
  assert.deepEqual(scheme.spalten, ['Gewinnermittlung','Vorspalte','A','B','Gesellschaft']);
  assert.equal(scheme.zeilen.length, 17);
  assert.deepEqual(scheme.zeilen[11], ['Gewinn lt. Ergänzungsbilanz','','+/− …………','+/− …………','+/− …………']);
  assert.deepEqual(scheme.zeilen[16], ['Gewinn der Mitunternehmerschaft','','','','= …………']);
  assert.deepEqual(persgFacts.map(chapter => chapter.bloecke.filter(block => block.typ === 'tabelle').length), [1,2,1,1,2,3,1]);
  const flat = JSON.stringify(persgFacts);
  for (const text of ['Stand: April 2025', 'Gesamtr.nf', 'Buchwertabfindung unschädlich', 'Nr. 1 i.V.m. Nr. 2 EStG',
    'Stufe I – Gesellschaft', 'Stufe II – Gesellschafter', 'anders gegliederte Darstellung im vorhandenen Lernmodul 4',
    '100.000 €', '95.000', '5.000', '50.000', 'Urlaubs-RS', 'BFH VIII R 15/96', 'zu ½ SBV OHG',
    'keine Teilwertabschreibung', 'unentgeltliche Überlassung, da keine Gewinnerzielungsabsicht']) assert.ok(flat.includes(text), `Missing source detail: ${text}`);
  assert.ok(!/\b(?:watermark|Wasserzeichen)\s*[:=]\s*[^\s]/i.test(flat), 'No personal delivery watermark');
  report.checks.push('exact partial source identity/coverage', 'all seven existing module targets', 'blank five-column calculation and source discrepancy', 'source figures, rental edges and pension notes', 'image metadata cannot promote completion');

  if (process.argv.includes('--source-assets')) {
    const manifest = JSON.parse(fs.readFileSync(path.join(root,'public/endriss/quellen/sources/persg-facts.json'),'utf8'));
    assert.equal(manifest.sha256, audit.sourceSha256);
    assert.equal(manifest.sourceBytes, audit.sourceBytes);
    assert.equal(manifest.physicalPages,24);
    assert.equal(manifest.pages.length,24);
    for (const number of [1,2,3,4]) {
      const page = manifest.pages.find(item => item.page === number);
      assert.match(page.image, /^images\/[a-f0-9]+\.(webp|png|jpg)$/);
      assert.equal(hash(fs.readFileSync(path.join(root,'public/endriss/quellen',page.image))),page.imageSha256);
    }
    report.sourceAssets = 'passed-four-reviewed-page-hashes';
  }
  const temporary = fs.mkdtempSync(path.join(root,'.endriss-persg-facts-'));
  try {
    const target = path.join(temporary,'component.mjs');
    await build({entryPoints:[path.join(root,'src/components/EndrissNachtraege.jsx')],outfile:target,bundle:true,
      platform:'node',format:'esm',target:'node22',packages:'external',jsx:'transform',loader:{'.js':'jsx','.css':'empty'},
      define:{'import.meta.env.BASE_URL':JSON.stringify('/steuerberater/')},logLevel:'warning'});
    const {default:Overview,EndrissDokument} = await import(pathToFileURL(target).href);
    const overview = renderToStaticMarkup(React.createElement(Overview,{fach:'persg'}));
    assert.ok(overview.includes('data-endriss-partial="persg-facts"'));
    const html = renderToStaticMarkup(React.createElement(EndrissDokument,{quelle:source,zurueck:()=>{},onModulOeffnen:()=>{}}));
    assert.ok(html.includes('data-endriss-native-coverage="4/24"'));
    assert.ok(!html.includes('<img'), 'Original must remain lazy');
    for (const chapter of persgFacts) {
      for (const block of chapter.bloecke) {
        const texts = block.typ === 'tabelle' ? [...block.spalten,...block.zeilen.flat()] : [block.text];
        for (const text of texts.filter(Boolean)) assert.ok(norm(html).includes(norm(escape(text))), `Not rendered: ${text}`);
      }
    }
    for (const id of ids) assert.ok(html.includes(`data-endriss-modul="${id}"`));
    assert.equal((html.match(/<table\b/g)||[]).length,11);
    report.checks.push('React renders every transcribed text and all table cells, module buttons and partial notice');
  } finally { fs.rmSync(temporary,{recursive:true,force:true}); }

  if (process.argv.includes('--browser')) {
    const requireSocial = createRequire(path.join(root,'social/package.json'));
    const {chromium} = requireSocial('playwright');
    browser = await chromium.launch({headless:true});
    for (const width of [1280,390]) {
      const context = await browser.newContext({viewport:{width,height:900}});
      const page = await context.newPage();
      page.setDefaultTimeout(20000);
      const errors = []; page.on('pageerror',error=>errors.push(error.message));
      await page.addInitScript(()=>{
        localStorage.setItem('stb-campus',JSON.stringify('k3'));
        localStorage.setItem('stb-k3-fach',JSON.stringify('persg'));
        localStorage.setItem('stb-k3-persg-erledigt',JSON.stringify([1,7]));
      });
      try {
        await page.goto(process.env.ENDRISS_TEST_URL || 'http://127.0.0.1:4173',{waitUntil:'networkidle'});
        const campus = page.locator('.persg-campus');
        const openFacts = async () => {
          await campus.getByRole('button',{name:'Hausaufgaben PersG',exact:true}).click();
          await campus.getByRole('button',{name:'Fact Sheets (Horst) öffnen',exact:true}).click();
          await campus.locator('[data-endriss-native-coverage="4/24"]').waitFor({state:'visible'});
        };
        await openFacts();
        const article = campus.locator('article[data-endriss-source="persg-facts"]');
        assert.equal(await article.locator('.endriss-kapitel').count(),7);
        assert.equal(await article.locator('table').count(),11);
        for (const chapter of persgFacts) assert.ok((await article.innerText()).includes(chapter.title));
        await article.getByLabel('Zu einem Textabschnitt springen').selectOption('persg-facts-02');
        await page.waitForFunction(()=>document.activeElement === document.querySelector('#persg-facts-02 > summary'));
        const screen = await page.evaluate(()=>({viewport:document.documentElement.clientWidth,body:document.documentElement.scrollWidth}));
        assert.ok(screen.body <= screen.viewport+2, `Viewport overflow ${JSON.stringify(screen)}`);
        await page.screenshot({path:path.join(output,`calculation-${width}.png`)});
        for (const id of ids) {
          await article.locator(`[data-endriss-modul="${id}"]`).first().click();
          const heading = campus.locator('main.page h1').first();
          await heading.filter({hasText:persgModule.find(module=>module.id===id).title}).waitFor({state:'visible'});
          assert.equal(await heading.innerText(),persgModule.find(module=>module.id===id).title);
          assert.deepEqual(await page.evaluate(()=>JSON.parse(localStorage.getItem('stb-k3-persg-erledigt'))),[1,7]);
          await openFacts();
        }
        await article.getByRole('button',{name:'← Zurück zu den PersG-Hausaufgaben',exact:true}).click();
        await campus.getByRole('heading',{name:'PersG-Hausaufgaben 2026/2027',exact:true}).waitFor({state:'visible'});
        // Independent global source path works even with a missing image inventory.
        await page.route('**/endriss/quellen/index.json',route=>route.fulfill({status:200,contentType:'application/json',body:'{"sources":[]}'}));
        await page.getByRole('button',{name:'Unterlagen-Nachträge',exact:true}).click();
        await page.getByLabel('Quelle oder übertragenen Text suchen').fill('Urlaubs-RS');
        const card = page.locator('button.endriss-quellenkarte[data-endriss-source="persg-facts"]');
        await card.waitFor({state:'visible'});
        assert.ok((await card.innerText()).includes('4 von 24'));
        await card.click();
        await page.locator('.endriss-arbeitsraum [data-endriss-native-coverage="4/24"]').waitFor({state:'visible'});
        await page.screenshot({path:path.join(output,`partial-overview-${width}.png`)});
        assert.deepEqual(errors,[]);
        report.checks.push(`Chromium ${width}: real PersG entry, all seven working module links, preserved progress, five-column viewport, keyboard chapter jump, global native search without image index`);
      } catch(error) {
        await page.screenshot({path:path.join(output,`failure-${width}.png`)}).catch(()=>{});
        throw error;
      } finally { await context.close(); }
    }
    report.browser='passed';
  }
  report.status='passed';
} catch(error) {
  report.status='failed'; report.error=error.stack || String(error); process.exitCode=1;
} finally {
  if (browser) await browser.close();
  report.finishedAt=new Date().toISOString();
  fs.writeFileSync(path.join(output,'report.json'),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify(report,null,2));
}
