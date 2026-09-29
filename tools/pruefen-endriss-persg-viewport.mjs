/* Verify the observable chapter jump before capturing the actual native tables.
   The first browser run proved focus/navigation but its screenshot was taken
   before smooth scrolling finished. These checks do not replace that run. */
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
      await article.locator('[data-endriss-native-coverage="4/24"]').waitFor({state:'visible'});
      for (const id of ['persg-facts-02','persg-facts-05']) {
        await article.getByLabel('Zu einem Textabschnitt springen').selectOption(id);
        await page.waitForFunction(id=>{
          const chapter = document.getElementById(id);
          const rect = chapter?.getBoundingClientRect();
          return chapter?.open && document.activeElement === chapter.querySelector('summary') && rect.top >= -2 && rect.top < innerHeight;
        },id,{timeout:5000});
        const tables = article.locator(`#${id} table`);
        for (let i=0;i<await tables.count();i++) {
          await tables.nth(i).screenshot({path:path.join(output,`${id}-table-${i}-${width}.png`)});
        }
        const dimensions = await page.evaluate(()=>({available:document.documentElement.clientWidth,actual:document.documentElement.scrollWidth}));
        assert.ok(dimensions.actual <= dimensions.available+2, `Page overflow after chapter jump: ${JSON.stringify(dimensions)}`);
        report.checks.push({viewport:width,chapter:id,focusAndScroll:'passed',tableScreenshots:await tables.count()});
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
