# Auftrag: Security-Hardening Kanzlei-Interface (Lovable-Projekt „stiftung")

## Kontext

Dieses Repo ist an Lovable angebunden (TanStack Start + Supabase, TypeScript, Bun).
Wichtige Rahmenbedingungen:

- **Keine Git-History umschreiben.** Kein force-push, kein Rebase/Amend/Squash auf bereits
  gepushte Commits — das zerstört die Historie auf Lovable-Seite.
- Der verbundene Branch muss nach jedem Commit lauffähig sein, da er direkt in den
  Lovable-Editor zurücksynchronisiert.
- Arbeite in kleinen, thematisch getrennten Commits.
- Die App läuft **produktiv** unter `stiftung.lovable.app` und wird von einer Anwaltskanzlei
  mit echten Mandantendaten genutzt. Keine Breaking Changes an laufenden Vorgängen.

Ziel dieses Auftrags sind ausschließlich zwei Sicherheitslücken plus eine Prüfung.
Architektur-, Datenschutz- und Feature-Themen sind **nicht** Teil dieses Auftrags.

---

## Problem 1: Server Functions ohne Authentifizierung

Mehrere `createServerFn`-Endpunkte haben keine Auth-Middleware. Da die App öffentlich
publiziert ist, kann jeder im Internet sie per POST aufrufen und die hinterlegten API-Keys
(`OPENAI_API_KEY`, `LOVABLE_API_KEY`, `FIRECRAWL_API_KEY`) auf Kosten des Betreibers
verbrauchen.

Bekannte betroffene Dateien (nicht abschließend — bitte vollständig inventarisieren):

- `src/lib/extract-client-data.functions.ts` → `extractClientData`
- `src/lib/transcribe-audio.functions.ts` → `transcribeAudio`
- `src/lib/aufsatz.functions.ts` → `generateOutline`, `researchTopic`, `generateChapter`,
  `generateAbstract`
- `src/lib/generate-structure-chart.functions.ts` (bitte prüfen)

### Aufgabe

1. Erstelle eine **vollständige Inventur** aller `createServerFn(...)`-Definitionen im Repo
   und klassifiziere jede einzelne als „geschützt" oder „bewusst öffentlich".
2. Ergänze bei allen geschützten Funktionen die vorhandene Auth-Middleware
   (`requireSupabaseAuth` aus `src/integrations/supabase/auth-middleware.ts`, siehe
   `src/lib/access.functions.ts` als Referenzimplementierung).
3. Lege die Inventur als Tabelle in `docs/server-function-auth.md` ab (Pfad, Export-Name,
   Klassifikation, Begründung), damit künftige Ergänzungen abgeglichen werden können.

### KRITISCH: Diese Pfade müssen öffentlich bleiben

Der externe Signaturablauf wird von Mandanten **ohne Login** genutzt. Wenn du diese
Endpunkte mitschützt, brechen laufende Unterschriftsvorgänge.

Öffentlich bleiben müssen mindestens:

- Routen `/unterschreiben/$token`, `/sign/$token` und alles unter `/api/`
  (vgl. `isPublicPath()` in `src/components/GlobalAccessGate.tsx`)
- `src/routes/api/public/brevo/webhook.ts` (Brevo-Webhook, extern aufgerufen)
- `src/routes/api/internal/signature-reminders.ts` (GitHub-Actions-Cron)
- Die Server Functions in `src/lib/signatures/public.functions.ts`,
  `public-v2.functions.ts` und alles, was aus der öffentlichen Signaturansicht heraus
  aufgerufen wird — prüfe das durch Verfolgen der Aufrufe aus
  `src/routes/unterschreiben.$token.tsx` und `src/routes/sign.$token.tsx`.
- Prüfe gesondert `src/routes/abschluss.$token.tsx`: die Route ist derzeit **nicht** in
  `isPublicPath()` enthalten. Kläre durch Codeanalyse, ob das Absicht ist, und
  dokumentiere das Ergebnis, statt es stillschweigend zu ändern.

Diese öffentlichen Endpunkte sind über Token/Signatur abgesichert. Ändere an dieser
Absicherung nichts, aber notiere in `docs/server-function-auth.md`, worauf die Absicherung
jeweils beruht.

Zusätzlich: Prüfe, ob `src/routes/api/internal/signature-reminders.ts` ein Shared Secret
verlangt. Falls nicht, ergänze eine Header-basierte Secret-Prüfung
(`process.env.SIGNATURE_REMINDER_SECRET`) und passe
`.github/workflows/signature-reminders.yml` entsprechend an.

---

## Problem 2: Die Freigabeprüfung ist rein clientseitig

`src/components/GlobalAccessGate.tsx` prüft den Freigabestatus nur im Browser.
`requireSupabaseAuth` prüft ausschließlich, ob ein gültiges Supabase-JWT vorliegt — nicht,
ob der Nutzer in `access_approvals` den Status `approved` hat. Da die Anmeldung offene
Google-OAuth-Selbstregistrierung ist, kann sich jeder ein gültiges Token beschaffen und an
der UI vorbei Server Functions aufrufen.

### Aufgabe

1. **Neue Middleware** `requireApprovedUser` in
   `src/integrations/supabase/auth-middleware.ts` (oder einer eigenen Datei, falls die
   bestehende als generiert markiert ist — sie trägt den Hinweis „automatically generated",
   also lieber `src/lib/auth/require-approved.ts` anlegen und `requireSupabaseAuth`
   intern verketten).
   Sie baut auf `requireSupabaseAuth` auf und wirft, wenn der Nutzer nicht `approved` ist.
2. **Alle geschützten Server Functions** auf `requireApprovedUser` umstellen.
   Ausnahme: `getMyAccess` in `src/lib/access.functions.ts` muss weiterhin für
   nicht-freigegebene Nutzer aufrufbar sein, sonst kann niemand mehr einen Antrag stellen.
   `listAccessApprovals` und `decideAccess` bleiben Admin-geprüft.
3. **RLS-Absicherung in der Datenbank** als neue Migration unter `supabase/migrations/`:
   - `SECURITY DEFINER`-Funktion `public.is_approved()` mit `SET search_path = pg_catalog,
     public`, die `true` liefert, wenn für `auth.uid()` ein `access_approvals`-Datensatz mit
     `status = 'approved'` existiert. Ausführungsrecht nur für `authenticated`.
   - Alle bestehenden RLS-Policies auf Mandanten-, Dokument-, Aktivitäts-, Aufgaben-,
     Zeiterfassungs- und Abrechnungstabellen von `user_id = auth.uid()` auf
     `user_id = auth.uid() AND public.is_approved()` erweitern.
   - **Nicht anfassen:** Policies und RPCs des Signaturbereichs, die für nicht angemeldete
     Unterzeichner funktionieren müssen.
4. **Regressionsschutz:** Der bestehende Eigentümer darf sich nicht aussperren. Prüfe, dass
   der Admin-Datensatz in `access_approvals` auf `approved` steht, und formuliere die
   Migration idempotent (`IF EXISTS` / `DROP POLICY IF EXISTS`), sodass sie gefahrlos
   wiederholt werden kann.

---

## Problem 3: Hardcodierte Admin-Adresse

In `src/lib/access.functions.ts` steht die Admin-Adresse als Literal
(`const ADMIN_EMAIL = "..."`). Ersetze sie durch `process.env.ADMIN_EMAIL` mit dem
bisherigen Wert als Fallback, damit sich das Verhalten ohne gesetzte Variable nicht ändert.
Vermerke die neue Variable in `infra/gotenberg/.env.example` bzw. der passenden
Dokumentation.

---

## Problem 4: Storage-Bucket prüfen (nur Analyse + Bericht)

Der Bucket `mandanten-dokumente` wird laut Migrationskommentar „via Tool angelegt", die
Policies in `supabase/migrations/20260715145944_*.sql` greifen über `owner = auth.uid()`.

Bitte **nicht** eigenmächtig ändern, sondern berichten:

- Ist der Bucket öffentlich oder privat? (Falls du keinen DB-Zugriff hast: beschreibe, wo
  der Betreiber das im Supabase-Dashboard prüft.)
- Es fehlt eine `UPDATE`-Policy auf `storage.objects` für diesen Bucket.
- Die Policies prüfen nur `owner`, nicht das Pfad-Präfix. Der Upload-Pfad lautet
  `${userId}/${mandantId}/...` (siehe `uploadDokument` in `src/lib/mandanten-store.ts`).
  Schlage eine zusätzliche Bedingung
  `(storage.foldername(name))[1] = auth.uid()::text` vor.

Fasse das als Migrationsentwurf unter `docs/pending-migrations/` zusammen, **ohne** ihn
auszuführen.

---

## Ausdrücklich nicht Teil dieses Auftrags

- `SIGNATURE_COMPLETION_V2_ENABLED` bleibt auf `false`. Führe **keine** Migration aus
  `docs/pending-migrations/phase-2.1-v2/` aus.
- Keine Umstellung des Datenmodells von `user_id` auf ein Mandanten-/Organisationsmodell.
- Keine Änderungen an KI-Prompts, Modellauswahl oder Datenflüssen zu externen Anbietern.
- Kein Refactoring „bei der Gelegenheit".

---

## Abnahmekriterien

1. `bun run lint` und `bun run build` laufen fehlerfrei; die bestehende Testsuite
   (insbesondere `src/lib/signatures/__tests__/`) bleibt grün.
2. Für die neue `requireApprovedUser`-Middleware existieren Tests: freigegebener Nutzer
   kommt durch, nicht freigegebener und nicht angemeldeter Nutzer werden abgewiesen.
3. Ein Test oder Skript belegt, dass die zuvor offenen Endpunkte ohne gültiges Token
   abgewiesen werden.
4. `docs/server-function-auth.md` ist vollständig und aktuell.
5. Der öffentliche Signaturablauf ist unverändert: Einladung → Link → Dokumentansicht →
   Unterzeichnen → Abschluss-PDF funktioniert weiterhin ohne Login. Beschreibe im
   Abschlussbericht, wie du das verifiziert hast.

## Vorgehen

Arbeite zuerst die Inventur (Problem 1, Schritt 1) aus und lege sie mir vor, **bevor** du
Middleware ergänzt. Die Klassifikation öffentlich/geschützt ist der risikoreichste Teil des
Auftrags — dort entscheidet sich, ob der Signaturablauf intakt bleibt.
