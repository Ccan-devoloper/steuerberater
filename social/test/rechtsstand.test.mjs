import test from "node:test";
import assert from "node:assert/strict";
import { themenpool } from "../src/inhalte.mjs";
import { rechtsstandJahre, rechtsstandAuftrag } from "../src/rechtsstand.mjs";

const pool = themenpool();
const byId = (id) => {
  const thema = pool.find((t) => t.id === id);
  assert.ok(thema, "Thema fehlt im Social-Pool: " + id);
  return thema;
};
const byTitle = (rx) => {
  const thema = pool.find((t) => rx.test(t.titel || ""));
  assert.ok(thema, "Thema fehlt im Social-Pool: " + rx);
  return thema;
};
const kern = (thema) => JSON.stringify(thema.kern || {});

test("Entfernungspauschale nutzt 2026 0,38 Euro ab Kilometer 1", () => {
  const t = byId("bilanz-modul-k3-36");
  assert.match(kern(t), /0,38/);
  assert.match(kern(t), /ersten vollen Entfernungskilometer|ersten Kilometer/);
  assert.doesNotMatch(kern(t), /1\.884|2\.407|20 km × 0,30/);
  const auftrag = rechtsstandAuftrag(t, new Date("2026-09-19T12:00:00Z"));
  assert.match(auftrag, /Rechtsstand 2026/);
  assert.match(auftrag, /Rechtsstand 2025/);
});

test("§ 9 AStG verwendet Einkünfte und kennzeichnet 2025/2026", () => {
  const t = byId("istr-modul-istr-istr4-06");
  assert.match(kern(t), /gesamten Einkünfte/);
  assert.match(kern(t), /§ 21 Abs\. 9 AStG/);
  assert.doesNotMatch(kern(t), /gesamten Bruttoerträge|Bruttoerträge[^"]*ermitteln/);
  const auftrag = rechtsstandAuftrag(t, new Date("2026-09-19T12:00:00Z"));
  assert.match(auftrag, /Rechtsstand 2026/);
  assert.match(auftrag, /ein Drittel/);
  assert.match(auftrag, /100\.000/);
  assert.match(auftrag, /Rechtsstand 2025/);
  assert.match(auftrag, /10 %/);
  assert.match(auftrag, /80\.000/);
});

test("§ 6b Social-Formeln enthalten keine erfundene Reihenfolge und beachten 2-Mio-Grenze", () => {
  const reihenfolge = byId("bilanz-formel-sechsb-reihenfolge");
  assert.doesNotMatch(kern(reihenfolge), /Gewinn → zuerst Grund und Boden|Erst wenn der Grund und Boden[^"]*abgeschrieben/);
  const abs10 = byId("bilanz-formel-sechsb-abs10");
  assert.match(kern(abs10), /2\.000\.000/);
  assert.match(kern(abs10), /10\. Februar 2026/);
  assert.match(kern(abs10), /kalendergleichem Wirtschaftsjahr[^"]*2027/);
  assert.match(kern(abs10), /Kalenderwirtschaftsjahr 2026[^"]*500\.000/);
  const auftrag = rechtsstandAuftrag(abs10, new Date("2026-09-19T12:00:00Z"));
  assert.match(auftrag, /Rechtsstand 2026/);
  assert.match(auftrag, /2\.000\.000/);
  assert.match(auftrag, /Rechtsstand 2025/);
  assert.match(auftrag, /500\.000/);
  const auftrag2027 = rechtsstandAuftrag(abs10, new Date("2027-03-01T12:00:00Z"));
  assert.match(auftrag2027, /Rechtsstand 2027/);
  assert.match(auftrag2027, /2\.000\.000/);
  assert.match(auftrag2027, /Rechtsstand 2026/);
  assert.match(auftrag2027, /500\.000/);
});

test("wirtschaftliches Eigentum bei Miete ist nicht absolut ausgeschlossen", () => {
  const t = byTitle(/Begründet ein Mietverhältnis wirtschaftliches Eigentum/i);
  assert.match(kern(t), /in der Regel/);
  assert.match(kern(t), /§ 39 Abs\. 2 Nr\. 1 AO/);
  assert.doesNotMatch(kern(t), /Nein, niemals/);
});



test("Vorgesellschaft setzt erfolgreiche GmbH-Gründung voraus", () => {
  const modul = byId("kst-modul-kst-1");
  assert.match(kern(modul), /Scheitert die Eintragung/);
  assert.match(kern(modul), /Einzelunternehmen\/Personengesellschaft/);

  const quiz = byTitle(/Körperschaftsteuerpflicht einer erfolgreich gegründeten GmbH/i);
  assert.match(kern(quiz), /später tatsächlich in das Handelsregister eingetragen/);
  assert.match(kern(quiz), /Scheitert die Eintragung endgültig/);

  const karte = byTitle(/Vorgründung vs\. Vorgesellschaft/i);
  assert.match(kern(karte), /bei später erfolgreicher Registereintragung/);
});

test("KSt-Quiz erklärt §8b-Erwerbsfiktion und Vereinsgrenze", () => {
  const streubesitz = byTitle(/Welche Beteiligungsquote ist für die Streubesitzdividende/i);
  assert.match(kern(streubesitz), /§ 8b Abs\. 4 S\. 6 KStG/);
  assert.match(kern(streubesitz), /mindestens 10 %/);

  const verein = byTitle(/Welcher Vereinsbereich.*steuerpflichtig/i);
  assert.match(kern(verein), /§ 64 Abs\. 3 AO/);
  assert.match(kern(verein), /50\.000/);
  const auftrag = rechtsstandAuftrag(verein, new Date("2026-09-19T12:00:00Z"));
  assert.match(auftrag, /45\.000/);
  assert.match(auftrag, /50\.000/);
});

test("Vereinsbesteuerung prüft § 64 Abs. 3 AO vor § 24 KStG", () => {
  const t = byId("kst-modul-kst-12");
  assert.match(kern(t), /§ 64 Abs\. 3 AO/);
  assert.match(kern(t), /50\.000/);
  const auftrag = rechtsstandAuftrag(t, new Date("2026-09-19T12:00:00Z"));
  assert.match(auftrag, /50\.000/);
  assert.match(auftrag, /45\.000/);
});

test("§ 8b-Themen enthalten Erwerbsfiktion des Satzes 6 und keine falsche Einzigkeitsbehauptung", () => {
  for (const id of ["kst-modul-kst-7", "bilanz-modul-k3-50"]) {
    assert.match(kern(byId(id)), /mindestens 10 %/);
    assert.match(kern(byId(id)), /§ 8b Abs\. 4 S\. 6 KStG/);
  }
  const bilanz = byId("bilanz-modul-k3-50");
  assert.doesNotMatch(kern(bilanz), /Die einzige Ausnahme von der Freistellung ist die Streubesitzdividende/i);
  assert.match(kern(bilanz), /Nur wenn die Freistellung/);
  assert.match(kern(bilanz), /keine 10-%-Mindestquote/);
});

test("Rückstellungskatalog nennt die gesetzlichen Sonderfälle vollständig genug", () => {
  const t = byId("bilanz-modul-k3-29");
  assert.match(kern(t), /Abraumbeseitigung/);
  assert.match(kern(t), /Gewährleistungen ohne rechtliche Verpflichtung/);
  assert.doesNotMatch(kern(t), /einzige praktische Ausnahme/i);
});

test("Elektro-Pkw-Merksatz verallgemeinert nicht mehr auf Halbierung", () => {
  const t = byId("bilanz-modul-k3-35");
  assert.match(kern(t), /Viertelregel/);
  assert.doesNotMatch(kern(t), /Einkommensteuer halbiert/);
});








test("Leasing-40/90-Formel berücksichtigt gemeinen Wert und Vertragsart", () => {
  const t = byId("bilanz-formel-leasing-4090");
  assert.match(t.titel, /Finanzierungsleasing/);
  assert.match(kern(t), /Vollamortisationsverträge/);
  assert.match(kern(t), /niedrigere gemeine Wert/);
  assert.match(kern(t), /Mietverlängerungs- und Spezialleasingfälle/);
  assert.doesNotMatch(kern(t), /Optionspreis kleiner als der lineare Restbuchwert bedeutet ebenfalls/);
});

test("Einlage-Deckel nennt Satz 3 und nur eigenes vorheriges Betriebsvermögen", () => {
  const t = byTitle(/Wann ist die Einlage auf die Anschaffungskosten gedeckelt/i);
  assert.match(kern(t), /§ 6 Abs\. 1 Nr\. 5 S\. 1 Buchst\. a EStG/);
  assert.match(kern(t), /Betriebsvermögen desselben Steuerpflichtigen/);
  assert.match(kern(t), /nach Satz 3/);
  assert.doesNotMatch(kern(t), /aus einem anderen Betriebsvermögen entnommen wurde/);
});

test("§15a-Karte macht aus der Haftsumme keine pauschale Verlustgrenze", () => {
  const t = byTitle(/Wie prüft man § 15a EStG in vier Schritten/i);
  assert.match(kern(t), /eingetragene Einlage.*tatsächlich geleistete Einlage/);
  assert.match(kern(t), /Außenhaftung.*tatsächlich besteht/);
  assert.match(kern(t), /vertraglich ausgeschlossen/);
  assert.doesNotMatch(kern(t), /erweitert um die eingetragene Haftsumme/);
});

test("Mietereinbau-AfA verwechselt §7 Abs.4 Satz 2 nicht mit der Regel-AfA", () => {
  const t = byTitle(/Mietdauer oder Nutzungsdauer beim Mietereinbau/i);
  assert.match(kern(t), /§ 7 Abs\. 4 S\. 1 EStG/);
  assert.match(kern(t), /kürzerer tatsächlicher Nutzungsdauer/);
  assert.doesNotMatch(kern(t), /betriebsgewöhnliche Nutzungsdauer nach § 7 Abs\. 4 S\. 2/i);
});

test("Abbruchkosten behandeln die Dreijahresfrist nur als Anscheinsbeweis", () => {
  const t = byTitle(/Wie wirken sich Abbruchkosten aus/i);
  assert.match(kern(t), /widerlegbaren Anscheinsbeweis/);
  assert.match(kern(t), /Restbuchwert und Abbruchkosten.*Herstellungskosten/);
  assert.match(kern(t), /Anschaffungskosten des Grund und Bodens/);
  assert.doesNotMatch(kern(t), /Restbuchwert → Grund und Boden/);
});

test("USt-Quiz zur innergemeinschaftlichen Lieferung nennt alle tragenden Voraussetzungen", () => {
  const t = byTitle(/Innergemeinschaftliche Lieferung: Voraussetzungen der Steuerfreiheit/i);
  assert.match(kern(t), /anderen EU-Mitgliedstaat/);
  assert.match(kern(t), /Erwerbsbesteuerung/);
  assert.match(kern(t), /nur eine von mehreren materiellen Voraussetzungen/);
});

test("allgemeine USt-Steuersatzkarte enthält auch den Nullsteuersatz", () => {
  const t = byTitle(/^Steuersätze \(§ 12 UStG\)$/i);
  assert.match(kern(t), /0 %/);
  assert.match(kern(t), /§ 12 Abs\. 3 UStG/);
  assert.match(kern(t), /Photovoltaik/);
});

test("Bilanzänderung verlangt keine zusätzliche Zustimmung des Finanzamts", () => {
  const karte = byTitle(/Bilanzberichtigung oder Bilanzänderung/i);
  assert.match(kern(karte), /engem zeitlichen und sachlichen Zusammenhang/);
  assert.match(kern(karte), /zusätzliche gesetzliche Zustimmung[^"]*nicht/);
  assert.doesNotMatch(kern(karte), /nur mit Zustimmung des Finanzamts/i);

  const modul = byTitle(/Bilanzberichtigung und Bilanzänderung/i);
  assert.match(kern(modul), /zusätzliche Zustimmungspflicht[^"]*nicht/);
  assert.doesNotMatch(kern(modul), /Zustimmungsbedürftigkeit|zustimmungsbedürftig/i);
});

test("Rückstellungsabzinsung unterscheidet 10 und 7 Geschäftsjahre", () => {
  const formel = byId("bilanz-formel-abzinsung");
  assert.match(kern(formel), /Altersversorgungsverpflichtungen.*zehn Geschäftsjahren/);
  assert.match(kern(formel), /sonstigen Rückstellungen.*sieben Geschäftsjahren/);

  const karte = byTitle(/Wie unterscheidet sich die Rückstellungsbewertung in HB und StB/i);
  assert.match(kern(karte), /Altersversorgungsverpflichtungen.*zehn/);
  assert.match(kern(karte), /sonstige Rückstellungen.*sieben/);
});

test("Latente Steuern berücksichtigen auch steuerliche Verlustvorträge", () => {
  const t = byId("bilanz-formel-latente-steuern");
  assert.match(kern(t), /steuerliche Verlustvorträge/);
  assert.match(kern(t), /nächsten fünf Jahre/);
  assert.match(kern(t), /§ 274a HGB/);
});

test("Realteilung erfasst auch die unechte Realteilung", () => {
  const karte = byTitle(/Realteilung oder Sachwertabfindung/i);
  assert.match(kern(karte), /unechte Realteilung/i);
  assert.match(kern(karte), /fortgeführt|fortführen/i);
  assert.doesNotMatch(kern(karte), /Realteilung setzt die Auflösung der Mitunternehmerschaft/i);

  const modul = byTitle(/Realteilung und Sachwertabfindung/i);
  assert.match(kern(modul), /unechte Realteilung/i);
  assert.match(kern(modul), /ausschließlich Geld|Barabfindung/i);
  assert.match(kern(modul), /§ 6 Abs\. 5 S\. 7 EStG/);
  assert.match(kern(modul), /§ 16 Abs\. 5 EStG/);
  assert.match(kern(modul), /siebenjährige Nachversteuerungsregel/);
});

test("PWB enthält keine pauschale 1-Prozent-Verwaltungsregel", () => {
  const t = byId("bilanz-formel-pwb");
  assert.match(kern(t), /betrieblicher Erfahrungswerte/);
  assert.match(kern(t), /Nichtaufgriffsgrenze bis 1 %/i);
  assert.match(kern(t), /kein gesetzlicher Pauschalsatz/);
  assert.match(kern(t), /höheren nachgewiesenen Risikosatz/);
  assert.match(kern(t), /risikobehafteter Nettobestand/);
  assert.doesNotMatch(kern(t), /Gesamtbestand brutto.*÷ 1,19/);
  assert.doesNotMatch(kern(t), /Verwaltung regelmäßig nur 1 %/i);
});

test("allgemeine §8b-Technikkarte berücksichtigt Streubesitz", () => {
  const t = byTitle(/Wie wird § 8b KStG technisch umgesetzt/i);
  assert.match(kern(t), /§ 8b Abs\. 4 KStG/);
  assert.match(kern(t), /Nur wenn die Freistellung/);
  assert.match(kern(t), /Erwerbsfiktion/);
});

test("Teileinkünfte-Formel verallgemeinert §8b nicht auf jede Körperschaftsdividende", () => {
  const t = byId("bilanz-formel-teileinkuenfte");
  assert.match(kern(t), /Streubesitz/);
  assert.match(kern(t), /§ 8b Abs\. 4 KStG/);
  assert.match(kern(t), /5-%-Pauschale greift nur/);
});

test("Gastronomie trägt den 2025/2026-Rechtsstandswechsel", () => {
  const t = byId("ust-modul-ust-161");
  const auftrag = rechtsstandAuftrag(t, new Date("2026-09-19T12:00:00Z"));
  assert.match(auftrag, /Rechtsstand 2026/);
  assert.match(auftrag, /7 %/);
  assert.match(auftrag, /Rechtsstand 2025/);
  assert.match(auftrag, /19 %/);
});


test("E-Rechnung schaltet 2027 auf Rechtsstand 2027/2026 um", () => {
  const t = byTitle(/E-Rechnung im B2B-Inland: Übergangsfristen/i);
  assert.match(kern(t), /800\.000/);
  assert.equal(rechtsstandAuftrag(t, new Date("2026-09-19T12:00:00Z")), "");
  const auftrag2027 = rechtsstandAuftrag(t, new Date("2027-02-01T12:00:00Z"));
  assert.match(auftrag2027, /Rechtsstand 2027/);
  assert.match(auftrag2027, /800\.000/);
  assert.match(auftrag2027, /Rechtsstand 2026/);
  assert.match(auftrag2027, /unabhängig von einer 800\.000-€-Umsatzgrenze/);
});

test("Jahreslogik rollt 2027 automatisch auf 2027/2026", () => {
  assert.deepEqual(rechtsstandJahre(new Date("2027-02-01T12:00:00Z")), { aktuell: 2027, vorjahr: 2026 });
  assert.deepEqual(rechtsstandJahre(new Date("2026-12-31T23:30:00Z")), { aktuell: 2027, vorjahr: 2026 });
});
