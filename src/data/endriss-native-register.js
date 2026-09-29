import { endrissHandschriften, endrissHandschriftenAudit } from './endriss-handschriften.js';
import { persgHorstFolien1, persgHorstFolienAudit } from './endriss-persg-horst-folien.js';

/* A source is registered only after its native text actually exists. Image
   publication and reading/transcription completion are deliberately separate. */
export const endrissNative = {
  ...endrissHandschriften,
  'persg-folien-1': persgHorstFolien1,
};
export const endrissNativeAudit = {
  ...endrissHandschriftenAudit,
  'persg-folien-1': persgHorstFolienAudit,
};
export const endrissNativeQuellen = [
  { id:'istr-hinzurechnung', title:'Beispiel Hinzurechnungsbesteuerung', fach:'istr', art:'mitschrift', driveId:'1VAZgmlSjnr_IZqs7Tf8bNxB2vJj8Mc99', physicalPages:4 },
  { id:'lst-mitschrift', title:'Lohnsteuervideo · Mitschrift', fach:'est', art:'mitschrift', driveId:'1_pq7S0hPgWxnJb92toX_iS43YfSUd3Li', physicalPages:24 },
  { id:'lst-korrektur', title:'Korrektur der letzten Lohnsteuerberechnung', fach:'est', art:'mitschrift', driveId:'1c3sKXOHq10Hc64yEtQ2pWvJiEvoBiYWW', physicalPages:1 },
  { id:'persg-folien-1', title:'PersG-Folien (Horst) · Fassung 1', fach:'persg', art:'folien', driveId:'1hJix2yF-IIb7laLgKG0sRog24c_POqZX', physicalPages:16 },
];
export const nativeFor = id => endrissNative[id] || [];
export function combineEndrissSources(published) {
  const sources = new Map(endrissNativeQuellen.map(s => [s.id, { ...s }]));
  for (const source of Array.isArray(published) ? published : []) {
    sources.set(source.id, { ...sources.get(source.id), ...source });
  }
  return [...sources.values()];
}
