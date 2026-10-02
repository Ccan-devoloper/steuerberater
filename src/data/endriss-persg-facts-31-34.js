/* Direct visual transfer of original PDF17–18 / printed sheets31–34.
   Preserve original figures, unfinished note, captions and diagram directions.
   No current-law review; existing campus examples do not supply source solutions. */
const p = text => ({ text, quellenZeilen: text.includes('\n') });
const h = text => ({ typ: 'titel', text });
const t = (spalten, zeilen) => ({ typ: 'tabelle', quellenart: 'textvergleich', quellenZeilen: true, spalten, zeilen });
const ledger = (spalten, zeilen) => ({ typ: 'tabelle', quellenart: 'kontenentwicklung', spalten, zeilen });
const balance = zeilen => ledger(['Aktiva','Betrag','Passiva','Betrag'], zeilen);
const calc = zeilen => ({ ...ledger(['Originalrechnung','Betrag'], zeilen), quellenlayout: 'rechenpaar' });
const k = (number, title, page, normen, campusModules, bloecke) => ({
  id: `persg-facts-${number}`, title, pages: [page], printedSheets: [number], normen, campusModules,
  bloecke: bloecke.map(block => ({ ...block, quellenSeiten: [page] })),
});
export const persgFacts31bis34 = [
  k(31, '31 · Austritt Gesellschafter < Buchwert (aus betrieblichen Gründen) · 2', 17,
    ['§ 728 BGB','BFH v. 11.07.1973 I R 126/71'], [39,40,41], [
    p('§ 728 BGB · Gelb markierte „2“ im Originalkopf · Altern. 2'),
    h('vorher: A,B,C OHG'),
    balance([['Maschine','60.000','Kap. A','50.000'],['GruBo','120.000','Kap. B','50.000'],['Bank','10.000','Kap. C','50.000'],['','','Verb.','40.000'],['','190.000','','190.000']]),
    p('Abfindung an C: 20.000 (wg. Gesellschaftsvertrag)'),
    h('Ausw. C'),
    calc([['VKP','20.000'],['./. Kap','50.000'],['= Verlust','30.000']]),
    p('Klebezettel: Teilentgeltl. Vorgang lt. BFH v. 11.07.1973 I R 126/71'),
    h('Auswirkungen bei A & B – OHG'),
    t(['Nr.','Originalfolge'], [['1.','Fortführung der Buchwerte unter teilw. Neuberechnung AfA'],['2.','Gewinnerhöhung i.H.d. Unterschiedsbetrags (30.000)']]),
    h('nachher: A,B,C OHG [C im Original rot durchgestrichen]'),
    balance([['Maschine','60.000','Kap. A','65.000'],['GruBo','120.000','Kap. B','65.000'],['Bank','10.000','Abf.verb.','20.000'],['','','Verb.','40.000'],['','190.000','','190.000']]),
    p('inkl. Gewinnerhöhung bei A und B jeweils 15.000\nQuellenmarkierung: Zwei blaue Pfeile führen von diesem Hinweis zu Kap. A 65.000 und Kap. B 65.000. „teilw.“ ist rot unterstrichen; die geänderten Kapitalbeträge und Abf.verb. sind rot hervorgehoben.'),
    h('Ausw. auf AfA_Maschine'),
    t(['A','B','C [im Original durchgestrichen] (A,B)'], [['20.000','20.000','20.000']]),
    t(['Verzweigung des C-Anteils','Originalrechnung','AfA-Zuordnung'], [['Buchwertfortführung','20.000 × 30/50','AfA wie bisher'],['Anschaffung','20.000 × 20/50','AfA neu, RW/RND']]),
    p('Quellenschema: Vom ehemaligen C-Anteil 20.000 weisen zwei blaue Pfeile zu den beiden Bruchrechnungen. Die grüne Klammer verbindet A, B und die Buchwertfortführung mit „AfA wie bisher“. Der grüne Pfeil weist von „AfA neu“ zur Anschaffung. Die Produkte der Bruchrechnungen sind im Original nicht ausgerechnet und werden hier nicht ergänzt.'),
    p('Quellenabgleich: Das ist die tatsächlich folgende Alternative 2 zu Blatt 30, nicht dessen voll entgeltlicher Fall. Ausgangsbilanz und Abfindung werden im Original wiederholt, die Buchwerte bleiben hier jedoch bestehen und Kap. A/B steigen auf jeweils 65.000. Die zuvor veröffentlichte Alternative 1 bleibt unverändert. Verknüpfte Lernmodule dienen der Vertiefung und ersetzen weder diese Zahlen noch die Originalentscheidung.'),
  ]),
  k(32, '32 · Austritt Gesellschafter und § 6b EStG', 17,
    ['R 6b.2 (10) S. 6 EStR','§ 6b (3) EStG','§ 6b (7) EStG','§ 16 + § 34 EStG'], [41], [
    p('R 6b.2 (10) S. 6 EStR'),
    p('Wahlrecht bei im GHB oder in der SB bereits bilanzierter RL:\n1. (ant.) Auflösen\n2. beibehalten'),
    h('1. anteilige Auflösung anlässlich des Austritts'),
    h('vorher: A,B,C OHG'),
    balance([['WG','150.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Kap. C','40.000'],['','','RL § 6b','30.000'],['','150.000','','150.000']]),
    p('C erhält als Abfindung 50.000 €,\nRL besteht seit 2 Jahren'),
    h('Ausw. C'),
    calc([['RL § 6b (3)','10.000'],['+ § 6b (7) · (10.000 × 2 J. × 6 %)','1.200'],['+ Abfindung','50.000'],['./. KapKto (inkl. aufgel. ant. RL)','50.000'],['beg. Gewinn','11.200']]),
    h('Auswirkungen A & B – OHG · nachher: A,B,C OHG [C rot durchgestrichen]'),
    balance([['WG','150.000','Kap. A','40.000'],['','','Kap. B','40.000'],['','','Verbindl.','50.000'],['','','RL § 6b','20.000'],['','150.000','','150.000']]),
    h('2. Beibehaltung (für verbleibenden Zeitraum nach § 6b (3) EStG)'),
    p('Auswirkungen A & B – OHG:\nBilanz ist dieselbe, da RL insoweit in der GHB stets aufzulösen!'),
    p('Quellenpfeil: Der grüne Pfeil von „Auswirkungen A & B – OHG“ unter Alternative 2 weist auf dieselbe Nachher-Bilanz mit WG 150.000, Verbindl. 50.000 und RL § 6b 20.000. „GHB“ ist gelb und „stets aufzulösen!“ rot hervorgehoben. Keine zweite abweichende Bilanz ergänzt.'),
    h('Ausw. C · Beibehaltung'),
    calc([['VKP','50.000'],['./. Kap (inkl. aufgel. ant. RL)','50.000'],['Gewinn','0']]),
    p('(Beg. § 16 + § 34 EStG scheidet für übrige st. Res aus, wenn RL aus wes. Betriebsgrdl.!)'),
    h('+ ErgBil_C'),
    balance([['Kap','10.000','RL § 6b','10.000'],['','10.000','','10.000']]),
    p('Quellenmarkierung: Das rote Plus verbindet die Rechnung bei C mit der ErgBil_C; die erste Ziffer des Kapitalabzugs 50.000 ist in beiden Rechnungen rot hervorgehoben.'),
    p('Merke: In der Gesamthandsbilanz ist die Rücklage beim Austritt stets aufzulösen! Bei der Beibehaltung durch den austretenden Gesellschafter kann er Sie in einer „vermögenslosen“ Ergänzungsbilanz fortführen.'),
    p('Klebezettel: Diese Ausführungen gelten auch für Rücklagen in der\nQuellenhinweis: Der sichtbare Text dieses Originalzettels endet nach „der“. Keine Ergänzung aus dem oberen Wahlrecht, aus allgemeinem Wissen oder aus dem anders aufgebauten Lernmodul. Auch das folgende Blatt 33 liefert kein erkennbares Satzende.'),
    p('Beachte auch: – Bildung RL § 6b EStG anlässlich Austritt: siehe 2. (ErgBil)'),
    p('Quellenabgleich: Der große Unterrichtsfall in Modul 41 verlangt ebenfalls einen § 6b-Abgleich, verwendet aber einen anderen Sachverhalt. Hier bleiben die Originalwerte 150.000 / 30.000 / 50.000 und beide Alternativen einschließlich des ursprünglichen Kapitalabzugs 50.000 maßgeblich; keine Neuberechnung oder vermeintliche Berichtigung.'),
  ]),
  k(33, '33 · Austritt Gesellschafter und § 6b EStG · Fortsetzung', 18,
    ['R 6b.2 (10) S. 6 EStR','§ 6b EStG'], [41], [
    p('R 6b.2 (10) S. 6 EStR'),
    p('– Überführung RL § 6b EStG in anderes BV (im Zeitpunkt der Reinvestition)'),
    p('Quellenumfang: Außer Überschrift, Fundstelle und dieser einzelnen Fortsetzungszeile ist das Blatt leer. Es enthält kein weiteres Beispiel und kein Satzende zur auf Blatt 32 nach „der“ abbrechenden Klebenotiz. Die freie Fläche wird nicht mit zusätzlichem Lernstoff gefüllt.'),
  ]),
  k(34, '34 · Austritt Gesellschafter gegen Sachwertabfindung', 18,
    ['§ 6b EStG','Erl. Nr. 1 § 16/3'], [42,41,44], [
    h('vorher: A,B,C OHG'),
    balance([['GruBo (st. Res. 20.000)','30.000','Kap. A','40.000'],['WG (st. Res. 10.000)','90.000','Kap. B','40.000'],['','','Kap. C','40.000'],['','120.000','','120.000']]),
    p('C erhält als Abfindung GruBo'),
    p('Lösung in zwei Schritten:\n1. Veräußerungsgewinn (=Abfindungsverb.) C bestimmen\n2. „Verkauf“ GruBo über Abfindungsverbindlichkeit'),
    h('Schritt 1 – Abfindungsverbindlichkeit'),
    h('Ausw. C'),
    calc([['„VKP“','50.000'],['./. Kap','40.000'],['= beg. Gewinn','10.000']]),
    h('Auswirkungen bei A & B – OHG'),
    p('Aufstockung: 10.000 € i.Verh.d. st. R.\n(st.Res. WG / Se aller st. Res) × Aufstockungsbetrag'),
    t(['A','B','C [im Original durchgestrichen] (A,B)'], [['GruBo 10.000','GruBo 10.000','GruBo 10.000'],['','','+ 6.666'],['','','16.666']]),
    p('(gilt auch für WG)'),
    h('Nach Schritt 1 · A,B,C OHG'),
    balance([['GruBo (st. Res. 13.334)','36.666','Kap. A','40.000'],['WG (st. Res. 6.666)','93.334','Kap. B','40.000'],['','','Abf.Verb.','50.000'],['','130.000','','130.000']]),
    h('Schritt 2 – „Verkauf“'),
    ledger(['Soll','Betrag','Haben','Betrag'], [['Abf.Verb. C','50.000','GruBo','36.666'],['','','sbE','13.334']]),
    p('(ivH § 6b EStG mgl)'),
    h('Nach Schritt 2 · A,B,C OHG'),
    balance([['GruBo','0','Kap. A','46.667'],['WG (st. Res. 6.666)','93.334','Kap. B','46.667'],['','93.334','','93.334']]),
    p('inkl. „Veräußerungsgewinn“\nQuellenmarkierung: Zwei grüne Pfeile führen vom sbE-Betrag 13.334 zu Kap. A 46.667 und Kap. B 46.667. Die Bilanzüberschriften nach Schritt 1 und 2 lauten im Original weiter „A,B,C OHG“; dort ist kein C gestrichen.'),
    t(['Quellenrechnung','A','B','C [im Original durchgestrichen] (A,B)'], [['BW GruBo','10.000','10.000','16.666'],['VKP','16.667','16.667','16.666'],['Gewinn','6.667','6.667','0']]),
    p('§ 6b EStG ✓\ngrds. kein § 6b EStG, da innerhalb von 6 Jahren'),
    p('Quellenschema: Die grüne Klammer verbindet die Gewinne 6.667 bei A und B mit „§ 6b EStG ✓“. Der rote Pfeil weist vom Hinweis „grds. kein § 6b EStG, da innerhalb von 6 Jahren“ zur 0 in der ehemaligen C-Spalte. Diese ursprüngliche Zuordnung wird nicht rechtlich umgedeutet.'),
    p('Abwandlung: C überführt GruBo in EU_C\n→ unechte Realteilung !!\n(→ Erl. Nr. 1 § 16/3)'),
    p('Quellenabgleich: Der Sachwertfall in Modul 42 mit Abfindung 130.000 und Grubo 2 zu 110.000 ist ein anderer Fall; er ersetzt diese 50.000-/36.666-Rechnung nicht. Die einleitende Quellengleichsetzung „Veräußerungsgewinn (=Abfindungsverb.)“ und der anschließend ausdrücklich gerechnete Gewinn 10.000 bleiben nebeneinander stehen. Ebenso werden 6.666/6.667, 13.334 und 46.667 nicht vereinheitlicht. Die Abwandlung wird nur wie im Original mit dem vorhandenen Realteilungsmodul 44 verknüpft, ohne eine dortige Lösung hier zu ergänzen.'),
  ]),
];
export const persgFacts31bis34Evidence = [
  { page:17, chapters:['persg-facts-31','persg-facts-32'], reading:'Both original half-sheets directly read at enlarged resolution. Actual below-book-value alternative2 with unchanged asset values,65000capitals,all split AfA arrows/brackets and original unevaluated fractions. Both section6b alternatives with all original figures and supplementary balance. Sticky note32ends at der; no ending inferred from the sparse next sheet.' },
  { page:18, chapters:['persg-facts-33','persg-facts-34'], reading:'Sparse section6b continuation fully read without filling blank space. Sachwert two-step example with all three balances, original booking,all source rounding and literal Se formula; exact green/red diagram targets retained. Original equality and unchanged A,B,C balance captions preserved; real-division variant linked without invented solution.' },
];
