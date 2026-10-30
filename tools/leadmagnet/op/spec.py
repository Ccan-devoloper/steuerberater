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
             "zeilen": [[["Platz 1", "a"], [" auflösen,", None]], [["Lösungen", "b"], [" lesen,", None]],
                        [["Checkliste", "c"], [" nutzen,", None]], [["sicher", "d"], [" bestehen.", None]]],
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
            {"id": "s3", "text": "Wie die starke Antwort klingt, die den Prüfer sofort überzeugt? Die steht im Leitfaden."},
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
            {"seg": "s3", "titel": "Und richtig?", "elemente": [
                {"typ": "block", "label": "die starke Antwort", "wert": "im Gratis-PDF", "farbe": "GRUEN", "wort": "starke", "zs": 100},
                {"typ": "pille", "text": "mit Prüfungsszene und Merksatz", "farbe": "WEISS", "wort": "Leitfaden"}]}],
        merke={"seg": "cta", "zeilen": ["Die starke Antwort", "und alle 10 Fehler:", "Gratis-PDF", "über 400 Protokolle"],
               "woerter": [None, "neun", "kostenlos", None], "cta": "Link in der Bio", "cta_wort": "Link", "hinweis": "Aus über 400 Prüfungsprotokollen"},
        caption="Fehler Nr. 1 der Mündlichen – er steht in mehr als jedem zweiten von über 400 Prüfungsprotokollen. 😬\n\nPrüferfrage: Vermietetes Haus nach sieben Jahren verkauft – was sagen Sie dem Mandanten? Viele verlieren sich in Details, und der Prüfer wartet.\n\nWie die starke Antwort klingt – plus alle 10 Fehler mit Prüfungsszenen und Merksätzen – im Gratis-PDF 👉 Link in der Bio",
        hashtags=CTA_HASH, quellen=[])


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
CTA_TEXT = "Wie du ihn sicher vermeidest, mit Prüfungsszene, Merksatz und Checkliste, gibt es kostenlos. Link in der Bio."


def serie(slot, rolle, pose, titel, platz, hook, sprecher, szenen, merke_oben, caption, quellen):
    """Reel der Serie „Fehler Nr. x“: Hook, drei Szenen, Abschluss mit Verweis aufs Gratis-PDF."""
    hook = dict(hook, pille=f"Fehler Nr. {platz} von 10", figur=f"{rolle}/{pose}", name=FIG[rolle]["name"])
    return dict(GEMEINSAM, slot=slot, format="reel", reelTyp="klausurfalle", themaId=f"lead-reel-{slot}", themaTitel=titel,
                figuren={rolle: FIG[rolle]}, hook=hook, szenen=szenen,
                sprecher=[{"id": i, "text": t} for i, t in zip(("hook", "s1", "s2", "s3"), sprecher)] + [{"id": "cta", "text": CTA_TEXT}],
                merke={"seg": "cta", "zeilen": ["So vermeidest du ihn:", "Szene, Merksatz,", "Checkliste", "im Gratis-PDF"], "woerter": [None, "Prüfungsszene", "Checkliste", "kostenlos"],
                       "cta": "Link in der Bio", "cta_wort": "Link", "hinweis": "Aus über 400 Prüfungsprotokollen"},
                caption=caption + "\n\nWie du ihn in der Prüfung sicher vermeidest – mit Prüfungsszene, Merksatz und Checkliste – steht im Gratis-PDF „Die 10 größten Fehler in der Mündlichen“, ausgewertet aus über 400 Prüfungsprotokollen. 👉 Link in der Bio",
                hashtags=CTA_HASH, quellen=quellen)


def reel_platz2():
    return serie("r4", "E", "skeptisch", "Aus dem Kopf statt aus dem Gesetz", 2,
        {"zeilen": ["„Ich glaube,", "vier Jahre.“"], "icons": [["tabler:book", "GELB", "Satz"]], "stil": "kippen",
         "richtig": {"label": "Folge", "text": "Punkte verschenkt", "wort": "verschenkst", "farbe": "ROT"}, "stempel": {"text": "Punktabzug!", "wort": "Punkte"}},
        ["Ich glaube, vier Jahre. Mit diesem Satz verschenkst du Punkte. Und merkst es nicht mal.",
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
        "Fehler Nr. 2 der Mündlichen: aus dem Kopf statt aus dem Gesetz antworten. 📖\n\n„Ich glaube, vier Jahre“ kostet Punkte. Die Rechtslage: Festsetzungsfrist vier Jahre (§ 169 Abs. 2 S. 1 Nr. 2 AO), Beginn mit Ablauf des Jahres der Abgabe der Erklärung (§ 170 Abs. 2 S. 1 Nr. 1 AO).",
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
         "Und viele bereuen hinterher ihre Themenwahl.",
         "Den Vortrag verschenken ist Platz zehn der häufigsten Fehler."],
        [{"seg": "s1", "titel": "Die Regel", "elemente": [
             {"typ": "block", "label": "3 Themen", "wert": "30 Min. vorher", "farbe": "GELB", "wort": "bekommst", "zs": 100},
             {"typ": "norm", "text": "§ 26 Abs. 6 DVStB", "wort": "Prüfungsbeginn"}]},
         {"seg": "s2", "titel": "Die Wahl", "elemente": [
             {"typ": "block", "label": "Themenwahl", "wert": "hinterher bereut", "farbe": "ROT", "wort": "Themenwahl", "zs": 90}]},
         {"seg": "s3", "titel": "Platz 10", "elemente": [
             {"typ": "block", "label": "Fehler", "wert": "Vortrag verschenken", "farbe": "ROT", "wort": "zehn", "zs": 90}]}],
        ["Gliederung ansagen,", "Blick halten."],
        "Fehler Nr. 10 der Mündlichen: den Kurzvortrag verschenken. 🎤\n\nDrei Themen zur Wahl, eine halbe Stunde vor Prüfungsbeginn (§ 26 Abs. 6 DVStB). Viele bereuen hinterher ihre Themenwahl – welches Thema du nehmen solltest und wie du es vorträgst, steht im PDF.",
        ["§ 26 Abs. 6 DVStB"])


REELS += [reel_platz2, reel_platz3, reel_platz4, reel_platz5, reel_platz6, reel_platz7, reel_platz8, reel_platz9, reel_platz10]


# ======================================================================== Test-Reels: „Teste dich“ – Frage, drei Optionen, Auflösung, Nachfrage (≤ 30 s)
TEST_CTA = "Die zehn häufigsten Fehler: kostenlos, Link in der Bio."


def test_reel(slot, rolle, pose, titel, hook, sprecher, optionen, loesung, nachfrage, caption, quellen, frage_wort):
    """Quiz-Reel: Hook mit Prüferfrage, A/B/C mit Countdown, Auflösung mit Norm, Nachfrage des Prüfers, Verweis aufs Gratis-PDF."""
    h = dict(hook, pille="Teste dich · 3 Sekunden", figur=f"{rolle}/{pose}", name=FIG[rolle]["name"], stil="split",
             split=[{"label": "Zeit", "wert": "3 Sek.", "farbe": "GELB", "wort": "Sekunden"},
                    {"label": "Antwort", "wert": "A · B · C", "farbe": "WEISS", "wort": frage_wort}])
    return dict(GEMEINSAM, slot=slot, format="reel", reelTyp="klausurfalle", themaId=f"lead-test-{slot}", themaTitel=titel, zielS=29.0,
                figuren={rolle: FIG[rolle]}, hook=h,
                sprecher=[{"id": i, "text": t} for i, t in zip(("hook", "s1", "s2", "s3"), sprecher)] + [{"id": "cta", "text": TEST_CTA}],
                szenen=[
                    {"seg": "s1", "titel": "A, B oder C?", "elemente": [
                        {"typ": "pille", "text": f"A  {optionen[0][0]}", "farbe": "WEISS", "wort": optionen[0][1]},
                        {"typ": "pille", "text": f"B  {optionen[1][0]}", "farbe": "WEISS", "wort": optionen[1][1]},
                        {"typ": "pille", "text": f"C  {optionen[2][0]}", "farbe": "WEISS", "wort": optionen[2][1]},
                        {"typ": "zahl", "text": "3 … 2 … 1", "size": 110, "wort": "Drei"}],
                     "icon": ["tabler:clock", "GELB", "Drei"], "sfx": [["rechner", "Drei", 0.6]]},
                    {"seg": "s2", "titel": "Auflösung", "elemente": [
                        {"typ": "block", "label": loesung[0], "wert": loesung[1], "farbe": "GRUEN", "wort": loesung[2], "zs": 110},
                        {"typ": "norm", "text": loesung[3], "wort": loesung[4]}],
                     "sfx": [["stempel", loesung[2], 0.6]]},
                    {"seg": "s3", "titel": "Die Nachfrage", "elemente": [
                        {"typ": "pille", "text": nachfrage[0], "farbe": "WEISS", "wort": nachfrage[1]},
                        {"typ": "block", "label": "Und hier", "wert": "fallen viele", "farbe": "ROT", "wort": nachfrage[2], "zs": 100}],
                     "icon": ["tabler:alert-triangle", "GELB", nachfrage[2]]}],
                merke={"seg": "cta", "zeilen": ["Hättest du es gewusst?", "Die 10 häufigsten", "Fehler als", "Gratis-PDF"],
                       "woerter": [None, "zehn", "Fehler", "kostenlos"], "cta": "Link in der Bio", "cta_wort": "Link", "hinweis": "Aus über 400 Prüfungsprotokollen"},
                caption=caption + "\n\nSchreib deine Antwort in die Kommentare 👇\n\nDie 10 häufigsten Fehler der Mündlichen – mit Prüfungsszenen und Lösungen – als Gratis-PDF, ausgewertet aus über 400 Prüfungsprotokollen. 👉 Link in der Bio",
                hashtags=CTA_HASH + ["#steuerberater"], quellen=quellen)


def test_bestehen():
    return test_reel("t1", "A", "sorge", "Teste dich: Welche Note brauchst du mündlich?",
        {"zeilen": ["Schriftlich 4,5.", "Was brauchst du", "mündlich?"], "stempel": {"text": "Teste dich!", "wort": "Teste"}},
        ["Teste dich, drei Sekunden: Schriftlich vier Komma fünf. Welche Note brauchst du mündlich?",
         "A, vier. B, drei Komma acht. C, drei Komma fünf. Drei, zwei, eins.",
         "Richtig ist B. Bestanden erst bei vier Komma eins fünf im Durchschnitt.",
         "Kurzvortrag plus Prüfungsrunden. Eine schlechte Runde reicht."],
        [("4,0", "vier"), ("3,8", "B"), ("3,5", "C")],
        ("mündlich mindestens", "3,8", "Richtig", "§ 28 Abs. 1 S. 2 DVStB", "Durchschnitt"),
        ("Kurzvortrag + Prüfungsrunden", "Kurzvortrag", "schlechte"),
        "Teste dich: Schriftlich 4,5 – welche Note brauchst du in der Mündlichen? 🧮\n\nA) 4,0  B) 3,8  C) 3,5\n\nAuflösung: B. Bestanden ist nur, wer im Durchschnitt aus schriftlicher und mündlicher Note 4,15 nicht übersteigt (§ 28 Abs. 1 S. 2 DVStB). (4,5 + 3,8) : 2 = 4,15.",
        ["§ 28 Abs. 1 S. 2 DVStB"], "Welche")


def test_kleinunternehmer():
    return test_reel("t2", "B", "skeptisch", "Teste dich: Kleinunternehmergrenze",
        {"zeilen": ["Kleinunternehmer:", "Wie hoch ist die", "Vorjahresgrenze?"], "stempel": {"text": "Neu seit 2025!", "wort": "Teste"}},
        ["Teste dich, drei Sekunden: Wie hoch ist die Kleinunternehmergrenze im Vorjahr?",
         "A, zweiundzwanzigtausend. B, fünfundzwanzigtausend. C, fünfzigtausend. Drei, zwei, eins.",
         "Richtig ist B, Paragraf neunzehn Umsatzsteuergesetz.",
         "Nachfrage: Und im laufenden Jahr? Hunderttausend. Hier stocken viele."],
        [("22.000 €", "zweiundzwanzigtausend"), ("25.000 €", "B"), ("50.000 €", "C")],
        ("Vorjahresumsatz bis", "25.000 €", "Richtig", "§ 19 Abs. 1 UStG", "Paragraf"),
        ("laufendes Jahr: 100.000 €", "laufenden", "stocken"),
        "Teste dich: Wie hoch ist seit 2025 die Vorjahresgrenze für Kleinunternehmer? 🧾\n\nA) 22.000 €  B) 25.000 €  C) 50.000 €\n\nAuflösung: B. Vorjahresumsatz höchstens 25.000 €, im laufenden Jahr höchstens 100.000 € (§ 19 Abs. 1 UStG).",
        ["§ 19 Abs. 1 UStG"], "Wie")


def test_gwg():
    return test_reel("t3", "C", "skeptisch", "Teste dich: GWG-Grenze",
        {"zeilen": ["Geringwertiges", "Wirtschaftsgut:", "bis wie viel Euro?"], "stempel": {"text": "Teste dich!", "wort": "Teste"}},
        ["Teste dich, drei Sekunden: Bis wann ist ein Wirtschaftsgut sofort abziehbar?",
         "A, vierhundertzehn. B, achthundert. C, tausend Euro. Drei, zwei, eins.",
         "Richtig ist B, netto, Paragraf sechs Einkommensteuergesetz.",
         "Nachfrage: Und der Sammelposten? Zweihundertfünfzig bis tausend. Hier verwechseln viele."],
        [("410 €", "vierhundertzehn"), ("800 €", "B"), ("1.000 €", "C")],
        ("Sofortabzug bis", "800 € netto", "Richtig", "§ 6 Abs. 2 EStG", "Paragraf"),
        ("Sammelposten: 250 bis 1.000 €", "Sammelposten", "verwechseln"),
        "Teste dich: Bis zu welchen Anschaffungskosten ist ein GWG sofort abziehbar? 💻\n\nA) 410 €  B) 800 €  C) 1.000 €\n\nAuflösung: B – 800 € netto (§ 6 Abs. 2 EStG). Nachfrage-Klassiker: Sammelposten für Wirtschaftsgüter über 250 € bis 1.000 € (§ 6 Abs. 2a EStG).",
        ["§ 6 Abs. 2 EStG", "§ 6 Abs. 2a EStG"], "sofort")


def test_freibetrag_kind():
    return test_reel("t4", "D", "skeptisch", "Teste dich: Freibetrag Kind im ErbStG",
        {"zeilen": ["Erbschaft:", "Freibetrag", "für ein Kind?"], "stempel": {"text": "Teste dich!", "wort": "Teste"}},
        ["Teste dich, drei Sekunden: Ein Kind erbt vom Vater. Wie hoch ist der Freibetrag?",
         "A, zweihunderttausend. B, vierhunderttausend. C, fünfhunderttausend. Drei, zwei, eins.",
         "Richtig ist B, Paragraf sechzehn Erbschaftsteuergesetz.",
         "Nachfrage: Und der Ehegatte? Fünfhunderttausend. Hier verwechseln viele."],
        [("200.000 €", "zweihunderttausend"), ("400.000 €", "B"), ("500.000 €", "C")],
        ("Freibetrag Kind", "400.000 €", "Richtig", "§ 16 Abs. 1 Nr. 2 ErbStG", "Paragraf"),
        ("Ehegatte: 500.000 €", "Ehegatte", "verwechseln"),
        "Teste dich: Ein Kind erbt vom Vater – wie hoch ist der persönliche Freibetrag? 🏡\n\nA) 200.000 €  B) 400.000 €  C) 500.000 €\n\nAuflösung: B – 400.000 € (§ 16 Abs. 1 Nr. 2 ErbStG). Ehegatte: 500.000 € (§ 16 Abs. 1 Nr. 1 ErbStG).",
        ["§ 16 Abs. 1 Nr. 1 ErbStG", "§ 16 Abs. 1 Nr. 2 ErbStG"], "Wie")


def test_gewst_freibetrag():
    return test_reel("t5", "E", "sorge", "Teste dich: Freibetrag Gewerbesteuer",
        {"zeilen": ["Gewerbesteuer:", "Freibetrag für", "Einzelunternehmer?"], "stempel": {"text": "Teste dich!", "wort": "Teste"}},
        ["Teste dich, drei Sekunden: Gewerbesteuer-Freibetrag beim Einzelunternehmer?",
         "A, vierundzwanzigtausendfünfhundert. B, fünftausend. C, keiner. Drei, zwei, eins.",
         "Richtig ist A, Paragraf elf Gewerbesteuergesetz.",
         "Nachfrage: Und bei der GmbH? Keiner. Genau hier patzen viele."],
        [("24.500 €", "vierundzwanzigtausendfünfhundert"), ("5.000 €", "B"), ("keiner", "C")],
        ("Freibetrag", "24.500 €", "Richtig", "§ 11 Abs. 1 S. 3 Nr. 1 GewStG", "Paragraf"),
        ("GmbH: kein Freibetrag", "GmbH", "patzen"),
        "Teste dich: Wie hoch ist der Freibetrag beim Gewerbeertrag eines Einzelunternehmers? 🏪\n\nA) 24.500 €  B) 5.000 €  C) keiner\n\nAuflösung: A – 24.500 € für natürliche Personen und Personengesellschaften (§ 11 Abs. 1 S. 3 Nr. 1 GewStG). Kapitalgesellschaften erhalten keinen Freibetrag.",
        ["§ 11 Abs. 1 S. 3 Nr. 1 GewStG"], "Einzelunternehmer")


REELS += [test_bestehen, test_kleinunternehmer, test_gwg, test_freibetrag_kind, test_gewst_freibetrag]


def test_gbr_vermoegen():
    """Juristische Prüfungsfrage mit Schreckmoment: Vermögen der GbR nach dem MoPeG (seit 1.1.2024)."""
    b = test_reel("t6", "H", "skeptisch", "Teste dich: Wem gehört das Grundstück der GbR?",
        {"zeilen": ["Wem gehört das", "Grundstück", "der GbR?"], "stempel": {"text": "Neu seit 2024!", "wort": "Grundstück"}},
        ["Drei Sekunden: Wem gehört das Grundstück einer GbR?",
         "A, den Gesellschaftern. B, der GbR. C, dem Geschäftsführer. Drei, zwei, eins.",
         "Richtig ist B. Die Gesamthand ist seit zweitausendvierundzwanzig abgeschafft.",
         "Und vor dem Kauf? Ins Gesellschaftsregister. Hier scheitern viele."],
        [("Gesellschafter (Gesamthand)", "Gesellschaftern"), ("die GbR selbst", "B"), ("der Geschäftsführer", "C")],
        ("Eigentümerin ist", "die GbR selbst", "Richtig", "§ 713 BGB", "Gesamthand"),
        ("vorher ins Gesellschaftsregister", "Gesellschaftsregister", "scheitern"),
        "Teste dich: Eine GbR besitzt ein Grundstück – wem gehört es? 🏛️\n\nA) den Gesellschaftern zur gesamten Hand  B) der GbR selbst  C) dem Geschäftsführer\n\n"
        "Auflösung: B. Seit dem MoPeG (1.1.2024) ist das Vermögen Vermögen der Gesellschaft (§ 713 BGB) – die Gesamthand ist Geschichte. "
        "Und die Prüfer-Nachfrage: Ein Grundstück wird für eine GbR nur eingetragen, wenn sie im Gesellschaftsregister steht (§ 47 Abs. 2 GBO, § 707 BGB).\n\n"
        "Wer hier noch mit „Gesamthand“ antwortet, verliert in der Mündlichen sofort Punkte.",
        ["§ 713 BGB", "§ 707 BGB", "§ 47 Abs. 2 GBO"], "Wem")
    b["fachLabel"] = "Mündliche · Zivilrecht"
    return b


REELS += [test_gbr_vermoegen]


# ======================================================================== M-Serie Zivilrecht ab 31.10.: 10 Reels im Stil des GbR-Reels, aber mit wechselnden Hooks,
# Layouts und Effekten (Hook-Stile split/kippen/knall, Layout A/B/C, Countdown, Mythos, Fall, Wahr-oder-falsch, Sende-Aufforderung).
# Leitlinie aus der Recherche (10/2026): Hook in 1–2 s, alle ~7 s ein neuer Reiz, kurz und wiederholbar, „Senden“ anregen.
ZR_HASH = CTA_HASH + ["#zivilrecht", "#steuerberater"]
ZR_CTA = {
    "pdf": "Die zehn häufigsten Fehler der Mündlichen: kostenlos, Link in der Bio.",
    "senden": "Schick das deinem Lernpartner. Und hol dir die zehn häufigsten Fehler, kostenlos, Link in der Bio.",
    "angst": "Wer das nicht weiß, verliert Punkte. Die zehn häufigsten Fehler: kostenlos, Link in der Bio.",
}
ZR_MERKE = {
    "pdf": (["Hättest du es gewusst?", "Die 10 häufigsten", "Fehler als", "Gratis-PDF"], [None, "zehn", "Fehler", "kostenlos"]),
    "senden": (["Schick das deinem", "Lernpartner!", "Die 10 häufigsten Fehler:", "Gratis-PDF"], ["Schick", "Lernpartner", "Fehler", "kostenlos"]),
    "angst": (["Nicht gewusst?", "Kostet Punkte.", "Die 10 häufigsten Fehler:", "Gratis-PDF"], [None, "verliert", "Fehler", "kostenlos"]),
}
ZR_CAPTION_ENDE = "\n\nSchreib deine Antwort in die Kommentare 👇 und schick das Reel deinem Lernpartner.\n\nDie 10 häufigsten Fehler der Mündlichen – mit Prüfungsszenen und Lösungen – als Gratis-PDF, ausgewertet aus über 400 Prüfungsprotokollen. 👉 Link in der Bio"


def zr(slot, rolle, titel, hook, sprecher, szenen, caption, quellen, cta="pdf", layout="A", label="Mündliche · Zivilrecht"):
    zeilen, woerter = ZR_MERKE[cta]
    return dict(GEMEINSAM, fachLabel=label, slot=slot, format="reel", reelTyp="klausurfalle", themaId=f"lead-zr-{slot}", themaTitel=titel,
                zielS=29.0, layout=layout, figuren={rolle: FIG[rolle]}, hook=dict(hook, name=FIG[rolle]["name"]), szenen=szenen,
                sprecher=[{"id": i, "text": t} for i, t in zip(("hook", "s1", "s2", "s3"), sprecher)] + [{"id": "cta", "text": ZR_CTA[cta]}],
                merke={"seg": "cta", "zeilen": zeilen, "woerter": woerter, "cta": "Link in der Bio", "cta_wort": "Link", "hinweis": "Aus über 400 Prüfungsprotokollen"},
                caption=caption + ZR_CAPTION_ENDE, hashtags=ZR_HASH, quellen=quellen)


def zr1_bestaetigungsschreiben():   # Mythos-Hook (kippen): „Schweigen ist keine Zustimmung“
    return zr("z1", "I", "Schweigen ist keine Zustimmung? Nicht immer.",
        {"zeilen": ["Schweigen ist nie", "eine Zustimmung."], "pille": "Mythos der Mündlichen", "figur": "I/skeptisch", "stil": "kippen",
         "icons": [["tabler:mail", "GELB", "Kaufleuten"]],
         "richtig": {"label": "Richtig", "text": "unter Kaufleuten oft doch", "wort": "Kaufleuten", "farbe": "ROT"}, "stempel": {"text": "falsch!", "wort": "Falsch"}},
        ["Schweigen ist nie eine Zustimmung? Falsch. Unter Kaufleuten oft doch.",
         "Nach dem Telefonat kommt ein Bestätigungsschreiben mit anderem Preis. Der Käufer schweigt.",
         "Wer nicht sofort widerspricht, ist gebunden.",
         "Außer es weicht so stark ab, dass keiner Zustimmung erwarten durfte. Dann gilt es nicht."],
        [{"seg": "s1", "titel": "Der Fall", "elemente": [
            {"typ": "pille", "text": "Telefonat", "farbe": "WEISS", "wort": "Telefonat"},
            {"typ": "pille", "text": "Bestätigung mit anderem Preis", "farbe": "GELB", "wort": "anderem"},
            {"typ": "block", "label": "Käufer", "wert": "schweigt", "farbe": "WEISS", "wort": "schweigt", "zs": 110}],
          "icon": ["tabler:mail", "GELB", "Bestätigungsschreiben"]},
         {"seg": "s2", "titel": "Die Regel", "elemente": [
            {"typ": "block", "label": "kein Widerspruch", "wert": "gebunden", "farbe": "ROT", "wort": "gebunden", "zs": 120},
            {"typ": "norm", "text": "§ 346 HGB (Handelsbrauch)", "wort": "widerspricht"}],
          "sfx": [["stempel", "gebunden", 0.6]]},
         {"seg": "s3", "titel": "Die Grenze", "elemente": [
            {"typ": "pille", "text": "krasse Abweichung", "farbe": "WEISS", "wort": "stark"},
            {"typ": "block", "label": "dann", "wert": "nicht bindend", "farbe": "GRUEN", "wort": "gilt", "zs": 110}]}],
        "Schweigen ist nie Zustimmung? In der Mündlichen eine teure Antwort. 📩\n\nKaufmännisches Bestätigungsschreiben: Wer als Kaufmann nicht unverzüglich widerspricht, muss den Inhalt gegen sich gelten lassen (Handelsbrauch, § 346 HGB). Grenze: Das Schreiben weicht so stark vom Besprochenen ab, dass der Absender nicht mit Zustimmung rechnen durfte.",
        ["§ 346 HGB"], cta="angst")


def zr2_taschengeld():   # Quiz A/B/C mit Countdown, Layout B (groß)
    return zr("z2", "J", "Teste dich: Handy auf Raten mit 17",
        {"zeilen": ["17 Jahre,", "Handy auf Raten.", "Wirksam?"], "pille": "Teste dich · 3 Sekunden", "figur": "J/sorge", "stil": "split",
         "split": [{"label": "Zeit", "wert": "3 Sek.", "farbe": "GELB", "wort": "Sekunden"}, {"label": "Antwort", "wert": "A · B · C", "farbe": "WEISS", "wort": "Wirksam"}],
         "stempel": {"text": "Klassiker!", "wort": "Raten"}},
        ["Drei Sekunden: Siebzehn, Handy auf Raten, mit Taschengeld. Wirksam?",
         "A, ja. B, schwebend unwirksam. C, nichtig. Drei, zwei, eins.",
         "Richtig ist B. Der Taschengeldparagraf greift erst, wenn alles bezahlt ist.",
         "Bis zur letzten Rate entscheiden die Eltern."],
        [{"seg": "s1", "titel": "A, B oder C?", "elemente": [
            {"typ": "pille", "text": "A  wirksam (Taschengeld)", "farbe": "WEISS", "wort": "ja"},
            {"typ": "pille", "text": "B  schwebend unwirksam", "farbe": "WEISS", "wort": "B"},
            {"typ": "pille", "text": "C  nichtig", "farbe": "WEISS", "wort": "C"},
            {"typ": "zahl", "text": "3 … 2 … 1", "size": 110, "wort": "Drei"}], "sfx": [["rechner", "Drei", 0.6]]},
         {"seg": "s2", "titel": "Auflösung", "elemente": [
            {"typ": "block", "label": "Richtig", "wert": "B", "farbe": "GRUEN", "wort": "Richtig", "zs": 150},
            {"typ": "norm", "text": "§ 110 BGB", "wort": "Taschengeldparagraf"}], "sfx": [["stempel", "Richtig", 0.6]]},
         {"seg": "s3", "titel": "Der Haken", "elemente": [
            {"typ": "pille", "text": "erst mit letzter Rate", "farbe": "WEISS", "wort": "letzten"},
            {"typ": "block", "label": "bis dahin", "wert": "Eltern entscheiden", "farbe": "ROT", "wort": "Eltern", "zs": 90}]}],
        "Teste dich: 17-Jähriger kauft mit Taschengeld ein Handy auf Raten – wirksam? 📱\n\nA) ja  B) schwebend unwirksam  C) nichtig\n\nAuflösung: B. § 110 BGB greift erst, wenn die Leistung vollständig mit überlassenen Mitteln bewirkt ist – bei Ratenkauf also erst mit der letzten Rate. Bis dahin hängt die Wirksamkeit von der Genehmigung der Eltern ab (§ 108 BGB).",
        ["§ 110 BGB", "§ 108 BGB"], cta="senden", layout="B")


def zr3_beweislast():   # Zahl-Knall: „Seit 2022 nicht mehr 6 Monate“
    return zr("z3", "K", "Beweislastumkehr: 6 Monate? Veraltet.",
        {"zeilen": ["6 Monate", "Beweislastumkehr?"], "pille": "Veraltet seit 2022", "figur": "K/skeptisch", "stil": "knall",
         "stempel": {"text": "veraltet!", "wort": "veraltet"}},
        ["Sechs Monate Beweislastumkehr? Wer das sagt, ist veraltet.",
         "Seit zweitausendzweiundzwanzig gilt beim Verbrauchsgüterkauf ein ganzes Jahr.",
         "Zeigt sich der Mangel im ersten Jahr, wird vermutet, dass er schon bei Übergabe da war.",
         "Und das gilt nur, wenn ein Verbraucher von einem Unternehmer kauft. Nicht unter Privatleuten."],
        [{"seg": "s1", "titel": "Neu", "elemente": [
            {"typ": "zahl", "text": "1 Jahr", "size": 170, "wort": "ganzes"},
            {"typ": "norm", "text": "§ 477 Abs. 1 BGB", "wort": "Verbrauchsgüterkauf"}], "sfx": [["muenzen", "Jahr", 0.4]]},
         {"seg": "s2", "titel": "Die Vermutung", "elemente": [
            {"typ": "pille", "text": "Mangel im 1. Jahr", "farbe": "WEISS", "wort": "Mangel"},
            {"typ": "block", "label": "vermutet", "wert": "schon bei Übergabe", "farbe": "GELB", "wort": "vermutet", "zs": 90}]},
         {"seg": "s3", "titel": "Nur B2C", "elemente": [
            {"typ": "block", "label": "Verbraucher kauft von", "wert": "Unternehmer", "farbe": "GRUEN", "wort": "Verbraucher", "zs": 100},
            {"typ": "pille", "text": "nicht privat an privat", "farbe": "ROT", "wort": "Privatleuten"}]}],
        "6 Monate Beweislastumkehr? Seit 2022 veraltet. ⏳\n\nBeim Verbrauchsgüterkauf wird vermutet, dass ein Mangel, der sich innerhalb eines Jahres seit Gefahrübergang zeigt, schon bei Gefahrübergang vorlag (§ 477 Abs. 1 BGB). Gilt nur, wenn ein Verbraucher von einem Unternehmer kauft (§ 474 BGB).",
        ["§ 477 Abs. 1 BGB", "§ 474 BGB"], cta="angst")


def zr4_prokura():   # POV-Prüfungsszene, Layout C (Figur mit Sprechblase)
    return zr("z4", "L", "Darf der Prokurist das Grundstück verkaufen?",
        {"zeilen": ["Prokurist verkauft", "Firmengrundstück."], "pille": "Prüferfrage", "figur": "L/sorge", "stil": "split",
         "split": [{"label": "Prokura", "wert": "umfassend", "farbe": "GELB", "wort": "Prokurist"}, {"label": "Grundstück?", "wert": "Vorsicht", "farbe": "ROT", "wort": "Darf"}],
         "stempel": {"text": "Falle!", "wort": "Darf"}},
        ["Prokurist verkauft das Firmengrundstück. Darf er das?",
         "Die Prokura ist weit. Sie deckt fast alle Geschäfte eines Handelsgewerbes.",
         "Aber: Grundstücke veräußern oder belasten darf er nur mit besonderer Befugnis.",
         "Und Beschränkungen im Innenverhältnis? Gelten gegenüber Dritten nicht."],
        [{"seg": "s1", "titel": "Grundsatz", "elemente": [
            {"typ": "block", "label": "Prokura", "wert": "fast alles", "farbe": "GELB", "wort": "weit", "zs": 120},
            {"typ": "norm", "text": "§ 49 Abs. 1 HGB", "wort": "Handelsgewerbes"}], "blase": "Fast alles!", "blase_wort": "weit"},
         {"seg": "s2", "titel": "Ausnahme", "elemente": [
            {"typ": "block", "label": "Grundstück", "wert": "nur mit Extra-Befugnis", "farbe": "ROT", "wort": "Grundstücke", "zs": 80},
            {"typ": "norm", "text": "§ 49 Abs. 2 HGB", "wort": "besonderer"}], "blase": "Außer …", "blase_wort": "Aber", "sfx": [["riss", "Aber", 0.5]]},
         {"seg": "s3", "titel": "Nachfrage", "elemente": [
            {"typ": "pille", "text": "interne Grenzen?", "farbe": "WEISS", "wort": "Beschränkungen"},
            {"typ": "block", "label": "gegenüber Dritten", "wert": "unwirksam", "farbe": "GRUEN", "wort": "Dritten", "zs": 100},
            {"typ": "norm", "text": "§ 50 Abs. 1 HGB", "wort": "nicht"}]}],
        "Prokurist verkauft das Firmengrundstück – geht das? 🏢\n\nDie Prokura ermächtigt zu allen Geschäften, die der Betrieb eines Handelsgewerbes mit sich bringt (§ 49 Abs. 1 HGB). Grundstücke veräußern und belasten nur mit besonderer Befugnis (§ 49 Abs. 2 HGB). Beschränkungen im Innenverhältnis sind Dritten gegenüber unwirksam (§ 50 Abs. 1 HGB).",
        ["§ 49 Abs. 1 HGB", "§ 49 Abs. 2 HGB", "§ 50 Abs. 1 HGB"], cta="pdf", layout="C")


def zr5_buergschaft():   # Wahr oder falsch
    return zr("z5", "M", "Wahr oder falsch: Bürgschaft braucht Schriftform",
        {"zeilen": ["Bürgschaft", "braucht immer", "Schriftform."], "pille": "Wahr oder falsch?", "figur": "M/skeptisch", "stil": "split",
         "split": [{"label": "Wahr", "wert": "stimmt", "farbe": "GRUEN", "wort": "Wahr"}, {"label": "Falsch", "wert": "stimmt nicht", "farbe": "ROT", "wort": "falsch"}],
         "stempel": {"text": "Achtung!", "wort": "immer"}},
        ["Wahr oder falsch: Eine Bürgschaft braucht immer Schriftform.",
         "Falsch. Grundsätzlich muss die Erklärung des Bürgen schriftlich sein.",
         "Aber für einen Kaufmann ist die Bürgschaft formfrei, wenn sie ein Handelsgeschäft ist.",
         "Und eine Bürgschaft per E-Mail? Beim Privatbürgen ausdrücklich ausgeschlossen."],
        [{"seg": "s1", "titel": "Grundsatz", "elemente": [
            {"typ": "block", "label": "Bürge erklärt", "wert": "schriftlich", "farbe": "GELB", "wort": "schriftlich", "zs": 110},
            {"typ": "norm", "text": "§ 766 S. 1 BGB", "wort": "Erklärung"}], "sfx": [["stempel", "Falsch", 0.5]]},
         {"seg": "s2", "titel": "Ausnahme", "elemente": [
            {"typ": "block", "label": "Kaufmann", "wert": "formfrei", "farbe": "GRUEN", "wort": "formfrei", "zs": 120},
            {"typ": "norm", "text": "§ 350 HGB", "wort": "Handelsgeschäft"}]},
         {"seg": "s3", "titel": "Bonus", "elemente": [
            {"typ": "pille", "text": "per E-Mail?", "farbe": "WEISS", "wort": "E-Mail"},
            {"typ": "block", "label": "elektronisch", "wert": "ausgeschlossen", "farbe": "ROT", "wort": "ausgeschlossen", "zs": 100},
            {"typ": "norm", "text": "§ 766 S. 2 BGB", "wort": "Privatbürgen"}]}],
        "Wahr oder falsch: Eine Bürgschaft braucht immer Schriftform? ✍️\n\nFalsch. Grundsatz: schriftliche Erteilung der Bürgschaftserklärung (§ 766 S. 1 BGB), elektronische Form ausgeschlossen (§ 766 S. 2 BGB). Aber: Ist die Bürgschaft auf Seiten des Bürgen ein Handelsgeschäft, gilt die Form nicht (§ 350 HGB).",
        ["§ 766 BGB", "§ 350 HGB"], cta="senden", layout="B")


def zr6_gestohlen():   # Fall + Schock-Twist (knall), Layout A
    return zr("z6", "D", "Gutgläubig gekauft – trotzdem weg?",
        {"zeilen": ["Gutgläubig", "gekauft.", "Trotzdem weg?"], "pille": "Prüferfalle Sachenrecht", "figur": "D/sorge", "stil": "knall",
         "stempel": {"text": "Ja!", "wort": "trotzdem"}},
        ["Gutgläubig gekauft, trotzdem nicht Eigentümer? Ja!",
         "Du kaufst ein Fahrrad, hältst den Verkäufer für den Eigentümer. Es war gestohlen.",
         "Bei gestohlenen Sachen ist gutgläubiger Erwerb ausgeschlossen.",
         "Die Ausnahme fragt jeder Prüfer: Geld. Das geht auch gestohlen gutgläubig."],
        [{"seg": "s1", "titel": "Der Fall", "elemente": [
            {"typ": "pille", "text": "Fahrrad gekauft", "farbe": "WEISS", "wort": "Fahrrad"},
            {"typ": "pille", "text": "Verkäufer = Eigentümer?", "farbe": "WEISS", "wort": "Eigentümer"},
            {"typ": "block", "label": "in Wahrheit", "wert": "gestohlen", "farbe": "ROT", "wort": "gestohlen", "zs": 120}],
          "icon": ["tabler:bike", "GELB", "Fahrrad"], "sfx": [["riss", "gestohlen", 0.6]]},
         {"seg": "s2", "titel": "Die Regel", "elemente": [
            {"typ": "block", "label": "gutgläubiger Erwerb", "wert": "ausgeschlossen", "farbe": "ROT", "wort": "ausgeschlossen", "zs": 100},
            {"typ": "norm", "text": "§ 935 Abs. 1 BGB", "wort": "gestohlenen"}]},
         {"seg": "s3", "titel": "Ausnahme", "elemente": [
            {"typ": "zahl", "text": "Geld", "size": 170, "wort": "Geld"},
            {"typ": "norm", "text": "§ 935 Abs. 2 BGB", "wort": "gutgläubig"}], "sfx": [["muenzen", "Geld", 0.5]]}],
        "Gutgläubig gekauft – und trotzdem nicht Eigentümer? 🚲\n\nAn gestohlenen, verlorenen oder sonst abhanden gekommenen Sachen ist gutgläubiger Erwerb ausgeschlossen (§ 935 Abs. 1 BGB). Ausnahme u. a.: Geld und Inhaberpapiere sowie Sachen aus öffentlicher Versteigerung (§ 935 Abs. 2 BGB).",
        ["§ 935 BGB"], cta="angst")


def zr7_schenkung():   # Mythos (kippen): „Schenkung per Handschlag ist unwirksam“
    return zr("z7", "C", "Schenkung ohne Notar unwirksam?",
        {"zeilen": ["Schenkung ohne", "Notar? Unwirksam."], "pille": "Fast richtig ist falsch", "figur": "C/skeptisch", "stil": "kippen",
         "icons": [["tabler:gift", "GELB", "Heilung"]],
         "richtig": {"label": "Richtig", "text": "Heilung durch Vollzug", "wort": "Heilung", "farbe": "GRUEN"}, "stempel": {"text": "nur halb!", "wort": "halb"}},
        ["Schenkung ohne Notar ist unwirksam? Nur halb richtig. Das Zauberwort heißt Heilung.",
         "Das Schenkungsversprechen muss notariell beurkundet werden. Sonst ist es formnichtig.",
         "Aber: Wird die Schenkung trotzdem vollzogen, ist der Formmangel geheilt.",
         "Die Oma gibt dem Enkel also einfach das Geld. Wirksam, ganz ohne Notar."],
        [{"seg": "s1", "titel": "Grundsatz", "elemente": [
            {"typ": "block", "label": "Versprechen", "wert": "notariell", "farbe": "GELB", "wort": "notariell", "zs": 120},
            {"typ": "norm", "text": "§ 518 Abs. 1 BGB", "wort": "Schenkungsversprechen"}]},
         {"seg": "s2", "titel": "Heilung", "elemente": [
            {"typ": "block", "label": "vollzogen", "wert": "Formmangel geheilt", "farbe": "GRUEN", "wort": "geheilt", "zs": 90},
            {"typ": "norm", "text": "§ 518 Abs. 2 BGB", "wort": "vollzogen"}], "sfx": [["stempel", "geheilt", 0.6]]},
         {"seg": "s3", "titel": "Beispiel", "elemente": [
            {"typ": "pille", "text": "Oma übergibt das Geld", "farbe": "WEISS", "wort": "Oma"},
            {"typ": "block", "label": "ohne Notar", "wert": "wirksam", "farbe": "GRUEN", "wort": "Wirksam", "zs": 120}],
          "icon": ["tabler:gift", "GELB", "Enkel"]}],
        "Schenkung ohne Notar unwirksam? Nur halb richtig. 🎁\n\nDas Schenkungsversprechen bedarf der notariellen Beurkundung (§ 518 Abs. 1 BGB). Der Formmangel wird aber durch die Bewirkung der versprochenen Leistung geheilt (§ 518 Abs. 2 BGB).",
        ["§ 518 BGB"], cta="pdf")


def zr8_testament():   # Quiz A/B/C, Layout A, Erbrecht-Schreck
    return zr("z8", "A", "Teste dich: Testament am PC geschrieben",
        {"zeilen": ["Testament am PC,", "eigenhändig", "unterschrieben?"], "pille": "Teste dich · 3 Sekunden", "figur": "A/sorge", "stil": "split",
         "split": [{"label": "Zeit", "wert": "3 Sek.", "farbe": "GELB", "wort": "Sekunden"}, {"label": "Wirksam?", "wert": "A · B · C", "farbe": "WEISS", "wort": "Wirksam"}],
         "stempel": {"text": "Erbrecht!", "wort": "unterschrieben"}},
        ["Drei Sekunden: Testament am Computer, eigenhändig unterschrieben. Wirksam?",
         "A, ja. B, nur mit Datum. C, nein. Drei, zwei, eins.",
         "Richtig ist C. Es muss komplett handgeschrieben sein.",
         "Und beim Ehegattentestament? Einer schreibt, beide unterschreiben."],
        [{"seg": "s1", "titel": "A, B oder C?", "elemente": [
            {"typ": "pille", "text": "A  ja", "farbe": "WEISS", "wort": "ja"},
            {"typ": "pille", "text": "B  nur mit Datum", "farbe": "WEISS", "wort": "B"},
            {"typ": "pille", "text": "C  nein", "farbe": "WEISS", "wort": "C"},
            {"typ": "zahl", "text": "3 … 2 … 1", "size": 110, "wort": "Drei"}],
          "icon": ["tabler:clock", "GELB", "Drei"], "sfx": [["rechner", "Drei", 0.6]]},
         {"seg": "s2", "titel": "Auflösung", "elemente": [
            {"typ": "block", "label": "Testament", "wert": "unwirksam", "farbe": "ROT", "wort": "Richtig", "zs": 120},
            {"typ": "norm", "text": "§ 2247 Abs. 1 BGB", "wort": "handgeschrieben"}], "sfx": [["stempel", "Richtig", 0.6]]},
         {"seg": "s3", "titel": "Die Nachfrage", "elemente": [
            {"typ": "pille", "text": "Ehegattentestament", "farbe": "WEISS", "wort": "Ehegattentestament"},
            {"typ": "block", "label": "einer schreibt", "wert": "beide unterschreiben", "farbe": "GELB", "wort": "beide", "zs": 90},
            {"typ": "norm", "text": "§ 2267 BGB", "wort": "unterschreiben"}]}],
        "Teste dich: Testament am PC getippt, aber eigenhändig unterschrieben – wirksam? 📝\n\nA) ja  B) nur mit Datum  C) nein\n\nAuflösung: C. Das eigenhändige Testament muss vollständig eigenhändig geschrieben und unterschrieben sein (§ 2247 Abs. 1 BGB). Gemeinschaftliches Ehegattentestament: Es genügt, wenn ein Ehegatte es eigenhändig schreibt und beide unterschreiben (§ 2267 BGB).",
        ["§ 2247 Abs. 1 BGB", "§ 2267 BGB"], cta="senden")


def zr9_kommanditist():   # Knall-Hook mit Haftungsschock, Layout B
    return zr("z9", "F", "Kommanditist haftet unbeschränkt?",
        {"zeilen": ["Kommanditist", "haftet", "unbeschränkt?"], "pille": "Gesellschaftsrecht-Falle", "figur": "F/sorge", "stil": "knall",
         "stempel": {"text": "Möglich!", "wort": "möglich"}},
        ["Ein Kommanditist haftet unbeschränkt? Ja, das ist möglich.",
         "Normal haftet er nur bis zur Höhe seiner Einlage.",
         "Aber: Beginnt die KG ihre Geschäfte vor der Eintragung, und er stimmt zu, haftet er für diese Schulden unbeschränkt.",
         "Außer der Gläubiger wusste, dass er nur Kommanditist ist."],
        [{"seg": "s1", "titel": "Normal", "elemente": [
            {"typ": "block", "label": "Haftung bis", "wert": "Einlage", "farbe": "GRUEN", "wort": "Einlage", "zs": 120},
            {"typ": "norm", "text": "§ 171 Abs. 1 HGB", "wort": "Höhe"}]},
         {"seg": "s2", "titel": "Vor Eintragung", "elemente": [
            {"typ": "pille", "text": "Geschäfte vor Eintragung", "farbe": "WEISS", "wort": "Eintragung"},
            {"typ": "block", "label": "mit Zustimmung", "wert": "unbeschränkt", "farbe": "ROT", "wort": "unbeschränkt", "zs": 110},
            {"typ": "norm", "text": "§ 176 Abs. 1 HGB", "wort": "Schulden"}], "sfx": [["stempel", "unbeschränkt", 0.6]]},
         {"seg": "s3", "titel": "Ausnahme", "elemente": [
            {"typ": "block", "label": "Gläubiger wusste", "wert": "nur Kommanditist", "farbe": "GELB", "wort": "wusste", "zs": 90}]}],
        "Ein Kommanditist haftet unbeschränkt? Kann passieren. ⚠️\n\nGrundsatz: Haftung nur bis zur Höhe der Einlage (§ 171 Abs. 1 HGB). Beginnt die KG ihre Geschäfte vor der Eintragung mit Zustimmung des Kommanditisten, haftet er für die bis zur Eintragung begründeten Verbindlichkeiten wie ein Komplementär – es sei denn, der Gläubiger kannte seine Beteiligung als Kommanditist (§ 176 Abs. 1 HGB).",
        ["§ 171 Abs. 1 HGB", "§ 176 Abs. 1 HGB"], cta="angst", layout="B")


def zr10_verjaehrung():   # Rechen-Hook (split mit Zahlen), Layout C
    return zr("z10", "B", "Teste dich: Wann ist die Forderung verjährt?",
        {"zeilen": ["Forderung vom", "März 2023.", "Wann verjährt?"], "pille": "Rechne mit", "figur": "B/skeptisch", "stil": "split",
         "split": [{"label": "entstanden", "wert": "März 2023", "farbe": "WEISS", "wort": "März"}, {"label": "verjährt", "wert": "?", "farbe": "GELB", "wort": "Wann"}],
         "stempel": {"text": "Rechne!", "wort": "Wann"}},
        ["Forderung vom März zweitausenddreiundzwanzig. Wann verjährt sie?",
         "Die Regelverjährung beträgt drei Jahre.",
         "Aber sie beginnt erst mit dem Schluss des Jahres. Also am einunddreißigsten Dezember zweitausenddreiundzwanzig.",
         "Verjährt mit Ablauf des einunddreißigsten Dezember zweitausendsechsundzwanzig. Wer März sagt, verliert Punkte."],
        [{"seg": "s1", "titel": "Die Frist", "elemente": [
            {"typ": "zahl", "text": "3 Jahre", "size": 160, "wort": "drei"},
            {"typ": "norm", "text": "§ 195 BGB", "wort": "Regelverjährung"}], "blase": "Drei Jahre!", "blase_wort": "drei"},
         {"seg": "s2", "titel": "Der Beginn", "elemente": [
            {"typ": "block", "label": "Beginn", "wert": "31.12.2023", "farbe": "GELB", "wort": "Schluss", "zs": 110},
            {"typ": "norm", "text": "§ 199 Abs. 1 BGB", "wort": "Jahres"}], "blase": "Jahresende!", "blase_wort": "Schluss"},
         {"seg": "s3", "titel": "Ergebnis", "elemente": [
            {"typ": "block", "label": "verjährt mit Ablauf", "wert": "31.12.2026", "farbe": "GRUEN", "wort": "Verjährt", "zs": 110},
            {"typ": "pille", "text": "nicht im März 2026!", "farbe": "ROT", "wort": "März"}],
          "blase": "Nicht März!", "blase_wort": "März", "sfx": [["rechner", "Verjährt", 0.6]]}],
        "Teste dich: Forderung entstanden im März 2023 – wann ist sie verjährt? 📅\n\nRegelverjährung drei Jahre (§ 195 BGB), Beginn mit dem Schluss des Jahres, in dem der Anspruch entstanden ist und der Gläubiger Kenntnis erlangt hat (§ 199 Abs. 1 BGB). Verjährt also mit Ablauf des 31.12.2026.",
        ["§ 195 BGB", "§ 199 Abs. 1 BGB"], cta="pdf", layout="C")


ZR_SERIE = [zr1_bestaetigungsschreiben, zr2_taschengeld, zr3_beweislast, zr4_prokura, zr5_buergschaft,
            zr6_gestohlen, zr7_schenkung, zr8_testament, zr9_kommanditist, zr10_verjaehrung]
REELS += ZR_SERIE
