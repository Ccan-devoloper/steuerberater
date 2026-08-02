import React from "react";

const fmt = (value) => (typeof value === "number" ? value.toLocaleString("de-DE") + " €" : value);

function Column({ title, rows, sum, datum }) {
  return <div className="hbstbCol">
    <h4>{title}</h4>
    <table>
      <tbody>
        {rows.map((row, i) => <tr key={row.label + i} className={row.subtotal ? "subtotal" : ""}>
          <td>{row.label}</td>
          <td className="amt">{fmt(row.value)}</td>
        </tr>)}
        <tr className="total"><td>Wertansatz {datum}</td><td className="amt">{fmt(sum)}</td></tr>
      </tbody>
    </table>
  </div>;
}

export default function HbStbTable({ data }) {
  const diff = typeof data.hbSum === "number" && typeof data.stbSum === "number" ? data.hbSum - data.stbSum : null;
  return <div className="hbstb">
    <div className="hbstbScroll">
      <div className="hbstbGrid">
        <Column title="Handelsbilanz" rows={data.hb} sum={data.hbSum} datum={data.datum} />
        <Column title="Steuerbilanz" rows={data.stb} sum={data.stbSum} datum={data.datum} />
      </div>
    </div>
    {diff !== null && <p className="hbstbDiff"><span>Differenz HB / StB</span><strong>{fmt(Math.abs(diff))}</strong>{diff !== 0 && <em>{diff > 0 ? "HB-Wert höher → passive latente Steuern (Aktivposten)" : "StB-Wert höher → aktive latente Steuern (Aktivposten)"}</em>}</p>}
  </div>;
}
