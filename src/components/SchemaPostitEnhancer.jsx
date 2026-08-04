import { useEffect } from "react";
import "./SchemaPostitEnhancer.css";

const GESETZ_ABKUERZUNGEN = [
  "HGB",
  "EStG",
  "AO",
  "EStDV",
  "KStG",
  "UStG",
  "GewStG",
  "GmbHG",
  "AktG",
  "BGB",
  "UmwStG",
  "KStR",
  "BewG",
  "AStG",
  "InvStG",
  "ErbStG",
];

const GESETZE = `(?:${GESETZ_ABKUERZUNGEN.join("|")})`;
const GESETZ_NORM_QUELLE = `§{1,2}\\s*[^;\\n!?]*?\\b${GESETZE}\\b`;
const ESTR_EXPLIZIT_QUELLE = `\\bR\\s*\\d+[a-z]?(?:\\.\\d+)?[^;()]*?\\s*EStR\\b`;
const ESTR_IMPLIZIT_QUELLE = `\\bR\\s*\\d+[a-z]?(?:\\.\\d+)?(?=\\s*(?:[,;)]|$))`;
const QUELLEN_QUELLE = `${ESTR_EXPLIZIT_QUELLE}|${ESTR_IMPLIZIT_QUELLE}|${GESETZ_NORM_QUELLE}`;
const GESETZ_AM_ENDE = new RegExp(`\\b(${GESETZE})\\b\\s*$`);
const EXPLIZITER_PARAGRAPH = /§{1,2}\s*(\d+[a-z]*)/gi;
const IMPLIZITER_PARAGRAPH = /,\s*(\d+[a-z]*)(?=\s+(?:Abs\.|S\.|Nr\.))/gi;
const ESTR_NUMMER = /\bR\s*(\d+[a-z]?(?:\.\d+)?)/i;
const ESTR_BASIS = "https://esth.bundesfinanzministerium.de/esth/2025/A-Einkommensteuergesetz/II-Einkommen-2-24b/3-Gewinn-4-7i";
const ESTR_ZIELE = {
  4: `${ESTR_BASIS}/Paragraf-4/paragraf-4.html`,
  5: `${ESTR_BASIS}/Paragraf-5/paragraph-5.html`,
  6: `${ESTR_BASIS}/Paragraf-6/inhalt.html`,
};

function tonAusTitel(titel) {
  if (/^ansatz\s*:/i.test(titel)) return "ansatz";
  if (/^bewertung\s*:/i.test(titel)) return "bewertung";
  if (/außerbilanz/i.test(titel)) return "ausserbilanz";
  return null;
}

function dejureUrl(gesetz, paragraph) {
  return `https://dejure.org/gesetze/${encodeURIComponent(gesetz)}/${encodeURIComponent(paragraph)}.html`;
}

function estrUrl(richtlinie) {
  const hauptnummer = richtlinie.match(/^\d+/)?.[0];
  return ESTR_ZIELE[hauptnummer] || `${ESTR_BASIS}/inhalt.html`;
}

function postitErstellen({ text, bezeichnung = text, ton, quelle, href, zielname, referenz }) {
  const postit = document.createElement("a");
  const istHgb = quelle === "HGB";
  const klassen = [
    "schema-norm-postit",
    `schema-norm-postit--${ton}`,
    istHgb ? "schema-norm-postit--hgb" : "schema-norm-postit--nicht-hgb",
  ];

  postit.className = klassen.join(" ");
  postit.dataset.schemaNormPostit = "";
  postit.dataset.schemaQuelle = quelle;
  postit.dataset.schemaReferenz = referenz;
  postit.href = href;
  postit.target = "_blank";
  postit.rel = "noopener noreferrer";
  postit.title = `${bezeichnung.trim()} ${zielname} öffnen`;
  postit.setAttribute("aria-label", `${bezeichnung.trim()} ${zielname} in einem neuen Tab öffnen`);
  postit.textContent = text;
  return postit;
}

function gesetzPostitErstellen(text, ton, gesetz, paragraph) {
  const normbezeichnung = `${text.trim()}${new RegExp(`\\b${gesetz}\\b`).test(text) ? "" : ` ${gesetz}`}`;
  return postitErstellen({
    text,
    bezeichnung: normbezeichnung,
    ton,
    quelle: gesetz,
    href: dejureUrl(gesetz, paragraph),
    zielname: "auf dejure.org",
    referenz: `${gesetz}/${paragraph}`,
  });
}

function estrPostitErstellen(text, ton) {
  const richtlinie = text.match(ESTR_NUMMER)?.[1];
  if (!richtlinie) return document.createTextNode(text);

  const bezeichnung = /\bEStR\b/.test(text) ? text : `${text} EStR`;
  return postitErstellen({
    text,
    bezeichnung,
    ton,
    quelle: "EStR",
    href: estrUrl(richtlinie),
    zielname: "im amtlichen EStH 2025",
    referenz: `EStR/R ${richtlinie}`,
  });
}

function paragraphStarts(zitat) {
  const starts = [];
  let treffer;

  EXPLIZITER_PARAGRAPH.lastIndex = 0;
  while ((treffer = EXPLIZITER_PARAGRAPH.exec(zitat)) !== null) {
    starts.push({ index: treffer.index, paragraph: treffer[1] });
  }

  IMPLIZITER_PARAGRAPH.lastIndex = 0;
  while ((treffer = IMPLIZITER_PARAGRAPH.exec(zitat)) !== null) {
    const index = treffer.index + treffer[0].lastIndexOf(treffer[1]);
    if (!starts.some((start) => start.index === index)) {
      starts.push({ index, paragraph: treffer[1] });
    }
  }

  return starts.sort((a, b) => a.index - b.index);
}

function gesetzNormgruppeErstellen(normgruppe, ton) {
  const gesetzTreffer = normgruppe.match(GESETZ_AM_ENDE);
  const ersterParagraph = normgruppe.match(/§{1,2}\s*(\d+[a-z]*)/i)?.[1];

  if (!gesetzTreffer || !ersterParagraph) {
    return document.createTextNode(normgruppe);
  }

  const gesetz = gesetzTreffer[1];
  const gesetzIndex = gesetzTreffer.index;
  const zitat = normgruppe.slice(0, gesetzIndex);
  const starts = paragraphStarts(zitat);

  if (starts.length <= 1) {
    return gesetzPostitErstellen(normgruppe, ton, gesetz, ersterParagraph);
  }

  const fragment = document.createDocumentFragment();

  starts.forEach((start, index) => {
    const naechsterStart = starts[index + 1]?.index ?? zitat.length;
    let segment = zitat.slice(start.index, naechsterStart);
    let trenner = "";

    if (index < starts.length - 1) {
      const trennerTreffer = segment.match(/([,\/]\s*)$/);
      if (trennerTreffer) {
        trenner = trennerTreffer[1];
        segment = segment.slice(0, -trenner.length);
      }
    } else {
      segment += normgruppe.slice(gesetzIndex);
    }

    fragment.append(gesetzPostitErstellen(segment, ton, gesetz, start.paragraph));
    if (trenner) fragment.append(document.createTextNode(trenner));
  });

  return fragment;
}

function quelleErstellen(quelle, ton) {
  if (ESTR_NUMMER.test(quelle)) {
    return estrPostitErstellen(quelle, ton);
  }
  return gesetzNormgruppeErstellen(quelle, ton);
}

function textknotenErsetzen(textknoten, ton) {
  const text = textknoten.nodeValue || "";
  const muster = new RegExp(QUELLEN_QUELLE, "g");
  const fragment = document.createDocumentFragment();
  let letzterIndex = 0;
  let treffer;
  let gefunden = false;

  while ((treffer = muster.exec(text)) !== null) {
    gefunden = true;
    if (treffer.index > letzterIndex) {
      fragment.append(document.createTextNode(text.slice(letzterIndex, treffer.index)));
    }
    fragment.append(quelleErstellen(treffer[0], ton));
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
      if (!parent || (!text.includes("§") && !/\bR\s*\d/.test(text))) {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.closest("a, h3, [data-schema-norm-postit], [data-schema-postits]")) {
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
