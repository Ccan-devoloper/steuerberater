import React from "react";
import "./k3-persg-tag3.css";

const Money=({children})=><span className="p3-money">{children}</span>;
const Sheet=({title,children})=><section className="p3-sheet">{title&&<h3 className="p3-title">{title}</h3>}{children}</section>;
const Table=({head,rows})=><div className="p3-tablewrap"><table className="p3-table"><thead><tr>{head.map((x)=><th key={x}>{x}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i}>{r.map((x,j)=><td key={j}>{x}</td>)}</tr>)}</tbody></table></div>;

function TransferMaster(){return <Sheet title="Übertragung / Überführung von Einzelwirtschaftsgütern">
  <div className="p3-flow"><div><b>Kein Rechtsträgerwechsel</b><span>Überführung</span><small>PV → eigenes EU/SBV · BV → eigenes BV/SBV</small></div><i>oder</i><div><b>Rechtsträgerwechsel</b><span>Übertragung</span><small>z. B. in das GHV einer PersG</small></div></div>
  <div className="p3-three"><article><b>1</b><h4>Veräußerung</h4><p>Geld, Schuldübernahme, Darlehens-/Verrechnungskonto</p><small>entgeltliche Gegenleistung</small></article><article><b>2</b><h4>Gesellschaftsrechte</h4><p>insbesondere Kapitalkonto I; ggf. Kombinationen mit Rücklage</p><small>tauschähnlicher Vorgang</small></article><article><b>3</b><h4>Unentgeltlich</h4><p>keine Gesellschaftsrechte und keine sonstige Gegenleistung</p><small>verdeckte Einlage</small></article></div>
  <Table head={["Gegenleistung","typische Buchung laut Schema","Grundrichtung"]} rows={[["Geld / übernommene Restschuld / Darlehensforderung","Bank, Schuld, Verrechnungskonto","Veräußerung"],["Gesellschaftsrechte","Kap I; Kap I + Kap II; Kap I + gesamthänderische Rücklage","tauschähnlich"],["keine Gesellschaftsrechte","Kap II ausschließlich; Rücklage ausschließlich; unentgeltlicher Ertrag/ähnlich","Einlage / unentgeltlich"]]} />
  <div className="p3-callout"><b>Klausurreihenfolge</b><span>Rechtsträgerwechsel → Gegenleistung → einschlägige Bewertungs-/Veräußerungsnorm.</span></div>
</Sheet>}

function PvGubo(){return <Sheet title="PV-Grundstück → A&B-OHG · AK 80.000 € · Wert 150.000 €">
  <div className="p3-facts"><span>A <b>90 %</b></span><span>B <b>10 %</b></span><span>AK 2018 <Money>80.000 €</Money></span><span>TW/gem. Wert <Money>150.000 €</Money></span></div>
  <Table head={["Variante","Gegenbuchung","Qualifikation","Gewinn A"]} rows={[["a","Kap I 100.000 + KapRL 50.000","voll gegen Gesellschaftsrechte","70.000 €"],["b","Kap II 150.000 ausschließlich","verdeckte Einlage","kein unmittelbarer §23-Gewinn"],["c","Kap I 112.500 + unentgeltlich 37.500","Mischfall 75 % / 25 %","52.500 €"]]} />
  <div className="p3-formula"><span>Variante c</span><b>112.500 − (80.000 × 75 %)</b><strong>= 52.500 €</strong></div>
  <div className="p3-callout"><b>Konten entscheiden</b><span>Dieselben Vermögenswerte führen je nach Gegenleistung zu völlig unterschiedlichen steuerlichen Wegen.</span></div>
</Sheet>}

function Sechs5System(){return <Sheet title="§ 6 Abs. 5 EStG · Systematik">
  <div className="p3-two"><article><span className="p3-badge">Satz 1 / 2</span><h4>Überführung</h4><p>Kein Rechtsträgerwechsel.</p><ul><li>eigenes BV → eigenes BV</li><li>eigenes BV ↔ eigenes SBV</li><li>eigenes SBV ↔ eigenes SBV</li></ul><b>zwingende Buchwertfortführung</b></article><article><span className="p3-badge">Satz 3</span><h4>Übertragung</h4><p>Rechtsträgerwechsel, aber gesetzlich begünstigte Einzel-WG-Übertragung.</p><ol><li>BV → GHV</li><li>SBV ↔ GHV</li><li>SBV verschiedener Mitunternehmerbereiche</li><li>GHV ↔ GHV identisch Beteiligter</li></ol></article></div>
  <div className="p3-warning"><b>§ 6 Abs. 6 S. 4 EStG</b><span>„Absatz 5 bleibt unberührt.“ – die Buchwertregel des Absatzes 5 hat in den begünstigten Fällen Vorrang.</span></div>
  <div className="p3-callout"><b>Begleitquelle</b><span>BMF 08.12.2011 · Zweifelsfragen zur Überführung und Übertragung nach § 6 Abs. 5 EStG.</span></div>
</Sheet>}

function Sperrfrist(){return <Sheet title="§ 6 Abs. 5 Satz 4 · die Pflichtprüfung nach Satz 3">
  <div className="p3-warning p3-warning--big"><b>Wer Satz 3 sagt, muss auch Satz 4 sagen!</b></div>
  <div className="p3-two"><article><h4>GHB direkt zum Buchwert</h4><div className="p3-formula"><span>Grundstück</span><strong>80.000 €</strong></div><p>Keine negative Ergänzungsbilanz zur gesellschafterbezogenen Reservenzuordnung.</p><b>Sperrfrist prüfen</b></article><article><h4>GHB zum Teilwert + negative Ergänzungsbilanz</h4><div className="p3-formula"><span>GHB 150.000</span><b>+</b><span>ErgBil −70.000</span><strong>= 80.000 €</strong></div><p>Alte stille Reserven bleiben A zugeordnet.</p><b>Ausnahme von der Sperrfrist nach der Quelle</b></article></div>
  <div className="p3-callout"><b>Kap II ausschließlich</b><span>Kein Tausch – trotzdem Satz 3 prüfen und anschließend Satz 4. § 6 Abs. 6 muss in dieser Variante nicht künstlich vorgeschaltet werden.</span></div>
</Sheet>}

function Trennung(){return <Sheet title="Schuldübernahme · strenge Trennungstheorie">
  <div className="p3-facts"><span>N-GmbH · BW <Money>400.000 €</Money></span><span>stille Reserven <Money>200.000 €</Money></span><span>Wert <Money>600.000 €</Money></span><span>übernommene Schuld <Money>300.000 €</Money></span></div>
  <div className="p3-splitcalc"><article><span>entgeltlich</span><b>300.000 / 600.000 = 50 %</b><p>anteiliger BW 200.000</p><strong>Gewinn 100.000 €</strong></article><article><span>§6-Abs.-5-Anteil</span><b>50 %</b><p>fortgeführter BW 200.000</p><strong>steuerneutral</strong></article></div>
  <div className="p3-formula"><span>Ansatz OHG</span><b>300.000 + 200.000</b><strong>= 500.000 €</strong></div>
  <h4 className="p3-subtitle">BMF Rz. 15 · Kontrollbeispiel PKW</h4>
  <Table head={["Wert","Schuld","Quote","Gewinn","Ansatz PersG"]} rows={[["10.000","3.000","30 % entgeltlich / 70 % unentgeltlich","2.700","3.700"]]} />
</Sheet>}

function Nr4Identisch(){return <Sheet title="§ 6 Abs. 5 S. 3 Nr. 4 · Gesamthand ↔ Gesamthand">
  <div className="p3-partnerships"><div><b>A/B-PersG 1</b><span>A 50 % · B 50 %</span></div><i>Einzel-WG unentgeltlich →</i><div><b>A/B-PersG 2</b><span>A 50 % · B 50 %</span></div></div>
  <div className="p3-checks"><span>✓ verschiedene Mitunternehmerschaften</span><span>✓ dieselben Mitunternehmer</span><span>✓ identische Beteiligungsquoten</span><span>✓ unentgeltlich</span></div>
  <div className="p3-callout"><b>Prüfpunkt</b><span>Personenidentität allein reicht nach dem in der Quelle gezeigten Tatbestand nicht; die Beteiligung muss ebenfalls identisch sein.</span></div>
</Sheet>}

function StatusS5(){return <Sheet title="§ 6 Abs. 5 S. 5–7 · Vermeidung der Statusverbesserung">
  <div className="p3-facts"><span>A <b>90 %</b></span><span>B-GmbH <b>10 %</b></span><span>BW <Money>80.000 €</Money></span><span>TW <Money>150.000 €</Money></span></div>
  <div className="p3-splitcalc"><article><span>A-Anteil 90 %</span><b>80.000 × 90 %</b><strong>72.000 € BW</strong></article><article><span>Körperschaftsanteil 10 %</span><b>150.000 × 10 %</b><strong>15.000 € TW</strong><p>statt 8.000 € BW → Gewinn 7.000 €</p></article></div>
  <div className="p3-formula"><span>steuerlicher Gesamtwert</span><b>72.000 + 15.000</b><strong>= 87.000 €</strong></div>
  <div className="p3-formula"><span>bei GHB 150.000</span><b>150.000 − 87.000</b><strong>= −63.000 € ErgBil</strong></div>
  <div className="p3-three"><article><b>S. 5</b><p>Körperschaftsanteil wird unmittelbar/mittelbar begründet oder erhöht.</p></article><article><b>S. 6</b><p>Nachbeobachtung: innerhalb von sieben Jahren entsteht/steigt ein solcher Anteil aus anderem Grund.</p></article><article><b>S. 7</b><p>Weitere Statuswechsel, insbesondere zwischen Körperschaftsbeteiligungen, mitprüfen.</p></article></div>
</Sheet>}

function UstTransfer(){return <Sheet title="USt-Querverweis der Tag-3-Notiz">
  <div className="p3-two"><article><h4>Ertragsteuer</h4><p>PKW aus SBV → GHV gegen Gutschrift Kapitalkonto I.</p><b>§ 6 Abs. 5 S. 3 Nr. 2 EStG prüfen</b></article><article><h4>Umsatzsteuer</h4><p>Die Quelle öffnet einen eigenen Prüfpfad und nennt:</p><ul><li>§ 3 Abs. 12 S. 2 UStG</li><li>§ 3 Abs. 7 UStG</li><li>§ 10 Abs. 2 UStG</li></ul></article></div>
  <div className="p3-warning"><b>Quellenbegrenzung</b><span>Die Tagesnotiz führt an dieser Stelle keine vollständige USt-Endlösung aus. Der Campus ergänzt deshalb bewusst keine nicht belegte Schlussfolgerung.</span></div>
</Sheet>}

function Gesamtfall(){return <Sheet title="Gesamtfall A&B-OHG · GHB + Ergänzungsbilanz + AfA">
  <div className="p3-two"><article><h4>A · Gebäude aus EU</h4><ul><li>BW 120.000 €</li><li>historische HK 200.000 €</li><li>AfA 4 %</li><li>gemeiner Wert 220.000 €</li><li>Nebenkosten OHG 40.000 €</li></ul></article><article><h4>B · Grundstück aus PV</h4><ul><li>AK 2020 100.000 €</li><li>TW 150.000 €</li><li>Geld 70.000 €</li><li>Nebenkosten OHG 20.000 €</li></ul><strong>Gewinn B: 50.000 €</strong></article></div>
  <Table head={["Eröffnungs-GHB 01.01.2025","Aktiva","Passiva"]} rows={[["Grund und Boden","170.000",""],["Gebäude","260.000",""],["Bank","70.000",""],["Kap I A / Kap I B","","140.000 / 140.000"],["gesamthänderische Rücklage","","160.000"],["sonstige Verbindlichkeiten","","60.000"],["Summe","500.000","500.000"]]} />
  <div className="p3-callout"><b>Ergänzungsbilanz A bei Eröffnung</b><span>negativer Gebäudemehrwert 100.000 €; dadurch bleibt der steuerliche Buchwert trotz höherem GHB-Ansatz erhalten.</span></div>
  <div className="p3-afagrid"><article><span>1 · AfA GHB</span><b>260.000 × 3 %</b><strong>7.800 €</strong><small>GHB-Gebäude 31.12.: 252.200 €</small></article><article><span>2 · richtige AfA</span><b>(200.000 + 40.000) × 4 %</b><strong>9.600 €</strong></article><article><span>3 · Korrektur</span><b>9.600 − 7.800</b><strong>Mehr-AfA 1.800 €</strong><small>negative ErgBil 31.12.: 101.800 €</small></article></div>
  <div className="p3-warning"><b>Technik Ergänzungsbilanz</b><span>1. AfA GHB ermitteln · 2. „richtige“ AfA ermitteln · 3. Differenz korrigieren.</span></div>
</Sheet>}

const visuals={
  "transfer-master":TransferMaster,
  "pv-gubo":PvGubo,
  "sechs5-system":Sechs5System,
  "sperrfrist":Sperrfrist,
  "trennung":Trennung,
  "nr4-identisch":Nr4Identisch,
  "status-s5":StatusS5,
  "ust-transfer":UstTransfer,
  "gesamtfall-afa":Gesamtfall,
};

export default function K3PersGTag3Visuals({type}){const C=visuals[type];return C?<C/>:null;}
