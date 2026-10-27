// Cloudflare Pages Function: POST /api/anmelden
// 1. Speichert jede Anmeldung zuerst im KV-Namespace ANMELDUNGEN (geht auch, wenn Brevo gestört ist).
// 2. Trägt sie danach per Brevo-API in die Liste „Mündliche – Leadmagnet“ ein und vermerkt das Ergebnis.
// Einstellungen in Cloudflare Pages → Settings (Production):
//   Bindings: KV namespace „examenscampus-anmeldungen“ als Variable ANMELDUNGEN
//   Variables and Secrets: BREVO_API_KEY (Secret)
// Gespeicherte Anmeldungen: Workers & Pages → KV → examenscampus-anmeldungen. Schlüssel beginnen mit
// „offen:“ (noch nicht in Brevo) oder „brevo:“ (erfolgreich übertragen). Offene werden über
// /api/nachtragen stündlich erneut versucht.
import { anBrevo, nachtragen } from "../_lib/brevo.js";

const antwort = (status, daten) =>
  new Response(JSON.stringify(daten), { status, headers: { "content-type": "application/json" } });

export async function onRequestPost({ request, env, waitUntil }) {
  let form;
  try { form = await request.formData(); } catch { return antwort(400, { ok: false, fehler: "Ungültige Anfrage" }); }

  // Honeypot: Bots füllen das versteckte Feld aus – still „erfolgreich“ beantworten
  if (form.get("email_address_check")) return antwort(200, { ok: true });

  const email = String(form.get("EMAIL") || "").trim().toLowerCase();
  const vorname = String(form.get("FIRSTNAME") || "").trim().slice(0, 100);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return antwort(400, { ok: false, fehler: "Ungültige E-Mail-Adresse" });
  }

  const zeit = new Date().toISOString();
  const eintrag = { email, vorname, zeit };
  const kv = env.ANMELDUNGEN;
  let gespeichert = false;
  if (kv) {
    try { await kv.put(`offen:${zeit}:${email}`, JSON.stringify(eintrag)); gespeichert = true; }
    catch (e) { console.log("KV-Fehler", e); }
  }

  const fehler = await anBrevo(env, email, vorname);
  if (fehler) console.log(fehler);

  if (gespeichert) {
    if (!fehler) {
      await kv.put(`brevo:${zeit}:${email}`, JSON.stringify(eintrag));
      await kv.delete(`offen:${zeit}:${email}`);
      // Brevo läuft wieder: liegengebliebene Anmeldungen im Hintergrund gleich mitnehmen
      waitUntil(nachtragen(env, 5).catch(() => {}));
    } else {
      await kv.put(`offen:${zeit}:${email}`, JSON.stringify({ ...eintrag, fehler }));
    }
    return antwort(200, { ok: true });
  }
  return fehler ? antwort(502, { ok: false, fehler }) : antwort(200, { ok: true });
}
