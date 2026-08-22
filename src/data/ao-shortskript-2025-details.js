/* Ergänzungsblöcke zur vollständigen inhaltlichen Übertragung des Jacobs-Short-Skripts 2025.
   Diese Datei ergänzt die bestehende 49/49-Primärzuordnung; sie erzeugt keine neue AO-Einheit. */

const d=(moduleId,sourcePages,title,kind,points,note='',links=[],extra={})=>({moduleId,sourcePages,title,kind,points,note,links,...extra});

export const AO_SHORT_2025_DETAIL_BLOCKS=[
  d(301,[2],'Reichweite des Short-Skripts: bewusst nicht vollständig','note',[
    'Die Arbeitsunterlage versteht sich nur als Ergänzung zur Klausurtechnik und zu typischen Prüfungsschwerpunkten.',
    'Wegen der Stofffülle behandelt sie nur ausgewählte Teilgebiete des Verfahrensrechts.',
    'Ausdrücklich nicht im Short-Skript behandelt werden Steuererhebungsverfahren, FGO-Verfahren, Steuerstrafrecht und Haftungsrecht.',
    'Diese vier nicht dargestellten Bereiche bleiben nach der Quelle dennoch uneingeschränkt prüfungsrelevant.'
  ],'Der Hinweis verhindert, dass die Ergänzungsquelle fälschlich als vollständiger Ersatz für die vorhandenen AO-Lernmodule verstanden wird.'),

  d(382,[7],'Zwei typische Beratungssituationen: Bescheid schon da oder noch nicht da?','decision',[
    'Alternative 1: Der rechtswidrige Steuer-/Feststellungs-/USt-Bescheid ist bereits erlassen und die Einspruchsfrist läuft noch. Dann zuerst Einspruch prüfen.',
    'Bei einem Änderungsbescheid werden in der Begründetheit die vom Finanzamt benutzten Korrekturvorschriften, die Festsetzungsverjährung und die sachliche Anfechtungsbeschränkung des § 351 Abs. 1 AO geprüft.',
    'Alternative 2: Es liegt nur ein Bp-Bericht oder ein Schreiben über beabsichtigte Änderungen vor; ein geänderter Steuerbescheid ist noch nicht erlassen. Dann gibt es gegen diesen noch nicht existierenden Bescheid keinen Einspruch.',
    'In Alternative 2 sind die einzelnen materiellen Fehler getrennt anhand der einschlägigen Korrekturvorschriften einschließlich § 177 AO und der Festsetzungsverjährung zu prüfen.',
    'Formelle Fehler und Wirksamkeitsfragen haben Vorrang: Ein nichtiger Verwaltungsakt kann nicht korrigiert werden.'
  ],'Die Quelle stellt diese beiden Beratungssituationen ausdrücklich gegenüber. Sie sind spiegelbildlich, aber nicht austauschbar.',[301,318,369,363]),

  d(301,[8],'Bearbeitungshinweise: drei konkrete Klausurbeispiele','checklist',[
    'Beispiel 1: „Alle Verwaltungsakte sind mit einer zutreffenden Rechtsbehelfsbelehrung erlassen worden.“ → keine Zeit in eine nicht gestellte RBB-Problematik investieren.',
    'Beispiel 2: Bei steuererhöhenden Feststellungen einer Außenprüfung seien die Voraussetzungen der §§ 370 und 378 AO nicht erfüllt → die verlängerten Straf-/Bußgeldfristen nicht künstlich eröffnen.',
    'Beispiel 3: Auf verfahrensrechtliche Folgen für einen ausgeschiedenen Gesellschafter soll nicht eingegangen werden → diesen Beteiligten aus dem Prüfprogramm herausnehmen.',
    'Mehrere Aufgaben und mehrere Beteiligte in der vorgegebenen Reihenfolge bearbeiten.',
    'Ohne Reihenfolgevorgabe zunächst Grundlagenbescheid, anschließend Folgebescheid; bei mehreren Veranlagungszeiträumen historisch vom ältesten zum jüngsten Zeitraum vorgehen.'
  ],'Bearbeitungshinweise sind nach der Quelle echte Steuerungsinformationen für Umfang und Reihenfolge der Lösung, keine bloßen Formalien.'),

  d(307,[14,15],'Fall: Bescheid an einen bereits verstorbenen Steuerpflichtigen','case',[
    'Architekt A stirbt am 03.03.03. Der auf A lautende ESt-Bescheid 01 vom 05.03.03 wird am 06.03.03 in seinen Briefkasten eingeworfen.',
    'Sohn S ist Alleinerbe, leert den Briefkasten am 09.03.03 und legt am 16.04.03 Einspruch ein. Am 08.05.03 erfährt er, dass die ESt um 5.000 € zu hoch festgesetzt wurde.',
    'Am 08.05.03 erteilt S seinem Steuerberater Zustellvollmacht; am 09.05.03 wird die Vollmacht per Telefax dem Finanzamt übermittelt.',
    'Der Bescheid ist nichtig: Zum Zeitpunkt seiner Entstehung/Bekanntgabe existierte A nicht mehr als Inhaltsadressat; § 125 Abs. 1 AO i.V.m. § 157 Abs. 1 S. 2 AO.',
    'Trotz „Nichtakt“ ist der Einspruch wegen des Rechtsscheins statthaft; zusätzlich kommt ein Antrag auf Feststellung der Nichtigkeit nach § 125 Abs. 5 AO in Betracht.',
    'Beschwer wird über den Rechtsschein und die Gesamtrechtsnachfolge des S (§ 45 AO, § 1922 Abs. 1 BGB) bejaht.',
    'Mangels wirksamer Bekanntgabe läuft weder die Monatsfrist des § 355 AO noch die Fristlogik des § 356 AO.',
    'Das Finanzamt muss einen erstmalig wirksamen Bescheid an S erlassen. Bleibt die Steuer darin um 5.000 € zu hoch, kann S gegen diesen neuen Bescheid Einspruch einlegen.',
    'Für die neue Bekanntgabe nennt die Quelle: Steuerberater als Empfänger; S als Inhalts- und Bekanntgabeadressat; ausdrücklicher Hinweis auf die Gesamtrechtsnachfolge.'
  ],'Die Quelle benutzt den Fall, um Nichtigkeit, Rechtsschein-Einspruch und Gesamtrechtsnachfolge miteinander zu verknüpfen.',[318,342]),

  d(307,[17],'Fall StB 2013: Umzug, Nachsendeauftrag und tatsächlicher Zugang','case',[
    'X zieht Ende Februar 04 von A-Stadt/A-Straße 2 nach B-Stadt/B-Straße 3 und richtet ab 01.03.04 einen Nachsendeauftrag ein.',
    'ESt 01 vom 04.03.04: Der frühere Vermieter findet den Brief am 15.03.04 im alten Briefkasten und übergibt ihn X am 18.03.04.',
    'Der alte Briefkasten gehört nach dem Umzug nicht mehr zum Machtbereich des X. Der ursprüngliche Zugang scheitert.',
    'Die tatsächliche Übergabe am 18.03.04 heilt den Bekanntgabemangel nach der Quellenlösung entsprechend § 8 VwZG; die Einspruchsfrist beginnt mit Ablauf des 18.03.04.',
    'Da der rechnerische Fristablauf auf Sonntag, 18.04.04, bzw. das Wochenende fällt und der 20.04.04 laut Aufgabe Montag ist, verschiebt § 108 Abs. 3 AO den Ablauf auf 20.04.04, 24:00 Uhr.',
    'ESt 02 vom 04.03.04: Zustellversuch an alter Anschrift am 07.03.04, tatsächliche Nachsendung/Zustellung an der neuen Anschrift am 18.03.04.',
    'Die Zugangsvermutung greift nicht für den früheren Zustellversuch; maßgeblich ist der tatsächliche spätere Zugang am 18.03.04.',
    'Der am Montag, 20.04.04 eingegangene Einspruch ist deshalb für beide Bescheide rechtzeitig.'
  ],'Der Fall trennt sauber Machtbereich, Heilung, tatsächlichen Zugang und Fristverschiebung nach § 108 Abs. 3 AO.',[318]),

  d(340,[22,23,24],'§ 181 Abs. 5 AO vollständig: XY-OHG, 200.000 €, X und Y','case',[
    'XY-OHG: X und Y sind je zur Hälfte beteiligt. Der ursprüngliche Feststellungsbescheid vom 11.12.02 stellt 200.000 € Gewinn und je 100.000 € Gewinnanteil fest.',
    'X gibt die Feststellungserklärung 01 im Jahr 02 und seine ESt-Erklärung 01 im Jahr 03 ab; Y gibt seine ESt-Erklärung 01 bereits im Jahr 02 ab.',
    'Im November 07 wird durch Kontrollmitteilung erkannt, dass 8.000 € Betriebseinnahmen fehlen; die Gewinnanteile von X und Y erhöhen sich jeweils um 4.000 €. §§ 370/378 AO sind laut Sachverhalt nicht erfüllt.',
    'Am 11.12.07 wird ein nach § 173 Abs. 1 Nr. 1 AO geänderter Feststellungsbescheid bekannt gegeben. Die reguläre Feststellungsfrist endete bereits mit Ablauf 2006.',
    '§ 181 Abs. 5 AO ermöglicht die Feststellung nach Fristablauf nur insoweit, wie sie für eine Steuerfestsetzung mit noch offener Festsetzungsfrist bedeutsam ist; der Bescheid braucht den einschränkenden Hinweis nach Satz 2.',
    'Für X begann die ESt-Festsetzungsfrist mit Ablauf 2003 und endet regulär Ende 2007. Am 11.12.07 ist sie noch offen: Der geänderte Feststellungsbescheid darf gegenüber X wirken.',
    'Für Y begann die ESt-Festsetzungsfrist bereits mit Ablauf 2002 und endete Ende 2006. Gegenüber Y kann § 181 Abs. 5 AO keine Wirkung mehr für die ESt 01 erzeugen.',
    'Wird gegenüber Y trotzdem ein entsprechender ESt-Änderungsbescheid erlassen, ist er auf zulässigen Einspruch ersatzlos aufzuheben; die Quelle nennt §§ 367 Abs. 2 S. 3, 132 und 172 Abs. 1 S. 1 Nr. 2a AO.',
    'Fehlt der Hinweis nach § 181 Abs. 5 S. 2 AO, ist der Feststellungsbescheid rechtswidrig, nicht nichtig. Heilung nach § 126 AO ist nur möglich, solange die maßgebliche Folgebescheid-Festsetzungsfrist noch läuft.',
    'Die Prüfung, ob der Hinweis im konkreten Folgebescheid Wirkung entfaltet, obliegt nach der Quelle dem Wohnsitz-FA.',
    'Für X kann der Folgebescheid im April 08 noch über § 175 Abs. 1 S. 1 Nr. 1 AO angepasst werden. § 171 Abs. 10 S. 1 AO verlängert die Änderungsmöglichkeit bis Ablauf 14.12.09.',
    'Die Nichtanwendung des § 171 Abs. 10 am Ende des § 181 Abs. 5 S. 1 betrifft nur die Berechnung der Feststellungsfrist, nicht die Festsetzungsfrist des Folgebescheids.'
  ],'Damit sind sämtliche Zahlen, Fristen und X/Y-Rechtsfolgen der Seiten 22–24 in der Lernplattform vorhanden.',[338,361]),

  d(382,[33],'Korrekturvorschriften: Steuerbescheide versus sonstige Verwaltungsakte','table',[
    'Vor jeder Korrektur: wirksamer und im Zeitpunkt der Korrektur fehlerhafter Verwaltungsakt.',
    'Eine Änderung braucht eine Rechtsnorm; zusätzlich darf die Festsetzungsverjährung nicht entgegenstehen.'
  ],'Die Tabelle folgt der zweispaltigen Originalübersicht auf PDF-S. 33.',[346,360],{
    table:{
      headers:['Steuerbescheide und gleichgestellte Bescheide','Sonstige Verwaltungsakte'],
      rows:[
        ['Vorrang: § 164 Abs. 2 AO bei § 164 Abs. 1 / § 168 AO; Sonderregeln zum Wegfall des VdN nach § 164 Abs. 4 AO.','§ 129 AO'],
        ['Vorrang: § 165 Abs. 2 AO, soweit die Festsetzung nach § 165 Abs. 1 AO vorläufig ist.','§§ 130 und 131 AO'],
        ['Nachrang nach endgültiger Festsetzung bzw. Wegfall/Aufhebung des VdN: § 129 AO; §§ 172, 173, 173a, 174, 175, 175b und 177 AO; ggf. Einzelsteuergesetze.','']
      ]
    }
  }),

  d(382,[40,41,42],'Prüfungsjahr 2024: vollständiger Fall- und Aufgabenfahrplan','case',[
    'Mandantin seit Dezember 2017 geschieden; 2018 erhält sie 12.000 € Unterhalt, hat daneben Arbeitslohn und Vermietungseinkünfte und unterschreibt die Anlage U zunächst nicht.',
    'ESt-Bescheid 2018 ergeht im Juli 2019 unter Vorbehalt der Nachprüfung entsprechend der Erklärung.',
    'Im Dezember 2023 findet sie eine bisher unberücksichtigte Handwerkerrechnung 2018 und beantragt im persönlichen Gespräch beim Finanzamt die Korrektur; der Sachbearbeiter sagt zeitnahe Bearbeitung zu.',
    'Im Januar 2024 wird die Anlage U im Zuge der Scheidungseinigung unterzeichnet; der frühere Ehemann beantragt die Korrektur seines ESt-Bescheids 2018.',
    'Im März 2024 erhält die Mandantin an einem Samstag per Postzustellungsurkunde einen geänderten ESt-Bescheid 2018: Handwerkerkosten abgelehnt, Unterhalt als Einkünfte erfasst, Änderung auf § 164 Abs. 2 AO gestützt und VdN aufgehoben.',
    'Aufgabe 1 – 5 Punkte: Wirksamkeit des März-Bescheids. Lösungshinweise: reguläre Festsetzungsfrist einschließlich § 175 Abs. 1 S. 2 AO, Wegfall des VdN nach § 164 Abs. 4 AO und Zustellung nach § 122 Abs. 5 AO i.V.m. § 3 VwZG sowie §§ 177, 178, 180 ZPO.',
    'Aufgabe 2 – 10 Punkte: verfügbare verfahrensrechtliche Schritte und größtmöglicher Rechtsschutz. Abgrenzung Rechtsbehelfs-/Korrekturverfahren, ggf. § 125 Abs. 5 AO, Zulässigkeit des Einspruchs.',
    'Aufgabe 3 – 9 Punkte: Rechtmäßigkeit der Ablehnung des Änderungsantrags aus Dezember 2023; § 164 AO und Ablaufhemmung nach § 171 Abs. 3 AO.',
    'Aufgabe 4 – 6 Punkte: Rechtmäßigkeit der Unterhaltsänderung; § 173 Abs. 1 Nr. 1 AO sowie § 175 Abs. 1 S. 1 Nr. 2 i.V.m. S. 2 AO.',
    'Aufgabe 5 – 5 Punkte: Schutz vor sofortiger Zahlung; Abgrenzung Stundung (§ 222 AO) und Aussetzung der Vollziehung (§ 361 Abs. 2 AO).',
    'Seit 2022 weist die Prüfung Punkte je Teilaufgabe aus; die Quelle empfiehlt, daraus unmittelbar das Zeitbudget abzuleiten.'
  ],'Die 2024er Examenshistorie wird damit nicht mehr nur als Themenliste, sondern als vollständiger verfahrensrechtlicher Fallfahrplan dargestellt.',[307,318,346,360,362,371]),

  d(371,[43,44],'Prüfungsjahr 2023: vollständige Daten- und Aufgabenstruktur','case',[
    'Eheleute reichen nach mehreren Aufforderungen am 02.05.2023 ihre gemeinsame ESt-Erklärung ein.',
    'Der ESt-Bescheid 2021 vom 17.05.2023 wird per einfachem Brief zur Post gegeben; zugleich wird ein Verspätungszuschlag festgesetzt.',
    'Die Ehefrau legt am 26.06.2023 über MeinELSTER Einspruch ein und wendet sich gegen die Höhe des Verspätungszuschlags.',
    'Sie behauptet Zugang erst am Samstag, 27.05.2023; die Eheleute waren zuvor eine Woche verreist, und der Brief lag bei Rückkehr oben auf der Wochenpost.',
    'Der Ehemann beantragt außerdem die Änderung wegen negativer V+V-Einkünfte der Ehefrau aus einer Erbschaft; Erbanfall 26.11.2021, zunächst Erbengemeinschaft mit der Schwester.',
    'Am 10.08.2023 erfolgt die Erbauseinandersetzung; die Ehefrau erhält das Grundstück allein, ohne rückwirkende Vereinbarung.',
    'Das Finanzamt lehnt den Änderungsantrag wegen groben Verschuldens im Rahmen des § 173 AO ab.',
    'Am 24.08.2023 wird der Einspruch der Ehefrau durch Einspruchsentscheidung als unzulässig verworfen; erstmals im Oktober wenden sich die Eheleute an die Steuerberaterkanzlei.',
    'Aufgabe 1 – 10 Punkte: Rechtmäßigkeit der Einspruchsentscheidung.',
    'Aufgabe 2a – 3 Punkte: Welche verfahrensrechtlichen Schritte sind im Oktober hinsichtlich des Verspätungszuschlags noch möglich?',
    'Aufgabe 2b – 9 Punkte: Rechtmäßigkeit des Verspätungszuschlags dem Grunde und der Höhe nach.',
    'Aufgabe 3 – 13 Punkte: Änderbarkeit des ESt-Bescheids 2021 hinsichtlich der V+V-Einkünfte der Ehefrau.'
  ],'Die konkreten Daten und Punktgewichte der Seiten 43–44 sind nun vollständig im Wiedereinsetzungs-/Fristenblock vorhanden.',[318,307,360]),

  d(371,[44],'Prüfungsjahr 2022: Gewichtung und Doppel-Wiedereinsetzung','exam',[
    'Teil 1 war mit 30 Punkten gewichtet: Zulässigkeit eines Einspruchs eines Erben gegen einen gegenüber dem Erblasser bekannt gegebenen ESt-Bescheid.',
    'Schwerpunkte: Gesamtrechtsnachfolge nach § 45 AO, wirksame Bekanntgabe und zweimalige Wiedereinsetzung – wegen Versäumung der Einspruchsfrist und wegen Versäumung der Monatsfrist des § 110 Abs. 2 AO.',
    'Teil 2 war mit 5 Punkten gewichtet: allgemeine Vollstreckungsvoraussetzungen nach §§ 249, 251, 254 und 259 AO.',
    'Sonderproblem: Vollstreckung gegen den Erben ohne vorherige Bekanntgabe des Steuerbescheids; Leistungsgebot gegenüber dem Erben nach § 254 Abs. 1 S. 3 AO.'
  ],'Die Punktverteilung 30/5 verdeutlicht die vom Skript empfohlene Zeitsteuerung.',[384]),

  d(335,[44,45],'Prüfungsjahr 2021: vollständige Normspur','exam',[
    'Zu prüfen waren Zulässigkeit und Begründetheit von Einsprüchen gegen zwei Prüfungsanordnungen sowie ein Herausgabeverlangen gegenüber der Ex-Gattin.',
    'Zulässigkeitsschwerpunkte: Einspruch gegen unwirksamen VA mit §§ 347 Abs. 1 Nr. 1, 355 Abs. 1 und 350 AO sowie Ersetzung eines unwirksamen VA nach § 365 Abs. 3 Nr. 2 AO.',
    'Begründetheit: Rechtmäßigkeit der Prüfungsanordnung, insbesondere §§ 193 Abs. 1 und 194 Abs. 1 AO i.V.m. BpO.',
    'Herausgabeverlangen gegenüber der Ex-Gattin: §§ 101 Abs. 1, 15 Abs. 1 Nr. 2 und Abs. 2 Nr. 1, 104 Abs. 2, 200, 97 Abs. 1 und 93 Abs. 1 S. 3 AO.'
  ],'Die BpO wird im Short-Skript ausdrücklich als zugelassenes und 2021 prüfungsrelevantes Hilfsmittel hervorgehoben.',[301,307]),

  d(369,[45,46],'Prüfungsjahr 2020: Wirksamkeit, § 351 und Wiedereinsetzung','exam',[
    'Gegenstand: Erfolgsaussichten eines Einspruchs gegen einen geänderten ESt-Bescheid.',
    'Zulässigkeit: Einspruchsfrist § 355 AO und Wiedereinsetzung § 110 AO; Fristversäumnis durch Mitarbeiterin des Steuerberaters, Verschuldensprüfung/-zurechnung und Monatsfrist des § 110 Abs. 2 AO.',
    'Begründetheit: Rechtswidrigkeit des Änderungsbescheids sowie Umfang der Änderung nach § 351 Abs. 1 AO.',
    'Hauptproblem: wirksame Bekanntgabe und wirksame Aufhebung des VdN nach § 164 Abs. 3 S. 1 AO; Aufgabe des Bekanntgabewillens nach AEAO zu § 124 Nr. 4–6.',
    'Zusätzlich: Nichtbeachtung einer Empfangsvollmacht nach § 122 Abs. 1 S. 4 AO und Heilung des Bekanntgabe-/Übermittlungsmangels.',
    'Danach § 173 Abs. 1 AO und Änderungssperre nach § 173 Abs. 2 AO.',
    'Quellenergebnis: Einspruch zulässig, aber unbegründet.'
  ],'Damit ist auch das im Skript ausdrücklich genannte Endergebnis des Prüfungsjahres 2020 erfasst.',[307,371,360]),

  d(342,[46,47],'Prüfungsjahr 2019: Nicht-Erbe, Erstattung und neuer Erbe','exam',[
    'Aufgaben 1 und 2 (ca. 25 Punkte): Wirksamkeit des Bescheids gegen den später als Nicht-Erben erkannten Adressaten; Nichtigkeitsfeststellung bzw. Aufhebung und Erstattungsanspruch nach § 37 Abs. 2 AO.',
    'Alternativprüfung der Aufhebung über § 173 Abs. 1 Nr. 2 AO aufgrund des nachträglich aufgefundenen Testaments.',
    'Festsetzungsfrist mit höchstzulässiger dreijähriger Anlaufhemmung bei Erklärung durch den Nicht-Erben, § 169 Abs. 2 S. 1 Nr. 2 AO und Ablaufhemmung § 171 Abs. 3 AO.',
    'Wirksame Entstehung/Bekanntgabe des Aufhebungsbescheids sowie Abtretung des Erstattungsanspruchs nach § 46 AO.',
    'Aufgabe 3 (ca. 10 Punkte): erstmaliger ESt-Bescheid gegen den tatsächlich ermittelten Erben nach § 45 AO; Festsetzungsfrist sowie Ablaufhemmungen § 171 Abs. 12 und 14 AO und Zahlungsverjährung nach §§ 228 ff. AO.'
  ],'Die Quelle weist ausdrücklich auf Parallelen zur Prüfung 2017 hin.',[307]),

  d(375,[47,48],'Prüfungsjahr 2018: Feststellung, Teilnichtigkeit und Ergänzungsbescheid','exam',[
    'Zu prüfen war, ob eine einheitliche und gesonderte Gewinnfeststellung für eine Partnerschaftsgesellschaft erforderlich war und ob sie allen Beteiligten einschließlich einer Erbin wirksam bekannt gegeben wurde.',
    'Normspur: §§ 180 Abs. 1 Nr. 2 Buchst. a, 179 Abs. 2 S. 2 AO; Inhaltsadressaten §§ 179 Abs. 2 S. 1/2 und 119 Abs. 1 AO.',
    'Bekanntgabe nach § 183 AO einschließlich § 182 Abs. 3 AO zur Teilnichtigkeit und besonderem Bescheid gegenüber dem Rechtsnachfolger.',
    'Ablehnung eines Ergänzungsbescheids nach § 179 Abs. 3 AO.',
    'Einspruch gegen geänderten Feststellungsbescheid: § 355 Abs. 1, Einspruch gegen unwirksamen Bescheid, § 352 Abs. 1 AO; Begründetheit mit § 351 Abs. 1 AO.',
    'Korrektur des Feststellungsbescheids über § 181 Abs. 1 i.V.m. § 172 Abs. 1 Nr. 2 Buchst. a, § 173 Abs. 1 Nr. 1/2 und § 177 AO.'
  ],'Die Ablehnung eines Ergänzungsbescheids war ausdrücklich Teil des Prüfungsstoffs.',[338,340]),

  d(342,[48],'Prüfungsjahr 2017: vollständige Rechtsbehelfs- und Fristspur','exam',[
    'Rechtsbehelfe gegen Ablehnung der Nichtigkeitsfeststellung, Ablehnung der Aufhebung eines ESt-Bescheids und Ablehnung/Verfolgung eines Erstattungsanspruchs.',
    'Statthaftigkeit gegen Ablehnungsbescheide: § 155 Abs. 1 S. 3 Alt. 2 und § 347 Abs. 1 S. 1 Nr. 1 AO; zusätzlich Abrechnungsbescheid nach § 218 Abs. 2 AO.',
    'Zulässigkeit: §§ 357, 350, 355 Abs. 1 i.V.m. § 122 Abs. 1 S. 3, § 122 Abs. 2 Nr. 1, § 108 Abs. 3 und § 356 Abs. 2 AO.',
    'Begründetheit Nichtigkeitsfeststellung: §§ 125 Abs. 5, 125 Abs. 1, 119 Abs. 1 und 122 Abs. 1 AO.',
    'Aufhebung: § 175 Abs. 1 S. 1 Nr. 2 und § 173 Abs. 1 Nr. 2 AO.',
    'Festsetzungsfrist: § 170 Abs. 2 Nr. 2 Alt. 2, § 108 Abs. 3, § 171 Abs. 3, § 110, § 171 Abs. 12/14 und § 171 Abs. 3a AO; zusätzlich Höhe des Erstattungsanspruchs nach § 37 Abs. 2 AO.'
  ],'Die Quelle nennt diese Normenkette ausdrücklich als Prüfungsschwerpunkte.',[307,371]),

  d(363,[49],'Prüfungsjahr 2016: vollständige Normkette','exam',[
    'Gutachtlich war zu prüfen, ob ein ESt-Bescheid erneut geändert werden kann.',
    'Bindungswirkung eines Feststellungsbescheids nach §§ 180 Abs. 1 S. 1 Nr. 2 Buchst. a und 182 AO.',
    'Verböserung nach § 367 Abs. 2 S. 1/2 AO und Einschränkung des Grundsatzes der Vollüberprüfung.',
    '§ 164 Abs. 2 AO bei fortbestehendem VdN; § 164 Abs. 4 AO zusammen mit Festsetzungsfrist und insbesondere § 171 Abs. 2, Abs. 10 und Abs. 4 AO.',
    'Korrektur nach § 129 AO i.V.m. § 171 Abs. 2 AO.',
    'Korrektur nach § 175 Abs. 1 S. 1 Nr. 1 AO und § 171 Abs. 10 S. 4 AO i.V.m. § 171 Abs. 4 und 3a AO.',
    'Vor einer Verböserung muss nach § 367 Abs. 2 S. 2 AO hingewiesen werden, damit der Einspruch zurückgenommen werden kann.'
  ],'Damit sind sämtliche auf S. 49 aufgeführten Prüfungspunkte einzeln erfasst.',[338,346,324])
];

export const AO_SHORT_2025_DETAIL_BY_MODULE=AO_SHORT_2025_DETAIL_BLOCKS.reduce((m,x)=>{(m[x.moduleId]??=[]).push(x);return m;},{});
export default AO_SHORT_2025_DETAIL_BLOCKS;
