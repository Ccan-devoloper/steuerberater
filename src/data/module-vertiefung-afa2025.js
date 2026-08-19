/* Lernmodul zur Rechtslage seit dem Gesetz für ein steuerliches
   Investitionssofortprogramm vom Juli 2025: wiedereingeführte degressive AfA
   (§ 7 Abs. 2 EStG) und arithmetisch-degressive E-Fahrzeug-AfA (§ 7 Abs. 2a EStG). */
export default [
  {
    id: 51, area: "EU", title: "Degressive AfA 2025–2027 und E-Fahrzeug-AfA",
    law: "§ 7 Abs. 2, 2a EStG · § 253 Abs. 3 HGB", difficulty: "Aktualität", minutes: 24,
    intro: [
      "Das Investitionssofortprogramm vom Juli 2025 hat die degressive AfA wieder eingeführt: Für bewegliche Wirtschaftsgüter des Anlagevermögens, die nach dem 30.6.2025 und vor dem 1.1.2028 angeschafft oder hergestellt werden, darf nach § 7 Abs. 2 EStG in fallenden Jahresbeträgen abgeschrieben werden – höchstens das Dreifache des linearen Satzes und höchstens 30 % vom jeweiligen Buchwert. Im Anschaffungsjahr gilt die AfA zeitanteilig; ein späterer Wechsel zur linearen AfA ist nach § 7 Abs. 3 EStG zulässig und wird sinnvoll, sobald der lineare Restwertsatz den degressiven Satz übersteigt.",
      "Für neu angeschaffte, rein elektrische Fahrzeuge gilt daneben die arithmetisch-degressive Staffel des § 7 Abs. 2a EStG (Anschaffung nach dem 30.6.2025 und vor dem 1.1.2028): 75 % im Anschaffungsjahr, dann 10 %, 5 %, 5 %, 3 % und 2 %. Diese AfA wird nicht zeitanteilig gekürzt; weitere Sonderabschreibungen sind daneben ausgeschlossen. Hybridfahrzeuge sind nicht begünstigt.",
    ],
    goals: [
      "den Anwendungszeitraum und den Höchstsatz der degressiven AfA bestimmen",
      "degressive und lineare AfA im Anschaffungsjahr zeitanteilig gegenüberstellen",
      "den günstigen Wechselzeitpunkt zur linearen AfA erkennen",
      "die 75-%-Staffel des § 7 Abs. 2a EStG auf reine E-Fahrzeuge anwenden",
    ],
    scheme: [
      "Bewegliches Wirtschaftsgut des Anlagevermögens? Anschaffung nach dem 30.6.2025 und vor dem 1.1.2028?",
      "Degressiver Satz: das Dreifache des linearen Satzes, gedeckelt auf 30 % (§ 7 Abs. 2 S. 2 EStG).",
      "Im Anschaffungsjahr zeitanteilig ab dem Anschaffungsmonat (§ 7 Abs. 1 S. 4 EStG).",
      "Folgejahre: Satz auf den jeweiligen Buchwert; Wechsel zu linear prüfen (§ 7 Abs. 3 EStG).",
      "Reines E-Fahrzeug? Dann Wahlrecht § 7 Abs. 2a EStG: 75/10/5/5/3/2 ohne zeitanteilige Kürzung, keine Sonder-AfA daneben.",
      "Handelsbilanz eigenständig würdigen: planmäßige Abschreibung nach Nutzungsverlauf (§ 253 Abs. 3 HGB); das steuerliche Wahlrecht wird unabhängig ausgeübt (§ 5 Abs. 1 S. 1 Hs. 2 EStG).",
    ],
    normchain: [
      "§ 7 Abs. 2 S. 1, S. 2 EStG", "§ 7 Abs. 2a EStG", "§ 7 Abs. 3 EStG", "§ 7 Abs. 1 S. 4 EStG",
      "§ 5 Abs. 1 S. 1 Hs. 2 EStG", "§ 253 Abs. 3 S. 1, S. 2 HGB", "§ 7g Abs. 5 EStG",
    ],
    example: {
      title: "Maschine mit degressiver AfA und elektrischer Lieferwagen",
      facts: "a) MN schafft am 2.10.2025 eine Maschine für 120.000 € an, Nutzungsdauer acht Jahre. Handelsrechtlich wird linear abgeschrieben, steuerlich soll die höchstmögliche AfA angesetzt werden. b) Am 1.8.2025 wird zusätzlich ein rein elektrischer Lieferwagen für 60.000 € angeschafft; auch hier soll die AfA im Anschaffungsjahr maximal sein.",
      solution: [
        "a) Linearer Satz 1/8 = 12,5 %; das Dreifache wäre 37,5 %, gedeckelt auf 30 % (§ 7 Abs. 2 S. 2 EStG).",
        "a) Steuerbilanz 2025: 120.000 € × 30 % × 3/12 = 9.000 € (Oktober bis Dezember). Buchwert 31.12.2025: 111.000 €. 2026: 111.000 € × 30 % = 33.300 €.",
        "a) Handelsbilanz 2025: 120.000 € ÷ 8 × 3/12 = 3.750 €; Buchwert 116.250 €. Der niedrigere Steuerbilanzwert führt bei Kapitalgesellschaften zu passiven latenten Steuern nach § 274 HGB.",
        "a) Wechsel zur linearen AfA (§ 7 Abs. 3 EStG), sobald Restbuchwert ÷ Restnutzungsdauer mehr ergibt als 30 % vom Buchwert – gegen Ende der Laufzeit zwingend sinnvoll, weil die degressive AfA den Buchwert nie auf null führt.",
        "b) Reines E-Fahrzeug, Anschaffung nach dem 30.6.2025: nach § 7 Abs. 2a EStG 75 % von 60.000 € = 45.000 € im Jahr 2025 – ohne zeitanteilige Kürzung trotz Anschaffung im August. 2026: 10 % = 6.000 €; danach 5 %, 5 %, 3 %, 2 %. Weitere Sonderabschreibungen (z. B. § 7g Abs. 5 EStG) sind daneben ausgeschlossen.",
      ],
      result: "Maschine: HB-Buchwert 116.250 €, StB-Buchwert 111.000 €. E-Lieferwagen: AfA 2025 = 45.000 € (75 %), AfA 2026 = 6.000 €.",
    },
    hbstb: {
      datum: "31.12.2025",
      hb: [
        { label: "Maschine (AK)", value: 120000 },
        { label: "lineare AfA 12,5 % × 3/12", value: -3750 },
      ],
      stb: [
        { label: "Maschine (AK)", value: 120000 },
        { label: "degressive AfA 30 % × 3/12", value: -9000 },
      ],
      hbSum: 116250, stbSum: 111000,
    },
    booking: [
      { scope: "HB", title: "Lineare AfA Maschine 2025", soll: [{ konto: "Abschreibungen", betrag: 3750 }], haben: [{ konto: "Maschine", betrag: 3750 }] },
      { scope: "StB", title: "Degressive AfA Maschine 2025 (30 % zeitanteilig)", soll: [{ konto: "Abschreibungen", betrag: 9000 }], haben: [{ konto: "Maschine", betrag: 9000 }] },
      { scope: "StB", title: "75-%-AfA E-Lieferwagen 2025 (§ 7 Abs. 2a EStG)", soll: [{ konto: "Abschreibungen", betrag: 45000 }], haben: [{ konto: "Lieferwagen", betrag: 45000 }] },
    ],
    merksatz: "Degressiv heißt seit Juli 2025: dreifacher linearer Satz, höchstens 30 %, nur für Anschaffungen vom 1.7.2025 bis 31.12.2027 – und beim reinen E-Fahrzeug schlägt die 75-%-Staffel des § 7 Abs. 2a EStG ohne zeitanteilige Kürzung alles andere.",
    exam: [
      "Für Klausuren mit Rechtsstand 2026 ist § 7 Abs. 2 EStG n. F. ein heißer Kandidat: Das Anschaffungsdatum entscheidet, ob überhaupt degressiv abgeschrieben werden darf.",
      "Die Sonder-AfA nach § 7g Abs. 5 EStG (40 %) ist neben der degressiven AfA des § 7 Abs. 2 EStG zulässig – neben der E-Fahrzeug-AfA des § 7 Abs. 2a EStG dagegen nicht.",
    ],
    traps: [
      "Degressive AfA für eine Anschaffung vor dem 1.7.2025 oder nach dem 31.12.2027 ansetzen.",
      "Mehr als 30 % ansetzen, weil das Dreifache des linearen Satzes darüber läge.",
      "Die 75-%-AfA des § 7 Abs. 2a EStG zeitanteilig kürzen – sie gilt für das volle Anschaffungsjahr.",
      "§ 7 Abs. 2a EStG auf ein Hybridfahrzeug anwenden – begünstigt sind nur reine Elektrofahrzeuge.",
      "Den Wechsel zur linearen AfA vergessen, obwohl er gegen Laufzeitende günstiger ist.",
    ],
    sourceIds: ["hgb", "estg", "esth7", "invest25"],
  },
];
