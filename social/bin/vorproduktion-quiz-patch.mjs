#!/usr/bin/env node
/**
 * Frage-/Antwort-Stories bereits vorproduzierter Tage auf das Quiz-System
 * bringen: geprüfte Optionen aus dem Themenpool übernehmen (oder die
 * redaktionelle Vorgabe aus vorproduktion/quiz-patch.trigger), nur diese
 * beiden Stories neu rendern. Providerfrei.
 */
import fs from "node:fs";
import path from "node:path";
import { examenscampusRegelnPruefen, providerfreieVorproduktionPruefen, quizIndex } from "../src/vorproduktion.mjs";

providerfreieVorproduktionPruefen();

const trigger = JSON.parse(fs.readFileSync(new URL("../../vorproduktion/quiz-patch.trigger", import.meta.url), "utf8"));
const { Hosting } = await import("../src/hosting.mjs");
const { themenpool } = await import("../src/inhalte.mjs");
const { storyRendern, browserBeenden } = await import("../src/render.mjs");

const pool = new Map(themenpool().map((t) => [t.id, t]));
const hosting = new Hosting({ pushen: !trigger.nurAnzeigen }).vorbereiten();
const erledigt = [];

try {
  for (const datum of trigger.tage || []) {
    const tagPfad = path.join(hosting.dir, "vorproduktion", datum + ".json");
    if (!fs.existsSync(tagPfad)) throw new Error("Vorproduktion fehlt: " + datum);
    const tag = JSON.parse(fs.readFileSync(tagPfad, "utf8"));
    const paar = (tag.plan?.stories || []).filter((s) => s.art === "frage" || s.art === "antwort");
    if (paar.length !== 2) throw new Error(datum + ": erwartet genau ein Frage-/Antwort-Paar.");

    const frage = tag.inhalte[paar.find((s) => s.art === "frage").slot];
    const vorgabe = trigger.vorgaben?.[datum] || null;
    const k = pool.get(frage.pairId)?.kern || {};
    const poolIndex = quizIndex(k.optionen, k.richtig);
    const quiz = vorgabe?.optionen
      ? { optionen: vorgabe.optionen, richtig: vorgabe.richtig, quelle: "redaktion" }
      : poolIndex != null ? { optionen: k.optionen, richtig: poolIndex, quelle: "themenpool" } : null;
    console.log(JSON.stringify({ datum, pairId: frage.pairId, frage: frage.titel, quiz, poolErklaerung: k.erklaerung || null, antwortText: tag.inhalte[paar.find((s) => s.art === "antwort").slot].text }, null, 2));
    if (!quiz) throw new Error(datum + ": weder Pool-Optionen noch redaktionelle Vorgabe.");

    for (const s of paar) {
      const story = tag.inhalte[s.slot];
      story.optionen = [...quiz.optionen];
      story.richtig = quiz.richtig;
      if (s.art === "frage" && vorgabe?.titelFrage) story.titel = vorgabe.titelFrage;
      if (s.art === "antwort" && vorgabe?.titelAntwort) story.titel = vorgabe.titelAntwort;
      if (s.art === "antwort" && vorgabe?.textAntwort) story.text = vorgabe.textAntwort;
    }
    examenscampusRegelnPruefen(tag);
    if (trigger.nurAnzeigen) continue;

    const dir = path.join(hosting.dir, tag.renderVorschau?.pfad || "vorproduktion/" + datum + "/fertig", "stories");
    fs.mkdirSync(dir, { recursive: true });
    for (const s of paar) {
      const story = structuredClone(tag.inhalte[s.slot]);
      story.bild = null;
      story.bildQuelle = null;
      await storyRendern(story, path.join(dir, s.slot + "-" + story.art + ".jpg"), { variante: 0 });
    }
    tag.renderVorschau = { ...(tag.renderVorschau || {}), quizPatch: { stand: new Date().toISOString(), quelle: quiz.quelle, slots: paar.map((s) => s.slot), providerKostenUsd: 0 } };
    fs.writeFileSync(tagPfad, JSON.stringify(tag, null, 2) + "\n");
    erledigt.push(datum);
  }
  if (!trigger.nurAnzeigen && erledigt.length) {
    hosting.commit("Examenscampus: Frage-/Antwort-Stories " + erledigt.join(" + ") + " auf Quiz-System bringen");
    await hosting.push();
  }
} finally {
  await browserBeenden().catch(() => {});
}
console.log(trigger.nurAnzeigen ? "Nur angezeigt – nichts gerendert oder gepusht." : "Quiz-Patch fertig: " + erledigt.join(", ") + " · 0,00 USD Providerkosten.");
