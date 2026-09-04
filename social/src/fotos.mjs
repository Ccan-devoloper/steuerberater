/* Optionale Stockfotos über Pexels (kostenlos, Schlüssel in PEXELS_API_KEY).
   Ohne Schlüssel liefert die Suche null – die Vorlagen rendern dann Icons. */
import fs from "node:fs";
import path from "node:path";
import { CONFIG } from "./config.mjs";

export async function fotoSuchen(suchbegriff, zielVerzeichnis, seed = 0) {
  const key = CONFIG.fotos.pexelsKey;
  if (!key || !suchbegriff) return null;
  try {
    const url = new URL("https://api.pexels.com/v1/search");
    url.searchParams.set("query", suchbegriff);
    url.searchParams.set("orientation", "square");
    url.searchParams.set("per_page", "8");
    const res = await fetch(url, { headers: { Authorization: key } });
    if (!res.ok) return null;
    const json = await res.json();
    const fotos = json.photos || [];
    if (!fotos.length) return null;
    const foto = fotos[seed % fotos.length];
    const bild = await fetch(foto.src.large2x || foto.src.large);
    if (!bild.ok) return null;
    fs.mkdirSync(zielVerzeichnis, { recursive: true });
    const pfad = path.join(zielVerzeichnis, `foto-${foto.id}.jpg`);
    fs.writeFileSync(pfad, Buffer.from(await bild.arrayBuffer()));
    return { pfad, urheber: foto.photographer, quelle: foto.url };
  } catch (e) {
    console.warn(`Foto-Suche fehlgeschlagen: ${e.message}`);
    return null;
  }
}
