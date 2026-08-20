import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./ao-einheit2-randseiten.css";

function Handbuch(){
  return <div className="ao2-rand ao2-rand--book"><div className="ao2-rand-book"><b>BMF</b><strong>Amtliches<br/>AO-Handbuch</strong><div className="ao2-rand-tabs"><span>§ 125<br/>§ 124 (3)</span><span>§ 124 (1)</span><span>§ 122 (1)</span><span>AEAO<br/>§ 124</span><span>§ 79 (1)</span><span>§ 122a</span></div><div className="ao2-rand-mnemo">N · O · M · B · H</div></div><div><span className="kicker">Quellenbild · Einheit 2 · PDF-S. 4</span><h3>Handbuch-Reiter für die Wirksamkeitsprüfung</h3><p>Die Quelle ordnet die für Bekanntgabe und Wirksamkeit benötigten Normen unmittelbar als Reiter am AO-Handbuch. § 122a ist zusätzlich handschriftlich hervorgehoben.</p><p className="ao2-rand-note">PDF-S. 6 wird als bildliche Merkhilfe zum Nachweis eines behaupteten Nichtzugangs mitgeführt; sie enthält keinen zusätzlichen Prüfungsschritt.</p></div></div>;
}
function FristMerker(){
  return <div className="ao2-rand ao2-rand--frist"><div><span className="kicker">Quellenbild · Einheit 2 · PDF-S. 33</span><h3>Übergang zur Einspruchsfrist</h3><div className="ao2-rand-formel">Frist · § 355 / § 356 / § 357 Abs. 2 AO · ggf. § 110 AO</div><p>Die Seite ist die visuelle Überleitung zum anschließenden Fristschema der Seiten 34–38.</p></div><div className="ao2-rand-people"><span>☺</span><span>♥</span><b>„Du bist einfach wieder wundervoll!“</b></div></div>;
}

export default function AOEinheit2RandseitenEnhancer(){
  const [ziel,setZiel]=useState({mount:null,id:null});
  useEffect(()=>{
    let frame=null;let host=null;
    const scan=()=>{frame=null;const lesson=document.querySelector(".ao-campus main.page > .ao-lesson");const text=lesson?.querySelector(".lesson__kopf .kicker")?.textContent||"";const m=text.match(/Lernmodul\s+(313|319)\b/i);const id=m?Number(m[1]):null;if(!lesson||!id){if(host?.isConnected)host.remove();host=null;setZiel({mount:null,id:null});return;}let h=lesson.querySelector(":scope > [data-ao2-rand]");if(!h){h=document.createElement("div");h.dataset.ao2Rand=String(id);const schema=Array.from(lesson.querySelectorAll(":scope > .tz")).find((s)=>/Schema/i.test(s.querySelector(".tz__no")?.textContent||""));if(schema?.nextSibling)lesson.insertBefore(h,schema.nextSibling);else lesson.appendChild(h);}host=h;setZiel((alt)=>alt.mount===h&&alt.id===id?alt:{mount:h,id});};
    const plan=()=>{if(frame===null)frame=requestAnimationFrame(scan);};plan();const obs=new MutationObserver(plan);obs.observe(document.body,{childList:true,subtree:true});return()=>{obs.disconnect();if(frame!==null)cancelAnimationFrame(frame);if(host?.isConnected)host.remove();};
  },[]);
  if(!ziel.mount)return null;
  return createPortal(ziel.id===313?<Handbuch/>:<FristMerker/>,ziel.mount);
}
