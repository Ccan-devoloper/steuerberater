#!/usr/bin/env node
/* Redaktionelle Nachbearbeitung des 30-Tage-Reviewfensters. Die Fragen auf
 * Folie 1 und im Reel sind konkrete Klausurentscheidungen; der Quellenpool
 * bleibt als Provenienz in jedem Tagesentwurf erhalten. */
import fs from "node:fs";
import path from "node:path";
import { themenpool } from "../src/inhalte.mjs";
import { pruefeBeitrag } from "../src/pruefung.mjs";
import { examenscampusRegelnPruefen } from "../src/vorproduktion.mjs";

const dir = path.resolve(process.env.IG_ASSET_DIR || "../.instagram-assets", "vorproduktion");
const hooks = {
  "2026-09-29": ["Drei Vermögen: Wo landet die Maschine?", "Frist abgelaufen: Ist der Bescheid noch änderbar?", "Wohnsitz im Ausland: Wer darf besteuern?"],
  "2026-09-30": ["Wertverlust: Abschreiben oder abwarten?", "Falscher Bescheid: Unwirksam oder nur rechtswidrig?", "Freistellen oder anrechnen: Wer entscheidet?"],
  "2026-10-01": ["Gesellschaft oder Gesellschafter: Wem dient das Gut?", "Prüfungsbeginn nur auf Papier: Läuft die Frist weiter?", "Wegzug mit GmbH-Anteilen: Was wird fiktiv veräußert?"],
  "2026-10-02": ["Vorräte am Stichtag: Welcher Wert bleibt?", "An Berater zugestellt: Läuft die Einspruchsfrist?", "Auslandseinkünfte: Wo kommt § 7 AStG ins Spiel?"],
  "2026-10-03": ["Vorteil ohne Geld: Ist das eine Einlage?", "Festsetzungsfrist: Welcher Tag startet die Uhr?", "183 Tage: Darf der Tätigkeitsstaat besteuern?"],
  "2026-10-04": ["Falsche Bilanz: Berichtigung oder Änderung?", "Einspruch: Ist dieser Verwaltungsakt anfechtbar?", "Erst nationales Recht, dann DBA: Warum?"],
  "2026-10-05": ["IAB gebildet: Welche Grenze gilt wirklich?", "Frist versäumt: Wann hilft Wiedereinsetzung?", "Kein deutscher Wohnsitz: Trotzdem unbeschränkt?"],
  "2026-10-06": ["Rentenpreis für ein Gebäude: Was sind die AK?", "Fristende am Sonntag: Was passiert am Montag?", "Kapitalertrag aus Deutschland: Ist der Abzug final?"],
  "2026-10-07": ["Falscher Buchungssatz: Wie wirkt die Korrektur?", "Zahlendreher in der Erklärung: § 173a oder § 129?", "Auslandssteuer: DBA oder § 34c EStG?"],
  "2026-10-08": ["Beteiligung verkauft: Wo greift § 8b KStG?", "Bescheid erhalten: Wollte das Amt ihn bekanntgeben?", "Quellensteuer einbehalten: Wie kommt die Entlastung?"],
  "2026-10-09": ["Anteil teurer gekauft: Wohin mit dem Mehrwert?", "Feststellungsbescheid: Wer darf Einspruch einlegen?", "Auslandsgewinn: Gibt es eine Betriebsstätte?"],
  "2026-10-10": ["Ware geliefert: Ist der Gewinn schon realisiert?", "Frist vorbei: Welche Korrektur bleibt offen?", "Aufsichtsrat im Inland: Wo wird besteuert?"],
  "2026-10-11": ["Zerstörte Maschine: Wann ist eine Ersatzrücklage möglich?", "Änderungsantrag oder Einspruch: Was wurde erklärt?", "Dividende ins Ausland: Wer behält Steuer ein?"],
  "2026-10-12": ["Im Grundbuch steht A: Wem gehört das Gut steuerlich?", "Neue Tatsache: Wann darf der Bescheid noch geändert werden?", "Beschränkt steuerpflichtig: Welche Abzüge bleiben?"],
  "2026-10-13": ["Bilanzklausur: In welcher Reihenfolge korrigieren?", "Wohnrecht oder Rente: Was ist der Jahreswert?", "Beschränkte Steuerpflicht: Welche Einkünfte sind inländisch?"],
  "2026-10-14": ["Gesellschaftervorteil: Ist das schon eine vGA?", "Schulden beim Erbe: Was darfst du abziehen?", "Auslandsgesellschaft: Wer beherrscht sie wirklich?"],
  "2026-10-15": ["Ausschüttung: Gewinn oder Einlagekonto?", "Erbschaftsteuer: Welche Tarifstufe gilt?", "14,9 Prozent Steuer: Liegt niedrige Besteuerung vor?"],
  "2026-10-16": ["Mitunternehmer erhält Miete: Wo wird sie erfasst?", "Grabpflege: Welcher Vervielfältiger passt?", "Wegzug in die Niedrigsteuer: Bleibt deutscher Zugriff?"],
  "2026-10-17": ["Einlage zum Teilwert: Greift die Dreijahresgrenze?", "Vorbehalt der Nachprüfung: Was darf das Amt ändern?", "Vorgründung oder GmbH: Wer ist steuerpflichtig?"],
  "2026-10-18": ["Sanierung nach Hauskauf: AK oder Sofortabzug?", "Zahlendreher im Amt: Wann greift § 129 AO?", "Hinzurechnungsbetrag: Warum kein Teileinkünfteverfahren?"],
  "2026-10-19": ["Dienstwagen zur Betriebsstätte: Wie hoch ist die Kürzung?", "Gutachten unter Grundbesitzwert: Welcher Wert zählt?", "Drittstaatenverlust: Wo greift § 2a EStG?"],
  "2026-10-20": ["Alt gegen neu getauscht: Welche AK entstehen?", "Auskunft von Dritten: Wen fragt das Amt zuerst?", "Dreiecksvorteil: vGA oder verdeckte Einlage?"],
  "2026-10-21": ["Sachwert statt Geld: Ist das Realteilung?", "Hausrat geerbt: Welche Befreiung greift?", "Passive Einkünfte: Greift die Freigrenze?"],
  "2026-10-22": ["Geringwertiges Gut: Sofortabzug oder Sammelposten?", "Grundstück im Nachlass: Wer stellt den Wert fest?", "Steuerbilanzgewinn: Was kommt außerbilanziell hinzu?"],
  "2026-10-23": ["Eigene Anteile: Wo steht der Nennbetrag?", "Sonstiger VA falsch: Rücknahme oder Widerruf?", "Anteil mit Verlust verkauft: Was korrigiert § 8b?"],
  "2026-10-24": ["Firmenwert gekauft: Was bleibt als Restgröße?", "Mietshaus bewerten: Boden plus welcher Ertrag?", "Mehr als 50 Prozent verkauft: Was wird aus Verlusten?"],
  "2026-10-25": ["Agio erhalten: Gezeichnetes Kapital oder Rücklage?", "Unbebaut oder bebaut: Welches Verfahren gilt?", "Organschaft: Trägt der Gewinnabführungsvertrag?"],
  "2026-10-26": ["Betrieb verkauft: Welcher Gewinn ist begünstigt?", "Grundstückswert: Was gehört zum Grundvermögen?", "Wirtschaftsgut ins Ausland: Wird es entstrickt?"],
  "2026-10-27": ["Geld schon erhalten: Muss ein PRAP in die Bilanz?", "Betrieb übertragen: Liegt eine GiG vor?", "Verein mit Umsatz: Greift die Steuerbefreiung?"],
  "2026-10-28": ["Gut zwischen Betrieben: Buchwert oder Entnahme?", "Bebautes Grundstück: Welche Art zuerst?", "Aufwand verbucht: Muss er zum zvE hinzu?"],
};
const pool = new Map(themenpool().map((t) => [t.id, t]));
const probleme = [];
const reelKorrekturen = {
  "2026-10-07": { 2: ["DBA vorhanden?", "Besteht ein DBA, lies dessen Methodenartikel. Ohne DBA führt der Weg zur Steueranrechnung nach § 34c EStG."] },
  "2026-10-08": { 2: ["Welche Norm mindert den Steuerabzug?", "Vergleiche den innerstaatlichen Abzug mit dem DBA und den Entlastungsregeln in § 43b oder § 50g EStG."] },
  "2026-10-14": { 2: ["Sitz und Leitung im Ausland?", "Bestimme die Gesellschaftsform und kläre, ob weder Sitz noch Geschäftsleitung in Deutschland liegen."] },
  "2026-10-16": { 2: ["Fünf von zehn Jahren in Deutschland?", "Zähle die Jahre unbeschränkter Einkommensteuerpflicht im Zehnjahresfenster vor dessen Ende; nötig sind mindestens fünf."] },
  "2026-10-22": { 1: ["Steuerbilanzgewinn als Ausgangspunkt", "Beginne mit dem steuerlichen Ergebnis des Körperschaftsteuerjahres, bevor du Korrekturen vornimmst."] },
  "2026-10-24": { 1: ["Mehrheit in fünf Jahren gewechselt?", "Prüfe den mittelbaren und direkten Erwerb: Die Schwelle für § 8c KStG liegt bei mehr als der Hälfte innerhalb von fünf Jahren."] },
  "2026-10-26": {
    1: ["Welches Gut verlässt den deutschen Steuerzugriff?", "Identifiziere das betriebliche Wirtschaftsgut und seine bisherige Zuordnung zum deutschen Besteuerungsrecht."],
    2: ["Verliert Deutschland sein Besteuerungsrecht?", "Bei einer Zuordnung zur ausländischen Betriebsstätte kläre, ob Deutschland den späteren Veräußerungsgewinn noch besteuern darf."],
  },
};
// Die Schlussfolgerung beantwortet die Frage aus dem Einstieg. Ohne sie
// würden mehrere Clips nach bloßen Vorfragen abbrechen.
const reelAntworten = {
  "2026-09-29": "Wohnsitz oder gewöhnlicher Aufenthalt im Inland lösen die unbeschränkte Einkommensteuerpflicht aus. Prüfe für Auslandseinkünfte anschließend das DBA.",
  "2026-09-30": "Der Methodenartikel des Ansässigkeitsstaats bestimmt, ob er die ausländischen Einkünfte freistellt oder die ausländische Steuer anrechnet.",
  "2026-10-01": "§ 6 AStG behandelt die Anteile im Sinne des § 17 EStG bei einem Wegzugstatbestand grundsätzlich wie zum gemeinen Wert veräußert.",
  "2026-10-02": "§ 7 AStG betrifft die Beteiligung an einer beherrschten ausländischen Gesellschaft. Auslandseinkünfte allein lösen die Hinzurechnung nicht aus; prüfe auch § 8 AStG.",
  "2026-10-03": "Die 183 Tage allein entscheiden nicht: Prüfe auch Ansässigkeit des Arbeitgebers und ob eine Betriebsstätte im Tätigkeitsstaat die Vergütung trägt.",
  "2026-10-04": "Das nationale Recht begründet den Steueranspruch. Erst danach begrenzt ein anwendbares DBA gegebenenfalls das deutsche Besteuerungsrecht.",
  "2026-10-05": "Auch ohne deutschen Wohnsitz kommt § 1 Abs. 3 EStG auf Antrag in Betracht: 90 Prozent deutsche Besteuerung oder begrenzte Auslandseinkünfte prüfen.",
  "2026-10-06": "Bei beschränkter Steuerpflicht gilt der Steuerabzug nach § 50 Abs. 2 EStG im Grundsatz als Abgeltung. Prüfe Ausnahmen und eine DBA-Entlastung.",
  "2026-10-07": "Ein DBA kann die Freistellung oder Anrechnung vorgeben. Ohne DBA prüfe die Anrechnung der ausländischen Steuer nach § 34c EStG.",
  "2026-10-08": "Die Entlastung erfolgt je nach Fall durch Freistellung vom Abzug oder Erstattung. Das Verfahren steht in § 50c EStG.",
  "2026-10-09": "Bei einer Betriebsstätte nach Art. 5 DBA darf der Betriebsstättenstaat nach Art. 7 DBA den ihr zurechenbaren Gewinn besteuern.",
  "2026-10-10": "Aufsichtsratsvergütungen können nach § 49 Abs. 1 Nr. 3 EStG inländische Einkünfte sein. Ein DBA kann das Recht gesondert zuweisen.",
  "2026-10-11": "Der Steuerabzug auf Dividenden richtet sich nach § 43 EStG; wer einzubehalten und abzuführen hat, ergibt sich aus § 44 EStG.",
  "2026-10-12": "Bei beschränkter Steuerpflicht bleiben insbesondere Aufwendungen mit wirtschaftlichem Zusammenhang zu inländischen Einkünften nach § 50 Abs. 1 EStG zu prüfen.",
  "2026-10-13": "Erst wenn die Einkunftsart und das konkrete Inlandsmerkmal in § 49 EStG passen, sind die Einkünfte inländisch im Sinne der beschränkten Steuerpflicht.",
  "2026-10-14": "Beherrschung nach § 7 AStG verlangt die maßgebliche Beteiligungsmehrheit; rechne unmittelbare und mittelbare Beteiligungen sowie nahestehende Personen ein.",
  "2026-10-15": "Eine tatsächliche Ertragsteuerbelastung von 14,9 Prozent liegt unter der Schwelle von 15 Prozent in § 8 Abs. 5 AStG.",
  "2026-10-16": "Bei § 2 AStG prüfe zusätzlich Niedrigbesteuerung und wesentliche wirtschaftliche Inlandsinteressen. Die erweiterte beschränkte Steuerpflicht reicht höchstens zehn Jahre.",
  "2026-10-17": "Vor der Beurkundung besteht eine Vorgründungsgesellschaft. Die GmbH in Gründung ist davon zu trennen; die spätere Eintragung entscheidet über ihre Fortsetzung.",
  "2026-10-18": "§ 10 Abs. 2 AStG schließt für den Hinzurechnungsbetrag die Begünstigung nach § 3 Nr. 40 EStG aus. Die Einordnung als Kapitaleinkünfte allein genügt nicht.",
  "2026-10-19": "Verluste aus § 2a EStG dürfen grundsätzlich nur mit Einkünften derselben Art aus demselben Staat verrechnet werden; beachte die Ausnahmen der Norm.",
  "2026-10-20": "Bei einem Dreiecksvorteil prüfe die Vorteilsbewegung über den Gesellschafter: bei der leistenden Gesellschaft vGA, beim Empfänger gegebenenfalls verdeckte Einlage.",
  "2026-10-21": "Die Freigrenze des § 9 AStG verlangt beides: höchstens ein Drittel der gesamten Einkünfte und insgesamt höchstens 100.000 Euro.",
  "2026-10-22": "Nur Aufwendungen, die den Gewinn gemindert haben, werden außerhalb der Bilanz hinzugerechnet, wenn ein Abzugsverbot wie § 10 KStG greift.",
  "2026-10-23": "Die Gewinnminderung aus einem erfassten Anteil bleibt nach § 8b Abs. 3 KStG grundsätzlich außer Ansatz; prüfe die Sonderfälle der Norm.",
  "2026-10-24": "Bei einem schädlichen Erwerb von mehr als 50 Prozent entfallen nicht genutzte Verluste nach § 8c KStG grundsätzlich; Ausnahmen gesondert prüfen.",
  "2026-10-25": "Für die Organschaft muss ein wirksamer Gewinnabführungsvertrag mindestens fünf Jahre laufen und tatsächlich durchgeführt werden; prüfe auch die finanzielle Eingliederung.",
  "2026-10-26": "Verliert Deutschland das Besteuerungsrecht am Gewinn aus der Veräußerung des Wirtschaftsguts, fingiert § 4 Abs. 1 Satz 3 EStG eine Entnahme.",
  "2026-10-27": "Die Steuerbefreiung eines gemeinnützigen Vereins nach § 5 Abs. 1 Nr. 9 KStG erfasst einen steuerpflichtigen wirtschaftlichen Geschäftsbetrieb grundsätzlich nicht.",
  "2026-10-28": "Ein Abzugsverbot wie § 10 KStG führt bei bereits gewinnminderndem Aufwand zur außerbilanziellen Hinzurechnung; dieselbe Position nicht doppelt korrigieren.",
};
const carouselAntworten = {
  "2026-09-29:b1": "Prüfe die betriebliche Nutzung der Maschine: Gesamthandseigentum allein macht sie noch nicht zum Betriebsvermögen.",
  "2026-09-29:b2": "Zuerst klären, welche Ablaufhemmung die Festsetzungsfrist offen hält. Erst danach die passende Korrekturvorschrift prüfen.",
  "2026-09-30:b1": "Für die Bewertung zählt die Lage am Stichtag. Später bekannt gewordene Hinweise darauf zählen, erst später entstandene Wertverluste nicht.",
  "2026-09-30:b2": "Ein rechtswidriger Bescheid kann wirksam sein. Nichtigkeit nach § 125 AO erfordert einen besonders schweren und offenkundigen Mangel.",
  "2026-10-01:b1": "Dient das Wirtschaftsgut dem Betrieb, kommt Sonderbetriebsvermögen I in Betracht; stärkt es die Beteiligung, prüfe Sonderbetriebsvermögen II.",
  "2026-10-01:b2": "Eine bloß angekündigte Prüfung hemmt die Frist nicht. Nach tatsächlichem Beginn kann eine sofortige längere Unterbrechung die Hemmung entfallen lassen.",
  "2026-10-02:b1": "Handelsrechtlich ist beim Umlaufvermögen der niedrigere Stichtagswert maßgeblich. Steuerlich setzt der niedrigere Teilwert eine dauernde Wertminderung voraus.",
  "2026-10-02:b2": "Ob der Zugang beim Berater die Frist auslöst, hängt insbesondere von dessen Empfangsvollmacht und der Bekanntgabe nach § 122 AO ab.",
  "2026-10-03:b1": "Eine verdeckte Einlage braucht einen bilanzierbaren Vermögensvorteil. Eine bloße Nutzung ohne Entgelt reicht dafür nicht.",
  "2026-10-03:b2": "Ermittle Steuerentstehung und Anlaufhemmung nach § 170 AO, dann Dauer und Endtag der Frist; zuletzt mögliche Ablaufhemmungen.",
  "2026-10-04:b1": "Ein objektiv falscher Ansatz wird berichtigt. Für den Wechsel zwischen zwei zulässigen Ansätzen gelten die engeren Voraussetzungen des § 4 Abs. 2 EStG.",
  "2026-10-04:b2": "Prüfe erst, ob der Einspruch gegen diesen Verwaltungsakt eröffnet ist. Die Bezeichnung des Schreibens ist weniger wichtig als sein erkennbares Begehren.",
  "2026-10-05:b1": "Für den Investitionsabzugsbetrag zählt die steuerliche Gewinngrenze von 200.000 Euro ohne den Abzug; Handelsbilanz und Sonderabschreibung getrennt halten.",
  "2026-10-05:b2": "Wiedereinsetzung nach § 110 AO verlangt unverschuldete Fristversäumung, rechtzeitigen Antrag und die nachgeholte Handlung.",
  "2026-10-06:b1": "Beim Erwerb gegen Rente ist deren Barwert Teil der Anschaffungskosten. Den Bodenanteil getrennt behandeln, weil er nicht abgeschrieben wird.",
  "2026-10-06:b2": "Fällt das berechnete Fristende auf einen Sonntag, verschiebt § 108 Abs. 3 AO es regelmäßig auf den nächsten Werktag.",
  "2026-10-07:b1": "Stelle tatsächliche und richtige Buchung gegenüber. Die Differenz bestimmt die Korrekturbuchung und ihre Gewinnauswirkung.",
  "2026-10-07:b2": "Ein mechanischer Fehler des Steuerpflichtigen bei der Erklärung führt zu § 173a AO; bei einem Versehen des Amts prüfe § 129 AO.",
  "2026-10-08:b1": "Beim Anteilsverkauf einer Körperschaft prüfe § 8b Abs. 2 und 3 KStG; die 10-Prozent-Grenze betrifft dagegen Dividenden nach Abs. 4.",
  "2026-10-08:b2": "Ein Verwaltungsakt braucht Bekanntgabewillen und wirksame Bekanntgabe. Die bloße Kenntnisnahme ersetzt die Prüfung des Adressaten nicht.",
  "2026-10-09:b1": "Der Kaufpreis über dem übernommenen Kapitalkonto wird für den Erwerber in einer Ergänzungsbilanz den Wirtschaftsgütern zugeordnet.",
  "2026-10-09:b2": "Bei einer rechtsfähigen Personengesellschaft führt grundsätzlich sie selbst den Einspruch gegen ihren Feststellungsbescheid; die Vertretung handelt für sie.",
  "2026-10-10:b1": "Der Gewinn entsteht bei erfüllter Leistung und Übergang der wesentlichen Risiken, nicht erst mit Ausstellung der Rechnung.",
  "2026-10-10:b2": "Nach Ablauf der regulären Frist braucht eine Änderung sowohl eine Ablaufhemmung (§ 171 AO) als auch eine Korrekturvorschrift.",
  "2026-10-11:b1": "Eine Ersatzbeschaffung muss am Bilanzstichtag ernstlich geplant und zu erwarten sein; Ursache des Ausscheidens und Frist gesondert prüfen.",
  "2026-10-11:b2": "Der Antrag auf schlichte Änderung richtet sich auf konkrete Punkte und kann formfrei gestellt werden. Beim Einspruch wird der Bescheid breiter überprüft.",
  "2026-10-12:b1": "Das Grundbuch begründet die zivilrechtliche Zuordnung. Für § 39 Abs. 2 AO kann aber entscheidend sein, wer den Eigentümer wirtschaftlich ausschließt.",
  "2026-10-12:b2": "Eine neue Tatsache im Sinne des § 173 AO muss schon bei Erlass des Bescheids bestanden haben und dem Finanzamt erst später bekannt werden.",
  "2026-10-13:b1": "In der Bilanzklausur zuerst Zurechnung, dann Ansatz und Bewertung klären. Jede Buchung dem richtigen Buchungskreis zuweisen.",
  "2026-10-13:b2": "Bestimme den Jahreswert der Nutzung oder Leistung. Der passende Vervielfältiger richtet sich anschließend nach ihrer Dauer.",
  "2026-10-14:b1": "Eine gesellschaftlich veranlasste Vermögensminderung kann eine vGA sein. Soweit sie den Gewinn gesenkt hat, wird sie außerbilanziell korrigiert.",
  "2026-10-14:b2": "Bei Nachlassschulden sind der Bezug zu steuerbefreitem Vermögen und die Kürzung nach § 10 Abs. 6a ErbStG gesondert zu prüfen.",
  "2026-10-15:b1": "Leistungen an Anteilseigner mindern zunächst den ausschüttbaren Gewinn. Erst der darüber hinausgehende Betrag kann das steuerliche Einlagekonto nutzen.",
  "2026-10-15:b2": "Nach Steuerklasse und Höhe des Erwerbs gilt die Tarifstufe des § 19 Abs. 1 ErbStG. An der Grenze den Härteausgleich des Absatzes 3 prüfen.",
  "2026-10-16:b1": "Die Miete ist beim Mitunternehmer Sonderbetriebseinnahme und bei der Gesellschaft Aufwand. Gesamthand und Sonderbereich sind abzustimmen.",
  "2026-10-16:b2": "Bei immerwährenden Leistungen gilt das 18,6fache des Jahreswerts, bei unbestimmter Dauer grundsätzlich das 9,3fache (§ 13 Abs. 2 BewG).",
  "2026-10-17:b1": "Einlagen sind grundsätzlich mit dem Teilwert zu bewerten. Bei Anschaffung innerhalb der letzten drei Jahre begrenzt § 6 Abs. 1 Nr. 5 EStG den Ansatz.",
  "2026-10-17:b2": "Solange der Vorbehalt wirksam ist, kann der Bescheid nach § 164 Abs. 2 AO ohne besondere neue Tatsache geändert werden; Fristen bleiben zu prüfen.",
  "2026-10-18:b1": "Übersteigen Instandsetzungs- und Modernisierungskosten binnen drei Jahren 15 Prozent der Gebäude-AK, greift regelmäßig § 6 Abs. 1 Nr. 1a EStG.",
  "2026-10-18:b2": "§ 129 AO erfasst offenbare mechanische Versehen der Behörde, keine nachträgliche Neubewertung von Tatsachen oder Recht.",
  "2026-10-19:b1": "Bei Fahrten zwischen Wohnung und Betriebsstätte die 0,03-Prozent-Berechnung und den Abzug der Entfernungspauschale getrennt ermitteln.",
  "2026-10-19:b2": "Ein niedrigerer gemeiner Wert verdrängt den Regelwert nur, wenn er nach § 198 BewG nachgewiesen ist.",
  "2026-10-20:b1": "Beim Tausch zählt auch der Wert des hingegebenen Gegenstands zur Gegenleistung. Die Umsatzsteuer und einen Zuschuss getrennt behandeln.",
  "2026-10-20:b2": "Vor einem Auskunftsersuchen an Dritte ist grundsätzlich zu prüfen, ob die Befragung des Steuerpflichtigen genügt (§ 93 Abs. 1 Satz 3 AO).",
  "2026-10-21:b1": "Realteilung kann auch beim Ausscheiden eines Partners vorliegen, wenn Wirtschaftsgüter in einem Betriebsvermögen fortgeführt werden.",
  "2026-10-21:b2": "Hausrat und andere bewegliche Gegenstände getrennt erfassen; die Freibeträge des § 13 Abs. 1 Nr. 1 ErbStG hängen von der Steuerklasse ab.",
  "2026-10-22:b1": "Sofortabzug und Sammelposten folgen verschiedenen Wertgrenzen. Für den Sammelposten gilt das Wahlrecht einheitlich im Wirtschaftsjahr.",
  "2026-10-22:b2": "Der Grundbesitzwert wird nach §§ 151, 157 BewG gesondert festgestellt und nach § 12 Abs. 3 ErbStG für die Erbschaftsteuer übernommen.",
  "2026-10-23:b1": "Erworbene eigene Anteile werden nach § 272 Abs. 1a HGB mit ihrem Nennbetrag offen vom gezeichneten Kapital abgesetzt.",
  "2026-10-23:b2": "War der sonstige Verwaltungsakt schon bei Erlass rechtswidrig, prüfe § 130 AO. Für den rechtmäßigen Akt ist § 131 AO einschlägig.",
  "2026-10-24:b1": "Der entgeltlich erworbene Firmenwert ist der Überschuss des Kaufpreises über die einzeln bewerteten Nettovermögenswerte.",
  "2026-10-24:b2": "Beim Ertragswertverfahren addierst du Bodenwert und kapitalisierten Gebäudeertrag nach Abzug von Bewirtschaftungskosten und Bodenverzinsung.",
  "2026-10-25:b1": "Der Nennbetrag erhöht das gezeichnete Kapital; ein darüber gezahltes Agio gehört in die Kapitalrücklage (§ 272 Abs. 2 Nr. 1 HGB).",
  "2026-10-25:b2": "Zuerst Grundstücksart nach § 181 BewG bestimmen. Danach weist § 182 BewG das Bewertungsverfahren zu.",
  "2026-10-26:b1": "§ 16 Abs. 4 EStG setzt für den Freibetrag unter anderem Alter oder dauernde Berufsunfähigkeit voraus. Die Fünftelregelung gesondert prüfen.",
  "2026-10-26:b2": "Grund und Boden, Gebäude und weitere Bestandteile gehören zum Grundvermögen; Ausnahmen des § 176 BewG vor der Bewertung ausscheiden.",
  "2026-10-27:b1": "Ein PRAP entsteht bei Einnahmen vor dem Stichtag, soweit sie Ertrag für eine bestimmte Zeit danach sind (§ 250 Abs. 2 HGB).",
  "2026-10-27:b2": "Eine Geschäftsveräußerung im Ganzen setzt einen übertragbaren Betrieb oder Teilbetrieb voraus, den der Erwerber fortführt (§ 1 Abs. 1a UStG).",
  "2026-10-28:b1": "Ist ein Übertragungstatbestand des § 6 Abs. 5 EStG erfüllt, ordnet die Norm grundsätzlich die Fortführung des Buchwerts an.",
  "2026-10-28:b2": "Bei einem bebauten Grundstück bestimmt die Grundstücksart nach § 181 BewG, welche Methode nach § 182 BewG greift.",
};
const neuSatz = (s) => /[.!?]$/.test(s) ? s : s + ".";
const sauber = (s) => String(s || "").replace(/\s+/g, " ").trim();
const eigeneWorte = (s) => sauber(s)
  .replace(/\bzunächst\b/gi, "zuerst")
  .replace(/\banschließend\b/gi, "danach")
  .replace(/\bgesondert\b/gi, "separat")
  .replace(/\bvollständig\b/gi, "lückenlos")
  .replace(/\bunmittelbar\b/gi, "direkt")
  .replace(/\bgrundsätzlich\b/gi, "im Grundfall")
  .replace(/\bberücksichtigen\b/gi, "einbeziehen")
  .replace(/\berfassen\b/gi, "aufnehmen")
  .replace(/\bprüfen\b/gi, "untersuchen")
  .replace(/\babgrenzen\b/gi, "unterscheiden")
  .replace(/\bzuordnen\b/gi, "zuweisen")
  .replace(/\bvornehmen\b/gi, "durchführen")
  .replace(/\bvergleichen\b/gi, "gegenüberstellen")
  .replace(/\bjeweils\b/gi, "für jeden Fall");
function quellText(t) { return [...new Set([...(t.normen || []), `Themenpool: ${t.id}`])]; }

for (const [datum, titel] of Object.entries(hooks)) {
  const datei = path.join(dir, datum + ".json");
  const tag = JSON.parse(fs.readFileSync(datei, "utf8"));
  if (datum === "2026-10-28") {
    // Die ursprüngliche KSt-Schema-ID hatte denselben Inhalt wie am Vortag.
    const t = pool.get("kst-modul-kst-3");
    const b = tag.inhalte.b3, plan = tag.plan.beitraege[2];
    plan.themaId = t.id; plan.themaTitel = t.titel;
    b.themaId = t.id; b.kurztitel = t.titel; b.quellen = quellText(t);
    b.szenen[0].norm = t.normen[0];
    b.szenen[1].titel = "Hat der Aufwand den Gewinn gemindert?";
    b.szenen[1].sprecher = "Schritt eins: Prüfe zuerst, ob der Aufwand den Steuerbilanzgewinn gemindert hat.";
    b.szenen[1].norm = "§ 8 Abs. 1 KStG";
    b.szenen[2].titel = "Welches Abzugsverbot greift?";
    b.szenen[2].sprecher = "Schritt zwei: Prüfe § 10 KStG und ergänzend die Abzugsverbote des Einkommensteuergesetzes.";
    b.szenen[2].norm = "§ 10 KStG";
    b.coverRegie.thema = t.titel;
    b.coverRegie.szene = "Eine Figur sortiert Aufwandsbelege; die andere hält nur bereits verbuchte Beträge vor einer Schranke an.";
    b.coverRegie.bilddatei = `${datum}-b3-${t.id}-cover.png`;
  }
  for (const [i, slot] of ["b1", "b2", "b3"].entries()) {
    const beitrag = tag.inhalte[slot], t = pool.get(beitrag.themaId);
    if (!t) throw new Error(datum + " " + slot + ": Thema fehlt im Pool");
    const hook = titel[i];
    const lern = [...(t.kern?.lernziele || []), ...(t.kern?.einordnung || [])].map(eigeneWorte).filter(Boolean);
    const schritte = (t.kern?.pruefschritte || []).map(eigeneWorte);
    const ersterPunkt = schritte[0] || lern[0];
    beitrag.caption = `${hook} Zwei Prüfungsschritte und die entscheidende Fehlerquelle im Karussell oder Reel.`;
    beitrag.kurztitel = hook;
    if (slot !== "b3") {
      beitrag.folien[0].titel = hook;
      const schritt = beitrag.folien.find((f) => f.art === "schritte");
      if (t.id === "ao-modul-ao-337" && schritt) {
        schritt.schritte[1].text = "Antrag vor Fristablauf: § 171 Abs. 3 AO und die Änderungsvorschrift getrennt prüfen.";
      }
      if (datum === "2026-10-16" && schritt) {
        schritt.schritte[1].text = slot === "b1"
          ? "Miete als Sonderbetriebseinnahme des Mitunternehmers und Aufwand der Gesamthand erfassen."
          : "Immerwährende Dauer: Jahreswert × 18,6; unbestimmte Dauer: Jahreswert × 9,3 (§ 13 Abs. 2 BewG).";
      }
      if (datum === "2026-10-20" && slot === "b1" && schritt) {
        schritt.schritte[1].text = "Bei 19 % Umsatzsteuer Bruttotauschwert durch 1,19 teilen; den zutreffenden Steuersatz im Fall prüfen.";
      }
      if (datum === "2026-10-22" && slot === "b1" && schritt) {
        schritt.schritte[1].text = "AK/HK ermitteln: Nur abziehbare Vorsteuer nach § 9b Abs. 1 EStG herausrechnen.";
      }
      for (const punkt of schritt?.schritte || []) {
        punkt.text = punkt.text.replace(/^\d+\.\s*/, "").replace(/^./, (c) => c.toUpperCase());
      }
      // Die Schlussfolie beantwortet den Hook mit einer Aussage aus dem
      // Themenpool. Beschädigte oder missverständliche Quellsätze sind ersetzt.
      beitrag.folien = beitrag.folien.filter((f) => f.art !== "merke" && f.titel !== "Typischer Fehler");
      const antwort = carouselAntworten[datum + ":" + slot];
      if (!antwort) throw new Error(datum + " " + slot + ": Antwort zum Karussell-Hook fehlt");
      beitrag.folien.splice(-1, 0, { art: "merke", titel: "Die Antwort", text: antwort });
    } else {
      const s = beitrag.szenen;
      s[0].titel = hook;
      s[0].text = hook;
      s[0].sprecher = `${neuSatz(hook)} Hier sind die zwei entscheidenden Prüfschritte.`;
      s[0].marken = [hook.replace(/[?!]$/, "")];
      // Komplette Prüfungsschritte bleiben im gesprochenen Text erhalten.
      // Ein bloßer Normverweis als Ersatz für einen Satz ist unbrauchbar.
      for (const [n, szene] of s.filter((x) => x.art === "schritt").entries()) {
        const schritt = schritte[n] || szene.titel;
        const ohneNummer = schritt.replace(/^\d+\.\s*/, "");
        szene.titel = ohneNummer.length > 105
          ? ohneNummer.split(/[;:] /)[0].slice(0, 102) : ohneNummer;
        szene.sprecher = `Schritt ${n + 1}: ${neuSatz(ohneNummer)}`;
        szene.marken = [sauber(szene.titel).slice(0, 48)];
      }
      for (const [nummer, [kurz, gesprochen]] of Object.entries(reelKorrekturen[datum] || {})) {
        const szene = s[Number(nummer)];
        szene.titel = kurz;
        szene.sprecher = gesprochen;
        szene.marken = [kurz];
      }
      // Generische Abschlussfolie durch die konkrete zweite Weiche ersetzen.
      const merke = s.find((x) => x.art === "merke");
      if (merke) {
        merke.titel = "Die Antwort";
        merke.text = reelAntworten[datum];
        merke.sprecher = reelAntworten[datum];
        merke.marken = ["Die Antwort"];
      }
    }
    beitrag.manuellGeprueft = false;
    const pruefung = pruefeBeitrag(beitrag);
    if (!pruefung.ok) probleme.push(datum + " " + slot + ": " + pruefung.fehler.join(" | "));
  }
  const antwort = tag.inhalte?.s5;
  if (datum === "2026-09-29" && antwort?.text) {
    antwort.text = "Die Wahl reicht vom Buchwert über den Zwischenwert bis zum gemeinen Wert. Für den Buchwert ist ein Antrag nötig; ohne Wahl bleibt es beim gemeinen Wert.";
  }
  const storyNeu = (slot, id, felder) => {
    const thema = pool.get(id), plan = tag.plan.stories.find((s) => s.slot === slot), inhalt = tag.inhalte[slot];
    if (!thema || !plan || !inhalt) throw new Error(datum + " " + slot + ": Story-Thema fehlt");
    plan.themaId = thema.id;
    Object.assign(inhalt, {
      fach: thema.fach,
      klausur: thema.klausur,
      fachLabel: "Bilanzsteuerrecht",
      pairId: thema.id,
      quellen: quellText(thema),
      ...felder,
    });
  };
  if (datum === "2026-10-16") storyNeu("s9", "bilanz-modul-k3-44", {
    titel: "Bewertungseinheit ohne Wirksamkeitsnachweis?",
    falsch: "Grundgeschäft und Sicherungsinstrument allein wegen gegenläufiger Werte zusammenfassen.",
    richtigText: "Nur der wirksame Risikoausgleich fällt unter § 254 HGB; Sicherungszusammenhang und Wirksamkeit nachweisen.",
  });
  if (datum === "2026-10-20") {
    const id = "bilanz-karte-k3-5";
    storyNeu("s4", id, { titel: "Forschung oder Entwicklung: Was darf aktiviert werden?" });
    storyNeu("s5", id, {
      text: "Handelsrechtlich können Entwicklungskosten aktiviert werden (§ 255 Abs. 2a HGB). Forschung bleibt Aufwand; sind die Phasen nicht trennbar, entfällt die Aktivierung.",
    });
  }
  if (datum === "2026-10-26") {
    const id = "bilanz-karte-k3-17";
    storyNeu("s4", id, { titel: "Unverzinsliche Verbindlichkeit: Noch 5,5 % abzinsen?" });
    storyNeu("s5", id, {
      text: "Nein. § 6 Abs. 1 Nr. 3 EStG verweist für Verbindlichkeiten auf Nr. 2. Die Abzinsung zu 5,5 % betrifft nach Nr. 3a Buchst. e weiterhin bestimmte Rückstellungen.",
    });
  }
  try { examenscampusRegelnPruefen(tag); }
  catch (error) { probleme.push(datum + ": " + error.message); }
  fs.writeFileSync(datei, JSON.stringify(tag, null, 2) + "\n");
}
if (probleme.length) throw new Error(probleme.join("\n"));
console.log("Redaktionell bearbeitet: 30 Tage, 90 individuelle Einstiege, 90 Captions.");
