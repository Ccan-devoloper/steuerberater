import { cpSync, copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });
copyFileSync("index.html", "dist/index.html");

if (!existsSync("source")) {
  throw new Error("Der Ordner 'source' fehlt. Die Lernplattform kann nicht gebaut werden.");
}

cpSync("source", "dist/source", { recursive: true });
console.log("StB Lernplattform wurde nach dist/ gebaut.");
