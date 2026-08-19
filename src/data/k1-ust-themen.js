/* Prüfungsorientierte Oberthemen für die K1-Umsatzsteuer.

   Die Gliederung folgt nicht den acht Kurseinheiten, sondern dem typischen
   umsatzsteuerlichen Prüfungsweg und der gesetzlichen Systematik des UStG:
   Steuerbarkeit/Leistung -> Befreiung/Steuersatz -> BMG/Steuer ->
   Steuerschuld/Rechnung -> Vorsteuer; EU- und Drittlandsfälle sowie
   Sondertatbestände werden als eigenständige Klausurblöcke geführt.

   Ein Lernmodul bekommt bewusst genau EIN primäres Oberthema. Das verhindert,
   dass Querschnittsmodule in mehreren Listen doppelt auftauchen. Die ursprüngliche
   Kurseinheit bleibt als Quellenmetadatum am Modul erhalten. */

export const k1UstOberthemen = [
  {
    id: "steuerbarkeit",
    label: "Steuerbarkeit & Unternehmer",
    kurz: "§§ 1–2 UStG",
    beschreibung: "Unternehmer, Unternehmen, Leistungsaustausch, Unternehmensbereich und die Grundmerkmale des steuerbaren Umsatzes.",
  },
  {
    id: "leistung-ort",
    label: "Leistungsart & Leistungsort",
    kurz: "§§ 3–3g UStG",
    beschreibung: "Lieferung, sonstige Leistung, Werkleistung/-lieferung, Haupt- und Nebenleistung sowie Liefer- und Leistungsorte.",
  },
  {
    id: "befreiung-steuersatz",
    label: "Steuerbefreiung, Option & Steuersatz",
    kurz: "§§ 4–9, 12 UStG",
    beschreibung: "Steuerbefreiungen, Grundstücksumsätze, Vermietung, Option zur Steuerpflicht und 0/7/19-Prozent-Systematik.",
  },
  {
    id: "bmg-entstehung",
    label: "Bemessungsgrundlage, Steuerentstehung & § 17",
    kurz: "§§ 10, 13, 16–17 UStG",
    beschreibung: "Entgelt, Tausch, Anzahlungen, Soll-/Istversteuerung, Steuerentstehung, VAZ und spätere Entgeltkorrekturen.",
  },
  {
    id: "rechnung-schuld",
    label: "Rechnung & Steuerschuldnerschaft",
    kurz: "§§ 13a–14c UStG",
    beschreibung: "Steuerschuldner, Reverse Charge, Rechnungsanforderungen sowie unrichtiger und unberechtigter Steuerausweis.",
  },
  {
    id: "eu",
    label: "EU-Warenverkehr & Reihengeschäfte",
    kurz: "§§ 1a, 3c–3d, 4b, 6a UStG",
    beschreibung: "Innergemeinschaftlicher Erwerb und Lieferung, Verbringen, Fernverkauf, Konsignationslager und Reihengeschäfte.",
  },
  {
    id: "drittland",
    label: "Drittland, Ausfuhr & Einfuhr",
    kurz: "§§ 5–8, 11 UStG",
    beschreibung: "Ausfuhrlieferungen, Einfuhr, Einfuhrumsatzsteuer und grenzüberschreitende Fälle mit Drittlandsbezug.",
  },
  {
    id: "vorsteuer",
    label: "Vorsteuer, Zuordnung & § 15a",
    kurz: "§§ 15–15a UStG",
    beschreibung: "Vorsteuerabzug, Ausschlüsse, Aufteilung und Zuordnung sowie Berichtigung des Vorsteuerabzugs.",
  },
  {
    id: "sonder",
    label: "Sondertatbestände & Unternehmensstruktur",
    kurz: "GiG · Organschaft · uWA · §§ 19 ff.",
    beschreibung: "Geschäftsveräußerung, Organschaft, Gesellschaften, unentgeltliche Wertabgaben, Kleinunternehmer und besondere Besteuerungsformen.",
  },
];

const textVon = (m) => [
  m?.title,
  m?.law,
  ...(m?.normchain || []),
].filter(Boolean).join(" ").toLowerCase();

const trifft = (text, muster) => muster.some((regex) => regex.test(text));

/* Priorität ist fachlich gewollt: Ein Reverse-Charge-Modul bleibt z.B. im
   Steuerschuld-Block, auch wenn seine Lösung anschließend Vorsteuer behandelt. */
const regeln = [
  ["sonder", [
    /geschäftsveräußer/, /\bgig\b/, /organschaft/, /gesellschaft/, /gründung/,
    /unentgeltlich/, /wertabgabe/, /eigenverbrauch/, /geschenk/, /kommission/,
    /kleinunternehm/, /§\s*19\b/, /§\s*24\b/, /§\s*25\b/, /§\s*25a\b/,
    /reiseleistung/, /differenzbesteuer/, /margenbesteuer/, /sicherungsübereign/,
  ]],
  ["rechnung-schuld", [
    /reverse charge/, /steuerschuld/, /§\s*13b\b/, /§\s*13a\b/,
    /§\s*14c\b/, /rechnung/, /§§?\s*14(?:a|b|c)?\b/,
  ]],
  ["eu", [
    /innergemeinschaft/, /i\.g\./, /reihengeschäft/, /fernverkauf/,
    /konsignationslager/, /§\s*1a\b/, /§\s*1b\b/, /§\s*3c\b/, /§\s*3d\b/,
    /§\s*4b\b/, /§\s*6a\b/, /§\s*6b\b/, /verbringen.*gemeinschaft/,
  ]],
  ["drittland", [
    /drittland/, /ausfuhr/, /einfuhr/, /einfuhrumsatzsteuer/, /\beust\b/,
    /§\s*5\b/, /§\s*6(?!a|b)\b/, /§\s*7\b/, /§\s*8\b/, /§\s*11\b/,
  ]],
  ["vorsteuer", [
    /vorsteuer/, /zuordnung/, /§\s*15a\b/, /§\s*15\b/, /berichtigung.*vorsteuer/,
  ]],
  ["bmg-entstehung", [
    /bemessungsgrund/, /entgelt/, /tausch/, /steuerentsteh/, /sollversteuer/,
    /istversteuer/, /anzahlung/, /teilleistung/, /§\s*10\b/, /§\s*13(?!a|b|c)\b/,
    /§\s*16\b/, /§\s*17\b/, /§\s*20\b/,
  ]],
  ["befreiung-steuersatz", [
    /steuerbefrei/, /steuerpflicht/, /steuersatz/, /option/, /vermiet/, /grundstück/,
    /§\s*4\b/, /§\s*9\b/, /§\s*12\b/,
  ]],
  ["leistung-ort", [
    /leistungsort/, /lieferort/, /lieferung/, /sonstige leistung/, /werkleistung/,
    /werklieferung/, /hauptleistung/, /nebenleistung/, /§\s*3(?:a|b|e|g)?\b/,
  ]],
  ["steuerbarkeit", [
    /steuerbar/, /unternehmer/, /unternehmen/, /leistungsaustausch/,
    /§\s*1\b/, /§\s*2\b/,
  ]],
];

export function k1UstOberthemaId(m) {
  if (!m || m.area === "Fall") return null;
  const text = textVon(m);
  const regel = regeln.find(([, muster]) => trifft(text, muster));
  return regel?.[0] || "sonder";
}

export function k1UstOberthema(m) {
  const id = k1UstOberthemaId(m);
  return k1UstOberthemen.find((thema) => thema.id === id) || k1UstOberthemen[k1UstOberthemen.length - 1];
}

export function k1UstGruppieren(module) {
  return k1UstOberthemen.map((thema) => ({
    ...thema,
    module: module.filter((m) => k1UstOberthemaId(m) === thema.id),
  }));
}

export default k1UstOberthemen;
