import React from "react";
import { AOVerlinkterText } from "./AOSchemaLinks";
import "./ao-fall334.css";

export default function AOFall334Darstellung({ onSchema }) {
  return <div className="ao334-source">
    <div className="ao334-head"><div><span className="kicker">Quellenlösung · AO Einheit 3 · PDF-S. 42–43</span><h3>ESt 2001 · § 129 AO trifft auf abgelaufene Festsetzungsfrist</h3></div><b>100 % begründet</b></div>
    <div className="ao334-timeline">
      <div><time>02.03.2002</time><strong>EStB 2001</strong><small>ursprünglicher Bescheid</small></div>
      <span>→</span>
      <div><time>07.07.2006</time><strong>Änderungsbescheid</strong><small>Quelle: Änderung; Fehler bleibt enthalten</small></div>
      <span>→</span>
      <div className="ao334-bad"><time>08.03.2007</time><strong>Berichtigungsbescheid</strong><small>§ 129 AO · angegriffen</small></div>
    </div>
    <div className="ao334-calc">
      <section><b>1. Offenbare Unrichtigkeit</b><p>Die Quellenlösung behandelt den Schreib-/Rechenfehler als grundsätzlich von <AOVerlinkterText text="§ 129 AO" onOpen={onSchema} compact /> erfasst.</p></section>
      <section><b>2. Festsetzungsfrist</b><ol><li>Beginn nach <AOVerlinkterText text="§ 170 Abs. 2 S. 1 Nr. 1 AO" onOpen={onSchema} compact />.</li><li>Dauer: 4 Jahre.</li><li>Quellenrechnung: Ende mit Ablauf <strong>31.12.2006</strong>.</li></ol></section>
      <section className="ao334-result"><b>3. Folge</b><p>Der Berichtigungsbescheid vom 08.03.2007 liegt außerhalb der Festsetzungsfrist. <AOVerlinkterText text="§ 169 Abs. 1 S. 1 AO" onOpen={onSchema} compact /> steht der Änderung entgegen.</p><strong>→ Einspruch 100 % begründet; Bescheid per Abhilfe aufheben.</strong></section>
    </div>
  </div>;
}
