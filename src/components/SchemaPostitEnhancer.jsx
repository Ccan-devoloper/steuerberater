import { useEffect } from "react";
import "./SchemaPostitEnhancer.css";

const GESETZE = "(?:HGB|EStG|AO|EStDV|KStG|UStG|GewStG|GmbHG|AktG|BGB|UmwStG|KStR|EStR|BewG|AStG|InvStG|ErbStG)";
const NORM_QUELLE = `§{1,2}\\s*[^;\\n!?]*?\\b${GESETZE}\\b`;

function tonAusTitel(titel) {
  if (/^ansatz\s*:/i.test(titel)) return "ansatz";
  if (/^bewertung\s*:/i.test(titel)) return "bewertung";
  if (/außerbilanz/i.test(titel)) return "ausserbilanz";
  return null;
}

function inlinePostitErstellen(norm, ton) {
  const postit = document.createElement("span");
  postit.className = `schema-norm-postit schema-norm-postit--${ton}`;
  postit.dataset.schemaNormPostit = "";
  postit.textContent = norm;
  return postit;
}

function textknotenErsetzen(textknoten, ton) {
  const text = textknoten.nodeValue || "";
  const muster = new RegExp(NORM_QUELLE, "g");
  const fragment = document.createDocumentFragment();
  let letzterIndex = 0;
  let treffer;
  let gefunden = false;

  while ((treffer = muster.exec(text)) !== null) {
    gefunden = true;
    if (treffer.index > letzterIndex) {
      fragment.append(document.createTextNode(text.slice(letzterIndex, treffer.index)));
    }
    fragment.append(inlinePostitErstellen(treffer[0], ton));
    letzterIndex = muster.lastIndex;
  }

  if (!gefunden) return;
  if (letzterIndex < text.length) {
    fragment.append(document.createTextNode(text.slice(letzterIndex)));
  }
  textknoten.replaceWith(fragment);
}

function blockZuruecksetzen(block) {
  block.querySelectorAll("[data-schema-postits]").forEach((element) => element.remove());
  block.querySelectorAll("[data-schema-norm-postit]").forEach((postit) => {
    postit.replaceWith(document.createTextNode(postit.textContent || ""));
  });
  block.normalize();
}

function blockAktualisieren(block) {
  const ueberschrift = block.querySelector(":scope > h3");
  const ton = tonAusTitel(ueberschrift?.textContent?.trim() || "");

  blockZuruecksetzen(block);
  if (!ton) return;

  const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT, {
    acceptNode(knoten) {
      const text = knoten.nodeValue || "";
      const parent = knoten.parentElement;
      if (!parent || !text.includes("§")) return NodeFilter.FILTER_REJECT;
      if (parent.closest("h3, [data-schema-norm-postit], [data-schema-postits]")) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textknoten = [];
  while (walker.nextNode()) textknoten.push(walker.currentNode);
  textknoten.forEach((knoten) => textknotenErsetzen(knoten, ton));
}

function schemaBloeckeAktualisieren(root) {
  root.querySelectorAll("article.panel > div > section").forEach(blockAktualisieren);
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
      root.querySelectorAll("[data-schema-norm-postit]").forEach((postit) => {
        postit.replaceWith(document.createTextNode(postit.textContent || ""));
      });
      root.querySelectorAll("[data-schema-postits]").forEach((element) => element.remove());
      root.normalize();
    };
  }, [root]);

  return null;
}
