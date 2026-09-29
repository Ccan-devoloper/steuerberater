import { fgoErsteSeite } from './endriss-fgo-arbeitsstand.js';
import { fgoGesetzQuelle, fgoSeitenReview } from './endriss-fgo-seitenreview.js';
import { fgoGesetzSeiten } from './endriss-fgo-gesetz.generated.js';

const printedByPage = new Map(fgoGesetzSeiten.map(page => [page.page, page]));
export const endrissFGO = [
  ...fgoErsteSeite,
  ...fgoSeitenReview.map(review => {
    const printed = printedByPage.get(review.page);
    if (!printed) throw new Error(`FGO: Gesetzestext für PDF-Seite ${review.page} fehlt`);
    return {
      id: `endriss-fgo-gesetz-seite-${review.page}`,
      title: `Gesetzesseite ${review.printedPage}/36 · ${review.title}`,
      pages: [review.page],
      normen: review.normen,
      bloecke: [
        { typ: 'text', text: `FGO (2).pdf · tatsächliche PDF-Seite ${review.page}, gedruckte Seite ${review.printedPage} von 36. Der Gesetzesauszug nennt den Änderungsstand 10.03.2023. Keine Rechtsstandsprüfung; spätere Änderungen werden hier nicht eingearbeitet.` },
        ...(review.page === 2 ? [{ typ: 'text', text: 'Herkunft des gedruckten Gesetzesauszugs: Ein Service des Bundesministeriums der Justiz sowie des Bundesamts für Justiz – www.gesetze-im-internet.de. Der sich auf jeder Seite wiederholende Servicekopf ist hier einmal wiedergegeben. Handschrift und Markierungen sind darunter separat ausgewiesen und nicht in den Gesetzeswortlaut hineingeschrieben.' }] : []),
        { typ: 'titel', text: 'Gedruckter Gesetzestext der Quelle' },
        ...printed.blocks.map(block => ({ ...block, quellenSeiten: [review.page], quellenart: 'gesetzestext' })),
        { typ: 'titel', text: 'Handschrift und Markierungen der Quelle' },
        ...(review.notizen.length ? [{
          typ: 'tabelle', quellenart: 'markierungen', quellenSeiten: [review.page],
          spalten: ['Farbe / Form im Original', 'Fundstelle', 'Beschriftung oder hervorgehobener Text'],
          zeilen: review.notizen,
        }] : [{ typ: 'text', text: 'Auf dieser Seite wurden keine handschriftlichen Ergänzungen oder farblichen Markierungen festgestellt.', quellenSeiten: [review.page] }]),
        ...(review.notizen.length && review.page !== 2 ? [{ typ: 'text', text: 'Die Bedeutung des rosa X stammt aus der Quellenlegende auf PDF-Seite 2: „(nur) für die Mündliche!“. Die Farbzuordnung wird auf PDF-Seite 7 erläutert. Dies sind Hinweise der Quelle, keine neu berechnete Examenspriorität. Überlappende Markerstriche werden durch Farbe, Fundstelle und markierte Wörter beschrieben; die genaue Strichführung bleibt zusätzlich im unveränderten Original sichtbar.' }] : []),
      ],
    };
  }),
];

export const endrissFGOAudit = {
  sourceId: 'ao-fgo', driveId: fgoGesetzQuelle.driveId,
  sourceBytes: fgoGesetzQuelle.sourceBytes, sourceSha256: fgoGesetzQuelle.sha256,
  physicalPages: 37, reviewedPages: Array.from({ length: 37 }, (_, i) => i + 1),
  nativePages: Array.from({ length: 37 }, (_, i) => i + 1),
  complete: true, completionScope: 'Content transfer of this 37-page source only; deployment is recorded separately.',
  legalReview: false, ownSolutionsAdded: false, originalImagesChanged: false,
  printedAmendmentDate: '10.03.2023',
  page1Method: 'Reuse of the already published canonical twelve-station handwriting transcript, not a second editable text.',
  statuteMethod: 'All 36 remaining original pages visually inspected; existing printed text compared and exact OCR artifacts repaired through a per-page allowlist. Handwritten notes and coloured markings transcribed separately.',
  annotations: fgoSeitenReview.map(review => ({ page: review.page, annotationRows: review.notizen.length, imageReviewed: review.imageReviewed })),
  annotationRows: fgoSeitenReview.reduce((n, page) => n + page.notizen.length, 0),
  pageTextEvidence: fgoGesetzSeiten.map(({ blocks, ...evidence }) => evidence),
};
