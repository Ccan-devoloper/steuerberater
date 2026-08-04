#!/usr/bin/env node
import fs from "node:fs";

const komponentenPfad = "src/components/Pruefungsschemata.jsx";
const cssPfad = "src/index.css";
const komponentenMarker = "const POSTIT_GESETZE";
const cssMarker = "/* Prüfungsschemata · Paragraphen-Post-its */";

let jsx = fs.readFileSync(komponentenPfad, "utf8");

if (!jsx.includes(komponentenMarker)) {
  const anker = "function SchemaBlock({ block }) {";
  if (!jsx.includes(anker)) throw new Error("SchemaBlock-Anker nicht gefunden");

  const helper = `const POSTIT_GESETZE = "(?:HGB|EStG|AO|EStDV|KStG|UStG|GewStG|GmbHG|AktG|BGB|UmwStG|KStR|EStR|BewG|AStG|InvStG|ErbStG)";

function schemaText(wert) {
  if (typeof wert === "string") return wert;
  if (Array.isArray(wert)) return wert.map(schemaText).join("\\n");
  if (wert && typeof wert === "object") return Object.values(wert).map(schemaText).join("\\n");
  return "";
}

function paragraphenAusBlock(block) {
  const text = schemaText(block.inhalt);
  const muster = new RegExp(\`§{1,2}\\\\s*[^;\\\\n.!?]*?\\\\b\${POSTIT_GESETZE}\\\\b\`, "g");
  const treffer = text.match(muster) || [];
  return [...new Set(treffer.map((norm) => norm.replace(/\\s+/g, " ").trim()))];
}

function postitTon(block) {
  if (block.ton === "ansatz") return "ansatz";
  if (block.ton === "bewertung") return "bewertung";
  if (/außerbilanz/i.test(block.titel)) return "ausserbilanz";
  return null;
}

const postitTitel = {
  ansatz: "Paragraphen zum Ansatz",
  bewertung: "Paragraphen zur Bewertung",
  ausserbilanz: "Paragraphen außerhalb der Bilanz",
};

function SchemaNormPostits({ ton, normen }) {
  if (!ton || normen.length === 0) return null;
  return (
    <aside className={\`schema-postits schema-postits--\${ton}\`} aria-label={postitTitel[ton]}>
      <span className="schema-postits__titel">{postitTitel[ton]}</span>
      <div className="schema-postits__liste">
        {normen.map((norm) => <span className="schema-postit" key={norm}>{norm}</span>)}
      </div>
    </aside>
  );
}

`;

  jsx = jsx.replace(anker, helper + anker);

  const funktionsAlt = `function SchemaBlock({ block }) {
  return (`;
  const funktionsNeu = `function SchemaBlock({ block }) {
  const ton = postitTon(block);
  const paragraphen = ton ? paragraphenAusBlock(block) : [];
  return (`;
  if (!jsx.includes(funktionsAlt)) throw new Error("SchemaBlock-Funktionskopf nicht gefunden");
  jsx = jsx.replace(funktionsAlt, funktionsNeu);

  const titelAlt = `      <h3 style={{ margin: "0 0 12px", color: farben[block.ton] || farben.neutral }}>{block.titel}</h3>
      {block.inhalt.map((element, i) => <Inhalt key={i} element={element} />)}`;
  const titelNeu = `      <h3 style={{ margin: "0 0 12px", color: farben[block.ton] || farben.neutral }}>{block.titel}</h3>
      <SchemaNormPostits ton={ton} normen={paragraphen} />
      {block.inhalt.map((element, i) => <Inhalt key={i} element={element} />)}`;
  if (!jsx.includes(titelAlt)) throw new Error("SchemaBlock-Inhalt nicht gefunden");
  jsx = jsx.replace(titelAlt, titelNeu);

  fs.writeFileSync(komponentenPfad, jsx);
}

let css = fs.readFileSync(cssPfad, "utf8");
if (!css.includes(cssMarker)) {
  css += `

${cssMarker}
.schema-postits {
  --postit-flaeche: var(--tinte-feld);
  --postit-rand: var(--tinte);
  --postit-falte: color-mix(in srgb, var(--postit-rand) 24%, var(--postit-flaeche));
  margin: 0 0 16px;
  padding: 12px;
  border: 1px dashed color-mix(in srgb, var(--postit-rand) 45%, var(--linie));
  background: color-mix(in srgb, var(--postit-flaeche) 42%, var(--papier));
}
.schema-postits--ansatz { --postit-flaeche: var(--rot-feld); --postit-rand: var(--rot); }
.schema-postits--bewertung { --postit-flaeche: var(--orange-feld); --postit-rand: var(--orange); }
.schema-postits--ausserbilanz { --postit-flaeche: var(--gruen-feld); --postit-rand: var(--gruen); }
.schema-postits__titel {
  display: block;
  margin-bottom: 9px;
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--postit-rand);
}
.schema-postits__liste { display: flex; flex-wrap: wrap; gap: 10px; align-items: flex-start; }
.schema-postit {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 58px;
  max-width: min(100%, 320px);
  padding: 11px 18px 15px 13px;
  border: 1px solid color-mix(in srgb, var(--postit-rand) 54%, var(--linie));
  background: var(--postit-flaeche);
  color: var(--ink);
  box-shadow: 0 5px 12px color-mix(in srgb, var(--ink) 12%, transparent);
  font-family: var(--mono);
  font-size: 11.5px;
  line-height: 1.45;
  overflow-wrap: anywhere;
  transform: rotate(-.25deg);
}
.schema-postit:nth-child(even) { transform: rotate(.25deg); }
.schema-postit::after {
  content: "";
  position: absolute;
  right: -1px;
  bottom: -1px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 13px 13px;
  border-color: transparent transparent var(--postit-falte) transparent;
}
@media (max-width: 700px) {
  .schema-postits { padding: 10px; margin-bottom: 14px; }
  .schema-postits__liste { display: grid; grid-template-columns: 1fr; gap: 8px; }
  .schema-postit { width: 100%; max-width: none; min-height: 0; transform: none; }
  .schema-postit:nth-child(even) { transform: none; }
}
`;
  fs.writeFileSync(cssPfad, css);
}

console.log("Paragraphen-Post-its in den Prüfungsschemata eingebaut.");
