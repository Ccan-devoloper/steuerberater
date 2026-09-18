/* Campus Grunderwerbsteuer (K1).

   Neues Fachgebiet in Klausur 1 neben Umsatzsteuer, Abgabenordnung und
   Erbschaftsteuer. Erfasst ist das Lehrgangsskript von Dr. Stephan Vossel
   (Stand 01/2026) – seit dieser Runde vollständig, alle neun Abschnitte im
   Wortlaut. Das Cockpit listet die Abschnitte einzeln auf, damit der Stand des
   Campus nachprüfbar bleibt. */
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
          <li><b>III.2.4.1 § 1 Abs. 2a GrEStG</b> – die 90-Prozent-Grenze bei Personengesellschaften: die Fiktion einer neuen Personengesellschaft, die Unterscheidung Alt- gegen Neugesellschafter, die doppelte Wirkung der Zehnjahresfrist, die grundstücksbezogene Auslegung einer gesellschaftsbezogenen Norm und die unterschiedliche Behandlung mittelbarer Beteiligungen über Personen- und Kapitalgesellschaften – mit allen sechs Beispielen der Quelle.</li>
          <li><b>III.2.4.2 § 1 Abs. 2b GrEStG und die Börsenklausel</b> – die Parallelnorm für Kapitalgesellschaften seit dem 01.07.2021, an der auch der RETT-Blocker scheitert; die Übergangsregel des § 23 Abs. 23 GrEStG für Anteilsübergänge vor dem Stichtag; und die Börsenklausel des § 1 Abs. 2c GrEStG, die börsengehandelte Anteile aus der Berechnung nimmt. Eine Tabelle stellt beide Normen nebeneinander.</li>
          <li><b>III.2.4.3 § 1 Abs. 3 GrEStG</b> – der rechtsformunabhängige Auffangtatbestand mit umgekehrter Fiktion: Nicht die Gesellschaft gilt als neu, sondern der Erwerber erwirbt fiktiv den Grundbesitz. Ohne Zehnjahresfrist, dafür mit engerer Erwerberdefinition – dazu die Mitgliedschaftsrechte bei Personengesellschaften, die 90-Prozent-Schwelle für vermittelnde Gesellschaften und die grunderwerbsteuerliche Organschaft, die genau diese Schwelle aushebelt.</li>
          <li><b>III.2.4.4 bis 2.4.7 § 1 Abs. 3a GrEStG und die Schlussstücke</b> – die wirtschaftliche Beteiligung, die ohne Mindestbeteiligungsschwellen durchgerechnet wird und damit den RETT-Blocker trifft; die Übergangsregeln des § 23 Abs. 20 ff. GrEStG zur Absenkung von 95 % auf 90 % samt Aufstockungsproblem; und die Zurechnung von Grundstücken nach § 1 Abs. 4a GrEStG. <b>Damit ist Abschnitt III vollständig.</b></li>
          <li><b>IV.1.1 Die acht Befreiungen des § 3 GrEStG</b> – Bagatellgrenze, Zurücktreten hinter das Erbschaftsteuergesetz, Erbauseinandersetzung, Ehegatten und Lebenspartner, Scheidung und Aufhebung, Verwandte in gerader Linie nebst Stiefkindern, fortgesetzte Gütergemeinschaft und der Rückerwerb des Treugebers.</li>
          <li><b>IV.1.2 und 2 Befreiungen bei den Ergänzungstatbeständen und § 4 GrEStG</b> – ob die personenbezogenen Befreiungen auf Anteilsübertragungen durchschlagen, hängt davon ab, welcher Ergänzungstatbestand greift und welche Rechtsform die grundstückshaltende Gesellschaft hat; eine Tabelle stellt die sechs Fallgruppen mit ihren Fundstellen nebeneinander. Dazu die punktuellen Sonderbefreiungen des § 4 GrEStG mit dem Gegenseitigkeitserfordernis.</li>
          <li><b>IV.3 §§ 5, 6 GrEStG – Gesamthänder und Gesamthand</b> – der Kern des grunderwerbsteuerlichen Personengesellschaftsrechts: Weil die Gesamthand eigener Rechtsträger ist, ist die Übertragung auf „ihre“ Gesellschafter und von ihnen steuerbar; die Steuer wird aber insoweit nicht erhoben, wie die gesamthänderische Mitberechtigung erhalten bleibt. Mit der Interpolation, den Zehnjahresfristen der §§ 5 Abs. 3, 6 Abs. 3, 6 Abs. 4 Nr. 1 und 2 GrEStG und der Fünfzehnjahresfrist des § 6 Abs. 4 Nr. 3 GrEStG.</li>
          <li><b>IV.4 § 6a GrEStG – Umstrukturierung im Konzern</b> – welche Rechtsvorgänge begünstigt sind, wer herrschendes Unternehmen und abhängige Gesellschaft ist, wann die Begünstigung nur quotal gewährt wird und warum die Fünfjahresfristen nur einzuhalten sind, soweit das umwandlungsrechtlich möglich ist.</li>
          <li><b>IV.5 und 6 § 7 GrEStG und § 1 Abs. 6 GrEStG</b> – die Umwandlung von gemeinschaftlichem Eigentum in Flächeneigentum, die nach Wertverhältnissen und nicht nach Quoten rechnet, und das Aufeinanderfolgen von Tatbeständen, das im Ergebnis zu einer einmaligen Besteuerung der höheren Bemessungsgrundlage führt. <b>Damit ist Abschnitt IV vollständig.</b></li>
          <li><b>V Bemessungsgrundlage</b> – der Grundsatz des § 8 Abs. 1 GrEStG (die vereinbarte Gegenleistung, nicht der Verkehrswert) und der Grundbesitzwert des § 8 Abs. 2 GrEStG, wenn keine Gegenleistung bestimmbar ist. Dazu der einheitliche Erwerbsgegenstand, der aus Grundstückskauf und Bauvertrag ein bebautes Grundstück macht, die Aufteilung der Gesamtgegenleistung und der vollständige Katalog des § 9 Abs. 2 GrEStG – nichtdauernde Lasten, Maklergebühr, Grundpfandrecht, Umsatzsteueroption.</li>
          <li><b>VI Steuersatz und Steuerberechnung</b> – der Regelsatz von 3,5 % und die Ländersätze nach der Föderalismusreform 2006 in einer Tabelle aller sechzehn Bundesländer, die Abrundung auf volle Euro und die Pauschbesteuerung des § 12 GrEStG.</li>
          <li><b>VII Steuerschuldner, Entstehung und Fälligkeit</b> – die acht Tatbestände des § 13 GrEStG: bei den Regelfällen beide Vertragsteile als Gesamtschuldner nach § 44 AO, bei § 1 Abs. 2a und 2b GrEStG die Gesellschaft selbst, bei § 1 Abs. 3 Nr. 1 und 2 sowie Abs. 3a GrEStG allein der Erwerber. Dazu die Entstehung nach § 38 AO mit der Abgrenzung von aufschiebender Bedingung und Befristung und die Fälligkeit einen Monat nach Bekanntgabe.</li>
          <li><b>VIII Zuständigkeit, Anzeigepflicht, Unbedenklichkeitsbescheinigung</b> – das Belegenheitsfinanzamt und die gesonderten Feststellungen des § 17 GrEStG, die doppelte Anzeigepflicht von Notaren und Beteiligten mit der Zwei-Wochen-Frist und die Bescheinigung, ohne die das Grundbuchamt nicht einträgt.</li>
          <li><b>IX § 16 GrEStG</b> – Rückgängigmachung vor und nach Eigentumsübergang, die Zweijahresfrist der Nr. 1 gegenüber der fristlosen Nr. 2, die Herabsetzung der Gegenleistung und § 16 Abs. 4a GrEStG als Antwort auf das Signing-Closing-Problem, bei dem ein einziger Anteilsverkauf zweimal Grunderwerbsteuer auslöst – mit dem AdV-Beschluss des BFH vom 09.07.2025. <b>Damit ist das Skript vollständig.</b></li>
        </ul>
      </div>
      <div className="kst-karte">
        <h2>Stand des Bestandes</h2>
        <p>
          Das Skript hat neun Abschnitte (I bis IX). Sie sind <b>vollständig</b> im Wortlaut
          erfasst – 20 Kapitel mit 488 Abschnitten und 12 Tabellen, einschließlich aller
          Beispiele, Lösungen und Fundstellen der Quelle. Wo die Quelle sich widerspricht oder
          eine Fundstelle nicht trägt, steht ihr Wortlaut unverändert und der Befund daneben;
          nachgetragen wird nichts.
        </p>
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
            lead="Das Lehrgangsskript „Vorbereitung auf die Steuerberaterprüfung · Grunderwerbsteuer“ von Dr. Stephan Vossel (Stand 01/2026) im Wortlaut. Eingepflegt sind alle neun Abschnitte der Quelle: I (Charakterisierung), II (Prüfungsschema), III (Steuerbarkeit) mit allen vier Ergänzungstatbeständen, IV (Steuerbefreiungen und Steuervergünstigungen, §§ 3 bis 7 GrEStG nebst § 1 Abs. 6 GrEStG), V (Bemessungsgrundlage), VI (Steuersatz und Steuerberechnung), VII (Steuerschuldner, Entstehung und Fälligkeit), VIII (Zuständigkeit, Anzeigepflicht und Unbedenklichkeitsbescheinigung) und IX (§ 16 GrEStG). Abschnitt I klärt die Frage, die alles trägt: Steuerbar ist der Wechsel der Rechtsträgerzuordnung, nicht der Übergang wirtschaftlichen Eigentums – weshalb Personengesellschaften hier eigene Rechtsträger sind und nicht, wie im Ertragsteuerrecht, transparent. Abschnitt II stellt das fünfstufige Prüfungsschema vollständig dar: Steuerbarkeit mit Haupt-, Neben-, Ersatz- und Ergänzungstatbeständen des § 1 GrEStG einschließlich der 90-Prozent-Grenzen und der Zehnjahresfristen, dann Steuerpflicht und Befreiung mit den §§ 3 bis 7 GrEStG, dann Bemessungsgrundlage, Steuersatz und schließlich die acht Steuerschuldner-Tatbestände des § 13 GrEStG."
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
