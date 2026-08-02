import React from "react";

const scopeLabel = { alle: "alle Bereiche", HB: "nur HB", StB: "nur StB" };
const fmt = (value) => (typeof value === "number" ? value.toLocaleString("de-DE") + " €" : value);

export default function BookingEntry({ entry }) {
  const soll = entry.soll || [];
  const haben = entry.haben || [];
  const rows = Math.max(soll.length, haben.length);

  return <div className={`booking booking--${entry.scope || "alle"}`}>
    <div className="bookingHead">
      <span className="bookingLabel">Buchungssatz{entry.title ? ` · ${entry.title}` : ""}</span>
      <span className={`scopeBadge scope--${entry.scope || "alle"}`}>{scopeLabel[entry.scope] || scopeLabel.alle}</span>
    </div>
    <div className="bookingScroll">
      <table className="bookingTable">
        <thead><tr><th>Soll</th><th aria-hidden="true" /><th /><th>Haben</th><th /></tr></thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => <tr key={i}>
            <td className="acct">{soll[i]?.konto || ""}</td>
            <td className="amt">{soll[i] ? fmt(soll[i].betrag) : ""}</td>
            <td className="an">{i === 0 ? "an" : ""}</td>
            <td className="acct">{haben[i]?.konto || ""}</td>
            <td className="amt">{haben[i] ? fmt(haben[i].betrag) : ""}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
    {entry.note && <p className="bookingNote">{entry.note}</p>}
  </div>;
}
