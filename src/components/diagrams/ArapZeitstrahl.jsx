import React from "react";
import DiagramFrame, { Defs, D } from "./DiagramFrame";

export default function ArapZeitstrahl() {
  return <DiagramFrame title="ARAP – Ausgabe vor dem Stichtag, Aufwand danach" viewBox="0 0 860 220" caption="§ 250 Abs. 1 HGB, § 5 Abs. 5 S. 1 Nr. 1 EStG: Pflicht in Handels- und Steuerbilanz.">
    <Defs />
    <line x1={40} y1={130} x2={820} y2={130} stroke={D.line} strokeWidth="1.5" />
    <line x1={430} y1={60} x2={430} y2={168} stroke={D.accent} strokeWidth="2" strokeDasharray="6 4" />
    <text x={430} y={50} textAnchor="middle" fill={D.accent} fontSize="13" fontWeight="800" fontFamily="var(--mono)">31.12.2025</text>
    <rect x={140} y={96} width={280} height={34} rx="4" fill="var(--soft)" stroke={D.navy} strokeWidth="1.5" />
    <text x={280} y={119} textAnchor="middle" fill={D.ink} fontSize="12.5" fontFamily="var(--mono)">Miete 12/25: 10.000 € Aufwand</text>
    <rect x={440} y={96} width={280} height={34} rx="4" fill="var(--accentSoft)" stroke="var(--accent)" strokeWidth="1.5" />
    <text x={580} y={119} textAnchor="middle" fill={D.ink} fontSize="12.5" fontFamily="var(--mono)">Miete 01/26: 10.000 € ARAP</text>
    <text x={140} y={166} fill={D.muted} fontSize="12" fontFamily="var(--sans)">Zahlung im Dezember 2025 (20.000 €)</text>
    <text x={40} y={202} fill={D.ink} fontSize="13" fontWeight="700" fontFamily="var(--sans)">ARAP 10.000 € an Bank · Auflösung im Folgejahr: Mietaufwand an ARAP</text>
  </DiagramFrame>;
}
