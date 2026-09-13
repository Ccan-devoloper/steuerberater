/* ==========================================================================
   Klausur 3 · Personengesellschaften · „Schritt für Schritt“ (Lernpfad)
   --------------------------------------------------------------------------
   Ein Lernpfad ohne Vorwissen: Jede Lektion setzt nur die vorherige voraus.
   Die Inhalte sind bewusst in einfacher Sprache gehalten und enden immer mit
   einem Klausurblock („So läuft es in der Klausur“), einem Selbstcheck und
   einem Merksatz. Querverweise zeigen auf die Lernmodule, Prüfschemata und
   Originalfälle des PersG-Campus (src/data/k3-persg-tag1.js und Register).

   Blocktypen (gerendert in src/components/K3Lernpfad.jsx):
     absatz    Fließtext
     merke     Merkkasten            falle   Klausurfalle      exkurs  Exkurs
     schritte  nummerierte Schritte  liste   Aufzählung
     tabelle   Kopf + Zeilen
     beispiel  Sachverhalt → Lösungsschritte → Ergebnis
     rechnung  Rechenweg (text/wert/summe)
     buchung   Buchungssatz (soll/haben/note)
     bilanz    kleine Bilanz (aktiva/passiva als [Label, Wert])
     klausur   „So läuft es in der Klausur“
     links     Querverweise (module, schemata, faelle, umwstr, hausaufgaben)

   Rechtsstand: 2025 (MoPeG seit 1.1.2024 berücksichtigt).
   ========================================================================== */

export const persgLernpfadKapitel = [
  { id: "start", label: "A · Erst mal verstehen", text: "Was eine Personengesellschaft steuerlich ist und warum die Klausur immer mit der Mitunternehmerschaft beginnt." },
  { id: "gewinn", label: "B · Gewinn ermitteln", text: "Die zweistufige Gewinnermittlung, Kapitalkonten, Gewinnverteilung und Sondervergütungen." },
  { id: "vermoegen", label: "C · Was gehört wem?", text: "Gesamthandsvermögen, Sonderbetriebsvermögen, Sonderbilanz, Ergänzungsbilanz." },
  { id: "transfer", label: "D · Wirtschaftsgüter bewegen", text: "Einbringung, § 6 Abs. 5 EStG, Trennungstheorie und § 6b EStG." },
  { id: "verlust", label: "E · Verluste", text: "§ 15a EStG für Kommanditisten – Schritt für Schritt gerechnet." },
  { id: "wechsel", label: "F · Kommen, gehen, auflösen", text: "Anteilsverkauf, Eintritt, Austritt, Realteilung und § 24 UmwStG." },
  { id: "klausur", label: "G · Klausurfahrplan", text: "Wie eine PersG-Aufgabe in Klausur 3 aussieht und wie du sie in der Zeit löst." },
];

export const persgLernpfad = [
  /* ====================================================================== A */
  {
    id: "was-ist-persg",
    kapitel: "start",
    titel: "Was ist eine Personengesellschaft – steuerlich gesehen?",
    kurz: "Die Gesellschaft rechnet, die Gesellschafter zahlen: das Transparenzprinzip",
    minuten: 12,
    normen: ["§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§ 179, § 180 Abs. 1 Nr. 2a AO", "§ 5 Abs. 1 S. 3 GewStG", "§ 39 Abs. 2 Nr. 2 AO"],
    ziel: "Du kannst erklären, warum eine OHG oder KG keine Einkommensteuer zahlt, aber trotzdem eine Steuerbilanz aufstellen muss.",
    bloecke: [
      { typ: "absatz", text: "Eine GmbH ist ein eigenes Steuersubjekt: Sie zahlt Körperschaftsteuer auf ihren Gewinn. Eine Personengesellschaft (GbR, OHG, KG, GmbH & Co. KG, Partnerschaft) ist das für die Einkommensteuer nicht. Sie zahlt keine Einkommensteuer. Stattdessen wird ihr Gewinn ermittelt, auf die Gesellschafter verteilt und bei jedem Gesellschafter persönlich versteuert. Das nennt man Transparenzprinzip: Man schaut durch die Gesellschaft hindurch auf die Personen dahinter." },
      { typ: "absatz", text: "Trotzdem ist die Gesellschaft nicht unsichtbar. Sie ist Subjekt der Gewinnermittlung: Sie führt Bücher, stellt eine Handelsbilanz und eine Steuerbilanz auf und ermittelt einen Gewinn. Erst dieser Gewinn wird verteilt. Deshalb heißt es in der Praxis: Die Gesellschaft ist Gewinnermittlungssubjekt, die Gesellschafter sind Steuersubjekte." },
      {
        typ: "tabelle",
        titel: "Wer ist wofür zuständig?",
        kopf: ["Steuerart", "Wer schuldet die Steuer?", "Warum?"],
        zeilen: [
          ["Einkommensteuer", "die Gesellschafter (jeder für seinen Anteil)", "Transparenzprinzip, § 15 Abs. 1 S. 1 Nr. 2 EStG"],
          ["Körperschaftsteuer", "nur Gesellschafter, die selbst Körperschaften sind (z. B. eine GmbH als Kommanditistin)", "der Anteil fließt in deren KSt-Einkommen"],
          ["Gewerbesteuer", "die Personengesellschaft selbst", "§ 5 Abs. 1 S. 3 GewStG – Freibetrag 24.500 € (§ 11 Abs. 1 S. 3 Nr. 1 GewStG)"],
          ["Umsatzsteuer", "die Personengesellschaft selbst", "sie ist Unternehmerin, § 2 Abs. 1 UStG"],
        ],
      },
      { typ: "absatz", text: "Weil der Gewinn bei mehreren Personen ankommt, wird er nicht in jeder Einkommensteuererklärung neu berechnet, sondern einmal zentral: durch die gesonderte und einheitliche Feststellung (§§ 179, 180 Abs. 1 S. 1 Nr. 2 Buchst. a AO). Das Betriebsstättenfinanzamt der Gesellschaft stellt den Gesamtgewinn und die Anteile fest; die Wohnsitzfinanzämter der Gesellschafter übernehmen die Zahlen als Grundlagenbescheid (§ 182 AO)." },
      { typ: "exkurs", titel: "MoPeG: Warum alle weiter „Gesamthand“ sagen", text: "Seit 1.1.2024 kennt das BGB für die rechtsfähige Personengesellschaft keine Gesamthand mehr; das Vermögen gehört der Gesellschaft selbst (§ 713 BGB). Steuerlich ändert das nichts: § 39 Abs. 2 Nr. 2 S. 2 AO ordnet an, dass rechtsfähige Personengesellschaften für die Ertragsbesteuerung weiterhin wie eine Gesamthand behandelt werden. Skripte, Musterlösungen und Prüfer sprechen deshalb weiter von Gesamthandsvermögen und Gesamthandsbilanz – du darfst das auch." },
      { typ: "merke", text: "Personengesellschaft = eigene Buchführung, eigene Steuerbilanz, eigener Gewerbesteuerbescheid – aber die Einkommensteuer zahlen die Gesellschafter auf ihren Anteil." },
      { typ: "klausur", punkte: [
        "Die Aufgabe nennt eine OHG/KG und fragt nach „steuerlichen Auswirkungen“ oder dem „steuerlichen Gewinn“: Gemeint ist immer der Gesamtgewinn der Mitunternehmerschaft und seine Verteilung – nicht die Einkommensteuer der Gesellschafter.",
        "Erster Satz der Lösung: Einkunftsart und Mitunternehmerschaft feststellen (§ 15 Abs. 1 S. 1 Nr. 2 EStG). Erst dann rechnen.",
        "Für die Feststellung reicht in der Regel ein Satz mit § 180 Abs. 1 S. 1 Nr. 2 Buchst. a AO – Punkte gibt es dafür, aber keine Ausführungen über eine Zeile hinaus.",
      ] },
      { typ: "links", module: [1], schemata: ["mitunternehmerschaft"] },
    ],
    selbstcheck: [
      { frage: "Wer zahlt die Einkommensteuer auf den Gewinn einer OHG?", optionen: ["Die OHG selbst", "Die Gesellschafter, jeder auf seinen Anteil", "Niemand – OHG-Gewinne sind steuerfrei"], richtig: 1, erklaerung: "Transparenzprinzip: Die OHG ermittelt den Gewinn, versteuert wird er bei den Gesellschaftern." },
      { frage: "Wer schuldet die Gewerbesteuer einer KG?", optionen: ["Die Komplementärin", "Die KG selbst", "Die Kommanditisten anteilig"], richtig: 1, erklaerung: "§ 5 Abs. 1 S. 3 GewStG: Bei Personengesellschaften ist die Gesellschaft Steuerschuldnerin." },
    ],
    merksatz: "Die Gesellschaft rechnet, die Gesellschafter zahlen. Der Gewinn wird einmal festgestellt (§ 180 AO) und dann verteilt.",
  },
  {
    id: "mitunternehmer",
    kapitel: "start",
    titel: "Mitunternehmerschaft: der Eintrittstest für alles Weitere",
    kurz: "Gesellschafter + Initiative + Risiko = Mitunternehmer",
    minuten: 14,
    normen: ["§ 15 Abs. 1 S. 1 Nr. 2 EStG", "H 15.8 (1) EStH", "§ 15 Abs. 3 EStG"],
    ziel: "Du prüfst in drei Schritten, ob gewerbliche Einkünfte aus einer Mitunternehmerschaft vorliegen.",
    bloecke: [
      { typ: "absatz", text: "Nicht jeder, der an einer Gesellschaft beteiligt ist, ist steuerlich Mitunternehmer. Das Gesetz sagt in § 15 Abs. 1 S. 1 Nr. 2 EStG: Gewerbliche Einkünfte erzielt, wer als Gesellschafter einer Personengesellschaft anzusehen ist, bei der er als Unternehmer (Mitunternehmer) des Betriebs anzusehen ist. Aus diesem Satz baut die Rechtsprechung ein dreistufiges Schema." },
      { typ: "schritte", titel: "Das Prüfschema", punkte: [
        "Gesellschaftsverhältnis (oder wirtschaftlich vergleichbares Gemeinschaftsverhältnis, z. B. Erbengemeinschaft mit Betrieb): Gibt es überhaupt eine Personengesellschaft?",
        "Gewerbliche Tätigkeit der Gesellschaft: originär gewerblich (§ 15 Abs. 2 EStG) – oder kraft Abfärbung/Prägung (§ 15 Abs. 3 EStG, nächste Lektion).",
        "Mitunternehmerinitiative und Mitunternehmerrisiko beim einzelnen Gesellschafter: Beide Merkmale müssen vorliegen, dürfen aber unterschiedlich stark ausgeprägt sein (H 15.8 (1) EStH). Gesamtbild entscheidet.",
      ] },
      {
        typ: "tabelle",
        titel: "Initiative und Risiko im Alltag",
        kopf: ["Merkmal", "Mindestens", "Typisch"],
        zeilen: [
          ["Mitunternehmerinitiative", "Stimm-, Kontroll- und Widerspruchsrechte wie ein Kommanditist (§§ 164, 166 HGB)", "Geschäftsführung, Vertretung, Mitsprache bei Grundlagengeschäften"],
          ["Mitunternehmerrisiko", "Teilhabe am Gewinn und Verlust und an den stillen Reserven einschließlich Geschäftswert", "Haftung, Beteiligung am Liquidationserlös"],
        ],
      },
      { typ: "beispiel", titel: "Der stille Gesellschafter", sachverhalt: "S beteiligt sich still an der Bäckerei des B mit 50.000 €. Er ist nur am Gewinn beteiligt, nicht am Verlust und nicht an den stillen Reserven. Kontrollrechte hat er wie ein Kommanditist.", schritte: [
        "Gesellschaftsverhältnis: ja, stille Gesellschaft (§ 230 HGB).",
        "Gewerbliche Tätigkeit: ja, Bäckerei.",
        "Initiative: schwach, aber vorhanden (Kontrollrechte). Risiko: fehlt – keine Verlustbeteiligung, keine stillen Reserven.",
      ], ergebnis: "Typisch stille Gesellschaft, kein Mitunternehmer. S hat Einkünfte aus Kapitalvermögen (§ 20 Abs. 1 Nr. 4 EStG); B zieht die Gewinnbeteiligung als Betriebsausgabe ab. Wäre S auch an Verlust und stillen Reserven beteiligt (atypisch still), wäre er Mitunternehmer mit Einkünften nach § 15 EStG." },
      { typ: "falle", text: "Der Kommanditist ist der Maßstab, nicht das Minimum jedes Merkmals einzeln: Wer nur Gewinnbeteiligung ohne stille Reserven hat, kann Mitunternehmer sein, wenn seine Initiative besonders stark ist (Geschäftsführer). Fehlt beides schwach – kein Mitunternehmer (BFH VIII R 63/13 zur Freiberuflerpraxis)." },
      { typ: "klausur", punkte: [
        "Immer alle drei Stufen kurz abhaken, auch wenn sie unproblematisch sind – das sind sichere Punkte.",
        "Bei einer GmbH & Co. KG: Auch die Komplementär-GmbH ist Mitunternehmerin, selbst ohne Kapitalanteil (Haftungsrisiko + Geschäftsführung).",
        "Rechtsfolge ausschreiben: Einkünfte aus Gewerbebetrieb nach § 15 Abs. 1 S. 1 Nr. 2 EStG, Gewinn wird gesondert und einheitlich festgestellt.",
      ] },
      { typ: "links", module: [1, 3], schemata: ["mitunternehmerschaft", "mu-eigenschaft"] },
    ],
    selbstcheck: [
      { frage: "Welche beiden Merkmale müssen bei einem Mitunternehmer zusammenkommen?", optionen: ["Kapitaleinlage und Haftung", "Mitunternehmerinitiative und Mitunternehmerrisiko", "Geschäftsführung und Vertretung"], richtig: 1, erklaerung: "Beide Merkmale müssen vorliegen; sie können unterschiedlich stark sein, aber keines darf fehlen." },
      { frage: "Ein typisch stiller Gesellschafter ohne Beteiligung an Verlust und stillen Reserven ist …", optionen: ["Mitunternehmer mit Einkünften nach § 15 EStG", "kein Mitunternehmer; er hat Einkünfte nach § 20 Abs. 1 Nr. 4 EStG", "Arbeitnehmer des Inhabers"], richtig: 1, erklaerung: "Ohne Mitunternehmerrisiko bleibt es bei Kapitaleinkünften." },
    ],
    merksatz: "Gesellschafter – gewerbliche Gesellschaft – Initiative und Risiko. Drei Häkchen, dann ist § 15 Abs. 1 S. 1 Nr. 2 EStG eröffnet.",
  },
  {
    id: "abfaerbung",
    kapitel: "start",
    titel: "Abfärbung und gewerbliche Prägung: Wenn aus Vermietung Gewerbe wird",
    kurz: "§ 15 Abs. 3 Nr. 1 und Nr. 2 EStG in Klartext",
    minuten: 12,
    normen: ["§ 15 Abs. 3 Nr. 1 EStG", "§ 15 Abs. 3 Nr. 2 EStG", "H 15.8 (5) EStH"],
    ziel: "Du erkennst, wann eine an sich nicht gewerbliche Personengesellschaft trotzdem in vollem Umfang gewerbliche Einkünfte hat.",
    bloecke: [
      { typ: "absatz", text: "Ein Einzelunternehmer kann nebeneinander freiberufliche und gewerbliche Einkünfte haben. Eine Personengesellschaft kann das nicht: Sie hat immer nur eine Einkunftsart. Übt sie auch nur teilweise eine gewerbliche Tätigkeit aus, färbt das auf alles ab (§ 15 Abs. 3 Nr. 1 EStG): Die gesamte Tätigkeit gilt als Gewerbebetrieb. Das nennt man Abfärbung oder Infektion." },
      {
        typ: "tabelle",
        titel: "Die drei Varianten",
        kopf: ["Variante", "Was passiert?", "Bagatellgrenze?"],
        zeilen: [
          ["Horizontale Abfärbung (§ 15 Abs. 3 Nr. 1 Alt. 1)", "Eine Ärzte-GbR verkauft nebenbei Nahrungsergänzungsmittel: Die gewerbliche Nebentätigkeit infiziert die freiberufliche.", "Ja: Gewerbeumsatz bis 3 % der Gesamtnettoumsätze und höchstens 24.500 € im Jahr ist unschädlich (BFH VIII R 6/12)."],
          ["Vertikale Abfärbung (§ 15 Abs. 3 Nr. 1 Alt. 2)", "Eine vermögensverwaltende KG hält einen Anteil an einer gewerblichen Personengesellschaft: Die Beteiligungseinkünfte infizieren die Obergesellschaft.", "Nein: keine Bagatellgrenze (BFH IV R 30/16); auch negative Beteiligungseinkünfte färben ab (Gesetz seit 2019)."],
          ["Gewerbliche Prägung (§ 15 Abs. 3 Nr. 2)", "Eine nur vermögensverwaltende KG, bei der ausschließlich Kapitalgesellschaften persönlich haften und nur diese oder Nichtgesellschafter Geschäftsführer sind (klassische GmbH & Co. KG).", "Nicht relevant – die Prägung folgt allein aus der Struktur."],
        ],
      },
      { typ: "beispiel", titel: "Die Immobilien-GmbH & Co. KG", sachverhalt: "Die X-GmbH & Co. KG vermietet nur ein Bürohaus. Komplementärin ist die X-GmbH (0 % am Kapital, alleinige Geschäftsführung). Kommanditisten sind A und B.", schritte: [
        "Originär gewerblich? Nein – reine Vermietung wäre § 21 EStG.",
        "Abfärbung? Nein, keine gewerbliche Teiltätigkeit.",
        "Prägung? Ja: Nur eine Kapitalgesellschaft haftet persönlich, nur sie führt die Geschäfte.",
      ], ergebnis: "Die KG erzielt in vollem Umfang gewerbliche Einkünfte (§ 15 Abs. 3 Nr. 2 EStG). Folge: Das Bürohaus ist Betriebsvermögen, Wertsteigerungen sind steuerverstrickt, es fällt Gewerbesteuer an (mit erweiterter Kürzung nach § 9 Nr. 1 S. 2 GewStG als möglichem Ausweg)." },
      { typ: "falle", text: "Die Prägung entfällt, sobald ein Kommanditist (natürliche Person) zur Geschäftsführung befugt ist – dann ist die KG „entprägt“ und erzielt Vermietungseinkünfte. Das ist in der Klausur ein beliebter Dreh: Der Wechsel von geprägt zu entprägt (oder umgekehrt) ist eine Betriebsaufgabe bzw. Betriebseröffnung mit Aufdeckung stiller Reserven (§ 16 Abs. 3 EStG)." },
      { typ: "klausur", punkte: [
        "Prüfreihenfolge immer: originär gewerblich (§ 15 Abs. 2) → Abfärbung (§ 15 Abs. 3 Nr. 1) → Prägung (§ 15 Abs. 3 Nr. 2).",
        "Bagatellgrenze nur bei der horizontalen Abfärbung nennen – beide Werte (3 % und 24.500 €) müssen eingehalten sein.",
        "Rechtsfolge immer benennen: „in vollem Umfang“ Gewerbebetrieb, alle Wirtschaftsgüter sind Betriebsvermögen, Gewerbesteuerpflicht.",
      ] },
      { typ: "links", module: [2], schemata: ["abfaerbung"] },
    ],
    selbstcheck: [
      { frage: "Eine Rechtsanwalts-GbR erzielt 2 % ihrer Nettoumsätze (18.000 €) mit dem Verkauf von Software. Folge?", optionen: ["Alles wird gewerblich (Abfärbung)", "Unschädlich, Bagatellgrenze eingehalten – die GbR bleibt freiberuflich", "Nur der Softwareverkauf ist gewerblich"], richtig: 1, erklaerung: "Horizontale Abfärbung mit Bagatellgrenze: bis 3 % und höchstens 24.500 € ist die gewerbliche Nebentätigkeit unschädlich." },
      { frage: "Wann ist eine KG gewerblich geprägt?", optionen: ["Wenn sie einen Gewerbebetrieb betreibt", "Wenn nur Kapitalgesellschaften persönlich haften und nur diese oder Nichtgesellschafter zur Geschäftsführung befugt sind", "Wenn ein Kommanditist eine GmbH ist"], richtig: 1, erklaerung: "§ 15 Abs. 3 Nr. 2 EStG verlangt beides: Haftung nur durch Kapitalgesellschaften und Geschäftsführung nur durch diese oder Nichtgesellschafter." },
    ],
    merksatz: "Eine Personengesellschaft hat nur eine Einkunftsart. Ein bisschen Gewerbe (über der Bagatellgrenze) oder die GmbH-&-Co.-Struktur machen alles gewerblich.",
  },

  /* ====================================================================== B */
  {
    id: "zwei-stufen",
    kapitel: "gewinn",
    titel: "Die zweistufige Gewinnermittlung: das Herz jeder PersG-Aufgabe",
    kurz: "Stufe 1 Gesamthandsbilanz, Stufe 2 Sonder- und Ergänzungsbilanzen – zusammen der Gesamtgewinn",
    minuten: 16,
    normen: ["§ 15 Abs. 1 S. 1 Nr. 2 S. 1 EStG", "§ 4 Abs. 1, § 5 Abs. 1 EStG", "§ 60 Abs. 2 EStDV"],
    ziel: "Du kannst das Schema der additiven Gewinnermittlung aufschreiben und weißt, welche Zahl in welche Stufe gehört.",
    bloecke: [
      { typ: "absatz", text: "Der Gewinn eines Mitunternehmers besteht aus zwei Teilen. Erstens seinem Anteil am Gewinn der Gesellschaft (Stufe 1). Zweitens allem, was er außerhalb der Gesellschaftskasse von der Gesellschaft bekommt oder ihr zur Verfügung stellt: Gehalt, Zinsen, Miete, sein Sonderbetriebsvermögen und seine Ergänzungsbilanz (Stufe 2). Beide Stufen zusammen ergeben den steuerlichen Gesamtgewinn der Mitunternehmerschaft. Diese Zahl wird festgestellt und ist zugleich Ausgangsgröße für die Gewerbesteuer." },
      { typ: "schritte", titel: "So baust du die Gewinnermittlung immer auf", punkte: [
        "Stufe 1a: Handelsbilanzgewinn der Gesellschaft nehmen und mit steuerlichen Korrekturen (§ 60 Abs. 2 EStDV, z. B. nicht abziehbare Betriebsausgaben, andere Abschreibung) zum Steuerbilanzgewinn der Gesamthand machen.",
        "Stufe 1b: Steuerbilanzgewinn nach dem Gewinnverteilungsschlüssel auf die Gesellschafter verteilen (Vorabgewinne zuerst).",
        "Stufe 2a: Für jeden Gesellschafter die Ergänzungsbilanz fortschreiben (Mehr- oder Minder-AfA) – Ergebnis dem Gesellschafter persönlich zurechnen.",
        "Stufe 2b: Für jeden Gesellschafter Sonderbetriebseinnahmen (Sondervergütungen, Erträge aus SBV) und Sonderbetriebsausgaben (Aufwand aus SBV, Refinanzierungszinsen) ermitteln – Sonderbilanz/Sonder-GuV.",
        "Summe je Gesellschafter = Anteil am Gesamtgewinn. Summe aller Gesellschafter = Gesamtgewinn der Mitunternehmerschaft.",
      ] },
      {
        typ: "tabelle",
        titel: "Das Zahlenraster, das in jeder Klausurlösung steht",
        kopf: ["", "A", "B", "Summe"],
        zeilen: [
          ["Steuerbilanzgewinn Gesamthand (nach Verteilung)", "60.000", "40.000", "100.000"],
          ["+/− Ergebnis Ergänzungsbilanz", "−5.000", "0", "−5.000"],
          ["+ Sonderbetriebseinnahmen", "24.000", "0", "24.000"],
          ["− Sonderbetriebsausgaben", "−3.000", "0", "−3.000"],
          ["= Anteil am Gesamtgewinn", "76.000", "40.000", "116.000"],
        ],
      },
      { typ: "absatz", text: "Warum ist die Sondervergütung nicht doppelt drin? Weil sie in der Gesamthand als Aufwand den Gewinn gemindert hat (Stufe 1 kleiner) und in der Sonderbilanz des Empfängers als Ertrag wieder auftaucht (Stufe 2 größer). Über alle Gesellschafter hinweg hebt sich das auf; nur die Verteilung ändert sich. Genau das will § 15 Abs. 1 S. 1 Nr. 2 S. 1 Halbsatz 2 EStG: Der Mitunternehmer soll wie ein Einzelunternehmer behandelt werden, der sich kein Gehalt zahlen kann." },
      { typ: "merke", text: "Stufe 1 ist die Gesellschaft, Stufe 2 ist der Gesellschafter. Erst Stufe 1 komplett rechnen und verteilen, dann Stufe 2 je Person. Nie mischen." },
      { typ: "klausur", punkte: [
        "Lege dir am Anfang die Tabelle mit einer Spalte je Gesellschafter und einer Summenspalte an und trage jede Korrektur sofort ein – so verlierst du keinen Betrag.",
        "Eine Korrektur, die die Gesamthand betrifft (z. B. Rückstellung falsch gebucht), ändert Stufe 1 und wird verteilt. Eine Korrektur beim Gesellschafter (z. B. Tätigkeitsvergütung) ändert nur seine Stufe 2.",
        "Der Gesamtgewinn ist zugleich Ausgangswert für § 7 GewStG. Prüfer fragen gern nach dem Gewerbeertrag als letzten Punkt.",
      ] },
      { typ: "links", module: [4, 5], schemata: ["gewinnstufen"], faelle: ["persg-fall-1"] },
    ],
    selbstcheck: [
      { frage: "Die OHG zahlt Gesellschafter A ein Geschäftsführergehalt von 50.000 €. Wie wirkt es sich auf den Gesamtgewinn der Mitunternehmerschaft aus?", optionen: ["Er sinkt um 50.000 €", "Er bleibt unverändert; nur A bekommt 50.000 € mehr zugerechnet", "Er steigt um 50.000 €"], richtig: 1, erklaerung: "Aufwand in Stufe 1, Sonderbetriebseinnahme in Stufe 2 – per Saldo neutral, aber die Verteilung verschiebt sich zu A." },
      { frage: "Wo landet die Mehr-AfA aus einer positiven Ergänzungsbilanz?", optionen: ["Im Gewinn der Gesamthand", "Beim betroffenen Gesellschafter in Stufe 2", "Sie ist steuerlich unbeachtlich"], richtig: 1, erklaerung: "Ergänzungsbilanzen sind personenbezogen; ihr Ergebnis wird nur dem jeweiligen Gesellschafter zugerechnet." },
    ],
    merksatz: "Gesamtgewinn = Steuerbilanzgewinn der Gesamthand ± Ergänzungsbilanzen + Sonderbetriebseinnahmen − Sonderbetriebsausgaben.",
  },
  {
    id: "kapitalkonten",
    kapitel: "gewinn",
    titel: "Kapitalkonten: Welches Konto ist Eigenkapital – und warum das so wichtig ist",
    kurz: "Kapitalkonto I, II, Privatkonto, Verlustkonto, Darlehenskonto",
    minuten: 14,
    normen: ["§§ 120–122, 169 HGB", "§ 15a EStG", "BMF 30.05.1997 (BStBl I 1997, 627)"],
    ziel: "Du ordnest jedes Gesellschafterkonto als Eigen- oder Fremdkapital ein und weißt, welche steuerlichen Folgen daran hängen.",
    bloecke: [
      { typ: "absatz", text: "Bei einem Einzelunternehmer gibt es ein Kapitalkonto. Bei einer Personengesellschaft führt jeder Gesellschafter mehrere Konten. Das ist keine Schikane, sondern Ordnung: Das feste Kapital (Beteiligungsquote, Stimmrechte, Haftsumme) soll sich nicht bei jeder Entnahme ändern. Deshalb das Zwei-, Drei- oder Vier-Konten-Modell." },
      {
        typ: "tabelle",
        titel: "Die üblichen Konten",
        kopf: ["Konto", "Was steht darauf?", "Eigen- oder Fremdkapital?"],
        zeilen: [
          ["Kapitalkonto I (Festkapital)", "Pflichteinlage; Maßstab für Gewinnverteilung und Stimmrechte", "Eigenkapital"],
          ["Kapitalkonto II (variables Kapital)", "nicht entnommene Gewinne, Verluste (wenn kein eigenes Verlustkonto), weitere Einlagen", "Eigenkapital, wenn Verluste damit verrechnet werden"],
          ["Verlustvortragskonto", "Verlustanteile, die künftige Gewinne aufzehren", "Eigenkapital (negativ)"],
          ["Privatkonto / Verrechnungskonto", "Entnahmen, Einlagen, entnahmefähige Gewinne, laufender Zahlungsverkehr", "Fremdkapital (Forderung/Verbindlichkeit), wenn keine Verlustverrechnung und jederzeit fällig"],
          ["Darlehenskonto", "echtes Gesellschafterdarlehen mit Zins und Kündigung", "Fremdkapital der Gesellschaft; beim Gesellschafter Sonderbetriebsvermögen I"],
        ],
      },
      { typ: "absatz", text: "Die entscheidende Frage ist immer: Werden auf diesem Konto Verluste verbucht? Wenn ja, ist es Eigenkapital (BMF 30.05.1997). Wenn nein, ist es eine Forderung des Gesellschafters gegen die Gesellschaft – also Fremdkapital in der Gesamthandsbilanz und Sonderbetriebsvermögen des Gesellschafters." },
      { typ: "absatz", text: "Warum das wichtig ist: (1) § 15a EStG: Nur das Eigenkapitalkonto des Kommanditisten bestimmt, wie viel Verlust ausgleichsfähig ist. (2) Übertragungen gegen Gesellschaftsrechte (§ 6 Abs. 5 S. 3 EStG, § 24 UmwStG): Nur eine Gutschrift auf einem Eigenkapitalkonto ist eine Gewährung von Gesellschaftsrechten; eine Gutschrift auf dem Darlehenskonto ist eine sonstige Gegenleistung. (3) Bei Ausscheiden: Das Kapitalkonto ist der Buchwert des Anteils für § 16 EStG." },
      { typ: "beispiel", titel: "Einlage eines Grundstücks", sachverhalt: "Kommanditist K überträgt ein Grundstück (Buchwert 100.000 €, Verkehrswert 300.000 €) auf die KG. Variante 1: Gutschrift 300.000 € auf Kapitalkonto I. Variante 2: Gutschrift 300.000 € auf dem Darlehenskonto. Variante 3: Gutschrift auf der gesamthänderisch gebundenen Rücklage.", schritte: [
        "Variante 1: Gegenleistung sind Gesellschaftsrechte → Übertragung gegen Gesellschaftsrechte (tauschähnlich), aus BV: § 6 Abs. 5 S. 3 EStG Buchwert zwingend; aus PV: Veräußerung (ggf. § 23 EStG).",
        "Variante 2: Gegenleistung ist ein Darlehen → voll entgeltliche Veräußerung zum Verkehrswert, stille Reserven werden aufgedeckt.",
        "Variante 3: Keine Gegenleistung → Einlage (§ 4 Abs. 1 S. 8 EStG), Bewertung nach § 6 Abs. 1 Nr. 5 EStG; aus einem anderen BV: § 6 Abs. 5 S. 3 EStG Buchwert.",
      ], ergebnis: "Dasselbe Grundstück, drei Konten, drei völlig verschiedene Rechtsfolgen. Die Klausur nennt das Konto immer – lies genau." },
      { typ: "falle", text: "„Kapitalkonto II“ ist nicht automatisch Eigenkapital. Steht im Gesellschaftsvertrag, dass Verluste nur auf Kapitalkonto I oder einem Verlustkonto gebucht werden und Kapitalkonto II jederzeit entnehmbar ist, ist es Fremdkapital. Prüfe im Sachverhalt: Verlustverrechnung ja oder nein?" },
      { typ: "klausur", punkte: [
        "Bei jeder Gutschrift an einen Gesellschafter zuerst das Konto einordnen: Eigenkapital (Gesellschaftsrechte) oder Fremdkapital (Gegenleistung/Darlehen).",
        "Formulierung: „Die Gutschrift auf dem Kapitalkonto II stellt eine Gewährung von Gesellschaftsrechten dar, weil auf diesem Konto nach dem Gesellschaftsvertrag auch Verluste verbucht werden (BMF 30.05.1997).“",
        "Bei § 15a EStG: Kapitalkonto = Kapitalkonto I + II + Verlustkonto + Ergänzungsbilanz; Sonderbilanz und Darlehenskonto zählen nicht.",
      ] },
      { typ: "links", module: [11, 20, 22], schemata: ["kapitalkonten2", "einbringung"], faelle: ["persg-fall-8"] },
    ],
    selbstcheck: [
      { frage: "Woran erkennst du, ob ein Gesellschafterkonto Eigenkapital ist?", optionen: ["Am Namen des Kontos", "Daran, ob Verluste darauf verbucht werden", "Daran, ob es verzinst wird"], richtig: 1, erklaerung: "Maßgeblich ist die Verlustteilnahme (BMF 30.05.1997). Der Kontoname ist nur ein Indiz." },
      { frage: "Gutschrift für ein eingebrachtes Wirtschaftsgut auf dem Darlehenskonto bedeutet …", optionen: ["Einlage", "Übertragung gegen Gesellschaftsrechte", "entgeltliche Veräußerung an die Gesellschaft"], richtig: 2, erklaerung: "Das Darlehenskonto ist Fremdkapital – die Gesellschaft schuldet Geld. Das ist ein Kaufpreis, keine Beteiligung." },
    ],
    merksatz: "Verluste drauf = Eigenkapital = Gesellschaftsrechte. Keine Verluste drauf = Forderung = Gegenleistung.",
  },
  {
    id: "gewinnverteilung",
    kapitel: "gewinn",
    titel: "Gewinnverteilung: Vorab, Verzinsung, Rest – und was bei Verlust passiert",
    kurz: "Der Schlüssel aus dem Gesellschaftsvertrag, hilfsweise das Gesetz",
    minuten: 12,
    normen: ["§ 709 Abs. 3 BGB", "§ 120, § 121 HGB", "§ 15 Abs. 1 S. 1 Nr. 2 EStG"],
    ziel: "Du verteilst einen Gewinn oder Verlust nach einem mehrstufigen Schlüssel fehlerfrei.",
    bloecke: [
      { typ: "absatz", text: "Nach der Steuerbilanz steht der Gewinn der Gesamthand fest. Jetzt muss er auf die Köpfe. Maßgeblich ist der Gesellschaftsvertrag. Schweigt er, gilt das Gesetz: Seit dem MoPeG richtet sich die Verteilung nach den vereinbarten Beteiligungsverhältnissen, hilfsweise nach dem Wert der Beiträge, zuletzt nach Köpfen (§ 709 Abs. 3 BGB, über § 120 HGB auch für OHG und KG)." },
      { typ: "schritte", titel: "Mehrstufige Schlüssel abarbeiten", punkte: [
        "Vorabgewinn (z. B. Tätigkeitsvergütung als Gewinnvorab, Haftungsvergütung der Komplementär-GmbH) dem Berechtigten zuweisen.",
        "Kapitalverzinsung auf die Kapitalkonten zuweisen, wenn vereinbart.",
        "Restgewinn nach dem allgemeinen Schlüssel (Quoten, Köpfe) verteilen. Bei Verlust: Vorabgewinne trotzdem gewähren, der Rest wird entsprechend negativer.",
      ] },
      { typ: "beispiel", titel: "Verteilung mit Vorab und Verlust", sachverhalt: "Die AB-OHG hat 2025 einen Steuerbilanzverlust von 20.000 €. A erhält laut Vertrag einen Vorabgewinn von 60.000 € für seine Geschäftsführung; der Rest wird 50 : 50 verteilt.", schritte: [
        "Vorab A: +60.000 €.",
        "Restbetrag: −20.000 € − 60.000 € = −80.000 €.",
        "Rest 50 : 50: A −40.000 €, B −40.000 €.",
      ], ergebnis: "A: +60.000 − 40.000 = +20.000 €. B: −40.000 €. Summe: −20.000 € = Steuerbilanzverlust. Die Kontrollsumme muss immer stimmen." },
      { typ: "absatz", text: "Vorabgewinn oder Sondervergütung? Beides ist steuerlich Teil der gewerblichen Einkünfte des Empfängers und ändert den Gesamtgewinn nicht. Der Unterschied ist die Technik: Der Vorabgewinn ist Teil der Gewinnverteilung (Stufe 1, kein Aufwand). Die Sondervergütung ist Aufwand der Gesellschaft (Stufe 1 sinkt) und Sonderbetriebseinnahme (Stufe 2 steigt). Bei einem Verlustjahr verschiebt sich dadurch, wer wie viel Verlust trägt – und bei § 15a EStG kann das entscheidend sein, weil Sonderbetriebseinnahmen nicht unter § 15a fallen." },
      { typ: "falle", text: "Die Umsatzsteuer unterscheidet strenger: Ein gewinnabhängiger Vorabgewinn ist kein Entgelt (nicht steuerbar). Eine feste, gewinnunabhängige Tätigkeitsvergütung ist ein Sonderentgelt und bei einem selbständig tätigen Gesellschafter umsatzsteuerbar (Abschn. 1.6 Abs. 3 ff. UStAE)." },
      { typ: "klausur", punkte: [
        "Erst alle Vorabbeträge, dann Verzinsung, dann Rest. Kontrollsumme: Summe der Anteile = Steuerbilanzgewinn.",
        "Ist eine Vergütung „als Vorabgewinn“ oder „als Aufwand gebucht“? Der Sachverhalt sagt es. Wenn als Aufwand gebucht: Sondervergütung, Stufe 2.",
        "Bei einer GmbH & Co. KG nicht die Haftungsvergütung der Komplementärin vergessen – sie ist Vorabgewinn oder Sondervergütung, in jedem Fall Einkünfte der GmbH nach § 15 EStG.",
      ] },
      { typ: "links", module: [5, 10], schemata: ["verguetungen"], faelle: ["persg-fall-1", "persg-fall-2"] },
    ],
    selbstcheck: [
      { frage: "Der Gesellschaftsvertrag schweigt zur Gewinnverteilung. Wonach wird verteilt?", optionen: ["Immer nach Köpfen", "Nach den vereinbarten Beteiligungsverhältnissen, hilfsweise nach Beitragswerten, zuletzt nach Köpfen", "Nach der Höhe der Entnahmen"], richtig: 1, erklaerung: "§ 709 Abs. 3 BGB in der Fassung des MoPeG, über § 120 HGB auch für OHG/KG." },
      { frage: "Ein Vorabgewinn wird in einem Verlustjahr …", optionen: ["nicht gewährt", "trotzdem gewährt; der übrige Verlust wird entsprechend größer", "in eine Sondervergütung umgewandelt"], richtig: 1, erklaerung: "Der Vorab ist Teil des Verteilungsschlüssels und wird zuerst zugewiesen – auch wenn dadurch der Rest negativer wird." },
    ],
    merksatz: "Vorab – Verzinsung – Rest. Und am Ende die Kontrollsumme: Alle Anteile zusammen ergeben den Steuerbilanzgewinn.",
  },
  {
    id: "sonderverguetungen",
    kapitel: "gewinn",
    titel: "Sondervergütungen: Gehalt, Zinsen und Miete vom eigenen Betrieb",
    kurz: "§ 15 Abs. 1 S. 1 Nr. 2 S. 1 Halbsatz 2 EStG – die Umqualifizierung",
    minuten: 14,
    normen: ["§ 15 Abs. 1 S. 1 Nr. 2 S. 1 HS 2 EStG", "§ 15 Abs. 1 S. 1 Nr. 2 S. 2 EStG", "§ 7 GewStG", "§ 4 Nr. 12, § 9 UStG"],
    ziel: "Du buchst eine Sondervergütung in Gesamthand und Sonderbilanz und erklärst, warum sie gewerbliche Einkünfte bleibt.",
    bloecke: [
      { typ: "absatz", text: "Ein Einzelunternehmer kann sich kein Gehalt zahlen und sich kein Darlehen geben. Damit ein Mitunternehmer nicht besser steht, sagt das Gesetz: Vergütungen, die der Gesellschafter von der Gesellschaft für seine Tätigkeit im Dienst der Gesellschaft, für die Hingabe von Darlehen oder für die Überlassung von Wirtschaftsgütern bezieht, gehören zu seinen gewerblichen Einkünften. Egal, ob sie zivilrechtlich Gehalt, Zins oder Miete heißen." },
      {
        typ: "tabelle",
        titel: "Die drei Fallgruppen",
        kopf: ["Vergütung für …", "Ohne die Regel wäre es …", "Mit § 15 Abs. 1 S. 1 Nr. 2 HS 2"],
        zeilen: [
          ["Tätigkeit im Dienst der Gesellschaft (Geschäftsführung, Mitarbeit)", "§ 19 EStG (Arbeitslohn) oder § 18 EStG", "gewerbliche Sonderbetriebseinnahme; keine Lohnsteuer, kein Arbeitnehmer-Pauschbetrag"],
          ["Hingabe von Darlehen", "§ 20 EStG (Kapitaleinkünfte, Abgeltungsteuer)", "Sonderbetriebseinnahme; die Darlehensforderung ist SBV I"],
          ["Überlassung von Wirtschaftsgütern (Grundstück, Maschine, Patent)", "§ 21 oder § 22 EStG", "Sonderbetriebseinnahme; das überlassene Wirtschaftsgut ist SBV I – seine stillen Reserven sind steuerverstrickt"],
        ],
      },
      { typ: "beispiel", titel: "Die Halle des Kommanditisten", sachverhalt: "K vermietet der K-KG eine Lagerhalle (Anschaffungskosten Gebäude 400.000 €, jährliche AfA 12.000 €) für 36.000 € Jahresmiete. Für den Kauf hat K ein Darlehen aufgenommen; Zinsen 8.000 €. Die KG hat die Miete als Aufwand gebucht.", schritte: [
        "Gesamthand (Stufe 1): Mietaufwand 36.000 € bleibt Betriebsausgabe – der Steuerbilanzgewinn ist um 36.000 € niedriger.",
        "Sonderbilanz K (Stufe 2): Halle ist SBV I – aktivieren mit fortgeführten AK; Refinanzierungsdarlehen ist passives SBV.",
        "Sonder-GuV K: Sonderbetriebseinnahme Miete 36.000 €; Sonderbetriebsausgaben AfA 12.000 € und Zinsen 8.000 €.",
      ], ergebnis: "K bekommt zusätzlich 36.000 − 12.000 − 8.000 = 16.000 € Sonderergebnis zugerechnet. Der Gesamtgewinn der Mitunternehmerschaft ist per Saldo um 20.000 € niedriger als ohne den Vorgang (Aufwand 36.000 in Stufe 1, Einnahme 36.000 minus Ausgaben 20.000 in Stufe 2). Verkauft K die Halle später, ist der Gewinn gewerblich – keine Spekulationsfrist." },
      { typ: "buchung", satz: { title: "Sonderbilanz K: Miete zufließend (Zahlung auf Privatkonto des K)", soll: [{ konto: "Bank (Sonderbereich) / Privat", betrag: 36000 }], haben: [{ konto: "Sonderbetriebseinnahme Miete", betrag: 36000 }], note: "In der Gesamthandsbilanz bleibt die Buchung „Mietaufwand an Bank“ stehen. Die Korrektur passiert ausschließlich in der Sonderbilanz – nie durch Streichen des Aufwands in der Gesamthand." } },
      { typ: "absatz", text: "Gewerbesteuer: Weil die Sondervergütung Teil des Gesamtgewinns ist, ist sie automatisch im Gewerbeertrag der Gesellschaft (§ 7 GewStG). Eine Hinzurechnung nach § 8 GewStG findet für die Zinsen nicht statt – sie sind ja gar nicht mehr abgezogen. Umsatzsteuer: Die Vermietung ist ein Leistungsaustausch; K ist Unternehmer, die Miete ist nach § 4 Nr. 12 UStG steuerfrei, Option nach § 9 UStG möglich." },
      { typ: "falle", text: "Auch mittelbar über eine andere Personengesellschaft beteiligte Gesellschafter fallen unter die Regel (§ 15 Abs. 1 S. 1 Nr. 2 S. 2 EStG). Und: Vergütungen, die der Gesellschafter von einem Dritten für Leistungen an die Gesellschaft bekommt, sind keine Sondervergütungen." },
      { typ: "klausur", punkte: [
        "Dreischritt formulieren: (1) Vergütung ist Aufwand in der Gesamthand, (2) Umqualifizierung nach § 15 Abs. 1 S. 1 Nr. 2 S. 1 HS 2 EStG in Sonderbetriebseinnahmen, (3) das überlassene Wirtschaftsgut/Darlehen ist SBV I – Sonderbilanz aufstellen.",
        "Sonderbetriebsausgaben nicht vergessen: AfA, Refinanzierungszinsen, Grundsteuer, Reparaturen des SBV.",
        "Zum Schluss den Blick auf GewSt und USt – oft je ein Punkt.",
      ] },
      { typ: "links", module: [7, 10], schemata: ["verguetungen", "sbv"], faelle: ["persg-fall-2"] },
    ],
    selbstcheck: [
      { frage: "Der Kommanditist erhält von der KG Zinsen für ein Gesellschafterdarlehen. Einkunftsart?", optionen: ["§ 20 EStG mit Abgeltungsteuer", "§ 15 EStG als Sonderbetriebseinnahme", "§ 22 EStG"], richtig: 1, erklaerung: "Vergütung für die Hingabe von Darlehen – Umqualifizierung nach § 15 Abs. 1 S. 1 Nr. 2 S. 1 HS 2 EStG; die Forderung ist SBV I." },
      { frage: "Wie wird die als Aufwand gebuchte Geschäftsführervergütung in der Gesamthandsbilanz korrigiert?", optionen: ["Der Aufwand wird in der Gesamthand gestrichen", "Gar nicht – die Erfassung erfolgt als Sonderbetriebseinnahme in der Sonderbilanz", "Der Aufwand wird außerbilanziell hinzugerechnet"], richtig: 1, erklaerung: "Die Gesamthandsbilanz bleibt richtig; die zweite Stufe macht die Umqualifizierung." },
    ],
    merksatz: "Was der Gesellschafter von seiner Gesellschaft für Arbeit, Geld oder Sachen bekommt, ist immer Gewerbe – Aufwand unten, Sonderbetriebseinnahme oben, Wirtschaftsgut ins SBV I.",
  },

  /* ====================================================================== C */
  {
    id: "sbv",
    kapitel: "vermoegen",
    titel: "Sonderbetriebsvermögen I und II: Was dem Gesellschafter gehört, aber zum Betrieb zählt",
    kurz: "Vom Grundstück bis zur Komplementär-GmbH-Beteiligung",
    minuten: 15,
    normen: ["R 4.2 Abs. 2 EStR", "§ 15 Abs. 1 S. 1 Nr. 2 EStG", "H 4.2 (2) EStH"],
    ziel: "Du erkennst SBV I und SBV II sicher, unterscheidest notwendiges von gewillkürtem SBV und weißt, was in die Sonderbilanz gehört.",
    bloecke: [
      { typ: "absatz", text: "Zum Betriebsvermögen einer Mitunternehmerschaft gehört nicht nur das, was der Gesellschaft gehört (Gesamthandsvermögen). Auch Wirtschaftsgüter, die einem Gesellschafter gehören, sind Betriebsvermögen, wenn sie dem Betrieb der Gesellschaft dienen (SBV I) oder der Beteiligung des Gesellschafters dienen (SBV II). Sie werden in einer Sonderbilanz des Gesellschafters erfasst." },
      {
        typ: "tabelle",
        titel: "SBV I und SBV II",
        kopf: ["", "Sonderbetriebsvermögen I", "Sonderbetriebsvermögen II"],
        zeilen: [
          ["Dient …", "unmittelbar dem Betrieb der Gesellschaft", "der Beteiligung des Gesellschafters an der Gesellschaft (stärkt oder begründet sie)"],
          ["Typische Beispiele", "vermietetes Grundstück, überlassene Maschine, Darlehensforderung gegen die Gesellschaft, Patent", "Anteil an der Komplementär-GmbH, Darlehen zur Finanzierung der Einlage (passiv), Anteil an einer GmbH, die wichtige Geschäftspartnerin der KG ist"],
          ["Notwendig oder gewillkürt?", "notwendig, wenn ausschließlich und unmittelbar dem Betrieb dienend; gewillkürt möglich (objektiv geeignet + gewidmet)", "notwendig, wenn die Beteiligung ohne das Wirtschaftsgut nicht denkbar ist (Komplementär-GmbH); gewillkürt möglich"],
        ],
      },
      { typ: "absatz", text: "Passives SBV gibt es auch: Das Darlehen, mit dem der Gesellschafter seine Einlage finanziert hat, ist passives SBV II; die Zinsen sind Sonderbetriebsausgaben. Das Darlehen, mit dem er das an die KG vermietete Grundstück gekauft hat, ist passives SBV I." },
      { typ: "beispiel", titel: "Die Komplementär-GmbH", sachverhalt: "A ist alleiniger Kommanditist der A-GmbH & Co. KG und hält 100 % der Anteile an der Komplementär-GmbH (Anschaffungskosten 25.000 €). Die GmbH hat keinen eigenen Geschäftsbetrieb.", schritte: [
        "Die GmbH-Beteiligung dient nicht dem Betrieb der KG (kein SBV I), aber der Beteiligung des A: Ohne die GmbH gäbe es die KG in dieser Form nicht.",
        "Also notwendiges SBV II. Ansatz in der Sonderbilanz A mit 25.000 €.",
        "Gewinnausschüttungen der GmbH an A sind Sonderbetriebseinnahmen (Teileinkünfteverfahren, § 3 Nr. 40 EStG, weil im Betriebsvermögen).",
      ], ergebnis: "Verkauft A die GmbH-Anteile, ist der Gewinn gewerblich (§ 15 EStG, Teileinkünfte) – nicht § 17 EStG. Das ist die klassische Prüferfrage." },
      { typ: "falle", text: "SBV ist zwingend: Wenn ein Wirtschaftsgut notwendiges SBV ist, kann der Gesellschafter es nicht „im Privatvermögen lassen“. Vergisst die Klausurlösung das SBV, sind stille Reserven falsch behandelt, Sondereinnahmen fehlen und die Gewerbesteuer stimmt nicht – ein Fehler, der durch die ganze Aufgabe läuft." },
      { typ: "schritte", titel: "Sonderbilanz aufstellen – so geht es", punkte: [
        "Aktiva: alle SBV-Wirtschaftsgüter (Grundstück, Beteiligung, Forderung) mit fortgeführten Anschaffungskosten bzw. Einlagewert.",
        "Passiva: Refinanzierungsdarlehen; als Ausgleichsposten das Sonderkapital des Gesellschafters.",
        "Sonder-GuV: Sonderbetriebseinnahmen (Miete, Zinsen, Gehalt, Ausschüttungen) minus Sonderbetriebsausgaben (AfA, Zinsen, Kosten).",
        "Ergebnis der Sonder-GuV in die Gesamtgewinn-Tabelle (Stufe 2) beim Gesellschafter eintragen.",
      ] },
      { typ: "klausur", punkte: [
        "Jedes Wirtschaftsgut eines Gesellschafters, das im Sachverhalt auftaucht, auf SBV prüfen: Dient es dem Betrieb (SBV I) oder der Beteiligung (SBV II)?",
        "Notwendiges SBV kurz begründen, dann sofort die Sonderbilanz und die Sonder-GuV in Zahlen bringen.",
        "Gewinnausschüttungen aus SBV-II-Beteiligungen: Teileinkünfteverfahren (60 % steuerpflichtig), § 3c Abs. 2 EStG für die Kosten.",
      ] },
      { typ: "links", module: [6, 7], schemata: ["sbv", "betriebsvermoegen"] },
    ],
    selbstcheck: [
      { frage: "Der Kommanditist hält die Anteile an der Komplementär-GmbH ohne eigenen Geschäftsbetrieb. Einordnung?", optionen: ["Privatvermögen", "Notwendiges SBV II", "Notwendiges SBV I"], richtig: 1, erklaerung: "Die Beteiligung dient der Stellung des Kommanditisten in der KG – SBV II." },
      { frage: "Das Darlehen, mit dem der Gesellschafter seine Einlage finanziert, ist …", optionen: ["Privatvermögen; Zinsen nicht abziehbar", "passives SBV II; Zinsen sind Sonderbetriebsausgaben", "Fremdkapital der Gesellschaft"], richtig: 1, erklaerung: "Die Finanzierung der Beteiligung gehört in den Sonderbereich des Gesellschafters." },
    ],
    merksatz: "Dient es dem Betrieb: SBV I. Dient es der Beteiligung: SBV II. Beides gehört in die Sonderbilanz – und beides ist steuerverstrickt.",
  },
  {
    id: "korrespondenz",
    kapitel: "vermoegen",
    titel: "Korrespondierende Bilanzierung und Bilanzierungskonkurrenz",
    kurz: "Gesellschafterdarlehen, Pensionszusagen und der Vorrang des SBV",
    minuten: 12,
    normen: ["§ 15 Abs. 1 S. 1 Nr. 2 EStG", "H 4.2 (2) EStH", "BMF 28.04.1998 (BStBl I 1998, 583)", "§ 39 Abs. 2 Nr. 2 AO"],
    ziel: "Du behandelst Forderungen und Verbindlichkeiten zwischen Gesellschaft und Gesellschafter spiegelbildlich und löst Konkurrenzen zwischen mehreren Betriebsvermögen.",
    bloecke: [
      { typ: "absatz", text: "Gibt der Gesellschafter seiner Gesellschaft ein Darlehen, steht in der Gesamthandsbilanz eine Verbindlichkeit und in seiner Sonderbilanz eine Forderung (SBV I). Beide Posten müssen zusammenpassen: korrespondierende Bilanzierung. Die Forderung wird in der Sonderbilanz mit dem Wert angesetzt, mit dem die Verbindlichkeit in der Gesamthand steht. Eine Teilwertabschreibung auf die Forderung ist während des Bestehens der Gesellschaft nicht zulässig – wirtschaftlich hat der Gesellschafter Eigenkapital gegeben, und der Verlust wird erst beim Ausscheiden oder bei Beendigung berücksichtigt." },
      { typ: "absatz", text: "Gleiches gilt für Pensionszusagen an einen Gesellschafter: Die Gesamthand passiviert die Rückstellung nach § 6a EStG, der Gesellschafter aktiviert in seiner Sonderbilanz einen gleich hohen Anspruch. Die Zuführung ist Aufwand der Gesamthand und Sonderbetriebseinnahme des Gesellschafters – per Saldo neutral, wie jede Sondervergütung." },
      { typ: "beispiel", titel: "Darlehen mit Verzicht", sachverhalt: "G gewährt der G-OHG ein Darlehen von 100.000 €. Die OHG gerät in die Krise; G hält die Forderung für nur noch 40.000 € werthaltig.", schritte: [
        "Gesamthandsbilanz: Verbindlichkeit 100.000 € bleibt (Rückzahlungsbetrag, § 6 Abs. 1 Nr. 3 EStG).",
        "Sonderbilanz G: Forderung 100.000 € bleibt – keine Teilwertabschreibung wegen korrespondierender Bilanzierung.",
        "Verzichtet G auf 60.000 €: Die OHG bucht Ertrag 60.000 € (Stufe 1, verteilt auf alle); G bucht in der Sonderbilanz Aufwand 60.000 € (Stufe 2, nur G). Per Saldo verschiebt sich Gewinn von G zu den Mitgesellschaftern.",
      ], ergebnis: "Der Wertverlust wird nicht laufend, sondern erst bei Verzicht, Ausscheiden oder Beendigung realisiert." },
      { typ: "absatz", text: "Bilanzierungskonkurrenz: Ein Wirtschaftsgut kann nur in einem Betriebsvermögen sein. Gehört das Grundstück des Gesellschafters G zu seinem eigenen Einzelunternehmen und ist zugleich an die G-OHG vermietet, gilt der Vorrang des Sonderbetriebsvermögens (§ 15 Abs. 1 S. 1 Nr. 2 EStG geht vor). Ausnahme: Überlässt eine Schwester-Personengesellschaft das Wirtschaftsgut, dann Vorrang der mitunternehmerischen Betriebsaufspaltung – das Grundstück bleibt Betriebsvermögen der Besitzgesellschaft (BMF 28.04.1998)." },
      {
        typ: "tabelle",
        titel: "Konkurrenzregeln auf einen Blick",
        kopf: ["Situation", "Zuordnung"],
        zeilen: [
          ["Gesellschafter überlässt Wirtschaftsgut aus seinem Einzelunternehmen an seine PersG", "SBV I bei der PersG (Vorrang SBV)"],
          ["Schwester-PersG (gleiche Gesellschafter) überlässt Wirtschaftsgut an die Betriebs-PersG", "mitunternehmerische Betriebsaufspaltung: BV der Besitz-PersG, kein SBV"],
          ["Gesellschafter überlässt Wirtschaftsgut an doppelstöckige Untergesellschaft", "SBV I bei der Untergesellschaft (§ 15 Abs. 1 S. 1 Nr. 2 S. 2 EStG)"],
        ],
      },
      { typ: "klausur", punkte: [
        "Bei Gesellschafterdarlehen den Satz bringen: „Forderung und Verbindlichkeit sind korrespondierend zu bilanzieren; eine Teilwertabschreibung in der Sonderbilanz scheidet aus.“",
        "Bei Überlassung aus einem anderen Betrieb des Gesellschafters: Vorrang des SBV nennen und das Wirtschaftsgut zum Buchwert in die Sonderbilanz überführen (§ 6 Abs. 5 S. 2 EStG).",
        "Bei zwei Personengesellschaften mit identischen Gesellschaftern an die mitunternehmerische Betriebsaufspaltung denken.",
      ] },
      { typ: "links", module: [8, 9], schemata: ["konkurrenz", "mu-bas"] },
    ],
    selbstcheck: [
      { frage: "Die Darlehensforderung des Gesellschafters gegen die Gesellschaft ist nur noch zur Hälfte werthaltig. Teilwertabschreibung in der Sonderbilanz?", optionen: ["Ja, § 6 Abs. 1 Nr. 2 EStG", "Nein, korrespondierende Bilanzierung – Verlust erst bei Verzicht/Ausscheiden", "Nur in der Handelsbilanz"], richtig: 1, erklaerung: "Forderung und Verbindlichkeit müssen gleich hoch bleiben; die Forderung ist wirtschaftlich Eigenkapital." },
      { frage: "Gesellschafter G vermietet ein Grundstück aus seinem Einzelunternehmen an seine OHG. Wo ist das Grundstück Betriebsvermögen?", optionen: ["Im Einzelunternehmen", "Als SBV I bei der OHG (Vorrang SBV)", "Wahlrecht"], richtig: 1, erklaerung: "§ 15 Abs. 1 S. 1 Nr. 2 EStG hat Vorrang; Überführung zum Buchwert nach § 6 Abs. 5 S. 2 EStG." },
    ],
    merksatz: "Was die Gesellschaft dem Gesellschafter schuldet, hat er als Forderung im SBV – gleich hoch, ohne Abschreibung. Und SBV schlägt eigenes Einzelunternehmen, aber nicht die Schwester-PersG.",
  },
  {
    id: "ergaenzungsbilanz",
    kapitel: "vermoegen",
    titel: "Ergänzungsbilanzen: die persönliche Korrektur zur Gesamthandsbilanz",
    kurz: "Warum der Käufer eines Anteils seine eigenen Abschreibungen hat",
    minuten: 16,
    normen: ["§ 6 Abs. 1 Nr. 7 EStG analog", "§ 7 EStG", "§ 6 Abs. 5 S. 4 EStG", "§ 24 Abs. 2 UmwStG"],
    ziel: "Du weißt, wann eine Ergänzungsbilanz entsteht, wie du sie aufstellst und wie du sie Jahr für Jahr fortschreibst.",
    bloecke: [
      { typ: "absatz", text: "Die Gesamthandsbilanz gilt für alle Gesellschafter gleich. Manchmal hat aber ein einzelner Gesellschafter andere Anschaffungskosten als die Buchwerte, die dort stehen – zum Beispiel weil er seinen Anteil teuer gekauft hat. Diese Differenz wird nicht in der Gesamthandsbilanz geändert (das würde alle betreffen), sondern in einer Ergänzungsbilanz nur für diesen Gesellschafter. Sie ergänzt die Gesamthandsbilanz um Mehr- oder Minderwerte an den einzelnen Wirtschaftsgütern." },
      {
        typ: "tabelle",
        titel: "Wann entsteht eine Ergänzungsbilanz?",
        kopf: ["Anlass", "Positiv oder negativ?", "Was steht drin?"],
        zeilen: [
          ["Entgeltlicher Anteilserwerb über Buchwert (Gesellschafterwechsel)", "positiv", "Mehrwerte der anteiligen stillen Reserven, Rest Geschäftswert; Gegenposten Mehrkapital"],
          ["Anteilserwerb unter Buchwert", "negativ", "Minderwerte der Wirtschaftsgüter"],
          ["Buchwertfortführung bei § 24 UmwStG mit Nettomethode", "negativ (Einbringender) / positiv (übrige)", "Korrektur der in der Gesamthand zum gemeinen Wert angesetzten Werte auf Buchwert"],
          ["§ 6 Abs. 5 S. 4 EStG: Zuordnung der stillen Reserven zum Übertragenden", "negativ beim Übertragenden, positiv bei den anderen", "vermeidet die rückwirkende Teilwertaufdeckung"],
          ["§ 6b-Rücklage, übertragen auf ein Wirtschaftsgut der Gesamthand", "negativ", "gesellschafterbezogene Minderung der Anschaffungskosten"],
        ],
      },
      { typ: "beispiel", titel: "Der Käufer zahlt mehr als das Kapitalkonto", sachverhalt: "C kauft am 1.1.2025 den 50 %-Anteil des B an der AB-OHG für 500.000 €. Das Kapitalkonto des B beträgt 300.000 €. In der Gesamthand stecken stille Reserven: Grundstück 200.000 € (Grund und Boden), Maschine 100.000 € (Restnutzungsdauer 5 Jahre). Der Rest ist Geschäftswert.", schritte: [
        "Mehrpreis: 500.000 − 300.000 = 200.000 €.",
        "Anteilige stille Reserven (50 %): Grund und Boden 100.000 €, Maschine 50.000 €. Summe 150.000 €.",
        "Rest 200.000 − 150.000 = 50.000 € ist anteiliger Geschäftswert (Nutzungsdauer 15 Jahre, § 7 Abs. 1 S. 3 EStG).",
        "Ergänzungsbilanz C zum 1.1.2025: Aktiva Mehrwert GruBo 100.000, Mehrwert Maschine 50.000, Geschäftswert 50.000; Passiva Mehrkapital C 200.000.",
        "Fortschreibung 2025: Mehr-AfA Maschine 50.000 / 5 = 10.000 €; AfA Geschäftswert 50.000 / 15 = 3.333 €. Grund und Boden keine AfA.",
      ], ergebnis: "C bekommt 2025 in Stufe 2 ein Ergänzungsbilanzergebnis von −13.333 € zugerechnet. Sein Kapitalkonto für § 16 EStG ist 300.000 € (Gesamthand) + 200.000 € (Ergänzungsbilanz) = 500.000 € – genau seine Anschaffungskosten." },
      { typ: "bilanz", titel: "Ergänzungsbilanz C zum 31.12.2025", aktiva: [["Mehrwert Grund und Boden", 100000], ["Mehrwert Maschine (50.000 − 10.000)", 40000], ["Geschäftswert (50.000 − 3.333)", 46667]], passiva: [["Mehrkapital C (200.000 − 13.333)", 186667]], hinweis: "Die Passivseite ist immer nur das Mehrkapital. Die Ergänzungsbilanz hat keine Verbindlichkeiten." },
      { typ: "falle", text: "Die Abschreibung in der Ergänzungsbilanz folgt dem Wirtschaftsgut der Gesamthand: gleiche Methode, Restnutzungsdauer aus Sicht des Erwerbers (BFH IV R 1/15: eigene Nutzungsdauer-Schätzung beim Erwerb zulässig). Ein Mehrwert auf Grund und Boden wird nie abgeschrieben. Und: Scheidet das Wirtschaftsgut aus der Gesamthand aus, ist der Restmehrwert erfolgswirksam auszubuchen." },
      { typ: "klausur", punkte: [
        "Schema: Kaufpreis − Kapitalkonto = Mehrpreis → auf stille Reserven der einzelnen Wirtschaftsgüter verteilen (Quote!) → Rest Geschäftswert → Ergänzungsbilanz → jährliche Fortschreibung als Stufe-2-Ergebnis.",
        "Für den Verkäufer: Veräußerungsgewinn § 16 Abs. 1 S. 1 Nr. 2 EStG = Kaufpreis − Kosten − Kapitalkonto (inkl. seiner Sonder- und Ergänzungsbilanz).",
        "Die Ergänzungsbilanz ändert nichts an der Gesamthandsbilanz – das ist die häufigste Punktabzugs-Falle.",
      ] },
      { typ: "links", module: [18, 29, 34], schemata: ["gesamtfall-afa", "umw24-netto"], faelle: ["persg-fall-13"] },
    ],
    selbstcheck: [
      { frage: "Ein Gesellschafter kauft seinen Anteil für 80.000 € über dem Kapitalkonto. Wo werden die 80.000 € erfasst?", optionen: ["In der Gesamthandsbilanz durch Aufstockung aller Wirtschaftsgüter", "In einer positiven Ergänzungsbilanz nur für diesen Gesellschafter", "Gar nicht, das sind private Anschaffungskosten"], richtig: 1, erklaerung: "Personenbezogene Mehrwerte gehören in die Ergänzungsbilanz; die Gesamthandsbilanz bleibt unverändert." },
      { frage: "Wie wird ein Mehrwert auf Grund und Boden in der Ergänzungsbilanz fortgeschrieben?", optionen: ["Linear über 15 Jahre", "Gar nicht – kein Verbrauch, keine AfA", "Wie der Geschäftswert"], richtig: 1, erklaerung: "Der Mehrwert folgt dem Wirtschaftsgut; Grund und Boden wird nicht abgeschrieben." },
    ],
    merksatz: "Mehrpreis minus Kapitalkonto, verteilt auf die stillen Reserven, Rest Geschäftswert – und dann jedes Jahr fortschreiben. Nur für diesen einen Gesellschafter.",
  },

  /* ====================================================================== D */
  {
    id: "einbringung-einzel-wg",
    kapitel: "transfer",
    titel: "Ein Wirtschaftsgut in die Gesellschaft bringen: Einlage, Tausch oder Verkauf?",
    kurz: "Das Grundschema für jede Übertragung – aus dem Privatvermögen und aus dem Betriebsvermögen",
    minuten: 16,
    normen: ["§ 4 Abs. 1 S. 8 EStG", "§ 6 Abs. 1 Nr. 5 EStG", "§ 6 Abs. 6 EStG", "§ 23 EStG", "§ 6 Abs. 5 S. 3 EStG"],
    ziel: "Du prüfst bei jeder Übertragung eines Einzelwirtschaftsguts in drei Fragen, ob stille Reserven aufgedeckt werden.",
    bloecke: [
      { typ: "absatz", text: "Bringt ein Gesellschafter ein einzelnes Wirtschaftsgut in die Gesellschaft ein, gibt es drei Fragen: Woher kommt es (Privat- oder Betriebsvermögen)? Was bekommt er dafür (nichts, Gesellschaftsrechte oder Geld)? Und: Gibt es eine Sondervorschrift, die den Buchwert vorschreibt? Erst aus den Antworten ergibt sich, ob ein Gewinn entsteht." },
      { typ: "schritte", titel: "Die drei Fragen", punkte: [
        "Herkunft: Privatvermögen (PV) oder Betriebsvermögen (BV/SBV) des Gesellschafters?",
        "Gegenleistung: keine (Gutschrift auf gesamthänderischer Rücklage oder ohne Gutschrift) = Einlage. Gesellschaftsrechte (Gutschrift auf Kapitalkonto I/II mit Verlustverrechnung) = tauschähnlicher Vorgang = Veräußerung. Darlehen/Geld = entgeltliche Veräußerung.",
        "Sondervorschrift: Aus dem BV gegen Gesellschaftsrechte oder unentgeltlich → § 6 Abs. 5 S. 3 EStG zwingend Buchwert. Aus dem PV → keine Buchwertregel; Einlage nach § 6 Abs. 1 Nr. 5 EStG, Veräußerung nach §§ 17, 20 Abs. 2, 23 EStG prüfen.",
      ] },
      {
        typ: "tabelle",
        titel: "Die Matrix, die du auswendig können musst",
        kopf: ["Gegenleistung →", "keine (Einlage)", "Gesellschaftsrechte", "Geld / Darlehen"],
        zeilen: [
          ["aus dem PV", "Einlage § 4 Abs. 1 S. 8; Bewertung § 6 Abs. 1 Nr. 5 EStG (Teilwert; max. AK bei Anschaffung innerhalb 3 Jahren oder bei § 17-Anteilen); keine Steuer beim Gesellschafter", "Veräußerung: § 23 EStG (Grundstück binnen 10 Jahren), § 17 EStG (Anteile ≥ 1 %), § 20 Abs. 2 EStG; Gesellschaft hat AK in Höhe des gemeinen Werts", "Veräußerung, wie links; bei teilentgeltlich Aufteilung"],
          ["aus dem BV / SBV desselben Gesellschafters", "§ 6 Abs. 5 S. 3 Nr. 1 EStG: zwingend Buchwert", "§ 6 Abs. 5 S. 3 Nr. 1 EStG: zwingend Buchwert", "Veräußerung zum gemeinen Wert (§ 6 Abs. 6 S. 1 EStG analog); bei teilentgeltlich: strenge Trennungstheorie"],
        ],
      },
      { typ: "beispiel", titel: "Grundstück aus dem Privatvermögen", sachverhalt: "A hat 2019 ein unbebautes Grundstück für 200.000 € privat gekauft. 2025 (Verkehrswert 350.000 €) überträgt er es auf die AB-OHG. Variante 1: Gutschrift 350.000 € auf Kapitalkonto I. Variante 2: Buchung auf der gesamthänderisch gebundenen Rücklage.", schritte: [
        "Variante 1: Gesellschaftsrechte → tauschähnlicher Vorgang = Veräußerung. Innerhalb von 10 Jahren → § 23 Abs. 1 S. 1 Nr. 1 EStG: 350.000 − 200.000 = 150.000 € privates Veräußerungsgeschäft bei A. Die OHG hat Anschaffungskosten 350.000 €.",
        "Variante 2: Keine Gegenleistung → Einlage. Bewertung § 6 Abs. 1 Nr. 5 S. 1 EStG: Teilwert 350.000 € (Anschaffung liegt mehr als 3 Jahre zurück, keine Begrenzung). Kein Gewinn bei A, § 23 EStG greift nicht (Einlage ist keine Veräußerung – aber Achtung § 23 Abs. 1 S. 5 Nr. 1 EStG, wenn die OHG innerhalb von 10 Jahren nach Anschaffung verkauft).",
      ], ergebnis: "Dasselbe Grundstück: einmal 150.000 € steuerpflichtig, einmal nichts. Deshalb liest die Klausur immer das Konto ab." },
      { typ: "falle", text: "Teilentgeltlich aus dem BV (z. B. Gutschrift 100.000 € auf Kapitalkonto, Verkehrswert 300.000 €, Buchwert 60.000 €): Nach der Finanzverwaltung gilt die strenge Trennungstheorie (BMF 08.12.2011 Rz. 15): Der Vorgang wird nach dem Verhältnis Entgelt zu Verkehrswert in einen entgeltlichen und einen unentgeltlichen Teil zerlegt; auf den entgeltlichen Teil entsteht ein Gewinn (100.000 − 1/3 × 60.000 = 80.000 €). Der BFH hat die Frage dem Großen Senat vorgelegt; in der Klausur die Verwaltungsauffassung rechnen und die Streitfrage in einem Satz erwähnen." },
      { typ: "klausur", punkte: [
        "Immer die drei Fragen in dieser Reihenfolge prüfen und jeweils die Norm nennen – auch wenn eine Frage einfach ist.",
        "Bei Übertragung gegen Gesellschaftsrechte aus dem PV immer § 23 EStG (10 Jahre) und § 17 EStG (Kapitalgesellschaftsanteile) abklopfen.",
        "Die Gesellschaft erhält bei Einlage den Einlagewert als Anschaffungskosten-Ersatz (AfA-Bemessungsgrundlage § 6 Abs. 1 Nr. 5, bei Gebäuden § 7 Abs. 4 EStG); bei Veräußerung den Kaufpreis bzw. gemeinen Wert.",
      ] },
      { typ: "links", module: [20, 21, 22, 25], schemata: ["transfer-master", "trennungstheorie"], faelle: ["persg-fall-8", "persg-fall-10", "persg-fall-11"] },
    ],
    selbstcheck: [
      { frage: "Gesellschafter überträgt ein Grundstück aus seinem Privatvermögen gegen Gutschrift auf Kapitalkonto I. Steuerlich ist das …", optionen: ["eine Einlage", "ein tauschähnlicher Vorgang = Veräußerung (§ 23 EStG prüfen)", "eine verdeckte Einlage"], richtig: 1, erklaerung: "Gesellschaftsrechte sind eine Gegenleistung. Gegen Gesellschaftsrechte heißt: Veräußerung des Gesellschafters, Anschaffung der Gesellschaft." },
      { frage: "Übertragung aus dem Einzelunternehmen des Gesellschafters in die Gesamthand gegen Gesellschaftsrechte – Wertansatz?", optionen: ["Gemeiner Wert", "Wahlrecht", "Zwingend Buchwert, § 6 Abs. 5 S. 3 Nr. 1 EStG"], richtig: 2, erklaerung: "Aus dem Betriebsvermögen gegen Gesellschaftsrechte oder unentgeltlich ist der Buchwert Pflicht." },
    ],
    merksatz: "Woher? Wofür? Sondervorschrift? – Aus dem BV gegen Gesellschaftsrechte: Buchwert (§ 6 Abs. 5 S. 3). Aus dem PV gegen Gesellschaftsrechte: Veräußerung. Ohne Gegenleistung: Einlage.",
  },
  {
    id: "sechs-fuenf",
    kapitel: "transfer",
    titel: "§ 6 Abs. 5 EStG komplett: Überführung, Übertragung, Sperrfrist, Körperschaftsklausel",
    kurz: "Sätze 1 bis 7 als Entscheidungsbaum",
    minuten: 18,
    normen: ["§ 6 Abs. 5 S. 1–7 EStG", "BMF 08.12.2011 (BStBl I 2011, 1279)", "BMF 26.07.2016"],
    ziel: "Du gehst § 6 Abs. 5 EStG Satz für Satz durch und weißt bei jeder Konstellation, ob Buchwert, Teilwert oder Sperrfrist gilt.",
    bloecke: [
      { typ: "absatz", text: "§ 6 Abs. 5 EStG ist die wichtigste Buchwertvorschrift für Personengesellschaften. Er unterscheidet zwei Dinge: Überführung (das Wirtschaftsgut wechselt nur den Betrieb, nicht den Eigentümer – Sätze 1 und 2) und Übertragung (das Wirtschaftsgut wechselt den Rechtsträger – Satz 3). Beides zum Buchwert, aber mit unterschiedlichen Bedingungen." },
      {
        typ: "tabelle",
        titel: "Satz für Satz",
        kopf: ["Satz", "Konstellation", "Rechtsfolge"],
        zeilen: [
          ["S. 1", "Überführung zwischen zwei Betriebsvermögen desselben Steuerpflichtigen (Einzelunternehmen A → Einzelunternehmen B)", "Buchwert, wenn die Besteuerung der stillen Reserven sichergestellt ist"],
          ["S. 2", "Überführung eigenes BV ↔ eigenes SBV; SBV bei PersG 1 ↔ SBV bei PersG 2", "Buchwert (wie S. 1)"],
          ["S. 3 Nr. 1", "Übertragung BV des Mitunternehmers ↔ Gesamthandsvermögen, unentgeltlich oder gegen Gesellschaftsrechte", "zwingend Buchwert"],
          ["S. 3 Nr. 2", "Übertragung SBV ↔ Gesamthandsvermögen derselben oder einer anderen Mitunternehmerschaft, an der er beteiligt ist, unentgeltlich oder gegen Gesellschaftsrechte", "zwingend Buchwert"],
          ["S. 3 Nr. 3", "Übertragung SBV eines Mitunternehmers → SBV eines anderen Mitunternehmers derselben PersG, unentgeltlich", "zwingend Buchwert"],
          ["S. 3 Nr. 4 (seit 2024)", "Übertragung Gesamthand → Gesamthand einer beteiligungsidentischen Schwester-PersG, unentgeltlich", "zwingend Buchwert (BVerfG 28.11.2023)"],
          ["S. 4", "Übertragenes Wirtschaftsgut wird innerhalb der Sperrfrist (3 Jahre nach Abgabe der Steuererklärung des Übertragenden für das Übertragungsjahr) veräußert oder entnommen", "rückwirkend Teilwert – außer die stillen Reserven waren per Ergänzungsbilanz dem Übertragenden zugeordnet"],
          ["S. 5", "Durch die Übertragung wird der Anteil einer Körperschaft an dem Wirtschaftsgut unmittelbar oder mittelbar begründet oder erhöht", "insoweit Teilwert (Statusverbesserung nach § 8b KStG verhindern)"],
          ["S. 6", "Innerhalb von 7 Jahren nach der Übertragung wird ein Körperschaftsanteil begründet oder erhöht", "insoweit rückwirkend Teilwert"],
        ],
      },
      { typ: "beispiel", titel: "SBV-Grundstück in die Gesamthand mit Verkauf in der Sperrfrist", sachverhalt: "A (Kommanditist, 60 %) überträgt am 2.1.2025 ein Grundstück aus seinem SBV (Buchwert 100.000 €, Teilwert 400.000 €) unentgeltlich auf die A-KG (gesamthänderische Rücklage). Mitgesellschafterin ist die natürliche Person B (40 %). Die KG verkauft das Grundstück am 1.7.2026 für 420.000 €. Die Steuererklärung 2025 des A wurde im Mai 2026 abgegeben.", schritte: [
        "§ 6 Abs. 5 S. 3 Nr. 2 EStG: Übertragung SBV → Gesamthand, unentgeltlich: Buchwert 100.000 € zwingend. Kein Gewinn 2025.",
        "S. 5: Keine Körperschaft beteiligt → keine Teilwertaufdeckung.",
        "S. 4: Sperrfrist läuft bis Mai 2029. Verkauf 2026 liegt darin → rückwirkend zum 2.1.2025 Teilwert 400.000 €: Gewinn 300.000 € bei A im Jahr 2025 (geänderter Feststellungsbescheid, § 175 Abs. 1 S. 1 Nr. 2 AO).",
        "Ausweg: Hätte die KG bei der Übertragung 2025 für A eine negative Ergänzungsbilanz (−300.000 €) und für B keine Aufstockung in der Gesamthand gemacht – Gesamthand 400.000 €, Ergänzungsbilanz A −300.000 € –, wären die stillen Reserven A zugeordnet gewesen; die Sperrfrist wäre unbeachtlich.",
      ], ergebnis: "Ohne Ergänzungsbilanz: 300.000 € rückwirkend 2025 bei A. Der Verkauf 2026 bringt der KG dann nur 20.000 € Gewinn (420.000 − 400.000), verteilt 60/40. Mit Ergänzungsbilanz: 2025 nichts; 2026 Gewinn der Gesamthand 20.000 € plus Auflösung der Ergänzungsbilanz +300.000 € bei A." },
      { typ: "falle", text: "Satz 4 sperrt nur Veräußerung und Entnahme des übertragenen Wirtschaftsguts – nicht die Veräußerung des Mitunternehmeranteils. Die Frist ist keine feste 3-Jahres-Frist ab Übertragung, sondern ab Abgabe der Steuererklärung des Übertragenden für das Übertragungsjahr. Bei einer Einpersonen-Konstellation (100 %-Gesellschafter überträgt an seine GmbH & Co. KG mit 0 %-Komplementärin) ist die Sperrfrist nach BFH unschädlich, weil die stillen Reserven ohnehin bei ihm bleiben." },
      { typ: "klausur", punkte: [
        "Nenne den einschlägigen Satz und die Nummer, nicht nur „§ 6 Abs. 5 EStG“. Das ist ein voller Punkt.",
        "Reihenfolge: S. 3 Nr. X (Buchwert) → S. 5 (Körperschaft beteiligt?) → S. 4 (Sperrfrist, Ergänzungsbilanz?) → S. 6 (7-Jahres-Frist).",
        "Bei teilentgeltlicher Übertragung: Trennungstheorie ansprechen; bei Übernahme von Verbindlichkeiten gilt die Schuldübernahme als Entgelt.",
      ] },
      { typ: "links", module: [23, 24, 26, 27], schemata: ["sechs5-system", "sperrfrist-s4", "nr4-identisch", "status-s5"], faelle: ["persg-fall-9", "persg-fall-12"] },
    ],
    selbstcheck: [
      { frage: "Gesellschafter überträgt ein Wirtschaftsgut aus seinem SBV unentgeltlich in die Gesamthand derselben KG. Welcher Satz?", optionen: ["§ 6 Abs. 5 S. 2 EStG (Überführung)", "§ 6 Abs. 5 S. 3 Nr. 2 EStG (Übertragung, Buchwert)", "§ 6 Abs. 5 S. 3 Nr. 3 EStG"], richtig: 1, erklaerung: "Der Rechtsträger wechselt (Gesellschafter → Gesellschaft), also Übertragung nach Satz 3; SBV → Gesamthand ist Nr. 2." },
      { frage: "Wie lässt sich die rückwirkende Teilwertaufdeckung nach § 6 Abs. 5 S. 4 EStG vermeiden?", optionen: ["Durch eine Sperrfristerklärung beim Finanzamt", "Durch Zuordnung der stillen Reserven zum Übertragenden per Ergänzungsbilanz", "Gar nicht"], richtig: 1, erklaerung: "Satz 4 Halbsatz 2: keine Aufdeckung, soweit die stillen Reserven durch Ergänzungsbilanz dem übertragenden Gesellschafter zugeordnet worden sind." },
    ],
    merksatz: "Satz 3: Buchwert zwingend. Satz 4: drei Jahre nach der Steuererklärung nicht verkaufen – oder Ergänzungsbilanz. Satz 5/6: Sobald eine Körperschaft profitiert, Teilwert.",
  },
  {
    id: "sechs-b",
    kapitel: "transfer",
    titel: "§ 6b EStG bei Personengesellschaften: die gesellschafterbezogene Rücklage",
    kurz: "Wer die Reserve hat, darf sie mitnehmen – über Sonder- und Ergänzungsbilanz",
    minuten: 10,
    normen: ["§ 6b Abs. 1, Abs. 3, Abs. 4, Abs. 10 EStG", "R 6b.2 Abs. 6, 7 EStR"],
    ziel: "Du überträgst eine § 6b-Rücklage zwischen Gesellschafter und Gesellschaft in die richtige Bilanz.",
    bloecke: [
      { typ: "absatz", text: "§ 6b EStG erlaubt, den Gewinn aus dem Verkauf von Grund und Boden, Gebäuden und bestimmten anderen Wirtschaftsgütern (Besitzzeit 6 Jahre) auf neu angeschaffte Wirtschaftsgüter zu übertragen oder vier Jahre in eine Rücklage zu stellen. Bei Personengesellschaften gilt die gesellschafterbezogene Betrachtungsweise: Die Vergünstigung steht dem Mitunternehmer zu, nicht der Gesellschaft. Also darf ein Gesellschafter seine anteilige Reserve aus der Gesamthand in sein Einzelunternehmen oder SBV übertragen – und umgekehrt." },
      {
        typ: "tabelle",
        titel: "Wohin darf die Reserve?",
        kopf: ["Reserve entstanden in …", "Übertragung auf …", "Technik"],
        zeilen: [
          ["Gesamthand (Verkauf durch die PersG)", "Wirtschaftsgut im Einzelunternehmen oder SBV des Gesellschafters", "anteilige Reserve (Gewinnquote) mindert dort die Anschaffungskosten; in der Gesamthand voller Gewinn, Rücklage in der Sonderbilanz/Ergänzungsbilanz"],
          ["Einzelunternehmen des Gesellschafters", "Wirtschaftsgut der Gesamthand", "Reserve mindert nur seinen Anteil: negative Ergänzungsbilanz bei der PersG in Höhe der Reserve"],
          ["Gesamthand", "Wirtschaftsgut der Gesamthand", "Reserve mindert die Anschaffungskosten in der Gesamthandsbilanz (soweit alle Gesellschafter die Voraussetzungen erfüllen)"],
        ],
      },
      { typ: "beispiel", titel: "Reserve aus dem Einzelunternehmen in die OHG", sachverhalt: "H (50 % an der HW-OHG) verkauft 2025 ein Grundstück seines Einzelunternehmens mit 200.000 € Gewinn (Besitzzeit über 6 Jahre). Die OHG kauft 2025 ein Grundstück für 600.000 €.", schritte: [
        "H darf die Reserve nur auf seinen Anteil übertragen: 50 % × 600.000 = 300.000 € Volumen, also volle 200.000 € übertragbar.",
        "Gesamthandsbilanz: Grundstück 600.000 € (unverändert). Negative Ergänzungsbilanz H: Minderwert Grundstück −200.000 €, Minderkapital −200.000 €.",
        "Steuerlicher Wert des Grundstücks für H: 300.000 − 200.000 = 100.000 €; Verkauft die OHG später, realisiert H seine Reserve über die Auflösung der Ergänzungsbilanz.",
      ], ergebnis: "Im Einzelunternehmen 2025 kein Gewinn aus dem Grundstück; die stillen Reserven leben in der negativen Ergänzungsbilanz bei der OHG weiter." },
      { typ: "falle", text: "Die Übertragung setzt voraus, dass das Reinvestitionsgut zum Anlagevermögen einer inländischen Betriebsstätte gehört (§ 6b Abs. 4 S. 1 Nr. 3 EStG). Und § 6b Abs. 10 EStG (Anteile an Kapitalgesellschaften, 500.000 €) gilt nur für Personenunternehmen – bei einer PersG nur für die Anteile natürlicher Personen." },
      { typ: "klausur", punkte: [
        "Voraussetzungen des § 6b Abs. 4 EStG immer kurz durchgehen (Bilanzierer, 6 Jahre Anlagevermögen, inländische Betriebsstätte, Nachweis in der Buchführung).",
        "Dann gesellschafterbezogen rechnen: Quote des Gesellschafters am Reinvestitionsgut = maximales Übertragungsvolumen.",
        "Technik benennen: negative Ergänzungsbilanz (Gesamthand als Ziel) oder Rücklage in der Sonderbilanz (Gesamthand als Quelle).",
      ] },
      { typ: "links", module: [19], schemata: ["sechs-b"], faelle: ["persg-fall-7"] },
    ],
    selbstcheck: [
      { frage: "Ein Gesellschafter will seine § 6b-Reserve aus seinem Einzelunternehmen auf ein Grundstück der OHG übertragen. Wie?", optionen: ["Minderung der Anschaffungskosten in der Gesamthandsbilanz", "Negative Ergänzungsbilanz des Gesellschafters bei der OHG in Höhe der Reserve (begrenzt auf seine Quote)", "Gar nicht möglich"], richtig: 1, erklaerung: "Gesellschafterbezogene Betrachtung: Nur sein Anteil am Reinvestitionsgut darf gemindert werden – über die Ergänzungsbilanz." },
    ],
    merksatz: "§ 6b gehört dem Gesellschafter. Über die Ergänzungsbilanz wandert die Reserve dorthin, wo er investiert – aber nur in Höhe seiner Quote.",
  },

  /* ====================================================================== E */
  {
    id: "fuenfzehn-a",
    kapitel: "verlust",
    titel: "§ 15a EStG: Wie viel Verlust darf der Kommanditist wirklich nutzen?",
    kurz: "Ausgleichsfähig bis zum Kapitalkonto, der Rest nur verrechenbar",
    minuten: 18,
    normen: ["§ 15a Abs. 1–5 EStG", "§ 171 Abs. 1, § 172 Abs. 4 HGB"],
    ziel: "Du rechnest das § 15a-Schema mit Kapitalkonto, Haftungserweiterung, Einlagen und Entnahmen für zwei Jahre durch.",
    bloecke: [
      { typ: "absatz", text: "Ein Kommanditist haftet nur mit seiner Einlage. Wenn die KG mehr Verlust macht, als er eingezahlt hat, trägt er den überschießenden Verlust wirtschaftlich (noch) nicht. Deshalb darf er ihn auch (noch) nicht mit anderen Einkünften ausgleichen. § 15a EStG sagt: Verluste sind nur ausgleichsfähig, soweit kein negatives Kapitalkonto entsteht oder sich erhöht. Der Rest ist verrechenbar – er wartet auf künftige Gewinne aus derselben Beteiligung." },
      { typ: "schritte", titel: "Das Rechenschema (Jahr für Jahr)", punkte: [
        "Kapitalkonto des Kommanditisten am Ende des Vorjahres bestimmen: Kapitalkonto I + II + Verlustkonto + Ergänzungsbilanz. Nicht dazu: Sonderbilanz, Darlehenskonto, Privatkonto ohne Verlustverrechnung.",
        "Einlagen und Entnahmen des laufenden Jahres berücksichtigen (Stand vor Verlust).",
        "Verlustanteil aus der Gesamthand (inkl. Ergänzungsbilanz) gegenüberstellen: Bis zur Höhe des positiven Kapitalkontos ausgleichsfähig; darüber hinaus verrechenbar (§ 15a Abs. 1 S. 1, Abs. 2).",
        "Erweiterte Außenhaftung (§ 15a Abs. 1 S. 2, 3): Übersteigt die im Handelsregister eingetragene Haftsumme die geleistete Einlage, ist der Verlust zusätzlich in Höhe dieser Differenz ausgleichsfähig.",
        "Sonderbereich außen vor: Sonderbetriebseinnahmen/-ausgaben und SBV-Ergebnisse unterliegen nicht § 15a – sie sind immer voll zu berücksichtigen.",
        "Verrechenbare Verluste gesondert feststellen (§ 15a Abs. 4) und mit späteren Gewinnanteilen aus der Gesamthand verrechnen (§ 15a Abs. 2).",
      ] },
      { typ: "beispiel", titel: "Zwei Jahre § 15a", sachverhalt: "K ist Kommanditist der K-KG. Haftsumme laut Handelsregister: 100.000 €, eingezahlt 100.000 €. Kapitalkonto zum 31.12.2024: 30.000 €. Verlustanteil 2025 (Gesamthand): 80.000 €. Außerdem erhält K 2025 eine Tätigkeitsvergütung von 20.000 €. 2026: Gewinnanteil 40.000 €, Entnahme 10.000 €.", schritte: [
        "2025: Kapitalkonto vor Verlust 30.000 €. Verlust 80.000 €: ausgleichsfähig 30.000 € (bis Kapitalkonto 0), verrechenbar 50.000 €. Keine erweiterte Außenhaftung (Haftsumme = Einlage).",
        "2025 Sonderbereich: Tätigkeitsvergütung 20.000 € ist Sonderbetriebseinnahme – voll steuerpflichtig, nicht durch § 15a gesperrt. Einkünfte K 2025: −30.000 + 20.000 = −10.000 € (aus Gewerbebetrieb). Kapitalkonto 31.12.2025: −50.000 €. Verrechenbarer Verlust: 50.000 € (Feststellung § 15a Abs. 4).",
        "2026: Gewinnanteil 40.000 € wird zuerst mit dem verrechenbaren Verlust verrechnet: 40.000 − 40.000 = 0 € steuerpflichtiger Gewinnanteil; verrechenbarer Rest 10.000 €. Kapitalkonto: −50.000 + 40.000 − 10.000 (Entnahme) = −20.000 €.",
        "Entnahme 2026 (10.000 €) bei negativem Kapitalkonto: Einlageminderung nach § 15a Abs. 3 EStG? Nur, soweit im Entnahmejahr oder in den 10 Vorjahren ausgleichsfähige Verluste bestanden und keine Haftung wieder auflebt. Hier lebt durch die Entnahme die Außenhaftung nach § 172 Abs. 4 HGB wieder auf (Haftsumme 100.000 €, Einlage sinkt auf 90.000 €) → keine Gewinnzurechnung nach Abs. 3.",
      ], ergebnis: "2025: −30.000 € ausgleichsfähig, +20.000 € Sondervergütung, 50.000 € verrechenbar. 2026: Gewinnanteil 40.000 € wird komplett mit dem verrechenbaren Verlust neutralisiert; verrechenbarer Rest 10.000 €." },
      { typ: "falle", text: "Das Kapitalkonto im Sinne des § 15a ist das steuerliche Kapitalkonto der Gesamthand plus Ergänzungsbilanz. Die Sonderbilanz zählt nicht mit – auch nicht ein Gesellschafterdarlehen, das SBV I ist. Und Vorjahresverluste, die bereits ausgleichsfähig waren, führen zu einem negativen Kapitalkonto, das im Folgejahr sofort weiteren Verlust verrechenbar macht." },
      { typ: "klausur", punkte: [
        "Immer eine kleine Tabelle: Kapitalkonto Anfang, ± Einlagen/Entnahmen, − Verlustanteil, = Kapitalkonto Ende, davon ausgleichsfähig / verrechenbar.",
        "Prüfe zuerst § 15a Abs. 1 S. 2 (Haftsumme > Einlage) – das ist die häufigste Ergänzung im Sachverhalt.",
        "Sonderbereich immer getrennt und mit dem Satz: „Sonderbetriebsergebnisse unterliegen nicht der Verlustausgleichsbeschränkung des § 15a EStG.“",
        "Der Komplementär (unbeschränkt haftend) fällt nicht unter § 15a – bei der GmbH & Co. KG also nur die Kommanditisten prüfen.",
      ] },
      { typ: "links", module: [16, 11], schemata: ["spiegel-15a", "kapitalkonten2"], faelle: ["persg-fall-4"] },
    ],
    selbstcheck: [
      { frage: "Kapitalkonto des Kommanditisten 20.000 €, Verlustanteil 50.000 €, Haftsumme = Einlage. Wie viel ist ausgleichsfähig?", optionen: ["50.000 €", "20.000 €; 30.000 € sind verrechenbar", "0 €"], richtig: 1, erklaerung: "Ausgleichsfähig, soweit kein negatives Kapitalkonto entsteht: 20.000 €. Der Rest wartet auf künftige Gewinne." },
      { frage: "Zählt die Sonderbilanz des Kommanditisten zum Kapitalkonto nach § 15a EStG?", optionen: ["Ja, immer", "Nein – nur Gesamthand plus Ergänzungsbilanz", "Nur bei positiven Werten"], richtig: 1, erklaerung: "SBV und Sonderbetriebsergebnisse laufen außerhalb des § 15a." },
    ],
    merksatz: "Verlust bis zum Kapitalkonto: ausgleichsfähig. Darüber: verrechenbar, festgestellt, wartet auf Gewinne. Sonderbereich: immer außen vor.",
  },

  /* ====================================================================== F */
  {
    id: "anteilsverkauf",
    kapitel: "wechsel",
    titel: "Gesellschafterwechsel: Anteilsverkauf, Eintritt und Austritt mit Abfindung",
    kurz: "§ 16 Abs. 1 S. 1 Nr. 2 EStG auf der einen, Ergänzungsbilanz auf der anderen Seite",
    minuten: 16,
    normen: ["§ 16 Abs. 1 S. 1 Nr. 2, S. 2 EStG", "§ 16 Abs. 2, Abs. 4 EStG", "§ 34 Abs. 1, Abs. 3 EStG", "§ 6 Abs. 3 EStG", "§ 7 S. 2 GewStG"],
    ziel: "Du berechnest den Veräußerungsgewinn des Ausscheidenden und die Ergänzungsbilanz des Erwerbers – auch bei Abfindung über oder unter Buchwert.",
    bloecke: [
      { typ: "absatz", text: "Der Verkauf eines ganzen Mitunternehmeranteils ist steuerlich wie der Verkauf eines Betriebs: § 16 Abs. 1 S. 1 Nr. 2 EStG. Der Gewinn ist Veräußerungspreis minus Veräußerungskosten minus Kapitalkonto (§ 16 Abs. 2 EStG). Das Kapitalkonto ist dabei das gesamte steuerliche Kapital des Gesellschafters: Gesamthand plus Ergänzungsbilanz plus Sonderbilanz. Der Gewinn ist begünstigt (Freibetrag § 16 Abs. 4 EStG, ermäßigter Steuersatz § 34 Abs. 1 oder 3 EStG), wenn wirklich alles auf einmal veräußert wird – inklusive des wesentlichen SBV." },
      { typ: "schritte", titel: "Beim Ausscheidenden", punkte: [
        "Veräußerungspreis (Kaufpreis, Abfindung, übernommene Verbindlichkeiten) feststellen.",
        "Abzüglich Veräußerungskosten (Notar, Berater).",
        "Abzüglich Kapitalkonto: Gesamthand + Ergänzungsbilanz + Sonderbilanz (Buchwert des SBV).",
        "Wesentliches SBV mitverkauft oder ins PV entnommen (dann Entnahmegewinn zum Teilwert, ebenfalls Teil des begünstigten Aufgabegewinns)? Wenn wesentliches SBV zum Buchwert in ein anderes BV geht: keine Begünstigung (§ 16 Abs. 4, § 34 EStG entfallen).",
        "Begünstigung prüfen: Freibetrag 45.000 € (ab 55 Jahren oder dauernd berufsunfähig, einmalig, Abschmelzung ab 136.000 €); § 34 Abs. 1 (Fünftelregelung) oder Abs. 3 (56 % des Durchschnittssatzes, auf Antrag, bis 5 Mio. €).",
        "Gewerbesteuer: Veräußerung durch natürliche Person → nicht gewerbesteuerpflichtig (§ 7 S. 2 GewStG im Umkehrschluss); durch Kapitalgesellschaft oder PersG als Gesellschafter → gewerbesteuerpflichtig bei der KG.",
      ] },
      { typ: "absatz", text: "Beim Erwerber gilt: Er kauft Anteile an den einzelnen Wirtschaftsgütern der Gesamthand. Sein Kaufpreis ist seine Anschaffungskosten. Soweit der Kaufpreis das übernommene Kapitalkonto übersteigt, entsteht eine positive Ergänzungsbilanz (siehe Lektion Ergänzungsbilanzen). Zahlt er weniger als das Kapitalkonto – etwa weil ein Verlustbetrieb übernommen wird –, entsteht eine negative Ergänzungsbilanz: Minderwerte auf den Wirtschaftsgütern, im Zweifel zuerst auf abnutzbaren Wirtschaftsgütern, danach ggf. ein passiver Ausgleichsposten." },
      { typ: "beispiel", titel: "Austritt gegen Abfindung aus dem Gesellschaftsvermögen", sachverhalt: "Aus der ABC-OHG (je 1/3) scheidet C zum 31.12.2025 aus. Sein Kapitalkonto beträgt 150.000 €; die OHG zahlt ihm 240.000 € Abfindung. Die stillen Reserven der Gesamthand betragen insgesamt 270.000 € (davon Grundstück 180.000 €, Maschinen 90.000 €). C ist 58 Jahre alt.", schritte: [
        "C: Veräußerungsgewinn 240.000 − 150.000 = 90.000 € (§ 16 Abs. 1 S. 1 Nr. 2 EStG). Das entspricht genau seinem Drittel der stillen Reserven.",
        "Begünstigung: Freibetrag § 16 Abs. 4 EStG 45.000 €, keine Abschmelzung (Gewinn unter 136.000 €) → steuerpflichtig 45.000 €, dazu § 34 Abs. 3 EStG auf Antrag.",
        "A und B wachsen an (§ 712 BGB, § 105 Abs. 3 HGB): Sie zahlen zusammen 90.000 € über dem Kapitalkonto des C. Positive Ergänzungsbilanzen A und B je 45.000 €: Mehrwert Grundstück je 30.000 €, Mehrwert Maschinen je 15.000 € (Abschreibung über deren Restnutzungsdauer).",
        "Gesamthandsbilanz: Kapitalkonto C ausbuchen (150.000 €), Abfindung 240.000 € gegen Bank; die Differenz von 90.000 € wird nicht in der Gesamthand aufgestockt, sondern nur in den Ergänzungsbilanzen.",
      ], ergebnis: "C: 90.000 € begünstigter Veräußerungsgewinn. A und B: je 45.000 € Mehrkapital in der Ergänzungsbilanz, künftig Mehr-AfA auf die Maschinen." },
      { typ: "falle", text: "Teilanteilsveräußerung (nur ein Teil des Anteils wird verkauft) ist laufender Gewinn (§ 16 Abs. 1 S. 2 EStG): kein Freibetrag, kein § 34, gewerbesteuerpflichtig. Und die unentgeltliche Übertragung (Schenkung an das Kind) läuft nach § 6 Abs. 3 EStG zum Buchwert – aber nur, wenn das wesentliche SBV mitgeht oder zumindest bei der Mitunternehmerschaft bleibt." },
      { typ: "klausur", punkte: [
        "Für den Ausscheidenden: Veräußerungsgewinn nach § 16 Abs. 2 EStG rechnen, dann Begünstigungen (§ 16 Abs. 4, § 34) und GewSt (§ 7 S. 2 GewStG) ansprechen.",
        "Für den Erwerber/die Verbleibenden: Ergänzungsbilanz mit Aufteilung nach stillen Reserven, Rest Geschäftswert.",
        "Bei Abfindung unter Buchwert (lästiger Gesellschafter): negative Ergänzungsbilanz; bei Abfindung an einen lästigen Gesellschafter über dem Wert: sofort abziehbarer Aufwand der Gesamthand (H 16 (11) EStH).",
      ] },
      { typ: "links", module: [18, 29], schemata: ["gesamtfall-afa"], faelle: ["persg-fall-13"] },
    ],
    selbstcheck: [
      { frage: "Welches Kapitalkonto wird bei § 16 Abs. 2 EStG vom Veräußerungspreis abgezogen?", optionen: ["Nur das Kapitalkonto der Gesamthandsbilanz", "Gesamthand + Ergänzungsbilanz + Sonderbilanz", "Nur Kapitalkonto I"], richtig: 1, erklaerung: "Der Buchwert des Mitunternehmeranteils umfasst alle drei Bilanzen des Gesellschafters." },
      { frage: "C verkauft die Hälfte seines OHG-Anteils. Ist der Gewinn nach §§ 16, 34 EStG begünstigt?", optionen: ["Ja", "Nein, Teilanteilsveräußerung ist laufender Gewinn (§ 16 Abs. 1 S. 2 EStG)", "Nur der Freibetrag"], richtig: 1, erklaerung: "Seit 2002 ist nur die Veräußerung des gesamten Anteils begünstigt." },
    ],
    merksatz: "Verkäufer: Preis − Kosten − Kapitalkonto (alle drei Bilanzen) = § 16-Gewinn, begünstigt nur bei ganzem Anteil. Käufer: Mehrpreis in die Ergänzungsbilanz.",
  },
  {
    id: "realteilung",
    kapitel: "wechsel",
    titel: "Realteilung: Die Gesellschaft wird aufgeteilt, ohne dass Steuer anfällt",
    kurz: "§ 16 Abs. 3 S. 2–4 EStG: Buchwert, Sperrfrist, Spitzenausgleich",
    minuten: 14,
    normen: ["§ 16 Abs. 3 S. 2–4 EStG", "BMF 19.12.2018 (BStBl I 2019, 6)", "§ 6 Abs. 5 EStG"],
    ziel: "Du unterscheidest echte und unechte Realteilung, wendest die Buchwertfortführung an und erkennst Sperrfrist und Spitzenausgleich.",
    bloecke: [
      { typ: "absatz", text: "Wenn eine Personengesellschaft beendet wird und jeder Gesellschafter Wirtschaftsgüter mitnimmt, wäre das eigentlich eine Betriebsaufgabe mit Aufdeckung aller stillen Reserven. § 16 Abs. 3 S. 2 EStG verhindert das: Werden die Wirtschaftsgüter in das Betriebsvermögen der einzelnen Mitunternehmer übertragen, sind die Buchwerte fortzuführen – vorausgesetzt, die Besteuerung der stillen Reserven bleibt sichergestellt. Das nennt man Realteilung." },
      {
        typ: "tabelle",
        titel: "Echte und unechte Realteilung",
        kopf: ["", "Echte Realteilung", "Unechte Realteilung"],
        zeilen: [
          ["Was passiert?", "Die Gesellschaft wird aufgelöst; das Vermögen wird unter allen verteilt.", "Ein Gesellschafter scheidet aus und nimmt Wirtschaftsgüter (Sachwertabfindung) mit; die Gesellschaft besteht fort."],
          ["Rechtsgrundlage", "§ 16 Abs. 3 S. 2 EStG unmittelbar", "§ 16 Abs. 3 S. 2 EStG nach BFH und BMF 19.12.2018 auch hier"],
          ["Wer führt fort?", "jeder Mitunternehmer in seinem BV", "der Ausscheidende in seinem BV; die verbleibende Gesellschaft führt ihre Buchwerte fort"],
          ["Sperrfrist (§ 16 Abs. 3 S. 3)", "3 Jahre nach Abgabe der Steuererklärung der Gesellschaft für den Realteilungs-VZ: Grund und Boden, Gebäude, andere wesentliche Betriebsgrundlagen dürfen nicht veräußert/entnommen werden – sonst rückwirkend gemeiner Wert", "gleich"],
        ],
      },
      { typ: "schritte", titel: "Prüfreihenfolge", punkte: [
        "Liegt eine Realteilung vor (Auflösung oder Ausscheiden gegen Sachwertabfindung mit Übertragung von Wirtschaftsgütern)?",
        "Werden die Wirtschaftsgüter in ein Betriebsvermögen des Mitunternehmers übertragen (Einzelunternehmen, andere Mitunternehmerschaft, SBV)? Nur dann Buchwert. Ins Privatvermögen: Entnahme zum gemeinen Wert → anteiliger Aufgabegewinn.",
        "Übertragung auf eine Körperschaft? Dann gemeiner Wert (§ 16 Abs. 3 S. 4 EStG).",
        "Spitzenausgleich: Zahlt ein Realteiler dem anderen etwas dazu, weil er mehr Wert bekommt, ist der Vorgang insoweit entgeltlich – Veräußerungsgewinn beim Zahlungsempfänger in Höhe von Ausgleichszahlung minus anteiliger Buchwert (laufender Gewinn, nicht begünstigt).",
        "Sperrfrist überwachen: Verkauf oder Entnahme von Grund und Boden, Gebäuden oder anderen wesentlichen Betriebsgrundlagen binnen 3 Jahren nach Abgabe der Steuererklärung → rückwirkend gemeiner Wert für das betroffene Wirtschaftsgut bei allen Realteilern.",
      ] },
      { typ: "beispiel", titel: "Zwei Ärzte teilen die Praxis", sachverhalt: "A und B (je 50 %) lösen ihre Praxis-GbR auf. A übernimmt das Praxisgrundstück (Buchwert 200.000 €, Verkehrswert 500.000 €), B die Geräte (Buchwert 100.000 €, Verkehrswert 200.000 €) und den Patientenstamm (Buchwert 0 €, Verkehrswert 300.000 €). Beide führen jeweils eine Einzelpraxis weiter. Kapitalkonten: je 150.000 €.", schritte: [
        "Realteilung, beide übernehmen in ein eigenes Betriebsvermögen → Buchwertfortführung § 16 Abs. 3 S. 2 EStG.",
        "A: Grundstück 200.000 € in der Einzelpraxis; Kapitalkonto war 150.000 € → A muss seine Eröffnungsbilanz mit Kapital 200.000 € beginnen (Kapitalkontenanpassung, kein Gewinn).",
        "B: Geräte 100.000 €, Patientenstamm 0 € → Kapital 100.000 € (ebenfalls Anpassung ohne Gewinn).",
        "Wertmäßig bekommt A 500.000 €, B 500.000 € – kein Spitzenausgleich nötig.",
        "Sperrfrist: Verkauft A das Grundstück innerhalb der 3 Jahre, wird es rückwirkend zum gemeinen Wert angesetzt; der Gewinn (300.000 €) wird der GbR zugerechnet und auf A und B je zur Hälfte verteilt.",
      ], ergebnis: "Kein Aufgabegewinn, Buchwerte laufen in den Einzelpraxen weiter. Die Kapitalkonten passen sich an die übernommenen Buchwerte an (Kapitalkontenanpassungsmethode)." },
      { typ: "falle", text: "Die Sperrfristverletzung trifft nicht nur den, der verkauft: Der rückwirkende Gewinn entsteht auf Ebene der (ehemaligen) Mitunternehmerschaft und wird nach dem allgemeinen Schlüssel auf alle Realteiler verteilt – es sei denn, der Gesellschaftsvertrag ordnet ihn dem Verkäufer zu. Kein Wahlrecht: § 16 Abs. 3 S. 2 EStG ist zwingend, kein Antrag auf gemeinen Wert." },
      { typ: "klausur", punkte: [
        "Erst die Realteilung als Betriebsaufgabe qualifizieren, dann § 16 Abs. 3 S. 2 EStG als Ausnahme mit Buchwertfortführung.",
        "Prüfe für jeden Realteiler getrennt: Betriebsvermögen oder Privatvermögen? Körperschaft? Spitzenausgleich?",
        "Sperrfrist immer erwähnen, auch wenn im Sachverhalt kein Verkauf steht – ein Satz genügt.",
      ] },
      { typ: "links", module: [37], schemata: [] },
    ],
    selbstcheck: [
      { frage: "Bei der Realteilung übernimmt ein Gesellschafter ein Grundstück in sein Privatvermögen. Folge?", optionen: ["Buchwertfortführung", "Entnahme zum gemeinen Wert, anteiliger Aufgabegewinn", "Sperrfrist beginnt"], richtig: 1, erklaerung: "§ 16 Abs. 3 S. 2 EStG gilt nur für Übertragungen in ein Betriebsvermögen." },
      { frage: "Was passiert, wenn ein Realteiler das übernommene Gebäude binnen der Sperrfrist verkauft?", optionen: ["Nichts, er hat es ja im BV", "Rückwirkend gemeiner Wert für das Gebäude – Gewinn bei der Mitunternehmerschaft, verteilt auf alle Realteiler", "Nur sein Anteil wird aufgedeckt"], richtig: 1, erklaerung: "§ 16 Abs. 3 S. 3 EStG: rückwirkende Aufdeckung; Zurechnung nach dem Gewinnverteilungsschlüssel, sofern nichts anderes vereinbart." },
    ],
    merksatz: "Realteilung ins Betriebsvermögen: Buchwert, zwingend. Ins Privatvermögen oder an eine Körperschaft: gemeiner Wert. Drei Jahre Sperrfrist für Grundstücke, Gebäude und wesentliche Betriebsgrundlagen.",
  },
  {
    id: "vierundzwanzig",
    kapitel: "wechsel",
    titel: "§ 24 UmwStG: Ein ganzer Betrieb wandert in die Personengesellschaft",
    kurz: "Wahlrecht, Brutto- und Nettomethode, Rückwirkung und § 24 Abs. 5",
    minuten: 18,
    normen: ["§ 24 Abs. 1–5 UmwStG", "§ 20 Abs. 5, 6 UmwStG", "§ 16 Abs. 4, § 34 EStG", "§ 22 Abs. 2 UmwStG"],
    ziel: "Du prüfst die Voraussetzungen des § 24 UmwStG, übst das Bewertungswahlrecht aus und stellst Eröffnungs- und Ergänzungsbilanzen nach Brutto- und Nettomethode auf.",
    bloecke: [
      { typ: "absatz", text: "Bringt jemand nicht ein einzelnes Wirtschaftsgut, sondern einen ganzen Betrieb, Teilbetrieb oder Mitunternehmeranteil in eine Personengesellschaft ein und wird dafür Mitunternehmer, greift § 24 UmwStG. Er ist das Gegenstück zu § 6 Abs. 5 EStG für Sachgesamtheiten – mit einem Unterschied: Kein Zwang zum Buchwert, sondern ein Wahlrecht zwischen Buchwert, Zwischenwert und gemeinem Wert (§ 24 Abs. 2 UmwStG)." },
      { typ: "schritte", titel: "Voraussetzungen (§ 24 Abs. 1 UmwStG)", punkte: [
        "Einbringungsgegenstand: Betrieb, Teilbetrieb oder Mitunternehmeranteil (auch 100 %-Beteiligung an einer Kapitalgesellschaft aus dem BV). Alle funktional wesentlichen Betriebsgrundlagen müssen mit – auch solche im SBV des Einbringenden (Übergang ins SBV bei der neuen PersG genügt).",
        "Aufnehmende: eine Personengesellschaft (auch neu gegründet, auch durch Aufnahme eines weiteren Gesellschafters in ein Einzelunternehmen).",
        "Gegenleistung: Der Einbringende wird Mitunternehmer – Gutschrift auf einem Eigenkapitalkonto. Sonstige Gegenleistungen (Darlehen, Geld) sind nur bis 25 % des Buchwerts oder 500.000 €, höchstens Buchwert, unschädlich (§ 24 Abs. 2 S. 2 Nr. 2 UmwStG); darüber hinaus anteilig gemeiner Wert.",
      ] },
      { typ: "absatz", text: "Rechtsfolge: Die aufnehmende Gesellschaft darf das eingebrachte Vermögen auf Antrag mit dem Buchwert oder einem Zwischenwert ansetzen; Regelfall ist der gemeine Wert. Der Wertansatz der Gesellschaft ist zugleich der Veräußerungspreis des Einbringenden (§ 24 Abs. 3 S. 1 UmwStG). Beim Buchwert entsteht deshalb kein Gewinn. Beim gemeinen Wert entsteht ein Einbringungsgewinn, der nach §§ 16 Abs. 4, 34 EStG begünstigt ist – aber nur insoweit, als der Einbringende nicht selbst an der Gesellschaft beteiligt ist (§ 24 Abs. 3 S. 3 UmwStG, § 16 Abs. 2 S. 3 EStG: „Veräußerung an sich selbst“ ist laufender Gewinn)." },
      {
        typ: "tabelle",
        titel: "Brutto- oder Nettomethode bei Buchwertfortführung",
        kopf: ["", "Bruttomethode", "Nettomethode"],
        zeilen: [
          ["Gesamthandsbilanz", "Wirtschaftsgüter zum gemeinen Wert (Aufstockung), Kapitalkonten nach Verkehrswerten", "Wirtschaftsgüter zum Buchwert"],
          ["Ergänzungsbilanz Einbringender", "negative Ergänzungsbilanz in Höhe seiner Aufstockung (neutralisiert die stillen Reserven)", "keine (oder nur, wenn Kapitalkonten nicht den Buchwerten entsprechen)"],
          ["Ergänzungsbilanz übrige Gesellschafter", "keine", "positive Ergänzungsbilanz, wenn sie durch Bareinlage anteilig stille Reserven „kaufen“"],
          ["Steuerlich", "identisch: Buchwertfortführung in Summe (Gesamthand + Ergänzungsbilanzen)", "identisch"],
          ["Praxis/Klausur", "üblich, wenn die Handelsbilanz zu Verkehrswerten aufgestellt wird", "üblich, wenn die Handelsbilanz Buchwerte fortführt"],
        ],
      },
      { typ: "beispiel", titel: "A bringt sein Einzelunternehmen in die neue AB-OHG ein", sachverhalt: "Buchwert des Betriebs (nur ein Grundstück) 200.000 €, gemeiner Wert 800.000 €. B leistet 800.000 € Bareinlage. Beide sollen 50 : 50 beteiligt sein. Buchwertantrag wird gestellt.", schritte: [
        "Bruttomethode: Gesamthand aktiviert Grundstück 800.000 € und Bank 800.000 €; Kapital A 800.000 €, Kapital B 800.000 €. Negative Ergänzungsbilanz A: Minderwert Grundstück −600.000 €, Minderkapital −600.000 €. Steuerliches Kapital A = 800.000 − 600.000 = 200.000 € = Buchwert. Kein Gewinn.",
        "Nettomethode: Gesamthand aktiviert Grundstück 200.000 € und Bank 800.000 €; Kapital A 500.000 €, Kapital B 500.000 € (50 : 50). A hat aber nur 200.000 € eingebracht, B 800.000 €: Ergänzungsbilanz A −300.000 € (Minderwert Grundstück), Ergänzungsbilanz B +300.000 € (Mehrwert Grundstück, B hat die Hälfte der stillen Reserven „gekauft“). Steuerliches Kapital A: 500.000 − 300.000 = 200.000 €. Kein Gewinn.",
        "In beiden Methoden führt A steuerlich 200.000 € fort; die stillen Reserven von 600.000 € bleiben ihm zugeordnet (Brutto: komplett; Netto: 300.000 € in seiner negativen und 300.000 € über die positive Ergänzungsbilanz des B, der dafür 300.000 € mehr eingezahlt hat als Buchwert).",
      ], ergebnis: "Kein Einbringungsgewinn. Die Ergänzungsbilanzen werden mit der Nutzung/Veräußerung des Grundstücks fortgeschrieben." },
      { typ: "absatz", text: "Weitere Regeln: Rückwirkung um bis zu 8 Monate gibt es nur bei Einbringung im Wege der Gesamtrechtsnachfolge (§ 24 Abs. 4 HS 2 i. V. m. § 20 Abs. 5, 6 UmwStG); bei Einzelrechtsnachfolge zählt der tatsächliche Übergang. Die aufnehmende PersG tritt in die Rechtsstellung des Einbringenden ein (§ 24 Abs. 4 i. V. m. § 23 Abs. 1 UmwStG: AfA-Fortführung, Besitzzeitanrechnung). Sind im eingebrachten Betrieb Anteile an Kapitalgesellschaften enthalten und ist an der PersG eine Körperschaft beteiligt, sperrt § 24 Abs. 5 UmwStG die Anteile 7 Jahre (Einbringungsgewinn II entsprechend § 22 Abs. 2 UmwStG)." },
      { typ: "falle", text: "Sonstige Gegenleistung über der Grenze (25 % des Buchwerts oder 500.000 €): Nicht der ganze Vorgang wird entgeltlich, sondern der Buchwertansatz ist nur insoweit zulässig, als der Buchwert die Gegenleistung übersteigt – es entsteht ein Zwischenwertansatz. Rechne: Buchwert 400.000 €, Darlehen 500.000 € → Mindestansatz 500.000 €, stille Reserven werden um 100.000 € aufgedeckt (Einbringungsgewinn, laufend soweit Beteiligung an sich selbst)." },
      { typ: "klausur", punkte: [
        "Schema: (1) § 24 Abs. 1 Voraussetzungen, (2) Wahlrecht § 24 Abs. 2 mit Antrag, (3) Grenze für sonstige Gegenleistungen, (4) Wertansatz = Veräußerungspreis § 24 Abs. 3, (5) Begünstigung nur bei gemeinem Wert und nicht für „sich selbst“, (6) Bilanzen: Eröffnungsbilanz + Ergänzungsbilanzen.",
        "Sag klar, welche Methode du wählst, und stelle beide Ergänzungsbilanzen auf. Kontrolle: Steuerliches Kapital des Einbringenden = Buchwert des eingebrachten Betriebs.",
        "Die tiefe Version mit Verschmelzung, § 20 und § 21 UmwStG steht im UmwStR-Reiter „Schritt für Schritt“.",
      ] },
      { typ: "links", module: [30, 31, 32, 33, 34, 35, 36, 37], schemata: ["umw24-master", "umw24-brutto", "umw24-netto", "umw24-gegenleistung", "umw24-muanteil"], faelle: ["persg-fall-14", "persg-fall-15", "persg-fall-16", "persg-fall-17"], umwstr: true },
    ],
    selbstcheck: [
      { frage: "Welches Bewertungswahlrecht hat die aufnehmende PersG bei § 24 UmwStG?", optionen: ["Nur Buchwert", "Buchwert, Zwischenwert oder gemeiner Wert (Regelfall gemeiner Wert, Antrag für BW/ZW)", "Nur gemeiner Wert"], richtig: 1, erklaerung: "§ 24 Abs. 2 S. 1 und 2 UmwStG – anders als § 6 Abs. 5 EStG ein echtes Wahlrecht." },
      { frage: "Bei der Bruttomethode werden die stillen Reserven des Einbringenden neutralisiert durch …", optionen: ["eine positive Ergänzungsbilanz der übrigen Gesellschafter", "eine negative Ergänzungsbilanz des Einbringenden", "eine Rücklage in der Gesamthandsbilanz"], richtig: 1, erklaerung: "Die Gesamthand zeigt gemeine Werte; die negative Ergänzungsbilanz des Einbringenden führt ihn steuerlich auf den Buchwert zurück." },
    ],
    merksatz: "§ 24: Betrieb rein, Mitunternehmer raus, Wahlrecht für den Wert. Buchwert heißt: Gesamthand plus Ergänzungsbilanzen ergeben zusammen den alten Buchwert.",
  },

  /* ====================================================================== G */
  {
    id: "klausurfahrplan",
    kapitel: "klausur",
    titel: "Der Klausurfahrplan: So sieht die PersG-Aufgabe in Klausur 3 aus – und so löst du sie",
    kurz: "Aufgabentypen, Lösungsaufbau, Zeitplan, Formulierungsbausteine, typische Fehler",
    minuten: 20,
    normen: ["§ 15 Abs. 1 S. 1 Nr. 2 EStG", "§ 6 Abs. 5 EStG", "§ 15a EStG", "§ 16 EStG", "§ 24 UmwStG"],
    ziel: "Du hast einen festen Ablauf, mit dem du jede PersG-Aufgabe der Bilanzklausur in der vorgegebenen Zeit strukturiert löst.",
    bloecke: [
      { typ: "absatz", text: "Die Bilanzklausur (Tag 3) enthält fast jedes Jahr einen Teil zur Personengesellschaft – laut Auswertung der Musterlösungen 2013–2024 ist die Mitunternehmerschaft mit Sonderbetriebsvermögen und Ergänzungsbilanzen ein Dauerbrenner. Typisch sind 25 bis 40 Punkte, also 90 bis 145 Minuten bei 3,6 Minuten je Punkt. Die Aufgabe kommt fast immer in einer von drei Formen." },
      {
        typ: "tabelle",
        titel: "Die drei Aufgabentypen",
        kopf: ["Typ", "So erkennst du ihn", "Was verlangt wird"],
        zeilen: [
          ["Laufende Gewinnermittlung", "Handelsbilanz einer OHG/KG plus Sachverhalte zu Gesellschafterleistungen (Miete, Darlehen, Gehalt, Pension, Grundstück eines Gesellschafters)", "Steuerbilanzkorrekturen der Gesamthand, Sonderbilanzen, Gewinnverteilung, Gesamtgewinn-Tabelle, oft § 15a und GewSt-Hinweis"],
          ["Übertragungsvorgang", "Ein Gesellschafter überträgt ein Wirtschaftsgut oder einen Betrieb; Gutschrift auf einem Konto; teilweise Darlehen", "§ 6 Abs. 5 / § 6 Abs. 1 Nr. 5 / § 24 UmwStG prüfen, Buchungssätze, Ergänzungsbilanz, Sperrfrist"],
          ["Gesellschafterwechsel", "Eintritt, Austritt, Anteilsverkauf, Abfindung, Realteilung, Tod eines Gesellschafters", "§ 16-Gewinn des Ausscheidenden, Ergänzungsbilanz der Erwerber, Buchungen in der Gesamthand, Begünstigungen"],
        ],
      },
      { typ: "schritte", titel: "Der Ablauf, den du immer fährst", punkte: [
        "Sachverhalt lesen und die Gesellschafter mit Quoten, Konten und Besonderheiten (Haftsumme, Alter, SBV) auf einem Blatt notieren. Zeit: 5 Minuten.",
        "Einstieg schreiben: Mitunternehmerschaft (§ 15 Abs. 1 S. 1 Nr. 2 EStG), Gewinnermittlung durch Betriebsvermögensvergleich (§§ 4 Abs. 1, 5 Abs. 1 EStG), gesonderte und einheitliche Feststellung (§ 180 Abs. 1 S. 1 Nr. 2 Buchst. a AO). Drei Sätze, drei Punkte.",
        "Gesamtgewinn-Tabelle anlegen: Spalten je Gesellschafter plus Summe; Zeilen für Steuerbilanzgewinn Gesamthand, Ergänzungsbilanzen, Sonderbetriebseinnahmen, Sonderbetriebsausgaben.",
        "Jeden Sachverhaltspunkt in fester Reihenfolge abarbeiten: (a) handelsrechtliche Buchung war?, (b) steuerlich richtig? Norm, (c) Korrektur Gesamthand (Stufe 1), (d) Sonder-/Ergänzungsbilanz (Stufe 2), (e) Betrag in die Tabelle.",
        "Bilanzen ausformulieren, wenn verlangt: Steuerbilanz Gesamthand, Sonderbilanz je Gesellschafter, Ergänzungsbilanz je Gesellschafter. Jede Bilanz mit Datum und Überschrift.",
        "Gewinnverteilung: Vorab, Verzinsung, Rest; Kontrollsumme.",
        "Abschluss: § 15a EStG bei Kommanditisten, Gewerbesteuer (Gewerbeertrag = Gesamtgewinn, § 7 GewStG; Freibetrag; § 35 EStG erwähnen), Umsatzsteuer bei Sondervergütungen, ggf. § 16/§ 34 EStG.",
      ] },
      {
        typ: "tabelle",
        titel: "Formulierungsbausteine, die Punkte bringen",
        kopf: ["Situation", "Baustein"],
        zeilen: [
          ["Sondervergütung", "„Die Vergütung ist Betriebsausgabe der Gesamthand und nach § 15 Abs. 1 S. 1 Nr. 2 S. 1 HS 2 EStG als Sonderbetriebseinnahme des Gesellschafters zu erfassen; der Gesamtgewinn bleibt unverändert.“"],
          ["SBV", "„Das Grundstück dient unmittelbar dem Betrieb der KG und ist notwendiges Sonderbetriebsvermögen I (R 4.2 Abs. 2 EStR); es ist in einer Sonderbilanz mit den fortgeführten Anschaffungskosten zu aktivieren.“"],
          ["§ 6 Abs. 5", "„Es liegt eine Übertragung aus dem Sonderbetriebsvermögen in das Gesamthandsvermögen gegen Gewährung von Gesellschaftsrechten vor; nach § 6 Abs. 5 S. 3 Nr. 2 EStG ist zwingend der Buchwert anzusetzen. Die Sperrfrist des § 6 Abs. 5 S. 4 EStG ist zu beachten.“"],
          ["Ergänzungsbilanz", "„Soweit die Anschaffungskosten des Erwerbers das übernommene Kapitalkonto übersteigen, sind die Mehrwerte in einer positiven Ergänzungsbilanz zu erfassen und entsprechend dem Wirtschaftsgut der Gesamthand fortzuschreiben.“"],
          ["§ 15a", "„Der Verlustanteil ist nach § 15a Abs. 1 S. 1 EStG nur bis zur Höhe des Kapitalkontos ausgleichsfähig; der übersteigende Betrag ist nach § 15a Abs. 2 EStG verrechenbar und nach Abs. 4 gesondert festzustellen.“"],
        ],
      },
      { typ: "liste", titel: "Die zehn häufigsten Fehler", punkte: [
        "Sondervergütung in der Gesamthand gestrichen statt in der Sonderbilanz erfasst.",
        "SBV übersehen – vor allem die Komplementär-GmbH-Anteile und Refinanzierungsdarlehen.",
        "Ergänzungsbilanz in die Gesamthandsbilanz geschrieben.",
        "Konto der Gutschrift nicht geprüft (Eigenkapital vs. Darlehen).",
        "§ 6 Abs. 5 ohne Satz und Nummer zitiert; Sperrfrist vergessen.",
        "Bei § 24 UmwStG Ergänzungsbilanzen nicht aufgestellt oder Kontrolle (steuerliches Kapital = Buchwert) nicht gemacht.",
        "§ 15a: Sonderbilanz ins Kapitalkonto einbezogen; erweiterte Außenhaftung übersehen.",
        "§ 16: Kapitalkonto nur aus der Gesamthand abgezogen; Teilanteilsveräußerung als begünstigt behandelt.",
        "Gewinnverteilung ohne Kontrollsumme – Rechenfehler unbemerkt.",
        "Gewerbesteuer und Umsatzsteuer am Ende nicht angesprochen.",
      ] },
      { typ: "merke", text: "Zeitregel: 3,6 Minuten je Punkt. Bei 30 Punkten sind das 108 Minuten. Nach 100 Minuten hörst du auf und schreibst nur noch Ergebnisse in die Tabelle." },
      { typ: "klausur", punkte: [
        "Lerne die Reihenfolge Einstieg → Tabelle → Sachverhalte → Bilanzen → Verteilung → § 15a/GewSt/USt auswendig und übe sie an den Originalfällen 1, 8, 13 und 14 dieses Campus.",
        "Trainiere das Zeitgefühl im Klausurmodus: Ein Originalfall mit laufender Uhr, Lösung erst danach aufklappen.",
        "Prioritäten nach der Beck-Auswertung: rot (Mitunternehmerschaft, SBV, Ergänzungsbilanz, § 6 Abs. 5, § 24) zuerst sicher, dann orange (§ 15a, Realteilung), dann grün.",
      ] },
      { typ: "links", module: [4, 7, 23, 30], schemata: ["gewinnstufen", "sbv", "sechs5-system", "umw24-master"], faelle: ["persg-fall-1", "persg-fall-8", "persg-fall-13", "persg-fall-14"], umwstr: true },
    ],
    selbstcheck: [
      { frage: "Womit beginnt jede PersG-Lösung?", optionen: ["Mit der Gewinnverteilung", "Mit Mitunternehmerschaft, Gewinnermittlungsart und Feststellungsverfahren", "Mit der Gewerbesteuer"], richtig: 1, erklaerung: "Drei Einstiegssätze, drei sichere Punkte – und der Rahmen für alles Weitere." },
      { frage: "Wie lange darfst du bei 30 Punkten bearbeiten?", optionen: ["60 Minuten", "etwa 108 Minuten (3,6 Minuten je Punkt)", "180 Minuten"], richtig: 1, erklaerung: "Die Punkt-Zeit-Relation der Steuerberaterprüfung: 100 Punkte auf 360 Minuten." },
    ],
    merksatz: "Einstieg – Tabelle – Sachverhalte in fester Reihenfolge – Bilanzen – Verteilung mit Kontrollsumme – § 15a, GewSt, USt. Und die Uhr im Blick.",
  },
];

export const persgLernpfadGesamtminuten = persgLernpfad.reduce((s, l) => s + (l.minuten || 0), 0);
