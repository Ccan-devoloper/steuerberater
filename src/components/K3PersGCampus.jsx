import React, { useEffect, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K3Fachleiste from "./K3Fachleiste";
import { IconCockpit, IconModule, IconFaelle, IconSchema, IconTraining } from "./Icons";
import { IconKlausur } from "./Klausurmodus";
import "./kst.css";

/* Platzhalter für den künftigen PersG-Reiter der Bilanzklausur – gleicher
   Aufbau wie die Platzhalter in Klausur 1 (ErbSt) und Klausur 2 (ESt/GewSt). */
const nav = [
  ["cockpit","Cockpit",IconCockpit],["module","Personengesellschaften",IconModule],["faelle","Originalfälle",IconFaelle],["klausur","Klausurmodus",IconKlausur],["schema","Prüfschema",IconSchema],["training","Training",IconTraining],["fallsammlung","Fallsammlung",IconFaelle],["hausaufgaben","Hausaufgaben PersG",IconModule],
];

export default function K3PersGCampus({ onKlausurwechsel, onFachwechsel }) {
  const [ansicht,setAnsicht]=useState("cockpit"); const [dunkel,setDunkel]=useState(()=>laden("stb-dunkel",false));
  useEffect(()=>{document.documentElement.dataset.theme=dunkel?"dark":"light";sichern("stb-dunkel",dunkel);},[dunkel]);
  return <div className="kst-campus"><CampusTopbar klausur="3" marke="3" name="Examenscampus Klausur 3" untertitel="Buchführung und Bilanzwesen · Personengesellschaften" aufCockpit={()=>setAnsicht("cockpit")} navZurueck={()=>{}} navVor={()=>{}} zurueckMoeglich={false} vorMoeglich={false} suche="" sucheSetzen={()=>{}} suchePlatzhalter="PersG-Inhalte suchen" sucheAria="Personengesellschafts-Inhalte durchsuchen" dunkel={dunkel} dunkelUmschalten={()=>setDunkel((d)=>!d)} /><KlausurenLeiste aktiv="k3" aufCockpit={()=>setAnsicht("cockpit")} onKlausurwechsel={onKlausurwechsel}/><K3Fachleiste aktiv="persg" onWechsel={onFachwechsel}/><aside className="rail"><nav className="rail__nav">{nav.map(([id,label,Icon])=><button key={id} className="rail__link" aria-current={ansicht===id?"true":undefined} onClick={()=>setAnsicht(id)}><Icon />{label}</button>)}</nav><div className="rail__box"><b>PersG-Fortschritt</b><strong>0 / 0</strong><p>Quellen folgen</p></div></aside><main className="page"><div className="pagehead"><div><span className="kicker">Klausur 3 · Personengesellschaften</span><h1>{ansicht==="cockpit"?"Personengesellschafts-Cockpit":nav.find(([id])=>id===ansicht)?.[1]}</h1><p className="lead">Dieser Reiter bündelt künftig den Personengesellschafts-Stoff der Bilanzklausur. Die bereits vorhandenen PersG-Lernmodule bleiben bis dahin im Reiter „Allgemein" (Bereich Personengesellschaft) erreichbar.</p></div></div><section className="panel"><h2>Noch keine eigenen Quelldaten</h2><p>Es wurden bewusst keine Inhalte ergänzt, die nicht aus einer bereitgestellten Quelle stammen.</p></section></main></div>;
}
