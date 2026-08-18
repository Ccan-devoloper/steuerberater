import React, { useMemo } from "react";
import schemaText from "../data/USt-Pruefschema.md?raw";

const headingIds = new Map([
  ["Teil A — Die Architektur", "schema-architektur"],
  ["Teil B — Vorfrage: Unternehmereigenschaft, § 2", "schema-unternehmer"],
  ["Teil C — 1. Ausgangsumsätze", "schema-ausgang"],
  ["I. Steuerbarkeit — § 1", "schema-steuerbarkeit"],
  ["I.1 Art der Leistung — die Weichenstellung", "schema-leistungsart"],
  ["I.2 Ort der Lieferung (Strang A)", "schema-ort-lieferung"],
  ["I.3 Ort der sonstigen Leistung (Strang B)", "schema-ort-sonstige"],
  ["I.4 Die übrigen Merkmale des § 1 Abs. 1 Nr. 1", "schema-weitere-merkmale"],
  ["I.5 Weitere steuerbare Tatbestände", "schema-weitere-tatbestaende"],
  ["II. Steuerbefreiung — §§ 4 bis 9", "schema-befreiung"],
  ["II.1 Befreiungstatbestand, § 4", "schema-befreiungstatbestand"],
  ["II.2 Verzicht, § 9", "schema-verzicht"],
  ["III. Steuersatz — § 12", "schema-steuersatz"],
  ["IV. Bemessungsgrundlage — § 10", "schema-bmg"],
  ["V. Steuerentstehung — § 13 (und Steuerschuldner § 13a/§ 13b)", "schema-steuerentstehung"],
  ["V.1 Entstehung, § 13", "schema-entstehung"],
  ["V.2 Steuerschuldner, § 13a / § 13b", "schema-schuldner"],
  ["V.3 Rechnung, §§ 14, 14a", "schema-rechnung"],
  ["Teil D — 2. Eingangsumsätze", "schema-eingang"],
  ["Schritte I.–V.: identisch", "schema-eingang-identisch"],
  ["VI. Vorsteuerabzug — § 15", "schema-vorsteuer"],
  ["VI.1 Voraussetzungen, § 15 Abs. 1 S. 1 Nr. 1", "schema-vorsteuer-voraussetzungen"],
  ["VI.2 Ausschlüsse", "schema-vorsteuer-ausschluesse"],
  ["Teil E — Der dritte Strang: innergemeinschaftlicher Warenverkehr", "schema-ig"],
  ["E.1 Ausgangsseite: innergemeinschaftliche Lieferung", "schema-ig-lieferung"],
  ["E.2 Eingangsseite: innergemeinschaftlicher Erwerb", "schema-ig-erwerb"],
  ["1. Steuerbarkeit — § 1 Abs. 1 Nr. 5 i.V.m. § 1a", "schema-ig-erwerb-steuerbarkeit"],
  ["2. Ort — § 3d", "schema-ig-erwerb-ort"],
  ["3. Steuerbefreiung — § 4b", "schema-ig-erwerb-befreiung"],
  ["4. Bemessungsgrundlage — § 10 Abs. 1", "schema-ig-erwerb-bmg"],
  ["5. Steuersatz — § 12", "schema-ig-erwerb-steuersatz"],
  ["6. Entstehung — § 13 Abs. 1 Nr. 6", "schema-ig-erwerb-entstehung"],
  ["7. Steuerschuldner — § 13a Abs. 1 Nr. 2", "schema-ig-erwerb-schuldner"],
  ["8. Vorsteuerabzug — § 15 Abs. 1 S. 1 Nr. 3", "schema-ig-erwerb-vorsteuer"],
  ["E.3 Abgrenzung: Wann liegt kein ig. Erwerb vor?", "schema-ig-abgrenzung"],
  ["E.4 Spiegelbild-Übersicht", "schema-ig-spiegelbild"],
  ["Teil F — Nachgelagerte Prüfungen", "schema-nachgelagert"],
  ["Berichtigungen", "schema-berichtigung"],
  ["Kleinunternehmer — § 19", "schema-kleinunternehmer"],
  ["Sonderregelungen — nur bei entsprechendem Sachverhalt", "schema-sonderregeln"],
  ["Verfahren — §§ 16, 18", "schema-verfahren"],
  ["Merkzettel", "schema-merkzettel"],
]);

const direkt = [
  ["Architektur", "schema-architektur"],
  ["§ 2 Unternehmer", "schema-unternehmer"],
  ["I. Steuerbarkeit", "schema-steuerbarkeit"],
  ["Leistungsart", "schema-leistungsart"],
  ["Ort Lieferung", "schema-ort-lieferung"],
  ["Ort sonstige Leistung", "schema-ort-sonstige"],
  ["II. Befreiung", "schema-befreiung"],
  ["III. Steuersatz", "schema-steuersatz"],
  ["IV. BMG", "schema-bmg"],
  ["V. Entstehung", "schema-steuerentstehung"],
  ["Rechnung / Schuldner", "schema-rechnung"],
  ["VI. Vorsteuer", "schema-vorsteuer"],
  ["ig. Warenverkehr", "schema-ig"],
  ["Nachgelagert", "schema-nachgelagert"],
  ["Merkzettel", "schema-merkzettel"],
];

function normalisierenUeberschrift(text) {
  return text.replace(/\*/g, "").trim();
}

function fallbackId(text) {
  return `schema-${normalisierenUeberschrift(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/§/g, "paragraf")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

function headingId(text) {
  const clean = normalisierenUeberschrift(text);
  return headingIds.get(clean) || fallbackId(clean);
}

function Inline({ text }) {
  if (!text) return null;
  const teile = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let start = 0;
  let treffer;
  let key = 0;
  while ((treffer = regex.exec(text)) !== null) {
    if (treffer.index > start) teile.push(text.slice(start, treffer.index));
    const token = treffer[0];
    if (token.startsWith("**")) teile.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    else if (token.startsWith("*")) teile.push(<em key={key++}>{token.slice(1, -1)}</em>);
    else teile.push(<code key={key++}>{token.slice(1, -1)}</code>);
    start = regex.lastIndex;
  }
  if (start < text.length) teile.push(text.slice(start));
  return <>{teile}</>;
}

function parseTable(lines, start) {
  const rows = [];
  let i = start;
  while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) {
    rows.push(lines[i].trim().slice(1, -1).split("|").map((z) => z.trim()));
    i += 1;
  }
  const header = rows[0] || [];
  const body = rows.slice(2);
  return { block: { type: "table", header, body }, next: i };
}

function parseList(lines, start, ordered) {
  const items = [];
  const regex = ordered ? /^(\s*)(\d+)\.\s+(.*)$/ : /^(\s*)-\s+(.*)$/;
  let i = start;
  while (i < lines.length) {
    const m = lines[i].match(regex);
    if (!m) break;
    items.push({ indent: m[1].length, text: ordered ? m[3] : m[2] });
    i += 1;
  }
  return { block: { type: ordered ? "ol" : "ul", items }, next: i };
}

function parseMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i += 1; continue; }
    if (line.trim() === "---") { blocks.push({ type: "hr" }); i += 1; continue; }
    if (line.startsWith("```")) {
      const code = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) { code.push(lines[i]); i += 1; }
      i += 1;
      blocks.push({ type: "code", text: code.join("\n") });
      continue;
    }
    const h = line.match(/^(#{1,3})\s+(.*)$/);
    if (h) {
      blocks.push({ type: "heading", level: h[1].length, text: h[2], id: headingId(h[2]) });
      i += 1;
      continue;
    }
    if (/^\s*\|.*\|\s*$/.test(line) && /^\s*\|[\s|:-]+\|\s*$/.test(lines[i + 1] || "")) {
      const parsed = parseTable(lines, i); blocks.push(parsed.block); i = parsed.next; continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const parsed = parseList(lines, i, true); blocks.push(parsed.block); i = parsed.next; continue;
    }
    if (/^\s*-\s+/.test(line)) {
      const parsed = parseList(lines, i, false); blocks.push(parsed.block); i = parsed.next; continue;
    }
    if (/^>\s?/.test(line)) {
      const quote = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { quote.push(lines[i].replace(/^>\s?/, "")); i += 1; }
      blocks.push({ type: "quote", text: quote.join(" ") });
      continue;
    }
    const paragraph = [line.trim()];
    i += 1;
    while (
      i < lines.length && lines[i].trim() && lines[i].trim() !== "---" &&
      !/^(#{1,3})\s+/.test(lines[i]) && !lines[i].startsWith("```") &&
      !/^\s*\|.*\|\s*$/.test(lines[i]) && !/^\s*\d+\.\s+/.test(lines[i]) &&
      !/^\s*-\s+/.test(lines[i]) && !/^>\s?/.test(lines[i])
    ) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    blocks.push({ type: "p", text: paragraph.join(" ") });
  }
  return blocks;
}

function Block({ block }) {
  if (block.type === "hr") return <hr />;
  if (block.type === "code") return <pre className="ust-schema__ascii"><code>{block.text}</code></pre>;
  if (block.type === "heading") {
    const Tag = block.level === 1 ? "h2" : block.level === 2 ? "h3" : "h4";
    return <Tag id={block.id} className="ust-schema__heading"><a href={`#${block.id}`} aria-label="Direktlink zu diesem Abschnitt">#</a><Inline text={block.text} /></Tag>;
  }
  if (block.type === "p") return <p><Inline text={block.text} /></p>;
  if (block.type === "quote") return <blockquote><Inline text={block.text} /></blockquote>;
  if (block.type === "ul" || block.type === "ol") {
    const Tag = block.type;
    return (
      <Tag className="ust-schema__liste">
        {block.items.map((item, i) => <li key={i} style={{ marginLeft: `${Math.min(item.indent, 8) * 2}px` }}><Inline text={item.text} /></li>)}
      </Tag>
    );
  }
  if (block.type === "table") {
    return (
      <div className="ust-schema__tablewrap">
        <table className="ust-schema__table">
          <thead><tr>{block.header.map((cell, i) => <th key={i}><Inline text={cell} /></th>)}</tr></thead>
          <tbody>{block.body.map((row, r) => <tr key={r}>{row.map((cell, c) => <td key={c}><Inline text={cell} /></td>)}</tr>)}</tbody>
        </table>
      </div>
    );
  }
  return null;
}

export default function UstPruefschema() {
  const blocks = useMemo(() => parseMarkdown(schemaText), []);
  return (
    <article className="ust-schema">
      <header className="pagehead ust-schema__kopf">
        <div>
          <span className="kicker">Klausur 1 · Umsatzsteuer</span>
          <h1>Prüfschema Umsatzsteuer</h1>
          <p className="lead">Das vollständige Prüfschema ist als zentrale Referenz eingebunden. Verweise aus Fällen, Lösungen und Normketten führen direkt zur jeweils passenden Stelle.</p>
        </div>
      </header>

      <nav className="ust-schema__direkt" aria-label="Direktnavigation im Umsatzsteuer-Prüfschema">
        {direkt.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>

      <div className="ust-schema__inhalt">
        {blocks.map((block, i) => <Block key={`${block.type}-${i}`} block={block} />)}
      </div>
    </article>
  );
}
