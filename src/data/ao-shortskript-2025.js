/* Hans-Jürgen Jacobs, Short-Skript "Steuerliches Verfahrensrecht", Mai 2025 – 49/49 Seiten.
   Keine neue AO-Einheit: Die Inhalte werden als Ergänzungsquelle in bestehende AO-Lernmodule eingeblendet. */

export const AO_SHORT_2025_META={title:'Short-Skript „Steuerliches Verfahrensrecht“',author:'Hans-Jürgen Jacobs',stand:'Mai 2025',pages:49};

/* Primärzuordnung: jede PDF-Seite genau einem bestehenden Lernmodul zugeordnet. */
export const AO_SHORT_2025_PAGE_PLAN={
1:301,2:301,3:301,4:301,5:301,6:301,7:382,8:301,9:301,10:301,
11:318,12:318,13:307,14:307,15:307,16:307,17:307,18:338,19:338,20:329,
21:329,22:340,23:340,24:340,25:318,26:318,27:318,28:324,29:369,30:369,
31:369,32:382,33:382,34:346,35:360,36:362,37:362,38:363,39:363,40:301,
41:382,42:382,43:382,44:371,45:335,46:342,47:375,48:375,49:363,
};

const b=(moduleId,sourcePages,title,kind,points,note='',links=[])=>({moduleId,sourcePages,title,kind,points,note,links});

export const AO_SHORT_2025_BLOCKS=[
b(301,[1,2,3,4,5,6,8,9,10,40],'Klausurtechnik: vom Aufgabentext zum Gutachten','flow',[
'Zuerst Aufgabenstellung, dann Sachverhalt vollständig lesen; beim ersten Durchgang grundsätzlich noch nicht markieren.',
'Bearbeitungshinweise und Anlagen beim zweiten Durchgang exakt auswerten; nur die tatsächlich gestellten Fragen beantworten.',
'Entscheidungserhebliche Daten markieren; bei vielen Beteiligten oder Daten eine Fallskizze bzw. Zeittabelle bilden.',
'Antwortnorm(en) bestimmen und Spezialvorschriften vor Grundvorschriften prüfen; AEAO, BpO, VollstrA und VollzA als zugelassene Hilfen mitdenken.',
'Lösungskonzept im Gutachtenstil: Obersatz → Tatbestandsmerkmale/Subsumtion → Ergebnis. Problematisches ausführlich, Unproblematisches kurz.',
'Bei mehreren Bescheiden grundsätzlich Aufgabenreihenfolge einhalten; ohne Vorgabe zuerst Grundlagen-, dann Folgebescheide und mehrere VZ historisch bearbeiten.',
'Seit 2022 weisen die Klausuren Punkte je Teilaufgabe aus; diese Gewichtung soll als Zeitbudget genutzt werden.'
],'Das Skript betont mehrfach: Im AO-Teil bringt der begründete Lösungsweg die Punkte; ein allgemeines Patentrezept gibt es nicht.',[382,318]),

b(382,[7,32,33,41,42,43],'Fundamentale Aufbauregel: Einspruch vor Korrektur','decision',[
'Bei einer begehrten Änderung zugunsten des Steuerpflichtigen zuerst prüfen, ob bereits Einspruch eingelegt wurde oder noch eingelegt werden kann.',
'Ist ein Einspruch nicht möglich oder unzulässig, erst danach Korrekturvorschriften (§ 129, § 164 Abs. 2, § 165 Abs. 2, §§ 172 ff. AO) prüfen.',
'Formelle/Wirk­samkeitsfehler haben Vorrang vor materiellen Fehlern: Ein nichtiger Verwaltungsakt kann nicht korrigiert werden.',
'Allgemeine Korrektur-Checkliste: wirksamer und fehlerhafter VA → Korrekturvorschrift → Festsetzungsverjährung.',
'Korrekturübersicht des Skripts: Steuerbescheide/gleichgestellte Bescheide vorrangig § 164 Abs. 2 bzw. § 165 Abs. 2, danach § 129 und §§ 172–175b/177; sonstige VA über § 129, § 130 und § 131.',
'Examensjahr 2024 verknüpft Wirksamkeit, VdN, § 171 Abs. 3, § 173, § 175 Abs. 1 Nr. 2 und vorläufigen Rechtsschutz; 2023 verbindet Bekanntgabe/Einspruch mit Verspätungszuschlag und § 173.'
],'Diese Seiten ergänzen unmittelbar den vorhandenen Plan-A/B/C-Gedanken, ohne ein neues Parallelschema anzulegen.',[318,346,360,362,363]),

b(318,[11,12,25,26,27],'Einspruch: Gutachteneinstieg und Zulässigkeit','checklist',[
'Obersatz: Der Einspruch hat Aussicht auf Erfolg, wenn er zulässig und begründet ist.',
'Zulässigkeit nach § 358 AO stets strukturiert ansprechen: Statthaftigkeit, Form, Anbringungsbehörde/Zuständigkeit, Frist, Beschwer; bei GuE zusätzlich § 352/§ 360 AO.',
'Eindeutige Voraussetzungen kurz, problematische Voraussetzungen mit Begründung und genauer Normangabe prüfen.',
'Unklare Erklärungen nach dem wirklichen Willen auslegen; im Zweifel will der Steuerpflichtige den umfassenderen Rechtsschutz. Eine falsche Bezeichnung schadet nach § 357 Abs. 1 S. 3 AO nicht.',
'Der Einspruch hält den Fall durch Gesamtüberprüfung offen, kann ohne Begründung eingelegt und später ergänzt werden; ein §-172-Antrag ist demgegenüber punktuell.',
'Bei unzulässigem Einspruch die Begründetheit nur prüfen, wenn die Aufgabenstellung dies ausdrücklich oder hilfsweise verlangt.'
],'Das Short-Skript stellt den Einspruch als regelmäßig größtmöglichen Rechtsschutz vor die punktuelle Korrektur.',[319,324,369]),

b(307,[13,14,15,16,17],'Wirksamkeit und ordnungsgemäße Bekanntgabe','flow',[
'Wirksamkeitsprüfung: kein schwerwiegender Inhaltsfehler → ordnungsgemäße Bekanntgabe → nicht nichtig (§§ 124, 125 AO).',
'Besonders schwerwiegende, offenkundige Inhaltsfehler führen zur Nichtigkeit; Bekanntgabefehler sind demgegenüber grundsätzlich heilbar.',
'Ein nichtiger Bescheid ist nicht korrigierbar. Auch gegen einen „Nichtakt“ kann wegen seines Rechtsscheins Einspruch statthaft sein; § 125 Abs. 5 AO bleibt als Feststellungsantrag.',
'Bekanntgabeschema des Skripts: Bekanntgabewille der Behörde → richtiger Adressat → Zugang.',
'Adressaten sauber trennen: Inhaltsadressat, Bekanntgabeadressat und Empfänger.',
'Zugang setzt Machtbereich und erwartbare Kenntnisnahme voraus; bei Zweifeln greift § 122 Abs. 2 letzter Halbsatz.',
'Für Verwaltungsakte, die ab 01.01.2025 zur Post gegeben werden, nennt das Skript die Vier-Tage-Bekanntgabefiktion.',
'Umzugsbeispiel S. 17: alter Briefkasten ist kein Machtbereich mehr; tatsächliche Übergabe kann den Bekanntgabemangel heilen und den Fristlauf auslösen.'
],'Die Beispiele S. 14–17 werden als zusätzliche Falltechnik in die bestehenden Bekanntgabe-/Wirksamkeitsmodule eingebettet.',[313,314]),

b(338,[18,19],'Feststellungsbescheid und Folgebescheid getrennt prüfen','columns',[
'Feststellungsverfahren und Festsetzungsverfahren sind zwei selbstständige Verfahren.',
'Feststellungsbescheide entfalten Bindungswirkung nach § 182 Abs. 1 AO; das Festsetzungs-FA darf die Feststellungen nicht eigenständig ersetzen.',
'MoPeG-Hinweis des Skripts: seit 01.01.2024 sind insbesondere §§ 14a, 79, 181, 183 und 352 AO in offenen Fällen zu beachten.',
'Feststellungsbescheide können über § 181 Abs. 1 AO grundsätzlich mit denselben Korrekturvorschriften wie Steuerbescheide korrigiert werden.',
'Bei der Klausur zuerst den Feststellungsbescheid, danach den Folgebescheid prüfen, sofern die Aufgabe nichts anderes vorgibt.',
'Der Folgebescheid ist bei geänderten Grundlagen grundsätzlich über § 164 Abs. 2 AO (Vorrang, soweit VdN) oder § 175 Abs. 1 Nr. 1 AO anzupassen.'
],'Das Short-Skript bestätigt und schärft den bereits vorhandenen Grundlagen-/Folgebescheid-Block.',[340,361,375,376]),

b(329,[20,21],'Festsetzungsfrist: Dauer → Beginn → Ende → Ablaufhemmung','flow',[
'Nach § 169 Abs. 1 S. 1 AO sind erstmalige Festsetzung, Aufhebung und Änderung nach Fristablauf nicht mehr zulässig.',
'Fristdauer im Skript: regelmäßig 4 Jahre, bei vorsätzlicher Steuerhinterziehung 10 Jahre, bei leichtfertiger Verkürzung 5 Jahre.',
'Fristbeginn: § 170 Abs. 1 AO; bei Pflichtveranlagungen Anlaufhemmung nach § 170 Abs. 2 S. 1 Nr. 1 AO. Für den Fristbeginn ist § 108 Abs. 3 AO nicht anzuwenden.',
'Fristende grundsätzlich über § 108 Abs. 1 AO i.V.m. § 188 Abs. 2 BGB; für das teilweise/konkrete Fristende § 108 Abs. 3 AO beachten.',
'Das Skript listet als besonders examensrelevante Ablaufhemmungen § 171 Abs. 2, 3, 3a, 4, 5, 8, 9, 10, 12 und 14 AO.',
'Fristwahrung nach § 169 Abs. 1 S. 3 AO setzt bei rechtzeitiger Aufgabe zur Post auch tatsächlichen Zugang voraus.'
],'Die Reihenfolge entspricht dem vorhandenen Festsetzungsfrist-Baukasten und ergänzt ihn um konkrete Klausurformulierungen.',[330,331,332,337,342,343]),

b(340,[22,23,24],'§ 181 Abs. 5 AO: X/Y-Fall mit einschränkendem Hinweis','case',[
'Feststellungsbescheide können nach Ablauf ihrer Feststellungsfrist noch ergehen, soweit sie für Steuerfestsetzungen mit noch offener Festsetzungsfrist bedeutsam sind.',
'Der Bescheid muss den einschränkenden Hinweis nach § 181 Abs. 5 S. 2 AO enthalten; fehlt er, ist der Bescheid nach dem Skript rechtswidrig, aber nicht nichtig und ggf. nach § 126 AO heilbar.',
'Beispiel: Feststellungsfrist endet 2006; geänderter Feststellungsbescheid wird am 11.12.2007 bekannt gegeben. Für X läuft die ESt-Festsetzungsfrist noch bis Ende 2007, für Y ist sie bereits Ende 2006 abgelaufen.',
'Folge: Wirkung gegenüber X, nicht gegenüber Y; die §-181-Abs.-5-Prüfung des Folgebescheids obliegt dem Wohnsitz-FA.',
'Für X kann der Folgebescheid wegen § 171 Abs. 10 S. 1 AO noch im April 2008 über § 175 Abs. 1 Nr. 1 AO angepasst werden; das Skript errechnet das Ende der Zweijahresfrist mit Ablauf 14.12.2009.',
'Die Nichtanwendung des § 171 Abs. 10 am Ende des § 181 Abs. 5 S. 1 betrifft nach dem Skript nur die Feststellungsfrist, nicht die Festsetzungsfrist des Folgebescheids.'
],'Das Zahlenbeispiel wird als Vertiefung des bestehenden §-181-Abs.-5-Schemas angezeigt.',[338,361]),

b(324,[28],'Begründetheit: Vollüberprüfung und Verböserung','checklist',[
'Der Einspruch ist begründet, wenn der angegriffene Bescheid rechtswidrig ist und der Einspruchsführer dadurch in seinen Rechten verletzt wird.',
'Grundsatz der Vollüberprüfung nach § 367 Abs. 2 S. 1 AO: alle aus dem Sachverhalt erkennbaren materiellen Fehler prüfen.',
'Weitere Gründe können nachgeschoben werden; auch das Finanzamt kann weitere Fehler aufgreifen.',
'Verböserung nach § 367 Abs. 2 S. 2 AO ist möglich, muss aber angekündigt werden; durch Rücknahme kann der Einspruchsführer sie verhindern.'
],'Diese Seite ergänzt unmittelbar die vorhandene Begründetheits-/Verböserungsdarstellung.',[325,326,369]),

b(369,[29,30,31,45,46],'§ 351 AO: Änderungsrahmen und Folgebescheid','case',[
'Bei Einspruch gegen einen Änderungsbescheid ist § 351 Abs. 1 AO eine sachliche Anfechtungsbeschränkung innerhalb der Begründetheit.',
'Innerhalb des Änderungsbetrags können Einwendungen ohne eigene Korrekturvorschrift berücksichtigt werden; darüber hinaus nur, soweit eine eigenständige Korrekturvorschrift zugunsten des Steuerpflichtigen greift und die Festsetzungsfrist offen ist.',
'Beispiel S. 29: 10.000 € Ausgangssteuer, Änderung auf 12.000 €, Betriebsausgaben wirken 2.500 € mindernd → 2.000 € im Änderungsrahmen, weitere 500 € nur mit eigener Korrekturvorschrift.',
'Variante S. 30: Änderung auf 12.600 € aus +2.300 € (§ 173 Abs. 1 Nr. 1) und −300 € (§ 175 Abs. 1 Nr. 1); die 2.500 € BA können im Rahmen des § 351 Abs. 1 vollständig saldiert werden → 10.100 €.',
'Bei förmlichem Einspruch gegen den Änderungsbescheid ist der Rahmen über § 351 Abs. 1, nicht über § 177 AO zu begründen; vor Erlass eines Änderungsbescheids/Bp-Bericht ist dagegen § 177 AO einschlägig.',
'§ 351 Abs. 2 AO: Einwendungen gegen Grundlagenentscheidungen müssen gegen den Grundlagenbescheid gerichtet werden. Das Beispiel S. 30/31 wird als zwei Einsprüche ausgelegt; der Einspruch gegen den F-Bescheid kann nach § 357 Abs. 2 S. 2 AO beim Wohnsitz-FA angebracht werden.',
'Examensjahr 2020 verband § 351 Abs. 1 mit Wiedereinsetzung, Bekanntgabewillen/Empfangsvollmacht, § 173 und der Änderungssperre des § 173 Abs. 2.'
],'Das Short-Skript bestätigt ausdrücklich die spiegelbildliche, aber nicht austauschbare Funktion von § 351 AO und § 177 AO.',[363,371]),

b(346,[34],'§ 164 / § 165 / § 129: Vorrang und Reichweite','columns',[
'§ 164 Abs. 2 AO hat bei wirksamem Vorbehalt Vorrang und eröffnet innerhalb der Festsetzungsfrist eine Gesamtüberprüfung; der Vorbehalt gilt fort, bis er ausdrücklich aufgehoben wird oder nach § 164 Abs. 4 AO entfällt.',
'§ 165 Abs. 2 AO hat im Umfang der Vorläufigkeit Vorrang; Grund und Umfang der Vorläufigkeit müssen bestimmbar sein. Soweit die Ungewissheit beseitigt ist und sich eine andere Steuer ergibt, ist zu korrigieren.',
'§ 129 AO gilt sowohl für Steuerbescheide/gleichgestellte Bescheide als auch sonstige VA; bei Steuerbescheiden ist die Festsetzungsfrist einschließlich § 171 Abs. 2 S. 1 AO zu beachten.',
'Erkennbare Fehler des Steuerpflichtigen können als Übernahmefehler unter § 129 AO fallen; daneben ist § 173a AO zu prüfen.'
],'Die Seite wird in den vorhandenen VdN-/Vorläufigkeitsblock eingeblendet; sie ersetzt keine der detaillierteren Einheit-5-Skizzen.',[347,348,352,353]),

b(360,[35],'§ 172, § 173 und § 173a: Abgrenzung','checklist',[
'§ 172 Abs. 1 S. 1 Nr. 2 Buchst. a AO: Antrag zugunsten innerhalb der Einspruchsfrist, konkret auf einen bestimmten Sachverhalt bezogen; spätere Erweiterung nach Fristablauf nicht möglich.',
'§ 172 Abs. 1 S. 1 Nr. 2 Buchst. c AO: bei durch arglistige Täuschung/Steuerhinterziehung erwirktem Bescheid zusätzlich § 173 Abs. 1 Nr. 1 AO mitprüfen.',
'§ 173 Abs. 1 AO ist grundsätzlich für jede Tatsache getrennt anzuwenden: Nr. 1 steuererhöhend, Nr. 2 steuermindernd; das Skript weist auf die Ausnahme nach AEAO zu § 173 Nr. 6.2 hin.',
'§ 173 Abs. 1 Nr. 2 S. 2 AO kann grobes Verschulden unbeachtlich machen, verlangt nach dem Skript zwei neue Tatsachen.',
'§ 173a AO erfasst Schreib-/Rechenfehler des Steuerpflichtigen/Beraters in der Erklärung, wenn eine Übernahme nach § 129 mangels Erkennbarkeit ausscheidet.'
],'Die Abgrenzung ergänzt die bestehenden Spezialmodule zu § 172, § 173 und § 173a.',[352,353,354]),

b(362,[36,37],'§ 175 Abs. 1 Nr. 1/2 und § 175b AO','case',[
'Grundlagenbescheid erlassen/aufgehoben/geändert → Folgebescheid muss nach § 175 Abs. 1 S. 1 Nr. 1 AO angepasst werden; § 171 Abs. 10 AO mitprüfen.',
'Rückwirkendes Ereignis nach § 175 Abs. 1 S. 1 Nr. 2 AO: zusätzlich gesonderte Anlaufhemmung nach § 175 Abs. 1 S. 2 AO beachten.',
'Beispiel: Unternehmensveräußerung für 1.000.000 € in zehn Jahresraten; Ausfall späterer Raten wegen Zahlungsunfähigkeit ist nach dem Skript rückwirkendes Ereignis, weil das punktuelle Veräußerungsgeschäft materiell im Veräußerungsjahr richtiggestellt werden muss.',
'Für den im März 2008 eingetretenen Forderungsausfall beginnt die darauf bezogene Festsetzungsfrist nach § 175 Abs. 1 S. 2 AO erst mit Ablauf 2008; das Skript nennt als reguläres Ende 31.12.2012 und bei rechtzeitigem Antrag § 171 Abs. 3 AO.',
'§ 175b AO begründet bei Datenübermittlung nach § 93c AO eine Anpassungspflicht auch dann, wenn die Daten bei Bescheiderlass bereits vorlagen, aber nicht oder falsch berücksichtigt wurden.'
],'Die Seiten 36/37 ergänzen die vorhandenen Grundlagenbescheid-, rückwirkendes-Ereignis- und eDaten-Module.',[361]),

b(363,[38,39,49],'§ 177 AO: passive Saldierung und Kontrollrechnung','flow',[
'§ 177 AO ist nach dem Skript eine passive Korrekturvorschrift: nie allein, sondern nur im Anschluss an zuvor bejahte Korrekturvorschriften.',
'Punkt 1: Berichtigungsobergrenze aus selbständig korrigierbaren steuererhöhenden Fehlern (§ 177 Abs. 1) und Berichtigungsuntergrenze aus selbständig korrigierbaren steuermindernden Fehlern (§ 177 Abs. 2); jeweils nur innerhalb offener Festsetzungsfrist.',
'Punkt 2: Rechtsfehlersaldo aus allen materiellen Fehlern i.S.d. § 177 Abs. 3, die nicht selbständig korrigierbar sind.',
'Punkt 3: Rechtsfehlersaldo mit Korrekturvorschriften gegenläufiger Wirkung verrechnen, höchstens soweit die gegenläufige Änderung reicht.',
'Punkt 4: Verbleibende Differenz mit den Korrekturvorschriften verrechnen, bei denen zuvor keine Saldierung möglich war.',
'Kontrollrechnung S. 39: ursprüngliche Steuer/zvE + selbständige Erhöhungen − selbständige Minderungen ± Rechtsfehlersaldo = materiell richtige Steuer/zvE; liegt das Ergebnis außerhalb des Rahmens, auf Ober- bzw. Untergrenze begrenzen.',
'Examensjahr 2016 kombinierte Feststellungsbescheid, Verböserung, § 164, § 129, § 175 Abs. 1 Nr. 1 sowie Ablaufhemmungen nach § 171.'
],'Das Short-Skript verlangt ausdrücklich: gegenläufige Korrekturvorschriften nicht miteinander saldieren; nur nicht selbständig änderbare materielle Fehler werden zum Rechtsfehlersaldo zusammengefasst.',[369]),

b(371,[44],'Prüfungsjahr 2022/2023: Frist und Wiedereinsetzung','exam',[
'2023: Rechtmäßigkeit einer Einspruchsentscheidung bei behauptet spätem Zugang, Verspätungszuschlag und Änderbarkeit negativer V+V-Einkünfte nach Erbauseinandersetzung.',
'2022: umfangreiche Zulässigkeitsprüfung eines Erben-Einspruchs mit Gesamtrechtsnachfolge, wirksamer Bekanntgabe und zweimaliger Wiedereinsetzung (Einspruchsfrist sowie Monatsfrist des § 110 Abs. 2 AO).',
'Der Vollstreckungsteil 2022 verlangte §§ 249, 251, 254 und 259 AO und bei Vollstreckung gegen den Erben ohne vorherige Bekanntgabe das Leistungsgebot nach § 254 Abs. 1 S. 3 AO.'
],'Die Examenshistorie wird als Prüfungsrelevanz direkt beim Wiedereinsetzungsmodul angezeigt.',[314,384]),

b(335,[45],'Prüfungsjahr 2021: Prüfungsanordnung und Auskunft','exam',[
'Zulässigkeit und Begründetheit von Einsprüchen gegen zwei Prüfungsanordnungen.',
'Unwirksamer VA im Zusammenspiel mit § 347 Abs. 1 Nr. 1, § 355 Abs. 1 und § 350 AO sowie Ersetzung nach § 365 Abs. 3 Nr. 2 AO.',
'Rechtmäßigkeit der Prüfungsanordnung insbesondere nach § 193 Abs. 1 und § 194 Abs. 1 AO i.V.m. BpO.',
'Herausgabeverlangen gegenüber der Ex-Gattin mit §§ 101, 15, 104, 200, 97 und 93 AO.'
],'Das Short-Skript ordnet die BpO ausdrücklich als zugelassenes und 2021 examensrelevantes Hilfsmittel ein.',[302,303]),

b(342,[46,47,48],'Prüfungsjahre 2019/2017: Nicht-Erbe, Erstattung und Verjährung','exam',[
'2019: nachträglich aufgefundenes Testament; Nichtigkeit des gegen den Nicht-Erben erlassenen Bescheids, Aufhebung nach § 173 Abs. 1 Nr. 2 AO und Erstattungsanspruch nach § 37 Abs. 2 AO.',
'Festsetzungsfrist einschließlich höchstzulässiger Anlaufhemmung, § 171 Abs. 3 AO sowie für den richtigen Erben § 171 Abs. 12 und Abs. 14 AO; zusätzlich Zahlungsverjährung §§ 228 ff. AO.',
'Wirksame Entstehung/Bekanntgabe des Aufhebungsbescheids und Abtretung des Erstattungsanspruchs nach § 46 AO.',
'2017: Rechtsbehelfe gegen Ablehnung von Nichtigkeitsfeststellung, Bescheidaufhebung und Erstattung; Abrechnungsbescheid § 218 Abs. 2 AO, § 125/§ 119, § 175 Abs. 1 Nr. 2, § 173 Abs. 1 Nr. 2 und umfangreiche Fristprüfung.'
],'Die Examensjahre bestätigen die hohe Relevanz der Verknüpfung von Wirksamkeit, Gesamtrechtsnachfolge, Erstattung und Ablaufhemmungen.',[307,354]),

b(375,[47,48],'Prüfungsjahr 2018: Feststellungsbescheid, § 352 und Ergänzungsbescheid','exam',[
'Einheitlich/gesonderte Gewinnfeststellung nach §§ 179/180 AO, Inhaltsadressaten und Bekanntgabe nach § 183 AO – einschließlich Rechtsnachfolge und Teilnichtigkeit nach § 182 Abs. 3 AO.',
'Zulässigkeit des Einspruchs gegen geänderten Feststellungsbescheid einschließlich § 352 AO; Begründetheit mit § 351 Abs. 1 AO.',
'Korrektur des Feststellungsbescheids über § 181 Abs. 1 i.V.m. § 172, § 173 und § 177 AO.',
'Ergänzungsbescheid nach § 179 Abs. 3 AO; die Ablehnung eines entsprechenden Antrags war ausdrücklich Prüfungsstoff.'
],'Die Examenshistorie wird unmittelbar beim GuE-/Feststellungsblock angezeigt.',[376,338,340]),

b(384,[6,44],'Vollstreckung als ergänzender Prüfungsblock','exam',[
'Das Skript nennt VollstrA und VollzA als zugelassene Hilfsmittel und verweist auf ihre frühere Examensrelevanz.',
'Prüfungsjahr 2022: allgemeine Vollstreckungsvoraussetzungen §§ 249, 251, 254 und 259 AO; Sonderproblem Leistungsgebot gegenüber dem Erben nach § 254 Abs. 1 S. 3 AO.'
],'Das Short-Skript enthält selbst kein vollständiges Vollstreckungskapitel; die Hinweise werden deshalb nur als Ergänzung im vorhandenen Vollstreckungsmodul geführt.',[]),
];

export const AO_SHORT_2025_BY_MODULE=AO_SHORT_2025_BLOCKS.reduce((m,x)=>{(m[x.moduleId]??=[]).push(x);return m;},{});
export default AO_SHORT_2025_BLOCKS;
