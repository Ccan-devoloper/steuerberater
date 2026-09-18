/* Campus Grunderwerbsteuer (K1).

   Neues Fachgebiet in Klausur 1 neben Umsatzsteuer, Abgabenordnung und
   Erbschaftsteuer. Erfasst ist das Lehrgangsskript von Dr. Stephan Vossel
   (Stand 01/2026); das Cockpit sagt offen, welche Abschnitte davon schon im
   Wortlaut vorliegen und welche noch folgen, damit der Campus nicht mehr
   verspricht, als er zeigt. */
import React, { useEffect, useState } from "react";
import { laden, sichern } from "../lib/fortschritt";
import { useAnsichtVerlauf } from "../lib/ansicht-verlauf";
import { CampusTopbar, KlausurenLeiste } from "./CampusKopf";
import K1Fachleiste from "./K1Fachleiste";
import { IconCockpit, IconRegister } from "./Icons";
import KurzskriptBloecke from "./KurzskriptBloecke";
import { grestSkript, grestSkriptQuelle } from "../data/k1-grest-skript.js";
import "./kst.css";

const NAV = [
  ["cockpit", "Cockpit", IconCockpit],
  ["skript", "Skript (Vossel)", IconRegister],
];

/* Was aus dem Skript noch nicht im Wortlaut erfasst ist. Die Liste steht im
   Cockpit, damit der Stand des Campus nachprüfbar bleibt. */
const OFFEN = [
  "III. Steuerbarkeit – der Rest des Abschnitts: die einzelnen Ergänzungstatbestände (§ 1 Abs. 2a, 2b, 3 und 3a GrEStG), ihre Übersicht, das Weitergelten der bis zum 30.06.2021 geltenden Fassung und die Grundstückszugehörigkeit zum Vermögen einer Gesellschaft",
  "IV. Steuerbefreiungen und Steuervergünstigungen (§§ 3 bis 7 GrEStG)",
  "V. Bemessungsgrundlage",
  "VI. Steuersatz und Steuerberechnung",
  "VII. Steuerschuldner, Entstehung und Fälligkeit der Grunderwerbsteuer",
  "VIII. Zuständigkeit, Anzeigepflicht und Unbedenklichkeitsbescheinigung",
  "IX. § 16 GrEStG – Nichtfestsetzung der Steuer, Aufhebung oder Änderung der Steuerfestsetzung",
];

function Cockpit() {
  return (
    <section className="seite">
      <p className="kicker">Klausur 1 · Grunderwerbsteuer</p>
      <h1>Grunderwerbsteuer</h1>
      <p className="lead">
        Das Lehrgangsskript „Vorbereitung auf die Steuerberaterprüfung · Grunderwerbsteuer“ von
        Dr. Stephan Vossel (Stand 01/2026) im Wortlaut. Die Grunderwerbsteuer ist eine
        Verkehrsteuer und folgt deshalb einem anderen Denkmuster als das Ertragsteuerrecht: Sie
        knüpft nicht an das wirtschaftliche Eigentum an, sondern an den Wechsel der
        Rechtsträgerzuordnung eines inländischen Grundstücks. Deshalb sind Einlage und Entnahme
        beim Einzelunternehmer nicht steuerbar, der Verkauf an die eigene Ein-Mann-GmbH aber
        schon – und deshalb sind Personengesellschaften hier <b>keine</b> transparenten Gebilde,
        sondern eigene Rechtsträger.
      </p>
      <div className="kst-karte">
        <h2>Eingepflegt</h2>
        <ul>
          <li><b>I. Charakterisierung der Grunderwerbsteuer</b> – Rechtsträgerbegriff, zivilrechtliche Anknüpfung, Verhältnis zur Umsatzsteuer, mit dem Beispiel der ABC-OHG und den Fundstellen der Quelle.</li>
          <li><b>II. Prüfungsschema</b> – das vollständige fünfstufige Schema mit allen Tatbeständen des § 1 GrEStG, den Befreiungen der §§ 3 bis 7 GrEStG, der Bemessungsgrundlage nach §§ 8 und 9 GrEStG, Steuersatz und Steuerberechnung sowie den acht Steuerschuldner-Tatbeständen des § 13 GrEStG.</li>
          <li><b>III.1 Inländisches Grundstück</b> – der erste Prüfungsschritt: der Grundstücksbegriff über §§ 3, 4 GBO, der Umfang nach §§ 93 bis 96 BGB mit Scheinbestandteilen und Zubehör, die drei Ausnahmen des § 2 Abs. 1 Satz 2 GrEStG (Betriebsvorrichtungen, Mineralgewinnungsrechte, Erbbauzinsanspruch) und die drei grundstücksgleichen Rechte des § 2 Abs. 2 GrEStG – mit dem Pächter-Beispiel und der Behandlung von Miteigentumsanteilen und Wohnungseigentum.</li>
          <li><b>III.2.1 Haupttatbestand (§ 1 Abs. 1 Nr. 1 GrEStG)</b> – steuerbar ist das Verpflichtungsgeschäft, nicht die Erfüllung: dazu Tausch, Schenkungsversprechen, Einbringungs-, Auseinandersetzungs- und Erbbaurechtsvertrag, jeweils mit den Beispielen der Quelle.</li>
          <li><b>III.2.2 Nebentatbestände (§ 1 Abs. 1 Nr. 2 bis 7 GrEStG)</b> – Auflassung ohne Verpflichtungsgeschäft, Eigentumsübergang kraft Gesetzes mit Erbfall, Verschmelzung, Spaltung und Anwachsung, dazu die Abgrenzung zum nicht steuerbaren Formwechsel, das Meistgebot in der Zwangsversteigerung und die Abtretungsgeschäfte.</li>
          <li><b>III.2.3 Ersatztatbestand (§ 1 Abs. 2 GrEStG)</b> – Verschaffung der Verwertungsbefugnis ohne Eigentumsübertragung: atypischer Maklervertrag, Treuhandverhältnisse und ausnahmsweise Leasingverträge, abgegrenzt vom einfachen Pachtvertrag. Dazu die Einleitung zu den Ergänzungstatbeständen.</li>
        </ul>
      </div>
      <div className="kst-karte">
        <h2>Noch nicht im Wortlaut erfasst</h2>
        <p>
          Das Skript hat neun Abschnitte. Die folgenden sind in der Quelle vollständig lesbar und
          werden nach demselben Verfahren nachgezogen wie die übrigen Bestände:
        </p>
        <ul>{OFFEN.map((eintrag) => <li key={eintrag}>{eintrag}</li>)}</ul>
      </div>
    </section>
  );
}

export default function K1GrEStCampus({ onKlausurwechsel, onFachwechsel }) {
  const verlauf = useAnsichtVerlauf();
  const [dunkel, setDunkel] = useState(() => laden("stb-dunkel", false));
  useEffect(() => {
    document.documentElement.dataset.theme = dunkel ? "dark" : "light";
    sichern("stb-dunkel", dunkel);
  }, [dunkel]);

  return (
    <div className="kst-campus">
      <CampusTopbar
        klausur="1"
        marke="1"
        name="Examenscampus Klausur 1"
        untertitel="Verkehrsteuern · Grunderwerbsteuer"
        aufCockpit={() => verlauf.oeffnen("cockpit")}
        navZurueck={verlauf.zurueck}
        navVor={verlauf.vor}
        zurueckMoeglich={verlauf.zurueckMoeglich}
        vorMoeglich={verlauf.vorMoeglich}
        dunkel={dunkel}
        dunkelUmschalten={() => setDunkel((d) => !d)}
      />
      <KlausurenLeiste aktiv="k1" aufCockpit={() => verlauf.oeffnen("cockpit")} onKlausurwechsel={onKlausurwechsel} />
      <K1Fachleiste aktiv="grest" onWechsel={onFachwechsel} />
      <aside className="rail">
        <nav className="rail__nav" aria-label="Grunderwerbsteuer-Hauptnavigation">
          {NAV.map(([id, label, Icon]) => (
            <button
              key={id}
              className="rail__link"
              aria-current={verlauf.ansicht === id ? "true" : undefined}
              onClick={() => verlauf.oeffnen(id)}
            >
              <Icon />{label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="page">
        {verlauf.ansicht === "skript" ? (
          <KurzskriptBloecke
            kicker="Klausur 1 · Grunderwerbsteuer · Skript"
            titel="Skript Grunderwerbsteuer (Vossel)"
            lead="Das Lehrgangsskript „Vorbereitung auf die Steuerberaterprüfung · Grunderwerbsteuer“ von Dr. Stephan Vossel (Stand 01/2026) im Wortlaut. Eingepflegt sind bislang die Abschnitte I (Charakterisierung), II (Prüfungsschema) sowie aus Abschnitt III der erste Prüfungsschritt (inländisches Grundstück), der Haupttatbestand des § 1 Abs. 1 Nr. 1 GrEStG, die Nebentatbestände des § 1 Abs. 1 Nr. 2 bis 7 GrEStG und der Ersatztatbestand des § 1 Abs. 2 GrEStG. Der Abschnitt I klärt die Frage, die alles trägt: Steuerbar ist der Wechsel der Rechtsträgerzuordnung, nicht der Übergang wirtschaftlichen Eigentums – weshalb Personengesellschaften hier eigene Rechtsträger sind und nicht, wie im Ertragsteuerrecht, transparent. Abschnitt II stellt das fünfstufige Prüfungsschema vollständig dar: Steuerbarkeit mit Haupt-, Neben-, Ersatz- und Ergänzungstatbeständen des § 1 GrEStG einschließlich der 90-Prozent-Grenzen und der Zehnjahresfristen, dann Steuerpflicht und Befreiung mit den §§ 3 bis 7 GrEStG, dann Bemessungsgrundlage, Steuersatz und schließlich die acht Steuerschuldner-Tatbestände des § 13 GrEStG."
            quelle={grestSkriptQuelle}
            kapitel={grestSkript}
            gruppeVon={(k) => k.romisch}
            gruppeLabel={(k) => `Abschnitt ${k.romisch}`}
            gruppeAria="Abschnitte des Skripts"
            gruppeAlle="Alle Abschnitte"
            karteKicker="Abschnitt"
            suchePlatzhalter="Norm, Stichwort oder Tatbestand"
          />
        ) : (
          <Cockpit />
        )}
      </main>
    </div>
  );
}
