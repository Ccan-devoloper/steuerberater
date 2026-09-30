/* Direct visual transfer: original PDF15–16 / printed sheets27–30.
   Original captions, signs, crossed fields and incomplete notes are preserved.
   No current-law review and no original solution inferred from another module. */
const p = text => ({ text, quellenZeilen: text.includes('\n') });
const h = text => ({ typ: 'titel', text });
const t = (spalten, zeilen) => ({ typ: 'tabelle', quellenart: 'textvergleich', quellenZeilen: true, spalten, zeilen });
const balance = zeilen => ({ typ: 'tabelle', quellenart: 'kontenentwicklung', spalten: ['Aktiva','Betrag','Passiva','Betrag'], zeilen });
const calc = (spalten, zeilen) => ({ typ: 'tabelle', quellenart: 'kontenentwicklung', quellenlayout: 'rechenpaar', spalten, zeilen });
const k = (number, title, page, normen, campusModules, bloecke) => ({
  id: `persg-facts-${number}`, title, pages: [page], printedSheets: [number], normen, campusModules,
  bloecke: bloecke.map(block => ({ ...block, quellenSeiten: [page] })),
});
export const persgFacts27bis30 = [
  k(27, '27 · § 24 UmwStG – Zuzahlung in das PV · Fortsetzung', 15, ['§ 24 UmwStG'], [30,33,34], [
    p('getilgt'),
    p('# neg. Kontokorrent im EU (privat veranlasst) wird bei Einbringung mit Zuzahlung getilgt'),
    p('Quellenfortsetzung zu Blatt 26 / PDF14: Das erste Wort „getilgt“ setzt die dort nach „wird mit Zuzahlung“ endende Notiz fort. Damit ist genau dieses Satzende durch die nächste Originalseite belegt, nicht aus allgemeinem Wissen ergänzt. Der vorherige seitengebundene Text bleibt unverändert; die neue Kontokorrent-Zeile ist ein eigener Quellenpunkt. „privat“ ist im Original rot. Der übrige Blattbereich ist leer und wird nicht mit zusätzlichem Lernstoff gefüllt.'),
  ]),
  k(28, '28 · Überblick Austritt Gesellschafter', 15,
    ['§ 16 (1) Nr. 2 EStG','§ 16 (3) S. 1 i.V.m. § 16 (1) Nr. 2 EStG','§ 6 (5) S. 2 EStG'], [39,40,23], [
    t(['Fallvarianten','Zivilrechtlich','Steuerrechtlich'], [
      ['1. A, B & C – OHG → A & B – OHG','– Anwachsung','– Veräußerung'],
      ['2. A & B – OHG → EU_A','– Auseinanders. Anspruch','– Anschaffung anteiliger WG'],
    ]),
    h('SBV · Behandlung im Rahmen des Austritts'),
    t(['Von','Nach','Quellenpfeil'], [['SBV_C (GrdSt.)','A, B & C – OHG','Schwarz; nach oben'],['A, B & C – OHG','A & B – OHG','Blau; entgeltlich']]),
    t(['Quellenfall','Originaleinordnung'], [
      ['a) Verkauf an A + B · C','→ § 16 (1) Nr. 2 EStG, Veräußerung MU-Anteil;'],
      ['A & B','a. MU-Betriebsaufspaltung, wenn Vermietung an OHG\nb. SBV A & B bei OHG, wenn unentg. Überlassung\nc. Bilanzierung bei Verkauf an OHG'],
      ['b) GrdSt wird PV des C','→ Aufgabe des MU-Anteils (§ 16 (3) S. 1 i.V.m. § 16 (1) Nr. 2 EStG'],
      ['c) Überführung in EU_C','→ § 6 (5) S. 2 EStG, Gewinn Gesamthandsbereich = lfder Gewinn'],
    ]),
    p('3 Möglichkeiten:\n1. Abfindung = BW\n2. Abfindung > BW\n3. Abfindung < BW'),
    p('Grundfall (Ausscheiden zum BW): C scheidet zum BW aus A,B,C – OHG aus:'),
    h('vorher: A,B,C OHG'),
    balance([['WG (st. Res. 30.000)','120.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Kap. C','40.000'],['','120.000','','120.000']]),
    h('nachher: A,B,C OHG [C im Original rot durchgestrichen]'),
    balance([['WG (st. Res. 30.000)','120.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Verb. C','40.000'],['','120.000','','120.000']]),
    h('Auswirkungen C'),
    calc(['Originalrechnung','Betrag'], [['VKP','40.000'],['− BW','40.000'],['= Gewinn','0,–']]),
    h('Auswirkungen A & B – OHG: Änderung AfA'),
    t(['A','B','C [im Original durchgestrichen]'], [['40.000','40.000','40.000'],['AfA wie bisher','AfA wie bisher','AfA neu']]),
    p('Quellenmarkierung: Grüne Klammer unter A und B verbindet beide mit „AfA wie bisher“. Grüner Pfeil von „AfA neu“ zum ehemaligen C-Anteil 40.000. Klebezettel: gilt auch bei atypisch stillen Gesellschaften'),
    p('Quellenabgleich: Der vorhandene Fall 18 zu Modul 40 nennt ebenfalls WG 120.000 und drei Kapitalkonten zu 40.000; seine Kurzlösung ersetzt weder die hier gezeigten Bilanzen noch das konkrete AfA-Schema. Die SBV-Fallzeile b) endet im Original ohne schließende Klammer; keine Klammer oder zusätzliche Norm ergänzt. Die beiden oberen Listen bleiben als nebeneinander stehende Quellenspalten erhalten, nicht als neue Einzelfall-Zuordnung ausgedeutet.'),
  ]),
  k(29, '29 · Austritt Gesellschafter > Buchwert (aus betrieblichen Gründen)', 16, ['§ 728 BGB'], [40,41], [
    p('§ 728 BGB'),
    h('A,B,C OHG'),
    balance([['WG (st. Res. 30.000)','120.000','Kap. A','40.000'],['(FW 60.000)','','Kap. B','40.000'],['','','Kap. C','40.000'],['','120.000','','120.000']]),
    p('Abfindung an C: 70.000'),
    h('Ausw. C'),
    calc(['Originalrechnung','Betrag'], [['VKP','70.000'],['./. Kap','40.000'],['= beg. Gewinn','30.000']]),
    p('Klebezettel: Stille Reserven aus SBV sind zusätzlich aufzudecken\nQuellenbild: Der untere Wortrand von „aufzudecken“ ist angeschnitten; das Wort ist noch lesbar.'),
    h('Auswirkungen bei A & B – OHG'),
    p('Aufstockung: 30.000 € im Verhältnis der stillen Reserven\nBerechnung: (st. Res. WG / Se aller st. Res.) × Aufstockungsbetrag'),
    h('vorher: A,B,C OHG [Quellenbeschriftung „vorher“; C rot durchgestrichen]'),
    balance([['WG (120.′ + 10.′)','130.000','Kap. A','40.000'],['FW','20.000','Kap. B','40.000'],['','','Abfind.verb.','70.000'],['','150.000','','150.000']]),
    t(['Quellenrechnung','A','B','C [durchgestrichen] (A,B)'], [
      ['WG','40.000','40.000','40.000'],
      ['Aufstockung WG','','','+ 10.000 (10.′/30.′ der st. Reserven)'],
      ['AK für WG bei A+B','','','50.000'],
      ['FW','0','0','20.000 (20.′/30.′ der st. Reserven)'],
    ]),
    h('Abwandlung'),
    p('– Abfindung 100.000, davon 30.000 um C „loszuwerden“ (→ lästiger G’ter)'),
    h('Ausw. C'),
    calc(['Originalrechnung','Betrag'], [['VKP','100.000'],['./. Kap','40.000'],['= beg. Gewinn','60.000']]),
    h('Auswirkungen bei A & B – OHG · nachher: A,B,C OHG [C rot durchgestrichen]'),
    balance([['WG (120.′ + 10.′)','130.000','Kap. A','40.000'],['⅓ FW','20.000','./. Verl.','15.000'],['','','','25.000'],['sbA [im Original rot durchgestrichen]','30.000','Kap. B','40.000'],['','','./. Verl.','15.000'],['','','','25.000'],['','','Abfindverb.','100.000'],['','150.000','','150.000']]),
    t(['Von','Nach','Quellenmarkierung'], [['sbA 30.000','./. Verl. 15.000 bei Kap. A','Blauer Pfeil; sbA-Zeile rot gestrichen'],['sbA 30.000','./. Verl. 15.000 bei Kap. B','Blauer Pfeil; sbA-Zeile rot gestrichen']]),
    p('Merke:\n1. alle WG im Verhältnis der st. Reserven aufstocken\n2. darüber hinausgehender Anteil → Aufwand'),
    p('Quellenabgleich: Die Quelle beschriftet die erste aufgestockte Bilanz tatsächlich mit „vorher“. Das bleibt erhalten. Die gestrichene sbA-Zeile 30.000 wird als ursprüngliche Markierung gezeigt, nicht als zusätzlicher ungestrichener Bilanzposten gerechnet; die blauen Pfeile führen zu den beiden Verlustabzügen. Der größere Austrittsfall in Modul 41 mit § 6b-Rücklage bleibt ein anderer Fall und liefert hier keine ergänzte Lösung.'),
  ]),
  k(30, '30 · Austritt Gesellschafter < Buchwert (aus betrieblichen Gründen) · 1', 16, ['§ 728 BGB'], [40,42], [
    p('§ 728 BGB · Gelb markierte „1“ im Originalkopf'),
    h('Abf. < BW'),
    t(['Alternative','Originalfall'], [
      ['1.','Aussch. G’ter verzichtet auf Mehrbetrag (z.B. um Zustimmung zum vorzeitigen Ausscheiden zu erhalten) → voll entgeltlicher Vorgang (s.u.)'],
      ['2.','Einigung auf Minderabfindung (z.B. im Gesellschaftsvertrag) → teilentgeltlich (s. Fc 29)'],
    ]),
    h('Altern. 1 · vorher: A,B,C OHG'),
    balance([['Maschine','60.000','Kap. A','50.000'],['GruBo','120.000','Kap. B','50.000'],['Bank','10.000','Kap. C','50.000'],['','','Verb.','40.000'],['','190.000','','190.000']]),
    p('Abfindung an C: 20.000 (um vorzeitig auszuscheiden)'),
    h('Ausw. C'),
    calc(['Originalrechnung','Betrag'], [['VKP','20.000'],['./. Kap','50.000'],['= Verlust','30.000']]),
    p('Klebezettel: Stille Reserven aus SBV sind zusätzlich\nQuellenhinweis: Dieser Zettel endet sichtbar nach „zusätzlich“. Kein weiteres Wort aus dem anders beschnittenen Zettel auf Blatt 29 ergänzt.'),
    h('Auswirkungen bei A & B – OHG'),
    p('Abstockung: 30.000 im Verhältnis der Buchwerte\nQuellenpfeil: grün von „Verlust 30.000“ zur Abstockung'),
    p('Was ist „abstockbar“?\n• Bank [rot durchgestrichen]\n• Verb. aufstocken [rot durchgestrichen]\n• Maschine, Grubo [grüner Haken]'),
    p('Berechnung: (BW WG / Se aller abstockb. BW) × Abstockungsbetrag'),
    t(['Wirtschaftsgut','Originalrechnung','Betrag'], [['Masch.','60.000 / 180.000 × 30.000 =','10.000'],['GruBo','120.000 / 180.000 × 30.000 =','20.000'],['Summe','180.000','30.000']]),
    h('nachher: A,B,C OHG [C rot durchgestrichen]'),
    balance([['Maschine','50.000','Kap. A','50.000'],['GruBo','100.000','Kap. B','50.000'],['Bank','10.000','Abf.verb.','20.000'],['','','Verb.','40.000'],['','160.000','','160.000']]),
    h('Ausw. auf AfA_Maschine'),
    t(['A','B','C [durchgestrichen] (A,B)'], [['20.000','20.000','20.000'],['','','./. 10.000*'],['','','= 10.000'],['AfA wie bisher','AfA wie bisher','AfA neu, RW/RND']]),
    p('Quellenmarkierung: Grüne Klammer verbindet A und B mit „AfA wie bisher“; grüner Pfeil von „AfA neu“ zum Ergebnis 10.000.\n* keine (Sonder-)Abschr., sondern AK-Minderung'),
    p('Merke: [Klebezettel im Original um 180° gedreht]\nAufstockung im Verhältnis der st. Reserven\nAbstockung im Verhältnis der Buchwerte\nWarnsymbol im Bereich „Abstockung“'),
    p('Quellenabgleich: Der originale Verweis „s. Fc 29“ bleibt unverändert; die zweite Alternative wird hier nicht mit einer Lösung aus einer späteren Seite ergänzt. Die Beträge 20.000 / 50.000 und die Abstufung Maschine/GruBo stammen aus diesem Blatt, nicht aus dem anderen Sachwertfall mit 130.000 / 110.000 in Modul 42. Die alleinige Kopf-Norm § 728 BGB wird nicht um weitere zivilrechtliche Normen aus Modul 39 erweitert.'),
  ]),
];
export const persgFacts27bis30Evidence = [
  { page:15, chapters:['persg-facts-27','persg-facts-28'], reading:'Both original half-sheets directly read. Exact getilgt continuation of sheet26 and independent private-overdraft note; blank area not filled. All exit columns, SBV paths, three alternatives, original two balances and AfA brackets/arrow preserved.', sourceContinuation:{fromPage:14,fromPrintedSheet:26,toPrintedSheet:27,visibleWord:'getilgt',resolved:true} },
  { page:16, chapters:['persg-facts-29','persg-facts-30'], reading:'Both original half-sheets plus rotated note directly read. Original70k/100kexit cases, ratio, struck sbA/dual-loss arrows and before-caption retained. Original20kexit/loss, proportional30kabstockung, all balances/AfA and crossed exclusions preserved. Sheet30SBVnote stops at zusätzlich; no word borrowed from sheet29. Fc29 and head norm unaltered.' },
];
