import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { gunzipSync } from "node:zlib";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist/assets", { recursive: true });
mkdirSync("dist/data", { recursive: true });

const files = [
  ["source/index.html.gz", "dist/index.html"],
  ["source/assets/styles.css.gz", "dist/assets/styles.css"],
  ["source/data/bilanzen.js.gz", "dist/data/bilanzen.js"],
  ["source/assets/app.js.gz", "dist/assets/app.js"],
];

for (const [source, target] of files) {
  if (!existsSync(source)) {
    throw new Error(`Benötigte Quelldatei fehlt: ${source}`);
  }
  writeFileSync(target, gunzipSync(readFileSync(source)));
}

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#12365e"/><path d="M15 18h34v7H15zm0 13h22v7H15zm0 13h34v7H15z" fill="#fff"/><circle cx="46" cy="34.5" r="8" fill="#1d6b46"/><path d="m42.5 34.5 2.2 2.2 4.4-5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
writeFileSync("dist/assets/favicon.svg", favicon);

console.log("StB Lernplattform wurde vollständig nach dist/ gebaut.");
