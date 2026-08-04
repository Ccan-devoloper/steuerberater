import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { module as alleModule } from "../data/module";
import hausaufgaben, { passendeModule } from "../data/hausaufgaben";
import "./hausaufgaben.css";

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
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5h10.5L19 7v13.5H5zM15.5 3.5V7H19M8 11h8M8 14.5h8M8 18h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>;
}

function HausaufgabenAnsicht({ aktiv, onClose, initialId, onSelect, onOpenModule }) {
  const [suche, setSuche] = useState("");
  const [thema, setThema] = useState("alle");
  const alleThemen = useMemo(() => [...new Set(hausaufgaben.flatMap((h) => h.themen))].sort((a, b) => a.localeCompare(b, "de")), []);
  const liste = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return hausaufgaben.filter((h) => {
      const text = [h.titel, ...h.themen, ...h.aufgaben, ...h.loesung, ...h.normen].join(" ").toLowerCase();
      return (thema === "alle" || h.themen.includes(thema)) && (!q || text.includes(q));
    });
  }, [suche, thema]);

  useEffect(() => {
    if (aktiv && initialId) requestAnimationFrame(() => document.getElementById(initialId)?.scrollIntoView({ block: "start" }));
  }, [aktiv, initialId]);

  if (!aktiv) return null;
  return (
    <div className="hausaufgaben-view" role="region" aria-label="Hausaufgaben">
      <div className="hausaufgaben-head">
        <div><span className="kicker">Bilanzierung nach Handels- und Steuerrecht</span><h1>Hausaufgaben mit Lösungen</h1><p className="lead">Alle neun Fachtermine als strukturierte, klausurnahe Aufbereitung der bereitgestellten Aufgaben und Musterlösungen.</p></div>
        <button className="btn btn--linie" onClick={onClose}>Zurück</button>
      </div>
      <div className="hausaufgaben-tools">
        <input value={suche} onChange={(e) => setSuche(e.target.value)} placeholder="Hausaufgaben durchsuchen" aria-label="Hausaufgaben durchsuchen" />
        <select value={thema} onChange={(e) => setThema(e.target.value)} aria-label="Nach Thema filtern"><option value="alle">Alle Themen</option>{alleThemen.map((t) => <option key={t}>{t}</option>)}</select>
        <span>{liste.length} von {hausaufgaben.length}</span>
      </div>
      <div className="hausaufgaben-list">
        {liste.map((h) => {
          const module = passendeModule(h, alleModule);
          return <article className="hausaufgabe" id={h.id} key={h.id}>
            <header className="hausaufgabe__kopf"><div><span className="kicker">Fachtermin {h.termin} · Rechtsstand {h.rechtsstand}</span><h2>{h.titel}</h2><p>{h.zeit} · Quelle: {h.quelle}</p></div><span className="hausaufgabe__nummer">{h.termin}</span></header>
            {module.length > 0 && <div className="hausaufgabe__module"><b>Passende Lernmodule</b><div className="hausaufgabe__links">{module.map((m) => <button key={m.id} onClick={() => onOpenModule(m)}>Zum Modul {m.id}: {m.title}</button>)}</div></div>}
            <div className="hausaufgabe__chips">{h.themen.map((t) => <span key={t}>{t}</span>)}</div>
            <div className="hausaufgabe__spalten"><section><h3>Aufgaben</h3><ul>{h.aufgaben.map((x, i) => <li key={i}>{x}</li>)}</ul></section><section><h3>Lösungsschwerpunkte</h3><ul>{h.loesung.map((x, i) => <li key={i}>{x}</li>)}</ul></section></div>
            <details><summary>Normen & Prüfungshinweise</summary><div className="hausaufgabe__normen">{h.normen.map((n) => <span key={n}>{n}</span>)}</div><p>Prüfungsaufbau: Zurechnung → Zuordnung → Bewertung → Wertansatz → Buchungssatz und Gewinnauswirkung. Handels- und Steuerbilanz bei Abweichungen stets getrennt entwickeln.</p></details>
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
  return createPortal(<section className="hausaufgaben-modulbox"><span className="kicker">Passende Hausaufgaben</span><h2>Mit diesen Fällen üben</h2><div>{passend.map((h) => <button key={h.id} onClick={() => onOpen(h.id)}>Fachtermin {h.termin}: {h.titel} →</button>)}</div></section>, target);
}

export default function HausaufgabenPortal() {
  const [host, setHost] = useState(null);
  const [page, setPage] = useState(null);
  const [lessonTarget, setLessonTarget] = useState(null);
  const [aktiv, setAktiv] = useState(false);
  const [auswahl, setAuswahl] = useState(null);

  useEffect(() => {
    const aktualisieren = () => {
      setHost(navHostErmitteln());
      setPage(document.querySelector("main.page"));
      setLessonTarget(document.querySelector(".lesson .blaettern"));
    };
    aktualisieren();
    const observer = new MutationObserver(aktualisieren);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!page) return;
    page.classList.toggle("hausaufgaben-aktiv", aktiv);
    return () => page.classList.remove("hausaufgaben-aktiv");
  }, [page, aktiv]);

  const open = (id = null) => { setAuswahl(id); setAktiv(true); window.scrollTo({ top: 0, behavior: "auto" }); };
  const openModule = (modul) => { setAktiv(false); window.setTimeout(() => modulOeffnen(modul), 0); };

  return <>
    {host && createPortal(<button className="rail__link hausaufgaben-nav" aria-current={aktiv ? "true" : undefined} onClick={() => open()}><IconHausaufgabe />Hausaufgaben</button>, host)}
    {page && createPortal(<HausaufgabenAnsicht aktiv={aktiv} onClose={() => setAktiv(false)} initialId={auswahl} onSelect={setAuswahl} onOpenModule={openModule} />, page)}
    {!aktiv && lessonTarget && <ModulHinweis target={lessonTarget} onOpen={open} />}
  </>;
}
