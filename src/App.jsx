import React, { useEffect, useMemo, useRef, useState } from "react";
import { module as alleModule, bereiche, bereichName, normenregister } from "./data/module";
import { zugeordneteFaelle } from "./data/fallsammlung";
import offeneFaelle from "./data/faelle-offen";
import { sourceCatalog, researchNote } from "./data/sources";
import { formeln, karteikarten, quizfragen, wochenplan, glossar } from "./data/lernstoff";
import Schaubild from "./components/Schaubild";
import Fallsammlungsfaelle from "./components/Fallsammlungsfaelle";
import Falluebersicht from "./components/Falluebersicht";
import Hausaufgabenseite, { HausaufgabenZuModul, IconHausaufgabe } from "./components/Hausaufgaben";
import Klausurmodus, { IconKlausur } from "./components/Klausurmodus";
import { Norm, Normkette, Notiz, Buchungssatz, Bilanzspiegel } from "./components/Bausteine";
import Pruefungsschemata, { schemata as pruefungsschemata } from "./components/Pruefungsschemata";
import SchemaPostitEnhancer from "./components/SchemaPostitEnhancer";
import { laden, sichern, useFortschritt, anteil } from "./lib/fortschritt";
import { erfasseSeitenzustand, stelleSeitenzustandWiederHer } from "./lib/campus-navigation";
import {
  IconCockpit, IconModule, IconSchema, IconFormel, IconRegister, IconTraining,
  IconFaelle, IconPlan, IconHaken, IconBuchung,
} from "./components/Icons";
import { CampusTopbar, KlausurenLeiste } from "./components/CampusKopf";
import Erklaervideo from "./components/Erklaervideo";
import Buchungssaetze from "./components/Buchungssaetze";
import { BEISPIELE, UEBUNGEN } from "./data/buchungssaetze";
import K3Fachleiste from "./components/K3Fachleiste";
import HausaufgabenBloecke from "./components/HausaufgabenBloecke";
import { estKlausuren, estKlausurenQuelle } from "./data/est-klausuren.js";
import { bilOriginalklausuren, bilOriginalklausurenQuelle } from "./data/k3-bil-originalklausuren.js";
import { bilPruefungsklausuren, bilPruefungsklausurenQuelle } from "./data/k3-bil-pruefungsklausuren.js";
import KurzskriptBloecke from "./components/KurzskriptBloecke";
import { bilUebungsfaelle, bilUebungsfaelleQuelle } from "./data/k3-bil-uebungsfaelle-noethen.js";
import { bilSkriptMelzer, bilSkriptMelzerQuelle } from "./data/k3-bil-skript-melzer.js";
import { PrioBadge, PrioNorm, PrioFilter, PrioCockpit, prioZaehlen, usePrioFilter, prioritaetFuer } from "./components/Prioritaet";

/* Examenspriorität eines Bilanz-Moduls (🔴/🟠/🟢) nach den Beck-Auswertungen. */
const prioModul = (m) => prioritaetFuer("bilanz", m, { typ: "modul", id: m.id });
const prioZaehlung = prioZaehlen(alleModule, prioModul);

/* Die Übungsklausuren Bilanzierung liegen im gemeinsamen Klausurbestand der
   Übungsklausuren; hier stehen die Teile, die zur Klausur 3 gehören. */
const BIL_KLAUSUREN = new Set(["bil-1", "bil-2", "bil-3", "bil-4"]);
const BIL_UEBUNGSKLAUSUREN = estKlausuren.filter((eintrag) => BIL_KLAUSUREN.has(eintrag.klausur));

/* Gültige Kennungen für die Bereinigung des gespeicherten Fortschritts. */
const modulIds = new Set(alleModule.map((m) => m.id));
const wochenIds = wochenplan.map((_, i) => i);

const ansichten = [
  { id: "cockpit", label: "Cockpit", Icon: IconCockpit },
  { id: "module", label: "Lernmodule", Icon: IconModule },
  { id: "faelle", label: "Fälle", Icon: IconFaelle },
  { id: "klausur", label: "Klausurmodus", Icon: IconKlausur },
  { id: "uebungsklausur", label: "Übungsklausuren", Icon: IconTraining },
  { id: "skript-melzer", label: "Skript (Melzer)", Icon: IconRegister },
  { id: "uebungsfaelle", label: "Übungsfälle (Nöthen)", Icon: IconFaelle },
  { id: "originalklausuren", label: "Originalklausuren (Prüfung)", Icon: IconTraining },
  { id: "pruefungsklausuren", label: "Prüfungsklausuren im Original", Icon: IconTraining },
  { id: "hausaufgaben", label: "Hausaufgaben", Icon: IconHausaufgabe },
  { id: "schema", label: "Prüfungsschema", Icon: IconSchema },
  { id: "formeln", label: "Rechenwege", Icon: IconFormel },
  { id: "buchungen", label: "Buchungssätze", Icon: IconBuchung },
  { id: "register", label: "Normenregister", Icon: IconRegister },
  { id: "training", label: "Training", Icon: IconTraining },
  { id: "plan", label: "Lernplan", Icon: IconPlan },
];

const abbaFelder = [
  { buchstabe: "A", titel: "Ansatz I – Zurechnung", text: "Wem ist das Wirtschaftsgut zuzurechnen? § 246 Abs. 1 S. 2 HGB, § 39 AO." },
  { buchstabe: "A", titel: "Ansatz II – Zuordnung", text: "Was ist es? Anlage- oder Umlaufvermögen, abnutzbar, notwendig oder gewillkürt." },
  { buchstabe: "B", titel: "Bewertung I und II", text: "Welcher Maßstab gilt, und wie hoch sind AK/HK oder Erfüllungsbetrag?" },
  { buchstabe: "B", titel: "Bewertung III und IV", text: "Fortführung über AfA, Abzinsung, Wertberichtigung – Wertansatz getrennt für HB und StB." },
];

/* =========================================================== Hauptkomponente */
export default function App({ onKlausurwechsel, onFachwechsel }) {
  const [ansicht, setAnsicht] = useState("cockpit");
  const [modulId, setModulId] = useState(null);
  const [suche, setSuche] = useState("");
  const [bereich, setBereich] = useState("alle");
  const [prio, setPrio] = usePrioFilter("stb-k3-prio");
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  const [hausaufgabenAnker, setHausaufgabenAnker] = useState(null);
  const [navVerlauf, setNavVerlauf] = useState([
    { ansicht: "cockpit", modulId: null, bereich: "alle", hausaufgabenAnker: null, scrollY: 0, offeneDetails: [] },
  ]);
  const [navIndex, setNavIndex] = useState(0);
  const wiederherstellenRef = useRef(null);

  /* Beide Stände werden beim Laden gegen den heutigen Bestand bereinigt. */
  const module = useFortschritt("stb-erledigt", modulIds);
  const plan = useFortschritt("stb-plan", (i) => wochenIds.includes(i));
  const erledigt = module.werte;
  const umschalten = module.umschalten;

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
    return alleModule.filter((m) => {
      if (bereich !== "alle" && m.area !== bereich) return false;
      if (prio !== "alle" && prioModul(m).stufe !== prio) return false;
      if (!q) return true;
      const falltext = (m.fallsammlung || []).flatMap((fall) => [fall.titel, fall.quellmodul, fall.sachverhalt, fall.loesung]).join(" ");
      const heu = [m.title, m.law, m.merksatz, (m.normchain || []).join(" "), (m.intro || []).join(" "), falltext]
        .join(" ")
        .toLowerCase();
      return heu.includes(q);
    });
  }, [suche, bereich, prio]);

  const modul = modulId ? alleModule.find((m) => m.id === modulId) : null;
  const quote = anteil(erledigt.length, alleModule.length);

  /* Zweite Kennzahl: Fälle, die im Klausurmodus tatsächlich bearbeitet wurden.
     Gezählt wird jeder Fall einmal, egal wie oft er vorkam. */
  const gerechnet = useMemo(() => {
    const laeufe = laden("stb-klausurlauf", []);
    const liste = Array.isArray(laeufe) ? laeufe : [];
    const gesamt = alleModule.filter((m) => m.area === "Fall" && m.example?.facts).length;
    const ids = new Set(liste.flatMap((l) => (l.faelle || []).map((f) => f.modulId)));
    return { anzahl: ids.size, gesamt, quote: anteil(ids.size, gesamt), letzter: liste[0] || null };
  }, [ansicht]);

  const ort = () => ({ ansicht, modulId, bereich, hausaufgabenAnker, ...erfasseSeitenzustand() });

  const anwenden = (ziel, wiederherstellen = false) => {
    wiederherstellenRef.current = wiederherstellen ? ziel : null;
    setAnsicht(ziel.ansicht);
    setModulId(ziel.modulId ?? null);
    setBereich(ziel.bereich ?? bereich);
    setHausaufgabenAnker(ziel.hausaufgabenAnker ?? null);
  };

  const navigiere = (ziel) => {
    const naechster = {
      ansicht: ziel.ansicht,
      modulId: ziel.modulId ?? null,
      bereich: ziel.bereich ?? bereich,
      hausaufgabenAnker: ziel.hausaufgabenAnker ?? null,
      scrollY: 0,
      offeneDetails: [],
    };
    if (
      naechster.ansicht === ansicht
      && naechster.modulId === modulId
      && naechster.bereich === bereich
      && naechster.hausaufgabenAnker === hausaufgabenAnker
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
  }, [navIndex, navVerlauf, ansicht, modulId, bereich, hausaufgabenAnker]);

  const ansichtOeffnen = (ziel) => navigiere({ ansicht: ziel });
  const bereichOeffnen = (ziel) => navigiere({ ansicht: "module", bereich: ziel });
  const oeffnen = (id) => navigiere({ ansicht: "module", modulId: id });

  /* Sprung von einer Modulseite zu einer bestimmten Hausaufgabe. */
  const oeffnenHausaufgabe = (id) => navigiere({ ansicht: "hausaufgaben", hausaufgabenAnker: id });

  return (
    <div>
      <CampusTopbar
        klausur="3"
        marke="3"
        name="Examenscampus Klausur 3"
        untertitel="Buchführung und Bilanzwesen"
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
        suchePlatzhalter="Modul, Norm oder Stichwort suchen"
        sucheAria="Module durchsuchen"
        dunkel={dunkel}
        dunkelUmschalten={() => setDunkel((d) => !d)}
      />

      <KlausurenLeiste aktiv="k3" aufCockpit={() => ansichtOeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />

      <K3Fachleiste aktiv="allgemein" onWechsel={onFachwechsel} />

      <aside className="rail">
        <nav className="rail__nav" aria-label="Hauptnavigation">
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
          <b>Fortschritt</b>
          <strong>{erledigt.length} / {alleModule.length}</strong>
          <p>Module als bearbeitet markiert</p>
          {erledigt.length > 0 && (
            <button
              className="rail__box-reset"
              onClick={() => {
                if (window.confirm("Bearbeitungsstand aller Module zurücksetzen?")) module.zuruecksetzen();
              }}
            >
              zurücksetzen
            </button>
          )}
        </div>
      </aside>

      <main className="page">
        {ansicht === "cockpit" && <Cockpit quote={quote} gerechnet={gerechnet} erledigt={erledigt} oeffnen={oeffnen} ansichtOeffnen={ansichtOeffnen} bereichOeffnen={bereichOeffnen} prioOeffnen={(stufe) => { setPrio(stufe); bereichOeffnen("alle"); }} />}
        {ansicht === "module" && !modul && (
          <Modulliste
            liste={gefiltert}
            bereich={bereich}
            setBereich={setBereich}
            prio={prio}
            setPrio={setPrio}
            suche={suche}
            erledigt={erledigt}
            umschalten={umschalten}
            oeffnen={oeffnen}
          />
        )}
        {ansicht === "module" && modul && (
          <Modulseite
            modul={modul}
            erledigt={erledigt}
            umschalten={umschalten}
            zurueck={() => ansichtOeffnen("module")}
            oeffnen={oeffnen}
            oeffnenHausaufgabe={oeffnenHausaufgabe}
          />
        )}
        {ansicht === "faelle" && (
          <Falluebersicht
            zugeordneteFaelle={zugeordneteFaelle}
            offeneFaelle={offeneFaelle}
            module={alleModule}
            oeffnenModul={oeffnen}
          />
        )}
        {ansicht === "klausur" && <Klausurmodus module={alleModule} oeffnenModul={oeffnen} />}
        {ansicht === "uebungsklausur" && (
          <HausaufgabenBloecke
            kicker="Klausur 3 · Buchführung und Bilanzwesen · Übungsklausur"
            titel="Übungsklausuren Bilanzierung"
            lead="Die Übungsklausuren im Fachgebiet Bilanzierung, je 6 Stunden und 100 Punkte: Bilanzierung 1 (Norbert Rott, Korrektoren S. und L. Rehbann, Rechtslage 2025) mit den sechs Textziffern des Einzelunternehmers Karl-Heinz Arnold (79 Punkte) und zwei Kapitalgesellschafts-Sachverhalten (21 Punkte); Bilanzierung 2 (Markus Nöthen, Korrektor Michael Leuers, Rechtsstand 2025) mit dem Einzelunternehmen Sebastian Reinsteiger (63 Punkte) und der Bayar-GmbH (37 Punkte); Bilanzierung 3 (Karsten Melzer, Korrektor Nicky Neumayer, Rechtsstand 2025) mit dem Werkzeugbau des Adonis Animalis (80 Punkte) und der A-B-GmbH & Co. KG samt X-OHG. Sachverhalt, Aufgabenstellung und Musterlösung stehen im Wortlaut.; Bilanzierung 4 (Norbert Rott, Korrektoren C. Cieplik, C. Koch und G. Ilci, Rechtsstand 2025) mit der doppelstöckigen X-GmbH & Co. KG (40 Punkte), der Gründung der R+S OHG nach § 24 UmwStG (30 Punkte) und dem Gesellschafterwechsel bei der ABC OHG (30 Punkte). Sachverhalt, Aufgabenstellung und Musterlösung stehen im Wortlaut."
            quelle={estKlausurenQuelle}
            hausaufgaben={BIL_UEBUNGSKLAUSUREN}
            gruppeVon={(eintrag) => eintrag.klausur}
            gruppeLabel={(eintrag) => eintrag.klausurLabel}
            gruppeAria="Klausuren"
            karteKicker={(eintrag) => `${eintrag.klausurLabel} · Aufgabenteil ${eintrag.teil} · ${eintrag.punkteLaut ?? `${eintrag.punkte} Punkte`}`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Textziffern"
            einheitEinzahl="Textziffer"
          />
        )}
        {ansicht === "pruefungsklausuren" && (
          <HausaufgabenBloecke
            kicker="Klausur 3 · Buchführung und Bilanzierung · amtliche Prüfungsaufgaben"
            titel="Prüfungsklausuren im Original – ohne Musterlösung"
            lead="Die Aufgabentexte der Steuerberaterprüfung im amtlichen Wortlaut, so wie sie am Prüfungstag vorgelegen haben: kein fortgeschriebener Rechtsstand, keine Bearbeitung, die Jahreszahlen des Originaljahrgangs. Eingepflegt sind die Klausuren aus dem Gebiet Buchführung und Bilanzierung der Prüfungsjahrgänge **2022/2023** (vier Teile, 100 Wertungspunkte, verteilt auf 33, 17, 22 und 28) und **2021/2022** (drei Teile, in der Quelle ohne Punkteangabe) – je sechs Stunden Bearbeitungszeit. **Zu diesen Aufgaben enthält die Quelle keine Lösung**, und es wird hier ausdrücklich keine erfunden; jeder Eintrag sagt das offen, hält fest, was die Aufgabenstellung selbst vorgibt, und verweist auf die Stellen im Campus, an denen dieselben Rechtsfragen mit vollständiger Musterlösung stehen. Teil I (Einzelunternehmen Kevin Klein) verbindet Mietereinbauten mit Rückbaupflicht, Bezugsrechte aus einer Kapitalerhöhung 6 zu 1 und ein städtisches Umlegungsverfahren. Teil II (Maier GmbH) ist der einzige Teil mit Kostenrechnung: Aus einem vollständigen Betriebsabrechnungsbogen und sieben Korrekturfeststellungen sind die Herstellungskosten zweier Werkverträge zu entwickeln – einer am 30.12. abgenommenen und einer am Stichtag unfertigen Maschine. Teil III (Maurer & Hauser OHG) ist eine Realteilung mit Spitzenausgleich aus dem Privatvermögen, gefolgt von Veräußerungen im Jahr 2023, deren Rückwirkung ausdrücklich abgefragt wird. Teil IV (Killer GmbH) zieht die Bilanzklausur in die Körperschaftsteuer: verbilligte Miete der Alleingesellschafterin, Grundstücksübertragung gegen bloße Schuldübernahme bei 840.000 € Verkehrswert und ein rückwirkender Mietverzicht des Bruders – am Ende stehen der steuerliche Gewinn, die Einkünfte beider Angehöriger, die Anschaffungskosten des Anteils und das steuerliche Einlagekonto. Aus dem Jahrgang 2021/2022 kommen drei weitere Teile hinzu, die im Wirtschaftsjahr 2020 spielen – mit dem unterjährigen Wechsel des Umsatzsteuersatzes, weshalb 16 % und 19 % in derselben Klausur nebeneinanderstehen. Teil I (Klaus Becker) verbindet einen Grundstückskauf gegen Schuldübernahme und lebenslängliche Leibrente, die nach fünf Monaten für 150.000 € abgelöst wird, mit einem Verwaltungsgebäude, das nicht bezahlt, sondern gegen eine gebrauchte Krananlage plus 174.000 € Barausgleich getauscht wird – und einer selbst hergestellten Stahlladerampe samt vollständigem Zuschlagssatzgerüst. Teil II (Mutter-GmbH) stellt eine rückwirkende Aufwärtsverschmelzung mit abweichendem Wirtschaftsjahr und Rumpfwirtschaftsjahr neben einen Kommanditanteil mit Ergänzungsbilanz: Die Verwertungsrechte an den Romanen eines für den Friedenspreis nominierten Autors stehen mit 12.500 € im Buch und sind 200.000 € wert. Teil III (Müller-OHG) sind vier kleinere Fälle – ein Gebäude in Leichtbauweise mit fest eingebauter Theke in einer Rechnungssumme, eine 26-prozentige Beteiligung, eine nach Unwetter teilabgerissene und wieder aufgebaute Garage und ein Kinderkarussell in kanadischen Dollar mit gestundetem Kaufpreis und einer bereits gebuchten Teilwertabschreibung „wegen Kursrückgang des CAD“."
            quelle={bilPruefungsklausurenQuelle}
            hausaufgaben={bilPruefungsklausuren}
            gruppeVon={(eintrag) => eintrag.jahrgang}
            gruppeLabel={(eintrag) => `Prüfung ${eintrag.jahrgang}`}
            gruppeAria="Prüfungsjahrgänge"
            karteKicker={(eintrag) => `Prüfung ${eintrag.jahrgang} · Teil ${eintrag.teil} · ${eintrag.wertung}`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Aufgabenteile"
            einheitEinzahl="Aufgabenteil"
          />
        )}
        {ansicht === "skript-melzer" && (
          <KurzskriptBloecke
            kicker="Klausur 3 · Bilanzen · Lehrgangsskript"
            titel="Bilanzierung nach Handels- und Steuerrecht (Melzer)"
            lead="Das Lehrgangsskript Termin 1 von Karsten Melzer (April 2026, Rechtsstand 2025) im Wortlaut, die Übersichten als Tabellen und die Schaubilder als Tabellen in Lesereihenfolge. Eingepflegt sind Kapitel 1 (Maßgeblichkeitsgrundsatz), Kapitel 2 (Klausuraufbau: Ansatz dem Grunde nach, Bewertung, Übersichten Handelsbilanz/Steuerbilanz) und Kapitel 3 (Ansatz dem Grunde nach: Wirtschaftsgut, Zurechnung mit Mietkauf und Leasing, Zuordnung, Gebäudeteile und Betriebsvorrichtungen, Mietereinbauten, Gebäude auf fremdem Grund und Boden, Erbbaurecht) und Kapitel 4 (Bewertung: Anschaffungs- und Herstellungskosten, Abbruchkosten, anschaffungsnaher Aufwand, Teilwert, Einlagen und Entnahmen, Kfz mit 1 %-Methode und Fahrtenbuch, Teilwertabschreibung und Wertaufholung), Kapitel 5 (abnutzbares Anlagevermögen: AfA-Methoden, Gebäude-AfA, AfaA, AfA nach Einlage, GWG und Sammelposten, Investitionsabzugsbetrag) Kapitel 6 (nicht abnutzbares Anlagevermögen: Beteiligungen, Wertpapiere, Bezugsrechte), Kapitel 7 (Umlaufvermögen: Inventur, Lifo, Fifo, Festwert), Kapitel 8 (Forderungen: Einzel- und Pauschalwertberichtigung, Fremdwährung) Kapitel 9 (Rechnungsabgrenzung, Disagio, Anzahlungen) und Kapitel 10 (Verbindlichkeiten: Zuordnung, Rangrücktritt, Bewertung, Fremdwährung, Schuldzinsenabzug nach § 4 Abs. 4a EStG). Die Kapitel 11 bis 16 – von den Sonderposten, Rückstellungen und latente Steuern bis zur Bilanzberichtigung – folgen."
            quelle={bilSkriptMelzerQuelle}
            kapitel={bilSkriptMelzer}
            karteKicker={(k) => `${k.teilLabel} · Abschnitt ${k.kapitel}`}
            gruppeVon={(k) => k.teil}
            gruppeLabel={(k) => k.teilLabel}
            gruppeAria="Kapitel"
            gruppeAlle="Alle Kapitel"
            suchePlatzhalter="Norm, Stichwort oder Betrag"
          />
        )}
        {ansicht === "uebungsfaelle" && (
          <KurzskriptBloecke
            kicker="Klausur 3 · Bilanzen · Übungsfälle"
            titel="Übungsfälle laufender Unterricht (Nöthen)"
            lead="Die Fallsammlung, die den laufenden Unterricht begleitet, im Wortlaut. Jeder Teil hat einen durchgehenden Unternehmenssachverhalt, an den sich zehn bis dreizehn unabhängige Einzelfälle hängen – Teil 1 die Schreinerei MN in Aachen, Teil 2 der Elektronikhandel Michael Nehring in Dortmund, die Teile 3 und 4 das Bauunternehmen „MN Bau“ in Potsdam. Teil 3 beginnt mit einer Prüferbilanz und den notwendigen Kapitalanpassungsbuchungen, Teil 4 behandelt ausschließlich Rückstellungen. Die Aufgabenstellung ist immer dieselbe: handels- und steuerrechtliche Beurteilung unter Angabe der Vorschriften, Bilanzansätze in Handels- und Steuerbilanz zum 31.12.2025 und die noch erforderlichen Buchungssätze, wobei möglichst niedriger steuerlicher Gewinn bei möglichst hohem handelsbilanziellem Jahresüberschuss gewünscht ist und das steuerrechtliche Ergebnis Vorrang hat. **Die Quelle enthält keine Lösungen** – es sind Aufgabenblätter für den Unterricht. Es wird hier keine erfunden; jedes Kapitel sagt das offen und verweist auf die Stellen im Campus, an denen dieselbe Bilanzierungsfrage vollständig durchgerechnet ist."
            quelle={bilUebungsfaelleQuelle}
            kapitel={bilUebungsfaelle}
            karteKicker={(k) => k.abschnitt}
            gruppeVon={(k) => k.abschnitt}
            gruppeLabel={(k) => k.abschnitt}
            gruppeAria="Teile der Fallsammlung"
            gruppeAlle="Alle Teile"
            suchePlatzhalter="Norm, Fall oder Stichwort"
          />
        )}
        {ansicht === "originalklausuren" && (
          <HausaufgabenBloecke
            kicker="Klausur 3 · Buchführung und Bilanzwesen · Original-Prüfungsklausuren"
            titel="Bilanz-Originalklausuren der Steuerberaterprüfung"
            lead="Die Original-Prüfungsaufgaben aus dem Gebiet der Buchführung und des Bilanzwesens mit den Lösungshinweisen des Lehrgangs („Bilanzierung nach Handels- und Steuerrecht · Steuerberaterprüfungen 2011 – 2015“, Februar 2026; Verfasser Norbert Rott, Markus Schmidt und Alexander Horst) – Sachverhalt, Aufgabenstellung und Musterlösung im Wortlaut, mit den Randpunkten der Quelle. Jede Klausur dauert sechs Stunden und besteht aus drei unabhängigen Teilen zu zusammen 100 Punkten; jeder Teil steht als eigener Eintrag. Eingepflegt sind alle fünf Prüfungen 2011 bis 2015 mit je drei Teilen – die Reihe ist vollständig. Teil I (Einzelunternehmen Herbst, 34 Punkte) ist ein Fall, in dem ein einziger Satz der Aufgabenstellung – möglichst hoher Eigenkapitalausweis in der Handelsbilanz vor möglichst niedrigem steuerlichem Gewinn – über fünf Wahlrechte entscheidet: Das selbst geschaffene Patent wird handelsrechtlich aktiviert und steuerrechtlich nicht, und bei der selbst hergestellten Maschine werden Verwaltungskosten und Bauzinsen auch steuerlich aktiviert, weil § 6 Abs. 1 Nr. 1b EStG und R 6.3 Abs. 5 EStR keine eigenständigen steuerlichen Wahlrechte sind. Dazu ein Außenanstrich, der zu einem Fünftel Herstellungskosten und zu vier Fünfteln Erhaltungsaufwand ist, zwei Aktienpakete, bei denen dieselbe Fünf-Prozent-Grenze zu entgegengesetzten Ergebnissen führt, und eine Fremdwährungsforderung, bei der § 256a Satz 2 HGB das Realisationsprinzip aushebelt – aber nur handelsrechtlich. Teil II (X-GmbH, 33 Punkte) macht die **latenten Steuern zum roten Faden**: Drohverlustrücklage, Firmenwert und § 6b-Rücklage erzeugen je eine Differenz zwischen Handels- und Steuerbilanz, und erst die Gesamtdifferenzbetrachtung entscheidet über aktive oder passive latente Steuern – hier ein Passivierungsgebot über 63.500 €, wofür die Quelle die amtliche Originallösung ausdrücklich kritisiert. Dazu ein Erwerb eigener Anteile, bei dem Nennwert, Aufpreis und Nebenkosten drei verschiedene Wege gehen; ein Firmenwert, der handelsrechtlich über zehn und steuerrechtlich über fünfzehn Jahre abzuschreiben ist; und am Schluss eine Steuerrückstellung, die auf einem Gewinn beruht, den sie selbst mindert. Teil III (A-B-GmbH & Co. KG, 33 Punkte) stellt denselben Vorfall auf zwei Ebenen nebeneinander: Ein verseuchtes Grundstück rechtfertigt bei der OHG die Teilwertabschreibung auf 1 €, bei der beteiligten KG aber gerade keine Abschreibung der Beteiligung – und über die Spiegelbildmethode schlägt der Verlust steuerlich trotzdem mit 250.000 € durch. Dazu ein Squeeze-out, bei dem die Rücklage für Ersatzbeschaffung ausscheidet (weder behördlicher Eingriff noch höhere Gewalt) und stattdessen § 6b Abs. 10 EStG greift – gesellschafterbezogen nur zu 80 %, weshalb eine Ergänzungsbilanz für die Komplementär-GmbH nötig wird –, und die Übertragung eines Mietshauses aus dem Privatvermögen gegen Gesellschaftsrechte, die kein Einlage-, sondern ein voll entgeltliches Veräußerungsgeschäft ist. Aus der Prüfung 2012 kommt Teil I hinzu (Einzelunternehmen Winter, 34 Punkte): Dasselbe Grundstück wird im Mai gekauft, im September modernisiert und im Dezember teilweise privat bezogen – und jeder Schritt baut auf dem vorigen auf. Es zerfällt in vier Wirtschaftsgüter, deren Anschaffungskosten bis auf den Cent aufzuteilen sind; die Modernisierung ist handelsrechtlich Erhaltungsaufwand und steuerrechtlich anschaffungsnaher Aufwand, weil sie die 15-Prozent-Grenze um knapp 900 € überschreitet; und der Einzug erzwingt eine Entnahme zum Teilwert, der sich aus abgelehnten Kaufangeboten ergibt – mit einem Entnahmegewinn von 21.871,48 € handelsrechtlich gegen 14.659,69 € steuerrechtlich. Dazu ein Darlehen, dessen vollständige Zuordnung zum betrieblichen Grundstücksteil jede Aufteilung erspart, und eine Verpackungsmaschine, bei der ein Probelauf am 30.12. über einen ganzen Monat Abschreibung entscheidet. Teil II der Prüfung 2012 (Sommer GmbH, 33 Punkte) dreht die Vorzeichen um: möglichst hohes Vermögen in der Handelsbilanz, möglichst **hohes** steuerliches Ergebnis. Ein VIP-Logen-Paket über 20.000 € für 20 Heimspiele zerfällt erst zeitlich – acht Spiele des Folgejahres sind geleistete Anzahlungen – und dann sachlich in Werbung, Bewirtung und Geschenke, wobei die Eintrittskarten mit exakt 50 € je Person genau auf der Grenze des § 4 Abs. 5 Satz 1 Nr. 1 EStG liegen. Eine Lärmschutzwand, die erst 2029 gebaut wird, ist handelsrechtlich mit drei Jahren Preissteigerung aufzuzinsen und mit 4 % abzuzinsen (97.142 €), steuerrechtlich ohne Preissteigerung mit 5,5 % (85.161 €) – die Differenz von 11.981 € erzeugt aktive latente Steuern. Und überhöhte Lieferpreise der finnischen Tochtergesellschaft von 30.000 € sind handelsrechtlich Aufwand, steuerrechtlich verdeckte Einlage nach § 6 Abs. 6 Satz 2 EStG – mit einer Anmerkung, in der die Verfasser der Musterlösung ausdrücklich widersprechen. Am Ende steht ein Verlust von 594.281 €, aus dem § 274 Abs. 1 Satz 4 HGB latente Steuern von 185.784 € auf die Verlustvorträge entstehen lässt. Teil III der Prüfung 2012 (XYZ GmbH & Co. KG, 33 Punkte) spielt in einer Familien-KG: Der Kommanditanteil wird samt einer selbst geschaffenen, nicht bilanzierbaren Marke verschenkt, der unwesentliche Anteil an der Komplementär-GmbH bleibt zurück – Buchwertfortführung nach § 6 Abs. 3 EStG; die verbilligt an die Mutter vermietete Wohnung führt zu einer Nutzungsentnahme von 20.166 €; und ein ungesichertes, teurer refinanziertes Darlehen an den Mitgesellschafter wird handelsrechtlich auf die Insolvenzquote von 5 % abgeschrieben, ist steuerlich aber gar kein Betriebsvermögen – handelsrechtlicher Fehlbetrag 1.182.400 € gegen steuerlichen Verlust 338.234 €. Teil I der Prüfung 2013 (Einzelunternehmen Henrik Mai, 35 Punkte laut Quelle): Das selbst bewohnte Haus wird mit Abbruchabsicht eingelegt, sodass Einlagewert und Abbruchkosten Herstellungskosten der neuen Lagerhalle werden; beim Unfall-LKW stehen handelsrechtlich außerplanmäßige Abschreibung und steuerlich AfaA, neue Regel-AfA und 40 % Sonderabschreibung nebeneinander; und ein Zuschuss, der die Anschaffungskosten übersteigt, wird handelsrechtlich vereinnahmt, steuerlich bis auf 1 € von den Anschaffungskosten abgesetzt und im Übrigen passiv abgegrenzt. Teil II der Prüfung 2013 (Transport und Fahrzeugbau GmbH, 33 Punkte) knüpft den Abschluss an eine Betriebsprüfung an – über den Gewinnvortrag, mit Storno der Vorjahresforderung und gekürzter Rückstellungszuführung –, aktiviert eine selbst entwickelte Anhängevorrichtung nur handelsrechtlich (435.000 €, passive latente Steuern 128.325 €) und behandelt ein Grundstück, das der Alleingesellschafter für 1 € verkauft, als verdeckte Einlage von 869.999 € – handelsrechtlicher Jahresüberschuss 385.945 € gegen steuerlich 86.520 €. Teil III der Prüfung 2013 (A B C – OHG, 31 Punkte) führt durch drei Schichten der Mitunternehmerschaft: den zerstörten Anhänger im Sonderbetriebsvermögen des C (Verlust 3.838 €), die Versicherungsleistung und die Rückstellung für eine behördlich angeordnete Bodensanierung in der Gesamthand, die Drohverlustrückstellung nur in der Handelsbilanz – und den Austritt des lästigen Gesellschafters gegen 200.000 €, bei dem 12.000 € stille Reserven aufgestockt werden und 45.600 € sofort abziehbarer Lästigkeitszuschlag sind. Teil I der Prüfung 2014 (Einzelunternehmen Roland Ritter, 35 Punkte) fragt, was überhaupt in die Bilanz gehört: nicht das Grundstück der Ehefrau (bloßes Nutzungsrecht, die gebuchte Einlage von 250.000 € fällt weg), wohl aber der mit einer Abstandszahlung erworbene Nutzungsvorteil und der Parkplatz auf fremdem Grund; ein PKW mit 5 % Betriebsnutzung ist notwendiges Privatvermögen, und ein ERP-System aus drei Modulen ist ein einziges Wirtschaftsgut mit 300.000 € Anschaffungskosten. Teil II der Prüfung 2014 (InKa-GbR, 32 Punkte): Die als GbR gewollte Gesellschaft ist eine OHG; der Computer des Gesellschafters wandert vom Privatvermögen über das Sonderbetriebsvermögen in die Gesamthand; und beim Eintritt eines Dritten gegen 480.000 € wird der Mehrbetrag über den Kapitalanteil in einer positiven Ergänzungsbilanz aktiviert und bei den Altgesellschaftern durch negative Ergänzungsbilanzen neutralisiert (§ 24 UmwStG). Teil III der Prüfung 2014 (Elektronikmarkt GmbH, 33 Punkte) übt die Technik der drei Buchungskreise („Alle Bereiche“, „Nur Handelsrecht“, „Nur Steuerrecht“): Anpassung an eine Betriebsprüfung über den Gewinnvortrag, Pachtschuld mit Rangrücktritt (§ 5 Abs. 2a EStG), Abschreibung einer Gesellschafterforderung nur handelsrechtlich wegen drohender verdeckter Gewinnausschüttung, § 6b-Rücklage für einen Grundstücksgewinn und eine Einlagenrückgewähr der Tochter, die steuerlich den Beteiligungsbuchwert mindert – mit aktiven und passiven latenten Steuern für jede verbleibende Differenz. Teil I der Prüfung 2015 (Einzelunternehmen Ludwig Lenz, 34 Punkte): Wertaufholung eines Gebäudes nur bis zu den um den § 6b-Abzug geminderten fortgeführten Herstellungskosten, Perioden-Lifo mit Abbau des jüngsten Layers, eine abgesicherte Fremdwährungsforderung als Bewertungseinheit mit Drohverlust nur für den ineffektiven Teil, und ein Teilbetriebsverkauf, bei dem § 4f EStG den Verlust aus der Übernahme einer Mietverpflichtung auf 15 Jahre verteilt. Teil II der Prüfung 2015 (Althaus und Bauermann OHG, 34 Punkte): Nachaktivierung einer vergessenen Forderung im ersten offenen Jahr, Verkauf eines Anteils mit negativem Kapitalkonto (Veräußerungsgewinn 378.000 € einschließlich der personenbezogenen § 6b-Rücklage, Gewinnzuschlag 9.600 €), Ergänzungsbilanz des Erwerbers mit 3 % Gebäude-AfA und anteiligem Firmenwert sowie ein vermietetes Grundstück als Sonderbetriebsvermögen mit AfA nach § 7 Abs. 1 Satz 5 EStG. Teil III der Prüfung 2015 (Müller Holzbau GmbH, 33 Punkte): Anpassung an eine Betriebsprüfung in drei Buchungskreisen mit außerbilanzieller Kürzung um den Ausgleichsposten, Entstrickung einer nach Polen überführten Säge mit § 4g-Ausgleichsposten, übernommene Pensionslasten nach § 5 Abs. 7 EStG mit 14/15-Rücklage und latenten Steuern sowie eine unverzinsliche Kaufpreisforderung zum Barwert. Jede Zahl ist unabhängig nachgerechnet."
            quelle={bilOriginalklausurenQuelle}
            hausaufgaben={bilOriginalklausuren}
            gruppeVon={(eintrag) => eintrag.jahrgang}
            gruppeLabel={(eintrag) => `Prüfung ${eintrag.jahrgang}`}
            gruppeAria="Prüfungsjahrgänge"
            karteKicker={(eintrag) => `Prüfung ${eintrag.jahrgang} · Teil ${eintrag.teil} · ${eintrag.punkte} Punkte`}
            suchePlatzhalter="Norm, Stichwort oder Betrag"
            einheit="Aufgabenteile"
            einheitEinzahl="Aufgabenteil"
          />
        )}
        {ansicht === "hausaufgaben" && (
          <Hausaufgabenseite
            module={alleModule}
            anker={hausaufgabenAnker}
            setAnker={setHausaufgabenAnker}
            oeffnenModul={oeffnen}
          />
        )}
        {ansicht === "schema" && <Schemaseite />}
        {ansicht === "formeln" && <Formelseite />}
        {ansicht === "buchungen" && <Buchungssaetze />}
        {ansicht === "register" && <Registerseite oeffnen={oeffnen} />}
        {ansicht === "training" && <Trainingsseite />}
        {ansicht === "plan" && <Planseite fertig={plan.werte} umschalten={plan.umschalten} />}
      </main>
    </div>
  );
}

/* ================================================================= Cockpit */
function Cockpit({ quote, gerechnet, erledigt, oeffnen, ansichtOeffnen, bereichOeffnen, prioOeffnen }) {
  const naechstes = alleModule.find((m) => !erledigt.includes(m.id)) || alleModule[0];
  const zahl = (bereichId) => alleModule.filter((m) => m.area === bereichId).length;

  return (
    <>
      <div className="cockpit">
        <section className="these">
          <span className="kicker">Klausur 3 · sechs Stunden · 100 Punkte</span>
          <h2>Jede Textziffer beginnt gleich: <em>Mach ABBA.</em></h2>
          <p>
            Zurechnung, Zuordnung, Bewertung, Wertansatz – und danach Buchung im richtigen Buchungskreis.
            Diese Plattform baut den Stoff genau in dieser Reihenfolge auf: {alleModule.length} Module,
            Originalfälle aus den Kursmitschriften, vollständige Normketten und Rechenwege.
          </p>
          <div className="these__aktionen">
            <button className="btn" onClick={() => oeffnen(naechstes.id)}>Weiterlernen</button>
            <button className="btn btn--linie" onClick={() => ansichtOeffnen("schema")}>Prüfungsschema ansehen</button>
          </div>
        </section>
        <section className="panel fortschritt">
          <div className="fortschritt__ringe">
            <div>
              <div className="ring" style={{ "--p": `${quote}%` }}><b>{quote}%</b></div>
              <h3>Bearbeitungsstand</h3>
              <p>{erledigt.length} von {alleModule.length} Modulen abgehakt</p>
            </div>
            <div>
              <div className="ring ring--gerechnet" style={{ "--p": `${gerechnet.quote}%` }}>
                <b>{gerechnet.quote}%</b>
              </div>
              <h3>Selbst gerechnet</h3>
              <p>{gerechnet.anzahl} von {gerechnet.gesamt} Fällen im Klausurmodus bearbeitet</p>
            </div>
          </div>
          {gerechnet.letzter && (
            <p className="fortschritt__lauf">
              Letzter Klausurlauf: {gerechnet.letzter.erreicht} von {gerechnet.letzter.moeglich} Punkten,{" "}
              {gerechnet.letzter.minuten > gerechnet.letzter.sollminuten
                ? `${gerechnet.letzter.minuten - gerechnet.letzter.sollminuten} Minuten über Sollzeit`
                : `${gerechnet.letzter.sollminuten - gerechnet.letzter.minuten} Minuten unter Sollzeit`}
            </p>
          )}
        </section>
      </div>

      <section className="abschnitt">
        <span className="kicker">Weiter im Stoff</span>
        <button className="weiter" onClick={() => oeffnen(naechstes.id)}>
          <span className="kicker">{bereichName[naechstes.area]} · Modul {naechstes.id}</span>
          <PrioBadge prio={prioModul(naechstes)} />
          <h3>{naechstes.title}</h3>
          <p>{naechstes.intro[0]}</p>
          <span className="norm">{naechstes.law}</span>
        </button>
      </section>

      <section className="abschnitt">
        <h2>Aufbau der Plattform</h2>
        <div className="raster raster--3">
          {["EU", "PersG", "KapG", "Technik", "Fall"].map((id) => {
            const gesamt = zahl(id);
            const fertig = alleModule.filter((m) => m.area === id && erledigt.includes(m.id)).length;
            return (
              <article className="bereich" key={id}>
                <b>{gesamt} Module</b>
                <h3>{bereichName[id]}</h3>
                <p>{bereichBeschreibung[id]}</p>
                <div className="bereich__balken" role="img" aria-label={`${fertig} von ${gesamt} bearbeitet`}>
                  <span style={{ width: `${anteil(fertig, gesamt)}%` }} />
                </div>
                <small className="bereich__stand">{fertig} von {gesamt} bearbeitet</small>
                <button onClick={() => bereichOeffnen(id)}>Module öffnen →</button>
              </article>
            );
          })}
          <article className="bereich">
            <b>{formeln.length} Rechenwege</b>
            <h3>Formelsammlung</h3>
            <p>Zinsstaffel, Abzinsung, PWB, Sonder-AfA und Zeitbudget mit belegten Beispielrechnungen.</p>
            <button onClick={() => ansichtOeffnen("formeln")}>Rechenwege öffnen →</button>
          </article>
          <article className="bereich">
            <b>{BEISPIELE.length} Beispiele · {UEBUNGEN.length}+ Übungen</b>
            <h3>Buchungssätze üben</h3>
            <p>Soll an Haben von null an: Lektionen, Kontenplan, Beispiele mit Herleitung und ein Frage-Antwort-Trainer mit Fehlerspeicher.</p>
            <button onClick={() => ansichtOeffnen("buchungen")}>Buchungssätze öffnen →</button>
          </article>
        </div>
      </section>

      <PrioCockpit fach="bilanz" zaehlung={prioZaehlung} onFilter={prioOeffnen} />

      <section className="abschnitt">
        <h2>Das Aufbauschema</h2>
        <AbbaLeiste />
        <Schaubild id="buchungskreise" />
      </section>
    </>
  );
}

const bereichBeschreibung = {
  EU: "Ansatz, Bewertung und Fortführung der Aktiv- und Passivseite – der größte Aufgabenteil.",
  PersG: "Gesamthand, Ergänzungs- und Sonderbilanz bis zum steuerlichen Gesamtgewinn.",
  KapG: "Eigenkapital, Ausschüttung, Einlagekonto, verdeckte Gewinnausschüttung und Einlage.",
  Technik: "Buchungssätze, Mehr-/Weniger-Rechnung, Bilanzberichtigung, Zeit- und Punktemanagement.",
  Fall: "Vollständig durchgerechnete Originalfälle mit Buchungen und HB-/StB-Gegenüberstellung.",
};

function AbbaLeiste() {
  return (
    <div className="abba">
      {abbaFelder.map((f, i) => (
        <div className="abba__feld" key={i}>
          <span className="abba__buchstabe">{f.buchstabe}</span>
          <b>{f.titel}</b>
          <span>{f.text}</span>
        </div>
      ))}
    </div>
  );
}

/* ============================================================= Modulliste */
function Modulliste({ liste, bereich, setBereich, prio, setPrio, suche, erledigt, umschalten, oeffnen }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Lernmodule</span>
          <h1>{suche ? `Treffer für „${suche}“` : bereiche.find((b) => b.id === bereich)?.label}</h1>
          <p className="lead">
            Jedes Modul folgt derselben Gliederung: Einordnung, Lernziele, Prüfungsschema, Normenkette,
            durchgerechneter Fall, Buchungssätze, Merksatz und Klausurfallen.
          </p>
        </div>
        <span className="zaehler">{liste.length} Module</span>
      </div>

      <div className="filter">
        {bereiche.map((b) => (
          <button key={b.id} aria-pressed={bereich === b.id} onClick={() => setBereich(b.id)}>
            {b.label}
          </button>
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
                  <span>{bereichName[m.area]}</span>
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
        {liste.length === 0 && (
          <p className="panel">Keine Treffer. Andere Schreibweise probieren oder den Filter zurücksetzen.</p>
        )}
      </div>
    </>
  );
}

/* ============================================================= Modulseite */
function Tz({ nummer, label, titel, art, children }) {
  return (
    <section className={`tz${art ? ` tz--${art}` : ""}`}>
      <div className="tz__no">
        <b>Tz. {nummer}</b>
        {label}
      </div>
      <div className="tz__body">
        {titel && <h2 className="tz__titel">{titel}</h2>}
        {children}
      </div>
    </section>
  );
}

function Modulseite({ modul: m, erledigt, umschalten, zurueck, oeffnen, oeffnenHausaufgabe }) {
  const fertig = erledigt.includes(m.id);
  const index = alleModule.findIndex((x) => x.id === m.id);
  const vorher = alleModule[index - 1];
  const nachher = alleModule[index + 1];
  let tz = 0;
  const n = () => ++tz;

  return (
    <article className="lesson">
      <button className="zurueck" onClick={zurueck}>← Zurück zur Modulübersicht</button>

      <header className="lesson__kopf">
        <div>
          <span className="kicker">{bereichName[m.area]} · Modul {m.id}</span>
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

      {m.area === "Fall" && <AbbaLeiste />}

      <Erklaervideo modul={m} bereichName={bereichName[m.area]} />

      <Tz nummer={n()} label="Einordnung" titel="Worum es geht">
        {m.intro.map((p, i) => <p key={i}>{p}</p>)}
        {m.diagram && <Schaubild id={m.diagram} />}
      </Tz>

      {m.goals?.length > 0 && (
        <Tz nummer={n()} label="Lernziele" titel="Das können Sie danach">
          <ul className="liste liste--haken">
            {m.goals.map((g, i) => <li key={i}>{g}</li>)}
          </ul>
        </Tz>
      )}

      {m.scheme?.length > 0 && (
        <Tz nummer={n()} label="Schema" titel="Prüfungsreihenfolge" art="ansatz">
          <ol className="schritte">
            {m.scheme.map((s, i) => <li key={i}><span>{s}</span></li>)}
          </ol>
        </Tz>
      )}

      {m.normchain?.length > 0 && (
        <Tz nummer={n()} label="Normen" titel="Normenkette für die Klausur">
          <p>
            In dieser Reihenfolge zitieren. Jede Norm gehört zu genau einem Prüfungsschritt und wird mit
            einem Ergebnissatz abgeschlossen.
          </p>
          <Normkette normen={m.normchain} />
        </Tz>
      )}

      {m.example && (
        <Tz nummer={n()} label="Fall" titel={m.example.title} art="bewertung">
          <div className="fall">
            <div className="fall__block fall__sachverhalt">
              <b>Sachverhalt</b>
              <p>{m.example.facts}</p>
            </div>
            <div className="fall__block">
              <b>Lösung</b>
              <ol>
                {m.example.solution.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
            </div>
            <div className="fall__block fall__ergebnis">
              <b>Ergebnis</b>
              <p>{m.example.result}</p>
            </div>
          </div>
        </Tz>
      )}

      {m.fallsammlung?.length > 0 && (
        <Tz nummer={n()} label="Fallsammlung" titel="Fälle & Lösungen" art="bewertung">
          <p>Die folgenden Fälle sind ausschließlich diesem fachlich einschlägigen Lernmodul zugeordnet. Der Sachverhalt ist direkt sichtbar; die Lösung lässt sich einzeln öffnen.</p>
          <Fallsammlungsfaelle faelle={m.fallsammlung} />
        </Tz>
      )}

      {m.hbstb && (
        <Tz nummer={n()} label="Wertansatz" titel={`Handelsbilanz und Steuerbilanz zum ${m.hbstb.datum}`} art="bewertung">
          <Bilanzspiegel daten={m.hbstb} />
        </Tz>
      )}

      {m.booking?.length > 0 && (
        <Tz nummer={n()} label="Technik" titel="Buchungssätze" art="technik">
          <p>Jede Buchung trägt ihren Buchungskreis. Ohne diese Angabe fehlt in der Klausur ein Punkt.</p>
          {m.booking.map((b, i) => <Buchungssatz key={i} satz={b} />)}
        </Tz>
      )}

      <Tz nummer={n()} label="Sichern" titel="Merksatz und Klausurfallen">
        {m.merksatz && <Notiz><p>{m.merksatz}</p></Notiz>}
        {m.exam?.length > 0 && (
          <Notiz art="exkurs" titel="Prüfungsrelevanz">
            <ul className="liste">
              {m.exam.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </Notiz>
        )}
        {m.traps?.length > 0 && (
          <Notiz art="falle">
            <ul>
              {m.traps.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </Notiz>
        )}
      </Tz>

      {m.sourceIds?.length > 0 && (
        <Tz nummer={n()} label="Quellen" titel="Fundstellen und Rechtsstand">
          <ul className="quellen">
            {m.sourceIds.map((id) => {
              const q = sourceCatalog[id];
              if (!q) return null;
              return (
                <li key={id}>
                  <a href={q.url} target="_blank" rel="noopener noreferrer">
                    <b>{q.title}</b>
                    <span>{q.publisher}</span>
                    <small>{q.note}</small>
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="rechtsstand">{researchNote}</p>
        </Tz>
      )}

      <HausaufgabenZuModul
        modulId={m.id}
        module={alleModule}
        oeffnenHausaufgabe={oeffnenHausaufgabe}
      />

      <nav className="blaettern">
        {vorher ? (
          <button onClick={() => oeffnen(vorher.id)}>
            <small>← Modul {vorher.id}</small>
            <strong>{vorher.title}</strong>
          </button>
        ) : <span />}
        {nachher ? (
          <button onClick={() => oeffnen(nachher.id)}>
            <small>Modul {nachher.id} →</small>
            <strong>{nachher.title}</strong>
          </button>
        ) : <span />}
      </nav>
    </article>
  );
}

/* =========================================================== Schemaseite */
/* Die sechs großen Prüfungsschemata werden regulär hier gerendert. Das Attribut
   data-pruefungsschemata-portal bleibt als Stil-Anker erhalten — SchemaPostitEnhancer.css
   hängt sein Lesefreundlich-Layout daran auf. */
function Schemablock() {
  /* Als Zustand, nicht als Ref: SchemaPostitEnhancer braucht den Knoten als
     Abhängigkeit seines Effekts, und ref.current löst kein erneutes Rendern aus. */
  const [behaelter, setBehaelter] = useState(null);
  const [schema, setSchema] = useState(pruefungsschemata[0].id);
  /* Auch die HGB-Reiteransicht tauscht den angezeigten Text aus - deshalb geht
     sie in das Signal für SchemaPostitEnhancer mit ein. */
  const [nurHgb, setNurHgb] = useState(false);
  return (
    <div data-pruefungsschemata-portal ref={setBehaelter}>
      <Pruefungsschemata aktiv={schema} onWechsel={setSchema} nurHgb={nurHgb} onHgbWechsel={setNurHgb} />
      <SchemaPostitEnhancer root={behaelter} signal={`${schema}·${nurHgb}`} />
    </div>
  );
}

function Schemaseite() {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Prüfungsschema</span>
          <h1>Von der Textziffer zur Gewinnauswirkung</h1>
          <p className="lead">
            Das Gerüst, das in jedem Einzelsachverhalt trägt – unabhängig davon, ob es um einen Lieferwagen,
            eine Rückstellung oder eine verdeckte Gewinnausschüttung geht.
          </p>
        </div>
      </div>

      <AbbaLeiste />
      <Schemablock />

      <section className="panel">
        <h2>Schritt für Schritt</h2>
        <ol className="schritte">
          <li><span><b>Ansatz I – Zurechnung.</b> Zivilrechtliches Eigentum feststellen, dann wirtschaftliches Eigentum prüfen (<Norm>§ 39 Abs. 2 Nr. 1 AO</Norm>). Ergebnissatz schreiben.</span></li>
          <li><span><b>Ansatz II – Zuordnung.</b> Anlage- oder Umlaufvermögen, abnutzbar oder nicht, notwendig oder gewillkürt (<Norm>§ 247 Abs. 2 HGB</Norm>).</span></li>
          <li><span><b>Bewertung I – Maßstab.</b> Fortgeführte AK/HK, Erfüllungsbetrag oder Teilwert?</span></li>
          <li><span><b>Bewertung II – Höhe.</b> AK/HK nach <Norm>§ 255 HGB</Norm> aufbauen, Vorsteuer nach <Norm>§ 9b Abs. 1 EStG</Norm> herausrechnen.</span></li>
          <li><span><b>Bewertung III – Fortführung.</b> AfA, Sonderabschreibung, Abzinsung, Wertberichtigung.</span></li>
          <li><span><b>Bewertung IV – Wertansatz.</b> Getrennt für Handels- und Steuerbilanz, mit Verzeichnis nach <Norm>§ 5 Abs. 1 S. 1 Hs. 2 EStG</Norm>.</span></li>
          <li><span><b>Technik.</b> Bilanzposten, Buchungssatz im richtigen Buchungskreis, Gewinnauswirkung beziffern.</span></li>
        </ol>
        <Notiz><p>Auch bei falscher Zurechnung werden die Folgeschritte bewertet, solange sie konsequent aus der eigenen Lösung entwickelt werden. Deshalb: nie eine Textziffer unbearbeitet lassen.</p></Notiz>
      </section>

      <section className="panel">
        <h2>Die drei Buchungskreise</h2>
        <Schaubild id="buchungskreise" />
      </section>

      <section className="panel">
        <h2>Maßgeblichkeit und ihre Durchbrechungen</h2>
        <Schaubild id="massgeblichkeit" />
      </section>

      <section className="panel">
        <h2>Von der Handelsbilanz zum Einkommen</h2>
        <Schaubild id="mehrWeniger" />
      </section>

      <section className="panel">
        <h2>Begriffe, die in jeder Lösung auftauchen</h2>
        <div className="register">
          {glossar.map((g) => (
            <div className="register__zeile" key={g.begriff}>
              <div>
                <strong>{g.begriff}</strong>
                <div><Norm>{g.norm}</Norm><PrioNorm fach="bilanz" norm={g.norm} /></div>
              </div>
              <div><span>{g.text}</span></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/* =========================================================== Formelseite */
function Formelseite() {
  const gruppen = useMemo(() => {
    const map = new Map();
    for (const f of formeln) {
      if (!map.has(f.gruppe)) map.set(f.gruppe, []);
      map.get(f.gruppe).push(f);
    }
    return [...map.entries()];
  }, []);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Rechenwege</span>
          <h1>Formelsammlung mit belegten Beispielen</h1>
          <p className="lead">
            Alle Rechenschritte, die in der Klausur unter Zeitdruck sitzen müssen – jeweils mit Anwendungsbereich,
            Norm und einer durchgerechneten Zahl aus den Originalfällen.
          </p>
        </div>
        <span className="zaehler">{formeln.length} Rechenwege</span>
      </div>

      {gruppen.map(([gruppe, liste]) => (
        <section className="abschnitt" key={gruppe}>
          <h2>{gruppe}</h2>
          <div className="raster raster--2">
            {liste.map((f) => (
              <article className="formel" key={f.id}>
                <h3>{f.titel} <PrioBadge fach="bilanz" inhalt={f} typ="formel" id={f.id} kompakt /></h3>
                <div className="formel__ausdruck">{f.ausdruck}</div>
                <p>{f.erklaerung}</p>
                <div className="formel__bsp">{f.beispiel}</div>
                <p style={{ marginTop: 10 }}><Norm>{f.norm}</Norm></p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="abschnitt">
        <h2>Zinsstaffel im Bild</h2>
        <Schaubild id="zinsstaffel" />
      </section>
    </>
  );
}

/* ========================================================== Registerseite */
function Registerseite({ oeffnen }) {
  const [filter, setFilter] = useState("");
  const register = useMemo(() => normenregister(), []);
  const q = filter.trim().toLowerCase();
  const gefiltert = register
    .map((g) => ({ ...g, eintraege: g.eintraege.filter((e) => !q || e.norm.toLowerCase().includes(q)) }))
    .filter((g) => g.eintraege.length > 0);
  const gesamt = register.reduce((s, g) => s + g.eintraege.length, 0);

  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Normenregister</span>
          <h1>Von der Vorschrift zum Modul</h1>
          <p className="lead">
            Das Register wird automatisch aus den Normenketten aller Module erzeugt. Wer in der Wiederholung
            über eine Vorschrift stolpert, findet hier sofort den passenden Sachverhalt.
          </p>
        </div>
        <span className="zaehler">{gesamt} Fundstellen</span>
      </div>

      <div className="panel" style={{ marginBottom: 14 }}>
        <label>
          <span className="kicker">Norm filtern</span>
          <input
            className="rechner-input"
            style={{ width: "100%", height: 42, padding: "0 12px", border: "1px solid var(--linie)", background: "var(--feld)", fontFamily: "var(--mono)", marginTop: 8 }}
            value={filter}
            placeholder="z. B. 255 oder 7g oder R 5.7"
            onChange={(e) => setFilter(e.target.value)}
          />
        </label>
      </div>

      {gefiltert.map((g) => (
        <section key={g.gesetz}>
          <div className="gesetzgruppe">
            <h2>{g.gesetz}</h2>
            <span>{g.eintraege.length} Vorschriften</span>
          </div>
          <div className="register">
            {g.eintraege.map((e) => (
              <div className="register__zeile" key={e.norm}>
                <div><Norm>{e.norm}</Norm><PrioNorm fach="bilanz" norm={e.norm} /></div>
                <div>
                  {e.treffer.map((t) => (
                    <button className="register__treffer" key={t.id} onClick={() => oeffnen(t.id)}>
                      {t.id} · {t.title} <PrioBadge prio={prioModul(t)} kompakt />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      {gefiltert.length === 0 && <p className="panel">Keine Vorschrift gefunden.</p>}
    </>
  );
}

/* ========================================================== Trainingsseite */
function Trainingsseite() {
  const [modus, setModus] = useState("quiz");
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Training</span>
          <h1>Abfragen, wiederholen, Zeit rechnen</h1>
          <p className="lead">
            Kurze Einheiten für die Wiederholung: Multiple Choice zu den Kernnormen, Karteikarten für
            Definitionen und ein Zeitrechner für die Klausurplanung. Jeder Durchlauf wird neu gemischt,
            damit nicht die Reihenfolge mitgelernt wird.
          </p>
        </div>
      </div>

      <div className="filter">
        <button aria-pressed={modus === "quiz"} onClick={() => setModus("quiz")}>Quiz</button>
        <button aria-pressed={modus === "karten"} onClick={() => setModus("karten")}>Karteikarten</button>
      </div>

      <div className="training">
        {modus === "quiz" ? <Quiz /> : <Karteikartenstapel />}
        <div>
          <section className="panel rechner">
            <span className="kicker">Zeitrechner</span>
            <h2 style={{ margin: "6px 0 12px" }}>Punkte in Minuten</h2>
            <Zeitrechner />
          </section>
          <section className="panel">
            <span className="kicker">Klausurtakt</span>
            <Schaubild id="klausurzeit" />
          </section>
        </div>
      </div>
    </>
  );
}

/* Fisher-Yates. Die Kopie bleibt stabil, solange der Durchlauf läuft. */
function mischen(liste) {
  const kopie = [...liste];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

const trainingsbereiche = [
  { id: "alle", label: "Alle" },
  { id: "EU", label: "Einzelunternehmen" },
  { id: "PersG", label: "Personengesellschaft" },
  { id: "KapG", label: "Kapitalgesellschaft" },
  { id: "Technik", label: "Technik" },
];

/* ================================================================== Quiz */
function Quiz() {
  const [bereich, setBereich] = useState("alle");
  const [nurFehler, setNurFehler] = useState(false);
  const [fehler, setFehler] = useState(() => {
    const roh = laden("stb-quiz-fehler", []);
    return Array.isArray(roh) ? roh : [];
  });
  const [durchlauf, setDurchlauf] = useState(0);
  const [nr, setNr] = useState(0);
  const [gewaehlt, setGewaehlt] = useState(null);
  const [punkte, setPunkte] = useState(0);
  const [fertig, setFertig] = useState(false);

  useEffect(() => {
    sichern("stb-quiz-fehler", fehler);
  }, [fehler]);

  const fehlerMenge = useMemo(() => new Set(fehler), [fehler]);

  /* Die Auswahl wird pro Durchlauf einmal gemischt. `durchlauf` erzwingt die
     Neuberechnung, wenn erneut gestartet oder der Filter gewechselt wird. */
  const fragen = useMemo(() => {
    const auswahl = quizfragen.filter(
      ([frage, , , , b]) => (bereich === "alle" || b === bereich) && (!nurFehler || fehlerMenge.has(frage))
    );
    return mischen(auswahl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bereich, nurFehler, durchlauf]);

  const neuStarten = (weitereAenderung) => {
    weitereAenderung?.();
    setDurchlauf((d) => d + 1);
    setNr(0);
    setGewaehlt(null);
    setPunkte(0);
    setFertig(false);
  };

  const steuerung = (
    <>
      <div className="filter filter--klein">
        {trainingsbereiche.map((b) => (
          <button
            key={b.id}
            aria-pressed={bereich === b.id}
            onClick={() => neuStarten(() => setBereich(b.id))}
          >
            {b.label}
          </button>
        ))}
      </div>
      <div className="training__schalter">
        <button
          className="btn btn--klein btn--linie"
          aria-pressed={nurFehler}
          disabled={fehler.length === 0}
          title={fehler.length === 0 ? "Noch keine falsch beantworteten Fragen gespeichert" : undefined}
          onClick={() => neuStarten(() => setNurFehler((w) => !w))}
        >
          Nur Fehler wiederholen ({fehler.length})
        </button>
        {fehler.length > 0 && (
          <button className="training__loeschen" onClick={() => neuStarten(() => { setFehler([]); setNurFehler(false); })}>
            Fehlerspeicher leeren
          </button>
        )}
      </div>
    </>
  );

  if (fragen.length === 0) {
    return (
      <section className="panel quiz">
        {steuerung}
        <div className="mitte">
          <h2>Keine Fragen</h2>
          <p>
            {nurFehler
              ? "In diesem Bereich sind keine falsch beantworteten Fragen gespeichert."
              : "Für diesen Bereich sind noch keine Fragen hinterlegt."}
          </p>
        </div>
      </section>
    );
  }

  if (fertig) {
    return (
      <section className="panel quiz">
        {steuerung}
        <div className="mitte">
          <h2>{punkte} von {fragen.length} richtig</h2>
          <p>
            {punkte === fragen.length
              ? "Vollständig. Die Kernnormen sitzen."
              : punkte >= fragen.length * 0.7
                ? "Solide Basis. Die verbliebenen Lücken gezielt über die Module schließen."
                : "Noch Luft nach oben – am besten die Module zu den falsch beantworteten Themen erneut durchgehen."}
          </p>
          {fehler.length > 0 && <p className="quiz__hinweis">{fehler.length} Fragen im Fehlerspeicher.</p>}
          <button className="btn" style={{ marginTop: 12 }} onClick={() => neuStarten()}>Noch einmal</button>
        </div>
      </section>
    );
  }

  const [frage, optionen, richtig, erklaerung] = fragen[nr];
  const antworten = (i) => {
    setGewaehlt(i);
    if (i === richtig) {
      setPunkte((p) => p + 1);
      setFehler((alt) => alt.filter((f) => f !== frage));
    } else {
      setFehler((alt) => (alt.includes(frage) ? alt : [...alt, frage]));
    }
  };
  const weiter = () => {
    if (nr + 1 >= fragen.length) setFertig(true);
    else { setNr(nr + 1); setGewaehlt(null); }
  };

  return (
    <section className="panel quiz">
      {steuerung}
      <div className="quiz__meta">
        <span>Frage {nr + 1} von {fragen.length}{nurFehler ? " · Fehlerwiederholung" : ""} <PrioBadge fach="bilanz" inhalt={{ title: frage, tags: [fragen[nr][4]] }} kompakt /></span>
        <span>{punkte} richtig</span>
      </div>
      <h2>{frage}</h2>
      <div className="optionen">
        {optionen.map((o, i) => {
          let klasse = "";
          if (gewaehlt !== null) {
            if (i === richtig) klasse = "richtig";
            else if (i === gewaehlt) klasse = "falsch";
          }
          return (
            <button key={i} className={klasse} disabled={gewaehlt !== null} onClick={() => antworten(i)}>
              {o}
            </button>
          );
        })}
      </div>
      {gewaehlt !== null && (
        <div className="antwort">
          <b>{gewaehlt === richtig ? "Richtig." : "Nicht ganz."}</b>
          <p>{erklaerung}</p>
          <button className="btn btn--klein" style={{ marginTop: 10 }} onClick={weiter}>
            {nr + 1 >= fragen.length ? "Auswertung" : "Nächste Frage"}
          </button>
        </div>
      )}
    </section>
  );
}

/* ========================================================== Karteikarten */
function Karteikartenstapel() {
  const [gruppe, setGruppe] = useState("alle");
  const [stand, setStand] = useState(() => {
    const roh = laden("stb-karten-stand", {});
    return roh && typeof roh === "object" && !Array.isArray(roh) ? roh : {};
  });
  const [durchlauf, setDurchlauf] = useState(0);
  const [warteschlange, setWarteschlange] = useState([]);
  const [offen, setOffen] = useState(false);
  const [erledigt, setErledigt] = useState(0);

  useEffect(() => {
    sichern("stb-karten-stand", stand);
  }, [stand]);

  const gruppen = useMemo(
    () => ["alle", ...[...new Set(karteikarten.map((k) => k.gruppe))].sort((a, b) => a.localeCompare(b, "de"))],
    []
  );

  const auswahl = useMemo(
    () => karteikarten.filter((k) => gruppe === "alle" || k.gruppe === gruppe),
    [gruppe]
  );

  /* Der Stapel wird pro Durchlauf gemischt; „saß nicht“ hängt die Karte hinten
     wieder an, „saß“ nimmt sie aus dem Durchlauf. */
  useEffect(() => {
    setWarteschlange(mischen(auswahl));
    setOffen(false);
    setErledigt(0);
  }, [auswahl, durchlauf]);

  const karte = warteschlange[0];
  const gesamt = auswahl.length;

  const bewerten = (sicher) => {
    if (!karte) return;
    setStand((alt) => ({ ...alt, [karte.frage]: sicher ? "sicher" : "unsicher" }));
    setOffen(false);
    setWarteschlange((alt) => (sicher ? alt.slice(1) : [...alt.slice(1), alt[0]]));
    if (sicher) setErledigt((z) => z + 1);
  };

  const steuerung = (
    <div className="filter filter--klein">
      {gruppen.map((g) => (
        <button key={g} aria-pressed={gruppe === g} onClick={() => { setGruppe(g); setDurchlauf((d) => d + 1); }}>
          {g === "alle" ? "Alle Gruppen" : g}
        </button>
      ))}
    </div>
  );

  if (!karte) {
    const sicher = auswahl.filter((k) => stand[k.frage] === "sicher").length;
    return (
      <section className="panel">
        {steuerung}
        <div className="mitte">
          <h2>Stapel durchgearbeitet</h2>
          <p>{gesamt} Karten bearbeitet, {sicher} davon als „saß“ markiert.</p>
          <button className="btn" style={{ marginTop: 12 }} onClick={() => setDurchlauf((d) => d + 1)}>
            Neuer Durchlauf
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="panel">
      {steuerung}
      <div className="quiz__meta">
        <span>{erledigt} von {gesamt} sitzen · {warteschlange.length} im Stapel</span>
        <span>
          <PrioBadge fach="bilanz" inhalt={{ title: karte.frage, tags: [karte.gruppe] }} kompakt /> {karte.gruppe}
          {stand[karte.frage] && ` · zuletzt ${stand[karte.frage] === "sicher" ? "saß" : "saß nicht"}`}
        </span>
      </div>
      <div className="karte">
        <p className="karte__frage">{karte.frage}</p>
        {offen && <div className="karte__antwort">{karte.antwort}</div>}
      </div>
      <div className="karte__steuerung">
        {offen ? (
          <>
            <button className="btn" onClick={() => bewerten(true)}>saß</button>
            <button className="btn btn--linie" onClick={() => bewerten(false)}>saß nicht</button>
          </>
        ) : (
          <button className="btn" onClick={() => setOffen(true)}>Antwort zeigen</button>
        )}
        <button className="btn btn--linie" onClick={() => { setOffen(false); setWarteschlange((a) => [...a.slice(1), a[0]]); }}>
          zurückstellen →
        </button>
      </div>
    </section>
  );
}

function Zeitrechner() {
  const [punkte, setPunkte] = useState(25);
  const minuten = Math.round(punkte * 3.6);
  const std = Math.floor(minuten / 60);
  const rest = minuten % 60;
  return (
    <div>
      <input
        type="number"
        min="1"
        max="100"
        value={punkte}
        aria-label="Punkte des Aufgabenteils"
        onChange={(e) => setPunkte(Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
      />
      <strong>{std > 0 ? `${std}:${String(rest).padStart(2, "0")} Std.` : `${minuten} Min.`}</strong>
      <p>3,6 Minuten je Punkt – 360 Minuten Bearbeitungszeit für 100 Punkte. Rund 30 Minuten Reserve für Lesen, Gliederung und Endkontrolle abziehen.</p>
    </div>
  );
}

/* ============================================================== Planseite */
function Planseite({ fertig, umschalten }) {
  return (
    <>
      <div className="pagehead">
        <div>
          <span className="kicker">Lernplan</span>
          <h1>{wochenplan.length} Wochen bis zur Klausursimulation</h1>
          <p className="lead">
            Ein Vorschlag, der die Module in der Reihenfolge bündelt, in der sie aufeinander aufbauen.
            Die letzte Woche gehört einer vollständigen Originalklausur unter Zeitbedingungen.
            Der Plan verweist auf konkrete Modul- und Fallnummern des heutigen Bestands.
          </p>
        </div>
        <span className="zaehler">{fertig.length} / {wochenplan.length} Wochen</span>
      </div>

      <div className="modules">
        {wochenplan.map((w, i) => (
          <label className={`woche${fertig.includes(i) ? " woche--fertig" : ""}`} key={i}>
            <input type="checkbox" checked={fertig.includes(i)} onChange={() => umschalten(i)} />
            <b>W {i + 1}</b>
            <div>
              <h3>{w.titel} <PrioBadge fach="bilanz" inhalt={{ title: w.titel, subtitle: w.inhalt }} typ="woche" id={i + 1} kompakt /></h3>
              <p>{w.inhalt}</p>
            </div>
          </label>
        ))}
      </div>
    </>
  );
}
