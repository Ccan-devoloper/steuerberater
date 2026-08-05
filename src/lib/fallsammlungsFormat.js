import { fallsammlungsTabellenGeometrie } from "../data/fallsammlungTabellenGeometrie.js";

const TASK_START = /^(?:Wie\b|Ist\b|Sind\b|Kann\b|Können\b|Ermitteln\b|Ergänzen\b|Beurteilen\b|Erläutern\b|Bestimmen\b|Stellen\b|Nehmen\b|Aufgabe\b|Gewünscht\b|In der Handelsbilanz\b|Es ist in der Handelsbilanz\b|Die Buchhaltung ist\b|Buchungssätze sind\b|Es ist davon auszugehen\b|Die Voraussetzungen\b|A (?:wünscht|erfüllt)\b|P wünscht\b|Umsatzsteuer ist\b|Soweit nichts anderes)/i;

const CASE_HEADING = /^(?:Abwandlung(?: des Fall(?:e?s)?)?|Fortsetzung des Falls?|Allgemeiner Sachverhalt(?: für die Fälle \d+ bis \d+)?|Sachverhalt|Aufgaben?|Hinweise?|Einzelsachverhalte|„?Auszug“?(?: aus den Prüfungsfeststellungen)?|Steuerbilanz(?: A)?|Prüferbilanz|Aktiva|Passiva|Warenbestand|Rückstellung aufgrund von .+|Grundstück mit .+|Fall(?: \d+(?: \(Exkurs\))?)?|\d+(?:\.\d+)+\.?\s+.+):?$/i;

const SOLUTION_HEADING_START = /^(?:Lösung\b|Ansatz\b|Bewertung\b|Berechnung\b|Bestimmung\b|Ermittlung\b|Fortentwicklung\b|Entwicklung\b|Buchung(?:ssätze?| „| \u201e)\b|Korrekturbuchungen\b|Kontenentwicklung\b|Aufteilung\b|Handelsbilanz\b|Steuerbilanz\b|Umsatzsteuer\b|Verbindlichkeit\b|ARAP\b|PRAP\b|Biervorrat\b|Biersteuer\b|Grund und Boden\b|Gebäude\b|Lieferwagen\b|Elektrofahrzeug\b|Lagergrundstück\b|Vermietetes Grundstück\b|Sonderbilanz\b|Sonder-G\+V\b|Alternative\b|Vorab\b|Hinweis\b|Vertretbar\b|Alle Bereiche\b|Nur Handels(?:bilanz|recht)\b|Nur Steuer(?:bilanz|recht)\b|PC-Bildschirm\b|Gebrauchter?\b|gebrauchter?\b|Anschaffungskosten\b|Herstellungskosten\b|Teilwert\b|Abschreibungen\b|Schuldzinsen\b|RAP\b|Fremdwährung\b|Bewertungseinheiten\b|Rückstellungen\b|Latente Steuern\b|Wahlrecht\b)/i;

const COMMON_SENTENCE_START = /^(?:Der|Die|Das|Ein|Eine|Einer|Einem|Einen|Gem\.|Nach|Hier|Es|Da|Im|In|Für|Aufgrund|Zum|Am|Bei|Diese|Dieser|Deren|Wird|Werden|Soweit|Somit|Dabei|Entscheidend|Grundsätzlich|Hinsichtlich|Mit|Von|Aus|Auf|Da)/;

const VALUE_RE = /(?:^|\s)[+\-./]*\s*\d[\d.\s]*(?:,\d+)?\s*(?:€|%|Jahre?|Monate?|kg|Stück)?\s*$/i;
const AMOUNT_RE = /\d[\d.\s]*(?:,\d+)?\s*(?:€|%|kg|Stück|Jahre?|Monate?)\b|\d[\d.\s]*(?:,\d+)?\s*€/i;
const TOTAL_LABEL_RE = /^(?:Gesamt(?:betrag)?|Summe|Bilanzansatz|Restbetrag|zu zahlen|31\.12\.|BW\b|Buchwert|Endbestand|Anschaffungskosten|Herstellungskosten|Einlagewert|Gewinn|Kapital|Saldo)/i;

const ALIGN = ["left", "center", "right"];
const VALIGN = ["top", "middle", "bottom"];

export function fallsammlungsText(wert) {
  return Array.isArray(wert) ? wert.join("\n\n") : String(wert || "");
}

function normalizeSource(wert) {
  return fallsammlungsText(wert)
    .replace(/\r\n?/g, "\n")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+$/gm, "")
    .trim();
}

function normalizeTokenKey(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/\u00ad/g, "")
    .replace(/[−–—]/g, "-")
    .replace(/×/g, "x")
    .toLocaleLowerCase("de-DE");
}

function sourceTokens(source) {
  const raw = [];
  const matcher = /\S+/g;
  let match;
  while ((match = matcher.exec(source))) {
    raw.push({ text: match[0], key: normalizeTokenKey(match[0]), start: match.index, end: matcher.lastIndex });
  }

  const merged = [];
  for (let index = 0; index < raw.length; index += 1) {
    const current = raw[index];
    const next = raw[index + 1];
    if (current.key === "a" && next?.key === "n") {
      merged.push({ text: "an", key: "an", start: current.start, end: next.end });
      index += 1;
    } else {
      merged.push(current);
    }
  }
  return merged;
}

function signatureTokens(signature) {
  return String(signature || "")
    .split(/\s+/)
    .map(normalizeTokenKey)
    .filter(Boolean);
}

function parseDelimited(value, delimiter, mapper = (part) => part) {
  if (!value) return [];
  return value.split(delimiter).filter(Boolean).map(mapper);
}

function decodeCell(specification, index) {
  const [row, col, rowSpan, colSpan, tokenCount, flags, breaks = ""] = specification.split(",");
  const numericFlags = Number(flags);
  return {
    index,
    row: Number(row),
    col: Number(col),
    rowSpan: Number(rowSpan),
    colSpan: Number(colSpan),
    tokenCount: Number(tokenCount),
    align: ALIGN[numericFlags & 3] || "left",
    valign: VALIGN[(numericFlags >> 2) & 3] || "top",
    bold: Boolean(numericFlags & 16),
    italic: Boolean(numericFlags & 32),
    numeric: Boolean(numericFlags & 64),
    operator: Boolean(numericFlags & 128),
    breaks: breaks ? breaks.split(".").map(Number) : [],
    text: "",
  };
}

function layoutPage(id) {
  const match = String(id).match(/^[FL](\d{3})-/);
  return match ? Number(match[1]) : 0;
}

function decodeLayout(entry) {
  const [id, widths, rowCount, startSignature, endSignature, sourceTokenCount, cellData, scheduleData] = entry;
  return {
    id,
    page: layoutPage(id),
    widths: widths.split(".").map(Number),
    rowCount: Number(rowCount),
    startSignature: signatureTokens(startSignature),
    endSignature: signatureTokens(endSignature),
    sourceTokenCount: Number(sourceTokenCount),
    cells: parseDelimited(cellData, ";", decodeCell),
    schedule: parseDelimited(scheduleData, ";", (part) => part.split(",").map(Number)),
  };
}

const decodedLayouts = {
  sachverhalt: fallsammlungsTabellenGeometrie.sachverhalt.map(decodeLayout),
  loesung: fallsammlungsTabellenGeometrie.loesung.map(decodeLayout),
};

function tokensEqual(tokens, start, signature) {
  if (start < 0 || start + signature.length > tokens.length) return false;
  return signature.every((key, offset) => tokens[start + offset]?.key === key);
}

function expectedPdfPage(options) {
  const printedPage = Number(options?.sourcePage);
  return Number.isFinite(printedPage) ? printedPage + 3 : null;
}

function findOriginalTableMatches(source, variant, options = {}) {
  const tokens = sourceTokens(source);
  if (!tokens.length) return { tokens, matches: [] };

  const layouts = decodedLayouts[variant] || [];
  const expectedPage = expectedPdfPage(options);
  const byFirstToken = new Map();
  layouts.forEach((layout) => {
    const first = layout.startSignature[0];
    if (!first) return;
    if (!byFirstToken.has(first)) byFirstToken.set(first, []);
    byFirstToken.get(first).push(layout);
  });

  const candidates = [];
  tokens.forEach((token, start) => {
    const possible = byFirstToken.get(token.key) || [];
    possible.forEach((layout) => {
      const end = start + layout.sourceTokenCount;
      const endStart = end - layout.endSignature.length;
      if (end > tokens.length) return;
      if (!tokensEqual(tokens, start, layout.startSignature)) return;
      if (!tokensEqual(tokens, endStart, layout.endSignature)) return;
      candidates.push({
        layout,
        start,
        end,
        pageDistance: expectedPage == null ? 0 : Math.abs(layout.page - expectedPage),
      });
    });
  });

  candidates.sort((left, right) => (
    left.start - right.start
    || left.pageDistance - right.pageDistance
    || right.layout.sourceTokenCount - left.layout.sourceTokenCount
    || left.layout.id.localeCompare(right.layout.id)
  ));

  const matches = [];
  let lastEnd = -1;
  for (const candidate of candidates) {
    if (candidate.start < lastEnd) continue;
    matches.push(candidate);
    lastEnd = candidate.end;
  }
  return { tokens, matches };
}

function tableBlock(match, tokens) {
  const { layout, start, end } = match;
  const cells = layout.cells.map((cell) => ({ ...cell, text: "" }));
  let cursor = start;

  for (const [cellIndex, tokenCount] of layout.schedule) {
    const cell = cells[cellIndex];
    if (!cell || tokenCount < 1 || cursor + tokenCount > end) return null;
    const line = tokens.slice(cursor, cursor + tokenCount).map((token) => token.text).join(" ");
    cell.text = cell.text ? `${cell.text}\n${line}` : line;
    cursor += tokenCount;
  }
  if (cursor !== end) return null;

  return {
    type: "table",
    original: true,
    sourceId: layout.id,
    columns: layout.widths,
    rowCount: layout.rowCount,
    cells: cells.map(({ index, tokenCount, breaks, ...cell }) => cell),
  };
}

export function matchFallsammlungsTabellen(wert, variant = "sachverhalt", options = {}) {
  const source = normalizeSource(wert);
  if (!source) return [];
  const { tokens, matches } = findOriginalTableMatches(source, variant, options);
  return matches.map((match) => tableBlock(match, tokens)).filter(Boolean);
}

function splitColumns(line) {
  return line
    .replace(/\t/g, "    ")
    .trim()
    .split(/\s{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function isNumericCell(text) {
  const value = text.trim();
  return VALUE_RE.test(value) || /^[+\-./]*\s*\d[\d.,/ x×*%€()-]*$/.test(value);
}

function isOperatorCell(text) {
  return /^(?:an|=|\+|\-|\.\/)$/i.test(text.trim());
}

function isTableSignal(line) {
  const parts = splitColumns(line);
  if (parts.length < 2) return false;
  if (parts.length >= 3) return true;
  return parts.some((part) => isNumericCell(part) || AMOUNT_RE.test(part)) || /\s{2,}an\s{2,}/i.test(line);
}

function isFormulaLine(line) {
  const value = line.trim();
  if (!value || value.length > 110 || !/\d/.test(value)) return false;
  if (isTableSignal(value)) return false;
  const letters = (value.match(/[A-Za-zÄÖÜäöüß]/g) || []).length;
  const math = (value.match(/[\d€%+\-./=x×*():\s]/g) || []).length;
  return math / value.length > 0.72 && letters < 12;
}

function isHeadingLine(line, variant) {
  const value = line.trim();
  if (!value || value.length > 150 || isTableSignal(value) || isFormulaLine(value)) return false;
  if (variant === "sachverhalt") return CASE_HEADING.test(value);
  if (/^(?:Hinweis(?: für die Praxis)?|Vertretbar):\s+\S/i.test(value)) return false;
  if (/^(?:\d+(?:\.\d+)*\.?|[a-z]\))\s+\S/i.test(value)) return true;
  if (SOLUTION_HEADING_START.test(value)) return true;
  if (value.endsWith(":")) return true;
  return value.length <= 58 && !/[.!?]$/.test(value) && !COMMON_SENTENCE_START.test(value);
}

function isCompanionLine(line, variant) {
  const value = line.trim();
  if (!value || isHeadingLine(value, variant) || isFormulaLine(value)) return false;
  if (/^[•▪‣-]\s+/.test(value)) return true;
  if (value.length > 92) return false;
  return !/[.!?]$/.test(value);
}

function shouldStartTable(lines, index) {
  if (isTableSignal(lines[index])) return true;
  const value = lines[index]?.trim();
  return Boolean(
    value
    && value.length <= 92
    && !/[.!?]$/.test(value)
    && !value.endsWith(":")
    && !CASE_HEADING.test(value)
    && !SOLUTION_HEADING_START.test(value)
    && !/^(?:\d+(?:\.\d+)*\.?|[a-z]\))\s+\S/i.test(value)
    && !isFormulaLine(value)
    && lines[index + 1]
    && isTableSignal(lines[index + 1])
  );
}

function tableBounds(lines, index, variant) {
  let start = index;
  let end = index;
  while (start > 0 && lines[start - 1].trim() && isCompanionLine(lines[start - 1], variant)) {
    const priorSignal = isTableSignal(lines[start - 1]);
    const currentSignal = isTableSignal(lines[start]);
    if (!priorSignal && !currentSignal) break;
    start -= 1;
  }
  while (end + 1 < lines.length && lines[end + 1].trim()) {
    const next = lines[end + 1];
    if (isTableSignal(next) || isCompanionLine(next, variant)) {
      end += 1;
      continue;
    }
    break;
  }
  return [start, end];
}

function appendContinuation(row, text) {
  if (!row) return;
  const target = row.cells.findIndex((cell) => cell && !isNumericCell(cell) && !isOperatorCell(cell));
  const index = target >= 0 ? target : 0;
  row.cells[index] = row.cells[index] ? `${row.cells[index]}\n${text}` : text;
}

function parseTable(lines) {
  const signals = lines.map(splitColumns).filter((parts) => parts.length > 1);
  const columns = Math.max(2, ...signals.map((parts) => parts.length));
  const rows = [];
  let pending = "";

  lines.forEach((line, lineIndex) => {
    const parts = splitColumns(line);
    if (parts.length === 1) {
      const nextParts = lineIndex + 1 < lines.length ? splitColumns(lines[lineIndex + 1]) : [];
      if (!rows.length || nextParts.length > 1) {
        pending = pending ? `${pending}\n${parts[0]}` : parts[0];
      } else {
        appendContinuation(rows.at(-1), parts[0]);
      }
      return;
    }

    const cells = [...parts];
    if (pending) {
      cells[0] = `${pending}\n${cells[0]}`;
      pending = "";
    }
    while (cells.length < columns) cells.push("");
    rows.push({
      cells,
      total: cells.some((cell) => TOTAL_LABEL_RE.test(cell.trim())),
    });
  });

  if (pending) rows.push({ cells: [pending, ...Array(columns - 1).fill("")], total: false });

  return {
    type: "table",
    columns,
    rows: rows.map((row) => ({
      ...row,
      cells: row.cells.map((text) => ({
        text,
        numeric: isNumericCell(text),
        operator: isOperatorCell(text),
      })),
    })),
  };
}

function taskParagraph(text) {
  return TASK_START.test(text.trim());
}

function solutionNote(text) {
  return /^(?:Hinweis(?: für die Praxis)?|Vertretbar):/i.test(text.trim());
}

function paragraphLead(text) {
  const match = text.match(/^(Abwandlung(?: des Fall(?:e?s)?)?|Aufgabe|Hinweis(?: für die Praxis)?|Vertretbar|Handelsbilanz|Steuerbilanz|Umsatzsteuer|Bewertung|Ansatz|Berechnung|Buchung(?:ssatz|ssätze)):\s*/i);
  return match ? match[0].trim() : "";
}

function parseFallbackText(source, variant) {
  if (!source.trim()) return [];
  const lines = source.split("\n");
  const blocks = [];
  let paragraph = [];
  let list = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const text = paragraph.map((line) => line.trim()).filter(Boolean).join(" ");
    if (text) {
      blocks.push({
        type: "paragraph",
        text,
        italic: variant === "sachverhalt" ? taskParagraph(text) : solutionNote(text),
        lead: paragraphLead(text),
      });
    }
    paragraph = [];
  };

  const flushList = () => {
    if (!list.length) return;
    blocks.push({ type: "list", items: list });
    list = [];
  };

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i];
    const line = raw.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (shouldStartTable(lines, i)) {
      flushParagraph();
      flushList();
      const [start, end] = tableBounds(lines, i, variant);
      if (start < i) {
        const prefix = lines.slice(start, i).map((value) => value.trim()).filter(Boolean).join(" ");
        const last = blocks.at(-1);
        if (last?.type === "paragraph" && last.text === prefix) blocks.pop();
      }
      blocks.push(parseTable(lines.slice(start, end + 1)));
      i = end;
      continue;
    }

    if (isFormulaLine(line)) {
      flushParagraph();
      flushList();
      const formulas = [line];
      while (i + 1 < lines.length && isFormulaLine(lines[i + 1])) {
        i += 1;
        formulas.push(lines[i].trim());
      }
      blocks.push({ type: "formula", lines: formulas });
      continue;
    }

    if (isHeadingLine(line, variant)) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "heading",
        text: line,
        italic: variant === "loesung" && /^(?:Hinweis|Vertretbar)/i.test(line),
      });
      continue;
    }

    const bullet = line.match(/^[•▪‣-]\s*(.+)$/);
    if (bullet) {
      flushParagraph();
      list.push(bullet[1]);
      continue;
    }

    flushList();
    paragraph.push(raw);
  }

  flushParagraph();
  flushList();
  return blocks;
}

export function parseFallsammlungsText(wert, variant = "sachverhalt", options = {}) {
  const source = normalizeSource(wert);
  if (!source) return [];

  const { tokens, matches } = findOriginalTableMatches(source, variant, options);
  if (!matches.length) return parseFallbackText(source, variant);

  const blocks = [];
  let sourceCursor = 0;
  for (const match of matches) {
    const startOffset = tokens[match.start]?.start ?? sourceCursor;
    const endOffset = tokens[match.end - 1]?.end ?? startOffset;
    blocks.push(...parseFallbackText(source.slice(sourceCursor, startOffset), variant));
    const table = tableBlock(match, tokens);
    if (table) blocks.push(table);
    else blocks.push(...parseFallbackText(source.slice(startOffset, endOffset), variant));
    sourceCursor = endOffset;
  }
  blocks.push(...parseFallbackText(source.slice(sourceCursor), variant));
  return blocks;
}
