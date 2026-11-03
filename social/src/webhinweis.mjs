/* Hinweis auf examenscampus.de (mündliche StB-Prüfung) am Ende jeder Caption.
   Bis einschließlich GESCHENKE_BIS zusätzlich der Hinweis auf die Gratis-Zugabe. */
export const WEB_ZEILE = "🎓 Alles für die mündliche StB-Prüfung: examenscampus.de";
export const GESCHENKE_BIS = "2026-11-15";

export function geschenkAktiv(jetzt = new Date()) {
  return jetzt <= new Date(`${GESCHENKE_BIS}T23:59:59+01:00`);
}

export function webHinweis(caption, jetzt = new Date()) {
  const text = String(caption || "").trim();
  if (/examenscampus\.de/i.test(text)) return text;
  const zeilen = [WEB_ZEILE];
  if (geschenkAktiv(jetzt)) zeilen.push("🎁 Nur bis 15.11.: Gratis-Geschenk zu jedem Kurs dazu.");
  return [text, zeilen.join("\n")].filter(Boolean).join("\n\n");
}
