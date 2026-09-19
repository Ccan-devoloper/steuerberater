/* Die Register müssen vor allen Datenimporten laufen, weil sie die Einheiten
   2, 5, 6 und 7 in die gemeinsamen KSt-Arrays einspeisen. */
import "../data/kst-einheit-2-register.js";
import "../data/kst-einheit-5-register.js";
import "../data/kst-einheit-6-register.js";
import "../data/kst-einheit-7-register.js";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { kstBereiche, kstBereichName, kstModule, kstQuellen, kstSchemata } from "../data/kst-module";
import { kstFaelle } from "../data/kst-faelle";
import { kstKurzskript, kstKurzskriptQuelle } from "../data/kst-kurzskript.js";
import { kstUebungsfaelle, kstUebungsfaelleQuelle } from "../data/kst-uebungsfaelle.js";
import { kstSchemataNoethen, kstSchemataNoethenQuelle } from "../data/kst-schemata-noethen.js";
import { kstOriginalklausuren, kstOriginalklausurenQuelle } from "../data/k2-kst-originalklausuren.js";
import { k2Pruefungsklausuren, k2PruefungsklausurenQuelle } from "../data/k2-pruefungsklausuren.js";
import { estKlausuren, estKlausurenQuelle } from "../data/est-klausuren.js";
import { kstKarteikarten, kstQuizfragen } from "../data/kst-lernstoff";
import { REDAKTIONSSTAND } from "../data/redaktion";
import { Normkette, Notiz } from "./Bausteine";
import { laden, sichern, useFortschritt, anteil } from "../lib/fortschritt";
import { erfasseSeitenzustand, stelleSeitenzustandWiederHer } from "../lib/campus-navigation";
import {
  IconCockpit, IconModule, IconSchema, IconRegister, IconTraining,
  IconFaelle, IconHaken,
} from "./Icons";
import HausaufgabenBloecke from "./HausaufgabenBloecke";
import KurzskriptBloecke from "./KurzskriptBloecke";
import { kstTeil1, kstTeil1Quelle } from "../data/k2-kst-teil1-hamacher.js";
import { kstTeil2, kstTeil2Quelle } from "../data/k2-kst-teil2-hamacher.js";
import { kstTeil3, kstTeil3Quelle } from "../data/k2-kst-teil3-hamacher.js";
import { kstTeil4, kstTeil4Quelle } from "../data/k2-kst-teil4-hamacher.js";
import { kstTeil5, kstTeil5Quelle } from "../data/k2-kst-teil5-hamacher.js";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K2Fachleiste from "./K2Fachleiste";
import KstHausaufgaben from "./KstHausaufgaben";
import "./kst.css";
import { PrioBadge, PrioFilter, PrioCockpit, prioZaehlen, usePrioFilter, prioritaetFuer } from "./Prioritaet";

/* Examenspriorität je KSt-Modul nach der Beck-Auswertung Tag 2 (2013–2024). */
const prioModul = (m) => prioritaetFuer("kst", m, { typ: "modul", id: m.id });
const prioZaehlung = prioZaehlen(kstModule, prioModul);

/* Reiner Bilanzstoff gehört ausschließlich in Klausur 3 und erscheint daher
   auch nicht als bloßer Quellenhinweis im KSt-Campus. */
const kstQuellenOhneK3 = kstQuellen.filter((quelle) => quelle.title !== "Notiz 30.07.2026");

/* Die Übungsklausur Körperschaftsteuer liegt im gemeinsamen Klausurbestand; hier
   werden nur ihre vier Sachverhalte gezeigt. */
const KST_UEBUNGSKLAUSUR = estKlausuren.filter((eintrag) => eintrag.klausur === "kst-1");
kstQuellen.splice(0, kstQuellen.length, ...kstQuellenOhneK3);

const modulIds = new Set(kstModule.map((m) => m.id));

const ansichten = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "module", label: "Lernmodule", Icon: IconModule },
  { id: "kurzskript", label: "Kurz-Skript (Breier)", Icon: IconRegister },
  { id: "teil1", label: "Teil I (Hamacher)", Icon: IconRegister },
  { id: "teil2", label: "Teil II (§ 8b KStG)", Icon: IconRegister },
  { id: "teil3", label: "Teil III (§§ 27, 28 KStG)", Icon: IconRegister },
  { id: "teil4", label: "Teil IV (vGA)", Icon: IconRegister },
  { id: "teil5", label: "Teil V (§§ 8c, 8d, Zinsschranke)", Icon: IconRegister },
  { id: "faelle", label: "Fälle", Icon: IconFaelle },
  { id: "uebungsfaelle", label: "Übungsfälle (Nöthen)", Icon: IconFaelle },
  { id: "schema", label: "Prüfungsschemata", Icon: IconSchema },
  { id: "schemata-noethen", label: "Schemata (Nöthen)", Icon: IconSchema },
  { id: "uebungsklausur", label: "Übungsklausur (Breier)", Icon: IconTraining },
  { id: "originalklausuren", label: "Originalklausuren (Prüfung)", Icon: IconTraining },
  { id: "pruefungsklausuren", label: "Prüfungsklausuren im Original", Icon: IconTraining },
  { id: "hausaufgaben", label: "Hausaufgaben", Icon: IconModule },
  { id: "training", label: "Training", Icon: IconTraining },
  { id: "quellen", label: "Quellenstand", Icon: IconRegister },
];

export default function KstCampus({ onKlausurwechsel, onFachwechsel }) {
  const [ansicht, setAnsicht] = useState("cockpit");
  const [modulId, setModulId] = useState(null);
  const [suche, setSuche] = useState("");
  const [bereich, setBereich] = useState("alle");
  const [prio, setPrio] = usePrioFilter("stb-kst-prio");
  const [navVerlauf, setNavVerlauf] = useState([
    { ansicht: "cockpit", modulId: null, bereich: "alle", scrollY: 0, offeneDetails: [] },
  ]);
  const [navIndex, setNavIndex] = useState(0);
  const wiederherstellenRef = useRef(null);
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  const fortschritt = useFortschritt("stb-kst-erledigt", modulIds);
  const erledigt = fortschritt.werte;

  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);

  useEffect(() => {
    const snapshot = wiederherstellenRef.current;
    wiederherstellenRef.current = null;
    if (snapshot) return stelleSeitenzustandWiederHer(snapshot);
    window.scrollTo({ top: 0, behavior: "auto" });
    return undefined;
  }, [ansicht, modulId]);

  const gefiltert = useMemo(() => {
    const q = suche.trim().toLowerCase();
    return kstModule.filter((m) => {
      if (bereich !== "alle" && m.area !== bereich) return false;
      if (prio !== "alle" && prioModul(m).stufe !== prio) return false;
      if (!q) return true;
      const text = [
        m.title,
        m.law,
        m.difficulty,
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
      ].filter(Boolean).join(" ").toLowerCase();
      return text.includes(q);
    });
  }, [bereich, suche, prio]);

  const modul = modulId ? kstModule.find((m) => m.id === modulId) : null;
  const quote = anteil(erledigt.length, kstModule.length);

  const ort = () => ({ ansicht, modulId, bereich, ...erfasseSeitenzustand() });

  const anwenden = (ziel, wiederherstellen = false) => {
    wiederherstellenRef.current = wiederherstellen ? ziel : null;
    setAnsicht(ziel.ansicht);
    setModulId(ziel.modulId ?? null);
    setBereich(ziel.bereich ?? bereich);
  };

  const navigiere = (ziel) => {
    const naechster = {
      ansicht: ziel.ansicht,
      modulId: ziel.modulId ?? null,
      bereich: ziel.bereich ?? bereich,
      scrollY: 0,
      offeneDetails: [],
    };
    if (naechster.ansicht === ansicht && naechster.modulId === modulId && naechster.bereich === bereich) return;
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
  }, [navIndex, navVerlauf, ansicht, modulId, bereich]);

  const ansichtOeffnen = (ziel) => navigiere({ ansicht: ziel });
  const bereichOeffnen = (ziel) => navigiere({ ansicht: "module", bereich: ziel });
  const oeffnen = (id) => navigiere({ ansicht: "module", modulId: id });

  return (
    <div className="kst-campus">
      <CampusTopbar
        klausur="2"
        marke="2"
        name="Examenscampus Klausur 2"
        untertitel="Ertragsteuerrecht · Körperschaftsteuer"
        aufCockpit={() => ansichtOeffnen("cockpit")}
        navZurueck={navZurueck}
        navVor={navVor}
        zurueckMoeglich={navIndex > 0}
        vorMoeglich={navIndex < navVerlauf.length - 1}
        suche={suche}
        sucheSetzen={(wert) => {
          setSuche(wert);
          if (ansicht !== "module" || modulId !== null) ansichtOeffnen("module");
        }}
        suchePlatzhalter="KSt-Modul, Norm oder Stichwort suchen"
        sucheAria="Körperschaftsteuer-Module durchsuchen"
        dunkel={dunkel}
        dunkelUmschalten={() => setDunkel((d) => !d)}
      />

      <KlausurenLeiste aktiv="kst" aufCockpit={() => ansichtOeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />

      <K2Fachleiste aktiv="kst" onWechsel={onFachwechsel} />

      <aside className="rail">
        <nav className="rail__nav" aria-label="KSt-Hauptnavigation">
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
          <b>KSt-Fortschritt</b>
          <strong>{erledigt.length} / {kstModule.length}</strong>
          <p>Module als bearbeitet markiert</p>
          {erledigt.length > 0 && (
            <button
              className="rail__box-reset"
              onClick={() => {
                if (window.confirm("Bearbeitungsstand der KSt-Module zurücksetzen?")) fortschritt.zuruecksetzen();
              }}
            >
              zurücksetzen
            </button>
          )}
        </div>
      </aside>

      <main className="page">
        {ansicht === "cockpit" && (
          <KstCockpit
            quote={quote}
            erledigt={erledigt}
            oeffnen={oeffnen}
            ansichtOeffnen={ansichtOeffnen}
            bereichOeffnen={bereichOeffnen}
          />
        )}
        {ansicht === "module" && !modul && (
          <KstModulliste
            liste={gefiltert}
            bereich={bereich}
            setBereich={setBereich}
            prio={prio}
            setPrio={setPrio}
            suche={suche}
            erledigt={erledigt}
            umschalten={fortschritt.umschalten}
            oeffnen={oeffnen}
          />
        )}
        {ansicht === "module" && modul && (
          <KstModulseite
            modul={modul}
            erledigt={erledigt}
            umschalten={fortschritt.umschalten}
            zurueck={() => ansichtOeffnen("module")}
            oeffnen={oeffnen}
          />
        )}
        {ansicht === "faelle" && <KstFallseite oeffnen={oeffnen} />}
        {ansicht === "teil1" && (
          <KurzskriptBloecke
            kicker="Klausur 2 · Körperschaftsteuer · Lehrgangsunterlage"
            titel="KSt Teil I – Allgemeines und verdeckte Einlage (Hamacher)"
            lead="Das Lehrgangsskript „Körperschaftsteuer, Teil I: Allgemeines und verdeckte Einlage (2026)“ von Hamacher (Stand 04/2026) **vollständig im Wortlaut** – alle vier Kapitel auf 91 Seiten. Es beginnt mit dem Satz, der die ganze Systematik trägt: Die Körperschaftsteuer ist vereinfachend die „Einkommensteuer der Kapitalgesellschaften“ – das KStG enthält nur die Spezialregelungen, alles Übrige holt § 8 Abs. 1 Satz 1 KStG aus dem EStG. **Kapitel 1 (Steuerpflicht)**: unbeschränkte Steuerpflicht mit Typenvergleich, britischer Limited nach dem Brexit und optierender Gesellschaft; beschränkte Steuerpflicht in ihren zwei Spielarten; Beginn und Ende mit Vorgründungsgesellschaft, Vorgesellschaft und eingetragener Kapitalgesellschaft; die Steuerbefreiungen des § 5 KStG mit Gemeinnützigkeit, Geprägetheorie und der Freigrenze des § 64 Abs. 3 AO; und die Option nach § 1a KStG. **Kapitel 2 (Einkommensermittlung)**: die Brückenvorschrift des § 8 Abs. 1 Satz 1 KStG, die zweistufige Einkommensermittlung, das Schema des R 7.1 KStR mit Rückrechnung vom Bilanzgewinn, die nicht abziehbaren Ausgaben, das Abzugsverbot für Personensteuern mit den Zinsen des § 233a AO, die Aufsichtsratsvergütungen, der Spendenabzug und der Verlustabzug mit Mindestbesteuerung. **Kapitel 3 (verdeckte Einlage)** – der Schwerpunkt des Skripts: Begriff und Abgrenzung zur vGA, gesellschaftsrechtliche Veranlassung, der einlagefähige Vermögensvorteil und der niemals einlagefähige Nutzungsvorteil, Zurechnung bei unmittelbarer, disquotaler und mittelbarer Einlage einschließlich der Beteiligungskette, die vollständige Bewertung mit der Drei-Jahres-Regelung, die neun Anwendungsfälle mit Forderungsverzicht und Besserungsschein, der Exkurs zum Rangrücktritt, die Auswirkungen bei Gesellschaft und Gesellschafter mit Zuflussfiktion und Teilabzugsverboten, das Korrespondenzprinzip in materieller und formeller Gestalt, das Ausgangsvermögen in allen fünf Konstellationen, die Schenkungsteuer nach § 7 Abs. 8 Satz 1 ErbStG und das Verhältnis zu § 1 AStG. **Kapitel 4**: Tarif von 15 % mit der Absenkung ab dem VZ 2028, Solidaritätszuschlag und das Berechnungsschema des R 7.2 KStR."
            quelle={kstTeil1Quelle}
            kapitel={kstTeil1}
            karteKicker={(k) => `Abschnitt ${k.abschnittNr}`}
            gruppeVon={(k) => k.abschnittNr}
            gruppeLabel={(k) => `Abschnitt ${k.abschnittNr}`}
            gruppeAria="Abschnitte"
            gruppeAlle="Alle Abschnitte"
            suchePlatzhalter="Norm, Stichwort oder Beispiel"
          />
        )}
        {ansicht === "teil2" && (
          <KurzskriptBloecke
            kicker="Klausur 2 · Körperschaftsteuer · Lehrgangsunterlage"
            titel="KSt Teil II – Beteiligungserträge § 8b KStG (Hamacher)"
            lead="Das Lehrgangsskript „Körperschaftsteuer, Teil II: Beteiligungserträge § 8b KStG (2026)“ von Hamacher (Stand 05/2026) im Wortlaut – **vollständig**. § 8b KStG ist die Vorschrift, die das Körperschaftsteuerrecht zum System macht: Sie verhindert, dass ein einmal versteuerter Gewinn auf dem Weg durch eine Beteiligungskette mehrfach besteuert wird, und zieht daraus konsequent auch die Kehrseite – wer die Gewinne aus einer Beteiligung nicht versteuert, darf die Verluste aus ihr nicht abziehen. Das **Kapitel 1 (Bedeutung und persönlicher Anwendungsbereich)** beginnt mit dem Merksatz, der über jeden Fall entscheidet: § 8b KStG greift nur, wo überhaupt eine inländische Einkommensermittlung stattfindet – wo die Kapitalertragsteuer nach § 32 Abs. 1 Nr. 2 KStG abgeltend wirkt, gibt es kein Einkommen zu korrigieren. Dazu die Sonderfälle der beschränkt Steuerpflichtigen ohne Betriebsstätte, bei denen § 44a Abs. 9 EStG die Quellensteuer rechnerisch auf den Körperschaftsteuersatz herunterschleust und ein Veräußerungsgewinn nach der Rechtsprechung des BFH sogar ohne die Fünf-Prozent-Pauschale vollständig freigestellt bleibt. Aus **Kapitel 2** sind der Begriff der Gewinnausschüttung und das **Korrespondenzprinzip** eingepflegt: Die Steuerfreiheit entfällt, soweit die Ausschüttung bei der leistenden Gesellschaft das Einkommen gemindert hat – der Einkommensschaden wird also beim Anteilseigner nachversteuert, und § 32a Abs. 1 KStG erlaubt es, das später zurückzunehmen, wenn der Bescheid der Gesellschaft korrigiert wird. Eine Übersicht stellt diesen Mechanismus dem spiegelverkehrten der verdeckten Einlage aus Teil I gegenüber. Dazu die **Streubesitzgrenze** des § 8b Abs. 4 KStG: Maßgebend sind nur unmittelbare Beteiligungen am Nennkapital, nicht Stimmrechte – wohl aber anteilig die über eine **Personengesellschaft** gehaltenen Anteile, weshalb zwei sonst gleiche Fälle je nach Rechtsform der Zwischengesellschaft entgegengesetzt ausgehen. Entscheidend ist allein der Stand zum 01.01., und zwar in beide Richtungen: Ein späterer Anstieg hilft nicht, ein späteres Absinken schadet nicht. Die einzige Ausnahme ist der **Hinzuerwerb** eines Anteils von mindestens 10 %, der nach § 8b Abs. 4 Satz 6 KStG auf den 01.01. zurückbezogen wird – wobei es auf den **erworbenen** Anteil ankommt und nicht auf die erreichte Quote, weshalb eine Aufstockung von 4 % auf 10 % nichts bringt, ein Erwerb von 10 % neben 4 % Altbestand dagegen zur Aufteilung der Ausschüttung führt. Schließlich die **Kapitalertragsteuer**, die auch auf die steuerfreie Ausschüttung einzubehalten ist und bei der Nettomethode zwei Korrekturschritte in fester Reihenfolge verlangt. Dazu die **Betriebsausgabenpauschalierung** – 5 % der Bruttoausschüttung gelten als nicht abziehbar, auch wenn keine Aufwendungen angefallen sind, dafür bleiben die tatsächlichen in voller Höhe abziehbar – und das **gewerbesteuerliche Schachtelprivileg**, das in drei Punkten eigene Wege geht: 15 % statt 10 %, kein Rückbezug des unterjährigen Erwerbs, dafür aber Berücksichtigung mittelbarer Beteiligungen. Zwei spiegelbildliche Fälle zeigen, dass eine Ausschüttung körperschaftsteuerfrei und gewerbesteuerpflichtig sein kann – und umgekehrt. Die Kürzung selbst läuft dabei meist leer, weil die Ausschüttung den Gewerbeertrag gar nicht mehr erreicht; praktisch bedeutsam wird sie erst, wo die Ebenen auseinanderfallen – etwa beim materiellen Korrespondenzprinzip, das § 9 Nr. 2a GewStG nicht kennt. Bei den **beteiligungsbezogenen Aufwendungen** schließen sich zwei Wege aus: Ist die Ausschüttung körperschaftsteuerfrei, trennt die Pauschalierung den Zusammenhang und es bleibt bei § 8 Nr. 1 GewStG; ist sie nur gewerbesteuerfrei, zehren die Aufwendungen zuerst den Kürzungsrahmen auf. Für ausländische Beteiligungen gilt mit § 9 Nr. 7 GewStG dasselbe, im DBA-Fall tritt § 9 Nr. 8 GewStG daneben und die günstigere Regelung gewinnt. Greift kein Schachtelprivileg, dreht § 8 Nr. 5 GewStG die Freistellung zurück – um **95 %** der Ausschüttung, weil die Pauschale gegenzurechnen ist. **Damit ist das Kapitel 2 vollständig.** Aus **Kapitel 3 (Veräußerungsgewinne)** ist der Grundfall da – mit der wichtigsten Abgrenzung des Skripts: § 8b Abs. 2 KStG kennt **keine** Mindestbeteiligungsquote, weshalb dieselbe Beteiligung laufende Ausschüttungen steuerpflichtig erbringen, ihr Verkauf aber steuerfrei bleiben kann. Dazu die Kaufpreisveränderungen, die als rückwirkendes Ereignis auf das Veräußerungsjahr zurückwirken – außer beim gewinnabhängigen Kaufpreisteil, der erst später entsteht –, und die Veräußerungskosten, die das Schicksal des steuerfreien Gewinns teilen und dafür notfalls über Jahresgrenzen hinweg verschoben werden. Der **weite Veräußerungsbegriff** ist bis zur Einlagenrückgewähr eingepflegt: die verdeckte Einlage von Anteilen, deren Gewinn nach Satz 6 ebenfalls freigestellt ist; die verbilligte Übertragung an den Gesellschafter, bei der die Hinzurechnung nach § 8 Abs. 3 Satz 2 KStG genau den Veräußerungsgewinn herstellt, der bei angemessenem Preis entstanden wäre – die Quelle vertritt hier eine eigene, ausdrücklich umstrittene Auffassung zur materiellen Korrespondenz; und die Einlagenrückgewähr, die zunächst die Anschaffungskosten mindert und erst oberhalb des Buchwerts zu einem steuerfreien Gewinn führt. Dazu die **Sachdividende**, die in einem Vorgang beide Absätze des § 8b KStG verbindet, und die **Wertaufholung**, die einer einfachen Symmetrie folgt: Was steuerlich nicht abgezogen werden durfte, muss bei seiner Rückgängigmachung auch nicht versteuert werden – die Frage lautet immer nur, ob sich die frühere Teilwertabschreibung damals ausgewirkt hat. Bei Altfällen bis 2001 ist die Aufholung deshalb steuerpflichtig, und bestehen alte und neue Abschreibungen nebeneinander, wird nach dem BFH zuerst die **jüngere** aufgeholt („last in – first out“, entgegen der Verwaltungsauffassung). **Damit ist auch das Kapitel 3 vollständig**, einschließlich der Pauschalierung – die jeden Veräußerungsgewinn einzeln erfasst, ohne Saldierung mit Verlusten – und der gewerbesteuerlichen Auswirkungen, die hier mit drei Sätzen auskommen: Für Veräußerungsgewinne gibt es kein Schachtelprivileg, weil auch keines gebraucht wird. Aus **Kapitel 4 (Abzugsverbot von Gewinnminderungen)** ist der Begriff der Gewinnminderung eingepflegt – mit der schärfsten Asymmetrie des Skripts: Beim Streubesitzanteil ist die Ausschüttung steuerpflichtig, der Veräußerungsverlust aber gleichwohl nicht abziehbar, weil § 8b Abs. 4 KStG nur den Absatz 1 ausschließt. Dazu der Ausfall der Kaufpreisforderung, der rückwirkend zu einer Neuberechnung führt statt zu abziehbarem Aufwand, und die Kosten eines gescheiterten Erwerbs, die voll abziehbar bleiben – der abgebrochene Erwerb ist steuerlich also günstiger als der erfolgreiche. Dazu die **Gesellschafterdarlehen**, deren Ausfall oder Teilwertabschreibung seit 2008 unter dasselbe Abzugsverbot fällt. Bei der 25-Prozent-Grenze zählen hier – anders als beim Streubesitz – auch **mittelbare** Beteiligungen mit, und zwar durchgerechnet und ohne dass es auf eine Beherrschung der Zwischengesellschaft ankäme; eine Übersicht stellt die beiden Beteiligungsprüfungen des § 8b KStG gegenüber, die in derselben Vorschrift stehen und nach entgegengesetzten Regeln funktionieren. Gibt eine **Personengesellschaft** das Darlehen, entscheidet ihre Rechtsnatur über alles: Bei der gewerblichen zählt ihre eigene Beteiligung, bei der vermögensverwaltenden die Bruchteilsbetrachtung des § 39 Abs. 2 Nr. 2 AO – derselbe Sachverhalt, ein um 300.000 € abweichendes Einkommen. **Zeitlich** ist die Vorschrift außerordentlich weit: Sie greift nach vorn (das Darlehen wächst durch späteren Zukauf hinein) und nach hinten (sie bleibt anwendbar, wenn die Beteiligung längst verkauft ist), und auf die Dauer kommt es nicht an – ein einziger Tag genügt. Die einzige zeitliche Schranke ist, dass der Darlehensgeber im Zeitpunkt der Hingabe überhaupt beteiligt war – eine schon vorher gesunkene Quote zählt nach der umstrittenen Auffassung der Quelle nicht mit. Neu eingepflegt ist der Abschnitt zur **nahestehenden Person als Darlehensgeber**: Über § 8b Abs. 3 Satz 5 KStG erfasst das Abzugsverbot auch Darlehen, bei denen der Geber selbst gar nicht oder nur gering beteiligt ist – die Mutter an die Enkelin ebenso wie die Schwester an die Schwester. Entscheidend ist, in jedem Fall zuerst die beiden Rollen des § 1 Abs. 2 AStG zu verteilen: Die „Person“ ist stets der Darlehensgeber, der „Steuerpflichtige“ stets derjenige, der zu mehr als 25 % an der Darlehensnehmerin beteiligt ist. Dabei arbeiten die beiden Quoten gegeneinander – für das Nahestehen genügen **mindestens** 25 %, für die qualifizierte Beteiligung sind **mehr als** 25 % nötig. Über allem steht der Vorrang der **verdeckten Gewinnausschüttung**: Wo das Darlehen gesellschaftsrechtlich veranlasst ist, greift § 8 Abs. 3 Satz 2 KStG zuerst – weshalb der BFH 2018 die Frage des up-stream-Darlehens offenlassen konnte. Beim **rückgriffsberechtigten Dritten** greift die Vorschrift über zwei Ecken: Der Gesellschafter gibt gar kein Darlehen, er bürgt nur – erst die Abschreibung des Rückgewähranspruchs ist die Gewinnminderung. Weil der Rückgriffstatbestand weit auszulegen ist, genügt schon eine **faktische** Möglichkeit, etwa Patronatserklärung oder Konzernrückhalt. Die Hinzurechnung trifft dabei **nur** den Darlehensgeber: Beim Darlehensnehmer bleibt der Wegfall der Verbindlichkeit steuerpflichtiger Ertrag, weil § 8b Abs. 3 Satz 4 KStG keine Korrespondenz vorsieht – derselbe Vorgang wird zweimal besteuert, und der Gesetzgeber verweist nur auf einen Billigkeitserlass. Erholt sich das Darlehen wieder, stellt § 8b Abs. 3 Satz 9 KStG die Symmetrie her: Der Ertrag aus dem Besserungsfall bleibt außer Ansatz, soweit der Aufwand zuvor hinzugerechnet worden ist. Über **Satz 8** erfasst die Vorschrift schließlich auch Pacht-, Lizenz- und Lieferforderungen – entscheidend ist nicht das Grundgeschäft, sondern die davon abtrennbare **Finanzierungsentscheidung**, den Anspruch zu stunden oder stehen zu lassen. Der **Gegenbeweis** des § 8b Abs. 3 Satz 7 KStG bleibt dabei weitgehend theoretisch: Die Beweislast liegt beim Steuerpflichtigen, und die Gesetzesbegründung schließt ihn schon aus, wenn das Darlehen unverzinslich ist, keine Sicherheiten hat oder in der Krise nicht abgezogen wird – also gerade in den Fällen, in denen es zur Gewinnminderung kommt. Verlangt ist ein **Drittvergleich**, nicht ein Fremdvergleich: Nicht die Angemessenheit der Konditionen ist die Frage, sondern ob die Gesellschaft das Geld überhaupt bekommen hätte. Und weil dabei nur ihre **eigenen** Sicherheiten zählen (stand-alone-Basis), scheitert der Nachweis schon daran, dass andere Bankdarlehen durch Gesellschafterbürgschaften besichert sind – im Bürgschaftsfall ist er begrifflich ausgeschlossen. Ausgenommen sind allein die **Wechselkursverluste**: Seit dem VZ 2022 nimmt § 8b Abs. 3 Satz 6 KStG sie vom Abzugsverbot aus, weil die Kursgewinne mangels Befreiungstatbestand immer steuerpflichtig sind – bis einschließlich VZ 2021 gilt das aber nicht. **Gewerbesteuerlich** kommt das Kapitel mit zwei Sätzen aus: Die Hinzurechnung wirkt über § 7 Satz 1 GewStG durch, eine Gegenkorrektur gibt es nicht. **Damit ist auch das Kapitel 4 vollständig.** Aus **Kapitel 5 (mittelbare Beteiligung über eine Personengesellschaft)** sind die Steuerfreistellung und die Ausschüttungen eingepflegt: § 8b Abs. 6 KStG behandelt die über den Mitunternehmeranteil bezogenen Erträge, als hätte die Kapitalgesellschaft sie unmittelbar bezogen. Verfahrensrechtlich entscheidend ist die **Bruttomethode** – der Feststellungsbescheid weist die Einkünfte ohne die Wirkungen des § 8b KStG aus und teilt zusätzlich mit, welcher Betrag darunter fällt; diese Angabe ist über § 182 Abs. 1 Satz 1 AO **bindend** und kein bloßer Hinweis. Bilanziell wird der Anteil nach der **Spiegelbildmethode** entwickelt, wobei zum steuerlichen Kapital auch das Sonderbetriebsvermögen zählt. Bei der Ausschüttung sind vier Schritte in fester Reihenfolge nötig: Weil nur die Nettoausschüttung als Ertrag gebucht ist, stellt erst die Hinzurechnung nach § 10 Nr. 2 KStG die Bruttoausschüttung her, von der § 8b Abs. 1 KStG dann freistellen kann. Die Streubesitzquote ist dabei **durchzurechnen** – 50 % an der KG und 30 % an der Tochter ergeben 15 % –, und die Kapitalertragsteuer wird erst bei der Mitunternehmer-Kapitalgesellschaft angerechnet, weil die Personengesellschaft selbst keine Steuer schuldet. Bei den **Veräußerungsgewinnen** ist auch der Verkauf des Mitunternehmeranteils selbst erfasst, soweit der Gewinn auf eine Kapitalbeteiligung entfällt – wobei zwei Rechnungen nebeneinander laufen: der Gesamtgewinn nach dem steuerlichen Kapitalkonto, der steuerfreie Teil nach dem anteiligen Buchwert der Beteiligung. Alte Teilwertabschreibungen holen den Gewinn anteilig in die Steuerpflicht zurück, und die Pauschale bemisst sich nur nach dem steuerfreien Teil. Bei den **Gewinnminderungen** zeigt sich der schärfste Kontrast des Kapitels: Dasselbe Darlehen über 1.000.000 € führt bei der Mitunternehmerin zu einer Hinzurechnung von 400.000 €, wenn es im Gesamthandsvermögen liegt, und von 1.000.000 €, wenn es im Sonderbetriebsvermögen liegt – dort scheitert sie zwar mit ihren durchgerechneten 20 % an Satz 4, wird aber über Satz 5 als nahestehende Person der Personengesellschaft erfasst. **Gewerbesteuerlich** gilt bei der Personengesellschaft anders als körperschaftsteuerlich die **Nettomethode** des § 7 Satz 4 GewStG; beim Mitunternehmer wirkt der Gewinnanteil dann nicht noch einmal, weil § 9 Nr. 2 und § 8 Nr. 8 GewStG ihn herausnehmen. Zwei vollständig durchgerechnete **Mischfälle** – eine natürliche Person und eine Kapitalgesellschaft als Mitunternehmer – zeigen, wie weit das trägt: Dieselbe Ausschüttung führt je nach Beteiligungsquote der KG zu einem Gewerbeertrag von ./. 175.000 € oder von 630.000 €, eine Differenz von 805.000 € aus einer einzigen geänderten Zahl. Der Grund ist, dass die Quote zweimal wirkt – körperschaftsteuerlich über die durchgerechnete Streubesitzgrenze von 10 %, gewerbesteuerlich über das Schachtelprivileg mit seinen 15 %. Das **Kapitel 6**, das die Quelle selbst mit „nur Hinweis“ überschreibt, rundet das Bild mit vier Sonderregeln ab. § 8b Abs. 7 KStG nimmt **Finanzunternehmen** die Steuerfreiheit – gibt ihnen dafür aber den vollen Abzug der Gewinnminderungen zurück, was die Vorschrift bis 2016 zum Gestaltungsobjekt machte; seither sind zwei kumulative Merkmale nötig, die man nicht frei wählen kann. § 8b Abs. 8 KStG schließt **Lebens- und Krankenversicherer** ganz aus, weil die handelsrechtlich bemessene Rückstellung für Beitragsrückerstattungen sonst dieselben Beträge ein zweites Mal aus dem Einkommen nehmen würde. § 8b Abs. 9 KStG holt für **EU-Ausschüttungen** die Freistellung zurück, weil die Mutter-Tochter-Richtlinie es verlangt – aber nur für Ausschüttungen, nicht für Veräußerungsgewinne. Und § 8b Abs. 10 KStG beendet die **Wertpapierleihe** als Gestaltung: Leihgebühr und Ausgleichszahlung sind nicht abziehbar, die Dividende dafür zu 100 % frei. Hier lohnt der Blick auf § 8b Abs. 4 Satz 3 KStG – geliehene Anteile zählen für die Zehn-Prozent-Grenze nicht mit, weshalb derjenige, der seine gesamten 10 % nur geliehen hat, die Grenze nie erreicht und die Gestaltung schon im Ansatz wertlos wird. **Damit ist das Skript vollständig übernommen – alle sechs Kapitel über 70 Seiten.**"
            quelle={kstTeil2Quelle}
            kapitel={kstTeil2}
            karteKicker={(k) => `Abschnitt ${k.abschnittNr}`}
            gruppeVon={(k) => k.abschnittNr}
            gruppeLabel={(k) => `Abschnitt ${k.abschnittNr}`}
            gruppeAria="Abschnitte"
            gruppeAlle="Alle Abschnitte"
            suchePlatzhalter="Norm, Stichwort oder Beispiel"
          />
        )}
        {ansicht === "teil3" && (
          <KurzskriptBloecke
            kicker="Klausur 2 · Körperschaftsteuer · Lehrgangsunterlage"
            titel="KSt Teil III – Einlagekonto und Kapitalmaßnahmen (Hamacher)"
            lead="Das Lehrgangsskript „Körperschaftsteuer, Teil III: Steuerliches Einlagekonto (§ 27 KStG); Grundzüge der Kapitalherauf- und -herabsetzung (§ 28 KStG)“ von Hamacher (21. Auflage, Stand 05/2025) im Wortlaut – **vollständig**. Das steuerliche Einlagekonto beantwortet eine einzige Frage: Was von dem, was die Gesellschaft auskehrt, hat der Gesellschafter ihr vorher selbst gegeben? Der entscheidende Satz steht gleich am Anfang und wird leicht überlesen – das Konto wird **gesellschaftsbezogen** geführt, nicht gesellschafterbezogen. Die Gesellschaft hat immer nur **einen** Bestand, gleichgültig wer die Einlage geleistet hat, und deshalb profitiert von einer Einlagenrückgewähr jeder Anteilseigner nach seiner Quote – auch derjenige, der nie etwas eingelegt hat. Genau daraus entsteht die Grundkonstellation des ganzen Kapitels: Die Auskehrung kann die Anschaffungskosten eines Gesellschafters überschreiten, obwohl die Gesellschaft nur zurückgibt, was sie einmal erhalten hat. Bis zur Höhe der Anschaffungskosten ist der Vorgang immer **steuerneutral**; erst der **Überhang** löst Folgen aus, und die fallen je nach Rechtsform und Zugehörigkeit des Anteils auseinander. Im Betriebsvermögen einer natürlichen Person und bei § 17 EStG entsteht ein Veräußerungsgewinn im Teileinkünfteverfahren – beim Anteil nach § 17 Abs. 4 EStG allerdings **ohne** den Freibetrag des Absatzes 3, weil tatsächlich gar nicht veräußert wird. Bei einer Kapitalgesellschaft greift § 8b Abs. 2 KStG mit seiner Fünf-Prozent-Pauschale, so dass dieselbe Ausschüttung zwei verschiedene Pauschalen aus zwei verschiedenen Vorschriften auslösen kann. Und bei Anteilen unter einem Prozent im Privatvermögen bleibt der Überhang **vollständig unbesteuert**, weil das Gesetz dafür schlicht keinen Tatbestand vorsieht – die Folge sind **negative Anschaffungskosten**, die die Besteuerung nur aufschieben. Besteht die Beteiligung aus mehreren Anteilen, ist zwingend nach dem Verhältnis der **Nominalanteile** aufzuteilen, ohne Wahlrecht – was im Beispiel der Quelle zu einem um 160.000 € höheren Gewinn führt als eine zusammengefasste Betrachtung. Alte **steuerwirksame Teilwertabschreibungen** holen den Überhang schließlich in die Steuerpflicht zurück. Bei der **Feststellung** ist der Bescheid Grundlagenbescheid für das Folgejahr – wird er bestandskräftig, schreibt sich ein Fehler ohne zeitliche Grenze fort, und der einzige Ausweg über § 129 AO ist gerade beim übersehenen Zugang zur Kapitalrücklage umstritten. Zugleich besteht eine **Korrespondenz** zum Anteilseigner: Ohne Abgang beim Einlagekonto gibt es bei ihm keine Einlagenrückgewähr, spätere Änderungen wirken als rückwirkendes Ereignis bei ihm durch – anfechten kann er den Bescheid aber **nicht**. Die Steuerbescheinigung nach § 27 Abs. 3 KStG bindet dagegen gar nicht, sie ist bloßes Beweismittel. Die **Verwendungsberechnung** beantwortet schließlich eine rein rechnerische Frage: Reicht das neutrale Vermögen – Eigenkapital abzüglich Nennkapital und Einlagekonto – für die Ausschüttungen des Jahres? Nur der Überschuss kommt aus dem Einlagekonto. Maßgebend sind allein die **Vorjahreswerte**, weshalb unterjährige Einlagen erst im Folgejahr helfen; abgeflossen muss die Leistung sein, eine bloß passivierte Ausschüttung zählt nicht; und eine Einzelbetrachtung gibt es nicht – alle Leistungen werden summiert und das Ergebnis nach dem Betragsverhältnis verteilt, im Beispiel 200/220 zu 20/220. **Damit ist der Abschnitt 1.3 vollständig.** Für **ausländische** Gesellschaften – seit 2023 auch aus Drittstaaten – wird im Antragsverfahren nach § 27 Abs. 8 KStG kein Einlagekonto festgestellt, sondern nur der Betrag der Einlagenrückgewähr für die eine Leistung, und zwar nach **nationalen** Maßstäben; die Antragsfrist ist eine Ausschlussfrist, deren Versäumnis den inländischen Anteilseigner voll steuerpflichtig macht. Im Inland trifft die Feststellungspflicht über § 27 Abs. 7 KStG auch Genossenschaften, Zweckvermögen und Betriebe gewerblicher Art – und zwar auch in **leistungslosen** Jahren, damit keine Feststellungspause die Kette der Grundlagenbescheide unterbricht. Beim **Beginn der unbeschränkten Steuerpflicht** hilft ein fiktiver Rückbezug, der seit dem JStG 2024 für Umwandlungsfälle des § 29 KStG aber ausgeschlossen ist. Beim **Negativbestand** zeigt die Quelle denselben Fall wie zuvor mit nur einer geänderten Zahl: Sinkt das Eigenkapital von 200.000 € auf 100.000 €, steigt die Einlagenrückgewähr von 15.000 € auf 70.000 € – und trotzdem bleiben 20.000 € steuerpflichtiger Bezug, weil bei einem Bestand von 0 € Schluss ist. Beim **Direktzugriff** gilt das gerade nicht: § 27 Abs. 1 Satz 4 KStG verbietet einen Negativbestand nur „durch Leistungen“, weshalb der Abgang beim Besserungsfall oder beim Rangrücktritt das Konto ins Minus drücken darf. Und die **optierende Gesellschaft** nach § 1a KStG hat kein Nennkapital, so dass ihr gesamtes steuerliches Eigenkapital im Einlagekonto landet – der ausschüttbare Gewinn des Erstjahres beträgt 0 € und jede Ausschüttung ist Einlagenrückgewähr. Die **Verwendungsfestschreibung** des § 27 Abs. 5 KStG schließt das Kapitel ab und kommt für die beiden Fehlerrichtungen zu entgegengesetzten Ergebnissen. Ein **zu niedriger** Ausweis wird festgeschrieben und darf nicht mehr korrigiert werden – und zwar auch dann, wenn gar keine Bescheinigung erteilt wurde, denn dann gilt ein Ausweis von **fiktiv 0 €**. Das trifft vor allem die erst durch die Betriebsprüfung aufgedeckte verdeckte Gewinnausschüttung, für die im Ausschüttungsjahr niemand bescheinigen konnte; vorsorgliche Bescheinigungen erkennt die Finanzverwaltung nicht an. Ein **überhöhter** Ausweis ist dagegen für das Besteuerungsverfahren unerheblich – stattdessen haftet die Gesellschaft verschuldensunabhängig für die zu niedrige Kapitalertragsteuer, und das Haftungsverfahren geht der Veranlagung absolut vor. Der gemeinsame Nenner beider Fälle: Der Gesellschaft verbleibt mehr Einlagekontopotential, der Anteilseigner versteuert mehr, als die Bescheinigung ausweist. Die Haftung selbst ist erfolgsneutral, weil die Gesellschaft nur für eine fremde Steuerschuld einsteht und einen Rückforderungsanspruch erwirbt – erst der **Verzicht** darauf kostet, und dann verstärkt um die darauf wiederum entfallende Kapitalertragsteuer. **Damit ist das Kapitel 1 vollständig.** Bei der **Kapitalerhöhung** entscheidet zuerst die Handelsregistereintragung, denn sie ist für die steuerliche Beurteilung bindend. Die **externe** Kapitalerhöhung ist bei der Gesellschaft ein reiner Aktiv-Passiv-Vorgang; nur ein **Aufgeld** erhöht das Einlagekonto, weil insoweit kein Zugang beim Nennkapital erfolgt. Beim Anteilseigner droht das **Überspringen stiller Reserven**, wenn ein Nahestehender zu billig einsteigt: Im Beispiel erwirbt der Sohn für 100.000 € einen Anteil im Wert von 200.000 €, es kommt aber nicht zur Realisierung, sondern 1/9 der Anschaffungskosten des Vaters spaltet sich ab und wandert auf den neuen Anteil – die Besteuerung verschiebt sich auf die spätere Veräußerung durch den Sohn. Bei der **internen** Kapitalerhöhung fingiert § 28 Abs. 1 Satz 1 KStG unabhängig von der tatsächlich verwendeten Rücklage vorrangig den Verbrauch des Einlagekontos; der Überhang wird als **Sonderausweis** festgestellt, der festhält, dass im Nennkapital versteuerter Gewinn steckt. Er schmilzt bei späteren Einlagen wieder ab, weshalb Einlagekonto und Sonderausweis nie nebeneinander festgestellt werden können. Beim Anteilseigner sind die neuen Anteile weder Einkünfte noch zusätzliche Anschaffungskosten – die vorhandenen werden nur nach **Nennwerten** neu verteilt. **Damit ist auch das Kapitel 2 vollständig.** Die **Kapitalherabsetzung** vollzieht genau die Gegenbewegung: Auf dem Weg **in** das Nennkapital wurde zuerst das Einlagekonto verbraucht und der Rest zum Sonderausweis; auf dem Weg **heraus** wird zuerst der Sonderausweis aufgelöst und nur der Rest dem Einlagekonto gutgeschrieben. Beides zusammen verhindert, dass versteuerter Gewinn über den Umweg des Nennkapitals unbesteuert zum Gesellschafter gelangt. Ohne Rückzahlung (**vereinfachte** Kapitalherabsetzung) löst das beim Anteilseigner nichts aus, weil ihm nichts zufließt. Kommt es dagegen zur **Auskehrung**, tritt § 28 Abs. 2 Satz 3 KStG hinzu: Der Auszahlungsbetrag mindert das Einlagekonto **unmittelbar**, also ohne ausschüttbaren Gewinn und ohne Vorjahreswerte – einer der Direktzugriffsfälle. Die Auflösung des Sonderausweises führt dann zu Bezügen nach § 20 Abs. 1 Nr. 2 EStG mit Kapitalertragsteuer, die erst mit der tatsächlichen Auskehrung entsteht. Bemerkenswert ist, dass die Gesellschaft hierüber **keine** Bescheinigung nach § 27 Abs. 3 KStG erteilt – weshalb auch die Verwendungsfestschreibung ins Leere läuft und der Anteilseigner sich an der Kapitalertragsteuerbescheinigung orientieren muss. Beim **Erwerb und der Veräußerung eigener Anteile** wird derselbe Vorgang auf beiden Ebenen nach völlig verschiedenen Regeln beurteilt: Bei der Gesellschaft fehlt es an einem Erwerb, weil handelsrechtlich der Nennbetrag offen vom gezeichneten Kapital abgezogen wird und gar kein Aktivum entsteht – es gilt § 28 Abs. 2 KStG; beim Anteilseigner ist es eine Veräußerung wie jede andere. Die Zahlen beider Ebenen lassen sich deshalb nicht ineinander überführen: Die „technische Leistung“ der Gesellschaft taucht beim Gesellschafter nirgends auf, der schlicht den Kaufpreis gegen seine Anschaffungskosten rechnet. Die spätere Weiterveräußerung wickelt den Vorgang **spiegelbildlich** zurück – der Nennbetrag kehrt ins Nennkapital zurück, der Überhang gilt als Aufgeld –, weshalb § 8b Abs. 2 KStG gerade nicht anwendbar ist. Liegt der Preis gesellschaftsrechtlich veranlasst zu niedrig, unterbleibt bei der Gesellschaft sogar die Hinzurechnung nach § 8 Abs. 3 Satz 2 KStG, weil es an einem gewinnrealisierenden Vorgang fehlt; die verdeckte Gewinnausschüttung sichert allein die Folgen beim Anteilseigner ab, der nach der **Fiktionstheorie** in gleicher Höhe zusätzliche Anschaffungskosten erhält. **Damit ist das Skript vollständig übernommen – alle drei Kapitel über 39 Seiten.**"
            quelle={kstTeil3Quelle}
            kapitel={kstTeil3}
            karteKicker={(k) => `Abschnitt ${k.abschnittNr}`}
            gruppeVon={(k) => k.abschnittNr}
            gruppeLabel={(k) => `Abschnitt ${k.abschnittNr}`}
            gruppeAria="Abschnitte"
            gruppeAlle="Alle Abschnitte"
            suchePlatzhalter="Norm, Stichwort oder Beispiel"
          />
        )}
        {ansicht === "teil4" && (
          <KurzskriptBloecke
            kicker="Klausur 2 · Körperschaftsteuer · Lehrgangsunterlage"
            titel="KSt Teil IV – Verdeckte Gewinnausschüttung (Hamacher)"
            lead="Das Lehrgangsskript „Körperschaftsteuer, Teil IV: Verdeckte Gewinnausschüttung i. S. des § 8 Abs. 3 Satz 2 KStG“ von Hamacher (21. Auflage, Stand 07/2025) **vollständig im Wortlaut** – alle sechs Kapitel über 87 Seiten. Die verdeckte Gewinnausschüttung ist eine Vorteilszuwendung an den Gesellschafter oder eine ihm nahe stehende Person **außerhalb** der offenen Gewinnverwendung – und weil schon die offene Ausschüttung das Einkommen nach § 8 Abs. 3 Satz 1 KStG nicht mindern darf, gilt für die verdeckte nichts anderes. Der praktische Einstieg in jeden Fall ist eine einzige Frage: **Wer erzielt den Vermögensvorteil?** Liegt er bei der Gesellschaft, ist es eine verdeckte Einlage; liegt er beim Gesellschafter, eine verdeckte Gewinnausschüttung. Die Korrektur erfolgt **ausschließlich außerhalb der Steuerbilanz** – die Steuerbilanz bleibt unverändert, der überhöhte Aufwand bleibt gebucht, und erst bei der Einkommensermittlung wird hinzugerechnet. Geprüft werden fünf Tatbestandsmerkmale, von denen das fünfte – die **Vorteilsgeneigtheit** – nicht in den Richtlinien steht, sondern vom BFH ergänzt wurde: Die Gewinnminderung muss überhaupt geeignet sein, beim Gesellschafter Einnahmen nach § 20 Abs. 1 Nr. 1 EStG auszulösen. Die beiden **Fallgruppen** unterscheiden sich nach der Richtung der Leistung und haben deshalb verschiedene Bewertungsmaßstäbe: Bei der verhinderten Vermögensmehrung ist der **gemeine Wert** anzusetzen, also einschließlich des Gewinnaufschlags, bei der Vermögensminderung die Differenz zum angemessenen Entgelt. Beim **Fremdvergleich** gilt der ordentliche und gewissenhafte Geschäftsleiter als Maßstab – bemerkenswerterweise in beide Richtungen: Eine vGA kann auch in einer für die Gesellschaft **günstigen** Vereinbarung liegen, wenn kein fremder Dritter ihr zugestimmt hätte, wie im Fall der Nur-Pension. Und hinzugerechnet werden kann nur, was das Ergebnis der **Stufe 1** tatsächlich beeinflusst hat: Die Vorschrift stellt nicht den angemessenen Zustand her, sondern beseitigt nur eine eingetretene Gewinnminderung. Die **Sonderfälle** zeigen, wo dieser Grundsatz an seine Grenze stößt. Erwirbt die Gesellschaft ein **aktivierungspflichtiges Wirtschaftsgut** zu teuer, steckt der überhöhte Preis zunächst nur im Bilanzansatz und wirkt sich gar nicht auf den Gewinn aus – hier ist ausnahmsweise **zuerst die Bilanz** zu korrigieren, und erst der dadurch entstehende Aufwand trägt die Hinzurechnung. Die laufende Abschreibung ist dabei ausdrücklich **keine** anteilige vGA, sondern bloße Reflexwirkung. Ist die Veranlagung des Anschaffungsjahres bereits **bestandskräftig**, vernichtet das endgültig Steuersubstrat, und zwar auf beiden Ebenen gleichzeitig: Bei der Gesellschaft bleibt die überhöhte Abschreibung der Vorjahre stehen, und beim Gesellschafter versagt § 3 Nr. 40 Buchstabe d Satz 2 EStG die Begünstigung genau insoweit – im Beispiel bleiben von 200.000 € vGA nur 80.000 € begünstigt. Erst § 32a Abs. 1 KStG eröffnet ihm überhaupt die Korrektur seiner längst bestandskräftigen Veranlagung. Beim **Verkauf einer Beteiligung** ist zweistufig zu prüfen: Erst stellt § 8 Abs. 3 Satz 2 KStG den angemessenen Veräußerungsgewinn her, dann greift § 8b Abs. 2 KStG – wer die Reihenfolge umkehrt, hat gar keinen Gewinn, den er freistellen könnte. Ergibt sich trotz Hinzurechnung ein Verlust, rechnet § 8b Abs. 3 Satz 3 KStG auch ihn wieder hinzu. Bei den **Schadensersatzansprüchen** entscheidet eine einzige Frage: **Hat sich der Gesellschafter selbst einen Vorteil verschafft?** Beim **„schlampigen Gesellschafter“** lautet die Antwort nein – er hat nur schlecht gearbeitet, der Schaden liegt allein bei der Gesellschaft, und deshalb ist der zivilrechtliche Ersatzanspruch vorrangig zu aktivieren und schließt die vGA aus. Sie entsteht erst, wenn die Gesellschaft verzichtet, den Anspruch verjähren lässt oder er uneinbringlich wird – maßgeblich ist also nicht das Schadensjahr, sondern das Jahr des Verzichts. Der **Alleingesellschafter** haftet dabei aus eigenen Geschäften gar nicht, es sei denn, das Stammkapital wird angegriffen. Beim **„gierigen Gesellschafter“** lautet die Antwort ja: Die vGA ist mit dem Grundgeschäft bereits vollzogen, und der Rückforderungsanspruch ist nur noch eine steuerlich unbeachtliche **Einlageforderung**. Das gilt auch für **Satzungs- und Steuerklauseln**, mit denen sich die Gesellschafter zur Rückzahlung verpflichten – wer damit eine entdeckte vGA nachträglich ungeschehen machen will, erreicht steuerlich nichts: Über beide Jahre bleibt es bei genau einer Hinzurechnung, und der Gesellschafter hat obendrein zurückgezahlt. Die **Vorteilsgeneigtheit** wirkt dabei als Filter: Die vGA erfasst nur die Zuwendung selbst, nicht ihre Begleitkosten. **Schuldzinsen** für ein Darlehen, mit dem die Gesellschaft das überhöhte Gehalt finanziert, bleiben abziehbar – die Probe liefert die Quelle selbst: Auch bei einer offenen Ausschüttung wären sie es. Dasselbe gilt für Beiträge zur **Rückdeckungsversicherung**, deren Ansprüche der Gesellschaft zustehen. Und die vGA ist durchweg **objektiv** zu beurteilen: Weder eine Ausschüttungsabsicht noch eine Einigung der Beteiligten ist erforderlich – wer argumentiert, die Unangemessenheit sei niemandem bewusst gewesen, hat damit nichts gewonnen. Die Gesellschaft muss sich das Handeln ihrer Organe sogar dann zurechnen lassen, wenn der Gesellschafter sich den Vorteil durch **Untreue** erschlichen hat, sofern sie ihn hat gewähren lassen. Bei **nahe stehenden Personen** ist für die Korrektur bei der Gesellschaft gleichgültig, wem der Vorteil zufließt – die **Bezüge** aber kann nach § 20 Abs. 5 EStG nur der Anteilseigner erzielen. Steuerlich wird der Vorgang deshalb in zwei Schritte zerlegt: erst eine Ausschüttung an den Gesellschafter, dann eine Schenkung von ihm an den Empfänger. Er versteuert also einen Bezug, obwohl ihm nichts zugeflossen ist, darf die Weitergabe nicht abziehen – und am Ende ist § 7 Abs. 1 Nr. 1 ErbStG zu prüfen. Anders, wenn der Empfänger **selbst beteiligt** ist: Ab 10 % spricht der Anscheinsbeweis für eigene Veranlassung, er versteuert selbst, und die Schenkungsteuer entfällt. Umgekehrt wird die vGA doch dem Mehrheitsgesellschafter zugerechnet, wenn sein Zuwendungswille feststeht und seine Beteiligung ursächlich war – das Unterscheidungsmerkmal der beiden Beispiele ist weniger die Quote als die Frage, **ob ein Gesellschafterbeschluss nötig war**. Bei der **durchgeleiteten vGA** über eine Zwischengesellschaft entsteht auf jeder Stufe eine weitere vGA; übrig bleibt dort genau die Fünf-Prozent-Pauschale – eine dreistufige Kette kostet also dreimal 500 €. Der **Vorteilsausgleich** beseitigt die vGA nur, wenn beide Geschäfte einander bedingen und **im Voraus** vereinbart sind – ein bloß zeitlicher Zusammenhang genügt ausdrücklich nicht, weil der Ausgleich nur funktioniert, wenn beide Vorgänge zu einem einheitlichen, tauschähnlichen Geschäft verschmelzen. Gleichartig müssen die Leistungen nicht sein, wohl aber **gleichwertig**; bleibt ein Nachteil, wird nur er hinzugerechnet. Bei der **Beweislast** gilt Zweierlei nebeneinander: Die Finanzverwaltung muss den Sachverhalt ermitteln, aus dem sich die vGA ergibt – die Gesellschaft aber trägt die objektive Beweislast für die betriebliche Veranlassung ihres Aufwands, und ein verbleibender Zweifel geht zu ihren Lasten. Eine **Rückzahlung** macht die vGA nie rückgängig: Sie ist ein getrennter Vorgang und wird als verdeckte Einlage behandelt – für den Gesellschafter doppelt nachteilig, weil er das Geld zurückgibt und es trotzdem versteuert. Bei der **Schenkungsteuer** hat der BFH 2017 in drei Urteilen an einem Tag die Verwaltungsauffassung gekippt: Zwischen Gesellschaft und Gesellschafter – und auch gegenüber dessen nahe stehender Person – gibt es begrifflich nichts Freigebiges. Zu prüfen bleibt allein die Zuwendung **zwischen** Gesellschafter und nahe stehender Person, und nur insoweit, als der Betrag nicht schon als Beteiligungsertrag versteuert wird. **Damit ist das Kapitel 1 vollständig.** Beim **beherrschenden Gesellschafter** zählt die Stimmrechts-, nicht die Kapitalmehrheit: Eigene und stimmrechtslose Anteile bleiben außen vor, so dass schon 45 % beherrschend sein können – ein Stimmrechtsausschluss nach § 47 Abs. 4 GmbHG dagegen nicht mitzählt. Bei der **AG** greift die Stimmrechtsmehrheit ins Leere, weil über den Vorstandsvertrag allein der weisungsfreie Aufsichtsrat entscheidet; Beherrschung ist also **funktional** zu verstehen. Bei der **Personengruppe** gilt jeder Einzelne als beherrschend, auch der Kleinste – die bloße Angehörigeneigenschaft genügt dafür aber nicht. Die schärfste Regel des Skripts ist dann der **strenge formelle Vergleich**: Schon das Scheitern der Form führt zur vGA, „ungeachtet ihrer Angemessenheit“. Ein marktübliches Gehalt wird also in voller Höhe hinzugerechnet, wenn die Vereinbarung nicht klar, nicht vorher getroffen, nicht zivilrechtlich wirksam oder nicht durchgeführt ist. Die Vergütung muss **allein durch Rechenvorgänge** feststehen – jede Spanne, jeder Gremiumsvorbehalt und jede Abhängigkeit von der „wirtschaftlichen Lage“ ist unklar. Und eine nachträgliche Klarstellung wirkt nur für die Zukunft. In grenzüberschreitenden Fällen sperrt allerdings Art. 9 OECD-MA den formellen Vergleich, weil er nur materielle Abweichungen trägt. Bei der **zivilrechtlichen Wirksamkeit** ist das Skript trotz des strengen Grundsatzes bemerkenswert heilungsfreundlich: Die fehlende Beteiligung der Gesellschafterversammlung heilt eine Genehmigung nach § 184 BGB, die fehlende Befreiung von § 181 BGB die nachgeholte Handelsregistereintragung – und wer nach fachkundigem Rat von der Wirksamkeit ausgehen durfte, löst trotz Unwirksamkeit keine vGA aus. Nur die **qualifizierte Schriftformklausel** sperrt sich selbst gegen jede mündliche Korrektur. Beim **Rückwirkungsverbot** ist das zweite Beispiel der lehrreichste Fall des Kapitels: Dieselbe Vereinbarung vom selben Tag führt für drei Vergütungsbestandteile zu verschiedenen Ergebnissen. Das laufende Gehalt ist unproblematisch, **Weihnachtsgeld und Tantieme** dagegen werden für das ganze Kalenderjahr gezahlt und sind schon anteilig entstanden – 500 € und 2,5 Prozentpunkte sind vGA. Wer eine Sonderzahlung erhöhen will, muss das vor Beginn des Wirtschaftsjahres tun. Und selbst wenn **alle** Arbeitnehmer dieselbe rückwirkende Erhöhung erhalten, bleibt es dabei: Beim beherrschenden Gesellschafter tritt neben das Arbeitsverhältnis immer auch das Gesellschaftsverhältnis. Mit der **tatsächlichen Durchführung** schließt sich der Kreis: Die drei vorangegangenen Abschnitte prüfen den Vertrag auf dem Papier, erst dieser fragt, ob er auch gelebt wird. Unregelmäßige Gehaltszahlungen verstoßen schon für sich gegen das Durchführungsgebot, und zwar auch dann, wenn Lohnsteuer und Sozialabgaben ordnungsgemäß abgeführt werden. Ein **Liquiditätsengpass** rettet nur mit einer fremdvergleichsfesten Stundungsvereinbarung – und beschäftigt die Gesellschaft weitere Arbeitnehmer, müssen sich auch diese auf Stundungen eingelassen haben; hier wirkt der Vergleich mit der Belegschaft also erstmals zugunsten des Gesellschafters, während er beim Rückwirkungsverbot gerade nicht half. Die **Schuldnovation** ist zivilrechtlich möglich, steuerlich aber nur bei besonderer schriftlicher Vereinbarung. Bei **Tantiemen** gilt eine feste Staffel ab der Fälligkeit, die mangels abweichender Vereinbarung erst mit Feststellung des Jahresabschlusses eintritt: bis drei Monate stets unschädlich, drei bis sechs Monate Einzelfall, **regelmäßig** über sechs Monate fehlende Durchführung. Der strenge formelle Vergleich gilt schließlich auch, wenn die vGA einer dem beherrschenden Gesellschafter **nahe stehenden Person** zufließt: Im Beispiel erhält der Sohn als Geschäftsführer eine rückwirkende und ausdrücklich **angemessene** Erhöhung – wer nur die Angemessenheit prüft, kommt zum falschen Ergebnis, denn 4 × 3.000 € = 12.000 € sind allein wegen des Formverstoßes hinzuzurechnen. **Damit ist auch das Kapitel 2 der Quelle vollständig.** Die **Bewertung** (Kapitel 3) knüpft an den bei der Gesellschaft eingetretenen Vermögensnachteil an – bewertet wird also nicht der Vorteil beim Gesellschafter –, und weil dieser Maßstab auch für § 20 Abs. 1 Nr. 1 Satz 2 EStG gilt, laufen beide Ebenen gleich. Der Maßstab hängt an der **Fallgruppe**: Die Vermögensminderung ergibt die Differenz zum angemessenen Entgelt, die verhinderte Vermögensmehrung den gemeinen Wert einschließlich **Gewinnaufschlag** – ein Fallgruppenfehler verdirbt daher die gesamte Bewertung. Bei der **Wohnraumüberlassung** tritt an dessen Stelle die Kostenmiete zuzüglich Gewinnzuschlag, die die Marktmiete regelmäßig deutlich übersteigt; die Marktmiete zählt nur, wenn sich schon mit ihr eine angemessene Rendite absehen lässt. Im **Umsatzsteuer-Exkurs** folgt die Umsatzsteuer der Leistungsrichtung: Bei der verhinderten Vermögensmehrung leistet die Gesellschaft, bei der Vermögensminderung der Gesellschafter. Leistet die Gesellschaft **unentgeltlich**, entsteht eine unentgeltliche Wertabgabe, deren Bemessungsgrundlage der Einkaufspreis ist – die daraus folgende Umsatzsteuer bleibt nach **R 8.6 KStR** abziehbare Betriebsausgabe, weil die vGA bereits brutto mit dem gemeinen Wert angesetzt ist und eine zweite Korrektur über § 10 Nr. 2 KStG denselben Betrag doppelt erfassen würde. Genau hier entsteht die Lücke, um die gestritten wird: Im gemeinen Wert von 150.000 € stecken rechnerisch 23.950 € Umsatzsteuer, tatsächlich angefallen sind nur 19.000 € – die Differenz von **4.950 €** verliert nach der Gegenauffassung beim Anteilseigner über die materielle Korrespondenz die Begünstigung des Teileinkünfteverfahrens. Leistet die Gesellschaft **verbilligt**, greift die Mindestbemessungsgrundlage des § 10 Abs. 5 Nr. 1 UStG und führt zu genau demselben Mindestwert wie die unentgeltliche Wertabgabe – der Unterschied liegt beim Empfänger: Bei der unentgeltlichen Leistung ist der Vorsteuerabzug ausgeschlossen, weil keine Rechnung erteilt werden kann; bei der verbilligten gibt es eine Rechnung, sie ist nur zu **korrigieren**, und bis dahin aktiviert der Empfänger eine Forderung. Leistet umgekehrt der **Gesellschafter** überhöht, bemisst sich die vGA nur nach dem **Nettowert**: Der Gesellschaft fehlt es an der Entreicherung, weil ihr Vorsteueranspruch unverändert bleibt, dem Gesellschafter an der Bereicherung, weil er die Umsatzsteuer abführen muss – hier begrenzt die **Vorteilsgeneigtheit** also nicht das Ob, sondern die Höhe. Der scheinbare Widerspruch zwischen Brutto- und Nettobemessung löst sich über den Maßstab des Abschnitts 3.1: Gibt die Gesellschaft ein Wirtschaftsgut her, verliert sie den vollen Marktwert samt Umsatzsteuer; zahlt sie zu viel, bleibt ihr die Vorsteuer erhalten. **Damit ist auch das Kapitel 3 der Quelle vollständig.** Bei den **Auswirkungen** (Kapitel 4) bleibt die Steuerbilanz unberührt – einzige Ausnahme ist die überteuerte Anschaffung eines Wirtschaftsguts, das mit dem Teilwert auszuweisen ist. Maßgeblich ist die **Gewinnbeeinflussung**, nicht der Abfluss: Im Beispiel wird der Aufwand 2024 hinzugerechnet, der Gesellschafter versteuert aber erst 2025 – beide Ebenen korrespondieren der Höhe nach und laufen zeitlich auseinander; der Abflusszeitpunkt entscheidet nur über die Verwendungsreihenfolge nach § 27 Abs. 1 Satz 3 KStG und über den Zufluss nach § 20 EStG. Ein gesellschaftsrechtlich veranlasster **Passivposten** bleibt in der Bilanz stehen. Übersieht das Finanzamt die vGA und wird die Veranlagung bestandskräftig, ist sie **endgültig** verloren – der Posten darf gerade nicht in einem späteren offenen Jahr ausgebucht werden, um die Hinzurechnung nachzuholen. Genau deshalb führt die Verwaltung bei Pensions- und Tantiemerückstellungen zwei **Teilbeträge** in einer internen, für den Steuerpflichtigen nicht erkennbaren Nebenrechnung: Teilbetrag I ist die vGA, Teilbetrag II die tatsächlich hinzugerechnete – ihre Differenz ist der endgültig unversteuert gebliebene Teil. Auf andere Passivposten lässt sich verzichten, weil sie erfüllt werden und nicht **wegfallen** können. Die beiden Teilbeträge haben dabei eine klare **Arbeitsteilung**: Teilbetrag I arbeitet beim Gesellschafter und bestimmt, wie viel er bei Zufluss als Beteiligungsertrag versteuert; Teilbetrag II arbeitet bei der Gesellschaft und bestimmt, wie viel bei der Auflösung wieder abgezogen werden darf. Der schärfste Satz des Abschnitts: Der Gesellschafter versteuert **unabhängig davon**, ob bei der Gesellschaft hinzugerechnet wurde – dort hilft die Bestandskraft, hier nicht, und die materielle Korrespondenz wirkt sogar verschärfend. Bei der **Auflösung** trennt sich die Spreu vom Weizen erst, wenn der Posten ohne Zahlung wegfällt: Wird die Tantieme einfach ausgezahlt, verschwindet die Rückstellung erfolgsneutral und beide Unterfälle enden gleich. Verzichtet der Gesellschafter auf einen **werthaltigen** Anspruch, liegt eine verdeckte Einlage vor und der Teilbetrag II wird gar nicht gebraucht. Erst beim Verzicht auf den **wertlosen** Anspruch zeigt sich, was das Versäumnis des Finanzamts wert war – dort rettet nur der Teilbetrag II, und beträgt er 0 €, bleibt der Auflösungsertrag steuerpflichtig. Das ist keine Nachholung, sondern die Rückabwicklung des zu Unrecht gebliebenen Abzugs: über beide Jahre ergibt sich null, dem Fiskus entgeht nur der Zinsvorteil. Das **Pensionsbeispiel** zeigt schließlich, dass eine erstmalige Beanstandung nur in die Zukunft wirkt – aufgegriffen werden kann nur die Zuführung des Jahres (12.000 €), während der Gesellschafter später den vollen Teilbetrag I von 62.000 € versteuert. Ist der Passivposten nur **teilweise** veranlasst, treffen zwei Quoten aufeinander, die nichts miteinander zu tun haben: 50 % beschreiben, welcher Teil der Rückstellung von Anfang an gesellschaftsrechtlich veranlasst war (Fremdvergleich), 40 % die Werthaltigkeit im Verzichtszeitpunkt (Bonität). Entscheidend ist die **Reihenfolge** – die Quelle zieht erst die verdeckte Einlage von 40.000 € ab und wendet die Quote dann auf den Rest an, so dass nur 30.000 € statt 50.000 € verrechenbar sind; 20.000 € Teilbetrag II gehen **ungenutzt unter**. Der Teilbetrag I ist bei der Gesellschaft also doch nicht ganz bedeutungslos: Er liefert die Quote. Die **Kapitalertragsteuer** kann bei inländischen Anteilseignern unerhoben bleiben, weil sie nur Erhebungsform ist und im Veranlagungsverfahren ohnehin angerechnet würde; beim ausländischen fehlt genau dieses Verfahren, der Abzug wirkt abgeltend, und § 50d Abs. 1 EStG lässt keinen Verzicht zu. Übernimmt die Gesellschaft die Steuer, entsteht eine **zweite vGA**, die die Bemessungsgrundlage erhöht – die Spirale löst Tz. 183a des BMF-Schreibens rechnerisch auf. Beim **Einlagekonto** gilt ein anderer Zeitpunkt als bei der Hinzurechnung: nicht die Gewinnbeeinflussung, sondern der **Abfluss**. Weil der Bestand auf sämtliche Leistungen des Jahres aufzuteilen ist und die Verwendungsfestschreibung des § 27 Abs. 5 KStG greift, steht für die nachträglich aufgedeckte vGA praktisch kaum je Einlagekonto zur Verfügung. Beim **Gesellschafter** führt die vGA zu Einnahmen nach § 20 Abs. 1 Nr. 1 Satz 2 EStG, und zwischen beiden Besteuerungsebenen besteht ausdrücklich **keine Bindungswirkung** – genau deshalb braucht es die materielle Korrespondenz und § 32a KStG. Beim **beherrschenden** Gesellschafter fließt die vGA bereits bei **Fälligkeit** zu, weil er sich den fälligen Betrag jederzeit auszahlen lassen kann; die Zahlungsfähigkeit ist die logische Grenze dieser Fiktion. Im Beispiel laufen drei Veranlagungszeiträume auseinander: Hinzurechnung 2023 (Gewinnbeeinflussung), Zufluss 2024 (Fälligkeit), Einlagekonto 2025 (Abfluss). Bei Anteilen im **Betriebsvermögen** verschwindet die Zuflussfrage ganz, weil der Betriebsvermögensvergleich gilt. Die drei Besteuerungsregime unterscheiden sich in der Rechtsfolge der Korrespondenz: Beim **Teileinkünfteverfahren** entfällt die 40-prozentige Freistellung, bei der **Abgeltungsteuer** der Sondersteuersatz von 25 % zugunsten des persönlichen Tarifs, bei der **Kapitalgesellschaft** die Steuerfreiheit des § 8b Abs. 1 KStG. Überraschend ist, dass die Korrespondenz dem gewerbesteuerlichen **Schachtelprivileg** ausdrücklich nicht entgegensteht – die Kürzung nach § 9 Nr. 2a oder Nr. 7 GewStG greift also auch dann, wenn die Begünstigung ertragsteuerlich verloren ist; greift sie nicht, führt § 8 Nr. 5 GewStG die vGA in den Gewerbeertrag zurück. Weil jede vGA sich **verbraucht**, ist sie keine zusätzliche Bereicherung, sondern die Umetikettierung eines bereits erfassten Vorgangs – bei der **Vermögensminderung** sind deshalb die bereits versteuerten Einkünfte umzuqualifizieren, und zwar unabhängig davon, ob die materielle Korrespondenz greift. Bei nahe stehenden Personen ziehen sich die Rechtsfolgen auseinander: Versteuern muss der Anteilseigner, mindern darf nur die nahe stehende Person, und die Weitergabe ist nach § 12 Nr. 2 EStG nicht abziehbar. Bei der **verhinderten Vermögensmehrung** scheidet die Umqualifizierung aus, weil der Gesellschafter nur Aufwendungen erspart hat – es gibt keine Einnahme, die sich mindern ließe. An ihre Stelle tritt die **Verbrauchstheorie**: In Höhe der vGA entstehen zusätzliche Anschaffungskosten, Werbungskosten oder Betriebsausgaben. Der Gedanke dahinter ist ein Vergleichsfall – hätte der Gesellschafter das angemessene Entgelt gezahlt und die Gesellschaft es sofort wieder ausgeschüttet, hätte er Aufwand **und** Beteiligungsertrag gehabt; genau das stellt die Theorie her. Weil die Rechtsprechung den Vorgang heute als realen Geschäftsvorfall behandelt, gelten die allgemeinen Abzugsregeln: Beim eigengenutzten Haus scheitert der Abzug an § 12 Nr. 1 EStG. Und § 3c Abs. 2 EStG greift nur bei Zusammenhang mit **Beteiligungserträgen** – fingierte Zinsen für ein vermietetes Haus bleiben voll abziehbar, obwohl der Beteiligungsertrag nur zu 60 % steuerpflichtig ist. Bei **nahe stehenden Personen** hängt alles an einer Frage: Ist der Vorteil in einem **Wirtschaftsgut** verkörpert oder nicht? Beim Wirtschaftsgut wandert ein Vermögenswert mit und bleibt dort als „geschenkte“ Anschaffungskosten sichtbar – im Beispiel genau der volle gemeine Wert von 500.000 €. Beim bloßen **Nutzungsvorteil** wandert nichts Greifbares, sondern nur eine Ersparnis, und die lässt sich nicht aktivieren: Der Anteilseigner versteuert, aber niemand darf abziehen – bei ihr mangels tatsächlicher Aufwendungen, bei ihm wegen § 12 Nr. 2 EStG. Die Einschaltung der Ehefrau kostet im Darlehensbeispiel also bares Geld, während derselbe Fall beim Gesellschafter selbst 10.000 € Werbungskosten ergäbe. **§ 32a Abs. 1 KStG** löst genau das Problem, das die fehlende Bindungswirkung aufwirft: Der Bescheid des Gesellschafters läuft nicht automatisch mit und ist bei Aufdeckung oft längst bestandskräftig. Die Vorschrift schafft dafür eine eigene **Änderungsnorm**, die die §§ 171 ff. AO verdrängt, und eine eigene **Ablaufhemmung** von einem Jahr nach Bestandskraft – lässt die fehlende Bindung aber bestehen. Das ist der Unterschied zur materiellen Korrespondenz: Diese regelt, **wie hoch** besteuert wird, jene nur, **ob noch geändert** werden darf. Sie wirkt in beide Richtungen und verpflichtet das Finanzamt ohne Ermessen – erfasst aber weder den Gewerbesteuermessbetrag (dafür § 35b GewStG) noch nach Auffassung der Quelle die erhöhten Abschreibungen der Folgejahre. Beim **§ 1 AStG** wirkt der Abschnitt zunächst widersprüchlich – es gebe keinen Vorrang, und doch sei die Norm ausgeschlossen, wenn die vGA das zutreffende Einkommen schon erfasst hat. Beides passt zusammen, liest man sie als **Stufen**: § 8 Abs. 3 Satz 2 KStG arbeitet bis zum gemeinen Wert, § 1 AStG darüber hinaus bis zum **Verrechnungspreis**. Stimmen beide Werte überein, läuft die zweite Stufe leer; liegt der Median darunter, schließt § 1 Abs. 1 Satz 4 AStG den Spalt. Im Beispiel: 400.000 € vGA plus 100.000 € nach § 1 AStG – zusammen genau die Differenz zwischen Kaufpreis und Verrechnungspreis, lückenlos und überschneidungsfrei. **Damit ist auch das Kapitel 4 der Quelle vollständig.** Die **Dreiecksfälle** (Kapitel 5) laufen über die Spitze des Dreiecks: Zwischen den Schwestergesellschaften besteht **kein** Gesellschaftsverhältnis, die Veranlassung gibt es nur über den gemeinsamen Gesellschafter – deshalb erst hinauf als vGA, dann hinunter als verdeckte Einlage. Jeder Fall ist in **vier** Schritten zu lösen, und jeder Schritt hat seine eigene Norm. Die **Beteiligungsquote** ist dabei unerheblich, und im Zweifel wird dem gemeinsamen Gesellschafter die vollständige vGA und Einlage zugerechnet – es sei denn, ein ausdrücklicher **Zuwendungswille** an die Mitgesellschafter ist feststellbar. Die erste Fallgruppe, die **verbilligte Lieferung**, führt das Schema vor. Grundfall und Abwandlung unterscheiden sich nur in der Rechtsform der Mutter – und genau daran liest man den Unterschied der Begünstigungsregime ab: Bei der natürlichen Person bleiben **240.000 €** steuerpflichtig, bei der Kapitalgesellschaft nur **20.000 €**, ein Verhältnis von zwölf zu eins; bei den beiden Gesellschaften ändert sich dagegen nichts. Die Zerlegung in Einlage – Erwerb – Ausschüttung, die die Quelle anschließt, ist dabei mehr als eine Erläuterung: Sie ist die **Probe** auf jede Dreiecksfalllösung. Sichtbar wird auch, dass im Dreiecksfall **zwei Bewertungssysteme** aufeinandertreffen, die nichts voneinander wissen: Die abgehende Seite folgt dem vGA-Recht und bewertet mit dem **gemeinen Wert**, die ankommende dem Einlagerecht und bewertet mit dem **Teilwert**. Fallen beide auseinander, bleibt beim Gesellschafter zwangsläufig ein Aufwand – im Maschinenbeispiel 95.000 €, und das ist genau die im gemeinen Wert steckende Umsatzsteuer (500.000 € × 19 %), die mit der tatsächlich angefallenen von 47.500 € nichts zu tun hat. Weder § 10 Nr. 2 KStG noch § 3c Abs. 2 EStG greifen darauf, so dass der Aufwand den steuerpflichtigen Teil von 357.000 € auf 262.000 € drückt. Bei der **überteuerten Lieferung** (5.3) läuft alles in der Gegenrichtung: erst Bilanzberichtigung, dann Hinzurechnung des dadurch entstehenden Aufwands, und der Überpreis fließt als Einlage in die liefernde Schwester. Hier entsteht beim Gesellschafter **kein** Aufwand wie in 5.2 – weil die vGA bei der Vermögensminderung nach Abschnitt 3.2.3 ohnehin nur netto bemessen wird, arbeiten beide Seiten mit Nettowerten und gehen punktgenau auf. Das Maschinenbeispiel ist erkennbar mit denselben Zahlenverhältnissen gebaut wie das aus 5.2, damit der Unterschied sichtbar wird. Bei der A-GmbH bleiben dabei 150.000 € Ertrag stehen – der **angemessene Veräußerungsgewinn**, den sie auch gegenüber einem Fremden erzielt hätte. Die **überteuerte Dienstleistung** (5.4) ist die einfachste Fallgruppe, weil der Vorteil **Geld** ist: keine Bilanzberichtigung, keine Bewertungsfrage, keine Umsatzsteuerdifferenz. Von 200.000 € Zinsertrag bleiben bei der A-GmbH 100.000 € steuerpflichtig, und die B-GmbH darf 100.000 € abziehen – genau das Bild eines fremdüblichen Darlehens. Bemerkenswert: Hier leistet und profitiert **dieselbe** Gesellschaft; wer die Lösung an der Leistungsrichtung aufhängt, kommt durcheinander – maßgeblich ist, wer ärmer und wer reicher geworden ist. Die **verbilligte Dienstleistung** (5.5) fällt aus dem Rahmen: Ein Nutzungsvorteil ist kein Wirtschaftsgut und deshalb **nicht einlagefähig** – bei der bevorteilten Gesellschaft geschieht überhaupt nichts, auch beim Einlagekonto nicht. Stattdessen verbraucht sich die vGA beim Gesellschafter in Betriebsausgaben, die an der Beteiligung an der **bevorteilten** Gesellschaft hängen; Ertrag und Aufwand betreffen also verschiedene Beteiligungen. Das Ergebnis ist überraschend asymmetrisch: Die natürliche Person landet bei 0 €, weil das Teileinkünfteverfahren Ertrag **und** Aufwand auf 60 % kürzt; die Kapitalgesellschaft bei **./. 76.000 €**, weil § 8b Abs. 1 KStG den Ertrag zu 100 % freistellt, der Aufwand aber voll abziehbar bleibt und die Fünf-Prozent-Pauschale nur am Ertrag ansetzt. Im Privatvermögen dagegen bleiben volle 80.000 € stehen, weil § 20 Abs. 9 EStG jeden Abzug sperrt. Das **Korrespondenzprinzip** (5.6) ordnet sich danach, auf welcher Ebene man gerade sitzt: bei der bevorteilten Gesellschaft hilft § 8 Abs. 3 Satz 5 KStG, beim Anteilseigner § 8b Abs. 1 Satz 2 KStG bzw. § 3 Nr. 40d Satz 2 oder § 32d Abs. 2 Nr. 4 EStG. Weder der Grund des Einkommensschadens noch die verfahrensrechtliche Änderbarkeit zählen – das trennt die **materielle** Korrespondenz klar von der formellen des § 32a KStG. Auffällig: Die Einlage wird nachversteuert und wächst **trotzdem** dem Einlagekonto zu, weil § 27 KStG keine Korrespondenz kennt. Die **Rückausnahme** („es sei denn“) macht die Prüfungsreihenfolge zwingend: Zuerst ist zu fragen, ob bei der **leistenden** Gesellschaft überhaupt ein Einkommensschaden eingetreten ist – fehlt er, ist die Sache erledigt, und die Nichtversteuerung beim Gesellschafter spielt keine Rolle mehr. Der Sonderfall ist die **Beteiligungsübertragung**: Weil § 8b Abs. 2 KStG den hinzugerechneten Gewinn sogleich wieder freistellt, bleibt die Hinzurechnung wirkungslos, und sämtliche Korrespondenzregeln laufen leer – auch die **„soweit“-Verknüpfung** beim Gesellschafter, die die Begünstigung nur im Umfang der tatsächlichen Einkommensminderung versagt. Bei der **Korrespondenz an den Einnahmen** löst § 32a Abs. 2 KStG den Konflikt: Wird die vGA nunmehr beim Gesellschafter voll versteuert, entfällt rückwirkend die zweite Voraussetzung des § 8 Abs. 3 Satz 5 KStG, und die Veranlagung der bevorteilten Gesellschaft ist zu korrigieren. Materielle und formelle Korrespondenz greifen damit ineinander: Die eine bestimmt, **was** zu besteuern ist, die andere sorgt dafür, dass der **Bescheid** noch geändert werden kann. Leitgedanke bleibt die **Einmalversteuerung** – taucht der Betrag der vGA am Ende genau einmal in einer Bemessungsgrundlage auf, stimmt die Lösung. Die **Rückausnahme des § 8b Abs. 1 Satz 5 KStG** macht sichtbar, dass die materielle Korrespondenz kein Selbstzweck ist, sondern ein Instrument gegen **weiße Einkünfte**: Ist der Betrag im Ausland bereits erfasst, entfällt der Grund für die Versagung, und ohne die Rückausnahme entstünde die umgekehrte Fehlbesteuerung. Die zweite Voraussetzung ist dabei der eigentliche Auslöser – solange sich die Einkommenserhöhung über § 32a Abs. 2 KStG **zurückdrehen** lässt, muss das geschehen; nur wo ein ausländischer Bescheid nicht nach deutscher Vorschrift änderbar ist, bleibt die Steuerfreiheit als einziges Mittel. Den Nachweis trägt der Steuerpflichtige, etwa durch den ausländischen Steuerbescheid. Das **Schweizer Beispiel** und das **Inlandsbeispiel** betreffen beide die verhinderte Vermögensmehrung und gehen doch entgegengesetzt aus – den Unterschied macht allein, **was** zugewendet wird. Beim Wirtschaftsgut steigt das Einkommen der Erwerberin zunächst nicht, und die spätere Minderabschreibung ist nach Verwaltungsauffassung nur Reflexwirkung; beim **Nutzungsvorteil** schlägt der ersparte Aufwand sofort durch. Deshalb ist der Nutzungsvorteil auch der **einzig denkbare** Inlandsfall: Immer wenn ein Wirtschaftsgut wandert, entsteht eine verdeckte Einlage – und damit greift § 32a Abs. 2 KStG, die zweite Voraussetzung ist nicht erfüllt. Bei **§ 1 AStG im Dreiecksfall** entscheidet eine einzige Frage: Bleibt die Einkünftekorrektur im Inland stehen? Wandert ein Wirtschaftsgut oder Geld, verbraucht sich die vGA in einer **verdeckten Einlage**, die nur die Anschaffungskosten erhöht – die Korrektur bleibt wirksam, § 1 AStG wird nicht gebraucht. Wandert ein **Nutzungsvorteil**, verbraucht sie sich in abziehbarem Aufwand und hebt sich beim Gesellschafter wieder auf; dann verdrängt § 1 AStG die vGA **insgesamt**, und beim Anteilseigner treten überhaupt keine vGA-Folgen mehr ein – anders als in Abschnitt 4.4, wo beide Normen nebeneinanderstanden. Das Nahestehen prüft die Quelle dabei über § 1 Abs. 2 Nr. 3a AStG mit seiner eigenen 25-Prozent-Schwelle. Bei der **Schenkungsteuer** (5.7) ist der Schlüsselsatz, dass § 7 Abs. 8 Satz 1 ErbStG eine **Fiktion** enthält, Satz 2 dagegen den **Bereicherungswillen voraussetzt** – bei nahen Angehörigen wird er widerlegbar unterstellt. Weil Zuwendender die Kapitalgesellschaft ist, zu der nie ein Verwandtschaftsverhältnis besteht, stellt § 15 Abs. 4 ErbStG für die Berechnung auf das persönliche Verhältnis der **Anteilseigner** ab. Bei **beteiligungsidentischen** Gesellschaften scheidet die Steuer aus: Jeder verliert bei der einen genau so viel, wie er bei der anderen gewinnt. Ertragsteuerlich bleibt es gleichwohl bei vGA und verdeckter Einlage – beide Steuern laufen hier auseinander. **Damit ist auch das Kapitel 5 der Quelle vollständig.** Bei der **Pensionszusage** (Kapitel 6) ist zuerst § 6a EStG zu prüfen – und wer das überspringt, rechnet doppelt: Scheitert die Rückstellung schon dort, ist eine vGA **ausgeschlossen**, weil die Bilanzberichtigung die Gewinnminderung bereits innerhalb der Bilanz beseitigt. Erst auf der zweiten Stufe folgen die sechs Kriterien. Drei Altersgrenzen stehen dabei nebeneinander und bedeuten Verschiedenes: **60** ist die Höchstgrenze im **Zusagezeitpunkt** (Erdienbarkeit), **62** die Untergrenze des **Pensionsalters** (Ernsthaftigkeit, vGA dem Grunde nach), **67** dieselbe Untergrenze bei beherrschenden Geschäftsführern (Angemessenheit, vGA der Höhe nach). Der Erdienenszeitraum beträgt zehn Jahre; beim nicht beherrschenden Geschäftsführer genügen drei, wenn er dem Betrieb mindestens zwölf Jahre angehört – weil dort das Rückwirkungsverbot nicht gilt und die abgeleistete Dienstzeit mitzählt. **Warte- und Probezeit** laufen nebeneinander: fünf Jahre für das Unternehmen, zwei bis drei für die Person; bei der eingebrachten Einzelunternehmung entfallen beide. Seit 2010 ist der Verstoß dagegen **endgültig** – die Anwartschaft heilt nicht mehr mit Fristablauf, einziger Ausweg ist Aufhebung und Neuerteilung. Bei der **Unverfallbarkeit** ist nicht sie selbst verboten, sondern nur die **sofortige volle** beim beherrschenden Gesellschafter; hinzuzurechnen ist allein der Differenzbetrag zur ratierlichen Berechnung. Bei der **Angemessenheit** gilt die 75-Prozent-Grenze der Überversorgung, und die fiktive Jahresnettoprämie zählt zwar in die Gesamtausstattung hinein, nicht aber zu den Aktivbezügen – sonst entstünde ein Zirkelschluss. Die Folge hängt an der Art der Zusage: Bei der **entgeltsabhängigen** bleibt die Bilanz unberührt und die vGA entsteht laufend; bei der **Festbetragszusage** und der **Nur-Pension** wird die Rückstellung innerhalb der Bilanz zurückgeführt, und die vGA entsteht erst bei der **Auszahlung**. Darin liegt das durchgehende Muster des Kapitels: Wo die Bilanz korrigiert wird, verdrängt das die vGA – aber nur vorläufig; sie verschwindet nie, sie verschiebt sich nur. Die **Finanzierbarkeit** verlangt eine fiktive Überschuldungsprüfung mit dem **Anwartschaftsbarwert** – geprüft wird also nicht, ob die laufenden Zuführungen tragbar sind, sondern ob die Gesellschaft überlebte, wenn der Versorgungsfall sofort einträte. Eine spätere Krise schadet nicht; schädlich ist erst, wenn eine vertraglich vorgesehene **Anpassung unterbleibt**. Und die Beiträge zur **Rückdeckungsversicherung** sind selbst dann keine vGA, wenn die abgesicherte Zusage eine ist – der Anspruch steht der Gesellschaft zu, es fehlt also an der **Vorteilsgeneigtheit**. Damit endet das Skript nicht zufällig bei einem Merkmal aus dem ersten Kapitel: Das Kapitel 6 ist weniger ein neues Thema als die **Probe** auf alles Vorangegangene."
            quelle={kstTeil4Quelle}
            kapitel={kstTeil4}
            karteKicker={(k) => `Abschnitt ${k.abschnittNr}`}
            gruppeVon={(k) => k.abschnittNr}
            gruppeLabel={(k) => `Abschnitt ${k.abschnittNr}`}
            gruppeAria="Abschnitte"
            gruppeAlle="Alle Abschnitte"
            suchePlatzhalter="Norm, Stichwort oder Beispiel"
          />
        )}
        {ansicht === "teil5" && (
          <KurzskriptBloecke
            kicker="Klausur 2 · Körperschaftsteuer · Lehrgangsunterlage"
            titel="KSt Teil V – Verlustabzug, Zinsschranke, stille Beteiligungen (Hamacher)"
            lead="Das Lehrgangsskript „Körperschaftsteuer, Teil V: Verlustabzug und fortführungsgebundener Verlust (§ 8c, 8d KStG), Zinsschranke (§ 4h EStG, § 8a KStG), Verluste aus stillen Beteiligungen (§ 15 Abs. 4 EStG)“ von Hamacher (21. Auflage, Rechtsstand 05/2025) im Wortlaut – **in Arbeit**. Nach der Aufhebung der ersten Quotenstufe kennt **§ 8c KStG** heute nur noch **eine** Schwelle: mehr als 50 %. Die Faustregel lautet **alles oder nichts** – entweder bleibt der Verlust vollständig erhalten oder er geht vollständig unter, einen quotalen Untergang gibt es nicht mehr. Das BVerfG hatte die frühere Stufe von 25 bis 50 % verworfen, weil dem Erwerber dort die Verfügungsmacht fehlt; genau sie ist der Grund der Norm, denn ab 50 % kann der Mehrheitsgesellschafter den Gesellschaftszweck ändern und die erworbenen Verluste mit Gewinnen aus einer neuen Tätigkeit verrechnen – der **Mantelkauf**. Die aufgehobenen Erwerbe bleiben aber **Zählerwerbe** und können zusammen mit späteren die Schwelle überschreiten. Gemessen wird dabei stets am **gesamten** gezeichneten Kapital, nie an der Beteiligung des Veräußerers – eine der häufigsten Fehlerquellen. Erfasst sind nicht nur Verlustvorträge, sondern auch der **Zinsvortrag** nach § 4h Abs. 1 Satz 5 EStG, der fortführungsgebundene Verlustvortrag (§ 8d KStG bewirkt also keine dauerhafte Immunisierung) und die laufenden unterjährigen Verluste. Über § 10a Satz 10 GewStG schlägt die Norm auch auf den **Gewerbeverlust** durch, und zwar sogar bei Mitunternehmerschaften, an denen eine Kapitalgesellschaft beteiligt ist. Die Steuerfreiheit eines Sanierungsgewinns nach § 3a EStG rettet die Verluste **nicht** – für § 8c KStG gilt die eigene **Sanierungsklausel** des Absatzes 1a, und deren Rechtsfolge geht weiter als erwartet: Der Erwerb wird komplett ausgeblendet und zählt auch für spätere Erwerbe nicht als Zählerwerb. Sie verlangt kumulativ Sanierungsabsicht und Erhalt der Betriebsstrukturen (dort genügt eine von drei Alternativen) und scheitert an einem bereits eingestellten Geschäftsbetrieb oder einem **Branchenwechsel** binnen fünf Jahren – letzterer wirkt über § 175 Abs. 1 Nr. 2 AO rückwirkend. Beim **Erwerberkreis** enden die beiden Personengesellschaftsfälle gleich, laufen aber über entgegengesetzte Wege: Die **vermögensverwaltende** GbR wird ausgeblendet und die Anteile ihren Gesellschaftern zugerechnet (§ 39 Abs. 2 Nr. 2 AO), die **gewerblich geprägte** GmbH & Co. KG ist dagegen selbst der Erwerber – auf ihre Gesellschafter kommt es gar nicht an, und die Konzernklausel hilft nicht. Die Nichttransparenz hat eine unangenehme Kehrseite: Schädlich ist der Vorgang in **beide** Richtungen, sogar die unentgeltliche Übertragung ins Sonderbetriebsvermögen nach § 6 Abs. 5 Satz 3 EStG. Bei den **gleichgerichteten Interessen** hat sich die Lage zugunsten des Steuerpflichtigen bewegt: Der BFH verlangt im Erwerbszeitpunkt konkretisierte, dokumentierte Abreden, und die Verwaltung nimmt sie nicht mehr an, wenn sich die Absprachen nur auf den **Anteilserwerb** beschränken. Die Verlustnutzung ist dabei der Anlass der Norm, aber kein Tatbestandsmerkmal. Der **Erwerbsbegriff** ist weiter als der Normzweck: Weder muss ein neuer Gesellschafter hinzutreten noch der Anteil stimmberechtigt sein. Maßgeblich ist der Übergang des **wirtschaftlichen Eigentums** – der rückwirkende Stichtag des § 2 UmwStG gilt hier **nicht**, was bei Umwandlungen unmittelbar auf die Zahlen durchschlägt. Am härtesten ist der Ausschluss der **Trennungstheorie**: Bei der Übertragung unter Angehörigen macht **jedes** Entgelt, auch ein symbolisches Gleichstellungsgeld, die gesamte Übertragung schädlich. Weil die Prüfung **erwerberbezogen** erfolgt, kann **derselbe** Anteil mehrfach Verluste vernichten – und gibt der Erwerber ihn an den ursprünglichen Veräußerer zurück, gilt auch dieser wieder als Erwerber: Eine Rückabwicklung ist steuerlich keine. Zu den gleichgestellten Vorgängen zählen auch solche **ohne** Anteilsübertragung: der Erwerb eigener Anteile, die Kapitalherabsetzung und sogar bloße **Stimmrechtsbindungen**. Bei **Vorzugsaktien** gilt in jedem der drei Fälle eine andere Bezugsgröße – nur Stammaktien: stimmberechtigtes Kapital; nur Vorzugsaktien: Nennkapital; beides: zwei Quoten, maßgeblich ist die **höhere**, nicht die Summe. Bei **Umwandlungen** gilt jeder Vorgang als Veräußerung und Anschaffung. Die wichtigste Erkenntnis: **Verwässerung wirkt wie Veräußerung** – der bisherige Gesellschafter veräußert nichts und verliert trotzdem seine Mehrheit, weil die Kapitalerhöhung seine Quote von 100 % auf 25 % drückt. Wer eine Verlustgesellschaft durch eine Sacheinlage stärken will, vernichtet dabei ihre Verluste. Maßgeblich ist die **Handelsregistereintragung**, nicht der Rückwirkungsstichtag – der Untergang tritt also ein Jahr später ein, als man denkt. Nur der **Formwechsel** bleibt folgenlos, weil zivilrechtlich kein Vermögen übergeht. §§ 4 Abs. 2 Satz 2 und 15 Abs. 3 UmwStG gehen vor, betreffen aber den Verlust der **übertragenden** Gesellschaft und stehen deshalb nur scheinbar in Konkurrenz. Bei der **Kapitalerhöhung** zeigt der Vergleich mit dem Umwandlungsfall den lehrreichsten Kontrast des Kapitels: Beide enden bei **75 %** und doch entgegengesetzt – dort erwarb A aus dem Nichts 75 %, hier wächst B von 50 % auf 75 % und erwirbt damit nur **25 Prozentpunkte**. Gemessen wird also nicht die neue Quote, sondern ihr **Zuwachs**. Auch die interne Kapitalerhöhung durch Rücklagenumwandlung zählt, sofern sie disquotal erfolgt. Beim **mittelbaren Erwerb** ist jede Veränderung oberhalb der Verlustgesellschaft zu prüfen – **auch wenn sich bei ihr selbst gar nichts ändert**; Rechtsform und Ansässigkeit der Zwischengesellschaft sind gleichgültig. Maßgeblich ist die **durchgerechnete** Quote, was in beide Richtungen wirkt: Aus 80 % werden über zwei Stufen 57,6 %, je länger die Kette, desto eher bleibt eine tiefer liegende Gesellschaft verschont. Die **Konzernklausel** ist keine Billigkeitsregel, sondern die teleologische Korrektur einer zu weit geratenen Typisierung: Unschädlich ist der Erwerb, weil ausgeschlossen ist, dass an den Verlusten eine **fremde Person** partizipiert. Sie arbeitet mit **zwei** leicht zu verwechselnden Quoten – die 100 % betreffen das Verhältnis Erwerber zu **Veräußerin**, die Beteiligung an der Verlustgesellschaft selbst darf darunter liegen. Erwerber kann auch eine Personenhandelsgesellschaft sein (KG, OHG – nicht GbR), eine bloße **Personengruppe** dagegen nicht. Die drei Fallgruppen lassen sich als drei **Richtungen** merken: **Nr. 1** aufwärts (der Erwerber muss zu 100 % an der Veräußerin beteiligt sein), **Nr. 2** abwärts (spiegelbildlich der Veräußerer am Erwerber), **Nr. 3** seitwärts – dort braucht es eine dritte Ebene darüber, die **Zurechnungsebene** als Klammer. In allen drei Fällen gilt dieselbe Asymmetrie: **100 % innerhalb** der Konzernbeziehung, beliebig wenig an der Verlustgesellschaft. Dass sogar eine **börsennotierte** AG Erwerberin sein kann, löst sich auf, weil ihre Aktionäre schon vorher mittelbar beteiligt waren – geprüft wird nicht die Struktur oberhalb des Erwerbers. Eine **Holding-Personengesellschaft** kann die Klausel überhaupt erst eröffnen, wo mehrere natürliche Personen sie blockieren würden. Die **Rechtsfolge** wirkt in drei Richtungen: Der begünstigte Erwerb ist selbst unschädlich, zählt nicht als Zählerwerb und beeinflusst auch **vorangegangene** Erwerbe nicht – und er löst den Fünfjahreszeitraum gar nicht erst aus. Im Beispiel hält die C-GmbH am Ende **87 %** an der Verlustgesellschaft, für § 8c KStG zählen aber nur **27 %**. Weil jeder Erwerb **getrennt** zu prüfen ist und jeder Zählerwerb seine eigene Frist hat, empfiehlt sich eine Tabelle mit einer Zeile je Erwerb statt einer Gesamtbetrachtung. Beim **Fünfjahreszeitraum** löst jeder Zählerwerb einen **eigenen** Zeitraum aus, so dass mehrere gleichzeitig laufen – wer mit nur einem Zeitfenster rechnet, kommt falsch heraus. Die Abwandlung des zweiten Beispiels zeigt die Tragweite: Derselbe Erwerb von 30 % ist am 04.03.2023 schädlich (55 %) und am 31.12.2023 folgenlos. Im dritten Beispiel ergeben sich genau **50 %** – und weil die Norm **mehr als** 50 % verlangt, bleibt der Verlust erhalten; die Quelle nennt die Zahl, zieht die Folgerung aber nicht ausdrücklich. Unangenehm ist, dass Erwerbe auch zu **Gewinnzeiten** zählen: Wer einen Anteil an einer gesunden Gesellschaft erwirbt, sammelt einen Zählerwerb an, der Jahre später den Untergang mit auslöst. Die **Verschonungsgrenze** ist wie die Konzernklausel eine teleologische Korrektur: Ein Mantelkauf liegt nur vor, wenn dem Anteil ein Verlustpotential anhaftet, er **darüber hinaus aber wertlos** ist. Die Formel „gemeiner Wert abzüglich steuerliches Eigenkapital“ ist bewusst grob und erfasst auch einen selbst geschaffenen Firmenwert. Zu beachten ist die **Hochrechnung** auf 100 % – weil der Verlust vollständig untergeht, werden ihm die stillen Reserven der ganzen Gesellschaft gegenübergestellt. Die Verrechnungsreihenfolge ist dabei ungünstig: Die Reserven verschonen **vorrangig den laufenden Verlust**, der ohnehin verrechenbar gewesen wäre, und erst ein Überhang rettet den Verlustvortrag. Bei einem Erwerb unter 100 % ist der gemeine Wert auf **100 %** **hochzurechnen**, weil der Verlust ohnehin vollständig untergeht. Ist das Eigenkapital **negativ**, versagt die Vereinfachung des Satzes 6 vollständig: Sie erzeugte allein aus dem Minus rechnerische stille Reserven – bei einem Eigenkapital von ./. 5.000.000 € und einem symbolischen Kaufpreis von 1 € wären das rund 5.000.000 €, ohne dass auch nur ein Euro davon tatsächlich vorhanden sein müsste. § 8c Abs. 1 Satz 7 KStG tauscht deshalb die Ausgangsgröße aus: **nicht der Anteil, sondern das Betriebsvermögen** – um den Preis einer vollständigen **Unternehmensbewertung**, denn der Kaufpreis taugt nun nicht mehr als Anknüpfungspunkt. Der typische Fall ist die Sanierung, in der das Negativkapital auf **Gesellschafterdarlehen** beruht und der Altgesellschafter beim Verkauf darauf verzichtet. Berücksichtigt werden zudem nur die **im Inland steuerpflichtigen** stillen Reserven – die Fortsetzung des Verschonungsgedankens: Was im Inland nicht besteuert werden kann, braucht dort auch keinen Verlust. Auszuscheiden sind DBA-Betriebsvermögen, **§ 8b-Abs.-2-Beteiligungen** und – dies nur für die Gewerbesteuer – die stillen Reserven eines **Mitunternehmeranteils**, weil die Personengesellschaft selbst gewerbesteuerpflichtig ist und ihre Reserven nur ihren eigenen Gewerbeverlust verschonen. Damit können die Verschonungsrechnungen für Körperschaft- und Gewerbesteuer **auseinanderfallen**. Im Beispiel kostet eine einzige Beteiligung 400.000 € Verschonungsvolumen: aus 6.000.000 € werden 5.600.000 €. Eine naheliegende Gestaltung sperrt § 8c Abs. 1 Satz 8 KStG: Wer nach dem schädlichen Erwerb eine werthaltige Gesellschaft **rückwirkend** auf die Verlustgesellschaft verschmilzt, erzeugt damit keine stillen Reserven zum Stichtag – die Rückwirkung des § 2 Abs. 1 UmwStG gilt für § 8c KStG auch hier **nicht**. Beim **Zinsvortrag** entscheidet die Reihenfolge: Die stillen Reserven verschonen **zuerst** den Verlust, und nur ein Überhang rettet den Zinsvortrag – deshalb nennt die Quelle diese Verschonung selbst „eher theoretisch“; im Beispiel bleiben von 5.000.000 € gerade 2.000.000 € erhalten. Der **EBITDA-Vortrag** wird nach dem Wortlaut des § 8a Abs. 1 Satz 3 KStG dagegen gar nicht erfasst. Bei der **Verlustkürzung** ist zunächst die maßgebliche Größe zu beachten: der negative **Gesamtbetrag der Einkünfte**, ausdrücklich **nicht** der bilanzielle Verlust – zwischen beiden liegen sämtliche außerbilanziellen Korrekturen. Die Kürzung ist **verbindlich** in der Verlustfeststellung des Erwerbsjahres zu entscheiden und kann später **nicht nachgeholt** werden; wird die Feststellung bestandskräftig, wirkt das in beide Richtungen. Erfasst werden zwei Größen an zwei verschiedenen Stellen: der **Verlustvortrag** durch Kürzung in der Feststellung, der **laufende Verlust** durch Hinzurechnung im Einkommen (R 7.1 Zeile 34) – wer nur auf die Feststellung schaut, findet den zweiten Betrag nicht wieder. Beim Erwerb **mit Ablauf** des Wirtschaftsjahres verschonen die stillen Reserven zuerst den laufenden Verlust, erst der Überhang den Vortrag. Erzielt die Gesellschaft dagegen einen **Gewinn**, gilt eine günstige Reihenfolge: Der Vortrag wird erst nach § 10d Abs. 2 EStG verrechnet (1.000.000 € + 70 % des Überhangs) und **danach** gekürzt. Beide Beispiele enden bei 5.000.000 € – gerettet wird jeweils in Höhe der stillen Reserven, nur mit unterschiedlichem Ansatzpunkt. Beim **unterjährigen** Erwerb kommt zum Vortrag der bis zum Stichtag aufgelaufene Verlust hinzu, punktgenau zu bestimmen durch **Zwischenabschluss und Zwischeneinkommensermittlung**; eine Schätzung über betriebswirtschaftliche Auswertung oder zeitanteilige Aufteilung bleibt dem **Ausnahmefall** vorbehalten. Die schnellste Kontrolle solcher Aufgaben ist der Vergleich der Endbestände: 4.700.000 € ./. 2.700.000 € = 2.000.000 € – genau die stillen Reserven. Der Ausschluss des **Verlustrücktrags** beruht allein auf dem BMF-Schreiben und liegt dem BFH unter **I R 1/23** zur Entscheidung vor. Ein unterjähriger **Gewinn** wirkt umgekehrt: Er wird mit dem Verlustvortrag verrechnet, und zwar **ohne** die Schranken des § 10d Abs. 2 EStG – nur der Überhang unterliegt der Kürzung. Das ist die für den Steuerpflichtigen wichtigste Aussage des Abschnitts und folgt nicht aus dem Gesetz, sondern aus Tz. 34 des BMF-Schreibens; der Grund liegt darin, dass die Mindestbesteuerung den Verlustabzug **strecken** und nicht vernichten soll. Unerheblich ist dabei das **Jahresergebnis**: In der bewusst paradoxen Variante b) werden bis zum 01.03. 6.000.000 € verdient, im ganzen Jahr aber nur 4.000.000 € – verschont werden gleichwohl 6.000.000 €. Daraus folgt eine Gestaltungschance: Ein Erwerb nach einem gewinnstarken Zwischenabschluss rettet Volumen, das bei Jahresbetrachtung verloren wäre. Die beiden Fallgruppen bilden ein Gegensatzpaar – der unterjährige Verlust wird **mit erfasst**, der unterjährige Gewinn **verrechnet**; derselbe Zwischenabschluss dient also einmal dem Ziel eines möglichst kleinen, einmal dem eines möglichst großen Zwischenbetrags. Treffen Gewinn und stille Reserven zusammen, gilt eine zwingende Reihenfolge: erst unterjährige Verrechnung, dann Verschonung des Überhangs, zuletzt Nutzung des Verschonten nach § 10d Abs. 2 EStG. In der Abwandlung der Variante a) geht die Rechnung der Quelle nicht auf – sie übernimmt die Begrenzung des Grundfalls, obwohl nach der Kürzung 4.200.000 € statt 3.000.000 € zur Verfügung stehen; die eigene Rechnung führt zu 3.100.000 € Abzug, 900.000 € zvE und 1.100.000 € Endbestand. Der Text der Quelle steht unverändert daneben. Beim **abweichenden Wirtschaftsjahr** entsteht ein **Zeitversatz**: Der Verlust wird zum Ende des Veranlagungszeitraums festgestellt, der Erwerb wirkt aber auf einen Zeitpunkt im Wirtschaftsjahr. Liegt er nach Ablauf des Verlustjahres, aber noch im selben Veranlagungszeitraum, kennt die Feststellung nur das alte Wirtschaftsjahr und wiese den ungekürzten Verlust aus – Tz. 36 des BMF-Schreibens zieht die Kürzung deshalb **vor**, notfalls **vorläufig** nach § 165 Abs. 1 Nr. 1 AO, weil das maßgebliche Zwischenergebnis des Folgejahres noch aussteht. Die beiden Beispiele unterscheiden sich nur im **Vorzeichen** des Folgejahres und laufen entgegengesetzt: Der unterjährige **Gewinn** rettet 3.000.000 €, so dass nur 7.000.000 € gekürzt werden; der unterjährige **Verlust** vergrößert den Schaden, der Vortrag geht vollständig unter und 3.000.000 € werden zusätzlich hinzugerechnet. Ein einziger Erwerbsvorgang wirkt dann in **zwei** Veranlagungszeiträumen – 10.000.000 € in der Feststellung 2025, 3.000.000 € im Einkommen 2026 –, während das Einkommen 2025 unberührt bleibt, weil es allein vom alten Wirtschaftsjahr abhängt. Die **Organschaftsfälle** verweist die Quelle auf das Skript Teil VI. Damit ist Kapitel 1 vollständig. **§ 8d KStG** gilt für schädliche Erwerbe **nach dem 31.12.2015**, wobei frühere **Zählerwerbe** mitzählen. § 34 Abs. 6a Satz 1 KStG sperrt die Norm zusätzlich, wenn der Geschäftsbetrieb **vor** dem 01.01.2016 eingestellt oder ruhend gestellt war – die Vorschrift schaut also **weiter zurück** als § 8d KStG selbst und verhindert die Wiederbelebung alter Mäntel. Ihre Rechtsfolge ist **teilbar**: Betroffen sind nur die vor 2016 entstandenen **Altverluste**, so dass ein Erwerb den Verlust in zwei Teile zerlegt. Entscheidend ist der unterschiedliche **Bemessungszeitpunkt**, den die Quelle nur in einer Klammer erwähnt: § 8c KStG erfasst den Verlust **im Erwerbszeitpunkt**, § 8d KStG den zum **Ende des Wirtschaftsjahres** – im Beispiel 13.000.000 € gegenüber 16.000.000 €. Der **Antrag** setzt einen dem Grunde nach schädlichen Erwerb voraus: **Konzernklausel**, Angehörigenerwerb nach § 15 AO und **Sanierungsklausel** schließen § 8d KStG aus, weil dort schon kein schädlicher Erwerb vorliegt – wer sich darauf stützen kann, steht sogar besser, weil sein Verlust nicht fortführungsgebunden wird. Die **Verschonungsregelung** dagegen lässt den Erwerb schädlich und § 8d KStG anwendbar, wird durch ihn aber **verdrängt**: Ein Nebeneinander beider Begünstigungen gibt es nicht, weshalb vor dem Antrag zu rechnen ist. Gestellt wird er in der **Steuererklärung**, praktisch aber bis zur **Unanfechtbarkeit** – auch noch, wenn erst eine **Betriebsprüfung** den Erwerb aufdeckt; die Rücknahme verlangt eine berichtigte Erklärung. Über § 10a Sätze 11 und 12 GewStG wirkt der Antrag **einheitlich** auch gewerbesteuerlich; nur für einen abweichenden gewerbesteuerlichen Fehlbetrag ist ein eigener Antrag nötig. Der **Betrachtungszeitraum** besteht aus zwei Fenstern mit gleichem Beginn: **Zeitraum A** vom Beginn des dritten vorangegangenen Veranlagungszeitraums (bei Erwerb 2025 also dem 01.01.2022) bis zum Erwerb prüft **denselben Geschäftsbetrieb**, **Zeitraum B** bis zum Ende des Erwerbsjahres prüft die **schädlichen Ereignisse** – zusammen vier Veranlagungszeiträume. Für die Gründung zählt der **Abschluss des Gesellschaftsvertrags**, also der Beginn der Vorgesellschaft, nicht die Eintragung. Ein **Wechsel** des Geschäftsbetriebs vor dem Zeitraum ist unschädlich, spaltet den Verlust aber: Was der frühere Betrieb erwirtschaftet hat, geht nach § 8c KStG unter – in der Abwandlung 1.000.000 € von 1.300.000 €, so dass nur die vier Jahresverluste des Autohandels von zusammen 400.000 € fortführungsgebunden bleiben. Die **Aufteilung** trägt der Steuerpflichtige; bei den **stillen Reserven** gilt umgekehrt die günstige Vermutung, dass sie zum fortgeführten Betrieb gehören. Den **Geschäftsbetrieb** bestimmen vier **qualitative** Merkmale – Produkte, Kunden- und Lieferantenkreis, Märkte, Qualifikation der Arbeitnehmer –, entlehnt der gewerbesteuerlichen **Unternehmensidentität**. Sie sind durch „insbesondere“ nicht abschließend, ohne Rangfolge und ohne Mindestzahl; verlangt ist eine **Gesamtbetrachtung**, weshalb in der Klausur die Abwägung zählt, nicht das Ergebnis. Bloßes **Wachstum** ändert den Geschäftsbetrieb nicht, weil die mitschwingende quantitative Komponente nicht ausschlaggebend sein darf. **Mehrere** Geschäftsbetriebe schließen § 8d KStG von vornherein aus – eine Härte gerade für mittelständische Gesellschaften mit zwei Standbeinen. Es helfen nur zwei enge Ausnahmen: der **einheitliche Geschäftsbetrieb**, der einen **gegenseitigen** Förder- und Sachzusammenhang verlangt (gemeinsame Marke, Produkte, Kundenkreis – nicht dagegen bloß gemeinsame Buchführung oder Verwaltung), und die wirtschaftlich **geringfügige** Betätigung. Die beiden Beispiele zum einheitlichen Geschäftsbetrieb zeigen, dass nicht die **Art** der Tätigkeit entscheidet, sondern ihre **Verflechtung**: Die Kfz-Werkstatt lebt von den Kunden des Autohauses und teilt dessen Standort, die Waschanlage steht 60 Kilometer entfernt. Im ersten Fall sind die Unterschiede nach § 8d Abs. 1 Satz 4 KStG sogar ausdrücklich „gegeben“ und werden vom Förder- und Sachzusammenhang **überlagert** – erst die vier Merkmale prüfen, dann den Zusammenhang, der das Ergebnis umstoßen kann. **Geringfügig** ist ein zweiter Betrieb bis **3 %** der Nettoumsätze und höchstens **24.500 €** – Werte, die der Rechtsprechung zur **Abfärbetheorie** entlehnt sind und allein auf Verwaltungsauffassung beruhen; die Grenzen gelten **kumulativ**. Geprüft wird in **jedem** Jahr, ein einziges Überschreiten ist schädlich, und im Nachbetrachtungszeitraum entsteht daraus ein **weiterer Geschäftsbetrieb** nach § 8d Abs. 2 Satz 2 Nr. 3 KStG: Die Begünstigung erkauft sich der Steuerpflichtige mit der Pflicht, einen Geschäftsbereich dauerhaft klein zu halten. Die beiden **weiteren Einschränkungen** des § 8d Abs. 1 Satz 2 KStG wirken völlig verschieden. **Nr. 1** (Einstellung oder Ruhendstellung) greift nur der **Höhe** nach – im Beispiel bleiben 10.000.000 € von 14.000.000 € erhalten, die Altverluste gehen nach § 8c KStG unter. **Nr. 2** (Organträger oder Mitunternehmer im Betrachtungszeitraum) schließt § 8d KStG dagegen dem **Grunde** nach vollständig aus, weil der Verlust dann Bestandteile eines fremden Tätigkeitsbereichs enthält, der als eigener Geschäftsbetrieb gilt. Eine rückwirkende Beseitigung der Organschaft – etwa durch einen **Durchführungsmangel** – oder eine rückwirkende Einbringung nach § 20 UmwStG rettet § 8d KStG, sofern sie auf einen Zeitpunkt **vor Beginn** des Betrachtungszeitraums wirkt. Die Rechtsfolgen des § 8d KStG, die schädlichen Ereignisse, die Zinsschranke und die stillen Beteiligungen folgen nach demselben Verfahren."
            quelle={kstTeil5Quelle}
            kapitel={kstTeil5}
            karteKicker={(k) => `Abschnitt ${k.abschnittNr}`}
            gruppeVon={(k) => k.abschnittNr}
            gruppeLabel={(k) => `Abschnitt ${k.abschnittNr}`}
            gruppeAria="Abschnitte"
            gruppeAlle="Alle Abschnitte"
            suchePlatzhalter="Norm, Stichwort oder Beispiel"
          />
        )}
        {ansicht === "kurzskript" && (
          <KurzskriptBloecke
            kicker="Klausur 2 · Körperschaftsteuer · Kurz-Skript"
            titel="KSt-Kurz-Skript (Breier)"
            lead="Das Lehrgangsskript von Ulrich Breier im Wortlaut. Erfasst sind Teil 1 (Steuerpflicht und Steuerbefreiungen), Teil 2 (Grundsätze der Einkommensermittlung), Teil 3 (verdeckte Einlagen und steuerliches Einlagekonto) und der Anfang von Teil 4 (Ausschüttungen und Beteiligungen) bis zu der Stelle, an der die Textausgabe der Quelldatei abbricht. Die Teile 5 bis 10 liegen noch nicht lesbar vor und sind in docs/offene-quellen.md vermerkt."
            quelle={kstKurzskriptQuelle}
            kapitel={kstKurzskript}
            karteKicker={(k) => `${k.teilLabel} · Abschnitt ${k.kapitel}`}
            gruppeVon={(k) => k.teil}
            gruppeLabel={(k) => k.teilLabel}
            gruppeAria="Teile"
            gruppeAlle="Alle Teile"
            suchePlatzhalter="Norm, Stichwort oder Betrag"
          />
        )}
        {ansicht === "uebungsfaelle" && (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Körperschaftsteuer · Übungsfälle"
            titel="KSt-Übungsfälle (Nöthen)"
            lead="Die Übungsfälle des Lehrgangs im Wortlaut – Sachverhalt, Aufgabenstellung und Bearbeitungshinweise. Ein Lösungsteil liegt im freigegebenen Ordner nicht vor; er wird nachgetragen, sobald er da ist."
            quelle={kstUebungsfaelleQuelle}
            hausaufgaben={kstUebungsfaelle}
            gruppeVon={(fall) => fall.teil}
            gruppeLabel={(fall) => fall.teilLabel}
            gruppeAria="Teile"
            karteKicker={(fall) => `${fall.teilLabel} · ${fall.rechtsstand}`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Fälle"
            einheitEinzahl="Fall"
          />
        )}
        {ansicht === "uebungsklausur" && (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Körperschaftsteuer · Übungsklausur"
            titel="KSt-Übungsklausur (Breier)"
            lead="Die Übungsklausur im Fachgebiet Körperschaftsteuer (Breier/Wenger, Rechtsstand 2025, 6 Stunden, 100 Punkte) mit ihren vier Sachverhalten: A-GmbH über dreizehn Textziffern, Theaterverein, Teilwertabschreibung auf ein Gesellschafterdarlehen und K-GmbH mit Rangrücktritt und Besserungsschein. Sachverhalt, Aufgabenstellung und Musterlösung stehen im Wortlaut."
            quelle={estKlausurenQuelle}
            hausaufgaben={KST_UEBUNGSKLAUSUR}
            gruppeVon={(eintrag) => eintrag.klausur}
            gruppeLabel={(eintrag) => eintrag.klausurLabel}
            gruppeAria="Klausuren"
            karteKicker={(eintrag) => `Sachverhalt ${eintrag.teil} · ${eintrag.bearbeitungszeit} · ${eintrag.punkte} Punkte`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Sachverhalte"
            einheitEinzahl="Sachverhalt"
          />
        )}
        {ansicht === "pruefungsklausuren" && (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Körperschaftsteuer · amtliche Prüfungsaufgaben"
            titel="Prüfungsklausuren im Original – ohne Musterlösung"
            lead="Der Körperschaftsteuerteil des zweiten Prüfungstages im amtlichen Wortlaut – kein fortgeschriebener Rechtsstand, keine Bearbeitung, die Jahreszahlen des Originaljahrgangs. Eingepflegt sind die Prüfungen **2021/2022** (Veranlagungszeitraum 2020, ohne Punkteangabe in der Quelle) und **2022/2023** (Veranlagungszeitraum 2021, zwei Sachverhalte mit 28 und 4 von 100 Wertungspunkten). **Zu dieser Aufgabe enthält die Quelle keine Lösung**, und es wird hier ausdrücklich keine erfunden; der Eintrag sagt das offen, hält fest, was die Aufgabenstellung selbst vorgibt, und verweist auf die Stellen im Campus, an denen dieselben Rechtsfragen mit vollständiger Musterlösung stehen. Die TIP-AG ist der umfangreichste Teil des Prüfungstages: fünf Einzelsachverhalte, die alle auf dieselbe Schlussrechnung zulaufen – nichtabziehbare Aufwendungen von Vorauszahlungen bis zu Hinterziehungszinsen und Aufsichtsratvergütungen; eine 5-prozentige Beteiligung, die im Juni gekauft, im Juli mit einer bereits beschlossenen Ausschüttung bedient und im November mit 100.000 € Gewinn wieder verkauft wird; ein Darlehen an die GmbH des Mehrheitsaktionärs zu 10 % statt fremdüblichen 4 %, bei dem beide anderen Bescheide schon bestandskräftig sind; eine Organschaft seit 2012 mit 34.000 € Ausgleichszahlung, einer 120.000-€-Rücklage aus 2019 und einer Veräußerung mit Nutzen- und Lastenübergang am 31.12.2020 um 24 Uhr; und eine GmbH & Co. KG, deren Komplementärin keine Haftungsvergütung erhält, obwohl 10.000 € fremdüblich wären. Zu entwickeln sind zwei Veranlagungen: erst die der Organgesellschaft samt dem nach § 14 Abs. 5 KStG festzustellenden Einkommen, dann die der Organträgerin. Aus dem Jahrgang 2022/2023 kommen zwei sehr ungleiche Sachverhalte hinzu. Die Restaurant-GmbH (28 Punkte) ist der punktstärkste Aufgabenteil ihres Prüfungstages: Eine Sacheinlage aus dem Jahr 2019 wurde mit dem historischen Anschaffungswert von 160.000 € statt dem gemeinen Wert von 650.000 € gebucht und ist ausdrücklich mit zu prüfen, obwohl der Anteil erst 2021 für 760.000 € verkauft wird. Dazu eine Ausgleichszahlung nach § 304 AktG, ein Darlehen der Tochtergesellschaft zu 2 % statt fremdüblichen 5 %, ein rückwirkend erhöhtes Geschäftsführergehalt mit erstmals zugesagtem Weihnachtsgeld, ein Bürogebäude ohne Aufteilung und ohne AfA, das an eine KG vermietet ist, deren Kommanditanteil dieselbe GmbH acht Monate später erwirbt – mit einem Verlustanteil, der das Kapitalkonto ins Negative zieht –, und eine Vorabausschüttung mit verspätet abgeführter Kapitalertragsteuer. Der THEATER-Verein (4 Punkte) ist demgegenüber der kürzeste Aufgabenteil der ganzen Prüfung: sechs Zahlen, ein Einnahmenüberschuss von 10.000 € – und die Frage, welche Position in welchen Tätigkeitsbereich gehört. Hier ist zur persönlichen Körperschaftsteuerpflicht ausdrücklich Stellung zu nehmen, während sie im ersten Sachverhalt desselben Aufgabenteils ebenso ausdrücklich ausgenommen ist."
            quelle={k2PruefungsklausurenQuelle}
            hausaufgaben={k2Pruefungsklausuren.filter((e) => e.fach === "kst")}
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
            kicker="Klausur 2 · Körperschaftsteuer · Original-Prüfungsklausuren"
            titel="KSt-Originalklausuren der Steuerberaterprüfung"
            lead="Die Original-Prüfungsaufgaben aus dem Gebiet der Körperschaftsteuer mit den Lösungshinweisen des Lehrgangs („Körperschaftsteuer, Umwandlungssteuerrecht und Gewerbesteuer · Steuerberaterprüfungen 2011 – 2015“, Rechtsstand 2025, Bearbeiter RA/StB Ulrich Breier) – Sachverhalt, Aufgabenstellung und Musterlösung im Wortlaut, mit den Randpunkten der Quelle. Die Klausuren sind auf den Rechtsstand zum 31.12.2025 fortgeschrieben und spielen im Veranlagungszeitraum 2025; die Jahreszahl im Titel bezeichnet den Prüfungsjahrgang. Eingepflegt sind alle fünf Prüfungen 2011 bis 2015 des Bandes. Die Prüfung 2011 (A-GmbH, 35 Punkte): eine Einkommensermittlung, in der von sieben Kostenpositionen einer Sachkapitalerhöhung genau eine – 285 € für die Beurkundung der Übernahmeerklärung des Gesellschafters – eine verdeckte Gewinnausschüttung auslöst und derselbe Vorgang das steuerliche Einlagekonto zugleich um 10.000 € erhöht und um 285 € mindert. Dazu eine Organschaft im ersten Jahr, in der die Ausschüttung vororganschaftlicher Gewinne den allgemeinen Regeln folgt, die Bruttomethode des § 15 KStG die Dividende der Organgesellschaft erst beim Organträger korrigiert, eine Ausgleichszahlung von 17.000 € gleich zweimal wirkt und eine Minderabführung nach der Einlagelösung des § 14 Abs. 4 KStG innerbilanziell erhöht und außerbilanziell wieder neutralisiert wird. Die Prüfung 2012 (A-UG, 40 Punkte) beginnt mit einer Rückrechnung: Der Jahresüberschuss steht nirgends im Sachverhalt und ist nur über die gesetzliche Rücklage der Unternehmergesellschaft zu erschließen (§ 5a Abs. 3 GmbHG – 7.500 € Zuführung sind ein Viertel, also 30.000 €). Danach das Nachholverbot des § 6a Abs. 4 EStG, das die vergessene Pensionsrückstellung auf 2.000 € begrenzt, während der Rückdeckungsanspruch mit vollen 6.500 € nachzuholen ist; ausländische Einkünfte aus einem Staat ohne DBA, bei denen dieselbe Frage dreimal anders beantwortet wird; ein beherrschender Gesellschafter, bei dem das Rückwirkungsverbot ausnahmsweise nicht greift, weil nur die Vertretung unwirksam war und § 184 BGB rückwirkend heilt; eine Spende, die zugleich verdeckte Gewinnausschüttung ist und sich bei der Bewertung auf zwei Vorschriften aufteilt; und eine Aufwärtsverschmelzung, bei der ausnahmsweise der **gemeine Wert** günstiger ist als der Buchwert, weil nur so der Verlustvortrag von 70.000 € überhaupt genutzt wird. Die Prüfung 2013 (Invest-Deutschland Ltda, 33 Punkte) verlässt die unbeschränkte Steuerpflicht: Eine brasilianische Gesellschaft kann – anders als eine inländische Kapitalgesellschaft – alle Einkunftsarten des EStG haben, weil § 8 Abs. 2 KStG für sie nicht gilt. Daran hängt alles: Eine einzige Kapitalherabsetzung zerfällt nach § 28 Abs. 2 KStG in eine abgeltend besteuerte Gewinnausschüttung aus dem Sonderausweis und einen nach § 17 Abs. 4 EStG zu ermittelnden Veräußerungsgewinn, der über § 8b Abs. 2 KStG steuerfrei bleibt – und zwar ohne die Fünf-Prozent-Pauschale, weil es an einer inländischen Betriebsstätte fehlt. Dieselbe fehlende Betriebsstätte lässt auch die Gewerbesteuer vollständig entfallen und macht die Kapitalertragsteuer abgeltend – wofür § 44a Abs. 9 EStG zwei Fünftel erstattet. Dazu unentgeltlich gelieferte Fenster, die gleichzeitig Betriebsausgabe bei der Vermietung und Einnahme aus verdeckter Gewinnausschüttung sind. Die Prüfung 2014 (43 Punkte) besteht aus zwei Sachverhalten. Der erste stellt dasselbe zinsgünstige, unbesicherte Darlehen zweimal dar und dreht nur die Beteiligungsrichtung um: Gibt die Tochter der Mutter das Darlehen, ist die Teilwertabschreibung eine verdeckte Gewinnausschüttung; gibt die Mutter der Tochter dasselbe Darlehen, greift stattdessen das Abzugsverbot des § 8b Abs. 3 Satz 4 KStG – wirtschaftlich dasselbe Ergebnis auf ganz anderem Weg. Der zweite ermittelt einen einzigen Gewerbesteuermessbetrag für einen Organkreis aus drei Gesellschaften: getrennt rechnen, gemeinsam festsetzen – mit erhaltener erweiterter Kürzung trotz kürzungsschädlicher Schwestergesellschaften, der von § 7a GewStG auf die Ebene der Organgesellschaft vorgezogenen Bruttomethode, hinzurechnungsfreien Konzernzinsen und einem Verlustvortrag, der bei der Tochter gesperrt und bei der Mutter voll nutzbar ist. Die Prüfung 2015 (40 Punkte) prüft dieselbe Frage viermal nebeneinander: Ab welcher Quote ist eine Ausschüttung begünstigt? Die Antwort fällt jedes Mal anders aus, weil § 8b Abs. 4 KStG (10 %, mit Zurechnung über die Mitunternehmerschaft und mit Gegenzurechnung beim Wertpapierdarlehen) und § 9 Nr. 2a GewStG (15 %, ohne diese Sonderregeln) verschiedene Maßstäbe anlegen – eine Dividende, die körperschaftsteuerlich voll steuerpflichtig ist, wird dadurch gewerbesteuerlich vollständig gekürzt. Dazu ein Erwerb eigener Anteile zum überhöhten Preis, der bei der Gesellschaft wie eine Nennkapitalherabsetzung und bei der Gesellschafterin als Veräußerung nach § 17 EStG zu behandeln ist. Jede Zahl ist unabhängig nachgerechnet."
            quelle={kstOriginalklausurenQuelle}
            hausaufgaben={kstOriginalklausuren}
            gruppeVon={(eintrag) => eintrag.jahrgang}
            gruppeLabel={(eintrag) => `Prüfung ${eintrag.jahrgang}`}
            gruppeAria="Prüfungsjahrgänge"
            karteKicker={(eintrag) => `Prüfung ${eintrag.jahrgang} · ${eintrag.punkte} Punkte`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Klausuren"
            einheitEinzahl="Klausur"
          />
        )}
        {ansicht === "schema" && <KstSchemaseite oeffnen={oeffnen} />}
        {ansicht === "schemata-noethen" && (
          <KurzskriptBloecke
            kicker="Klausur 2 · Körperschaftsteuer · Prüfungsschemata"
            titel="KSt-Schemata (Nöthen)"
            lead="Die Prüfungsaufbauten des Lehrgangs im Wortlaut: verdeckte Einlage, verdeckte Gewinnausschüttung, § 8c/§ 8d KStG, ertragsteuerliche Organschaft und Vereinsbesteuerung."
            quelle={kstSchemataNoethenQuelle}
            kapitel={kstSchemataNoethen}
            karteKicker={() => "Prüfungsschema"}
            gruppeVon={() => "alle"}
            gruppeLabel={() => "Alle Schemata"}
            gruppeAria="Schemata"
            gruppeAlle="Alle Schemata"
            suchePlatzhalter="Norm oder Stichwort"
          />
        )}
        {ansicht === "hausaufgaben" && <KstHausaufgaben onModulOeffnen={oeffnen} />}
        {ansicht === "training" && <KstTraining />}
        {ansicht === "quellen" && <KstQuellenseite />}
      </main>
    </div>
  );
}

function KstCockpit({ quote, erledigt, oeffnen, ansichtOeffnen, bereichOeffnen }) {
  const naechstes = kstModule.find((m) => !erledigt.includes(m.id)) || kstModule[0];
  const fachbereiche = kstBereiche.filter((b) => b.id !== "alle");

  return (
    <>
      <div className="cockpit">
        <section className="these kst-these">
          <span className="kicker">Klausur 2 · KSt-Teil</span>
          <h2>Immer zwei Ebenen: <em>Gesellschaft und Gesellschafter.</em></h2>
          <p>
            Der KSt-Campus übernimmt die hochgeladenen Schemata, Mitschriften und den vollständigen
            Gründungsfall in die gemeinsame Campus-Struktur: {kstModule.length} Module, {kstFaelle.length} Fälle,
            feste Normketten, Prüfungsschemata und Training. Weitere Unterlagen lassen sich datengetrieben ergänzen.
          </p>
          <div className="these__aktionen">
            <button className="btn" onClick={() => oeffnen(naechstes.id)}>Weiterlernen</button>
            <button className="btn btn--linie" onClick={() => ansichtOeffnen("schema")}>KSt-Schemata öffnen</button>
          </div>
        </section>
        <section className="panel fortschritt">
          <div className="ring" style={{ "--p": `${quote}%` }}><b>{quote}%</b></div>
          <h3>Bearbeitungsstand</h3>
          <p>{erledigt.length} von {kstModule.length} Modulen abgehakt</p>
        </section>
      </div>

      <section className="abschnitt">
        <span className="kicker">Weiter im KSt-Stoff</span>
        <button className="weiter" onClick={() => oeffnen(naechstes.id)}>
          <span className="kicker">{kstBereichName[naechstes.area]} · Modul {naechstes.id}</span>
          <PrioBadge prio={prioModul(naechstes)} />
          <h3>{naechstes.title}</h3>
          <p>{naechstes.intro[0]}</p>
          <span className="norm">{naechstes.law}</span>
        </button>
      </section>

      <section className="abschnitt">
        <h2>Aufbau des KSt-Teils</h2>
        <div className="raster raster--3">
          {fachbereiche.map((b) => {
            const gesamt = kstModule.filter((m) => m.area === b.id).length;
            const fertig = kstModule.filter((m) => m.area === b.id && erledigt.includes(m.id)).length;
            return (
              <article className="bereich" key={b.id}>
                <b>{gesamt} Module</b>
                <h3>{b.label}</h3>
                <p>{bereichText[b.id]}</p>
                <div className="bereich__balken" role="img" aria-label={`${fertig} von ${gesamt} bearbeitet`}>
                  <span style={{ width: `${anteil(fertig, gesamt)}%` }} />
                </div>
                <small className="bereich__stand">{fertig} von {gesamt} bearbeitet</small>
                <button onClick={() => bereichOeffnen(b.id)}>Module öffnen →</button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="abschnitt">
        <h2>Das KSt-Grundgerüst</h2>
        <KstPruefpfad />
      </section>

      <PrioCockpit fach="kst" zaehlung={prioZaehlung} />
    </>
  );
}

const bereichText = {
  Grundlage: "Steuerpflicht, Gründungsphasen und Beginn des KSt-Zeitraums.",
  Einkommen: "Vom Steuerbilanzgewinn über IDB und ADB zum zvE.",
  Gesellschafter: "vGA, vE, Korrespondenz, § 27 und Zinsvorteile auf zwei Ebenen.",
  Beteiligung: "Dividenden, Veräußerungsgewinne, Verluste und die 5-%-Pauschale.",
  Verlust: "Schädlicher Beteiligungserwerb, Rettungsklauseln und § 8d.",
  Sonderfall: "Organschaft und Vereinsbesteuerung als eigene Prüfungspfade.",
  Fall: "Der vollständige Gründungsfall mit der Schlussrechnung 5.150 €.",
};

function KstPruefpfad() {
  const felder = [
    { nummer: "1", titel: "Steuerpflicht", text: "Wer ist Steuersubjekt, ab wann und mit welchem Umfang?" },
    { nummer: "2", titel: "IDB", text: "Bilanzielle Behandlung und zutreffender Steuerbilanzgewinn." },
    { nummer: "3", titel: "ADB", text: "vGA, vE, Abzugsverbote, § 8b und sonstige Korrekturen." },
    { nummer: "4", titel: "zvE", text: "Verluste/Freibeträge, Tarif und Ergebnissatz." },
  ];
  return (
    <div className="kst-pruefpfad">
      {felder.map((f) => (
        <div className="kst-pruefpfad__stufe" key={f.nummer}>
          <b>{f.nummer}</b>
          <div><h3>{f.titel}</h3><p>{f.text}</p></div>
        </div>
      ))}
    </div>
  );
}

function KstModulliste({ liste, bereich, setBereich, prio, setPrio, suche, erledigt, umschalten, oeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">KSt-Lernmodule</span>
          <h1>{suche ? `Treffer für „${suche}“` : kstBereiche.find((b) => b.id === bereich)?.label}</h1>
          <p className="lead">Jedes Modul folgt derselben Reihenfolge: Einordnung, Lernziele, Prüfungsschema, Normenkette, Fall, Merksatz, Klausurfallen und Quellenbezug.</p>
        </div>
        <span className="zaehler">{liste.length} Module</span>
      </div>

      <div className="filter">
        {kstBereiche.map((b) => (
          <button key={b.id} aria-pressed={bereich === b.id} onClick={() => setBereich(b.id)}>{b.label}</button>
        ))}
      </div>
      <PrioFilter wert={prio} setWert={setPrio} zaehlung={prioZaehlung} />

      <div className="modules">
        {liste.map((m) => {
          const fertig = erledigt.includes(m.id);
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
                  <span>{kstBereichName[m.area]}</span>
                  <span>Modul {m.id}</span>
                  <span>{m.difficulty}</span>
                  <span>{m.minutes} Min.</span>
                  <PrioBadge prio={prioModul(m)} stopPropagation />
                </div>
                <h3>{m.title}</h3>
                <div className="modul__norm">{m.law}</div>
              </div>
              <span className="modul__an">öffnen →</span>
            </div>
          );
        })}
        {liste.length === 0 && <p className="panel">Keine Treffer. Filter zurücksetzen oder eine andere Schreibweise verwenden.</p>}
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

function KstModulseite({ modul: m, erledigt, umschalten, zurueck, oeffnen }) {
  const fertig = erledigt.includes(m.id);
  const index = kstModule.findIndex((x) => x.id === m.id);
  const vorher = kstModule[index - 1];
  const nachher = kstModule[index + 1];
  let tz = 0;
  const n = () => ++tz;

  return (
    <article className="lesson">
      <button className="zurueck" onClick={zurueck}>← Zurück zur KSt-Modulübersicht</button>
      <header className="lesson__kopf">
        <div>
          <span className="kicker">{kstBereichName[m.area]} · Modul {m.id}</span>
          <h1>{m.title}</h1>
          <div className="tags">
            <PrioBadge prio={prioModul(m)} mitThema />
            <span className="tag tag--fach">{m.difficulty}</span>
            <span className="tag">{m.minutes} Minuten</span>
            <span className="tag">{m.law}</span>
          </div>
        </div>
        <button className="gemeistert" aria-pressed={fertig} onClick={() => umschalten(m.id)}>
          {fertig ? "✓ bearbeitet" : "Als bearbeitet markieren"}
        </button>
      </header>

      <Tz nummer={n()} label="Einordnung" titel="Worum es geht">
        {m.intro.map((p, i) => <p key={i}>{p}</p>)}
      </Tz>

      <Tz nummer={n()} label="Lernziele" titel="Das können Sie danach">
        <ul className="liste liste--haken">{m.goals.map((g, i) => <li key={i}>{g}</li>)}</ul>
      </Tz>

      <Tz nummer={n()} label="Schema" titel="Prüfungsreihenfolge" art="ansatz">
        <ol className="schritte">{m.scheme.map((s, i) => <li key={i}><span>{s}</span></li>)}</ol>
      </Tz>

      <Tz nummer={n()} label="Normen" titel="Normenkette für die Klausur">
        <p>Die Reihenfolge folgt den hochgeladenen Schemata und Mitschriften. Nach jeder Norm einen knappen Ergebnissatz formulieren.</p>
        <Normkette normen={m.normchain} />
      </Tz>

      {m.example && (
        <Tz nummer={n()} label="Fall" titel={m.example.title} art="bewertung">
          <div className="fall">
            <div className="fall__block fall__sachverhalt"><b>Sachverhalt</b><p>{m.example.facts}</p></div>
            <div className="fall__block"><b>Lösung</b><ol>{m.example.solution.map((s, i) => <li key={i}>{s}</li>)}</ol></div>
            <div className="fall__block fall__ergebnis"><b>Ergebnis</b><p>{m.example.result}</p></div>
          </div>
        </Tz>
      )}

      <Tz nummer={n()} label="Sichern" titel="Merksatz und Klausurfallen">
        <Notiz><p>{m.merksatz}</p></Notiz>
        {m.exam?.length > 0 && <Notiz art="exkurs" titel="Prüfungsrelevanz"><ul className="liste">{m.exam.map((e, i) => <li key={i}>{e}</li>)}</ul></Notiz>}
        <Notiz art="falle"><ul>{m.traps.map((t, i) => <li key={i}>{t}</li>)}</ul></Notiz>
      </Tz>

      <Tz nummer={n()} label="Quellen" titel="Verarbeitete Unterlagen">
        <ul className="kst-quellenliste">{m.sources.map((s) => <li key={s}>{s}</li>)}</ul>
        <p className="rechtsstand">Redaktionsstand: {REDAKTIONSSTAND}. Inhaltlich auf die hochgeladenen Unterlagen beschränkt; weitere Dokumente können als zusätzliche Module und Fälle ergänzt werden.</p>
      </Tz>

      <nav className="blaettern">
        {vorher ? <button onClick={() => oeffnen(vorher.id)}><small>← Modul {vorher.id}</small><strong>{vorher.title}</strong></button> : <span />}
        {nachher ? <button onClick={() => oeffnen(nachher.id)}><small>Modul {nachher.id} →</small><strong>{nachher.title}</strong></button> : <span />}
      </nav>
    </article>
  );
}

function KstFallseite({ oeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">KSt-Fallsammlung</span>
          <h1>Fälle aus den hochgeladenen Unterlagen</h1>
          <p className="lead">Sachverhalt zuerst, Lösung auf Klick. Der Gründungsfall ist vollständig übernommen; die Mitschriftenfälle sind als kompakte Übungsfälle redaktionell gegliedert.</p>
        </div>
        <span className="zaehler">{kstFaelle.length} Fälle</span>
      </div>

      <div className="kst-faelle">
        {kstFaelle.map((fall) => (
          <article className="panel kst-fallkarte" key={fall.id}>
            <div className="panel__head">
              <div><span className="kicker">Fall {fall.id} · {fall.points} Punkte{kstModule.find((m) => m.id === fall.moduleId)?.minutes ? ` · ${kstModule.find((m) => m.id === fall.moduleId).minutes} Min.` : ""}</span><h2>{fall.title}</h2><PrioBadge fach="kst" inhalt={{ title: fall.title, law: kstModule.find((m) => m.id === fall.moduleId)?.law, normchain: kstModule.find((m) => m.id === fall.moduleId)?.normchain }} typ="fall" id={fall.id} /></div>
              <button className="btn btn--klein btn--linie" onClick={() => oeffnen(fall.moduleId)}>Modul {fall.moduleId}</button>
            </div>
            <p className="kst-fallquelle">Quelle: {fall.source}</p>
            <div className="kst-sachverhalt">
              <b>Sachverhalt</b>
              {fall.facts.map((p, i) => <p key={i}>{p}</p>)}
              <p><strong>Aufgabe:</strong> {fall.task}</p>
            </div>
            <details>
              <summary>Lösung öffnen</summary>
              <ol className="kst-loesung">{fall.solution.map((s, i) => <li key={i}>{s}</li>)}</ol>
            </details>
          </article>
        ))}
      </div>
    </>
  );
}

function KstSchemaseite({ oeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Prüfungsschemata</span>
          <h1>Sieben feste KSt-Prüfungspfade</h1>
          <p className="lead">Die Schemata sind aus den hochgeladenen Übersichten und Mitschriften in eine einheitliche Klausurreihenfolge gebracht.</p>
        </div>
      </div>
      <KstPruefpfad />
      <div className="kst-schemata">
        {kstSchemata.map((schema) => (
          <section className="panel" key={schema.id}>
            <div className="panel__head"><div><span className="kicker">{schema.law}</span><h2>{schema.title}</h2><PrioBadge fach="kst" inhalt={schema} typ="schema" id={schema.id} mitThema /></div></div>
            <ol className="schritte">{schema.steps.map((s, i) => <li key={i}><span>{s}</span></li>)}</ol>
          </section>
        ))}
      </div>
      <section className="panel kst-schemahinweis">
        <h2>Vom Schema zum Modul</h2>
        <p>Die Detailbegründungen, Beispiele und Klausurfallen stehen in den Lernmodulen. Als Einstieg eignen sich vGA (Modul 4), vE (Modul 5), § 8b (Module 7–8) und der Gründungsfall (Modul 13).</p>
        <div className="these__aktionen"><button className="btn" onClick={() => oeffnen(4)}>vGA öffnen</button><button className="btn btn--linie" onClick={() => oeffnen(13)}>Gründungsfall öffnen</button></div>
      </section>
    </>
  );
}

function KstTraining() {
  const [index, setIndex] = useState(0);
  const [antwort, setAntwort] = useState(null);
  const [punkte, setPunkte] = useState(0);
  const [karte, setKarte] = useState(0);
  const [gedreht, setGedreht] = useState(false);
  const frage = kstQuizfragen[index];

  const waehlen = (i) => {
    if (antwort !== null) return;
    setAntwort(i);
    if (i === frage.richtig) setPunkte((p) => p + 1);
  };
  const weiter = () => {
    setAntwort(null);
    setIndex((i) => (i + 1) % kstQuizfragen.length);
  };

  return (
    <>
      <div className="pagehead">
        <div><span className="kicker">Training</span><h1>Quiz und Karteikarten</h1><p className="lead">Die Fragen prüfen ausschließlich Inhalte der eingearbeiteten KSt-Einheiten.</p></div>
        <span className="zaehler">{punkte} richtige Antworten</span>
      </div>

      <section className="panel kst-quiz">
        <div className="panel__head"><span className="kicker">Frage {index + 1} / {kstQuizfragen.length}</span></div>
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
          <span className="kicker">Karte {karte + 1} / {kstKarteikarten.length}</span>
          <strong>{gedreht ? kstKarteikarten[karte].hinten : kstKarteikarten[karte].vorn}</strong>
          <small>{gedreht ? "nochmals klicken für Vorderseite" : "klicken zum Umdrehen"}</small>
        </button>
        <div className="kst-kartensteuerung">
          <button className="btn btn--linie" onClick={() => { setKarte((k) => (k - 1 + kstKarteikarten.length) % kstKarteikarten.length); setGedreht(false); }}>← vorherige</button>
          <button className="btn" onClick={() => { setKarte((k) => (k + 1) % kstKarteikarten.length); setGedreht(false); }}>nächste →</button>
        </div>
      </section>
    </>
  );
}

function KstQuellenseite() {
  const eingearbeitet = kstQuellen.filter((q) => q.status === "eingearbeitet").length;
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Quellenstand</span>
          <h1>Hochgeladene Unterlagen und Verarbeitungsstatus</h1>
          <p className="lead">Die Liste macht transparent, welche Inhalte bereits in KSt-Module überführt wurden und welches Dokument fachlich zur bestehenden Klausur-3-Plattform gehört.</p>
        </div>
        <span className="zaehler">{eingearbeitet} / {kstQuellen.length} KSt-eingearbeitet</span>
      </div>

      <div className="kst-quellenraster">
        {kstQuellen.map((q) => (
          <article className="panel kst-quelle" key={q.title}>
            <div className="panel__head"><div><span className={`kst-status kst-status--${q.status === "eingearbeitet" ? "fertig" : "k3"}`}>{q.status}</span><h2>{q.title}</h2></div><span className="zaehler">{q.pages} S.</span></div>
            <p>{q.topics}</p>
          </article>
        ))}
      </div>

      <Notiz art="exkurs" titel="Erweiterungslogik">
        <p>Weitere Unterlagen können als neue Objekte in <code>src/data/kst-module.js</code>, <code>kst-faelle.js</code> und <code>kst-lernstoff.js</code> ergänzt werden. Navigation, Suche, Fortschritt und Quellenstatus aktualisieren sich aus den Daten.</p>
      </Notiz>
    </>
  );
}
