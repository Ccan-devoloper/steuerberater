import React from "react";
import "./ao-einheit3.css";

export default function AO3FestsetzungsfristBeginn(){
  return <div className="ao3-sheet">
    <h3 className="ao3-title">Festsetzungsfrist · §§ 169–171 AO</h3>
    <div className="ao3-flow-row">
      <div className="ao3-box ao3-box--gruen"><b>Steuerbescheid</b><small>Festsetzungsfrist §§ 169–171 AO</small></div>
      <span>↔</span>
      <div className="ao3-box ao3-box--blau"><b>Feststellungsbescheid</b><small>Feststellungsfrist · § 181 Abs. 1 S. 1 AO</small></div>
    </div>
    <div className="ao3-note"><b>§ 169 Abs. 1 S. 1 AO</b><br/>Erlass, Aufhebung oder Änderung sind nicht mehr erlaubt, soweit die Festsetzungsfrist abgelaufen ist. Die Quelle markiert den Verstoß als <b>rechtswidrig, aber trotzdem wirksam</b>.</div>
    <div className="ao3-big-note">Beachte: Postaufgabe durch das zuständige Finanzamt bzw. Bereitstellung zum Datenabruf vor Ablauf der Festsetzungsfrist reicht nach der Quellenmarkierung aus · § 169 Abs. 1 S. 3 Nr. 1 AO.</div>
    <h3 className="ao3-title" style={{marginTop:24}}>1) Beginn · § 170 AO</h3>
    <div className="ao3-split">
      <section><h4>Erklärungspflichtig</h4><p>Quelle nennt als Beispiele insbesondere ESt-/USt-Erklärungspflichten.</p><div className="ao3-tabs"><span className="orange">§ 149 AO</span><span className="orange">§ 25 Abs. 3 EStG</span><span className="orange">§ 56 EStDV</span><span className="orange">§ 18 UStG</span></div><p><b>§ 170 Abs. 2 AO</b> → Anlaufhemmung</p></section>
      <section><h4>Keine Erklärungspflicht</h4><p>Grundregel des § 170 Abs. 1 AO.</p><p>Ausgangspunkt bleibt die Steuerentstehung nach § 38 AO.</p></section>
    </div>
    <div className="ao3-note">Reihenfolge der Originalseite: Steuerentstehung → Erklärungspflicht → Beginn der Festsetzungsfrist. Erst danach wird die Dauer bestimmt.</div>
  </div>;
}
