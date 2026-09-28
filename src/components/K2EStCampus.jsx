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
import { lstSchema, lstSchemaQuelle } from "../data/k2-lst-schema.js";
import { estFallsammlungen, estFallsammlungenQuelle } from "../data/est-fallsammlungen.js";
import { estKlausuren, estKlausurenQuelle } from "../data/est-klausuren.js";
import { estOriginalklausuren, estOriginalklausurenQuelle } from "../data/k2-est-originalklausuren.js";
import { k2Pruefungsklausuren, k2PruefungsklausurenQuelle } from "../data/k2-pruefungsklausuren.js";
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
  ["lst-schema", "Lohnsteuer-Schema", IconRegister],
  ["hausaufgaben", "Hausaufgaben ESt", IconModule],
  ["fallsammlungen", "Fallsammlungen", IconFaelle],
  ["klausuren", "Übungsklausuren", IconTraining],
  ["originalklausuren", "Originalklausuren (Prüfung)", IconTraining],
  ["pruefungsklausuren", "Prüfungsklausuren im Original", IconTraining],
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
            Der Campus wächst mit den Quellen des Tageslehrgangs. Erfasst sind die beiden
            Kurzskripte, das Prüfungsschema Arbeitslohn zur Lohnsteuer, die Hausaufgaben mit Lösung
            und die Fallrepetitorien; alles steht im Wortlaut, mit den Ermittlungsschemata der
            Musterlösung als Tabelle.
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
          Das Prüfungsschema Arbeitslohn (Nöthen) steht im Reiter „Lohnsteuer-Schema“ mit den fünf
          Stufen der Quelle: Einnahme in Geld oder Geldeswert, steuerbarer Arbeitslohn,
          steuerpflichtiger Arbeitslohn, Bewertung des Sachbezugs und die Entscheidung zwischen
          Ansatz beim Arbeitnehmer und Pauschalversteuerung. Es ist die einzige lesbare Datei des
          Drive-Ordners „Lohnsteuer“; die beiden übrigen sind reine Scans.
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
        ) : verlauf.ansicht === "lst-schema" ? (
          <KurzskriptBloecke
            kicker="Klausur 2 · Einkommensteuer · Lohnsteuer"
            titel="Prüfungsschema Arbeitslohn (Nöthen)"
            lead="Das einseitige Prüfungsschema von Markus Nöthen im Wortlaut. Es führt in fünf Stufen von der Einnahme bis zur Rechtsfolge und trennt dabei sauber, was im Sprachgebrauch oft vermischt wird: Nicht steuerbarer Arbeitslohn (Stufe II) ist begrifflich kein Arbeitslohn – Aufmerksamkeiten, Betriebsveranstaltung, eigenbetriebliches Interesse. Steuerfreier Arbeitslohn (Stufe III) ist Arbeitslohn, den § 3 EStG freistellt. Erst danach wird bewertet (Stufe IV: 50-Euro-Freigrenze nach § 8 Abs. 2 EStG gegenüber dem Rabattfreibetrag von 1.080 Euro nach § 8 Abs. 3 EStG), erst zuletzt fällt die Entscheidung zwischen Ansatz beim Arbeitnehmer und Pauschalversteuerung."
            quelle={lstSchemaQuelle}
            kapitel={lstSchema}
            karteKicker="Stufe"
            gruppeVon={(k) => k.romisch}
            gruppeLabel={(k) => `Stufe ${k.romisch}`}
            gruppeAria="Stufen des Prüfungsschemas"
            gruppeAlle="Alle Stufen"
            suchePlatzhalter="Norm, Stichwort oder Befreiung"
          />
        ) : verlauf.ansicht === "pruefungsklausuren" ? (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Ertragsteuern · amtliche Prüfungsaufgaben"
            titel="Prüfungsklausuren im Original – ohne Musterlösung"
            lead="Die Aufgabentexte des zweiten Prüfungstages im amtlichen Wortlaut, so wie sie am Prüfungstag vorgelegen haben: kein fortgeschriebener Rechtsstand, keine Bearbeitung, die Jahreszahlen des Originaljahrgangs. Eingepflegt sind die Einkommensteuerteile der Prüfungen **2021/2022** (Veranlagungszeitraum 2020, ohne Punkteangabe in der Quelle) und **2022/2023** (Veranlagungszeitraum 2021, mit 25, 17 und 18 von 100 Wertungspunkten) mit ihren je drei unabhängigen Sachverhalten. **Zu diesen Aufgaben enthält die Quelle keine Lösung**, und es wird hier ausdrücklich keine erfunden; jeder Eintrag sagt das offen, hält fest, was die Aufgabenstellung selbst vorgibt, und verweist auf die Stellen im Campus, an denen dieselben Rechtsfragen mit vollständiger Musterlösung stehen. Sachverhalt 1 (Anne T.) beginnt mit einer Übertragung in vorweggenommener Erbfolge gegen 350.000 € Gleichstellungsgeld, bei der Leistung und Gegenleistung ausdrücklich nicht kaufmännisch abgewogen sind, und führt über eine energetische Sanierung mit Fachunternehmerbescheinigungen, eine Baderneuerung, die nicht dazugehört, und eine Aufstockung um ein ganzes Dachgeschoss bis zu Kapitalerträgen aus Dividenden, Zinsen, Aktienverlusten und Termingeschäften. Sachverhalt 2 (Thomas S.) bringt eine Steuerberatungspraxis gegen neue Anteile in eine GmbH ein – aber ohne den Oldtimer mit Teilwert 50.000 € und ohne die offenen Honorarforderungen über 40.000 €, und genau daran hängt die Aufgabe; am Ende steht der Verkauf des Anteils für 2 Mio. € drei Jahre später. Sachverhalt 3 (Hanno P.) beginnt mit der Frage, ob eine dreimal jährlich genutzte Wohnung in Frankfurt einen Wohnsitz begründet, und führt über eine Ltd. auf den Cayman Islands ohne Ertragsbesteuerung zu einer bahamaischen Partnership, die ein deutsches Bürogebäude für 50 Mio. € gekauft und für 60 Mio. € verkauft hat – drei Nicht-DBA-Staaten, kein Abkommen als Rettung. Aus dem Jahrgang 2022/2023 kommen drei weitere Sachverhalte hinzu. Sachverhalt 1 (Simone K., 25 Punkte) ist der punktstärkste und internationalste: eine Influencerin mit Lebensmittelpunkt in Düsseldorf, die sich an mehr als 183 Tagen im Jahr in Italien aufhält, dort eine Zweigniederlassung und drei Eigentumswohnungen hat und daneben zu 30 % an einer brasilianischen Gesellschaft beteiligt ist, deren Ausschüttung das dortige Einkommen gemindert hat. Sachverhalt 2 (Uli V., 17 Punkte) verzahnt Arbeitslohn und Beteiligung: ein Elektro-Firmenwagen bei 120 Bürotagen und 110 Homeoffice-Tagen ohne Arbeitszimmer, ein 2013 verbilligt erworbener Geschäftsanteil, eine Ausschüttung von 500.000 €, die zu vier Fünfteln aus dem Einlagekonto stammt, und die Übertragung der gesamten Beteiligung auf den Neffen gegen lebenslange Rente. Sachverhalt 3 (Michael H., 18 Punkte) stellt die Frage, ob aus einer bloß vermietenden OHG eine Betriebsaufspaltung wird – wobei sich die maßgeblichen Beteiligungsverhältnisse zum 1. März 2021 mitten im Jahr verschieben – und endet mit dem Verkauf des Mitunternehmeranteils zum 1. Dezember für 1,5 Mio. €."
            quelle={k2PruefungsklausurenQuelle}
            hausaufgaben={k2Pruefungsklausuren.filter((e) => e.fach === "est")}
            gruppeVon={(eintrag) => eintrag.jahrgang}
            gruppeLabel={(eintrag) => `Prüfung ${eintrag.jahrgang}`}
            gruppeAria="Prüfungsjahrgänge"
            karteKicker={(eintrag) => `Prüfung ${eintrag.jahrgang} · Teil ${eintrag.teil} · Sachverhalt ${eintrag.nummer}`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Sachverhalte"
            einheitEinzahl="Sachverhalt"
          />
        ) : verlauf.ansicht === "originalklausuren" ? (
          <HausaufgabenBloecke
            kicker="Klausur 2 · Ertragsteuern · Original-Prüfungsklausuren"
            titel="Ertragsteuern – Originalklausuren der Steuerberaterprüfung"
            lead="Die Original-Prüfungsaufgaben aus dem Gebiet der Ertragsteuern (Einkommensteuer und Gewerbesteuer) mit den Lösungsvorschlägen des Lehrgangs („Ertragsteuern · Steuerberaterprüfungen 2011 – 2015“, Rechtsstand 2025). Jeder Sachverhalt steht als eigener Eintrag – mit Bearbeitungshinweisen, Musterlösung und den Randpunkten der Quelle. Die Sachverhalte rechnen in abstrakten Jahreszahlen („Jahr 10“, „01.03.11“): Das sind Platzhalter für aufeinanderfolgende Veranlagungszeiträume, nicht für Kalenderjahre; maßgeblich ist der Rechtsstand zum 31.12.2025. Eingepflegt sind die Prüfungen 2011 und 2012 mit je vier Sachverhalten die Prüfung 2013 mit fünf und die Prüfungen 2014 und 2015 mit je drei Sachverhalten (samt Korrekturbogen) – damit alle Prüfungen der Reihe. Aus der Prüfung 2011: Sonderbetriebsvermögen über eine zweite Personengesellschaft und die Rücknahme des § 34a-Antrags (eine Günstigerprüfung, die um 440,31 € entschieden wird); die Einbringung eines Einzelunternehmens nach § 24 UmwStG, bei der aus dem leitenden Angestellten ein Kommanditist wird – mit zwei Gewerbesteuermessbeträgen für ein und dasselbe Unternehmen; der Verkauf an sich selbst über eine GbR ohne Einkunftserzielungsabsicht, der die Schuldzinsen kostet und trotzdem ein privates Veräußerungsgeschäft auslöst; und die erweiterte Kürzung bei gewerblicher Prägung, die durch eine einzige geänderte Beteiligung zur Betriebsaufspaltung wird und den Messbetrag von 927 € auf 3.423 € treibt. Aus der Prüfung 2012: eine Gewerbesteuerberechnung, die nur aufgeht, wenn § 4 Abs. 4a EStG vor § 8 Nr. 1 GewStG geprüft wird – die 17.950 € nicht abziehbarer Schuldzinsen kürzen die Hinzurechnung, weil nur hinzugerechnet wird, was den Gewinn gemindert hat –, mit anschließender Zerlegung auf Essen und Bielefeld samt fiktivem Unternehmerlohn; ein Erbbaurechtsvertrag, der zur Hälfte Nutzungsüberlassung (200.000 €, auf 99 Jahre zu verteilen – im Jahr der Bestellung 673 €) und zur Hälfte Veräußerung ist (400.000 € für das Gebäude, mangels Anschaffung nicht steuerbar), dazu zwei Baumaßnahmen mit umgekehrtem Ergebnis; eine österreichische Dividende, die sich hälftig auf Betriebs- und Privatvermögen teilt und deren Quellensteuer doppelt begrenzt abziehbar ist (15 % laut DBA, davon 60 % wegen des Teileinkünfteverfahrens = 270 €); und ein Wegzug nach Wien, der dreimal verschieden wirkt – bis hin zur Wegzugsbesteuerung nach § 6 AStG, bei der der spätere Mehrerlös von 50.000 € über dem gemeinen Wert unbesteuert bleibt. Aus der Prüfung 2013: eine Einbringung nach § 20 UmwStG, deren Anteilsverkauf nach 14 Monaten rückwirkend einen Einbringungsgewinn I von 60.000 € auslöst und zugleich einen Verlust nach § 17 EStG; eine Einnahmenüberschussrechnung mit fünf Vorgängen am Jahreswechsel, die den Gewinn von 20.000 € auf 5.390 € drücken; ein Rechtsanwalt in London, der wegen einer Ferienwohnung in Düsseldorf unbeschränkt steuerpflichtig ist und trotzdem keine deutschen Einkünfte hat; der Verkauf eines Kommanditanteils mit negativem Kapitalkonto, bei dem der Gesamthandsbereich auf null aufgeht und die Verluste im Sonderbetriebsvermögen stecken (./. 51.250 €); und das gewerbesteuerliche Schachtelprivileg bei fremdfinanzierter Beteiligung (Messbetrag 7.472 €). Aus der Prüfung 2014: ein Wegzug nach Brasilien mitten im Jahr mit Wechsel der Steuerpflicht und Wegzugsbesteuerung (60.000 €); ein Dreifamilienhaus aus vorweggenommener Erbfolge, das zur Hälfte entgeltlich erworben ist und über Betriebsaufspaltung, verbilligte Vermietung und Verkauf zu einer Summe der Einkünfte von 212.883 € führt; und ein Ingenieur mit Arbeit, Ferienhaus und Aufsichtsratsmandat in Spanien – Freistellung mit Progressionsvorbehalt neben Anrechnung, Rentenbesteuerung und Altersentlastungsbetrag. Aus der Prüfung 2015: ein Rentner in den Niederlanden mit Antrag nach § 1 Abs. 3 EStG, bei dem nur der geerbte GmbH-Anteil unter § 17 EStG fällt; ein Außendienstler, dessen Zweigstelle keine erste Tätigkeitsstätte, wohl aber ein Sammelpunkt ist, mit Unterhalt für den 25-jährigen Sohn nach § 33a EStG; und die Aufgabe eines Fahrradladens mit Übergangsgewinn, Räumungsverkauf, steuerfreiem Aufgabegewinn und einem privaten Veräußerungsgeschäft von 60.000 € für das geerbte Grundstück. Jede Zahl ist unabhängig nachgerechnet."
            quelle={estOriginalklausurenQuelle}
            hausaufgaben={estOriginalklausuren}
            gruppeVon={(eintrag) => eintrag.jahrgang}
            gruppeLabel={(eintrag) => `Prüfung ${eintrag.jahrgang}`}
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
