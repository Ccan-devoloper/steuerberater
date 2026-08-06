import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import hausaufgaben, { passendeModule } from "../data/hausaufgaben";
import { volltextMeta } from "../data/hausaufgaben-meta";
import { findePdfSeiteFuerTeil } from "../data/hausaufgaben-seiten";
import { teileHausaufgabenVolltext } from "../data/hausaufgaben-volltext-teilen";
import HausaufgabenDokument from "./HausaufgabenDokument";
import "./hausaufgaben.css";

/* Der Volltext wird erst geladen, wenn ihn jemand aufklappt. Das Promise wird
   gemerkt, damit ein zweiter Aufruf nicht erneut überträgt; bei einem Fehler
   wird es verworfen, damit ein späterer Versuch wieder lädt. */
let volltextPromise;
function volltexteBeiBedarfLaden() {
  if (!volltextPromise) {
    volltextPromise = import("../data/hausaufgaben-volltext.js")
      .then((modul) => modul.ladeHausaufgabenVolltext())
      .catch((fehler) => {
        volltextPromise = undefined;
        throw fehler;
      });
  }
  return volltextPromise;
}

export function IconHausaufgabe() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M5 3.5h10.5L19 7v13.5H5zM15.5 3.5V7H19M8 11h8M8 14.5h8M8 18h5"
        fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function Volltext({ termin, text, laden, fehler, onLoad }) {
  const meta = volltextMeta[termin];
  const [loesungOffen, setLoesungOffen] = useState(false);
  const teile = useMemo(
    () => (text ? teileHausaufgabenVolltext(termin, text) : { aufgabe: "", loesung: "" }),
    [termin, text],
  );
  const loesungsseite = useMemo(
    () => (text && teile.loesung ? findePdfSeiteFuerTeil(text, teile.loesung) : null),
    [text, teile.loesung],
  );

  return (
    <details
      className="hausaufgabe__volltext-details"
      onToggle={(event) => {
        if (event.currentTarget.open && !text && !laden && !fehler) onLoad();
      }}
    >
      <summary>Vollständige Aufgabe öffnen</summary>
      <div className="hausaufgabe__volltext-hinweis">
        <b>PDF-getreue Layoutansicht</b>
        <p>
          Zeilenumbrüche, Einrückungen, Spalten und Tabellen werden unverändert aus der PDF-Textquelle
          übernommen. Breite Seiten lassen sich horizontal verschieben. Die vollständige Lösung bleibt
          wie in der Fallsammlung separat aufklappbar. Das personenbezogene PDF-Wasserzeichen wurde entfernt.
        </p>
        {meta && (
          <small>
            {meta.seiten} PDF-Seiten · {meta.zeichen.toLocaleString("de-DE")} Zeichen · Integritätsprüfung beim Laden
          </small>
        )}
      </div>
      {laden && <p className="hausaufgabe__status" role="status">Volltext wird geladen und geprüft …</p>}
      {fehler && <p className="hausaufgabe__status hausaufgabe__status--fehler">{fehler}</p>}
      {text && (
        <>
          <section className="hausaufgabe__volltext-bereich">
            <h3>Vollständige Aufgabe</h3>
            <HausaufgabenDokument text={teile.aufgabe} bezeichnung="Aufgabe" />
          </section>

          {teile.loesung ? (
            <details
              className="hausaufgabe__loesung-details hausaufgabe__loesung-details--volltext"
              onToggle={(event) => setLoesungOffen(event.currentTarget.open)}
            >
              <summary>Vollständige Lösung anzeigen</summary>
              {loesungOffen && (
                <div className="hausaufgabe__loesungsdokument">
                  <HausaufgabenDokument
                    text={teile.loesung}
                    bezeichnung="Lösung"
                    ersteSeite={loesungsseite}
                  />
                </div>
              )}
            </details>
          ) : (
            <p className="hausaufgabe__status hausaufgabe__status--fehler">
              Für diesen Fachtermin konnte keine getrennte Lösung erkannt werden.
            </p>
          )}
        </>
      )}
    </details>
  );
}

/* ------------------------------------------------------------- Hauptansicht */
export default function Hausaufgabenseite({ module, anker, setAnker, oeffnenModul }) {
  const [suche, setSuche] = useState("");
  const [thema, setThema] = useState("alle");
  const [volltexte, setVolltexte] = useState(null);
  const [volltextFehler, setVolltextFehler] = useState("");
  const [volltextLaedt, setVolltextLaedt] = useState(false);
  const verzoegerteSuche = useDeferredValue(suche);

  const volltextLaden = async () => {
    if (volltexte || volltextLaedt) return;
    setVolltextFehler("");
    setVolltextLaedt(true);
    try {
      setVolltexte(await volltexteBeiBedarfLaden());
    } catch (fehler) {
      setVolltextFehler(fehler?.message || "Die Volltexte konnten nicht geladen werden.");
    } finally {
      setVolltextLaedt(false);
    }
  };

  const alleThemen = useMemo(
    () => [...new Set(hausaufgaben.flatMap((h) => h.themen))].sort((a, b) => a.localeCompare(b, "de")),
    [],
  );

  const liste = useMemo(() => {
    const q = verzoegerteSuche.trim().toLowerCase();
    return hausaufgaben.filter((h) => {
      if (thema !== "alle" && !h.themen.includes(thema)) return false;
      if (!q) return true;
      const volltext = volltexte?.[String(h.termin)] || "";
      return [h.titel, ...h.themen, ...h.aufgaben, ...h.loesung, ...h.normen, volltext]
        .join(" ").toLowerCase().includes(q);
    });
  }, [verzoegerteSuche, thema, volltexte]);

  /* Der Anker wird nach dem Rendern angesprungen und danach zurückgesetzt,
     damit ein späterer Filterwechsel nicht erneut dorthin springt. */
  useEffect(() => {
    if (!anker) return undefined;
    const id = requestAnimationFrame(() => {
      document.getElementById(anker)?.scrollIntoView({ block: "start" });
      setAnker(null);
    });
    return () => cancelAnimationFrame(id);
  }, [anker, setAnker]);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Bilanzierung nach Handels- und Steuerrecht</span>
          <h1>Hausaufgaben mit vollständigen Lösungen</h1>
          <p className="lead">
            Die neun Fachtermine mit Aufgabenüberblick, Lösungsschwerpunkten und Normen. Die Übersicht lädt
            sofort; die umfangreichen Originaltexte werden erst geladen, wenn sie geöffnet werden.
          </p>
        </div>
        <span className="zaehler">{hausaufgaben.length} Fachtermine</span>
      </div>

      <section className="hausaufgaben-tools" aria-label="Hausaufgaben filtern">
        <input
          type="search"
          value={suche}
          onChange={(e) => setSuche(e.target.value)}
          placeholder="Titel, Thema, Aufgabe oder Lösung suchen"
          aria-label="Hausaufgaben durchsuchen"
        />
        <select value={thema} onChange={(e) => setThema(e.target.value)} aria-label="Nach Thema filtern">
          <option value="alle">Alle Themen</option>
          {alleThemen.map((t) => <option key={t}>{t}</option>)}
        </select>
        <span title={volltexte ? "Volltexte werden in der Suche berücksichtigt" : "Volltexte werden erst beim Öffnen geladen"}>
          {liste.length} von {hausaufgaben.length}{suche !== verzoegerteSuche ? " · …" : ""}
        </span>
      </section>

      <div className="hausaufgaben-list">
        {liste.map((h) => {
          const passend = passendeModule(h, module);
          return (
            <article className="hausaufgabe" id={h.id} key={h.id}>
              <header className="hausaufgabe__kopf">
                <div>
                  <span className="kicker">Fachtermin {h.termin} · Rechtsstand {h.rechtsstand}</span>
                  <h2>{h.titel}</h2>
                  <p>{h.zeit} · Quelle: {h.quelle}</p>
                </div>
                <span className="hausaufgabe__nummer" aria-hidden="true">{h.termin}</span>
              </header>

              {passend.length > 0 && (
                <div className="hausaufgabe__module">
                  <b>Passende Lernmodule</b>
                  <div className="hausaufgabe__links">
                    {passend.map((m) => (
                      <button type="button" key={m.id} onClick={() => oeffnenModul(m.id)}>
                        Zum Modul {m.id}: {m.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="hausaufgabe__chips">{h.themen.map((t) => <span key={t}>{t}</span>)}</div>

              <div className="hausaufgabe__spalten">
                <section className="hausaufgabe__aufgabenblock">
                  <h3>Aufgabenüberblick</h3>
                  <ul>{h.aufgaben.map((x, i) => <li key={i}>{x}</li>)}</ul>
                </section>

                <details className="hausaufgabe__loesung-details hausaufgabe__loesung-details--ueberblick">
                  <summary>Lösungsschwerpunkte anzeigen</summary>
                  <div className="hausaufgabe__loesungsinhalt">
                    <ul>{h.loesung.map((x, i) => <li key={i}>{x}</li>)}</ul>
                  </div>
                </details>
              </div>

              <details>
                <summary>Normen &amp; Prüfungshinweise</summary>
                <div className="hausaufgabe__normen">{h.normen.map((n) => <span key={n}>{n}</span>)}</div>
                <p>
                  Prüfungsaufbau: Zurechnung → Zuordnung → Bewertung → Wertansatz → Buchungssatz und
                  Gewinnauswirkung. Handels- und Steuerbilanz bei Abweichungen stets getrennt entwickeln.
                </p>
              </details>

              <Volltext
                termin={h.termin}
                text={volltexte?.[String(h.termin)]}
                laden={volltextLaedt}
                fehler={volltextFehler}
                onLoad={volltextLaden}
              />
            </article>
          );
        })}
        {liste.length === 0 && (
          <p className="panel">Keine Hausaufgabe entspricht der aktuellen Suche und Themenauswahl.</p>
        )}
      </div>
    </>
  );
}

/* --------------------------------------------- Rückverweis auf der Modulseite */
export function HausaufgabenZuModul({ modulId, module, oeffnenHausaufgabe }) {
  const passend = useMemo(
    () => hausaufgaben.filter((h) => passendeModule(h, module).some((m) => String(m.id) === String(modulId))),
    [modulId, module],
  );
  if (passend.length === 0) return null;

  return (
    <section className="hausaufgaben-modulbox">
      <span className="kicker">Passende Hausaufgaben</span>
      <h2>Mit vollständigen Lösungen üben</h2>
      <div>
        {passend.map((h) => (
          <button type="button" key={h.id} onClick={() => oeffnenHausaufgabe(h.id)}>
            Fachtermin {h.termin}: {h.titel} →
          </button>
        ))}
      </div>
    </section>
  );
}
