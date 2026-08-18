/* Kompakte Rekonstruktionen der Tafel- und Pfeilskizzen aus USt-Einheit 4.
   Es werden nur Beziehungen, Daten, Beträge und Normhinweise dargestellt, die
   in der Mitschrift sichtbar sind. Nicht ausformulierte Lösungen bleiben leer. */
const k1Einheit4Skizzen = {
  182: {
    titel: "Einfuhrlieferung Bern → Freiburg",
    spuren: [
      ["CH · Bern", "10.10.26 · Bananen", "U1 · Freiburg"],
      ["verzollt + versteuert", "EUSt 10.000 € · CH", "§ 3 Abs. 8 → Inland"],
      ["CH: VSt 10.000 €", "§ 15 Abs. 1 S. 1 Nr. 2", "U1: inländischer Bezug"],
      ["Abwandlung: unverzollt", "§ 3 Abs. 8 greift nicht", "U1: EUSt/VSt 10.000 €"],
    ],
    note: "Quelle: Tafel zu Beispiel 13. Die Skizze stellt die Person des EUSt-Schuldners als Weiche für § 3 Abs. 8 und den Vorsteuerabzug heraus.",
  },
  183: {
    titel: "Einfuhr-Reihengeschäft B → K → S",
    spuren: [
      ["B · Basel", "B → K: ruhend", "K · Köln"],
      ["30.5.26 · Angestellter K", "Einfuhr · EUSt 750 €", "weiter zu S · Stuttgart"],
      ["K: VSt EUSt 750 €", "K → S: bewegt · § 3 Abs. 8", "BMG 10.000 € · USt 1.900 €"],
      ["Leistung 30.5.26", "VAZ 05", "Rechnung 15.6.26 · 11.900 €"],
    ],
    note: "Quelle: Lösung zu Beispiel 14. Die ruhende B→K-Lieferung liegt in Basel; die bewegte K→S-Lieferung wird über § 3 Abs. 8 ins Inland gezogen.",
  },
  184: {
    titel: "Innergemeinschaftliche Lieferung Köln → Paris",
    spuren: [
      ["D · Köln", "24.7.26 · Bananen 10.000 €", "F · Paris"],
      ["§ 3 Abs. 6 · Ort Köln", "§ 6a Abs. 1 erfüllt", "§ 4 Nr. 1 b · steuerfrei"],
      ["deutsche USt-IdNr.", "Warenbewegung DE → FR", "französische USt-IdNr."],
    ],
    note: "Quelle: Tag-4-Beispiel 1. Rechnungsdatum 15.8.26; die Leistung erfolgt bereits am 24.7.26.",
  },
  185: {
    titel: "Innergemeinschaftlicher Erwerb Paris → Köln",
    spuren: [
      ["F · Paris", "24.7.26 · Bananen 10.000 €", "D · Köln"],
      ["§ 1a Abs. 1", "§ 3d S. 1 · Deutschland", "Erwerbsteuer 700 €"],
      ["Rg. 15.8.26", "VAZ 08", "VSt 700 € · § 15 Abs. 1 Nr. 3"],
      ["Abwandlung: BE-USt-IdNr.", "§ 3d S. 2 Sicherung", "Bestimmungsland bleibt DE"],
    ],
    note: "Quelle: Tag-4-Beispiel 2 und Abwandlung. 10.000 €, 700 € und VAZ 08 sind die notierten Werte/Zuordnungen.",
  },
  186: {
    titel: "Tomaten-Reihengeschäft Paris → Köln",
    spuren: [
      ["P · Paris", "P transportiert", "D · Düsseldorf", "K · Köln"],
      ["P → D: bewegt", "14.000 €", "D: ig. Erwerb · 980 €", "D → K: ruhend in Köln"],
      ["Abwandlung", "D transportiert · FR-USt-IdNr.", "P → D: ruhend FR", "D → K: bewegt ab Paris"],
    ],
    note: "Quelle: Tag-4-Beispiel 3. Die Abwandlung ändert durch Zwischenhändlertransport und französische USt-IdNr. die Zuordnung der bewegten Lieferung.",
  },
  187: {
    titel: "Bananen-Reihengeschäft Köln → Paris",
    spuren: [
      ["K · Köln", "K → D: ruhend in Köln", "D · Düsseldorf", "D → P: bewegt", "P · Paris"],
      ["14.000 € brutto", "BMG 13.084,11 €", "USt/VSt 915,89 €", "§ 6a / § 4 Nr. 1 b", "15.000 €"],
      ["D transportiert", "deutsche USt-IdNr.", "10.10.26", "Warenbewegung DE → FR", "franz. USt-IdNr."],
    ],
    note: "Quelle: Tag-4-Beispiel 4. Die Quellenwerte 13.084,11 € und 915,89 € werden unverändert wiedergegeben.",
  },
  188: {
    titel: "Schwellenerwerber: ILEA → K",
    spuren: [
      ["ILEA · Stockholm", "neue Büroeinrichtung 12.000 €", "K · Köln · Kleinunternehmer"],
      ["Erwerbsschwelle 12.500 €", "eigentlich unterschritten", "deutsche USt-IdNr. verwendet"],
      ["§ 1a Abs. 4 · Verzicht", "ig. Erwerb in DE", "Erwerbsteuer 2.280 €"],
      ["Bindung ≥ 2 Kalenderjahre", "Kleinunternehmer", "kein Vorsteuerabzug"],
    ],
    note: "Quelle: Tag-4-Beispiel 5. Die verwendete USt-IdNr. wird in der Tafel als Verzicht auf die Erwerbsschwelle gewertet.",
  },
};

export default k1Einheit4Skizzen;
