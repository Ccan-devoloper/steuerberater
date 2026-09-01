import fs from "node:fs";
import {
  istrFallsammlung,
  istrFallsammlungKategorien,
  istrFallsammlungQuelle,
} from "../src/data/istr-fallsammlung.js";
import { istrFallsammlungAnlagen } from "../src/data/istr-fallsammlung-anlagen.js";
import { istrModule } from "../src/data/istr-gesamt.js";

const assert = (ok, msg) => {
  if (!ok) throw new Error(`K2 IStR Fallsammlung: ${msg}`);
};

const campusText = fs.readFileSync(new URL("../src/components/K2IStRCampus.jsx", import.meta.url), "utf8");
const reiterText = fs.readFileSync(new URL("../src/components/IstrFallsammlung.jsx", import.meta.url), "utf8");
const cssText = fs.readFileSync(new URL("../src/components/istr-fallsammlung.css", import.meta.url), "utf8");

// Umfang
assert(istrFallsammlung.length === 9, `erwartet 9 Fälle, erhalten ${istrFallsammlung.length}`);
assert(istrFallsammlungQuelle.aufgaben.includes("30 Seiten"), "Seitenzahl des Aufgaben-PDF fehlt");
assert(istrFallsammlungQuelle.loesungen.includes("9 Seiten"), "Seitenzahl des Lösungs-PDF fehlt");

// Jeder Fall trägt Wortlaut, Lösung, Quellenangaben und eine bekannte Kategorie.
const kategorieLabels = new Set(istrFallsammlungKategorien.filter((k) => k.id !== "alle").map((k) => k.label));
const gesehen = new Set();
let erwarteteNummer = 1;
for (const fall of istrFallsammlung) {
  assert(!gesehen.has(fall.id), `doppelte Fall-ID ${fall.id}`);
  gesehen.add(fall.id);
  assert(fall.nummer === erwarteteNummer, `Fall ${fall.id} steht nicht an Position ${erwarteteNummer}`);
  erwarteteNummer += 1;
  assert(typeof fall.title === "string" && fall.title.trim(), `${fall.id}: kein Titel`);
  assert(kategorieLabels.has(fall.kategorie), `${fall.id}: unbekannte Kategorie „${fall.kategorie}“`);
  assert(/Aufgaben-PDF S\./.test(fall.aufgabeQuelle), `${fall.id}: Fundstelle der Aufgabe fehlt`);
  assert(/Lösungs-PDF S\./.test(fall.loesungQuelle), `${fall.id}: Fundstelle der Lösung fehlt`);
  assert(Array.isArray(fall.aufgabe) && fall.aufgabe.length > 0, `${fall.id}: kein Sachverhalt`);
  assert(Array.isArray(fall.loesung) && fall.loesung.length > 0, `${fall.id}: keine Lösung`);
  assert((fall.normen || []).length > 0, `${fall.id}: keine Normen`);

  for (const block of [...fall.aufgabe, ...fall.loesung]) {
    if (typeof block === "string") {
      assert(block.trim().length > 0, `${fall.id}: leerer Absatz`);
      continue;
    }
    assert(["titel", "liste", "tabelle"].includes(block.typ), `${fall.id}: unbekannter Blocktyp ${block.typ}`);
    if (block.typ === "titel") assert(block.text?.trim(), `${fall.id}: Zwischenüberschrift ohne Text`);
    if (block.typ === "liste") assert(block.punkte?.length > 0, `${fall.id}: leere Liste`);
    if (block.typ === "tabelle") {
      assert(block.zeilen?.length > 0, `${fall.id}: leere Tabelle`);
      const breite = block.spalten.length;
      for (const zeile of block.zeilen) {
        assert(zeile.length === breite, `${fall.id}: Tabellenzeile mit ${zeile.length} statt ${breite} Spalten`);
      }
    }
  }
}

// Jede Kategorie der Filterleiste wird auch tatsächlich benutzt.
for (const label of kategorieLabels) {
  assert(istrFallsammlung.some((f) => f.kategorie === label), `Kategorie „${label}“ ohne Fall`);
}

// Querverweise zeigen auf existierende Lernmodule.
const modulIds = new Set(istrModule.map((m) => m.id));
for (const fall of istrFallsammlung) {
  assert((fall.modulIds || []).length > 0, `${fall.id}: kein Querverweis in die Lernmodule`);
  for (const id of fall.modulIds) assert(modulIds.has(id), `${fall.id}: Querverweis auf unbekanntes Modul ${id}`);
}

// Wortlautproben: die Lösungen müssen die tragenden Normen der Originalquelle enthalten.
const volltext = JSON.stringify(istrFallsammlung);
for (const marker of [
  "§ 10 (1a) S. 1 Nr. 1 EStG",
  "§ 1a (1) Nr. 1 EStG",
  "§ 8b (1) S. 1 KStG",
  "§ 8b (5) S. 1 KStG",
  "§ 8b (2) S. 1 KStG",
  "§ 34c (1) EStG",
  "§ 34c (2) EStG",
  "§ 2a (1) Nr. 6 a EStG",
  "§ 2a (2a) EStG",
  "§ 32b (1) S. 2 Nr. 3 und S. 3 EStG",
  "§ 17 (2) S. 3 EStG",
  "Art. 13 (5) DBA-NL",
  "§ 2a (1) S. 1 Nr. 4 EStG",
  "§ 34d Nr. 2 a EStG",
  "§ 8 (3) S. 2 KStG",
  "§ 1 (2) Nr. 1 AStG",
  "§ 50a (1) Nr. 1 EStG",
  "§ 50 (2) S. 1 EStG",
  "27.180 €",
  "28.800 €",
  "6.336 €",
  "2.500 €",
]) assert(volltext.includes(marker), `Wortlautmarke aus der Originallösung fehlt: ${marker}`);

// Anlagen: DBA-Auszüge des Aufgaben-PDF vollständig.
assert(istrFallsammlungAnlagen.length === 3, `erwartet 3 DBA-Anlagen, erhalten ${istrFallsammlungAnlagen.length}`);
const anlagenTitel = istrFallsammlungAnlagen.map((a) => a.titel);
for (const titel of ["Auszug DBA Schweiz", "Auszug DBA Spanien", "Auszug DBA Frankreich"]) {
  assert(anlagenTitel.includes(titel), `Anlage fehlt: ${titel}`);
}
for (const anlage of istrFallsammlungAnlagen) {
  assert(anlage.artikel.length > 0, `${anlage.titel}: keine Artikel`);
  for (const artikel of anlage.artikel) {
    assert(typeof artikel.titel === "string" && artikel.titel.trim(), `${anlage.titel}: Artikel ohne Überschrift`);
    assert(Array.isArray(artikel.absaetze), `${anlage.titel} / ${artikel.titel}: Absätze fehlen`);
    /* Eine Überschrift ist kurz und beginnt mit der Artikelnummer. Fließtextzeilen,
       die beim Extrahieren versehentlich als Überschrift gelesen wurden, fallen hier auf. */
    assert(/^(Art\.|Artikel) \d/.test(artikel.titel), `${anlage.titel}: „${artikel.titel}“ ist keine Artikelüberschrift`);
    assert(artikel.titel.length <= 80, `${anlage.titel}: Überschrift zu lang – vermutlich Fließtext: „${artikel.titel}“`);
  }
}
assert(
  istrFallsammlungAnlagen.find((a) => a.titel === "Auszug DBA Schweiz").artikel.length === 16,
  "DBA Schweiz: erwartet 16 Artikelabschnitte",
);
const schweiz = istrFallsammlungAnlagen.find((a) => a.titel === "Auszug DBA Schweiz");
for (const artikel of ["Art. 4 [Person, Wohnsitz]", "Art. 6 [Einkünfte aus unbeweglichem Vermögen]", "Art. 24 [Vermeidung der Doppelbesteuerung]"]) {
  assert(schweiz.artikel.some((a) => a.titel === artikel), `DBA Schweiz: ${artikel} fehlt`);
}

// Reiter: eigener Navigationspunkt, Lösung aufklappbar wie in der USt-Fallsammlung.
assert(campusText.includes('{ id: "fallsammlung", label: "Fallsammlung"'), "Fallsammlung fehlt in der IStR-Navigation");
assert(campusText.includes("<IstrFallsammlung"), "Fallsammlung wird im Campus nicht gerendert");
assert(
  campusText.indexOf('{ id: "faelle"') < campusText.indexOf('{ id: "fallsammlung"'),
  "Die Fallsammlung steht nicht hinter den Originalfällen",
);
assert(reiterText.includes("<details className=\"istr-fs-details\">"), "Die Lösung ist nicht aufklappbar");
assert(reiterText.includes("Lösung anzeigen"), "Aufklapp-Beschriftung der Lösung fehlt");
assert(reiterText.includes("istr-fs-anlage"), "Die DBA-Anlagen werden nicht dargestellt");

// Designsystem: nur die deutschen Farbtoken aus src/index.css.
const indexCss = fs.readFileSync(new URL("../src/index.css", import.meta.url), "utf8");
const definiert = new Set([...indexCss.matchAll(/^\s*(--[a-z0-9-]+):/gm)].map((m) => m[1]));
for (const [, name] of cssText.matchAll(/var\((--[a-z0-9-]+)/g)) {
  assert(definiert.has(name), `istr-fallsammlung.css nutzt undefinierte CSS-Variable ${name}`);
}

const faelleJeKategorie = istrFallsammlungKategorien
  .filter((k) => k.id !== "alle")
  .map((k) => `${k.label}: ${istrFallsammlung.filter((f) => f.kategorie === k.label).length}`)
  .join(" · ");
console.log(
  `K2 IStR Fallsammlung OK: ${istrFallsammlung.length} Fälle mit Wortlaut und aufklappbarer Lösung, ` +
  `${istrFallsammlungAnlagen.length} DBA-Anlagen (${istrFallsammlungAnlagen.reduce((n, a) => n + a.artikel.length, 0)} Artikel), ` +
  `eigener Reiter im IStR-Campus. ${faelleJeKategorie}.`,
);
