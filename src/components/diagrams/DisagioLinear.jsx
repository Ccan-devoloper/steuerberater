import React from "react";
import DiagramFrame, { Defs, D } from "./DiagramFrame";

export default function DisagioLinear() {
  const years = Array.from({ length: 10 }, (_, i) => 2025 + i);
  return <DiagramFrame title="Disagio beim Fälligkeitsdarlehen – lineare Auflösung" viewBox="0 0 880 220" caption="10.000 € Disagio ÷ 10 Jahre = 1.000 € Zinsaufwand pro Jahr. ARAP zum 31.12.2025: 9.000 €.">
    <Defs />
    <line x1={30} y1={140} x2={850} y2={140} stroke={D.line} strokeWidth="1.5" />
    {years.map((y, i) => {
      const x = 50 + i * 80;
      return <g key={y}>
        <rect x={x} y={80} width={54} height={60} rx="4" fill="var(--soft)" stroke={D.navy} strokeWidth="1.5" />
        <text x={x + 27} y={116} textAnchor="middle" fill={D.ink} fontSize="12" fontFamily="var(--mono)">1.000 €</text>
        <line x1={x + 27} y1={140} x2={x + 27} y2={150} stroke={D.line} strokeWidth="1.5" />
        <text x={x + 27} y={168} textAnchor="middle" fill={D.muted} fontSize="12" fontFamily="var(--mono)">{y}</text>
      </g>;
    })}
    <text x={30} y={46} fill={D.ink} fontSize="14" fontWeight="700" fontFamily="var(--sans)">Disagio 10.000 € · Laufzeit 10 Jahre · Tilgung in einer Summe am Ende</text>
    <text x={30} y={202} fill={D.accent} fontSize="13" fontWeight="700" fontFamily="var(--sans)">ARAP 31.12.2025 = 10.000 € − 1.000 € = 9.000 €</text>
  </DiagramFrame>;
}
