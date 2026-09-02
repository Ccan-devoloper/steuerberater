/* ==========================================================================
   Examensprioritäten: Dauerbrenner, Mittelfeld und Exoten
   --------------------------------------------------------------------------
   Grundlage sind die drei Auswertungen der Original-Musterlösungen der
   Finanzverwaltung („Exoten versus Dauerbrenner in der Steuerberaterprüfung“):

     [T1] Neunzig, DStR 2025, 1825      Tag 1: AO, USt, ErbSt/BewG   (2013–2023)
     [T2] Neunzig/Zeck, DStR 2025, 1961 Tag 2: ESt, GewSt, KSt, IStR  (2013–2024)
     [T3] Neunzig/Zeck, DStR 2025, 2097 Tag 3: Buchführung, Bilanzen  (2013–2024)
     [HW] Herzig/Watrin, DStR 1994, 1282 – Langzeit-Gegencheck 1984–1993

   Jeder Lerninhalt des Repositories (Modul, Fall, Hausaufgabe, Schema, Norm,
   Formel, Karteikarte, Quizfrage, Lernwoche) wird zur Laufzeit gegen diese
   Regeln geprüft und erhält genau eine von drei Stufen:

     hoch   🔴 Am häufigsten  – Dauerbrenner, nahezu jährlich, höchste Lernpriorität
     mittel 🟠 Mittel         – regelmäßig, aber nicht annähernd jährlich; dazu
                                 die seltenen, aber punktestarken Sonderfälle
     selten 🟢 Selten         – Exoten: 0–2 Auftritte im Untersuchungszeitraum

   Die Datei ist bewusst reines JavaScript ohne React, damit sie sowohl im
   Browser als auch von tools/pruefen-examensprioritaet.mjs (Node) geladen
   werden kann.
   ========================================================================== */

export const PRIORITAETEN = {
  hoch: {
    stufe: "hoch",
    emoji: "🔴",
    label: "Am häufigsten",
    kurz: "Dauerbrenner",
    rang: 3,
    text: "Nahezu jährlich in den Original-Musterlösungen 2013–2024. Prüfungsschema muss ohne Nachdenken abrufbar sein. Erste Lernpriorität (ca. 60 % der Lernzeit).",
  },
  mittel: {
    stufe: "mittel",
    emoji: "🟠",
    label: "Mittel",
    kurz: "Regelmäßig",
    rang: 2,
    text: "Regelmäßig, aber nicht annähernd jährlich geprüft – oder selten, dann aber mit zweistelliger Punktzahl. Zweite Lernrunde (ca. 25 %).",
  },
  selten: {
    stufe: "selten",
    emoji: "🟢",
    label: "Selten",
    kurz: "Exot",
    rang: 1,
    text: "Null- bis zweimal im Untersuchungszeitraum. Erst vertiefen, wenn die Kernblöcke sitzen (ca. 15 %). „Selten“ heißt nicht „weglassen“.",
  },
};

export const PRIORITAET_REIHENFOLGE = ["hoch", "mittel", "selten"];

export const PRIORITAET_QUELLEN = [
  { id: "T1", zitat: "Neunzig, DStR 2025, 1825", titel: "Exoten versus Dauerbrenner – Tag 1: Verfahrensrecht, USt und ErbSt/BewG", zeitraum: "2013–2023" },
  { id: "T2", zitat: "Neunzig/Zeck, DStR 2025, 1961", titel: "Exoten versus Dauerbrenner – Tag 2: Einkommen- und Ertragsteuern", zeitraum: "2013–2024" },
  { id: "T3", zitat: "Neunzig/Zeck, DStR 2025, 2097", titel: "Exoten versus Dauerbrenner – Tag 3: Buchführung und Bilanzwesen", zeitraum: "2013–2024" },
  { id: "HW", zitat: "Herzig/Watrin, DStR 1994, 1282", titel: "Analyse der Steuerberaterexamina 1984–1993 (Langzeit-Gegencheck)", zeitraum: "1984–1993" },
];

/* Fachgebiete, denen die Inhalte des Repositories zugeordnet sind. */
export const PRIORITAET_FAECHER = {
  ao: { label: "Abgabenordnung", tag: 1, quelle: "T1" },
  ust: { label: "Umsatzsteuer", tag: 1, quelle: "T1" },
  erbst: { label: "Erbschaftsteuer / Bewertung", tag: 1, quelle: "T1" },
  est: { label: "Einkommensteuer", tag: 2, quelle: "T2" },
  gewst: { label: "Gewerbesteuer", tag: 2, quelle: "T2" },
  kst: { label: "Körperschaftsteuer", tag: 2, quelle: "T2" },
  istr: { label: "Internationales Steuerrecht", tag: 2, quelle: "T2" },
  bilanz: { label: "Buchführung und Bilanzwesen", tag: 3, quelle: "T3" },
  persg: { label: "Personengesellschaften (Bilanz)", tag: 3, quelle: "T3" },
  umwstg: { label: "Umwandlungssteuerrecht", tag: 3, quelle: "T3" },
};

/* --------------------------------------------------------------------------
   Regelwerk. Jede Regel: Fach (oder "*" für alle), Stufe, Thema, Suchmuster,
   Befund (Häufigkeit / Punkte laut Quelle) und Fundstelle.
   Reihenfolge innerhalb einer Stufe ist unerheblich; es gewinnt immer die
   höchste getroffene Stufe. Spezifische Muster (z. B. § 15a UStG) müssen
   deshalb NICHT vor allgemeinen stehen – wohl aber muss ein allgemeines
   Muster so eng gefasst sein, dass es keinen Exoten fälschlich hochstuft.
   -------------------------------------------------------------------------- */
const r = (fach, stufe, thema, muster, befund, fundstelle, spezifisch = false) => ({ fach, stufe, thema, muster, befund, fundstelle, spezifisch });

const P = (s) => new RegExp(`§§?\\s*${s}(?![0-9a-z])`, "i"); // Paragraf mit Wortgrenze
const AO = (s) => new RegExp(`§§?\\s*${s}(?![0-9a-z])[^§·]*\\bAO\\b`, "i");
const UST = (s) => new RegExp(`§§?\\s*${s}(?![0-9a-z])[^§·]*\\bUStG\\b`, "i");
const EST = (s) => new RegExp(`§§?\\s*${s}(?![0-9a-z])[^§·]*\\bEStG\\b`, "i");
const KST = (s) => new RegExp(`§§?\\s*${s}(?![0-9a-z])[^§·]*\\bKStG\\b`, "i");
const GEW = (s) => new RegExp(`§§?\\s*${s}(?![0-9a-z])[^§·]*\\bGewStG\\b`, "i");
const UMW = (s) => new RegExp(`§§?\\s*${s}(?![0-9a-z])[^§·]*\\bUmwStG\\b`, "i");
const BEW = (s) => new RegExp(`§§?\\s*${s}(?![0-9a-z])[^§·]*\\bBewG\\b`, "i");
const ERB = (s) => new RegExp(`§§?\\s*${s}(?![0-9a-z])[^§·]*\\bErbStG\\b`, "i");
const AST = (s) => new RegExp(`§§?\\s*${s}(?![0-9a-z])[^§·]*\\bAStG\\b`, "i");

export const PRIORITAET_REGELN = [
  /* ===================================================== Methodik (alle Fächer) */
  r("*", "hoch", "Klausurtechnik und Lösungsaufbau",
    [/klausurtechnik/i, /klausurguide/i, /lösungsaufbau/i, /aufbauschema/i, /\bABBA\b/, /buchungskreis/i, /zeit- und punktemanagement/i, /zeitbudget/i, /gutachten/i, /prüfungsgang/i, /arbeitsmittel/i, /fahrtroute/i, /grundschema/i, /master(?:übersicht|schema|-fahrtroute)/i, /recap/i, /schlussfahrtroute/i, /fähnchenkleben/i, /vom aufgabentext/i, /^aufbau:/i, /handbuch/i, /reiter/i, /einzelsachverhalt/i, /textziffer/i, /\bpunkte\b/i, /\bminuten\b/i, /zeitrechner/i, /klausursimulation/i],
    "Methodik: in jeder Klausur benötigt – die Auswertungen betonen, dass das Prüfungsschema reflexartig laufen muss", "T1/T2/T3"),

  /* ============================================================== AO (Tag 1) */
  r("ao", "hoch", "Bekanntgabe / Wirksamkeit des Verwaltungsakts",
    [/bekanntgabe/i, /wirksamkeit/i, /nichtig/i, /zugang/i, /inhaltsadressat/i, /empfangsvollmacht/i, /verwaltungsakt/i, /\bVA\b/, AO("12[2-5]"), P("12[2-5]"), AO("119"), P("119"), AO("157"), P("157"), AO("183a?"), P("183a?"), /VwZG/],
    "Prüfungsschritt in 11/11 Klausuren, vertiefte Wirksamkeitsfrage 9/11", "T1"),
  r("ao", "hoch", "Fristen: Beginn, Dauer, Ende",
    [/frist/i, P("108"), /187, 188 BGB/, /§§ 187/],
    "Fristenberechnung in 10/11 Klausuren (Einspruchs-, Festsetzungs-, Wiedereinsetzungsfrist)", "T1", true),
  r("ao", "hoch", "Einspruch §§ 347 ff. AO",
    [/einspruch/i, /beschwer/i, /verböserung/i, /gesamtaufrollung/i, /abhilfe/i, /rechtsbehelf/i, /anfechtung/i, P("3[4-6][0-9]"), /Plan A/],
    "Einspruchsverfahren in 9/11 Klausuren, teils 5–25 Punkte", "T1", true),
  r("ao", "hoch", "Wiedereinsetzung § 110 AO",
    [/wiedereinsetzung/i, P("110"), /verschulden/i],
    "Wiedereinsetzungsfrist gehört zum 10/11-Fristenblock; Prüfungsjahre 2022/2023 ausdrücklich", "T1", true),
  r("ao", "hoch", "Korrekturvorschriften §§ 172 ff. AO",
    [/korrektur/i, /änderungsbescheid/i, /schlichte änderung/i, /neue tatsachen/i, P("17[2-5]a?"), /Plan B/],
    "Mindestens eine Korrekturvorschrift in 9/11 Klausuren; § 172 in 6/11, § 173 mehrfach intensiv", "T1", true),
  r("ao", "hoch", "Festsetzungsverjährung und Ablaufhemmung § 171 Abs. 4 AO",
    [/festsetzungsfrist/i, /festsetzungsverjährung/i, /verjährung/i, /ablaufhemmung/i, /anlaufhemmung/i, /außenprüfung/i, P("169"), P("170"), P("171"), P("196")],
    "Festsetzungsfrist im 10/11-Fristenblock; § 171 Abs. 4 AO in 5 Klausuren – wichtigste Ablaufhemmung", "T1", true),
  r("ao", "hoch", "Grundlagen-/Feststellungsbescheid und § 175 Abs. 1 Nr. 1 AO",
    [/feststellungsbescheid/i, /grundlagenbescheid/i, /folgebescheid/i, /bindungswirkung/i, P("17[59]"), P("18[0-2]")],
    "Feststellungs-/Folgebescheid-Kette gehört zum Korrekturblock (9/11); § 175 Abs. 1 Nr. 1 zweimal, Prüfungsjahr 2018", "T1", true),
  r("ao", "mittel", "Vorbehalt der Nachprüfung § 164 AO",
    [/vorbehalt der nachprüfung/i, /\bVdN\b/, P("164"), P("168")],
    "Nur in 4 Jahren, dann aber mit 4–13 Punkten", "T1", true),
  r("ao", "mittel", "Saldierung § 177 AO",
    [/saldierung/i, P("177"), /Plan C/],
    "§ 177 AO dreimal behandelt", "T1", true),
  r("ao", "mittel", "Offenbare Unrichtigkeit § 129 / § 173a AO",
    [/offenbare unrichtigkeit/i, /schreib-\/rechenfehler/i, /zahlendreher/i, P("129"), P("173a")],
    "Zählt zu den in 9/11 Klausuren geprüften Korrekturnormen, aber nicht zum jährlichen Kern", "T1", true),
  r("ao", "mittel", "Ermittlungsverfahren, Mitwirkung und Auskunft",
    [/ermittlungsverfahren/i, /untersuchungsgrundsatz/i, /auskunft/i, /vorlage/i, /beweismittel/i, /mitwirkung/i, AO("8[5-9]"), AO("9[0-9]"), AO("10[0-4]")],
    "Prüfungsjahr 2021: Prüfungsanordnung und Auskunftsersuchen; kein jährlicher Kern", "T1", true),
  r("ao", "mittel", "Sonstige Verwaltungsakte §§ 130, 131 AO",
    [/rücknahme/i, /widerruf/i, P("13[01]"), /stundung/i, /verspätungszuschlag/i],
    "Korrektur sonstiger VA nur vereinzelt (2023 Verspätungszuschlag)", "T1", true),
  r("ao", "selten", "Vorläufige Festsetzung § 165 AO", [/vorläufig/i, P("165")], "Exot: § 165 AO im Zeitraum kaum geprüft", "T1", true),
  r("ao", "selten", "Haftung §§ 69–76 AO", [/haftung/i, AO("6[9]"), AO("7[0-6]"), AO("191")], "Exot: Haftung im Untersuchungszeitraum praktisch bedeutungslos", "T1", true),
  r("ao", "selten", "Steuerstrafrecht §§ 370 ff. AO", [/steuerhinterziehung/i, /selbstanzeige/i, /leichtfertig/i, /strafrecht/i, AO("37[0-8]"), AO("398a")], "Exot: Steuerstraf-/Bußgeldrecht nur als Randaspekt (10-Jahres-Frist)", "T1", true),
  r("ao", "selten", "Vollstreckung §§ 249 ff. AO", [/vollstreckung/i, AO("2[4-9][0-9]"), AO("3[0-2][0-9]")], "Lange nahezu bedeutungslos; erst 2022 ein Fünf-Punkte-Fall", "T1", true),
  r("ao", "selten", "FGO / Klageverfahren", [/\bFGO\b/, /klage/i, /finanzgericht/i], "Exot: FGO-Verfahren nicht Schwerpunkt der Musterlösungen", "T1", true),
  r("ao", "selten", "§ 174 AO widerstreitende Festsetzung", [P("174"), /widerstreit/i], "Exot laut Auswertung", "T1", true),
  r("ao", "selten", "§ 176 AO Vertrauensschutz", [P("176"), /vertrauensschutz/i], "Exot laut Auswertung", "T1", true),
  r("ao", "selten", "§ 167 AO Steueranmeldung", [P("167")], "Exot laut Auswertung", "T1", true),

  /* ============================================================= USt (Tag 1) */
  r("ust", "hoch", "Innergemeinschaftlicher Erwerb § 1a / Ort § 3d UStG",
    [/innergemeinschaftlich(?:er|en|es)? erwerb/i, /i\.?\s?g\.? erwerb/i, /ig\. erwerb/i, /erwerbsschwelle/i, /schwellenerwerber/i, UST("1a"), UST("3d"), UST("4b"), /§ 1 Abs\. 1 Nr\. 5/, /§ 1a\b/, /§ 3d\b/],
    "11/11 Klausuren – häufigster USt-Baustein", "T1", true),
  r("ust", "hoch", "Reverse Charge § 13b UStG",
    [/reverse charge/i, /steuerschuldnerschaft des leistungsempfängers/i, /bauleistung/i, /gebäudereinigung/i, UST("13b"), /§ 13b\b/],
    "10/11 Klausuren", "T1", true),
  r("ust", "hoch", "Vorsteuerberichtigung § 15a UStG",
    [/vorsteuerberichtigung/i, /berichtigungszeitraum/i, /berichtigungsobjekt/i, /nutzungsänderung/i, /nutzungswechsel/i, UST("15a"), /§ 15a\b/, /§§? 44,? 45 UStDV/, /§ 44 UStDV/],
    "10/11 Klausuren", "T1", true),
  r("ust", "hoch", "Option zur Steuerpflicht § 9 UStG",
    [/option/i, /verzicht auf (?:die )?steuerbefreiung/i, UST("9"), /§ 9\b(?! Abs\. \d BewG)/],
    "9/11 Klausuren", "T1", true),
  r("ust", "hoch", "Reihengeschäft § 3 Abs. 6a UStG",
    [/reihengeschäft/i, /(?<!un)bewegte lieferung/i, /ruhende lieferung/i, /§ 3 Abs\. 6a/, /zwischenhändler/i],
    "8/11 Klausuren", "T1", true),
  r("ust", "hoch", "Vermietung / Grundstücksumsätze § 4 Nr. 12, § 4 Nr. 9a UStG",
    [/(?<!bagger|auto|pkw-|arbeitnehmer)vermietung/i, /vermietet/i, /grundstück/i, /gebäude/i, /wohnung/i, /immobilie/i, /§ 4 Nr\. 12/, /§ 4 Nr\. 9/],
    "§ 4 Nr. 12 in 8/11, § 4 Nr. 9a in 6/11 – zentraler Immobiliensachverhalt", "T1", true),
  r("ust", "hoch", "Lieferung, sonstige Leistung und Leistungsort",
    [/lieferort/i, /leistungsort/i, /ort der (?:lieferung|sonstigen leistung)/i, /(?<!unentgeltliche )sonstige leistung/i, /werklieferung/i, /werkleistung/i, /haupt- und nebenleistung/i, /haupt-\/nebenleistung/i, /steuerbar/i, /lieferung/i, /verfügungsmacht/i, /\bB2B\b/, /\bB2C\b/, /unternehmer/i, /unternehmen\b/i, /leistungsaustausch/i, UST("1"), UST("2"), /§ 3(?:[abe])? (?!Abs\. (?:1b|9a|12)\b)[^§·]*\bUStG\b/, /§ 3 Abs\. [1-9](?!b|a)/],
    "Grundprüfung Steuerbarkeit/Leistungsort nahezu jährlich", "T1"),
  r("ust", "hoch", "Vorsteuerabzug § 15 UStG",
    [/vorsteuer/i, /zuordnung/i, /gemischte nutzung/i, /gemischt genutzt/i, UST("15"), /§ 15\b(?!a)/],
    "Vorsteuerabzug nahezu jährlich", "T1", true),
  r("ust", "hoch", "Geschäftsveräußerung im Ganzen § 1 Abs. 1a UStG",
    [/geschäftsveräußerung/i, /\bGiG\b/, /teil-gig/i, /§ 1 Abs\. 1a/, /einbringung/i, /umstrukturierung/i, /geschäftsübertragung/i],
    "7/11 Klausuren", "T1", true),
  r("ust", "hoch", "Bemessungsgrundlage, Steuersatz, Steuerentstehung, Rechnung",
    [/bemessungsgrundlage/i, /steuersatz/i, /steuerentstehung/i, /tausch/i, /sollversteuerung/i, /anzahlung/i, /teilleistung/i, /rechnung/i, /gutschrift/i, /(?<!un)entgelt/i, UST("10"), UST("12"), UST("13a?"), UST("14a?")],
    "Bestandteile der jährlich wiederkehrenden Ausgangsumsatz-Prüfung", "T1"),
  r("ust", "mittel", "Innergemeinschaftliche Lieferung § 6a UStG / Verbringen",
    [/innergemeinschaftliche lieferung/i, /ig\. lieferung/i, /verbringen/i, /usT-IdNr/i, UST("6a"), /§ 4 Nr\. 1 Buchst\. b/, /§ 6a\b/, /EU-Geschäfte/i, /warenverkehr/i, /mitgliedstaat/i, /niederlande|italien|polen|belgien|österreich|frankreich|schweden/i],
    "Steuerbefreiung der ig. Lieferung in 5/11 Klausuren", "T1", true),
  r("ust", "mittel", "Unentgeltliche Wertabgaben § 3 Abs. 1b / 9a UStG",
    [/unentgeltliche wertabgabe/i, /unentgeltliche sonstige leistung/i, /§ 3 Abs\. (?:1b|9a)/, /private (?:pkw-)?nutzung/i, /privatnutzung/i, /schenkung/i, /geschenk/i, /verlosung/i, /entnahme/i, /mindestbemessungsgrundlage/i, /§ 10 Abs\. [45]/, /pkw-überlassung/i],
    "Wertabgaben als regelmäßiger Nebenbaustein der Vorsteuer-/Immobilienfälle, kein Jahres-Dauerbrenner", "T1", true),
  r("ust", "mittel", "§ 17 UStG Änderung der Bemessungsgrundlage",
    [/änderung der bemessungsgrundlage/i, /uneinbringlich/i, /rückgängigmachung/i, /skonto/i, /rücktritt/i, /insolvenz/i, /entgeltkorrektur/i, UST("17"), /§ 17\b/],
    "Regelmäßiger Nebenpunkt in den Ausgangsumsatz-Fällen", "T1", true),
  r("ust", "mittel", "§ 14c UStG unrichtiger / unberechtigter Steuerausweis",
    [/steuerausweis/i, UST("14c"), /§ 14c\b/],
    "Kein eigener Dauerbrenner, aber regelmäßige Fehlerquelle im Vorsteuerblock", "T1", true),
  r("ust", "mittel", "Differenzbesteuerung § 25a UStG",
    [/differenzbesteuerung/i, /margenbesteuerung/i, /gebrauchtwagen/i, /kunsthandel/i, UST("25a"), /§ 25a\b/],
    "Nur 2-mal, dann aber 5 bzw. 15 Punkte – gefährlicher Exot", "T1", true),
  r("ust", "mittel", "Kleinunternehmer § 19 UStG",
    [/kleinunternehmer/i, UST("19"), /§ 19\b/],
    "Nur 2-mal, dann aber 10 bzw. 6 Punkte – gefährlicher Exot", "T1", true),
  r("ust", "mittel", "Durchschnittssätze Land- und Forstwirtschaft § 24 UStG",
    [/durchschnittssätze/i, /land- und forstwirt/i, /pauschalierend/i, UST("24")],
    "Einmal, aber 7 Punkte", "T1", true),
  r("ust", "mittel", "Organschaft § 2 Abs. 2 Nr. 2 UStG",
    [/organschaft/i, /eingliederung/i, /§ 2 Abs\. 2 Nr\. 2/],
    "Bestandteil der Unternehmensstruktur-Fälle (GiG 7/11); keine eigene Jahresfrequenz ausgewiesen", "T1", true),
  r("ust", "mittel", "Gesellschafter und Gesellschaft / Sonderentgelt",
    [/gesellschafter/i, /sonderentgelt/i, /gewinnverteilung/i, /komplementär/i, /kommanditist/i, /\bOHG\b/, /\bKG\b/],
    "Regelmäßiger Nebenpunkt der Unternehmer-Prüfung, kein eigener Dauerbrenner", "T1", true),
  r("ust", "selten", "Dreiecksgeschäft § 25b UStG", [/dreiecksgeschäft/i, UST("25b"), /§ 25b\b/], "Exot laut Auswertung", "T1", true),
  r("ust", "selten", "Ausfuhrlieferung / Drittland / Einfuhr", [/ausfuhr/i, /einfuhr/i, /drittland/i, /\bEUSt\b/, /lohnveredelung/i, /schweiz|basel|bern|zürich|südkorea|marokko|island/i, UST("[5-8]"), UST("11"), UST("21a"), /§ 3 Abs\. 8/], "Exoten: Ausfuhrlieferung, Einfuhr und Drittlandsfälle selten geprüft", "T1", true),
  r("ust", "selten", "Reiseleistungen § 25 UStG", [/reiseleistung/i, /skireise/i, /pauschal(?:bahn)?reise/i, UST("25")], "Exot laut Auswertung", "T1", true),
  r("ust", "selten", "Personenbeförderung § 3b UStG", [/personenbeförderung/i, /beförderung/i, UST("3b")], "Exot laut Auswertung", "T1", true),
  r("ust", "selten", "Fernverkauf § 3c UStG / IOSS", [/fernverkauf/i, /\bIOSS\b/, UST("3c")], "Exot laut Auswertung", "T1", true),
  r("ust", "selten", "Ist-Versteuerung § 20 UStG", [/istversteuerung/i, /ist-versteuerung/i, UST("20")], "Exot laut Auswertung", "T1", true),
  r("ust", "selten", "USt-Verfahrensvorschriften §§ 16, 18 UStG", [/voranmeldung/i, /verfahren/i, UST("16"), UST("18a?")], "Exot laut Auswertung", "T1", true),
  r("ust", "selten", "Kommission, Gutscheine, Sicherungsübereignung, Vermittlung", [/kommission/i, /gutschein/i, /sicherungsübereignung/i, /kreditsicherung/i, /vermittlung/i, /factoring/i, /elektronische schnittstelle/i, /§ 3 Abs\. (?:3|11|13|14|15)/], "Sondertatbestände ohne Nennung in den Häufigkeitstabellen", "T1", true),
  r("ust", "selten", "Neue Fahrzeuge § 1b / § 2a UStG", [/neue fahrzeuge/i, /fahrzeuglieferer/i, UST("1b"), UST("2a")], "Exot laut Auswertung", "T1", true),

  /* ======================================================= ErbSt/BewG (Tag 1) */
  r("erbst", "hoch", "Bewertung / Übertragung von Betriebsvermögen",
    [/betriebsvermögen/i, /substanzwert/i, /vereinfachtes ertragswert/i, /anteile an kapitalgesellschaften/i, /nicht notierte anteile/i, /verschonung/i, /§§? 13[ab]/, ERB("13[ab]"), BEW("9[5-9]"), BEW("10[0-9]"), BEW("199"), BEW("20[0-3]"), /§ 11 Abs\. 2 BewG/],
    "11/11 Klausuren; gesonderte Bewertung mit 7–24 Punkten – wichtigster Befund des ersten Tages", "T1", true),
  r("erbst", "hoch", "Grundstruktur: Steuerpflicht, Erwerb, Steuerklasse, Steuerschuldner, Stichtag",
    [/steuerpflicht/i, /erwerb von todes wegen/i, /schenkung/i, /steuerklasse/i, /steuerschuldner/i, /bewertungsstichtag/i, /stichtag/i, /bereicherung/i, /steuerpflichtiger erwerb/i, /freibetrag/i, /tarif/i, /härteausgleich/i, /vorspann/i, /einleitung/i, /\bWSV\b/, /\bNNAS\b/, /nachlassverbindlichkeit/i, /schulden/i, /erbfallkosten/i, /erwerbsnebenkosten/i, /gemischte schenkung/i, /auflage/i, ERB("[1-3]"), ERB("7"), ERB("9"), ERB("1[01]"), ERB("1[5-7]"), ERB("19"), ERB("20")],
    "Persönliche/sachliche Steuerpflicht, Erwerb, Steuerklasse, Steuerschuldner und Stichtag wiederholen sich nahezu stereotyp", "T1"),
  r("erbst", "hoch", "Bewertungs-Fahrtroute § 12 ErbStG → BewG",
    [/§ 12 ErbStG/, /türöffner/i, /gesetzeszusammenspiel/i, /bewertungsfahrtroute/i, /allgemeine bewertung/i, /gemeiner wert/i, BEW("9"), BEW("1[0-9]?(?![0-9])")],
    "Der Wechsel ErbStG → BewG → ErbStG ist Bestandteil jeder Bewertungsaufgabe (11/11)", "T1", true),
  r("erbst", "mittel", "Grundvermögen / Grundbesitzwert §§ 176–198 BewG",
    [/grundvermögen/i, /grundbesitzwert/i, /grundstück/i, /bodenrichtwert/i, /vergleichswert/i, /ertragswert/i, /sachwert/i, /liegenschaftszins/i, /wohnungseigentum/i, /familienheim/i, /§ 12 Abs\. 3 ErbStG/, BEW("15[17]"), BEW("17[6-9]"), BEW("18[0-9]"), BEW("19[0-8]"), ERB("13d"), /§ 13 Abs\. 1 Nr\. 4/],
    "Grundvermögen in 6/11 Klausuren eigenständig bewertet, teilweise 7–9 Punkte", "T1", true),
  r("erbst", "mittel", "Übriges Vermögen: Forderungen, Kapitalvermögen, Hausrat, Versicherung",
    [/übriges vermögen/i, /hausrat/i, /bewegliche/i, /kapitalforderung/i, /forderung/i, /darlehen/i, /wertpapier/i, /bankguthaben/i, /versicherung/i, /pkw/i, /fiat/i, /ferrari/i, /§ 13 Abs\. 1 Nr\. 1/, BEW("1[12]")],
    "„Übriges Vermögen“ in 8/11 Jahrgängen, typischerweise kleiner bepunktet", "T1", true),
  r("erbst", "mittel", "Nutzungen und Leistungen §§ 13–16 BewG",
    [/nutzungen/i, /nießbrauch/i, /wohnrecht/i, /rente/i, /vervielfältiger/i, /jahreswert/i, /lebenslänglich/i, /grabpflege/i, BEW("1[3-6]")],
    "Regelmäßiger Bewertungsbaustein bei Renten/Nießbrauch, kein 11/11-Kern", "T1", true),
  r("erbst", "mittel", "Bedingungen und Befristungen §§ 4–8 BewG", [/bedingung/i, /befristung/i, BEW("[4-8]")], "Nebenpunkt der Bewertung ohne eigene Frequenzangabe", "T1", true),
  r("erbst", "mittel", "Frühere Erwerbe § 14 ErbStG", [/vorerwerb/i, /frühere erwerbe/i, ERB("14")], "§ 14 ErbStG selten geprüft", "T1", true),
  r("erbst", "selten", "Vor-/Nacherbschaft", [/vorerb/i, /nacherb/i, ERB("6")], "Kam im Untersuchungszeitraum gar nicht vor", "T1", true),
  r("erbst", "selten", "Zugewinngemeinschaft § 5 ErbStG", [/zugewinn/i, ERB("5")], "Kam im Untersuchungszeitraum gar nicht vor", "T1", true),
  r("erbst", "selten", "Zweckzuwendung / mehrfacher Erwerb / Stundung", [/zweckzuwendung/i, /mehrfacher erwerb/i, /stundung/i, /verschonungsbedarf/i, ERB("8"), ERB("27"), ERB("28a?")], "Kam im Untersuchungszeitraum gar nicht vor", "T1", true),
  r("erbst", "selten", "Anzeige-/Erklärungspflichten §§ 30 ff. ErbStG", [/anzeigepflicht/i, /erklärungspflicht/i, ERB("3[0-3]")], "Kam im Untersuchungszeitraum gar nicht vor", "T1", true),
  r("erbst", "selten", "Ausländische ErbSt § 21 / Tarifbegrenzung § 19a", [/ausländische erbschaftsteuer/i, ERB("21"), ERB("19a")], "Selten laut Auswertung", "T1", true),
  r("erbst", "selten", "Stille Beteiligung / partiarisches Darlehen", [/stille beteiligung/i, /partiarisch/i], "Sonderfall ohne Nennung in den Häufigkeitstabellen", "T1", true),

  /* ============================================================= ESt (Tag 2) */
  r("est", "hoch", "Kapitalvermögen § 20 EStG und § 32d EStG",
    [/kapitalvermögen/i, /kapitalertr/i, /dividende/i, /sparer-pauschbetrag/i, /abgeltung/i, /teileinkünfte/i, EST("20"), EST("32d"), EST("43a?"), /§ 3 Nr\. 40/, /§ 3c Abs\. 2/],
    "§ 20 EStG in 12/12, Dividenden 10/12, Sparer-Pauschbetrag 9/12, § 32d 9/12", "T2", true),
  r("est", "hoch", "Anteilsveräußerung § 17 EStG",
    [/anteilsveräußerung/i, /§ 17 EStG/, EST("17")],
    "11/12 Klausuren", "T2", true),
  r("est", "hoch", "Betriebsveräußerung / Betriebsaufgabe § 16 EStG",
    [/betriebsveräußerung/i, /betriebsaufgabe/i, /veräußerungsgewinn/i, /aufgabegewinn/i, EST("16"), EST("34")],
    "Betriebsveräußerung 7/12, Betriebsaufgabe 5/12", "T2", true),
  r("est", "mittel", "Betriebsaufspaltung", [/betriebsaufspaltung/i], "5/12, dafür 6–9 Punkte", "T2", true),
  r("est", "mittel", "§ 15a EStG", [EST("15a"), /verrechenbarer verlust/i], "5/12, 3–9 Punkte", "T2", true),
  r("est", "mittel", "Pkw / 1-%-Methode", [/1-%-methode/i, /1 %-regelung/i, /pkw/i, /kfz/i, /elektro/i, /fahrten wohnung/i, /§ 6 Abs\. 1 Nr\. 4/], "5/12", "T2", true),
  r("est", "mittel", "Private Veräußerungsgeschäfte § 23 EStG", [/private veräußerungsgeschäfte/i, EST("23")], "6/12, aber meist nur etwa zwei Punkte", "T2", true),
  r("est", "mittel", "Lohnsteuerkomplex", [/lohnsteuer/i, /arbeitslohn/i, /§ 19 EStG/, EST("19"), EST("4[01]a?"), /§ 8 Abs\. 2 EStG/], "Nur einmal, dann aber 13 Punkte – gefährlicher Exot", "T2", true),
  r("est", "selten", "§ 6a Pensionsrückstellung", [/pensionsrückstellung/i, /pensionszusage/i, EST("6a")], "Einmal", "T2", true),
  r("est", "selten", "§ 6 Abs. 3 EStG unentgeltliche Übertragung", [/§ 6 Abs\. 3 EStG/], "Noch nie am zweiten Tag", "T2", true),
  r("est", "selten", "Übergangsgewinn / Gewinnermittlungswechsel", [/übergangsgewinn/i, /wechsel der gewinnermittlung/i, /§ 4 Abs\. 3/], "Zweimal", "T2", true),
  r("est", "selten", "§ 34a Thesaurierungsbegünstigung / § 35 GewSt-Anrechnung", [EST("34a"), EST("35")], "Noch nie am zweiten Tag", "T2", true),
  r("est", "selten", "Ehegattensplitting / Veranlagungsarten", [/splitting/i, /zusammenveranlagung/i, EST("26[ab]?"), EST("32a")], "Noch nie am zweiten Tag", "T2", true),
  r("est", "selten", "Land- und Forstwirtschaft", [/land- und forstwirtschaft/i, EST("13a?")], "Noch nie am zweiten Tag", "T2", true),
  r("est", "selten", "Betriebsverpachtung im Ganzen", [/betriebsverpachtung/i], "Noch nie am zweiten Tag", "T2", true),
  r("est", "selten", "Zins-/Lizenzschranke", [/zinsschranke/i, /lizenzschranke/i, EST("4[hj]")], "Noch nie am zweiten Tag", "T2", true),
  r("est", "selten", "InvStG", [/InvStG/], "Einmal", "T2", true),

  /* =========================================================== GewSt (Tag 2) */
  r("gewst", "hoch", "Hinzurechnungen § 8 und Kürzungen § 9 GewStG",
    [/hinzurechnung/i, /kürzung/i, /schachteldividende/i, /grundbesitzkürzung/i, /gewerbeertrag/i, /miet-\/pachtzins/i, /dauerschuld/i, GEW("[7-9]")],
    "In 12/12 Klausuren mindestens eine Hinzurechnung/Kürzung; § 8 Nr. 1d 9/12, § 9 Nr. 2a 7/12, § 9 Nr. 1 S. 1 6/12", "T2", true),
  r("gewst", "hoch", "Steuermessbetrag und Freibetrag § 11 GewStG",
    [/steuermessbetrag/i, /messbetrag/i, /messzahl/i, /freibetrag/i, /gewerbesteuerrückstellung/i, GEW("1[1-6]")],
    "§ 11 GewStG in 9/12 Klausuren, Freibetrag 7/12", "T2", true),
  r("gewst", "mittel", "Verlustabzug § 10a GewStG", [/verlustabzug/i, GEW("10a")], "5/12, häufig 3–9 Punkte", "T2", true),
  r("gewst", "mittel", "Gewerbesteuerliche Organschaft", [/organschaft/i, GEW("2 Abs\\. 2")], "Einmal", "T2", true),
  r("gewst", "selten", "Zerlegung §§ 28–31 GewStG", [/zerlegung/i, GEW("2[89]"), GEW("3[01]")], "In 12 Jahren kein einziges Mal", "T2", true),
  r("gewst", "selten", "Befreiungen § 3 GewStG", [/steuerbefreiung/i, GEW("3")], "Nicht vertreten", "T2", true),

  /* ============================================================= KSt (Tag 2) */
  r("kst", "hoch", "§ 8b KStG Beteiligungserträge und Veräußerungsgewinne",
    [/§ 8b/, /beteiligungsertr/i, /streubesitz/i, /veräußerungsgewinn/i, /teilwertabschreibung/i, /dividende/i, /beteiligung/i, KST("8b")],
    "12/12 Klausuren", "T2", true),
  r("kst", "hoch", "Verdeckte Gewinnausschüttung § 8 Abs. 3 S. 2 KStG",
    [/verdeckte gewinnausschüttung/i, /\bvGA\b/, /§ 8 Abs\. 3 S\. 2/, /R 8\.5/, /H 8\.[56]/, /nahestehende/i, /beherrschend/i, /gesellschafter-geschäftsführer/i, /geschäftsführer/i, /fremdüblich/i, /darlehen/i, /pensionszusage/i, /R 8\.7/, /H 8\.7/, /kfz-nutzung/i, /pkw/i, /gehalt/i, /überstunden/i, /vorzugspreis/i, /überhöht/i, /gewinnverzicht/i],
    "11/12 Klausuren – nahezu jährlich", "T2", true),
  r("kst", "hoch", "Einkommensermittlung § 8 KStG / außerbilanzielle Korrekturen",
    [/einkommensermittlung/i, /zu versteuernde/i, /\bzvE\b/, /steuerbilanzgewinn/i, /jahresüberschuss/i, /R 7\.1/, /nichtabziehbar/i, /spenden/i, /steuerpflicht/i, /gründung/i, /vorgesellschaft/i, /\bADB\b/, KST("1"), KST("[78]"), KST("10"), KST("2[34]")],
    "Einkommensermittlung praktisch jährlich; Gründung/Steuerpflicht als Einstieg jedes KSt-Falls", "T2"),
  r("kst", "hoch", "Steuerliches Einlagekonto § 27 KStG",
    [/einlagekonto/i, /ausschüttbarer gewinn/i, /einlagenrückgewähr/i, /ausschüttung/i, /leistung über dem/i, KST("27"), /H 27/],
    "9/12 Klausuren", "T2", true),
  r("kst", "hoch", "Verdeckte Einlage § 8 Abs. 3 S. 3 KStG",
    [/verdeckte einlage/i, /\bvE\b/, /§ 8 Abs\. 3 S\. 3/, /R 8\.9/, /H 8\.9/, /einlage/i, /geschenkt/i, /unentgeltliche geschäftsführung/i, /eigene anteile/i],
    "7/12 Klausuren", "T2", true),
  r("kst", "mittel", "Organschaft §§ 14–17 KStG",
    [/organschaft/i, /organgesellschaft/i, /organträger/i, /organkreis/i, /gewinnabführung/i, /\bGAV\b/, /eingliederung/i, /mehrabführung/i, /minderabführung/i, /mehr-\/minderabführung/i, /ausgleichszahlung/i, /bruttomethode/i, /organkreis/i, /R 14/, KST("1[4-7]")],
    "Nur 3-mal, aber mit 11, 13 und 4 Punkten – nicht als Exot behandeln", "T2", true),
  r("kst", "mittel", "§ 8c KStG schädlicher Beteiligungserwerb",
    [/§ 8c/, /schädlicher beteiligungserwerb/i, /verlustuntergang/i, /beteiligungserwerb/i, KST("8c")],
    "Nur einmal, dafür elf Punkte – gefährlicher Exot", "T2", true),
  r("kst", "mittel", "Stille Beteiligung / § 15a EStG bei der KapG",
    [/stille beteiligung/i, /atypisch still/i, /typisch still/i, EST("15a"), /§ 20 Abs\. 1 Nr\. 4/],
    "Nebenpunkt zu § 20 EStG (12/12) und § 15a EStG (5/12 am ESt-Tag)", "T2", true),
  r("kst", "selten", "§ 8d KStG fortführungsgebundener Verlustvortrag", [/§ 8d/, /fortführungsgebunden/i, KST("8d")], "Gar nicht geprüft", "T2", true),
  r("kst", "selten", "Optionsmodell § 1a KStG", [/§ 1a KStG/, /option zur körperschaft/i, /optionsmodell/i, KST("1a")], "Gar nicht geprüft", "T2", true),
  r("kst", "selten", "Zinsschranke § 8a KStG", [/zinsschranke/i, KST("8a")], "Gar nicht geprüft", "T2", true),
  r("kst", "selten", "Liquidation § 11 KStG", [/liquidation/i, /abwicklung/i, KST("11")], "Gar nicht geprüft", "T2", true),
  r("kst", "selten", "Vereinsbesteuerung / Gemeinnützigkeit", [/verein/i, /gemeinnützig/i, /zweckbetrieb/i, /wirtschaftlicher geschäftsbetrieb/i, /§ 5 Abs\. 1 Nr\. 9/, /§§ 51/, /§§ 64/, KST("5"), KST("24")], "Keine Nennung in den Häufigkeitstabellen des KSt-Teils", "T2", true),

  /* ============================================================ IStR (Tag 2) */
  r("istr", "hoch", "Beschränkte Steuerpflicht § 1 Abs. 4, § 49, § 50 EStG",
    [/beschränkte steuerpflicht/i, /beschränkt steuerpflichtig/i, /inländische einkünfte/i, /\bEIS\b/, /§ 1 Abs\. 4/, EST("49"), EST("50a?"), /§ 50a?\b/, /steuerabzug/i, /aufsichtsrat/i, /künstler/i, /popstar/i, /§ 2 Nr\. 1 KStG/],
    "Internationales Steuerrecht in 11/12 Ertragsteuerklausuren; Ø ca. 13,75 Punkte, Spitze 40", "T2", true),
  r("istr", "hoch", "DBA: Anwendbarkeit, Ansässigkeit, Betriebsstätte, Verteilung, Methode",
    [/\bDBA\b/, /\bAAVV\b/, /ansässig/i, /betriebsstätte/i, /verteilungs/i, /methodenartikel/i, /freistellung/i, /anrechnung/i, /progressionsvorbehalt/i, /doppelbesteuerung/i, /Art\. \d+/, EST("32b"), EST("34c")],
    "DBA-Kette (Art. 4 → Art. 5 → Verteilung → Methode → § 32b) in nahezu jeder IStR-Teilaufgabe", "T2", true),
  r("istr", "hoch", "Unbeschränkte Steuerpflicht, Welteinkommen, § 1 Abs. 3 / § 1a EStG",
    [/unbeschränkte steuerpflicht/i, /welteinkommen/i, /wohnsitz/i, /gewöhnlicher aufenthalt/i, /steuerzugriff/i, /§ 1 Abs\. [13]/, EST("1a"), /familie/i, /unterhalt/i, /§ 8 AO/, /§ 9 AO/],
    "Eingangsprüfung jeder IStR-Aufgabe (11/12)", "T2", true),
  r("istr", "hoch", "Wegzugsbesteuerung § 6 AStG",
    [/wegzug/i, AST("6")],
    "Schwerpunkt der AStG-Fälle laut Auswertung; verbunden mit § 17 EStG (11/12)", "T2", true),
  r("istr", "hoch", "Kapitalerträge, Kapitalertragsteuer und § 50c / § 43b EStG bei Auslandsbezug",
    [/kapitalertragsteuer/i, /dividende/i, /§ 50[cdg]/, EST("43[ab]?"), EST("44a?"), /§ 32 KStG/, /Art\. 10/],
    "Verbindung von § 20 EStG (12/12) und § 8b KStG (12/12) mit dem Auslandsbezug", "T2", true),
  r("istr", "mittel", "Hinzurechnungsbesteuerung §§ 7 ff. AStG",
    [/hinzurechnungsbesteuerung/i, /hinzurechnungsbetrag/i, /zwischengesellschaft/i, /aktivkatalog/i, /motivtest/i, /niedrige besteuerung/i, /kürzungsbetrag/i, AST("[7-9]"), AST("1[0-3]")],
    "AStG-Schwerpunkt Wegzug; Hinzurechnungsbesteuerung nur gelegentlich", "T2", true),
  r("istr", "mittel", "Negative Drittstaateneinkünfte § 2a EStG", [EST("2a"), /drittstaat/i], "Nebenpunkt der Auslandseinkünfte, keine eigene Frequenzangabe", "T2", true),
  r("istr", "mittel", "Erweiterte beschränkte Steuerpflicht § 2 AStG", [AST("2"), /erweiterte beschränkte/i, /niedrigsteuer/i], "Gelegentlich neben § 6 AStG", "T2", true),
  r("istr", "mittel", "Verrechnungspreise § 1 AStG", [/verrechnungspreis/i, AST("1")], "Gelegentlich in Verbindung mit vGA", "T2", true),
  r("istr", "selten", "Entstrickung § 4 Abs. 1 S. 3, § 4g EStG, § 12 KStG", [/entstrickung/i, /§ 4g/, /§ 12 Abs\. 1 KStG/, /§ 4 Abs\. 1 S\. 3/], "Keine Nennung in den Häufigkeitstabellen", "T2", true),
  r("istr", "selten", "InvStG / Investmentfonds", [/InvStG/, /investment/i], "Einmal", "T2", true),

  /* =================================================== Bilanzwesen (Tag 3) */
  r("bilanz", "hoch", "Grundstücke und Gebäude",
    [/grundstück/i, /gebäude/i, /grund und boden/i, /abbruch/i, /dachgeschoss/i, /betriebsvorrichtung/i, /anschaffungsnah/i, /ehegatten/i, /bau(?:maßnahme|antrag)/i, /§ 7 Abs\. 4/, /§ 6 Abs\. 1 Nr\. 1a/],
    "11/12 Klausuren", "T3", true),
  r("bilanz", "hoch", "§ 6b-Rücklage",
    [/§ 6b/, /reinvestitionsrücklage/i, /stille reserven/i, /ersatzbeschaffung/i, /R 6\.6/, EST("6b")],
    "11/12 Klausuren (§ 6b), Ersatzbeschaffung als Nachbarinstrument", "T3", true),
  r("bilanz", "hoch", "§ 9b EStG / Vorsteuer in AK/HK",
    [/§ 9b/, /vorsteuer/i, /umsatzsteuer/i, /anschaffungskosten/i, /herstellungskosten/i, /\bAK\/HK\b/, /\bAK\b/, /\bHK\b/, /§ 255/, /gemeinkosten/i, /skonto/i, /eigentumsvorbehalt/i],
    "§ 9b in 11/12 Klausuren; AK/HK-Aufbau ist Kernmaterie jedes Aktivpostens", "T3", true),
  r("bilanz", "hoch", "Rückstellungen",
    [/(?<!pensions|gewerbesteuer)rückstellung/i, /drohverlust/i, /§ 249/, /§ 5 Abs\. 4/, /§ 6 Abs\. 1 Nr\. 3a/, /ansammlung/i, /aufbewahrung/i, /jubiläum/i, /schadensersatz/i, /patentrecht/i, /unterlassene instandhaltung/i],
    "10/12 Klausuren", "T3", true),
  r("bilanz", "hoch", "AfA / Gebäude-AfA / Sonder-AfA",
    [/\bAfA\b/, /abschreibung/i, /absetzung für abnutzung/i, /degressiv/i, /§ 7g/, /investitionsabzugsbetrag/i, EST("7g?")],
    "AfA nahezu jährlich", "T3", true),
  r("bilanz", "hoch", "Maßgeblichkeit, Ansatz, Zurechnung, Bewertung (Grundschema HB → StB)",
    [/maßgeblichkeit/i, /bilanzierungspflicht/i, /wirtschaftlich\w* eigentum/i, /vorjahresfehler/i, /bilanzenzusammenhang/i, /zurechnung/i, /§ 39/, /vermögensgegenstand/i, /wirtschaftsgut/i, /teilwert/i, /niederstwert/i, /wertaufholung/i, /zuschreibung/i, /bewertungsvorbehalt/i, /wertaufhellung/i, /handelsbilanz/i, /steuerbilanz/i, /\bHB\b/, /\bStB\b/, /mehr-\/weniger-rechnung/i, /überleitung/i, /kapitalanpassung/i, /bilanzberichtigung/i, /einlage/i, /entnahme/i, /§ 6 Abs\. 1 Nr\. [1245]/, /§ 4 Abs\. [12]/, /§ 5 Abs\. [126]/],
    "Bearbeitungsschema Handelsbilanz → Steuerbilanz → Ansatz → Bewertung → Differenz → Buchung läuft in jeder Klausur", "T3"),
  r("bilanz", "hoch", "Verdeckte Gewinnausschüttung / verdeckte Einlage / nachträgliche AK",
    [/verdeckte gewinnausschüttung/i, /\bvGA\b/, /verdeckte einlage/i, /\bvE\b/, /nachträgliche anschaffungskosten/i, /§ 8 Abs\. 3/],
    "vGA/vE in 10/12 Bilanzklausuren, bis zu zehn Punkte; nachträgliche AK bei vE seit 2019 fast jährlich", "T3", true),
  r("bilanz", "hoch", "Steuerliches Einlagekonto § 27 KStG / Ausschüttung",
    [/einlagekonto/i, /§ 27 KStG/, /ausschüttung/i, /verwendungsreihenfolge/i],
    "6/12 insgesamt, seit 2021 aber in jedem Jahr", "T3", true),
  r("bilanz", "hoch", "Verbindlichkeiten, Forderungen, Disagio, Darlehen",
    [/verbindlichkeit/i, /forderung/i, /disagio/i, /darlehen/i, /\bEWB\b/, /\bPWB\b/, /pauschalwert/i, /einzelwert/i, /fremdwährung/i, /zinsstaffel/i, /erfüllungsbetrag/i, /§ 253/, /§ 6 Abs\. 1 Nr\. 3\b/, /anzahlung/i, /ratenkauf/i, /kaufpreisstundung/i, /rente/i],
    "Passivseite und Forderungsbewertung gehören zum Kernstoff jeder Einzelunternehmer-Aufgabe (Teil I ~38 Punkte)", "T3", true),
  r("bilanz", "hoch", "Vorräte, Bewertungsvereinfachung, Gewinnrealisierung",
    [/vorr(?:ä|a)te/i, /verbrauchsfolge/i, /\bFIFO\b/i, /\bLIFO\b/i, /durchschnittsbewertung/i, /gewinnrealisierung/i, /umsatzrealisierung/i, /schwebende geschäfte/i, /schwebendes geschäft/i, /§ 256/, /§ 240/, /halbfertig/i, /unfertig/i, /fertige und unfertige/i],
    "Gewinnrealisierung und Bewertung des Umlaufvermögens als regelmäßiger Bestandteil des Einzelunternehmer-Teils", "T3"),
  r("bilanz", "hoch", "§ 8b KStG in der Bilanzklausur / Beteiligungen",
    [/§ 8b/, /beteiligung/i, /aktien/i, /dividende/i, /teileinkünfte/i, /§ 3 Nr\. 40/, /kapitalertragsteuer/i, /wertpapier/i, /gratisaktien/i, /abgeltung/i],
    "§ 8b an Tag 3 nur 4/12, an Tag 2 aber 12/12 – absolute Pflichtmaterie", "T3", true),
  r("bilanz", "mittel", "Rechnungsabgrenzungsposten",
    [/rechnungsabgrenzung/i, /\bRAP\b/, /\bARAP\b/, /\bPRAP\b/, /abgrenzung/i, /§ 250/, /§ 5 Abs\. 5/],
    "7/12 Klausuren", "T3", true),
  r("bilanz", "mittel", "Beteiligungen an Personengesellschaften / Spiegelbildmethode",
    [/spiegelbild/i, /beteiligung an (?:einer |der )?personengesellschaft/i],
    "Nur 4/12, aber durchschnittlich rund neun Punkte", "T3", true),
  r("bilanz", "mittel", "Mietereinbauten",
    [/mietereinbau/i, /einbauten des mieters/i, /scheinbestandteil/i, /förderband/i, /lüftungsanlage/i, /entschädigungsanspruch/i],
    "Zweimal, dann aber 9 bzw. 13 Punkte – gefährlicher Exot", "T3", true),
  r("bilanz", "mittel", "Leasing / Mietkauf",
    [/leasing/i, /mietkauf/i, /vollamortisation/i, /kaufoption/i, /grundmietzeit/i, /40\/90/, /BMF vom 19\.4\.1971/, /BMF v\. 19\.4\.1971/, /mietverhältnis/i],
    "Leasing nur einmal mit neun Punkten; Mietkauf nie geprüft", "T3", true),
  r("bilanz", "mittel", "GWG und Sammelposten", [/geringwertig/i, /\bGWG\b/, /sammelposten/i, /§ 6 Abs\. 2/], "Zweimal", "T3", true),
  r("bilanz", "mittel", "Zuschüsse", [/zuschuss/i, /zuschüsse/i, /R 6\.5/], "Einmal", "T3", true),
  r("bilanz", "mittel", "Pensionsrückstellung § 6a EStG", [/pensionsrückstellung/i, /pensionsverpflichtung/i, /pension/i, EST("6a")], "§ 6a am ESt-Tag einmal; als Rückstellungsunterfall Teil des 10/12-Blocks", "T2/T3", true),
  r("bilanz", "mittel", "Immaterielle Wirtschaftsgüter, Firmenwert, Forschung und Entwicklung", [/immateriell/i, /firmenwert/i, /geschäfts- oder firmenwert/i, /patent/i, /forschung/i, /entwicklung/i, /§ 248/, /§ 5 Abs\. 2/], "Regelmäßiger Ansatzfall, ohne eigene Nennung in den Häufigkeitstabellen", "T3", true),
  r("bilanz", "mittel", "Gewerbesteuerrückstellung", [/gewerbesteuer/i, /§ 4 Abs\. 5b/, /GewStG/], "Rückstellungsunterfall (10/12) mit Bezug zu § 11 GewStG (9/12 am ESt-Tag)", "T2/T3", true),
  r("bilanz", "mittel", "Eigenkapital der Kapitalgesellschaft, eigene Anteile", [/eigenkapital/i, /eigene anteile/i, /§ 272/, /§ 266/, /GmbHG/, /AktG/], "Teil III Kapitalgesellschaft (~29 Punkte) baut regelmäßig auf der EK-Gliederung auf", "T3", true),
  r("bilanz", "mittel", "Latente Steuern § 274 HGB", [/latente steuern/i, /latenz/i, /§ 274/], "Handelsrechtlicher Nebenpunkt in Kapitalgesellschaftsteilen; keine eigene Frequenzangabe", "T3", true),
  r("bilanz", "mittel", "Tausch und Inzahlungnahme", [/tausch/i, /inzahlung/i, /§ 6 Abs\. 6/], "Regelmäßiger AK-Sonderfall ohne eigene Frequenzangabe", "T3", true),
  r("bilanz", "selten", "Bilanzänderung", [/bilanzänderung/i, /§ 4 Abs\. 2 S\. 2/], "Nie geprüft (Bilanzberichtigung dagegen Kernstoff)", "T3", true),
  r("bilanz", "selten", "Kommissionsgeschäfte", [/kommission/i], "Nie geprüft", "T3", true),
  r("bilanz", "selten", "Poolabschreibung / Zins-/Lizenzschranke", [/poolabschreibung/i, /zinsschranke/i, /lizenzschranke/i], "Nie geprüft", "T3", true),
  r("bilanz", "selten", "Schuldzinsenabzug § 4 Abs. 4a EStG", [/schuldzinsen/i, /überentnahme/i, /§ 4 Abs\. 4a/], "Keine Nennung in den Häufigkeitstabellen", "T3", true),
  r("bilanz", "selten", "Übernommene Verpflichtungen § 4f / § 5 Abs. 7 EStG", [/§ 4f/, /§ 5 Abs\. 7/, /schuldbeitritt/i, /übernommene verpflichtung/i], "Keine Nennung in den Häufigkeitstabellen", "T3", true),
  r("bilanz", "selten", "Bewertungseinheiten § 254 HGB", [/bewertungseinheit/i, /§ 254/], "Keine Nennung in den Häufigkeitstabellen", "T3", true),
  r("bilanz", "selten", "Elektro-Pkw / private Nutzung / Fahrten Wohnung–Betrieb", [/elektro/i, /pkw/i, /privatnutzung/i, /private nutzung/i, /fahrten wohnung/i, /1-%-/i], "Pkw/1-%-Methode 5/12 am ESt-Tag; in den Bilanz-Häufigkeitstabellen nicht ausgewiesen", "T2/T3", true),

  /* ================================================ Personengesellschaften */
  r("persg", "hoch", "§ 24 UmwStG Einbringung in eine Personengesellschaft",
    [/§ 24/, /einbringung/i, /bruttomethode/i, /nettomethode/i, /sonstige gegenleistung/i, UMW("24")],
    "UmwStG in 8/12 Jahren; § 24 einmal 10, einmal 23 und 2020 ein kompletter 39-Punkte-Teil", "T3", true),
  r("persg", "hoch", "Sonderbetriebsvermögen und Sonderbilanz",
    [/sonderbetriebsvermögen/i, /\bSBV\b/, /sonderbilanz/i, /sondervergütung/i, /sonderbetriebseinnahme/i, /vergütungen an gesellschafter/i, /gesellschaftervergütung/i, /vorweggewinn/i, /R 4\.2 Abs\. 2/, /bilanzierungskonkurrenz/i, /korrespondierende bilanzierung/i],
    "9/12 Klausuren, 2–14 Punkte", "T3", true),
  r("persg", "hoch", "Ergänzungsbilanz",
    [/ergänzungsbilanz/i, /gesellschafterwechsel/i, /eintritt/i, /aufnahme eines gesellschafters/i],
    "8/12 Klausuren, 2–15 Punkte", "T3", true),
  r("persg", "hoch", "Mitunternehmerschaft, Gesamthandsbilanz, zweistufige Gewinnermittlung",
    [/mitunternehmer(?!anteil)/i, /gesamthand/i, /gewinnermittlung/i, /gewinnverteilung/i, /kapitalkonto/i, /kapitalkonten/i, /konten-modell/i, /gesamtbilanz/i, /personengesellschaft/i, /abfärbung/i, /prägung/i, /§ 15 Abs\. 1 S\. 1 Nr\. 2/, /§ 15 Abs\. 3/, /\bOHG\b/, /\bKG\b/],
    "Grundgerüst des Personengesellschaftsteils (~33 Punkte in jeder Klausur)", "T3", true),
  r("persg", "mittel", "§ 6 Abs. 5 EStG Überführung / Übertragung",
    [/§ 6 Abs\. 5/, /überführung/i, /übertragung/i, /trennungstheorie/i, /sperrfrist/i, /statusverbesserung/i, /schuldübernahme/i, /einzelwirtschaftsgut/i, /einzel-wg/i],
    "5/12 Klausuren", "T3", true),
  r("persg", "mittel", "§ 15a EStG Verlustausgleichsbeschränkung", [/§ 15a/, /verrechenbar/i, EST("15a")], "5/12 am ESt-Tag, 3–9 Punkte", "T2", true),
  r("persg", "mittel", "Ausscheiden, Abfindung, Realteilung",
    [/ausscheiden/i, /austritt/i, /abfindung/i, /realteilung/i, /sachwertabfindung/i, /spitzenausgleich/i, /§ 16 Abs\. [34]/, /betriebsveräußerung/i, /betriebsaufgabe/i, /aufgabegewinn/i, /veräußerungsgewinn eines mitunternehmeranteils/i, /wesentliche betriebsgrundlage/i, /§ 16 EStG/, /§ 34 EStG/],
    "Nur 3/12, aber mit 11, 18 und 23 Punkten – gefährlicher Exot", "T3", true),
  r("persg", "mittel", "Mitunternehmerische Betriebsaufspaltung", [/betriebsaufspaltung/i, /\bMU-BAS\b/], "Betriebsaufspaltung 5/12 am ESt-Tag, 6–9 Punkte", "T2", true),
  r("persg", "mittel", "Spiegelbildmethode / Beteiligung an PersG", [/spiegelbild/i, /beteiligungsansatz/i, /transparenzprinzip/i], "4/12, aber durchschnittlich rund neun Punkte", "T3", true),
  r("persg", "mittel", "§ 6b EStG bei Personengesellschaften", [/§ 6b/, /stille reserven/i], "§ 6b insgesamt 11/12 – bei PersG als Übertragungsfall", "T3", true),
  r("persg", "mittel", "Einlage aus dem Privatvermögen (§ 6 Abs. 1 Nr. 5, § 23 EStG)", [/privatvermögen/i, /§ 6 Abs\. 1 Nr\. 5/, /§ 23/, /§ 4 Abs\. 1 S\. 8/], "§ 23 EStG 6/12 am ESt-Tag mit geringer Punktzahl; Einlagebewertung Standardbaustein", "T2/T3", true),
  r("persg", "selten", "Doppelstöckige Personengesellschaft / Zebragesellschaft", [/doppelstöck/i, /doppelstock/i, /zebragesellschaft/i, /zebra/i, /durchstockung/i], "Keine Nennung in den Häufigkeitstabellen", "T3", true),
  r("persg", "selten", "Umsatzsteuerlicher Querverweis", [/umsatzsteuerlich/i, /UStG/], "Querschnittsthema ohne eigene Frequenz am Bilanz-Tag", "T3", true),

  /* ======================================================= UmwStG (Tag 2+3) */
  r("umwstg", "hoch", "§§ 20–23 UmwStG Einbringung in Kapitalgesellschaften / Anteilstausch",
    [/§§? 20/, /§ 21/, /§ 22/, /§ 23/, /einbringung/i, /anteilstausch/i, /einbringungsgewinn/i, /sperrfristbehaftet/i, /sachgründung/i, /formwechsel in (?:eine |die )?(?:kapitalgesellschaft|gmbh|a-gmbh)/i, /rückbeziehung/i, /zwischenwert/i, /buchwertansatz/i, UMW("2[0-3]"), UMW("25")],
    "2024 kompletter Kapitalgesellschaftsteil mit 32 Punkten; UmwStG in 8/12 Jahren", "T3", true),
  r("umwstg", "hoch", "§ 24 UmwStG Einbringung in Personengesellschaften", [/§ 24/, UMW("24")], "Einmal 10, einmal 23 Punkte, 2020 ein kompletter 39-Punkte-Teil", "T3", true),
  r("umwstg", "hoch", "Verschmelzung §§ 11–13 UmwStG", [/verschmelzung/i, /§§ 11[-–]13/, /übertragende kapg/i, /übernehmende kapg/i, /übernahmeergebnis/i, /§ 12 UmwStG/, UMW("1[1-3]")], "Verschmelzung einmal mit 22 Punkten", "T3", true),
  r("umwstg", "hoch", "Grundsätze: Aufdeckung stiller Reserven, Einlage vs. Einbringung", [/stille reserven/i, /aufdeckung/i, /einlage/i, /verdeckte einlage/i, /agio/i, /§ 17 EStG/, /§ 6 Abs\. 6/], "Eingangsprüfung jeder Einbringungsaufgabe (Abgrenzung § 6 Abs. 6 EStG / § 17 EStG / §§ 20 ff.)", "T3"),
  r("umwstg", "mittel", "Formwechsel / Verschmelzung KapG → PersG §§ 3–9 UmwStG", [/formwechsel/i, /§§? 3[-–]7/, /§ 3 UmwStG/, /§ 4 UmwStG/, /§ 5 UmwStG/, /§ 7 UmwStG/, /§ 9 UmwStG/, /übernahmebilanz/i, UMW("[3-9]")], "Am Ertragsteuer-Tag regelmäßig 4–11 Punkte; kein Jahres-Dauerbrenner", "T2/T3", true),
  r("umwstg", "mittel", "Optionsmodell § 1a KStG", [/§ 1a KStG/, /option zur körperschaft/i], "§ 1a KStG am KSt-Tag gar nicht geprüft; hier nur als Einbringungsvariante (§ 25 UmwStG)", "T2", true),
  r("umwstg", "selten", "Spaltung § 15 UmwStG / Ausgliederung", [/spaltung/i, /ausgliederung/i, /§ 15 UmwStG/, /§ 123 UmwG/, UMW("15")], "Keine Nennung in den Häufigkeitstabellen", "T3", true),
  r("umwstg", "selten", "Grunderwerbsteuer / Gewerbesteuer als Nebenfolge", [/grunderwerbsteuer/i], "Nebenfolge ohne eigene Frequenz", "T3", true),
];

/* --------------------------------------------------------------------------
   Manuelle Überschreibungen für Einzelinhalte, bei denen die Textmuster
   fachlich nicht passen. Schlüssel: "<fach>:<typ>:<id>".
   -------------------------------------------------------------------------- */
export const PRIORITAET_UEBERSCHREIBUNGEN = {
  /* K3 Bilanz: Klausurtechnik ist immer nötig, Bilanzänderung dagegen nie geprüft */
  "bilanz:modul:31": { stufe: "hoch", thema: "Bilanzberichtigung (Bilanzänderung selbst nie geprüft)", befund: "Bilanzberichtigung ist Kernstoff der Kapitalanpassung; die Bilanzänderung nach § 4 Abs. 2 S. 2 EStG kam nie vor", fundstelle: "T3" },
  "bilanz:modul:33": { stufe: "hoch", thema: "Zeit- und Punktemanagement", befund: "Methodik: seit 2022 Punkte je Teilaufgabe als Zeitbudget", fundstelle: "T1/T3" },
  "bilanz:modul:110": { stufe: "mittel", thema: "Leasing", befund: "Leasing nur einmal, dann aber neun Punkte", fundstelle: "T3" },
  "bilanz:modul:111": { stufe: "mittel", thema: "Mietkauf", befund: "Echter/unechter Mietkauf nie geprüft; als Zurechnungsfall trotzdem zweite Runde", fundstelle: "T3" },
  "bilanz:modul:121": { stufe: "mittel", thema: "Mietereinbauten", befund: "Zweimal, dann 9 bzw. 13 Punkte", fundstelle: "T3" },
  "bilanz:modul:122": { stufe: "mittel", thema: "Mietereinbauten", befund: "Zweimal, dann 9 bzw. 13 Punkte", fundstelle: "T3" },
  "bilanz:modul:42": { stufe: "selten", thema: "Schuldzinsenabzug § 4 Abs. 4a EStG", befund: "Keine Nennung in den Häufigkeitstabellen", fundstelle: "T3" },
  "bilanz:modul:43": { stufe: "selten", thema: "§ 4f / § 5 Abs. 7 EStG", befund: "Keine Nennung in den Häufigkeitstabellen", fundstelle: "T3" },
  "bilanz:modul:44": { stufe: "selten", thema: "Bewertungseinheiten", befund: "Keine Nennung in den Häufigkeitstabellen", fundstelle: "T3" },
  "bilanz:modul:140": { stufe: "selten", thema: "§ 4f / § 5 Abs. 7 EStG bei Pensionsrückstellungen", befund: "Keine Nennung in den Häufigkeitstabellen", fundstelle: "T3" },
  "bilanz:modul:35": { stufe: "mittel", thema: "Pkw-Privatnutzung", befund: "Pkw/1-%-Methode 5/12 am ESt-Tag", fundstelle: "T2" },
  "bilanz:modul:36": { stufe: "mittel", thema: "Fahrten Wohnung–Betriebsstätte", befund: "Pkw-Komplex 5/12 am ESt-Tag", fundstelle: "T2" },
  "bilanz:modul:113": { stufe: "mittel", thema: "Elektro-Pkw mit Privatnutzung", befund: "Pkw-Komplex 5/12 am ESt-Tag", fundstelle: "T2" },
  "bilanz:modul:51": { stufe: "hoch", thema: "Degressive AfA 2025–2027", befund: "AfA nahezu jährlich; Rechtsänderung ab 2025 ist typischer Prüfungsanlass", fundstelle: "T3" },
  "bilanz:modul:39": { stufe: "mittel", thema: "Latente Steuern", befund: "Handelsrechtlicher Nebenpunkt in Kapitalgesellschaftsteilen", fundstelle: "T3" },
  "bilanz:modul:102": { stufe: "mittel", thema: "Selbst geschaffenes Patent und latente Steuern", befund: "Immaterielle WG und latente Steuern ohne eigene Frequenzangabe", fundstelle: "T3" },
  "bilanz:modul:47": { stufe: "mittel", thema: "Betriebsveräußerung / § 34 EStG", befund: "Betriebsveräußerung 7/12 am ESt-Tag; am Bilanz-Tag Teil der 3/12-Ausscheidensfälle mit 11–23 Punkten", fundstelle: "T2/T3" },
  "bilanz:modul:48": { stufe: "mittel", thema: "Realteilung", befund: "Nur 3/12, aber 11, 18 und 23 Punkte", fundstelle: "T3" },
  "bilanz:modul:46": { stufe: "hoch", thema: "Eintritt/Ausscheiden mit Ergänzungsbilanz und § 24 UmwStG", befund: "Ergänzungsbilanz 8/12; § 24 UmwStG bis 39 Punkte", fundstelle: "T3" },
  "bilanz:modul:45": { stufe: "mittel", thema: "§ 15a EStG", befund: "5/12 am ESt-Tag, 3–9 Punkte", fundstelle: "T2" },
  "bilanz:modul:13": { stufe: "mittel", thema: "§ 6 Abs. 5 EStG", befund: "5/12 Klausuren", fundstelle: "T3" },
  "bilanz:modul:22": { stufe: "mittel", thema: "GWG und Sammelposten", befund: "Zweimal", fundstelle: "T3" },
  "bilanz:modul:8": { stufe: "hoch", thema: "§ 7g EStG / Sonder-AfA", befund: "AfA-Komplex nahezu jährlich; § 7g als Standardvariante der Fälle", fundstelle: "T3" },
  "bilanz:modul:37": { stufe: "mittel", thema: "Tausch, Inzahlungnahme, Zuschuss", befund: "Zuschüsse einmal; Tausch ohne eigene Frequenzangabe", fundstelle: "T3" },
  "bilanz:modul:114": { stufe: "mittel", thema: "Tausch mit Investitionszuschuss", befund: "Zuschüsse einmal", fundstelle: "T3" },
  "bilanz:modul:116": { stufe: "mittel", thema: "Zuschussrücklage", befund: "Zuschüsse einmal", fundstelle: "T3" },
  "bilanz:modul:26": { stufe: "hoch", thema: "Rücklage für Ersatzbeschaffung", befund: "Als Schwester des § 6b (11/12) in den Dauerbrenner-Block eingeordnet", fundstelle: "T3" },
  "bilanz:modul:34": { stufe: "mittel", thema: "Zurechnung im Mietverhältnis", befund: "Leasing-/Mietfälle nur einmal mit neun Punkten", fundstelle: "T3" },
  "bilanz:hausaufgabe:ha-6": { stufe: "mittel", thema: "Gebäude und Mietereinbauten", befund: "Gebäude 11/12, Mietereinbauten zweimal mit 9/13 Punkten", fundstelle: "T3" },
  "bilanz:formel:zeitbudget": { stufe: "hoch", thema: "Zeitbudget", befund: "Methodik: 3,6 Minuten je Punkt", fundstelle: "T1/T3" },
  "bilanz:formel:leasing-4090": { stufe: "mittel", thema: "Leasing", befund: "Leasing nur einmal, dann neun Punkte", fundstelle: "T3" },
  "bilanz:formel:latente-steuern": { stufe: "mittel", thema: "Latente Steuern", befund: "Handelsrechtlicher Nebenpunkt", fundstelle: "T3" },
  "bilanz:formel:schuldzinsen": { stufe: "selten", thema: "Schuldzinsenabzug", befund: "Keine Nennung in den Häufigkeitstabellen", fundstelle: "T3" },
  "bilanz:formel:sechzehn-freibetrag": { stufe: "mittel", thema: "Freibetrag § 16 Abs. 4 EStG", befund: "Betriebsaufgabe 5/12 am ESt-Tag", fundstelle: "T2" },
  "bilanz:schaubild:leasingBaum": { stufe: "mittel", thema: "Leasing", befund: "Leasing nur einmal, dann neun Punkte", fundstelle: "T3" },
  "bilanz:schaubild:latenteSteuern": { stufe: "mittel", thema: "Latente Steuern", befund: "Handelsrechtlicher Nebenpunkt", fundstelle: "T3" },
  "bilanz:schaubild:mietereinbauten": { stufe: "mittel", thema: "Mietereinbauten", befund: "Zweimal, dann 9 bzw. 13 Punkte", fundstelle: "T3" },
  "bilanz:schaubild:pensionsRst": { stufe: "mittel", thema: "Pensionsrückstellung", befund: "§ 6a einmal am ESt-Tag", fundstelle: "T2" },
  "bilanz:schaubild:realteilung": { stufe: "mittel", thema: "Realteilung", befund: "Nur 3/12, aber 11, 18 und 23 Punkte", fundstelle: "T3" },
  "bilanz:schaubild:betriebsaufgabe": { stufe: "mittel", thema: "Betriebsaufgabe", befund: "Betriebsaufgabe 5/12 am ESt-Tag", fundstelle: "T2" },
  "bilanz:schaubild:kapitalkonto15a": { stufe: "mittel", thema: "§ 15a EStG", befund: "5/12 am ESt-Tag, 3–9 Punkte", fundstelle: "T2" },
  "bilanz:schaubild:gwg": { stufe: "mittel", thema: "GWG und Sammelposten", befund: "Zweimal", fundstelle: "T3" },
  "bilanz:woche:5": { stufe: "mittel", thema: "Mietereinbauten und wirtschaftliches Eigentum", befund: "Mietereinbauten zweimal mit 9/13 Punkten", fundstelle: "T3" },

  /* K1 AO */
  "ao:modul:305": { stufe: "hoch", thema: "Arten von Verwaltungsakten", befund: "Vorfrage jeder Bekanntgabe-/Korrekturprüfung (11/11)", fundstelle: "T1" },
  "ao:modul:309": { stufe: "hoch", thema: "Arbeitsmittel der AO-Klausur", befund: "Methodik", fundstelle: "T1" },
  "ao:modul:366": { stufe: "hoch", thema: "AO-Handbuch als Arbeitsmittel", befund: "Methodik", fundstelle: "T1" },
  "ao:modul:348": { stufe: "selten", thema: "§ 165 AO", befund: "Exot: § 165 AO im Zeitraum kaum geprüft", fundstelle: "T1" },
  "ao:modul:349": { stufe: "selten", thema: "§ 165 AO", befund: "Exot: § 165 AO im Zeitraum kaum geprüft", fundstelle: "T1" },
  "ao:modul:350": { stufe: "selten", thema: "§ 165 AO ↔ § 171 Abs. 8 AO", befund: "Exot: § 165 AO im Zeitraum kaum geprüft", fundstelle: "T1" },
  "ao:fall:310": { stufe: "mittel", thema: "Pflichtverstöße: Verspätungszuschlag, Schätzung, Säumnis", befund: "2023: Verspätungszuschlag neben Bekanntgabe/Einspruch; Zwangsmittel/Haftung Exoten", fundstelle: "T1" },
  "ao:fall:378": { stufe: "mittel", thema: "§ 130 AO Rücknahme", befund: "Sonstige VA nur vereinzelt", fundstelle: "T1" },
  "ao:fall:379": { stufe: "mittel", thema: "§ 131 AO Widerruf", befund: "Sonstige VA nur vereinzelt", fundstelle: "T1" },
  "ao:fall:380": { stufe: "mittel", thema: "§ 130 AO Verspätungszuschlag", befund: "2023: Verspätungszuschlag", fundstelle: "T1" },
  "ao:fall:381": { stufe: "selten", thema: "Haftungsbescheid", befund: "Haftung Exot", fundstelle: "T1" },
  "ao:modul:389": { stufe: "selten", thema: "Haftung", befund: "Haftung Exot", fundstelle: "T1" },
  "ao:modul:390": { stufe: "selten", thema: "Haftung § 69 AO", befund: "Haftung Exot", fundstelle: "T1" },
  "ao:modul:391": { stufe: "selten", thema: "Haftung mehrerer Geschäftsführer", befund: "Haftung Exot", fundstelle: "T1" },
  "ao:modul:392": { stufe: "selten", thema: "Haftung § 71 AO", befund: "Haftung Exot", fundstelle: "T1" },
  "ao:modul:393": { stufe: "selten", thema: "Haftung § 74 AO", befund: "Haftung Exot", fundstelle: "T1" },
  "ao:modul:383": { stufe: "selten", thema: "Steuerhinterziehung", befund: "Exot", fundstelle: "T1" },
  "ao:modul:385": { stufe: "selten", thema: "Steuerhinterziehung", befund: "Exot", fundstelle: "T1" },
  "ao:modul:386": { stufe: "selten", thema: "Steuerhinterziehung", befund: "Exot", fundstelle: "T1" },
  "ao:modul:387": { stufe: "selten", thema: "Steuerhinterziehung", befund: "Exot (nur die 10-Jahres-Frist ist Kernstoff)", fundstelle: "T1" },
  "ao:modul:388": { stufe: "selten", thema: "Selbstanzeige", befund: "Exot", fundstelle: "T1" },
  "ao:modul:367": { stufe: "selten", thema: "Vollstreckung", befund: "Erst 2022 ein Fünf-Punkte-Fall", fundstelle: "T1" },
  "ao:modul:384": { stufe: "selten", thema: "Vollstreckung", befund: "Erst 2022 ein Fünf-Punkte-Fall", fundstelle: "T1" },
  "ao:modul:368": { stufe: "selten", thema: "FGO", befund: "Exot", fundstelle: "T1" },
  "ao:modul:302": { stufe: "mittel", thema: "Ermittlungsverfahren", befund: "Prüfungsjahr 2021: Prüfungsanordnung und Auskunft", fundstelle: "T1" },
  "ao:modul:303": { stufe: "mittel", thema: "Auskunfts-/Vorlageersuchen", befund: "Prüfungsjahr 2021", fundstelle: "T1" },
  "ao:fall:311": { stufe: "mittel", thema: "Auskunftsersuchen", befund: "Prüfungsjahr 2021", fundstelle: "T1" },
  "ao:modul:377": { stufe: "mittel", thema: "§§ 129–131 AO", befund: "Sonstige VA nur vereinzelt", fundstelle: "T1" },
  "ao:skript:384": { stufe: "selten", thema: "Vollstreckung", befund: "Erst 2022 ein Fünf-Punkte-Fall", fundstelle: "T1" },
  "ao:skript:346": { stufe: "mittel", thema: "§ 164 / § 165 / § 129", befund: "§ 164 in 4 Jahren mit 4–13 Punkten", fundstelle: "T1" },

  /* K1 USt */
  "ust:modul:161": { stufe: "hoch", thema: "Steuersatz § 12", befund: "Bestandteil jeder Ausgangsumsatz-Prüfung", fundstelle: "T1" },
  "ust:fall:150": { stufe: "mittel", thema: "Hotel/Beherbergung und Steuersatz", befund: "Ortsregel § 3a Abs. 3 Nr. 1 ist Kern, Beherbergungssteuersatz Nebenpunkt", fundstelle: "T1" },
  "ust:fall:151": { stufe: "selten", thema: "Personenbeförderung", befund: "Exot", fundstelle: "T1" },
  "ust:fall:228": { stufe: "selten", thema: "Reiseleistungen", befund: "Exot", fundstelle: "T1" },
  "ust:modul:232": { stufe: "selten", thema: "Reiseleistungen", befund: "Exot", fundstelle: "T1" },
  "ust:modul:208": { stufe: "mittel", thema: "Differenzbesteuerung", befund: "Nur 2-mal, aber 5 bzw. 15 Punkte", fundstelle: "T1" },
  "ust:fall:194": { stufe: "mittel", thema: "Differenzbesteuerung", befund: "Nur 2-mal, aber 5 bzw. 15 Punkte", fundstelle: "T1" },
  "ust:fall:195": { stufe: "mittel", thema: "Differenzbesteuerung", befund: "Nur 2-mal, aber 5 bzw. 15 Punkte", fundstelle: "T1" },
  "ust:modul:244": { stufe: "mittel", thema: "Kleinunternehmer", befund: "Nur 2-mal, aber 10 bzw. 6 Punkte", fundstelle: "T1" },
  "ust:fall:238": { stufe: "mittel", thema: "Kleinunternehmer", befund: "Nur 2-mal, aber 10 bzw. 6 Punkte", fundstelle: "T1" },
  "ust:fall:239": { stufe: "mittel", thema: "Kleinunternehmer", befund: "Nur 2-mal, aber 10 bzw. 6 Punkte", fundstelle: "T1" },
  "ust:modul:179": { stufe: "selten", thema: "Ausfuhrlieferung", befund: "Exot", fundstelle: "T1" },
  "ust:modul:180": { stufe: "selten", thema: "Lohnveredelung § 7", befund: "Exot", fundstelle: "T1" },
  "ust:modul:181": { stufe: "selten", thema: "Einfuhrumsatzsteuer", befund: "Exot", fundstelle: "T1" },
  "ust:fall:174": { stufe: "selten", thema: "Ausfuhrlieferung", befund: "Exot", fundstelle: "T1" },
  "ust:fall:176": { stufe: "selten", thema: "Lohnveredelung / Drittland", befund: "Exot", fundstelle: "T1" },
  "ust:fall:182": { stufe: "selten", thema: "Einfuhr", befund: "Exot", fundstelle: "T1" },
  "ust:modul:193": { stufe: "mittel", thema: "Schwellenerwerber / neue Fahrzeuge", befund: "Erwerbsschwelle gehört zum § 1a-Block (11/11), § 1b ist Exot", fundstelle: "T1" },
  "ust:modul:227": { stufe: "hoch", thema: "Reihengeschäft mit Transportzuordnung", befund: "Reihengeschäft 8/11", fundstelle: "T1" },
  "ust:modul:234": { stufe: "mittel", thema: "Organschaft", befund: "Unternehmensstruktur-Baustein ohne eigene Jahresfrequenz", fundstelle: "T1" },
  "ust:modul:243": { stufe: "mittel", thema: "Gesellschafter und Gesellschaft", befund: "Nebenpunkt der Unternehmer-Prüfung", fundstelle: "T1" },
  "ust:fall:236": { stufe: "mittel", thema: "Selbständigkeit von Gesellschaftern", befund: "Nebenpunkt der Unternehmer-Prüfung", fundstelle: "T1" },
  "ust:fall:237": { stufe: "mittel", thema: "Sonderentgelt", befund: "Nebenpunkt der Unternehmer-Prüfung", fundstelle: "T1" },
  "ust:hausaufgabe:H5-1": { stufe: "selten", thema: "Kommissionsgeschäft", befund: "Sondertatbestand ohne Nennung", fundstelle: "T1" },
  "ust:hausaufgabe:H3-2": { stufe: "mittel", thema: "Sicherungsübereignung mit § 13b", befund: "§ 13b 10/11; Sicherungsübereignung/Ausfuhr Exoten", fundstelle: "T1" },
  "ust:skript:F-01": { stufe: "selten", thema: "Kommission und Schnittstellen", befund: "Sondertatbestand ohne Nennung", fundstelle: "T1" },
  "ust:skript:F-06": { stufe: "mittel", thema: "Gesellschafterleistungen", befund: "Nebenpunkt der Unternehmer-Prüfung", fundstelle: "T1" },
  "ust:skript:B-13": { stufe: "selten", thema: "Gutscheine", befund: "Sondertatbestand ohne Nennung", fundstelle: "T1" },
  "ust:fallsammlung:1.3": { stufe: "mittel", thema: "Vermittlung / Leistungsort", befund: "Leistungsort nahezu jährlich; Vermittlung selbst Sonderfall", fundstelle: "T1" },
  "ust:fallsammlung:3.1": { stufe: "selten", thema: "Kreditsicherung", befund: "Sondertatbestand", fundstelle: "T1" },
  "ust:fallsammlung:3.2": { stufe: "selten", thema: "Lieferung in die Schweiz", befund: "Ausfuhr Exot", fundstelle: "T1" },
  "ust:fallsammlung:3.3": { stufe: "selten", thema: "Lieferung aus Südkorea", befund: "Einfuhr Exot", fundstelle: "T1" },
  "ust:fallsammlung:3.4": { stufe: "selten", thema: "Lieferung aus der Schweiz", befund: "Einfuhr Exot", fundstelle: "T1" },
  "ust:fallsammlung:4.2": { stufe: "mittel", thema: "Einkauf aus Marokko über Italien", befund: "Reihengeschäft 8/11, Einfuhrteil Exot", fundstelle: "T1" },
  "ust:fallsammlung:4.6": { stufe: "mittel", thema: "Einkauf zwischen drei Mitgliedstaaten", befund: "Reihengeschäft 8/11; Dreiecksgeschäft § 25b Exot", fundstelle: "T1" },
  "ust:fallsammlung:5.3": { stufe: "mittel", thema: "Rücknahme und Verkauf in die Schweiz", befund: "§ 17 regelmäßig, Ausfuhr Exot", fundstelle: "T1" },
  "ust:fallsammlung:5.4": { stufe: "selten", thema: "Kommission / Schweiz", befund: "Kommission und Ausfuhr Exoten", fundstelle: "T1" },
  "ust:fallsammlung:5.5": { stufe: "selten", thema: "Kauf eines Flugzeugs", befund: "Sondertatbestand", fundstelle: "T1" },
  "ust:fallsammlung:5.6": { stufe: "selten", thema: "Kommission aus Island", befund: "Kommission Exot", fundstelle: "T1" },
  "ust:fallsammlung:5.7": { stufe: "selten", thema: "Kommissionsgut", befund: "Kommission Exot", fundstelle: "T1" },
  "ust:fallsammlung:7.5": { stufe: "selten", thema: "Skireise (§ 25)", befund: "Reiseleistungen Exot", fundstelle: "T1" },
  "ust:fallsammlung:7.6": { stufe: "mittel", thema: "Gebrauchtwagenhändler (§ 25a)", befund: "Nur 2-mal, aber bis 15 Punkte", fundstelle: "T1" },
  "ust:fallsammlung:7.7": { stufe: "mittel", thema: "Kunsthandel (§ 25a)", befund: "Nur 2-mal, aber bis 15 Punkte", fundstelle: "T1" },
  "ust:fallsammlung:7.8": { stufe: "mittel", thema: "Unternehmensbeteiligungen", befund: "Nebenpunkt der Unternehmer-Prüfung", fundstelle: "T1" },
  "ust:fallsammlung:7.4": { stufe: "hoch", thema: "Immobilie mit Nutzungsänderung", befund: "§ 4/§ 9/§ 15/§ 15a-Verbundschema", fundstelle: "T1" },
  "ust:fallsammlung:7.1": { stufe: "hoch", thema: "Einbringung / GiG", befund: "GiG 7/11", fundstelle: "T1" },
  "ust:fallsammlung:7.2": { stufe: "hoch", thema: "Umstrukturierung und Vermietung", befund: "GiG 7/11, Vermietung 8/11", fundstelle: "T1" },
  "ust:fallsammlung:7.3": { stufe: "mittel", thema: "Neugründung", befund: "Unternehmerbeginn als Nebenpunkt", fundstelle: "T1" },

  /* K1 ErbSt */
  "erbst:modul:501": { stufe: "hoch", thema: "Arbeitsmittel und Gesetzeszusammenspiel", befund: "Methodik", fundstelle: "T1" },
  "erbst:modul:528": { stufe: "hoch", thema: "Schlussfahrtroute", befund: "Methodik", fundstelle: "T1" },
  "erbst:modul:551": { stufe: "hoch", thema: "Recap Bewertungsfahrtroute", befund: "Methodik", fundstelle: "T1" },
  "erbst:fall:530": { stufe: "selten", thema: "Stille Beteiligung / partiarisches Darlehen", befund: "Sonderfall ohne Nennung", fundstelle: "T1" },
  "erbst:modul:512": { stufe: "mittel", thema: "Familienheim", befund: "Grundvermögen 6/11; Familienheim als Befreiungsunterfall", fundstelle: "T1" },
  "erbst:modul:513": { stufe: "mittel", thema: "§ 13d ErbStG", befund: "Grundvermögen 6/11", fundstelle: "T1" },
  "erbst:modul:509": { stufe: "mittel", thema: "Hausrat und bewegliche Gegenstände", befund: "Übriges Vermögen 8/11, kleiner bepunktet", fundstelle: "T1" },
  "erbst:fall:510": { stufe: "mittel", thema: "Hausrat/Pkw", befund: "Übriges Vermögen 8/11", fundstelle: "T1" },
  "erbst:fall:511": { stufe: "mittel", thema: "Schwebender Erwerb Grundstück", befund: "Grundvermögen 6/11", fundstelle: "T1" },

  /* K2 KSt */
  "kst:modul:12": { stufe: "selten", thema: "Vereinsbesteuerung", befund: "Keine Nennung", fundstelle: "T2" },
  "kst:modul:18": { stufe: "selten", thema: "Gemeinnütziger Verein", befund: "Keine Nennung", fundstelle: "T2" },
  "kst:modul:19": { stufe: "selten", thema: "Gemeinnützigkeit", befund: "Keine Nennung", fundstelle: "T2" },
  "kst:modul:20": { stufe: "selten", thema: "Zweckbetrieb", befund: "Keine Nennung", fundstelle: "T2" },
  "kst:fall:8": { stufe: "selten", thema: "Verein", befund: "Keine Nennung", fundstelle: "T2" },
  "kst:modul:31": { stufe: "selten", thema: "§ 1a KStG", befund: "Gar nicht geprüft", fundstelle: "T2" },
  "kst:modul:33": { stufe: "selten", thema: "Liquidation", befund: "Gar nicht geprüft", fundstelle: "T2" },
  "kst:modul:45": { stufe: "selten", thema: "Liquidation", befund: "Gar nicht geprüft", fundstelle: "T2" },
  "kst:modul:46": { stufe: "selten", thema: "Liquidation", befund: "Gar nicht geprüft", fundstelle: "T2" },
  "kst:fall:22": { stufe: "selten", thema: "Liquidation", befund: "Gar nicht geprüft", fundstelle: "T2" },
  "kst:modul:44": { stufe: "selten", thema: "§ 8d KStG", befund: "Gar nicht geprüft", fundstelle: "T2" },
  "kst:modul:10": { stufe: "mittel", thema: "§ 8c KStG (§ 8d Exot)", befund: "§ 8c einmal mit elf Punkten", fundstelle: "T2" },
  "kst:modul:42": { stufe: "mittel", thema: "§ 8c KStG", befund: "Einmal, elf Punkte", fundstelle: "T2" },
  "kst:modul:43": { stufe: "mittel", thema: "§ 8c KStG", befund: "Einmal, elf Punkte", fundstelle: "T2" },
  "kst:fall:21": { stufe: "mittel", thema: "§ 8c KStG", befund: "Einmal, elf Punkte", fundstelle: "T2" },
  "kst:modul:16": { stufe: "mittel", thema: "Stille Beteiligung", befund: "Nebenpunkt zu § 20 EStG", fundstelle: "T2" },
  "kst:modul:17": { stufe: "mittel", thema: "§ 15a bei stiller Beteiligung", befund: "§ 15a 5/12", fundstelle: "T2" },
  "kst:fall:7": { stufe: "mittel", thema: "Atypisch stille Beteiligung", befund: "Nebenpunkt zu § 20 EStG", fundstelle: "T2" },
  "kst:schema:organschaft": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "kst:schema:verein": { stufe: "selten", thema: "Verein", befund: "Keine Nennung", fundstelle: "T2" },
  "kst:schema:verein-vier-sphaeren": { stufe: "selten", thema: "Verein", befund: "Keine Nennung", fundstelle: "T2" },
  "kst:schema:option-1a": { stufe: "selten", thema: "§ 1a KStG", befund: "Gar nicht geprüft", fundstelle: "T2" },
  "kst:schema:liquidation-11": { stufe: "selten", thema: "Liquidation", befund: "Gar nicht geprüft", fundstelle: "T2" },
  "kst:schema:liquidation-detail": { stufe: "selten", thema: "Liquidation", befund: "Gar nicht geprüft", fundstelle: "T2" },
  "kst:schema:8c8d": { stufe: "mittel", thema: "§ 8c/§ 8d", befund: "§ 8c einmal mit elf Punkten", fundstelle: "T2" },
  "kst:schema:8c-detail": { stufe: "mittel", thema: "§ 8c", befund: "Einmal, elf Punkte", fundstelle: "T2" },
  "kst:schema:stille-beteiligung": { stufe: "mittel", thema: "Stille Beteiligung", befund: "Nebenpunkt zu § 20 EStG", fundstelle: "T2" },
  "kst:modul:38": { stufe: "mittel", thema: "Pensionszusage", befund: "vGA-Unterfall; § 6a am ESt-Tag einmal", fundstelle: "T2" },
  "kst:modul:39": { stufe: "mittel", thema: "Pensionszusage", befund: "vGA-Unterfall; § 6a am ESt-Tag einmal", fundstelle: "T2" },
  "kst:modul:40": { stufe: "mittel", thema: "Pensionszusage", befund: "vGA-Unterfall; § 6a am ESt-Tag einmal", fundstelle: "T2" },
  "kst:modul:41": { stufe: "mittel", thema: "Pensionsverpflichtung", befund: "vGA-Unterfall; § 6a am ESt-Tag einmal", fundstelle: "T2" },
  "kst:fall:20": { stufe: "mittel", thema: "Pensionszusage", befund: "vGA-Unterfall; § 6a am ESt-Tag einmal", fundstelle: "T2" },
  "kst:schema:pension-grundschema": { stufe: "mittel", thema: "Pensionszusage", befund: "vGA-Unterfall", fundstelle: "T2" },
  "kst:schema:pension-wegfall": { stufe: "mittel", thema: "Pensionszusage", befund: "vGA-Unterfall", fundstelle: "T2" },

  /* K2 IStR */
  "istr:modul:istr3-13": { stufe: "selten", thema: "Entstrickung", befund: "Keine Nennung", fundstelle: "T2" },
  "istr:modul:istr3-14": { stufe: "selten", thema: "Entstrickung § 12 KStG", befund: "Keine Nennung", fundstelle: "T2" },
  "istr:fall:istr3-fall-entstrickung": { stufe: "selten", thema: "Entstrickung", befund: "Keine Nennung", fundstelle: "T2" },
  "istr:modul:istr1-03": { stufe: "mittel", thema: "§ 2a EStG / § 7 AStG", befund: "Nebenpunkte ohne eigene Frequenz", fundstelle: "T2" },
  "istr:modul:istr4-01": { stufe: "hoch", thema: "Grundschema IStR", befund: "Methodik; § 7 AStG als Nebenprüfpunkt", fundstelle: "T2" },

  /* K3 PersG */
  "persg:modul:28": { stufe: "selten", thema: "Umsatzsteuerlicher Querverweis", befund: "Querschnitt ohne eigene Frequenz", fundstelle: "T3" },
  "persg:modul:12": { stufe: "selten", thema: "Doppelstöckige PersG", befund: "Keine Nennung", fundstelle: "T3" },
  "persg:modul:17": { stufe: "selten", thema: "Zebragesellschaft", befund: "Keine Nennung", fundstelle: "T3" },
  "persg:modul:18": { stufe: "selten", thema: "Doppelstock / Durchstockung", befund: "Keine Nennung", fundstelle: "T3" },
  "persg:fall:persg-fall-5": { stufe: "selten", thema: "Zebragesellschaft", befund: "Keine Nennung", fundstelle: "T3" },
  "persg:fall:persg-fall-6": { stufe: "selten", thema: "Doppelstock", befund: "Keine Nennung", fundstelle: "T3" },
  "persg:schema:zebra": { stufe: "selten", thema: "Zebragesellschaft", befund: "Keine Nennung", fundstelle: "T3" },
  "persg:schema:doppelstock-spiegel": { stufe: "selten", thema: "Doppelstock", befund: "Keine Nennung", fundstelle: "T3" },
  "persg:modul:13": { stufe: "mittel", thema: "Spiegelbildmethode", befund: "4/12, rund neun Punkte", fundstelle: "T3" },
  "persg:modul:14": { stufe: "mittel", thema: "Spiegelbildmethode", befund: "4/12, rund neun Punkte", fundstelle: "T3" },
  "persg:modul:15": { stufe: "mittel", thema: "Spiegelbildmethode", befund: "4/12, rund neun Punkte", fundstelle: "T3" },
  "persg:modul:16": { stufe: "mittel", thema: "§ 15a in der Spiegelbildmethode", befund: "§ 15a 5/12", fundstelle: "T2/T3" },
  "persg:fall:persg-fall-3": { stufe: "mittel", thema: "Spiegelbildmethode", befund: "4/12, rund neun Punkte", fundstelle: "T3" },
  "persg:fall:persg-fall-4": { stufe: "mittel", thema: "Spiegelbildmethode / § 15a", befund: "4/12 bzw. 5/12", fundstelle: "T2/T3" },
  "persg:schema:spiegel-grund": { stufe: "mittel", thema: "Spiegelbildmethode", befund: "4/12, rund neun Punkte", fundstelle: "T3" },
  "persg:schema:spiegel-15a": { stufe: "mittel", thema: "§ 15a", befund: "5/12", fundstelle: "T2" },
  "persg:modul:9": { stufe: "mittel", thema: "Mitunternehmerische Betriebsaufspaltung", befund: "Betriebsaufspaltung 5/12 am ESt-Tag", fundstelle: "T2" },
  "persg:schema:mu-bas": { stufe: "mittel", thema: "Mitunternehmerische Betriebsaufspaltung", befund: "5/12 am ESt-Tag", fundstelle: "T2" },
  "persg:modul:38": { stufe: "hoch", thema: "Klausurguide Tag 5", befund: "Methodik", fundstelle: "T3" },
  "persg:modul:39": { stufe: "mittel", thema: "Ausscheiden: Zivilrecht", befund: "3/12, aber 11–23 Punkte", fundstelle: "T3" },
  "persg:modul:41": { stufe: "mittel", thema: "Austrittsfall mit § 6b", befund: "3/12, aber 11–23 Punkte", fundstelle: "T3" },
  "persg:modul:43": { stufe: "hoch", thema: "Gesellschafterwechsel mit Ergänzungsbilanz", befund: "Ergänzungsbilanz 8/12", fundstelle: "T3" },
  "persg:fall:persg-original-4e": { stufe: "hoch", thema: "Gesellschafterwechsel / Ergänzungsbilanz", befund: "Ergänzungsbilanz 8/12", fundstelle: "T3" },
  "persg:fall:persg-original-4f": { stufe: "hoch", thema: "Gesellschafterwechsel / Ergänzungsbilanz", befund: "Ergänzungsbilanz 8/12", fundstelle: "T3" },
  "persg:schema:p5-wechsel": { stufe: "hoch", thema: "Gesellschafterwechsel / Ergänzungsbilanz", befund: "Ergänzungsbilanz 8/12", fundstelle: "T3" },
  "persg:modul:19": { stufe: "mittel", thema: "§ 6b bei PersG", befund: "§ 6b 11/12 insgesamt; Übertragung auf PersG als Sonderform", fundstelle: "T3" },
  "persg:fall:persg-fall-7": { stufe: "mittel", thema: "§ 6b bei PersG", befund: "§ 6b 11/12 insgesamt; Übertragung auf PersG als Sonderform", fundstelle: "T3" },
  "persg:schema:sechs-b": { stufe: "mittel", thema: "§ 6b bei PersG", befund: "Sonderform", fundstelle: "T3" },
  "persg:modul:29": { stufe: "hoch", thema: "Gesamtfall mit Ergänzungsbilanz", befund: "Ergänzungsbilanz 8/12", fundstelle: "T3" },
  "persg:fall:persg-fall-13": { stufe: "hoch", thema: "Gesamtfall mit Ergänzungsbilanz", befund: "Ergänzungsbilanz 8/12", fundstelle: "T3" },
  "persg:schema:gesamtfall-afa": { stufe: "hoch", thema: "Ergänzungsbilanz & AfA", befund: "Ergänzungsbilanz 8/12", fundstelle: "T3" },
  "persg:modul:11": { stufe: "hoch", thema: "Kapitalkonten", befund: "Grundgerüst des PersG-Teils; § 15a-Bezug 5/12", fundstelle: "T3" },
  "persg:modul:20": { stufe: "mittel", thema: "Einbringung Einzel-WG gegen Gesellschaftsrechte", befund: "§ 6 Abs. 5 5/12", fundstelle: "T3" },
  "persg:modul:21": { stufe: "mittel", thema: "Einzel-WG PV → BV", befund: "Einlagebewertung Standardbaustein", fundstelle: "T3" },
  "persg:modul:22": { stufe: "mittel", thema: "PV-Grundstück → OHG", befund: "§ 23 6/12 (klein), Einlagebewertung", fundstelle: "T2/T3" },
  "persg:fall:persg-fall-8": { stufe: "mittel", thema: "PV-Grundstück → OHG", befund: "Einlagebewertung", fundstelle: "T3" },
  "persg:schema:einbringung": { stufe: "mittel", thema: "Einbringung Einzel-WG", befund: "§ 6 Abs. 5 5/12", fundstelle: "T3" },
  "persg:schema:transfer-master": { stufe: "mittel", thema: "Einzel-WG PV → BV", befund: "Einlagebewertung", fundstelle: "T3" },

  /* K3 UmwStR */
  "umwstg:hausaufgabe:UMW-HA1-2": { stufe: "mittel", thema: "Option § 1a KStG", befund: "§ 1a KStG gar nicht geprüft; §§ 20/25 UmwStG-Mechanik aber Dauerbrenner", fundstelle: "T2/T3" },
  "umwstg:hausaufgabe:UMW-HA3-2": { stufe: "mittel", thema: "Formwechsel KapG → PersG", befund: "Am Ertragsteuer-Tag 4–11 Punkte", fundstelle: "T2" },
  /* Nachträge nach Sichtung der automatischen Zuordnung */
  "ust:skript:B-07": { stufe: "mittel", thema: "Sonstige Steuerbefreiungen § 4 Nr. 8, 10, 11, 14", befund: "Nur Vermietung (8/11), Grundstück (6/11) und ig. Lieferung (5/11) sind in den Häufigkeitstabellen; übrige Befreiungen ohne Nennung", fundstelle: "T1" },
  "ust:skript:C-02": { stufe: "hoch", thema: "Vorsteuer: gesetzlich geschuldete Steuer", befund: "Vorsteuerabzug nahezu jährlich; § 14c als Fehlerquelle", fundstelle: "T1" },
  "ust:modul:164": { stufe: "hoch", thema: "Vorsteuerabzug und § 14c", befund: "Vorsteuerabzug nahezu jährlich", fundstelle: "T1" },
  "ust:skript:D-03": { stufe: "mittel", thema: "Einfuhr im Reihengeschäft", befund: "Reihengeschäft 8/11, Einfuhr Exot", fundstelle: "T1" },
  "erbst:modul:508": { stufe: "hoch", thema: "Master-Fahrtroute der Steuerberechnung", befund: "Methodik; Vorerwerbe § 14 selbst selten", fundstelle: "T1" },
  "erbst:fall:518": { stufe: "hoch", thema: "Vollständige WSV/NNAS-Fahrtroute", befund: "Grundstruktur des steuerpflichtigen Erwerbs wiederholt sich nahezu stereotyp", fundstelle: "T1" },
  "kst:modul:57": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "kst:modul:58": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "kst:modul:59": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "kst:modul:61": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "kst:modul:62": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "kst:schema:organschaft-einkommen-r146": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "kst:schema:organschaft-buchwert-einlagekonto": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "kst:fall:23": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "kst:fall:25": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "kst:fall:27": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "kst:fall:29": { stufe: "mittel", thema: "Organschaft", befund: "3-mal, bis 13 Punkte", fundstelle: "T2" },
  "istr:modul:istr4-07": { stufe: "mittel", thema: "Hinzurechnungsbetrag § 10 AStG", befund: "Hinzurechnungsbesteuerung nur gelegentlich", fundstelle: "T2" },
  "istr:modul:istr3-07": { stufe: "mittel", thema: "§ 2 AStG", befund: "Gelegentlich neben § 6 AStG", fundstelle: "T2" },
  "istr:fall:istr1-fall-chile": { stufe: "hoch", thema: "Anrechnung ohne DBA § 34c", befund: "Auslandseinkünfte/Methoden in nahezu jeder IStR-Teilaufgabe", fundstelle: "T2" },
  "persg:modul:24": { stufe: "mittel", thema: "§ 6 Abs. 5 S. 4 EStG", befund: "5/12 Klausuren", fundstelle: "T3" },
  "persg:modul:26": { stufe: "mittel", thema: "§ 6 Abs. 5 S. 3 Nr. 4 EStG", befund: "5/12 Klausuren", fundstelle: "T3" },
  "persg:schema:sperrfrist-s4": { stufe: "mittel", thema: "§ 6 Abs. 5 S. 4 EStG", befund: "5/12 Klausuren", fundstelle: "T3" },
  "persg:schema:nr4-identisch": { stufe: "mittel", thema: "§ 6 Abs. 5 S. 3 Nr. 4 EStG", befund: "5/12 Klausuren", fundstelle: "T3" },
  "persg:fall:persg-fall-9": { stufe: "mittel", thema: "§ 6 Abs. 5 EStG", befund: "5/12 Klausuren", fundstelle: "T3" },
  "istr:modul:istr4-08": { stufe: "mittel", thema: "Hinzurechnungsbesteuerung §§ 11, 12 AStG", befund: "Hinzurechnungsbesteuerung nur gelegentlich", fundstelle: "T2" },
  "istr:fall:istr4-fall-a-limited": { stufe: "mittel", thema: "Hinzurechnungsbesteuerung", befund: "Hinzurechnungsbesteuerung nur gelegentlich", fundstelle: "T2" },
  "istr:fall:istr4-transfer-grundschema": { stufe: "hoch", thema: "Grundschema IStR mit § 7 AStG als Nebenprüfpunkt", befund: "Methodik", fundstelle: "T2" },
};

/* --------------------------------------------------------------------------
   Auswertung
   -------------------------------------------------------------------------- */
const STANDARD = {
  stufe: "selten",
  thema: "Nicht in den Häufigkeitstabellen der Auswertungen",
  befund: "Im Untersuchungszeitraum 2013–2024 nicht als eigener Prüfungsschwerpunkt belegt",
  fundstelle: "T1/T2/T3",
};

const RANG = { hoch: 3, mittel: 2, selten: 1 };

/* Der Bilanz-Tag prüft in Teil II und III auch Personengesellschaften und
   Umwandlungen; deshalb gelten dort zusätzlich die PersG-/UmwStG-Regeln.
   IStR-Aufgaben greifen auf die ESt-Dauerbrenner (§ 17, § 20) zu. */
const FACH_ERWEITERUNG = {
  bilanz: ["persg", "umwstg"],
  persg: ["umwstg"],
  istr: ["est"],
};

function titelVon(inhalt) {
  if (!inhalt) return "";
  if (typeof inhalt === "string") return inhalt;
  return [inhalt.title, inhalt.titel, inhalt.frage, inhalt.begriff, inhalt.name].filter((t) => typeof t === "string").join(" · ");
}

/* Bewertung eines Regeltreffers: Stufe zuerst; bei gleicher Stufe gewinnt der
   Treffer im Titel. Eine spezifische Regel (eng umrissenes Thema), die im
   Titel trifft, schlägt eine allgemeine Regel höherer Stufe, die nur über
   eine Norm in der Normenkette getroffen hat – so bleibt z. B. der
   Mietereinbau „mittel“, auch wenn seine Normkette AfA-Vorschriften nennt. */
function punkte(regel, imTitel) {
  let p = RANG[regel.stufe] * 10 + (imTitel ? 5 : 0);
  if (regel.spezifisch && imTitel) p += 20;
  return p;
}

/* Baut aus einem Inhaltsobjekt beliebiger Herkunft den Suchtext. Titel und
   Normen zählen; Fließtext (intro, Lösungen) bleibt bewusst außen vor, damit
   nicht jeder Nebensatz ein Thema auslöst. */
export function prioritaetsText(inhalt) {
  if (!inhalt) return "";
  if (typeof inhalt === "string") return inhalt;
  const teile = [
    inhalt.title, inhalt.titel, inhalt.name, inhalt.frage, inhalt.begriff,
    inhalt.law, inhalt.norm, inhalt.subtitle, inhalt.focus, inhalt.thema, inhalt.kategorie,
    inhalt.untertitel,
    ...(inhalt.normchain || []), ...(inhalt.normen || []), ...(inhalt.themen || []),
    ...(inhalt.tags || []),
  ];
  if (Array.isArray(inhalt.zeilen)) teile.push(...inhalt.zeilen);
  return teile.filter((t) => typeof t === "string" && t.length > 0).join(" · ");
}

function trifft(muster, text) {
  return muster.some((m) => (m instanceof RegExp ? m.test(text) : text.toLowerCase().includes(String(m).toLowerCase())));
}

/**
 * Ermittelt die Examenspriorität eines Inhalts.
 * @param {string} fach   Schlüssel aus PRIORITAET_FAECHER
 * @param {object|string} inhalt Inhaltsobjekt (title/law/normchain …) oder Text
 * @param {object} [opt]  { typ, id } für Überschreibungen
 * @returns {{stufe, emoji, label, kurz, thema, befund, fundstelle, treffer}}
 */
export function prioritaetFuer(fach, inhalt, opt = {}) {
  const text = prioritaetsText(inhalt);
  const titel = titelVon(inhalt);
  const schluessel = opt.typ != null && opt.id != null ? `${fach}:${opt.typ}:${opt.id}` : null;
  const manuell = schluessel ? PRIORITAET_UEBERSCHREIBUNGEN[schluessel] : null;
  const faecher = new Set(["*", fach, ...(FACH_ERWEITERUNG[fach] || [])]);

  let best = null;
  let bestPunkte = -1;
  const treffer = [];
  for (const regel of PRIORITAET_REGELN) {
    if (!faecher.has(regel.fach)) continue;
    if (!trifft(regel.muster, text)) continue;
    treffer.push(regel);
    /* Eigene Fachregeln vor Methodik-Regeln vor Regeln der Nachbarfächer. */
    const bonus = regel.fach === fach ? 1 : regel.fach === "*" ? 0 : -2;
    const pkt = punkte(regel, trifft(regel.muster, titel)) + bonus;
    if (pkt > bestPunkte) { best = regel; bestPunkte = pkt; }
  }
  const quelle = manuell || best || STANDARD;
  const p = PRIORITAETEN[quelle.stufe] || PRIORITAETEN.selten;
  return {
    stufe: p.stufe,
    emoji: p.emoji,
    label: p.label,
    kurz: p.kurz,
    thema: quelle.thema,
    befund: quelle.befund,
    fundstelle: quelle.fundstelle,
    manuell: Boolean(manuell),
    treffer: treffer.map((t) => t.thema),
  };
}

/* Kurzform für Normen (Normketten, Normenregister): Der Normtext allein
   entscheidet. */
export function prioritaetFuerNorm(fach, norm) {
  return prioritaetFuer(fach, String(norm));
}

/* Höchste Stufe aus mehreren Inhalten – z. B. für eine Hausaufgabe mit
   mehreren Fällen oder eine Lernwoche mit mehreren Modulen. */
export function hoechstePrioritaet(liste) {
  return liste.reduce((best, p) => (!best || RANG[p.stufe] > RANG[best.stufe] ? p : best), null) || {
    ...PRIORITAETEN.selten, thema: STANDARD.thema, befund: STANDARD.befund, fundstelle: STANDARD.fundstelle,
  };
}


/* Die Häufigkeitstabellen der Auswertungen, fachweise – für Cockpit-Übersichten,
   die noch quellenlosen Campusse (ESt, GewSt) und die Dokumentation. */
export const PRIORITAET_TABELLEN = {
  ao: {
    titel: "Abgabenordnung · 2013–2023 (11 Klausuren)", quelle: "T1",
    zeilen: [
      { stufe: "hoch", thema: "Bekanntgabe / Wirksamkeit des VA", haeufigkeit: "Prüfungsschritt 11/11, vertieft 9/11", hinweis: "absoluter Automatismus" },
      { stufe: "hoch", thema: "Fristen: Beginn, Dauer, Ende", haeufigkeit: "10/11", hinweis: "Einspruchs-, Festsetzungs-, Wiedereinsetzungsfrist" },
      { stufe: "hoch", thema: "Einspruch §§ 347 ff. AO", haeufigkeit: "9/11", hinweis: "teils 5–25 Punkte" },
      { stufe: "hoch", thema: "Korrekturvorschriften", haeufigkeit: "mind. eine in 9/11", hinweis: "Normwahl trainieren" },
      { stufe: "hoch", thema: "§ 172 AO schlichte Änderung", haeufigkeit: "6/11", hinweis: "häufige Negativabgrenzung" },
      { stufe: "hoch", thema: "§ 173 AO neue Tatsachen", haeufigkeit: "mehrere Jahrgänge, intensiv", hinweis: "zentrale Änderungsnorm" },
      { stufe: "hoch", thema: "§ 171 Abs. 4 AO Außenprüfung", haeufigkeit: "5 Klausuren", hinweis: "wichtigste Ablaufhemmung" },
      { stufe: "mittel", thema: "§ 164 AO Vorbehalt der Nachprüfung", haeufigkeit: "4 Jahre", hinweis: "dann 4–13 Punkte" },
      { stufe: "mittel", thema: "§ 177 AO Saldierung", haeufigkeit: "3-mal", hinweis: "" },
      { stufe: "mittel", thema: "§ 175 Abs. 1 Nr. 1 AO", haeufigkeit: "2-mal", hinweis: "" },
      { stufe: "selten", thema: "Haftung, § 165, § 167, § 174, § 176 AO", haeufigkeit: "Exoten", hinweis: "ab 2021 mehr Exoteneinschläge" },
      { stufe: "selten", thema: "Vollstreckung §§ 249 ff. AO", haeufigkeit: "erst 2022", hinweis: "Fünf-Punkte-Fall" },
    ],
  },
  ust: {
    titel: "Umsatzsteuer · 2013–2023 (11 Klausuren)", quelle: "T1",
    zeilen: [
      { stufe: "hoch", thema: "Innergemeinschaftlicher Erwerb § 1a + Ort § 3d", haeufigkeit: "11/11", hinweis: "" },
      { stufe: "hoch", thema: "Reverse Charge § 13b", haeufigkeit: "10/11", hinweis: "" },
      { stufe: "hoch", thema: "Vorsteuerberichtigung § 15a", haeufigkeit: "10/11", hinweis: "" },
      { stufe: "hoch", thema: "Option § 9", haeufigkeit: "9/11", hinweis: "" },
      { stufe: "hoch", thema: "Reihengeschäft", haeufigkeit: "8/11", hinweis: "" },
      { stufe: "hoch", thema: "Vermietung § 4 Nr. 12", haeufigkeit: "8/11", hinweis: "" },
      { stufe: "hoch", thema: "Geschäftsveräußerung im Ganzen", haeufigkeit: "7/11", hinweis: "" },
      { stufe: "hoch", thema: "Lieferung / sonstige Leistung / Leistungsort / Vorsteuer § 15", haeufigkeit: "nahezu jährlich", hinweis: "" },
      { stufe: "mittel", thema: "Grundstücksumsätze § 4 Nr. 9a", haeufigkeit: "6/11", hinweis: "" },
      { stufe: "mittel", thema: "Innergemeinschaftliche Lieferung § 6a", haeufigkeit: "5/11", hinweis: "" },
      { stufe: "mittel", thema: "Differenzbesteuerung § 25a", haeufigkeit: "2-mal", hinweis: "5 bzw. 15 Punkte" },
      { stufe: "mittel", thema: "Kleinunternehmer § 19", haeufigkeit: "2-mal", hinweis: "10 bzw. 6 Punkte" },
      { stufe: "mittel", thema: "Durchschnittssätze LuF § 24", haeufigkeit: "1-mal", hinweis: "7 Punkte" },
      { stufe: "selten", thema: "Dreiecksgeschäft, Ist-Versteuerung, Ausfuhr, Reise, Beförderung, Fernverkauf, Verfahren", haeufigkeit: "sehr selten", hinweis: "zweite Runde" },
    ],
  },
  erbst: {
    titel: "Erbschaftsteuer / Bewertung · 2013–2023 (11 Klausuren)", quelle: "T1",
    zeilen: [
      { stufe: "hoch", thema: "Bewertung / Übertragung von Betriebsvermögen", haeufigkeit: "11/11", hinweis: "7–24 Punkte je Jahr" },
      { stufe: "hoch", thema: "Steuerpflicht, Erwerb, Steuerklasse, Steuerschuldner, Stichtag", haeufigkeit: "nahezu stereotyp", hinweis: "" },
      { stufe: "mittel", thema: "Grundvermögen", haeufigkeit: "6/11", hinweis: "teilweise 7–9 Punkte" },
      { stufe: "mittel", thema: "Übriges Vermögen (Bankguthaben, Hausrat, Versicherung)", haeufigkeit: "8/11", hinweis: "deutlich kleiner bepunktet" },
      { stufe: "mittel", thema: "Frühere Erwerbe § 14, ausländische ErbSt, § 19a", haeufigkeit: "selten", hinweis: "" },
      { stufe: "selten", thema: "Vor-/Nacherbschaft, Zugewinn, Zweckzuwendung, mehrfacher Erwerb, Stundung, Anzeigepflichten", haeufigkeit: "0-mal", hinweis: "" },
    ],
  },
  est: {
    titel: "Einkommensteuer · 2013–2024 (12 Klausuren, ~60 Punkte je Klausur)", quelle: "T2",
    zeilen: [
      { stufe: "hoch", thema: "§ 20 EStG Kapitalvermögen", haeufigkeit: "12/12", hinweis: "Dividenden 10/12, Sparer-Pauschbetrag 9/12, § 32d 9/12" },
      { stufe: "hoch", thema: "§ 17 EStG Anteilsveräußerung", haeufigkeit: "11/12", hinweis: "Teileinkünfteverfahren" },
      { stufe: "hoch", thema: "Internationales Steuerrecht", haeufigkeit: "11/12", hinweis: "7–40 Punkte, Ø 13,75" },
      { stufe: "hoch", thema: "Betriebsveräußerung § 16", haeufigkeit: "7/12", hinweis: "Betriebsaufgabe 5/12" },
      { stufe: "mittel", thema: "Betriebsaufspaltung", haeufigkeit: "5/12", hinweis: "6–9 Punkte" },
      { stufe: "mittel", thema: "§ 15a EStG", haeufigkeit: "5/12", hinweis: "3–9 Punkte" },
      { stufe: "mittel", thema: "Pkw / 1-%-Methode", haeufigkeit: "5/12", hinweis: "" },
      { stufe: "mittel", thema: "§ 23 EStG private Veräußerungsgeschäfte", haeufigkeit: "6/12", hinweis: "meist nur ca. 2 Punkte" },
      { stufe: "mittel", thema: "Lohnsteuerkomplex", haeufigkeit: "1-mal", hinweis: "13 Punkte – gefährlicher Exot" },
      { stufe: "selten", thema: "§ 6a, § 6b, Realteilung, InvStG", haeufigkeit: "je 1-mal", hinweis: "Übergangsgewinn, § 6 Abs. 5 je 2-mal" },
      { stufe: "selten", thema: "Zins-/Lizenzschranke, § 6 Abs. 3, LuF, § 34a, § 35, Splitting, Betriebsverpachtung", haeufigkeit: "0-mal", hinweis: "" },
    ],
  },
  gewst: {
    titel: "Gewerbesteuer · 2013–2024 (12 Klausuren, ~16 Punkte je Klausur)", quelle: "T2",
    zeilen: [
      { stufe: "hoch", thema: "Hinzurechnungen § 8 / Kürzungen § 9", haeufigkeit: "12/12", hinweis: "in keiner Klausur gefehlt" },
      { stufe: "hoch", thema: "Miet-/Pachtzinsen bewegliche WG § 8 Nr. 1d", haeufigkeit: "9/12", hinweis: "" },
      { stufe: "hoch", thema: "Steuermessbetrag § 11", haeufigkeit: "9/12", hinweis: "Freibetrag 7/12" },
      { stufe: "hoch", thema: "Schachteldividenden § 9 Nr. 2a", haeufigkeit: "7/12", hinweis: "" },
      { stufe: "hoch", thema: "Grundbesitzkürzung § 9 Nr. 1 S. 1", haeufigkeit: "6/12", hinweis: "" },
      { stufe: "hoch", thema: "Zinsen § 8 Nr. 1a, unbewegliche Mieten, § 8 Nr. 5", haeufigkeit: "je 5/12", hinweis: "" },
      { stufe: "mittel", thema: "Verlustabzug § 10a", haeufigkeit: "5/12", hinweis: "häufig 3–9 Punkte" },
      { stufe: "mittel", thema: "Gewerbesteuerliche Organschaft", haeufigkeit: "1-mal", hinweis: "" },
      { stufe: "selten", thema: "Zerlegung §§ 28–31", haeufigkeit: "0-mal", hinweis: "in 12 Jahren kein einziges Mal" },
      { stufe: "selten", thema: "Befreiungen § 3, internationale Kürzungen", haeufigkeit: "0-mal", hinweis: "" },
    ],
  },
  kst: {
    titel: "Körperschaftsteuer · 2013–2024 (12 Klausuren, ~24 Punkte je Klausur)", quelle: "T2",
    zeilen: [
      { stufe: "hoch", thema: "§ 8b KStG", haeufigkeit: "12/12", hinweis: "" },
      { stufe: "hoch", thema: "vGA § 8 Abs. 3 S. 2", haeufigkeit: "11/12", hinweis: "" },
      { stufe: "hoch", thema: "Einkommensermittlung § 8", haeufigkeit: "praktisch jährlich", hinweis: "" },
      { stufe: "hoch", thema: "Steuerliches Einlagekonto § 27", haeufigkeit: "9/12", hinweis: "" },
      { stufe: "hoch", thema: "Verdeckte Einlage", haeufigkeit: "7/12", hinweis: "" },
      { stufe: "mittel", thema: "Organschaft §§ 14–17", haeufigkeit: "3-mal", hinweis: "11, 13 und 4 Punkte" },
      { stufe: "mittel", thema: "§ 8c KStG", haeufigkeit: "1-mal", hinweis: "11 Punkte – gefährlicher Exot" },
      { stufe: "selten", thema: "§ 1a Optionsmodell, § 8a Zinsschranke, § 8d, § 11 Liquidation", haeufigkeit: "0-mal", hinweis: "" },
    ],
  },
  istr: {
    titel: "Internationales Steuerrecht · 2013–2024 (12 Klausuren)", quelle: "T2",
    zeilen: [
      { stufe: "hoch", thema: "IStR-Teilaufgabe insgesamt", haeufigkeit: "11/12 (alle Jahre außer 2018)", hinweis: "7–40 Punkte, Ø 13,75" },
      { stufe: "hoch", thema: "unbeschränkt/beschränkt → § 49/§ 50 → DBA → Art. 4 → Art. 5 → Verteilung → Methode → § 32b", haeufigkeit: "Standardkette", hinweis: "aktiv trainieren" },
      { stufe: "hoch", thema: "Wegzugsbesteuerung § 6 AStG", haeufigkeit: "AStG-Schwerpunkt", hinweis: "" },
      { stufe: "mittel", thema: "Hinzurechnungsbesteuerung §§ 7 ff. AStG", haeufigkeit: "gelegentlich", hinweis: "" },
    ],
  },
  bilanz: {
    titel: "Bilanzwesen · 2013–2024 (12 Klausuren; Teil I EU ~38, Teil II PersG ~33, Teil III KapG ~29 Punkte)", quelle: "T3",
    zeilen: [
      { stufe: "hoch", thema: "Grundstücke / Gebäude", haeufigkeit: "11/12", hinweis: "" },
      { stufe: "hoch", thema: "§ 6b-Rücklage", haeufigkeit: "11/12", hinweis: "" },
      { stufe: "hoch", thema: "§ 9b USt in AK/HK", haeufigkeit: "11/12", hinweis: "" },
      { stufe: "hoch", thema: "Rückstellungen", haeufigkeit: "10/12", hinweis: "" },
      { stufe: "hoch", thema: "AfA / Gebäude-AfA", haeufigkeit: "nahezu jährlich", hinweis: "" },
      { stufe: "hoch", thema: "vGA / vE (KapG-Teil)", haeufigkeit: "10/12", hinweis: "bis 10 Punkte, zuletzt steigend; nachträgliche AK bei vE seit 2019 fast jährlich" },
      { stufe: "hoch", thema: "Steuerliches Einlagekonto § 27", haeufigkeit: "6/12, seit 2021 jährlich", hinweis: "" },
      { stufe: "mittel", thema: "Rechnungsabgrenzungsposten", haeufigkeit: "7/12", hinweis: "" },
      { stufe: "mittel", thema: "Beteiligung an PersG / Spiegelbildmethode", haeufigkeit: "4/12", hinweis: "Ø rund 9 Punkte" },
      { stufe: "mittel", thema: "§ 8b KStG am Bilanz-Tag", haeufigkeit: "4/12", hinweis: "an Tag 2 aber 12/12" },
      { stufe: "mittel", thema: "Mietereinbauten", haeufigkeit: "2-mal", hinweis: "9 bzw. 13 Punkte" },
      { stufe: "mittel", thema: "Leasing", haeufigkeit: "1-mal", hinweis: "9 Punkte" },
      { stufe: "mittel", thema: "GWG, Disagio", haeufigkeit: "je 2-mal", hinweis: "Zuschüsse 1-mal" },
      { stufe: "selten", thema: "Bilanzänderung, Kommission, Mietkauf, Poolabschreibung, Zins-/Lizenzschranke, spezielle Rückstellungsarten", haeufigkeit: "0-mal", hinweis: "" },
    ],
  },
  persg: {
    titel: "Personengesellschaften am Bilanz-Tag · 2013–2024", quelle: "T3",
    zeilen: [
      { stufe: "hoch", thema: "Sonderbetriebsvermögen", haeufigkeit: "9/12", hinweis: "2–14 Punkte" },
      { stufe: "hoch", thema: "Ergänzungsbilanzen", haeufigkeit: "8/12", hinweis: "2–15 Punkte" },
      { stufe: "hoch", thema: "§ 24 UmwStG", haeufigkeit: "Tag 2+3: 8/12 Jahre", hinweis: "10, 23 und 39 Punkte" },
      { stufe: "mittel", thema: "§ 6 Abs. 5 EStG", haeufigkeit: "5/12", hinweis: "" },
      { stufe: "mittel", thema: "Ausscheiden / Realteilung", haeufigkeit: "3/12", hinweis: "11, 18 und 23 Punkte – gefährlicher Exot" },
      { stufe: "mittel", thema: "§ 15a EStG", haeufigkeit: "5/12 (ESt-Tag)", hinweis: "3–9 Punkte" },
    ],
  },
  umwstg: {
    titel: "Umwandlungssteuerrecht · Tag 2 und 3 zusammen · 2013–2024", quelle: "T3",
    zeilen: [
      { stufe: "hoch", thema: "UmwStG insgesamt", haeufigkeit: "8/12 Jahre", hinweis: "teilweise 20–40 Punkte" },
      { stufe: "hoch", thema: "§ 24 Einbringung in PersG", haeufigkeit: "3-mal", hinweis: "10, 23, 39 Punkte" },
      { stufe: "hoch", thema: "§§ 20–23 Einbringung in KapG / Anteilstausch", haeufigkeit: "2024 kompletter Teil", hinweis: "32 Punkte" },
      { stufe: "hoch", thema: "Verschmelzung §§ 11–13", haeufigkeit: "1-mal", hinweis: "22 Punkte" },
      { stufe: "mittel", thema: "Formwechsel / Umwandlung am ESt-Tag", haeufigkeit: "regelmäßig", hinweis: "4–11 Punkte" },
    ],
  },
};

/* Verteilung 60 / 25 / 15 für Legende und Lernplan. */
export const PRIORITAET_LERNZEIT = { hoch: 60, mittel: 25, selten: 15 };

/* Die aus den Auswertungen abgeleiteten Verbund-Prüfungsschemata, die
   „ohne Nachdenken“ abrufbar sein sollen. */
export const PRIORITAET_KETTEN = [
  { fach: "ao", titel: "Steuerbescheid als Kette", kette: "Adressat → Bekanntgabe → Fristbeginn → Fristende → Einspruch zulässig? → Wiedereinsetzung? → Begründetheit/Korrektur?" },
  { fach: "ust", titel: "Immobiliensachverhalt", kette: "Vermietung/Verkauf → § 4 Befreiung → § 9 Option → § 15 Vorsteuer → Nutzungsänderung → § 15a → ggf. GiG → ggf. § 13b" },
  { fach: "erbst", titel: "Betriebsvermögen", kette: "Betriebsvermögen feststellen → Stichtag/Zurechnung → gemeiner Wert → Substanzwert → ggf. vereinfachtes Ertragswertverfahren → Steuerwert → Bereicherung" },
  { fach: "istr", titel: "Internationales Steuerrecht", kette: "unbeschränkt/beschränkt → § 49/§ 50 → DBA anwendbar? → Ansässigkeit Art. 4 → Betriebsstätte Art. 5 → Verteilungsartikel → Methodenartikel → Progressionsvorbehalt" },
  { fach: "gewst", titel: "Gewerbesteuer", kette: "Gewinn ESt/KSt → § 7 Gewerbeertrag → § 8 Hinzurechnungen → § 9 Kürzungen → § 10a → Freibetrag → § 11 Messbetrag" },
  { fach: "kst", titel: "Körperschaftsteuer", kette: "Steuerbilanzgewinn → außerbilanzielle Korrekturen → vGA/vE → § 8b Beteiligungserträge → § 27 Einlagekonto" },
  { fach: "bilanz", titel: "Bilanz-Tag", kette: "Handelsbilanz → Steuerbilanz → Ansatz → Bewertung → Differenz → Buchung/Korrektur → Gewinnauswirkung" },
  { fach: "umwstg", titel: "Umwandlungssteuerrecht", kette: "§ 24 Einbringung in PersG → §§ 20 ff. Einbringung in KapG → § 22 Einbringungsgewinn I/II → Verschmelzung → Anteilstausch" },
];

/* Die „gefährlichen Exoten“: selten, aber wenn geprüft, dann punktestark. */
export const PRIORITAET_GEFAEHRLICHE_EXOTEN = [
  { fach: "ust", thema: "Differenzbesteuerung § 25a UStG", haeufigkeit: "2-mal", punkte: "bis 15 P." },
  { fach: "ust", thema: "Kleinunternehmer § 19 UStG", haeufigkeit: "2-mal", punkte: "bis 10 P." },
  { fach: "est", thema: "Lohnsteuerkomplex", haeufigkeit: "1-mal", punkte: "13 P." },
  { fach: "kst", thema: "§ 8c KStG", haeufigkeit: "1-mal", punkte: "11 P." },
  { fach: "kst", thema: "Organschaft §§ 14–17 KStG", haeufigkeit: "3-mal", punkte: "bis 13 P." },
  { fach: "bilanz", thema: "Mietereinbauten", haeufigkeit: "2-mal", punkte: "9 / 13 P." },
  { fach: "persg", thema: "Ausscheiden / Realteilung", haeufigkeit: "3-mal", punkte: "11 / 18 / 23 P." },
  { fach: "umwstg", thema: "Umwandlung (§§ 20–24, 11–13 UmwStG)", haeufigkeit: "nicht jährlich", punkte: "teilweise 20–39 P." },
];

export default prioritaetFuer;
