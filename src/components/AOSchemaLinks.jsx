import React from "react";

const ZIELE = [
  [/§\s*357\s*Abs\.\s*2\b|AEAO\s+zu\s+§\s*110/i, "ao-schema-einspruch-falsches-fa"],
  [/§\s*350\b|§\s*358\b/i, "ao-schema-beschwer"],
  [/§\s*351\s*Abs\.\s*1\b/i, "ao-schema-begruendetheit"],
  [/§\s*367\s*Abs\.\s*2\s*S\.\s*2\b|§\s*362\b/i, "ao-schema-einspruch-besonderheiten"],
  [/§\s*367\s*Abs\.\s*2\s*S\.\s*3\b|§\s*366\b/i, "ao-schema-einspruch-erledigung"],
  [/§\s*177\b/i, "ao-schema-plan-abc"],
  [/§\s*129\b/i, "ao-schema-korrekturpaerchen"],
  [/§\s*169\s*Abs\.\s*2\b/i, "ao-schema-ff-dauer"],
  [/§\s*170\b/i, "ao-schema-ff-beginn"],
  [/§\s*169\s*Abs\.\s*1\b/i, "ao-schema-ff-ende"],
  [/§\s*171\s*Abs\.\s*3a\b|§\s*171\s*Abs\.\s*4\b/i, "ao-schema-ablaufhemmungen"],
  [/§\s*171\s*Abs\.\s*2\b|§\s*171\s*Abs\.\s*3\b|§\s*173a\b/i, "ao-schema-korrekturpaerchen"],
  [/§\s*38\b/i, "ao-schema-ablauf"],
  [/§§?\s*85|§\s*88\b|§\s*92\b/i, "ao-schema-ermittlung"],
  [/§\s*93\b|§\s*97\b|§\s*101\b|§\s*102\b|§\s*104\b|§\s*15\b/i, "ao-schema-auskunft"],
  [/§\s*118\b/i, "ao-schema-va"],
  [/§\s*155\b|§§?\s*167|§\s*168\b|§\s*179\b|§\s*239\b|§\s*196\b|§\s*191\b|§\s*152\b/i, "ao-schema-va-arten"],
  [/§\s*124\s*Abs\.\s*1\b|AEAO\s+zu\s+§\s*124\s+Nr\.\s*4/i, "ao-schema-bekanntgabewille"],
  [/§\s*79\b/i, "ao-schema-bekanntgabewille"],
  [/§\s*122a\b|§\s*122\s*Abs\.\s*2a\b|§\s*122\s*Abs\.\s*5\b|§\s*122\s*Abs\.\s*2\b|§§?\s*177[–-]182\s*ZPO/i, "ao-schema-bekanntgabe-zeitpunkt"],
  [/§\s*108\b|§\s*187\b|§\s*188\b/i, "ao-schema-fristen"],
  [/§\s*126\b|§\s*127\b|§\s*121\b|§\s*91\b|§§?\s*17\b/i, "ao-schema-fehlerfolgen"],
  [/§§?\s*172\b/i, "ao-schema-fehlerhafter-va"],
  [/§\s*367\b|§\s*361\b/i, "ao-schema-einspruch"],
  [/§\s*347\b|§\s*348\b|§\s*357\s*Abs\.\s*1\b|§\s*357\s*Abs\.\s*3\b/i, "ao-schema-einspruch-zulaessigkeit"],
  [/§\s*355\b|§\s*356\b|§\s*110\b|§\s*351\s*Abs\.\s*2\b/i, "ao-schema-einspruch-frist"],
  [/§\s*124\b|§\s*125\b|§\s*119\b|§\s*157\b/i, "ao-schema-wirksamkeit"],
  [/§\s*122\b|§\s*183\b|§\s*183a\b|§\s*8\s*VwZG/i, "ao-schema-bekanntgabe"],
  [/§\s*80\b|§\s*44\b|§\s*365\b/i, "ao-schema-vertreter"],
  [/§\s*128\b|§\s*130\b|§\s*131\b|§\s*164\b|§\s*165\b/i, "ao-schema-va-arten"],
  [/§\s*171\b/i, "ao-schema-ff-ende"],
];

function zielFuer(text) { return ZIELE.find(([regex]) => regex.test(text))?.[1] || null; }

export function AOSchemaVerweise({ text, onOpen, compact = false, stopPropagation = false }) {
  if (!text || !onOpen) return null;
  const teile = String(text).split(/\s*·\s*/).filter(Boolean);
  const gesehen = new Set();
  const links = teile.map((teil) => [teil, zielFuer(teil)]).filter(([, ziel]) => ziel && !gesehen.has(ziel) && gesehen.add(ziel));
  if (!links.length) return null;
  return <div className={`schema-verweise${compact ? " schema-verweise--compact" : ""}`}>{links.map(([label,ziel])=><button key={`${ziel}-${label}`} type="button" onClick={(e)=>{if(stopPropagation)e.stopPropagation();onOpen(ziel);}}>↗ {label}</button>)}</div>;
}

export function AONormkette({ normen = [], onOpen }) {
  return <div className="normkette">{normen.map((norm,i)=>{const ziel=zielFuer(norm);return <React.Fragment key={`${norm}-${i}`}>{i>0&&<span>→</span>}{ziel?<button type="button" onClick={()=>onOpen?.(ziel)}>{norm}</button>:<b>{norm}</b>}</React.Fragment>;})}</div>;
}

export function AOVerlinkterText({ text, as: Tag = "span", onOpen, compact = false }) {
  if (!text) return null;
  return <Tag className={compact?"ao-linktext ao-linktext--compact":"ao-linktext"}>{String(text).split(/(§{1,2}\s*\d+[a-z]?(?:\s*(?:Abs\.|S\.|Nr\.)\s*\d+[a-z]?)?(?:\s*AO)?)/g).map((teil,i)=>{const ziel=zielFuer(teil);return ziel?<button key={i} type="button" className="ao-inline-norm" onClick={()=>onOpen?.(ziel)}>{teil}</button>:<React.Fragment key={i}>{teil}</React.Fragment>;})}</Tag>;
}
