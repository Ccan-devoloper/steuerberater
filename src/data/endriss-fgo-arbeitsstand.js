/* Kanonischer Adapter der bereits veröffentlichten handschriftlichen Seite 1.
   Die vollständige 37-seitige Quelle wird in endriss-fgo.js zusammengesetzt.
   Der Gesetzestext und dessen Markierungen liegen separat; diese Tabelle bleibt
   aus genau derselben Stationenquelle wie die bestehende AO-Fahrtroute erzeugt. */
import { fgoFahrtrouteSchritte, fgoFahrtrouteQuelle } from './endriss-fgo-fahrtroute.js';
import { fgoSeitenReview } from './endriss-fgo-seitenreview.js';

export const fgoErsteSeite = [{
  id: 'endriss-fgo-sachurteilsvoraussetzungen-seite1',
  title: 'Zulässigkeits-/Sachurteilsvoraussetzungen (Fähnchenkette)',
  pages: [1],
  normen: fgoFahrtrouteSchritte.map(s => s.norm),
  bloecke: [
    {
      text: 'Übertragung der handschriftlichen ersten Originalseite. Die Reihenfolge 1–12 und die Randverweise bleiben erhalten. Abkürzungen und Normangaben werden nicht anhand eines anderen Rechtsstands verändert.',
      quellenSeiten: [1],
    },
    {
      typ: 'tabelle',
      spalten: ['Nr.', 'Norm im Original', 'Prüfungspunkt', 'Anmerkungen im Original'],
      zeilen: fgoFahrtrouteSchritte.map(s => [String(s.nummer), s.norm, s.titel, s.notizen.join(' ')]),
      quellenSeiten: [1],
    },
    {
      text: 'Sichtbare Hervorhebungen: Eine blaue Pfeillinie verbindet die zwölf nummerierten Schritte. Die Überschrift und „unterschreiben!“ sind orange unterstrichen. Neben „FA ist auch Anbringungsbehörde“ steht ein grünes X. „unzulässig“ ist rot geschrieben. Die grau notierten Quervergleiche sind in der Tabelle als Anmerkungen mitgeführt.',
      quellenSeiten: [1],
    },
  ],
}];

export const fgoArbeitsstand = {
  sourceId: fgoFahrtrouteQuelle.id,
  driveId: fgoFahrtrouteQuelle.driveId,
  sourceBytes: fgoFahrtrouteQuelle.sourceBytes,
  physicalPages: fgoFahrtrouteQuelle.physicalPages,
  visualPagesOpened: [1, ...fgoSeitenReview.map(p => p.page)],
  nativeTranscribedPages: [1, ...fgoSeitenReview.map(p => p.page)],
  complete: true,
  completionScope: 'Native Inhaltsübernahme dieser Quelle. Tests, Merge und Veröffentlichung sind gesondert im Quellencheckpoint nachzuweisen.',
  legalReview: false,
  registeredInUI: true,
  registeredScope: 'Alle 37 Quellenseiten über Unterlagen-Nachträge / ao-fgo; Seite 1 zusätzlich über das bestehende AO-Schema ao6-fgo-fahrtroute.',
  uiComponent: 'src/components/EndrissFGOFahrtroute.jsx',
  fullSourceModule: 'src/data/endriss-fgo.js',
  schemaDispatcher: 'src/components/AOSchemataAlle.jsx',
  canonicalTranscription: 'src/data/endriss-fgo-fahrtroute.js',
  nextVisualPage: null,
  nextNativePage: null,
  remainingNativePages: [],
  nextStep: 'Reproduzierbaren Quellenabgleich, native Ausgabe und Desktop-/Mobil-Browserprüfung für alle 37 Seiten bestätigen. Erst nach bestätigtem Merge und Deployment B2 als vollständig veröffentlicht zählen.',
};
