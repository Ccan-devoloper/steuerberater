"""Leadmagnet-Beiträge im Kanal-Layout (social/op, Variante C). Inhalte: Auswertung von über 400 Protokollen
(tools/leadmagnet/daten/zusammenfassung.json) und am Gesetzestext geprüfte Normen (§§ 25, 26, 28 DVStB; § 13 ErbStG; § 355 AO)."""

FIG = {
    "A": {"name": "Mara", "kopf": "Medium Straight", "haut": "#C99470", "haar": "#2A1B14", "oberteil": "#F4A3B5", "brille": "Glasses", "bueste": "Blazer Black Tee"},
    "B": {"name": "Tarek", "kopf": "Short 4", "haut": "#B07552", "haar": "#1E1410", "oberteil": "#9AD48F", "bueste": "Button Shirt 1"},
    "C": {"name": "Lena", "kopf": "Bun 2", "haut": "#F3D0B5", "haar": "#6B3E26", "oberteil": "#F9D56E", "bueste": "Sweater"},
    "D": {"name": "Jonas", "kopf": "Short 2", "haut": "#E8B48F", "haar": "#3B2A1E", "oberteil": "#8DB3F2", "brille": "Glasses 2", "bueste": "Button Shirt 2"},
}
GEMEINSAM = {"klausur": 0, "fach": None, "fachLabel": "Mündliche Prüfung", "klausurLabel": "Gratis-PDF"}
CTA_HASH = ["#steuerberaterprüfung", "#steuerberaterexamen", "#mündlicheprüfung", "#examensvorbereitung"]

def schluss(ref, x=790):
    """Letzte Folie der Leadmagnet-Karussells: Weg zum Gratis-PDF statt Gesetzesauszug."""
    return {"typ": "inhalt", "titel": "So holst du dir das PDF", "punkte": [
        ["Profil von examenscampus öffnen", "ok", "Bold", None],
        ["Link in der Bio antippen", "ok", "Bold", None],
        ["E-Mail eintragen – das PDF kommt sofort", "ok", "Bold", None],
        ["Kostenlos, jederzeit abbestellbar", None, "Regular", None]],
        "figur": ref, "x": x, "blase": "Gratis!"}

def karussell_10_fehler():
    return dict(GEMEINSAM, slot="k1", format="karussell", themaId="lead-10-fehler", themaTitel="Die 10 häufigsten Fehler der Mündlichen",
        figuren={"A": FIG["A"], "B": FIG["B"]},
        folien=[
            {"typ": "cover", "badge": "Über 400 Protokolle", "badgeFarbe": "GELB", "zeilen": ["Die 10 Fehler", "der Mündlichen"],
             "unter": "Platz 10 bis 1", "teaser": "+ Gratis-PDF",
             "motiv": {"typ": "zahlblock", "zeilen": [["400+", "ExtraBold", 120], ["Protokolle", "Bold", 44]]}, "figur": "A:ernst"},
            {"typ": "schritte", "titel": "Platz 10 bis 6", "schritte": [
                ["Platz 10", None, "Den Kurzvortrag verschenken"], ["Platz 9", None, "Eine schlechte Runde mitnehmen"],
                ["Platz 8", None, "Keine Rückfragen zum Sachverhalt"], ["Platz 7", None, "Schweigen oder „keine Ahnung“ sagen"],
                ["Platz 6", None, "Nicht zuhören, wenn andere dran sind"]], "teaser": "Am Ende: Platz 1"},
            {"typ": "inhalt", "titel": "Platz 5 bis 2", "punkte": [
                ["Platz 5: Randgebiete vernachlässigen", "warn", "Bold", None],
                ["Platz 4: Fachbegriffe nicht treffen", "warn", "Bold", None],
                ["Platz 3: Aktuelles nicht auf dem Schirm", "warn", "Bold", None],
                ["Platz 2: Aus dem Kopf statt aus dem Gesetz antworten", "nein", "Bold", None]],
             "figur": "B:sorge", "x": 790, "blase": "Kenn ich …"},
            {"typ": "inhalt", "titel": "Und Platz 1?", "punkte": [
                ["Steht in mehr als jedem zweiten Protokoll.", "warn", "ExtraBold", None],
                ["Kostet Punkte, obwohl das Wissen da ist.", "nein", "Bold", None],
                ["Die Auflösung steht im Gratis-PDF – mit Prüfungsszene und Lösung.", "ok", "Regular", None]],
             "figur": "A:denkt", "x": 290, "blase": "Welcher?"},
            {"typ": "inhalt", "titel": "Warum das zählt", "punkte": [
                ["In fast jedem dritten Protokoll ist mindestens einer durchgefallen.", "nein", "Bold", None],
                ["Bestanden erst bei 4,15 im Durchschnitt.", "warn", "Bold", "§ 28 Abs. 1 S. 2 DVStB"],
                ["Mit 4,5 brauchst du mündlich im Schnitt eine 3,8.", "warn", "Regular", None]],
             "figur": "B:ernst", "x": 790, "blase": "Kein Selbstläufer."},
            {"typ": "merke", "oben": ["Alle 10 Fehler + Lösungen", "Gratis-PDF · Link in der Bio", "GELB"],
             "zeilen": [[["Frage", "a"], [" durchschauen,", None]], [["Norm", "b"], [" nennen,", None]],
                        [["Aktuelles", "c"], [" kennen,", None]], [["nie", "d"], [" schweigen.", None]]],
             "speichern": "Speichern für die Mündliche", "frage": "Welcher Fehler passiert dir?", "teaser": "Weiterwischen: So holst du dir das PDF"},
            schluss("A:froh")],
        caption="Die 10 häufigsten Fehler in der mündlichen Steuerberaterprüfung – ausgewertet aus über 400 echten Prüfungsprotokollen. 😬\n\n"
                "Was dir keiner sagt: In fast jedem dritten Protokoll ist mindestens ein Prüfling durchgefallen. Bestanden ist nur, wer im Durchschnitt aus schriftlicher und mündlicher Note höchstens 4,15 erreicht (§ 28 Abs. 1 S. 2 DVStB).\n\n"
                "Platz 10 bis 2 siehst du hier. Platz 1 – und alle 10 Fehler mit Prüfungsszene und Lösung – im Gratis-PDF.\n\n👉 Link in der Bio",
        hashtags=CTA_HASH, quellen=["§ 28 Abs. 1 S. 2 DVStB", "§ 25 Abs. 2 DVStB"])


def karussell_kein_selbstlaeufer():
    return dict(GEMEINSAM, slot="k2", format="karussell", themaId="lead-kein-selbstlaeufer", themaTitel="Die Mündliche ist kein Selbstläufer",
        figuren={"C": FIG["C"], "D": FIG["D"]},
        folien=[
            {"typ": "cover", "badge": "Was dir keiner sagt", "badgeFarbe": "ROT", "zeilen": ["Die Mündliche:", "kein Selbstläufer"],
             "unter": "3 Zahlen", "teaser": "+ Gratis-PDF",
             "motiv": {"typ": "zahlblock", "zeilen": [["4,15", "ExtraBold", 130], ["Bestehensgrenze", "Bold", 40]]}, "figur": "C:sorge"},
            {"typ": "inhalt", "titel": "Zahl 1: fast jedes dritte", "punkte": [
                ["In fast jedem dritten Protokoll ist mindestens ein Prüfling durchgefallen.", "nein", "ExtraBold", None],
                ["Ausgewertet: über 400 echte Prüfungsprotokolle aus NRW.", None, "Regular", None]],
             "figur": "D:staunt", "x": 790, "blase": "So viele?"},
            {"typ": "vergleich", "titel": "Zahl 2: 4,5 und 4,15",
             "links": {"kopf": "Zugelassen", "farbe": "GELB", "punkte": [["bis Gesamtnote 4,5 schriftlich", "§ 25 Abs. 2 DVStB"]]},
             "rechts": {"kopf": "Bestanden", "farbe": "GRUEN", "punkte": [["Durchschnitt schriftlich und mündlich höchstens 4,15", "§ 28 Abs. 1 S. 2 DVStB"]]},
             "figur": "C:denkt", "x": 290, "blase": "Moment …"},
            {"typ": "rechnung", "titel": "Zahl 3: die 3,8", "normen": ["§ 28 Abs. 1 S. 2 DVStB"],
             "zeilen": [["Schriftlich", "4,5", "Regular", None], ["Mündlich mindestens", "3,8", "Regular", None],
                        ["Summe", "8,3", "Bold", None], ["geteilt durch zwei", "4,15", "ExtraBold", "GELB"]],
             "extra": ["Mit 4,5 brauchst du mündlich im Schnitt eine 3,8.", "ROT"], "figur": "D:sorge", "x": 790, "blase": "Puh."},
            {"typ": "inhalt", "titel": "Woran es oft scheitert", "punkte": [
                ["Die Frage nicht durchschauen", "nein", "Bold", None], ["Aus dem Kopf statt aus dem Gesetz", "nein", "Bold", None],
                ["Schweigen statt laut denken", "nein", "Bold", None], ["Nicht am Wissen, sondern an vermeidbaren Fehlern.", "warn", "Regular", None]],
             "figur": "C:ernst", "x": 290, "blase": "Vermeidbar!"},
            {"typ": "merke", "oben": ["Die gute Nachricht", "Die Fehler wiederholen sich", "GRUEN"],
             "zeilen": [[["4,5", "a"], [" schriftlich?", None]], [["3,8", "b"], [" mündlich!", None]],
                        [["10 Fehler", "c"], [" kennen,", None]], [["PDF", "d"], [" gratis holen.", None]]],
             "speichern": "Speichern für die Mündliche", "frage": "Mit welcher Vornote gehst du rein?", "teaser": "Weiterwischen: So holst du dir das PDF"},
            schluss("C:froh")],
        caption="Was dir keiner sagt: Die Mündliche ist kein Selbstläufer. 😳\n\n"
                "▸ In fast jedem dritten von über 400 Prüfungsprotokollen ist mindestens ein Prüfling durchgefallen.\n"
                "▸ Zugelassen bist du bis 4,5 (§ 25 Abs. 2 DVStB) – bestanden erst, wenn der Durchschnitt aus schriftlich und mündlich 4,15 nicht übersteigt (§ 28 Abs. 1 S. 2 DVStB).\n"
                "▸ Mit 4,5 brauchst du mündlich im Schnitt eine 3,8.\n\n"
                "Die 10 häufigsten Fehler – mit Lösungen – im Gratis-PDF. 👉 Link in der Bio",
        hashtags=CTA_HASH, quellen=["§ 25 Abs. 2 DVStB", "§ 28 Abs. 1 S. 2 DVStB"])


def karussell_quiz():
    return dict(GEMEINSAM, slot="k3", format="karussell", themaId="lead-quiz-familienheim", themaTitel="Würdest du hier bestehen? Familienheim",
        figuren={"B": FIG["B"], "A": FIG["A"]},
        folien=[
            {"typ": "cover", "badge": "Echte Prüfungsfrage", "badgeFarbe": "WEISS", "zeilen": ["Würdest du", "hier bestehen?"],
             "norm": "§ 13 Abs. 1 Nr. 4a, 4c ErbStG", "unter": "1 Prüferfrage", "teaser": "+ Gratis-PDF",
             "motiv": {"typ": "icon", "name": "tabler:home-question", "farbe": "GELB"}, "figur": "B:fragt"},
            {"typ": "inhalt", "titel": "Die Frage des Prüfers", "punkte": [
                ["Ihr Mandant möchte seiner Tochter das selbst bewohnte Einfamilienhaus übertragen. Was raten Sie?", None, "Bold", None]],
             "figur": "A:fragt", "x": 790, "blase": "Was raten Sie?"},
            {"typ": "vergleich", "titel": "A oder B?",
             "links": {"kopf": "A", "farbe": "ROT", "punkte": [["„Steuerfrei – Familienheim nach § 13 ErbStG.“", None]]},
             "rechts": {"kopf": "B", "farbe": "GRUEN", "punkte": [["„Schenkung oder Erbfall? Wie groß ist das Haus?“", None]]},
             "figur": "B:denkt", "x": 290, "blase": "Hmm …"},
            {"typ": "inhalt", "titel": "Auflösung: B", "punkte": [
                ["Schenkung an ein Kind: nicht befreit. Nr. 4a gilt nur für Ehegatten und Lebenspartner.", "nein", "Bold", "§ 13 Abs. 1 Nr. 4a ErbStG"],
                ["Erbfall: Befreiung möglich, wenn das Kind selbst einzieht – bis 200 m² Wohnfläche.", "ok", "Regular", "§ 13 Abs. 1 Nr. 4c ErbStG"]],
             "figur": "A:erklaert", "x": 790, "blase": "Erst fragen!"},
            {"typ": "inhalt", "titel": "Warum das so wichtig ist", "punkte": [
                ["„Keine Rückfragen zum Sachverhalt“ gehört zu den 10 häufigsten Fehlern der Mündlichen.", "warn", "Bold", None],
                ["Gefunden in über 400 echten Prüfungsprotokollen.", None, "Regular", None]],
             "figur": "B:ernst", "x": 290, "blase": "Kenn ich."},
            {"typ": "merke", "oben": ["Unvollständiger Sachverhalt", "ist oft Absicht", "GELB"],
             "zeilen": [[["Erst", "a"], [" fragen,", None]], [["dann", "b"], [" prüfen:", None]], [["Kind", "c"], [" nur im Erbfall,", None]], [["200 m²", "d"], [" Grenze.", None]]],
             "speichern": "Speichern für die Mündliche", "frage": "A oder B? Schreib's in die Kommentare", "teaser": "Weiterwischen: So holst du dir das PDF"},
            schluss("B:froh")],
        caption="Würdest du hier bestehen? 🤔 Prüferfrage: Der Mandant will seiner Tochter das selbst bewohnte Einfamilienhaus übertragen.\n\n"
                "▸ Schenkung zu Lebzeiten an ein Kind: keine Befreiung – § 13 Abs. 1 Nr. 4a ErbStG gilt nur für Ehegatten und Lebenspartner.\n"
                "▸ Erwerb von Todes wegen: Befreiung nach § 13 Abs. 1 Nr. 4c ErbStG möglich, wenn das Kind selbst einzieht, begrenzt auf 200 m² Wohnfläche.\n\n"
                "Rückfragen zum Sachverhalt gehören zu den 10 häufigsten Fehlern der Mündlichen – alle 10 im Gratis-PDF. 👉 Link in der Bio",
        hashtags=CTA_HASH, quellen=["§ 13 Abs. 1 Nr. 4a ErbStG", "§ 13 Abs. 1 Nr. 4c ErbStG"])


def karussell_drei_saetze():
    return dict(GEMEINSAM, slot="k4", format="karussell", themaId="lead-drei-saetze", themaTitel="3 Sätze, die du in der Mündlichen nie sagen solltest",
        figuren={"D": FIG["D"], "C": FIG["C"]},
        folien=[
            {"typ": "cover", "badge": "Aus über 400 Protokollen", "badgeFarbe": "GELB", "zeilen": ["3 Sätze, die du", "nie sagen solltest"],
             "unter": "mit Lösung", "teaser": "+ Gratis-PDF",
             "motiv": {"typ": "icon", "name": "tabler:message-x", "farbe": "ROT"}, "figur": "D:skeptisch"},
            {"typ": "inhalt", "titel": "Satz 1: „Keine Ahnung.“", "punkte": [
                ["„Keine Ahnung.“", "nein", "ExtraBold", None],
                ["Besser: beim Grundtatbestand einsteigen. Haftungsbescheid ist ein Verwaltungsakt, also Einspruch.", "ok", "Regular", "§ 191 Abs. 1, § 347 AO"]],
             "figur": "C:sorge", "x": 790, "blase": "Lieber laut denken!"},
            {"typ": "inhalt", "titel": "Satz 2: „Weil Ausland.“", "punkte": [
                ["„Das ist steuerfrei, weil es ins Ausland geht.“", "nein", "ExtraBold", None],
                ["Besser: innergemeinschaftliche Lieferung – steuerfrei, wenn die Voraussetzungen erfüllt sind.", "ok", "Regular", "§ 4 Nr. 1 Buchst. b, § 6a UStG"]],
             "figur": "D:denkt", "x": 290, "blase": "Fachbegriff?"},
            {"typ": "inhalt", "titel": "Satz 3: „Ich glaube …“", "punkte": [
                ["„Ich glaube, vier Jahre.“", "nein", "ExtraBold", None],
                ["Besser: erst die Norm. Festsetzungsfrist vier Jahre, Beginn nach § 170 AO.", "ok", "Regular", "§ 169 Abs. 2 S. 1 Nr. 2 AO"]],
             "figur": "C:erklaert", "x": 790, "blase": "Norm zuerst!"},
            {"typ": "inhalt", "titel": "Warum das gefährlich ist", "punkte": [
                ["Vortrag und jede Runde werden gesondert bewertet – am Ende zählt der Durchschnitt.", "warn", "Bold", "§ 27 Abs. 1, § 28 Abs. 1 S. 2 DVStB"],
                ["Bestanden erst bei 4,15.", "nein", "Bold", None]],
             "figur": "D:ernst", "x": 290, "blase": "Jede Runde zählt."},
            {"typ": "merke", "oben": ["Das waren 3 von 10", "Alle 10 Fehler: Gratis-PDF · Link in der Bio", "GELB"],
             "zeilen": [[["Laut", "a"], [" denken,", None]], [["Fachbegriff", "b"], [" nennen,", None]], [["Norm", "c"], [" zuerst,", None]], [["nie", "d"], [" schweigen.", None]]],
             "speichern": "Speichern für die Mündliche", "frage": "Welchen Satz hast du schon gesagt?", "teaser": "Weiterwischen: So holst du dir das PDF"},
            schluss("D:froh")],
        caption="3 Sätze, die du in der Mündlichen nie sagen solltest. 🙊 Gefunden in über 400 echten Prüfungsprotokollen.\n\n"
                "▸ „Keine Ahnung.“ – Besser: beim Grundtatbestand einsteigen (Haftungsbescheid = Verwaltungsakt, § 191 Abs. 1 AO; Einspruch, § 347 AO; Frist ein Monat, § 355 Abs. 1 AO).\n"
                "▸ „Steuerfrei, weil Ausland.“ – Besser: innergemeinschaftliche Lieferung (§ 4 Nr. 1 Buchst. b, § 6a UStG).\n"
                "▸ „Ich glaube, vier Jahre.“ – Besser: § 169 Abs. 2 S. 1 Nr. 2 AO, Beginn nach § 170 AO.\n\n"
                "Alle 10 Fehler im Gratis-PDF. 👉 Link in der Bio",
        hashtags=CTA_HASH, quellen=["§ 191 Abs. 1 AO", "§ 347 AO", "§ 355 Abs. 1 AO", "§ 4 Nr. 1 Buchst. b UStG", "§ 6a UStG", "§ 169 Abs. 2 S. 1 Nr. 2 AO", "§ 170 AO", "§ 27 Abs. 1 DVStB", "§ 28 Abs. 1 S. 2 DVStB"])


def reel_keiner_sagt():
    return dict(GEMEINSAM, slot="r1", format="reel", reelTyp="klausurfalle", themaId="lead-reel-keiner-sagt", themaTitel="Was dir keiner über die Mündliche sagt",
        figuren={"A": FIG["A"]},
        sprecher=[
            {"id": "hook", "text": "Was dir keiner sagt: Die Mündliche ist Formsache? Falsch. Sie ist kein Selbstläufer."},
            {"id": "s1", "text": "Wir haben über vierhundert Prüfungsprotokolle ausgewertet. In fast jedem dritten ist mindestens einer durchgefallen."},
            {"id": "s2", "text": "Zugelassen wirst du bis vier Komma fünf. Bestanden hast du erst bei vier Komma eins fünf im Durchschnitt."},
            {"id": "s3", "text": "Mit vier Komma fünf brauchst du in der Mündlichen also im Schnitt eine drei Komma acht."},
            {"id": "cta", "text": "Die zehn häufigsten Fehler gibt es kostenlos zum Download. Link in der Bio."}],
        hook={"zeilen": ["Die Mündliche:", "nur Formsache?"], "pille": "Was dir keiner sagt", "figur": "A/sorge", "name": "Mara",
              "icons": [["tabler:alert-triangle", "GELB", "Falsch"]], "stil": "kippen",
              "richtig": {"label": "Richtig", "text": "kein Selbstläufer", "wort": "Selbstläufer", "farbe": "ROT"},
              "stempel": {"text": "falsch!", "wort": "Falsch"}},
        szenen=[
            {"seg": "s1", "titel": "Über 400 Protokolle", "elemente": [
                {"typ": "zahl", "text": "400+", "size": 150, "wort": "vierhundert"},
                {"typ": "block", "label": "fast jedes dritte", "wert": "Protokoll", "farbe": "GELB", "wort": "dritten", "zs": 100},
                {"typ": "pille", "text": "mind. einer durchgefallen", "farbe": "WEISS", "wort": "durchgefallen"}],
             "icon": ["tabler:file-text", "GELB", "Prüfungsprotokolle"], "sfx": [["stempel", "durchgefallen", 0.7]]},
            {"seg": "s2", "titel": "Zwei Grenzen", "elemente": [
                {"typ": "block", "label": "Zugelassen bis", "wert": "4,5", "farbe": "WEISS", "wort": "Zugelassen", "zs": 120},
                {"typ": "block", "label": "Bestanden bis", "wert": "4,15", "farbe": "GELB", "wort": "Bestanden", "zs": 120},
                {"typ": "norm", "text": "§ 25 Abs. 2, § 28 Abs. 1 S. 2 DVStB", "wort": "Durchschnitt"}],
             "icon": ["tabler:scale", "GELB", "Zugelassen"]},
            {"seg": "s3", "titel": "Die Rechnung", "elemente": [
                {"typ": "text", "text": "(4,5 + 3,8) : 2", "unter": "= 4,15", "wort": "Mit"},
                {"typ": "zahl", "text": "3,8", "size": 170, "wort": "drei"}],
             "sfx": [["rechner", "Schnitt", 0.8]]}],
        merke={"seg": "cta", "zeilen": ["Kein Selbstläufer.", "Die 10 häufigsten", "Fehler als", "Gratis-PDF"],
               "woerter": [None, "zehn", "Fehler", "kostenlos"], "cta": "Link in der Bio", "cta_wort": "Link",
               "hinweis": "Aus über 400 Prüfungsprotokollen"},
        caption="Was dir keiner über die Mündliche sagt. 👀\n\nIn fast jedem dritten von über 400 Prüfungsprotokollen ist mindestens einer durchgefallen. Zugelassen bis 4,5 (§ 25 Abs. 2 DVStB), bestanden erst bei 4,15 im Durchschnitt (§ 28 Abs. 1 S. 2 DVStB). Mit 4,5 brauchst du mündlich im Schnitt eine 3,8.\n\nDie 10 häufigsten Fehler als Gratis-PDF 👉 Link in der Bio",
        hashtags=CTA_HASH, quellen=["§ 25 Abs. 2 DVStB", "§ 28 Abs. 1 S. 2 DVStB"])


def reel_fehler_1():
    return dict(GEMEINSAM, slot="r2", format="reel", reelTyp="klausurfalle", themaId="lead-reel-fehler-1", themaTitel="Fehler Nr. 1 der Mündlichen",
        figuren={"B": FIG["B"]},
        sprecher=[
            {"id": "hook", "text": "Dieser Fehler steht in mehr als jedem zweiten Prüfungsprotokoll. Und er kann dich das Examen kosten."},
            {"id": "s1", "text": "Der Prüfer fragt: Der Mandant hat sein vermietetes Haus nach sieben Jahren verkauft. Was sagen Sie ihm?"},
            {"id": "s2", "text": "Viele fangen irgendwo an. Privatvermögen, Vermietung, Abschreibung. Und der Prüfer wartet."},
            {"id": "s3", "text": "Richtig: Erst die Kernfrage. Paragraf dreiundzwanzig Einkommensteuergesetz. Weniger als zehn Jahre, also steuerpflichtig."},
            {"id": "cta", "text": "Die anderen neun Fehler gibt es kostenlos zum Download. Link in der Bio."}],
        hook={"zeilen": ["Fehler Nr. 1", "der Mündlichen"], "pille": "Über 400 Protokolle", "figur": "B/skeptisch", "name": "Tarek",
              "icons": [["tabler:alert-triangle", "GELB", "Examen"]], "stil": "knall", "stempel": {"text": "jedes 2. Protokoll", "wort": "zweiten"}},
        szenen=[
            {"seg": "s1", "titel": "Die Frage", "elemente": [
                {"typ": "pille", "text": "vermietetes Haus", "farbe": "WEISS", "wort": "vermietetes"},
                {"typ": "block", "label": "verkauft nach", "wert": "7 Jahren", "farbe": "GELB", "wort": "sieben", "zs": 120}],
             "icon": ["tabler:home", "GELB", "Mandant"]},
            {"seg": "s2", "titel": "So geht's schief", "elemente": [
                {"typ": "pille", "text": "Privatvermögen …", "farbe": "WEISS", "wort": "Privatvermögen"},
                {"typ": "pille", "text": "Vermietung …", "farbe": "WEISS", "wort": "Vermietung"},
                {"typ": "pille", "text": "Abschreibung …", "farbe": "WEISS", "wort": "Abschreibung"},
                {"typ": "block", "label": "Prüfer", "wert": "wartet", "farbe": "ROT", "wort": "wartet", "zs": 110}],
             "sfx": [["riss", "wartet", 0.7]]},
            {"seg": "s3", "titel": "So geht's richtig", "elemente": [
                {"typ": "block", "label": "Kernfrage", "wert": "privates Veräußerungsgeschäft", "farbe": "GRUEN", "wort": "Kernfrage", "zs": 70},
                {"typ": "block", "label": "unter 10 Jahren", "wert": "steuerpflichtig", "farbe": "GELB", "wort": "steuerpflichtig", "zs": 90},
                {"typ": "norm", "text": "§ 23 Abs. 1 S. 1 Nr. 1 EStG", "wort": "dreiundzwanzig"}]}],
        merke={"seg": "cta", "zeilen": ["Erst die Kernfrage,", "dann Details.", "Alle 10 Fehler:", "Gratis-PDF"],
               "woerter": [None, "neun", "Fehler", "kostenlos"], "cta": "Link in der Bio", "cta_wort": "Link", "hinweis": "Aus über 400 Prüfungsprotokollen"},
        caption="Fehler Nr. 1 der Mündlichen – er steht in mehr als jedem zweiten von über 400 Prüfungsprotokollen. 😬\n\nPrüferfrage: Vermietetes Haus nach sieben Jahren verkauft? Kernfrage zuerst: privates Veräußerungsgeschäft, § 23 Abs. 1 S. 1 Nr. 1 EStG – zwischen Anschaffung und Veräußerung nicht mehr als zehn Jahre, also steuerpflichtig.\n\nAlle 10 Fehler im Gratis-PDF 👉 Link in der Bio",
        hashtags=CTA_HASH, quellen=["§ 22 Nr. 2 EStG", "§ 23 Abs. 1 S. 1 Nr. 1 EStG"])


def reel_formsache():
    return dict(GEMEINSAM, slot="r3", format="reel", reelTyp="rechnung", themaId="lead-reel-formsache", themaTitel="Mit 4,5 brauchst du eine 3,8",
        figuren={"C": FIG["C"]},
        sprecher=[
            {"id": "hook", "text": "Zugelassen mit vier Komma fünf und denkst, das reicht? Rechne mal nach."},
            {"id": "s1", "text": "Bestanden ist nur, wer im Durchschnitt aus schriftlich und mündlich höchstens vier Komma eins fünf erreicht."},
            {"id": "s2", "text": "Vier Komma fünf plus drei Komma acht, geteilt durch zwei. Macht genau vier Komma eins fünf."},
            {"id": "s3", "text": "Dazu ein Kurzvortrag und sechs Prüfungsrunden. Und in fast jedem dritten Protokoll fällt mindestens einer durch."},
            {"id": "cta", "text": "Die zehn häufigsten Fehler gibt es kostenlos zum Download. Link in der Bio."}],
        hook={"zeilen": ["Mit 4,5", "zur Mündlichen?"], "pille": "Rechne mal nach", "figur": "C/sorge", "name": "Lena",
              "icons": [["tabler:calculator", "GELB", "Rechne"]], "stil": "split",
              "split": [{"label": "Zugelassen", "wert": "4,5", "farbe": "GELB", "wort": "Zugelassen"}, {"label": "Bestanden", "wert": "4,15", "farbe": "GRUEN", "wort": "reicht"}],
              "stempel": {"text": "knapp!", "wort": "nach"}},
        szenen=[
            {"seg": "s1", "titel": "Die Grenze", "elemente": [
                {"typ": "zahl", "text": "4,15", "size": 170, "wort": "höchstens"},
                {"typ": "norm", "text": "§ 28 Abs. 1 S. 2 DVStB", "wort": "Durchschnitt"}],
             "icon": ["tabler:scale", "GELB", "Bestanden"]},
            {"seg": "s2", "titel": "Die Rechnung", "elemente": [
                {"typ": "block", "label": "schriftlich", "wert": "4,5", "farbe": "WEISS", "wort": "Vier", "zs": 110},
                {"typ": "block", "label": "mündlich mindestens", "wert": "3,8", "farbe": "GELB", "wort": "drei", "zs": 110},
                {"typ": "block", "label": "Durchschnitt", "wert": "4,15", "farbe": "GRUEN", "wort": "Macht", "zs": 110}],
             "sfx": [["rechner", "geteilt", 0.8]]},
            {"seg": "s3", "titel": "Kein Selbstläufer", "elemente": [
                {"typ": "pille", "text": "Kurzvortrag + 6 Runden", "farbe": "WEISS", "wort": "Kurzvortrag"},
                {"typ": "block", "label": "fast jedes dritte", "wert": "Protokoll", "farbe": "ROT", "wort": "dritten", "zs": 100},
                {"typ": "norm", "text": "§ 26 Abs. 3 DVStB", "wort": "sechs"}],
             "sfx": [["stempel", "durch", 0.7]]}],
        merke={"seg": "cta", "zeilen": ["Mit 4,5 brauchst du", "mündlich eine 3,8.", "Alle 10 Fehler:", "Gratis-PDF"],
               "woerter": [None, None, "Fehler", "kostenlos"], "cta": "Link in der Bio", "cta_wort": "Link", "hinweis": "Aus über 400 Prüfungsprotokollen"},
        caption="Zugelassen mit 4,5 und denkst, das reicht? 🧮\n\nBestanden ist nur, wer im Durchschnitt aus schriftlicher und mündlicher Note 4,15 nicht übersteigt (§ 28 Abs. 1 S. 2 DVStB). (4,5 + 3,8) : 2 = 4,15. Dazu Kurzvortrag und sechs Prüfungsabschnitte (§ 26 Abs. 3 DVStB) – und in fast jedem dritten von über 400 Protokollen fiel mindestens einer durch.\n\nDie 10 häufigsten Fehler als Gratis-PDF 👉 Link in der Bio",
        hashtags=CTA_HASH, quellen=["§ 25 Abs. 2 DVStB", "§ 26 Abs. 3 DVStB", "§ 28 Abs. 1 S. 2 DVStB"])


KARUSSELLS = [karussell_10_fehler, karussell_kein_selbstlaeufer, karussell_quiz, karussell_drei_saetze]
REELS = [reel_keiner_sagt, reel_fehler_1, reel_formsache]


# ======================================================================== Reel-Serie ab Tag 6: je ein Fehler pro Tag
FIG.update({
    "E": {"name": "Selin", "kopf": "Long", "haut": "#D8A47F", "haar": "#2A1B14", "oberteil": "#9AD48F"},
    "F": {"name": "Ben", "kopf": "Short 1", "haut": "#F0C8A8", "haar": "#8B5A2B", "oberteil": "#F9D56E", "brille": "Glasses 3"},
    "G": {"name": "Amara", "kopf": "Afro", "haut": "#8D5524", "haar": "#1E1410", "oberteil": "#F4A3B5"},
    "H": {"name": "Paul", "kopf": "Medium 1", "haut": "#E8B48F", "haar": "#6B3E26", "oberteil": "#8DB3F2", "bart": "Full 2"},
    "I": {"name": "Nora", "kopf": "Bangs", "haut": "#F3D0B5", "haar": "#C9A15B", "oberteil": "#F9D56E"},
    "J": {"name": "Yusuf", "kopf": "Short 5", "haut": "#B07552", "haar": "#1E1410", "oberteil": "#9AD48F", "bart": "Goatee 1"},
    "K": {"name": "Clara", "kopf": "Gray Medium", "haut": "#F0C8A8", "haar": "#BFBFBF", "oberteil": "#8DB3F2", "brille": "Glasses"},
    "L": {"name": "Emre", "kopf": "Flat Top", "haut": "#C99470", "haar": "#2A1B14", "oberteil": "#F4A3B5"},
    "M": {"name": "Hanna", "kopf": "Twists", "haut": "#8D5524", "haar": "#1E1410", "oberteil": "#9AD48F"},
})
CTA_TEXT = "Alle zehn Fehler gibt es kostenlos zum Download. Link in der Bio."


def serie(slot, rolle, pose, titel, platz, hook, sprecher, szenen, merke_oben, caption, quellen):
    """Reel der Serie „Fehler Nr. x“: Hook, drei Szenen, Abschluss mit Verweis aufs Gratis-PDF."""
    hook = dict(hook, pille=f"Fehler Nr. {platz} von 10", figur=f"{rolle}/{pose}", name=FIG[rolle]["name"])
    return dict(GEMEINSAM, slot=slot, format="reel", reelTyp="klausurfalle", themaId=f"lead-reel-{slot}", themaTitel=titel,
                figuren={rolle: FIG[rolle]}, hook=hook, szenen=szenen,
                sprecher=[{"id": i, "text": t} for i, t in zip(("hook", "s1", "s2", "s3"), sprecher)] + [{"id": "cta", "text": CTA_TEXT}],
                merke={"seg": "cta", "zeilen": merke_oben + ["Alle 10 Fehler:", "Gratis-PDF"], "woerter": [None, None, "Fehler", "kostenlos"],
                       "cta": "Link in der Bio", "cta_wort": "Link", "hinweis": "Aus über 400 Prüfungsprotokollen"},
                caption=caption + "\n\nAlle 10 Fehler der Mündlichen – ausgewertet aus über 400 Prüfungsprotokollen – als Gratis-PDF 👉 Link in der Bio",
                hashtags=CTA_HASH, quellen=quellen)


def reel_platz2():
    return serie("r4", "E", "skeptisch", "Aus dem Kopf statt aus dem Gesetz", 2,
        {"zeilen": ["„Ich glaube,", "vier Jahre.“"], "icons": [["tabler:book", "GELB", "Norm"]], "stil": "kippen",
         "richtig": {"label": "Richtig", "text": "Norm zuerst", "wort": "Norm", "farbe": "GRUEN"}, "stempel": {"text": "Punktabzug!", "wort": "Punkte"}},
        ["Ich glaube, vier Jahre. Mit diesem Satz verschenkst du Punkte. Norm zuerst!",
         "Die Frage lautet: Wie lange kann ein Bescheid noch geändert werden?",
         "Die Festsetzungsfrist beträgt vier Jahre, nach Paragraf hundertneunundsechzig Abgabenordnung.",
         "Sie beginnt mit Ablauf des Jahres, in dem die Erklärung eingereicht wurde. Paragraf hundertsiebzig."],
        [{"seg": "s1", "titel": "Die Frage", "elemente": [{"typ": "pille", "text": "Wie lange änderbar?", "farbe": "WEISS", "wort": "lange"}],
          "icon": ["tabler:help", "GELB", "Frage"]},
         {"seg": "s2", "titel": "Erst die Norm", "elemente": [
             {"typ": "block", "label": "Festsetzungsfrist", "wert": "4 Jahre", "farbe": "GELB", "wort": "Festsetzungsfrist", "zs": 120},
             {"typ": "norm", "text": "§ 169 Abs. 2 S. 1 Nr. 2 AO", "wort": "Paragraf"}]},
         {"seg": "s3", "titel": "Dann der Beginn", "elemente": [
             {"typ": "block", "label": "Beginn", "wert": "Ende des Abgabejahres", "farbe": "WEISS", "wort": "beginnt", "zs": 80},
             {"typ": "norm", "text": "§ 170 Abs. 2 S. 1 Nr. 1 AO", "wort": "hundertsiebzig"}]}],
        ["Norm zuerst,", "dann das Ergebnis."],
        "Fehler Nr. 2 der Mündlichen: aus dem Kopf statt aus dem Gesetz antworten. 📖\n\n„Ich glaube, vier Jahre“ kostet Punkte. Besser: Festsetzungsfrist vier Jahre (§ 169 Abs. 2 S. 1 Nr. 2 AO), Beginn mit Ablauf des Jahres der Abgabe der Erklärung (§ 170 Abs. 2 S. 1 Nr. 1 AO).",
        ["§ 169 Abs. 2 S. 1 Nr. 2 AO", "§ 170 Abs. 2 S. 1 Nr. 1 AO"])


def reel_platz3():
    return serie("r5", "F", "sorge", "Aktuelles nicht auf dem Schirm", 3,
        {"zeilen": ["„Was ist neu?“", "Und du schweigst?"], "icons": [["tabler:news", "GELB", "Klassiker"]], "stil": "split",
         "split": [{"label": "Gefragt", "wert": "Neuerungen", "farbe": "GELB", "wort": "neu"},
                   {"label": "Fehler", "wert": "Platz 3", "farbe": "ROT", "wort": "Platz"}],
         "stempel": {"text": "Klassiker!", "wort": "Klassiker"}},
        ["Was ist neu? Diese Frage ist ein Klassiker in der Mündlichen. Und Platz drei der häufigsten Fehler.",
         "Viele Prüfer starten so: Jeder nennt eine aktuelle Neuerung.",
         "Zum Beispiel die E-Rechnung. Seit zweitausendfünfundzwanzig müssen Unternehmer sie empfangen können.",
         "Für das Ausstellen gibt es Übergangsfristen bis Ende zweitausendsiebenundzwanzig."],
        [{"seg": "s1", "titel": "Der Einstieg", "elemente": [{"typ": "pille", "text": "Jeder nennt eine Neuerung", "farbe": "WEISS", "wort": "Neuerung"}],
          "icon": ["tabler:news", "GELB", "Prüfer"]},
         {"seg": "s2", "titel": "Zum Beispiel", "elemente": [
             {"typ": "block", "label": "seit 2025", "wert": "E-Rechnung empfangen", "farbe": "GELB", "wort": "empfangen", "zs": 80}]},
         {"seg": "s3", "titel": "Ausstellen", "elemente": [
             {"typ": "block", "label": "Übergang", "wert": "bis Ende 2026 / 2027", "farbe": "WEISS", "wort": "Übergangsfristen", "zs": 90},
             {"typ": "norm", "text": "§ 27 Abs. 38 UStG", "wort": "Ausstellen"}]}],
        ["Drei bis fünf", "Neuerungen parat."],
        "Fehler Nr. 3 der Mündlichen: Aktuelles nicht auf dem Schirm. 📰\n\n„Was ist neu?“ ist ein Klassiker. Beispiel E-Rechnung: Seit 2025 müssen inländische Unternehmer E-Rechnungen empfangen können; für die Ausstellung gelten Übergangsregeln bis Ende 2026 bzw. – bei höchstens 800.000 € Vorjahresumsatz – bis Ende 2027 (§ 27 Abs. 38 UStG).",
        ["§ 27 Abs. 38 UStG"])


def reel_platz4():
    return serie("r6", "G", "erklaert", "Fachbegriffe nicht treffen", 4,
        {"zeilen": ["„Steuerfrei,", "weil Ausland.“"], "icons": [["tabler:world", "GELB", "Fachbegriff"]], "stil": "kippen",
         "richtig": {"label": "Fachbegriff", "text": "innergemeinschaftliche Lieferung", "wort": "Fachbegriff", "farbe": "GRUEN"},
         "stempel": {"text": "zu ungenau!", "wort": "ungenau"}},
        ["Steuerfrei, weil Ausland. Viel zu ungenau. Der Prüfer wartet auf den Fachbegriff.",
         "Fachbegriffe nicht treffen ist Platz vier der häufigsten Fehler.",
         "Richtig ist: innergemeinschaftliche Lieferung. Steuerfrei nach Paragraf vier Nummer eins b und sechs a Umsatzsteuergesetz.",
         "Aber nur, wenn der Kunde seine gültige ausländische Umsatzsteuer-Identifikationsnummer verwendet."],
        [{"seg": "s1", "titel": "Platz 4", "elemente": [{"typ": "block", "label": "Fehler", "wert": "Fachbegriffe", "farbe": "ROT", "wort": "Fachbegriffe", "zs": 110}]},
         {"seg": "s2", "titel": "Der Begriff", "elemente": [
             {"typ": "block", "label": "Fachbegriff", "wert": "innergemeinschaftliche Lieferung", "farbe": "GRUEN", "wort": "innergemeinschaftliche", "zs": 64},
             {"typ": "norm", "text": "§ 4 Nr. 1 Buchst. b, § 6a UStG", "wort": "Paragraf"}]},
         {"seg": "s3", "titel": "Die Bedingung", "elemente": [
             {"typ": "pille", "text": "gültige USt-IdNr. verwendet", "farbe": "WEISS", "wort": "gültige"},
             {"typ": "norm", "text": "§ 6a Abs. 1 S. 1 Nr. 4 UStG", "wort": "verwendet"}]}],
        ["Ein Fachbegriff", "statt drei Sätze."],
        "Fehler Nr. 4 der Mündlichen: Fachbegriffe nicht treffen. 🎯\n\n„Steuerfrei, weil Ausland“ reicht nicht. Richtig: innergemeinschaftliche Lieferung, steuerfrei nach § 4 Nr. 1 Buchst. b i. V. m. § 6a UStG – u. a. nur, wenn der Abnehmer eine gültige, ihm von einem anderen Mitgliedstaat erteilte USt-IdNr. verwendet (§ 6a Abs. 1 S. 1 Nr. 4 UStG).",
        ["§ 4 Nr. 1 Buchst. b UStG", "§ 6a Abs. 1 S. 1 Nr. 4 UStG"])


def reel_platz5():
    return serie("r7", "H", "ruhig", "Randgebiete vernachlässigen", 5,
        {"zeilen": ["Welche EU-Organe", "kennst du?"], "icons": [["tabler:building-bank", "GELB", "Randgebiet"]], "stil": "split",
         "split": [{"label": "Viele nennen", "wert": "2", "farbe": "ROT", "wort": "zwei"},
                   {"label": "Richtig", "wert": "7", "farbe": "GRUEN", "wort": "sieben"}],
         "stempel": {"text": "Randgebiet!", "wort": "Randgebiet"}},
        ["Welche Organe der EU kennst du? Viele nennen zwei. Richtig sind sieben. Ein typisches Randgebiet.",
         "Randgebiete wie Europarecht sind Platz fünf der häufigsten Fehler.",
         "Parlament, Europäischer Rat, der Rat, Kommission,",
         "Gerichtshof, Zentralbank und Rechnungshof. Artikel dreizehn des EU-Vertrags."],
        [{"seg": "s1", "titel": "Platz 5", "elemente": [{"typ": "block", "label": "Fehler", "wert": "Randgebiete", "farbe": "ROT", "wort": "Randgebiete", "zs": 110}]},
         {"seg": "s2", "titel": "Die Organe", "elemente": [
             {"typ": "pille", "text": "Europäisches Parlament", "farbe": "WEISS", "wort": "Parlament"},
             {"typ": "pille", "text": "Europäischer Rat", "farbe": "WEISS", "wort": "Europäischer"},
             {"typ": "pille", "text": "Rat", "farbe": "WEISS", "wort": "der"},
             {"typ": "pille", "text": "Kommission", "farbe": "WEISS", "wort": "Kommission"}]},
         {"seg": "s3", "titel": "… und weiter", "elemente": [
             {"typ": "pille", "text": "Gerichtshof der EU", "farbe": "WEISS", "wort": "Gerichtshof"},
             {"typ": "pille", "text": "Europäische Zentralbank", "farbe": "WEISS", "wort": "Zentralbank"},
             {"typ": "pille", "text": "Rechnungshof", "farbe": "WEISS", "wort": "Rechnungshof"},
             {"typ": "norm", "text": "Art. 13 Abs. 1 EUV", "wort": "Artikel"}]}],
        ["Für jedes Randgebiet", "ein Grundgerüst."],
        "Fehler Nr. 5 der Mündlichen: Randgebiete vernachlässigen. 🇪🇺\n\nDie Organe der EU nach Art. 13 Abs. 1 EUV: Europäisches Parlament, Europäischer Rat, Rat, Europäische Kommission, Gerichtshof der EU, Europäische Zentralbank und Rechnungshof.",
        ["Art. 13 Abs. 1 EUV"])


def reel_platz6():
    return serie("r8", "I", "eilt", "Nicht zuhören, wenn andere dran sind", 6,
        {"zeilen": ["„Sehen Sie das", "genauso?“"], "icons": [["tabler:ear", "GELB", "zugehört"]], "stil": "kippen",
         "richtig": {"label": "Lösung", "text": "immer mitdenken", "wort": "mitdenken", "farbe": "GRUEN"},
         "stempel": {"text": "erwischt!", "wort": "erwischt"}},
        ["Sehen Sie das genauso? Wer nicht zugehört hat, ist jetzt erwischt. Also: immer mitdenken.",
         "Fragen werden oft ohne Vorwarnung weitergegeben. Platz sechs der häufigsten Fehler.",
         "Beispiel: Nach Bestandskraft tauchen neue Belege auf. Änderung nach Paragraf hundertdreiundsiebzig?",
         "Stark ergänzt: Zugunsten des Steuerpflichtigen nur ohne grobes Verschulden."],
        [{"seg": "s1", "titel": "Platz 6", "elemente": [
             {"typ": "pille", "text": "ohne Vorwarnung weitergegeben", "farbe": "WEISS", "wort": "Vorwarnung"},
             {"typ": "block", "label": "Fehler", "wert": "Nicht zuhören", "farbe": "ROT", "wort": "sechs", "zs": 100}]},
         {"seg": "s2", "titel": "Die Frage", "elemente": [
             {"typ": "block", "label": "nach Bestandskraft", "wert": "neue Belege", "farbe": "GELB", "wort": "Belege", "zs": 100},
             {"typ": "norm", "text": "§ 173 Abs. 1 Nr. 2 AO", "wort": "Paragraf"}]},
         {"seg": "s3", "titel": "Die Ergänzung", "elemente": [
             {"typ": "block", "label": "zugunsten", "wert": "kein grobes Verschulden", "farbe": "GRUEN", "wort": "grobes", "zs": 76}]}],
        ["Jede Frage ist", "auch deine Frage."],
        "Fehler Nr. 6 der Mündlichen: nicht zuhören, wenn andere dran sind. 👂\n\n„Sehen Sie das genauso?“ – Beispiel: Neue Tatsachen nach Bestandskraft, die zu einer niedrigeren Steuer führen: Änderung nach § 173 Abs. 1 Nr. 2 AO nur, wenn den Steuerpflichtigen kein grobes Verschulden daran trifft, dass sie erst nachträglich bekannt werden.",
        ["§ 173 Abs. 1 Nr. 2 AO"])


def reel_platz7():
    return serie("r9", "J", "sorge", "Schweigen oder „keine Ahnung“ sagen", 7,
        {"zeilen": ["„Keine", "Ahnung.“"], "icons": [["tabler:message-off", "GELB", "nie"]], "stil": "knall",
         "stempel": {"text": "nie sagen!", "wort": "nie"}},
        ["Keine Ahnung. Diesen Satz solltest du in der Mündlichen nie sagen.",
         "Schweigen und Aufgeben ist Platz sieben der häufigsten Fehler.",
         "Fang beim Grundtatbestand an. Ein Haftungsbescheid ist ein Verwaltungsakt.",
         "Also Einspruch, innerhalb eines Monats. Paragraf dreihundertfünfundfünfzig."],
        [{"seg": "s1", "titel": "Platz 7", "elemente": [{"typ": "block", "label": "Fehler", "wert": "Schweigen", "farbe": "ROT", "wort": "Schweigen", "zs": 110}]},
         {"seg": "s2", "titel": "Grundtatbestand", "elemente": [
             {"typ": "block", "label": "Haftungsbescheid", "wert": "Verwaltungsakt", "farbe": "GELB", "wort": "Verwaltungsakt", "zs": 90},
             {"typ": "norm", "text": "§ 191 Abs. 1 AO", "wort": "Haftungsbescheid"}]},
         {"seg": "s3", "titel": "Also", "elemente": [
             {"typ": "block", "label": "Einspruch", "wert": "1 Monat", "farbe": "GRUEN", "wort": "Einspruch", "zs": 110},
             {"typ": "norm", "text": "§ 355 Abs. 1 AO", "wort": "Paragraf"}]}],
        ["Laut denken", "statt schweigen."],
        "Fehler Nr. 7 der Mündlichen: schweigen oder „keine Ahnung“ sagen. 🙊\n\nBesser beim Grundtatbestand einsteigen: Der Haftungsbescheid (§ 191 Abs. 1 AO) ist ein Verwaltungsakt – dagegen Einspruch (§ 347 AO) innerhalb eines Monats nach Bekanntgabe (§ 355 Abs. 1 AO).",
        ["§ 191 Abs. 1 AO", "§ 347 AO", "§ 355 Abs. 1 AO"])


def reel_platz8():
    return serie("r10", "K", "erklaert", "Keine Rückfragen zum Sachverhalt", 8,
        {"zeilen": ["Familienheim an die", "Tochter: steuerfrei?"], "icons": [["tabler:home", "GELB", "schnell"]], "stil": "kippen",
         "richtig": {"label": "Richtig", "text": "erst nachfragen", "wort": "nachfragen", "farbe": "GRUEN"},
         "stempel": {"text": "zu schnell!", "wort": "schnell"}},
        ["Familienheim an die Tochter, steuerfrei? Wer zu schnell antwortet, verliert. Erst nachfragen.",
         "Schenkung zu Lebzeiten an ein Kind: keine Befreiung.",
         "Im Erbfall schon, wenn die Tochter selbst einzieht. Bis zweihundert Quadratmeter.",
         "Keine Rückfragen zum Sachverhalt ist Platz acht der häufigsten Fehler."],
        [{"seg": "s1", "titel": "Schenkung", "elemente": [
             {"typ": "block", "label": "Schenkung an Kind", "wert": "nicht befreit", "farbe": "ROT", "wort": "Schenkung", "zs": 100},
             {"typ": "norm", "text": "§ 13 Abs. 1 Nr. 4a ErbStG", "wort": "Befreiung"}]},
         {"seg": "s2", "titel": "Erbfall", "elemente": [
             {"typ": "block", "label": "Erbfall", "wert": "befreit", "farbe": "GRUEN", "wort": "Erbfall", "zs": 110},
             {"typ": "pille", "text": "bis 200 m² Wohnfläche", "farbe": "WEISS", "wort": "zweihundert"},
             {"typ": "norm", "text": "§ 13 Abs. 1 Nr. 4c ErbStG", "wort": "einzieht"}]},
         {"seg": "s3", "titel": "Platz 8", "elemente": [{"typ": "block", "label": "Fehler", "wert": "Keine Rückfragen", "farbe": "ROT", "wort": "Rückfragen", "zs": 100}]}],
        ["Erst fragen,", "dann prüfen."],
        "Fehler Nr. 8 der Mündlichen: keine Rückfragen zum Sachverhalt. 🏠\n\nFamilienheim an die Tochter: Zu Lebzeiten keine Befreiung (§ 13 Abs. 1 Nr. 4a ErbStG gilt nur für Ehegatten und Lebenspartner). Im Erbfall Befreiung nach § 13 Abs. 1 Nr. 4c ErbStG möglich, wenn das Kind selbst einzieht – bis 200 m² Wohnfläche.",
        ["§ 13 Abs. 1 Nr. 4a ErbStG", "§ 13 Abs. 1 Nr. 4c ErbStG"])


def reel_platz9():
    return serie("r11", "L", "sorge", "Eine schlechte Runde mitnehmen", 9,
        {"zeilen": ["Runde verhauen.", "Alles vorbei?"], "icons": [["tabler:mood-sad", "GELB", "verhauen"]], "stil": "split",
         "split": [{"label": "Gefühl", "wert": "verloren", "farbe": "ROT", "wort": "verhauen"},
                   {"label": "Tatsache", "wert": "neue Chance", "farbe": "GRUEN", "wort": "vorbei"}],
         "stempel": {"text": "nein!", "wort": "Nein"}},
        ["Eine Runde verhauen. Ist jetzt alles vorbei? Nein.",
         "Der Vortrag und jede Runde werden gesondert bewertet.",
         "Am Ende zählt der Durchschnitt. Jede neue Runde ist eine neue Chance.",
         "Eine schlechte Runde mitnehmen ist Platz neun der häufigsten Fehler."],
        [{"seg": "s1", "titel": "Gesondert bewertet", "elemente": [
             {"typ": "block", "label": "gesondert bewertet", "wert": "Vortrag + 6 Runden", "farbe": "GELB", "wort": "gesondert", "zs": 90},
             {"typ": "norm", "text": "§ 27 Abs. 1 DVStB", "wort": "bewertet"}]},
         {"seg": "s2", "titel": "Am Ende", "elemente": [
             {"typ": "block", "label": "zählt", "wert": "der Durchschnitt", "farbe": "WEISS", "wort": "Durchschnitt", "zs": 100},
             {"typ": "pille", "text": "neue Runde, neue Chance", "farbe": "WEISS", "wort": "Chance"}]},
         {"seg": "s3", "titel": "Platz 9", "elemente": [{"typ": "block", "label": "Fehler", "wert": "Runde mitnehmen", "farbe": "ROT", "wort": "neun", "zs": 100}]}],
        ["Abhaken,", "neu starten."],
        "Fehler Nr. 9 der Mündlichen: eine schlechte Runde mitnehmen. 😮‍💨\n\nVortrag und jeder Prüfungsabschnitt werden gesondert bewertet (§ 27 Abs. 1 DVStB); am Ende zählt der Durchschnitt aus schriftlicher und mündlicher Gesamtnote (§ 28 Abs. 1 S. 2 DVStB). Jede Runde ist eine neue Chance.",
        ["§ 27 Abs. 1 DVStB", "§ 28 Abs. 1 S. 2 DVStB"])


def reel_platz10():
    return serie("r12", "M", "erklaert", "Den Kurzvortrag verschenken", 10,
        {"zeilen": ["Drei Themen,", "eine halbe Stunde."], "icons": [["tabler:presentation", "GELB", "Zeitdruck"]], "stil": "split",
         "split": [{"label": "Themen", "wert": "3", "farbe": "GELB", "wort": "Drei"},
                   {"label": "Vorbereitung", "wert": "30 Min.", "farbe": "WEISS", "wort": "halbe"}],
         "stempel": {"text": "Zeitdruck!", "wort": "Zeitdruck"}},
        ["Drei Themen, eine halbe Stunde Vorbereitung. Der Kurzvortrag ist purer Zeitdruck.",
         "Die drei Themen bekommst du eine halbe Stunde vor Prüfungsbeginn.",
         "Wähle das Thema mit der klarsten Gliederung, nicht das bekannteste.",
         "Gliederung ansagen, Blickkontakt halten. Den Vortrag verschenken ist Platz zehn der häufigsten Fehler."],
        [{"seg": "s1", "titel": "Die Regel", "elemente": [
             {"typ": "block", "label": "3 Themen", "wert": "30 Min. vorher", "farbe": "GELB", "wort": "bekommst", "zs": 100},
             {"typ": "norm", "text": "§ 26 Abs. 6 DVStB", "wort": "Prüfungsbeginn"}]},
         {"seg": "s2", "titel": "Die Wahl", "elemente": [
             {"typ": "block", "label": "wähle", "wert": "klarste Gliederung", "farbe": "GRUEN", "wort": "Gliederung", "zs": 90}]},
         {"seg": "s3", "titel": "Der Auftritt", "elemente": [
             {"typ": "pille", "text": "Gliederung ansagen", "farbe": "WEISS", "wort": "ansagen"},
             {"typ": "pille", "text": "Blickkontakt", "farbe": "WEISS", "wort": "Blickkontakt"},
             {"typ": "block", "label": "Fehler", "wert": "Platz 10", "farbe": "ROT", "wort": "zehn", "zs": 100}]}],
        ["Gliederung ansagen,", "Blick halten."],
        "Fehler Nr. 10 der Mündlichen: den Kurzvortrag verschenken. 🎤\n\nDrei Themen zur Wahl, eine halbe Stunde vor Prüfungsbeginn (§ 26 Abs. 6 DVStB). Tipp aus den Protokollen: das Thema mit der klarsten Gliederung wählen, die Gliederung ansagen und Blickkontakt halten.",
        ["§ 26 Abs. 6 DVStB"])


REELS += [reel_platz2, reel_platz3, reel_platz4, reel_platz5, reel_platz6, reel_platz7, reel_platz8, reel_platz9, reel_platz10]
