"""Visually transcribed figures from Engelberth Kurzskript I, printed pp.80–162.
The source's norm references and values are retained without legal review.
Keys identify a printed source page and that page's substantive raster-image index.
"""

def text(s): return {'text': s}
def title(s): return {'typ': 'titel', 'text': s}
def table(columns, rows): return {'typ': 'tabelle', 'spalten': columns, 'zeilen': rows}

FIGURES = {
 '80-0': ('Überführungen zwischen Betriebs- und Privatvermögen', [
  table(['Prüfpunkt','Privatvermögen wird Betriebsvermögen','Betriebsvermögen wird Privatvermögen'],[
   ['Wie?','Durch Einlage','Durch Entnahme bzw. Betriebsaufgabe'],
   ['Bewertung','Einlagewert gem. § 6 Abs. 1 Nr. 5 EStG. Bei Neugründung: … iVm. § 6 Abs. 1 Nr. 6 EStG. Bei Gewinnermittlung gem. § 4 Abs. 3 EStG: … iVm. § 6 Abs. 7 Nr. 2 EStG.','Bei Betriebsveräußerung bzw. -aufgabe: gemeiner Wert, § 16 Abs. 3 Satz 8 f. EStG. In den übrigen Fällen: Teilwert, § 6 Abs. 1 Nr. 4 EStG.'],
   ['AfA-BMG und AfA-Volumen','Ermittlung gem. § 7 Abs. 1 Satz 5 EStG; Beck-Erlasse zu § 7 EStG/8.','Entnahmewert, R 7.3 Abs. 6 Satz 1 EStR.'],
   ['AfA-Methode','Gebäude: § 7 Abs. 4 Satz 1 Nr. 1 EStG. Übrige WG: § 7 Abs. 1 und evtl. Abs. 2 EStG. R 7.4 Abs. 10 Nr. 1 EStG; H 7.4 Abs. 10 (degr. AfA nach Einlage) EStH.','Gebäude: § 7 Abs. 4 Satz 1 Nr. 2 EStG. Übrige WG: § 7 Abs. 1 EStG. R 7.4 Abs. 10 Nr. 1 EStG.'],
   ['Beachte!','–','Fristbeginn nach § 23 Abs. 1 Satz 2 EStG.'],
  ])]),
 '80-1': ('Steuerbefreiung bei Photovoltaik-Anlagen, § 3 Nr. 72 EStG', [
  table(['Stufe','Voraussetzung / Rechtsfolge laut Abbildung'],[
   ['Ausgangspunkt','Betrieb einer PV-Anlage'],
   ['+','auf, an oder in Gebäuden (einschließlich Nebengebäuden)'],
   ['+','Gewerbliches Unternehmen iSd. § 15 Abs. 2 EStG (d. h. keine Liebhabereibetrieb)'],
   ['+ Objektbezogene Prüfung','Installierte Bruttoleistung laut Marktstammdatenregister bis zu 30 Kilowatt (peak) je Wohn- oder Gewerbeeinheit.'],
   ['+ Subjektbezogene Prüfung','Installierte Bruttoleistung laut Marktstammdatenregister insgesamt höchstens 100 Kilowatt (peak) pro Stpfl. bzw. Mitunternehmerschaft (kein Verbrauch dieser Grenze durch nicht begünstigte Anlagen).'],
   ['⇒','Einnahmen und Entnahmen sind steuerfrei, § 3 Nr. 72 Satz 1 EStG.'],
   ['⇒','Betriebsausgaben unterliegen einem Abzugsverbot, § 3c Abs. 1 EStG.'],
   ['⇒','Ein Gewinn ist nicht zu ermitteln, § 3 Nr. 72 Satz 2 EStG.'],
   ['⇒','Einkünfte führen bei Personengesellschaften nicht zur Abfärbung, § 3 Nr. 72 Satz 3 EStG.'],
  ])]),
 '82-0': ('Betriebsaufspaltung, H 15.7 Abs. 4 (Allgemeines) EStH', [
  table(['Voraussetzung','Inhalt'],[
   ['Sachliche Verflechtung','Nutzungsüberlassung einer wesentlichen Betriebsgrundlage (funktional-qualitative Betrachtungsweise) an eine gewerblich tätige PersGes oder KapGes (Betriebsunternehmen).'],
   ['Personelle Verflechtung','Eine/mehrere Personen (Personengruppe) beherrschen das Besitz- und das Betriebsunternehmen; „einheitlicher geschäftlicher Betätigungswille“.'],
  ]),
  text('Rechtsfolgen: Das Besitz- und das Betriebsunternehmen sind jeweils Gewerbebetriebe. Gewinnermittlung gem. §§ 4 Abs. 1, 5 EStG bzw. § 4 Abs. 3 EStG. Gewerbesteuerpflicht, § 2 Abs. 1 GewStG iVm. § 15 Abs. 2 EStG. Gewinnausschüttungen des Betriebsunternehmens sind gewerbliche Einkünfte des Besitzunternehmens (beachte TEV).'),
  text('Zu notwendigem Betriebsvermögen des Besitzunternehmens werden: dem Betriebsunternehmen überlassene Wirtschaftsgüter (nicht nur die wBG), die Anteile am Betriebsunternehmen und dem Betriebsunternehmen gewährte Darlehen (beachte § 3c EStG).')]),
 '105-0': ('Wesentliche Betriebsgrundlagen', [
  table(['Prüfpunkt','Qualitative (= funktionale) Betrachtungsweise','Funktional-quantitative Betrachtungsweise'],[
   ['Tatbestand','Wirtschaftsgüter, die für die Erreichung des Betriebszwecks erforderlich sind. H 15.7 Abs. 5 (wBG/Betriebszweck/-führung) EStH.','Wirtschaftsgüter, die für die Erreichung des Betriebszwecks erforderlich sind und/oder die erhebliche stille Reserven beinhalten. H 16 Abs. 8 (Begriff der wBG) EStH.'],
   ['Anwendung','Betriebsaufspaltung; Betriebsverpachtung im Ganzen; BW-Fortführung, § 6 Abs. 3 EStG.','Tatbestände iSd. § 16 EStG.'],
   ['Beispiel','Grundstücke, Patente. Nicht: Umlaufvermögen (z. B. Waren).','Auch Wirtschaftsgüter des gewillkürten Betriebsvermögens, z. B. Aktien, Mietwohngrundstücke mit erheblichen stillen Reserven.'],
  ])]),
 '111-0': ('Beteiligungen an Kapitalgesellschaften im Betriebsvermögen', [
  table(['Umfang der Veräußerung/Entnahme','< 100 %','100 %'],[
   ['Einkünfte','§ 15 Abs. 1 EStG','§ 16 Abs. 1 Nr. 1 Satz 2 EStG, Teilbetriebsfiktion'],
   ['Bewertung Entnahme','Teilwert, § 6 Abs. 1 Nr. 4 EStG','gem. Wert, § 16 Abs. 3 S. 8 EStG'],
   ['Tarifbegünstigung','nein, § 34 Abs. 2 Nr. 1 EStG','nein, § 34 Abs. 2 Nr. 1 EStG'],
   ['Freibetrag, § 16 Abs. 4','nein','ja'],
   ['Teileinkünfteverfahren','ja, § 3 Nr. 40. Satz 1 a) EStG','ja, § 3 Nr. 40. Satz 1 b) EStG'],
   ['GewSt-Pflicht','ja','ja'],
  ])]),
 '112-0': ('Begriff des Mitunternehmeranteils', [
  table(['Verknüpfung','Bestandteil'],[
   ['','Anteil am Gesellschaftsvermögen, R 4.2 Abs. 2 Satz 1 HS 1 EStR sinng.; privatrechtlicher Begriff (BGB, HGB).'],
   ['+','Sonder-BV eines/mehrerer/aller Gesellschafter, R 4.2 Abs. 2 Satz 1 HS 2 EStR; steuerrechtlicher Begriff.'],
   ['=','Mitunternehmeranteil; steuerrechtlicher Begriff.'],
  ])]),
 '119-0': ('Ausnahmen von der Betriebsfortführungsfiktion, § 16 Abs. 3b EStG', [
  table(['Tatbestand','Voraussetzung','Zeitpunkt / Folge'],[
   ['Satz 1 Nr. 1; Satz 2','Abgabe der Aufgabeerklärung beim Finanzamt spätestens drei Monate nach gewähltem Zeitpunkt.','Rückwirkende Anerkennung der Betriebsaufgabe zum gewählten Zeitpunkt, § 16 Abs. 3b Satz 2 EStG.'],
   ['Satz 1 Nr. 1; Satz 3','Abgabe nicht spätestens drei Monate nach gewähltem Zeitpunkt.','Betrieb gilt mit Eingang der Betriebsaufgabeerklärung beim Finanzamt als aufgegeben, § 16 Abs. 3b Satz 3 EStG.'],
   ['Satz 1 Nr. 2','Bekanntwerden von Tatsachen hinsichtlich einer (Zwangs-)Betriebsaufgabe.','Betriebsaufgabe wirksam mit Bekanntwerden der Tatsachen beim Finanzamt.'],
  ])]),
 '119-1': ('Verpächterwahlrecht', [
  table(['Prüfpunkt','„nichts tun“ → Betriebsfortführungsfiktion, § 16 Abs. 3b Satz 1 HS 1 EStG','Betriebsaufgabeerklärung, § 16 Abs. 3b Satz 1 Nr. 1 EStG'],[
   ['Folgen','Keine Realisierung der stillen Reserven; weiterhin Betriebsvermögen; Verpachtung: § 15 Abs. 1 Nr. 1 EStG; keine GewSt-Pflicht, R 2.2 GewStR, bzw. -Anrechnung, § 35 Abs. 1 Satz 3 EStG.','Aufgabegewinn gem. § 16 Abs. 3 Satz 1 EStG; nun Privatvermögen; Verpachtung: § 21 Abs. 1 EStG; keine GewSt-Pflicht, da PV.'],
   ['Zeitpunkt','Jederzeitige Möglichkeit, die Betriebsaufgabe zu erklären.','Erklärung spätestens drei Monate nach gewähltem Zeitpunkt: rückwirkende Anerkennung, § 16 Abs. 3b Satz 2 EStG. Später als drei Monate: Eingang der Erklärung beim FA, § 16 Abs. 3b Satz 3 EStG.'],
   ['Überlagerung der Betriebsverpachtung im Ganzen','Betriebsaufspaltung; Sonderbetriebsvermögen; gewerblich geprägte Personengesellschaft; H 2.2 (Verpachtung eines Betriebs …) GewStH.','–'],
  ])]),
 '130-0': ('Wechsel der Gewinnermittlungsart – Übergangsgewinn', [
  table(['Prüfpunkt','Wechsel zum BV-Vergleich','Wechsel zur EÜR'],[
   ['Korrekturen','gem. erstmaliger Bilanz','gem. letztmaliger Bilanz'],
   ['Hinzurechnungen','Warenbestand; Forderungen aus Lieferungen und Leistungen; aktive RAPs.','Verbindlichkeiten aus Lieferungen und Leistungen; passive RAPs; Rückstellungen; USt-Verbindlichkeit an Finanzamt.'],
   ['Kürzungen','Verbindlichkeiten aus Lieferungen und Leistungen; passive RAPs; Rückstellungen; USt-Verbindlichkeit an Finanzamt.','Warenbestand; Forderungen aus Lieferungen und Leistungen; aktive RAPs.'],
   ['Ansatz des Übergangsgewinns','Im Jahr der Aufstellung der erstmaligen Bilanz mit Möglichkeit der gleichmäßigen Verteilung auf bis zu drei Jahre, R 4.6 Abs. 1 EStR. Ausnahme: Betriebsbeendigung, H 4.6 (Keine Verteilung des Ü-Gewinns) EStH.','Im Jahr nach Aufstellung der letztmaligen Bilanz, R 4.6 Abs. 2 EStR.'],
  ])]),
 '137-0': ('Besteuerung von Einkünften aus Kapitalvermögen', [
  text('Grundsatz: Abgeltende Besteuerung bei durchgeführtem Kapitalertragsteuerabzug, § 43 Abs. 5 Satz 1 EStG.'),
  table(['Ausnahmen: Besteuerung zum Abgeltungstarif, § 32d Abs. 1 EStG','Ausnahmen: Besteuerung mit dem „regulären“ Tarif, § 32a EStG'],[
   ['Steuerpflichtige Kapitalerträge ohne Steuerabzug, § 32d Abs. 3 Satz 1 EStG.','Auf Antrag durchgeführte „Günstigerprüfung“, § 32d Abs. 6 EStG.'],
   ['Auf Antrag in die Veranlagung einbezogene Kapitalerträge, § 32d Abs. 4 EStG.','Fälle der Subsidiarität, § 20 Abs. 8 EStG.'],
   ['–','Spezifische Ausnahmen vom Abgeltungsteuersatz, § 32d Abs. 2 EStG.'],
  ])]),
 '137-1': ('Rechtsfolgen des (unterbleibenden) Kapitalertragsteuerabzugs', [
  table(['Fall für Kapitalerträge iSd. § 20 Abs. 1 und 2 EStG','Abgeltung / Erklärung','Eingang in SdE','Besteuerung / Beispiel'],[
   ['Mit Kapitalertragsteuerabzug: Grundsatz','Abgeltung, § 43 Abs. 5 Satz 1 EStG; keine Erklärungspflicht; ggf. Antrag gem. § 32d Abs. 4 EStG.','Kein Eingang in SdE etc., § 2 Abs. 5b EStG.','Beispiel: Bankzinsen im Privatvermögen.'],
   ['Mit Kapitalertragsteuerabzug: Ausnahmen Subsidiarität (§ 20 Abs. 8 EStG), unternehmerische Beteiligung (§ 32d Abs. 2 Nr. 3 EStG), Günstigerprüfung (§ 32d Abs. 6 EStG)','Keine Abgeltung, § 43 Abs. 5 Satz 2 + 3 EStG.','Eingang in SdE etc.','Tarifliche ESt, § 32a EStG; Anrechnung der KapESt, § 36 Abs. 2 Nr. 1 EStG. Beispiel: betriebliche Bankzinsen.'],
   ['Ohne Kapitalertragsteuerabzug: Abgeltungsteuersatz','Erklärungspflicht, § 32d Abs. 3 Satz 1 EStG.','Kein Eingang in SdE etc., § 2 Abs. 5b EStG.','Abgeltungsteuersatz, § 32d Abs. 1 EStG. Beispiel: Zinsen aus Privatdarlehen.'],
   ['Ohne Kapitalertragsteuerabzug: tarifliche ESt','Erklärungspflicht, § 32d Abs. 3 Satz 1 EStG.','Eingang in SdE etc.','Tarifliche ESt, § 32a EStG. Beispiel: Gesellschafterdarlehen an GmbH (Bet. >= 10 %).'],
  ])]),
 '138-0': ('Checkliste Kapitalertragsteuer – Abgeltung (Grundsatz)', [
  table(['Schritt','Prüfung laut Abbildung'],[
   ['1','Zuordnung des Sachverhalts zum Katalog des § 20 Abs. 1 bzw. 2 Satz 1 Nr. … EStG.'],
   ['2','Prüfung des KapESt-Abzugs dem Grunde nach, § 43 Abs. 1 Satz 1 Nr. … EStG.'],
   ['3','Prüfung des KapESt-Abzugs (zzgl. SolZ und ggf. KiSt) der Höhe nach, § 43a Abs. 1 Satz 1 Nr. 1 EStG.'],
   ['4','Prüfung von Ausnahmetatbeständen iSd. § 43 Abs. 5 Sätze 2 und 3 EStG: Fälle des § 32d Abs. 2 EStG; Fälle der Subsidiarität (§ 20 Abs. 8 EStG); Antragsfälle, z. B. § 32d Abs. 4 und 6 EStG.'],
   ['⇒','Rechtsfolgen der Abgeltung, § 43 Abs. 5 Satz 1 EStG: insoweit keine Erklärungspflicht; insoweit keine Berücksichtigung bei der Einkommensermittlung, § 2 Abs. 5b EStG.'],
  ])]),
 '139-0': ('Checkliste Kapitalertragsteuer – Subsidiarität (§ 20 Abs. 8 EStG)', [
  table(['Schritt','Prüfung laut Abbildung'],[
   ['1','KapESt-Abzug durchführen, § 43 Abs. 4 EStG.'],
   ['2','Bei Bilanzierung: Buchungssatz bilden. Bei EÜR: Betriebseinnahme erfassen. Beachte § 12 Nr. 3 EStG: KapESt + SolZ + KiSt = PE.'],
   ['3','Anwendung TEV: bei Veräußerungen etc., § 3 Nr. 40. Satz 1 a) bzw. b) EStG; bei Gewinnausschüttungen, § 3 Nr. 40. Satz 1 d) iVm. Satz 2 EStG.'],
   ['4','Keine Abgeltung, § 43 Abs. 5 Satz 2 EStG.'],
   ['5','Anrechnung KapESt auf festgesetzte ESt des Stpfl., § 36 Abs. 2 Nr. 2 EStG.'],
  ])]),
 '140-0': ('Einbeziehung von Einkünften aus Kapitalvermögen in die Veranlagung', [
  table(['Tarif','Einbeziehung in die Veranlagung','Beispiel'],[
   ['Abgeltungsteuersatz, § 32d Abs. 1 EStG','Steuerpflichtige Kapitalerträge ohne Steuerabzug (Erklärungspflicht), § 32d Abs. 3 EStG.','Privatdarlehen.'],
   ['Abgeltungsteuersatz, § 32d Abs. 1 EStG','Beispielhafte Antragsgründe, § 32d Abs. 4 EStG.','Nicht ausgeschöpfter Sparer-Pauschbetrag.'],
   ['Tariflicher Steuersatz, § 32a EStG','Fälle der Subsidiarität, § 20 Abs. 8 EStG.','Betriebliche Zinsen.'],
   ['Tariflicher Steuersatz, § 32a EStG','Günstigerprüfung, § 32d Abs. 6 EStG.','Grenzsteuersatz < 25 % Abgeltungsteuer.'],
   ['Tariflicher Steuersatz, § 32a EStG','Typisierte Fälle gem. § 32d Abs. 2 EStG.','Fälle der Steuersatzspreizung; „Unternehmerische Beteiligung“.'],
  ])]),
 '143-0': ('Teilfreistellung, § 20 InvStG', [
  table(['Teilfreistellung','Fondskategorie'],[
   ['30 %, § 20 Abs. 1 Satz 1 InvStG','Aktienfonds (Kapitalbeteiligungsquote > 50 %), „Aktienteilfreistellung“.'],
   ['15 %, § 20 Abs. 2 InvStG','Mischfonds (Kapitalbeteiligungsquote ≥ 25 %).'],
   ['60 %, § 20 Abs. 3 Satz 1 InvStG','Immobilienfonds (Immobilienquote > 50 %).'],
   ['80 %, § 20 Abs. 3 Satz 2 InvStG','Auslands-Immobilienfonds (Auslands-Immobilienquote > 50 %).'],
  ])]),
 '146-0': ('Partiarische Darlehen/stille Beteiligungen, § 20 Abs. 1 Nr. 4 EStG', [
  table(['Prüfpunkt','Partiarisches Darlehen','Typisch stille Beteiligung','Atypisch stille Beteiligung'],[
   ['Begriff','Darlehensgewährung mit erfolgsabhängiger Vergütung.','§ 230 HGB, erfolgsmäßige Unternehmensbeteiligung mit Beschränkung auf die Einlage.','§ 230 HGB, erfolgsmäßige Unternehmensbeteiligung mit Beteiligung an den stillen Reserven (beachte Vertrag).'],
   ['Einkünfte','§ 20 Abs. 1 Nr. 4 EStG.','§ 20 Abs. 1 Nr. 4 EStG.','§ 15 Abs. 1 Satz 1 Nr. 2 EStG.'],
   ['Besonderheiten','Keine negativen Einnahmen möglich. Schuldner bucht Zinsen als BA; Hinzurechnung, § 8 Nr. 1. a) GewStG.','Negativer Gewinnanteil möglich. Schuldner bucht Gewinn- bzw. Verlustanteil als BA oder BE; Hinzurechnung, § 8 Nr. 1. c) GewStG. Verlustanteile = negative Einnahmen aus Kapitalvermögen; beachte § 15a bzw. § 20 Abs. 6 EStG.','Mitunternehmerschaft iSd. § 15 Abs. 1 Satz 1 Nr. 2 Satz 1 EStG; H 15.8 Abs. 1 (Stiller Gesellschafter) EStH; gesonderte und einheitliche Gewinnfeststellung, § 180 Abs. 1 Nr. 2. a) AO.'],
  ])]),
 '153-0': ('Ausfall von Darlehensforderungen gegenüber Kapitalgesellschaften', [
  table(['Fall: Ausfall einer Darlehensforderung des Privatvermögens','Beteiligung < 1 % oder ≥ 1 % ohne gesellschaftsrechtliche Veranlassung','Beteiligung ≥ 1 % mit gesellschaftsrechtlicher Veranlassung'],[
   ['Abgrenzung','Darlehensausfall nicht gesellschaftsrechtlich veranlasst.','Bei Gewährung (Krisendarlehen) oder durch Weitergewährung (stehen gelassenes Darlehen), § 17 Abs. 2a Satz 4 EStG.'],
   ['Zuordnung','Darlehensverlust = Einkünfte aus Kapitalvermögen, § 20 Abs. 2 Satz 1 Nr. 7, Satz 2 und Abs. 4.','Darlehensverlust = nachträgliche Anschaffungskosten, § 17 Abs. 2a Satz 3 Nr. 2 EStG.'],
   ['Zeitpunkt','Ansatz im Zeitpunkt des Darlehensausfalls.','Ansatz im Zeitpunkt der Veräußerung.'],
   ['Weitere Behandlung','§ 20 Abs. 6 EStG findet Anwendung. Bei Beteiligung ≥ 10 %: keine Suspendierung des § 20 Abs. 6 EStG durch § 32d Abs. 2 Nr. 1 Satz 1 b) + Satz 2 EStG mangels Betriebsausgabe beim Schuldner.','Bei Veräußerung der Beteiligung bzw. Liquidation der Gesellschaft: Berücksichtigung im Rahmen des TEV, § 3 Nr. 40 Satz 1 c) bzw. e) EStG; ggf. keine Verlustberücksichtigung, § 17 Abs. 2 Satz 6 EStG.'],
  ])]),
}

# Native vector tables/charts for which ordinary text extraction loses the layout.
# Rectangle coordinates are in points on the original PDF page, not a screenshot.
EXTRAS = {
 92: [{'rect': [70,304,525,624], 'title': '6.3.1 Übersicht – Schwesterpersonengesellschaften', 'blocks': [table(
  ['Mitunternehmerische Betriebsaufspaltung oder Überlassung durch eine gewerblich (geprägte) Personengesellschaft','Sonderbetriebsvermögen'],[
  ['Überlassenes Wirtschaftsgut ist eigenes Betriebsvermögen der überlassenden Gesellschaft.','Überlassenes Wirtschaftsgut ist Sonderbetriebsvermögen der überlassenden Gesellschaft an der nutzenden Gesellschaft.'],
  ['Zwei Gesellschaftsbilanzen: eine für das überlassende Unternehmen; eine für das nutzende Unternehmen.','Zwei Gesellschaftsbilanzen: eine für das nutzende Unternehmen; eine als Sonderbilanz des überlassenden Unternehmens am nutzenden Unternehmen.'],
  ['Zwei Erklärungen zur gesonderten und einheitlichen Gewinnfeststellung.','Eine Erklärung zur gesonderten und einheitlichen Gewinnfeststellung, die auch das Sonderbetriebsvermögen mit umfasst.'],
  ['Zwei Gewerbesteuererklärungen, d. h. 2x Freibetrag.','Eine Gewerbesteuererklärung, d. h. 1x Freibetrag.'],
 ])]}],
 97: [{'rect': [70,110,483,318], 'title': 'Zeitachse: Erwerb und Veräußerung der Objekte 1–10', 'blocks': [table(
  ['Objekt','Erwerb laut Zeitachse','Veräußerung laut Zeitachse'],[
   ['1','10. Januar VZ 01','28. Oktober VZ 04'],['2','10. Januar VZ 01','28. Oktober VZ 04'],
   ['3','10. Januar VZ 01','25. September VZ 14'],['4','22. Februar VZ 03','28. Dezember VZ 07'],
   ['5','22. Februar VZ 03','25. September VZ 14'],['6','22. Februar VZ 03','Kein Datum eingetragen; Zeitachse bis VZ 16'],
   ['7','22. Februar VZ 03','25. September VZ 14'],['8','31. März VZ 05','19. September VZ 09'],
   ['9','31. März VZ 05','19. September VZ 09'],['10','16. August VZ 06','Kein Datum eingetragen; Zeitachse bis VZ 16'],
 ])]}],
 103: [{'rect': [69,70,555,780], 'title': 'Vereinfachtes Prüfschema Gewerblicher Grundstückshandel', 'blocks': [
  text('Grundlage: BMF v. 26.03.2004, BStBl. I S. 434, modifiziert Dipl.-Finw. Martin Engelberth.'),
  title('1. Ermittlung der Objekte iSd. „Drei-Objekt-Grenze“, sog. Zählobjekte (Definition Objekt Tz. 8)'),
  table(['Prüfung','Ja','Nein'],[
   ['Veräußertes Objekt war langfristig (mind. 10 Jahre) vermietet (Tz. 2)?','Kein Objekt iSd. „Drei-Objekt-Grenze“.','Weiter zur Selbstnutzung.'],
   ['Objekt war langfristig (mind. 5 Jahre) zu eigenen Wohnzwecken genutzt (Tz. 10)?','Kein Objekt iSd. „Drei-Objekt-Grenze“.','Weiter zur Gewinnerzielungsabsicht.'],
   ['Veräußerung ohne Gewinnerzielungsabsicht (Tz. 11)?','Kein Objekt iSd. „Drei-Objekt-Grenze“.','Weiter zum Zeitraum.'],
   ['Erwerb (Tz. 22) / Errichtung (Tz. 20) / Modernisierung (Tz. 24) und Veräußerung innerhalb von 5 Jahren (Tz. 6 iVm. …)?','Objekt iSd. „Drei-Objekt-Grenze“ = Zählobjekt.','Zusatzprüfung: Branchenkundiger Verkäufer und Fünfjahreszeitraum nur kurzfristig überschritten (Tz. 6)?'],
   ['Zusatzprüfung: Branchenkundiger Verkäufer und Zeitraum nur kurzfristig überschritten?','Zählobjekt.','Kein Objekt iSd. „Drei-Objekt-Grenze“.'],
  ]),
  title('2. Prüfung der „Drei-Objekt-Grenze“'),
  table(['Prüfung','Ja','Nein'],[
   ['Verkauf von mehr als drei Zählobjekten innerhalb von 5 Jahren (Tz. 5)?','Grundsätzlich gewerblicher Grundstückshandel; Ausnahme nach Tz. 30 prüfen.','Grundsätzlich kein gewerblicher Grundstückshandel; Ausnahme nach Tz. 28/29 (unbedingte Veräußerungsabsicht) prüfen.'],
   ['Ausnahmetatbestand iSv. Tz. 30?','Kein Fall des gewerblichen Grundstückshandels.','Fall des gewerblichen Grundstückshandels.'],
   ['Ausnahmetatbestand iSv. Tz. 28, 29?','Fall des gewerblichen Grundstückshandels.','Kein Fall des gewerblichen Grundstückshandels.'],
  ])
 ]}],
 115: [{'rect': [70,69,528,331], 'title': 'Abgrenzung vom laufenden Gewinn', 'blocks': [table(
  ['Sachverhalt','Behandlung bei ESt','Fundstelle','Behandlung bei GewSt'],[
   ['Räumungsverkauf','lfd. Gewinn','H 16 Abs. 9 (Räumungsverkauf) EStH','stpfl.'],
   ['Warenrückgabe','Aufgabegewinn','H 16 Abs. 9 (Umlaufvermögen) EStH','nicht stpfl.'],
   ['Resteverkauf','lfd. Gewinn','H 16 Abs. 9 (Abwicklungsgewinne) EStH','nicht stpfl.'],
 ])]}],
}
