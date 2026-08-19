import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { k1FallsammlungNachInhalt } from "../data/k1-fallsammlung.js";
import { IconFaelle } from "./Icons";
import K1Fallsammlung, { k1FallsammlungInhaltById } from "./K1Fallsammlung";
import "./k1-fallsammlung.css";

function idAusText(text, muster) {
  const treffer = String(text || "").match(muster);
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

function overlapBlockBauen(inhaltId, onOpen) {
  const faelle = k1FallsammlungNachInhalt(inhaltId);
  if (!faelle.length) return null;

  const block = document.createElement("aside");
  block.className = "k1-fs-overlap--inline";
  block.dataset.k1FsOverlap = String(inhaltId);

  const titel = document.createElement("strong");
  titel.textContent = faelle.length === 1
    ? "Passender Fall in der Meurer-Fallsammlung"
    : "Passende Fälle in der Meurer-Fallsammlung";
  block.appendChild(titel);

  const hinweis = document.createElement("p");
  hinweis.textContent = "Hinweis: Hier besteht eine inhaltliche Überschneidung mit der eigenständigen Fallsammlung.";
  block.appendChild(hinweis);

  const links = document.createElement("div");
  links.className = "k1-fs-overlap__links";
  for (const fall of faelle) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `Fall ${fall.id}: ${fall.title} ↗`;
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      onOpen(fall.id);
    });
    links.appendChild(button);
  }
  block.appendChild(links);
  return block;
}

function inhaltIdFuerElement(element) {
  if (element.matches(".lesson")) {
    return idAusText(element.querySelector(".lesson__kopf .kicker")?.textContent, /(?:Originalfall|Lernmodul)\s+(\d+)/i);
  }
  if (element.matches(".kst-fallkarte")) {
    return idAusText(element.querySelector(".panel__head .kicker")?.textContent, /Fall\s+(\d+)/i);
  }
  if (element.matches(".modul")) {
    return idAusText(element.querySelector(".modul__kopf")?.textContent, /(?:Fall|Lernmodul)\s+(\d+)/i);
  }
  return null;
}

function overlapEinsetzen(element, onOpen) {
  if (element.querySelector(":scope > [data-k1-fs-overlap]")) return;
  const id = inhaltIdFuerElement(element);
  if (!id) return;
  const block = overlapBlockBauen(id, onOpen);
  if (!block) return;

  if (element.matches(".lesson")) {
    const kopf = element.querySelector(".lesson__kopf");
    if (kopf) kopf.insertAdjacentElement("afterend", block);
    else element.prepend(block);
    return;
  }
  if (element.matches(".kst-fallkarte")) {
    const sachverhalt = element.querySelector(".kst-sachverhalt");
    if (sachverhalt) element.insertBefore(block, sachverhalt);
    else element.prepend(block);
    return;
  }
  element.appendChild(block);
}

export default function K1FallsammlungEnhancer() {
  const [aktiv, setAktiv] = useState(false);
  const [modus, setModus] = useState("none");
  const [ziel, setZiel] = useState(null);
  const [mounts, setMounts] = useState({ nav: null, page: null });
  const aktivRef = useRef(false);
  const modusRef = useRef("none");
  const fsScrollRef = useRef(0);

  const aktivSetzen = useCallback((wert) => {
    aktivRef.current = wert;
    setAktiv(wert);
  }, []);

  const modusSetzen = useCallback((wert) => {
    modusRef.current = wert;
    setModus(wert);
  }, []);

  const fsWiederherstellen = useCallback(() => {
    aktivSetzen(true);
    window.setTimeout(() => window.scrollTo({ top: fsScrollRef.current || 0, behavior: "auto" }), 40);
  }, [aktivSetzen]);

  const fallsammlungOeffnen = useCallback((fallId = null) => {
    modusSetzen("none");
    if (fallId) {
      setZiel({ id: String(fallId), token: Date.now() });
    } else {
      setZiel(null);
      window.setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 20);
    }
    aktivSetzen(true);
  }, [aktivSetzen, modusSetzen]);

  const k1InhaltOeffnen = useCallback((inhaltId) => {
    const id = Number(inhaltId);
    if (!k1FallsammlungInhaltById.has(id)) return;

    fsScrollRef.current = window.scrollY;
    aktivSetzen(false);
    modusSetzen("back-fs");

    const versucheOeffnen = (versuch = 0) => {
      const campus = document.querySelector(".kst-campus");
      if (!campus || versuch > 35) return;

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

      const karte = Array.from(page?.querySelectorAll(".modul") || []).find((element) => {
        const nummer = inhaltIdFuerElement(element);
        return nummer === id;
      });
      if (karte) {
        karte.click();
        return;
      }
      window.setTimeout(() => versucheOeffnen(versuch + 1), 60);
    };

    window.setTimeout(() => versucheOeffnen(), 30);
  }, [aktivSetzen, modusSetzen]);

  useEffect(() => {
    let frame = null;
    const scan = () => {
      frame = null;
      const campus = document.querySelector(".kst-campus");
      const nav = campus?.querySelector(".rail__nav") || null;
      const page = campus?.querySelector("main.page") || null;
      setMounts((alt) => (alt.nav === nav && alt.page === page ? alt : { nav, page }));

      page?.querySelectorAll(".lesson, .kst-fallkarte, .modul").forEach((element) => overlapEinsetzen(element, fallsammlungOeffnen));
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
  }, [fallsammlungOeffnen]);

  useEffect(() => {
    const campus = document.querySelector(".kst-campus");
    if (!campus) return undefined;
    campus.classList.toggle("k1-fallsammlung-aktiv", aktiv);

    const nativeLinks = campus.querySelectorAll(".rail__link:not(.k1-fallsammlung-tab)");
    nativeLinks.forEach((button) => {
      if (aktiv && button.hasAttribute("aria-current")) {
        button.dataset.k1FsAriaCurrent = button.getAttribute("aria-current") || "true";
        button.removeAttribute("aria-current");
      } else if (!aktiv && button.dataset.k1FsAriaCurrent) {
        button.setAttribute("aria-current", button.dataset.k1FsAriaCurrent);
        delete button.dataset.k1FsAriaCurrent;
      }
    });
    return () => {
      campus.classList.remove("k1-fallsammlung-aktiv");
    };
  }, [aktiv, mounts]);

  useEffect(() => {
    const force = (button, sollAktiv) => {
      if (!button) return;
      if (sollAktiv) {
        if (button.dataset.k1FsForced !== "true") {
          button.dataset.k1FsForced = "true";
          button.dataset.k1FsWasDisabled = String(button.disabled);
        }
        button.disabled = false;
      } else if (button.dataset.k1FsForced === "true") {
        button.disabled = button.dataset.k1FsWasDisabled === "true";
        delete button.dataset.k1FsForced;
        delete button.dataset.k1FsWasDisabled;
      }
    };

    const sync = () => {
      const back = document.querySelector('[aria-label="Zurück zur vorherigen Seite"]');
      const forward = document.querySelector('[aria-label="Vor zur nächsten Seite"]');
      force(back, aktiv || (!aktiv && modus === "back-fs"));
      force(forward, (!aktiv && modus === "forward-fs") || (aktiv && modus === "forward-k1"));
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
          fsScrollRef.current = window.scrollY;
          aktivSetzen(false);
          modusSetzen("forward-fs");
          return;
        }
        if (modusRef.current === "back-fs") {
          event.preventDefault();
          event.stopImmediatePropagation();
          modusSetzen("forward-k1");
          fsWiederherstellen();
          return;
        }
      }

      if (forward) {
        if (!aktivRef.current && modusRef.current === "forward-fs") {
          event.preventDefault();
          event.stopImmediatePropagation();
          modusSetzen("none");
          fsWiederherstellen();
          return;
        }
        if (aktivRef.current && modusRef.current === "forward-k1") {
          event.preventDefault();
          event.stopImmediatePropagation();
          aktivSetzen(false);
          modusSetzen("back-fs");
          return;
        }
      }

      if (aktivRef.current) {
        const nativeRail = event.target.closest?.(".rail__link:not(.k1-fallsammlung-tab)");
        const brand = event.target.closest?.(".topbar .brand");
        if (nativeRail || brand) {
          fsScrollRef.current = window.scrollY;
          aktivSetzen(false);
          modusSetzen("back-fs");
        }
      }
    };

    const keyCapture = (event) => {
      if (!event.altKey) return;
      if (event.key === "ArrowLeft") {
        const button = document.querySelector('[aria-label="Zurück zur vorherigen Seite"]');
        if ((aktivRef.current || modusRef.current === "back-fs") && button) {
          event.preventDefault();
          button.click();
        }
      }
      if (event.key === "ArrowRight") {
        const button = document.querySelector('[aria-label="Vor zur nächsten Seite"]');
        if ((modusRef.current === "forward-fs" || (aktivRef.current && modusRef.current === "forward-k1")) && button) {
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
  }, [aktivSetzen, fsWiederherstellen, modusSetzen]);

  const tab = mounts.nav ? createPortal(
    <button
      type="button"
      className="rail__link k1-fallsammlung-tab"
      aria-current={aktiv ? "true" : undefined}
      onClick={() => fallsammlungOeffnen()}
      title="Meurer-Fallsammlung öffnen"
    >
      <IconFaelle />
      Fallsammlung
    </button>,
    mounts.nav,
  ) : null;

  const inhalt = mounts.page ? createPortal(
    <div className="k1-fallsammlung-root" hidden={!aktiv}>
      <K1Fallsammlung ziel={ziel} onOpenInhalt={k1InhaltOeffnen} />
    </div>,
    mounts.page,
  ) : null;

  return <>{tab}{inhalt}</>;
}
