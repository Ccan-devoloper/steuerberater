import { persgHorstFolien1, persgHorstFolienAudit } from './endriss-persg-horst-folien.js';

/* Zweite Originaldatei, nicht ein neuer Satz Lernfälle. Am 29.09.2026 wurden
   alle 16 tatsächlichen PDF-Seiten aus Drive erneut als Bilder gelesen und
   mit den vorhandenen nativen Abschnitten abgeglichen. Keine OCR-basierte
   Gleichheitsannahme und keine Rechtsstandsprüfung. Die Quelldateien sind
   ausdrücklich NICHT bytegleich. Originalbilder und Drive-Link bleiben getrennt. */
export const horstFassung2Seitenabgleich = [
  [1, '01', 'Titel PersG 2025; berufliche Vorstellung; persönliche Kontaktkarte ist Begleitmaterial.'],
  [2, '02', 'Horizontale/vertikale Abfärbung; 3 %, 24.500 €, 7 %, 2,5225 %; Beteiligungserträge −1.804,15 € und −497,95 €; übrige Einkünfte 443.592,05 €.'],
  [3, '03', 'Ländererlass 01.10.2020, BFH-Hinweis 05.09.2023 IV R 24/20 und abweichendes Fazit der Folie werden nebeneinander erhalten.'],
  [4, '04', 'Prägung: Komplementär-GmbH 0 %, A/B je 50 %; alle vier Sachverhalte und GmbH/GbR-Schaubild.'],
  [5, '05', 'Freiberuflerpraxis VIII R 63/13, Post-it VIII R 62/13; zweistufiges Gewinnermittlungsschema einschließlich außerbilanzieller Korrekturen.'],
  [6, '06', 'ABC-OHG: 328.000 € Jahresüberschuss; Kapital/Entnahmen, 8 %, 24.000 €, 10 %/5 %; Fenster/Türen 120.000 €, −12.000 €, 108.000 €.'],
  [7, '07', 'Überführung/Übertragung § 6 Abs. 5 EStG samt Schwestergesellschaften; Einbringung 600.000 €, Maschine/Gebäude, 300.000 € Bilanz, Brutto-/Nettomethode.'],
  [8, '08', 'Sonstige Gegenleistung: 25 %/500.000 € und Grenztabelle; Abwandlung mit Einzahlung 400.000 € und Darlehensforderung 200.000 €.'],
  [9, '09', 'Abwandlung: 250.000 € Einzahlung/Gesellschaftsrechte, 350.000 € Darlehen; Gebäude 400.000 €, 3 %, Buchwert 220.000 €, gemeiner Wert 500.000 €, Grundbesitzwert 450.000 €.'],
  [10, '10', 'Austritt Beispiel 1: Abfindung 200.000 €, Bilanz 652.000 €, AfA-Angaben einschließlich Quellenjahr 01.01.2022 bei Maschine 2.'],
  [11, '11', 'Abfindung 210.000 €; Abwandlungsbilanz 652.000 €; Beispiel 2 mit Gewinnchance 60.000 €, Abfindung 592.000 € und Bilanz 1.152.000 €.'],
  [12, '12', 'Fortsetzung Beispiel 2 vollständig; Sachwertabfindung mit Bilanzen 650.000 € und 740.000 € und allen Einzelposten.'],
  [13, '13', 'Grundstücksübertragung 01.02.2024; Gesellschafterwechsel: C zu 1/4, Kaufpreis 100.000 €, Bilanz 420.000 €, Maschine zwölf Jahre.'],
  [14, '14', 'Gesellschafterwechsel: Quellenjahr 01.01.2022 bleibt neben 2023/2024; Bilanz 400.000 €; Realteilung 720.000 € und 1.060.000 €.'],
  [15, '15', 'Realteilung mit Aufgabenfortsetzung; Spitzenausgleich: Grundstück 2 145.000 €, Kapital A 530.000 €, Kapital B 610.000 €, Summe 1.140.000 €. Beide Originalfassungen für diese Tabelle nochmals direkt kontrolliert.'],
  [16, '16', 'Spitzenausgleich 40.000 € von B an A, vollständige Aufgabe; Schluss-/Kontakt-/Copyrightfolie ist Begleitmaterial.'],
].map(([page, number, evidence]) => ({
  page,
  canonicalChapterId: `horst-folien-${number}`,
  chapterId: `horst-fassung2-${number}`,
  evidence,
  method: 'direct-visual-source-page-to-native-content-comparison',
  result: 'covered-by-existing-native-learning-content',
}));

// Share the substantive blocks rather than maintaining duplicate editable texts.
export const persgHorstFolien2 = horstFassung2Seitenabgleich.map(mapping => {
  const chapter = persgHorstFolien1.find(c => c.id === mapping.canonicalChapterId);
  if (!chapter || chapter.pages.length !== 1 || chapter.pages[0] !== mapping.page) {
    throw new Error(`Horst-Fassung 2: ungültige Quellenzuordnung für Seite ${mapping.page}`);
  }
  return {
    ...chapter,
    id: mapping.chapterId,
    canonicalChapterId: chapter.id,
    bloecke: mapping.page === 1 ? [{
      text: 'Zweite Quelldatei: Alle 16 PDF-Seiten wurden bildlich mit den vorhandenen Lernabschnitten abgeglichen. Die Lehrinhalte werden aus denselben Abschnitten wie Fassung 1 angezeigt; die Originaldatei und ihre Seitenansicht bleiben eigenständig. Unterschiedliche PDF-Dateien bedeuten hier keinen zusätzlichen Satz von Lernfällen. Keine Rechtsstandsprüfung.',
      quellenSeiten: [1],
    }, ...chapter.bloecke] : chapter.bloecke,
  };
});

export const persgHorstFassung2Audit = {
  sourceId: 'persg-folien-2',
  driveId: '1UKzwT0Pu7slpR8XpzKQN_d0waycqELOn',
  sourceBytes: 10197674,
  physicalPages: 16,
  reviewedPages: horstFassung2Seitenabgleich.map(row => row.page),
  printedSlidesByPage: persgHorstFolienAudit.printedSlidesByPage,
  legalReview: false,
  ownSolutionsAdded: false,
  canonicalSourceId: 'persg-folien-1',
  sameSourceBytes: false,
  status: 'native-learning-content-covered-by-verified-pagewise-mapping',
  method: 'Direkte visuelle Sichtung aller Seiten der am 29.09.2026 erneut aus Drive abgerufenen Fassung 2 und Abgleich mit den vorhandenen Text-, Tabellen- und Schemaabschnitten. Keine Aussage über binäre Dateigleichheit. Begleitmaterial bleibt in der jeweiligen Originalansicht.',
  pageMappings: horstFassung2Seitenabgleich,
  comparedNativeFile: 'src/data/endriss-persg-horst-folien.js',
  comparedNativeBlob: '9f340eabf597e34d619ab41a97a75ccb0004adc2',
  printedSlidesAreNotPhysicalPages: true,
};
