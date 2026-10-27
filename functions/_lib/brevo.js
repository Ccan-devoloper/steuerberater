// Gemeinsame Brevo-Anbindung für /api/anmelden und /api/nachtragen (kein eigener Pfad: liegt außerhalb von api/).
const LISTE_MUENDLICHE = 3;
// Transaktionsvorlage „Leadmagnet Mündliche – 01 PDF-Auslieferung“. Früher verschickte das Brevo-Formular
// sie als Bestätigungsmail; beim Eintrag über die API passiert das nicht, deshalb senden wir sie selbst.
const VORLAGE_PDF = 1;

async function brevo(env, pfad, daten, timeoutMs) {
  if (!env.BREVO_API_KEY) return "BREVO_API_KEY fehlt";
  try {
    const res = await fetch(`https://api.brevo.com/v3/${pfad}`, {
      method: "POST",
      headers: { "api-key": env.BREVO_API_KEY, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(daten),
      signal: AbortSignal.timeout(timeoutMs),
    });
    return res.ok ? null : `Brevo ${res.status}: ${(await res.text()).slice(0, 300)}`;
  } catch (e) {
    return `Brevo nicht erreichbar: ${e.name}`;
  }
}

// Kontakt in die Liste eintragen (201 = neu, 204 = vorhandener Kontakt aktualisiert). null = ok, sonst Fehlertext
export const kontaktEintragen = (env, email, vorname, timeoutMs = 3000) =>
  brevo(env, "contacts", { email, attributes: vorname ? { FIRSTNAME: vorname } : {}, listIds: [LISTE_MUENDLICHE], updateEnabled: true }, timeoutMs);

// PDF-Mail verschicken – höchstens einmal je Kontakt. Der Cloudflare-Speicher ist nur „irgendwann konsistent“:
// Zwei Läufe kurz nacheinander (stündlicher Lauf, Anmeldung im Hintergrund) sehen denselben Eintrag noch ohne
// PDF-Vermerk. Deshalb steht der Vermerk zusätzlich am Kontakt in Brevo (Attribut PDF_GESENDET), und vor dem
// Senden wird dort nachgesehen. null = ok (gesendet oder schon früher gesendet), sonst Fehlertext
export async function pdfSenden(env, email, vorname, timeoutMs = 3000) {
  if (!env.BREVO_API_KEY) return "BREVO_API_KEY fehlt";
  const kopf = { "api-key": env.BREVO_API_KEY, "content-type": "application/json", accept: "application/json" };
  const kontaktUrl = `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}?identifierType=email_id`;
  try {
    const res = await fetch(kontaktUrl, { headers: kopf, signal: AbortSignal.timeout(timeoutMs) });
    if (res.ok && (await res.json())?.attributes?.PDF_GESENDET) return null;
  } catch (e) {
    return `Brevo nicht erreichbar: ${e.name}`;
  }
  // Vermerk vor dem Senden setzen: lieber im Ausnahmefall keine Mail als zwei
  const jetzt = new Date().toISOString().slice(0, 10);
  let f = await brevo(env, "contacts/attributes/normal/PDF_GESENDET", { type: "date" }, timeoutMs);   // legt das Attribut beim ersten Mal an
  f = await brevoPut(env, kontaktUrl, { attributes: { PDF_GESENDET: jetzt } }, timeoutMs);
  if (f) return f;
  f = await brevo(env, "smtp/email", { templateId: VORLAGE_PDF, to: [vorname ? { email, name: vorname } : { email }], params: { VORNAME: vorname || "" } }, timeoutMs);
  if (f) await brevoPut(env, kontaktUrl, { attributes: { PDF_GESENDET: "" } }, timeoutMs);   // Versand fehlgeschlagen: Vermerk zurücknehmen
  return f;
}

async function brevoPut(env, url, daten, timeoutMs) {
  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: { "api-key": env.BREVO_API_KEY, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(daten),
      signal: AbortSignal.timeout(timeoutMs),
    });
    return res.ok ? null : `Brevo ${res.status}: ${(await res.text()).slice(0, 300)}`;
  } catch (e) {
    return `Brevo nicht erreichbar: ${e.name}`;
  }
}

// Fehlende Schritte für einen Eintrag nachholen. Gibt den aktualisierten Eintrag und ggf. den Fehler zurück.
export async function abarbeiten(env, eintrag, timeoutMs = 3000) {
  const e = { ...eintrag };
  if (!e.kontakt) {
    const f = await kontaktEintragen(env, e.email, e.vorname, timeoutMs);
    if (f) return { eintrag: { ...e, fehler: f }, fehler: f };
    e.kontakt = true;
  }
  if (!e.pdf) {
    const f = await pdfSenden(env, e.email, e.vorname, timeoutMs);
    if (f) return { eintrag: { ...e, fehler: f }, fehler: f };
    e.pdf = new Date().toISOString();
  }
  delete e.fehler;
  return { eintrag: e, fehler: null };
}

const gestoert = (f) => f.startsWith("Brevo nicht erreichbar") || /^Brevo 5\d\d/.test(f);

// Offene Anmeldungen erneut abarbeiten. Fertige wandern von „offen:“ nach „brevo:“.
// Ältere „brevo:“-Einträge ohne PDF-Vermerk (vor dem PDF-Versand angelegt) bekommen die Mail nachgeliefert.
export async function nachtragen(env, max = 20) {
  const kv = env.ANMELDUNGEN;
  const ergebnis = { offen: 0, uebertragen: 0, pdfNachgeliefert: 0, fehlgeschlagen: 0 };
  if (!kv) return ergebnis;

  const { keys } = await kv.list({ prefix: "offen:", limit: max });
  ergebnis.offen = keys.length;
  for (const { name } of keys) {
    const alt = await kv.get(name, "json");
    if (!alt?.email) continue;
    const { eintrag, fehler } = await abarbeiten(env, alt, 8000);
    if (!fehler) {
      await kv.put("brevo:" + name.slice("offen:".length), JSON.stringify({ ...eintrag, nachgetragen: new Date().toISOString() }));
      await kv.delete(name);
      ergebnis.uebertragen++;
    } else {
      await kv.put(name, JSON.stringify({ ...eintrag, versuche: (alt.versuche || 0) + 1 }));
      ergebnis.fehlgeschlagen++;
      if (gestoert(fehler)) return ergebnis;   // Brevo noch gestört: nicht alles weitere anlaufen lassen
    }
  }

  const fertig = await kv.list({ prefix: "brevo:", limit: 200 });
  for (const { name } of fertig.keys) {
    const alt = await kv.get(name, "json");
    if (!alt?.email || alt.pdf) continue;
    const { eintrag, fehler } = await abarbeiten(env, { ...alt, kontakt: true }, 8000);
    await kv.put(name, JSON.stringify(eintrag));
    if (fehler) { ergebnis.fehlgeschlagen++; if (gestoert(fehler)) return ergebnis; }
    else ergebnis.pdfNachgeliefert++;
  }
  return ergebnis;
}
