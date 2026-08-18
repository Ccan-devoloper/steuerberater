/*
 * Aufgabenstellungen der Originalfälle aus den USt-Mitschriften.
 * Die Fragen werden wortgetreu bzw. nur bei der a/b-Anordnung strukturell
 * auseinandergezogen. Wo das PDF keine ausformulierte Aufgabe enthält, wird
 * das ausdrücklich kenntlich gemacht statt eine Frage zu erfinden.
 */
const k1OriginalfallAufgaben = {
  141: {
    seiten: "Einheit 1 · S. 3–12",
    fragen: [],
    hinweis: "Der Tafelfall enthält keine gesondert ausformulierte Aufgabenfrage; die Umsatzsteuerprüfung wird unmittelbar am Sony–Media-Markt-Sachverhalt entwickelt.",
  },
  142: {
    seiten: "Einheit 1 · S. 21–22",
    fragen: [],
    hinweis: "Beispiel 1 enthält keine gesondert ausformulierte Aufgabenfrage. Die Beispielsammlung nennt die vier Tätigkeiten; die Tafel-Lösung ordnet sie als Grundgeschäft, Hilfsgeschäft, Nebengeschäft bzw. Privatvorgang ein.",
  },
  143: {
    seiten: "Einheit 1 · S. 21, 24",
    fragen: [
      "Wann geht zivilrechtliches Eigentum über?",
      "Wann erfolgt eine Lieferung i.S.d. § 3 (1) UStG?",
      "Wo erfolgt die Lieferung?",
    ],
  },
  144: {
    seiten: "Einheit 1 · S. 24, 26",
    fragen: [
      "Wann geht zivilrechtliches Eigentum über?",
      "Wann geht wirtschaftliches Eigentum über?",
      "Wann erfolgt eine Lieferung i.S.d. § 3 (1) UStG?",
      "Wo erfolgt die Lieferung?",
    ],
  },
  145: {
    seiten: "Einheit 1 · S. 28",
    fragen: [
      "Art der Leistung?",
      "Zeitpunkt der Leistung?",
      "Ort der Leistung?",
    ],
  },
  146: {
    seiten: "Einheit 1 · S. 31",
    fragen: [
      "Wie viele Leistungen liegen vor?",
      "Welche Art von Leistung liegt vor?",
    ],
  },
  147: {
    seiten: "Einheit 1 · S. 39",
    fragen: [
      "Welche Art von Leistung liegt vor?",
      "Wann wird die Leistung erbracht?",
      "Fortführung Beispiel 7: Im Mietvertrag ist vereinbart, dass die Miete monatlich vorschüssig zu entrichten ist. Wann wird die Leistung erbracht?",
    ],
  },
  148: {
    seiten: "Einheit 1 · S. 44",
    fragen: [
      "Variante a: Welche Art von Leistung liegt vor?",
      "Variante a: Wo wird die Leistung erbracht?",
      "Variante b: Welche Art von Leistung liegt vor?",
      "Variante b: Wo wird die Leistung erbracht?",
    ],
  },
  149: {
    seiten: "Einheit 1 · S. 47",
    fragen: ["Wo werden die Leistungen erbracht?"],
  },
  150: {
    seiten: "Einheit 1 · S. 50",
    fragen: [
      "Wie viele Leistungen liegen vor?",
      "Wo werden die Leistungen erbracht?",
    ],
  },
  151: {
    seiten: "Einheit 1 · S. 56",
    fragen: [
      "Wie viele Umsätze liegen vor?",
      "Wo werden die Leistungen erbracht?",
    ],
  },
  152: {
    seiten: "Einheit 1 · S. 59",
    fragen: ["Wo wird die Leistung erbracht?"],
  },
  153: {
    seiten: "Einheit 1 · S. 62",
    fragen: ["Wo wird die Leistung erbracht?"],
  },
  154: {
    seiten: "Einheit 2 · Teil 1 · S. 21–23",
    fragen: [
      "Leistung des B?",
      "Leistung des G?",
    ],
  },
  155: {
    seiten: "Einheit 2 · Teil 1 · S. 21–23",
    fragen: ["Option wirksam?"],
  },
  156: {
    seiten: "Einheit 2 · Teil 1 · S. 21–23, 65, 83–103",
    fragen: [],
    hinweis: "Beispiel 3 nennt die drei Vermietungsvarianten a) Wohnung mit Pkw-Stellplatz, b) Pkw-Stellplatz und c) Ladenlokal mit Betriebsvorrichtungen, formuliert daneben aber keine gesonderte Aufgabenfrage.",
  },
  157: {
    seiten: "Einheit 2 · Teil 1 · S. 119–127",
    fragen: ["Option möglich?"],
  },
  158: {
    seiten: "Einheit 2 · Teil 2 · S. 57–64",
    fragen: ["Wie hoch ist die Bemessungsgrundlage bzw. USt?"],
  },
  159: {
    seiten: "Einheit 2 · Teil 2 · S. 92–128",
    fragen: ["Beurteilen Sie B!"],
  },
  165: {
    seiten: "Einheit 3 · Beispiel 1 · PDF-S. 1–4",
    fragen: [
      "Beurteilen Sie U!",
      "Abwandlung: Beurteilen Sie U!",
    ],
  },
  166: {
    seiten: "Einheit 3 · Beispiel 2 · PDF-S. 16–29",
    fragen: [
      "Wer ist Steuerschuldner?",
      "Abwandlung: Wer ist Steuerschuldner?",
    ],
  },
  167: {
    seiten: "Einheit 3 · Beispiel 3 · PDF-S. 30–39",
    fragen: ["Wer ist Steuerschuldner?"],
  },
  168: {
    seiten: "Einheit 3 · Beispiel 4 · PDF-S. 30, 155",
    fragen: ["Liegt ein Reihengeschäft vor?"],
  },
  169: {
    seiten: "Einheit 3 · Beispiel 5 · PDF-S. 155",
    fragen: ["Liegt ein Reihengeschäft vor?"],
  },
  170: {
    seiten: "Einheit 3 · Beispiel 6 · PDF-S. 155",
    fragen: ["Liegt ein Reihengeschäft vor?"],
  },
  171: {
    seiten: "Einheit 3 · Beispiel 7 · PDF-S. 162",
    fragen: ["Bestimmen Sie für alle Lieferungen den Ort!"],
  },
  172: {
    seiten: "Einheit 3 · Beispiel 8 · PDF-S. 162",
    fragen: ["Bestimmen Sie für alle Lieferungen den Ort!"],
  },
  173: {
    seiten: "Einheit 3 · Beispiel 9 · PDF-S. 162",
    fragen: ["Bestimmen Sie für alle Lieferungen den Ort!"],
  },
  174: {
    seiten: "Einheit 3 · Beispiel 10",
    fragen: ["Welche Lieferungen sind steuerfrei?"],
  },
  175: {
    seiten: "Einheit 3 · Beispiel 11 · PDF-S. 395 ff.",
    fragen: [
      "Beurteilen Sie alle Beteiligten!",
      "Abwandlung: Beurteilen Sie alle Beteiligten!",
    ],
  },
  176: {
    seiten: "Einheit 3 · Beispiel 12 · PDF-S. 395/501 ff.",
    fragen: [
      "Beurteilen Sie U1!",
      "Abwandlung: Beurteilen Sie U1!",
    ],
  },
  182: {
    seiten: "Einheit 4 · Beispiel 13 · PDF-S. 11–68",
    fragen: [
      "Beurteilen Sie CH und U1!",
      "Abwandlung: Die Lieferung des CH erfolgt „unverzollt und unversteuert“. Beurteilen Sie CH und U1!",
    ],
  },
  183: {
    seiten: "Einheit 4 · Beispiel 14 · PDF-S. 97–150",
    fragen: ["Beurteilen Sie K!"],
  },
  184: {
    seiten: "Einheit 4 · Tag 4 · Beispiel 1 · PDF-S. 159–204",
    fragen: ["Beurteilen Sie D!"],
  },
  185: {
    seiten: "Einheit 4 · Tag 4 · Beispiel 2 · PDF-S. 159 ff.",
    fragen: [
      "Beurteilen Sie D!",
      "Abwandlung: D tritt mit seiner belgischen USt-IdNr. auf! Beurteilen Sie D!",
    ],
  },
  186: {
    seiten: "Einheit 4 · Tag 4 · Beispiel 3 · PDF-S. 319 ff.",
    fragen: [
      "Beurteilen Sie D!",
      "Abwandlung: Beurteilen Sie D!",
    ],
  },
  187: {
    seiten: "Einheit 4 · Tag 4 · Beispiel 4 · PDF-S. 399 ff.",
    fragen: ["Beurteilen Sie K und D!"],
  },
  188: {
    seiten: "Einheit 4 · Tag 4 · Beispiel 5 · PDF-S. 577 ff.",
    fragen: ["Umsatzsteuerrechtliche Würdigung?"],
  },
  189: {
    seiten: "Einheit 4 · Tag 4 · Beispiel 6 · PDF-S. 577",
    fragen: ["Umsatzsteuerrechtliche Konsequenzen für U?"],
    hinweis: "Die Aufgabe wird in der vorliegenden PDF eingeblendet, aber bis zum Ende der Aufzeichnung nicht mehr ausformuliert gelöst.",
  },
  190: {
    seiten: "Einheit 4 · Tag 4 · Beispiel 7 · PDF-S. 577",
    fragen: ["Umsatzsteuerrechtliche Konsequenzen für U?"],
    hinweis: "Die Aufgabe wird in der vorliegenden PDF eingeblendet, aber bis zum Ende der Aufzeichnung nicht mehr ausformuliert gelöst.",
  },
};

export default k1OriginalfallAufgaben;
