#!/usr/bin/env node
import fs from "node:fs";
import { chromium } from "playwright";

const basis = process.env.TEST_URL || "http://127.0.0.1:4173";
const screenshotDir = "/tmp/schema-postits";
fs.mkdirSync(screenshotDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const fehler = [];

async function pruefeBreite(breite) {
  const page = await browser.newPage({ viewport: { width: breite, height: 1100 }, deviceScaleFactor: 1 });
  await page.goto(basis, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Prüfungsschema" }).click();
  await page.locator(".schema-postits--ansatz").first().waitFor();

  const tabs = page.locator(".filter button");
  const tabAnzahl = await tabs.count();
  if (tabAnzahl !== 6) fehler.push(`${breite}px: 6 Schematabs erwartet, gefunden ${tabAnzahl}`);

  for (let index = 0; index < tabAnzahl; index += 1) {
    await tabs.nth(index).click();
    const ansatz = await page.locator(".schema-postits--ansatz .schema-postit").count();
    const bewertung = await page.locator(".schema-postits--bewertung .schema-postit").count();
    if (ansatz < 1) fehler.push(`${breite}px / Schema ${index + 1}: kein rotes Ansatz-Post-it`);
    if (bewertung < 1) fehler.push(`${breite}px / Schema ${index + 1}: kein oranges Bewertungs-Post-it`);
  }

  await tabs.first().click();
  const ausserbilanz = await page.locator(".schema-postits--ausserbilanz .schema-postit").count();
  if (ausserbilanz < 1) fehler.push(`${breite}px: kein grünes außerbilanzielles Post-it im ersten Schema`);

  const farben = await page.evaluate(() => {
    const bg = (selector) => getComputedStyle(document.querySelector(selector)).backgroundColor;
    return {
      ansatz: bg(".schema-postits--ansatz .schema-postit"),
      bewertung: bg(".schema-postits--bewertung .schema-postit"),
      ausserbilanz: bg(".schema-postits--ausserbilanz .schema-postit"),
    };
  });
  if (new Set(Object.values(farben)).size !== 3) fehler.push(`${breite}px: Post-it-Farben sind nicht eindeutig: ${JSON.stringify(farben)}`);

  const normtexte = await page.locator(".schema-postit").allTextContents();
  if (normtexte.some((text) => !text.includes("§"))) fehler.push(`${breite}px: Post-it ohne Paragraphenzeichen gefunden`);

  const ueberlauf = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  if (ueberlauf > 1) fehler.push(`${breite}px: horizontaler Dokumentüberlauf um ${ueberlauf}px`);

  await page.screenshot({ path: `${screenshotDir}/schema-postits-${breite}.png`, fullPage: true });
  await page.close();
}

await pruefeBreite(390);
await pruefeBreite(1280);
await browser.close();

if (fehler.length) {
  console.error(fehler.join("\n"));
  process.exit(1);
}
console.log("Schema-Post-its geprüft: 6 Schemata, drei Farbkategorien, mobil und Desktop ohne Dokumentüberlauf.");
