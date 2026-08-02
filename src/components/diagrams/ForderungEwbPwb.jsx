import React from "react";
import DiagramFrame, { Defs, Box, Arrow, D } from "./DiagramFrame";

export default function ForderungEwbPwb() {
  return <DiagramFrame title="Forderungsbewertung – Einzelbewertung vor Pauschalbewertung" viewBox="0 0 880 340" caption="§ 252 Abs. 1 Nr. 3 HGB: EWB zuerst. Die PWB wird nur auf den verbleibenden Nettobestand gerechnet.">
    <Defs />
    <Box x={280} y={16} w={320} h={56} label="Forderungsbestand brutto 595.000 €" tone="navy" />
    <Arrow x1={360} y1={72} x2={170} y2={112} />
    <Arrow x1={440} y1={72} x2={440} y2={112} />
    <Arrow x1={520} y1={72} x2={710} y2={112} />
    <Box x={30} y={114} w={280} h={64} label="zweifelhaft: X-GmbH" sub="3.570 € → EWB" tone="accent" />
    <Box x={330} y={114} w={220} h={64} label="sicher: Stadt Aachen" sub="11.900 € → keine AfA" tone="soft" />
    <Box x={580} y={114} w={270} h={64} label="Restbestand" sub="579.530 € brutto" tone="soft" />
    <Arrow x1={715} y1={178} x2={715} y2={216} />
    <Box x={560} y={218} w={310} h={60} label="÷ 1,19 = 487.000 € netto" sub="keine USt in der PWB" />
    <text x={715} y={306} textAnchor="middle" fill={D.accent} fontSize="14" fontWeight="800" fontFamily="var(--mono)">× 3 % = 14.610 € PWB</text>
    <text x={30} y={224} fill={D.ink} fontSize="12.5" fontWeight="700" fontFamily="var(--sans)">EWB-Buchung</text>
    <text x={30} y={250} fill={D.navy} fontSize="12" fontFamily="var(--mono)">USt 570 € + Aufwand 2.880 €</text>
    <text x={30} y={272} fill={D.navy} fontSize="12" fontFamily="var(--mono)">an Forderung 3.450 €</text>
    <text x={30} y={306} fill={D.muted} fontSize="12" fontFamily="var(--sans)">§ 17 Abs. 2 Nr. 1 UStG beachten</text>
  </DiagramFrame>;
}
