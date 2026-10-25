"""Instagram-Beiträge, die auf die Landingpage (Gratis-PDF „Die 10 größten Fehler in der Mündlichen“) führen.
Variante C (Creme, lila Rahmen = fachübergreifend, Nunito), 1080×1350; dazu Anzeigenmotive 1080×1350 und 1080×1920.
Aufruf: python3 tools/leadmagnet/szene.py && python3 tools/leadmagnet/insta.py  ->  social/leadmagnet/<beitrag>/NN.png
Alle Zahlen stammen aus daten/zusammenfassung.json (421 lesbare Protokolle), alle Normen aus dem geprüften PDF."""
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

HIER = os.path.dirname(os.path.abspath(__file__))
ZIEL = os.path.join(HIER, "..", "..", "social", "leadmagnet")
BUILD = os.path.join(HIER, "build")
W, H = 1080, 1350
INK, PAPER, WEISS = (22, 22, 29), (255, 251, 230), (255, 255, 255)
LILA, ORANGE, GELB, GRUEN, ROT, GRAU = (124, 92, 255), (255, 122, 69), (255, 222, 89), (14, 138, 85), (196, 48, 43), (92, 92, 104)
HELLGRUEN, HELLROT, HELLLILA = (227, 251, 239), (255, 234, 230), (239, 234, 255)
F = lambda gewicht, groesse: ImageFont.truetype(os.path.join(HIER, "fonts", f"Nunito-{gewicht}.ttf"), groesse)
HAND = lambda groesse: ImageFont.truetype(os.path.join(HIER, "fonts", "Caveat.ttf"), groesse)
RAND = 30          # Abstand Rahmen
INNEN = 90         # Satzspiegel links/rechts
BREITE = W - 2 * INNEN


class Folie:
    def __init__(self, nr, gesamt, hoehe=H):
        self.h = hoehe
        self.img = Image.new("RGB", (W, hoehe), PAPER)
        self.d = ImageDraw.Draw(self.img)
        self.d.rounded_rectangle((RAND, RAND, W - RAND, hoehe - RAND), 34, outline=LILA, width=12)
        self.d.text((INNEN, 70), "examens", font=F("Black", 30), fill=INK)
        self.d.text((INNEN + self.d.textlength("examens", font=F("Black", 30)), 70), "campus", font=F("Black", 30), fill=LILA)
        if gesamt > 1:
            self.d.text((W - INNEN, 70), f"{nr}/{gesamt}", font=F("Bold", 30), fill=GRAU, anchor="ra")
        self.nr, self.gesamt = nr, gesamt

    # -- Text
    def zeilen(self, text, font, breite):
        worte, out, z = text.split(), [], ""
        for w in worte:
            t = (z + " " + w).strip()
            if self.d.textlength(t, font=font) <= breite:
                z = t
            else:
                out.append(z); z = w
        out.append(z)
        return out

    def text(self, text, y, gewicht="Regular", groesse=40, farbe=INK, x=INNEN, breite=BREITE, zeile=1.32, mitte=False):
        font = F(gewicht, groesse) if gewicht != "Hand" else HAND(groesse)
        for z in self.zeilen(text, font, breite):
            if mitte:
                self.d.text((W / 2, y), z, font=font, fill=farbe, anchor="ma")
            else:
                self.d.text((x, y), z, font=font, fill=farbe)
            y += int(groesse * zeile)
        return y

    def schlagzeile(self, teile, y, groesse=120, zeile=1.08):
        """teile: Liste (wort, markiert?) – markierte Wörter bekommen den gelben Marker."""
        font = F("Black", groesse)
        x, zeilen, z = INNEN, [], []
        for wort, mark in teile:
            w = self.d.textlength(wort + " ", font=font)
            if x + w - INNEN > BREITE + self.d.textlength(" ", font=font) and z:
                zeilen.append(z); z = []; x = INNEN
            z.append((wort, mark, x)); x += w
        zeilen.append(z)
        for z in zeilen:
            for wort, mark, xx in z:
                if mark:
                    ww = self.d.textlength(wort, font=font)
                    self.d.rectangle((xx - 6, y + groesse * 0.55, xx + ww + 6, y + groesse * 0.98), fill=GELB)
            for wort, mark, xx in z:
                self.d.text((xx, y), wort, font=font, fill=INK)
            y += int(groesse * zeile)
        return y

    def pille(self, text, x, y, fill=GELB, farbe=INK, groesse=32):
        font = F("Black", groesse)
        w = self.d.textlength(text, font=font) + 48
        h = groesse + 30
        self.d.rounded_rectangle((x + 6, y + 6, x + w + 6, y + h + 6), h // 2, fill=INK)
        self.d.rounded_rectangle((x, y, x + w, y + h), h // 2, fill=fill, outline=INK, width=4)
        self.d.text((x + 24, y + h / 2), text, font=font, fill=farbe, anchor="lm")
        return w, h

    def karte(self, x0, y0, x1, y1, fill=WEISS, schatten=True, rand=INK):
        if schatten:
            self.d.rounded_rectangle((x0 + 9, y0 + 9, x1 + 9, y1 + 9), 26, fill=INK)
        self.d.rounded_rectangle((x0, y0, x1, y1), 26, fill=fill, outline=rand, width=5)

    def kasten(self, etikett, text, y, fill, farbe, gewicht="Regular", groesse=40):
        """Karte mit Etikett oben, Höhe automatisch."""
        font = F(gewicht, groesse)
        z = self.zeilen(text, font, BREITE - 80)
        h = 92 + len(z) * int(groesse * 1.3) + 26
        self.karte(INNEN, y, W - INNEN, y + h, fill=fill)
        self.d.text((INNEN + 40, y + 30), etikett, font=F("Black", 30), fill=farbe)
        yy = y + 82
        for zz in z:
            self.d.text((INNEN + 40, yy), zz, font=font, fill=INK); yy += int(groesse * 1.3)
        return y + h

    def bild(self, pfad_oder_img, x, y, h=None, w=None, unten=None):
        im = pfad_oder_img if isinstance(pfad_oder_img, Image.Image) else Image.open(pfad_oder_img).convert("RGBA")
        if h:
            im = im.resize((int(im.width * h / im.height), h), Image.LANCZOS)
        elif w:
            im = im.resize((w, int(im.height * w / im.width)), Image.LANCZOS)
        if unten is not None:
            y = unten - im.height
        if x == "mitte":
            x = (W - im.width) // 2
        self.img.paste(im, (int(x), int(y)), im)
        return im.width, im.height

    def weiter(self, text="Wischen"):
        x = W - INNEN
        self.d.line((x - 60, self.h - 70, x, self.h - 70), fill=ORANGE, width=6)
        self.d.line((x - 18, self.h - 86, x, self.h - 70, x - 18, self.h - 54), fill=ORANGE, width=6, joint="curve")
        self.d.text((x - 76, self.h - 96), text, font=HAND(46), fill=ORANGE, anchor="ra")

    def speichern(self, pfad):
        os.makedirs(os.path.dirname(pfad), exist_ok=True)
        self.img.save(pfad, optimize=True)


def pdf_mockup(breite=430, winkel=-6, seite="pdfcover-01.png"):
    """PDF-Titelseite als schräg liegendes Blatt mit Schatten."""
    s = Image.open(os.path.join(BUILD, seite)).convert("RGBA")
    s = s.resize((breite, int(s.height * breite / s.width)), Image.LANCZOS)
    rahmen = Image.new("RGBA", (s.width + 10, s.height + 10), INK + (255,))
    rahmen.paste(s, (5, 5))
    schatten = Image.new("RGBA", (rahmen.width + 60, rahmen.height + 60), (0, 0, 0, 0))
    ImageDraw.Draw(schatten).rectangle((40, 40, rahmen.width + 40, rahmen.height + 40), fill=(22, 22, 29, 90))
    schatten = schatten.filter(ImageFilter.GaussianBlur(12))
    schatten.paste(rahmen, (20, 20), rahmen)
    return schatten.rotate(winkel, resample=Image.BICUBIC, expand=True)


def cta_folie(f, titel="Alle 10 Fehler + Lösungen", unter="Gratis-PDF aus über 400 echten Prüfungsprotokollen"):
    f.d.text((INNEN, 150), "Für deine Mündliche", font=HAND(58), fill=ORANGE)
    y = f.schlagzeile([(w, w in ("10", "Fehler")) for w in titel.split()], 220, 92)
    y = f.text(unter, y + 10, "Bold", 40, GRAU)
    f.bild(pdf_mockup(470), 70, y + 30)
    f.bild(os.path.join(BUILD, "f2.png"), W - INNEN - 300, 0, h=560, unten=f.h - 220)
    by = f.h - 200
    f.d.rounded_rectangle((INNEN + 8, by + 8, W - INNEN + 8, by + 112), 24, fill=INK)
    f.d.rounded_rectangle((INNEN, by, W - INNEN, by + 104), 24, fill=LILA, outline=INK, width=5)
    f.d.text((W / 2, by + 52), "Link in der Bio: PDF holen", font=F("Black", 46), fill=WEISS, anchor="mm")


# ======================================================================== Beitrag 1: Die 10 häufigsten Fehler
def beitrag_10_fehler():
    n, ordner = 7, os.path.join(ZIEL, "01-die-10-haeufigsten-fehler")
    f = Folie(1, n)
    f.pille("Über 400 echte Prüfungsprotokolle", INNEN, 150)
    y = f.schlagzeile([("Die", 0), ("10", 1), ("häufigsten", 0), ("Fehler", 1), ("der", 0), ("Mündlichen", 0)], 260, 124)
    f.text("Steuerberaterprüfung – ausgewertet aus NRW 2019–2026", y + 24, "Bold", 38, GRAU)
    f.bild(os.path.join(BUILD, "szene.png"), "mitte", 0, w=BREITE + 40, unten=f.h - 150)
    f.weiter(); f.speichern(os.path.join(ordner, "01.png"))

    f = Folie(2, n)
    f.d.text((INNEN, 160), "So sind wir vorgegangen", font=HAND(58), fill=ORANGE)
    y = f.text("Wir haben über 400 Protokolle der mündlichen StB-Prüfung gelesen – jedes einzeln.", 240, "Black", 62, zeile=1.18)
    y = f.text("Gezählt: Woran sind Prüflinge gescheitert? Wo gab es Punktabzug?", y + 30, "Regular", 42, GRAU)
    f.pille("Hier ist die Rangliste", INNEN, y + 40, fill=WEISS)
    f.bild(os.path.join(BUILD, "f4.png"), W - INNEN - 260, 0, h=560, unten=f.h - 120)
    f.weiter(); f.speichern(os.path.join(ordner, "02.png"))

    plaetze = [
        (10, "Den Kurzvortrag verschenken"), (9, "Eine schlechte Runde mitnehmen"), (8, "Keine Rückfragen zum Sachverhalt"),
        (7, "Schweigen oder „keine Ahnung“ sagen"), (6, "Nicht zuhören, wenn andere dran sind"),
        (5, "Randgebiete vernachlässigen"), (4, "Fachbegriffe nicht treffen"),
        (3, "Aktuelles nicht auf dem Schirm"), (2, "Aus dem Kopf statt aus dem Gesetz antworten"),
    ]
    for i, gruppe in enumerate((plaetze[0:5], plaetze[5:9])):
        f = Folie(3 + i, n)
        f.d.text((INNEN, 150), "Platz 10 bis 6" if i == 0 else "Platz 5 bis 2", font=HAND(58), fill=ORANGE)
        y = 240
        for platz, titel in gruppe:
            hoch = 150 if i == 0 else 190
            f.karte(INNEN, y, W - INNEN, y + hoch - 26, fill=WEISS)
            f.d.ellipse((INNEN + 30, y + (hoch - 26) / 2 - 42, INNEN + 114, y + (hoch - 26) / 2 + 42), fill=ORANGE if platz > 1 else LILA, outline=INK, width=4)
            f.d.text((INNEN + 72, y + (hoch - 26) / 2), str(platz), font=F("Black", 44), fill=WEISS, anchor="mm")
            zl = f.zeilen(titel, F("Black", 44), BREITE - 190)
            yy = y + (hoch - 26) / 2 - len(zl) * 27
            for z in zl:
                f.d.text((INNEN + 150, yy), z, font=F("Black", 44), fill=INK); yy += 54
            y += hoch
        f.weiter(); f.speichern(os.path.join(ordner, f"0{3 + i}.png"))

    f = Folie(5, n)
    f.d.text((INNEN, 150), "Und Platz 1?", font=HAND(64), fill=ORANGE)
    y = f.text("Diesen Fehler fanden wir in mehr als jedem zweiten Protokoll.", 250, "Black", 66, zeile=1.16)
    f.karte(INNEN, y + 40, W - INNEN, y + 250, fill=WEISS)
    unscharf = Image.new("RGBA", (BREITE - 80, 150), (0, 0, 0, 0))
    ImageDraw.Draw(unscharf).text((0, 30), "Die Frage nicht durchschauen", font=F("Black", 64), fill=INK + (255,))
    f.bild(unscharf.filter(ImageFilter.GaussianBlur(14)), INNEN + 40, y + 70)
    f.pille("Auflösung im Gratis-PDF", INNEN, y + 300)
    f.bild(os.path.join(BUILD, "f1.png"), W - INNEN - 230, 0, h=430, unten=f.h - 110)
    f.weiter(); f.speichern(os.path.join(ordner, "05.png"))

    f = Folie(6, n)
    f.d.text((INNEN, 150), "Im PDF zu jedem Fehler", font=HAND(58), fill=ORANGE)
    y = 250
    for punkt in ("Eine echte Prüfungsszene: Frage, schwache und starke Antwort",
                  "Zitate aus den Protokollen", "Was du konkret besser machst", "Den Ablauf der Mündlichen auf einen Blick"):
        f.d.ellipse((INNEN, y + 6, INNEN + 44, y + 50), fill=GELB, outline=INK, width=4)
        f.d.line((INNEN + 11, y + 28, INNEN + 20, y + 38, INNEN + 35, y + 16), fill=INK, width=6, joint="curve")
        y = f.text(punkt, y, "Bold", 44, x=INNEN + 70, breite=BREITE - 70) + 26
    f.bild(pdf_mockup(400, 5, "pdfseite-04.png"), W - INNEN - 430, y + 10)
    f.weiter(); f.speichern(os.path.join(ordner, "06.png"))

    f = Folie(7, n); cta_folie(f); f.speichern(os.path.join(ordner, "07.png"))


# ======================================================================== Beitrag 2: Fehler Nr. 1
def beitrag_jeder_zweite():
    n, ordner = 6, os.path.join(ZIEL, "02-fehler-nummer-1")
    f = Folie(1, n)
    f.pille("Fehler Nr. 1 aus über 400 Protokollen", INNEN, 150)
    y = f.schlagzeile([("Jedes", 0), ("zweite", 1), ("Protokoll", 0), ("zeigt", 0), ("diesen", 0), ("Fehler", 1)], 260, 118)
    f.text("Platz 1 aus unserer Auswertung von über 400 echten Prüfungsprotokollen.", y + 10, "Bold", 40, GRAU)
    f.bild(os.path.join(BUILD, "f3.png"), "mitte", 0, h=520, unten=f.h - 120)
    f.weiter(); f.speichern(os.path.join(ordner, "01.png"))

    f = Folie(2, n)
    f.d.text((INNEN, 150), "Der Fehler", font=HAND(58), fill=ORANGE)
    y = f.text("Die Frage nicht durchschauen – und am Ziel vorbei antworten.", 230, "Black", 70, zeile=1.15)
    y = f.text("Ein offener Mandantenfall wird breit abgearbeitet, während der Prüfer auf eine bestimmte Norm wartet. "
               "In mehr als jedem zweiten Protokoll beschrieben.", y + 30, "Regular", 42, GRAU)
    f.bild(os.path.join(BUILD, "f5.png"), W - INNEN - 220, 0, h=430, unten=f.h - 110)
    f.weiter(); f.speichern(os.path.join(ordner, "02.png"))

    f = Folie(3, n)
    f.d.text((INNEN, 150), "So klingt das im Prüfungsraum", font=HAND(58), fill=ORANGE)
    y = f.kasten("PRÜFER", "Ihr Mandant hat ein vermietetes Mehrfamilienhaus aus seinem Privatvermögen sieben Jahre nach dem Kauf verkauft. Was sagen Sie ihm?",
                 240, HELLLILA, LILA, "Bold", 42)
    y = f.kasten("SCHWACH", "„Erst einmal gehört das Haus zum Privatvermögen, dann müssen wir die Einkünfte aus Vermietung prüfen, die AfA …“",
                 y + 40, HELLROT, ROT, "Regular", 40)
    f.bild(os.path.join(BUILD, "f1.png"), W - INNEN - 200, 0, h=360, unten=f.h - 110)
    f.weiter("Wie geht es besser?"); f.speichern(os.path.join(ordner, "03.png"))

    f = Folie(4, n)
    f.d.text((INNEN, 150), "Die starke Antwort", font=HAND(58), fill=ORANGE)
    y = f.kasten("STARK", "„Entscheidend ist § 23 Abs. 1 Satz 1 Nr. 1 EStG: Zwischen Anschaffung und Veräußerung liegen nicht mehr als zehn Jahre. "
                 "Der Gewinn ist als privates Veräußerungsgeschäft steuerpflichtig.“", 240, HELLGRUEN, GRUEN, "Regular", 40)
    f.text("§ 22 Nr. 2, § 23 Abs. 1 Satz 1 Nr. 1 EStG", y + 24, "Bold", 32, GRAU)
    f.bild(os.path.join(BUILD, "f4.png"), W - INNEN - 220, 0, h=400, unten=f.h - 110)
    f.weiter(); f.speichern(os.path.join(ordner, "04.png"))

    f = Folie(5, n)
    f.d.text((INNEN, 150), "Merke", font=HAND(64), fill=ORANGE)
    f.karte(INNEN, 250, W - INNEN, 720, fill=GELB)
    f.text("Erst die Kernfrage, dann die Details. Wer nicht sicher ist, worauf der Prüfer hinauswill, spiegelt kurz zurück: „Geht es Ihnen um …?“",
           300, "Black", 54, x=INNEN + 50, breite=BREITE - 100, zeile=1.2)
    f.text("Die anderen 9 Fehler – und wie du sie vermeidest – stehen im Gratis-PDF.", 790, "Bold", 42, GRAU)
    f.weiter(); f.speichern(os.path.join(ordner, "05.png"))

    f = Folie(6, n); cta_folie(f); f.speichern(os.path.join(ordner, "06.png"))


# ======================================================================== Beitrag 3: Quiz Familienheim
def beitrag_quiz():
    n, ordner = 6, os.path.join(ZIEL, "03-quiz-familienheim")
    f = Folie(1, n)
    f.pille("Echte Prüfungssituation", INNEN, 150)
    y = f.schlagzeile([("Würdest", 0), ("du", 0), ("hier", 0), ("bestehen?", 1)], 260, 132)
    f.text("Eine typische Beratungsfrage aus der Mündlichen. Antworte nicht zu schnell!", y + 10, "Bold", 40, GRAU)
    f.bild(os.path.join(BUILD, "szene.png"), "mitte", 0, w=BREITE + 40, unten=f.h - 150)
    f.weiter(); f.speichern(os.path.join(ordner, "01.png"))

    f = Folie(2, n)
    f.d.text((INNEN, 150), "Der Fall", font=HAND(58), fill=ORANGE)
    y = f.kasten("PRÜFER", "Ihr Mandant möchte seiner Tochter das selbst bewohnte Einfamilienhaus übertragen. Was raten Sie?", 240, HELLLILA, LILA, "Bold", 46)
    f.text("Was antwortest du?", y + 60, "Black", 64)
    f.bild(os.path.join(BUILD, "f1.png"), W - INNEN - 220, 0, h=420, unten=f.h - 110)
    f.weiter(); f.speichern(os.path.join(ordner, "02.png"))

    f = Folie(3, n)
    f.d.text((INNEN, 150), "A oder B?", font=HAND(64), fill=ORANGE)
    y = f.kasten("A", "„Das ist steuerfrei – das Familienheim ist nach § 13 ErbStG befreit.“", 250, WEISS, ORANGE, "Bold", 46)
    y = f.kasten("B", "„Dazu brauche ich mehr Angaben: Schenkung oder Erbfall? Und wie groß ist das Haus?“", y + 40, WEISS, LILA, "Bold", 46)
    f.text("Schreib deine Antwort in die Kommentare!", y + 50, "Black", 46, ORANGE)
    f.weiter("Auflösung"); f.speichern(os.path.join(ordner, "03.png"))

    f = Folie(4, n)
    f.d.text((INNEN, 150), "Auflösung: B", font=HAND(64), fill=GRUEN)
    y = f.text("Eine Schenkung zu Lebzeiten an ein Kind ist nicht nach § 13 ErbStG befreit.", 240, "Black", 52, zeile=1.2)
    y = f.text("§ 13 Abs. 1 Nr. 4a gilt nur für Ehegatten und Lebenspartner. Erst beim Erbfall kann Nr. 4c greifen – "
               "wenn die Tochter selbst einzieht, begrenzt auf 200 m² Wohnfläche.", y + 26, "Regular", 40, GRAU)
    f.text("§ 13 Abs. 1 Nr. 4a, 4c ErbStG", y + 20, "Bold", 32, GRAU)
    f.bild(os.path.join(BUILD, "f3.png"), W - INNEN - 220, 0, h=420, unten=f.h - 110)
    f.weiter(); f.speichern(os.path.join(ordner, "04.png"))

    f = Folie(5, n)
    f.d.text((INNEN, 150), "Merke", font=HAND(64), fill=ORANGE)
    f.karte(INNEN, 250, W - INNEN, 640, fill=GELB)
    f.text("Ein unvollständiger Sachverhalt ist oft Absicht. Rückfragen zeigen Beratungskompetenz.", 300, "Black", 56,
           x=INNEN + 50, breite=BREITE - 100, zeile=1.2)
    f.text("„Keine Rückfragen zum Sachverhalt“ ist einer der 10 häufigsten Fehler in hunderten Prüfungsprotokollen.", 710, "Bold", 42, GRAU)
    f.bild(os.path.join(BUILD, "f2.png"), W - INNEN - 200, 0, h=360, unten=f.h - 100)
    f.weiter(); f.speichern(os.path.join(ordner, "05.png"))

    f = Folie(6, n); cta_folie(f); f.speichern(os.path.join(ordner, "06.png"))


# ======================================================================== Beitrag 4: Drei Sätze, die du nie sagen solltest
def beitrag_drei_saetze():
    n, ordner = 6, os.path.join(ZIEL, "04-drei-saetze")
    f = Folie(1, n)
    f.pille("Mündliche StB-Prüfung", INNEN, 150)
    y = f.schlagzeile([("3", 1), ("Sätze,", 0), ("die", 0), ("du", 0), ("nie", 1), ("sagen", 0), ("solltest", 0)], 260, 120)
    f.text("Gefunden in hunderten echten Prüfungsprotokollen.", y + 10, "Bold", 40, GRAU)
    f.bild(os.path.join(BUILD, "f5.png"), "mitte", 0, h=500, unten=f.h - 120)
    f.weiter(); f.speichern(os.path.join(ordner, "01.png"))

    saetze = [
        ("„Keine Ahnung.“", "„Ich steige beim Grundtatbestand ein: Der Haftungsbescheid ist ein Verwaltungsakt, also ist der Einspruch nach § 347 AO statthaft …“",
         "Die Protokolle sind sich einig: Ein Lösungsansatz ist immer besser als Schweigen."),
        ("„Das ist steuerfrei, weil es ins Ausland geht.“", "„Es kann eine innergemeinschaftliche Lieferung vorliegen, steuerfrei nach § 4 Nr. 1 Buchst. b i. V. m. § 6a UStG – wenn die Voraussetzungen erfüllt sind.“",
         "Prüfer warten auf den Fachbegriff. Ein präziser Begriff ersetzt drei Sätze Umschreibung."),
        ("„Ich glaube, vier Jahre.“", "„Die Festsetzungsfrist beträgt nach § 169 Abs. 2 Satz 1 Nr. 2 AO vier Jahre; der Beginn richtet sich nach § 170 AO.“",
         "Erst die Norm, dann das Ergebnis – und laut sagen, wo du nachschlägst."),
    ]
    for i, (nie, besser, warum) in enumerate(saetze):
        f = Folie(2 + i, n)
        f.d.text((INNEN, 150), f"Satz {i + 1}", font=HAND(64), fill=ORANGE)
        y = f.kasten("NIE SAGEN", nie, 240, HELLROT, ROT, "Black", 52)
        y = f.kasten("BESSER", besser, y + 36, HELLGRUEN, GRUEN, "Regular", 38)
        f.text(warum, y + 30, "Bold", 38, GRAU)
        f.weiter(); f.speichern(os.path.join(ordner, f"0{2 + i}.png"))

    f = Folie(5, n)
    f.d.text((INNEN, 150), "Das waren 3 von 10", font=HAND(64), fill=ORANGE)
    y = f.text("Die 10 häufigsten Fehler der Mündlichen – mit Prüfungsszenen, Zitaten und Lösungen.", 240, "Black", 62, zeile=1.18)
    f.bild(pdf_mockup(430, -4, "pdfseite-04.png"), INNEN - 10, y + 30)
    f.weiter(); f.speichern(os.path.join(ordner, "05.png"))

    f = Folie(6, n); cta_folie(f); f.speichern(os.path.join(ordner, "06.png"))


# ======================================================================== Anzeigenmotive
def anzeigen():
    ordner = os.path.join(ZIEL, "05-anzeigen")
    for name, hoehe in (("feed-1080x1350.png", H), ("story-1080x1920.png", 1920)):
        f = Folie(1, 1, hoehe)
        oben = 150 if hoehe == H else 260
        f.pille("Gratis-PDF", INNEN, oben)
        y = f.schlagzeile([("Über", 0), ("400", 1), ("Protokolle.", 0), ("10", 1), ("Fehler.", 0)], oben + 110, 100)
        y = f.text("Die häufigsten Fehler der mündlichen Steuerberaterprüfung – und wie du sie vermeidest.", y + 24, "Bold", 42, GRAU)
        f.bild(pdf_mockup(250 if hoehe == H else 480, -5), 70, y + 10)
        f.bild(os.path.join(BUILD, "f2.png"), W - INNEN - 260, 0, h=380 if hoehe == H else 640, unten=hoehe - (220 if hoehe == H else 320))
        by = hoehe - (200 if hoehe == H else 300)
        f.d.rounded_rectangle((INNEN + 8, by + 8, W - INNEN + 8, by + 112), 24, fill=INK)
        f.d.rounded_rectangle((INNEN, by, W - INNEN, by + 104), 24, fill=LILA, outline=INK, width=5)
        f.d.text((W / 2, by + 52), "Jetzt kostenlos sichern", font=F("Black", 48), fill=WEISS, anchor="mm")
        f.speichern(os.path.join(ordner, name))


if __name__ == "__main__":
    beitrag_10_fehler(); beitrag_jeder_zweite(); beitrag_quiz(); beitrag_drei_saetze(); anzeigen()
    print("ok")
