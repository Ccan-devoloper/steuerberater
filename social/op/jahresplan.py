"""Rahmenplan der Vorproduktion: je Tag Klausurfolge, Formate, Fächer und Themen aus dem Themenpool.

    node -e "import('./social/src/inhalte.mjs').then(m=>process.stdout.write(JSON.stringify(m.themenpool())))" > pool.json
    python3 social/op/jahresplan.py pool.json benutzt.json 2026-10-04 2026-12-31 > social/op/plan/rahmenplan.json

Regeln (REDAKTION.md): drei Feed-Slots je Tag (b1, b2 Karussell, b3 Reel) decken K1–K3 ab, Folge rotiert täglich
(Anker 29.09.2026 = K3,K1,K2). Fächer innerhalb der Klausur reihum, getrennt nach Karussell und Reel; ein Fach ohne
passendes freies Thema wird übersprungen. Themen frühestens nach 60 Tagen wieder; höhere Priorität zuerst.
"""
import datetime as dt, json, sys

KLAUSUR_FAECHER = {1: ["ao", "ust", "erbst"], 2: ["est", "kst", "gewst", "istr"], 3: ["bilanz", "persg", "umwst"]}
FACHLABEL = {"ao": "Abgabenordnung", "ust": "Umsatzsteuer", "erbst": "Erbschaftsteuer", "est": "Einkommensteuer",
             "kst": "Körperschaftsteuer", "gewst": "Gewerbesteuer", "istr": "Internationales Steuerrecht",
             "bilanz": "Bilanzsteuerrecht", "persg": "Personengesellschaften", "umwst": "Umwandlungssteuerrecht"}
FOLGEN = [[3, 1, 2], [1, 2, 3], [2, 3, 1]]
ANKER = dt.date(2026, 9, 29)
EXAMEN = [dt.date(2026, 10, 6), dt.date(2026, 10, 7), dt.date(2026, 10, 8)]
ENDSPURT_BIS = dt.date(2026, 10, 5)
KURZVORTRAG_AB = dt.date(2026, 11, 1)

# Wochenplan (0 = Montag): Formate für b1, b2; Reel-Typ für b3
NORMAL = {0: ("pruefungsfrage", "schema", "rechnung"), 1: ("rechenweg", "minifall", "gegensatz"),
          2: ("fehlerfalle", "schema", "klausurfalle"), 3: ("spickzettel", "schema", "quizfrage"),
          4: ("minifall", "vergleich", "rechnung"), 5: ("klausurtechnik", "rechenweg", "gegensatz"),
          6: ("wochenrueckblick", "pruefungsfrage", "merksatz")}
ENDSPURT = {0: ("spickzettel", "fehlerfalle", "klausurfalle"), 1: ("rechenweg", "klausurtechnik", "quizfrage"),
            2: ("spickzettel", "fehlerfalle", "rechnung"), 3: ("fehlerfalle", "pruefungsfrage", "klausurfalle"),
            4: ("spickzettel", "klausurtechnik", "quizfrage"), 5: ("spickzettel", "klausurtechnik", "merksatz"),
            6: ("wochenrueckblick", "spickzettel", "quizfrage")}
TYPEN = {"pruefungsfrage": ["modul", "karteikarte", "schema"], "schema": ["schema", "modul"], "rechenweg": ["formel", "modul"],
         "minifall": ["modul", "karteikarte"], "fehlerfalle": ["karteikarte", "modul"], "vergleich": ["begriff", "karteikarte", "modul"],
         "spickzettel": ["schema", "modul"], "klausurtechnik": [], "wochenrueckblick": [], "kurzvortrag": ["modul"],
         "reel": ["formel", "karteikarte", "modul", "schema"], "quiz": ["quiz", "karteikarte"], "story": ["karteikarte", "begriff", "modul"]}
BADGE = {"pruefungsfrage": "Prüfungsfrage", "schema": "Prüfschema", "rechenweg": "Rechenweg", "minifall": "Mini-Fall",
         "fehlerfalle": "Klausurfalle", "vergleich": "Gegenüberstellung", "spickzettel": "Spickzettel",
         "klausurtechnik": "Klausurtechnik", "wochenrueckblick": "Wochenrückblick", "kurzvortrag": "Kurzvortrag",
         "anlass": "Anlass"}
HOOKS = ["split", "kippen", "split", "kippen", "knall"]           # Zittern höchstens jedes fünfte Reel
STORY_ZEITEN = {"s4": "07:07", "s5": "07:09", "s1": "08:30", "s6": "12:14", "s2": "13:30", "s7": "14:40",
                "s8": "17:04", "s3": "19:00", "s9": "19:12"}
PRIO = {"hoch": 0, "mittel": 1, "selten": 2}


def main():
    pool = json.load(open(sys.argv[1]))
    benutzt = {t: dt.date(2026, 10, 3) for t in json.load(open(sys.argv[2]))}
    start, ende = dt.date.fromisoformat(sys.argv[3]), dt.date.fromisoformat(sys.argv[4])
    nach_fach = {}
    for t in pool:
        nach_fach.setdefault(t["fach"], []).append(t)
    for f in nach_fach:
        nach_fach[f].sort(key=lambda t: (PRIO.get(t.get("prioritaet"), 1), t["id"]))
    zeiger = {}            # (klausur, art) -> Index in KLAUSUR_FAECHER

    def frei(t, tag):
        d = benutzt.get(t["id"])
        return d is None or (tag - d).days >= 60

    def waehle(fach, typen, tag):
        for typ in typen:
            for t in nach_fach.get(fach, []):
                if t["typ"] == typ and frei(t, tag):
                    return t
        return None

    def thema_fuer(k, art, typen, tag):
        faecher = KLAUSUR_FAECHER[k]
        i0 = zeiger.get((k, art), 0)
        for s in range(len(faecher)):
            fach = faecher[(i0 + s) % len(faecher)]
            t = waehle(fach, typen, tag) if typen else None
            if t or not typen:
                zeiger[(k, art)] = (i0 + s + 1) % len(faecher)
                if t: benutzt[t["id"]] = tag
                return fach, t
        fach = faecher[i0 % len(faecher)]
        zeiger[(k, art)] = (i0 + 1) % len(faecher)
        return fach, None

    tage, reel_nr, tag = [], 0, start
    while tag <= ende:
        folge = FOLGEN[(tag - ANKER).days % 3]
        wt = tag.weekday()
        tabelle = ENDSPURT if tag <= ENDSPURT_BIS else NORMAL
        f1, f2, reeltyp = tabelle[wt]
        if tag >= KURZVORTRAG_AB and wt in (1, 4):
            f2 = "kurzvortrag"
        eintrag = {"datum": tag.isoformat(), "wochentag": ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"][wt], "klausurfolge": folge,
                   "phase": "endspurt" if tag <= ENDSPURT_BIS else ("pruefung" if tag in EXAMEN else "nachher"),
                   "beitraege": [], "stories": []}
        if tag in EXAMEN:
            nr = EXAMEN.index(tag) + 1
            eintrag["anlass"] = f"Prüfungstag {nr}"
            eintrag["beitraege"] = [
                {"slot": "b1", "zeit": "06:30", "format": "anlass", "klausur": nr, "hinweis": f"Morgen von Prüfungstag {nr}: Ruhe, ein letzter Klausurtipp für heute, keine neuen Inhalte"},
                {"slot": "b2", "zeit": "18:30", "format": "anlass", "klausur": nr, "hinweis": f"Abend nach Tag {nr}: Anerkennung; {'Dauerbrenner für morgen (Tag ' + str(nr + 1) + ')' if nr < 3 else 'geschafft, Ausblick auf Ergebnisse und mündliche Prüfung'}"},
                {"slot": "b3", "zeit": "19:30", "format": "reel", "klausur": nr + 1 if nr < 3 else 3, "reelTyp": "merksatz", "hookStil": "split",
                 "hinweis": "kurzes Reel (≤ 30 s): drei Dauerbrenner für den nächsten Tag" if nr < 3 else "kurzes Reel (≤ 30 s): Geschafft – was jetzt kommt"}]
        else:
            for slot, fmt, k, zeit in (("b1", f1, folge[0], "08:30"), ("b2", f2, folge[1], "13:30")):
                fach, t = thema_fuer(k, "karussell", TYPEN.get(fmt, ["modul"]), tag)
                b = {"slot": slot, "zeit": zeit, "format": fmt, "badge": BADGE.get(fmt), "klausur": k, "fach": fach, "fachLabel": FACHLABEL[fach]}
                if t: b.update(themaId=t["id"], themaTitel=t["titel"], themaTyp=t["typ"])
                else: b["themaFrei"] = "eigenes Thema aus src/data dieses Fachs wählen (nicht im Pool/zuletzt verwendet)"
                eintrag["beitraege"].append(b)
            fach, t = thema_fuer(folge[2], "reel", TYPEN["reel"], tag)
            b = {"slot": "b3", "zeit": "19:00", "format": "reel", "reelTyp": reeltyp, "hookStil": HOOKS[reel_nr % 5], "klausur": folge[2],
                 "fach": fach, "fachLabel": FACHLABEL[fach]}
            reel_nr += 1
            if t: b.update(themaId=t["id"], themaTitel=t["titel"], themaTyp=t["typ"])
            else: b["themaFrei"] = "eigenes Thema aus src/data dieses Fachs wählen"
            eintrag["beitraege"].append(b)
            if tag == dt.date(2026, 10, 5):
                eintrag["anlass"] = "1 Tag bis zum Examen"
                eintrag["beitraege"][0].update(format="anlass", badge="Morgen geht's los", hinweis="Countdown 1 Tag: Abendritual, Materialien, Schlaf; ein letzter Klausurtipp; keine neuen Inhalte")
            if tag == dt.date(2026, 10, 9):
                eintrag["anlass"] = "Tag nach der Prüfung"
                eintrag["beitraege"][0].update(format="anlass", badge="Geschafft", hinweis="Anerkennung, Durchatmen, Ausblick: Ergebnisse, mündliche Prüfung, zweiter Anlauf")
        # Stories: Quizpaar, Norm, Tipp, Merksatz aus wechselnden Klausuren; Teaser zu b1–b3
        if tag not in EXAMEN:
            kq, kn, kt, km = folge[2], folge[0], folge[1], folge[2]
            fq, tq = thema_fuer(kq, "quiz", TYPEN["quiz"], tag)
            fn, tn = thema_fuer(kn, "story", TYPEN["story"], tag)
            ft, tt = thema_fuer(kt, "story", TYPEN["story"], tag)
            fm, tm = thema_fuer(km, "story", TYPEN["story"], tag)
            def st(slot, art, k, fach, t, **x):
                e = {"slot": slot, "zeit": STORY_ZEITEN[slot], "art": art, "klausur": k, "fach": fach, "fachLabel": FACHLABEL.get(fach, "Steuerberaterexamen")}
                if t: e.update(themaId=t["id"], themaTitel=t["titel"])
                e.update(x); return e
            eintrag["stories"] = [st("s4", "frage", kq, fq, tq), st("s5", "antwort", kq, fq, tq),
                                  st("s6", "norm", kn, fn, tn), st("s8", "tipp", kt, ft, tt), st("s9", "merksatz", km, fm, tm)]
        if tag <= dt.date(2026, 10, 5):
            eintrag["stories"].append({"slot": "s7", "zeit": STORY_ZEITEN["s7"], "art": "countdown", "klausur": 0, "fach": None,
                                       "fachLabel": "Steuerberaterexamen", "zahl": (EXAMEN[0] - tag).days})
        elif tag in EXAMEN:
            nr = EXAMEN.index(tag) + 1
            eintrag["stories"] = [{"slot": "s4", "zeit": "06:45", "art": "anlass", "klausur": nr, "hinweis": f"Viel Erfolg an Tag {nr}"},
                                  {"slot": "s7", "zeit": "14:40", "art": "anlass", "klausur": nr, "hinweis": "Halbzeit: kurz durchatmen"}]
        elif wt == 0 and tag >= dt.date(2026, 10, 12):
            eintrag["stories"].append({"slot": "s7", "zeit": STORY_ZEITEN["s7"], "art": "tipp", "klausur": 0, "fach": None,
                                       "fachLabel": "Zweiter Anlauf", "hinweis": "Reihe „Zweiter Anlauf“ (Lernstrategie, keine Verkaufsbotschaft)"})
        elif tag == dt.date(2026, 12, 31):
            eintrag["stories"].append({"slot": "s7", "zeit": STORY_ZEITEN["s7"], "art": "anlass", "klausur": 0, "fach": None,
                                       "fachLabel": "Steuerberaterexamen", "hinweis": "Jahreswechsel: Rechtsstand für das Examen 2027"})
        else:
            eintrag["stories"].append({"slot": "s7", "zeit": STORY_ZEITEN["s7"], "art": "tipp", "klausur": 0, "fach": None,
                                       "fachLabel": "Klausurtechnik", "hinweis": "Lern- oder Klausurtechnik, fachübergreifend"})
        for b in eintrag["beitraege"]:
            sl = {"b1": "s1", "b2": "s2", "b3": "s3"}[b["slot"]]
            eintrag["stories"].append({"slot": sl, "zeit": b["zeit"], "art": "teaser", "klausur": b["klausur"], "beitragSlot": b["slot"]})
        eintrag["stories"].sort(key=lambda s: s["zeit"])
        tage.append(eintrag)
        tag += dt.timedelta(days=1)
    json.dump({"erzeugt": dt.date.today().isoformat(), "tage": tage}, sys.stdout, ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
