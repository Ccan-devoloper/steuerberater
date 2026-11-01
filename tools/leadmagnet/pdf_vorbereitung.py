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
ZEITPLAN = [
    ("12–9 Wochen vorher", "Fundament legen",
     "Prüfungsgebiete aus § 37 Abs. 3 StBerG auflisten und ehrlich einschätzen: sicher, wackelig, Lücke. "
     "Lücken zuerst schließen, vor allem Zivil- und Gesellschaftsrecht, AO und Ertragsteuern. "
     "Je Gebiet ein Prüfschema auf einer Seite erarbeiten."),
    ("8–5 Wochen vorher", "Protokolle und Sprechen",
     "Protokolle deines Prüfungsorts durcharbeiten, Fragen sammeln und laut beantworten. "
     "Lerngruppe gründen: zweimal pro Woche 60–90 Minuten Frage-Antwort-Runden. "
     "Ab jetzt jede Woche mindestens einen Kurzvortrag halten."),
    ("4–2 Wochen vorher", "Simulieren und Neuerungen",
     "Mindestens drei komplette Prüfungssimulationen mit fremden Prüfern. Liste mit Neuerungen der "
     "letzten zwei Jahre (Gesetze, BMF-Schreiben, BFH-Urteile) führen und wiederholen. "
     "Protokolle deiner Kommission gezielt nacharbeiten, sobald du sie kennst."),
    ("Letzte Woche", "Festigen statt Neues",
     "Keine neuen Themen mehr. Schemata, Definitionen und Neuerungen wiederholen. Gesetzestexte "
     "auf den aktuellen Stand bringen, Anreise planen, Kleidung bereitlegen."),
    ("Tag davor", "Abschalten",
     "Höchstens zwei Stunden locker wiederholen, dann bewusst Pause. Früh schlafen – ausgeruht "
     "denkst du in der Prüfung klarer als mit einer zusätzlichen Lernnacht."),
]

TIPPS = [
    ("Laut lernen statt lesen",
     "Die Mündliche prüft, ob du Wissen in Sätze bringst. Formuliere jede Antwort laut – allein, mit Lernpartner oder als Sprachnachricht."),
    ("Ergebnis zuerst",
     "Erst die Antwort in einem Satz, dann die Begründung mit Norm. So bekommt der Prüfer sofort, was er hören will."),
    ("Normen nennen",
     "„Nach § 15 Abs. 1 Satz 1 Nr. 2 EStG …“ wirkt souverän und zeigt, dass du mit dem Gesetz arbeitest. Übe gezieltes Aufschlagen."),
    ("Protokolle sind Gold",
     "Viele Prüfer haben Lieblingsthemen. Wer die Protokolle seiner Kommission kennt, ist auf einen großen Teil der Fragen vorbereitet."),
    ("Mitdenken in fremden Runden",
     "Fragen gehen weiter, wenn jemand nicht antwortet. Bleib in jeder Runde gedanklich dabei und antworte innerlich mit."),
    ("Nicht wissen ist erlaubt",
     "„Das weiß ich nicht sicher, ich würde so argumentieren …“ ist besser als Raten oder Schweigen. Prüfer belohnen nachvollziehbares Denken."),
    ("Kurzvortrag mit festem Gerüst",
     "Einleitung mit Bedeutung des Themas, drei Hauptpunkte, kurzes Fazit. Das Gerüst steht vorher – in der Prüfung füllst du nur noch Inhalte ein."),
    ("Schwache Runde abhaken",
     "Jede Runde wird einzeln bewertet. Eine schwache Runde kostet selten das Bestehen – Grübeln in der nächsten schon."),
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
    "In unserer Auswertung von über 400 Protokollen kam Zivil- und Gesellschaftsrecht in 98 % der Prüfungen vor, "
    "AO/FGO in 96 %. Auch steuerliche Fragen werden oft juristisch gestellt: Wie legen Sie die Norm aus? "
    "Welche Vorschrift ist spezieller?",
]

HANDWERK = [
    ("Die Fallfrage: Wer will was von wem woraus?",
     "Bei jedem Zivilrechtsfall zuerst klären, wer etwas von wem verlangt – und dann die Anspruchsgrundlage suchen. "
     "Reihenfolge der Prüfung: vertragliche vor vertragsähnlichen, dann dingliche, deliktische und bereicherungsrechtliche Ansprüche.",
     "„A könnte gegen B einen Anspruch auf Zahlung von 5.000 € aus § 433 Abs. 2 BGB haben.“"),
    ("Tatbestand – Subsumtion – Rechtsfolge",
     "Jede Norm hat Voraussetzungen (Tatbestand) und eine Rechtsfolge. Du prüfst die Merkmale nacheinander, "
     "definierst sie und ordnest den Sachverhalt zu (Subsumtion). Erst wenn alle Merkmale erfüllt sind, tritt die Rechtsfolge ein.",
     "„Gewerbebetrieb setzt Selbständigkeit, Nachhaltigkeit, Gewinnerzielungsabsicht und Teilnahme am allgemeinen "
     "wirtschaftlichen Verkehr voraus, § 15 Abs. 2 EStG. Hier …“"),
    ("Urteilsstil in der Mündlichen",
     "In der Klausur schreibst du im Gutachtenstil (Obersatz, Definition, Subsumtion, Ergebnis). Im Gespräch wirkt "
     "das schnell umständlich. Besser: Ergebnis zuerst, dann die tragende Begründung. Nur bei echten Streitfragen gutachterlich abwägen.",
     "„Die Gesellschafter haften persönlich, weil § 721 BGB seit dem MoPeG die Haftung für Verbindlichkeiten der GbR anordnet.“"),
    ("Die vier Auslegungsmethoden",
     "Ist eine Norm unklar, wird sie ausgelegt: nach dem Wortlaut, der Systematik (Stellung im Gesetz), der Entstehungsgeschichte "
     "und dem Sinn und Zweck. Wer diese vier Schritte nennen kann, glänzt bei jeder „Wie sehen Sie das?“-Frage.",
     "„Nach dem Wortlaut spricht viel für …, nach Sinn und Zweck der Vorschrift aber …“"),
    ("Normen präzise zitieren",
     "Paragraf, Absatz, Satz, Nummer, Gesetz – in dieser Reihenfolge. Verweise im Gesetz mitlesen und Legaldefinitionen "
     "kennen (z. B. Unternehmer, § 14 BGB; Kaufmann, § 1 HGB; Steuerpflichtiger, § 33 AO).",
     "„§ 8b Abs. 2 Satz 1 KStG“ statt „irgendwo im 8b“"),
    ("Spezialität und Rangfolge",
     "Das speziellere Gesetz geht dem allgemeinen vor (lex specialis), das höherrangige dem niederrangigen. "
     "Typisch: HGB vor BGB, Einzelsteuergesetz vor AO, EU-Recht vor nationalem Recht.",
     "„Als Kaufmann gilt für A § 377 HGB – die Rüge muss unverzüglich erfolgen, anders als im BGB.“"),
]


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


# ------------------------------------------------------------------ 1 Titel
neue_seite()
c.setFont("Hand", 24); c.setFillColor(ORANGE); c.drawString(M, H - 112, "Gratis-Leitfaden Teil 2")
y = H - 160
c.setFont("N-Black", 40); c.setFillColor(INK); c.drawString(M, y, "So bereitest du")
c.drawString(M, y - 48, "dich auf die")
marker("Mündliche", M, y - 96, "N-Black", 40)
c.setFillColor(INK); c.drawString(M + c.stringWidth("Mündliche ", "N-Black", 40), y - 96, "vor")
y = absatz("Zeitplan für die letzten 12 Wochen, acht Lerntipps aus über 400 Prüfungsprotokollen "
           "und das juristische Handwerkszeug, auf das die Prüfer achten.",
           M, y - 134, 360, groesse=13, zeile=19)
inhalt = [("1", "Dein Zeitplan", LILA), ("2", "8 Tipps für die Vorbereitung", ORANGE),
          ("3", "Warum Juristisches so wichtig ist", GRUEN), ("4", "Das juristische Handwerkszeug", LILA)]
y -= 26
karte(M, y, B, 34 * len(inhalt) + 30)
yy = y - 30
for nr, txt, farbe in inhalt:
    c.setFillColor(farbe); c.setStrokeColor(INK); c.setLineWidth(2); c.circle(M + 34, yy + 4, 12, fill=1, stroke=1)
    c.setFillColor(white); c.setFont("N-Black", 11); c.drawCentredString(M + 34, yy, nr)
    c.setFillColor(INK); c.setFont("N-Black", 14); c.drawString(M + 58, yy, txt)
    yy -= 34
held = os.path.join(OUT, "held.webp")
if os.path.exists(held):
    bild(held, W - M - 150, 40, h=250)

# ------------------------------------------------------------------ 2 Zeitplan
neue_seite()
y = ueberschrift("Dein Zeitplan", H - 100, "Teil 1 · Die letzten 12 Wochen") - 10
y = absatz("Starte spätestens, wenn das Ergebnis der schriftlichen Prüfung da ist. Rechne vom Prüfungstermin "
           "rückwärts – so sieht ein bewährter Ablauf aus:", M, y, B, groesse=11.5, zeile=17) - 12
for i, (zeit, titel, text) in enumerate(ZEITPLAN):
    h = 30 + hoehe(text, B - 60, groesse=10.5)
    c.setFillColor([LILA, ORANGE, GRUEN, LILA, ORANGE][i]); c.setStrokeColor(INK); c.setLineWidth(2)
    c.circle(M + 14, y - 12, 13, fill=1, stroke=1)
    c.setFillColor(white); c.setFont("N-Black", 11); c.drawCentredString(M + 14, y - 16, str(i + 1))
    if i < len(ZEITPLAN) - 1:
        c.setDash(2, 3); c.line(M + 14, y - 26, M + 14, y - h - 6); c.setDash()
    c.setFont("N-Black", 13); c.setFillColor(INK); c.drawString(M + 40, y - 16, titel)
    c.setFont("N-Bold", 10); c.setFillColor(LILA); c.drawRightString(W - M, y - 16, zeit)
    absatz(text, M + 40, y - 34, B - 60, groesse=10.5)
    y -= h + 16
FR = "Faustregel: 70 % Wiederholen und Sprechen, 30 % neuer Stoff."
mh = hoehe(FR, B - 40, "Hand", 22, 26) + 24
c.setFillColor(GELB); c.setStrokeColor(INK); c.setLineWidth(2)
c.roundRect(M, y - mh, B, mh, 12, fill=1, stroke=1)
absatz(FR, M + 20, y - 30, B - 40, "Hand", 22, INK, 26)

# ------------------------------------------------------------------ 3 Tipps
neue_seite()
y = ueberschrift("8 Tipps für die Vorbereitung", H - 100, "Teil 2 · Was in den Protokollen den Unterschied macht") - 16
sp = (B - 16) / 2
for i, (titel, text) in enumerate(TIPPS):
    x = M + (i % 2) * (sp + 16)
    if i % 2 == 0:
        kh = 46 + max(hoehe(TIPPS[i][1], sp - 30, groesse=11.5, zeile=17), hoehe(TIPPS[min(i + 1, 7)][1], sp - 30, groesse=11.5, zeile=17)) + 10
    karte(x, y, sp, kh)
    c.setFillColor(ORANGE if i % 2 else LILA); c.setFont("N-Black", 20); c.drawString(x + 14, y - 28, str(i + 1))
    c.setFillColor(INK); c.setFont("N-Black", 12.5); c.drawString(x + 36, y - 26, titel)
    absatz(text, x + 15, y - 50, sp - 30, groesse=11.5, zeile=17)
    if i % 2:
        y -= kh + 16

# ------------------------------------------------------------------ 4 Hintergrund
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
y -= 6
for name, pct in [("Ertragsteuern", 100), ("Zivil- & Gesellschaftsrecht", 98), ("AO / FGO", 96), ("Umsatzsteuer", 76)]:
    bx, bw = M + 170, B - 220
    c.setFont("N-Bold", 10.5); c.setFillColor(INK); c.drawRightString(bx - 12, y - 4, name)
    c.setFillColor(HexColor("#ece6d2")); c.roundRect(bx, y - 9, bw, 14, 7, fill=1, stroke=0)
    c.setFillColor(LILA if "Zivil" in name or "AO" in name else ORANGE)
    c.roundRect(bx, y - 9, bw * pct / 100, 14, 7, fill=1, stroke=0)
    c.setFont("N-Black", 10); c.setFillColor(INK); c.drawString(bx + bw + 8, y - 5, f"{pct} %")
    y -= 22
c.setFont("N-Regular", 8.5); c.setFillColor(GRAU)
c.drawString(M, y - 2, "Anteil der Prüfungen, in denen das Gebiet vorkam – Auswertung von über 400 Protokollen")
y -= 30
mh = hoehe("Die Prüfer erwarten keine Juristen. Sie erwarten, dass du wie einer denkst: Norm suchen, "
           "Voraussetzungen prüfen, Ergebnis begründen.", B - 40, "Hand", 21, 24) + 22
c.setFillColor(GELB); c.setStrokeColor(INK); c.setLineWidth(2)
c.roundRect(M, y - mh, B, mh, 12, fill=1, stroke=1)
absatz("Die Prüfer erwarten keine Juristen. Sie erwarten, dass du wie einer denkst: Norm suchen, "
       "Voraussetzungen prüfen, Ergebnis begründen.", M + 20, y - 28, B - 40, "Hand", 21, INK, 24)

# ------------------------------------------------------------------ 5/6 Handwerkszeug
neue_seite()
y = ueberschrift("Das juristische Handwerkszeug", H - 100, "Teil 4 · Sechs Werkzeuge für jede Runde") - 16
for n, (titel, text, bsp) in enumerate(HANDWERK, start=1):
    ht = hoehe(text, B - 40, groesse=10.5)
    hb = hoehe(bsp, B - 64, "N-Bold", 10, 14)
    kh = 40 + ht + 14 + hb + 22
    if y - kh < UNTEN:
        neue_seite(); y = H - 80
    karte(M, y, B, kh)
    c.setFillColor(ORANGE); c.setStrokeColor(INK); c.setLineWidth(2); c.circle(M + 26, y - 22, 12, fill=1, stroke=1)
    c.setFillColor(white); c.setFont("N-Black", 11); c.drawCentredString(M + 26, y - 26, str(n))
    c.setFillColor(INK); c.setFont("N-Black", 13); c.drawString(M + 48, y - 26, titel)
    yy = absatz(text, M + 20, y - 46, B - 40, groesse=10.5) - 6
    bh = hb + 14
    c.setFillColor(HELLGRUEN); c.roundRect(M + 20, yy - bh + 10, B - 40, bh, 8, fill=1, stroke=0)
    c.setFont("N-Black", 7.5); c.setFillColor(GRUEN_TEXT); c.drawString(M + 30, yy + 1, "SO KLINGT ES")
    absatz(bsp, M + 32, yy - 12, B - 64, "N-Bold", 10, INK, 14)
    y -= kh + 18

UEB = ("Übung für heute: Nimm eine Prüferfrage aus einem Protokoll und beantworte sie laut in drei Sätzen – "
       "Ergebnis, Norm, Begründung. Dann dieselbe Frage noch einmal, diesmal in 30 Sekunden.")
mh = hoehe(UEB, B - 40, "Hand", 20, 24) + 24
if y - mh < UNTEN:
    neue_seite(); y = H - 80
c.setFillColor(GELB); c.setStrokeColor(INK); c.setLineWidth(2)
c.roundRect(M, y - mh, B, mh, 12, fill=1, stroke=1)
absatz(UEB, M + 20, y - 30, B - 40, "Hand", 20, INK, 24)

# ------------------------------------------------------------------ Schluss
neue_seite()
y = ueberschrift("Du schaffst das.", H - 160, "Zum Schluss")
y = absatz("Mit einem klaren Zeitplan, viel lautem Üben und sauberem juristischen Handwerkszeug gehst du "
           "deutlich ruhiger in die Prüfung. Die meisten Kommissionen prüfen auf Bestehen – zeig ihnen, wie du denkst.",
           M, y - 10, 290, groesse=12.5, zeile=18)
y = absatz("Teil 1 verpasst? „Die 10 größten Fehler in der Mündlichen“ findest du unter "
           "examenscampus.de/10-fehler-muendliche.pdf",
           M, y - 14, 290, groesse=12.5, zeile=18)
c.setFont("Hand", 26); c.setFillColor(LILA); c.drawString(M, y - 40, "Viel Erfolg! Dein examenscampus")
if os.path.exists(os.path.join(OUT, "jubel.webp")):
    bild(os.path.join(OUT, "jubel.webp"), W - M - 200, 90, h=420)
c.showPage()
c.save()
print("ok", seite[0], "Seiten")
