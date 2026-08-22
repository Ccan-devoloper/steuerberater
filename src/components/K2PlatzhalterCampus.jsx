import React, { useEffect, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K2Fachleiste from "./K2Fachleiste";
import { IconCockpit, IconModule, IconFaelle, IconSchema, IconTraining } from "./Icons";
import { IconKlausur } from "./Klausurmodus";
import "./kst.css";

/* Platzhalter-Campus für die noch quellenlosen K2-Fächer – gleicher Aufbau wie
   der ErbSt-Platzhalter in Klausur 1. */
const FAECHER = {
  est: { name: "Einkommensteuer", kurz: "ESt" },
  gewst: { name: "Gewerbesteuer", kurz: "GewSt" },
};

export default function K2PlatzhalterCampus({ fach, onKlausurwechsel, onFachwechsel }) {
  const { name, kurz } = FAECHER[fach] ?? FAECHER.est;
  const nav = [
    ["cockpit","Cockpit",IconCockpit],["module",name,IconModule],["faelle","Originalfälle",IconFaelle],["klausur","Klausurmodus",IconKlausur],["schema","Prüfschema",IconSchema],["training","Training",IconTraining],["fallsammlung","Fallsammlung",IconFaelle],["hausaufgaben",`Hausaufgaben ${kurz}`,IconModule],
  ];
  const [ansicht,setAnsicht]=useState("cockpit"); const [dunkel,setDunkel]=useState(()=>laden("stb-dunkel",false));
  useEffect(()=>{document.documentElement.dataset.theme=dunkel?"dark":"light";sichern("stb-dunkel",dunkel);},[dunkel]);
  return <div className="kst-campus"><CampusTopbar klausur="2" marke="2" name="Examenscampus Klausur 2" untertitel={`Ertragsteuerrecht · ${name}`} aufCockpit={()=>setAnsicht("cockpit")} navZurueck={()=>{}} navVor={()=>{}} zurueckMoeglich={false} vorMoeglich={false} suche="" sucheSetzen={()=>{}} suchePlatzhalter={`${kurz}-Inhalte suchen`} sucheAria={`${name}-Inhalte durchsuchen`} dunkel={dunkel} dunkelUmschalten={()=>setDunkel((d)=>!d)} /><KlausurenLeiste aktiv="kst" aufCockpit={()=>setAnsicht("cockpit")} onKlausurwechsel={onKlausurwechsel}/><K2Fachleiste aktiv={fach} onWechsel={onFachwechsel}/><aside className="rail"><nav className="rail__nav">{nav.map(([id,label,Icon])=><button key={id} className="rail__link" aria-current={ansicht===id?"true":undefined} onClick={()=>setAnsicht(id)}><Icon />{label}</button>)}</nav><div className="rail__box"><b>{kurz}-Fortschritt</b><strong>0 / 0</strong><p>Quellen folgen</p></div></aside><main className="page"><div className="pagehead"><div><span className="kicker">Klausur 2 · {name}</span><h1>{ansicht==="cockpit"?`${name}-Cockpit`:nav.find(([id])=>id===ansicht)?.[1]}</h1><p className="lead">Der Campus ist strukturell wie die Körperschaftsteuer vorbereitet. Inhalte werden erst aus den noch folgenden {name}-Quellen übernommen.</p></div></div><section className="panel"><h2>Noch keine Quelldaten</h2><p>Es wurden bewusst keine Inhalte ergänzt, die nicht aus einer bereitgestellten Quelle stammen.</p></section></main></div>;
}
