/* ==========================================================================
   HTML-Vorlagen für Beitragsfolien (1080×1350) und Stories (1080×1920).
   Eine Vorlage je Folienart; das Aussehen kommt aus stile.mjs.
   ========================================================================== */

import path from "node:path";
import { fileURLToPath } from "node:url";
import { iconSvg } from "./stile.mjs";

const hier = path.dirname(fileURLToPath(import.meta.url));
export const FONT_DIR = path.resolve(hier, "../fonts");

export const MASSE = {
  beitrag: { breite: 1080, hoehe: 1350 },
  story: { breite: 1080, hoehe: 1920 },
};

export const KLAUSUR_FARBE = { 1: "k1", 2: "k2", 3: "k3" };

export function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* Hervorhebungen: *wichtig* → <em>, Normen in Mono. */
export function markieren(s) {
  let t = esc(s);
  t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  t = t.replace(/(§§?\s?[\dA-Za-z.\s]+?(?:HGB|EStG|AO|UStG|KStG|GewStG|ErbStG|BewG|UmwStG|AStG|EStDV|EStR|KStR|UStAE|BGB|GrEStG|FGO|DBA))/g, '<code>$1</code>');
  return t;
}

function fontFace(name, datei, gewicht = "400 700") {
  return `@font-face{font-family:"${name}";src:url("file://${FONT_DIR}/${datei}") format("truetype");font-weight:${gewicht};font-display:block}`;
}

export function css(stil, art = "beitrag") {
  const f = stil.farben;
  const s = stil.schrift;
  const m = MASSE[art];
  return `
${fontFace("Anton", "Anton.ttf", "400")}
${fontFace("Oswald", "Oswald.ttf", "200 700")}
${fontFace("Inter", "Inter.ttf", "100 900")}
${fontFace("Space Grotesk", "SpaceGrotesk.ttf", "300 700")}
${fontFace("IBM Plex Sans", "IBMPlexSans.ttf", "100 700")}
${fontFace("IBM Plex Serif", "IBMPlexSerif-Bold.ttf", "700")}
${fontFace("IBM Plex Serif", "IBMPlexSerif-SemiBold.ttf", "600")}
${fontFace("IBM Plex Mono", "IBMPlexMono-Medium.ttf", "400 500")}
:root{
  --grund:${f.grund};--flaeche:${f.flaeche};--text:${f.text};--text-weich:${f.textWeich};--linie:${f.linie};
  --akzent:${f.akzent};--pille:${f.pille};--pille-text:${f.pilleText};
  --k1:${f.k1};--k2:${f.k2};--k3:${f.k3};--ok:${f.ok};--warn:${f.warn};--rot:${f.rot};
  --ecken:${stil.ecken};
  --titel:"${s.titel}";--sans:"${s.text}";--mono:"${s.mono}";
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${m.breite}px;height:${m.hoehe}px;overflow:hidden;background:var(--grund);color:var(--text);font-family:var(--sans),system-ui,sans-serif;-webkit-font-smoothing:antialiased}
.folie{position:relative;width:${m.breite}px;height:${m.hoehe}px;padding:72px 76px 64px;display:flex;flex-direction:column;background:var(--grund)}
.stil-campus .folie{background:radial-gradient(1200px 900px at 20% 0%,#243070 0%,#141a3a 55%,#0e1230 100%)}
.stil-klausurbogen .folie{background:
  repeating-linear-gradient(0deg,transparent 0 63px,rgba(18,35,63,.08) 63px 64px),
  var(--grund)}
.stil-klausurbogen .folie::before{content:"";position:absolute;left:150px;top:0;bottom:0;width:2px;background:rgba(200,16,46,.35)}
.kopf{display:flex;justify-content:space-between;align-items:center;font-size:26px;letter-spacing:.06em;text-transform:uppercase;color:var(--text-weich);font-weight:600}
.etikett{display:inline-flex;align-items:center;gap:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:24px}
.etikett .punkt{width:18px;height:18px;border-radius:50%;background:currentColor}
.etikett.k1{color:var(--k1)}.etikett.k2{color:var(--k2)}.etikett.k3{color:var(--k3)}
.familie-kanzlei .etikett{font-family:"Oswald";font-size:28px;letter-spacing:.02em;line-height:.95;text-transform:none;font-weight:500;flex-direction:column;align-items:flex-start;gap:0}
.familie-kanzlei .etikett .punkt{display:none}
.zaehler{font-family:var(--mono);font-size:24px;color:var(--text-weich)}
h1{font-family:var(--titel);font-weight:${s.titelGewicht};font-size:112px;line-height:${s.titelZeilenhoehe};letter-spacing:${s.titelSpacing};text-transform:${s.titelTransform};margin-top:54px;text-wrap:balance}
h1.klein{font-size:88px}
h1.winzig{font-size:72px}
h2{font-family:var(--titel);font-weight:${s.titelGewicht};font-size:74px;line-height:1.08;letter-spacing:${s.titelSpacing};margin-top:44px;text-wrap:balance}
.familie-kanzlei h2{font-size:80px}
.unter{margin-top:26px;font-size:36px;line-height:1.35;color:var(--text-weich);max-width:880px}
.text{margin-top:40px;font-size:40px;line-height:1.42;max-width:930px}
.text p+p{margin-top:22px}
ul.punkte{margin-top:40px;list-style:none;display:flex;flex-direction:column;gap:24px;font-size:40px;line-height:1.36}
ul.punkte li{display:flex;gap:24px;align-items:flex-start}
ul.punkte li::before{content:"";flex:none;width:16px;height:16px;border-radius:50%;background:var(--akzent);margin-top:22px}
.stil-klausurbogen ul.punkte li::before{background:var(--rot)}
ol.schritte{margin-top:40px;list-style:none;display:flex;flex-direction:column;gap:26px;counter-reset:s}
ol.schritte li{display:grid;grid-template-columns:96px 1fr;gap:20px;align-items:start;counter-increment:s}
ol.schritte li::before{content:counter(s);font-family:var(--titel);font-size:64px;line-height:1;color:var(--akzent);font-weight:${s.titelGewicht}}
ol.schritte b{display:block;font-size:40px;line-height:1.2;font-weight:700}
ol.schritte span{display:block;font-size:32px;line-height:1.35;color:var(--text-weich);margin-top:6px}
.vergleich{margin-top:44px;display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:start}
.spalte{background:var(--flaeche);border:2px solid var(--linie);border-radius:var(--ecken);padding:34px}
.spalte h3{font-family:var(--titel);font-size:44px;line-height:1.1;margin-bottom:22px;font-weight:${s.titelGewicht}}
.spalte.links h3{color:var(--ok)}.spalte.rechts h3{color:var(--warn)}
.spalte ul{list-style:none;display:flex;flex-direction:column;gap:16px;font-size:31px;line-height:1.35}
.spalte ul li{padding-left:28px;position:relative}
.spalte ul li::before{content:"–";position:absolute;left:0;color:var(--text-weich)}
.rechnung{margin-top:44px;background:var(--flaeche);border:2px solid var(--linie);border-radius:var(--ecken);padding:40px 44px;font-family:var(--mono)}
.rechnung .formel{font-size:44px;line-height:1.3;color:var(--akzent);font-weight:500;text-wrap:balance}
.stil-klausurbogen .rechnung .formel{color:var(--rot)}
.rechnung .zeilen{margin-top:26px;display:flex;flex-direction:column;gap:14px;font-size:32px;line-height:1.35;color:var(--text)}
.rechnung .ergebnis{margin-top:26px;padding-top:22px;border-top:2px solid var(--linie);font-size:38px;font-weight:600}
.merke{margin-top:auto;margin-bottom:auto;font-family:var(--titel);font-size:78px;line-height:1.12;font-weight:${s.titelGewicht};text-wrap:balance}
.merke::before{content:"„";color:var(--akzent)}
.merke::after{content:"“";color:var(--akzent)}
.stil-klausurbogen .merke::before,.stil-klausurbogen .merke::after{color:var(--rot)}
em{font-style:normal;color:var(--akzent);font-weight:700}
.stil-klausurbogen em{color:var(--rot)}
code{font-family:var(--mono);font-size:.92em;white-space:nowrap}
.pille{display:inline-block;margin-top:40px;padding:14px 34px;border-radius:999px;background:var(--pille);color:var(--pille-text);font-weight:700;font-size:30px;letter-spacing:.02em}
.stil-klausurbogen .pille{border-radius:2px}
.fuss{margin-top:auto;display:flex;justify-content:space-between;align-items:flex-end;font-size:28px;color:var(--text-weich)}
.fuss .handle{font-weight:600;color:var(--text)}
.fuss .klausur{font-family:var(--mono);font-size:24px;letter-spacing:.04em}
.illu{position:absolute;right:56px;bottom:90px;width:420px;height:420px;display:flex;align-items:center;justify-content:center;color:var(--akzent);opacity:.95}
.illu .icon{width:300px;height:300px}
.illu::before{content:"";position:absolute;inset:0;border-radius:50%;border:3px solid var(--linie)}
.stil-campus .illu::before{background:rgba(255,255,255,.04);border-color:rgba(214,255,74,.35)}
.stil-klausurbogen .illu{color:var(--akzent)}
.stil-klausurbogen .illu::before{border-color:rgba(18,35,63,.25)}
.geist{position:absolute;right:-30px;top:120px;font-family:var(--titel);font-size:900px;line-height:1;color:var(--text);opacity:.045;pointer-events:none;user-select:none}
.stil-campus .geist{color:var(--akzent);opacity:.06}
.cta{margin-top:auto;margin-bottom:auto;text-align:left}
.cta h2{font-size:92px;margin-top:0}
.cta .liste{margin-top:40px;display:flex;flex-direction:column;gap:22px;font-size:40px;line-height:1.35}
.cta .liste div{display:flex;gap:22px;align-items:center}
.cta .liste .icon{width:56px;height:56px;color:var(--akzent);flex:none}
.cta .web{margin-top:44px;display:inline-block;font-family:var(--mono);font-size:34px;padding:18px 30px;border:2px solid var(--linie);border-radius:var(--ecken)}
.prio{display:inline-flex;align-items:center;gap:12px;margin-top:36px;font-size:26px;color:var(--text-weich);letter-spacing:.04em;text-transform:uppercase;font-weight:600}
.prio i{width:22px;height:22px;border-radius:50%;background:var(--rot);display:inline-block}
.prio.mittel i{background:var(--warn)}.prio.selten i{background:var(--ok)}

/* Stories */
.story{position:relative;width:1080px;height:1920px;padding:150px 84px 130px;display:flex;flex-direction:column;background:var(--grund)}
.stil-campus .story{background:radial-gradient(1300px 1100px at 30% 10%,#243070 0%,#141a3a 55%,#0e1230 100%)}
.stil-klausurbogen .story{background:repeating-linear-gradient(0deg,transparent 0 63px,rgba(18,35,63,.08) 63px 64px),var(--grund)}
.story .kopf{font-size:30px}
.story .ueberzeile{margin-top:70px;font-size:34px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-weich);font-weight:700}
.story .etikett{font-size:30px}
.story h1{font-size:120px;margin-top:34px}
.story h1.klein{font-size:96px}
.story .text{font-size:48px;line-height:1.4;margin-top:44px}
.story .norm{margin-top:60px;font-family:var(--mono);font-size:64px;line-height:1.2;color:var(--akzent);text-wrap:balance}
.stil-klausurbogen .story .norm{color:var(--rot)}
.story .optionen{margin-top:60px;display:flex;flex-direction:column;gap:24px}
.story .optionen div{padding:30px 36px;border:3px solid var(--linie);border-radius:var(--ecken);font-size:42px;line-height:1.3;background:var(--flaeche);display:flex;gap:24px}
.story .optionen div b{font-family:var(--titel);color:var(--akzent);flex:none;width:52px}
.story .optionen div.richtig{border-color:var(--ok);box-shadow:inset 0 0 0 3px var(--ok)}
.story .zahl{margin-top:40px;font-family:var(--titel);font-size:420px;line-height:.95;color:var(--akzent);letter-spacing:-.02em}
.stil-klausurbogen .story .zahl{color:var(--rot)}
.story .zahl-unter{font-size:56px;line-height:1.2;margin-top:10px;font-family:var(--titel);text-wrap:balance}
.story .merke{font-size:96px}
.story .pille{font-size:36px;padding:20px 40px;margin-top:56px}
.story .fuss{font-size:32px}
.story .hinweis{margin-top:60px;font-size:34px;color:var(--text-weich);line-height:1.4}
.story .karte{margin-top:56px;background:var(--flaeche);border:3px solid var(--linie);border-radius:var(--ecken);padding:44px 48px}
.story .karte .t{font-family:var(--titel);font-size:60px;line-height:1.1}
.story .karte .u{margin-top:22px;font-size:38px;line-height:1.4;color:var(--text-weich)}
.story .illu{right:70px;bottom:220px;width:380px;height:380px}
.story .illu .icon{width:260px;height:260px}
.story .geist{font-size:1200px;top:520px}
.story .balken{margin-top:110px;margin-bottom:auto;height:16px;border-radius:999px;background:var(--linie);overflow:hidden}
.story .balken i{display:block;height:100%;background:var(--akzent)}
.story .pfeil{margin-top:auto;text-align:center;font-size:34px;color:var(--text-weich);letter-spacing:.12em;text-transform:uppercase}
`;
}

function kopf(ctx, zaehler) {
  const kl = KLAUSUR_FARBE[ctx.klausur] || "k3";
  const etikett = (ctx.stil.familie || ctx.stil.id) === "kanzlei"
    ? `<span class="etikett ${kl}">${esc(ctx.fachLabel.split(" / ")[0])}</span>`
    : `<span class="etikett ${kl}"><i class="punkt"></i>${esc(ctx.fachLabel)}</span>`;
  return `<div class="kopf">${etikett}<span class="zaehler">${zaehler ? esc(zaehler) : ""}</span></div>`;
}

/* Fußzeile: nur das Handle, und nur wenn eines konfiguriert ist. Keine Website,
   kein Markenname – das kommt später. */
function fuss(ctx) {
  return `<div class="fuss"><span class="handle">${esc(ctx.handle || "")}</span><span class="klausur">${esc(KLAUSUR_KURZ[ctx.klausur] || "")}</span></div>`;
}
const KLAUSUR_KURZ = { 1: "Klausur 1 · Tag 1", 2: "Klausur 2 · Tag 2", 3: "Klausur 3 · Tag 3" };

function bildOderIllu(ctx, folie) {
  if (folie.icon) return `<div class="geist">§</div><div class="illu">${iconSvg(folie.icon)}</div>`;
  return `<div class="geist">§</div>`;
}

function titelKlasse(t) {
  const l = (t || "").length;
  return l > 84 ? "winzig" : l > 56 ? "klein" : "";
}

const FOLIEN = {
  titel: (f, ctx, i, n) => `
    ${kopf(ctx, "")}
    <h1 class="${titelKlasse(f.titel)}">${markieren(f.titel)}</h1>
    ${f.untertitel ? `<p class="unter">${markieren(f.untertitel)}</p>` : ""}
    ${f.prioritaet ? `<div class="prio ${f.prioritaet}"><i></i>${esc(f.prioritaetText || "")}</div>` : ""}
    <div><span class="pille">${esc(f.pille || "Swipen →")}</span></div>
    ${bildOderIllu(ctx, f)}
    ${fuss(ctx)}`,
  text: (f, ctx, i, n) => `
    ${kopf(ctx, `${i}/${n}`)}
    <h2>${markieren(f.titel)}</h2>
    ${f.text ? `<div class="text">${String(f.text).split(/\n+/).map((p) => `<p>${markieren(p)}</p>`).join("")}</div>` : ""}
    ${f.punkte?.length ? `<ul class="punkte">${f.punkte.map((p) => `<li><span>${markieren(p)}</span></li>`).join("")}</ul>` : ""}
    ${fuss(ctx)}`,
  schritte: (f, ctx, i, n) => `
    ${kopf(ctx, `${i}/${n}`)}
    <h2>${markieren(f.titel)}</h2>
    <ol class="schritte">${(f.schritte || []).map((s) => (typeof s === "string" ? `<li><b>${markieren(s)}</b></li>` : `<li><div><b>${markieren(s.titel)}</b>${s.text ? `<span>${markieren(s.text)}</span>` : ""}</div></li>`)).join("")}</ol>
    ${fuss(ctx)}`,
  vergleich: (f, ctx, i, n) => `
    ${kopf(ctx, `${i}/${n}`)}
    <h2>${markieren(f.titel)}</h2>
    <div class="vergleich">
      <div class="spalte links"><h3>${markieren(f.links?.titel)}</h3><ul>${(f.links?.punkte || []).map((p) => `<li>${markieren(p)}</li>`).join("")}</ul></div>
      <div class="spalte rechts"><h3>${markieren(f.rechts?.titel)}</h3><ul>${(f.rechts?.punkte || []).map((p) => `<li>${markieren(p)}</li>`).join("")}</ul></div>
    </div>
    ${fuss(ctx)}`,
  rechnung: (f, ctx, i, n) => `
    ${kopf(ctx, `${i}/${n}`)}
    <h2>${markieren(f.titel)}</h2>
    <div class="rechnung">
      <div class="formel">${esc(f.formel)}</div>
      ${f.zeilen?.length ? `<div class="zeilen">${f.zeilen.map((z) => `<div>${esc(z)}</div>`).join("")}</div>` : ""}
      ${f.ergebnis ? `<div class="ergebnis">${esc(f.ergebnis)}</div>` : ""}
    </div>
    ${f.text ? `<div class="text"><p>${markieren(f.text)}</p></div>` : ""}
    ${fuss(ctx)}`,
  merke: (f, ctx, i, n) => `
    ${kopf(ctx, `${i}/${n}`)}
    ${f.titel ? `<h2>${markieren(f.titel)}</h2>` : ""}
    <p class="merke">${markieren(f.text)}</p>
    ${fuss(ctx)}`,
  cta: (f, ctx, i, n) => `
    ${kopf(ctx, `${i}/${n}`)}
    <div class="cta">
      <h2>${markieren(f.titel || "Folgen für mehr.")}</h2>
      <div class="liste">
        ${(f.punkte || ["Folgen für tägliche Prüfungsfragen", "Speichern für die Wiederholung", "Fragen? Ab in die Kommentare"]).map((p, k) => `<div>${iconSvg(["haken", "buch", "personen"][k % 3], 56)}<span>${markieren(p)}</span></div>`).join("")}
      </div>
    </div>
    ${fuss(ctx)}`,
};

export function folieHtml(folie, ctx, index, anzahl) {
  const render = FOLIEN[folie.art] || FOLIEN.text;
  return `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>${css(ctx.stil, "beitrag")}</style></head>
<body class="stil-${ctx.stil.id} familie-${ctx.stil.familie || ctx.stil.id}"><div class="folie">${render(folie, ctx, index, anzahl)}</div></body></html>`;
}

const sk = (ctx) => kopf(ctx, "");

const STORIES = {
  teaser: (s, ctx) => `
    ${sk(ctx)}
    <div class="ueberzeile">${esc(s.ueberzeile || "Neuer Beitrag")}</div>
    <h1 class="${titelKlasse(s.titel)}">${markieren(s.titel)}</h1>
    ${s.text ? `<div class="text">${markieren(s.text)}</div>` : ""}
    <div><span class="pille">${esc(s.pille || "Zum Beitrag im Profil")}</span></div>
    ${bildOderIllu(ctx, s)}
    ${fuss(ctx)}`,
  frage: (s, ctx) => `
    ${sk(ctx)}
    <div class="ueberzeile">${esc(s.ueberzeile || "Prüfungsfrage")}</div>
    <h1 class="klein">${markieren(s.titel)}</h1>
    ${s.optionen?.length ? `<div class="optionen">${s.optionen.map((o, k) => `<div><b>${"ABCD"[k]}</b><span>${markieren(o)}</span></div>`).join("")}</div>` : ""}
    <div class="pfeil">Antwort in der nächsten Story →</div>
    ${fuss(ctx)}`,
  antwort: (s, ctx) => `
    ${sk(ctx)}
    <div class="ueberzeile">${esc(s.ueberzeile || "Richtig ist")}</div>
    <h1 class="klein">${markieren(s.titel)}</h1>
    ${s.optionen?.length ? `<div class="optionen">${s.optionen.map((o, k) => `<div class="${k === s.richtig ? "richtig" : ""}"><b>${"ABCD"[k]}</b><span>${markieren(o)}</span></div>`).join("")}</div>` : ""}
    ${s.text ? `<div class="text">${markieren(s.text)}</div>` : ""}
    ${fuss(ctx)}`,
  norm: (s, ctx) => `
    ${sk(ctx)}
    <div class="ueberzeile">${esc(s.ueberzeile || "Norm des Tages")}</div>
    <div class="norm">${esc(s.norm)}</div>
    <h1 class="klein">${markieren(s.titel)}</h1>
    ${s.text ? `<div class="text">${markieren(s.text)}</div>` : ""}
    <div class="geist">§</div>
    ${fuss(ctx)}`,
  merksatz: (s, ctx) => `
    ${sk(ctx)}
    <div class="ueberzeile">${esc(s.ueberzeile || "Merksatz")}</div>
    <p class="merke">${markieren(s.text)}</p>
    ${s.titel ? `<div class="hinweis">${markieren(s.titel)}</div>` : ""}
    ${fuss(ctx)}`,
  countdown: (s, ctx) => `
    ${sk(ctx)}
    <div class="ueberzeile">${esc(s.ueberzeile || "Noch")}</div>
    <div class="zahl">${esc(s.zahl)}</div>
    <div class="zahl-unter">${markieren(s.titel)}</div>
    ${s.text ? `<div class="text">${markieren(s.text)}</div>` : ""}
    <div class="balken"><i style="width:${Math.max(2, Math.min(100, Number(s.fortschritt || 0)))}%"></i></div>
    ${fuss(ctx)}`,
  formel: (s, ctx) => `
    ${sk(ctx)}
    <div class="ueberzeile">${esc(s.ueberzeile || "Rechenweg")}</div>
    <h1 class="klein">${markieren(s.titel)}</h1>
    <div class="karte"><div class="t" style="font-family:var(--mono)">${esc(s.formel)}</div>${s.text ? `<div class="u">${markieren(s.text)}</div>` : ""}</div>
    ${fuss(ctx)}`,
  begriff: (s, ctx) => `
    ${sk(ctx)}
    <div class="ueberzeile">${esc(s.ueberzeile || "Begriff des Tages")}</div>
    <h1 class="klein">${markieren(s.titel)}</h1>
    ${s.norm ? `<div class="norm" style="font-size:44px;margin-top:30px">${esc(s.norm)}</div>` : ""}
    <div class="text">${markieren(s.text)}</div>
    ${bildOderIllu(ctx, s)}
    ${fuss(ctx)}`,
  zahl: (s, ctx) => `
    ${sk(ctx)}
    <div class="ueberzeile">${esc(s.ueberzeile || "Zahl des Tages")}</div>
    <div class="zahl" style="font-size:300px">${esc(s.zahl)}</div>
    <div class="zahl-unter">${markieren(s.titel)}</div>
    ${s.text ? `<div class="text">${markieren(s.text)}</div>` : ""}
    ${fuss(ctx)}`,
  tipp: (s, ctx) => `
    ${sk(ctx)}
    <div class="ueberzeile">${esc(s.ueberzeile || "Klausurtipp")}</div>
    <h1 class="klein">${markieren(s.titel)}</h1>
    <div class="text">${markieren(s.text)}</div>
    ${bildOderIllu(ctx, s)}
    ${fuss(ctx)}`,
  fehler: (s, ctx) => `
    ${sk(ctx)}
    <div class="ueberzeile">${esc(s.ueberzeile || "Typischer Fehler")}</div>
    <h1 class="klein">${markieren(s.titel)}</h1>
    <div class="karte"><div class="t" style="color:var(--rot)">Falsch</div><div class="u">${markieren(s.falsch)}</div></div>
    <div class="karte"><div class="t" style="color:var(--ok)">Richtig</div><div class="u">${markieren(s.richtigText || s.text)}</div></div>
    ${fuss(ctx)}`,
};

export function storyHtml(story, ctx) {
  const render = STORIES[story.art] || STORIES.tipp;
  return `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>${css(ctx.stil, "story")}</style></head>
<body class="stil-${ctx.stil.id} familie-${ctx.stil.familie || ctx.stil.id}"><div class="story">${render(story, ctx)}</div></body></html>`;
}

export const FOLIEN_ARTEN = Object.keys(FOLIEN);
export const STORY_ARTEN = Object.keys(STORIES);
