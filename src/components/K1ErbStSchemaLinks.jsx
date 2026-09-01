import React from"react";

const ZIELE=[
[/§\s*12\s*Abs\.\s*3\s*BewG|Fälligkeitsdarl|Tabelle\s*1/i,"erbst2f-schema-darlehen"],
[/Tilgungsdarl|Tabelle\s*2/i,"erbst2f-schema-darlehen"],
[/§\s*12\s*Abs\.\s*[1-4]\s*BewG|R\s*B\s*12\.1/i,"erbst2f-schema-forderungen"],
[/§\s*11\s*(?:Abs\.\s*[124])?\s*BewG/i,"erbst2f-schema-wertpapiere"],
[/§§?\s*[4-8](?:\s*[–-]\s*8)?\s*BewG|§\s*4\s*BewG|§\s*5\s*BewG|§\s*6\s*BewG|§\s*7\s*BewG|§\s*8\s*BewG/i,"erbst2f-schema-bedingungen"],
[/§\s*9\s*(?:Abs\.\s*[12])?\s*BewG/i,"erbst2f-schema-gemeiner-wert"],
[/§\s*151\b|§§?\s*1[–-]16\s*BewG|§\s*31\s*BewG|§\s*12\s*Abs\.\s*[1-7]\s*ErbStG/i,"erbst2f-schema-bewg-master"],
[/§\s*10\s*Abs\.\s*6a\s*S\.\s*[3578]\b|NNAS/i,"erbst2f-schema-nnas"],
[/§\s*10\s*Abs\.\s*5\s*Nr\.\s*3\b|R\s*E\s*7\.4\s*Abs\.\s*4\b|H\s*E\s*10\.7/i,"erbst2f-schema-kosten"],
[/§\s*10\s*Abs\.\s*6a\b|§\s*10\s*Abs\.\s*6\b|R\s*E\s*10\.10/i,"erbst2-schema-abzugsbegrenzung"],
[/§\s*13d\b|R\s*E\s*13d/i,"erbst2-schema-13d"],
[/§\s*13\s*Abs\.\s*1\s*Nr\.\s*4[abc]\b/i,"erbst2-schema-familienheim"],
[/§\s*13\s*Abs\.\s*1\s*Nr\.\s*1[abc]?\b/i,"erbst2-schema-hausrat"],
[/§\s*10\s*Abs\.\s*5\s*Nr\.\s*[12]\b|R\s*E\s*7\.4\s*Abs\.\s*1\s*S\.\s*2/i,"erbst2-schema-verbindlichkeiten"],
[/§\s*19\s*Abs\.\s*3\b|Härteausgleich/i,"erbst-schema-haerteausgleich"],
[/§\s*19\b/i,"erbst-schema-steuersatz"],
[/§\s*14\b/i,"erbst-schema-vorerwerbe"],
[/§\s*16\b|§\s*17\b|§\s*5\s*ErbStG|§\s*10\s*Abs\.\s*1\s*S\.\s*6\b/i,"erbst-schema-erwerb"],
[/§§?\s*13(?:[–-]13d)?\b|§\s*12\s*ErbStG|BewG/i,"erbst-schema-wsv"],
[/R\s*E\s*7\.4\b|§\s*10\s*Abs\.\s*1\s*S\.\s*[12]\b/i,"erbst-schema-einleitung"],
[/§\s*1\b|§\s*2\b|§\s*3\b|§\s*7\b|§\s*9\s*ErbStG|§\s*11\s*ErbStG|§\s*15\b|§\s*20\b/i,"erbst-schema-vorspann"],
];
function zielFuer(text){return ZIELE.find(([regex])=>regex.test(String(text)))?.[1]||null}
export function ErbStSchemaVerweise({text,onOpen,compact=false,stopPropagation=false}){if(!text||!onOpen)return null;const teile=String(text).split(/\s*·\s*/).filter(Boolean),gesehen=new Set();const links=teile.map(teil=>[teil,zielFuer(teil)]).filter(([,ziel])=>ziel&&!gesehen.has(ziel)&&gesehen.add(ziel));if(!links.length)return null;return <div className={`schema-verweise${compact?" schema-verweise--compact":""}`}>{links.map(([label,ziel])=><button key={`${ziel}-${label}`} type="button" onClick={e=>{if(stopPropagation)e.stopPropagation();onOpen(ziel)}}>↗ {label}</button>)}</div>}
export function ErbStNormkette({normen=[],onOpen}){return <div className="normkette">{normen.map((norm,i)=>{const ziel=zielFuer(norm);return <React.Fragment key={`${norm}-${i}`}>{i>0&&<span>→</span>}{ziel?<button type="button" onClick={()=>onOpen?.(ziel)}>{norm}</button>:<b>{norm}</b>}</React.Fragment>})}</div>}
export function ErbStVerlinkterText({text,as:Tag="span",onOpen,compact=false}){if(!text)return null;const regex=/(§{1,2}\s*\d+[a-z]?(?:\s*(?:Abs\.|S\.|Nr\.)\s*\d+[a-z]?)?(?:\s*(?:ErbStG|BewG))?|R\s*[EB]\s*\d+(?:\.\d+)?(?:\s*Abs\.\s*\d+)?|H\s*E\s*\d+(?:\.\d+)?)/g;return <Tag className={compact?"ao-linktext ao-linktext--compact":"ao-linktext"}>{String(text).split(regex).map((teil,i)=>{const ziel=zielFuer(teil);return ziel?<button key={i} type="button" className="ao-inline-norm" onClick={()=>onOpen?.(ziel)}>{teil}</button>:<React.Fragment key={i}>{teil}</React.Fragment>})}</Tag>}
