/* FGO (2).pdf: 37 tatsächliche PDF-Seiten visuell geprüft.
   PDF-S. 1 ist eine handschriftliche Fahrtroute; PDF-S. 2–37 sind ein
   markierter FGO-Ausdruck (gedruckte S. 1–36). Übertragen werden die
   Lernmarkierungen und handschriftlichen Zusätze, nicht der vollständige
   amtliche Gesetzestext. Keine Rechtsstandsprüfung. */
const p = text => ({ text });
const h = text => ({ typ:'titel', text });
const k = (id,title,pages,normen,bloecke) => ({id:`ao-fgo-${id}`,title,pages,normen,bloecke});

export const aoFgoNachtrag = [
  k('01','Zulässigkeits-/Sachurteilsvoraussetzungen · Fähnchenkette',[1],
    ['§ 33 FGO','§ 35 FGO','§ 38 FGO','§§ 57, 62 FGO','§ 58 FGO','§ 63 FGO','§§ 40, 41 FGO','§ 44 FGO','§§ 45, 46 FGO','§ 40 Abs. 2 FGO','§§ 47, 54 FGO','§§ 64, 65 FGO','§ 52d FGO'],
    [
      h('Zwölf Stationen der handschriftlichen Fahrtroute'),
      p('1. § 33 FGO: Zulässigkeit des Finanzrechtswegs – „gegen VA“.'),
      p('2. § 35 FGO: sachliche Zuständigkeit – FG.'),
      p('3. § 38 FGO: örtliche Zuständigkeit – Randnotiz: „18× FG in BRD“.'),
      p('4. §§ 57, 62 FGO: Beteiligungsfähigkeit – Stpfl. selbst ohne Berater möglich.'),
      p('5. § 58 FGO: Prozessfähigkeit.'),
      p('6. § 63 FGO: „Wen muss ich verklagen?“ – FA, das den VA erlassen hat; Verweis auf § 63 Abs. 1 Nr. 1 FGO.'),
      p('7. §§ 40, 41 FGO: Auswahl der richtigen Klageart; der Kläger muss sie nach der Notiz nicht zwingend benennen; als Regelfall ist die Anfechtungsklage notiert.'),
      p('8. § 44 FGO: erfolgloses Vorverfahren; Ausnahmen: Sprungklage § 45 FGO und Untätigkeitsklage § 46 FGO.'),
      p('9. § 40 Abs. 2 FGO: Klagebefugnis; handschriftlicher Vergleich mit § 350 AO.'),
      p('10. §§ 47, 54 FGO: Klagefrist – grundsätzlich ein Monat nach Bekanntgabe der Einspruchsentscheidung. Ergänzt: FA ist auch Anbringungsbehörde (§ 47 Abs. 2 FGO); Fristberechnung über § 54 FGO / § 222 ZPO und §§ 187, 188 BGB; daneben Hinweis auf § 56 FGO und § 110 AO.'),
      p('11. §§ 64, 65 FGO: Form und Inhalt der Klage. § 64 Abs. 1 FGO: schriftlich und nach der Handschrift „unterschrieben“; Muss-/Soll-Inhalte; Nachlieferung nach § 65 Abs. 2 FGO möglich.'),
      p('12. § 52d FGO: handschriftlicher Merksatz, dass der StB die Klage über den besonderen elektronischen Übermittlungsweg einreichen muss; „per Post etc. = unzulässig“.'),
      p('Abgleich: Die bestehende AO-Einheit 6 enthält bereits die FGO-Fahrtroute als Schema. Dieser Nachtrag ergänzt dort insbesondere die auf dieser Quelle sichtbaren Stationen 11 und 12 sowie die Randverweise.')
    ]),
  k('02','Finanzrechtsweg und Zuständigkeit · markierte Gesetzesstellen',[7,8],
    ['§ 33 FGO','§ 35 FGO','§ 38 FGO'],
    [
      p('PDF-S. 7 / gedruckte S. 6: Abschnitt „Finanzrechtsweg und Zuständigkeit“ ist handschriftlich mit „= Zulässigkeit“ versehen. Bei § 33 FGO steht als Randvergleich „≈ § 347 AO“. Eine kleine Legende ordnet Gelb „Voraussetzung“ und Grün „Rechtsfolge“ zu.'),
      p('Bei § 33 FGO sind insbesondere Finanzrechtsweg, Streitigkeiten über Abgabenangelegenheiten sowie die Definition der Abgabenangelegenheiten farblich hervorgehoben.'),
      p('PDF-S. 8 / gedruckte S. 7: § 35 und § 38 FGO sind eingekreist; markiert sind die erstinstanzliche Entscheidung des FG und bei § 38 Abs. 1 der Sitz der beklagten Behörde als Anknüpfungspunkt.')
    ]),
  k('03','Klagearten, Vorverfahren und Klagefrist',[9,10],
    ['§§ 40, 41 FGO','§§ 44–48 FGO'],
    [
      p('PDF-S. 9: § 40 Abs. 1 hebt Aufhebung/Änderung, Anfechtungsklage und Verpflichtungsklage hervor; § 40 Abs. 2 markiert die behauptete Rechtsverletzung. § 41 FGO trägt ein pinkes X.'),
      p('Bei § 44 FGO sind erfolgloses Vorverfahren und der Gegenstand der Anfechtungsklage nach Einspruchsentscheidung markiert. Bei § 45 FGO ist die Klage ohne Vorverfahren bei Zustimmung der Behörde hervorgehoben.'),
      p('PDF-S. 10: § 46 FGO markiert die Untätigkeitsklage bei ausbleibender Entscheidung in angemessener Frist. § 47 FGO hebt Monatsfrist, Fristbeginn und fristwahrende Anbringung bei der Behörde hervor.'),
      p('§ 48 FGO trägt ein pinkes X und die handschriftliche Randnotiz „wie § 352 AO“.')
    ]),
  k('04','Elektronische Einreichung, Fristen und Beteiligte',[13,14,15,16],
    ['§ 52d FGO','§§ 54–58 FGO','§ 62 FGO'],
    [
      p('PDF-S. 13: In § 52d FGO sind die vertretungsberechtigten Personen sowie die Pflicht zur Übermittlung als elektronisches Dokument hervorgehoben.'),
      p('PDF-S. 14: Bei § 54 FGO ist der Verweis für Fristen auf die ZPO markiert. Bei § 56 FGO steht handschriftlich „≈ § 110 AO“; die Zwei-Wochen-Frist des Wiedereinsetzungsantrags ist pink markiert. Bei § 57 FGO sind Kläger und Beklagter hervorgehoben.'),
      p('PDF-S. 15: Bei § 58 Abs. 1 FGO ist die Fähigkeit zur Vornahme von Verfahrenshandlungen markiert; daneben steht „18 Jahre“.'),
      p('PDF-S. 16: § 62 FGO hebt Selbstvertretung vor dem FG und Vertretung durch u. a. Steuerberater hervor. § 62 Abs. 4 FGO (Vertretungszwang vor dem BFH) trägt ein pinkes X und ist gelb markiert.')
    ]),
  k('05','Beklagter sowie Form und Inhalt der Klage',[17,18],
    ['§§ 63–65 FGO','§ 69 FGO'],
    [
      p('PDF-S. 17: Neben § 63 FGO steht „Wer wird verklagt?“; markiert ist die Behörde, die den ursprünglichen VA erlassen bzw. den beantragten VA unterlassen oder abgelehnt hat.'),
      p('Bei § 64 Abs. 1 FGO steht handschriftlich „= mit Unterschrift!“; „schriftlich“ ist markiert. § 65 Abs. 1 FGO hebt die Muss-Angaben Kläger, Beklagter, Klagebegehren und bei der Anfechtung den Verwaltungsakt hervor.'),
      p('PDF-S. 18: Handschriftliche Folgerung über § 65 Abs. 2: Die Klage sei im Ergebnis auch ohne vollständige §-65-Abs.-1-Inhalte zur Fristwahrung zulässig; die erforderliche Ergänzung innerhalb bestimmter Frist ist grün markiert.'),
      p('§ 69 FGO trägt einen Warnmarker und den handschriftlichen Vergleich „≈ § 361 AO“. Markiert sind fehlende automatische Vollziehungshemmung durch Klage sowie die Aussetzung der Vollziehung durch Finanzbehörde bzw. Gericht und die Zulässigkeitsvoraussetzung des gerichtlichen Antrags.')
    ]),
  k('06','Verfahrensmarkierungen: Akteneinsicht, Beweis und Gerichtsbescheid',[20,22,23,24],
    ['§§ 76–78 FGO','§§ 80, 81, 86 FGO','§ 90a FGO','§ 91a FGO'],
    [
      p('PDF-S. 20: Pinke X-Markierungen stehen bei §§ 76, 77 und 78 FGO; bei § 78 Abs. 1 ist „Akten einsehen“ pink eingekreist.'),
      p('PDF-S. 22: Pinke X-Markierungen stehen bei §§ 80, 81 und 86 FGO.'),
      p('PDF-S. 23: § 90a FGO ist mit einem pinken X versehen; „ohne mündliche Verhandlung“ und „Gerichtsbescheid“ sind eingekreist.'),
      p('PDF-S. 24: § 91a FGO trägt ein pinkes X; die Möglichkeit der Teilnahme an einer mündlichen Verhandlung von einem anderen Ort ist eingekreist und mit der Randnotiz „Zoom-Call“ versehen.')
    ]),
  k('07','Urteil, Rechtskraft und Revision',[25,27,28,29],
    ['§§ 95, 100 FGO','§ 110 FGO','§§ 115, 116 FGO'],
    [
      p('PDF-S. 25: Pinke X-Markierungen stehen bei § 95 und § 100 FGO; bei § 95 ist „Urteil“ eingekreist.'),
      p('PDF-S. 27: § 110 FGO trägt ein pinkes X.'),
      p('PDF-S. 28: § 115 FGO trägt ein pinkes X. Hervorgehoben sind Zulassung der Revision durch FG oder BFH, die Zulassungsgründe (grundsätzliche Bedeutung, Fortbildung des Rechts / Sicherung einheitlicher Rechtsprechung, Verfahrensmangel) sowie die Bindung des BFH an die Zulassung; daneben ein Ausrufezeichen.'),
      p('PDF-S. 29: § 116 FGO trägt ein pinkes X. Markiert sind Nichtzulassungsbeschwerde, Monatsfrist beim BFH und Entscheidung des BFH durch Beschluss.')
    ]),
  k('08','Weitere Prüfungsmarkierungen und geprüfte unmarkierte Seiten',[2,3,4,5,6,11,12,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],
    ['§§ 5, 6, 10, 11 FGO','§§ 76–78 FGO','§§ 80, 81, 86 FGO','§§ 90a, 91a, 95, 100, 110, 115, 116 FGO'],
    [
      p('Die Quelle verwendet pinke X-Markierungen als Prüfungs-/Lernmarker. Zusätzlich zu den in den Themenblöcken beschriebenen Stellen sind auf PDF-S. 3 §§ 5, 6, 10 und 11 FGO markiert.'),
      p('PDF-S. 33 markiert mit einem großen pinken X den Beginn des Dritten Teils „Kosten und Vollstreckung“. Die übrigen Seiten dieses Teils enthalten in der Quelle keine zusätzlichen handschriftlichen Lernnotizen.'),
      p('Die tatsächlichen PDF-S. 2, 4–6, 11–12, 19, 21, 26, 30–32 und 34–37 wurden visuell geprüft; dort wurden keine zusätzlichen handschriftlichen Lernnotizen festgestellt, die über den gedruckten Gesetzestext hinaus als eigener Nachtrag zu übernehmen wären.')
    ])
];

export const aoFgoAudit = {
  sourceId:'ao-fgo',
  physicalPages:37,
  reviewedPages:Array.from({length:37},(_,i)=>i+1),
  nativeTranscription:'study-annotations-complete',
  printedStatuteReproduced:false,
  mappedExistingContent:['ao6-fgo-fahrtroute'],
  legalReview:false,
  personalDeliveryMarksExcluded:true,
};
