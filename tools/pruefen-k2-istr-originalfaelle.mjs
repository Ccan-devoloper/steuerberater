import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import { istrOriginalfaelle, istrOriginalfallZuordnung } from "../src/data/istr-originalfaelle.js";
import { istrFaelle, istrModule } from "../src/data/istr-gesamt.js";

const expectedHashes = {
  "dba-unbeschraenkt": "5cdf60433bf4704d1b3d7d1329c87708b717afe2c227fe80fcd7b609b2414622",
  "dba-beschraenkt": "0a0d38937dd25e59749a2532405a609d34069aa86f6f69c88b111702b83cc6d9",
  "wegzug-mn": "59162d73a6509c1a5054e7040d9db5dd2f20ad7248ada397bcdfa6ab482e8eb2",
  "kst-limitada": "c5cf1a98f6742948f2a8e91ef1c8aef584527eecdafb46702631fba201a34d46",
};

function originalZeilen(original) {
  const zeilen = [original.title];
  if (original.preface) zeilen.push(original.preface);
  for (const abschnitt of original.sections || []) {
    if (abschnitt.heading) zeilen.push(abschnitt.heading);
    zeilen.push(...(abschnitt.paragraphs || []));
  }
  zeilen.push("Aufgabe:", ...(original.task || []));
  return zeilen;
}

function hashOriginal(original) {
  return crypto.createHash("sha256").update(originalZeilen(original).join("\n"), "utf8").digest("hex");
}

assert.deepEqual(Object.keys(istrOriginalfaelle).sort(), Object.keys(expectedHashes).sort(), "Es müssen genau die vier kanonischen Originalfälle vorhanden sein.");
for (const [id, expectedHash] of Object.entries(expectedHashes)) {
  const original = istrOriginalfaelle[id];
  assert(original, `Originalfall ${id} fehlt.`);
  assert.equal(hashOriginal(original), expectedHash, `Wortlaut von ${id} weicht vom geprüften PDF-Stand ab.`);
  assert.equal(original.copyright, "© Markus Nöthen", `Quellenangabe bei ${id} fehlt.`);
}

const expectedMappings = {
  "istr1-fall-dba-vorschau": "dba-unbeschraenkt",
  "istr2-fall-unbeschraenkt-dba": "dba-unbeschraenkt",
  "istr2-fall-beschraenkt-dba": "dba-beschraenkt",
  "istr3-fall-oesterreich": "dba-beschraenkt",
  "istr1-fall-wegzug": "wegzug-mn",
  "istr3-fall-wegzug-mn": "wegzug-mn",
  "istr1-fall-kst-limitada": "kst-limitada",
  "istr3-fall-limitada": "kst-limitada",
};
assert.deepEqual(istrOriginalfallZuordnung, expectedMappings, "Originalfall-Zuordnung über Einheit 1–3 ist nicht vollständig.");

for (const [fallId, originalId] of Object.entries(expectedMappings)) {
  const fall = istrFaelle.find((eintrag) => eintrag.id === fallId);
  assert(fall, `Campus-Fall ${fallId} fehlt.`);
  assert.equal(fall.wortlautgetreu, true, `${fallId} ist nicht als wortlautgetreu markiert.`);
  assert.equal(fall.originalCaseId, originalId, `${fallId} zeigt auf den falschen Originalfall.`);
  assert.equal(fall.title, istrOriginalfaelle[originalId].title, `${fallId} verwendet nicht den Originaltitel.`);

  const original = istrOriginalfaelle[originalId];
  const erwarteteFakten = originalZeilen(original).slice(1);
  assert.deepEqual(fall.facts, erwarteteFakten, `${fallId}: Sachverhalt/Aufgabe werden im Campus nicht 1:1 aus dem kanonischen Originalfall gerendert.`);

  const unterricht = original.solutionsByUnit?.[fall.unit];
  assert(unterricht, `${fallId}: Es fehlt der Lösungsweg für Einheit ${fall.unit}.`);
  const erwarteteLoesung = [unterricht.note, ...unterricht.sections.flatMap((abschnitt) => [abschnitt.title, ...(abschnitt.steps || [])])].filter(Boolean);
  assert.deepEqual(fall.solution, erwarteteLoesung, `${fallId}: Unterrichtslösung wird nicht vollständig/in Reihenfolge gerendert.`);

  const verweisendeModule = istrModule.filter((modul) => (modul.caseIds || []).includes(fallId));
  assert(verweisendeModule.length > 0, `${fallId}: Kein relevantes Lernmodul verweist auf den Originalfall.`);
}

const allText = JSON.stringify(istrOriginalfaelle);
for (const marker of [
  "59.400 €",
  "218.170 €",
  "204.000 €",
  "1.200 €",
  "168.000 €",
  "8.770 €",
  "300 €",
  "423.000 €",
  "93.810 €",
  "BFH vom 31.05.2017 – I R 37/15",
  "2/5 = 10 % zurück",
  "keine darüber hinausgehende einheitliche Endsumme konstruiert",
  "keine nicht belegte Schlussrechnung ergänzt",
]) {
  assert(allText.includes(marker), `Zentraler Unterrichts-/Transparenzmarker fehlt: ${marker}`);
}

assert.equal(istrOriginalfaelle["dba-beschraenkt"].task[0].includes("Einkommen des MN"), true, "Der Quellen-Tippfehler MN muss wortlautgetreu erhalten bleiben.");
assert.equal(istrOriginalfaelle["wegzug-mn"].sections[0].paragraphs.some((p) => p.includes("§ 19 UStG")), true, "§ 19 UStG aus dem Wegzugsfall fehlt.");
assert.equal(istrOriginalfaelle["kst-limitada"].sections.some((s) => s.paragraphs?.some((p) => p.includes("17. August 2025"))), true, "Grundbuchdatum der B-Limitada fehlt.");
assert.equal(istrOriginalfaelle["dba-unbeschraenkt"].sections.some((s) => s.paragraphs?.some((p) => p.includes("einen Baumarkt unterhält"))), true, "Baumarkt-Detail des DBA-Falls fehlt.");

const datei = fs.readFileSync(new URL("../src/data/istr-originalfaelle.js", import.meta.url), "utf8");
for (const privat of ["Persönliches PDF für Yusuf Karaman", "51429 Bergisch Gladbach"]) {
  assert.equal(datei.includes(privat), false, `Private PDF-Fußzeile darf nicht veröffentlicht werden: ${privat}`);
}

console.log(`K2 IStR Originalfälle OK: 4 kanonische PDF-Fälle · 8 Vorkommen in Einheit 1–3 · Wortlaut per SHA-256 fixiert · Unterrichtslösungen und Modul-Querverweise vollständig.`);