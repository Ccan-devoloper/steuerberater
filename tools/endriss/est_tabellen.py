"""Tabellenfelder nach visueller Kontrolle ihrer Originalanordnung.
Koordinaten in PDF-Punkten. Keine inhaltliche oder Rechtsstandskorrektur.
"""
from est_abbildungen import table, text, title

def region(page, bbox, caption, blocks):
    return {'page': page, 'bbox': bbox, 'caption': caption, 'blocks': blocks}

TABLES = [
 region(90,[70,557,528,613],'Aufwendungen des Besitzunternehmens',[
  table(['Aufwendung','Betrag'],[['Abschreibung','4.000 €'],['Erhaltungsaufwendungen','3.000 €'],['Strom, Gas, Wasser','1.000 €'],['Schuldzinsen','2.000 €']])]),
 region(95,[70,154,528,278],'Ermittlung der Zählobjekte',[
  table(['Schritt','Objekte'],[['Ausgangspunkt','Grundstücke jeglicher Art, Rz. 8 BMF-gG'],['./.','langfristig vermietete Objekte (mind. 10 Jahre), Rz. 2 BMF-gG'],['./.','langfristig zu eigenen Wohnzwecken genutzte Objekte (mind. 5 Jahre), Rz. 10 BMF-gG'],['./.','ohne Gewinnerzielungsabsicht veräußerte Objekte, Rz. 11 BMF-gG'],['./.','kein enger zeitlicher Zusammenhang zwischen Errichtung, Erwerb, Modernisierung und der Veräußerung, Rz. 6 BMF-gG'],['=','„Zählobjekt“']])]),
 region(96,[70,307,529,403],'Fristbeginn der Zählobjekte',[
  table(['Tatbestand','BMF-gG','Fristbeginn'],[['Errichtung von Objekten','Rz. 20','Fertigstellung'],['Erwerb von Objekten','Rzn. 22, 20','Erwerb'],['Modernisierung von Objekten','Rz. 24','Abschluss der Sanierungsarbeiten'],['unbebaute Grundstücke','Rzn. 26, 20','Erwerb']])]),
 region(100,[70,161,529,256],'Beginn des gewerblichen Grundstückshandels',[
  table(['Tatbestand','BMF-gG','Beginn des gew. Grundstückshandels'],[['Errichtung von Objekten','Rz. 31 a)','Stellung des Bauantrags'],['Erwerb von Objekten','Rz. 31 b)','Grundstückserwerb'],['Modernisierung von Objekten','Rz. 31 c)','Beginn der Modernisierungsarbeiten'],['Sanierung von Objekten','Rz. 31 d)','Beginn der Sanierungsarbeiten']])]),
 region(104,[70,363,530,535],'Veräußerungsgewinn und Freibetrag',[
  table(['Position','Betrag'],[['Veräußerungspreis','540.000 €'],['Betriebsvermögen (= Kapitalkonto), § 16 Abs. 2 Satz 2 EStG','−390.000 €'],['Veräußerungskosten','−10.000 €'],['steuerbarer Veräußerungsgewinn, § 16 Abs. 2 EStG','140.000 €']]),
  title('Ermittlung des Freibetrages, § 16 Abs. 4 EStG'),
  table(['Position','Rechnung / Betrag'],[['Freibetrag','45.000 €'],['Veräußerungsgewinn','140.000 €'],['Grenzbetrag','−136.000 €'],['schädlich','4.000 €; Kürzung −4.000 €'],['verbleibender Freibetrag','41.000 €; Abzug −41.000 €'],['stpfl. Veräußerungsgewinn','99.000 €']])]),
 region(104,[70,696,530,734],'Verweise für die übrigen Gewinneinkunftsarten',[
  table(['Einkunftsart','Verweis'],[['Einkünfte aus L+F','Verweis in § 14 EStG'],['Einkünfte aus selbständiger Arbeit','Verweis in § 18 Abs. 3 EStG']])]),
 region(113,[70,584,530,644],'Ansatz bei Veräußerung und Aufgabe',[
  table(['Vorgang','Ansatz','Veräußerung','Aufgabe'],[['soweit Veräußerung','Verkaufpreis (= brutto)','§ 16 II S. 1','§ 16 III S. 7'],['soweit Überführung PV','gem. Wert, § 9 BewG (= brutto)','§ 16 III S. 7 sinng.','§ 16 III S. 8'],['soweit Veräußerung an sich selbst','nicht begünstigt','§ 16 II S. 3','§ 16 III S. 6']])]),
 region(114,[70,441,530,533],'Veräußerungsgewinn einschließlich Privatentnahme',[
  table(['Position','Betrag','Quellenverweis'],[['Verkaufspreis','300.000 €','§ 16 Abs. 2 Satz 1 EStG'],['gem. Wert des PKW (brutto)','11.900 €','§ 16 Abs. 3 Satz 8 EStG sinng.'],['Wert des Betriebsvermögen (Kapitalkonto)','−200.000 €','§ 16 Abs. 2 Satz 2 EStG'],['Veräußerungskosten (Rechtsanwalt)','−5.000 €','kein laufender Aufwand!'],['Veräußerungskosten (Umsatzsteuer)','−1.900 €','kein laufender Aufwand!'],['steuerbarer Veräußerungsgewinn','105.000 €','§ 16 Abs. 2 Satz 1 EStG']])]),
 region(115,[70,514,530,574],'Veräußerungsgewinn bei negativem Kapitalkonto',[
  table(['Position','Betrag','Quellenverweis'],[['Verkaufspreis','150.000 €','§ 16 Abs. 2 Satz 1 EStG'],['gem. Wert der Verbindlichkeit','−200.000 €','§ 16 Abs. 3 S. 8 sinng. EStG'],['Wert des Betriebsvermögens','− (−300.000 €)','§ 16 Abs. 2 Satz 2 EStG'],['steuerbarer Veräußerungsgewinn','250.000 €','§ 16 Abs. 2 Satz 1 EStG']])]),
 region(116,[70,579,530,622],'Barwert des Kaufpreises',[
  table(['Position','Rechnung','Betrag'],[['1. Rate','', '100.000 €'],['2. Rate','100.000 € × 0,898','+89.800 €'],['Summe','','189.800 €']])]),
 region(116,[70,659,530,702],'Zinseinnahmen bei Zufluss der zweiten Rate',[
  table(['Position','Betrag'],[['2. Rate','100.000 €'],['darin enthaltener Kapitalanteil (s. o.)','−89.800 €'],['Zinseinnahmen','10.200 €']])]),
 region(117,[70,529,531,707],'Veräußerungsgewinn mit Teileinkünfteverfahren',[
  table(['Position','Summe','§ 34 EStG','TEV'],[['Veräußerungspreis','320.000','300.000','20.000'],['Kapitalkonto, § 16 Abs. 2 Satz 2 EStG','−166.000','−156.000','−10.000'],['Zwischensumme','154.000','144.000','10.000'],['TEV, §§ 3 Nr. 40. Satz 1 b), 3c Abs. 2 Satz 1 EStG','−4.000','','−4.000'],['stbarer V-Gewinn','150.000','144.000','6.000'],['vorläufiger Freibetrag, § 16 Abs. 4 Satz 1 EStG','45.000','',''],['stbarer V-Gewinn abzüglich unschädlich (§ 16 Abs. 4 Satz 3 EStG)','150.000 − 136.000 = 14.000','',''],['schädlich: Kürzung Freibetrag','−14.000','',''],['Freibetrag endgültig','31.000','−25.000','−6.000'],['stpfl. V-Gewinn','119.000','119.000','0']])]),
 region(128,[70,610,530,640],'Buchungen bei § 4 Abs. 1 EStG',[
  table(['Jahr','Buchung','Gewinnauswirkung'],[['01','Ford. 1.190 € an Erl. 1.000 € und USt 190 €','+1.000 €'],['02','Bank an Ford. 1.190 €; USt an Bank 190 €','0 €']])]),
 region(128,[70,663,530,693],'Auswirkungen bei Gewinnermittlung nach § 4 Abs. 3 EStG',[
  table(['Jahr','Vorgang','Gewinnauswirkung'],[['01','keine Auswirkungen','0 €'],['02','Zahlung: BE 1.190 €; USt-Zahlung FA: BA 190 €','+1.000 €']])]),
 region(131,[70,136,531,267],'Bilanz zum 01.01.05',[
  table(['Aktiva','Betrag','Passiva','Betrag'],[['Grund und Boden','150.000 €','Kapital','340.800 €'],['Gebäude','270.000 €','GewSt-Rückstellung','20.000 €'],['Geschäftsausstattung','25.000 €','Bankdarlehen','150.000 €'],['Warenbestand','35.000 €','Verbindlichkeiten L+L','15.000 €'],['Forderungen L+L','27.000 €','pass. RAP','2.000 €'],['Kasse und Bank','15.800 €','',''],['Disagio','2.000 €','',''],['akt. RAP','3.000 €','',''],['Summe','527.800 €','Summe','527.800 €']])]),
 region(132,[70,189,531,277],'Übergangsgewinn',[
  table(['Position','Betrag'],[['Warenbestand','35.000 €'],['Forderungen L+L','27.000 €'],['Disagio/aRAP','5.000 €'],['Verbindlichkeiten L+L','−15.000 €'],['pRAP','−2.000 €'],['Übergangsgewinn','50.000 €']])]),
 region(141,[70,576,531,619],'Kapitalertragsteuer, Kirchensteuer und Solidaritätszuschlag',[
  table(['Steuer','Rechnung laut Quelle'],[['KapESt','10.000 € / (4 + 0,09) = 2.445 €'],['ev. KiSt','2.445 € × 9 % = 220,05 €'],['SolZ','2.445 € × 5,5 % = 134,47 €']])]),
 region(142,[70,303,531,347],'Buchung im Besitzunternehmen',[
  table(['Soll','Betrag','Haben','Betrag'],[['Bank','7.362,50 €','Beteiligungsertrag','10.000,00 €'],['PE KapESt','2.500,00 €','',''],['PE SolZ','137,50 €','','']])]),
 region(142,[70,437,531,453],'Außerbilanzielle Kürzung',[
  table(['Position','Rechnung','Betrag'],[['Außerbilanzielle Kürzung','10.000 € × 40 %','4.000 €']])]),
 region(150,[70,296,531,366],'Ermittlung des Veräußerungsgewinns',[
  table(['Position','Betrag'],[['Einnahmen','11.000 €'],['Veräußerungskosten','−200 €'],['Anschaffungskosten','−10.000 €'],['Anschaffungsnebenkosten','−500 €'],['Veräußerungsgewinn','300 €']])]),
 region(151,[70,82,531,138],'FIFO-Berechnung',[
  table(['Position','Betrag'],[['Veräußerungspreis (100 Aktien)','20.000 €'],['AK Aktien aus 01 (75 Aktien × 100 €)','−7.500 €'],['AK Aktien aus 02 (25 Aktien × 150 €)','−3.750 €'],['Veräußerungsgewinn, § 20 Abs. 4 Satz 1 EStG','8.750 €']])]),
 region(154,[70,697,531,714],'Ermittlung der Einkünfte der Ehegatten',[
  table(['Person','Berechnung'],[['EM','1.100 € − 1.000 € = 100 €'],['EF','1.500 € − 1.000 € = 500 €']])]),
 region(155,[70,126,531,143],'Abwandlung 1 – gemeinsamer Sparer-Pauschbetrag',[
  table(['Person','Berechnung'],[['EM','600 € − 600 € = 0 €'],['EF','1.500 − (1.000 € + 400 €) = 100 €']])]),
 region(155,[70,228,531,245],'Abwandlung 2 – kein Verlust aus dem Pauschbetrag',[
  table(['Person','Berechnung'],[['EM','300 € − 300 € = 0 €'],['EF','1.500 € − (1.000 € + max. 700 €) = 0 €']])]),
]
