/* ==========================================================================
   Qualitäts- und Eigenständigkeitsprüfung.

   1. Kein 1:1-Text: Jede Folge von N Wörtern des Beitrags darf nicht wörtlich
      in den Webseitendaten vorkommen (Shingle-Vergleich über src/data).
   2. Keine Fallnamen: Firmen-/Personennamen aus den Fällen der Webseite sind
      gesperrt (automatisch aus den Daten extrahiert + Sperrliste).
   3. Keine Quellenbezüge (Seite, Folie, Mitschrift, Fallnummer).
   4. Formale Grenzen: Überschriften, Folientexte, Caption, Hashtags.
   Rückgabe: { ok, fehler: [...] } – der Autor bekommt die Fehler als Feedback
   und formuliert neu.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const hier = path.dirname(fileURLToPath(import.meta.url));
const DATEN = path.resolve(hier, "../../src/data");

export const SHINGLE_LAENGE = 8;   // Wörter
/* Aufbau: keine leere Folie, jede Folie mit Titel und Inhalt, genau eine
   CTA-Folie am Ende. Leere Kacheln sind der sichtbarste Fehler im Feed. */
export function folieLeer(f) {
  const text = (f.text || "").trim().length;
  const punkte = (f.punkte || []).filter((p) => String(p).trim()).length;
  const schritte = (f.schritte || []).filter((x) => (typeof x === "string" ? x.trim() : x?.titel?.trim())).length;
  switch (f.art) {
    case "titel": return !(f.titel || "").trim();
    case "cta": return false;
    case "text": return text < 30 && punkte < 2;
    case "schritte": return schritte < 2;
    case "vergleich": return !(f.links?.punkte?.length >= 1 && f.rechts?.punkte?.length >= 1);
    case "rechnung": return !(f.formel || "").trim() && (f.zeilen || []).length < 2;
    case "karte": return schritte < 3 && punkte < 3;
    case "merke": return text < 20;
    default: return text < 30 && punkte < 2 && schritte < 2;
  }
}

export function pruefeAufbau(folien) {
  const fehler = [];
  folien.forEach((f, i) => {
    if (f.art !== "cta" && !(f.titel || "").trim()) fehler.push(`Folie ${i + 1} (${f.art}): kein Titel`);
    if (folieLeer(f)) fehler.push(`Folie ${i + 1} (${f.art}): kein Inhalt – jede Folie braucht Text, Punkte oder Schritte`);
    if (f.art === "titel" && i > 0) fehler.push(`Folie ${i + 1}: nur Folie 1 darf die Art „titel“ haben`);
  });
  const ctas = folien.map((f, i) => (f.art === "cta" ? i : -1)).filter((i) => i >= 0);
  if (ctas.length > 1) fehler.push(`Nur eine CTA-Folie erlaubt (gefunden: ${ctas.length})`);
  if (ctas.length && ctas.at(-1) !== folien.length - 1) fehler.push("Die CTA-Folie muss die letzte sein");
  return fehler;
}

export const GRENZEN = {
  titelZeichen: 110,
  folienTextZeichen: 600,   // der Renderer passt Text automatisch ein; erst deutliche Überlänge kostet eine Neufassung
  storyTextZeichen: 260,
  captionZeichen: 2200,
  hashtagsMax: 30,
  folienMin: 3,
  folienMax: 10,
};

const SPERRLISTE_DATEI = path.resolve(hier, "../config/namen-sperrliste.json");
/* Merkhilfen anderer Dozenten („EIS-Methode“, „ABBA-Schema“): kein Inhalt,
   sondern deren Eigenschöpfung. Ein Beitrag, der so etwas übernimmt, wirkt
   wie abgeschrieben – und ist es auch. */
const EIGENBEGRIFFE_DATEI = path.resolve(hier, "../config/eigenbegriffe.json");
const eigenbegriffeDatei = () => {
  try { return fs.existsSync(EIGENBEGRIFFE_DATEI) ? JSON.parse(fs.readFileSync(EIGENBEGRIFFE_DATEI, "utf8")) : {}; } catch { return {}; }
};
export function eigenbegriffe() { return eigenbegriffeDatei().begriffe || []; }
/* Dieselben Merkhilfen ohne das angehängte Wort. Im Kursmaterial steht das
   Kürzel oft blank – „danach EIS und anschließend das DBA“, „DBA-AAVV“ –, und
   genau so wanderte es am 15.09. in den Themenpool des Tagesreels: „EIS-Methode“
   war gesperrt, das blanke „EIS“ nicht. Gesucht wird nur in Großbuchstaben,
   sonst bliebe jedes gewöhnliche „Eis“ hängen. */
export function eigenbegriffKuerzel() { return eigenbegriffeDatei().kuerzel || []; }
/* Trifft die gesperrten Begriffe – und darüber hinaus jede Merkhilfe nach
   dem Muster GROSSBUCHSTABEN-Methode/-Schema/-Formel, sofern sie nicht in der
   Fachsprache üblich ist. Solche Kürzel sind fast immer die Erfindung eines
   Dozenten. */
/* Nicht jedes Kürzel vor „-Methode“ ist die Erfindung eines Dozenten: DBA,
   FIFO, LIFO und AfA stehen im Gesetz. Am 16.09. fiel eine fachlich richtige
   Story über die Anrechnung auslaendischer Steuern aus, weil „DBA-Methode“
   als Merkhilfe galt. */
const UEBLICH = new Set(["dba-schema", "ust-schema", "est-schema", "gewst-schema", "kst-schema", "abc-analyse", "xyz-analyse", "gob-regel",
  "dba-methode", "fifo-methode", "lifo-methode", "hifo-methode", "lofo-methode", "afa-methode", "afa-regel"]);
export function gefundeneEigenbegriffe(text) {
  const t = String(text);
  const treffer = new Set();
  for (const b of eigenbegriffe()) {
    if (new RegExp(`(^|[^a-zäöüß0-9])${b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(s|-Schemas?)?(?![a-zäöüß])`, "iu").test(t)) treffer.add(b);
  }
  for (const m of t.matchAll(/\b([A-ZÄÖÜ]{2,6})-(Methode|Schema|Formel|Regel|Trick|Prinzip|Technik)\b/g)) {
    if (!UEBLICH.has(m[0].toLowerCase())) treffer.add(m[0]);
  }
  /* Groß-/Kleinschreibung zählt hier, anders als oben: „EIS“ ist die Merkhilfe,
     „Eis“ ein Wort. Und das Kürzel darf nicht Teil eines längeren Wortes sein –
     „EISENBAHN“ und „REIS“ bleiben unbehelligt, „DBA-AAVV“ nicht. */
  for (const k of eigenbegriffKuerzel()) {
    if (new RegExp(`(?<![A-ZÄÖÜa-zäöüß])${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![A-ZÄÖÜa-zäöüß])`, "u").test(t)) treffer.add(k);
  }
  return [...treffer];
}


export function normalisieren(text) {
  return String(text)
    .toLowerCase()
    .replace(/[„“"'»«‚‘’]/g, " ")
    .replace(/[^a-z0-9äöüß§%€.,\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function woerter(text) {
  return normalisieren(text).split(" ").filter((w) => w.length > 0);
}

/* FNV-1a, 32 Bit – klein genug für ein Set aus Zahlen. */
function hash(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return h >>> 0;
}

function shingles(text, n = SHINGLE_LAENGE) {
  const w = woerter(text);
  const out = [];
  for (let i = 0; i + n <= w.length; i++) out.push(w.slice(i, i + n).join(" "));
  return out;
}

let korpusCache = null;

/* Baut einmal je Prozess den Shingle-Index über alle Datendateien der Webseite. */
export function korpus() {
  if (korpusCache) return korpusCache;
  const index = new Set();
  const namen = new Set();
  const dateien = [];
  const lauf = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) lauf(p);
      else if (/\.(js|mjs|md|json)$/.test(e.name)) dateien.push(p);
    }
  };
  lauf(DATEN);
  const namenMuster = /\b([A-ZÄÖÜ][a-zäöüß]{2,}(?:[- ][A-ZÄÖÜ][a-zäöüß]{2,})?)[- ](?:OHG|KG|GmbH|AG|GbR|UG|SE|e\.?\s?K\.?)\b/g;
  const anredeMuster = /\b(?:Herr|Frau|Unternehmer(?:in)?|Kaufmann|Kauffrau|Gesellschafter(?:in)?|Steuerpflichtige[r]?|Mandant(?:in)?)\s+([A-ZÄÖÜ][a-zäöüß]{3,})\b/g;
  for (const datei of dateien) {
    const text = fs.readFileSync(datei, "utf8");
    for (const s of shingles(text)) index.add(hash(s));
    for (const m of text.matchAll(namenMuster)) namen.add(m[1]);
    for (const m of text.matchAll(anredeMuster)) namen.add(m[1]);
  }
  /* Häufige Gattungswörter, die das Muster fälschlich als Namen erfasst. */
  const allgemein = new Set(["Bank", "Kunden", "Kunde", "Lieferant", "Käufer", "Verkäufer", "Betrieb", "Muster", "Beispiel", "Mutter", "Tochter", "Erwerber", "Eigentümer", "Vermieter", "Mieter", "Alt", "Neu", "Beteiligung", "Holding", "Vertrieb", "Handel", "Bau", "Immobilien", "Verwaltung", "Beratung", "Personen", "Kapital", "Komplementär", "Kommanditist", "Anteile", "Anteil", "Gesellschafter", "Geschäftsführer", "Organ", "Organträger", "Tochtergesellschaft", "Muttergesellschaft", "Gesellschaft", "Unternehmen", "Firma"]);
  for (const n of allgemein) namen.delete(n);
  /* Gattungswörter erkennt man an ihrer Häufigkeit: Ein Fallname taucht ein
     paar Mal auf, ein Fachbegriff wie „Anteile“ hunderte Male. */
  const haeufigkeit = new Map();
  for (const datei of dateien) {
    const text = fs.readFileSync(datei, "utf8");
    for (const n of namen) { const c = (text.match(new RegExp(`\\b${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g")) || []).length; if (c) haeufigkeit.set(n, (haeufigkeit.get(n) || 0) + c); }
  }
  for (const [n, c] of haeufigkeit) if (c > 40) namen.delete(n);
  /* Gattungsbegriffe (Endungen -ung, -keit, -sätze …) und Artikel sind keine Namen. */
  for (const n of [...namen]) {
    const letztes = n.split(/[- ]/).pop();
    if (/^(Die|Der|Das|Ein|Eine|Diese|Jede)\b/.test(n) || /(ung|ungs|keit|heit|sätze|künfte|einnahmen|ausgaben|einkommen|erträge|aufwand|aufwendungen|entnahmen|einlagen|vergütung|vergütungen|abzug|beträge|gewinn|züge|zeit|zinsen|verlust|kosten|wert|steuer|bilanz|konto|vermögen|recht|schaft|ner)$/i.test(letztes) || n.length < 4) namen.delete(n);
  }
  /* Und die Länge entscheidet mit: Das Anredemuster („Gesellschafter X") fängt
     auch den Fachbegriff, der zufällig dahintersteht. So kam am 15.09.
     „Sonderbetriebseinnahmen“ in die Liste und ließ einen fachlich richtigen
     Beitrag am gesperrten Namen scheitern - eine Korrekturrunde für 0,031 $,
     und das bei jedem Beitrag zur Mitunternehmerschaft aufs Neue.
     Fallnamen sind kurz: Der längste echte im Korpus hat zehn Zeichen. Ein
     Einwortname jenseits von fünfzehn ist ein deutsches Kompositum, kein
     Mandant. Namen aus der gepflegten Sperrliste kommen danach dazu und
     bleiben davon unberührt. */
  for (const n of [...namen]) if (!/[- ]/.test(n) && n.length > 15) namen.delete(n);
  let sperrliste = [];
  if (fs.existsSync(SPERRLISTE_DATEI)) sperrliste = JSON.parse(fs.readFileSync(SPERRLISTE_DATEI, "utf8"));
  for (const n of sperrliste) namen.add(n);
  korpusCache = { index, namen: [...namen], dateien: dateien.length };
  return korpusCache;
}

/* Liefert alle wörtlichen Übernahmen (SHINGLE_LAENGE Wörter am Stück) eines Textes. */
export function uebernahmen(text, k = korpus()) {
  const treffer = [];
  for (const s of shingles(text)) if (k.index.has(hash(s))) treffer.push(s);
  return [...new Set(treffer)];
}

/* Ab wie vielen Wörtern am Stück eine Übereinstimmung als Übernahme gilt.
   Fachsprache ist standardisiert: „Wirtschaftsgüter, die unmittelbar dem
   Betrieb der Personengesellschaft dienen“ ist Gesetzeswortlaut und lässt sich
   nicht sinnvoll umschreiben – acht solche Wörter am Stück sind Zufall, nicht
   Abschreiben. Wer wirklich abschreibt, trifft ganze Sätze: Dann greifen
   mehrere Shingles ineinander und der zusammenhängende Lauf wird lang. */
const UEBERNAHME_WOERTER = 13;

/* Fasst benachbarte Treffer zu zusammenhängenden Läufen zusammen.
   Zwei Shingles gehören zum selben Lauf, wenn sie sich überlappen. */
export function uebernahmeLaeufe(text, k = korpus()) {
  const w = woerter(text);
  const treffer = new Set();
  for (let i = 0; i + SHINGLE_LAENGE <= w.length; i++) {
    if (k.index.has(hash(w.slice(i, i + SHINGLE_LAENGE).join(" ")))) treffer.add(i);
  }
  const laeufe = [];
  let start = null, ende = null;
  for (const i of [...treffer].sort((a, b) => a - b)) {
    if (start === null) { start = i; ende = i + SHINGLE_LAENGE; continue; }
    if (i <= ende) { ende = Math.max(ende, i + SHINGLE_LAENGE); continue; }
    laeufe.push({ text: w.slice(start, ende).join(" "), woerter: ende - start });
    start = i; ende = i + SHINGLE_LAENGE;
  }
  if (start !== null) laeufe.push({ text: w.slice(start, ende).join(" "), woerter: ende - start });
  return laeufe;
}

/* Nachträglich gesperrte Namen (z. B. aus früheren Beiträgen) kommen in
   denselben Topf wie die Sperrliste: Prompt und Prüfung sehen sie gleich. */
export function namenSperren(liste) {
  const k = korpus();
  for (const n of liste || []) if (n && !k.namen.includes(n)) k.namen.push(n);
  return k.namen.length;
}

/* Erfundene Firmennamen in einem Text („Nordlicht GmbH“ → „Nordlicht“).
   Nur der Stamm zählt, damit auch „Nordlicht KG“ oder „Nordlicht AG“ als
   Wiederholung gilt. Gattungswörter und Artikel davor sind keine Namen. */
const FIRMENFORM = /(?:^|[^A-Za-zÄÖÜäöüß-])((?:[A-ZÄÖÜ][a-zäöüß]+(?:-[A-ZÄÖÜ][a-zäöüß]+)?)(?: [A-ZÄÖÜ][a-zäöüß]+)?) (?:GmbH & Co\. KG|GmbH|KG|AG|OHG|UG|GbR|e\. ?K\.|SE)(?![A-Za-zäöüß])/g;
const KEIN_FIRMENNAME = /^(?:Die|Der|Das|Des|Dem|Den|Eine?|Einer|Diese|Dieser|Jede|Jeder|Keine|Unsere|Ihre|Seine|Neue|Alte|Zwei|Drei|Vier|Beteiligung|Holding|Tochter|Mutter|Vertrieb|Handel|Bau|Immobilien|Verwaltung|Beratung|Kapital|Personen|Gesellschaft|Firma|Mini-Fall|Beispiel|Fall|Zwischen)$/;
export function firmenNamen(text) {
  const namen = new Set();
  for (const m of String(text).matchAll(FIRMENFORM)) {
    /* Voranstehende Artikel und Gattungswörter („Mini-Fall Nordlicht GmbH“) gehören nicht zum Namen. */
    const teile = m[1].trim().split(" ");
    while (teile.length > 1 && (KEIN_FIRMENNAME.test(teile[0]) || /(?:beispiel|fall|sachverhalt|firma)$/i.test(teile[0]))) teile.shift();
    const stamm = teile.join(" ");
    const letztes = stamm.split(" ").pop();
    if (KEIN_FIRMENNAME.test(stamm) || KEIN_FIRMENNAME.test(letztes) || /(?:ung|heit|keit|schaft)$/.test(letztes) || stamm.length < 4) continue;
    namen.add(stamm);
  }
  return [...namen];
}

/* Firmennamen aus allen bereits geschriebenen Inhalten der letzten Tage –
   bis zum Vortag, damit ein heute schon geschriebener Text sich nicht selbst
   sperrt, wenn er vor dem Veröffentlichen erneut geprüft wird. Ein
   erfundener Name ist nur dann unverdächtig, wenn er jedes Mal ein anderer
   ist: dieselbe „Nordlicht GmbH“ in zehn Beiträgen wirkt wie ein
   übernommener Fall. */
export function benutzteFirmen(inhalteDir, datum, tage = 180) {
  if (!inhalteDir || !fs.existsSync(inhalteDir)) return [];
  const ab = new Date(new Date(`${datum}T12:00:00Z`).getTime() - tage * 864e5).toISOString().slice(0, 10);
  const namen = new Set();
  for (const datei of fs.readdirSync(inhalteDir).sort()) {
    const tag = datei.slice(0, 10);
    if (!datei.endsWith(".json") || tag < ab || tag >= datum) continue;
    try { for (const n of firmenNamen(fs.readFileSync(path.join(inhalteDir, datei), "utf8"))) namen.add(n); } catch { /* defekte Datei zählt nicht */ }
  }
  return [...namen];
}

export function gesperrteNamen(text, k = korpus()) {
  const t = ` ${String(text)} `;
  return k.namen.filter((n) => new RegExp(`(^|[^a-zäöüß])${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-zäöüß]|$)`, "u").test(t));
}

/* „Skript“ nur noch als Quellenangabe, nicht als blosses Wort: „laut Skript“
   ist ein Verweis auf das Kursmaterial, „nimm dir heute dein Skript vor“ ist
   ein Lerntipp. Am 16.09. kostete genau dieser Unterschied eine Countdown-Story. */
const QUELLENBEZUG = /\b(laut Quelle|Quelle|Seite \d+|Folie|Mitschrift|(?:laut|im|aus dem|nach dem|siehe) Skript|Skript,? S\. ?\d+|Originalfall|Fall \d{2,3}|Hausaufgabe|Musterlösung der Finanzverwaltung|Frame)\b/i;

/* ==========================================================================
   Normfallen: feste Zahlen, die im Gesetz stehen und nicht verhandelbar sind.

   Am 14.09. ging ein Beitrag zur gesetzlichen Erbfolge raus, der die Ehefrau
   neben zwei Kindern auf 3/4 setzte. Richtig ist 1/2. Der Fehler: § 1931
   Abs. 1 BGB gibt dem Ehegatten neben Verwandten ERSTER Ordnung ein Viertel
   und nur neben der zweiten Ordnung oder Großeltern die Hälfte - der Beitrag
   hatte beide Fälle vertauscht und dann noch § 1371 I BGB daraufgerechnet.

   Warum das durch alle Netze fiel:
   - Der Faktencheck ist ein Modell und hat es schlicht übersehen.
   - Die Quotensumme stimmte (3/4 + 1/8 + 1/8 = 1), eine Summenprobe hätte
     also nichts gemerkt.
   - Die Wissensbasis nennt die Quoten gar nicht, sie sagt nur, das
     Ehegattenerbrecht sei "mit dem Güterstand zu kombinieren".

   Gegen so etwas hilft kein weiteres Modell, sondern eine Handvoll fester
   Regeln, die rechnen statt zu urteilen. Sie kosten nichts, laufen vor jedem
   Modellaufruf und sind absichtlich eng: Lieber wenige Fälle sicher als viele
   halb. Wer eine neue Regel aufnimmt, nimmt eine auf, die er beweisen kann.
   ========================================================================== */

/* Ein Bruch, der einer Norm zugeordnet wird: "1/4 (§ 1931 I BGB)". Genau die
   Form, in der eine Quote auf den Fall angewendet wird - im Unterschied zum
   erklärenden Satz "neben der ersten Ordnung 1/4, neben der zweiten 1/2",
   der beide Zahlen nennen darf und muss. */
const QUOTE_ZU_NORM = /(\d+)\s*\/\s*(\d+)\s*\(\s*§+\s*(\d+[a-z]?)/g;

const ERSTE_ORDNUNG = /\b(Kind(er|es|ern)?|Abkömmling|Abkömmlinge|Sohn|Tochter|erste[nr]?\s+Ordnung)\b/i;
const ZWEITE_ORDNUNG = /\b(Eltern|Mutter|Vater|Geschwister|Bruder|Schwester|zweite[nr]?\s+Ordnung|Großeltern)\b/i;

export function normfallen(text) {
  const fehler = [];

  /* § 1931 Abs. 1 BGB: 1/4 neben der ersten Ordnung, 1/2 neben der zweiten
     oder neben Großeltern. Geprüft wird nur die angewendete Quote. */
  for (const [, zaehler, nenner, norm] of text.matchAll(QUOTE_ZU_NORM)) {
    if (norm !== "1931") continue;
    const anteil = Number(zaehler) / Number(nenner);
    const kinder = ERSTE_ORDNUNG.test(text);
    if (kinder && anteil !== 0.25) {
      fehler.push(`§ 1931 Abs. 1 BGB: Neben Verwandten der ersten Ordnung (hier: Kinder/Abkömmlinge) erbt der Ehegatte 1/4, nicht ${zaehler}/${nenner}. Die Hälfte gilt nur neben der zweiten Ordnung oder neben Großeltern.`);
    } else if (!kinder && ZWEITE_ORDNUNG.test(text) && anteil !== 0.5) {
      fehler.push(`§ 1931 Abs. 1 BGB: Neben Verwandten der zweiten Ordnung oder Großeltern erbt der Ehegatte 1/2, nicht ${zaehler}/${nenner}.`);
    }
  }

  /* § 1371 Abs. 1 BGB setzt Zugewinngemeinschaft voraus. Wer das Viertel
     aufschlägt, ohne den Güterstand zu nennen, rechnet auf einer Annahme,
     die im Sachverhalt nicht steht. */
  if (/§+\s*1371/.test(text) && !/Zugewinngemeinschaft|gesetzlich(en|er)\s+Güterstand/i.test(text)) {
    fehler.push("§ 1371 Abs. 1 BGB gilt nur bei Zugewinngemeinschaft – der Güterstand muss im Sachverhalt genannt sein, sonst steht die Quote auf einer Annahme.");
  }

  fehler.push(...mitunternehmerFallen(text));

  return fehler;
}

/* ==========================================================================
   Zweistufige Gewinnermittlung: zwei Verwechslungen, die in jeder
   Mitunternehmer-Klausur Punkte kosten - und die am 15.09. beide auf einer
   einzigen Kachel standen, vom strengen Prüfer unbeanstandet.

   Beides sind feste Zuordnungen, keine Ermessensfragen. Genau dafür taugen
   Regeln besser als ein weiteres Modell: Sie kosten nichts, laufen vor jedem
   Modellaufruf und übersehen nichts, weil sie nichts beurteilen.
   ========================================================================== */
const STUFE_ZWEI = /(?:Stufe\s*(?:II\b|2\b)|zweite[nr]?\s+Stufe)/gi;
const STUFE_EINS = /(?:Stufe\s*(?:I\b|1\b)|erste[nr]?\s+Stufe)/i;
const STUFE_EINS_G = /(?:Stufe\s*(?:I\b|1\b)|erste[nr]?\s+Stufe)/gi;
const STUFE_ZWEI_EINZEL = /(?:Stufe\s*(?:II\b|2\b)|zweite[nr]?\s+Stufe)/i;
const ERGAENZUNGSBILANZ = /Ergänzungsbilanz(?:en)?/i;

/* Suchtext hinter einer Fundstelle - Reihenfolge und Abstand entscheiden. */
function dahinter(text, marker, abstand) {
  const treffer = [];
  for (const m of text.matchAll(marker)) treffer.push(text.slice(m.index, m.index + m[0].length + abstand));
  return treffer;
}

export function mitunternehmerFallen(text) {
  const fehler = [];

  /* 1. Die Stufen-Zuordnung der Ergänzungsbilanz ist KEINE feste Zuordnung,
        sondern eine Frage des Schnitts - und beide Schnitte sind vertretbar:

        - Die additive Gewinnermittlung schneidet nach Rechenschritt:
          Stufe 1 = Gesamthandsgewinn zzgl./abzgl. Ergänzungsbilanzergebnis,
          Stufe 2 = Sonderbereich.
        - Das Kursmaterial schneidet nach Ebenen: Stufe I = Gesellschaft,
          Stufe II = Gesellschafter. Die Ergänzungsbilanz ist
          gesellschafterindividuell und gehört danach folgerichtig auf II.

        Am 15.09. stand hier eine Regel, die den ersten Schnitt erzwang - und
        damit die eigene Kursaussage beanstandet hätte, bei jedem Beitrag zu
        diesem Thema aufs Neue. Das Material hat Vorrang, solange es
        vertretbar ist; hier ist es das.

        Was bleibt, ist ein echter Fehler: beides in EINEM Beitrag. Wer die
        Ergänzungsbilanz einmal auf Stufe I und einmal auf Stufe II setzt,
        widerspricht sich - und genau das lernt niemand. */
  /* Beide Richtungen gleich gemessen: Steht das Kennwort hinter der Stufe, und
     liegt die andere Stufe nicht dazwischen? Ein Muster bis zum Satzende taugt
     dafür nicht - deutsche Abkürzungen ("zzgl.") bringen Punkte mit. */
  const zugeordnet = (marker, gegenstueck) => dahinter(text, marker, 60).some((a) => {
    if (!ERGAENZUNGSBILANZ.test(a)) return false;
    return !gegenstueck.test(a.slice(0, a.search(ERGAENZUNGSBILANZ)));
  });
  const stufeEins = zugeordnet(STUFE_EINS_G, STUFE_ZWEI_EINZEL);
  const stufeZwei = zugeordnet(STUFE_ZWEI, STUFE_EINS);
  if (stufeEins && stufeZwei) {
    fehler.push("Widerspruch in der Stufen-Zuordnung: Die Ergänzungsbilanz steht im selben Beitrag einmal auf Stufe I und einmal auf Stufe II. Beide Schnitte sind für sich vertretbar (additiv nach Rechenschritt, das Kursmaterial nach Ebenen) – aber nur einer von beiden, und dann durchgehend.");
  }

  /* 2. Die Sondervergütung IST Betriebsausgabe der Gesellschaft. Sie mindert
        den Gesamthandsgewinn auf Stufe I und wird beim Gesellschafter auf
        Stufe II als Sonderbetriebseinnahme wieder hinzugerechnet
        (korrespondierende Bilanzierung). Wer sie der Gesellschaft als
        Betriebsausgabe abspricht, verschiebt den Gewinn um ihren vollen
        Betrag. Auch das stand am 15.09. auf der Kachel. */
  const VERGUETUNG = /(Miete|Mietzahlung|Pacht|Vergütung|Sondervergütung|Tätigkeitsvergütung|Darlehenszins(?:en)?|Gehalt)/i;
  const KEINE_BA = /kein(?:e|en)?\s+(?:Betriebsausgabe|Aufwand|Betriebsausgaben)/i;
  /* Hier zählt nur die Nachbarschaft: Wer „keine Betriebsausgabe“ in einem Satz
     mit der Vergütung schreibt, meint die Verneinung – vor oder hinter dem Wort. */
  let verneint = null;
  for (const m of text.matchAll(new RegExp(KEINE_BA.source, "gi"))) {
    const ausschnitt = text.slice(Math.max(0, m.index - 140), m.index + m[0].length + 140);
    if (VERGUETUNG.test(ausschnitt)) { verneint = ausschnitt.trim(); break; }
  }
  if (verneint) {
    fehler.push(`Sondervergütungen (§ 15 Abs. 1 S. 1 Nr. 2 EStG) sind sehr wohl Betriebsausgabe der Gesellschaft: Sie mindern den Gesamthandsgewinn auf Stufe I und werden beim Gesellschafter auf Stufe II als Sonderbetriebseinnahme wieder hinzugerechnet. Für den Gesamtgewinn hebt sich beides auf. Gefunden bei: „${verneint.slice(0, 120)}“`);
  }

  return fehler;
}

/* Normen sind wörtlich erlaubt – sie sind Gesetzestext-Zitate, keine Übernahme.
   Deshalb werden Normzitate (auch ohne Gesetzesangabe, in beliebiger
   Reihenfolge von Abs./S./Nr./Buchst.) vor dem Shingle-Vergleich entfernt. */
const NORM = /(?:§§?|Art\.|Artikel|R|H)\s*\d+(?:\.\d+)?[a-z]?(?:\s*(?:\(\d+[a-z]?\)|[a-z]{2}\)|Abs\.|Absatz|S\.|Satz|Nr\.|Nummer|Buchst\.|Buchstabe|Hs\.|Halbsatz|Alt\.|Var\.|lit\.)\s*[\da-z]*\)?)*(?:\s*(?:i\.?\s?V\.?\s?m\.?|iVm|in Verbindung mit)\s*(?:§§?\s*)?\d+[a-z]?(?:\s*(?:Abs\.|S\.|Nr\.|Buchst\.)\s*[\da-z]+)*)?\s*(?:HGB|EStG|AO|UStG|KStG|GewStG|ErbStG|BewG|UmwStG|AStG|EStDV|EStR|EStH|KStR|KStH|UStAE|BGB|GrEStG|FGO|SolZG|DBA|GewStR|UmwG|GmbHG|AktG|InsO|ZPO|BewG)?\b/g;
/* Grundgesetz, AEUV, EUV, EMRK und Grundrechtecharta mit Paragrafenzeichen –
   ein Fehler, den das Modell sonst erst im Faktencheck vorgehalten bekommt,
   also erst nachdem der Text geschrieben und bezahlt ist. */
const ZITIER_ARTIKEL = /(?:§§?\s*|\bParagra(?:f|ph)(?:en)?\s+)\d+[a-z]?(?:\s*(?:\(\d+[a-z]?\)|(?:Abs\.|Absatz|S\.|Satz|Nr\.|Nummer)\s*\d+[a-z]?))*\s*(?:GG|AEUV|EUV|EMRK|GRCh)\b/;

export function ohneNormen(text) {
  return String(text).replace(NORM, " NORM ").replace(/\b(Abs|S|Nr|Buchst|Hs|Alt)\.\s*\d+[a-z]?/g, " NORM ").replace(/\(\d+[a-z]?\)/g, " NORM ");
}

/* Alles, was auf einer Kachel steht - und zwar wirklich alles.

   Bis zum 14.09. fehlten hier ausgerechnet die Felder der Rechenfolie:
   formel, zeilen, ergebnis. Die Folie, auf der die Zahlen stehen, war für
   jede Prüfung in dieser Datei unsichtbar - für die Übernahmeprüfung, für
   die Namenssperre, für die Examensablauf-Regeln. Aufgefallen ist es, als
   die falsche Erbquote durchlief: Der Faktencheck sah die Formel (siehe
   textAus in faktencheck.mjs), diese Prüfung nicht.

   Wer hier ein Feld ergänzt, ergänzt es auch in textAus - die beiden müssen
   dasselbe sehen. */
export function alleTexte(beitrag) {
  const teile = [];
  for (const f of beitrag.folien || []) {
    teile.push(
      f.titel || "", f.untertitel || "", f.text || "", f.definition || "",
      ...(f.punkte || []),
      ...(f.schritte || []).map((s) => (typeof s === "string" ? s : `${s.titel || ""} ${s.text || ""}`)),
      f.formel || "", ...(f.zeilen || []), f.ergebnis || "", f.erklaerung || "",
      /* Jede Spalte am Stück: Überschrift, Text, Punkte. Vorher standen erst
         beide Überschriften und dann alle Punkte hintereinander - damit ging
         verloren, zu welcher Seite ein Punkt gehört, und genau das IST bei
         einer Vergleichsfolie die Aussage. Am 15.09. stand deshalb
         "zzgl./abzgl. Ergänzungsbilanzen" im Prüftext direkt hinter
         "Stufe II", obwohl es auf der Kachel unter Stufe I steht. */
      ...[f.links, f.rechts].filter(Boolean).flatMap((sp) => [sp.titel || "", sp.text || "", ...(sp.punkte || [])]),
    );
  }
  teile.push(beitrag.caption || "", beitrag.kurztitel || "");
  for (const s of beitrag.szenen || []) teile.push(s.titel || "", s.text || "", s.norm || "", s.sprecher || "", ...(s.marken || []));
  for (const s of beitrag.stories || []) {
    teile.push(s.ueberzeile || "", s.titel || "", s.text || "", s.norm || "", s.formel || "", s.zahl || "", s.richtigText || "", s.falsch || "", ...(s.optionen || []));
  }
  return teile.filter(Boolean);
}

/* Fallnamen ohne Sachverhalt.

   Am 16.09. erschien auf dem Schwesterkanal ein Karussell, das ab Folie 2
   von zwei Personen erzaehlte - Betraege, Ueberweisung, Reise. Wer die
   beiden sind, stand nur in der Caption, und die ist zugeklappt. Wer auf
   einer Folie handelt, muss auf einer Folie eingefuehrt worden sein.

   Gesucht wird die typische Fallhandlung: Name + Taetigkeitswort. Kopula
   („ist", „war") bleibt bewusst draussen - „Fraglich ist ..." ist kein Fall,
   sondern Fachsprache. Zusaetzlich braucht es zwei verschiedene Namen oder
   zwei Handlungen, damit ein einzelner Satzanfang keinen fertigen Beitrag
   kippt. */
const FALLHANDLUNG = /(?:^|[.!?;:]\s+|\n)([A-ZÄÖÜ][a-zäöüß]{2,})\s+(?:hat|hatte|kauft|kaufte|verkauft|verkaufte|zahlt|zahlte|überweist|überwies|erhält|erhielt|bucht|buchte|klagt|klagte|gibt|gab|schuldet|schuldete|verlangt|verlangte|liefert|lieferte|bestellt|bestellte|vermietet|vermietete|erbt|erbte|schließt|schloss|meldet|meldete|beantragt|beantragte|veräußert|veräußerte|entnimmt|entnahm|bilanziert|bilanzierte|unterschreibt|unterschrieb|kündigt|kündigte|widerruft|widerrief|ficht|focht)\b/g;
const SACHVERHALT_TITEL = /^(sachverhalt|der sachverhalt|der fall|fall|ausgangsfall|worum es geht)\b/i;
/* Satzanfaenge, die wie ein Name aussehen, aber keiner sind. */
const KEIN_FALLNAME = new Set(["wichtig", "entscheidend", "fraglich", "problematisch", "ergänzend", "zusätzlich", "anders",
  "ebenso", "darüber", "hierbei", "dabei", "danach", "deshalb", "daher", "zudem", "allerdings", "jedoch", "sodann",
  "schließlich", "letztlich", "grundsätzlich", "ausnahmsweise", "folglich", "mithin", "insoweit", "insbesondere",
  "typisch", "klassisch", "denkbar", "möglich", "nötig", "erforderlich", "maßgeblich", "relevant", "umstritten",
  "strittig", "richtig", "falsch", "damit", "dazu", "dann", "hier", "dort", "jeder", "jede", "jedes", "niemand",
  "dieser", "diese", "dieses", "beide", "keiner", "keine", "wer", "was", "wann", "warum", "wie", "wenn", "aber",
  "auch", "noch", "erst", "nur", "sogar", "gerade", "eben", "trotzdem", "dennoch", "wichtige", "viele", "manche"]);

const folienText = (f) => [
  f.titel, f.untertitel, f.text, f.definition,
  ...(f.punkte || []),
  /* Schritt-Ueberschrift und Schritt-Text auf eigene Zeilen: In einer Zeile
     stuende „Etwas erlangt Finn hat 4.320 Euro ..." - der Name saesse mitten
     im Satz und die Fallhandlung bliebe unsichtbar. */
  ...(f.schritte || []).flatMap((s) => (typeof s === "string" ? [s] : [s.titel || "", s.text || ""])),
  f.ergebnis, f.erklaerung,
  ...[f.links, f.rechts].filter(Boolean).flatMap((sp) => [sp.titel, sp.text, ...(sp.punkte || [])]),
].filter(Boolean).join("\n");

export function fallnamenOhneSachverhalt(beitrag) {
  const folien = beitrag?.folien || [];
  if (folien.length < 2) return [];
  const istSachverhalt = (f) => SACHVERHALT_TITEL.test(String(f.titel || "").trim());
  /* Alles, was im Sachverhalt steht, gilt als vorgestellt. */
  const vorgestellt = new Set();
  for (const f of folien.filter(istSachverhalt)) {
    for (const m of folienText(f).matchAll(/\b([A-ZÄÖÜ][a-zäöüß]{2,})\b/g)) vorgestellt.add(m[1]);
  }
  const zaehler = new Map();
  for (const f of folien) {
    if (istSachverhalt(f)) continue;
    for (const m of folienText(f).matchAll(FALLHANDLUNG)) {
      const name = m[1];
      if (vorgestellt.has(name) || KEIN_FALLNAME.has(name.toLowerCase())) continue;
      zaehler.set(name, (zaehler.get(name) || 0) + 1);
    }
  }
  const namen = [...zaehler.keys()];
  const handlungen = [...zaehler.values()].reduce((a, b) => a + b, 0);
  return namen.length >= 2 || handlungen >= 2 ? namen : [];
}

export function pruefeBeitrag(beitrag, opt = {}) {
  const fehler = [];
  const k = opt.korpus || korpus();
  const texte = alleTexte(beitrag);
  const gesamt = texte.join("\n");

  /* 1. Wörtliche Übernahmen: erst ein langer Lauf oder mehrere Fundstellen
        sind Abschreiben, ein einzelner Fachsprachen-Treffer ist es nicht. */
  const laeufe = uebernahmeLaeufe(ohneNormen(gesamt), k);
  const deutlich = laeufe.filter((l) => l.woerter >= UEBERNAHME_WOERTER);
  if (deutlich.length || laeufe.length >= 2) fehler.push(`Wörtliche Übernahme aus der Webseite (bitte in eigenen Worten formulieren): ${(deutlich.length ? deutlich : laeufe).slice(0, 3).map((d) => `„${d.text}“`).join(" · ")}`);

  /* 2. Namen aus den Fällen */
  const namen = gesperrteNamen(gesamt, k);
  if (namen.length) fehler.push(`Gesperrte Fallnamen verwendet (bitte andere, frei erfundene Namen): ${[...new Set(namen)].join(", ")}`);

  /* 2a. Eigenbegriffe anderer Dozenten */
  const eigen = gefundeneEigenbegriffe(gesamt);
  if (eigen.length) fehler.push(`Merkhilfe eines anderen Dozenten übernommen (kein Fachbegriff, bitte weglassen oder den Inhalt ohne Kürzel erklären): ${eigen.join(", ")}`);

  /* 2b. Zitierweise: Das Grundgesetz und die europäischen Verträge werden mit
         Artikel zitiert, nie mit Paragraf. Im Steuerrecht kommt das Grundgesetz
         vor allem bei der Gesetzgebungskompetenz (Art. 105 GG) und beim
         Gleichheitssatz (Art. 3 GG) vor. Geprüft werden beide Schreibweisen:
         auf der Kachel „§“, im Sprechertext des Reels „Paragraf“. */
  if (ZITIER_ARTIKEL.test(gesamt)) fehler.push("Grundgesetz und europäische Verträge werden mit Artikel zitiert, nicht mit Paragraf (Art. 105 Abs. 2 GG statt § 105 GG).");

  /* 2c. Fallnamen, die nur die Caption kennt. */
  const ohneSachverhalt = fallnamenOhneSachverhalt(beitrag);
  if (ohneSachverhalt.length) fehler.push(`${ohneSachverhalt.join(" und ")} handel${ohneSachverhalt.length > 1 ? "n" : "t"} auf den Folien, ohne vorgestellt zu sein: Entweder eine Folie „Sachverhalt“ direkt nach der Titelfolie (Fall in 2–4 Sätzen, mit allen Namen und Zahlen, die die Lösung benutzt) – oder den Beitrag abstrakt formulieren, ganz ohne Namen. Die Caption genügt nicht, sie ist zugeklappt.`);

  /* 3. Quellenbezüge */
  if (QUELLENBEZUG.test(gesamt)) fehler.push(`Bezug auf Kursquelle/Seiten/Fallnummern entfernen: ${gesamt.match(QUELLENBEZUG)[0]}`);

  /* 3c. Normfallen: feste Gesetzeszahlen, die nicht verhandelbar sind.
        Deterministisch und vor jedem Modellaufruf. Erbquoten betreffen auch
        diesen Kanal: Die Erbschaftsteuer setzt auf der zivilrechtlichen
        Quote auf. */
  fehler.push(...normfallen(gesamt));

  /* 4. Formales */
  if (beitrag.folien) {
    if (beitrag.folien.length < GRENZEN.folienMin || beitrag.folien.length > GRENZEN.folienMax) fehler.push(`Folienzahl ${beitrag.folien.length} außerhalb ${GRENZEN.folienMin}–${GRENZEN.folienMax}`);
    beitrag.folien.forEach((f, i) => {
      if ((f.titel || "").length > GRENZEN.titelZeichen) fehler.push(`Folie ${i + 1}: Titel zu lang (${f.titel.length} > ${GRENZEN.titelZeichen})`);
      const textLaenge = (f.text || "").length + (f.punkte || []).join(" ").length + (f.schritte || []).map((s) => (typeof s === "string" ? s : `${s.titel} ${s.text}`)).join(" ").length;
      if (textLaenge > GRENZEN.folienTextZeichen) fehler.push(`Folie ${i + 1}: Text zu lang (${textLaenge} > ${GRENZEN.folienTextZeichen} Zeichen)`);
    });
    if (!beitrag.folien[0]?.titel) fehler.push("Folie 1 braucht einen Titel (die Frage/den Aufhänger)");
    fehler.push(...pruefeAufbau(beitrag.folien));
  }
  if (beitrag.caption != null) {
    if (beitrag.caption.length > GRENZEN.captionZeichen) fehler.push(`Caption zu lang (${beitrag.caption.length})`);
    if ((beitrag.hashtags || []).length > GRENZEN.hashtagsMax) fehler.push("Zu viele Hashtags");
  }
  for (const s of beitrag.stories || []) {
    const l = (s.text || "").length;
    if (l > GRENZEN.storyTextZeichen) fehler.push(`Story „${s.titel || s.art}“: Text zu lang (${l} > ${GRENZEN.storyTextZeichen})`);
  }

  return { ok: fehler.length === 0, fehler };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const k = korpus();
  console.log(`Korpus: ${k.dateien} Dateien, ${k.index.size} Shingles, ${k.namen.length} gesperrte Namen`);
  console.log(k.namen.slice(0, 40).join(", "));
}
