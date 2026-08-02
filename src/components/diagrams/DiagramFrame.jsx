import React from "react";

export default function DiagramFrame({ title, caption, viewBox, children }) {
  return <figure className="diagram">
    {title && <figcaption className="diagramTitle">{title}</figcaption>}
    <div className="diagramScroll">
      <svg viewBox={viewBox} role="img" aria-label={title} preserveAspectRatio="xMidYMid meet">{children}</svg>
    </div>
    {caption && <p className="diagramCaption">{caption}</p>}
  </figure>;
}

export const D = {
  ink: "var(--ink)",
  line: "var(--line)",
  navy: "var(--navy)",
  navySoft: "var(--soft)",
  paper: "var(--card)",
  accent: "var(--accent)",
  green: "var(--green)",
  muted: "var(--muted)",
};

export function Box({ x, y, w, h, label, sub, tone = "paper", rx = 6 }) {
  const fill = tone === "navy" ? D.navy : tone === "soft" ? D.navySoft : tone === "accent" ? "var(--accentSoft)" : D.paper;
  const text = tone === "navy" ? "var(--onNavy)" : D.ink;
  return <g>
    <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={tone === "navy" ? D.navy : D.line} strokeWidth="1.5" />
    <text x={x + w / 2} y={sub ? y + h / 2 - 4 : y + h / 2 + 5} textAnchor="middle" fill={text} fontSize="14" fontWeight="700" fontFamily="var(--sans)">{label}</text>
    {sub && <text x={x + w / 2} y={y + h / 2 + 14} textAnchor="middle" fill={tone === "navy" ? "var(--onNavy)" : D.muted} fontSize="11.5" fontFamily="var(--mono)">{sub}</text>}
  </g>;
}

export function Arrow({ x1, y1, x2, y2, dashed }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={D.navy} strokeWidth="1.5" markerEnd="url(#dArrow)" strokeDasharray={dashed ? "5 4" : undefined} />;
}

export function Defs() {
  return <defs>
    <marker id="dArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill={D.navy} />
    </marker>
  </defs>;
}
