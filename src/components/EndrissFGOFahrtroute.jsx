import React from 'react';
import { fgoFahrtrouteQuelle, fgoFahrtrouteSchritte, fgoFahrtrouteHinweis } from '../data/endriss-fgo-fahrtroute.js';
import { fgoErsteSeite } from '../data/endriss-fgo-arbeitsstand.js';
import './ao-einheit3.css';
import './ao-einheit5.css';
import './ao-einheit6.css';

export default function EndrissFGOFahrtroute() {
  return <div className="ao3-sheet ao6-sheet" data-endriss-fgo-fahrtroute="12" data-source-page="1">
    <h3 className="ao3-title">Zulässigkeits-/Sachurteilsvoraussetzungen · FGO-Fahrtroute</h3>
    <p className="ao6-source-note">12 Stationen · handschriftliche Fähnchenkette · FGO (2).pdf, Seite 1</p>
    <div className="ao6-fgo-route" role="list" aria-label="Zwölf Stationen der FGO-Fahrtroute">
      {fgoFahrtrouteSchritte.map(schritt => <div className="ao6-fgo-step" role="listitem" data-fgo-step={schritt.nummer} key={schritt.nummer}>
        <i aria-label={`Station ${schritt.nummer}`}>{schritt.nummer}</i>
        <b>{schritt.norm}</b>
        <span><strong>{schritt.titel}</strong>{schritt.notizen.map((notiz, i) => <small style={{ display: 'block', marginTop: '.35em' }} key={i}>{notiz}</small>)}</span>
      </div>)}
    </div>
    <div className="ao5-note ao5-note--yellow">{fgoFahrtrouteHinweis}</div>
    <p className="ao6-source-note">{fgoErsteSeite[0].bloecke[2].text}</p>
    <p className="ao6-source-note"><a href={`https://drive.google.com/file/d/${fgoFahrtrouteQuelle.driveId}/view`} target="_blank" rel="noreferrer">Originalquelle öffnen</a> · Der bestehende Schema-Einstieg bleibt erhalten; ergänzt sind insbesondere die Stationen 11 und 12 sowie die Randverweise zur Fristberechnung.</p>
  </div>;
}
