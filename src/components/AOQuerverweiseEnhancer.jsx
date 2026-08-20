import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const VERWEISE = {
  301: [{ id: 310, titel: "Pflichtverstöße im Besteuerungsverfahren" }],
  302: [{ id: 311, titel: "Auskunftsersuchen: zu Recht und verwertbar?" }],
  303: [{ id: 311, titel: "Auskunftsersuchen: zu Recht und verwertbar?" }],
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

export default function AOQuerverweiseEnhancer() {
  const [ziel,setZiel]=useState({mount:null,id:null});
  useEffect(()=>{
    let frame=null; let host=null;
    const scan=()=>{frame=null; const lesson=document.querySelector(".ao-campus main.page > .ao-lesson"); const text=lesson?.querySelector(".lesson__kopf .kicker")?.textContent||""; const m=text.match(/Lernmodul\s+(\d+)/i); const id=m?Number(m[1]):null; const refs=VERWEISE[id]||[];
      if(!lesson||!refs.length){if(host?.isConnected)host.remove();host=null;setZiel({mount:null,id:null});return;}
      let h=lesson.querySelector(":scope > [data-ao-links]"); if(!h){h=document.createElement("div");h.dataset.aoLinks=String(id); const quellen=Array.from(lesson.querySelectorAll(":scope > .tz")).find((s)=>/Quellen/i.test(s.querySelector(".tz__no")?.textContent||"")); if(quellen)lesson.insertBefore(h,quellen);else lesson.appendChild(h);} host=h; setZiel((alt)=>alt.mount===h&&alt.id===id?alt:{mount:h,id});
    };
    const plan=()=>{if(frame===null)frame=requestAnimationFrame(scan);}; plan(); const obs=new MutationObserver(plan);obs.observe(document.body,{childList:true,subtree:true});return()=>{obs.disconnect();if(frame!==null)cancelAnimationFrame(frame);if(host?.isConnected)host.remove();};
  },[]);
  if(!ziel.mount||!ziel.id)return null; const refs=VERWEISE[ziel.id]||[];
  return createPortal(<section className="tz ao-links-tz"><div className="tz__no"><b>Üben</b>Querverweise</div><div className="tz__body"><h2 className="tz__titel">Passende Originalfälle</h2><p>Direkter Sprung zu kursinternen Fällen mit demselben oder eng überlappendem Prüfungsstoff.</p><div className="ao-linkcards">{refs.map((r)=><button key={r.id} onClick={()=>originalfallOeffnen(r.id)}><b>Originalfall {r.id}</b><span>{r.titel}</span><small>Fall öffnen ↗</small></button>)}</div></div></section>,ziel.mount);
}
