"""Inhalte des Leadmagnet-PDFs, abgeleitet aus der Auswertung der Prüfungsprotokolle im Drive
(NRW 2019–2026: 471 Dateien, 421 lesbare Protokolle einzeln codiert, siehe auswerten.py).
Zitate sind wörtlich, ohne Namen; Quelle = Ort + Jahr. Häufigkeiten = Anzahl Protokolle, in denen der Fehler erkennbar ist."""

ANZAHL = 421         # ausgewertete (lesbare) Protokolle
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
    "In mehr als jedem dritten Protokoll spielt die Vornote sichtbar eine Rolle: Wer mit 4,33 bis 4,5 kommt, wird deutlich häufiger gefragt – meist als Chance.",
    "Gesetze, Richtlinien und Erlasse sind fast immer erlaubt und ausdrücklich erwünscht. Mitschriften werden teils eingesammelt.",
    "In 121 von 421 Protokollen ist mindestens ein Prüfling durchgefallen – die Mündliche ist kein Selbstläufer.",
    "Notiere dir bei der Vorstellung jeden Prüfer und sein Fachgebiet – es ist dein Kompass für die Runde.",
]

FEHLER = [
    dict(titel='Die Frage nicht durchschauen – und am Ziel vorbei antworten', haeufigkeit='in 221 von 421 Protokollen', text='Der häufigste Fehler überhaupt: Ein offener Mandantenfall wird breit abgearbeitet, während der Prüfer auf eine bestimmte Norm oder ein Stichwort wartet.', zitat='Man wusste die meiste Zeit leider nicht, worauf sie hinaus wollte.', quelle='Düsseldorf 2025', besser='Spiegle die Kernfrage kurz zurück („Geht es Ihnen um …?“), beginne mit der naheliegenden Norm und achte auf die Signale des Prüfers.'),
    dict(titel='Aus dem Kopf statt aus dem Gesetz antworten', haeufigkeit='in 155 von 421 Protokollen', text='Prüfer wollen Paragraph, Absatz und Satz hören. Wer nur aus dem Gedächtnis antwortet – oder schweigend lange sucht –, verschenkt Punkte.', zitat='Lieber das Gesetz zitieren als aus dem Kopf zu antworten.', quelle='Köln 2026', besser='Sag laut, wo du suchst („Das steht in § 173 AO …“). Lege für die Kernnormen Register und Markierungen an.'),
    dict(titel='Aktuelles nicht auf dem Schirm', haeufigkeit='in 133 von 421 Protokollen', text='„Was ist neu?“ ist ein Klassiker – oft muss jeder eine Neuerung nennen. Gefragt wurden etwa E-Rechnung, Aktivrente, Gastro-Steuersatz, MoPeG, Grundsteuerreform und neue BFH-Urteile.', zitat='Gesetze auf den aktuellen Stand bringen.', quelle='Münster 2026', besser='Lies in den letzten Wochen BMF-Schreiben und BFH-Pressemitteilungen, sortiere deine Gesetzestexte nach und lies am Prüfungsmorgen Nachrichten.'),
    dict(titel='Fachbegriffe nicht treffen', haeufigkeit='in 114 von 421 Protokollen', text='Viele Prüfer warten auf ein exaktes Stichwort – „Eröffnungsgrund“, „rechtliches Gehör“, „nicht steuerbar“ statt „steuerfrei“.', zitat='Er wollte jeden Fachbegriff hören.', quelle='Münster 2026', besser='Sprich Legaldefinitionen und Fachtermini bewusst aus – auch wenn sie dir selbstverständlich erscheinen.'),
    dict(titel='Randgebiete vernachlässigen', haeufigkeit='in 89 von 421 Protokollen', text='EU-Recht, Insolvenzrecht und StaRUG, Geldwäschegesetz, Berufsrecht und StBVV, Grundsteuer, VWL – hier trennt sich das Feld.', zitat='Gerade in den Randgebieten punkten zu können, hat mich nach vorn gebracht.', quelle='Köln 2022', besser='Lerne für jedes Randgebiet ein Grundgerüst und nimm die Texte mit (z. B. GwG, EUV/AEUV).'),
    dict(titel='Nicht zuhören, wenn andere dran sind', haeufigkeit='in 81 von 421 Protokollen', text='Fragen werden ohne Vorwarnung weitergereicht, oder es heißt: „Sehen Sie das genauso?“ Wer abschaltet, steht dann blank da.', zitat='Viele Prüfer haben gefragt, ob man die Antwort eines Prüflings genauso sieht.', quelle='Münster 2024', besser='Denk bei jeder Frage mit, schreib mit und bau auf der Antwort deines Vorredners auf.'),
    dict(titel='Schweigen oder „keine Ahnung“ sagen', haeufigkeit='in 74 von 421 Protokollen', text='Nach einer schwachen Runde blockieren viele oder geben offen auf. Stille ist für die Kommission die schlechteste aller Antworten.', zitat='Alles ist besser, als nichts zu sagen.', quelle='Düsseldorf 2025', besser='Steig beim Grundtatbestand ein und denk laut. Ein vernünftiger Lösungsansatz bringt mehr Punkte als das richtige Ergebnis nach langem Schweigen.'),
    dict(titel='Keine Rückfragen zum Sachverhalt', haeufigkeit='in 55 von 421 Protokollen', text='Viele Fälle sind absichtlich unvollständig: Beteiligungsquote, Güterstand, Wohnfläche, ob das Insolvenzverfahren beantragt oder eröffnet ist.', zitat='Hier sollten wir zunächst Rückfragen stellen und den Sachverhalt ermitteln.', quelle='Köln 2026', besser='Geh vor wie im echten Mandantengespräch: erst die fehlenden Informationen erfragen, dann prüfen.'),
    dict(titel='Eine schlechte Runde mitnehmen', haeufigkeit='in 48 von 421 Protokollen', text='Nach einer misslungenen Runde sinkt die Leistung in den nächsten – und am Ende fehlt die Kraft für die Runde des Vorsitzenden.', zitat='Die neue Runde startet wieder bei 0.', quelle='Düsseldorf 2024', besser='Jede Runde wird einzeln bewertet. Nutze die Pausen zum Abhaken und plane Energie für die Schlussrunde ein.'),
    dict(titel='Den Kurzvortrag verschenken', haeufigkeit='in 23 von 421 Protokollen', text='Oft wählen alle dasselbe Thema – oder eines, zu dem sie zu wenig sagen können. Andere lassen sich von einem missglückten Vortrag den ganzen Tag verderben.', zitat='Ich hätte mich vermutlich für ein anderes Thema entscheiden müssen.', quelle='Düsseldorf 2025', besser='Wähle das Thema mit der klarsten Gliederung, nicht das bekannteste. Halte Blickkontakt mit dem ganzen Ausschuss – und hak einen schwachen Vortrag ab.'),
]

THEMEN = [
    ("Ertragsteuern", 100), ("Zivil- & Gesellschaftsrecht", 98), ("ErbSt / BewG / GrESt", 97), ("AO / FGO", 96),
    ("Bilanzsteuerrecht", 82), ("Umsatzsteuer", 76), ("Berufsrecht", 57), ("Europarecht", 34), ("BWL / Kennzahlen", 32),
    ("InsO / StaRUG", 29), ("Int. Steuerrecht", 28), ("Grundsteuer", 23), ("VWL", 19),
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
