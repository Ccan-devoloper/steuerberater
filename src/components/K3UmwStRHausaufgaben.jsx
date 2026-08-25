import React, { useMemo, useState } from "react";
import { umwstrHausaufgaben } from "../data/k3-umwstr-hausaufgaben";
import { umwstrHausaufgabenMeta } from "../data/k3-umwstr-hausaufgaben-volltext-meta";
import { findePdfSeiteFuerTeil } from "../data/hausaufgaben-seiten";
import { teileUmwStRHausaufgabe } from "../data/k3-umwstr-hausaufgaben-teilen";
import HausaufgabenDokument from "./HausaufgabenDokument";
import "./hausaufgaben.css";

/* Der Volltext wird erst geladen, wenn ihn jemand aufklappt. Das Promise wird
   geteilt, damit paralleles Aufklappen mehrerer Aufgaben nur einen Ladevorgang
   auslöst; bei einem Fehler wird es verworfen, damit ein erneuter Versuch
   möglich bleibt. */
let volltextPromise;
function volltexteBeiBedarfLaden() {
  if (!volltextPromise) {
    volltextPromise = import("../data/k3-umwstr-hausaufgaben-volltext.js")
      .then((modul) => modul.ladeUmwStRHausaufgabenVolltext())
      .catch((fehler) => {
        volltextPromise = undefined;
        throw fehler;
      });
  }
  return volltextPromise;
}

function Volltext({ termin, text, laden, fehler, onLoad }) {
  const meta = umwstrHausaufgabenMeta[termin];
  const [loesungOffen, setLoesungOffen] = useState(false);
  const teile = useMemo(
    () => (text ? teileUmwStRHausaufgabe(termin, text) : { aufgabe: "", loesung: "" }),
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
          separat aufklappbar. Das personenbezogene PDF-Wasserzeichen wurde entfernt.
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
              Für diese Hausaufgabe konnte keine getrennte Lösung erkannt werden.
            </p>
          )}
        </>
      )}
    </details>
  );
}

const GESAMTSEITEN = Object.values(umwstrHausaufgabenMeta).reduce((s, m) => s + m.seiten, 0);

export default function K3UmwStRHausaufgaben({ suche = "" }) {
  const [thema, setThema] = useState("alle");
  const [volltexte, setVolltexte] = useState(null);
  const [volltextFehler, setVolltextFehler] = useState("");
  const [volltextLaedt, setVolltextLaedt] = useState(false);

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
    () => [...new Set(umwstrHausaufgaben.flatMap((h) => h.themen))].sort((a, b) => a.localeCompare(b, "de")),
    [],
  );

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return umwstrHausaufgaben.filter((h) => {
      if (thema !== "alle" && !h.themen.includes(thema)) return false;
      if (!q) return true;
      return [h.titel, h.untertitel, h.quelle, ...h.themen, ...h.aufgaben, ...h.loesung, ...h.normen]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [suche, thema]);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 3 · UmwStR</span>
          <h1>Hausaufgaben 1–3</h1>
          <p className="lead">
            Die drei Hausaufgaben zu den Fachterminen mit Lösung · {GESAMTSEITEN} PDF-Seiten
            wörtlich übernommen.
          </p>
        </div>
        <span className="kicker">{gefiltert.length} von {umwstrHausaufgaben.length}</span>
      </div>

      <section className="hausaufgaben-tools" aria-label="Hausaufgaben filtern">
        <select value={thema} onChange={(e) => setThema(e.target.value)} aria-label="Nach Thema filtern">
          <option value="alle">Alle Themen</option>
          {alleThemen.map((t) => <option key={t}>{t}</option>)}
        </select>
        <span>{gefiltert.length} von {umwstrHausaufgaben.length}</span>
      </section>
      {suche && <p className="umwstr-search-note">Suche: „{suche}“ – die Kopfzeilensuche filtert diese Liste mit.</p>}

      <div className="hausaufgaben-list">
        {gefiltert.map((h) => (
          <article className="hausaufgabe" id={h.id} key={h.id}>
            <header className="hausaufgabe__kopf">
              <div>
                <span className="kicker">{h.zeit} · Rechtsstand {h.rechtsstand}</span>
                <h2>{h.titel}</h2>
                <p>{h.untertitel} · Quelle: {h.quelle}</p>
              </div>
              <span className="hausaufgabe__nummer" aria-hidden="true">{h.termin}</span>
            </header>

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
                Prüfungsaufbau im UmwStR: Umwandlungsform bestimmen → persönlichen und sachlichen
                Anwendungsbereich prüfen → Wertansatz beim übertragenden Rechtsträger → Folgen beim
                übernehmenden Rechtsträger → Folgen bei den Gesellschaftern → Sperrfristen beachten.
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
        ))}
      </div>

      {gefiltert.length === 0 && (
        <div className="panel"><h3>Keine Hausaufgabe gefunden</h3><p>Bitte einen anderen Suchbegriff oder Themenfilter wählen.</p></div>
      )}
    </>
  );
}
