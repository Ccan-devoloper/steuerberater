import React from "react";
import { meurerVisualsABC } from "../data/k1-ust-kurzskript-visuals-abc.js";
import { meurerVisualsDEF } from "../data/k1-ust-kurzskript-visuals-def.js";

const meurerKurzskriptVisuals = { ...meurerVisualsABC, ...meurerVisualsDEF };

const cx = (...werte) => werte.filter(Boolean).join(" ");

function VisualKopf({ title, kicker }) {
  return (
    <div className="k1-mv__head">
      <span>{kicker || "Schaubild"}</span>
      <strong>{title}</strong>
    </div>
  );
}

function Chain({ visual }) {
  return (
    <div className="k1-mv k1-mv--chain">
      <VisualKopf title={visual.title} />
      <div className="k1-mv-chain" role="list" aria-label={visual.title}>
        {visual.nodes.map((node, index) => (
          <React.Fragment key={`${node.title}-${index}`}>
            <div className="k1-mv-node" role="listitem">
              <b>{node.title}</b>
              {(node.lines || []).map((line, lineIndex) => <span key={lineIndex}>{line}</span>)}
            </div>
            {index < visual.nodes.length - 1 && <div className="k1-mv-arrow" aria-hidden="true">→</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function Steps({ visual }) {
  return (
    <div className="k1-mv k1-mv--steps">
      <VisualKopf title={visual.title} kicker="Prüfpfad" />
      <ol className="k1-mv-steps">
        {visual.steps.map((step, index) => (
          <li key={index}><span>{index + 1}</span><b>{step}</b></li>
        ))}
      </ol>
    </div>
  );
}

function Compare({ visual }) {
  return (
    <div className="k1-mv k1-mv--compare">
      <VisualKopf title={visual.title} kicker="Gegenüberstellung" />
      <div className="k1-mv-cols" style={{ "--k1-mv-cols": visual.columns.length }}>
        {visual.columns.map((column, index) => (
          <section className="k1-mv-col" key={`${column.title}-${index}`}>
            <h4>{column.title}</h4>
            <ul>{(column.items || []).map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function Tree({ visual }) {
  return (
    <div className="k1-mv k1-mv--tree">
      <VisualKopf title={visual.title} kicker="Entscheidungsbaum" />
      <div className="k1-mv-tree__root">{visual.root}</div>
      <div className="k1-mv-tree__branches" style={{ "--k1-mv-cols": visual.branches.length }}>
        {visual.branches.map((branch, index) => (
          <section className="k1-mv-tree__branch" key={`${branch.label}-${index}`}>
            <h4>{branch.label}</h4>
            <ul>{(branch.items || []).map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}</ul>
          </section>
        ))}
      </div>
    </div>
  );
}

function Table({ visual }) {
  return (
    <div className="k1-mv k1-mv--table">
      <VisualKopf title={visual.title} kicker="Tabelle" />
      <div className="k1-mv-tablewrap">
        <table>
          <thead><tr>{visual.headers.map((header, index) => <th key={index}>{header}</th>)}</tr></thead>
          <tbody>{visual.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

function Timeline({ visual }) {
  return (
    <div className="k1-mv k1-mv--timeline">
      <VisualKopf title={visual.title} kicker="Zeitachse" />
      <div className="k1-mv-timeline">
        {visual.items.map((item, index) => (
          <article className="k1-mv-time" key={`${item.label}-${index}`}>
            <span>{index + 1}</span>
            <div><b>{item.label}</b><p>{item.text}</p></div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Visual({ visual }) {
  switch (visual.kind) {
    case "chain": return <Chain visual={visual} />;
    case "steps": return <Steps visual={visual} />;
    case "compare": return <Compare visual={visual} />;
    case "tree": return <Tree visual={visual} />;
    case "table": return <Table visual={visual} />;
    case "timeline": return <Timeline visual={visual} />;
    default: return null;
  }
}

export default function K1MeurerVisual({ blockId, sourceHint }) {
  const visuals = meurerKurzskriptVisuals[blockId] || [];
  if (!visuals.length) return null;

  return (
    <div className={cx("k1-meurer-native-visuals", visuals.length > 1 && "k1-meurer-native-visuals--multi")}>
      <div className="k1-meurer-native-visuals__label">
        <strong>Schaubilder / Tabellen</strong>
        <span>didaktisch neu aufgebaut nach der Quelle</span>
      </div>
      <div className="k1-meurer-native-visuals__grid">
        {visuals.map((visual, index) => <Visual key={`${blockId}-${index}`} visual={visual} />)}
      </div>
      {sourceHint && <p className="k1-meurer-native-visuals__source">Quelle berücksichtigt: {sourceHint}</p>}
    </div>
  );
}
