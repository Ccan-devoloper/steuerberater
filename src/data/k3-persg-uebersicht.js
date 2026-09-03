/* K3 · Personengesellschaften – genereller Überblick über den Lebenszyklus
   einer Mitunternehmerschaft: Eintritt, Gesellschafterwechsel, Ausscheiden
   und Beendigung. Die Übersicht ordnet jeden Grundfall einer Rechtsfolge zu
   (Buchwert / Gewinnrealisierung / Folgewirkung) und verweist auf die
   Lernmodule der Unterrichtstage 3 bis 5. */

export const persgUebersichtLegende = [
  { ton: "buchwert", label: "Buchwert möglich/zwingend" },
  { ton: "gewinn", label: "Gewinnrealisierung" },
  { ton: "folge", label: "Folgewirkung" },
];

export const persgUebersichtTonName = {
  buchwert: "Buchwert möglich/zwingend",
  gewinn: "Gewinnrealisierung",
  folge: "Folgewirkung",
};

export const persgUebersicht = [
  {
    id: "eintritt",
    titel: "Eintritt eines Gesellschafters",
    leitfrage: "Fließt das Entgelt in das Gesellschaftsvermögen oder an die Altgesellschafter?",
    eintraege: [
      {
        titel: "Bareinlage in die PersGes",
        norm: "§ 24 UmwStG: BW/ZW/gW-Wahlrecht",
        ton: "buchwert",
        hinweis: "Das Geld fließt in die Gesellschaft. Die Altgesellschafter bringen ihren Betrieb bzw. Mitunternehmeranteil in die erweiterte Mitunternehmerschaft ein; der Wertansatz ist nach § 24 Abs. 2 UmwStG wählbar.",
        moduleIds: [30, 32, 33],
      },
      {
        titel: "Zahlung an Altgesellschafter",
        norm: "§ 16 Abs. 1 S. 1 Nr. 2 EStG",
        ton: "gewinn",
        hinweis: "Das Geld fließt am Gesellschaftsvermögen vorbei: Der Altgesellschafter veräußert einen (Teil-)Mitunternehmeranteil, der Eintretende erwirbt entgeltlich und bildet eine Ergänzungsbilanz.",
        moduleIds: [43],
      },
      {
        titel: "Einbringung Betrieb/TB",
        norm: "§ 24 UmwStG",
        ton: "buchwert",
        hinweis: "Sachgesamtheit gegen Gewährung von Gesellschaftsrechten. Funktional wesentliche Betriebsgrundlagen einschließlich SBV müssen mit übergehen; sonstige Gegenleistungen begrenzen den Buchwertansatz.",
        moduleIds: [30, 31, 35, 37],
      },
      {
        titel: "Unentgeltliche Aufnahme",
        norm: "§ 6 Abs. 3 EStG, Sperrfrist",
        ton: "buchwert",
        hinweis: "Unentgeltliche Aufnahme in ein Einzelunternehmen: Buchwertfortführung ist zwingend. Behält der Übertragende Betriebsvermögen zurück, greift die fünfjährige Behaltefrist des § 6 Abs. 3 S. 2 EStG.",
        moduleIds: [],
      },
    ],
  },
  {
    id: "wechsel",
    titel: "Gesellschafterwechsel",
    leitfrage: "Ganzer Anteil oder Bruchteil – und entgeltlich oder unentgeltlich?",
    eintraege: [
      {
        titel: "Verkauf ganzer MU-Anteil",
        norm: "§ 16 I 1 Nr. 2, §§ 16 IV, 34",
        ton: "gewinn",
        hinweis: "Begünstigter Veräußerungsgewinn nach § 16 Abs. 2 EStG, wenn alle stillen Reserven des Anteils einschließlich des Sonderbetriebsvermögens aufgedeckt werden: Freibetrag § 16 Abs. 4, Tarifermäßigung § 34 EStG.",
        moduleIds: [43],
      },
      {
        titel: "Verkauf Teil-MU-Anteil",
        norm: "§ 16 Abs. 1 S. 2: laufend",
        ton: "gewinn",
        hinweis: "Die Veräußerung eines Teils eines Mitunternehmeranteils führt zu laufendem Gewinn – weder Freibetrag noch Tarifermäßigung.",
        moduleIds: [43],
      },
      {
        titel: "Unentgeltliche Übertragung",
        norm: "§ 6 Abs. 3 EStG",
        ton: "buchwert",
        hinweis: "Zwingende Buchwertfortführung beim Rechtsnachfolger. Funktional wesentliches Sonderbetriebsvermögen ist mitzuübertragen, sonst liegt eine Aufgabe des Mitunternehmeranteils vor.",
        moduleIds: [],
      },
      {
        titel: "Beim Erwerber",
        norm: "Ergänzungsbilanz, AK-Aufstockung",
        ton: "folge",
        hinweis: "Die Gesamthandsbilanz bleibt unverändert auf Buchwerten. Der über dem Kapitalkonto liegende Kaufpreis wird in der positiven Ergänzungsbilanz des Erwerbers verteilt und über Mehr-AfA abgeschrieben.",
        moduleIds: [29, 43],
      },
    ],
  },
  {
    id: "ausscheiden",
    titel: "Ausscheiden",
    leitfrage: "Geld oder Sachwert – und wohin gelangt der Sachwert?",
    eintraege: [
      {
        titel: "Geldabfindung",
        norm: "§ 16 I 1 Nr. 2, Anwachsung",
        ton: "gewinn",
        hinweis: "Der Anteil wächst den Verbleibenden an, das Kapitalkonto wird in eine Abfindungsverbindlichkeit umgegliedert. Veräußerungsgewinn = Abfindung ./. Buchwert des gesamten Mitunternehmeranteils.",
        moduleIds: [39, 40, 41],
      },
      {
        titel: "Sachwertabfindung ins BV",
        norm: "unechte Realteilung, § 16 III 2",
        ton: "buchwert",
        hinweis: "Der Ausscheidende überführt die erhaltenen Wirtschaftsgüter in ein eigenes Betriebsvermögen: unechte Realteilung mit Buchwertfortführung, die Gesellschaft wird von den Verbleibenden fortgeführt.",
        moduleIds: [42, 44],
      },
      {
        titel: "Sachwertabfindung ins PV",
        norm: "keine Realteilung, § 16 Abs. 1",
        ton: "gewinn",
        hinweis: "Die Übertragung in das Privatvermögen ist keine Realteilung. Der Vorgang bleibt Veräußerung bzw. Aufgabe des Mitunternehmeranteils; die stillen Reserven werden aufgedeckt.",
        moduleIds: [42],
      },
      {
        titel: "Abfindung als Rente",
        norm: "Sofort- oder Zuflussbesteuerung",
        ton: "folge",
        hinweis: "Bei Veräußerungs-/Leibrenten besteht ein Wahlrecht: Sofortbesteuerung des Barwerts mit §§ 16 Abs. 4, 34 EStG oder nachgelagerte Zuflussbesteuerung als nachträgliche gewerbliche Einkünfte.",
        moduleIds: [],
      },
    ],
  },
  {
    id: "beendigung",
    titel: "Beendigung der Gesellschaft",
    leitfrage: "Wird das Vermögen verteilt, veräußert oder nur umgewandelt?",
    eintraege: [
      {
        titel: "Echte Realteilung",
        norm: "§ 16 Abs. 3 S. 2–4 EStG",
        ton: "buchwert",
        hinweis: "Die Mitunternehmerschaft wird aufgelöst, das Vermögen auf die Realteiler verteilt. Buchwertfortführung, soweit die Besteuerung der stillen Reserven gesichert bleibt; Sperrfrist S. 3 und Körperschaftsklausel S. 4 beachten.",
        moduleIds: [44, 45, 46],
      },
      {
        titel: "Betriebsaufgabe",
        norm: "§ 16 Abs. 1, Abs. 3 S. 1 EStG",
        ton: "gewinn",
        hinweis: "Wird der Betrieb zerschlagen – Veräußerung an Dritte, Überführung ins Privatvermögen –, sind sämtliche stillen Reserven in einem einheitlichen Aufgabegewinn aufzudecken.",
        moduleIds: [],
      },
      {
        titel: "Anwachsung auf Letzten",
        norm: "§ 6 Abs. 3 oder § 16 EStG",
        ton: "folge",
        hinweis: "Scheidet der vorletzte Gesellschafter aus, wächst das Vermögen dem Letzten an (§ 712a BGB); die Gesellschaft erlischt ohne Liquidation. Die Rechtsfolge richtet sich danach, ob der Vorgang unentgeltlich oder entgeltlich ist.",
        moduleIds: [39],
      },
      {
        titel: "Formwechsel in KapGes",
        norm: "§ 25 i. V. m. §§ 20 ff. UmwStG",
        ton: "buchwert",
        hinweis: "Der Formwechsel wird steuerlich wie eine Einbringung des Betriebs in eine Kapitalgesellschaft behandelt: Antrag auf Buchwert oder Zwischenwert, danach siebenjährige Sperrfrist des § 22 UmwStG.",
        moduleIds: [],
      },
    ],
  },
];

export const persgUebersichtMerksatz =
  "Erst den Vorgang einordnen – Eintritt, Wechsel, Ausscheiden oder Beendigung –, dann die Geldrichtung klären: In die Gesellschaft hinein führt zum Einbringungsrecht, an den Gesellschafter vorbei zu § 16 EStG.";

export default persgUebersicht;
