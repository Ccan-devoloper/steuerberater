import React, { useEffect, useMemo, useState } from "react";
import euModules from "./data/modules-eu";
import persgModules from "./data/modules-persg";
import kapgModules from "./data/modules-kapg";
import technikModules from "./data/modules-technik";
import { researchNote, sourceCatalog } from "./data/sources";

const modules = [...euModules, ...persgModules, ...kapgModules, ...technikModules];
const areaNames = { EU: "Einzelunternehmen", PersG: "Personengesellschaft", KapG: "Kapitalgesellschaft", Technik: "Technik & Querschnitt" };
const questions = [
  ["Welche Frage steht im Universalschema zuerst?", ["Bewertung", "Zurechnung", "Buchung", "AfA"], 1, "Zuerst wird die steuerliche Zurechnung geklärt."],
  ["Welche Norm regelt das wirtschaftliche Eigentum?", ["§ 39 AO", "§ 7g EStG", "§ 249 HGB", "§ 27 KStG"], 0, "§ 39 AO ist die zentrale Zurechnungsnorm."],
  ["Wie viel Zeit ergeben 25 Punkte?", ["60", "75", "90", "100 Minuten"], 2, "25 × 3,6 Minuten = 90 Minuten."],
  ["Wo wird Sonderbetriebsvermögen abgebildet?", ["Gesamthandsbilanz", "Sonderbilanz", "Nur außerbilanziell", "Privatvermögen"], 1, "Sonderbetriebsvermögen gehört in die Sonderbilanz."],
  ["Welche Norm betrifft die Reinvestitionsrücklage?", ["§ 6b EStG", "§ 8 KStG", "§ 15a EStG", "§ 5 UStG"], 0, "Die Übertragung stiller Reserven ist in § 6b EStG geregelt."],
  ["Womit endet jeder Einzelsachverhalt?", ["Nur mit einer Norm", "Nur mit dem Ergebnis", "Mit Technik und Gewinnauswirkung", "Mit einer neuen Frage"], 2, "Bilanzposten, Buchung und Gewinnauswirkung sichern Technikpunkte."],
];
const weeks = ["Grundlagen und Universalschema", "Aktivseite und AfA", "Passivseite und Rückstellungen", "§ 6b, R 6.6 und § 7g EStG", "Personengesellschaft", "Kapitalgesellschaft", "Technik und Zeitmanagement", "Klausursimulation"];
const readSet = (key) => { try { return new Set(JSON.parse(localStorage.getItem(key) || "[]")); } catch { return new Set(); } };

function ModuleDetail({ module, done, onToggle, onBack, onOpen }) {
  const index = modules.findIndex((item) => item.id === module.id);
  const previous = modules[index - 1];
  const next = modules[index + 1];
  const sources = module.sourceIds.map((id) => sourceCatalog[id]).filter(Boolean);

  return <article className="lesson">
    <button className="backButton" onClick={onBack}>← Zurück zu den Lernmodulen</button>
    <header className="lessonHero card">
      <div>
        <div className="lessonMeta"><span>{areaNames[module.area]}</span><span>{module.difficulty}</span><span>ca. {module.minutes} Min.</span></div>
        <h1>{module.title}</h1>
        <p className="lawLine">{module.law}</p>
      </div>
      <button className={done ? "masteryButton mastered" : "masteryButton"} onClick={() => onToggle(module.id)}>
        {done ? "✓ Beherrscht" : "Als beherrscht markieren"}
      </button>
    </header>

    <section className="lessonGrid">
      <div className="lessonMain">
        <section className="lessonSection card">
          <span className="sectionNumber">01</span><div><span className="eyebrow">Einführung</span><h2>Worum geht es?</h2></div>
          {module.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>

        <section className="lessonSection card">
          <span className="sectionNumber">02</span><div><span className="eyebrow">Lernziele</span><h2>Das solltest du danach können</h2></div>
          <ul className="checkList">{module.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
        </section>

        <section className="lessonSection card">
          <span className="sectionNumber">03</span><div><span className="eyebrow">Prüfungsschema</span><h2>So gehst du in der Klausur vor</h2></div>
          <ol className="schemeList">{module.scheme.map((step, i) => <li key={step}><b>{String(i + 1).padStart(2, "0")}</b><span>{step}</span></li>)}</ol>
        </section>

        <section className="lessonSection exampleCard">
          <span className="sectionNumber">04</span><div><span className="eyebrow">Beispiel</span><h2>{module.example.title}</h2></div>
          <div className="facts"><strong>Sachverhalt</strong><p>{module.example.facts}</p></div>
          <div className="solution"><strong>Lösungsschritte</strong><ol>{module.example.solution.map((step) => <li key={step}>{step}</li>)}</ol></div>
          <div className="result"><strong>Ergebnis</strong><p>{module.example.result}</p></div>
        </section>

        <section className="lessonSection card">
          <span className="sectionNumber">05</span><div><span className="eyebrow">Examensbezug</span><h2>Warum das klausurrelevant ist</h2></div>
          <ul>{module.exam.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="lessonSection warningCard">
          <span className="sectionNumber">06</span><div><span className="eyebrow">Klausurfallen</span><h2>Darauf besonders achten</h2></div>
          <ul>{module.traps.map((trap) => <li key={trap}>{trap}</li>)}</ul>
        </section>

        <section className="lessonSection card sourcesSection">
          <span className="sectionNumber">07</span><div><span className="eyebrow">Quellen und Vertiefung</span><h2>Tiefer einlesen</h2></div>
          <p className="sourceIntro">Die folgenden Quellen wurden für dieses Modul ausgewertet. Amtliche Quellen stehen zuerst; Anbieter- und Klausurauswertungen dienen der Examenseinordnung.</p>
          <ol className="sourceList">{sources.map((source, i) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer"><b>[{i + 1}] {source.title}</b><span>{source.publisher}</span><small>{source.note}</small></a></li>)}</ol>
          <p className="legalNote">{researchNote}</p>
        </section>
      </div>

      <aside className="lessonAside">
        <div className="card lessonToc"><span className="eyebrow">Modulaufbau</span><a href="#lesson-top">Einführung</a><span>Lernziele</span><span>Prüfungsschema</span><span>Beispiel</span><span>Examensbezug</span><span>Quellen</span></div>
        <div className="card lessonProgress"><span className="eyebrow">Fortschritt</span><strong>{done ? "Modul abgeschlossen" : "Noch offen"}</strong><p>Markiere das Modul erst, wenn du Schema und Beispiel ohne Hilfe erklären kannst.</p></div>
      </aside>
    </section>

    <nav className="lessonNav">
      {previous ? <button onClick={() => onOpen(previous)}><small>Vorheriges Modul</small><strong>← {previous.title}</strong></button> : <span />}
      {next ? <button onClick={() => onOpen(next)}><small>Nächstes Modul</small><strong>{next.title} →</strong></button> : <span />}
    </nav>
  </article>;
}

export default function App() {
  const [view, setView] = useState("home");
  const [dark, setDark] = useState(localStorage.getItem("stb-dark") === "1");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Alle");
  const [selectedId, setSelectedId] = useState(null);
  const [done, setDone] = useState(() => readSet("stb-done"));
  const [plan, setPlan] = useState(() => readSet("stb-plan"));
  const [points, setPoints] = useState(25);
  const [quiz, setQuiz] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; localStorage.setItem("stb-dark", dark ? "1" : "0"); }, [dark]);
  useEffect(() => localStorage.setItem("stb-done", JSON.stringify([...done])), [done]);
  useEffect(() => localStorage.setItem("stb-plan", JSON.stringify([...plan])), [plan]);

  const selected = modules.find((module) => module.id === selectedId) || null;
  const shown = useMemo(() => modules.filter((module) => (filter === "Alle" || module.area === filter) && (`${module.title} ${module.law} ${module.area} ${module.intro.join(" ")}`.toLowerCase().includes(search.toLowerCase()))), [filter, search]);
  const pct = Math.round(done.size / modules.length * 100);
  const toggle = (setter, id) => setter((old) => { const next = new Set(old); next.has(id) ? next.delete(id) : next.add(id); return next; });
  const q = typeof quiz === "number" ? questions[quiz] : null;
  const choose = (i) => { if (answer !== null) return; setAnswer(i); if (i === q[2]) setScore((s) => s + 1); };
  const nextQuestion = () => { if (quiz === questions.length - 1) setQuiz("result"); else { setQuiz(quiz + 1); setAnswer(null); } };
  const nav = [["home", "⌂", "Übersicht"], ["learn", "▤", "Lernmodule"], ["schema", "◎", "Schema"], ["train", "☑", "Training"], ["plan", "✓", "Lernplan"]];
  const openModule = (module) => { setSelectedId(module.id); setView("learn"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const changeView = (nextView) => { setView(nextView); if (nextView !== "learn") setSelectedId(null); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const continueModule = modules.find((module) => !done.has(module.id)) || modules[0];

  return <div className="app" id="lesson-top">
    <header>
      <button className="brand" onClick={() => changeView("home")}><b>StB</b><span><strong>Examenscampus</strong><small>Steuerberaterexamen · Klausur 3</small></span></button>
      <div className="actions"><label>⌕<input value={search} onChange={(e) => setSearch(e.target.value)} onFocus={() => { setView("learn"); setSelectedId(null); }} placeholder="Thema, Norm oder Stichwort suchen …" /></label><button className="icon" onClick={() => setDark(!dark)}>{dark ? "☀" : "◐"}</button></div>
    </header>
    <section className="tabs"><button onClick={() => alert("Klausur 1 folgt später.")}>01 <strong>Verfahrensrecht</strong><small>folgt später</small></button><button onClick={() => alert("Klausur 2 folgt später.")}>02 <strong>Ertragsteuern</strong><small>folgt später</small></button><button className="active">03 <strong>Buchführung & Bilanzwesen</strong><small>6 Stunden · 100 Punkte</small></button></section>
    <aside><nav>{nav.map((item) => <button key={item[0]} className={view === item[0] ? "active" : ""} onClick={() => changeView(item[0])}><i>{item[1]}</i><span>{item[2]}</span></button>)}</nav><div className="pace"><small>PRÜFUNGSTAKT</small><strong>3,6 Minuten</strong><p>pro Punkt. Zeit nach Punkten verteilen.</p></div></aside>

    <main>
      {view === "home" && <>
        <div className="heading"><div><span className="eyebrow">Klausur 3 · Buchführung und Bilanzwesen</span><h1>Dein Bilanz-Cockpit</h1><p>Strukturiert lernen, prüfen und wiederholen – mit ausführlichen Modulen, Beispielen und Quellen.</p></div><em>20 recherchierte Module</em></div>
        <div className="heroGrid"><article className="hero"><span>UNIVERSALSCHEMA</span><h2>WER? → WAS? → WIE VIEL? → WOHIN?</h2><p>Vier Leitfragen für jeden Einzelsachverhalt. Damit sicherst du Ansatz-, Bewertungs- und Technikpunkte.</p><button onClick={() => changeView("schema")}>Schema öffnen</button><button className="ghost" onClick={() => { setSelectedId(null); setView("learn"); }}>Module ansehen</button></article><article className="card progress"><div className="ring" style={{ "--p": pct + "%" }}><b>{pct}%</b></div><h3>{done.size} von {modules.length} Modulen</h3><p>Der Fortschritt bleibt lokal im Browser gespeichert.</p></article></div>
        <section className="section"><span className="eyebrow">Weiterlernen</span><h2>Dein nächstes offenes Modul</h2><button className="continueCard card" onClick={() => openModule(continueModule)}><span>{areaNames[continueModule.area]}</span><h3>{continueModule.title}</h3><p>{continueModule.intro[0]}</p><strong>Modul öffnen →</strong></button></section>
        <section className="section"><span className="eyebrow">Klausuraufbau</span><h2>Die drei typischen Teile</h2><div className="areas">{[["EU", "Einzelunternehmen", "Aktiva, Passiva, AfA, Rückstellungen, § 6b und § 7g EStG."], ["PersG", "Personengesellschaft", "Gesamthand, Sonderbetriebsvermögen und Ergänzungsbilanz."], ["KapG", "Kapitalgesellschaft", "Eigenkapital, Ausschüttungen, vGA und verdeckte Einlage."]].map((area) => <article className="card area" key={area[0]}><b>{area[0]}</b><h3>{area[1]}</h3><p>{area[2]}</p><button onClick={() => { setFilter(area[0]); setSelectedId(null); setView("learn"); }}>Module öffnen →</button></article>)}</div></section>
      </>}

      {view === "learn" && (selected ? <ModuleDetail module={selected} done={done.has(selected.id)} onToggle={(id) => toggle(setDone, id)} onBack={() => setSelectedId(null)} onOpen={openModule} /> : <>
        <div className="heading"><div><span className="eyebrow">Wissensbasis</span><h1>Lernmodule Bilanzen</h1><p>Klicke ein Modul an: Einführung, Prüfungsschema, Rechenbeispiel, Examensbezug und zitierte Quellen.</p></div><em>{shown.length} Treffer</em></div>
        <div className="researchBanner card"><strong>Recherchebasis</strong><p>{researchNote}</p></div>
        <div className="filters card">{["Alle", "EU", "PersG", "KapG", "Technik"].map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item === "Alle" ? item : areaNames[item]}</button>)}</div>
        <div className="moduleList">{shown.map((module) => <article className={`card module ${done.has(module.id) ? "done" : ""}`} key={module.id} onClick={() => openModule(module)} tabIndex="0" onKeyDown={(e) => { if (e.key === "Enter") openModule(module); }}><button className="moduleCheck" onClick={(e) => { e.stopPropagation(); toggle(setDone, module.id); }} aria-label={`${module.title} als beherrscht markieren`}>{done.has(module.id) ? "✓" : ""}</button><div><div className="moduleTop"><span>{areaNames[module.area]}</span><small>{module.difficulty} · {module.minutes} Min.</small></div><h3>{module.title}</h3><p>{module.law}</p><div className="modulePreview">{module.intro[0]}</div></div><strong className="openArrow">Öffnen →</strong></article>)}</div>
      </>)}

      {view === "schema" && <><div className="heading"><div><span className="eyebrow">Universalschema</span><h1>Sechs Schritte. Immer dieselbe Reihenfolge.</h1></div></div><div className="schema">{[["1", "WER?", "Zurechnung"], ["2", "WAS?", "Ansatz"], ["3", "HB", "Handelsbilanz"], ["4", "StB", "Steuerbilanz"], ["5", "WIE VIEL?", "Bewertung"], ["6", "WOHIN?", "Technik"]].map((step) => <article className="card step" key={step[0]}><b>{step[0]}</b><span>{step[1]}</span><h2>{step[2]}</h2><p>Zurechnung, Ansatz, Bewertung und technische Umsetzung klar und getrennt darstellen.</p></article>)}</div><article className="card formula"><b>Prüfungssatz:</b> Zurechnung → Ansatz HB → Ansatz StB → Bewertung → Bilanzposten → Buchung → Gewinnauswirkung.</article></>}

      {view === "train" && <><div className="heading"><div><span className="eyebrow">Aktives Abrufen</span><h1>Prüfungstraining</h1></div></div><div className="training"><article className="card quiz">{quiz === null && <div className="center"><h2>Bilanz-Check</h2><p>{questions.length} Fragen mit direkter Begründung.</p><button onClick={() => { setQuiz(0); setScore(0); setAnswer(null); }}>Training starten</button></div>}{typeof quiz === "number" && <><div className="meta"><span>Frage {quiz + 1}/{questions.length}</span><span>{score} richtig</span></div><h2>{q[0]}</h2><div className="options">{q[1].map((option, i) => <button key={option} className={answer === null ? "" : i === q[2] ? "right" : answer === i ? "wrong" : ""} onClick={() => choose(i)}>{option}</button>)}</div>{answer !== null && <div className="feedback"><b>{answer === q[2] ? "Richtig." : "Noch nicht."}</b> {q[3]}<button onClick={nextQuestion}>{quiz === questions.length - 1 ? "Ergebnis" : "Nächste Frage"}</button></div>}</>}{quiz === "result" && <div className="center"><h2>{score} von {questions.length} richtig</h2><p>Wiederhole offene Themen und trainiere anschließend unter Zeitdruck.</p><button onClick={() => { setQuiz(0); setScore(0); setAnswer(null); }}>Noch einmal</button></div>}</article><section><article className="card calc"><span className="eyebrow">3,6-Minuten-Regel</span><h2>Zeitbudget</h2><input type="number" min="1" max="100" value={points} onChange={(e) => setPoints(e.target.value)} /><strong>{Math.round(points * 3.6)} Minuten</strong><p>{Math.floor(points * 3.6 / 60)} Std. {Math.round(points * 3.6) % 60} Min.</p></article></section></div></>}

      {view === "plan" && <><div className="heading"><div><span className="eyebrow">Vorbereitung</span><h1>8-Wochen-Plan</h1></div><em>{plan.size}/8 erledigt</em></div><div className="weekList">{weeks.map((week, i) => <label className={`card week ${plan.has(i) ? "done" : ""}`} key={week}><input type="checkbox" checked={plan.has(i)} onChange={() => toggle(setPlan, i)} /><b>W{i + 1}</b><div><h3>{week}</h3><p>Wissen aufbauen, Fälle lösen und Ergebnisse aktiv wiederholen.</p></div></label>)}</div></>}
    </main>
  </div>;
}
