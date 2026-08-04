#!/usr/bin/env node
import fs from "node:fs";

const cssPfad = "src/index.css";
const htmlPfad = "index.html";
const marker = "/* Mobile-Gesamtoptimierung · 2026-08 */";

let css = fs.readFileSync(cssPfad, "utf8");
if (!css.includes(marker)) {
  css += `

${marker}
html, body, #root {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow-x: clip;
}
body { overflow-wrap: anywhere; }
.topbar > *, .klausur > *, .rail > *, .page > *, .pagehead > *, .lesson__kopf > *,
.tz__body, .tz__body > *, .panel, .modul > *, .fallsammlung__fall > * { min-width: 0; }
img, video, canvas { max-width: 100%; height: auto; }
svg { max-width: 100%; }
.scroll-x, .formel__ausdruck {
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-inline: contain;
}
.lesson, .modules, .register, .training, .fallsammlung, .falluebersicht__steuerung { width: 100%; max-width: 100%; }
.lesson h1, .pagehead h1, .tz__titel, .formel__ausdruck, .quellen a, .notiz, .fall__block,
.fallsammlung__text, .fallsammlung__kopf h3 { overflow-wrap: anywhere; word-break: normal; }

@media (max-width: 900px) {
  .rail {
    position: static;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    height: auto;
    padding: 0 8px;
    display: block;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-inline: contain;
    -webkit-overflow-scrolling: touch;
  }
  .rail__nav {
    display: flex;
    width: max-content;
    min-width: 100%;
    gap: 2px;
  }
  .rail__link {
    flex: 0 0 auto;
    min-height: 48px;
    padding: 10px 12px;
    white-space: nowrap;
  }
  .page { width: 100%; max-width: 100%; margin-left: 0; }
  .pagehead, .lesson__kopf { align-items: flex-start; }
  .lesson__kopf h1 { max-width: 100%; }
}

@media (max-width: 700px) {
  :root { --kopf: auto; }
  body { font-size: 15px; }
  .topbar {
    position: relative;
    top: auto;
    height: auto;
    min-height: 0;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 38px;
    grid-template-rows: auto auto;
    gap: 10px 8px;
    padding: 10px max(12px, env(safe-area-inset-right)) 10px max(12px, env(safe-area-inset-left));
  }
  .brand {
    grid-column: 1;
    grid-row: 1;
    min-width: 0;
    max-width: 100%;
  }
  .brand__text { min-width: 0; }
  .brand__text strong { font-size: 15px; line-height: 1.25; }
  .brand__text span { display: none; }
  .topbar__spacer { display: none; }
  .search {
    grid-column: 1 / -1;
    grid-row: 2;
    width: 100%;
    min-width: 0;
  }
  .search input { width: 100%; max-width: none; }
  .iconbtn { grid-column: 2; grid-row: 1; align-self: center; }

  .klausuren {
    position: relative;
    top: auto;
    display: flex;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-inline: contain;
    -webkit-overflow-scrolling: touch;
  }
  .klausur {
    min-width: 0;
    padding: 8px 10px;
  }
  .klausur:disabled {
    flex: 0 0 52px;
    justify-content: center;
  }
  .klausur:disabled span { display: none; }
  .klausur[aria-current="true"] {
    flex: 1 1 auto;
    min-width: 180px;
  }
  .klausur strong { font-size: 13px; line-height: 1.3; }
  .klausur small { display: none; }

  .rail {
    position: sticky;
    top: 0;
    z-index: 35;
    border-top: 0;
    background: var(--papier);
  }
  .rail__link { min-height: 46px; }

  .page {
    padding: 18px max(14px, env(safe-area-inset-right)) calc(72px + env(safe-area-inset-bottom)) max(14px, env(safe-area-inset-left));
  }
  .pagehead {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    align-items: start;
    margin-bottom: 18px;
  }
  .zaehler { white-space: normal; }
  .panel { padding: 17px 16px; }
  .panel__head { flex-wrap: wrap; }
  .cockpit, .raster--2, .raster--3, .training { grid-template-columns: 1fr; }
  .these { padding: 22px 18px; }
  .these__aktionen .btn { width: 100%; }

  .filter {
    flex-wrap: nowrap;
    overflow-x: auto;
    max-width: 100%;
    padding-bottom: 4px;
    overscroll-behavior-inline: contain;
  }
  .filter button { flex: 0 0 auto; }
  .modul { padding: 14px 8px; gap: 10px; }
  .modul__kopf { gap: 5px 8px; }

  .lesson__kopf {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 16px 0 18px;
  }
  .lesson__kopf h1 { margin-top: 7px; }
  .gemeistert { width: 100%; white-space: normal; }
  .tags { max-width: 100%; }
  .tag, .norm { max-width: 100%; white-space: normal; overflow-wrap: anywhere; }

  .tz { padding: 19px 0; }
  .tz__body { width: 100%; }
  .schritte li { grid-template-columns: 25px minmax(0, 1fr); gap: 9px; }
  .fall__block, .notiz { padding-left: 14px; padding-right: 14px; }

  .rechnung__zeile {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: baseline;
    gap: 8px;
  }
  .rechnung__zeile span:last-child { max-width: 46vw; text-align: right; overflow-wrap: anywhere; }
  .buchung__kopf { flex-wrap: wrap; align-items: flex-start; }
  .kreis { max-width: 100%; white-space: normal; }
  .bilanzspiegel__diff { display: grid; grid-template-columns: auto 1fr; align-items: start; }
  .bilanzspiegel__diff em { grid-column: 1 / -1; }

  .register__zeile { grid-template-columns: 1fr; gap: 6px; }
  .gesetzgruppe { flex-wrap: wrap; }
  .quiz__meta { flex-wrap: wrap; gap: 6px 12px; }
  .karte { min-height: 0; padding: 18px 16px; }
  .woche { grid-template-columns: 20px 38px minmax(0, 1fr); gap: 9px; padding: 12px 8px; }

  .falluebersicht__steuerung { grid-template-columns: 1fr; padding: 14px; }
  .falluebersicht__filter { justify-content: flex-start; }
  .fallsammlung { gap: 14px; margin-top: 16px; }
  .fallsammlung__kopf, .fallsammlung__sachverhalt, .fallsammlung__verknuepfung { padding-left: 15px; padding-right: 15px; }
  .fallsammlung__loesung summary { padding-left: 15px; padding-right: 15px; }
  .fallsammlung__loesungsinhalt { padding-left: 15px; padding-right: 15px; }
  .fallsammlung__fall footer { padding-left: 15px; padding-right: 15px; }
}

@media (max-width: 420px) {
  .brand__mark { width: 32px; height: 32px; }
  .brand__text strong { font-size: 14.5px; }
  .klausur:disabled { flex-basis: 46px; padding-left: 7px; padding-right: 7px; }
  .klausur[aria-current="true"] { min-width: 0; }
  .rail__link { padding: 9px 10px; font-size: 13.5px; }
  .page { padding-left: max(12px, env(safe-area-inset-left)); padding-right: max(12px, env(safe-area-inset-right)); }
  .pagehead h1, .lesson__kopf h1 { font-size: clamp(24px, 8vw, 30px); }
  .kicker { font-size: 10px; letter-spacing: .12em; }
  .panel { padding: 15px 14px; }
  .tz__titel { font-size: 18px; }
  .rechnung__zeile { grid-template-columns: 1fr; gap: 2px; }
  .rechnung__zeile span:last-child { max-width: 100%; text-align: left; }
  .buchung table { min-width: 480px; }
  .bilanzspiegel__grid { min-width: 520px; }
  .falluebersicht__filter { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); width: 100%; }
  .falluebersicht__filter button { width: 100%; }
  .falluebersicht__filter button:first-child { grid-column: 1 / -1; }
  .fallsammlung__kopf { display: block; padding-top: 14px; padding-bottom: 14px; }
  .fallsammlung__kopf code { display: inline-block; margin-top: 8px; }
  .fallsammlung__modullink { grid-template-columns: 1fr auto; }
  .fallsammlung__modullink span { grid-column: 1 / -1; }
  .woche { grid-template-columns: 20px 30px minmax(0, 1fr); }
}

@media (max-width: 340px) {
  .topbar { padding-left: 10px; padding-right: 10px; }
  .brand { gap: 8px; }
  .brand__text strong { font-size: 13.5px; }
  .klausur:disabled { flex-basis: 42px; }
  .rail__link { padding-left: 8px; padding-right: 8px; }
  .page { padding-left: 10px; padding-right: 10px; }
}
`;
  fs.writeFileSync(cssPfad, css);
}

let html = fs.readFileSync(htmlPfad, "utf8");
html = html.replace(
  'content="width=device-width, initial-scale=1.0"',
  'content="width=device-width, initial-scale=1.0, viewport-fit=cover"'
);
fs.writeFileSync(htmlPfad, html);

console.log("Mobile-Gesamtoptimierung eingebaut.");
