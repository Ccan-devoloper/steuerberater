/* Quellengetreuer Nachtrag aus FGO (2).pdf, tatsächliche PDF-Seite 1.
 * Keine Rechtsstandsprüfung. Die historischen Kurzformulierungen der Handschrift
 * sind Quelleninhalt, keine eigenständig aktualisierten Rechtsaussagen.
 * Die übrigen 36 PDF-Seiten sind mit diesem Teilnachtrag NICHT erledigt.
 */
export const fgoFahrtrouteQuelle = {
  id: 'ao-fgo',
  driveId: '1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj',
  title: 'FGO (2).pdf',
  sourceBytes: 1838083,
  physicalPages: 37,
  reviewedPages: [1],
  transcribedPages: [1],
  complete: false,
  remainingPages: Array.from({ length: 36 }, (_, i) => i + 2),
  legalReview: false,
  method: 'Direkte visuelle Übertragung der vollständigen handschriftlichen ersten PDF-Seite; keine Rekonstruktion aus fehlerhafter OCR.',
};

export const fgoFahrtrouteSchritte = [
  { nummer: 1, norm: '§ 33 FGO', titel: 'Zulässigkeit des Finanzrechtswegs', notizen: ['= gegen VA'] },
  { nummer: 2, norm: '§ 35 FGO', titel: 'Sachliche Zuständigkeit', notizen: ['= FG'] },
  { nummer: 3, norm: '§ 38 FGO', titel: 'Örtliche Zuständigkeit', notizen: ['= 18 × FG in BRD'] },
  { nummer: 4, norm: '§§ 57, 62 FGO', titel: 'Beteiligungsfähigkeit', notizen: ['= Stpfl. selbst ohne Berater mögl.'] },
  { nummer: 5, norm: '§ 58 FGO', titel: 'Prozessfähigkeit', notizen: [] },
  { nummer: 6, norm: '§ 63 FGO', titel: 'Wen muss ich verklagen?', notizen: ['→ FA, das den VA erlassen hat, § 63 Abs. 1 Nr. 1 FGO.'] },
  { nummer: 7, norm: '§§ 40, 41 FGO', titel: 'Auswahl der richtigen Klageart', notizen: ['Muss Kläger nicht zwingend benennen.', '→ i. d. R. Anfechtungsklage.'] },
  { nummer: 8, norm: '§ 44 FGO', titel: 'Erfolgloses Vorverfahren', notizen: ['Ausn.: Sprungklage § 45 FGO, Untätigkeit § 46 FGO.'] },
  { nummer: 9, norm: '§ 40 Abs. 2 FGO', titel: 'Klagebefugnis', notizen: ['≙ § 350 AO'] },
  { nummer: 10, norm: '§ 47 FGO / § 54 FGO', titel: 'Klagefrist', notizen: ['Grds. 1 Monat nach Bekanntgabe EE.', 'FA ist auch Anbringungsbehörde (§ 47 Abs. 2 FGO).', 'Fristberechnung: § 54 FGO → § 222 ZPO → §§ 187, 188 BGB.', 'Beachte: § 56 FGO ≙ § 110 AO.'] },
  { nummer: 11, norm: '§§ 64, 65 FGO', titel: 'Form und Inhalt der Klage', notizen: ['§ 64 Abs. 1 FGO: schriftlich + unterschreiben!', 'Randvergleich: ≠ § 357 Abs. 1 S. 2 AO.', 'Muss-Inhalte / Soll-Inhalte.', 'Nachlieferung möglich (§ 65 Abs. 2 FGO).'] },
  { nummer: 12, norm: '§ 52d FGO', titel: 'Übermittlung durch den Steuerberater', notizen: ['StB kann nur per beSt Klage übermitteln!', 'Per Post etc. = unzulässig.'] },
];

export const fgoFahrtrouteHinweis = 'Übertragung der Fähnchenkette auf PDF-Seite 1 von FGO (2).pdf. Die Nummerierung, Kurzformulierungen und Randverweise der Quelle sind erhalten. Keine Rechtsstandsprüfung. Die weiteren PDF-Seiten 2–37 sind nicht Bestandteil dieses Teilnachtrags.';
