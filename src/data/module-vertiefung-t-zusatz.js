/* USt 7. Einheit: ausführlicher Tafelfall zur Teil-GiG und §15a. */

export default [
  {
    id: 235,
    area: "Fall",
    title: "Vermietungsgebäude Tim → StB Nöhring: Teil-GiG und Vorsteuerberichtigung",
    law: "§ 1 Abs. 1a UStG · A 1.5 UStAE · § 15a UStG · § 44 UStDV",
    difficulty: "Vertiefung",
    minutes: 34,
    diagram: null,
    intro: [
      "Im GiG-Block entwickelt die Tafel einen eigenen Gebäudefall unmittelbar in einer Skizze. Die obere Vermietung an einen Rechtsanwalt wird nach dem Verkauf fortgeführt; die untere Vermietung an den späteren Erwerber StB Nöhring dagegen nicht.",
      "Die Quelle nutzt den Fall zugleich für eine monatsbezogene §-15a-Berichtigung und die Grenzen des § 44 UStDV.",
    ],
    goals: ["fortgeführten Vermietungsteil als Teil-GiG erkennen", "nicht fortgeführten Gebäudeteil getrennt behandeln", "ursprüngliche Vorsteuer dem Gebäudeteil zuordnen", "8,33-%-/100-%-Änderungen und §44-Grenzen quellentreu übernehmen"],
    scheme: ["Gebäude in die beiden bisherigen Vermietungseinheiten aufteilen.", "Prüfen, welcher Vermietungsteil vom Erwerber wirtschaftlich fortgeführt wird.", "Fortgeführten oberen Teil nach § 1 Abs. 1a/A 1.5 als Teil-GiG einordnen.", "Unteren Teil gesondert als Grundstücksumsatz behandeln.", "Für die nicht fortgeführte Nutzung § 15a und § 44 UStDV jahresbezogen prüfen."],
    normchain: ["§ 1 Abs. 1a S. 1–3 UStG", "A 1.5 UStAE", "§ 15a UStG", "§ 44 Abs. 1–3 UStDV", "§ 45 UStDV"],
    example: {
      title: "Tafelfall: Vermieter Tim verkauft an StB Nöhring",
      facts: "Vermieter Tim nutzt das Gebäude seit 1.7.22 als Vermietungsobjekt. Die Tafel notiert einen ursprünglichen Vorsteuerabzug von 100 % = 190.000 €. Der obere Gebäudeteil ist an einen Rechtsanwalt vermietet, der untere an StB Nöhring. Zum 1.12.26 verkauft Tim das Gebäude für 3 Mio. € an StB Nöhring. Die Vermietung an den Rechtsanwalt wird fortgeführt; die bisherige Vermietung des unteren Teils an Nöhring endet mit dessen Erwerb.",
      solution: [
        "Die obere Vermietungseinheit wird von Nöhring unverändert als Vermietungsunternehmen fortgeführt. Die Tafel kennzeichnet diesen Gebäudeteil ausdrücklich als Teil-GiG nach § 1 Abs. 1a S. 1–3 i.V.m. A 1.5 UStAE und damit als nicht steuerbar.",
        "Für den unteren Teil wird die GiG verneint, weil Nöhring das bisherige Vermietungsunternehmen insoweit nicht fortführt. Die Quelle behandelt diesen Teil getrennt vom oberen Vermietungsteil.",
        "Für die §-15a-Betrachtung ordnet die Tafel dem betroffenen halben Gebäudeteil 95.000 € ursprüngliche Vorsteuer zu; der Berichtigungszeitraum läuft nach der Quelle vom 1.7.22 bis 30.6.32.",
        "Für 2026 beträgt die Änderung wegen nur eines betroffenen Monats exakt 100 % × 1/12 = 8,33 %. Die Quelle berechnet (95.000 € : 10 Jahre) × 8,33 % = exakt 791,67 €.",
        "Die Tafel stellt 791,67 € der 1.000-€-Grenze gegenüber und notiert für 2026 ausdrücklich „keine Korrektur“.",
        "Für 2027 beträgt die Änderung 100 %. Die Quelle berechnet (95.000 € : 10 Jahre) × 100 % = exakt 9.500 €. Weil der Jahresbetrag über 6.000 € liegt, wird er nach der Tafel nicht erst in der Jahreserklärung gesammelt.",
        "Die Quellenlösung verteilt 9.500 € auf zwölf Monate: exakt 791,67 € jeweils monatlich in den VAZ 01–12/27 an das Finanzamt zu zahlen.",
      ],
      result: "Oberer Vermietungsteil: Teil-GiG. Unterer Teil: keine GiG. §15a: 2026 Quellenbetrag 791,67 € ohne Korrektur; 2027 insgesamt 9.500 €, verteilt auf monatlich 791,67 € in VAZ 01–12/27.",
    },
    hbstb: null,
    booking: [],
    merksatz: "Bei einem Grundstück kann der fortgeführte Vermietungsteil Teil-GiG sein, während der nicht fortgeführte Teil einen eigenen Umsatz und eigene §-15a-Folgen auslöst.",
    exam: ["Quelle: USt 7. Einheit, Tafelfall Teil-GiG/§15a, insbesondere PDF-S. 253–355.", "190.000 €, 95.000 €, 8,33 %, 791,67 €, 9.500 € und die VAZ 01–12/27 sind Quellenwerte."],
    traps: ["Das gesamte Gebäude einheitlich als GiG oder Nicht-GiG behandeln.", "Den 2026-Quellenbetrag 791,67 € trotz der von der Tafel angewandten §44-Grenze korrigieren.", "9.500 € für 2027 ohne Beachtung der Quellenverteilung erst in der Jahreserklärung ansetzen."],
    sourceIds: [],
  },
];
