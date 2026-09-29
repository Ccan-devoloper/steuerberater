/* Reiter „Hausaufgaben PersG" im Campus Personengesellschaften.
   Inhalt und Randpunkte kommen aus den Quell-PDFs, das Layout aus
   HausaufgabenBloecke. */
import React from "react";
import HausaufgabenBloecke from "./HausaufgabenBloecke";
import { persgHausaufgaben, persgHausaufgabenQuelle } from "../data/k3-persg-hausaufgaben.js";
import { persgModule } from "../data/k3-persg-tag1";

const modulById = new Map(persgModule.map((m) => [m.id, m]));

export default function K3PersGHausaufgaben({ onModulOeffnen }) {
  return (
    <HausaufgabenBloecke
      kicker="Klausur 3 · Personengesellschaften · Hausaufgaben"
      titel="PersG-Hausaufgaben 2026/2027"
      lead="Die Hausaufgaben des Tageslehrgangs mit Sachverhalt, Aufgabenstellung und Lösungshinweisen im Wortlaut – die Lösung erst auf Klick, die Punkte an ihrem Absatz."
      quelle={persgHausaufgabenQuelle}
      hausaufgaben={persgHausaufgaben}
      gruppeVon={(ha) => ha.termin}
      gruppeLabel={(ha) => `${ha.termin}. Fachtermin`}
      gruppeAria="Fachtermine"
      karteKicker={(ha) => `${ha.termin}. Fachtermin · ${ha.punkte} Punkte${ha.zeit ? ` · ${ha.zeit}` : ""}`}
      moduleFuer={(ha) => (ha.modulIds || [])
        .map((id) => modulById.get(id))
        .filter(Boolean)
        .map((m) => ({ id: m.id, label: `${m.id} · ${m.title}` }))}
      onModulOeffnen={onModulOeffnen}
      suchePlatzhalter="Name, Norm, Stichwort oder Betrag"
    />
  );
}
