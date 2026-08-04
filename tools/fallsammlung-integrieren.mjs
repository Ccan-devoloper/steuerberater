#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const repo = process.cwd();
const sourceBase = "https://raw.githubusercontent.com/Ccan-devoloper/steuernorm/main";
const zielmodule = new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38]);

async function ladeJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.json();
}

function zielFuer(meta, fall) {
  const id = fall.id;
  const text = `${fall.sachverhalt || ""}\n${fall.loesung || ""}`;
  const direkt = {
    "modul-03": 2,
    "modul-05": 3,
    "modul-06": 3,
    "modul-08": 5,
    "modul-10": 22,
    "modul-11": 5,
    "modul-12": 25,
    "modul-13": 5,
    "modul-14": 27,
    "modul-15": 27,
    "modul-17": 23,
    "modul-18": 23,
    "modul-19": 23,
    "modul-22": 31,
    "modul-23": 29,
  };
  if (direkt[meta.id]) return { zielmodul_id: direkt[meta.id] };

  if (meta.id === "modul-01") {
    if (id === "m01-f02") return { zielmodul_id: 24 };
    if (id === "m01-f04") return { zielmodul_id: 23 };
    return { offen_grund: "Kein vorhandenes Lernmodul behandelt selbst geschaffene immaterielle Vermögensgegenstände und Aktivierungsverbote hinreichend spezifisch." };
  }
  if (meta.id === "modul-02") {
    if (["m02-f01", "m02-f02", "m02-f03"].includes(id)) return { zielmodul_id: 30 };
    return { offen_grund: "Der Fall betrifft Anzahlungen beziehungsweise eine gemischte Vorrats- und Verbrauchsteuerfrage; ein eindeutig einschlägiges Lernmodul fehlt." };
  }
  if (meta.id === "modul-04") return { offen_grund: "Ein eigenes Lernmodul zu Einlagen und Entnahmen ist noch nicht vorhanden." };
  if (meta.id === "modul-07") return { offen_grund: "Ein eigenes Lernmodul zur Abziehbarkeit von Schuldzinsen ist noch nicht vorhanden." };
  if (meta.id === "modul-09") {
    if (id === "m09-f04" || /Investitionsabzugsbetrag|\bIAB\b|§\s*7g/i.test(text)) return { zielmodul_id: 8 };
    return { zielmodul_id: 23 };
  }
  if (meta.id === "modul-16") return { offen_grund: "Ein Lernmodul zu Bewertungseinheiten nach § 254 HGB ist noch nicht vorhanden." };
  if (meta.id === "modul-20") {
    if (id === "m20-f01") return { zielmodul_id: 26 };
    if (id === "m20-f02") return { zielmodul_id: 7 };
    if (id === "m20-f03") return { zielmodul_id: 37 };
  }
  if (meta.id === "modul-21") {
    if (id === "m21-f01") return { zielmodul_id: 16 };
    if (/§\s*6\s*b/i.test(text)) return { zielmodul_id: 7 };
    return { zielmodul_id: 14 };
  }
  if (meta.id === "modul-24") return { offen_grund: "Ein Lernmodul zu Verpflichtungsübernahme, Schuldbeitritt und Erfüllungsübernahme ist noch nicht vorhanden." };
  if (meta.id === "modul-25") return { offen_grund: "Ein eigenes Lernmodul zu latenten Steuern ist noch nicht vorhanden." };
  return { offen_grund: `Für den Themenblock „${meta.titel}“ wurde kein eindeutig einschlägiges Lernmodul gefunden.` };
}

const index = await ladeJson(`${sourceBase}/faelle/index.json`);
const zugeordnet = [];
const offen = [];
for (const meta of index.module) {
  const daten = await ladeJson(`${sourceBase}/${meta.datei}`);
  for (const fall of daten.faelle || []) {
    const basis = { ...fall, quellmodul_id: meta.id, quellmodul: meta.titel };
    const entscheidung = zielFuer(meta, fall);
    if (entscheidung.zielmodul_id) {
      if (!zielmodule.has(entscheidung.zielmodul_id)) throw new Error(`Ungültiges Zielmodul ${entscheidung.zielmodul_id} für ${fall.id}`);
      zugeordnet.push({ ...basis, zielmodul_id: entscheidung.zielmodul_id });
    } else {
      offen.push({ ...basis, offen_grund: entscheidung.offen_grund });
    }
  }
}

const alle = [...zugeordnet, ...offen];
if (alle.length !== 90) throw new Error(`Erwartet 90 Quellfälle, gefunden ${alle.length}`);
if (new Set(alle.map((fall) => fall.id)).size !== 90) throw new Error("Doppelte Fall-ID gefunden");
for (const fall of alle) {
  if (!String(fall.sachverhalt || "").trim()) throw new Error(`Leerer Sachverhalt: ${fall.id}`);
  if (!String(fall.loesung || "").trim()) throw new Error(`Leere Lösung: ${fall.id}`);
}

const gruppen = {};
for (const fall of zugeordnet) (gruppen[fall.zielmodul_id] ||= []).push(fall);
for (const liste of Object.values(gruppen)) liste.sort((a, b) => a.id.localeCompare(b.id, "de"));
offen.sort((a, b) => a.id.localeCompare(b.id, "de"));

fs.writeFileSync("src/data/fallsammlung.js",
`// Automatisch aus der bereitgestellten Fallsammlung übernommen. Sachverhalte und Lösungen sind unverändert.\nexport const faelleNachModul = ${JSON.stringify(gruppen, null, 2)};\n\nexport const zugeordneteFaelle = Object.values(faelleNachModul).flat();\n\nexport const fallsammlungMeta = ${JSON.stringify({ gesamt: 90, zugeordnet: zugeordnet.length, offen: offen.length, quelle: "Fallsammlung Bilanzierung nach Handels- und Steuerrecht, April 2026" }, null, 2)};\n`);
fs.writeFileSync("src/data/faelle-offen.js",
`// Noch keinem bestehenden Lernmodul eindeutig zuordenbare Fälle. Nicht in der Oberfläche eingebunden.\nconst offeneFaelle = ${JSON.stringify(offen, null, 2)};\nexport default offeneFaelle;\n`);

let moduleText = fs.readFileSync("src/data/module.js", "utf8");
if (!moduleText.includes("faelleNachModul")) {
  moduleText = moduleText.replace(
    'import faelle from "./modules-faelle"; // unveränderte Fallsammlung aus den Kursmitschriften',
    'import faelle from "./modules-faelle"; // unveränderte Fallsammlung aus den Kursmitschriften\nimport { faelleNachModul } from "./fallsammlung";'
  );
  moduleText = moduleText.replace(
    /export const module = (\[[^\n]+\]);/,
    'const grundmodule = $1;\nexport const module = grundmodule.map((m) => ({\n  ...m,\n  fallsammlung: faelleNachModul[m.id] || [],\n}));'
  );
}
if (!moduleText.includes("const grundmodule")) throw new Error("module.js konnte nicht erweitert werden");
fs.writeFileSync("src/data/module.js", moduleText);

fs.writeFileSync("src/components/Fallsammlungsfaelle.jsx", `import React from "react";

const text = (wert) => Array.isArray(wert) ? wert.join("\\n\\n") : String(wert || "");

export default function Fallsammlungsfaelle({ faelle }) {
  return (
    <div className="fallsammlung">
      {faelle.map((fall) => (
        <article className="fallsammlung__fall" key={fall.id}>
          <header className="fallsammlung__kopf">
            <div>
              <span className="kicker">{fall.quellmodul} · {fall.titel}</span>
              <h3>{fall.quellmodul} – {fall.titel}</h3>
            </div>
            <code>{fall.id}</code>
          </header>
          <section className="fallsammlung__sachverhalt">
            <h4>Sachverhalt</h4>
            <div className="fallsammlung__text">{text(fall.sachverhalt)}</div>
          </section>
          <details className="fallsammlung__loesung">
            <summary>Lösung anzeigen</summary>
            <div className="fallsammlung__loesungsinhalt">
              <h4>Lösung</h4>
              <div className="fallsammlung__text">{text(fall.loesung)}</div>
            </div>
          </details>
          <footer>Fallsammlung S. {fall.quelle?.fall_seite ?? "–"} · Lösung S. {fall.quelle?.loesung_seite ?? "–"}</footer>
        </article>
      ))}
    </div>
  );
}
`);

let app = fs.readFileSync("src/App.jsx", "utf8");
if (!app.includes('import Fallsammlungsfaelle')) {
  app = app.replace(
    'import Schaubild from "./components/Schaubild";',
    'import Schaubild from "./components/Schaubild";\nimport Fallsammlungsfaelle from "./components/Fallsammlungsfaelle";'
  );
}
if (!app.includes("const falltext =")) {
  app = app.replace(
    'const heu = [m.title, m.law, m.merksatz, (m.normchain || []).join(" "), (m.intro || []).join(" ")]\n        .join(" ")',
    'const falltext = (m.fallsammlung || []).flatMap((fall) => [fall.titel, fall.quellmodul, fall.sachverhalt, fall.loesung]).join(" ");\n      const heu = [m.title, m.law, m.merksatz, (m.normchain || []).join(" "), (m.intro || []).join(" "), falltext]\n        .join(" ")'
  );
}
if (!app.includes('label="Fallsammlung"')) {
  const marker = "      {m.hbstb && (";
  const abschnitt = `      {m.fallsammlung?.length > 0 && (
        <Tz nummer={n()} label="Fallsammlung" titel="Fälle & Lösungen" art="bewertung">
          <p>Die folgenden Fälle sind ausschließlich diesem fachlich einschlägigen Lernmodul zugeordnet. Der Sachverhalt ist direkt sichtbar; die Lösung lässt sich einzeln öffnen.</p>
          <Fallsammlungsfaelle faelle={m.fallsammlung} />
        </Tz>
      )}

`;
  if (!app.includes(marker)) throw new Error("Einfügemarke in App.jsx fehlt");
  app = app.replace(marker, abschnitt + marker);
}
if (!app.includes("Fallsammlungsfaelle") || !app.includes("const falltext =")) throw new Error("App.jsx wurde nicht vollständig erweitert");
fs.writeFileSync("src/App.jsx", app);

let css = fs.readFileSync("src/index.css", "utf8");
if (!css.includes("Fallsammlung · modulbezogene Fälle")) {
  css += `

/* Fallsammlung · modulbezogene Fälle */
.fallsammlung { display: grid; gap: 22px; margin-top: 22px; }
.fallsammlung__fall { border: 1px solid var(--linie); background: var(--papier); }
.fallsammlung__kopf { display: flex; justify-content: space-between; gap: 20px; align-items: flex-start; padding: 18px 20px; border-bottom: 1px solid var(--linie-fein); }
.fallsammlung__kopf h3 { margin-top: 5px; font-size: 1.12rem; }
.fallsammlung__kopf code { color: var(--ink-weich); font-family: var(--mono); font-size: .75rem; white-space: nowrap; }
.fallsammlung__sachverhalt { padding: 20px; }
.fallsammlung__sachverhalt h4, .fallsammlung__loesungsinhalt h4 { margin: 0 0 10px; color: var(--tinte-dunkel); }
.fallsammlung__text { white-space: pre-wrap; overflow-wrap: anywhere; }
.fallsammlung__loesung { border-top: 1px solid var(--linie-fein); background: var(--tinte-feld); }
.fallsammlung__loesung summary { cursor: pointer; padding: 14px 20px; font-weight: 700; color: var(--tinte-dunkel); }
.fallsammlung__loesungsinhalt { padding: 4px 20px 22px; }
.fallsammlung__fall footer { padding: 10px 20px; border-top: 1px solid var(--linie-fein); color: var(--ink-weich); font-family: var(--mono); font-size: .72rem; }
@media (max-width: 640px) { .fallsammlung__kopf { display: block; } .fallsammlung__kopf code { display: inline-block; margin-top: 10px; } }
`;
}
fs.writeFileSync("src/index.css", css);

fs.writeFileSync("tools/pruefen-fallsammlung.mjs", `#!/usr/bin/env node
import { faelleNachModul, zugeordneteFaelle, fallsammlungMeta } from "../src/data/fallsammlung.js";
import offeneFaelle from "../src/data/faelle-offen.js";

const zielmodule = new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38]);
const alle = [...zugeordneteFaelle, ...offeneFaelle];
const fehler = [];
if (alle.length !== 90) fehler.push(\`90 Fälle erwartet, gefunden \${alle.length}\`);
if (fallsammlungMeta.gesamt !== 90) fehler.push(\`Meta-Gesamtzahl ist \${fallsammlungMeta.gesamt}\`);
const ids = new Set();
for (const fall of alle) {
  if (ids.has(fall.id)) fehler.push(\`Doppelte ID \${fall.id}\`);
  ids.add(fall.id);
  if (!String(fall.sachverhalt || "").trim()) fehler.push(\`Leerer Sachverhalt \${fall.id}\`);
  if (!String(fall.loesung || "").trim()) fehler.push(\`Leere Lösung \${fall.id}\`);
}
for (const [modulId, faelle] of Object.entries(faelleNachModul)) {
  if (!zielmodule.has(Number(modulId))) fehler.push(\`Ungültiges Zielmodul \${modulId}\`);
  for (const fall of faelle) if (fall.zielmodul_id !== Number(modulId)) fehler.push(\`Falsche Gruppierung \${fall.id}\`);
}
for (const fall of offeneFaelle) if (!String(fall.offen_grund || "").trim()) fehler.push(\`Offener Fall ohne Grund \${fall.id}\`);
if (zugeordneteFaelle.length + offeneFaelle.length !== 90) fehler.push("Zugeordnete und offene Fälle ergeben nicht 90");
if (fehler.length) { console.error(fehler.join("\\n")); process.exit(1); }
console.log(\`Fallsammlung geprüft: \${zugeordneteFaelle.length} zugeordnet · \${offeneFaelle.length} offen · 90 gesamt\`);
console.log("Betroffene Lernmodule:", Object.entries(faelleNachModul).map(([id, f]) => \`\${id}:\${f.length}\`).join(" · "));
`);

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
pkg.scripts["check:fallsammlung"] = "node tools/pruefen-fallsammlung.mjs";
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");

if (fs.existsSync("docs")) {
  for (const eintrag of fs.readdirSync("docs", { withFileTypes: true })) {
    if (eintrag.isFile() && (eintrag.name.startsWith("fallsammlung-") || eintrag.name === ".keep")) fs.rmSync(path.join("docs", eintrag.name));
  }
}

console.log(`Übernommen: ${zugeordnet.length} zugeordnet · ${offen.length} offen · 90 gesamt`);
console.log("Offene Fälle:", offen.map((fall) => `${fall.id} (${fall.quellmodul})`).join(", "));
