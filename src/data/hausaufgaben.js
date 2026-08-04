export const hausaufgaben = [
  {
    id: "ha-1",
    termin: 1,
    titel: "Kurzklausur I – Grundlagen der Bilanzierung",
    zeit: "3 Stunden",
    rechtsstand: "2025",
    quelle: "B-S25-Bilanz-Termin 1-Hausarbeit mit Loesung-0226 (1).pdf",
    themen: ["Anschaffungskosten", "AfA", "Immaterielle Wirtschaftsgüter", "Forschung und Entwicklung", "Umsatzrealisierung", "Teilwert"],
    moduleKeywords: ["anschaffungskosten", "immater", "forschung", "entwicklung", "vorräte", "umsatzrealisierung", "teilwert", "abschreibung"],
    aufgaben: [
      "Produktionsmaschine: Anschaffung einschließlich Finanzierungsbestandteilen, Anschaffungsnebenkosten, Disagio/Zinskomponenten, lineare AfA und Bilanzansätze.",
      "Entwicklung eines gewerblichen Verfahrens: Forschung und Entwicklung abgrenzen, handelsrechtliches Aktivierungswahlrecht und steuerliches Aktivierungsverbot prüfen.",
      "Verkauf von Industriemaschinen/BGA: Gewinnrealisierung, Anzahlungen, Umsatzsteuer, Übergang von Nutzen und Lasten sowie Wertminderung bei Preisverfall beurteilen."
    ],
    loesung: [
      "Handels- und Steuerbilanz getrennt entwickeln; Maßgeblichkeit und steuerliche Durchbrechungen ausdrücklich benennen.",
      "Maschine mit den zurechenbaren Anschaffungskosten ansetzen, Finanzierungskomponenten abgrenzen und die zeitanteilige lineare AfA in Staffelform berechnen.",
      "Entwicklungskosten können handelsrechtlich bei erfüllten Voraussetzungen aktiviert werden; steuerlich besteht für selbst geschaffene immaterielle Wirtschaftsgüter des Anlagevermögens ein Aktivierungsverbot.",
      "Umsatz und Gewinn erst bei Übergang der wirtschaftlichen Verfügungsmacht realisieren; erhaltene Anzahlungen bis dahin als Verpflichtung ausweisen. Zum Stichtag Niederstwert- bzw. Teilwertprüfung durchführen."
    ],
    normen: ["§§ 246, 248 Abs. 2, 255 HGB", "§§ 5, 6, 7 EStG", "§ 5 Abs. 2 EStG", "§§ 252, 253 HGB", "§ 13 UStG"]
  },
  {
    id: "ha-2", termin: 2,
    titel: "Kurzklausur II – Schulden, Forderungen und Firmenwert", zeit: "2 Stunden", rechtsstand: "2025",
    quelle: "B-S25-Bilanz-Termin 2-Hausaufgabe mit Loesungen-0626.pdf",
    themen: ["Verbindlichkeiten", "Disagio", "Rechnungsabgrenzung", "EWB/PWB", "Wirtschaftliches Eigentum", "Geschäfts- oder Firmenwert"],
    moduleKeywords: ["verbindlichkeit", "disagio", "rechnungsabgrenz", "forderung", "einzelwert", "pauschalwert", "firmenwert", "wirtschaftliches eigentum"],
    aufgaben: [
      "Darlehen mit niedrigem Nominalzins und Auszahlung unter Nennwert: Ansatz der Verbindlichkeit, Disagio/aktiver RAP und Abzinsung.",
      "Forderungen aus Lieferungen und Leistungen: Einzel- und Pauschalwertberichtigung, Ausfallrisiko, Umsatzsteuerkorrektur und wertaufhellende Tatsachen.",
      "Maschine mit Skonto, Eigentumsvorbehalt, Vorsteuer und AfA; Buchungen in den zutreffenden Buchungskreisen.",
      "Firmenübernahme: Kaufpreisallokation und entgeltlich erworbener Geschäfts- oder Firmenwert mit handels- und steuerrechtlicher Abschreibung."
    ],
    loesung: [
      "Verbindlichkeiten handelsrechtlich mit dem Erfüllungsbetrag ansetzen. Unterschiedsbeträge aus der Darlehensauszahlung als Disagio/RAP und steuerliche Sondervorschriften gesondert prüfen.",
      "Forderungen netto bewerten: konkrete Risiken über EWB, allgemeines Ausfallrisiko über PWB; bei Uneinbringlichkeit Umsatzsteuer berichtigen.",
      "Skonto mindert die Anschaffungskosten. Ein einfacher Eigentumsvorbehalt verhindert regelmäßig nicht den Übergang des wirtschaftlichen Eigentums.",
      "Der derivative Geschäfts- oder Firmenwert ist zu aktivieren; handels- und steuerrechtliche Nutzungsdauer sowie Buchungskreise getrennt darstellen."
    ],
    normen: ["§§ 246, 250, 252, 253 HGB", "§§ 5, 6 EStG", "§ 39 AO", "§ 255 Abs. 4 HGB", "§ 7 Abs. 1 S. 3 EStG", "§ 17 UStG"]
  },
  {
    id: "ha-3", termin: 3,
    titel: "Kurzklausur III – Pkw, Betriebsvermögen und Beteiligungen", zeit: "2 Stunden", rechtsstand: "2025",
    quelle: "B-S25-Bilanz-Termin 3-Hausaufgabe mit Loesung-0626.pdf",
    themen: ["Betriebsvermögen", "Pkw", "Privatnutzung", "Entnahmen", "Beteiligungen", "Veräußerungsgewinn"],
    moduleKeywords: ["betriebsvermögen", "pkw", "privatnutzung", "entnahme", "beteiligung", "wertpapier", "veräußerungsgewinn", "6b"],
    aufgaben: [
      "Audi A4: Zuordnung zum Betriebsvermögen, gemischte Nutzung, Anschaffungskosten, Vorsteuer, AfA und private Nutzungsfolgen.",
      "Beteiligung an der M-AG/Aktienveräußerung: Beteiligungsansatz, Veräußerungsgewinn, Finanzierungskosten und steuerliche Sonderregeln prüfen."
    ],
    loesung: [
      "Zivilrechtliches und wirtschaftliches Eigentum sowie notwendiges oder gewillkürtes Betriebsvermögen in dieser Reihenfolge prüfen.",
      "Bei Vorsteuerabzugsberechtigung den Pkw mit Netto-Anschaffungskosten ansetzen und zeitanteilig abschreiben; Privatnutzung als Entnahme/Nutzungsentnahme erfassen.",
      "Veräußerungsgewinn aus Erlös abzüglich Buchwert und unmittelbarer Veräußerungskosten berechnen; Beteiligungs- und Reinvestitionsvorschriften nur bei erfülltem Tatbestand anwenden."
    ],
    normen: ["§ 39 AO", "§§ 4, 5, 6, 7 EStG", "§ 6b EStG", "§ 9b EStG", "§§ 246, 255 HGB"]
  },
  {
    id: "ha-4", termin: 4,
    titel: "Kurzklausur IV – A-GmbH: Tausch, Zuschüsse und Ratenkauf", zeit: "2 Stunden", rechtsstand: "2025",
    quelle: "B-S25-Bilanz-Termin 4-Hausaufgabe mit Loesungen-0425.pdf",
    themen: ["Kapitalgesellschaft", "Tausch", "Inzahlunggabe", "Zuschüsse", "Ratenkauf", "AfA"],
    moduleKeywords: ["tausch", "inzahlung", "zuschuss", "raten", "verbindlichkeit", "anschaffungskosten", "kapitalgesellschaft", "bewegliches anlagevermögen"],
    aufgaben: [
      "Firmen-Lkw: Zugang, Bewertung, Vorsteuer, AfA und Bilanzansatz.",
      "Anlagen- und Finanzierungssachverhalte der GmbH mit Zuschuss, Tausch/Inzahlunggabe und Kaufpreisbestandteilen.",
      "Bestückungsautomat: gemeiner Wert, Inzahlunggabe eines Altgeräts, Anschaffungsnebenkosten, Zuschuss und Ratenkomponenten."
    ],
    loesung: [
      "Anschaffungskosten umfassen Geldleistung und den beizulegenden Wert hingegebener Wirtschaftsgüter einschließlich zurechenbarer Nebenkosten.",
      "Zuschüsse nach der Verwaltungsauffassung entweder erfolgswirksam vereinnahmen oder von den Anschaffungs-/Herstellungskosten absetzen; Aufgaben-Zielvorgabe beachten.",
      "Ratenkauf in Barwert/Tilgung und Zinsanteil zerlegen, soweit ein Finanzierungselement vorliegt; HB und StB getrennt fortführen."
    ],
    normen: ["§§ 246, 253, 255 HGB", "§§ 5, 6, 7 EStG", "R 6.5 EStR", "§ 9b EStG"]
  },
  {
    id: "ha-5", termin: 5,
    titel: "Kurzklausur V – Niederstwert und Herstellungskosten", zeit: "2 Stunden", rechtsstand: "2025",
    quelle: "B-S25-Bilanz-Termin 5-Hausaufgabe mit Loesungen-0625.pdf",
    themen: ["Niederstwert", "Teilwert", "Wertaufholung", "Beteiligungen", "GWG", "Herstellungskosten"],
    moduleKeywords: ["niederstwert", "teilwert", "wertaufholung", "beteiligung", "geringwert", "herstellungskosten", "fremdkapitalzinsen"],
    aufgaben: [
      "Feinmechanikerwerkzeug: Zugangsbewertung, Wertverfall, Niederstwert/Teilwert und spätere Wertaufholung.",
      "Beteiligungen: dauernde Wertminderung, Teilwert und Zuschreibung.",
      "Werkbank: Skonto, Vorsteuer, Eigentumsübergang, AfA und GWG-/Sammelposten-Abgrenzung.",
      "Laborroboter: Herstellungskostenbestandteile, Gemeinkosten, Fremdkapitalzinsen, AfA und Bilanzansatz."
    ],
    loesung: [
      "Für Anlage- und Umlaufvermögen die unterschiedlichen handelsrechtlichen Niederstwertregeln anwenden; steuerlich Dauerhaftigkeit der Wertminderung begründen.",
      "Bei Wegfall des Abschreibungsgrundes Zuschreibungsgebot/Wertaufholung bis höchstens zu den fortgeführten Anschaffungs- oder Herstellungskosten beachten.",
      "Skonto mindert Anschaffungskosten, abzugsfähige Vorsteuer gehört nicht dazu.",
      "Herstellungskosten in Pflicht-, Wahl- und Verbotsbestandteile gliedern; handels- und steuerrechtliche Unterschiede ausdrücklich ausweisen."
    ],
    normen: ["§§ 253, 255 HGB", "§§ 6, 7 EStG", "R 6.3 EStR", "§ 9b EStG"]
  },
  {
    id: "ha-6", termin: 6,
    titel: "Gebäude, Mietereinbauten und Rückbau", zeit: "Hausaufgabe", rechtsstand: "2025",
    quelle: "B-S25-Bilanz-Termin 6-Hausaufgabe mit Loesung-0426.pdf",
    themen: ["Mietereinbauten", "Gebäude", "Betriebsvorrichtungen", "Rückstellungen", "Gebäude-AfA", "Nachträgliche HK"],
    moduleKeywords: ["mietereinbau", "gebäude", "betriebsvorrichtung", "rückstellung", "rückbau", "nachträgliche herstellungskosten", "grund und boden"],
    aufgaben: [
      "Angemietetes Verwaltungsgebäude: Be-/Entlüftungsanlage, Aktenaufzug, mietvertraglicher Vorteil, Nutzungsdauer, Rückbau und Entschädigung.",
      "Eigenes Grundstück mit Produktions- und Lagerhalle: Gebäudeteile, Herstellungskosten, Gebäude-AfA und nachträgliche Herstellungskosten.",
      "Weitere Lagerhalle: Grund und Boden/Gebäude trennen, Herstellungskosten und Stichtagsbewertung."
    ],
    loesung: [
      "Bei Mietereinbauten wirtschaftliches Eigentum, Scheinbestandteil, Betriebsvorrichtung und Gebäudebestandteil abgrenzen; über die kürzere wirtschaftliche Nutzungs- oder Mietdauer abschreiben.",
      "Rückbauverpflichtung als Rückstellung erfassen und handels-/steuerrechtliche Abzinsungs- und Folgebewertungsregeln beachten.",
      "Grund und Boden sowie Gebäude getrennt bilanzieren; Gebäude zeitanteilig nach § 7 Abs. 4 EStG abschreiben.",
      "Erweiterung oder wesentliche Verbesserung als nachträgliche Herstellungskosten, bloße Erhaltung als Aufwand behandeln."
    ],
    normen: ["§§ 246, 249, 253, 255 HGB", "§§ 5, 6, 7 Abs. 4 EStG", "§ 39 AO"]
  },
  {
    id: "ha-7", termin: 7,
    titel: "§ 6b EStG und Ersatzbeschaffung", zeit: "Hausaufgabe", rechtsstand: "2025",
    quelle: "B-S25-Bilanz-Termin 7-Hausarbeit mit Loesung-0426.pdf",
    themen: ["Ersatzbeschaffung", "§ 6b EStG", "Stille Reserven", "Versicherungsentschädigung", "Grundstücke", "Wertpapiere"],
    moduleKeywords: ["ersatzbeschaffung", "6b", "stille reserve", "versicherung", "grundstück", "wertpapier", "beteiligung"],
    aufgaben: [
      "Gestohlene Wälzpresse: Anlagenabgang, Versicherungsentschädigung, Ersatzbeschaffung, Mehrentschädigung und AfA.",
      "Veräußerung eines Lagergrundstücks und Erwerb eines bebauten Ersatzgrundstücks: Veräußerungsgewinn, § 6b-Rücklage/Übertragung und Aufteilung auf Grund und Boden/Gebäude.",
      "Verkauf von Aktien/Wertpapieren: Veräußerungsergebnis und steuerliche Behandlung."
    ],
    loesung: [
      "Buchwertabgang und Versicherungsforderung erfassen; Voraussetzungen der Ersatzbeschaffung nach R 6.6 EStR prüfen und übertragbare stille Reserve bestimmen.",
      "§ 6b EStG nach begünstigtem Wirtschaftsgut, Behaltefrist, Reinvestitionsobjekt und Frist prüfen; übertragene Beträge von den AK/HK des Ersatzwirtschaftsguts abziehen.",
      "Grund und Boden/Gebäude getrennt bewerten; AfA aus den gekürzten Gebäude-Herstellungskosten berechnen.",
      "Wertpapierergebnis aus Erlös abzüglich Buchwert und unmittelbarer Veräußerungskosten ermitteln."
    ],
    normen: ["§ 6b EStG", "R 6.6 EStR", "§§ 6, 7 EStG", "§§ 246, 253 HGB"]
  },
  {
    id: "ha-8", termin: 8,
    titel: "Betriebsprüfung, Bilanzberichtigung und Aktien", zeit: "90 Minuten", rechtsstand: "2025",
    quelle: "B-S25-Bilanz-Termin 8-Hausaufgabe mit Loesungen-0726_V2.pdf",
    themen: ["Betriebsprüfung", "Bilanzberichtigung", "Mehr-/Weniger-Rechnung", "Grundstücks-AK", "Gewerbesteuer", "Aktienbewertung"],
    moduleKeywords: ["bilanzberichtigung", "bilanzänderung", "mehr-/weniger", "betriebsprüfung", "gewerbesteuer", "grundstück", "aktien", "wertaufholung"],
    aufgaben: [
      "Betriebsprüfung: fehlerhafte Grundstücks-/Gebäudeanschaffungskosten, Grunderwerbsteuer, Notar/Grundbuch, Vorsteuer, AfA und Gewerbesteuerfolgen über mehrere Jahre korrigieren.",
      "Aktien an der Mokia AG: Ansatz, Wertminderung, Wertaufholung, Veräußerung/Beteiligungserträge und steuerliche Korrekturen."
    ],
    loesung: [
      "Fehler periodengerecht nach formellem und materiellem Bilanzenzusammenhang korrigieren; Bilanzberichtigung und Mehr-/Weniger-Rechnung über alle betroffenen Jahre fortschreiben.",
      "Grundstückskosten sachgerecht auf Grund und Boden/Gebäude verteilen; nicht abzugsfähige Vorsteuer in die AK einbeziehen, im Übrigen Vorsteuer berichtigen.",
      "Gewerbesteuer ist steuerlich nicht abzugsfähig; Rückstellung bilanziell erfassen und außerbilanziell korrigieren.",
      "Aktien je nach Anlage- oder Umlaufvermögen bewerten; Dauerhaftigkeit und Zuschreibungsgebot prüfen."
    ],
    normen: ["§ 4 Abs. 2 EStG", "§ 4 Abs. 5b EStG", "§§ 5, 6, 7 EStG", "§§ 252, 253, 255 HGB", "§ 9b EStG"]
  },
  {
    id: "ha-9", termin: 9,
    titel: "M-GmbH – Rückstellungen, eigene Anteile und § 8b KStG", zeit: "2 Stunden", rechtsstand: "2025",
    quelle: "B-S25-Bilanz-Hausaufgabe 9 mit Loesung-0426.pdf",
    themen: ["Gebäude", "Aufbewahrungsrückstellung", "Prozessrückstellung", "Eigene Anteile", "Beteiligungen", "§ 8b KStG"],
    moduleKeywords: ["aufbewahrung", "prozessrückstellung", "ungewisse verbindlichkeit", "eigene anteile", "8b", "beteiligung", "gebäude", "erhaltungsaufwand"],
    aufgaben: [
      "Wintergarten: Herstellungskosten oder Erhaltungsaufwand, Gebäudebestandteil/Betriebsvorrichtung und AfA.",
      "Aufbewahrung von Geschäftsunterlagen: Rückstellung dem Grunde und der Höhe nach, Kostenbestandteile, Laufzeit und Abzinsung.",
      "Schadensersatz/Rechtsstreit: Prozessrückstellung, Wahrscheinlichkeit, Prozesskosten und wertaufhellende Tatsachen.",
      "Erwerb eigener Anteile: handelsrechtlicher Eigenkapitalabzug, Anschaffungsnebenkosten und steuerliche Behandlung.",
      "Beteiligung Rauhaus GmbH: Ausschüttungen, Wertminderung und außerbilanzielle Korrekturen nach § 8b KStG."
    ],
    loesung: [
      "Wintergarten bei Erweiterung oder wesentlicher Verbesserung als nachträgliche Herstellungskosten behandeln und ab Fertigstellung abschreiben.",
      "Aufbewahrungsrückstellung mit den verursachten Voll-/Einzelkosten und der durchschnittlichen Restaufbewahrungsdauer ermitteln; unterschiedliche Abzinsung in HB und StB beachten.",
      "Prozessrückstellung einschließlich eigener und voraussichtlich zu tragender gegnerischer Kosten bilden, wenn die Inanspruchnahme überwiegend wahrscheinlich ist.",
      "Eigene Anteile handelsrechtlich offen vom Eigenkapital absetzen statt als normalen Vermögensgegenstand zu aktivieren.",
      "Beteiligungserträge, Veräußerungs- und Wertminderungsfolgen bei Körperschaften nach § 8b KStG außerbilanziell korrigieren."
    ],
    normen: ["§§ 249, 253, 255, 272 Abs. 1a HGB", "§§ 5, 6 EStG", "§ 8b KStG", "§ 8 Abs. 1 KStG"]
  }
];

export function passendeModule(hausaufgabe, module) {
  const schlagworte = hausaufgabe.moduleKeywords || [];
  return module
    .map((modul) => {
      const text = [modul.title, modul.law, modul.merksatz, ...(modul.normchain || []), ...(modul.intro || [])].join(" ").toLowerCase();
      const treffer = schlagworte.filter((wort) => text.includes(wort.toLowerCase())).length;
      return { modul, treffer };
    })
    .filter(({ treffer }) => treffer > 0)
    .sort((a, b) => b.treffer - a.treffer)
    .slice(0, 5)
    .map(({ modul }) => modul);
}

export default hausaufgaben;
