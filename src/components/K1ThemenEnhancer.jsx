/* Thematische K1-USt-Oberfläche über dem bestehenden K1Campus.

   Der K1Campus bleibt Quelle für Navigation, Detailseiten, Suche und Fortschritt.
   Diese Erweiterung ersetzt nur die sichtbare Cockpit-/Lernmodul-Übersicht durch
   eine K3-artige, prüfungsorientierte Darstellung. Dadurch bleiben bestehende
   Verlinkungen, Zurück/Vor-Navigation, Originalfälle, Fallsammlung und Hausaufgaben
   unverändert funktionsfähig. */
import "../data/k1-ust-einheit-2-nachtrag-register.js";
import "../data/k1-ust-einheit-3-register.js";
import "../data/k1-ust-einheit-4-register.js";
import "../data/k1-ust-einheit-5-register.js";
import "../data/k1-ust-einheit-6-register.js";
import "../data/k1-ust-einheit-7-register.js";
import "../data/k1-ust-einheit-8-register.js";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import k1UstEinheit1 from "../data/module-vertiefung-m.js";
import k1UstEinheit2 from "../data/module-vertiefung-n.js";
import { k1UstGruppieren, k1UstOberthema, k1UstOberthemen } from "../data/k1-ust-themen.js";
import { anteil, laden } from "../lib/fortschritt";
import { SchemaVerweise, grundschema } from "./K1SchemaLinks";
import { IconHaken } from "./Icons";
import "./k1-themen.css";

const k1UstInhalte = [...k1UstEinheit1, ...k1UstEinheit2];
const k1UstModule = k1UstInhalte.filter((inhalt) => inhalt.area !== "Fall");
const k1UstFaelle = k1UstInhalte.filter((inhalt) => inhalt.area === "Fall");
const modulIds = new Set(k1UstModule.map((m) => m.id));
const fallIds = new Set(k1UstFaelle.map((m) => m.id));

function gleich(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function bereinigteIds(key, gueltig) {
  const roh = laden(key, []);
  if (!Array.isArray(roh)) return [];
  return [...new Set(roh.filter((id) => gueltig.has(id)))];
}

function useK1Fortschritt() {
  const lesen = useCallback(() => ({
    module: bereinigteIds("stb-k1-ust-erledigt", modulIds),
    faelle: bereinigteIds("stb-k1-ust-erledigt", fallIds),
    laeufe: Array.isArray(laden("stb-k1-klausurlauf", [])) ? laden("stb-k1-klausurlauf", []) : [],
  }), []);
  const [stand, setStand] = useState(lesen);

  useEffect(() => {
    const aktualisieren = () => {
      const neu = lesen();
      setStand((alt) => (gleich(alt, neu) ? alt : neu));
    };
    const timer = window.setInterval(aktualisieren, 450);
    window.addEventListener("storage", aktualisieren);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("storage", aktualisieren);
    };
  }, [lesen]);

  return stand;
}

function inputSetzen(input, wert) {
  if (!input) return;
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
  if (setter) setter.call(input, wert);
  else input.value = wert;
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));
}

function textButton(scope, texte) {
  const gesucht = Array.isArray(texte) ? texte : [texte];
  return Array.from(scope?.querySelectorAll("button") || []).find((button) =>
    gesucht.includes(button.textContent?.trim()),
  );
}

function nativeRailButton(campus, text) {
  return Array.from(campus?.querySelectorAll(".rail__nav .rail__link") || []).find((button) =>
    button.textContent?.trim() === text,
  );
}

function inhaltIdAusModul(element) {
  const text = element?.querySelector(".modul__kopf")?.textContent || "";
  const treffer = text.match(/(?:Lernmodul|Modul|Fall)\s+(\d+)/i);
  return treffer ? Number(treffer[1]) : null;
}

function NativeNavigation({ setThema }) {
  const railOeffnen = useCallback((label) => {
    const campus = document.querySelector(".kst-campus");
    nativeRailButton(campus, label)?.click();
  }, []);

  const schemaOeffnen = useCallback((ziel = "schema-architektur") => {
    const campus = document.querySelector(".kst-campus");
    const schema = nativeRailButton(campus, "Prüfschema");
    if (schema?.getAttribute("aria-current") !== "true") schema?.click();

    const versuchen = (versuch = 0) => {
      const element = document.getElementById(ziel);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (versuch < 35) window.setTimeout(() => versuchen(versuch + 1), 55);
    };
    window.setTimeout(() => versuchen(), 35);
  }, []);

  const lernmoduleOeffnen = useCallback((thema = "alle") => {
    setThema(thema);
    const campus = document.querySelector(".kst-campus");
    const button = nativeRailButton(campus, "Umsatzsteuer");
    if (button?.getAttribute("aria-current") !== "true") button?.click();
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 25);
  }, [setThema]);

  const modulOeffnen = useCallback((id) => {
    const zielId = Number(id);
    const campus = document.querySelector(".kst-campus");
    const ust = nativeRailButton(campus, "Umsatzsteuer");
    if (ust?.getAttribute("aria-current") !== "true") ust?.click();

    const versuchen = (versuch = 0) => {
      const aktuell = document.querySelector(".kst-campus");
      const page = aktuell?.querySelector("main.page");
      if (!aktuell || !page || versuch > 45) return;

      const suchfeld = aktuell.querySelector('input[aria-label="Umsatzsteuer-Inhalte durchsuchen"]');
      if (suchfeld?.value) {
        inputSetzen(suchfeld, "");
        window.setTimeout(() => versuchen(versuch + 1), 45);
        return;
      }

      const alleEinheiten = textButton(page, "Alle Einheiten");
      if (alleEinheiten && alleEinheiten.getAttribute("aria-pressed") !== "true") {
        alleEinheiten.click();
        window.setTimeout(() => versuchen(versuch + 1), 45);
        return;
      }

      const alleTypen = textButton(page, "Fälle und Module");
      if (alleTypen && alleTypen.getAttribute("aria-pressed") !== "true") {
        alleTypen.click();
        window.setTimeout(() => versuchen(versuch + 1), 45);
        return;
      }

      const nativeModules = Array.from(page.querySelectorAll(".modules"))
        .find((element) => !element.closest(".k1-themen-root"));
      const karte = Array.from(nativeModules?.querySelectorAll(".modul") || [])
        .find((element) => inhaltIdAusModul(element) === zielId);
      if (karte) {
        karte.click();
        return;
      }
      window.setTimeout(() => versuchen(versuch + 1), 60);
    };

    window.setTimeout(() => versuchen(), 35);
  }, []);

  return { railOeffnen, schemaOeffnen, lernmoduleOeffnen, modulOeffnen };
}

function K1ThemenCockpit({ themaSetzen }) {
  const fortschritt = useK1Fortschritt();
  const nav = NativeNavigation({ setThema: themaSetzen });
  const erledigt = fortschritt.module;
  const quote = anteil(erledigt.length, k1UstModule.length);
  const naechstes = k1UstModule.find((m) => !erledigt.includes(m.id)) || k1UstModule[0];
  const naechstesThema = k1UstOberthema(naechstes);

  const gerechnet = useMemo(() => {
    const ids = new Set(
      fortschritt.laeufe.flatMap((lauf) => (lauf?.faelle || []).map((fall) => fall?.modulId)),
    );
    const anzahl = [...ids].filter((id) => fallIds.has(id)).length;
    return {
      anzahl,
      gesamt: k1UstFaelle.length,
      quote: anteil(anzahl, k1UstFaelle.length),
      letzter: fortschritt.laeufe[0] || null,
    };
  }, [fortschritt.laeufe]);

  const gruppen = useMemo(() => k1UstGruppieren(k1UstModule), []);

  return (
    <div className="k1-themen-cockpit">
      <div className="cockpit">
        <section className="these kst-these">
          <span className="kicker">Klausur 1 · Umsatzsteuer · prüfungsorientiert</span>
          <h2>Jeden USt-Fall in derselben Logik lösen: <em>Leistung → Ort → Steuer → Vorsteuer.</em></h2>
          <p>
            Die acht Kurseinheiten bleiben als Quellenstand erhalten. Gelernt wird aber nach neun fachlichen
            Oberthemen, die dem UStG und dem typischen Klausuraufbau folgen. Jedes Lernmodul erscheint genau
            einmal als Unterthema; Originalfälle bleiben separat trainierbar.
          </p>
          <div className="these__aktionen">
            <button className="btn" onClick={() => nav.modulOeffnen(naechstes.id)}>Weiterlernen</button>
            <button className="btn btn--linie" onClick={() => nav.lernmoduleOeffnen("alle")}>Lernmodule öffnen</button>
            <button className="btn btn--linie" onClick={() => nav.schemaOeffnen("schema-architektur")}>Prüfschema ansehen</button>
          </div>
        </section>

        <section className="panel fortschritt">
          <div className="fortschritt__ringe">
            <div>
              <div className="ring" style={{ "--p": `${quote}%` }}><b>{quote}%</b></div>
              <h3>Bearbeitungsstand</h3>
              <p>{erledigt.length} von {k1UstModule.length} Lernmodulen abgehakt</p>
            </div>
            <div>
              <div className="ring ring--gerechnet" style={{ "--p": `${gerechnet.quote}%` }}><b>{gerechnet.quote}%</b></div>
              <h3>Selbst gerechnet</h3>
              <p>{gerechnet.anzahl} von {gerechnet.gesamt} Originalfällen im Klausurmodus bearbeitet</p>
            </div>
          </div>
          {gerechnet.letzter && Number.isFinite(gerechnet.letzter.erreicht) && (
            <p className="fortschritt__lauf">
              Letzter Klausurlauf: {gerechnet.letzter.erreicht} von {gerechnet.letzter.moeglich} Punkten
              {Number.isFinite(gerechnet.letzter.minuten) && Number.isFinite(gerechnet.letzter.sollminuten)
                ? ` · ${Math.abs(gerechnet.letzter.minuten - gerechnet.letzter.sollminuten)} Minuten ${gerechnet.letzter.minuten > gerechnet.letzter.sollminuten ? "über" : "unter"} Sollzeit`
                : ""}
            </p>
          )}
        </section>
      </div>

      <section className="abschnitt">
        <span className="kicker">Weiter im Stoff</span>
        <button className="weiter" onClick={() => nav.modulOeffnen(naechstes.id)}>
          <span className="kicker">{naechstesThema.label} · Unterthema · Modul {naechstes.id}</span>
          <h3>{naechstes.title}</h3>
          <p>{naechstes.intro?.[0]}</p>
          <span className="norm">{naechstes.law}</span>
        </button>
        <SchemaVerweise text={naechstes.law} onOpen={nav.schemaOeffnen} />
      </section>

      <section className="abschnitt">
        <h2>Aufbau der USt-Lernmodule</h2>
        <div className="raster raster--3 k1-themen-bereiche">
          {gruppen.map((gruppe) => {
            const gesamt = gruppe.module.length;
            const fertig = gruppe.module.filter((m) => erledigt.includes(m.id)).length;
            return (
              <article className="bereich" key={gruppe.id}>
                <b>{gesamt} Unterthemen</b>
                <h3>{gruppe.label}</h3>
                <p>{gruppe.beschreibung}</p>
                <span className="k1-themen-bereich__norm">{gruppe.kurz}</span>
                <div className="bereich__balken" role="img" aria-label={`${fertig} von ${gesamt} bearbeitet`}>
                  <span style={{ width: `${anteil(fertig, gesamt)}%` }} />
                </div>
                <small className="bereich__stand">{fertig} von {gesamt} bearbeitet</small>
                <button onClick={() => nav.lernmoduleOeffnen(gruppe.id)}>Unterthemen öffnen →</button>
              </article>
            );
          })}

          <article className="bereich k1-themen-bereich--praxis">
            <b>{k1UstFaelle.length} Originalfälle</b>
            <h3>Originalfälle</h3>
            <p>Falltraining getrennt von der Systematik – bereits fachlich kategorisiert und mit Lösungen sowie Schema-Querverweisen.</p>
            <button onClick={() => nav.railOeffnen("Originalfälle")}>Originalfälle öffnen →</button>
          </article>
          <article className="bereich k1-themen-bereich--praxis">
            <b>Meurer-Fälle</b>
            <h3>Fallsammlung</h3>
            <p>Zusätzliche Originalfälle mit Überschneidungsverweisen zurück in die passenden K1-Lernmodule.</p>
            <button onClick={() => nav.railOeffnen("Fallsammlung")}>Fallsammlung öffnen →</button>
          </article>
          <article className="bereich k1-themen-bereich--praxis">
            <b>7 Fachtermine</b>
            <h3>Hausaufgaben USt</h3>
            <p>Nacharbeit mit vollständig erfassten Aufgaben, aufklappbaren Lösungen und direkten Querverweisen in den Lernstoff.</p>
            <button onClick={() => nav.railOeffnen("Hausaufgaben USt")}>Hausaufgaben öffnen →</button>
          </article>
        </div>
      </section>

      <section className="abschnitt">
        <div className="kst-abschnitt-kopf">
          <h2>Das USt-Aufbauschema</h2>
          <button className="kst-schema-alle" onClick={() => nav.schemaOeffnen("schema-architektur")}>Gesamtes Prüfschema ↗</button>
        </div>
        <div className="kst-pruefpfad">
          {grundschema.map(([nummer, titel, text, ziel]) => (
            <button className="kst-pruefpfad__stufe" key={nummer} onClick={() => nav.schemaOeffnen(ziel)}>
              <b>{nummer}</b>
              <div><h3>{titel}</h3><p>{text}</p><small>im Prüfschema ↗</small></div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function K1ThemenListe({ thema, themaSetzen, suche }) {
  const fortschritt = useK1Fortschritt();
  const nav = NativeNavigation({ setThema: themaSetzen });
  const q = suche.trim().toLowerCase();

  const gruppen = useMemo(() => {
    return k1UstGruppieren(k1UstModule)
      .filter((gruppe) => thema === "alle" || gruppe.id === thema)
      .map((gruppe) => ({
        ...gruppe,
        module: gruppe.module.filter((m) => {
          if (!q) return true;
          return [m.title, m.law, m.difficulty, `Einheit ${m.einheit}`, ...(m.normchain || []), ...(m.intro || [])]
            .join(" ").toLowerCase().includes(q);
        }),
      }))
      .filter((gruppe) => gruppe.module.length > 0);
  }, [q, thema]);

  const anzahl = gruppen.reduce((summe, gruppe) => summe + gruppe.module.length, 0);
  const aktivLabel = k1UstOberthemen.find((eintrag) => eintrag.id === thema)?.label;

  return (
    <div className="k1-themen-liste-page">
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 1 · Umsatzsteuer · Lernmodule</span>
          <h1>{suche ? `Treffer für „${suche}“` : aktivLabel || "Lernmodule nach Oberthemen"}</h1>
          <p className="lead">
            Die fachlichen Oberthemen ersetzen die bisherige Einheiten-Navigation. Die einzelne Kurseinheit wird nur noch als Quellenhinweis am jeweiligen Unterthema gezeigt.
          </p>
        </div>
        <span className="zaehler">{anzahl} Lernmodule</span>
      </div>

      <div className="filter k1-themen-filter" aria-label="Lernmodule nach Oberthema filtern">
        <button aria-pressed={thema === "alle"} onClick={() => themaSetzen("alle")}>Alle Oberthemen</button>
        {k1UstOberthemen.map((eintrag) => (
          <button key={eintrag.id} aria-pressed={thema === eintrag.id} onClick={() => themaSetzen(eintrag.id)}>
            {eintrag.label}
          </button>
        ))}
      </div>

      {gruppen.map((gruppe) => {
        const fertig = gruppe.module.filter((m) => fortschritt.module.includes(m.id)).length;
        return (
          <section className="k1-themen-gruppe" key={gruppe.id}>
            <header className="k1-themen-gruppe__kopf">
              <div>
                <span className="kicker">Oberthema · {gruppe.kurz}</span>
                <h2>{gruppe.label}</h2>
                <p>{gruppe.beschreibung}</p>
              </div>
              <div className="k1-themen-gruppe__stand">
                <b>{gruppe.module.length} Unterthemen</b>
                <span>{fertig} bearbeitet</span>
              </div>
            </header>

            <div className="modules k1-themen-modules">
              {gruppe.module.map((m) => {
                const erledigt = fortschritt.module.includes(m.id);
                return (
                  <div
                    key={m.id}
                    className={`modul k1-themen-modul${erledigt ? " modul--fertig" : ""}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => nav.modulOeffnen(m.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        nav.modulOeffnen(m.id);
                      }
                    }}
                  >
                    <span className="modul__check" aria-hidden="true">{erledigt && <IconHaken />}</span>
                    <div>
                      <div className="modul__kopf">
                        <span>{gruppe.label}</span>
                        <span>Unterthema · Modul {m.id}</span>
                        <span>{m.difficulty}</span>
                        <span>{m.minutes} Min.</span>
                        <span>Quelle: Einheit {m.einheit}</span>
                      </div>
                      <h3>{m.title}</h3>
                      <div className="modul__norm">{m.law}</div>
                      <SchemaVerweise text={m.law} onOpen={nav.schemaOeffnen} compact stopPropagation />
                    </div>
                    <span className="modul__an">öffnen →</span>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {gruppen.length === 0 && (
        <p className="panel">Keine Lernmodule entsprechen der aktuellen Suche und dem gewählten Oberthema.</p>
      )}
    </div>
  );
}

export default function K1ThemenEnhancer() {
  const [mount, setMount] = useState(null);
  const [sicht, setSicht] = useState(null);
  const [thema, setThema] = useState("alle");
  const [suche, setSuche] = useState("");

  useEffect(() => {
    let frame = null;
    const scan = () => {
      frame = null;
      const campus = document.querySelector(".kst-campus");
      const page = campus?.querySelector("main.page") || null;
      setMount((alt) => (alt === page ? alt : page));

      if (!campus || !page) {
        setSicht(null);
        return;
      }

      const search = campus.querySelector('input[aria-label="Umsatzsteuer-Inhalte durchsuchen"]');
      const suchwert = search?.value || "";
      setSuche((alt) => (alt === suchwert ? alt : suchwert));

      const aktiv = Array.from(campus.querySelectorAll(".rail__nav .rail__link[aria-current='true']"))
        .map((button) => button.textContent?.trim())
        .find(Boolean);
      const fremdansicht = campus.classList.contains("k1-fallsammlung-aktiv") || campus.classList.contains("k1-hausaufgaben-aktiv");
      const lessonOffen = Array.from(page.children).some((element) => element.classList?.contains("lesson"));

      let naechsteSicht = null;
      if (!fremdansicht && aktiv === "Cockpit") naechsteSicht = "cockpit";
      if (!fremdansicht && aktiv === "Umsatzsteuer" && !lessonOffen) naechsteSicht = "module";
      setSicht((alt) => (alt === naechsteSicht ? alt : naechsteSicht));
      campus.classList.toggle("k1-themen-aktiv", Boolean(naechsteSicht));
    };

    const planen = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(scan);
    };

    planen();
    const observer = new MutationObserver(planen);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["aria-current", "class"] });
    const input = (event) => {
      if (event.target?.matches?.('input[aria-label="Umsatzsteuer-Inhalte durchsuchen"]')) planen();
    };
    document.addEventListener("input", input, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("input", input, true);
      if (frame !== null) window.cancelAnimationFrame(frame);
      document.querySelector(".kst-campus")?.classList.remove("k1-themen-aktiv");
    };
  }, []);

  if (!mount) return null;

  return createPortal(
    <div className="k1-themen-root" hidden={!sicht}>
      {sicht === "cockpit" && <K1ThemenCockpit themaSetzen={setThema} />}
      {sicht === "module" && <K1ThemenListe thema={thema} themaSetzen={setThema} suche={suche} />}
    </div>,
    mount,
  );
}
