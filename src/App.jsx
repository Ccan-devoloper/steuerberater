import React, { useEffect, useMemo, useState } from "react";

const modules = [
  ["EU","Maßgeblichkeit und Bilanzierungspflicht","§ 5 Abs. 1 EStG · §§ 238, 242 HGB"],
  ["EU","Wirtschaftliches Eigentum und Zurechnung","§ 39 AO · R 4.2 EStR"],
  ["EU","Anschaffungs- und Herstellungskosten","§ 255 HGB · § 6 EStG"],
  ["EU","Absetzung für Abnutzung","§ 7 EStG"],
  ["EU","Teilwertabschreibung und Zuschreibung","§ 6 Abs. 1 Nr. 1 und 2 EStG"],
  ["EU","Rückstellungen","§ 249 HGB · § 5 Abs. 4a–4b EStG"],
  ["EU","Reinvestitionsrücklage","§ 6b EStG · R 6b EStR"],
  ["EU","Investitionsabzugsbetrag","§ 7g EStG"],
  ["PersG","Gesamthandsvermögen","§ 15 Abs. 1 Satz 1 Nr. 2 EStG"],
  ["PersG","Sonderbetriebsvermögen I und II","R 4.2 EStR · H 4.2 EStH"],
  ["PersG","Sondervergütungen","§ 15 Abs. 1 Satz 1 Nr. 2 EStG"],
  ["PersG","Ergänzungsbilanz","§ 6 Abs. 1 Nr. 7 EStG"],
  ["PersG","Übertragung zwischen Betriebsvermögen","§ 6 Abs. 5 EStG"],
  ["KapG","Eigenkapitalgliederung","§§ 266, 272 HGB"],
  ["KapG","Eigene Anteile","§ 272 Abs. 1a und 1b HGB"],
  ["KapG","Ausschüttungen und Einlagekonto","§ 27 KStG · § 44 EStG"],
  ["KapG","Verdeckte Gewinnausschüttung","§ 8 Abs. 3 Satz 2 KStG"],
  ["KapG","Verdeckte Einlage","§ 8 Abs. 3 Satz 3 KStG"],
  ["Technik","Buchungssatz und Gewinnauswirkung","Soll an Haben"],
  ["Technik","Mehr-Weniger-Rechnung","§ 60 Abs. 2 EStDV"],
].map((m,i)=>({id:i,area:m[0],title:m[1],law:m[2]}));

const questions = [
  ["Welche Frage steht im Universalschema zuerst?",["Bewertung","Zurechnung","Buchung","AfA"],1,"Zuerst wird die steuerliche Zurechnung geklärt."],
  ["Welche Norm regelt das wirtschaftliche Eigentum?",["§ 39 AO","§ 7g EStG","§ 249 HGB","§ 27 KStG"],0,"§ 39 AO ist die zentrale Zurechnungsnorm."],
  ["Wie viel Zeit ergeben 25 Punkte?",["60","75","90","100 Minuten"],2,"25 × 3,6 Minuten = 90 Minuten."],
  ["Wo wird Sonderbetriebsvermögen abgebildet?",["Gesamthandsbilanz","Sonderbilanz","Nur außerbilanziell","Privatvermögen"],1,"Sonderbetriebsvermögen gehört in die Sonderbilanz."],
  ["Welche Norm betrifft die Reinvestitionsrücklage?",["§ 6b EStG","§ 8 KStG","§ 15a EStG","§ 5 UStG"],0,"Die Übertragung stiller Reserven ist in § 6b EStG geregelt."],
  ["Womit endet jeder Einzelsachverhalt?",["Nur mit einer Norm","Nur mit dem Ergebnis","Mit Technik und Gewinnauswirkung","Mit einer neuen Frage"],2,"Bilanzposten, Buchung und Gewinnauswirkung sichern Technikpunkte."],
];

const weeks = ["Grundlagen und Universalschema","Aktivseite und AfA","Passivseite und Rückstellungen","§ 6b, R 6.6 und § 7g EStG","Personengesellschaft","Kapitalgesellschaft","Technik und Zeitmanagement","Klausursimulation"];
const readSet=(key)=>{try{return new Set(JSON.parse(localStorage.getItem(key)||"[]"))}catch{return new Set()}};

export default function App(){
  const [view,setView]=useState("home");
  const [dark,setDark]=useState(localStorage.getItem("stb-dark")==="1");
  const [search,setSearch]=useState("");
  const [filter,setFilter]=useState("Alle");
  const [done,setDone]=useState(()=>readSet("stb-done"));
  const [plan,setPlan]=useState(()=>readSet("stb-plan"));
  const [points,setPoints]=useState(25);
  const [quiz,setQuiz]=useState(null);
  const [answer,setAnswer]=useState(null);
  const [score,setScore]=useState(0);
  useEffect(()=>{document.documentElement.dataset.theme=dark?"dark":"light";localStorage.setItem("stb-dark",dark?"1":"0")},[dark]);
  useEffect(()=>localStorage.setItem("stb-done",JSON.stringify([...done])),[done]);
  useEffect(()=>localStorage.setItem("stb-plan",JSON.stringify([...plan])),[plan]);
  const shown=useMemo(()=>modules.filter(m=>(filter==="Alle"||m.area===filter)&&(`${m.title} ${m.law} ${m.area}`.toLowerCase().includes(search.toLowerCase()))),[filter,search]);
  const pct=Math.round(done.size/modules.length*100);
  const toggle=(set,id)=>set(old=>{const next=new Set(old);next.has(id)?next.delete(id):next.add(id);return next});
  const q=typeof quiz==="number"?questions[quiz]:null;
  const choose=i=>{if(answer!==null)return;setAnswer(i);if(i===q[2])setScore(s=>s+1)};
  const next=()=>{if(quiz===questions.length-1)setQuiz("result");else{setQuiz(quiz+1);setAnswer(null)}};
  const nav=[["home","⌂","Übersicht"],["learn","▤","Lernmodule"],["schema","◎","Schema"],["train","☑","Training"],["plan","✓","Lernplan"]];
  return <div className="app">
    <header><button className="brand" onClick={()=>setView("home")}><b>StB</b><span><strong>Examenscampus</strong><small>Steuerberaterexamen · Klausur 3</small></span></button><div className="actions"><label>⌕<input value={search} onChange={e=>setSearch(e.target.value)} onFocus={()=>setView("learn")} placeholder="Thema oder Fundstelle suchen …"/></label><button className="icon" onClick={()=>setDark(!dark)}>{dark?"☀":"◐"}</button></div></header>
    <section className="tabs"><button onClick={()=>alert("Klausur 1 folgt später.")}>01 <strong>Verfahrensrecht</strong><small>folgt später</small></button><button onClick={()=>alert("Klausur 2 folgt später.")}>02 <strong>Ertragsteuern</strong><small>folgt später</small></button><button className="active">03 <strong>Buchführung & Bilanzwesen</strong><small>6 Stunden · 100 Punkte</small></button></section>
    <aside><nav>{nav.map(n=><button key={n[0]} className={view===n[0]?"active":""} onClick={()=>setView(n[0])}><i>{n[1]}</i><span>{n[2]}</span></button>)}</nav><div className="pace"><small>PRÜFUNGSTAKT</small><strong>3,6 Minuten</strong><p>pro Punkt. Zeit nach Punkten verteilen.</p></div></aside>
    <main>
      {view==="home"&&<><div className="heading"><div><span className="eyebrow">Klausur 3 · Buchführung und Bilanzwesen</span><h1>Dein Bilanz-Cockpit</h1><p>Strukturiert lernen, prüfen und wiederholen – getrennt nach Einzelunternehmen, Personengesellschaft und Kapitalgesellschaft.</p></div><em>Lernbasis 2026</em></div><div className="heroGrid"><article className="hero"><span>UNIVERSALSCHEMA</span><h2>WER? → WAS? → WIE VIEL? → WOHIN?</h2><p>Vier Leitfragen für jeden Einzelsachverhalt. Damit sicherst du Ansatz-, Bewertungs- und Technikpunkte.</p><button onClick={()=>setView("schema")}>Schema öffnen</button><button className="ghost" onClick={()=>setView("learn")}>Module ansehen</button></article><article className="card progress"><div className="ring" style={{"--p":pct+"%"}}><b>{pct}%</b></div><h3>{done.size} von {modules.length} Modulen</h3><p>Der Fortschritt bleibt lokal im Browser gespeichert.</p></article></div><section className="section"><span className="eyebrow">Klausuraufbau</span><h2>Die drei typischen Teile</h2><div className="areas">{[["EU","Einzelunternehmen","Aktiva, Passiva, AfA, Rückstellungen, § 6b und § 7g EStG."],["PersG","Personengesellschaft","Gesamthand, Sonderbetriebsvermögen und Ergänzungsbilanz."],["KapG","Kapitalgesellschaft","Eigenkapital, Ausschüttungen, vGA und verdeckte Einlage."]].map(a=><article className="card area" key={a[0]}><b>{a[0]}</b><h3>{a[1]}</h3><p>{a[2]}</p><button onClick={()=>{setFilter(a[0]);setView("learn")}}>Module öffnen →</button></article>)}</div></section></>}
      {view==="learn"&&<><div className="heading"><div><span className="eyebrow">Wissensbasis</span><h1>Lernmodule Bilanzen</h1><p>Suche Fundstellen und hake beherrschte Themen ab.</p></div><em>{shown.length} Treffer</em></div><div className="filters card">{["Alle","EU","PersG","KapG","Technik"].map(x=><button className={filter===x?"active":""} onClick={()=>setFilter(x)} key={x}>{x}</button>)}</div><div className="moduleList">{shown.map(m=><label className={`card module ${done.has(m.id)?"done":""}`} key={m.id}><input type="checkbox" checked={done.has(m.id)} onChange={()=>toggle(setDone,m.id)}/><div><span>{m.area}</span><h3>{m.title}</h3><p>{m.law}</p></div></label>)}</div></>}
      {view==="schema"&&<><div className="heading"><div><span className="eyebrow">Universalschema</span><h1>Sechs Schritte. Immer dieselbe Reihenfolge.</h1></div></div><div className="schema">{[["1","WER?","Zurechnung"],["2","WAS?","Ansatz"],["3","HB","Handelsbilanz"],["4","StB","Steuerbilanz"],["5","WIE VIEL?","Bewertung"],["6","WOHIN?","Technik"]].map(s=><article className="card step" key={s[0]}><b>{s[0]}</b><span>{s[1]}</span><h2>{s[2]}</h2><p>Zurechnung, Ansatz, Bewertung und technische Umsetzung klar und getrennt darstellen.</p></article>)}</div><article className="card formula"><b>Prüfungssatz:</b> Zurechnung → Ansatz HB → Ansatz StB → Bewertung → Bilanzposten → Buchung → Gewinnauswirkung.</article></>}
      {view==="train"&&<><div className="heading"><div><span className="eyebrow">Aktives Abrufen</span><h1>Prüfungstraining</h1></div></div><div className="training"><article className="card quiz">{quiz===null&&<div className="center"><h2>Bilanz-Check</h2><p>{questions.length} Fragen mit direkter Begründung.</p><button onClick={()=>{setQuiz(0);setScore(0);setAnswer(null)}}>Training starten</button></div>}{typeof quiz==="number"&&<><div className="meta"><span>Frage {quiz+1}/{questions.length}</span><span>{score} richtig</span></div><h2>{q[0]}</h2><div className="options">{q[1].map((x,i)=><button key={x} className={answer===null?"":i===q[2]?"right":answer===i?"wrong":""} onClick={()=>choose(i)}>{x}</button>)}</div>{answer!==null&&<div className="feedback"><b>{answer===q[2]?"Richtig.":"Noch nicht."}</b> {q[3]}<button onClick={next}>{quiz===questions.length-1?"Ergebnis":"Nächste Frage"}</button></div>}</>}{quiz==="result"&&<div className="center"><h2>{score} von {questions.length} richtig</h2><p>Wiederhole offene Themen und trainiere anschließend unter Zeitdruck.</p><button onClick={()=>{setQuiz(0);setScore(0);setAnswer(null)}}>Noch einmal</button></div>}</article><section><article className="card calc"><span className="eyebrow">3,6-Minuten-Regel</span><h2>Zeitbudget</h2><input type="number" min="1" max="100" value={points} onChange={e=>setPoints(e.target.value)}/><strong>{Math.round(points*3.6)} Minuten</strong><p>{Math.floor(points*3.6/60)} Std. {Math.round(points*3.6)%60} Min.</p></article></section></div></>}
      {view==="plan"&&<><div className="heading"><div><span className="eyebrow">Vorbereitung</span><h1>8-Wochen-Plan</h1></div><em>{plan.size}/8 erledigt</em></div><div className="weekList">{weeks.map((w,i)=><label className={`card week ${plan.has(i)?"done":""}`} key={w}><input type="checkbox" checked={plan.has(i)} onChange={()=>toggle(setPlan,i)}/><b>W{i+1}</b><div><h3>{w}</h3><p>Wissen aufbauen, Fälle lösen und Ergebnisse aktiv wiederholen.</p></div></label>)}</div></>}
    </main>
  </div>
}
