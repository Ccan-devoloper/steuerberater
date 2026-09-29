import React from 'react';
import { Block } from './HausaufgabenBloecke';
import './endriss-markierungen.css';

const colours = { rosa: 'rosa', gelb: 'gelb', grün: 'gruen', orange: 'orange', blau: 'blau', grau: 'grau', graue: 'grau' };
function ColourLabel({ text }) {
  return text.split(/(Rosa|Gelb|Grün|Orange|Blau|Graue?)/gi).map((part, i) => {
    const colour = colours[part.toLocaleLowerCase('de')];
    return colour ? <span className={`endriss-quellenfarbe endriss-quellenfarbe--${colour}`} key={i}>{part}</span> : <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function EndrissQuellenBlock({ element }) {
  if (element.typ !== 'tabelle' || element.quellenart !== 'markierungen') return <Block element={element} />;
  return <div className="istr-fs-tabelle__rahmen endriss-markierungen" data-source-annotations={element.quellenSeiten?.join(',')}>
    <table className="istr-fs-tabelle">
      <caption>Handschrift und farbliche Hervorhebungen · PDF-Seite {element.quellenSeiten?.join(', ')}</caption>
      <thead><tr>{element.spalten.map((label, i) => <th scope="col" key={i}>{label}</th>)}</tr></thead>
      <tbody>{element.zeilen.map((row, i) => <tr key={i}>
        <th scope="row"><ColourLabel text={row[0]} /></th>
        {row.slice(1).map((cell, j) => <td key={j}>{cell}</td>)}
      </tr>)}</tbody>
    </table>
  </div>;
}
