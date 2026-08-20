import React from "react";
import "./ao-einheit3.css";
import "./ao-einheit4.css";

const Box=({children,ton="blau",className=""})=><div className={`ao3-box ao3-box--${ton} ${className}`}>{children}</div>;
const Arrow=()=> <span className="ao3-arrow">↓</span>;
const Note=({children,ton="yellow"})=><div className={`ao4-note ao4-note--${ton}`}>{children}</div>;
const Tabs=({items})=><div className="ao4-tabs">{items.map(([text,ton],i)=><span key={i} className={ton}>{text}</span>)}</div>;
const Calc=({rows})=><div className="ao4-calc">{rows.map(([l,r],i)=><div key={i}><b>{l}</b><span>{r}</span></div>)}</div>;
const Timeline=({points})=><div className="ao4-timeline" style={{"--n":points.length}}>{points.map((p,i)=><div key={`${p[0]}-${i}`} className={`ao4-point${p[2]?` ao4-point--${p[2]}`:""}`}><b>{p[0]}</b><small>{p[1]}</small></div>)}</div>;

function Aussenpruefung(){return <div className="ao3-sheet ao4-sheet">
  <h3 className="ao3-title">Ablaufhemmung durch Außenprüfung · § 171 Abs. 4 AO</h3>
  <div className="ao4-center"><span className="ao4-kicker">Voraussetzung</span><Box ton="gelb">① wirksame Prüfungsanordnung · § 196 AO · vor Ablauf der FF</Box></div>
  <div className="ao3-split">
    <section><h4>② Beginn vor Ablauf FF</h4><ul><li>tatsächliche Prüfungshandlungen</li><li>erkennbares Außenstadium</li><li>reine interne Vorbereitung reicht nicht</li></ul></section>
    <section><h4>② Hinausschiebung vor Ablauf FF</h4><ul><li>auf Antrag des Stpfl.</li><li>konkreter Tag vorgeschlagen</li><li>Quelle: grds. max. zwei Jahre bis zum tatsächlichen Beginn</li></ul></section>
  </div>
  <div className="ao4-bracket">Dauer der Hemmung hängt vom weiteren Verlauf der Außenprüfung ab</div>
  <div className="ao4-grid3">
    <section><h4>BP-Bescheide</h4><b>§ 171 Abs. 4 S. 1 AO</b><Arrow/><p>Ende mit <b>Unanfechtbarkeit</b> der aufgrund der AP erlassenen Bescheide.</p><Note>Bei zulässigem Einspruch keine Unanfechtbarkeit; § 171 Abs. 3a AO mitdenken.</Note></section>
    <section><h4>Nullmitteilung</h4><b>§ 171 Abs. 4 S. 1 AO</b><Arrow/><p>Ende nach der in der Quelle notierten Drei-Monats-Regel.</p></section>
    <section><h4>äußerste Grenze</h4><b>§ 171 Abs. 4 S. 3 AO</b><Arrow/><p>Jahr der Schlussbesprechung + vier Jahre; ohne Schlussbesprechung: Jahr der letzten Prüfungshandlung + vier Jahre.</p></section>
  </div>
  <Note ton="green">Reichweite nur für die in der wirksamen PA bezeichneten/geprüften Steuerarten und Besteuerungszeiträume.</Note>
  <Tabs items={[["§ 169","green"],["§ 171(4)","green"],["§ 196","yellow"],["§ 171(3a)","pink"]]}/>
</div>}

function APBeispiel(){return <div className="ao3-sheet ao4-sheet">
  <h3 className="ao3-title">Original-Zeitstrahl Außenprüfung · PDF-S. 12</h3>
  <Timeline points={[["7.7.2016","ESt 2015 · Erklärung"],["14.12.2020","wirks. PA + AP-Beginn"],["17.2.2021","letzte Ermittlung"],["10.8.2026","Schlussbesprechung","red"],["14.9.2026","BP-Bescheide","red"],["6.10.2026","Einspruch","red"]]}/>
  <div className="ao4-decision"><div className="bad"><b>§ 171 Abs. 4 S. 3 AO</b><strong>äußerste Grenze: 31.12.2030</strong><p>weil eine Schlussbesprechung stattgefunden hat</p></div><div className="good"><b>§ 171 Abs. 4 S. 1 AO</b><strong>Hemmung läuft weiter</strong><p>weil der Einspruch die Unanfechtbarkeit verhindert</p></div></div>
</div>}

function APUunterbrechung(){return <div className="ao3-sheet ao4-sheet">
  <h3 className="ao3-title">„Pro-forma-Beginn-Killer“ · § 171 Abs. 4 S. 2 AO</h3>
  <div className="ao4-checklist">
    <div><b>1</b><span><strong>unmittelbar nach Prüfungsbeginn</strong><small className="ao4-sub">= im Anfangsstadium</small></span></div>
    <div><b>2</b><span><strong>Unterbrechung &gt; 6 Monate</strong></span></div>
    <div><b>3</b><span><strong>aus Gründen der Finanzbehörde</strong><small className="ao4-sub">z.B. Prüfer krank/pensioniert; „Prüfung vergessen“</small></span></div>
  </div>
  <Note ton="red">Nach der Quellenskizze nicht: Sphäre des Stpfl., Naturereignisse, AdV der PA – auch wenn von Amts wegen.</Note>
  <div className="ao3-big-note">RF: Als Beginn gilt erst die Wiederaufnahme nach der Unterbrechung.</div>
  <Timeline points={[["5.3.06","Beginn + wirks. PA"],["6.3.06","Unterbrechung"],["11.11.06","Fortsetzung","green"],["31.12.06","reguläres FF-Ende"],["7.7.07","BP-Bescheid","red"]]}/>
  <div className="ao4-interruption">⌒ Unterbrechung &gt; 6 Monate ⌒</div>
  <Note ton="green">Quelle S. 17: keine neue PA erforderlich.</Note>
</div>}

const rowsBase=[
 ["Schreib-/Rechenfehler","§ 171 Abs. 2 S. 1 AO","§ 129 AO"],
 ["Schreib-/Rechenfehler","§ 171 Abs. 2 S. 2 AO","§ 173a AO"],
 ["Antrag vor Ablauf FF","§ 171 Abs. 3 AO","§ 164 Abs. 2 / § 173 Abs. 1 / …"],
 ["zulässiger Einspruch","§ 171 Abs. 3a AO","§ 367 Abs. 2 S. 1 AO"],
 ["AP + wirks. PA","§ 171 Abs. 4 AO","§ 164 Abs. 2 / § 173 Abs. 1 / …"],
 ["SteuFa / StraBuSt","§ 171 Abs. 5 AO","? ______ und § 173 Abs. 1 · 'nicht:' ?"],
 ["StHi","§ 169 Abs. 2 S. 2 AO","? ______ und § 173 Abs. 1 · 'nicht:' ?"],
 ["Beichte","§ 171 Abs. 9 AO","§ 173 Abs. 1 AO · 'nicht:' ?"],
];
function PairTable({rows=rowsBase}){return <div className="ao4-pairs"><section><b>Ereignis</b><b>Frist-/Hemmungsnorm</b><b>♥</b><b>Korrektur / Folge</b></section>{rows.map((r,i)=><section key={`${r[0]}-${i}`}><span>{r[0]}</span><span>{r[1]}</span><b className="ao4-heart">{r[2]==="—"?"—":"♥"}</b><span className={r[2].startsWith("?")?"open":""}>{r[2]}</span></section>)}</div>}
function Paerchen(){return <div className="ao3-sheet ao4-sheet">
  <h3 className="ao3-title">Korrekturpärchen · PDF-S. 18–24</h3>
  <div className="ao3-big-note">Erst Frist-/Hemmungsnorm bestimmen, dann Korrekturvorschrift zuordnen.</div>
  <PairTable/>
  <div className="ao4-grid3"><section><h4>🛡 SteuFa / StraBuSt</h4><b>§ 171 Abs. 5 AO</b></section><section><h4>😈 Steuerhinterziehung</h4><b>§ 169 Abs. 2 S. 2 AO</b></section><section><h4>⛪ „Beichte“</h4><b>§ 171 Abs. 9 AO ↔ § 173 Abs. 1 AO</b></section></div>
  <Note>Die waagerechten Leerstellen und Fragezeichen der Seiten 20/22/24 bleiben sichtbar; sie werden nicht durch Fremdwissen ergänzt.</Note>
</div>}

function Grundlagenbescheid(){return <div className="ao3-sheet ao4-sheet">
  <h3 className="ao3-title">§ 171 Abs. 10 S. 1 AO · wirksamer Grundlagen-/Feststellungsbescheid</h3>
  <div className="ao4-flow"><Box ton="pink"><b>① Erlass / Aufhebung / Änderung</b></Box><span>+</span><Box ton="gelb"><b>② wirksamer Grundlagenbescheid</b></Box><span>→</span><Box ton="gruen"><b>Ablaufhemmung</b><small>§ 171 Abs. 10 S. 1 AO</small></Box></div>
  <div className="ao4-grid2">
    <section><h4>Definition der Quelle</h4><p>Grundlagenbescheid = <b>VA mit Bindungswirkung</b> für den Folgebescheid.</p><p>Insbesondere: <b>Feststellungsbescheide</b>.</p><b>§ 182 Abs. 1 S. 1 AO</b></section>
    <section><h4>Wirksamkeitsformel F-Bescheid</h4><ol><li><b>nicht nichtig</b></li><li><b>ordnungsgemäß bekanntgegeben</b></li><li><span className="ao4-question">?</span> – Punkt ③ bleibt in der Quelle offen</li></ol><b>= wirksam</b></section>
  </div>
  <div className="ao4-flow"><Box ton="gruen">wirksamer F-Bescheid</Box><span>→</span><Box>Folgebescheid</Box><span>→</span><Box ton="gelb">§ 175 Abs. 1 Nr. 1 AO</Box></div>
  <Tabs items={[["§ 171(10)","green"],["§ 182(1)","yellow"],["§ 175(1) Nr. 1","pink"]]}/>
</div>}

function GrundlagenEinspruch(){return <div className="ao3-sheet ao4-sheet">
  <h3 className="ao3-title">„Brechstange“ · § 171 Abs. 10 S. 1 AO</h3>
  <Note ton="red">Die Hemmung greift nach der Quellenlogik auch dann, wenn die reguläre FF des ESt-Folgebescheids schon abgelaufen war.</Note>
  <div className="ao4-formula"><Box ton="gruen"><b>F-Bescheid</b><small>bekanntgegeben</small></Box><span>+ 2 Jahre</span><Box ton="blau"><b>ESt-Folgebescheid</b><small>punktuell noch änderbar</small></Box></div>
  <Calc rows={[["F-Bescheid","7.7.07"],["Bekanntgabe","10.7.07"],["+ 2 Jahre","10.7.09"]]}/>
  <div className="ao4-grid2"><section><h4>Aufhebung des VdN</h4><p>Die bloße <b>Aufhebung des VdN</b> im F-Bescheid löst nach der Quelle ebenfalls neue zwei Jahre aus.</p></section><section><h4>Folgebescheid</h4><p>Änderungsweg: <b>§ 175 Abs. 1 Nr. 1 AO</b>.</p></section></div>
  <div className="ao4-decision"><div className="good"><b>Abhilfebescheid</b><strong>neue 2 Jahre</strong></div><div className="good"><b>EE mit Teilerfolg</b><strong>neue 2 Jahre</strong></div><div className="bad"><b>EE ohne Erfolg</b><strong>keine neue Hemmung – nichts geändert</strong></div><div className="good"><b>EE mit Verböserung</b><strong>neue 2 Jahre</strong></div></div>
  <div className="ao4-grid2"><section><h4>Feststellungsfrist</h4><p>§ 181 Abs. 1 S. 1 AO → § 171 Abs. 3a AO.</p></section><section><h4>Festsetzungsfrist Folgebescheid</h4><p>separat § 171 Abs. 10 S. 1 AO prüfen.</p></section></div>
  <div className="ao4-grid2"><section><h4>AdV · Grundlage</h4><p><b>§ 361 Abs. 3 S. 2 AO</b></p><p>Quelle: Folgefrage „Änderung EStB“.</p></section><section><h4>Folge-AdV</h4><p><b>§ 361 Abs. 3 S. 1 AO</b></p></section></div>
</div>}

function Feststellung181(){return <div className="ao3-sheet ao4-sheet">
  <h3 className="ao3-title">§ 181 Abs. 5 AO · Feststellungsfrist bereits abgelaufen</h3>
  <div className="ao4-bound"><Box className="ao4-cross"><b>F-Bescheid 2019</b><small>Wendler KG</small></Box><span>→</span><Box ton="gruen"><b>EStB 2019</b><small>MW · Bindungswirkung § 182 Abs. 1 S. 1 AO</small></Box></div>
  <div className="ao4-grid2"><section><h4>Feststellungsfrist läuft</h4><p>F-Bescheid darf ergehen: § 181 Abs. 1 S. 1 → § 169 Abs. 1 S. 1 AO.</p></section><section><h4>Feststellungsfrist abgelaufen</h4><p>F-Bescheid nach § 181 Abs. 5 AO nur mit <b>einschränkendem Wirksamkeitsvermerk</b>.</p></section></div>
  <div className="ao3-big-note">Wirkhinweis = „eingebauter Selbstzerstörungsmodus“: Bindung nur gegenüber den Personen, deren Festsetzungsfrist noch läuft.</div>
  <div className="ao4-checklist"><div><b>1</b><span>F-Bescheide dürfen ergehen, solange ihre Feststellungsfrist läuft.</span></div><div><b>2</b><span>Nach Ablauf: § 181 Abs. 5 AO + einschränkender Wirksamkeitsvermerk.</span></div><div><b>3</b><span>Wirkung nur gegenüber Personen mit noch offener Festsetzungsfrist.</span></div><div><b>4</b><span>Beim Änderungs-F-Bescheid zusätzlich Korrekturvorschrift prüfen.</span></div></div>
  <div className="ao4-decision"><div className="good"><b>mit Wirkhinweis</b><strong>kein Verstoß gegen Feststellungsfrist</strong><p>Bei Änderungsbescheid KV zusätzlich prüfen.</p></div><div className="bad"><b>ohne Wirkhinweis</b><strong>Quelle: rechtswidrig, aber wirksam gegenüber allen</strong><p>Reparatur nicht durch Ergänzungsbescheid; ggf. im Einspruchsverfahren.</p></div></div>
  <Note>Quellenhinweis S. 55/56: Der VdN entfällt nach <b>§ 164 Abs. 4 S. 1 AO</b>; § 181 Abs. 5 AO ist keine Ablaufhemmung.</Note>
  <Tabs items={[["§ 181(1)","green"],["§ 181(5)","green"],["§ 182(1)","yellow"],["§ 164(4)","pink"]]}/>
</div>}

function Ergaenzungsbescheid(){return <div className="ao3-sheet ao4-sheet">
  <h3 className="ao3-title">Ergänzungsbescheid · PDF-S. 62</h3>
  <div className="ao4-puzzle"><div className="ao4-puzzle-doc"><b>FINANZAMT · FESTSTELLUNGSBESCHEID</b><span>🧩</span><span>fehlender Inhalt</span></div><span className="ao3-arrow">→</span><Box ton="gruen"><b>Ergänzung</b><small>§ 179 Abs. 3 AO</small></Box></div>
  <Note>Die Seite ist eine Einstiegskarte. Deshalb ergänzt die digitale Darstellung keine zusätzlichen Voraussetzungen, die auf S. 62 nicht stehen.</Note>
</div>}

function ErbeFall(){return <div className="ao3-sheet ao4-sheet">
  <h3 className="ao3-title">Quellenfall „Annahme Erbschaft“ · PDF-S. 63–69</h3>
  <div className="ao4-persons"><Box><b>FA</b><small>30 € · EStB 2017 v. 9.9.2018</small></Box><span>→</span><Box ton="rot"><b>V†</b><small>§ 1922 BGB</small></Box><span>→</span><Box ton="gelb"><b>L · Erbe</b><small>§ 1942 BGB · Annahme 15.9.2025</small></Box></div>
  <Calc rows={[["Quellennotiz FF","31.12.2024"],["Annahme Erbe","15.9.2025"],["+ 6 Monate § 171 Abs. 12 AO","mdl. 16.3.2026 · § 108 Abs. 3 AO"]]}/>
  <div className="ao4-grid2"><section><h4>Frage 1</h4><p>Kann S die 30 € vom FA am <b>22.2.2026</b> zurückverlangen?</p></section><section><h4>Frage 2</h4><p>Festsetzung gegenüber L am <b>6.10.2026</b> noch möglich?</p></section></div>
  <div className="ao3-note">Fortsetzung der Quelle: Aufhebung EStB 2017 v. 9.9.2018 am 13.3.2026 gegenüber S; anschließend Festsetzung gegenüber L getrennt prüfen.</div>
</div>}

function Erstattung(){return <div className="ao3-sheet ao4-sheet">
  <h3 className="ao3-title">Erstattungsanspruch · § 171 Abs. 14 AO</h3>
  <div className="ao4-bank"><div className="ao4-bank-card">🏦<br/>Erstattungsanspruch<br/>💶</div><div><div className="ao4-flow"><Box>§ 37 Abs. 2 AO</Box><span>→</span><Box ton="rot">blockierender wirksamer VA?</Box><span>→</span><Box ton="gruen">§ 171 Abs. 14 AO</Box></div><p>Die Karte will sicherstellen, dass das FA die zu erstattende Steuer auch außerhalb der regulären FF noch gegenüber der richtigen Person festsetzen kann, solange der Erstattungsanspruch noch nicht zahlungsverjährt ist.</p><Note>Zahlungsverjährung nach §§ 228 ff. AO bleibt eine eigene Grenze.</Note></div></div>
</div>}

const masterRows=[...rowsBase,["wirksamer F-Bescheid","§ 171 Abs. 10 S. 1 AO","§ 175 Abs. 1 Nr. 1 AO"],["Annahme Erbe","§ 171 Abs. 12 AO","§ 173 Abs. 1 AO"],["Erstattung","§ 171 Abs. 14 AO","— (ESt-Bescheid)"]];
function Master(){return <div className="ao3-sheet ao4-sheet">
  <h3 className="ao3-title">Einheit 4 · Master-Pärchentabelle · PDF-S. 72</h3>
  <div className="ao3-big-note">Ereignis → Frist-/Hemmungsnorm → typische Korrektur/Folge</div>
  <PairTable rows={masterRows}/>
  <Note ton="red">Quellentreue: SteuFa/StraBuSt und StHi behalten die Fragezeichen; bei „Erstattung“ steht in der Quelle kein Herz-/KV-Pärchen.</Note>
  <Tabs items={[["§ 171(2)","green"],["§ 171(3)","green"],["§ 171(3a)","green"],["§ 171(4)","green"],["§ 171(5)","green"],["§ 171(9)","green"],["§ 171(10)","green"],["§ 171(12)","green"],["§ 171(14)","green"]]}/>
</div>}

export const AO4_SCHEMATA={
 "ao4-aussenpruefung":Aussenpruefung,
 "ao4-ap-beispiel":APBeispiel,
 "ao4-ap-unterbrechung":APUunterbrechung,
 "ao4-paerchen":Paerchen,
 "ao4-grundlagenbescheid":Grundlagenbescheid,
 "ao4-grundlagenbescheid-einspruch":GrundlagenEinspruch,
 "ao4-feststellungsbescheid-181":Feststellung181,
 "ao4-ergaenzungsbescheid":Ergaenzungsbescheid,
 "ao4-erbe-fall":ErbeFall,
 "ao4-erstattung":Erstattung,
 "ao4-master":Master,
};
export const ao4SchemaIds=Object.keys(AO4_SCHEMATA);
