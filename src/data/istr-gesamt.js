import {
  istrEinheit1Quelle, istrEinheit1Module, istrEinheit1Faelle, istrEinheit1Training, istrEinheit1CaptureRanges,
} from "./istr-einheit-1";
import {
  istrEinheit2Quelle, istrEinheit2Module, istrEinheit2Faelle, istrEinheit2Training, istrEinheit2CaptureRanges,
} from "./istr-einheit-2";

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
  { id: "abzug", label: "§ 50a / § 50" },
  { id: "wegzug", label: "Wegzug" },
  { id: "kst", label: "KSt-Auslandsbezug" },
  { id: "dba", label: "DBA / AAVV" },
  { id: "verteilung", label: "Verteilungsnormen" },
  { id: "vermeidung", label: "Vermeidung / PVB" },
  { id: "technik", label: "Klausurtechnik" },
];

export const istrBereichName = Object.fromEntries(istrBereiche.map((b) => [b.id, b.label]));

const crossUnit2 = {
  "istr2-01": ["istr1-05", "istr1-08", "istr1-09"],
  "istr2-02": ["istr1-09"],
  "istr2-03": ["istr1-11"],
  "istr2-04": ["istr1-01"],
  "istr2-08": ["istr1-02"],
  "istr2-09": ["istr1-12"],
};

export const istrModule = [
  ...istrEinheit1Module,
  ...istrEinheit2Module.map((m) => ({
    ...m,
    unit: 2,
    links: [...new Set([...(m.links || []), ...(crossUnit2[m.id] || [])])],
  })),
];

export const istrFaelle = [
  ...istrEinheit1Faelle,
  ...istrEinheit2Faelle.map((f) => ({ ...f, unit: 2 })),
];

export const istrTraining = [
  ...istrEinheit1Training,
  ...istrEinheit2Training.map((q) => ({ ...q, unit: 2 })),
];

export const istrQuellen = [
  { unit: 1, quelle: istrEinheit1Quelle, ranges: istrEinheit1CaptureRanges },
  { unit: 2, quelle: istrEinheit2Quelle, ranges: istrEinheit2CaptureRanges },
];

export { istrEinheit1Quelle, istrEinheit1CaptureRanges, istrEinheit2Quelle, istrEinheit2CaptureRanges };
