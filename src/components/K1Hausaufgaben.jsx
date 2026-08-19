import React, { useEffect, useMemo, useState } from "react";
import { k1UstHausaufgaben, k1UstHausaufgabenDidaktik } from "../data/k1-ust-hausaufgaben.js";
import { SchemaVerweise, VerlinkteNormkette, VerlinkterText } from "./K1SchemaLinks";

function Inhaltsart(inhalt) {
  return inhalt?.area === "Fall" ? "Originalfall" : "Lernmodul";
}

export default function K1Hausaufgaben({ ziel, onOpenInhalt, onOpenSchema, inhaltById }) {
  const [fachtermin, setFachtermin] = useState("alle");
  const termine = useMemo(
    () => fachtermin === "alle"
      ? k1UstHausaufgaben
      : k1UstHausaufgaben.filter((termin) => String(termin.fachtermin) === fachtermin),
    [fachtermin],
  );
  const fallzahl = termine.reduce((summe, termin) => summe + termin.faelle.length, 0);

  useEffect(() => {
    const id = ziel?.id;
    if (!id) return undefined;
    const termin = k1UstHausaufgaben.find((eintrag) => eintrag.faelle.some((fall) => fall.id === id));
    if (!termin) return undefined;
    setFachtermin(String(termin.fachtermin));
    const timer = window.setTimeout(() => {
      const element = document.querySelector(`[data-k1-ha-id='${id}']`);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
      element?.classList.add("k1-ha-karte--ziel");
      window.setTimeout(() => element?.classList.remove("k1-ha-karte--ziel"), 1800);
    }, 80);
    return () => window.clearTimeout(timer);
  }, [ziel]);

  return (
    <div className="k1-ha-page">
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 1 · Umsatzsteuer · Nacharbeit</span>
          <h1>Hausaufgaben USt</h1>
          <p className="lead">
            Sämtliche Hausaufgaben der Fachtermine 1–7 sind vollständig aus den 46 PDF-Seiten erfasst. Die Aufgabe steht jeweils zuerst; die Quellenlösung bleibt bis zum bewussten Aufklappen verborgen.
          </p>
        </div>
        <span className="zaehler">{fallzahl} Hausaufgabenfälle</span>
      </div>

      <div className="filter" aria-label="Hausaufgaben nach Fachtermin filtern">
        <button aria-pressed={fachtermin === "alle"} onClick={() => setFachtermin("alle")}>Alle Fachtermine</button>
        {k1UstHausaufgaben.map((termin) => (
          <button
            key={termin.fachtermin}
            aria-pressed={fachtermin === String(termin.fachtermin)}
            onClick={() => setFachtermin(String(termin.fachtermin))}
          >
            {termin.fachtermin}. Fachtermin
          </button>
        ))}
      </div>

      {termine.map((termin) => (
        <section className="k1-ha-termin" key={termin.fachtermin}>
          <div className="k1-ha-termin__kopf">
            <div>
              <span className="kicker">Umsatzsteuer · {termin.fachtermin}. Fachtermin</span>
              <h2>Hausaufgabe {termin.fachtermin}</h2>
            </div>
            <span>{termin.seiten} PDF-Seiten · Rechtsstand {termin.rechtsstand}</span>
          </div>

          <aside className="panel k1-ha-quelle">
            <b>Didaktischer Hinweis der Unterlage</b>
            {k1UstHausaufgabenDidaktik.map((text, index) => <p key={index}>{text}</p>)}
            <small>
              Quelle vollständig berücksichtigt: {termin.quellentitel} · {termin.quelle} · PDF-S. 1–{termin.seiten}
            </small>
          </aside>

          <div className="k1-ha-liste">
            {termin.faelle.map((fall) => {
              const querverweise = (fall.querverweise || [])
                .map((id) => inhaltById.get(id))
                .filter(Boolean);
              const schemaText = [...(fall.themen || []), ...(fall.normen || [])].join(" · ");

              return (
                <article className="panel k1-ha-karte" key={fall.id} data-k1-ha-id={fall.id}>
                  <div className="panel__head">
                    <div>
                      <span className="kicker">Fachtermin {termin.fachtermin} · Fall {fall.nummer} · {fall.seiten}</span>
                      <h3>{fall.titel}</h3>
                    </div>
                  </div>

                  <div className="tags k1-ha-themen">
                    {(fall.themen || []).map((thema) => <span className="tag" key={thema}>{thema}</span>)}
                  </div>
                  <SchemaVerweise text={schemaText} onOpen={onOpenSchema} compact />

                  <div className="kst-sachverhalt k1-ha-aufgabe">
                    <b>Aufgabenstellung / Sachverhalt</b>
                    {(fall.aufgabe || []).map((text, index) => (
                      <VerlinkterText key={index} as="p" text={text} onOpen={onOpenSchema} compact />
                    ))}
                  </div>

                  <details>
                    <summary>Lösung anzeigen</summary>
                    <div className="fall k1-ha-loesung">
                      {(fall.loesung || []).map((block, blockIndex) => (
                        <div className="fall__block" key={`${fall.id}-${blockIndex}`}>
                          <b>{block.titel}</b>
                          {(block.texte || []).map((text, index) => (
                            <VerlinkterText key={index} as="p" text={text} onOpen={onOpenSchema} compact />
                          ))}
                        </div>
                      ))}
                      {(fall.normen || []).length > 0 && (
                        <div className="fall__block">
                          <b>Normen der Quellenlösung</b>
                          <VerlinkteNormkette normen={fall.normen} onOpen={onOpenSchema} />
                        </div>
                      )}
                    </div>
                  </details>

                  {querverweise.length > 0 && (
                    <aside className="k1-ha-querverweise">
                      <b>Querverweise im K1-USt-Stoff</b>
                      <p>Zum Vertiefen direkt zu den thematisch passenden Originalfällen und Lernmodulen wechseln:</p>
                      <div className="k1-ha-querverweise__links">
                        {querverweise.map((inhalt) => (
                          <button
                            type="button"
                            key={inhalt.id}
                            onClick={() => onOpenInhalt(inhalt.id)}
                          >
                            {Inhaltsart(inhalt)} {inhalt.id}: {inhalt.title} ↗
                          </button>
                        ))}
                      </div>
                    </aside>
                  )}

                  <div className="k1-ha-fundstelle">
                    Quelle: {termin.fachtermin}. Fachtermin · {fall.seiten} · Rechtsstand {termin.rechtsstand}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
