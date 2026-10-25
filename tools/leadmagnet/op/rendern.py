"""Rendert die Leadmagnet-Beiträge mit dem Kanal-Renderer (social/op) nach social/leadmagnet/kanal/<slot>/.
Aufruf: python3 tools/leadmagnet/op/rendern.py [k1,k2,r1 …]   (ohne Angabe: alle)"""
import os, shutil, sys
HIER = os.path.dirname(os.path.abspath(__file__))
OP = os.path.join(HIER, "..", "..", "..", "social", "op")
sys.path.insert(0, OP); sys.path.insert(0, HIER)
import opkern  # noqa: F401  (setzt Pfade und Ressourcen)
from figuren import Besetzung
from karussell import Karussell
from reel import Reel
import spec

ZIEL = os.path.join(HIER, "..", "..", "..", "social", "leadmagnet", "kanal")
DATUM = "2026-11-01"
nur = set(sys.argv[1].split(",")) if len(sys.argv) > 1 else set()
for bau in spec.KARUSSELLS + spec.REELS:
    b = bau()
    if nur and b["slot"] not in nur: continue
    out = os.path.join(ZIEL, b["slot"])
    if os.path.isdir(out): shutil.rmtree(out)
    os.makedirs(out)
    if b["format"] == "reel":
        dateien = Reel(b, Besetzung(b["figuren"]), out, DATUM).rendern()
    else:
        dateien = Karussell(b, Besetzung(b["figuren"]), out, DATUM).rendern()
    print(b["slot"], len(dateien), "Dateien")
