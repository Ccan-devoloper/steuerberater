/* Beispielsammlungen Umsatzsteuer (K1), Tim Schröders, Stand März/Mai 2025.

   Wortlautgetreue Übernahme der sieben Beispielsammlungen zu den Unterrichtstagen
   1 bis 7 des Tageslehrgangs sowie der einseitigen Übersicht „Umsatzbesteuerung
   bei PKW“ (Abschn. 15.23 UStAE).

   WICHTIG: Die Quellen enthalten KEINE Lösungen. Es sind Beispielsammlungen für
   den Unterricht: Auf jeden Sachverhalt folgt nur die Frage („Beurteilen Sie
   D!“, „Wo wird die Leistung erbracht?“). Es wird hier bewusst keine Lösung
   erfunden; stattdessen verweist jedes Kapitel auf die Stellen im Campus, an
   denen dieselbe Rechtsfrage mit vollständiger Begründung steht – das
   USt-Kurzskript (Meurer), die Originalfälle der Einheiten 2 bis 8, die
   Hausaufgaben USt und die Übungsklausur (Schröders).

   Eine Stelle ist rekonstruiert: Die PKW-Übersicht stellt Entnahme und
   entgeltliche Überlassung zweispaltig gegenüber; die Textextraktion gibt die
   Spalten blockweise nacheinander aus. Sie ist als Tabelle in ihre
   Spaltenordnung zurückgebracht und im Campus als Rekonstruktion ausgewiesen.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle.

   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen. */

export const ustBeispielsammlungQuelle = {
  reihe: "Beispielsammlungen Umsatzsteuer · Tageslehrgang Steuerberaterprüfung · Tim Schröders",
  stand: "Stand 03/2025 und 05/2025",
  verfasser: "Tim Schröders",
  didaktik: [
    "Diese sieben Sammlungen begleiten die Unterrichtstage und sind deshalb genau in der Reihenfolge aufgebaut, in der die Umsatzsteuer geprüft wird: Unternehmereigenschaft, Leistungsart und Leistungsort (Tag 1), Steuerbefreiungen, Bemessungsgrundlage und Vorsteuerabzug (Tag 2), Steuerschuldnerschaft und Reihengeschäft (Tag 3), innergemeinschaftlicher Warenverkehr (Tag 4), Fernverkauf, Kommission, Differenzbesteuerung und Änderung der Bemessungsgrundlage (Tag 5), unentgeltliche Wertabgaben und Vorsteuerberichtigung (Tag 6), Sonderformen von der Reiseleistung bis zum Kleinunternehmer (Tag 7).",
    "Die Beispiele sind bewusst minimal gehalten und variieren einen Sachverhalt oft in zwei oder drei Abwandlungen, die jeweils nur ein Tatbestandsmerkmal verschieben. Die Heizkörper-Reihe an Tag 3 ist dafür das beste Muster: Dreimal derselbe Sachverhalt, einmal versendet der Großhändler, einmal holt der Kunde beim Einzelhändler, einmal baut der Einzelhändler noch ein – und jedes Mal ist die Antwort auf die Frage nach dem Reihengeschäft eine andere.",
    "Zu keinem der Beispiele gibt die Quelle eine Lösung. Das ist kein Mangel, sondern die Arbeitsform: Die Sammlungen sind zum Mitdenken im Unterricht gedacht. Für die Auflösung stehen im selben Campus das Kurzskript (Meurer), die Originalfälle der Einheiten 2 bis 8 und die Übungsklausur bereit.",
  ],
};

const VERFASSER = "Tim Schröders";
const RECHTSSTAND = "Stand 05/2025";
const OHNE_LOESUNG = "Die Quelle ist eine Beispielsammlung für den Unterricht und enthält keine Lösungen – auf jeden Sachverhalt folgt nur die Frage. Es wird hier bewusst keine erfunden.";

export const ustBeispielsammlung = [
  {
    id: "ust-bs-01",
    kapitel: "1",
    tag: "Tag 1",
    title: "Tag 1 – Unternehmereigenschaft, Art der Leistung, Leistungsort",
    thema: "Dreizehn Beispiele vom Rechtsanwalt, der seine private Wohncouch über Ebay verkauft, bis zur Telekommunikationsleistung in die Schweiz – dazwischen die Abgrenzung von Lieferung und sonstiger Leistung, Werklieferung gegen Werkleistung, Haupt- und Nebenleistung, Dauerleistungen und die Ortsregeln für kurzfristige und langfristige Fahrzeugvermietung",
    rechtsstand: "Stand 05/2025",
    quelle: "Beispielsammlung Tag 1 (Schröders)",
    verfasser: VERFASSER,
    normen: [
      "§ 2 Abs. 1 UStG", "§ 3 Abs. 1, Abs. 4, Abs. 6, Abs. 7, Abs. 9 UStG",
      "§ 3a Abs. 1, Abs. 2, Abs. 3 Nr. 1, Nr. 2, Nr. 3, Abs. 5 UStG", "§ 3b UStG",
      "§ 13 Abs. 1 Nr. 1 Buchst. a UStG", "§ 39 AO",
    ],
    themen: ["Unternehmereigenschaft", "Nachhaltigkeit", "Lieferung", "Werklieferung", "Werkleistung", "Nebenleistung", "Dauerleistung", "Leistungsort", "Fahrzeugvermietung", "Telekommunikation"],
    bloecke: [
      { typ: "titel", text: "Beispielsammlung Tag 1" },
      { text: "Beispiel 1: Rechtsanwalt R berät einen Mandanten = verkauft seine gebrauchte Büroausstattung = publiziert einmalig in einer Fachzeitschrift = verkauft über Ebay eine Wohncouch, die im privaten Wohnzimmer stand =" },
      { text: "Beispiel 2: weggefallen" },
      { text: "Beispiel 3: Maschinenbauer M (Dortmund) schließt mit dem Kunden K (Gelsenkirchen) am 30.7.26 einen Kaufvertrag über die Lieferung einer Maschine ab. K holt die Maschine am 1.8.26 in Dortmund ab. Wann geht zivilrechtliches Eigentum über? Wann erfolgt eine Lieferung i. S. d. § 3 (1) UStG? Wo erfolgt die Lieferung?" },
      { text: "Beispiel 4: U verkauft mit Notarvertrag vom 31.10.26 ein Unternehmensgrundstück in Wolfsburg an A. Die Eintragung ins Grundbuch erfolgt am 1.12.26. Im Vertrag ist vereinbart, dass Nutzen und Lasten mit Kaufpreiszahlung am 1.11.26 übergehen. Wann geht zivilrechtliches Eigentum über? Wann geht wirtschaftliches Eigentum über? Wann erfolgt eine Lieferung i. S. d. § 3 (1) UStG? Wo erfolgt die Lieferung?" },
      { text: "Beispiel 5: S (Stuttgart) bestellt bei F (Freiburg) eine neue Heizungsanlage, die F aus selbst beschafften Materialien (Heizkessel, Brenner, Pumpe, …) errichtet. Die Auslieferung erfolgt am 29.9.26, die Endmontage der Heizungsanlage erfolgt vor Ort bei S durch F am 13.10.26 (Abnahme). Art der Leistung? Zeitpunkt der Leistung? Ort der Leistung?" },
      { text: "Beispiel 6: U (Aachen) liefert an den Kunden K aus München eine Maschine und befördert diese mit eigenem LKW zu K. U berechnet 238.000 € für die Maschine und 1.000 € für Transport. Da der Fahrer in München übernachten muss, werden zusätzlich noch 100 € Übernachtungskosten weiterbelastet. Wie viele Leistungen liegen vor? Welche Art von Leistung liegt vor?" },
      { text: "Beispiel 7: U (Köln) vermietet für den Zeitraum 1.1.26 bis 30.6.26 einen Bagger an den Unternehmer Z aus Wuppertal. Welche Art von Leistung liegt vor? Wann wird die Leistung erbracht?" },
      { text: "Fortführung Beispiel 7: Im Mietvertag ist vereinbart, dass die Miete monatlich vorschüssig zu entrichten ist. Wann wird die Leistung erbracht?" },
      { text: "Beispiel 8: Der Fliesenleger F (Freiburg) legt im Auftrag der Firma K in Karlsruhe in einem Bürogebäude Fliesen. a) F stellt die erforderlichen Materialien und verbringt sie nach Karlsruhe b) F erbringt ausschließlich die Verlegearbeiten, K stellt das gesamte Material. Welche Art von Leistung liegt vor? a) b) Wo wird die Leistung erbracht? a) b)" },
      { text: "Beispiel 9: Die Kölner Autovermietung CAR vermietet Pkw an den Unternehmer DK aus Kopenhagen für eine Geschäftsreise und die Privatperson S aus Stockholm für einen Urlaubsaufenthalt. a) Vermietungsdauer jeweils 14 Tage b) Vermietungsdauer jeweils 90 Tage. Wo werden die Leistungen erbracht?" },
      { text: "Beispiel 10: Unternehmer U ist auf Geschäftsreise. Dafür bezieht er in Wien ein Hotelzimmer mit Frühstück. Wie viele Leistungen liegen vor? Wo werden die Leistungen erbracht?" },
      { text: "Beispiel 11: Die DB fährt von Berlin nach Warschau. An Bord werden Speisen und Getränke verkauft. Wie viele Umsätze liegen vor? Wo werden die Leistungen erbracht?" },
      { text: "Beispiel 12: Der Wissenschaftler W aus Köln begutachtet für den Polen P (Nichtunternehmer) in Prag die Echtheit eines Gemäldes. Das Gutachten erstellt W in Köln. Wo wird die Leistung erbracht?" },
      { text: "Beispiel 13: Die T-AG (Bonn) erbringt Telekommunikationsleistungen an Unternehmer und Privatpersonen aus Deutschland, Polen und der Schweiz. Wo wird die Leistung erbracht?" },
      { text: OHNE_LOESUNG + " Die Auflösung steht im Campus: Unternehmereigenschaft und Nachhaltigkeit im Kurzskript (Meurer) und in den Originalfällen der Einheit 2, die Ortsregeln der §§ 3a, 3b UStG in Einheit 4, Werklieferung gegen Werkleistung in Einheit 3." },
    ],
  },
  {
    id: "ust-bs-02",
    kapitel: "2",
    tag: "Tag 2",
    title: "Tag 2 – Grundstücksumsätze, Option, Bemessungsgrundlage und Vorsteuerabzug",
    thema: "Zehn Beispiele um den Bauträger, der verkauft, was er noch nicht gebaut hat; die Option gegenüber einem Pflegedienst und gegenüber einer Bildungseinrichtung mit 97 Prozent steuerpflichtiger Nutzung; durchlaufende Posten beim Autokauf; die Vorausrechnung über den Gesamtbetrag mit drei Teilzahlungen; und die Aufteilung der Vorsteuer bei Arztpraxis, Steuerberaterbüro und Außenfassade",
    rechtsstand: "Stand 05/2025",
    quelle: "Beispielsammlung Tag 2 (Schröders)",
    verfasser: VERFASSER,
    normen: [
      "§ 4 Nr. 9 Buchst. a, Nr. 12, Nr. 16 Buchst. d, Nr. 21 Buchst. a Doppelbuchst. bb UStG",
      "§ 9 Abs. 1, Abs. 2 UStG", "§ 10 Abs. 1 UStG", "§ 13 Abs. 1 Nr. 1 Buchst. a Satz 4 UStG",
      "§ 14c Abs. 1 UStG", "§ 15 Abs. 1, Abs. 1b, Abs. 2, Abs. 4 UStG",
    ],
    themen: ["Bauträger", "Option", "Steuerfreie Vermietung", "Betriebsvorrichtung", "Durchlaufender Posten", "Anzahlung", "Unrichtiger Steuerausweis", "Vorsteueraufteilung"],
    bloecke: [
      { typ: "titel", text: "Beispielsammlung Tag 2" },
      { text: "Beispiel 1: Bauträger B schließt mit dem Kunden K einen Vertrag über den Verkauf eines bebauten Grundstücks. B, der das unbebaute Grundstück besitzt, gibt den Auftrag für die Errichtung des Gebäudes an den Generalunternehmer G weiter. Das Grundstück liegt in Kiel. Leistung des B? Leistung des G?" },
      { text: "Beispiel 2: U verkauft ein Unternehmensgrundstück an den Pflegedienst P (§ 4 Nr. 16 Buchst. d UStG), der dort seinen Firmensitz betreiben möchte. Im Notarvertrag wird die Option ausgeübt. Option wirksam?" },
      { text: "Beispiel 3: V vermietet für 1 Jahr: a) an M1 eine Wohnung mit Pkw-Stellplatz b) an M2 einen Pkw-Stellplatz c) an M3 ein Ladenlokal mit Betriebsvorrichtungen" },
      { text: "Beispiel 4: V vermietet das Erdgeschoss eines Gebäudes an die Bildungseinrichtung B für deren Büro (3% steuerfrei nach § 4 Nr. 21 a) bb) UStG, 97% steuerpflichtig). Option möglich?" },
      { text: "Beispiel 5: Kfz-Händler K berechnet dem Kunden B neben dem Kaufpreis für das Auto i. H. v. 11.900 € noch 100 € Überführungskosten und 75 € verauslagte Zulassungsgebühren. Wie hoch ist die Bemessungsgrundlage bzw. USt?" },
      { text: "Beispiel 6: Waschmaschinenhersteller W hat die Baufirma B beauftragt, in Berlin eine neue Ausstellungshalle zu erstellen. Vereinbarter Festpreis: 119.000 €. B erstellt am 19.6.26 eine Vorausrechnung über 100.000 € zzgl. 19.000 € USt. W zahlt den Gesamtbetrag wie in der Vorausrechnung angegeben am – 2.7.26 i. H. v. 25.000 € – 2.8.26 i. H. v. 30.000 € – 2.9.26 i. H. v. 64.000 €. Die Abnahme der Halle durch W erfolgt am 31.8.26. Beurteilen Sie B!" },
      { text: "Beispiel 7: U bezieht eine steuerpflichtige Eingangsleistung (19%) von Z. Dieser stellt U 5.000 € zzgl. pauschal 1.500 € USt in Rechnung, die U auch bezahlt. Höhe der Umsatzsteuer?" },
      { text: "Beispiel 8: Der Boutiquenbetreiber B erwirbt am 15.05.26 drei Designerkleider für seinen Laden. Zum Geburtstag seiner Tochter schenkt er dieser am 10.6.26 eines der Kleider. Zeitpunkt und Höhe des Vorsteuerabzugs?" },
      { text: "Beispiel 9: Der Vermieter V vermietet eine Etage (100 qm) seines zweigeschossigen Hauses steuerfrei an den Augenarzt A und eine Etage (100 qm) steuerpflichtig an den Steuerberater S. V lässt die Arztpraxis neu renovieren (Vorsteuer 500 €) und in der Etage des Steuerberaters eine neue Zwischenwand einziehen (Vorsteuer 250 €). Außerdem lässt er die Außenfassade neu streichen (Vorsteuer 1.000 €). Höhe des Vorsteuerabzugs?" },
      { text: "Beispiel 10: Der Fensterbauer F aus Freiburg hat es übernommen, in dem Haus seines Kunden in Basel (Schweiz) neue Fenster einzubauen. Für die Herstellung der Fenster bezieht F im Inland Eingangsleistungen i. H. v. 10.000 € zzgl. 1.900 € USt. Höhe des Vorsteuerabzugs?" },
      { text: OHNE_LOESUNG + " Im Campus sind dieselben Fragen vollständig behandelt: die Option nach § 9 UStG und ihre Grenzen in den Originalfällen der Einheit 5, die Vorsteueraufteilung nach § 15 Abs. 4 UStG in Einheit 7, der unrichtige Steuerausweis nach § 14c UStG in Einheit 6." },
    ],
  },
  {
    id: "ust-bs-03",
    kapitel: "3",
    tag: "Tag 3",
    title: "Tag 3 – Steuerschuldnerschaft, Reihengeschäft, Ausfuhr und Einfuhr",
    thema: "Vierzehn Beispiele: § 13b UStG beim dänischen und beim norwegischen Anwalt, bei Bauleistungen und bei der 250er-Handy-Bestellung an der 5.000-Euro-Grenze; dreimal dieselben Heizkörper mit drei verschiedenen Antworten zum Reihengeschäft; und der Schweizer Warenverkehr verzollt gegenüber unverzollt",
    rechtsstand: "Stand 05/2025",
    quelle: "Beispielsammlung Tag 3 (Schröders)",
    verfasser: VERFASSER,
    normen: [
      "§ 13b Abs. 1, Abs. 2 Nr. 1, Nr. 4, Nr. 10, Abs. 5 UStG",
      "§ 3 Abs. 6a, Abs. 8 UStG", "§ 4 Nr. 1 Buchst. a, § 6 UStG", "§ 15 Abs. 1 Satz 1 Nr. 2 UStG",
      "§ 1 Abs. 1 Nr. 4 UStG", "§ 21 UStG",
    ],
    themen: ["Steuerschuldnerschaft", "Reverse Charge", "Bauleistungen", "Reihengeschäft", "Bewegte Lieferung", "Ausfuhrlieferung", "Einfuhrumsatzsteuer", "Verzollt und versteuert"],
    bloecke: [
      { typ: "titel", text: "Beispielsammlung Tag 3" },
      { text: "Beispiel 1: Unternehmer U aus Dortmund lässt sich in einem Rechtsstreit mit dem dänischen Kunden D am 10.9.26 von dem dänischen Rechtsanwalt DK vertreten. Das Honorar beträgt 2.000 €. Die Rechnung übersendet DK am 10.9.26 (Alternative: 10.11.26). Beurteilen Sie U!" },
      { text: "Abwandlung: Die Beratung erfolgt durch den Rechtsanwalt N aus Oslo (Norwegen). Beurteilen Sie U!" },
      { text: "Beispiel 2: Der Zimmermann Z lässt in seinem Werkstattgebäude durch die Baufirma B aus Bremen neue Zwischenwände einziehen. Wer ist Steuerschuldner?" },
      { text: "Abwandlung: … in seinem privaten EFH des Z." },
      { text: "Beispiel 3: Mobilfunkanbieter M bestellt beim Hersteller H 250 Handys zu je 30 €. Die erste Auslieferung erfolgt am 10.7.26 mit 125 Handys, die zweite am 10.8.26 mit 125 Handys. Wer ist Steuerschuldner?" },
      { text: "Beispiel 4: Kunde P (Privatmann aus Potsdam) bestellt Heizkörper beim Einzelhändler B (Berlin). B hat die Heizkörper nicht vorrätig und bestellt diese beim Großhändler H (Hamburg). H versendet die Heizkörper direkt an P. Liegt ein Reihengeschäft vor?" },
      { text: "Beispiel 5: Wie Beispiel 4, aber H liefert an B aus. P holt die Heizkörper bei B ab. Liegt ein Reihengeschäft vor?" },
      { text: "Beispiel 6: Wie Beispiel 4, aber H liefert an P aus, wo B die Heizkörper wie vereinbart noch einbaut. Liegt ein Reihengeschäft vor?" },
      { text: "Beispiel 7: Kunde P (Privatmann aus Potsdam) bestellt Heizkörper beim Einzelhändler B (Berlin). B hat die Heizkörper nicht vorrätig und bestellt diese beim Großhändler H (Hamburg). H versendet die Heizkörper direkt an P. Bestimmen Sie für alle Lieferungen den Ort!" },
      { text: "Beispiel 8: Wie Beispiel 7, aber P fährt die Heizkörper bei H holen. Bestimmen Sie für alle Lieferungen den Ort!" },
      { text: "Beispiel 9: Wie Beispiel 7, aber B fährt die Heizkörper bei H holen und bringt diese zu P. Bestimmen Sie für alle Lieferungen den Ort!" },
      { text: "Beispiel 10: U aus Freiburg verkauft einen Fernseher an C (Nichtunternehmer) aus Basel für 1.000 €. a) Versendung am 10.11.26 durch U (per DHL) b) Abholung durch C am 10.11.26 mit eigenem Pkw. Welche Lieferungen sind steuerfrei?" },
      { text: "Beispiel 11: Einzelhändler B aus Bern bestellt am 10.10.26 beim Großhändler F (Freiburg) 1 Tonne Bananen im Gesamtwert von netto 10.000 €. Da F nur noch 0,8 Tonnen vorrätig hat, ordert dieser am selben Tag noch die restlichen 0,2 Tonnen bei S (Stuttgart), mit der Weisung, dass S die Bananen direkt zu B versenden soll. S versendet die Bananen mit der Spedition Speed am 12.10.26 zu B und stellt dem F hierfür am 20.10.26 ordnungsgemäß 1.800 € in Rechnung. Die 0,8 Tonnen fährt B bereits am 11.10.26 mit eigenem LKW bei F holen. Speed stellt dem S für den Transport 350 € in Rechnung. Beurteilen Sie alle Beteiligten!" },
      { text: "Abwandlung: F holt die 0,2 Tonnen mit eigenem Pkw bei S ab und bringt diese am 12.10.26 zu B. Alle Unternehmer treten unter der Steuernummer ihres Heimatlandes auf." },
      { text: "Beispiel 12: B aus Basel lässt seinen Unternehmens-Pkw in der Werkstatt des U1 in Freiburg reparieren (ohne Material). B bringt den Pkw morgens am 10.10.26 nach Freiburg und holt ihn abends wieder ab. Beurteilen Sie U1!" },
      { text: "Abwandlung: B ist eine Privatperson!" },
      { text: "Beispiel 13: CH aus Bern verkauft U1 aus Freiburg 10 Tonnen Bananen. Vereinbart ist, dass CH den Transport und die Abfertigung zum freien Verkehr übernimmt („verzollt und versteuert“). Bei der Abfertigung zum freien Verkehr am 10.10.26 ist EUSt i. H. v. 10.000 € angefallen. Beurteilen Sie CH und U1!" },
      { text: "Abwandlung: Die Lieferung des CH erfolgt „unverzollt und unversteuert“." },
      { text: "Beispiel 14: Unternehmer S aus Stuttgart bestellt eine Maschine bei Maschinenhändler K aus Köln. K hat die Maschine nicht vorrätig und bestellt diese umgehend beim Hersteller B aus Basel. B stellt dem K die Ware in Basel (unverzollt und unversteuert) zur Verfügung. Ein Angestellter des K holt die Maschine am 30.5.26 in Basel ab. Der Angestellte lässt noch am selben Tag die Ware an der deutschen Grenze im Namen und für Rechnung seines Chefs zum freien Verkehr abfertigen (entstandene EUSt 750 €) und bringt sie anschließend zu S. In seiner Rechnung vom 15.6.26 rechnet K gegenüber S i. H. v. insgesamt 11.900 € ab. Beurteilen Sie K!" },
      { text: OHNE_LOESUNG + " Die Heizkörper-Reihe der Beispiele 4 bis 9 ist didaktisch der Kern dieses Tages: dreimal derselbe Sachverhalt, einmal versendet der Großhändler, einmal holt der Kunde beim Einzelhändler, einmal baut der Einzelhändler noch ein. Die vollständige Prüfung des Reihengeschäfts nach § 3 Abs. 6a UStG steht im Campus in den Originalfällen der Einheit 4 und im Kurzskript (Meurer)." },
    ],
  },
  {
    id: "ust-bs-04",
    kapitel: "4",
    tag: "Tag 4",
    title: "Tag 4 – Innergemeinschaftlicher Warenverkehr",
    thema: "Acht Beispiele mit Bananen und Tomaten: die innergemeinschaftliche Lieferung und der spiegelbildliche Erwerb, das innergemeinschaftliche Dreiecksgeschäft in zwei Richtungen, der Kleinunternehmer als Erwerber, das innergemeinschaftliche Verbringen in beide Richtungen und der Neuwagen, den eine Privatperson in Dänemark kauft und nach 10.000 Kilometern nach Polen weiterverkauft",
    rechtsstand: "Stand 05/2025",
    quelle: "Beispielsammlung Tag 4 (Schröders)",
    verfasser: VERFASSER,
    normen: [
      "§ 1a UStG", "§ 1b UStG", "§ 2a UStG", "§ 3 Abs. 1a UStG", "§ 3d UStG",
      "§ 4 Nr. 1 Buchst. b UStG", "§ 6a UStG", "§ 25b UStG", "§ 19 UStG",
    ],
    themen: ["Innergemeinschaftliche Lieferung", "Innergemeinschaftlicher Erwerb", "Dreiecksgeschäft", "USt-IdNr.", "Kleinunternehmer", "Innergemeinschaftliches Verbringen", "Neues Fahrzeug"],
    bloecke: [
      { typ: "titel", text: "Beispielsammlung Tag 4" },
      { text: "Beispiel 1: Der deutsche Unternehmer D aus Köln verkauft Bananen für 10.000 € an den französischen Unternehmer F aus Paris. Die Auslieferung erfolgt durch D am 24.7.26. Die Rechnung stellt D am 15.8.26 aus. Alle Beteiligten treten unter der gültigen USt-IdNr. ihres Heimatlandes auf. Beurteilen Sie D!" },
      { text: "Beispiel 2: Der französische Unternehmer F aus Paris verkauft Bananen für 10.000 € an den deutschen Unternehmer D aus Köln. Die Auslieferung erfolgt durch F am 24.7.26. Die Rechnung stellt F am 15.8.26 aus. Alle Beteiligten treten unter der gültigen USt-IdNr. ihres Heimatlandes auf. Beurteilen Sie D!" },
      { text: "Abwandlung: D tritt mit seiner belgischen USt-IdNr. auf!" },
      { text: "Beispiel 3: Der Kölner Unternehmer K hat beim D aus Düsseldorf 1t Tomaten im Wert von 15.000 € geordert. Da D die Tomaten nicht vorrätig hat, bestellt er diese zum Preis von 14.000 € beim Großhändler P aus Paris. P liefert die Tomaten mit eigenem LKW am 10.10.26 direkt nach Köln und übersendet dem D noch am gleichen Tag eine Rechnung. Alle Beteiligten treten unter der gültigen USt-IdNr. ihres Heimatlandes auf. Beurteilen Sie D!" },
      { text: "Abwandlung: D geht die Tomaten – wie vereinbart – bei P ab Werk holen und bringt diese anschließend frei Haus direkt zu K nach Köln. Dabei tritt D gegenüber allen Beteiligten mit seiner französischen USt-IdNr. auf. K hingegen verwendet seine deutsche USt-IdNr." },
      { text: "Beispiel 4: Der Pariser Unternehmer P hat beim D aus Düsseldorf 1t Bananen im Wert von 15.000 € geordert. Da D die Bananen nicht vorrätig hat, bestellt er diese zum Preis von 14.000 € beim Großhändler K aus Köln. D holt die Bananen mit eigenem LKW am 10.10.26 bei K ab und bringt sie unmittelbar nach Paris. Alle Beteiligten treten unter der gültigen USt-IdNr. ihres Heimatlandes auf. Beurteilen Sie K und D!" },
      { text: "Beispiel 5: Der deutsche Kleinunternehmer K (Köln) kauft beim schwedischen Möbelhändler ILEA aus Stockholm (kein Kleinunternehmer) eine neue Büroeinrichtung für sein Unternehmen für 12.000 € und verwendet seine gültigen deutsche USt-IdNr.; K bezieht sonst keine Ware aus dem Ausland. Umsatzsteuerrechtliche Würdigung?" },
      { text: "Beispiel 6: Elektronikhändler U (Freiburg) transportiert am 10.10.26 100 Playstation 4 (Netto-Einkaufspreis 10.000 €) aus seinem Lager in Freiburg in sein Lager in Wien. Darüber erstellt er am 11.10.26 eine „Pro-forma-Rechnung“. Umsatzsteuerrechtliche Konsequenzen für U?" },
      { text: "Beispiel 7: Elektronikhändler U (Freiburg) transportiert am 10.10.26 100 Playstation 5 (Netto-Einkaufspreis 10.000 €) aus seinem Lager in Wien in sein Lager in Freiburg. Darüber erstellt er am 11.10.26 eine „Pro-forma-Rechnung“. Umsatzsteuerrechtliche Konsequenzen für U?" },
      { text: "Beispiel 8: Das dänische Autohaus DK (Kopenhagen) veräußert am 10.10.25 einen Audi A1 (Erstzulassung 1.10.25; Kilometerstand 10km) für 15.000 € an den Angestellten F aus Flensburg. Umsatzsteuerrechtliche Konsequenzen für F?" },
      { text: "Fortsetzung Beispiel 8: Nach gefahrenen 10.000km hat F genug und verkauft das Auto am 1.2.26 an den polnischen Privatmann (Danzig) für 10.000 € weiter. Umsatzsteuerrechtliche Konsequenzen für F?" },
      { text: OHNE_LOESUNG + " Im Campus stehen die innergemeinschaftliche Lieferung und der Erwerb mit allen Nachweispflichten sowie das Dreiecksgeschäft nach § 25b UStG vollständig in den Originalfällen der Einheit 8 und im Kurzskript (Meurer); der Erwerb neuer Fahrzeuge durch Nichtunternehmer nach §§ 1b, 2a UStG ebenfalls dort." },
    ],
  },
  {
    id: "ust-bs-05",
    kapitel: "5",
    tag: "Tag 5",
    title: "Tag 5 – Fernverkauf, Kommission, Differenzbesteuerung, Änderung der Bemessungsgrundlage",
    thema: "Sieben Beispiele: der Versandhändler, der die Lieferschwelle mitten im Jahr überschreitet; das Kommissionsgeschäft mit Gutschrift und Rückgabe; der Wohnmobilkauf mit Inzahlungnahme als tauschähnlicher Umsatz; die Differenzbesteuerung über die Grenze; und drei Fälle zur Änderung der Bemessungsgrundlage – Skonto, Insolvenz mit Schlussverteilung und Rücktritt gegenüber Rücklieferung",
    rechtsstand: "Stand 05/2025",
    quelle: "Beispielsammlung Tag 5 (Schröders)",
    verfasser: VERFASSER,
    normen: [
      "§ 3c UStG", "§ 3 Abs. 3, Abs. 12 UStG", "§ 25a UStG", "§ 17 Abs. 1, Abs. 2 Nr. 1 UStG",
      "§ 10 Abs. 1, Abs. 2 UStG", "§ 14c UStG",
    ],
    themen: ["Innergemeinschaftlicher Fernverkauf", "Lieferschwelle", "Kommission", "Tausch mit Baraufgabe", "Differenzbesteuerung", "Skonto", "Uneinbringlichkeit", "Rücklieferung"],
    bloecke: [
      { typ: "titel", text: "Beispielsammlung Tag 5" },
      { text: "Beispiel 1: Der in Aachen ansässige Internetversandhandel Alazon versendet Ware an österreichische Privatpersonen im Jahr 25 für 8.000 € und in 26 in den Monaten Januar bis Juni für insg. 9.000 €. Anfang Juli ordert die niederländische Privatperson N einen Fernseher für 3.500 €. [Hinweis: Steuersatz in Deutschland: 19 %; Österreich: 20 %; Niederlande: 21 %] Umsatzsteuerrechtliche Würdigung?" },
      { text: "Beispiel 2: U1 (Hamburg) und U2 (Berlin) vereinbaren, dass U2 für U1 im eigenen Namen, aber auf Rechnung des U1 Küchenmaschinen verkaufen soll (Provision 10%). U1 bringt am 9.9.26 zwei Küchenmaschinen des Typs Thermomax zu U2. Am 10.10.26 verkauft U2 eine davon für 1.190 € an B aus Bremen. Den Kaufpreis leitet U2 nach Abzug seiner Provision an U1 weiter. Die zweite Maschine geht unverkauft am 23.12.26 zurück an U1. U2 erteilt dem U1 am 10.10.26 eine Gutschrift (Auszug):" },
      { typ: "tabelle", spalten: ["Position", "Betrag"], zeilen: [
        ["vereinnahmter Preis", "1.190,00 €"],
        ["abzgl. Vermittlung", "119,00 €"],
        ["(davon netto)", "100,00 €"],
        ["(davon USt)", "19,00 €"],
        ["verbleiben", "1.071,00 €"],
      ] },
      { text: "Beurteilung des U2! (Die Gutschrift steht in der Quelle als Auszug mit eingerückten Teilbeträgen; die Tabelle gibt diese Aufstellung in derselben Reihenfolge wieder.)" },
      { text: "Beispiel 3: Der Wohnmobilverkäufer W verkauft im Inland an den Rentner R ein neues Wohnmobil (vereinbarter Verkaufspreis 47.600 €) und nimmt dessen altes Wohnmobil in Zahlung (Anrechnung auf den Kaufpreis = subjektiver Wert 20.000 €). R bezahlt den Restbetrag (27.600 €) in bar. Nach einem Monat verkauft W das gebrauchte Wohnmobil an den Künstler K für 21.000 €. Beurteilen Sie W!" },
      { text: "Beispiel 4: Wohnwagenverkäufer NL (Renesse; NL) kauft für 19.000 € einen Wohnwagen vom Privatmann P (Domburg, NL). Unter Anwendung der Differenzbesteuerung verkauft NL diesen für 20.000 € an den deutschen Wohnwagenverkäufer D (Kleve), der diesen wiederum für 22.000 € an den Hobbygärtner H (Krefeld) verkauft. Beurteilen Sie alle Umsätze!" },
      { text: "Abwandlung: NL verzichtet bei dem Weiterverkauf an D auf die Anwendung der Differenzbesteuerung." },
      { text: "Beispiel 5: Maschinenhersteller U (Frankfurt) verkauft am 10.10.26 eine Fertigungsmaschine an den Unternehmer Z für 200.000 € zzgl. 38.000 € USt. Z zahlt am 1.11.26 vereinbarungsgemäß unter Abzug von 5% Skonto. Umsatzsteuerrechtliche Konsequenzen für U?" },
      { text: "Beispiel 6: Herrenmodenhersteller U (München) verkauft am 10.10.26 100 Herrenanzüge an die Kaufhauskette K (Wuppertal) (100.000 € zzgl. 19.000 € USt auf Rechnung). Am 23.12.26 erfährt U, dass K insolvent ist. Nach Abschluss Insolvenzverfahrens erhält U am 23.12.27 im Rahmen der Schlussverteilung noch 595 €. Umsatzsteuerrechtliche Konsequenzen für U?" },
      { text: "Beispiel 7: Maschinenhersteller U (Düsseldorf) liefert dem Fabrikanten K (Köln) am 10.10.26 eine Fertigungsmaschine für 200.000 € zzgl. 38.000 € USt. Da die Maschine nicht wie versprochen funktioniert, tritt K am 11.11.26 vom Kaufvertrag zurück. U holt die Maschine am 16.11.26 bei K ab. Sein Geld bekommt K – unter Abzug einer Nutzungsvergütung i. H. v. 11.900 € und einem Abzug für Beschädigung i. H. v. 10.000 € – am 23.12.26 wieder (216.100 €). Umsatzsteuerrechtliche Konsequenzen für U?" },
      { text: "Abwandlung: Am 11.11.26 merkt K, dass die Maschine zu klein ist für seine Produktion und vereinbart deshalb mit U, dass dieser die Maschine zum gemeinen Wert von 216.100 € zurücknimmt. U holt die Maschine am 6.12.26 ab. U zahlt den K am 2.1.27 aus. Umsatzsteuerrechtliche Konsequenzen für U?" },
      { text: OHNE_LOESUNG + " Der Gegensatz, auf den Beispiel 7 und seine Abwandlung zielen – Rückgängigmachung der Lieferung gegenüber Rücklieferung als eigenem Umsatz –, ist im Campus in den Originalfällen der Einheit 6 und im Kurzskript (Meurer) vollständig ausgearbeitet; ebenso die Differenzbesteuerung nach § 25a UStG und der Fernverkauf nach § 3c UStG." },
    ],
  },
  {
    id: "ust-bs-06",
    kapitel: "6",
    tag: "Tag 6",
    title: "Tag 6 – Unentgeltliche Wertabgaben und Vorsteuerberichtigung",
    thema: "Fünfzehn Beispiele: die Zuordnung zum Unternehmen bei Anschaffung mit sofortiger Schenkungsabsicht; der Pkw mit 25 Prozent unternehmerischer Nutzung gegenüber dem Gebäude mit denselben 25 Prozent und dem Zuordnungsverbot des § 15 Abs. 1b UStG; Geschenke über und unter der Grenze; und neun Berichtigungsfälle von der Praxis, die vom Hausarzt an den Tierarzt geht, bis zum Studenten, der seinen Passat später zu 90 Prozent unternehmerisch nutzt",
    rechtsstand: "Stand 05/2025",
    quelle: "Beispielsammlung Tag 6 (Schröders)",
    verfasser: VERFASSER,
    normen: [
      "§ 3 Abs. 1b, Abs. 9a UStG", "§ 10 Abs. 4 UStG", "§ 15 Abs. 1, Abs. 1a, Abs. 1b, Abs. 2, Abs. 4 UStG",
      "§ 15a Abs. 1 bis 8 UStG", "§ 4 Nr. 5 Buchst. b EStG",
    ],
    themen: ["Zuordnungsentscheidung", "Unentgeltliche Wertabgabe", "Geschenkegrenze", "Gemischt genutztes Gebäude", "Vorsteuerberichtigung", "Berichtigungszeitraum", "Verwendungsabsicht"],
    bloecke: [
      { typ: "titel", text: "Beispielsammlung Tag 6" },
      { text: "Beispiel 1: Ein Unternehmer kauft am 30.10.26 ein Auto (23.800 €) für sein Unternehmen. Am 01.11.26 schenkt er es seiner Tochter? Vorsteuerabzug dem Grunde nach gegeben?" },
      { text: "Beispiel 2: Der Frittenbudenbesitzer F kauft 100kg Kartoffeln ein (Vorsteuer 190 €). Bei Leistungsbezug beabsichtigt er 95kg für seine Frittenbude und 5kg für seinen privaten Haushalt zu verwenden. Höhe des Vorsteuerabzugs?" },
      { text: "Beispiel 3: Steuerberater S erwirbt einen Pkw für 50.000 € zzgl. 9.500 € USt. Er nutzt den Pkw nachweislich (Fahrtenbuch) zu 25% für das Unternehmen und 75% für private Zwecke. Aus der laufenden Unterhaltung entstehen Kosten i. H. v. 10.000 € zzgl. 1.900 € USt. Nach einem Jahr schenkt er den Pkw seinem Sohn (Netto-EKP 25.000 €)." },
      { text: "Beispiel 4: Steuerberater S lässt 26 ein Gebäude für 300.000 € zzgl. 57.000 € USt errichten. Er nutzt das Gebäude zu 25% für das Unternehmen und 75% für private Zwecke. Aus der laufenden Unterhaltung entstehen Kosten i. H. v. 10.000 € zzgl. 1.900 € USt. Nach einem Jahr schenkt er das Grundstück seinem Sohn (Netto-EKP 350.000 €)." },
      { text: "Abwandlung: Herstellung in 2010" },
      { text: "Beispiel 5: U kauft Terminkalender (jeweils 75 €) in der Absicht diese als Geschenk an Kunden zu überreichen. Entnahme i. S. d. § 3 (1b) UStG?" },
      { text: "Abwandlung: Terminkalender (jeweils 30 €)" },
      { text: "Beispiel 6: Der Autohändler A verlost unter seinen Kunden einen Motorroller (Netto-EKP 5.000 €) a) Den Motorroller hatte A bereits mit der Absicht erworben, diesen im Rahmen der Verlosung auszukehren b) A entnimmt den Motorroller aus dem bestehenden Sortiment. Entnahme i. S. d. § 3 (1b) UStG?" },
      { text: "Beispiel 7: Der Stuckateur S (Stuttgart) hat eine Verputzmaschine (10.000 € zzgl. 1.900 € USt) am 2.1.26 erworben und die Vorsteuer rechtmäßig geltend gemacht. Es sind im Jahr 26 laufende Ausgaben mit Vorsteuerabzug (Reparatur, Wartung) i. H. v. netto 2.000 € angefallen, sowie Versicherungsbeiträge von 250 €. a) S überlässt die Maschine für 2 Monate (Sep – Okt) unentgeltlich an seinen Sohn b) neben der Überlassung der Maschine für 2 Monate, stellt S seinem Sohn auch noch einen Handwerker (Arbeitslohn 2 Monate insg. 2.400 €) zur Verfügung, der die Innenputzarbeiten für den Sohn durchführt. Das Material stellt der Sohn. Höhe der Umsatzsteuer?" },
      { text: "Beispiel 8: wie Beispiel 6, nur wird anstatt des Motorrollers eine Luxusreise (Netto-EKP 5.000 €) verlost. Entnahme i. S. d. § 3 (9a) UStG?" },
      { text: "Beispiel 9: Die A-GmbH (Berlin) kauft am 10.10.26 einen neuen Porsche Carrera für marktübliche 59.500 € um diesen an ihren Gesellschafter-Geschäftsführer A weiter zu veräußern. Der Weiterverkauf erfolgt am 11.10.26 zu einem Kaufpreis i. H. v. 47.600 €. Höhe der Umsatzsteuer für die A-GmbH?" },
      { text: "Beispiel 10: Der Vermieter V lässt in Köln ein Geschäftshaus herstellen. V beabsichtigt das Haus an die Versicherungsgesellschaft Hak zu vermieten. Die Fertigstellung erfolgt am 1.2.26. Die in Rechnung gestellte Umsatzsteuer für die Herstellung beträgt 57.000 €. Ab dem 1.2.26 erfolgt die Vermietung an Hak. Schon zum 1.9.26 zieht Hak wieder aus und V vermietet das Geschäftshaus an die Exportfirma Expo, die ihre Waren ausschließlich ins Drittland versendet. Höhe Vorsteuerabzug des V?" },
      { text: "Beispiel 11: Student S aus Aachen kauft sich während seines Studiums von einer Erbschaft in 26 einen VW Passat (Vorsteuern 3.000 €). Nach Abschluss des Studiums ist S als selbständiger Informatiker tätig und verwendet den Pkw in 27 zu 90% für sein Unternehmen. Höhe Vorsteuerabzug?" },
      { text: "Beispiel 12: V vermietet seit dem 1.9.14 ein Haus an einen Hausarzt für dessen Praxis (Vorsteuern aus der Herstellung insgesamt 50.000 €). Am 11.11.25 lässt er das Haus neu verklinkern (Vorsteuern 10.000 €). Ab dem 1.10.26 vermietet er das Haus an einen Tierarzt für dessen Praxis. Höhe Vorsteuerabzug und der Berichtigung?" },
      { text: "Beispiel 13: Bauträger B erbaut ein Wohnhaus, in der Absicht dieses an einen Kunden für dessen Wohnzwecke zu veräußern (Vorsteuern 57.000 €). Nachdem der Kunde sich kurzfristig ins Ausland abgesetzt hat, verkauft er das Haus an den Raumausstatter R, der das Haus als Ausstellungsobjekt verwenden möchte (Verkauf am 1.2.26 unter Ausübung der Option). Höhe Vorsteuerabzug und der Berichtigung?" },
      { text: "Beispiel 14: Zahnarzt Z kauft am 01.10.25 ein neues CEREC-Gerät (Vorsteuern 5.000 €). Er beabsichtigt dieses i. H. v. 10% für seine steuerfreien Heilbehandlungen und ansonsten für seine steuerpflichtigen Zahnlaborleistungen zu verwenden. Nach einer negativen Rentabilitätsstudie verkauft er das Gerät zum 31.12.26 für 23.800 € wieder (Verwendung in 26 weiterhin für 10% steuerfreie Umsätze). Höhe Vorsteuerabzug und der Berichtigung?" },
      { text: "Beispiel 15: wie Beispiel 4, ab dem 1.1.27 nutzt S das Gebäude nur noch zu 15% für unternehmerische Zwecke. Höhe Vorsteuerabzug und der Berichtigung?" },
      { text: OHNE_LOESUNG + " Der Gegensatz der Beispiele 3 und 4 ist der Kern dieses Tages: Beim Pkw mit 25 % unternehmerischer Nutzung besteht ein Zuordnungswahlrecht, beim Grundstück verbietet § 15 Abs. 1b UStG den Vorsteuerabzug für den privat genutzten Teil. Die vollständige Prüfung samt Berichtigung nach § 15a UStG steht im Campus in den Originalfällen der Einheit 7 und im Kurzskript (Meurer)." },
    ],
  },
  {
    id: "ust-bs-07",
    kapitel: "7",
    tag: "Tag 7",
    title: "Tag 7 – Reiseleistungen, Geschäftsveräußerung, Gesellschaftsverhältnisse, Kleinunternehmer",
    thema: "Sechs Beispiele: die Pauschalbahnreise nach Berlin und – als Abwandlung – nach Zürich mit 75 Prozent der Strecke im Gemeinschaftsgebiet; die Einbringung eines Einzelunternehmens ohne das Grundstück, das zurückbehalten und vermietet wird; die OHG-Gründung mit Bareinlage, Betriebseinbringung und Lastenkran mit Zuzahlung; Geschäftsführung durch Komplementär und Kommanditist; Gesellschaftervergütungen in Gewinn-, Verlust- und Nulljahren; und der Arzt, dessen Vortragsumsätze über die Kleinunternehmergrenze steigen",
    rechtsstand: "Stand 05/2025",
    quelle: "Beispielsammlung Tag 7 (Schröders)",
    verfasser: VERFASSER,
    normen: [
      "§ 25 UStG", "§ 1 Abs. 1a UStG", "§ 2 Abs. 1, Abs. 2 Nr. 1 UStG", "§ 19 UStG",
      "§ 3 Abs. 1b, Abs. 9a UStG", "§ 10 Abs. 1 UStG", "§§ 161 Abs. 2, 114 ff. HGB",
    ],
    themen: ["Reiseleistung", "Margenbesteuerung", "Geschäftsveräußerung im Ganzen", "Betriebsaufspaltung", "Gesellschafterbeitrag", "Sonderentgelt", "Geschäftsführungsleistung", "Kleinunternehmer"],
    bloecke: [
      { typ: "titel", text: "Beispielsammlung Tag 7" },
      { text: "Beispiel 1: Das Touristikunternehmen Holiday (Frankfurt) bietet eine Pauschalbahnreise nach Berlin an. Der Preis beträgt 600 € (50 Teilnehmer (Privatpersonen)). Reisevorleistungen: Bahn brutto 5.000 €, Hotel und Verpflegung brutto 20.000 €. Beurteilen Sie Holiday!" },
      { text: "Abwandlung: Die Bahnreise erfolgt nach Zürich (Schweiz): das Hotel liegt in Zürich und von der Strecke Frankfurt – Zürich und zurück liegen 75 % im Gemeinschaftsgebiet." },
      { text: "Beispiel 2: U bringt zum 1.1.26 sein bisheriges Einzelunternehmen – mit Ausnahme des Geschäftsgrundstücks samt Gebäude – in die U-GmbH gegen Gewährung von Gesellschaftsrechten ein (U erhält 100% der Anteile). Das Grundstück vermietet er an die U-GmbH, die das Unternehmen fortführt." },
      { text: "Erweiterung: Bis zum 30.6.26 ist der außenstehende P Geschäftsführer der GmbH. Ab dem 1.7.26 wird P entlassen und U übernimmt die Geschäftsführung selbst." },
      { text: "Beispiel 3: X, Y und Z gründen die XYZ-OHG (Bauunternehmung). X zahlt 500.000 €, Y bringt sein bisheriges Bauunternehmen mit sämtlichen Aktiva und Passive in die OHG ein (Wert 500.000 €) und Z einen Lastenkran aus seinem Einzelunternehmen (Wert 500.000 €, Zuzahlung OHG 95.000 €). Für die Gründungsberatung entstehen der OHG Steuerberatungskosten i. H. v. 23.800 €. Beurteilen Sie alle Umsätze!" },
      { text: "Beispiel 4: Die XY-KG besteht aus dem Komplementär X und dem Kommanditisten Y. Der Kommanditist Y ist lediglich im Bereich Werbung für die Geschäftsführung tätig. X hingegen ist gem. §§ 161 Abs. 2 i. V. m. § 114 ff. HGB für die Gesamtbelange der KG geschäftsführend verantwortlich. Zwischen Y und der XY-KG ist ein Arbeitsvertrag geschlossen, der u. a. Urlaubsanspruch, feste Arbeitszeiten, Lohnfortzahlung im Krankheitsfall und Weisungsgebundenheit regelt. Sowohl X als auch Y werden entsprechend ihrer Tätigkeit von der XY-KG vergütet. Beurteilen Sie X und Y!" },
      { text: "Beispiel 5: Die AB-OHG zahlt ihren Gesellschaftern A und B (Beteiligung zu jeweils 50%) eine Vergütung von jeweils 100.000 €, die sich wie folgt bestimmt:" },
      { text: "Variante a) Die AB-OHG hat einen Gewinn von 200.000 € erwirtschaftet, der nach dem Gesellschaftsvertrag zu gleichen Teilen auf die Gesellschafter aufzuteilen ist." },
      { text: "Variante b) Die AB-OHG hat einen Verlust von 50.000 € erlitten. Der Gesellschaftsvertrag sieht auch in Verlustjahren eine Vergütung an die Gesellschafter vor." },
      { text: "Variante c) Die AB-OHG hat ein Ergebnis von 0 € erzielt. Bei der Gewinnermittlung wurden die Vergütungen als Aufwand gebucht. Beurteilen Sie A und B!" },
      { text: "Beispiel 6: Arzt A führt seit Jahren hauptsächlich steuerfreie Umsätze aus. Regelmäßig hält er auf Ärztekongressen Vorträge und erzielte dabei folgende Umsätze (entspricht der jeweiligen Prognose zu Beginn eines Jahres): 25: 10.000 € · 26: 29.000 € · 27: (geschätzt) 7.500 €. Ist A Kleinunternehmer in den Jahren 25-27?" },
      { text: OHNE_LOESUNG + " Die Margenbesteuerung nach § 25 UStG, die Geschäftsveräußerung im Ganzen nach § 1 Abs. 1a UStG und die Abgrenzung von Gesellschafterbeitrag und Sonderentgelt stehen im Campus vollständig in den Originalfällen der Einheiten 3 und 8 sowie im Kurzskript (Meurer); die Kleinunternehmergrenzen in Einheit 2." },
    ],
  },
  {
    id: "ust-bs-08",
    kapitel: "8",
    tag: "Übersicht PKW",
    title: "Übersicht – Umsatzbesteuerung bei PKW (Abschn. 15.23 UStAE)",
    thema: "Das einzige Blatt dieser Reihe, das keine Fälle stellt, sondern eine Antwort gibt: die Gegenüberstellung von unentgeltlicher Entnahme und entgeltlicher Überlassung als tauschähnlicher Umsatz – zwei verschiedene Bemessungsgrundlagen, zwei verschiedene Abschläge, zwei verschiedene Verteilungszeiträume bei der Fahrtenbuchmethode",
    rechtsstand: "Stand 03/2025",
    quelle: "Umsatzbesteuerung bei PKW (Schröders), Abschn. 15.23 UStAE",
    verfasser: VERFASSER,
    normen: [
      "§ 3 Abs. 9a Nr. 1 UStG", "§ 3 Abs. 12 Satz 2 UStG",
      "§ 10 Abs. 2 Satz 2 und 3 UStG", "§ 10 Abs. 4 Satz 1 Nr. 2, Satz 2 UStG",
      "Abschn. 15.23 UStAE",
    ],
    themen: ["Firmenwagen", "Unentgeltliche Wertabgabe", "Tauschähnlicher Umsatz", "Ein-Prozent-Regelung", "Fahrtenbuch", "Bemessungsgrundlage", "Elektrofahrzeug"],
    bloecke: [
      { typ: "titel", text: "Umsatzbesteuerung bei PKW (Abschn. 15.23 UStAE)" },
      { typ: "tabelle", spalten: ["Entnahme i. S. d. § 3 (9a) Nr. 1 UStG", "Entgeltlichkeit = Vermietung (tauschähnlicher Umsatz § 3 (12) S. 2 UStG)"], zeilen: [
        ["Welche Fälle? • Einzelunternehmer oder Gesellschafter (einer PersG oder KapG) nutzt PKW für Privatfahrten [Wohnung – Betrieb = unternehmerisch]", "Welche Fälle? • Arbeitnehmer oder unselbständiger Geschäftsführer einer KapG nutzt PKW laut Arbeitsvertrag für Privatfahrten und Wohnung – Arbeit"],
        ["BMG – § 10 Abs. 4 S. 1 Nr. 2, S. 2 UStG", "BMG – § 10 Abs. 2 Satz 2 und 3 UStG"],
        ["• „1%-Regelung“ mtl., wenn betriebliche Nutzung > 50% und dort angewandt; Abschlag von 20% für nichtvorsteuerbelastete Kosten; = NETTOwert = BMG", "• „1%-Regelung“ mtl., wenn lohnsteuerlich auch angesetzt; KEIN Abschlag von 20% für nichtvorsteuerbelastete Kosten; + 0,03% mtl. pro E-km Wohnung – Arbeit = BRUTTOwert / 1,19 = BMG"],
        ["• Fahrtenbuchregelung; nur Aufwendungen mit Vorsteuer; Verteilung AK auf 5 Jahre; = NETTOwert = BMG", "• Fahrtenbuchregelung; alle Aufwendungen; Verteilung AK auf 8 Jahre Nutzungsdauer; = NETTOwert = BMG"],
        ["kein Abschlag für Hybrid-/Elektrofahrzeug", "kein Abschlag für Hybrid-/Elektrofahrzeug"],
      ] },
      { text: "Diese Tabelle ist eine Rekonstruktion der Spaltenordnung: Die Quelle stellt beide Fallgruppen zweispaltig gegenüber, die Textextraktion gibt die Spalten blockweise nacheinander aus. Inhalt und Reihenfolge sind unverändert; inhaltlich ist nichts hinzugefügt." },
      { text: "Die drei Unterschiede, auf die die Übersicht hinauswill: Bei der Entnahme ist die Bemessungsgrundlage ein Nettowert nach § 10 Abs. 4 UStG, aus dem die nichtvorsteuerbelasteten Kosten pauschal mit 20 % herausgerechnet werden dürfen; bei der Überlassung an Arbeitnehmer ist der lohnsteuerliche Wert ein Bruttowert, aus dem die Umsatzsteuer herauszurechnen ist, und ein Abschlag findet gerade nicht statt. Bei der Fahrtenbuchmethode werden die Anschaffungskosten im ersten Fall auf fünf Jahre verteilt (Vorsteuerberichtigungszeitraum), im zweiten auf acht Jahre (ertragsteuerliche Nutzungsdauer). Der Abschlag für Hybrid- und Elektrofahrzeuge, den das Ertragsteuerrecht kennt, gilt in beiden Fällen umsatzsteuerlich nicht." },
    ],
  },
];

export default ustBeispielsammlung;
