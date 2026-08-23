import "../data/k3-persg-tag2-register.js";
import "../data/k3-persg-tag3-register.js";
import React, { useEffect, useMemo, useState } from "react";
import { laden, sichern, useFortschritt, anteil } from "../lib/fortschritt";
import { useAnsichtVerlauf } from "../lib/ansicht-verlauf";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K3Fachleiste from "./K3Fachleiste";
import { IconCockpit, IconModule, IconFaelle, IconSchema, IconTraining } from "./Icons";
import { IconKlausur } from "./Klausurmodus";
import K3PersGVisuals from "./K3PersGVisuals";
import K3PersGTag2Visuals from "./K3PersGTag2Visuals";
import K3PersGTag3Visuals from "./K3PersGTag3Visuals";
import {
  persgQuelle, persgBereiche, persgBereichName, persgSeitenplan,
  persgModule, persgFaelle, persgSchemata, persgQuizfragen,
} from "../data/k3-persg-tag1";
import "./kst.css";
import "./k3-persg.css";

const nav = [
  ["cockpit", "Cockpit", IconCockpit],
  ["module", "Personengesellschaften", IconModule],
  ["faelle", "Originalfälle", IconFaelle],
  ["klausur", "Klausurmodus", IconKlausur],
  ["schema", "Prüfschema", IconSchema],
  ["training", "Training", IconTraining],
  ["fallsammlung", "Fallsammlung", IconFaelle],
  ["hausaufgaben", "Hausaufgaben PersG", IconModule],
];
const modulIds = new Set(persgModule.map((m) => m.id));
const sourceLabel = (m) => {
  const base = `Tag ${m.sourceTag || 1} · PDF-S. ${(m.sourcePages || []).join(", ")}`;
  return m.capturePages?.length ? `${base} · Einheit S. ${m.capturePages.join(", ")}` : base;
};

function PersGVisual({ type }) {
  return <><K3PersGVisuals type={type} /><K3PersGTag2Visuals type={type} /><K3PersGTag3Visuals type={type} /></>;
}

export default function K3PersGCampus({ onKlausurwechsel, onFachwechsel }) {
  const verlauf = useAnsichtVerlauf();
  const [modulId, setModulId] = useState(null);
  const [suche, setSuche] = useState("");
  const [bereich, setBereich] = useState("alle");
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  const fortschritt = useFortschritt("stb-k3-persg-erledigt", modulIds);
  const erledigt = fortschritt.werte;

  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [verlauf.ansicht, modulId]);

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return persgModule.filter((m) => {
      if (bereich !== "alle" && m.area !== bereich) return false;
      if (!q) return true;
      return [m.title, m.law, ...(m.intro || []), ...(m.goals || []), ...(m.scheme || []), ...(m.normchain || []), ...(m.sourceNotes || []), m.merksatz]
        .filter(Boolean).join(" ").toLowerCase().includes(q);
    });
  }, [bereich, suche]);

  const modul = persgModule.find((m) => m.id === modulId) || null;
  const quote = anteil(erledigt.length, persgModule.length);
  const ansichtOeffnen = (id) => { setModulId(null); verlauf.oeffnen(id); };
  const modulOeffnen = (id) => { setModulId(id); if (verlauf.ansicht !== "module") verlauf.oeffnen("module"); };
  const fallOeffnen = (id) => {
    setModulId(null);
    if (verlauf.ansicht !== "faelle") verlauf.oeffnen("faelle");
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  };

  return <div className="kst-campus persg-campus">
    <CampusTopbar klausur="3" marke="3" name="Examenscampus Klausur 3"
      untertitel="Buchführung und Bilanzwesen · Personengesellschaften"
      aufCockpit={() => ansichtOeffnen("cockpit")} navZurueck={verlauf.zurueck} navVor={verlauf.vor}
      zurueckMoeglich={verlauf.zurueckMoeglich} vorMoeglich={verlauf.vorMoeglich}
      suche={suche} sucheSetzen={(v) => { setSuche(v); setModulId(null); if (verlauf.ansicht !== "module") verlauf.oeffnen("module"); }}
      suchePlatzhalter="PersG-Modul, Norm oder Stichwort suchen" sucheAria="Personengesellschafts-Inhalte durchsuchen"
      dunkel={dunkel} dunkelUmschalten={() => setDunkel((d) => !d)} />
    <KlausurenLeiste aktiv="k3" aufCockpit={() => ansichtOeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />
    <K3Fachleiste aktiv="persg" onWechsel={onFachwechsel} />

    <aside className="rail"><nav className="rail__nav" aria-label="PersG-Hauptnavigation">
      {nav.map(([id,label,Icon]) => <button key={id} className="rail__link" aria-current={verlauf.ansicht===id?"true":undefined} onClick={() => ansichtOeffnen(id)}><Icon />{label}</button>)}
    </nav><div className="rail__box"><b>PersG-Fortschritt</b><strong>{erledigt.length} / {persgModule.length}</strong><p>Module als bearbeitet markiert</p>{erledigt.length > 0 && <button className="rail__box-reset" onClick={() => window.confirm("PersG-Fortschritt zurücksetzen?") && fortschritt.zuruecksetzen()}>zurücksetzen</button>}</div></aside>

    <main className="page">
      {verlauf.ansicht === "cockpit" && <Cockpit quote={quote} erledigt={erledigt} modulOeffnen={modulOeffnen} ansichtOeffnen={ansichtOeffnen} setBereich={(x) => { setBereich(x); ansichtOeffnen("module"); }} />}
      {verlauf.ansicht === "module" && !modul && <Modulliste liste={gefiltert} bereich={bereich} setBereich={setBereich} suche={suche} erledigt={erledigt} umschalten={fortschritt.umschalten} modulOeffnen={modulOeffnen} />}
      {verlauf.ansicht === "module" && modul && <Modulseite modul={modul} erledigt={erledigt} umschalten={fortschritt.umschalten} modulOeffnen={modulOeffnen} fallOeffnen={fallOeffnen} zurueck={() => setModulId(null)} />}
      {verlauf.ansicht === "faelle" && <Fallseite modulOeffnen={modulOeffnen} />}
      {verlauf.ansicht === "klausur" && <KlausurmodusPersG fallOeffnen={fallOeffnen} />}
      {verlauf.ansicht === "schema" && <Schemaseite modulOeffnen={modulOeffnen} />}
      {verlauf.ansicht === "training" && <Training />}
      {verlauf.ansicht === "fallsammlung" && <Platzhalter titel="Fallsammlung Personengesellschaften" text="Die eigenständige PersG-Fallsammlung wird ergänzt, sobald weitere angekündigte Fallunterlagen vorliegen. Die Unterrichtsfälle aus Tag 1 bis 3 sind bereits unter „Originalfälle“ vollständig querverschaltet." />}
      {verlauf.ansicht === "hausaufgaben" && <Platzhalter titel="Hausaufgaben Personengesellschaften" text="Hausaufgaben werden als eigener Reiter mit aufklappbaren Lösungen ergänzt, sobald die Unterlagen vorliegen." />}
    </main>
  </div>;
}

function Cockpit({ quote, erledigt, modulOeffnen, ansichtOeffnen, setBereich }) {
  const naechstes = persgModule.find((m) => !erledigt.includes(m.id)) || persgModule[0];
  const themen = persgBereiche.filter((x) => x.id !== "alle");
  const tag1Pages = persgSeitenplan.filter((s) => !s.tag || s.tag === 1);
  const tag2Pages = persgSeitenplan.filter((s) => s.tag === 2);
  const tag3Pages = persgSeitenplan.filter((s) => s.tag === 3);
  const captureRanges = persgQuelle.tag3CaptureRanges || [];
  return <>
    <div className="cockpit">
      <section className="these"><span className="kicker">Klausur 3 · Personengesellschaften · Tag 1 + 2 + 3</span>
        <h2>Vom Mitunternehmerbegriff bis zur <em>§-6-Abs.-5- und Ergänzungsbilanztechnik.</em></h2>
        <p>{persgQuelle.pages} Kernseiten der drei Unterrichtstage sind inzwischen in {persgModule.length} Lernmodule, {persgFaelle.length} Originalfälle und {persgSchemata.length} digitale Prüfschemata überführt. Tag 3 ergänzt § 6 Abs. 5 EStG, Kapitalkonto-I/II-Fälle, Satz 4, Trennungstheorie, Statusregeln und den großen AfA-/Ergänzungsbilanzfall. Zusätzlich ist die 459-seitige Einheitsfassung lückenlos über Quellencluster erfasst.</p>
        <div className="these__aktionen"><button className="btn" onClick={() => modulOeffnen(naechstes.id)}>Weiterlernen</button><button className="btn btn--linie" onClick={() => ansichtOeffnen("schema")}>Prüfschemata öffnen</button></div>
        <p className="persg-source-note">Quellen: Tag 1 · 14 Seiten · 31.07.2026 · Tag 2 · 39 Seiten · 04.08.2026 · Tag 3 · 10 Seiten · 05.08.2026 · Einheitsfassung Tag 3 · 459 Seiten.</p>
      </section>
      <section className="panel fortschritt"><div className="ring" style={{"--p":`${quote}%`}}><b>{quote}%</b></div><h3>Bearbeitungsstand</h3><p>{erledigt.length} von {persgModule.length} Modulen abgehakt</p></section>
    </div>
    <section className="abschnitt"><span className="kicker">Nächster Schritt</span><button className="weiter" onClick={() => modulOeffnen(naechstes.id)}><span className="kicker">{persgBereichName[naechstes.area]} · Modul {naechstes.id}</span><h3>{naechstes.title}</h3><p>{naechstes.intro[0]}</p><span className="norm">{naechstes.law}</span></button></section>
    <section className="abschnitt"><h2>Oberthemen Personengesellschaften</h2><div className="raster raster--3">{themen.map((t) => {const mods=persgModule.filter((m)=>m.area===t.id);const done=mods.filter((m)=>erledigt.includes(m.id)).length;return <article className="bereich" key={t.id}><b>{mods.length} Module</b><h3>{t.label}</h3><p>{bereichText[t.id]}</p><div className="bereich__balken"><span style={{width:`${anteil(done,mods.length)}%`}} /></div><small className="bereich__stand">{done} von {mods.length} bearbeitet</small><button onClick={() => setBereich(t.id)}>Module öffnen →</button></article>;})}</div></section>
    <section className="abschnitt"><h2>Quellenabdeckung</h2><div className="raster raster--3">
      <div className="panel"><span className="kicker">Tag 1</span><h3>{tag1Pages.length} / 14 Seiten</h3><div className="persg-chiprow">{tag1Pages.map((s)=><span key={`t1-${s.page}`} className="persg-chip">S. {s.page} · M{s.moduleId}</span>)}</div></div>
      <div className="panel"><span className="kicker">Tag 2</span><h3>{tag2Pages.length} / 39 Seiten</h3><div className="persg-chiprow">{tag2Pages.map((s)=><span key={`t2-${s.pdfPage}`} className="persg-chip">S. {s.pdfPage} · M{s.moduleId}</span>)}</div></div>
      <div className="panel"><span className="kicker">Tag 3 · Tagesnotiz</span><h3>{tag3Pages.length} / 10 Seiten</h3><div className="persg-chiprow">{tag3Pages.map((s)=><span key={`t3-${s.pdfPage}`} className="persg-chip">S. {s.pdfPage} · M{s.moduleId}</span>)}</div></div>
    </div><div className="panel" style={{marginTop:"1rem"}}><span className="kicker">Tag 3 · Personengesellschaften in Bilanz, 3. Einheit</span><h3>459 / 459 Seiten erfasst</h3><p className="persg-source-note">Wiederholungs- und Scrollframes werden nicht als künstliche Doppelmodule angelegt, sondern lückenlos dem fachlich passenden Quellencluster zugeordnet.</p><div className="persg-chiprow">{captureRanges.map((r)=><span key={`${r.start}-${r.end}`} className="persg-chip">S. {r.start}{r.end!==r.start?`–${r.end}`:""} · {r.moduleIds.length?r.moduleIds.map((id)=>`M${id}`).join("/"):"technisch"}</span>)}</div></div></section>
  </>;
}

const bereichText = {
  Grundlagen:"§ 15 EStG, Abfärbung/Prägung, Mitunternehmerstellung, MU-BAS und mittelbare Mitunternehmer.",
  Gewinn:"Zweistufige Gewinnermittlung, Gewinnverteilung, Vergütungen und Kapitalkonten.",
  BV:"Gesamthandsvermögen, Privatvermögen und steuerliche Zuordnung.",
  SBV:"SBV I/II, Sonderbilanz, korrespondierende Bilanzierung und Konkurrenzfragen.",
  Spiegel:"Transparenzprinzip, Spiegelbildmethode und Abstimmung von GHB-, Ergänzungs- und Sonderbilanz.",
  Verlust:"§ 15a EStG, ausgleichsfähige/verrechenbare Verluste und außerbilanzielle Merkposten.",
  Sonderfall:"Zebragesellschaften sowie doppelstöckige Personengesellschaften und Durchstockung.",
  Uebertragung:"§ 6b EStG, § 6 Abs. 5 EStG, Einbringung, Sperrfristen, Trennungstheorie und Ergänzungsbilanztechnik.",
};

function Modulliste({ liste, bereich, setBereich, suche, erledigt, umschalten, modulOeffnen }) {
  return <><div className="pagehead"><div><span className="kicker">Klausur 3 · Personengesellschaften</span><h1>Lernmodule · 1. + 2. + 3. Unterrichtstag</h1><p className="lead">Gemeinsame Lernstrecke aus 63 Kernseiten plus 459 Seiten Einheitsfassung – von den Grundlagen bis § 6 Abs. 5, Statusregeln, Ergänzungsbilanz und AfA-Korrektur.</p></div><span className="kicker">{liste.length} Inhalte</span></div>
    <div className="persg-filter">{persgBereiche.map((b)=><button key={b.id} aria-pressed={bereich===b.id} onClick={()=>setBereich(b.id)}>{b.label}</button>)}</div>{suche&&<p className="persg-source-note">Suche: „{suche}“</p>}
    <div className="persg-module-grid">{liste.map((m)=><article className="persg-module-card" key={m.id} onClick={()=>modulOeffnen(m.id)}><button className={`persg-check ${erledigt.includes(m.id)?"done":""}`} aria-label={`${m.title} als bearbeitet markieren`} onClick={(e)=>{e.stopPropagation();umschalten(m.id);}}/><div><div className="persg-meta"><span>{persgBereichName[m.area]}</span><span>Modul {m.id}</span><span>{sourceLabel(m)}</span><span>{m.minutes} Min.</span></div><h3>{m.title}</h3><p>{m.intro[0]}</p><div className="persg-chiprow"><span className="persg-chip">{m.law}</span></div></div><span className="persg-open">öffnen →</span></article>)}</div></>;
}

function Modulseite({ modul, erledigt, umschalten, modulOeffnen, fallOeffnen, zurueck }) {
  const pos=persgModule.findIndex((m)=>m.id===modul.id), prev=persgModule[pos-1], next=persgModule[pos+1];
  const faelle=persgFaelle.filter((f)=>(f.moduleIds||[]).includes(modul.id));
  return <><div className="persg-lesson-head"><div><button className="zurueck" onClick={zurueck}>← alle PersG-Module</button><span className="kicker">{persgBereichName[modul.area]} · Modul {modul.id} · {sourceLabel(modul)}</span><h1>{modul.title}</h1><p className="lead">{modul.law}</p></div><div className="persg-lesson-actions"><button className="btn btn--linie" onClick={()=>umschalten(modul.id)}>{erledigt.includes(modul.id)?"✓ bearbeitet":"als bearbeitet markieren"}</button></div></div>
    <PersGVisual type={modul.visual}/>
    <section className="persg-block"><h2>Einordnung</h2>{modul.intro.map((p)=><p key={p}>{p}</p>)}</section>
    <section className="persg-block"><h2>Lernziele</h2><ul className="persg-list">{modul.goals.map((x)=><li key={x}>{x}</li>)}</ul></section>
    <section className="persg-block"><h2>Prüfreihenfolge</h2><ol className="persg-list">{modul.scheme.map((x)=><li key={x}>{x}</li>)}</ol><div className="persg-normchain">{(modul.normchain||[]).map((n)=><span key={n}>{n}</span>)}</div></section>
    {modul.sourceNotes?.length>0&&<section className="persg-block"><h2>Quellenhinweis Einheitsfassung</h2><ul className="persg-list">{modul.sourceNotes.map((x)=><li key={x}>{x}</li>)}</ul></section>}
    {modul.examples&&<section className="persg-block"><h2>Anwendungsvarianten</h2><div className="persg-mini-cases">{modul.examples.map((e)=><article key={e.label}><b>{e.label}</b><p>{e.text}</p><strong>{e.result}</strong></article>)}</div></section>}
    {modul.example&&<section className="persg-block"><h2>{modul.example.title}</h2><div className="persg-facts"><p>{modul.example.facts}</p></div><ol className="persg-list">{(modul.example.solution||[]).map((x)=><li key={x}>{x}</li>)}</ol><div className="persg-result"><b>Ergebnis</b><p>{modul.example.result}</p></div></section>}
    {modul.followUp&&<section className="persg-block"><h2>Weiterführende Zuordnung</h2><div className="persg-inline-chips">{modul.followUp.map((x)=><span key={x}>{x}</span>)}</div></section>}
    <section className="persg-block persg-merksatz"><h2>Merksatz</h2><p>{modul.merksatz}</p></section>
    {faelle.length>0&&<div className="persg-case-link"><div><span className="kicker">Passende Originalfälle</span><b>{faelle.map((f)=>`Fall ${f.nr}: ${f.title}`).join(" · ")}</b></div><div className="persg-inline-chips">{faelle.map((f)=><button key={f.id} onClick={()=>fallOeffnen(f.id)}>Fall {f.nr} öffnen →</button>)}</div></div>}
    <div className="persg-navcards"><button disabled={!prev} onClick={()=>prev&&modulOeffnen(prev.id)}>{prev?`← Modul ${prev.id} · ${prev.title}`:"Beginn"}</button><button disabled={!next} onClick={()=>next&&modulOeffnen(next.id)}>{next?`Modul ${next.id} · ${next.title} →`:"Ende Tag 3"}</button></div></>;
}

function Fallseite({ modulOeffnen }) {
  return <><div className="pagehead"><div><span className="kicker">Klausur 3 · Personengesellschaften</span><h1>Originalfälle</h1><p className="lead">Unterrichtsfälle aus Tag 1 bis 3. Sachverhalt und Aufgaben sind sichtbar; die Lösung bleibt standardmäßig zugeklappt.</p></div><span className="kicker">{persgFaelle.length} Fälle</span></div><div className="persg-faelle">{persgFaelle.map((f)=>{const visual=persgModule.find((m)=>(f.moduleIds||[]).includes(m.id)&&m.visual)?.visual;return <article className="persg-fall" id={f.id} key={f.id}><span className="kicker">Fall {f.nr} · {sourceLabel(f)}</span><h2>{f.title}</h2><p className="lead">{f.law}</p><div className="persg-facts">{f.facts.map((x)=><p key={x}>{x}</p>)}</div><section className="persg-block"><h3>Aufgabe</h3><ol className="persg-list">{f.tasks.map((x)=><li key={x}>{x}</li>)}</ol></section><details><summary>Lösung anzeigen</summary><ol className="persg-list">{f.solution.map((x)=><li key={x}>{x}</li>)}</ol><PersGVisual type={visual}/><div className="persg-result"><b>Ergebnis</b><p>{f.result}</p></div></details><div className="persg-crosslinks"><span className="kicker">Passende Lernmodule</span>{f.moduleIds.map((id)=><button key={id} onClick={()=>modulOeffnen(id)}>Modul {id} ↗</button>)}</div></article>;})}</div></>;
}

function KlausurmodusPersG({ fallOeffnen }) {
  const [sekunden,setSekunden]=useState(60*60),[laeuft,setLaeuft]=useState(false);
  useEffect(()=>{if(!laeuft||sekunden<=0)return undefined;const t=setInterval(()=>setSekunden((s)=>Math.max(0,s-1)),1000);return()=>clearInterval(t);},[laeuft,sekunden]);
  const mm=String(Math.floor(sekunden/60)).padStart(2,"0"),ss=String(sekunden%60).padStart(2,"0");
  return <><div className="pagehead"><div><span className="kicker">Klausurmodus · Personengesellschaften</span><h1>Originalfall unter Zeitdruck</h1><p className="lead">Wähle einen Unterrichtsfall und bearbeite ihn zunächst ohne geöffnete Lösung.</p></div></div><section className="panel"><span className="kicker">Timer</span><h2>{mm}:{ss}</h2><div className="these__aktionen"><button className="btn" onClick={()=>setLaeuft((v)=>!v)}>{laeuft?"Pause":"Start"}</button><button className="btn btn--linie" onClick={()=>{setLaeuft(false);setSekunden(60*60);}}>Reset</button></div><div className="persg-chiprow">{persgFaelle.map((f)=><button className="btn btn--linie" key={f.id} onClick={()=>fallOeffnen(f.id)}>Fall {f.nr} · {f.title}</button>)}</div></section></>;
}

function Schemaseite({ modulOeffnen }) {
  return <><div className="pagehead"><div><span className="kicker">Klausur 3 · Personengesellschaften</span><h1>Prüfschemata</h1><p className="lead">Schemata aus drei Unterrichtstagen – digital nachgebaut und direkt mit den Lernmodulen verknüpft.</p></div><span className="kicker">{persgSchemata.length} Schemata</span></div><div className="persg-schema-grid">{persgSchemata.map((s)=><section key={s.id} id={`persg-schema-${s.id}`} className="persg-schema-card"><div className="persg-schema-head"><div><span className="kicker">{s.law}</span><h2>{s.title}</h2></div><div>{s.moduleIds.map((id)=><button key={id} onClick={()=>modulOeffnen(id)}>Modul {id} ↗</button>)}</div></div><PersGVisual type={s.visual}/></section>)}</div></>;
}

function Training() {
  const [antworten,setAntworten]=useState({});
  return <><div className="pagehead"><div><span className="kicker">Training · Tag 1 + 2 + 3</span><h1>PersG-Schnellcheck</h1><p className="lead">Fragen aus 63 Kernseiten sowie den fachlichen Quellenclustern der 459-seitigen Tag-3-Einheitsfassung.</p></div></div><div className="persg-training">{persgQuizfragen.map((q,i)=>{const chosen=antworten[i];if(q.options){return <article className="persg-quiz" key={`${i}-${q.q}`}><span className="kicker">Frage {i+1}</span><h3>{q.q}</h3><div className="persg-options">{q.options.map((o,oi)=>{const status=chosen==null?"":oi===q.answer?"good":oi===chosen?"bad":"";return <button className={status} key={o} onClick={()=>setAntworten((a)=>({...a,[i]:oi}))}>{o}</button>;})}</div>{chosen!=null&&<p className="persg-explanation"><b>{chosen===q.answer?"Richtig.":"Noch nicht."}</b> {q.explanation}</p>}</article>;}return <article className="persg-quiz" key={`${i}-${q.q}`}><span className="kicker">Frage {i+1}</span><h3>{q.q}</h3><button className="btn btn--linie" onClick={()=>setAntworten((a)=>({...a,[i]:!a[i]}))}>{chosen?"Antwort ausblenden":"Antwort anzeigen"}</button>{chosen&&<p className="persg-explanation"><b>Antwort:</b> {q.a}</p>}</article>;})}</div></>;
}

function Platzhalter({ titel, text }) { return <><div className="pagehead"><div><span className="kicker">Klausur 3 · Personengesellschaften</span><h1>{titel}</h1></div></div><section className="panel"><p>{text}</p></section></>; }
