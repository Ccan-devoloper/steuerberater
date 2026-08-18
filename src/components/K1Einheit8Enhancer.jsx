import { useEffect } from "react";
import aufgaben from "../data/k1-originalfall-aufgaben-einheit8";
import skizzen from "../data/k1-einheit8-skizzen";
import "./k1-originalfall-aufgaben.css";

function fallIdAusText(text, muster) {
  const treffer = String(text || "").match(muster);
  return treffer ? Number(treffer[1]) : null;
}

function schemaButtons(scope, selector) {
  const gesehen = new Set();
  return Array.from(scope?.querySelectorAll(selector) || []).filter((button) => {
    const label = button.textContent?.trim();
    if (!label || gesehen.has(label)) return false;
    gesehen.add(label);
    return true;
  });
}

function aufgabenblockBauen(daten, buttons) {
  const block = document.createElement("div");
  block.className = "k1-originalfall-aufgabe";
  block.dataset.k1OriginalfallAufgabe = "true";

  const kopf = document.createElement("div");
  kopf.className = "k1-originalfall-aufgabe__kopf";
  const titel = document.createElement("strong");
  titel.textContent = "Aufgabenstellung";
  const quelle = document.createElement("small");
  quelle.textContent = `Quelle: ${daten.seiten}`;
  kopf.append(titel, quelle);
  block.appendChild(kopf);

  if (daten.fragen?.length) {
    const liste = document.createElement("ol");
    for (const frage of daten.fragen) {
      const punkt = document.createElement("li");
      punkt.textContent = frage;
      liste.appendChild(punkt);
    }
    block.appendChild(liste);
  }
  if (daten.hinweis) {
    const hinweis = document.createElement("p");
    hinweis.textContent = daten.hinweis;
    block.appendChild(hinweis);
  }

  if (buttons.length) {
    const links = document.createElement("div");
    links.className = "k1-originalfall-aufgabe__schema";
    links.setAttribute("aria-label", "Passende Stellen im Umsatzsteuer-Prüfschema");
    for (const original of buttons.slice(0, 5)) {
      const link = document.createElement("button");
      link.type = "button";
      link.className = "kst-schema-link";
      link.textContent = original.textContent;
      link.title = original.title || "Im Prüfschema öffnen";
      link.addEventListener("click", () => original.click());
      links.appendChild(link);
    }
    block.appendChild(links);
  }
  return block;
}

function skizzenblockBauen(spec) {
  const block = document.createElement("figure");
  block.className = "k1-quellskizze";
  block.dataset.k1Quellskizze = "true";
  block.dataset.k1Einheit8 = "true";

  const titel = document.createElement("figcaption");
  titel.textContent = spec.titel;
  block.appendChild(titel);
  const raster = document.createElement("div");
  raster.className = "k1-quellskizze__raster";
  for (const spur of spec.spuren) {
    const zeile = document.createElement("div");
    zeile.className = "k1-quellskizze__spur";
    spur.forEach((text, index) => {
      const zelle = document.createElement("span");
      zelle.textContent = text;
      zeile.appendChild(zelle);
      if (index < spur.length - 1) {
        const pfeil = document.createElement("i");
        pfeil.setAttribute("aria-hidden", "true");
        pfeil.textContent = "→";
        zeile.appendChild(pfeil);
      }
    });
    raster.appendChild(zeile);
  }
  block.appendChild(raster);
  if (spec.note) {
    const note = document.createElement("p");
    note.textContent = spec.note;
    block.appendChild(note);
  }
  return block;
}

function loesungFinden(scope) {
  return Array.from(scope?.querySelectorAll(".fall__block") || []).find((block) => block.querySelector(":scope > b")?.textContent?.trim() === "Lösung");
}

function skizzeEinsetzen(scope, fallId) {
  const spec = skizzen[fallId];
  if (!spec) return;
  const loesung = loesungFinden(scope);
  if (!loesung) return;

  const vorhanden = loesung.querySelector("[data-k1-quellskizze='true']");
  if (vorhanden?.dataset.k1Einheit8 === "true") return;
  if (vorhanden) vorhanden.remove();

  const normBlock = Array.from(loesung.children).find((element) => element.tagName === "DIV");
  const skizze = skizzenblockBauen(spec);
  if (normBlock) loesung.insertBefore(skizze, normBlock);
  else loesung.appendChild(skizze);
}

function karteAnreichern(karte) {
  const fallId = fallIdAusText(karte.querySelector(".panel__head .kicker")?.textContent, /Fall\s+(\d+)/i);
  if (!fallId) return;
  const daten = aufgaben[fallId];
  const sachverhalt = karte.querySelector(".kst-sachverhalt");
  if (daten && sachverhalt && !sachverhalt.querySelector("[data-k1-originalfall-aufgabe='true']")) {
    sachverhalt.appendChild(aufgabenblockBauen(daten, schemaButtons(karte, ":scope > .kst-schema-links .kst-schema-link")));
  }
  skizzeEinsetzen(karte, fallId);
}

function lessonAnreichern(lesson) {
  const fallId = fallIdAusText(lesson.querySelector(".lesson__kopf .kicker")?.textContent, /Originalfall\s+(\d+)/i);
  if (!fallId) return;
  const daten = aufgaben[fallId];
  const sachverhalt = lesson.querySelector(".fall__sachverhalt");
  if (daten && sachverhalt && !sachverhalt.querySelector("[data-k1-originalfall-aufgabe='true']")) {
    sachverhalt.appendChild(aufgabenblockBauen(daten, schemaButtons(lesson, ".lesson__kopf .kst-schema-links .kst-schema-link")));
  }
  skizzeEinsetzen(lesson, fallId);
}

function einheitenTextAktualisieren() {
  const beschreibung = document.querySelector(".kst-these p");
  if (beschreibung?.textContent?.includes("USt-Einheiten 1 bis 7")) {
    beschreibung.textContent = beschreibung.textContent.replace("USt-Einheiten 1 bis 7", "USt-Einheiten 1 bis 8");
  }
  const pagehead = document.querySelector("main.page .pagehead");
  const titel = pagehead?.querySelector("h1");
  if (titel?.textContent?.trim() === "USt-Einheiten 1–7") titel.textContent = "USt-Einheiten 1–8";
  const lead = pagehead?.querySelector(".lead");
  if (lead?.textContent?.includes("aus allen sieben Einheiten")) {
    lead.textContent = lead.textContent.replace("aus allen sieben Einheiten", "aus allen acht Einheiten");
  }
}

function anreichern() {
  einheitenTextAktualisieren();
  document.querySelectorAll(".kst-fallkarte").forEach(karteAnreichern);
  const lesson = document.querySelector("main.page .lesson");
  if (lesson) lessonAnreichern(lesson);
}

export default function K1Einheit8Enhancer() {
  useEffect(() => {
    let frame = null;
    const planen = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        anreichern();
      });
    };
    planen();
    const observer = new MutationObserver(planen);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
