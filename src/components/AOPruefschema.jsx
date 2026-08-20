import React from "react";
import AOSchema from "./AOSchemataAlle";

const BLOECKE = [
  ["ao-schema-ablauf", "Gesamtüberblick Besteuerungsverfahren", "ao-besteuerungsverfahren", "Einheit 1 · PDF-S. 2–5"],
  ["ao-schema-ermittlung", "I. Ermittlungsverfahren", "ao-ermittlungsverfahren", "Einheit 1 · PDF-S. 7"],
  ["ao-schema-auskunft", "Auskunft, Vorlage und Verweigerungsrechte", "ao-verweigerungsrecht", "Einheit 1 · PDF-S. 8–13"],
  ["ao-schema-va", "II. Verwaltungsakte - Grundprüfung", "ao-va-pruefungsfalle", "Einheit 1 · PDF-S. 14–17 und 21/23"],
  ["ao-schema-va-arten", "Arten von Verwaltungsakten und Korrekturwege", "ao-va-arten", "Einheit 1 · PDF-S. 18–23"],
  ["ao-schema-wirksamkeit", "Wirksamkeit und Nichtigkeit", "ao-wirksamkeit-nichtigkeit", "Einheit 1 · PDF-S. 24–28"],
  ["ao-schema-bekanntgabe", "Ordnungsgemäße Bekanntgabe", "ao-bekanntgabe", "Einheit 1 · PDF-S. 29–31"],
  ["ao-schema-vertreter", "Steuerberater und Ehegatten", "ao-vertreter-ehegatten", "Einheit 1 · PDF-S. 32–33"],
  ["ao-schema-bekanntgabewille", "Bekanntgabewille und Handlungsfähigkeit", "ao-bekanntgabewille-handlungsfaehigkeit", "Einheit 2 · PDF-S. 1–3"],
  ["ao-schema-bekanntgabe-zeitpunkt", "Zeitpunkt der Bekanntgabe: Brief, Zustellung und Datenabruf", "ao-bekanntgabe-zeitpunkt", "Einheit 2 · PDF-S. 4–12"],
  ["ao-schema-fristen", "Fristenberechnung nach § 108 AO und BGB", "ao-fristenberechnung", "Einheit 2 · PDF-S. 17"],
  ["ao-schema-fehlerfolgen", "Rechtswidrigkeit, Wirksamkeit und Tortenstückfehlerlehre", "ao-tortenstueckfehlerlehre", "Einheit 2 · PDF-S. 20–22"],
  ["ao-schema-fehlerhafter-va", "Fehlerhafter VA: Plan A Einspruch / Plan B Korrektur", "ao-fehlerhafter-va-plan-a-b", "Einheit 2 · PDF-S. 23–24"],
  ["ao-schema-einspruch", "Einspruchsverfahren und Erfolgsformel", "ao-einspruch-grundlagen", "Einheit 2 · PDF-S. 25–28"],
  ["ao-schema-einspruch-zulaessigkeit", "Zulässigkeit: Statthaftigkeit und Form", "ao-einspruch-zulaessigkeit-form", "Einheit 2 · PDF-S. 29–32"],
  ["ao-schema-einspruch-frist", "Einspruchsfrist, Ende und fristwahrender Eingang", "ao-einspruch-frist-wirkung", "Einheit 2 · PDF-S. 33–38"],
  ["ao-schema-einspruch-falsches-fa", "Einspruch beim falschen Finanzamt und Wiedereinsetzung", "ao3-falsches-fa", "Einheit 3 · PDF-S. 1–2"],
  ["ao-schema-beschwer", "Einspruchsbefugnis und Beschwer", "ao3-beschwer", "Einheit 3 · PDF-S. 3–8"],
  ["ao-schema-begruendetheit", "Begründetheit des Einspruchs", "ao3-begruendetheit", "Einheit 3 · PDF-S. 9–15"],
  ["ao-schema-einspruch-besonderheiten", "Besonderheiten: Gesamtaufrollung, Verböserung und Rücknahme", "ao3-einspruch-besonderheiten", "Einheit 3 · PDF-S. 16–20"],
  ["ao-schema-einspruch-erledigung", "Erledigung des Einspruchs", "ao3-einspruch-erledigung", "Einheit 3 · PDF-S. 21–25"],
  ["ao-schema-plan-abc", "Gesamtstrategie Plan A / Plan B / Plan C", "ao3-plan-abc", "Einheit 3 · PDF-S. 26"],
  ["ao-schema-korrekturformel", "Korrekturformel und Schlüssel-Schrank-Schema", "ao3-korrekturformel", "Einheit 3 · PDF-S. 27–36"],
  ["ao-schema-ff-beginn", "Festsetzungsfrist: Beginn", "ao3-ff-beginn", "Einheit 3 · PDF-S. 37–38"],
  ["ao-schema-ff-dauer", "Festsetzungsfrist: Dauer", "ao3-ff-dauer", "Einheit 3 · PDF-S. 39"],
  ["ao-schema-ff-ende", "Festsetzungsfrist: reguläres Ende", "ao3-ff-ende", "Einheit 3 · PDF-S. 40–41"],
  ["ao-schema-korrekturpaerchen", "Korrekturpärchen nach Ablauf der regulären Festsetzungsfrist", "ao3-korrekturpaerchen", "Einheit 3 · PDF-S. 44–50"],
  ["ao-schema-ablaufhemmungen", "Ablaufhemmungen bei Einspruch und Außenprüfung", "ao3-ablaufhemmungen", "Einheit 3 · PDF-S. 51–53"],
  ["ao-schema-aussenpruefung", "Außenprüfung: Beginn, Ende und Reichweite der Ablaufhemmung", "ao4-aussenpruefung", "Einheit 4 · PDF-S. 1–12"],
  ["ao-schema-aussenpruefung-unterbrechung", "Außenprüfung: Unterbrechung und Wiederaufnahme", "ao4-ap-unterbrechung", "Einheit 4 · PDF-S. 13–17"],
  ["ao-schema-ao4-paerchen", "Ablaufhemmungs- und Korrekturpärchen", "ao4-paerchen", "Einheit 4 · PDF-S. 18–24"],
  ["ao-schema-grundlagenbescheid", "Wirksamer Grundlagen-/Feststellungsbescheid und § 171 Abs. 10", "ao4-grundlagenbescheid", "Einheit 4 · PDF-S. 25–30"],
  ["ao-schema-grundlagenbescheid-einspruch", "Grundlagenbescheid als 'Brechstange': Zwei-Jahres-Hemmung und Einspruch", "ao4-grundlagenbescheid-einspruch", "Einheit 4 · PDF-S. 31–43"],
  ["ao-schema-feststellungsbescheid-181", "§ 181 Abs. 5 AO und einschränkender Wirksamkeitsvermerk", "ao4-feststellungsbescheid-181", "Einheit 4 · PDF-S. 44–61"],
  ["ao-schema-ergaenzungsbescheid", "Ergänzungsbescheid", "ao4-ergaenzungsbescheid", "Einheit 4 · PDF-S. 62"],
  ["ao-schema-erbe", "Annahme Erbschaft und § 171 Abs. 12 AO", "ao4-erbe-fall", "Einheit 4 · PDF-S. 63–69"],
  ["ao-schema-erstattung", "Erstattungsanspruch und § 171 Abs. 14 AO", "ao4-erstattung", "Einheit 4 · PDF-S. 70–71"],
  ["ao-schema-ao4-master", "Masterübersicht der Ablaufhemmungs- und Korrekturpärchen", "ao4-master", "Einheit 4 · PDF-S. 72"],
  ["ao-schema-vdn-grundlagen", "Vorbehalt der Nachprüfung: Generalschlüssel, Zweck und Wirkung", "ao5-vdn-grundlagen", "Einheit 5 · PDF-S. 1–5"],
  ["ao-schema-vdn-dauer", "VdN: Mehrweg-/Einweg-VdN, Steueranmeldung und Ende", "ao5-vdn-arten-dauer", "Einheit 5 · PDF-S. 6–10"],
  ["ao-schema-vorlaeufig", "Vorläufige Festsetzung: Skalpell, Umfang und Fallgruppen", "ao5-vorlaeufig-grundlagen", "Einheit 5 · PDF-S. 11–17"],
  ["ao-schema-vorlaeufig-dauer", "Vorläufigkeit: Fortbestand, Änderungsbescheid und § 171 Abs. 8 AO", "ao5-vorlaeufig-dauer", "Einheit 5 · PDF-S. 18–20"],
  ["ao-schema-ao5-paerchen", "Korrekturpärchen erweitert um § 165 / § 171 Abs. 8 AO", "ao5-korrekturpaerchen", "Einheit 5 · PDF-S. 21"],
  ["ao-schema-fbescheid-wirksamkeit", "Wirksamkeitsformel Feststellungsbescheide", "ao5-fbescheid-wirksamkeit", "Einheit 5 · PDF-S. 22–23"],
  ["ao-schema-129", "§ 129 AO: offenbare Unrichtigkeit und Übernahmefehler", "ao5-129", "Einheit 5 · PDF-S. 24–30"],
  ["ao-schema-173a", "§ 173a AO: Schreib-/Rechenfehler des Steuerpflichtigen", "ao5-173a", "Einheit 5 · PDF-S. 31–35"],
  ["ao-schema-173", "§ 173 AO: neue Tatsachen – Nr. 1 / Nr. 2", "ao5-173", "Einheit 5 · PDF-S. 36–39, 43–44"],
  ["ao-schema-173-verschulden", "§ 173 AO: Ermittlungsfehler, grobes Verschulden und Zusammenhangsklausel", "ao6-173-verschulden", "Einheit 6 · PDF-S. 1–7"],
  ["ao-schema-173-rechtserheblichkeit", "§ 173 AO: Rechtserheblichkeit und Änderungssperre", "ao6-173-rechtserheblichkeit", "Einheit 6 · PDF-S. 8–13"],
  ["ao-schema-172", "§ 172 AO: Zustimmung, schlichte Änderung und soweit StHi", "ao6-172", "Einheit 6 · PDF-S. 14–20"],
  ["ao-schema-175-grundlagen", "§ 175 Abs. 1 Nr. 1 AO: Anpassung an Grundlagenbescheide", "ao6-175-grundlagenbescheid", "Einheit 6 · PDF-S. 21–25"],
  ["ao-schema-175-rueckwirkend", "§ 175 Abs. 1 Nr. 2 AO: rückwirkendes Ereignis und punktuelle Frist", "ao6-175-rueckwirkend", "Einheit 6 · PDF-S. 26–30"],
  ["ao-schema-177", "§ 177 AO: Plan C, Saldierung und Ober-/Untergrenze", "ao6-177-saldierung", "Einheit 6 · PDF-S. 31–38"],
  ["ao-schema-handbuch", "AO-/FGO-Handbuch: Reiter und Fahrtrouten", "ao6-handbuch-reiter", "Einheit 6 · PDF-S. 71–74"],
  ["ao-schema-vollstreckung", "Vollstreckung: allgemeine und maßnahmenspezifische Voraussetzungen", "ao6-vollstreckung", "Einheit 6 · PDF-S. 75"],
  ["ao-schema-fgo", "FGO-Fahrtroute: Zulässigkeits-/Sachurteilsvoraussetzungen", "ao6-fgo-fahrtroute", "Einheit 6 · PDF-S. 76–77"],
];

export default function AOPruefschema() {
  return <>
    <div className="pagehead"><div><span className="kicker">Klausur 1 · Abgabenordnung · Prüfschema</span><h1>AO-Schemata der Einheiten 1–6</h1><p className="lead">Die Schemata sind digital entlang der Originaldarstellungen nachgebaut: Verzweigungen, Tabellenlogik, Kästen, Zeitachsen, Normreiter, Herz-Pärchen und farbliche Hervorhebungen bleiben als Lernstruktur erhalten. Offene Fragezeichen der Quelle bleiben offen.</p></div><span className="zaehler">{BLOECKE.length} Schemata</span></div>
    <div className="ao-schema-stack">
      {BLOECKE.map(([id,titel,schema,quelle])=><section className="abschnitt ao-schema-section" id={id} key={id}><div className="kst-abschnitt-kopf"><div><span className="kicker">{quelle}</span><h2>{titel}</h2></div></div><AOSchema id={schema}/></section>)}
    </div>
  </>;
}
