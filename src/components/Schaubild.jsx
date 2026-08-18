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
function Zeilen({ x, y, lines, size = 11.5, fill = F.weich, mono, lh = 13, anchor = "middle", weight = 400 }) {
  return lines.map((line, i) => (
    <Text key={i} x={x} y={y + i * lh} size={size} fill={fill} mono={mono} weight={weight} anchor={anchor}>{line}</Text>
  ));
}

/* Bricht SVG-Texte an Wortgrenzen um. SVG-Text besitzt kein automatisches
   Wrapping; ohne diese Hilfsfunktion laufen längere Falltexte aus Kästen und
   verdecken benachbarte Spalten. 0,56 em ist eine konservative mittlere
   Zeichenbreite der verwendeten Sans-Schrift. */
function umbrechen(text, breite, size) {
  if (text === undefined || text === null || text === "") return [];
  const proZeile = Math.max(8, Math.floor((breite - 16) / (size * 0.56)));
  const worte = String(text).split(/\s+/);
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

function vieleUmbrechen(lines, breite, size) {
  return (lines || []).flatMap((line) => umbrechen(line, breite, size));
}

function Kasten({ x, y, w, h, titel, zeilen = [], ton = "papier", mono }) {
  const titelSize = 13, bodySize = 11.5, titelLh = 15, bodyLh = 13;
  const titelZeilen = titel ? umbrechen(titel, w - 14, titelSize) : [];
  const bodyZeilen = vieleUmbrechen(zeilen, w - 18, bodySize);
  const inhaltHoehe = titelZeilen.length * titelLh + (bodyZeilen.length ? 5 + bodyZeilen.length * bodyLh : 0);
  const oben = y + Math.max(8, (h - inhaltHoehe) / 2);
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={flaeche[ton]} stroke={strich[ton]} strokeWidth="1.4" />
      {titelZeilen.map((zeile, i) => (
        <Text key={i} x={x + w / 2} y={oben + 12 + i * titelLh} size={titelSize} weight={600}>{zeile}</Text>
      ))}
      {bodyZeilen.length > 0 && (
        <Zeilen
          x={x + w / 2}
          y={oben + titelZeilen.length * titelLh + 12}
          lines={bodyZeilen}
          size={bodySize}
          lh={bodyLh}
          mono={mono}
        />
      )}
    </g>
  );
}

function kastenHoehe(titel, zeilen, breite, minimum = 78) {
  const titelZeilen = umbrechen(titel, breite - 14, 13).length;
  const bodyZeilen = vieleUmbrechen(zeilen, breite - 18, 11.5).length;
  return Math.max(minimum, 20 + titelZeilen * 15 + (bodyZeilen ? 5 + bodyZeilen * 13 : 0));
}

/* ---------------------------------------------------------------- Fluss */
function Fluss({ spec }) {
  const n = spec.schritte.length;
  const bw = 168, lucke = 34;
  const bh = Math.max(...spec.schritte.map((s) => kastenHoehe(s.titel, s.zeilen || [], bw, 78)));
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
  const bw = 250, bh = 88, dy = 126;
  const w = 700;
  const h = 24 + ebenen.length * dy;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={spec.titel}>
      <Pfeilspitzen />
      {ebenen.map((e, i) => {
        const y = 12 + i * dy;
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
                <Text x={xFrage + bw / 2 + 8} y={y + bh + 22} anchor="start" size={11} mono fill={F.weich}>{e.weiterLabel || "nein / weiter"}</Text>
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
  const w = 700, h = 240, boden = 190, links = 60;
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
    </svg>
  );
}

/* ----------------------------------------------------- Gegenüberstellung */
function Gegenueber({ spec }) {
  const w = 720, luecke = 30;
  const sw = (w - luecke) / 2;
  const zeilen = Math.max(spec.links.punkte.length, spec.rechts.punkte.length);
  const titelLinks = umbrechen(spec.links.titel, sw - 22, 14);
  const titelRechts = umbrechen(spec.rechts.titel, sw - 22, 14);
  const normLinks = umbrechen(spec.links.norm, sw - 22, 10.5);
  const normRechts = umbrechen(spec.rechts.norm, sw - 22, 10.5);
  const kopf = Math.max(
    58,
    18 + Math.max(titelLinks.length, titelRechts.length) * 17 + Math.max(normLinks.length, normRechts.length) * 13,
  );
  const linksZeilen = spec.links.punkte.map((p) => umbrechen(p, sw - 24, 12));
  const rechtsZeilen = spec.rechts.punkte.map((p) => umbrechen(p, sw - 24, 12));
  const zeilenHoehen = Array.from({ length: zeilen }, (_, i) => {
    const anzahl = Math.max(linksZeilen[i]?.length || 0, rechtsZeilen[i]?.length || 0, 1);
    return Math.max(34, 16 + anzahl * 15);
  });
  const yStarts = [];
  let laufend = 8 + kopf;
  for (const hoehe of zeilenHoehen) {
    yStarts.push(laufend);
    laufend += hoehe;
  }
  const h = laufend + 8;

  const Spalte = ({ x, daten, ton, titelZeilen, normZeilen, punktZeilen }) => (
    <g>
      <rect x={x} y="8" width={sw} height={kopf} fill={flaeche[ton]} stroke={strich[ton]} strokeWidth="1.3" />
      <Zeilen x={x + sw / 2} y={27} lines={titelZeilen} size={14} lh={17} weight={700} fill={strich[ton]} />
      {normZeilen.length > 0 && (
        <Zeilen
          x={x + sw / 2}
          y={27 + titelZeilen.length * 17}
          lines={normZeilen}
          size={10.5}
          lh={13}
          mono
          fill={F.weich}
        />
      )}
      {Array.from({ length: zeilen }).map((_, i) => {
        const rowY = yStarts[i];
        const rowH = zeilenHoehen[i];
        const lines = punktZeilen[i] || [];
        const textY = rowY + rowH / 2 - ((Math.max(lines.length, 1) - 1) * 15) / 2 + 4;
        return (
          <g key={i}>
            <rect x={x} y={rowY} width={sw} height={rowH} fill={F.papier} stroke={F.linie} strokeWidth="1" />
            {lines.length > 0 && (
              <Zeilen x={x + 12} y={textY} lines={lines} size={12} lh={15} anchor="start" fill={F.ink} />
            )}
          </g>
        );
      })}
    </g>
  );

  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={spec.titel}>
      <Spalte
        x={0}
        daten={spec.links}
        ton={spec.links.ton || "gruen"}
        titelZeilen={titelLinks}
        normZeilen={normLinks}
        punktZeilen={linksZeilen}
      />
      <Spalte
        x={sw + luecke}
        daten={spec.rechts}
        ton={spec.rechts.ton || "rot"}
        titelZeilen={titelRechts}
        normZeilen={normRechts}
        punktZeilen={rechtsZeilen}
      />
    </svg>
  );
}

/* -------------------------------------------------------------- Stufen */
function Stufen({ spec }) {
  const w = 720;
  const linksBreite = 430;
  const rechtsBreite = 235;
  const rows = spec.stufen.map((s) => {
    const text = umbrechen(s.text, linksBreite - 30, 12);
    const norm = s.norm ? umbrechen(s.norm, rechtsBreite, 10.5) : [];
    const ergebnis = s.ergebnis ? umbrechen(s.ergebnis, rechtsBreite, 11.5) : [];
    const linksH = 36 + Math.max(text.length, 1) * 14;
    const rechtsH = 18 + norm.length * 13 + (ergebnis.length ? 5 + ergebnis.length * 14 : 0);
    return { s, text, norm, ergebnis, h: Math.max(64, linksH, rechtsH + 16) };
  });
  const yStarts = [];
  let laufend = 8;
  for (const row of rows) {
    yStarts.push(laufend);
    laufend += row.h + 12;
  }
  const h = laufend + 4;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={spec.titel}>
      <Pfeilspitzen />
      {rows.map(({ s, text, norm, ergebnis, h: rowH }, i) => {
        const y = yStarts[i];
        return (
          <g key={i}>
            <rect x="0" y={y} width={w} height={rowH} fill={flaeche[s.ton || "neutral"]} stroke={strich[s.ton || "neutral"]} strokeWidth="1.3" />
            <Text x="16" y={y + 22} anchor="start" size={13} weight={700} fill={strich[s.ton || "neutral"]}>{s.stufe}</Text>
            <Zeilen x="16" y={y + 43} lines={text} size={12} lh={14} anchor="start" fill={F.ink} />
            {norm.length > 0 && <Zeilen x={w - 14} y={y + 22} lines={norm} size={10.5} lh={13} anchor="end" mono fill={F.weich} />}
            {ergebnis.length > 0 && (
              <Zeilen
                x={w - 14}
                y={y + 22 + norm.length * 13 + 7}
                lines={ergebnis}
                size={11.5}
                lh={14}
                anchor="end"
                fill={strich[s.ton || "neutral"]}
                weight={600}
              />
            )}
            {i < rows.length - 1 && <line x1={w / 2} y1={y + rowH} x2={w / 2} y2={y + rowH + 10} stroke={F.ink} strokeWidth="1.3" markerEnd="url(#sb-pfeil)" />}
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
      {spec.fussnote && <p className="schaubild__legende">{spec.fussnote}</p>}
      {spec.legende && <p className="schaubild__legende">{spec.legende}</p>}
    </figure>
  );
}
