import { persgFacts as basis, persgFactsQuelle as quelle, persgFactsAudit as audit } from './endriss-persg-facts-basis.js';
import { persgFacts11bis14, persgFacts11bis14Evidence } from './endriss-persg-facts-11-14.js';

import { persgFacts15bis18, persgFacts15bis18Evidence } from './endriss-persg-facts-15-18.js';

import { persgFacts19bis22, persgFacts19bis22Evidence } from './endriss-persg-facts-19-22.js';
import { persgFacts23bis26, persgFacts23bis26Evidence } from './endriss-persg-facts-23-26.js';
import { persgFacts27bis30, persgFacts27bis30Evidence } from './endriss-persg-facts-27-30.js';
import { persgFacts31bis34, persgFacts31bis34Evidence } from './endriss-persg-facts-31-34.js';

// Preserve the released PDF1–6 transcript byte-for-byte in the basis module.
// Coverage is cumulative, while every continuation retains its own source pages.
const reviewedPages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
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
// Derive block provenance from each directly verified source chapter.
const latest = persgFacts19bis22.map(chapter => ({
  ...chapter, bloecke: chapter.bloecke.map(block => ({
    ...block, quellenSeiten: [...chapter.pages],
    ...((block.quellenart === 'textvergleich' || block.text?.includes('\n')) ? { quellenZeilen: true } : {}),
  })),
}));
export const persgFacts = [...basis, ...continuation, ...persgFacts15bis18, ...latest, ...persgFacts23bis26, ...persgFacts27bis30, ...persgFacts31bis34];
export const persgFactsAudit = {
  ...audit,
  reviewedPages, nativePages: reviewedPages,
  remainingPages: Array.from({ length: 6 }, (_, i) => i + 19),
  sourceComplete: false,
  method: `${audit.method} PDF7–8 also directly reviewed in full-page and enlarged-sheet images: exact GF/vGA and double-tier solutions, mirror balances and PV transfer scheme. PDF9–10 directly reviewed as full-page and enlarged sheets15–18: original PV calculations, BV transfer paths, deadlines and all four formation columns. PDF11–12 and four enlarged sheets19–22 directly read: section24 structure, application notes, six book-value balances and market-value succession/calculation. Source-truncated sentence and covered balance digits remain explicit. PDF13–14 and enlarged sheets23–26 directly read: intermediate valuation/three-step depreciation, both succession calculations, admission with separate elections and PV-payment alternatives. Original rounding and incomplete last note preserved. PDF15–16 and enlarged sheets27–30 directly read, including rotated warning note: original getilgt continuation, exit overview, above/below-book-value examples, ledgers, crossed fields and AfA. Sheet30 SBV note stops at zusätzlich and stays incomplete. PDF17–18 directly read as whole images and enlarged sheets31–34: actual below-book-value alternative2 with unevaluated AfA fractions, both section6b elections, sparse reinvestment continuation and complete two-step Sachwert example. Sticky note32ends at der; original rounding, captions and contradictory introductory equality are retained.`,
  duplicateHandling: `${audit.duplicateHandling} Modules12/13/14/20 are additional navigation targets, not replacement transcripts. Annual rent and absent ownership percentage differ from module14; the source-truncated note on sheet11 is not completed from general knowledge. Modules22/23/24/25/26/27/29/30 are concrete links for PDF9–10. Original abbreviated bookings, GrESt, heading/list deadline differences and incomplete52(21b citation remain visible; no source solution inferred from those modules. Modules31/32/33/34/37 link the new original24UmwStG material; the different600000/300000example in modules33/34 never replaces the original150000/100000example. The separate fully readable sheet22balance does not retroactively certify hidden digits on sheet21. Module36 is linked as an additional intermediate-value learning target, but its350000example never replaces the original35000disclosure. Modules30/32/33/34/37 link admission, valuation and balance technique; no new legal solution is supplied by those links. Existing modules39–42 link exit law, balance technique and AfA. The similar module40 overview does not replace the source tables; different module41/42 cases do not fill any missing source solution. Module44 additionally links only the original unechte-Realteilung variant; no learning-module solution is copied into the source. Similar opening ledgers in31 and30 belong to different alternatives. The source-specific section6b and50000Sachwert examples remain separate from larger module41/42cases.`,
  pageEvidence: [...audit.pageEvidence, ...persgFacts11bis14Evidence, ...persgFacts15bis18Evidence, ...persgFacts19bis22Evidence, ...persgFacts23bis26Evidence, ...persgFacts27bis30Evidence, ...persgFacts31bis34Evidence],
  resolvedSourceContinuations: [{ fromPage: 14, fromPrintedSheet: 26, toPage: 15, toPrintedSheet: 27, originalEnding: 'wird mit Zuzahlung', continuation: 'getilgt', earlierChapterPreserved: true }],
};
