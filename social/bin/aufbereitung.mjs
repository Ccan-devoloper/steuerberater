#!/usr/bin/env node
/* ==========================================================================
   Werkzeug für die redaktionelle Aufbereitung (social/aufbereitung/*.json).

     node bin/aufbereitung.mjs offen <fach> [anzahl]   noch nicht aufbereitete
                                                       Abschnitte, wichtigste zuerst
     node bin/aufbereitung.mjs zeigen <abschnitt-id>   Quelltext eines Abschnitts
                                                       (nur zum Lesen, nie kopieren)
     node bin/aufbereitung.mjs pruefen [fach]          alle Einträge gegen die
                                                       Quellenregeln prüfen

   Maßstab ist social/QUELLENREGELN.md.
   ========================================================================== */

import { aufbereitungLaden, aufbereitungBefunde, skriptAbschnitte, SKRIPT_QUELLEN } from "../src/skripte.mjs";
import { aufbereitungPruefen } from "../src/aufbereitung-pruefung.mjs";
import { prioritaetFuer } from "../../src/data/examensprioritaet.js";

const [befehl, arg, anzahl] = process.argv.slice(2);
const RANG = { hoch: 3, mittel: 2, selten: 1 };

if (befehl === "offen") {
  if (!SKRIPT_QUELLEN[arg]) throw new Error("Fach unbekannt: " + arg + " (" + Object.keys(SKRIPT_QUELLEN).join(", ") + ")");
  const erledigt = new Set(aufbereitungLaden().map((e) => e.quelle));
  const offen = [...skriptAbschnitte()].filter(([id, x]) => x.fach === arg && !erledigt.has(id)).map(([id, x]) => {
    const a = x.abschnitt;
    const stufe = prioritaetFuer(arg === "umwst" ? "umwstg" : arg, { title: a.title, thema: a.thema, themen: a.themen, normen: a.normen }).stufe;
    const laenge = (a.bloecke || []).map((b) => b.text || "").join(" ").length;
    return { id, stufe, laenge, titel: a.title, thema: a.thema, normen: (a.normen || []).slice(0, 5) };
  }).filter((x) => x.laenge > 400).sort((a, b) => RANG[b.stufe] - RANG[a.stufe] || b.laenge - a.laenge);
  for (const x of offen.slice(0, Number(anzahl) || 40)) {
    console.log(`${x.id}\t[${x.stufe}]\t${x.titel}\n\t${String(x.thema || "").slice(0, 220)}\n\t${x.normen.join(" · ")}`);
  }
  console.log(`\n${offen.length} offene Abschnitte in ${arg}.`);
} else if (befehl === "zeigen") {
  const x = skriptAbschnitte().get(arg);
  if (!x) throw new Error("Abschnitt unbekannt: " + arg);
  const a = x.abschnitt;
  console.log(`# ${a.title}\nFach: ${x.fach} · Normen: ${(a.normen || []).join(" · ")}\nThema: ${a.thema}\nStichworte: ${(a.themen || []).join(", ")}\n`);
  for (const b of a.bloecke || []) {
    if (b.typ === "tabelle") console.log("[Tabelle] " + (b.spalten || []).join(" | ") + "\n" + (b.zeilen || []).map((z) => "  " + (Array.isArray(z) ? z.join(" | ") : JSON.stringify(z))).join("\n"));
    else console.log((b.typ === "titel" ? "## " : "") + (b.text || ""));
  }
} else if (befehl === "pruefen") {
  const eintraege = aufbereitungLaden().filter((e) => !arg || e.fach === arg);
  let fehlerhaft = 0;
  for (const e of eintraege) {
    const fehler = [...aufbereitungBefunde(e), ...aufbereitungPruefen(e)];
    if (fehler.length) {
      fehlerhaft++;
      console.log(`✗ ${e.fach} ${e.quelle}: ${e.titel}\n  - ${fehler.join("\n  - ")}`);
    }
  }
  console.log(`${eintraege.length} Einträge geprüft, ${fehlerhaft} mit Befund.`);
  process.exitCode = fehlerhaft ? 1 : 0;
} else {
  console.log("Befehle: offen <fach> [anzahl] | zeigen <id> | pruefen [fach]");
}
