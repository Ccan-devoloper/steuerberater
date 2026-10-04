/* ==========================================================================
   Zeitplan der Vorproduktion: Abgleich mit dem Dashboard und nächster Termin.

   Bewusst ohne Abhängigkeiten außer zeit.mjs: Die Weckkette im Workflow lädt
   dieses Modul ohne npm ci, um zu entscheiden, wann sie den Bot weckt.

   Das Dashboard schreibt Uhrzeiten nur in vorproduktion/<datum>.json. Der Bot
   arbeitet mit seinem eigenen Tagesplan state/plaene/<datum>.json, weil dort
   der Sendestatus steht. Ohne Abgleich galten Änderungen im Dashboard nur,
   solange der Bot den Tag noch nicht übernommen hatte (04.10.2026: b3 auf
   17:00 gestellt, gesendet wurde nach dem alten Plan um 19:00).
   ========================================================================== */

import { zeitpunktVon } from "./zeit.mjs";

/* Felder, die nur der Bot führt und die das Dashboard nie überschreibt. */
const BOT_FELDER = ["status", "medienId", "veroeffentlicht", "sendeversuch", "fehler"];

/* Diese Zeitspanne vor dem Termin startet die Weckkette den Lauf: Job-Start,
   Abhängigkeiten und Container-Verarbeitung bei Instagram (Reels!) müssen
   davor fertig sein. Der Lauf selbst nimmt Einträge bis VORBEREITUNG_MINUTEN
   im Voraus an und ruft media_publish erst zur eingestellten Minute auf. */
export const WECK_VORLAUF_MINUTEN = 8;
export const VORBEREITUNG_MINUTEN = 15;

/* Nach einem Fehler weckt die Kette für diesen Eintrag nicht sofort erneut,
   sondern überlässt den nächsten Versuch dem stündlichen Lauf. */
const FEHLER_RUHE_MS = 30 * 60 * 1000;

export function planEintrag(e) {
  const kopie = { ...e, status: "geplant" };
  for (const k of BOT_FELDER) if (k !== "status") delete kopie[k];
  return kopie;
}

function dashboardFelder(e) {
  const kopie = { ...e };
  for (const k of BOT_FELDER) delete kopie[k];
  return kopie;
}

/**
 * Übernimmt Uhrzeiten und alle übrigen Planfelder aus der Vorproduktionsdatei
 * in den Tagesplan des Bots – für jeden Slot, der noch nicht gesendet wurde.
 * Gesendete oder unbestätigte Slots („sendet“, „veroeffentlicht“) bleiben
 * unberührt. Neue Slots kommen dazu, im Dashboard entfernte geplante Slots
 * fallen weg. Ändert `plan` an Ort und Stelle.
 * @returns {string[]} lesbare Beschreibung jeder Änderung (leer = nichts geändert)
 */
export function planMitVorproduktionAbgleichen(plan, tag) {
  const aenderungen = [];
  for (const art of ["beitraege", "stories"]) {
    const soll = tag?.plan?.[art] || [];
    const ist = plan[art] || [];
    const sollSlots = new Set(soll.map((e) => e.slot));
    const neu = [];
    for (const e of ist) {
      if (sollSlots.has(e.slot) || e.status !== "geplant") { neu.push(e); continue; }
      aenderungen.push(`${e.slot} entfernt`);
    }
    for (const vorlage of soll) {
      const e = neu.find((x) => x.slot === vorlage.slot);
      if (!e) {
        neu.push(planEintrag(vorlage));
        aenderungen.push(`${vorlage.slot} neu (${vorlage.zeit || "ohne Zeit"})`);
        continue;
      }
      if (e.status !== "geplant") continue;
      const felder = dashboardFelder(vorlage);
      for (const [k, v] of Object.entries(felder)) {
        if (JSON.stringify(e[k]) === JSON.stringify(v)) continue;
        if (k === "zeit") aenderungen.push(`${e.slot} ${e.zeit || "–"} → ${v}`);
        else aenderungen.push(`${e.slot} ${k} geändert`);
        e[k] = v;
      }
      for (const k of Object.keys(e)) {
        if (BOT_FELDER.includes(k) || k in felder) continue;
        delete e[k];
        aenderungen.push(`${e.slot} ${k} entfernt`);
      }
    }
    plan[art] = neu;
  }
  return aenderungen;
}

/**
 * Nächster offener Termin des Tages als Zeitpunkt (ms), oder null.
 * Berücksichtigt nur geplante Einträge, deren Uhrzeit noch bevorsteht und
 * die nicht gerade erst fehlgeschlagen sind.
 */
export function naechsterTermin(plan, datum, jetzt = Date.now()) {
  const frischerFehler = (e) => {
    const t = Date.parse(String(e?.fehler || "").split(" ")[0]);
    return Number.isFinite(t) && jetzt - t < FEHLER_RUHE_MS;
  };
  let bester = null;
  for (const e of [...(plan?.beitraege || []), ...(plan?.stories || [])]) {
    if (e.status !== "geplant" || !/^\d{2}:\d{2}$/.test(e.zeit || "")) continue;
    if (frischerFehler(e)) continue;
    /* Ein Teaser wartet auf seinen Beitrag; ist der gerade gescheitert,
       hätte ein Weckruf für den Teaser nichts zu tun. */
    if (e.art === "teaser" && frischerFehler((plan.beitraege || []).find((b) => b.slot === e.beitragSlot))) continue;
    const t = zeitpunktVon(datum, e.zeit);
    if (t <= jetzt) continue;
    if (bester === null || t < bester) bester = t;
  }
  return bester;
}
