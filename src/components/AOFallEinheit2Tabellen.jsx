import React from "react";
import { AOVerlinkterText } from "./AOSchemaLinks";
import "./ao-einheit2-faelle.css";

const Check = () => <span className="ao2f-check">✓</span>;
const Cross = () => <span className="ao2f-cross">✕</span>;

function Cell({ children, onSchema }) {
  if (typeof children === "string") return <AOVerlinkterText text={children} onOpen={onSchema} compact />;
  return children;
}

function BekanntgabeTabelle({ variante, sachverhalt, cells, onSchema }) {
  return <section className="ao2f-variant">
    <div className="ao2f-variant__fact"><b>{variante})</b> {sachverhalt}</div>
    <div className="ao2f-scroll"><table className="ao2f-table ao2f-table--bekanntgabe">
      <thead><tr><th>Machtber. zutr. Empf.</th><th>B-Wille zust. SB</th><th>Handlungsf. Bek-Adr.</th><th>Zeitpunkt</th></tr></thead>
      <tbody><tr>
        <td><Cell onSchema={onSchema}>{cells.macht}</Cell>{cells.heilung !== undefined && <div className="ao2f-heilung"><b>Heilung § 8 VwZG</b><div><Cell onSchema={onSchema}>{cells.heilung}</Cell></div></div>}</td>
        <td><Cell onSchema={onSchema}>{cells.wille}</Cell></td>
        <td><Cell onSchema={onSchema}>{cells.handlung}</Cell></td>
        <td><Cell onSchema={onSchema}>{cells.zeit}</Cell></td>
      </tr></tbody>
    </table></div>
  </section>;
}

export function AOFall320Tabelle({ onSchema }) {
  return <div className="ao2f-source">
    <div className="ao2f-source__head"><b>Fall 3 · Quellenlösung PDF-S. 13–16</b><span>Prüfen Sie, ob und ggf. zu welchem Zeitpunkt der VA ordnungsgemäß bekanntgegeben wurde.</span></div>
    <BekanntgabeTabelle variante="a" sachverhalt="FA erlässt am 11.03.2026 einen EStB 2022; Zugang beim Stpfl. am 13.03.2026." onSchema={onSchema} cells={{
      macht:"§ 122 Abs. 1 S. 1 AO", heilung:"", wille:<Check/>, handlung:"§ 79 Abs. 1 Nr. 1 AO", zeit:"§ 122 Abs. 2 Nr. 1 AO · § 108 Abs. 3 AO → 16.03.2026 · früherer Zugang egal",
    }}/>
    <BekanntgabeTabelle variante="b" sachverhalt="Wie a), aber der Postbote legt den Brief wegen überquellendem Einzelbriefkasten auf einen Poststapel im Hausflur; der Stpfl. findet ihn nachweislich erst am 18.04.2026." onSchema={onSchema} cells={{
      macht:<><Cross/> <AOVerlinkterText text="§ 122 Abs. 1 S. 1 AO" onOpen={onSchema} compact /></>, heilung:<><Check/> am 18.04.2026</>, wille:<Check/>, handlung:"§ 79 Abs. 1 Nr. 1 AO", zeit:"§ 122 Abs. 2 Nr. 1 AO · aber Zweifel am Zugang bis 16.03.2026 (So.), daher 18.04.2026",
    }}/>
    <BekanntgabeTabelle variante="c" sachverhalt="Wie a), der zuständige Sachbearbeiter teilt dem Stpfl. jedoch am 16.03.2026 telefonisch mit, dass er seinen Willen zur Bekanntgabe widerrufe." onSchema={onSchema} cells={{
      macht:"§ 122 Abs. 1 S. 1 AO", heilung:"", wille:<div className="ao2f-stack"><span>AEAO zu § 124</span><span>Nr. 4: <Check/></span><span>Nr. 5: <Cross/></span><span>Nr. 6: <Check/></span></div>, handlung:"", zeit:"",
    }}/>
    <BekanntgabeTabelle variante="d" sachverhalt="FA erlässt am 11.03.2026 einen Zusammenveranlagungsbescheid gegenüber Herbert und Korinna Schmitz; Herbert ist wegen Ehekrise ausgezogen und erhält erst am 22.05.2026 Kenntnis." onSchema={onSchema} cells={{
      macht:<div className="ao2f-stack"><span>§ 122 Abs. 7 Nr. 1 <Check/></span><span>„da FA nicht bekannt“</span></div>, heilung:"", wille:<Check/>, handlung:"§ 79 Abs. 1 Nr. 1 AO", zeit:"§ 122 Abs. 2 Nr. 1 AO · § 108 Abs. 3 AO · 16.03.2026",
    }}/>
    <p className="ao2f-note">Leere Felder in Variante c bleiben bewusst leer: Die Quelle hat diese Zellen nicht ausgefüllt.</p>
  </div>;
}

export function AOFall321Tabelle({ onSchema }) {
  return <div className="ao2f-source">
    <div className="ao2f-source__head"><b>Fall 4 · Quellenrechnung PDF-S. 18–19</b><span>Berechnen Sie jeweils das Ende der Einspruchsfrist.</span></div>
    <div className="ao2f-scroll"><table className="ao2f-table ao2f-table--frist"><thead><tr><th>Variante</th><th>Bekanntgabe</th><th>Monatsfrist</th><th>Ende</th></tr></thead><tbody>
      <tr><td><b>a)</b><br/>Bescheid 26.01.2026; Zugang 29.01.2026</td><td><AOVerlinkterText text="§ 122 Abs. 2 Nr. 1 AO: 26.01.2026 + 4 Tage = 30.01.2026" onOpen={onSchema} compact /></td><td><AOVerlinkterText text="§ 355 Abs. 1 AO: 30.01.2026 + 1 Monat = 28.02.2026" onOpen={onSchema} compact /></td><td><b>28.02.2026 = Samstag</b><br/><AOVerlinkterText text="§ 108 Abs. 1 AO · § 188 Abs. 2 BGB · § 108 Abs. 3 AO" onOpen={onSchema} compact /><strong>→ Montag, 02.03.2026</strong></td></tr>
      <tr><td><b>b)</b><br/>Stpfl. beruft sich auf Fund über der Tageszeitung vom 31.01.2026</td><td><AOVerlinkterText text="§ 122 Abs. 2 Nr. 1 AO: Fiktion nach Quellenlösung aufgrund guter Argumente entkräftet; FA muss Zugang beweisen → 31.01.2026" onOpen={onSchema} compact /></td><td>31.01.2026 + 1 Monat</td><td><strong>→ 02.03.2026 (s.o.)</strong></td></tr>
    </tbody></table></div>
  </div>;
}

export default function AOFallEinheit2Darstellung({ fallId, onSchema }) {
  if (Number(fallId) === 320) return <AOFall320Tabelle onSchema={onSchema}/>;
  if (Number(fallId) === 321) return <AOFall321Tabelle onSchema={onSchema}/>;
  return null;
}
