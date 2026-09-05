/* ==========================================================================
   Autor: schreibt Beiträge und Stories mit der Claude API.

   Eingabe: ein Themen-Skelett aus inhalte.mjs (Titel, Normen, Prüfgedanken)
   Ausgabe: fertiger Beitrag (Folien, Caption, Hashtags) bzw. Stories – als
   strukturiertes JSON, das render.mjs direkt versteht.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.mjs";
import { FAECHER, KLAUSUREN } from "./inhalte.mjs";
import { ICONS } from "./stile.mjs";
import { folieLeer, pruefeBeitrag, korpus } from "./pruefung.mjs";
import { datumLesbar, tageBis } from "./zeit.mjs";
import { erfassen } from "./kosten.mjs";
import { pruefeFakten } from "./faktencheck.mjs";
import { hookTyp } from "./insights.mjs";
import { phase } from "./kalender.mjs";

const hier = path.dirname(fileURLToPath(import.meta.url));
const beispiele = JSON.parse(fs.readFileSync(path.resolve(hier, "../beispiele/inhalte.json"), "utf8"));
const beispielReel = JSON.parse(fs.readFileSync(path.resolve(hier, "../beispiele/reel.json"), "utf8"));

let clientCache = null;
function client() {
  if (!clientCache) clientCache = new Anthropic({ maxRetries: 3, timeout: 10 * 60 * 1000 });
  return clientCache;
}

/* Beitragsformate – was der Autor je Format bauen soll. */
export const FORMATE = {
  pruefungsfrage: {
    label: "Prüfungsfrage",
    anleitung: "Folie 1: eine echte Prüfungsfrage als Aufhänger (so, wie sie in der Klausur oder mündlichen Prüfung fallen könnte). Folien 2–4: die Antwort in klaren Schritten oder Punkten mit den tragenden Normen. Vorletzte Folie: Merksatz. Letzte Folie: CTA.",
    folien: ["titel", "text|schritte", "text|vergleich", "merke", "cta"],
  },
  fehlerfalle: {
    label: "Fehlerfalle",
    anleitung: "Folie 1: die Falle als Frage oder Warnung. Folie 2: Vergleich „Richtig“ (links) vs. „Klassischer Fehler“ (rechts). Folie 3: die Begründung mit Norm. Letzte Folie: CTA.",
    folien: ["titel", "vergleich", "text", "cta"],
  },
  schema: {
    label: "Prüfschema",
    anleitung: "Folie 1: „Wie prüfe ich …?“. Folie 2 (und ggf. 3): das Schema als nummerierte Schritte, je Schritt ein Titel und ein knapper Hinweis, ggf. Norm. Folie danach: worauf Korrektoren achten (Punkte). Letzte Folie: CTA. Das Schema muss eigenständig strukturiert sein – nicht die Gliederung eines Lehrbuchs oder Skripts abbilden.",
    folien: ["titel", "schritte", "schritte|text", "merke", "cta"],
  },
  rechenweg: {
    label: "Rechenweg",
    anleitung: "Folie 1: die Frage, die der Rechenweg beantwortet. Folie 2: Rechnung mit Formel, einem eigenen Zahlenbeispiel (runde, frei gewählte Zahlen) und Ergebnissatz. Folie 3: die Logik dahinter in Punkten. Letzte Folie: CTA.",
    folien: ["titel", "rechnung", "text", "cta"],
  },
  minifall: {
    label: "Mini-Fall",
    anleitung: "Folie 1: die Frage, die der Fall aufwirft (Aufhänger, gern mit der Kernzahl). Folie 2 (art text, Titel „Sachverhalt“): der frei erfundene Fall in 2–4 Sätzen – eigene Namen, eigene Zahlen, alles, was die Lösung später braucht, steht hier. Folie 3: die Lösung in Schritten. Folie 4: Ergebnis und Buchung/Gewinnauswirkung bzw. Rechtsfolge als Punkte oder Rechnung. Vorletzte Folie: Merksatz. Letzte Folie: CTA.",
    folien: ["titel", "text", "schritte", "text|rechnung", "merke", "cta"],
  },
  vergleich: {
    label: "Gegenüberstellung",
    anleitung: "Folie 1: „Was ist der Unterschied zwischen A und B?“. Folie 2: Vergleich in zwei Spalten. Folie 3: Wann welche Seite greift, mit Norm. Vorletzte Folie: Merksatz. Letzte Folie: CTA.",
    folien: ["titel", "vergleich", "text", "merke", "cta"],
  },
  klausurtechnik: {
    label: "Klausurtechnik",
    anleitung: "Folie 1: eine Frage zur Klausurstrategie (Zeit, Aufbau, Darstellung, Punktevergabe). Folien 2–3: konkrete, umsetzbare Tipps als Punkte oder Schritte. Vorletzte Folie: Merksatz. Letzte Folie: CTA.",
    folien: ["titel", "schritte", "text", "merke", "cta"],
  },
  wochenrueckblick: {
    label: "Wochenrückblick",
    anleitung: "Folie 1: „Hast du diese Woche alles mitgenommen?“. Folien 2–3: die Themen der Woche als Kurz-Wiederholung in Punkten (je ein Satz pro Thema, mit Norm). Folie 4: Lernplan-Tipp fürs Wochenende. Letzte Folie: CTA.",
    folien: ["titel", "text", "text", "merke", "cta"],
  },
  spickzettel: {
    label: "Spickzettel",
    anleitung: "Folie 1: „Das ganze Schema auf einer Karte“ als Frage/Versprechen. Folie 2 (art karte): der komplette Prüfungsaufbau als dichte, nummerierte Karte – 5–8 Schritte mit je maximal 8 Wörtern und Norm. Folie 3: die zwei Stellen, an denen die meisten Punkte verloren gehen (Punkte). Vorletzte Folie: Merksatz. Letzte Folie: CTA mit dem Hinweis „Kommentiere SCHEMA, dann schicke ich dir die Karte als Nachricht“. Diese Karte muss so gut sein, dass man sie speichert.",
    folien: ["titel", "karte", "text", "merke", "cta"],
  },
  anlass: {
    label: "Anlass",
    anleitung: "Ein Beitrag zu einem Termin im Prüfungsjahr (Countdown, Anmeldeschluss, Prüfungstag, Tag danach). Folie 1: der Anlass als Schlagzeile mit Zahl oder Datum. Folien 2–3: was jetzt konkret zu tun ist (Schritte oder Punkte), fachlich unterlegt mit einem passenden Kernthema. Vorletzte Folie: Merksatz/Ermutigung. Letzte Folie: CTA. Ton: nah dran, ermutigend, ohne Kitsch.",
    folien: ["titel", "schritte", "text", "merke", "cta"],
  },
  aktuell: {
    label: "Aktuell",
    anleitung: "Folie 1: die Neuigkeit als Frage oder Schlagzeile (Gesetzesänderung, BFH-Urteil, BMF-Schreiben, Prüfungstermine, Statistik). Folie 2: was genau passiert ist, in Punkten mit Datum/Aktenzeichen. Folie 3: was das fürs Examen bedeutet. Letzte Folie: CTA. Die Quelle wird in der Caption genannt (Gericht/Behörde, Datum, Aktenzeichen oder Dokumentname).",
    folien: ["titel", "text", "text", "cta"],
  },
};

const KANAL = CONFIG.marke.name ? `des Instagram-Kanals „${CONFIG.marke.name}“` : "eines Instagram-Kanals";
const SYSTEM = `Du bist Redakteur:in ${KANAL} für Menschen, die sich auf das deutsche Steuerberaterexamen vorbereiten (schriftliche Prüfung: Tag 1 Verfahrensrecht/USt/ErbSt, Tag 2 Ertragsteuern, Tag 3 Buchführung und Bilanzwesen). Vorbild ist der Aufbau erfolgreicher juristischer Lernkanäle: eine präzise Prüfungsfrage als Aufhänger, dann eine klare, prüfungsnahe Antwort zum Durchswipen.

## Ton
- Direkt, fachlich präzise, kein Marketing-Sprech, kein Pathos. Du-Ansprache.
- Jede Aussage muss juristisch korrekt sein (Rechtsstand 2026). Normen immer zitieren (§, Abs., Satz, Nr., Gesetz). Wenn du dir bei einem Detail nicht sicher bist, lass es weg, statt zu raten.
- Kurze Sätze. Auf einer Kachel wird gelesen, nicht studiert.
- Keine Emojis auf den Folien. In der Caption höchstens 3.

## Eigenständigkeit (sehr wichtig)
- Du bekommst ein Themen-Skelett aus einer Lernplattform. Formuliere ALLES neu, in eigenen Worten und eigener Struktur. Übernimm keine Sätze, keine Aufzählungsreihenfolgen, keine Beispielzahlen.
- Fälle, Beispiele, Namen und Zahlen erfindest du selbst (z. B. „Malerbetrieb Roth“, „die Nordlicht GmbH“). Verwende nie Namen aus der Sperrliste.
- Keine Bezüge auf Kurse, Skripte, Seiten, Folien, Fallnummern, Dozenten oder Lernplattformen.

## Innere Logik (sehr wichtig)
- Der Beitrag muss aus sich heraus verständlich sein: Jede Zahl, jeder Name, jeder Fall, auf den Titel, Rechnung oder Lösung Bezug nehmen, wird vorher auf einer eigenen Folie eingeführt (z. B. Folie „Sachverhalt“). Nie auf etwas verweisen, das nicht auf den Folien steht.
- Jede Folie außer der CTA hat einen Titel UND Inhalt (Text, Punkte, Schritte, Rechnung). Nie eine leere Folie, nie nur eine Überschrift.
- Genau eine CTA-Folie, und zwar als letzte. Folie 1 ist die einzige Titelfolie.

## Form
- Folienarten: titel (Frage/Aufhänger), text (Titel + Text oder Punkte), schritte (nummeriert, je Schritt titel + text), vergleich (links/rechts mit titel + punkte), rechnung (formel, zeilen, ergebnis), karte (dichter Spickzettel: schritte mit kurzem titel + norm im text), merke (ein Satz, der hängen bleibt), cta (Abschluss mit Folgen-Aufforderung).
- hooks: drei alternative Titel für Folie 1 in unterschiedlichen Typen – eine Frage, ein Fehler-/Falle-Hook („Der Fehler, der … kostet“), ein Zahlen-Hook (Frist, Prozentsatz, Betrag). Folie 1 trägt den besten davon.
- Die erste Zeile der Caption ist gleichzeitig Suchtext: Sie nennt das Thema mit den Wörtern, die jemand bei Instagram oder Google eintippen würde (z. B. „Teilwertabschreibung Steuerbilanz Voraussetzungen“), natürlich eingebettet in den Hook.
- Folie-1-Titel: eine Frage, ideal 45–80 Zeichen, maximal 100. Andere Titel maximal 60 Zeichen.
- Je Folie maximal 5 Punkte / 5 Schritte, insgesamt maximal 380 Zeichen Text je Folie; bei „vergleich“ je Spalte maximal 3 Punkte à 60 Zeichen.
- Kernaussagen und Merksätze aus dem Skelett NIE übernehmen, auch nicht leicht umgestellt – schreibe einen eigenen Merksatz mit anderem Satzbau und anderen Wörtern.
- Hervorhebungen mit *Sternchen* um das Wort – sparsam, ein bis zwei je Folie.
- icon: genau einer aus: ${Object.keys(ICONS).join(", ")}.
- Caption: 4–8 Zeilen. Zeile 1 ist der Hook (die Frage oder die Pointe), dann die Kernantwort in 2–4 Sätzen, dann eine Aufforderung zum Speichern, Folgen oder Kommentieren – am besten eine echte Frage an die Leser:innen, die eine Antwort im Kommentar provoziert. ${CONFIG.marke.website ? `Am Ende darf ein Hinweis „Mehr auf ${CONFIG.marke.website} (Link in Bio)“ stehen.` : "Keine Website, keine Plattform, kein Produkt erwähnen – auch nicht „Link in Bio“."} Keine Hashtags in der Caption; die kommen separat.
- Hashtags: 8–14 Stück, deutsch, kleingeschrieben, spezifisch zum Thema plus diese Kernhashtags: ${CONFIG.hashtags.kern.join(" ")}.
- kurztitel: 3–6 Wörter für die Story-Ankündigung.

## Beispiel eines fertigen Beitrags (Format Prüfungsfrage)
${JSON.stringify({ folien: beispiele.beitraege[0].folien, caption: beispiele.beitraege[0].caption, hashtags: beispiele.beitraege[0].hashtags, kurztitel: "Teilwert-AfA: Pflicht oder Wahlrecht?" }, null, 1)}

## Beispiel eines fertigen Beitrags (Format Fehlerfalle)
${JSON.stringify({ folien: beispiele.beitraege[1].folien, caption: beispiele.beitraege[1].caption, hashtags: beispiele.beitraege[1].hashtags, kurztitel: "Anzahlung: Wann entsteht die USt?" }, null, 1)}

## Beispiel eines fertigen Beitrags (Format Rechenweg)
${JSON.stringify({ folien: beispiele.beitraege[2].folien, caption: beispiele.beitraege[2].caption, hashtags: beispiele.beitraege[2].hashtags, kurztitel: "Zinsstaffel beim Disagio" }, null, 1)}

## Beispiel-Stories (Ton und Länge)
${JSON.stringify(beispiele.stories, null, 1)}

## Beispiel eines Reel-Skripts (Ton fürs Sprechen)
${JSON.stringify(beispielReel.szenen, null, 1)}
`;

const FOLIE_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    art: { type: "string", enum: ["titel", "text", "schritte", "vergleich", "rechnung", "karte", "merke", "cta"] },
    titel: { type: ["string", "null"] },
    untertitel: { type: ["string", "null"] },
    text: { type: ["string", "null"] },
    punkte: { type: ["array", "null"], items: { type: "string" } },
    schritte: { type: ["array", "null"], items: { type: "object", additionalProperties: false, properties: { titel: { type: "string" }, text: { type: ["string", "null"] } }, required: ["titel", "text"] } },
    links: { type: ["object", "null"], additionalProperties: false, properties: { titel: { type: "string" }, punkte: { type: "array", items: { type: "string" } } }, required: ["titel", "punkte"] },
    rechts: { type: ["object", "null"], additionalProperties: false, properties: { titel: { type: "string" }, punkte: { type: "array", items: { type: "string" } } }, required: ["titel", "punkte"] },
    formel: { type: ["string", "null"] },
    zeilen: { type: ["array", "null"], items: { type: "string" } },
    ergebnis: { type: ["string", "null"] },
    icon: { type: ["string", "null"] },
  },
  required: ["art", "titel", "untertitel", "text", "punkte", "schritte", "links", "rechts", "formel", "zeilen", "ergebnis", "icon"],
};

const BEITRAG_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    folien: { type: "array", items: FOLIE_SCHEMA },
    caption: { type: "string" },
    hashtags: { type: "array", items: { type: "string" } },
    kurztitel: { type: "string" },
    quellen: { type: ["array", "null"], items: { type: "string" } },
    hooks: { type: ["array", "null"], items: { type: "object", additionalProperties: false, properties: { typ: { type: "string", enum: ["frage", "fehler", "zahl", "aussage"] }, titel: { type: "string" } }, required: ["typ", "titel"] } },
  },
  required: ["folien", "caption", "hashtags", "kurztitel", "quellen", "hooks"],
};

const STORY_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    stories: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          slot: { type: "string" },
          art: { type: "string", enum: ["frage", "antwort", "norm", "merksatz", "formel", "begriff", "fehler", "tipp", "zahl"] },
          ueberzeile: { type: ["string", "null"] },
          titel: { type: ["string", "null"] },
          text: { type: ["string", "null"] },
          norm: { type: ["string", "null"] },
          formel: { type: ["string", "null"] },
          zahl: { type: ["string", "null"] },
          optionen: { type: ["array", "null"], items: { type: "string" } },
          richtig: { type: ["integer", "null"] },
          falsch: { type: ["string", "null"] },
          richtigText: { type: ["string", "null"] },
          icon: { type: ["string", "null"] },
        },
        required: ["slot", "art", "ueberzeile", "titel", "text", "norm", "formel", "zahl", "optionen", "richtig", "falsch", "richtigText", "icon"],
      },
    },
  },
  required: ["stories"],
};

function textAus(response) {
  return response.content.filter((b) => b.type === "text").map((b) => b.text).join("\n");
}

function jsonAus(text) {
  const start = text.indexOf("{");
  const ende = text.lastIndexOf("}");
  if (start < 0 || ende < 0) throw new Error("Keine JSON-Antwort erhalten");
  return JSON.parse(text.slice(start, ende + 1));
}

/* Ein strukturierter Aufruf. Fällt bei Ablehnung oder Schema-Problemen auf
   einen zweiten Weg zurück, damit der Tageslauf nicht stehen bleibt. */
async function strukturiert({ system, user, schema, modell = CONFIG.ki.modell, effort = CONFIG.ki.effort }) {
  const basis = {
    model: modell,
    max_tokens: 16000,
    system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: user }],
    thinking: { type: "adaptive" },
    output_config: { effort, format: { type: "json_schema", schema } },
  };
  let response;
  try {
    response = await client().messages.create(basis);
  } catch (e) {
    if (e instanceof Anthropic.BadRequestError && /output_config|schema|format/i.test(e.message)) {
      const { output_config, ...ohneFormat } = basis;
      response = await client().messages.create({ ...ohneFormat, output_config: { effort }, messages: [{ role: "user", content: `${user}\n\nAntworte ausschließlich mit einem JSON-Objekt nach diesem Schema:\n${JSON.stringify(schema)}` }] });
    } else throw e;
  }
  erfassen(modell, response.usage, "autor");
  if (response.stop_reason === "refusal") {
    if (modell !== "claude-opus-4-8") return strukturiert({ system, user, schema, modell: "claude-opus-4-8", effort });
    throw new Error(`Modell hat abgelehnt: ${response.stop_details?.explanation || "ohne Begründung"}`);
  }
  if (response.stop_reason === "max_tokens") throw new Error("Antwort abgeschnitten (max_tokens)");
  return { daten: jsonAus(textAus(response)), usage: response.usage };
}

function themaText(thema) {
  const f = FAECHER[thema.fach];
  const k = thema.kern;
  const zeilen = [
    `Fach: ${f.label} (${KLAUSUREN[f.klausur].label})`,
    `Thema: ${thema.titel}`,
    `Examenspriorität: ${thema.prioritaet === "hoch" ? "Dauerbrenner (nahezu jährlich geprüft)" : thema.prioritaet === "mittel" ? "regelmäßig geprüft" : "selten geprüft, aber punktestark"}`,
    thema.normen.length ? `Normen: ${thema.normen.join(" · ")}` : "",
  ];
  if (k.einordnung?.length) zeilen.push(`Einordnung (nur als Gedankenstütze, nicht übernehmen): ${k.einordnung.join(" ")}`);
  if (k.lernziele?.length) zeilen.push(`Worauf es ankommt: ${k.lernziele.join("; ")}`);
  if (k.pruefschritte?.length) zeilen.push(`Prüfgedanken (Reihenfolge und Wortlaut selbst neu aufbauen): ${k.pruefschritte.join(" | ")}`);
  if (k.merksatz) zeilen.push(`Kernaussage: ${k.merksatz}`);
  if (k.fehler?.length) zeilen.push(`Typische Fehler: ${k.fehler.join("; ")}`);
  if (k.frage) zeilen.push(`Frage: ${k.frage}`, `Antwortkern: ${k.antwort || ""}`);
  if (k.optionen) zeilen.push(`Quiz-Optionen: ${k.optionen.join(" / ")} – richtig: ${k.optionen[k.richtig]} – Erklärung: ${k.erklaerung}`);
  if (k.ausdruck) zeilen.push(`Formel: ${k.ausdruck} – ${k.erklaerung}`);
  if (k.begriff) zeilen.push(`Definition: ${k.definition}`);
  if (k.schritte?.length) zeilen.push(`Schema-Gedanken: ${k.schritte.join(" | ")}`);
  return zeilen.filter(Boolean).join("\n");
}

function prioritaetText(stufe) {
  return { hoch: "Dauerbrenner im Examen", mittel: "Regelmäßig geprüft", selten: "Seltener, aber punktestark" }[stufe] || "";
}

/* Nachbearbeitung: leere Felder entfernen, Titelfolie normieren, Hashtags säubern. */
/* Besten Hook wählen: gelernte Gewichte je Hook-Typ, sonst Heuristik (Länge, Frageform). */
function hookWaehlen(daten, strategie) {
  const kandidaten = [...(daten.hooks || [])];
  const erster = daten.folien?.[0]?.titel;
  if (erster && !kandidaten.some((h) => h.titel === erster)) kandidaten.unshift({ typ: hookTyp(erster), titel: erster });
  if (!kandidaten.length) return null;
  const g = strategie?.hookGewicht || {};
  const bewertet = kandidaten.map((h) => {
    const l = h.titel.length;
    let p = (g[h.typ] ?? 1) * 10;
    if (l >= 45 && l <= 80) p += 3; else if (l > 100) p -= 4;
    if (/\d/.test(h.titel)) p += 1;
    if (/\?$/.test(h.titel.trim())) p += 1;
    return { ...h, p };
  }).sort((a, b) => b.p - a.p);
  return bewertet[0];
}

function nachbereiten(daten, { format, thema, fach, klausur, strategie }) {
  const hook = hookWaehlen(daten, strategie);
  if (hook && daten.folien?.[0]) daten.folien[0].titel = hook.titel;
  const folien = (daten.folien || []).map((f) => {
    const o = {};
    for (const [k, v] of Object.entries(f)) if (v != null && !(Array.isArray(v) && v.length === 0)) o[k] = v;
    return o;
  });
  /* Sicherheitsnetz gegen leere Kacheln: Inhaltslose Folien fallen weg, mehrere
     CTA-Folien werden auf die letzte reduziert. Ein Sachverhalt, der auf der
     Titelfolie steckt (dort wird kein Fließtext gezeigt), bekommt eine eigene Folie. */
  if (folien[0]?.text && String(folien[0].text).trim().length >= 40) {
    folien.splice(1, 0, { art: "text", titel: /fall|sachverhalt/i.test(`${format} ${folien[0].untertitel || ""}`) ? "Sachverhalt" : "Worum es geht", text: folien[0].text, icon: folien[0].icon });
    delete folien[0].text;
  }
  for (let i = folien.length - 1; i >= 1; i--) {
    const f = folien[i];
    if (f.art === "titel") f.art = "text";
    if (f.art === "cta" ? folien.slice(i + 1).some((x) => x.art === "cta") : folieLeer(f)) folien.splice(i, 1);
  }
  if (folien[0]) {
    folien[0].art = "titel";
    folien[0].pille = "Swipen →";
    if (thema?.prioritaet) { folien[0].prioritaet = thema.prioritaet; folien[0].prioritaetText = prioritaetText(thema.prioritaet); }
    if (!ICONS[folien[0].icon]) folien[0].icon = "paragraf";
  }
  if (folien.at(-1)?.art !== "cta") folien.push({ art: "cta", titel: "Jeden Tag eine Prüfungsfrage.", punkte: ["Folgen für alle drei Klausuren", "Speichern und vor der Klausur wiederholen", "Welches Thema fehlt dir? Kommentiere!"] });
  /* Sicherheitsnetz: keine Website, kein Plattformname auf Folien oder in der Caption. */
  const verboten = /(github\.io|github\.com|examenscampus|link in bio|website)/i;
  for (const f of folien) for (const k of ["titel", "text", "untertitel"]) if (f[k] && verboten.test(f[k])) f[k] = f[k].replace(verboten, "").replace(/\s{2,}/g, " ").trim();
  if (!CONFIG.marke.website) daten.caption = (daten.caption || "").split("\n").filter((z) => !verboten.test(z)).join("\n");
  const kern = CONFIG.hashtags.kern;
  const tags = [...new Set([...(daten.hashtags || []).map((h) => (h.startsWith("#") ? h : `#${h}`).toLowerCase().replace(/\s+/g, "")), ...kern])].slice(0, CONFIG.hashtags.maxJeBeitrag);
  return {
    format, fach, klausur, fachLabel: FAECHER[fach]?.label || "Steuerberaterexamen",
    themaId: thema?.id || null,
    folien,
    caption: (daten.caption || "").trim(),
    hashtags: tags,
    kurztitel: daten.kurztitel || folien[0]?.titel || "",
    quellen: daten.quellen || [],
    hookTyp: hook?.typ || hookTyp(folien[0]?.titel || ""),
  };
}

/**
 * Schreibt einen Beitrag. Prüft ihn (pruefung.mjs) und lässt bei Beanstandung
 * bis zu CONFIG.ki.maxVersuche Mal nachbessern.
 */
export async function beitragSchreiben({ format, thema, datum, recherche, wochenThemen, anlass, strategie }) {
  if (process.env.IG_AUTOR === "beispiele") return beispielBeitrag(format, thema);
  const spec = FORMATE[format] || FORMATE.pruefungsfrage;
  const fach = thema?.fach || recherche?.fach || "bilanz";
  const klausur = FAECHER[fach]?.klausur || 3;
  const sperr = korpus().namen;
  let feedback = "";
  let letzter = null;
  for (let versuch = 1; versuch <= CONFIG.ki.maxVersuche; versuch++) {
    const user = [
      `Datum: ${datumLesbar(datum)}. Format: ${spec.label}.`,
      `Anleitung zum Format: ${spec.anleitung}`,
      `Empfohlene Folienfolge: ${spec.folien.join(" → ")} (bei „a|b“ wähle die passendere Art).`,
      thema ? `\n## Themen-Skelett\n${themaText(thema)}` : "",
      recherche ? `\n## Rechercheergebnis (Web, ${datumLesbar(datum)})\n${recherche.notizen}\n\nQuellen: ${recherche.quellen.join(" · ")}` : "",
      wochenThemen?.length ? `\n## Themen dieser Woche\n${wochenThemen.map((t) => `- ${t}`).join("\n")}` : "",
      anlass ? `\n## Anlass\n${anlass.titel}: ${anlass.kontext}` : "",
      `\nPhase im Prüfungsjahr: ${phase(datum)}.`,
      format === "spickzettel" ? `\nDer CTA muss den Satz enthalten: „Kommentiere ${CONFIG.nachrichten.schluesselwort} – dann schicke ich dir die Karte als Nachricht.“ Derselbe Satz gehört ans Ende der Caption.` : "",
      `\n## Sperrliste (diese Namen nie verwenden)\n${sperr.join(", ")}`,
      feedback ? `\n## Beanstandungen am vorherigen Entwurf – bitte beheben\n${feedback}\n\nVorheriger Entwurf:\n${JSON.stringify(letzter)}` : "",
      `\nErstelle jetzt den Beitrag als JSON.`,
    ].filter(Boolean).join("\n");
    const { daten } = await strukturiert({ system: SYSTEM, user, schema: BEITRAG_SCHEMA });
    const beitrag = nachbereiten(daten, { format, thema, fach, klausur, strategie });
    const ergebnis = pruefeBeitrag(beitrag);
    if (ergebnis.ok) {
      const fakten = await pruefeFakten(beitrag);
      if (fakten.ok) { beitrag.faktenHinweise = fakten.hinweise; return beitrag; }
      ergebnis.fehler.push(...fakten.fehler.map((f) => `Fachlicher Fehler: ${f}`));
    }
    feedback = ergebnis.fehler.map((f) => `- ${f}`).join("\n");
    letzter = daten;
    console.warn(`  Entwurf ${versuch} beanstandet:\n${feedback}`);
  }
  throw new Error(`Beitrag „${thema?.titel || format}“ nach ${CONFIG.ki.maxVersuche} Versuchen nicht freigegeben:\n${feedback}`);
}

/* Web-Recherche für das Format „aktuell“ (Server-Tool Websuche). */
export async function aktuellRecherchieren(datum, bereitsBehandelt = []) {
  const frage = `Heute ist der ${datumLesbar(datum)}. Recherchiere 3–5 aktuelle Neuigkeiten aus den letzten 4 Wochen, die für Kandidat:innen des deutschen Steuerberaterexamens relevant sind: BFH-Urteile, BMF-Schreiben, Gesetzesänderungen (EStG, KStG, UStG, AO, HGB, ErbStG, UmwStG, GewStG), Termine/Statistiken der Steuerberaterprüfung, Änderungen bei Prüfungsordnung oder Hilfsmitteln. Bevorzuge offizielle Quellen (bundesfinanzhof.de, bundesfinanzministerium.de, bstbk.de, Steuerberaterkammern, Bundesgesetzblatt) und Fachverlage (NWB, Haufe, Beck, DATEV). Bereits behandelt (nicht erneut): ${bereitsBehandelt.join("; ") || "–"}.

Wähle dann DIE eine Neuigkeit mit dem größten Examensbezug aus. Antworte mit:
1. Auswahl: Titel, Datum, Aktenzeichen/Dokument, Fach (eines von: ao, ust, erbst, kst, istr, bilanz, persg)
2. Notizen: Was ist passiert, was ist der Kern, was bedeutet es fürs Examen (max. 200 Wörter, eigene Worte)
3. Quellen: 2–3 URLs`;
  const params = {
    model: CONFIG.ki.modellNeben,
    max_tokens: 16000,
    thinking: { type: "adaptive" },
    output_config: { effort: "medium" },
    tools: [{ type: "web_search_20260209", name: "web_search", max_uses: 8, user_location: { type: "approximate", country: "DE", timezone: "Europe/Berlin" } }],
    messages: [{ role: "user", content: frage }],
  };
  let response = await client().messages.create(params);
  erfassen(CONFIG.ki.modellNeben, response.usage, "recherche");
  let runden = 0;
  while (response.stop_reason === "pause_turn" && runden++ < 4) {
    params.messages.push({ role: "assistant", content: response.content });
    response = await client().messages.create(params);
    erfassen(CONFIG.ki.modellNeben, response.usage, "recherche");
  }
  const text = textAus(response);
  const fachTreffer = text.match(/Fach\s*[:：]\s*(ao|ust|erbst|kst|istr|bilanz|persg)/i);
  const quellen = [...new Set((text.match(/https?:\/\/[^\s)>\]]+/g) || []))].slice(0, 4);
  return { notizen: text, quellen, fach: fachTreffer ? fachTreffer[1].toLowerCase() : "bilanz", titel: (text.match(/Titel\s*[:：]\s*(.+)/i) || [])[1]?.trim() || "" };
}

/**
 * Schreibt alle eigenständigen Stories eines Tages in einem Aufruf.
 * @param {Array<{slot, art, thema?, tageBisExamen?}>} plan
 */
export async function storiesSchreiben(plan, datum) {
  if (process.env.IG_AUTOR === "beispiele") return beispielStories(plan);
  const auftraege = plan.map((s) => {
    const kopf = `- slot ${s.slot}: art=${s.art}`;
    if (s.art === "countdown") return `${kopf} – Countdown: noch ${s.tageBisExamen} Tage bis zur schriftlichen Prüfung (${datumLesbar(CONFIG.examen.schriftlich)}–${datumLesbar(CONFIG.examen.ende)}). titel = „Tage bis zur schriftlichen Prüfung“, zahl = „${s.tageBisExamen}“, text = ein motivierender, konkreter Lern-Tipp für heute (1–2 Sätze).`;
    if (s.art === "antwort") return `${kopf} – Auflösung zur Frage im vorherigen Slot: dieselben optionen, richtig = Index der richtigen Option, titel = kurze Auflösung, text = Begründung mit Norm (max. 200 Zeichen).`;
    return `${kopf}\n${s.thema ? themaText(s.thema).split("\n").map((z) => `  ${z}`).join("\n") : ""}`;
  }).join("\n");
  const user = `Datum: ${datumLesbar(datum)}. Schreibe die folgenden Instagram-Stories (Hochformat, je eine Kachel, sehr wenig Text):

Arten:
- frage: titel = Prüfungsfrage (max. 90 Zeichen), optionen = 3 kurze Antwortmöglichkeiten (max. 60 Zeichen), ueberzeile = „Prüfungsfrage <Fach>“
- antwort: siehe Auftrag
- norm: norm = die Norm (z. B. „§ 173 Abs. 1 AO“), titel = worum es geht (max. 60 Zeichen), text = ein Prüfungstipp dazu (max. 180 Zeichen)
- merksatz: text = ein Satz, der hängen bleibt (max. 120 Zeichen), titel = Thema (max. 60 Zeichen)
- formel: titel = Name des Rechenwegs, formel = Formel (max. 60 Zeichen), text = Erklärung mit eigenem Zahlenbeispiel (max. 180 Zeichen)
- begriff: titel = Begriff, norm = Norm, text = Definition in eigenen Worten (max. 200 Zeichen), icon
- fehler: titel = die Falle (max. 70 Zeichen), falsch = der Fehler (max. 120 Zeichen), richtigText = die richtige Lösung mit Norm (max. 160 Zeichen)
- tipp: titel = Klausurtipp (max. 70 Zeichen), text = Umsetzung (max. 180 Zeichen), icon
- zahl: zahl = eine markante Zahl/Frist/Prozentsatz (max. 8 Zeichen), titel = was sie bedeutet (max. 60 Zeichen), text = Norm und Kontext (max. 160 Zeichen)

Aufträge:
${auftraege}

Sperrliste (Namen nie verwenden): ${korpus().namen.join(", ")}

Alles in eigenen Worten, juristisch korrekt, mit Norm. Nicht benötigte Felder null. Gib genau einen Eintrag je Slot zurück.`;
  const { daten } = await strukturiert({ system: SYSTEM, user, schema: STORY_SCHEMA, modell: CONFIG.ki.modellNeben, effort: "medium" });
  const nachSlot = new Map(daten.stories.map((s) => [s.slot, s]));
  return plan.map((p) => {
    const s = nachSlot.get(p.slot) || {};
    const o = { slot: p.slot, art: p.art, fach: p.thema?.fach || "bilanz", klausur: p.thema?.klausur || 3 };
    for (const [k, v] of Object.entries(s)) if (v != null && k !== "slot" && k !== "art") o[k] = v;
    if (o.icon && !ICONS[o.icon]) o.icon = "paragraf";
    if (p.art === "countdown") { o.zahl = String(p.tageBisExamen); o.fortschritt = Math.round(100 - Math.min(100, p.tageBisExamen / 150 * 100)); o.ueberzeile = "Noch"; }
    o.fachLabel = FAECHER[o.fach]?.label || "Steuerberaterexamen";
    const ergebnis = pruefeBeitrag({ stories: [o] });
    if (!ergebnis.ok) { o.beanstandet = ergebnis.fehler; }
    return o;
  });
}

const REEL_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    szenen: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          art: { type: "string", enum: ["hook", "schritt", "punkt", "merke", "cta"] },
          nummer: { type: ["integer", "null"] },
          titel: { type: "string" },
          unter: { type: ["string", "null"] },
          text: { type: ["string", "null"] },
          norm: { type: ["string", "null"] },
          icon: { type: ["string", "null"] },
          sprecher: { type: "string" },
        },
        required: ["art", "nummer", "titel", "unter", "text", "norm", "icon", "sprecher"],
      },
    },
    caption: { type: "string" },
    hashtags: { type: "array", items: { type: "string" } },
    kurztitel: { type: "string" },
  },
  required: ["szenen", "caption", "hashtags", "kurztitel"],
};

const REEL_ANLEITUNG = `## Reel (Video 45–60 Sekunden, Hochformat, mit Sprecherstimme)
Du schreibst ein Skript aus 6–8 Szenen. Jede Szene hat einen kurzen Bildschirmtext und einen Sprechertext.
- Szenenarten: hook (Frage/Aufhänger, Folge 1), schritt (nummeriert, für Prüfschritte) oder punkt (unnummeriert), merke (Merksatz + norm), cta (Abschluss mit Ausblick auf das nächste Thema).
- Bildschirmtext: titel maximal 7 Wörter, text maximal 14 Wörter. Was gesprochen wird, steht NICHT wortgleich auf dem Bildschirm – der Bildschirm zeigt die Essenz, die Stimme erklärt.
- Sprechertext: So, wie ein Mensch spricht, nicht wie ein Lehrbuch. Kurze Hauptsätze, direkte Ansprache, gelegentlich ein Gedankenstrich als Pause, ein „Also:“, „Kurz gesagt:“, „Und jetzt der Punkt, den fast alle übersehen.“ Keine Klammern, keine Abkürzungen (schreibe „Paragraf zweihundertneunundvierzig Absatz eins“ als „Paragraf 249 Absatz 1“ – die Stimme liest Ziffern korrekt). Keine Aufzählungszeichen. Je Szene 1–3 Sätze, insgesamt 110–150 Wörter.
- Der hook muss in den ersten zwei Sekunden neugierig machen: eine Frage, ein Fehler, ein Versprechen.
- cta: Ausblick auf das nächste Thema und Aufforderung zu folgen, ohne Website, ohne Produkt.
- icon nur beim hook.`;

/* Reel-Skript schreiben (Szenen mit Bildschirm- und Sprechertext). */
export async function reelSchreiben({ thema, datum, lang = false, anlass = null }) {
  const fach = thema?.fach || "bilanz";
  const klausur = FAECHER[fach]?.klausur || 3;
  const sperr = korpus().namen;
  let feedback = "", letzter = null;
  for (let versuch = 1; versuch <= CONFIG.ki.maxVersuche; versuch++) {
    const user = [
      `Datum: ${datumLesbar(datum)}. Format: ${lang ? "Reel (lang, 45–60 s, 6–8 Szenen, ein komplettes Prüfschema)" : "Kurz-Reel (20–35 s, 4–5 Szenen, genau EIN Aha-Punkt: eine Frage, die Antwort, warum, Merksatz)"}.`,
      REEL_ANLEITUNG + (lang ? "" : "\nKurzfassung: insgesamt 60–90 gesprochene Wörter, Bildschirmtitel maximal 5 Wörter."),
      anlass ? `\n## Anlass\n${anlass.titel}: ${anlass.kontext}` : "",
      `Phase im Prüfungsjahr: ${phase(datum)}.`,
      `\n## Themen-Skelett\n${themaText(thema)}`,
      `\n## Sperrliste (diese Namen nie verwenden)\n${sperr.join(", ")}`,
      `\n## Beispiel für Ton und Länge (anderes Thema)\n${JSON.stringify(beispielReel.szenen.slice(0, 3), null, 1)}`,
      feedback ? `\n## Beanstandungen am vorherigen Entwurf – bitte beheben\n${feedback}\n\nVorheriger Entwurf:\n${JSON.stringify(letzter)}` : "",
      `\nErstelle jetzt das Reel-Skript als JSON.`,
    ].filter(Boolean).join("\n");
    const { daten } = await strukturiert({ system: SYSTEM, user, schema: REEL_SCHEMA });
    const szenen = daten.szenen.map((s) => { const o = {}; for (const [k, v] of Object.entries(s)) if (v != null) o[k] = v; if (o.icon && !ICONS[o.icon]) o.icon = "paragraf"; return o; });
    const reel = { format: "reel", fach, klausur, fachLabel: FAECHER[fach]?.label, themaId: thema?.id || null, szenen, caption: (daten.caption || "").trim(), hashtags: [...new Set([...(daten.hashtags || []).map((h) => (h.startsWith("#") ? h : `#${h}`).toLowerCase()), ...CONFIG.hashtags.kern])].slice(0, CONFIG.hashtags.maxJeBeitrag), kurztitel: daten.kurztitel || szenen[0]?.titel || "" };
    /* Prüfung über die Folien-Logik: Szenen als Folien, Sprechertext als Text. */
    const ergebnis = pruefeBeitrag({ folien: [{ art: "titel", titel: szenen[0]?.titel || "" }, ...szenen.slice(1).map((s) => ({ art: "text", titel: s.titel, text: `${s.text || ""} ${s.sprecher}` })), { art: "cta" }], caption: reel.caption, hashtags: reel.hashtags });
    const woerter = szenen.reduce((n, s) => n + s.sprecher.split(/\s+/).length, 0);
    const [min, max] = lang ? [80, 190] : [45, 110];
    if (woerter < min || woerter > max) ergebnis.fehler.push(`Sprechertext hat ${woerter} Wörter (Ziel ${lang ? "110–150" : "60–90"})`);
    if (!ergebnis.fehler.length) {
      const fakten = await pruefeFakten(reel);
      if (fakten.ok) { reel.hookTyp = hookTyp(szenen[0]?.titel || ""); return reel; }
      ergebnis.fehler.push(...fakten.fehler.map((f) => `Fachlicher Fehler: ${f}`));
    }
    feedback = ergebnis.fehler.map((f) => `- ${f}`).join("\n");
    letzter = daten;
    console.warn(`  Reel-Entwurf ${versuch} beanstandet:\n${feedback}`);
  }
  throw new Error(`Reel „${thema?.titel}“ nach ${CONFIG.ki.maxVersuche} Versuchen nicht freigegeben:\n${feedback}`);
}

/* Teaser-Story aus einem fertigen Beitrag – ohne KI-Aufruf. */
export function teaserAusBeitrag(beitrag, slot) {
  return {
    slot, art: "teaser", fach: beitrag.fach, klausur: beitrag.klausur, fachLabel: beitrag.fachLabel,
    ueberzeile: "Neuer Beitrag",
    titel: beitrag.kurztitel || beitrag.folien[0].titel,
    text: beitrag.folien[0].titel !== beitrag.kurztitel ? beitrag.folien[0].titel : "",
    icon: beitrag.folien[0].icon || "paragraf",
    pille: "Jetzt im Feed",
  };
}

/* --- Beispielmodus (IG_AUTOR=beispiele): Inhalte aus beispiele/inhalte.json,
   ohne API-Aufruf. Für lokale Tests des Renderns und Hochladens. --- */
function beispielBeitrag(format, thema) {
  const b = beispiele.beitraege.find((x) => x.format === format) || beispiele.beitraege[0];
  const fach = thema?.fach || b.fach;
  return nachbereiten({ ...b, kurztitel: b.folien[0].titel, quellen: [] }, { format, thema, fach, klausur: FAECHER[fach]?.klausur || b.klausur });
}

function beispielStories(plan) {
  return plan.map((p) => {
    const s = beispiele.stories.find((x) => x.art === p.art) || beispiele.stories[0];
    const o = { ...s, slot: p.slot, art: p.art, fach: p.thema?.fach || s.fach, klausur: p.thema?.klausur || s.klausur };
    if (p.art === "countdown") { o.zahl = String(p.tageBisExamen); o.fortschritt = Math.round(100 - Math.min(100, p.tageBisExamen / 150 * 100)); }
    o.fachLabel = FAECHER[o.fach]?.label || "Steuerberaterexamen";
    return o;
  });
}
