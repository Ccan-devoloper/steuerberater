import React from "react";
import {k1AoHausaufgaben,AO_HAUSAUFGABEN_BY_MODULE} from "../data/k1-ao-hausaufgaben-alle.js";
import {AO_HAUSAUFGABEN_ORIGINALSEITEN} from "../data/k1-ao-hausaufgaben-originaltexte.js";
import {AONormkette,AOSchemaVerweise} from "./AOSchemaLinks";
import "./k1-hausaufgaben.css";
import "./ao-hausaufgaben.css";

const Art=inhalt=>inhalt?.area==="Fall"?"Originalfall":"Lernmodul";

const expandPages=text=>{
  const out=[];
  for(const token of String(text||"").match(/\d+(?:\s*[–-]\s*\d+)?/g)||[]){
    const nums=token.split(/[–-]/).map(x=>Number(x.trim()));
    if(nums.length===2&&Number.isFinite(nums[0])&&Number.isFinite(nums[1]))for(let p=nums[0];p<=nums[1];p++)out.push(p);
    else if(Number.isFinite(nums[0]))out.push(nums[0]);
  }
  return [...new Set(out)];
};

const fallQuellseiten=seiten=>{
  const parts=String(seiten||"").split("·");
  const aufgabe=parts.find(x=>/Aufgabe/i.test(x))||"";
  const loesung=parts.find(x=>/Lösung/i.test(x))||"";
  return {aufgabe:expandPages(aufgabe),loesung:expandPages(loesung)};
};

function OriginalSeiten({terminId,pages,typ}){
  const original=AO_HAUSAUFGABEN_ORIGINALSEITEN.get(terminId)||[];
  return <div className={`ao-ha-originalseiten ao-ha-originalseiten--${typ}`}>{pages.map(seite=>{
    const text=original[seite-1]||"";
    return <section className="ao-ha-originalseite" key={`${terminId}-${typ}-${seite}`}>
      <div className="ao-ha-originalseite__kopf"><b>Originalquelle · PDF-S. {seite}</b><span>wortgetreu 1:1</span></div>
      <pre>{text}</pre>
    </section>;
  })}</div>;
}

export function AOHausaufgabenHinweise({moduleId,onOpenHausaufgabe}){
  const treffer=AO_HAUSAUFGABEN_BY_MODULE.get(Number(moduleId))||[];
  if(!treffer.length)return null;
  return <aside className="ao-ha-modulhinweis"><b>Passende AO-Hausaufgaben</b><p>Zum selben Prüfungsstoff gibt es passende Hausaufgabenfälle:</p><div>{treffer.map(x=><button key={x.fallId} type="button" onClick={()=>onOpenHausaufgabe?.(x.fallId)}>{x.fachtermin} Fachtermin · Fall {x.nummer}: {x.titel} ↗</button>)}</div></aside>;
}

export default function AOHausaufgaben({onOpenInhalt,onOpenSchema,inhaltById,ziel}){
  const[terminId,setTerminId]=React.useState("alle");
  const termine=terminId==="alle"?k1AoHausaufgaben:k1AoHausaufgaben.filter(t=>t.id===terminId);
  const fallzahl=termine.reduce((sum,t)=>sum+t.faelle.length,0);
  const gesamtSeiten=k1AoHausaufgaben.reduce((sum,t)=>sum+t.seiten,0);
  const gesamtFaelle=k1AoHausaufgaben.reduce((sum,t)=>sum+t.faelle.length,0);

  React.useEffect(()=>{
    if(!ziel?.id)return undefined;
    const termin=k1AoHausaufgaben.find(t=>t.faelle.some(f=>f.id===ziel.id));
    if(!termin)return undefined;
    setTerminId(termin.id);
    const timer=window.setTimeout(()=>{
      const el=document.querySelector(`[data-ao-ha-id='${ziel.id}']`);
      el?.scrollIntoView({behavior:"smooth",block:"start"});
      el?.classList.add("k1-ha-karte--ziel");
      window.setTimeout(()=>el?.classList.remove("k1-ha-karte--ziel"),1800);
    },100);
    return()=>window.clearTimeout(timer);
  },[ziel]);

  return <div className="k1-ha-page ao-ha-page">
    <div className="pagehead"><div><span className="kicker">Klausur 1 · Abgabenordnung · Nacharbeit</span><h1>Hausaufgaben AO</h1><p className="lead">Alle {gesamtSeiten} PDF-Seiten werden wortgetreu angezeigt. Aufgaben-/Sachverhaltstext und Lösungshinweise stammen 1:1 aus den Quellen; die Lösung bleibt bis zum bewussten Aufklappen verborgen. Tags, Normsprünge und Querverweise sind ausschließlich zusätzliche digitale Navigation.</p></div><span className="zaehler">{fallzahl} von {gesamtFaelle} Hausaufgabenfällen</span></div>

    <div className="filter" aria-label="AO-Hausaufgaben nach Fachtermin filtern">
      <button aria-pressed={terminId==="alle"} onClick={()=>setTerminId("alle")}>Alle Fachtermine</button>
      {k1AoHausaufgaben.map(t=><button key={t.id} aria-pressed={terminId===t.id} onClick={()=>setTerminId(t.id)}>{t.fachtermin} Fachtermin</button>)}
    </div>

    {termine.map(termin=>{
      const original=AO_HAUSAUFGABEN_ORIGINALSEITEN.get(termin.id)||[];
      return <section className="k1-ha-termin" key={termin.id}>
        <div className="k1-ha-termin__kopf"><div><span className="kicker">Abgabenordnung · {termin.fachtermin} Fachtermin</span><h2>Hausaufgabe {termin.fachtermin.replace(".","")}</h2></div><span>{termin.seiten} PDF-Seiten · Rechtsstand {termin.rechtsstand}</span></div>
        <aside className="panel k1-ha-quelle ao-ha-original-didaktik"><div className="ao-ha-originalseite__kopf"><b>Originalquelle · PDF-S. 1 · Didaktischer Hinweis</b><span>wortgetreu 1:1</span></div><pre>{original[0]||""}</pre><small>Quelle: {termin.quellentitel} · {termin.quelle} · PDF-S. 1–{termin.seiten}</small></aside>
        <div className="k1-ha-liste">{termin.faelle.map(fall=>{
          const refs=(fall.querverweise||[]).map(id=>inhaltById?.get?.(id)).filter(Boolean);
          const schemaText=[...(fall.themen||[]),...(fall.normen||[])].join(" · ");
          const quellseiten=fallQuellseiten(fall.seiten);
          return <article className="panel k1-ha-karte ao-ha-karte" key={fall.id} data-ao-ha-id={fall.id}>
            <div className="panel__head"><div><span className="kicker">{termin.fachtermin} Fachtermin · Fall {fall.nummer} · {fall.seiten}</span><h3>{fall.titel}</h3></div></div>
            <div className="tags k1-ha-themen">{(fall.themen||[]).map(t=><span className="tag" key={t}>{t}</span>)}</div>
            <AOSchemaVerweise text={schemaText} onOpen={onOpenSchema} compact/>
            <div className="kst-sachverhalt k1-ha-aufgabe"><b>Aufgabenstellung / Sachverhalt · Originaltext</b><OriginalSeiten terminId={termin.id} pages={quellseiten.aufgabe} typ="aufgabe"/></div>
            <details className="ao-ha-details"><summary>Lösung &amp; Ergebnis anzeigen</summary><div className="fall k1-ha-loesung"><OriginalSeiten terminId={termin.id} pages={quellseiten.loesung} typ="loesung"/><div className="fall__block ao-ha-digitale-links"><b>Zusätzliche digitale Normsprünge</b><AONormkette normen={fall.normen||[]} onOpen={onOpenSchema}/></div></div></details>
            {refs.length>0&&<aside className="k1-ha-querverweise"><b>Querverweise in den AO-Lernmodulen</b><p>Zusätzliche Navigation – nicht Bestandteil des Originaltexts:</p><div className="k1-ha-querverweise__links">{refs.map(m=><button type="button" key={m.id} onClick={()=>onOpenInhalt?.(m.id)}>{Art(m)} {m.id}: {m.title} ↗</button>)}</div></aside>}
            <div className="k1-ha-fundstelle">Quelle: {termin.fachtermin} Fachtermin · {fall.seiten} · Rechtsstand {termin.rechtsstand} · Aufgaben- und Lösungstext wortgetreu 1:1</div>
          </article>;
        })}</div>
      </section>;
    })}
  </div>;
}
