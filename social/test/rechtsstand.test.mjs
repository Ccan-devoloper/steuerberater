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

test("Grundstückseinlage trennt Dreijahresdeckel von §23-Zehnjahresregel", () => {
  const t = byId("bilanz-modul-k3-41");
  assert.match(kern(t), /innerhalb der letzten drei Jahre/i);
  assert.match(kern(t), /§ 23 Abs\. 1 S\. 5 Nr\. 1/i);
  assert.match(kern(t), /innerhalb von zehn Jahren seit der ursprünglichen Anschaffung/i);
  assert.match(kern(t), /Einlagewert.*an die Stelle des Veräußerungspreises/i);
  assert.doesNotMatch(kern(t), /stille Reserve.*endgültig unbesteuert/i);
});

test("Wirtschaftliches Eigentum bei Miete/Leasing ist keine absolute Nie-Regel", () => {
  const t = byId("bilanz-modul-k3-2");
  assert.match(kern(t), /Mieter oder Pächter.*in der Regel nicht wirtschaftlicher Eigentümer/i);
  assert.match(kern(t), /keine ausnahmslose Regel/i);
  assert.match(kern(t), /Leasing.*wirtschaftliches Eigentum.*liegen/i);
  assert.match(kern(t), /gewöhnliche Nutzungsdauer/i);
  assert.match(kern(t), /Kauf- oder Verlängerungsoption|Spezialleasing/i);
  assert.doesNotMatch(kern(t), /Mietverhältnis begründet niemals.*wirtschaftliches Eigentum/i);
});

test("Ersatzbeschaffungsrücklage enthält vollständige Verwaltungsfristen und BFH-Abweichung", () => {
  const t = byId("bilanz-modul-k3-26");
  assert.match(kern(t), /bewegliche[sr]? Wirtschaftsgut.*(?:grundsätzlich )?ein Jahr/i);
  assert.match(kern(t), /bis (?:auf )?vier Jahre/i);
  assert.match(kern(t), /neu hergestellten? Gebäude.*sechs Jahre/i);
  assert.match(kern(t), /BFH.*IV R 4\/09/i);
  assert.match(kern(t), /vier Wirtschaftsjahre allgemein|allgemein mit vier Wirtschaftsjahren/i);
  assert.doesNotMatch(kern(t), /Frist beachten: ein Jahr, bei Grundstücken und Gebäuden vier Jahre, verlängerbar/);
});

test("Gebäudemodul verwendet dieselbe 15%-Abgrenzung wie die Formel", () => {
  const t = byId("bilanz-modul-k3-23");
  assert.match(kern(t), /Erweiterungen.*nicht in die 15-%-Grenze/i);
  assert.match(kern(t), /ohnehin.*Herstellungskosten|originäre Herstellungskosten/i);
  assert.match(kern(t), /Unter 15 %.*keine Fiktion|Unterschreiten.*nicht automatisch Sofortabzug/i);
  assert.doesNotMatch(kern(t), /90\.000 €.*sofort abziehbarer Erhaltungsaufwand/i);
});

test("15%-Grenze trennt Erweiterungen von anschaffungsnahen Herstellungskosten", () => {
  const t = byId("bilanz-formel-anschaffungsnah");
  assert.match(kern(t), /Erweiterungen.*nicht in die 15-%-Grenze/i);
  assert.match(kern(t), /ohnehin.*Herstellungskosten|originäre Herstellungskosten/i);
  assert.match(kern(t), /Unterschreiten.*nicht automatisch Sofortabzug|Unter 15 %.*keine Fiktion/i);
  assert.match(kern(t), /allgemeinen.*Anschaffungs- oder Herstellungskosten/i);
  assert.doesNotMatch(kern(t), /Aufwendungen von 90\.000 € bleiben sofort abziehbar/);
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








test("§122a-AO-Modul bildet Übergang 2026 und Regelfall 2027 ab", () => {
  const t = byId("ao-modul-ao-313");
  assert.match(kern(t), /vierten Tag nach der Bereitstellung/);
  assert.match(kern(t), /Benachrichtigung.*Hinweisfunktion/);
  assert.match(kern(t), /Übergang 2026/);
  const auftrag2027 = rechtsstandAuftrag(t, new Date("2027-02-01T12:00:00Z"));
  assert.match(auftrag2027, /Rechtsstand 2027/);
  assert.match(auftrag2027, /ohne vorherige Einwilligung/);
  assert.match(auftrag2027, /Rechtsstand 2026/);
  assert.match(auftrag2027, /Übergangsjahr/);
});

test("Außenprüfungsmodul nutzt neue §171-Abs.4-Fünfjahresgrenze", () => {
  const t = byId("ao-modul-ao-335");
  assert.match(kern(t), /nach dem 31\.12\.2024/);
  assert.match(kern(t), /fünf Jahre nach Ablauf des Kalenderjahres/);
  assert.match(kern(t), /Art\. 97 § 37 Abs\. 2 EGAO|altes Recht/);
  assert.doesNotMatch(kern(t), /äußerste zeitliche Grenze nach Schlussbesprechung bzw\. letzter Prüfungshandlung/);
});

test("Vollstreckung trennt §254-Wochenfrist von der Soll-Mahnung nach §259", () => {
  for (const id of ["ao-modul-ao-367", "ao-modul-ao-384"]) {
    const t = byId(id);
    assert.match(kern(t), /Leistungsgebot.*mindestens eine Woche/i);
    assert.match(kern(t), /Mahnung.*Soll-Regel|Soll-Mahnung/i);
    assert.match(kern(t), /keine zwingende Rechtmäßigkeitsvoraussetzung/i);
    assert.match(kern(t), /Unterbleiben.*nicht.*unzulässig/i);
  }
});

test("PersG-SBV-II verwendet keine starre 10%-Grenze für Komplementär-GmbH-Anteile", () => {
  const t = byId("persg-modul-persg-7");
  assert.match(kern(t), /keine allgemeine starre 10-%-Grenze|nicht ab 10 % automatisch/i);
  assert.match(kern(t), /weniger als 10 %/);
  assert.match(kern(t), /10 bis 25 %.*keine automatische|10 bis 25 %.*nicht.*automatisch/i);
  assert.match(kern(t), /Einfluss.*Geschäftsführung|Veranlassungs.*Funktion/i);
  assert.match(kern(t), /bloße.*finanzielle Teilhabe.*nicht|bloße Vermögensmehrung.*nicht/i);
});

test("§171-Außenprüfungsunterbrechung kennt Rückfall und Fünfjahresbefristung", () => {
  const t = byId("ao-modul-ao-336");
  assert.match(kern(t), /mehr als sechs Monate/i);
  assert.match(kern(t), /rückwirkend/i);
  assert.match(kern(t), /Wiederaufnahme.*erneut|neu hemmen/i);
  assert.match(kern(t), /fünf Jahre/i);
  assert.match(kern(t), /S\. 4–7|Sätze 4 bis 7/i);
});

test("§181-Wirkhinweis ist Regelungsinhalt, aber keine Wirksamkeitsvoraussetzung", () => {
  const t = byId("ao-modul-ao-340");
  assert.match(kern(t), /Regelungscharakter/i);
  assert.match(kern(t), /wirksam, aber rechtswidrig/i);
  assert.match(kern(t), /Nachholung.*Einspruch/i);
  assert.match(kern(t), /§ 171 Abs\. 10.*außer Betracht/i);
  assert.match(kern(t), /keine konkrete Verjährungsentscheidung|konkrete Aussagen.*nicht/i);
  assert.doesNotMatch(kern(t), /nur mit einschränkendem Wirksamkeitsvermerk/i);
});

test("§173-Änderungssperre nennt Hinterziehung und leichtfertige Steuerverkürzung", () => {
  const t = byId("ao-modul-ao-359");
  assert.match(kern(t), /Änderungssperre/i);
  assert.match(kern(t), /Steuerhinterziehung/);
  assert.match(kern(t), /leichtfertige Steuerverkürzung/);
  assert.match(kern(t), /§ 202 Abs\. 1 S\. 3 AO/);
  assert.doesNotMatch(kern(t), /nur noch geändert werden, soweit Steuerhinterziehung betroffen ist/i);
});

test("§172 schlichte Änderung ist kein Einspruch und verlangt sachliche Konkretisierung", () => {
  const t = byId("ao-modul-ao-360");
  assert.match(kern(t), /kein Einspruch.*kein förmlicher Rechtsbehelf|Schlichte Änderung ≠ Einspruch/i);
  assert.match(kern(t), /formfrei/i);
  assert.match(kern(t), /konkreten Lebenssachverhalt|sachlichen Gehalt/i);
  assert.match(kern(t), /Bezifferung.*weder.*erforderlich.*noch.*ausreichend|nicht zwingend.*exakt beziffert/i);
  assert.match(kern(t), /keine Gesamtaufrollung/i);
  assert.match(kern(t), /Aussetzung der Vollziehung.*nicht/i);
});

test("§93-Auskunftsersuchen behandelt Rechtsbehelfsbelehrung als Frist- statt Wirksamkeitsfrage", () => {
  const t = byId("ao-modul-ao-303");
  assert.match(kern(t), /grundsätzlich keine bestimmte Form|grundsätzlich formfrei/i);
  assert.match(kern(t), /auf Verlangen.*schriftlich/i);
  assert.match(kern(t), /keine Wirksamkeitsvoraussetzung/i);
  assert.match(kern(t), /Jahresfrist.*§ 356|§ 356.*Jahresfrist/i);
  assert.match(kern(t), /Drittauskunftsersuchen.*Subsidiarität|§ 93 Abs\. 1 S\. 3/i);
});

test("Bekanntgabe an Bevollmächtigte trennt Kann-Regel und Empfangsvollmacht", () => {
  const t = byId("ao-modul-ao-308");
  assert.match(kern(t), /bloße Mitwirkung.*genügt nicht/i);
  assert.match(kern(t), /§ 122 Abs\. 1 S\. 3.*möglich.*nicht zwingend/i);
  assert.match(kern(t), /Empfangsvollmacht.*§ 122 Abs\. 1 S\. 4|§ 122 Abs\. 1 S\. 4.*Empfangsvollmacht/i);
  assert.match(kern(t), /atypische Ausnahme/i);
  assert.match(kern(t), /frühere Bekanntgabe.*kein.*Muss-Tatbestand|Frühere Praxis ersetzt/i);
});

test("§2-AStG-Modul verwendet nur existente Normen und aktuelle Grenzen", () => {
  const t = byId("istr-modul-istr-istr3-07");
  assert.match(kern(t), /mindestens fünf Jahre/);
  assert.match(kern(t), /16\.500/);
  assert.match(kern(t), /62\.000/);
  assert.match(kern(t), /154\.000/);
  assert.match(kern(t), /Ablauf von zehn Jahren/);
  assert.doesNotMatch(JSON.stringify(t.normen || []), /§\s*2a\s+AStG/i);
});

test("§14-BewG-Modul verwendet 2026er Tabelle und kennzeichnet den Wechsel zu 2025", () => {
  const t = byId("erbst-modul-erbst-532");
  assert.match(kern(t), /BMF-Tabelle vom 21\.10\.2025/);
  assert.match(kern(t), /Sterbetafel 2022\/2024/);
  assert.match(kern(t), /BMF-Tabelle vom 09\.12\.2024/);
  assert.match(kern(t), /Sterbetafel 2021\/2023/);
  assert.doesNotMatch(kern(t), /zum 1\.1\.2025 geltenden geschlechtsbezogenen Faktoren/);
  const auftrag = rechtsstandAuftrag(t, new Date("2026-09-19T12:00:00Z"));
  assert.match(auftrag, /Rechtsstand 2026/);
  assert.match(auftrag, /Rechtsstand 2025/);
  assert.match(auftrag, /2022\/2024/);
  assert.match(auftrag, /2021\/2023/);
});

test("Familienheim behandelt Pflegeheim und Sechs-Monats-Frist nicht absolut", () => {
  const t = byId("erbst-modul-erbst-512");
  assert.match(kern(t), /objektiv unmöglich oder unzumutbar/);
  assert.match(kern(t), /Pflegebedürftigkeit.*selbständige Haushaltsführung/);
  assert.match(kern(t), /Sechs-Monats.*keine starre/);
  assert.doesNotMatch(kern(t), /Heimunterbringung oder Tod.*zwingenden Grund/i);
});

test("ErbSt-Schuldenabzug trennt §10 Abs.6 und 6a seit 2025", () => {
  const t = byId("erbst-modul-erbst-515");
  assert.match(kern(t), /Abs\. 6 = beschränkte Steuerpflicht/);
  assert.match(kern(t), /Abs\. 6a = Schuldenkürzung/);
  assert.match(kern(t), /beschränkter Steuerpflicht[^"]*§ 10 Abs\. 6 und 6b/);
  assert.doesNotMatch(kern(t), /vollständig steuerbefreit[^"]*\(§ 10 Abs\. 6\)/i);
});

test("§13d-ErbStG-Modul kennt begünstigte Drittstaaten und keine starre Mietdauer", () => {
  const t = byId("erbst-modul-erbst-513");
  assert.match(kern(t), /Drittstaaten[^"]*Amtshilfe|Drittstaaten[^"]*Informationsaustausch/i);
  assert.match(kern(t), /BMF[^"]*Staatenliste/);
  assert.match(kern(t), /keine starre (?:Sechs-Monats|Mindestmietdauer)/i);
  assert.match(kern(t), /entgeltliche Vermietung zu Wohnzwecken/i);
  assert.doesNotMatch(kern(t), /langfristige Wohnvermietung[^"]*> 6 Monate/i);
});

test("Erbfallkostenmodul nennt den aktuellen 15.000-Euro-Pauschbetrag", () => {
  const t = byId("erbst-modul-erbst-506");
  assert.match(kern(t), /15\.000 €.*ohne Nachweis/);
  assert.match(kern(t), /10\.300 €.*31\.12\.2024/);
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


test("§9-UStG-Karte verallgemeinert das notarielle Formerfordernis nicht", () => {
  const t = pool.find((x) => x.typ === "karteikarte" && /Option nach § 9 UStG/i.test(x.titel || ""));
  assert.ok(t, "§9-UStG-Karte fehlt im Social-Pool");
  assert.match(kern(t), /Vermietungs-\/Verpachtungsumsätzen[^"]*§ 9 Abs\. 2/);
  assert.match(kern(t), /notarielle Formerfordernis[^"]*§ 9 Abs\. 3 S\. 2/);
  assert.match(kern(t), /nicht pauschal für jede Grundstücksvermietung/);
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


test("§34-Fünftelregelung hat keine Alters- oder Einmalgrenze", () => {
  const t = byId("bilanz-modul-k3-47");
  assert.match(kern(t), /Fünftelregelung nach § 34 Abs\. 1[^"]*keine Altersgrenze/);
  assert.match(kern(t), /keine Einmal-im-Leben-Beschränkung/);
  assert.match(kern(t), /§ 34 Abs\. 3[^"]*einmal im Leben/);
  assert.doesNotMatch(kern(t), /Fünftelregelung und den ermäßigten Steuersatz[^"]*Beide setzen bei der Altersgrenze an/);
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

test("§164 Abs.4 behandelt Ablaufhemmungen nicht als geschlossene Dreierliste", () => {
  const t = byId("ao-modul-ao-347");
  assert.match(kern(t), /§ 164 Abs\. 4 S\. 2 AO/);
  assert.match(kern(t), /§ 169 Abs\. 2 S\. 2/);
  assert.match(kern(t), /§ 170 Abs\. 6/);
  assert.match(kern(t), /§ 171 Abs\. 7, 8 und 10/);
  assert.match(kern(t), /Alle übrigen.*Fristvorschriften berücksichtigen/i);
  assert.doesNotMatch(kern(t), /nur die auf S\. 10 notierten Ablaufhemmungen/);
});

test("Feststellungsbescheid trennt §182-Bindung von §181-Abs.5-Sonderfall", () => {
  const t = byId("ao-modul-ao-351");
  assert.match(t.titel, /Sonderfall § 181 Abs\. 5 AO/);
  assert.match(kern(t), /§ 182 Abs\. 1 AO/);
  assert.match(kern(t), /Feststellungsfrist bereits abgelaufen/);
  assert.match(kern(t), /§ 171 Abs\. 10 AO.*außer Betracht/);
  assert.match(kern(t), /keine allgemeine.*Wirksamkeitsformel|keine allgemeine.*Wirksamkeitsvoraussetzung/i);
  assert.doesNotMatch(kern(t), /erst nach vollständiger Wirksamkeitsformel als bindend behandeln/i);
});

test("§129 trennt Ermessen und Berichtigungsanspruch bei berechtigtem Interesse", () => {
  const t = byId("ao-modul-ao-352");
  assert.match(kern(t), /Satz 1.*Ermessen/);
  assert.match(kern(t), /berechtigtem Interesse.*Berichtigungsanspruch/);
  assert.match(kern(t), /§ 171 Abs\. 2 S\. 1 AO/);
  assert.doesNotMatch(kern(t), /§ 129 S\. 2:[^"]*zwingend/);
});

test("§173 Nr.1 macht Ermittlungsfehler nicht zum ungeschriebenen Tatbestandsmerkmal", () => {
  const t = byId("ao-modul-ao-354");
  assert.match(kern(t), /Treu und Glauben/);
  assert.match(kern(t), /Mitwirkungspflicht/);
  assert.match(kern(t), /Ermittlungspflicht/);
  assert.match(kern(t), /kein zusätzliches geschriebenes Tatbestandsmerkmal/);
  assert.doesNotMatch(kern(t), /5a\. Nr\. 1: kein Ermittlungsfehler FA/);
});

test("§177 verwendet die Legaldefinition des materiellen Fehlers", () => {
  const t = byId("ao-modul-ao-363");
  assert.match(kern(t), /keine selbständige Änderungsnorm/);
  assert.match(kern(t), /einschließlich.*§ 129 AO/);
  assert.match(kern(t), /kraft Gesetzes entstandenen Steuer/);
  assert.match(kern(t), /nicht zur Definition/);
  assert.doesNotMatch(kern(t), /Materieller Fehler § 177 Abs\. 3 AO: Fehler[^"]*nicht mehr nach einer eigenen Korrekturvorschrift/);
});

test("Wiedereinsetzung trennt Monatsfrist der AO von Zweiwochenfrist der FGO", () => {
  for (const id of ["ao-modul-ao-371", "ao-modul-ao-373"]) {
    const t = byId(id);
    assert.match(kern(t), /§ 110.*ein Monat|AO.*ein Monat/i);
    assert.match(kern(t), /§ 56 FGO.*zwei Wochen|FGO.*Zweiwochenfrist/i);
  }
  assert.match(kern(byId("ao-modul-ao-371")), /Revision oder Nichtzulassungsbeschwerde.*einen Monat/);
});

test("§378-AO-Modul verlangt objektiven Tatbestand und eigenständige Leichtfertigkeit", () => {
  const t = byId("ao-modul-ao-386");
  assert.match(kern(t), /§ 370 Abs\. 1/);
  assert.match(kern(t), /Steuerverkürzung|Steuervorteil/);
  assert.match(kern(t), /Leichtfertigkeit.*eigenständig/i);
  assert.match(kern(t), /einfache Fahrlässigkeit.*genügt nicht/i);
  assert.match(kern(t), /nicht.*automatisch/i);
  assert.match(kern(t), /§ 378 Abs\. 3/);
});

test("§371-Selbstanzeige enthält Mindestberichtigungsverbund und §398a-Abgrenzung", () => {
  const t = byId("ao-modul-ao-388");
  assert.match(kern(t), /letzten zehn Kalenderjahre/);
  assert.match(kern(t), /25\.000 € je Tat/);
  assert.match(kern(t), /§ 398a AO/);
  assert.match(kern(t), /§ 371 Abs\. 2a AO/);
});

test("§69-AO-Modul behandelt Geschäftsführerstellung nicht als Verschuldensautomatik", () => {
  const t = byId("ao-modul-ao-390");
  assert.match(kern(t), /Vorsatz oder grobe Fahrlässigkeit.*(Einzelfall|einzelfallbezogen)/i);
  assert.match(kern(t), /keine automatische Haftung allein wegen Geschäftsführerstellung/);
  assert.match(kern(t), /keine Geschäftsführer-Gefährdungshaftung/);
  assert.doesNotMatch(kern(t), /GmbH-GF[^"]*i\.d\.R\. erfüllt/i);
});

test("§71-AO-Modul macht fremden Vorteil nicht zum Tatbestandsmerkmal", () => {
  const t = byId("ao-modul-ao-392");
  assert.match(kern(t), /kein eigenständiges Tatbestandsmerkmal/);
  assert.match(kern(t), /§ 370 AO/);
  assert.match(kern(t), /§ 374 AO/);
  assert.match(kern(t), /Steuerschuldnerschaft und Haftung/);
  assert.doesNotMatch(kern(t), /Steuerhinterziehung muss zum fremden Vorteil erfolgt sein/);
});

test("§74-AO-Modul enthält Beteiligungsgrenze und gegenstandsgebundenen Haftungsumfang", () => {
  const t = byId("ao-modul-ao-393");
  assert.match(kern(t), /mehr als einem Viertel|mehr als 25 %/i);
  assert.match(kern(t), /beherrschenden Einfluss/);
  assert.match(kern(t), /durch sein Verhalten.*nicht entrichtet/i);
  assert.match(kern(t), /während des Bestehens der wesentlichen Beteiligung/);
  assert.match(kern(t), /mit den.*Gegenständen|gegenstandsgebunden/i);
  assert.match(kern(t), /wesentliche Betriebsgrundlage.*nicht erforderlich|nicht.*wesentliche Betriebsgrundlage/i);
  assert.match(kern(t), /haftet nicht pauschal persönlich|gegenstandsgebunden/i);
});

test("GuE-Bekanntgabe bildet das Ende der Übergangsregel 2025/2026 ab", () => {
  const t = byId("ao-modul-ao-375");
  assert.match(kern(t), /§ 183 Abs\. 2 S\. 1 Nr\. 2/);
  assert.match(kern(t), /Satz 2.*nicht widersprochen/);
  assert.match(kern(t), /Art\. 97 § 39 Abs\. 3 EGAO/);
  const auftrag = rechtsstandAuftrag(t, new Date("2026-09-19T12:00:00Z"));
  assert.match(auftrag, /Rechtsstand 2026/);
  assert.match(auftrag, /§ 183 AO n\. F\./);
  assert.match(auftrag, /Rechtsstand 2025/);
  assert.match(auftrag, /§ 183 AO a\. F\./);
});

test("§352-GuE-Einspruch nennt Belehrung und Übergangs-Altfälle", () => {
  const t = byId("ao-modul-ao-376");
  assert.match(kern(t), /Personenvereinigung selbst einspruchsbefugt/);
  assert.match(kern(t), /kein.*eigenes Einspruchsrecht|nicht kraft eines eigenen Einspruchsrechts/i);
  assert.match(kern(t), /§ 352 Abs\. 2 S\. 3 AO/);
  assert.match(kern(t), /Art\. 97 § 39 Abs\. 4 EGAO/);
  assert.match(kern(t), /vor dem 1\.1\.2026/);
});

test("§14c-Quiz und Karte kennen die Endverbraucher-Ausnahme", () => {
  const quiz = byId("ust-quiz-ust-5");
  assert.match(kern(quiz), /nicht steuerpflichtigen Endverbraucher/);
  assert.match(kern(quiz), /BFH V R 46\/25/);
  assert.doesNotMatch(kern(quiz), /Er schuldet auch den Mehrbetrag nach § 14c Abs\. 1 UStG, kann die Rechnung aber berichtigen/);

  const karte = byId("ust-karte-ust-14");
  assert.match(kern(karte), /nicht steuerpflichtigen Endverbraucher/);
  assert.match(kern(karte), /BFH V R 46\/25/);
  assert.doesNotMatch(kern(karte), /Abs\. 1 unrichtiger \(zu hoher\) Ausweis: Mehrbetrag wird geschuldet, Berichtigung möglich/);
});

test("§14c bildet BFH-Rechtsprechungsänderung und engen Endverbraucherbegriff ab", () => {
  const t = byId("ust-modul-ust-209");
  assert.match(kern(t), /BFH V R 46\/25/);
  assert.match(kern(t), /ausdrücklich aufgegeben/);
  assert.match(kern(t), /nur nicht steuerpflichtige Personen/);
  assert.match(kern(t), /privat.*nicht.*Endverbraucher|nicht schon deshalb.*privat/i);
  assert.match(kern(t), /geschätzt|Schätzung/);
});

test("§3 Abs.9a prüft Vorsteuer und trennt nichtwirtschaftliche Tätigkeit i.e.S.", () => {
  const t = byId("ust-modul-ust-212");
  assert.match(kern(t), /vollen oder teilweisen Vorsteuerabzug/);
  assert.match(kern(t), /nichtwirtschaftliche Tätigkeit i\. e\. S\./);
  assert.match(kern(t), /§ 15a UStG/);
  assert.match(kern(t), /vor dem 01\.01\.2027|vor 2027/);
  const auftrag2027 = rechtsstandAuftrag(t, new Date("2027-02-01T12:00:00Z"));
  assert.match(auftrag2027, /Rechtsstand 2027/);
  assert.match(auftrag2027, /Nichtbeanstandungsregel.*abgelaufen/);
  assert.match(auftrag2027, /Rechtsstand 2026/);
  assert.match(auftrag2027, /bisherige Verwaltungsauffassung/);
});

test("Vorsteuer-Zuordnung trennt private von nichtwirtschaftlicher Nutzung", () => {
  const t = byId("ust-modul-ust-224");
  assert.match(kern(t), /unternehmensfremde.*private/i);
  assert.match(kern(t), /nichtwirtschaftliche Tätigkeit im engeren Sinn|nichtwirtschaftliche Tätigkeit i\. e\. S\./);
  assert.match(kern(t), /Vorsteuerabzug grundsätzlich.*aufteilen|Vorsteueraufteilung/i);
  assert.match(kern(t), /§ 15a UStG/);
  const auftrag2027 = rechtsstandAuftrag(t, new Date("2027-02-01T12:00:00Z"));
  assert.match(auftrag2027, /Rechtsstand 2027/);
  assert.match(auftrag2027, /Rechtsstand 2026/);
});

test("§25-Reiseleistungsmodul kennt die 2026 verlängerte Drittlands-Nichtbeanstandung", () => {
  const t = byId("ust-modul-ust-232");
  assert.match(kern(t), /Sitz im Drittland/);
  assert.match(kern(t), /grundsätzlich nicht anzuwenden/);
  assert.match(kern(t), /31\.12\.2029/);
  assert.match(kern(t), /BMF.*28\.04\.2026/);
});

test("USt-Organschaft kennt 50-Prozent-Ausnahme und aktuelle Innenleistungsregel", () => {
  const t = byId("ust-modul-ust-234");
  assert.match(kern(t), /genau 50 % der Stimmrechte/);
  assert.match(kern(t), /Mehrheitsbeteiligung am Kapital/);
  assert.match(kern(t), /einzigen Geschäftsführer/);
  assert.match(kern(t), /nichtwirtschaftliche Tätigkeiten i\. e\. S\./);
  assert.doesNotMatch(kern(t), /Finanzielle Eingliederung:[^"]*mehr als 50 % der Stimmrechte/);
  const auftrag2027 = rechtsstandAuftrag(t, new Date("2027-02-01T12:00:00Z"));
  assert.match(auftrag2027, /Rechtsstand 2027/);
  assert.match(auftrag2027, /31\.12\.2026/);
  assert.match(auftrag2027, /Rechtsstand 2026/);
});

test("PV-30-kW-Regel ist nur Vereinfachung und keine Nullsteuersatz-Höchstgrenze", () => {
  const t = byId("ust-modul-ust-161");
  assert.match(kern(t), /30 kW \(peak\).*Vereinfachung|Vereinfachungsregel.*30 kW/i);
  assert.match(kern(t), /größeren Anlagen.*Nullsteuersatz.*ebenfalls greifen|oberhalb von 30 kW.*nicht automatisch ausgeschlossen/i);
  assert.match(kern(t), /§ 12 Abs\. 3 Nr\. 1 S\. 1 UStG/);
  assert.doesNotMatch(kern(t), /30-kWp-Grenze des Nullsteuersatzes/);
});

test("Vorsteuer-/§14c-Modul enthält aktuelle Endverbraucher-Ausnahme", () => {
  const t = byId("ust-modul-ust-164");
  assert.match(kern(t), /BFH V R 46\/25/);
  assert.match(kern(t), /nicht steuerpflichtigen Endverbraucher/);
  assert.match(kern(t), /nur nach § 14c geschuldeter Betrag.*keine abziehbare Vorsteuer/);
  assert.doesNotMatch(kern(t), /schuldet auch den Mehrbetrag/);
});

test("Dienstwagenmodul prüft Entgeltlichkeit und Leistungsort nach BMF 03.03.2026", () => {
  const t = byId("ust-modul-ust-225");
  assert.match(kern(t), /nicht allein wegen des Arbeitsverhältnisses automatisch entgeltlich/);
  assert.match(kern(t), /mündliche Vereinbarungen|betriebliche Übung/);
  assert.match(kern(t), /§ 3a Abs\. 3 Nr\. 2 S\. 3 UStG/);
  assert.match(kern(t), /§ 3a Abs\. 1 UStG/);
  assert.match(kern(t), /30\.06\.2026/);
  assert.doesNotMatch(kern(t), /Bei Überlassung an Arbeitnehmer aufgrund Arbeitsverhältnis entgeltliche Überlassung/);
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
