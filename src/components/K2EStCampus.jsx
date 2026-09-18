/* Campus Einkommensteuer (K2).

   Löst den Platzhalter-Campus ab, sobald echte ESt-Quellen eingepflegt sind.
   Erfasst ist bisher der Hausaufgaben-Bestand; das Cockpit sagt offen, was aus
   den Lehrgangsunterlagen noch fehlt, damit der Campus nicht mehr verspricht,
   als er zeigt. */
import React, { useEffect, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";
import { useAnsichtVerlauf } from "../lib/ansicht-verlauf";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K2Fachleiste from "./K2Fachleiste";
import { IconCockpit, IconFaelle, IconModule, IconRegister, IconTraining } from "./Icons";
import { PrioCockpit } from "./Prioritaet";
import HausaufgabenBloecke from "./HausaufgabenBloecke";
import KurzskriptBloecke from "./KurzskriptBloecke";
import { estHausaufgaben, estHausaufgabenQuelle } from "../data/est-hausaufgaben.js";
import { estKurzskript1, estKurzskript1Quelle } from "../data/est-kurzskript-1.js";
import { estKurzskript2, estKurzskript2Quelle } from "../data/est-kurzskript-2.js";
import { estFallsammlungen, estFallsammlungenQuelle } from "../data/est-fallsammlungen.js";
import { estKlausuren, estKlausurenQuelle } from "../data/est-klausuren.js";
import { estOriginalklausuren, estOriginalklausurenQuelle } from "../data/k2-est-originalklausuren.js";
import "./kst.css";

/* Die Übungsklausur Körperschaftsteuer steht im KSt-Campus, die beiden
   Teilklausuren der Klausur AO/USt im USt- bzw. AO-Campus, die Übungsklausuren
   Bilanzierung 1 bis 4 im Bilanzen-Campus der Klausur 3; hier stehen die
   einkommensteuerlichen Klausuren des gemeinsamen Klausurbestands. */
const ANDERE_FAECHER = new Set(["kst-1", "ust-1", "ao-1", "ao-2", "bil-1", "bil-2", "bil-3", "bil-4", "ao-ust-erbst-1", "ao-ust-erbst-2"]);
const EST_KLAUSUREN = estKlausuren.filter((eintrag) => !ANDERE_FAECHER.has(eintrag.klausur));

const NAV = [
  ["cockpit", "Cockpit", IconCockpit],
  ["kurzskript1", "Kurzskript I", IconRegister],
  ["kurzskript2", "Kurzskript II", IconRegister],
  ["hausaufgaben", "Hausaufgaben ESt", IconModule],
  ["fallsammlungen", "Fallsammlungen", IconFaelle],
  ["klausuren", "Übungsklausuren", IconTraining],
  ["originalklausuren", "Originalklausuren (Prüfung)", IconTraining],
];

/* Was aus den ESt-Lehrgangsunterlagen noch nicht eingepflegt ist. Die Liste
   steht im Cockpit, damit der Stand des Campus nachprüfbar bleibt. */
const OFFEN = [
  "Kurzskript I: Betriebsaufspaltung, gewerblicher Grundstückshandel, Betriebsbeendigung, Einnahmenüberschussrechnung, selbständige Arbeit und Kapitalvermögen (ab Seite 80 des PDF)",
];

function Cockpit() {
  const termine = estHausaufgaben.map((ha) => ha.termin).sort((a, b) => a - b);
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 2 · Einkommensteuer</span>
          <h1>ESt-Cockpit</h1>
          <p className="lead">
            Der Campus wächst mit den Quellen des Tageslehrgangs. Erfasst sind das Kurzskript II,
            die Hausaufgaben mit Lösung und die Fallrepetitorien; alles steht im Wortlaut, mit den
            Ermittlungsschemata der Musterlösung als Tabelle.
          </p>
        </div>
        <span className="zaehler">
          {estKurzskript1.length + estKurzskript2.length} Skript-Kapitel ·{" "}
          {estHausaufgaben.length} Hausaufgaben · {estFallsammlungen.length} Fälle
        </span>
      </div>

      <section className="panel">
        <h2>Erfasst</h2>
        <p>
          Das Kurzskript I (Engelberth, {estKurzskript1Quelle.stand}) steht im Reiter „Kurzskript I“
          mit {estKurzskript1.length} Kapiteln: die Einführung in die Einkommensteuer, die Einkünfte
          aus Vermietung und Verpachtung und der Beginn der Einkünfte aus Gewerbebetrieb. Der Rest
          des Skripts ist noch nicht erfasst – siehe „Noch nicht eingepflegt“.
        </p>
        <p>
          Das Kurzskript II (Engelberth, {estKurzskript2Quelle.stand}) steht vollständig im Reiter
          „Kurzskript II“ – acht Teile mit {estKurzskript2.length} Kapiteln: § 17 EStG, private
          Veräußerungsgeschäfte, sonstige Einkünfte, vorweggenommene Erbfolge, Erbfall und
          Erbauseinandersetzung, nichtselbständige Arbeit, § 15a EStG und wiederkehrende Leistungen
          bei Vermögensübertragungen – mit allen Beispielen und Ermittlungsschemata der Quelle.
        </p>
        <p>
          Hausaufgaben mit Lösung zu {termine.length === 1 ? "Fachtermin" : "den Fachterminen"}{" "}
          {termine.join(", ")} – {estHausaufgabenQuelle.stand}.
        </p>
        <p>
          Die allgemeinen Bearbeitungshinweise des Lehrgangs gelten für alle Hausaufgaben und stehen
          über der Liste im Reiter „Hausaufgaben ESt“.
        </p>
        <p>
          Die Übungsklausuren Einkommensteuer 1 (Wiegmann), Ertragsteuern 0 (Wiegmann/Leuers) und
          Ertragsteuern 2 (Wiegmann/Breier, {estKlausurenQuelle.stand}) stehen mit allen
          Aufgabenteilen und der Musterlösung im Reiter „Übungsklausuren“ – Sachverhalt,
          Aufgabenstellung und Lösungshinweise im Wortlaut, die Randpunkte nur dort, wo sie sich im
          PDF eindeutig einem Absatz zuordnen lassen. Beide Ertragsteuer-Klausuren enthalten neben
          den einkommensteuerlichen Aufgabenteilen je einen vollständigen körperschaftsteuerlichen
          Teil. Die reine Übungsklausur Körperschaftsteuer steht im KSt-Campus unter
          „Übungsklausur (Breier)“, die Teilklausuren der Klausur AO/USt im USt- bzw. AO-Campus
          unter „Übungsklausur (USt)“ und „Übungsklausur (AO)“.
        </p>
        <p>
          Dazu {estFallsammlungen.length} Fälle aus den Fallrepetitorien im Reiter „Fallsammlungen“:{" "}
          {[...new Set(estFallsammlungen.map((fall) => fall.sammlungLabel))].join(", ")}. Aufgaben- und
          Lösungsteil werden dort wieder zu einem Fall zusammengeführt.
        </p>
      </section>

      <section className="panel">
        <h2>Noch nicht eingepflegt</h2>
        <p>Diese ESt-Unterlagen liegen vor, sind aber noch nicht im Campus abgebildet:</p>
        <ul>
          {OFFEN.map((eintrag) => <li key={eintrag}>{eintrag}</li>)}
        </ul>
        <p>
          Es wurden bewusst keine Inhalte ergänzt, die nicht aus einer bereitgestellten Quelle
          stammen.
        </p>
      </section>

      <PrioCockpit fach="est" />
    </>
  );
}

export default function K2EStCampus({ onKlausurwechsel, onFachwechsel }) {
  const verlauf = useAnsichtVerlauf();
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);

  return (
    <div className="kst-campus">
      <CampusTopbar
        klausur="2" marke="2" name="Examenscampus Klausur 2" untertitel="Ertragsteuerrecht · Einkommensteuer"
        aufCockpit={() => verlauf.oeffnen("cockpit")}
        navZurueck={verlauf.zurueck} navVor={verlauf.vor}
        zurueckMoeglich={verlauf.zurueckMoeglich} vorMoeglich={verlauf.vorMoeglich}
        suche="" sucheSetzen={() => {}}
        suchePlatzhalter="ESt-Inhalte suchen" sucheAria="Einkommensteuer-Inhalte durchsuchen"
        dunkel={dunkel} dunkelUmschalten={() => setDunkel((d) => !d)}
      />
      <KlausurenLeiste aktiv="kst" aufCockpit={() => verlauf.oeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />
      <K2Fachleiste aktiv="est" onWechsel={onFachwechsel} />
      <aside className="rail">
        <nav className="rail__nav" aria-label="ESt-Hauptnavigation">
          {NAV.map(([id, label, Icon]) => (
            <button
              key={id} className="rail__link"
              aria-current={verlauf.ansicht === id ? "true" : undefined}
              onClick={() => verlauf.oeffnen(id)}
            >
              <Icon />{label}
            </button>
          ))}
        </nav>
        <div className="rail__box">
          <b>ESt-Bestand</b>
          <strong>{estKurzskript1.length + estKurzskript2.length} Skript-Kapitel</strong>
          <strong>{estHausaufgaben.length} Hausaufgaben</strong>
          <strong>{estFallsammlungen.length} Fälle</strong>
          <p>Weitere Quellen folgen</p>
        </div>
      </aside>
      <main className="page">
        {verlauf.ansicht === "kurzskript1" ? (
          <KurzskriptBloecke
            kicker="Klausur 2 · Einkommensteuer · Kurzskript I"
            titel="Einkommensteuer Kurzskript I"
            lead="Der erste Teil des Lehrgangsskripts von Martin Engelberth im Wortlaut – Einführung in die Einkommensteuer, Einkünfte aus Vermietung und Verpachtung und der Beginn der Einkünfte aus Gewerbebetrieb. Die weiteren Teile des Skripts sind noch nicht erfasst."
            quelle={estKurzskript1Quelle}
            kapitel={estKurzskript1}
            karteKicker={(k) => `${k.teilLabel} · Kapitel ${k.kapitel}`}
            gruppeVon={(k) => k.teil}
            gruppeLabel={(k) => k.teilLabel}
            gruppeAria="Teile"
            gruppeAlle="Alle Teile"
            suchePlatzhalter="Norm, Stichwort oder Betrag"
          />
        ) : verlauf.ansicht === "kurzskript2" ? (
          <KurzskriptBloecke
            kicker="Klausur 2 · Einkommensteuer · Kurzskript II"
            titel="Einkommensteuer Kurzskript II"
            lead="Das Lehrgangsskript von Martin Engelberth im Wortlaut – acht Teile von § 17 EStG bis zu den wiederkehrenden Leistungen, mit allen Beispielen, Lösungshinweisen und Ermittlungsschemata."
            quelle={estKurzskript2Quelle}
            kapitel={estKurzskript2}
            karteKicker={(k) => `${k.teilLabel} · Kapitel ${k.kapitel}`}
            gruppeVon={(k) => k.teil}
            gruppeLabel={(k) => k.teilLabel}
            gruppeAria="Teile"
            gruppeAlle="Alle Teile"
            suchePlatzhalter="Norm, Stichwort oder Betrag"
          />
        ) : verlauf.ansicht === "originalklausuren" ? (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Ertragsteuern · Original-Prüfungsklausuren"
            titel="Ertragsteuern – Originalklausuren der Steuerberaterprüfung"
            lead="Die Original-Prüfungsaufgaben aus dem Gebiet der Ertragsteuern (Einkommensteuer und Gewerbesteuer) mit den Lösungsvorschlägen des Lehrgangs („Ertragsteuern · Steuerberaterprüfungen 2011 – 2015“, Rechtsstand 2025). Jeder Sachverhalt steht als eigener Eintrag – mit Bearbeitungshinweisen, Musterlösung und den Randpunkten der Quelle. Die Sachverhalte rechnen in abstrakten Jahreszahlen („Jahr 10“, „01.03.11“): Das sind Platzhalter für aufeinanderfolgende Veranlagungszeiträume, nicht für Kalenderjahre; maßgeblich ist der Rechtsstand zum 31.12.2025. Eingepflegt ist bisher die Prüfung 2011 mit ihren vier Sachverhalten: Sonderbetriebsvermögen über eine zweite Personengesellschaft und die Rücknahme des § 34a-Antrags (eine Günstigerprüfung, die um 440,31 € entschieden wird); die Einbringung eines Einzelunternehmens nach § 24 UmwStG, bei der aus dem leitenden Angestellten ein Kommanditist wird – mit zwei Gewerbesteuermessbeträgen für ein und dasselbe Unternehmen; der Verkauf an sich selbst über eine GbR ohne Einkunftserzielungsabsicht, der die Schuldzinsen kostet und trotzdem ein privates Veräußerungsgeschäft auslöst; und die erweiterte Kürzung bei gewerblicher Prägung, die durch eine einzige geänderte Beteiligung zur Betriebsaufspaltung wird und den Messbetrag von 927 € auf 3.423 € treibt. Jede Zahl ist unabhängig nachgerechnet."
            quelle={estOriginalklausurenQuelle}
            hausaufgaben={estOriginalklausuren}
            gruppeVon={(eintrag) => eintrag.block}
            gruppeLabel={(eintrag) => eintrag.blockLabel}
            gruppeAria="Prüfungsjahrgänge"
            karteKicker={(eintrag) => `Prüfung ${eintrag.jahrgang} · Sachverhalt ${eintrag.nummer} · ${eintrag.punkte} Punkte`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Sachverhalte"
            einheitEinzahl="Sachverhalt"
          />
        ) : verlauf.ansicht === "klausuren" ? (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Einkommensteuer · Übungsklausuren"
            titel="ESt-Übungsklausuren 2026/2027"
            lead="Die Übungsklausuren im Prüfungsformat – sechs Stunden Bearbeitungszeit, je Aufgabenteil ein eigener Mandant. Aufgabenstellung, Sachverhalt und Musterlösung stehen im Wortlaut, die Ermittlungsschemata als Tabelle. Die Klausuren Ertragsteuern 0 und Ertragsteuern 2 vereinen einkommensteuerliche Aufgabenteile mit je einer vollständigen Körperschaftsteuerklausur."
            quelle={estKlausurenQuelle}
            hausaufgaben={EST_KLAUSUREN}
            gruppeVon={(eintrag) => eintrag.klausur}
            gruppeLabel={(eintrag) => eintrag.klausurLabel}
            gruppeAria="Klausuren"
            karteKicker={(eintrag) => `${eintrag.klausurLabel} · Aufgabenteil ${eintrag.teil} · ${eintrag.bearbeitungszeit}`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Aufgabenteile"
            einheitEinzahl="Aufgabenteil"
          />
        ) : verlauf.ansicht === "fallsammlungen" ? (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Einkommensteuer · Fallsammlungen"
            titel="ESt-Fallsammlungen 2026/2027"
            lead="Die Fallrepetitorien des Lehrgangs – Sachverhalt, Fragestellung und Lösungshinweise im Wortlaut, die Berechnungsschemata als Tabelle, Fortsetzungen und Abwandlungen beim zugehörigen Beispiel."
            quelle={estFallsammlungenQuelle}
            hausaufgaben={estFallsammlungen}
            gruppeVon={(fall) => fall.sammlung}
            gruppeLabel={(fall) => fall.sammlungLabel}
            gruppeAria="Fallsammlungen"
            karteKicker={(fall) => `${fall.sammlungLabel} · ${fall.termin}. Fachtermin`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Fälle"
            einheitEinzahl="Fall"
          />
        ) : verlauf.ansicht === "hausaufgaben" ? (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Einkommensteuer · Hausaufgaben"
            titel="ESt-Hausaufgaben 2026/2027"
            lead="Die Hausaufgaben des Tageslehrgangs mit Sachverhalt, Aufgabenstellung und Lösungshinweisen im Wortlaut – die Ermittlungsschemata als Tabelle, die Lösung erst auf Klick."
            quelle={estHausaufgabenQuelle}
            hausaufgaben={estHausaufgaben}
            gruppeVon={(ha) => ha.termin}
            gruppeLabel={(ha) => `${ha.termin}. Fachtermin`}
            gruppeAria="Fachtermine"
            karteKicker={(ha) => `${ha.termin}. Fachtermin · Einkommensteuer`}
            suchePlatzhalter="Name, Norm, Stichwort oder Betrag"
          />
        ) : (
          <Cockpit />
        )}
      </main>
    </div>
  );
}
