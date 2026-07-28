import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { gunzipSync } from "node:zlib";

const files = [
  ["source/index.html.gz", "index.html"],
  ["source/assets/styles.css.gz", "public/assets/styles.css"],
  ["source/data/bilanzen.js.gz", "public/data/bilanzen.js"],
  ["source/assets/app.js.gz", "public/assets/app.js"],
];

for (const [source, target] of files) {
  if (!existsSync(source)) {
    throw new Error(`Benötigte Quelldatei fehlt: ${source}`);
  }

  const directory = target.split("/").slice(0, -1).join("/");
  if (directory) mkdirSync(directory, { recursive: true });
  writeFileSync(target, gunzipSync(readFileSync(source)));
}

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#12365e"/><path d="M15 18h34v7H15zm0 13h22v7H15zm0 13h34v7H15z" fill="#fff"/><circle cx="46" cy="34.5" r="8" fill="#1d6b46"/><path d="m42.5 34.5 2.2 2.2 4.4-5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
mkdirSync("public/assets", { recursive: true });
writeFileSync("public/assets/favicon.svg", favicon);

console.log("StB Lernplattform für den Vite-Server vorbereitet.");
