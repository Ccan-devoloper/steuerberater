import React from "react";
import AOSchema from "./AOSchemata";

const BLOECKE = [
  ["ao-schema-ablauf", "Gesamtüberblick Besteuerungsverfahren", "ao-besteuerungsverfahren", "PDF-S. 2–5"],
  ["ao-schema-ermittlung", "I. Ermittlungsverfahren", "ao-ermittlungsverfahren", "PDF-S. 7"],
  ["ao-schema-auskunft", "Auskunft, Vorlage und Verweigerungsrechte", "ao-verweigerungsrecht", "PDF-S. 8–13"],
  ["ao-schema-va", "II. Verwaltungsakte - Grundprüfung", "ao-va-pruefungsfalle", "PDF-S. 14–17 und 21/23"],
  ["ao-schema-va-arten", "Arten von Verwaltungsakten und Korrekturwege", "ao-va-arten", "PDF-S. 18–23"],
  ["ao-schema-wirksamkeit", "Wirksamkeit und Nichtigkeit", "ao-wirksamkeit-nichtigkeit", "PDF-S. 24–28"],
  ["ao-schema-bekanntgabe", "Ordnungsgemäße Bekanntgabe", "ao-bekanntgabe", "PDF-S. 29–31"],
  ["ao-schema-vertreter", "Steuerberater und Ehegatten", "ao-vertreter-ehegatten", "PDF-S. 32–33"],
];

export default function AOPruefschema() {
  return <>
    <div className="pagehead"><div><span className="kicker">Klausur 1 · Abgabenordnung · Prüfschema</span><h1>AO-Schemata der 1. Einheit</h1><p className="lead">Die Schemata sind digital entlang der Originaldarstellung nachgebaut: gleiche Verzweigung, Reihenfolge, Kästen und farbliche Hervorhebungen. Weitere Einheiten erweitern diese Seite fortlaufend.</p></div><span className="zaehler">8 Schemata</span></div>
    <div className="ao-schema-stack">
      {BLOECKE.map(([id, titel, schema, quelle]) => <section className="abschnitt ao-schema-section" id={id} key={id}><div className="kst-abschnitt-kopf"><div><span className="kicker">{quelle}</span><h2>{titel}</h2></div></div><AOSchema id={schema} /></section>)}
    </div>
  </>;
}
