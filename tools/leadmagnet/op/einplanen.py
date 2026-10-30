"""Plant die Zusatzbeiträge zur mündlichen Prüfung als Slot „m1“ in social/op/tage/<datum>.json ein.
Der Workflow „vorproduktion-op“ rendert geänderte Tage nachts nach instagram-assets/vorproduktion, der Bot
veröffentlicht sie zur angegebenen Uhrzeit zusätzlich zu b1–b3.

Uhrzeiten aus der Auswertung von state/insight-snapshots.json (114 Beiträge, 13.09.–25.10.2026):
  Reels: 19 Uhr klar am stärksten (Median 198 Reichweite, zuletzt 400–1.060) – den Slot hat b3.
         Das Zusatz-Reel läuft deshalb um 17:30, mit Abstand vor b3 (12 Uhr war schwach, Median 69).
  Karussells: 16 Uhr am besten (Median 134, meiste Follows je Beitrag), 8:30/13:30 sind belegt (Median ~85).
Aufruf: python3 tools/leadmagnet/op/einplanen.py [--start 2026-10-26] [--entfernen]
Zusatz-Reels laufen zur Prime Time um 19:00, b3 dann um 17:30 (Wunsch Betreiber, 26.10.)."""
import argparse, datetime as dt, json, os, sys

HIER = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HIER)
import spec

TAGE = os.path.join(HIER, "..", "..", "..", "social", "op", "tage")
SLOT = "m1"
ZEIT = {"reel": "19:00", "karussell": "16:00"}
B3_BEI_ZUSATZREEL = "17:30"   # Prime Time 19:00 gehört dem Zusatz-Reel; b3 rückt vor
REIHEN = {"fehler": ["r1", "k1", "r3", "k2", "r2", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r11", "r12"],
          "zivilrecht": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8", "z9", "z10"]}   # ab 31.10.: Prüfungsfragen Zivilrecht

ap = argparse.ArgumentParser()
ap.add_argument("--start", default="2026-10-27")
ap.add_argument("--reihe", default="fehler", choices=sorted(REIHEN))
ap.add_argument("--entfernen", action="store_true", help="m1 aus allen Tagen wieder herausnehmen")
a = ap.parse_args()

alle = {b()["slot"]: b for b in spec.KARUSSELLS + spec.REELS}
start = dt.date.fromisoformat(a.start)
for i, quelle in enumerate(REIHEN[a.reihe]):
    datum = (start + dt.timedelta(days=i)).isoformat()
    pfad = os.path.join(TAGE, datum + ".json")
    if not os.path.exists(pfad):
        print(f"  {datum}: keine Tagesbeschreibung – übersprungen"); continue
    tag = json.load(open(pfad, encoding="utf-8"))
    tag["beitraege"] = [b for b in tag["beitraege"] if b["slot"] != SLOT]
    if not a.entfernen:
        b = alle[quelle]()
        b.pop("zielS", None) if not b.get("zielS") else None
        b["slot"] = SLOT
        b["zeit"] = ZEIT["reel" if b["format"] == "reel" else "karussell"]
        if b["format"] != "reel":
            b["format"] = "pruefungsfrage"          # Feed-Format des Kanals für Karussells
        # Figurennamen dürfen sich am selben Tag nicht wiederholen
        belegt = {f.get("name") for x in tag["beitraege"] for f in (x.get("figuren") or {}).values()}
        ersatz = [n for n in ("Malik", "Ida", "Ruben", "Zoe", "Levin", "Aylin", "Noah", "Frieda") if n not in belegt]
        for f in b["figuren"].values():
            if f["name"] in belegt:
                alt, f["name"] = f["name"], ersatz.pop(0)
                if b.get("hook", {}).get("name") == alt: b["hook"]["name"] = f["name"]
                print(f"  {datum}: Figur {alt} heißt hier {f['name']} (Name am Tag schon vergeben)")
        b["leadmagnetQuelle"] = quelle
        for x in tag["beitraege"]:
            if x["slot"] == "b3":
                x["zeit"] = B3_BEI_ZUSATZREEL if b["format"] == "reel" else "19:00"
        tag["beitraege"].append(b)
    json.dump(tag, open(pfad, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    open(pfad, "a").write("\n")
    print(f"  {datum}: {'entfernt' if a.entfernen else f'{SLOT} = {quelle} um {b['zeit']}'}")
