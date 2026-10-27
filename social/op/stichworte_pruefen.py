"""Prüft vor dem Merge, ob jedes Reel-Stichwort („wort“) im gesprochenen Text seines Segments vorkommt.

Ein fehlendes Stichwort bricht sonst erst nachts den Render ab (KeyError in reel.py).
Aufruf: python3 social/op/stichworte_pruefen.py [tage/…json …]  (ohne Argument: alle Tage)
"""
import glob
import json
import os
import sys


def woerter(text):
    return [t.strip(",.:!?–-").lower() for t in text.split()]


def fehlende(o, ws, gefunden):
    if isinstance(o, dict):
        w = o.get("wort")
        if isinstance(w, str):
            treffer = sum(1 for t in ws if t.startswith(w.lower()))
            if treffer < o.get("nr", 1):
                gefunden.append(w)
        for v in o.values():
            fehlende(v, ws, gefunden)
    elif isinstance(o, list):
        for v in o:
            fehlende(v, ws, gefunden)


def main():
    dateien = sys.argv[1:] or sorted(glob.glob(os.path.join(os.path.dirname(__file__), "tage", "*.json")))
    fehler = 0
    for fn in dateien:
        tag = json.load(open(fn, encoding="utf-8"))
        for b in tag.get("beitraege", []):
            sp = {s.get("id"): s.get("text", "") for s in b.get("sprecher", []) if isinstance(s, dict)}
            for sz in b.get("szenen", []) or []:
                gefunden = []
                fehlende(sz, woerter(sp.get(sz.get("seg"), "")), gefunden)
                for w in gefunden:
                    fehler += 1
                    print(f"✗ {os.path.basename(fn)} {b.get('slot')} Segment {sz.get('seg')}: Stichwort „{w}“ wird nicht gesprochen")
    print(f"{len(dateien)} Tage geprüft, {fehler} Fehler")
    sys.exit(1 if fehler else 0)


if __name__ == "__main__":
    main()
