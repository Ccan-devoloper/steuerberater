import React, { useEffect, useMemo, useState } from "react";
import { laden, sichern, useFortschritt, anteil } from "../lib/fortschritt";
import { useAnsichtVerlauf } from "../lib/ansicht-verlauf";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K2Fachleiste from "./K2Fachleiste";
import { IconCockpit, IconModule, IconFaelle, IconSchema, IconTraining, IconRegister } from "./Icons";
import IstrPruefungsschemata, { istrSchemata } from "./IstrPruefungsschemata";
import IstrEinheit2Pruefungsschema, { istrEinheit2Schemata } from "./IstrEinheit2Pruefungsschema";
import SchemaPostitEnhancer from "./SchemaPostitEnhancer";
import {
  istrEinheit2Quelle, istrEinheit2Bereiche, istrEinheit2BereichName,
  istrEinheit2Module, istrEinheit2Faelle, istrEinheit2Training, istrEinheit2CaptureRanges,
} from "../data/istr-einheit-2";
import "./kst.css";
import "./istr-einheit2.css";

const ansichten = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "module", label: "Lernmodule", Icon: IconModule },
  { id: "faelle", label: "Originalfälle", Icon: IconFaelle },
  { id: "schema", label: "Prüfungsschemata", Icon: IconSchema },
  { id: "training", label: "Training", Icon: IconTraining },
  { id: "quellen", label: "Quellenstand", Icon: IconRegister },
];

const modulIds = new Set(istrEinheit2Module.map((m) => m.id));
const frames = (ranges = []) => ranges.map(([a, b]) => a === b ? `F. ${a}` : `F. ${a}–${b}`).join(" · ");

export default function K2IStRCampus({ onKlausurwechsel, onFachwechsel }) {
  const verlauf = useAnsichtVerlauf("cockpit");
  const modulId = verlauf.eintrag.modulId ?? null;
  const fallId = verlauf.eintrag.fallId ?? null;
  const [suche, setSuche] = useState("");
  const [bereich, setBereich] = useState("alle");
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  const fortschritt = useFortschritt("stb-k2-istr2-erledigt", modulIds);
  const erledigt = fortschritt.werte;

  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [verlauf.ansicht, modulId, fallId]);

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return istrEinheit2Module.filter((m) => {
      if (bereich !== "alle" && m.area !== bereich) return false;
      if (!q) return true;
      return [m.title, m.law, ...(m.intro || []), ...(m.goals || []), ...(m.scheme || []), ...(m.normchain || []), ...(m.sourceNotes || []), m.merksatz]
        .filter(Boolean).join(" ").toLowerCase().includes(q);
    });
  }, [bereich, suche]);

  const modul = istrEinheit2Module.find((m) => m.id === modulId) || null;
  const quote = anteil(erledigt.length, istrEinheit2Module.length);
  const ansichtOeffnen = (ansicht) => verlauf.oeffnen({ ansicht, modulId: null, fallId: null });
  const modulOeffnen = (id) => verlauf.oeffnen({ ansicht: "module", modulId: id, fallId: null });
  const fallOeffnen = (id) => verlauf.oeffnen({ ansicht: "faelle", modulId: null, fallId: id });

  return (
    <div className="kst-campus istr2-campus">
      <CampusTopbar
        klausur="2"
        marke="2"
        name="Examenscampus Klausur 2"
        untertitel="Ertragsteuerrecht · Internationales Steuerrecht"
        aufCockpit={() => ansichtOeffnen("cockpit")}
        navZurueck={verlauf.zurueck}
        navVor={verlauf.vor}
        zurueckMoeglich={verlauf.zurueckMoeglich}
        vorMoeglich={verlauf.vorMoeglich}
        suche={suche}
        sucheSetzen={(wert) => {
          setSuche(wert);
          if (verlauf.ansicht !== "module" || modulId !== null) verlauf.ersetzen({ ansicht: "module", modulId: null, fallId: null });
        }}
        suchePlatzhalter="IStR-Modul, Norm oder Stichwort suchen"
        sucheAria="Internationales Steuerrecht durchsuchen"
        dunkel={dunkel}
        dunkelUmschalten={() => setDunkel((wert) => !wert)}
      />

      <KlausurenLeiste aktiv="kst" aufCockpit={() => ansichtOeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />
      <K2Fachleiste aktiv="istr" onWechsel={onFachwechsel} />

      <aside className="rail">
        <nav className="rail__nav" aria-label="IStR-Hauptnavigation">
          {ansichten.map(({ id, label, Icon }) => (
            <button key={id} className="rail__link" aria-current={verlauf.ansicht === id ? "true" : undefined} onClick={() => ansichtOeffnen(id)}>
              <Icon />{label}
            </button>
          ))}
        </nav>
        <div className="rail__box">
          <b>IStR · Einheit 2</b>
          <strong>{erledigt.length} / {istrEinheit2Module.length}</strong>
          <p>Module bearbeitet · 453/453 Quellenframes zugeordnet</p>
          {erledigt.length > 0 && <button className="rail__box-reset" onClick={() => window.confirm("Bearbeitungsstand der IStR-Module zurücksetzen?") && fortschritt.zuruecksetzen()}>zurücksetzen</button>}
        </div>
      </aside>

      <main className="page">
        {verlauf.ansicht === "cockpit" && <IstrCockpit quote={quote} erledigt={erledigt} modulOeffnen={modulOeffnen} ansichtOeffnen={ansichtOeffnen} setBereich={(id) => { setBereich(id); ansichtOeffnen("module"); }} />}
        {verlauf.ansicht === "module" && !modul && <IstrModulliste liste={gefiltert} bereich={bereich} setBereich={setBereich} suche={suche} erledigt={erledigt} umschalten={fortschritt.umschalten} modulOeffnen={modulOeffnen} />}
        {verlauf.ansicht === "module" && modul && <IstrModulseite modul={modul} erledigt={erledigt} umschalten={fortschritt.umschalten} modulOeffnen={modulOeffnen} fallOeffnen={fallOeffnen} zurueck={() => verlauf.oeffnen({ ansicht: "module", modulId: null, fallId: null })} />}
        {verlauf.ansicht === "faelle" && <IstrFallseite aktiv={fallId} modulOeffnen={modulOeffnen} fallOeffnen={fallOeffnen} />}
        {verlauf.ansicht === "schema" && <IstrSchemaSeite suche={suche} modulOeffnen={modulOeffnen} fallOeffnen={fallOeffnen} />}
        {verlauf.ansicht === "training" && <IstrTraining />}
        {verlauf.ansicht === "quellen" && <IstrQuellenstand />}
      </main>
    </div>
  );
}

function IstrCockpit({ quote, erledigt, modulOeffnen, ansichtOeffnen, setBereich }) {
  const naechstes = istrEinheit2Module.find((m) => !erledigt.includes(m.id)) || istrEinheit2Module[0];
  const themen = istrEinheit2Bereiche.filter((b) => b.id !== "alle");
  return (
    <>
      <div className="cockpit">
        <section className="these kst-these">
          <span className="kicker">Klausur 2 · IStR · Einheit 1 + 2</span>
          <h2>Vom nationalen Steuerzugriff über <em>EIS und AAVV bis zur Methodenebene.</em></h2>
          <p>
            Einheit 2 überführt den vollständigen bildbasierten Unterrichtsmitschnitt in {istrEinheit2Module.length} Lernmodule,
            {" "}{istrEinheit2Faelle.length} Original-/Transferfälle und {istrEinheit2Schemata.length} vertiefte digitale Prüfschemata. Sämtliche
            {" "}{istrEinheit2Quelle.pages} Frames sind fachlich oder technisch zugeordnet; technische und private App-Ansichten werden nicht reproduziert.
          </p>
          <div className="these__aktionen">
            <button className="btn" onClick={() => modulOeffnen(naechstes.id)}>Weiterlernen</button>
            <button className="btn btn--linie" onClick={() => ansichtOeffnen("schema")}>Prüfungsschemata öffnen</button>
          </div>
          <p className="istr2-source-note">Quellenstand: Basis-Schema IStR 2/2 Seiten · IStR, 2. Einheit.pdf 453/453 Frames vollständig zugeordnet.</p>
        </section>
        <section className="panel fortschritt">
          <div className="ring" style={{ "--p": `${quote}%` }}><b>{quote}%</b></div>
          <h3>Bearbeitungsstand</h3>
          <p>{erledigt.length} von {istrEinheit2Module.length} Modulen abgehakt</p>
        </section>
      </div>

      <section className="abschnitt">
        <span className="kicker">Nächster Schritt</span>
        <button className="weiter" onClick={() => modulOeffnen(naechstes.id)}>
          <span className="kicker">{istrEinheit2BereichName[naechstes.area]} · {naechstes.id}</span>
          <h3>{naechstes.title}</h3><p>{naechstes.intro[0]}</p><span className="norm">{naechstes.law}</span>
        </button>
      </section>

      <section className="abschnitt">
        <h2>Oberthemen der Einheit 2</h2>
        <div className="raster raster--3">
          {themen.map((t) => {
            const mods = istrEinheit2Module.filter((m) => m.area === t.id);
            if (!mods.length) return null;
            const done = mods.filter((m) => erledigt.includes(m.id)).length;
            return (
              <article className="bereich" key={t.id}>
                <b>{mods.length} Module</b><h3>{t.label}</h3><p>{bereichText[t.id]}</p>
                <div className="bereich__balken"><span style={{ width: `${anteil(done, mods.length)}%` }} /></div>
                <small className="bereich__stand">{done} von {mods.length} bearbeitet</small>
                <button onClick={() => setBereich(t.id)}>Module öffnen →</button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="abschnitt">
        <h2>Quellenabdeckung Einheit 2</h2>
        <div className="raster raster--3">
          <article className="panel"><span className="kicker">Unterrichtsmitschnitt</span><h3>453 / 453 Frames</h3><p>Jeder Frame ist einem Fachthema, Fall, Transfer oder technischen Bereich zugeordnet.</p></article>
          <article className="panel"><span className="kicker">Fälle und Transfer</span><h3>{istrEinheit2Faelle.length} Fallstrecken</h3><p>Brasilien-Dividende, zwei große DBA-Fälle sowie StB-2025- und 2020er Klausurtransfer.</p></article>
          <article className="panel"><span className="kicker">Schemata</span><h3>{1 + istrEinheit2Schemata.length} + Basis</h3><p>Basis-Schema aus Einheit 1 bleibt erhalten; Einheit 2 ergänzt EIS und das vertiefte AAVV.</p></article>
        </div>
      </section>
    </>
  );
}

const bereichText = {
  steuerpflicht: "§ 1 Abs. 1/3/4 EStG, 90-%-/Grundfreibetragsprüfung und EIS.",
  inland: "§ 49 EStG als nationaler Inlandsanknüpfungskatalog.",
  kapital: "Dividenden, Kapitalertragsteuer und Abgeltungswirkung bei beschränkter Steuerpflicht.",
  dba: "AAVV, Art. 1/2/4 DBA und Tie-Breaker bei Doppelansässigkeit.",
  verteilung: "Art. 5/6/7/13/15 DBA: Immobilien, Betriebsstätte, Veräußerung und Arbeitslohn.",
  vermeidung: "Methodenartikel, Freistellung/Anrechnung und § 32b EStG.",
  technik: "Nationaler Zugriff → DBA → Rückkehr in Erhebung/Tarif/Methodenfolge.",
};

function IstrModulliste({ liste, bereich, setBereich, suche, erledigt, umschalten, modulOeffnen }) {
  return (
    <>
      <div className="pagehead"><div><span className="kicker">Klausur 2 · IStR · Einheit 2</span><h1>Lernmodule</h1><p className="lead">Digitale Lernstrecke aus dem vollständigen 453-Frame-Unterrichtsmitschnitt.</p></div><span className="kicker">{liste.length} Inhalte</span></div>
      <div className="filter">{istrEinheit2Bereiche.map((b) => <button key={b.id} aria-pressed={bereich === b.id} onClick={() => setBereich(b.id)}>{b.label}</button>)}</div>
      {suche && <p className="istr2-source-note">Suche: „{suche}“ · {liste.length} Treffer</p>}
      <div className="raster raster--2">
        {liste.map((m) => (
          <article className="panel" key={m.id}>
            <span className="kicker">{istrEinheit2BereichName[m.area]} · {m.id}</span>
            <h3>{m.title}</h3><p>{m.intro[0]}</p>
            <div className="istr2-modul-meta"><span className="norm">{m.law}</span><span className="istr2-source-range">{frames(m.sourceFrames)}</span></div>
            <div className="kartenfuss"><button className="btn btn--linie" onClick={() => modulOeffnen(m.id)}>Öffnen</button><label><input type="checkbox" checked={erledigt.includes(m.id)} onChange={() => umschalten(m.id)} /> bearbeitet</label></div>
          </article>
        ))}
      </div>
    </>
  );
}

function IstrModulseite({ modul, erledigt, umschalten, modulOeffnen, fallOeffnen, zurueck }) {
  const querModule = (modul.links || []).map((id) => istrEinheit2Module.find((m) => m.id === id)).filter(Boolean);
  const querFaelle = (modul.caseIds || []).map((id) => istrEinheit2Faelle.find((f) => f.id === id)).filter(Boolean);
  return (
    <>
      <button className="zurueck" onClick={zurueck}>← Alle IStR-Module</button>
      <div className="pagehead"><div><span className="kicker">{istrEinheit2BereichName[modul.area]} · {modul.id}</span><h1>{modul.title}</h1><p className="lead">{modul.intro[0]}</p></div><button className="btn" onClick={() => umschalten(modul.id)}>{erledigt.includes(modul.id) ? "✓ Bearbeitet" : "Als bearbeitet markieren"}</button></div>
      <section className="raster raster--2">
        <article className="panel"><span className="kicker">Lernziele</span><h3>Das muss sitzen</h3><ul className="liste">{modul.goals.map((x) => <li key={x}>{x}</li>)}</ul></article>
        <article className="panel"><span className="kicker">Normkette</span><h3>Gesetzespfad</h3><div className="istr2-chiprow">{modul.normchain.map((n) => <span className="norm" key={n}>{n}</span>)}</div><p><b>Merksatz:</b> {modul.merksatz}</p></article>
      </section>
      <section className="abschnitt"><h2>Prüfungsweg</h2><article className="panel"><ol>{modul.scheme.map((s) => <li key={s} style={{ marginBottom: 10 }}>{s}</li>)}</ol></article></section>
      <section className="abschnitt"><h2>Quellenbezug</h2><article className="panel"><div className="istr2-chiprow">{modul.sourceFrames.map(([a,b]) => <span className="istr2-chip" key={`${a}-${b}`}>{a === b ? `Frame ${a}` : `Frames ${a}–${b}`}</span>)}</div><ul className="liste">{modul.sourceNotes.map((n) => <li key={n}>{n}</li>)}</ul></article></section>
      {(querModule.length > 0 || querFaelle.length > 0) && <section className="abschnitt"><h2>Querverweise</h2><div className="istr2-crossrefs">{querModule.map((m) => <button key={m.id} onClick={() => modulOeffnen(m.id)}>↗ {m.id} · {m.title}</button>)}{querFaelle.map((f) => <button key={f.id} onClick={() => fallOeffnen(f.id)}>↗ Fall · {f.title}</button>)}</div></section>}
    </>
  );
}

function IstrFallseite({ aktiv, modulOeffnen, fallOeffnen }) {
  useEffect(() => {
    if (!aktiv) return;
    const timer = setTimeout(() => document.getElementById(aktiv)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    return () => clearTimeout(timer);
  }, [aktiv]);
  return (
    <>
      <div className="pagehead"><div><span className="kicker">IStR · Einheit 2</span><h1>Originalfälle und Klausurtransfer</h1><p className="lead">Sachverhalte und Lösungswege aus dem Unterrichtsmitschnitt; Querverweise führen direkt in die zugehörigen Lernmodule.</p></div><span className="kicker">{istrEinheit2Faelle.length} Fallstrecken</span></div>
      <div style={{ display: "grid", gap: 12 }}>
        {istrEinheit2Faelle.map((fall) => (
          <details className="panel istr2-fall" id={fall.id} key={fall.id} open={aktiv === fall.id || undefined}>
            <summary onClick={() => fallOeffnen(fall.id)}><div><span className="kicker">{frames(fall.sourceFrames)}</span><h3 style={{ margin: "5px 0 0" }}>{fall.title}</h3></div><span aria-hidden="true">＋</span></summary>
            <div className="istr2-fall__body"><h4>Sachverhalt / Quellenkern</h4><ul className="liste">{fall.facts.map((x) => <li key={x}>{x}</li>)}</ul><h4>Lösungsweg aus der Einheit</h4><ol>{fall.solution.map((x) => <li key={x} style={{ marginBottom: 9 }}>{x}</li>)}</ol><h4>Querverweise</h4><div className="istr2-crossrefs">{fall.moduleIds.map((id) => { const m = istrEinheit2Module.find((x) => x.id === id); return m ? <button key={id} onClick={() => modulOeffnen(id)}>↗ {id} · {m.title}</button> : null; })}</div></div>
          </details>
        ))}
      </div>
    </>
  );
}

function IstrSchemaSeite({ suche, modulOeffnen, fallOeffnen }) {
  const [behaelter, setBehaelter] = useState(null);
  const [basisSchema, setBasisSchema] = useState(istrSchemata[0].id);
  return (
    <>
      <div className="pagehead"><div><span className="kicker">Klausur 2 · Internationales Steuerrecht</span><h1>Prüfungsschemata</h1><p className="lead">Basis-Schema aus Einheit 1 plus die aus Einheit 2 herausgearbeiteten EIS- und DBA-Vertiefungsschemata – im Darstellungsprinzip der Bilanzen-Schemata.</p></div></div>
      <div data-pruefungsschemata-portal ref={setBehaelter}>
        <section><span className="kicker">Basis · Einheit 1</span><IstrPruefungsschemata aktiv={basisSchema} onWechsel={setBasisSchema} suche={suche} /></section>
        <IstrEinheit2Pruefungsschema suche={suche} onModulOeffnen={modulOeffnen} onFallOeffnen={fallOeffnen} />
        <SchemaPostitEnhancer root={behaelter} signal={`${basisSchema}:${suche}:istr2`} />
      </div>
    </>
  );
}

function IstrTraining() {
  return (
    <>
      <div className="pagehead"><div><span className="kicker">IStR · Einheit 2</span><h1>Training</h1><p className="lead">Kurze Abruffragen entlang der wiederkehrenden Prüfungswege des Unterrichts.</p></div></div>
      <section className="panel istr2-training">{istrEinheit2Training.map((q, i) => <details key={q.id}><summary>{i + 1}. {q.frage}</summary><p>{q.antwort}</p></details>)}</section>
    </>
  );
}

function IstrQuellenstand() {
  const technisch = istrEinheit2CaptureRanges.filter((r) => r.kind === "technisch");
  const fachlich = istrEinheit2CaptureRanges.filter((r) => r.kind !== "technisch");
  return (
    <>
      <div className="pagehead"><div><span className="kicker">IStR · Quellenstand</span><h1>Quellenabdeckung</h1><p className="lead">Die Unterrichtsquellen werden wie bei den anderen gebietsübergreifenden Fächern lückenlos dokumentiert; Wiederholungs- und Technikframes erzeugen keine künstlichen Doppelmodule.</p></div></div>
      <section className="panel"><span className="kicker">Schema IStR.pdf</span><h2>2 von 2 Seiten umgesetzt</h2><ul className="liste"><li><b>Seite 1:</b> Grundschema Internationales Steuerrecht – § 1 EStG, Wegzug, beschränkte Steuerpflicht, EIS und DBA-Verweis.</li><li><b>Seite 2:</b> Schema DBA – AAVV, blau markiert und in Einheit 2 vertieft.</li></ul></section>
      <section className="panel" style={{ marginTop: 14 }}><span className="kicker">{istrEinheit2Quelle.title}</span><h2>{istrEinheit2Quelle.pages} von {istrEinheit2Quelle.pages} Frames zugeordnet</h2><p>{istrEinheit2Quelle.hinweis}</p><h3>Fachliche / Fall- / Transferbereiche</h3><div className="istr2-chiprow">{fachlich.map((r) => <span className="istr2-chip" key={`${r.start}-${r.end}`}>{r.start === r.end ? `F. ${r.start}` : `F. ${r.start}–${r.end}`} · {r.label}</span>)}</div><h3 style={{ marginTop: 22 }}>Technische, private und reine Navigationsframes</h3><p className="istr2-source-note">Diese Frames sind in der Vollständigkeitszählung enthalten, werden aber wegen fehlenden Fachgehalts bzw. privater App-/Personenansichten nicht als Screenshots veröffentlicht.</p><div className="istr2-chiprow">{technisch.map((r) => <span className="istr2-chip istr2-chip--technisch" key={`${r.start}-${r.end}`}>{r.start === r.end ? `F. ${r.start}` : `F. ${r.start}–${r.end}`} · {r.label}</span>)}</div></section>
    </>
  );
}
