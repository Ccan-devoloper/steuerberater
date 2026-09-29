/* Fortsetzbarer Teilstand, NICHT im vollständigen nativen Quellenregister.
   FGO (2).pdf: 37 PDF-Seiten. Die erste Handschrift ist jetzt im bestehenden
   AO-Schema erreichbar. Der 36-seitige Gesetzesauszug bleibt separat offen.
   Die ursprüngliche Tabellen-Schnittstelle bleibt für die spätere vollständige
   Übernahme erhalten; ihre Zeilen werden aus derselben kanonischen Transkription
   wie die Oberfläche erzeugt, nicht als zweite editierbare Kopie gepflegt. */
import { fgoFahrtrouteSchritte, fgoFahrtrouteQuelle } from './endriss-fgo-fahrtroute.js';

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
  visualPagesOpened: [1, 2, 3, 4],
  nativeTranscribedPages: [1],
  complete: false,
  legalReview: false,
  registeredInUI: true,
  registeredScope: 'Nur die vollständige erste Handschrift über ao6-fgo-fahrtroute. Die 37-seitige Gesamtquelle ist weiterhin nicht im vollständigen Endriss-Nativregister.',
  uiComponent: 'src/components/EndrissFGOFahrtroute.jsx',
  schemaDispatcher: 'src/components/AOSchemataAlle.jsx',
  canonicalTranscription: 'src/data/endriss-fgo-fahrtroute.js',
  nextVisualPage: 5,
  nextNativePage: 2,
  remainingNativePages: fgoFahrtrouteQuelle.remainingPages,
  page2Observation: 'Beginn des FGO-Gesetzesauszugs, gedruckte Seite 1 von 36, Änderungsstand 10.03.2023. Sichtbare rosa X-Markierung und handschriftlicher Hinweis zur Mündlichen. Noch nicht nativ übertragen.',
  pages3And4Observation: 'Seite 3: rosa X bei §§ 5, 6, 10 und 11; Seite 4: Fortsetzung § 11, §§ 12–18. Visuell geöffnet, noch nicht vollständig auf Lernmodule abgebildet.',
  nextStep: 'Seiten 2–37 des Original-PDF einschließlich handschriftlicher Ergänzungen vollständig abgleichen/übertragen. Die erste Handschrift ist bereits integriert und darf nicht erneut als getrennte Textkopie angelegt werden. Gesamtquelle vorher nicht als vollständig werten.',
};
