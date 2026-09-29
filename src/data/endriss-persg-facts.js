import { persgFacts as basis, persgFactsQuelle as quelle, persgFactsAudit as audit } from './endriss-persg-facts-basis.js';
import { persgFacts11bis14, persgFacts11bis14Evidence } from './endriss-persg-facts-11-14.js';

// Preserve the released PDF1–6 transcript byte-for-byte in the basis module.
// Coverage is cumulative, while every continuation retains its own source pages.
const reviewedPages = [1,2,3,4,5,6,7,8];
export const persgFactsQuelle = { ...quelle, nativePages: reviewedPages, partial: true };
// Only new two-column text comparisons need capped, equal-width columns.
// Numerical ledgers keep their existing one-line layout; previous pages untouched.
const continuation = persgFacts11bis14.map(chapter => ({
  ...chapter,
  bloecke: chapter.bloecke.map(block => block.typ === 'tabelle' && block.spalten.length === 2 && block.quellenart !== 'kontenentwicklung'
    ? { ...block, quellenart: 'textvergleich' } : block),
}));
export const persgFacts = [...basis, ...continuation];
export const persgFactsAudit = {
  ...audit,
  reviewedPages, nativePages: reviewedPages,
  remainingPages: Array.from({ length: 16 }, (_, i) => i + 9),
  sourceComplete: false,
  method: `${audit.method} PDF7–8 also directly reviewed in full-page and enlarged-sheet images: exact GF/vGA and double-tier solutions, mirror balances and PV transfer scheme.`,
  duplicateHandling: `${audit.duplicateHandling} Modules12/13/14/20 are additional navigation targets, not replacement transcripts. Annual rent and absent ownership percentage differ from module14; the source-truncated note on sheet11 is not completed from general knowledge.`,
  pageEvidence: [...audit.pageEvidence, ...persgFacts11bis14Evidence],
};
