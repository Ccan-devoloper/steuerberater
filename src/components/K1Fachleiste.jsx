import React from "react";
import "./k1-fachleiste.css";

const FAECHER = [
  { id: "ao", label: "Abgabenordnung", kurz: "AO" },
  { id: "ust", label: "Umsatzsteuer", kurz: "USt" },
  { id: "erbst", label: "Erbschaftsteuer", kurz: "ErbSt" },
];

export default function K1Fachleiste({ aktiv, onWechsel }) {
  return (
    <nav className="k1-fachleiste" aria-label="Fachgebiete in Klausur 1">
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
