import React, { useEffect, useRef } from "react";
import { IconSuche, IconSonne, IconMond } from "./Icons";
import { PrioLeiste } from "./Prioritaet";

/* Gemeinsame Kopfleiste und Klausuren-Leiste aller drei Campusse.
   Beschriftungen und Reihenfolge leben ausschließlich hier, damit
   K1, K2 und K3 zwangsläufig identisch bleiben. */

/* Farbe des Klausurtags: K1 Blau, K2 Orange, K3 Grün – dieselbe Marke wie auf
   Instagram. Das Attribut am <html> schaltet die Palette in index.css um; hier
   steht es, weil jede der drei Oberflächen dieselbe Kopfleiste benutzt. */
const KLAUSUR_FARBE = { 1: "#0c1b4d", 2: "#3a1708", 3: "#0b4a33" };

function useKlausurFarbe(klausur) {
  useEffect(() => {
    const wurzel = document.documentElement;
    const vorher = wurzel.dataset.klausur;
    wurzel.dataset.klausur = String(klausur);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", KLAUSUR_FARBE[klausur] || KLAUSUR_FARBE[3]);
    return () => { if (vorher) wurzel.dataset.klausur = vorher; else delete wurzel.dataset.klausur; };
  }, [klausur]);
}

export function CampusTopbar({
  klausur, marke, name, untertitel, aufCockpit,
  navZurueck, navVor, zurueckMoeglich, vorMoeglich,
  suche, sucheSetzen, suchePlatzhalter, sucheAria,
  dunkel, dunkelUmschalten,
}) {
  useKlausurFarbe(klausur);
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
  { id: "k1", kuerzel: "K1", fach: "Verfahrensrecht", status: "AO/USt verfügbar · ErbSt folgt", titel: "Klausur 1 öffnen" },
  { id: "kst", kuerzel: "K2", fach: "Ertragsteuerrecht", status: "KSt verfügbar · ESt/GewSt folgen", titel: "Klausur 2 öffnen" },
  { id: "k3", kuerzel: "K3", fach: "Buchführung und Bilanzwesen", status: "Allgemein · PersG · UmwStR verfügbar", titel: "Klausur 3 öffnen" },
];

/* Die tatsächliche Höhe der Klausuren-Leiste als CSS-Variable. Bei schmalen
   Fenstern bricht die Beschriftung um; dann stimmen die festen Abstände der
   darunterliegenden Leisten und der Seitenleiste sonst nicht mehr. */
function useKlausurenHoehe(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;
    const wurzel = document.documentElement;
    const setzen = () => wurzel.style.setProperty("--klausuren-h", `${Math.round(el.getBoundingClientRect().height)}px`);
    setzen();
    const beobachter = new ResizeObserver(setzen);
    beobachter.observe(el);
    return () => { beobachter.disconnect(); wurzel.style.removeProperty("--klausuren-h"); };
  }, [ref]);
}

export function KlausurenLeiste({ aktiv, aufCockpit, onKlausurwechsel }) {
  const leiste = useRef(null);
  useKlausurenHoehe(leiste);
  return (
    <>
    <nav className="klausuren" aria-label="Klausuren des schriftlichen Examens" ref={leiste}>
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
    {/* Legende der Examensprioritäten – in allen Campussen an derselben Stelle. */}
    <PrioLeiste />
    </>
  );
}
