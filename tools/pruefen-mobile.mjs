#!/usr/bin/env node
import fs from "node:fs";
import { chromium } from "playwright";

const basis = process.env.TEST_URL || "http://127.0.0.1:4173";
const screenshotDir = "/tmp/mobile-screens";
fs.mkdirSync(screenshotDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const fehler = [];

async function pruefeUeberlauf(page, bezeichnung) {
  const ergebnis = await page.evaluate(() => {
    const viewport = document.documentElement.clientWidth;
    const scrollWidth = Math.max(
      document.documentElement.scrollWidth,
      document.body?.scrollWidth || 0
    );
    const erlaubteContainer = ".scroll-x, .rail, .klausuren, .filter, .formel__ausdruck";
    const ausreisser = [...document.querySelectorAll("body *")]
      .filter((element) => {
        const style = getComputedStyle(element);
        if (style.display === "none" || style.visibility === "hidden") return false;
        const rect = element.getBoundingClientRect();
        if (!rect.width || !rect.height) return false;
        if (element.closest(erlaubteContainer)) return false;
        return rect.left < -2 || rect.right > viewport + 2;
      })
      .slice(0, 12)
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          tag: element.tagName.toLowerCase(),
          klasse: element.className?.toString?.().slice(0, 100) || "",
          links: Math.round(rect.left),
          rechts: Math.round(rect.right),
          breite: Math.round(rect.width),
        };
      });
    return { viewport, scrollWidth, ausreisser };
  });

  if (ergebnis.scrollWidth > ergebnis.viewport + 2 || ergebnis.ausreisser.length) {
    throw new Error(`${bezeichnung}: horizontaler Überlauf ${JSON.stringify(ergebnis)}`);
  }
}

async function oeffneNavigation(page, name) {
  await page.getByRole("button", { name, exact: true }).click();
  await page.waitForTimeout(120);
}

for (const breite of [320, 375, 390, 430, 768]) {
  const context = await browser.newContext({
    viewport: { width: breite, height: 900 },
    deviceScaleFactor: 1,
    isMobile: breite <= 430,
    hasTouch: breite <= 430,
  });
  const page = await context.newPage();
  const seitenfehler = [];
  page.on("pageerror", (error) => seitenfehler.push(error.message));

  try {
    await page.goto(basis, { waitUntil: "domcontentloaded" });
    await page.locator(".topbar").waitFor();
    await page.waitForTimeout(250);
    await pruefeUeberlauf(page, `${breite}px Cockpit`);

    await oeffneNavigation(page, "Lernmodule");
    await pruefeUeberlauf(page, `${breite}px Modulliste`);
    const erstesModul = page.locator(".modul").first();
    await erstesModul.waitFor();
    await erstesModul.click({ position: { x: Math.min(90, breite / 3), y: 28 } });
    await page.locator(".lesson__kopf").waitFor();
    await pruefeUeberlauf(page, `${breite}px Modulansicht`);
    if (breite === 390) {
      await page.screenshot({ path: `${screenshotDir}/modul-390.png`, fullPage: false });
    }

    await oeffneNavigation(page, "Fälle");
    await page.locator(".falluebersicht__steuerung").waitFor();
    const anzahlFaelle = await page.locator(".fallsammlung__fall").count();
    const links = await page.locator(".fallsammlung__modullink").count();
    const offen = await page.locator(".fallsammlung__ohne-modul").count();
    if (anzahlFaelle !== 90 || links !== 74 || offen !== 16) {
      throw new Error(`${breite}px Fälle: erwartet 90/74/16, gefunden ${anzahlFaelle}/${links}/${offen}`);
    }
    await pruefeUeberlauf(page, `${breite}px Fallübersicht`);
    if (breite === 390) {
      await page.screenshot({ path: `${screenshotDir}/faelle-390.png`, fullPage: false });
    }

    if (breite === 390) {
      for (const ansicht of ["Prüfungsschema", "Rechenwege", "Normenregister", "Training", "Lernplan"]) {
        await oeffneNavigation(page, ansicht);
        await pruefeUeberlauf(page, `${breite}px ${ansicht}`);
      }
    }

    if (seitenfehler.length) {
      throw new Error(`${breite}px JavaScript-Fehler: ${seitenfehler.join(" | ")}`);
    }
    console.log(`✓ ${breite}px ohne Dokumentüberlauf`);
  } catch (error) {
    fehler.push(error.message);
    console.error(`✗ ${error.message}`);
  } finally {
    await context.close();
  }
}

await browser.close();

if (fehler.length) {
  console.error("\nMobile-Prüfung fehlgeschlagen:\n" + fehler.join("\n"));
  process.exit(1);
}
console.log("Mobile-Prüfung erfolgreich: 320, 375, 390, 430 und 768 px.");
