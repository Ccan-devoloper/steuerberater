import React from "react";
import DiagramFrame, { Defs, Box, Arrow, D } from "./DiagramFrame";

export default function LatenteSteuern() {
  return <DiagramFrame title="Latente Steuern – Entscheidungsdiagramm" viewBox="0 0 760 300" caption="§ 274 Abs. 1 HGB: passive latente Steuern sind Pflicht, aktive latente Steuern nur ein Wahlrecht.">
    <Defs />
    <Box x={250} y={16} w={260} h={54} label="Vergleich HB-Wert / StB-Wert" tone="navy" />
    <Arrow x1={330} y1={70} x2={190} y2={110} />
    <Arrow x1={430} y1={70} x2={570} y2={110} />
    <Box x={40} y={112} w={300} h={58} label="Aktivposten: HB > StB" sub="oder Passivposten: HB < StB" tone="soft" />
    <Box x={420} y={112} w={300} h={58} label="Aktivposten: HB < StB" sub="oder Passivposten: HB > StB" tone="soft" />
    <Arrow x1={190} y1={170} x2={190} y2={206} />
    <Arrow x1={570} y1={170} x2={570} y2={206} />
    <Box x={40} y={208} w={300} h={66} label="Passive latente Steuern" sub="Pflicht · § 274 Abs. 1 S. 1 HGB" />
    <Box x={420} y={208} w={300} h={66} label="Aktive latente Steuern" sub="Wahlrecht · § 274 Abs. 1 S. 2 HGB" tone="accent" />
    <text x={190} y={296} textAnchor="middle" fill={D.muted} fontSize="12" fontFamily="var(--mono)">Steueraufwand an pass. lat. Steuern</text>
    <text x={570} y={296} textAnchor="middle" fill={D.muted} fontSize="12" fontFamily="var(--mono)">akt. lat. Steuern an Steuerertrag</text>
  </DiagramFrame>;
}
