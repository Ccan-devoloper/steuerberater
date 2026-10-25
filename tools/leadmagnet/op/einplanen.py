"""Plant die Zusatzbeiträge zur mündlichen Prüfung als Slot „m1“ in social/op/tage/<datum>.json ein.
Der Workflow „vorproduktion-op“ rendert geänderte Tage nachts nach instagram-assets/vorproduktion, der Bot
veröffentlicht sie zur angegebenen Uhrzeit zusätzlich zu b1–b3.

Uhrzeiten aus der Auswertung von state/insight-snapshots.json (114 Beiträge, 13.09.–25.10.2026):
  Reels: 19 Uhr klar am stärksten (Median 198 Reichweite, zuletzt 400–1.060) – den Slot hat b3.
         Das Zusatz-Reel läuft deshalb um 17:30, mit Abstand vor b3 (12 Uhr war schwach, Median 69).
  Karussells: 16 Uhr am besten (Median 134, meiste Follows je Beitrag), 8:30/13:30 sind belegt (Median ~85).
Aufruf: python3 tools/leadmagnet/op/einplanen.py [--start 2026-10-27] [--entfernen]"""
import argparse, datetime as dt, json, os, sys

HIER = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HIER)
import spec

TAGE = os.path.join(HIER, "..", "..", "..", "social", "op", "tage")
SLOT = "m1"
ZEIT = {"reel": "17:30", "karussell": "16:00"}
REIHENFOLGE = ["r1", "k1", "r3", "k2", "r2", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r11", "r12"]

ap = argparse.ArgumentParser()
ap.add_argument("--start", default="2026-10-27")
ap.add_argument("--entfernen", action="store_true", help="m1 aus allen Tagen wieder herausnehmen")
a = ap.parse_args()

alle = {b()["slot"]: b for b in spec.KARUSSELLS + spec.REELS}
start = dt.date.fromisoformat(a.start)
for i, quelle in enumerate(REIHENFOLGE):
    datum = (start + dt.timedelta(days=i)).isoformat()
    pfad = os.path.join(TAGE, datum + ".json")
    if not os.path.exists(pfad):
        print(f"  {datum}: keine Tagesbeschreibung – übersprungen"); continue
    tag = json.load(open(pfad, encoding="utf-8"))
    tag["beitraege"] = [b for b in tag["beitraege"] if b["slot"] != SLOT]
    if not a.entfernen:
        b = alle[quelle]()
        b["slot"] = SLOT
        b["zeit"] = ZEIT["reel" if b["format"] == "reel" else "karussell"]
        if b["format"] != "reel":
            b["format"] = "pruefungsfrage"          # Feed-Format des Kanals für Karussells
        # Figurennamen dürfen sich am selben Tag nicht wiederholen
        belegt = {f.get("name") for x in tag["beitraege"] for f in (x.get("figuren") or {}).values()}
        doppelt = [f["name"] for f in b["figuren"].values() if f["name"] in belegt]
        assert not doppelt, f"{datum}: Figurenname schon vergeben: {doppelt}"
        b["leadmagnetQuelle"] = quelle
        tag["beitraege"].append(b)
    json.dump(tag, open(pfad, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    open(pfad, "a").write("\n")
    print(f"  {datum}: {'entfernt' if a.entfernen else f'{SLOT} = {quelle} um {b['zeit']}'}")
