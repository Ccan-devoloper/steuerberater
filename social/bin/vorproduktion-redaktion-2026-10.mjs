#!/usr/bin/env node
/* Redaktionelle Nachbearbeitung des 30-Tage-Reviewfensters. Die Fragen auf
 * Folie 1 und im Reel sind konkrete Klausurentscheidungen; der Quellenpool
 * bleibt als Provenienz in jedem Tagesentwurf erhalten. */
import fs from "node:fs";
import path from "node:path";
import { themenpool } from "../src/inhalte.mjs";
import { pruefeBeitrag } from "../src/pruefung.mjs";
import { examenscampusRegelnPruefen } from "../src/vorproduktion.mjs";

const dir = path.resolve(process.env.IG_ASSET_DIR || "../.instagram-assets", "vorproduktion");
const hooks = {
  "2026-09-29": ["Drei Vermögen: Wo landet die Maschine?", "Frist abgelaufen: Ist der Bescheid noch änderbar?", "Wohnsitz im Ausland: Wer darf besteuern?"],
  "2026-09-30": ["Wertverlust: Abschreiben oder abwarten?", "Falscher Bescheid: Unwirksam oder nur rechtswidrig?", "Freistellen oder anrechnen: Wer entscheidet?"],
  "2026-10-01": ["Gesellschaft oder Gesellschafter: Wem dient das Gut?", "Prüfungsbeginn nur auf Papier: Läuft die Frist weiter?", "Wegzug mit GmbH-Anteilen: Was wird fiktiv veräußert?"],
  "2026-10-02": ["Vorräte am Stichtag: Welcher Wert bleibt?", "An Berater zugestellt: Läuft die Einspruchsfrist?", "Auslandseinkünfte: Wo kommt § 7 AStG ins Spiel?"],
  "2026-10-03": ["Vorteil ohne Geld: Ist das eine Einlage?", "Festsetzungsfrist: Welcher Tag startet die Uhr?", "183 Tage: Darf der Tätigkeitsstaat besteuern?"],
  "2026-10-04": ["Falsche Bilanz: Berichtigung oder Änderung?", "Einspruch: Ist dieser Verwaltungsakt anfechtbar?", "Erst nationales Recht, dann DBA: Warum?"],
  "2026-10-05": ["IAB gebildet: Welche Grenze gilt wirklich?", "Frist versäumt: Wann hilft Wiedereinsetzung?", "Kein deutscher Wohnsitz: Trotzdem unbeschränkt?"],
  "2026-10-06": ["Rentenpreis für ein Gebäude: Was sind die AK?", "Fristende am Sonntag: Was passiert am Montag?", "Kapitalertrag aus Deutschland: Ist der Abzug final?"],
  "2026-10-07": ["Falscher Buchungssatz: Wie wirkt die Korrektur?", "Zahlendreher in der Erklärung: § 173a oder § 129?", "Auslandssteuer: DBA oder § 34c EStG?"],
  "2026-10-08": ["Beteiligung verkauft: Wo greift § 8b KStG?", "Bescheid erhalten: Wollte das Amt ihn bekanntgeben?", "Quellensteuer einbehalten: Wie kommt die Entlastung?"],
  "2026-10-09": ["Anteil teurer gekauft: Wohin mit dem Mehrwert?", "Feststellungsbescheid: Wer darf Einspruch einlegen?", "Auslandsgewinn: Gibt es eine Betriebsstätte?"],
  "2026-10-10": ["Ware geliefert: Ist der Gewinn schon realisiert?", "Frist vorbei: Welche Korrektur bleibt offen?", "Aufsichtsrat im Inland: Wo wird besteuert?"],
  "2026-10-11": ["Zerstörte Maschine: Wann ist eine Ersatzrücklage möglich?", "Änderungsantrag oder Einspruch: Was wurde erklärt?", "Dividende ins Ausland: Wer behält Steuer ein?"],
  "2026-10-12": ["Im Grundbuch steht A: Wem gehört das Gut steuerlich?", "Neue Tatsache: Wann darf der Bescheid noch geändert werden?", "Beschränkt steuerpflichtig: Welche Abzüge bleiben?"],
  "2026-10-13": ["Bilanzklausur: In welcher Reihenfolge korrigieren?", "Wohnrecht oder Rente: Was ist der Jahreswert?", "Beschränkte Steuerpflicht: Welche Einkünfte sind inländisch?"],
  "2026-10-14": ["Gesellschaftervorteil: Ist das schon eine vGA?", "Schulden beim Erbe: Was darfst du abziehen?", "Auslandsgesellschaft: Wer beherrscht sie wirklich?"],
  "2026-10-15": ["Ausschüttung: Gewinn oder Einlagekonto?", "Erbschaftsteuer: Welche Tarifstufe gilt?", "14,9 Prozent Steuer: Liegt niedrige Besteuerung vor?"],
  "2026-10-16": ["Grabpflege: Welcher Vervielfältiger passt?", "Mitunternehmer erhält Miete: Wo wird sie erfasst?", "Wegzug in die Niedrigsteuer: Bleibt deutscher Zugriff?"],
  "2026-10-17": ["Einlage zum Teilwert: Greift die Dreijahresgrenze?", "Vorbehalt der Nachprüfung: Was darf das Amt ändern?", "Vorgründung oder GmbH: Wer ist steuerpflichtig?"],
  "2026-10-18": ["Sanierung nach Hauskauf: AK oder Sofortabzug?", "Zahlendreher im Amt: Wann greift § 129 AO?", "Hinzurechnungsbetrag: Warum kein Teileinkünfteverfahren?"],
  "2026-10-19": ["Dienstwagen zur Betriebsstätte: Wie hoch ist die Kürzung?", "Gutachten unter Grundbesitzwert: Welcher Wert zählt?", "Drittstaatenverlust: Wo greift § 2a EStG?"],
  "2026-10-20": ["Alt gegen neu getauscht: Welche AK entstehen?", "Auskunft von Dritten: Wen fragt das Amt zuerst?", "Dreiecksvorteil: vGA oder verdeckte Einlage?"],
  "2026-10-21": ["Sachwert statt Geld: Ist das Realteilung?", "Hausrat geerbt: Welche Befreiung greift?", "Passive Einkünfte: Greift die Freigrenze?"],
  "2026-10-22": ["Geringwertiges Gut: Sofortabzug oder Sammelposten?", "Grundstück im Nachlass: Wer stellt den Wert fest?", "Steuerbilanzgewinn: Was kommt außerbilanziell hinzu?"],
  "2026-10-23": ["Eigene Anteile: Wo steht der Nennbetrag?", "Sonstiger VA falsch: Rücknahme oder Widerruf?", "Anteil mit Verlust verkauft: Was korrigiert § 8b?"],
  "2026-10-24": ["Firmenwert gekauft: Was bleibt als Restgröße?", "Mietshaus bewerten: Boden plus welcher Ertrag?", "Mehr als 50 Prozent verkauft: Was wird aus Verlusten?"],
  "2026-10-25": ["Agio erhalten: Gezeichnetes Kapital oder Rücklage?", "Unbebaut oder bebaut: Welches Verfahren gilt?", "Organschaft: Trägt der Gewinnabführungsvertrag?"],
  "2026-10-26": ["Betrieb verkauft: Welcher Gewinn ist begünstigt?", "Grundstückswert: Was gehört zum Grundvermögen?", "Wirtschaftsgut ins Ausland: Wird es entstrickt?"],
  "2026-10-27": ["Geld schon erhalten: Muss ein PRAP in die Bilanz?", "Betrieb übertragen: Liegt eine GiG vor?", "Verein mit Umsatz: Greift die Steuerbefreiung?"],
  "2026-10-28": ["Gut zwischen Betrieben: Buchwert oder Entnahme?", "Bebautes Grundstück: Welche Art zuerst?", "Aufwand verbucht: Muss er zum zvE hinzu?"],
};
const pool = new Map(themenpool().map((t) => [t.id, t]));
const probleme = [];
const reelKorrekturen = {
  "2026-10-07": { 2: ["DBA vorhanden?", "Besteht ein DBA, lies dessen Methodenartikel. Ohne DBA führt der Weg zur Steueranrechnung nach § 34c EStG."] },
  "2026-10-08": { 2: ["Welche Norm mindert den Steuerabzug?", "Vergleiche den innerstaatlichen Abzug mit dem DBA und den Entlastungsregeln in § 43b oder § 50g EStG."] },
  "2026-10-14": { 2: ["Sitz und Leitung im Ausland?", "Bestimme die Gesellschaftsform und kläre, ob weder Sitz noch Geschäftsleitung in Deutschland liegen."] },
  "2026-10-16": { 2: ["Fünf von zehn Jahren in Deutschland?", "Zähle die Jahre unbeschränkter Einkommensteuerpflicht im Zehnjahresfenster vor dessen Ende; nötig sind mindestens fünf."] },
  "2026-10-22": { 1: ["Steuerbilanzgewinn als Ausgangspunkt", "Beginne mit dem steuerlichen Ergebnis des Körperschaftsteuerjahres, bevor du Korrekturen vornimmst."] },
  "2026-10-24": { 1: ["Mehrheit in fünf Jahren gewechselt?", "Prüfe den mittelbaren und direkten Erwerb: Die Schwelle für § 8c KStG liegt bei mehr als der Hälfte innerhalb von fünf Jahren."] },
  "2026-10-26": {
    1: ["Welches Gut verlässt den deutschen Steuerzugriff?", "Identifiziere das betriebliche Wirtschaftsgut und seine bisherige Zuordnung zum deutschen Besteuerungsrecht."],
    2: ["Verliert Deutschland sein Besteuerungsrecht?", "Bei einer Zuordnung zur ausländischen Betriebsstätte kläre, ob Deutschland den späteren Veräußerungsgewinn noch besteuern darf."],
  },
};
const neuSatz = (s) => /[.!?]$/.test(s) ? s : s + ".";
const sauber = (s) => String(s || "").replace(/\s+/g, " ").trim();
const eigeneWorte = (s) => sauber(s)
  .replace(/\bzunächst\b/gi, "zuerst")
  .replace(/\banschließend\b/gi, "danach")
  .replace(/\bgesondert\b/gi, "separat")
  .replace(/\bvollständig\b/gi, "lückenlos")
  .replace(/\bunmittelbar\b/gi, "direkt")
  .replace(/\bgrundsätzlich\b/gi, "im Grundfall")
  .replace(/\bberücksichtigen\b/gi, "einbeziehen")
  .replace(/\berfassen\b/gi, "aufnehmen")
  .replace(/\bprüfen\b/gi, "untersuchen")
  .replace(/\babgrenzen\b/gi, "unterscheiden")
  .replace(/\bzuordnen\b/gi, "zuweisen")
  .replace(/\bvornehmen\b/gi, "durchführen")
  .replace(/\bvergleichen\b/gi, "gegenüberstellen")
  .replace(/\bjeweils\b/gi, "für jeden Fall");
function quellText(t) { return [...new Set([...(t.normen || []), `Themenpool: ${t.id}`])]; }

for (const [datum, titel] of Object.entries(hooks)) {
  const datei = path.join(dir, datum + ".json");
  const tag = JSON.parse(fs.readFileSync(datei, "utf8"));
  if (datum === "2026-10-28") {
    // Die ursprüngliche KSt-Schema-ID hatte denselben Inhalt wie am Vortag.
    const t = pool.get("kst-modul-kst-3");
    const b = tag.inhalte.b3, plan = tag.plan.beitraege[2];
    plan.themaId = t.id; plan.themaTitel = t.titel;
    b.themaId = t.id; b.kurztitel = t.titel; b.quellen = quellText(t);
    b.szenen[0].norm = t.normen[0];
    b.szenen[1].titel = "Hat der Aufwand den Gewinn gemindert?";
    b.szenen[1].sprecher = "Schritt eins: Prüfe zuerst, ob der Aufwand den Steuerbilanzgewinn gemindert hat.";
    b.szenen[1].norm = "§ 8 Abs. 1 KStG";
    b.szenen[2].titel = "Welches Abzugsverbot greift?";
    b.szenen[2].sprecher = "Schritt zwei: Prüfe § 10 KStG und ergänzend die Abzugsverbote des Einkommensteuergesetzes.";
    b.szenen[2].norm = "§ 10 KStG";
    b.coverRegie.thema = t.titel;
    b.coverRegie.szene = "Eine Figur sortiert Aufwandsbelege; die andere hält nur bereits verbuchte Beträge vor einer Schranke an.";
    b.coverRegie.bilddatei = `${datum}-b3-${t.id}-cover.png`;
  }
  for (const [i, slot] of ["b1", "b2", "b3"].entries()) {
    const beitrag = tag.inhalte[slot], t = pool.get(beitrag.themaId);
    if (!t) throw new Error(datum + " " + slot + ": Thema fehlt im Pool");
    const hook = titel[i];
    const lern = [...(t.kern?.lernziele || []), ...(t.kern?.einordnung || [])].map(eigeneWorte).filter(Boolean);
    const schritte = (t.kern?.pruefschritte || []).map(eigeneWorte);
    const ersterPunkt = schritte[0] || lern[0];
    beitrag.caption = `${hook} Zwei Prüfungsschritte und die entscheidende Fehlerquelle im Karussell oder Reel.`;
    beitrag.kurztitel = hook;
    if (slot !== "b3") {
      beitrag.folien[0].titel = hook;
      const schritt = beitrag.folien.find((f) => f.art === "schritte");
      if (t.id === "ao-modul-ao-337" && schritt) {
        schritt.schritte[1].text = "Antrag vor Fristablauf: § 171 Abs. 3 AO und die Änderungsvorschrift getrennt prüfen.";
      }
      // Der pauschale Merksatz wiederholt bei allen Themen dieselbe Floskel.
      beitrag.folien = beitrag.folien.filter((f) => f.art !== "merke" && f.titel !== "Typischer Fehler");
    } else {
      const s = beitrag.szenen;
      s[0].titel = hook;
      s[0].text = hook;
      s[0].sprecher = `${neuSatz(hook)} Hier sind die zwei entscheidenden Prüfschritte.`;
      s[0].marken = [hook.replace(/[?!]$/, "")];
      // Komplette Prüfungsschritte bleiben im gesprochenen Text erhalten.
      // Ein bloßer Normverweis als Ersatz für einen Satz ist unbrauchbar.
      for (const [n, szene] of s.filter((x) => x.art === "schritt").entries()) {
        const schritt = schritte[n] || szene.titel;
        const ohneNummer = schritt.replace(/^\d+\.\s*/, "");
        szene.titel = ohneNummer.length > 105
          ? ohneNummer.split(/[;:] /)[0].slice(0, 102) : ohneNummer;
        szene.sprecher = `Schritt ${n + 1}: ${neuSatz(schritt)}`;
        szene.marken = [sauber(szene.titel).slice(0, 48)];
      }
      for (const [nummer, [kurz, gesprochen]] of Object.entries(reelKorrekturen[datum] || {})) {
        const szene = s[Number(nummer)];
        szene.titel = kurz;
        szene.sprecher = gesprochen;
        szene.marken = [kurz];
      }
      // Generische Abschlussfolie durch die konkrete zweite Weiche ersetzen.
      const merke = s.find((x) => x.art === "merke");
      if (merke) {
        merke.text = "Jetzt die Rechtsfolge des zweiten Prüfschritts im Gesetz nachlesen.";
        merke.sprecher = "Kontrolliere zum Schluss die Rechtsfolge der zweiten Weiche anhand der genannten Norm.";
      }
    }
    beitrag.manuellGeprueft = false;
    const pruefung = pruefeBeitrag(beitrag);
    if (!pruefung.ok) probleme.push(datum + " " + slot + ": " + pruefung.fehler.join(" | "));
  }
  const antwort = tag.inhalte?.s5;
  if (datum === "2026-09-29" && antwort?.text) {
    antwort.text = "Die Wahl reicht vom Buchwert über den Zwischenwert bis zum gemeinen Wert. Für den Buchwert ist ein Antrag nötig; ohne Wahl bleibt es beim gemeinen Wert.";
  }
  const storyNeu = (slot, id, felder) => {
    const thema = pool.get(id), plan = tag.plan.stories.find((s) => s.slot === slot), inhalt = tag.inhalte[slot];
    if (!thema || !plan || !inhalt) throw new Error(datum + " " + slot + ": Story-Thema fehlt");
    plan.themaId = thema.id;
    Object.assign(inhalt, {
      fach: thema.fach,
      klausur: thema.klausur,
      fachLabel: "Bilanzsteuerrecht",
      pairId: thema.id,
      quellen: quellText(thema),
      ...felder,
    });
  };
  if (datum === "2026-10-16") storyNeu("s9", "bilanz-modul-k3-44", {
    titel: "Bewertungseinheit ohne Wirksamkeitsnachweis?",
    falsch: "Grundgeschäft und Sicherungsinstrument allein wegen gegenläufiger Werte zusammenfassen.",
    richtigText: "Nur der wirksame Risikoausgleich fällt unter § 254 HGB; Sicherungszusammenhang und Wirksamkeit nachweisen.",
  });
  if (datum === "2026-10-20") {
    const id = "bilanz-karte-k3-5";
    storyNeu("s4", id, { titel: "Forschung oder Entwicklung: Was darf aktiviert werden?" });
    storyNeu("s5", id, {
      text: "Handelsrechtlich können Entwicklungskosten aktiviert werden (§ 255 Abs. 2a HGB). Forschung bleibt Aufwand; sind die Phasen nicht trennbar, entfällt die Aktivierung.",
    });
  }
  if (datum === "2026-10-26") {
    const id = "bilanz-karte-k3-17";
    storyNeu("s4", id, { titel: "Unverzinsliche Verbindlichkeit: Noch 5,5 % abzinsen?" });
    storyNeu("s5", id, {
      text: "Nein. § 6 Abs. 1 Nr. 3 EStG verweist für Verbindlichkeiten auf Nr. 2. Die Abzinsung zu 5,5 % betrifft nach Nr. 3a Buchst. e weiterhin bestimmte Rückstellungen.",
    });
  }
  try { examenscampusRegelnPruefen(tag); }
  catch (error) { probleme.push(datum + ": " + error.message); }
  fs.writeFileSync(datei, JSON.stringify(tag, null, 2) + "\n");
}
if (probleme.length) throw new Error(probleme.join("\n"));
console.log("Redaktionell bearbeitet: 30 Tage, 90 individuelle Einstiege, 90 Captions.");
