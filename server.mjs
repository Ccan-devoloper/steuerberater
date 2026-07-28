import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { gunzipSync } from "node:zlib";

const port = Number(process.env.PORT || 8080);
const host = "0.0.0.0";

const files = new Map([
  ["/", ["source/index.html.gz", "text/html; charset=utf-8"]],
  ["/index.html", ["source/index.html.gz", "text/html; charset=utf-8"]],
  ["/assets/styles.css", ["source/assets/styles.css.gz", "text/css; charset=utf-8"]],
  ["/data/bilanzen.js", ["source/data/bilanzen.js.gz", "text/javascript; charset=utf-8"]],
  ["/assets/app.js", ["source/assets/app.js.gz", "text/javascript; charset=utf-8"]],
]);

const favicon = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#12365e"/><path d="M15 18h34v7H15zm0 13h22v7H15zm0 13h34v7H15z" fill="#fff"/><circle cx="46" cy="34.5" r="8" fill="#1d6b46"/><path d="m42.5 34.5 2.2 2.2 4.4-5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`);

const cache = new Map();
for (const [url, [path, type]] of files) {
  cache.set(url, { body: gunzipSync(readFileSync(path)), type });
}

const server = createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

  if (url.pathname === "/assets/favicon.svg") {
    response.writeHead(200, {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "no-cache",
    });
    response.end(favicon);
    return;
  }

  const file = cache.get(url.pathname) || (url.pathname.startsWith("/#") ? cache.get("/") : null);
  if (!file) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Nicht gefunden");
    return;
  }

  response.writeHead(200, {
    "Content-Type": file.type,
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(file.body);
});

server.listen(port, host, () => {
  console.log(`StB Examenscampus läuft auf http://${host}:${port}`);
});
