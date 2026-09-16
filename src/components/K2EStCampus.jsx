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
import { IconCockpit, IconFaelle, IconModule } from "./Icons";
import { PrioCockpit } from "./Prioritaet";
import HausaufgabenBloecke from "./HausaufgabenBloecke";
import { estHausaufgaben, estHausaufgabenQuelle } from "../data/est-hausaufgaben.js";
import { estFallsammlungen, estFallsammlungenQuelle } from "../data/est-fallsammlungen.js";
import "./kst.css";

const NAV = [
  ["cockpit", "Cockpit", IconCockpit],
  ["hausaufgaben", "Hausaufgaben ESt", IconModule],
  ["fallsammlungen", "Fallsammlungen", IconFaelle],
];

/* Was aus den ESt-Lehrgangsunterlagen noch nicht eingepflegt ist. Die Liste
   steht im Cockpit, damit der Stand des Campus nachprüfbar bleibt. */
const OFFEN = [
  "Kurzskript II (Engelberth)",
  "Fallsammlung Einkünfte aus Gewerbebetrieb (Engelberth)",
  "Fallsammlung Einkünfte aus Kapitalvermögen (Engelberth)",
  "Fallsammlungen der Termine 8 und 9 (Erbfall, Renten)",
  "Steuerberaterprüfungen Rechtsstand 2025",
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
            Der Campus wächst mit den Quellen des Tageslehrgangs. Erfasst sind bisher die
            Hausaufgaben mit Lösung; sie stehen im Wortlaut, mit den Ermittlungsschemata der
            Musterlösung als Tabelle.
          </p>
        </div>
        <span className="zaehler">{estHausaufgaben.length} Hausaufgaben</span>
      </div>

      <section className="panel">
        <h2>Erfasst</h2>
        <p>
          Hausaufgaben mit Lösung zu {termine.length === 1 ? "Fachtermin" : "den Fachterminen"}{" "}
          {termine.join(", ")} – {estHausaufgabenQuelle.stand}.
        </p>
        <p>
          Die allgemeinen Bearbeitungshinweise des Lehrgangs gelten für alle Hausaufgaben und stehen
          über der Liste im Reiter „Hausaufgaben ESt“.
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
          <strong>{estHausaufgaben.length} Hausaufgaben</strong>
          <strong>{estFallsammlungen.length} Fälle</strong>
          <p>Weitere Quellen folgen</p>
        </div>
      </aside>
      <main className="page">
        {verlauf.ansicht === "fallsammlungen" ? (
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
