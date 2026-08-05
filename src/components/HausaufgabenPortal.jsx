import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { module as alleModule } from "../data/module";
import hausaufgaben, { passendeModule } from "../data/hausaufgaben";
import "./hausaufgaben.css";

const volltextMeta = {
  1: { zeichen: 19851, seiten: 12 },
  2: { zeichen: 25364, seiten: 14 },
  3: { zeichen: 20958, seiten: 11 },
  4: { zeichen: 43065, seiten: 23 },
  5: { zeichen: 38490, seiten: 20 },
  6: { zeichen: 25921, seiten: 11 },
  7: { zeichen: 24160, seiten: 10 },
  8: { zeichen: 29356, seiten: 17 },
  9: { zeichen: 29537, seiten: 16 },
};

let volltextPromise;
function volltexteBeiBedarfLaden() {
  if (!volltextPromise) {
    volltextPromise = import("../data/hausaufgaben-volltext.js")
      .then((modul) => modul.ladeHausaufgabenVolltext());
  }
  return volltextPromise;
}

function navHostErmitteln() {
  const nav = document.querySelector(".rail__nav");
  if (!nav) return null;
  let host = nav.querySelector(".hausaufgaben-nav-host");
  if (!host) {
    host = document.createElement("div");
    host.className = "hausaufgaben-nav-host";
    const faelle = [...nav.querySelectorAll(".rail__link")].find((b) => b.textContent.trim() === "Fälle");
    faelle?.insertAdjacentElement("afterend", host);
    if (!faelle) nav.appendChild(host);
  }
  return host;
}

function modulOeffnen(modul) {
  const lernmodule = [...document.querySelectorAll(".rail__link")].find((b) => b.textContent.includes("Lernmodule"));
  lernmodule?.click();
  window.setTimeout(() => {
    const karte = [...document.querySelectorAll(".modul")].find((el) =>
      el.textContent.includes(`Modul ${modul.id}`) || el.textContent.includes(modul.title),
    );
    karte?.click();
  }, 100);
}

function IconHausaufgabe() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 3.5h10.5L19 7v13.5H5zM15.5 3.5V7H19M8 11h8M8 14.5h8M8 18h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Volltext({ termin, text, laden, fehler, onLoad }) {
  const meta = volltextMeta[termin];
  return (
    <details
      className="hausaufgabe__volltext-details"
      onToggle={(event) => {
        if (event.currentTarget.open && !text && !laden && !fehler) onLoad();
      }}
    >
      <summary>Vollständige Aufgabe und Lösung öffnen</summary>
      <div className="hausaufgabe__volltext-hinweis">
        <b>1:1-Textübernahme</b>
        <p>
          Der Volltext wird erst beim Öffnen geladen. Dadurch bleibt die Hausaufgabenübersicht sofort bedienbar.
          Das personenbezogene PDF-Wasserzeichen wurde aus Datenschutzgründen entfernt.
        </p>
        {meta && <small>{meta.seiten} PDF-Seiten · {meta.zeichen.toLocaleString("de-DE")} Zeichen · Integritätsprüfung beim Laden</small>}
      </div>
      {laden && <p className="hausaufgabe__status" role="status">Volltext wird geladen und geprüft …</p>}
      {fehler && <p className="hausaufgabe__status hausaufgabe__status--fehler">{fehler}</p>}
      {text && <pre className="hausaufgabe__volltext">{text}</pre>}
    </details>
  );
}

function HausaufgabenAnsicht({ aktiv, onClose, initialId, onSelect, onOpenModule }) {
  const [suche, setSuche] = useState("");
  const [thema, setThema] = useState("alle");
  const [volltexte, setVolltexte] = useState(null);
  const [volltextFehler, setVolltextFehler] = useState("");
  const [volltextLaedt, setVolltextLaedt] = useState(false);
  const verzögerteSuche = useDeferredValue(suche);

  const volltextLaden = async () => {
    if (volltexte || volltextLaedt) return;
    setVolltextFehler("");
    setVolltextLaedt(true);
    try {
      setVolltexte(await volltexteBeiBedarfLaden());
    } catch (fehler) {
      volltextPromise = null;
      setVolltextFehler(fehler?.message || "Die Volltexte konnten nicht geladen werden.");
    } finally {
      setVolltextLaedt(false);
    }
  };

  const alleThemen = useMemo(() => [...new Set(hausaufgaben.flatMap((h) => h.themen))].sort((a, b) => a.localeCompare(b, "de")), []);
  const liste = useMemo(() => {
    const q = verzögerteSuche.trim().toLowerCase();
    return hausaufgaben.filter((h) => {
      const volltext = volltexte?.[String(h.termin)] || "";
      const text = [h.titel, ...h.themen, ...h.aufgaben, ...h.loesung, ...h.normen, volltext].join(" ").toLowerCase();
      return (thema === "alle" || h.themen.includes(thema)) && (!q || text.includes(q));
    });
  }, [verzögerteSuche, thema, volltexte]);

  useEffect(() => {
    if (aktiv && initialId) requestAnimationFrame(() => document.getElementById(initialId)?.scrollIntoView({ block: "start" }));
  }, [aktiv, initialId]);

  if (!aktiv) return null;
  return (
    <div className="hausaufgaben-view" role="region" aria-label="Hausaufgaben">
      <div className="hausaufgaben-head">
        <div>
          <span className="kicker">Bilanzierung nach Handels- und Steuerrecht</span>
          <h1>Hausaufgaben mit vollständigen Lösungen</h1>
          <p className="lead">Die Übersicht lädt sofort. Umfangreiche Originaltexte werden erst geöffnet, wenn sie tatsächlich gebraucht werden.</p>
        </div>
        <button className="btn btn--linie" onClick={onClose}>Zurück</button>
      </div>
      <div className="hausaufgaben-tools">
        <input value={suche} onChange={(e) => setSuche(e.target.value)} placeholder="Titel, Thema, Aufgabe oder Lösung suchen" aria-label="Hausaufgaben durchsuchen" />
        <select value={thema} onChange={(e) => setThema(e.target.value)} aria-label="Nach Thema filtern"><option value="alle">Alle Themen</option>{alleThemen.map((t) => <option key={t}>{t}</option>)}</select>
        <span title={volltexte ? "Volltexte werden in der Suche berücksichtigt" : "Volltexte werden erst beim Öffnen geladen"}>
          {liste.length} von {hausaufgaben.length}{suche !== verzögerteSuche ? " · …" : ""}
        </span>
      </div>
      <div className="hausaufgaben-list">
        {liste.map((h) => {
          const module = passendeModule(h, alleModule);
          return <article className="hausaufgabe" id={h.id} key={h.id}>
            <header className="hausaufgabe__kopf"><div><span className="kicker">Fachtermin {h.termin} · Rechtsstand {h.rechtsstand}</span><h2>{h.titel}</h2><p>{h.zeit} · Quelle: {h.quelle}</p></div><span className="hausaufgabe__nummer">{h.termin}</span></header>
            {module.length > 0 && <div className="hausaufgabe__module"><b>Passende Lernmodule</b><div className="hausaufgabe__links">{module.map((m) => <button key={m.id} onClick={() => onOpenModule(m)}>Zum Modul {m.id}: {m.title}</button>)}</div></div>}
            <div className="hausaufgabe__chips">{h.themen.map((t) => <span key={t}>{t}</span>)}</div>
            <div className="hausaufgabe__spalten"><section><h3>Aufgabenüberblick</h3><ul>{h.aufgaben.map((x, i) => <li key={i}>{x}</li>)}</ul></section><section><h3>Lösungsschwerpunkte</h3><ul>{h.loesung.map((x, i) => <li key={i}>{x}</li>)}</ul></section></div>
            <details><summary>Normen & Prüfungshinweise</summary><div className="hausaufgabe__normen">{h.normen.map((n) => <span key={n}>{n}</span>)}</div><p>Prüfungsaufbau: Zurechnung → Zuordnung → Bewertung → Wertansatz → Buchungssatz und Gewinnauswirkung. Handels- und Steuerbilanz bei Abweichungen stets getrennt entwickeln.</p></details>
            <Volltext termin={h.termin} text={volltexte?.[String(h.termin)]} laden={volltextLaedt} fehler={volltextFehler} onLoad={volltextLaden} />
            <button className="hausaufgabe__anker" onClick={() => onSelect(h.id)}>Direkt zu dieser Hausaufgabe</button>
          </article>;
        })}
      </div>
    </div>
  );
}

function ModulHinweis({ target, onOpen }) {
  const text = target.closest(".lesson")?.querySelector(".kicker")?.textContent || "";
  const modulId = text.match(/Modul\s+([^\s]+)/)?.[1];
  const passend = hausaufgaben.filter((h) => passendeModule(h, alleModule).some((m) => String(m.id) === String(modulId)));
  if (!passend.length) return null;
  return createPortal(<section className="hausaufgaben-modulbox"><span className="kicker">Passende Hausaufgaben</span><h2>Mit vollständigen Lösungen üben</h2><div>{passend.map((h) => <button key={h.id} onClick={() => onOpen(h.id)}>Fachtermin {h.termin}: {h.titel} →</button>)}</div></section>, target);
}

export default function HausaufgabenPortal() {
  const [host, setHost] = useState(null);
  const [page, setPage] = useState(null);
  const [lessonTarget, setLessonTarget] = useState(null);
  const [aktiv, setAktiv] = useState(false);
  const [auswahl, setAuswahl] = useState(null);

  useEffect(() => {
    let frame = 0;
    const aktualisieren = () => {
      frame = 0;
      const neuerHost = navHostErmitteln();
      const neuePage = document.querySelector("main.page");
      const neuesLessonTarget = document.querySelector(".lesson .blaettern");
      setHost((alt) => (alt === neuerHost ? alt : neuerHost));
      setPage((alt) => (alt === neuePage ? alt : neuePage));
      setLessonTarget((alt) => (alt === neuesLessonTarget ? alt : neuesLessonTarget));
    };
    const planen = () => {
      if (!frame) frame = requestAnimationFrame(aktualisieren);
    };

    aktualisieren();
    const observer = new MutationObserver(planen);
    observer.observe(document.getElementById("root") || document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!page) return;
    page.classList.toggle("hausaufgaben-aktiv", aktiv);
    return () => page.classList.remove("hausaufgaben-aktiv");
  }, [page, aktiv]);

  const open = (id = null) => { setAuswahl(id); setAktiv(true); window.scrollTo({ top: 0, behavior: "auto" }); };
  const openModule = (modul) => { setAktiv(false); window.setTimeout(() => modulOeffnen(modul), 0); };

  return <>
    {host && createPortal(<button className="rail__link hausaufgaben-nav" aria-current={aktiv ? "true" : undefined} onClick={() => open()}><IconHausaufgabe /><span>Hausaufgaben</span></button>, host)}
    {page && createPortal(<HausaufgabenAnsicht aktiv={aktiv} onClose={() => setAktiv(false)} initialId={auswahl} onSelect={setAuswahl} onOpenModule={openModule} />, page)}
    {!aktiv && lessonTarget && <ModulHinweis target={lessonTarget} onOpen={open} />}
  </>;
}
