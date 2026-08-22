import React from "react";
import {k1AoHausaufgaben,k1AoHausaufgabenDidaktik,AO_HAUSAUFGABEN_BY_MODULE} from "../data/k1-ao-hausaufgaben.js";
import {AONormkette,AOSchemaVerweise,AOVerlinkterText} from "./AOSchemaLinks";
import "./k1-hausaufgaben.css";
import "./ao-hausaufgaben.css";

const Art=inhalt=>inhalt?.area==="Fall"?"Originalfall":"Lernmodul";

export function AOHausaufgabenHinweise({moduleId,onOpenHausaufgabe}){
  const treffer=AO_HAUSAUFGABEN_BY_MODULE.get(Number(moduleId))||[];
  if(!treffer.length)return null;
  return <aside className="ao-ha-modulhinweis"><b>Passende AO-Hausaufgaben</b><p>Zum selben Prüfungsstoff gibt es Aufgaben aus dem 1. + 2. Fachtermin:</p><div>{treffer.map(x=><button key={x.fallId} type="button" onClick={()=>onOpenHausaufgabe?.(x.fallId)}>Hausaufgabe Fall {x.nummer}: {x.titel} ↗</button>)}</div></aside>;
}

export default function AOHausaufgaben({onOpenInhalt,onOpenSchema,inhaltById,ziel}){
  const termin=k1AoHausaufgaben[0];
  React.useEffect(()=>{
    if(!ziel?.id)return;
    const t=window.setTimeout(()=>document.querySelector(`[data-ao-ha-id='${ziel.id}']`)?.scrollIntoView({behavior:"smooth",block:"start"}),80);
    return()=>window.clearTimeout(t);
  },[ziel]);
  return <div className="k1-ha-page ao-ha-page">
    <div className="pagehead"><div><span className="kicker">Klausur 1 · Abgabenordnung · Nacharbeit</span><h1>Hausaufgaben AO</h1><p className="lead">Hausaufgabe zum 1. + 2. Fachtermin vollständig aus allen 9 PDF-Seiten erfasst. Die Aufgaben bleiben zunächst sichtbar; die Quellenlösung wird erst beim bewussten Aufklappen angezeigt.</p></div><span className="zaehler">4 Hausaufgabenfälle</span></div>
    <section className="k1-ha-termin">
      <div className="k1-ha-termin__kopf"><div><span className="kicker">Abgabenordnung · 1. + 2. Fachtermin</span><h2>Hausaufgabe 1 + 2</h2></div><span>9 PDF-Seiten · Rechtsstand {termin.rechtsstand}</span></div>
      <aside className="panel k1-ha-quelle"><b>Didaktischer Hinweis der Unterlage · PDF-S. 1</b>{k1AoHausaufgabenDidaktik.map((t,i)=><p key={i}>{t}</p>)}<small>Quelle vollständig berücksichtigt: {termin.quellentitel} · {termin.quelle} · PDF-S. 1–9</small></aside>
      <div className="k1-ha-liste">{termin.faelle.map(fall=>{
        const refs=(fall.querverweise||[]).map(id=>inhaltById?.get?.(id)).filter(Boolean);
        const schemaText=[...(fall.themen||[]),...(fall.normen||[])].join(" · ");
        return <article className="panel k1-ha-karte ao-ha-karte" key={fall.id} data-ao-ha-id={fall.id}>
          <div className="panel__head"><div><span className="kicker">1. + 2. Fachtermin · Fall {fall.nummer} · {fall.seiten}</span><h3>{fall.titel}</h3></div></div>
          <div className="tags k1-ha-themen">{fall.themen.map(t=><span className="tag" key={t}>{t}</span>)}</div>
          <AOSchemaVerweise text={schemaText} onOpen={onOpenSchema} compact/>
          <div className="kst-sachverhalt k1-ha-aufgabe"><b>Aufgabenstellung / Sachverhalt</b>{fall.aufgabe.map((t,i)=><AOVerlinkterText key={i} as="p" text={t} onOpen={onOpenSchema} compact/>)}</div>
          <details className="ao-ha-details"><summary>Lösung anzeigen</summary><div className="fall k1-ha-loesung">{fall.loesung.map((b,bi)=><div className="fall__block" key={bi}><b>{b.titel}</b>{b.texte.map((t,i)=><AOVerlinkterText key={i} as="p" text={t} onOpen={onOpenSchema} compact/>)}</div>)}<div className="fall__block fall__ergebnis"><b>Ergebnis</b><AOVerlinkterText as="p" text={fall.ergebnis} onOpen={onOpenSchema} compact/></div><div className="fall__block"><b>Normen der Quellenlösung</b><AONormkette normen={fall.normen} onOpen={onOpenSchema}/></div></div></details>
          {refs.length>0&&<aside className="k1-ha-querverweise"><b>Querverweise in den AO-Lernmodulen</b><p>Direkt zu den fachlich passenden Lernmodulen wechseln:</p><div className="k1-ha-querverweise__links">{refs.map(m=><button type="button" key={m.id} onClick={()=>onOpenInhalt?.(m.id)}>{Art(m)} {m.id}: {m.title} ↗</button>)}</div></aside>}
          <div className="k1-ha-fundstelle">Quelle: 1. + 2. Fachtermin · {fall.seiten} · Rechtsstand {termin.rechtsstand}</div>
        </article>})}</div>
    </section>
  </div>;
}
