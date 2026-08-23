import React from "react";
import K3QuerverweiseEnhancer from "./K3QuerverweiseEnhancer";
import "./k1-fachleiste.css";

const FAECHER = [
  { id: "allgemein", label: "Allgemein", kurz: "Allg" },
  { id: "persg", label: "Personengesellschaften", kurz: "PersG" },
];

export default function K3Fachleiste({ aktiv, onWechsel }) {
  return (
    <>
      <nav className="k1-fachleiste" aria-label="Fachgebiete in Klausur 3">
        {FAECHER.map((fach) => (
          <button
            type="button"
            key={fach.id}
            className="k1-fachleiste__tab"
            aria-current={aktiv === fach.id ? "true" : undefined}
            onClick={() => onWechsel?.(fach.id)}
            title={fach.label}
          >
            <span className="k1-fachleiste__kurz">{fach.kurz}</span>
            <span className="k1-fachleiste__lang">{fach.label}</span>
          </button>
        ))}
      </nav>
      <K3QuerverweiseEnhancer />
    </>
  );
}
