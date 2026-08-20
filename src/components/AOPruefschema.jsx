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
];

export default function AOPruefschema() {
  return <>
    <div className="pagehead"><div><span className="kicker">Klausur 1 · Abgabenordnung · Prüfschema</span><h1>AO-Schemata der Einheiten 1–2</h1><p className="lead">Die Schemata sind digital entlang der Originaldarstellungen nachgebaut: Verzweigungen, Tabellenlogik, Kästen und farbliche Hervorhebungen bleiben als Lernstruktur erhalten.</p></div><span className="zaehler">{BLOECKE.length} Schemata</span></div>
    <div className="ao-schema-stack">
      {BLOECKE.map(([id, titel, schema, quelle]) => <section className="abschnitt ao-schema-section" id={id} key={id}><div className="kst-abschnitt-kopf"><div><span className="kicker">{quelle}</span><h2>{titel}</h2></div></div><AOSchema id={schema} /></section>)}
    </div>
  </>;
}
