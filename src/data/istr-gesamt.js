import {
  istrEinheit1Quelle, istrEinheit1Module, istrEinheit1Faelle, istrEinheit1Training, istrEinheit1CaptureRanges,
} from "./istr-einheit-1.js";
import {
  istrEinheit2Quelle, istrEinheit2Module, istrEinheit2Faelle, istrEinheit2Training, istrEinheit2CaptureRanges,
} from "./istr-einheit-2.js";
import {
  istrEinheit3Quelle, istrEinheit3Module, istrEinheit3Faelle, istrEinheit3Training, istrEinheit3CaptureRanges,
} from "./istr-einheit-3.js";
import {
  istrEinheit4Quelle, istrEinheit4Module, istrEinheit4Faelle, istrEinheit4Training, istrEinheit4CaptureRanges,
} from "./istr-einheit-4.js";
import { verknuepfeIstrOriginalfall } from "./istr-originalfaelle.js";

export const istrBereiche = [
  { id: "alle", label: "Alle" },
  { id: "grundlagen", label: "Steuerpflicht / AO" },
  { id: "steuerpflicht", label: "Steuerpflicht vertieft" },
  { id: "ausland", label: "Auslandseinkünfte" },
  { id: "astg", label: "AStG / § 2a" },
  { id: "familie", label: "§ 1a / Familie" },
  { id: "antrag", label: "§ 1 Abs. 3" },
  { id: "inland", label: "§ 49 EStG" },
  { id: "kapital", label: "Kapitalerträge" },
  { id: "abzug", label: "§ 50a / § 50c" },
  { id: "wegzug", label: "Wegzug / AStG" },
  { id: "kst", label: "KSt-Auslandsbezug" },
  { id: "dba", label: "DBA / AAVV" },
  { id: "verteilung", label: "Verteilungsnormen" },
  { id: "vermeidung", label: "Vermeidung / PVB" },
  { id: "entstrickung", label: "Entstrickung" },
  { id: "hzb", label: "Hinzurechnungsbesteuerung" },
  { id: "hzb-rechtsfolge", label: "HZB-Rechtsfolge" },
  { id: "technik", label: "Klausurtechnik" },
];

export const istrBereichName = Object.fromEntries(istrBereiche.map((b) => [b.id, b.label]));

const crossUnit1 = {
  "istr1-02": ["istr4-08"],
  "istr1-03": ["istr4-02", "istr4-04", "istr4-06", "istr4-07"],
  "istr1-06": ["istr3-06", "istr3-07", "istr3-08"],
  "istr1-07": ["istr3-09", "istr3-11", "istr3-12"],
  "istr1-08": ["istr3-01", "istr3-06"],
  "istr1-09": ["istr3-01", "istr3-09", "istr3-11"],
  "istr1-10": ["istr3-03", "istr3-04"],
  "istr1-11": ["istr3-01", "istr3-03", "istr3-05"],
};

const crossUnit2 = {
  "istr2-01": ["istr1-05", "istr1-08", "istr1-09", "istr3-01", "istr3-05"],
  "istr2-02": ["istr1-09", "istr3-01", "istr3-09", "istr3-11"],
  "istr2-03": ["istr1-11", "istr3-02", "istr3-03", "istr3-12", "istr4-07"],
  "istr2-04": ["istr1-01", "istr3-01", "istr3-02", "istr3-04"],
  "istr2-05": ["istr3-01"],
  "istr2-08": ["istr1-02", "istr3-06", "istr4-08"],
  "istr2-09": ["istr1-12", "istr3-01", "istr3-06", "istr3-09"],
};

const crossUnit3 = {
  "istr3-01": ["istr4-01"],
  "istr3-07": ["istr4-02"],
  "istr3-08": ["istr4-02"],
  "istr3-09": ["istr4-02"],
};

export const istrModule = [
  ...istrEinheit1Module.map((m) => ({
    ...m,
    unit: 1,
    links: [...new Set([...(m.links || []), ...(crossUnit1[m.id] || [])])],
  })),
  ...istrEinheit2Module.map((m) => ({
    ...m,
    unit: 2,
    links: [...new Set([...(m.links || []), ...(crossUnit2[m.id] || [])])],
  })),
  ...istrEinheit3Module.map((m) => ({
    ...m,
    links: [...new Set([...(m.links || []), ...(crossUnit3[m.id] || [])])],
  })),
  ...istrEinheit4Module,
];

function fallMitOriginaldarstellung(fall) {
  const verknuepft = verknuepfeIstrOriginalfall(fall);
  if (!verknuepft.originalCase) return verknuepft;

  const original = verknuepft.originalCase;
  const facts = [];
  if (original.preface) facts.push(original.preface);
  for (const abschnitt of original.sections || []) {
    if (abschnitt.heading) facts.push(abschnitt.heading);
    facts.push(...(abschnitt.paragraphs || []));
  }
  facts.push("Aufgabe:", ...(original.task || []));

  const solution = [];
  if (verknuepft.solutionNote) solution.push(verknuepft.solutionNote);
  for (const abschnitt of verknuepft.solutionSections || []) {
    solution.push(abschnitt.title, ...(abschnitt.steps || []));
  }

  return {
    ...verknuepft,
    title: original.title,
    facts,
    solution,
    originalSource: original.source,
    originalCopyright: original.copyright,
    sourceNote: original.sourceNote || null,
    wortlautgetreu: true,
  };
}

export const istrFaelle = [
  ...istrEinheit1Faelle.map((f) => fallMitOriginaldarstellung({ ...f, unit: 1 })),
  ...istrEinheit2Faelle.map((f) => fallMitOriginaldarstellung({ ...f, unit: 2 })),
  ...istrEinheit3Faelle.map((f) => fallMitOriginaldarstellung({ ...f, unit: f.unit || 3 })),
  ...istrEinheit4Faelle.map((f) => fallMitOriginaldarstellung({ ...f, unit: f.unit || 4 })),
];

export const istrTraining = [
  ...istrEinheit1Training.map((q) => ({ ...q, unit: 1 })),
  ...istrEinheit2Training.map((q) => ({ ...q, unit: 2 })),
  ...istrEinheit3Training,
  ...istrEinheit4Training,
];

export const istrQuellen = [
  { unit: 1, quelle: istrEinheit1Quelle, ranges: istrEinheit1CaptureRanges },
  { unit: 2, quelle: istrEinheit2Quelle, ranges: istrEinheit2CaptureRanges },
  { unit: 3, quelle: istrEinheit3Quelle, ranges: istrEinheit3CaptureRanges },
  { unit: 4, quelle: istrEinheit4Quelle, ranges: istrEinheit4CaptureRanges },
];

export {
  istrEinheit1Quelle, istrEinheit1CaptureRanges,
  istrEinheit2Quelle, istrEinheit2CaptureRanges,
  istrEinheit3Quelle, istrEinheit3CaptureRanges,
  istrEinheit4Quelle, istrEinheit4CaptureRanges,
};