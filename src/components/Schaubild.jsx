import React from "react";
import schaubilder from "../data/schaubilder";

/* Farben kommen aus dem Designsystem, damit die Schaubilder im Dunkelmodus mitlaufen. */
const F = {
  papier: "var(--papier)",
  feld: "var(--feld)",
  linie: "var(--linie)",
  ink: "var(--ink)",
  weich: "var(--ink-weich)",
  tinte: "var(--tinte)",
  rot: "var(--rot)",
  orange: "var(--orange)",
  gruen: "var(--gruen)",
  magenta: "var(--magenta)",
};
const flaeche = { tinte: "var(--tinte-feld)", rot: "var(--rot-feld)", orange: "var(--orange-feld)", gruen: "var(--gruen-feld)", magenta: "var(--magenta-feld)", neutral: "var(--feld)", papier: "var(--papier)" };
const strich = { tinte: F.tinte, rot: F.rot, orange: F.orange, gruen: F.gruen, magenta: F.magenta, neutral: F.linie, papier: F.linie };

const Pfeilspitzen = () => (
  <defs>
    <marker id="sb-pfeil" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill={F.ink} />
    </marker>
  </defs>
);

function Text({ x, y, children, size = 12.5, weight = 500, fill = F.ink, anchor = "middle", mono, italic }) {
  return (
    <text
      x={x} y={y} textAnchor={anchor} fill={fill} fontSize={size} fontWeight={weight}
      fontStyle={italic ? "italic" : undefined}
      fontFamily={mono ? "var(--mono)" : "var(--sans)"}
    >
      {children}
    </text>
  );
}

/* Mehrzeiliger Text im Kasten */
function Zeilen({ x, y, lines, size = 11.5, fill = F.weich, mono, lh = 13 }) {
  return lines.map((line, i) => (
    <Text key={i} x={x} y={y + i * lh} size={size} fill={fill} mono={mono} weight={400}>{line}</Text>
  ));
}

/* Bricht eine Kastenüberschrift an Wortgrenzen um, damit sie im Rechteck
   bleibt. Ohne den Umbruch läuft ein langer Titel seitlich heraus und
   überdeckt im Entscheidungsbaum den Zweigpfeil samt Beschriftung.
   0,56 em ist die mittlere Zeichenbreite der Sans in diesem Schnitt. */
function umbrechen(text, breite, size) {
  const proZeile = Math.max(8, Math.floor((breite - 16) / (size * 0.56)));
  const worte = String(text).split(" ");
  const zeilen = [];
  let aktuell = "";
  for (const wort of worte) {
    if (!aktuell) aktuell = wort;
    else if ((aktuell + " " + wort).length <= proZeile) aktuell += " " + wort;
    else { zeilen.push(aktuell); aktuell = wort; }
  }
  if (aktuell) zeilen.push(aktuell);
  return zeilen;
}

function Kasten({ x, y, w, h, titel, zeilen = [], ton = "papier", mono }) {
  const size = 13, zh = size + 2;
  const titelZeilen = titel ? umbrechen(titel, w, size) : [];
  const versatz = ((titelZeilen.length - 1) * zh) / 2;
  const start = zeilen.length ? y + h / 2 - (zeilen.length * 13) / 2 + 2 + versatz : 0;
  const ersteZeile = zeilen.length
    ? start - 6 - (titelZeilen.length - 1) * zh
    : y + h / 2 + 4.5 - versatz;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={flaeche[ton]} stroke={strich[ton]} strokeWidth="1.4" />
      {titelZeilen.map((zeile, i) => (
        <Text key={i} x={x + w / 2} y={ersteZeile + i * zh} size={size} weight={600}>{zeile}</Text>
      ))}
      {zeilen.length > 0 && <Zeilen x={x + w / 2} y={start + 12} lines={zeilen} mono={mono} />}
    </g>
  );
}

/* ---------------------------------------------------------------- Fluss */
function Fluss({ spec }) {
  const n = spec.schritte.length;
  const bw = 168, bh = 78, lucke = 34;
  const w = n * bw + (n - 1) * lucke + 24;
  const h = bh + 46;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={spec.titel}>
      <Pfeilspitzen />
      {spec.schritte.map((s, i) => {
        const x = 12 + i * (bw + lucke);
        return (
          <g key={i}>
            <Kasten x={x} y={30} w={bw} h={bh} titel={s.titel} zeilen={s.zeilen || []} ton={s.ton || "papier"} mono />
            {s.nummer && <Text x={x + 6} y={22} anchor="start" size={11} mono fill={F.weich}>{s.nummer}</Text>}
            {i < n - 1 && <line x1={x + bw + 5} y1={30 + bh / 2} x2={x + bw + lucke - 6} y2={30 + bh / 2} stroke={F.ink} strokeWidth="1.4" markerEnd="url(#sb-pfeil)" />}
          </g>
        );
      })}
    </svg>
  );
}

/* --------------------------------------------------------- Entscheidung */
function Entscheidung({ spec }) {
  const ebenen = spec.ebenen;
  const bw = 250, bh = 62, dy = 104;
  const w = 700;
  const h = 30 + ebenen.length * dy;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={spec.titel}>
      <Pfeilspitzen />
      {ebenen.map((e, i) => {
        const y = 16 + i * dy;
        const xFrage = (w - bw) / 2 - 130;
        return (
          <g key={i}>
            <Kasten x={xFrage} y={y} w={bw} h={bh} titel={e.frage} zeilen={e.hinweis ? [e.hinweis] : []} ton="neutral" />
            <line x1={xFrage + bw} y1={y + bh / 2} x2={xFrage + bw + 56} y2={y + bh / 2} stroke={F.ink} strokeWidth="1.3" markerEnd="url(#sb-pfeil)" />
            <Text x={xFrage + bw + 28} y={y + bh / 2 - 7} size={11} mono fill={F.rot}>{e.zweigLabel || "ja"}</Text>
            <Kasten x={xFrage + bw + 62} y={y + 6} w={220} h={bh - 12} titel={e.zweig} ton={e.zweigTon || "rot"} />
            {i < ebenen.length - 1 && (
              <>
                <line x1={xFrage + bw / 2} y1={y + bh} x2={xFrage + bw / 2} y2={y + dy - 2} stroke={F.ink} strokeWidth="1.3" markerEnd="url(#sb-pfeil)" />
                <Text x={xFrage + bw / 2 + 8} y={y + bh + 24} anchor="start" size={11} mono fill={F.weich}>{e.weiterLabel || "nein / weiter"}</Text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* --------------------------------------------------------- Zeitstrahl */
function Zeitstrahl({ spec }) {
  const w = 760;
  const marken = spec.marken;
  const y = spec.balken ? 120 : 86;
  const h = y + 66;
  const px = (p) => 60 + p * (w - 120);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={spec.titel}>
      <Pfeilspitzen />
      {spec.balken && spec.balken.map((b, i) => {
        const x1 = px(b.von), x2 = px(b.bis);
        return (
          <g key={i}>
            <rect x={x1} y={26 + i * 30} width={Math.max(x2 - x1, 2)} height="20" fill={flaeche[b.ton || "tinte"]} stroke={strich[b.ton || "tinte"]} strokeWidth="1.2" />
            <Text x={(x1 + x2) / 2} y={40 + i * 30} size={11} mono weight={500}>{b.label}</Text>
          </g>
        );
      })}
      <line x1="40" y1={y} x2={w - 30} y2={y} stroke={F.ink} strokeWidth="1.6" markerEnd="url(#sb-pfeil)" />
      {marken.map((m, i) => {
        const x = px(m.pos);
        return (
          <g key={i}>
            <line x1={x} y1={y - 9} x2={x} y2={y + 9} stroke={m.ton ? strich[m.ton] : F.ink} strokeWidth="2" />
            <Text x={x} y={y - 16} size={12} weight={600} fill={m.ton ? strich[m.ton] : F.ink}>{m.label}</Text>
            {m.sub && <Zeilen x={x} y={y + 26} lines={Array.isArray(m.sub) ? m.sub : [m.sub]} size={11} mono />}
          </g>
        );
      })}
    </svg>
  );
}

/* -------------------------------------------------------------- Säulen */
function Saeulen({ spec }) {
  const w = 700, h = 260, boden = 200, links = 60;
  const max = Math.max(...spec.werte.map((s) => s.wert));
  const bw = Math.min(96, (w - links - 40) / spec.werte.length - 22);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={spec.titel}>
      <line x1={links - 14} y1={boden} x2={w - 24} y2={boden} stroke={F.linie} strokeWidth="1.2" />
      {spec.werte.map((s, i) => {
        const hh = Math.max((s.wert / max) * 140, 3);
        const x = links + i * (bw + 22);
        return (
          <g key={i}>
            <rect x={x} y={boden - hh} width={bw} height={hh} fill={flaeche[s.ton || "tinte"]} stroke={strich[s.ton || "tinte"]} strokeWidth="1.3" />
            <Text x={x + bw / 2} y={boden - hh - 8} size={12} mono weight={600}>{s.anzeige || s.wert.toLocaleString("de-DE")}</Text>
            <Zeilen x={x + bw / 2} y={boden + 18} lines={Array.isArray(s.label) ? s.label : [s.label]} size={11} lh={13} />
          </g>
        );
      })}
      {spec.fussnote && <Text x={links - 14} y={h - 12} anchor="start" size={11.5} fill={F.weich} weight={400}>{spec.fussnote}</Text>}
    </svg>
  );
}

/* ----------------------------------------------------- Gegenüberstellung */
function Gegenueber({ spec }) {
  const w = 720, kopf = 44;
  const zeilen = Math.max(spec.links.punkte.length, spec.rechts.punkte.length);
  const h = kopf + zeilen * 30 + 30;
  const sw = (w - 30) / 2;
  const Spalte = ({ x, daten, ton }) => (
    <g>
      <rect x={x} y="8" width={sw} height={kopf} fill={flaeche[ton]} stroke={strich[ton]} strokeWidth="1.3" />
      <Text x={x + sw / 2} y={30} size={14} weight={700} fill={strich[ton]}>{daten.titel}</Text>
      <Text x={x + sw / 2} y={45} size={11} mono fill={F.weich} weight={400}>{daten.norm}</Text>
      {daten.punkte.map((p, i) => (
        <g key={i}>
          <rect x={x} y={kopf + 8 + i * 30} width={sw} height="30" fill={F.papier} stroke={F.linie} strokeWidth="1" />
          <Text x={x + 12} y={kopf + 27 + i * 30} anchor="start" size={12} weight={400}>{p}</Text>
        </g>
      ))}
    </g>
  );
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={spec.titel}>
      <Spalte x="0" daten={spec.links} ton={spec.links.ton || "gruen"} />
      <Spalte x={sw + 30} daten={spec.rechts} ton={spec.rechts.ton || "rot"} />
      {spec.fussnote && <Text x="0" y={h - 8} anchor="start" size={11.5} fill={F.weich} weight={400}>{spec.fussnote}</Text>}
    </svg>
  );
}

/* -------------------------------------------------------------- Stufen */
function Stufen({ spec }) {
  const w = 720, sh = 56;
  const h = spec.stufen.length * (sh + 12) + 16;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={spec.titel}>
      <Pfeilspitzen />
      {spec.stufen.map((s, i) => {
        const y = 8 + i * (sh + 12);
        return (
          <g key={i}>
            <rect x="0" y={y} width={w} height={sh} fill={flaeche[s.ton || "neutral"]} stroke={strich[s.ton || "neutral"]} strokeWidth="1.3" />
            <Text x="16" y={y + 24} anchor="start" size={13} weight={700} fill={strich[s.ton || "neutral"]}>{s.stufe}</Text>
            <Text x="16" y={y + 42} anchor="start" size={12} weight={400} fill={F.ink}>{s.text}</Text>
            {s.norm && <Text x={w - 14} y={y + 24} anchor="end" size={11} mono fill={F.weich} weight={400}>{s.norm}</Text>}
            {s.ergebnis && <Text x={w - 14} y={y + 42} anchor="end" size={11.5} weight={600} fill={strich[s.ton || "neutral"]}>{s.ergebnis}</Text>}
            {i < spec.stufen.length - 1 && <line x1={w / 2} y1={y + sh} x2={w / 2} y2={y + sh + 10} stroke={F.ink} strokeWidth="1.3" markerEnd="url(#sb-pfeil)" />}
          </g>
        );
      })}
    </svg>
  );
}

const renderer = { fluss: Fluss, entscheidung: Entscheidung, zeitstrahl: Zeitstrahl, saeulen: Saeulen, gegenueber: Gegenueber, stufen: Stufen };

export default function Schaubild({ id, spec: eigenesSpec }) {
  const spec = eigenesSpec || schaubilder[id];
  if (!spec) return null;
  const Render = renderer[spec.typ];
  if (!Render) return null;
  return (
    <figure className="schaubild">
      {spec.titel && <figcaption className="schaubild__titel">Schaubild · {spec.titel}</figcaption>}
      <div className="scroll-x"><Render spec={spec} /></div>
      {spec.legende && <p className="schaubild__legende">{spec.legende}</p>}
    </figure>
  );
}
