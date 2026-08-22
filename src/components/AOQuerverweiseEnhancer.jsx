import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {AO_FALL_BY_ID,AO_FALLID_BY_NUMMER,aoFallAnzeige,aoOriginalfallAnzeige} from "../data/ao-originalfall-nummern.js";
import "./ao-links.css";

const MODUL_ZU_FAELLEN = {
  301: [{ id:310, titel:"Pflichtverstöße im Besteuerungsverfahren" }],
  302: [{ id:310, titel:"Pflichtverstöße im Besteuerungsverfahren" }],
  303: [{ id:311, titel:"Auskunftsersuchen: zu Recht und verwertbar?" }],
  307: [{ id:320, titel:"Ordnungsgemäße Bekanntgabe in vier Varianten" }, { id:321, titel:"Ende der Einspruchsfrist" }],
  308: [{ id:320, titel:"Ordnungsgemäße Bekanntgabe in vier Varianten" }],
  312: [{ id:320, titel:"Ordnungsgemäße Bekanntgabe in vier Varianten" }],
  313: [{ id:320, titel:"Ordnungsgemäße Bekanntgabe in vier Varianten" }, { id:321, titel:"Ende der Einspruchsfrist" }, {id:374,titel:"Zwei Einsprüche in derselben Sache: Empfangsvollmacht, Heilung und Rechtsschutzbedürfnis"}],
  314: [{ id:321, titel:"Ende der Einspruchsfrist" }, {id:372,titel:"Fall 9: Verschulden bei Fristversäumnis"}],
  318: [{ id:365, titel:"Abwandlung: Einspruch gegen Änderungsbescheid – § 351 AO und Anfechtungsrahmen" }, {id:370,titel:"Änderungsbescheid 2024 im §-351-Rahmen"}],
  319: [{ id:321, titel:"Ende der Einspruchsfrist" }, { id:365, titel:"Abwandlung: Einspruch gegen Änderungsbescheid – § 351 AO und Anfechtungsrahmen" }, {id:374,titel:"Zwei Einsprüche in derselben Sache"}],
  324: [{ id:365, titel:"Abwandlung: Einspruch gegen Änderungsbescheid – § 351 AO und Anfechtungsrahmen" }, {id:370,titel:"Änderungsbescheid 2024 im §-351-Rahmen"}],
  329: [{ id:334, titel:"Festsetzungsfrist und § 129 AO" }],
  330: [{ id:334, titel:"Festsetzungsfrist und § 129 AO" }],
  331: [{ id:334, titel:"Festsetzungsfrist und § 129 AO" }],
  332: [{ id:334, titel:"Festsetzungsfrist und § 129 AO" }],
  335: [{ id:344, titel:"Außenprüfung 2015: Schlussbesprechung, Änderungsbescheide und Einspruch" }],
  343: [{ id:345, titel:"Annahme Erbschaft und Ablaufhemmung" }],
  352: [{ id:334, titel:"Festsetzungsfrist und § 129 AO" }, {id:370,titel:"Änderungsbescheid 2024 im §-351-Rahmen"}],
  354: [
    { id:355, titel:"Januar-Miete 2023 bereits am 30.12.2022 gezahlt" },
    { id:356, titel:"Zweifamilienhaus – tatsächliche Wohnflächen später bekannt" },
    { id:357, titel:"Vollständig neue vermietete Wohnung mit Verlustsaldo" },
    { id:364, titel:"Saldierungsfall 2024: Honorar, Zahlendreher, Feststellungsbescheid und VuV" },
  ],
  361: [{ id:364, titel:"Saldierungsfall 2024: Honorar, Zahlendreher, Feststellungsbescheid und VuV" }, {id:370,titel:"Änderungsbescheid 2024 im §-351-Rahmen"}],
  363: [
    { id:364, titel:"Saldierungsfall 2024: Honorar, Zahlendreher, Feststellungsbescheid und VuV" },
    { id:365, titel:"Abwandlung: Einspruch gegen Änderungsbescheid – § 351 AO und Anfechtungsrahmen" },
    { id:370, titel:"Änderungsbescheid 2024: Honorar, Zahlendreher, Feststellungsverlust und VuV im §-351-Rahmen" },
  ],
  369: [{id:370,titel:"Änderungsbescheid 2024: Honorar, Zahlendreher, Feststellungsverlust und VuV im §-351-Rahmen"}],
  371: [{id:372,titel:"Fall 9: Verschulden bei Krankheit, Urlaub, falschem Finanzamt, Vertreter und Fristirrtum"},{id:374,titel:"Zwei Einsprüche in derselben Sache: Empfangsvollmacht, Heilung und Rechtsschutzbedürfnis"}],
  373: [{id:372,titel:"Fall 9: Verschulden bei Krankheit, Urlaub, falschem Finanzamt, Vertreter und Fristirrtum"},{id:374,titel:"Zwei Einsprüche in derselben Sache: Empfangsvollmacht, Heilung und Rechtsschutzbedürfnis"}],
  375: [{id:374,titel:"Zwei Einsprüche in derselben Sache: Empfangsvollmacht, Heilung und Rechtsschutzbedürfnis"}],
  377: [{id:378,titel:"Fall 10: Stundung und bereits gewonnener Euro-Jackpot"},{id:379,titel:"Fall 11: Stundung und Jackpot erst am Folgetag"},{id:380,titel:"Fall 12: Irrtümlicher Verspätungszuschlag"},{id:381,titel:"Fall 13: Haftungsbescheid nach vollständiger Zahlung"}],
  382: [{id:378,titel:"Fall 10: Stundung und bereits gewonnener Euro-Jackpot"},{id:379,titel:"Fall 11: Stundung und Jackpot erst am Folgetag"},{id:380,titel:"Fall 12: Irrtümlicher Verspätungszuschlag"},{id:381,titel:"Fall 13: Haftungsbescheid nach vollständiger Zahlung"}],
};
const FALL_ZU_MODULEN = {
  310: [{ id:301, titel:"Ablauf des Besteuerungsverfahrens" }],
  311: [{ id:302, titel:"Ermittlungsverfahren: Untersuchungsgrundsatz und Beweismittel" }, { id:303, titel:"Auskunfts- und Vorlageersuchen: Verweigerungsrechte und Verwertbarkeit" }],
  320: [{ id:307, titel:"Bekanntgabe: Zugang, Machtbereich und richtiger Empfänger" }, { id:308, titel:"Bekanntgabe an Steuerberater und Ehegatten" }, { id:312, titel:"Bekanntgabewille und Handlungsfähigkeit" }, { id:313, titel:"Zeitpunkt der Bekanntgabe" }],
  321: [{ id:313, titel:"Zeitpunkt der Bekanntgabe" }, { id:314, titel:"Fristenberechnung nach § 108 AO und BGB" }, { id:319, titel:"Einspruchsfrist, Ende und fristwahrender Eingang" }],
  334: [{ id:329, titel:"Festsetzungsfrist: Beginn nach § 170 AO" }, { id:330, titel:"Dauer der Festsetzungsfrist" }, { id:331, titel:"Reguläres Ende der Festsetzungsfrist" }, { id:332, titel:"Korrekturpärchen nach Ablauf der regulären Festsetzungsfrist" }, { id:352, titel:"§ 129 AO: offenbare Unrichtigkeit und Übernahmefehler" }],
  344: [{ id:335, titel:"Außenprüfung: Ablaufhemmung nach § 171 Abs. 4 AO" }],
  345: [{ id:343, titel:"Masterübersicht der Ablaufhemmungs- und Korrekturpärchen" }],
  355: [{ id:354, titel:"§ 173 AO: neue Tatsachen – Nr. 1/Nr. 2" }],
  356: [{ id:354, titel:"§ 173 AO: neue Tatsachen – Nr. 1/Nr. 2" }],
  357: [{ id:354, titel:"§ 173 AO: neue Tatsachen – Nr. 1/Nr. 2" }],
  364: [{ id:354, titel:"§ 173 AO: neue Tatsachen – Nr. 1/Nr. 2" },{ id:361, titel:"§ 175 Abs. 1 Nr. 1 AO: Anpassung an Grundlagen-/Feststellungsbescheide" },{ id:363, titel:"§ 177 AO: Plan C – Saldierung, materieller Fehler und Ober-/Untergrenze" }],
  365: [{ id:318, titel:"Einspruchsverfahren: Zulässigkeit" },{ id:319, titel:"Einspruchsfrist, Ende und fristwahrender Eingang" },{ id:324, titel:"Begründetheit des Einspruchs" },{ id:363, titel:"§ 177 AO: Plan C – Saldierung, materieller Fehler und Ober-/Untergrenze" }],
  370: [{id:369,titel:"Besonderheiten im Einspruchsverfahren: Anfechtungsbeschränkung nach § 351 Abs. 1 AO"},{id:363,titel:"§ 177 AO: Plan C – Saldierung, materieller Fehler und Ober-/Untergrenze"},{id:361,titel:"§ 175 Abs. 1 Nr. 1 AO: Anpassung an Grundlagen-/Feststellungsbescheide"},{id:352,titel:"§ 129 AO: offenbare Unrichtigkeit und Übernahmefehler"}],
  372: [{id:371,titel:"Wiedereinsetzung in den vorigen Stand: Voraussetzungen, Fristarten und Verschulden"},{id:373,titel:"Wiedereinsetzung: Monatsfrist, Nachholung, Begründung und Antrag"},{id:314,titel:"Fristenberechnung nach § 108 AO und BGB"}],
  374: [{id:371,titel:"Wiedereinsetzung in den vorigen Stand: Voraussetzungen, Fristarten und Verschulden"},{id:373,titel:"Wiedereinsetzung: Monatsfrist, Nachholung, Begründung und Antrag"},{id:375,titel:"Bekanntgabe von GuE-Bescheiden: rechtsfähige und nicht rechtsfähige Personenvereinigungen"},{id:313,titel:"Zeitpunkt der Bekanntgabe"},{id:319,titel:"Einspruchsfrist, Ende und fristwahrender Eingang"}],
  378: [{id:377,titel:"Korrektur sonstiger Verwaltungsakte: § 129, Rücknahme § 130 und Widerruf § 131 AO"},{id:382,titel:"Prüfungsreihenfolge bei vermeintlich fehlerhaftem Verwaltungsakt: Plan A, B und C"}],
  379: [{id:377,titel:"Korrektur sonstiger Verwaltungsakte: § 129, Rücknahme § 130 und Widerruf § 131 AO"},{id:382,titel:"Prüfungsreihenfolge bei vermeintlich fehlerhaftem Verwaltungsakt: Plan A, B und C"}],
  380: [{id:377,titel:"Korrektur sonstiger Verwaltungsakte: § 129, Rücknahme § 130 und Widerruf § 131 AO"},{id:382,titel:"Prüfungsreihenfolge bei vermeintlich fehlerhaftem Verwaltungsakt: Plan A, B und C"}],
  381: [{id:377,titel:"Korrektur sonstiger Verwaltungsakte: § 129, Rücknahme § 130 und Widerruf § 131 AO"},{id:382,titel:"Prüfungsreihenfolge bei vermeintlich fehlerhaftem Verwaltungsakt: Plan A, B und C"}],
};

const interneIds=[...AO_FALL_BY_ID.keys()].sort((a,b)=>b-a);
const interneIdPattern=interneIds.join("|");
const reOriginalfall=new RegExp(`\\bOriginalfall\\s+(${interneIdPattern})\\b`,"g");
const reFall=new RegExp(`\\bFall\\s+(${interneIdPattern})\\b`,"g");

function rail(text) { return Array.from(document.querySelectorAll(".ao-campus .rail__link")).find((b)=>b.textContent?.trim()===text); }
function findeFallIdImText(text){for(const id of interneIds){if(new RegExp(`\\b(?:Originalfall|Fall)\\s+${id}\\b`).test(text||""))return id;}return null;}
function originalfallOeffnen(id) {
  rail("Originalfälle")?.click();
  const versuchen=(n=0)=>{
    const meta=AO_FALL_BY_ID.get(Number(id));
    const karte=Array.from(document.querySelectorAll(".ao-campus .kst-fallkarte")).find((x)=>Number(x.dataset.aoFallId)===Number(id)||(meta?.title&&x.textContent?.includes(meta.title))||x.textContent?.includes(`Fall ${id}`));
    const btn=karte?.querySelector("button");
    if(btn){btn.click();return;}
    if(n<40)setTimeout(()=>versuchen(n+1),50);
  };
  setTimeout(()=>versuchen(),30);
}
function modulOeffnen(id) { rail("Abgabenordnung")?.click(); const versuchen=(n=0)=>{const alle=Array.from(document.querySelectorAll(".ao-campus .ao-topic-filter button")).find((x)=>x.textContent?.trim()==="Alle Oberthemen");if(alle&&alle.getAttribute("aria-pressed")!=="true"){alle.click();if(n<30)return setTimeout(()=>versuchen(n+1),50);}const karte=Array.from(document.querySelectorAll(".ao-campus .modules .modul")).find((x)=>x.textContent?.includes(`Modul ${id}`));if(karte){karte.click();return;}if(n<30)setTimeout(()=>versuchen(n+1),50);};setTimeout(()=>versuchen(),30); }

function ersetzeInterneFallnummern(root){
  if(!root||typeof document==="undefined")return;
  for(const card of root.querySelectorAll?.(".kst-fallkarte")||[]){
    const id=Number(card.dataset.aoFallId)||findeFallIdImText(card.textContent);
    if(id&&AO_FALL_BY_ID.has(id))card.dataset.aoFallId=String(id);
  }
  const lesson=root.querySelector?.("main.page > .ao-lesson");
  if(lesson){
    const id=Number(lesson.dataset.aoFallId)||findeFallIdImText(lesson.querySelector(".lesson__kopf .kicker")?.textContent);
    if(id&&AO_FALL_BY_ID.has(id))lesson.dataset.aoFallId=String(id);
  }
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];let node;
  while((node=walker.nextNode()))nodes.push(node);
  for(const textNode of nodes){
    if(textNode.parentElement?.closest("script,style,[data-ao-inline-fall-link]"))continue;
    let text=textNode.nodeValue||"";
    if(!/\b(?:Originalfall|Fall)\s+\d{3}\b/.test(text))continue;
    text=text.replace(reOriginalfall,(_,id)=>aoOriginalfallAnzeige(Number(id)));
    text=text.replace(reFall,(_,id)=>aoFallAnzeige(Number(id)));
    textNode.nodeValue=text;
  }
}

function verlinkeFallreferenzenInSchemata(root){
  if(!root||typeof document==="undefined")return;
  const schemaRoots=root.querySelectorAll?.(".ao-schema-section .ao-original, .ao-lesson .ao-original")||[];
  for(const schemaRoot of schemaRoots){
    const walker=document.createTreeWalker(schemaRoot,NodeFilter.SHOW_TEXT);
    const nodes=[];let node;
    while((node=walker.nextNode()))nodes.push(node);
    for(const textNode of nodes){
      if(textNode.parentElement?.closest("button,a,[data-ao-inline-fall-link]"))continue;
      const text=textNode.nodeValue||"";
      const matches=[...text.matchAll(/\bFall\s+(\d+)\b/g)].filter(m=>AO_FALLID_BY_NUMMER.has(Number(m[1])));
      if(!matches.length)continue;
      const frag=document.createDocumentFragment();
      let pos=0;
      for(const match of matches){
        frag.append(text.slice(pos,match.index));
        const nr=Number(match[1]),id=AO_FALLID_BY_NUMMER.get(nr);
        const btn=document.createElement("button");
        btn.type="button";
        btn.className="ao-inline-fall-link";
        btn.dataset.aoInlineFallLink=String(id);
        btn.textContent=`Fall ${nr}`;
        btn.title=`Originalfall ${nr} öffnen`;
        btn.addEventListener("click",()=>originalfallOeffnen(id));
        frag.append(btn);
        pos=match.index+match[0].length;
      }
      frag.append(text.slice(pos));
      textNode.replaceWith(frag);
    }
  }
}

export default function AOQuerverweiseEnhancer() {
  const [ziel,setZiel]=useState({mount:null,typ:null,id:null});
  useEffect(()=>{let frame=null,host=null;const scan=()=>{
    frame=null;
    const campus=document.querySelector(".ao-campus");
    if(!campus)return;
    const lesson=campus.querySelector("main.page > .ao-lesson"),kicker=lesson?.querySelector(".lesson__kopf .kicker")?.textContent||"";
    const modulTreffer=kicker.match(/Lernmodul\s+(\d+)/i);
    const rawFallTreffer=kicker.match(/Originalfall\s+(\d+)/i);
    const gespeicherteFallId=Number(lesson?.dataset?.aoFallId)||0;
    const rawFallId=Number(rawFallTreffer?.[1]||0);
    const interneFallId=AO_FALL_BY_ID.has(rawFallId)?rawFallId:gespeicherteFallId;
    if(lesson&&interneFallId)lesson.dataset.aoFallId=String(interneFallId);
    const typ=modulTreffer?"modul":interneFallId?"fall":null;
    const id=Number(modulTreffer?.[1]||interneFallId||0);
    const refs=typ==="modul"?(MODUL_ZU_FAELLEN[id]||[]):typ==="fall"?(FALL_ZU_MODULEN[id]||[]):[];
    if(!lesson||!refs.length){if(host?.isConnected)host.remove();host=null;setZiel({mount:null,typ:null,id:null});}
    else{
      let h=lesson.querySelector(":scope > [data-ao-links]");
      if(!h){h=document.createElement("div");h.dataset.aoLinks=String(id);const quellen=Array.from(lesson.querySelectorAll(":scope > .tz")).find((s)=>/Quellen/i.test(s.querySelector(".tz__no")?.textContent||""));if(quellen)lesson.insertBefore(h,quellen);else lesson.appendChild(h);}
      host=h;setZiel((alt)=>alt.mount===h&&alt.id===id&&alt.typ===typ?alt:{mount:h,typ,id});
    }
    ersetzeInterneFallnummern(campus);
    verlinkeFallreferenzenInSchemata(campus);
  };const plan=()=>{if(frame===null)frame=requestAnimationFrame(scan);};plan();const obs=new MutationObserver(plan);obs.observe(document.body,{childList:true,subtree:true});return()=>{obs.disconnect();if(frame!==null)cancelAnimationFrame(frame);if(host?.isConnected)host.remove();};},[]);
  if(!ziel.mount||!ziel.id)return null;
  const refs=ziel.typ==="modul"?(MODUL_ZU_FAELLEN[ziel.id]||[]):(FALL_ZU_MODULEN[ziel.id]||[]),istModul=ziel.typ==="modul";
  return createPortal(<section className="tz ao-links-tz"><div className="tz__no"><b>{istModul?"Üben":"Lernen"}</b>Querverweise</div><div className="tz__body"><h2 className="tz__titel">{istModul?"Passende Originalfälle":"Passende Lernmodule"}</h2><p>{istModul?"Direkter Sprung zu kursinternen Fällen mit demselben oder eng überlappendem Prüfungsstoff.":"Direkter Rücksprung zu den Lernmodulen, die den Fall systematisch vorbereiten."}</p><div className="ao-linkcards">{refs.map((r)=><button key={r.id} onClick={()=>istModul?originalfallOeffnen(r.id):modulOeffnen(r.id)}><b>{istModul?aoFallAnzeige(r.id):`Lernmodul ${r.id}`}</b><span>{r.titel}</span><small>{istModul?"Fall":"Modul"} öffnen ↗</small></button>)}</div></div></section>,ziel.mount);
}