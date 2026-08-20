import React from "react";
import "./ao-tortenstueck-original.css";

export default function AOTortenstueckSchema() {
  return (
    <div className="ao2-sheet ao-torte-original">
      <h3 className="ao-torte-title">Wirksamkeit ≠ Rechtmäßigkeit</h3>

      <div className="ao-torte-top">
        <div className="ao-torte-svgwrap" aria-label="Digitale Nachzeichnung der Tortenstückfehlerlehre aus AO Einheit 2, PDF-Seite 22">
          <svg className="ao-torte-svg" viewBox="0 0 760 410" role="img" aria-labelledby="ao-torte-svg-title ao-torte-svg-desc">
            <title id="ao-torte-svg-title">Tortenstückfehlerlehre</title>
            <desc id="ao-torte-svg-desc">Drei perspektivisch gestapelte Ebenen: 100 Prozent rechtmäßig, Standard-Fehler gleich rechtswidrig und nichtig. Darüber ein Unwirksamkeitsblock. Seitlich Wirksamkeit sowie begründet und unbegründet.</desc>
            <defs>
              <marker id="ao-torte-arrow-green" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#35a84b" />
              </marker>
              <marker id="ao-torte-arrow-orange" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#c58a20" />
              </marker>
            </defs>

            {/* äußerer Perspektivkeil der Quelle */}
            <polyline className="ao-torte-outline ao-torte-outline--left" points="128,365 270,205 355,120" />
            <polyline className="ao-torte-outline ao-torte-outline--blue" points="224,365 270,285 313,205 355,120" />

            {/* Ebenen 21 / 22a / 23 */}
            <polygon className="ao-torte-plane ao-torte-plane--green" points="270,285 505,285 460,365 225,365" />
            <polygon className="ao-torte-plane ao-torte-plane--yellow" points="313,205 548,205 505,285 270,285" />
            <polygon className="ao-torte-plane ao-torte-plane--red" points="355,120 590,120 548,205 313,205" />

            {/* oberer Unwirksamkeitsblock */}
            <rect className="ao-torte-topblock" x="366" y="8" width="118" height="112" />

            <text className="ao-torte-hand ao-torte-level ao-torte-level--21" x="252" y="318">21</text>
            <text className="ao-torte-hand ao-torte-level ao-torte-level--22" x="294" y="238">22a</text>
            <text className="ao-torte-hand ao-torte-level ao-torte-level--23" x="360" y="150">23</text>

            <text className="ao-torte-hand ao-torte-green-text" textAnchor="middle" x="380" y="326">100 %</text>
            <text className="ao-torte-hand ao-torte-green-text" textAnchor="middle" x="380" y="352">rechtmäßig</text>

            <text className="ao-torte-hand ao-torte-yellow-text" textAnchor="middle" x="410" y="231">Standard-</text>
            <text className="ao-torte-hand ao-torte-yellow-text" textAnchor="middle" x="410" y="254">Fehler</text>
            <text className="ao-torte-hand ao-torte-yellow-text ao-torte-small" textAnchor="middle" x="410" y="277">= rechtswidrig</text>

            <text className="ao-torte-skull" textAnchor="middle" x="455" y="151">☠</text>
            <text className="ao-torte-hand ao-torte-red-text" textAnchor="middle" x="455" y="183">nichtig</text>

            {/* Wirksamkeit links */}
            <line className="ao-torte-guide ao-torte-guide--green" x1="142" y1="257" x2="273" y2="257" />
            <text className="ao-torte-hand ao-torte-label ao-torte-label--wirksam" x="82" y="265">wirksam</text>

            <line className="ao-torte-guide ao-torte-guide--red" x1="228" y1="158" x2="313" y2="158" />
            <text className="ao-torte-hand ao-torte-label ao-torte-label--unwirksam" x="145" y="166">unwirksam</text>

            {/* begründet / unbegründet rechts wie in der Quelle */}
            <polyline className="ao-torte-bracket" points="612,120 585,205 555,205" />
            <text className="ao-torte-hand ao-torte-label ao-torte-label--begr" x="620" y="195">begr.</text>
            <line className="ao-torte-guide ao-torte-guide--purple" x1="505" y1="326" x2="558" y2="326" />
            <text className="ao-torte-hand ao-torte-label ao-torte-label--unbegr" x="566" y="334">unbegr.</text>

            {/* Pfeile der Originalskizze */}
            <line className="ao-torte-arrow ao-torte-arrow--green" x1="506" y1="326" x2="716" y2="326" markerEnd="url(#ao-torte-arrow-green)" />
            <line className="ao-torte-arrow ao-torte-arrow--orange" x1="505" y1="286" x2="505" y2="395" markerEnd="url(#ao-torte-arrow-orange)" />

            {/* rote Quellenanmerkung */}
            <text className="ao-torte-hand ao-torte-note-red" x="525" y="62">s.o. Totenkopffehlerlehre</text>
            <line className="ao-torte-note-line" x1="518" y1="69" x2="487" y2="126" />

            {/* kleine Fragefigur links unten */}
            <text className="ao-torte-question" x="36" y="315">?</text>
            <circle className="ao-torte-figure" cx="70" cy="324" r="11" />
            <line className="ao-torte-figure" x1="70" y1="335" x2="70" y2="360" />
            <line className="ao-torte-figure" x1="70" y1="342" x2="54" y2="350" />
            <line className="ao-torte-figure" x1="70" y1="342" x2="85" y2="334" />
            <line className="ao-torte-figure" x1="70" y1="360" x2="60" y2="378" />
            <line className="ao-torte-figure" x1="70" y1="360" x2="82" y2="378" />
            <rect className="ao-torte-paper" x="84" y="319" width="16" height="20" transform="rotate(12 92 329)" />
          </svg>
        </div>

        <div className="ao-torte-green-notes">
          <ul>
            <li><b>Fehlende RBB</b> · § 157 Abs. 1 S. 3 AO</li>
            <li>VA ohne Datum</li>
            <li>Angabe einer unzutreffenden Korrekturvorschrift, während eine andere Korrekturvorschrift greift <small>(AEAO vor §§ 172–177 Nr. 5)</small></li>
          </ul>
          <div className="ao-torte-green-rule">Verstoß egal, wenn ansonsten alles richtig und kein Ermessens-VA → <b>§ 127 AO</b></div>
          <div className="ao-torte-heal-rule">Heilbar durch formfreie Nachholung → <b>§ 126 Abs. 1 Nr. 2/3 AO</b></div>
        </div>
      </div>

      <div className="ao-torte-bottom">
        <div className="ao-torte-wound" aria-label="Wunde Heilung Narbe">
          <div><span>Wunde</span><i className="ao-torte-woundmark" /></div>
          <b>↓</b>
          <div><span>Heilung<br/>§ 126 AO</span><i className="ao-torte-bandage" /></div>
          <b>↓</b>
          <div><span>Narbe<br/>§ 126 Abs. 3 AO</span><i className="ao-torte-scar" /></div>
        </div>

        <div className="ao-torte-orange-notes">
          <ul>
            <li>Steuer zu hoch / niedrig</li>
            <li>Verstoß gegen allg. FFF</li>
            <li>Änderung, obwohl keine Korrekturvorschrift greift</li>
          </ul>
          <div className="ao-torte-boxed">Verstoß gegen örtliche Zuständigkeit · §§ 17 ff. AO</div>
          <div className="ao-torte-boxed">Unterbliebene Anhörung · § 91 AO</div>
          <div className="ao-torte-boxed">Fehlende Begründung · § 121 AO</div>
        </div>
      </div>

      <div className="ao-torte-merke">
        <b>Merke:</b> Nicht nichtig + ordnungsgemäß bekanntgegeben = wirksam. Standardfehler können den Verwaltungsakt rechtswidrig machen, ohne seine Wirksamkeit automatisch zu beseitigen.
      </div>
    </div>
  );
}
