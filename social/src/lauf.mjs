/* ==========================================================================
   Tageslauf – wird stündlich von GitHub Actions gestartet.

   1. Asset-Zweig holen (Bilder, Ledger, Tagesplan, Token-Tresor)
   2. Tagesplan laden oder für heute erzeugen
   3. Alle fälligen, noch nicht veröffentlichten Einträge abarbeiten:
      schreiben → prüfen → rendern → hochladen → veröffentlichen → vermerken
   4. Zustand committen und pushen

   Optionen:  --nur-planen   Plan anzeigen, nichts erzeugen
              --nur-rendern  Inhalte erzeugen und rendern, nichts veröffentlichen (wie IG_DRY_RUN=true)
              --datum=YYYY-MM-DD  Plan eines anderen Tages (für Tests)
              --alles        alle Einträge des Tages sofort (ohne Uhrzeit-Prüfung)
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CONFIG } from "./config.mjs";
import { themenpool } from "./inhalte.mjs";
import { tagesplan, ledgerLaden, ledgerSpeichern, vermerken } from "./planer.mjs";
import { beitragSchreiben, storiesSchreiben, teaserAusBeitrag, aktuellRecherchieren, reelSchreiben } from "./autor.mjs";
import { reelBauen } from "./reel.mjs";
import { beitragRendern, storyRendern, browserBeenden } from "./render.mjs";
import { Instagram } from "./instagram.mjs";
import { Hosting } from "./hosting.mjs";
import { kommentareBeantworten } from "./interaktion.mjs";
import { heuteIso, lokaleMinuten, minutenVon } from "./zeit.mjs";

const hier = path.dirname(fileURLToPath(import.meta.url));
const args = new Map(process.argv.slice(2).map((a) => { const [k, v] = a.replace(/^--/, "").split("="); return [k, v ?? true]; }));
const datum = args.get("datum") || heuteIso();
const nurPlanen = args.has("nur-planen");
const trocken = args.has("nur-rendern") || CONFIG.instagram.trockenlauf;
const alles = args.has("alles");
const AUSGABE = path.resolve(hier, "../out", datum);

function log(...t) { console.log(new Date().toISOString().slice(11, 19), ...t); }

/* Schwarz/Weiß-Wechsel: Beiträge alternieren fortlaufend über alle Tage
   (Schachbrett im Profil), Stories alternieren innerhalb des Tages. */
const tagIndex = Math.floor(new Date(`${datum}T12:00:00Z`).getTime() / 86400000);
const varianteBeitrag = (slot) => (tagIndex * 3 + Number(slot.slice(1)) - 1) % 2;
const varianteStory = (slot) => (Number(slot.slice(1)) - 1) % 2;

/* Plan serialisierbar machen: Themen nur als ID + Titel, Inhalte separat. */
function planSpeichern(hosting, plan) {
  hosting.jsonSchreiben(`plaene/${plan.datum}.json`, plan);
}

async function main() {
  log(`Instagram-Bot · ${datum} · Stil ${CONFIG.marke.stil} · ${trocken ? "TROCKENLAUF" : "live"}`);

  const hosting = new Hosting({ pushen: !nurPlanen }).vorbereiten();
  const ledgerPfad = path.join(hosting.stateDir, "ledger.json");
  const ledger = ledgerLaden(ledgerPfad);
  const pool = themenpool();
  const poolIndex = new Map(pool.map((t) => [t.id, t]));

  /* Plan des Tages – nur einmal erzeugen, danach fortschreiben. */
  let plan = hosting.jsonLesen(`plaene/${datum}.json`, null);
  if (!plan) {
    const p = tagesplan(datum, ledger, pool);
    plan = {
      datum: p.datum, erzeugt: new Date().toISOString(),
      beitraege: p.beitraege.map((b) => ({ slot: b.slot, zeit: b.zeit, format: b.format, themaId: b.thema?.id || null, themaTitel: b.thema?.titel || null, fach: b.thema?.fach || null, status: "geplant" })),
      stories: p.stories.map((s) => ({ slot: s.slot, zeit: s.zeit, art: s.art, themaId: s.thema?.id || null, beitragSlot: s.beitragSlot || null, tageBisExamen: s.tageBisExamen, status: "geplant" })),
    };
    planSpeichern(hosting, plan);
    log(`Tagesplan erzeugt: ${plan.beitraege.length} Beiträge, ${plan.stories.length} Stories`);
  }
  if (nurPlanen) {
    for (const b of plan.beitraege) log(`  ${b.zeit} Beitrag ${b.slot} ${b.format} ${b.themaTitel || ""} [${b.status}]`);
    for (const s of plan.stories) log(`  ${s.zeit} Story ${s.slot} ${s.art} ${s.beitragSlot ? "→ " + s.beitragSlot : poolIndex.get(s.themaId)?.titel || ""} [${s.status}]`);
    return;
  }

  const jetzt = lokaleMinuten();
  const faellig = (e) => e.status !== "veroeffentlicht" && (alles || minutenVon(e.zeit) <= jetzt);
  const beitraegeFaellig = plan.beitraege.filter(faellig);
  const storiesFaellig = plan.stories.filter(faellig);

  /* Instagram-Verbindung und Kontingent. */
  const ig = new Instagram({ trockenlauf: trocken, tresorDatei: path.join(hosting.stateDir, "token.enc") });
  let kontingent = { genutzt: 0, maximum: 100 };
  if (!trocken) {
    ig.tresorLaden();
    const { konto, limit } = await ig.pruefen();
    kontingent = limit;
    log(`Verbunden mit @${konto.username} · Kontingent ${limit.genutzt}/${limit.maximum}`);
    if (await ig.tokenAuffrischen()) log("Zugriffstoken verlängert und im Tresor gespeichert.");

    /* Interaktion: neue Kommentare beantworten – bei jedem Lauf, unabhängig vom Plan. */
    if (CONFIG.interaktion.aktiv) {
      try {
        const r = await kommentareBeantworten(ig, ledger, { log });
        if (r.beantwortet) { ledgerSpeichern(ledgerPfad, ledger); hosting.commit(`Kommentare beantwortet ${datum}`); await hosting.push(); }
        log(`Interaktion: ${r.beantwortet} Antworten (${r.geprueft} Beiträge geprüft)`);
      } catch (e) {
        console.error(`  ✗ Interaktion: ${e.message}`);
      }
    }
  }
  if (!beitraegeFaellig.length && !storiesFaellig.length) { log("Nichts fällig."); return; }
  const frei = () => kontingent.maximum - kontingent.genutzt - CONFIG.instagram.sicherheitsabstandLimit;

  /* Zuerst die Beiträge (wichtiger), dann die Stories. */
  const fertigeBeitraege = new Map();   // slot → Beitrag (für Teaser)
  let fehler = 0;

  for (const eintrag of beitraegeFaellig) {
    if (frei() <= 0) { log("Tageskontingent erschöpft – Beitrag verschoben."); break; }
    try {
      log(`Beitrag ${eintrag.slot} (${eintrag.format}) ${eintrag.themaTitel || ""}`);
      if (eintrag.format === "reel") {
        let reel = hosting.jsonLesen(`inhalte/${datum}-${eintrag.slot}.json`, null);
        if (!reel) {
          reel = await reelSchreiben({ thema: eintrag.themaId ? poolIndex.get(eintrag.themaId) : null, datum });
          reel.slug = `${datum}-${eintrag.slot}`;
          hosting.jsonSchreiben(`inhalte/${datum}-${eintrag.slot}.json`, reel);
        }
        const r = await reelBauen(reel, path.join(AUSGABE, "reels", eintrag.slot), { variante: varianteBeitrag(eintrag.slot) });
        const [videoUrl, coverUrl] = await hosting.veroeffentlichen([r.video, r.cover], datum, `Reel ${datum} ${eintrag.slot}`);
        const caption = `${reel.caption}\n\n${reel.hashtags.join(" ")}`;
        const medienId = await ig.reelPosten({ videoUrl, coverUrl, caption });
        kontingent.genutzt += 1;
        eintrag.status = "veroeffentlicht"; eintrag.medienId = medienId; eintrag.veroeffentlicht = new Date().toISOString();
        vermerken(ledger, { datum, art: "beitrag", slot: eintrag.slot, format: "reel", thema: reel.themaId, fach: reel.fach, titel: reel.szenen[0]?.titel || reel.kurztitel, medienId });
        fertigeBeitraege.set(eintrag.slot, { ...reel, folien: [{ art: "titel", titel: reel.szenen[0]?.titel, icon: reel.szenen[0]?.icon }], kurztitel: reel.kurztitel });
        ledgerSpeichern(ledgerPfad, ledger); planSpeichern(hosting, plan);
        hosting.commit(`Veröffentlicht: Reel ${datum} ${eintrag.slot}`); await hosting.push();
        log(`  ✓ Reel ${medienId} (${r.dauer.toFixed(0)} s, Stimme: ${r.echt ? "ElevenLabs" : "stumm"})`);
        continue;
      }
      let beitrag = hosting.jsonLesen(`inhalte/${datum}-${eintrag.slot}.json`, null);
      if (!beitrag) {
        const thema = eintrag.themaId ? poolIndex.get(eintrag.themaId) : null;
        let recherche = null, wochenThemen = null;
        if (eintrag.format === "aktuell") {
          const bisher = (ledger.veroeffentlicht || []).filter((e) => e.format === "aktuell").slice(-12).map((e) => e.titel);
          recherche = await aktuellRecherchieren(datum, bisher);
          log(`  Recherche: ${recherche.titel || "(ohne Titel)"} · ${recherche.quellen.length} Quellen`);
        }
        if (eintrag.format === "wochenrueckblick") {
          const grenze = new Date(new Date(`${datum}T12:00:00Z`).getTime() - 7 * 86400000).toISOString().slice(0, 10);
          wochenThemen = (ledger.veroeffentlicht || []).filter((e) => e.art === "beitrag" && e.datum >= grenze).map((e) => e.titel);
          if (!wochenThemen.length) wochenThemen = pool.filter((t) => t.prioritaet === "hoch").slice(0, 5).map((t) => t.titel);
        }
        beitrag = await beitragSchreiben({ format: eintrag.format, thema, datum, recherche, wochenThemen });
        beitrag.slug = `${datum}-${eintrag.slot}`;
        hosting.jsonSchreiben(`inhalte/${datum}-${eintrag.slot}.json`, beitrag);
      }
      const bilder = await beitragRendern(beitrag, path.join(AUSGABE, "beitraege"), { variante: varianteBeitrag(eintrag.slot) });
      const urls = await hosting.veroeffentlichen(bilder, datum, `Beitrag ${datum} ${eintrag.slot}`);
      const caption = `${beitrag.caption}\n\n${beitrag.hashtags.join(" ")}`;
      const medienId = await ig.beitragPosten({ bildUrls: urls, caption });
      kontingent.genutzt += 1;
      eintrag.status = "veroeffentlicht";
      eintrag.medienId = medienId;
      eintrag.veroeffentlicht = new Date().toISOString();
      vermerken(ledger, { datum, art: "beitrag", slot: eintrag.slot, format: eintrag.format, thema: beitrag.themaId, fach: beitrag.fach, titel: beitrag.folien[0].titel, medienId });
      fertigeBeitraege.set(eintrag.slot, beitrag);
      ledgerSpeichern(ledgerPfad, ledger);
      planSpeichern(hosting, plan);
      hosting.commit(`Veröffentlicht: Beitrag ${datum} ${eintrag.slot}`);
      await hosting.push();
      log(`  ✓ ${medienId} (${urls.length} Folien)`);
    } catch (e) {
      fehler++;
      eintrag.fehler = `${new Date().toISOString()} ${e.message}`;
      planSpeichern(hosting, plan);
      console.error(`  ✗ Beitrag ${eintrag.slot}: ${e.message}`);
    }
  }

  /* Stories: Teaser aus fertigen Beiträgen, alle anderen in einem KI-Aufruf. */
  const eigenstaendig = storiesFaellig.filter((s) => s.art !== "teaser");
  let geschrieben = new Map();
  if (eigenstaendig.length) {
    const vorhanden = eigenstaendig.map((s) => [s.slot, hosting.jsonLesen(`inhalte/${datum}-${s.slot}.json`, null)]);
    const offen = vorhanden.filter(([, v]) => !v).map(([slot]) => eigenstaendig.find((s) => s.slot === slot));
    for (const [slot, v] of vorhanden) if (v) geschrieben.set(slot, v);
    if (offen.length) {
      try {
        const neu = await storiesSchreiben(offen.map((s) => ({ slot: s.slot, art: s.art, thema: s.themaId ? poolIndex.get(s.themaId) : null, tageBisExamen: s.tageBisExamen })), datum);
        for (const s of neu) { hosting.jsonSchreiben(`inhalte/${datum}-${s.slot}.json`, s); geschrieben.set(s.slot, s); }
      } catch (e) {
        fehler++;
        console.error(`  ✗ Stories schreiben: ${e.message}`);
      }
    }
  }

  for (const eintrag of storiesFaellig) {
    if (frei() <= 0) { log("Tageskontingent erschöpft – Story verschoben."); break; }
    try {
      let story;
      if (eintrag.art === "teaser") {
        let beitrag = fertigeBeitraege.get(eintrag.beitragSlot) || hosting.jsonLesen(`inhalte/${datum}-${eintrag.beitragSlot}.json`, null);
        const b = plan.beitraege.find((x) => x.slot === eintrag.beitragSlot);
        if (!beitrag || b?.status !== "veroeffentlicht") { log(`Story ${eintrag.slot}: Beitrag ${eintrag.beitragSlot} noch nicht veröffentlicht – später.`); continue; }
        story = teaserAusBeitrag(beitrag, eintrag.slot);
      } else {
        story = geschrieben.get(eintrag.slot);
        if (!story) continue;
        if (story.beanstandet) { log(`Story ${eintrag.slot} beanstandet: ${story.beanstandet.join("; ")} – übersprungen.`); eintrag.status = "uebersprungen"; continue; }
      }
      const bild = await storyRendern(story, path.join(AUSGABE, "stories", `${datum}-${eintrag.slot}-${story.art}.jpg`), { variante: varianteStory(eintrag.slot) });
      const [url] = await hosting.veroeffentlichen([bild], datum, `Story ${datum} ${eintrag.slot}`);
      const medienId = await ig.storyPosten({ bildUrl: url });
      kontingent.genutzt += 1;
      eintrag.status = "veroeffentlicht";
      eintrag.medienId = medienId;
      eintrag.veroeffentlicht = new Date().toISOString();
      vermerken(ledger, { datum, art: "story", slot: eintrag.slot, storyArt: story.art, thema: story.themaId || eintrag.themaId || null, fach: story.fach, titel: story.titel || story.text || "", medienId });
      ledgerSpeichern(ledgerPfad, ledger);
      planSpeichern(hosting, plan);
      hosting.commit(`Veröffentlicht: Story ${datum} ${eintrag.slot}`);
      await hosting.push();
      log(`  ✓ Story ${eintrag.slot} ${story.art} → ${medienId}`);
    } catch (e) {
      fehler++;
      eintrag.fehler = `${new Date().toISOString()} ${e.message}`;
      planSpeichern(hosting, plan);
      console.error(`  ✗ Story ${eintrag.slot}: ${e.message}`);
    }
  }

  const geloescht = hosting.aufraeumen();
  if (geloescht) hosting.commit(`Alte Bilder entfernt (${geloescht} Tage)`);
  planSpeichern(hosting, plan);
  hosting.commit(`Zustand ${datum}`);
  await hosting.push();
  if (trocken && ig.protokoll.length) fs.writeFileSync(path.join(AUSGABE, "trockenlauf.json"), JSON.stringify(ig.protokoll, null, 2));
  log(`Fertig · ${plan.beitraege.filter((b) => b.status === "veroeffentlicht").length}/${plan.beitraege.length} Beiträge, ${plan.stories.filter((s) => s.status === "veroeffentlicht").length}/${plan.stories.length} Stories · Fehler: ${fehler}`);
  if (fehler) process.exitCode = 1;
}

main()
  .catch((e) => { console.error(e); process.exitCode = 1; })
  .finally(() => browserBeenden());
