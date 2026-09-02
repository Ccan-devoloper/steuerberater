import{PrioBadge}from"./Prioritaet";
import React from "react";
import K1ErbStSchema from "./K1ErbStSchemata";

const BLOECKE = [
  ["erbst-schema-master", "Gesamt-Lösungsaufbau der 1. Einheit", "erbst-master", "Einheit 1 · PDF-S. 25–150"],
  ["erbst-schema-arbeitsmittel", "Arbeitsmittel & Zusammenspiel ErbStG / BewG", "erbst-arbeitsmittel", "Einheit 1 · PDF-S. 1–24"],
  ["erbst-schema-vorspann", "I. Vorspann: § 1 · § 2 · § 20 · § 15 · § 9/§ 11", "erbst-vorspann", "Einheit 1 · PDF-S. 25–47"],
  ["erbst-schema-einleitung", "II. Einleitung: § 10 und R E 7.4", "erbst-einleitung", "Einheit 1 · PDF-S. 48–70"],
  ["erbst-schema-wsv", "III. Schritt 1: WSV, Bewertung, Befreiung und zuordenbare Belastungen", "erbst-wsv", "Einheit 1 · PDF-S. 71–87"],
  ["erbst-schema-nnas", "III. Schritt 2: NNAS / nicht direkt zuordenbare Belastungen", "erbst-nnas", "Einheit 1 · PDF-S. 88–98"],
  ["erbst-schema-erwerb", "III. Schritt 3: Bereicherung → steuerpflichtiger Erwerb", "erbst-erwerb", "Einheit 1 · PDF-S. 99–113"],
  ["erbst-schema-steuersatz", "IV. § 19 Abs. 1 ErbStG: Steuersatztabelle", "erbst-steuersatz", "Einheit 1 · PDF-S. 114–126"],
  ["erbst-schema-haerteausgleich", "IV. § 19 Abs. 3 ErbStG: Härteausgleich", "erbst-haerteausgleich", "Einheit 1 · PDF-S. 127–131"],
  ["erbst-schema-vorerwerbe", "IV. § 14 ErbStG: Vorerwerbe", "erbst-vorerwerbe", "Einheit 1 · PDF-S. 132–150"],
];

export default function K1ErbStPruefschema() {
  return <>
    <div className="pagehead"><div><span className="kicker">Klausur 1 · Erbschaftsteuer · Prüfschema</span><h1>ErbSt-Schemata der 1. Einheit</h1><p className="lead">Die Schemata folgen der handschriftlichen Quelle möglichst eng: Reihenfolge, Kreis-/Pfeillogik, Copy-&-Paste-Bausteine, Tabellen, Reiterfahrroute und die Kürzel WSV/NNAS bleiben erhalten. Unausgeschriebene Kürzel werden nicht künstlich umgedeutet.</p></div><span className="zaehler">{BLOECKE.length} Schemata</span></div>
    <div className="ao-schema-stack">
      {BLOECKE.map(([id,titel,schema,quelle])=><section className="abschnitt ao-schema-section erbst-schema-section" id={id} key={id}><div className="kst-abschnitt-kopf"><div><span className="kicker">{quelle}</span><h2>{titel}</h2><PrioBadge fach="erbst" inhalt={{title:titel}} mitThema nurBeiTreffer/></div></div><K1ErbStSchema id={schema}/></section>)}
    </div>
  </>;
}
