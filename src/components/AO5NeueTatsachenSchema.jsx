import React from "react";
import "./ao-einheit3.css";
import "./ao-einheit5.css";

const Schritt=({n,children})=><div className="ao5-step"><i>{n}</i><div>{children}</div></div>;
const Reiter=({children,ton="green"})=><span className={ton}>{children}</span>;

export default function AO5NeueTatsachenSchema(){
  const nr1=[
    <>Tatsache</>,
    <>dem FA <b>nachträglich bekannt</b></>,
    <>Steuer <b style={{color:"var(--r)"}}>↑</b></>,
    <>kein Ermittlungsfehler des FA</>,
    <>Rechtserheblichkeit</>,
    <>keine Sperre <b>§ 173 Abs. 2 AO</b></>,
  ];
  const nr2=[
    <>Tatsache</>,
    <>dem FA <b>nachträglich bekannt</b></>,
    <>Steuer <b style={{color:"var(--g)"}}>↓</b></>,
    <>kein grobes Verschulden des Stpfl./StB</>,
    <>Rechtserheblichkeit</>,
    <>keine Sperre <b>§ 173 Abs. 2 AO</b></>,
  ];
  return <div className="ao3-sheet ao5-sheet">
    <h3 className="ao3-title">§ 173 AO · Neue Tatsachen</h3>
    <div className="ao5-compare">
      <section><h4>§ 173 Abs. 1 Nr. 1 AO ↑</h4><div className="ao5-steps">{nr1.map((x,i)=><Schritt key={i} n={i+1}>{x}</Schritt>)}</div></section>
      <section><h4>§ 173 Abs. 1 Nr. 2 AO ↓</h4><div className="ao5-steps">{nr2.map((x,i)=><Schritt key={i} n={i+1}>{x}</Schritt>)}</div></section>
    </div>
    <div className="ao5-branch-result">↘ Rechtsfolge ↙<br/><b>Aufhebung <u>oder</u> punktuelle Änderung</b></div>

    <div className="ao5-grid2">
      <section><h4>zu ① Tatsache · AEAO § 173 Nr. 1, 6.2 + 6.3</h4><p><b>Lebenssachverhalt</b> – das, was in Wirklichkeit passiert oder wider Erwarten nicht passiert ist.</p><p><b style={{color:"var(--r)"}}>Nicht:</b> bloße steuerliche Würdigung, z.B. als „BE“ / „BA“.</p><div className="ao5-note"><b>Spinnenregel:</b> grundsätzlich jede Tatsache separat in § 173 Abs. 1 AO prüfen. <u>Ausnahme der Quelle:</u> komplett neue Einkunftsquelle = <b>eine Tatsache inkl. Saldo</b>.</div></section>
      <section><h4>zu ② nachträgliches Bekanntwerden · AEAO § 173 Nr. 1.3 + 2</h4><p>Die Tatsache muss <b>vor Bescheiderlass bereits existiert</b> haben.</p><div className="ao5-flow"><div className="ao3-box ao3-box--blau"><b>erst nach Bescheid entstanden?</b></div><span>→</span><div className="ao3-box ao3-box--gelb"><b>Quellenverweis:</b><small>§ 175 Abs. 1 Nr. 2 AO</small></div></div><p>Alles, was aus <b>StErkl. + Anlagen + Akte</b> ersichtlich ist, gilt als bekannt.</p><p>„Nachträglich“ = Kenntnis erst, nachdem der zuständige Sachbearbeiter den <b>Bescheid, der geändert werden soll, freigegeben</b> hat.</p><p><small>Bescheide, die nur nach § 175 Abs. 1 Nr. 1 AO oder vollautomatisiert nach § 165 Abs. 2 AO geändert wurden, zählen laut Quellenhinweis dabei nicht mit.</small></p></section>
    </div>

    <div className="ao5-grid3">
      <section><h4>③ steuerliche Auswirkung ↑ / ↓</h4><p>kurze steuerliche Würdigung vornehmen, z.B. „König Lappe“ / nicht als BA; anschließend <b>Steuer vorher ↔ nachher</b> vergleichen.</p><small>AEAO § 173 Nr. 1.4</small></section>
      <section><h4>④ Nr. 1 · kein Ermittlungsfehler FA</h4><p>AEAO § 173 Nr. 4. Nach der Quellenbox nur relevant, wenn der Stpfl. Erklärung nach bestem Wissen & Gewissen vollständig abgegeben hat und sich dem FA ein deutlicher Prüfhinweis – insbesondere ein RMS-Prüfhinweis – aufdrängen musste, dem es nicht nachgegangen ist.</p></section>
      <section><h4>④ Nr. 2 · kein grobes Verschulden Stpfl./StB</h4><p>Eigenständige Verschuldensprüfung auf der steuermindernden Seite.</p></section>
    </div>

    <div className="ao3-card"><b>NEUE TATSACHEN</b><p>Merkkarte nach PDF-S. 38: dieselbe Tatsache kann nur nach der jeweils passenden Richtung Nr. 1 ↑ oder Nr. 2 ↓ geprüft werden.</p></div>

    <div className="ao5-tabs" aria-label="Normreiter nach PDF-S. 44">
      <Reiter>§ 179(3)</Reiter><Reiter ton="yellow">§ 164</Reiter><Reiter ton="yellow">§ 165</Reiter><Reiter>§ 169 / § 170</Reiter><Reiter ton="yellow">§ 164(2)</Reiter><Reiter>§ 171(3), (3a), (4)</Reiter><Reiter ton="yellow">§ 165(2)</Reiter><Reiter>§ 171(8)</Reiter><Reiter ton="green">Reg. FF</Reiter>
    </div>
  </div>;
}
