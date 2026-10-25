"""Inhalte des Leadmagnet-PDFs, abgeleitet aus der Auswertung der Prüfungsprotokolle im Drive
(NRW 2019–2026, rund 455 Protokolle vorhanden, 84 vollständig ausgewertet).
Zitate sind wörtlich, ohne Namen; Quelle = Ort + Jahr. Häufigkeiten sind gerundete Auszählungen."""

ANZAHL = 84          # ausgewertete Protokolle
BESTAND = 450        # Protokolle im Archiv (gerundet)

ABLAUF = [
    ("ca. 8:15 / 13:30", "Ankunft",
     "Die Prüflinge werden gestaffelt einbestellt, meist alphabetisch im 15-Minuten-Takt."),
    ("30 Minuten", "Vorbereitung Kurzvortrag",
     "Drei Themen zur Wahl, nur mit Gesetzestexten. Papier wird gestellt, leere Karteikarten sind meist erlaubt."),
    ("ca. 10 Minuten", "Kurzvortrag",
     "Im Stehen oder Sitzen vor dem Prüfungsausschuss. Die Uhr hängt oft im Rücken – nach rund zehn Minuten wird abgebrochen."),
    ("6 Runden à 20–25 Min.", "Prüfungsgespräch",
     "Jeder Prüfer hat eine Runde, die letzte führt der Vorsitzende – er darf alles fragen. "
     "Pausen gibt es meist nach jeweils zwei Runden. Weiß jemand nicht weiter, geht die Frage an den Nächsten."),
    ("nach ca. 5 Stunden", "Beratung und Ergebnis",
     "Kurze Beratung, dann die Bekanntgabe – oft gemeinsam und teils mit Noten für jede Runde."),
]

GUT_ZU_WISSEN = [
    "Wer mit einer Vornote von 4,33 bis 4,5 kommt, wird in rund zwei Dritteln der Protokolle deutlich häufiger gefragt – meist als Chance.",
    "Gesetze, Richtlinien und Erlasse sind fast immer erlaubt und ausdrücklich erwünscht. Mitschriften werden teils eingesammelt.",
    "In etwa jedem siebten Protokoll greift der Ausschuss das Vortragsthema später noch einmal auf.",
    "Notiere dir bei der Vorstellung jeden Prüfer und sein Fachgebiet – es ist dein Kompass für die Runde.",
]

FEHLER = [
    dict(titel="Die Frage nicht durchschauen – und am Ziel vorbei antworten", haeufigkeit="in rund 38 von 84 Protokollen",
         text="Der häufigste Fehler überhaupt: Ein offener Mandantenfall wird breit abgearbeitet, während der Prüfer auf eine bestimmte Norm oder ein Stichwort wartet.",
         zitat="Man wusste die meiste Zeit leider nicht, worauf sie hinaus wollte.",
         quelle="Düsseldorf 2025",
         besser="Spiegle die Kernfrage kurz zurück („Geht es Ihnen um …?“), beginne mit der naheliegenden Norm und achte auf die Signale des Prüfers."),
    dict(titel="Aktuelles nicht auf dem Schirm", haeufigkeit="in rund 30 von 84 Protokollen",
         text="„Was ist neu?“ ist ein Klassiker – oft muss jeder eine Neuerung nennen. Gefragt wurden etwa E-Rechnung, Aktivrente, Gastro-Steuersatz, MoPeG, Grundsteuerreform und neue BFH-Urteile.",
         zitat="Gesetze auf den aktuellen Stand bringen.",
         quelle="Münster 2026",
         besser="Lies in den letzten Wochen BMF-Schreiben und BFH-Pressemitteilungen, sortiere deine Gesetzestexte nach und lies am Prüfungsmorgen Nachrichten."),
    dict(titel="Aus dem Kopf statt aus dem Gesetz antworten", haeufigkeit="in rund 25 von 84 Protokollen",
         text="Prüfer wollen Paragraph, Absatz und Satz hören. Wer nur aus dem Gedächtnis antwortet – oder schweigend lange sucht –, verschenkt Punkte.",
         zitat="Lieber das Gesetz zitieren als aus dem Kopf zu antworten.",
         quelle="Köln 2026",
         besser="Sag laut, wo du suchst („Das steht in § 173 AO …“). Lege für die Kernnormen Register und Markierungen an."),
    dict(titel="Schweigen oder „keine Ahnung“ sagen", haeufigkeit="in rund 16 von 84 Protokollen",
         text="Nach einer schwachen Runde blockieren viele oder geben offen auf. Stille ist für die Kommission die schlechteste aller Antworten.",
         zitat="Alles ist besser, als nichts zu sagen.",
         quelle="Düsseldorf 2025",
         besser="Steig beim Grundtatbestand ein und denk laut. Ein vernünftiger Lösungsansatz bringt mehr Punkte als das richtige Ergebnis nach langem Schweigen."),
    dict(titel="Keine Rückfragen zum Sachverhalt", haeufigkeit="in rund 15 von 84 Protokollen",
         text="Viele Fälle sind absichtlich unvollständig: Beteiligungsquote, Güterstand, Wohnfläche, ob das Insolvenzverfahren beantragt oder eröffnet ist.",
         zitat="Hier sollten wir zunächst Rückfragen stellen und den Sachverhalt ermitteln.",
         quelle="Köln 2026",
         besser="Geh vor wie im echten Mandantengespräch: erst die fehlenden Informationen erfragen, dann prüfen."),
    dict(titel="Den Kurzvortrag verschenken", haeufigkeit="in rund 14 von 84 Protokollen",
         text="Oft wählen alle dasselbe Thema – oder eines, zu dem sie zu wenig sagen können. Andere lassen sich von einem missglückten Vortrag den ganzen Tag verderben.",
         zitat="Ich hätte mich vermutlich für ein anderes Thema entscheiden müssen.",
         quelle="Düsseldorf 2025",
         besser="Wähle das Thema mit der klarsten Gliederung, nicht das bekannteste. Halte Blickkontakt mit dem ganzen Ausschuss – und hak einen schwachen Vortrag ab."),
    dict(titel="Randgebiete vernachlässigen", haeufigkeit="in rund 12 von 84 Protokollen",
         text="EU-Recht, Insolvenzrecht und StaRUG, Geldwäschegesetz, Berufsrecht und StBVV, Grundsteuer, VWL – hier trennt sich das Feld.",
         zitat="Gerade in den Randgebieten punkten zu können, hat mich nach vorn gebracht.",
         quelle="Köln 2022",
         besser="Lerne für jedes Randgebiet ein Grundgerüst und nimm die Texte mit (z. B. GwG, EUV/AEUV)."),
    dict(titel="Fachbegriffe nicht treffen", haeufigkeit="in rund 10 von 84 Protokollen",
         text="Viele Prüfer warten auf ein exaktes Stichwort – „Eröffnungsgrund“, „rechtliches Gehör“, „nicht steuerbar“ statt „steuerfrei“.",
         zitat="Er wollte jeden Fachbegriff hören.",
         quelle="Münster 2026",
         besser="Sprich Legaldefinitionen und Fachtermini bewusst aus – auch wenn sie dir selbstverständlich erscheinen."),
    dict(titel="Nicht zuhören, wenn andere dran sind", haeufigkeit="in rund 9 von 84 Protokollen",
         text="Fragen werden ohne Vorwarnung weitergereicht, oder es heißt: „Sehen Sie das genauso?“ Wer abschaltet, steht dann blank da.",
         zitat="Viele Prüfer haben gefragt, ob man die Antwort eines Prüflings genauso sieht.",
         quelle="Münster 2024",
         besser="Denk bei jeder Frage mit, schreib mit und bau auf der Antwort deines Vorredners auf."),
    dict(titel="Eine schlechte Runde mitnehmen", haeufigkeit="in rund 7 von 84 Protokollen",
         text="Nach einer misslungenen Runde sinkt die Leistung in den nächsten – und am Ende fehlt die Kraft für die Runde des Vorsitzenden.",
         zitat="Die neue Runde startet wieder bei 0.",
         quelle="Düsseldorf 2024",
         besser="Jede Runde wird einzeln bewertet. Nutze die Pausen zum Abhaken und plane Energie für die Schlussrunde ein."),
]

THEMEN = [
    ("AO / FGO", 98), ("Ertragsteuern", 95), ("ErbSt / BewG / GrESt", 95), ("Zivil- & Gesellschaftsrecht", 95),
    ("Bilanzsteuerrecht", 90), ("Umsatzsteuer", 85), ("Berufsrecht", 55), ("Europarecht", 35),
    ("Int. Steuerrecht", 30), ("InsO / StaRUG", 30), ("BWL / Kennzahlen", 30), ("Grundsteuer", 20), ("VWL", 20),
]

CHECKLISTE = [
    "Protokolle deines Prüfungsorts und deiner Kommission aus den letzten Jahren durcharbeiten – Fälle wiederholen sich",
    "Mindestens drei Prüfungssimulationen mit Lernpartnern: laut antworten, nicht nur lesen",
    "Neuerungen der letzten zwei Jahre (Gesetze, BMF-Schreiben, BFH-Urteile) als Liste führen",
    "Kurzvorträge unter echten Bedingungen üben: 30 Minuten Vorbereitung, 10 Minuten Vortrag",
    "Prüfschemata sicher beherrschen und gezieltes Aufschlagen in den Gesetzestexten trainieren",
    "Für jedes Randgebiet ein Grundgerüst lernen: EU, InsO, GwG, Berufsrecht, BWL/VWL",
    "Gesetzestexte am Ende auf den aktuellen Stand bringen",
]
