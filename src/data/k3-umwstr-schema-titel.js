/* Titel, Untertitel und Schwerpunkt der 13 UmwStR-Prüfschemata (RA/StB U. Breier).
   Spiegelung der Metadaten aus src/components/K3UmwStRCampus.jsx, damit die
   Prüfschemata auch ohne React-Laufzeit (tools/pruefen-examensprioritaet.mjs)
   den Examensprioritäten zugeordnet werden können. Bilddaten bleiben im Campus. */

export const UMWSTR_SCHEMA_TITEL = [
  { nr: 1, title: "Grundsätze zur Aufdeckung stiller Reserven bei Einlage und Einbringung in KapGes", subtitle: "Abgrenzung zu §§ 20, 21 UmwStG", focus: "Einzelwirtschaftsgüter · Sachgesamtheiten · übertragender und übernehmender Rechtsträger · §§ 20, 21 UmwStG" },
  { nr: 2, title: "Vorschriften des EStG und KStG zur Aufdeckung der stillen Reserven", subtitle: "Übertragung von Wirtschaftsgütern aus dem PV oder BV in eine Kapitalgesellschaft", focus: "EStG/KStG · Einzelwirtschaftsgüter · Sachgesamtheiten · §§ 17, 20, 23 EStG · § 8 Abs. 3 S. 2 KStG" },
  { nr: 3, title: "Voraussetzungen für Anwendung § 20 UmwStG", subtitle: "Grundvoraussetzungen des § 20 Abs. 1 UmwStG und Folgen zurückbehaltener Wirtschaftsgüter", focus: "§ 20 Abs. 1 UmwStG · funktional wesentliche Betriebsgrundlagen · Ausgabe neuer Anteile · SBV" },
  { nr: 4, title: "(Zivilrechtliche) Formen der Umwandlung in GmbH bei § 20 UmwStG", subtitle: "Einzelrechtsnachfolge, Ausgliederung, Formwechsel und Option nach § 1a KStG – mit Rechtsfolgen", focus: "§ 20 UmwStG · § 25 UmwStG · § 1a KStG · § 1 Abs. 3 UmwStG · § 123 Abs. 3 UmwG" },
  { nr: 5, title: "Gesetzliche Ausnahmen vom Buchwertansatz bei § 20 UmwStG", subtitle: "Trotz Buchwertantrag der übernehmenden KapGes · § 20 Abs. 2 S. 2 Nr. 2 u. Nr. 4 UmwStG", focus: "negativer Buchwert · sonstige Gegenleistung · 25 % / 500.000 € · Zwischenwertansatz" },
  { nr: 6, title: "Folgen der Veräußerung der sperrfristbehafteten Anteile", subtitle: "Veräußerung der bei § 20 UmwStG erhaltenen Anteile oder Ersatztatbestände · § 22 Abs. 1 UmwStG", focus: "Einbringungsgewinn I · 7-Jahresfrist · § 22 Abs. 1 S. 1-4 u. S. 6 UmwStG · § 17 EStG" },
  { nr: 7, title: "Einlage und Einbringung von Anteilen an KapGes in eine andere KapGes", subtitle: "§§ 17, 20 Abs. 2 Nr. 1 EStG und § 6 Abs. 6 S. 2 EStG in Abgrenzung zu § 21 UmwStG", focus: "§ 21 UmwStG · § 17 EStG · § 6 Abs. 6 S. 2 EStG · Anteile im PV und BV" },
  { nr: 8, title: "Veräußerung der gem. § 21 UmwStG erhaltenen Anteile durch die übernehmende KapGes", subtitle: "Folgen der Veräußerung sperrfristbehafteter Anteile · § 22 Abs. 2 S. 1 ff. UmwStG", focus: "Einbringungsgewinn II · 7-Jahresfrist · Folgen beim Einbringenden und bei der Übernehmerin" },
  { nr: 9, title: "Verschmelzung von KapGes aufeinander – übertragende KapGes", subtitle: "Steuerliche Folgen bei der eingeschmolzenen KapGes · §§ 11–13 UmwStG", focus: "§ 11 UmwStG · Buchwertansatz in der Schlussbilanz · Zwischenwert bei Verlustvortrag" },
  { nr: 10, title: "Verschmelzung von KapGes – übernehmende KapGes", subtitle: "Steuerliche Folgen bei der übernehmenden KapGes · § 12 UmwStG", focus: "§ 12 UmwStG · Einbuchung zum Übertragungsstichtag · Buchungssatz · Übernahmeergebnis" },
  { nr: 11, title: "Formwechsel von KapGes auf PersGes – formgewechselte KapGes", subtitle: "Steuerliche Folgen bei der übertragenden KapGes · §§ 9 S. 1, 3 UmwStG", focus: "§§ 3, 9 UmwStG · Buchwertansatz auf Antrag · Zwischenwert bei Verlustvortrag" },
  { nr: 12, title: "Formwechsel von KapGes in PersGes – PersGes und Gesellschafter", subtitle: "Steuerliche Folgen bei entstehender PersGes · § 9 S. 1 i.V.m. §§ 4, 5 und 7 UmwStG", focus: "§§ 4, 5, 7, 9 UmwStG · Einbuchung in der Eröffnungsbilanz · Übernahmeergebnis" },
  { nr: 13, title: "Abspaltung nach § 15 UmwStG im Unterschied zur Ausgliederung", subtitle: "Abspaltung von Vermögen einer KapGes auf eine Schwestergesellschaft · § 123 Abs. 2 UmwG", focus: "§ 15 UmwStG · § 20 UmwStG · § 123 Abs. 2/3 UmwG · Teilbetriebserfordernis" },
];

export default UMWSTR_SCHEMA_TITEL;
