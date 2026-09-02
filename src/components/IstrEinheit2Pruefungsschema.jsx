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

const aavvBlau = "#2563eb";

export const istrEinheit2Schemata = [
  {
    id: "istr2-schema-eis",
    titel: "Beschränkte Steuerpflicht – EIS bis DBA",
    quelle: "IStR, 2. Einheit.pdf · wiederkehrender Prüfungsaufbau, insbesondere Frames 14–20, 30–56, 108–150 und 390–397",
    fokus: "§ 1 Abs. 4 EStG · Einkunftsart · § 49 EStG · Steuerzugriff · DBA",
    bloecke: [
      {
        titel: "1. Persönlicher Steuerzugriff",
        ton: "ansatz",
        inhalt: [
          { typ: "schritt", nummer: "1", label: "§ 1 Abs. 4 EStG", text: "Natürliche Person ohne Wohnsitz und gewöhnlichen Aufenthalt im Inland; beschränkte Steuerpflicht nur, wenn inländische Einkünfte i.S.d. § 49 EStG vorliegen." },
          { typ: "hinweis", text: "Vorbehaltlich § 1 Abs. 2, 3 und § 1a EStG. Ist § 1 Abs. 3 EStG laut Sachverhalt zu prüfen, gehört dessen Antrags-/90-%-/Grundfreibetragsprüfung vor § 1 Abs. 4 EStG." },
        ],
      },
      {
        titel: "2. EIS – drei Fragen für jede Einkunftsquelle",
        ton: "technik",
        inhalt: [
          { typ: "merkSchritt", badge: "E", label: "Einkunftsart", text: "Welche Einkunftsart liegt nach den §§ 13–24 EStG vor? Erst die materielle Einkunftsqualifikation festlegen." },
          { typ: "merkSchritt", badge: "I", label: "Inländische Einkünfte", text: "Welcher konkrete Tatbestand des § 49 Abs. 1 EStG stellt den erforderlichen Inlandsbezug her?" },
          { typ: "merkSchritt", badge: "S", label: "Steuerzugriff", text: "Wie erhebt Deutschland die Steuer? Quellen-/Steuerabzug (z.B. §§ 38 ff., §§ 43 ff., § 50a EStG) oder Veranlagung; anschließend Sonderfolgen wie § 50 Abs. 2 EStG prüfen." },
          { typ: "verweis", text: "Dividenden-Querverweis: § 20 EStG → § 49 Abs. 1 Nr. 5 EStG → §§ 43 ff. EStG → § 50 Abs. 2 EStG.", modulId: "istr2-03" },
        ],
      },
      {
        titel: "3. DBA als zweite Ebene",
        ton: "bewertung",
        inhalt: [
          { typ: "text", text: "Erst wenn der nationale deutsche Steueranspruch steht, wird ein anwendbares DBA geprüft. Das DBA erweitert den deutschen Anspruch nicht; es verteilt oder begrenzt ihn." },
          { typ: "aavvMini" },
          { typ: "verweis", text: "Weiter im vertieften AAVV-Schema der Einheit 2.", schemaId: "istr2-schema-aavv" },
        ],
      },
      {
        titel: "4. Rückkehr ins nationale Recht",
        ton: "hinweis",
        inhalt: [
          { typ: "liste", punkte: [
            "Bei Quellensteuerfällen: Abgeltungswirkung und gesetzliche Ausnahmen (insbesondere § 50 Abs. 2 EStG) prüfen.",
            "Bei DBA-Freistellung: § 32b EStG / Progressionsvorbehalt prüfen.",
            "Bei Anrechnungsmethode: die vom Methodenartikel vorgegebene Anrechnung in der nationalen Steuerberechnung umsetzen.",
          ] },
        ],
      },
    ],
    modulIds: ["istr2-01", "istr2-02", "istr2-03", "istr2-09"],
    fallIds: ["istr2-fall-brasilien", "istr2-fall-beschraenkt-dba"],
  },
  {
    id: "istr2-schema-aavv",
    titel: "DBA AAVV – vertieft mit Verteilungs- und Methodennormen",
    quelle: "IStR, 2. Einheit.pdf · Schema-Frames 172–174 und 245; Vertiefung anhand DBA Österreich, Frames 188–381 und 402–429",
    fokus: "Art. 1/2 · Art. 4 · Art. 5/6/7/13/15 · Art. 23 · § 32b EStG",
    bloecke: [
      {
        titel: "A – Anwendbarkeit",
        ton: "ansatz",
        badge: "A",
        inhalt: [
          { typ: "schritt", nummer: "A1", label: "Persönlich", text: "Art. 1 DBA: Erfasst das Abkommen die beteiligte Person?" },
          { typ: "schritt", nummer: "A2", label: "Sachlich", text: "Art. 2 DBA: Gehört die betroffene Steuer zu den vom Abkommen erfassten Steuern?" },
        ],
      },
      {
        titel: "A – Ansässigkeit",
        ton: "ansatz",
        badge: "A",
        inhalt: [
          { typ: "schritt", nummer: "A3", label: "Art. 4 Abs. 1", text: "Ansässigkeit nach den im Abkommen genannten Anknüpfungsmerkmalen bestimmen." },
          { typ: "untertitel", text: "Art. 4 Abs. 2 – Doppelansässigkeit: Tie-Breaker in dieser Reihenfolge" },
          { typ: "tieBreaker", punkte: [
            "ständige Wohnstätte",
            "Mittelpunkt der Lebensinteressen",
            "gewöhnlicher Aufenthalt",
            "Staatsangehörigkeit",
            "Verständigungsverfahren",
          ] },
          { typ: "verweis", text: "Fallbezug: München + Ferienwohnung Kitzbühel; Mittelpunkt der Lebensinteressen Deutschland.", fallId: "istr2-fall-unbeschraenkt-dba" },
        ],
      },
      {
        titel: "V – Verteilung: Wer darf besteuern?",
        ton: "bewertung",
        badge: "V",
        inhalt: [
          { typ: "verteilungsRaster", punkte: [
            { norm: "Art. 6", titel: "Unbewegliches Vermögen", text: "Laufende Einkünfte aus unbeweglichem Vermögen; Belegenheitsstaat ist zentral." },
            { norm: "Art. 7 + Art. 5", titel: "Unternehmensgewinne / Betriebsstätte", text: "Unternehmensgewinn grundsätzlich Ansässigkeitsstaat, soweit keine Betriebsstätte im anderen Staat; Art. 5 einschließlich Ausnahmen vor Art. 7 prüfen." },
            { norm: "Art. 13", titel: "Veräußerungsgewinne", text: "Veräußerung nach Art des Vermögensgegenstands einordnen; in der Einheit insbesondere Immobilien und immobilienbezogene Anteile." },
            { norm: "Art. 15", titel: "Nichtselbständige Arbeit", text: "Tätigkeitsstaat als Ausgangspunkt; 183-Tage-Ausnahme nur bei kumulativer Erfüllung aller drei Voraussetzungen." },
          ] },
          { typ: "hinweis", text: "Die Verteilungsnorm wird für jede Einkunftsquelle separat geprüft. Ein Fall kann daher mehrere DBA-Artikel gleichzeitig enthalten." },
        ],
      },
      {
        titel: "V – Vermeidung: Was macht der Ansässigkeitsstaat?",
        ton: "technik",
        badge: "V",
        inhalt: [
          { typ: "schritt", nummer: "V1", label: "Methodenartikel", text: "Im DBA Österreich wird in der Einheit Art. 23 als Vermeidungsnorm verwendet: je nach Einkunftsart Freistellungs- oder Anrechnungsmethode." },
          { typ: "methodenRaster", punkte: [
            { titel: "Freistellung", text: "Der Ansässigkeitsstaat nimmt die nach dem Methodenartikel freizustellenden Einkünfte aus der Bemessungsgrundlage, behält aber ggf. das Recht zur Berücksichtigung für den Steuersatz." },
            { titel: "Anrechnung", text: "Für die im Methodenartikel genannten Einkünfte (in der Einheit u.a. typische Dividenden-/Zins-/Lizenzfälle) wird die ausländische Steuer nach den Abkommensregeln angerechnet." },
          ] },
          { typ: "schritt", nummer: "V2", label: "§ 32b EStG", text: "Bei nach DBA freigestellten ausländischen Einkünften § 32b Abs. 1 S. 1 Nr. 3 EStG prüfen; anschließend die in § 32b Abs. 1 S. 2 EStG behandelten Rückausnahmen gegenprüfen." },
          { typ: "verweis", text: "Vertiefung Progressionsvorbehalt und Rückausnahmen öffnen.", modulId: "istr2-08" },
        ],
      },
    ],
    modulIds: ["istr2-04", "istr2-05", "istr2-06", "istr2-07", "istr2-08", "istr2-09"],
    fallIds: ["istr2-fall-unbeschraenkt-dba", "istr2-fall-beschraenkt-dba"],
  },
];

function AavvBadge({ children }) {
  return <span className="istr2-aavv-badge" style={{ borderColor: aavvBlau, color: aavvBlau }}>{children}</span>;
}

function Querverweis({ element, onModulOeffnen, onFallOeffnen, onSchemaOeffnen }) {
  const ziel = element.modulId ? "Modul" : element.fallId ? "Fall" : "Schema";
  const onClick = element.modulId
    ? () => onModulOeffnen?.(element.modulId)
    : element.fallId
      ? () => onFallOeffnen?.(element.fallId)
      : () => onSchemaOeffnen?.(element.schemaId);
  return (
    <button type="button" className="istr2-querverweis" onClick={onClick}>
      <span className="kicker">Querverweis · {ziel}</span>
      <span>{element.text}</span>
    </button>
  );
}

function Inhalt({ element, onModulOeffnen, onFallOeffnen, onSchemaOeffnen }) {
  if (element.typ === "text") return <p className="istr2-schema-text">{element.text}</p>;
  if (element.typ === "untertitel") return <h4 className="istr2-schema-untertitel">{element.text}</h4>;
  if (element.typ === "hinweis") return <div className="istr2-schema-hinweis"><strong>Beachte:</strong> {element.text}</div>;
  if (element.typ === "liste") return <ul className="liste istr2-schema-liste">{element.punkte.map((p) => <li key={p}>{p}</li>)}</ul>;
  if (element.typ === "verweis") return <Querverweis element={element} onModulOeffnen={onModulOeffnen} onFallOeffnen={onFallOeffnen} onSchemaOeffnen={onSchemaOeffnen} />;
  if (element.typ === "schritt") {
    return (
      <div className="istr2-pruefschritt">
        <span className="istr2-pruefschritt__nummer">{element.nummer}</span>
        <div><strong>{element.label}</strong><p>{element.text}</p></div>
      </div>
    );
  }
  if (element.typ === "merkSchritt") {
    return (
      <div className="istr2-pruefschritt istr2-pruefschritt--merk">
        <span className="istr2-eis-badge">{element.badge}</span>
        <div><strong>{element.label}</strong><p>{element.text}</p></div>
      </div>
    );
  }
  if (element.typ === "aavvMini") {
    return (
      <div className="istr2-aavv-mini" aria-label="AAVV: Anwendbarkeit, Ansässigkeit, Verteilung, Vermeidung">
        {["A", "A", "V", "V"].map((x, i) => <AavvBadge key={`${x}-${i}`}>{x}</AavvBadge>)}
        <span>Anwendbarkeit → Ansässigkeit → Verteilung → Vermeidung</span>
      </div>
    );
  }
  if (element.typ === "tieBreaker") {
    return (
      <ol className="istr2-tiebreaker">
        {element.punkte.map((p, i) => <li key={p}><span>{i + 1}</span><b>{p}</b>{i < element.punkte.length - 1 && <em>↓</em>}</li>)}
      </ol>
    );
  }
  if (element.typ === "verteilungsRaster") {
    return <div className="istr2-schema-raster">{element.punkte.map((p) => <article key={p.norm}><span className="norm">{p.norm}</span><h4>{p.titel}</h4><p>{p.text}</p></article>)}</div>;
  }
  if (element.typ === "methodenRaster") {
    return <div className="istr2-schema-raster istr2-schema-raster--2">{element.punkte.map((p) => <article key={p.titel}><h4>{p.titel}</h4><p>{p.text}</p></article>)}</div>;
  }
  return null;
}

function SchemaBlock({ block, onModulOeffnen, onFallOeffnen, onSchemaOeffnen }) {
  return (
    <section className="istr2-schema-block" style={{ borderLeftColor: farben[block.ton] || farben.neutral }}>
      <header className="istr2-schema-block__head">
        {block.badge && <AavvBadge>{block.badge}</AavvBadge>}
        <h3 style={{ color: farben[block.ton] || farben.neutral }}>{block.titel}</h3>
      </header>
      {block.inhalt.map((element, i) => (
        <Inhalt key={i} element={element} onModulOeffnen={onModulOeffnen} onFallOeffnen={onFallOeffnen} onSchemaOeffnen={onSchemaOeffnen} />
      ))}
    </section>
  );
}

function volltext(schema) {
  const teile = [];
  const sammeln = (x) => {
    if (!x) return;
    if (typeof x === "string") return teile.push(x);
    if (Array.isArray(x)) return x.forEach(sammeln);
    if (typeof x === "object") Object.values(x).forEach(sammeln);
  };
  sammeln(schema);
  return teile.join(" ").toLowerCase();
}

export default function IstrEinheit2Pruefungsschema({ suche = "", onModulOeffnen, onFallOeffnen }) {
  const [aktiv, setAktiv] = useState(istrEinheit2Schemata[0].id);
  const q = suche.trim().toLowerCase();
  const sichtbar = useMemo(() => q ? istrEinheit2Schemata.filter((s) => volltext(s).includes(q)) : istrEinheit2Schemata, [q]);
  const schema = sichtbar.find((s) => s.id === aktiv) || sichtbar[0] || null;
  const schemaOeffnen = (id) => setAktiv(id);

  if (!schema) return <section className="panel"><h2>Kein Treffer in den Schemata der Einheit 2</h2></section>;

  return (
    <section className="istr2-schema-portal" data-istr2-schema={schema.id}>
      <div className="istr2-schema-kopf">
        <div><span className="kicker">IStR · Einheit 2 · digitale Prüfschemata</span><h2>Prüfungsschemata aus dem Unterrichtsfluss</h2></div>
        <span className="zaehler">{istrEinheit2Schemata.length} Schemata</span>
      </div>
      <div className="filter istr2-schema-filter">
        {sichtbar.map((s, i) => <button key={s.id} aria-pressed={s.id === schema.id} onClick={() => setAktiv(s.id)}>{i + 1}. {s.titel}</button>)}
      </div>
      <article className="panel istr2-schema-panel">
        <header className="istr2-schema-panel__head">
          <span className="kicker">Prüfungsschema {istrEinheit2Schemata.findIndex((s) => s.id === schema.id) + 1} von {istrEinheit2Schemata.length}</span>
          <h2>{schema.titel}</h2>
          <p>{schema.fokus}</p>
          <PrioBadge fach="istr" inhalt={{ title: schema.titel, subtitle: schema.fokus }} mitThema nurBeiTreffer />
        </header>
        <div className="istr2-schema-panel__body">
          {schema.bloecke.map((block, i) => <SchemaBlock key={i} block={block} onModulOeffnen={onModulOeffnen} onFallOeffnen={onFallOeffnen} onSchemaOeffnen={schemaOeffnen} />)}
        </div>
        <footer className="istr2-schema-panel__footer">Quelle: {schema.quelle}</footer>
      </article>
    </section>
  );
}
