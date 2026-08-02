import React from "react";

export function NormChip({ children }) {
  return <code className="norm">{children}</code>;
}

export function NormChain({ items }) {
  return <ul className="normChain">{items.map((item) => <li key={item}><NormChip>{item}</NormChip></li>)}</ul>;
}

export function Merksatz({ children }) {
  return <aside className="merksatz"><span>Merksatz</span><p>{children}</p></aside>;
}

export default NormChip;
