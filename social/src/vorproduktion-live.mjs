/* ==========================================================================
   Vorproduktion live veröffentlichen – vollständig providerfrei.

   Ein vorhandener Tag unter instagram-assets/vorproduktion/YYYY-MM-DD.json
   hat Vorrang vor dem normalen Tageslauf. Texte, Faktenchecks, Bilder und
   Reel-Audio werden NICHT neu erzeugt: veröffentlicht werden ausschließlich
   die bereits vorproduzierten Dateien. Fehlt an einem Cover ein Bild, wird
   lokal mit den eingebauten Iconify-Assets ein passendes Icon gerendert.

   Damit ist die Umschaltung selbstheilend: Am ersten Datum ohne
   Vorproduktionsdatei übernimmt wieder der normale Lauf.
   ========================================================================== */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { CONFIG } from "./config.mjs";
import { Instagram } from "./instagram.mjs";
import { ledgerLaden, ledgerSpeichern, vermerken } from "./planer.mjs";
import { lokaleMinuten, minutenVon } from "./zeit.mjs";
import { beitragRendern, coverRendern } from "./render.mjs";
import { coverDaten } from "./reel.mjs";
import { coverIconEinsetzen } from "./vorproduktion.mjs";
import { echteMedienId, veroeffentlichungEintragen } from "./veroeffentlichung.mjs";

const istJpeg = (name) => /\.jpe?g$/i.test(name);
const istVideo = (name) => /\.mp4$/i.test(name);

function tagPfad(hosting, datum) {
  return path.join(hosting.dir, "vorproduktion", datum + ".json");
}

export function vorproduktionVorhanden(hosting, datum) {
  return fs.existsSync(tagPfad(hosting, datum));
}

function tagLaden(hosting, datum) {
  const p = tagPfad(hosting, datum);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function tagSchreiben(hosting, datum, tag) {
  fs.writeFileSync(tagPfad(hosting, datum), JSON.stringify(tag, null, 2) + "\n");
}

function planEintrag(e) {
  const kopie = { ...e, status: "geplant" };
  delete kopie.medienId;
  delete kopie.veroeffentlicht;
  return kopie;
}

function planAusVorproduktion(tag, datum, ledger) {
  const plan = {
    datum,
    erzeugt: new Date().toISOString(),
    quelle: "vorproduktion",
    providerKostenUsd: 0,
    beitraege: (tag.plan?.beitraege || []).map(planEintrag),
    stories: (tag.plan?.stories || []).map(planEintrag),
  };
  for (const e of [...plan.beitraege, ...plan.stories]) {
    const alt = [...(ledger.veroeffentlicht || [])].reverse().find((x) =>
      x.datum === datum && x.slot === e.slot && echteMedienId(x.medienId)
    );
    if (alt) {
      e.status = "veroeffentlicht";
      e.medienId = alt.medienId;
      e.veroeffentlicht = alt.veroeffentlicht || null;
    }
  }
  return plan;
}

function echteVeroeffentlichungImPlan(plan) {
  return [...(plan?.beitraege || []), ...(plan?.stories || [])]
    .some((e) => e.status === "veroeffentlicht" && echteMedienId(e.medienId));
}

function captionFuer(inhalt) {
  const hashtags = Array.isArray(inhalt?.hashtags) ? inhalt.hashtags.filter(Boolean).join(" ") : "";
  return [String(inhalt?.caption || "").trim(), hashtags].filter(Boolean).join("\n\n");
}

function dateienImOrdner(dir, test) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(test).sort().map((name) => path.join(dir, name));
}

function inhaltSpeichern(hosting, datum, slot, inhalt) {
  hosting.jsonSchreiben(`inhalte/${datum}-${slot}.json`, inhalt);
}

async function zustandSichern(hosting, datum, plan, ledgerPfad, ledger, nachricht) {
  hosting.jsonSchreiben(`plaene/${datum}.json`, plan);
  ledgerSpeichern(ledgerPfad, ledger);
  hosting.commit(nachricht);
  await hosting.push();
}

function ledgerHat(ledger, medienId) {
  return (ledger.veroeffentlicht || []).some((e) => e.medienId === medienId);
}

function imLedgerVermerken(ledger, datum, eintrag, inhalt, medienId) {
  if (ledgerHat(ledger, medienId)) return;
  const basis = {
    datum,
    slot: eintrag.slot,
    medienId,
    veroeffentlicht: new Date().toISOString(),
    quelle: "vorproduktion",
  };
  if (eintrag.art) {
    vermerken(ledger, {
      ...basis,
      art: "story",
      storyArt: eintrag.art,
      thema: inhalt?.themaId || eintrag.themaId || null,
      fach: inhalt?.fach || null,
      titel: inhalt?.titel || inhalt?.text || "",
    });
    return;
  }
  vermerken(ledger, {
    ...basis,
    art: "beitrag",
    zeit: eintrag.zeit,
    stunde: Math.floor(lokaleMinuten() / 60),
    format: eintrag.format,
    thema: inhalt?.themaId || eintrag.themaId || null,
    fach: inhalt?.fach || eintrag.fach || null,
    klausur: inhalt?.klausur ?? eintrag.klausur ?? null,
    titel: Array.isArray(inhalt?.folien)
      ? inhalt.folien[0]?.titel || eintrag.themaTitel || ""
      : inhalt?.kurztitel || inhalt?.szenen?.[0]?.titel || eintrag.themaTitel || "",
    hookTyp: inhalt?.hookTyp || null,
    hashtags: inhalt?.hashtags || [],
  });
}

async function sendeSperre(hosting, datum, plan, ledgerPfad, ledger, eintrag) {
  eintrag.status = "sendet";
  eintrag.sendeversuch = new Date().toISOString();
  delete eintrag.fehler;
  await zustandSichern(hosting, datum, plan, ledgerPfad, ledger, `Vorproduktion Sendeversuch ${datum} ${eintrag.slot}`);
}

async function alsVeroeffentlichtSichern(hosting, datum, plan, ledgerPfad, ledger, eintrag, inhalt, medienId) {
  const r = veroeffentlichungEintragen(eintrag, medienId);
  if (!r.bestaetigt) throw new Error(`Instagram lieferte für ${eintrag.slot} keine bestätigte Medien-ID`);
  delete eintrag.sendeversuch;
  imLedgerVermerken(ledger, datum, eintrag, inhalt, medienId);
  await zustandSichern(hosting, datum, plan, ledgerPfad, ledger, `Vorproduktion veröffentlicht: ${datum} ${eintrag.slot}`);
}

async function carouselDateienMitIcon({ hosting, datum, tag, eintrag, inhalt, temp }) {
  const dir = path.join(hosting.dir, "vorproduktion", datum, "fertig", eintrag.slot);
  const dateien = dateienImOrdner(dir, istJpeg);
  if (!dateien.length) throw new Error(`Vorproduktion ${eintrag.slot}: keine JPEG-Dateien unter ${dir}`);

  const arbeit = structuredClone(inhalt);
  const titelIndex = Math.max(0, (arbeit.folien || []).findIndex((f) => f.art === "titel"));
  const titel = arbeit.folien?.[titelIndex];
  const brauchtIcon = titel && !titel.bild;
  if (brauchtIcon) {
    const icon = coverIconEinsetzen(arbeit);
    const ziel = path.join(temp, eintrag.slot);
    const neu = await beitragRendern(arbeit, ziel, { variante: 0 });
    if (!neu[titelIndex]) throw new Error(`Vorproduktion ${eintrag.slot}: Icon-Cover konnte nicht gerendert werden`);
    fs.copyFileSync(neu[titelIndex], dateien[titelIndex] || dateien[0]);
    tag.inhalte[eintrag.slot] = arbeit;
    tag.renderVorschau = { ...(tag.renderVorschau || {}), coverIcons: true, coverbilder: false };
    tag.bildStatus = "icon-statt-bild";
    tagSchreiben(hosting, datum, tag);
    return { dateien, inhalt: arbeit, icon };
  }
  return { dateien, inhalt: arbeit, icon: null };
}

async function reelDateienMitIcon({ hosting, datum, tag, eintrag, inhalt, temp }) {
  const dir = path.join(hosting.dir, "vorproduktion", datum, "fertig", eintrag.slot);
  const videos = dateienImOrdner(dir, istVideo);
  const covers = dateienImOrdner(dir, istJpeg).filter((p) => /cover/i.test(path.basename(p)));
  if (!videos.length || !covers.length) throw new Error(`Vorproduktion ${eintrag.slot}: Reel oder Cover fehlt unter ${dir}`);

  const arbeit = structuredClone(inhalt);
  let icon = null;
  if (!arbeit.bild) {
    icon = coverIconEinsetzen(arbeit);
    const ziel = path.join(temp, `${datum}-${eintrag.slot}-cover.jpg`);
    await coverRendern(coverDaten(arbeit, null), ziel, { variante: 0 });
    fs.copyFileSync(ziel, covers[0]);
    tag.inhalte[eintrag.slot] = arbeit;
    tag.renderVorschau = { ...(tag.renderVorschau || {}), coverIcons: true, coverbilder: false };
    tag.bildStatus = "icon-statt-bild";
    tagSchreiben(hosting, datum, tag);
  }
  return { video: videos[0], cover: covers[0], inhalt: arbeit, icon };
}

function storyDatei(hosting, datum, eintrag) {
  const dir = path.join(hosting.dir, "vorproduktion", datum, "fertig", "stories");
  const treffer = dateienImOrdner(dir, istJpeg).find((p) => path.basename(p).startsWith(eintrag.slot + "-"));
  if (!treffer) throw new Error(`Vorproduktion ${eintrag.slot}: Story-JPEG fehlt unter ${dir}`);
  return treffer;
}

function teaserVoraussetzung(plan, eintrag) {
  if (eintrag.art !== "teaser") return true;
  const beitrag = plan.beitraege.find((b) => b.slot === eintrag.beitragSlot);
  return !!beitrag && beitrag.status === "veroeffentlicht" && echteMedienId(beitrag.medienId);
}

/**
 * Führt den providerfreien Live-Pfad aus.
 * Rückgabe aktiv=true bedeutet: Der normale Tageslauf muss für dieses Datum
 * vollständig aussetzen – auch wenn gerade noch nichts fällig ist.
 */
export async function vorproduktionLiveAusfuehren({ hosting, datum, trocken = false, alles = false, nurPlanen = false, log = console.log }) {
  const tag = tagLaden(hosting, datum);
  if (!tag) return { aktiv: false, grund: "keine Vorproduktion für diesen Tag" };

  /* Harte Kostenregel: Die Existenz der Tagesdatei allein schaltet den
     Normalbetrieb für dieses Datum ab. Freigabe-Metadaten älterer Reviewtage
     sind nur noch Anzeige-/Historienfelder und dürfen keinen kostenpflichtigen
     Fallback auslösen. Nur wenn überhaupt keine Vorproduktionsdatei existiert,
     darf der normale Lauf starten. */
  log(`Vorproduktion hat Vorrang · ${datum} · Providerkosten 0 $ · normaler Veröffentlichungslauf pausiert.`);
  if (tag.renderVorschau?.status && tag.renderVorschau.status !== "fertig") {
    log(`  ⏸ Vorproduktion ist noch nicht fertig gerendert (Status: ${tag.renderVorschau.status}). Normalbetrieb bleibt trotzdem pausiert.`);
    return { aktiv: true, veroeffentlicht: 0, grund: "vorproduktion-nicht-fertig" };
  }

  const ledgerPfad = path.join(hosting.stateDir, "ledger.json");
  const ledger = ledgerLaden(ledgerPfad);
  let plan = hosting.jsonLesen(`plaene/${datum}.json`, null);
  if (!plan || plan.quelle !== "vorproduktion") {
    if (plan && echteVeroeffentlichungImPlan(plan)) {
      throw new Error(`Vorproduktion ${datum} kann nicht übernehmen: Der normale Tagesplan enthält bereits echte Veröffentlichungen.`);
    }
    plan = planAusVorproduktion(tag, datum, ledger);
    for (const [slot, inhalt] of Object.entries(tag.inhalte || {})) inhaltSpeichern(hosting, datum, slot, inhalt);
    if (!trocken && !nurPlanen) await zustandSichern(hosting, datum, plan, ledgerPfad, ledger, `Vorproduktion aktiviert ${datum}`);
  }

  for (const e of [...plan.beitraege, ...plan.stories]) {
    if (e.status === "sendet") log(`  ! ${e.slot}: früherer Sendeversuch ist unbestätigt – wird zum Schutz vor Doppelposts nicht automatisch wiederholt.`);
  }

  const jetzt = lokaleMinuten();
  const faellig = (e) => e.status === "geplant" && (alles || minutenVon(e.zeit) <= jetzt);
  const beitraege = plan.beitraege.filter(faellig);
  const stories = plan.stories.filter(faellig);

  if (nurPlanen || trocken) {
    for (const e of plan.beitraege) log(`  ${e.zeit} Beitrag ${e.slot} ${e.format} [${e.status}]`);
    for (const e of plan.stories) log(`  ${e.zeit} Story ${e.slot} ${e.art} [${e.status}]`);
    log(trocken ? "  Trockenlauf: keine Veröffentlichung, keine Provider-Aufrufe." : "  Nur Plan: keine Veröffentlichung.");
    return { aktiv: true, veroeffentlicht: 0, trocken };
  }

  if (!beitraege.length && !stories.length) {
    log("Vorproduktion: nichts fällig.");
    return { aktiv: true, veroeffentlicht: 0 };
  }

  const ig = new Instagram({ trockenlauf: false, tresorDatei: path.join(hosting.stateDir, "token.enc") });
  ig.tresorLaden();
  const { konto, limit } = await ig.pruefen();
  let frei = Math.max(0, Number(limit.maximum || 100) - Number(limit.genutzt || 0) - CONFIG.instagram.sicherheitsabstandLimit);
  log(`Vorproduktion verbunden mit @${konto.username} · frei nach Sicherheitsabstand: ${frei}`);

  const temp = fs.mkdtempSync(path.join(os.tmpdir(), "examenscampus-vorproduktion-live-"));
  let veroeffentlicht = 0;
  try {
    for (const eintrag of beitraege) {
      if (frei <= 0) { log("Instagram-Kontingent erschöpft – Vorproduktion bleibt für den nächsten Lauf geplant."); break; }
      let inhalt = tag.inhalte?.[eintrag.slot];
      if (!inhalt) { log(`  ✗ ${eintrag.slot}: Inhalt fehlt in der Vorproduktion; Normalbetrieb bleibt pausiert.`); continue; }
      const caption = captionFuer(inhalt);
      try {
        const schonDa = caption ? await ig.bereitsVeroeffentlicht(caption) : null;
        if (schonDa) {
          await alsVeroeffentlichtSichern(hosting, datum, plan, ledgerPfad, ledger, eintrag, inhalt, schonDa);
          log(`  ✓ ${eintrag.slot}: bereits auf Instagram (${schonDa}), Zustand nachgezogen.`);
          veroeffentlicht++;
          continue;
        }

        if (eintrag.format === "reel" || Array.isArray(inhalt.szenen)) {
          const r = await reelDateienMitIcon({ hosting, datum, tag, eintrag, inhalt, temp });
          inhalt = r.inhalt;
          inhaltSpeichern(hosting, datum, eintrag.slot, inhalt);
          const [videoUrl, coverUrl] = await hosting.veroeffentlichen([r.video, r.cover], datum, `Vorproduktion Reel ${datum} ${eintrag.slot}`);
          await sendeSperre(hosting, datum, plan, ledgerPfad, ledger, eintrag);
          const medienId = await ig.reelPosten({ videoUrl, coverUrl, caption });
          await alsVeroeffentlichtSichern(hosting, datum, plan, ledgerPfad, ledger, eintrag, inhalt, medienId);
          log(`  ✓ Vorproduktion Reel ${eintrag.slot} → ${medienId}${r.icon ? ` · Cover-Icon ${r.icon}` : ""}`);
        } else {
          const r = await carouselDateienMitIcon({ hosting, datum, tag, eintrag, inhalt, temp });
          inhalt = r.inhalt;
          inhaltSpeichern(hosting, datum, eintrag.slot, inhalt);
          const urls = await hosting.veroeffentlichen(r.dateien, datum, `Vorproduktion Beitrag ${datum} ${eintrag.slot}`);
          await sendeSperre(hosting, datum, plan, ledgerPfad, ledger, eintrag);
          const medienId = await ig.beitragPosten({ bildUrls: urls, caption });
          await alsVeroeffentlichtSichern(hosting, datum, plan, ledgerPfad, ledger, eintrag, inhalt, medienId);
          log(`  ✓ Vorproduktion Beitrag ${eintrag.slot} → ${medienId}${r.icon ? ` · Cover-Icon ${r.icon}` : ""}`);
        }
        frei--;
        veroeffentlicht++;
      } catch (e) {
        eintrag.fehler = `${new Date().toISOString()} ${e.message}`;
        /* Feed/Reel-Veröffentlichungen prüfen in Instagram.veroeffentlichenSicher
           bereits gegen die Caption. Stories haben diesen Beweis nicht; ein
           unklarer Story-Sendeversuch bleibt deshalb absichtlich gesperrt. */
        if (eintrag.status === "sendet") eintrag.status = "geplant";
        await zustandSichern(hosting, datum, plan, ledgerPfad, ledger, `Vorproduktion Fehler ${datum} ${eintrag.slot}`);
        log(`  ✗ Vorproduktion ${eintrag.slot}: ${e.message}`);
      }
    }

    for (const eintrag of stories) {
      if (frei <= 0) { log("Instagram-Kontingent erschöpft – Vorproduktions-Stories warten."); break; }
      if (!teaserVoraussetzung(plan, eintrag)) {
        log(`  ↷ Story ${eintrag.slot}: zugehöriger Beitrag ${eintrag.beitragSlot} noch nicht bestätigt.`);
        continue;
      }
      const inhalt = tag.inhalte?.[eintrag.slot];
      if (!inhalt) { log(`  ✗ Story ${eintrag.slot}: Inhalt fehlt; Normalbetrieb bleibt pausiert.`); continue; }
      try {
        const bild = storyDatei(hosting, datum, eintrag);
        const [url] = await hosting.veroeffentlichen([bild], datum, `Vorproduktion Story ${datum} ${eintrag.slot}`);
        await sendeSperre(hosting, datum, plan, ledgerPfad, ledger, eintrag);
        const medienId = await ig.storyPosten({ bildUrl: url });
        await alsVeroeffentlichtSichern(hosting, datum, plan, ledgerPfad, ledger, eintrag, inhalt, medienId);
        log(`  ✓ Vorproduktion Story ${eintrag.slot} ${eintrag.art} → ${medienId}`);
        frei--;
        veroeffentlicht++;
      } catch (e) {
        eintrag.fehler = `${new Date().toISOString()} ${e.message}`;
        /* Bei Stories ist ein Fehler nach media_publish nicht sicher von
           "nicht veröffentlicht" zu unterscheiden. Fail closed: sendet bleibt
           gesperrt, alles andere darf der nächste Lauf erneut versuchen. */
        if (eintrag.status !== "sendet") eintrag.status = "geplant";
        await zustandSichern(hosting, datum, plan, ledgerPfad, ledger, `Vorproduktion Story-Fehler ${datum} ${eintrag.slot}`);
        log(`  ✗ Vorproduktion Story ${eintrag.slot}: ${e.message}`);
      }
    }
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }

  return { aktiv: true, veroeffentlicht };
}
