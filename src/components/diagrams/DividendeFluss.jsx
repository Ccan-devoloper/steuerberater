import React from "react";
import DiagramFrame, { Defs, Box, Arrow, D } from "./DiagramFrame";

export default function DividendeFluss() {
  return <DiagramFrame title="Dividende im Betriebsvermögen – Teileinkünfteverfahren" viewBox="0 0 900 330" caption="§ 43 Abs. 5 S. 2 EStG: keine Abgeltungswirkung im Betriebsvermögen. Korrektur erst außerbilanziell.">
    <Defs />
    <Box x={20} y={20} w={250} h={62} label="Bruttodividende" sub="100.000 €" tone="navy" />
    <Arrow x1={270} y1={51} x2={318} y2={51} />
    <Box x={320} y={20} w={260} h={62} label="KapESt 25 % + SolZ 5,5 %" sub="26.375 € · § 43a Abs. 1 EStG" tone="soft" />
    <Arrow x1={580} y1={51} x2={628} y2={51} />
    <Box x={630} y={20} w={250} h={62} label="Auszahlung" sub="73.625 €" tone="soft" />
    <Arrow x1={450} y1={82} x2={450} y2={124} />
    <rect x={120} y={126} width={660} height={78} rx="8" fill={D.paper} stroke={D.line} strokeWidth="1.5" />
    <text x={450} y={154} textAnchor="middle" fill={D.ink} fontSize="13.5" fontWeight="700" fontFamily="var(--sans)">Buchung (alle Bereiche)</text>
    <text x={450} y={182} textAnchor="middle" fill={D.navy} fontSize="13" fontFamily="var(--mono)">Bank 73.625 € + Entnahme 26.375 €  an  Beteiligungsertrag 100.000 €</text>
    <Arrow x1={450} y1={204} x2={450} y2={244} />
    <rect x={120} y={246} width={660} height={72} rx="8" fill="var(--accentSoft)" stroke="var(--accent)" strokeWidth="1.5" />
    <text x={450} y={272} textAnchor="middle" fill={D.accent} fontSize="13.5" fontWeight="800" fontFamily="var(--sans)">Außerbilanzielle Korrektur</text>
    <text x={450} y={298} textAnchor="middle" fill={D.ink} fontSize="12.5" fontFamily="var(--mono)">./. 40.000 € (§ 3 Nr. 40 d) EStG)   +   200 € (§ 3c Abs. 2 S. 1 EStG)</text>
  </DiagramFrame>;
}
