import React from "react";
import "./k3-persg-tag2.css";

const Money=({children})=><span className="p2-money">{children}</span>;
const Box=({title,children,className=""})=><section className={`p2-sheet ${className}`}>{title&&<h3>{title}</h3>}{children}</section>;
const T=({head,rows})=><div className="p2-tablewrap"><table className="p2-table"><thead><tr>{head.map(x=><th key={x}>{x}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i}>{r.map((x,j)=><td key={j}>{x}</td>)}</tr>)}</tbody></table></div>;

function MuBas(){return <Box title="Mitunternehmerische Betriebsaufspaltung (MU-BAS)">
  <div className="p2-flow"><div><b>Besitz-PersG</b><span>A · B · C</span><small>sachliche + personelle Verflechtung</small></div><i>vermietet wesentliche Betriebsgrundlage</i><div><b>Betriebs-PersG</b><span>A · B · C</span><small>operativer Betrieb</small></div></div>
  <div className="p2-two"><article><h4>1. Sachliche Verflechtung</h4><p>Überlassung einer wesentlichen Betriebsgrundlage.</p></article><article><h4>2. Personelle Verflechtung</h4><p>Einheitlicher geschäftlicher Betätigungswille / Personengruppentheorie.</p></article></div>
  <div className="p2-callout"><b>Rechtsfolge</b><span>Besitzunternehmen erzielt gewerbliche Einkünfte und bilanziert die überlassene wesentliche Betriebsgrundlage.</span></div>
  <div className="p2-callout warn"><b>Vorrangregel aus BMF 28.04.1998</b><span>Bei Schwester-Personengesellschaften hat die MU-BAS grundsätzlich Vorrang vor SBV der Betriebsgesellschaft. Unentgeltliche Überlassung: mangels Gewinnerzielungsabsicht keine MU-BAS.</span></div>
</Box>}

function Verguetungen(){return <Box title="Vergütungen an Gesellschafter">
  <div className="p2-compare"><article><span className="p2-badge">1. HS · Stufe I</span><h4>Vorweggewinn</h4><p>Teil der gesellschaftsrechtlichen Gewinnverteilung.</p><b>Keine Aufwandbuchung in der GHB</b><small>USt laut Mitschrift: kein Leistungsaustausch.</small></article><article><span className="p2-badge">2. HS · Stufe II</span><h4>Sonderbetriebseinnahme</h4><p>Tätigkeits-/Darlehens-/Mietvergütung als Aufwand der Gesellschaft.</p><b>SBE beim Mitunternehmer</b><small>USt-Leistungsbeziehung gesondert prüfen.</small></article></div>
  <div className="p2-arrowbar">Frage der Quelle: <strong>Wie wurde die Zahlung in der Gesamthandsbuchführung gebucht?</strong></div>
  <T head={["Beispiel","Buchung Einzelunternehmen","Sonderbereich bei OHG"]} rows={[["EU A · Tätigkeit","Bank 11.900 an Ertrag 10.000 / USt 1.900","Personalaufwand 11.900 → SBE A"],["EU B · weiterer Umsatz","Bank 5.950 an Ertrag 5.000 / USt 950","nach der Mitschrift keine SBE in der dargestellten Konstellation"]]} />
</Box>}

function Kapitalkonten(){return <Box title="Kapitalkonten einer Mitunternehmerschaft">
  <div className="p2-two"><article><h4>Gesetzliches Zwei-Konten-Modell</h4><ul><li><b>Kapitalkonto I:</b> Eigenkapital / Beteiligungsrechte</li><li><b>Kapitalkonto II:</b> je nach Vertrag Fremd- oder Eigenkapital</li></ul></article><article><h4>Gesellschaftsvertragliches Drei-Konten-Modell</h4><ul><li><b>Konto I:</b> Festkapital</li><li><b>Konto II:</b> variables Kapital, Gewinn/Verlust</li><li><b>Konto III:</b> Verrechnungskonto</li></ul></article></div>
  <T head={["Zeitpunkt","Konto I","Konto II","Konto III","Hinweis"]} rows={[["01.01.","50.000","0","95.000","Ausgang"],["Gewinnjahr","50.000","+5.000","+20.000","Gewinnzuweisung"],["Verlustjahr","50.000","-65.000","95.000","Verlustbuchung zeigt Kapitalqualität"],["Folgegewinn","50.000","0","115.000","Ausgleich / Verrechnung"]]} />
  <div className="p2-callout"><b>Klausurhinweis</b><span>Kontobezeichnung allein genügt nicht. Verlustbuchung, Entziehbarkeit und gesellschaftsvertragliche Rechte entscheiden über Eigen- oder Fremdkapital.</span></div>
</Box>}

function DoppelGrund(){return <Box title="Doppelstöckige Personengesellschaft · § 15 Abs. 1 S. 1 Nr. 2 S. 2 EStG">
  <div className="p2-hierarchy"><div>A · Mitunternehmer der Obergesellschaft</div><span>↓</span><div>Ober-PersG · Mitunternehmerin der Untergesellschaft</div><span>↓</span><div>Unter-PersG</div></div>
  <div className="p2-callout"><b>Durchgriff der Mitunternehmerstellung</b><span>Ist A Mitunternehmer der Obergesellschaft und diese Mitunternehmerin der Untergesellschaft, wird A für Satz 2 auch als Mitunternehmer der Untergesellschaft behandelt.</span></div>
  <div className="p2-two"><article><h4>Wirtschaftsgut A → Unter-PersG</h4><p>Kann SBV I des A bei der Untergesellschaft sein.</p></article><article><h4>Vergütung Unter-PersG → A</h4><p>Kann SBE des A bei der Untergesellschaft sein.</p></article></div>
</Box>}

function SpiegelGrund(){return <Box title="Spiegelbildmethode / Equitymethode">
  <div className="p2-compare"><article><span className="p2-badge">Handelsrecht</span><h4>Beteiligung = Vermögensgegenstand</h4><p>Ansatz mit Anschaffungskosten bzw. niedrigerem beizulegenden Wert.</p><ul><li>Gewinnanspruch ggf. Forderung</li><li>Verluste nur über Wertminderung</li></ul></article><article><span className="p2-badge">Steuerrecht</span><h4>Transparenzprinzip</h4><p>Beteiligung selbst kein eigenes Wirtschaftsgut; Beteiligungsansatz spiegelt das anteilige steuerliche Eigenkapital.</p><ul><li>GHB-Kapital</li><li>+ Ergänzungsbilanzkapital</li><li>+ Sonderbilanzkapital</li></ul></article></div>
  <div className="p2-formula"><span>StB-Beteiligungsansatz</span><b>=</b><span>Σ steuerliche Kapitalkonten des Gesellschafters</span></div>
  <div className="p2-callout"><b>Wichtig</b><span>Nur innerbilanzielle Kapitalveränderungen spiegeln sich. Außerbilanzielle Korrekturen der PersG werden beim Gesellschafter ebenfalls außerhalb der Bilanz nachvollzogen.</span></div>
</Box>}

function Spiegel2025(){return <Box title="Ausgangsfall 2025 · A-GmbH / A&B-OHG">
  <div className="p2-flow"><div><b>A-GmbH</b><span>50 %</span></div><i>Beteiligung</i><div><b>A&B-OHG</b><span>Gewinn 10.000 €</span></div></div>
  <div className="p2-facts"><span>Einlage <Money>100.000 €</Money></span><span>Bewirtung OHG <Money>5.000 €</Money></span><span>Grundstücksmiete <Money>1.000 €/Monat</Money></span></div>
  <T head={["Handelsbilanz A-GmbH 31.12.","Betrag"]} rows={[["Beteiligung OHG","100.000"],["Grundstück","200.000"],["Forderung Gewinn","10.000"],["Bank/Miete","12.000"],["Bilanzsumme","322.000"]]} />
  <T head={["Steuerbilanz A-GmbH 31.12.","Betrag"]} rows={[["Beteiligung OHG (spiegelbildlich)","310.000"],["Grundstück","0"],["Forderung","0"],["Bank","12.000"],["Bilanzsumme","322.000"]]} />
  <div className="p2-callout"><b>Sonderbilanz</b><span>Grundstück 200.000 € im SBV I; Kapitalkreis der A-GmbH bei der OHG wird im Beteiligungsansatz gespiegelt.</span></div>
</Box>}

function SpiegelNwb(){return <Box title="NWB-Grundfall 2010 · Erwerb der B-GmbH & Co. KG">
  <div className="p2-facts"><span>Kaufpreis KG <Money>150.000 €</Money></span><span>Komplementär-GmbH <Money>25.000 €</Money></span><span>Beratungskosten <Money>15.000 €</Money></span><span>EK der KG <Money>60.000 €</Money></span></div>
  <div className="p2-compare"><article><h4>Handelsbilanz A-GmbH</h4><p>KG-Beteiligung zu AK 165.000 €; B-GmbH 25.000 €.</p></article><article><h4>Steuerlicher Bilanzierungskreis</h4><p>B-GmbH 25.000 € in Sonderbilanz; Mehrwert 105.000 € in Ergänzungsbilanz.</p></article></div>
  <T head={["2010-Feststellung","Betrag"]} rows={[["Gewinn lt. Steuerbilanz","35.000"],["nicht abzugsfähige BA","+2.000"],["Kontenverzinsung","+3.000"],["Haftungsvergütung","+4.000"],["Ergänzungsbilanzergebnis","-8.000"],["Einkünfte Gewerbebetrieb","36.000"],["davon A-GmbH","32.000"]]} />
  <div className="p2-formula"><span>StB-Beteiligung A-GmbH 31.12.2010</span><b>=</b><strong>217.000 €</strong></div>
  <div className="p2-callout"><b>Einkommen A-GmbH 2010</b><span>Die Quelle gelangt nach Neutralisierung/Spiegelkorrekturen zu 92.000 €.</span></div>
</Box>}

function Spiegel15a(){return <Box title="§ 15a EStG innerhalb der Spiegelbildmethode">
  <div className="p2-formula"><span>maßgebliches Kapital 01.01.2011</span><b>192.000 €</b><span>vs. bilanzieller Verlust</span><b>-208.000 €</b></div>
  <T head={["Nebenrechnung § 15a","Betrag"]} rows={[["Kapital GHB + Ergänzungsbilanz","192.000"],["Entnahmen/Einlagen","0"],["bilanzieller Verlust 2011","-208.000"],["verrechenbarer Verlust","16.000"],["A-GmbH ausgleichsfähig","-183.000"],["A-GmbH verrechenbar","-16.000"]]} />
  <div className="p2-callout warn"><b>Außerbilanzieller Merkposten</b><span>§ 15a ändert nicht die Zurechnung des Verlusts und deshalb nicht den spiegelbildlichen Bilanzansatz. Die 16.000 € werden außerbilanziell fortgeschrieben.</span></div>
  <div className="p2-callout"><b>Einkommen 2011</b><span>Der Artikel zeigt nach allen Korrekturen ein Einkommen der A-GmbH von -93.000 €.</span></div>
</Box>}

function Zebra(){return <Box title="Zebragesellschaft">
  <div className="p2-hierarchy"><div>vermögensverwaltende C-KG<br/><small>§§ 20/21 EStG auf Gesellschaftsebene</small></div><span>→</span><div>A-GmbH als betriebliche Beteiligte<br/><small>Umqualifizierung beim Beteiligten</small></div></div>
  <div className="p2-compare"><article><h4>Beteiligung 8 %</h4><p>Vereinfachung auf Antrag möglich.</p><T head={["Beteiligungskonto","€"]} rows={[["Einlage","25.000"],["Verlust 2008","-5.000"],["Verlust 2009","-4.000"],["Auskehrung","-1.500"],["Verlust 2010","-3.000"],["Buchwert","11.500"]]} /></article><article><h4>Abwandlung 20 %</h4><p>Keine <10-%-Vereinfachung; A-GmbH muss aus den Unterlagen der PersG eine fiktive Gewinnermittlung nach § 4 Abs. 1 / § 5 Abs. 1 EStG erstellen.</p><b>„Schattenrechnung“</b></article></div>
  <div className="p2-callout"><b>KSt 2010 Beispiel 1</b><span>-3.000 € Verlustanteil + 40.000 € Erlös - 11.500 € Buchwert = 25.500 € Einkünfte aus Gewerbebetrieb.</span></div>
</Box>}

function DoppelSpiegel(){return <Box title="Doppelstöckige PersG · Durchstockung">
  <div className="p2-hierarchy"><div>X-GmbH<br/><small>Obergesellschafter</small></div><span>↓</span><div>Y-GmbH & Co. KG<br/><small>Obergesellschaft</small></div><span>↓</span><div>Z-GmbH & Co. KG<br/><small>Untergesellschaft</small></div></div>
  <div className="p2-facts"><span>Kaufpreis Y-Anteil <Money>150.000 €</Money></span><span>Mehrwerte Z <Money>15.000 €</Money></span><span>Mehrwerte Y <Money>70.000 €</Money></span></div>
  <div className="p2-two"><article><h4>Untergesellschaft Z</h4><p>Ergänzungsbilanz Y bei Z: Mehrwert Aktiva 15.000 €.</p><p>Steuerlicher Beteiligungsansatz Y an Z: 50.000 €.</p></article><article><h4>Obergesellschaft Y</h4><p>Ergänzungsbilanz X bei Y: Mehrwert Aktiva 70.000 €.</p><p>Beteiligungsansatz X an Y: 150.000 €.</p></article></div>
  <div className="p2-callout"><b>Klausurtechnik</b><span>Immer „von unten nach oben“ vorgehen. Die Mehrabschreibungen müssen dort wirken, wo die Ergänzungsbilanz geführt wird (Durchstockung).</span></div>
</Box>}

function SechsB(){return <Box title="§ 6b EStG · Übertragung stiller Reserven auf PersG">
  <div className="p2-flow"><div><b>H-GmbH</b><span>50 % an W-OHG</span></div><i>verkauft Grundstück</i><div><b>W-OHG</b><span>Kaufpreis 100.000 €</span></div></div>
  <div className="p2-facts"><span>Buchwert <Money>20.000 €</Money></span><span>Gewinn <Money>80.000 €</Money></span><span>zuordenbarer §6b-Abzug laut Quelle <Money>50.000 €</Money></span></div>
  <T head={["Ebene","Buchung / Folge"]} rows={[["H-GmbH HB (historisches Regime)","Bank 100.000 an GuB 20.000 / Ertrag 80.000; Gegenbuchung über Aufwand/Rücklage"],["W-OHG HB","GuB 100.000 an Bank 100.000"],["Ergänzungsbilanz H bei W-OHG","Kapital 50.000 an GuB 50.000 (negativer Mehrwert)"]]} />
  <div className="p2-compare"><article><h4>Abwandlung 1</h4><p>Bilanzaufstellung 02.04.2008: Übergangsregel nach BMF 29.02.2008 beachten; zwei Ergänzungsbilanzen in der dargestellten Technik.</p></article><article><h4>Abwandlung 2</h4><p>Verkauf 01.04.2010: BilMoG; rein steuerliches Wahlrecht § 6b unabhängig von Handelsbilanz.</p></article></div>
</Box>}

function Einbringung(){return <Box title="Einbringung eines Einzelwirtschaftsguts in die Personengesellschaft">
  <div className="p2-three"><article><b>1</b><h4>Veräußerung</h4><p>Sonstige Gegenleistung / Darlehensforderung.</p><small>entgeltlicher Vorgang</small></article><article><b>2</b><h4>Gegen Gesellschaftsrechte</h4><p>Kapitalkonto, nach dem sich die maßgebenden Gesellschaftsrechte richten.</p><small>tauschähnlicher Vorgang</small></article><article><b>3</b><h4>Unentgeltlich</h4><p>Keine Gesellschaftsrechte und keine sonstige Gegenleistung.</p><small>verdeckte Einlage</small></article></div>
  <T head={["Quelle / Entwicklung","Kernaussage"]} rows={[["BMF 29.03.2000","Offene Sacheinlage gegen Gesellschaftsrechte = tauschähnlicher Vorgang; verdeckte Einlage ohne Gesellschaftsrechte; gemischte Fälle ggf. Aufteilung."],["BMF 11.07.2011","Kapitalkonto I vermittelt Gesellschaftsrechte; variable Konten wurden bei Verlustbuchung teils ebenfalls als Kapitalkonto behandelt."],["BFH 2015/2016 + BMF 26.07.2016","Ausschließliche Gutschrift auf Kapitalkonto II führt nicht zur Gewährung von Gesellschaftsrechten: Einlage, nicht entgeltlicher Vorgang."]]} />
  <div className="p2-callout warn"><b>Aktuelle Aussage der letzten PDF-Seite</b><span>Für Gesellschaftsrechte kommt es auf ein Kapitalkonto an, nach dem sich insbesondere das Gewinnbezugsrecht richtet – regelmäßig Kapitalkonto I. Kapitalkonto II allein genügt nicht.</span></div>
</Box>}

const map={"mu-bas":MuBas,"verguetungen":Verguetungen,"kapitalkonten2":Kapitalkonten,"doppelstock-grund":DoppelGrund,"spiegel-grund":SpiegelGrund,"spiegel-2025":Spiegel2025,"spiegel-nwb":SpiegelNwb,"spiegel-15a":Spiegel15a,"zebra":Zebra,"doppelstock-spiegel":DoppelSpiegel,"sechs-b":SechsB,"einbringung":Einbringung};
export default function K3PersGTag2Visuals({type}){const C=map[type];return C?<C/>:null;}
