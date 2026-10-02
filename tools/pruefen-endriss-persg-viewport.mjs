/* Actual chapter visibility and all source-table columns, including keyboard
   horizontal scrolling. Manual inspection of the first passing run found that
   the inherited mobile table CSS fragmented words; this gate now covers it. */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'test-results/endriss-persg-facts');
fs.mkdirSync(output, {recursive:true});
const {chromium} = createRequire(path.join(root,'social/package.json'))('playwright');
const browser = await chromium.launch({headless:true});
const report = {testedCommit:process.env.GITHUB_SHA || null,status:'running',checks:[],legalReview:false};
// Measure each explicit original newline, not just DOM text or a CSS class.
const sourceLineMetrics = elements => elements.filter(el => el.textContent.includes('\n')).map(el => {
  const text = el.textContent;
  const node = el.firstChild;
  const pairs = [];
  if (el.childNodes.length !== 1 || node.nodeType !== Node.TEXT_NODE) return {text,error:'Expected one source text node'};
  for (let i=0;i<text.length;i++) if (text[i] === '\n') {
    let before=i-1, after=i+1;
    while (before>=0 && /\s/.test(text[before])) before--;
    while (after<text.length && /\s/.test(text[after])) after++;
    if (before<0 || after>=text.length) continue;
    const left=document.createRange(); left.setStart(node,before); left.setEnd(node,before+1);
    const right=document.createRange(); right.setStart(node,after); right.setEnd(node,after+1);
    pairs.push({before:left.getBoundingClientRect().top,after:right.getBoundingClientRect().top});
  }
  return {text,whiteSpace:getComputedStyle(el).whiteSpace,align:getComputedStyle(el).textAlign,pairs};
});
const assertSourceLines = metrics => {
  let checked=0;
  for (const item of metrics) {
    assert.ok(!item.error, item.error);
    assert.equal(item.whiteSpace,'pre-line','Source list line breaks must survive rendering');
    assert.equal(item.align,'left','Source lists should remain left aligned');
    assert.ok(item.pairs.length>0);
    for (const pair of item.pairs) {
      assert.ok(pair.after>pair.before+1, `Collapsed original newline: ${item.text}`);
      checked++;
    }
  }
  return checked;
};
try {
  for (const width of [1280,390]) {
    const context = await browser.newContext({viewport:{width,height:900}});
    const page = await context.newPage();
    page.setDefaultTimeout(20000);
    await page.addInitScript(()=>{
      localStorage.setItem('stb-campus',JSON.stringify('k3'));
      localStorage.setItem('stb-k3-fach',JSON.stringify('persg'));
    });
    try {
      await page.goto(process.env.ENDRISS_TEST_URL || 'http://127.0.0.1:4173',{waitUntil:'networkidle'});
      const campus = page.locator('.persg-campus');
      await campus.getByRole('button',{name:'Hausaufgaben PersG',exact:true}).click();
      await campus.getByRole('button',{name:'Fact Sheets (Horst) öffnen',exact:true}).click();
      const article = campus.locator('article[data-endriss-source="persg-facts"]');
      await article.locator('[data-endriss-native-coverage="20/24"]').waitFor({state:'visible'});
      // Preserve both earlier layout checks and cover every new native table.
      for (const [id, expectedTables] of Object.entries({'persg-facts-02':1,'persg-facts-05':3,'persg-facts-08':2,'persg-facts-09':2,'persg-facts-10':3,'persg-facts-11':3,'persg-facts-12':2,'persg-facts-13':7,'persg-facts-14':2,'persg-facts-15':8,'persg-facts-16':5,'persg-facts-17':3,'persg-facts-18':4,'persg-facts-19':4,'persg-facts-20':2,'persg-facts-21':9,'persg-facts-22':7,'persg-facts-23':7,'persg-facts-24':5,'persg-facts-25':6,'persg-facts-26':9,'persg-facts-27':0,'persg-facts-28':7,'persg-facts-29':7,'persg-facts-30':6,'persg-facts-31':6,'persg-facts-32':5,'persg-facts-33':0,'persg-facts-34':7,'persg-facts-35':1,'persg-facts-36':7,'persg-facts-37':6,'persg-facts-38':9})) {
        await article.getByLabel('Zu einem Textabschnitt springen').selectOption(id);
        await page.waitForFunction(id=>{
          const chapter = document.getElementById(id);
          const rect = chapter?.getBoundingClientRect();
          return chapter?.open && document.activeElement === chapter.querySelector('summary') && rect.top >= -2 && rect.top < innerHeight;
        },id,{timeout:5000});
        if (id === 'persg-facts-27') {
          const sparse = article.locator(`#${id}`);
          assert.ok((await sparse.innerText()).includes('getilgt'));
          assert.ok((await sparse.innerText()).includes('neg. Kontokorrent'));
          await sparse.evaluate(el=>el.scrollIntoView({block:'center',behavior:'instant'}));
          await sparse.screenshot({path:path.join(output,`${id}-sparse-${width}.png`)});
        }
        if (id === 'persg-facts-33') {
          const sparse = article.locator(`#${id}`);
          assert.ok((await sparse.innerText()).includes('im Zeitpunkt der Reinvestition'));
          assert.equal(await sparse.locator('table').count(),0, 'Do not invent a calculation on sparse sheet33');
          await sparse.evaluate(el=>el.scrollIntoView({block:'center',behavior:'instant'}));
          await sparse.screenshot({path:path.join(output,`${id}-sparse-${width}.png`)});
        }
        let sourceLineBreaks=0;
        const paragraphs=article.locator(`#${id} .endriss-facts-source-lines > .istr-ha-absatz`);
        sourceLineBreaks += assertSourceLines(await paragraphs.evaluateAll(sourceLineMetrics));
        for (let n=0;n<await paragraphs.count();n++) {
          await paragraphs.nth(n).evaluate(el=>el.scrollIntoView({block:'center',behavior:'instant'}));
          await paragraphs.nth(n).screenshot({path:path.join(output,`${id}-source-lines-${n}-${width}.png`)});
        }
        const regions = article.locator(`#${id} .endriss-facts-scroll`);
        assert.equal(await regions.count(), expectedTables);
        for (let i=0;i<await regions.count();i++) {
          const region = regions.nth(i);
          // Native tables can be scrolled vertically away from the fixed global
          // navigation. Capture their centered, unobscured reading position;
          // never hide the navigation just to manufacture clean screenshots.
          await region.evaluate(el=>el.scrollIntoView({block:'center',inline:'nearest',behavior:'instant'}));
          assert.equal(await region.getAttribute('tabindex'),'0');
          assert.equal(await region.getAttribute('role'),'region');
          const metrics = await region.evaluate(el=>({client:el.clientWidth,scroll:el.scrollWidth,wrap:getComputedStyle(el.querySelector('tbody th')).overflowWrap}));
          if (width === 1280 && await region.locator('table.endriss-facts-textquad').count()) {
            assert.ok(metrics.scroll <= metrics.client+2, 'All four formation columns must fit the desktop reader');
          }
          assert.equal(metrics.wrap,'normal','Technical words must not be fragmented anywhere');
          if (await region.locator('table.endriss-facts-ledger').count()) {
            assert.equal(await region.locator('table.endriss-facts-ledger').count(),1);
            const amounts = await region.locator('tbody td').evaluateAll(cells => cells.map(cell => {
              const range = document.createRange(); range.selectNodeContents(cell);
              return {text:cell.textContent,whiteSpace:getComputedStyle(cell).whiteSpace,lines:range.getClientRects().length};
            }));
            for (const amount of amounts.filter(item => item.text.trim())) {
              assert.equal(amount.whiteSpace,'nowrap', `Ledger amount may wrap: ${amount.text}`);
              assert.equal(amount.lines,1, `Sign, amount and currency must stay together: ${amount.text}`);
            }
          }
          sourceLineBreaks += assertSourceLines(await region.locator('table.endriss-facts-source-lines tbody th, table.endriss-facts-source-lines tbody td').evaluateAll(sourceLineMetrics));
          await region.screenshot({path:path.join(output,`${id}-table-${i}-${width}-left.png`)});
          if (metrics.scroll > metrics.client+2) {
            await region.focus();
            await page.keyboard.press('ArrowRight');
            await page.waitForFunction(({id,i})=>document.querySelectorAll(`#${id} .endriss-facts-scroll`)[i].scrollLeft > 0,{id,i},{timeout:3000});
            // Test the observable rightmost column, not just DOM text presence.
            await region.evaluate(el=>{el.scrollLeft=el.scrollWidth;});
            await page.waitForFunction(({id,i})=>{
              const el=document.querySelectorAll(`#${id} .endriss-facts-scroll`)[i];
              const cell=el.querySelector('thead th:last-child').getBoundingClientRect();
              const box=el.getBoundingClientRect();
              return cell.left>=box.left-2 && cell.right<=box.right+2;
            },{id,i},{timeout:3000});
            await region.screenshot({path:path.join(output,`${id}-table-${i}-${width}-right.png`)});
          }
          if (Number(id.split('-').at(-1)) >= 11) {
            const visibleLastCell = await region.evaluate(el => {
              const box = el.getBoundingClientRect();
              const cell = el.querySelector('tbody tr:last-child > :last-child');
              const rect = cell.getBoundingClientRect();
              const x=(rect.left+rect.right)/2, y=(rect.top+rect.bottom)/2;
              const hit=document.elementFromPoint(x,y);
              return {mode:'centered-table',passed:box.top >= 0 && box.bottom <= innerHeight && !!hit && cell.contains(hit),text:cell.textContent};
            });
            assert.ok(visibleLastCell.passed, `Final source cell obscured: ${id}/${i} ${JSON.stringify(visibleLastCell)}`);
          }
        }
        const dimensions = await page.evaluate(()=>({available:document.documentElement.clientWidth,actual:document.documentElement.scrollWidth}));
        assert.ok(dimensions.actual <= dimensions.available+2, `Page overflow after chapter jump: ${JSON.stringify(dimensions)}`);
        assert.equal(sourceLineBreaks, ({'persg-facts-19':2,'persg-facts-20':8,'persg-facts-21':4,'persg-facts-22':6,'persg-facts-23':9,'persg-facts-24':7,'persg-facts-25':9,'persg-facts-26':1,'persg-facts-27':0,'persg-facts-28':5,'persg-facts-29':4,'persg-facts-30':9,'persg-facts-31':1,'persg-facts-32':5,'persg-facts-33':0,'persg-facts-34':7,'persg-facts-35':9,'persg-facts-36':5,'persg-facts-37':7,'persg-facts-38':2})[id] || 0, 'Every original list break in the new package must be tested');
        report.checks.push({viewport:width,chapter:id,focusAndScroll:'passed',tableRegions:await regions.count(),keyboardAndLastColumn:'passed',sourceLineBreaks});
      }
    } catch(error) {
      await page.screenshot({path:path.join(output,`viewport-failure-${width}.png`)}).catch(()=>{});
      throw error;
    } finally { await context.close(); }
  }
  report.status='passed';
} catch(error) {
  report.status='failed';report.error=error.stack || String(error);process.exitCode=1;
} finally {
  await browser.close();
  fs.writeFileSync(path.join(output,'viewport-report.json'),JSON.stringify(report,null,2)+'\n');
  console.log(JSON.stringify(report,null,2));
}
