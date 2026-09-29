import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { build } from 'esbuild';
import { aoNotfallbuch, aoNotfallbuchAudit } from '../src/data/endriss-ao-notfallbuch.js';
import { endrissNativeQuellen, nativeFor } from '../src/data/endriss-native-register.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = endrissNativeQuellen.find(s => s.id === 'ao-notfallbuch');
assert.ok(source, 'Notfallbuch must be registered');
assert.equal(source.driveId, '1i0ZTLaEYMK2uMqkvu_50s8zV-hpOnQOy');
assert.equal(source.physicalPages, 1);
assert.equal(source.fach, 'ao');
assert.deepEqual(aoNotfallbuchAudit.reviewedPages, [1]);
assert.equal(aoNotfallbuchAudit.legalReview, false);
assert.equal(aoNotfallbuchAudit.ownSolutionsAdded, false);
assert.deepEqual(aoNotfallbuchAudit.mappedCampusTargets, [
  'ao-schema-handbuch','ao-schema-vollstreckung','ao-schema-fgo',
  'ao-schema-haftung','ao-schema-69','ao-schema-71','ao-schema-74'
]);
assert.strictEqual(nativeFor('ao-notfallbuch'), aoNotfallbuch);
assert.equal(aoNotfallbuch.length, 1);
assert.deepEqual(aoNotfallbuch[0].pages, [1]);

const flat = JSON.stringify(aoNotfallbuch);
for (const marker of [
  'Amtliches AO-Handbuch 2025',
  'Weitere kleine Seitenreiter sind teils verdeckt bzw. nicht sicher lesbar.',
  'FGO / Zul. Klage',
  '§ 249 (1) → § 251 (1) → § 361 → § 254 (1) → § 220 → § 259',
  '§ 281 (1) → § 286 → § 263 → § 295 → § 286 (2)'
]) assert.ok(flat.includes(marker), `Notfallbuch source marker missing: ${marker}`);

const schema = fs.readFileSync(path.join(root, 'src/components/AOPruefschema.jsx'), 'utf8');
for (const target of aoNotfallbuchAudit.mappedCampusTargets) {
  assert.ok(schema.includes(target), `Mapped AO/FGO campus target missing: ${target}`);
}

const temporary = fs.mkdtempSync(path.join(root, '.endriss-notfallbuch-render-'));
try {
  const output = path.join(temporary, 'components.mjs');
  await build({
    entryPoints:[path.join(root,'src/components/EndrissNachtraege.jsx')],
    outfile:output,bundle:true,platform:'node',format:'esm',target:'node22',
    packages:'external',jsx:'transform',loader:{'.js':'jsx','.css':'empty'},
    define:{'import.meta.env.BASE_URL':JSON.stringify('/steuerberater/')},logLevel:'warning'
  });
  const { default: Overview, EndrissDokument } = await import((await import('node:url')).pathToFileURL(output).href);
  const overview = renderToStaticMarkup(React.createElement(Overview,{fach:'ao'}));
  assert.ok(overview.includes('data-endriss-source="ao-notfallbuch"'), 'Notfallbuch missing from AO native overview');
  const html = renderToStaticMarkup(React.createElement(EndrissDokument,{quelle:source,zurueck:()=>{}}));
  assert.ok(html.includes('data-endriss-source="ao-notfallbuch"'));
  assert.ok(html.includes('Notfallbuch AO/FGO'));
  assert.ok(html.includes('Keine Rechtsstandsprüfung'));
  assert.equal((html.match(/<table\\b/g)||[]).length, 3);
} finally {
  fs.rmSync(temporary,{recursive:true,force:true});
}
console.log('Endriss Notfallbuch: page 1 source mapping, AO/FGO targets and native AO UI rendering OK; unreadable small tabs remain explicitly unguessed.');
