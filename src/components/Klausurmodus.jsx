import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";
import "./klausur.css";

/* Punkteschlüssel der Klausur: 100 Punkte in 360 Minuten, also 3,6 Minuten je
   Punkt. Aus der veranschlagten Bearbeitungszeit eines Falls ergibt sich damit
   seine Punktzahl. */
export const MINUTEN_JE_PUNKT = 3.6;
export const punkteFuer = (minuten) => Math.max(1, Math.round((minuten || 20) / MINUTEN_JE_PUNKT));

const BEWERTUNGEN = [
  { id: "voll", label: "vollständig gelöst", anteil: 1 },
  { id: "teils", label: "teilweise gelöst", anteil: 0.5 },
  { id: "nicht", label: "nicht gelöst", anteil: 0 },
];

const bereiche = [
  { id: "alle", label: "Alle Gebiete" },
  { id: "EU", label: "Einzelunternehmen" },
  { id: "PersG", label: "Personengesellschaft" },
  { id: "KapG", label: "Kapitalgesellschaft" },
  { id: "Technik", label: "Klausurtechnik" },
];

const zeit = (sekunden) => {
  const s = Math.max(0, Math.round(sekunden));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};

function mischen(liste) {
  const kopie = [...liste];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

/* ------------------------------------------------------------------ Timer */
function useTimer(laeuft) {
  const [sekunden, setSekunden] = useState(0);
  const referenz = useRef(null);
  useEffect(() => {
    if (!laeuft) return undefined;
    referenz.current = setInterval(() => setSekunden((s) => s + 1), 1000);
    return () => clearInterval(referenz.current);
  }, [laeuft]);
  return [sekunden, setSekunden];
}

/* ================================================================ Ansicht */
export default function Klausurmodus({
  module,
  oeffnenModul,
  gebiete = bereiche,
  gebietVon = (m) => m.thema || "EU",
  speicherKey = "stb-klausurlauf",
  sperrtext = "Erst selbst lösen: Zurechnung, Zuordnung, Bewertung, Wertansatz, Buchungssatz und Gewinnauswirkung. Danach die Musterlösung aufdecken und ehrlich bewerten.",
  modulWort = "Modul",
  sachverhaltExtra = null,
}) {
  const [lauf, setLauf] = useState(null);
  const [schritt, setSchritt] = useState(0);
  const [aufgedeckt, setAufgedeckt] = useState(false);
  const [pause, setPause] = useState(false);
  const [bewertungen, setBewertungen] = useState([]);
  const [auswertung, setAuswertung] = useState(null);
  const [bereich, setBereich] = useState("alle");
  const [anzahl, setAnzahl] = useState(3);

  const [sekunden, setSekunden] = useTimer(Boolean(lauf) && !pause && !auswertung);

  const [historie, setHistorie] = useState(() => {
    const roh = laden(speicherKey, []);
    return Array.isArray(roh) ? roh : [];
  });
  useEffect(() => {
    sichern(speicherKey, historie);
  }, [historie, speicherKey]);

  /* Fälle mit Sachverhalt und Musterlösung: die Originalfälle der Kursmitschriften. */
  const vorrat = useMemo(
    () => module.filter((m) => m.area === "Fall" && m.example?.facts && m.example?.solution?.length),
    [module]
  );

  const jeBereich = useMemo(() => {
    const z = {};
    for (const m of vorrat) z[gebietVon(m)] = (z[gebietVon(m)] || 0) + 1;
    return z;
  }, [vorrat, gebietVon]);

  const starten = useCallback(() => {
    const auswahl = vorrat.filter((m) => bereich === "alle" || gebietVon(m) === bereich);
    const faelle = mischen(auswahl).slice(0, Math.min(anzahl, auswahl.length));
    if (faelle.length === 0) return;
    setLauf({ faelle, sollminuten: faelle.reduce((s, f) => s + punkteFuer(f.minutes) * MINUTEN_JE_PUNKT, 0) });
    setSchritt(0);
    setAufgedeckt(false);
    setPause(false);
    setBewertungen([]);
    setAuswertung(null);
    setSekunden(0);
  }, [vorrat, bereich, anzahl, setSekunden, gebietVon]);

  const bewerten = (id) => {
    const fall = lauf.faelle[schritt];
    const stufe = BEWERTUNGEN.find((b) => b.id === id);
    const naechste = [...bewertungen, { modulId: fall.id, titel: fall.title, punkte: punkteFuer(fall.minutes), stufe: id, anteil: stufe.anteil }];
    setBewertungen(naechste);
    if (schritt + 1 >= lauf.faelle.length) {
      const erreicht = naechste.reduce((s, b) => s + b.punkte * b.anteil, 0);
      const moeglich = naechste.reduce((s, b) => s + b.punkte, 0);
      const ergebnis = {
        zeitpunkt: new Date().toISOString(),
        erreicht: Math.round(erreicht * 10) / 10,
        moeglich,
        minuten: Math.round(sekunden / 60),
        sollminuten: Math.round(lauf.sollminuten),
        bereich,
        faelle: naechste,
      };
      setAuswertung(ergebnis);
      setHistorie((alt) => [ergebnis, ...alt].slice(0, 10));
    } else {
      setSchritt(schritt + 1);
      setAufgedeckt(false);
    }
  };

  /* ------------------------------------------------------------ Auswahl */
  if (!lauf) {
    const auswahlFuerBereich = vorrat.filter((m) => bereich === "alle" || gebietVon(m) === bereich);
    const verfuegbar = auswahlFuerBereich.length;
    const letzter = historie[0];
    return (
      <>
        <Kopf anzahlFaelle={vorrat.length} />
        <section className="panel klausur-auswahl">
          <h2>Lauf zusammenstellen</h2>
          <div className="filter filter--klein">
            {gebiete.map((b) => (
              <button key={b.id} aria-pressed={bereich === b.id} onClick={() => setBereich(b.id)}>
                {b.label} {b.id === "alle" ? vorrat.length : jeBereich[b.id] || 0}
              </button>
            ))}
          </div>
          <div className="filter filter--klein">
            {[1, 3, 5].map((n) => (
              <button key={n} aria-pressed={anzahl === n} disabled={n > verfuegbar} onClick={() => setAnzahl(n)}>
                {n} {n === 1 ? "Fall" : "Fälle"}
              </button>
            ))}
          </div>
          {/* Die Vorschau rechnet mit dem Mittel des Vorrats, nicht mit einer
              zufälligen Auswahl: Sonst nennt sie bei jedem Rendern eine andere
              Zahl und stimmt nicht mit dem Lauf überein, der gleich startet. */}
          <p className="klausur-vorschau">
            {verfuegbar === 0
              ? "Für dieses Gebiet liegt kein durchgerechneter Originalfall vor."
              : `${Math.min(anzahl, verfuegbar)} ${Math.min(anzahl, verfuegbar) === 1 ? "Fall" : "Fälle"} · im Mittel rund ${Math.round(
                  (auswahlFuerBereich.reduce((s, f) => s + punkteFuer(f.minutes), 0) / auswahlFuerBereich.length) *
                    Math.min(anzahl, verfuegbar) * MINUTEN_JE_PUNKT
                )} Minuten Sollzeit`}
          </p>
          <button className="btn" disabled={verfuegbar === 0} onClick={starten}>Klausurlauf starten</button>
        </section>

        {letzter && (
          <section className="panel">
            <span className="kicker">Letzter Lauf</span>
            <h2 style={{ margin: "5px 0 10px" }}>
              {letzter.erreicht} von {letzter.moeglich} Punkten
            </h2>
            <p className="klausur-vorschau">
              {letzter.minuten} Minuten gegen {letzter.sollminuten} Minuten Sollzeit
              {letzter.minuten > letzter.sollminuten
                ? ` · ${letzter.minuten - letzter.sollminuten} Minuten darüber`
                : ` · ${letzter.sollminuten - letzter.minuten} Minuten darunter`}
            </p>
          </section>
        )}
      </>
    );
  }

  /* --------------------------------------------------------- Auswertung */
  if (auswertung) {
    const schwach = auswertung.faelle.filter((f) => f.anteil < 1);
    return (
      <>
        <Kopf anzahlFaelle={vorrat.length} />
        <section className="panel">
          <span className="kicker">Auswertung</span>
          <h2 style={{ margin: "5px 0 12px" }}>{auswertung.erreicht} von {auswertung.moeglich} Punkten</h2>
          <div className="klausur-bilanz">
            <div><b>Benötigt</b><strong>{auswertung.minuten} Min.</strong></div>
            <div><b>Sollzeit</b><strong>{auswertung.sollminuten} Min.</strong></div>
            <div>
              <b>Abweichung</b>
              <strong className={auswertung.minuten > auswertung.sollminuten ? "klausur-ueber" : "klausur-unter"}>
                {auswertung.minuten > auswertung.sollminuten ? "+" : "−"}
                {Math.abs(auswertung.minuten - auswertung.sollminuten)} Min.
              </strong>
            </div>
          </div>

          <h3 style={{ marginTop: 18 }}>Einzelergebnis</h3>
          <div className="klausur-liste">
            {auswertung.faelle.map((f) => (
              <div className="klausur-zeile" key={f.modulId}>
                <span className={`klausur-stufe klausur-stufe--${f.stufe}`}>
                  {BEWERTUNGEN.find((b) => b.id === f.stufe)?.label}
                </span>
                <button onClick={() => oeffnenModul(f.modulId)}>{modulWort} {f.modulId}: {f.titel}</button>
                <span className="klausur-punkte">{Math.round(f.punkte * f.anteil * 10) / 10} / {f.punkte}</span>
              </div>
            ))}
          </div>

          {schwach.length > 0 && (
            <p className="klausur-vorschau" style={{ marginTop: 14 }}>
              Nacharbeiten: {schwach.length} {schwach.length === 1 ? "Fall" : "Fälle"} nicht vollständig gelöst.
              Die Module oben führen direkt zum Stoff.
            </p>
          )}
          <button className="btn" style={{ marginTop: 16 }} onClick={() => setLauf(null)}>Neuen Lauf zusammenstellen</button>
        </section>
      </>
    );
  }

  /* ------------------------------------------------------------ Bearbeitung */
  const fall = lauf.faelle[schritt];
  const punkte = punkteFuer(fall.minutes);
  const restsekunden = lauf.sollminuten * 60 - sekunden;

  return (
    <>
      <div className={`klausur-leiste${restsekunden < 0 ? " klausur-leiste--ueber" : ""}`}>
        <span className="klausur-leiste__zeit">{restsekunden < 0 ? "−" : ""}{zeit(Math.abs(restsekunden))}</span>
        <span className="klausur-leiste__info">
          Fall {schritt + 1} von {lauf.faelle.length} · {punkte} Punkte · Sollzeit gesamt {Math.round(lauf.sollminuten)} Min.
        </span>
        <button className="btn btn--klein btn--linie" onClick={() => setPause((w) => !w)}>
          {pause ? "fortsetzen" : "Pause"}
        </button>
        <button className="btn btn--klein btn--linie" onClick={() => setLauf(null)}>abbrechen</button>
      </div>

      <div className="pagehead">
        <div>
          <span className="kicker">Klausurlauf · Fall {schritt + 1} von {lauf.faelle.length}</span>
          <h1>{fall.title}</h1>
          <div className="tags">
            <span className="tag tag--fach">{punkte} Punkte</span>
            <span className="tag">{Math.round(punkte * MINUTEN_JE_PUNKT)} Minuten</span>
            <span className="tag">{fall.law}</span>
          </div>
        </div>
      </div>

      {pause ? (
        <section className="panel klausur-pause">
          <h2>Pause</h2>
          <p>Die Uhr steht. Der Sachverhalt ist ausgeblendet, damit die Pause keine Bearbeitungszeit wird.</p>
        </section>
      ) : (
        <>
          <section className="fall">
            <div className="fall__block fall__sachverhalt">
              <b>Sachverhalt</b>
              <p>{fall.example.facts}</p>
              {sachverhaltExtra?.(fall)}
            </div>
          </section>

          {!aufgedeckt ? (
            <section className="panel klausur-sperre">
              <p>{sperrtext}</p>
              <button className="btn" onClick={() => setAufgedeckt(true)}>Lösung aufdecken</button>
            </section>
          ) : (
            <>
              <section className="fall">
                <div className="fall__block">
                  <b>Musterlösung</b>
                  <ol>{fall.example.solution.map((s, i) => <li key={i}>{s}</li>)}</ol>
                </div>
                <div className="fall__block fall__ergebnis">
                  <b>Ergebnis</b>
                  <p>{fall.example.result}</p>
                </div>
              </section>
              <section className="panel klausur-bewertung">
                <h2>Wie weit sind Sie gekommen?</h2>
                <div className="klausur-bewertung__knoepfe">
                  {BEWERTUNGEN.map((b) => (
                    <button key={b.id} className="btn btn--linie" onClick={() => bewerten(b.id)}>
                      {b.label}
                    </button>
                  ))}
                </div>
              </section>
            </>
          )}
        </>
      )}
    </>
  );
}

function Kopf({ anzahlFaelle }) {
  return (
    <div className="pagehead">
      <div>
        <span className="kicker">Klausurmodus</span>
        <h1>Unter Zeitbedingungen rechnen</h1>
        <p className="lead">
          Fälle mit Sachverhalt und Musterlösung, aber mit Uhr und gesperrter Lösung. Die Punkte
          ergeben sich aus der veranschlagten Zeit: 3,6 Minuten je Punkt, wie in der Klausur.
        </p>
      </div>
      <span className="zaehler">{anzahlFaelle} Fälle verfügbar</span>
    </div>
  );
}

export function IconKlausur() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="13" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 9.5V13l2.5 1.8M9 3h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
