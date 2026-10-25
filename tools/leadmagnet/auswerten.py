"""Fasst die codierten Protokolle (JSON je Jahrgang) zusammen: Anzahl, Fehlerhäufigkeiten, Themenanteile.
Aufruf: python3 tools/leadmagnet/auswerten.py <ordner-mit-json>  ->  druckt Übersicht und schreibt zusammenfassung.json"""
import json, glob, os, sys
from collections import Counter

ordner = sys.argv[1]
alle = []
dateien = 0
for pfad in sorted(glob.glob(os.path.join(ordner, "*.json"))):
    if pfad.endswith("zusammenfassung.json"):
        continue
    daten = json.load(open(pfad, encoding="utf-8"))
    dateien += daten.get("dateien_gesamt", 0)
    alle += daten["protokolle"]

lesbar = [p for p in alle if p.get("lesbar")]
n = len(lesbar)
fehler = {k: sum(1 for p in lesbar if p.get(k) is True) for k in [f"F{i}" for i in range(1, 11)]}
themen = {k: round(100 * sum(1 for p in lesbar if p.get(k) is True) / n) for k in sorted({k for p in lesbar for k in p if k.startswith("T_")})}
jahre = Counter(p.get("jahr") for p in lesbar)
orte = Counter(p.get("ort") for p in lesbar)
durch = sum(1 for p in lesbar if p.get("durchgefallen_mind_einer") is True)
vornote = sum(1 for p in lesbar if p.get("vornote_spielte_rolle") is True)

erg = dict(dateien=dateien, codiert=len(alle), lesbar=n, fehler=fehler, themen=themen,
           jahre=dict(sorted(jahre.items(), key=lambda x: str(x[0]))), orte=dict(orte),
           durchgefallen_mind_einer=durch, vornote_spielte_rolle=vornote)
json.dump(erg, open(os.path.join(ordner, "zusammenfassung.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps(erg, ensure_ascii=False, indent=1))
