// Cloudflare Pages Function: POST /api/anmelden
// Trägt die Anmeldung über die Brevo-API direkt in die Liste „Mündliche – Leadmagnet“ ein.
// Benötigt in Cloudflare Pages → Settings → Variables and Secrets (Production): BREVO_API_KEY (Secret).
const LISTE_MUENDLICHE = 3;

const antwort = (status, daten) =>
  new Response(JSON.stringify(daten), { status, headers: { "content-type": "application/json" } });

export async function onRequestPost({ request, env }) {
  if (!env.BREVO_API_KEY) return antwort(500, { ok: false, fehler: "BREVO_API_KEY fehlt" });

  let form;
  try { form = await request.formData(); } catch { return antwort(400, { ok: false, fehler: "Ungültige Anfrage" }); }

  // Honeypot: Bots füllen das versteckte Feld aus – still „erfolgreich“ beantworten
  if (form.get("email_address_check")) return antwort(200, { ok: true });

  const email = String(form.get("EMAIL") || "").trim().toLowerCase();
  const vorname = String(form.get("FIRSTNAME") || "").trim().slice(0, 100);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return antwort(400, { ok: false, fehler: "Ungültige E-Mail-Adresse" });

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: { "api-key": env.BREVO_API_KEY, "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      email,
      attributes: vorname ? { FIRSTNAME: vorname } : {},
      listIds: [LISTE_MUENDLICHE],
      updateEnabled: true,
    }),
  });

  // 201 = neu angelegt, 204 = vorhandener Kontakt aktualisiert
  if (res.ok) return antwort(200, { ok: true });
  const text = await res.text();
  console.log("Brevo-Fehler", res.status, text);
  return antwort(502, { ok: false, fehler: "Brevo " + res.status });
}
