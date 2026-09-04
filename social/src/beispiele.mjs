/* Rendert die Beispielinhalte (beispiele/inhalte.json) in allen drei Stilen,
   damit Stilrichtung und Formate verglichen werden können. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { beitragRendern, storyRendern, browserBeenden } from "./render.mjs";
import { STILE } from "./stile.mjs";
import { FAECHER } from "./inhalte.mjs";

const hier = path.dirname(fileURLToPath(import.meta.url));
const daten = JSON.parse(fs.readFileSync(path.resolve(hier, "../beispiele/inhalte.json"), "utf8"));
const ziel = process.argv[2] || path.resolve(hier, "../beispiele/out");
const nurStil = process.argv[3];

const t0 = Date.now();
let n = 0;
for (const stilName of Object.keys(STILE)) {
  if (nurStil && nurStil !== stilName) continue;
  for (const b of daten.beitraege) {
    const pfade = await beitragRendern({ ...b, fachLabel: FAECHER[b.fach].label }, path.join(ziel, stilName), { stil: stilName });
    n += pfade.length;
  }
  for (const [i, s] of daten.stories.entries()) {
    await storyRendern({ ...s, fachLabel: FAECHER[s.fach].label }, path.join(ziel, stilName, `story-${String(i + 1).padStart(2, "0")}-${s.art}.jpg`), { stil: stilName });
    n++;
  }
}
await browserBeenden();
console.log(`${n} Bilder in ${((Date.now() - t0) / 1000).toFixed(1)} s → ${ziel}`);
