import React, { useEffect, useMemo, useState } from "react";
import { laden, sichern, useFortschritt, anteil } from "../lib/fortschritt";
import { useAnsichtVerlauf } from "../lib/ansicht-verlauf";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K2Fachleiste from "./K2Fachleiste";
import { IconCockpit, IconModule, IconFaelle, IconSchema, IconTraining, IconRegister, IconPlan, IconHausaufgabe } from "./Icons";
import IstrPruefungsschemata, { istrSchemata } from "./IstrPruefungsschemata";
import IstrEinheit1Pruefungsschema, { istrEinheit1Schemata } from "./IstrEinheit1Pruefungsschema";
import IstrEinheit2Pruefungsschema, { istrEinheit2Schemata } from "./IstrEinheit2Pruefungsschema";
import IstrEinheit3Pruefungsschema, { istrEinheit3Schemata } from "./IstrEinheit3Pruefungsschema";
import IstrEinheit4Pruefungsschema, { istrEinheit4Schemata } from "./IstrEinheit4Pruefungsschema";
import IstrFallsammlung from "./IstrFallsammlung";
import IstrHausaufgaben from "./IstrHausaufgaben";
import SchemaPostitEnhancer from "./SchemaPostitEnhancer";
import {
  istrBereiche, istrBereichName, istrModule, istrFaelle, istrTraining, istrQuellen,
  istrEinheit1Quelle, istrEinheit2Quelle, istrEinheit3Quelle, istrEinheit4Quelle,
} from "../data/istr-gesamt";
import "./kst.css";
import "./istr-einheit2.css";
import { PrioBadge, PrioFilter, PrioCockpit, prioZaehlen, usePrioFilter, prioritaetFuer } from "./Prioritaet";

/* Examenspriorität je IStR-Modul nach der Beck-Auswertung Tag 2 (2013–2024). */
const prioModul = (m) => prioritaetFuer("istr", m, { typ: "modul", id: m.id });
const prioZaehlung = prioZaehlen(istrModule, prioModul);
const prioFall = (f) => prioritaetFuer("istr", { title: f.title, normchain: (f.moduleIds || []).map((id) => istrModule.find((m) => m.id === id)?.law).filter(Boolean) }, { typ: "fall", id: f.id });

const ansichten = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "module", label: "Lernmodule", Icon: IconModule },
  { id: "faelle", label: "Originalfälle", Icon: IconFaelle },
  { id: "fallsammlung", label: "Fallsammlung", Icon: IconPlan },
  { id: "hausaufgaben", label: "Hausaufgaben", Icon: IconHausaufgabe },
  { id: "schema", label: "Prüfungsschemata", Icon: IconSchema },
  { id: "training", label: "Training", Icon: IconTraining },
  { id: "quellen", label: "Quellenstand", Icon: IconRegister },
];

const modulIds = new Set(istrModule.map((m) => m.id));
const frames = (ranges = [], unit) => `${unit ? `E${unit} · ` : ""}${ranges.map(([a, b]) => a === b ? `F. ${a}` : `F. ${a}–${b}`).join(" · ")}`;
const unitLabel = (unit) => `Einheit ${unit}`;
const gesamtFrames = istrEinheit1Quelle.pages + istrEinheit2Quelle.pages + istrEinheit3Quelle.pages + istrEinheit4Quelle.pages;

export default function K2IStRCampus({ onKlausurwechsel, onFachwechsel }) {
  const verlauf = useAnsichtVerlauf("cockpit");
  const modulId = verlauf.eintrag.modulId ?? null;
  const fallId = verlauf.eintrag.fallId ?? null;
  const [suche, setSuche] = useState("");
  const [bereich, setBereich] = useState("alle");
  const [einheit, setEinheit] = useState("alle");
  const [prio, setPrio] = usePrioFilter("stb-k2-istr-prio");
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  const fortschritt = useFortschritt("stb-k2-istr-erledigt", modulIds);
  const erledigt = fortschritt.werte;

  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [verlauf.ansicht, modulId, fallId]);

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return istrModule.filter((m) => {
      if (einheit !== "alle" && m.unit !== Number(einheit)) return false;
      if (bereich !== "alle" && m.area !== bereich) return false;
      if (prio !== "alle" && prioModul(m).stufe !== prio) return false;
      if (!q) return true;
      return [m.title, m.law, ...(m.intro || []), ...(m.goals || []), ...(m.scheme || []), ...(m.normchain || []), ...(m.sourceNotes || []), m.merksatz]
        .filter(Boolean).join(" ").toLowerCase().includes(q);
    });
  }, [bereich, einheit, suche, prio]);

  const modul = istrModule.find((m) => m.id === modulId) || null;
  const quote = anteil(erledigt.length, istrModule.length);
  const ansichtOeffnen = (ansicht) => verlauf.oeffnen({ ansicht, modulId: null, fallId: null });
  const modulOeffnen = (id) => verlauf.oeffnen({ ansicht: "module", modulId: id, fallId: null });
  const fallOeffnen = (id) => verlauf.oeffnen({ ansicht: "faelle", modulId: null, fallId: id });

  return (
    <div className="kst-campus istr2-campus">
      <CampusTopbar
        klausur="2" marke="2" name="Examenscampus Klausur 2"
        untertitel="Ertragsteuerrecht · Internationales Steuerrecht"
        aufCockpit={() => ansichtOeffnen("cockpit")}
        navZurueck={verlauf.zurueck} navVor={verlauf.vor}
        zurueckMoeglich={verlauf.zurueckMoeglich} vorMoeglich={verlauf.vorMoeglich}
        suche={suche}
        sucheSetzen={(wert) => {
          setSuche(wert);
          if (verlauf.ansicht !== "module" || modulId !== null) verlauf.ersetzen({ ansicht: "module", modulId: null, fallId: null });
        }}
        suchePlatzhalter="IStR-Modul, Norm oder Stichwort suchen" sucheAria="Internationales Steuerrecht durchsuchen"
        dunkel={dunkel} dunkelUmschalten={() => setDunkel((wert) => !wert)}
      />
      <KlausurenLeiste aktiv="kst" aufCockpit={() => ansichtOeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />
      <K2Fachleiste aktiv="istr" onWechsel={onFachwechsel} />

      <aside className="rail">
        <nav className="rail__nav" aria-label="IStR-Hauptnavigation">
          {ansichten.map(({ id, label, Icon }) => <button key={id} className="rail__link" aria-current={verlauf.ansicht === id ? "true" : undefined} onClick={() => ansichtOeffnen(id)}><Icon />{label}</button>)}
        </nav>
        <div className="rail__box">
          <b>IStR · Einheit 1 + 2 + 3 + 4</b>
          <strong>{erledigt.length} / {istrModule.length}</strong>
          <p>Module bearbeitet · {gesamtFrames}/{gesamtFrames} Quellenframes zugeordnet</p>
          {erledigt.length > 0 && <button className="rail__box-reset" onClick={() => window.confirm("Bearbeitungsstand der IStR-Module zurücksetzen?") && fortschritt.zuruecksetzen()}>zurücksetzen</button>}
        </div>
      </aside>

      <main className="page">
        {verlauf.ansicht === "cockpit" && <IstrCockpit quote={quote} erledigt={erledigt} modulOeffnen={modulOeffnen} ansichtOeffnen={ansichtOeffnen} setBereich={(id) => { setBereich(id); ansichtOeffnen("module"); }} setEinheit={(id) => { setEinheit(id); ansichtOeffnen("module"); }} />}
        {verlauf.ansicht === "module" && !modul && <IstrModulliste liste={gefiltert} bereich={bereich} setBereich={setBereich} einheit={einheit} setEinheit={setEinheit} prio={prio} setPrio={setPrio} suche={suche} erledigt={erledigt} umschalten={fortschritt.umschalten} modulOeffnen={modulOeffnen} />}
        {verlauf.ansicht === "module" && modul && <IstrModulseite modul={modul} erledigt={erledigt} umschalten={fortschritt.umschalten} modulOeffnen={modulOeffnen} fallOeffnen={fallOeffnen} zurueck={() => verlauf.oeffnen({ ansicht: "module", modulId: null, fallId: null })} />}
        {verlauf.ansicht === "faelle" && <IstrFallseite aktiv={fallId} modulOeffnen={modulOeffnen} fallOeffnen={fallOeffnen} />}
        {verlauf.ansicht === "fallsammlung" && <IstrFallsammlung onModulOeffnen={modulOeffnen} />}
        {verlauf.ansicht === "hausaufgaben" && <IstrHausaufgaben onModulOeffnen={modulOeffnen} />}
        {verlauf.ansicht === "schema" && <IstrSchemaSeite suche={suche} modulOeffnen={modulOeffnen} fallOeffnen={fallOeffnen} />}
        {verlauf.ansicht === "training" && <IstrTraining />}
        {verlauf.ansicht === "quellen" && <IstrQuellenstand />}
      </main>
    </div>
  );
}

function EinheitenFilter({ einheit, setEinheit }) {
  return <div className="filter" aria-label="IStR-Einheit auswählen">{[["alle","Alle Einheiten"],["1","Einheit 1"],["2","Einheit 2"],["3","Einheit 3"],["4","Einheit 4"]].map(([id,label]) => <button key={id} aria-pressed={einheit === id} onClick={() => setEinheit(id)}>{label}</button>)}</div>;
}

function IstrCockpit({ quote, erledigt, modulOeffnen, ansichtOeffnen, setBereich, setEinheit }) {
  const naechstes = istrModule.find((m) => !erledigt.includes(m.id)) || istrModule[0];
  const themen = istrBereiche.filter((b) => b.id !== "alle" && istrModule.some((m) => m.area === b.id));
  const einheit1Module = istrModule.filter((m) => m.unit === 1);
  const einheit2Module = istrModule.filter((m) => m.unit === 2);
  const einheit3Module = istrModule.filter((m) => m.unit === 3);
  const einheit4Module = istrModule.filter((m) => m.unit === 4);
  return <>
    <div className="cockpit">
      <section className="these kst-these">
        <span className="kicker">Klausur 2 · IStR · Einheit 1 + 2 + 3 + 4</span>
        <h2>Vom persönlichen Steuerzugriff über <em>EIS und AAVV bis Wegzug, beschränkter KSt und Entstrickung.</em></h2>
        <p>Die vier Unterrichtseinheiten sind chronologisch verzahnt: {einheit1Module.length} Grundlagenmodule, {einheit2Module.length} DBA-/Methodenmodule, {einheit3Module.length} Vertiefungsmodule und {einheit4Module.length} Module zur Hinzurechnungsbesteuerung aus {istrEinheit4Quelle.pages}/{istrEinheit4Quelle.pages} neuen Frames. Fälle, Schemata und Querverweise greifen einheitenübergreifend ineinander.</p>
        <div className="these__aktionen"><button className="btn" onClick={() => modulOeffnen(naechstes.id)}>Weiterlernen</button><button className="btn btn--linie" onClick={() => ansichtOeffnen("schema")}>Prüfungsschemata öffnen</button></div>
        <p className="istr2-source-note">Quellenstand: E1 {istrEinheit1Quelle.pages}/{istrEinheit1Quelle.pages} · E2 {istrEinheit2Quelle.pages}/{istrEinheit2Quelle.pages} · E3 {istrEinheit3Quelle.pages}/{istrEinheit3Quelle.pages} · E4 {istrEinheit4Quelle.pages}/{istrEinheit4Quelle.pages} · Basis-Schema 2/2.</p>
      </section>
      <section className="panel fortschritt"><div className="ring" style={{ "--p": `${quote}%` }}><b>{quote}%</b></div><h3>Bearbeitungsstand</h3><p>{erledigt.length} von {istrModule.length} Modulen abgehakt</p></section>
    </div>

    <section className="abschnitt"><h2>Einheiten</h2><div className="raster raster--2">
      <button className="weiter" onClick={() => setEinheit("1")}><span className="kicker">Einheit 1 · Grundlagen</span><h3>{einheit1Module.length} Lernmodule · {istrEinheit1Quelle.pages} Seiten</h3><p>§ 1, § 34c/§ 32d Abs. 5, § 2a/AStG, § 1a, § 1 Abs. 3, Wegzug, § 49, § 50a und § 50.</p></button>
      <button className="weiter" onClick={() => setEinheit("2")}><span className="kicker">Einheit 2 · DBA-Vertiefung</span><h3>{einheit2Module.length} Lernmodule · {istrEinheit2Quelle.pages} Frames</h3><p>EIS-Vertiefung, Kapitalerträge, AAVV, Art. 5/6/7/13/15 und Methodenartikel/PVB.</p></button>
      <button className="weiter" onClick={() => setEinheit("3")}><span className="kicker">Einheit 3 · Spezialfälle</span><h3>{einheit3Module.length} Lernmodule · {istrEinheit3Quelle.pages} Frames</h3><p>DBA-Quellensteuer/§ 50c, Aufsichtsrat, Wegzug §§ 2/6 AStG, beschränkte KSt, § 8b/§ 32 und Entstrickung.</p></button>
      <button className="weiter" onClick={() => setEinheit("4")}><span className="kicker">Einheit 4 · Hinzurechnungsbesteuerung</span><h3>{einheit4Module.length} Lernmodule · {istrEinheit4Quelle.pages} Frames</h3><p>Grundschema und § 7 AStG, Zwischengesellschaft, § 8 Abs. 5 und Aktivkatalog, Motivtest, § 9 Freigrenze, §§ 10 bis 12 AStG.</p></button>
    </div></section>

    <section className="abschnitt"><span className="kicker">Nächster Schritt</span><button className="weiter" onClick={() => modulOeffnen(naechstes.id)}><span className="kicker">{unitLabel(naechstes.unit)} · {istrBereichName[naechstes.area]} · {naechstes.id}</span><h3>{naechstes.title}</h3><p>{naechstes.intro[0]}</p><span className="norm">{naechstes.law}</span></button></section>

    <section className="abschnitt"><h2>Oberthemen aller Einheiten</h2><div className="raster raster--3">{themen.map((t) => {
      const mods = istrModule.filter((m) => m.area === t.id); const done = mods.filter((m) => erledigt.includes(m.id)).length;
      return <article className="bereich" key={t.id}><b>{mods.length} Module</b><h3>{t.label}</h3><p>{bereichText[t.id]}</p><div className="bereich__balken"><span style={{ width: `${anteil(done, mods.length)}%` }} /></div><small className="bereich__stand">{done} von {mods.length} bearbeitet</small><button onClick={() => setBereich(t.id)}>Module öffnen →</button></article>;
    })}</div></section>

    <section className="abschnitt"><h2>Quellenabdeckung</h2><div className="raster raster--3">
      {[{q:istrEinheit1Quelle,u:1},{q:istrEinheit2Quelle,u:2},{q:istrEinheit3Quelle,u:3},{q:istrEinheit4Quelle,u:4}].map(({q,u}) => <article className="panel" key={u}><span className="kicker">Einheit {u}</span><h3>{q.pages} / {q.pages} Frames</h3><p>{u === 4 ? "Hinzurechnungsbesteuerung §§ 7 bis 12 AStG: jeder Frame fachlich, als Fall/Transfer oder technisch zugeordnet." : u === 3 ? "Spezialfälle bis Entstrickung: jede physische Seite fachlich, als Fall/Transfer oder technisch zugeordnet." : "Vollständig und lückenlos zugeordnet."}</p></article>)}
      <article className="panel"><span className="kicker">Prüfungsschemata</span><h3>{istrSchemata.length + istrEinheit1Schemata.length + istrEinheit2Schemata.length + istrEinheit3Schemata.length + istrEinheit4Schemata.length} Schemata</h3><p>Basis-Schema plus Spezial-, EIS-, DBA-, Wegzugs-, KSt-, Entstrickungs- und Hinzurechnungsschemata.</p></article>
    </div></section>

    <PrioCockpit fach="istr" zaehlung={prioZaehlung} />
  </>;
}

const bereichText = {
  grundlagen: "§ 1 Abs. 1/4 EStG, §§ 8/9 AO und persönlicher Steuerzugriff.",
  steuerpflicht: "§ 1 Abs. 1/3/4 EStG, § 50 und beschränkte Steuerpflicht mit DBA.",
  ausland: "Auslandseinkünfte ohne DBA: § 34c und § 32d Abs. 5 EStG.",
  astg: "§ 2a EStG und §§ 7 ff. AStG als eigenständige Auslandssonderregeln.",
  familie: "§ 1a EStG mit EU-/EWR-Familienbezug, Unterhalt und Ehegattenveranlagung.",
  antrag: "§ 1 Abs. 3: Antrag, § 49, 90-%-Quote/Grundfreibetrag und Nachweis.",
  inland: "§ 49 EStG als nationaler Inlandsanknüpfungskatalog; R 49.3 als Auslegungshilfe.",
  kapital: "Dividenden, Kapitalertragsteuer, Art. 10 DBA und Abgeltungswirkung.",
  abzug: "§ 50a Quellenabzug, § 50c Entlastung und § 50 Sondervorschriften.",
  wegzug: "Unterjähriger Wechsel, § 32b sowie erweiterte/§-6-AStG-Wegzugsfolgen.",
  kst: "§ 2 Nr. 1 KStG + § 49, § 8b, § 32 und Quellensteuer bei ausländischen Körperschaften.",
  dba: "AAVV, Art. 1/2/4 DBA und Tie-Breaker bei Doppelansässigkeit.",
  verteilung: "Art. 5/6/7/13/15/16 DBA: Immobilien, Betriebsstätte, Veräußerung, Arbeit und Aufsichtsrat.",
  vermeidung: "Methodenartikel, Freistellung/Anrechnung und § 32b EStG.",
  entstrickung: "§ 4 Abs. 1 S. 3/§ 6/§ 4g EStG und § 12 KStG beim Verlust deutschen Besteuerungsrechts.",
  technik: "Nationaler Zugriff → Spezialnorm → Einkunftsquelle → Erhebung → DBA → Entlastung.",
};

function IstrModulliste({ liste, bereich, setBereich, einheit, setEinheit, prio, setPrio, suche, erledigt, umschalten, modulOeffnen }) {
  return <>
    <div className="pagehead"><div><span className="kicker">Klausur 2 · IStR · Einheit 1 + 2 + 3 + 4</span><h1>Lernmodule</h1><p className="lead">Chronologisch geordnete Lernstrecke aus allen vollständigen Unterrichtseinheiten.</p></div><span className="kicker">{liste.length} Inhalte</span></div>
    <EinheitenFilter einheit={einheit} setEinheit={setEinheit} />
    <div className="filter">{istrBereiche.filter((b) => b.id === "alle" || istrModule.some((m) => m.area === b.id && (einheit === "alle" || m.unit === Number(einheit)))).map((b) => <button key={b.id} aria-pressed={bereich === b.id} onClick={() => setBereich(b.id)}>{b.label}</button>)}</div>
    <PrioFilter wert={prio} setWert={setPrio} zaehlung={prioZaehlung} />
    {suche && <p className="istr2-source-note">Suche: „{suche}“ · {liste.length} Treffer</p>}
    <div className="raster raster--2">{liste.map((m) => <article className="panel" key={m.id}><span className="kicker">{unitLabel(m.unit)} · {istrBereichName[m.area]} · {m.id}</span> <PrioBadge prio={prioModul(m)} /><h3>{m.title}</h3><p>{m.intro[0]}</p><div className="istr2-modul-meta"><span className="norm">{m.law}</span><span className="istr2-source-range">{frames(m.sourceFrames, m.unit)}</span></div><div className="kartenfuss"><button className="btn btn--linie" onClick={() => modulOeffnen(m.id)}>Öffnen</button><label><input type="checkbox" checked={erledigt.includes(m.id)} onChange={() => umschalten(m.id)} /> bearbeitet</label></div></article>)}</div>
  </>;
}

function IstrModulseite({ modul, erledigt, umschalten, modulOeffnen, fallOeffnen, zurueck }) {
  const querModule = (modul.links || []).map((id) => istrModule.find((m) => m.id === id)).filter(Boolean);
  const querFaelle = (modul.caseIds || []).map((id) => istrFaelle.find((f) => f.id === id)).filter(Boolean);
  return <>
    <button className="zurueck" onClick={zurueck}>← Alle IStR-Module</button>
    <div className="pagehead"><div><span className="kicker">{unitLabel(modul.unit)} · {istrBereichName[modul.area]} · {modul.id}</span> <PrioBadge prio={prioModul(modul)} mitThema /><h1>{modul.title}</h1><p className="lead">{modul.intro[0]}</p></div><button className="btn" onClick={() => umschalten(modul.id)}>{erledigt.includes(modul.id) ? "✓ Bearbeitet" : "Als bearbeitet markieren"}</button></div>
    <section className="raster raster--2"><article className="panel"><span className="kicker">Lernziele</span><h3>Das muss sitzen</h3><ul className="liste">{modul.goals.map((x) => <li key={x}>{x}</li>)}</ul></article><article className="panel"><span className="kicker">Normkette</span><h3>Gesetzespfad</h3><div className="istr2-chiprow">{modul.normchain.map((n) => <span className="norm" key={n}>{n}</span>)}</div><p><b>Merksatz:</b> {modul.merksatz}</p></article></section>
    <section className="abschnitt"><h2>Prüfungsweg</h2><article className="panel"><ol>{modul.scheme.map((s) => <li key={s} style={{ marginBottom: 10 }}>{s}</li>)}</ol></article></section>
    <section className="abschnitt"><h2>Quellenbezug</h2><article className="panel"><div className="istr2-chiprow">{modul.sourceFrames.map(([a,b]) => <span className="istr2-chip" key={`${a}-${b}`}>{unitLabel(modul.unit)} · {a === b ? `Frame ${a}` : `Frames ${a}–${b}`}</span>)}</div><ul className="liste">{modul.sourceNotes.map((n) => <li key={n}>{n}</li>)}</ul></article></section>
    {(querModule.length > 0 || querFaelle.length > 0) && <section className="abschnitt"><h2>Querverweise</h2><div className="istr2-crossrefs">{querModule.map((m) => <button key={m.id} onClick={() => modulOeffnen(m.id)}>↗ {unitLabel(m.unit)} · {m.id} · {m.title}</button>)}{querFaelle.map((f) => <button key={f.id} onClick={() => fallOeffnen(f.id)}>↗ {unitLabel(f.unit)} · Fall · {f.title}</button>)}</div></section>}
  </>;
}

function IstrFallseite({ aktiv, modulOeffnen, fallOeffnen }) {
  const [einheit, setEinheit] = useState("alle");
  useEffect(() => { if (!aktiv) return; const timer = setTimeout(() => document.getElementById(aktiv)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80); return () => clearTimeout(timer); }, [aktiv]);
  const liste = istrFaelle.filter((f) => einheit === "alle" || f.unit === Number(einheit));
  return <>
    <div className="pagehead"><div><span className="kicker">IStR · Einheit 1 + 2 + 3 + 4</span><h1>Originalfälle und Klausurtransfer</h1><p className="lead">Fälle aller Einheiten mit direkten Querverweisen zu den dazugehörigen Lernmodulen.</p></div><span className="kicker">{liste.length} Fallstrecken</span></div>
    <EinheitenFilter einheit={einheit} setEinheit={setEinheit} />
    <div style={{ display: "grid", gap: 12 }}>{liste.map((fall) => <details className="panel istr2-fall" id={fall.id} key={fall.id} open={aktiv === fall.id || undefined}><summary onClick={() => fallOeffnen(fall.id)}><div><span className="kicker">{unitLabel(fall.unit)} · {frames(fall.sourceFrames)}</span> <PrioBadge prio={prioFall(fall)} /><h3 style={{ margin: "5px 0 0" }}>{fall.title}</h3></div><span aria-hidden="true">＋</span></summary><div className="istr2-fall__body"><h4>Sachverhalt / Quellenkern</h4><ul className="liste">{fall.facts.map((x) => <li key={x}>{x}</li>)}</ul><h4>Lösungsweg aus der Einheit</h4><ol>{fall.solution.map((x) => <li key={x} style={{ marginBottom: 9 }}>{x}</li>)}</ol><h4>Querverweise</h4><div className="istr2-crossrefs">{fall.moduleIds.map((id) => { const m = istrModule.find((x) => x.id === id); return m ? <button key={id} onClick={() => modulOeffnen(id)}>↗ {unitLabel(m.unit)} · {id} · {m.title}</button> : null; })}</div></div></details>)}</div>
  </>;
}

function IstrSchemaSeite({ suche, modulOeffnen, fallOeffnen }) {
  const [behaelter, setBehaelter] = useState(null);
  const [basisSchema, setBasisSchema] = useState(istrSchemata[0].id);
  return <>
    <div className="pagehead"><div><span className="kicker">Klausur 2 · Internationales Steuerrecht</span><h1>Prüfungsschemata</h1><p className="lead">Basis-Schema und alle Spezial-/Vertiefungsschemata der Einheiten 1–4 – chronologisch, mit Prüfschritt-Karten, EIS/AAVV-Merkern und direkten Querverweisen.</p></div></div>
    <div data-pruefungsschemata-portal ref={setBehaelter}>
      <section><span className="kicker">Basis · Einheit 1</span><IstrPruefungsschemata aktiv={basisSchema} onWechsel={setBasisSchema} suche={suche} /></section>
      <IstrEinheit1Pruefungsschema suche={suche} onModulOeffnen={modulOeffnen} onFallOeffnen={fallOeffnen} />
      <IstrEinheit2Pruefungsschema suche={suche} onModulOeffnen={modulOeffnen} onFallOeffnen={fallOeffnen} />
      <IstrEinheit3Pruefungsschema suche={suche} onModulOeffnen={modulOeffnen} onFallOeffnen={fallOeffnen} />
      <IstrEinheit4Pruefungsschema suche={suche} onModulOeffnen={modulOeffnen} onFallOeffnen={fallOeffnen} />
      <SchemaPostitEnhancer root={behaelter} signal={`${basisSchema}:${suche}:istr1:istr2:istr3:istr4`} />
    </div>
  </>;
}

function IstrTraining() {
  return <><div className="pagehead"><div><span className="kicker">IStR · Einheit 1 + 2 + 3 + 4</span><h1>Training</h1><p className="lead">Abruffragen in chronologischer Reihenfolge aller Unterrichtseinheiten.</p></div></div>{[1,2,3,4].map((unit) => <section className="panel istr2-training" key={unit} style={{ marginBottom: 14 }}><span className="kicker">Einheit {unit}</span><h2>Training Einheit {unit}</h2>{istrTraining.filter((q) => q.unit === unit).map((q, i) => <details key={q.id}><summary>{i + 1}. {q.frage}</summary><p>{q.antwort}</p></details>)}</section>)}</>;
}

function IstrQuellenstand() {
  return <>
    <div className="pagehead"><div><span className="kicker">IStR · Quellenstand</span><h1>Quellenabdeckung</h1><p className="lead">Alle vier Einheiten sind lückenlos dokumentiert; Wiederholungs-, Scroll-, Such- und Technikframes bleiben in der Zählung, erzeugen aber keine künstlichen Fachmodule.</p></div></div>
    <section className="panel"><span className="kicker">Schema IStR.pdf</span><h2>2 von 2 Seiten umgesetzt</h2><ul className="liste"><li><b>Seite 1:</b> Grundschema Internationales Steuerrecht.</li><li><b>Seite 2:</b> Schema DBA – AAVV blau markiert und in den Folgeeinheiten vertieft.</li></ul></section>
    {istrQuellen.map(({ unit, quelle, ranges }) => {
      const technisch = ranges.filter((r) => r.kind === "technisch"); const fachlich = ranges.filter((r) => r.kind !== "technisch");
      return <section className="panel" style={{ marginTop: 14 }} key={unit}><span className="kicker">Einheit {unit} · {quelle.title}</span><h2>{quelle.pages} von {quelle.pages} Frames/Seiten zugeordnet</h2><p>{quelle.hinweis}</p><h3>Fachliche / Fall- / Transferbereiche</h3><div className="istr2-chiprow">{fachlich.map((r) => <span className="istr2-chip" key={`${unit}-${r.start}-${r.end}`}>{r.start === r.end ? `F. ${r.start}` : `F. ${r.start}–${r.end}`} · {r.label}</span>)}</div><h3 style={{ marginTop: 22 }}>Technische, private und reine Navigationsframes</h3><p className="istr2-source-note">Diese Frames sind vollständig mitgezählt, werden wegen fehlenden Fachgehalts bzw. privater App-/Personenansichten aber nicht als Screenshots veröffentlicht.</p><div className="istr2-chiprow">{technisch.map((r) => <span className="istr2-chip istr2-chip--technisch" key={`${unit}-${r.start}-${r.end}`}>{r.start === r.end ? `F. ${r.start}` : `F. ${r.start}–${r.end}`} · {r.label}</span>)}</div></section>;
    })}
  </>;
}
