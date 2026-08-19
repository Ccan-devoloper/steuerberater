/* Vereinheitlicht die Hinweise auf Originalfälle, Hausaufgaben und die
   Meurer-Fallsammlung. Die beiden bestehenden Enhancer bleiben für ihre
   Navigation zuständig; ihre Einzelboxen werden auf der Detailseite bei einem
   vereinten Block optisch ausgeblendet und dienen weiterhin als Sprungziele.

   Wichtig: Übungsverweise gehören bewusst NICHT in die Modul-/Fallübersichten.
   Sie werden ausschließlich auf einer geöffneten Detailseite ganz unten – nach
   dem fachlichen Inhalt und unmittelbar vor der Blätternavigation – ergänzt. */
import "../data/k1-ust-einheit-2-nachtrag-register.js";
import "../data/k1-ust-einheit-3-register.js";
import "../data/k1-ust-einheit-4-register.js";
import "../data/k1-ust-einheit-5-register.js";
import "../data/k1-ust-einheit-6-register.js";
import "../data/k1-ust-einheit-7-register.js";
import "../data/k1-ust-einheit-8-register.js";
import { useEffect } from "react";
import k1UstEinheit1 from "../data/module-vertiefung-m.js";
import k1UstEinheit2 from "../data/module-vertiefung-n.js";
import { k1FallsammlungNachInhalt } from "../data/k1-fallsammlung.js";
import { k1UstHausaufgaben } from "../data/k1-ust-hausaufgaben.js";
import {
  passendeModuleZuOriginalfall,
  passendeOriginalfaelleZuModul,
} from "../data/k1-ust-uebungsverweise.js";
import "./k1-uebungsverweise.css";

const alleInhalte = [...k1UstEinheit1, ...k1UstEinheit2];
const module = alleInhalte.filter((inhalt) => inhalt.area !== "Fall");
const originalfaelle = alleInhalte.filter((inhalt) => inhalt.area === "Fall");
const inhaltById = new Map(alleInhalte.map((inhalt) => [Number(inhalt.id), inhalt]));
const hausaufgaben = k1UstHausaufgaben.flatMap((termin) =>
  termin.faelle.map((fall) => ({ ...fall, fachtermin: termin.fachtermin })),
);

function idAusText(text) {
  const treffer = String(text || "").match(/(?:Originalfall|Fall|Lernmodul|Modul)\s+(\d+)/i);
  return treffer ? Number(treffer[1]) : null;
}

function infoFuerDetailseite(element) {
  if (!element?.matches(".lesson")) return null;
  const text = element.querySelector(".lesson__kopf .kicker")?.textContent || "";
  const id = idAusText(text);
  if (!id) return null;
  const inhalt = inhaltById.get(id);
  if (!inhalt) return null;
  return { id, inhalt, istFall: inhalt.area === "Fall" };
}

function hausaufgabenNachInhalt(id) {
  return hausaufgaben.filter((fall) => (fall.querverweise || []).includes(Number(id)));
}

function nativeRailButton(campus, text) {
  return Array.from(campus?.querySelectorAll(".rail__nav .rail__link") || [])
    .find((button) => button.textContent?.trim() === text);
}

function textButton(scope, text) {
  return Array.from(scope?.querySelectorAll("button") || [])
    .find((button) => button.textContent?.trim() === text);
}

function inputSetzen(input, wert) {
  if (!input) return;
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
  if (setter) setter.call(input, wert);
  else input.value = wert;
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));
}

/* Öffnet einen beliebigen K1-USt-Inhalt über die native K1-Liste.

   Die alte Fassung übersprang den Wechsel zur Übersicht, sobald der Rail-Link
   „Umsatzsteuer“ bereits aria-current=true war. Genau das ist auf jeder offenen
   Modulseite der Fall; deshalb konnten verlinkte Originalfälle nicht geöffnet
   werden. Jetzt wird eine offene Detailseite zuerst über ihren echten
   Zurück-zur-USt-Übersicht-Button verlassen. Anschließend werden Such-/Einheiten-
   und Typfilter neutralisiert und erst dann die native Zielkarte geklickt. */
function k1InhaltOeffnen(id) {
  const zielId = Number(id);
  const campus = document.querySelector(".kst-campus");
  if (!campus || !inhaltById.has(zielId)) return;

  const detailZurueck = campus.querySelector("main.page .lesson > .zurueck");
  if (detailZurueck) {
    detailZurueck.click();
  } else {
    const ust = nativeRailButton(campus, "Umsatzsteuer");
    if (ust?.getAttribute("aria-current") !== "true") ust.click();
  }

  const versuchen = (versuch = 0) => {
    const aktuell = document.querySelector(".kst-campus");
    const page = aktuell?.querySelector("main.page");
    if (!aktuell || !page || versuch > 55) return;

    /* Solange noch die alte Detailseite im DOM steht, ist React mit dem
       Zustandswechsel zur Übersicht noch nicht fertig. */
    if (page.querySelector(".lesson")) {
      window.setTimeout(() => versuchen(versuch + 1), 45);
      return;
    }

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

    /* Die K3-artige Themenansicht liegt nur optisch über der nativen Liste.
       Für die bestehende K1-Navigation klicken wir gezielt die native, von
       K1Campus gerenderte Karte – auch wenn sie durch den Enhancer ausgeblendet
       ist. So bleiben Zurück/Vor und Fortschritt weiterhin in einer Routinglogik. */
    const nativeModules = Array.from(page.querySelectorAll(".modules"))
      .find((liste) => !liste.closest(".k1-themen-root"));
    const karte = Array.from(nativeModules?.querySelectorAll(".modul") || [])
      .find((element) => idAusText(element.querySelector(".modul__kopf")?.textContent) === zielId);
    if (karte) {
      karte.click();
      return;
    }

    window.setTimeout(() => versuchen(versuch + 1), 60);
  };

  window.setTimeout(() => versuchen(), 35);
}

function vorhandenenSpezialLinkKlicken(element, selector, text) {
  const versuchen = (versuch = 0) => {
    const button = Array.from(element.querySelectorAll(`${selector} button`))
      .find((eintrag) => eintrag.textContent?.trim() === text);
    if (button) {
      button.click();
      return;
    }
    if (versuch < 15) window.setTimeout(() => versuchen(versuch + 1), 45);
  };
  versuchen();
}

function linkButton(text, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    onClick();
  });
  return button;
}

function gruppeBauen(titel, typ, eintraege, buttonBauen) {
  if (!eintraege.length) return null;
  const gruppe = document.createElement("section");
  gruppe.className = "k1-uebung__gruppe";
  gruppe.dataset.typ = typ;

  const kopf = document.createElement("div");
  kopf.className = "k1-uebung__gruppenkopf";
  const name = document.createElement("strong");
  name.textContent = titel;
  const zahl = document.createElement("span");
  zahl.textContent = String(eintraege.length);
  kopf.append(name, zahl);
  gruppe.appendChild(kopf);

  const links = document.createElement("div");
  links.className = "k1-uebung__links";
  eintraege.forEach((eintrag) => links.appendChild(buttonBauen(eintrag)));
  gruppe.appendChild(links);
  return gruppe;
}

function blockBauen(element, info) {
  const { id, inhalt, istFall } = info;
  const verwandteInhalte = istFall
    ? passendeModuleZuOriginalfall(inhalt, module)
    : passendeOriginalfaelleZuModul(inhalt, originalfaelle);
  const passendeHausaufgaben = hausaufgabenNachInhalt(id);
  const passendeFallsammlung = k1FallsammlungNachInhalt(id);

  if (!verwandteInhalte.length && !passendeHausaufgaben.length && !passendeFallsammlung.length) return null;

  const block = document.createElement("aside");
  block.className = "k1-uebung-overlap k1-uebung-overlap--detail";
  block.dataset.k1UebungOverlap = String(id);

  const kopf = document.createElement("div");
  kopf.className = "k1-uebung__kopf";
  const titel = document.createElement("strong");
  titel.textContent = istFall ? "Passende Lern- und Übungsinhalte" : "Passende Übungsfälle";
  const hinweis = document.createElement("p");
  hinweis.textContent = istFall
    ? "Vertiefung und Nacharbeit zum selben oder eng überlappenden Prüfungsstoff."
    : "Originalfälle, Hausaufgaben und Zusatzfälle zum selben oder eng überlappenden Prüfungsstoff.";
  kopf.append(titel, hinweis);
  block.appendChild(kopf);

  const raster = document.createElement("div");
  raster.className = "k1-uebung__raster";

  const verwandteGruppe = gruppeBauen(
    istFall ? "Lernmodule" : "Originalfälle",
    istFall ? "module" : "originalfaelle",
    verwandteInhalte,
    (ziel) => linkButton(
      `${istFall ? "Modul" : "Originalfall"} ${ziel.id}: ${ziel.title} ↗`,
      () => k1InhaltOeffnen(ziel.id),
    ),
  );
  if (verwandteGruppe) raster.appendChild(verwandteGruppe);

  const hausaufgabenGruppe = gruppeBauen(
    "Hausaufgaben",
    "hausaufgaben",
    passendeHausaufgaben,
    (fall) => {
      const text = `${fall.fachtermin}. Fachtermin · Fall ${fall.nummer}: ${fall.titel} ↗`;
      return linkButton(text, () => vorhandenenSpezialLinkKlicken(element, ".k1-ha-overlap--inline", text));
    },
  );
  if (hausaufgabenGruppe) raster.appendChild(hausaufgabenGruppe);

  const fallsammlungGruppe = gruppeBauen(
    "Meurer-Fallsammlung",
    "fallsammlung",
    passendeFallsammlung,
    (fall) => {
      const text = `Fall ${fall.id}: ${fall.title} ↗`;
      return linkButton(text, () => vorhandenenSpezialLinkKlicken(element, ".k1-fs-overlap--inline", text));
    },
  );
  if (fallsammlungGruppe) raster.appendChild(fallsammlungGruppe);

  block.appendChild(raster);
  return block;
}

function blockEinsetzen(element) {
  if (!element?.matches(".lesson")) return;
  if (element.querySelector(":scope > [data-k1-uebung-overlap]")) return;
  const info = infoFuerDetailseite(element);
  if (!info) return;
  const block = blockBauen(element, info);
  if (!block) return;

  element.classList.add("k1-uebung-vereint");

  /* Erst nach allen Tz.-Abschnitten und Quellen, aber vor der vorhandenen
     Vorher/Nachher-Navigation. Damit bleibt der Lernfluss ungestört und die
     Übungsfälle stehen tatsächlich am Ende der Modulseite. */
  const blaettern = element.querySelector(":scope > .blaettern");
  if (blaettern) element.insertBefore(block, blaettern);
  else element.appendChild(block);
}

export default function K1UebungsverweiseEnhancer() {
  useEffect(() => {
    let frame = null;
    const scan = () => {
      frame = null;
      const page = document.querySelector(".kst-campus main.page");
      const detail = page?.querySelector(":scope > .lesson");
      if (detail) blockEinsetzen(detail);
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

  return null;
}
