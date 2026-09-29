/* Original PDF pages 7–8, printed sheets 11–14, directly read as images.
   Exact original examples, blank/dash cells and source defects retained.
   No current-law review and no independently supplied solution. */
const p = text => ({ text });
const h = text => ({ typ: 'titel', text });
const t = (spalten, zeilen) => ({ typ: 'tabelle', spalten, zeilen });
const ledger = (spalten, zeilen) => ({ ...t(spalten, zeilen), quellenart: 'kontenentwicklung' });
const k = (id, title, page, normen, campusModules, bloecke) => ({
  id: `persg-facts-${id}`, title, pages: [page], printedSheets: [Number(id)], normen, campusModules,
  bloecke: bloecke.map(block => ({ ...block, quellenSeiten: [page] })),
});
export const persgFacts11bis14 = [
  k('11', '11 · GF-Vergütung und vGA bei der GmbH & Co. KG', 7,
    ['H 15.8 (3) EStH', '§ 8 (3) S. 2 KStG', '§ 15 (1) Nr. 2 S. 1 EStG', '§ 3 Nr. 40 S. 1 d), S. 2 EStG'], [10,4], [
    p('Quellenzählung: tatsächliche Blattnummer 11; im Inhaltsverzeichnis „GF-Vergütung und vGA“ unter Blatt 10. Die Abweichung bleibt erhalten.'),
    h('GF-Vergütung · Beteiligungsbild'),
    t(['Von', 'Nach', 'Anteil / Rolle in der Quelle'], [
      ['A-GmbH','A-GmbH & Co.KG','0 % · GF_KG'],
      ['A','A-GmbH & Co.KG','100 %'],
      ['A','A-GmbH','100 % · GF_GmbH'],
    ]),
    t(['Möglichkeit / Ebene','Quellenwortlaut'], [
      ['1. Mögl.','Vorweggewinn (grds. keine USt)'],
      ['2. Mögl.','Sondervergütung (KG: BA, VorSt; GmbH: SBE, USt)'],
      ['GmbH','SBA („Gehalt“ A)'],
      ['A','SBE (i.d.R. kein Unt.)'],
    ]),
    p('Gelb hervorgehoben: GF_KG bei der A-GmbH und GF_GmbH bei A. Der grüne gestrichelte Bogen verbindet die Vergütungsmöglichkeiten mit der Geschäftsführung der KG.'),
    h('Beachte: · gelber Klebezettel'),
    p('H 15.8 (3) „Tätigkeitsvergüt.“ EStH · 3. Sp.Str. 2. HS !!'),
    p('→ wenn GmbH eigenen Geschäftsbetrieb: Aufteilung GF-Verg. in § 15 (1) Nr. 2 + § [Die sichtbare Quellnotiz endet nach diesem Paragraphenzeichen; eine weitere Norm ist nicht angegeben und wird nicht ergänzt.]'),
    h('verd. Gewinnaussch. · ursprüngliches Beispiel und Lösung'),
    p('z.B. A-GmbH erhält eine um 5.000 € zu niedrige Haftungsverg.; JÜ_KG 100.000'),
    ledger(['Gewinnverteilung','A-GmbH','A','KG'], [
      ['JÜ 100.000','0 €','100.000 €','100.000 €'],
      ['Zuführung Verrkto A','','100.000 €',''],
      ['vGA § 8 (3) S. 2 KStG','5.000 €','− 5.000 €*','0 €'],
      ['§ 15 (1) Nr. 2 S. 1 1. HS EStG','5.000 €','95.000 €','100.000 €'],
      ['§ 15 (1) Nr. 2 S. 1 2. HS EStG','--','+ 5.000 €','5.000 €'],
      ['§ 3 Nr. 40 S. 1 d), S. 2 EStG','--','− 2.000 €','− 2.000 €'],
      ['Summe','5.000 €','98.000 €','103.000 €'],
    ]),
    p('* logische Folge, es können nicht mehr als 100.000 verteilt werden'),
    p('Die Minuszeichen bei A (vGA und § 3 Nr. 40) sowie bei KG (§ 3 Nr. 40) sind im Original rot. Leere Zellen bleiben leer; „--“ bleibt ein Strichfeld. Die Tabelle wird nicht neu berechnet.'),
  ]),
  k('12', '12 · Doppelstöckige Personengesellschaften', 7, ['§ 15 (1) Nr. 2 S. 2 EStG'], [12,7,10], [
    p('Quellenzählung: tatsächliche Blattnummer 12; im Inhaltsverzeichnis „Doppelst. PersG“ unter Blatt 11.'),
    t(['Von','Nach','Anteil'], [
      ['B','X-GmbH','100 %'], ['A','A&B OHG','50 %'], ['B','A&B OHG','50 %'],
      ['X-GmbH','X-GmbH & Co. KG','0 %'], ['A&B OHG','X-GmbH & Co. KG','50 %'], ['C','X-GmbH & Co. KG','50 %'],
    ]),
    h('Sachverhalt:'),
    p('X-GmbH: # vorweg 100.000 als GF-Vergütung; 10.000 Haftung'),
    p('# B ist bei X-GmbH angestellter GF'),
    p('A: Vermiet. GruBo an KG → Gew. 20.000'),
    p('KG: JÜ 200.000'),
    p('Gelber Klebezettel: § 15 (1) Nr. 2 S. 2 EStG; „S. 2“ ist rot hervorgehoben.'),
    h('Lösung:'),
    p('dopp. PersG; A und B sind jew. gem. § 15 (1) Nr. 2 S. 2 EStG MU der KG'),
    p('A: GruBo ist SBV_A bei KG · B: GF-Vergütung = SBE_B bei KG'),
    ledger(['Gewinnverteilung','X-GmbH','OHG','C','A','B','KG'], [
      ['JÜ 200.000','','','','','',''],
      ['− GF 100.000','100.000','','','','','100.000'],
      ['− Haf. 10.000','10.000','','','','','10.000'],
      ['Rest 90.000','--','45.000','45.000','--','--','90.000'],
      ['GmbH SBA','− 100.000','--','--','--','--','− 100.000'],
      ['SBE_B','--','--','--','--','100.000','100.000'],
      ['SBE_A','--','--','--','20.000','--','20.000'],
      ['Summe','10.000','45.000','45.000','20.000','100.000','220.000'],
    ]),
    p('Quellengestaltung: KG-Zuordnungen in der Lösung rot unterstrichen; beide Minuszeichen der Zeile „GmbH SBA“ rot. Die Zwischen- und Schlusszeilen sind unterstrichen. Unausgefüllte Zellen und Strichfelder sind getrennt erhalten.'),
  ]),
  k('13', '13 · Bilanzierung von Beteiligungen an PersG – Spiegelbildmethode', 8,
    ['§ 253 (1) u. (3) HGB', '§ 253 (3) S. 4 HGB', '§ 6 (5) S. 2 EStG', '§ 8 (1) KStG', '§ 4 (5) Nr. 2 EStG', '§ 9 Nr. 2 GewStG'], [13,14], [
    p('Quellenzählung: tatsächliche Blattnummer 13; im Inhaltsverzeichnis „Spiegelbildmethode“ unter Blatt 12.'),
    p('HR: Beteiligung ist VG (→ Schema!), Bew. gem. § 253 (1) u. (3) HGB mit AK oder niedr. beizul. Wert'),
    p('StR: Transparenzpr., Bilanzierung anteiliger WG verkörpert im anteil. Kapital (Spiegelbildmethode)'),
    t(['Von','Nach','Quellenangabe'], [
      ['A-GmbH','A-GmbH & B OHG','Beteiligungspfeil; kein Prozentsatz angegeben'],
      ['B','A-GmbH & B OHG','heller Beteiligungspfeil; kein Prozentsatz angegeben'],
    ]),
    p('Kleine Bilanzskizze „A-GmbH 31.12.“: „Bet. OHG“ mit Platzhaltern „€€“ unter HB und StB. HB ist gelb, StB grün markiert. Die Beteiligungszeile ist rot umrandet; grüne Pfeile führen zu den beiden Rechtsdarstellungen.'),
    t(['Handelsrecht','Steuerrecht'], [
      ['Buchung Forderung mAd WJ_OHG','spiegelbildliche Aktivierung des Kapitalanteils (GH, ErBil, SBil)'],
      ['Keine Buchung von Verlusten','ohne außerbil. Korrekturen'],
      ['bei vorübergehender Wertmind. → Abschr.-WR § 253 (3) S. 4 HGB','keine TW-Abschreibung'],
    ]),
    h('Bsp.:'),
    p('# A-GmbH vermiet. GruBo (AK 200.000 €) an OHG, p.a. Miete 1.000 € # Gewinnant. A-GmbH aus OHG: 10.000 € # Bewirtungsk. OHG (gesamt): 5.000 € # AK Beteiligung 100.000 €'),
    p('Quellenunterschied zum verknüpften Modul 14: Hier steht „p.a. Miete 1.000 €“, während dessen andere Mitschrift monatliche Miete nennt. Diese Quelle enthält im Beteiligungsbild keinen Prozentsatz. Zeitraum und fehlende Quote werden nicht aus dem Modul ersetzt.'),
    h('Lsg.:'),
    t(['HR','StR'], [
      ['OHG-Beteiligung → Schema','OHG-Beteiligung ≠ WG → Spiegelbildmethode'],
      ['GruBo → Zurechnung GmbH','GruBo → SBV_A-GmbH bei OHG (§ 6 (5) S. 2 EStG)'],
      ['Gewinnant. → Forderung','Gewinnant. → Zugang Bet.-BW'],
    ]),
    h('HB A-GmbH 31.12.'),
    ledger(['Aktiva','Betrag','Passiva','Betrag'], [
      ['Bet. OHG','100.000','gez. Kap.','300.000'],
      ['GrdSt','200.000','JÜ','11.000'],
      ['Forderung','10.000','',''],
      ['Bank_Miete','1.000','',''],
    ]),
    h('StB A-GmbH 31.12.'),
    ledger(['Aktiva','Betrag','Passiva','Betrag'], [
      ['Bet. OHG','310.000','gez. Kap.','300.000'],
      ['GrdSt','0','JÜ','11.000'],
      ['Forderung','0','StAP','0'],
      ['Bank_Bet.ertrag','1.000','',''],
    ]),
    p('Notiz zur StB: „(led. Aktivtausch)“. Die violett geschriebenen Ansätze 310.000 und die Nullwerte bleiben als Originalbeträge erhalten.'),
    h('steuerl. GHB OHG 31.12. · gezeigter Kapitalausschnitt'),
    ledger(['Kapitalposten','Betrag'], [['Kap I GmbH','100.000'],['Kap II GmbH','10.000']]),
    p('(Gewinnanteil) · Die beiden Kapitalposten sind rot umrandet.'),
    h('SBil A-GmbH bei OHG 31.12.'),
    ledger(['Aktiva','Betrag','Kapitalentwicklung','Betrag'], [
      ['GrdSt','200.000','Kap 1.1.','0'],
      ['','','NE','200.000'],
      ['','','PE','− 1.000'],
      ['','','Gewinn','1.000'],
    ]),
    p('Die Kapitalentwicklung der SBil ist rot umrandet. Zwei grüne Pfeile führen vom GHB-Kapital und vom SBil-Kapital zum Ansatz „Bet. OHG 310.000“ in der StB der A-GmbH.'),
    p('§ 8 (1) KStG iVm § 4 (5) Nr. 2 EStG: + 750 €'),
    p('§ 9 Nr. 2 GewStG: ./. 11.750 €'),
  ]),
  k('14', '14 · Überblick: Übertragung einzelner WG aus dem PV', 8,
    ['§ 4 (1) S. 8 EStG', '§ 6 (1) Nr. 5 EStG', '§§ 17, 20 (2), 23 EStG', '§ 23 (1) S. 5 EStG', 'BMF 26.07.2016'], [20,11], [
    p('Quellenzählung: tatsächliche Blattnummer 14; im Inhaltsverzeichnis „Übertragung WG aus PV“ unter Blatt 13.'),
    t(['Vorgang','Sachverhalt / Pfeil','Vorschriften'], [
      ['Überführung (kein Rechtsträgerwechsel)','PV_A → EU_A','§ 4 (1) S. 8, § 6 (1) Nr. 5 EStG'],
      ['Überführung (kein Rechtsträgerwechsel)','PV_A → SBV_A','§ 4 (1) S. 8, § 6 (1) Nr. 5 EStG [Wiederholungszeichen in der Quelle]'],
      ['Übertragung (Rechtsträgerwechsel)','PV_A → A & B OHG','3 Möglichkeiten → Veräußerung / gegen Gesellschaftsrechte / unentgeltlich'],
    ]),
    h('3 Möglichkeiten'),
    t(['Veräußerung','gegen Gesellschaftsrechte','unentgeltlich'], [
      ['A: ggf. §§ 17, 20 (2), 23 EStG; OHG: AK','= tauschähnlicher Umsatz !! · A: ggf. §§ 17, 20 (2), 23 EStG; OHG: AK','§ 4 (1) S. 8 EStG · A: ggf. § 23 (1) S. 5 EStG · OHG: § 6 (1) Nr. 5 EStG'],
      ['gegen Geld','KapKto I','ausschl. ges. geb. KapRL'],
      ['Übernahme Restschuld','KapKto I und KapKto II','ausschl. KapKto II (BMF 26.07.2016)'],
      ['Gutschr. auf Darl.kto','KapKto I und ges. geb. KapRL','KapKto II und ges. geb. KapRL'],
      ['','','HR: keine Buchung / sbE + · StR: sbE + außerbil. Korrektur'],
    ]),
    p('Die drei Spalten enthalten eigenständige Alternativenlisten, keine zusätzlich behauptete fallweise Entsprechung zwischen den Tabellenzeilen. Rot markiert sind „tauschähnlicher Umsatz !!“, die Kontenziffern und „ausschl.“; „KapRL“ in der ersten unentgeltlichen Alternative ist gelb hervorgehoben.'),
    p('Für die Frage, welche der 3 Möglichkeiten vorliegt, ist die handelsrechtliche Buchung entscheidend!'),
    p('Gelber Klebezettel: „s. dazu: Erl. Nr. 1 § 4/13/15 + § 6/16“'),
  ]),
];
export const persgFacts11bis14Evidence = [
  { page:7, printedSheets:[11,12], chapters:['persg-facts-11','persg-facts-12'], scope:'Direct full-page and enlarged-sheet review: three GF ownership/role edges, two remuneration forms, source-truncated sticky-note norm, exact seven-row vGA solution; six double-tier edges, facts and all eight-by-seven original distribution cells. Blank/dash distinction and source annotations retained.' },
  { page:8, printedSheets:[13,14], chapters:['persg-facts-13','persg-facts-14'], scope:'Direct full-page and enlarged-sheet review: HR/StR comparison and mirror arrows, original annual1000rent and no inferred ownership percentage, all four ledgers and750/11750corrections; three PV transfer edges, all three classification columns, repeated citations and sticky-note reference. Actual sheet numbering differs from contents and stays explicit.' },
];
