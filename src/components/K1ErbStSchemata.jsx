import React from "react";
import { ERBST1_TARIF, ERBST1_HAERTEAUSGLEICH } from "../data/k1-erbst-einheit-1.js";
import "./ao.css";
import "./erbst.css";

const H = ({ children, ton = "blau", className = "" }) => <span className={`erbst-hand erbst-hand--${ton} ${className}`}>{children}</span>;

function Arbeitsmittel() {
  return <div className="erbst-original erbst-paper erbst-tools">
    <div className="erbst-schema-title">Arbeitsmittel & Bewertungs-Fahrtroute</div>
    <div className="erbst-gears" aria-label="ErbStG und BewG greifen ineinander">
      <div className="erbst-gear erbst-gear--green"><b>ErbStG</b><span>steuerliche Frage</span></div>
      <div className="erbst-gear-arrow">→</div>
      <div className="erbst-gear erbst-gear--purple"><b>BewG</b><span>Bewertung</span></div>
      <div className="erbst-gear-arrow erbst-gear-arrow--back">↩</div>
    </div>
    <div className="erbst-tool-grid">
      <div><b>Gesetz</b><span>ErbStG</span></div>
      <div><b>Bewertung</b><span>BewG</span></div>
      <div><b>Auslegung</b><span>ErbStR / ErbStH</span></div>
      <div><b>Navigation</b><span>farbige Reiter / Bewertungsmaßstab</span></div>
    </div>
    <p className="erbst-source-note">Quelle: PDF-S. 1–24. Didaktische Meme-/Filmframes bleiben im Seitenplan, enthalten aber keinen eigenen Prüfungspunkt.</p>
  </div>;
}

function Vorspann() {
  const rows = [
    ["1", "§ 1 ErbStG", "sachlicher Vorgang", "§ 3 ErbStG / § 7 ErbStG"],
    ["2", "§ 2 ErbStG", "persönliche Steuerpflicht", "unbeschränkt / beschränkt · ‚Einer reicht!‘"],
    ["3", "§ 20 ErbStG", "Steuerschuldner", "‚so viele wie möglich‘"],
    ["4", "§ 15 ErbStG", "Steuerklasse", "I · II · III"],
    ["5", "§ 9 / § 11 ErbStG", "Steuerentstehung ↔ Bewertungsstichtag", "zusammen prüfen"],
  ];
  return <div className="erbst-original erbst-paper">
    <div className="erbst-schema-title">I. Vorspann</div>
    <div className="erbst-rundung"><H ton="blau">Rundung: H E 10.1</H></div>
    <div className="erbst-vorspann-list">{rows.map(([n,norm,titel,hinweis])=><div key={n} className="erbst-vorspann-row"><span className="erbst-num">{n}</span><div><b>{norm}: {titel}</b><small>{hinweis}</small></div></div>)}</div>
    <div className="erbst-class-strip" aria-label="Steuerklassen"><span>I</span><span>II</span><span>III</span></div>
  </div>;
}

function Einleitung() {
  return <div className="erbst-original erbst-paper">
    <div className="erbst-schema-title">II. Einleitung</div>
    <div className="erbst-copy-row"><span>Ⓐ</span><b>Copy & Paste</b><H ton="gruen">§ 10 Abs. 1 S. 1–2 ErbStG</H></div>
    <div className="erbst-copy-row"><span>♥</span><b>Copy & Paste</b><H ton="lila">R E 7.4 Abs. 1 S. 1–2</H></div>
    <div className="erbst-re74">
      <h3>R E 7.4 · Gemischte Schenkung / Schenkung unter Auflage</h3>
      <div className="erbst-re74-formula"><span>Steuerwert Leistung Schenker<br/><b>§ 12 ErbStG → BewG</b></span><strong>−</strong><span>Gegenleistung / Leistungs-, Nutzungs-, Duldungsauflage<br/><b>bewerten nach § 12 ErbStG</b></span><strong>=</strong><span><b>Bereicherung</b></span></div>
      <p>Abzug nur, soweit § 10 Abs. 6 ErbStG ihn nicht beschränkt oder ausschließt.</p>
    </div>
  </div>;
}

function WSV() {
  return <div className="erbst-original erbst-paper">
    <div className="erbst-schema-title">III. Ermittlung stpfl. Erwerb · Schritt 1: WSV</div>
    <div className="erbst-wsv-circles">
      <div className="erbst-circle erbst-circle--a"><H ton="lila">Wert für WSV ermitteln</H><b>§ 12 ErbStG</b><span>↓</span><H ton="gruen">BewG</H></div>
      <div className="erbst-flow-arrow">→ <small>je WG</small></div>
      <div className="erbst-circle erbst-circle--b"><H ton="gruen">Sachliche Stfr. prüfen</H><b>§§ 13–13d ErbStG</b></div>
      <div className="erbst-flow-arrow erbst-flow-arrow--down">↓</div>
      <div className="erbst-circle erbst-circle--c"><H ton="lila">Verbindlichkeiten, die zum WG gehören</H><b>direkt erledigen</b></div>
    </div>
    <div className="erbst-wsv-side">
      <div><b>Belegen:</b><span>NV § 10 Abs. 5 Nr. 1–2 ErbStG</span><span>GL/Aufl. R E 7.4 Abs. 1 S. 2</span></div>
      <div><b>Beachten:</b><span>§ 12 ErbStG → BewG</span></div>
      <div><b>Begrenzen:</b><span>§ 10 Abs. 6 / 6a ErbStG</span><small>Abzug ggf. teilweise bis 0 €</small></div>
    </div>
  </div>;
}

function NNAS() {
  return <div className="erbst-original erbst-paper">
    <div className="erbst-schema-title">Schritt 2: NNAS</div>
    <div className="erbst-nnas-source">Nachdem die wirtschaftsgutbezogenen Verbindlichkeiten erledigt wurden:</div>
    <div className="erbst-nnas-flow">
      <div><b>Restposten</b><span>NV § 10 Abs. 5 Nr. 1–2</span><span>GL/Aufl. R E 7.4 Abs. 1 S. 2</span></div>
      <div className="erbst-big-arrow">→</div>
      <div><b>keinem WG direkt zuordenbar?</b><span>ja</span></div>
      <div className="erbst-big-arrow">→</div>
      <div className="erbst-nnas-result"><b>auf alle WG aufteilen</b><span>§ 10 Abs. 6a S. 3 ErbStG</span></div>
    </div>
    <div className="erbst-icecream">🍦 🍦 🍦 <small>Quellen-Merkhilfe: Eiscafé, PDF-S. 89–92</small></div>
  </div>;
}

function Erwerb() {
  const rows = [
    ["−", "Erbfallkosten", "§ 10 Abs. 5 Nr. 3 ErbStG"],
    ["−", "Erwerbsnebenkosten", "R E 7.4 Abs. 4"],
    ["=", "Bereicherung", ""],
    ["−", "persönlicher Freibetrag", "§ 16 ErbStG"],
    ["+", "Vorerwerbe ≤ 10 Jahre", "§ 14 Abs. 1 S. 1 ErbStG"],
    ["−", "ggf. persönlicher Freibetrag im §-14-Mechanismus", "§ 16 ErbStG"],
    ["−", "ggf. Versorgungsfreibetrag", "§ 17 ErbStG"],
    ["−", "ggf. Zugewinnregel", "§ 5 ErbStG"],
    ["=", "steuerpflichtiger Erwerb", ""],
    ["↓", "Abrunden auf volle 100 €", "§ 10 Abs. 1 S. 6 ErbStG"],
  ];
  return <div className="erbst-original erbst-paper">
    <div className="erbst-schema-title">Schritt 3: Erwerb</div>
    <div className="erbst-warning">Erbfall-/Erwerbsnebenkosten in diesem Block behandeln - nicht auf einzelne WG verteilen.</div>
    <div className="erbst-calc-list">{rows.map(([op,label,norm],i)=><div key={`${label}-${i}`} className={op==="="?"erbst-calc-row erbst-calc-row--sum":"erbst-calc-row"}><span>{op}</span><b>{label}</b><small>{norm}</small></div>)}</div>
  </div>;
}

function TarifTable() {
  return <div className="erbst-original erbst-paper">
    <div className="erbst-schema-title">§ 19 Abs. 1 ErbStG · Steuersätze</div>
    <div className="erbst-table-wrap"><table className="erbst-table"><thead><tr><th>Wert des steuerpflichtigen Erwerbs bis einschl.</th><th>I</th><th>II</th><th>III</th></tr></thead><tbody>{ERBST1_TARIF.map(r=><tr key={r.bis}><td>{r.bis}</td><td>{r.I}</td><td>{r.II}</td><td>{r.III}</td></tr>)}</tbody></table></div>
    <div className="erbst-formula">steuerpflichtiger Erwerb × Prozentsatz der Steuerklasse</div>
  </div>;
}

function Haerteausgleich() {
  return <div className="erbst-original erbst-paper">
    <div className="erbst-schema-title">§ 19 Abs. 3 ErbStG · Härteausgleich</div>
    <p className="erbst-source-note">Maßgebende Grenzwerte der in PDF-S. 127–130 eingeblendeten Tabelle.</p>
    <div className="erbst-table-wrap"><table className="erbst-table erbst-table--hard"><thead><tr><th>Wertgrenze § 19 Abs. 1</th><th>Klasse I bis</th><th>Klasse II bis</th><th>Klasse III bis</th></tr></thead><tbody>{ERBST1_HAERTEAUSGLEICH.map(r=><tr key={r.grenze}><td>{r.grenze}</td><td>{r.I}</td><td>{r.II}</td><td>{r.III}</td></tr>)}</tbody></table></div>
  </div>;
}

function Vorerwerbe() {
  return <div className="erbst-original erbst-paper">
    <div className="erbst-schema-title">§ 14 ErbStG · Berücksichtigung früherer Erwerbe</div>
    <div className="erbst-vorerwerb-flow">
      <div><b>Erwerbe derselben Person</b><span>innerhalb von 10 Jahren</span></div><strong>→</strong><div><b>zusammenrechnen</b><span>§ 14 Abs. 1 ErbStG</span></div><strong>→</strong><div><b>Steuer auf Gesamtbetrag</b><span>§ 19 ErbStG</span></div><strong>−</strong><div><b>Steuer auf früheren Erwerb</b><span>nach § 14 Abs. 1</span></div></div>
  </div>;
}

function Master() {
  const tabs = [
    ["§ 1", "Vorspann"], ["§ 2", ""], ["§ 20", ""], ["§ 15", ""], ["§ 9/§ 11", ""],
    ["§ 10 (1)", "Einleitung"], ["§ 12", "WSV"], ["§§ 13–13d", ""], ["§ 10 (5)/(6)", "NNAS"],
    ["§ 16", ""], ["§ 14", "Vorerwerb"], ["§ 17", ""], ["§ 10 (1) S. 6", ""], ["§ 19", "Steuer"],
  ];
  return <div className="erbst-original erbst-paper">
    <div className="erbst-schema-title">Master-Fahrtroute · Einheit 1</div>
    <div className="erbst-master-line">{tabs.map(([norm,label],i)=><div key={`${norm}-${i}`} className={`erbst-tab ${label?"erbst-tab--marked":""}`}><b>{norm}</b>{label&&<small>{label}</small>}</div>)}</div>
    <div className="erbst-master-steps"><span>I. Vorspann</span><b>→</b><span>II. Einleitung</span><b>→</b><span>III. WSV</span><b>→</b><span>NNAS</span><b>→</b><span>Erwerb/Freibeträge</span><b>→</b><span>IV. § 19</span><b>→</b><span>§ 14</span></div>
  </div>;
}

const SCHEMATA = {
  "erbst-arbeitsmittel": Arbeitsmittel,
  "erbst-vorspann": Vorspann,
  "erbst-einleitung": Einleitung,
  "erbst-wsv": WSV,
  "erbst-nnas": NNAS,
  "erbst-erwerb": Erwerb,
  "erbst-steuersatz": TarifTable,
  "erbst-haerteausgleich": Haerteausgleich,
  "erbst-vorerwerbe": Vorerwerbe,
  "erbst-master": Master,
};

export const erbstSchemaIds = Object.keys(SCHEMATA);
export default function K1ErbStSchema({ id }) {
  const C = SCHEMATA[id] || Master;
  return <C />;
}
