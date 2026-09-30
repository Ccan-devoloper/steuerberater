import { persgFacts as basis, persgFactsQuelle as quelle, persgFactsAudit as audit } from './endriss-persg-facts-basis.js';
import { persgFacts11bis14, persgFacts11bis14Evidence } from './endriss-persg-facts-11-14.js';

import { persgFacts15bis18, persgFacts15bis18Evidence } from './endriss-persg-facts-15-18.js';

// Preserve the released PDF1–6 transcript byte-for-byte in the basis module.
// Coverage is cumulative, while every continuation retains its own source pages.
const reviewedPages = [1,2,3,4,5,6,7,8,9,10];
export const persgFactsQuelle = { ...quelle, nativePages: reviewedPages, partial: true };
// Layout metadata applies only to the new continuation, never the released basis.
// Text columns must fit the scroll viewport; the small capital ledger stays numeric.
const continuation = persgFacts11bis14.map(chapter => ({
  ...chapter,
  bloecke: chapter.bloecke.map(block => {
    if (block.typ !== 'tabelle') return block;
    if (block.quellenart === 'kontenentwicklung') return block.spalten.length === 2
      ? { ...block, quellenlayout: 'kapitalpaar' } : block;
    return [2,3].includes(block.spalten.length) ? { ...block, quellenart: 'textvergleich' } : block;
  }),
}));
export const persgFacts = [...basis, ...continuation, ...persgFacts15bis18];
export const persgFactsAudit = {
  ...audit,
  reviewedPages, nativePages: reviewedPages,
  remainingPages: Array.from({ length: 14 }, (_, i) => i + 11),
  sourceComplete: false,
  method: `${audit.method} PDF7–8 also directly reviewed in full-page and enlarged-sheet images: exact GF/vGA and double-tier solutions, mirror balances and PV transfer scheme. PDF9–10 directly reviewed as full-page and enlarged sheets15–18: original PV calculations, BV transfer paths, deadlines and all four formation columns.`,
  duplicateHandling: `${audit.duplicateHandling} Modules12/13/14/20 are additional navigation targets, not replacement transcripts. Annual rent and absent ownership percentage differ from module14; the source-truncated note on sheet11 is not completed from general knowledge. Modules22/23/24/25/26/27/29/30 are concrete links for PDF9–10. Original abbreviated bookings, GrESt, heading/list deadline differences and incomplete52(21b citation remain visible; no source solution inferred from those modules.`,
  pageEvidence: [...audit.pageEvidence, ...persgFacts11bis14Evidence, ...persgFacts15bis18Evidence],
};
