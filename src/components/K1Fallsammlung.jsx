/* Eigener K1-Reiter für die Meurer-USt-Fallsammlung 2026. */
import "../data/k1-ust-einheit-2-nachtrag-register.js";
import "../data/k1-ust-einheit-3-register.js";
import "../data/k1-ust-einheit-4-register.js";
import "../data/k1-ust-einheit-5-register.js";
import "../data/k1-ust-einheit-6-register.js";
import "../data/k1-ust-einheit-7-register.js";
import "../data/k1-ust-einheit-8-register.js";
import React, { useEffect, useMemo, useRef, useState } from "react";
import k1UstEinheit1 from "../data/module-vertiefung-m.js";
import k1UstEinheit2 from "../data/module-vertiefung-n.js";
import { k1Fallsammlung, k1FallsammlungKategorien } from "../data/k1-fallsammlung.js";
import "./k1-fallsammlung.css";

const k1Inhalte = [...k1UstEinheit1, ...k1UstEinheit2];
export const k1FallsammlungInhaltById = new Map(k1Inhalte.map((inhalt) => [inhalt.id, inhalt]));

function overlapLabel(id) {
  const inhalt = k1FallsammlungInhaltById.get(Number(id));
  if (!inhalt) return `K1-Inhalt ${id}`;
  const art = inhalt.area === "Fall" ? "Originalfall" : "Lernmodul";
  return `${art} ${id}: ${inhalt.title}`;
}

function Fallkarte({ fall, onOpenInhalt }) {
  return (
    <article className="panel k1-fs-fall" id={`k1-fs-${fall.id.replace(".", "-")}`} data-fs-id={fall.id}>
      <header className="k1-fs-fall__kopf">
        <div>
          <span className="kicker">Fall {fall.id} · Seminartag {fall.seminartag}</span>
          <h3>{fall.title}</h3>
        </div>
        <div className="k1-fs-quellen" aria-label="Quellenstellen">
          <span>{fall.aufgabeQuelle}</span>
          <span>{fall.loesungQuelle}</span>
        </div>
      </header>

      {fall.overlapIds?.length > 0 && (
        <aside className="k1-fs-overlap" aria-label="Inhaltliche Überschneidungen mit K1">
          <strong>Inhaltliche Überschneidung in K1</strong>
          <p>Diese Stellen behandeln denselben oder eng überlappenden Prüfungsstoff:</p>
          <div className="k1-fs-overlap__links">
            {fall.overlapIds.map((id) => (
              <button type="button" key={id} onClick={() => onOpenInhalt(id)}>
                {overlapLabel(id)} <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </aside>
      )}

      <section className="k1-fs-aufgabe">
        <b>Aufgabe / Sachverhalt</b>
        {fall.aufgabe.map((absatz, index) => <p key={index}>{absatz}</p>)}
      </section>

      <details className="k1-fs-details">
        <summary>Lösung anzeigen</summary>
        <section className="k1-fs-loesung">
          <b>Lösung nach Meurer</b>
          {fall.loesung.map((absatz, index) => <p key={index}>{absatz}</p>)}
          <small>Quelle: {fall.loesungQuelle}</small>
        </section>
      </details>
    </article>
  );
}

export default function K1Fallsammlung({ ziel, onOpenInhalt }) {
  const [kategorie, setKategorie] = useState("alle");
  const [suche, setSuche] = useState("");
  const zielRef = useRef(null);

  const kategorienByLabel = useMemo(
    () => new Map(k1FallsammlungKategorien.map((eintrag) => [eintrag.label, eintrag.id])),
    [],
  );

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    const label = k1FallsammlungKategorien.find((eintrag) => eintrag.id === kategorie)?.label;
    return k1Fallsammlung.filter((fall) => {
      if (kategorie !== "alle" && fall.kategorie !== label) return false;
      if (!q) return true;
      return [fall.id, fall.title, fall.kategorie, ...fall.aufgabe, ...fall.loesung]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [kategorie, suche]);

  const gruppen = useMemo(() => {
    const map = new Map();
    for (const fall of gefiltert) {
      if (!map.has(fall.kategorie)) map.set(fall.kategorie, []);
      map.get(fall.kategorie).push(fall);
    }
    return Array.from(map.entries());
  }, [gefiltert]);

  useEffect(() => {
    const id = ziel?.id;
    if (!id) return;
    const fall = k1Fallsammlung.find((eintrag) => eintrag.id === id);
    if (!fall) return;
    setSuche("");
    setKategorie("alle");
    zielRef.current = id;
    const timer = window.setTimeout(() => {
      const element = document.querySelector(`[data-fs-id='${id}']`);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
      element?.classList.add("k1-fs-fall--ziel");
      window.setTimeout(() => element?.classList.remove("k1-fs-fall--ziel"), 1800);
    }, 60);
    return () => window.clearTimeout(timer);
  }, [ziel]);

  return (
    <div className="k1-fs-page">
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 1 · Umsatzsteuer · Fallsammlung</span>
          <h1>Meurer-Fallsammlung Umsatzsteuer</h1>
          <p className="lead">
            44 Originalaufgaben aus sieben Seminartagen mit den zugehörigen Lösungen, nach Themenkategorien geordnet.
          </p>
        </div>
        <span className="zaehler">{gefiltert.length} von 44 Fällen</span>
      </div>

      <section className="panel k1-fs-source">
        <strong>Quellenstand · Mai 2026</strong>
        <p>
          Aufgaben-PDF: 29 Seiten · Lösungs-PDF: 50 Seiten · Thomas Meurer, Diplom-Finanzwirt (FH).
          Die Lösungssammlung weist darauf hin, dass dort kursiv gesetzte Lösungshinweise grundsätzlich in der Prüfungsklausur entbehrlich sind; maßgeblich bleibt die jeweilige Aufgabenstellung.
        </p>
      </section>

      <section className="k1-fs-steuerung" aria-label="Fallsammlung filtern">
        <label className="k1-fs-suche">
          <span>Fallsammlung durchsuchen</span>
          <input
            type="search"
            value={suche}
            onChange={(event) => setSuche(event.target.value)}
            placeholder="Fallnummer, Stichwort, Norm oder Betrag"
          />
        </label>
        <div className="k1-fs-kategorien" role="group" aria-label="Kategorien">
          {k1FallsammlungKategorien.map((eintrag) => (
            <button
              type="button"
              key={eintrag.id}
              aria-pressed={kategorie === eintrag.id}
              onClick={() => setKategorie(eintrag.id)}
            >
              {eintrag.label}
            </button>
          ))}
        </div>
      </section>

      {gruppen.length === 0 && (
        <section className="panel k1-fs-leer">
          <h3>Keine Fälle gefunden</h3>
          <p>Suchbegriff oder Kategorie ändern.</p>
        </section>
      )}

      {gruppen.map(([gruppenname, faelle]) => (
        <section className="k1-fs-gruppe" key={gruppenname}>
          <div className="k1-fs-gruppe__kopf">
            <div>
              <span className="kicker">Kategorie</span>
              <h2>{gruppenname}</h2>
            </div>
            <span>{faelle.length} Fälle</span>
          </div>
          <div className="k1-fs-liste">
            {faelle.map((fall) => <Fallkarte key={fall.id} fall={fall} onOpenInhalt={onOpenInhalt} />)}
          </div>
        </section>
      ))}
    </div>
  );
}
