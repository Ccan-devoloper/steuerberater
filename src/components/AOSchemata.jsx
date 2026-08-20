import React from "react";
import "./ao.css";

const Note = ({ children, ton = "blau", className = "" }) => <span className={`ao-hand ao-hand--${ton} ${className}`}>{children}</span>;

function Besteuerungsverfahren() {
  const top = [
    ["Steuerentstehung", "§ 38 AO i.V.m.…"],
    ["Ermittlungs-\nverfahren", "§§ 85 ff."],
    ["Festsetzung durch VA", "§§ 118 ff., §§ 155 ff. AO"],
    ["Wirksame Bekanntgabe VA", "§§ 122–127 AO"],
  ];
  return (
    <div className="ao-original ao-original--ablauf" aria-label="Ablauf des Besteuerungsverfahrens">
      <div className="ao-original__title">Übersicht: Ablauf des Besteuerungsverfahrens</div>
      <div className="ao-timeline ao-timeline--top">
        <div className="ao-timeline__line" />
        {top.map(([titel, norm], i) => <div className={`ao-timeline__station ao-timeline__station--${i+1}`} key={titel}>
          <b>{titel.split("\n").map((x,j)=><React.Fragment key={j}>{x}{j===0 && <br/>}</React.Fragment>)}</b><u>{norm}</u><i />
        </div>)}
        <Note ton="lila" className="ao-aeao">AEAO<br/>§ 38<br/>Nr. 1</Note>
        <div className="ao-sourcebox ao-sourcebox--mitwirkung">
          <b>Mitwirkungspflichten:</b>
          <ul><li>Abgabe StErkl. §§ 147 ff. AO</li><li>Abgabe StAnm. §§ 167, 168 AO</li><li>Auskünfte (§ 93 AO), Urkunden (§ 97 AO)</li><li>Berichtigung § 153 AO</li><li className="ao-strike">Buchführung §§ 140, 141 AO</li></ul>
        </div>
        <div className="ao-sourcebox ao-sourcebox--ausnahmen"><b>Ausnahmen:</b><ul><li>Steueranmeldung<br/>§§ 167, 168 AO</li><li>Säumniszuschläge<br/>§ 240 AO</li></ul></div>
        <div className="ao-sourcebox ao-sourcebox--wirksam"><b>Ab Wirksamkeit:</b><ul><li>RB-Verfahren: i.d.R.<br/><strong>1 Monat RB-Frist</strong><br/>(Einspruch/Klage)</li><li>Erhebungsverfahren: i.d.R. 1 Monat bis zur Fälligkeit (§ 220 AO)</li></ul></div>
      </div>
      <div className="ao-timeline ao-timeline--bottom">
        <div className="ao-timeline__line" />
        <div className="ao-timeline__station ao-bottom--1"><b>ggf. Vollstreckung</b><u>§§ 249 ff. AO</u><i /></div>
        <div className="ao-timeline__station ao-bottom--2"><b>ggf. Haftung</b><u>§§ 69 ff., §§ 191, § 219</u><i /></div>
        <div className="ao-timeline__station ao-bottom--3"><b>ggf. Außenprüfung</b><u>§§ 193 ff. AO</u><i /></div>
        <div className="ao-timeline__station ao-bottom--4"><b>Korrektur-<br/>verfahren</b><i /></div>
        <div className="ao-timeline__station ao-bottom--5"><b>Ablauf FF</b><u>§§ 169–171</u><i className="ao-x" /></div>
        <div className="ao-sourcebox ao-sourcebox--haftung"><b>Haftungstatbestände</b><ul><li>Haftung des Vertreters § 69</li><li>Haftung Steuerhinterzieher § 71</li><li>Haftung Überlasser WG § 74</li><li>Haftungsbescheid § 191</li><li>Zahlungsaufforderung § 219</li></ul></div>
        <div className="ao-sourcebox ao-sourcebox--korrektur"><b>Korrekturform z.B.:</b><ul><li>Vorbehalt der Nachprüfung</li><li>Vorläufigkeit</li><li>Offenbare Unrichtigkeit</li><li>Neue Tatsachen</li></ul></div>
        <div className="ao-sourcebox ao-sourcebox--ff"><b>Verjährung grds:</b><ul><li>Nach 4 Jahren</li><li>Ablauf ggf. gehemmt oder FF verlängert (z.B. bei Steuerhinterziehung)</li></ul></div>
      </div>
    </div>
  );
}

function Ermittlungsverfahren() {
  return <div className="ao-original ao-paper">
    <h3 className="ao-paper__heading">I. Ermittlungsverfahren</h3>
    <p><Note>→ Grds.: FA ermittelt SV unter Beachtung des Untersuchungsgrundsatzes</Note> <Note ton="lila">§ 88 (1),(2) AO · AEAO § 88 Nr. 2</Note></p>
    <ul className="ao-paper__bullets"><li>Stpfl. muss dabei mitwirken → Fall 1</li><li>FA kann Beweismittel anordnen: <b>§ 92 AO</b></li></ul>
    <p><Note>→ Beweismittel:</Note></p>
    <div className="ao-mini-flow"><span>Auskunftsersuchen<br/><b>§ 93 AO</b></span><span>Vorlageersuchen<br/><b>§ 97 AO</b></span><b>→ Person / Unterlagen</b></div>
  </div>;
}

function Verweigerungsrecht() {
  return <div className="ao-original ao-original--verweigerung">
    <div className="ao-vw-top">
      <div><Note ton="blau">Beweismittel</Note><br/><b>Auskunft § 93 AO</b><br/><b>Vorlage § 97 AO</b></div>
      <div className="ao-vw-person">☺</div>
    </div>
    <div className="ao-vw-rule"><b>Grundsatz:</b> Jeder ist grundsätzlich auskunftspflichtig.</div>
    <div className="ao-vw-priority">Aber: vorrangig den <u>Stpfl.</u> um Auskunft ersuchen <b>§ 93 Abs. 1 S. 3 AO</b><br/><span>Ausnahme: nicht erfolgversprechend, z.B. Koma · auch Ehegatte = „andere Person“</span></div>
    <div className="ao-card-dark">
      <h3>Verweigerungsrecht</h3>
      <p>Auskunfts- und Vorlageersuchen sind jeweils sonstige VA; formlos möglich (§ 119 Abs. 2 AO). Schriftlich ergangen: ordnungsgemäße Rechtsbehelfsbelehrung beachten.</p>
      <b>Verweigerungsrecht insbesondere:</b>
      <ul><li>Angehörige (§ 101 Abs. 1, § 15 AO)</li><li>Steuerberater und Kanzleipersonal (§ 102 Abs. 1 Nr. 3 b), Abs. 2 AO)</li><li><strong>Nicht:</strong> der Stpfl. für sich selbst</li></ul>
      <b>Besonderheiten:</b>
      <ul><li>Nur Angehörige sind über dieses Recht zu belehren; sonst Verwertungsverbot nach der Quellenkarte.</li><li>Unterlagen, die nur für jemand anderen aufbewahrt werden, sind nach § 104 Abs. 2 AO herauszugeben.</li></ul>
    </div>
  </div>;
}

function VAPruefungsfalle() {
  return <div className="ao-original ao-paper ao-va-falle">
    <h3 className="ao-paper__heading">II. Verwaltungsakte</h3>
    <div className="ao-falle-step"><span>1</span><b>Liegt überhaupt ein VA vor?</b><div className="ao-falle-nein"><em>Nein →</em> Nichts Rechtsverbindliches passiert („nur Luft“)<br/>↳ Einspruch wäre nicht statthaft und daher <strong>unzulässig</strong></div><div className="ao-falle-ja">Ja ↓</div></div>
    <div className="ao-falle-step"><span>2</span><b>Welche Art von VA liegt vor?</b><div className="ao-falle-split"><i>StB<br/>oder<br/>gleichgestellter</i><i>sonstiger<br/><mark>VA</mark></i></div></div>
    <div className="ao-examples-grid"><div><b>VA ✓</b><ul><li>EStB über 0 € (§ 155)</li><li>Fristverlängerung abgelehnt (§ 109)</li><li>Auskunftsersuchen (§ 93)</li><li>verbindliche Auskunft</li></ul></div><div><b>kein VA ✕</b><ul><li>Einspruch</li><li>ESt-Mitteilung</li><li>Kontrollmitteilung</li><li>Mahnung</li><li>BP-Bericht / Mitteilung</li><li>telefonische Rechtsauskunft</li></ul></div></div>
  </div>;
}

function VAArten() {
  return <div className="ao-original ao-paper ao-va-arten">
    <div className="ao-va-arten__warn">Zwingend Schriftform zu ① Arten von VAen, sonst ☠</div>
    <h3>① Arten von VAen <small>weil: unterschiedliche Korrekturformen / Formvorschriften</small></h3>
    <div className="ao-va-cols">
      <section><h4>Steuerbescheide und diesen gleichgestellte VAe</h4><ul><li>Steuerbescheid § 155 (1) AO</li><li>F-Bescheid §§ 179–183 AO</li><li>Steueranmeldung §§ 167, 168 AO</li><li>Zinsbescheid § 239 AO</li><li>ErgänzungsB § 179 (3) AO</li><li>AbrechnungsB § 155 (1) S. 3 AO</li><li>Aufhebung VdN § 164 (3) S. 2 AO</li></ul><div className="ao-correction">Korrektur gem…<br/>• § 164, § 165 AO<br/>• §§ 172–177 AO</div></section>
      <section><h4>sonstige VAe</h4><ul><li>Prüfungsanordnung § 196 AO</li><li>Haftungsbescheid § 191 AO</li><li>V-Zuschlag § 152 AO</li><li>Auskunfts-/Vorlageersuchen §§ 93, 97</li><li>(…)</li><li>AEAO vor §§ 130, 131 Nr. 2+3</li></ul><div className="ao-correction">Korrektur gem…<br/>• § 130 AO<br/>• § 131 AO</div></section>
    </div>
    <div className="ao-va-all">Bei allen VAen: <b>Berichtigung § 128 AO · Einspruch § 347 AO · allg. Spielregeln §§ 118–127 AO</b></div>
    <div className="ao-va-beispiele"><table><tbody><tr><td>Festg. Steuer</td><td>100.000</td><td>→ EStB</td></tr><tr><td>1. anzur. VZ</td><td>80.000</td><td>→ Anrechnungsverfügung</td></tr><tr><td>Zahl bis 15.6.2026</td><td>20.000</td><td>→ Leistungsgebot</td></tr><tr><td>V-Zuschlag</td><td>500</td><td>→ § 152 AO</td></tr><tr><td>Zinsen</td><td>750</td><td>→ ZinsB § 239 AO</td></tr></tbody></table></div>
  </div>;
}

function WirksamkeitNichtigkeit() {
  return <div className="ao-original ao-paper ao-wirksamkeit">
    <div className="ao-falle-step ao-falle-step--third"><span>3</span><b>Ist der VA <mark>wirksam</mark> geworden?</b><div className="ao-falle-nein"><em>Nein →</em> Nichts Rechtsverbindliches passiert<br/>ABER Rechtschein → Einspruch wäre statthaft</div></div>
    <h3>Ab <mark>Wirksamkeit</mark> → Für Stpfl. und FA verbindliche Regelung</h3>
    <div className="ao-wirk-split"><span>Stpfl.<br/>↓<br/><b>Beginn Einspruchsfrist</b></span><span>FA<br/>↓<br/><b>benötigt sofort Korrekturvorschrift</b></span></div>
    <div className="ao-formel">⚗ Wirksamkeitsformel § 124 AO:<br/><b>§ 124 (3) AO: inhaltlich nicht wichtig i.S.d. § 125 AO</b></div>
    <div className="ao-nichtig"><h3>§ 125 (1) AO: BESONDERS SCHWERWIEGENDER (OFFEN)KUNDIGER Fehler</h3><div className="ao-nichtig-grid"><ul><li>Verstoß gegen Schriftformzwang § 157 (1) S. 1 (auch § 196 / § 191)</li><li>Steuerart / -betrag fehlt § 157 (1) S. 2</li><li>Stpfl. war schon tot § 157 (1) S. 2 / § 119 (1)</li></ul><div className="ao-standard">⚠ In allen anderen Fällen ist es nur ein Standard-Fehler!</div><ul><li>Steuerjahr fehlt § 119 (1) AO</li><li>VA in sich widersprüchlich § 119 (1) AO</li><li>weiterer VA in derselben Sache stellt Verhältnis zum vorherigen VA nicht klar § 119 (1) AO</li></ul></div><p><b>§ 125 (2) Nr. 1:</b> auf schriftlichem VA fehlt erlassendes FA</p></div>
    <div className="ao-card-dark ao-card-dark--nichtig"><h3>Nichtigkeit</h3><p>Besonders schwerwiegender und offenkundiger „Totenkopf-Fehler“ i.S.d. § 125 Abs. 1/2 AO. Konsequenz laut Quellenkarte: VA unwirksam, § 124 Abs. 3 AO; Feststellung nach § 125 Abs. 5 AO oder Einspruch möglich.</p></div>
  </div>;
}

function Bekanntgabe() {
  return <div className="ao-original ao-paper ao-bekanntgabe">
    <h3>② § 124 (1) AO: ordnungsgemäße Bekanntgabe ✉</h3>
    <div className="ao-bekanntgabe__core"><span>1) <b>Zugang</b></span><span>im <b>Machtbereich</b></span><span>des <b>richtigen Empfängers</b></span></div>
    <div className="ao-bekanntgabe__cols">
      <section><b>Tats. Kenntnisnahme</b><p>unter normalen Umständen möglich, aber nicht nötig</p><p>z.B. Koma, Urlaub usw. egal</p></section>
      <section><b>äußere Einflussnahme</b><p>grds. ausgeschlossen?</p><p>z.B. Briefkasten, Postfach</p><p>nicht: Fensterbank, Kleiderschrank</p></section>
      <section><b>richtiger Empfänger</b><p>Grds.: der Stpfl. § 122 (1) S. 1 AO</p><p>Berater: § 80 (5) → § 122 (1) S. 3/4 AO</p><p>Ehegatten: § 122 (7) → AEAO § 122</p><p>GuE-Bescheide: § 183 / § 183a</p></section>
    </div>
    <div className="ao-heilung">Bekanntgabemangel <b>heilbar durch Übergabe</b> · § 8 VwZG analog</div>
  </div>;
}

function VertreterEhegatten() {
  return <div className="ao-original ao-original--cards">
    <div className="ao-card-dark"><h3>Steuerberater · § 80 AO</h3><ul><li>Vertretung im Besteuerungsverfahren nach § 80 Abs. 1 AO.</li><li>Widerruf wirkt gegenüber dem FA erst ab Eingang des Widerrufs.</li><li>Bei Steuerberatern: Bevollmächtigung wird nach der Quellenkarte vermutet, wenn sie gegenüber dem FA für den Stpfl. handeln (§ 80 Abs. 2 AO).</li><li>Vollmacht geht bei Tod auf Gesamtrechtsnachfolger über (§ 80 Abs. 4 AO).</li><li>Bekanntgabe richtet sich nach § 80 i.V.m. § 122 AO; Empfangsvollmacht und bisherige Bekanntgabepraxis beachten.</li></ul></div>
    <div className="ao-card-dark"><h3>Ehegatten</h3><ul><li>Zusammenveranlagte Ehegatten sind Gesamtschuldner; jeder schuldet den vollen Steuerbetrag (§ 44 AO).</li><li>Äußerlich kann ein gemeinsamer Bescheid vorliegen (§ 155 Abs. 3 S. 1 AO), materiell bleiben es zwei Steuerfestsetzungen.</li><li>Bei Anfechtung können deshalb zwei Einsprüche erforderlich sein; ebenso bei steuerlichen Nebenleistungen.</li><li>Gemeinsame Anschrift: eine Ausfertigung kann für beide genügen (§ 122 Abs. 7 S. 1 Nr. 1 AO).</li><li>Bekannte ernstliche Meinungsverschiedenheiten → Einzelbekanntgabe (§ 122 Abs. 7 S. 2 AO).</li><li>Auch ohne gemeinsame Anschrift kann „2 in 1“ möglich sein, wenn beide einverstanden sind (§ 122 Abs. 6 AO).</li></ul></div>
  </div>;
}

function Handbuch() {
  const tabs = ["§ 38","§ 80","§ 88","§ 93","§ 97","§ 101","§ 104","§ 118","§ 119","§ 122","§ 124","§ 125","§ 128","§ 130","§ 131","§ 153","§ 155","§ 164","§ 165","§ 169","§ 172","§ 173","§ 177"];
  return <div className="ao-original ao-handbuch"><div className="ao-handbuch__book"><b>BMF</b><strong>Amtliches<br/>AO-Handbuch<br/>2026</strong><small>Hier AEAO-Stellen aus Unterricht abkleben</small></div><div className="ao-handbuch__tabs">{tabs.map((t,i)=><span key={t} style={{"--i":i}}>{t}</span>)}</div><div className="ao-marker"><h4>Markerlegende</h4><p><Note ton="gelb">Voraussetzungen</Note></p><p><Note ton="blau">Rechtsfolge</Note></p><p><Note ton="orange">Wichtig</Note></p><p><Note ton="gruen">Egal / nachrangig</Note></p><p><Note ton="lila">AEAO = Anwendungserlass</Note></p></div></div>;
}

const SCHEMATA = {
  "ao-besteuerungsverfahren": Besteuerungsverfahren,
  "ao-ermittlungsverfahren": Ermittlungsverfahren,
  "ao-verweigerungsrecht": Verweigerungsrecht,
  "ao-va-pruefungsfalle": VAPruefungsfalle,
  "ao-va-arten": VAArten,
  "ao-wirksamkeit-nichtigkeit": WirksamkeitNichtigkeit,
  "ao-bekanntgabe": Bekanntgabe,
  "ao-vertreter-ehegatten": VertreterEhegatten,
  "ao-handbuch": Handbuch,
};

export default function AOSchema({ id }) {
  const Komponente = SCHEMATA[id];
  return Komponente ? <Komponente /> : null;
}

export const aoSchemaIds = Object.keys(SCHEMATA);
