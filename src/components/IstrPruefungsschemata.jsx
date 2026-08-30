import React, { useMemo, useState } from "react";
import "./istr-merkhilfe.css";

/* Darstellung bewusst eng an src/components/Pruefungsschemata.jsx (Bilanzen):
   gleiche Farblogik, Filterzeile, Kartenkopf, Blockaufbau und Quellenfuß. */
const farben = {
  ansatz: "var(--rot)",
  bewertung: "var(--orange)",
  technik: "var(--gruen)",
  hinweis: "var(--magenta)",
  neutral: "var(--tinte)",
};

const aavvBlau = "#2563eb";

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
        postitTon: "gruen",
        postitTonNormen: { "§ 1 Abs. 3 EStG": "gelb" },
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
          { typ: "verweis", text: "⇒ Schema § 1 Abs. 3 EStG siehe § 1 Abs. 4 EStG" },
          { typ: "uebergang", text: "Falls kein § 1 Abs. 3 EStG:" },
          {
            typ: "nummernKomplex",
            start: 3,
            punkte: [
              {
                text: "Bei Wegzug (§§ 2 Abs. 7 S. 3, 32b Abs. 1 S. 1 Nr. 2 EStG, §§ 2, 6 AStG, § 19 Abs. 3 InvStG)",
                postitTon: "rosa",
              },
              {
                text: "§ 1 Abs. 4 EStG?",
                merkhilfe: "eis",
                buchstaben: [
                  { text: "1 der 7", merk: "E" },
                  { text: "Inländische Einkünfte § 49 EStG", merk: "I" },
                  {
                    text: "Wie kommt der Staat an die Kohle?",
                    merk: "S",
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
        postitTon: "gruen",
        inhalt: [
          { typ: "schritt", badge: "A", label: "Anwendbarkeit:", text: "Art. 1 persönlich und Art. 2 Abs. 1 sachlich" },
          { typ: "schritt", badge: "A", label: "Ansässigkeit:", text: "Art. 4 Abs. 1" },
          { typ: "schritt", badge: "V", label: "Verteilung:", text: "Wer besteuert? Art. 6 ff. („Meine Oma Prinzip“)" },
          { typ: "schritt", badge: "V", label: "Vermeidung", text: "(nur durch Ansässigkeitsstaat): Art. 22 oder Art. 23 oder Art. 24" },
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

/* Handgezeichnetes Eis als Merkbild zu "EIS". Reine Gedächtnisstütze, deshalb
   aria-hidden - die Bedeutung tragen die Buchstaben und der Hinweistext. */
function EisBild() {
  return (
    <svg className="istr-eis" viewBox="0 0 90 120" aria-hidden="true" focusable="false">
      <g fill="none" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="46" cy="22" r="16" stroke="#2f6fd0" />
        <circle cx="27" cy="39" r="14" stroke="#e03b3b" />
        <circle cx="58" cy="40" r="16" stroke="#2fbf5f" />
        <g stroke="#b98a5e">
          <path d="M16 54 L72 54 L44 112 Z" />
          <path d="M24 68 L50 94 M34 59 L62 87 M50 58 L68 76" />
          <path d="M64 68 L38 94 M54 59 L26 87 M38 58 L20 76" />
        </g>
      </g>
    </svg>
  );
}

function Listenpunkt({ punkt }) {
  if (typeof punkt === "string") return <li style={{ marginBottom: 6, whiteSpace: "pre-line" }}>{punkt}</li>;
  return (
    <li style={{ marginBottom: 6, position: punkt.merk ? "relative" : undefined }}>
      {punkt.merk && <span className="istr-merk" aria-hidden="true">{punkt.merk}</span>}
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
    <li
      data-schema-ton={punkt.postitTon}
      style={{
        marginBottom: 4,
        padding: "13px 15px",
        border: "1px solid var(--linie)",
        borderRadius: 10,
        background: "var(--feld)",
        boxShadow: "0 1px 0 rgba(0, 0, 0, 0.04)",
      }}
    >
      <span style={{ whiteSpace: "pre-line", fontWeight: 700 }}>{punkt.text}</span>
      {punkt.absatz && <p style={{ margin: "8px 0 0", whiteSpace: "pre-line" }}>{punkt.absatz}</p>}
      {punkt.kinder?.length > 0 && (
        <ul className="liste" style={{ marginTop: 10 }}>
          {punkt.kinder.map((kind, i) => <Listenpunkt key={i} punkt={kind} />)}
        </ul>
      )}
      {punkt.buchstaben?.length > 0 && (
        punkt.merkhilfe === "eis" ? (
          <div style={{ position: "relative" }}>
            <EisBild />
            <ol
              type="a"
              className="istr-merkliste"
              style={{ paddingLeft: 58, margin: "10px 90px 4px 0" }}
              aria-describedby="istr-merk-eis"
            >
              {punkt.buchstaben.map((kind, i) => <Listenpunkt key={i} punkt={kind} />)}
            </ol>
            <p className="istr-merk-hinweis" id="istr-merk-eis">
              Merkhilfe EIS: Einkunftsart · Inländische Einkünfte · Steuerabzug
            </p>
          </div>
        ) : (
          <ol type="a" style={{ paddingLeft: 24, margin: "10px 0 4px" }}>
            {punkt.buchstaben.map((kind, i) => <Listenpunkt key={i} punkt={kind} />)}
          </ol>
        )
      )}
    </li>
  );
}

function Inhalt({ element }) {
  if (element.typ === "untertitel") {
    return <h4 style={{ margin: "14px 0 6px", fontFamily: "var(--serif)", textDecoration: "underline" }}>{element.text}</h4>;
  }
  if (element.typ === "text") return <p style={{ margin: "0 0 10px", whiteSpace: "pre-line" }}>{element.text}</p>;
  if (element.typ === "uebergang") {
    return (
      <p
        style={{
          margin: "14px 0 10px",
          padding: "9px 12px",
          borderLeft: `4px solid ${farben.hinweis}`,
          background: "var(--feld)",
          fontStyle: "italic",
          fontWeight: 650,
        }}
      >
        {element.text}
      </p>
    );
  }
  if (element.typ === "verweis") {
    return (
      <p
        style={{
          margin: "10px 0 14px",
          padding: "8px 12px",
          border: "1px dashed var(--linie)",
          borderRadius: 8,
          fontWeight: 650,
        }}
      >
        {element.text}
      </p>
    );
  }
  if (element.typ === "schritt") {
    return (
      <div
        data-aavv-schritt={element.badge || undefined}
        style={{
          display: "grid",
          gridTemplateColumns: element.badge ? "42px minmax(0, 1fr)" : "1fr",
          gap: 12,
          alignItems: "start",
          margin: "0 0 10px",
          padding: "12px 14px",
          border: "1px solid var(--linie)",
          borderRadius: 10,
          background: "var(--feld)",
          boxShadow: "0 1px 0 rgba(0, 0, 0, 0.04)",
        }}
      >
        {element.badge && (
          <span
            aria-label={`AAVV ${element.badge}`}
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: `2px solid ${aavvBlau}`,
              color: aavvBlau,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 850,
              fontSize: 17,
              lineHeight: 1,
              background: "rgba(37, 99, 235, 0.08)",
            }}
          >
            {element.badge}
          </span>
        )}
        <p style={{ margin: "5px 0 0", lineHeight: 1.5 }}>
          <strong style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>{element.label}</strong>{" "}
          <span style={{ whiteSpace: "pre-line" }}>{element.text}</span>
        </p>
      </div>
    );
  }
  if (element.typ === "liste") {
    return <ul className="liste" style={{ marginTop: 10, padding: "10px 14px 4px 34px" }}>{element.punkte.map((p, i) => <Listenpunkt key={i} punkt={p} />)}</ul>;
  }
  if (element.typ === "nummernKomplex") {
    return (
      <ol
        start={element.start || 1}
        style={{
          paddingLeft: 30,
          margin: "8px 0 12px",
          display: "grid",
          gap: 8,
        }}
      >
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
      data-schema-ton={block.postitTon || block.ton}
      data-schema-ton-normen={block.postitTonNormen ? JSON.stringify(block.postitTonNormen) : undefined}
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
