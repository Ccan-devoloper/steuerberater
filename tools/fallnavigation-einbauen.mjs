#!/usr/bin/env node
import fs from "node:fs";

function ersetzen(text, alt, neu, bezeichnung) {
  if (text.includes(neu)) return text;
  if (!text.includes(alt)) throw new Error(`Einfügemarke fehlt: ${bezeichnung}`);
  return text.replace(alt, neu);
}

let app = fs.readFileSync("src/App.jsx", "utf8");
app = ersetzen(
  app,
  'import { module as alleModule, bereiche, bereichName, normenregister } from "./data/module";',
  'import { module as alleModule, bereiche, bereichName, normenregister } from "./data/module";\nimport { zugeordneteFaelle } from "./data/fallsammlung";\nimport offeneFaelle from "./data/faelle-offen";',
  "Falldaten-Import"
);
app = ersetzen(
  app,
  'import Fallsammlungsfaelle from "./components/Fallsammlungsfaelle";',
  'import Fallsammlungsfaelle from "./components/Fallsammlungsfaelle";\nimport Falluebersicht from "./components/Falluebersicht";',
  "Fallübersicht-Import"
);
app = ersetzen(
  app,
  '  IconPlan, IconSuche, IconSonne, IconMond, IconHaken,',
  '  IconFaelle, IconPlan, IconSuche, IconSonne, IconMond, IconHaken,',
  "Fälle-Icon"
);
app = ersetzen(
  app,
  '  { id: "module", label: "Lernmodule", Icon: IconModule },',
  '  { id: "module", label: "Lernmodule", Icon: IconModule },\n  { id: "faelle", label: "Fälle", Icon: IconFaelle },',
  "Menüpunkt Fälle"
);
app = ersetzen(
  app,
  '        {ansicht === "schema" && <Schemaseite />}',
  '        {ansicht === "faelle" && (\n          <Falluebersicht\n            zugeordneteFaelle={zugeordneteFaelle}\n            offeneFaelle={offeneFaelle}\n            module={alleModule}\n            oeffnenModul={oeffnen}\n          />\n        )}\n        {ansicht === "schema" && <Schemaseite />}',
  "Fallübersicht rendern"
);
fs.writeFileSync("src/App.jsx", app);

fs.writeFileSync("src/components/Falluebersicht.jsx", `import React, { useMemo, useState } from "react";
import Fallsammlungsfaelle from "./Fallsammlungsfaelle";

export default function Falluebersicht({ zugeordneteFaelle, offeneFaelle, module, oeffnenModul }) {
  const [suche, setSuche] = useState("");
  const [filter, setFilter] = useState("alle");

  const modulMap = useMemo(() => new Map(module.map((modul) => [modul.id, modul])), [module]);
  const alleFaelle = useMemo(
    () => [
      ...zugeordneteFaelle.map((fall) => ({ ...fall, verknuepfungsstatus: "verknuepft" })),
      ...offeneFaelle.map((fall) => ({ ...fall, verknuepfungsstatus: "offen" })),
    ].sort((a, b) => a.id.localeCompare(b.id, "de", { numeric: true })),
    [zugeordneteFaelle, offeneFaelle]
  );

  const sichtbar = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return alleFaelle.filter((fall) => {
      if (filter !== "alle" && fall.verknuepfungsstatus !== filter) return false;
      if (!q) return true;
      const zielmodul = fall.zielmodul_id ? modulMap.get(fall.zielmodul_id) : null;
      return [
        fall.id,
        fall.titel,
        fall.quellmodul,
        fall.sachverhalt,
        fall.loesung,
        zielmodul?.title,
        zielmodul?.law,
      ].join(" ").toLowerCase().includes(q);
    });
  }, [alleFaelle, filter, modulMap, suche]);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Fallsammlung</span>
          <h1>Alle Fälle und Lösungen</h1>
          <p className="lead">
            Sämtliche 90 Fälle sind hier zentral erreichbar. Zugeordnete Fälle führen direkt zum fachlich
            einschlägigen Lernmodul; noch offene Fälle bleiben vollständig verfügbar, jedoch ohne Modulverlinkung.
          </p>
        </div>
        <span className="zaehler">{alleFaelle.length} Fälle</span>
      </div>

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
          <button type="button" aria-pressed={filter === "offen"} onClick={() => setFilter("offen")}>Ohne Modul {offeneFaelle.length}</button>
        </div>
      </section>

      <p className="falluebersicht__treffer">{sichtbar.length} von {alleFaelle.length} Fällen angezeigt</p>
      {sichtbar.length > 0 ? (
        <Fallsammlungsfaelle
          faelle={sichtbar}
          modulMap={modulMap}
          oeffnenModul={oeffnenModul}
          zeigeModulLink
        />
      ) : (
        <p className="panel falluebersicht__leer">Keine Fälle entsprechen der aktuellen Suche und Filterauswahl.</p>
      )}
    </>
  );
}
`);

fs.writeFileSync("src/components/Fallsammlungsfaelle.jsx", `import React from "react";

const text = (wert) => Array.isArray(wert) ? wert.join("\\n\\n") : String(wert || "");

export default function Fallsammlungsfaelle({
  faelle,
  modulMap = new Map(),
  oeffnenModul,
  zeigeModulLink = false,
}) {
  return (
    <div className="fallsammlung">
      {faelle.map((fall) => {
        const zielmodul = fall.zielmodul_id ? modulMap.get(fall.zielmodul_id) : null;
        return (
          <article className="fallsammlung__fall" key={fall.id}>
            <header className="fallsammlung__kopf">
              <div>
                <span className="kicker">{fall.quellmodul} · {fall.titel}</span>
                <h3>{fall.quellmodul} – {fall.titel}</h3>
              </div>
              <code>{fall.id}</code>
            </header>
            {zeigeModulLink && (
              <div className="fallsammlung__verknuepfung">
                {zielmodul ? (
                  <button type="button" className="fallsammlung__modullink" onClick={() => oeffnenModul(zielmodul.id)}>
                    <span>Zum Lernmodul</span>
                    <strong>{zielmodul.title}</strong>
                    <b aria-hidden="true">→</b>
                  </button>
                ) : (
                  <span className="fallsammlung__ohne-modul">Noch keinem Lernmodul eindeutig zugeordnet</span>
                )}
              </div>
            )}
            <section className="fallsammlung__sachverhalt">
              <h4>Sachverhalt</h4>
              <div className="fallsammlung__text">{text(fall.sachverhalt)}</div>
            </section>
            <details className="fallsammlung__loesung">
              <summary>Lösung anzeigen</summary>
              <div className="fallsammlung__loesungsinhalt">
                <h4>Lösung</h4>
                <div className="fallsammlung__text">{text(fall.loesung)}</div>
              </div>
            </details>
            <footer>Fallsammlung S. {fall.quelle?.fall_seite ?? "–"} · Lösung S. {fall.quelle?.loesung_seite ?? "–"}</footer>
          </article>
        );
      })}
    </div>
  );
}
`);

let icons = fs.readFileSync("src/components/Icons.jsx", "utf8");
if (!icons.includes("IconFaelle")) {
  const marker = 'export const IconModule = () => <svg {...b}><path d="M4 6h16M4 11h16M4 16h11M4 21h11" /></svg>;';
  if (!icons.includes(marker)) throw new Error("Icon-Einfügemarke fehlt");
  icons = icons.replace(marker, `${marker}\nexport const IconFaelle = () => <svg {...b}><path d="M6 3h12v18H6zM9 7h6M9 11h6M9 15h4" /><path d="M3 6v15h12" /></svg>;`);
}
fs.writeFileSync("src/components/Icons.jsx", icons);

let css = fs.readFileSync("src/index.css", "utf8");
if (!css.includes("Fallübersicht · zentrale Navigation")) {
  css += `

/* Fallübersicht · zentrale Navigation */
.falluebersicht__steuerung { display: grid; grid-template-columns: minmax(260px, 1fr) auto; gap: 18px; align-items: end; padding: 18px; border: 1px solid var(--linie); background: var(--papier); }
.falluebersicht__suche { display: grid; gap: 6px; }
.falluebersicht__suche span { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-weich); }
.falluebersicht__suche input { width: 100%; min-height: 42px; padding: 8px 12px; border: 1px solid var(--linie); background: var(--feld); color: var(--ink); }
.falluebersicht__filter { display: flex; gap: 7px; flex-wrap: wrap; justify-content: flex-end; }
.falluebersicht__filter button { min-height: 42px; padding: 8px 12px; border: 1px solid var(--linie); background: var(--papier); cursor: pointer; }
.falluebersicht__filter button[aria-pressed="true"] { border-color: var(--tinte); background: var(--tinte-feld); color: var(--tinte-dunkel); font-weight: 700; }
.falluebersicht__treffer { margin: 14px 0 0; color: var(--ink-weich); font-family: var(--mono); font-size: 12px; }
.falluebersicht__leer { margin-top: 22px; }
.fallsammlung__verknuepfung { padding: 12px 20px; border-bottom: 1px solid var(--linie-fein); background: var(--feld); }
.fallsammlung__modullink { width: 100%; display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 10px; align-items: center; padding: 10px 12px; border: 1px solid var(--tinte); background: var(--papier); color: var(--tinte-dunkel); text-align: left; cursor: pointer; }
.fallsammlung__modullink span { font-family: var(--mono); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: var(--ink-weich); }
.fallsammlung__modullink strong { overflow-wrap: anywhere; }
.fallsammlung__modullink:hover { background: var(--tinte-feld); }
.fallsammlung__ohne-modul { display: inline-block; padding: 7px 10px; border-left: 3px solid var(--orange); background: var(--orange-feld); color: var(--orange); font-weight: 700; }
@media (max-width: 760px) {
  .falluebersicht__steuerung { grid-template-columns: 1fr; }
  .falluebersicht__filter { justify-content: flex-start; }
  .fallsammlung__modullink { grid-template-columns: 1fr auto; }
  .fallsammlung__modullink span { grid-column: 1 / -1; }
}
`;
}
fs.writeFileSync("src/index.css", css);

let pruefung = fs.readFileSync("tools/pruefen-fallsammlung.mjs", "utf8");
if (!pruefung.includes('import fs from "node:fs";')) {
  pruefung = pruefung.replace('#!/usr/bin/env node\n', '#!/usr/bin/env node\nimport fs from "node:fs";\n');
}
if (!pruefung.includes("Fallnavigation geprüft")) {
  const marker = 'if (fehler.length) { console.error(fehler.join("\\n")); process.exit(1); }';
  const tests = `for (const fall of zugeordneteFaelle) if (!Number.isInteger(fall.zielmodul_id)) fehler.push(\`Zugeordneter Fall ohne Zielmodul \${fall.id}\`);\nfor (const fall of offeneFaelle) if (fall.zielmodul_id != null) fehler.push(\`Offener Fall besitzt Zielmodul \${fall.id}\`);\nconst appText = fs.readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");\nconst uebersichtText = fs.readFileSync(new URL("../src/components/Falluebersicht.jsx", import.meta.url), "utf8");\nconst fallkomponenteText = fs.readFileSync(new URL("../src/components/Fallsammlungsfaelle.jsx", import.meta.url), "utf8");\nif (!appText.includes('{ id: "faelle", label: "Fälle"')) fehler.push("Menüpunkt Fälle fehlt");\nif (!appText.includes('ansicht === "faelle"')) fehler.push("Fallansicht fehlt");\nif (!uebersichtText.includes("zugeordneteFaelle") || !uebersichtText.includes("offeneFaelle")) fehler.push("Fallübersicht umfasst nicht beide Fallgruppen");\nif (!fallkomponenteText.includes("Zum Lernmodul") || !fallkomponenteText.includes("Noch keinem Lernmodul")) fehler.push("Modulverlinkung oder Offen-Kennzeichnung fehlt");\n${marker}\nconsole.log("Fallnavigation geprüft: Menüpunkt vorhanden · verknüpfte und offene Fälle erreichbar");`;
  if (!pruefung.includes(marker)) throw new Error("Prüfskript-Einfügemarke fehlt");
  pruefung = pruefung.replace(marker, tests);
}
fs.writeFileSync("tools/pruefen-fallsammlung.mjs", pruefung);

console.log("Fallnavigation eingebaut: 90 Fälle im Menü, Modulverlinkung für zugeordnete Fälle, offene Fälle ohne Link.");
