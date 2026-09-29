/* Fortsetzbarer Teilstand, NICHT im vollständigen nativen Quellenregister.
   FGO (2).pdf: Drive 1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj, 37 PDF-Seiten.
   Die handschriftliche erste Seite wurde am 29.09.2026 direkt bildlich gelesen.
   Keine Ergänzung aus allgemeinem Wissen und keine Rechtsstandsprüfung.
   Der anschließende 36-seitige Gesetzesauszug und seine Markierungen bleiben
   bis zum eigenen seitenweisen Abgleich offen. Diese Datei ist kein Abschluss. */

export const fgoErsteSeite = [{
  id: 'endriss-fgo-sachurteilsvoraussetzungen-seite1',
  title: 'Zulässigkeits-/Sachurteilsvoraussetzungen (Fähnchenkette)',
  pages: [1],
  normen: ['§ 33 FGO', '§ 35 FGO', '§ 38 FGO', '§§ 57, 62 FGO', '§ 58 FGO', '§ 63 FGO', '§§ 40, 41 FGO', '§ 44 FGO', '§ 47 FGO', '§ 54 FGO', '§§ 64, 65 FGO', '§ 52d FGO'],
  bloecke: [
    {
      text: 'Übertragung der handschriftlichen ersten Originalseite. Die Reihenfolge 1–12 und die Randverweise bleiben erhalten. Abkürzungen und Normangaben werden nicht anhand eines anderen Rechtsstands verändert.',
      quellenSeiten: [1],
    },
    {
      typ: 'tabelle',
      spalten: ['Nr.', 'Norm im Original', 'Prüfungspunkt', 'Anmerkungen im Original'],
      zeilen: [
        ['1', '§ 33 FGO', 'Zulässigkeit des Finanzrechtswegs', '= gegen VA'],
        ['2', '§ 35 FGO', 'Sachliche Zuständigkeit', '= FG'],
        ['3', '§ 38 FGO', 'Örtliche Zuständigkeit', '= 18 × FG in BRD'],
        ['4', '§§ 57, 62 FGO', 'Beteiligungsfähigkeit', '= Stpfl. selbst ohne Berater mögl.'],
        ['5', '§ 58 FGO', 'Prozessfähigkeit', ''],
        ['6', '§ 63 FGO', 'Wen muss ich verklagen?', '→ FA, das den VA erlassen hat, § 63(1) Nr. 1 FGO.'],
        ['7', '§§ 40, 41 FGO', 'Auswahl der richtigen Klageart', '(muss Klage nicht zwingend benennen) → i. d. R. Anfechtungsklage'],
        ['8', '§ 44 FGO', 'Erfolgloses Vorverfahren', 'Ausn.: Sprungklage § 45 FGO, Untätigkeit § 46 FGO'],
        ['9', '§ 40(2) FGO', 'Klagebefugnis', '(≙ § 350 AO)'],
        ['10', '§ 47 FGO; § 54 FGO', 'Klagefrist', 'grds. 1 Monat nach Bekanntgabe EE. FA ist auch Anbringungsbehörde (§ 47(2) FGO). Fristberechnung § 54 FGO → § 222 ZPO → §§ 187, 188 BGB. Beachte: § 56 FGO ≙ § 110 AO.'],
        ['11', '§§ 64, 65 FGO', 'Form und Inhalt der Klage', '§ 64(1) FGO: schriftlich + unterschreiben! Randvergleich: ≠ § 357(1) S. 2 AO. Muss-Inhalte / Soll-Inhalte. Nachlieferung möglich (§ 65(2) FGO).'],
        ['12', '§ 52d FGO', 'StB kann nur per beSt Klage übermitteln!', 'per Post etc. = unzulässig'],
      ],
      quellenSeiten: [1],
    },
    {
      text: 'Sichtbare Hervorhebungen: Eine blaue Pfeillinie verbindet die zwölf nummerierten Schritte. Die Überschrift und „unterschreiben!“ sind orange unterstrichen. Neben „FA ist auch Anbringungsbehörde“ steht ein grünes X. „unzulässig“ ist rot geschrieben. Die grau notierten Quervergleiche sind in der Tabelle als Anmerkungen mitgeführt.',
      quellenSeiten: [1],
    },
  ],
}];

export const fgoArbeitsstand = {
  sourceId: 'ao-fgo',
  driveId: '1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj',
  sourceBytes: 1838083,
  physicalPages: 37,
  visualPagesOpened: [1, 2],
  nativeTranscribedPages: [1],
  complete: false,
  legalReview: false,
  registeredInUI: false,
  nextVisualPage: 3,
  nextNativePage: 2,
  remainingNativePages: Array.from({ length: 36 }, (_, index) => index + 2),
  page2Observation: 'Beginn des FGO-Gesetzesauszugs, gedruckte Seite 1 von 36, Änderungsstand 10.03.2023. Sichtbare rosa X-Markierung und handschriftlicher Hinweis zur Mündlichen. Noch nicht nativ übertragen.',
  nextStep: 'Seiten 2–37 des Original-PDF einschließlich handschriftlicher Ergänzungen vollständig abgleichen/übertragen und dann diese erste Seite ohne Neuerfassung in das registrierte Quellenpaket übernehmen. Die 37-seitige Quelle vorher nicht als vollständig werten.',
};
