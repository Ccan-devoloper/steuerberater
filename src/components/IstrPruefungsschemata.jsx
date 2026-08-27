import React, { useMemo, useState } from "react";

/* Darstellung bewusst eng an src/components/Pruefungsschemata.jsx (Bilanzen):
   gleiche Farblogik, Filterzeile, Kartenkopf, Blockaufbau und Quellenfuß. */
const farben = {
  ansatz: "var(--rot)",
  bewertung: "var(--orange)",
  technik: "var(--gruen)",
  hinweis: "var(--magenta)",
  neutral: "var(--tinte)",
};

export const istrSchemata = [
  {
    id: "internationales-steuerrecht",
    titel: "Prüfungsschema Internationales Steuerrecht",
    quelle: "Schema IStR.pdf · 2 Seiten",
    bloecke: [
      {
        seite: 1,
        titel: "Schema Internationales Steuerrecht",
        ton: "ansatz",
        inhalt: [
          {
            typ: "nummernKomplex",
            punkte: [
              {
                text: "§ 1 Abs. 1 S. 1 EStG?",
                kinder: [
                  "DBA (AAVV)",
                  "§ 34c EStG / § 32d Abs. 5 EStG falls kein DBA",
                  "§ 7 AStG",
                  "§ 2a EStG",
                  "§ 1a EStG",
                ],
              },
            ],
          },
          { typ: "uebergang", text: "Falls kein § 1 Abs. 1 S. 1 EStG:" },
          {
            typ: "nummernKomplex",
            start: 2,
            punkte: [
              {
                text: "§ 1 Abs. 3 EStG?",
                absatz: "Antrag auf unb. Stpfl. mit inl. Einkünften nach § 49 EStG, damit Grundfreibetrag, Sonderausgaben und agB berücksichtigt werden, denn diese werden bei § 1 Abs. 4 EStG nicht berücksichtigt (§ 50 Abs. 1 S. 2, 4 EStG)",
              },
            ],
          },
          { typ: "verweis", text: "⇒ Schema § 1 Abs. 3 EStG siehe § 1 Abs. 4 EStG", ziel: "istr-dba" },
          { typ: "uebergang", text: "Falls kein § 1 Abs. 3 EStG:" },
          {
            typ: "nummernKomplex",
            start: 3,
            punkte: [
              {
                text: "Bei Wegzug (§§ 2 Abs. 7 S. 3, 32b Abs. 1 S. 1 Nr. 2 EStG, §§ 2, 6 AStG, § 19 Abs. 3 InvStG)",
              },
              {
                text: "§ 1 Abs. 4 EStG?",
                buchstaben: [
                  { text: "1 der 7" },
                  { text: "Inländische Einkünfte § 49 EStG" },
                  {
                    text: "Wie kommt der Staat an die Kohle?",
                    kinder: [
                      {
                        text: "Steuerabzug: § 38 ff. EStG, § 43 ff. EStG, § 50a EStG",
                        kinder: ["⇒ § 50 Abs. 2 S. 1 EStG Steuerabzug hat Abgeltungswirkung, beachte § 50 Abs. 2 S. 2 EStG!"],
                      },
                      {
                        text: "Falls kein Steuerabzug: Abgabe Steuererklärung § 25 Abs. 1, Abs. 3 EStG ohne Grundfreibetrag, Sonderausgaben und agB § 50 Abs. 1 S. 2, 4 EStG",
                      },
                    ],
                  },
                  { text: "DBA (AAV)" },
                ],
              },
            ],
          },
        ],
      },
      {
        seite: 2,
        id: "istr-dba",
        titel: "Schema DBA",
        ton: "bewertung",
        inhalt: [
          { typ: "schritt", label: "Anwendbarkeit:", text: "Art. 1 persönlich und Art. 2 Abs. 1 sachlich" },
          { typ: "schritt", label: "Ansässigkeit:", text: "Art. 4 Abs. 1" },
          { typ: "schritt", label: "Verteilung:", text: "Wer besteuert? Art. 6 ff. („Meine Oma Prinzip“)" },
          { typ: "untertitel", text: "Vermeidung" },
          { typ: "text", text: "(nur durch Ansässigkeitsstaat): Art. 22 oder Art. 23 oder Art. 24" },
          {
            typ: "liste",
            punkte: [
              "Anrechnungsmethode (Grds. Dividenden/Zinsen/Lizenzen)",
              "Freistellungsmethode mit PVB, § 32b Abs. 1 S. 1 Nr. 3 EStG,\nRückausnahme kein PVB nach § 32b Abs. 1 S. 2 … EStG",
            ],
          },
        ],
      },
    ],
  },
];

function Listenpunkt({ punkt }) {
  if (typeof punkt === "string") return <li style={{ marginBottom: 6, whiteSpace: "pre-line" }}>{punkt}</li>;
  return (
    <li style={{ marginBottom: 6 }}>
      <span style={{ whiteSpace: "pre-line" }}>{punkt.text}</span>
      {punkt.kinder?.length > 0 && (
        <ul className="liste" style={{ marginTop: 8 }}>
          {punkt.kinder.map((kind, i) => <Listenpunkt key={i} punkt={kind} />)}
        </ul>
      )}
    </li>
  );
}

function KomplexerPunkt({ punkt }) {
  return (
    <li style={{ marginBottom: 10 }}>
      <span style={{ whiteSpace: "pre-line" }}>{punkt.text}</span>
      {punkt.absatz && <p style={{ margin: "6px 0 0", whiteSpace: "pre-line" }}>{punkt.absatz}</p>}
      {punkt.kinder?.length > 0 && (
        <ul className="liste" style={{ marginTop: 8 }}>
          {punkt.kinder.map((kind, i) => <Listenpunkt key={i} punkt={kind} />)}
        </ul>
      )}
      {punkt.buchstaben?.length > 0 && (
        <ol type="a" style={{ paddingLeft: 24, margin: "10px 0 4px" }}>
          {punkt.buchstaben.map((kind, i) => <Listenpunkt key={i} punkt={kind} />)}
        </ol>
      )}
    </li>
  );
}

function Inhalt({ element }) {
  if (element.typ === "untertitel") {
    return <h4 style={{ margin: "14px 0 6px", fontFamily: "var(--serif)", textDecoration: "underline" }}>{element.text}</h4>;
  }
  if (element.typ === "text") return <p style={{ margin: "0 0 10px", whiteSpace: "pre-line" }}>{element.text}</p>;
  if (element.typ === "uebergang") return <p style={{ margin: "14px 0 10px", fontStyle: "italic" }}>{element.text}</p>;
  if (element.typ === "verweis") {
    return (
      <p style={{ margin: "10px 0 14px", paddingLeft: 30 }}>
        <a href={`#${element.ziel}`} style={{ color: "inherit", textDecorationThickness: "1px", textUnderlineOffset: "3px" }}>
          {element.text}
        </a>
      </p>
    );
  }
  if (element.typ === "schritt") {
    return (
      <p style={{ margin: "0 0 4px" }}>
        <strong style={{ textDecoration: "underline" }}>{element.label}</strong> {element.text}
      </p>
    );
  }
  if (element.typ === "liste") {
    return <ul className="liste" style={{ marginTop: 8 }}>{element.punkte.map((p, i) => <Listenpunkt key={i} punkt={p} />)}</ul>;
  }
  if (element.typ === "nummernKomplex") {
    return (
      <ol start={element.start || 1} style={{ paddingLeft: 26, margin: "8px 0 12px" }}>
        {element.punkte.map((p, i) => <KomplexerPunkt key={i} punkt={p} />)}
      </ol>
    );
  }
  return null;
}

function SchemaBlock({ block }) {
  return (
    <section
      id={block.id}
      style={{
        border: "1px solid var(--linie)",
        borderLeft: `6px solid ${farben[block.ton] || farben.neutral}`,
        padding: "16px 18px",
        marginBottom: 12,
        scrollMarginTop: "calc(var(--kopf) + var(--klausuren-h) + var(--fachleiste-h) + 20px)",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <h3 style={{ margin: "0 0 12px", color: farben[block.ton] || farben.neutral }}>{block.titel}</h3>
        <span className="zaehler">Quellseite {block.seite} / 2</span>
      </div>
      {block.inhalt.map((element, i) => <Inhalt key={i} element={element} />)}
    </section>
  );
}

function schemaVolltext(schema) {
  const teile = [schema.titel, schema.quelle];
  const sammeln = (wert) => {
    if (!wert) return;
    if (typeof wert === "string") { teile.push(wert); return; }
    if (Array.isArray(wert)) { wert.forEach(sammeln); return; }
    if (typeof wert === "object") Object.values(wert).forEach(sammeln);
  };
  sammeln(schema.bloecke);
  return teile.join(" ").toLowerCase();
}

export default function IstrPruefungsschemata({ aktiv: aktivVonAussen, onWechsel, suche = "" }) {
  const [aktivIntern, setAktivIntern] = useState(istrSchemata[0].id);
  const aktiv = aktivVonAussen ?? aktivIntern;
  const setAktiv = onWechsel ?? setAktivIntern;
  const q = suche.trim().toLowerCase();
  const sichtbar = useMemo(() => (
    q ? istrSchemata.filter((schema) => schemaVolltext(schema).includes(q)) : istrSchemata
  ), [q]);
  const schema = sichtbar.find((s) => s.id === aktiv) || sichtbar[0] || null;

  if (!schema) {
    return (
      <section className="panel">
        <span className="kicker">Prüfungsschema</span>
        <h2>Kein Treffer</h2>
        <p>Im derzeit eingepflegten IStR-Prüfungsschema wurde kein passender Begriff gefunden.</p>
      </section>
    );
  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 12 }}>
        <div>
          <span className="kicker">Originalschema · 2 von 2 Quellseiten</span>
          <h2 style={{ margin: "4px 0 0" }}>Ausformuliertes Prüfungsschema</h2>
        </div>
        <span className="zaehler">{istrSchemata.length} Schema</span>
      </div>

      <div className="filter" style={{ marginBottom: 14 }}>
        {sichtbar.map((s, i) => (
          <button key={s.id} aria-pressed={aktiv === s.id} onClick={() => setAktiv(s.id)}>
            {i + 1}. {s.titel.replace("Prüfungsschema ", "")}
          </button>
        ))}
      </div>

      <article className="panel" style={{ padding: 0, overflow: "hidden" }}>
        <header style={{ padding: "20px 22px", borderBottom: "1px solid var(--linie)", background: "var(--feld)" }}>
          <span className="kicker">Prüfungsschema {istrSchemata.findIndex((s) => s.id === schema.id) + 1} von {istrSchemata.length}</span>
          <h2 style={{ margin: "6px 0 0" }}>{schema.titel}</h2>
        </header>
        <div style={{ padding: "18px" }}>
          {schema.bloecke.map((block, i) => <SchemaBlock key={block.id || i} block={block} />)}
        </div>
        <footer style={{ padding: "10px 18px", borderTop: "1px solid var(--linie)", fontSize: 12, color: "var(--ink-weich)" }}>
          Quelle: © Markus Nöthen · {schema.quelle}
        </footer>
      </article>
    </>
  );
}
