import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AOVerlinkterText } from "./AOSchemaLinks";
import "./ao-fall311.css";

const ZEILEN = [
  {
    sachverhalt: "Der Stpfl. wird bzgl. seines VuV-Objekts um Auskunft ersucht.",
    recht: "✓",
    verwertbar: "✓",
  },
  {
    sachverhalt: "Der Stpfl. erhält folgendes Auskunftsersuchen: „Nach den vorliegenden Unterlagen haben Sie am 12.03.2025 einen Betrag von 18.000 € an Herrn X überwiesen. Bitte teilen Sie mit, aus welchem Rechtsgrund die Zahlung erfolgte, z. B. Darlehen, Kaufpreis, Schenkung oder Arbeitslohn.“ Herr X wurde bislang nicht gefragt.",
    recht: "§ 93 Abs. 1 S. 3 AO",
    verwertbar: "✓",
  },
  {
    sachverhalt: "Wie vorstehend, aber Herr X ist der Bruder des Stpfl.",
    recht: "§ 93 Abs. 1 S. 3 AO",
    verwertbar: "§ 101 Abs. 1 i.V.m. § 15 AO",
  },
  {
    sachverhalt: "Der Steuerberater wird unmittelbar über die Belange des Mandanten um Auskunft ersucht, ohne zuvor den Stpfl. selbst um Auskunft zu ersuchen. Etwaige Belehrungen des Beraters sind nicht erfolgt.",
    recht: "✓ · § 80 Abs. 5 AO",
    verwertbar: "✓",
  },
  {
    sachverhalt: "EM und EF werden zusammen zur ESt veranlagt. Der EM ist Alleineigentümer eines V+V-Objekts. Das FA ersucht die EF um Auskunft, ohne zuvor EM zu fragen. Eine Belehrung ist nicht erfolgt.",
    recht: "§ 93 Abs. 1 S. 3 AO",
    verwertbar: "§ 101 Abs. 1 i.V.m. § 15 AO",
  },
];

function railButton(text) {
  return Array.from(document.querySelectorAll(".ao-campus .rail__link"))
    .find((button) => button.textContent?.trim() === text);
}

function istHaken(text) {
  return text.trim() === "✓";
}

function ErgebnisZelle({ text, onSchema }) {
  if (istHaken(text)) return <span className="ao-f311-check" aria-label="in der Quelle mit Haken markiert">✓</span>;
  if (text.startsWith("✓ ·")) {
    const norm = text.replace(/^✓ ·\s*/, "");
    return <span className="ao-f311-mix"><span className="ao-f311-check">✓</span><AOVerlinkterText text={norm} onOpen={onSchema} compact /></span>;
  }
  return <AOVerlinkterText text={text} onOpen={onSchema} compact />;
}

function Quellentabelle({ onSchema, kompakt = false }) {
  return (
    <div className={`ao-f311-wrap${kompakt ? " ao-f311-wrap--kompakt" : ""}`}>
      <div className="ao-f311-head">
        <div>
          <span className="kicker">Originaltabelle · AO Einheit 1 · PDF-S. 13</span>
          <h3>Auskunftsersuchen: „Zu Recht?“ und „Verwertbar?“</h3>
        </div>
        <span className="ao-f311-source">5 Varianten</span>
      </div>
      <div className="ao-f311-scroll">
        <table className="ao-f311-table">
          <thead>
            <tr>
              <th scope="col">Sachverhalt</th>
              <th scope="col">Zu Recht?</th>
              <th scope="col">Verwertbar?</th>
            </tr>
          </thead>
          <tbody>
            {ZEILEN.map((zeile, index) => (
              <tr key={index}>
                <td><span className="ao-f311-nr">{index + 1}</span>{zeile.sachverhalt}</td>
                <td><ErgebnisZelle text={zeile.recht} onSchema={onSchema} /></td>
                <td><ErgebnisZelle text={zeile.verwertbar} onSchema={onSchema} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="ao-f311-legende">
        <b>Lesart der Quelle:</b> Ein grüner Haken wird nur dort gezeigt, wo die Lösungstabelle selbst einen Haken enthält. Steht in der Handschrift nur eine Norm, bleibt die Zelle bewusst bei dieser Normangabe; daraus wird kein zusätzliches Ja/Nein abgeleitet.
      </p>
    </div>
  );
}

export default function AOFall311Tabelle() {
  const [mounts, setMounts] = useState({ uebersicht: null, detail: null });

  const schemaOeffnen = useCallback((ziel = "ao-schema-ermittlung") => {
    const schema = railButton("Prüfschema");
    if (schema?.getAttribute("aria-current") !== "true") schema?.click();
    const versuchen = (n = 0) => {
      const element = document.getElementById(ziel);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (n < 35) window.setTimeout(() => versuchen(n + 1), 55);
    };
    window.setTimeout(() => versuchen(), 35);
  }, []);

  useEffect(() => {
    let frame = null;
    let overviewHost = null;
    let detailHost = null;

    const scan = () => {
      frame = null;

      const karte = Array.from(document.querySelectorAll(".ao-campus .kst-fallkarte"))
        .find((node) => /Fall\s+311\b/.test(node.querySelector(".kicker")?.textContent || ""));
      if (karte) {
        const details = karte.querySelector("details");
        const alteLoesung = details?.querySelector(":scope > .fall");
        if (alteLoesung) alteLoesung.classList.add("ao-f311-altloesung");
        if (details && !details.querySelector(":scope > [data-ao-f311-overview]")) {
          overviewHost = document.createElement("div");
          overviewHost.dataset.aoF311Overview = "true";
          const summary = details.querySelector("summary");
          if (summary) summary.insertAdjacentElement("afterend", overviewHost);
          else details.prepend(overviewHost);
        } else if (details) {
          overviewHost = details.querySelector(":scope > [data-ao-f311-overview]");
        }
      } else if (overviewHost?.isConnected) {
        overviewHost.remove();
        overviewHost = null;
      }

      const lesson = document.querySelector(".ao-campus main.page > .ao-lesson");
      const kicker = lesson?.querySelector(".lesson__kopf .kicker")?.textContent || "";
      if (/Originalfall\s+311\b/.test(kicker)) {
        const fall = lesson.querySelector(".fall");
        if (fall) {
          const bloecke = Array.from(fall.querySelectorAll(":scope > .fall__block"));
          bloecke.slice(1).forEach((block) => block.classList.add("ao-f311-altloesung"));
          if (!fall.querySelector(":scope > [data-ao-f311-detail]")) {
            detailHost = document.createElement("div");
            detailHost.dataset.aoF311Detail = "true";
            if (bloecke[0]) bloecke[0].insertAdjacentElement("afterend", detailHost);
            else fall.appendChild(detailHost);
          } else {
            detailHost = fall.querySelector(":scope > [data-ao-f311-detail]");
          }
        }
      } else if (detailHost?.isConnected) {
        detailHost.remove();
        detailHost = null;
      }

      setMounts((alt) => {
        const neu = { uebersicht: overviewHost, detail: detailHost };
        return alt.uebersicht === neu.uebersicht && alt.detail === neu.detail ? alt : neu;
      });
    };

    const planen = () => {
      if (frame === null) frame = window.requestAnimationFrame(scan);
    };
    planen();
    const observer = new MutationObserver(planen);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["open", "class"] });
    return () => {
      observer.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
      if (overviewHost?.isConnected) overviewHost.remove();
      if (detailHost?.isConnected) detailHost.remove();
    };
  }, []);

  return (
    <>
      {mounts.uebersicht && createPortal(<Quellentabelle onSchema={schemaOeffnen} kompakt />, mounts.uebersicht)}
      {mounts.detail && createPortal(<Quellentabelle onSchema={schemaOeffnen} />, mounts.detail)}
    </>
  );
}
