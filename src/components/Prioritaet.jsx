import React, { useMemo, useState } from "react";
import {
  PRIORITAETEN, PRIORITAET_REIHENFOLGE, PRIORITAET_QUELLEN, PRIORITAET_LERNZEIT,
  PRIORITAET_KETTEN, PRIORITAET_GEFAEHRLICHE_EXOTEN, PRIORITAET_TABELLEN, PRIORITAET_FAECHER,
  prioritaetFuer, hoechstePrioritaet,
} from "../data/examensprioritaet";
import { laden, sichern } from "../lib/fortschritt";
import "./prioritaet.css";

/* ==========================================================================
   Examensprioritäten in der Oberfläche
   --------------------------------------------------------------------------
   Ein Bauteil-Satz für alle Campusse:
     <PrioBadge>     Marker an Modulen, Fällen, Hausaufgaben, Schemata …
     <PrioNorm>      Punkt hinter einer einzelnen Norm (Normketten, Register)
     <PrioFilter>    Filterzeile 🔴 / 🟠 / 🟢 über Listen
     <PrioLegende>   die Legende (kompakt oder ausführlich)
     <PrioLeiste>    schmale, aufklappbare Legende unter der Klausuren-Leiste
     <PrioTabelle>   Häufigkeitstabelle eines Fachs aus den Auswertungen
     <PrioCockpit>   Cockpit-Abschnitt: Legende + Prüfungskette + Tabelle
   Die Einstufung selbst kommt ausschließlich aus src/data/examensprioritaet.js.
   ========================================================================== */

export { prioritaetFuer, hoechstePrioritaet };

function titelText(p) {
  return `${p.emoji} ${p.label} · ${p.thema} · ${p.befund} [${p.fundstelle}]`;
}

/* Marker. Entweder ein fertiges Ergebnis (prio) oder fach + inhalt übergeben. */
export function PrioBadge({ prio, fach, inhalt, typ, id, kompakt = false, mitThema = false, className = "", stopPropagation = false, nurBeiTreffer = false }) {
  const p = prio || prioritaetFuer(fach, inhalt, { typ, id });
  /* Für Überschriften ohne fachlichen Bezug (z. B. „Merkzettel“) lieber gar kein Marker als ein irreführender. */
  if (nurBeiTreffer && !p.manuell && p.treffer.length === 0) return null;
  return (
    <span
      className={`prio prio--${p.stufe}${kompakt ? " prio--kompakt" : ""} ${className}`.trim()}
      title={titelText(p)}
      data-prio={p.stufe}
      onClick={stopPropagation ? (e) => e.stopPropagation() : undefined}
    >
      <span className="prio__emoji" aria-hidden="true">{p.emoji}</span>
      {!kompakt && <b>{p.label}</b>}
      {mitThema && <small>{p.thema}</small>}
      <span className="sr-only">Examenspriorität {p.label}: {p.thema}. {p.befund}</span>
    </span>
  );
}

/* Punkt hinter einer Norm. */
export function PrioNorm({ fach, norm }) {
  const p = prioritaetFuer(fach, String(norm));
  return <span className={`prio-dot prio-dot--${p.stufe}`} title={titelText(p)} aria-label={`Examenspriorität ${p.label}`}>{p.emoji}</span>;
}

/* Filterzeile. `zaehlung` optional: { hoch, mittel, selten }. */
export function PrioFilter({ wert, setWert, zaehlung, label = "Nach Examenspriorität filtern" }) {
  return (
    <div className="filter prio-filter" aria-label={label}>
      <button aria-pressed={wert === "alle"} onClick={() => setWert("alle")}>Alle Prioritäten</button>
      {PRIORITAET_REIHENFOLGE.map((stufe) => {
        const p = PRIORITAETEN[stufe];
        return (
          <button key={stufe} aria-pressed={wert === stufe} onClick={() => setWert(stufe)} className={`prio-filter__${stufe}`} title={p.text}>
            {p.emoji} {p.label}{zaehlung ? ` (${zaehlung[stufe] ?? 0})` : ""}
          </button>
        );
      })}
    </div>
  );
}

/* Hilfsfunktionen für Listen: filtert nach Stufe und zählt. */
export function prioFiltern(liste, wert, prioVon) {
  if (wert === "alle") return liste;
  return liste.filter((x) => prioVon(x).stufe === wert);
}
export function prioZaehlen(liste, prioVon) {
  const z = { hoch: 0, mittel: 0, selten: 0 };
  for (const x of liste) z[prioVon(x).stufe] += 1;
  return z;
}
export function usePrioFilter(schluessel = "stb-prio-filter") {
  const [wert, setWertIntern] = useState(() => {
    const roh = laden(schluessel, "alle");
    return ["alle", "hoch", "mittel", "selten"].includes(roh) ? roh : "alle";
  });
  const setWert = (neu) => { setWertIntern(neu); sichern(schluessel, neu); };
  return [wert, setWert];
}

/* Legende. */
export function PrioLegende({ fach, kompakt = false, titel = "Legende: Examenspriorität" }) {
  const kette = fach ? PRIORITAET_KETTEN.find((k) => k.fach === fach) : null;
  const exoten = fach ? PRIORITAET_GEFAEHRLICHE_EXOTEN.filter((e) => e.fach === fach) : PRIORITAET_GEFAEHRLICHE_EXOTEN;
  return (
    <section className={`prio-legende${kompakt ? " prio-legende--kompakt" : ""}`} aria-label={titel}>
      <div className="prio-legende__kopf">
        <span className="kicker">{titel}</span>
        {!kompakt && <p>Jeder Inhalt dieses Campus trägt einen Marker. Grundlage sind die Original-Musterlösungen der Finanzverwaltung 2013–2024, ausgewertet in „Exoten versus Dauerbrenner in der Steuerberaterprüfung“ (DStR 2025).</p>}
      </div>
      <ul className="prio-legende__liste">
        {PRIORITAET_REIHENFOLGE.map((stufe) => {
          const p = PRIORITAETEN[stufe];
          return (
            <li key={stufe} className={`prio-legende__eintrag prio-legende__eintrag--${stufe}`}>
              <span className={`prio prio--${stufe}`}><span className="prio__emoji" aria-hidden="true">{p.emoji}</span><b>{p.label}</b></span>
              <div>
                <strong>{p.kurz} · ca. {PRIORITAET_LERNZEIT[stufe]} % der Lernzeit</strong>
                {!kompakt && <span>{p.text}</span>}
              </div>
            </li>
          );
        })}
      </ul>
      {!kompakt && kette && (
        <div className="prio-legende__kette">
          <b>{kette.titel} – Schema ohne Nachdenken abrufen:</b>
          <span>{kette.kette}</span>
        </div>
      )}
      {!kompakt && exoten.length > 0 && (
        <div className="prio-legende__exoten">
          <b>Gefährliche Exoten (selten, aber punktestark):</b>
          <ul>
            {exoten.map((e) => <li key={e.thema}><span>{e.thema}</span><small>{e.haeufigkeit} · {e.punkte}</small></li>)}
          </ul>
        </div>
      )}
      {!kompakt && (
        <p className="prio-legende__quellen">
          Quellen: {PRIORITAET_QUELLEN.map((q) => `[${q.id}] ${q.zitat} (${q.zeitraum})`).join(" · ")}. „Selten“ heißt nicht „weglassen“ – die Kernblöcke kommen nur zuerst.
        </p>
      )}
    </section>
  );
}

/* Schmale, aufklappbare Legende – erscheint unter der Klausuren-Leiste in
   allen Campussen. Der Aufklappzustand wird gemerkt. */
export function PrioLeiste() {
  const [offen, setOffen] = useState(() => laden("stb-prio-leiste-offen", false) === true);
  const umschalten = () => setOffen((o) => { sichern("stb-prio-leiste-offen", !o); return !o; });
  return (
    <div className="prio-leiste" data-prio-leiste>
      <div className="prio-leiste__zeile">
        <span className="prio-leiste__titel">Examenspriorität</span>
        {PRIORITAET_REIHENFOLGE.map((stufe) => {
          const p = PRIORITAETEN[stufe];
          return <span key={stufe} className={`prio prio--${stufe}`} title={p.text}><span className="prio__emoji" aria-hidden="true">{p.emoji}</span><b>{p.label}</b></span>;
        })}
        <span className="prio-leiste__hinweis">nach Häufigkeit in den Musterlösungen 2013–2024 (DStR 2025, 1825 · 1961 · 2097)</span>
        <button type="button" className="prio-leiste__toggle" aria-expanded={offen} onClick={umschalten}>
          {offen ? "Legende schließen" : "Legende"}
        </button>
      </div>
      {offen && <div className="prio-leiste__detail"><PrioLegende /></div>}
    </div>
  );
}

/* Häufigkeitstabelle eines Fachs. */
export function PrioTabelle({ fach, titel }) {
  const tabelle = PRIORITAET_TABELLEN[fach];
  if (!tabelle) return null;
  return (
    <div className="prio-tabelle">
      <div className="prio-tabelle__kopf">
        <span className="kicker">{titel || "Häufigkeit in den Original-Musterlösungen"}</span>
        <h3>{tabelle.titel}</h3>
      </div>
      <table>
        <thead><tr><th>Prio</th><th>Thema</th><th>Häufigkeit</th><th>Hinweis</th></tr></thead>
        <tbody>
          {tabelle.zeilen.map((z, i) => {
            const p = PRIORITAETEN[z.stufe];
            return (
              <tr key={i} className={`prio-tabelle__zeile--${z.stufe}`}>
                <td><span className={`prio prio--${z.stufe} prio--kompakt`} title={p.label}><span className="prio__emoji" aria-hidden="true">{p.emoji}</span></span></td>
                <td>{z.thema}</td>
                <td>{z.haeufigkeit}</td>
                <td>{z.hinweis}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <small>Quelle: {PRIORITAET_QUELLEN.find((q) => q.id === tabelle.quelle)?.zitat}</small>
    </div>
  );
}

/* Cockpit-Abschnitt eines Campus. `zaehlung` = { hoch, mittel, selten } der
   Inhalte dieses Campus; `luecke` = optionaler Hinweis auf fehlende Quellen. */
export function PrioCockpit({ fach, zaehlung, luecke, onFilter }) {
  const fachInfo = PRIORITAET_FAECHER[fach];
  return (
    <section className="abschnitt prio-cockpit" id="examensprioritaet">
      <div className="kst-abschnitt-kopf">
        <div>
          <span className="kicker">Gezielt lernen</span>
          <h2>Examensprioritäten {fachInfo ? `· ${fachInfo.label}` : ""}</h2>
        </div>
        {zaehlung && (
          <div className="prio-cockpit__zaehlung" role="group" aria-label="Verteilung der Inhalte">
            {PRIORITAET_REIHENFOLGE.map((stufe) => {
              const p = PRIORITAETEN[stufe];
              const Tag = onFilter ? "button" : "span";
              return (
                <Tag key={stufe} className={`prio prio--${stufe}`} onClick={onFilter ? () => onFilter(stufe) : undefined} title={onFilter ? `Nur ${p.label} anzeigen` : p.text}>
                  <span className="prio__emoji" aria-hidden="true">{p.emoji}</span><b>{zaehlung[stufe] ?? 0}</b> {p.label}
                </Tag>
              );
            })}
          </div>
        )}
      </div>
      {luecke && <div className="prio-cockpit__luecke"><b>🔴 Noch nicht im Campus:</b> {luecke}</div>}
      <div className="prio-cockpit__raster">
        <PrioLegende fach={fach} />
        <PrioTabelle fach={fach} />
      </div>
    </section>
  );
}

/* Zählt eine Liste von Inhalten eines Fachs. */
export function usePrioZaehlung(fach, liste, typVon = () => undefined) {
  return useMemo(() => prioZaehlen(liste, (x) => prioritaetFuer(fach, x, { typ: typVon(x), id: x.id })), [fach, liste, typVon]);
}

export default PrioBadge;
