import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import Fallsammlungsfaelle from "./Fallsammlungsfaelle";

const FAELLE_PRO_SCHRITT = 12;

export default function Falluebersicht({ zugeordneteFaelle, offeneFaelle, module, oeffnenModul }) {
  const [suche, setSuche] = useState("");
  const [filter, setFilter] = useState("alle");
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
      return !q || fall.suchtext.includes(q);
    });
  }, [alleFaelle, filter, verzögerteSuche]);

  useEffect(() => {
    setAnzahl(FAELLE_PRO_SCHRITT);
  }, [filter, verzögerteSuche]);

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
          <button type="button" aria-pressed={filter === "offen"} onClick={() => setFilter("offen")}>Ohne Modul {offeneFaelle.length}</button>
        </div>
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
        <p className="panel falluebersicht__leer">Keine Fälle entsprechen der aktuellen Suche und Filterauswahl.</p>
      )}
    </>
  );
}
