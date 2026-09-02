#!/usr/bin/env node
/* Prüft die Examensprioritäten-Markierung über alle Campusse.

   - lädt sämtliche Lerninhalte (Module, Fälle, Hausaufgaben, Schemata,
     Formeln, Karteikarten, Quizfragen, Lernwochen, Glossar, Schaubilder)
   - klassifiziert jeden Inhalt mit src/data/examensprioritaet.js
   - prüft, dass jede Regel eine Fundstelle trägt, jede Überschreibung ein
     existierendes Objekt trifft und kein Fach ohne Dauerbrenner bleibt
   - schreibt mit --inventar die vollständige Zuordnung nach
     docs/examensprioritaet-inventar.md

   Aufruf: node tools/pruefen-examensprioritaet.mjs [--inventar] [--liste] */

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const R = resolve(HERE, "../src/data") + "/";
const ARGS = new Set(process.argv.slice(2));

const {
  PRIORITAETEN, PRIORITAET_REGELN, PRIORITAET_UEBERSCHREIBUNGEN, PRIORITAET_FAECHER,
  PRIORITAET_QUELLEN, prioritaetFuer,
} = await import(R + "examensprioritaet.js");

const inhalte = [];
const add = (fach, typ, id, obj, campus) => inhalte.push({ fach, typ, id: String(id), obj, campus });

/* ---------------------------------------------------------------- K3 Bilanz */
{
  const { module } = await import(R + "module.js");
  for (const m of module) add("bilanz", "modul", m.id, m, "K3 Bilanzen");
  const { hausaufgaben } = await import(R + "hausaufgaben.js");
  for (const h of hausaufgaben) add("bilanz", "hausaufgabe", h.id, h, "K3 Bilanzen");
  const L = await import(R + "lernstoff.js");
  for (const f of L.formeln) add("bilanz", "formel", f.id, f, "K3 Bilanzen");
  L.karteikarten.forEach((k, i) => add("bilanz", "karte", i + 1, { title: k.frage, tags: [k.gruppe] }, "K3 Bilanzen"));
  L.quizfragen.forEach((q, i) => add("bilanz", "quiz", i + 1, { title: q[0], tags: [q[4]] }, "K3 Bilanzen"));
  L.wochenplan.forEach((w, i) => add("bilanz", "woche", i + 1, { title: w.titel, subtitle: w.inhalt }, "K3 Bilanzen"));
  for (const g of L.glossar) add("bilanz", "glossar", g.begriff, { title: g.begriff, norm: g.norm }, "K3 Bilanzen");
  const S = (await import(R + "schaubilder.js")).default;
  for (const [id, s] of Object.entries(S)) add("bilanz", "schaubild", id, { title: s.titel || s.title || id }, "K3 Bilanzen");
  /* Reiter „Buchungssätze“: Lektionen und Grundlagenfragen sind Buchungstechnik,
     Beispiele und Buchungssatz-Aufgaben werden nach Titel und Normen eingestuft. */
  const B = await import(R + "buchungssaetze.js");
  for (const l of B.LEKTIONEN) add("bilanz", "buchungslektion", l.id, { title: l.titel, tags: ["Buchungstechnik"] }, "K3 Bilanzen");
  for (const b of B.BEISPIELE) add("bilanz", "beispiel", b.id, { title: b.titel, normen: b.normen || [] }, "K3 Bilanzen");
  for (const u of B.UEBUNGEN) add("bilanz", "uebung", u.id, u.typ === "satz" ? { title: u.sachverhalt } : { title: u.frage, tags: ["Buchungstechnik"] }, "K3 Bilanzen");
  /* Jeder Buchungssatz des Reiters muss Soll = Haben erfüllen. */
  const unausgeglichen = [];
  for (const b of B.BEISPIELE) {
    if (!B.istAusgeglichen(b.buchung)) unausgeglichen.push(`Beispiel ${b.id}`);
    if (b.zweiteBuchung && !B.istAusgeglichen(b.zweiteBuchung)) unausgeglichen.push(`Beispiel ${b.id} (2. Buchung)`);
  }
  for (const l of B.LEKTIONEN) if (l.beispiel && !B.istAusgeglichen(l.beispiel)) unausgeglichen.push(`Lektion ${l.id}`);
  for (const u of B.UEBUNGEN) {
    if (u.typ === "satz" && !B.istAusgeglichen(u.loesung)) unausgeglichen.push(`Übung ${u.id}`);
    if (u.typ === "satz") {
      const konten = new Set(u.konten);
      for (const z of [...u.loesung.soll, ...u.loesung.haben]) if (!konten.has(z.konto)) unausgeglichen.push(`Übung ${u.id}: Lösungskonto „${z.konto}“ fehlt in der Auswahl`);
      for (const kk of u.konten) if (!(kk in B.KONTO_ART)) unausgeglichen.push(`Übung ${u.id}: unbekanntes Konto „${kk}“`);
    }
    if (u.typ !== "satz" && (u.richtig < 0 || u.richtig >= u.optionen.length)) unausgeglichen.push(`Übung ${u.id}: Index der richtigen Antwort außerhalb der Optionen`);
  }
  for (const b of B.BEISPIELE) for (const z of [...b.buchung.soll, ...b.buchung.haben, ...(b.zweiteBuchung?.soll || []), ...(b.zweiteBuchung?.haben || [])]) if (!(z.konto in B.KONTO_ART)) unausgeglichen.push(`Beispiel ${b.id}: unbekanntes Konto „${z.konto}“`);
  if (unausgeglichen.length) {
    console.error("Buchungssätze fehlerhaft:\n  " + unausgeglichen.join("\n  "));
    process.exit(1);
  }
}

/* ------------------------------------------------------------------- K1 AO */
for (let i = 1; i <= 8; i++) {
  const e = (await import(R + `k1-ao-einheit-${i}.js`)).default;
  for (const m of e) add("ao", m.area === "Fall" ? "fall" : "modul", m.id, m, "K1 AO");
}
{
  const { k1AoHausaufgaben } = await import(R + "k1-ao-hausaufgaben.js");
  for (const t of k1AoHausaufgaben) for (const f of t.faelle) add("ao", "hausaufgabe", f.id, f, "K1 AO");
  const { AO_SHORT_2025_BLOCKS } = await import(R + "ao-shortskript-2025.js");
  for (const b of AO_SHORT_2025_BLOCKS) add("ao", "skript", b.moduleId, b, "K1 AO");
}

/* ------------------------------------------------------------------ K1 USt */
{
  await import(R + "k1-einheiten.js");
  for (const f of ["m", "n", "o", "p", "q", "r", "s", "t", "t-zusatz", "u"]) {
    const e = (await import(R + `module-vertiefung-${f}.js`)).default;
    for (const m of e) add("ust", m.area === "Fall" ? "fall" : "modul", m.id, m, "K1 USt");
  }
  const { k1Fallsammlung } = await import(R + "k1-fallsammlung.js");
  for (const f of k1Fallsammlung) add("ust", "fallsammlung", f.id, f, "K1 USt");
  const { k1UstHausaufgaben } = await import(R + "k1-ust-hausaufgaben.js");
  for (const t of k1UstHausaufgaben) for (const f of t.faelle) add("ust", "hausaufgabe", f.id, f, "K1 USt");
  const { meurerKurzskriptBloecke } = await import(R + "k1-ust-kurzskript-meurer.js");
  for (const b of meurerKurzskriptBloecke) add("ust", "skript", b.id, b, "K1 USt");
}

/* ---------------------------------------------------------------- K1 ErbSt */
for (const f of ["k1-erbst-einheit-1", "k1-erbst-einheit-2", "k1-erbst-einheit-2-fortsetzung", "k1-erbst-einheit-3"]) {
  const e = (await import(R + f + ".js")).default;
  for (const m of e) add("erbst", m.area === "Fall" ? "fall" : "modul", m.id, m, "K1 ErbSt");
}

/* ------------------------------------------------------------------ K2 KSt */
{
  for (const reg of ["kst-einheit-2-register", "kst-einheit-5-register", "kst-einheit-6-register", "kst-einheit-7-register"]) await import(R + reg + ".js");
  const K = await import(R + "kst-module.js");
  for (const m of K.kstModule) add("kst", "modul", m.id, m, "K2 KSt");
  for (const s of K.kstSchemata) add("kst", "schema", s.id, s, "K2 KSt");
  const { kstFaelle } = await import(R + "kst-faelle.js");
  const byId = new Map(K.kstModule.map((m) => [m.id, m]));
  for (const f of kstFaelle) add("kst", "fall", f.id, { ...f, law: byId.get(f.moduleId)?.law, normchain: byId.get(f.moduleId)?.normchain }, "K2 KSt");
}

/* ----------------------------------------------------------------- K2 IStR */
{
  const I = await import(R + "istr-gesamt.js");
  const byId = new Map(I.istrModule.map((m) => [m.id, m]));
  for (const m of I.istrModule) add("istr", "modul", m.id, m, "K2 IStR");
  for (const f of I.istrFaelle || []) {
    const laws = (f.moduleIds || []).map((id) => byId.get(id)?.law).filter(Boolean);
    add("istr", "fall", f.id, { ...f, normchain: laws }, "K2 IStR");
  }
  const { istrFallsammlung } = await import(R + "istr-fallsammlung.js");
  for (const f of istrFallsammlung) add("istr", "fallsammlung", f.id, f, "K2 IStR");
  const { istrHausaufgaben } = await import(R + "istr-hausaufgaben.js");
  for (const h of istrHausaufgaben) add("istr", "hausaufgabe", h.id, h, "K2 IStR");
}

/* ---------------------------------------------------------------- K3 PersG */
{
  for (const reg of ["k3-persg-tag2-register", "k3-persg-tag3-register", "k3-persg-tag4-register", "k3-persg-originalfaelle-register", "k3-persg-kurzskript-2025"]) await import(R + reg + ".js");
  const P = await import(R + "k3-persg-tag1.js");
  for (const m of P.persgModule) add("persg", "modul", m.id, m, "K3 PersG");
  for (const f of P.persgFaelle) add("persg", "fall", f.id, f, "K3 PersG");
  for (const s of P.persgSchemata) add("persg", "schema", s.id, s, "K3 PersG");
}

/* --------------------------------------------------------------- K3 UmwStR */
{
  const { umwstrHausaufgaben } = await import(R + "k3-umwstr-ha-faelle.js");
  for (const t of umwstrHausaufgaben) for (const f of t.faelle) add("umwstg", "hausaufgabe", f.id, f, "K3 UmwStR");
  /* Die 13 Prüfschemata liegen als Bilddaten im Campus; Titel hier gespiegelt,
     damit das Inventar vollständig ist. */
  const { UMWSTR_SCHEMA_TITEL } = await import(R + "k3-umwstr-schema-titel.js");
  for (const s of UMWSTR_SCHEMA_TITEL) add("umwstg", "schema", s.nr, s, "K3 UmwStR");
}

/* ============================================================== Auswertung */
const fehler = [];
const ergebnisse = inhalte.map((e) => ({ ...e, p: prioritaetFuer(e.fach, e.obj, { typ: e.typ, id: e.id }) }));

for (const regel of PRIORITAET_REGELN) {
  if (!regel.fundstelle) fehler.push(`Regel ohne Fundstelle: ${regel.fach} / ${regel.thema}`);
  if (!PRIORITAETEN[regel.stufe]) fehler.push(`Regel mit unbekannter Stufe: ${regel.thema}`);
  if (regel.fach !== "*" && !PRIORITAET_FAECHER[regel.fach]) fehler.push(`Regel mit unbekanntem Fach: ${regel.fach}`);
}
const schluessel = new Set(inhalte.map((e) => `${e.fach}:${e.typ}:${e.id}`));
for (const k of Object.keys(PRIORITAET_UEBERSCHREIBUNGEN)) {
  if (!schluessel.has(k)) fehler.push(`Überschreibung ohne Ziel: ${k}`);
}
const faecherMitInhalt = [...new Set(inhalte.map((e) => e.fach))];
for (const fach of faecherMitInhalt) {
  const liste = ergebnisse.filter((e) => e.fach === fach);
  if (!liste.some((e) => e.p.stufe === "hoch")) fehler.push(`Fach ${fach} ohne Dauerbrenner`);
}
const ohneTreffer = ergebnisse.filter((e) => !e.p.manuell && e.p.treffer.length === 0);

/* ---------------------------------------------------------------- Bericht */
const zaehl = (liste) => ({
  hoch: liste.filter((e) => e.p.stufe === "hoch").length,
  mittel: liste.filter((e) => e.p.stufe === "mittel").length,
  selten: liste.filter((e) => e.p.stufe === "selten").length,
});
const gesamt = zaehl(ergebnisse);
console.log(`Examensprioritäten: ${ergebnisse.length} Lerninhalte klassifiziert`);
console.log(`  🔴 hoch ${gesamt.hoch} · 🟠 mittel ${gesamt.mittel} · 🟢 selten ${gesamt.selten}`);
for (const fach of Object.keys(PRIORITAET_FAECHER)) {
  const liste = ergebnisse.filter((e) => e.fach === fach);
  if (!liste.length) continue;
  const z = zaehl(liste);
  console.log(`  ${fach.padEnd(7)} ${String(liste.length).padStart(4)}  🔴 ${String(z.hoch).padStart(3)}  🟠 ${String(z.mittel).padStart(3)}  🟢 ${String(z.selten).padStart(3)}`);
}
console.log(`  Regeln: ${PRIORITAET_REGELN.length} · Überschreibungen: ${Object.keys(PRIORITAET_UEBERSCHREIBUNGEN).length} · ohne Regeltreffer (Standard „selten“): ${ohneTreffer.length}`);

if (ARGS.has("--liste")) {
  for (const e of ergebnisse) {
    console.log(`${e.p.emoji} ${e.fach}|${e.typ}|${e.id}|${(e.obj.title || e.obj.titel || e.obj.frage || e.obj.begriff || "").slice(0, 90)}  ← ${e.p.thema}${e.p.manuell ? " (manuell)" : ""}`);
  }
}
if (ARGS.has("--offen")) {
  for (const e of ohneTreffer) console.log(`  ∅ ${e.fach}|${e.typ}|${e.id}|${(e.obj.title || e.obj.titel || e.obj.frage || e.obj.begriff || "")}`);
}

if (ARGS.has("--inventar")) {
  const typLabel = { modul: "Lernmodul", fall: "Originalfall", hausaufgabe: "Hausaufgabe", fallsammlung: "Fallsammlung", skript: "Skriptblock", schema: "Prüfschema", formel: "Rechenweg", karte: "Karteikarte", quiz: "Quizfrage", woche: "Lernwoche", glossar: "Glossar", schaubild: "Schaubild" };
  const zeilen = [];
  zeilen.push("# Examensprioritäten · Inventar aller Lerninhalte");
  zeilen.push("");
  zeilen.push("Automatisch erzeugt von `node tools/pruefen-examensprioritaet.mjs --inventar`. Nicht von Hand bearbeiten – Regeln und Überschreibungen liegen in `src/data/examensprioritaet.js`.");
  zeilen.push("");
  zeilen.push("## Legende");
  zeilen.push("");
  zeilen.push("| Marker | Stufe | Bedeutung |");
  zeilen.push("| --- | --- | --- |");
  for (const p of Object.values(PRIORITAETEN)) zeilen.push(`| ${p.emoji} | **${p.label}** (${p.kurz}) | ${p.text} |`);
  zeilen.push("");
  zeilen.push("Quellen: " + PRIORITAET_QUELLEN.map((q) => `[${q.id}] ${q.zitat}`).join(" · "));
  zeilen.push("");
  zeilen.push(`## Übersicht (${ergebnisse.length} Inhalte)`);
  zeilen.push("");
  zeilen.push("| Fach | Inhalte | 🔴 | 🟠 | 🟢 |");
  zeilen.push("| --- | ---: | ---: | ---: | ---: |");
  for (const fach of Object.keys(PRIORITAET_FAECHER)) {
    const liste = ergebnisse.filter((e) => e.fach === fach);
    if (!liste.length) continue;
    const z = zaehl(liste);
    zeilen.push(`| ${PRIORITAET_FAECHER[fach].label} | ${liste.length} | ${z.hoch} | ${z.mittel} | ${z.selten} |`);
  }
  zeilen.push(`| **Gesamt** | **${ergebnisse.length}** | **${gesamt.hoch}** | **${gesamt.mittel}** | **${gesamt.selten}** |`);
  zeilen.push("");
  const campusse = [...new Set(ergebnisse.map((e) => e.campus))];
  for (const campus of campusse) {
    zeilen.push(`## ${campus}`);
    zeilen.push("");
    const typen = [...new Set(ergebnisse.filter((e) => e.campus === campus).map((e) => e.typ))];
    for (const typ of typen) {
      const liste = ergebnisses(campus, typ);
      zeilen.push(`### ${typLabel[typ] || typ} (${liste.length})`);
      zeilen.push("");
      zeilen.push("| Prio | Kennung | Inhalt | Thema laut Auswertung | Befund | Quelle |");
      zeilen.push("| --- | --- | --- | --- | --- | --- |");
      for (const e of liste) {
        const titel = (e.obj.title || e.obj.titel || e.obj.frage || e.obj.begriff || "").replace(/\|/g, "/");
        zeilen.push(`| ${e.p.emoji} ${e.p.label} | ${e.id} | ${titel} | ${e.p.thema} | ${e.p.befund.replace(/\|/g, "/")} | ${e.p.fundstelle} |`);
      }
      zeilen.push("");
    }
  }
  function ergebnisses(campus, typ) { return ergebnisse.filter((e) => e.campus === campus && e.typ === typ); }
  const ziel = resolve(HERE, "../docs/examensprioritaet-inventar.md");
  writeFileSync(ziel, zeilen.join("\n") + "\n");
  console.log(`  Inventar geschrieben: ${ziel}`);
}

if (fehler.length) {
  console.error("\nFEHLER:");
  for (const f of fehler) console.error("  - " + f);
  process.exit(1);
}
console.log("OK");
