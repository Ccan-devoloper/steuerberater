import React, { memo, useMemo } from "react";
import { parseFallsammlungsText } from "../lib/fallsammlungsFormat.js";
import "./FallsammlungsText.css";

function TextMitUmbruch({ text }) {
  return String(text || "").split("\n").map((zeile, index, alle) => (
    <React.Fragment key={`${index}-${zeile}`}>
      {zeile}
      {index < alle.length - 1 && <br />}
    </React.Fragment>
  ));
}

function Absatz({ block }) {
  const inhalt = block.lead && block.text.startsWith(block.lead)
    ? (
      <>
        <strong>{block.lead}</strong>
        {block.text.slice(block.lead.length)}
      </>
    )
    : block.text;

  return (
    <p className={block.italic ? "fallsammlung__absatz fallsammlung__absatz--kursiv" : "fallsammlung__absatz"}>
      {inhalt}
    </p>
  );
}

function Tabelle({ block, index }) {
  return (
    <div className="fallsammlung__tabelle-rahmen" role="region" aria-label={`Tabelle ${index + 1}`} tabIndex={0}>
      <table className="fallsammlung__tabelle">
        <tbody>
          {block.rows.map((row, rowIndex) => (
            <tr className={row.total ? "fallsammlung__tabellenzeile--summe" : undefined} key={rowIndex}>
              {row.cells.map((cell, cellIndex) => {
                const klassen = [
                  cell.numeric ? "fallsammlung__tabellenzelle--zahl" : "",
                  cell.operator ? "fallsammlung__tabellenzelle--operator" : "",
                ].filter(Boolean).join(" ");
                return (
                  <td className={klassen || undefined} key={cellIndex}>
                    <TextMitUmbruch text={cell.text} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FallsammlungsText({ wert, variante }) {
  const blocks = useMemo(() => parseFallsammlungsText(wert, variante), [wert, variante]);
  let tabellenIndex = 0;

  return (
    <div className={`fallsammlung__text fallsammlung__dokument fallsammlung__dokument--${variante}`}>
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const inhalt = block.italic ? <em>{block.text}</em> : block.text;
          return <h5 className="fallsammlung__zwischenkopf" key={index}>{inhalt}</h5>;
        }
        if (block.type === "paragraph") return <Absatz block={block} key={index} />;
        if (block.type === "list") {
          return (
            <ul className="fallsammlung__liste" key={index}>
              {block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
            </ul>
          );
        }
        if (block.type === "formula") {
          return (
            <div className="fallsammlung__formel" key={index}>
              {block.lines.map((line, lineIndex) => <div key={lineIndex}>{line}</div>)}
            </div>
          );
        }
        if (block.type === "table") {
          const aktuellerIndex = tabellenIndex;
          tabellenIndex += 1;
          return <Tabelle block={block} index={aktuellerIndex} key={index} />;
        }
        return null;
      })}
    </div>
  );
}

export default memo(FallsammlungsText);
