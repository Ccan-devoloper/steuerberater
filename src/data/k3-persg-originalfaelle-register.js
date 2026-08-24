import { registerPersGTag5 } from "./k3-persg-tag5-register.js";
import { persgFaelle } from "./k3-persg-tag1.js";
import { originalfaelle_4a4b } from "./k3-persg-originalfaelle-4a4b.js";
import { original4cFacts, original4cSolutionA } from "./k3-persg-originalfaelle-4c-a.js";
import { original4cSolutionB } from "./k3-persg-originalfaelle-4c-b.js";
import { originalfall_4d } from "./k3-persg-originalfaelle-4d.js";
import { originalfaelle_4e4f } from "./k3-persg-originalfaelle-4e4f.js";
import { originalfaelle_4g4h } from "./k3-persg-originalfaelle-4g4h.js";

registerPersGTag5();

const originalfall4c = {
  id:"persg-original-4c", nr:"4C", sourceTag:5,
  title:"Austritt von Gesellschaftern – Beispiel 2",
  sourcePages:["Aufgabe 1–3","Lösung 1–7"], moduleIds:[40,41],
  law:"§ 16 EStG · § 6b EStG · § 7 EStG",
  facts:original4cFacts, tasks:[],
  solution:[...original4cSolutionA,...original4cSolutionB],
  result:"", verbatim:true,
};

// Realteilungsfälle verweisen zusätzlich auf die Sperrfrist-/Verwaltungsgrundsätze (Modul 45).
for (const fall of originalfaelle_4g4h) fall.moduleIds = [44,45,46];

// Die komprimierten Tag-5-Unterrichtsfälle werden durch die vollständigen Original-PDF-Fälle ersetzt.
persgFaelle.splice(0, persgFaelle.length, ...persgFaelle.filter((fall)=>fall.sourceTag!==5));
persgFaelle.push(
  ...originalfaelle_4a4b,
  originalfall4c,
  originalfall_4d,
  ...originalfaelle_4e4f,
  ...originalfaelle_4g4h,
);

// Unterstrichene Gliederungsstellen der Original-PDFs. Rechenstriche und einzelne
// Hervorhebungen innerhalb laufender Sätze werden bewusst nicht als Überschrift behandelt.
const ORIGINAL_PDF_HEADINGS = {
  "persg-original-4a": {
    facts:{0:["Beispiel 1"]},
    solution:{
      0:["Lösung 1","Hinweis:","Handelsbilanz","Gebäude 1","Gebäude 2"],
      1:["Maschine 1","Maschine 2","Steuerbilanz","Gebäude 1","Gebäude 2"],
      2:["Maschine 1","Maschine 2"],
    },
  },
  "persg-original-4b": {
    facts:{0:["Abwandlung zu Beispiel 1"]},
    solution:{0:["Lösung Abwandlung zu Beispiel 1"]},
  },
  "persg-original-4c": {
    facts:{0:["Beispiel 2"],1:["Aufgabe:"]},
    solution:{
      0:["Lösung - Beispiel 2","Hinweise:","Ermittlung des Veräußerungsgewinns des C:","Erstellen der Eröffnungsbilanz (HB + StB) der AB OHG:"],
      1:["Fortführung der Bilanzen auf den 31.12.2025","Handelsbilanz","Hinweis:","Fortentwicklung auf den 31.12.2025","Abfindungsverpflichtung"],
      2:["Firmenwert","Gewinnchance","Gebäude 1","Gebäude 2","Maschine 1","Maschine 2"],
      4:["Steuerbilanz","Hinweis:",{startsWith:"1. Schritt"},{startsWith:"2. Schritt"},"Fortentwicklung auf den 31.12.2025","Abfindungsverpflichtung","Firmenwert","Gewinnchance","Gebäude 1"],
      5:["Gebäude 2","Maschine 1","Maschine 2"],
    },
  },
  "persg-original-4d": {
    facts:{0:["Beispiel"]},
    solution:{0:["Lösung",{startsWith:"1. Schritt"},{startsWith:"2. Schritt"}]},
  },
  "persg-original-4e": {
    facts:{0:["Beispiel"]},
    solution:{0:["Lösung","Fortentwicklung der Bilanz:","Gebäude:","Maschine:"]},
  },
  "persg-original-4f": {
    facts:{0:["Beispiel"]},
    solution:{0:["Lösung"]},
  },
  "persg-original-4g": {
    facts:{0:["Beispiel"]},
    solution:{0:["Beispiel"]},
  },
  "persg-original-4h": {
    facts:{0:["Beispiel"]},
    solution:{
      0:["Lösung","Zwischenrechnung:",{startsWith:"1. Schritt:"},{startsWith:"2. Schritt:"},{startsWith:"Laufender Gewinn des A"}],
      1:[{startsWith:"3. Schritt"}],
    },
  },
};

const headingNorm=(text)=>String(text||"").trim().replace(/\s+/g," ");
const headingMatch=(line,spec)=>typeof spec==="string"?headingNorm(line)===headingNorm(spec):headingNorm(line).startsWith(headingNorm(spec?.startsWith));

function formatOriginalPdfPage(el,specs){
  if(!el||el.dataset.persgPdfHeadings==="1"||!specs?.length)return;
  const source=el.textContent||"";
  if(!source.trim())return;
  const fragment=document.createDocumentFragment();
  let body=[];
  const flushBody=()=>{
    if(!body.length)return;
    const span=document.createElement("span");
    span.className="persg-original-pdf-body";
    let text="";
    for(const part of body){
      if(!part)continue;
      if(!text)text=part;
      else text+=text.endsWith("-")?part:` ${part}`;
    }
    span.textContent=text;
    fragment.appendChild(span);
    body=[];
  };
  for(const rawLine of source.replace(/\r/g,"").split("\n")){
    const line=rawLine.trim();
    if(!line){flushBody();continue;}
    const isHeading=specs.some((spec)=>headingMatch(line,spec));
    if(isHeading){
      flushBody();
      const strong=document.createElement("strong");
      strong.className="persg-original-pdf-heading";
      strong.textContent=line;
      fragment.appendChild(strong);
    }else body.push(line);
  }
  flushBody();
  el.replaceChildren(fragment);
  el.dataset.persgPdfHeadings="1";
}

function decorateOriginalPdfHeadings(){
  for(const [id,groups] of Object.entries(ORIGINAL_PDF_HEADINGS)){
    const article=document.getElementById(id);
    if(!article)continue;
    const facts=article.querySelectorAll(".persg-facts > p");
    const solutions=article.querySelectorAll("details > .persg-list > li");
    for(const [index,specs] of Object.entries(groups.facts||{}))formatOriginalPdfPage(facts[Number(index)],specs);
    for(const [index,specs] of Object.entries(groups.solution||{}))formatOriginalPdfPage(solutions[Number(index)],specs);
  }
}

if(typeof document!=="undefined"&&typeof MutationObserver!=="undefined"&&!globalThis.__persgOriginalPdfHeadingObserver){
  let pending=false;
  const schedule=()=>{
    if(pending)return;
    pending=true;
    const run=()=>{pending=false;decorateOriginalPdfHeadings();};
    typeof requestAnimationFrame==="function"?requestAnimationFrame(run):setTimeout(run,0);
  };
  const observer=new MutationObserver(schedule);
  observer.observe(document.documentElement,{childList:true,subtree:true});
  globalThis.__persgOriginalPdfHeadingObserver=observer;
  schedule();
}
