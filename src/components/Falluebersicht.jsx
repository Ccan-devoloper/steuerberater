import React, { useMemo, useState } from "react";
import Fallsammlungsfaelle from "./Fallsammlungsfaelle";

export default function Falluebersicht({ zugeordneteFaelle, offeneFaelle, module, oeffnenModul }) {
  const [suche, setSuche] = useState("");
  const [filter, setFilter] = useState("alle");

  const modulMap = useMemo(() => new Map(module.map((modul) => [modul.id, modul])), [module]);
  const alleFaelle = useMemo(
    () => [
      ...zugeordneteFaelle.map((fall) => ({ ...fall, verknuepfungsstatus: "verknuepft" })),
      ...offeneFaelle.map((fall) => ({ ...fall, verknuepfungsstatus: "offen" })),
    ].sort((a, b) => a.id.localeCompare(b.id, "de", { numeric: true })),
    [zugeordneteFaelle, offeneFaelle]
  );

  const sichtbar = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return alleFaelle.filter((fall) => {
      if (filter !== "alle" && fall.verknuepfungsstatus !== filter) return false;
      if (!q) return true;
      const zielmodul = fall.zielmodul_id ? modulMap.get(fall.zielmodul_id) : null;
      return [
        fall.id,
        fall.titel,
        fall.quellmodul,
        fall.sachverhalt,
        fall.loesung,
        zielmodul?.title,
        zielmodul?.law,
      ].join(" ").toLowerCase().includes(q);
    });
  }, [alleFaelle, filter, modulMap, suche]);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Fallsammlung</span>
          <h1>Alle Fälle und Lösungen</h1>
          <p className="lead">
            Sämtliche 90 Fälle sind hier zentral erreichbar. Zugeordnete Fälle führen direkt zum fachlich
            einschlägigen Lernmodul; noch offene Fälle bleiben vollständig verfügbar, jedoch ohne Modulverlinkung.
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

      <p className="falluebersicht__treffer">{sichtbar.length} von {alleFaelle.length} Fällen angezeigt</p>
      {sichtbar.length > 0 ? (
        <Fallsammlungsfaelle
          faelle={sichtbar}
          modulMap={modulMap}
          oeffnenModul={oeffnenModul}
          zeigeModulLink
        />
      ) : (
        <p className="panel falluebersicht__leer">Keine Fälle entsprechen der aktuellen Suche und Filterauswahl.</p>
      )}
    </>
  );
}
