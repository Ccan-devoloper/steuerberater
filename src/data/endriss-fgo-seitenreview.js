/* Direkt an den Originalbildern von FGO (2).pdf, PDF-Seiten 2–37, gelesen.
   PDF-Seite = gedruckte Gesetzesseite + 1. Keine Rechtsstandsprüfung.
   Handschrift und Markierungen stehen getrennt vom gedruckten Gesetzestext.
   Die Farbgrenzen von Textmarkern sind keine zusätzlichen Rechtsaussagen.
   Die einzelnen Bereinigungen entfernen ausschließlich bildlich abgeglichene
   OCR-Reste aus der bereits vorhandenen Textebene, nicht die Originalnotizen. */
export const fgoGesetzQuelle = {
  id: 'ao-fgo', driveId: '1g6C6ngjpPqb2vYjuwyTux3wVSpEC2cjj',
  title: 'FGO (2).pdf · Fähnchenkette und markierter Gesetzesauszug',
  sourceBytes: 1838083, physicalPages: 37,
  sha256: 'f8c55095b205a2d116e9af3c1981a4aba1bccfd6bc3708829742403b33d89b4a',
  printedAmendmentDate: '10.03.2023', legalReview: false,
};
const review = (page, title, normen, notizen = [], bereinigungen = []) => ({
  page, printedPage: page - 1, title, normen, notizen, bereinigungen,
  imageReviewed: true,
});
// Jede Notiz: Farbe/Form, Fundstelle und tatsächlich sichtbare Beschriftung oder
// markierte Wörter. Ungedeutete Zeichen bleiben Zeichen; kein Rechtsrat.
export const fgoSeitenReview = [
  review(2, 'Quellenstand und Gerichte', ['§§ 1–3 FGO'], [
    ['Rosa X; blaue Handschrift', 'Kopf der gedruckten Seite 1', 'X = (nur) für die Mündliche!'],
  ]),
  review(3, 'Senate, Einzelrichter und Großer Senat', ['§§ 3–11 FGO'], [
    ['Rosa X', '§§ 5, 6, 10 und 11', 'Jeweils ein X am Normanfang; Bedeutung nach der Legende auf PDF-Seite 2: (nur) für die Mündliche.'],
  ], [['X § 10', '§ 10'], ['X § 11', '§ 11']]),
  review(4, 'Großer Senat, Richter und ehrenamtliche Richter', ['§§ 11–18 FGO']),
  review(5, 'Ehrenamtliche Richter: Ausschluss, Ablehnung und Entbindung', ['§§ 18–21 FGO']),
  review(6, 'Wahl und Heranziehung ehrenamtlicher Richter', ['§§ 21–28 FGO']),
  review(7, 'Gerichtsverwaltung und Finanzrechtsweg', ['§§ 29–34 FGO', '§ 347 AO'], [
    ['Rosa Umkreisung und Pfeil', 'Unterabschnitt 1 · Finanzrechtsweg', '„Finanzrechtsweg“ → „Zulässigkeit“'],
    ['Graue Handschrift', 'Neben § 33', '≙ § 347 AO'],
    ['Gelb / Grün / Orange', 'Handschriftlicher Kasten „Legende“', 'Gelb: „Vorauss“; Grün: „Rechtsfolge“; Orange: !'],
    ['Grün', '§ 33 Abs. 1', '„Finanzrechtsweg ist gegeben“'],
    ['Gelb', '§ 33 Abs. 1 Nr. 1', '„Streitigkeiten über Abgabenangelegenheiten“'],
    ['Grün / Gelb', '§ 33 Abs. 2', 'Grün: „Abgabenangelegenheiten“; Gelb: „durch die Finanzbehörden zusammenhängenden Angelegenheiten“'],
  ], [
    ['LegendeAbschnitt V Ekulässigkeit', 'Abschnitt V'],
    ['Finanzrechtsweg und Zuständigkeit Voraus', 'Finanzrechtsweg und Zuständigkeit'],
    ['Unterabschnitt 1 RechtsfolgeFinanzrechtsweg', 'Unterabschnitt 1\nFinanzrechtsweg'],
    ['§ 33 534710', '§ 33'],
  ]),
  review(8, 'Sachliche und örtliche Zuständigkeit', ['§§ 35–39 FGO'], [
    ['Blau / Orange', 'Normköpfe §§ 35 und 38', 'Normköpfe blau umrahmt und farblich hervorgehoben.'],
    ['Grün / Gelb', '§ 35', 'Grün: „Finanzgericht entscheidet“; Gelb: „ersten Rechtszug“'],
    ['Grün / Gelb', '§ 36', 'Grün: „Bundesfinanzhof entscheidet“; Gelb: „Revision“ und „Beschwerde“'],
    ['Grün / Gelb', '§ 38 Abs. 1', 'Grün: „Örtlich zuständig“; Gelb: „Finanzgericht, in dessen Bezirk die Behörde, gegen welche die Klage gerichtet ist, ihren Sitz“'],
  ]),
  review(9, 'Klagearten, Klagebefugnis und Vorverfahren', ['§§ 40–45 FGO'], [
    ['Blau / Gelb / Orange', '§ 40 Abs. 1', 'Absatznummer blau; Gelb: „Aufhebung“, „Änderung“, „Verurteilung zum Erlass“; Orange: „Anfechtungsklage“, „Verpflichtungsklage“'],
    ['Grün / Gelb', '§ 40 Abs. 2', 'Grün: „Klage nur zulässig, wenn“; Gelb: „Kläger geltend macht“ und „in seinen Rechten verletzt“'],
    ['Rosa X', '§ 41', 'X nach der Legende auf PDF-Seite 2.'],
    ['Grün / Gelb', '§ 44 Abs. 1', 'Grün: „Klage“ und „nur zulässig, wenn“; Gelb: „Vorverfahren über den außergerichtlichen Rechtsbehelf“ und „erfolglos“'],
    ['Blau / Grün / Rosa / Gelb', '§ 44 Abs. 2', 'Absatznummer blau; Grün: „Gegenstand der Anfechtungsklage“, „Anfechtungsklage“ außerdem rosa gewellt unterstrichen; Gelb: „ursprüngliche Verwaltungsakt in der Gestalt, die er durch die Entscheidung“ und „gefunden hat“'],
    ['Orange / Grün / Gelb', '§ 45 Abs. 1', 'Orange: „ohne Vorverfahren“; Grün: „zulässig, wenn“; Gelb: „Behörde“ und „dem Gericht gegenüber zustimmt“'],
  ], [['mummerGestalt', 'Gestalt']]),
  review(10, 'Untätigkeit, Klagefrist und Feststellungsbeteiligte', ['§§ 45–48 FGO', '§ 352 AO'], [
    ['Gelb / Grün', '§ 46 Abs. 1', 'Gelb: „außergerichtlichen Rechtsbehelf“ und „in angemessener Frist sachlich nicht entschieden worden“; Grün: „Klage abweichend von § 44“ und „zulässig“'],
    ['Blau / Gelb / Grün', '§ 47 Abs. 1 und 2', 'Absatznummern blau. Abs. 1: „einen Monat“ und Beginn mit Bekanntgabe der Entscheidung über den außergerichtlichen Rechtsbehelf farblich hervorgehoben.'],
    ['Grün / Gelb', '§ 47 Abs. 2', 'Grün: „Die Frist für die Erhebung der Klage gilt als gewahrt, wenn“; Gelb: „Klage bei der Behörde“, „Verwaltungsakt“, „erlassen“, „bekannt gegeben“ und „innerhalb der Frist angebracht“'],
    ['Rosa X und Handschrift', '§ 48', 'X; „(wie § 352 AO)“'],
  ], [['wie 352 70', '']]),
  review(11, 'Klageverzicht, Gerichtspersonen und elektronische Dokumente', ['§§ 48–52a FGO']),
  review(12, 'Elektronische Dokumente und Prozessakten', ['§§ 52a–52b FGO']),
  review(13, 'Elektronische Akten, Formulare und Nutzungspflicht', ['§§ 52b–52d FGO'], [
    ['Orange', 'Überschrift § 52d', '„vertretungsberechtigte Personen“'],
    ['Gelb', '§ 52d · erster Satz, Beginn', '„Schriftsätze“; der Satz wird auf PDF-Seite 14 fortgesetzt.'],
  ]),
  review(14, 'Nutzungspflicht, Fristen, Wiedereinsetzung und Beteiligte', ['§§ 52d–57 FGO', '§ 110 AO'], [
    ['Grün / Orange', '§ 52d · Fortsetzung', 'Grün: „sind als elektronisches Dokument zu übermitteln“; Orange: „vertretungsberechtigten Personen“'],
    ['Gelb', '§ 54 Abs. 2', '„Fristen gelten die Vorschriften der §§ 222, 224 Abs. 2 und 3, §§ 225 und 226 der Zivilprozessordnung“'],
    ['Rosa Handschrift', 'Neben § 56', '≙ § 110 AO'],
    ['Gelb; rosa Umkreisung', '§ 56 Abs. 2', '„binnen zwei Wochen“'],
    ['Grün / Gelb', '§ 57', 'Grün: „Beteiligte am Verfahren“; Gelb: „Kläger“ und „Beklagte“'],
  ], [['§ 56 11000', '§ 56']]),
  review(15, 'Prozessfähigkeit, Streitgenossenschaft und Beiladung', ['§§ 57–60a FGO'], [
    ['Grün / Gelb', '§ 58 Abs. 1', 'Grün: „Fähig zur Vornahme von Verfahrenshandlungen sind“; Gelb: „die nach dem bürgerlichen Recht Geschäftsfähigen“'],
    ['Graue Handschrift mit Pfeil', '§ 58 Abs. 1 Nr. 1', '18 Jahre'],
  ], [['sind 18Jahre', 'sind']]),
  review(16, 'Vertretung vor Finanzgericht und Bundesfinanzhof', ['§§ 60a–62 FGO'], [
    ['Gelb; rosa Unterstreichung', '§ 62 Abs. 1', '„können vor dem Finanzgericht den Rechtsstreit selbst führen“'],
    ['Gelb / Rosa', '§ 62 Abs. 2', 'Gelb: „können“ und „Steuerberater“; „können“ zusätzlich rosa unterstrichen.'],
    ['Rosa X; Orange / Gelb', '§ 62 Abs. 4', 'X; Orange: „Vor dem Bundesfinanzhof müssen“; Gelb: „vertreten lassen“'],
    ['Gelb / Grün', '§ 62 Abs. 4 · letzter Satz', 'Gelb: „Beteiligter, der nach Maßgabe des Satzes 3 zur Vertretung berechtigt ist“; Grün: „kann sich selbst vertreten“'],
  ]),
  review(17, 'Klagegegner sowie Form und Inhalt der Klage', ['§§ 62–65 FGO', '§ 357 Abs. 2 S. 1'], [
    ['Graue Handschrift und Pfeil', 'Neben § 63', '„Wer wird verklagt?“; „≙ § 357(2) S. 1“'],
    ['Grün; rosa Unterstreichung', '§ 63 Abs. 1', '„Klage ist gegen die Behörde zu richten“; „gegen“ unterstrichen.'],
    ['Gelb', '§ 63 Abs. 1 Nr. 1 und 2', '„Verwaltungsakt erlassen“, „beantragten Verwaltungsakt“ und „abgelehnt“'],
    ['Graue Handschrift; Gelb / Orange', '§ 64 Abs. 1', '„schriftlich“ gelb markiert und orange unterstrichen; darüber „= mit Unterschrift!“'],
    ['Blau / Gelb / Rosa', '§ 65 Abs. 1', 'Absatznummer blau; Gelb: „muss“, „Kläger“, „Beklagten“, „Klagebegehrens“, „Verwaltungsakt“, „Antrag“ und „Begründung“; „soll“ und „sollen“ rosa unterstrichen.'],
  ], [
    ['§ 63 wird verklagt Wer', '§ 63'],
    ['zu richten, 3571275.1', 'zu richten,'],
    ['mit Unterschrift', ''],
  ]),
  review(18, 'Ergänzung der Klage, neuer Verwaltungsakt und AdV', ['§§ 65–69 FGO', '§ 361 AO'], [
    ['Graue Handschrift', 'Über § 65 Abs. 2', '⇒ Klage also i.Erg. auch ohne § 65(1)-Inhalte zulässig zur Fristwahrung'],
    ['Blau / Gelb / Grün', '§ 65 Abs. 2', 'Absatznummer blau; Gelb: „Klage diesen Anforderungen nicht“; Grün: „Ergänzung innerhalb einer bestimmten Frist“'],
    ['Graue Handschrift; oranges !', 'Neben § 69', '≙ § 361 AO; !'],
    ['Gelb / Grün', '§ 69 Abs. 1', 'Gelb: „Erhebung der Klage“; Grün: „Vollziehung“ und „nicht gehemmt“'],
    ['Blau / Orange / Gelb', '§ 69 Abs. 2', 'Absatznummer blau; „Finanzbehörde“ orange; „kann die Vollziehung ganz oder teilweise aussetzen“ gelb.'],
    ['Blau / Gelb / Orange', '§ 69 Abs. 3', 'Absatznummer blau; „Auf Antrag“ gelb; „Gericht“ orange.'],
    ['Blau / Orange / Grün / Gelb', '§ 69 Abs. 4', 'Absatznummer blau; Orange: „Antrag nach Absatz 3“; Grün: „nur zulässig, wenn“; Gelb: „Behörde“, „Antrag“ und „abgelehnt“'],
  ], [
    ['654 Inhalte zulässig zur Klagealso iErgauchohne Fristwahung', ''],
    ['§ 69 E 36170', '§ 69'],
  ]),
  review(19, 'AdV-Ausnahmen und weiteres Klageverfahren', ['§§ 69–74 FGO'], [
    ['Gelb', '§ 69 Abs. 4 Nr. 1 und 2', '„in angemessener Frist sachlich nicht entschieden hat“ und „Vollstreckung droht“'],
  ]),
  review(20, 'Sachverhaltsermittlung, Schriftsätze und Akteneinsicht', ['§§ 74–78 FGO'], [
    ['Rosa X', '§§ 76, 77 und 78', 'Jeweils X am Normanfang.'],
    ['Rosa Umkreisung', '§ 78 Abs. 1', '„Akten einsehen“'],
  ], [
    ['X § 76', '§ 76'], ['X § 77', '§ 77'], ['X § 78', '§ 78'],
    ['erteilen lassen. O', 'erteilen lassen.'],
  ]),
  review(21, 'Vorbereitendes Verfahren und Fristsetzungen', ['§§ 78–79b FGO']),
  review(22, 'Persönliches Erscheinen und Beweisaufnahme', ['§§ 79b–86 FGO'], [
    ['Rosa X', '§§ 80, 81 und 86', 'Jeweils X am Normanfang; § 86 wird auf PDF-Seite 23 fortgesetzt.'],
  ], [['§ 80X', '§ 80'], ['§ 81X', '§ 81'], ['X § 86', '§ 86']]),
  review(23, 'Aktenvorlage, mündliche Verhandlung und Gerichtsbescheid', ['§§ 86–90a FGO'], [
    ['Rosa X', '§ 90a', 'X am Normanfang.'],
    ['Rosa Umkreisungen', '§ 90a Abs. 1', '„ohne mündliche Verhandlung“ und „Gerichtsbescheid“'],
  ], [['Zustellung00des', 'Zustellung des']]),
  review(24, 'Mündliche Verhandlung, Videoübertragung und Protokoll', ['§§ 90a–94a FGO'], [
    ['Rosa X', '§ 91a', 'X am Normanfang.'],
    ['Rosa Umkreisung, Pfeil und Handschrift', '§ 91a Abs. 1', '„während einer mündlichen Verhandlung an einem anderen Ort aufzuhalten“ → „Zoom-Call“'],
  ], [['dasSitzungszimmer', 'das Sitzungszimmer'], [' gezoomen', '']]),
  review(25, 'Urteil, Zwischenurteil und Anfechtung', ['§§ 94a–100 FGO'], [
    ['Rosa X', '§§ 95 und 100', 'Jeweils X am Normanfang.'],
    ['Rosa Wellenlinie und Umkreisung', '§ 95', '„soweit nichts anderes bestimmt“ gewellt unterstrichen; „Urteil“ umkreist.'],
  ], [['mmm § 96 O', '§ 96'], ['X § 100', '§ 100']]),
  review(26, 'Verpflichtung, Ermessen und Urteilsform', ['§§ 100–105 FGO']),
  review(27, 'Urteilsberichtigung, Ergänzung und Bindungswirkung', ['§§ 105–110 FGO'], [
    ['Rosa X', '§ 110', 'X am Normanfang.'],
  ], [['X (1) Rechtskräftige Urteile', '(1) Rechtskräftige Urteile']]),
  review(28, 'Einstweilige Anordnung und Revisionszulassung', ['§§ 110–115 FGO'], [
    ['Rosa X', '§ 115', 'X am Normanfang.'],
    ['Gelb / Orange', '§ 115 Abs. 1', 'Gelb: „Gegen das Urteil des Finanzgerichts“, „wenn“ und „zugelassen“; Orange: „Revision“'],
    ['Grün / Gelb', '§ 115 Abs. 2', 'Grün: „zuzulassen, wenn“; Gelb: „Rechtssache grundsätzliche Bedeutung“, „Fortbildung des Rechts“ und „einheitlichen Rechtsprechung“'],
    ['Orange und !', '§ 115 Abs. 3', '„Der Bundesfinanzhof ist an die Zulassung gebunden.“; !'],
  ]),
  review(29, 'Nichtzulassungsbeschwerde und Revisionsgründe', ['§§ 116–119 FGO'], [
    ['Rosa X', '§ 116', 'X am Normanfang.'],
    ['Orange', '§ 116 Abs. 1', '„Nichtzulassung“ und „Beschwerde“'],
    ['Gelb', '§ 116 Abs. 2', '„innerhalb eines Monats“ und „bei dem Bundesfinanzhof einzulegen“'],
    ['Gelb', '§ 116 Abs. 5', '„Bundesfinanzhof entscheidet“ und „durch Beschluss“'],
  ], [['§ 116X', '§ 116']]),
  review(30, 'Revision: Fristen, Beteiligte und Zulässigkeit', ['§§ 119–125 FGO']),
  review(31, 'Revisionsentscheidung und Beschwerde', ['§§ 125–128 FGO']),
  review(32, 'Beschwerde, Erinnerung und Anhörungsrüge', ['§§ 128–133a FGO']),
  review(33, 'Wiederaufnahme und Verfahrenskosten', ['§§ 133a–137 FGO'], [
    ['Rosa X', 'Überschrift „Dritter Teil · Kosten und Vollstreckung“', 'Großes X neben der Teilüberschrift.'],
  ], [['Kosten und VollstreckungX Abschnitt I', 'Kosten und Vollstreckung\nAbschnitt I']]),
  review(34, 'Erledigung, Kostenerstattung und Prozesskostenhilfe', ['§§ 137–142 FGO']),
  review(35, 'Kostenentscheidung, Erinnerung und Vollstreckung', ['§§ 142–151 FGO']),
  review(36, 'Vollstreckung und ergänzende Verfahrensvorschriften', ['§§ 151–156 FGO']),
  review(37, 'Übergangs- und Schlussbestimmungen', ['§§ 157–184 FGO']),
];
