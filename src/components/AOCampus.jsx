import React, { useEffect, useMemo, useRef, useState } from "react";
import aoEinheit1 from "../data/k1-ao-einheit-1.js";
import { laden, sichern, useFortschritt, anteil } from "../lib/fortschritt";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K1Fachleiste from "./K1Fachleiste";
import AOPruefschema from "./AOPruefschema";
import AOSchema from "./AOSchemata";
import { AONormkette, AOSchemaVerweise, AOVerlinkterText } from "./AOSchemaLinks";
import Klausurmodus, { IconKlausur } from "./Klausurmodus";
import { IconCockpit, IconModule, IconFaelle, IconSchema, IconHaken, IconTraining } from "./Icons";
import "./kst.css";
import "./ao.css";

const AO_INHALTE = [...aoEinheit1];
const AO_MODULE = AO_INHALTE.filter((x) => x.area !== "Fall");
const AO_FAELLE = AO_INHALTE.filter((x) => x.area === "Fall");
const AO_IDS = new Set(AO_INHALTE.map((x) => x.id));

const OBER = [
  { id: "alle", label: "Alle Oberthemen", module: [] },
  { id: "ablauf", label: "Grundlagen & Verfahrensablauf", module: [301, 309], beschreibung: "Arbeitsmittel, Verfahrenslandkarte und Einordnung der AO-Klausur." },
  { id: "ermittlung", label: "Ermittlungsverfahren", module: [302, 303], beschreibung: "Untersuchungsgrundsatz, Beweismittel, Auskunft/Vorlage und Verweigerungsrechte." },
  { id: "va", label: "Verwaltungsakt & VA-Arten", module: [304, 305], beschreibung: "VA-Begriff, Typisierung und die davon abhängigen Korrekturwege." },
  { id: "wirksamkeit", label: "Wirksamkeit & Bekanntgabe", module: [306, 307, 308], beschreibung: "§§ 124/125 AO, Bekanntgabe, Bevollmächtigte und Ehegatten." },
];
const OBER_BY_ID = new Map(OBER.flatMap((o) => o.module.map((id) => [id, o])));
const oberVon = (m) => OBER_BY_ID.get(m.id) || OBER[1];

const ANSICHTEN = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "module", label: "Abgabenordnung", Icon: IconModule },
  { id: "faelle", label: "Originalfälle", Icon: IconFaelle },
  { id: "klausur", label: "Klausurmodus", Icon: IconKlausur },
  { id: "schema", label: "Prüfschema", Icon: IconSchema },
  { id: "training", label: "Training", Icon: IconTraining },
  { id: "fallsammlung", label: "Fallsammlung", Icon: IconFaelle },
  { id: "hausaufgaben", label: "Hausaufgaben AO", Icon: IconModule },
];

function Tz({ nummer, label, titel, art, children }) {
  return <section className={`tz${art ? ` tz--${art}` : ""}`}><div className="tz__no"><b>Tz. {nummer}</b>{label}</div><div className="tz__body">{titel && <h2 className="tz__titel">{titel}</h2>}{children}</div></section>;
}

function AOSeite({ m, erledigt, umschalten, zurueck, oeffnen, schemaOeffnen }) {
  const fertig = erledigt.includes(m.id);
  const liste = m.area === "Fall" ? AO_FAELLE : AO_MODULE;
  const index = liste.findIndex((x) => x.id === m.id);
  const vorher = liste[index - 1];
  const nachher = liste[index + 1];
  const istFall = m.area === "Fall";
  let tz = 0; const n = () => ++tz;
  return <article className="lesson ao-lesson">
    <button className="zurueck" onClick={zurueck}>← Zurück zur AO-Übersicht</button>
    <header className="lesson__kopf"><div><span className="kicker">Klausur 1 · Abgabenordnung · {istFall ? "Originalfall" : "Lernmodul"} {m.id}</span><h1>{m.title}</h1><div className="tags"><span className="tag tag--fach">{m.difficulty}</span><span className="tag">{m.minutes} Minuten</span><span className="tag">AO 1. Einheit · PDF-S. {m.sourcePages?.join(", ")}</span></div><p className="ao-lawline">{m.law}</p><AOSchemaVerweise text={m.law} onOpen={schemaOeffnen} /></div><button className="gemeistert" aria-pressed={fertig} onClick={() => umschalten(m.id)}>{fertig ? "✓ bearbeitet" : "Als bearbeitet markieren"}</button></header>
    <Tz nummer={n()} label="Einordnung" titel="Worum es geht">{(m.intro || []).map((p,i)=><AOVerlinkterText key={i} as="p" text={p} onOpen={schemaOeffnen} compact />)}</Tz>
    <Tz nummer={n()} label="Lernziele" titel="Das können Sie danach"><ul className="liste liste--haken">{(m.goals || []).map((g,i)=><li key={i}><AOVerlinkterText text={g} onOpen={schemaOeffnen} compact /></li>)}</ul></Tz>
    <Tz nummer={n()} label="Schema" titel="Prüfungsreihenfolge" art="ansatz"><ol className="schritte">{(m.scheme || []).map((s,i)=><li key={i}><AOVerlinkterText text={s} onOpen={schemaOeffnen} compact /></li>)}</ol>{m.diagram && <AOSchema id={m.diagram} />}</Tz>
    <Tz nummer={n()} label="Normen" titel="Normenkette für die Klausur"><AONormkette normen={m.normchain || []} onOpen={schemaOeffnen} /></Tz>
    {m.example && <Tz nummer={n()} label={istFall ? "Originalfall" : "Vertiefung"} titel={m.example.title} art="bewertung"><div className="fall"><div className="fall__block fall__sachverhalt"><b>{istFall ? "Sachverhalt / Aufgabenstellung" : "Ausgangspunkt"}</b><AOVerlinkterText as="p" text={m.example.facts} onOpen={schemaOeffnen} compact /></div><div className="fall__block"><b>Lösung</b><ol>{(m.example.solution || []).map((s,i)=><li key={i}><AOVerlinkterText text={s} onOpen={schemaOeffnen} compact /></li>)}</ol><AONormkette normen={m.normchain || []} onOpen={schemaOeffnen} /></div><div className="fall__block fall__ergebnis"><b>Ergebnis</b><AOVerlinkterText as="p" text={m.example.result} onOpen={schemaOeffnen} compact /></div></div></Tz>}
    <Tz nummer={n()} label="Sichern" titel="Merksatz, Prüfungsrelevanz und Fallen"><div className="notiz"><p>{m.merksatz}</p></div>{m.exam?.length > 0 && <div className="notiz notiz--exkurs"><b>Prüfungsrelevanz / Quelle</b><ul>{m.exam.map((e,i)=><li key={i}>{e}</li>)}</ul></div>}{m.traps?.length > 0 && <div className="notiz notiz--falle"><b>Typische Fallen</b><ul>{m.traps.map((t,i)=><li key={i}>{t}</li>)}</ul></div>}</Tz>
    <Tz nummer={n()} label="Quellen" titel="Fundstellen und Quellenstand"><ul className="liste"><li>AO 1. Einheit · PDF-S. {m.sourcePages?.join(", ")}</li><li>Die handschriftlichen Schemata und Merkkarten der zugeordneten Seiten wurden digital nachgebaut.</li><li>Maßgebliche Normen laut Einheit: {m.law}</li></ul></Tz>
    <nav className="blaettern">{vorher ? <button onClick={() => oeffnen(vorher.id)}><small>← {vorher.area === "Fall" ? "Fall" : "Modul"} {vorher.id}</small><strong>{vorher.title}</strong></button> : <span />}{nachher ? <button onClick={() => oeffnen(nachher.id)}><small>{nachher.area === "Fall" ? "Fall" : "Modul"} {nachher.id} →</small><strong>{nachher.title}</strong></button> : <span />}</nav>
  </article>;
}

function AOCockpit({ erledigt, oeffnen, ansichtOeffnen, schemaOeffnen }) {
  const modulErledigt = AO_MODULE.filter((m) => erledigt.includes(m.id)).length;
  const fallErledigt = AO_FAELLE.filter((m) => erledigt.includes(m.id)).length;
  const naechstes = AO_MODULE.find((m) => !erledigt.includes(m.id)) || AO_MODULE[0];
  return <>
    <div className="cockpit"><section className="these kst-these"><span className="kicker">Klausur 1 · Verfahrensrecht · Abgabenordnung</span><h2>AO systematisch: <em>Verfahren → VA → Wirksamkeit.</em></h2><p>Die 1. AO-Einheit ist vollständig eingearbeitet: 34 PDF-Seiten, {AO_MODULE.length} Lernmodule und {AO_FAELLE.length} Originalfälle. Die Schemata sind digital entlang der handschriftlichen Vorlage nachgebaut.</p><div className="these__aktionen"><button className="btn" onClick={() => oeffnen(naechstes.id)}>Weiterlernen</button><button className="btn btn--linie" onClick={() => ansichtOeffnen("faelle")}>Originalfälle</button><button className="btn btn--linie" onClick={() => schemaOeffnen("ao-schema-ablauf")}>Prüfschema</button></div></section><section className="panel fortschritt"><div className="ao-ring-row"><div className="ring" style={{"--p":`${anteil(modulErledigt, AO_MODULE.length)}%`}}><b>{anteil(modulErledigt, AO_MODULE.length)}%</b></div><div><h3>Lernmodule</h3><p>{modulErledigt} / {AO_MODULE.length}</p></div></div><div className="ao-ring-row"><div className="ring" style={{"--p":`${anteil(fallErledigt, AO_FAELLE.length)}%`}}><b>{anteil(fallErledigt, AO_FAELLE.length)}%</b></div><div><h3>Originalfälle</h3><p>{fallErledigt} / {AO_FAELLE.length}</p></div></div></section></div>
    <section className="abschnitt"><span className="kicker">Weiter im Stoff</span><button className="weiter" onClick={() => oeffnen(naechstes.id)}><span className="kicker">Lernmodul {naechstes.id} · {oberVon(naechstes).label}</span><h3>{naechstes.title}</h3><p>{naechstes.intro?.[0]}</p><span className="norm">{naechstes.law}</span></button></section>
    <section className="abschnitt"><div className="kst-abschnitt-kopf"><div><span className="kicker">Oberthemen</span><h2>AO 1. Einheit</h2></div></div><div className="ao-cockpit-topics">{OBER.filter((o)=>o.id!=="alle").map((o)=><button key={o.id} onClick={() => ansichtOeffnen("module", o.id)}><b>{o.label}</b><span>{o.beschreibung}</span><small>{o.module.length} Unterthemen →</small></button>)}</div></section>
    <section className="abschnitt"><div className="kst-abschnitt-kopf"><h2>Grundschema des Besteuerungsverfahrens</h2><button className="kst-schema-alle" onClick={() => schemaOeffnen("ao-schema-ablauf")}>Gesamtes AO-Prüfschema ↗</button></div><AOSchema id="ao-besteuerungsverfahren" /></section>
  </>;
}

function AOThemenseite({ suche, ober, setOber, erledigt, umschalten, oeffnen, schemaOeffnen }) {
  const q = suche.trim().toLowerCase();
  const basis = ober === "alle" ? AO_MODULE : AO_MODULE.filter((m)=>oberVon(m).id===ober);
  const liste = basis.filter((m)=>!q || [m.title,m.law,...(m.intro||[]),...(m.goals||[]),...(m.scheme||[])].join(" ").toLowerCase().includes(q));
  const aktiv = OBER.find((o)=>o.id===ober) || OBER[0];
  return <><div className="pagehead"><div><span className="kicker">Klausur 1 · Abgabenordnung · Lernmodule</span><h1>{suche ? `Treffer für „${suche}“` : aktiv.id === "alle" ? "AO-Lernmodule nach Oberthemen" : aktiv.label}</h1><p className="lead">Die Einheiten werden fachlich nach Oberthemen gruppiert; die Kurs-Einheit bleibt Quellenmetadatum.</p></div><span className="zaehler">{liste.length} Unterthemen</span></div><div className="filter ao-topic-filter">{OBER.map((o)=><button key={o.id} aria-pressed={ober===o.id} onClick={()=>setOber(o.id)}>{o.label}</button>)}</div>{aktiv.id!=="alle" && <div className="ao-topic-intro"><span className="kicker">Oberthema</span><h2>{aktiv.label}</h2><p>{aktiv.beschreibung}</p></div>}<div className="modules">{liste.map((m)=>{const fertig=erledigt.includes(m.id);return <div key={m.id} className={`modul${fertig?" modul--fertig":""}`} role="button" tabIndex={0} onClick={()=>oeffnen(m.id)} onKeyDown={(e)=>(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),oeffnen(m.id))}><span className="modul__check" role="checkbox" aria-checked={fertig} tabIndex={0} onClick={(e)=>{e.stopPropagation();umschalten(m.id);}}><IconHaken /></span><div><div className="modul__kopf"><span>{oberVon(m).label}</span><span>Unterthema · Modul {m.id}</span><span>Quelle: AO Einheit 1 · S. {m.sourcePages.join(", ")}</span></div><h3>{m.title}</h3><div className="modul__norm">{m.law}</div><AOSchemaVerweise text={m.law} onOpen={schemaOeffnen} compact stopPropagation /></div><span className="modul__an">öffnen →</span></div>})}</div>{liste.length===0 && <p className="panel">Keine Treffer.</p>}</>;
}

function AOOriginalfaelle({ oeffnen, schemaOeffnen }) {
  return <><div className="pagehead"><div><span className="kicker">Klausur 1 · Abgabenordnung · Originalfälle</span><h1>Originalfälle der AO-Mitschrift</h1><p className="lead">Die kursinternen Aufgaben der Einheit sind hier getrennt von der später folgenden eigenständigen Fallsammlung abgelegt.</p></div><span className="zaehler">{AO_FAELLE.length} Fälle</span></div><div className="kst-faelle">{AO_FAELLE.map((m)=><article className="panel kst-fallkarte" key={m.id}><div className="panel__head"><div><span className="kicker">Fall {m.id} · AO Einheit 1 · PDF-S. {m.sourcePages.join(", ")}</span><h2>{m.title}</h2></div><button className="btn btn--klein btn--linie" onClick={()=>oeffnen(m.id)}>Fall öffnen</button></div><p className="kst-fallquelle">{m.law}</p><AOSchemaVerweise text={m.law} onOpen={schemaOeffnen} compact /><div className="kst-sachverhalt"><b>Sachverhalt</b><p>{m.example?.facts}</p></div><details><summary>Lösung anzeigen</summary><div className="fall"><div className="fall__block"><b>Lösung</b><ol>{(m.example?.solution||[]).map((s,i)=><li key={i}>{s}</li>)}</ol></div><div className="fall__block fall__ergebnis"><b>Ergebnis</b><p>{m.example?.result}</p></div></div></details></article>)}</div></>;
}

const QUIZ = [
  ["Was ist die erste Frage der Verwaltungsakte-Falle?", ["Welche Korrekturvorschrift gilt?","Liegt überhaupt ein VA vor?","Ist Einspruch begründet?"], 1, "Die Quelle startet bewusst mit der Existenzfrage nach § 118 AO."],
  ["Was folgt laut Quelle auf einen bloß inhaltlich falschen VA?", ["Automatisch Nichtigkeit","Regelmäßig ein Standard-Fehler; Korrektur/Anfechtung prüfen","Keine Rechtswirkung"], 1, "§ 125 AO bleibt der besonders schwerwiegende offenkundige Ausnahmefall."],
  ["Welche zwei Beweismittel stehen im Mittelpunkt der Einheit?", ["Zeugen und Gutachten","Auskunft § 93 und Urkunden/Vorlage § 97","Augenschein und Eid"], 1, "Die Seiten 8–13 konzentrieren sich hierauf."],
  ["Was verlangt das Bekanntgabe-Schema?", ["Nur tatsächliches Lesen","Zugang im Machtbereich des richtigen Empfängers","Immer Zustellung gegen Empfangsbekenntnis"], 1, "So lautet die Kernformel auf PDF-S. 31."],
];

function AOTraining() { const [i,setI]=useState(0); const [a,setA]=useState(null); const f=QUIZ[i]; return <><div className="pagehead"><div><span className="kicker">Training · AO 1. Einheit</span><h1>AO-Schnellcheck</h1><p className="lead">Kurze Wiederholung aus den bislang eingearbeiteten 34 Seiten.</p></div></div><section className="panel kst-quiz"><span className="kicker">Frage {i+1} / {QUIZ.length}</span><h2>{f[0]}</h2><div className="kst-optionen">{f[1].map((x,j)=><button key={x} className={`kst-option${a===null?"":j===f[2]?" richtig":j===a?" falsch":""}`} onClick={()=>a===null&&setA(j)}>{x}</button>)}</div>{a!==null&&<div className="kst-erklaerung"><p>{f[3]}</p><button className="btn btn--klein" onClick={()=>{setA(null);setI((i+1)%QUIZ.length);}}>Nächste Frage</button></div>}</section></> }

function Leer({ typ }) { return <><div className="pagehead"><div><span className="kicker">Klausur 1 · Abgabenordnung</span><h1>{typ}</h1><p className="lead">Der Bereich ist strukturell vorbereitet. Die zugehörigen AO-Unterlagen folgen später und werden dann mit denselben Querverweisen zu Lernmodulen, Originalfällen und Prüfschemata eingebunden.</p></div></div><section className="panel"><h2>Noch keine Quelldaten</h2><p>Für die 1. AO-Einheit wurden hier bewusst keine fremden Fälle oder Hausaufgaben ergänzt.</p></section></>; }

export default function AOCampus({ onKlausurwechsel, onFachwechsel }) {
  const [ansicht,setAnsicht]=useState("cockpit"); const [inhaltId,setInhaltId]=useState(null); const [suche,setSuche]=useState(""); const [ober,setOber]=useState("alle"); const [schemaZiel,setSchemaZiel]=useState(null); const [dunkel,setDunkel]=useState(()=>laden("stb-dunkel",false)); const fortschritt=useFortschritt("stb-k1-ao-erledigt",AO_IDS); const erledigt=fortschritt.werte; const scroll=useRef(null);
  useEffect(()=>{document.documentElement.dataset.theme=dunkel?"dark":"light"; sichern("stb-dunkel",dunkel);},[dunkel]);
  useEffect(()=>{const t=setTimeout(()=>{if(ansicht==="schema"&&schemaZiel) document.getElementById(schemaZiel)?.scrollIntoView({behavior:"smooth",block:"start"}); else window.scrollTo({top:0,behavior:"auto"});},0);return()=>clearTimeout(t);},[ansicht,inhaltId,schemaZiel]);
  const inhalt=inhaltId?AO_INHALTE.find((m)=>m.id===inhaltId):null;
  const ansichtOeffnen=(ziel,oberZiel=null)=>{setAnsicht(ziel);setInhaltId(null);setSchemaZiel(null);if(oberZiel){setOber(oberZiel);} };
  const oeffnen=(id)=>{setAnsicht("module");setInhaltId(id);};
  const schemaOeffnen=(ziel="ao-schema-ablauf")=>{setAnsicht("schema");setInhaltId(null);setSchemaZiel(ziel);};
  return <div className="kst-campus ao-campus"><CampusTopbar klausur="1" marke="1" name="Examenscampus Klausur 1" untertitel="Verfahrensrecht · Abgabenordnung" aufCockpit={()=>ansichtOeffnen("cockpit")} navZurueck={()=>{}} navVor={()=>{}} zurueckMoeglich={false} vorMoeglich={false} suche={suche} sucheSetzen={(v)=>{setSuche(v);if(ansicht!=="module"||inhaltId)ansichtOeffnen("module");}} suchePlatzhalter="AO-Modul, Fall, Norm oder Stichwort suchen" sucheAria="AO-Inhalte durchsuchen" dunkel={dunkel} dunkelUmschalten={()=>setDunkel((d)=>!d)} /><KlausurenLeiste aktiv="k1" aufCockpit={()=>ansichtOeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel}/><K1Fachleiste aktiv="ao" onWechsel={onFachwechsel}/><aside className="rail"><nav className="rail__nav" aria-label="AO-Hauptnavigation">{ANSICHTEN.map(({id,label,Icon})=><button key={id} className="rail__link" aria-current={ansicht===id?"true":undefined} onClick={()=>ansichtOeffnen(id)}><Icon />{label}</button>)}</nav><div className="rail__box"><b>AO-Fortschritt</b><strong>{erledigt.length} / {AO_INHALTE.length}</strong><p>Einheit 1 · 34 Seiten vollständig erfasst</p>{erledigt.length>0&&<button className="rail__box-reset" onClick={()=>window.confirm("Bearbeitungsstand der AO-Inhalte zurücksetzen?")&&fortschritt.zuruecksetzen()}>zurücksetzen</button>}</div></aside><main className="page">{ansicht==="cockpit"&&<AOCockpit erledigt={erledigt} oeffnen={oeffnen} ansichtOeffnen={ansichtOeffnen} schemaOeffnen={schemaOeffnen}/>} {ansicht==="module"&&!inhalt&&<AOThemenseite suche={suche} ober={ober} setOber={setOber} erledigt={erledigt} umschalten={fortschritt.umschalten} oeffnen={oeffnen} schemaOeffnen={schemaOeffnen}/>} {ansicht==="module"&&inhalt&&<AOSeite m={inhalt} erledigt={erledigt} umschalten={fortschritt.umschalten} zurueck={()=>{setInhaltId(null);}} oeffnen={oeffnen} schemaOeffnen={schemaOeffnen}/>} {ansicht==="faelle"&&<AOOriginalfaelle oeffnen={oeffnen} schemaOeffnen={schemaOeffnen}/>} {ansicht==="schema"&&<AOPruefschema/>} {ansicht==="training"&&<AOTraining/>} {ansicht==="fallsammlung"&&<Leer typ="Fallsammlung AO"/>} {ansicht==="hausaufgaben"&&<Leer typ="Hausaufgaben AO"/>} {ansicht==="klausur"&&<Klausurmodus module={AO_FAELLE} oeffnenModul={oeffnen} gebiete={[{id:"E1",label:"AO Einheit 1"}]} gebietVon={()=>"E1"} speicherKey="stb-k1-ao-klausurlauf" sperrtext="Erst selbst lösen: Verfahrensphase, VA-Frage, Wirksamkeit/Bekanntgabe und passende Normen. Danach Musterlösung aufdecken." modulWort="Fall" />}</main></div>;
}
