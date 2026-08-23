import React from "react";
import "./k3-persg-tag4.css";

const Box=({title,children,accent=false})=><section className={`p4-box ${accent?"p4-box--accent":""}`}>{title&&<h3>{title}</h3>}{children}</section>;
const Table=({head,rows})=><div className="p4-tablewrap"><table className="p4-table"><thead><tr>{head.map((x)=><th key={x}>{x}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i}>{r.map((x,j)=><td key={j}>{x}</td>)}</tr>)}</tbody></table></div>;
const Formula=({label,calc,result})=><div className="p4-formula"><span>{label}</span><b>{calc}</b><strong>{result}</strong></div>;

function Master(){return <Box title="§ 24 UmwStG · Einbringung in eine Personengesellschaft">
  <div className="p4-flow"><div><b>1 · Einbringungsgegenstand</b><span>Betrieb · Teilbetrieb · Mitunternehmeranteil</span></div><i>→</i><div><b>2 · Ziel</b><span>Betriebsvermögen einer PersG / Mitunternehmerschaft</span></div><i>→</i><div><b>3 · Gegenleistung</b><span>Gesellschaftsrechte + ggf. sonstige Gegenleistung</span></div></div>
  <div className="p4-three"><article><span>Spalte 1</span><h4>sonstige Gegenleistung</h4><p>Geld · Schuld/Darlehen · Verrechnung</p></article><article><span>Spalte 2</span><h4>Gesellschaftsrechte</h4><p>Kapitalkonto I als Leitkonto</p></article><article><span>Spalte 3</span><h4>ohne Gesellschaftsrechte</h4><p>Einlage-/unentgeltliche Richtung</p></article></div>
  <div className="p4-callout"><b>Klausurreihenfolge</b><span>Tatbestand §24 Abs.1 → Gegenleistung → Bewertung Abs.2 → Gewinn Abs.3 → Rechtsnachfolge/AfA Abs.4.</span></div>
</Box>}

function Sbv(){return <Box title="Funktional wesentliche Grundlage · GHV oder SBV I">
  <div className="p4-parties"><div><b>A</b><small>Einbringender</small></div><span>übrige WG →</span><div><b>A&B-OHG</b><small>Gesamthandsvermögen</small></div></div>
  <div className="p4-sbv"><b>zurückbehaltenes / überlassenes Grundstück</b><span>bei betrieblicher Nutzung durch die OHG</span><strong>→ Sonderbetriebsvermögen I des A</strong></div>
  <div className="p4-callout"><b>Prüfgedanke</b><span>Für den ganzen Betrieb Gesamthand und Sonderbetriebsvermögen gemeinsam betrachten.</span></div>
</Box>}

function Bewertung(){return <Box title="§ 24 Abs. 2/3 · Wertansatz und Einbringungsgewinn">
  <div className="p4-three"><article><span>Grundsatz</span><h4>gemeiner Wert</h4><p>§ 24 Abs. 2 S. 1</p></article><article><span>Antrag</span><h4>Buchwert</h4><p>bei erfüllten Voraussetzungen</p></article><article><span>Antrag</span><h4>Zwischenwert</h4><p>zwischen BW und gemeinem Wert</p></article></div>
  <div className="p4-flow"><div><b>Wertansatz PersG</b></div><i>=</i><div><b>Veräußerungspreis Einbringender</b></div><i>→</i><div><b>Einbringungsgewinn</b></div></div>
</Box>}

function Brutto(){return <Box title="Grundfall · Bruttomethode">
  <div className="p4-facts"><span>A bringt EU ein · BW 300.000 €</span><span>B zahlt 600.000 €</span><span>A/B je 50 %</span></div>
  <Table head={["Eröffnungs-GHB 01.01.2024","Aktiva","Passiva"]} rows={[["Firmenwert","30.000",""],["Maschine","70.000",""],["Gebäude inkl. NK","540.000",""],["Bank","600.000",""],["Kapital A / B","","600.000 / 600.000"],["Verbindlichkeiten NK","","40.000"],["Summe","1.240.000","1.240.000"]]} />
  <Table head={["negative Ergänzungsbilanz A","Soll","Haben"]} rows={[["Minderkapital","300.000",""],["Firmenwert","","30.000"],["Minderwert Maschine","","10.000"],["Minderwert Gebäude","","260.000"],["Summe","300.000","300.000"]]} />
  <div className="p4-afagrid"><article><b>Maschine GHB</b><span>70.000 / 9</span><strong>7.778 €</strong><small>ErgBil: +1.110 € AfA-Ertrag</small></article><article><b>Gebäude GHB</b><span>540.000 × 3 %</span><strong>16.200 €</strong><small>ErgBil: +3.000 €</small></article><article><b>Firmenwert GHB</b><span>30.000 / 15</span><strong>2.000 €</strong><small>ErgBil: +2.000 €</small></article></div>
  <div className="p4-callout"><b>31.12.2024</b><span>Negative Ergänzungsbilanz A: 293.890 € Minderkapital.</span></div>
</Box>}

function Netto(){return <Box title="Grundfall · Nettomethode">
  <Table head={["Eröffnungs-GHB 01.01.2024","Aktiva","Passiva"]} rows={[["Maschine","60.000",""],["Gebäude inkl. NK","280.000",""],["Bank","600.000",""],["Kapital A / B","","450.000 / 450.000"],["Verbindlichkeiten NK","","40.000"],["Summe","940.000","940.000"]]} />
  <div className="p4-two"><article><h4>Negative ErgBil A</h4><ul><li>Maschine 5.000</li><li>Firmenwert 15.000</li><li>Gebäude 130.000</li></ul><b>150.000 €</b></article><article><h4>Positive ErgBil B</h4><ul><li>Maschine 5.000</li><li>Firmenwert 15.000</li><li>Gebäude 130.000</li></ul><b>150.000 €</b></article></div>
  <div className="p4-afagrid"><article><b>Maschine</b><span>Mehr-/Minder-AfA</span><strong>556 €</strong></article><article><b>Gebäude</b><span>Mehr-/Minder-AfA</span><strong>1.500 €</strong></article><article><b>Firmenwert</b><span>Mehr-/Minder-AfA</span><strong>1.000 €</strong></article></div>
  <div className="p4-callout"><b>31.12.2024</b><span>ErgBil A und B jeweils 146.944 €.</span></div>
</Box>}

function Gegenleistung(){return <Box title="§ 24 Abs. 2 S. 2 Nr. 2 · sonstige Gegenleistung">
  <div className="p4-two"><article><span className="p4-badge">Abwandlung 1</span><h4>Darlehen A 200.000 €</h4><p>Quelle: Grenze nicht überschritten.</p><strong>Buchwertansatz bleibt möglich</strong></article><article><span className="p4-badge">Abwandlung 2</span><h4>Darlehen A 350.000 €</h4><p>Quellen-Höchstgrenze 300.000 €.</p><strong>50.000 € zu viel</strong></article></div>
  <div className="p4-sbv"><b>Darlehensforderung A gegen OHG</b><span>notwendiges Sonderbetriebsvermögen I</span><strong>SBil A: Forderung 200.000 / Kapital 200.000</strong></div>
</Box>}

function Zwischenwert(){return <Box title="Abwandlung 2 · anteilige Reservenaufdeckung">
  <Formula label="tatsächliche sonstige Gegenleistung" calc="350.000 €" result="" />
  <Formula label="zulässige Quellen-Höchstgrenze" calc="300.000 €" result="" />
  <Formula label="Überschreitung" calc="350.000 − 300.000" result="50.000 €" />
  <div className="p4-ratio"><b>Quellenrechnung</b><span>50.000 € / Unternehmenswert 600.000 €</span><strong>= 1/12</strong><small>entsprechender Teil der stillen Reserven wird aufgedeckt</small></div>
  <Formula label="Ansatz des eingebrachten Betriebs" calc="BW 300.000 + Aufdeckung 50.000" result="350.000 €" />
</Box>}

function MuAnteil(){return <Box title="Einbringung eines Mitunternehmeranteils">
  <div className="p4-parties"><div><b>A&B-OHG</b><small>A / B je 50 %</small></div><span>MU-Anteil →</span><div><b>neue PersG</b><small>neue Gesellschaftsrechte</small></div></div>
  <div className="p4-circle"><span>Gesamthandsanteil</span><span>Ergänzungsbilanz</span><span>Sonderbetriebsvermögen</span></div>
  <div className="p4-callout"><b>§ 24 Abs. 1</b><span>Der begünstigte MU-Anteil ist als steuerliche Sachgesamtheit zu denken, nicht nur als sichtbares Kapitalkonto.</span></div>
</Box>}

const visuals={
  "umw24-master":Master,
  "umw24-sbv":Sbv,
  "umw24-bewertung":Bewertung,
  "umw24-brutto":Brutto,
  "umw24-netto":Netto,
  "umw24-gegenleistung":Gegenleistung,
  "umw24-zwischenwert":Zwischenwert,
  "umw24-muanteil":MuAnteil,
};
export default function K3PersGTag4Visuals({type}){const C=visuals[type];return C?<C/>:null;}
