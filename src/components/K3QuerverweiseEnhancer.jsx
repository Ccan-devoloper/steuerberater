import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { module as allgemeinModule } from "../data/module";
import { zugeordneteFaelle } from "../data/fallsammlung";
import hausaufgaben, { passendeModule } from "../data/hausaufgaben";
import { schemata as allgemeinSchemata } from "./Pruefungsschemata";
import "../data/k3-persg-tag2-register.js";
import "../data/k3-persg-tag3-register.js";
import "../data/k3-persg-tag4-register.js";
import { persgModule, persgFaelle, persgSchemata } from "../data/k3-persg-tag1";
import "./k3-querverweise.css";

const STOP = new Set(["aber","alle","also","auch","beim","dabei","daher","dann","dass","deren","dieser","dieses","durch","eine","einem","einen","einer","eines","fuer","gegen","haben","hier","oder","sowie","ueber","unter","werden","wird","zwischen","nach","nicht","noch","sein","sind","zum","zur","absatz","satz","nummer","gem","gemaess","estg","hgb","ao","klausur","pruefung","schema"]);
const SCHEMA_HINTS = {
  "vermoegensgegenstand-wirtschaftsgut": ["wirtschaftsgut","vermoegensgegenstand","zurechnung","wirtschaftliches eigentum","anschaffungskosten","herstellungskosten","anlagevermoegen","umlaufvermoegen"],
  verbindlichkeit: ["verbindlichkeit","darlehen","fremdwaehrung","rangruecktritt","erfuellungsbetrag","disagio"],
  rueckstellung: ["rueckstellung","ungewisse verbindlichkeit","prozess","aufbewahrung","abzinsung","erfuellungsbetrag"],
  "arap-prap": ["arap","prap","rechnungsabgrenzung","disagio"],
  entnahme: ["entnahme","privatnutzung","pkw","fahrtenbuch","betriebsvermoegen"],
  "bilanzberichtigung-kapitalanpassung": ["bilanzberichtigung","bilanzaenderung","kapitalanpassung","betriebspruefung","mehr weniger"],
};
const de = (wert = "") => String(wert).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ß/g, "ss").replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/[^a-z0-9§]+/g, " ").replace(/\s+/g, " ").trim();
const flatten = (wert) => wert == null ? "" : (typeof wert === "string" || typeof wert === "number") ? String(wert) : Array.isArray(wert) ? wert.map(flatten).join(" ") : typeof wert === "object" ? Object.values(wert).map(flatten).join(" ") : "";
const tokens = (wert) => new Set(de(flatten(wert)).split(" ").filter((x) => x.length >= 4 && !STOP.has(x)));
const normen = (wert) => { const out = new Set(); for (const m of flatten(wert).matchAll(/§{1,2}\s*(\d+[a-z]?)/gi)) out.add(m[1].toLowerCase()); return out; };
const schnitt = (a,b) => [...a].filter((x)=>b.has(x));
const moduleText = (m) => [m?.title,m?.law,m?.merksatz,...(m?.normchain||[]),...(m?.intro||[]),...(m?.scheme||[]),...(m?.exam||[]),...(m?.traps||[])].filter(Boolean).join(" ");
const schemaText = (s) => [s?.titel||s?.title,flatten(s?.bloecke),flatten(s?.law),flatten(s?.moduleIds)].join(" ");
function aehnlichkeit(a,b){const at=moduleText(a),bt=moduleText(b),tok=schnitt(tokens(at),tokens(bt)),ns=schnitt(normen(at),normen(bt));return ns.length*6+schnitt(tokens(a?.title||""),tokens(b?.title||"")).length*4+Math.min(8,tok.length);}
function verwandteModule(base,liste,max=4){return liste.filter((m)=>String(m.id)!==String(base?.id)).map((m)=>({m,score:aehnlichkeit(base,m)+(m.area===base?.area?2:0)})).filter(({score})=>score>=4).sort((a,b)=>b.score-a.score||String(a.m.id).localeCompare(String(b.m.id),"de",{numeric:true})).slice(0,max).map(({m})=>m);}
function schemaScore(schema,modul){const text=de(moduleText(modul));const hints=SCHEMA_HINTS[schema.id]||[...tokens(schema.titel||schema.title||"")];let score=hints.reduce((sum,h)=>sum+(text.includes(de(h))?4:0),0);score+=schnitt(normen(schemaText(schema)),normen(moduleText(modul))).length*5;return score;}
const allgSchemataFuerModul=(m,max=3)=>allgemeinSchemata.map((s)=>({s,score:schemaScore(s,m)})).filter(({score})=>score>=4).sort((a,b)=>b.score-a.score).slice(0,max).map(({s})=>s);
const allgModuleFuerSchema=(s,max=6)=>allgemeinModule.map((m)=>({m,score:schemaScore(s,m)})).filter(({score})=>score>=4).sort((a,b)=>b.score-a.score).slice(0,max).map(({m})=>m);
const allgFaelleFuerModul=(id)=>zugeordneteFaelle.filter((f)=>String(f.zielmodul_id)===String(id)).slice(0,5);
const allgHausaufgabenFuerModul=(id)=>hausaufgaben.filter((h)=>passendeModule(h,allgemeinModule).some((m)=>String(m.id)===String(id))).slice(0,4);
const persgFaelleFuerModul=(id)=>persgFaelle.filter((f)=>(f.moduleIds||[]).some((x)=>String(x)===String(id))).slice(0,5);
const persgSchemataFuerModul=(id)=>persgSchemata.filter((s)=>(s.moduleIds||[]).some((x)=>String(x)===String(id))).slice(0,5);

function fachAktiv(){const a=document.querySelector(".k1-fachleiste__tab[aria-current='true']");return /personengesellschaft/i.test(a?.textContent||a?.getAttribute("title")||"")?"persg":"allgemein";}
function warte(fn,versuche=36){const wert=fn();if(wert||versuche<=0)return;window.setTimeout(()=>warte(fn,versuche-1),70);}
function klickText(selector,text){const z=[...document.querySelectorAll(selector)].find((x)=>(x.textContent||"").trim().includes(text));z?.click();return Boolean(z);}
function reactWert(el,wert){if(!el)return;const proto=el instanceof HTMLSelectElement?HTMLSelectElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(proto,"value")?.set?.call(el,wert);el.dispatchEvent(new Event("input",{bubbles:true}));el.dispatchEvent(new Event("change",{bubbles:true}));}
function fachWechseln(fach,weiter){const label=fach==="persg"?"Personengesellschaften":"Allgemein";if(fachAktiv()===fach)return weiter();const tab=[...document.querySelectorAll(".k1-fachleiste__tab")].find((x)=>(x.getAttribute("title")||x.textContent||"").includes(label));if(!tab)return;tab.click();window.setTimeout(weiter,110);}
function rail(label,weiter){warte(()=>{const ok=klickText(".rail__link",label);if(ok)window.setTimeout(weiter,90);return ok;});}
function oeffneAllgModul(id){fachWechseln("allgemein",()=>rail("Lernmodule",()=>warte(()=>{const erster=document.querySelector(".filter button");if(erster&&erster.getAttribute("aria-pressed")!=="true")erster.click();const k=[...document.querySelectorAll(".modul")].find((x)=>new RegExp(`\\bModul\\s+${String(id)}\\b`).test(x.textContent||""));if(!k)return false;k.click();return true;})));}
function oeffnePersgModul(id){fachWechseln("persg",()=>rail("Personengesellschaften",()=>warte(()=>{const erster=document.querySelector(".persg-filter button");if(erster&&erster.getAttribute("aria-pressed")!=="true")erster.click();const k=[...document.querySelectorAll(".persg-module-card")].find((x)=>new RegExp(`\\bModul\\s+${String(id)}\\b`).test(x.textContent||""));if(!k)return false;k.click();return true;})));}
function oeffneAllgFall(id){fachWechseln("allgemein",()=>rail("Fälle",()=>warte(()=>{document.querySelectorAll(".falluebersicht__filter button").forEach((b)=>{if(/^Alle\b/.test((b.textContent||"").trim())&&b.getAttribute("aria-pressed")!=="true")b.click();});reactWert(document.querySelector(".falluebersicht__suche input"),id);window.setTimeout(()=>{const code=[...document.querySelectorAll(".fallsammlung__fall code")].find((x)=>(x.textContent||"").trim()===id);const k=code?.closest(".fallsammlung__fall");k?.scrollIntoView({behavior:"smooth",block:"center"});if(k&&!k.classList.contains("fallsammlung__fall--offen"))k.querySelector(".fallsammlung__kopf--button")?.click();},120);return true;})));}
function oeffnePersgFall(id){fachWechseln("persg",()=>rail("Originalfälle",()=>warte(()=>{const k=document.getElementById(id);if(!k)return false;k.scrollIntoView({behavior:"smooth",block:"start"});k.classList.add("k3-xref-ziel");window.setTimeout(()=>k.classList.remove("k3-xref-ziel"),1800);return true;})));}
function oeffneAllgSchema(id){fachWechseln("allgemein",()=>rail("Prüfungsschema",()=>warte(()=>{const index=allgemeinSchemata.findIndex((s)=>s.id===id);const buttons=document.querySelectorAll("[data-pruefungsschemata-portal] .filter button");if(index<0||!buttons[index])return false;buttons[index].click();document.querySelector("[data-pruefungsschemata-portal]")?.scrollIntoView({behavior:"smooth",block:"start"});return true;})));}
function oeffnePersgSchema(id){fachWechseln("persg",()=>rail("Prüfschema",()=>warte(()=>{const z=document.getElementById(`persg-schema-${id}`);if(!z)return false;z.scrollIntoView({behavior:"smooth",block:"start"});z.classList.add("k3-xref-ziel");window.setTimeout(()=>z.classList.remove("k3-xref-ziel"),1800);return true;})));}
function oeffneHausaufgabe(id){fachWechseln("allgemein",()=>rail("Hausaufgaben",()=>warte(()=>{reactWert(document.querySelector(".hausaufgaben-tools input"),"");reactWert(document.querySelector(".hausaufgaben-tools select"),"alle");const z=document.getElementById(id);if(!z)return false;z.scrollIntoView({behavior:"smooth",block:"start"});z.classList.add("k3-xref-ziel");window.setTimeout(()=>z.classList.remove("k3-xref-ziel"),1800);return true;})));}
const oeffneAnsicht=(fach,label)=>fachWechseln(fach,()=>rail(label,()=>true));

function LinkGruppe({titel,typ,links}){if(!links?.length)return null;return <div className="k3-xref__gruppe" data-k3-xref-group={typ}><b>{titel}</b><div>{links.map((x)=><button type="button" key={x.key} onClick={x.onClick}><span>{x.label}</span>{x.meta&&<small>{x.meta}</small>}<i aria-hidden="true">↗</i></button>)}</div></div>;}

function Panel({context}){
  const {fach,art,entity}=context;const gruppen=[];
  if(art==="cockpit"){const persg=fach==="persg";return <section className="k3-xref k3-xref--system" data-k3-xref-context={`${fach}-cockpit`}><div className="k3-xref__kopf"><span className="kicker">Querverweis-Systematik</span><h2>Ein Stoff – mehrere Zugänge</h2><p>Von jedem Lerninhalt führen direkte Wege zu Übungsfällen, Prüfschemata und Vertiefungen. Die Rückwege sind ebenfalls verlinkt.</p></div><div className="k3-xref__prozess"><button onClick={()=>oeffneAnsicht(fach,persg?"Personengesellschaften":"Lernmodule")}>Lernmodule</button><span>↔</span><button onClick={()=>oeffneAnsicht(fach,persg?"Originalfälle":"Fälle")}>{persg?"Originalfälle":"Fälle"}</button><span>↔</span><button onClick={()=>oeffneAnsicht(fach,persg?"Prüfschema":"Prüfungsschema")}>Prüfschemata</button>{!persg&&<><span>↔</span><button onClick={()=>oeffneAnsicht("allgemein","Hausaufgaben")}>Hausaufgaben</button></>}</div></section>;}
  if(fach==="allgemein"&&art==="module"){
    const m=entity,cases=allgFaelleFuerModul(m.id),schemata=allgSchemataFuerModul(m),ha=allgHausaufgabenFuerModul(m.id),related=verwandteModule(m,allgemeinModule,4),cross=m.area==="PersG"?verwandteModule(m,persgModule,4):[];
    gruppen.push({titel:"Passende Fälle",typ:"faelle",links:cases.map((f)=>({key:f.id,label:f.titel||f.id,meta:f.quellmodul,onClick:()=>oeffneAllgFall(f.id)}))},{titel:"Passende Prüfschemata",typ:"schemata",links:schemata.map((s)=>({key:s.id,label:s.titel,onClick:()=>oeffneAllgSchema(s.id)}))},{titel:"Passende Hausaufgaben",typ:"hausaufgaben",links:ha.map((h)=>({key:h.id,label:`Fachtermin ${h.termin}: ${h.titel}`,onClick:()=>oeffneHausaufgabe(h.id)}))},{titel:"Verwandte Lernmodule",typ:"module",links:related.map((x)=>({key:x.id,label:`Modul ${x.id}: ${x.title}`,onClick:()=>oeffneAllgModul(x.id)}))},{titel:"PersG-Vertiefung",typ:"fachwechsel",links:cross.map((x)=>({key:x.id,label:`PersG M${x.id}: ${x.title}`,onClick:()=>oeffnePersgModul(x.id)}))});
  }
  if(fach==="allgemein"&&art==="fall"){
    const f=entity,m=allgemeinModule.find((x)=>String(x.id)===String(f.zielmodul_id)),schemata=m?allgSchemataFuerModul(m):[],ha=m?allgHausaufgabenFuerModul(m.id):[],cross=m?.area==="PersG"?verwandteModule(m,persgModule,3):[];
    gruppen.push({titel:"Zugehöriges Lernmodul",typ:"module",links:m?[{key:m.id,label:`Modul ${m.id}: ${m.title}`,onClick:()=>oeffneAllgModul(m.id)}]:[]},{titel:"Passende Prüfschemata",typ:"schemata",links:schemata.map((s)=>({key:s.id,label:s.titel,onClick:()=>oeffneAllgSchema(s.id)}))},{titel:"Passende Hausaufgaben",typ:"hausaufgaben",links:ha.map((h)=>({key:h.id,label:`Fachtermin ${h.termin}: ${h.titel}`,onClick:()=>oeffneHausaufgabe(h.id)}))},{titel:"PersG-Vertiefung",typ:"fachwechsel",links:cross.map((x)=>({key:x.id,label:`PersG M${x.id}: ${x.title}`,onClick:()=>oeffnePersgModul(x.id)}))});
  }
  if(fach==="allgemein"&&art==="schema"){
    const s=entity,mods=allgModuleFuerSchema(s),cases=[...new Map(mods.flatMap((m)=>allgFaelleFuerModul(m.id)).map((f)=>[f.id,f])).values()].slice(0,5),ha=[...new Map(mods.flatMap((m)=>allgHausaufgabenFuerModul(m.id)).map((h)=>[h.id,h])).values()].slice(0,4);
    gruppen.push({titel:"Passende Lernmodule",typ:"module",links:mods.map((m)=>({key:m.id,label:`Modul ${m.id}: ${m.title}`,onClick:()=>oeffneAllgModul(m.id)}))},{titel:"Passende Fälle",typ:"faelle",links:cases.map((f)=>({key:f.id,label:f.titel||f.id,meta:f.quellmodul,onClick:()=>oeffneAllgFall(f.id)}))},{titel:"Passende Hausaufgaben",typ:"hausaufgaben",links:ha.map((h)=>({key:h.id,label:`Fachtermin ${h.termin}: ${h.titel}`,onClick:()=>oeffneHausaufgabe(h.id)}))});
  }
  if(fach==="allgemein"&&art==="hausaufgabe"){
    const h=entity,mods=passendeModule(h,allgemeinModule).slice(0,5),schemata=[...new Map(mods.flatMap(allgSchemataFuerModul).map((s)=>[s.id,s])).values()].slice(0,4),cases=[...new Map(mods.flatMap((m)=>allgFaelleFuerModul(m.id)).map((f)=>[f.id,f])).values()].slice(0,4);
    gruppen.push({titel:"Passende Lernmodule",typ:"module",links:mods.map((m)=>({key:m.id,label:`Modul ${m.id}: ${m.title}`,onClick:()=>oeffneAllgModul(m.id)}))},{titel:"Passende Prüfschemata",typ:"schemata",links:schemata.map((s)=>({key:s.id,label:s.titel,onClick:()=>oeffneAllgSchema(s.id)}))},{titel:"Passende Fälle",typ:"faelle",links:cases.map((f)=>({key:f.id,label:f.titel||f.id,onClick:()=>oeffneAllgFall(f.id)}))});
  }
  if(fach==="persg"&&art==="module"){
    const m=entity,cases=persgFaelleFuerModul(m.id),schemata=persgSchemataFuerModul(m.id),related=verwandteModule(m,persgModule,4),cross=verwandteModule(m,allgemeinModule.filter((x)=>x.area==="PersG"),4);
    gruppen.push({titel:"Passende Originalfälle",typ:"faelle",links:cases.map((f)=>({key:f.id,label:`Fall ${f.nr}: ${f.title}`,onClick:()=>oeffnePersgFall(f.id)}))},{titel:"Passende Prüfschemata",typ:"schemata",links:schemata.map((s)=>({key:s.id,label:s.title,onClick:()=>oeffnePersgSchema(s.id)}))},{titel:"Verwandte PersG-Module",typ:"module",links:related.map((x)=>({key:x.id,label:`M${x.id}: ${x.title}`,onClick:()=>oeffnePersgModul(x.id)}))},{titel:"K3-Allgemein · Vertiefung",typ:"fachwechsel",links:cross.map((x)=>({key:x.id,label:`Modul ${x.id}: ${x.title}`,onClick:()=>oeffneAllgModul(x.id)}))});
  }
  if(fach==="persg"&&art==="fall"){
    const f=entity,mods=(f.moduleIds||[]).map((id)=>persgModule.find((m)=>String(m.id)===String(id))).filter(Boolean),schemata=persgSchemata.filter((s)=>(s.moduleIds||[]).some((id)=>(f.moduleIds||[]).some((x)=>String(x)===String(id)))).slice(0,5),cross=[...new Map(mods.flatMap((m)=>verwandteModule(m,allgemeinModule.filter((x)=>x.area==="PersG"),2)).map((m)=>[m.id,m])).values()].slice(0,4);
    gruppen.push({titel:"Passende Lernmodule",typ:"module",links:mods.map((m)=>({key:m.id,label:`M${m.id}: ${m.title}`,onClick:()=>oeffnePersgModul(m.id)}))},{titel:"Passende Prüfschemata",typ:"schemata",links:schemata.map((s)=>({key:s.id,label:s.title,onClick:()=>oeffnePersgSchema(s.id)}))},{titel:"K3-Allgemein · Vertiefung",typ:"fachwechsel",links:cross.map((m)=>({key:m.id,label:`Modul ${m.id}: ${m.title}`,onClick:()=>oeffneAllgModul(m.id)}))});
  }
  if(fach==="persg"&&art==="schema"){
    const s=entity,mods=(s.moduleIds||[]).map((id)=>persgModule.find((m)=>String(m.id)===String(id))).filter(Boolean),cases=persgFaelle.filter((f)=>(f.moduleIds||[]).some((id)=>(s.moduleIds||[]).some((x)=>String(x)===String(id)))).slice(0,6);
    gruppen.push({titel:"Passende Lernmodule",typ:"module",links:mods.map((m)=>({key:m.id,label:`M${m.id}: ${m.title}`,onClick:()=>oeffnePersgModul(m.id)}))},{titel:"Passende Originalfälle",typ:"faelle",links:cases.map((f)=>({key:f.id,label:`Fall ${f.nr}: ${f.title}`,onClick:()=>oeffnePersgFall(f.id)}))});
  }
  const sichtbar=gruppen.filter((g)=>g.links?.length);if(!sichtbar.length)return null;
  return <section className="k3-xref" data-k3-xref-context={`${fach}-${art}`}><div className="k3-xref__kopf"><span className="kicker">Querverweise</span><h2>Passende Inhalte zu diesem {art==="module"?"Lernmodul":art==="fall"?"Fall":art==="schema"?"Prüfschema":"Fachtermin"}</h2><p>Direkte Sprünge innerhalb von Klausur 3. Die Verknüpfung folgt Modulzuordnung, Normen und fachlichen Schlagworten.</p></div><div className="k3-xref__grid">{sichtbar.map((g)=><LinkGruppe key={g.typ} {...g}/>)}</div></section>;
}

function contexts(){const fach=fachAktiv(),out=[];const cockpit=document.querySelector("main.page .cockpit");if(cockpit)out.push({key:`${fach}:cockpit`,target:cockpit,fach,art:"cockpit",entity:null});if(fach==="allgemein"){
  const lesson=document.querySelector("main.page article.lesson");if(lesson){const match=(lesson.querySelector(".lesson__kopf .kicker")?.textContent||"").match(/Modul\s+(\d+)/i);const m=match?allgemeinModule.find((x)=>String(x.id)===match[1]):null;if(m)out.push({key:`allgemein:module:${m.id}`,target:lesson,fach,art:"module",entity:m});}
  const offen=document.querySelector(".fallsammlung__fall--offen .fallsammlung__inhalt");if(offen){const id=offen.closest(".fallsammlung__fall")?.querySelector("code")?.textContent?.trim();const f=zugeordneteFaelle.find((x)=>x.id===id);if(f)out.push({key:`allgemein:fall:${f.id}`,target:offen,fach,art:"fall",entity:f});}
  const portal=document.querySelector("[data-pruefungsschemata-portal]");if(portal){const buttons=[...portal.querySelectorAll(".filter button")],index=buttons.findIndex((b)=>b.getAttribute("aria-pressed")==="true"),s=allgemeinSchemata[index>=0?index:0];if(s)out.push({key:`allgemein:schema:${s.id}`,target:portal,fach,art:"schema",entity:s});}
  document.querySelectorAll(".hausaufgaben-list .hausaufgabe").forEach((target)=>{const h=hausaufgaben.find((x)=>x.id===target.id);if(h)out.push({key:`allgemein:hausaufgabe:${h.id}`,target,fach,art:"hausaufgabe",entity:h});});
}else{
  const head=document.querySelector(".persg-lesson-head");if(head){const match=(head.textContent||"").match(/Modul\s+(\d+)/i),m=match?persgModule.find((x)=>String(x.id)===match[1]):null,target=head.closest("main.page")||head.parentElement;if(m&&target)out.push({key:`persg:module:${m.id}`,target,fach,art:"module",entity:m});}
  document.querySelectorAll(".persg-fall[id]").forEach((target)=>{const f=persgFaelle.find((x)=>x.id===target.id);if(f)out.push({key:`persg:fall:${f.id}`,target,fach,art:"fall",entity:f});});
  document.querySelectorAll(".persg-schema-card[id^='persg-schema-']").forEach((target)=>{const id=target.id.replace("persg-schema-",""),s=persgSchemata.find((x)=>x.id===id);if(s)out.push({key:`persg:schema:${id}`,target,fach,art:"schema",entity:s});});
}return out;}
const gleiche=(a,b)=>a.length===b.length&&a.every((x,i)=>x.key===b[i].key&&x.target===b[i].target);
export default function K3QuerverweiseEnhancer(){const [ziele,setZiele]=useState([]);useEffect(()=>{let frame=0;const scan=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const neu=contexts();setZiele((alt)=>gleiche(alt,neu)?alt:neu);});};scan();const observer=new MutationObserver(scan);observer.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:["aria-current","aria-pressed","class","open"]});window.addEventListener("popstate",scan);return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener("popstate",scan);};},[]);const portals=useMemo(()=>ziele.map((context)=>createPortal(<Panel context={context}/>,context.target,context.key)),[ziele]);return <>{portals}</>;}
