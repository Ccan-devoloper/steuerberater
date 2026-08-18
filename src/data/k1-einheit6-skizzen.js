/* Rekonstruktionen der handschriftlichen Lösungswege aus USt-Einheit 6. */
const k1Einheit6Skizzen = {
  200: {
    titel: "Gemischte Nutzung: Aufteilung statt Zuordnungswahl",
    spuren: [
      ["gemischte Nutzung", "A 15.2c Abs. 2 UStAE", "Art der Eingangsleistung"],
      ["vertretbare Sachen / sonstige Leistungen", "Aufteilungsgebot", "Beispiel Kartoffeln"],
      ["95 kg betrieblich · 5 kg privat", "Quellenlösung", "95 % VorSt-Abzug"],
    ],
    note: "Quelle: Tafel zu Beispiel 2. Die Mitschrift verzweigt bei gemischter Nutzung und ordnet die Kartoffeln ausdrücklich dem Aufteilungsgebot zu.",
  },
  201: {
    titel: "Pkw-Matrix: drei Zuordnungsentscheidungen",
    spuren: [
      ["100 % Zuordnung", "VSt Anschaffung 9.500 € · Unterhaltung 1.900 €", "uWA Nutzung 75 % · Schenkung 100 %"],
      ["25 % Zuordnung", "VSt Anschaffung 2.375 € · Unterhaltung 475 €", "uWA Nutzung 0 % · Schenkung 25 %"],
      ["0 % Zuordnung", "VSt Anschaffung 0 € · Unterhaltung 475 €", "uWA Nutzung 0 % · Schenkung 0 %"],
    ],
    note: "Quelle: ausgefüllte Tabelle zu Beispiel 3. Die laufenden Unterhaltungskosten werden von der Zuordnung des Pkw getrennt nach dem unternehmerischen Nutzungsanteil betrachtet.",
  },
  202: {
    titel: "Gebäude: Zuordnungswahlrecht trifft § 15 Abs. 1b",
    spuren: [
      ["100 % Zuordnung", "Herstellungs-VSt 25 % = 14.250 € · Unterhaltung 25 % = 475 €", "Nutzungs-uWA 0 % · spätere Entnahme 100 % / § 4 Nr. 9a"],
      ["25 % Zuordnung", "Herstellungs-VSt 25 % = 14.250 € · Unterhaltung 25 % = 475 €", "Nutzungs-uWA 0 % · spätere Entnahme 25 % / § 4 Nr. 9a"],
      ["0 % Zuordnung", "Herstellungs-VSt 0 € · Unterhaltung 25 % = 475 €", "Nutzungs-uWA 0 % · spätere Entnahme 0 %"],
      ["Abwandlung 2010", "§ 27 Abs. 16 · bei 100 % Zuordnung VSt 57.000 €", "private Nutzungs-uWA 75 %"],
    ],
    note: "Quelle: Tabellen und Tafeln zu Beispiel 4. Die spätere Beispiel-15-Variante mit nur noch 15 % unternehmerischer Nutzung ab 1.1.27 wird gestellt, aber nicht mehr ausgerechnet.",
  },
  219: {
    titel: "§ 15a: Geschäftshaus Hak → Expo",
    spuren: [
      ["1.2.26", "Fertigstellung · VSt 57.000 € · Ausgangsverwendung 0 %", "Berichtigungszeitraum bis 31.1.36"],
      ["1.9.26", "Wechsel zu Expo · Quellenansatz 100 %", "2026: Änderung 36,36 %"],
      ["§ 44 Abs. 2 UStDV", "≥ 10 Prozentpunkte", "Berichtigung 2026: 1.900 €"],
      ["2027", "Änderung 100 %", "Berichtigung: 5.700 €"],
    ],
    note: "Quelle: Tafel zu Beispiel 10. Alle Prozentsätze und Eurobeträge werden unverändert aus der Mitschrift übernommen.",
  },
  220: {
    titel: "Privater Pkw → späteres Unternehmensvermögen",
    spuren: [
      ["2026 · Student S", "VW Passat privat erworben · Vorsteuer 3.000 €", "noch keine unternehmerische Verwendung"],
      ["2027 · selbständiger Informatiker", "90 % Unternehmensnutzung", "Einlage"],
      ["A 15a.1 Abs. 6 UStAE", "Quellenhinweis", "kein § 15a bei Einlage im UV"],
    ],
    note: "Quelle: Lösungshinweis zu Beispiel 11. Die Quelle entwickelt keine nachträgliche Anschaffungs-Vorsteuer über § 15a.",
  },
  221: {
    titel: "Zwei Berichtigungsobjekte: Haus und Klinker",
    spuren: [
      ["Haus", "Berichtigungszeitraum 1.9.14–31.8.24", "2026 bereits abgelaufen"],
      ["Klinker · 11.11.25", "§ 15a Abs. 3 · zweites Berichtigungsobjekt", "10.000 € Vorsteuer"],
      ["§ 45 UStDV", "Quelle vereinfacht 1.11.25–31.10.35", "10 Jahre"],
      ["1.10.26 · Tierarzt", "Änderung 25 %", "Berichtigung 250 €"],
    ],
    note: "Quelle: Tafel zu Beispiel 12. Der Klinker erhält einen eigenen Berichtigungszeitraum; die 250 € sind Quellenwert.",
  },
  222: {
    titel: "Bauträger: Einmalberichtigung nach § 15a Abs. 2",
    spuren: [
      ["Plan", "Wohnhaus für Wohnzwecke veräußern", "Vorsteuern 57.000 €"],
      ["1.2.26", "Verkauf an Raumausstatter R mit Option", "tatsächliche Verwendung geändert"],
      ["§ 15a Abs. 2 S. 1, 2", "§ 44 Abs. 1 UStDV greift nicht (> 1.000 €)", "57.000 € in einer Summe"],
      ["VAZ 02/26", "Berichtigung", "57.000 € vom FA"],
    ],
    note: "Quelle: vollständige Tafel-Lösung zu Beispiel 13. Die Mitschrift behandelt den Betrag nicht als zehnjährige Ratenkorrektur.",
  },
};

export default k1Einheit6Skizzen;
