import { registerPersGTag5 } from "./k3-persg-tag5-register.js";
import { persgFaelle } from "./k3-persg-tag1.js";
import { originalfaelle_4a4b } from "./k3-persg-originalfaelle-4a4b.js";
import { original4cFacts, original4cSolutionA } from "./k3-persg-originalfaelle-4c-a.js";
import { original4cSolutionB } from "./k3-persg-originalfaelle-4c-b.js";
import { originalfall_4d } from "./k3-persg-originalfaelle-4d.js";
import { originalfaelle_4e4f } from "./k3-persg-originalfaelle-4e4f.js";
import { originalfaelle_4g4h } from "./k3-persg-originalfaelle-4g4h.js";

registerPersGTag5();

const originalfall4c = {
  id:"persg-original-4c", nr:"4C", sourceTag:5,
  title:"Austritt von Gesellschaftern – Beispiel 2",
  sourcePages:["Aufgabe 1–3","Lösung 1–7"], moduleIds:[40,41],
  law:"§ 16 EStG · § 6b EStG · § 7 EStG",
  facts:original4cFacts, tasks:[],
  solution:[...original4cSolutionA,...original4cSolutionB],
  result:"", verbatim:true,
};

// Realteilungsfälle verweisen zusätzlich auf die Sperrfrist-/Verwaltungsgrundsätze (Modul 45).
for (const fall of originalfaelle_4g4h) fall.moduleIds = [44,45,46];

// Die komprimierten Tag-5-Unterrichtsfälle werden durch die vollständigen Original-PDF-Fälle ersetzt.
persgFaelle.splice(0, persgFaelle.length, ...persgFaelle.filter((fall)=>fall.sourceTag!==5));
persgFaelle.push(
  ...originalfaelle_4a4b,
  originalfall4c,
  originalfall_4d,
  ...originalfaelle_4e4f,
  ...originalfaelle_4g4h,
);
