import {
  istrEinheit1Quelle, istrEinheit1Module, istrEinheit1Faelle, istrEinheit1Training, istrEinheit1CaptureRanges,
} from "./istr-einheit-1.js";
import {
  istrEinheit2Quelle, istrEinheit2Module, istrEinheit2Faelle, istrEinheit2Training, istrEinheit2CaptureRanges,
} from "./istr-einheit-2.js";
import {
  istrEinheit3Quelle, istrEinheit3Module, istrEinheit3Faelle, istrEinheit3Training, istrEinheit3CaptureRanges,
} from "./istr-einheit-3.js";

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
  { id: "technik", label: "Klausurtechnik" },
];

export const istrBereichName = Object.fromEntries(istrBereiche.map((b) => [b.id, b.label]));

const crossUnit1 = {
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
  "istr2-03": ["istr1-11", "istr3-02", "istr3-03", "istr3-12"],
  "istr2-04": ["istr1-01", "istr3-01", "istr3-02", "istr3-04"],
  "istr2-05": ["istr3-01"],
  "istr2-08": ["istr1-02", "istr3-06"],
  "istr2-09": ["istr1-12", "istr3-01", "istr3-06", "istr3-09"],
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
  ...istrEinheit3Module,
];

export const istrFaelle = [
  ...istrEinheit1Faelle.map((f) => ({ ...f, unit: 1 })),
  ...istrEinheit2Faelle.map((f) => ({ ...f, unit: 2 })),
  ...istrEinheit3Faelle,
];

export const istrTraining = [
  ...istrEinheit1Training.map((q) => ({ ...q, unit: 1 })),
  ...istrEinheit2Training.map((q) => ({ ...q, unit: 2 })),
  ...istrEinheit3Training,
];

export const istrQuellen = [
  { unit: 1, quelle: istrEinheit1Quelle, ranges: istrEinheit1CaptureRanges },
  { unit: 2, quelle: istrEinheit2Quelle, ranges: istrEinheit2CaptureRanges },
  { unit: 3, quelle: istrEinheit3Quelle, ranges: istrEinheit3CaptureRanges },
];

export {
  istrEinheit1Quelle, istrEinheit1CaptureRanges,
  istrEinheit2Quelle, istrEinheit2CaptureRanges,
  istrEinheit3Quelle, istrEinheit3CaptureRanges,
};
