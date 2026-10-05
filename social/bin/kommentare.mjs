#!/usr/bin/env node
/* ==========================================================================
   Kommentare von Hand lesen und beantworten – ohne Claude, ohne Ledger.

   node bin/kommentare.mjs lesen [anzahlBeitraege]
   node bin/kommentare.mjs antworten <kommentarId> "<text>"
   node bin/kommentare.mjs dm <kommentarId> "<text>"   (private Antwort, bis 7 Tage nach dem Kommentar)
   node bin/kommentare.mjs kommentieren <medienId|Caption-Anfang> "<text>"   (eigener Kommentar unter einem Beitrag)

   Anlass: Während die Vorproduktion Vorrang hat, läuft die automatische
   Interaktion nicht. Einzelne Kommentare lassen sich so trotzdem gezielt
   beantworten. Eine Antwort des Kanals im Thread genügt, damit der Bot den
   Kommentar später als „schon beantwortet“ überspringt.
   ========================================================================== */

import path from "node:path";
import { Instagram } from "../src/instagram.mjs";
import { Hosting } from "../src/hosting.mjs";

const [modus, a, b] = process.argv.slice(2);

const hosting = new Hosting({ pushen: false }).vorbereiten();
const ig = new Instagram({ trockenlauf: false, tresorDatei: path.join(hosting.stateDir, "token.enc") });
ig.tresorLaden();

if (modus === "lesen") {
  const medien = await ig.neuesteMedien(Number(a) || 12);
  for (const m of medien) {
    const kommentare = m.comments?.data || [];
    if (!kommentare.length) continue;
    console.log(`\n=== ${m.timestamp} · ${m.media_type} · ${m.permalink}`);
    console.log(`Caption: ${(m.caption || "").replace(/\s+/g, " ").slice(0, 600)}`);
    for (const k of kommentare) {
      console.log(`  [${k.id}] ${k.timestamp} @${k.username}: ${k.text}`);
      for (const r of k.replies?.data || []) console.log(`      ↳ [${r.id}] ${r.timestamp} @${r.username}: ${r.text}`);
    }
  }
} else if (modus === "antworten") {
  if (!a || !b?.trim()) { console.error("Aufruf: antworten <kommentarId> \"<text>\""); process.exit(1); }
  const id = await ig.kommentarBeantworten(a, b.trim());
  console.log(`Antwort veröffentlicht: ${id}`);
} else if (modus === "dm") {
  if (!a || !b?.trim()) { console.error("Aufruf: dm <kommentarId> \"<text>\""); process.exit(1); }
  const id = await ig.privateAntwort(a, { text: b.trim() });
  console.log(`Direktnachricht gesendet: ${id}`);
} else if (modus === "kommentieren") {
  if (!a || !b?.trim()) { console.error("Aufruf: kommentieren <medienId|Caption-Anfang> \"<text>\""); process.exit(1); }
  let medienId = a;
  if (!/^\d+$/.test(a)) {
    const r = await ig.anfrage("GET", `${ig.kontoId}/media`, { fields: "id,caption,timestamp,permalink", limit: 12 });
    const treffer = (r.data || []).filter((m) => (m.caption || "").startsWith(a));
    if (treffer.length !== 1) { console.error(`Caption-Anfang passt auf ${treffer.length} der letzten 12 Beiträge – bitte die Medien-ID angeben.`); process.exit(1); }
    medienId = treffer[0].id;
    console.log(`Beitrag: ${treffer[0].timestamp} · ${treffer[0].permalink}`);
  }
  const id = await ig.beitragKommentieren(medienId, b.trim());
  console.log(`Kommentar veröffentlicht: ${id}`);
} else {
  console.error("Modus: lesen | antworten | dm | kommentieren");
  process.exit(1);
}
