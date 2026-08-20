import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./ao-links.css";

const MODUL_ZU_FAELLEN = {
  301: [{ id: 310, titel: "Pflichtverstöße im Besteuerungsverfahren" }],
  302: [{ id: 311, titel: "Auskunftsersuchen: zu Recht und verwertbar?" }],
  303: [{ id: 311, titel: "Auskunftsersuchen: zu Recht und verwertbar?" }],
};
const FALL_ZU_MODULEN = {
  310: [{ id: 301, titel: "Ablauf des Besteuerungsverfahrens" }],
  311: [{ id: 302, titel: "Ermittlungsverfahren: Untersuchungsgrundsatz und Beweismittel" }, { id: 303, titel: "Auskunfts- und Vorlageersuchen: Verweigerungsrechte und Verwertbarkeit" }],
};

function rail(text) {
  return Array.from(document.querySelectorAll(".ao-campus .rail__link")).find((b)=>b.textContent?.trim()===text);
}
function originalfallOeffnen(id) {
  rail("Originalfälle")?.click();
  const versuchen=(n=0)=>{
    const karte=Array.from(document.querySelectorAll(".ao-campus .kst-fallkarte")).find((x)=>x.textContent?.includes(`Fall ${id}`));
    const btn=karte?.querySelector("button");
    if(btn){btn.click();return;} if(n<30)setTimeout(()=>versuchen(n+1),50);
  }; setTimeout(()=>versuchen(),30);
}
function modulOeffnen(id) {
  rail("Abgabenordnung")?.click();
  const versuchen=(n=0)=>{
    const karte=Array.from(document.querySelectorAll(".ao-campus .modules .modul")).find((x)=>x.textContent?.includes(`Modul ${id}`));
    if(karte){karte.click();return;} if(n<30)setTimeout(()=>versuchen(n+1),50);
  }; setTimeout(()=>versuchen(),30);
}

export default function AOQuerverweiseEnhancer() {
  const [ziel,setZiel]=useState({mount:null,typ:null,id:null});
  useEffect(()=>{
    let frame=null; let host=null;
    const scan=()=>{frame=null; const lesson=document.querySelector(".ao-campus main.page > .ao-lesson"); const text=lesson?.querySelector(".lesson__kopf .kicker")?.textContent||""; const modulTreffer=text.match(/Lernmodul\s+(\d+)/i); const fallTreffer=text.match(/Originalfall\s+(\d+)/i); const typ=modulTreffer?"modul":fallTreffer?"fall":null; const id=Number(modulTreffer?.[1]||fallTreffer?.[1]||0); const refs=typ==="modul"?(MODUL_ZU_FAELLEN[id]||[]):typ==="fall"?(FALL_ZU_MODULEN[id]||[]):[];
      if(!lesson||!refs.length){if(host?.isConnected)host.remove();host=null;setZiel({mount:null,typ:null,id:null});return;}
      let h=lesson.querySelector(":scope > [data-ao-links]"); if(!h){h=document.createElement("div");h.dataset.aoLinks=String(id); const quellen=Array.from(lesson.querySelectorAll(":scope > .tz")).find((s)=>/Quellen/i.test(s.querySelector(".tz__no")?.textContent||"")); if(quellen)lesson.insertBefore(h,quellen);else lesson.appendChild(h);} host=h; setZiel((alt)=>alt.mount===h&&alt.id===id&&alt.typ===typ?alt:{mount:h,typ,id});
    };
    const plan=()=>{if(frame===null)frame=requestAnimationFrame(scan);}; plan(); const obs=new MutationObserver(plan);obs.observe(document.body,{childList:true,subtree:true});return()=>{obs.disconnect();if(frame!==null)cancelAnimationFrame(frame);if(host?.isConnected)host.remove();};
  },[]);
  if(!ziel.mount||!ziel.id)return null;
  const refs=ziel.typ==="modul"?(MODUL_ZU_FAELLEN[ziel.id]||[]):(FALL_ZU_MODULEN[ziel.id]||[]);
  const istModul=ziel.typ==="modul";
  return createPortal(<section className="tz ao-links-tz"><div className="tz__no"><b>{istModul?"Üben":"Lernen"}</b>Querverweise</div><div className="tz__body"><h2 className="tz__titel">{istModul?"Passende Originalfälle":"Passende Lernmodule"}</h2><p>{istModul?"Direkter Sprung zu kursinternen Fällen mit demselben oder eng überlappendem Prüfungsstoff.":"Direkter Rücksprung zu den Lernmodulen, die den Fall systematisch vorbereiten."}</p><div className="ao-linkcards">{refs.map((r)=><button key={r.id} onClick={()=>istModul?originalfallOeffnen(r.id):modulOeffnen(r.id)}><b>{istModul?`Originalfall ${r.id}`:`Lernmodul ${r.id}`}</b><span>{r.titel}</span><small>{istModul?"Fall":"Modul"} öffnen ↗</small></button>)}</div></div></section>,ziel.mount);
}
