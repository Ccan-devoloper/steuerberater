import React from "react";
import { istrHausaufgaben, ISTR_HAUSAUFGABEN_GESAMT_SEITEN } from "../data/istr-hausaufgaben.js";
import "./k1-hausaufgaben.css";
import "./ao-hausaufgaben.css";
import "./istr-hausaufgaben.css";

const payloadCache = new Map();
const PAYLOAD_DATEIEN = {
  "ISTR-HA-1": [0, 1, 2, 3].map((i) => `/data/istr-ha/ISTR-HA-1.json.gz.b64.part${i}`),
  "ISTR-HA-2": ["/data/istr-ha/ISTR-HA-2.json.gz.b64"],
  "ISTR-HA-3": [0, 1, 2, 3, 4, 5].map((i) => `/data/istr-ha/ISTR-HA-3.json.gz.b64.part${i}`),
};

async function quellPayloadLaden(terminId) {
  if (payloadCache.has(terminId)) return payloadCache.get(terminId);
  const promise = (async () => {
    const dateien = PAYLOAD_DATEIEN[terminId] || [];
    if (!dateien.length) throw new Error(`IStR-Hausaufgabenquelle ${terminId} ist nicht registriert.`);
    const responses = await Promise.all(dateien.map((url) => fetch(url)));
    if (responses.some((response) => !response.ok)) throw new Error(`IStR-Hausaufgabenquelle ${terminId} konnte nicht vollständig geladen werden.`);
    if (typeof DecompressionStream !== "function") {
      throw new Error("Dieser Browser unterstützt die für die wortlautgetreuen IStR-Hausaufgaben benötigte gzip-Dekompression nicht.");
    }
    const base64 = (await Promise.all(responses.map((response) => response.text()))).join("").trim();
    const bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
    return JSON.parse(await new Response(stream).text());
  })();
  payloadCache.set(terminId, promise);
  return promise;
}

function useQuellPayload(terminId) {
  const [status, setStatus] = React.useState({ payload: null, fehler: null });
  React.useEffect(() => {
    let aktiv = true;
    setStatus({ payload: null, fehler: null });
    quellPayloadLaden(terminId)
      .then((payload) => aktiv && setStatus({ payload, fehler: null }))
      .catch((fehler) => aktiv && setStatus({ payload: null, fehler }));
    return () => { aktiv = false; };
  }, [terminId]);
  return status;
}

const normLine = (text) => String(text || "").trim().replace(/\s+/g, " ");

function findFontLine(fontPages, seite, line) {
  const wanted = normLine(line);
  if (!wanted) return null;
  const meta = fontPages?.[Number(seite) - 1] || [];
  const exact = meta.find((x) => normLine(x.l) === wanted);
  if (exact) return exact;
  const compact = wanted.replace(/\s/g, "");
  return meta.find((x) => normLine(x.l).replace(/\s/g, "") === compact) || null;
}

function styledLine(fontPages, seite, line) {
  const clean = normLine(line);
  const meta = findFontLine(fontPages, seite, line);
  if (!meta) return { clean, parts: [{ text: clean, bold: false }], allBold: false };
  const parts = (meta.p || [])
    .map(([text, bold]) => ({ text: normLine(text), bold: Boolean(bold) }))
    .filter((x) => x.text);
  const allBold = parts.length > 0 && parts.every((x) => x.bold);
  return { clean, parts: parts.length ? parts : [{ text: clean, bold: false }], allBold };
}

function sourceBlocks(text, fontPages, seite) {
  const blocks = [];
  let current = null;
  const flush = () => {
    if (current?.lines?.length) blocks.push(current);
    current = null;
  };
  for (const raw of String(text || "").replace(/\r/g, "").split("\n")) {
    if (!raw.trim()) {
      flush();
      continue;
    }
    const line = styledLine(fontPages, seite, raw);
    const kind = line.allBold ? "bold" : "normal";
    if (!current || current.kind !== kind) {
      flush();
      current = { kind, lines: [] };
    }
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
  return <p className={block.kind === "bold" ? "ao-ha-source-bold" : undefined}>
    {block.lines.map((line, i) => (
      <React.Fragment key={i}>
        {i && !(block.lines[i - 1]?.clean || "").endsWith("-") ? " " : null}
        <RenderStyledLine line={line} />
      </React.Fragment>
    ))}
  </p>;
}

function OriginalFliesstext({ text, fontPages, seite }) {
  return <div className="ao-ha-source-body">
    {sourceBlocks(text, fontPages, seite).map((block, i) => <RenderSourceBlock block={block} key={i} />)}
  </div>;
}

function OriginalSeiten({ payload, pages, typ }) {
  return <div className={`ao-ha-originalseiten ao-ha-originalseiten--${typ}`}>
    {pages.map((seite) => (
      <section className="ao-ha-originalseite" key={`${typ}-${seite}`}>
        <div className="ao-ha-originalseite__kopf">
          <b>Originalquelle · PDF-S. {seite}</b>
          <span>Wortlaut 1:1 · PDF-Fettdruck · digital formatiert</span>
        </div>
        <OriginalFliesstext text={payload.pages[seite - 1] || ""} fontPages={payload.font} seite={seite} />
      </section>
    ))}
  </div>;
}

function VerweisBlock({ fall, inhaltById, fallById, onOpenInhalt, onOpenFall, onOpenSchema }) {
  const module = (fall.querverweise || []).map((id) => inhaltById?.get?.(id)).filter(Boolean);
  const faelle = (fall.fallverweise || []).map((id) => fallById?.get?.(id)).filter(Boolean);
  const schemata = fall.schemaHinweise || [];
  if (!module.length && !faelle.length && !schemata.length) return null;
  return <aside className="k1-ha-querverweise istr-ha-querverweise">
    <b>Querverweise im IStR-Campus</b>
    <p>Zusätzliche Navigation – nicht Bestandteil des PDF-Wortlauts.</p>
    <div className="k1-ha-querverweise__links">
      {module.map((m) => <button type="button" key={m.id} onClick={() => onOpenInhalt?.(m.id)}>↗ Einheit {m.unit} · {m.id} · {m.title}</button>)}
      {faelle.map((f) => <button type="button" key={f.id} onClick={() => onOpenFall?.(f.id)}>↗ Einheit {f.unit} · Originalfall · {f.title}</button>)}
      {schemata.map((s) => <button type="button" key={s} onClick={() => onOpenSchema?.(s)}>↗ Prüfungsschema · {s}</button>)}
    </div>
  </aside>;
}

function Fachtermin({ termin, inhaltById, fallById, onOpenInhalt, onOpenFall, onOpenSchema }) {
  const { payload, fehler } = useQuellPayload(termin.id);

  if (fehler) {
    return <section className="k1-ha-termin"><article className="panel"><span className="kicker">{termin.fachtermin} Fachtermin</span><h2>Originalquelle konnte nicht geladen werden</h2><p>{fehler.message}</p></article></section>;
  }

  if (!payload) {
    return <section className="k1-ha-termin"><article className="panel"><span className="kicker">{termin.fachtermin} Fachtermin</span><h2>Originalquelle wird geladen …</h2><p>{termin.seiten} PDF-Seiten werden für die wortlautgetreue Darstellung vorbereitet.</p></article></section>;
  }

  return <section className="k1-ha-termin">
    <div className="k1-ha-termin__kopf">
      <div><span className="kicker">Internationales Steuerrecht · {termin.fachtermin} Fachtermin</span><h2>Hausaufgabe {termin.fachtermin.replace(".", "")}</h2></div>
      <span>{termin.seiten} PDF-Seiten · Rechtsstand {termin.rechtsstand}</span>
    </div>

    <aside className="panel k1-ha-quelle ao-ha-original-didaktik">
      <div className="ao-ha-originalseite__kopf">
        <b>Originalquelle · PDF-S. 1 · Didaktischer Hinweis</b>
        <span>Wortlaut 1:1 · PDF-Fettdruck · digital formatiert</span>
      </div>
      <OriginalFliesstext text={payload.pages[0] || ""} fontPages={payload.font} seite={1} />
      <small>Quelle: {termin.quellentitel} · {termin.quelle} · PDF-S. 1–{termin.seiten}</small>
    </aside>

    <div className="k1-ha-liste">
      {termin.faelle.map((fall) => <article className="panel k1-ha-karte ao-ha-karte" key={fall.id} data-istr-ha-id={fall.id}>
        <div className="panel__head"><div><span className="kicker">{termin.fachtermin} Fachtermin · Fall {fall.nummer} · {fall.seiten}</span><h3>{fall.titel}</h3></div></div>
        <div className="tags k1-ha-themen">{(fall.themen || []).map((t) => <span className="tag" key={t}>{t}</span>)}</div>

        <div className="kst-sachverhalt k1-ha-aufgabe">
          <b>Aufgabenstellung / Sachverhalt · Originaltext</b>
          <OriginalSeiten payload={payload} pages={termin.pagePlan.aufgabe} typ="aufgabe" />
        </div>

        {termin.pagePlan.material.length > 0 && <div className="kst-sachverhalt k1-ha-aufgabe istr-ha-material">
          <b>Mitgeliefertes Arbeitsmaterial · Originaltext</b>
          <p className="istr-ha-materialhinweis">Diese Seiten gehören zur Aufgabenquelle und werden vor der Lösung vollständig wiedergegeben.</p>
          <OriginalSeiten payload={payload} pages={termin.pagePlan.material} typ="material" />
        </div>}

        <details className="ao-ha-details">
          <summary>Lösung &amp; Ergebnis anzeigen</summary>
          <div className="fall k1-ha-loesung">
            <OriginalSeiten payload={payload} pages={termin.pagePlan.loesung} typ="loesung" />
            <div className="fall__block ao-ha-digitale-links">
              <b>Zusätzliche digitale Norm-/Schema-Sprünge</b>
              <div className="istr-ha-normkette">{(fall.normen || []).map((n) => <span className="norm" key={n}>{n}</span>)}</div>
            </div>
          </div>
        </details>

        <VerweisBlock fall={fall} inhaltById={inhaltById} fallById={fallById} onOpenInhalt={onOpenInhalt} onOpenFall={onOpenFall} onOpenSchema={onOpenSchema} />
        <div className="k1-ha-fundstelle">Originalquelle vollständig: PDF-S. 1–{termin.seiten}. Personenbezogene PDF-Fußzeile bewusst ausgelassen; fachlicher Wortlaut unverändert.</div>
      </article>)}
    </div>
  </section>;
}

export default function IstrHausaufgaben({ onOpenInhalt, onOpenFall, onOpenSchema, inhaltById, fallById, ziel }) {
  const [terminId, setTerminId] = React.useState("alle");
  const termine = terminId === "alle" ? istrHausaufgaben : istrHausaufgaben.filter((t) => t.id === terminId);
  const gesamtFaelle = istrHausaufgaben.reduce((sum, t) => sum + t.faelle.length, 0);
  const fallzahl = termine.reduce((sum, t) => sum + t.faelle.length, 0);

  React.useEffect(() => {
    if (!ziel?.id) return undefined;
    const termin = istrHausaufgaben.find((t) => t.faelle.some((f) => f.id === ziel.id));
    if (!termin) return undefined;
    setTerminId(termin.id);
    const timer = window.setTimeout(() => {
      const el = document.querySelector(`[data-istr-ha-id='${ziel.id}']`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      el?.classList.add("k1-ha-karte--ziel");
      window.setTimeout(() => el?.classList.remove("k1-ha-karte--ziel"), 1800);
    }, 450);
    return () => window.clearTimeout(timer);
  }, [ziel]);

  return <div className="k1-ha-page ao-ha-page istr-ha-page">
    <div className="pagehead">
      <div>
        <span className="kicker">Klausur 2 · Internationales Steuerrecht · Nacharbeit</span>
        <h1>Hausaufgaben IStR</h1>
        <p className="lead">Der Wortlaut der Aufgaben, des mitgelieferten DBA-Materials und der Lösungen bleibt 1:1 erhalten. Darstellung, Seitenkarten, Typografie, PDF-Fettdruck und eingeklappte Lösungen folgen dem AO-Hausaufgabenbereich. Die persönlichen PDF-Fußzeilen werden nicht veröffentlicht.</p>
      </div>
      <span className="zaehler">{fallzahl} von {gesamtFaelle} Hausaufgabenfällen · {ISTR_HAUSAUFGABEN_GESAMT_SEITEN}/38 PDF-Seiten</span>
    </div>

    <div className="filter" aria-label="IStR-Hausaufgaben nach Fachtermin filtern">
      <button aria-pressed={terminId === "alle"} onClick={() => setTerminId("alle")}>Alle Fachtermine</button>
      {istrHausaufgaben.map((t) => <button key={t.id} aria-pressed={terminId === t.id} onClick={() => setTerminId(t.id)}>{t.fachtermin} Fachtermin</button>)}
    </div>

    {termine.map((termin) => <Fachtermin key={termin.id} termin={termin} inhaltById={inhaltById} fallById={fallById} onOpenInhalt={onOpenInhalt} onOpenFall={onOpenFall} onOpenSchema={onOpenSchema} />)}
  </div>;
}
