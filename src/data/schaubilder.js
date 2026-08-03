/* Schaubilder als Daten. Der Renderer liegt in components/Schaubild.jsx. */

const schaubilder = {
  /* ------------------------------------------------------------ Aufbau */
  abba: {
    typ: "fluss",
    titel: "Das ABBA-Schema",
    schritte: [
      { nummer: "A I", titel: "Zurechnung", zeilen: ["WER bilanziert?", "§ 39 AO"], ton: "rot" },
      { nummer: "A II", titel: "Zuordnung", zeilen: ["WAS ist es?", "AV / UV, abnutzbar?"], ton: "rot" },
      { nummer: "B I–II", titel: "Bewertung", zeilen: ["WIE VIEL?", "Maßstab, AK / HK"], ton: "orange" },
      { nummer: "B III–IV", titel: "Fortführung", zeilen: ["Wertansatz 31.12.", "HB und StB getrennt"], ton: "orange" },
    ],
    legende: "Ansatz – Ansatz – Bewertung – Bewertung. Erst danach folgen Bilanzposten, Buchung und Gewinnauswirkung. Die Reihenfolge ist in jedem Einzelsachverhalt gleich; sie ersetzt das Suchen nach dem passenden Einstieg.",
  },
  buchungskreise: {
    typ: "fluss",
    titel: "Die drei Buchungskreise",
    schritte: [
      { titel: "alle Bereiche", zeilen: ["HB = StB", "Regelfall"], ton: "tinte" },
      { titel: "nur Handelsbilanz", zeilen: ["z. B. Drohverlust-", "rückstellung"], ton: "gruen" },
      { titel: "nur Steuerbilanz", zeilen: ["z. B. Sonder-AfA", "§ 7g Abs. 5 EStG"], ton: "rot" },
    ],
    legende: "Jeder Buchungssatz braucht ein Etikett. Wer den Bereich nicht angibt, verschenkt die technisch sichersten Punkte der Klausur.",
  },
  massgeblichkeit: {
    typ: "stufen",
    titel: "Maßgeblichkeit und ihre Durchbrechungen",
    stufen: [
      { stufe: "1", text: "Handelsrechtlicher Ansatz nach GoB", norm: "§§ 246 ff. HGB", ton: "gruen", ergebnis: "Ausgangswert" },
      { stufe: "2", text: "Maßgeblichkeit für die Steuerbilanz", norm: "§ 5 Abs. 1 S. 1 Hs. 1 EStG", ton: "tinte", ergebnis: "Übernahme" },
      { stufe: "3", text: "Steuerlicher Ansatzvorbehalt bricht die Maßgeblichkeit", norm: "§ 5 Abs. 2, 4a, 6 EStG", ton: "rot", ergebnis: "Abweichung" },
      { stufe: "4", text: "Steuerliches Wahlrecht: eigenständig ausübbar, Verzeichnis führen", norm: "§ 5 Abs. 1 S. 1 Hs. 2, S. 2, 3 EStG", ton: "orange", ergebnis: "Abweichung" },
    ],
    legende: "Die Steuerbilanz beginnt handelsrechtlich und endet steuerrechtlich. Jede Abweichung braucht eine ausdrückliche Norm.",
  },
  klausurzeit: {
    typ: "saeulen",
    titel: "Zeitbudget nach Punkten (3,6 Minuten je Punkt)",
    werte: [
      { label: ["10 Punkte"], wert: 36, anzeige: "36 Min." },
      { label: ["15 Punkte"], wert: 54, anzeige: "54 Min." },
      { label: ["25 Punkte"], wert: 90, anzeige: "90 Min." },
      { label: ["30 Punkte"], wert: 108, anzeige: "1:48 Std." },
      { label: ["Reserve"], wert: 30, anzeige: "30 Min.", ton: "orange" },
    ],
    fussnote: "360 Minuten Bearbeitungszeit für 100 Punkte. Rund 30 Minuten Reserve für Lesen, Gliederung und Endkontrolle einplanen.",
  },

  /* ----------------------------------------------------------- Aktivseite */
  zurechnung: {
    typ: "entscheidung",
    titel: "Zurechnung eines Wirtschaftsguts",
    ebenen: [
      { frage: "Wer ist zivilrechtlicher Eigentümer?", hinweis: "§ 39 Abs. 1 AO – Grundfall", zweig: "Zurechnung beim Eigentümer", zweigTon: "gruen", zweigLabel: "Regel", weiterLabel: "aber: abweichende Herrschaft?" },
      { frage: "Übt ein anderer die tatsächliche Herrschaft aus?", hinweis: "Besitz, Gefahr, Nutzen, Lasten", zweig: "wirtschaftliches Eigentum", zweigTon: "rot", zweigLabel: "§ 39 II Nr. 1", weiterLabel: "Sonderfälle prüfen" },
      { frage: "Eigentumsvorbehalt, Sicherung, Leasing, Treuhand, Miete?", hinweis: "Miete begründet NIE Eigentum", zweig: "Einzelerlass beachten", zweigTon: "orange", zweigLabel: "BMF" },
    ],
    legende: "Der Eigentumsvorbehalt dient nur der Kreditsicherung und hindert das wirtschaftliche Eigentum nicht. Ein Mietverhältnis begründet dagegen weder zivilrechtliches noch wirtschaftliches Eigentum.",
  },
  grundstuecke: {
    typ: "stufen",
    titel: "Grundstücksteile nach der Nutzung",
    stufen: [
      { stufe: "1", text: "eigene Wohnzwecke", norm: "", ton: "rot", ergebnis: "notwendiges Privatvermögen" },
      { stufe: "2", text: "fremde Wohnzwecke", norm: "R 4.2 Abs. 9 EStR", ton: "orange", ergebnis: "gewillkürtes Betriebsvermögen" },
      { stufe: "3", text: "fremdbetrieblich genutzt", norm: "R 4.2 Abs. 9 EStR", ton: "orange", ergebnis: "gewillkürtes Betriebsvermögen" },
      { stufe: "4", text: "eigenbetrieblich genutzt", norm: "Ausnahme R 4.2 Abs. 8 EStR, § 8 EStDV", ton: "gruen", ergebnis: "notwendiges Betriebsvermögen" },
    ],
    legende: "Jeder unterschiedlich genutzte Gebäudeteil ist ein eigenes Wirtschaftsgut nach R 4.2 Abs. 3 S. 3 Nr. 5, Abs. 4 EStR; der anteilige Grund und Boden folgt der Nutzung des jeweiligen Gebäudeteils.",
  },
  akhk: {
    typ: "stufen",
    titel: "Aufbau der Anschaffungskosten",
    stufen: [
      { stufe: "+", text: "Anschaffungspreis (netto, wenn Vorsteuer abziehbar)", norm: "§ 255 Abs. 1 S. 1 HGB", ton: "tinte" },
      { stufe: "+", text: "Anschaffungsnebenkosten und Kosten der Betriebsbereitschaft", norm: "z. B. Fracht, Fundament, Zulassung", ton: "tinte" },
      { stufe: "+", text: "nachträgliche Anschaffungskosten", norm: "§ 255 Abs. 1 S. 2 HGB", ton: "tinte" },
      { stufe: "./.", text: "Anschaffungspreisminderungen: Rabatt, Skonto, Bonus, Zuschuss", norm: "§ 255 Abs. 1 S. 3 HGB", ton: "rot" },
      { stufe: "=", text: "Anschaffungskosten als Bewertungsobergrenze", norm: "§ 6 Abs. 1 Nr. 1 EStG", ton: "gruen" },
    ],
    legende: "Nicht aktivierbar sind Gemeinkosten der Beschaffung, Finanzierungskosten und Aufwendungen, die nicht der Betriebsbereitschaft dienen (z. B. Mitarbeiterschulung).",
  },
  gwg: {
    typ: "entscheidung",
    titel: "Geringwertige Wirtschaftsgüter und Sammelposten",
    ebenen: [
      { frage: "AK/HK netto bis 250 €?", hinweis: "beweglich, abnutzbar, selbständig nutzbar", zweig: "Sofortabzug", zweigTon: "gruen", zweigLabel: "R 6.13 EStR", weiterLabel: "nein" },
      { frage: "AK/HK netto bis 800 €?", hinweis: "Aufzeichnungspflicht beachten", zweig: "Sofortabschreibung § 6 II", zweigTon: "tinte", zweigLabel: "Wahlrecht", weiterLabel: "nein" },
      { frage: "AK/HK netto bis 1.000 €?", hinweis: "einheitliches Wahlrecht für das ganze Jahr", zweig: "Sammelposten, 5 Jahre", zweigTon: "orange", zweigLabel: "§ 6 Abs. 2a" },
    ],
    legende: "Die Wahlrechte gelten nur steuerlich; handelsrechtlich ist über die Nutzungsdauer abzuschreiben, wobei Unwesentliches aus Vereinfachungsgründen ebenfalls sofort erfasst werden darf.",
  },
  gebaeudeAfa: {
    typ: "saeulen",
    titel: "Gebäude-AfA nach § 7 Abs. 4, 5a EStG",
    werte: [
      { label: ["Betriebsgebäude", "Bauantrag ab 31.3.1985"], wert: 3, anzeige: "3 %" },
      { label: ["Wohngebäude", "Fertigstellung ab 2023"], wert: 3, anzeige: "3 %", ton: "gruen" },
      { label: ["Wohngebäude", "1925 bis 2022"], wert: 2, anzeige: "2 %", ton: "gruen" },
      { label: ["Wohngebäude", "vor 1925"], wert: 2.5, anzeige: "2,5 %", ton: "gruen" },
      { label: ["degressiv Wohnbau", "§ 7 Abs. 5a EStG"], wert: 5, anzeige: "5 %", ton: "orange" },
    ],
    fussnote: "Kürzere tatsächliche Nutzungsdauer ist nach § 7 Abs. 4 S. 2 EStG nachweisbar. Die AfA beginnt mit Fertigstellung, im Erstjahr zeitanteilig.",
  },
  forderungEwbPwb: {
    typ: "stufen",
    titel: "Reihenfolge der Forderungsbewertung",
    stufen: [
      { stufe: "1", text: "Nennwert als Anschaffungskosten ansetzen", norm: "§ 255 Abs. 1 HGB", ton: "tinte" },
      { stufe: "2", text: "Einzelbewertung: zweifelhafte Forderungen einzeln abschreiben", norm: "§ 252 Abs. 1 Nr. 3 HGB", ton: "rot", ergebnis: "EWB" },
      { stufe: "3", text: "Umsatzsteuer bei Uneinbringlichkeit berichtigen", norm: "§ 17 Abs. 2 Nr. 1 UStG", ton: "orange" },
      { stufe: "4", text: "sichere und einzelberichtigte Forderungen aus der Basis herausnehmen", norm: "Stadt, Bund, EWB-Fälle", ton: "neutral" },
      { stufe: "5", text: "Restbestand auf netto umrechnen und Pauschalsatz anwenden", norm: "UStAE 17.1 Abs. 5 S. 9", ton: "gruen", ergebnis: "PWB" },
    ],
    legende: "Die Umsatzsteuer trägt kein Ausfallrisiko und bleibt deshalb außerhalb der Pauschalwertberichtigung. Ohne Nachweis akzeptiert die Verwaltung regelmäßig nur 1 %.",
  },
  vorraete: {
    typ: "gegenueber",
    titel: "Verbrauchsfolge bei Vorräten",
    links: { titel: "Handelsbilanz", norm: "§ 256 HGB", ton: "gruen", punkte: ["Durchschnittsmethode", "Lifo zulässig", "Fifo zulässig", "strenges Niederstwertprinzip (§ 253 Abs. 4)"] },
    rechts: { titel: "Steuerbilanz", norm: "§ 6 Abs. 1 Nr. 2a EStG", ton: "rot", punkte: ["Durchschnittsmethode", "Lifo zulässig", "Fifo unzulässig", "Teilwertabschreibung nur bei dauernder Minderung"] },
    fussnote: "Lifo setzt handelsrechtliche GoB-Konformität voraus; die einmal gewählte Methode ist stetig fortzuführen (§ 252 Abs. 1 Nr. 6 HGB).",
  },

  /* ---------------------------------------------------------- Passivseite */
  rueckstellungPruefung: {
    typ: "stufen",
    titel: "Prüfungsreihenfolge Rückstellung",
    stufen: [
      { stufe: "1", text: "Außenverpflichtung gegenüber einem Dritten", norm: "R 5.7 Abs. 2 Nr. 1 EStR", ton: "tinte" },
      { stufe: "2", text: "wirtschaftliche Verursachung vor dem Bilanzstichtag", norm: "R 5.7 Abs. 2 Nr. 2 EStR", ton: "tinte" },
      { stufe: "3", text: "Inanspruchnahme wahrscheinlich", norm: "R 5.7 Abs. 2 Nr. 3 EStR", ton: "tinte" },
      { stufe: "4", text: "keine Aktivierungspflicht als AK/HK", norm: "R 5.7 Abs. 2 Nr. 4 EStR", ton: "tinte" },
      { stufe: "5", text: "steuerliches Passivierungsverbot prüfen", norm: "§ 5 Abs. 4a, 4b EStG", ton: "rot", ergebnis: "Drohverlust: HB ja, StB nein" },
    ],
  },
  rueckstellungHbStb: {
    typ: "gegenueber",
    titel: "Bewertung von Rückstellungen",
    links: { titel: "Handelsbilanz", norm: "§ 253 Abs. 1 S. 2, Abs. 2 HGB", ton: "gruen", punkte: ["notwendiger Erfüllungsbetrag", "künftige Preissteigerungen einbeziehen", "Abzinsung ab Laufzeit über 1 Jahr", "Durchschnittszins der letzten 7 Jahre"] },
    rechts: { titel: "Steuerbilanz", norm: "§ 6 Abs. 1 Nr. 3a EStG", ton: "rot", punkte: ["Preisverhältnisse am Stichtag (Buchst. f)", "ratierliche Ansammlung (Buchst. d)", "Abzinsung mit 5,5 % (Buchst. e)", "Höchstwert: HB-Wert (R 6.11 Abs. 3 EStR)"] },
    fussnote: "Aufzinsen heißt multiplizieren, Abzinsen heißt dividieren. § 5 Abs. 6 EStG stellt klar, dass der steuerliche Bewertungsvorbehalt der Maßgeblichkeit vorgeht.",
  },
  arapZeitstrahl: {
    typ: "zeitstrahl",
    titel: "Aktiver Rechnungsabgrenzungsposten",
    marken: [
      { pos: 0.12, label: "Zahlung 12/2025", sub: ["Ausgabe vor dem Stichtag"], ton: "tinte" },
      { pos: 0.5, label: "31.12.2025", sub: ["ARAP bilden", "§ 250 Abs. 1 HGB"], ton: "rot" },
      { pos: 0.86, label: "Januar 2026", sub: ["Aufwand für bestimmte", "Zeit nach dem Stichtag"], ton: "gruen" },
    ],
    balken: [{ von: 0.12, bis: 0.5, label: "Aufwand 2025", ton: "neutral" }, { von: 0.5, bis: 0.95, label: "ARAP → Aufwand 2026", ton: "tinte" }],
    legende: "Vier Merkmale: Ausgabe vor dem Stichtag, Aufwand nach dem Stichtag, für eine bestimmte Zeit, Pflicht in HB und StB.",
  },
  prap: {
    typ: "gegenueber",
    titel: "ARAP und PRAP im Vergleich",
    links: { titel: "ARAP (aktiv)", norm: "§ 250 Abs. 1 HGB · § 5 Abs. 5 S. 1 Nr. 1 EStG", ton: "tinte", punkte: ["Ausgabe vor dem Stichtag", "Aufwand danach", "z. B. vorausgezahlte Miete, Disagio", "Auflösung mindert den Gewinn"] },
    rechts: { titel: "PRAP (passiv)", norm: "§ 250 Abs. 2 HGB · § 5 Abs. 5 S. 1 Nr. 2 EStG", ton: "orange", punkte: ["Einnahme vor dem Stichtag", "Ertrag danach", "z. B. im Voraus vereinnahmte Miete", "Auflösung erhöht den Gewinn"] },
    fussnote: "Beide setzen eine bestimmte Zeit nach dem Stichtag voraus. Fehlt die zeitliche Bestimmbarkeit, kommt nur eine Verbindlichkeit oder eine Anzahlung in Betracht.",
  },
  disagioLinear: {
    typ: "zeitstrahl",
    titel: "Disagio beim Fälligkeitsdarlehen",
    marken: [
      { pos: 0, label: "01/2025", sub: ["Auszahlung 190.000 €"], ton: "tinte" },
      { pos: 0.5, label: "Laufzeit 10 Jahre", sub: ["Kapital bleibt konstant"], ton: "neutral" },
      { pos: 1, label: "Tilgung in einer Summe", sub: ["200.000 €"], ton: "rot" },
    ],
    balken: [
      { von: 0, bis: 0.1, label: "1.000 €", ton: "orange" },
      { von: 0.1, bis: 0.2, label: "1.000 €", ton: "orange" },
      { von: 0.2, bis: 0.3, label: "1.000 €", ton: "orange" },
    ],
    legende: "Gleichbleibende Kapitalüberlassung führt zu gleichbleibendem Zinsaufwand: 10.000 € ÷ 10 Jahre = 1.000 € jährlich. ARAP zum 31.12.2025: 9.000 €.",
  },
  zinsstaffel: {
    typ: "saeulen",
    titel: "Zinsstaffel beim Tilgungsdarlehen (10 Raten, Nenner 55)",
    werte: [
      { label: ["2025", "10/55"], wert: 1818, anzeige: "1.818" },
      { label: ["2026", "9/55"], wert: 1636, anzeige: "1.636" },
      { label: ["2027", "8/55"], wert: 1455, anzeige: "1.455" },
      { label: ["2028", "7/55"], wert: 1273, anzeige: "1.273" },
      { label: ["2029", "6/55"], wert: 1091, anzeige: "1.091" },
      { label: ["…", "bis 1/55"], wert: 182, anzeige: "182", ton: "neutral" },
    ],
    fussnote: "Summe der Raten = n / 2 × (n + 1). Bei 10 Raten also 55, bei 30 Raten 465, bei 72 Monatsraten 2.628. Der Nenner bleibt über die gesamte Laufzeit unverändert.",
  },
  leasingBaum: {
    typ: "entscheidung",
    titel: "Zurechnung beim Vollamortisationsleasing (BMF vom 19.4.1971)",
    ebenen: [
      { frage: "Grundmietzeit unter 40 % oder über 90 % der Nutzungsdauer?", hinweis: "Vollamortisation vorausgesetzt", zweig: "Leasingnehmer aktiviert", zweigTon: "rot", zweigLabel: "ja", weiterLabel: "nein: 40–90 %" },
      { frage: "Vertrag ohne Option?", hinweis: "reiner Mietvertrag", zweig: "Leasinggeber aktiviert", zweigTon: "gruen", zweigLabel: "ja", weiterLabel: "nein: Option vereinbart" },
      { frage: "Kaufoption niedriger als der lineare Restbuchwert?", hinweis: "Ausübung wirtschaftlich zu erwarten", zweig: "Leasingnehmer aktiviert", zweigTon: "rot", zweigLabel: "ja" },
    ],
    legende: "Der Restbuchwert ist stets aus der linearen AfA abzuleiten, nicht aus dem Buchwert nach Sonderabschreibung. Bei Mietverlängerungsoptionen gilt der Vergleich mit der Anschlussmiete.",
  },
  pensionsRst: {
    typ: "gegenueber",
    titel: "Pensionsrückstellung",
    links: { titel: "Handelsbilanz", norm: "§ 253 Abs. 1, 2 HGB", ton: "gruen", punkte: ["Erfüllungsbetrag, Trend einbeziehen", "Durchschnittszins 10 Jahre", "versicherungsmathematisches Verfahren", "Ausschüttungssperre § 253 Abs. 6"] },
    rechts: { titel: "Steuerbilanz", norm: "§ 6a EStG", ton: "rot", punkte: ["Teilwertverfahren", "Zins zwingend 6 %", "Rechtsanspruch, Schriftform", "kein Vorbehalt der Minderung"] },
    fussnote: "Die steuerliche Rückstellung ist wegen des hohen Zinssatzes regelmäßig niedriger als die handelsrechtliche.",
  },

  /* ---------------------------------------------------------- Steuerlatenz */
  latenteSteuern: {
    typ: "entscheidung",
    titel: "Latente Steuern nach § 274 HGB",
    ebenen: [
      { frage: "Aktivposten: HB-Wert größer als StB-Wert?", hinweis: "künftige Steuerbelastung", zweig: "passive latente Steuern (Pflicht)", zweigTon: "rot", zweigLabel: "§ 274 I 1", weiterLabel: "andere Konstellation" },
      { frage: "Passivposten: HB-Wert größer als StB-Wert?", hinweis: "künftige Steuerentlastung", zweig: "aktive latente Steuern (Wahlrecht)", zweigTon: "gruen", zweigLabel: "§ 274 I 2", weiterLabel: "Abbau prüfen" },
      { frage: "Baut sich die Differenz künftig ab?", hinweis: "nur temporäre Differenzen", zweig: "sonst keine Latenz", zweigTon: "neutral", zweigLabel: "sonst" },
    ],
    legende: "Merkhilfe: Aktiva HB > StB → passiv. Passiva HB > StB → aktiv. Kleine Kapitalgesellschaften sind nach § 274a Nr. 4 HGB befreit.",
  },
  mehrWeniger: {
    typ: "stufen",
    titel: "Von der Handelsbilanz zum steuerlichen Einkommen",
    stufen: [
      { stufe: "1", text: "Jahresüberschuss der Handelsbilanz", norm: "§ 275 HGB", ton: "gruen" },
      { stufe: "2", text: "bilanzielle Korrekturen: abweichende Wertansätze der Steuerbilanz", norm: "§ 60 Abs. 2 EStDV", ton: "orange", ergebnis: "Mehr / Weniger" },
      { stufe: "3", text: "= steuerlicher Gewinn", norm: "§ 4 Abs. 1, § 5 EStG", ton: "tinte" },
      { stufe: "4", text: "außerbilanzielle Korrekturen: vGA, § 3 Nr. 40, § 3c, § 4 Abs. 5, § 10 KStG", norm: "außerhalb der Bilanz", ton: "rot", ergebnis: "Hinzurechnung / Kürzung" },
      { stufe: "5", text: "= Einkommen bzw. zu versteuernder Gewinn", norm: "§ 8 Abs. 1 KStG", ton: "gruen" },
    ],
    legende: "Bilanzielle Differenzen verändern den Bilanzansatz, außerbilanzielle Korrekturen nicht. Diese Trennung wird in den Musterlösungen gesondert bepunktet.",
  },
  bilanzberichtigung: {
    typ: "gegenueber",
    titel: "Bilanzberichtigung und Bilanzänderung",
    links: { titel: "Berichtigung", norm: "§ 4 Abs. 2 S. 1 EStG", ton: "rot", punkte: ["Bilanz ist fehlerhaft", "unzutreffender Ansatz oder Wert", "Pflicht zur Korrektur", "Grenze: Bestandskraft"] },
    rechts: { titel: "Änderung", norm: "§ 4 Abs. 2 S. 2 EStG", ton: "orange", punkte: ["Bilanz ist richtig", "anderes zulässiges Wahlrecht", "nur mit Zustimmung des Finanzamts", "nur im Umfang der Berichtigung"] },
    fussnote: "Ist der Fehler in der ältesten offenen Bilanz nicht mehr korrigierbar, wird er über den Grundsatz des formellen Bilanzenzusammenhangs erfolgswirksam in der ersten offenen Bilanz nachgeholt.",
  },

  /* ------------------------------------------------- Personengesellschaft */
  gesamtbilanz: {
    typ: "fluss",
    titel: "Die Gesamtbilanz der Mitunternehmerschaft",
    schritte: [
      { titel: "Gesamthandsbilanz", zeilen: ["Vermögen der", "Gesellschaft"], ton: "tinte" },
      { titel: "Ergänzungsbilanz", zeilen: ["gesellschafter-", "bezogene Mehrwerte"], ton: "orange" },
      { titel: "Sonderbilanz", zeilen: ["SBV I und II", "des Gesellschafters"], ton: "magenta" },
      { titel: "Gesamtgewinn", zeilen: ["§ 15 Abs. 1 S. 1", "Nr. 2 EStG"], ton: "gruen" },
    ],
    legende: "Erst die Addition aller drei Bereiche ergibt den steuerlichen Gewinn der Mitunternehmerschaft.",
  },
  sbv: {
    typ: "entscheidung",
    titel: "Sonderbetriebsvermögen",
    ebenen: [
      { frage: "Gehört das Wirtschaftsgut dem Mitunternehmer?", hinweis: "zivilrechtlich oder wirtschaftlich", zweig: "sonst Gesamthand oder Privat", zweigTon: "neutral", zweigLabel: "nein", weiterLabel: "ja" },
      { frage: "Dient es unmittelbar dem Betrieb der Gesellschaft?", hinweis: "z. B. vermietetes Grundstück", zweig: "Sonderbetriebsvermögen I", zweigTon: "rot", zweigLabel: "ja", weiterLabel: "nein" },
      { frage: "Stärkt es die Beteiligung des Gesellschafters?", hinweis: "z. B. Anteil an der Komplementär-GmbH", zweig: "Sonderbetriebsvermögen II", zweigTon: "orange", zweigLabel: "ja" },
    ],
    legende: "Notwendiges SBV ist zwingend zu erfassen; gewillkürtes SBV setzt eine dokumentierte Widmung voraus. Passives SBV (z. B. Refinanzierungsdarlehen) nicht vergessen.",
  },

  /* -------------------------------------------------- Kapitalgesellschaft */
  vga: {
    typ: "stufen",
    titel: "Prüfung der verdeckten Gewinnausschüttung",
    stufen: [
      { stufe: "1", text: "Vermögensminderung oder verhinderte Vermögensmehrung", norm: "§ 8 Abs. 3 S. 2 KStG", ton: "tinte" },
      { stufe: "2", text: "Auswirkung auf den Unterschiedsbetrag nach § 4 Abs. 1 S. 1 EStG", norm: "R 8.5 KStR", ton: "tinte" },
      { stufe: "3", text: "Veranlassung durch das Gesellschaftsverhältnis (Fremdvergleich)", norm: "beherrschender Gesellschafter: Vorabvereinbarung", ton: "rot" },
      { stufe: "4", text: "kein offener Gewinnverteilungsbeschluss", norm: "Abgrenzung zur oGA", ton: "orange" },
      { stufe: "5", text: "außerbilanzielle Hinzurechnung; beim Gesellschafter § 20 Abs. 1 Nr. 1 S. 2 EStG", norm: "Korrespondenz beachten", ton: "gruen", ergebnis: "Einkommen +" },
    ],
  },
  dividendeFluss: {
    typ: "fluss",
    titel: "Dividende im Betriebsvermögen eines Einzelunternehmers",
    schritte: [
      { titel: "Bruttodividende", zeilen: ["100.000 €", "§ 20 Abs. 1 Nr. 1 EStG"], ton: "tinte" },
      { titel: "Steuerabzug", zeilen: ["25 % KapESt + SolZ", "= 26.375 € Entnahme"], ton: "rot" },
      { titel: "keine Abgeltung", zeilen: ["§ 43 Abs. 5 S. 2 EStG", "gewerbliche Einkünfte"], ton: "orange" },
      { titel: "Teileinkünfte", zeilen: ["./. 40 % steuerfrei", "+ 40 % Ausgaben"], ton: "gruen" },
    ],
    legende: "Die einbehaltenen Steuern sind Privatsteuern nach § 12 Nr. 3 EStG und damit Entnahmen, keine Betriebsausgaben.",
  },
  einlagekonto: {
    typ: "stufen",
    titel: "Verwendungsreihenfolge nach § 27 KStG",
    stufen: [
      { stufe: "1", text: "ausschüttbarer Gewinn zum Schluss des Vorjahres ermitteln", norm: "§ 27 Abs. 1 S. 5 KStG", ton: "tinte" },
      { stufe: "2", text: "Leistung zuerst aus dem ausschüttbaren Gewinn", norm: "§ 27 Abs. 1 S. 3 KStG", ton: "orange" },
      { stufe: "3", text: "übersteigender Betrag mindert das steuerliche Einlagekonto", norm: "Einlagenrückgewähr", ton: "gruen" },
      { stufe: "4", text: "Bescheinigung und gesonderte Feststellung", norm: "§ 27 Abs. 2, 3 KStG", ton: "neutral" },
    ],
    legende: "Das steuerliche Einlagekonto ist kein Bilanzposten und nicht mit der handelsrechtlichen Kapitalrücklage identisch.",
  },
};

export default schaubilder;
