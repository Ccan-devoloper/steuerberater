import fs from "node:fs";
import { istrHausaufgaben, istrHausaufgabenQuelle } from "../src/data/istr-hausaufgaben.js";
import { istrModule } from "../src/data/istr-gesamt.js";

const assert = (ok, msg) => {
  if (!ok) throw new Error(`K2 IStR Hausaufgaben: ${msg}`);
};

const campusText = fs.readFileSync(new URL("../src/components/K2IStRCampus.jsx", import.meta.url), "utf8");
const reiterText = fs.readFileSync(new URL("../src/components/IstrHausaufgaben.jsx", import.meta.url), "utf8");
const cssText = fs.readFileSync(new URL("../src/components/istr-hausaufgaben.css", import.meta.url), "utf8");

// Umfang und Reihenfolge
assert(istrHausaufgaben.length === 3, `erwartet 3 Hausaufgaben, erhalten ${istrHausaufgaben.length}`);
assert(istrHausaufgabenQuelle.didaktik.length === 3, "didaktischer Hinweis unvollständig");
istrHausaufgaben.forEach((ha, i) => {
  assert(ha.termin === i + 1, `${ha.id} steht nicht am ${i + 1}. Fachtermin`);
  assert(ha.id === `ha-${ha.termin}`, `${ha.id}: ID passt nicht zum Fachtermin`);
});

/* Kopfzeile des Sachverhalts und Fußzeile der Musterlösung. Beim 3. Fachtermin
   weichen beide Angaben in der Quelle voneinander ab; das wird so übernommen. */
const erwartetePunkte = { 1: 38, 2: 31, 3: 31 };
const erwarteteLoesungspunkte = { 1: 38, 2: 31, 3: 30 };

for (const ha of istrHausaufgaben) {
  assert(typeof ha.title === "string" && ha.title.trim(), `${ha.id}: kein Titel`);
  assert(typeof ha.thema === "string" && ha.thema.trim(), `${ha.id}: kein Thema`);
  assert(ha.rechtsstand === "Rechtsstand 2025", `${ha.id}: falscher Rechtsstand`);
  assert(/\d+ Seiten$/.test(ha.quelle), `${ha.id}: Seitenzahl der Quelle fehlt`);
  assert(ha.punkte === erwartetePunkte[ha.termin], `${ha.id}: erwartet ${erwartetePunkte[ha.termin]} Punkte, erhalten ${ha.punkte}`);
  assert(
    ha.punkteLoesung === erwarteteLoesungspunkte[ha.termin],
    `${ha.id}: Musterlösung schließt mit ${ha.punkteLoesung} statt ${erwarteteLoesungspunkte[ha.termin]} Punkten`,
  );
  assert((ha.normen || []).length > 0, `${ha.id}: keine Normen`);
  assert(ha.sachverhalt.length > 0, `${ha.id}: kein Sachverhalt`);
  assert(ha.aufgabe.length > 0, `${ha.id}: keine Aufgabenstellung`);
  assert(ha.loesung.length > 0, `${ha.id}: keine Lösungshinweise`);

  for (const block of [...ha.sachverhalt, ...ha.aufgabe, ...(ha.hinweise || []), ...ha.loesung]) {
    if (block.typ === "titel") {
      assert(block.text?.trim(), `${ha.id}: Zwischenüberschrift ohne Text`);
      continue;
    }
    if (block.typ === "tabelle") {
      assert(block.zeilen?.length > 0, `${ha.id}: leere Tabelle`);
      const breite = block.spalten.length;
      for (const zeile of block.zeilen) {
        assert(zeile.length === breite, `${ha.id}: Tabellenzeile mit ${zeile.length} statt ${breite} Spalten`);
      }
      continue;
    }
    assert(block.typ === undefined, `${ha.id}: unbekannter Blocktyp ${block.typ}`);
    assert(typeof block.text === "string" && block.text.trim(), `${ha.id}: leerer Absatz`);
    if (block.punkte !== undefined) {
      assert(Number.isInteger(block.punkte) && block.punkte > 0, `${ha.id}: ungültige Punktzahl ${block.punkte}`);
    }
  }

  /* Die Punkte stehen nur in den Lösungshinweisen, nicht im Sachverhalt. */
  for (const block of [...ha.sachverhalt, ...ha.aufgabe, ...(ha.hinweise || [])]) {
    assert(block.punkte === undefined, `${ha.id}: Punkte im Aufgabenteil`);
  }

  /* Die Summe der Randpunkte darf die ausgelobte Punktzahl nicht übersteigen. */
  const summe = ha.loesung.reduce((n, b) => n + (b.punkte || 0), 0);
  assert(summe > 0, `${ha.id}: keine Randpunkte in der Lösung übernommen`);
  assert(
    summe === ha.punkteLoesung,
    `${ha.id}: ${summe} Randpunkte statt der in der Musterlösung ausgewiesenen ${ha.punkteLoesung} – vermutlich ist ein Lösungsabsatz verloren gegangen`,
  );
}

// Querverweise zeigen auf existierende Lernmodule.
const modulIds = new Set(istrModule.map((m) => m.id));
for (const ha of istrHausaufgaben) {
  assert((ha.modulIds || []).length > 0, `${ha.id}: kein Querverweis in die Lernmodule`);
  for (const id of ha.modulIds) assert(modulIds.has(id), `${ha.id}: Querverweis auf unbekanntes Modul ${id}`);
}

// Anlage: DBA-Frankreich-Auszug der dritten Hausaufgabe.
const dritte = istrHausaufgaben.find((ha) => ha.termin === 3);
assert(dritte.anlage, "3. Fachtermin: DBA-Frankreich-Anlage fehlt");
assert(dritte.anlage.titel === "DBA Frankreich [Auszug]", "3. Fachtermin: falscher Anlagentitel");
assert(dritte.anlage.artikel.length === 10, `3. Fachtermin: erwartet 10 Artikel, erhalten ${dritte.anlage.artikel.length}`);
for (const artikel of dritte.anlage.artikel) {
  assert(/^Artikel \d+ /.test(artikel.titel), `Anlage: „${artikel.titel}“ ist keine Artikelüberschrift`);
  assert(artikel.titel.length <= 80, `Anlage: Überschrift zu lang – vermutlich Fließtext: „${artikel.titel}“`);
  assert(artikel.absaetze.length > 0, `Anlage: ${artikel.titel} ohne Absätze`);
}
for (const nummer of [1, 2, 3, 4, 7, 9, 10, 13, 18, 20]) {
  assert(
    dritte.anlage.artikel.some((a) => a.titel.startsWith(`Artikel ${nummer} `)),
    `Anlage: Artikel ${nummer} fehlt`,
  );
}
assert(!istrHausaufgaben.find((ha) => ha.termin === 1).anlage, "1. Fachtermin hat keine Anlage");
assert(!istrHausaufgaben.find((ha) => ha.termin === 2).anlage, "2. Fachtermin hat keine Anlage");
assert(istrHausaufgaben.find((ha) => ha.termin === 2).hinweise?.length > 0, "2. Fachtermin: Hinweise fehlen");

// Wortlautproben aus den Originallösungen.
const volltext = JSON.stringify(istrHausaufgaben);
for (const marker of [
  "§ 1 Abs. 4 EStG",
  "§ 49 Abs. 2 EStG",
  "isolierende Betrachtungsweise",
  "Betriebsaufspaltung",
  "§ 35 Abs. 1 Nr. 2 EStG",
  "178.983 €",
  "§ 2 Nr. 1 KStG",
  "§ 32 Abs. 1 Nr. 2 KStG",
  "§ 44a Abs. 9 EStG",
  "§ 8b Abs. 3 S. 1 KStG",
  "§ 26 Abs. 1 S. 1 Nr. 2 KStG",
  "Art. 20 Abs. 1 Buchst. a DBA-FR",
  "§ 50d Abs. 8 EStG",
  "§ 6 Abs. 1 S. 1 Nr. 2 AStG",
  "§ 1a Abs. 1 Nr. 1 EStG",
  "343.064 EUR",
  "60.600 EUR",
]) assert(volltext.includes(marker), `Wortlautmarke aus der Originallösung fehlt: ${marker}`);

// Reiter: eigener Navigationspunkt hinter der Fallsammlung, Lösung aufklappbar.
assert(campusText.includes('{ id: "hausaufgaben", label: "Hausaufgaben"'), "Hausaufgaben fehlen in der IStR-Navigation");
assert(campusText.includes("<IstrHausaufgaben"), "Hausaufgaben werden im Campus nicht gerendert");
assert(
  campusText.indexOf('{ id: "fallsammlung"') < campusText.indexOf('{ id: "hausaufgaben"'),
  "Die Hausaufgaben stehen nicht hinter der Fallsammlung",
);
assert(reiterText.includes("Lösungshinweise anzeigen"), "Aufklapp-Beschriftung der Lösung fehlt");
assert(reiterText.includes('<details className="istr-fs-details">'), "Die Lösung ist nicht aufklappbar");
assert(reiterText.includes("istr-ha-punkte"), "Die Randpunkte werden nicht dargestellt");

// Designsystem: nur die deutschen Farbtoken aus src/index.css.
const indexCss = fs.readFileSync(new URL("../src/index.css", import.meta.url), "utf8");
const definiert = new Set([...indexCss.matchAll(/^\s*(--[a-z0-9-]+):/gm)].map((m) => m[1]));
for (const [, name] of cssText.matchAll(/var\((--[a-z0-9-]+)/g)) {
  assert(definiert.has(name), `istr-hausaufgaben.css nutzt undefinierte CSS-Variable ${name}`);
}

const uebersicht = istrHausaufgaben
  .map((ha) => `${ha.termin}. Fachtermin ${ha.loesung.reduce((n, b) => n + (b.punkte || 0), 0)}/${ha.punkteLoesung} P`)
  .join(" · ");
console.log(
  `K2 IStR Hausaufgaben OK: ${istrHausaufgaben.length} Hausaufgaben mit Wortlaut und aufklappbaren Lösungshinweisen, ` +
  `DBA-Frankreich-Anlage mit ${dritte.anlage.artikel.length} Artikeln, eigener Reiter im IStR-Campus. ${uebersicht}.`,
);
