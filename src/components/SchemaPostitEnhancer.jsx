import { useEffect } from "react";
import "./SchemaPostitEnhancer.css";

const GESETZE = "(?:HGB|EStG|AO|EStDV|KStG|UStG|GewStG|GmbHG|AktG|BGB|UmwStG|KStR|EStR|BewG|AStG|InvStG|ErbStG)";
const NORM_MUSTER = new RegExp(`§{1,2}\\s*[^;\\n!?]*?\\b${GESETZE}\\b`, "g");

const POSTIT_TITEL = {
  ansatz: "Paragraphen zum Ansatz",
  bewertung: "Paragraphen zur Bewertung",
  ausserbilanz: "Paragraphen außerhalb der Bilanz",
};

function tonAusTitel(titel) {
  if (/^ansatz\s*:/i.test(titel)) return "ansatz";
  if (/^bewertung\s*:/i.test(titel)) return "bewertung";
  if (/außerbilanz/i.test(titel)) return "ausserbilanz";
  return null;
}

function paragraphenAusText(text) {
  NORM_MUSTER.lastIndex = 0;
  const treffer = text.match(NORM_MUSTER) || [];
  return [...new Set(treffer.map((norm) => norm.replace(/\s+/g, " ").trim()))];
}

function postitBereichErstellen(ton, paragraphen) {
  const aside = document.createElement("aside");
  aside.className = `schema-postits schema-postits--${ton}`;
  aside.dataset.schemaPostits = "";
  aside.setAttribute("aria-label", POSTIT_TITEL[ton]);

  const titel = document.createElement("span");
  titel.className = "schema-postits__titel";
  titel.textContent = POSTIT_TITEL[ton];
  aside.append(titel);

  const liste = document.createElement("div");
  liste.className = "schema-postits__liste";

  paragraphen.forEach((norm) => {
    const postit = document.createElement("span");
    postit.className = "schema-postit";
    postit.textContent = norm;
    liste.append(postit);
  });

  aside.append(liste);
  return aside;
}

function schemaBloeckeAktualisieren(root) {
  root.querySelectorAll("[data-schema-postits]").forEach((element) => element.remove());

  root.querySelectorAll("article.panel > div > section").forEach((block) => {
    const ueberschrift = block.querySelector(":scope > h3");
    const ton = tonAusTitel(ueberschrift?.textContent?.trim() || "");
    if (!ton || !ueberschrift) return;

    const paragraphen = paragraphenAusText(block.textContent || "");
    if (paragraphen.length === 0) return;

    ueberschrift.insertAdjacentElement("afterend", postitBereichErstellen(ton, paragraphen));
  });
}

export default function SchemaPostitEnhancer({ root }) {
  useEffect(() => {
    if (!root) return undefined;

    let frame = 0;
    let observer;

    const aktualisieren = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        observer.disconnect();
        schemaBloeckeAktualisieren(root);
        observer.observe(root, { childList: true, subtree: true, characterData: true });
      });
    };

    observer = new MutationObserver(aktualisieren);
    schemaBloeckeAktualisieren(root);
    observer.observe(root, { childList: true, subtree: true, characterData: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      root.querySelectorAll("[data-schema-postits]").forEach((element) => element.remove());
    };
  }, [root]);

  return null;
}
