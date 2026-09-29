/* GewSt-Übungsfälle 2026/2027 (K2, Gewerbesteuer) – Fallsammlung Nöthen.

   Die Fallsammlung wird als reines Aufgaben-PDF ausgegeben; im freigegebenen
   Ordner liegt kein Lösungsteil. Deshalb steht hier nur, was die Quelle
   hergibt: Sachverhalt, Aufgabenstellung und Bearbeitungshinweise im Wortlaut.
   Der Lösungsblock sagt das ausdrücklich, damit keine Musterlösung unterstellt
   wird, die es in der Quelle nicht gibt.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle. */

export const gewstUebungsfaelleQuelle = {
  reihe: "Fallsammlung GewSt · Markus Nöthen",
  stand: "Rechtsstand 2025",
  didaktik: [
    "Die Fallsammlung begleitet die Gewerbesteuer-Termine des Lehrgangs und arbeitet die Ermittlung von Gewerbeertrag, Messbetrag und Abschlusszahlung an vier aufeinander aufbauenden Fallgestaltungen ab.",
    "Zum freigegebenen Aufgaben-PDF liegt im Ordner kein Lösungsteil. Die Fälle stehen hier deshalb bewusst ohne Musterlösung – es wurde nichts ergänzt, was nicht aus der Quelle stammt.",
    "Die allgemeinen Bearbeitungshinweise der Quelle stehen bei dem Fall, zu dem sie gehören.",
  ],
};

const OHNE_LOESUNG = { text: "Zu diesem Fall liegt im freigegebenen Ordner kein Lösungsteil vor. Es wurde bewusst keine Musterlösung ergänzt, die nicht aus der Quelle stammt. Sobald der Lösungsteil vorliegt, wird er hier wortlautgetreu nachgetragen." };

const HINWEISE_MN = { text: "Hinweise der Quelle: MN wünscht in 2025 eine möglichst niedrige steuerliche Belastung. Die Gewinnermittlung erfolgt gemäß § 4 Abs. 1 EStG. Cent-Beträge sind auf volle Euro abzurunden (bis 49 Cent) bzw. aufzurunden (ab 50 Cent). Umsatzsteuerliche Auswirkungen sind nicht zu beurteilen. Eventuell erforderliche Nachweise, Rechnungen und Bescheinigungen sind ordnungsgemäß, soweit sich aus dem Sachverhalt nichts Gegenteiliges ergibt." };

export const gewstUebungsfaelle = [
  {
    id: "gewst-uf-01",
    termin: 1,
    title: "Fall 1 – Mark Nehring: Spedition in Köln, Hinzurechnungen und Beteiligungen",
    thema: "Von den vorläufigen Einkünften zur Gewerbesteuer-Abschlusszahlung – Vorauszahlungen, Mieten, Zinsen, Rentenverpflichtung und zwei GmbH-Beteiligungen",
    rechtsstand: "Rechtsstand 2025",
    quelle: "Fallsammlung GewSt (Nöthen) · Fall 1",
    verfasser: "Markus Nöthen",
    normen: ["§ 2 GewStG", "§ 7 GewStG", "§ 8 Nr. 1 GewStG", "§ 9 Nr. 1 GewStG", "§ 9 Nr. 2a GewStG", "§ 9 Nr. 7 GewStG", "§ 11 GewStG", "§ 16 GewStG", "§ 4 Abs. 1 EStG", "§ 4 Abs. 5b EStG", "§ 3 Nr. 40 EStG", "§ 3c Abs. 2 EStG", "§ 233a AO"],
    themen: ["Gewerbesteuerpflicht", "Vorauszahlungen", "Miet- und Pachtzinsen", "Entgelte für Schulden", "Nachzahlungszinsen", "Schachtelbeteiligung", "Streubesitz", "Abschlusszahlung"],
    sachverhalt: [
      { text: "Mark Nehring (MN) hat seinen Wohnsitz in Köln (Hebesatz 475 %) und unterhält in Köln eine Spedition. Seine Einkünfte i. S. d. EStG betragen vorläufig 500.000 €. Folgende Sachverhalte wurden noch nicht, oder aber wie angegeben berücksichtigt:" },
      { typ: "titel", text: "a) Aufwendungen" },
      { text: "MN hat in 2025 pro Quartal 5.000 € Gewerbesteuer-Vorauszahlungen geleistet und als Aufwand gebucht. Weitere Konsequenzen wurden noch nicht gezogen." },
      { text: "Ferner hat MN Mieten für eine angemietete Lagerhalle in Köln (Einheitswert 250.000 €) über monatlich 10.000 € zzgl. 1.900 € USt als Aufwand bzw. VSt gebucht. Von der Miete entfallen monatlich 1.000 € auf die Anmietung einer Krananlage. 50 € pro Monat von der Miete entfallen auf die Übernahme der Gebäudeversicherung, zu der sich MN vertraglich verpflichtet hat." },
      { text: "Ferner hat MN in 2025 „150.00 €“ Zinsen als Aufwand gebucht (so in der Quelle). Außerdem wurden 1.000 € Zinsen i. S. d. § 233a AO zur Gewerbesteuer als Aufwand bei MN erfasst. Weitere Konsequenzen außer den genannten hat MN nicht gezogen." },
      { typ: "titel", text: "b) Erwerb Grundstück Eifelstraße 20" },
      { text: "MN hatte mit Kaufvertrag vom 11.11.2024 das unbebaute Grundstück Eifelstraße 20 (Einheitswert 400.000 €) in Köln erworben. Übergang Nutzen und Lasten erfolgte zum 01.12.2024. Im Gegenzug verpflichtete sich MN zur Zahlung einer lebenslangen Rente über 1.000 € monatlich an den Verkäufer V. Der Rentenbarwert am 31.12.2024 lag bei 220.000 €, der Rentenbarwert am 31.12.2025 bei 216.500 €. Die bilanzielle Behandlung durch MN erfolgte stets zutreffend. MN hat in 2025 Grundsteuer für das o. g. Grundstück über 10.000 € als Aufwand gebucht und gezahlt." },
      { typ: "titel", text: "c) Beteiligung X-OHG" },
      { text: "MN ist mit 20 % an der X-OHG beteiligt, die auch eine Spedition in Köln unterhält. Für das Jahr 2025 wurde für MN ein anteiliger Verlust über 20.000 € festgestellt. Die bilanzielle Abbildung erfolgte zutreffend." },
      { typ: "titel", text: "d) Beteiligung A-GmbH" },
      { text: "MN ist seit Gründung des Betriebs mit 25 % an der A-GmbH beteiligt, die Sitz und Geschäftsleitung in Bonn hat. Die Beteiligung wurde zutreffend als Anlagevermögen bilanziert. Zur Finanzierung der Beteiligung hatte MN ein Darlehen über 20.000 € aufgenommen; die anteiligen Zinsen für 2025 von 500 € wurden als Aufwand gebucht. Die bilanzielle Behandlung des Darlehens ist nicht zu beanstanden. Im November 2025 hat MN eine Dividende von der A-GmbH über 5.890 € erhalten und gebucht: „Bank 5.890 € an Beteiligungsertrag 5.890 €“. Weitere Konsequenzen wurden von MN noch nicht gezogen." },
      { typ: "titel", text: "e) Beteiligung X-GmbH" },
      { text: "MN ist seit dem 01.07.2025 mit 35 % an der X-GmbH beteiligt, die Sitz und Geschäftsleitung in Köln hat. Die Beteiligung wurde zutreffend als Anlagevermögen bilanziert. Die Zinsen (900 €) zur Finanzierung der Beteiligung wurden aufwandswirksam erfasst. Im Dezember 2025 hat MN eine Dividende von der X-GmbH über 40.000 € erhalten und gebucht: „Bank 29.450 € an Beteiligungsertrag 40.000 €, Entnahme 10.550 €“. Weitere Konsequenzen wurden von MN nicht gezogen." },
      HINWEISE_MN,
    ],
    aufgabe: [{ text: "Beurteilen Sie die Gewerbesteuerpflicht von MN. Ermitteln Sie die Gewerbesteuer-Abschlusszahlung von MN für 2025." }],
    loesung: [OHNE_LOESUNG],
  },
  {
    id: "gewst-uf-02",
    termin: 1,
    title: "Fall 2 – Max Noll: Betriebsaufspaltung mit Photovoltaikanlage",
    thema: "Vermietung an die eigene GmbH, erweiterte Kürzung und die Anlage nach § 3 Nr. 72 EStG",
    rechtsstand: "Rechtsstand 2025",
    quelle: "Fallsammlung GewSt (Nöthen) · Fall 2",
    verfasser: "Markus Nöthen",
    normen: ["§ 2 GewStG", "§ 7 GewStG", "§ 9 Nr. 1 GewStG", "§ 11 GewStG", "§ 4 Abs. 1 EStG", "§ 15 EStG", "§ 3 Nr. 72 EStG", "§ 7 Abs. 4 EStG", "§ 181 BGB"],
    themen: ["Betriebsaufspaltung", "Sachliche Verflechtung", "Personelle Verflechtung", "Erweiterte Grundstückskürzung", "Photovoltaikanlage", "Messbetrag"],
    sachverhalt: [
      { text: "Max Noll (MN) hat seinen Wohnsitz in Bonn und vermietet seit dem 01.01.2015 das bebaute Grundstück Arnoldsweiler Str. 20 (Einheitswert 200.000 €) an die MN-GmbH, welches sich im Bonner Stadtteil Ramersdorf befindet. Die MN-GmbH hat ihren Sitz und ihre Geschäftsleitung in Ramersdorf. MN ist seit Gründung mit 100 % an der MN-GmbH beteiligt und ist auch Geschäftsführer der MN-GmbH. Er ist vom Selbstkontrahierungsverbot des § 181 BGB befreit. Die MN-GmbH unterhält in Ramersdorf einen Baumarkt." },
      { text: "MN hat das bebaute Grundstück mit Kaufvertrag vom 12.12.2014 (Übergang von Besitz, Nutzen und Lasten zum 01.01.2015) für 400.000 € erworben. Die Eintragung in das Grundbuch erfolgte im Februar 2015 zugunsten des MN. Der Anteil des Grund und Bodens lag bei 25 %. Der Bauantrag für das Gebäude wurde 2010 gestellt. Die MN-GmbH unterhält auf diesem Grundstück ihr einziges Warenlager." },
      { text: "Die laufenden Grundstückskosten betragen 1.000 € zzgl. 100 € USt pro Monat und wurden fristgerecht zu Beginn eines jeden Monats bezahlt. Die Vermietung an die MN-GmbH erfolgt „ohne umsatzsteuerfrei“ (so in der Quelle). Die monatliche angemessene Miete der MN-GmbH beträgt 15.000 €. MN hat in 2025 Grundsteuer über 6.000 € bezahlt; diese ist im o. g. Betrag der laufenden Grundstückskosten nicht enthalten." },
      { text: "Anfang 2021 hat MN auf das Dach des Grundstücks eine trägergestützte Photovoltaikanlage errichten lassen. Die installierte Bruttoleistung beträgt laut Marktstammdatenregister 40 Kilowatt (peak). Die Anlage wird ebenfalls an die MN-GmbH vermietet. Die Einnahmen aus der Vermietung dieser Anlage betragen 5.000 €, die Kosten für diese Anlage insgesamt 2.000 €. Eine Einspeisung in das öffentliche Stromnetz erfolgt nicht." },
      HINWEISE_MN,
    ],
    aufgabe: [{ text: "Beurteilen Sie die Gewerbesteuerpflicht von MN. Ermitteln Sie den Gewerbesteuer-Messbetrag von MN." }],
    loesung: [OHNE_LOESUNG],
  },
  {
    id: "gewst-uf-03",
    termin: 1,
    title: "Fall 3 – F-N GmbH & Co. KG: Gesellschafterdarlehen, zwei Beteiligungen und der Gesellschafterwechsel",
    thema: "Sachliche und persönliche Gewerbesteuerpflicht der KG, § 7 S. 2 und S. 4 GewStG sowie das Schachtelprivileg",
    rechtsstand: "Rechtsstand 2025",
    quelle: "Fallsammlung GewSt (Nöthen) · Fall 3",
    verfasser: "Markus Nöthen",
    normen: ["§ 2 Abs. 1 GewStG", "§ 5 Abs. 1 GewStG", "§ 7 S. 2 GewStG", "§ 7 S. 4 GewStG", "§ 8 Nr. 1 Buchst. a GewStG", "§ 9 Nr. 2a GewStG", "§ 11 GewStG", "§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§ 3 Nr. 40 EStG", "§ 3c Abs. 2 EStG", "§ 8b KStG"],
    themen: ["GmbH & Co. KG", "Sonderbetriebseinnahmen", "Entgelte für Schulden", "Schachtelprivileg", "Streubesitzdividende", "Veräußerung des Mitunternehmeranteils", "Messbetrag"],
    sachverhalt: [
      { text: "Die F-N GmbH & Co. KG (KG) hat ihren Sitz und ihre Geschäftsleitung in Mainz und unterhält einen Handel für Tierbedarf. Beteiligt an der KG ist Fridolin Förster (F) mit 70 % als Kommanditist sowie die N-GmbH mit 30 % als Komplementär. F wohnt in Mainz, die N-GmbH hat ihren Sitz und ihre Geschäftsleitung in Mainz. Im Wirtschaftsjahr 2025 erzielt die KG einen Gewerbeertrag von vorläufig 800.000 €." },
      { typ: "titel", text: "a) Darlehen" },
      { text: "F hat der KG ein Darlehen über 100.000 € gegeben, welches bilanziell zutreffend beurteilt worden ist. Die Verzinsung beträgt jährlich 2.000 €; die 2.000 € wurden bei der KG als Aufwand erfasst. Ferner hat die KG noch weitere Zinsen über 210.000 € als Aufwand erfasst." },
      { typ: "titel", text: "b) Orth-GmbH" },
      { text: "Die KG ist seit dem 01.07.2025 mit 100 % an der Orth-GmbH beteiligt. Der Erwerb wurde zutreffend beurteilt. Die Orth-GmbH hat ihren Sitz und Geschäftsleitung in Dortmund. Am 10.10.2025 nimmt die Orth-GmbH eine Gewinnausschüttung vor; die KG bucht: „Bank 58.900 € an Beteiligungsertrag 58.900 €“." },
      { typ: "titel", text: "c) Ulmer-AG" },
      { text: "Außerdem hält die KG seit 3 Jahren Aktien i. H. v. 20 % an der Ulmer AG (Sitz und Geschäftsleitung in Ulm). Am 12.12.2025 nimmt „die Ulmer-GmbH“ (so in der Quelle) eine Gewinnausschüttung vor, die die KG wie folgt bucht: „Bank 73.625 € an Beteiligungsertrag 100.000 €, Entnahme 26.375 €“." },
      { typ: "titel", text: "d) Verkauf durch F" },
      { text: "F hat mit Ablauf des 31.12.2025 seine 70 %-Beteiligung an der KG an den fremden Dritten XYZ verkauft. Der zutreffend ermittelte Veräußerungsgewinn des F hat 200.000 € betragen und wurde bisher nicht berücksichtigt. Der Gesellschafterwechsel von F auf XYZ wurde bilanziell zutreffend beurteilt." },
    ],
    aufgabe: [{ text: "Ermitteln Sie den Gewerbesteuer-Messbetrag der KG für 2025. Gehen Sie dabei auch auf die sachliche und persönliche Gewerbesteuerpflicht der KG ein. Begründen Sie Ihre Ergebnisse unter Angabe der einschlägigen Rechtsgrundlagen." }],
    loesung: [OHNE_LOESUNG],
  },
  {
    id: "gewst-uf-04",
    termin: 1,
    title: "Fall 4 – Abels & Breuer KG: Gesellschafterwechsel und vortragsfähiger Gewerbeverlust",
    thema: "Unternehmeridentität nach § 10a GewStG bei gleichzeitigem Ein- und Austritt zum Jahreswechsel",
    rechtsstand: "Rechtsstand 2025",
    quelle: "Fallsammlung GewSt (Nöthen) · Fall 4",
    verfasser: "Markus Nöthen",
    normen: ["§ 10a GewStG", "§ 10a S. 4, 5, 6 GewStG", "§ 11 Abs. 1, 2 GewStG", "R 10a.3 GewStR"],
    themen: ["Unternehmeridentität", "Gesellschafterwechsel", "Vortragsfähiger Fehlbetrag", "Freibetrag § 11 Abs. 1", "Messbetrag"],
    sachverhalt: [
      { text: "Die Abels & Breuer KG (KG) hat ihren Sitz und ihre Geschäftsleitung in München und unterhält einen Baumarkt. Kommanditisten sind zu jeweils 50 % Andreas Abels (A) und Bastian Breuer (B). Die beiden Gesellschafter wohnen in München. B ist erst mit Ablauf des 31.12.2024 zum 01.01.2025 in die KG eingetreten und Christian Conraths (C) aus der KG ausgetreten. C wohnt ebenfalls in München." },
      { text: "Der gesondert festgestellte, vortragsfähige Gewerbeverlust auf den 31.12.2024 beträgt 200.000 € (zutreffend). Im Wirtschaftsjahr 2025 erzielt die KG einen zutreffenden Gewerbeertrag von 62.000 €." },
    ],
    aufgabe: [{ text: "Ermitteln Sie den Gewerbesteuer-Messbetrag der KG für 2025 sowie den vortragsfähigen Gewerbeverlust zum 31.12.2025. Die sachliche und persönliche Gewerbesteuerpflicht ist nicht zu prüfen. Begründen Sie Ihre Ergebnisse unter Angabe der einschlägigen Rechtsgrundlagen." }],
    loesung: [OHNE_LOESUNG],
  },
];

export default gewstUebungsfaelle;
