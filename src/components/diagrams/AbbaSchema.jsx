import React from "react";
import DiagramFrame, { Defs, Box, Arrow, D } from "./DiagramFrame";

export default function AbbaSchema() {
  const cols = [
    { x: 20, t: "A", h: "Ansatz", items: ["I. Zurechnung", "§ 246 Abs. 1 S. 2 HGB", "§ 39 AO", "II. Zuordnung", "AV / UV, beweglich?", "notwendig / gewillkürt"] },
    { x: 250, t: "B", h: "Bewertung", items: ["I. Bewertungsmaßstab", "§ 253 HGB, § 6 EStG", "II. AK / HK", "§ 255 Abs. 1, Abs. 2 HGB", "III. Fortführung (AfA)", "IV. Wertansatz 31.12."] },
    { x: 480, t: "B", h: "Buchung", items: ["Soll an Haben", "3 Buchungskreise:", "alle Bereiche", "nur HB", "nur StB", "Gewinnauswirkung"] },
    { x: 710, t: "A", h: "Ausweis / AdB", items: ["Bilanzposten", "§ 266 HGB", "außerbilanzielle", "Korrekturen", "§ 3 Nr. 40, § 3c EStG", "Mehr-/Weniger"] },
  ];
  return <DiagramFrame title="ABBA-Schema" viewBox="0 0 930 300" caption="Ansatz → Bewertung → Buchung → Ausweis / außerbilanzielle Korrekturen. Jeder Einzelsachverhalt wird in dieser Reihenfolge abgearbeitet.">
    <Defs />
    {cols.map((c, i) => <g key={c.h}>
      <rect x={c.x} y={20} width="200" height="255" rx="8" fill={i % 2 ? "var(--paperAlt)" : D.paper} stroke={D.line} strokeWidth="1.5" />
      <rect x={c.x} y={20} width="200" height="46" rx="8" fill={D.navy} />
      <text x={c.x + 16} y={51} fill="var(--onNavy)" fontSize="22" fontWeight="800" fontFamily="var(--serif)">{c.t}</text>
      <text x={c.x + 44} y={50} fill="var(--onNavy)" fontSize="15" fontWeight="700" fontFamily="var(--sans)">{c.h}</text>
      {c.items.map((it, j) => <text key={it + j} x={c.x + 16} y={96 + j * 29} fill={/^[IV]+\.|^3 |^Soll|^außer|^Bilanzposten/.test(it) ? D.ink : D.muted} fontSize="12.5" fontWeight={/^[IV]+\./.test(it) ? 700 : 400} fontFamily={/§/.test(it) ? "var(--mono)" : "var(--sans)"}>{it}</text>)}
      {i < 3 && <Arrow x1={c.x + 204} y1={148} x2={c.x + 226} y2={148} />}
    </g>)}
  </DiagramFrame>;
}
