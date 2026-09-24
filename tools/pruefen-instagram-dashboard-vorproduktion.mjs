import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";

const pfad = new URL("../public/instagram-dashboard.html", import.meta.url);
const html = fs.readFileSync(pfad, "utf8");

assert.match(html, /steuer:\{[^\n]+preproduction:true[^\n]+igUser:"examenscampus"[^\n]+avatar:"EC"/,
  "Examenscampus muss Vorproduktion in der Kontokonfiguration aktivieren.");
assert.match(html, /herr:\{[^\n]+preproduction:true/,
  "HerrJurist-Vorproduktion darf beim Spiegeln nicht verloren gehen.");

assert.doesNotMatch(html, /store\.account\s*[!=]==?\s*"herr"/,
  "Der Vorproduktions-Reiter darf nicht mehr exklusiv an HerrJurist hängen.");
assert.doesNotMatch(html, /store\.data\.herr/,
  "Vorproduktionsdaten müssen über das aktive Konto gelesen werden.");
assert.doesNotMatch(html, /ACCOUNTS\.herr\.repo/,
  "Asset-/Editorzugriff darf nicht mehr fest ins HerrJurist-Repo zeigen.");

assert.match(html, /function preproductionBase\(\)\{[\s\S]*preproductionAccount\(\)\.repo/,
  "Vorproduktionsassets müssen aus dem aktiven Konto geladen werden.");
assert.match(html, /function ghContentsUrl\(rel\)\{[\s\S]*preproductionAccount\(\)\.repo/,
  "Editor-Commits müssen ins aktive Konto geschrieben werden.");
assert.match(html, /function preproductionDayContent\(date,slot\)\{[\s\S]*store\.data\[ed\.account\|\|store\.account\]/,
  "Der Editor muss Renderdaten des beim Öffnen aktiven Kontos verwenden.");
assert.match(html, /function edDraftKey\(rel\)\{return "igDashDraft:"\+\(ed\.account\|\|store\.account\)\+":"\+rel;\}/,
  "Lokale Editorentwürfe müssen je Konto getrennt sein.");
assert.match(html, /id="tokenRepoName"/,
  "Der Token-Dialog muss das aktive Ziel-Repo ausweisen.");
assert.match(html, /fontPath:"social\/fonts\/"/,
  "Examenscampus muss seine eigenen Renderer-Schriften verwenden.");

const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
  .map((m) => m[1])
  .filter((s) => s.trim());
assert.ok(scripts.length > 0, "Kein Inline-JavaScript im Dashboard gefunden.");
scripts.forEach((source, i) => new vm.Script(source, { filename: `instagram-dashboard.inline-${i + 1}.js` }));

console.log("Instagram-Dashboard: Vorproduktion für HerrJurist und Examenscampus gespiegelt; Inline-JS syntaktisch gültig.");
