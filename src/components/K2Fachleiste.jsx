import React from "react";
import "./k1-fachleiste.css";

const FAECHER = [
  { id: "kst", label: "Körperschaftsteuer", kurz: "KSt" },
  { id: "est", label: "Einkommensteuer", kurz: "ESt" },
  { id: "gewst", label: "Gewerbesteuer", kurz: "GewSt" },
];

export default function K2Fachleiste({ aktiv, onWechsel }) {
  return (
    <nav className="k1-fachleiste" aria-label="Fachgebiete in Klausur 2">
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
  );
}
