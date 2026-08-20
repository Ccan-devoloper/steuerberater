import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./ao-links.css";

const MODUL_ZU_FAELLEN = {
  301: [{ id:310, titel:"Pflichtverstöße im Besteuerungsverfahren" }],
  302: [{ id:311, titel:"Auskunftsersuchen: zu Recht und verwertbar?" }],
  303: [{ id:311, titel:"Auskunftsersuchen: zu Recht und verwertbar?" }],
  307: [{ id:320, titel:"Ordnungsgemäße Bekanntgabe in vier Varianten" }, { id:321, titel:"Ende der Einspruchsfrist" }],
  308: [{ id:320, titel:"Ordnungsgemäße Bekanntgabe in vier Varianten" }],
  312: [{ id:320, titel:"Ordnungsgemäße Bekanntgabe in vier Varianten" }],
  313: [{ id:320, titel:"Ordnungsgemäße Bekanntgabe in vier Varianten" }, { id:321, titel:"Ende der Einspruchsfrist" }],
  314: [{ id:321, titel:"Ende der Einspruchsfrist" }],
  318: [{ id:365, titel:"Abwandlung: Einspruch gegen Änderungsbescheid – § 351 AO und Anfechtungsrahmen" }],
  319: [{ id:321, titel:"Ende der Einspruchsfrist" }, { id:365, titel:"Abwandlung: Einspruch gegen Änderungsbescheid – § 351 AO und Anfechtungsrahmen" }],
  324: [{ id:365, titel:"Abwandlung: Einspruch gegen Änderungsbescheid – § 351 AO und Anfechtungsrahmen" }],
  329: [{ id:334, titel:"Festsetzungsfrist und § 129 AO" }],
  330: [{ id:334, titel:"Festsetzungsfrist und § 129 AO" }],
  331: [{ id:334, titel:"Festsetzungsfrist und § 129 AO" }],
  332: [{ id:334, titel:"Festsetzungsfrist und § 129 AO" }],
  335: [{ id:344, titel:"Außenprüfung 2015: Schlussbesprechung, Änderungsbescheide und Einspruch" }],
  343: [{ id:345, titel:"Annahme Erbschaft und Ablaufhemmung" }],
  352: [{ id:334, titel:"Festsetzungsfrist und § 129 AO" }],
  354: [
    { id:355, titel:"Januar-Miete 2023 bereits am 30.12.2022 gezahlt" },
    { id:356, titel:"Zweifamilienhaus – tatsächliche Wohnflächen später bekannt" },
    { id:357, titel:"Vollständig neue vermietete Wohnung mit Verlustsaldo" },
    { id:364, titel:"Saldierungsfall 2024: Honorar, Zahlendreher, Feststellungsbescheid und VuV" },
  ],
  361: [{ id:364, titel:"Saldierungsfall 2024: Honorar, Zahlendreher, Feststellungsbescheid und VuV" }],
  363: [
    { id:364, titel:"Saldierungsfall 2024: Honorar, Zahlendreher, Feststellungsbescheid und VuV" },
    { id:365, titel:"Abwandlung: Einspruch gegen Änderungsbescheid – § 351 AO und Anfechtungsrahmen" },
  ],
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
  364: [
    { id:354, titel:"§ 173 AO: neue Tatsachen – Nr. 1/Nr. 2" },
    { id:361, titel:"§ 175 Abs. 1 Nr. 1 AO: Anpassung an Grundlagen-/Feststellungsbescheide" },
    { id:363, titel:"§ 177 AO: Plan C – Saldierung, materieller Fehler und Ober-/Untergrenze" },
  ],
  365: [
    { id:318, titel:"Einspruchsverfahren: Zulässigkeit" },
    { id:319, titel:"Einspruchsfrist, Ende und fristwahrender Eingang" },
    { id:324, titel:"Begründetheit des Einspruchs" },
    { id:363, titel:"§ 177 AO: Plan C – Saldierung, materieller Fehler und Ober-/Untergrenze" },
  ],
};

function rail(text) { return Array.from(document.querySelectorAll(".ao-campus .rail__link")).find((b)=>b.textContent?.trim()===text); }
function originalfallOeffnen(id) { rail("Originalfälle")?.click(); const versuchen=(n=0)=>{const karte=Array.from(document.querySelectorAll(".ao-campus .kst-fallkarte")).find((x)=>x.textContent?.includes(`Fall ${id}`));const btn=karte?.querySelector("button");if(btn){btn.click();return;}if(n<30)setTimeout(()=>versuchen(n+1),50);};setTimeout(()=>versuchen(),30); }
function modulOeffnen(id) { rail("Abgabenordnung")?.click(); const versuchen=(n=0)=>{const alle=Array.from(document.querySelectorAll(".ao-campus .ao-topic-filter button")).find((x)=>x.textContent?.trim()==="Alle Oberthemen");if(alle&&alle.getAttribute("aria-pressed")!=="true"){alle.click();if(n<30)return setTimeout(()=>versuchen(n+1),50);}const karte=Array.from(document.querySelectorAll(".ao-campus .modules .modul")).find((x)=>x.textContent?.includes(`Modul ${id}`));if(karte){karte.click();return;}if(n<30)setTimeout(()=>versuchen(n+1),50);};setTimeout(()=>versuchen(),30); }

export default function AOQuerverweiseEnhancer() {
  const [ziel,setZiel]=useState({mount:null,typ:null,id:null});
  useEffect(()=>{let frame=null,host=null;const scan=()=>{frame=null;const lesson=document.querySelector(".ao-campus main.page > .ao-lesson"),text=lesson?.querySelector(".lesson__kopf .kicker")?.textContent||"",modulTreffer=text.match(/Lernmodul\s+(\d+)/i),fallTreffer=text.match(/Originalfall\s+(\d+)/i),typ=modulTreffer?"modul":fallTreffer?"fall":null,id=Number(modulTreffer?.[1]||fallTreffer?.[1]||0),refs=typ==="modul"?(MODUL_ZU_FAELLEN[id]||[]):typ==="fall"?(FALL_ZU_MODULEN[id]||[]):[];if(!lesson||!refs.length){if(host?.isConnected)host.remove();host=null;setZiel({mount:null,typ:null,id:null});return;}let h=lesson.querySelector(":scope > [data-ao-links]");if(!h){h=document.createElement("div");h.dataset.aoLinks=String(id);const quellen=Array.from(lesson.querySelectorAll(":scope > .tz")).find((s)=>/Quellen/i.test(s.querySelector(".tz__no")?.textContent||""));if(quellen)lesson.insertBefore(h,quellen);else lesson.appendChild(h);}host=h;setZiel((alt)=>alt.mount===h&&alt.id===id&&alt.typ===typ?alt:{mount:h,typ,id});};const plan=()=>{if(frame===null)frame=requestAnimationFrame(scan);};plan();const obs=new MutationObserver(plan);obs.observe(document.body,{childList:true,subtree:true});return()=>{obs.disconnect();if(frame!==null)cancelAnimationFrame(frame);if(host?.isConnected)host.remove();};},[]);
  if(!ziel.mount||!ziel.id)return null;const refs=ziel.typ==="modul"?(MODUL_ZU_FAELLEN[ziel.id]||[]):(FALL_ZU_MODULEN[ziel.id]||[]),istModul=ziel.typ==="modul";
  return createPortal(<section className="tz ao-links-tz"><div className="tz__no"><b>{istModul?"Üben":"Lernen"}</b>Querverweise</div><div className="tz__body"><h2 className="tz__titel">{istModul?"Passende Originalfälle":"Passende Lernmodule"}</h2><p>{istModul?"Direkter Sprung zu kursinternen Fällen mit demselben oder eng überlappendem Prüfungsstoff.":"Direkter Rücksprung zu den Lernmodulen, die den Fall systematisch vorbereiten."}</p><div className="ao-linkcards">{refs.map((r)=><button key={r.id} onClick={()=>istModul?originalfallOeffnen(r.id):modulOeffnen(r.id)}><b>{istModul?`Originalfall ${r.id}`:`Lernmodul ${r.id}`}</b><span>{r.titel}</span><small>{istModul?"Fall":"Modul"} öffnen ↗</small></button>)}</div></div></section>,ziel.mount);
}
