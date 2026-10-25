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

GESETZ_28 = {"typ": "gesetz", "titel": "Im Gesetz markieren", "kopf": "§ 28 DVStB (Auszug) · § 25 DVStB (Auszug)",
    "absaetze": [
        ["§ 28 (1)", [["2 Die Prüfung ist bestanden, wenn die", None], ["durch zwei geteilte Summe", "g1"],
                      ["aus den Gesamtnoten für die schriftliche und die mündliche Prüfung die Zahl", None], ["4,15", "r1"], ["nicht übersteigt.", None]]],
        ["§ 25 (2)", [["Der Bewerber ist von der mündlichen Prüfung ausgeschlossen, wenn die Gesamtnote für die schriftliche Prüfung die Zahl", None],
                      ["4,5", "b1"], ["übersteigt; […]", None]]]],
    "notizen": [["Durchschnitt!", "g1"], ["Grenze", "r1"], ["Zulassung", "b1"]],
    "randnotiz": ["Mit 4,5: mündlich", "im Schnitt 3,8"]}


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
                ["Platz 6", None, "Nicht zuhören, wenn andere dran sind"]], "teaser": "Am Ende: Bestehensgrenze im Gesetz"},
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
             "speichern": "Speichern für die Mündliche", "frage": "Welcher Fehler passiert dir?", "teaser": "Weiterwischen: § 28 DVStB markiert"},
            GESETZ_28],
        caption="Die 10 häufigsten Fehler in der mündlichen Steuerberaterprüfung – ausgewertet aus über 400 echten Prüfungsprotokollen. 😬\n\n"
                "Was dir keiner sagt: In fast jedem dritten Protokoll ist mindestens ein Prüfling durchgefallen. Bestanden ist nur, wer im Durchschnitt aus schriftlicher und mündlicher Note höchstens 4,15 erreicht (§ 28 Abs. 1 S. 2 DVStB).\n\n"
                "Platz 10 bis 2 siehst du hier. Platz 1 – und alle 10 Fehler mit Prüfungsszene und Lösung – im Gratis-PDF.\n\n👉 Link in der Bio",
        hashtags=CTA_HASH, quellen=["§ 28 Abs. 1 S. 2 DVStB", "§ 25 Abs. 2 DVStB"])


def karussell_kein_selbstlaeufer():
    return dict(GEMEINSAM, slot="k2", format="karussell", themaId="lead-kein-selbstlaeufer", themaTitel="Die Mündliche ist kein Selbstläufer",
        figuren={"C": FIG["C"], "D": FIG["D"]},
        folien=[
            {"typ": "cover", "badge": "Was dir keiner sagt", "badgeFarbe": "ROT", "zeilen": ["Die Mündliche:", "kein Selbstläufer"],
             "unter": "3 Zahlen", "teaser": "+ § 28 DVStB markiert",
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
             "speichern": "Speichern für die Mündliche", "frage": "Mit welcher Vornote gehst du rein?", "teaser": "Weiterwischen: § 28 DVStB markiert"},
            GESETZ_28],
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
             "norm": "§ 13 Abs. 1 Nr. 4a, 4c ErbStG", "unter": "1 Prüferfrage", "teaser": "+ § 13 ErbStG markiert",
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
             "speichern": "Speichern für die Mündliche", "frage": "A oder B? Schreib's in die Kommentare", "teaser": "Weiterwischen: § 13 ErbStG markiert"},
            {"typ": "gesetz", "titel": "Im Gesetz markieren", "kopf": "§ 13 Abs. 1 Nr. 4c ErbStG (Auszug)",
             "absaetze": [["4c.", [["1 der Erwerb", None], ["von Todes wegen", "r1"], ["des Eigentums oder Miteigentums an einem […] bebauten Grundstück […] durch", None],
                                   ["Kinder", "b1"], ["[…], soweit der Erblasser darin bis zum Erbfall eine Wohnung zu eigenen Wohnzwecken genutzt hat […], die beim Erwerber", None],
                                   ["unverzüglich zur Selbstnutzung", "g1"], ["zu eigenen Wohnzwecken bestimmt ist (Familienheim) und soweit die Wohnfläche der Wohnung", None],
                                   ["200 Quadratmeter", "gr1"], ["nicht übersteigt.", None]]]],
             "notizen": [["nur Erbfall", "r1"], ["Kinder", "b1"], ["selbst einziehen", "g1"], ["Grenze", "gr1"]],
             "randnotiz": ["Schenkung an Kind:", "keine Befreiung"]}],
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
             "unter": "mit Lösung", "teaser": "+ § 355 AO markiert",
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
             "speichern": "Speichern für die Mündliche", "frage": "Welchen Satz hast du schon gesagt?", "teaser": "Weiterwischen: § 355 AO markiert"},
            {"typ": "gesetz", "titel": "Im Gesetz markieren", "kopf": "§ 355 AO Einspruchsfrist (Auszug)",
             "absaetze": [["(1)", [["1 Der Einspruch nach § 347 Abs. 1 Satz 1 ist", None], ["innerhalb eines Monats", "g1"], ["nach", None], ["Bekanntgabe", "b1"], ["des Verwaltungsakts einzulegen.", None]]]],
             "notizen": [["Frist", "g1"], ["Fristbeginn", "b1"]], "randnotiz": ["Auch beim", "Haftungsbescheid"]}],
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
