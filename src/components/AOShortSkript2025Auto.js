import {AO_SHORT_2025_BY_MODULE,AO_SHORT_2025_META} from "../data/ao-shortskript-2025.js";
import "./ao-shortskript-2025.css";

const esc=(s)=>String(s??"").replace(/[&<>\"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'\"':"&quot;","'":"&#39;"}[c]));
const seiten=(xs)=>{const a=[...xs].sort((x,y)=>x-y),out=[];let s=a[0],p=a[0];for(const n of a.slice(1)){if(n===p+1){p=n;continue;}out.push(s===p?`${s}`:`${s}–${p}`);s=p=n;}if(s!=null)out.push(s===p?`${s}`:`${s}–${p}`);return out.join(", ");};

function modulOeffnen(id){
  const rail=[...document.querySelectorAll(".ao-campus .rail__link")].find(b=>b.textContent?.trim()==="Abgabenordnung");
  rail?.click();
  const versuchen=(n=0)=>{
    const alle=[...document.querySelectorAll(".ao-campus .ao-topic-filter button")].find(b=>b.textContent?.trim()==="Alle Oberthemen");
    if(alle&&alle.getAttribute("aria-pressed")!=="true"){alle.click();if(n<35)return setTimeout(()=>versuchen(n+1),45);}
    const karte=[...document.querySelectorAll(".ao-campus .modules .modul")].find(x=>x.textContent?.includes(`Modul ${id}`));
    if(karte){karte.click();return;}
    if(n<35)setTimeout(()=>versuchen(n+1),45);
  };
  setTimeout(()=>versuchen(),35);
}

function blockHtml(x){
  const cls=`ao-short-block ao-short-block--${esc(x.kind)}`;
  const items=x.points.map((p,i)=>`<li><span class="ao-short-num">${i+1}</span><div>${esc(p)}</div></li>`).join("");
  const links=(x.links||[]).map(id=>`<button type="button" class="ao-short-link" data-ao-short-module="${id}">Modul ${id} ↗</button>`).join("");
  return `<article class="${cls}"><header><div><span class="ao-short-kicker">Short-Skript 2025 · PDF-S. ${seiten(x.sourcePages)}</span><h3>${esc(x.title)}</h3></div><span class="ao-short-count">${x.sourcePages.length} S.</span></header><ol>${items}</ol>${x.note?`<div class="ao-short-note">${esc(x.note)}</div>`:""}${links?`<div class="ao-short-links"><span>Querverweise im AO-Campus</span>${links}</div>`:""}</article>`;
}

function render(moduleId,blocks){
  const section=document.createElement("section");
  section.className="tz ao-short-2025";
  section.dataset.aoShort2025=String(moduleId);
  section.innerHTML=`<div class="tz__no"><b>Short-Skript</b>Mai 2025</div><div class="tz__body"><div class="ao-short-head"><div><span class="kicker">Zusätzliche Quellenebene · keine neue AO-Einheit</span><h2>${esc(AO_SHORT_2025_META.title)}</h2><p>Die einschlägigen Seiten wurden diesem bereits bestehenden Lernmodul fachlich zugeordnet. Die vorhandenen Einheit-Schemata bleiben führend; das Short-Skript ergänzt Klausurtechnik, Formulierungen, Beispiele und Examenshistorie.</p></div><div class="ao-short-source"><b>${esc(AO_SHORT_2025_META.author)}</b><span>${esc(AO_SHORT_2025_META.stand)}</span><small>49/49 Seiten geprüft</small></div></div><div class="ao-short-stack">${blocks.map(blockHtml).join("")}</div></div>`;
  section.addEventListener("click",e=>{const btn=e.target.closest("[data-ao-short-module]");if(btn)modulOeffnen(Number(btn.dataset.aoShortModule));});
  return section;
}

if(typeof window!=="undefined"&&typeof document!=="undefined"){
  let frame=null,current=null;
  const scan=()=>{
    frame=null;
    const lesson=document.querySelector(".ao-campus main.page > .ao-lesson");
    const kicker=lesson?.querySelector(".lesson__kopf .kicker")?.textContent||"";
    const hit=kicker.match(/Lernmodul\s+(\d+)/i);
    const moduleId=Number(hit?.[1]||0),blocks=AO_SHORT_2025_BY_MODULE[moduleId]||[];
    if(!lesson||!moduleId||!blocks.length){document.querySelectorAll("[data-ao-short-2025]").forEach(n=>n.remove());current=null;return;}
    if(current===moduleId&&lesson.querySelector(`[data-ao-short-2025=\"${moduleId}\"]`))return;
    document.querySelectorAll("[data-ao-short-2025]").forEach(n=>n.remove());
    const section=render(moduleId,blocks);
    const sichern=[...lesson.querySelectorAll(":scope > .tz")].find(s=>/Sichern/i.test(s.querySelector(".tz__no")?.textContent||""));
    const quellen=[...lesson.querySelectorAll(":scope > .tz")].find(s=>/Quellen/i.test(s.querySelector(".tz__no")?.textContent||""));
    lesson.insertBefore(section,sichern||quellen||lesson.querySelector(":scope > .blaettern")||null);
    current=moduleId;
  };
  const plan=()=>{if(frame===null)frame=requestAnimationFrame(scan);};
  plan();
  new MutationObserver(plan).observe(document.body,{childList:true,subtree:true});
}
