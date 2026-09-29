import { endrissHandschriften, endrissHandschriftenAudit } from './endriss-handschriften.js';
import { persgHorstFolien1, persgHorstFolienAudit } from './endriss-persg-horst-folien.js';
import { persgHorstFolien2, persgHorstFassung2Audit } from './endriss-persg-horst-fassung2.js';
import { aoNotfallbuch, aoNotfallbuchAudit } from './endriss-ao-notfallbuch.js';
import { endrissFGO, endrissFGOAudit } from './endriss-fgo.js';
import { persgFacts, persgFactsQuelle, persgFactsAudit } from './endriss-persg-facts.js';

/* A source is registered only after its native text actually exists, either
   directly or through an explicit, visually verified page-to-content mapping.
   Image publication and reading/transcription completion remain separate. */
export const endrissNative = {
  ...endrissHandschriften,
  'persg-folien-1': persgHorstFolien1,
  'persg-folien-2': persgHorstFolien2,
  'ao-notfallbuch': aoNotfallbuch,
  'ao-fgo': endrissFGO,
  'persg-facts': persgFacts,
};
export const endrissNativeAudit = {
  ...endrissHandschriftenAudit,
  'persg-folien-1': persgHorstFolienAudit,
  'persg-folien-2': persgHorstFassung2Audit,
  'ao-notfallbuch': aoNotfallbuchAudit,
  'ao-fgo': endrissFGOAudit,
  'persg-facts': persgFactsAudit,
};
export const endrissNativeQuellen = [
  { id:'istr-hinzurechnung', title:'Beispiel Hinzurechnungsbesteuerung', fach:'istr', art:'mitschrift', driveId:'1VAZgmlSjnr_IZqs7Tf8bNxB2vJj8Mc99', physicalPages:4 },
  { id:'lst-mitschrift', title:'Lohnsteuervideo · Mitschrift', fach:'est', art:'mitschrift', driveId:'1_pq7S0hPgWxnJb92toX_iS43YfSUd3Li', physicalPages:24 },
  { id:'lst-korrektur', title:'Korrektur der letzten Lohnsteuerberechnung', fach:'est', art:'mitschrift', driveId:'1c3sKXOHq10Hc64yEtQ2pWvJiEvoBiYWW', physicalPages:1 },
  { id:'persg-folien-1', title:'PersG-Folien (Horst) · Fassung 1', fach:'persg', art:'folien', driveId:'1hJix2yF-IIb7laLgKG0sRog24c_POqZX', physicalPages:16 },
  { id:'persg-folien-2', title:'PersG-Folien (Horst) · Fassung 2', fach:'persg', art:'folien', driveId:'1UKzwT0Pu7slpR8XpzKQN_d0waycqELOn', physicalPages:16, canonicalSourceId:'persg-folien-1' },
  { id:'ao-notfallbuch', title:'Notfallbuch AO/FGO', fach:'ao', art:'mitschrift', driveId:'1i0ZTLaEYMK2uMqkvu_50s8zV-hpOnQOy', physicalPages:1 },
  { id:'ao-fgo', title:'FGO · Fähnchenkette und markierter Gesetzesauszug', fach:'ao', art:'mitschrift', driveId:'1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj', physicalPages:37 },
  persgFactsQuelle,
];
export const nativeFor = id => endrissNative[id] || [];
export function combineEndrissSources(published) {
  const sources = new Map(endrissNativeQuellen.map(s => [s.id, { ...s }]));
  for (const source of Array.isArray(published) ? published : []) {
    // Images cannot overwrite source identity or promote partial native coverage.
    const native = endrissNativeQuellen.find(item => item.id === source.id);
    sources.set(source.id, { ...source, ...native });
  }
  return [...sources.values()];
}

// Derive display coverage from native chapters, never from the image inventory.
// This is a page-transfer count, not a whole-source legibility certification.
export function nativeCoverageFor(id) {
  const source = endrissNativeQuellen.find(item => item.id === id);
  if (!source) return null;
  const pages = [...new Set(nativeFor(id).flatMap(chapter => chapter.pages))].sort((a,b) => a-b);
  const remaining = Array.from({ length: source.physicalPages }, (_, i) => i+1).filter(page => !pages.includes(page));
  return { pages, remaining, total: source.physicalPages, partial: source.partial === true || remaining.length > 0 };
}
