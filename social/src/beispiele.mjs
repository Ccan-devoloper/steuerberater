/* Rendert die Beispielinhalte (beispiele/inhalte.json):
     node src/beispiele.mjs [zielordner] [stil|alle] [--fotos]
   Der Kanzlei-Stil wird im Wechsel Schwarz/Weiß gerendert. Mit --fotos
   bekommen Titelfolien ein Foto (Platzhalterbilder aus beispiele/fotos, im
   Betrieb liefert Pexels das passende Stockfoto). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { beitragRendern, storyRendern, browserBeenden } from "./render.mjs";
import { STILE } from "./stile.mjs";
import { FAECHER } from "./inhalte.mjs";

const hier = path.dirname(fileURLToPath(import.meta.url));
const daten = JSON.parse(fs.readFileSync(path.resolve(hier, "../beispiele/inhalte.json"), "utf8"));
const argv = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const ziel = argv[0] || path.resolve(hier, "../beispiele/out");
const nurStil = argv[1] && argv[1] !== "alle" ? argv[1] : null;
const mitFotos = process.argv.includes("--fotos");
const fotoPfad = (name) => (mitFotos && name ? path.resolve(hier, "../beispiele/fotos", name) : undefined);

const t0 = Date.now();
let n = 0;
for (const stilName of Object.keys(STILE).filter((s) => s !== "kanzlei-hell")) {
  if (nurStil && nurStil !== stilName) continue;
  daten.beitraege.forEach(async () => {});
  for (const [i, b] of daten.beitraege.entries()) {
    const folien = b.folien.map((f, k) => (k === 0 ? { ...f, fotoPfad: fotoPfad(b.fotoBeispiel) } : f));
    const pfade = await beitragRendern({ ...b, folien, fachLabel: FAECHER[b.fach].label }, path.join(ziel, stilName), { stil: stilName, variante: i });
    n += pfade.length;
  }
  for (const [i, s] of daten.stories.entries()) {
    await storyRendern({ ...s, fotoPfad: fotoPfad(s.fotoBeispiel), fachLabel: FAECHER[s.fach].label }, path.join(ziel, stilName, `story-${String(i + 1).padStart(2, "0")}-${s.art}.jpg`), { stil: stilName, variante: i });
    n++;
  }
}
await browserBeenden();
console.log(`${n} Bilder in ${((Date.now() - t0) / 1000).toFixed(1)} s → ${ziel}`);
