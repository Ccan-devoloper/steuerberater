/* Die Register müssen vor den Datenimporten laufen, damit auch die späteren
   USt-Einheiten für die Querverweise im Hausaufgaben-Reiter verfügbar sind. */
import "../data/k1-ust-einheit-2-nachtrag-register.js";
import "../data/k1-ust-einheit-3-register.js";
import "../data/k1-ust-einheit-4-register.js";
import "../data/k1-ust-einheit-5-register.js";
import "../data/k1-ust-einheit-6-register.js";
import "../data/k1-ust-einheit-7-register.js";
import "../data/k1-ust-einheit-8-register.js";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import k1UstEinheit1 from "../data/module-vertiefung-m.js";
import k1UstEinheit2 from "../data/module-vertiefung-n.js";
import { IconTraining } from "./Icons";
import K1Hausaufgaben from "./K1Hausaufgaben";
import "./k1-hausaufgaben.css";

const k1UstInhaltById = new Map(
  [...k1UstEinheit1, ...k1UstEinheit2].map((inhalt) => [inhalt.id, inhalt]),
);

function idAusText(text) {
  const treffer = String(text || "").match(/(?:Fall|Lernmodul)\s+(\d+)/i);
  return treffer ? Number(treffer[1]) : null;
}

function textButton(scope, text) {
  return Array.from(scope?.querySelectorAll("button") || []).find((button) => button.textContent?.trim() === text);
}

function inputSetzen(input, wert) {
  if (!input) return;
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
  if (setter) setter.call(input, wert);
  else input.value = wert;
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));
}

export default function K1HausaufgabenEnhancer() {
  const [aktiv, setAktiv] = useState(false);
  const [modus, setModus] = useState("none");
  const [mounts, setMounts] = useState({ nav: null, page: null });
  const aktivRef = useRef(false);
  const modusRef = useRef("none");
  const haScrollRef = useRef(0);

  const aktivSetzen = useCallback((wert) => {
    aktivRef.current = wert;
    setAktiv(wert);
  }, []);

  const modusSetzen = useCallback((wert) => {
    modusRef.current = wert;
    setModus(wert);
  }, []);

  const hausaufgabenWiederherstellen = useCallback(() => {
    aktivSetzen(true);
    window.setTimeout(() => window.scrollTo({ top: haScrollRef.current || 0, behavior: "auto" }), 40);
  }, [aktivSetzen]);

  const hausaufgabenOeffnen = useCallback(() => {
    modusSetzen("none");
    aktivSetzen(true);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 20);
  }, [aktivSetzen, modusSetzen]);

  const k1InhaltOeffnen = useCallback((inhaltId) => {
    const id = Number(inhaltId);
    if (!k1UstInhaltById.has(id)) return;

    haScrollRef.current = window.scrollY;
    aktivSetzen(false);
    modusSetzen("back-ha");

    const versucheOeffnen = (versuch = 0) => {
      const campus = document.querySelector(".kst-campus");
      if (!campus || versuch > 40) return;

      const ust = Array.from(campus.querySelectorAll(".rail__nav .rail__link"))
        .find((button) => button.textContent?.trim() === "Umsatzsteuer");
      if (ust && ust.getAttribute("aria-current") !== "true") {
        ust.click();
        window.setTimeout(() => versucheOeffnen(versuch + 1), 45);
        return;
      }

      const suchfeld = campus.querySelector('input[aria-label="Umsatzsteuer-Inhalte durchsuchen"]');
      if (suchfeld?.value) {
        inputSetzen(suchfeld, "");
        window.setTimeout(() => versucheOeffnen(versuch + 1), 45);
        return;
      }

      const page = campus.querySelector("main.page");
      const alleEinheiten = textButton(page, "Alle Einheiten");
      if (alleEinheiten?.getAttribute("aria-pressed") !== "true") {
        alleEinheiten?.click();
        window.setTimeout(() => versucheOeffnen(versuch + 1), 45);
        return;
      }
      const alleTypen = textButton(page, "Fälle und Module");
      if (alleTypen && alleTypen.getAttribute("aria-pressed") !== "true") {
        alleTypen.click();
        window.setTimeout(() => versucheOeffnen(versuch + 1), 45);
        return;
      }

      const karte = Array.from(page?.querySelectorAll(".modul") || []).find((element) => idAusText(element.querySelector(".modul__kopf")?.textContent) === id);
      if (karte) {
        karte.click();
        return;
      }
      window.setTimeout(() => versucheOeffnen(versuch + 1), 60);
    };

    window.setTimeout(() => versucheOeffnen(), 30);
  }, [aktivSetzen, modusSetzen]);

  const schemaOeffnen = useCallback((ziel) => {
    haScrollRef.current = window.scrollY;
    aktivSetzen(false);
    modusSetzen("back-ha");

    const versucheSchema = (versuch = 0) => {
      const campus = document.querySelector(".kst-campus");
      if (!campus || versuch > 40) return;
      const schema = Array.from(campus.querySelectorAll(".rail__nav .rail__link"))
        .find((button) => button.textContent?.trim() === "Prüfschema");
      if (schema && schema.getAttribute("aria-current") !== "true") {
        schema.click();
        window.setTimeout(() => versucheSchema(versuch + 1), 45);
        return;
      }
      const element = document.getElementById(ziel);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      window.setTimeout(() => versucheSchema(versuch + 1), 60);
    };

    window.setTimeout(() => versucheSchema(), 30);
  }, [aktivSetzen, modusSetzen]);

  useEffect(() => {
    let frame = null;
    const scan = () => {
      frame = null;
      const campus = document.querySelector(".kst-campus");
      const nav = campus?.querySelector(".rail__nav") || null;
      const page = campus?.querySelector("main.page") || null;
      setMounts((alt) => (alt.nav === nav && alt.page === page ? alt : { nav, page }));
    };
    const planen = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(scan);
    };
    planen();
    const observer = new MutationObserver(planen);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const campus = document.querySelector(".kst-campus");
    if (!campus) return undefined;
    campus.classList.toggle("k1-hausaufgaben-aktiv", aktiv);

    const andereLinks = campus.querySelectorAll(".rail__link:not(.k1-hausaufgaben-tab)");
    andereLinks.forEach((button) => {
      if (aktiv && button.hasAttribute("aria-current")) {
        button.dataset.k1HaAriaCurrent = button.getAttribute("aria-current") || "true";
        button.removeAttribute("aria-current");
      } else if (!aktiv && button.dataset.k1HaAriaCurrent) {
        button.setAttribute("aria-current", button.dataset.k1HaAriaCurrent);
        delete button.dataset.k1HaAriaCurrent;
      }
    });

    return () => campus.classList.remove("k1-hausaufgaben-aktiv");
  }, [aktiv, mounts]);

  useEffect(() => {
    const force = (button, sollAktiv) => {
      if (!button) return;
      if (sollAktiv) {
        if (button.dataset.k1HaForced !== "true") {
          button.dataset.k1HaForced = "true";
          button.dataset.k1HaWasDisabled = String(button.disabled);
        }
        button.disabled = false;
      } else if (button.dataset.k1HaForced === "true") {
        button.disabled = button.dataset.k1HaWasDisabled === "true";
        delete button.dataset.k1HaForced;
        delete button.dataset.k1HaWasDisabled;
      }
    };

    const sync = () => {
      const back = document.querySelector('[aria-label="Zurück zur vorherigen Seite"]');
      const forward = document.querySelector('[aria-label="Vor zur nächsten Seite"]');
      force(back, aktiv || (!aktiv && modus === "back-ha"));
      force(forward, (!aktiv && modus === "forward-ha") || (aktiv && modus === "forward-k1"));
    };
    sync();
    const timer = window.setTimeout(sync, 120);
    return () => window.clearTimeout(timer);
  }, [aktiv, modus, mounts]);

  useEffect(() => {
    const clickCapture = (event) => {
      const back = event.target.closest?.('[aria-label="Zurück zur vorherigen Seite"]');
      const forward = event.target.closest?.('[aria-label="Vor zur nächsten Seite"]');

      if (back) {
        if (aktivRef.current && modusRef.current === "forward-k1") {
          event.preventDefault();
          event.stopImmediatePropagation();
          aktivSetzen(false);
          modusSetzen("none");
          window.setTimeout(() => back.click(), 20);
          return;
        }
        if (aktivRef.current) {
          event.preventDefault();
          event.stopImmediatePropagation();
          haScrollRef.current = window.scrollY;
          aktivSetzen(false);
          modusSetzen("forward-ha");
          return;
        }
        if (modusRef.current === "back-ha") {
          event.preventDefault();
          event.stopImmediatePropagation();
          modusSetzen("forward-k1");
          hausaufgabenWiederherstellen();
          return;
        }
      }

      if (forward) {
        if (!aktivRef.current && modusRef.current === "forward-ha") {
          event.preventDefault();
          event.stopImmediatePropagation();
          modusSetzen("none");
          hausaufgabenWiederherstellen();
          return;
        }
        if (aktivRef.current && modusRef.current === "forward-k1") {
          event.preventDefault();
          event.stopImmediatePropagation();
          aktivSetzen(false);
          modusSetzen("back-ha");
          return;
        }
      }

      if (aktivRef.current) {
        const andererRail = event.target.closest?.(".rail__link:not(.k1-hausaufgaben-tab)");
        const brand = event.target.closest?.(".topbar .brand");
        if (andererRail || brand) {
          haScrollRef.current = window.scrollY;
          aktivSetzen(false);
          modusSetzen("back-ha");
        }
      }
    };

    const keyCapture = (event) => {
      if (!event.altKey) return;
      if (event.key === "ArrowLeft") {
        const button = document.querySelector('[aria-label="Zurück zur vorherigen Seite"]');
        if ((aktivRef.current || modusRef.current === "back-ha") && button) {
          event.preventDefault();
          button.click();
        }
      }
      if (event.key === "ArrowRight") {
        const button = document.querySelector('[aria-label="Vor zur nächsten Seite"]');
        if ((modusRef.current === "forward-ha" || (aktivRef.current && modusRef.current === "forward-k1")) && button) {
          event.preventDefault();
          button.click();
        }
      }
    };

    document.addEventListener("click", clickCapture, true);
    window.addEventListener("keydown", keyCapture, true);
    return () => {
      document.removeEventListener("click", clickCapture, true);
      window.removeEventListener("keydown", keyCapture, true);
    };
  }, [aktivSetzen, hausaufgabenWiederherstellen, modusSetzen]);

  const tab = mounts.nav ? createPortal(
    <button
      type="button"
      className="rail__link k1-hausaufgaben-tab"
      aria-current={aktiv ? "true" : undefined}
      onClick={hausaufgabenOeffnen}
      title="USt-Hausaufgaben öffnen"
    >
      <IconTraining />
      Hausaufgaben USt
    </button>,
    mounts.nav,
  ) : null;

  const inhalt = mounts.page ? createPortal(
    <div className="k1-hausaufgaben-root" hidden={!aktiv}>
      <K1Hausaufgaben
        onOpenInhalt={k1InhaltOeffnen}
        onOpenSchema={schemaOeffnen}
        inhaltById={k1UstInhaltById}
      />
    </div>,
    mounts.page,
  ) : null;

  return <>{tab}{inhalt}</>;
}
