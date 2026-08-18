import React, { useLayoutEffect, useRef } from "react";

const ziele = [
  { id: "schema-ig-erwerb", label: "ig. Erwerb", patterns: [/§\s*1a\b/i, /§\s*1b\b/i, /§\s*2a\b/i, /§\s*3d\b/i, /§\s*4b\b/i, /§\s*1\s*Abs\.\s*1\s*Nr\.\s*5/i, /innergemeinschaftlich(?:er|en)?\s+Erwerb/i] },
  { id: "schema-ig-lieferung", label: "ig. Lieferung", patterns: [/§\s*6a\b/i, /innergemeinschaftlich(?:e|en)?\s+Lieferung/i, /Gelangensbestätigung/i] },
  { id: "schema-verfahren", label: "Verfahren", patterns: [/§§?\s*16\b/i, /§\s*18(?:a|j|k)?\b/i, /Voranmeldung/i, /VAZ\b/i, /Zusammenfassende Meldung/i, /OSS\b/i, /IOSS\b/i] },
  { id: "schema-kleinunternehmer", label: "§ 19", patterns: [/§\s*19\b/i, /Kleinunternehmer/i] },
  { id: "schema-berichtigung", label: "Berichtigung", patterns: [/§\s*15a\b/i, /§\s*17\b/i, /Berichtigung/i, /Änderung der Verhältnisse/i] },
  { id: "schema-sonderregeln", label: "Sonderregel", patterns: [/§\s*25(?:a|b)?\b/i, /§\s*24\b/i, /Differenzbesteuerung/i, /Dreiecksgeschäft/i, /Reiseleistung/i] },
  { id: "schema-vorsteuer", label: "VI. Vorsteuer", patterns: [/§\s*15(?!a)\b/i, /Vorsteuer/i] },
  { id: "schema-rechnung", label: "Rechnung", patterns: [/§§?\s*14(?:a|c)?\b/i, /§\s*33\s*UStDV/i, /Rechnung/i, /Steuerausweis/i] },
  { id: "schema-schuldner", label: "Steuerschuldner", patterns: [/§\s*13a\b/i, /§\s*13b\b/i, /Reverse Charge/i, /Steuerschuldner/i] },
  { id: "schema-steuerentstehung", label: "V. Entstehung", patterns: [/§\s*13(?![ab])\b/i, /§\s*20\b/i, /Steuerentstehung/i, /Sollversteuerung/i, /Istversteuerung/i, /Teilleistung/i, /Anzahlung/i] },
  { id: "schema-bmg", label: "IV. BMG", patterns: [/§\s*10\b/i, /Bemessungsgrundlage/i, /Entgelt/i] },
  { id: "schema-steuersatz", label: "III. Steuersatz", patterns: [/§\s*12\b/i, /Steuersatz/i, /19\s*%/i, /7\s*%/i, /0\s*%/i, /Anlage\s*2/i] },
  { id: "schema-verzicht", label: "§ 9 Verzicht", patterns: [/§\s*9\b/i, /Verzicht auf (?:die )?Steuerbefreiung/i, /Option/i] },
  { id: "schema-befreiung", label: "II. Befreiung", patterns: [/§§\s*4\s*[–-]\s*9/i, /§\s*4\b/i, /Steuerbefreiung/i, /steuerfrei/i] },
  { id: "schema-ort-sonstige", label: "Ort sonstige L.", patterns: [/§\s*3a\b/i, /§\s*3b\b/i, /B2B\b/i, /B2C\b/i, /Grundstücksleistung/i, /Telekommunikation/i, /Tätigkeitsort/i] },
  { id: "schema-ort-lieferung", label: "Ort Lieferung", patterns: [/§\s*3c\b/i, /§\s*3e\b/i, /§\s*3g\b/i, /§\s*3\s*Abs\.\s*(?:5a|6|7|8)\b/i, /bewegte Lieferung/i, /ruhende Lieferung/i, /Lieferort/i] },
  { id: "schema-leistungsart", label: "I.1 Leistungsart", patterns: [/§\s*3\s*Abs\.\s*(?:1|1a|1b|3|4|6a|9|9a|12)\b/i, /Werklieferung/i, /Werkleistung/i, /Hauptleistung/i, /Nebenleistung/i, /Lieferung/i, /sonstige Leistung/i, /Tausch/i] },
  { id: "schema-unternehmer", label: "§ 2 Unternehmer", patterns: [/§\s*2\b/i, /Unternehmereigenschaft/i, /Unternehmensbereich/i, /Innenumsatz/i, /Organschaft/i] },
  { id: "schema-steuerbarkeit", label: "I. Steuerbarkeit", patterns: [/§\s*1\b/i, /Steuerbarkeit/i, /steuerbar/i, /nicht steuerbar/i, /gegen Entgelt/i] },
];

/* Die aufklappbaren Lösungen der Originalfall-Übersicht werden beim Wechsel
   ins Prüfschema unmontiert. Dieser Sitzungszustand merkt sich deshalb, welche
   Falllösungen offen waren, damit die K1-Verlaufspfeile die Ansicht wirklich
   so wiederherstellen, wie sie verlassen wurde. */
const offeneOriginalfallLoesungen = new Set();

export const grundschema = [
  ["1", "Steuerbarkeit", "§ 1 UStG", "schema-steuerbarkeit"],
  ["2", "Steuerbefreiung", "§§ 4–9 UStG", "schema-befreiung"],
  ["3", "Steuersatz", "§ 12 UStG", "schema-steuersatz"],
  ["4", "Bemessungsgrundlage", "§ 10 UStG", "schema-bmg"],
  ["5", "Steuerentstehung", "§ 13 UStG", "schema-steuerentstehung"],
  ["6", "Vorsteuerabzug", "§ 15 UStG", "schema-vorsteuer"],
];

export function schemaZieleFuerText(text) {
  const wert = String(text || "");
  const treffer = [];
  for (const ziel of ziele) {
    if (ziel.patterns.some((pattern) => pattern.test(wert)) && !treffer.some((x) => x.id === ziel.id)) treffer.push(ziel);
  }
  return treffer.slice(0, 5);
}

function useOriginalfallLoesungszustand(markerRef) {
  useLayoutEffect(() => {
    const marker = markerRef.current;
    const karte = marker?.closest(".kst-fallkarte");
    if (!karte) return undefined;

    /* Nur der erste Schema-Verweis einer Fallkarte verwaltet den Zustand. So
       entstehen trotz weiterer Verweise innerhalb der aufgeklappten Lösung
       keine doppelten Toggle-Listener. */
    if (karte.querySelector(".kst-schema-links") !== marker) return undefined;

    const details = Array.from(karte.children).find((element) => element.tagName === "DETAILS");
    const kicker = karte.querySelector(".panel__head .kicker")?.textContent || "";
    const fallTreffer = kicker.match(/Fall\s+(\d+)/i);
    if (!details || !fallTreffer) return undefined;

    const schluessel = fallTreffer[1];
    details.open = offeneOriginalfallLoesungen.has(schluessel);

    const merken = () => {
      if (details.open) offeneOriginalfallLoesungen.add(schluessel);
      else offeneOriginalfallLoesungen.delete(schluessel);
    };

    details.addEventListener("toggle", merken);
    return () => details.removeEventListener("toggle", merken);
  }, [markerRef]);
}

export function SchemaVerweise({ text, onOpen, compact = false, stopPropagation = false }) {
  const treffer = schemaZieleFuerText(text);
  const markerRef = useRef(null);
  useOriginalfallLoesungszustand(markerRef);
  if (!treffer.length) return null;
  return (
    <span ref={markerRef} className={`kst-schema-links${compact ? " kst-schema-links--compact" : ""}`} aria-label="Passende Stellen im Umsatzsteuer-Prüfschema">
      {treffer.map((ziel) => (
        <button
          key={ziel.id}
          type="button"
          className="kst-schema-link"
          onClick={(e) => {
            if (stopPropagation) e.stopPropagation();
            onOpen(ziel.id);
          }}
          onKeyDown={(e) => { if (stopPropagation) e.stopPropagation(); }}
        >
          ↗ {ziel.label}
        </button>
      ))}
    </span>
  );
}

export function VerlinkterText({ text, onOpen, as: Tag = "span", compact = false }) {
  return (
    <Tag>
      {text}
      <SchemaVerweise text={text} onOpen={onOpen} compact={compact} />
    </Tag>
  );
}

export function VerlinkteNormkette({ normen, onOpen }) {
  return (
    <ul className="normkette kst-normkette-verlinkt">
      {(normen || []).map((norm) => {
        const treffer = schemaZieleFuerText(norm);
        const ziel = treffer[0];
        return (
          <li key={norm}>
            {ziel ? (
              <button type="button" className="norm kst-norm-link" onClick={() => onOpen(ziel.id)} title={`Im Prüfschema: ${ziel.label}`}>
                {norm} ↗
              </button>
            ) : <code className="norm">{norm}</code>}
          </li>
        );
      })}
    </ul>
  );
}
