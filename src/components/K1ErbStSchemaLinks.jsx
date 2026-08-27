import React from "react";

const ZIELE = [
  [/§\s*19\s*Abs\.\s*3\b|Härteausgleich/i, "erbst-schema-haerteausgleich"],
  [/§\s*19\b/i, "erbst-schema-steuersatz"],
  [/§\s*14\b/i, "erbst-schema-vorerwerbe"],
  [/§\s*10\s*Abs\.\s*6a\b/i, "erbst-schema-nnas"],
  [/§\s*16\b|§\s*17\b|§\s*5\b|§\s*10\s*Abs\.\s*1\s*S\.\s*6\b|§\s*10\s*Abs\.\s*5\s*Nr\.\s*3\b/i, "erbst-schema-erwerb"],
  [/R\s*E\s*7\.4\s*Abs\.\s*4\b/i, "erbst-schema-erwerb"],
  [/§§?\s*13(?:[–-]13d)?\b|§\s*12\b|BewG|§\s*10\s*Abs\.\s*6\b|§\s*10\s*Abs\.\s*5\s*Nr\.\s*[12]\b/i, "erbst-schema-wsv"],
  [/R\s*E\s*7\.4\b|§\s*10\s*Abs\.\s*1\s*S\.\s*[12]\b/i, "erbst-schema-einleitung"],
  [/§\s*1\b|§\s*2\b|§\s*3\b|§\s*7\b|§\s*9\b|§\s*11\b|§\s*15\b|§\s*20\b/i, "erbst-schema-vorspann"],
];

function zielFuer(text) {
  return ZIELE.find(([regex]) => regex.test(String(text)))?.[1] || null;
}

export function ErbStSchemaVerweise({ text, onOpen, compact = false, stopPropagation = false }) {
  if (!text || !onOpen) return null;
  const teile = String(text).split(/\s*·\s*/).filter(Boolean);
  const gesehen = new Set();
  const links = teile.map((teil) => [teil, zielFuer(teil)]).filter(([, ziel]) => ziel && !gesehen.has(ziel) && gesehen.add(ziel));
  if (!links.length) return null;
  return <div className={`schema-verweise${compact ? " schema-verweise--compact" : ""}`}>{links.map(([label,ziel])=><button key={`${ziel}-${label}`} type="button" onClick={(e)=>{if(stopPropagation)e.stopPropagation();onOpen(ziel);}}>↗ {label}</button>)}</div>;
}

export function ErbStNormkette({ normen = [], onOpen }) {
  return <div className="normkette">{normen.map((norm,i)=>{const ziel=zielFuer(norm);return <React.Fragment key={`${norm}-${i}`}>{i>0&&<span>→</span>}{ziel?<button type="button" onClick={()=>onOpen?.(ziel)}>{norm}</button>:<b>{norm}</b>}</React.Fragment>;})}</div>;
}

export function ErbStVerlinkterText({ text, as: Tag = "span", onOpen, compact = false }) {
  if (!text) return null;
  const regex=/(§{1,2}\s*\d+[a-z]?(?:\s*(?:Abs\.|S\.|Nr\.)\s*\d+[a-z]?)?(?:\s*(?:ErbStG|BewG))?|R\s*E\s*7\.4(?:\s*Abs\.\s*\d+)?)/g;
  return <Tag className={compact?"ao-linktext ao-linktext--compact":"ao-linktext"}>{String(text).split(regex).map((teil,i)=>{const ziel=zielFuer(teil);return ziel?<button key={i} type="button" className="ao-inline-norm" onClick={()=>onOpen?.(ziel)}>{teil}</button>:<React.Fragment key={i}>{teil}</React.Fragment>;})}</Tag>;
}
