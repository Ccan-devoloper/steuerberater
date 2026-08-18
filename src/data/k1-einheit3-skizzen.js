/* Kompakte Rekonstruktionen der Tafel- und Pfeilskizzen aus USt-Einheit 3.
   Die Texte übernehmen nur Beziehungen, Daten, Beträge und Normhinweise, die
   in der Mitschrift erkennbar sind; es werden keine Werte nachgerechnet. */
const k1Einheit3Skizzen = {
  165: {
    titel: "Reverse Charge: DK/N → U",
    spuren: [
      ["DK · Dänemark", "sonstige Leistung · 10.9.26", "U · Dortmund"],
      ["§ 13b Abs. 1", "2.000 € · USt 380 €", "VAZ 09 · VSt 380 €"],
      ["N · Oslo", "§ 13b Abs. 2 Nr. 1", "Rg. 10.11. → spätestens VAZ 10"],
    ],
    note: "Quelle: Tafel zu Beispiel 1. Die Alternative beim Rechnungsdatum wird nur in der Oslo-Abwandlung für den spätesten Entstehungszeitpunkt relevant.",
  },
  166: {
    titel: "Bauleistung: B → Z",
    spuren: [
      ["Baufirma B · Bremen", "Zwischenwände", "Zimmermann Z"],
      ["§ 13b Abs. 2 Nr. 4", "Z ist Bauleister", "Z = Steuerschuldner"],
      ["Abwandlung", "privates EFH des Z", "Steuerschuld bleibt bei Z"],
    ],
    note: "Quelle: Pfeilskizze zu Beispiel 2 und markierter § 13b Abs. 5.",
  },
  167: {
    titel: "Mobiltelefone: ein wirtschaftlicher Vorgang",
    spuren: [
      ["H · Hersteller", "250 Handys × 30 €", "M · Mobilfunkanbieter"],
      ["10.7.: 125 Stück", "Gesamt 7.500 €", "10.8.: 125 Stück"],
      ["§ 13b Abs. 2 Nr. 10", "Schwelle 5.000 €", "M = Steuerschuldner"],
    ],
    note: "Quelle: Tafel zu Beispiel 3. 7.500 € ist der dort notierte Gesamtwert.",
  },
  168: {
    titel: "Reihengeschäft: eine Warenbewegung",
    spuren: [
      ["H · Hamburg", "Verkauf an B", "B · Berlin"],
      ["H versendet direkt", "eine Bewegung H → P", "P · Potsdam"],
    ],
    note: "Mehrere Umsatzgeschäfte über dieselben Heizkörper, aber nur eine unmittelbare Warenbewegung.",
  },
  169: {
    titel: "Kein Reihengeschäft: zwei Bewegungen",
    spuren: [
      ["H", "liefert an B", "B"],
      ["B", "P holt bei B ab", "P"],
    ],
    note: "Die Quelle trennt H → B und die spätere Abholung B → P als zwei Warenbewegungen.",
  },
  170: {
    titel: "Kein Reihengeschäft: Gegenstand ändert sich",
    spuren: [
      ["H", "Heizkörper", "direkt zu P"],
      ["B", "Einbau bei P", "eingebaute Heizkörper"],
    ],
    note: "Die Tafel unterscheidet den Liefergegenstand Heizkörper von den anschließend eingebauten Heizkörpern.",
  },
  171: {
    titel: "Ort bei Transport durch H",
    spuren: [
      ["H · Hamburg", "bewegte Lieferung H → B", "§ 3 Abs. 6a S. 2"],
      ["B", "ruhende Lieferung nach Bewegung", "P · Potsdam"],
    ],
    note: "Bewegte Lieferung ab Hamburg; nachfolgende ruhende Lieferung am Ende der Bewegung in Potsdam.",
  },
  172: {
    titel: "Ort bei Abholung durch P",
    spuren: [
      ["H · Hamburg", "ruhende Lieferung H → B", "vor der Bewegung"],
      ["B", "bewegte Lieferung B → P", "P holt bei H ab"],
    ],
    note: "Der letzte Abnehmer P veranlasst die Bewegung; sie wird der Lieferung an P zugeordnet.",
  },
  173: {
    titel: "Ort bei Transport durch Zwischenhändler B",
    spuren: [
      ["H · Hamburg", "bewegte Lieferung H → B", "Grundregel § 3 Abs. 6a S. 4"],
      ["B fährt selbst", "ruhende Folgelieferung", "P · Potsdam"],
    ],
    note: "Im Ausgangsfall nennt der Sachverhalt keinen abweichenden Identifikationsnachweis; deshalb bleibt die Grundzuordnung bestehen.",
  },
  174: {
    titel: "Freiburg → Basel: zwei Ausfuhrwege",
    spuren: [
      ["U · Freiburg", "10.11.26 · TV 1.000 €", "C · Basel"],
      ["a) U versendet per DHL", "§ 6 Abs. 1 Nr. 1", "steuerfrei § 4 Nr. 1 a"],
      ["b) C holt mit Pkw", "§ 6 Abs. 1 Nr. 2 · Abs. 2", "steuerfrei § 4 Nr. 1 a"],
    ],
    note: "Quelle: Gegenüberstellung der beiden Varianten zu Beispiel 10.",
  },
  175: {
    titel: "Bananenfall: 0,8 t und 0,2 t getrennt",
    spuren: [
      ["0,8 t: F · Freiburg", "B holt 11.10.26", "B · Bern · Ausfuhr"],
      ["0,2 t: S · Stuttgart", "Speed versendet 12.10.26", "F → B · Reihengeschäft"],
      ["Speed → S", "350 € Transport", "§ 4 Nr. 3 a"],
      ["Abwandlung F holt", "S → F: 1.682,24 € + 117,76 €", "F → B: Ausfuhr"],
    ],
    note: "Quellenwerte unverändert: 10.000 € netto Gesamtwert, 1.800 € Rechnung S → F, 350 € Speed, 117,76 € USt/VSt.",
  },
  176: {
    titel: "Pkw-Reparatur Freiburg/Basel",
    spuren: [
      ["B · Basel · Unternehmer", "Reparatur 10.10.26", "Ort Basel · § 3a Abs. 2"],
      ["Abwandlung Privatperson", "Tätigkeitsort Freiburg", "§ 3a Abs. 3 Nr. 3 a"],
      ["Pkw zurück in CH", "Lohnveredelung § 7", "steuerfrei § 4 Nr. 1 a"],
    ],
    note: "Quelle: Tafel zu Beispiel 12 und Abwandlung.",
  },
};

export default k1Einheit3Skizzen;
