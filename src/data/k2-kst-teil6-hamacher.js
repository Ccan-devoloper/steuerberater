/* KSt Teil VI – Körperschaft- und gewerbesteuerliche Organschaft
   (§§ 14 – 19 KStG; § 2 Abs. 2 Satz 2 GewStG), Hamacher, 21. Auflage,
   Rechtsstand Mai 2025.

   Wortlautgetreue Übernahme des Lehrgangsskripts „Körperschaftsteuer, Teil VI:
   Körperschaft- und gewerbesteuerliche Organschaft (§§ 14 – 19 KStG; § 2 Abs. 2
   Satz 2 GewStG)" aus den Lehrgangsunterlagen (98 Seiten). Das Skript hat vier
   Kapitel: 1 Formen der Organschaft, 2 Voraussetzungen der Organschaft,
   3 Auswirkungen der Organschaft und 4 Gewerbesteuerliche Organschaft.
   Gegliedert wird hier nach den Abschnitten der Quelle; jeder Abschnitt steht
   als eigener Eintrag.

   STAND DER ÜBERNAHME: Aus Kapitel 1 sind die körperschaftsteuerliche
   Organschaft mit ihren Hintergründen und Rechtsgrundlagen (1.1) sowie die
   gewerbe- und umsatzsteuerliche Organschaft (1.2) übernommen. Aus Kapitel 2
   sind die Tatbestandsvoraussetzungen (2.1), die Organgesellschaft (2.2) und
   die Rechtsformunabhängigkeit des Organträgers (2.3.1) übernommen. Es folgen
   die weiteren Abschnitte; der Campus weist den Stand aus.

   HINWEIS ZUM RECHTSSTAND: Dieses Skript trägt den Rechtsstand Mai 2025.

   HINWEIS ZUR QUELLE: Der Text ist unmittelbar aus der PDF-Datei extrahiert
   (pypdf, 98 Seiten), weil die Textausgabe des Drive-Readers bei umfangreichen
   PDF-Dateien ohne Fehlermeldung abbrechen kann. Das personenbezogene
   Wasserzeichen der Vorlage ist auf allen 98 Seiten entfernt.

   Die Fußnoten der Quelle sind nicht als eigene Blöcke übernommen; die
   Fundstellen, auf die sie verweisen, stehen im Feld `normen` des jeweiligen
   Kapitels oder werden im Text ausdrücklich genannt.

   EIGENE ERGÄNZUNGEN sind durchgehend als solche gekennzeichnet. Wo die Quelle
   sprachlich oder rechnerisch von sich selbst abweicht, ist der Wortlaut
   übernommen und mit „(so in der Quelle)" markiert. */

const VERFASSER = "Hamacher";
const RECHTSSTAND = "Stand 05/2025";

export const kstTeil6Quelle = {
  reihe: "Körperschaftsteuer · Teil VI: Körperschaft- und gewerbesteuerliche Organschaft (§§ 14 – 19 KStG) · Hamacher",
  stand: "Stand 05/2025 (21. Auflage)",
  verfasser: "Hamacher",
  didaktik: [
    "Wortlautgetreue Übernahme des Lehrgangsskripts; eigene Ergänzungen sind durchgehend als solche gekennzeichnet.",
    "Jeder Abschnitt der Quelle steht als eigener Eintrag; die Nummerierung folgt dem Inhaltsverzeichnis des Skripts.",
    "Sämtliche Zahlen der Beispiele sind unabhängig nachgerechnet; Abweichungen und Eigenheiten der Quelle sind mit „(so in der Quelle)“ gekennzeichnet.",
  ],
};

export const kstTeil6 = [
  {
    id: "kst-t6-1",
    kapitel: "1",
    abschnittNr: "1",
    title: "1. Formen der Organschaft",
    thema: "Die körperschaftsteuerliche Organschaft verlagert sämtliche Steuerfolgen auf den Organträger; die gewerbesteuerliche folgt ihr automatisch, die umsatzsteuerliche hat eigene Voraussetzungen",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil VI (Hamacher), Abschnitte 1 bis 1.2.2 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§§ 14 bis 19 KStG",
      "§ 301 AktG",
      "§ 302 AktG",
      "§ 8a KStG",
      "§ 2 Abs. 2 Satz 2 GewStG",
      "§ 2 Abs. 2 Nr. 2 UStG",
      "EuGH vom 11.07.2024, C-184/23",
      "BFH vom 29.08.2024, V R 14/24",
      "OFD Frankfurt am Main vom 19.03.2024, S 7105 A-00013-0357",
    ],
    themen: ["Organschaft", "Konzernsteuerrecht", "Gewinnabführung", "Verlustübernahme", "gewerbesteuerliche Organschaft", "umsatzsteuerliche Organschaft", "Innenumsätze"],
    bloecke: [
      { typ: "titel", text: "1. Formen der Organschaft" },
      { typ: "titel", text: "1.1 Körperschaftsteuerliche Organschaft" },
      { typ: "titel", text: "1.1.1 Auswirkungen und Hintergründe" },
      { text: "Die körperschaftsteuerliche Organschaft ist Ausfluss des Konzernsteuerrechts, welches als Sondertatbestand im Zweiten Kapital des KStG in den §§ 14 – 19 KStG verankert ist. Dieses hat sich aus der ständigen Zivilrechtsprechung immer mehr herausgebildet und ist ein wesentlicher Bestandteil des Unternehmensteuerrechts. Die Besteuerungsfolgen können daraus erheblich sein, weil die wirksame Vereinbarung einer Organschaft die Trennung zwischen den verschiedenen Rechtssphären aufhebt und sämtliche steuerlichen Konsequenzen daraus auf die Ebene des Organträgers verlagert werden. Daher erfolgt die Besteuerung des Organeinkommens auch nur beim Organträger, was aufgrund der Gewinnabführung i.S. des § 301 AktG bzw. der Verlustübernahme nach § 302 AktG auch sachgerecht ist. Für die Begründung eines Organschaftsverhältnisses können insbesondere folgende Erwägungen sprechen: (Die Schreibweise „im Zweiten Kapital des KStG“ steht so in der Quelle; die Fußnote nennt als Ausgangspunkt der Rechtsprechung erstmals das Preußische Landgericht im Jahr 1909.)" },
      { text: "- Wirksamere Ergebnisverrechnung zwischen Organgesellschaft und Organträger;" },
      { text: "- Verbesserte Verlustnutzung auf Ebene des Organträgers;" },
      { text: "- Vermeidung von (verdeckten) Gewinnausschüttungen zwischen Organgesellschaft und Organträger, weil die Gewinne der Organgesellschaft an den Organträger lediglich abgeführt; (Der unvollständige Satz steht so in der Quelle; gemeint ist „lediglich abgeführt werden“.)" },
      { text: "- Steueroptimale Gestaltung bei der Zinsschranke i.S. des § 8a KStG, weil der Organkreis als ein Betrieb gilt." },
      { typ: "titel", text: "1.1.2 Rechtsgrundlagen der Organschaft" },
      { text: "Die Vorschriften der körperschaftsteuerlichen Organschaft sind in den §§ 14 – 19 KStG enthalten:" },
      { typ: "tabelle", spalten: ["Vorschrift", "Gegenstand"], zeilen: [
        ["§ 14 KStG", "Allgemeine Voraussetzungen der Organschaft"],
        ["§ 15 KStG", "Einkommensermittlung bei der Organgesellschaft"],
        ["§ 16 KStG", "Ausgleichszahlungen"],
        ["§ 17 KStG", "Auswirkungen bei Organgesellschaften anderer Rechtsform"],
        ["§ 19 KStG", "Steuerabzug und tarifliche Besonderheiten beim Organträger"],
      ] },
      { typ: "titel", text: "1.2 Andere Formen der Organschaft" },
      { typ: "titel", text: "1.2.1 Gewerbesteuerliche Organschaft" },
      { text: "Sind die Voraussetzungen der körperschaftsteuerlichen Organschaft erfüllt, liegt gleichzeitig auch eine gewerbesteuerliche Organschaft vor (siehe § 2 Abs. 2 Satz 2 GewStG). Deren Grundzüge werden unter 4. dargestellt." },
      { typ: "titel", text: "1.2.2 Umsatzsteuerliche Organschaft" },
      { text: "Bei der umsatzsteuerlichen Organschaft (siehe § 2 Abs. 2 Nr. 2 UStG) sind aber von der Körperschaftsteuer abweichende Tatbestandsmerkmale zu beachten, weil dafür neben der finanziellen Eingliederung auch auf die wirtschaftliche und organisatorische Eingliederung abzustellen sind. Der Abschluss eines Gewinnabführungsvertrags ist für umsatzsteuerliche Zwecke nicht erforderlich. (Die Form „abzustellen sind“ steht so in der Quelle.)" },
      { text: "Sind diese Voraussetzungen erfüllt, werden Organträger und Organgesellschaft wie ein einheitliches Unternehmen behandelt. Dies bedeutet, dass etwaige Leistungsbeziehungen zwischen diesen beiden Rechtsträgern umsatzsteuerlich als Innenumsätze gewürdigt werden und daher nicht steuerbar sind. Weil die Organgesellschaft als unselbständig behandelt wird, gilt nur der Organträger als Unternehmer. (Die Fußnoten nennen dazu EuGH vom 11.07.2024, C-184/23, und BFH vom 29.08.2024, V R 14/24, sowie zusammenfassend die Verfügung der OFD Frankfurt am Main vom 19.03.2024.)" },
      { typ: "tabelle", spalten: ["Merkmal", "Körperschaftsteuer", "Umsatzsteuer"], zeilen: [
        ["finanzielle Eingliederung", "erforderlich", "erforderlich"],
        ["wirtschaftliche Eingliederung", "nicht erforderlich", "erforderlich"],
        ["organisatorische Eingliederung", "nicht erforderlich", "erforderlich"],
        ["Gewinnabführungsvertrag", "erforderlich", "nicht erforderlich"],
        ["Folge", "Zurechnung des Organeinkommens beim Organträger", "ein einheitliches Unternehmen – Innenumsätze nicht steuerbar, nur der Organträger ist Unternehmer"],
      ] },
      { text: "Anmerkung zu den vier Motiven (eigene Ergänzung): Die Quelle stellt die Gründe für eine Organschaft nebeneinander, ohne sie zu gewichten; sie lassen sich in zwei Gruppen ordnen. Die ersten beiden – **Ergebnisverrechnung** und **Verlustnutzung** – betreffen dieselbe Sache aus zwei Blickwinkeln: Ohne Organschaft bleiben Gewinne der einen und Verluste der anderen Gesellschaft getrennt und können sich nicht ausgleichen. Die beiden anderen sind Nebeneffekte: Die Vermeidung **verdeckter Gewinnausschüttungen** beruht darauf, dass die Gewinnabführung kein Ausschüttungsvorgang ist, und die Wirkung bei der **Zinsschranke** ergibt sich daraus, dass der Organkreis nach § 15 Satz 1 Nr. 3 KStG als **ein Betrieb** gilt. Letzteres kann allerdings auch nachteilig sein, weil die Freigrenze von 3.000.000 € dann nur einmal zur Verfügung steht." },
      { text: "Anmerkung zur Gegenläufigkeit der drei Organschaftsformen (eigene Ergänzung): Die Übersicht zeigt eine Asymmetrie, die in der Klausur häufig geprüft wird. Die **gewerbesteuerliche** Organschaft folgt der körperschaftsteuerlichen **automatisch** – § 2 Abs. 2 Satz 2 GewStG verweist schlicht auf deren Voraussetzungen, so dass keine eigene Prüfung nötig ist. Die **umsatzsteuerliche** Organschaft ist dagegen vollständig eigenständig: Sie verlangt zwei zusätzliche Eingliederungsmerkmale, verzichtet aber auf den Gewinnabführungsvertrag. Beide können deshalb unabhängig voneinander vorliegen – eine Gesellschaft kann umsatzsteuerlich Organgesellschaft sein, ohne es körperschaftsteuerlich zu sein, und umgekehrt." },
      { text: "Anmerkung zur Rechtfertigung der Zurechnung (eigene Ergänzung): Der Satz, die Besteuerung beim Organträger sei „auch sachgerecht“, verdient Beachtung, weil er den tragenden Gedanken der Norm enthält. Die Zurechnung des Einkommens folgt dem **Geld**: Der Gewinn wird nach § 301 AktG tatsächlich abgeführt und der Verlust nach § 302 AktG tatsächlich ausgeglichen, so dass die wirtschaftliche Belastung ohnehin beim Organträger eintritt. Die Organschaft bildet damit steuerlich ab, was zivilrechtlich bereits geschieht. Daraus erklärt sich auch, warum die **tatsächliche Durchführung** des Vertrags eine eigenständige Tatbestandsvoraussetzung ist: Ohne sie fehlt der Zurechnung ihre Grundlage." },
      { text: "Anmerkung zum Fehlen des § 18 KStG (eigene Ergänzung): Die Aufzählung der Rechtsgrundlagen springt von § 17 KStG zu § 19 KStG. Das ist kein Versehen der Quelle: § 18 KStG, der die Organschaft mit einem ausländischen gewerblichen Unternehmen im Inland betraf, ist mit Wirkung ab 2012 aufgehoben worden. Die Regelung ist in § 14 Abs. 1 Satz 1 Nr. 2 KStG aufgegangen, der heute allein auf die Zuordnung der Beteiligung zu einer inländischen Betriebsstätte abstellt." },
    ],
  },
  {
    id: "kst-t6-2",
    kapitel: "2",
    abschnittNr: "2.2",
    title: "2. Voraussetzungen der Organschaft – Tatbestandsmerkmale und Organgesellschaft",
    thema: "Fünf Tatbestandsmerkmale; Organgesellschaft kann nur eine Kapitalgesellschaft mit inländischer Geschäftsleitung und Sitz im EU- oder EWR-Raum sein",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil VI (Hamacher), Abschnitte 2.1 bis 2.2.2 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 14 Abs. 1 KStG",
      "§ 14 Abs. 1 Satz 1 KStG",
      "§ 14 Abs. 1 Nr. 1 KStG",
      "§ 14 Abs. 1 Nr. 2 KStG",
      "§ 14 Abs. 1 Nr. 3 KStG",
      "§ 17 Abs. 1 KStG",
      "§ 17 Abs. 1 Satz 1 KStG",
      "§ 1 Abs. 1 KStG",
      "§ 1a KStG",
      "BFH vom 11.12.2024, I R 17/21 und I R 33/22",
      "BFH vom 09.08.2023, BStBl. II 2024, 134",
      "BMF vom 10.11.2021, BStBl. I 2021, 2212, Tz. 56",
    ],
    themen: ["Tatbestandsvoraussetzungen", "Organgesellschaft", "Kapitalgesellschaft", "Typenvergleich", "inländische Geschäftsleitung", "Drittstaaten", "optierende Gesellschaft"],
    bloecke: [
      { typ: "titel", text: "2. Voraussetzungen der Organschaft" },
      { typ: "titel", text: "2.1 Tatbestandsvoraussetzungen" },
      { text: "Die Tatbestandsmerkmale der körperschaftsteuerlichen Organschaft sind in § 14 Abs. 1 KStG geregelt:" },
      { text: "1. Kapitalgesellschaft als Organgesellschaft (§ 14 Abs. 1 Satz 1 KStG);" },
      { text: "2. Gewerbliches Unternehmen als Organträger und deutsches Besteuerungsrecht am Organeinkommen (§ 14 Abs. 1 Satz 1 und Nr. 2 KStG);" },
      { text: "3. Finanzielle Eingliederung der Organgesellschaft (§ 14 Abs. 1 Nr. 1 KStG);" },
      { text: "4. Formwirksamer Gewinnabführungsvertrag und 5jährige Mindestlaufzeit (§ 14 Abs. 1 Satz 1 und Nr. 3 KStG);" },
      { text: "5. Tatsächliche Durchführung des Gewinnabführungsvertrags (§ 14 Abs. 1 Nr. 3 KStG)." },
      { typ: "titel", text: "2.2 Organgesellschaft" },
      { typ: "titel", text: "2.2.1 Kapitalgesellschaft als Organgesellschaft" },
      { text: "Als Rechtsform einer Organgesellschaft kommt nur eine Kapitalgesellschaft in Betracht. Neben den in § 14 Abs. 1 Satz 1 KStG genannten Gesellschaftsformen (AG, KGaA und SE) gehören dazu nach § 17 Abs. 1 KStG auch andere Rechtsformen (z.B. GmbH oder Unternehmergesellschaft haftungsbeschränkt). Nach neuer BFH-Rechtsprechung gilt dies auch in den Fällen, in denen an der Kapitalgesellschaft eine atypisch stille Gesellschaft besteht. Auch ausländische Kapitalgesellschaften kommen als Organgesellschaft in Betracht, wenn diese über eine inländische Geschäftsführung verfügen (siehe unter 2.2.2). (Die Fußnote nennt BFH vom 11.12.2024, I R 17/21 und I R 33/22.)" },
      { text: "Eine optierende Gesellschaft i.S. des § 1a KStG kann aber keine Organgesellschaft sein, weil mit dieser kein eintragungsfähiger Gewinnabführungsvertrag abgeschlossen werden kann." },
      { typ: "titel", text: "2.2.2 Inländische Geschäftsleitung" },
      { text: "Nach § 14 Abs. 1 Satz 1 KStG muss die Organgesellschaft ihre Geschäftsleitung im Inland und Sitz in einem Mitgliedstaat der Europäischen Union oder in einem Vertragsstaat des EWR-Abkommens haben. Damit sind auch Kapitalgesellschaften einer ausländischen Rechtsform als Organgesellschaft anzuerkennen, sofern diese nach dem sog. Typenvergleich mit einer deutschen Kapitalgesellschaft vergleichbar sind. Gleiches gilt gemäß § 17 Abs. 1 Satz 1 KStG auch für andere Rechtsformen, die nicht originär in § 14 KStG enthalten sind. Ausgeschlossen ist aber ein Organschaftsverhältnis mit einer Drittstaaten-Kapitalgesellschaft, auch wenn sich deren Geschäftsleitung im Inland befinden würde." },
      { text: "Das Abstellen auf die inländische Geschäftsleitung führt dazu, dass die Organgesellschaft in Deutschland zwingend nach § 1 Abs. 1 KStG unbeschränkt körperschaftsteuerpflichtig sein muss. Zu beachten ist aber, dass auch in den Fällen einer EU/EWR-Gesellschaft der Abschluss eines Gewinnabführungsvertrags notwendig ist (siehe auch unter 2.5.3). Eine sog. „Organschaft über die Grenze“ mit einer vollständig im Ausland ansässigen und steuerpflichtigen Kapitalgesellschaft ist aber nicht möglich. (Die Fußnote nennt BFH vom 09.08.2023, BStBl. II 2024, 134.)" },
      { typ: "tabelle", spalten: ["Rechtsform", "Organgesellschaft möglich?", "Grund"], zeilen: [
        ["AG, KGaA, SE", "ja", "ausdrücklich in § 14 Abs. 1 Satz 1 KStG genannt"],
        ["GmbH, UG (haftungsbeschränkt)", "ja", "über § 17 Abs. 1 KStG"],
        ["Kapitalgesellschaft mit atypisch stiller Beteiligung", "ja", "BFH vom 11.12.2024"],
        ["EU-/EWR-Kapitalgesellschaft mit inländischer Geschäftsleitung", "ja", "Typenvergleich mit einer deutschen Kapitalgesellschaft"],
        ["Drittstaaten-Kapitalgesellschaft", "nein", "auch bei inländischer Geschäftsleitung ausgeschlossen"],
        ["optierende Gesellschaft nach § 1a KStG", "nein", "kein eintragungsfähiger Gewinnabführungsvertrag möglich"],
        ["Personengesellschaft", "nein", "nur Kapitalgesellschaften kommen in Betracht"],
      ] },
      { text: "Anmerkung zur Doppelbedingung der Ansässigkeit (eigene Ergänzung): § 14 Abs. 1 Satz 1 KStG verlangt zweierlei, und beide Merkmale sind sauber zu trennen. Die **Geschäftsleitung** muss im **Inland** liegen – das begründet die unbeschränkte Steuerpflicht und sichert das deutsche Besteuerungsrecht. Der **Sitz** darf dagegen in jedem **EU- oder EWR-Staat** liegen; hier genügt der weitere Raum. Aus der Kombination folgt der Ausschluss der Drittstaatengesellschaft: Ihre inländische Geschäftsleitung machte sie zwar unbeschränkt steuerpflichtig, doch der Sitz außerhalb des EU-/EWR-Raums verschließt ihr die Organschaft. Umgekehrt scheitert die „Organschaft über die Grenze“ am fehlenden Inlandsbezug der Geschäftsleitung." },
      { text: "Anmerkung zur atypisch stillen Beteiligung (eigene Ergänzung): Die genannten BFH-Entscheidungen vom 11.12.2024 sind eine Kehrtwende und für die Praxis bedeutsam. Die Finanzverwaltung hatte bisher angenommen, eine Kapitalgesellschaft mit atypisch stiller Beteiligung könne keine Organgesellschaft sein, weil sie ihren **ganzen** Gewinn abführen müsse – der stille Gesellschafter erhält aber einen Anteil davon. Der BFH sieht das anders. Die Entscheidung berührt genau die Konstellation, die im Skript Teil V unter § 15 Abs. 4 Sätze 6 bis 8 EStG behandelt wird: Dort ist die GmbH & atypisch Still der Weg, den der Gesetzgeber gerade **verschließen** wollte, hier eröffnet die Rechtsprechung ihr den Zugang zur Organschaft." },
      { text: "Anmerkung zur optierenden Gesellschaft (eigene Ergänzung): Die Begründung für den Ausschluss der optierenden Personengesellschaft nach § 1a KStG ist rein **zivilrechtlich** und deshalb besonders zu merken: Nicht das Steuerrecht steht entgegen – dort wird die Gesellschaft ja wie eine Kapitalgesellschaft behandelt –, sondern das Gesellschaftsrecht, das für sie keinen im Handelsregister **eintragungsfähigen** Gewinnabführungsvertrag kennt. Umgekehrt kann dieselbe Gesellschaft nach Tz. 55 des BMF-Schreibens sehr wohl **Organträgerin** sein, weil dafür kein einzutragender Vertrag auf ihrer Seite nötig ist. Die Option wirkt also in beide Richtungen verschieden." },
      { text: "Anmerkung zur Reihenfolge der fünf Merkmale (eigene Ergänzung): Die Aufzählung des Abschnitts 2.1 ist zugleich das Prüfungsschema für die Klausur und sollte in dieser Reihenfolge abgearbeitet werden. Die ersten beiden Merkmale betreffen die **Personen** – wer kann Organgesellschaft, wer Organträger sein –, das dritte die **Beteiligung**, die vierte und fünfte den **Vertrag** in seiner rechtlichen Gestalt und in seiner tatsächlichen Handhabung. Bemerkenswert ist die Trennung der letzten beiden: Ein formwirksamer Vertrag genügt nicht, wenn er nicht auch durchgeführt wird – und umgekehrt hilft die tatsächliche Abführung nichts ohne wirksamen Vertrag." },
    ],
  },
];

export default kstTeil6;
