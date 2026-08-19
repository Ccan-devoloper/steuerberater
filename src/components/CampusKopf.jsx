import React from "react";
import { IconSuche, IconSonne, IconMond } from "./Icons";

/* Gemeinsame Kopfleiste und Klausuren-Leiste aller drei Campusse.
   Beschriftungen und Reihenfolge leben ausschließlich hier, damit
   K1, K2 und K3 zwangsläufig identisch bleiben. */

export function CampusTopbar({
  klausur, marke, name, untertitel, aufCockpit,
  navZurueck, navVor, zurueckMoeglich, vorMoeglich,
  suche, sucheSetzen, suchePlatzhalter, sucheAria,
  dunkel, dunkelUmschalten,
}) {
  return (
    <header className="topbar">
      <button className="brand" onClick={aufCockpit}>
        <span className="brand__mark">{marke}</span>
        <span className="brand__text">
          <strong>{name}</strong>
          <span>{untertitel}</span>
        </span>
      </button>
      <div role="group" aria-label={`Navigation in Klausur ${klausur}`} style={{ display: "flex", gap: 4 }}>
        <button type="button" className="iconbtn" onClick={navZurueck} disabled={!zurueckMoeglich} aria-label="Zurück zur vorherigen Seite" title="Zurück (Alt + Pfeil links)">←</button>
        <button type="button" className="iconbtn" onClick={navVor} disabled={!vorMoeglich} aria-label="Vor zur nächsten Seite" title="Vor (Alt + Pfeil rechts)">→</button>
      </div>
      <span className="topbar__spacer" />
      <label className="search">
        <IconSuche />
        <input
          type="search"
          value={suche}
          placeholder={suchePlatzhalter}
          aria-label={sucheAria}
          onChange={(e) => sucheSetzen(e.target.value)}
        />
      </label>
      <button
        className="iconbtn"
        onClick={dunkelUmschalten}
        aria-label={dunkel ? "Helles Design" : "Dunkles Design"}
        title={dunkel ? "Helles Design" : "Dunkles Design"}
      >
        {dunkel ? <IconSonne /> : <IconMond />}
      </button>
    </header>
  );
}

const KLAUSUREN = [
  { id: "k1", kuerzel: "K1", fach: "Verfahrensrecht", status: "USt verfügbar · AO/ErbSt folgen", titel: "Klausur 1 öffnen" },
  { id: "kst", kuerzel: "K2", fach: "Ertragsteuerrecht", status: "KSt verfügbar · ESt/GewSt folgen", titel: "Klausur 2 öffnen" },
  { id: "k3", kuerzel: "K3", fach: "Buchführung und Bilanzwesen", status: "vollständig verfügbar", titel: "Klausur 3 öffnen" },
];

export function KlausurenLeiste({ aktiv, aufCockpit, onKlausurwechsel }) {
  return (
    <nav className="klausuren" aria-label="Klausuren des schriftlichen Examens">
      {KLAUSUREN.map((k) => {
        const istAktiv = k.id === aktiv;
        return (
          <button
            key={k.id}
            className="klausur"
            aria-current={istAktiv ? "true" : undefined}
            onClick={istAktiv ? aufCockpit : onKlausurwechsel ? () => onKlausurwechsel(k.id) : undefined}
            disabled={!istAktiv && !onKlausurwechsel}
            title={!istAktiv && onKlausurwechsel ? k.titel : undefined}
          >
            <b>{k.kuerzel}</b>
            <span><strong>{k.fach}</strong> <small>{k.status}</small></span>
          </button>
        );
      })}
    </nav>
  );
}
