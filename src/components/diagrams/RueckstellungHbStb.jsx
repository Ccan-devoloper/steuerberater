import React from "react";
import DiagramFrame, { Defs, D } from "./DiagramFrame";

export default function RueckstellungHbStb() {
  const rows = [
    ["Erfüllungsbetrag", "künftige Preisverhältnisse", "Preisverhältnisse am Stichtag"],
    ["Betrag", "210.000 €", "190.000 €"],
    ["Ansammlung", "1/10 verursachungsgerecht", "1/10 · § 6 Abs. 1 Nr. 3a d) EStG"],
    ["Teilbetrag", "21.000 €", "19.000 €"],
    ["Abzinsung", "Ø-Marktzins 7 Jahre = 2 %", "5,5 % · Buchst. e)"],
    ["Wertansatz 31.12.", "17.572 €", "11.734 €"],
  ];
  return <DiagramFrame title="Rückstellung mit Abzinsung – HB gegen StB" viewBox="0 0 860 330" caption="§ 253 Abs. 1 S. 2, Abs. 2 S. 1 HGB gegen § 6 Abs. 1 Nr. 3a EStG. Bewertungsvorbehalt: § 5 Abs. 6 EStG.">
    <Defs />
    <rect x={20} y={16} width={820} height={296} rx="8" fill={D.paper} stroke={D.line} strokeWidth="1.5" />
    <rect x={250} y={16} width={295} height={296} fill="var(--paperAlt)" />
    <text x={370} y={44} textAnchor="middle" fill={D.navy} fontSize="15" fontWeight="800" fontFamily="var(--serif)">Handelsbilanz</text>
    <text x={690} y={44} textAnchor="middle" fill={D.navy} fontSize="15" fontWeight="800" fontFamily="var(--serif)">Steuerbilanz</text>
    <line x1={20} y1={56} x2={840} y2={56} stroke={D.line} strokeWidth="1.5" />
    {rows.map((r, i) => {
      const y = 88 + i * 40;
      const last = i === rows.length - 1;
      return <g key={r[0]}>
        <text x={40} y={y} fill={D.muted} fontSize="12.5" fontWeight={last ? 700 : 400} fontFamily="var(--sans)">{r[0]}</text>
        <text x={370} y={y} textAnchor="middle" fill={last ? D.accent : D.ink} fontSize={last ? 15 : 12.5} fontWeight={last ? 800 : 400} fontFamily="var(--mono)">{r[1]}</text>
        <text x={690} y={y} textAnchor="middle" fill={last ? D.accent : D.ink} fontSize={last ? 15 : 12.5} fontWeight={last ? 800 : 400} fontFamily="var(--mono)">{r[2]}</text>
        {!last && <line x1={20} y1={y + 14} x2={840} y2={y + 14} stroke={D.line} strokeWidth="0.75" />}
      </g>;
    })}
  </DiagramFrame>;
}
