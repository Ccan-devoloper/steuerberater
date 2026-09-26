/**
 * Server-side write bridge for the Performance Dashboard.
 *
 * The browser never receives a GitHub credential. It authenticates with the
 * dashboard password, gets a short-lived signed session token, and sends write
 * operations here. This Worker authenticates to GitHub as a GitHub App and
 * mints short-lived installation tokens only when needed.
 *
 * Required Worker secrets:
 *   DASHBOARD_PASSWORD
 *   SESSION_SECRET
 *   GITHUB_APP_ID
 *   GITHUB_APP_PRIVATE_KEY
 *
 * Non-secret vars live in wrangler.toml:
 *   ALLOWED_ORIGIN
 *   ALLOWED_REPOS
 *   GITHUB_BRANCH
 */

const encoder = new TextEncoder();
const decoder = new TextDecoder();

let installCache = new Map();

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", ...headers },
  });
}

function allowedOrigin(request, env) {
  const origin = request.headers.get("origin") || "";
  return origin && origin === String(env.ALLOWED_ORIGIN || "") ? origin : "";
}

function corsHeaders(request, env) {
  const origin = allowedOrigin(request, env);
  return origin ? {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "authorization,content-type",
    "access-control-max-age": "86400",
    "vary": "Origin",
  } : { "vary": "Origin" };
}

function b64urlBytes(bytes) {
  let s = "";
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function b64urlText(text) {
  return b64urlBytes(encoder.encode(text));
}

function fromB64url(text) {
  const s = String(text).replace(/-/g, "+").replace(/_/g, "/");
  const padded = s + "=".repeat((4 - (s.length % 4 || 4)) % 4);
  const raw = atob(padded);
  return Uint8Array.from(raw, c => c.charCodeAt(0));
}

async function sha256(text) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(String(text))));
}

function equalBytes(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

async function passwordMatches(input, env) {
  const expected = String(env.DASHBOARD_PASSWORD || "");
  if (!expected) return false;
  return equalBytes(await sha256(input), await sha256(expected));
}

async function hmacKey(secret) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(String(secret)),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

async function makeSession(env) {
  const now = Math.floor(Date.now() / 1000);
  const payload = { v: 1, iat: now, exp: now + 12 * 60 * 60 };
  const body = b64urlText(JSON.stringify(payload));
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", await hmacKey(env.SESSION_SECRET), encoder.encode(body)));
  return { token: body + "." + b64urlBytes(sig), expiresAt: payload.exp * 1000 };
}

async function verifySession(request, env) {
  const auth = request.headers.get("authorization") || "";
  if (!auth.startsWith("Bearer ")) return null;
  const token = auth.slice(7).trim();
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [body, sigText] = parts;
  let sig;
  try { sig = fromB64url(sigText); } catch { return null; }
  const ok = await crypto.subtle.verify("HMAC", await hmacKey(env.SESSION_SECRET), sig, encoder.encode(body));
  if (!ok) return null;
  let payload;
  try { payload = JSON.parse(decoder.decode(fromB64url(body))); } catch { return null; }
  const now = Math.floor(Date.now() / 1000);
  if (payload?.v !== 1 || !Number.isFinite(payload.exp) || payload.exp <= now) return null;
  return payload;
}

function allowedRepos(env) {
  return new Set(String(env.ALLOWED_REPOS || "").split(",").map(x => x.trim()).filter(Boolean));
}

function validateRepo(repo, env) {
  if (!allowedRepos(env).has(repo)) throw Object.assign(new Error("Repository nicht freigegeben."), { status: 403 });
}

function validateBranch(branch, env) {
  if (branch !== String(env.GITHUB_BRANCH || "instagram-assets")) {
    throw Object.assign(new Error("Zweig nicht freigegeben."), { status: 403 });
  }
}

function validatePath(path) {
  const p = String(path || "");
  if (!p.startsWith("vorproduktion/") || p.includes("..") || p.startsWith("/") || p.length > 500) {
    throw Object.assign(new Error("Pfad nicht freigegeben."), { status: 403 });
  }
  return p;
}

function pemBody(pem) {
  return String(pem || "")
    .replace(/-----BEGIN [^-]+-----/g, "")
    .replace(/-----END [^-]+-----/g, "")
    .replace(/\s+/g, "");
}

function derLength(n) {
  if (n < 128) return Uint8Array.of(n);
  const bytes = [];
  while (n > 0) { bytes.unshift(n & 255); n >>>= 8; }
  return Uint8Array.of(0x80 | bytes.length, ...bytes);
}

function derWrap(tag, bytes) {
  return Uint8Array.of(tag, ...derLength(bytes.length), ...bytes);
}

function concatBytes(...parts) {
  const len = parts.reduce((n, p) => n + p.length, 0);
  const out = new Uint8Array(len);
  let off = 0;
  for (const p of parts) { out.set(p, off); off += p.length; }
  return out;
}

function pkcs1ToPkcs8(pkcs1) {
  // PrivateKeyInfo ::= SEQUENCE { version, AlgorithmIdentifier(rsaEncryption), OCTET STRING(pkcs1) }
  const version = Uint8Array.of(0x02, 0x01, 0x00);
  const rsaOid = Uint8Array.of(0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01, 0x01);
  const nullValue = Uint8Array.of(0x05, 0x00);
  const algorithm = derWrap(0x30, concatBytes(rsaOid, nullValue));
  const privateKey = derWrap(0x04, pkcs1);
  return derWrap(0x30, concatBytes(version, algorithm, privateKey));
}

function pemToDer(pem) {
  const body = pemBody(pem);
  if (!body) throw new Error("GitHub-App-Private-Key fehlt.");
  const raw = Uint8Array.from(atob(body), c => c.charCodeAt(0));
  return /BEGIN RSA PRIVATE KEY/.test(String(pem)) ? pkcs1ToPkcs8(raw) : raw;
}

async function githubPrivateKey(env) {
  return crypto.subtle.importKey(
    "pkcs8",
    pemToDer(env.GITHUB_APP_PRIVATE_KEY),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
}

async function githubAppJwt(env) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64urlText(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = b64urlText(JSON.stringify({ iat: now - 60, exp: now + 8 * 60, iss: String(env.GITHUB_APP_ID || "") }));
  const unsigned = header + "." + payload;
  const sig = new Uint8Array(await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    await githubPrivateKey(env),
    encoder.encode(unsigned),
  ));
  return unsigned + "." + b64urlBytes(sig);
}

async function githubJson(url, token, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      authorization: "Bearer " + token,
      accept: "application/vnd.github+json",
      "x-github-api-version": "2022-11-28",
      "user-agent": "performance-dashboard-github-app",
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  let body = null;
  try { body = text ? JSON.parse(text) : null; } catch { body = text; }
  if (!res.ok) {
    const msg = body?.message || (typeof body === "string" ? body : "") || ("GitHub " + res.status);
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }
  return body;
}

async function installationToken(repo, env) {
  const cached = installCache.get(repo);
  if (cached && cached.expiresAt > Date.now() + 5 * 60 * 1000) return cached.token;

  const appJwt = await githubAppJwt(env);
  const installation = await githubJson(
    "https://api.github.com/repos/" + repo + "/installation",
    appJwt,
  );
  const minted = await githubJson(
    "https://api.github.com/app/installations/" + installation.id + "/access_tokens",
    appJwt,
    { method: "POST" },
  );
  const expiresAt = Date.parse(minted.expires_at || "") || (Date.now() + 50 * 60 * 1000);
  installCache.set(repo, { token: minted.token, expiresAt });
  return minted.token;
}

async function readFile(repo, path, ref, env) {
  validateRepo(repo, env);
  validateBranch(ref, env);
  path = validatePath(path);
  const token = await installationToken(repo, env);
  const url = "https://api.github.com/repos/" + repo + "/contents/" +
    path.split("/").map(encodeURIComponent).join("/") + "?ref=" + encodeURIComponent(ref);
  const res = await fetch(url, {
    headers: {
      authorization: "Bearer " + token,
      accept: "application/vnd.github.raw",
      "x-github-api-version": "2022-11-28",
      "user-agent": "performance-dashboard-github-app",
    },
  });
  if (!res.ok) {
    const err = new Error("Datei nicht ladbar (GitHub " + res.status + ")");
    err.status = res.status;
    throw err;
  }
  return res.text();
}

async function commitFiles(repo, branch, files, message, env) {
  validateRepo(repo, env);
  validateBranch(branch, env);
  if (!Array.isArray(files) || !files.length || files.length > 30) {
    throw Object.assign(new Error("Ungültige Dateiliste."), { status: 400 });
  }
  const normalized = files.map(f => {
    const path = validatePath(f.path);
    const hasText = typeof f.text === "string";
    const hasB64 = typeof f.b64 === "string";
    if (hasText === hasB64) throw Object.assign(new Error("Datei braucht genau text oder b64."), { status: 400 });
    return { path, text: hasText ? f.text : null, b64: hasB64 ? f.b64 : null };
  });
  const approxBytes = normalized.reduce((n, f) => n + (f.text ? encoder.encode(f.text).length : Math.ceil(f.b64.length * 0.75)), 0);
  if (approxBytes > 20 * 1024 * 1024) throw Object.assign(new Error("Upload ist zu groß."), { status: 413 });
  const msg = String(message || "").trim().slice(0, 500);
  if (!msg) throw Object.assign(new Error("Commit-Nachricht fehlt."), { status: 400 });

  const token = await installationToken(repo, env);
  const base = "https://api.github.com/repos/" + repo;

  const blobs = await Promise.all(normalized.map(f => githubJson(
    base + "/git/blobs",
    token,
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(f.b64 != null
        ? { content: f.b64, encoding: "base64" }
        : { content: f.text, encoding: "utf-8" }),
    },
  )));

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const ref = await githubJson(base + "/git/ref/heads/" + encodeURIComponent(branch), token);
      const baseSha = ref.object.sha;
      const baseCommit = await githubJson(base + "/git/commits/" + baseSha, token);
      const tree = await githubJson(base + "/git/trees", token, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          base_tree: baseCommit.tree.sha,
          tree: normalized.map((f, i) => ({ path: f.path, mode: "100644", type: "blob", sha: blobs[i].sha })),
        }),
      });
      const commit = await githubJson(base + "/git/commits", token, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: msg, tree: tree.sha, parents: [baseSha] }),
      });
      await githubJson(base + "/git/refs/heads/" + encodeURIComponent(branch), token, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sha: commit.sha }),
      });
      return { sha: commit.sha, url: commit.html_url || null };
    } catch (err) {
      if (attempt === 2 || (err.status !== 409 && err.status !== 422)) throw err;
    }
  }
  throw new Error("Commit fehlgeschlagen.");
}

async function requestJson(request) {
  const type = request.headers.get("content-type") || "";
  if (!type.includes("application/json")) throw Object.assign(new Error("JSON erwartet."), { status: 415 });
  return request.json();
}

export default {
  async fetch(request, env) {
    const cors = corsHeaders(request, env);
    if (request.method === "OPTIONS") {
      if (!allowedOrigin(request, env)) return new Response(null, { status: 403, headers: cors });
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);

    if (url.pathname === "/health" && request.method === "GET") {
      return json({ ok: true }, 200, cors);
    }

    if (!allowedOrigin(request, env)) {
      return json({ error: "Origin nicht freigegeben." }, 403, cors);
    }

    try {
      if (url.pathname === "/session" && request.method === "POST") {
        const body = await requestJson(request);
        if (!await passwordMatches(body?.password || "", env)) {
          return json({ error: "Passwort nicht korrekt." }, 401, cors);
        }
        return json(await makeSession(env), 200, cors);
      }

      if (url.pathname === "/session" && request.method === "GET") {
        const session = await verifySession(request, env);
        if (!session) return json({ error: "Sitzung abgelaufen." }, 401, cors);
        return json({ ok: true, expiresAt: session.exp * 1000 }, 200, cors);
      }

      const session = await verifySession(request, env);
      if (!session) return json({ error: "Sitzung abgelaufen." }, 401, cors);

      if (url.pathname === "/github/read" && request.method === "POST") {
        const body = await requestJson(request);
        const text = await readFile(String(body?.repo || ""), String(body?.path || ""), String(body?.ref || ""), env);
        return new Response(text, { status: 200, headers: { ...cors, "content-type": "text/plain; charset=utf-8" } });
      }

      if (url.pathname === "/github/commit" && request.method === "POST") {
        const body = await requestJson(request);
        const commit = await commitFiles(
          String(body?.repo || ""),
          String(body?.branch || ""),
          body?.files,
          body?.message,
          env,
        );
        return json(commit, 200, cors);
      }

      return json({ error: "Nicht gefunden." }, 404, cors);
    } catch (err) {
      const status = Number(err?.status) || 500;
      const safe = status >= 500 ? "Serverfehler." : String(err?.message || "Fehler");
      console.log("dashboard-api", status, err?.message || err);
      return json({ error: safe }, status, cors);
    }
  },
};
