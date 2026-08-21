import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const farben = {
  ansatz: "var(--rot)",
  bewertung: "var(--orange)",
  technik: "var(--gruen)",
  hinweis: "var(--magenta)",
  neutral: "var(--tinte)",
};

const schemata = [
  {
    id: "ve-original",
    titel: "Verdeckte Einlage (vE)",
    bloecke: [
      {
        titel: "Vorprüfung:", ton: "hinweis", inhalt: [
          { typ: "text", text: "Wer hat den Vorteil?\n⇒ Gesellschaft, vE" },
        ],
      },
      {
        titel: "Beurteilung des Gesellschafters:", ton: "neutral", inhalt: [
          { typ: "untertitel", text: "Anteile = Privatvermögen" },
          { typ: "nummern", punkte: [
            "§ 17 Abs. 2a S. 3 Nr. 1 EStG nachträgliche AK (nAK) auf die Beteiligung",
            "Veräußerungsvorgang des verdeckt eingelegten WG, § 17 Abs. 1 S. 2 EStG, § 20 Abs. 2 S. 2 EStG oder § 23 Abs. 1 S. 5 Nr. 2 EStG",
          ] },
          { typ: "untertitel", text: "Anteile = Betriebsvermögen" },
          { typ: "nummernKomplex", punkte: [
            { text: "§ 6 Abs. 6 S. 2 EStG: nAK auf Beteiligung und Veräußerung des verdeckt eingelegten WG (H 8.9 „Behandlung beim Gesellschafter“ KStH)\nBeachte: Wenn kein einlagefähiger Vermögensvorteil => § 1 AStG (2. Stufe, ADB)" },
            { text: "Erhöhung AK und Ausbuchung des eingelegten Wirtschaftsguts 1. Stufe (IDB):\nnAK Beteiligung an Wirtschaftsgut\n(ggf. §§ 8b Abs. 2 S. 1, 2, 6 und Abs. 3 S. 1 KStG; ggf. § 6b Abs. 1 EStG)" },
            { text: "USt: uWA § 3 Abs. 1b S. 1 Nr. 1, S. 2 UStG mit BMG nach § 10 Abs. 4 S. 1 Nr. 1, S. 2 UStG" },
            { text: "Buchung 1. Stufe (IDB): Aufwand an USt\nADB: § 10 Nr. 2 KStG" },
          ] },
        ],
      },
      {
        titel: "Beurteilung der Gesellschaft:", ton: "ansatz", inhalt: [
          { typ: "nummernKomplex", punkte: [
            { text: "R 8.9 Abs. 1 KStR: Voraussetzungen vE prüfen\nHinweis: Klausurproblem ist, ob ein „einlagefähiger Vermögensvorteil“ vorliegt.\nNicht bei Nutzungsvorteilen H 8.9 „Nutzungsvorteile“ KStH (= Kostenersparnis)" },
            { text: "R 8.9 Abs. 4 S. 1 KStR, § 6 Abs. 1 Nr. 5 EStG: Bewertung Teilwert abzgl. Gegenleistung von Gesellschaft", kinder: [
              "Ausnahme: Wenn vE eines Wirtschaftsguts innerhalb von 3 J nach Anschaffung, welches beim Gesellschafter nicht zu § 17 Abs. 1 S. 2 EStG, § 20 Abs. 2 S. 2 EStG oder § 23 Abs. 1 S. 5 Nr. 2 EStG führt (Mülleimer, Grundstück was selbst genutzt wurde)",
              "⇒ Fortgeführte AK, R 8.9 Abs. 4 S. 4 KStR, § 6 Abs. 1 Nr. 5 a), § 6 Abs. 1 Nr. 5 S. 2 EStG",
            ] },
            { text: "Buchung 1. Stufe (IDB): WG/Bank/Verbindlichkeit/RSt an Ertrag" },
            { text: "§ 8 Abs. 3 S. 3 KStG: vE kürzen, 2. Stufe (= ADB)", kinder: [
              "Ausnahme: Insoweit kein § 8 Abs. 3 S. 3 KStG, wenn vE beim Gesellschafter nicht versteuert wurde (= Strafe, § 8 Abs. 3 S. 4 KStG „materielle Korrespondenz“; auch in Dreieckskonstellation § 8 Abs. 3 S. 5 KStG)",
            ] },
            { text: "§ 27 Abs. 1 S. 1 KStG: vE erhöht immer! das Einlagekonto bei Zufluss" },
          ] },
        ],
      },
    ],
  },
  {
    id: "vga-original",
    titel: "Verdeckte Gewinnausschüttung (vGA)",
    bloecke: [
      {
        titel: "Vorprüfung:", ton: "hinweis", inhalt: [
          { typ: "text", text: "Wer hat den Vorteil?\n⇒ Gesellschafter, vGA" },
        ],
      },
      {
        titel: "Beurteilung des Gesellschafters:", ton: "neutral", inhalt: [
          { typ: "untertitel", text: "Anteile = Privatvermögen" },
          { typ: "nummernKomplex", punkte: [
            { text: "§ 20 Abs. 1 Nr. 1 S. 2 EStG" },
            { text: "§ 32d Abs. 3 EStG: Nachholung der unterlassenen KapESt mit 25% § 32d Abs. 1 EStG bei Veranlagung; Beachte § 32d Abs. 2 Nr. 4 EStG: Keine 25%, wenn vGA bei Gesellschaft nicht hinzugerechnet wurde (materielle Korrespondenz)\n⇒ Möglich ggf. auch TEV § 32d Abs. 2 Nr. 3 EStG" },
            { text: "Fiktionstheorie: es wird fingiert, als wenn alles ordnungsgemäß (= richtig, also mit offener Gewinnausschüttung und anschließender angemessener Gegenleistung)" },
          ] },
          { typ: "untertitel", text: "Anteile = Betriebsvermögen" },
          { typ: "nummernKomplex", punkte: [
            { text: "§ 20 Abs. 1 Nr. 1 S. 2 EStG, § 20 Abs. 8 EStG, § 15 Abs. 1 S. 1 Nr. 1 EStG" },
            { text: "Buchung vGA 1. Stufe (IDB): Wirtschaftsgut/Aufwand an Beteiligungsertrag vGA\nAbschreibung WG an Wirtschaftsgut\nDie Buchungen sind im Ergebnis die Fiktionstheorie." },
            { text: "2. Stufe (ADB):", kinder: [
              "§ 8b Abs. 1 S. 1 KStG, § 8b Abs. 5 S. 1 KStG für Beteiligungsertrag aus vGA, aber nur wenn § 8b Abs. 4 S. 1 KStG 10% zu Beginn des Kj",
              "oder § 3 Nr. 40 d) EStG, § 3 Nr. 40 Satz 2 EStG => TEV",
              "Ausnahme: Kein § 8b Abs. 1 S. 1 KStG, wenn vGA bei Gesellschaft nicht hinzugerechnet wurde (= Strafe, § 8b Abs. 1 S. 2 KStG „materielle Korrespondenz“, Abgrenzung § 8b Abs. 1 S. 5 KStG in Dreieckskonstellation)",
              "Kein TEV, wenn vGA bei Gesellschaft nicht hinzugerechnet wurde (= Strafe, § 3 Nr. 40 d) Satz 2 EStG „materielle Korrespondenz“)",
            ] },
          ] },
        ],
      },
      {
        titel: "Beurteilung der Gesellschaft:", ton: "ansatz", inhalt: [
          { typ: "nummernKomplex", punkte: [
            { text: "R 8.5 Abs. 1 KStR: Voraussetzungen vGA prüfen" },
            { text: "H 8.6 „Hingabe von Wirtschaftsgütern“ „Nutzungsüberlassungen“ KStH: Bewertung vGA\n⇒ Gem. Wert (inkl. USt) abzgl. Gegenleistung Gesellschafter" },
            { text: "§ 8 Abs. 3 S. 2 KStG: vGA hinzurechnen 2. Stufe (ADB) mit gem. Wert abzgl. Gegenleistung Gesellschafter" },
            { text: "Leistung iSd. § 27 Abs. 1 S. 3 KStG (ob aus § 27 KStG, offenlassen)" },
            { text: "USt: uWA § 3 … oder verbilligte Leistung § 3 … UStG mit BMG nach § 10 Abs. 4 S. 1 Nr. 1 UStG, ggf. Mindest-BMG § 10 Abs. 5 S. 1 Nr. 1 UStG bei verbilligter Lieferung" },
            { text: "Buchung 1. Stufe (IDB): Aufwand an USt" },
            { text: "R 8.6 KStR: USt nicht hinzurechnen, weil vGA mit gem. Wert (also inkl. USt)" },
          ] },
        ],
      },
    ],
  },
  {
    id: "8c-8d-original",
    titel: "§ 8c / § 8d KStG",
    bloecke: [
      {
        titel: "Schema § 8c / § 8d KStG", ton: "ansatz", inhalt: [
          { typ: "hinweis", text: "(gilt über § 10a S. 10, 11 GewStG auch in der GewSt)" },
          { typ: "nummernKomplex", punkte: [
            { text: "§ 8c Abs. 1 S. 1 KStG:", kinder: ["Mehr als 50%", "Innerhalb von 5 J.", "Sonderfall: auch bei Kapitalerhöhung § 8c Abs. 1 S. 3 KStG"] },
            { text: "Zeitpunkt des Verlustuntergangs", kinder: ["Übergang wirtschaftliches Eigentum (BMF, § 8c/1, Rn. 13)", "Bei Kapitalerhöhung Eintragung Handelsregister (BMF, § 8c/1, Rn. 14)"] },
            { text: "Umfang des Verlustuntergangs", kinder: ["⇒ Vollständiger Verlustuntergang", "Sonderfall: unterjähriger Beteiligungserwerb (BMF, § 8c/1, Rn. 33)", "Bis zum schädlichen Beteiligungserwerb entstandener Gewinn kann mit noch nicht genutzten Verlusten verrechnet werden!", "Bis zum schädlichen Beteiligungserwerb entstandener Verlust fällt auch weg!"] },
            { text: "Ausnahmen:", kinder: [
              "§ 8c Abs. 1 S. 4 KStG: Konzernklausel",
              "§ 8c Abs. 1 S. 5 KStG: stille Reserve-Klausel",
              "Ermittlung stille Reserven § 8c Abs. 1 S. 6 KStG: Kaufpreis (KP) ./. EK = st. Reserven (ggf. KP für z.B. 60%, dann hochrechnen)",
              "Sonderfall: nur stpfl. stille Reserven, also z.B. nicht: Beteiligungen wg. § 8b Abs. 2 S. 1 KStG; Ausl. Grundstücke wg. Belegenheitsprinzip Art. 6 DBA",
              "§ 8c Abs. 1a KStG: Sanierungsklausel",
              "§ 8d Abs. 1 S. 1 KStG: auf Antrag fortführungsgebundener Verlustvortrag",
              "Nicht möglich, wenn in Veranlagungszeiträumen -3 (= insgesamt 4 VZ): Mehrere Geschäftsbetriebe, § 8d Abs. 1 S. 1 KStG; Mitunternehmer an PersG, § 8d Abs. 1 S. 2 Nr. 2 KStG; OT bei Organschaft, § 8d Abs. 1 S. 2 Nr. 2 KStG",
              "Nachbetrachtung und nachträglicher Verlustuntergang: § 8d Abs. 2 KStG (= schädliche Ereignisse führen zum Wegfall). Aber: § 8c Abs. 1 S. 5 ff. KStG st. Reserve-Klausel gilt dann für diesen nachträglichen Wegfall, siehe § 8d Abs. 2 S. 1 Hs. 2 KStG",
            ] },
          ] },
        ],
      },
    ],
  },
  {
    id: "organschaft-original",
    titel: "Ertragsteuerliche Organschaft",
    bloecke: [
      {
        titel: "Schema ertragsteuerliche Organschaft", ton: "ansatz", inhalt: [
          { typ: "nummernKomplex", punkte: [
            { text: "Taugliche Organgesellschaft (= OG), § 14 Abs. 1 S. 1 KStG", kinder: ["KapG (GmbH über § 17 Abs. 1 S. 1 KStG)", "Geschäftsleitung im Inland und Sitz in EU/EWR Staat"] },
            { text: "Tauglicher Organträger (= OT), § 14 Abs. 1 S. 1 Nr. 2 KStG", kinder: ["Nat. Person, KapG oder PersG mit originär gewerblichen Einkünften, § 14 Abs. 1 S. 1 Nr. 2 S. 2 KStG", "Deutsches Besteuerungsrecht am Organeinkommen, § 14 Abs. 1 S. 1 Nr. 2 S. 4-7 KStG"] },
            { text: "Finanzielle Eingliederung, § 14 Abs. 1 S. 1 Nr. 1 KStG", kinder: ["Stimmrechtsmehrheit von Beginn des Wj. der Organgesellschaft", "Mittelbare Beteiligung zählen nur, wenn diese mittelbare Beteiligung beherrscht wird"] },
            { text: "Gewinnabführungsvertag (GAV), § 14 Abs. 1 S. 1 Nr. 3 KStG (R 14.5 KStR)", kinder: ["Mindestlaufzeit 5 Jahre inkl. tatsächliche, rechtswirksame Abführung des gesamten Gewinns an den Organträger", "Bildung von Gewinnrücklagen bei Organgesellschaft zulässig, § 14 Abs. 1 S. 1 Nr. 4 KStG", "bei GmbH als Organgesellschaft § 17 Abs. 1 S. 2 Nr. 1 und Nr. 2 KStG"] },
          ] },
          { typ: "hinweis", text: "Rechtsfolge: Zurechnung des Einkommens der OG an den OT erstmals für das Kalenderjahr, in dem das Wirtschaftsjahr endet, in dem der GAV wirksam wird, § 14 Abs. 1 S. 2 KStG" },
        ],
      },
      {
        titel: "Problem 1: Zurechnung des Einkommens", ton: "bewertung", inhalt: [
          { typ: "liste", punkte: ["R 14.6 Abs. 1 S. 1, 2 KStR: Bei OT handelsrechtlichen erhaltenen abgeführten Gewinn abziehen und steuerrechtlich erhaltenes Einkommen zurechnen (sonst doppelt berücksichtigt)"] },
        ],
      },
      {
        titel: "Problem 2: außenstehender Gesellschafter der OG", ton: "bewertung", inhalt: [
          { typ: "liste", punkte: [
            "Ausgleichszahlung nicht abziehbar, § 4 Abs. 5 S. 1 Nr. 9 EStG",
            "Ausgleichszahlung an außenstehenden Gesellschafter von OG iHv. 20/17 nach § 16 S. 1 KStG immer selbst zu versteuern",
            "Auch vGA an außenstehenden Gesellschafter ist von OG selbst zu versteuern, R 14.6 Abs. 4 S. 4 KStR",
          ] },
        ],
      },
      {
        titel: "Problem 3: Minderabführung bzw. Mehrabführungen aus organschaftlicher Zeit, § 14 Abs. 4 KStG", ton: "technik", inhalt: [
          { typ: "untertitel", text: "Bei OT:" },
          { typ: "liste", punkte: [
            { text: "Minderabführung der OG an den OT (z.B. Drohverlust-RSt oder Gewinnrücklage bei der OG), § 14 Abs. 4 S. 6 KStG:", kinder: ["§ 14 Abs. 4 S. 1, 3 KStG: Erhöhung bilanzielle AK des OT auf Beteiligung an OG", "Buchung bei OT im Klausurjahr: Beteiligung OG an Ertrag", "BMF § 14/2 Rn. 7: adB neutralisieren"] },
            { text: "Mehrabführung der OG an den OT (z.B. § 6b EStG bei OG), § 14 Abs. 4 S. 6 KStG:", kinder: ["§ 14 Abs. 4 S. 2, 3 KStG: Minderung bilanzielle AK des OT", "Buchung bei OT im Klausurjahr: Aufwand an Beteiligung OG", "BMF § 14/2 Rn. 8: adB neutralisieren"] },
          ] },
          { typ: "untertitel", text: "Bei OG:" },
          { typ: "liste", punkte: ["§ 27 Abs. 6 KStG"] },
        ],
      },
      {
        titel: "Problem 4:", ton: "hinweis", inhalt: [
          { typ: "liste", punkte: ["Minderabführung bzw. Mehrabführungen aus VORorganschaftlicher Zeit ⇒ § 14 Abs. 3 KStG"] },
        ],
      },
      {
        titel: "Problem 5: Einkommensermittlung bei der OG, § 15 KStG", ton: "bewertung", inhalt: [
          { typ: "liste", punkte: ["Kein Verlustabzug bei der OG, § 15 S. 1 Nr. 1 KStG", "Kein § 8b KStG bei der OG, § 15 S. 1 Nr. 2 KStG"] },
        ],
      },
      {
        titel: "GewSt:", ton: "neutral", inhalt: [
          { typ: "liste", punkte: [
            "Voraussetzungen s.o. (nicht nochmal prüfen in Klausur!)",
            "⇒ Rechtsfolge: § 2 Abs. 2 S. 2 GewStG: OG gilt als Betriebsstätte",
            "⇒ R 7.1 Abs. 5 S. 1-5 GewStR: getrennte Ermittlung Gewerbeertrag für OT und OG",
            "⇒ R 7.1 Abs. 5 S. 10 GewStR: Addition der beiden Gewerbeerträge; § 16 KStG gilt in der GewSt nicht",
          ] },
          { typ: "hinweis", text: "Sehr wichtig: für Zwecke der GewSt ist § 8b Abs. 1 KStG bei der Organgesellschaft anzuwenden, § 7a Abs. 2 GewStG!" },
          { typ: "hinweis", text: "Wichtig: Zerlegung der GewSt gem. § 28 ff. GewStG, falls OT und OG in unterschiedlichen Gemeinden" },
        ],
      },
    ],
  },
];

function Listenpunkt({ punkt }) {
  if (typeof punkt === "string") return <li style={{ whiteSpace: "pre-line" }}>{punkt}</li>;
  return (
    <li>
      <span style={{ whiteSpace: "pre-line" }}>{punkt.text}</span>
      {punkt.kinder?.length > 0 && (
        <ul style={{ marginTop: 8 }}>
          {punkt.kinder.map((kind, i) => <Listenpunkt key={i} punkt={kind} />)}
        </ul>
      )}
    </li>
  );
}

function Inhalt({ element }) {
  if (element.typ === "untertitel") return <h4 style={{ margin: "14px 0 6px", fontFamily: "var(--serif)" }}>{element.text}</h4>;
  if (element.typ === "text") return <p style={{ margin: "0 0 10px", whiteSpace: "pre-line" }}>{element.text}</p>;
  if (element.typ === "hinweis") {
    return (
      <div style={{ borderLeft: `4px solid ${farben.hinweis}`, padding: "10px 12px", margin: "10px 0", background: "var(--feld)" }}>
        <strong style={{ whiteSpace: "pre-line" }}>{element.text}</strong>
      </div>
    );
  }
  if (element.typ === "liste") {
    return <ul className="liste" style={{ marginTop: 8 }}>{element.punkte.map((p, i) => <Listenpunkt key={i} punkt={p} />)}</ul>;
  }
  if (element.typ === "nummern" || element.typ === "nummernKomplex") {
    return (
      <ol style={{ paddingLeft: 26, margin: "8px 0 12px" }}>
        {element.punkte.map((p, i) => <Listenpunkt key={i} punkt={p} />)}
      </ol>
    );
  }
  return null;
}

function SchemaBlock({ block }) {
  return (
    <section
      style={{
        border: "1px solid var(--linie)",
        borderLeft: `6px solid ${farben[block.ton] || farben.neutral}`,
        background: "var(--papier)",
        padding: "16px 18px",
        marginBottom: 12,
      }}
    >
      <h3 style={{ margin: "0 0 12px", color: farben[block.ton] || farben.neutral }}>{block.titel}</h3>
      {block.inhalt.map((element, i) => <Inhalt key={i} element={element} />)}
    </section>
  );
}

function OriginalSchemata() {
  const [aktiv, setAktiv] = useState(schemata[0].id);
  const schema = schemata.find((s) => s.id === aktiv) || schemata[0];

  return (
    <section className="abschnitt" style={{ marginTop: 0 }}>
      <div className="filter" style={{ marginBottom: 14 }}>
        {schemata.map((s, i) => (
          <button key={s.id} aria-pressed={aktiv === s.id} onClick={() => setAktiv(s.id)}>
            {i + 1}. {s.titel}
          </button>
        ))}
      </div>

      <article className="panel" style={{ padding: 0, overflow: "hidden" }}>
        <header style={{ padding: "20px 22px", borderBottom: "1px solid var(--linie)", background: "var(--feld)" }}>
          <span className="kicker">Originalschema {schemata.findIndex((s) => s.id === schema.id) + 1} von 4</span>
          <h2 style={{ margin: "6px 0 0" }}>{schema.titel}</h2>
        </header>
        <div style={{ padding: "18px" }}>
          {schema.bloecke.map((block, i) => <SchemaBlock key={i} block={block} />)}
        </div>
        <footer style={{ padding: "10px 18px", borderTop: "1px solid var(--linie)", fontSize: 12, color: "var(--ink-weich)" }}>
          Quelle: © Markus Nöthen · Schema KStG · 5 Seiten · Originalreihenfolge und -logik übernommen
        </footer>
      </article>
    </section>
  );
}

export default function KstOriginalSchemataEnhancer() {
  const [host, setHost] = useState(null);

  useEffect(() => {
    let currentGrid = null;
    let currentHost = null;
    let hidden = [];
    let pageheadState = null;

    const restore = () => {
      hidden.forEach(({ el, display }) => {
        if (el?.isConnected) el.style.display = display;
      });
      hidden = [];
      if (pageheadState?.head?.isConnected) pageheadState.head.textContent = pageheadState.headText;
      if (pageheadState?.lead?.isConnected) pageheadState.lead.textContent = pageheadState.leadText;
      if (pageheadState?.count?.isConnected) pageheadState.count.textContent = pageheadState.countText;
      pageheadState = null;
      if (currentHost?.isConnected) currentHost.remove();
      currentHost = null;
      currentGrid = null;
      setHost(null);
    };

    const sync = () => {
      const grid = document.querySelector(".kst-schemata");
      if (!grid) {
        if (currentGrid) restore();
        return;
      }
      if (grid === currentGrid && currentHost?.isConnected) return;
      if (currentGrid) restore();

      currentGrid = grid;
      const pruefpfad = grid.previousElementSibling?.classList?.contains("kst-pruefpfad") ? grid.previousElementSibling : null;
      const hinweis = grid.nextElementSibling?.classList?.contains("kst-schemahinweis") ? grid.nextElementSibling : null;
      [pruefpfad, hinweis].filter(Boolean).forEach((el) => {
        hidden.push({ el, display: el.style.display });
        el.style.display = "none";
      });

      Array.from(grid.children).forEach((el) => {
        hidden.push({ el, display: el.style.display });
        el.style.display = "none";
      });

      const pagehead = grid.parentElement?.querySelector(".pagehead");
      if (pagehead) {
        const head = pagehead.querySelector("h1");
        const lead = pagehead.querySelector(".lead");
        const count = pagehead.querySelector(".zaehler");
        pageheadState = {
          head, lead, count,
          headText: head?.textContent || "",
          leadText: lead?.textContent || "",
          countText: count?.textContent || "",
        };
        if (head) head.textContent = "Vier Originalschemata aus „Schema KStG“";
        if (lead) lead.textContent = "Originalreihenfolge und Prüfungslogik des 5-seitigen Schema-PDFs – in derselben Karten-, Filter- und Blockdarstellung wie die Originalschemata in Klausur 3.";
        if (count) count.textContent = "4 Originalschemata";
      }

      currentHost = document.createElement("div");
      currentHost.dataset.kstOriginalschemata = "true";
      currentHost.style.gridColumn = "1 / -1";
      grid.prepend(currentHost);
      setHost(currentHost);
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      restore();
    };
  }, []);

  return host ? createPortal(<OriginalSchemata />, host) : null;
}
