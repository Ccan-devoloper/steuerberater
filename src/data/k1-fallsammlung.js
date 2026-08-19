import tag1 from "./k1-fallsammlung-tag1.js";
import tag2a from "./k1-fallsammlung-tag2-a.js";
import tag2b from "./k1-fallsammlung-tag2-b.js";
import tag3 from "./k1-fallsammlung-tag3.js";
import tag4a from "./k1-fallsammlung-tag4-a.js";
import tag4b from "./k1-fallsammlung-tag4-b.js";
import tag4c from "./k1-fallsammlung-tag4-c.js";
import tag5a from "./k1-fallsammlung-tag5-a.js";
import tag5b from "./k1-fallsammlung-tag5-b.js";
import tag6a from "./k1-fallsammlung-tag6-a.js";
import tag6b from "./k1-fallsammlung-tag6-b.js";
import tag6c from "./k1-fallsammlung-tag6-c.js";
import tag7a from "./k1-fallsammlung-tag7-a.js";
import tag7b from "./k1-fallsammlung-tag7-b.js";
import tag7c from "./k1-fallsammlung-tag7-c.js";
import tag7d from "./k1-fallsammlung-tag7-d.js";

export const k1Fallsammlung = [
  ...tag1, ...tag2a, ...tag2b, ...tag3, ...tag4a, ...tag4b, ...tag4c,
  ...tag5a, ...tag5b, ...tag6a, ...tag6b, ...tag6c, ...tag7a, ...tag7b, ...tag7c, ...tag7d,
];

export const k1FallsammlungKategorien = [
  { id: "alle", label: "Alle Kategorien" },
  { id: "kat-1", label: "Unternehmen & Leistungsort" },
  { id: "kat-2", label: "Grundstücke, Werkleistungen & Tausch" },
  { id: "kat-3", label: "Drittland, Einfuhr & Kreditsicherung" },
  { id: "kat-4", label: "EU-Geschäfte & grenzüberschreitende Warenbewegungen" },
  { id: "kat-5", label: "Entgeltkorrekturen, Schäden & Kommission" },
  { id: "kat-6", label: "Unentgeltliche Wertabgaben & private Nutzung" },
  { id: "kat-7", label: "Umstrukturierung, Reise & Sonderbesteuerung" },
];

export const k1FallsammlungNachInhalt = (inhaltId) =>
  k1Fallsammlung.filter((fall) => fall.overlapIds.includes(Number(inhaltId)));

export default k1Fallsammlung;
