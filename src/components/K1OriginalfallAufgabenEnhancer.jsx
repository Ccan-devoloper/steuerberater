import { useEffect } from "react";
import k1OriginalfallAufgaben from "../data/k1-originalfall-aufgaben";
import k1Einheit3Skizzen from "../data/k1-einheit3-skizzen";
import "./k1-originalfall-aufgaben.css";

function fallIdAusText(text, muster) {
  const treffer = String(text || "").match(muster);
  return treffer ? Number(treffer[1]) : null;
}

function eindeutigeSchemaButtons(scope, selector) {
  const gesehen = new Set();
  return Array.from(scope?.querySelectorAll(selector) || []).filter((button) => {
    const label = button.textContent?.trim();
    if (!label || gesehen.has(label)) return false;
    gesehen.add(label);
    return true;
  });
}

function aufgabenblockBauen(daten, schemaButtons) {
  const block = document.createElement("div");
  block.className = "k1-originalfall-aufgabe";
  block.dataset.k1OriginalfallAufgabe = "true";

  const kopf = document.createElement("div");
  kopf.className = "k1-originalfall-aufgabe__kopf";

  const titel = document.createElement("strong");
  titel.textContent = "Aufgabenstellung";
  kopf.appendChild(titel);

  const quelle = document.createElement("small");
  quelle.textContent = `Quelle: ${daten.seiten}`;
  kopf.appendChild(quelle);
  block.appendChild(kopf);

  if (daten.fragen.length > 0) {
    const liste = document.createElement("ol");
    for (const frage of daten.fragen) {
      const punkt = document.createElement("li");
      punkt.textContent = frage;
      liste.appendChild(punkt);
    }
    block.appendChild(liste);
  } else if (daten.hinweis) {
    const hinweis = document.createElement("p");
    hinweis.textContent = daten.hinweis;
    block.appendChild(hinweis);
  }

  if (schemaButtons.length > 0) {
    const links = document.createElement("div");
    links.className = "k1-originalfall-aufgabe__schema";
    links.setAttribute("aria-label", "Passende Stellen im Umsatzsteuer-Prüfschema");

    for (const original of schemaButtons.slice(0, 5)) {
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

function loesungsblockFinden(scope) {
  return Array.from(scope?.querySelectorAll(".fall__block") || []).find((block) => {
    const label = block.querySelector(":scope > b")?.textContent?.trim();
    return label === "Lösung";
  });
}

function quellskizzeAnreichern(scope, fallId) {
  const spec = k1Einheit3Skizzen[fallId];
  if (!spec) return;
  const loesung = loesungsblockFinden(scope);
  if (!loesung || loesung.querySelector("[data-k1-quellskizze='true']")) return;

  const normBlock = Array.from(loesung.children).find((element) => element.tagName === "DIV");
  const skizze = skizzenblockBauen(spec);
  if (normBlock) loesung.insertBefore(skizze, normBlock);
  else loesung.appendChild(skizze);
}

function fallkarteAnreichern(karte) {
  const kicker = karte.querySelector(".panel__head .kicker")?.textContent;
  const fallId = fallIdAusText(kicker, /Fall\s+(\d+)/i);
  const daten = k1OriginalfallAufgaben[fallId];
  const sachverhalt = karte.querySelector(".kst-sachverhalt");
  if (!daten || !sachverhalt) return;

  if (!sachverhalt.querySelector("[data-k1-originalfall-aufgabe='true']")) {
    const schemaButtons = eindeutigeSchemaButtons(karte, ":scope > .kst-schema-links .kst-schema-link");
    sachverhalt.appendChild(aufgabenblockBauen(daten, schemaButtons));
  }
  quellskizzeAnreichern(karte, fallId);
}

function modulseiteAnreichern(lesson) {
  const kicker = lesson.querySelector(".lesson__kopf .kicker")?.textContent;
  const fallId = fallIdAusText(kicker, /Originalfall\s+(\d+)/i);
  const daten = k1OriginalfallAufgaben[fallId];
  const sachverhalt = lesson.querySelector(".fall__sachverhalt");
  if (!daten || !sachverhalt) return;

  if (!sachverhalt.querySelector("[data-k1-originalfall-aufgabe='true']")) {
    const schemaButtons = eindeutigeSchemaButtons(lesson, ".lesson__kopf .kst-schema-links .kst-schema-link");
    sachverhalt.appendChild(aufgabenblockBauen(daten, schemaButtons));
  }
  quellskizzeAnreichern(lesson, fallId);
}

function einheitenTextAktualisieren() {
  const beschreibung = document.querySelector(".kst-these p");
  if (beschreibung?.textContent?.includes("USt-Einheiten 1 und 2")) {
    beschreibung.textContent = beschreibung.textContent.replace("USt-Einheiten 1 und 2", "USt-Einheiten 1 bis 3");
  }

  const listenKopf = document.querySelector("main.page .pagehead");
  const titel = listenKopf?.querySelector("h1");
  if (titel?.textContent?.trim() === "USt-Einheiten 1–2") {
    titel.textContent = "USt-Einheiten 1–3";
  }

  const lead = listenKopf?.querySelector(".lead");
  if (lead?.textContent?.includes("aus beiden Einheiten")) {
    lead.textContent = lead.textContent.replace("aus beiden Einheiten", "aus allen drei Einheiten");
  }
}

function anreichern() {
  einheitenTextAktualisieren();
  document.querySelectorAll(".kst-fallkarte").forEach(fallkarteAnreichern);
  const lesson = document.querySelector("main.page .lesson");
  if (lesson) modulseiteAnreichern(lesson);
}

export default function K1OriginalfallAufgabenEnhancer() {
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
