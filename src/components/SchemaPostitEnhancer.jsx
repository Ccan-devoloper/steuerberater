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
  "SolzG",
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

const NORM_UEBERSCHRIFTEN = {
  "HGB/246": "Vollständigkeit. Verrechnungsverbot",
  "HGB/247": "Inhalt der Bilanz",
  "HGB/248": "Bilanzierungsverbote und -wahlrechte",
  "HGB/249": "Rückstellungen",
  "HGB/250": "Rechnungsabgrenzungsposten",
  "HGB/251": "Haftungsverhältnisse",
  "HGB/252": "Allgemeine Bewertungsgrundsätze",
  "HGB/253": "Zugangs- und Folgebewertung",
  "HGB/255": "Bewertungsmaßstäbe",
  "HGB/256": "Bewertungsvereinfachungsverfahren",
  "HGB/256a": "Währungsumrechnung",
  "HGB/266": "Gliederung der Bilanz",
  "HGB/268": "Vorschriften zu einzelnen Posten der Bilanz. Bilanzvermerke",
  "HGB/271": "Beteiligungen. Verbundene Unternehmen",
  "HGB/274": "Latente Steuern",
  "HGB/275": "Gliederung",
  "HGB/277": "Vorschriften zu einzelnen Posten der Gewinn- und Verlustrechnung",
  "EStG/1": "Steuerpflicht",
  "EStG/2": "Umfang der Besteuerung, Begriffsbestimmungen",
  "EStG/2a": "Negative Einkünfte mit Bezug zu Drittstaaten",
  "EStG/3": "Steuerfreie Einnahmen",
  "EStG/3c": "Anteilige Abzüge",
  "EStG/4": "Gewinnbegriff im Allgemeinen",
  "EStG/5": "Gewinn bei Kaufleuten und bei bestimmten anderen Gewerbetreibenden",
  "EStG/5b": "Elektronische Übermittlung von Bilanzen sowie Gewinn- und Verlustrechnungen",
  "EStG/6": "Bewertung",
  "EStG/6a": "Pensionsrückstellung",
  "EStG/6b": "Übertragung stiller Reserven bei der Veräußerung bestimmter Anlagegüter",
  "EStG/7": "Absetzung für Abnutzung oder Substanzverringerung",
  "EStG/7b": "Sonderabschreibung für Mietwohnungsneubau",
  "EStG/7g": "Investitionsabzugsbeträge und Sonderabschreibungen zur Förderung kleiner und mittlerer Betriebe",
  "EStG/9b": "Umsatzsteuerrechtlicher Vorsteuerabzug",
  "EStG/12": "Nicht abzugsfähige Ausgaben",
  "EStG/15": "Einkünfte aus Gewerbebetrieb",
  "EStG/20": "Einkünfte aus Kapitalvermögen",
  "EStG/25": "Veranlagungszeitraum, Steuererklärungspflicht",
  "EStG/32b": "Progressionsvorbehalt",
  "EStG/32d": "Gesonderter Steuertarif für Einkünfte aus Kapitalvermögen",
  "EStG/34c": "Steuerermäßigung bei ausländischen Einkünften",
  "EStG/36": "Entstehung und Tilgung der Einkommensteuer",
  "EStG/38": "Erhebung der Lohnsteuer",
  "EStG/43": "Kapitalerträge mit Steuerabzug",
  "EStG/43a": "Bemessung der Kapitalertragsteuer",
  "EStG/44": "Entrichtung der Kapitalertragsteuer",
  "EStG/49": "Beschränkt steuerpflichtige Einkünfte",
  "EStG/50": "Sondervorschriften für beschränkt Steuerpflichtige",
  "EStG/50a": "Steuerabzug bei beschränkt Steuerpflichtigen",
  "AStG/2": "Einkommensteuer",
  "AStG/6": "Besteuerung des Vermögenszuwachses",
  "AO/39": "Zurechnung",
  "AO/153": "Berichtigung von Erklärungen",
  "EStDV/60": "Unterlagen zur Steuererklärung",
  "KStG/8": "Ermittlung des Einkommens",
  "KStG/8b": "Beteiligung an anderen Körperschaften und Personenvereinigungen",
  "UStG/3": "Lieferung, sonstige Leistung",
  "UStG/10": "Bemessungsgrundlage für Lieferungen, sonstige Leistungen und innergemeinschaftliche Erwerbe",
  "UStG/15": "Vorsteuerabzug",
  "SolzG/4": "Zuschlagssatz",
  "EStR/R 4.2": "Betriebsvermögen",
  "EStR/R 4.4": "Bilanzberichtigung und Bilanzänderung",
  "EStR/R 5.7": "Rückstellungen",
  "EStR/R 6.5": "Zuschüsse für Anlagegüter",
  "EStR/R 6.6": "Übertragung stiller Reserven bei Ersatzbeschaffung",
  "EStR/R 6.7": "Teilwertabschreibung und Wertaufholungsgebot",
  "EStR/R 6.9": "Bewertung nach unterstellten Verbrauchs- und Veräußerungsfolgen",
  "EStR/R 6.11": "Bewertung von Rückstellungen",
};

const SCHWEINCHEN_REFERENZEN = new Set(["EStG/6b", "EStG/7b", "EStG/7g"]);

/* ansatz/bewertung/ausserbilanz/hinweis benennen den Prüfungsschritt (Bilanzen),
   gruen/gelb/rosa benennen unmittelbar die Farbe (IStR). */
const TOENE = new Set(["ansatz", "bewertung", "ausserbilanz", "hinweis", "gruen", "gelb", "rosa"]);

function tonAusTitel(titel) {
  if (/^ansatz\s*:/i.test(titel)) return "ansatz";
  if (/^bewertung\s*:/i.test(titel)) return "bewertung";
  if (/außerbilanz/i.test(titel)) return "ausserbilanz";
  if (/^(wichtig|beachte|vorüberlegung)\s*:/i.test(titel)) return "hinweis";
  return null;
}

function dejureUrl(gesetz, paragraph) {
  return `https://dejure.org/gesetze/${encodeURIComponent(gesetz)}/${encodeURIComponent(paragraph)}.html`;
}

function estrUrl(richtlinie) {
  const hauptnummer = richtlinie.match(/^\d+/)?.[0];
  return ESTR_ZIELE[hauptnummer] || `${ESTR_BASIS}/inhalt.html`;
}

function ueberschriftFuerReferenz(referenz) {
  const titel = NORM_UEBERSCHRIFTEN[referenz];
  if (referenz.startsWith("EStR/R ")) {
    const richtlinie = referenz.replace("EStR/", "");
    return titel ? `${richtlinie} EStR – ${titel}` : `${richtlinie} EStR`;
  }

  const [gesetz, paragraph] = referenz.split("/");
  if (!gesetz || !paragraph) return titel || referenz;
  return titel ? `§ ${paragraph} ${gesetz} – ${titel}` : `§ ${paragraph} ${gesetz}`;
}

function istSchweinchenPostit({ text, referenz }) {
  if (SCHWEINCHEN_REFERENZEN.has(referenz)) return true;
  if (referenz !== "EStG/5") return false;

  const normalisiert = text.replace(/\s+/g, " ").trim();
  return /Abs\.\s*1\s*S\.\s*1\s*Hs\.\s*2/i.test(normalisiert)
    || /Abs\.\s*1\s*S\.\s*2\s*und\s*3/i.test(normalisiert);
}

function postitErstellen({ text, bezeichnung = text, ton, quelle, href, zielname, referenz }) {
  const postit = document.createElement("a");
  const istHgb = quelle === "HGB";
  const istSchweinchen = istSchweinchenPostit({ text, referenz });
  const ueberschrift = ueberschriftFuerReferenz(referenz);
  const klassen = [
    "schema-norm-postit",
    `schema-norm-postit--${ton}`,
    istHgb ? "schema-norm-postit--hgb" : "schema-norm-postit--nicht-hgb",
  ];

  if (istSchweinchen) klassen.push("schema-norm-postit--schweinchen");

  postit.className = klassen.join(" ");
  postit.dataset.schemaNormPostit = "";
  postit.dataset.schemaQuelle = quelle;
  postit.dataset.schemaReferenz = referenz;
  postit.dataset.schemaUeberschrift = ueberschrift;
  if (istSchweinchen) postit.dataset.schemaSchweinchen = "";
  postit.href = href;
  postit.target = "_blank";
  postit.rel = "noopener noreferrer";
  postit.setAttribute("aria-label", `${bezeichnung.trim()}: ${ueberschrift}. ${zielname} in einem neuen Tab öffnen`);
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

function textknotenErsetzen(textknoten, ton, normtoene) {
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
    fragment.append(quelleErstellen(treffer[0], tonFuerNorm(treffer[0], normtoene, ton)));
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

/* Die Bilanzenschemata leiten den Ton aus der Blocküberschrift ab ("Ansatz:",
   "Bewertung:"). Schemata mit eigener Kopfzeile - etwa das IStR-Schema, dessen
   h3 in einer Flex-Zeile neben dem Seitenzähler steht - geben ihn stattdessen
   als data-schema-ton mit. */
function tonAusBlock(block) {
  const explizit = block.dataset.schemaTon;
  if (explizit) return TOENE.has(explizit) ? explizit : null;

  const ueberschrift = block.querySelector(":scope > h3");
  return tonAusTitel(ueberschrift?.textContent?.trim() || "");
}

/* Einzelne Textstellen dürfen den Blockton überschreiben: Das nächstgelegene
   Elternelement mit data-schema-ton gewinnt - so bekommt etwa die Klammer
   hinter "Bei Wegzug" eine eigene Farbe. */
function tonFuerKnoten(knoten, standard) {
  const traeger = knoten.parentElement?.closest("[data-schema-ton]");
  const ton = traeger?.dataset.schemaTon;
  return ton && TOENE.has(ton) ? ton : standard;
}

/* data-schema-ton-normen bildet einzelne Fundstellen auf eine Farbe ab, wenn
   sie sich nicht am Elternelement festmachen lassen - etwa § 1 Abs. 3 EStG,
   das an drei verschiedenen Stellen im Fließtext steht. */
function normtoeneLesen(block) {
  const roh = block.dataset.schemaTonNormen;
  if (!roh) return null;

  try {
    const karte = JSON.parse(roh);
    return karte && typeof karte === "object" ? karte : null;
  } catch {
    /* Eine fehlerhafte Angabe darf die Anreicherung nicht sprengen. */
    return null;
  }
}

function tonFuerNorm(zitat, karte, standard) {
  if (!karte) return standard;
  const ton = karte[zitat.replace(/\s+/g, " ").trim()];
  return ton && TOENE.has(ton) ? ton : standard;
}

function blockAktualisieren(block) {
  const ton = tonAusBlock(block);

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
  const normtoene = normtoeneLesen(block);
  textknoten.forEach((knoten) => textknotenErsetzen(knoten, tonFuerKnoten(knoten, ton), normtoene));
}

function schemaBloeckeAktualisieren(root) {
  root.querySelectorAll("article.panel > div > section").forEach(blockAktualisieren);
}

function tooltipPositionieren(tooltip, postit) {
  const abstand = 10;
  const rand = 12;
  const postitRechteck = postit.getBoundingClientRect();

  tooltip.style.left = "0px";
  tooltip.style.top = "0px";
  const tooltipRechteck = tooltip.getBoundingClientRect();

  let links = postitRechteck.left + (postitRechteck.width - tooltipRechteck.width) / 2;
  links = Math.max(rand, Math.min(links, window.innerWidth - tooltipRechteck.width - rand));

  let oben = postitRechteck.top - tooltipRechteck.height - abstand;
  let position = "oben";
  if (oben < rand) {
    oben = postitRechteck.bottom + abstand;
    position = "unten";
  }

  tooltip.style.left = `${Math.round(links)}px`;
  tooltip.style.top = `${Math.round(oben)}px`;
  tooltip.dataset.position = position;
}

/* `signal` ist die Kennung des gerade angezeigten Schemas. Ändert sie sich, hat
   React neuen Text gerendert und die Post-its werden neu gesetzt. */
export default function SchemaPostitEnhancer({ root, signal }) {
  useEffect(() => {
    if (!root) return undefined;

    schemaBloeckeAktualisieren(root);

    const tooltip = document.createElement("div");
    const tooltipId = `schema-norm-tooltip-${Math.random().toString(36).slice(2)}`;
    tooltip.id = tooltipId;
    tooltip.className = "schema-norm-tooltip";
    tooltip.setAttribute("role", "tooltip");
    tooltip.hidden = true;
    document.body.append(tooltip);

    let aktivesPostit = null;

    const tooltipAusblenden = () => {
      if (aktivesPostit) {
        aktivesPostit.removeAttribute("aria-describedby");
        delete aktivesPostit.dataset.schemaTooltipAktiv;
      }
      aktivesPostit = null;
      tooltip.hidden = true;
    };

    const tooltipAnzeigen = (postit) => {
      const ueberschrift = postit.dataset.schemaUeberschrift;
      if (!ueberschrift || postit === aktivesPostit) return;

      tooltipAusblenden();
      aktivesPostit = postit;
      postit.setAttribute("aria-describedby", tooltipId);
      postit.dataset.schemaTooltipAktiv = "";
      tooltip.textContent = ueberschrift;
      tooltip.hidden = false;
      tooltipPositionieren(tooltip, postit);
    };

    const beiPointerOver = (event) => {
      const postit = event.target.closest?.("[data-schema-norm-postit]");
      if (postit && root.contains(postit)) tooltipAnzeigen(postit);
    };

    const beiPointerOut = (event) => {
      const postit = event.target.closest?.("[data-schema-norm-postit]");
      if (!postit || postit !== aktivesPostit) return;
      if (event.relatedTarget && postit.contains(event.relatedTarget)) return;
      tooltipAusblenden();
    };

    const beiFocusIn = (event) => {
      const postit = event.target.closest?.("[data-schema-norm-postit]");
      if (postit && root.contains(postit)) tooltipAnzeigen(postit);
    };

    const beiFocusOut = (event) => {
      const postit = event.target.closest?.("[data-schema-norm-postit]");
      if (postit === aktivesPostit) tooltipAusblenden();
    };

    root.addEventListener("pointerover", beiPointerOver);
    root.addEventListener("pointerout", beiPointerOut);
    root.addEventListener("focusin", beiFocusIn);
    root.addEventListener("focusout", beiFocusOut);
    window.addEventListener("scroll", tooltipAusblenden, true);
    window.addEventListener("resize", tooltipAusblenden);

    return () => {
      root.removeEventListener("pointerover", beiPointerOver);
      root.removeEventListener("pointerout", beiPointerOut);
      root.removeEventListener("focusin", beiFocusIn);
      root.removeEventListener("focusout", beiFocusOut);
      window.removeEventListener("scroll", tooltipAusblenden, true);
      window.removeEventListener("resize", tooltipAusblenden);
      tooltipAusblenden();
      tooltip.remove();

      root.querySelectorAll("[data-schema-norm-postit]").forEach((postit) => {
        postit.replaceWith(document.createTextNode(postit.textContent || ""));
      });
      root.querySelectorAll("[data-schema-postits]").forEach((element) => element.remove());
      root.normalize();
    };
  }, [root, signal]);

  return null;
}
