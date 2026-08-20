import React, { useEffect, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K1Fachleiste from "./K1Fachleiste";
import { IconCockpit, IconModule, IconFaelle, IconSchema, IconTraining } from "./Icons";
import { IconKlausur } from "./Klausurmodus";
import "./kst.css";

const nav = [
  ["cockpit","Cockpit",IconCockpit],["module","Erbschaftsteuer",IconModule],["faelle","Originalfälle",IconFaelle],["klausur","Klausurmodus",IconKlausur],["schema","Prüfschema",IconSchema],["training","Training",IconTraining],["fallsammlung","Fallsammlung",IconFaelle],["hausaufgaben","Hausaufgaben ErbSt",IconModule],
];

export default function K1ErbStCampus({ onKlausurwechsel, onFachwechsel }) {
  const [ansicht,setAnsicht]=useState("cockpit"); const [dunkel,setDunkel]=useState(()=>laden("stb-dunkel",false));
  useEffect(()=>{document.documentElement.dataset.theme=dunkel?"dark":"light";sichern("stb-dunkel",dunkel);},[dunkel]);
  return <div className="kst-campus"><CampusTopbar klausur="1" marke="1" name="Examenscampus Klausur 1" untertitel="Verfahrensrecht · Erbschaftsteuer" aufCockpit={()=>setAnsicht("cockpit")} navZurueck={()=>{}} navVor={()=>{}} zurueckMoeglich={false} vorMoeglich={false} suche="" sucheSetzen={()=>{}} suchePlatzhalter="ErbSt-Inhalte suchen" sucheAria="Erbschaftsteuer-Inhalte durchsuchen" dunkel={dunkel} dunkelUmschalten={()=>setDunkel((d)=>!d)} /><KlausurenLeiste aktiv="k1" aufCockpit={()=>setAnsicht("cockpit")} onKlausurwechsel={onKlausurwechsel}/><K1Fachleiste aktiv="erbst" onWechsel={onFachwechsel}/><aside className="rail"><nav className="rail__nav">{nav.map(([id,label,Icon])=><button key={id} className="rail__link" aria-current={ansicht===id?"true":undefined} onClick={()=>setAnsicht(id)}><Icon />{label}</button>)}</nav><div className="rail__box"><b>ErbSt-Fortschritt</b><strong>0 / 0</strong><p>Quellen folgen</p></div></aside><main className="page"><div className="pagehead"><div><span className="kicker">Klausur 1 · Erbschaftsteuer</span><h1>{ansicht==="cockpit"?"Erbschaftsteuer-Cockpit":nav.find(([id])=>id===ansicht)?.[1]}</h1><p className="lead">Der Campus ist strukturell wie AO und USt vorbereitet. Inhalte werden erst aus den noch folgenden Erbschaftsteuer-Quellen übernommen.</p></div></div><section className="panel"><h2>Noch keine Quelldaten</h2><p>Es wurden bewusst keine Inhalte ergänzt, die nicht aus einer bereitgestellten Quelle stammen.</p></section></main></div>;
}
