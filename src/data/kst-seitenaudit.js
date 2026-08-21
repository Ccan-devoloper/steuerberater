export const KST_SEITENAUDIT_STAND = "21.08.2026";

export const KST_SEITENAUDIT_METHODE =
  "Jede PDF-Seite wurde in vollständiger Seitenfolge visuell berücksichtigt. Bei bildbasierten Unterrichtsexporten wurden Wiederholungs-, Navigations- und Progressionsframes erst nach Sichtung als Wiederholung klassifiziert; fachlich neue oder veränderte Seiten wurden gegen die KSt-Module, Fälle, Schemata und Trainingsdaten im Repository abgeglichen.";

export const kstSeitenaudit = {
  "Notiz 08.07.2026": {
    pages: 18,
    auditedPages: 18,
    scope: "K2",
    result: "vollständig geprüft – kein fehlender eigenständiger K2-Inhalt",
    coverage: "Steuerpflicht, Einkommensermittlung/ADB, nichtabziehbare Aufwendungen und vGA.",
  },
  "Notiz 10.07.2026": {
    pages: 38,
    auditedPages: 38,
    scope: "K2",
    result: "vollständig geprüft – kein fehlender eigenständiger K2-Inhalt",
    coverage: "Verdeckte Einlage, Bewertung, Nutzungsvorteile, Beteiligungserträge/§ 8b und Dreiecksfälle.",
  },
  "Notiz 28.07.2026": {
    pages: 40,
    auditedPages: 40,
    scope: "K2",
    result: "vollständig geprüft – kein fehlender eigenständiger K2-Inhalt",
    coverage: "Gesellschafterdarlehen/vGA, § 8b, vE, § 27 und Beteiligungsveräußerungen.",
  },
  "Schema KStG": {
    pages: 5,
    auditedPages: 5,
    scope: "K2",
    result: "vollständig geprüft – abgedeckt",
    coverage: "vE/vGA, §§ 8c/8d und ertragsteuerliche Organschaft.",
  },
  "Schema Vereinsbesteuerung": {
    pages: 1,
    auditedPages: 1,
    scope: "K2",
    result: "vollständig geprüft – abgedeckt",
    coverage: "Vereinsbesteuerung, AO-Sphären und § 24 KStG.",
  },
  "Übungsfall Gründung KapG": {
    pages: 5,
    auditedPages: 5,
    scope: "K2",
    result: "vollständig geprüft – Fall vollständig abgedeckt",
    coverage: "Gründungsphasen, Kosten, Spenden/Bewirtung, Geschäftsführung und Wirtschaftsgut vom Gesellschafter.",
  },
  "Lösung Übungsfall Gründung KapG": {
    pages: 5,
    auditedPages: 5,
    scope: "K2",
    result: "vollständig geprüft – Lösung vollständig abgedeckt",
    coverage: "Musterlösung des Gründungsfalls einschließlich Schlussrechnung zum zvE.",
  },
  "KStG, 2. Einheit, Nöthen": {
    pages: 464,
    auditedPages: 464,
    scope: "K2",
    result: "vollständig geprüft – kein fehlender eigenständiger K2-Themenblock",
    coverage: "R 7.1 KStR, stille Beteiligung und Verlustschranken, Vereinsbesteuerung/Gemeinnützigkeit sowie vE-Bewertung und Gesellschafterfolgen.",
  },
  "KStG, 5. Einheit, Nöthen": {
    pages: 279,
    auditedPages: 279,
    scope: "K2",
    result: "vollständig geprüft – kein fehlender eigenständiger K2-Themenblock",
    coverage: "vGA-Bewertung/USt, § 27, eigene Anteile, § 8b, nahestehende Personen, beherrschender Gesellschafter, Geschäftsführervergütung, § 1a und Liquidation.",
  },
  "KStG, 6. Einheit, Nöthen": {
    pages: 449,
    auditedPages: 449,
    scope: "K2",
    result: "vollständig geprüft – kein fehlender eigenständiger K2-Themenblock",
    coverage: "Gründung/vGA-Einzelfälle, private Kfz-Nutzung, Pensionskomplex, §§ 8c/8d und Liquidation.",
  },
  "KStG, 7. Einheit": {
    pages: 522,
    auditedPages: 522,
    scope: "K2",
    result: "vollständig geprüft – kein fehlender eigenständiger K2-Themenblock",
    coverage: "Organschaft §§ 14–17 KStG, GAV, R 14.6, § 15-Bruttomethode, § 16, zwei Vollfälle sowie Mehr-/Minderabführungen, Beteiligungsbuchwert und § 27.",
  },
};

export const kstAusserhalbK2Audit = {
  "Notiz 30.07.2026": {
    pages: 16,
    auditedPages: 16,
    scope: "K3",
    result: "vollständig geprüft – richtigerweise nicht im K2/KSt-Campus",
    coverage: "Bilanz-/Rückstellungsstoff einschließlich Jubiläums-/Pensionsrückstellungen und weiterer Bilanzierungsfragen.",
  },
};

export const KST_SEITENAUDIT_SUMME_K2 = Object.values(kstSeitenaudit).reduce(
  (summe, quelle) => summe + quelle.auditedPages,
  0,
);

export const KST_SEITENAUDIT_SUMME_GESAMT = [
  ...Object.values(kstSeitenaudit),
  ...Object.values(kstAusserhalbK2Audit),
].reduce((summe, quelle) => summe + quelle.auditedPages, 0);

export function auditFuerQuelle(title) {
  return kstSeitenaudit[title] || kstAusserhalbK2Audit[title] || null;
}
