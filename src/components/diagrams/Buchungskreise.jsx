import React from "react";
import DiagramFrame, { Defs, Box, Arrow, D } from "./DiagramFrame";

export default function Buchungskreise() {
  return <DiagramFrame title="Die drei Buchungskreise" viewBox="0 0 860 220" caption="Jede Buchung erhält ihr Etikett. Ohne Kennzeichnung fehlen in der Klausur Technikpunkte.">
    <Defs />
    <Box x={20} y={24} w={260} h={110} label="alle Bereiche" sub="HB = StB" tone="navy" />
    <Box x={300} y={24} w={260} h={110} label="nur HB" sub="z. B. § 249 Abs. 1 S. 1 HGB" tone="soft" />
    <Box x={580} y={24} w={260} h={110} label="nur StB" sub="z. B. § 7g Abs. 5 EStG" tone="accent" />
    <text x={150} y={168} textAnchor="middle" fill={D.muted} fontSize="12" fontFamily="var(--sans)">gemeinsame Sachverhalte</text>
    <text x={430} y={168} textAnchor="middle" fill={D.muted} fontSize="12" fontFamily="var(--sans)">handelsrechtliche Sonderregeln</text>
    <text x={710} y={168} textAnchor="middle" fill={D.muted} fontSize="12" fontFamily="var(--sans)">steuerliche Sonderregeln</text>
    <text x={430} y={204} textAnchor="middle" fill={D.ink} fontSize="13" fontWeight="700" fontFamily="var(--sans)">Abweichende Wertansätze führen zu latenten Steuern und zur Mehr-/Weniger-Rechnung.</text>
  </DiagramFrame>;
}
