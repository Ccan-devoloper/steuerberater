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
      await article.locator('[data-endriss-native-coverage="8/24"]').waitFor({state:'visible'});
      // Preserve both earlier layout checks and cover every new native table.
      for (const [id, expectedTables] of Object.entries({'persg-facts-02':1,'persg-facts-05':3,'persg-facts-08':2,'persg-facts-09':2,'persg-facts-10':3,'persg-facts-11':3,'persg-facts-12':2,'persg-facts-13':7,'persg-facts-14':2})) {
        await article.getByLabel('Zu einem Textabschnitt springen').selectOption(id);
        await page.waitForFunction(id=>{
          const chapter = document.getElementById(id);
          const rect = chapter?.getBoundingClientRect();
          return chapter?.open && document.activeElement === chapter.querySelector('summary') && rect.top >= -2 && rect.top < innerHeight;
        },id,{timeout:5000});
        const regions = article.locator(`#${id} .endriss-facts-scroll`);
        assert.equal(await regions.count(), expectedTables);
        for (let i=0;i<await regions.count();i++) {
          const region = regions.nth(i);
          assert.equal(await region.getAttribute('tabindex'),'0');
          assert.equal(await region.getAttribute('role'),'region');
          const metrics = await region.evaluate(el=>({client:el.clientWidth,scroll:el.scrollWidth,wrap:getComputedStyle(el.querySelector('tbody th')).overflowWrap}));
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
        }
        const dimensions = await page.evaluate(()=>({available:document.documentElement.clientWidth,actual:document.documentElement.scrollWidth}));
        assert.ok(dimensions.actual <= dimensions.available+2, `Page overflow after chapter jump: ${JSON.stringify(dimensions)}`);
        report.checks.push({viewport:width,chapter:id,focusAndScroll:'passed',tableRegions:await regions.count(),keyboardAndLastColumn:'passed'});
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
