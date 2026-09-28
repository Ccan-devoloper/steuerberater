import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import Fallsammlungsfaelle from "./Fallsammlungsfaelle";
import { PrioFilter, usePrioFilter, prioritaetFuer } from "./Prioritaet";

const FAELLE_PRO_SCHRITT = 12;

/* Fachgebiete für die zweite Filterzeile. Sie werden fest angeboten, auch wenn
   ein Gebiet derzeit keinen Fall enthält — sonst verschwindet der Filter beim
   Nachliefern von Fällen wieder und die Auswahl wirkt zufällig. */
const themen = [
  { id: "alle", label: "Alle Gebiete" },
  { id: "EU", label: "Einzelunternehmen" },
  { id: "PersG", label: "Personengesellschaft" },
  { id: "KapG", label: "Kapitalgesellschaft" },
  { id: "Technik", label: "Klausurtechnik" },
];

/* Das Fachgebiet eines Falls ergibt sich aus seinem Ziellernmodul: bei den
   Originalfällen aus deren optionalem `thema`, sonst aus dem Bereich. */
function themaVon(zielmodul) {
  if (!zielmodul) return null;
  return zielmodul.area === "Fall" ? zielmodul.thema || "EU" : zielmodul.area;
}

export default function Falluebersicht({ zugeordneteFaelle, offeneFaelle, module, oeffnenModul }) {
  const [suche, setSuche] = useState("");
  const [filter, setFilter] = useState("alle");
  const [thema, setThema] = useState("alle");
  const [prio, setPrio] = usePrioFilter("stb-k3-fall-prio");
  const [anzahl, setAnzahl] = useState(FAELLE_PRO_SCHRITT);
  const verzögerteSuche = useDeferredValue(suche);

  const modulMap = useMemo(() => new Map(module.map((modul) => [modul.id, modul])), [module]);
  const alleFaelle = useMemo(
    () => [
      ...zugeordneteFaelle.map((fall) => ({ ...fall, verknuepfungsstatus: "verknuepft" })),
      ...offeneFaelle.map((fall) => ({ ...fall, verknuepfungsstatus: "offen" })),
    ]
      .sort((a, b) => a.id.localeCompare(b.id, "de", { numeric: true }))
      .map((fall) => {
        const zielmodul = fall.zielmodul_id ? modulMap.get(fall.zielmodul_id) : null;
        return {
          ...fall,
          thema: themaVon(zielmodul),
          prio: zielmodul
            ? prioritaetFuer("bilanz", zielmodul, { typ: "modul", id: zielmodul.id })
            : prioritaetFuer("bilanz", { title: fall.titel, subtitle: fall.quellmodul }),
          suchtext: [
            fall.id,
            fall.titel,
            fall.quellmodul,
            fall.sachverhalt,
            fall.loesung,
            zielmodul?.title,
            zielmodul?.law,
          ].join(" ").toLowerCase(),
        };
      }),
    [zugeordneteFaelle, offeneFaelle, modulMap]
  );

  const gefiltert = useMemo(() => {
    const q = verzögerteSuche.trim().toLowerCase();
    return alleFaelle.filter((fall) => {
      if (filter !== "alle" && fall.verknuepfungsstatus !== filter) return false;
      if (thema !== "alle" && fall.thema !== thema) return false;
      if (prio !== "alle" && fall.prio.stufe !== prio) return false;
      return !q || fall.suchtext.includes(q);
    });
  }, [alleFaelle, filter, thema, prio, verzögerteSuche]);

  const jeThema = useMemo(() => {
    const zaehler = {};
    for (const fall of alleFaelle) if (fall.thema) zaehler[fall.thema] = (zaehler[fall.thema] || 0) + 1;
    return zaehler;
  }, [alleFaelle]);
  const jePrio = useMemo(() => {
    const zaehler = { hoch: 0, mittel: 0, selten: 0 };
    for (const fall of alleFaelle) zaehler[fall.prio.stufe] += 1;
    return zaehler;
  }, [alleFaelle]);

  useEffect(() => {
    setAnzahl(FAELLE_PRO_SCHRITT);
  }, [filter, thema, prio, verzögerteSuche]);

  const sichtbar = gefiltert.slice(0, anzahl);
  const weitere = Math.max(0, gefiltert.length - sichtbar.length);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Fallsammlung</span>
          <h1>Alle Fälle und Lösungen</h1>
          <p className="lead">
            Sämtliche {alleFaelle.length} Fälle sind hier zentral erreichbar. Die Karten werden schrittweise
            geladen; Sachverhalt und Lösung werden erst beim Öffnen aufbereitet.
          </p>
        </div>
        <span className="zaehler">{alleFaelle.length} Fälle</span>
      </div>

      {/* Vorbemerkungen der Quelle (Fallsammlung und Lösungen V2, Melzer, April 2026) und das
          Änderungsprotokoll der Bilanzunterlagen 04/26 im Wortlaut. */}
      <section className="panel falluebersicht__vorab" aria-label="Vorbemerkungen der Fallsammlung">
        <p><strong>Vorab (Fallsammlung – Fälle):</strong> Aufgabenstellung in allen Fällen ist ein möglichst hoher Eigenkapitalausweis in der Handelsbilanz (1.Priorität) und in der Steuerbilanz ein möglichst niedriger steuerlicher Gewinn (2.Priorität) soweit nichts anderes angegeben ist.</p>
        <p><strong>Vorabinformation zur Zitation (Fallsammlung – Lösungen):</strong> Es ist ebenso möglich § 5 Abs. 6 EStG nur zu zitieren, wenn die Bewertung in der Steuerbilanz von der Bewertung in der Handelsbilanz zwingend abweicht. Es ist ebenso möglich § 5 Abs. 1 Satz 1 HS 2 EStG nur zu zitieren, wenn die Ausübung des Wahlrechts in der Steuerbilanz zu einer von der Handelsbilanz abweichenden Bewertung führt.</p>
        <details>
          <summary>Protokoll über Aktualisierung der Unterlagen im Fach „Bilanzierung nach Handels- und Steuerrecht“ (Stand April 2026)</summary>
          <p>Liebe Teilnehmerinnen und Teilnehmer,</p>
          <p>ich habe in das Skript, die Übersichten, die Fall- und Lösungssammlung die noch für Ihre Prüfung maßgebenden Rechtsänderungen eingearbeitet. Bei dieser Gelegenheit habe ich die Unterlagen auch nochmal verbessert.</p>
          <p>Die wichtigsten Änderungen:</p>
          <ul>
            <li>Es wurde § 5 Abs. 6 EStG aus den Lösungen und den Übersichten herausgenommen, wenn er nicht zwingend erforderlich war. Das spart nochmal Zeit.</li>
            <li>Der neue Klausurersteller wird wohl die nächsten drei Jahre die Prüfungen erstellen. Letztes Jahr hat er in der Klausur mit drei Buchungskreisen gearbeitet und wird dies mit sehr hoher Wahrscheinlichkeit weiter so handhaben. Ich habe daher die Buchungen in der Fallsammlung und in den Hausaufgaben 6 und 7 ebenfalls auf drei Buchungskreise umgestellt. Bei den Hausaufgaben 6 und 7 habe ich die Aufgabenstellung noch präziser formuliert.</li>
            <li>Beim Leasingfall (Fall 3, Kapitel 3) Abwandlung habe ich in der Fallsammlung und in der Lösung den Kaufpreis bei Optionsausübung auf 100 € geändert. Mit keiner erheblichen Summe A 3.5 Abs. 5 UStAE ist gemeint 1 % des Verkehrswerts und nicht der Verkehrswert plus 1 %. Kürzlich entschieden für Fotovoltaikanlagen.</li>
            <li>Es ist mit § 7 Abs. 2a EStG eine neue Abschreibungsmöglichkeit für reine Elektrofahrzeuge hinzugekommen. Ich habe diese im Skript und im Fall 3, Kapitel 4 aufgenommen. Für die Einlagefälle im Kapitel 4 habe ich in der Lösung Hinweise hinzugefügt für andere mögliche Aufgabenstellungen, um alle möglichen Fallgestaltungen im Examen abzudecken.</li>
            <li>Bei Fall 1, Kapitel 17 ist eine Abschreibung nach dem neuen § 7 Abs. 5a EStG möglich. Ich habe die Lösung dementsprechend angepasst.</li>
            <li>Bei Fall 2, Kapitel 18 habe ich die Handelsbilanz der Steuerbilanz angepasst. Dies entspricht wie im Hinweis angegeben nicht der Ansicht des Beck´schen Bilanzkommentars. Beide Lösungen sind aber im Examen vertretbar. Daher entscheiden wir uns für die kürzeste vertretbare Lösung.</li>
            <li>Bei Fall 1, Kapitel 19 hat sich die Abschreibung bei der Wand geändert, die den Raum besser aufteilt. Das BMF Schreiben § 7/5 Beck´sche Steuererlasse wurde Dezember 2025 aufgehoben. Damit gilt die alte Rechtslage und es ist über die tatsächliche Restnutzungsdauer und nicht auf die kürzere Mietdauer bei unbeweglichen Wirtschaftsgütern abzuschreiben. Eine Abschreibung über die kürzere Mietdauer gibt es nur bei einer Abbruchverpflichtung, da die Wand nach dem Abbruch nicht mehr genutzt werden kann.</li>
          </ul>
          <p>Viel Erfolg im Examen und viele Grüße, Karsten Melzer</p>
        </details>
      </section>

      <section className="falluebersicht__steuerung" aria-label="Fallsammlung filtern">
        <label className="falluebersicht__suche">
          <span>Fälle durchsuchen</span>
          <input
            type="search"
            value={suche}
            onChange={(event) => setSuche(event.target.value)}
            placeholder="Thema, Fall-ID, Sachverhalt oder Lösung"
          />
        </label>
        <div className="falluebersicht__filter">
          <button type="button" aria-pressed={filter === "alle"} onClick={() => setFilter("alle")}>Alle {alleFaelle.length}</button>
          <button type="button" aria-pressed={filter === "verknuepft"} onClick={() => setFilter("verknuepft")}>Mit Modul {zugeordneteFaelle.length}</button>
          {/* Der Filter erscheint nur, solange es überhaupt nicht zugeordnete Fälle gibt. */}
          {offeneFaelle.length > 0 && (
            <button type="button" aria-pressed={filter === "offen"} onClick={() => setFilter("offen")}>Ohne Modul {offeneFaelle.length}</button>
          )}
        </div>
        <div className="falluebersicht__filter falluebersicht__filter--thema">
          {themen.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={thema === t.id}
              onClick={() => setThema(t.id)}
            >
              {t.label} {t.id === "alle" ? alleFaelle.length : jeThema[t.id] || 0}
            </button>
          ))}
        </div>
        <PrioFilter wert={prio} setWert={setPrio} zaehlung={jePrio} />
      </section>

      <p className="falluebersicht__treffer">
        {sichtbar.length} von {gefiltert.length} Treffern geladen
        {suche !== verzögerteSuche ? " · Suche wird aktualisiert …" : ""}
      </p>
      {sichtbar.length > 0 ? (
        <>
          <Fallsammlungsfaelle
            faelle={sichtbar}
            modulMap={modulMap}
            oeffnenModul={oeffnenModul}
            zeigeModulLink
          />
          {weitere > 0 && (
            <button
              type="button"
              className="fallsammlung__mehr"
              onClick={() => setAnzahl((wert) => Math.min(wert + FAELLE_PRO_SCHRITT, gefiltert.length))}
            >
              Weitere {Math.min(FAELLE_PRO_SCHRITT, weitere)} Fälle laden
              <small>{weitere} noch nicht angezeigt</small>
            </button>
          )}
        </>
      ) : (
        <p className="panel falluebersicht__leer">
          {thema !== "alle" && !jeThema[thema] ? (
            <>
              Zum Gebiet <strong>{themen.find((t) => t.id === thema)?.label}</strong> enthält die
              Fallsammlung derzeit keinen Fall. Die Lernmodule dieses Gebiets sind über
              „Lernmodule“ erreichbar; die Originalfälle der Kursmitschriften decken bisher
              vor allem das Einzelunternehmen ab.
            </>
          ) : (
            "Keine Fälle entsprechen der aktuellen Suche und Filterauswahl."
          )}
        </p>
      )}
    </>
  );
}
