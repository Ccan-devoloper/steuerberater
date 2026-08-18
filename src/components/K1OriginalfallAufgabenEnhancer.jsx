import { useEffect } from "react";
import k1OriginalfallAufgaben from "../data/k1-originalfall-aufgaben";
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
  quelle.textContent = `PDF S. ${daten.seiten}`;
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

function fallkarteAnreichern(karte) {
  const kicker = karte.querySelector(".panel__head .kicker")?.textContent;
  const fallId = fallIdAusText(kicker, /Fall\s+(\d+)/i);
  const daten = k1OriginalfallAufgaben[fallId];
  const sachverhalt = karte.querySelector(".kst-sachverhalt");
  if (!daten || !sachverhalt || sachverhalt.querySelector("[data-k1-originalfall-aufgabe='true']")) return;

  const schemaButtons = eindeutigeSchemaButtons(karte, ":scope > .kst-schema-links .kst-schema-link");
  sachverhalt.appendChild(aufgabenblockBauen(daten, schemaButtons));
}

function modulseiteAnreichern(lesson) {
  const kicker = lesson.querySelector(".lesson__kopf .kicker")?.textContent;
  const fallId = fallIdAusText(kicker, /Originalfall\s+(\d+)/i);
  const daten = k1OriginalfallAufgaben[fallId];
  const sachverhalt = lesson.querySelector(".fall__sachverhalt");
  if (!daten || !sachverhalt || sachverhalt.querySelector("[data-k1-originalfall-aufgabe='true']")) return;

  const schemaButtons = eindeutigeSchemaButtons(lesson, ".lesson__kopf .kst-schema-links .kst-schema-link");
  sachverhalt.appendChild(aufgabenblockBauen(daten, schemaButtons));
}

function anreichern() {
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
