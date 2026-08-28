import React, { useMemo, useState } from "react";
import "./istr-einheit2.css";

const farben = {
  ansatz: "var(--rot)",
  bewertung: "var(--orange)",
  technik: "var(--gruen)",
  hinweis: "var(--magenta)",
  neutral: "var(--tinte)",
};

export const istrEinheit1Schemata = [
  {
    id: "istr1-schema-auslandseinkuenfte",
    titel: "Unbeschränkte Steuerpflicht mit Auslandseinkünften",
    fokus: "§ 1 Abs. 1 · DBA oder § 34c · § 32d Abs. 5",
    quelle: "IStR, 1. Einheit.pdf · Frames 16–79",
    bloecke: [
      { titel: "1. Persönlicher Steuerzugriff", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "§ 1 Abs. 1 EStG", text: "Natürliche Person mit Wohnsitz (§ 8 AO) oder gewöhnlichem Aufenthalt (§ 9 AO) im Inland: unbeschränkte Steuerpflicht und grundsätzlich Welteinkommen." },
      ] },
      { titel: "2. Auslandseinkunftsquelle qualifizieren", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "2", label: "Einkunftsart", text: "Ausländische Einkünfte nach den allgemeinen Einkunftsarten bestimmen; Bemessungsgrundlage nach deutschem Recht ermitteln." },
        { typ: "hinweis", text: "Ausländische Steuer und ausländische Bemessung ersetzen nicht die deutsche Einkünfteermittlung." },
      ] },
      { titel: "3. Doppelbesteuerung vermeiden", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "3A", label: "DBA vorhanden?", text: "Wenn ein DBA anwendbar ist, Verteilungs- und Methodenartikel prüfen; die AAVV-Vertiefung folgt in Einheit 2." },
        { typ: "schritt", nummer: "3B", label: "Kein DBA: § 34c Abs. 1 EStG", text: "Ausländische Einkommensteuer auf die deutsche Einkommensteuer anrechnen; Anrechnungshöchstbetrag nach der Norm beachten." },
        { typ: "schritt", nummer: "3C", label: "Antrag: § 34c Abs. 2 EStG", text: "Statt Anrechnung kann die ausländische Steuer auf Antrag bei der Ermittlung der Einkünfte abgezogen werden, soweit die Voraussetzungen vorliegen." },
        { typ: "schritt", nummer: "3D", label: "Kapitalvermögen", text: "Bei Kapitaleinkünften die Spezialregel des § 32d Abs. 5 EStG gegenprüfen." },
      ] },
    ],
    modulIds: ["istr1-01","istr1-02"],
    fallIds: ["istr1-fall-brasilien-auslandseinkuenfte","istr1-fall-chile","istr1-transfer-2021"],
  },
  {
    id: "istr1-schema-2a",
    titel: "Negative Drittstaateneinkünfte – § 2a EStG",
    fokus: "Drittstaat · Katalogtatbestand · Verrechnung · Aktivitätsausnahme",
    quelle: "IStR, 1. Einheit.pdf · Frames 93–137",
    bloecke: [
      { titel: "1. Eingangsvoraussetzungen", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "Negative Einkünfte", text: "Es müssen negative Einkünfte vorliegen; positive Auslandseinkünfte werden nicht über § 2a beschränkt." },
        { typ: "schritt", nummer: "2", label: "Drittstaatenbezug", text: "Die Einkünfte müssen aus einem Staat stammen, der für § 2a als Drittstaat zu behandeln ist." },
      ] },
      { titel: "2. Katalog des § 2a Abs. 1 S. 1", ton: "bewertung", inhalt: [
        { typ: "liste", punkte: [
          "Land- und Forstwirtschaft / gewerbliche Betriebsstätte im Drittstaat",
          "bestimmte Teilwert-/Veräußerungs-/Auflösungsverluste bei Drittstaaten-Körperschaften",
          "bestimmte Beteiligungen, partiarische Darlehen und stille Beteiligungen",
          "Vermietung/Verpachtung von unbeweglichem Vermögen oder Sachinbegriffen im Drittstaat",
          "weitere ausdrücklich im Katalog genannte Drittstaatentatbestände",
        ] },
      ] },
      { titel: "3. Rechtsfolge und Ausnahmen", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "3", label: "Verrechnungskreis", text: "Negative Einkünfte grundsätzlich nur mit positiven Einkünften derselben Art aus demselben Staat verrechnen; verbleibende Beträge nach Maßgabe der Norm fortführen/gesondert feststellen." },
        { typ: "schritt", nummer: "4", label: "Aktivitätsausnahme", text: "Für die im Gesetz vorgesehenen aktiven gewerblichen Tätigkeiten die Ausnahmevoraussetzungen gesondert prüfen." },
        { typ: "hinweis", text: "§ 2a nicht mit der Hinzurechnungsbesteuerung nach §§ 7 ff. AStG vermischen." },
      ] },
    ],
    modulIds: ["istr1-03"],
    fallIds: ["istr1-fall-chile"],
  },
  {
    id: "istr1-schema-1a",
    titel: "§ 1a EStG – grenzüberschreitender Familienbezug",
    fokus: "EU/EWR · Ehegatte/Unterhalt · § 10 · § 26",
    quelle: "IStR, 1. Einheit.pdf · Frames 141–208",
    bloecke: [
      { titel: "1. Ausgangssteuerpflicht", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "§ 1 Abs. 1 oder 3 EStG", text: "Zunächst feststellen, auf welcher Grundlage die antragstellende Person unbeschränkt bzw. fiktiv unbeschränkt steuerpflichtig ist." },
      ] },
      { titel: "2. Persönliche Voraussetzungen des § 1a", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "2", label: "EU-/EWR-Bezug", text: "Staatsangehörigkeit und Wohnsitz/gewöhnlichen Aufenthalt der beteiligten Personen anhand des konkreten §-1a-Tatbestands prüfen." },
        { typ: "schritt", nummer: "3", label: "Begünstigte Beziehung", text: "Ehegatte/Unterhaltsempfänger bzw. die jeweils im Gesetz erfasste persönliche Beziehung zuordnen." },
      ] },
      { titel: "3. Rechtsfolge in Spezialnorm übernehmen", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "4A", label: "Unterhalt/Sonderausgaben", text: "Bei Unterhaltsleistungen die einschlägige Abzugsnorm, insbesondere § 10 EStG, mit § 1a verknüpfen." },
        { typ: "schritt", nummer: "4B", label: "Ehegattenveranlagung", text: "Für die Veranlagungswahl § 26 ff. EStG prüfen; Wohnsitz und §-1a-Fiktion nicht überspringen." },
      ] },
    ],
    modulIds: ["istr1-04"],
    fallIds: ["istr1-transfer-2022","istr1-fall-frankreich-familie"],
  },
  {
    id: "istr1-schema-1abs3",
    titel: "§ 1 Abs. 3 EStG – Antrag auf unbeschränkte Behandlung",
    fokus: "§ 49 · Antrag · 90 % oder Grundfreibetrag · Nachweis",
    quelle: "IStR, 1. Einheit.pdf · Frames 212–243",
    bloecke: [
      { titel: "1. Persönlicher Ausgangspunkt", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "Kein Wohnsitz/gewöhnlicher Aufenthalt", text: "§ 1 Abs. 1 EStG greift nicht." },
        { typ: "schritt", nummer: "2", label: "Inländische Einkünfte", text: "Es müssen inländische Einkünfte i.S.d. § 49 EStG vorliegen." },
      ] },
      { titel: "2. Antrag und quantitative Schranke", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "3", label: "Antrag", text: "§ 1 Abs. 3 EStG ist kein Automatismus; in Klausurhinweisen ausdrücklich beachten, ob ein Antrag gestellt ist oder ausgeschlossen wird." },
        { typ: "schritt", nummer: "4A", label: "90-%-Alternative", text: "Mindestens 90 % der Einkünfte müssen der deutschen Einkommensteuer unterliegen." },
        { typ: "schritt", nummer: "4B", label: "Grundfreibetrags-Alternative", text: "Alternativ dürfen die nicht der deutschen Einkommensteuer unterliegenden Einkünfte den maßgeblichen Grundfreibetrag nicht überschreiten." },
        { typ: "schritt", nummer: "5", label: "Nachweis", text: "Die Höhe der nicht der deutschen Einkommensteuer unterliegenden Einkünfte ist nach den gesetzlichen Vorgaben nachzuweisen." },
      ] },
      { titel: "3. Wenn § 1 Abs. 3 nicht greift", ton: "hinweis", inhalt: [
        { typ: "verweis", text: "Weiter zu § 1 Abs. 4 EStG und EIS.", schemaId: "istr1-schema-eis" },
      ] },
    ],
    modulIds: ["istr1-05"],
    fallIds: ["istr1-fall-shakira","istr1-transfer-2019"],
  },
  {
    id: "istr1-schema-eis",
    titel: "Beschränkte Steuerpflicht – EIS, § 49, § 50a und § 50",
    fokus: "§ 1 Abs. 4 · E-I-S · § 49 · § 50a · § 50",
    quelle: "IStR, 1. Einheit.pdf · Frames 239–342",
    bloecke: [
      { titel: "1. § 1 Abs. 4 EStG", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "Beschränkte Steuerpflicht", text: "Natürliche Person ohne inländischen Wohnsitz/gewöhnlichen Aufenthalt; § 1 Abs. 2/3 und § 1a zuvor gegenprüfen." },
      ] },
      { titel: "2. EIS – für jede Einkunftsquelle neu", ton: "technik", inhalt: [
        { typ: "merkSchritt", badge: "E", label: "Einkunftsart", text: "Materielle Einkunftsart nach §§ 13–24 EStG bestimmen." },
        { typ: "merkSchritt", badge: "I", label: "Inländische Einkünfte", text: "Konkrete Nummer des § 49 Abs. 1 EStG und deren Inlandsmerkmal prüfen; R 49.3 bei ausländischen Besteuerungsmerkmalen beachten." },
        { typ: "merkSchritt", badge: "S", label: "Steuerzugriff", text: "Steuerabzug (z.B. § 50a / §§ 43 ff.) oder Veranlagung bestimmen; anschließend § 50-Sonderregeln." },
      ] },
      { titel: "3. § 50a bei Quellenabzug", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "3", label: "Abzugstatbestand", text: "Bei den in § 50a Abs. 1 erfassten Vergütungen, z.B. künstlerischen/sportlichen Darbietungen oder Rechteüberlassungen, Einbehalt durch den Vergütungsschuldner prüfen." },
        { typ: "schritt", nummer: "4", label: "Steuersatz / Entlastung", text: "Bemessungsgrundlage und Steuersatz anwenden; DBA-/§-50c-Entlastung als nachgelagerte Ebene behandeln." },
      ] },
      { titel: "4. § 50 – Sondervorschriften", ton: "hinweis", inhalt: [
        { typ: "schritt", nummer: "5", label: "§ 50 Abs. 1", text: "Abweichende Berücksichtigung persönlicher Abzüge/Tarifregelungen bei beschränkt Steuerpflichtigen beachten." },
        { typ: "schritt", nummer: "6", label: "§ 50 Abs. 2", text: "Bei Steuerabzug Abgeltungswirkung prüfen und anschließend jede gesetzliche Ausnahme/Veranlagungsmöglichkeit gegenprüfen." },
      ] },
    ],
    modulIds: ["istr1-08","istr1-09","istr1-10","istr1-11"],
    fallIds: ["istr1-fall-shakira","istr1-fall-brasilien-zinsen-beteiligung","istr1-fall-kst-limitada"],
  },
  {
    id: "istr1-schema-wegzug",
    titel: "Wegzug im laufenden Veranlagungszeitraum",
    fokus: "Zeitachse · § 2 Abs. 7 · § 32b · § 6 AStG · danach EIS",
    quelle: "IStR, 1. Einheit.pdf · Frames 6 und 9–14",
    bloecke: [
      { titel: "1. Zeitachse bilden", ton: "ansatz", inhalt: [
        { typ: "schritt", nummer: "1", label: "Wegzugszeitpunkt", text: "Aufgabe des inländischen Wohnsitzes/gewöhnlichen Aufenthalts konkret datieren; Zeitraum vor und nach dem Wegzug trennen." },
      ] },
      { titel: "2. Steuerpflicht und Jahresverknüpfung", ton: "bewertung", inhalt: [
        { typ: "schritt", nummer: "2", label: "Vor Wegzug", text: "Unbeschränkte Steuerpflicht und Welteinkommen für den entsprechenden Zeitraum." },
        { typ: "schritt", nummer: "3", label: "Nach Wegzug", text: "Beschränkte Steuerpflicht nur für inländische Einkünfte; EIS anwenden." },
        { typ: "schritt", nummer: "4", label: "§ 2 Abs. 7 / § 32b", text: "Unterjährige Verknüpfung und Progressionsvorbehalt nach den im Grundschema genannten Normen prüfen." },
      ] },
      { titel: "3. Sonderfolgen", ton: "technik", inhalt: [
        { typ: "schritt", nummer: "5", label: "§ 6 AStG", text: "Bei qualifizierter Beteiligung Wegzugsbesteuerung als eigenständige Prüfung." },
        { typ: "hinweis", text: "InvStG-Spezialnormen nur bei einschlägigem Investmentvermögen; anschließend deutsche Nachwegzugseinkünfte nach § 49/§ 50a/§ 50." },
      ] },
    ],
    modulIds: ["istr1-06","istr1-08"],
    fallIds: ["istr1-fall-wegzug"],
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

export default function IstrEinheit1Pruefungsschema({ suche = "", onModulOeffnen, onFallOeffnen }) {
  const [aktiv, setAktiv] = useState(istrEinheit1Schemata[0].id);
  const q = suche.trim().toLowerCase();
  const sichtbar = useMemo(() => q ? istrEinheit1Schemata.filter((s) => volltext(s).includes(q)) : istrEinheit1Schemata, [q]);
  const schema = sichtbar.find((s) => s.id === aktiv) || sichtbar[0] || null;
  const schemaOeffnen = (id) => setAktiv(id);
  if (!schema) return <section className="panel"><h2>Kein Treffer in den Schemata der Einheit 1</h2></section>;

  return (
    <section className="istr2-schema-portal" data-istr1-schema={schema.id}>
      <div className="istr2-schema-kopf"><div><span className="kicker">IStR · Einheit 1 · digitale Prüfschemata</span><h2>Prüfungsschemata aus der 342-Seiten-Einheit</h2></div><span className="zaehler">{istrEinheit1Schemata.length} Schemata</span></div>
      <div className="filter istr2-schema-filter">{sichtbar.map((s, i) => <button key={s.id} aria-pressed={s.id === schema.id} onClick={() => setAktiv(s.id)}>{i + 1}. {s.titel}</button>)}</div>
      <article className="panel istr2-schema-panel">
        <header className="istr2-schema-panel__head"><span className="kicker">Prüfungsschema {istrEinheit1Schemata.findIndex((s) => s.id === schema.id) + 1} von {istrEinheit1Schemata.length}</span><h2>{schema.titel}</h2><p>{schema.fokus}</p></header>
        <div className="istr2-schema-panel__body">{schema.bloecke.map((block, i) => <SchemaBlock key={i} block={block} onSchemaOeffnen={schemaOeffnen} onModulOeffnen={onModulOeffnen} onFallOeffnen={onFallOeffnen} />)}</div>
        <footer className="istr2-schema-panel__footer">Quelle: {schema.quelle}</footer>
      </article>
    </section>
  );
}
