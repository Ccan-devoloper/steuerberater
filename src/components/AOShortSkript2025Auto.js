import {AO_SHORT_2025_BY_MODULE,AO_SHORT_2025_META} from "../data/ao-shortskript-2025.js";
import {AO_SHORT_2025_DETAIL_BY_MODULE} from "../data/ao-shortskript-2025-details.js";
import "./ao-shortskript-2025.css";

const SHORT_SELECTOR="[data-ao-short-2025],.ao-short-2025,#ao-short-2025-singleton";
const SHORT_SCAN_SELECTOR=".ao-campus .ao-lesson > .tz,[data-ao-short-2025],.ao-short-2025,#ao-short-2025-singleton";
const isShortSection=(node)=>{
  if(!node?.matches)return false;
  if(node.matches(SHORT_SELECTOR))return true;
  return node.matches(".tz")&&/Short-Skript/i.test(node.querySelector(".tz__no")?.textContent||"");
};
const findShortSections=()=>[...new Set([...document.querySelectorAll(SHORT_SCAN_SELECTOR)].filter(isShortSection))];
const esc=(s)=>String(s??"").replace(/[&<>\"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'\"':"&quot;","'":"&#39;"}[c]));
const seiten=(xs)=>{const a=[...xs].sort((x,y)=>x-y),out=[];if(!a.length)return "";let s=a[0],p=a[0];for(const n of a.slice(1)){if(n===p+1){p=n;continue;}out.push(s===p?`${s}`:`${s}–${p}`);s=p=n;}out.push(s===p?`${s}`:`${s}–${p}`);return out.join(", ");};
const signature=(moduleId,blocks)=>`${moduleId}::${blocks.map(b=>`${b.title}|${(b.sourcePages||[]).join(",")}`).join("||")}`;
const moduleBlocks=(moduleId)=>[...(AO_SHORT_2025_BY_MODULE[moduleId]||[]),...(AO_SHORT_2025_DETAIL_BY_MODULE[moduleId]||[])];

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

function tableHtml(table){
  if(!table?.headers?.length||!table?.rows?.length)return "";
  const head=table.headers.map(h=>`<th>${esc(h)}</th>`).join("");
  const rows=table.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join("")}</tr>`).join("");
  return `<div class="ao-short-table-wrap"><table class="ao-short-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

function blockHtml(x){
  const cls=`ao-short-block ao-short-block--${esc(x.kind)}`;
  const items=(x.points||[]).map((p,i)=>`<li><span class="ao-short-num">${i+1}</span><div>${esc(p)}</div></li>`).join("");
  const links=(x.links||[]).map(id=>`<button type="button" class="ao-short-link" data-ao-short-module="${id}">Modul ${id} ↗</button>`).join("");
  const body=`${items?`<ol>${items}</ol>`:""}${tableHtml(x.table)}`;
  return `<article class="${cls}"><header><div><span class="ao-short-kicker">Short-Skript 2025 · PDF-S. ${seiten(x.sourcePages)}</span><h3>${esc(x.title)}</h3></div><span class="ao-short-count">${x.sourcePages.length} S.</span></header>${body}${x.note?`<div class="ao-short-note">${esc(x.note)}</div>`:""}${links?`<div class="ao-short-links"><span>Querverweise im AO-Campus</span>${links}</div>`:""}</article>`;
}

function render(moduleId,blocks,key){
  const section=document.createElement("section");
  section.id="ao-short-2025-singleton";
  section.className="tz ao-short-2025";
  section.dataset.aoShort2025=String(moduleId);
  section.dataset.aoShortSignature=key;
  section.dataset.aoShortRuntime="5";
  section.innerHTML=`<div class="tz__no"><b>Short-Skript</b>Mai 2025</div><div class="tz__body"><div class="ao-short-head"><div><span class="kicker">Zusätzliche Quellenebene · keine neue AO-Einheit</span><h2>${esc(AO_SHORT_2025_META.title)}</h2><p>Die einschlägigen Seiten wurden diesem bereits bestehenden Lernmodul fachlich zugeordnet. Die vorhandenen Einheit-Schemata bleiben führend; das Short-Skript ergänzt Klausurtechnik, Formulierungen, Beispiele, Tabellen und Examenshistorie.</p></div><div class="ao-short-source"><b>${esc(AO_SHORT_2025_META.author)}</b><span>${esc(AO_SHORT_2025_META.stand)}</span><small>49/49 Seiten geprüft</small></div></div><div class="ao-short-stack">${blocks.map(blockHtml).join("")}</div></div>`;
  section.addEventListener("click",e=>{const btn=e.target.closest("[data-ao-short-module]");if(btn)modulOeffnen(Number(btn.dataset.aoShortModule));});
  return section;
}

function createRuntime(){
  let frame=null;
  let stopped=false;
  let scanning=false;
  const observer=new MutationObserver(()=>schedule());
  const observe=()=>{if(!stopped)observer.observe(document.body,{childList:true,subtree:true});};

  const scan=()=>{
    frame=null;
    if(stopped||scanning)return;
    scanning=true;
    observer.disconnect();
    try{
      const lesson=document.querySelector(".ao-campus main.page > .ao-lesson");
      const allExisting=findShortSections();
      if(!lesson){allExisting.forEach(n=>n.remove());return;}

      const kicker=lesson.querySelector(".lesson__kopf .kicker")?.textContent||"";
      const hit=kicker.match(/Lernmodul\s+(\d+)/i);
      const moduleId=Number(hit?.[1]||0);
      const blocks=moduleBlocks(moduleId);

      if(!moduleId||!blocks.length){allExisting.forEach(n=>n.remove());return;}

      const key=signature(moduleId,blocks);
      const correct=allExisting.filter(n=>n.parentElement===lesson&&n.dataset.aoShort2025===String(moduleId)&&n.dataset.aoShortSignature===key);
      if(correct.length===1&&allExisting.length===1)return;

      // Hartes Singleton: neue und alte Short-Skript-Varianten vor jedem Render vollständig entfernen.
      allExisting.forEach(n=>n.remove());

      const section=render(moduleId,blocks,key);
      const sichern=[...lesson.querySelectorAll(":scope > .tz")].find(s=>/Sichern/i.test(s.querySelector(".tz__no")?.textContent||""));
      const quellen=[...lesson.querySelectorAll(":scope > .tz")].find(s=>/Quellen/i.test(s.querySelector(".tz__no")?.textContent||""));
      lesson.insertBefore(section,sichern||quellen||lesson.querySelector(":scope > .blaettern")||null);
    }finally{
      scanning=false;
      observe();
    }
  };

  const schedule=()=>{if(stopped||frame!==null)return;frame=requestAnimationFrame(scan);};
  observe();
  schedule();
  return {
    schedule,
    disconnect:()=>{stopped=true;observer.disconnect();if(frame!==null)cancelAnimationFrame(frame);frame=null;},
    cleanup:()=>findShortSections().forEach(n=>n.remove()),
    version:5
  };
}

if(typeof window!=="undefined"&&typeof document!=="undefined"){
  window.__aoShort2025Runtime?.disconnect?.();
  // Auch Legacy-Instanzen ohne data-Attribut oder Singleton-ID sofort bereinigen.
  findShortSections().forEach(n=>n.remove());
  window.__aoShort2025Runtime=createRuntime();
}
