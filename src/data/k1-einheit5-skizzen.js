/* Rekonstruktionen der in USt-Einheit 5 gezeichneten Lösungswege. */
const k1Einheit5Skizzen = {
  194: {
    titel: "Wohnmobil: Neufahrzeug, Inzahlungnahme und Wiederverkauf",
    spuren: [
      ["W", "neues Wohnmobil · VKP 47.600 €", "R · Rentner"],
      ["R", "altes Wohnmobil · subjektiver Wert 20.000 €", "W"],
      ["R", "Barzahlung 27.600 €", "W"],
      ["W", "gebrauchtes Wohnmobil · VKP 21.000 €", "K · Künstler"],
      ["§ 25a", "21.000 € − 20.000 € = Marge 1.000 €", "BMG 840,34 € · USt 159,66 €"],
    ],
    note: "Quelle: Beispiel 3. Die Tafel zeichnet die drei Leistungspfeile W→R, R→W und W→K und stellt den subjektiven Wert der Inzahlungnahme ausdrücklich neben die Baraufgabe.",
  },
  195: {
    titel: "Wohnwagenkette NL → DE",
    spuren: [
      ["P · Domburg NL", "19.000 €", "NL · Renesse"],
      ["NL · § 25a", "20.000 €", "D · Kleve"],
      ["D · § 25a", "22.000 €", "H · Krefeld"],
      ["Ausgangsfall", "D: kein ig. Erwerb · § 25a Abs. 7 Nr. 2", "§ 25a bei D→H +"],
      ["Abwandlung: NL verzichtet", "NL→D: § 25a gestrichen · D: ig. Erwerb", "D→H: § 25a −"],
    ],
    note: "Quelle: Beispiel 4. Die obere und untere Tafelhälfte stellen Ausgangsfall und Verzicht nach § 25a Abs. 8 unmittelbar gegenüber.",
  },
  196: {
    titel: "Skonto als §-17-Berichtigung",
    spuren: [
      ["10.10.26 · U", "Maschine 200.000 € + 38.000 € USt", "Z"],
      ["VAZ 10", "ursprünglicher Umsatz", "BMG 200.000 € · USt 38.000 €"],
      ["1.11.26", "5 % Skonto tatsächlich abgezogen", "§ 17 Abs. 1"],
      ["VAZ 11", "Berichtigung", "BMG −10.000 € · USt −1.900 €"],
    ],
    note: "Quelle: Tag-5-Beispiel 5. Die Tafel trennt den ursprünglichen Oktober-Umsatz von der November-Berichtigung.",
  },
  197: {
    titel: "Insolvenz: Uneinbringlichkeit und spätere Quote",
    spuren: [
      ["10.10.26 · U", "100 Herrenanzüge · 100.000 € + 19.000 €", "K"],
      ["23.12.26", "K insolvent · § 17 Abs. 2 Nr. 1", "−100.000 € BMG · −19.000 € USt"],
      ["23.12.27", "Schlussverteilung 595 €", "+500 € BMG · +95 € USt"],
    ],
    note: "Quelle: Tag-5-Beispiel 6. Die Tafel zeichnet die Zahlungskette und schreibt die beiden Berichtigungen untereinander.",
  },
  198: {
    titel: "Maschinenrückgabe: Rückgängigmachung oder Rücklieferung",
    spuren: [
      ["10.10.26 · U", "Maschine 200.000 € + 38.000 €", "K"],
      ["Ausgangsfall", "Rücktritt wegen Mangel · § 17 Abs. 2 Nr. 3", "BMG −200.000 € · USt −38.000 €"],
      ["Nutzungsvergütung", "11.900 €", "BMG 10.000 € · USt 1.900 €"],
      ["Beschädigung", "10.000 €", "nicht steuerbarer Schadensersatz"],
      ["Abwandlung · 6.12.26", "neue Rücklieferung K → U · 216.100 €", "BMG 181.596,64 € · USt 34.503,36 €"],
    ],
    note: "Quelle: Tag-5-Beispiel 7. Die Tafel markiert ausdrücklich: in der Abwandlung keine Rückgängigmachung, sondern ein neues Umsatzgeschäft.",
  },
  199: {
    titel: "Pkw-Anschaffung und Schenkung",
    spuren: [
      ["30.10.26", "Auto 23.800 € für Unternehmen", "Vorsteuer 3.800 € · VAZ 10"],
      ["1.11.26", "Schenkung an Tochter", "§ 3 Abs. 1b"],
      ["§ 10 Abs. 4", "BMG 20.000 €", "USt 3.800 € · VAZ 11"],
    ],
    note: "Quelle: Tag-6-Beispiel 1. Die Mitschrift ordnet Anschaffung und spätere uWA bewusst zwei verschiedenen Voranmeldungszeiträumen zu.",
  },
  207: {
    titel: "Porsche an Gesellschafter-Geschäftsführer",
    spuren: [
      ["10.10.26 · A-GmbH", "Porsche Carrera · marktüblich 59.500 €", "Anschaffung"],
      ["11.11.26 · A-GmbH", "Verkauf 47.600 €", "A · Gesellschafter-Geschäftsführer"],
      ["§ 10 Abs. 5", "Mindest-BMG", "50.000 €"],
      ["19 %", "Umsatzsteuer", "9.500 €"],
    ],
    note: "Quelle: Tag-6-Beispiel 9. Die Tafel überschreibt die Lösung mit „Mindest-BMG § 10 (5)“ und setzt 50.000 € / 9.500 € an.",
  },
};

export default k1Einheit5Skizzen;
