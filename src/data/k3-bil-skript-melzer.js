/* Bilanzierung nach Handels- und Steuerrecht – Lehrgangsskript Termin 1 von
   Karsten Melzer, Rechtsanwalt und Steuerberater, Köln (April 2026,
   Rechtsstand 2025).

   Wortlautgetreue Übernahme des Skripts „B-S25-Bilanz-Termin 1-Skript“ aus
   dem zweiten Drive-Baum (Drive-ID 19z9p0I0WgRUbRMbQfYAMaYzKUJNUsIx3, 178
   PDF-Seiten, 16 Kapitel). Jeder Eintrag ist ein Abschnitt der Quelle
   (Gliederung bis zur zweiten Ebene; tiefere Ebenen als
   Zwischenüberschriften); `teil` ist das Kapitel.

   STAND DER ÜBERNAHME: Kapitel 1 und 2. Die Kapitel 3 bis 16 werden
   nachgetragen (siehe docs/offene-quellen.md).

   Tabellen der Quelle stehen als Tabellen; Schaubilder (Kasten- und
   Pfeildiagramme) als Zwischenüberschrift „Schaubild: …“ mit einer Tabelle,
   die die Kästen in Lesereihenfolge wiedergibt – der Wortlaut ist
   übernommen, die Anordnung ist eigene Darstellung.

   Blocktypen wie in den übrigen Beständen: text | titel | tabelle.
   Personenbezogene Wasserzeichen des Quell-PDFs sind nicht übernommen.
   Stellen, an denen die Quelle selbst nicht aufgeht, sind mit
   "(so in der Quelle)" gekennzeichnet und in docs/quellenabgleich-drive.md
   aufgeführt. */

export const bilSkriptMelzerQuelle = {
  reihe: "Bilanzierung nach Handels- und Steuerrecht · Lehrgangsskript Termin 1 · Karsten Melzer, Rechtsanwalt und Steuerberater, Köln",
  stand: "April 2026 · Rechtsstand 2025",
  verfasser: "Karsten Melzer",
  didaktik: [
    "Das Skript folgt dem Aufbau der Bilanzklausur: erst der Maßgeblichkeitsgrundsatz und der Klausuraufbau (Ansatz dem Grunde nach, Ansatz der Höhe nach), dann Ansatz, Zurechnung und Zuordnung, Bewertung, Anlage- und Umlaufvermögen, Forderungen, Rechnungsabgrenzung, Verbindlichkeiten, Sonderposten, Rückstellungen, latente Steuern und zum Schluss Bilanzberichtigung und Bilanzänderung.",
    "Die Übersichten der Quelle stellen Handelsbilanz und Steuerbilanz nebeneinander – so, wie die Klausur die Beurteilung „handels- und steuerrechtlich“ verlangt.",
  ],
};

const VERFASSER = "Karsten Melzer";
const RECHTSSTAND = "Rechtsstand 2025";

/* Kapitel-Konstanten: Titel des Kapitels und die Kurzform für die Filterleiste. */
const TB1 = { teil: "1", teilLabel: "Kapitel 1 – Maßgeblichkeit", teilTitel: "Maßgeblichkeitsgrundsatz (Beck‘sche Steuererlasse § 5/14)" };
const TB2 = { teil: "2", teilLabel: "Kapitel 2 – Klausuraufbau", teilTitel: "Klausuraufbau" };

const kapitelRoh = [
  {
    id: "bil-melzer-1-01",
    ...TB1,
    kapitel: "1",
    title: "1.1 Ansatz dem Grunde nach von Wirtschaftsgütern, Schulden und Rechnungsabgrenzungsposten",
    thema: "Maßgeblichkeitsgrundsatz: Ansatz dem Grunde nach von Wirtschaftsgütern, Schulden und Rechnungsabgrenzungsposten",
    rechtsstand: RECHTSSTAND,
    quelle: "Bilanzsteuerrecht (Melzer) · Kapitel 1, Abschnitt 1.1",
    verfasser: VERFASSER,
    normen: ["§ 248 Abs. 2 HGB", "§ 5 Abs. 2 EStG"],
    themen: ["Maßgeblichkeit", "§ 5 Abs. 1 EStG", "Aktivierung"],
    bloecke: [
      { typ: "titel", text: "1 Maßgeblichkeitsgrundsatz (Beck‘sche Steuererlasse § 5/14)" },
      "In § 5 Abs. 1 Satz 1 HS 1 EStG ist der Maßgeblichkeitsgrundsatz enthalten. Danach sind die Bilanzierungs- und Bewertungsgrundsätze des Handelsrechts auch maßgebend für die Steuerbilanz.",
      "Der Grundsatz der Maßgeblichkeit wird durch folgende steuerliche Regelungen durchbrochen:",
      "§ 5 Abs. 1a bis 4b, Abs. 6; §§ 6, 6a und 7 EStG.",
      "Handelsrechtliche Aktivierungsgebote und Aktivierungswahlrechte führen zu Aktivierungsgeboten in der Steuerbilanz, es sei denn, die Aktivierung in der Steuerbilanz ist aufgrund einer steuerlichen Regelung ausgeschlossen.",
      "Beispiel: Nach § 248 Abs. 2 Satz 1 HGB besteht ein Aktivierungswahlrecht für selbst geschaffene immaterielle Vermögensgegenstände des Anlagevermögens, soweit es sich nicht gem. § 248 Abs. 2 Satz 1 HGB (so in der Quelle; gemeint § 248 Abs. 2 Satz 2 HGB) um Marken, Drucktitel, Verlagsrechte, Kundenlisten oder vergleichbare immaterielle Vermögensgegenstände des Anlagevermögens handelt. Grundsätzlich führt nach § 5 Abs. 1 Satz 1 HS 1 EStG ein Aktivierungswahlrecht in der Handelsbilanz zu einem Aktivierungsgebot in der Steuerbilanz.",
      "Eine Aktivierung selbst geschaffener immaterieller Wirtschaftsgüter des Anlagevermögens ist jedoch nach § 5 Abs. 2 EStG ausgeschlossen (Durchbrechung des Grundsatzes der Maßgeblichkeit).",
    ],
  },
  {
    id: "bil-melzer-1-02",
    ...TB1,
    kapitel: "2",
    title: "1.2 Passivierungsgebote, Passivierungsverbote und Passivierungswahlrechte",
    thema: "Passivierungsgebote, -verbote und -wahlrechte mit Schaubild zu den Konsequenzen der Maßgeblichkeit",
    rechtsstand: RECHTSSTAND,
    quelle: "Bilanzsteuerrecht (Melzer) · Kapitel 1, Abschnitt 1.2",
    verfasser: VERFASSER,
    normen: ["§ 5 Abs. 4a EStG"],
    themen: ["Maßgeblichkeit", "Passivierung", "Schaubild"],
    bloecke: [
      "Passivierungsgebote in der Handelsbilanz führen grundsätzlich zu Passivierungsgeboten in der Steuerbilanz. Passivierungsverbote und Passivierungswahlrechte in der Handelsbilanz führen zu Passivierungsverboten in der Steuerbilanz. Handelsrechtliche Passivierungsgebote sind - vorbehaltlich steuerlicher Vorschriften - auch für die steuerliche Gewinnermittlung maßgeblich.",
      "So sind für drohende Verluste aus schwebenden Geschäften zwingend Rückstellungen in der Handelsbilanz zu bilden gem. § 249 Abs. 1 Satz 1 Alt. 2 HGB. Nach dem Grundsatz der Maßgeblichkeit wären diese auch in der Steuerbilanz zu bilden gem. § 5 Abs. 1 Satz 1 HS EStG. Der Grundsatz der Maßgeblichkeit wird jedoch durch § 5 Abs. 4a EStG durchbrochen.",
      { typ: "titel", text: "Schaubild: Konsequenzen der Maßgeblichkeit" },
      { typ: "tabelle", spalten: ["Handelsbilanz", "→ Steuerbilanz"], zeilen: [
        ["Aktivierungsgebot/Verbot", "Aktivierungsgebot/Verbot"],
        ["Passivierungsgebot/Verbot", "Passivierungsgebot/Verbot"],
        ["Aktivierungswahlrecht", "Aktivierungsgebot"],
        ["Passivierungswahlrecht", "Passivierungsverbot"],
      ] },
      "Durchbrechung der Maßgeblichkeit (§ 5 Abs. 1a bis 4b, Abs. 6; §§ 6, 6a und 7 EStG)",
    ],
  },
  {
    id: "bil-melzer-1-03",
    ...TB1,
    kapitel: "3",
    title: "1.3 Bewertungswahlrechte und Bewertungsvorbehalte",
    thema: "Bewertungswahlrechte und Bewertungsvorbehalte: Fremdkapitalzinsen, Bewertungsvereinfachung, Verwaltungskosten",
    rechtsstand: RECHTSSTAND,
    quelle: "Bilanzsteuerrecht (Melzer) · Kapitel 1, Abschnitt 1.3",
    verfasser: VERFASSER,
    normen: ["§ 6 Abs. 1 EStG", "§ 255 Abs. 3 HGB", "§ 255 Abs. 2 HGB"],
    themen: ["Bewertungswahlrechte", "§ 255 HGB"],
    bloecke: [
      "Der Grundsatz der Maßgeblichkeit gilt auch für die Bewertung. Bewertungswahlrechte, die in der Handelsbilanz ausgeübt werden können, ohne dass eine eigenständige steuerliche Regelung besteht, wirken wegen des maßgeblichen Handelsbilanzansatzes auch auf den Wertansatz in der Steuerbilanz gem. § 5 Abs. 1 Satz 1 HS 1 EStG.",
      "• Zinsen für Fremdkapital",
      "Diese gelten gemäß § 255 Abs. 3 Satz 2 HGB als Herstellungskosten des Vermögensgegenstands, wenn das Fremdkapital zur Herstellung eines Vermögensgegenstands verwendet wird. Sind handelsrechtlich Fremdkapitalzinsen in die Herstellungskosten einbezogen worden, sind sie gem. § 5 Abs. 1 Satz 1 HS 1 EStG auch in der steuerlichen Gewinnermittlung als Herstellungskosten zu beurteilen.",
      "• Bewertungsvereinfachungsverfahren (§ 240 Abs. 3 und 4 HGB)",
      "Nach § 240 Abs. 3 (Festwertbewertung) und 4 (Gruppenbewertung) HGB werden bei der Bewertung bestimmter Wirtschaftsgüter unter den genannten Voraussetzungen Erleichterungen gewährt. Steuerliche Regelungen hierzu bestehen nicht. Aufgrund des § 5 Abs. 1 Satz 1 HS 1 EStG sind bei Anwendung dieser Bewertungsvereinfachungsverfahren die Wertansätze der Handelsbilanz in die Steuerbilanz zu übernehmen. (Jetzt auch R 6.3 Abs. 5 EStR)",
      "• angemessene Teile der Kosten der allgemeinen Verwaltung sowie angemessene Aufwendungen für soziale Einrichtungen des Betriebes, für freiwillige soziale Leistungen und für die betriebliche Altersversorgung",
      "Nach § 255 Abs. 2 Satz 3 HGB ist der Kaufmann nicht verpflichtet, sondern berechtigt, diese Aufwendungen bei der Berechnung der Herstellungskosten einzubeziehen. Bei der steuerlichen Gewinnermittlung sind nach § 6 Abs. 1 Nr. 2 Satz 1 EStG die Herstellungskosten anzusetzen. Bei der Berechnung der Herstellungskosten brauchen angemessene Teile der Kosten der allgemeinen Verwaltung sowie angemessene Aufwendungen für soziale Einrichtungen des Betriebs, für freiwillige soziale Leistungen und für die betriebliche Altersversorgung im Sinne des § 255 Absatz 2 Satz 3 des Handelsgesetzbuchs nicht einbezogen zu werden, soweit diese auf den Zeitraum der Herstellung entfallen gem. § 6 Abs. 1 Nr. 1b Satz 1 EStG. Das Wahlrecht ist gem. § 6 Abs. 1 Nr. 1b Satz 2 EStG bei Gewinnermittlung nach § 5 in Übereinstimmung mit der Handelsbilanz auszuüben.",
    ],
  },
  {
    id: "bil-melzer-1-04",
    ...TB1,
    kapitel: "4",
    title: "1.4 Ansatz und Bewertung von Pensionsverpflichtungen im Sinne von § 6a EStG",
    thema: "Ansatz und Bewertung von Pensionsverpflichtungen nach § 6a EStG im Verhältnis zur Handelsbilanz",
    rechtsstand: RECHTSSTAND,
    quelle: "Bilanzsteuerrecht (Melzer) · Kapitel 1, Abschnitt 1.4",
    verfasser: VERFASSER,
    normen: ["§ 249 HGB", "§ 6a EStG", "§ 6a Abs. 1 EStG"],
    themen: ["Pensionsrückstellungen", "§ 6a EStG"],
    bloecke: [
      "Nach § 249 HGB müssen in der Handelsbilanz für unmittelbare Pensionszusagen Rückstellungen gebildet werden. Dieses Passivierungsgebot gilt auch für die steuerliche Gewinnermittlung. Die bilanzsteuerlichen Ansatz- und Bewertungsvorschriften des § 6a EStG schränken jedoch die Maßgeblichkeit des handelsrechtlichen Passivierungsgebotes ein.",
      "In der steuerlichen Gewinnermittlung sind Pensionsrückstellungen nur anzusetzen, wenn die Voraussetzungen des § 6a Abs. 1 und 2 EStG (z.B. Schriftformerfordernis, § 6a Abs. 1 Nr. 3 EStG) erfüllt sind. Die Passivierung einer Pensionszusage unterliegt zudem dem Bewertungsvorbehalt des § 6a Abs. 3 und 4 EStG. Die Bewertung kann somit vom handelsrechtlichen Wert abweichen.",
      "Für laufende Pensionen und Anwartschaften auf Pensionen, die vor dem 1.1.1987 rechtsverbindlich zugesagt worden sind (sog. Altzusagen), gilt nach Artikel 28 EGHGB in der durch Gesetz vom 19.12.1985 geänderten Fassung weiterhin das handels- und steuerrechtliche Passivierungswahlrecht.",
    ],
  },
  {
    id: "bil-melzer-1-05",
    ...TB1,
    kapitel: "5",
    title: "1.5 Anwendung des § 5 Abs. 1 Satz 1 HS 2 EStG",
    thema: "Wahlrechte nach § 5 Abs. 1 Satz 1 HS 2 EStG: nur steuerliche sowie handels- und steuerrechtliche Wahlrechte",
    rechtsstand: RECHTSSTAND,
    quelle: "Bilanzsteuerrecht (Melzer) · Kapitel 1, Abschnitt 1.5",
    verfasser: VERFASSER,
    normen: ["§ 5 Abs. 1 EStG", "§ 6 Abs. 1 EStG", "§ 7 Abs. 2 EStG", "§ 256 HGB", "§ 254 HGB", "§ 247 Abs. 3 HGB", "§ 253 HGB", "§ 253 Abs. 3 HGB"],
    themen: ["Steuerliche Wahlrechte", "§ 5 Abs. 1 EStG", "AfA", "Verbrauchsfolge"],
    bloecke: [
      { typ: "titel", text: "1.5.1 Wahlrechte, die nur steuerrechtlich bestehen" },
      "Wahlrechte, die nur steuerrechtlich bestehen, können unabhängig vom handelsrechtlichen Wertansatz ausgeübt werden (§ 5 Abs. 1 Satz 1 HS 2 EStG). Die Ausübung des steuerlichen Wahlrechtes wird insoweit nicht nach § 5 Abs. 1 Satz 1 HS 1 EStG durch den Grundsatz der Maßgeblichkeit beschränkt.",
      "Dies hat Auswirkungen auf:",
      "• Sonderposten mit Rücklageanteil und die Übertragung von Sonderposten mit Rücklageanteil (§ 6 b EStG, R 6.6 EStR)",
      "So können stille Reserven aus der Veräußerung bestimmter Anlagegüter zur Vermeidung der Besteuerung auf die Anschaffungs- oder Herstellungskosten anderer bestimmter Wirtschaftsgüter übertragen werden. Dazu sind deren Anschaffungs- oder Herstellungskosten zu mindern. Soweit die Übertragung auf ein anderes Wirtschaftsgut nicht vorgenommen wird, kann der Steuerpflichtige eine den steuerlichen Gewinn mindernde Rücklage bilden. Eine Minderung der Anschaffungs- oder Herstellungskosten ist nach Wegfall des § 254 HGB a.F. in der Handelsbilanz nicht zulässig. Ebenso ist die Bildung einer entsprechenden Rücklage in der Handelsbilanz nach Wegfall des § 247 Abs. 3 HGB a.F. nicht zulässig. Die Abweichung vom Handelsbilanzansatz in der Steuerbilanz wird durch § 5 Abs. 1 Satz 1 HS 2 EStG zugelassen.",
      "• Teilwertabschreibungen (§ 6 Abs. 1 Nr. 1 Satz 2 und Nr. 2 Satz 2 EStG)",
      "Vermögensgegenstände des Anlage- und Umlaufvermögens sind bei voraussichtlich dauernder Wertminderung außerplanmäßig abzuschreiben (§ 253 Abs. 3 Satz 5, Abs. 4 HGB). Nach § 6 Abs. 1 Nr. 1 Satz 2 und Nr. 2 Satz 2 EStG „kann“ bei einer voraussichtlich dauernden Wertminderung der Teilwert angesetzt werden. Die Vornahme einer außerplanmäßigen Abschreibung in der Handelsbilanz ist nicht zwingend in der Steuerbilanz durch eine Teilwertabschreibung nachzuvollziehen; der Steuerpflichtige kann darauf auch verzichten.",
      "Voraussetzung für die Ausübung steuerlicher Wahlrechte ist nach § 5 Abs. 1 Satz 2 EStG die Aufnahme der Wirtschaftsgüter, die nicht mit dem handelsrechtlich maßgeblichen Wert in der steuerlichen Gewinnermittlung ausgewiesen werden, in besondere, laufend zu führende Verzeichnisse. Die Verzeichnisse sind Bestandteil der Buchführung. Sie müssen nach § 5 Abs. 1 Satz 3 EStG den Tag der Anschaffung oder Herstellung, die Anschaffungs- oder Herstellungskosten, die Vorschrift des ausgeübten steuerlichen Wahlrechtes und die vorgenommenen Abschreibungen enthalten.",
      { typ: "titel", text: "1.5.2 Wahlrechte, die handelsrechtlich und steuerlich bestehen" },
      "Wahlrechte, die sowohl handelsrechtlich als auch steuerrechtlich bestehen, können aufgrund des § 5 Abs. 1 Satz 1 HS 2 EStG in der Handelsbilanz und in der Steuerbilanz unterschiedlich ausgeübt werden. Dies hat Auswirkungen auf:",
      "• Verbrauchsfolgeverfahren (§ 256 HGB / § 6 Abs. 1 Nr. 2a EStG)",
      "Nach § 256 HGB kann für den Wertansatz gleichartiger Vermögensgegenstände des Vorratsvermögens eine bestimmte Verbrauchsfolge unterstellt werden (Fifo und Lifo). Steuerrechtlich besteht nach § 6 Abs. 1 Nr. 2a EStG dieses Wahlrecht nur für das Lifo- Verfahren. Die Anwendung des Verbrauchsfolgeverfahrens für die Wirtschaftsgüter in der Steuerbilanz setzt nicht voraus, dass der Steuerpflichtige auch in der Handelsbilanz die Vermögensgegenstände unter Verwendung von Verbrauchsfolgeverfahren bewertet. Eine Einzelbewertung der Wirtschaftsgüter in der Handelsbilanz oder eine Bewertung nach dem Fifo- Verfahren steht der Anwendung des Lifo- Verfahrens nach § 6 Abs. 1 Nr. 2a Satz 1 EStG unter Beachtung der dort genannten Voraussetzungen nicht entgegen.",
      "• Lineare und degressive AfA (§ 253 HGB/§ 5 Abs. 6 i.V.m. § 7 Abs. 2 EStG)",
      "Gem. § 253 Abs. 3 Satz 1 HGB sind bei Vermögensgegenständen des Anlagevermögens, deren Nutzung zeitlich begrenzt ist, die Anschaffungs- oder die Herstellungskosten um planmäßige Abschreibungen zu vermindern. Es ist demnach eine lineare oder degressive Abschreibung und eine Leistungsabschreibung sowie auch eine progressive Abschreibung möglich. Degressive Abschreibung und progressive Abschreibung sind nur möglich, wenn es dem tatsächlichen Abnutzungsverlauf entspricht.",
      "Gemäß § 7 Abs. 2 EStG kann bei beweglichen Wirtschaftsgütern des Anlagevermögens statt der linearen AfA die degressive AfA für bewegliche Wirtschaftsgüter, die nach dem 1. Januar 2020 bis zum 31.12.2022 angeschafft oder hergestellt worden sind, in Anspruch genommen werden. Die AfA nach § 7 Abs. 2 EStG setzt nicht voraus, dass der Steuerpflichtige auch in der Handelsbilanz eine degressive Abschreibung vornimmt.",
      "Die degressive Abschreibung kann auch für Wirtschaftsgüter in Anspruch genommen werden, die nach dem 31.3.2024 und vor dem 1.1.2025 angeschafft oder hergestellt worden sind.",
      "Allerdings darf der anzuwendende Prozentsatz höchstens das Zweifache der bei der linearen Jahres- AfA in Betracht kommenden Prozentsatzes betragen und 20 Prozent nicht übersteigen.",
      "Voraussetzung für die Ausübung steuerlicher Wahlrechte ist nach § 5 Abs. 1 Satz 2 EStG die Aufnahme der Wirtschaftsgüter, die nicht mit dem handelsrechtlich maßgeblichen Wert in der steuerlichen Gewinnermittlung ausgewiesen werden, in besondere, laufend zu führende Verzeichnisse.",
    ],
  },
  {
    id: "bil-melzer-2-01",
    ...TB2,
    kapitel: "1",
    title: "2.1 Ansatz dem Grunde nach",
    thema: "Klausuraufbau beim Ansatz dem Grunde nach: Zurechnung, Zuordnung, Wirtschaftsgut, Anlage- und Umlaufvermögen mit Ansatzübersichten",
    rechtsstand: RECHTSSTAND,
    quelle: "Bilanzsteuerrecht (Melzer) · Kapitel 2, Abschnitt 2.1",
    verfasser: VERFASSER,
    normen: ["§ 246 Abs. 1 HGB", "§ 247 Abs. 2 HGB", "§ 248 Abs. 2 HGB", "§ 5 Abs. 5 EStG", "§ 5 Abs. 2 EStG", "§ 39 Abs. 1 AO", "§ 39 Abs. 2 AO", "§ 250 Abs. 1 HGB", "§ 250 Abs. 2 HGB", "§ 250 Abs. 3 HGB"],
    themen: ["Klausuraufbau", "Ansatz", "Zurechnung", "Übersicht"],
    bloecke: [
      { typ: "titel", text: "2 Klausuraufbau" },
      "in der Handelsbilanz /in der Steuerbilanz",
      "• Zurechnung:",
      "o beim zivilrechtlichen Eigentümer § 246 Abs. 1 Satz 2 HS 1 HGB, § 39 Abs. 1 AO",
      "o beim wirtschaftlichen Eigentümer § 246 Abs. 1 Satz 2 HS 2 HGB, § 39 Abs. 2 Nr. 1 AO",
      "• Zuordnung: Betriebsvermögen oder gewillkürtes Betriebsvermögen/Abgrenzung Privatvermögen",
      "o Wirtschaftsgüter, die Grundstücke oder Grundstücksteile sind R 4.2 Abs. 3 bis 10 EStR",
      "o Wirtschaftsgüter, die nicht Grundstücke oder Grundstücksteile sind",
      "R 4.2 Abs. 1 EStR",
      "o Verbindlichkeiten H 4.2 Abs. 15„Betriebsschuld“ EStH",
      "• Vermögensgegenstand/Wirtschaftsgut/Schulden § 246 Abs. 1 Satz 1 HGB",
      "o Ansatz von immateriellen Vermögensgegenständen/Wirtschaftsgütern § 248 Abs. 2 HGB",
      "o Ansatz eines Geschäfts-/Firmenwerts § 246 Abs. 1 Satz 4 HGB",
      "• Bei Vermögensgegenständen und Wirtschaftsgütern",
      "Unterscheidung in Anlagevermögen § 247 Abs. 2 HGB und Umlaufvermögen § 247 Abs. 2 HGB Umkehrschluss (Wichtig insbesondere für die Folgebewertung)",
      "Ansatz von Vermögensgegenständen/Wirtschaftsgütern/ Rechnungsabgrenzungsposten und Schulden in der Handelsbilanz und in der Steuerbilanz:",
      { typ: "tabelle", spalten: ["Anlagevermögen", "Handelsbilanz", "Steuerbilanz"], zeilen: [
        ["Grundsatz", "§ 246 Abs. 1 Satz 1 HGB (Gebot) § 247 Abs. 2 HGB nicht abnutzbar (R 6.1 Abs. 1 Satz 6 EStR) abnutzbar (R 6.1 Abs. 1 Satz 5 EStR)", "Grundsatz der Maßgeblichkeit § 5 Abs. 1 Satz 1 HS 1 EStG (Gebot)"],
        ["selbst geschaffene immaterielle Vermögensgegenstände", "§ 248 Abs. 2 Satz 1 HGB (Wahlrecht) Ausnahme: § 248 Abs. 2 Satz 2 HGB (Verbot)", "§ 5 Abs. 2 EStG (Verbot)"],
        ["selbst geschaffener Firmenwert", "Ansatzverbot, da kein Vermögensgegenstand i.S.d. § 246 Abs. 1 Satz 1 HGB, Umkehrschluss § 246 Abs. 1 Satz 4 HGB (Verbot)", "§ 5 Abs. 2 EStG (Verbot)"],
      ] },
      { typ: "tabelle", spalten: ["Umlaufvermögen", "Handelsbilanz", "Steuerbilanz"], zeilen: [
        ["", "§ 246 Abs. 1 Satz 1 HGB (Gebot) § 247 Abs. 2 HGB Umkehrschluss (R 6.1 Abs. 2 EStR)", "Grundsatz der Maßgeblichkeit § 5 Abs. 1 Satz 1 HS 1 EStG (Gebot)"],
      ] },
      { typ: "tabelle", spalten: ["Verbindlichkeiten", "Handelsbilanz", "Steuerbilanz"], zeilen: [
        ["", "§ 246 Abs. 1 Satz 1 und 3 HGB (Gebot)", "Grundsatz der Maßgeblichkeit § 5 Abs. 1 Satz 1 HS 1 EStG (Gebot)"],
      ] },
      { typ: "tabelle", spalten: ["Rückstellungen", "Handelsbilanz", "Steuerbilanz"], zeilen: [
        ["Grundsatz", "249 Abs. 1 Satz 1, 1. Alt HGB (Gebot) ungewisse Verbindlichkeiten (Gebot)", "§ 5 Abs. 1 Satz 1 HS 1 EStG (Gebot)"],
        ["Ausnahme: z.B.: Drohverlustrückstellungen", "249 Abs. 1 Satz 1, 2. Alt HGB (Gebot)", "§ 5 Abs. 1 Satz 1 HS 1, § 5 Abs. 4 a Satz 1 EStG (Verbot)"],
      ] },
      { typ: "tabelle", spalten: ["RAP", "Handelsbilanz", "Steuerbilanz"], zeilen: [
        ["Grundsatz", "§ 250 Abs. 1 HGB (Gebot) ARAP § 250 Abs. 2 HGB (Gebot) PRAP", "§ 5 Abs. 5 Satz 1 Nr. 1 EStG (Gebot) § 5 Abs. 5 Satz 1 Nr. 2 EStG (Gebot)"],
        ["Ausnahme: Disagio/Damnum", "§ 250 Abs. 3 HGB (Wahlrecht)", "§ 5 Abs. 5 Satz 1 Nr. 1 EStG (Gebot)"],
      ] },
    ],
  },
  {
    id: "bil-melzer-2-02",
    ...TB2,
    kapitel: "2",
    title: "2.2 Ansatz der Höhe nach (Bewertung)",
    thema: "Klausuraufbau bei der Bewertung: Bewertungsgrundsätze des § 252 HGB und Übersichten zur Bewertung in Handels- und Steuerbilanz",
    rechtsstand: RECHTSSTAND,
    quelle: "Bilanzsteuerrecht (Melzer) · Kapitel 2, Abschnitt 2.2",
    verfasser: VERFASSER,
    normen: ["§ 6 Abs. 1 EStG", "§ 252 Abs. 1 HGB", "§ 253 Abs. 5 HGB", "§ 253 Abs. 4 HGB", "§ 253 Abs. 1 HGB", "§ 253 Abs. 3 HGB", "§ 255 Abs. 1 HGB", "§ 255 Abs. 2 HGB", "§ 255 Abs. 2a HGB", "§ 7 Abs. 1 EStG"],
    themen: ["Klausuraufbau", "Bewertung", "§ 252 HGB", "Übersicht"],
    bloecke: [
      { typ: "titel", text: "Bewertungsgrundsätze HGB" },
      { typ: "titel", text: "Zu den allgemeinen Bewertungsgrundsätzen gehören nach § 252 Abs. 1 HGB:" },
      "• Grundsatz der Bilanzidentität (§ 252 Abs. 1 Nr. 1 HGB)",
      "Der Grundsatz der Bilanzidentität schreibt vor, dass die Eröffnungsbilanz eines Geschäftsjahres mit der Schlussbilanz des vorangegangenen Geschäftsjahres übereinstimmen muss.",
      "• Grundsatz der Fortführung der Unternehmenstätigkeit Going-Concern-Prinzip (§ 252 Abs. 1 Nr. 2 HGB)",
      "Dieser Grundsatz besagt, dass bei der Bewertung der Vermögensgegenstände und der Schulden von der Fortführung der Unternehmenstätigkeit auszugehen ist, solange dem keine tatsächlichen oder rechtlichen Gegebenheiten entgegenstehen.",
      "• Grundsatz der Einzelbewertung (§ 252 Abs. 1 Nr. 3 HGB)",
      "Die in der Bilanz ausgewiesenen Vermögensgegenstände und Schulden müssen grundsätzlich einzeln bewertet werden. Ausnahmsweise kann von der Einzelbewertung abgesehen werden, wenn die Einzelbewertung aus praktischen Gründen nicht durchführbar ist oder zu einem nicht vertretbaren Arbeitsaufwand führt (z.B. bei Schrauben). Deshalb darf von den Bewertungsvereinfachungsverfahren gem. § 256 Satz 2 HGB i.V.m. § 240 Abs. 3 und 4 HGB auch bei der Bilanzierung Gebrauch gemacht werden (Gruppenbewertung und Festwert-Bewertung).",
      "• Vorsichtsprinzip (§ 252 Abs. 1 Nr. 4 HGB)",
      "Der Grundsatz der Vorsicht besagt, dass die Vermögensgegenstände und die Schulden vorsichtig zu bewerten sind. Das bedeutet allgemein, dass die Aktivposten eher niedriger und die Passivposten eher höher anzusetzen sind.",
      "• Realisationsprinzip",
      "Gewinne dürfen erst ausgewiesen werden, wenn sie durch Verkauf oder Entnahme am Abschlussstichtag realisiert sind. (Bsp: Abzinsungsverbot bei Verbindlichkeiten)",
      "• Imparitätsprinzip",
      "Nicht realisierte Verluste sind grundsätzlich bei der Bilanzierung zu berücksichtigen. Nicht realisierte Gewinne und nicht realisierte Verluste werden ungleich behandelt, daher der Name Ungleichheitsprinzip = Imparitätsprinzip.",
      "Ausprägungen:",
      "• Niederstwertprinzip für Vermögensgegenstände",
      "• Höchstwertprinzip für Verbindlichkeiten gem. § 253 Abs. 4 HGB (Umkehrschluss)",
      "Der Steuerpflichtige muss Umstände, die am Bilanzstichtag bereits vorlagen, ihm aber erst nach diesem Stichtag und vor Aufstellung der Bilanz bekannt werden, berücksichtigen (werterhellende Tatsachen).",
      "Umstände, die nach dem Bilanzstichtag bis zur Zeit der Bilanzaufstellung eintreten und Einfluss auf die Bewertung haben, dürfen nicht berücksichtigt werden (wertbegründende Tatsachen).",
      "• Grundsatz der periodengerechten Aufwands- und Ertragsabgrenzung (§ 252 Abs. 1 Nr. 5 HGB)",
      "Aufwendungen und Erträge sind dem Geschäftsjahr zuzurechnen, in dem sie verursacht wurden. Auf den Zeitpunkt der entsprechenden Ausgaben oder Einnahmen kommt es nicht an. Ertrag und Aufwand werden durch Rechnungsabgrenzungsposten zugeordnet.",
      "• Grundsatz der Stetigkeit der Bewertungsmethoden (§ 252 Abs. 1 Nr. 6 HGB)",
      "Zwischen verschiedenen Bewertungsmöglichkeiten, die der Unternehmer hat, darf nicht willkürlich gewechselt werden. Der Unternehmer muss das einmal von ihm gewählte Bewertungsverfahren in der Regel beibehalten, es sei denn, wirtschaftlich vernünftige Gründe sprechen für einen Verfahrenswechsel. So ist die Abschreibungsmethode grundsätzlich beizubehalten.",
      { typ: "titel", text: "Übersichten: Bewertung Handelsbilanz/Steuerbilanz" },
      { typ: "tabelle", spalten: ["abnutzbares Anlagevermögen", "Handelsbilanz", "Steuerbilanz"], zeilen: [
        ["Zugangsbewertung", "§ 253 Abs. 1 Satz 1 HGB: AK § 255 Abs. 1 HGB HK § 255 Abs. 2 HGB bei immateriellen Vermögensgegenständen zusätzlich § 255 Abs. 2a HGB", "§§ 5 Abs. 1 Satz 1 HS 1, 6 Abs. 1 Nr. 1 Satz 1 EStG, AK H 6.2 EStH HK R 6.3 EStR USt nicht AK/HK gem. § 9 b Abs. 1 EStG, soweit Vorsteuerabzug § 15 Abs. 1 Satz 1 Nr. 1 EStG"],
        ["planmäßige Abschreibungen/AfA", "./. planmäßige Abschreibungen § 253 Abs. 3 Sätze 1 und 2 HGB Nutzungsdauer 10 Jahre bei selbstgeschaffenen immateriellen Vermögensgegenständen des Anlagevermögens und bei einem entgeltlich erworbenen Firmenwert (§ 253 Abs. 3 Sätze 3 und 4 HGB), wenn verlässliche Schätzung nicht möglich.", "./. AfA: bewegliche Wirtschaftsgüter: • Degressive AfA § 7 Abs. 2 EStG (Anschaffung/Herstellung nach 30.06.2025 bis 31.12.2027) • evtl. § 7 g Abs. 5 EStG • lineare AfA § 7 Abs. 1 Sätze 1, 2 EStG • Leistungs- AfA § 7 Abs. 1 Satz 6 EStG PKW § 7 Abs. 2a EStG unbewegliche Wirtschaftsgüter ohne Gebäude/Gebäudeteile: • lineare AfA § 7 Abs. 1 Satz 1 EStG Gebäude/ Gebäudeteile: • AfA gem. § 7 Abs. 4, 5b EStG • § 7 Abs. 5a EStG Mietwohnung"],
        ["außerplanmäßige Abschreibung/ Teilwertabschreibung", "außerplanmäßige Abschreibung auf den niedrigeren beizulegenden Wert bei voraussichtlich dauerhafter Wertminderung § 253 Abs. 3 Satz 5 HGB (Pflicht)", "§ 5 Abs. 1 Satz 1 HS 2 EStG Teilwertabschreibungswahlrecht bei voraussichtlich dauerhafter Wertminderung § 6 Abs. 1 Nr. 1 Sätze 2, 3 EStG (Beck´sche Steuererlasse § 6/12)"],
        ["Wertaufholung", "Wertaufholungsgebot § 253 Abs. 5 Satz 1 HGB Ausnahme: Firmenwert § 253 Abs. 5 Satz 2 HGB", "Wertaufholungsgebot §§ 5 Abs. 6 EStG, 6 Abs. 1 Nr. 1 Satz 4 EStG"],
      ] },
      { typ: "tabelle", spalten: ["nicht abnutzbares Anlagevermögen", "Handelsbilanz", "Steuerbilanz"], zeilen: [
        ["Zugangsbewertung", "§ 253 Abs. 1 Satz 1 HGB: AK § 255 Abs. 1 HGB HK § 255 Abs. 2 HGB bei immateriellen Vermögensgegenständen zusätzlich § 255 Abs. 2a HGB", "§§ 5 Abs. 1 Satz 1 HS 1, 6 Abs. 1 Nr. 2 Satz 1 EStG AK H 6. 2 EStH HK R 6. 3 EStR"],
        ["außerplanmäßige Abschreibung/ Teilwertabschreibung", "außerplanmäßige Abschreibung auf den niedrigeren beizulegenden Wert bei voraussichtlich dauerhafter Wertminderung § 253 Abs. 3 Satz 5 HGB (Pflicht) (gemildertes Niederstwertprinzip) Bei Finanzanlagen Wahlrecht bei nicht dauerhafter Wertminderung § 253 Abs. 3 Satz 6 HGB", "§ 5 Abs. 1 Satz 1 HS 2 EStG Teilwertabschreibungswahlrecht bei voraussichtlich dauerhafter Wertminderung § 6 Abs. 1 Nr. 2 Satz 2 EStG (Beck´sche Steuererlasse § 6/12)"],
        ["Wertaufholung", "Wertaufholungsgebot § 253 Abs. 5 Satz 1 HGB", "Wertaufholungsgebot § 6 Abs. 1 Nr. 2 Satz 3 EStG i.V.m. § 6 Abs. 1 Nr. 1 Satz 4 EStG"],
      ] },
      { typ: "tabelle", spalten: ["Umlaufvermögen", "Handelsbilanz", "Steuerbilanz"], zeilen: [
        ["Zugangsbewertung", "§ 253 Abs. 1 Satz 1 HGB AK/HK", "§§ 5 Abs. 1 Satz 1 HS 1, 6 Abs. 1 Nr. 2 Satz 1 EStG AK/HK"],
        ["außerplanmäßige Abschreibung/ Teilwertabschreibung", "Abschreibung auf den niedrigeren Börsen oder Marktpreis, falls nicht vorhanden auf den niedrigeren beizulegenden Wert am Bilanzstichtag strenges Niederstwertprinzip § 253 Abs. 4 HGB (Pflicht)", "§ 5 Abs. 1 Satz 1 HS 2 EStG Teilwertabschreibungswahlrecht bei voraussichtlich dauerhafter Wertminderung § 6 Abs. 1 Nr. 2 Satz 2 EStG (Beck´sche Steuererlasse § 6/12)"],
        ["Wertaufholung", "Wertaufholungsgebot § 253 Abs. 5 Satz 1 HGB", "Wertaufholungsgebot § 6 Abs. 1 Nr. 2 Satz 3 i.V.m. § 6 Abs. 1 Nr. 1 Satz 4 EStG"],
      ] },
      { typ: "tabelle", spalten: ["Verbindlichkeiten", "Handelsbilanz", "Steuerbilanz"], zeilen: [
        ["Zugangsbewertung", "Erfüllungsbetrag: § 253 Abs. 1 Satz 2 Alt. 1 HGB mit dem Erfüllungsbetrag", "„Anschaffungskosten“/ Erfüllungsbetrag: §§ 5 Abs. 1 Satz 1 HS 1, 6 Abs. 1 Nr. 3 i.V.m § 6 Abs. 1 Nr. 2 Satz 1 EStG, H 6.10 EStH"],
        ["Abzinsung", "Grundsätzlich keine Abzinsung (Ausnahme versteckter Zinsanteil wie zum Bsp bei Kaufpreisstundung und unverzinslichem Ratenkauf)", "keine Abzinsung"],
        ["Werterhöhung", "strenges Höchstwertprinzip § 252 Abs. 1 Nr. 4 HS 1 HGB (Vorsichtsprinzip) und Umkehrschluss § 253 Abs. 4 HGB", "§ 5 Abs. 1 Satz 1 HS 2 EStG Wahlrecht zum Ansatz eines höheren Werts am Bilanzstichtag bei voraussichtlich dauerhafter Werterhöhung § 6 Abs. 1 Nr. 3 EStG i.V.m. § 6 Abs. 1 Nr. 2 Satz 2 EStG"],
        ["Besonderheit", "Valutaverbindlichkeiten (Fremdwährung) § 256 a HGB", "Valutaverbindlichkeiten (Fremdwährung) Beck`sche Steuererlasse § 6/12"],
      ] },
      { typ: "tabelle", spalten: ["Rückstellungen", "Handelsbilanz", "Steuerbilanz"], zeilen: [
        ["Bewertung", "nach vernünftiger kaufmännischer Beurteilung notwendiger Erfüllungsbetrag § 253 Abs. 1 Satz 2 Alt. 2 HGB (Kostensteigerungen sind dabei einzuberechnen)", "Wert zum Bilanzstichtag: Grundsätze: §§ 5 Abs. 6, 6 Abs. 1 Nr. 3a) EStG insbesondere: §§ 5 Abs. 6, 6 Abs. 1 Nr. 3a) f) EStG keine Einbeziehung von Zins und Kostensteigerungen"],
        ["Abzinsung", "Abzinsung immer, wenn Restlaufzeit > 1 Jahr, maßgeblich ist der Marktzinssatz der vergangenen 7 Jahre (RückabzinsungsVO) § 253 Abs. 2 Satz 1 HGB", "Abzinsung: §§ 5 Abs. 6, 6 Abs. 1 Nr. 3a) e) EStG 5,5 % (Beck`sche Steuererlasse zu 1 § 6/19)"],
      ] },
    ],
  },
];

export const bilSkriptMelzer = kapitelRoh.map((kapitel) => ({
  ...kapitel,
  bloecke: kapitel.bloecke.map((block) => (typeof block === "string" ? { text: block } : block)),
}));
