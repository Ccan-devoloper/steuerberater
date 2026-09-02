import React, { useEffect, useMemo, useState } from "react";
import {
  KONTENARTEN, KONTEN, KONTO_ART, GRUNDFAELLE, LEKTIONEN,
  BEISPIEL_KATEGORIEN, BEISPIELE, UEBUNG_TYPEN, UEBUNGEN, UEBUNG_KATEGORIEN,
  summe,
} from "../data/buchungssaetze";
import { Norm, Notiz, Buchungssatz } from "./Bausteine";
import { PrioBadge } from "./Prioritaet";
import { laden, sichern, useFortschritt, anteil } from "../lib/fortschritt";
import "./buchungssaetze.css";

/* ==========================================================================
   Buchungssätze üben – Reiter im Bilanz-Campus
   --------------------------------------------------------------------------
   Vier Teile:
     Grundlagen   Lehreinheiten von „Was ist Soll und Haben?“ bis Storno
     Kontenplan   Kontenarten und die im Campus verwendeten Konten
     Beispiele    Geschäftsvorfall → Buchungssatz → Herleitung in Schritten
     Üben         Frage-Antwort-System mit Fehlerspeicher
   Die Inhalte kommen ausschließlich aus src/data/buchungssaetze.js.
   ========================================================================== */

const TEILE = [
  { id: "grundlagen", label: "Grundlagen" },
  { id: "konten", label: "Kontenplan" },
  { id: "beispiele", label: "Beispiele" },
  { id: "ueben", label: "Üben" },
];

const LEKTION_IDS = new Set(LEKTIONEN.map((l) => l.id));
const ART_REIHENFOLGE = ["aktiv", "passiv", "aufwand", "ertrag"];
const FEHLER_SCHLUESSEL = "stb-buchungen-fehler";

/* Fisher-Yates. */
function mischen(liste) {
  const kopie = [...liste];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

/* Lektionen und Grundlagenfragen sind Buchungstechnik (Kern jeder Textziffer);
   Beispiele und Buchungssatz-Aufgaben werden nach Titel und Normen eingestuft. */
const prioTechnik = (titel) => ({ title: titel, tags: ["Buchungstechnik"] });
const prioInhalt = (titel, normen = []) => ({ title: titel, normen });

export default function Buchungssaetze() {
  const [teil, setTeil] = useState(() => {
    const roh = laden("stb-buchungen-teil", "grundlagen");
    return TEILE.some((t) => t.id === roh) ? roh : "grundlagen";
  });
  const wechseln = (id) => { setTeil(id); sichern("stb-buchungen-teil", id); };
  const gelesen = useFortschritt("stb-buchungen-gelesen", LEKTION_IDS);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Buchungssätze</span>
          <h1>Soll an Haben – von null bis klausurfest</h1>
          <p className="lead">
            Erst die Logik in kleinen Lektionen, dann der Kontenplan, dann viele Beispiele mit
            Herleitung in Schritten, zuletzt Übungen mit Antwortkontrolle und Fehlerspeicher. Kein
            Vorwissen nötig: Jede Lektion setzt nur die vorherige voraus.
          </p>
        </div>
        <div className="zaehler">
          <b>{gelesen.anzahl}/{LEKTIONEN.length}</b>{" "}
          <span>Lektionen gelesen</span>
        </div>
      </div>

      <div className="filter buchungen__teile" role="tablist" aria-label="Teil des Reiters">
        {TEILE.map((t) => (
          <button key={t.id} role="tab" aria-selected={teil === t.id} aria-pressed={teil === t.id} onClick={() => wechseln(t.id)}>
            {t.label}
            {t.id === "beispiele" && <small> {BEISPIELE.length}</small>}
            {t.id === "ueben" && <small> {UEBUNGEN.length + KONTEN.length * 2}</small>}
          </button>
        ))}
      </div>

      {teil === "grundlagen" && <Grundlagen gelesen={gelesen} weiterZu={wechseln} />}
      {teil === "konten" && <Kontenplan />}
      {teil === "beispiele" && <Beispiele />}
      {teil === "ueben" && <Ueben />}
    </>
  );
}

/* ============================================================== Grundlagen */
function Grundlagen({ gelesen, weiterZu }) {
  const [aktiv, setAktiv] = useState(() => {
    const roh = laden("stb-buchungen-lektion", LEKTIONEN[0].id);
    return LEKTION_IDS.has(roh) ? roh : LEKTIONEN[0].id;
  });
  const index = Math.max(0, LEKTIONEN.findIndex((l) => l.id === aktiv));
  const lektion = LEKTIONEN[index];
  const oeffnen = (id) => {
    setAktiv(id);
    sichern("stb-buchungen-lektion", id);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const weiter = () => {
    if (!gelesen.menge.has(lektion.id)) gelesen.umschalten(lektion.id);
    if (index + 1 < LEKTIONEN.length) oeffnen(LEKTIONEN[index + 1].id);
    else weiterZu("beispiele");
  };

  return (
    <div className="buchungen__grundlagen">
      <nav className="panel buchungen__lektionen" aria-label="Lektionen">
        <span className="kicker">Lernpfad</span>
        <div className="buchungen__balken" aria-hidden="true"><span style={{ width: `${anteil(gelesen.anzahl, LEKTIONEN.length)}%` }} /></div>
        <ol>
          {LEKTIONEN.map((l, i) => (
            <li key={l.id}>
              <button
                aria-current={l.id === aktiv ? "true" : undefined}
                className={gelesen.menge.has(l.id) ? "gelesen" : ""}
                onClick={() => oeffnen(l.id)}
              >
                <span className="buchungen__nr">{String(i + 1).padStart(2, "0")}</span>
                <span className="buchungen__titel">{l.titel}</span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <article className="panel buchungen__lektion">
        <div className="prio-kopfzeile">
          <span className="kicker">Lektion {index + 1} von {LEKTIONEN.length}</span>
          <PrioBadge fach="bilanz" inhalt={prioTechnik(lektion.titel)} typ="buchungslektion" id={lektion.id} kompakt mitThema />
        </div>
        <h2>{lektion.titel}</h2>
        <p className="buchungen__kurz">{lektion.kurz}</p>

        {lektion.absaetze?.map((a, i) => <p key={i} className="buchungen__absatz">{a}</p>)}

        {lektion.tabelle && (
          <div className="scroll-x">
            <table className="buchungen__tabelle">
              <thead><tr>{lektion.tabelle.kopf.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
              <tbody>
                {lektion.tabelle.zeilen.map((z, i) => (
                  <tr key={i}>{z.map((c, j) => <td key={j}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {lektion.schritte && (
          <ol className="schritte buchungen__schritte">
            {lektion.schritte.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
        )}

        {lektion.liste && (
          <ul className="liste liste--haken">
            {lektion.liste.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        )}

        {lektion.beispiel && <Buchungssatz satz={lektion.beispiel} />}

        {lektion.merksatz && <Notiz><p>{lektion.merksatz}</p></Notiz>}

        <div className="buchungen__steuerung">
          <button className="btn btn--linie btn--klein" disabled={index === 0} onClick={() => oeffnen(LEKTIONEN[index - 1].id)}>← Zurück</button>
          <label className="buchungen__haken">
            <input type="checkbox" checked={gelesen.menge.has(lektion.id)} onChange={() => gelesen.umschalten(lektion.id)} />
            Verstanden
          </label>
          <button className="btn btn--klein" onClick={weiter}>
            {index + 1 < LEKTIONEN.length ? "Verstanden – weiter →" : "Fertig – zu den Beispielen →"}
          </button>
        </div>
      </article>
    </div>
  );
}

/* ============================================================== Kontenplan */
function Kontenplan() {
  const [suche, setSuche] = useState("");
  const [art, setArt] = useState("alle");
  const treffer = useMemo(() => {
    const s = suche.trim().toLowerCase();
    return KONTEN.filter((k) => (art === "alle" || k.art === art) && (!s || k.name.toLowerCase().includes(s) || k.hinweis.toLowerCase().includes(s)));
  }, [suche, art]);

  return (
    <div className="buchungen__konten">
      <div className="raster raster--2 buchungen__arten">
        {ART_REIHENFOLGE.map((id) => {
          const a = KONTENARTEN[id];
          return (
            <section key={id} className={`panel buchungen__art buchungen__art--${id}`}>
              <span className="kicker">{a.seite}</span>
              <h2>{a.label}</h2>
              <div className="buchungen__tkonto" aria-label={`T-Konto ${a.label}`}>
                <div className={a.zugang === "Soll" ? "plus" : "minus"}>
                  <b>Soll</b>
                  <span>{a.zugang === "Soll" ? "Zugang +" : "Abgang −"}</span>
                </div>
                <div className={a.zugang === "Haben" ? "plus" : "minus"}>
                  <b>Haben</b>
                  <span>{a.zugang === "Haben" ? "Zugang +" : "Abgang −"}</span>
                </div>
              </div>
              <p className="buchungen__merksatz">{a.merksatz}</p>
              <p className="buchungen__beispiele">{a.beispiele.join(" · ")}</p>
            </section>
          );
        })}
      </div>

      <section className="panel">
        <div className="panel__head">
          <div>
            <span className="kicker">Kontenplan</span>
            <h2>Alle Konten dieses Reiters</h2>
          </div>
          <input
            className="buchungen__suche"
            type="search"
            placeholder="Konto suchen …"
            value={suche}
            onChange={(e) => setSuche(e.target.value)}
            aria-label="Konto suchen"
          />
        </div>
        <div className="filter filter--klein">
          <button aria-pressed={art === "alle"} onClick={() => setArt("alle")}>Alle</button>
          {ART_REIHENFOLGE.map((id) => (
            <button key={id} aria-pressed={art === id} onClick={() => setArt(id)}>{KONTENARTEN[id].label}</button>
          ))}
        </div>
        <div className="scroll-x">
          <table className="buchungen__tabelle buchungen__kontenliste">
            <thead><tr><th>Konto</th><th>Art</th><th>Zugang</th><th>Abgang</th><th>Was steckt dahinter</th></tr></thead>
            <tbody>
              {treffer.map((k) => {
                const a = KONTENARTEN[k.art];
                return (
                  <tr key={k.name}>
                    <td><b>{k.name}</b></td>
                    <td><span className={`buchungen__artmarke buchungen__artmarke--${k.art}`}>{a.label}</span></td>
                    <td>{a.zugang}</td>
                    <td>{a.abgang}</td>
                    <td className="buchungen__hinweis">{k.hinweis}</td>
                  </tr>
                );
              })}
              {treffer.length === 0 && <tr><td colSpan={5} className="buchungen__hinweis">Kein Konto gefunden.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

/* =============================================================== Beispiele */
function Beispiele() {
  const [kategorie, setKategorie] = useState("alle");
  const [verdeckt, setVerdeckt] = useState(() => laden("stb-buchungen-verdeckt", false) === true);
  const [aufgedeckt, setAufgedeckt] = useState(() => new Set());
  const liste = useMemo(() => BEISPIELE.filter((b) => kategorie === "alle" || b.kategorie === kategorie), [kategorie]);
  const zaehlung = useMemo(() => {
    const z = {};
    for (const b of BEISPIELE) z[b.kategorie] = (z[b.kategorie] || 0) + 1;
    return z;
  }, []);

  const umschaltenVerdeckt = () => {
    setVerdeckt((v) => { sichern("stb-buchungen-verdeckt", !v); return !v; });
    setAufgedeckt(new Set());
  };
  const aufdecken = (id) => setAufgedeckt((alt) => new Set([...alt, id]));

  return (
    <>
      <div className="buchungen__beispielkopf">
        <div className="filter">
          {BEISPIEL_KATEGORIEN.map((k) => (
            <button key={k.id} aria-pressed={kategorie === k.id} onClick={() => setKategorie(k.id)}>
              {k.label} <small>{k.id === "alle" ? BEISPIELE.length : zaehlung[k.id] || 0}</small>
            </button>
          ))}
        </div>
        <button className="btn btn--linie btn--klein" aria-pressed={verdeckt} onClick={umschaltenVerdeckt}>
          {verdeckt ? "Lösungen wieder zeigen" : "Erst selbst überlegen (Lösungen verdecken)"}
        </button>
      </div>

      <div className="buchungen__beispielliste">
        {liste.map((b, i) => {
          const offen = !verdeckt || aufgedeckt.has(b.id);
          const grund = GRUNDFAELLE[b.grundfall];
          const kat = BEISPIEL_KATEGORIEN.find((k) => k.id === b.kategorie);
          return (
            <article key={b.id} className="panel buchungen__beispiel" id={`beispiel-${b.id}`}>
              <div className="prio-kopfzeile">
                <span className="kicker">{String(i + 1).padStart(2, "0")} · {kat?.label}</span>
                <PrioBadge fach="bilanz" inhalt={prioInhalt(b.titel, b.normen)} typ="beispiel" id={b.id} kompakt mitThema nurBeiTreffer />
              </div>
              <h3>{b.titel}</h3>
              <p className="buchungen__sachverhalt"><b>Geschäftsvorfall:</b> {b.sachverhalt}</p>

              {offen ? (
                <>
                  <Buchungssatz satz={{ ...b.buchung, title: b.zweiteBuchung ? "Buchungssatz 1" : "Buchungssatz" }} />
                  {b.zweiteBuchung && <Buchungssatz satz={{ scope: b.buchung.scope, ...b.zweiteBuchung, title: "Buchungssatz 2" }} />}
                  <div className="buchungen__herleitung">
                    <span className="kicker">Herleitung</span>
                    <ol className="schritte">
                      {b.schritte.map((s, j) => <li key={j}>{s}</li>)}
                    </ol>
                  </div>
                  <div className="buchungen__fuss">
                    {grund && <span className={`buchungen__grundfall buchungen__grundfall--${b.grundfall}`} title={grund.text}>{grund.label}</span>}
                    {b.normen?.map((n) => <Norm key={n}>{n}</Norm>)}
                  </div>
                </>
              ) : (
                <div className="buchungen__verdeckt">
                  <p>Welche Konten? Welche Kontenart? Mehr oder weniger? Dann: Soll an Haben.</p>
                  <button className="btn btn--klein" onClick={() => aufdecken(b.id)}>Lösung aufdecken</button>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}

/* ==================================================================== Üben */

/* Aus dem Kontenplan erzeugte Kurzfragen: Kontenart und Buchungsseite. Die
   Unterkonten des Eigenkapitals bleiben außen vor, weil bei ihnen Zugang und
   Seite nicht der Regel „Passiv wächst im Haben“ folgen. */
const AUSGENOMMEN = new Set(["Privatentnahmen", "Privateinlagen", "Bestandsveränderungen"]);
const ART_OPTIONEN = ART_REIHENFOLGE.map((id) => KONTENARTEN[id].label);
const KONTO_UEBUNGEN = KONTEN.filter((k) => !AUSGENOMMEN.has(k.name)).flatMap((k, i) => {
  const a = KONTENARTEN[k.art];
  const zugang = i % 2 === 0;
  return [
    {
      id: `art-${k.name}`, typ: "art", kategorie: "grund",
      frage: `Welche Kontenart hat das Konto „${k.name}“?`,
      optionen: ART_OPTIONEN, richtig: ART_REIHENFOLGE.indexOf(k.art),
      erklaerung: `${k.name} ist ein ${a.label}: ${a.seite}. ${k.hinweis || a.merksatz}`,
    },
    {
      id: `seite-${k.name}`, typ: "seite", kategorie: "grund",
      frage: zugang
        ? `Das Konto „${k.name}“ wird mehr (Zugang). Auf welcher Seite wird gebucht?`
        : `Das Konto „${k.name}“ wird weniger (Abgang). Auf welcher Seite wird gebucht?`,
      optionen: ["Soll", "Haben"], richtig: (zugang ? a.zugang : a.abgang) === "Soll" ? 0 : 1,
      erklaerung: `${k.name} ist ein ${a.label}. ${a.merksatz} Zugang = ${a.zugang}, Abgang = ${a.abgang}.`,
    },
  ];
});
const ALLE_UEBUNGEN = [...UEBUNGEN, ...KONTO_UEBUNGEN];

function Ueben() {
  const [typ, setTyp] = useState("alle");
  const [kategorie, setKategorie] = useState("alle");
  const [nurFehler, setNurFehler] = useState(false);
  const [fehler, setFehler] = useState(() => {
    const roh = laden(FEHLER_SCHLUESSEL, []);
    return Array.isArray(roh) ? roh : [];
  });
  const [durchlauf, setDurchlauf] = useState(0);
  const [nr, setNr] = useState(0);
  const [punkte, setPunkte] = useState(0);
  const [fertig, setFertig] = useState(false);
  const [beantwortet, setBeantwortet] = useState(false);

  useEffect(() => { sichern(FEHLER_SCHLUESSEL, fehler); }, [fehler]);
  const fehlerMenge = useMemo(() => new Set(fehler), [fehler]);

  const aufgaben = useMemo(() => {
    const auswahl = ALLE_UEBUNGEN.filter((u) =>
      (typ === "alle" || u.typ === typ)
      && (kategorie === "alle" || u.kategorie === kategorie)
      && (!nurFehler || fehlerMenge.has(u.id)));
    const gemischt = mischen(auswahl);
    /* Die erzeugten Kontenfragen sind zahlreich; ohne Typfilter höchstens 10 je Durchlauf. */
    if (typ === "alle") {
      const konto = gemischt.filter((u) => u.typ === "art" || u.typ === "seite").slice(0, 10);
      const rest = gemischt.filter((u) => u.typ !== "art" && u.typ !== "seite");
      return mischen([...rest, ...konto]);
    }
    return gemischt.slice(0, 25);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typ, kategorie, nurFehler, durchlauf]);

  const neuStarten = (aenderung) => {
    aenderung?.();
    setDurchlauf((d) => d + 1);
    setNr(0);
    setPunkte(0);
    setFertig(false);
    setBeantwortet(false);
  };
  const ergebnis = (id, richtig) => {
    setBeantwortet(true);
    if (richtig) {
      setPunkte((p) => p + 1);
      setFehler((alt) => alt.filter((f) => f !== id));
    } else {
      setFehler((alt) => (alt.includes(id) ? alt : [...alt, id]));
    }
  };
  const weiter = () => {
    if (nr + 1 >= aufgaben.length) setFertig(true);
    else { setNr(nr + 1); setBeantwortet(false); }
  };

  const steuerung = (
    <div className="buchungen__uebungskopf">
      <div className="filter filter--klein" aria-label="Aufgabentyp">
        <button aria-pressed={typ === "alle"} onClick={() => neuStarten(() => setTyp("alle"))}>Alle Typen</button>
        {Object.entries(UEBUNG_TYPEN).map(([id, label]) => (
          <button key={id} aria-pressed={typ === id} onClick={() => neuStarten(() => setTyp(id))}>{label}</button>
        ))}
      </div>
      <div className="filter filter--klein" aria-label="Thema">
        {UEBUNG_KATEGORIEN.map((k) => (
          <button key={k.id} aria-pressed={kategorie === k.id} onClick={() => neuStarten(() => setKategorie(k.id))}>{k.label}</button>
        ))}
      </div>
      <div className="training__schalter">
        <button
          className="btn btn--klein btn--linie"
          aria-pressed={nurFehler}
          disabled={fehler.length === 0}
          title={fehler.length === 0 ? "Noch keine falsch gelösten Aufgaben gespeichert" : undefined}
          onClick={() => neuStarten(() => setNurFehler((w) => !w))}
        >
          Nur Fehler wiederholen ({fehler.length})
        </button>
        {fehler.length > 0 && (
          <button className="training__loeschen" onClick={() => neuStarten(() => { setFehler([]); setNurFehler(false); })}>
            Fehlerspeicher leeren
          </button>
        )}
      </div>
    </div>
  );

  if (aufgaben.length === 0) {
    return (
      <section className="panel quiz buchungen__quiz">
        {steuerung}
        <div className="mitte">
          <h2>Keine Aufgaben</h2>
          <p>{nurFehler ? "Für diese Auswahl sind keine falsch gelösten Aufgaben gespeichert." : "Für diese Kombination aus Typ und Thema gibt es keine Aufgaben."}</p>
        </div>
      </section>
    );
  }

  if (fertig) {
    return (
      <section className="panel quiz buchungen__quiz">
        {steuerung}
        <div className="mitte">
          <h2>{punkte} von {aufgaben.length} richtig</h2>
          <p>
            {punkte === aufgaben.length
              ? "Alles richtig. Nächster Schritt: den Typ „Buchungssatz bauen“ ohne Themenfilter durchlaufen."
              : punkte >= aufgaben.length * 0.7
                ? "Solide. Die falsch gelösten Aufgaben liegen im Fehlerspeicher – dort gezielt wiederholen."
                : "Noch unsicher. Am besten die Lektionen „Kontenarten“ und „Vier-Schritte-Trick“ noch einmal lesen und dann die Fehler wiederholen."}
          </p>
          {fehler.length > 0 && <p className="quiz__hinweis">{fehler.length} Aufgaben im Fehlerspeicher.</p>}
          <button className="btn" style={{ marginTop: 12 }} onClick={() => neuStarten()}>Noch einmal (neu gemischt)</button>
        </div>
      </section>
    );
  }

  const aufgabe = aufgaben[nr];
  return (
    <section className="panel quiz buchungen__quiz">
      {steuerung}
      <div className="quiz__meta">
        <span>
          Aufgabe {nr + 1} von {aufgaben.length}{nurFehler ? " · Fehlerwiederholung" : ""} · {UEBUNG_TYPEN[aufgabe.typ]}
          {" "}<PrioBadge fach="bilanz" inhalt={aufgabe.typ === "satz" ? prioInhalt(aufgabe.sachverhalt) : prioTechnik(aufgabe.frage)} typ="uebung" id={aufgabe.id} kompakt nurBeiTreffer />
        </span>
        <span>{punkte} richtig</span>
      </div>
      {aufgabe.typ === "satz"
        ? <SatzAufgabe key={`${durchlauf}-${aufgabe.id}`} aufgabe={aufgabe} onErgebnis={(ok) => ergebnis(aufgabe.id, ok)} />
        : <WahlAufgabe key={`${durchlauf}-${aufgabe.id}`} aufgabe={aufgabe} onErgebnis={(ok) => ergebnis(aufgabe.id, ok)} />}
      {beantwortet && (
        <div className="buchungen__weiter">
          <button className="btn" onClick={weiter}>{nr + 1 >= aufgaben.length ? "Auswertung" : "Nächste Aufgabe →"}</button>
        </div>
      )}
    </section>
  );
}

/* Multiple Choice, Gewinnauswirkung, Kontenart, Soll oder Haben. */
function WahlAufgabe({ aufgabe, onErgebnis }) {
  const [gewaehlt, setGewaehlt] = useState(null);
  const antworten = (i) => {
    if (gewaehlt !== null) return;
    setGewaehlt(i);
    onErgebnis(i === aufgabe.richtig);
  };
  return (
    <>
      <h2>{aufgabe.frage}</h2>
      <div className="optionen">
        {aufgabe.optionen.map((o, i) => {
          let klasse = "";
          if (gewaehlt !== null) {
            if (i === aufgabe.richtig) klasse = "richtig";
            else if (i === gewaehlt) klasse = "falsch";
          }
          return (
            <button key={i} className={klasse} disabled={gewaehlt !== null} onClick={() => antworten(i)}>{o}</button>
          );
        })}
      </div>
      {gewaehlt !== null && (
        <div className="antwort">
          <b>{gewaehlt === aufgabe.richtig ? "Richtig." : "Leider nicht."}</b>
          {aufgabe.erklaerung}
        </div>
      )}
    </>
  );
}

/* Buchungssatz bauen: Konten aus einer Auswahl per Klick auf Soll oder Haben
   legen. Geprüft wird die Kontenzuordnung; Beträge und Buchungskreis zeigt
   die Lösung. */
function SatzAufgabe({ aufgabe, onErgebnis }) {
  const [zuordnung, setZuordnung] = useState({});
  const [geprueft, setGeprueft] = useState(null);
  const konten = useMemo(() => mischen(aufgabe.konten), [aufgabe]);

  const setzen = (konto, seite) => {
    if (geprueft) return;
    setZuordnung((alt) => {
      const neu = { ...alt };
      if (neu[konto] === seite) delete neu[konto];
      else neu[konto] = seite;
      return neu;
    });
  };
  const soll = konten.filter((k) => zuordnung[k] === "soll");
  const haben = konten.filter((k) => zuordnung[k] === "haben");

  const pruefen = () => {
    const sollSoll = new Set(aufgabe.loesung.soll.map((z) => z.konto));
    const sollHaben = new Set(aufgabe.loesung.haben.map((z) => z.konto));
    const gleich = (a, b) => a.length === b.size && a.every((x) => b.has(x));
    const ok = gleich(soll, sollSoll) && gleich(haben, sollHaben);
    const fehlend = [...sollSoll].filter((k) => !soll.includes(k)).map((k) => `${k} (Soll)`)
      .concat([...sollHaben].filter((k) => !haben.includes(k)).map((k) => `${k} (Haben)`));
    const zuviel = soll.filter((k) => !sollSoll.has(k)).map((k) => `${k} (Soll)`)
      .concat(haben.filter((k) => !sollHaben.has(k)).map((k) => `${k} (Haben)`));
    setGeprueft({ ok, fehlend, zuviel });
    onErgebnis(ok);
  };

  const loesung = { ...aufgabe.loesung, scope: aufgabe.scope || "alle", title: "Lösung" };

  return (
    <>
      <span className="kicker">Buchungssatz bauen</span>
      <h2>{aufgabe.sachverhalt}</h2>
      <p className="buchungen__anleitung">
        Für jedes beteiligte Konto <b>Soll</b> oder <b>Haben</b> wählen. Konten, die nicht dazugehören, bleiben frei.
        Frage dich: Kontenart? Mehr oder weniger? Dann die Seite.
      </p>
      <div className="buchungen__kontenwahl">
        {konten.map((k) => {
          const art = KONTO_ART[k];
          return (
            <div key={k} className={`buchungen__kontochip${zuordnung[k] ? ` ist-${zuordnung[k]}` : ""}`}>
              <span className="buchungen__kontoname">
                {k}
                {art && <small className={`buchungen__artmarke buchungen__artmarke--${art}`}>{KONTENARTEN[art].label.replace("konto", "")}</small>}
              </span>
              <span className="buchungen__seitenwahl" role="group" aria-label={`Seite für ${k}`}>
                <button type="button" aria-pressed={zuordnung[k] === "soll"} disabled={!!geprueft} onClick={() => setzen(k, "soll")}>Soll</button>
                <button type="button" aria-pressed={zuordnung[k] === "haben"} disabled={!!geprueft} onClick={() => setzen(k, "haben")}>Haben</button>
              </span>
            </div>
          );
        })}
      </div>

      <div className="buchungen__entwurf" aria-live="polite">
        <div>
          <span className="kicker">Soll</span>
          {soll.length === 0 ? <em>–</em> : <ul>{soll.map((k) => <li key={k}>{k}</li>)}</ul>}
        </div>
        <span className="buchungen__an">an</span>
        <div>
          <span className="kicker">Haben</span>
          {haben.length === 0 ? <em>–</em> : <ul>{haben.map((k) => <li key={k}>{k}</li>)}</ul>}
        </div>
      </div>

      {!geprueft && (
        <div className="buchungen__pruefen">
          <button className="btn" disabled={soll.length === 0 || haben.length === 0} onClick={pruefen}>Prüfen</button>
          <button className="btn btn--linie" onClick={() => setZuordnung({})}>Zurücksetzen</button>
        </div>
      )}

      {geprueft && (
        <div className={`antwort${geprueft.ok ? "" : " antwort--falsch"}`}>
          <b>{geprueft.ok ? "Richtig – so lautet der Buchungssatz:" : "Nicht ganz."}</b>
          {!geprueft.ok && (
            <ul className="buchungen__abweichung">
              {geprueft.fehlend.length > 0 && <li>Fehlt: {geprueft.fehlend.join(", ")}</li>}
              {geprueft.zuviel.length > 0 && <li>Gehört nicht dazu oder falsche Seite: {geprueft.zuviel.join(", ")}</li>}
            </ul>
          )}
          <Buchungssatz satz={loesung} />
          <p className="buchungen__summen">Summe Soll {formatEuro(summe(loesung.soll))} = Summe Haben {formatEuro(summe(loesung.haben))}</p>
          <p>{aufgabe.erklaerung}</p>
        </div>
      )}
    </>
  );
}

function formatEuro(n) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(n);
}
