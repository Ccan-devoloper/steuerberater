#!/usr/bin/env node
import fs from "node:fs";
import { faelleNachModul, zugeordneteFaelle, fallsammlungMeta } from "../src/data/fallsammlung.js";
import offeneFaelle from "../src/data/faelle-offen.js";
import { module as alleModule } from "../src/data/module.js";

/* Die gültigen Zielmodule werden aus dem tatsächlichen Modulbestand abgeleitet.
   Eine fest verdrahtete Liste läuft mit jedem neuen Modul aus dem Tritt. */
const zielmodule = new Set(alleModule.map((m) => m.id));
const alle = [...zugeordneteFaelle, ...offeneFaelle];
const fehler = [];
const erwartet = fallsammlungMeta.gesamt;
if (alle.length !== erwartet) fehler.push(`${erwartet} Fälle erwartet, gefunden ${alle.length}`);
const ids = new Set();
for (const fall of alle) {
  if (ids.has(fall.id)) fehler.push(`Doppelte ID ${fall.id}`);
  ids.add(fall.id);
  if (!String(fall.sachverhalt || "").trim()) fehler.push(`Leerer Sachverhalt ${fall.id}`);
  if (!String(fall.loesung || "").trim()) fehler.push(`Leere Lösung ${fall.id}`);
}
for (const [modulId, faelle] of Object.entries(faelleNachModul)) {
  if (!zielmodule.has(Number(modulId))) fehler.push(`Ungültiges Zielmodul ${modulId}`);
  for (const fall of faelle) if (fall.zielmodul_id !== Number(modulId)) fehler.push(`Falsche Gruppierung ${fall.id}`);
}
for (const fall of offeneFaelle) if (!String(fall.offen_grund || "").trim()) fehler.push(`Offener Fall ohne Grund ${fall.id}`);
if (zugeordneteFaelle.length + offeneFaelle.length !== erwartet) fehler.push(`Zugeordnete und offene Fälle ergeben nicht ${erwartet}`);
for (const fall of zugeordneteFaelle) if (!Number.isInteger(fall.zielmodul_id)) fehler.push(`Zugeordneter Fall ohne Zielmodul ${fall.id}`);
for (const fall of offeneFaelle) if (fall.zielmodul_id != null) fehler.push(`Offener Fall besitzt Zielmodul ${fall.id}`);
const appText = fs.readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const uebersichtText = fs.readFileSync(new URL("../src/components/Falluebersicht.jsx", import.meta.url), "utf8");
const fallkomponenteText = fs.readFileSync(new URL("../src/components/Fallsammlungsfaelle.jsx", import.meta.url), "utf8");
if (!appText.includes('{ id: "faelle", label: "Fälle"')) fehler.push("Menüpunkt Fälle fehlt");
if (!appText.includes('ansicht === "faelle"')) fehler.push("Fallansicht fehlt");
if (!appText.includes('{ id: "hausaufgaben", label: "Hausaufgaben"')) fehler.push("Menüpunkt Hausaufgaben fehlt");
if (!appText.includes('ansicht === "hausaufgaben"')) fehler.push("Hausaufgabenansicht fehlt");
if (!uebersichtText.includes("zugeordneteFaelle") || !uebersichtText.includes("offeneFaelle")) fehler.push("Fallübersicht umfasst nicht beide Fallgruppen");
if (!fallkomponenteText.includes("Zum Lernmodul") || !fallkomponenteText.includes("Noch keinem Lernmodul")) fehler.push("Modulverlinkung oder Offen-Kennzeichnung fehlt");
if (fehler.length) { console.error(fehler.join("\n")); process.exit(1); }
console.log("Fallnavigation geprüft: Menüpunkt vorhanden · verknüpfte und offene Fälle erreichbar");
console.log(`Fallsammlung geprüft: ${zugeordneteFaelle.length} zugeordnet · ${offeneFaelle.length} offen · ${erwartet} gesamt`);
console.log("Betroffene Lernmodule:", Object.entries(faelleNachModul).map(([id, f]) => `${id}:${f.length}`).join(" · "));
