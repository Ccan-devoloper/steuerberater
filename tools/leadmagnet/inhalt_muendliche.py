"""Inhalte des Leadmagnet-PDFs, abgeleitet aus der Auswertung der Prüfungsprotokolle im Drive
(NRW 2019–2026: 471 Dateien, 421 lesbare Protokolle einzeln codiert, siehe auswerten.py).
Zitate sind wörtlich, ohne Namen; Quelle = Ort + Jahr. Häufigkeiten = Anzahl Protokolle, in denen der Fehler erkennbar ist."""

ANZAHL = 421         # ausgewertete (lesbare) Protokolle
BESTAND = 450        # Protokolle im Archiv (gerundet)

ABLAUF = [
    ("ca. 8:15 / 13:30", "Ankunft",
     "Die Prüflinge werden gestaffelt einbestellt, meist alphabetisch im 15-Minuten-Takt."),
    ("30 Minuten", "Vorbereitung Kurzvortrag",
     "Eine halbe Stunde vor Prüfungsbeginn bekommst du drei Themen zur Wahl (§ 26 Abs. 6 DVStB). In der Vorbereitung sind laut Protokollen nur die Gesetzestexte erlaubt."),
    ("ca. 10 Minuten", "Kurzvortrag",
     "Ein kurzer Vortrag vor dem Prüfungsausschuss – üblich sind rund zehn Minuten. Laut Protokollen geben viele Vorsitzende kurz vor Schluss ein Zeichen."),
    ("6 Runden à 20–25 Min.", "Prüfungsgespräch",
     "Sechs Prüfungsabschnitte (§ 26 Abs. 3 DVStB): Jeder Prüfer hat eine Runde, die letzte führt der Vorsitzende – er darf alles fragen. "
     "Pausen gibt es meist nach jeweils zwei Runden. Weiß jemand nicht weiter, geht die Frage an den Nächsten."),
    ("nach ca. 5 Stunden", "Beratung und Ergebnis",
     "Kurze Beratung, dann die Bekanntgabe – oft gemeinsam und teils mit Noten für jede Runde."),
]

GUT_ZU_WISSEN = [
    "In mehr als jedem dritten Protokoll spielt die Vornote sichtbar eine Rolle: Wer mit 4,33 bis 4,5 kommt, wird deutlich häufiger gefragt – meist als Chance.",
    "Welche Hilfsmittel erlaubt sind, steht in deiner Ladung – in der Regel sind es die Gesetzestexte. Die Prüfer wollen ausdrücklich sehen, dass du damit arbeitest. Mitschriften werden teils eingesammelt.",
    "In fast jedem dritten Protokoll ist mindestens ein Prüfling durchgefallen – die Mündliche ist kein Selbstläufer.",
    "Die Prüfungszeit je Prüfling soll 90 Minuten nicht überschreiten (§ 26 Abs. 7 DVStB) – du bist also nicht ständig dran.",
    "Notiere dir bei der Vorstellung jeden Prüfer und sein Fachgebiet – es ist dein Kompass für die Runde.",
]

FEHLER = [
    dict(titel='Die Frage nicht durchschauen – und am Ziel vorbei antworten', haeufigkeit='in 221 von 421 Protokollen', text='Der häufigste Fehler überhaupt: Ein offener Mandantenfall wird breit abgearbeitet, während der Prüfer auf eine bestimmte Norm oder ein Stichwort wartet.', zitat='Man wusste die meiste Zeit leider nicht, worauf sie hinaus wollte.', quelle='Düsseldorf 2025', besser='Spiegle die Kernfrage kurz zurück („Geht es Ihnen um …?“), beginne mit der naheliegenden Norm und achte auf die Signale des Prüfers.'),
    dict(titel='Aus dem Kopf statt aus dem Gesetz antworten', haeufigkeit='in 155 von 421 Protokollen', text='Prüfer wollen Paragraph, Absatz und Satz hören. Wer nur aus dem Gedächtnis antwortet – oder schweigend lange sucht –, verschenkt Punkte.', zitat='Lieber das Gesetz zitieren als aus dem Kopf zu antworten.', quelle='Köln 2026', besser='Sag laut, wo du suchst („Das steht in § 173 AO …“). Lege für die Kernnormen Register und Markierungen an.'),
    dict(titel='Aktuelles nicht auf dem Schirm', haeufigkeit='in 133 von 421 Protokollen', text='„Was ist neu?“ ist ein Klassiker – oft muss jeder eine Neuerung nennen. Gefragt wurden etwa E-Rechnung, Wachstumschancengesetz, MoPeG, Grundsteuerreform und neue BFH-Urteile.', zitat='Gesetze auf den aktuellen Stand bringen.', quelle='Münster 2026', besser='Lies in den letzten Wochen BMF-Schreiben und BFH-Pressemitteilungen, sortiere deine Gesetzestexte nach und lies am Prüfungsmorgen Nachrichten.'),
    dict(titel='Fachbegriffe nicht treffen', haeufigkeit='in 114 von 421 Protokollen', text='Viele Prüfer warten auf ein exaktes Stichwort – „Eröffnungsgrund“, „rechtliches Gehör“, „nicht steuerbar“ statt „steuerfrei“.', zitat='Er wollte jeden Fachbegriff hören.', quelle='Münster 2026', besser='Sprich Legaldefinitionen und Fachtermini bewusst aus – auch wenn sie dir selbstverständlich erscheinen.'),
    dict(titel='Randgebiete vernachlässigen', haeufigkeit='in 89 von 421 Protokollen', text='EU-Recht, Insolvenzrecht und StaRUG, Geldwäschegesetz, Berufsrecht und StBVV, Grundsteuer, VWL – hier trennt sich das Feld.', zitat='Gerade in den Randgebieten punkten zu können, hat mich nach vorn gebracht.', quelle='Köln 2022', besser='Lerne für jedes Randgebiet ein Grundgerüst und kläre vorab, welche Gesetzestexte du mitbringen darfst (z. B. GwG, EUV/AEUV).'),
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

# Je Fehler: typische Szene (Prüferfrage, schwache und starke Antwort) und ein Merksatz.
SZENEN = [
    dict(frage="Ihr Mandant hat ein vermietetes Mehrfamilienhaus aus seinem Privatvermögen sieben Jahre nach dem Kauf verkauft. Was sagen Sie ihm?",
         schwach="Erst einmal gehört das Haus zum Privatvermögen, dann müssen wir die Einkünfte aus Vermietung prüfen, die AfA …",
         stark="Entscheidend ist § 23 Abs. 1 Satz 1 Nr. 1 EStG: Zwischen Anschaffung und Veräußerung liegen nicht mehr als zehn Jahre. Der Gewinn ist deshalb als privates Veräußerungsgeschäft nach § 22 Nr. 2 EStG steuerpflichtig.",
         merke="Erst die Kernfrage, dann die Details. Wer nicht sicher ist, worauf der Prüfer hinauswill, fragt nach."),
    dict(frage="Wie lange kann das Finanzamt einen Einkommensteuerbescheid noch ändern?",
         schwach="Ich glaube, vier Jahre nach Ablauf des Jahres.",
         stark="Nur wenn eine Korrekturvorschrift greift und die Festsetzungsfrist noch läuft. Sie beträgt nach § 169 Abs. 2 Satz 1 Nr. 2 AO vier Jahre und beginnt nach § 170 Abs. 2 Satz 1 Nr. 1 AO mit Ablauf des Jahres, in dem die Erklärung eingereicht wurde – spätestens mit Ablauf des dritten Folgejahres.",
         merke="Erst die Norm, dann das Ergebnis. Sag laut, wo du nachschlägst."),
    dict(frage="Nennen Sie eine aktuelle Neuerung im Umsatzsteuerrecht.",
         schwach="Da bin ich gerade nicht ganz auf dem Laufenden …",
         stark="Die E-Rechnung: Seit dem 1. 1. 2025 müssen inländische Unternehmer E-Rechnungen empfangen können. Für die Ausstellung gelten nach § 27 Abs. 38 UStG Übergangsregeln bis Ende 2026, für kleinere Unternehmer bis 800.000 Euro Vorjahresumsatz bis Ende 2027.",
         merke="Halte drei bis fünf Neuerungen je Steuerart abrufbereit – mit Norm und Jahr."),
    dict(frage="Ihr Mandant liefert Waren an einen Unternehmer in Frankreich. Fällt deutsche Umsatzsteuer an?",
         schwach="Nein, das ist steuerfrei, weil es ins Ausland geht.",
         stark="Es kann eine innergemeinschaftliche Lieferung vorliegen, steuerfrei nach § 4 Nr. 1 Buchst. b i. V. m. § 6a UStG – wenn die Ware nach Frankreich gelangt, der Kunde sie für sein Unternehmen erwirbt, der Erwerb dort besteuert wird und er seine gültige französische USt-IdNr. verwendet.",
         merke="Ein präziser Fachbegriff ersetzt drei Sätze Umschreibung."),
    dict(frage="Welche Organe der Europäischen Union kennen Sie?",
         schwach="Die Kommission … und das Parlament. Mehr fällt mir gerade nicht ein.",
         stark="Nach Art. 13 Abs. 1 EUV: das Europäische Parlament, der Europäische Rat, der Rat, die Europäische Kommission, der Gerichtshof der Europäischen Union, die Europäische Zentralbank und der Rechnungshof.",
         merke="Für jedes Randgebiet reicht ein solides Grundgerüst – aber das muss sitzen."),
    dict(frage="Der Bescheid ist bestandskräftig, jetzt tauchen Belege für höhere Werbungskosten auf. Frau A, sehen Sie das wie Ihr Vorredner?",
         schwach="Entschuldigung, könnten Sie die Frage bitte wiederholen?",
         stark="Im Ergebnis ja, eine Änderung nach § 173 Abs. 1 Nr. 2 AO kommt in Betracht. Ich würde ergänzen: Weil sie zugunsten des Steuerpflichtigen wirkt, darf ihn kein grobes Verschulden daran treffen, dass die Tatsachen erst nachträglich bekannt werden.",
         merke="Jede Frage ist auch deine Frage. Schreib mit und denk mit."),
    dict(frage="Was kann der Mandant gegen einen Haftungsbescheid unternehmen?",
         schwach="Da bin ich mir nicht sicher.",
         stark="Der Haftungsbescheid nach § 191 AO ist ein Verwaltungsakt. Dagegen ist der Einspruch nach § 347 AO statthaft, die Frist beträgt nach § 355 Abs. 1 AO einen Monat ab Bekanntgabe. Zusätzlich würde ich Aussetzung der Vollziehung nach § 361 Abs. 2 AO beantragen.",
         merke="Fang beim Grundtatbestand an. Ein strukturierter Ansatz bringt Punkte – Schweigen nie."),
    dict(frage="Ihr Mandant möchte seiner Tochter das selbst bewohnte Einfamilienhaus übertragen. Was raten Sie?",
         schwach="Das ist steuerfrei, das Familienheim ist doch nach § 13 ErbStG befreit.",
         stark="Da brauche ich mehr Angaben. Eine Schenkung zu Lebzeiten an ein Kind ist nicht nach § 13 ErbStG befreit – § 13 Abs. 1 Nr. 4a gilt nur für Ehegatten und Lebenspartner. Beim Erwerb von Todes wegen greift Nr. 4c, wenn die Tochter selbst einzieht, begrenzt auf 200 m² Wohnfläche. Wie groß ist das Haus?",
         merke="Ein unvollständiger Sachverhalt ist oft Absicht. Rückfragen zeigen Beratungskompetenz."),
    dict(frage="Neue Runde: Was versteht man unter einer Betriebsaufspaltung?",
         schwach="(Noch in Gedanken bei der letzten Runde) … äh …",
         stark="Ein Besitzunternehmen überlässt einem Betriebsunternehmen eine wesentliche Betriebsgrundlage – sachliche Verflechtung –, und hinter beiden steht ein einheitlicher geschäftlicher Betätigungswille – personelle Verflechtung. Folge: Die Vermietung wird zur gewerblichen Tätigkeit.",
         merke="Jede Runde wird einzeln bewertet. Die letzte ist vorbei – die nächste beginnt bei null."),
    dict(frage="Sie haben das Thema „Die Selbstanzeige“ gewählt. Bitte beginnen Sie.",
         schwach="Ich spreche heute über die Selbstanzeige. Die Selbstanzeige ist in § 371 AO geregelt und … (keine Gliederung, Blick aufs Blatt)",
         stark="Ich gliedere in drei Teile: die Voraussetzungen nach § 371 Abs. 1 AO, die Sperrgründe nach Abs. 2 und die Rechtsfolgen. Zum Schluss ein kurzes Fazit für die Beratungspraxis.",
         merke="Gliederung ansagen, Blickkontakt halten, Zeit im Blick behalten."),
]
