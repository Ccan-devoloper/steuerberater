/*
 * Thomas Meurer, Umsatzsteuer-Kurzskript, Mai 2026.
 *
 * Die Quelle umfasst 124 PDF-Seiten. PDF-S. 1–6 enthalten Titel,
 * Inhaltsverzeichnis und Freizeichnung; die fachlichen Seiten 7–124 werden
 * lückenlos in die unten stehenden Blöcke zerlegt. Die Texte sind bewusst
 * redaktionelle Zusammenfassungen – keine Reproduktion des Skripts.
 */

export const MEURER_KURZSKRIPT_META = {
  titel: "Umsatzsteuer Kurzskript",
  autor: "Thomas Meurer",
  stand: "Mai 2026",
  pdfSeiten: 124,
  redaktion: [1, 6],
};

const b = (id, pdfVon, pdfBis, skriptVon, skriptBis, zielId, teil, titel, normen, kernaussagen, klausur, visual = null) => ({
  id, pdf: [pdfVon, pdfBis], skript: [skriptVon, skriptBis], zielId, teil, titel, normen, kernaussagen, klausur, visual,
});

/* Jede fachliche PDF-Seite 7–124 gehört genau einem Block. */
export const meurerKurzskriptBloecke = [
  b("A-01", 7, 9, 6, 8, 243, "Teil A", "System der Umsatzsteuer und Klausur-Prüfungsgang",
    ["§ 1 Abs. 1 UStG", "§§ 4–9 UStG", "§ 10 UStG", "§ 12 UStG", "§§ 13, 13a, 13b UStG", "§ 15 UStG"],
    [
      "Das Allphasen-Netto-System erhebt Umsatzsteuer auf jeder Stufe, neutralisiert sie beim Unternehmer aber grundsätzlich durch den Vorsteuerabzug; wirtschaftlich belastet werden soll der Endverbraucher.",
      "Für die Klausur wird zunächst jeder Ausgangsumsatz vollständig geprüft: Steuerbarkeit, Steuerbefreiung, Steuersatz, Bemessungsgrundlage, Steuerentstehung und Steuerschuldner.",
      "Erst anschließend folgt die Eingangsseite mit dem Vorsteuerabzug; dessen Berechtigung hängt von der Verwendung der Eingangsleistung für die Ausgangsumsätze ab.",
      "§ 1 Abs. 1 UStG enthält eine abschließende Aufzählung der steuerbaren Umsatzarten.",
    ],
    ["Ausgangsumsätze je Textziffer zuerst abschließen; Vorsteuer niemals vor der Verwendung des Eingangsumsatzes prüfen."],
    "Schaubilder: Allphasen-Netto-Kette sowie Gegenüberstellung Ausgangsumsatz/Eingangsumsatz im Klausurschema."),

  b("B-01", 10, 13, 9, 12, 244, "Teil B", "Unternehmer, Unternehmenseinheit und Handeln im Rahmen des Unternehmens",
    ["§ 2 UStG", "§ 2 Abs. 2 Nr. 1 UStG", "§ 1 Abs. 1 Nr. 1 UStG"],
    [
      "Selbständigkeit wird anhand von Unternehmerinitiative und Unternehmerrisiko gegenüber Weisungsgebundenheit abgegrenzt; Arbeitnehmer sind regelmäßig nicht selbständig.",
      "Das Skript behandelt außerdem jPöR sowie Beginn und Ende der Unternehmereigenschaft als eigenständige Abgrenzungen.",
      "Umsatzsteuerlich besteht eine Unternehmenseinheit: Vorgänge zwischen eigenen Unternehmensteilen sind keine steuerbaren Außenumsätze.",
      "Private Tätigkeiten, bloßes Halten von Beteiligungen und andere nichtunternehmerische Vorgänge liegen außerhalb des Unternehmensrahmens und vermitteln spiegelbildlich grundsätzlich keinen Vorsteuerabzug.",
    ],
    ["Bei natürlichen Personen mit mehreren Tätigkeiten zuerst die Unternehmenseinheit bilden und anschließend jeden konkreten Umsatz dem unternehmerischen oder privaten Bereich zuordnen."],
    "Schaubilder: jPöR-Zeitachse, Beginn/Ende der Unternehmereigenschaft und Unternehmenseinheit mit Innenumsätzen."),

  b("B-02", 14, 18, 13, 17, 245, "Teil B", "Leistung, Lieferung, Verfügungsmacht und Werkleistung/Werklieferung",
    ["§ 3 Abs. 1 UStG", "§ 3 Abs. 4 UStG", "§ 3 Abs. 9 UStG", "§ 39 AO"],
    [
      "Eine Leistung setzt eine willentliche Zuwendung eines wirtschaftlichen Vorteils an einen anderen voraus; gesetzlich erzwungene rechtmäßige Vorgänge können Leistungen sein, rechtswidrige Wegnahmen dagegen nicht.",
      "Lieferung bedeutet Verschaffung der Verfügungsmacht an einem Gegenstand; zivilrechtliches und wirtschaftliches Eigentum sowie Ersatztatbestände sind getrennt zu würdigen.",
      "Bei beweglichen Sachen behandelt das Skript insbesondere Besitzkonstitut, Abtretung des Herausgabeanspruchs und Kauf auf Probe als mögliche Zeitpunkte der Verfügungsmacht.",
      "Bei Arbeiten an Gegenständen entscheidet die Materialstellung über Werklieferung und Werkleistung; bei Arbeiten vor Ort ist zusätzlich die Abgrenzung zur Montagelieferung wichtig.",
    ],
    ["Nicht vom Kaufvertrag auf den Lieferzeitpunkt schließen: Verfügungsmacht und Ort sind eigenständig festzustellen."],
    "Schaubilder: Lieferung/VdV, § 39 AO, Ersatztatbestände sowie Entscheidungsbaum Werklieferung–Werkleistung–Dienstleistung."),

  b("B-03", 19, 23, 18, 22, 178, "Teil B", "Reihengeschäft: Voraussetzungen, bewegte Lieferung und Ortsfolgen",
    ["§ 3 Abs. 6a UStG", "§ 3 Abs. 6 UStG", "§ 3 Abs. 7 UStG"],
    [
      "Ein Reihengeschäft verlangt mehrere Unternehmer, Umsatzgeschäfte über denselben Gegenstand und eine unmittelbare Warenbewegung vom ersten Unternehmer zum letzten Abnehmer.",
      "Ein gebrochener Transport oder der Einbau eines anderen Gegenstands beim letzten Abnehmer kann die Reihengeschäftsidentität unterbrechen.",
      "Nur eine Lieferung ist die bewegte Lieferung; die Zuordnung richtet sich danach, wer transportiert und – beim Zwischenhändler – unter welcher Stellung bzw. USt-IdNr. er auftritt.",
      "Die bewegte Lieferung liegt am Transportbeginn; ruhende Lieferungen werden je nach Lage vor oder nach der bewegten Lieferung am Transportbeginn oder -ende verortet.",
    ],
    ["Immer zuerst Warenbewegung und bewegte Lieferung festlegen; erst danach Steuerbarkeit oder Steuerbefreiung der einzelnen Lieferungen prüfen."],
    "Mehrseitige G–E–K-Schaubilder für ersten Unternehmer, letzten Abnehmer und Zwischenhändler einschließlich Grundsatz/Ausnahme."),

  b("B-04", 24, 25, 23, 24, 245, "Teil B", "Sonstige Leistung, Leasing, Haupt-/Nebenleistung und Leistungszeitpunkt",
    ["§ 3 Abs. 9 UStG", "§ 13 Abs. 1 Nr. 1 UStG"],
    [
      "Sonstige Leistungen umfassen Handeln, Dulden und Unterlassen, soweit keine Lieferung vorliegt.",
      "Beim Leasing folgt die Einordnung nicht automatisch ertragsteuerlichen Grundsätzen; entscheidend sind Vertragsklauseln zum Eigentumsübergang und die wirtschaftliche Rationalität einer Kaufoption.",
      "Bei zusammengesetzten Leistungen ist aus Sicht des Durchschnittsverbrauchers zu prüfen, ob eine einheitliche Leistung oder mehrere selbständige Leistungen vorliegen.",
      "Nebenleistungen dienen keinem eigenständigen Zweck; das Skript weist zugleich darauf hin, dass besondere Aufteilungsgebote – etwa beim Steuersatz von Beherbergung/Verpflegung – dennoch möglich sind.",
      "Sonstige Leistungen werden grundsätzlich mit Vollendung ausgeführt; echte Teilleistungen erfordern wirtschaftliche Teilbarkeit und gesondertes Entgelt.",
    ],
    ["Einheitlichkeit der Leistung, Leistungsort und Steuersatz sind drei getrennte Fragen; ein Aufteilungsgebot beim Steuersatz beseitigt nicht automatisch die Einheitlichkeit für andere Prüfungspunkte."],
    "Schaubilder zu sonstiger Leistung, Leistungsabgrenzung und Zeitpunkt/Teilleistung."),

  b("B-05", 26, 33, 25, 32, 246, "Teil B", "Ort sonstiger Leistungen: B2B/B2C, Ausnahmekataloge und Sonderregeln",
    ["§ 3a Abs. 1–8 UStG", "§ 3b UStG", "§ 3e UStG"],
    [
      "Grundregel B2B: Empfängerort; Grundregel B2C: Sitz des leistenden Unternehmers. Leistungen eines Unternehmers zugleich für unternehmerischen und privaten Bereich werden nach der dargestellten Grundregel insgesamt dem B2B-Regime zugeordnet.",
      "Der erste Ausnahmekatalog verdrängt beide Grundregeln und umfasst insbesondere Grundstücksleistungen, kurzfristige Vermietung von Beförderungsmitteln, Eintrittsberechtigungen, Restaurations- und Personenbeförderungsleistungen.",
      "Der zweite Ausnahmekatalog betrifft nur Leistungen an Nichtunternehmer, z. B. Arbeiten an beweglichen Gegenständen, Vermittlung, Katalogleistungen sowie bestimmte Güterbeförderungen.",
      "Für Telekommunikation, Rundfunk/Fernsehen und elektronische Leistungen sowie für Auswertungs-/Nutzungsfälle enthält das Skript besondere Regeln.",
      "Online-Veranstaltungen werden im Skript für den Rechtsstand ab 2025 ausdrücklich am Sitz/Wohnsitz des Empfängers verortet.",
    ],
    ["Prüfreihenfolge: Empfängereigenschaft → allgemeine Ausnahmen → nur bei B2C die besonderen B2C-Ausnahmen → erst dann Grundregel."],
    "Acht Seiten Entscheidungsbäume und Beispielschaubilder zu Grundstück, Fahrzeugvermietung, Veranstaltungen, Restaurant, Beförderung, Katalog- und Telekommunikationsleistungen."),

  b("B-06", 34, 35, 33, 34, 247, "Teil B", "Inland, Entgelt, Leistungsaustausch und Schadensersatz",
    ["§ 1 Abs. 2 UStG", "§ 1 Abs. 1 Nr. 1 UStG"],
    [
      "Das Skript trennt Inland, übriges Gemeinschaftsgebiet und Drittlandsgebiet einschließlich der gesetzlich ausgenommenen Gebiete.",
      "Gegen Entgelt verlangt eine innere Verknüpfung zwischen Leistung und Gegenleistung.",
      "Schadensersatz ist vom entgeltlichen Leistungsaustausch abzugrenzen; entscheidend ist, ob der Zahlung eine konkrete Leistung gegenübersteht.",
      "Transportversicherungen werden als eigener Abgrenzungsfall behandelt und dürfen nicht automatisch als bloßer Schadensersatz eingeordnet werden.",
    ],
    ["Bei ungewöhnlichen Zahlungen nie mit der Bezeichnung des Sachverhalts arbeiten, sondern Leistung und Gegenleistung wirtschaftlich gegenüberstellen."],
    "Übersichten zu Inland/Ausland und Leistungsaustausch."),

  b("B-07", 36, 38, 35, 37, 248, "Teil B", "Steuerbefreiungen: System, Heilbehandlung, Banken und Versicherung",
    ["§ 4 UStG", "§ 4 Nr. 8 UStG", "§ 4 Nr. 10, 11 UStG", "§ 4 Nr. 14 UStG", "§ 9 UStG", "§ 15 Abs. 2, 3 UStG"],
    [
      "Das Skript unterscheidet echte Steuerbefreiungen mit erhaltenem Vorsteuerabzug von unechten Befreiungen, die grundsätzlich zum Vorsteuerausschluss führen.",
      "Als klausurtypische unechte Befreiungen werden Heilbehandlungs-/Krankenhausleistungen, Banken- und Versicherungsumsätze systematisiert.",
      "Bei bestimmten Bankenumsätzen ist zusätzlich die Option nach § 9 zu prüfen; Befreiung und Option sind nicht zu vermischen.",
    ],
    ["Steuerbefreiung immer mit der Vorsteuerfolge mitdenken: Ausgangsseite und Eingangsseite werden später über § 15 Abs. 2/3 wieder verknüpft."],
    "Systemübersichten zu echten/unechten Befreiungen und ausgewählten §-4-Tatbeständen."),

  b("B-08", 39, 41, 38, 40, 160, "Teil B", "Grundstücksumsatz, Vermietung und Option",
    ["§ 4 Nr. 9 Buchst. a UStG", "§ 4 Nr. 12 UStG", "§ 9 UStG"],
    [
      "Grundstücksveräußerungen, die unter das Grunderwerbsteuergesetz fallen, werden von der Vermietungsbefreiung getrennt geprüft.",
      "Die Option bei Grundstücksveräußerung und die Option bei Vermietungsumsätzen haben unterschiedliche Voraussetzungen und Besonderheiten.",
      "Das Skript berücksichtigt die Rechtsprechung zur Mitvermietung dauerhaft eingebauter Vorrichtungen: Ist sie Nebenleistung zu einer einheitlichen steuerfreien Gebäudevermietung, kann die Gesamtleistung steuerfrei sein.",
    ],
    ["Erst den Befreiungstatbestand bestimmen, dann die genau dazugehörige Optionsnorm prüfen; Grundstücksverkauf und Vermietung nicht in einen gemeinsamen §-9-Prüfschritt ziehen."],
    "Prüfschemata zu Grundstücksverkauf, Vermietung und Option."),

  b("B-09", 42, 42, 41, 41, 161, "Teil B", "Steuersatz nach § 12 UStG",
    ["§ 12 UStG", "Anlage 2 UStG"],
    [
      "Das Skript ordnet den Regelsteuersatz, den ermäßigten Steuersatz und den Nullsteuersatz als eigenständigen Prüfungsschritt nach der Steuerbefreiung ein.",
      "Begünstigungen werden tatbestandsbezogen geprüft; ohne Begünstigung verbleibt es beim Regelsteuersatz.",
    ],
    ["Steuersatz positiv begründen: konkrete Begünstigungsnorm nennen, sonst Regelsteuersatz."],
    "Übersicht zu 19 %, 7 % und 0 % einschließlich typischer Begünstigungsgruppen."),

  b("B-10", 43, 43, 42, 42, 162, "Teil B", "Bemessungsgrundlage, Tausch und tauschähnlicher Umsatz",
    ["§ 10 Abs. 1, 2 UStG", "§ 3 Abs. 12 UStG"],
    [
      "Bemessungsgrundlage ist grundsätzlich das Entgelt ohne Umsatzsteuer.",
      "Bei Tausch und tauschähnlichem Umsatz ist die Gegenleistung nicht auf Geld beschränkt; der Wert der jeweils empfangenen Leistung ist einzubeziehen.",
    ],
    ["Bei Baraufgabe oder Inzahlungnahme zunächst die gesamte Gegenleistung bestimmen; erst danach Umsatzsteuer herausrechnen."],
    "Tausch-/Gegenleistungsdiagramme."),

  b("B-11", 44, 44, 43, 43, 213, "Teil B", "Mindestbemessungsgrundlage",
    ["§ 10 Abs. 5 UStG", "§ 10 Abs. 4 UStG"],
    [
      "Die Mindestbemessungsgrundlage ist eine Kontrollrechnung für bestimmte Leistungen an nahestehende Personen bzw. verbundene Bereiche.",
      "Das vereinbarte Entgelt wird mit den gesetzlich vorgegebenen Mindestwerten verglichen; die Sonderregel darf nicht ohne Tatbestandsprüfung angewandt werden.",
    ],
    ["§ 10 Abs. 5 erst nach der normalen Entgelt-BMG prüfen und nur bei einschlägiger Beziehung zwischen Leistendem und Empfänger."],
    "Vergleichsschema vereinbartes Entgelt versus Mindest-BMG."),

  b("B-12", 45, 45, 44, 44, 163, "Teil B", "Steuerentstehung bei Lieferungen und sonstigen Leistungen",
    ["§ 13 UStG", "§ 20 UStG"],
    [
      "Bei vereinbarten Entgelten ist grundsätzlich die Leistungsausführung maßgeblich; Anzahlungen und echte Teilleistungen werden gesondert behandelt.",
      "Das Skript weist ausdrücklich darauf hin, dass im Klausurenvorspann die Besteuerungsart zu prüfen ist und ohne Sonderangabe regelmäßig von vereinbarten Entgelten ausgegangen wird.",
    ],
    ["Rechnungsdatum, Leistungszeitpunkt und Zahlungseingang getrennt notieren; erst die Besteuerungsart entscheidet, welcher Zeitpunkt relevant wird."],
    "Zeitachsen für Soll-/Istversteuerung, Teilleistung und Anzahlung."),

  b("B-13", 46, 47, 45, 46, 249, "Teil B", "Gutscheine: Einzweck- und Mehrzweckgutschein",
    ["§ 3 Abs. 13–15 UStG", "§ 13 UStG"],
    [
      "Einzweck- und Mehrzweckgutscheine werden danach unterschieden, ob Ort und geschuldete Umsatzsteuer bereits bei Ausgabe feststehen.",
      "Beim Einzweckgutschein wird die Leistung in der Vertriebskette bereits bei der Übertragung des Gutscheins umsatzsteuerlich vorgezogen.",
      "Beim Mehrzweckgutschein löst die bloße Übertragung grundsätzlich noch nicht die Besteuerung der später bezogenen Leistung aus.",
    ],
    ["Vor jeder Steuerentstehungsprüfung bei Gutscheinen zuerst Gutscheinart bestimmen; anschließend Ausgabe, Weitergabe und Einlösung getrennt verfolgen."],
    "Zwei Vertriebsketten-Schaubilder für Einzweck- und Mehrzweckgutschein."),

  b("B-14", 48, 50, 47, 49, 177, "Teil B", "Steuerschuldner und Reverse Charge",
    ["§ 13a UStG", "§ 13b Abs. 1, 2, 5 UStG", "§ 27 Abs. 19 UStG"],
    [
      "Grundsätzlich schuldet der leistende Unternehmer die Steuer; § 13b verlagert die Steuerschuld für enumerierte Tatbestände auf den Leistungsempfänger.",
      "Bei ausländischen sonstigen Leistungen trennt das Skript § 13b Abs. 1 von Abs. 2 Nr. 1.",
      "Bau- und Gebäudereinigungsleistungen werden mit den besonderen Voraussetzungen an die Tätigkeit des Leistungsempfängers behandelt.",
      "Altfälle der Bauträgerproblematik werden nur als historischer Hinweis über § 27 Abs. 19 eingeordnet.",
    ],
    ["§ 13b nicht als allgemeinen Auslandsparagrafen verwenden: konkreten Tatbestand und anschließend Abs. 5 für den Empfänger prüfen."],
    "Übersichten zu Steuerschuldner und §-13b-Tatbeständen."),

  b("B-15", 51, 54, 50, 53, 210, "Teil B", "Änderung der Bemessungsgrundlage nach § 17",
    ["§ 17 Abs. 1, 2 UStG"],
    [
      "§ 17 wird als nachgelagerte Korrektur des bereits vollständig beurteilten Umsatzes behandelt.",
      "Neben dem Grundfall enthält das Skript Rabatte in Lieferketten und analoge Berichtigungstatbestände.",
      "Korrektur bei Leistendem und Leistungsempfänger ist zeitlich an den Berichtigungstatbestand anzuknüpfen, nicht rückwirkend an den ursprünglichen Umsatz.",
    ],
    ["Erst Ursprungsumsatz mit ursprünglicher BMG lösen; spätere Änderung als eigenen Korrekturzeitpunkt dokumentieren."],
    "Mehrstufige Rabatt- und Korrekturdiagramme."),

  b("C-01", 55, 56, 54, 55, 164, "Teil C", "Vorsteuerprüfung und Arten des Vorsteuerabzugs",
    ["§ 15 Abs. 1–4 UStG", "§ 2a UStG"],
    [
      "Vorsteuer wird nach vollständiger Ausgangsumsatzprüfung geprüft. Zuerst ist festzustellen, ob deutsche Umsatzsteuer bzw. ein gesetzlich vorgesehener Vorsteuertatbestand vorliegt.",
      "Anschließend werden die einzelnen Nummern des § 15 Abs. 1 und danach Ausschlüsse sowie eine etwaige Aufteilung nach § 15 Abs. 4 geprüft.",
      "Das Skript enthält einen vorausschauenden Hinweis auf Änderungen ab 2028 bei Soll-/Istversteuerung und Rechnung/Zahlung; dieser Hinweis ist als zukünftiger Rechtsstand gekennzeichnet.",
    ],
    ["Vorsteuer nicht saldieren: Tatbestand, Unternehmensbezug, Rechnung/Zahlung und Ausschlüsse in getrennten Prüfungsschritten ausweisen."],
    "Prüfungsschema und Übersicht der unterschiedlichen Vorsteuertatbestände."),

  b("C-02", 57, 57, 56, 56, 209, "Teil C", "Gesetzlich geschuldete Steuer und § 14c",
    ["§ 14c UStG", "§ 15 Abs. 1 Nr. 1 UStG"],
    [
      "Für den Vorsteuerabzug ist die gesetzlich geschuldete Steuer entscheidend; ein bloßer Steuerausweis nach § 14c macht den Betrag nicht automatisch zur abzugsfähigen Vorsteuer.",
      "Unrichtiger und unberechtigter Steuerausweis sind vom materiell geschuldeten Umsatz zu trennen.",
    ],
    ["Zuerst die materiell richtige Umsatzsteuer bestimmen; erst danach Rechnung und § 14c beurteilen."],
    "Gegenüberstellung gesetzliche Steuer und §-14c-Steuer."),

  b("C-03", 58, 60, 57, 59, 224, "Teil C", "Unternehmenszuordnung und gemischte Nutzung",
    ["§ 15 Abs. 1 UStG", "§ 15 Abs. 1b UStG", "§ 27 Abs. 16 UStG"],
    [
      "Unternehmensbezug und Zuordnung sind bereits im Zeitpunkt des Leistungsbezugs anhand der beabsichtigten Verwendung zu beurteilen.",
      "Bei gemischter Nutzung unterscheidet das Skript zwischen aufteilbaren Leistungen und einheitlichen Gegenständen mit Zuordnungsfragen.",
      "Für gemischt genutzte Grundstücke begrenzt § 15 Abs. 1b den Vorsteuerabzug; die Übergangsregel des § 27 Abs. 16 und spätere Unterhaltungs-/Herstellungskosten werden gesondert angesprochen.",
    ],
    ["Zuordnung zum Unternehmen und Höhe des Vorsteuerabzugs nie gleichsetzen – insbesondere nicht beim Grundstück."],
    "Zuordnungsmatrizen und Sonderübersicht für gemischt genutzte Grundstücke."),

  b("C-04", 61, 62, 60, 61, 164, "Teil C", "Ausschlüsse vom Vorsteuerabzug",
    ["§ 15 Abs. 2, 3, 4 UStG"],
    [
      "Steuerfreie Ausgangsumsätze können den Vorsteuerabzug ausschließen; echte Befreiungen sind über § 15 Abs. 3 hiervon teilweise ausgenommen.",
      "Bei gemischter Verwendung ist der abziehbare und nicht abziehbare Anteil nach einem sachgerechten Maßstab aufzuteilen.",
    ],
    ["Nach positivem §-15-Abs.-1-Tatbestand stets Abs. 2/3 und bei gemischter Verwendung Abs. 4 anschließen."],
    "Ausschluss- und Aufteilungsschema."),

  b("C-05", 63, 67, 62, 66, 226, "Teil C", "Vorsteuerberichtigung nach § 15a",
    ["§ 15a UStG", "§§ 44, 45 UStDV"],
    [
      "Das Skript gliedert § 15a nach Berichtigungsobjekten: mehrfach verwendete Wirtschaftsgüter, Einlagen, sonstige Leistungen/nachträgliche Kosten und nur einmalig verwendete Wirtschaftsgüter.",
      "Verkauf und Entnahme während des Berichtigungszeitraums sowie eine Geschäftsveräußerung im Ganzen werden als besondere Änderungen der Verhältnisse verfolgt.",
      "Für Grundstücke wird die Verbindung zu § 15 Abs. 1b und die spätere Änderung der Nutzung gesondert behandelt.",
    ],
    ["Bei § 15a immer vier Fragen notieren: ursprünglicher Abzug, Berichtigungsobjekt, Zeitraum, Änderung der maßgeblichen Verhältnisse; erst danach Betrag und UStDV-Grenzen."],
    "Mehrere Matrizen zu Berichtigungsobjekt, Zeitraum, Verkauf/Entnahme und Grundstück."),

  b("D-01", 68, 71, 67, 70, 179, "Teil D", "Ausfuhrlieferung, Nachweise und Reihengeschäft",
    ["§ 4 Nr. 1 Buchst. a UStG", "§ 6 UStG", "§ 4 Nr. 3 UStG"],
    [
      "Ausfuhrlieferungen werden über Warenbewegung ins Drittland, Abnehmer-/Transportkonstellation und die Nachweisvoraussetzungen geprüft.",
      "Buch- und Belegnachweis wird im Klausurvorspann häufig als gegeben unterstellt; trotzdem bleibt die materielle Ausfuhrprüfung erforderlich.",
      "Im Reihengeschäft ist zunächst die bewegte Lieferung zuzuordnen; zusätzlich können unmittelbar ausfuhrbezogene Beförderungsleistungen nach § 4 Nr. 3 steuerfrei sein.",
    ],
    ["Nachweise nicht mit materiellen Voraussetzungen verwechseln; Reihengeschäft stets vor der Ausfuhrbefreiung lösen."],
    "Mehrere Drittlands-Reihengeschäftsbilder für Transport durch ersten, letzten und mittleren Unternehmer."),

  b("D-02", 72, 72, 71, 71, 180, "Teil D", "Lohnveredelung an Gegenständen der Ausfuhr",
    ["§ 7 UStG", "§ 4 Nr. 1 Buchst. a UStG"],
    [
      "Die Lohnveredelung ist eine sonstige Leistung an einem zur Bearbeitung ins Inland gelangten Gegenstand und wird von einer eigenen Ausfuhrlieferung des Bearbeiters abgegrenzt.",
      "Das Skript kontrastiert unternehmerischen und privaten Auftraggeber aus der Schweiz.",
    ],
    ["Leistungsart und Leistungsort zuerst bestimmen; § 7 ist erst die nachfolgende Steuerbefreiungsprüfung."],
    "Zwei Vergleichsfälle mit Unternehmens-Pkw und Privat-Pkw aus Basel."),

  b("D-03", 73, 75, 72, 74, 181, "Teil D", "Einfuhr, EUSt-Vorsteuer und § 3 Abs. 8 im Reihengeschäft",
    ["§ 1 Abs. 1 Nr. 4 UStG", "§ 3 Abs. 8 UStG", "§ 15 Abs. 1 Nr. 2 UStG", "§ 11 UStG"],
    [
      "Einfuhrumsatz und Lieferumsatz sind getrennte Tatbestände; die Person des EUSt-Schuldners ist für Vorsteuer und § 3 Abs. 8 zentral.",
      "§ 3 Abs. 8 kann den Ort einer Lieferung ins Inland verlagern, wenn der Lieferer bzw. sein Beauftragter Schuldner der EUSt ist.",
      "Im Reihengeschäft werden Einfuhr, bewegte Lieferung und ruhende Lieferungen nacheinander bestimmt.",
    ],
    ["Bei jeder Einfuhrkette zuerst EUSt-Schuldner markieren; erst dann § 3 Abs. 8 und Vorsteuerabzug zuordnen."],
    "Einfuhr- und Reihengeschäftsschaubilder mit verzollt/versteuert versus unverzollt/unversteuert."),

  b("D-04", 76, 80, 75, 79, 251, "Teil D", "Drittlands-Fernverkauf, IOSS und Steuerbefreiungen im Einfuhrumfeld",
    ["§ 3c Abs. 2, 3 UStG", "§ 21a UStG", "§ 4 Nr. 4b, Nr. 5 UStG"],
    [
      "Drittlands-Fernverkäufe werden nach Einfuhrwert, Einfuhrstaat, IOSS-Nutzung und Rolle des Lieferers differenziert.",
      "Das IOSS-Verfahren und die Einfuhr-Steuerbefreiung werden mit § 3c verknüpft; daneben behandelt das Skript das Special Arrangement nach § 21a.",
      "Vermittlungsleistungen im Zusammenhang mit Drittlandsumsätzen, Ausfuhr und § 3 Abs. 8 haben eigene Steuerbefreiungstatbestände.",
      "Lieferungen, die einer Einfuhr vorangehen, können unter den Voraussetzungen des § 4 Nr. 4b steuerfrei sein.",
    ],
    ["Drittlands-Fernverkauf nicht mit innergemeinschaftlichem Fernverkauf vermischen: Einfuhr, IOSS und § 3c Abs. 2/3 bilden einen eigenen Prüfpfad."],
    "Entscheidungsbäume zu IOSS/§ 3c sowie Beispiele für Vermittlung und vorgelagerte Einfuhrlieferung."),

  b("D-05", 81, 83, 80, 82, 191, "Teil D", "Innergemeinschaftliche Lieferung und Reihengeschäft",
    ["§ 4 Nr. 1 Buchst. b UStG", "§ 6a UStG", "§§ 17a–17d UStDV"],
    [
      "Die innergemeinschaftliche Lieferung setzt neben der grenzüberschreitenden Warenbewegung die Erwerbsbesteuerung bzw. Abnehmereigenschaft und die weiteren §-6a-Voraussetzungen voraus.",
      "Buch- und Belegnachweis wird als eigener Nachweiskomplex behandelt; im Klausurvorspann wird er häufig unterstellt.",
      "§ 6a Abs. 4 erscheint als Vertrauensschutzregelung bei Täuschung durch den Abnehmer.",
      "Bei Reihengeschäften kann nur die bewegte Lieferung die innergemeinschaftliche Lieferung sein.",
    ],
    ["Zuerst bewegte Lieferung, danach § 6a; USt-IdNr. und Nachweise nicht als bloße Formalien überlesen."],
    "Reihengeschäftsvarianten für Transport durch letzten, mittleren und ersten Unternehmer."),

  b("D-06", 84, 88, 83, 87, 192, "Teil D", "Innergemeinschaftlicher Erwerb und Reihengeschäft",
    ["§ 1 Abs. 1 Nr. 5 UStG", "§ 1a UStG", "§ 3d UStG", "§ 4b Nr. 4 UStG"],
    [
      "Innergemeinschaftliche Lieferung und Erwerb werden als korrespondierende, aber getrennt zu prüfende Umsätze behandelt.",
      "Das Skript enthält einen festen Erwerbs-Prüfungsgang und weist bei Exoten-Erwerbern auf § 1a Abs. 3/4 hin.",
      "§ 3d Satz 2 wird als zusätzliche Ortsfolge bei Verwendung einer abweichenden USt-IdNr. behandelt.",
      "Im Reihengeschäft kann nur der Abnehmer der bewegten Lieferung einen innergemeinschaftlichen Erwerb verwirklichen.",
    ],
    ["Erwerb nicht aus der Steuerfreiheit der Lieferseite ableiten; Erwerber, Warenbewegung und Erwerbsort eigenständig prüfen."],
    "Prüfungsschema und vier Reihengeschäftsvarianten zum innergemeinschaftlichen Erwerb."),

  b("D-07", 89, 93, 88, 92, 250, "Teil D", "Dreiecksgeschäft, Verbringen und Konsignationslager",
    ["§ 25b UStG", "§ 3 Abs. 1a UStG", "§ 1a Abs. 2 UStG", "§ 6b UStG"],
    [
      "Das innergemeinschaftliche Dreiecksgeschäft wird zunächst nach den allgemeinen Regeln und anschließend mit der Vereinfachung des § 25b gegenübergestellt.",
      "Das dauerhafte innergemeinschaftliche Verbringen wird als fiktive innergemeinschaftliche Lieferung im Abgangsstaat und fiktiver Erwerb im Bestimmungsstaat gespiegelt.",
      "Für Konsignationslager behandelt das Skript die Sonderregel des § 6b als Alternative zur sofortigen Verbringensbesteuerung.",
    ],
    ["Bei Dreiecksgeschäften erst die normale Rechtsfolge vollständig verstehen; § 25b ist eine Vereinfachung, kein Ersatz für die Warenbewegungsanalyse."],
    "Dreiecksschaubilder ohne/mit § 25b sowie Spiegelbild Verbringen und Konsignationslager."),

  b("D-08", 94, 95, 93, 94, 193, "Teil D", "Neue Fahrzeuge und privater Fahrzeuglieferer",
    ["§ 1b UStG", "§ 2a UStG", "§ 15 Abs. 4a UStG"],
    [
      "Neue Fahrzeuge haben im innergemeinschaftlichen Warenverkehr Sonderregeln, die auch Erwerbe außerhalb der normalen Unternehmereigenschaft erfassen.",
      "Der private Lieferer eines neuen Fahrzeugs kann für diesen Vorgang als besonderer Unternehmer nach § 2a behandelt werden.",
    ],
    ["Bei Fahrzeugen zuerst prüfen, ob das Fahrzeug umsatzsteuerlich noch 'neu' ist; danach Sondererwerb und § 2a einordnen."],
    "Übersichten zu § 1b und § 2a."),

  b("D-09", 96, 98, 95, 97, 250, "Teil D", "Innergemeinschaftlicher Fernverkauf und Exoten-Erwerber",
    ["§ 3c Abs. 1 UStG", "§ 1a Abs. 3, 4 UStG"],
    [
      "Der innergemeinschaftliche Fernverkauf nach § 3c Abs. 1 wird von Drittlands-Fernverkäufen getrennt und an Beförderung/Versendung an bestimmte Abnehmergruppen geknüpft.",
      "Bei Exoten-Erwerbern ist vor § 3c zu prüfen, ob bereits ein innergemeinschaftlicher Erwerb nach § 1a vorgeht.",
    ],
    ["Abnehmerstatus entscheidet: Erwerbsbesteuerung kann den Fernverkaufstatbestand verdrängen."],
    "Entscheidungsübersicht Fernverkauf versus innergemeinschaftlicher Erwerb bei Exoten."),

  b("E-01", 99, 101, 98, 100, 211, "Teil E", "Unentgeltliche Wertabgaben als fiktive Lieferungen",
    ["§ 3 Abs. 1b UStG", "§ 10 Abs. 4 UStG"],
    [
      "Fiktive Lieferungen gleichen den zuvor möglichen Vorsteuerabzug aus, wenn Gegenstände dem Unternehmen ohne Entgelt entzogen oder zugewendet werden.",
      "Das Skript trennt Entnahmen für nichtunternehmerische Zwecke, Zuwendungen an Personal und sonstige Zuwendungen aus unternehmerischen Gründen.",
      "§ 3 Abs. 1b Satz 2 verlangt grundsätzlich einen vorherigen Vorsteuerabzug aus dem Gegenstand oder seinen Bestandteilen.",
    ],
    ["Vor jeder Lieferungs-uWA die Vorsteuerhistorie des Gegenstands prüfen; anschließend Nummer 1–3 und Bemessungsgrundlage."],
    "Systemübersicht und Beispiele zu Entnahme, Personal und Geschenk."),

  b("E-02", 102, 105, 101, 104, 212, "Teil E", "Unentgeltliche sonstige Leistungen und Orts-/Befreiungsfolgen",
    ["§ 3 Abs. 9a UStG", "§ 10 Abs. 4 UStG", "§ 3 Abs. 7 UStG", "§§ 6, 6a, 7 UStG"],
    [
      "Unentgeltliche sonstige Leistungen werden von fiktiven Lieferungen getrennt und nach den Kosten-/Ausgabenregeln des § 10 Abs. 4 bemessen.",
      "Seit dem Wegfall des § 3f gelten für unentgeltliche Wertabgaben die allgemeinen Ortsregeln; bei Grundstücksentnahmen nennt das Skript beispielhaft § 3 Abs. 7.",
      "Ausfuhr- und Lohnveredelungsbefreiungen sind für die genannten uWA ausgeschlossen; das Skript weist für 2026 außerdem auf den Ausschluss der §-6a-Befreiung bei bestimmten unentgeltlichen Zuwendungen hin.",
    ],
    ["Bei uWA Leistungsart, Ort, Steuerbefreiung und BMG genauso systematisch wie beim entgeltlichen Umsatz prüfen."],
    "Mehrseitige Tabellen zu privater Nutzung, Personalgestellung und Kosten-BMG."),

  b("F-01", 106, 112, 105, 111, 252, "Teil F", "Kommission und elektronische Schnittstellen",
    ["§ 3 Abs. 3 UStG", "§ 3 Abs. 11 UStG", "§ 3 Abs. 3a UStG", "§ 25e UStG"],
    [
      "Bei Kommissionsgeschäften fingiert das Umsatzsteuerrecht Leistungsketten; die zivilrechtliche Vermittlungsposition reicht für die umsatzsteuerliche Einordnung nicht aus.",
      "Das Skript verfolgt Kommissionen auch im Zusammenhang mit innergemeinschaftlichen Lieferungen.",
      "Für elektronische Schnittstellen werden sonstige Leistungen und Lieferungen getrennt; bei bestimmten Plattformfällen entstehen gesetzlich fingierte Lieferketten.",
      "Marktplatzhaftung und die seit 1.7.2021 geltenden Plattform-Lieferketten werden anhand mehrstufiger Warenwege dargestellt.",
    ],
    ["Bei Plattformfällen zuerst prüfen, ob die Schnittstelle nur vermittelt oder umsatzsteuerlich in eine fingierte Leistungskette einbezogen wird."],
    "Sieben Seiten Ketten- und Plattformdiagramme einschließlich Marktplatzhaftung."),

  b("F-02", 113, 114, 112, 113, 208, "Teil F", "Differenzbesteuerung",
    ["§ 25a UStG", "§ 3 Abs. 12 UStG"],
    [
      "§ 25a ist ein eigener Besteuerungsweg für Wiederverkäufer bestimmter beweglicher Gegenstände; maßgeblich sind insbesondere Erwerbsvorstufe und Marge.",
      "Das Skript verweist beim Tausch/Inzahlungnahme auf den subjektiven Wert der Gegenleistung und die hierzu geänderte Verwaltungsauffassung.",
    ],
    ["Nicht mit der Margenrechnung beginnen: zuerst Wiederverkäufer, Gegenstand und begünstigte Erwerbsvorstufe prüfen."],
    "Vergleichstabelle Regel- versus Differenzbesteuerung und Inzahlungnahme."),

  b("F-03", 115, 115, 114, 114, 232, "Teil F", "Reiseleistungen",
    ["§ 25 UStG"],
    [
      "Reiseleistungen werden als Sonderregime mit Reisevorleistungen und Margenbesteuerung behandelt.",
      "Eigene Leistungen des Reiseunternehmers sind von Reisevorleistungen zu unterscheiden; Drittlandsanteile können besondere Folgen haben.",
    ],
    ["§ 25 als geschlossenen Sonderprüfpfad behandeln: Anwendungsbereich, Einheitlichkeit, Ort, Marge und Vorsteuerfolgen."],
    "Prüfungsübersicht mit Reisevorleistungen und Margenermittlung."),

  b("F-04", 116, 116, 115, 115, 233, "Teil F", "Geschäftsveräußerung im Ganzen",
    ["§ 1 Abs. 1a UStG"],
    [
      "Eine Geschäftsveräußerung im Ganzen ist nicht steuerbar, wenn ein Unternehmen oder gesondert geführter Betrieb im Ganzen auf einen anderen Unternehmer für dessen Unternehmen übertragen wird.",
      "Entscheidend ist die Fortführungsfähigkeit der übertragenen wirtschaftlichen Einheit; Einzelgegenstände reichen nicht automatisch aus.",
    ],
    ["GiG vor der normalen Lieferungs-/Steuerbefreiungsprüfung abklären, aber nur bei Übertragung einer fortführbaren wirtschaftlichen Einheit."],
    "Entscheidungsübersicht und Beispiele zur Fortführung."),

  b("F-05", 117, 117, 116, 116, 234, "Teil F", "Organschaft",
    ["§ 2 Abs. 2 Nr. 2 UStG"],
    [
      "Die Organschaft wird über finanzielle, wirtschaftliche und organisatorische Eingliederung strukturiert.",
      "Rechtsfolge ist die umsatzsteuerliche Zusammenfassung im Organkreis; Innenleistungen werden nicht als steuerbare Außenumsätze behandelt.",
      "Das Skript kennzeichnet ältere Darstellungen ausdrücklich als durch neuere EuGH-Rechtsprechung überholt, sodass historische Hinweise nicht als aktueller Prüfungssatz übernommen werden dürfen.",
    ],
    ["Alle drei Eingliederungsmerkmale getrennt subsumieren und danach erst die Rechtsfolgen für Organträger/Organgesellschaft ziehen."],
    "Organigramm mit den drei Eingliederungsmerkmalen."),

  b("F-06", 118, 121, 117, 120, 253, "Teil F", "Gesellschafterleistungen, Beteiligungen und Factoring",
    ["§ 1 Abs. 1 Nr. 1 UStG", "§ 2 UStG"],
    [
      "Bei Gesellschaft/Gesellschafter ist zwischen nicht steuerbarer Ergebnisverteilung und Sonderentgelt für eine konkrete selbständige Leistung zu unterscheiden.",
      "Erwerb, bloßes Halten und Veräußerung von Beteiligungen ist grundsätzlich keine unternehmerische Tätigkeit; ein Eingriff in die Verwaltung bzw. wirtschaftliche Tätigkeit kann die Einordnung ändern.",
      "Factoring wird nicht lediglich als Forderungsverkauf verstanden: Der Factor kann gegenüber dem Forderungsverkäufer eine entgeltliche Dienstleistung erbringen; Gebühr und wirtschaftlicher Gehalt sind zu analysieren.",
    ],
    ["Bei Gesellschafterfällen immer zwei Ebenen und bei Beteiligungen die tatsächliche Tätigkeit prüfen; beim Factoring Leistung des Factors gesondert identifizieren."],
    "Mehrere Vergleichsbeispiele Gewinnverteilung/Sonderentgelt, Beteiligungsübersicht und Factoring-Schaubild."),

  b("F-07", 122, 124, 121, 123, 254, "Teil F", "Kleinunternehmer ab 2025",
    ["§ 19 UStG"],
    [
      "Das Skript stellt die Rechtslage bis Ende 2024 und die Neuregelung ab 2025 ausdrücklich gegenüber.",
      "Für den aktuellen Rechtsstand werden die neuen Umsatzgrenzen, die Steuerbefreiungswirkung und die unterjährige Betrachtung im System des § 19 behandelt.",
      "Eine Vergleichstabelle und ein abschließendes Zahlenbeispiel zeigen, dass Alt- und Neuregelung nicht vermischt werden dürfen.",
    ],
    ["Im Sachverhalt zuerst Veranlagungsjahr feststellen; danach ausschließlich die für dieses Jahr geltenden §-19-Grenzen und Rechtsfolgen verwenden."],
    "Gegenüberstellung Rechtslage bis 2024 / ab 2025 und abschließendes Berechnungsbeispiel."),
];

export function meurerKurzskriptFuerModul(modulId) {
  return meurerKurzskriptBloecke.filter((block) => block.zielId === Number(modulId));
}

const neuesModul = (id, title, law, minutes, intro, goals, scheme, normchain, example, merksatz, traps, seiten) => ({
  id,
  area: "Modul",
  einheit: "Kurzskript",
  quelleLabel: "Meurer-Kurzskript",
  title,
  law,
  difficulty: "Kurzskript",
  minutes,
  diagram: null,
  intro,
  goals,
  scheme,
  normchain,
  example,
  hbstb: null,
  booking: [],
  merksatz,
  exam: [`Quelle: Thomas Meurer, Umsatzsteuer Kurzskript, Mai 2026, PDF-S. ${seiten}.`],
  traps,
  sourceIds: [],
});

/* Neue Lernmodule werden nur für Stoffblöcke ergänzt, die im bisherigen
   Modulbestand keinen eigenständigen systematischen Lernort hatten. */
export const meurerNeueLernmodule = [
  neuesModul(243, "USt-Grundsystem und Klausuraufbau: Ausgangsumsatz vor Vorsteuer", "§ 1 Abs. 1 UStG · §§ 4–15 UStG", 26,
    ["Das Kurzskript stellt das Allphasen-Netto-System und den festen Klausurprüfungsweg an den Anfang.", "Zentral ist die Trennung von Ausgangs- und Eingangsseite."],
    ["Allphasen-Netto-System erklären", "Ausgangsumsatz in fester Reihenfolge prüfen", "Vorsteuer erst nach der Ausgangsseite anschließen"],
    ["Steuerbarkeit.", "Steuerbefreiung.", "Steuersatz und Bemessungsgrundlage.", "Steuerentstehung und Steuerschuldner.", "Erst danach Eingangsumsätze/Vorsteuer."],
    ["§ 1 Abs. 1 UStG", "§§ 4–9 UStG", "§ 12 UStG", "§ 10 UStG", "§§ 13, 13a, 13b UStG", "§ 15 UStG"],
    { title: "Mehrwertkette als Klausuranker", facts: "Mehrere Unternehmer liefern denselben Gegenstand nacheinander bis zum Endverbraucher.", solution: ["Jede Stufe schuldet Umsatzsteuer auf ihren Ausgangsumsatz.", "Unternehmer ziehen grundsätzlich die ihnen zustehende Vorsteuer ab.", "Die wirtschaftliche Endbelastung verbleibt beim nicht vorsteuerabzugsberechtigten Endverbraucher."], result: "Systemverständnis erklärt, weshalb Ausgangsumsatz und Vorsteuer in der Klausur getrennt geprüft werden." },
    "Erst Ausgangsumsatz, dann Eingangsumsatz – diese Reihenfolge ist der rote Faden jeder USt-Lösung.",
    ["Vorsteuer prüfen, bevor die Verwendung der Eingangsleistung feststeht.", "Steuerbefreiung und Steuersatz vertauschen."], "7–9"),

  neuesModul(244, "Unternehmer, Unternehmenseinheit und Unternehmensbereich", "§ 2 UStG · § 1 Abs. 1 Nr. 1 UStG", 30,
    ["Unternehmereigenschaft, Selbständigkeit und die Einordnung des konkreten Umsatzes in den Unternehmensbereich sind getrennte Fragen."],
    ["Selbständigkeit abgrenzen", "Beginn/Ende der Unternehmereigenschaft erkennen", "Innenumsätze und Privatbereich unterscheiden"],
    ["Unternehmer nach § 2 prüfen.", "Selbständigkeit/Weisungsgebundenheit würdigen.", "Unternehmenseinheit bilden.", "Konkreten Umsatz dem Unternehmens- oder Privatbereich zuordnen."],
    ["§ 2 Abs. 1 UStG", "§ 2 Abs. 2 Nr. 1 UStG", "§ 1 Abs. 1 Nr. 1 UStG"],
    { title: "Mehrere Betriebe – ein Unternehmen", facts: "Ein Unternehmer betreibt mehrere Betriebe und daneben privaten Grundbesitz.", solution: ["Die Betriebe gehören zur umsatzsteuerlichen Unternehmenseinheit.", "Leistungen zwischen eigenen Unternehmensteilen sind Innenumsätze.", "Vorgänge mit Privatvermögen liegen außerhalb des Unternehmensrahmens; Entnahmen sind gesondert als uWA zu prüfen."], result: "Ein Unternehmer hat umsatzsteuerlich grundsätzlich ein Unternehmen." },
    "Unternehmerstatus der Person und Unternehmensbezug des einzelnen Umsatzes nie vermischen.",
    ["Jeden Tätigkeitszweig als eigenes USt-Unternehmen behandeln.", "Privatverkauf allein wegen Unternehmereigenschaft besteuern."], "10–13"),

  neuesModul(245, "Leistungslehre: Lieferung, sonstige Leistung, Werkleistung und Leistungszeitpunkt", "§ 3 Abs. 1, 4, 9 UStG · § 39 AO", 34,
    ["Das Kurzskript bündelt die Grundbegriffe Leistung, Verfügungsmacht, wirtschaftliches Eigentum, Werklieferung/Werkleistung und die Abgrenzung zusammengesetzter Leistungen."],
    ["Lieferung und sonstige Leistung trennen", "VdV zeitlich bestimmen", "Werkleistung/Werklieferung unterscheiden", "Haupt-/Nebenleistung und Teilleistung würdigen"],
    ["Leistungsaustausch/Leistung feststellen.", "Lieferung oder sonstige Leistung qualifizieren.", "Bei Lieferung Verfügungsmacht bestimmen.", "Bei Bearbeitung Materialstellung prüfen.", "Bei zusammengesetzten Leistungen Einheitlichkeit prüfen.", "Leistungszeitpunkt bestimmen."],
    ["§ 3 Abs. 1 UStG", "§ 3 Abs. 4 UStG", "§ 3 Abs. 9 UStG", "§ 39 AO", "§ 13 Abs. 1 Nr. 1 UStG"],
    { title: "Bearbeitung eines Gegenstands", facts: "Ein Unternehmer bearbeitet einen Gegenstand beim Kunden; Material kann vom Unternehmer oder vom Kunden stammen.", solution: ["Stellt der Unternehmer die wesentlichen Stoffe selbst, ist die Werklieferung zu prüfen.", "Stellt der Kunde das Material, liegt regelmäßig eine Werkleistung/sonstige Leistung nahe.", "Ort und Zeitpunkt werden erst nach der Leistungsart bestimmt."], result: "Materialstellung ist ein zentraler Abgrenzungsanker." },
    "Leistungsart ist die Weiche für Ort, Zeitpunkt, Steuerbefreiung und weitere Rechtsfolgen.",
    ["Kaufvertrag mit Lieferung gleichsetzen.", "Haupt-/Nebenleistung automatisch auch beim Steuersatz einheitlich behandeln."], "14–18 und 24–25"),

  neuesModul(246, "Ort sonstiger Leistungen: B2B/B2C und Ausnahmekataloge", "§§ 3a, 3b, 3e UStG", 40,
    ["Die achtseitige Ortsübersicht des Kurzskripts wird als eigener Prüfpfad umgesetzt."],
    ["B2B/B2C-Grundregeln anwenden", "allgemeine Ausnahmen priorisieren", "B2C-Sonderausnahmen erkennen", "digitale und grenzüberschreitende Sonderfälle lösen"],
    ["Empfängerstatus feststellen.", "Ausnahmekatalog 1 prüfen.", "Bei B2C Ausnahmekatalog 2 prüfen.", "Sonderregeln prüfen.", "Erst danach § 3a Abs. 1 oder 2 anwenden."],
    ["§ 3a Abs. 1–8 UStG", "§ 3b UStG", "§ 3e UStG"],
    { title: "B2B/B2C als Ausgangspunkt", facts: "Eine sonstige Leistung wird entweder an einen Unternehmer für sein Unternehmen oder an einen Nichtunternehmer erbracht.", solution: ["B2B führt grundsätzlich zum Empfängerort.", "B2C führt grundsätzlich zum Sitz des Leistenden.", "Vorrangige Sonderregeln können beide Ergebnisse verdrängen."], result: "Grundregel erst anwenden, wenn keine vorrangige Ausnahme greift." },
    "Empfängerstatus zuerst – dann Ausnahmen – dann Grundregel.",
    ["Sofort § 3a Abs. 1/2 anwenden und Grundstücks-/Veranstaltungsregeln übersehen.", "B2C-Ausnahmen auf B2B übertragen."], "26–33"),

  neuesModul(247, "Leistungsaustausch, Inland und Schadensersatz", "§ 1 Abs. 1 Nr. 1, Abs. 2 UStG", 22,
    ["Das Modul bündelt die Tatbestandsmerkmale Inland und gegen Entgelt sowie die Abgrenzung zum echten Schadensersatz."],
    ["Inland/Gemeinschaft/Drittland trennen", "Leistung und Gegenleistung verknüpfen", "echten Schadensersatz erkennen"],
    ["Leistung identifizieren.", "Gegenleistung identifizieren.", "Innere Verknüpfung prüfen.", "Ort/Inland bestimmen."],
    ["§ 1 Abs. 1 Nr. 1 UStG", "§ 1 Abs. 2 UStG"],
    { title: "Zahlung ist nicht automatisch Entgelt", facts: "Ein Unternehmer erhält einen Geldbetrag wegen eines wirtschaftlichen Nachteils.", solution: ["Zu fragen ist, ob der Zahler dafür eine konkrete Leistung erhält.", "Fehlt der Leistungsaustausch, kann echter Schadensersatz vorliegen."], result: "Die Zahlungsbezeichnung allein entscheidet nicht." },
    "Entgelt verlangt Leistungsaustausch, nicht nur Geldfluss.",
    ["Jede Entschädigung als steuerbares Entgelt behandeln."], "34–35"),

  neuesModul(248, "Steuerbefreiungen außerhalb Grundstück: Heilbehandlung, Banken und Versicherung", "§ 4 Nr. 8, 10, 11, 14 UStG · § 9 UStG", 30,
    ["Das Kurzskript systematisiert echte und unechte Befreiungen sowie examensnahe Befreiungen außerhalb des Grundstücksbereichs."],
    ["echte/unechte Befreiung unterscheiden", "Heilbehandlung und Finanz-/Versicherungsumsätze einordnen", "Option bei Bankenumsätzen prüfen", "Vorsteuerfolge ableiten"],
    ["Steuerbaren Umsatz feststellen.", "einschlägige §-4-Befreiung prüfen.", "gegebenenfalls § 9 prüfen.", "Vorsteuerfolge über § 15 Abs. 2/3 festhalten."],
    ["§ 4 Nr. 8 UStG", "§ 4 Nr. 10, 11 UStG", "§ 4 Nr. 14 UStG", "§ 9 UStG", "§ 15 Abs. 2, 3 UStG"],
    { title: "Befreiung und Vorsteuer als System", facts: "Ein Unternehmer erbringt einen steuerfreien Ausgangsumsatz und bezieht hierfür Eingangsleistungen.", solution: ["Unechte Befreiungen führen grundsätzlich zum Vorsteuerausschluss.", "Echte Befreiungen können den Vorsteuerabzug erhalten.", "Eine mögliche Option ist vor der Vorsteuerfolge zu prüfen."], result: "Ausgangsbefreiung bestimmt die Eingangsseite mit." },
    "Steuerbefreiung nie ohne Vorsteuerfolge lernen.",
    ["Jede Steuerbefreiung automatisch als vorsteuerschädlich behandeln.", "Option ohne gesetzlichen Optionszugang annehmen."], "36–38"),

  neuesModul(249, "Gutscheine: Einzweck- und Mehrzweckgutschein", "§ 3 Abs. 13–15 UStG · § 13 UStG", 24,
    ["Die Quelle stellt die Besteuerung von Gutschein-Vertriebsketten gegenüber."],
    ["Gutscheinart bestimmen", "Ausgabe/Übertragung/Einlösung trennen", "Steuerentstehung richtig zuordnen"],
    ["Gutscheinbegriff prüfen.", "Einzweck oder Mehrzweck bestimmen.", "jede Übertragungsstufe prüfen.", "Einlösung und Steuerentstehung zuordnen."],
    ["§ 3 Abs. 13 UStG", "§ 3 Abs. 14 UStG", "§ 3 Abs. 15 UStG", "§ 13 UStG"],
    { title: "Zwei Vertriebsketten", facts: "Ein Gutschein wird ausgegeben, weiterverkauft und später eingelöst.", solution: ["Beim Einzweckgutschein steht die umsatzsteuerliche Behandlung bereits bei Ausgabe fest.", "Beim Mehrzweckgutschein wird die spätere Leistung grundsätzlich erst bei Einlösung besteuert."], result: "Die Gutscheinart bestimmt den Besteuerungszeitpunkt der Kette." },
    "Erst Gutscheinart, dann Zeitachse.",
    ["Jede Gutscheinzahlung sofort als Anzahlung behandeln."], "46–47"),

  neuesModul(250, "EU-Sonderfälle: Dreiecksgeschäft, Verbringen, Konsignationslager und Fernverkauf", "§ 25b UStG · § 3 Abs. 1a UStG · § 1a Abs. 2 UStG · § 6b UStG · § 3c Abs. 1 UStG", 42,
    ["Mehrere eigenständige EU-Sondertatbestände des Kurzskripts werden in einem systematischen Unterthema zusammengeführt."],
    ["§ 25b als Vereinfachung anwenden", "Verbringen spiegelbildlich prüfen", "Konsignationslager abgrenzen", "ig. Fernverkauf und Exoten-Erwerb trennen"],
    ["Grundgeschäft/Warenbewegung bestimmen.", "Sondertatbestand identifizieren.", "Tatbestandsvoraussetzungen vollständig prüfen.", "Rechtsfolge in Abgangs- und Bestimmungsstaat festhalten."],
    ["§ 25b UStG", "§ 3 Abs. 1a UStG", "§ 1a Abs. 2 UStG", "§ 6b UStG", "§ 3c Abs. 1 UStG"],
    { title: "EU-Sonderfälle nicht vermischen", facts: "Waren bewegen sich grenzüberschreitend, ohne dass stets das klassische Paar ig. Lieferung/ig. Erwerb nach dem Grundfall vorliegt.", solution: ["Dreiecksgeschäft kann § 25b vereinfachen.", "Eigenes Verbringen löst fiktive Umsätze aus.", "Konsignationslager kann das Verbringen hinausschieben/ersetzen.", "Fernverkauf richtet den Lieferort nach eigener Regel aus."], result: "Jeder Sonderfall hat einen eigenen Tatbestand und eine eigene Rechtsfolge." },
    "Zuerst den richtigen EU-Sondertatbestand benennen – erst dann rechnen oder Erwerbsfolgen ziehen.",
    ["§ 25b ohne Dreipersonen-/Dreistaatenprüfung anwenden.", "Fernverkauf trotz vorrangigem ig. Erwerb annehmen."], "89–98"),

  neuesModul(251, "Drittlands-Fernverkauf, IOSS und Einfuhr-nahe Steuerbefreiungen", "§ 3c Abs. 2, 3 UStG · § 21a UStG · § 4 Nr. 4b, Nr. 5 UStG", 34,
    ["Das Modul ergänzt den klassischen Einfuhrblock um E-Commerce und Vermittlungsfälle."],
    ["Drittlands-Fernverkauf erkennen", "IOSS/Special Arrangement einordnen", "Vermittlungsbefreiungen prüfen", "vorgelagerte Einfuhrlieferung prüfen"],
    ["Einfuhr und Lieferkette klären.", "§ 3c Abs. 2/3 prüfen.", "IOSS oder § 21a prüfen.", "gegebenenfalls § 4 Nr. 4b/5 prüfen."],
    ["§ 3c Abs. 2, 3 UStG", "§ 21a UStG", "§ 4 Nr. 4b UStG", "§ 4 Nr. 5 UStG"],
    { title: "E-Commerce aus dem Drittland", facts: "Ware wird aus einem Drittland an einen privaten Abnehmer in der EU versendet.", solution: ["Einfuhr und Lieferort sind getrennt zu analysieren.", "IOSS kann die Einfuhr- und Lieferbesteuerung systematisch verknüpfen.", "Ohne IOSS können andere §-3c- bzw. §-21a-Folgen greifen."], result: "Drittlands-Fernverkauf ist ein eigener Prüfpfad neben klassischer Einfuhr." },
    "Einfuhrsteuer und Lieferumsatz immer getrennt halten – auch im E-Commerce.",
    ["Drittlands-Fernverkauf wie ig. Fernverkauf behandeln."], "76–80"),

  neuesModul(252, "Kommission, Plattformen und elektronische Schnittstellen", "§ 3 Abs. 3, 3a, 11 UStG · § 25e UStG", 34,
    ["Das Kurzskript zeigt, wie das UStG bei Kommissionen und Plattformen von der zivilrechtlichen Oberfläche abweichen kann."],
    ["Kommissionskette bilden", "elektronische Schnittstelle qualifizieren", "fingierte Lieferketten erkennen", "Marktplatzhaftung abgrenzen"],
    ["Zivilrechtliche Rollen feststellen.", "umsatzsteuerliche Fiktion prüfen.", "Leistungskette neu zeichnen.", "für jede fiktive/echte Leistung Ort und Steuerfolge bestimmen."],
    ["§ 3 Abs. 3 UStG", "§ 3 Abs. 11 UStG", "§ 3 Abs. 3a UStG", "§ 25e UStG"],
    { title: "Plattform als Teil der Leistungskette", facts: "Ein Händler verkauft über eine elektronische Schnittstelle an einen Endkunden.", solution: ["Zunächst ist zu prüfen, ob die Schnittstelle nur vermittelt.", "Bei gesetzlicher Lieferfiktion wird eine mehrstufige Lieferkette gebildet.", "Die einzelnen Lieferungen werden anschließend separat geprüft."], result: "Plattformfälle beginnen mit der gesetzlichen Fiktion, nicht mit dem Endkundenumsatz." },
    "Bei Kommission/Plattform zuerst die umsatzsteuerliche Leistungskette zeichnen.",
    ["Zivilrechtliche Vermittlung ungeprüft als umsatzsteuerliche Vermittlung übernehmen."], "106–112"),

  neuesModul(253, "Gesellschafterleistungen, Beteiligungen und Factoring", "§ 1 Abs. 1 Nr. 1 UStG · § 2 UStG", 32,
    ["Das Modul bündelt drei Abgrenzungsfelder, bei denen zuerst geklärt werden muss, ob überhaupt eine unternehmerische Leistung vorliegt."],
    ["Sonderentgelt von Gewinnverteilung trennen", "Beteiligung unternehmerisch/nichtunternehmerisch einordnen", "Factoring als Dienstleistung würdigen"],
    ["Beteiligte und Ebenen trennen.", "konkrete Leistung identifizieren.", "Entgelt/Sonderentgelt prüfen.", "Unternehmensbezug bestimmen.", "erst danach Steuerbarkeit fortprüfen."],
    ["§ 1 Abs. 1 Nr. 1 UStG", "§ 2 UStG"],
    { title: "Wirtschaftlichen Gehalt bestimmen", facts: "Gesellschafter erhält Zahlungen; Beteiligungen werden gehalten oder veräußert; Forderungen werden an einen Factor übertragen.", solution: ["Ergebnisverteilung ist nicht automatisch Entgelt.", "Bloßes Halten einer Beteiligung ist grundsätzlich keine unternehmerische Tätigkeit.", "Beim Factoring kann die wirtschaftliche Leistung des Factors die zentrale Dienstleistung sein."], result: "Die Steuerbarkeit beginnt mit der tatsächlichen Leistung, nicht mit der zivilrechtlichen Bezeichnung." },
    "Gesellschafts- und Finanzierungsfälle immer wirtschaftlich entflechten.",
    ["Gewinnanteil als Sonderentgelt behandeln.", "Jede Anteilsveräußerung automatisch als Unternehmerumsatz behandeln."], "118–121"),

  neuesModul(254, "Kleinunternehmer nach § 19 UStG: Rechtslage ab 2025", "§ 19 UStG", 28,
    ["Das Kurzskript stellt alte und neue Rechtslage ausdrücklich gegenüber; für aktuelle Fälle ist die Reform ab 2025 maßgeblich."],
    ["maßgebliches Jahr bestimmen", "aktuelle Umsatzgrenzen prüfen", "Steuerbefreiungsfolge verstehen", "Alt-/Neurecht auseinanderhalten"],
    ["Veranlagungs-/Umsatzjahr feststellen.", "Vorjahresgrenze prüfen.", "laufendes Jahr und Überschreitungsfolgen prüfen.", "Rechtsfolge des § 19 festhalten."],
    ["§ 19 UStG"],
    { title: "Rechtsstandsfrage zuerst", facts: "Ein Unternehmer erzielt im Vorjahr und im laufenden Jahr Umsätze nahe den gesetzlichen Grenzen.", solution: ["Zuerst ist das maßgebliche Kalenderjahr festzustellen.", "Für Jahre ab 2025 ist ausschließlich die reformierte Fassung anzuwenden.", "Die Quelle stellt hierzu Alt- und Neurecht in einer Vergleichstabelle gegenüber."], result: "Die richtige Gesetzesfassung ist Teil der Subsumtion." },
    "Bei § 19 ist der Rechtsstand selbst ein Prüfungspunkt.",
    ["Grenzen der Rechtslage bis 2024 in einen Fall ab 2025 übernehmen."], "122–124"),
];

export default meurerKurzskriptBloecke;
