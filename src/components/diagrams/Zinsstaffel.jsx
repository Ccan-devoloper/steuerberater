import React from "react";
import DiagramFrame, { Defs, D } from "./DiagramFrame";

export default function Zinsstaffel() {
  const bars = Array.from({ length: 10 }, (_, i) => 10 - i);
  const max = 10;
  return <DiagramFrame title="Zinsstaffelmethode (arithmetisch-degressiv)" viewBox="0 0 880 280" caption="Nenner 55 bleibt über die gesamte Laufzeit unverändert. Nur der Zähler sinkt jährlich um 1.">
    <Defs />
    <rect x={620} y={20} width={240} height={92} rx="8" fill="var(--paperAlt)" stroke={D.line} strokeWidth="1.5" />
    <text x={640} y={46} fill={D.ink} fontSize="12.5" fontWeight="700" fontFamily="var(--sans)">Summenformel</text>
    <text x={640} y={72} fill={D.navy} fontSize="18" fontFamily="var(--mono)">n / 2 × (n + 1)</text>
    <text x={640} y={96} fill={D.muted} fontSize="12" fontFamily="var(--mono)">n = 10 → 10/2 × 11 = 55</text>
    <line x1={40} y1={220} x2={600} y2={220} stroke={D.line} strokeWidth="1.5" />
    {bars.map((n, i) => {
      const h = (n / max) * 150;
      const x = 50 + i * 55;
      return <g key={n}>
        <rect x={x} y={220 - h} width={38} height={h} rx="3" fill={i === 0 ? D.navy : "var(--soft)"} stroke={D.navy} strokeWidth="1.5" />
        <text x={x + 19} y={214 - h} textAnchor="middle" fill={D.ink} fontSize="11.5" fontFamily="var(--mono)">{n}/55</text>
        <text x={x + 19} y={240} textAnchor="middle" fill={D.muted} fontSize="11.5" fontFamily="var(--mono)">{2025 + i}</text>
      </g>;
    })}
    <text x={40} y={268} fill={D.accent} fontSize="13" fontWeight="700" fontFamily="var(--sans)">2025: 10.000 € × 10/55 = 1.818 € Zinsaufwand → ARAP 8.182 €</text>
  </DiagramFrame>;
}
