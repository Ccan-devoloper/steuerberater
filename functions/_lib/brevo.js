// Gemeinsame Brevo-Anbindung für /api/anmelden und /api/nachtragen (kein eigener Pfad: liegt außerhalb von api/).
const LISTE_MUENDLICHE = 3;

// null = Kontakt ist in Brevo, sonst Fehlertext
export async function anBrevo(env, email, vorname, timeoutMs = 3000) {
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
      signal: AbortSignal.timeout(timeoutMs),
    });
    // 201 = neu angelegt, 204 = vorhandener Kontakt aktualisiert
    return res.ok ? null : `Brevo ${res.status}: ${(await res.text()).slice(0, 300)}`;
  } catch (e) {
    return `Brevo nicht erreichbar: ${e.name}`;
  }
}

// Offene Anmeldungen erneut an Brevo schicken. Erfolgreiche wandern von „offen:“ nach „brevo:“.
export async function nachtragen(env, max = 20) {
  const kv = env.ANMELDUNGEN;
  const ergebnis = { offen: 0, uebertragen: 0, fehlgeschlagen: 0 };
  if (!kv) return ergebnis;
  const { keys } = await kv.list({ prefix: "offen:", limit: max });
  ergebnis.offen = keys.length;
  for (const { name } of keys) {
    const eintrag = await kv.get(name, "json");
    if (!eintrag?.email) continue;
    const fehler = await anBrevo(env, eintrag.email, eintrag.vorname, 8000);
    if (!fehler) {
      const { fehler: _alt, ...rest } = eintrag;
      await kv.put("brevo:" + name.slice("offen:".length), JSON.stringify({ ...rest, nachgetragen: new Date().toISOString() }));
      await kv.delete(name);
      ergebnis.uebertragen++;
    } else {
      await kv.put(name, JSON.stringify({ ...eintrag, fehler, versuche: (eintrag.versuche || 0) + 1 }));
      ergebnis.fehlgeschlagen++;
      // Ist Brevo noch gestört, nicht alle weiteren Einträge anlaufen lassen
      if (fehler.startsWith("Brevo nicht erreichbar") || /^Brevo 5\d\d/.test(fehler)) break;
    }
  }
  return ergebnis;
}
