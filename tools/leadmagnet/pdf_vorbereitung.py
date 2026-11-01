"""Leadmagnet-PDF 2: Vorbereitung auf die Mündliche – Zeitplan, Lerntipps und juristisches Handwerkszeug.

Gleicher Stil wie pdf_muendliche.py (Farben, Schriften, Karten).
Aufruf: python3 tools/leadmagnet/pdf_vorbereitung.py  ->  landingpage/vorbereitung-muendliche.pdf
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.lib.utils import ImageReader, simpleSplit
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

HIER = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HIER, "..", "..", "landingpage")
for n in ("Regular", "Bold", "Black"):
    pdfmetrics.registerFont(TTFont(f"N-{n}", os.path.join(HIER, "fonts", f"Nunito-{n}.ttf")))
pdfmetrics.registerFont(TTFont("Hand", os.path.join(HIER, "fonts", "Caveat.ttf")))

INK, PAPER, LILA, ORANGE, GELB, GRUEN, GRAU = map(HexColor, [
    "#16161d", "#fffbe6", "#7c5cff", "#ff7a45", "#ffde59", "#23d98b", "#5c5c68"])
HELLGRUEN, HELLLILA, GRUEN_TEXT = HexColor("#e3fbef"), HexColor("#efeaff"), HexColor("#0e8a55")
W, H = A4
M = 46
B = W - 2 * M
UNTEN = 60
KOPF = "Vorbereitung auf die Mündliche"

# ------------------------------------------------------------------ Inhalt
JETZT = [
    ("Wissen braucht Zeit zum Setzen",
     "Was du über mehrere Wochen verteilt wiederholst, bleibt deutlich besser hängen als alles, was du in den "
     "letzten Tagen vor der Prüfung paukst. Jede Woche, die du jetzt beginnst, zahlt sich am Prüfungstag aus."),
    ("Das Zivilrecht kommt nicht von allein",
     "Steuerrecht hast du für die Schriftliche intensiv gelernt. BGB, HGB und Gesellschaftsrecht dagegen oft nur am Rand – "
     "dabei werden sie in der Mündlichen regelmäßig geprüft. Grundlagen und Methodik brauchen Zeit."),
    ("Nicht auf das Ergebnis warten",
     "Zwischen der Bekanntgabe der Ergebnisse der Schriftlichen und dem Prüfungstermin liegen oft nur wenige Wochen. "
     "Wer erst dann anfängt, lernt unter Zeitdruck. Wer jetzt startet, hat Luft für Wiederholung und Simulation."),
]

ZEITPLAN = [
    ("ab sofort", "Fundament legen",
     "Juristische Methodik und die zivilrechtlichen Grundlagen erarbeiten: BGB Allgemeiner Teil, Schuldrecht, Sachenrecht, "
     "Erbrecht, HGB und Gesellschaftsrecht. Je Gebiet ein Prüfschema auf einer Seite. Dazu eine Liste aller Prüfungsgebiete "
     "nach § 37 Abs. 3 StBerG anlegen und ehrlich bewerten: sicher, wackelig, Lücke."),
    ("12–9 Wochen vorher", "Breite schaffen",
     "Lücken in AO/FGO, Ertragsteuern, Umsatzsteuer, ErbSt/BewG und Bilanzsteuerrecht schließen. Randgebiete wie "
     "Europarecht, Insolvenzrecht, Berufsrecht und BWL mit einem Grundgerüst abdecken. Jede Woche alte Themen kurz wiederholen."),
    ("8–5 Wochen vorher", "Sprechen üben",
     "Lerngruppe gründen: zwei- bis dreimal pro Woche Frage-Antwort-Runden, jede Antwort laut. Ab jetzt jede Woche "
     "mindestens einen Kurzvortrag unter echten Bedingungen halten: 30 Minuten Vorbereitung, 10 Minuten Vortrag."),
    ("4–2 Wochen vorher", "Simulieren und aktualisieren",
     "Mindestens drei komplette Prüfungssimulationen, wenn möglich mit fremden Prüfern. Neuerungen der letzten zwei Jahre "
     "(Gesetze, BMF-Schreiben, BFH-Urteile) als Liste führen. Gesetzestexte auf den aktuellen Stand bringen."),
    ("letzte Woche", "Festigen statt Neues",
     "Keine neuen Themen mehr. Schemata, Definitionen und Neuerungen wiederholen. Anreise planen, Unterlagen und Kleidung bereitlegen."),
    ("Tag davor", "Abschalten",
     "Höchstens zwei Stunden locker wiederholen, dann bewusst Pause. Früh schlafen – ausgeruht denkst du klarer als nach einer Lernnacht."),
]

TIPPS_LERNEN = [
    ("Abrufen statt Wiederlesen",
     "Wiederholtes Lesen fühlt sich produktiv an, bringt aber wenig. Viel wirksamer ist es, Wissen aktiv aus dem Gedächtnis "
     "abzurufen – Lernforscher sprechen vom Testeffekt. Decke das Skript ab, beantworte Fragen aus dem Kopf und prüfe erst dann.",
     "Statt eines Kapitels zu § 6b EStG: fünf Fragen dazu notieren und morgen aus dem Kopf beantworten."),
    ("Verteilt wiederholen",
     "Wiederhole ein Thema in wachsenden Abständen – etwa nach 1, 3, 7 und 14 Tagen. Jede Wiederholung kurz vor dem "
     "Vergessen festigt das Wissen stärker als ein langer Lernblock. Karteikarten oder eine App nehmen dir die Planung ab.",
     "Montag GbR-Haftung lernen, Dienstag, Freitag und übernächsten Montag je 10 Minuten wiederholen."),
    ("Themen mischen",
     "Die Prüfer springen zwischen Gebieten. Übe deshalb gemischt statt in langen Blöcken: Zivilrecht, AO und "
     "Ertragsteuern im Wechsel. Das ist anstrengender, trainiert aber genau das, was in der Prüfung verlangt wird: "
     "schnell erkennen, worum es geht.",
     "Eine Lerneinheit: 20 Min. Kaufrecht, 20 Min. Einspruchsverfahren, 20 Min. Betriebsaufspaltung."),
    ("Laut erklären können",
     "In der Mündlichen zählt, was du sagst. Erkläre jedes Thema laut, als würdest du es einem Mandanten erklären. "
     "Wo du ins Stocken gerätst, liegt deine Lücke. Plane außerdem Pausen und ausreichend Schlaf ein – im Schlaf wird "
     "Gelerntes gefestigt.",
     "Antwort auf dem Handy aufnehmen und anhören: Ist das Ergebnis im ersten Satz? Fällt eine Norm?"),
]

TIPPS_INHALT = [
    ("BGB-Grundlagen sicher beherrschen",
     "Willenserklärung und Zugang, Vertragsschluss, Geschäftsfähigkeit, Stellvertretung, Anfechtung – das ist das Fundament "
     "für fast jede zivilrechtliche Frage. Dazu Kaufrecht und Leistungsstörungen, Übereignung beweglicher Sachen und "
     "Grundstücke sowie die gesetzliche und gewillkürte Erbfolge."),
    ("Gesellschaftsrecht nach dem MoPeG",
     "Seit 2024 ist die GbR rechtsfähig, es gibt das Gesellschaftsregister und die eGbR, die Haftung steht in § 721 BGB. "
     "Dazu Kaufmannsbegriff und Prokura im HGB, Gründung und Haftung bei der GmbH sowie Grundzüge des Umwandlungsrechts. "
     "Prüfer lieben die Verbindung zur Besteuerung von Personengesellschaften."),
    ("AO als juristisches Werkzeug",
     "Die AO ist Verfahrensrecht – und wird juristisch geprüft: Bekanntgabe von Verwaltungsakten (§ 122 AO), Fristen "
     "(§ 108 AO), Einspruch (§§ 347 ff. AO), Korrekturvorschriften (§§ 129, 164, 172 ff. AO), Festsetzungsverjährung. "
     "Hier zählen saubere Normketten mehr als Zahlen."),
    ("Zivilrecht und Steuerrecht verknüpfen",
     "Viele steuerliche Fragen haben eine zivilrechtliche Vorfrage: Wer ist Eigentümer (§ 39 AO)? Ist der Vertrag "
     "wirksam (§ 41 AO)? Wer ist Erbe? Wer diese Brücke von sich aus schlägt, zeigt Verständnis statt auswendig gelernter Fakten."),
]

HINTERGRUND = [
    "Der Prüfungsausschuss besteht aus sechs Mitgliedern: drei Beamten des höheren Dienstes oder vergleichbaren "
    "Angestellten der Finanzverwaltung (einer führt den Vorsitz) und drei Steuerberatern bzw. Vertretern der "
    "Wirtschaft (§ 35 Abs. 2 StBerG).",
    "Den höheren Dienst der Finanzverwaltung bilden überwiegend Volljuristinnen und Volljuristen. Sie haben das "
    "juristische Arbeiten im Studium und Referendariat von Grund auf gelernt – und hören sofort, ob jemand "
    "methodisch sauber argumentiert.",
    "Zu den Prüfungsgebieten gehören neben dem Steuerrecht ausdrücklich Bürgerliches Recht, Handels-, "
    "Gesellschafts- und Insolvenzrecht, Europarecht, Verfahrensrecht und Berufsrecht (§ 37 Abs. 3 StBerG).",
    "Auch steuerliche Fragen werden oft juristisch gestellt: Wie legen Sie die Norm aus? Welche Vorschrift ist "
    "spezieller? Was gilt zivilrechtlich – und folgt das Steuerrecht dem? Wer hier methodisch antwortet, punktet in jeder Runde.",
]

HANDWERK = [
    ("Die Fallfrage: Wer will was von wem woraus?",
     "Bei jedem Zivilrechtsfall zuerst klären, wer etwas von wem verlangt – und dann die Anspruchsgrundlage suchen. "
     "Bewährte Prüfungsreihenfolge: vertragliche Ansprüche, vertragsähnliche, dingliche, deliktische und zuletzt "
     "bereicherungsrechtliche Ansprüche. So übersiehst du nichts und behältst die Ordnung.",
     "„A könnte gegen B einen Anspruch auf Zahlung von 5.000 € aus § 433 Abs. 2 BGB haben.“"),
    ("Tatbestand – Subsumtion – Rechtsfolge",
     "Jede Norm hat Voraussetzungen (Tatbestand) und eine Rechtsfolge. Du prüfst die Merkmale nacheinander, "
     "definierst sie und ordnest den Sachverhalt zu (Subsumtion). Erst wenn alle Merkmale erfüllt sind, tritt die "
     "Rechtsfolge ein. Unproblematisches stellst du kurz fest, beim Problem verweilst du.",
     "„Gewerbebetrieb setzt Selbständigkeit, Nachhaltigkeit, Gewinnerzielungsabsicht und Teilnahme am allgemeinen "
     "wirtschaftlichen Verkehr voraus, § 15 Abs. 2 EStG. Fraglich ist hier nur …“"),
    ("Gutachtenstil und Urteilsstil",
     "In der Klausur schreibst du im Gutachtenstil: Obersatz („könnte“), Definition, Subsumtion, Ergebnis. Im Gespräch "
     "wirkt das schnell umständlich. Besser ist der Urteilsstil: Ergebnis zuerst, dann die tragende Begründung mit Norm. "
     "Nur bei echten Streitfragen wägst du gutachterlich ab – und kündigst das kurz an.",
     "„Die Gesellschafter haften persönlich, weil § 721 BGB seit dem MoPeG die Haftung für Verbindlichkeiten der GbR anordnet.“"),
    ("Die vier Auslegungsmethoden",
     "Ist eine Norm unklar, wird sie ausgelegt: nach dem Wortlaut, nach der Systematik (Stellung und Zusammenhang im Gesetz), "
     "nach der Entstehungsgeschichte und nach Sinn und Zweck. Im Steuerrecht kommt die wirtschaftliche Betrachtungsweise "
     "hinzu. Wer diese Schritte nennen kann, hat auf jede „Wie sehen Sie das?“-Frage eine Struktur.",
     "„Nach dem Wortlaut spricht viel für …, nach Sinn und Zweck der Vorschrift aber …“"),
    ("Normen präzise zitieren",
     "Paragraf, Absatz, Satz, Nummer, Gesetz – in dieser Reihenfolge. Verweise im Gesetz mitlesen und Legaldefinitionen "
     "kennen: Verbraucher (§ 13 BGB), Unternehmer (§ 14 BGB), Kaufmann (§ 1 HGB), Steuerpflichtiger (§ 33 AO), "
     "Verwaltungsakt (§ 118 AO). Übe, Normen schnell aufzuschlagen – in der Prüfung darfst du ins Gesetz schauen.",
     "„§ 8b Abs. 2 Satz 1 KStG“ statt „irgendwo im 8b“"),
    ("Spezialität und Rangfolge",
     "Das speziellere Gesetz geht dem allgemeinen vor (lex specialis), das höherrangige dem niederrangigen, das jüngere "
     "dem älteren. Typisch: HGB vor BGB, Einzelsteuergesetz vor AO, Doppelbesteuerungsabkommen vor nationalem Recht, "
     "EU-Recht im Anwendungsvorrang.",
     "„Als Kaufmann gilt für A § 377 HGB – er muss den Mangel unverzüglich rügen, anders als im BGB.“"),
]

FALL_SV = ("V bietet K am Montag schriftlich eine gebrauchte Maschine für 10.000 € an und schreibt: „An mein Angebot halte "
           "ich mich bis Freitag gebunden.“ K schreibt eine Annahme und wirft sie am Freitag um 23 Uhr in den Briefkasten "
           "von Vs Geschäftsräumen. V liest den Brief am Montag – inzwischen hat er die Maschine teurer an D verkauft. "
           "K verlangt die Maschine von V.")
FALL_SCHRITTE = [
    ("Fallfrage und Anspruchsgrundlage",
     "K könnte gegen V einen Anspruch auf Übergabe und Übereignung der Maschine aus § 433 Abs. 1 Satz 1 BGB haben. "
     "Dafür muss ein Kaufvertrag zustande gekommen sein – also zwei übereinstimmende Willenserklärungen: Angebot und Annahme (§§ 145 ff. BGB)."),
    ("Angebot des V",
     "Vs Schreiben ist ein Angebot mit allen wesentlichen Punkten (Kaufsache, Preis). Es ist K zugegangen. "
     "V hat eine Annahmefrist bis Freitag gesetzt (§ 148 BGB): Die Annahme muss V bis dahin zugehen."),
    ("Annahme des K – Zugang",
     "Eine Willenserklärung unter Abwesenden wird wirksam, wenn sie zugeht (§ 130 Abs. 1 Satz 1 BGB). Zugegangen ist sie, "
     "wenn sie so in den Machtbereich des Empfängers gelangt ist, dass er unter gewöhnlichen Umständen von ihr Kenntnis "
     "nehmen kann. Mit dem Einwurf ist der Brief in Vs Machtbereich. Bei einem Geschäftsbriefkasten ist um 23 Uhr am "
     "Freitag aber nicht mehr mit einer Leerung zu rechnen – erst am nächsten Geschäftstag. Die Annahme geht V daher "
     "erst am Montag zu, also nach Fristablauf."),
    ("Rechtsfolge",
     "Das Angebot ist mit Fristablauf erloschen (§ 146 BGB). Die verspätete Annahme gilt als neues Angebot (§ 150 Abs. 1 BGB), "
     "das V nicht angenommen hat. Ein Fall des § 149 BGB liegt nicht vor: Der Brief wurde nicht rechtzeitig abgesendet."),
    ("Ergebnis",
     "Ein Kaufvertrag ist nicht zustande gekommen. K hat keinen Anspruch aus § 433 Abs. 1 Satz 1 BGB."),
]
FALL_MUENDLICH = ("„K hat keinen Anspruch aus § 433 Abs. 1 BGB, weil kein Kaufvertrag zustande gekommen ist. Die Annahme ist "
                  "V erst am Montag zugegangen – bei einem Einwurf in den Geschäftsbriefkasten am Freitagabend ist erst am "
                  "nächsten Geschäftstag mit Kenntnisnahme zu rechnen, § 130 Abs. 1 BGB. Damit war die Frist des § 148 BGB "
                  "abgelaufen und das Angebot nach § 146 BGB erloschen.“")
FALL_ANSCHLUSS = ("Typische Anschlussfrage: „Und wie ist das bei einem Steuerbescheid?“ – Hier gilt nicht § 130 BGB, sondern "
                  "die Bekanntgabefiktion des § 122 Abs. 2 Nr. 1 AO: Ein per Post übermittelter Verwaltungsakt gilt am vierten "
                  "Tag nach Aufgabe zur Post als bekanntgegeben (für Bescheide, die nach dem 31.12.2024 zur Post gegeben "
                  "wurden; vorher am dritten Tag). Ab dann läuft die Einspruchsfrist von einem Monat (§ 355 Abs. 1 AO). "
                  "Fällt das Fristende auf ein Wochenende oder einen Feiertag, endet sie am nächsten Werktag (§ 108 Abs. 3 AO).")

# ------------------------------------------------------------------ Grundfunktionen
c = canvas.Canvas(os.path.join(OUT, "vorbereitung-muendliche.pdf"), pagesize=A4)
c.setTitle("Vorbereitung auf die Mündliche: Zeitplan, Lerntipps und juristisches Handwerkszeug")
c.setAuthor("examenscampus")
seite = [0]


def neue_seite():
    if seite[0]:
        c.showPage()
    seite[0] += 1
    c.setFillColor(PAPER); c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFont("N-Black", 10); c.setFillColor(INK); c.drawString(M, H - 34, "examens")
    c.setFillColor(LILA); c.drawString(M + c.stringWidth("examens", "N-Black", 10), H - 34, "campus")
    if seite[0] > 1:
        c.setFont("N-Regular", 8.5); c.setFillColor(GRAU)
        c.drawRightString(W - M, H - 34, KOPF)
        c.drawCentredString(W / 2, 26, str(seite[0]))


def absatz(text, x, y, breite, font="N-Regular", groesse=10.5, farbe=GRAU, zeile=None):
    zeile = zeile or groesse * 1.42
    c.setFont(font, groesse); c.setFillColor(farbe)
    for z in simpleSplit(text, font, groesse, breite):
        c.drawString(x, y, z); y -= zeile
    return y


def hoehe(text, breite, font="N-Regular", groesse=10.5, zeile=None):
    return len(simpleSplit(text, font, groesse, breite)) * (zeile or groesse * 1.42)


def karte(x, y, w, h, fill=white, schatten=True, r=12):
    c.setStrokeColor(INK); c.setLineWidth(2)
    if schatten:
        c.setFillColor(INK); c.roundRect(x + 4, y - h - 4, w, h, r, fill=1, stroke=0)
    c.setFillColor(fill); c.roundRect(x, y - h, w, h, r, fill=1, stroke=1)


def marker(text, x, y, font, groesse, farbe=GELB):
    w = c.stringWidth(text, font, groesse)
    c.setFillColor(farbe); c.rect(x - 3, y - groesse * 0.18, w + 6, groesse * 0.5, fill=1, stroke=0)
    c.setFillColor(INK); c.setFont(font, groesse); c.drawString(x, y, text)
    return w


def ueberschrift(text, y, hand=None):
    if hand:
        c.setFont("Hand", 19); c.setFillColor(ORANGE); c.drawString(M, y + 24, hand)
    c.setFont("N-Black", 25); c.setFillColor(INK); c.drawString(M, y, text)
    return y - 26


def bild(pfad, x, y, h=None, w=None):
    img = ImageReader(pfad); iw, ih = img.getSize()
    if h is None:
        h = w * ih / iw
    w = h * iw / ih
    c.drawImage(img, x, y, width=w, height=h, mask="auto")
    return w, h



def platz(y, h, oben=H - 80):
    """Neue Seite, wenn h nicht mehr passt. Gibt das (ggf. neue) y zurück."""
    if y - h < UNTEN:
        neue_seite()
        return oben
    return y


def merke(text, y, groesse=21):
    mh = hoehe(text, B - 40, "Hand", groesse, groesse + 4) + 26
    y = platz(y, mh)
    c.setFillColor(GELB); c.setStrokeColor(INK); c.setLineWidth(2)
    c.roundRect(M, y - mh, B, mh, 12, fill=1, stroke=1)
    absatz(text, M + 20, y - 30, B - 40, "Hand", groesse, INK, groesse + 4)
    return y - mh - 16


def beispiel_box(label, text, x, y, w, farbe=HELLGRUEN, labelfarbe=GRUEN_TEXT, font="N-Bold", gr=10, zl=14):
    """y = Oberkante. Gibt Unterkante zurück."""
    bh = hoehe(text, w - 24, font, gr, zl) + 30
    c.setFillColor(farbe); c.roundRect(x, y - bh, w, bh, 8, fill=1, stroke=0)
    c.setFont("N-Black", 7.5); c.setFillColor(labelfarbe); c.drawString(x + 12, y - 14, label)
    absatz(text, x + 12, y - 28, w - 24, font, gr, INK, zl)
    return y - bh


def nummer(n, x, y, farbe=ORANGE, r=12):
    c.setFillColor(farbe); c.setStrokeColor(INK); c.setLineWidth(2); c.circle(x, y, r, fill=1, stroke=1)
    c.setFillColor(white); c.setFont("N-Black", 11); c.drawCentredString(x, y - 4, str(n))


def tipp_karte(n, titel, text, bsp, y, farbe):
    ht = hoehe(text, B - 40, groesse=10.5, zeile=15)
    hb = (hoehe(bsp, B - 64, "N-Bold", 10, 14) + 30 + 6) if bsp else 0
    kh = 44 + ht + hb + 8
    y = platz(y, kh + 4)
    karte(M, y, B, kh)
    nummer(n, M + 26, y - 22, farbe)
    c.setFillColor(INK); c.setFont("N-Black", 13); c.drawString(M + 48, y - 26, titel)
    yy = absatz(text, M + 20, y - 44, B - 40, groesse=10.5, zeile=15)
    if bsp:
        beispiel_box("SO KANN DAS AUSSEHEN" if farbe != LILA else "SO KLINGT ES", bsp, M + 20, yy - 2, B - 40)
    return y - kh - 14


# ------------------------------------------------------------------ 1 Titel
neue_seite()
c.setFont("Hand", 24); c.setFillColor(ORANGE); c.drawString(M, H - 112, "Gratis-Leitfaden für deine Mündliche")
y = H - 160
c.setFont("N-Black", 40); c.setFillColor(INK); c.drawString(M, y, "So bereitest du")
c.drawString(M, y - 48, "dich auf die")
marker("Mündliche", M, y - 96, "N-Black", 40)
c.setFillColor(INK); c.drawString(M + c.stringWidth("Mündliche ", "N-Black", 40), y - 96, "vor")
y = absatz("Warum du jetzt starten solltest, dein Zeitplan, acht Tipps zum Lernen und zum Inhalt – "
           "und das juristische Handwerkszeug, auf das die Prüfer achten. Mit Beispielfall.",
           M, y - 134, 360, groesse=13, zeile=19)
inhalt = [("Jetzt starten – dein Zeitplan", LILA), ("8 Tipps für die Vorbereitung", ORANGE),
          ("Warum Juristisches so wichtig ist", GRUEN), ("Das juristische Handwerkszeug", LILA),
          ("Beispielfall: Zugang einer Willenserklärung", ORANGE)]
y -= 26
karte(M, y, 330, 32 * len(inhalt) + 26)
yy = y - 30
for nr, (txt, farbe) in enumerate(inhalt, start=1):
    nummer(nr, M + 30, yy + 4, farbe)
    c.setFillColor(INK); c.setFont("N-Black", 12.5); c.drawString(M + 52, yy, txt)
    yy -= 32
held = os.path.join(OUT, "held.webp")
if os.path.exists(held):
    bild(held, W - M - 150, 40, h=270)

# ------------------------------------------------------------------ Jetzt starten + Zeitplan
neue_seite()
y = ueberschrift("Warum du jetzt starten solltest", H - 100, "Teil 1 · Je früher, desto entspannter") - 14
y = absatz("Die Schriftliche ist geschrieben – und viele gönnen sich erst einmal eine lange Pause. Verständlich. "
           "Aber wer jetzt mit der Vorbereitung auf die Mündliche beginnt, hat einen echten Vorsprung:",
           M, y, B, groesse=11.5, zeile=17) - 12
for i, (titel, text) in enumerate(JETZT):
    h = hoehe(text, B - 60, groesse=10.5, zeile=15.5) + 40
    karte(M, y, B, h, fill=HELLLILA if i % 2 == 0 else white, schatten=False)
    c.setFillColor(LILA); c.setFont("N-Black", 18); c.drawString(M + 16, y - 27, "!")
    c.setFillColor(INK); c.setFont("N-Black", 12.5); c.drawString(M + 40, y - 24, titel)
    absatz(text, M + 40, y - 42, B - 60, groesse=10.5, zeile=15.5)
    y -= h + 12
y -= 4
y = merke("Schon 30 bis 60 Minuten am Tag reichen für den Anfang – entscheidend ist, dass du jetzt regelmäßig dranbleibst.", y)

neue_seite()
y = ueberschrift("Dein Zeitplan", H - 100, "Rückwärts vom Prüfungstermin gerechnet") - 16
for i, (zeit, titel, text) in enumerate(ZEITPLAN):
    h = 32 + hoehe(text, B - 60, groesse=10.5, zeile=15.5)
    nummer(i + 1, M + 14, y - 12, [LILA, ORANGE, GRUEN][i % 3], 13)
    if i < len(ZEITPLAN) - 1:
        c.setStrokeColor(INK); c.setDash(2, 3); c.line(M + 14, y - 26, M + 14, y - h - 6); c.setDash()
    c.setFont("N-Black", 13); c.setFillColor(INK); c.drawString(M + 40, y - 16, titel)
    c.setFont("N-Bold", 10); c.setFillColor(LILA); c.drawRightString(W - M, y - 16, zeit)
    absatz(text, M + 40, y - 34, B - 60, groesse=10.5, zeile=15.5)
    y -= h + 16
y -= 4
y = merke("Faustregel: 70 % Wiederholen und Sprechen, 30 % neuer Stoff.", y)

# ------------------------------------------------------------------ Tipps
neue_seite()
y = ueberschrift("8 Tipps für die Vorbereitung", H - 100, "Teil 2 · Wie du lernst und was du lernst") - 12
c.setFont("N-Black", 10); c.setFillColor(ORANGE); c.drawString(M, y, "SO LERNST DU WIRKSAM – TIPPS AUS DER LERNFORSCHUNG")
y -= 16
for n, (titel, text, bsp) in enumerate(TIPPS_LERNEN, start=1):
    y = tipp_karte(n, titel, text, bsp, y, ORANGE)
WOCHE = [("Mo", "60 Min. Zivilrecht (neu) · 15 Min. Karteikarten"),
         ("Di", "60 Min. AO (neu) · 15 Min. Wiederholung Montag"),
         ("Mi", "45 Min. gemischte Fragen laut beantworten · 1 Kurzvortrag"),
         ("Do", "60 Min. Gesellschaftsrecht (neu) · 15 Min. Karteikarten"),
         ("Fr", "60 Min. Ertragsteuern mit zivilrechtlicher Vorfrage · Wiederholung"),
         ("Sa", "Lerngruppe: 90 Min. Frage-Antwort-Runde"),
         ("So", "frei – Pause gehört zum Lernen")]
kh = 52 + len(WOCHE) * 22
y = platz(y, kh)
karte(M, y, B, kh, fill=HELLLILA)
c.setFont("N-Black", 13); c.setFillColor(INK); c.drawString(M + 20, y - 28, "So kann eine Lernwoche aussehen")
yy = y - 52
for tag, txt in WOCHE:
    c.setFillColor(LILA); c.roundRect(M + 20, yy - 5, 30, 17, 8, fill=1, stroke=0)
    c.setFillColor(white); c.setFont("N-Black", 9); c.drawCentredString(M + 35, yy, tag)
    c.setFillColor(INK); c.setFont("N-Regular", 10.5); c.drawString(M + 62, yy, txt)
    yy -= 22
y -= kh + 18
y = merke("Lernen fühlt sich wirksam an, wenn es leicht ist. Wirksam ist es, wenn es ein bisschen anstrengt.", y)

neue_seite()
y = ueberschrift("Worauf es inhaltlich ankommt", H - 100, "Teil 2 · Die Tipps 5 bis 8") - 14
y = absatz("Die Prüfung deckt viele Gebiete ab. Steuerrecht bringst du aus der Schriftlichen mit – diese "
           "Bereiche entscheiden in der Mündlichen oft darüber, ob eine Runde gut läuft:", M, y, B, groesse=11.5, zeile=17) - 14
for n, (titel, text) in enumerate(TIPPS_INHALT, start=5):
    y = tipp_karte(n, titel, text, None, y, GRUEN)
y -= 4
y = merke("Steuerrecht kannst du schon. Mit sicherem Zivilrecht und sauberer Methodik holst du die Punkte, die anderen fehlen.", y)

# ------------------------------------------------------------------ Hintergrund
neue_seite()
y = ueberschrift("Warum Juristisches so wichtig ist", H - 100, "Teil 3 · Wer dir gegenübersitzt")
y -= 14
y = absatz("Viele Prüflinge bereiten sich fast nur auf das Steuerrecht vor – und werden dann von Fragen zu BGB, HGB "
           "oder Methodik überrascht. Dafür gibt es klare Gründe:", M, y, B, groesse=11.5, zeile=17) - 14
for i, t in enumerate(HINTERGRUND):
    h = hoehe(t, B - 60, groesse=11, zeile=16) + 26
    karte(M, y, B, h, fill=HELLLILA if i % 2 == 0 else white, schatten=False)
    c.setFillColor(LILA); c.setFont("N-Black", 15); c.drawString(M + 16, y - 24, str(i + 1))
    absatz(t, M + 40, y - 20, B - 60, groesse=11, farbe=INK, zeile=16)
    y -= h + 12
y -= 8
y = absatz("Was heißt das für dich? Juristisches Arbeiten folgt festen Regeln – und die lassen sich lernen. "
           "Auf den nächsten Seiten findest du die sechs wichtigsten Werkzeuge und einen Beispielfall, an dem du "
           "siehst, wie sie zusammenspielen.", M, y, B, groesse=11.5, zeile=17) - 16
y = merke("Die Prüfer erwarten keine Juristen. Sie erwarten, dass du wie einer denkst: Norm suchen, "
          "Voraussetzungen prüfen, Ergebnis begründen.", y)

# ------------------------------------------------------------------ Handwerkszeug
neue_seite()
y = ueberschrift("Das juristische Handwerkszeug", H - 100, "Teil 4 · Sechs Werkzeuge für jede Runde") - 16
for n, (titel, text, bsp) in enumerate(HANDWERK, start=1):
    y = tipp_karte(n, titel, text, bsp, y, LILA)

# ------------------------------------------------------------------ Beispielfall
neue_seite()
y = ueberschrift("Beispielfall: Zu spät angenommen?", H - 100, "Teil 5 · So löst du einen Fall juristisch") - 16
sv_h = hoehe(FALL_SV, B - 40, groesse=11, zeile=16) + 40
karte(M, y, B, sv_h, fill=HELLLILA)
c.setFont("N-Black", 9); c.setFillColor(LILA); c.drawString(M + 20, y - 20, "SACHVERHALT")
absatz(FALL_SV, M + 20, y - 38, B - 40, groesse=11, farbe=INK, zeile=16)
y -= sv_h + 22
c.setFont("N-Black", 9); c.setFillColor(ORANGE); c.drawString(M, y, "LÖSUNG IM GUTACHTENSTIL – SCHRITT FÜR SCHRITT")
y -= 14
for n, (titel, text) in enumerate(FALL_SCHRITTE, start=1):
    h = hoehe(text, B - 50, groesse=10.5, zeile=15.5) + 30
    y = platz(y, h)
    nummer(n, M + 12, y - 12, ORANGE if n < len(FALL_SCHRITTE) else GRUEN, 11)
    c.setFont("N-Black", 12); c.setFillColor(INK); c.drawString(M + 32, y - 16, titel)
    absatz(text, M + 32, y - 33, B - 50, groesse=10.5, zeile=15.5)
    y -= h + 6
y -= 8
hb = hoehe(FALL_MUENDLICH, B - 24, "N-Bold", 10.5, 15) + 30
y = platz(y, hb)
y = beispiel_box("SO KLINGT DIE LÖSUNG IN DER MÜNDLICHEN (URTEILSSTIL)", FALL_MUENDLICH, M, y, B, gr=10.5, zl=15) - 16
ha = hoehe(FALL_ANSCHLUSS, B - 24, "N-Regular", 10.5, 15) + 30
y = platz(y, ha)
y = beispiel_box("UND JETZT DAS STEUERRECHT", FALL_ANSCHLUSS, M, y, B, farbe=HexColor("#fff0e8"),
                 labelfarbe=ORANGE, font="N-Regular", gr=10.5, zl=15) - 16
y = merke("Genau so denken Prüfer: vom Zivilrecht zur AO – mit denselben Werkzeugen.", y, 20)

# ------------------------------------------------------------------ Schluss
neue_seite()
y = ueberschrift("Du schaffst das.", H - 160, "Zum Schluss")
y = absatz("Fang jetzt an – mit kleinen, regelmäßigen Einheiten. Lerne aktiv statt passiv, wiederhole verteilt "
           "und sprich so viel wie möglich laut.", M, y - 10, 290, groesse=12.5, zeile=18)
y = absatz("Nimm das Zivilrecht ernst und arbeite mit dem juristischen Handwerkszeug: Fallfrage, Norm, "
           "Voraussetzungen, Ergebnis. Dann gehst du deutlich ruhiger in die Prüfung.",
           M, y - 14, 290, groesse=12.5, zeile=18)
y = absatz("Die meisten Kommissionen prüfen auf Bestehen – zeig ihnen, wie du denkst.",
           M, y - 14, 290, "N-Bold", 12.5, INK, 18)
c.setFont("Hand", 26); c.setFillColor(LILA); c.drawString(M, y - 40, "Viel Erfolg! Dein examenscampus")
if os.path.exists(os.path.join(OUT, "jubel.webp")):
    bild(os.path.join(OUT, "jubel.webp"), W - M - 200, 90, h=420)
c.showPage()
c.save()
print("ok", seite[0], "Seiten")
