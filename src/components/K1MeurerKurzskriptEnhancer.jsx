import "../data/k1-ust-einheit-8-register.js";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import k1UstEinheit1 from "../data/module-vertiefung-m.js";
import k1UstEinheit2 from "../data/module-vertiefung-n.js";
import {
  MEURER_KURZSKRIPT_META,
  meurerKurzskriptFuerModul,
} from "../data/k1-ust-kurzskript-meurer.js";
import { SchemaVerweise, VerlinkterText } from "./K1SchemaLinks";
import "./k1-meurer-kurzskript.css";

const inhaltById = new Map(
  [...k1UstEinheit1, ...k1UstEinheit2].map((inhalt) => [Number(inhalt.id), inhalt]),
);

function modulIdAusLesson(lesson) {
  const kicker = lesson?.querySelector(".lesson__kopf .kicker")?.textContent || "";
  const treffer = kicker.match(/Lernmodul\s+(\d+)/i);
  return treffer ? Number(treffer[1]) : null;
}

function nativeRailButton(campus, text) {
  return Array.from(campus?.querySelectorAll(".rail__nav .rail__link") || [])
    .find((button) => button.textContent?.trim() === text);
}

function seitenText([von, bis], prefix) {
  return von === bis ? `${prefix} ${von}` : `${prefix} ${von}–${bis}`;
}

function KurzskriptBlock({ block, onSchema }) {
  return (
    <section className="k1-meurer-block">
      <header className="k1-meurer-block__kopf">
        <span>{block.teil}</span>
        <b>
          {seitenText(block.pdf, "PDF-S.")} · {seitenText(block.skript, "Skript-S.")}
        </b>
      </header>
      <h3>{block.titel}</h3>
      <ul className="liste k1-meurer-block__punkte">
        {block.kernaussagen.map((text, index) => (
          <li key={index}><VerlinkterText text={text} onOpen={onSchema} compact /></li>
        ))}
      </ul>
      {block.visual && (
        <div className="k1-meurer-visual">
          <strong>Schaubilder / Tabellen der Quelle</strong>
          <p>{block.visual}</p>
        </div>
      )}
      {block.klausur?.length > 0 && (
        <div className="k1-meurer-klausur">
          <strong>Klausurtechnik</strong>
          <ul>
            {block.klausur.map((text, index) => (
              <li key={index}><VerlinkterText text={text} onOpen={onSchema} compact /></li>
            ))}
          </ul>
        </div>
      )}
      <SchemaVerweise text={block.normen.join(" · ")} onOpen={onSchema} compact />
    </section>
  );
}

function KurzskriptSektion({ modulId, onSchema }) {
  const bloecke = useMemo(() => meurerKurzskriptFuerModul(modulId), [modulId]);
  if (!bloecke.length) return null;

  return (
    <section className="tz k1-meurer-tz" data-k1-meurer-modul={modulId}>
      <div className="tz__no">
        <b>Kurzskript</b>
        Meurer 05/2026
      </div>
      <div className="tz__body">
        <div className="k1-meurer-head">
          <div>
            <span className="kicker">Quellenvertiefung · Lernmodul {modulId}</span>
            <h2 className="tz__titel">{MEURER_KURZSKRIPT_META.titel}</h2>
            <p>
              {MEURER_KURZSKRIPT_META.autor} · Stand {MEURER_KURZSKRIPT_META.stand}. Die hier
              zugeordneten Seiten ergänzen dieses Lernmodul; Schaubilder und Tabellen sind
              inhaltlich in den Hinweisen mitberücksichtigt.
            </p>
          </div>
          <span className="k1-meurer-head__count">{bloecke.length} {bloecke.length === 1 ? "Block" : "Blöcke"}</span>
        </div>
        <div className="k1-meurer-bloecke">
          {bloecke.map((block) => <KurzskriptBlock key={block.id} block={block} onSchema={onSchema} />)}
        </div>
      </div>
    </section>
  );
}

export default function K1MeurerKurzskriptEnhancer() {
  const [ziel, setZiel] = useState({ mount: null, modulId: null });

  const schemaOeffnen = useCallback((schemaZiel = "schema-architektur") => {
    const campus = document.querySelector(".kst-campus");
    const schema = nativeRailButton(campus, "Prüfschema");
    if (schema?.getAttribute("aria-current") !== "true") schema?.click();

    const versuchen = (versuch = 0) => {
      const element = document.getElementById(schemaZiel);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (versuch < 40) window.setTimeout(() => versuchen(versuch + 1), 55);
    };
    window.setTimeout(() => versuchen(), 35);
  }, []);

  useEffect(() => {
    let frame = null;
    let aktuellerPlatzhalter = null;

    const quelllabelKorrigieren = () => {
      document.querySelectorAll(".k1-themen-root .modul__kopf span").forEach((span) => {
        if (span.textContent?.trim() === "Quelle: Einheit Kurzskript") {
          span.textContent = "Quelle: Meurer-Kurzskript";
        }
      });
      document.querySelectorAll(".kst-campus main.page .modules .modul__kopf span").forEach((span) => {
        if (span.textContent?.trim() === "Einheit Kurzskript") {
          span.textContent = "Meurer-Kurzskript";
        }
      });
    };

    const scan = () => {
      frame = null;
      quelllabelKorrigieren();

      const lesson = document.querySelector(".kst-campus main.page > .lesson");
      const modulId = modulIdAusLesson(lesson);
      const modul = modulId ? inhaltById.get(modulId) : null;
      const bloecke = modul?.area === "Fall" ? [] : meurerKurzskriptFuerModul(modulId);

      if (!lesson || !modulId || !modul || modul.area === "Fall" || !bloecke.length) {
        if (aktuellerPlatzhalter?.isConnected) aktuellerPlatzhalter.remove();
        aktuellerPlatzhalter = null;
        setZiel((alt) => (alt.mount || alt.modulId ? { mount: null, modulId: null } : alt));
        return;
      }

      let platzhalter = lesson.querySelector(":scope > [data-k1-meurer-mount]");
      if (!platzhalter) {
        platzhalter = document.createElement("div");
        platzhalter.dataset.k1MeurerMount = String(modulId);

        const sichern = Array.from(lesson.querySelectorAll(":scope > .tz")).find((section) =>
          /Sichern/i.test(section.querySelector(".tz__no")?.textContent || ""),
        );
        if (sichern) lesson.insertBefore(platzhalter, sichern);
        else {
          const quellen = Array.from(lesson.querySelectorAll(":scope > .tz")).find((section) =>
            /Quellen/i.test(section.querySelector(".tz__no")?.textContent || ""),
          );
          if (quellen) lesson.insertBefore(platzhalter, quellen);
          else lesson.appendChild(platzhalter);
        }
      }

      aktuellerPlatzhalter = platzhalter;
      setZiel((alt) => (alt.mount === platzhalter && alt.modulId === modulId ? alt : { mount: platzhalter, modulId }));
    };

    const planen = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(scan);
    };

    planen();
    const observer = new MutationObserver(planen);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["aria-current", "class"] });
    return () => {
      observer.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
      if (aktuellerPlatzhalter?.isConnected) aktuellerPlatzhalter.remove();
    };
  }, []);

  if (!ziel.mount || !ziel.modulId) return null;
  return createPortal(<KurzskriptSektion modulId={ziel.modulId} onSchema={schemaOeffnen} />, ziel.mount);
}
