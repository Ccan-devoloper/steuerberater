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
import HausaufgabenBloecke from "./HausaufgabenBloecke";
import KurzskriptBloecke from "./KurzskriptBloecke";
import { ustBeispielsammlung, ustBeispielsammlungQuelle } from "../data/k1-ust-beispielsammlung-schroeders.js";
import { ustSkriptMoecker, ustSkriptMoeckerQuelle } from "../data/k1-ust-skript-moecker.js";
import { estKlausuren, estKlausurenQuelle } from "../data/est-klausuren.js";
import { ustOriginalklausuren, ustOriginalklausurenQuelle } from "../data/k1-ust-originalklausuren.js";
import { k1Pruefungsklausuren, k1PruefungsklausurenQuelle } from "../data/k1-pruefungsklausuren.js";
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
  { id: "beispielsammlung", label: "Beispielsammlungen (Schröders)", Icon: IconFaelle },
  { id: "skriptMoecker", label: "USt-Skript (Moecker)", Icon: IconModule },
  { id: "uebungsklausur", label: "Übungsklausur (USt)", Icon: IconTraining },
  { id: "originalklausuren", label: "Originalklausuren (Prüfung)", Icon: IconKlausur },
  { id: "pruefungsklausuren", label: "Prüfungsklausuren im Original", Icon: IconKlausur },
  { id: "klausur", label: "Klausurmodus", Icon: IconKlausur },
  { id: "schema", label: "Prüfschema", Icon: IconSchema },
  { id: "training", label: "Training", Icon: IconTraining },
];

/* Die Teilklausur Umsatzsteuer der Übungsklausur AO/USt liegt im gemeinsamen
   Klausurbestand; hier werden nur ihre Sachverhalte gezeigt. */
const UST_UEBUNGSKLAUSUR = estKlausuren.filter((eintrag) => eintrag.klausur === "ust-1" || eintrag.fach === "ust");

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
        {ansicht === "uebungsklausur" && (
          <HausaufgabenBloecke
            kicker="Klausur 1 · Umsatzsteuer · Übungsklausur"
            titel="USt-Übungsklausuren (Schröders)"
            lead="Drei Umsatzsteuer-Teilklausuren: die Teilklausur der Übungsklausur AO/USt (Jacobs/Schröders, Korrektor Schulz, Rechtslage 2026, 3 Stunden, 50 Punkte) mit Marco Murrer als Bauträger, Bauunternehmer und Händler, der Franz Ferstl GmbH im Reihengeschäft und der Virus-GmbH mit innergemeinschaftlichem Verbringen; der Umsatzsteuerteil der Klausur AO/USt/ErbSt/BewR 1 (35 Punkte) mit dem Tischler Hans Glück: Maschinenerwerb aus Warschau mit doppeltem Erwerbsort, Möbelrestauration für die Stadt Zürich, Messeverkauf in Lüttich und Designer-Lampen aus Südafrika über Belgien; und der Umsatzsteuerteil der Klausur AO/USt/ErbSt/BewR 2 (40 Punkte) mit dem Campingartikelhändler Ferdy Frosch: Optionsverbot nach § 9 Abs. 2 UStG trotz Altgebäude und Vorsteueraufteilung, zwanzig Reihengeschäfte mit Fernverkauf nach Belgien, Mindestbemessungsgrundlage bei der Zeltüberlassung an die eigene GmbH und die Bewirtung samt Tombolapreisen auf der Verkaufsausstellung. Sachverhalt, Aufgabenstellung und Musterlösung stehen im Wortlaut."
            quelle={estKlausurenQuelle}
            hausaufgaben={UST_UEBUNGSKLAUSUR}
            gruppeVon={(eintrag) => eintrag.klausur}
            gruppeLabel={(eintrag) => eintrag.klausurLabel}
            gruppeAria="Klausuren"
            karteKicker={(eintrag) => `${eintrag.teil} · ${eintrag.punkteLaut ?? `${eintrag.punkte} Punkte`} · ${eintrag.rechtsstand}`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Sachverhalte"
            einheitEinzahl="Sachverhalt"
          />
        )}
        {ansicht === "skriptMoecker" && (
          <KurzskriptBloecke
            kicker="Klausur 1 · Umsatzsteuer · Lehrgangsunterlage"
            titel="USt-Skript (Moecker)"
            lead="Das Umsatzsteuer-Skript von Udo Moecker in 13 Blöcken mit Arbeitspapieren im Wortlaut – **in Arbeit**; Block 1 steht vollständig mit Vorsteuerabzug und den Arbeitspapieren zur Klausurtechnik, Block 2 (Leistungsaustausch) vollständig mit Schadenersatz, Vertragsstrafen, Versicherungsleistungen und den Arbeitspapieren A 1 bis A 14, Block 3 (Unternehmer / Unternehmen) vollständig mit Organschaft und den Arbeitspapieren A 1 bis A 27, Block 4 (Lieferungen) vollständig mit Reihengeschäft und den Arbeitspapieren A 1 bis A 27, Block 5 (sonstige Leistungen) vollständig mit dem Leistungsort im B2B- und B2C-Bereich, dem Reverse-Charge-Verfahren in der EU und den Arbeitspapieren A 1 bis A 52, Block 6 (Werkverträge, § 13b UStG, GiG, Gutscheine) mit Werklieferung und Werkleistung und der Steuerschuldumkehr nach § 13b UStG vollständig mit allen Tatbeständen und Ausnahmen, Geschäftsveräußerung im Ganzen und Gutscheinen samt Arbeitspapieren, Block 7 (innergemeinschaftlicher Erwerb) begonnen mit Systematik, Grundtatbestand, Warenbewegung, Erwerbsort mit Pflicht- und Straferwerb und dem erweiterten Erwerberkreis samt Erwerbsschwelle und Option, Steuerbefreiungen, Steuerentstehung, Vorsteuerabzug, territorialen Begriffen und dem Brexit vollständig samt Arbeitspapieren A 1 bis A 12, Block 8 Teil I (steuerfreie Umsätze mit Vorsteuerabzug) vollständig mit den Ausfuhrlieferungen, dem ausländischen Abnehmer, den Freihafenfällen, dem Reihengeschäft, dem nichtkommerziellen Reiseverkehr, der Lohnveredelung und der innergemeinschaftlichen Lieferung samt Gelangensnachweis und Vertrauensschutz sowie dem innergemeinschaftlichen Reihen- und Dreiecksgeschäft bis zu den Lieferungen vor der Einfuhr samt Arbeitspapieren A 1 bis A 50, Block 8 Teil II (steuerfreie Umsätze ohne Vorsteuerabzug, Option nach § 9 UStG) vollständig mit Versicherungs-, Heilbehandlungs- und Bildungsleistungen, Finanz- und Grundstücksumsätzen, der Vermietung und Verpachtung und der Option samt Optionseinschränkung nach § 9 Abs. 2 und § 27 Abs. 2 UStG samt Arbeitspapieren A 1 bis A 38, Block 9 (besondere Umsätze im Binnenmarkt) vollständig mit Abhollieferung, Fernverkauf, One-Stop-Shops, elektronischen Marktplätzen, innergemeinschaftlichem Verbringen, Konsignationslager und neuen Fahrzeugen samt Arbeitspapieren A 1 bis A 33, Block 10 (Bemessungsgrundlage und ihre Änderung, Reiseleistungen, Differenzbesteuerung, Kleinunternehmer, Steuersatz) vollständig mit Tausch, Mindestbemessungsgrundlage, Margenbesteuerung, Kleinunternehmerregelung ab 2025, ermäßigtem Steuersatz, Nullsteuersatz für PV-Anlagen, § 17 UStG und § 24 UStG samt Arbeitspapieren A 1 bis A 36. Die Blöcke folgen dem Prüfungsaufbau: vom Steuergegenstand über Leistungsaustausch, Unternehmer und Leistungsort bis zu Steuerbefreiungen, Bemessungsgrundlage, Vorsteuerabzug und Verfahren; jeder Block führt seinen eigenen Stand (07/2025 bis 06/2026). Block 1 legt das Gerüst: Die **Ausgangsumsatzsteuer** wird über die §§ 1, 4, 10, 12 und 13 UStG ermittelt, und ein Umsatz ist nur **steuerbar**, wenn er sämtliche Tatbestandsmerkmale einer der drei Nummern des § 1 Abs. 1 UStG erfüllt – entgeltliche Leistung (mit den unentgeltlichen Wertabgaben als Ergänzungstatbestand), Einfuhr oder innergemeinschaftlicher Erwerb. Schaubilder der Quelle sind als Tabellen wiedergegeben und als solche ausgewiesen."
            quelle={ustSkriptMoeckerQuelle}
            kapitel={ustSkriptMoecker}
            karteKicker={(k) => `${k.teil.split(" – ")[0]} · ${k.abschnittNr}`}
            gruppeVon={(k) => k.teil}
            gruppeLabel={(k) => k.teil}
            gruppeAria="Blöcke"
            gruppeAlle="Alle Blöcke"
            suchePlatzhalter="Norm, Stichwort oder Abschnitt"
          />
        )}
        {ansicht === "beispielsammlung" && (
          <KurzskriptBloecke
            kicker="Klausur 1 · Umsatzsteuer · Beispielsammlungen"
            titel="Beispielsammlungen USt (Schröders)"
            lead="Die sieben Beispielsammlungen zu den Unterrichtstagen 1 bis 7 im Wortlaut, dazu die Übersicht „Umsatzbesteuerung bei PKW“. Sie folgen der Reihenfolge, in der die Umsatzsteuer geprüft wird: Unternehmereigenschaft, Leistungsart und Leistungsort (Tag 1), Steuerbefreiungen, Bemessungsgrundlage und Vorsteuerabzug (Tag 2), Steuerschuldnerschaft und Reihengeschäft (Tag 3), innergemeinschaftlicher Warenverkehr (Tag 4), Fernverkauf, Kommission und Änderung der Bemessungsgrundlage (Tag 5), unentgeltliche Wertabgaben und Vorsteuerberichtigung (Tag 6), Reiseleistungen bis Kleinunternehmer (Tag 7). Die Beispiele variieren oft denselben Sachverhalt in zwei oder drei Abwandlungen, die jeweils nur ein Tatbestandsmerkmal verschieben – die Heizkörper-Reihe an Tag 3 ist dafür das beste Muster. **Die Quellen enthalten keine Lösungen**; auf jeden Sachverhalt folgt nur die Frage. Es wird hier keine erfunden. Jedes Kapitel sagt das offen und verweist auf die Stellen im Campus, an denen dieselbe Rechtsfrage vollständig durchgeprüft ist – das Kurzskript (Meurer), die Originalfälle der Einheiten 2 bis 8 und die Übungsklausur."
            quelle={ustBeispielsammlungQuelle}
            kapitel={ustBeispielsammlung}
            karteKicker={(k) => k.tag}
            gruppeVon={(k) => k.tag}
            gruppeLabel={(k) => k.tag}
            gruppeAria="Unterrichtstage"
            gruppeAlle="Alle Tage"
            suchePlatzhalter="Norm, Beispiel oder Stichwort"
          />
        )}
        {ansicht === "pruefungsklausuren" && (
          <HausaufgabenBloecke
            kicker="Klausur 1 · Umsatzsteuer · amtliche Prüfungsaufgaben"
            titel="Prüfungsklausuren im Original – ohne Musterlösung"
            lead="Der Umsatzsteuerteil des dritten Prüfungstages im amtlichen Wortlaut – kein fortgeschriebener Rechtsstand, keine Bearbeitung, die Jahreszahlen des Originaljahrgangs. Eingepflegt sind die Prüfungen **2021/2022** (Besteuerungszeiträume 2020 und 2021, ohne Punkteangabe in der Quelle) und **2022/2023** (Besteuerungszeitraum 2022, 35 von 100 Wertungspunkten). **Zu dieser Aufgabe enthält die Quelle keine Lösung**, und es wird hier ausdrücklich keine erfunden; der Eintrag sagt das offen, hält fest, was die Aufgabenstellung selbst vorgibt, und verweist auf die Stellen im Campus, an denen dieselben Rechtsfragen mit vollständiger Musterlösung stehen. Drei Unternehmer, deren Umsätze sich gegenseitig bedingen: Ein Dienstwagen wird im Oktober 2020 gekauft und erst im Januar 2021 übergeben. Eine Weihnachtsfeier für 32 Arbeitnehmer bringt drei Rechnungen mit drei verschiedenen Problemen – eine ordentliche Gastronomierechnung, ein Musikhonorar ganz ohne Rechnung und einen österreichischen Busunternehmer. Ein Gebäude mit vier Etagen zu je 200 m² wird schlüsselfertig errichtet, mit drei Abschlagszahlungen über zwei Jahre und Mietern, die erst nach und nach gefunden werden: Drogeriemarkt, Orthopäde, Versicherungsmakler, Steuerberater und zwei Privatpersonen – die Vorverträge datieren teils vor, teils nach den einzelnen Abschlägen. Und schließlich wird aus einem Lagerplatz ein Baugebiet: fünf Einfamilienhäuser, ein Turmdrehkran mit Totalschaden auf der Rückfahrt, italienische Dachziegel über zwei Stationen, ein Dachdecker als Subunternehmer – und ein fünftes Haus, das die Tochter zur Hochzeit bekommt. Der Jahrgang 2022/2023 (Inge Irlbacher) dreht sich um eine Kunst- und Antiquitätenhändlerin, die zur Differenzbesteuerung nach § 25a UStG optiert hat – und jeder der vier Sachverhalte prüft, ob diese Option hier überhaupt trägt. Ein Gemälde wird in Salzburg von einer Privatperson gekauft, in Düsseldorf über ein Auktionshaus im eigenen Namen der Einlieferin versteigert und vom niederländischen Erwerber übernommen. Eine Meißner Figurengruppe wird im eigenen Namen, aber für fremde Rechnung an einen österreichischen Rechtsanwalt verkauft, wobei die Abrechnung gegenüber der Auftraggeberin einen Umsatzsteuerausweis enthält, der rechnerisch aufgeht. Vier Gemälde eines Künstlers – zwei davon 2018 gekauft, eines aus dessen Wiener Atelier innergemeinschaftlich geliefert – gehen an Käufer in Berlin, Köln, Mailand und Zürich; der Züricher bekommt sein Bild von der Händlerin persönlich im Weihnachtsurlaub nach Davos gebracht. Und ein BMW wird zu 60 % im Kunsthandel, zu 10 % bei der steuerfreien Wohnraumvermietung und zu 30 % privat gefahren. Die Quelle nennt hier selbst eine „grobe Punkteverteilung“: 9, 10, 11 und 5 Punkte."
            quelle={k1PruefungsklausurenQuelle}
            hausaufgaben={k1Pruefungsklausuren.filter((e) => e.fach === "ust")}
            gruppeVon={(eintrag) => eintrag.jahrgang}
            gruppeLabel={(eintrag) => `Prüfung ${eintrag.jahrgang}`}
            gruppeAria="Prüfungsjahrgänge"
            karteKicker={(eintrag) => `Prüfung ${eintrag.jahrgang} · Teil ${eintrag.teil}`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Aufgabenteile"
            einheitEinzahl="Aufgabenteil"
          />
        )}
        {ansicht === "originalklausuren" && (
          <HausaufgabenBloecke
            kicker="Klausur 1 · Umsatzsteuer · Originalklausuren"
            titel="Originalklausuren der Steuerberaterprüfung (USt)"
            lead="Die Original-Prüfungsklausuren des Umsatzsteuerteils der Steuerberaterprüfung mit den Lösungen des Lehrgangs („Umsatzsteuer Original Prüfungsklausuren 2011 – 2015 mit Lösungen“, Rechtsstand 2026). Anders als die Klausuren des Verfahrensrechts sind diese ausdrücklich auf den Rechtsstand 2026 fortgeschrieben – Besteuerungszeitraum ist das Jahr 2026, die Jahreszahl im Titel bezeichnet den Prüfungsjahrgang. Eingepflegt sind alle fünf Klausuren des Bandes. Die Klausur „Trachten Ferstl“ (Prüfung 2011) hängt mit ihrer halben Lösung an einer Organschaft auf Zeit hängt: Sie entsteht mit der Einbringung des Einzelunternehmens zum 1.1.2026 und endet sieben Monate später mit der Anteilsübertragung – bis dahin sind Miete und Vorsteuerabzug dem Organträger zuzuordnen, und die in den Innenumsätzen ausgewiesene Steuer löst kein § 14c UStG aus. Dazu ein vierstöckiges Gebäude mit drei verschiedenen Vermietungsarten und einer Vorsteuerberichtigung nach Flächenschlüssel (75 % gegen 60,42 %, Berichtigungsbetrag 27,70 €), die Firmenwagenüberlassung als tauschähnlicher Umsatz auf Basis der Gesamtausgaben, zwei Preisausschreiben-Gewinne mit entgegengesetztem Ergebnis – die Lederhose steuerbar über § 3 Abs. 1b UStG, das Gourmet-Menü mangels Auffangtatbestand nicht –, eine Segelyacht, die als neues Fahrzeug beide Richtungen durchläuft (§ 1b und § 2a UStG, Vorsteuerabzug nach § 15 Abs. 4a UStG auf 9.500 € begrenzt), und ein Reihengeschäft Innsbruck–Amsterdam mit doppeltem Erwerbsort nach § 3d Satz 2 UStG. Dazu die Klausur „Eheleute Taff“ (Prüfung 2012), die um einen einzigen Tag gebaut ist: Ein Verkauf über 2.000 € am 1. Dezember 2025 hebt den Gesamtumsatz von 24.500 € auf 26.500 € und sprengt die Kleinunternehmergrenze – bereits dieser Umsatz ist steuerpflichtig. Von da an ändert sich alles gleichzeitig, und zwar bei beiden Eheleuten: Die Vermietung der Ehefrau an den Ehemann kippt von steuerfrei mit § 14c-Schuld in steuerpflichtig durch Option, aus einer nicht abziehbaren Vorsteuer wird ein Berichtigungsobjekt, und der Pkw löst Berichtigungen aus, die ein Totalschaden am 31.12.2026 rückwirkend verändert – er verkürzt den Berichtigungszeitraum von 48 auf 17 Monate und zieht neben der Nachberichtigung auch eine Nachversteuerung der Privatnutzung nach sich. Die Klausur prüft § 15a UStG fünfmal mit vier verschiedenen Ergebnissen; dreimal entscheidet die Bagatellgrenze des § 44 UStDV. Die Klausur „Terra GmbH“ (Prüfung 2013) ist dagegen um Dreiergruppen gebaut: drei Mieter mit drei verschiedenen Optionsergebnissen, ein Parkettkauf, der zu drei innergemeinschaftlichen Erwerben an drei Orten führt, und drei Preise eines Preisausschreibens, die auf drei verschiedenen Wegen zum selben Ergebnis führen. Ihr Kern ist das Ausscheiden einer Gesellschafterin gegen ein Grundstück und Bargeld – für sie nicht steuerbar, für die GmbH eine Geschäftsveräußerung im Ganzen; die Erwerberin führt nach § 15a Abs. 10 UStG den Berichtigungszeitraum fort, sodass ihre eigene Nutzungsänderung auf einen Vorsteuerabzug durchschlägt, den Jahre zuvor die GmbH vorgenommen hatte. Die Klausur „Anton Asam“ (Prüfung 2014) dreht dieselbe Vorschrift um: Dort zerfällt ein einziger Gebäudekauf in zwei Hälften – für die beiden fortgeführten Mietverhältnisse eine Geschäftsveräußerung im Ganzen, für das selbst genutzte Erdgeschoss und die eigene Wohnung eine steuerpflichtige Lieferung mit Steuerschuldnerschaft des Erwerbers (190.000 €, davon 95.000 € abziehbar). Entscheidend ist die Absicht im Zeitpunkt des Kaufs, nicht die vorübergehende Weitervermietung. Dazu die Differenzbesteuerung in zwei Schwierigkeitsgraden – einmal beim schlichten Weiterverkauf, einmal im Kommissionsgeschäft, wo der Einkaufspreis erst aus Provision und Spesen zu konstruieren ist –, eine Bewirtung ohne Wertabgabe bei erhaltenem Vorsteuerabzug, eine Verlosung mit Wertabgabe zum ermäßigten Satz und eine steuerfreie Lohnveredelung für einen Schweizer Auftraggeber. Die Klausur „Georg Gründlich“ (Prüfung 2015) schließlich prüft § 13b UStG sechsmal an derselben Baustelle – und kommt sechsmal zu einem anderen Ergebnis: Nr. 1 beim österreichischen Architekten, Nr. 4 beim inländischen Erdbauer, gar nicht beim Innsbrucker Fensterhersteller, der ohne Einbau liefert – statt § 13b UStG ein innergemeinschaftlicher Erwerb über 15.200 €, Abs. 1 bei der österreichischen Spedition, Nr. 1 vor Nr. 4 beim tschechischen Monteur – und wieder gar nicht beim inländischen Gebäudereiniger, weil Gründlich selbst keine Gebäudereinigungsleistungen erbringt. Dazu die Anzahlungsbesteuerung über drei Voranmeldungszeiträume, drei ineinandergreifende Berichtigungen nach § 15a UStG, die bis 2031 laufen, ein Motorrad als vierter Fahrzeugfall der Reihe (§ 1b UStG beim Erwerb, § 2a UStG beim Verkauf – noch „neu“, weil zwischen Erstinbetriebnahme und Lieferung keine sechs Monate liegen) und zwei Geschenke mit gegenläufiger Vorsteuerfolge. Jede Zahl ist unabhängig nachgerechnet."
            quelle={ustOriginalklausurenQuelle}
            hausaufgaben={ustOriginalklausuren}
            gruppeVon={(eintrag) => eintrag.block}
            gruppeLabel={(eintrag) => eintrag.blockLabel}
            gruppeAria="Prüfungsjahrgänge"
            karteKicker={(eintrag) => `Prüfung ${eintrag.jahrgang} · ${eintrag.rechtsstand}`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Originalklausuren"
            einheitEinzahl="Originalklausur"
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
