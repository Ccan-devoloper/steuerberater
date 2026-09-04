/* ==========================================================================
   Faktencheck: ein zweiter, unabhängiger Aufruf prüft jeden Beitrag und
   jedes Reel-Skript auf fachliche Fehler (Normen, Fristen, Prozentsätze,
   Zuständigkeiten, Rechtsstand 2026). Nur klare Fehler führen zur
   Nachbesserung; Stilfragen nicht.
   ========================================================================== */

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.mjs";
import { erfassen } from "./kosten.mjs";

let clientCache = null;
const client = () => (clientCache ||= new Anthropic({ maxRetries: 3, timeout: 5 * 60 * 1000 }));

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    befunde: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          schwere: { type: "string", enum: ["fehler", "unsicher", "hinweis"] },
          stelle: { type: "string" },
          problem: { type: "string" },
          korrektur: { type: "string" },
        },
        required: ["schwere", "stelle", "problem", "korrektur"],
      },
    },
  },
  required: ["befunde"],
};

const SYSTEM = `Du bist Prüfer:in für Fachtexte zum deutschen Steuerrecht (Steuerberaterexamen, Rechtsstand 2026). Du bekommst Texte eines Instagram-Kanals und prüfst ausschließlich die fachliche Richtigkeit:
- Normzitate (richtiges Gesetz, Paragraf, Absatz, Satz, Nummer), Richtlinien und Verwaltungsanweisungen
- Zahlen: Fristen, Prozentsätze, Freibeträge, Grenzen, Zinssätze
- Rechtsfolgen, Prüfungsreihenfolgen, Zuständigkeiten
- Rechtsstand: veraltete Regelungen (z. B. Abzinsung von Verbindlichkeiten, alte Freibeträge) sind Fehler

Melde als „fehler“ nur, was eindeutig falsch ist und in der Prüfung Punkte kosten würde. Als „unsicher“ alles, was du nicht sicher beurteilen kannst. Als „hinweis“ Unschärfen, die vertretbar sind. Keine Stil- oder Formatkritik. Wenn alles korrekt ist, gib eine leere Liste zurück.`;

function textAus(beitrag) {
  const teile = [];
  for (const f of beitrag.folien || []) teile.push(`[Folie ${f.art}] ${[f.titel, f.untertitel, f.text, ...(f.punkte || []), ...(f.schritte || []).map((s) => (typeof s === "string" ? s : `${s.titel}: ${s.text || ""}`)), f.formel, ...(f.zeilen || []), f.ergebnis, f.links?.titel, ...(f.links?.punkte || []), f.rechts?.titel, ...(f.rechts?.punkte || [])].filter(Boolean).join(" · ")}`);
  for (const s of beitrag.szenen || []) teile.push(`[Szene ${s.art}] ${[s.titel, s.text, s.norm, s.sprecher].filter(Boolean).join(" · ")}`);
  if (beitrag.caption) teile.push(`[Caption] ${beitrag.caption}`);
  return teile.join("\n");
}

/**
 * @returns {{ok:boolean, fehler:string[], hinweise:string[]}}
 */
export async function pruefeFakten(beitrag) {
  if (!CONFIG.faktencheck.aktiv) return { ok: true, fehler: [], hinweise: [] };
  const response = await client().messages.create({
    model: CONFIG.ki.modellNeben,
    max_tokens: 6000,
    system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: `Prüfe diesen Text:\n\n${textAus(beitrag)}` }],
    thinking: { type: "adaptive" },
    output_config: { effort: "medium", format: { type: "json_schema", schema: SCHEMA } },
  });
  erfassen(CONFIG.ki.modellNeben, response.usage, "faktencheck");
  if (response.stop_reason === "refusal") return { ok: true, fehler: [], hinweise: [] };
  const text = response.content.filter((b) => b.type === "text").map((b) => b.text).join("");
  let daten;
  try { daten = JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1)); } catch { return { ok: true, fehler: [], hinweise: [] }; }
  const fehler = daten.befunde.filter((b) => b.schwere === "fehler").map((b) => `${b.stelle}: ${b.problem} → ${b.korrektur}`);
  const hinweise = daten.befunde.filter((b) => b.schwere !== "fehler").map((b) => `${b.stelle}: ${b.problem}`);
  return { ok: fehler.length === 0, fehler, hinweise };
}
