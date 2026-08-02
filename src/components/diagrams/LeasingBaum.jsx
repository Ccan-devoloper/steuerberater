import React from "react";
import DiagramFrame, { Defs, Box, Arrow, D } from "./DiagramFrame";

export default function LeasingBaum() {
  return <DiagramFrame title="Leasing – Zurechnung des wirtschaftlichen Eigentums" viewBox="0 0 900 470" caption="Vollamortisationserlass (BMF v. 19.4.1971). Erst Grundmietzeit / BND prüfen, dann die Optionen.">
    <Defs />
    <Box x={310} y={14} w={280} h={54} label="Grundmietzeit / BND" tone="navy" />
    <Arrow x1={380} y1={68} x2={180} y2={104} />
    <Arrow x1={450} y1={68} x2={450} y2={104} />
    <Box x={20} y={106} w={300} h={60} label="< 40 % oder > 90 %" sub="Zurechnung Leasingnehmer" tone="soft" />
    <Box x={340} y={106} w={300} h={60} label="40 % – 90 % der BND" sub="Optionen prüfen" tone="soft" />
    <Arrow x1={420} y1={166} x2={200} y2={210} />
    <Arrow x1={490} y1={166} x2={490} y2={210} />
    <Arrow x1={560} y1={166} x2={780} y2={210} />
    <Box x={40} y={212} w={260} h={60} label="ohne Option" sub="→ Leasinggeber" />
    <Box x={330} y={212} w={280} h={60} label="Kaufoption" sub="Optionspreis vs. Restbuchwert" tone="accent" />
    <Box x={640} y={212} w={240} h={60} label="Mietverlängerung" sub="Anschlussmiete vs. Werteverzehr" tone="accent" />
    <Arrow x1={430} y1={272} x2={330} y2={316} />
    <Arrow x1={520} y1={272} x2={600} y2={316} />
    <Arrow x1={760} y1={272} x2={760} y2={316} />
    <Box x={180} y={318} w={280} h={62} label="Optionspreis < RBW" sub="→ Leasingnehmer" />
    <Box x={480} y={318} w={220} h={62} label="Preis ≥ RBW" sub="→ Leasinggeber" />
    <Box x={650} y={392} w={230} h={58} label="Miete < Werteverzehr" sub="→ Leasingnehmer" />
    <text x={30} y={412} fill={D.ink} fontSize="13" fontWeight="700" fontFamily="var(--sans)">Restbuchwert stets auf Basis der linearen AfA – nicht nach Sonderabschreibung.</text>
    <text x={30} y={438} fill={D.muted} fontSize="12.5" fontFamily="var(--sans)">Vollamortisation prüfen: Summe der Raten + Sonderzahlung ≥ Anschaffungskosten des Leasinggebers.</text>
  </DiagramFrame>;
}
