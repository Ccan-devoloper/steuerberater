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
   der Organträger mit der Rechtsformunabhängigkeit (2.3.1) und der Besonderheit
   bei Personengesellschaften (2.3.2) übernommen. Es folgen die inländische
   Besteuerung des Organeinkommens (2.3.3), die finanzielle Eingliederung (2.4),
   der Gewinnabführungsvertrag (2.5) sowie die Kapitel 3 und 4; der Campus weist
   den Stand aus.

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
  {
    id: "kst-t6-3",
    kapitel: "3",
    abschnittNr: "2.3.1",
    title: "2.3 Organträger – Rechtsformunabhängigkeit",
    thema: "Organträger kann jedes gewerbliche Unternehmen sein; maßgeblich ist die Gewerblichkeit nach § 2 Abs. 1 Satz 2 GewStG, nicht die Rechtsform",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil VI (Hamacher), Abschnitt 2.3.1 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 14 Abs. 1 Satz 1 KStG",
      "§ 14 Abs. 1 Nr. 2 KStG",
      "§ 1 KStG",
      "§ 1a KStG",
      "§ 3 GewStG",
      "§ 5 KStG",
      "§ 2 Abs. 1 Satz 2 GewStG",
      "§ 2 Abs. 2 GewStG",
      "§ 15 Abs. 1 Nr. 1 EStG",
      "§ 15 Abs. 1 Nr. 2 EStG",
      "BMF vom 26.08.2003, BStBl. I 2003, 437, Tz. 2",
      "BMF vom 10.11.2021, Tz. 55",
      "BMF vom 20.08.2015, BStBl. I 2015, 649",
      "BFH vom 10.03.2010, BStBl. II 2011, 181",
      "BFH vom 24.07.2013, BStBl. II 2014, 272",
      "BFH vom 11.12.2024, I R 17/21",
    ],
    themen: ["Organträger", "Rechtsformunabhängigkeit", "gewerbliches Unternehmen", "Betrieb gewerblicher Art", "Steuerbefreiung", "atypisch stille Beteiligung"],
    bloecke: [
      { typ: "titel", text: "2.3 Organträger" },
      { typ: "titel", text: "2.3.1 Rechtsformunabhängigkeit" },
      { text: "Nach § 14 Abs. 1 Nr. 2 KStG kommt als Organträger rechtsformunabhängig ein gewerbliches Unternehmen in Betracht, was sich bereits aus dem Verweis des § 14 Abs. 1 Satz 1 KStG „…ihren ganzen Gewinn an ein einziges anderes gewerbliches Unternehmen abzuführen“ ergibt. Die hierfür maßgebliche Definition der Gewerblichkeit ergibt sich aus § 2 Abs. 1 Satz 2 GewStG. Als Organträger kommt danach auch eine dauerdefizitäre oder vermögensverwaltende Kapitalgesellschaft in Betracht, weil Kapitalgesellschaften gemäß § 2 Abs. 2 GewStG kraft Rechtsform immer gewerbesteuerpflichtig sind." },
      { text: "Umgekehrt dazu können andere Rechtsträger, die lediglich Einkünfte aus Land- und Forstwirtschaft oder aus freiberuflicher Tätigkeit erzielen, nicht als Organträger fungieren. Denn die gewerbliche Betätigung des Organträgers soll sicherstellen, dass sich durch Begründung einer Organschaft die Gewerbesteuerpflicht der Organgesellschaft, die zwingend die Rechtsform einer Kapitalgesellschaft besitzt, auf Ebene des Organträgers fortsetzt. Unerheblich ist es aber, wenn der Organträger selbst nach § 3 GewStG von der Gewerbesteuer befreit ist, weil diese Steuerbefreiung nicht auf die Ergebnisse der Organgesellschaft durchgreift. Der Gewerbeertrag der Organgesellschaft bleibt in diesem Fall auf Ebene des Organträgers gewerbesteuerpflichtig. Zu den weiteren Auswirkungen der gewerbesteuerlichen Organschaft siehe unter 4." },
      { text: "Die gewerbliche Tätigkeit des Organträgers muss nicht bereits zu Beginn des Wirtschaftsjahres der Organgesellschaft und damit ununterbrochen gegeben sein. Diese muss spätestens im Zeitpunkt der Entstehung der Gewinnabführung und bei Abschluss des Wirtschaftsjahres der Organgesellschaft vorliegen, weil erst dann die Zurechnung des Organeinkommens erfolgt. Daher dürfte auch eine unterjährig aufgenommene gewerbliche Tätigkeit des Organträgers ausreichen, weil dem Gesetz eine zeitliche Komponente für das Vorliegen der gewerblichen Tätigkeit nicht entnommen werden kann." },
      { text: "Als Organträger kommen danach insbesondere in Betracht:" },
      { text: "- Natürliche Personen mit ihrem gewerblichen Einzelunternehmen," },
      { text: "- Nicht nach § 5 KStG persönlich steuerbefreite Körperschaften, Personenvereinigungen oder Vermögensmassen i.S. des § 1 KStG;" },
      { text: "- Optierende Gesellschaften i.S. des § 1a KStG und zwar unabhängig von ihrer Tätigkeit;" },
      { text: "- Betriebe gewerblicher Art, sofern dieser selbst nicht dauerdefizitär ist und mit Gewinnerzielungsabsicht betrieben wird;" },
      { text: "- Personengesellschaften i.S. von § 15 Abs. 1 Nr. 2 EStG, wenn sie eine Tätigkeit i.S. von § 15 Abs. 1 Nr. 1 EStG ausüben (siehe nachfolgend unter 2.3.2)." },
      { text: "Besteht an einer Kapitalgesellschaft eine atypisch stille Beteiligung, kann diese nach der derzeitigen Rechtsauffassung der Finanzverwaltung nicht als Organträger anerkannt werden. Dies ist nach der aktuellen Rechtsprechung des BFH aber umstritten, weil dieser in dem Urteilsfall die Organschaft trotz bestehender atypisch stiller Beteiligung an der Organträger-Kapitalgesellschaft anerkannt hat. Dies aber nur deswegen, weil sich die stille Gesellschaft lediglich auf eine Niederlassung der Kapitalgesellschaft beschränkt hat, zu welcher die Organbeteiligung aber nicht gehörte. Ob diese Aussage auch dann gilt, wenn sich die stille Gesellschaft auf den Gesamtbetrieb der Kapitalgesellschaft bezieht, ist danach weiterhin ungeklärt. (Die Fußnoten nennen BMF vom 20.08.2015, BStBl. I 2015, 649, und BFH vom 11.12.2024, I R 17/21, unter 27 bis 31 der Urteilsgründe.)" },
      { typ: "tabelle", spalten: ["Rechtsträger", "Organträger möglich?", "Voraussetzung oder Grund"], zeilen: [
        ["natürliche Person", "ja", "mit ihrem gewerblichen Einzelunternehmen"],
        ["Kapitalgesellschaft", "ja", "gewerbesteuerpflichtig kraft Rechtsform – auch dauerdefizitär oder vermögensverwaltend"],
        ["Körperschaft, Personenvereinigung, Vermögensmasse i.S. des § 1 KStG", "ja", "sofern nicht nach § 5 KStG persönlich steuerbefreit"],
        ["optierende Gesellschaft nach § 1a KStG", "ja", "unabhängig von ihrer Tätigkeit"],
        ["Betrieb gewerblicher Art", "ja", "sofern nicht dauerdefizitär und mit Gewinnerzielungsabsicht"],
        ["Personengesellschaft", "ja", "nur bei originär gewerblicher Tätigkeit – dazu 2.3.2"],
        ["Land- und Forstwirt, Freiberufler", "nein", "keine gewerbliche Betätigung"],
        ["Kapitalgesellschaft mit atypisch stiller Beteiligung", "streitig", "Verwaltung verneint; der BFH hat sie in einem Sonderfall anerkannt"],
      ] },
      { text: "Anmerkung zur Bedeutung der Gewerblichkeit (eigene Ergänzung): Warum der Organträger **gewerblich** sein muss, beantwortet die Quelle in einem Satz, der die gesamte Systematik trägt: Die Gewerbesteuerpflicht der Organgesellschaft soll sich auf der Ebene des Organträgers **fortsetzen**. Weil die Organgesellschaft stets Kapitalgesellschaft und damit kraft Rechtsform gewerbesteuerpflichtig ist, ginge ohne dieses Merkmal Gewerbesteuersubstrat verloren. Daraus erklärt sich der Ausschluss des **Freiberuflers** und des **Land- und Forstwirts** – nicht ihre Rechtsform steht entgegen, sondern die fehlende Gewerbesteuerpflicht. Umgekehrt genügt bei der **Kapitalgesellschaft** die Rechtsform allein: Auch eine rein vermögensverwaltende oder dauerdefizitäre Gesellschaft ist gewerbesteuerpflichtig und damit tauglicher Organträger." },
      { text: "Anmerkung zur Steuerbefreiung nach § 3 GewStG (eigene Ergänzung): Die Aussage, eine Befreiung des Organträgers greife **nicht auf die Organgesellschaft durch**, ist praktisch bedeutsam und beruht auf dem Charakter der Befreiung als **persönlicher** Vergünstigung. Sie knüpft an die Eigenschaften des befreiten Rechtsträgers an und kann deshalb nicht auf ein fremdes Ergebnis erstreckt werden. Die Folge ist eine gespaltene Behandlung: Das eigene Ergebnis des Organträgers bleibt steuerfrei, der zugerechnete Gewerbeertrag der Organgesellschaft dagegen steuerpflichtig. Der Beschluss des BFH vom 10.03.2010 hat das bestätigt. Der Unterschied zur **persönlichen** Befreiung nach § 5 KStG ist dabei zu beachten: Dort scheidet der Rechtsträger schon als Organträger aus." },
      { text: "Anmerkung zur zeitlichen Lockerung (eigene Ergänzung): Dass die gewerbliche Tätigkeit **nicht ununterbrochen** vorliegen muss, ist eine für den Steuerpflichtigen günstige Abweichung von der sonstigen Strenge der Organschaftsvoraussetzungen – die finanzielle Eingliederung etwa muss vom Beginn des Wirtschaftsjahres an bestehen. Die Begründung ist überzeugend: Maßgeblich ist der Zeitpunkt, in dem der **Gewinnabführungsanspruch entsteht**, also der Schluss des Wirtschaftsjahres der Organgesellschaft; erst dann erfolgt die Zurechnung. Der BFH hat das 2013 entschieden, und die Quelle formuliert die Folgerung vorsichtig („dürfte ausreichen“), weil eine ausdrückliche gesetzliche Regelung fehlt." },
      { text: "Anmerkung zum ungeklärten Fall der atypisch stillen Beteiligung (eigene Ergänzung): Die Lage ist derzeit unübersichtlich und für die Klausur genau abzugrenzen. Auf der Seite der **Organgesellschaft** hat der BFH mit den Entscheidungen vom 11.12.2024 die atypisch stille Beteiligung als unschädlich angesehen. Auf der Seite des **Organträgers** hält die Verwaltung an ihrer ablehnenden Haltung aus dem BMF-Schreiben vom 20.08.2015 fest; der BFH hat zwar in einem Fall die Organschaft anerkannt, jedoch nur deshalb, weil sich die stille Gesellschaft auf eine **Niederlassung** beschränkte, zu der die Organbeteiligung nicht gehörte. Für den Regelfall – stille Beteiligung am **Gesamtbetrieb** – ist die Frage offen. Wer sich darauf stützt, sollte den Fall offenhalten." },
    ],
  },
  {
    id: "kst-t6-4",
    kapitel: "4",
    abschnittNr: "2.3.2",
    title: "2.3.2 Besonderheit bei Personengesellschaften als Organträger",
    thema: "Die Organträger-Personengesellschaft muss eine originär gewerbliche Tätigkeit von substanzieller Bedeutung ausüben; gewerbliche Prägung und Abfärbung genügen nicht",
    rechtsstand: RECHTSSTAND,
    quelle: "KSt Teil VI (Hamacher), Abschnitte 2.3.2 bis 2.3.2.2 · Stand 05/2025",
    verfasser: VERFASSER,
    normen: [
      "§ 14 Abs. 1 Nr. 2 Satz 2 KStG",
      "§ 15 Abs. 1 Nr. 1 EStG",
      "§ 15 Abs. 3 Nr. 1 EStG",
      "§ 15 Abs. 3 Nr. 2 EStG",
      "BMF vom 10.11.2005, Tz. 16, 17, 19 und 20",
      "BFH vom 24.07.2013, BStBl. II 2014, 272",
      "BFH vom 27.08.2014, BStBl. II 2015, 996, 999 und 1002",
      "BFH vom 27.11.2024, I R 23/21",
      "BFH I R 46/23 (anhängig)",
      "OFD Frankfurt am Main vom 23.10.2013, S 2770 A-054 – St 55",
    ],
    themen: ["Organträger-Personengesellschaft", "originär gewerbliche Tätigkeit", "Mehrmütterorganschaft", "Willensbildungsgesellschaft", "Betriebsaufspaltung", "geschäftsleitende Holding", "substanzielle Bedeutung"],
    bloecke: [
      { typ: "titel", text: "2.3.2 Besonderheit bei Personengesellschaften als Organträger" },
      { text: "Bei einer Personengesellschaft als Organträger ist zudem zu beachten, dass diese nach § 14 Abs. 1 Nr. 2 Satz 2 KStG selbst auch eine originäre gewerbliche Tätigkeit i.S. des § 15 Abs. 1 Nr. 1 EStG ausüben muss. An der Personengesellschaft dürfen aber keine steuerbefreiten Körperschaften beteiligt sein, es sei denn, das Organeinkommen wird einem wirtschaftlichen Geschäftsbetrieb der Mitunternehmer-Kapitalgesellschaft zugerechnet. (Die Fußnoten nennen das anhängige BFH-Verfahren I R 46/23 und die Verfügung der OFD Frankfurt am Main vom 23.10.2013.)" },
      { typ: "titel", text: "2.3.2.1 Einschränkung der Mehrmütterorganschaft" },
      { text: "Hintergrund dieser Verschärfung war die ab VZ 2003 vollzogene Abschaffung der sog. Mehrmütterorganschaft, die von der Finanzverwaltung bis dahin als Gestaltungsmissbrauch angesehen wurde. Denn bis dahin konnten sich Kapitalgesellschaften oder natürliche Personen, die mangels Beherrschung der Organgesellschaft die Organschaftsvoraussetzungen nicht erfüllten, in der Rechtsform einer Personengesellschaft zusammenschließen. Die zwischengeschaltete Personengesellschaft diente letztlich nur dazu, sämtliche Beteiligungen an der Organgesellschaft zu bündeln, um dadurch die notwendige Stimmrechtsmehrheit zu erreichen. Unter der Voraussetzung eines wirksamen und tatsächlich durchgeführten Gewinnabführungsvertrags konnte dann die Organschaft zwischen der Personengesellschaft als Organträger und der Kapitalgesellschaft anerkannt werden. Das der Personengesellschaft zugerechnete Organeinkommen wurde dann den Mitunternehmern im Rahmen der gesonderten und einheitlichen Feststellung zugerechnet." },
      { text: "Bei dieser Konstruktion übte die Personengesellschaft keine eigene gewerbliche Tätigkeit aus. Sie diente nur als reine „Willensbildungsgesellschaft“, die häufig in der Rechtsform einer GmbH & Co KG auch nur gewerblich geprägt i.S. des § 15 Abs. 3 Nr. 2 EStG war." },
      { typ: "titel", text: "2.3.2.2 Eigene gewerbliche Tätigkeit" },
      { text: "Als originäre gewerbliche Betätigung gilt dabei neben den in § 15 Abs. 1 Nr. 1 EStG enthaltenen Grundtatbeständen insbesondere auch die Tätigkeit" },
      { text: "- als Besitzpersonengesellschaft im Rahmen einer Betriebsaufspaltung; weil der Besitzgesellschaft die gewerbliche Tätigkeit der Betriebsgesellschaft zuzurechnen ist;" },
      { text: "- bei Erbringung eigener Dienstleistungen gegenüber Konzerngesellschaften (z.B. Buchführungs- oder Beratungsleistungen) gegen angemessenes Entgelt;" },
      { text: "- als geschäftsleitende Holding." },
      { text: "Nicht ausreichend sind hingegen die:" },
      { text: "- gewerbliche Prägung der Personengesellschaft in Folge des § 15 Abs. 3 Nr. 2 EStG;" },
      { text: "- Beteiligung der Personengesellschaft an einer anderen gewerblich tätigen Personengesellschaft;" },
      { text: "- Gewerblichkeit aufgrund Abfärbetheorie i.S. des § 15 Abs. 3 Nr. 1 EStG, auch wenn die nach der BFH-Rechtsprechung aufgestellte Bagatellgrenze (d.h. 3% der gesamten Nettoumsätze oder 24.500 € im VZ) übersteigt. (Der unvollständige Satzbau „auch wenn die … Bagatellgrenze … übersteigt“ steht so in der Quelle.)" },
      { text: "Voraussetzung ist aber nicht, dass die Personengesellschaft ausschließlich originär gewerblich tätig ist. Eine teilweise originäre gewerbliche Tätigkeit reicht dabei aus, z.B. neben einer vermögensverwaltenden Betätigung. Dabei darf die originäre gewerbliche Tätigkeit aber nicht nur geringfügig sein, d.h. sie muss für das Gesamtunternehmen auch von substanzieller Bedeutung sein." },
      { text: "Beispiel: Die Z-GmbH und P-GmbH halten jeweils 50% der Anteile an der V-GmbH (durchschnittlicher Gewinn: 1.000.000 €). Mit Wirkung zum 01.01.2025 gründen sie die M-GbR, welche die Beteiligungen an der V-GmbH im Gesamthandsvermögen hält. Die M-GbR übt gleichzeitig eine gewerbliche Tätigkeit, woraus in 2025 ein Gewinn von 1.000 € resultiert. (Der unvollständige Satz „übt gleichzeitig eine gewerbliche Tätigkeit“ steht so in der Quelle; gemeint ist „übt … aus“.)" },
      { text: "Lösung: Zwar übt die Personengesellschaft eine eigene originär gewerbliche Tätigkeit i.S. des § 15 Abs. 1 Nr. 1 EStG aus, diese ist vorliegend aber nicht als erheblich anzusehen. Mangels substanzieller Bedeutung der gewerblichen Tätigkeit, was auch aus dem Vergleich zu den Ergebnissen der V-GmbH deutlich wird, ist das Kriterium der eigenen gewerblichen Betätigung daher nicht als erfüllt anzusehen (Anteil der eigenen gewerblichen Tätigkeit: 0,09%). Die M-GbR scheidet daher mangels originär gewerblicher Tätigkeit als Organträger aus." },
      { text: "Die gewerbliche Tätigkeit der Organträger-Personengesellschaft muss zudem nach dem BFH-Urteil vom 24.07.2013 nicht während des ganzen Wirtschaftsjahres der Organgesellschaft ausgeübt werden. Danach wäre auch eine unterjährig aufgenommene gewerbliche Tätigkeit ausreichend. Diese Tätigkeit muss aber spätestens im Zeitpunkt der Entstehung der Gewinnabführung und somit bei Abschluss des Wirtschaftsjahres der Organgesellschaft gegeben sein, weil zu diesem Zeitpunkt auch die Zurechnung des Organeinkommens erfolgt." },
      { typ: "tabelle", spalten: ["Tätigkeit der Personengesellschaft", "originär gewerblich?"], zeilen: [
        ["Grundtatbestände des § 15 Abs. 1 Nr. 1 EStG", "ja"],
        ["Besitzpersonengesellschaft einer Betriebsaufspaltung", "ja – die Tätigkeit der Betriebsgesellschaft wird ihr zugerechnet"],
        ["eigene Dienstleistungen gegenüber Konzerngesellschaften gegen angemessenes Entgelt", "ja"],
        ["geschäftsleitende Holding", "ja"],
        ["gewerbliche Prägung nach § 15 Abs. 3 Nr. 2 EStG", "nein"],
        ["Beteiligung an einer anderen gewerblich tätigen Personengesellschaft", "nein"],
        ["Abfärbung nach § 15 Abs. 3 Nr. 1 EStG", "nein – auch oberhalb der Bagatellgrenze von 3 % oder 24.500 €"],
      ] },
      { text: "Nachrechnung der Quote (eigene Ergänzung): Die Quelle nennt für den Anteil der eigenen gewerblichen Tätigkeit **0,09 %**. Setzt man den Gewinn der M-GbR von 1.000 € ins Verhältnis zur Summe aus eigenem Gewinn und dem Ergebnis der V-GmbH, ergeben sich 1.000 € ÷ 1.001.000 € = **0,0999 %**, also gerundet **0,10 %**; bezogen allein auf die 1.000.000 € der V-GmbH wären es genau 0,10 %. Die Quelle hat den Wert offenbar abgeschnitten statt gerundet. Am Ergebnis ändert das nichts – die Größenordnung von einem Tausendstel bleibt in jeder Lesart weit von der substanziellen Bedeutung entfernt." },
      { text: "Anmerkung zum Gedanken hinter der Verschärfung (eigene Ergänzung): Das Merkmal der **originär** gewerblichen Tätigkeit ist keine willkürliche Hürde, sondern zielt genau auf die **Willensbildungsgesellschaft**. Die Quelle beschreibt die alte Gestaltung anschaulich: Zwei Gesellschafter mit je 50 % konnten die Organschaft für sich nicht begründen, weil keinem die Stimmrechtsmehrheit zukam; die zwischengeschaltete Personengesellschaft bündelte die Anteile und erreichte, was den Beteiligten einzeln verschlossen war. § 14 Abs. 1 Nr. 2 Satz 2 KStG verlangt deshalb, dass die Personengesellschaft einen **eigenen Zweck** verfolgt und nicht nur als Hülle dient. Das Beispiel der M-GbR ist genau dieser Fall – die gewerbliche Tätigkeit von 1.000 € ist die Hülle mit Feigenblatt." },
      { text: "Anmerkung zur Trennlinie zwischen den beiden Listen (eigene Ergänzung): Die Gegenüberstellung folgt einem erkennbaren Muster: Ausreichend sind Tätigkeiten, die auf einer **tatsächlichen unternehmerischen Betätigung** beruhen – die Betriebsaufspaltung, weil die Tätigkeit der Betriebsgesellschaft zugerechnet wird, die Dienstleistung gegen Entgelt und die **geschäftsleitende** Holding, die ihre Beteiligungen aktiv steuert. Nicht ausreichend sind dagegen Tätigkeiten, die die Gewerblichkeit nur **kraft gesetzlicher Fiktion** vermitteln: die **Prägung** nach § 15 Abs. 3 Nr. 2 EStG, die **Abfärbung** nach § 15 Abs. 3 Nr. 1 EStG und die bloße Beteiligung an einer gewerblichen Personengesellschaft. Dass die Abfärbung sogar oberhalb der Bagatellgrenze nicht genügt, unterstreicht das: Es kommt auf die eigene Tätigkeit an, nicht auf ein gesetzlich angeordnetes Ergebnis." },
      { text: "Anmerkung zur substanziellen Bedeutung (eigene Ergänzung): Der Maßstab ist weich, und die Quelle liefert dazu nur einen Anhaltspunkt – den **Vergleich** mit dem Ergebnis der Organgesellschaft. Eine feste Grenze nennt weder das Gesetz noch das BMF-Schreiben; Tz. 17 verlangt lediglich, die Tätigkeit dürfe nicht „nur geringfügig“ sein. Aus dem Beispiel lässt sich immerhin ablesen, dass ein Tausendstel eindeutig zu wenig ist. In der Klausur empfiehlt sich deshalb die Argumentation über das **Verhältnis der Ergebnisse**, ergänzt um qualitative Gesichtspunkte wie Personaleinsatz, Umsatz und Marktauftritt." },
      { text: "Anmerkung zum Ausschluss steuerbefreiter Körperschaften (eigene Ergänzung): Die Einschränkung, an der Organträger-Personengesellschaft dürften **keine steuerbefreiten Körperschaften** beteiligt sein, führt den Gedanken des Abschnitts 2.3.1 fort: Was auf der Ebene des Organträgers selbst schädlich ist – die persönliche Befreiung nach § 5 KStG –, soll sich nicht über die Beteiligung an einer Personengesellschaft erreichen lassen. Die Ausnahme ist folgerichtig: Wird das Organeinkommen einem **wirtschaftlichen Geschäftsbetrieb** zugerechnet, unterliegt es dort ohnehin der Besteuerung, so dass kein Substrat verloren geht. Das anhängige Verfahren I R 46/23 wird zeigen, wie weit diese Einschränkung trägt." },
    ],
  },
];

export default kstTeil6;
