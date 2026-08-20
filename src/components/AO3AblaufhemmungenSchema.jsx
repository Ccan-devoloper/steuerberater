import React from "react";
import "./ao-einheit3.css";

export default function AO3AblaufhemmungenSchema(){
  return <div className="ao3-sheet">
    <h3 className="ao3-title">Ablaufhemmungen · § 171 AO</h3>
    <div className="ao3-tabs"><span className="pink">§ 357</span><span className="pink">§ 355 / § 356 / § 357 II</span><span className="pink">§ 110</span><span className="pink">§ 352</span><span className="pink">§ 350</span><span className="pink">§ 358</span><span className="gruen">§ 171 (3a)</span><span className="rot">§ 100 FGO</span><span className="rot">§ 351 (1)</span><span className="rot">§ 367 (2)</span></div>
    <div className="ao3-split">
      <section>
        <h4>§ 171 Abs. 3a AO</h4>
        <b>Voraussetzung: zulässiger Einspruch · Plan A</b>
        <p><strong>Rechtsfolge laut Quelle:</strong> vollumfängliche Ablaufhemmung für alle Fehler, die bei Postaufgabe des angefochtenen Bescheids noch nicht verjährt waren.</p>
        <div className="ao3-timeline"><span>FF 31.12.06</span><i>────────────</i><span className="target">◎ EStB v. 03.03.07 / Einspruch</span></div>
      </section>
      <section>
        <h4>§ 171 Abs. 4 AO · Hemmung durch Außenprüfung</h4>
        <div className="ao3-box ao3-box--gelb"><b>1. wirksame Prüfungsanordnung</b><small>§ 196 AO · vor Ablauf der Festsetzungsfrist · AEAO zu § 171 Nr. 2.2.1</small></div>
        <div className="ao3-arrow">↓</div>
        <div className="ao3-mini-branch"><span><b>2a)</b> Beginn vor Ablauf der FF</span><span>oder</span><span><b>2b)</b> Verschiebung des Beginns auf Antrag / nach der Quellenregel</span></div>
      </section>
    </div>
    <div className="ao3-note">Die Originalseiten 51–53 trennen die Einspruchshemmung und die Außenprüfungshemmung strikt. Beide werden deshalb auch digital als zwei eigenständige Prüfungsäste dargestellt.</div>
  </div>;
}
