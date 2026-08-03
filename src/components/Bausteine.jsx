import React from "react";

export const euro = (wert) =>
  typeof wert === "number" ? wert.toLocaleString("de-DE", { minimumFractionDigits: 0, maximumFractionDigits: 2 }) + " €" : wert;

/* ------------------------------------------------------------- Normchips */
export function Norm({ children }) {
  return <code className="norm">{children}</code>;
}

export function Normkette({ normen }) {
  return (
    <ul className="normkette">
      {normen.map((n) => (
        <li key={n}><Norm>{n}</Norm></li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------- Merke / Hinweis */
export function Notiz({ art = "merke", titel, children }) {
  const klasse = art === "falle" ? "notiz notiz--falle" : art === "exkurs" ? "notiz notiz--exkurs" : "notiz";
  const label = titel || (art === "falle" ? "Klausurfalle" : art === "exkurs" ? "Exkurs" : "Merke");
  return (
    <aside className={klasse}>
      <b>{label}</b>
      {children}
    </aside>
  );
}

/* ----------------------------------------------------------- Rechenweg */
export function Rechnung({ titel, zeilen, hinweis }) {
  return (
    <div className="rechnung">
      {titel && <div className="rechnung__zeile" style={{ fontWeight: 600 }}><span>{titel}</span><span /></div>}
      {zeilen.map((z, i) => (
        <div key={i} className={z.summe ? "rechnung__zeile rechnung__zeile--summe" : "rechnung__zeile"}>
          <span>{z.text}</span>
          <span>{typeof z.wert === "number" ? euro(z.wert) : z.wert}</span>
        </div>
      ))}
      {hinweis && <p className="rechnung__hinweis">{hinweis}</p>}
    </div>
  );
}

/* --------------------------------------------------------- Buchungssatz */
const kreisText = { alle: "alle Bereiche", HB: "nur Handelsbilanz", StB: "nur Steuerbilanz" };

export function Buchungssatz({ satz }) {
  const soll = satz.soll || [];
  const haben = satz.haben || [];
  const zeilen = Math.max(soll.length, haben.length);
  const kreis = satz.scope || "alle";
  return (
    <div className="buchung">
      <div className="buchung__kopf">
        <b>{satz.title || "Buchungssatz"}</b>
        <span className={`kreis kreis--${kreis}`}>{kreisText[kreis]}</span>
      </div>
      <div className="scroll-x">
        <table>
          <thead>
            <tr><th>Soll</th><th /><th /><th>Haben</th><th /></tr>
          </thead>
          <tbody>
            {Array.from({ length: zeilen }).map((_, i) => (
              <tr key={i}>
                <td>{soll[i]?.konto || ""}</td>
                <td className="betrag">{soll[i] ? euro(soll[i].betrag) : ""}</td>
                <td className="an">{i === 0 ? "an" : ""}</td>
                <td>{haben[i]?.konto || ""}</td>
                <td className="betrag">{haben[i] ? euro(haben[i].betrag) : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {satz.note && <p className="buchung__note">{satz.note}</p>}
    </div>
  );
}

/* ----------------------------------------------------- HB/StB-Spiegel */
function Spalte({ titel, norm, zeilen, summe, datum }) {
  return (
    <div className="bilanzspiegel__spalte">
      <h4>{titel}<small>{norm}</small></h4>
      <table>
        <tbody>
          {zeilen.map((z, i) => (
            <tr key={i} className={z.subtotal ? "zwischensumme" : ""}>
              <td>{z.label}</td>
              <td>{euro(z.value)}</td>
            </tr>
          ))}
          <tr className="summe">
            <td>Wertansatz {datum}</td>
            <td>{euro(summe)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function Bilanzspiegel({ daten }) {
  const diff = typeof daten.hbSum === "number" && typeof daten.stbSum === "number" ? daten.hbSum - daten.stbSum : null;
  const deutung =
    diff === null || diff === 0
      ? null
      : daten.passivposten
        ? diff > 0
          ? "Passivposten HB höher → aktive latente Steuern (Wahlrecht, § 274 Abs. 1 S. 2 HGB)"
          : "Passivposten StB höher → passive latente Steuern (Pflicht, § 274 Abs. 1 S. 1 HGB)"
        : diff > 0
          ? "Aktivposten HB höher → passive latente Steuern (Pflicht, § 274 Abs. 1 S. 1 HGB)"
          : "Aktivposten StB höher → aktive latente Steuern (Wahlrecht, § 274 Abs. 1 S. 2 HGB)";
  return (
    <div className="bilanzspiegel">
      <div className="scroll-x">
        <div className="bilanzspiegel__grid">
          <Spalte titel="Handelsbilanz" norm="HGB" zeilen={daten.hb} summe={daten.hbSum} datum={daten.datum} />
          <Spalte titel="Steuerbilanz" norm="EStG" zeilen={daten.stb} summe={daten.stbSum} datum={daten.datum} />
        </div>
      </div>
      {diff !== null && (
        <p className="bilanzspiegel__diff">
          <b>Differenz HB / StB</b>
          <strong>{euro(Math.abs(diff))}</strong>
          {deutung && <em>{deutung}</em>}
        </p>
      )}
    </div>
  );
}
