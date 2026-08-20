import React from "react";
import "./ao-einheit2.css";

const Hand = ({ children, ton="blau" }) => <span className={`ao2-hand ao2-hand--${ton}`}>{children}</span>;

function BekanntgabewilleHandlungsfaehigkeit(){
  return <div className="ao2-sheet ao2-wille">
    <div className="ao2-card-title">Bekanntgabewille</div>
    <div className="ao2-wille-grid">
      <section><b>2) Bekanntgabewille zust. Sachbearbeiter</b><Hand ton="lila">AEAO zu § 124 Nr. 4–6</Hand><p>Der VA wird dann mit dem Inhalt wirksam, mit dem er bekanntgegeben wird. Der Bekanntgabewille des zuständigen Sachbearbeiters wird als eigener Wirksamkeitspunkt geprüft.</p></section>
      <section><b>3) Handlungsfähigkeit des Bekanntgabeadressaten</b><Hand ton="orange">§ 79 Abs. 1 AO</Hand><ul><li>wenn volljährig: nach der Quellenregel grundsätzlich der Stpfl. selbst</li><li>Mängel dieses Punktes sind in der Quelle als nicht heilbar markiert</li><li>Koma/Demenz allein werden nicht automatisch mit fehlender Handlungsfähigkeit gleichgesetzt</li></ul></section>
    </div>
    <div className="ao2-formula"><b>Formel Wirksamkeit</b><span>nicht nichtig</span><span>ordnungsgemäße Bekanntgabe</span><span>im Machtbereich</span><span>Bekanntgabewille</span><span>Handlungsfähigkeit</span></div>
    <div className="ao2-mnemo"><span>☺</span><span>♥</span><b>„Nie ohne meine bessere Hälfte!“</b></div>
  </div>;
}

function BekanntgabeZeitpunkt(){
  return <div className="ao2-sheet">
    <h3 className="ao2-title">Zeitpunkt der Wirksamkeit → insbesondere Startschuss für Einspruchsfrist</h3>
    <div className="ao2-postcard">
      <div className="ao2-postcard__head">Grundsatz · einfacher Brief</div>
      <div className="ao2-post-rule"><b>ab 1.1.2025</b><span>Postaufgabe + 4 Tage</span><strong>§ 122 Abs. 2 Nr. 1 AO</strong></div>
      <div className="ao2-post-rule"><b>bis 31.12.2024</b><span>Postaufgabe + 3 Tage</span><strong>§ 122 Abs. 2 Nr. 1 AO</strong></div>
      <div className="ao2-post-rule ao2-post-rule--mail"><b>einfache Mail</b><span>am 4. Tag nach Absendung</span><strong>§ 122 Abs. 2a AO</strong></div>
      <div className="ao2-exceptions"><b>Ausnahmen:</b><span>Nichtzugang → FA muss Zugang beweisen</span><span>tatsächlich späterer Zugang → Stpfl. muss Zweifel substantiiert darlegen</span></div>
      <ol className="ao2-merker"><li>4 oder 3 Tage?</li><li>Postaufgabe + 4/3 Tage <em>(Bescheiddatum egal)</em></li><li>Sa / So / Feiertag prüfen → § 108 Abs. 3 AO</li><li>Vergleich mit tatsächlichem Zugang: früher nach Quelle egal; später gesondert würdigen</li></ol>
    </div>
    <div className="ao2-yellow-letter"><div className="ao2-yellow-letter__stamp">GELBER<br/>BRIEF</div><div><h4>förmliche Zustellung</h4><p>§ 122 Abs. 5 AO → VwZG; in der Quelle zusätzlich §§ 177–182 ZPO.</p><div className="ao2-plan"><span>Plan A: persönliche Übergabe</span><span>Plan B: Übergabe an volljährigen Hausbewohner</span><span>Plan C: Einlegung in den Briefkasten</span></div><small>Bei wirksamer Zustellung zählt der tatsächliche Zustellungszeitpunkt; die einfache Postfiktion wird nicht parallel angewandt.</small></div></div>
    <div className="ao2-digital"><b>Besondere Bekanntgabe durch Bereitstellung zum Datenabruf → § 122a AO</b><div><span><strong>2025</strong> Quellenhinweis: vorherige Einwilligung + Benachrichtigung/Absendung + 4 Tage</span><span><strong>2026</strong> Quellenhinweis: Bereitstellung der Daten + 4 Tage</span></div></div>
  </div>;
}

function Fristenberechnung(){
  return <div className="ao2-sheet ao2-frist">
    <h3 className="ao2-title">Berechnung von Fristen</h3>
    <div className="ao2-frist-top"><b>§ 108 Abs. 1 AO</b><span>→</span><b>§ 187, § 188 BGB</b><em>„3 um die Punkte“</em></div>
    <div className="ao2-frist-cols"><section><h4>Beginn</h4><b>Ausl.: „Ereignisfrist“</b><p>Beginn am Tag nach dem Ereignis um 0 Uhr.</p><small>§ 187 BGB</small></section><section><h4>Ende</h4><b>Abs. 2: Monate / Jahre</b><p>Ende nach der korrespondierenden Tageszahl des § 188 BGB.</p><small>§ 188 BGB</small></section></div>
    <div className="ao2-warning">⚠ Schlusskontrolle: Regel des § 108 Abs. 3 AO (Sa/So/Feiertag)</div>
  </div>;
}

function Tortenstueckfehlerlehre(){
  return <div className="ao2-sheet ao2-cake-wrap">
    <h3 className="ao2-title">Wirksamkeit ≠ Rechtmäßigkeit · „Tortenstückfehlerlehre“</h3>
    <div className="ao2-cake-area">
      <div className="ao2-cake"><div className="ao2-cake__green">100 %<br/>rechtmäßig</div><div className="ao2-cake__yellow">Standard-<br/>Fehler<br/>→ rechtswidrig</div><div className="ao2-cake__red">☠<br/>nichtig</div><span className="ao2-cake__wirksam">wirksam</span><span className="ao2-cake__unwirksam">unwirksam</span><span className="ao2-cake__begr">begr.</span><span className="ao2-cake__unbegr">unbegr.</span></div>
      <div className="ao2-errorlists"><section className="ao2-errorlists__green"><b>Fehler ohne automatische Unwirksamkeit</b><ul><li>fehlende Rechtsbehelfsbelehrung · § 157 Abs. 1 S. 3 AO</li><li>VA ohne Datum</li><li>unrichtige Angabe einer Korrekturvorschrift, wenn eine andere greift</li></ul></section><section className="ao2-errorlists__orange"><b>Standardfehler</b><ul><li>Steuer zu hoch / zu niedrig</li><li>Änderung, obwohl keine Korrekturvorschrift greift</li><li>Verstoß gegen örtliche Zuständigkeit · §§ 17 ff. AO</li><li>unterbliebene Anhörung · § 91 AO</li><li>fehlende Begründung · § 121 AO</li></ul><p><strong>Heilung:</strong> § 126 AO · <strong>Unbeachtlichkeit:</strong> § 127 AO nach Quellenvoraussetzungen</p></section></div>
    </div>
    <p className="ao2-cake-note">Merke der Quelle: Ist ein VA nicht nichtig und ordnungsgemäß bekanntgegeben, ist er wirksam. Standardfehler machen ihn ggf. rechtswidrig, nicht automatisch unwirksam.</p>
  </div>;
}

function FehlerhafterVAPlanAB(){
  return <div className="ao2-sheet ao2-planab"><h3 className="ao2-title">Prüfungsreihenfolge · Was tun, wenn ein vermeintlich fehlerhafter VA vorliegt?</h3><div className="ao2-planab__start">Prüfe, ob Einspruch eingelegt wurde <u>oder</u> noch werden kann</div><div className="ao2-planab__branches"><section><span>JA ↓</span><b>Plan A</b><p>Prüfe Erfolgsaussichten des Einspruchs</p><strong>Erfolgsformel</strong></section><section><span>NEIN ↓</span><b>Plan B</b><p>Prüfe, ob der VA noch im Korrekturverfahren aufgehoben / geändert werden kann</p><strong>§§ 172 ff. AO</strong></section></div></div>;
}

function EinspruchGrundlagen(){
  return <div className="ao2-sheet ao2-einspruch"><h3 className="ao2-title">Einspruchsverfahren · förmlicher außergerichtlicher Rechtsbehelf</h3><div className="ao2-dog"><span>🐕</span><div><b>⚠ Einspruch geht dem Umfang nach auf sämtliche Änderung vor!</b><p>Die Quelle warnt zugleich: Das FA darf im Einspruchsverfahren auch zum Nachteil ändern (Verböserung).</p></div></div><div className="ao2-einspruch-grid"><section><b>Auslegung</b><p>Im Zweifel schriftliche Einwendungen des Stpfl. als möglichst viele Einsprüche auslegen – bestmöglicher Rechtsschutz.</p><small>Ausnahmen laut Quelle insbesondere bei eindeutiger Erklärung / eindeutig zu spät / rein telefonisch.</small></section><section><b>AdV</b><p>Aussetzung der Vollziehung als vorläufiger Rechtsschutz mitdenken.</p><strong>§ 361 AO</strong></section><section><b>Begründung</b><p>Kann nach Fristablauf nachgeholt und erweitert werden.</p></section><section><b>Erfolgsformel</b><p>Einspruch ist nur erfolgreich, wenn</p><strong>ZULÄSSIG <u>und</u> BEGRÜNDET</strong></section></div></div>;
}

function EinspruchZulaessigkeitForm(){
  return <div className="ao2-sheet ao2-zulaessig"><h3 className="ao2-title">I. Zulässigkeit des Einspruchs</h3><div className="ao2-zulaessig__mnemo">„Schöne Frauen Fahren Elektro Benz“</div><div className="ao2-zulaessig-grid"><section><span>1</span><h4>Statthaftigkeit</h4><b>§ 347 AO · § 348 AO</b><ul><li>statthaft gegen die in § 347 AO erfassten Verwaltungsakte</li><li>nach der Quelle unabhängig davon, ob VA wirksam oder unwirksam</li><li>Sonderfall Untätigkeit nach der in der Quelle notierten Frist</li><li>gegen Einspruchsentscheidung: Weg zum Finanzgericht</li></ul></section><section><span>2</span><h4>Form</h4><b>§ 357 Abs. 1 und 3 AO</b><ul><li>schriftlich</li><li>elektronisch (z.B. ELSTER, Mail)</li><li>zur Niederschrift</li><li>fehlende Unterschrift / elektronische Signatur nach Quellenregel unschädlich, wenn Einspruchsführer anderweitig identifizierbar</li><li>falsche Bezeichnung („Widerspruch/Beschwerde“) unschädlich</li></ul><div className="ao2-optional"><b>Abs. 3 optional:</b> Bezeichnung angefochtener VA + Begehren + Begründung</div></section></div></div>;
}

function EinspruchFristWirkung(){
  return <div className="ao2-sheet ao2-einspruch-frist"><h3 className="ao2-title">3) Frist · § 355 + § 356 + § 357 Abs. 2 + ggf. § 110 AO</h3><div className="ao2-einspruch-frist-grid"><section><h4>Dauer</h4><p><b>1 Monat</b>, wenn ordnungsgemäße Rechtsbehelfsbelehrung vorliegt.</p><p><b>1 Jahr</b> bei schriftlichem/elektronischem VA ohne ordnungsgemäße RBB nach der Quellenübersicht; nach formgerechter Nachholung: 1 Monat ab dann.</p></section><section><h4>Beginn</h4><p>Grundsatz: mit <b>Wirksamkeit des VA</b>.</p><p>Gegen unwirksame VA: in der Quelle als <b>unbefristet</b> notiert.</p><p>Sonderfall Steueranmeldung nach der in § 355 Abs. 1 S. 2 AO notierten Quellenregel.</p></section><section><h4>Ende</h4><p>§ 108 Abs. 1 AO → §§ 187, 188 BGB</p><p>ggf. § 108 Abs. 3 AO</p></section></div><div className="ao2-backpfeife"><div><b>Wirkung / fristwahrender Eingang</b><p>Maßgeblich ist der Zeitpunkt des Eingangs bei dem nach § 357 Abs. 2 AO zulässigen Anbringungs-Finanzamt.</p></div><div className="ao2-backpfeife-arrows"><span>Stpfl. → FA, das den VA erlassen hat<br/><small>„Backpfeifentheorie“</small></span><span>Feststellungsbescheid → alternativ auch ESt-FA<br/><small>„doppelte Backpfeifentheorie“</small></span></div><div className="ao2-bindung">⚠ Inhaltlich muss sich der Einspruch gegen den Feststellungsbescheid richten; Bindungswirkung beachten → § 351 Abs. 2 AO.</div></div></div>;
}

export const AO2_SCHEMATA = {
  "ao-bekanntgabewille-handlungsfaehigkeit": BekanntgabewilleHandlungsfaehigkeit,
  "ao-bekanntgabe-zeitpunkt": BekanntgabeZeitpunkt,
  "ao-fristenberechnung": Fristenberechnung,
  "ao-tortenstueckfehlerlehre": Tortenstueckfehlerlehre,
  "ao-fehlerhafter-va-plan-a-b": FehlerhafterVAPlanAB,
  "ao-einspruch-grundlagen": EinspruchGrundlagen,
  "ao-einspruch-zulaessigkeit-form": EinspruchZulaessigkeitForm,
  "ao-einspruch-frist-wirkung": EinspruchFristWirkung,
};

export const ao2SchemaIds = Object.keys(AO2_SCHEMATA);
