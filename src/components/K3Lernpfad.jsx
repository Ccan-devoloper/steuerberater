import React, { useEffect, useMemo, useState } from "react";
import { laden, sichern, useFortschritt, anteil } from "../lib/fortschritt";
import { Notiz, Rechnung, Buchungssatz, euro } from "./Bausteine";
import { PrioBadge } from "./Prioritaet";
import "./k3-lernpfad.css";

/* ==========================================================================
   „Schritt für Schritt“ – gemeinsamer Lernpfad-Reiter für die K3-Campusse
   Personengesellschaften und Umwandlungssteuerrecht.
   --------------------------------------------------------------------------
   Die Inhalte kommen ausschließlich aus src/data/k3-lernpfad-persg.js bzw.
   src/data/k3-lernpfad-umwstr.js. Die Komponente kennt keine Fachlogik,
   sondern rendert Kapitel, Lektionen und Blocktypen.

   Props
     konfig    { id, fach, kicker, titel, lead, kapitel, lektionen,
                 gesamtminuten, abschluss }
     aktiv     Lektions-ID aus dem Campus-Verlauf (optional). Ist sie gesetzt,
               steuert der Campus die Lektion; sonst merkt sich der Reiter die
               zuletzt geöffnete Lektion selbst.
     onOeffnen (id) → Campus legt einen Verlaufsschritt an (optional).
     verweise  Handler für Querverweise; jeder Schlüssel ist optional:
               modul { label(id), oeffnen(id) }, schema { label(id), oeffnen(id) },
               fall { label(id), oeffnen(id) }, umwSchema { label(nr), oeffnen(nr) },
               hausaufgabe { label(nr), oeffnen(nr) }, umwstr(), persg()
   ========================================================================== */

const BLOCK_UEBERSCHRIFT = { schritte: "Schritt für Schritt", liste: "Auf einen Blick", tabelle: "Übersicht" };

export default function K3Lernpfad({ konfig, aktiv = null, onOeffnen, verweise = {} }) {
  const { lektionen, kapitel } = konfig;
  const ids = useMemo(() => new Set(lektionen.map((l) => l.id)), [lektionen]);
  const lektionKey = `stb-k3-${konfig.id}-lektion`;
  const [intern, setIntern] = useState(() => {
    const roh = laden(lektionKey, lektionen[0].id);
    return ids.has(roh) ? roh : lektionen[0].id;
  });
  const gelesen = useFortschritt(`stb-k3-${konfig.id}-gelesen`, ids);
  const [antworten, setAntworten] = useState({});

  const aktivId = aktiv && ids.has(aktiv) ? aktiv : intern;
  const index = Math.max(0, lektionen.findIndex((l) => l.id === aktivId));
  const lektion = lektionen[index];
  const kapitelVon = (l) => kapitel.find((k) => k.id === l.kapitel) || kapitel[0];
  const alleGelesen = gelesen.anzahl >= lektionen.length;

  /* Der Campus kann eine Lektion aus dem Verlauf vorgeben (Vor/Zurück). Dann
     folgt der interne Merker, damit ein späterer Aufruf ohne Vorgabe dort
     weitermacht. */
  useEffect(() => {
    if (aktiv && ids.has(aktiv) && aktiv !== intern) {
      setIntern(aktiv);
      sichern(lektionKey, aktiv);
    }
  }, [aktiv, ids, intern, lektionKey]);

  const oeffnen = (id) => {
    if (!ids.has(id)) return;
    setIntern(id);
    sichern(lektionKey, id);
    onOeffnen?.(id);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const weiter = () => {
    if (!gelesen.menge.has(lektion.id)) gelesen.umschalten(lektion.id);
    if (index + 1 < lektionen.length) oeffnen(lektionen[index + 1].id);
    else if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const antwort = (frageIndex) => antworten[`${lektion.id}:${frageIndex}`];
  const antworten_setzen = (frageIndex, wahl) => setAntworten((a) => ({ ...a, [`${lektion.id}:${frageIndex}`]: wahl }));

  return (
    <div className="lernpfad">
      <div className="pagehead">
        <div>
          <span className="kicker">{konfig.kicker}</span>
          <h1>{konfig.titel}</h1>
          <p className="lead">{konfig.lead}</p>
        </div>
        <div className="zaehler lernpfad__zaehler">
          <b>{gelesen.anzahl}/{lektionen.length}</b> <span>Lektionen verstanden</span>
          <small>{lektionen.length} Lektionen · ca. {Math.round(konfig.gesamtminuten / 60 * 10) / 10} Std.</small>
        </div>
      </div>

      {alleGelesen && (
        <section className="lernpfad__abschluss" role="status">
          <span className="kicker">Geschafft</span>
          <h2>Alle {lektionen.length} Lektionen verstanden.</h2>
          <p>{konfig.abschluss}</p>
          <div className="lernpfad__abschluss-aktionen">
            {verweise.klausur && <button className="btn" onClick={() => verweise.klausur()}>{verweise.klausurLabel || "Jetzt üben"}</button>}
            <button className="btn btn--linie" onClick={() => window.confirm("Fortschritt dieses Lernpfads zurücksetzen?") && gelesen.zuruecksetzen()}>Fortschritt zurücksetzen</button>
          </div>
        </section>
      )}

      <div className="lernpfad__raster">
        <nav className="panel lernpfad__nav" aria-label="Lektionen">
          <span className="kicker">Lernpfad</span>
          <div className="lernpfad__balken" aria-hidden="true"><span style={{ width: `${anteil(gelesen.anzahl, lektionen.length)}%` }} /></div>
          {kapitel.map((k) => {
            const eigene = lektionen.filter((l) => l.kapitel === k.id);
            if (eigene.length === 0) return null;
            const fertig = eigene.filter((l) => gelesen.menge.has(l.id)).length;
            return (
              <section key={k.id} className={`lernpfad__kapitel ${k.id === lektion.kapitel ? "lernpfad__kapitel--aktiv" : ""}`}>
                <h3>{k.label} <small>{fertig}/{eigene.length}</small></h3>
                <ol>
                  {eigene.map((l) => {
                    const nr = lektionen.findIndex((x) => x.id === l.id) + 1;
                    return (
                      <li key={l.id}>
                        <button
                          aria-current={l.id === lektion.id ? "true" : undefined}
                          className={gelesen.menge.has(l.id) ? "gelesen" : ""}
                          onClick={() => oeffnen(l.id)}
                          title={`${l.titel} · ca. ${l.minuten} Min.`}
                        >
                          <span className="lernpfad__nr">{String(nr).padStart(2, "0")}</span>
                          <span className="lernpfad__titel">{l.titel}</span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </section>
            );
          })}
        </nav>

        <article className="panel lernpfad__lektion" key={lektion.id}>
          <div className="prio-kopfzeile">
            <span className="kicker">Lektion {index + 1} von {lektionen.length} · {kapitelVon(lektion).label}</span>
            <span className="lernpfad__minuten">ca. {lektion.minuten} Min.</span>
            <PrioBadge fach={konfig.fach} inhalt={{ title: lektion.titel, subtitle: lektion.kurz, normen: lektion.normen }} typ="lektion" id={lektion.id} kompakt mitThema nurBeiTreffer />
          </div>
          <h2>{lektion.titel}</h2>
          <p className="lernpfad__kurz">{lektion.kurz}</p>

          {lektion.ziel && (
            <div className="lernpfad__ziel">
              <b>Ziel dieser Lektion</b>
              <p>{lektion.ziel}</p>
            </div>
          )}
          {lektion.normen?.length > 0 && (
            <ul className="normkette lernpfad__normen" aria-label="Normen dieser Lektion">
              {lektion.normen.map((n) => <li key={n}><code className="norm">{n}</code></li>)}
            </ul>
          )}

          {lektion.bloecke.map((block, i) => <Block key={i} block={block} verweise={verweise} />)}

          {lektion.selbstcheck?.length > 0 && (
            <section className="lernpfad__selbstcheck">
              <span className="kicker">Selbstcheck</span>
              <h3>Hast du es verstanden?</h3>
              {lektion.selbstcheck.map((f, fi) => {
                const gewaehlt = antwort(fi);
                return (
                  <div key={fi} className="lernpfad__frage">
                    <p><b>{fi + 1}.</b> {f.frage}</p>
                    <div className="optionen">
                      {f.optionen.map((o, oi) => {
                        const klasse = gewaehlt == null ? "" : oi === f.richtig ? "richtig" : oi === gewaehlt ? "falsch" : "";
                        return (
                          <button key={oi} className={klasse} disabled={gewaehlt != null} onClick={() => antworten_setzen(fi, oi)}>{o}</button>
                        );
                      })}
                    </div>
                    {gewaehlt != null && (
                      <div className="antwort">
                        <b>{gewaehlt === f.richtig ? "Richtig." : "Noch nicht ganz."}</b>
                        {f.erklaerung}
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          )}

          {lektion.merksatz && (
            <Notiz titel="Merksatz zum Mitnehmen"><p>{lektion.merksatz}</p></Notiz>
          )}

          <div className="lernpfad__steuerung">
            <button className="btn btn--linie btn--klein" disabled={index === 0} onClick={() => oeffnen(lektionen[index - 1].id)}>← Zurück</button>
            <label className="lernpfad__haken">
              <input type="checkbox" checked={gelesen.menge.has(lektion.id)} onChange={() => gelesen.umschalten(lektion.id)} />
              Verstanden
            </label>
            <button className="btn btn--klein" onClick={weiter}>
              {index + 1 < lektionen.length ? "Verstanden – weiter →" : "Verstanden – Lernpfad abschließen"}
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ Blocktypen */
function Block({ block, verweise }) {
  switch (block.typ) {
    case "absatz":
      return <p className="lernpfad__absatz">{block.text}</p>;
    case "merke":
      return <Notiz titel={block.titel}><p>{block.text}</p></Notiz>;
    case "falle":
      return <Notiz art="falle" titel={block.titel}><p>{block.text}</p></Notiz>;
    case "exkurs":
      return <Notiz art="exkurs" titel={block.titel}><p>{block.text}</p></Notiz>;
    case "schritte":
      return (
        <div className="lernpfad__block">
          <h3>{block.titel || BLOCK_UEBERSCHRIFT.schritte}</h3>
          <ol className="schritte lernpfad__schritte">{block.punkte.map((p, i) => <li key={i}>{p}</li>)}</ol>
        </div>
      );
    case "liste":
      return (
        <div className="lernpfad__block">
          <h3>{block.titel || BLOCK_UEBERSCHRIFT.liste}</h3>
          <ul className="liste liste--haken">{block.punkte.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </div>
      );
    case "tabelle":
      return (
        <div className="lernpfad__block">
          <h3>{block.titel || BLOCK_UEBERSCHRIFT.tabelle}</h3>
          <div className="scroll-x">
            <table className="lernpfad__tabelle">
              <thead><tr>{block.kopf.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
              <tbody>{block.zeilen.map((z, i) => <tr key={i}>{z.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      );
    case "beispiel":
      return (
        <section className="lernpfad__beispiel">
          <span className="kicker">Beispiel</span>
          <h3>{block.titel}</h3>
          <p className="lernpfad__sachverhalt">{block.sachverhalt}</p>
          {block.schritte?.length > 0 && <ol className="schritte lernpfad__schritte">{block.schritte.map((s, i) => <li key={i}>{s}</li>)}</ol>}
          {block.ergebnis && <div className="lernpfad__ergebnis"><b>Ergebnis</b><p>{block.ergebnis}</p></div>}
        </section>
      );
    case "rechnung":
      return <Rechnung titel={block.titel} zeilen={block.zeilen} hinweis={block.hinweis} />;
    case "buchung":
      return <Buchungssatz satz={block.satz} />;
    case "bilanz":
      return <Bilanz block={block} />;
    case "klausur":
      return (
        <section className="lernpfad__klausur">
          <b>So läuft es in der Klausur</b>
          <ul>{block.punkte.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </section>
      );
    case "links":
      return <Links block={block} verweise={verweise} />;
    default:
      return null;
  }
}

function Bilanz({ block }) {
  const summe = (zeilen) => zeilen.reduce((s, [, w]) => s + (typeof w === "number" ? w : 0), 0);
  const aktivaSumme = summe(block.aktiva);
  const passivaSumme = summe(block.passiva);
  const zeilen = Math.max(block.aktiva.length, block.passiva.length);
  return (
    <div className="lernpfad__block">
      <h3>{block.titel}</h3>
      <div className="scroll-x">
        <table className="lernpfad__bilanz">
          <thead><tr><th colSpan={2}>Aktiva</th><th colSpan={2}>Passiva</th></tr></thead>
          <tbody>
            {Array.from({ length: zeilen }).map((_, i) => (
              <tr key={i}>
                <td>{block.aktiva[i]?.[0] ?? ""}</td>
                <td className="betrag">{block.aktiva[i] ? euro(block.aktiva[i][1]) : ""}</td>
                <td>{block.passiva[i]?.[0] ?? ""}</td>
                <td className="betrag">{block.passiva[i] ? euro(block.passiva[i][1]) : ""}</td>
              </tr>
            ))}
            <tr className="summe">
              <td>Summe</td><td className="betrag">{euro(aktivaSumme)}</td>
              <td>Summe</td><td className="betrag">{euro(passivaSumme)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {block.hinweis && <p className="lernpfad__hinweis">{block.hinweis}</p>}
    </div>
  );
}

function Links({ block, verweise }) {
  const chips = [];
  const push = (key, liste, handler) => {
    if (!handler || !Array.isArray(liste)) return;
    liste.forEach((id) => chips.push(
      <button key={`${key}-${id}`} type="button" onClick={() => handler.oeffnen(id)}>{handler.label(id)} ↗</button>,
    ));
  };
  push("modul", block.module, verweise.modul);
  push("schema", block.schemata, verweise.schema);
  push("fall", block.faelle, verweise.fall);
  push("umw", block.umwSchemata, verweise.umwSchema);
  push("ha", block.hausaufgaben, verweise.hausaufgabe);
  if (block.umwstr && verweise.umwstr) chips.push(<button key="umwstr" type="button" onClick={() => verweise.umwstr()}>UmwStR-Campus öffnen ↗</button>);
  if (block.persg && verweise.persg) chips.push(<button key="persg" type="button" onClick={() => verweise.persg()}>PersG-Campus öffnen ↗</button>);
  if (chips.length === 0) return null;
  return (
    <div className="lernpfad__links">
      <span className="kicker">Vertiefen im Campus</span>
      <div className="lernpfad__chips">{chips}</div>
    </div>
  );
}
