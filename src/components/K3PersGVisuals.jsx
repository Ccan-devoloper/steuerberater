import React from "react";

const Money = ({ children }) => <span className="persg-money">{children}</span>;

function Sheet({ title, children, className = "" }) {
  return <section className={`persg-sheet ${className}`}>{title && <h3 className="persg-sheet__title">{title}</h3>}{children}</section>;
}
function CompanyTriangle({ top = "§ 18 EStG", bottom = "§ 15 EStG", label = "" }) {
  return <div className="persg-triangle" aria-label={label || `${top} und ${bottom}`}><div className="persg-triangle__top">{top}</div><div className="persg-triangle__body">{bottom}</div></div>;
}
function Grundtatbestand() {
  return <Sheet title="Mitunternehmerschaften · 1. Unterrichtstag">
    <div className="persg-flow persg-flow--3">
      <div className="persg-step"><b>1</b><span>Personengesellschaft</span><small>in der Klausur: OHG, KG</small></div>
      <div className="persg-step"><b>2</b><span>gewerbliche Einkünfte</span><small>originär · geprägt · abgefärbt</small></div>
      <div className="persg-step"><b>3</b><span>Gesellschafter = Mitunternehmer</span><small>MU-Initiative + MU-Risiko</small></div>
    </div>
    <div className="persg-split"><div><h4>Horizontale Abfärbung</h4><div className="persg-partners"><span>A</span><span>B</span></div><CompanyTriangle top="§ 18 EStG" bottom="§ 15 EStG" /><p className="persg-annotation">eine Gesellschaft · beachte Bagatellgrenze</p></div><div><h4>Vertikale Abfärbung</h4><div className="persg-partners"><span>A</span><span>B</span></div><CompanyTriangle top="§ 21 EStG" bottom="§ 15 EStG" /><p className="persg-annotation persg-annotation--warn">Bagatellgrenze gilt nicht</p></div></div>
  </Sheet>;
}
function Abfaerbung() {
  const rows = [["Horizontal", "eine Gesellschaft", "Vermögensverwaltung + gewerblicher Teil", "≤ 3 % und ≤ 24.500 € laut Quelle"], ["Vertikal", "Ober- und Untergesellschaft", "Obergesellschaft vermögensverwaltend, Untergesellschaft gewerblich", "keine Bagatellregelung"]];
  return <Sheet title="Abfärbung: Zusammenfassung / Fazit">
    <div className="persg-tablewrap"><table className="persg-table"><thead><tr><th>Typ</th><th>Struktur</th><th>Auslöser</th><th>Bagatelle</th></tr></thead><tbody>{rows.map((r) => <tr key={r[0]}>{r.map((x) => <td key={x}>{x}</td>)}</tr>)}</tbody></table></div>
    <div className="persg-callout"><b>Generell</b><span>Abfärbung greift nach der Folie für Einkommen- und Gewerbesteuer gleichermaßen; das Vorzeichen der gewerblichen Beteiligungseinkünfte ist unerheblich.</span></div>
    <h4 className="persg-subtitle">Gewerbliche Prägung · § 15 Abs. 3 Nr. 2 EStG</h4>
    <div className="persg-mini-cases"><article><b>Sachverhalt 1</b><p>Komplementär-GmbH führt die Geschäfte der vermögensverwaltenden KG.</p><strong className="ok">gewerblich geprägt</strong></article><article><b>Sachverhalt 2</b><p>Neben der GmbH ist auch Gesellschafter B geschäftsführungsbefugt.</p><strong className="bad">nicht gewerblich geprägt</strong></article><article><b>Sachverhalt 4</b><p>Neben der GmbH ist ein Nichtgesellschafter C geschäftsführungsbefugt.</p><strong className="ok">gewerblich geprägt</strong></article></div>
  </Sheet>;
}
function Mitunternehmer() {
  return <Sheet title="Mitunternehmereigenschaft">
    <div className="persg-split persg-split--risk"><div className="persg-criterion persg-criterion--risk"><h4>MU-Risiko</h4><ul><li>Beteiligung am Gewinn / Verlust</li><li><b>Beteiligung an den stillen Reserven</b><small>Hauptkriterium der Mitschrift</small></li><li>Haftung</li></ul></div><div className="persg-criterion persg-criterion--initiative"><h4>MU-Initiative</h4><ul><li>Geschäftsführungsbefugnis</li><li>Vertretungsbefugnis</li><li>mindestens Rechte eines Kommanditisten nach HGB</li></ul></div></div>
    <div className="persg-brace">Beides muss vorliegen · unterschiedlich starke Ausprägung möglich</div>
    <div className="persg-casebox"><b>BFH 03.11.2015 – VIII R 63/13 · Freiberuflerpraxis</b><p>Umsatzabhängige Vergütung + kein Anteil an stillen Reserven + eingeschränkte Geschäftsführungsbefugnis → Gesamtwürdigung; nicht jeder zivilrechtliche Gesellschafter ist Mitunternehmer.</p><div className="persg-inline-chips"><span>Arbeitskraft → § 19</span><span>Vermietung → § 21</span><span>Darlehen → § 20</span></div></div>
  </Sheet>;
}
function Gewinnstufen() {
  return <Sheet title="Zweistufige Gewinnermittlung bei Mitunternehmerschaften">
    <div className="persg-levels"><div><b>1. Stufe</b><strong>GHB der Gesellschaft</strong><span>§ 15 Abs. 1 S. 1 Nr. 2 S. 1 · 1. HS EStG</span></div><div><b>2. Stufe</b><strong>SB der Gesellschafter</strong><span>§ 15 Abs. 1 S. 1 Nr. 2 S. 1 · 2. HS EStG</span></div></div>
    <div className="persg-tablewrap"><table className="persg-table persg-table--stufen"><thead><tr><th>Rechenschritt</th><th>Vorspalte</th><th>A</th><th>B</th><th>Gesellschaft</th></tr></thead><tbody>
      <tr className="stage1"><td><b>Gewinn laut Gesamthandsbilanz</b></td><td>…</td><td>…</td><td>…</td><td>…</td></tr>
      <tr className="stage1"><td>abzüglich Vorweggewinn: Kapitalverzinsung · Haftung · Tätigkeit · …</td><td>− …</td><td>+ …</td><td>+ …</td><td>+ …</td></tr>
      <tr className="stage1"><td><b>Restgewinn / Gewinn Gesamthandsbilanz</b></td><td>= …</td><td>= …</td><td>= …</td><td>= …</td></tr>
      <tr className="stage1"><td>Korrekturen gem. § 60 Abs. 2 S. 1 EStDV / außerbilanzielle Korrekturen</td><td></td><td>+/− …</td><td>+/− …</td><td>+/− …</td></tr>
      <tr className="stage1"><td><b>Gewinn lt. Ergänzungsbilanz</b></td><td></td><td>+/− …</td><td>+/− …</td><td></td></tr>
      <tr className="stage2"><td><b>Gewinn lt. Sonderbilanz</b> + außerbilanzielle Sonderkorrekturen</td><td></td><td>+/− …</td><td>+/− …</td><td></td></tr>
      <tr className="stage2 total"><td><b>Gewinnanteile der Mitunternehmer / Gewinn der Mitunternehmerschaft</b></td><td></td><td>= …</td><td>= …</td><td>= …</td></tr>
    </tbody></table></div><div className="persg-legend"><span className="stage1-dot">Stufe I · Gesellschaft</span><span className="stage2-dot">Stufe II · Gesellschafter</span></div>
  </Sheet>;
}
function Abc() {
  return <Sheet title="ABC-OHG · Lösung aus S. 7–8">
    <div className="persg-calc"><div><span>Jahresüberschuss</span><Money>328.000 €</Money></div><div><span>Korrektur Erhaltungsaufwand</span><Money>− 108.000 €</Money></div><div className="sum"><b>korrigierter Gewinn</b><Money>220.000 €</Money></div></div>
    <div className="persg-tablewrap"><table className="persg-table"><thead><tr><th>Verteilung</th><th>A</th><th>B</th><th>C</th><th>OHG</th></tr></thead><tbody><tr><td>Kapitalverzinsung 8 %</td><td>40.000</td><td>24.000</td><td>16.000</td><td>80.000</td></tr><tr><td>Geschäftsführungsvorab</td><td>22.000</td><td>11.000</td><td>11.000</td><td>44.000</td></tr><tr><td>Haftung A</td><td>24.000</td><td>–</td><td>–</td><td>24.000</td></tr><tr><td>Restgewinn</td><td>24.000</td><td>24.000</td><td>24.000</td><td>72.000</td></tr><tr className="total"><td><b>Gewinn § 15 EStG</b></td><td><b>110.000</b></td><td><b>59.000</b></td><td><b>51.000</b></td><td><b>220.000</b></td></tr></tbody></table></div>
    <div className="persg-tablewrap"><table className="persg-table"><thead><tr><th>Kapitalkonto II</th><th>A</th><th>B</th><th>C</th></tr></thead><tbody><tr><td>01.01.</td><td>500.000</td><td>300.000</td><td>200.000</td></tr><tr><td>Gewinnanteil</td><td>+110.000</td><td>+59.000</td><td>+51.000</td></tr><tr><td>Entnahmen</td><td>−30.000</td><td>−60.000</td><td>0</td></tr><tr className="total"><td>31.12.</td><td>580.000</td><td>299.000</td><td>251.000</td></tr></tbody></table></div>
  </Sheet>;
}
function Betriebsvermoegen() {
  return <Sheet title="Betriebsvermögen der Mitunternehmerschaft">
    <div className="persg-assets"><div className="persg-assets__whole"><b>(Gesamthands-)Vermögen der Gesellschaft</b><div className="persg-assets__tax"><strong>Steuerbilanz der Mitunternehmerschaft</strong><span>Gesamthandsvermögen</span><span>SBV I / II</span></div></div><div className="persg-assets__private"><b>Vermögen der Gesellschafter</b><span>Privatvermögen</span></div></div>
    <div className="persg-callout persg-callout--warn"><b>Ausnahme</b><span>gesamthänderisches Privatvermögen · H 4.2 Abs. 11 EStH</span></div>
    <div className="persg-example-grid"><div><h4>Handelsbilanz</h4><p>Zivilrechtliche Zugehörigkeit des Grundstücks zur OHG; Gebäude und Grund und Boden werden handelsrechtlich bilanziert.</p></div><div><h4>Steuerbilanz</h4><p>Ausschließliche private Nutzung durch A → notwendiges Privatvermögen nach der in der Quelle dargestellten Ausnahme.</p></div></div>
  </Sheet>;
}
function Sbv() {
  return <Sheet title="Sonderbetriebsvermögen · R 4.2 Abs. 2 EStR">
    <div className="persg-split"><div className="persg-criterion"><h4>SBV I</h4><ul><li>Wirtschaftsgüter dienen unmittelbar dem Betrieb der PersG</li><li>entgeltliche oder unentgeltliche Überlassung</li><li>Darlehen an die Gesellschaft</li><li>Finanzierung von SBV I</li></ul></div><div className="persg-criterion"><h4>SBV II</h4><ul><li>Begründung / Stärkung der Gesellschafterstellung</li><li>Finanzierung des Gesellschaftsanteils</li><li>Beteiligung an Komplementär-GmbH</li><li>Quelle: Beteiligung ≥ 10 % → notwendiges SBV II in der gezeigten Konstellation</li></ul></div></div>
    <h4 className="persg-subtitle">Beispiel A · Grundstück an A&B-OHG</h4><div className="persg-data"><span>AK Grundstück <b>400.000 €</b></span><span>Gebäudeanteil <b>80 %</b></span><span>Darlehen <b>300.000 €</b></span><span>Zins <b>6 % p.a.</b></span><span>Miete ab 01.07.2025 <b>3.000 € + USt / Monat</b></span></div>
    <div className="persg-tablewrap"><table className="persg-table"><thead><tr><th>Sonder-GuV A</th><th>Aufwand</th><th>Ertrag</th></tr></thead><tbody><tr><td>Zinsaufwand</td><td>9.000</td><td></td></tr><tr><td>AfA</td><td>3.200</td><td></td></tr><tr><td>Mietertrag</td><td></td><td>18.000</td></tr><tr className="total"><td>Gewinn</td><td></td><td>5.800</td></tr></tbody></table></div>
  </Sheet>;
}
function Konkurrenz() {
  return <Sheet title="Korrespondierende Bilanzierung & Bilanzierungskonkurrenz">
    <div className="persg-correspondence"><div><b>SBV A</b><span>Forderung 100.000 €</span></div><span className="persg-arrow">↔</span><div><b>A&B-OHG</b><span>Darlehen 100.000 €</span></div></div>
    <div className="persg-callout"><b>Folgejahr</b><span>OHG kann nicht zurückzahlen: Die Mitschrift verneint die Teilwertabschreibung der Forderung, weil es sich steuerlich nicht um Fremdkapital handelt.</span></div>
    <div className="persg-priority"><div className="persg-route"><span>A</span><i>Vermietung Parkplatz</i><span>Verwaltungs-GbR / Zwischengesellschaft(en)</span><i>Untervermietung</i><span>A&B-OHG</span></div><strong>SBV I ✓</strong><p>„Es ist egal, wen oder wieviele man dazwischenschaltet!“ – die Quelle verfolgt den Funktionszusammenhang bis zur Mitunternehmerschaft.</p></div>
    <div className="persg-finalrules"><b>1. SBV hat stets Vorrang!</b><b>2. Einzige Ausnahme in der Quelle: MU-BAS!</b></div>
  </Sheet>;
}
export default function K3PersGVisuals({ type }) {
  switch (type) {
    case "grundtatbestand": return <Grundtatbestand />;
    case "abfaerbung": return <Abfaerbung />;
    case "mitunternehmer": return <Mitunternehmer />;
    case "gewinnstufen": return <Gewinnstufen />;
    case "abc": return <Abc />;
    case "betriebsvermoegen": return <Betriebsvermoegen />;
    case "sbv": return <Sbv />;
    case "konkurrenz": return <Konkurrenz />;
    default: return null;
  }
}
