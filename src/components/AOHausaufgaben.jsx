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
  return {
    aufgabe:expandPages(parts.find(x=>/Aufgabe/i.test(x))||""),
    loesung:expandPages(parts.find(x=>/Lösung/i.test(x))||""),
  };
};

const quellzeilen=text=>String(text||"")
  .replace(/\r/g,"")
  .split("\n")
  .filter(line=>!/^\s*Abgabenordnung\/FGO\s+Übungsfälle\s+Teil\s+\d+\s*$/.test(line))
  .filter(line=>!/^\s*StB-Lehrgang\s+Seite\s+\d+\s+Hans-Jürgen Jacobs\s*$/.test(line));

const blockText=lines=>lines.reduce((out,line)=>{
  const s=line.trim().replace(/\s{2,}/g," ");
  if(!s)return out;
  if(!out)return s;
  return out.endsWith("-")?`${out}${s}`:`${out} ${s}`;
},"");

const quellbloecke=text=>{
  const blocks=[];
  let current=[];
  for(const line of quellzeilen(text)){
    if(!line.trim()){
      if(current.length){blocks.push(blockText(current));current=[];}
    }else current.push(line);
  }
  if(current.length)blocks.push(blockText(current));
  return blocks.filter(Boolean);
};

const istUeberschrift=text=>/^(Fall\s+\d+|Aufgabe(?:nstellung)?\b|Lösungshinweise\b|Bearbeitungshinweise\b|Chronologische Darstellung\b|Sachverhalt\b|Auszug aus dem internen Protokoll\b|Übersicht über\b)/i.test(text)||(/^[^.!?]{1,95}$/.test(text)&&/:$/.test(text));
const istDatum=text=>/^\d{2}\.\d{2}\.\d{2,4}$/.test(text.trim());

function OriginalFliesstext({text}){
  return <div className="ao-ha-source-body">{quellbloecke(text).map((block,i)=>{
    if(istDatum(block))return <div className="ao-ha-source-date" key={i}>{block}</div>;
    if(istUeberschrift(block))return <h4 className="ao-ha-source-heading" key={i}>{block}</h4>;
    return <p key={i}>{block}</p>;
  })}</div>;
}

function SourceTable({title,columns,rows,compact=false}){
  return <div className={`ao-ha-source-table-wrap${compact?" ao-ha-source-table-wrap--compact":""}`}>
    {title&&<div className="ao-ha-source-table-title">{title}</div>}
    <div className="ao-ha-table-scroll"><table className="ao-ha-table ao-ha-source-table"><thead><tr>{columns.map((x,i)=><th key={i}>{x}</th>)}</tr></thead><tbody>{rows.map((r,ri)=><tr key={ri}>{r.map((x,ci)=><td key={ci}>{x}</td>)}</tr>)}</tbody></table></div>
  </div>;
}

function AO8Seite7({text}){
  const marker="Die Vorauszahlungen für August, Oktober und November 06";
  const tail=text.includes(marker)?text.slice(text.indexOf(marker)):"";
  const introEnd="berechnet:";
  const intro=tail.includes(introEnd)?tail.slice(0,tail.indexOf(introEnd)+introEnd.length):tail;
  return <div className="ao-ha-source-body">
    <h4 className="ao-ha-source-heading">Übersicht über die Daten der jeweils zum 10. des Folgemonats eingereichten USt-Voranmeldungen für die VA-Zeiträume August bis November 06</h4>
    <SourceTable
      columns={["Erläuterungen","August 06 -€-","September 06 -€-","Oktober 06 -€-","November 06 -€-"]}
      rows={[
        ["Stpfl. Umsätze lt. Voranmeldung nach Abstimmung von BS und LP","100.000","250.000","80.000","60.000"],
        ["USt lt. VA","19.000","47.500","15.200","11.400"],
        ["Vorsteuer lt. Buchführung und Voranmeldung","13.000","51.500","7.200","7.000"],
        ["Verbleibende USt lt. Voranmeldung","6.000","./. 4.000","8.000","4.400"],
        ["Nicht erklärte USt aus den in den VAen wissentlich nicht erfassten stpfl. Umsätzen","56.000","./.","19.200","6.400"],
      ]}
    />
    <OriginalFliesstext text={intro}/>
    <SourceTable
      compact
      columns={["USt laut Voranmeldungen / Berechnung","Betrag"]}
      rows={[
        ["08/06","6.000 €"],
        ["10/06","8.000 €"],
        ["11/06","4.400 €"],
        ["Zwischensumme","18.400 €"],
        ["+ in den Voranmeldungen nicht erfasste Umsätze: 08/06","56.000 €"],
        ["10/06","19.200 €"],
        ["11/06","6.400 €"],
        ["Summe","100.000 €"],
        ["./. Verrechnung des Guthabens 09/06 mit der Zahllast laut Voranmeldung 08/06","4.000 €"],
        ["Summe der Steuerrückstände","96.000 €"],
      ]}
    />
  </div>;
}

function OriginalSeiten({terminId,pages,typ,fall}){
  const original=AO_HAUSAUFGABEN_ORIGINALSEITEN.get(terminId)||[];
  return <div className={`ao-ha-originalseiten ao-ha-originalseiten--${typ}`}>{pages.map(seite=>{
    const text=original[seite-1]||"";
    const spezial=terminId==="AO-HA-8"&&fall?.id==="AO-HA8-2"&&seite===7;
    return <section className="ao-ha-originalseite" key={`${terminId}-${typ}-${seite}`}>
      <div className="ao-ha-originalseite__kopf"><b>Originalquelle · PDF-S. {seite}</b><span>Wortlaut 1:1 · digital formatiert</span></div>
      {spezial?<AO8Seite7 text={text}/>:<OriginalFliesstext text={text}/>} 
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
    <div className="pagehead"><div><span className="kicker">Klausur 1 · Abgabenordnung · Nacharbeit</span><h1>Hausaufgaben AO</h1><p className="lead">Der Wortlaut der Aufgaben und Lösungen bleibt 1:1 erhalten. Die Darstellung ist dagegen bewusst digital: normale Website-Typografie, saubere Absätze und echte Tabellen. Lösungen bleiben bis zum bewussten Aufklappen verborgen; Tags, Normsprünge und Querverweise sind zusätzliche Navigation.</p></div><span className="zaehler">{fallzahl} von {gesamtFaelle} Hausaufgabenfällen</span></div>

    <div className="filter" aria-label="AO-Hausaufgaben nach Fachtermin filtern">
      <button aria-pressed={terminId==="alle"} onClick={()=>setTerminId("alle")}>Alle Fachtermine</button>
      {k1AoHausaufgaben.map(t=><button key={t.id} aria-pressed={terminId===t.id} onClick={()=>setTerminId(t.id)}>{t.fachtermin} Fachtermin</button>)}
    </div>

    {termine.map(termin=>{
      const original=AO_HAUSAUFGABEN_ORIGINALSEITEN.get(termin.id)||[];
      return <section className="k1-ha-termin" key={termin.id}>
        <div className="k1-ha-termin__kopf"><div><span className="kicker">Abgabenordnung · {termin.fachtermin} Fachtermin</span><h2>Hausaufgabe {termin.fachtermin.replace(".","")}</h2></div><span>{termin.seiten} PDF-Seiten · Rechtsstand {termin.rechtsstand}</span></div>
        <aside className="panel k1-ha-quelle ao-ha-original-didaktik"><div className="ao-ha-originalseite__kopf"><b>Originalquelle · PDF-S. 1 · Didaktischer Hinweis</b><span>Wortlaut 1:1 · digital formatiert</span></div><OriginalFliesstext text={original[0]||""}/><small>Quelle: {termin.quellentitel} · {termin.quelle} · PDF-S. 1–{termin.seiten}</small></aside>
        <div className="k1-ha-liste">{termin.faelle.map(fall=>{
          const refs=(fall.querverweise||[]).map(id=>inhaltById?.get?.(id)).filter(Boolean);
          const schemaText=[...(fall.themen||[]),...(fall.normen||[])].join(" · ");
          const quellseiten=fallQuellseiten(fall.seiten);
          return <article className="panel k1-ha-karte ao-ha-karte" key={fall.id} data-ao-ha-id={fall.id}>
            <div className="panel__head"><div><span className="kicker">{termin.fachtermin} Fachtermin · Fall {fall.nummer} · {fall.seiten}</span><h3>{fall.titel}</h3></div></div>
            <div className="tags k1-ha-themen">{(fall.themen||[]).map(t=><span className="tag" key={t}>{t}</span>)}</div>
            <AOSchemaVerweise text={schemaText} onOpen={onOpenSchema} compact/>
            <div className="kst-sachverhalt k1-ha-aufgabe"><b>Aufgabenstellung / Sachverhalt · Originaltext</b><OriginalSeiten terminId={termin.id} pages={quellseiten.aufgabe} typ="aufgabe" fall={fall}/></div>
            <details className="ao-ha-details"><summary>Lösung &amp; Ergebnis anzeigen</summary><div className="fall k1-ha-loesung"><OriginalSeiten terminId={termin.id} pages={quellseiten.loesung} typ="loesung" fall={fall}/><div className="fall__block ao-ha-digitale-links"><b>Zusätzliche digitale Normsprünge</b><AONormkette normen={fall.normen||[]} onOpen={onOpenSchema}/></div></div></details>
            {refs.length>0&&<aside className="k1-ha-querverweise"><b>Querverweise in den AO-Lernmodulen</b><p>Zusätzliche Navigation – nicht Bestandteil des Originaltexts:</p><div className="k1-ha-querverweise__links">{refs.map(m=><button type="button" key={m.id} onClick={()=>onOpenInhalt?.(m.id)}>{Art(m)} {m.id}: {m.title} ↗</button>)}</div></aside>}
            <div className="k1-ha-fundstelle">Quelle: {termin.fachtermin} Fachtermin · {fall.seiten} · Rechtsstand {termin.rechtsstand} · Wortlaut 1:1, digital formatiert</div>
          </article>;
        })}</div>
      </section>;
    })}
  </div>;
}
