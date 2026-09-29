/* Reiter „Hausaufgaben" im Campus Körperschaftsteuer.
   Kurzklausuren des Tageslehrgangs mit Lösung; Layout aus HausaufgabenBloecke. */
import React from "react";
import HausaufgabenBloecke from "./HausaufgabenBloecke";
import { kstHausaufgaben, kstHausaufgabenQuelle } from "../data/kst-hausaufgaben.js";
import { kstModule } from "../data/kst-module";

const modulById = new Map(kstModule.map((m) => [m.id, m]));

export default function KstHausaufgaben({ onModulOeffnen }) {
  return (
    <HausaufgabenBloecke
      kicker="Klausur 2 · Körperschaftsteuer · Hausaufgaben"
      titel="KSt-Hausaufgaben 2026/2027"
      lead="Die Kurzklausuren zu den Fachterminen mit Sachverhalt, Aufgabenstellung und Lösungshinweisen im Wortlaut – die Korrekturbeträge stehen an ihrem Absatz, die Punkte am Rand, die Lösung erst auf Klick."
      quelle={kstHausaufgabenQuelle}
      hausaufgaben={kstHausaufgaben}
      gruppeVon={(ha) => ha.termin}
      gruppeLabel={(ha) => `${ha.termin}. Fachtermin`}
      gruppeAria="Fachtermine"
      karteKicker={(ha) => `${ha.termin}. Fachtermin · ${ha.punkte} Punkte`}
      moduleFuer={(ha) => (ha.modulIds || [])
        .map((id) => modulById.get(id))
        .filter(Boolean)
        .map((m) => ({ id: m.id, label: `Modul ${m.id} · ${m.title}` }))}
      onModulOeffnen={onModulOeffnen}
      suchePlatzhalter="Name, Norm, Stichwort oder Betrag"
    />
  );
}
