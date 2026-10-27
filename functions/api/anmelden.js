// Cloudflare Pages Function: POST /api/anmelden
// 1. Speichert jede Anmeldung zuerst im KV-Namespace ANMELDUNGEN (geht auch, wenn Brevo gestört ist).
// 2. Trägt sie danach per Brevo-API in die Liste „Mündliche – Leadmagnet“ ein und vermerkt das Ergebnis.
// Einstellungen in Cloudflare Pages → Settings (Production):
//   Bindings: KV namespace „examenscampus-anmeldungen“ als Variable ANMELDUNGEN
//   Variables and Secrets: BREVO_API_KEY (Secret)
// Gespeicherte Anmeldungen: Workers & Pages → KV → examenscampus-anmeldungen. Schlüssel beginnen mit
// „offen:“ (noch nicht in Brevo) oder „brevo:“ (erfolgreich übertragen).
const LISTE_MUENDLICHE = 3;

const antwort = (status, daten) =>
  new Response(JSON.stringify(daten), { status, headers: { "content-type": "application/json" } });

async function anBrevo(env, email, vorname) {
  if (!env.BREVO_API_KEY) return "BREVO_API_KEY fehlt";
  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "api-key": env.BREVO_API_KEY, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        email,
        attributes: vorname ? { FIRSTNAME: vorname } : {},
        listIds: [LISTE_MUENDLICHE],
        updateEnabled: true,
      }),
      signal: AbortSignal.timeout(3000),
    });
    // 201 = neu angelegt, 204 = vorhandener Kontakt aktualisiert
    return res.ok ? null : `Brevo ${res.status}: ${(await res.text()).slice(0, 300)}`;
  } catch (e) {
    return `Brevo nicht erreichbar: ${e.name}`;
  }
}

export async function onRequestPost({ request, env }) {
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
    } else {
      await kv.put(`offen:${zeit}:${email}`, JSON.stringify({ ...eintrag, fehler }));
    }
    return antwort(200, { ok: true });
  }
  return fehler ? antwort(502, { ok: false, fehler }) : antwort(200, { ok: true });
}
