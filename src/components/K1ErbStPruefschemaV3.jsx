import React from"react";
import K1ErbStPruefschemaV2 from"./K1ErbStPruefschemaV2";
import K1ErbStSchemaAlleV2 from"./K1ErbStSchemaAlleV2";
import"./erbst2f.css";
const BLOECKE=[
["erbst2f-schema-nnas","NNAS: Nettowerte → Aufteilung → Schuldenbegrenzung","erbst2f-nnas","Einheit 2 · PDF-S. 151–176"],
["erbst2f-schema-kosten","Erbfallkosten vs. Erwerbsnebenkosten","erbst2f-kosten","Einheit 2 · PDF-S. 177–198"],
["erbst2f-schema-fall15","Fall 15: Gesamtfall WSV → NNAS → E","erbst2f-fall15","Einheit 2 · PDF-S. 199–237"],
["erbst2f-schema-bewg-master","§ 12 ErbStG als Türöffner ins BewG","erbst2f-bewg-master","Einheit 2 · PDF-S. 238–271"],
["erbst2f-schema-gemeiner-wert","§ 9 BewG: gemeiner Wert / Auffangtatbestand","erbst2f-gemeiner-wert","Einheit 2 · PDF-S. 272–281"],
["erbst2f-schema-bedingungen","§§ 4–8 BewG: Bedingungen und Befristungen","erbst2f-bedingungen","Einheit 2 · PDF-S. 282–302"],
["erbst2f-schema-wertpapiere","§ 11 BewG: Wertpapiere und Anteile","erbst2f-wertpapiere","Einheit 2 · PDF-S. 303–324"],
["erbst2f-schema-forderungen","§ 12 BewG: Forderungen und Schulden","erbst2f-forderungen","Einheit 2 · PDF-S. 325–362"],
["erbst2f-schema-darlehen","§ 12 BewG: Fälligkeits- vs. Tilgungsdarlehen","erbst2f-darlehen-tabelle","Einheit 2 · PDF-S. 363–393"],
["erbst2f-schema-fall16","Fall 16: Fälligkeitsdarlehen / Tabelle 1","erbst2f-fall16","Einheit 2 · PDF-S. 394–408"],
["erbst2f-schema-fall17","Fall 17: Tilgungsdarlehen / Tabelle 2","erbst2f-fall17","Einheit 2 · PDF-S. 409–423"],
["erbst2f-schema-fall18","Fall 18: niedrig verzinste Forderung","erbst2f-fall18","Einheit 2 · PDF-S. 424–443"],
["erbst2f-schema-flags","Fähnchenkleben: Gesamtfahrtroute ErbStG ↔ BewG","erbst2f-flags","Einheit 2 · PDF-S. 444–457"],
];
export default function K1ErbStPruefschemaV3(){return <><K1ErbStPruefschemaV2/><section className="abschnitt"><div className="pagehead"><div><span className="kicker">Klausur 1 · Erbschaftsteuer · Prüfschema</span><h1>Fortsetzung der 2. Einheit · PDF-S. 151–457</h1><p className="lead">Die bisher fehlenden 307 Seiten sind nun als eigene Originalschemata umgesetzt: NNAS, Kosten-Gabel, Fall 15, BewG-Türöffner, Bedingungen, § 11/§ 12 sowie die Darlehens- und Zinsfälle. Die handschriftliche Gabel-, Tabellen-, Pfeil- und Reiterlogik bleibt als Lernstruktur erhalten.</p></div><span className="zaehler">{BLOECKE.length} weitere Schemata</span></div></section><div className="erbst2-schema-stack">{BLOECKE.map(([id,titel,schema,quelle])=><section className="abschnitt ao-schema-section" id={id} key={id}><div className="kst-abschnitt-kopf"><div><span className="kicker">{quelle}</span><h2>{titel}</h2></div></div><K1ErbStSchemaAlleV2 id={schema}/></section>)}</div></>}
