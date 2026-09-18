/* Campus Gewerbesteuer (K2).

   Löst den Platzhalter-Campus ab. Erfasst sind die Hausaufgabe mit Lösung und
   die Übungsfälle der Fallsammlung; das Cockpit sagt offen, was aus den
   Lehrgangsunterlagen noch fehlt und wo die Quelle keine Lösung enthält, damit
   der Campus nicht mehr verspricht, als er zeigt. */
import React, { useEffect, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";
import { useAnsichtVerlauf } from "../lib/ansicht-verlauf";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K2Fachleiste from "./K2Fachleiste";
import { IconCockpit, IconFaelle, IconModule, IconRegister } from "./Icons";
import { PrioCockpit } from "./Prioritaet";
import HausaufgabenBloecke from "./HausaufgabenBloecke";
import KurzskriptBloecke from "./KurzskriptBloecke";
import { gewstHausaufgaben, gewstHausaufgabenQuelle } from "../data/gewst-hausaufgaben.js";
import { gewstKurzskript, gewstKurzskriptQuelle } from "../data/gewst-kurzskript.js";
import { gewstUebungsfaelle, gewstUebungsfaelleQuelle } from "../data/gewst-uebungsfaelle.js";
import { k2Pruefungsklausuren, k2PruefungsklausurenQuelle } from "../data/k2-pruefungsklausuren.js";
import "./kst.css";

const NAV = [
  ["cockpit", "Cockpit", IconCockpit],
  ["kurzskript", "Kurzskript", IconRegister],
  ["hausaufgaben", "Hausaufgaben GewSt", IconModule],
  ["uebungsfaelle", "Übungsfälle", IconFaelle],
  ["pruefungsklausuren", "Prüfungsklausuren im Original", IconFaelle],
];

/* Was aus den GewSt-Lehrgangsunterlagen noch nicht eingepflegt ist. Die Liste
   steht im Cockpit, damit der Stand des Campus nachprüfbar bleibt. */
const OFFEN = [
  "Lösungsteil der Fallsammlung (Nöthen) – im freigegebenen Ordner nicht enthalten",
  "Lösungstext zu Beispiel 3 in Abschnitt 5.2.2 des Kurzskripts – in der Quelle nicht vorhanden",
];

function Cockpit() {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Klausur 2 · Gewerbesteuer</span>
          <h1>GewSt-Cockpit</h1>
          <p className="lead">
            Der Campus wächst mit den Quellen des Tageslehrgangs. Erfasst sind die Hausaufgabe mit
            Lösung und die vier Übungsfälle der Fallsammlung; die Ermittlungsschemata der
            Musterlösung stehen als Tabelle.
          </p>
        </div>
        <span className="zaehler">
          {gewstKurzskript.length} Kapitel · {gewstHausaufgaben.length + gewstUebungsfaelle.length} Fälle
        </span>
      </div>

      <section className="panel">
        <h2>Erfasst</h2>
        <p>
          Das Kurzskript Gewerbesteuer (Engelberth/Breier, {gewstKurzskriptQuelle.stand}) steht
          vollständig im Reiter „Kurzskript“ – {gewstKurzskript.length} Kapitel von den
          Rechtsgrundlagen über Steuerpflicht, Gewerbeertrag, Hinzurechnungen, Kürzungen und
          Gewerbeverlust bis zu Messbetrag, Zerlegung, Verfahrensrecht und § 35 EStG, mit allen
          Beispielen und Ermittlungsschemata der Quelle.
        </p>
        <p>
          {gewstHausaufgaben.length === 1 ? "Eine Hausaufgabe" : `${gewstHausaufgaben.length} Hausaufgaben`}{" "}
          mit Lösung im Reiter „Hausaufgaben GewSt“ – {gewstHausaufgabenQuelle.stand}. Der Fall führt
          vom Handelsbilanzgewinn über § 7 S. 1, 2 und 4 GewStG zu Kürzungen, Hinzurechnungen,
          Verlustvortrag, Messbetrag und Zerlegung auf zwei Gemeinden.
        </p>
        <p>
          Dazu {gewstUebungsfaelle.length} Übungsfälle der Fallsammlung im Reiter „Übungsfälle“ –{" "}
          {gewstUebungsfaelleQuelle.stand}.
        </p>
      </section>

      <section className="panel">
        <h2>Noch nicht eingepflegt</h2>
        <p>Diese GewSt-Unterlagen liegen vor, sind aber noch nicht im Campus abgebildet:</p>
        <ul>
          {OFFEN.map((eintrag) => <li key={eintrag}>{eintrag}</li>)}
        </ul>
        <p>
          Zur Fallsammlung gibt es im freigegebenen Ordner kein Lösungs-PDF. Die vier Fälle stehen
          deshalb mit Sachverhalt und Aufgabenstellung, aber ohne Musterlösung – es wurden bewusst
          keine Inhalte ergänzt, die nicht aus einer bereitgestellten Quelle stammen.
        </p>
      </section>

      <PrioCockpit fach="gewst" />
    </>
  );
}

export default function K2GewStCampus({ onKlausurwechsel, onFachwechsel }) {
  const verlauf = useAnsichtVerlauf();
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);

  return (
    <div className="kst-campus">
      <CampusTopbar
        klausur="2" marke="2" name="Examenscampus Klausur 2" untertitel="Ertragsteuerrecht · Gewerbesteuer"
        aufCockpit={() => verlauf.oeffnen("cockpit")}
        navZurueck={verlauf.zurueck} navVor={verlauf.vor}
        zurueckMoeglich={verlauf.zurueckMoeglich} vorMoeglich={verlauf.vorMoeglich}
        suche="" sucheSetzen={() => {}}
        suchePlatzhalter="GewSt-Inhalte suchen" sucheAria="Gewerbesteuer-Inhalte durchsuchen"
        dunkel={dunkel} dunkelUmschalten={() => setDunkel((d) => !d)}
      />
      <KlausurenLeiste aktiv="kst" aufCockpit={() => verlauf.oeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />
      <K2Fachleiste aktiv="gewst" onWechsel={onFachwechsel} />
      <aside className="rail">
        <nav className="rail__nav" aria-label="GewSt-Hauptnavigation">
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
          <b>GewSt-Bestand</b>
          <strong>{gewstKurzskript.length} Skript-Kapitel</strong>
          <strong>{gewstHausaufgaben.length} Hausaufgabe</strong>
          <strong>{gewstUebungsfaelle.length} Übungsfälle</strong>
          <p>Weitere Quellen folgen</p>
        </div>
      </aside>
      <main className="page">
        {verlauf.ansicht === "kurzskript" ? (
          <KurzskriptBloecke
            kicker="Klausur 2 · Gewerbesteuer · Kurzskript"
            titel="Kurzskript Gewerbesteuer"
            lead="Das Lehrgangsskript von Martin Engelberth und Ulrich Breier im Wortlaut – zehn Kapitel mit allen Beispielen, Lösungshinweisen und Ermittlungsschemata."
            quelle={gewstKurzskriptQuelle}
            kapitel={gewstKurzskript}
            suchePlatzhalter="Kurzskript durchsuchen"
          />
        ) : verlauf.ansicht === "pruefungsklausuren" ? (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Gewerbesteuer · amtliche Prüfungsaufgaben"
            titel="Prüfungsklausuren im Original – ohne Musterlösung"
            lead="Der Gewerbesteuerteil des zweiten Prüfungstages im amtlichen Wortlaut – kein fortgeschriebener Rechtsstand, keine Bearbeitung, die Jahreszahlen des Originaljahrgangs. Eingepflegt ist die Prüfung **2021/2022**; die Aufgabe betrifft den Erhebungszeitraum 2020. **Zu dieser Aufgabe enthält die Quelle keine Lösung**, und es wird hier ausdrücklich keine erfunden; der Eintrag sagt das offen, hält fest, was die Aufgabenstellung selbst vorgibt, und verweist auf die Stellen im Campus, an denen dieselben Rechtsfragen mit vollständiger Musterlösung stehen. Die MAX-OHG führt Baustoffgroßhandel und Baumaschinenverleih als getrennte Geschäftseinheiten mit eigenen Räumen, eigener Belegschaft und eigener Buchhaltung – und an nur einem der beiden Zweige ist eine Dritte still beteiligt, die zugleich als Prokuristin angestellt ist. Sämtliche Merkmale ihrer Beteiligung sind einzeln aufgezählt: 20 % an Gewinn und Verlust, Beteiligung an den stillen Reserven, Kontrollrechte nach § 716 BGB, Widerspruchsrecht bei außergewöhnlichen Geschäften. Ob daraus ein Gewerbesteuermessbetrag wird oder zwei, entscheidet die ganze Aufgabe – und die Aufgabenstellung fragt selbst nach „dem bzw. den“ Messbeträgen."
            quelle={k2PruefungsklausurenQuelle}
            hausaufgaben={k2Pruefungsklausuren.filter((e) => e.fach === "gewst")}
            gruppeVon={(eintrag) => eintrag.jahrgang}
            gruppeLabel={(eintrag) => `Prüfung ${eintrag.jahrgang}`}
            gruppeAria="Prüfungsjahrgänge"
            karteKicker={(eintrag) => `Prüfung ${eintrag.jahrgang} · Teil ${eintrag.teil}`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Aufgabenteile"
            einheitEinzahl="Aufgabenteil"
          />
        ) : verlauf.ansicht === "uebungsfaelle" ? (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Gewerbesteuer · Übungsfälle"
            titel="GewSt-Fallsammlung 2026/2027"
            lead="Die Fallsammlung des Lehrgangs – Sachverhalt und Fragestellung im Wortlaut. Zum freigegebenen Aufgaben-PDF liegt kein Lösungsteil vor; die Fälle stehen deshalb bewusst ohne Musterlösung."
            quelle={gewstUebungsfaelleQuelle}
            hausaufgaben={gewstUebungsfaelle}
            einheit="Übungsfälle"
            einheitEinzahl="Übungsfall"
            karteKicker="Übungsfall"
            gruppeVon={(fall) => fall.termin}
            gruppeLabel={(fall) => `Fachtermin ${fall.termin}`}
            gruppeAria="Fachtermine"
            suchePlatzhalter="Übungsfälle durchsuchen"
          />
        ) : verlauf.ansicht === "hausaufgaben" ? (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Gewerbesteuer · Hausaufgaben"
            titel="GewSt-Hausaufgaben 2026/2027"
            lead="Die Hausaufgaben des Tageslehrgangs – Sachverhalt, Fragestellung und Lösungshinweise im Wortlaut, die Ermittlungsschemata der Musterlösung als Tabelle."
            quelle={gewstHausaufgabenQuelle}
            hausaufgaben={gewstHausaufgaben}
            karteKicker="Hausaufgabe"
            gruppeVon={(ha) => ha.termin}
            gruppeLabel={(ha) => `Fachtermin ${ha.termin}`}
            gruppeAria="Fachtermine"
            suchePlatzhalter="Hausaufgaben durchsuchen"
          />
        ) : (
          <Cockpit />
        )}
      </main>
    </div>
  );
}
