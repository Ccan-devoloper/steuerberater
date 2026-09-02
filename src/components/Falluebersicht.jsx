import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import Fallsammlungsfaelle from "./Fallsammlungsfaelle";
import { PrioFilter, usePrioFilter, prioritaetFuer } from "./Prioritaet";

const FAELLE_PRO_SCHRITT = 12;

/* Fachgebiete für die zweite Filterzeile. Sie werden fest angeboten, auch wenn
   ein Gebiet derzeit keinen Fall enthält — sonst verschwindet der Filter beim
   Nachliefern von Fällen wieder und die Auswahl wirkt zufällig. */
const themen = [
  { id: "alle", label: "Alle Gebiete" },
  { id: "EU", label: "Einzelunternehmen" },
  { id: "PersG", label: "Personengesellschaft" },
  { id: "KapG", label: "Kapitalgesellschaft" },
  { id: "Technik", label: "Klausurtechnik" },
];

/* Das Fachgebiet eines Falls ergibt sich aus seinem Ziellernmodul: bei den
   Originalfällen aus deren optionalem `thema`, sonst aus dem Bereich. */
function themaVon(zielmodul) {
  if (!zielmodul) return null;
  return zielmodul.area === "Fall" ? zielmodul.thema || "EU" : zielmodul.area;
}

export default function Falluebersicht({ zugeordneteFaelle, offeneFaelle, module, oeffnenModul }) {
  const [suche, setSuche] = useState("");
  const [filter, setFilter] = useState("alle");
  const [thema, setThema] = useState("alle");
  const [prio, setPrio] = usePrioFilter("stb-k3-fall-prio");
  const [anzahl, setAnzahl] = useState(FAELLE_PRO_SCHRITT);
  const verzögerteSuche = useDeferredValue(suche);

  const modulMap = useMemo(() => new Map(module.map((modul) => [modul.id, modul])), [module]);
  const alleFaelle = useMemo(
    () => [
      ...zugeordneteFaelle.map((fall) => ({ ...fall, verknuepfungsstatus: "verknuepft" })),
      ...offeneFaelle.map((fall) => ({ ...fall, verknuepfungsstatus: "offen" })),
    ]
      .sort((a, b) => a.id.localeCompare(b.id, "de", { numeric: true }))
      .map((fall) => {
        const zielmodul = fall.zielmodul_id ? modulMap.get(fall.zielmodul_id) : null;
        return {
          ...fall,
          thema: themaVon(zielmodul),
          prio: zielmodul
            ? prioritaetFuer("bilanz", zielmodul, { typ: "modul", id: zielmodul.id })
            : prioritaetFuer("bilanz", { title: fall.titel, subtitle: fall.quellmodul }),
          suchtext: [
            fall.id,
            fall.titel,
            fall.quellmodul,
            fall.sachverhalt,
            fall.loesung,
            zielmodul?.title,
            zielmodul?.law,
          ].join(" ").toLowerCase(),
        };
      }),
    [zugeordneteFaelle, offeneFaelle, modulMap]
  );

  const gefiltert = useMemo(() => {
    const q = verzögerteSuche.trim().toLowerCase();
    return alleFaelle.filter((fall) => {
      if (filter !== "alle" && fall.verknuepfungsstatus !== filter) return false;
      if (thema !== "alle" && fall.thema !== thema) return false;
      if (prio !== "alle" && fall.prio.stufe !== prio) return false;
      return !q || fall.suchtext.includes(q);
    });
  }, [alleFaelle, filter, thema, prio, verzögerteSuche]);

  const jeThema = useMemo(() => {
    const zaehler = {};
    for (const fall of alleFaelle) if (fall.thema) zaehler[fall.thema] = (zaehler[fall.thema] || 0) + 1;
    return zaehler;
  }, [alleFaelle]);
  const jePrio = useMemo(() => {
    const zaehler = { hoch: 0, mittel: 0, selten: 0 };
    for (const fall of alleFaelle) zaehler[fall.prio.stufe] += 1;
    return zaehler;
  }, [alleFaelle]);

  useEffect(() => {
    setAnzahl(FAELLE_PRO_SCHRITT);
  }, [filter, thema, prio, verzögerteSuche]);

  const sichtbar = gefiltert.slice(0, anzahl);
  const weitere = Math.max(0, gefiltert.length - sichtbar.length);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Fallsammlung</span>
          <h1>Alle Fälle und Lösungen</h1>
          <p className="lead">
            Sämtliche {alleFaelle.length} Fälle sind hier zentral erreichbar. Die Karten werden schrittweise
            geladen; Sachverhalt und Lösung werden erst beim Öffnen aufbereitet.
          </p>
        </div>
        <span className="zaehler">{alleFaelle.length} Fälle</span>
      </div>

      <section className="falluebersicht__steuerung" aria-label="Fallsammlung filtern">
        <label className="falluebersicht__suche">
          <span>Fälle durchsuchen</span>
          <input
            type="search"
            value={suche}
            onChange={(event) => setSuche(event.target.value)}
            placeholder="Thema, Fall-ID, Sachverhalt oder Lösung"
          />
        </label>
        <div className="falluebersicht__filter">
          <button type="button" aria-pressed={filter === "alle"} onClick={() => setFilter("alle")}>Alle {alleFaelle.length}</button>
          <button type="button" aria-pressed={filter === "verknuepft"} onClick={() => setFilter("verknuepft")}>Mit Modul {zugeordneteFaelle.length}</button>
          {/* Der Filter erscheint nur, solange es überhaupt nicht zugeordnete Fälle gibt. */}
          {offeneFaelle.length > 0 && (
            <button type="button" aria-pressed={filter === "offen"} onClick={() => setFilter("offen")}>Ohne Modul {offeneFaelle.length}</button>
          )}
        </div>
        <div className="falluebersicht__filter falluebersicht__filter--thema">
          {themen.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={thema === t.id}
              onClick={() => setThema(t.id)}
            >
              {t.label} {t.id === "alle" ? alleFaelle.length : jeThema[t.id] || 0}
            </button>
          ))}
        </div>
        <PrioFilter wert={prio} setWert={setPrio} zaehlung={jePrio} />
      </section>

      <p className="falluebersicht__treffer">
        {sichtbar.length} von {gefiltert.length} Treffern geladen
        {suche !== verzögerteSuche ? " · Suche wird aktualisiert …" : ""}
      </p>
      {sichtbar.length > 0 ? (
        <>
          <Fallsammlungsfaelle
            faelle={sichtbar}
            modulMap={modulMap}
            oeffnenModul={oeffnenModul}
            zeigeModulLink
          />
          {weitere > 0 && (
            <button
              type="button"
              className="fallsammlung__mehr"
              onClick={() => setAnzahl((wert) => Math.min(wert + FAELLE_PRO_SCHRITT, gefiltert.length))}
            >
              Weitere {Math.min(FAELLE_PRO_SCHRITT, weitere)} Fälle laden
              <small>{weitere} noch nicht angezeigt</small>
            </button>
          )}
        </>
      ) : (
        <p className="panel falluebersicht__leer">
          {thema !== "alle" && !jeThema[thema] ? (
            <>
              Zum Gebiet <strong>{themen.find((t) => t.id === thema)?.label}</strong> enthält die
              Fallsammlung derzeit keinen Fall. Die Lernmodule dieses Gebiets sind über
              „Lernmodule“ erreichbar; die Originalfälle der Kursmitschriften decken bisher
              vor allem das Einzelunternehmen ab.
            </>
          ) : (
            "Keine Fälle entsprechen der aktuellen Suche und Filterauswahl."
          )}
        </p>
      )}
    </>
  );
}
