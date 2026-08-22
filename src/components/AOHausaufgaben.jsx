import React from "react";
import {k1AoHausaufgaben,k1AoHausaufgabenDidaktik,AO_HAUSAUFGABEN_BY_MODULE} from "../data/k1-ao-hausaufgaben-alle.js";
import {AONormkette,AOSchemaVerweise,AOVerlinkterText} from "./AOSchemaLinks";
import "./k1-hausaufgaben.css";
import "./ao-hausaufgaben.css";

const Art=inhalt=>inhalt?.area==="Fall"?"Originalfall":"Lernmodul";

function AOHausaufgabenTabelle({tabelle}){
  if(!tabelle?.spalten?.length||!tabelle?.zeilen?.length)return null;
  return <div className="ao-ha-table-wrap"><b>{tabelle.titel}</b><div className="ao-ha-table-scroll"><table className="ao-ha-table"><thead><tr>{tabelle.spalten.map((s,i)=><th key={i}>{s}</th>)}</tr></thead><tbody>{tabelle.zeilen.map((zeile,ri)=><tr key={ri}>{zeile.map((z,ci)=><td key={ci}>{z}</td>)}</tr>)}</tbody></table></div></div>;
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
    <div className="pagehead"><div><span className="kicker">Klausur 1 · Abgabenordnung · Nacharbeit</span><h1>Hausaufgaben AO</h1><p className="lead">Die AO-Hausaufgaben der bisher vorliegenden Fachtermine sind vollständig aus {gesamtSeiten} PDF-Seiten erfasst. Sachverhalt, Aufgaben und quellenrelevante Tabellen bleiben sichtbar; Quellenlösung und Ergebnis werden erst beim bewussten Aufklappen angezeigt.</p></div><span className="zaehler">{fallzahl} von {gesamtFaelle} Hausaufgabenfällen</span></div>

    <div className="filter" aria-label="AO-Hausaufgaben nach Fachtermin filtern">
      <button aria-pressed={terminId==="alle"} onClick={()=>setTerminId("alle")}>Alle Fachtermine</button>
      {k1AoHausaufgaben.map(t=><button key={t.id} aria-pressed={terminId===t.id} onClick={()=>setTerminId(t.id)}>{t.fachtermin} Fachtermin</button>)}
    </div>

    {termine.map(termin=><section className="k1-ha-termin" key={termin.id}>
      <div className="k1-ha-termin__kopf"><div><span className="kicker">Abgabenordnung · {termin.fachtermin} Fachtermin</span><h2>Hausaufgabe {termin.fachtermin.replace(".","")}</h2></div><span>{termin.seiten} PDF-Seiten · Rechtsstand {termin.rechtsstand}</span></div>
      <aside className="panel k1-ha-quelle"><b>Didaktischer Hinweis der Unterlage · PDF-S. 1</b>{k1AoHausaufgabenDidaktik.map((t,i)=><p key={i}>{t}</p>)}<small>Quelle vollständig berücksichtigt: {termin.quellentitel} · {termin.quelle} · PDF-S. 1–{termin.seiten}</small></aside>
      <div className="k1-ha-liste">{termin.faelle.map(fall=>{
        const refs=(fall.querverweise||[]).map(id=>inhaltById?.get?.(id)).filter(Boolean);
        const schemaText=[...(fall.themen||[]),...(fall.normen||[])].join(" · ");
        return <article className="panel k1-ha-karte ao-ha-karte" key={fall.id} data-ao-ha-id={fall.id}>
          <div className="panel__head"><div><span className="kicker">{termin.fachtermin} Fachtermin · Fall {fall.nummer} · {fall.seiten}</span><h3>{fall.titel}</h3></div></div>
          <div className="tags k1-ha-themen">{(fall.themen||[]).map(t=><span className="tag" key={t}>{t}</span>)}</div>
          <AOSchemaVerweise text={schemaText} onOpen={onOpenSchema} compact/>
          <div className="kst-sachverhalt k1-ha-aufgabe"><b>Aufgabenstellung / Sachverhalt</b>{(fall.aufgabe||[]).map((t,i)=><AOVerlinkterText key={i} as="p" text={t} onOpen={onOpenSchema} compact/>)}{(fall.tabellen||[]).map((t,i)=><AOHausaufgabenTabelle key={i} tabelle={t}/>)}</div>
          <details className="ao-ha-details"><summary>Lösung &amp; Ergebnis anzeigen</summary><div className="fall k1-ha-loesung">{(fall.loesung||[]).map((b,bi)=><div className="fall__block" key={bi}><b>{b.titel}</b>{(b.texte||[]).map((t,i)=><AOVerlinkterText key={i} as="p" text={t} onOpen={onOpenSchema} compact/>)}</div>)}<div className="fall__block fall__ergebnis"><b>Ergebnis</b><AOVerlinkterText as="p" text={fall.ergebnis} onOpen={onOpenSchema} compact/></div><div className="fall__block"><b>Normen der Quellenlösung</b><AONormkette normen={fall.normen||[]} onOpen={onOpenSchema}/></div></div></details>
          {refs.length>0&&<aside className="k1-ha-querverweise"><b>Querverweise in den AO-Lernmodulen</b><p>Direkt zu den fachlich passenden Lernmodulen wechseln:</p><div className="k1-ha-querverweise__links">{refs.map(m=><button type="button" key={m.id} onClick={()=>onOpenInhalt?.(m.id)}>{Art(m)} {m.id}: {m.title} ↗</button>)}</div></aside>}
          <div className="k1-ha-fundstelle">Quelle: {termin.fachtermin} Fachtermin · {fall.seiten} · Rechtsstand {termin.rechtsstand}</div>
        </article>})}</div>
    </section>)}
  </div>;
}
