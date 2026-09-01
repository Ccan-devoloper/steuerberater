import React from"react";import K1ErbStPruefschema from"./K1ErbStPruefschema";import K1ErbStSchemaAlle from"./K1ErbStSchemaAlle";import"./erbst2.css";
const BLOECKE=[
["erbst2-schema-hausrat","Sachliche Befreiungen: Hausrat & bewegliche WG","erbst2-hausrat","Einheit 2 · PDF-S. 1–20"],
["erbst2-schema-fall13","Fall 13: Fiat 500 · W/S/V","erbst2-fall13","Einheit 2 · PDF-S. 21–30"],
["erbst2-schema-fall12","Fall 12 / Abwandlung: schwebender Erwerb","erbst2-fall12","Einheit 2 · PDF-S. 31–33"],
["erbst2-schema-familienheim","Familienheim: § 13 Abs. 1 Nr. 4a–4c","erbst2-familienheim","Einheit 2 · PDF-S. 34–71"],
["erbst2-schema-13d","§ 13d: vermietete Wohnimmobilien","erbst2-13d","Einheit 2 · PDF-S. 72–104"],
["erbst2-schema-verbindlichkeiten","WSV-Verbindlichkeiten: Nachlassverbindlichkeit / Gegenleistung / Auflage","erbst2-verbindlichkeiten","Einheit 2 · PDF-S. 105–143"],
["erbst2-schema-abzugsbegrenzung","§ 10 Abs. 6 / 6a: Begrenzung des Abzugs","erbst2-abzugsbegrenzung","Einheit 2 · PDF-S. 144–150"],
];
export default function K1ErbStPruefschemaV2(){return <><K1ErbStPruefschema/><section className="abschnitt"><div className="pagehead"><div><span className="kicker">Klausur 1 · Erbschaftsteuer · Prüfschema</span><h1>ErbSt-Schemata der 2. Einheit</h1><p className="lead">Die handschriftlichen Gabeln, W/S/V-Blöcke, Freibetragskästen, Zehn-Jahres-Pfeile und Abzugsbegrenzungen sind entlang der Originalframes nachgebaut. Auch Übergangs- und Zoomframes sind im Seitenplan erfasst.</p></div><span className="zaehler">{BLOECKE.length} neue Schemata</span></div></section><div className="erbst2-schema-stack">{BLOECKE.map(([id,titel,schema,quelle])=><section className="abschnitt ao-schema-section" id={id} key={id}><div className="kst-abschnitt-kopf"><div><span className="kicker">{quelle}</span><h2>{titel}</h2></div></div><K1ErbStSchemaAlle id={schema}/></section>)}</div></>}
