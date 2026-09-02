/* Die Register müssen vor allen Datenimporten laufen, weil sie die Einheiten
   3–8 in den gemeinsamen Array der Einheit 2 einspeisen. */
import "../data/k1-ust-einheit-2-nachtrag-register.js";
import "../data/k1-ust-einheit-3-register.js";
import "../data/k1-ust-einheit-4-register.js";
import "../data/k1-ust-einheit-5-register.js";
import "../data/k1-ust-einheit-6-register.js";
import "../data/k1-ust-einheit-7-register.js";
import "../data/k1-ust-einheit-8-register.js";
import React, { useEffect, useMemo, useRef, useState } from "react";
import k1UstEinheit1 from "../data/module-vertiefung-m.js";
import k1UstEinheit2 from "../data/module-vertiefung-n.js";
import { k1EinheitenListe } from "../data/k1-einheiten.js";
import { REDAKTIONSSTAND } from "../data/redaktion.js";
import Schaubild from "./Schaubild";
import UstPruefschema from "./UstPruefschema";
import { Notiz } from "./Bausteine";
import { SchemaVerweise, VerlinkteNormkette, VerlinkterText, grundschema } from "./K1SchemaLinks";
import { laden, sichern, useFortschritt, anteil } from "../lib/fortschritt";
import { erfasseSeitenzustand, stelleSeitenzustandWiederHer } from "../lib/campus-navigation";
import { k1Karteikarten, k1Quizfragen } from "../data/k1-lernstoff.js";
import { k1Aufgaben, k1Quellskizzen } from "../data/k1-fall-extras.js";
import { K1Aufgabenblock, K1Quellskizze } from "./K1FallExtras";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import Klausurmodus, { IconKlausur } from "./Klausurmodus";
import {
  IconCockpit, IconModule, IconFaelle, IconSchema, IconHaken, IconTraining,
} from "./Icons";
import "./kst.css";
import { PrioBadge, PrioFilter, PrioCockpit, prioZaehlen, usePrioFilter, prioritaetFuer } from "./Prioritaet";

const k1UstInhalte = [...k1UstEinheit1, ...k1UstEinheit2];
const k1UstFaelle = k1UstInhalte.filter((inhalt) => inhalt.area === "Fall");
const k1UstModule = k1UstInhalte.filter((inhalt) => inhalt.area !== "Fall");
const inhaltIds = new Set(k1UstInhalte.map((inhalt) => inhalt.id));
/* Examenspriorität je USt-Inhalt nach den Beck-Auswertungen (Tag 1). */
const prioInhalt = (m) => prioritaetFuer("ust", m, { typ: m.area === "Fall" ? "fall" : "modul", id: m.id });
const prioZaehlung = prioZaehlen(k1UstInhalte, prioInhalt);
const ansichten = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "module", label: "Umsatzsteuer", Icon: IconModule },
  { id: "faelle", label: "Originalfälle", Icon: IconFaelle },
  { id: "klausur", label: "Klausurmodus", Icon: IconKlausur },
  { id: "schema", label: "Prüfschema", Icon: IconSchema },
  { id: "training", label: "Training", Icon: IconTraining },
];

const k1UstFallKategorien = [
  { id: "alle", label: "Alle Kategorien", faelle: [] },
  { id: "grundlagen", label: "Steuerbarkeit & Unternehmer", faelle: [141, 142] },
  { id: "leistungsart-ort", label: "Lieferung, sonstige Leistung & Leistungsort", faelle: [143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153] },
  { id: "grundstuecke", label: "Grundstücke, Vermietung & Option", faelle: [154, 155, 156, 157] },
  { id: "bmg-entstehung", label: "Bemessungsgrundlage, Steuerentstehung & § 17", faelle: [158, 159, 196, 197, 198, 207] },
  { id: "rechnung-14c", label: "Rechnung & § 14c", faelle: [214] },
  { id: "reverse-charge", label: "Reverse Charge & Steuerschuldnerschaft", faelle: [165, 166, 167] },
  { id: "reihengeschaefte", label: "Reihengeschäfte", faelle: [168, 169, 170, 171, 172, 173] },
  { id: "drittland", label: "Drittland, Ausfuhr & Einfuhr", faelle: [174, 175, 176, 182, 183, 217] },
  { id: "ig-warenverkehr", label: "Innergemeinschaftlicher Warenverkehr", faelle: [184, 185, 186, 187, 188, 189, 190] },
  { id: "vorsteuer-15a", label: "Vorsteuer, Zuordnung & § 15a", faelle: [200, 201, 202, 216, 219, 220, 221, 222, 223] },
  { id: "uwa", label: "Unentgeltliche Wertabgaben & Geschenke", faelle: [199, 203, 204, 205, 206, 215] },
  { id: "sonderregelungen", label: "Sonderregelungen & Margenbesteuerung", faelle: [194, 195, 228] },
  { id: "gesellschaften", label: "GiG, Gesellschaften & Organschaft", faelle: [229, 230, 231, 235, 236, 237] },
  { id: "kleinunternehmer", label: "Kleinunternehmer", faelle: [238, 239] },
  { id: "klausurfaelle", label: "Klausurübergreifende Fälle", faelle: [240, 241, 242] },
];
const k1UstFallbackKategorie = { id: "sonstige", label: "Weitere USt-Fälle", faelle: [] };
const k1UstFallKategorieById = new Map(
  k1UstFallKategorien.flatMap((kategorie) => kategorie.faelle.map((id) => [id, kategorie])),
);
const k1UstFallKategorie = (fall) => k1UstFallKategorieById.get(fall.id) || k1UstFallbackKategorie;

const klausurGebiete = [
  { id: "alle", label: "Alle Einheiten" },
  ...[1, 2, 3, 4, 5, 6, 7, 8].map((e) => ({ id: `E${e}`, label: `Einheit ${e}` })),
];

/* Skizzen aus den handschriftlichen Mitschriften. Die Darstellung übernimmt
   ausschließlich die dort notierten Beziehungen, Beträge, Zeitpunkte und
   Normhinweise; sie rechnet keine Werte neu. */
const loesungsskizzen = {
  141: [
    {
      typ: "fluss",
      titel: "Sony – Media Markt – Endkundin",
      schritte: [
        { titel: "Sony · München", zeilen: ["24.4. TV", "1.000 € + 190 € USt", "Rg. 2.5."], ton: "neutral" },
        { titel: "Media Markt · FFM", zeilen: ["Eingangsumsatz", "→ Ausgangsumsatz"], ton: "tinte" },
        { titel: "Kundin · Wetzlar", zeilen: ["24.6. TV", "2.000 € + 380 € USt", "Rg. 24.6."], ton: "neutral" },
      ],
      legende: "Skizze S. 3–12: Ausgangsumsatz zuerst prüfen; Vorsteuer 190 € auf der Eingangsseite. USt 380 € entsteht im VAZ 06, Vorsteuerabzug 190 € im VAZ 05.",
    },
  ],
  142: [
    {
      typ: "gegenueber",
      titel: "Ein Unternehmer – ein Unternehmen",
      links: {
        titel: "Unternehmensbereich",
        norm: "§ 2 Abs. 1 UStG",
        ton: "tinte",
        punkte: [
          "sämtliche Tätigkeitszweige gehören zum einen Unternehmen",
          "Grundgeschäft, Hilfsgeschäft und Nebengeschäft erfassen",
          "natürliche, juristische Personen und Personengesellschaften möglich",
        ],
      },
      rechts: {
        titel: "Abgrenzung",
        norm: "§ 1 Abs. 1 Nr. 1 UStG",
        ton: "orange",
        punkte: [
          "private Wohncouch: nicht im Rahmen des Unternehmens",
          "Umsätze zwischen eigenen Unternehmensteilen: Innenumsätze",
          "Innenumsätze sind nicht steuerbare Außenumsätze",
        ],
      },
      fussnote: "Skizze S. 18–20: Die Mitschrift zeichnet sämtliche Tätigkeitszweige in einen gemeinsamen Unternehmenskreis und markiert Vorgänge zwischen ihnen als nicht steuerbare Innenumsätze.",
    },
  ],
  143: [
    {
      typ: "stufen",
      titel: "Maschinenabholung in Dortmund",
      stufen: [
        { stufe: "1", text: "Kaufvertrag am 30.7.26", norm: "Vertrag", ton: "neutral" },
        { stufe: "2", text: "K holt die Maschine am 1.8.26 in Dortmund ab", norm: "Abholung", ton: "tinte" },
        { stufe: "3", text: "Verfügungsmacht an einem Gegenstand", norm: "§ 3 Abs. 1 UStG", ton: "tinte", ergebnis: "Lieferung" },
        { stufe: "4", text: "bewegte Lieferung beginnt in Dortmund", norm: "§ 3 Abs. 6 S. 1, 2 UStG", ton: "gruen", ergebnis: "Ort: Dortmund" },
      ],
      legende: "Skizze S. 23–25: Lieferung = Verschaffung der Verfügungsmacht an einem Gegenstand; bei der Abholung liegt der Beginn der Warenbewegung in Dortmund.",
    },
  ],
  146: [
    {
      typ: "fluss",
      titel: "Maschine mit Transport und Übernachtung",
      schritte: [
        { titel: "U · Aachen", zeilen: ["Maschine 238.000 €", "Transport 1.000 €", "Übernachtung 100 €"], ton: "tinte" },
        { titel: "Beförderung", zeilen: ["eigener Lkw", "Aachen → München"], ton: "neutral" },
        { titel: "K · München", zeilen: ["eine Hauptleistung", "Transport + Übernachtung", "= Nebenleistungen"], ton: "gruen" },
      ],
      legende: "Skizze S. 32–37: Maschine ist die Hauptleistung; Transport und die weiterbelastete Übernachtung teilen als Nebenleistungen deren umsatzsteuerliches Schicksal. Die Mitschrift verweist hierzu auf A 3.10 Abs. 5 UStAE.",
    },
  ],
  147: [
    {
      typ: "gegenueber",
      titel: "Zeitpunkt der sonstigen Leistung",
      links: {
        titel: "Grundsatz",
        norm: "mit Vollendung",
        ton: "tinte",
        punkte: [
          "Baggervermietung 1.1.26 bis 30.6.26",
          "ohne Teilleistungsvereinbarung: Vollendung am 30.6.",
        ],
      },
      rechts: {
        titel: "Ausnahme: Teilleistungen",
        norm: "§ 13 Abs. 1 Nr. 1 Buchst. a S. 2, 3 UStG",
        ton: "orange",
        punkte: [
          "monatliche Miete im Voraus vereinbart",
          "monatliche Teilleistungen",
          "jeweils eigener VAZ 01–06",
        ],
      },
      fussnote: "Skizzen S. 38 und 41–42: Die Mitschrift stellt Grundsatz und Ausnahme als zwei Äste gegenüber.",
    },
  ],
  148: [
    {
      typ: "gegenueber",
      titel: "Fliesenleger: Materialstellung entscheidet",
      links: {
        titel: "a) F stellt Material",
        norm: "§ 3 Abs. 4, § 3 Abs. 7 S. 1 UStG",
        ton: "tinte",
        punkte: ["Werklieferung", "unbewegte Lieferung", "Ort: Karlsruhe"],
      },
      rechts: {
        titel: "b) K stellt Material",
        norm: "§ 3 Abs. 9 S. 1, § 3a Abs. 3 Nr. 1 UStG",
        ton: "gruen",
        punkte: ["sonstige Leistung", "Grundstücksleistung am Bürogebäude", "Ort: Karlsruhe"],
      },
      fussnote: "Lösung S. 45; die vorgelagerte Skizze S. 43 trennt bei sonstigen Leistungen außerdem B2B (§ 3a Abs. 2 UStG) und B2C (§ 3a Abs. 1 UStG).",
    },
  ],
  150: [
    {
      typ: "gegenueber",
      titel: "Hotel Wien: Übernachtung und Frühstück",
      links: {
        titel: "Übernachtung",
        norm: "§ 12 Abs. 2 Nr. 11 UStG",
        ton: "gruen",
        punkte: ["7 %", "Beherbergungsleistung", "Ort Wien: § 3a Abs. 3 Nr. 1 UStG"],
      },
      rechts: {
        titel: "Frühstück",
        norm: "§ 12 Abs. 1 UStG",
        ton: "orange",
        punkte: ["19 % nach der Mitschrift", "Nebenleistung, aber Aufteilungsgebot", "ab 2026 notiert: Essen 7 % / Getränke 19 %"],
      },
      fussnote: "Box S. 53–54: Für den 2026-Exkurs sind 70 % Essen mit 7 % und 30 % Getränke mit 19 % notiert. Diese Quoten werden unverändert wiedergegeben.",
    },
  ],
  153: [
    {
      typ: "fluss",
      titel: "Leistungsaustausch gegen Entgelt",
      schritte: [
        { titel: "Unternehmer U", zeilen: ["Leistung"], ton: "tinte" },
        { titel: "Leistungsaustausch", zeilen: ["gegen Entgelt"], ton: "neutral" },
        { titel: "Kunde K", zeilen: ["Gegenleistung", "i. d. R. Geld"], ton: "gruen" },
      ],
      legende: "Skizze S. 64: Leistung des Unternehmers an den Kunden und Gegenleistung des Kunden bilden den Leistungsaustausch. Die Zeichnung ergänzt die Ortsprüfung des Telekommunikationsfalls.",
    },
  ],
  154: [
    {
      typ: "fluss",
      titel: "Zwei Leistungsstufen beim Bauträgerfall",
      schritte: [
        { titel: "G · Generalunternehmer", zeilen: ["Werklieferung", "§ 3 Abs. 4 S. 1 UStG", "19 %"], ton: "tinte" },
        { titel: "B · Bauträger", zeilen: ["Grundstück in Kiel", "Eingangs- ↔ Ausgangsseite"], ton: "neutral" },
        { titel: "K · Kunde", zeilen: ["bebautes Grundstück", "§ 4 Nr. 9 Buchst. a UStG", "steuerfrei"], ton: "gruen" },
      ],
      legende: "Teil 1, Skizzen S. 25–57: Die Leistung G → B und der Grundstücksverkauf B → K werden getrennt geprüft. Der steuerfreie Ausgangsumsatz des B führt in der Mitschrift zum Vorsteuerausschluss auf der Eingangsseite.",
    },
  ],
  155: [
    {
      typ: "stufen",
      titel: "Option beim Grundstücksverkauf",
      stufen: [
        { stufe: "1", text: "Grundstücksverkauf grundsätzlich steuerfrei", norm: "§ 4 Nr. 9 Buchst. a UStG", ton: "neutral" },
        { stufe: "2", text: "Verkauf an Unternehmer für dessen Unternehmen", norm: "§ 9 Abs. 1 UStG", ton: "tinte" },
        { stufe: "3", text: "Option im notariellen Vertrag", norm: "§ 9 Abs. 3 UStG", ton: "tinte" },
        { stufe: "4", text: "Option wirksam", norm: "§ 12 Abs. 1 UStG", ton: "gruen", ergebnis: "19 %" },
      ],
      legende: "Teil 1, Lösung S. 63–71: Die Mitschrift bejaht die Option beim Verkauf an den Pflegedienst; die Vermietungsschranke des § 9 Abs. 2 wird nicht auf den Verkaufsfall übertragen.",
    },
  ],
  156: [
    {
      typ: "stufen",
      titel: "Drei Vermietungsvarianten",
      stufen: [
        { stufe: "a", text: "Wohnung + Pkw-Stellplatz: eine Leistung, Stellplatz als Nebenleistung", norm: "§ 4 Nr. 12 S. 1 Buchst. a", ton: "gruen", ergebnis: "steuerfrei" },
        { stufe: "b", text: "Pkw-Stellplatz selbständig vermietet", norm: "§ 4 Nr. 12 S. 2", ton: "orange", ergebnis: "steuerpflichtig" },
        { stufe: "c1", text: "Ladenlokal", norm: "§ 4 Nr. 12 S. 1 Buchst. a", ton: "gruen", ergebnis: "steuerfrei" },
        { stufe: "c2", text: "Betriebsvorrichtungen als gesonderte Leistung", norm: "§ 4 Nr. 12 S. 2", ton: "orange", ergebnis: "steuerpflichtig" },
      ],
      legende: "Teil 1, Lösung S. 83–103: Die Skizzen unterscheiden Haupt-/Nebenleistung und zwei selbständige Leistungen; die Betriebsvorrichtung wird separat behandelt.",
    },
  ],
  157: [
    {
      typ: "stufen",
      titel: "Vermietungsoption bei 3 % / 97 %",
      stufen: [
        { stufe: "1", text: "Grundstücksvermietung an Bildungseinrichtung B", norm: "§ 4 Nr. 12 S. 1 Buchst. a", ton: "neutral" },
        { stufe: "2", text: "B nutzt für 3 % steuerfreie und 97 % steuerpflichtige Umsätze", norm: "§ 9 Abs. 2 UStG", ton: "tinte" },
        { stufe: "3", text: "mindestens 95 % vorsteuerunschädliche Verwendung", norm: "A 9.2 Abs. 3 S. 2 UStAE", ton: "tinte" },
        { stufe: "4", text: "97 % ≥ 95 %", norm: "Option", ton: "gruen", ergebnis: "wirksam · 19 %" },
      ],
      legende: "Teil 1, Lösung S. 118–127: Die in der Mitschrift verwendete 95-%-Grenze wird mit 97 % erreicht. Zahlen und Quote werden unverändert übernommen.",
    },
  ],
  158: [
    {
      typ: "stufen",
      titel: "Bemessungsgrundlage beim Kfz-Verkauf",
      stufen: [
        { stufe: "1", text: "Autopreis i.H.v. 11.900 €", norm: "Brutto", ton: "neutral" },
        { stufe: "2", text: "+ 100 € Überführungskosten = 12.000 €", norm: "Entgelt", ton: "tinte" },
        { stufe: "3", text: "75 € Zulassungsgebühren bleiben draußen", norm: "durchlaufender Posten", ton: "orange" },
        { stufe: "4", text: "12.000 / 1,19 = 10.084,03", norm: "§ 10 Abs. 1 UStG", ton: "gruen", ergebnis: "BMG 10.084,03 €" },
        { stufe: "5", text: "Umsatzsteuer", norm: "§ 12 Abs. 1 UStG", ton: "gruen", ergebnis: "1.915,97 €" },
      ],
      legende: "Teil 2, Lösung S. 60–64: Die Werte 10.084,03 € und 1.915,97 € werden exakt aus der Mitschrift übernommen und nicht neu berechnet.",
    },
  ],
  159: [
    {
      typ: "stufen",
      titel: "Ausstellungshalle: Leistung und Steuerentstehung",
      stufen: [
        { stufe: "19.6.", text: "Vorausrechnung 100.000 € + 19.000 € USt", norm: "Rechnung", ton: "neutral" },
        { stufe: "2.7.", text: "Zahlung 25.000 € vor Leistungsausführung", norm: "§ 13 Abs. 1 Nr. 1 Buchst. a UStG", ton: "tinte", ergebnis: "3.991,60 € USt · VAZ 07" },
        { stufe: "31.8.", text: "Abnahme der Halle = Leistungsausführung", norm: "Werklieferung", ton: "gruen", ergebnis: "15.008,40 € USt · VAZ 08" },
        { stufe: "2.9.", text: "Zahlung nach bereits ausgeführter Leistung", norm: "kein neuer Entstehungszeitpunkt", ton: "orange" },
      ],
      legende: "Teil 2, Lösung S. 98–128: Die Septemberzahlung ist für die Steuerentstehung gestrichen. Die Steuerbeträge 3.991,60 € und 15.008,40 € bleiben exakt wie in der Quelle.",
    },
  ],
};

function Loesungsskizzen({ fallId }) {
  const skizzen = loesungsskizzen[fallId] || [];
  if (!skizzen.length) return null;
  return (
    <div>
      {skizzen.map((spec, index) => <Schaubild key={`${fallId}-${index}`} spec={spec} />)}
    </div>
  );
}

function Loesungsblock({ m, onSchema }) {
  return (
    <div className="fall__block">
      <b>Lösung</b>
      <ol>
        {(m.example?.solution || []).map((s, i) => (
          <li key={i}><VerlinkterText text={s} onOpen={onSchema} compact /></li>
        ))}
      </ol>
      <K1Quellskizze spec={k1Quellskizzen[m.id]} />
      <Loesungsskizzen fallId={m.id} />
      {(m.normchain || []).length > 0 && (
        <div>
          <b>Normen der Lösung</b>
          <VerlinkteNormkette normen={m.normchain} onOpen={onSchema} />
        </div>
      )}
    </div>
  );
}

export default function K1Campus({ onKlausurwechsel }) {
  const [ansicht, setAnsicht] = useState("cockpit");
  const [fallId, setFallId] = useState(null);
  const [suche, setSuche] = useState("");
  const [einheitFilter, setEinheitFilter] = useState("alle");
  const [typFilter, setTypFilter] = useState("alle");
  const [prio, setPrio] = usePrioFilter("stb-k1-ust-prio");
  const [schemaZiel, setSchemaZiel] = useState(null);
  const [navVerlauf, setNavVerlauf] = useState([
    { ansicht: "cockpit", fallId: null, schemaZiel: null, scrollY: 0 },
  ]);
  const [navIndex, setNavIndex] = useState(0);
  const scrollWiederherstellen = useRef(null);
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  const fortschritt = useFortschritt("stb-k1-ust-erledigt", inhaltIds);
  const erledigt = fortschritt.werte;

  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);

  useEffect(() => {
    const schnappschuss = scrollWiederherstellen.current;
    scrollWiederherstellen.current = null;
    if (schnappschuss) return stelleSeitenzustandWiederHer(schnappschuss);
    const timer = window.setTimeout(() => {
      if (ansicht === "schema" && schemaZiel) {
        document.getElementById(schemaZiel)?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [ansicht, fallId, schemaZiel]);

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return k1UstInhalte.filter((m) => {
      if (einheitFilter !== "alle" && m.einheit !== einheitFilter) return false;
      if (typFilter === "fall" && m.area !== "Fall") return false;
      if (typFilter === "modul" && m.area === "Fall") return false;
      if (prio !== "alle" && prioInhalt(m).stufe !== prio) return false;
      if (!q) return true;
      return [
        m.title,
        m.law,
        m.difficulty,
        m.area,
        ...(m.intro || []),
        ...(m.goals || []),
        ...(m.scheme || []),
        ...(m.normchain || []),
        m.example?.facts,
        ...(m.example?.solution || []),
        m.example?.result,
        m.merksatz,
        ...(m.exam || []),
        ...(m.traps || []),
        ...(k1Aufgaben[m.id]?.fragen || []),
        k1Aufgaben[m.id]?.hinweis,
        k1Quellskizzen[m.id]?.titel,
      ].filter(Boolean).join(" ").toLowerCase().includes(q);
    });
  }, [suche, einheitFilter, typFilter, prio]);

  const fall = fallId ? k1UstInhalte.find((m) => m.id === fallId) : null;
  const quote = anteil(erledigt.length, k1UstInhalte.length);

  const ort = () => ({
    ansicht,
    fallId,
    schemaZiel,
    ...erfasseSeitenzustand(),
  });

  const anwenden = (ziel, wiederherstellen = false) => {
    scrollWiederherstellen.current = wiederherstellen ? ziel : null;
    setAnsicht(ziel.ansicht);
    setFallId(ziel.fallId ?? null);
    setSchemaZiel(ziel.schemaZiel ?? null);
  };

  const navigiere = (ziel) => {
    const naechster = {
      ansicht: ziel.ansicht,
      fallId: ziel.fallId ?? null,
      schemaZiel: ziel.schemaZiel ?? null,
      scrollY: 0,
    };
    if (
      naechster.ansicht === ansicht
      && naechster.fallId === fallId
      && naechster.schemaZiel === schemaZiel
    ) return;

    const aktuell = ort();
    setNavVerlauf((alt) => {
      const neu = alt.slice(0, navIndex + 1);
      neu[navIndex] = aktuell;
      neu.push(naechster);
      return neu;
    });
    setNavIndex(navIndex + 1);
    anwenden(naechster);
  };

  const navZurueck = () => {
    if (navIndex <= 0) return;
    const aktuell = ort();
    const ziel = navVerlauf[navIndex - 1];
    setNavVerlauf((alt) => {
      const neu = [...alt];
      neu[navIndex] = aktuell;
      return neu;
    });
    setNavIndex(navIndex - 1);
    anwenden(ziel, true);
  };

  const navVor = () => {
    if (navIndex >= navVerlauf.length - 1) return;
    const aktuell = ort();
    const ziel = navVerlauf[navIndex + 1];
    setNavVerlauf((alt) => {
      const neu = [...alt];
      neu[navIndex] = aktuell;
      return neu;
    });
    setNavIndex(navIndex + 1);
    anwenden(ziel, true);
  };

  useEffect(() => {
    const tastatur = (event) => {
      if (!event.altKey) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navZurueck();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        navVor();
      }
    };
    window.addEventListener("keydown", tastatur);
    return () => window.removeEventListener("keydown", tastatur);
  }, [navIndex, navVerlauf, ansicht, fallId, schemaZiel]);

  const ansichtOeffnen = (ziel) => navigiere({ ansicht: ziel });
  const oeffnen = (id) => navigiere({ ansicht: "module", fallId: id });
  const schemaOeffnen = (ziel = "schema-architektur") => navigiere({ ansicht: "schema", schemaZiel: ziel });

  return (
    <div className="kst-campus">
      <CampusTopbar
        klausur="1"
        marke="1"
        name="Examenscampus Klausur 1"
        untertitel="Verfahrensrecht · andere Steuerarten · Umsatzsteuer"
        aufCockpit={() => ansichtOeffnen("cockpit")}
        navZurueck={navZurueck}
        navVor={navVor}
        zurueckMoeglich={navIndex > 0}
        vorMoeglich={navIndex < navVerlauf.length - 1}
        suche={suche}
        sucheSetzen={(wert) => {
          setSuche(wert);
          if (ansicht !== "module" || fallId !== null) ansichtOeffnen("module");
        }}
        suchePlatzhalter="USt-Fall, Modul, Norm oder Stichwort suchen"
        sucheAria="Umsatzsteuer-Inhalte durchsuchen"
        dunkel={dunkel}
        dunkelUmschalten={() => setDunkel((d) => !d)}
      />

      <KlausurenLeiste aktiv="k1" aufCockpit={() => ansichtOeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />

      <aside className="rail">
        <nav className="rail__nav" aria-label="Klausur-1-Hauptnavigation">
          {ansichten.map(({ id, label, Icon }) => (
            <button
              key={id}
              className="rail__link"
              aria-current={ansicht === id ? "true" : undefined}
              onClick={() => ansichtOeffnen(id)}
            >
              <Icon />
              {label}
            </button>
          ))}
        </nav>
        <div className="rail__box">
          <b>USt-Fortschritt</b>
          <strong>{erledigt.length} / {k1UstInhalte.length}</strong>
          <p>Fälle und Lernmodule als bearbeitet markiert</p>
          {erledigt.length > 0 && (
            <button
              className="rail__box-reset"
              onClick={() => {
                if (window.confirm("Bearbeitungsstand der USt-Inhalte zurücksetzen?")) fortschritt.zuruecksetzen();
              }}
            >
              zurücksetzen
            </button>
          )}
        </div>
      </aside>

      <main className="page">
        {ansicht === "cockpit" && <K1Cockpit quote={quote} erledigt={erledigt} oeffnen={oeffnen} ansichtOeffnen={ansichtOeffnen} schemaOeffnen={schemaOeffnen} />}
        {ansicht === "module" && !fall && (
          <K1Liste
            liste={gefiltert}
            suche={suche}
            einheitFilter={einheitFilter}
            setEinheitFilter={setEinheitFilter}
            typFilter={typFilter}
            setTypFilter={setTypFilter}
            prio={prio}
            setPrio={setPrio}
            erledigt={erledigt}
            umschalten={fortschritt.umschalten}
            oeffnen={oeffnen}
            schemaOeffnen={schemaOeffnen}
          />
        )}
        {ansicht === "module" && fall && (
          <K1Fallseite
            fall={fall}
            erledigt={erledigt}
            umschalten={fortschritt.umschalten}
            zurueck={() => ansichtOeffnen("module")}
            oeffnen={oeffnen}
            schemaOeffnen={schemaOeffnen}
          />
        )}
        {ansicht === "faelle" && <K1Originalfaelle oeffnen={oeffnen} schemaOeffnen={schemaOeffnen} />}
        {ansicht === "klausur" && (
          <Klausurmodus
            module={k1UstInhalte}
            oeffnenModul={oeffnen}
            gebiete={klausurGebiete}
            gebietVon={(m) => `E${m.einheit}`}
            speicherKey="stb-k1-klausurlauf"
            sperrtext="Erst selbst lösen: Steuerbarkeit, Steuerbefreiung, Bemessungsgrundlage, Steuersatz, Steuerschuldner, Entstehung und Vorsteuer. Danach die Musterlösung aufdecken und ehrlich bewerten."
            modulWort="Fall"
            sachverhaltExtra={(fall) => <K1Aufgabenblock daten={k1Aufgaben[fall.id]} />}
          />
        )}
        {ansicht === "schema" && <UstPruefschema />}
        {ansicht === "training" && <K1Training />}
      </main>
    </div>
  );
}

function K1Cockpit({ quote, erledigt, oeffnen, ansichtOeffnen, schemaOeffnen }) {
  const naechstes = k1UstInhalte.find((m) => !erledigt.includes(m.id)) || k1UstInhalte[0];
  const typ = naechstes.area === "Fall" ? "Originalfall" : "Lernmodul";
  return (
    <>
      <div className="cockpit">
        <section className="these kst-these">
          <span className="kicker">Klausur 1 · andere Steuerarten · Umsatzsteuer</span>
          <h2>Umsatzsteuer systematisch: <em>Steuerbarkeit bis Vorsteuer.</em></h2>
          <p>
            Die USt-Einheiten 1–8 sind in Klausur 1 eingeordnet: {k1UstFaelle.length} Originalfälle und {k1UstModule.length} Lernmodule
            mit Normketten, Prüfungsschemata, konkreten Zahlen und vollständigen Lösungswegen.
          </p>
          <div className="these__aktionen">
            <button className="btn" onClick={() => oeffnen(naechstes.id)}>Weiterlernen</button>
            <button className="btn btn--linie" onClick={() => ansichtOeffnen("faelle")}>Originalfälle öffnen</button>
            <button className="btn btn--linie" onClick={() => schemaOeffnen("schema-architektur")}>Prüfschema öffnen</button>
          </div>
        </section>
        <section className="panel fortschritt">
          <div className="ring" style={{ "--p": `${quote}%` }}><b>{quote}%</b></div>
          <h3>Bearbeitungsstand</h3>
          <p>{erledigt.length} von {k1UstInhalte.length} Inhalten abgehakt</p>
        </section>
      </div>

      <section className="abschnitt">
        <span className="kicker">Weiter im USt-Stoff</span>
        <button className="weiter" onClick={() => oeffnen(naechstes.id)}>
          <span className="kicker">{typ} {naechstes.id} · {naechstes.difficulty}</span>
          <PrioBadge prio={prioInhalt(naechstes)} />
          <h3>{naechstes.title}</h3>
          <p>{naechstes.intro[0]}</p>
          <span className="norm">{naechstes.law}</span>
        </button>
        <SchemaVerweise text={naechstes.law} onOpen={schemaOeffnen} />
      </section>

      <section className="abschnitt">
        <div className="kst-abschnitt-kopf">
          <h2>USt-Grundschema der Mitschrift</h2>
          <button className="kst-schema-alle" onClick={() => schemaOeffnen("schema-architektur")}>Gesamtes Prüfschema ↗</button>
        </div>
        <div className="kst-pruefpfad">
          {grundschema.map(([nummer, titel, text, ziel]) => (
            <button className="kst-pruefpfad__stufe" key={nummer} onClick={() => schemaOeffnen(ziel)}>
              <b>{nummer}</b>
              <div><h3>{titel}</h3><p>{text}</p><small>im Prüfschema ↗</small></div>
            </button>
          ))}
        </div>
      </section>

      <PrioCockpit fach="ust" zaehlung={prioZaehlung} />
    </>
  );
}

function K1Liste({ liste, suche, einheitFilter, setEinheitFilter, typFilter, setTypFilter, prio, setPrio, erledigt, umschalten, oeffnen, schemaOeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 1 · Umsatzsteuer</span>
          <h1>{suche ? `Treffer für „${suche}“` : einheitFilter === "alle" ? "USt-Einheiten 1–8" : `USt-Einheit ${einheitFilter}`}</h1>
          <p className="lead">Originalfälle und systematische Lernmodule aller Einheiten sind ausschließlich hier in Klausur 1 eingeordnet.</p>
        </div>
        <span className="zaehler">{liste.length} Inhalte</span>
      </div>

      <div className="filter" aria-label="Nach Einheit filtern">
        <button aria-pressed={einheitFilter === "alle"} onClick={() => setEinheitFilter("alle")}>Alle Einheiten</button>
        {k1EinheitenListe.map((e) => (
          <button key={e} aria-pressed={einheitFilter === e} onClick={() => setEinheitFilter(e)}>Einheit {e}</button>
        ))}
      </div>
      <div className="filter" aria-label="Nach Inhaltstyp filtern">
        <button aria-pressed={typFilter === "alle"} onClick={() => setTypFilter("alle")}>Fälle und Module</button>
        <button aria-pressed={typFilter === "fall"} onClick={() => setTypFilter("fall")}>Nur Originalfälle</button>
        <button aria-pressed={typFilter === "modul"} onClick={() => setTypFilter("modul")}>Nur Lernmodule</button>
      </div>
      <PrioFilter wert={prio} setWert={setPrio} zaehlung={prioZaehlung} />

      <div className="modules">
        {liste.map((m) => {
          const fertig = erledigt.includes(m.id);
          const typ = m.area === "Fall" ? "Fall" : "Lernmodul";
          return (
            <div
              key={m.id}
              className={`modul${fertig ? " modul--fertig" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => oeffnen(m.id)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), oeffnen(m.id))}
            >
              <span
                className="modul__check"
                role="checkbox"
                aria-checked={fertig}
                aria-label="Als bearbeitet markieren"
                tabIndex={0}
                onClick={(e) => { e.stopPropagation(); umschalten(m.id); }}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), e.stopPropagation(), umschalten(m.id))}
              >
                <IconHaken />
              </span>
              <div>
                <div className="modul__kopf">
                  <span>Einheit {m.einheit}</span>
                  <span>{typ} {m.id}</span>
                  <span>{m.difficulty}</span>
                  <span>{m.minutes} Min.</span>
                  <PrioBadge prio={prioInhalt(m)} stopPropagation />
                </div>
                <h3>{m.title}</h3>
                <div className="modul__norm">{m.law}</div>
                <SchemaVerweise text={m.law} onOpen={schemaOeffnen} compact stopPropagation />
              </div>
              <span className="modul__an">öffnen →</span>
            </div>
          );
        })}
        {liste.length === 0 && <p className="panel">Keine Treffer. Eine andere Schreibweise oder Norm versuchen.</p>}
      </div>
    </>
  );
}

function Tz({ nummer, label, titel, art, children }) {
  return (
    <section className={`tz${art ? ` tz--${art}` : ""}`}>
      <div className="tz__no"><b>Tz. {nummer}</b>{label}</div>
      <div className="tz__body">{titel && <h2 className="tz__titel">{titel}</h2>}{children}</div>
    </section>
  );
}

function K1Fallseite({ fall: m, erledigt, umschalten, zurueck, oeffnen, schemaOeffnen }) {
  const fertig = erledigt.includes(m.id);
  const index = k1UstInhalte.findIndex((x) => x.id === m.id);
  const vorher = k1UstInhalte[index - 1];
  const nachher = k1UstInhalte[index + 1];
  const istFall = m.area === "Fall";
  const typ = istFall ? "Originalfall" : "Lernmodul";
  const kurzTyp = istFall ? "Fall" : "Modul";
  let tz = 0;
  const n = () => ++tz;

  return (
    <article className="lesson">
      <button className="zurueck" onClick={zurueck}>← Zurück zur USt-Übersicht</button>
      <header className="lesson__kopf">
        <div>
          <span className="kicker">Klausur 1 · Umsatzsteuer · {typ} {m.id}</span>
          <h1>{m.title}</h1>
          <div className="tags">
            <PrioBadge prio={prioInhalt(m)} mitThema />
            <span className="tag tag--fach">{m.difficulty}</span>
            <span className="tag">{m.minutes} Minuten</span>
            <span className="tag">{m.law}</span>
          </div>
          <SchemaVerweise text={m.law} onOpen={schemaOeffnen} />
        </div>
        <button className="gemeistert" aria-pressed={fertig} onClick={() => umschalten(m.id)}>
          {fertig ? "✓ bearbeitet" : "Als bearbeitet markieren"}
        </button>
      </header>

      <Tz nummer={n()} label="Einordnung" titel="Worum es geht">
        {(m.intro || []).map((p, i) => <VerlinkterText key={i} as="p" text={p} onOpen={schemaOeffnen} compact />)}
      </Tz>

      <Tz nummer={n()} label="Lernziele" titel="Das können Sie danach">
        <ul className="liste liste--haken">{(m.goals || []).map((g, i) => <li key={i}><VerlinkterText text={g} onOpen={schemaOeffnen} compact /></li>)}</ul>
      </Tz>

      <Tz nummer={n()} label="Schema" titel="Prüfungsreihenfolge" art="ansatz">
        <ol className="schritte">{(m.scheme || []).map((s, i) => <li key={i}><VerlinkterText text={s} onOpen={schemaOeffnen} compact /></li>)}</ol>
        {m.diagram && <Schaubild id={m.diagram} />}
      </Tz>

      <Tz nummer={n()} label="Normen" titel="Normenkette für die Klausur">
        <VerlinkteNormkette normen={m.normchain || []} onOpen={schemaOeffnen} />
      </Tz>

      {m.example && (
        <Tz nummer={n()} label={istFall ? "Originalfall" : "Vertiefung"} titel={m.example.title} art="bewertung">
          <div className="fall">
            <div className="fall__block fall__sachverhalt">
              <b>{istFall ? "Sachverhalt" : "Ausgangspunkt"}</b>
              <VerlinkterText as="p" text={m.example.facts} onOpen={schemaOeffnen} compact />
              {istFall && <K1Aufgabenblock daten={k1Aufgaben[m.id]} law={m.law} onSchema={schemaOeffnen} />}
            </div>
            <Loesungsblock m={m} onSchema={schemaOeffnen} />
            <div className="fall__block fall__ergebnis"><b>Ergebnis</b><VerlinkterText as="p" text={m.example.result} onOpen={schemaOeffnen} compact /></div>
          </div>
        </Tz>
      )}

      <Tz nummer={n()} label="Sichern" titel="Merksatz, Prüfungsrelevanz und Fallen">
        <Notiz><VerlinkterText as="p" text={m.merksatz} onOpen={schemaOeffnen} compact /></Notiz>
        {m.exam?.length > 0 && <Notiz art="exkurs" titel="Prüfungsrelevanz"><ul className="liste">{m.exam.map((e, i) => <li key={i}><VerlinkterText text={e} onOpen={schemaOeffnen} compact /></li>)}</ul></Notiz>}
        {m.traps?.length > 0 && <Notiz art="falle"><ul>{m.traps.map((t, i) => <li key={i}><VerlinkterText text={t} onOpen={schemaOeffnen} compact /></li>)}</ul></Notiz>}
      </Tz>

      <Tz nummer={n()} label="Quellen" titel="Fundstellen und Rechtsstand">
        <ul className="liste">
          <li>USt-Kursmitschrift Einheit {m.einheit}{istFall ? " · Originalfall mit Quellenlösung" : " · systematisches Lernmodul"}</li>
          <li>Maßgebliche Normen: {m.law}</li>
        </ul>
        <p className="rechtsstand">Redaktionsstand: {REDAKTIONSSTAND}. Kleinunternehmer-Reform und E-Rechnungspflicht 2025 sind im Prüfschema eingearbeitet.</p>
      </Tz>

      <nav className="blaettern">
        {vorher ? <button onClick={() => oeffnen(vorher.id)}><small>← {vorher.area === "Fall" ? "Fall" : "Modul"} {vorher.id}</small><strong>{vorher.title}</strong></button> : <span />}
        {nachher ? <button onClick={() => oeffnen(nachher.id)}><small>{nachher.area === "Fall" ? "Fall" : "Modul"} {nachher.id} →</small><strong>{nachher.title}</strong></button> : <span />}
      </nav>
    </article>
  );
}

function K1Training() {
  const [index, setIndex] = useState(0);
  const [antwort, setAntwort] = useState(null);
  const [punkte, setPunkte] = useState(0);
  const [karte, setKarte] = useState(0);
  const [gedreht, setGedreht] = useState(false);
  const frage = k1Quizfragen[index];

  const waehlen = (i) => {
    if (antwort !== null) return;
    setAntwort(i);
    if (i === frage.richtig) setPunkte((p) => p + 1);
  };
  const weiter = () => {
    setAntwort(null);
    setIndex((i) => (i + 1) % k1Quizfragen.length);
  };

  return (
    <>
      <div className="pagehead">
        <div><span className="kicker">Training</span><h1>Quiz und Karteikarten</h1><p className="lead">Die Fragen prüfen ausschließlich Stoff der USt-Einheiten 1–8; Rechtsstand wie im Prüfschema.</p></div>
        <span className="zaehler">{punkte} richtige Antworten</span>
      </div>

      <section className="panel kst-quiz">
        <div className="panel__head"><span className="kicker">Frage {index + 1} / {k1Quizfragen.length}</span></div>
        <h2>{frage.frage}</h2>
        <div className="kst-optionen">
          {frage.optionen.map((o, i) => {
            const status = antwort === null ? "" : i === frage.richtig ? " richtig" : i === antwort ? " falsch" : "";
            return <button className={`kst-option${status}`} key={o} onClick={() => waehlen(i)}>{o}</button>;
          })}
        </div>
        {antwort !== null && (
          <div className="kst-erklaerung"><p>{frage.erklaerung}</p><button className="btn btn--klein" onClick={weiter}>Nächste Frage</button></div>
        )}
      </section>

      <section className="abschnitt">
        <h2>Karteikarten</h2>
        <button className={`kst-karte${gedreht ? " kst-karte--gedreht" : ""}`} onClick={() => setGedreht((g) => !g)}>
          <span className="kicker">Karte {karte + 1} / {k1Karteikarten.length}</span>
          <strong>{gedreht ? k1Karteikarten[karte].hinten : k1Karteikarten[karte].vorn}</strong>
          <small>{gedreht ? "nochmals klicken für Vorderseite" : "klicken zum Umdrehen"}</small>
        </button>
        <div className="kst-kartensteuerung">
          <button className="btn btn--linie" onClick={() => { setKarte((k) => (k - 1 + k1Karteikarten.length) % k1Karteikarten.length); setGedreht(false); }}>← vorherige</button>
          <button className="btn" onClick={() => { setKarte((k) => (k + 1) % k1Karteikarten.length); setGedreht(false); }}>nächste →</button>
        </div>
      </section>
    </>
  );
}

function K1Originalfaelle({ oeffnen, schemaOeffnen }) {
  const [kategorie, setKategorie] = useState("alle");
  const faelle = kategorie === "alle"
    ? k1UstFaelle
    : k1UstFaelle.filter((m) => k1UstFallKategorie(m).id === kategorie);
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 1 · Fallsammlung</span>
          <h1>Originalfälle der USt-Mitschriften</h1>
          <p className="lead">Die Originalfälle sind nach umsatzsteuerlichen Prüfungsthemen kategorisiert. Sachverhalt, Aufgabenstellung, vollständige Lösung, Lösungsskizzen und zitierte Normen sind direkt in jeder Fallkarte aufklappbar.</p>
        </div>
        <span className="zaehler">{faelle.length} Fälle</span>
      </div>
      <div className="filter" aria-label="Fälle nach Kategorie filtern">
        {k1UstFallKategorien.map(({ id, label }) => (
          <button key={id} aria-pressed={kategorie === id} onClick={() => setKategorie(id)}>{label}</button>
        ))}
      </div>
      <div className="kst-faelle">
        {faelle.map((m) => (
          <article className="panel kst-fallkarte" key={m.id}>
            <div className="panel__head">
              <div><span className="kicker">Fall {m.id} · {k1UstFallKategorie(m).label} · {m.minutes} Min.</span> <PrioBadge prio={prioInhalt(m)} /><h2>{m.title}</h2></div>
              <button className="btn btn--klein btn--linie" onClick={() => oeffnen(m.id)}>Fall öffnen</button>
            </div>
            <p className="kst-fallquelle">{m.law}</p>
            <SchemaVerweise text={m.law} onOpen={schemaOeffnen} compact />
            <div className="kst-sachverhalt">
              <b>Sachverhalt</b>
              <VerlinkterText as="p" text={m.example?.facts} onOpen={schemaOeffnen} compact />
              <K1Aufgabenblock daten={k1Aufgaben[m.id]} law={m.law} onSchema={schemaOeffnen} />
            </div>
            <details>
              <summary>Lösung anzeigen</summary>
              <div className="fall">
                <Loesungsblock m={m} onSchema={schemaOeffnen} />
                <div className="fall__block fall__ergebnis"><b>Ergebnis</b><VerlinkterText as="p" text={m.example?.result} onOpen={schemaOeffnen} compact /></div>
              </div>
            </details>
          </article>
        ))}
      </div>
    </>
  );
}
