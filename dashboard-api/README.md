# Performance-Dashboard: GitHub-App-Backend

Das Dashboard ist eine statische GitHub-Pages-Seite. Deshalb darf ein
GitHub-Schreibschlüssel nicht im Browser oder in der HTML-Datei liegen.

Dieser Cloudflare Worker ist die schmale Schreibbrücke:

```
Browser -> Dashboard-Passwort -> Worker -> GitHub App -> instagram-assets
```

Der Browser bekommt **niemals** einen GitHub-Token. Nach dem Login erhält er
nur ein 12 Stunden gültiges, vom Worker signiertes Sitzungstoken. Der Worker
erzeugt bei Bedarf selbst einen kurzlebigen GitHub-App-Installation-Token.

Browserdaten löschen bedeutet dann nur: erneut am Dashboard anmelden. Die
GitHub-Berechtigung bleibt serverseitig bestehen.

## 1. GitHub App einmalig anlegen

GitHub -> **Settings -> Developer settings -> GitHub Apps -> New GitHub App**.

Empfohlene Werte:

- Name: z. B. `Performance Dashboard Writer`
- Homepage URL: die GitHub-Pages-Adresse des Dashboards
- Webhook: **deaktivieren**
- Repository permissions -> **Contents: Read and write**
- alle anderen Repository-Rechte auf `No access` lassen
  (Metadata bleibt von GitHub automatisch lesbar)
- Installation: nur auf dem eigenen Account

Danach die App installieren und bei **Only select repositories** genau diese
beiden Repositories auswählen:

- `Ccan-devoloper/herrjurist`
- `Ccan-devoloper/steuerberater`

Anschließend in den App-Einstellungen **Generate a private key**. Die
heruntergeladene PEM-Datei niemals committen oder in Chats kopieren.

Die App-ID steht oben in den App-Einstellungen. Eine Installation-ID muss
nicht notiert werden; der Worker ermittelt sie selbst pro Repository.

## 2. Worker bereitstellen

Das bestehende Cloudflare-Konto kann verwendet werden.

```bash
cd dashboard-api
npx wrangler login
npx wrangler deploy
```

Danach die vier Secrets setzen:

```bash
npx wrangler secret put GITHUB_APP_ID
npx wrangler secret put GITHUB_APP_PRIVATE_KEY
npx wrangler secret put DASHBOARD_PASSWORD
npx wrangler secret put SESSION_SECRET
```

Bei `GITHUB_APP_PRIVATE_KEY` den kompletten Inhalt der von GitHub
heruntergeladenen PEM-Datei eingeben. Alternativ lässt sie sich über stdin
setzen:

```bash
npx wrangler secret put GITHUB_APP_PRIVATE_KEY < /pfad/zur/github-app.pem
```

Für `SESSION_SECRET` eine neue zufällige Zeichenfolge verwenden, z. B.:

```bash
openssl rand -hex 32
```

`DASHBOARD_PASSWORD` ist das Passwort, mit dem das Performance-Dashboard
künftig serverseitig angemeldet wird.

Danach erneut:

```bash
npx wrangler deploy
```

Wrangler zeigt eine Adresse ähnlich
`https://performance-dashboard-api.<dein-workers-subdomain>.workers.dev`.

## 3. Sicherheitsgrenzen

Der Worker lehnt serverseitig alles ab, was nicht ausdrücklich erlaubt ist:

- nur der in `ALLOWED_ORIGIN` konfigurierte Dashboard-Origin
- nur `herrjurist` und `steuerberater`
- nur Zweig `instagram-assets`
- nur Pfade unter `vorproduktion/`
- maximal 30 Dateien pro Commit
- maximal ca. 20 MB pro Schreibvorgang

Das Dashboard-Passwort und der GitHub-App-Private-Key sind ausschließlich
Cloudflare-Secrets. Sie landen weder im GitHub-Repository noch im Browser-
LocalStorage.

## 4. Nächster Schritt

Sobald die Worker-URL feststeht, wird das Dashboard umgestellt:

- Login gegen `POST /session`
- frisches Lesen einer Vorproduktionsdatei über `POST /github/read`
- Speichern von Zeitplan/Folien über `POST /github/commit`
- der bisherige `github_pat_...`-Dialog und `igDashGhToken` entfallen

Bis diese zweite Änderung gemergt ist, funktioniert das bestehende Dashboard
unverändert weiter.
