import React from "react";
import { umwstrHausaufgaben, UMWSTR_HA_FAELLE_GESAMT } from "../data/k3-umwstr-ha-faelle.js";
import { UMWSTR_HA_ORIGINALSEITEN } from "../data/k3-umwstr-ha-originaltexte.js";
import { UMWSTR_HA_FONTSTIL } from "../data/k3-umwstr-ha-richtext.js";
import "./k1-hausaufgaben.css";
import "./ao-hausaufgaben.css";
import "./k3-umwstr-hausaufgaben.css";

/* Darstellung wie bei den AO-Hausaufgaben: Der Wortlaut bleibt 1:1, die
   Darstellung ist aber digitaler Fließtext in der Dokumentschrift statt einer
   Monospace-Abbildung. Der Fettdruck stammt aus den Schriftinformationen der
   PDF-Quelle und wird nicht geraten. */

const normLine = (text) => String(text || "").trim().replace(/\s+/g, " ");

/* Wiederkehrende Kopf- und Fusszeilen der Quellen: Sie stehen auf jeder Seite
   und wuerden den Lesefluss zerhacken. Der eigentliche Text bleibt unberuehrt. */
const quellzeilen = (text) => String(text || "")
  .replace(/\r/g, "")
  .split("\n")
  .filter((line) => !/^\s*Kl\s*\d\s*\/\s*UmwStR\s*\/.*\(.*\d{4}\)\s*$/i.test(line))
  .filter((line) => !/^\s*KL\s*\d\s*\/\s*UmwStR\s*\/.*\(.*\d{4}\)\s*$/i.test(line))
  .filter((line) => !/^\s*\d{1,2}\s*$/.test(line));

const pageFontLines = (terminId, seite) => UMWSTR_HA_FONTSTIL.get(terminId)?.[Number(seite) - 1] || [];

function findFontLine(terminId, seite, line) {
  const wanted = normLine(line);
  if (!wanted) return null;
  const meta = pageFontLines(terminId, seite);
  const exact = meta.find((x) => normLine(x.l) === wanted);
  if (exact) return exact;
  const compact = wanted.replace(/\s/g, "");
  return meta.find((x) => normLine(x.l).replace(/\s/g, "") === compact) || null;
}

function styledLine(terminId, seite, line) {
  const clean = normLine(line);
  const meta = findFontLine(terminId, seite, line);
  if (!meta) return { clean, parts: [{ text: clean, bold: false }], allBold: false };
  const parts = (meta.p || [])
    .map(([text, bold]) => ({ text: normLine(text), bold: Boolean(bold) }))
    .filter((x) => x.text);
  const allBold = parts.length > 0 && parts.every((x) => x.bold);
  return { clean, parts: parts.length ? parts : [{ text: clean, bold: false }], allBold };
}

/* Bilanzen, Berechnungen und Gegenüberstellungen dürfen nicht zu Fließtext
   zusammenlaufen - sonst wird aus "Grundstück 10.000 | Darlehen 440.000" eine
   unlesbare Zeile. Erkannt wird ein größerer Abstand, hinter dem ein Zahlenfeld
   steht, sowie reine Zahlenzeilen. Ein bloßer Doppelabstand genügt nicht: Der
   Blocksatz der Quellen erzeugt solche Lücken auch mitten im Satz. */
const SPALTENABSTAND = /\S {3,}(?=[^\s]*\d)/;
const NUR_ZAHLEN = /^[\s\d.,/€%x+\-–.()_]*$/;

function istTabellenzeile(raw) {
  if (!raw.trim()) return false;
  if (NUR_ZAHLEN.test(raw) && /\d/.test(raw)) return true;
  return SPALTENABSTAND.test(raw);
}

/* Gemeinsame Einrückung entfernen, damit der Block links anliegt. */
function ohneGemeinsameEinrueckung(zeilen) {
  const gefuellt = zeilen.filter((z) => z.trim());
  if (!gefuellt.length) return zeilen;
  const minimum = Math.min(...gefuellt.map((z) => z.length - z.trimStart().length));
  return zeilen.map((z) => z.slice(minimum));
}

/* Aufeinanderfolgende Zeilen gleicher Auszeichnung werden zu einem Absatz
   zusammengezogen; eine Leerzeile trennt Absaetze. */
function sourceBlocks(text, terminId, seite) {
  const blocks = [];
  let current = null;
  const flush = () => {
    if (current?.kind === "tabelle") {
      /* Eine einzelne Zahlenzeile ist keine Aufstellung, sondern meist die
         Fortsetzung des vorangehenden Satzes ("... betrug lt. Vertrag" /
         "50.000 €."). Erst ab zwei Zeilen entsteht eine Spaltenstruktur. */
      if (current.roh.filter((z) => z.trim()).length >= 2) blocks.push(current);
      else if (current.roh.some((z) => z.trim())) {
        blocks.push({ kind: "normal", lines: current.roh.filter((z) => z.trim()).map((z) => styledLine(terminId, seite, z)) });
      }
    } else if (current?.lines?.length) blocks.push(current);
    current = null;
  };
  for (const raw of quellzeilen(text)) {
    if (!raw.trim()) { flush(); continue; }

    if (istTabellenzeile(raw)) {
      if (!current || current.kind !== "tabelle") { flush(); current = { kind: "tabelle", roh: [] }; }
      current.roh.push(raw.replace(/\s+$/, ""));
      continue;
    }

    const line = styledLine(terminId, seite, raw);
    if (!line.clean) continue;
    const kind = line.allBold ? "bold" : "normal";
    if (!current || current.kind !== kind) { flush(); current = { kind, lines: [] }; }
    current.lines.push(line);
  }
  flush();
  return blocks;
}

function RenderStyledLine({ line }) {
  return <>{line.parts.map((part, i) => {
    const text = `${i ? " " : ""}${part.text}`;
    return part.bold ? <strong key={i}>{text}</strong> : <React.Fragment key={i}>{text}</React.Fragment>;
  })}</>;
}

function RenderSourceBlock({ block }) {
  if (block.kind === "tabelle") {
    return (
      <div className="umw-ha-tabelle" role="region" aria-label="Aufstellung aus der Originalquelle" tabIndex={0}>
        <pre>{ohneGemeinsameEinrueckung(block.roh).join("\n")}</pre>
      </div>
    );
  }

  return (
    <p className={block.kind === "bold" ? "ao-ha-source-bold" : undefined}>
      {block.lines.map((line, i) => (
        <React.Fragment key={i}>
          {i && !(block.lines[i - 1]?.clean || "").endsWith("-") ? " " : null}
          <RenderStyledLine line={line} />
        </React.Fragment>
      ))}
    </p>
  );
}

function OriginalFliesstext({ text, terminId, seite }) {
  return (
    <div className="ao-ha-source-body">
      {sourceBlocks(text, terminId, seite).map((block, i) => <RenderSourceBlock block={block} key={i} />)}
    </div>
  );
}

function OriginalSeiten({ terminId, pages, typ }) {
  const original = UMWSTR_HA_ORIGINALSEITEN.get(terminId) || [];
  return (
    <div className={`ao-ha-originalseiten ao-ha-originalseiten--${typ}`}>
      {pages.map((seite) => (
        <section className="ao-ha-originalseite" key={`${terminId}-${typ}-${seite}`}>
          <div className="ao-ha-originalseite__kopf">
            <b>Originalquelle · PDF-S. {seite}</b>
            <span>Wortlaut 1:1 · PDF-Fettdruck · digital formatiert</span>
          </div>
          <OriginalFliesstext text={original[seite - 1] || ""} terminId={terminId} seite={seite} />
        </section>
      ))}
    </div>
  );
}

export default function K3UmwStRHausaufgaben() {
  const [terminId, setTerminId] = React.useState("alle");
  const termine = terminId === "alle" ? umwstrHausaufgaben : umwstrHausaufgaben.filter((t) => t.id === terminId);
  const fallzahl = termine.reduce((sum, t) => sum + t.faelle.length, 0);

  return (
    <div className="k1-ha-page ao-ha-page">
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 3 · Umwandlungssteuerrecht · Nacharbeit</span>
          <h1>Hausaufgaben UmwStR</h1>
          <p className="lead">
            Der Wortlaut der Aufgaben und Lösungen bleibt 1:1 erhalten. Die Darstellung ist digital:
            Fließtext nutzt die volle Inhaltsbreite und Fettdruck wird aus den Schriftinformationen der
            PDF-Quelle übernommen. Lösungen bleiben bis zum bewussten Aufklappen verborgen.
          </p>
        </div>
        <span className="zaehler">{fallzahl} von {UMWSTR_HA_FAELLE_GESAMT} Hausaufgabenfällen</span>
      </div>

      <div className="filter" aria-label="UmwStR-Hausaufgaben nach Fachtermin filtern">
        <button aria-pressed={terminId === "alle"} onClick={() => setTerminId("alle")}>Alle Fachtermine</button>
        {umwstrHausaufgaben.map((t) => (
          <button key={t.id} aria-pressed={terminId === t.id} onClick={() => setTerminId(t.id)}>
            {t.fachtermin} Fachtermin
          </button>
        ))}
      </div>

      {termine.map((termin) => {
        const original = UMWSTR_HA_ORIGINALSEITEN.get(termin.id) || [];
        return (
          <section className="k1-ha-termin" key={termin.id}>
            <div className="k1-ha-termin__kopf">
              <div>
                <span className="kicker">Umwandlungssteuerrecht · {termin.fachtermin} Fachtermin</span>
                <h2>Hausaufgabe {termin.fachtermin.replace(".", "")}</h2>
              </div>
              <span>{termin.seiten} PDF-Seiten · Rechtsstand {termin.rechtsstand}</span>
            </div>

            <aside className="panel k1-ha-quelle ao-ha-original-didaktik">
              <div className="ao-ha-originalseite__kopf">
                <b>Originalquelle · PDF-S. 1 · Titelblatt und didaktischer Hinweis</b>
                <span>Wortlaut 1:1 · PDF-Fettdruck · digital formatiert</span>
              </div>
              <OriginalFliesstext text={original[0] || ""} terminId={termin.id} seite={1} />
              <small>Quelle: {termin.quellentitel} · {termin.quelle} · PDF-S. 1–{termin.seiten}</small>
            </aside>

            <div className="k1-ha-liste">
              {termin.faelle.map((fall) => (
                <article className="panel k1-ha-karte ao-ha-karte" key={fall.id} data-umw-ha-id={fall.id}>
                  <div className="panel__head">
                    <div>
                      <span className="kicker">{termin.fachtermin} Fachtermin · Sachverhalt {fall.nummer} · {fall.seiten}</span>
                      <h3>{fall.titel}</h3>
                    </div>
                  </div>
                  <div className="tags k1-ha-themen">
                    {(fall.themen || []).map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>

                  <div className="kst-sachverhalt k1-ha-aufgabe">
                    <b>Aufgabenstellung / Sachverhalt · Originaltext</b>
                    <OriginalSeiten terminId={termin.id} pages={fall.aufgabeSeiten} typ="aufgabe" />
                  </div>

                  <details className="ao-ha-details">
                    <summary>Lösung &amp; Ergebnis anzeigen</summary>
                    <div className="fall k1-ha-loesung">
                      <OriginalSeiten terminId={termin.id} pages={fall.loesungSeiten} typ="loesung" />
                      <div className="fall__block ao-ha-digitale-links">
                        <b>Einschlägige Normen</b>
                        <div className="tags">{(fall.normen || []).map((n) => <span className="tag" key={n}>{n}</span>)}</div>
                      </div>
                    </div>
                  </details>

                  <div className="k1-ha-fundstelle">
                    Quelle: {termin.quellentitel} · {fall.seiten} · Rechtsstand {termin.rechtsstand} ·
                    Wortlaut 1:1, PDF-Fettdruck übernommen, personenbezogene Zeile entfernt
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
