/* Zugriff auf die ausgelagerten Erklärvideos.

   Die Videodateien liegen nicht im Repository, sondern in einem Objektspeicher
   (Cloudflare R2 o. ä.). Grund: Git speichert jede Fassung einer Binärdatei
   dauerhaft zusätzlich, und GitHub Pages begrenzt die veröffentlichte Seite auf
   1 GB – beides verträgt sich nicht mit ein paar hundert Videos.

   Die Basisadresse kommt aus VITE_VIDEO_BASIS. Ist sie leer, verhält sich die
   Seite exakt wie vorher: Es erscheint kein Video, nur der eingebaute
   Abspieler aus den Moduldaten. */

import manifest from "../data/video-manifest.json";

const BASIS = (import.meta.env?.VITE_VIDEO_BASIS || "").replace(/\/+$/, "");

export const videoBasisGesetzt = BASIS.length > 0;

/* Dateiname folgt einer festen Regel, damit Renderer und Seite ohne
   Absprache dieselbe Adresse bilden: k3-modul-001.mp4 */
export function videoDatei(campus, modulId) {
  return `${campus}-modul-${String(modulId).padStart(3, "0")}.mp4`;
}

export function videoEintrag(campus, modulId) {
  return manifest.videos?.[`${campus}-${modulId}`] || null;
}

export function videoUrl(campus, modulId) {
  if (!BASIS) return null;
  if (!videoEintrag(campus, modulId)) return null;
  return `${BASIS}/${videoDatei(campus, modulId)}`;
}

export function vorschauUrl(campus, modulId) {
  if (!BASIS || !videoEintrag(campus, modulId)) return null;
  return `${BASIS}/${videoDatei(campus, modulId).replace(/\.mp4$/, ".jpg")}`;
}
