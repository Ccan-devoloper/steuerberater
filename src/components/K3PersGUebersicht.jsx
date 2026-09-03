import React from "react";
import {
  persgUebersicht, persgUebersichtLegende, persgUebersichtTonName, persgUebersichtMerksatz,
} from "../data/k3-persg-uebersicht.js";
import "./k3-persg-uebersicht.css";

/* Genereller Überblick über den Lebenszyklus der Mitunternehmerschaft.
   Vier Felder – Eintritt, Gesellschafterwechsel, Ausscheiden, Beendigung –
   mit farbcodierter Rechtsfolge und Rücksprung in die Lernmodule. */

export function PersGUebersichtLegende() {
  return <ul className="persg-ueb-legende">
    {persgUebersichtLegende.map((l) => <li key={l.ton}><span className={`persg-ueb-punkt persg-ueb-punkt--${l.ton}`} aria-hidden="true" />{l.label}</li>)}
  </ul>;
}

function Eintrag({ eintrag, modulOeffnen }) {
  const ziele = eintrag.moduleIds || [];
  return <article className={`persg-ueb-eintrag persg-ueb-eintrag--${eintrag.ton}`}>
    <b>{eintrag.titel}</b>
    <span className="persg-ueb-norm">{eintrag.norm}</span>
    <span className="persg-ueb-rechtsfolge">{persgUebersichtTonName[eintrag.ton]}</span>
    <p>{eintrag.hinweis}</p>
    {ziele.length > 0 && modulOeffnen && <div className="persg-ueb-links">
      {ziele.map((id) => <button key={id} onClick={() => modulOeffnen(id)}>Modul {id} ↗</button>)}
    </div>}
  </article>;
}

export default function K3PersGUebersicht({ modulOeffnen }) {
  return <div className="persg-ueb">
    <div className="persg-ueb-raster">
      {persgUebersicht.map((gruppe) => <section className="persg-ueb-gruppe" key={gruppe.id} id={`persg-ueb-${gruppe.id}`}>
        <header><h2>{gruppe.titel}</h2><p>{gruppe.leitfrage}</p></header>
        <div className="persg-ueb-liste">
          {gruppe.eintraege.map((e) => <Eintrag key={e.titel} eintrag={e} modulOeffnen={modulOeffnen} />)}
        </div>
      </section>)}
    </div>
    <PersGUebersichtLegende />
    <p className="persg-ueb-merksatz"><b>Merksatz</b> {persgUebersichtMerksatz}</p>
  </div>;
}
