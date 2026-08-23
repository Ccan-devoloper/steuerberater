import {
  persgQuelle, persgBereiche, persgBereichName,
  persgModule, persgFaelle, persgSchemata, persgQuizfragen,
} from "./k3-persg-tag1.js";

/* 5. Unterrichtstag Personengesellschaften.
   Quelle: „Personengesellschaften in Bilanz, 5. Einheit“.
   Die Datei umfasst 487 physische Bildschirmframes. Zahlreiche Seiten sind
   Scroll-/Standbilder derselben Unterrichtsfolie bzw. derselben Falllösung.
   Jede physische Seite 1–487 wird über tag5CaptureRanges genau einmal einem
   Fachcluster oder einer technischen Unterbrechung zugeordnet. */

export function registerPersGTag5() {
  if (persgQuelle.tags?.some((t) => t.tag === 5)) return;

  persgQuelle.title = "1. bis 5. Tag PersG";
  persgQuelle.companionPages = (persgQuelle.companionPages || 0) + 487;
  persgQuelle.physicalPages = (persgQuelle.physicalPages || persgQuelle.pages || 0) + 487;
  persgQuelle.label = "Unterrichtsnotizen und Einheitsfassungen · 1. bis 5. Unterrichtstag Personengesellschaften";
  persgQuelle.tags = [
    ...(persgQuelle.tags || []),
    { tag:5, title:"Personengesellschaften in Bilanz, 5. Einheit", pages:0, stand:"2026", companion:{ title:"Personengesellschaften in Bilanz, 5. Einheit", pages:487 } },
  ];

  if (!persgBereiche.some((b)=>b.id==="Austritt")) persgBereiche.push({ id:"Austritt", label:"Austritt & Gesellschafterwechsel" });
  if (!persgBereiche.some((b)=>b.id==="Realteilung")) persgBereiche.push({ id:"Realteilung", label:"Realteilung" });
  persgBereichName.Austritt = "Austritt & Gesellschafterwechsel";
  persgBereichName.Realteilung = "Realteilung";

  persgQuelle.tag5CaptureRanges = [
    { start:1, end:48, moduleIds:[38], topic:"Klausurguide Tag 5; Wiederholung Übertragung einzelner Wirtschaftsgüter und § 24 UmwStG; Einstieg Austritt" },
    { start:49, end:80, moduleIds:[39], topic:"Handels-/Zivilrecht des Ausscheidens: Fortbestand der Gesellschaft und Abfindungsanspruch" },
    { start:81, end:119, moduleIds:[40], topic:"Steuerliche Grundtechnik des Ausscheidens gegen Barabfindung; Kapitalkonto, Verbindlichkeit und stille Reserven" },
    { start:120, end:225, moduleIds:[41], topic:"Großer Austrittsfall: Auseinandersetzungsbilanz, § 6b-Rücklage, AfA und Eröffnungs-/Schlussbilanzen" },
    { start:226, end:297, moduleIds:[42], topic:"Ausscheiden gegen Sachwert/Abfindung unter Buchwert; Erfüllung der Abfindungsverbindlichkeit durch Wirtschaftsgut" },
    { start:298, end:340, moduleIds:[43], topic:"Gesellschafterwechsel: Verkauf des Mitunternehmeranteils C an D; Ergänzungsbilanz und AfA-Fortführung" },
    { start:341, end:380, moduleIds:[44], topic:"Realteilung: Grundidee, echte/unechte Realteilung und Buchwertfortführung nach § 16 Abs. 3 S. 2 EStG" },
    { start:381, end:399, moduleIds:[45], topic:"Verwaltungs-/Rechtsprechungsquellen zur echten und unechten Realteilung; Gegenstand der Realteilung" },
    { start:400, end:437, moduleIds:[46], topic:"Realteilungsfall 1: Teilbetriebe/Einzelwirtschaftsgüter, Eröffnungsbilanzen, Buchwertfortführung und Sperrfrist" },
    { start:438, end:486, moduleIds:[46], topic:"Realteilungsfall 2: wertmäßige Verschiebung, Ausgleichszahlung, entgeltlicher/unentgeltlicher Teil und Sperrfrist" },
    { start:487, end:487, moduleIds:[], topic:"Technischer Abschluss-/Videoframe ohne zusätzlichen fachlichen Inhalt" },
  ];

  persgModule.push(
    {
      id:38, sourceTag:5, area:"Austritt", title:"Klausurguide Tag 5: Austritt, Gesellschafterwechsel und Realteilung",
      law:"§ 16 EStG · § 6 Abs. 5 EStG · § 24 UmwStG", difficulty:"Orientierung", minutes:24, sourcePages:[], capturePages:["1–48"], visual:"p5-guide",
      intro:[
        "Die fünfte Einheit beginnt mit einem Klausurguide. Als wesentliche Themen werden die Überführung/Übertragung einzelner Wirtschaftsgüter, § 24 UmwStG, der Austritt von Gesellschaftern, der Gesellschafterwechsel und die Realteilung genannt.",
        "Die ersten Frames wiederholen bewusst die an Tag 3/4 erarbeitete Übertragungs- und Einbringungslogik. Neu hinzu kommen die Beendigung einer Mitunternehmerstellung sowie die steuerliche Verteilung des Mitunternehmervermögens bei Ausscheiden oder Realteilung.",
      ],
      goals:["Tag-5-Themen in die bisherige PersG-Systematik einordnen","Austritt von Gesellschafterwechsel und Realteilung abgrenzen","§16 EStG als zentrale Veräußerungs-/Aufgabenorm erkennen","Wiederholungen aus §6 Abs.5 und §24 mit den neuen Beendigungsfällen verknüpfen"],
      scheme:["Vorgang bestimmen: Ausscheiden, Anteilskauf oder Realteilung?","Zivil-/handelsrechtlichen Fortbestand und Abfindungsanspruch klären.","Steuerlich Veräußerungstatbestand bzw. Buchwertnorm bestimmen.","GHB/ErgBil/SBV und stille Reserven fortentwickeln.","Sperrfristen und Ausgleichszahlungen abschließend prüfen."],
      normchain:["§ 16 Abs. 1 S. 1 Nr. 2 EStG","§ 16 Abs. 3 EStG","§ 6 Abs. 5 EStG","§ 24 UmwStG"],
      sourceNotes:["Einheitsfassung S. 1–48: Klausurguide, Wiederholung der bisherigen Übertragungs-/Einbringungsregeln und Übergang zum Austritt."],
      merksatz:"Tag 5 verbindet den bisherigen Bilanzaufbau mit dem Ende oder Wechsel der Mitunternehmerstellung.",
    },
    {
      id:39, sourceTag:5, area:"Austritt", title:"Ausscheiden eines Gesellschafters: Zivil-/Handelsrecht und Abfindungsanspruch",
      law:"§ 728 BGB · § 135 HGB · § 161 Abs. 2 HGB", difficulty:"Grundlage", minutes:30, sourcePages:[], capturePages:["49–80"], visual:"p5-austritt-zivil",
      intro:[
        "Die Mitschrift stellt als ersten Wertungspunkt klar: Der Austritt eines Gesellschafters führt grundsätzlich nicht zur Auflösung der Gesellschaft. Der Anteil wächst den verbleibenden Gesellschaftern an; der Ausscheidende erhält einen Abfindungsanspruch.",
        "Die Quelle ordnet die Anspruchsgrundlagen gesellschaftsformspezifisch zu: GbR § 728 BGB, OHG § 135 HGB und KG über § 161 Abs. 2 HGB. Für die steuerliche Bilanzierung ist zunächst die Höhe des Abfindungsanspruchs bzw. der Auseinandersetzungswert maßgeblich.",
      ],
      goals:["Fortbestand der Gesellschaft vom Ausscheiden trennen","Abfindungsanspruch gesellschaftsrechtlich einordnen","Auseinandersetzungsbilanz als Bewertungsgrundlage erkennen","zivilrechtliche Abfindung in die steuerliche Folgeprüfung überleiten"],
      scheme:["Gesellschaftsform feststellen.","Ausscheiden ohne Auflösung der Gesellschaft festhalten.","Abfindungsanspruch des Ausscheidenden bestimmen.","Auseinandersetzungswerte/stille Reserven ermitteln.","Steuerliche Veräußerungsfolge nach §16 anschließend prüfen."],
      normchain:["§ 728 BGB","§ 135 HGB","§ 161 Abs. 2 HGB","§ 16 EStG"],
      merksatz:"Austritt ≠ Auflösung: Erst Abfindungsanspruch/Auseinandersetzungswert, dann Steuerfolge.",
    },
    {
      id:40, sourceTag:5, area:"Austritt", title:"Ausscheiden gegen Barabfindung: Veräußerungsgewinn und Bilanztechnik",
      law:"§ 16 Abs. 1 S. 1 Nr. 2 · § 16 Abs. 2 EStG", difficulty:"Kernschema", minutes:44, sourcePages:[], capturePages:["81–119"], visual:"p5-barabfindung", originalCaseId:"persg-fall-18",
      intro:[
        "Beim Ausscheiden gegen Geld wird der Mitunternehmeranteil des Ausscheidenden steuerlich veräußert. Der Veräußerungsgewinn ergibt sich aus Abfindung/Veräußerungspreis abzüglich steuerlichem Buchwert des gesamten Mitunternehmeranteils.",
        "Auf Gesellschaftsebene wird das Kapitalkonto des Ausscheidenden zunächst in eine Abfindungsverbindlichkeit umgegliedert. Soweit die Abfindung den Buchwert übersteigt, sind die auf den Ausscheidenden entfallenden stillen Reserven zu berücksichtigen; die verbleibenden Gesellschafter führen ihre eigenen Anteile fort.",
      ],
      goals:["Abfindung als Veräußerungspreis einordnen","Buchwert des gesamten MU-Anteils bestimmen","Kapitalkonto in Abfindungsverbindlichkeit umbuchen","stille Reserven personenbezogen aufdecken"],
      scheme:["Abfindungsbetrag feststellen.","Buchwert des MU-Anteils inkl. ErgBil/SBV ermitteln.","§16-Abs.-2-Gewinn = Veräußerungspreis ./. Buchwert ./. Veräußerungskosten.","Kapitalkonto des Ausscheidenden in Verbindlichkeit umgliedern.","Mehrwert/Stille-Reserven-Zuordnung und AfA-Fortführung bei den Verbleibenden prüfen."],
      normchain:["§ 16 Abs. 1 S. 1 Nr. 2 EStG","§ 16 Abs. 2 EStG"],
      merksatz:"Barabfindung: Ausscheidender verkauft seinen MU-Anteil; die Gesellschaft zahlt wirtschaftlich seinen Auseinandersetzungswert aus.",
    },
    {
      id:41, sourceTag:5, area:"Austritt", title:"Großer Austrittsfall: Auseinandersetzungsbilanz, § 6b-Rücklage und AfA",
      law:"§ 16 EStG · § 6b EStG · § 7 EStG", difficulty:"Originalfall", minutes:68, sourcePages:[], capturePages:["120–225"], visual:"p5-austritt-fall", originalCaseId:"persg-fall-19",
      intro:[
        "Der umfangreiche Unterrichtsfall verlangt den Veräußerungsgewinn des ausscheidenden C, die Eröffnungsbilanz zum 01.01.2025 und die Fortentwicklung bis 31.12.2025. Die Quelle verlangt außerdem, die auf C entfallende §6b-Rücklage aufzulösen.",
        "Die Bilanzfortführung arbeitet wirtschaftsgutbezogen: stille Reserven werden den Gesellschaftern zugeordnet, Restnutzungsdauern und AfA werden fortentwickelt und die Bilanzansätze nach dem Ausscheiden der C-Personenquote angepasst.",
      ],
      goals:["Auseinandersetzungsbilanz lesen und stille Reserven verteilen","§6b-Rücklage beim ausscheidenden Gesellschafter anteilig auflösen","Eröffnungsbilanz nach Ausscheiden erstellen","AfA/Restnutzungsdauern bis Jahresende fortführen"],
      scheme:["Steuerliche Schlussbilanz vor Ausscheiden aufnehmen.","Auseinandersetzungswerte und stille Reserven je Wirtschaftsgut bestimmen.","C-Anteil an Reserven und §6b-Rücklage in den Veräußerungsgewinn einbeziehen.","Eröffnungsbilanz der verbleibenden Gesellschaft bilden.","AfA und Bilanzwerte zum 31.12.2025 fortentwickeln."],
      normchain:["§ 16 Abs. 1 S. 1 Nr. 2 EStG","§ 16 Abs. 2 EStG","§ 6b EStG","§ 7 EStG"],
      merksatz:"Im Austrittsfall wird nicht pauschal aufgewertet: stille Reserven, Rücklagen und AfA werden wirtschaftsgut- und gesellschafterbezogen fortgeführt.",
    },
    {
      id:42, sourceTag:5, area:"Austritt", title:"Ausscheiden gegen Sachwert: Erfüllung der Abfindung durch Wirtschaftsgut",
      law:"§ 16 EStG · § 6 Abs. 5 EStG", difficulty:"Spezialfall", minutes:48, sourcePages:[], capturePages:["226–297"], visual:"p5-sachwert", originalCaseId:"persg-fall-20",
      intro:[
        "Die Einheit behandelt anschließend das Ausscheiden gegen Sachwert. Im Beispiel beträgt die Abfindungsverbindlichkeit des C 130.000 €, während das übertragene Wirtschaftsgut Grubo 2 mit 110.000 € angesetzt wird; die Differenz wird über eine Sonder-/Ergänzungskomponente abgebildet.",
        "Die Lösung trennt den Veräußerungsgewinn des C von der Bilanzierung der verbleibenden A/B-OHG und prüft für die Sachwertübertragung zusätzlich die Buchwertnormen des §6 Abs.5 EStG. Dadurch entsteht die typische Schnittstelle zwischen Austritt und Einzel-WG-Übertragung.",
      ],
      goals:["Bar- und Sachabfindung unterscheiden","Abfindungsverbindlichkeit mit übertragenem Wirtschaftsgut verrechnen","Veräußerungsgewinn C separat ermitteln","§6 Abs.5 für die Sachwertübertragung zusätzlich prüfen"],
      scheme:["Abfindungsverbindlichkeit feststellen.","Hingabewert/Buchwert des übertragenen Wirtschaftsguts bestimmen.","Differenz zwischen Verpflichtung und Sachwert bilanziell zuordnen.","Veräußerungsgewinn des Ausscheidenden nach §16 bestimmen.","Übertragung des Wirtschaftsguts nach §6 Abs.5 gesondert würdigen."],
      normchain:["§ 16 Abs. 1 S. 1 Nr. 2 EStG","§ 16 Abs. 2 EStG","§ 6 Abs. 5 EStG"],
      merksatz:"Sachabfindung ist doppelt zu denken: Austritt/§16 beim Gesellschafter und Übertragung des Wirtschaftsguts auf der Sachseite.",
    },
    {
      id:43, sourceTag:5, area:"Austritt", title:"Gesellschafterwechsel: entgeltlicher Erwerb eines Mitunternehmeranteils",
      law:"§ 16 Abs. 1 S. 1 Nr. 2 EStG · Ergänzungsbilanz", difficulty:"Klausurklassiker", minutes:56, sourcePages:[], capturePages:["298–340"], visual:"p5-wechsel", originalCaseId:"persg-fall-21",
      intro:[
        "Im Gesellschafterwechsel verkauft C mit Wirkung zum 01.01.2025 seinen zu 1/4 gehaltenen Mitunternehmeranteil für 100.000 € an D. Sonderbetriebsvermögen ist im Grundfall nicht vorhanden.",
        "Die Gesellschaft selbst setzt ihre Buchwerte fort. Mehr- oder Minderwerte aus dem Kaufpreis des D werden gesellschafterbezogen in einer Ergänzungsbilanz des Erwerbers abgebildet. Die Quelle führt anschließend insbesondere die Gebäude-AfA aus Gesamthands- und Ergänzungsbilanz zusammen.",
      ],
      goals:["Verkauf des MU-Anteils bei C nach §16 erfassen","Gesamthandsbilanz unverändert fortführen","Kaufpreisabweichung in Ergänzungsbilanz D abbilden","AfA aus GHB und ErgBil zusammenführen"],
      scheme:["Veräußerungsgewinn C = Kaufpreis ./. Buchwert MU-Anteil bestimmen.","D tritt in die gesellschaftsrechtliche Beteiligung ein; GHB-Buchwerte bleiben bestehen.","Mehrwerte des D auf einzelne Wirtschaftsgüter in Ergänzungsbilanz verteilen.","ErgBil-AfA gesondert rechnen und mit anteiliger GHB-AfA abstimmen.","Schlussbilanz/ErgBil zum Jahresende fortentwickeln."],
      normchain:["§ 16 Abs. 1 S. 1 Nr. 2 EStG","§ 16 Abs. 2 EStG","§ 7 EStG"],
      merksatz:"Beim Anteilskauf ändert sich nicht die GHB-Bewertung, sondern der individuelle Wertansatz des Erwerbers über die Ergänzungsbilanz.",
    },
    {
      id:44, sourceTag:5, area:"Realteilung", title:"Realteilung: echte und unechte Realteilung – Grundschema",
      law:"§ 16 Abs. 3 S. 2 EStG", difficulty:"Kernschema", minutes:46, sourcePages:[], capturePages:["341–380"], visual:"p5-realteilung-master", originalCaseId:"persg-fall-22",
      intro:[
        "Ab Seite 341 wechselt die Einheit zur Realteilung. Ausgangspunkt ist §16 Abs.3 S.2 EStG: Bei Übertragung von Teilbetrieben, Mitunternehmeranteilen oder einzelnen Wirtschaftsgütern in das jeweilige Betriebsvermögen der Realteiler sind grundsätzlich Buchwerte fortzuführen, sofern die Besteuerung der stillen Reserven sichergestellt ist.",
        "Die Quelle unterscheidet echte Realteilung (Aufgabe/Auflösung der Mitunternehmerschaft) und unechte Realteilung (Ausscheiden eines Mitunternehmers bei Fortführung durch die Verbleibenden). Beide Varianten werden in der Verwaltungs-/BFH-Logik unter den Realteilungsgrundsätzen behandelt.",
      ],
      goals:["echte und unechte Realteilung unterscheiden","Buchwertfortführung nach §16 Abs.3 S.2 prüfen","Übertragung in Betriebsvermögen der Realteiler sicherstellen","Ausgleichszahlungen getrennt behandeln"],
      scheme:["Liegt eine echte oder unechte Realteilung vor?","Gegenstand: Teilbetrieb, MU-Anteil oder einzelne WG?","Überführung in jeweiliges Betriebsvermögen der Realteiler?","Besteuerung stiller Reserven sichergestellt?","Buchwertfortführung nach Satz 2; anschließend Sperrfrist/Ausgleichszahlung prüfen."],
      normchain:["§ 16 Abs. 3 S. 2 EStG","§ 16 Abs. 3 S. 3 EStG","§ 16 Abs. 3 S. 4 EStG"],
      merksatz:"Realteilung ist eine Buchwertverteilung auf neue betriebliche Sphären – nicht automatisch eine Gesamtaufdeckung der stillen Reserven.",
    },
    {
      id:45, sourceTag:5, area:"Realteilung", title:"Realteilung: Verwaltungsgrundsätze, Gegenstand und Sperrfrist",
      law:"§ 16 Abs. 3 S. 2–4 EStG", difficulty:"Vertiefung", minutes:42, sourcePages:[], capturePages:["381–399"], visual:"p5-realteilung-sperre",
      intro:[
        "Die Quellenansichten der Einheit greifen die BFH-/Verwaltungsgrundsätze auf. Eine unechte Realteilung liegt insbesondere vor, wenn ein Mitunternehmer gegen Übertragung eines Teilbetriebs, Mitunternehmeranteils oder Einzelwirtschaftsguts ausscheidet und die Mitunternehmerschaft von den Verbleibenden fortgeführt wird.",
        "Werden bei einer Realteilung einzelne Wirtschaftsgüter zum Buchwert übertragen, kann eine spätere Veräußerung oder Entnahme bestimmter wesentlicher Wirtschaftsgüter innerhalb der gesetzlichen Sperrfrist rückwirkend den gemeinen Wert auslösen. Für Übertragungen unmittelbar oder mittelbar auf Körperschaften gelten zusätzliche Einschränkungen.",
      ],
      goals:["Verwaltungsdefinition der unechten Realteilung anwenden","Gegenstand der Realteilung bestimmen","Sperrfrist bei Einzel-WG-Übertragung erkennen","Körperschaftsklausel gesondert prüfen"],
      scheme:["Realteilungsgegenstand bestimmen.","Buchwertfortführung nach Satz 2 prüfen.","Bei Einzel-WG: Sperrfristtatbestand Satz 3 identifizieren.","Veräußerung/Entnahme innerhalb der Sperrfrist überwachen.","Übertragung auf Körperschaft/Personenvereinigung nach Satz 4 gesondert prüfen."],
      normchain:["§ 16 Abs. 3 S. 2 EStG","§ 16 Abs. 3 S. 3 EStG","§ 16 Abs. 3 S. 4 EStG"],
      merksatz:"Buchwert ja – aber bei Einzelwirtschaftsgütern die Realteilungs-Sperrfrist immer mitprüfen.",
    },
    {
      id:46, sourceTag:5, area:"Realteilung", title:"Realteilungsfälle: Teilbetriebe, Wertverschiebung und Ausgleichszahlung",
      law:"§ 16 Abs. 3 EStG · § 16 Abs. 2 EStG", difficulty:"Originalfälle", minutes:72, sourcePages:[], capturePages:["400–486"], visual:"p5-realteilung-fall", originalCaseId:"persg-fall-23",
      intro:[
        "Die Schlussphase rechnet die Realteilung vollständig durch. Die übernommenen Wirtschaftsgüter werden den jeweiligen Einzelunternehmen bzw. Teilbetrieben zugeordnet; Buchwertfortführung, Eröffnungsbilanzen und spätere AfA werden gesellschafterbezogen entwickelt.",
        "Bei wertmäßigen Verschiebungen und Ausgleichszahlungen trennt die Quelle einen unentgeltlichen Realteilungsteil von einem entgeltlichen Teil. In der Schlussrechnung wird ein Teil des Mehrwerts als entgeltlicher Vorgang behandelt und der verbleibende Anteil als Buchwertfortführung fortgesetzt.",
      ],
      goals:["Realteilungsbilanz auf die neuen Betriebe verteilen","Buchwerte/Mehrwerte den richtigen Realteilern zuordnen","Ausgleichszahlung in entgeltlichen und unentgeltlichen Teil zerlegen","Sperrfrist und Folgebilanzierung fortführen"],
      scheme:["Auseinandersetzungs-/Realteilungsbilanz aufstellen.","Übernommene Teilbetriebe/WG je Realteiler bestimmen.","Buchwertfortführung nach §16 Abs.3 S.2 rechnen.","Ausgleichszahlung wertmäßig zuordnen und entgeltlichen Teil nach §16 Abs.2 berechnen.","Eröffnungsbilanzen und AfA/Sperrfrist für die Folgejahre fortführen."],
      normchain:["§ 16 Abs. 3 S. 2 EStG","§ 16 Abs. 3 S. 3 EStG","§ 16 Abs. 2 EStG"],
      merksatz:"Ausgleichszahlung nicht über die gesamte Realteilung stülpen: entgeltlichen Teil isolieren, übrige Buchwertrealteilung fortführen.",
    }
  );

  persgFaelle.push(
    { id:"persg-fall-18", nr:18, sourceTag:5, title:"Ausscheiden C gegen Barabfindung – Grundfall", sourcePages:[], capturePages:["81–119"], moduleIds:[39,40], law:"§ 16 Abs. 1 S. 1 Nr. 2 · Abs. 2 EStG", facts:["A, B und C sind an einer OHG beteiligt. Die Bilanz zeigt Wirtschaftsgüter von 120.000 € und Kapitalkonten A/B/C von jeweils 40.000 €. C scheidet aus und erhält eine Barabfindung; sein Kapitalkonto wird zunächst in eine Abfindungsverbindlichkeit umgegliedert."], tasks:["Steuerlichen Grundtatbestand des Ausscheidens bestimmen.","Veräußerungsgewinn C berechnen.","Bilanz der verbleibenden A/B-OHG nach dem Ausscheiden darstellen."], solution:["Das entgeltliche Ausscheiden ist eine Veräußerung des Mitunternehmeranteils nach §16 Abs.1 S.1 Nr.2 EStG.","Der Gewinn richtet sich nach Abfindung/Veräußerungspreis abzüglich Buchwert des gesamten MU-Anteils.","Die Gesellschaft führt die Buchwerte der verbleibenden A/B-Anteile fort; C wird aus dem Eigenkapital entfernt und seine Abfindungsverpflichtung bilanziert."], result:"Austritt gegen Geld = §16-Veräußerung beim C; die Gesellschaft selbst wird fortgeführt." },
    { id:"persg-fall-19", nr:19, sourceTag:5, title:"Austrittsfall mit § 6b-Rücklage und AfA-Fortführung", sourcePages:[], capturePages:["120–225"], moduleIds:[40,41], law:"§ 16 EStG · § 6b EStG · § 7 EStG", facts:["C scheidet zum 01.01.2025 aus einer OHG aus. Die Unterrichtsaufgabe enthält mehrere Gebäude/Maschinen, eine Auseinandersetzungsbilanz sowie eine §6b-Rücklage. Die auf C entfallende Rücklage soll aufgelöst werden."], tasks:["Veräußerungsgewinn des C ermitteln.","Eröffnungsbilanz 01.01.2025 erstellen.","Bilanzansätze/AfA zum 31.12.2025 fortentwickeln und Schlussbilanz/G&V erstellen."], solution:["Auseinandersetzungswerte werden wirtschaftsgutbezogen mit den Buchwerten verglichen und die stillen Reserven C zugeordnet.","Der C-Anteil an der §6b-Rücklage fließt in die Ausscheidensrechnung ein.","Nach dem Ausscheiden werden die Wertansätze der A/B-OHG und die AfA anhand der verbleibenden bzw. neu zugeordneten Werte fortgeführt."], result:"Der Fall verbindet §16-Veräußerungsgewinn mit Rücklagenauflösung und konkreter Bilanz-/AfA-Fortführung." },
    { id:"persg-fall-20", nr:20, sourceTag:5, title:"Ausscheiden C gegen Sachwert – Grubo 2", sourcePages:[], capturePages:["226–297"], moduleIds:[42], law:"§ 16 EStG · § 6 Abs. 5 EStG", facts:["Im Quellenbeispiel beträgt die Abfindungsverbindlichkeit des C 130.000 €. Zur Erfüllung wird Grubo 2 mit 110.000 € übertragen; die verbleibende Differenz wird gesondert abgebildet."], tasks:["Ausscheidensgewinn C bestimmen.","Erfüllung der Abfindungsverbindlichkeit durch Hingabe des Wirtschaftsguts buchen.","§6-Abs.-5-Folgen der Sachwertübertragung prüfen."], solution:["C wird nach §16 als ausscheidender Mitunternehmer beurteilt.","Die Hingabe des Grundstücks erfüllt die Abfindungsverbindlichkeit nur in Höhe des maßgeblichen Sachwerts; die Differenz bleibt gesondert zu behandeln.","Für die Übertragung des Wirtschaftsguts wird zusätzlich §6 Abs.5 EStG geprüft."], result:"Sachwertabfindung = §16-Austritt plus gesonderte Übertragungsprüfung des hingegebenen Wirtschaftsguts." },
    { id:"persg-fall-21", nr:21, sourceTag:5, title:"Gesellschafterwechsel C → D für 100.000 €", sourcePages:[], capturePages:["298–340"], moduleIds:[43], law:"§ 16 Abs. 1 S. 1 Nr. 2 EStG · Ergänzungsbilanz", facts:["A, B und C sind Mitunternehmer der ABC-OHG. C hält 1/4 und verkauft den Mitunternehmeranteil mit Wirkung zum 01.01.2025 für 100.000 € an D. Sonderbetriebsvermögen ist nicht vorhanden. Die Bilanz enthält Grubo 100.000 €, Gebäude 120.000 €, Maschine 100.000 €, Forderungen 10.000 €, Bank 90.000 €; Kapital I A/B je 150.000 €, C 100.000 €, Verbindlichkeiten 20.000 €."], tasks:["Veräußerungsgewinn C bestimmen.","Eröffnungsbilanz nach dem Gesellschafterwechsel darstellen.","Bilanz zum 31.12.2025 einschließlich AfA aus GHB/ErgBil fortentwickeln."], solution:["C veräußert seinen MU-Anteil nach §16 Abs.1 S.1 Nr.2 EStG.","Die GHB wird durch den Anteilskauf nicht aufgewertet; D tritt in das Kapitalkonto ein.","Kaufpreisbedingte Mehr-/Minderwerte werden in einer Ergänzungsbilanz des D verteilt und über Mehr-AfA/Minder-AfA fortgeschrieben."], result:"Gesellschafterwechsel: GHB bleibt auf Buchwerten; individueller Kaufpreis des D lebt in seiner Ergänzungsbilanz." },
    { id:"persg-fall-22", nr:22, sourceTag:5, title:"Echte Realteilung mit N und C – 3,3 Mio. € Teilwerte", sourcePages:[], capturePages:["341–437"], moduleIds:[44,45,46], law:"§ 16 Abs. 3 S. 2–4 EStG", facts:["Die Quelle nennt Teilwerte/gemeine Werte von insgesamt 3.300.000 €: Grund und Boden 400.000 €, Gebäude 900.000 €, Maschinen 460.000 €, Betriebsausstattung 280.000 €, Beteiligung V-GmbH 380.000 €, übrige Aktiva 430.000 € und Firmenwert 450.000 €. Die OHG wird real aufgeteilt. N übernimmt u.a. ein bebautes Grundstück, die GmbH-Beteiligung und Darlehenspositionen; C übernimmt das übrige Vermögen als Teilbetrieb. Wegen Mehrwerts leistet N eine Ausgleichszahlung von 100.000 € aus dem Privatvermögen."], tasks:["Echte Realteilung und Buchwertfortführung prüfen.","Übernommene Wirtschaftsgüter den neuen Einzelunternehmen zuordnen.","Ausgleichszahlung und Sperrfristfolgen beurteilen."], solution:["Die Auflösung/Verteilung auf neue Betriebsvermögen erfüllt die Grundstruktur der echten Realteilung.","§16 Abs.3 S.2 ermöglicht Buchwertfortführung, soweit die Besteuerung der stillen Reserven gesichert bleibt.","Bei Einzel-WG sind Sperrfrist und Körperschaftsklausel zusätzlich zu prüfen; die private Ausgleichszahlung wird gesondert vom Buchwertteil behandelt."], result:"Buchwertrealteilung mit gesonderter Behandlung von Wertausgleich und Sperrfrist." },
    { id:"persg-fall-23", nr:23, sourceTag:5, title:"Realteilung TB 1 / TB 2 mit Wertausgleich", sourcePages:[], capturePages:["438–486"], moduleIds:[46], law:"§ 16 Abs. 3 EStG · § 16 Abs. 2 EStG", facts:["Die Schlusslösung verteilt zwei Teilbetriebe auf A und B. In der grafischen Quellenrechnung stehen TB 1 mit 530.000 € und TB 2 mit 610.000 € gegenüber; beim wertmäßig verschobenen Teil werden 40.000 € als entgeltliche Komponente und 570.000 € als unentgeltliche/Buchwert-Komponente herausgearbeitet."], tasks:["Wertmäßige Verschiebung zwischen A und B ermitteln.","Entgeltlichen Anteil der Ausgleichszahlung isolieren.","Restliche Buchwertrealteilung und Folgewerte bestimmen."], solution:["Die Realteilung wird in entgeltlichen und unentgeltlichen Teil zerlegt.","Der entgeltliche Anteil löst insoweit Veräußerungsgewinn nach §16 Abs.2 aus; die übrige Übertragung bleibt im Buchwertregime des §16 Abs.3.","Eröffnungswerte/AfA und Sperrfrist werden für die übernommenen Wirtschaftsgüter fortgeführt."], result:"Ausgleichszahlung führt nur anteilig zu Entgeltlichkeit; die übrige Realteilung bleibt Buchwertvorgang." },
  );

  persgSchemata.push(
    { id:"p5-austritt", title:"Ausscheiden eines Gesellschafters", law:"§ 16 Abs. 1 S. 1 Nr. 2 EStG", moduleIds:[39,40,41,42], visual:"p5-austritt-master" },
    { id:"p5-wechsel", title:"Gesellschafterwechsel und Ergänzungsbilanz", law:"§ 16 EStG · Ergänzungsbilanz", moduleIds:[43], visual:"p5-wechsel" },
    { id:"p5-realteilung", title:"Realteilung – echte/unechte, Sperrfrist und Ausgleich", law:"§ 16 Abs. 3 EStG", moduleIds:[44,45,46], visual:"p5-realteilung-master" },
  );

  persgQuizfragen.push(
    { q:"Führt der Austritt eines Gesellschafters zivilrechtlich automatisch zur Auflösung der Gesellschaft?", a:"Nein. Die Quelle stellt den Fortbestand der Gesellschaft und den Abfindungsanspruch des Ausscheidenden heraus." },
    { q:"Welche EStG-Norm erfasst das entgeltliche Ausscheiden eines Mitunternehmers?", a:"§ 16 Abs. 1 S. 1 Nr. 2 EStG; der Gewinn wird nach § 16 Abs. 2 EStG ermittelt." },
    { q:"Wo werden kaufpreisbedingte Mehrwerte beim entgeltlichen Gesellschafterwechsel abgebildet?", a:"Nicht in der GHB, sondern gesellschafterbezogen in der Ergänzungsbilanz des Erwerbers." },
    { q:"Was ist die Grundnorm der Buchwertrealteilung?", a:"§ 16 Abs. 3 S. 2 EStG." },
    { q:"Welche Zusatzprüfung ist bei Realteilung einzelner Wirtschaftsgüter besonders wichtig?", a:"Die Sperrfrist des § 16 Abs. 3 S. 3 EStG und gegebenenfalls die Körperschaftsklausel des Satzes 4." },
    { q:"Wie wird eine Ausgleichszahlung bei der Realteilung behandelt?", a:"Der entgeltliche Anteil wird isoliert; der übrige Teil bleibt – bei erfüllten Voraussetzungen – Buchwertrealteilung." },
  );
}
