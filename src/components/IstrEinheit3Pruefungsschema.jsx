import { PrioBadge } from "./Prioritaet";
import React, { useMemo, useState } from "react";
import "./istr-einheit2.css";

const farben = {
  ansatz: "var(--rot)",
  bewertung: "var(--orange)",
  technik: "var(--gruen)",
  hinweis: "var(--magenta)",
  neutral: "var(--tinte)",
};

export const istrEinheit3Schemata = [
  {
    id: "istr3-schema-oesterreich",
    titel: "Beschränkte Steuerpflicht mit DBA – EIS vor AAVV",
    fokus: "§ 1 Abs. 4 · E-I-S · § 49 · Erhebungsweg · A-A-V-V · § 50c",
    quelle: "IStR 3. Einheit.pdf · Frames 1–109",
    bloecke: [
      { titel: "1. Persönlicher Steuerzugriff", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "§ 1 Abs. 4 EStG", text: "Kein inländischer Wohnsitz/gewöhnlicher Aufenthalt und keine vorrangige unbeschränkte Behandlung: beschränkte Steuerpflicht nur für inländische Einkünfte." },
        { typ: "hinweis", text: "Im Österreich-Fall ist § 1 Abs. 3 EStG laut Aufgabenstellung ausdrücklich nicht zu prüfen." },
      ] },
      { titel: "2. EIS – jede Einkunftsquelle separat", ton: "technik", inhalt: [
        { typ: "merkSchritt", badge: "E", label: "Einkunftsart", text: "Materielle Einkunftsart nach §§ 13–24 EStG bestimmen: z.B. Vermietung, Beteiligungsveräußerung, Dividende, Aufsichtsratsvergütung." },
        { typ: "merkSchritt", badge: "I", label: "Inländische Einkünfte", text: "Passende Nummer des § 49 Abs. 1 EStG und deren konkretes Inlandsmerkmal prüfen." },
        { typ: "merkSchritt", badge: "S", label: "Steuerzugriff", text: "Veranlagung oder Quellensteuer (§§ 43 ff./§ 50a) bestimmen; anschließend § 50 EStG auf Tarif, Abgeltung und Ausnahmen prüfen." },
      ] },
      { titel: "3. DBA – AAVV", ton: "bewertung", inhalt: [
        { typ: "aavvSchritt", badge: "A", label: "Anwendbarkeit", text: "Persönlichen/sachlichen Anwendungsbereich des DBA prüfen." },
        { typ: "aavvSchritt", badge: "A", label: "Ansässigkeit", text: "Ansässigkeitsstaat nach Art. 4 bestimmen; im O-Fall Österreich." },
        { typ: "aavvSchritt", badge: "V", label: "Verteilung", text: "Passende Verteilungsnorm je Einkunftsquelle, insbesondere Art. 10 Dividenden bzw. Art. 16 Aufsichtsratsvergütungen." },
        { typ: "aavvSchritt", badge: "V", label: "Vermeidung / Begrenzung", text: "Methodenebene bzw. Quellensteuerhöchstbetrag festhalten; DBA erweitert den deutschen Anspruch nicht." },
      ] },
      { titel: "4. Zurück ins nationale Erhebungsrecht", ton: "hinweis", inhalt: [
        { typ: "schritt", nummer: "4", label: "§ 50c EStG", text: "Ist der deutsche Steuerabzug höher als der nach DBA zulässige Quellensteuerbetrag, Entlastungs-/Erstattungsverfahren prüfen." },
        { typ: "verweis", text: "Vertiefung: § 50c – Freistellung und Erstattung", modulId: "istr3-03" },
        { typ: "verweis", text: "Originalfall O vollständig öffnen", fallId: "istr3-fall-oesterreich" },
      ] },
    ],
    modulIds: ["istr3-01","istr3-02","istr3-03","istr3-04","istr3-05"],
    fallIds: ["istr3-fall-oesterreich"],
  },
  {
    id: "istr3-schema-dividende-50c",
    titel: "Dividende: Kapitalertragsteuer → Art. 10 DBA → § 50c",
    fokus: "§ 20 · § 49 Nr. 5 · §§ 43 ff. · § 50 Abs. 2 · Art. 10 · § 50c",
    quelle: "IStR 3. Einheit.pdf · Frames 13–36 und 73–95",
    bloecke: [
      { titel: "1. Nationaler Quellensteuerzugriff", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "§ 20 EStG", text: "Ausschüttung als Dividende qualifizieren." },
        { typ: "schritt", nummer: "2", label: "§ 49 Abs. 1 Nr. 5 EStG", text: "Inländischen Schuldner/Gesellschaft als Inlandsanknüpfung prüfen." },
        { typ: "schritt", nummer: "3", label: "§§ 43–44 EStG", text: "Kapitalertragsteuer und SolZ einbehalten; danach § 50 Abs. 2 S. 1 EStG auf Abgeltungswirkung prüfen." },
      ] },
      { titel: "2. DBA Art. 10", ton: "bewertung", inhalt: [
        { typ: "aavvSchritt", badge: "A", label: "Anwendbarkeit", text: "DBA Österreich auf O und die Dividende anwenden." },
        { typ: "aavvSchritt", badge: "A", label: "Ansässigkeit", text: "O ist nach der Einheit in Österreich ansässig." },
        { typ: "aavvSchritt", badge: "V", label: "Verteilung", text: "Art. 10: Österreich darf als Ansässigkeitsstaat besteuern; Deutschland als Quellenstaat nur innerhalb des DBA-Höchstbetrags." },
        { typ: "aavvSchritt", badge: "V", label: "Quellensteuergrenze", text: "Für O als natürliche Person behandelt die Einheit 15 %. Die 5-%-Variante ist an einen qualifizierten Gesellschaftsempfänger geknüpft und folgt nicht allein aus 75 % Beteiligung." },
      ] },
      { titel: "3. Entlastung", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "4", label: "§ 50c EStG", text: "Differenz zwischen innerstaatlichem Einbehalt und DBA-Höchstbetrag über Freistellung/Erstattung ausgleichen." },
        { typ: "hinweis", text: "Materielles DBA-Recht und verfahrensrechtliche Erstattung getrennt darstellen." },
        { typ: "verweis", text: "Zum Modul Dividenden / Art. 10", modulId: "istr3-02" },
      ] },
    ],
    modulIds: ["istr3-02","istr3-03"], fallIds: ["istr3-fall-oesterreich"],
  },
  {
    id: "istr3-schema-aufsichtsrat",
    titel: "Aufsichtsratsvergütung – § 50a Abs. 1 Nr. 4",
    fokus: "§ 18 Abs. 1 Nr. 3 · § 49 Abs. 1 Nr. 3 · § 50a Abs. 1 Nr. 4, Abs. 2/3 · Art. 16",
    quelle: "IStR 3. Einheit.pdf · Frames 43–68 und 73–109",
    bloecke: [
      { titel: "1. EIS", ton: "ansatz", inhalt: [
        { typ: "merkSchritt", badge: "E", label: "§ 18 Abs. 1 Nr. 3 EStG", text: "Aufsichtsratsvergütung als selbständige Einkunft einordnen." },
        { typ: "merkSchritt", badge: "I", label: "§ 49 Abs. 1 Nr. 3 EStG", text: "Inlandsanknüpfung der Vergütung aus der deutschen A-AG prüfen." },
        { typ: "merkSchritt", badge: "S", label: "§ 50a Abs. 1 Nr. 4 EStG", text: "Steuerabzug durch den Vergütungsschuldner." },
      ] },
      { titel: "2. Bemessungsgrundlage und Steuersatz", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "2A", label: "§ 50a Abs. 2", text: "30 % der Einnahmen; 5.000 € × 30 % = 1.500 €." },
        { typ: "schritt", nummer: "2B", label: "§ 50a Abs. 3", text: "Bei den in der Einheit behandelten EU/EWR-Voraussetzungen unmittelbar zusammenhängende nachgewiesene Aufwendungen berücksichtigen: 5.000 € ./. 1.000 € = 4.000 €; 30 % = 1.200 €." },
      ] },
      { titel: "3. DBA und § 50", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "3", label: "Art. 16 DBA", text: "Deutschland darf die Aufsichtsratsvergütung der deutschen Gesellschaft besteuern." },
        { typ: "schritt", nummer: "4", label: "§ 50 Abs. 2", text: "Abgeltungswirkung prüfen; anschließend die in der Einheit hervorgehobene Veranlagungsausnahme des Satzes 2 Nr. 5 gegenprüfen." },
        { typ: "hinweis", text: "Eine rechtlich mögliche Veranlagung ist nicht automatisch wirtschaftlich günstiger; die Einheit kontrastiert 30-%-Quellensteuer mit dem vereinfachten 40-%-Tarif." },
        { typ: "verweis", text: "Zum Originalfall O", fallId: "istr3-fall-oesterreich" },
      ] },
    ],
    modulIds: ["istr3-04","istr3-05"], fallIds: ["istr3-fall-oesterreich"],
  },
  {
    id: "istr3-schema-wegzug-jahr",
    titel: "Wegzug im laufenden VZ – Zeitachse und Progressionsvorbehalt",
    fokus: "§ 1 · § 2 Abs. 7 S. 3 · § 32b Abs. 1 S. 1 Nr. 2 · nach Wegzug EIS · §§ 2/6 AStG",
    quelle: "IStR 3. Einheit.pdf · Frames 111–150 und 219–237",
    bloecke: [
      { titel: "1. Zeitachse", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "Wegzugszeitpunkt", text: "Aufgabe von Wohnsitz/gewöhnlichem Aufenthalt konkret datieren; MN zieht Ende Juni 2025 endgültig nach Bagdad." },
        { typ: "schritt", nummer: "2", label: "Vor Wegzug", text: "Unbeschränkte Steuerpflicht; im Fall 10.000 € Musiker-Einkünfte Januar–Juni." },
        { typ: "schritt", nummer: "3", label: "Nach Wegzug", text: "Nur deutsche Inlandseinkünfte über § 49; neue deutsche Quellen jeweils mit EIS prüfen." },
      ] },
      { titel: "2. Jahresverknüpfung", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "4", label: "§ 2 Abs. 7 S. 3 EStG", text: "Unterjährige Wechselwirkung der Steuerpflicht im selben Veranlagungszeitraum beachten." },
        { typ: "schritt", nummer: "5", label: "§ 32b Abs. 1 S. 1 Nr. 2 EStG", text: "Ausländische Einkünfte während der nicht unbeschränkt steuerpflichtigen Phase für den Progressionsvorbehalt prüfen; Quelle: Bagdad-Kellner 5 × 2.000 € = 10.000 €." },
      ] },
      { titel: "3. Sonderfolgen", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "6", label: "Berliner Auftritt", text: "Auftritt im Dezember nach Wegzug separat über § 49/§ 50a prüfen." },
        { typ: "schritt", nummer: "7", label: "AStG", text: "§ 2 AStG und § 6 AStG unabhängig voneinander gegenprüfen." },
        { typ: "verweis", text: "§ 2 AStG vertieft", schemaId: "istr3-schema-2astg" },
        { typ: "verweis", text: "§ 6 AStG vertieft", schemaId: "istr3-schema-6astg" },
      ] },
    ],
    modulIds: ["istr3-06","istr3-07","istr3-08"], fallIds: ["istr3-fall-wegzug-mn"],
  },
  {
    id: "istr3-schema-2astg",
    titel: "§ 2 AStG – erweiterte beschränkte Steuerpflicht",
    fokus: "Deutscher · 5/10 Jahre · Niedrigbesteuerung · wesentliche wirtschaftliche Interessen · Rechtsfolge",
    quelle: "IStR 3. Einheit.pdf · Frames 152–177",
    bloecke: [
      { titel: "1. Persönliche Eingangsvoraussetzungen", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "Natürliche Person / deutscher Staatsangehöriger", text: "Die in der Einheit geprüfte Norm beginnt mit der deutschen Staatsangehörigkeit. MN ist irakischer Staatsangehöriger: § 2 AStG scheitert im Fall bereits hier." },
        { typ: "schritt", nummer: "2", label: "Voraufenthalt", text: "In den letzten zehn Jahren vor Ende der unbeschränkten Steuerpflicht mindestens fünf Jahre unbeschränkt steuerpflichtig." },
      ] },
      { titel: "2. Auslands- und Inlandsbindung", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "3", label: "Niedrigbesteuerung", text: "Wohnsitz/gewöhnlicher Aufenthalt in niedrig besteuertem Gebiet bzw. gesetzlich erfasster Auslandsstatus." },
        { typ: "schritt", nummer: "4", label: "Wesentliche wirtschaftliche Interessen", text: "Inlandsbindungen anhand der gesetzlichen Kriterien prüfen." },
      ] },
      { titel: "3. Rechtsfolge", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "5", label: "Erweiterter Einkünftekreis", text: "Nur bei erfülltem Tatbestand: erweiterte beschränkte Steuerpflicht auf die gesetzlich zusätzlich erfassten Einkünfte." },
        { typ: "schritt", nummer: "6", label: "Dauer / Schwelle", text: "In der Einheit: Nachwirkung bis zu zehn Jahre und 16.500-Euro-Jahresgrenze beachten." },
        { typ: "hinweis", text: "Ausscheiden des § 2 AStG beendet die Wegzugsprüfung nicht; § 6 AStG hat eigene Voraussetzungen." },
        { typ: "verweis", text: "Zum MN-Fall", fallId: "istr3-fall-wegzug-mn" },
      ] },
    ],
    modulIds: ["istr3-07"], fallIds: ["istr3-fall-wegzug-mn"],
  },
  {
    id: "istr3-schema-6astg",
    titel: "§ 6 AStG – Wegzugsbesteuerung",
    fokus: "§ 17-Anteil · 7/12 Jahre · Tatbestand · gemeiner Wert · Teileinkünfte · Rückkehrerregel",
    quelle: "IStR 3. Einheit.pdf · Frames 179–218",
    bloecke: [
      { titel: "1. Persönlicher und sachlicher Zugang", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "§ 17 EStG", text: "Anteil an Kapitalgesellschaft i.S.d. § 17; MN hält 30 % an der X-GmbH." },
        { typ: "schritt", nummer: "2", label: "§ 6 Abs. 2 AStG", text: "Innerhalb der letzten zwölf Jahre insgesamt mindestens sieben Jahre unbeschränkt steuerpflichtig." },
      ] },
      { titel: "2. Auslöser des § 6 Abs. 1", ton: "bewertung", inhalt: [
        { typ: "liste", punkte: [
          "Ende der unbeschränkten Steuerpflicht durch Aufgabe von Wohnsitz/gewöhnlichem Aufenthalt",
          "unentgeltliche Übertragung auf eine nicht unbeschränkt steuerpflichtige Person",
          "Ausschluss oder Beschränkung des deutschen Besteuerungsrechts hinsichtlich des Veräußerungsgewinns",
        ] },
      ] },
      { titel: "3. Fiktiver Veräußerungsgewinn", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "3", label: "Gemeiner Wert", text: "MN: 30 % von 1.000.000 € = 300.000 € fiktiver Veräußerungspreis." },
        { typ: "schritt", nummer: "4", label: "AK / Teileinkünfte", text: "Quelle: 60 % von 300.000 € = 180.000 €; 60 % von AK 20.000 € = 12.000 €; steuerpflichtiger Gewinn 168.000 €." },
        { typ: "schritt", nummer: "5", label: "Rückkehrerregel", text: "Nur bei entsprechendem Rückkehrsachverhalt Frist, tatsächliche Rückkehr und schädliche Zwischenereignisse prüfen." },
        { typ: "verweis", text: "Zum MN-Fall", fallId: "istr3-fall-wegzug-mn" },
      ] },
    ],
    modulIds: ["istr3-08"], fallIds: ["istr3-fall-wegzug-mn"],
  },
  {
    id: "istr3-schema-beschr-kst",
    titel: "Beschränkte Körperschaftsteuerpflicht – § 2 Nr. 1 KStG bis § 8b/§ 32",
    fokus: "§ 2 Nr. 1 KStG · § 49 je Quelle · § 8b · § 32 · § 50c",
    quelle: "IStR 3. Einheit.pdf · Frames 241–380",
    bloecke: [
      { titel: "1. Körperschaft und Steuerpflicht", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "Ausländische Körperschaft", text: "Rechtssubjekt auf Vergleichbarkeit prüfen; B-Limitada hat Sitz und Geschäftsleitung in Rio." },
        { typ: "schritt", nummer: "2", label: "§ 2 Nr. 1 KStG", text: "Keine inländische unbeschränkte KSt-Pflicht; beschränkte KSt-Pflicht nur mit inländischen Einkünften." },
        { typ: "hinweis", text: "Die Einheit warnt ausdrücklich: § 8 Abs. 2 KStG ersetzt bei beschränkter KSt-Pflicht nicht die Prüfung des § 49 EStG." },
      ] },
      { titel: "2. Für jede Quelle § 49", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "3A", label: "Grundstück", text: "Inländisches Grundstück: §-49-Anknüpfung, Mieten/Aufwendungen/AfA ermitteln; Quellenrechnung 423.000 €." },
        { typ: "schritt", nummer: "3B", label: "Anteilsveräußerung", text: "§ 49 Abs. 1 Nr. 2 Buchst. e EStG prüfen; danach § 8b Abs. 2/3 KStG." },
        { typ: "schritt", nummer: "3C", label: "Dividende", text: "Kapitalertragsteuer nach §§ 43/43a; danach § 32 KStG auf Abgeltungswirkung und Entlastung/Erstattung prüfen." },
      ] },
      { titel: "3. § 8b-Spezialpunkt", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "4", label: "§ 8b Abs. 2", text: "Veräußerungsgewinn grundsätzlich außer Ansatz." },
        { typ: "schritt", nummer: "5", label: "BFH I R 37/15", text: "Quellenkorrektur: Bei der behandelten beschränkt steuerpflichtigen ausländischen Körperschaft ohne inländische Betriebsstätte/ständigen Vertreter läuft die 5-%-Fiktion des § 8b Abs. 3 S. 1 ins Leere." },
        { typ: "hinweis", text: "Die ältere 2020er Klausurlösung mit 5-%-Ansatz wird in der Einheit ausdrücklich durch diesen BFH-Hinweis kontrastiert." },
        { typ: "verweis", text: "2020er Transfer / BFH-Korrektur öffnen", fallId: "istr3-transfer-2020-8b" },
      ] },
      { titel: "4. Dividenden und Erstattung", ton: "hinweis", inhalt: [
        { typ: "schritt", nummer: "6", label: "§ 32 KStG", text: "Abgeltungswirkung des Steuerabzugs bei der beschränkt steuerpflichtigen Körperschaft prüfen." },
        { typ: "schritt", nummer: "7", label: "§ 50c", text: "Mögliche Entlastung/Erstattung vom Quellensteuerabzug als separate Verfahrensebene prüfen." },
        { typ: "verweis", text: "B-Limitada-Fall vollständig öffnen", fallId: "istr3-fall-limitada" },
      ] },
    ],
    modulIds: ["istr3-09","istr3-10","istr3-11","istr3-12"], fallIds: ["istr3-fall-limitada","istr3-transfer-2020-8b"],
  },
  {
    id: "istr3-schema-entstrickung",
    titel: "Entstrickung – Einzelunternehmen versus Kapitalgesellschaft",
    fokus: "Besteuerungsrecht verloren? · § 4 Abs. 1 S. 3 / § 12 KStG · Wertansatz · § 4g",
    quelle: "IStR 3. Einheit.pdf · Frames 381–411",
    bloecke: [
      { titel: "1. Gemeinsamer Ausgangspunkt", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "Wirtschaftsgut / Auslandszuordnung", text: "Prüfen, ob ein Wirtschaftsgut aus der deutschen Besteuerungszuordnung in eine ausländische Betriebsstätte überführt/zugeordnet wird." },
        { typ: "schritt", nummer: "2", label: "Besteuerungsrecht", text: "Wird Deutschlands Recht zur Besteuerung eines späteren Veräußerungs-/Nutzungsgewinns ausgeschlossen oder beschränkt?" },
      ] },
      { titel: "2A. Einzelunternehmer", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "3A", label: "§ 4 Abs. 1 S. 3 EStG", text: "Ausschluss/Beschränkung wird einer Entnahme gleichgestellt." },
        { typ: "schritt", nummer: "4A", label: "§ 6 Abs. 1 Nr. 4 EStG", text: "Bewertung zum Teilwert; Quelle 50.000 € → 80.000 €, stille Reserve 30.000 €." },
        { typ: "schritt", nummer: "5A", label: "§ 4g EStG", text: "Bei der behandelten Überführung nach Österreich Ausgleichsposten und dessen Auflösung prüfen." },
      ] },
      { titel: "2B. Kapitalgesellschaft", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "3B", label: "§ 12 Abs. 1 KStG", text: "Keine Entnahme; Entstrickung der Kapitalgesellschaft nach § 12 KStG zum gemeinen Wert." },
        { typ: "schritt", nummer: "4B", label: "Korrektur", text: "Wird nur zum Buchwert 50.000 € ausgebucht, Differenz zum gemeinen Wert 80.000 € (= 30.000 €) steuerlich korrigieren." },
        { typ: "hinweis", text: "§ 6 AStG betrifft den Wegzug von §-17-Anteilen einer natürlichen Person und ist von der Wirtschaftsgutentstrickung zu trennen." },
        { typ: "verweis", text: "Entstrickungsfall öffnen", fallId: "istr3-fall-entstrickung" },
      ] },
    ],
    modulIds: ["istr3-13","istr3-14"], fallIds: ["istr3-fall-entstrickung"],
  },
];

function Querverweis({ element, onSchemaOeffnen, onModulOeffnen, onFallOeffnen }) {
  const ziel = element.schemaId ? "Schema" : element.modulId ? "Modul" : "Fall";
  const onClick = element.schemaId ? () => onSchemaOeffnen?.(element.schemaId)
    : element.modulId ? () => onModulOeffnen?.(element.modulId)
      : () => onFallOeffnen?.(element.fallId);
  return <button type="button" className="istr2-querverweis" onClick={onClick}><span className="kicker">Querverweis · {ziel}</span><span>{element.text}</span></button>;
}

function Inhalt({ element, onSchemaOeffnen, onModulOeffnen, onFallOeffnen }) {
  if (element.typ === "text") return <p className="istr2-schema-text">{element.text}</p>;
  if (element.typ === "hinweis") return <div className="istr2-schema-hinweis"><strong>Beachte:</strong> {element.text}</div>;
  if (element.typ === "liste") return <ul className="liste istr2-schema-liste">{element.punkte.map((p) => <li key={p}>{p}</li>)}</ul>;
  if (element.typ === "verweis") return <Querverweis element={element} onSchemaOeffnen={onSchemaOeffnen} onModulOeffnen={onModulOeffnen} onFallOeffnen={onFallOeffnen} />;
  if (element.typ === "schritt") return <div className="istr2-pruefschritt"><span className="istr2-pruefschritt__nummer">{element.nummer}</span><div><strong>{element.label}</strong><p>{element.text}</p></div></div>;
  if (element.typ === "merkSchritt") return <div className="istr2-pruefschritt istr2-pruefschritt--merk"><span className="istr2-eis-badge">{element.badge}</span><div><strong>{element.label}</strong><p>{element.text}</p></div></div>;
  if (element.typ === "aavvSchritt") return <div className="istr2-pruefschritt"><span className="istr2-aavv-badge" data-aavv-schritt={element.badge}>{element.badge}</span><div><strong>{element.label}</strong><p>{element.text}</p></div></div>;
  return null;
}

function SchemaBlock({ block, onSchemaOeffnen, onModulOeffnen, onFallOeffnen }) {
  return <section className="istr2-schema-block" style={{ borderLeftColor: farben[block.ton] || farben.neutral }}><header className="istr2-schema-block__head"><h3 style={{ color: farben[block.ton] || farben.neutral }}>{block.titel}</h3></header>{block.inhalt.map((element, i) => <Inhalt key={i} element={element} onSchemaOeffnen={onSchemaOeffnen} onModulOeffnen={onModulOeffnen} onFallOeffnen={onFallOeffnen} />)}</section>;
}

function volltext(schema) {
  const teile = [];
  const sammeln = (x) => {
    if (!x) return;
    if (typeof x === "string") { teile.push(x); return; }
    if (Array.isArray(x)) { x.forEach(sammeln); return; }
    if (typeof x === "object") Object.values(x).forEach(sammeln);
  };
  sammeln(schema);
  return teile.join(" ").toLowerCase();
}

export default function IstrEinheit3Pruefungsschema({ suche = "", onModulOeffnen, onFallOeffnen }) {
  const [aktiv, setAktiv] = useState(istrEinheit3Schemata[0].id);
  const q = suche.trim().toLowerCase();
  const sichtbar = useMemo(() => q ? istrEinheit3Schemata.filter((s) => volltext(s).includes(q)) : istrEinheit3Schemata, [q]);
  const schema = sichtbar.find((s) => s.id === aktiv) || sichtbar[0] || null;
  const schemaOeffnen = (id) => setAktiv(id);
  if (!schema) return <section className="panel"><h2>Kein Treffer in den Schemata der Einheit 3</h2></section>;

  return (
    <section className="istr2-schema-portal" data-istr3-schema={schema.id}>
      <div className="istr2-schema-kopf"><div><span className="kicker">IStR · Einheit 3 · digitale Prüfschemata</span><h2>Prüfungsschemata aus der 411-Seiten-Einheit</h2></div><span className="zaehler">{istrEinheit3Schemata.length} Schemata</span></div>
      <div className="filter istr2-schema-filter">{sichtbar.map((s, i) => <button key={s.id} aria-pressed={s.id === schema.id} onClick={() => setAktiv(s.id)}>{i + 1}. {s.titel}</button>)}</div>
      <article className="panel istr2-schema-panel">
        <header className="istr2-schema-panel__head"><span className="kicker">Prüfungsschema {istrEinheit3Schemata.findIndex((s) => s.id === schema.id) + 1} von {istrEinheit3Schemata.length}</span><h2>{schema.titel}</h2><p>{schema.fokus}</p><PrioBadge fach="istr" inhalt={{ title: schema.titel, subtitle: schema.fokus }} mitThema nurBeiTreffer /></header>
        <div className="istr2-schema-panel__body">{schema.bloecke.map((block, i) => <SchemaBlock key={i} block={block} onSchemaOeffnen={schemaOeffnen} onModulOeffnen={onModulOeffnen} onFallOeffnen={onFallOeffnen} />)}</div>
        <footer className="istr2-schema-panel__footer">Quelle: {schema.quelle}</footer>
      </article>
    </section>
  );
}
