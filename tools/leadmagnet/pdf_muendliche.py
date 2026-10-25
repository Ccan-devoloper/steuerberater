"""Leadmagnet-PDF: Die 10 größten Fehler in der mündlichen Steuerberaterprüfung.
Aufruf: python3 tools/leadmagnet/pdf_muendliche.py  ->  landingpage/10-fehler-muendliche.pdf"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader, simpleSplit

HIER = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HIER, "..", "..", "landingpage")
INK, PAPER, LILA, ORANGE, GELB, GRAU = map(HexColor, ["#16161d", "#fffbe6", "#7c5cff", "#ff7a45", "#ffde59", "#5c5c68"])
W, H = A4

FEHLER = [
    ("Kurzvortrag ohne roten Faden", "Wer in den ersten Sätzen keine Gliederung ankündigt, verliert die Kommission. Nenne Problem, Aufbau und Ergebnis vorweg und halte dich sichtbar daran."),
    ("Die Zeit im Kurzvortrag nicht im Griff", "Zu kurz wirkt dünn, zu lang wird abgebrochen. Übe mit Stoppuhr und plane bewusst, an welcher Stelle du kürzen kannst."),
    ("Antworten ohne Norm", "„Ich glaube, das ist steuerfrei“ überzeugt niemanden. Steig mit der Vorschrift ein und subsumiere laut. Das zeigt Methode, auch wenn das Ergebnis wackelt."),
    ("Schweigen bei Wissenslücken", "Stille ist der teuerste Fehler. Denk laut: Welche Norm kommt in Betracht, was ist der Grundsatz, wo könnte die Ausnahme liegen? Dafür gibt es Punkte."),
    ("Monologe statt Gespräch", "Die Prüfungsrunde ist ein Dialog. Antworte präzise und lass Raum für Nachfragen, statt alles zu erzählen, was du zum Thema weißt."),
    ("Nicht zuhören, was gefragt ist", "Viele beantworten die Frage, die sie gelernt haben, statt der gestellten. Wiederhole die Frage im Kopf und antworte genau darauf."),
    ("Sich von einer falschen Antwort aus der Bahn werfen lassen", "Eine Runde ist schnell vorbei, die nächste Frage ist eine neue Chance. Abhaken, durchatmen, weitermachen."),
    ("Mitprüflinge ignorieren", "Fragen werden weitergegeben. Wer abschaltet, während andere dran sind, ist beim Weiterreichen unvorbereitet. Hör jede Frage mit."),
    ("Aktuelles nicht auf dem Schirm", "Prüfer fragen gern nach neuen Gesetzesänderungen und aktueller Rechtsprechung. Plane feste Zeit für die Aktualitäten ein."),
    ("Nur allein lernen", "Die Mündliche ist eine Sprechprüfung. Wer nie laut vor anderen antwortet, übt das Falsche. Simuliere Prüfungsrunden mit Lernpartnern."),
]

def kopf(c, seite):
    c.setFillColor(PAPER); c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(INK); c.setFont("Helvetica-Bold", 11); c.drawString(40, H - 36, "examens")
    c.setFillColor(LILA); c.drawString(40 + c.stringWidth("examens", "Helvetica-Bold", 11), H - 36, "campus")
    c.setFillColor(GRAU); c.setFont("Helvetica", 9); c.drawRightString(W - 40, 28, f"Seite {seite}")

def bild(c, name, x, y, h):
    img = ImageReader(os.path.join(OUT, name + ".webp")); iw, ih = img.getSize()
    c.drawImage(img, x, y, width=h * iw / ih, height=h, mask="auto")

c = canvas.Canvas(os.path.join(OUT, "10-fehler-muendliche.pdf"), pagesize=A4)
c.setTitle("Die 10 größten Fehler in der mündlichen Steuerberaterprüfung"); c.setAuthor("examenscampus")

# Titelseite
kopf(c, 1)
c.setFillColor(GELB); c.rect(36, H - 244, 215, 30, fill=1, stroke=0)
c.setFillColor(INK); c.setFont("Helvetica-Bold", 40)
for i, z in enumerate(["Die 10 größten", "Fehler in der", "Mündlichen"]):
    c.drawString(40, H - 140 - i * 48, z)
c.setFont("Helvetica", 15); c.setFillColor(GRAU)
c.drawString(40, H - 290, "… und wie du sie in der")
c.drawString(40, H - 310, "Steuerberaterprüfung vermeidest.")
bild(c, "held", W - 250, 60, 440)
c.setFont("Helvetica-Bold", 12); c.setFillColor(LILA); c.drawString(40, 90, "Gratis-Leitfaden von examenscampus")
c.showPage()

# Fehlerseiten, 5 je Seite
for s in range(2):
    kopf(c, s + 2); y = H - 80
    for n, (t, txt) in enumerate(FEHLER[s * 5:(s + 1) * 5], start=s * 5 + 1):
        zeilen = simpleSplit(txt, "Helvetica", 11.5, W - 150)
        hh = 46 + len(zeilen) * 15
        c.setFillColor(INK); c.roundRect(44, y - hh - 4, W - 84, hh, 12, fill=1, stroke=0)
        c.setFillColor(HexColor("#ffffff")); c.setStrokeColor(INK); c.setLineWidth(2)
        c.roundRect(40, y - hh, W - 84, hh, 12, fill=1, stroke=1)
        c.setFillColor(ORANGE); c.circle(70, y - 26, 15, fill=1, stroke=1)
        c.setFillColor(HexColor("#ffffff")); c.setFont("Helvetica-Bold", 13); c.drawCentredString(70, y - 31, str(n))
        c.setFillColor(INK); c.setFont("Helvetica-Bold", 14); c.drawString(96, y - 31, t)
        c.setFont("Helvetica", 11.5); c.setFillColor(GRAU)
        for i, z in enumerate(zeilen):
            c.drawString(96, y - 52 - i * 15, z)
        y -= hh + 22
    c.showPage()

# Abschluss
kopf(c, 4)
bild(c, "jubel", 40, 120, 420)
c.setFillColor(INK); c.setFont("Helvetica-Bold", 26)
c.drawString(280, H - 160, "Du schaffst das.")
c.setFont("Helvetica", 13); c.setFillColor(GRAU)
for i, z in enumerate(simpleSplit("In den nächsten Tagen bekommst du weitere Tipps zur Mündlichen per E-Mail: Kurzvortrag-Vorlagen, typische Prüferfragen und Checklisten für den Prüfungstag.", "Helvetica", 13, W - 330)):
    c.drawString(280, H - 195 - i * 18, z)
c.setFillColor(LILA); c.setFont("Helvetica-Bold", 13); c.drawString(280, H - 300, "examenscampus.de")
c.showPage(); c.save()
print("ok")
