"""Inhalte des Leadmagnet-PDFs, abgeleitet aus der Auswertung der Prüfungsprotokolle im Drive.
Zitate sind wörtlich, ohne Initialen; Quelle = Ort + Datum."""

ANZAHL = 22  # ausgewertete Protokolle

ABLAUF = [
    ("ca. 8:15 / 13:30", "Ankunft",
     "Die Prüflinge werden gestaffelt im 10-Minuten-Takt einbestellt, meist alphabetisch."),
    ("30 Minuten", "Vorbereitung Kurzvortrag",
     "Du ziehst drei Themen und wählst eines – typischerweise je eines aus AO/Verfahrensrecht, "
     "Ertragsteuern/Bilanz und Recht/BWL. Dann 30 Minuten Vorbereitung."),
    ("ca. 10 Minuten", "Kurzvortrag",
     "Vortrag vor dem Prüfungsausschuss. Danach eine kurze Pause; das Vortragsthema wird später meist nicht mehr aufgegriffen."),
    ("6 Runden", "Prüfungsgespräch",
     "Jeder Prüfer hat eine Runde, der Vorsitzende prüft zuletzt. Bei vier Prüflingen dauert eine Runde rund 20 Minuten. "
     "Weiß jemand nicht weiter, geht die Frage an den Nächsten."),
    ("am Ende", "Beratung und Ergebnis",
     "Kurze Beratung, dann die Bekanntgabe – oft gemeinsam und teils mit Noten für jede Runde."),
]

GUT_ZU_WISSEN = [
    "Wer mit einer schwächeren Vornote kommt, wird deutlich häufiger gefragt. Gut Vorbenotete werden eher in Ruhe gelassen.",
    "Gesetze, Richtlinien und Erlasse darfst du benutzen – die Prüfer wollen ausdrücklich sehen, dass du damit arbeitest.",
    "Das angekündigte Fachgebiet eines Prüfers ist oft nur ein Etikett. Rechne mit fachübergreifenden Fragen.",
    "Schreib dir zu Beginn die Kommission und ihre Fachgebiete auf.",
]

FEHLER = [
    dict(titel="Raten, statt zu klären, worauf der Prüfer hinauswill", haeufigkeit="in rund 10 von 22 Protokollen",
         text="Viele Runden werden zäh, weil Prüflinge ohne Plan in eine Richtung laufen. Die Kommission merkt sofort, ob du strukturiert denkst oder rätst.",
         zitat="Oft wusste man nicht, worauf die Prüfer hinauswollten. Im Ergebnis spiegelte sich dies dann wider.",
         quelle="Münster 2023",
         besser="Fasse den Sachverhalt kurz mit eigenen Worten zusammen, frag gezielt nach und steig dann bei der Grundnorm ein."),
    dict(titel="Zur Lösung springen, statt das Schema abzuarbeiten", haeufigkeit="in rund 7 von 22 Protokollen",
         text="Wer direkt auf die Spezialnorm geht, wird unterbrochen. Prüfer wollen sehen, dass du einen Fall sauber von vorn aufbaust.",
         zitat="Er wollte das Schema abgearbeitet haben.",
         quelle="Düsseldorf 2025",
         besser="Immer von vorn prüfen, z. B. in der USt: Unternehmer, Leistung, Ort, Steuerbarkeit, Steuerpflicht, Bemessungsgrundlage, Steuersatz."),
    dict(titel="Antworten ohne Norm", haeufigkeit="in rund 8 von 22 Protokollen",
         text="„Aus dem Bauch“ zu antworten kostet Punkte, selbst wenn das Ergebnis stimmt. Viele Prüfer fragen gezielt nach dem Paragraphen.",
         zitat="Es wurde immer gezielt nach den entsprechenden Normen gefragt.",
         quelle="Köln 2025",
         besser="Nenne zu jeder Aussage die Vorschrift – auch im Zivilrecht. Die zentralen Fundstellen solltest du ohne Suchen kennen."),
    dict(titel="Das Gesetz nicht nutzen – oder zu lange blättern", haeufigkeit="in rund 7 von 22 Protokollen",
         text="Die Prüfer wollen sehen, dass du mit Gesetz und Richtlinien arbeitest. Wer aber lange sucht, verliert die Frage an den Nachbarn.",
         zitat="Arbeitet ganz wichtig mit den Gesetzen, Richtlinien … das wollen die Prüfer sehen.",
         quelle="Düsseldorf 2025",
         besser="Erst die Antwortrichtung samt Paragraph nennen, dann gezielt aufschlagen. Übe das Blättern in deinen Gesetzestexten vorher."),
    dict(titel="Aktuelles nicht auf dem Schirm", haeufigkeit="in rund 9 von 22 Protokollen",
         text="Gesetzesänderungen und neue Urteile werden fast immer abgefragt – von Jahressteuergesetzen über E-Rechnung und Kleinunternehmerregelung bis zur Grundsteuerreform.",
         zitat="Jeder sollte ein Gesetz zum Jahreswechsel nennen.",
         quelle="Köln 2023",
         besser="Lege eine eigene Liste der Änderungen der letzten zwei Jahre an und wiederhole sie in den letzten Wochen täglich."),
    dict(titel="Sich von harschen Prüfern verunsichern lassen", haeufigkeit="in rund 5 von 22 Protokollen",
         text="Einzelne Prüfer unterbrechen, wirken genervt oder schreiben nur mit. Das gehört dazu und sagt wenig über deine Note.",
         zitat="Solche Bemerkungen ignorieren und einfach weiter kämpfen.",
         quelle="Düsseldorf 2025",
         besser="Nichts persönlich nehmen. Jede Runde ist ein Neustart – eine schwache Runde lässt sich in der nächsten ausgleichen."),
    dict(titel="Ungenaue Fachbegriffe", haeufigkeit="in rund 4 von 22 Protokollen",
         text="„Steuerfrei“ ist nicht „nicht steuerbar“, ein Freibetrag ist keine Freigrenze. Prüfer achten genau auf die Terminologie.",
         zitat="Nicht steuerbar (steuerfrei zu sagen ist hier falsch).",
         quelle="Düsseldorf 2025",
         besser="Sammle typische Begriffspaare, die oft verwechselt werden, und übe, sie laut präzise zu erklären."),
    dict(titel="Nebenfächer unterschätzen", haeufigkeit="in rund 12 von 22 Protokollen",
         text="Zivil- und Gesellschaftsrecht, Europarecht, BWL/VWL und Berufsrecht kommen in über der Hälfte der Prüfungen vor – und werden oft kaum vorbereitet.",
         zitat="Seeehr schwere Runde.",
         quelle="Köln 2023 (Insolvenzrecht)",
         besser="Plane feste Lerneinheiten für EU-Organe und Klagearten, Konjunktur und Kennzahlen, StBVV und vereinbare Tätigkeiten ein."),
    dict(titel="Theoretisch antworten statt zu beraten", haeufigkeit="in rund 6 von 22 Protokollen",
         text="Viele Fragen beginnen mit „Mandant kommt in die Kanzlei …“. Gefragt ist dann nicht nur die Rechtslage, sondern eine Empfehlung.",
         zitat="Er wollte hören, dass wir mit dem Mandanten die Zielsetzung erfragen sollten.",
         quelle="Köln 2025",
         besser="Denk wie ein Berater: Ziel des Mandanten klären, Gestaltungsmöglichkeiten nennen, Folgen für die Praxis aufzeigen."),
    dict(titel="Nicht rechnen können", haeufigkeit="in rund 4 von 22 Protokollen",
         text="Prüfer geben Zahlen vor und wollen Steuerbeträge, Quoten oder Buchungssätze mit Werten hören – im Kopf.",
         zitat="Zahlen wurden vorgegeben und es sollte gerechnet werden.",
         quelle="Düsseldorf 2023",
         besser="Freibeträge, Steuersätze und Grundformeln auswendig können und kleine Rechnungen laut üben."),
]

THEMEN = [
    ("Einkommensteuer", 95), ("AO / FGO", 95), ("Bilanzsteuerrecht", 90), ("Zivil- & Gesellschaftsrecht", 90),
    ("ErbSt / Bewertung", 80), ("Umsatzsteuer", 70), ("Grunderwerbsteuer", 50), ("Europarecht", 40),
    ("Berufsrecht", 30), ("KSt / GewSt", 25), ("BWL / VWL", 25), ("Int. Steuerrecht", 20),
]

CHECKLISTE = [
    "Protokolle deiner Kommission bzw. deines Prüfungsorts aus den letzten Jahren durcharbeiten",
    "Mindestens drei Prüfungssimulationen mit Lernpartnern – laut antworten, nicht nur lesen",
    "Liste der Gesetzesänderungen der letzten zwei Jahre erstellen und täglich wiederholen",
    "Kurzvorträge unter Zeitdruck üben: 30 Minuten Vorbereitung, 10 Minuten Vortrag",
    "Die Prüfschemata für ESt, USt, AO-Korrektur und ErbSt sicher beherrschen",
    "Wichtige Freibeträge, Steuersätze und Grenzen auswendig lernen",
    "Gesetzestexte mit Registern versehen und gezieltes Aufschlagen trainieren",
]
