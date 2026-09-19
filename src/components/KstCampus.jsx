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
            lead="Das Lehrgangsskript „Körperschaftsteuer, Teil IV: Verdeckte Gewinnausschüttung i. S. des § 8 Abs. 3 Satz 2 KStG“ von Hamacher (21. Auflage, Stand 07/2025) im Wortlaut – **in Arbeit**. Die verdeckte Gewinnausschüttung ist eine Vorteilszuwendung an den Gesellschafter oder eine ihm nahe stehende Person **außerhalb** der offenen Gewinnverwendung – und weil schon die offene Ausschüttung das Einkommen nach § 8 Abs. 3 Satz 1 KStG nicht mindern darf, gilt für die verdeckte nichts anderes. Der praktische Einstieg in jeden Fall ist eine einzige Frage: **Wer erzielt den Vermögensvorteil?** Liegt er bei der Gesellschaft, ist es eine verdeckte Einlage; liegt er beim Gesellschafter, eine verdeckte Gewinnausschüttung. Die Korrektur erfolgt **ausschließlich außerhalb der Steuerbilanz** – die Steuerbilanz bleibt unverändert, der überhöhte Aufwand bleibt gebucht, und erst bei der Einkommensermittlung wird hinzugerechnet. Geprüft werden fünf Tatbestandsmerkmale, von denen das fünfte – die **Vorteilsgeneigtheit** – nicht in den Richtlinien steht, sondern vom BFH ergänzt wurde: Die Gewinnminderung muss überhaupt geeignet sein, beim Gesellschafter Einnahmen nach § 20 Abs. 1 Nr. 1 EStG auszulösen. Die beiden **Fallgruppen** unterscheiden sich nach der Richtung der Leistung und haben deshalb verschiedene Bewertungsmaßstäbe: Bei der verhinderten Vermögensmehrung ist der **gemeine Wert** anzusetzen, also einschließlich des Gewinnaufschlags, bei der Vermögensminderung die Differenz zum angemessenen Entgelt. Beim **Fremdvergleich** gilt der ordentliche und gewissenhafte Geschäftsleiter als Maßstab – bemerkenswerterweise in beide Richtungen: Eine vGA kann auch in einer für die Gesellschaft **günstigen** Vereinbarung liegen, wenn kein fremder Dritter ihr zugestimmt hätte, wie im Fall der Nur-Pension. Und hinzugerechnet werden kann nur, was das Ergebnis der **Stufe 1** tatsächlich beeinflusst hat: Die Vorschrift stellt nicht den angemessenen Zustand her, sondern beseitigt nur eine eingetretene Gewinnminderung. Die **Sonderfälle** zeigen, wo dieser Grundsatz an seine Grenze stößt. Erwirbt die Gesellschaft ein **aktivierungspflichtiges Wirtschaftsgut** zu teuer, steckt der überhöhte Preis zunächst nur im Bilanzansatz und wirkt sich gar nicht auf den Gewinn aus – hier ist ausnahmsweise **zuerst die Bilanz** zu korrigieren, und erst der dadurch entstehende Aufwand trägt die Hinzurechnung. Die laufende Abschreibung ist dabei ausdrücklich **keine** anteilige vGA, sondern bloße Reflexwirkung. Ist die Veranlagung des Anschaffungsjahres bereits **bestandskräftig**, vernichtet das endgültig Steuersubstrat, und zwar auf beiden Ebenen gleichzeitig: Bei der Gesellschaft bleibt die überhöhte Abschreibung der Vorjahre stehen, und beim Gesellschafter versagt § 3 Nr. 40 Buchstabe d Satz 2 EStG die Begünstigung genau insoweit – im Beispiel bleiben von 200.000 € vGA nur 80.000 € begünstigt. Erst § 32a Abs. 1 KStG eröffnet ihm überhaupt die Korrektur seiner längst bestandskräftigen Veranlagung. Beim **Verkauf einer Beteiligung** ist zweistufig zu prüfen: Erst stellt § 8 Abs. 3 Satz 2 KStG den angemessenen Veräußerungsgewinn her, dann greift § 8b Abs. 2 KStG – wer die Reihenfolge umkehrt, hat gar keinen Gewinn, den er freistellen könnte. Ergibt sich trotz Hinzurechnung ein Verlust, rechnet § 8b Abs. 3 Satz 3 KStG auch ihn wieder hinzu. Bei den **Schadensersatzansprüchen** entscheidet eine einzige Frage: **Hat sich der Gesellschafter selbst einen Vorteil verschafft?** Beim **„schlampigen Gesellschafter“** lautet die Antwort nein – er hat nur schlecht gearbeitet, der Schaden liegt allein bei der Gesellschaft, und deshalb ist der zivilrechtliche Ersatzanspruch vorrangig zu aktivieren und schließt die vGA aus. Sie entsteht erst, wenn die Gesellschaft verzichtet, den Anspruch verjähren lässt oder er uneinbringlich wird – maßgeblich ist also nicht das Schadensjahr, sondern das Jahr des Verzichts. Der **Alleingesellschafter** haftet dabei aus eigenen Geschäften gar nicht, es sei denn, das Stammkapital wird angegriffen. Beim **„gierigen Gesellschafter“** lautet die Antwort ja: Die vGA ist mit dem Grundgeschäft bereits vollzogen, und der Rückforderungsanspruch ist nur noch eine steuerlich unbeachtliche **Einlageforderung**. Das gilt auch für **Satzungs- und Steuerklauseln**, mit denen sich die Gesellschafter zur Rückzahlung verpflichten – wer damit eine entdeckte vGA nachträglich ungeschehen machen will, erreicht steuerlich nichts: Über beide Jahre bleibt es bei genau einer Hinzurechnung, und der Gesellschafter hat obendrein zurückgezahlt. Die **Vorteilsgeneigtheit** wirkt dabei als Filter: Die vGA erfasst nur die Zuwendung selbst, nicht ihre Begleitkosten. **Schuldzinsen** für ein Darlehen, mit dem die Gesellschaft das überhöhte Gehalt finanziert, bleiben abziehbar – die Probe liefert die Quelle selbst: Auch bei einer offenen Ausschüttung wären sie es. Dasselbe gilt für Beiträge zur **Rückdeckungsversicherung**, deren Ansprüche der Gesellschaft zustehen. Und die vGA ist durchweg **objektiv** zu beurteilen: Weder eine Ausschüttungsabsicht noch eine Einigung der Beteiligten ist erforderlich – wer argumentiert, die Unangemessenheit sei niemandem bewusst gewesen, hat damit nichts gewonnen. Die Gesellschaft muss sich das Handeln ihrer Organe sogar dann zurechnen lassen, wenn der Gesellschafter sich den Vorteil durch **Untreue** erschlichen hat, sofern sie ihn hat gewähren lassen. Bei **nahe stehenden Personen** ist für die Korrektur bei der Gesellschaft gleichgültig, wem der Vorteil zufließt – die **Bezüge** aber kann nach § 20 Abs. 5 EStG nur der Anteilseigner erzielen. Steuerlich wird der Vorgang deshalb in zwei Schritte zerlegt: erst eine Ausschüttung an den Gesellschafter, dann eine Schenkung von ihm an den Empfänger. Er versteuert also einen Bezug, obwohl ihm nichts zugeflossen ist, darf die Weitergabe nicht abziehen – und am Ende ist § 7 Abs. 1 Nr. 1 ErbStG zu prüfen. Anders, wenn der Empfänger **selbst beteiligt** ist: Ab 10 % spricht der Anscheinsbeweis für eigene Veranlassung, er versteuert selbst, und die Schenkungsteuer entfällt. Umgekehrt wird die vGA doch dem Mehrheitsgesellschafter zugerechnet, wenn sein Zuwendungswille feststeht und seine Beteiligung ursächlich war – das Unterscheidungsmerkmal der beiden Beispiele ist weniger die Quote als die Frage, **ob ein Gesellschafterbeschluss nötig war**. Bei der **durchgeleiteten vGA** über eine Zwischengesellschaft entsteht auf jeder Stufe eine weitere vGA; übrig bleibt dort genau die Fünf-Prozent-Pauschale – eine dreistufige Kette kostet also dreimal 500 €. Der beherrschende Gesellschafter, die Bewertung, die Auswirkungen bei Gesellschaft und Gesellschafter, die Dreiecksfälle und die Pensionszusage folgen nach demselben Verfahren."
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
