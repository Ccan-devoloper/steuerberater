/* ========================================================================== 
   Social-only Rechtsstands- und Fachkorrekturen.

   Die Lernplattform unter src/data bleibt unverändert. Dieser Layer korrigiert
   ausschließlich die aus diesen Daten erzeugten Instagram-Themenskelette und
   hinterlegt bekannte Rechtsstandswechsel für die Veröffentlichung.
   ========================================================================== */

export function rechtsstandJahre(datum = new Date()) {
  const aktuell = Number(new Intl.DateTimeFormat("de-DE", { timeZone: "Europe/Berlin", year: "numeric" }).format(datum));
  return { aktuell, vorjahr: aktuell - 1 };
}

function normErgaenzen(thema, ...normen) {
  thema.normen ||= [];
  for (const norm of normen.flat().filter(Boolean)) if (!thema.normen.includes(norm)) thema.normen.push(norm);
}

function rechtsstandswechsel(thema, wechsel) {
  thema.rechtsstand ||= { aenderungen: [] };
  const liste = thema.rechtsstand.aenderungen;
  for (const w of [].concat(wechsel || [])) {
    if (!w?.abJahr || !w?.aktuell || !w?.vorher) continue;
    if (!liste.some((x) => x.abJahr === w.abJahr && x.norm === w.norm)) liste.push(w);
  }
}

export function aktiveRechtsstandswechsel(thema, datum = new Date()) {
  const { aktuell, vorjahr } = rechtsstandJahre(datum);
  return (thema?.rechtsstand?.aenderungen || []).filter((w) =>
    Number(w.abJahr) === aktuell && Number(w.vorherJahr ?? aktuell - 1) === vorjahr
  );
}

export function rechtsstandAuftrag(thema, datum = new Date()) {
  const { aktuell, vorjahr } = rechtsstandJahre(datum);
  const wechsel = aktiveRechtsstandswechsel(thema, datum);
  if (!wechsel.length) return "";
  return [
    `WICHTIGER RECHTSSTANDSWECHSEL ${vorjahr}/${aktuell}:`,
    ...wechsel.flatMap((w) => [
      `- Rechtsstand ${aktuell}: ${w.aktuell}`,
      `- Rechtsstand ${vorjahr}: ${w.vorher}`,
      w.norm ? `  Fundstelle: ${w.norm}` : "",
    ]).filter(Boolean),
    `Der Beitrag muss beide Fassungen ausdrücklich mit „Rechtsstand ${aktuell}“ und „Rechtsstand ${vorjahr}“ kennzeichnen. Die Jahre dürfen nicht vermischt werden.`,
  ].join("\n");
}

export function rechtsstandPruefhinweis(thema, datum = new Date()) {
  const auftrag = rechtsstandAuftrag(thema, datum);
  if (!auftrag) return "";
  return `${auftrag}\nPrüfe insbesondere, ob beide Jahresfassungen im veröffentlichten Text inhaltlich richtig und eindeutig beschriftet sind.`;
}

function korrigiereEntfernungspauschale(thema) {
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Fahrten zwischen Wohnung und Betriebsstätte sind nur in Höhe der Entfernungspauschale abziehbar. Bei einem betrieblichen Pkw wird der pauschale Nutzungswert dem nach dem jeweiligen Veranlagungsjahr abzugsfähigen Betrag gegenübergestellt.",
      "Rechtsstand 2026: Für jeden vollen Entfernungskilometer sind 0,38 € je Arbeitstag anzusetzen; die bis 2025 geltende Staffelung entfällt.",
    ],
    lernziele: [
      "den 0,03-%-Wert berechnen",
      "die Entfernungspauschale mit dem für das Veranlagungsjahr geltenden Kilometersatz ermitteln",
      "den positiven Unterschiedsbetrag bestimmen",
      "die Hinzurechnung von der Privatentnahme trennen",
    ],
    pruefschritte: [
      "Begünstigten Bruttolistenpreis und einfache Entfernung feststellen.",
      "0,03 % × einfache Entfernung × Monate berechnen.",
      "Entfernungspauschale für die tatsächlichen Arbeitstage nach dem Rechtsstand des Veranlagungsjahres ermitteln.",
      "Pauschalen Nutzungswert um die Entfernungspauschale kürzen.",
      "Nur einen positiven Unterschiedsbetrag außerhalb der Bilanz hinzurechnen.",
    ],
    merksatz: "Seit 2026 gilt die Entfernungspauschale von 0,38 € ab dem ersten vollen Entfernungskilometer; die frühere Staffelung darf nicht fortgeschrieben werden.",
    fehler: [
      "Für 2026 weiterhin 0,30 € für die ersten 20 km ansetzen.",
      "Hin- und Rückweg statt nur der einfachen Entfernung ansetzen.",
      "Einen negativen Unterschiedsbetrag gewinnmindernd berücksichtigen.",
    ],
  };
  rechtsstandswechsel(thema, {
    abJahr: 2026,
    vorherJahr: 2025,
    norm: "§ 9 Abs. 1 S. 3 Nr. 4 EStG",
    aktuell: "0,38 € je vollem Entfernungskilometer ab dem ersten Kilometer.",
    vorher: "0,30 € je km für die ersten 20 km und 0,38 € ab dem 21. km.",
  });
}



function korrigiereSbvKomplementaerGmbh(thema) {
  normErgaenzen(
    thema,
    "§ 15 Abs. 1 S. 1 Nr. 2 EStG",
    "H 4.2 EStH – Sonderbetriebsvermögen",
    "BFH 16.04.2015 – IV R 1/12",
    "BFH 25.09.2025 – IV R 12/23"
  );
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Sonderbetriebsvermögen I umfasst Wirtschaftsgüter des Mitunternehmers, die objektiv erkennbar unmittelbar dem Betrieb der Personengesellschaft dienen. Sonderbetriebsvermögen II setzt demgegenüber voraus, dass das Wirtschaftsgut unmittelbar zur Begründung oder Stärkung der Beteiligung des Mitunternehmers eingesetzt wird.",
      "Für Anteile eines Kommanditisten an der geschäftsführungsbefugten Komplementär-GmbH gibt es keine allgemeine starre 10-%-Grenze, ab der notwendiges SBV II automatisch vorliegt. Der BFH hat Beteiligungen von weniger als 10 % im gesetzlichen Mehrheitsregelfall als regelmäßig nicht ausreichend angesehen; ob 10 bis 25 % allein genügen, hat er ausdrücklich offengelassen.",
      "Entscheidend bleiben der konkrete Veranlassungs- und Funktionszusammenhang, der durch die GmbH-Beteiligung vermittelte Einfluss auf die KG und ein etwaiger eigener Geschäftsbetrieb der GmbH. Die neuere BFH-Rechtsprechung verlangt bei der wirtschaftlichen-Vorteils-Alternative zudem eine enge wirtschaftliche Verflechtung und Beherrschung; bloße finanzielle Teilhabe genügt nicht.",
    ],
    lernziele: [
      "SBV I und SBV II anhand ihres Funktionszusammenhangs unterscheiden",
      "Komplementär-GmbH-Anteile nicht allein nach einer Beteiligungsquote zuordnen",
      "bei weniger als 10 % die BFH-Negativregel zum gesetzlichen Mehrheitsregelfall beachten",
      "bei 10 bis 25 % keine automatische SBV-II-Zuordnung unterstellen",
      "Einfluss auf die Geschäftsführung, Veranlassungszusammenhang und eigenen Geschäftsbetrieb der GmbH würdigen",
      "Sonderbilanz und Sonder-GuV nur nach geklärter Zuordnung erstellen",
    ],
    pruefschritte: [
      "Wirtschaftsgut dem Mitunternehmer zurechnen.",
      "Unmittelbare betriebliche Nutzung durch die Personengesellschaft prüfen; falls ja, SBV I.",
      "Für SBV II prüfen, ob das Wirtschaftsgut ganz überwiegend der Begründung oder Stärkung der Mitunternehmerstellung dient.",
      "Bei Beteiligung an der Komplementär-GmbH konkret feststellen, welchen Einfluss die Beteiligung auf die Geschäftsführung der KG vermittelt; keine starre 10-%-Automatik verwenden.",
      "Eigenen Geschäftsbetrieb der GmbH von nicht ganz untergeordneter Bedeutung als mögliches Gegenindiz würdigen.",
      "Bei der wirtschaftlichen-Vorteils-Alternative enge wirtschaftliche Verflechtung und Beherrschung prüfen; bloße Vermögensmehrung aus der Beteiligung reicht nicht.",
      "Zugehörige Finanzierung und erst danach Sonderbilanz/Sonder-GuV abbilden.",
    ],
    merksatz: "Komplementär-GmbH-Anteile sind nicht ab 10 % automatisch SBV II. Entscheidend sind Funktion, Einfluss und Veranlassung; unter 10 % greift im gesetzlichen Mehrheitsregelfall regelmäßig die BFH-Negativregel.",
  };
}

function korrigiereAStG2(thema) {
  thema.normen = (thema.normen || []).filter((n) => !/§\s*2a\s+AStG/i.test(n));
  normErgaenzen(thema, "§ 2 Abs. 1–5 AStG");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 2 AStG erweitert bei einem eng begrenzten Wegzugstatbestand die beschränkte Einkommensteuerpflicht. Die Norm gilt nicht bei jedem Wegzug und setzt insbesondere deutsche Staatsangehörigkeit voraus.",
      "Eingangsvoraussetzung ist, dass die Person in den letzten zehn Jahren vor Ende der unbeschränkten Steuerpflicht als Deutscher insgesamt mindestens fünf Jahre unbeschränkt einkommensteuerpflichtig war. Hinzukommen Ansässigkeit in einem niedrig besteuernden Gebiet oder fehlende Ansässigkeit sowie wesentliche wirtschaftliche Interessen im Inland.",
      "Die erweiterte beschränkte Steuerpflicht reicht bis zum Ablauf von zehn Jahren nach Ende des Wegzugsjahres. § 2 Abs. 1 S. 3 AStG enthält eine Freigrenze: Die insgesamt beschränkt steuerpflichtigen Einkünfte müssen im jeweiligen Veranlagungszeitraum mehr als 16.500 € betragen.",
    ],
    lernziele: [
      "deutsche Staatsangehörigkeit und 5-von-10-Jahren-Vorbelastung als Eingangsvoraussetzungen prüfen",
      "Niedrigbesteuerung nach § 2 Abs. 2 AStG gesondert bestimmen",
      "wesentliche wirtschaftliche Interessen nach § 2 Abs. 3 AStG anhand Beteiligungs-, Einkünfte- und Vermögenskriterien prüfen",
      "zehnjährigen Nachwirkungszeitraum und 16.500-€-Freigrenze beachten",
      "§ 2 AStG von der davon unabhängigen Wegzugsbesteuerung nach § 6 AStG trennen",
    ],
    pruefschritte: [
      "Natürliche Person und deutsche Staatsangehörigkeit feststellen.",
      "Prüfen, ob in den letzten zehn Jahren vor Ende der unbeschränkten Steuerpflicht insgesamt mindestens fünf Jahre unbeschränkte Einkommensteuerpflicht bestand.",
      "Niedrigbesteuerung oder fehlende Ansässigkeit nach § 2 Abs. 1 Nr. 1 i.V.m. Abs. 2 AStG prüfen.",
      "Wesentliche wirtschaftliche Interessen nach § 2 Abs. 3 AStG prüfen: insbesondere qualifizierte Unternehmens-/Beteiligungsbezüge, mehr als 30 % der gesamten Einkünfte oder mehr als 62.000 € relevante Einkünfte sowie mehr als 30 % des Gesamtvermögens oder mehr als 154.000 € relevantes Vermögen.",
      "Erweiterten Einkünftekreis bestimmen und den Nachwirkungszeitraum bis zum Ablauf von zehn Jahren nach Ende des Wegzugsjahres beachten.",
      "16.500-€-Freigrenze des § 2 Abs. 1 S. 3 AStG auf die insgesamt beschränkt steuerpflichtigen Einkünfte anwenden.",
      "§ 6 AStG unabhängig prüfen; ein Ausscheiden aus § 2 AStG schließt Wegzugsbesteuerung nach § 6 AStG nicht aus.",
    ],
    merksatz: "§ 2 AStG: Deutscher + 5/10 Jahre + Niedrigsteuergebiet/keine Ansässigkeit + wesentliche Inlandsinteressen; Nachwirkung bis zehn Jahre und 16.500-€-Freigrenze. Einen § 2a AStG gibt es nicht.",
  };
}

function korrigiereAStG9(thema) {
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 9 AStG nimmt Bagatellfälle aus der Hinzurechnungsbesteuerung heraus. Relative und absolute Freigrenze müssen kumulativ eingehalten werden.",
      "Rechtsstand 2026: Die relative Grenze knüpft an die Einkünfte an; die Zwischeneinkünfte dürfen nicht mehr als ein Drittel der gesamten Einkünfte der ausländischen Gesellschaft betragen. Die absolute Grenze beträgt 100.000 €.",
    ],
    lernziele: [
      "die relative Grenze von höchstens einem Drittel der gesamten Einkünfte der ausländischen Gesellschaft prüfen",
      "die absolute Grenze von 100.000 € getrennt prüfen",
      "den Rechtsstandswechsel 2025/2026 erkennen",
      "Freigrenze und Freibetrag auseinanderhalten",
    ],
    pruefschritte: [
      "Gesamte Einkünfte der ausländischen Gesellschaft ermitteln.",
      "Zwischeneinkünfte, für die die Gesellschaft Zwischengesellschaft ist, ins Verhältnis zu den gesamten Einkünften setzen.",
      "Rechtsstand 2026: Relative Grenze prüfen – nicht mehr als ein Drittel der gesamten Einkünfte.",
      "Rechtsstand 2026: Absolute Grenze prüfen – die nach § 9 AStG außer Ansatz zu lassenden Beträge dürfen beim Steuerpflichtigen insgesamt 100.000 € nicht übersteigen.",
      "Nur wenn beide Grenzen eingehalten sind, greift die Freigrenze.",
    ],
    merksatz: "§ 9 AStG arbeitet mit Einkünften, nicht mit Bruttoerträgen. Für Zwischeneinkünfte aus Wirtschaftsjahren, die nach dem 31.12.2025 beginnen, gelten ein Drittel und 100.000 €; für die davor liegende Rechtslage 10 % und 80.000 €. Anwendung: § 21 Abs. 9 AStG.",
  };
  rechtsstandswechsel(thema, {
    abJahr: 2026,
    vorherJahr: 2025,
    norm: "§ 9 i. V. m. § 21 Abs. 9 AStG",
    aktuell: "Für Zwischeneinkünfte aus Wirtschaftsjahren, die nach dem 31.12.2025 beginnen: relative Freigrenze nicht mehr als ein Drittel der gesamten Einkünfte der ausländischen Gesellschaft; absolute Freigrenze 100.000 €.",
    vorher: "Relative Freigrenze: nicht mehr als 10 % der gesamten Einkünfte der ausländischen Gesellschaft; absolute Freigrenze: 80.000 €.",
  });
}


function korrigiereAnschaffungsnah(thema) {
  normErgaenzen(
    thema,
    "§ 6 Abs. 1 Nr. 1a EStG",
    "§ 255 Abs. 2 HGB",
    "BMF 26.01.2026 – IV C 1 - S 2253/00082/001/064"
  );
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 6 Abs. 1 Nr. 1a EStG fingiert Instandsetzungs- und Modernisierungsaufwendungen innerhalb von drei Jahren nach Anschaffung als Herstellungskosten, wenn sie ohne Umsatzsteuer 15 % der Anschaffungskosten des Gebäudes übersteigen.",
      "Erweiterungen nach § 255 Abs. 2 S. 1 HGB werden nicht in die 15-%-Grenze einbezogen, weil sie bereits nach den allgemeinen Grundsätzen Herstellungskosten sind. Jährlich üblicherweise anfallende Erhaltungsarbeiten werden ebenfalls nicht in die 15-%-Grenze einbezogen, bleiben aber bei isolierter Betrachtung typischerweise Erhaltungsaufwand.",
      "Ein Unterschreiten der 15-%-Grenze bedeutet deshalb nicht automatisch Sofortabzug: Anschaffungs- oder Herstellungskosten nach den allgemeinen Grundsätzen, insbesondere Erweiterungen oder eine wesentliche Verbesserung, sind unabhängig von § 6 Abs. 1 Nr. 1a zu aktivieren.",
    ],
    lernziele: [
      "Dreijahreszeitraum und 15-%-Grenze netto auf die Gebäude-Anschaffungskosten beziehen",
      "Erweiterungen aus der 15-%-Berechnung herausnehmen, aber als originäre Herstellungskosten aktivieren",
      "jährlich übliche Erhaltungsarbeiten aus der 15-%-Berechnung herausnehmen",
      "bei Unterschreiten der 15-%-Grenze allgemeine AK/HK-Kriterien weiterhin prüfen",
      "Überschreiten der Grenze als rückwirkendes Ereignis für bereits veranlagte Vorjahre beachten",
    ],
    pruefschritte: [
      "Anschaffungszeitpunkt und Dreijahreszeitraum bestimmen.",
      "Gebäude-Anschaffungskosten als Bezugsgröße und 15-%-Grenze ohne Umsatzsteuer berechnen.",
      "Erweiterungen sowie jährlich übliche Erhaltungsarbeiten aus der §-6-Abs.-1-Nr.-1a-Prüfmasse herausnehmen.",
      "Die verbleibenden Instandsetzungs- und Modernisierungsaufwendungen kumuliert mit der 15-%-Grenze vergleichen.",
      "Bei Überschreiten die von § 6 Abs. 1 Nr. 1a erfassten Aufwendungen als anschaffungsnahe Herstellungskosten aktivieren.",
      "Bei Nichtüberschreiten trotzdem prüfen, ob einzelne Maßnahmen nach allgemeinen Grundsätzen Anschaffungs- oder Herstellungskosten sind; insbesondere Erweiterungen bleiben zu aktivieren.",
    ],
    merksatz: "15 % ist keine allgemeine Aktivierungsgrenze: Erweiterungen zählen nicht in die Quote, sind aber ohnehin Herstellungskosten. Unter 15 % heißt nur: keine Fiktion des § 6 Abs. 1 Nr. 1a – die allgemeinen AK/HK-Regeln bleiben.",
  };
}

function korrigiereSechsBReihenfolge(thema) {
  thema.titel = "Übertragung stiller Reserven nach § 6b EStG";
  thema.kern = {
    ...thema.kern,
    ausdruck: "Abzug ≤ Veräußerungsgewinn und ≤ AK/HK des begünstigten Ersatzwirtschaftsguts",
    erklaerung: "§ 6b EStG bestimmt, auf welche begünstigten Ersatzwirtschaftsgüter ein Veräußerungsgewinn übertragen werden kann und begrenzt den Abzug der Höhe nach. Eine allgemeine gesetzliche Pflicht, stets zuerst Grund und Boden bis auf 0 € und erst danach ein Gebäude zu mindern, gibt es nicht.",
  };
  normErgaenzen(thema, "§ 6b Abs. 1 EStG");
}

function korrigiereSechsBAbs10(thema) {
  thema.kern = {
    ...thema.kern,
    ausdruck: "begünstigter Anteilsgewinn: bis 2.000.000 € nach neuem Recht; Übergangsregel des § 52 Abs. 14 S. 7 EStG beachten",
    erklaerung: "§ 6b Abs. 10 EStG nennt nach aktuellem Gesetzesstand einen Höchstbetrag von 2.000.000 €. Entscheidend ist aber die Übergangsregel: Die Erhöhung gilt nach § 52 Abs. 14 S. 7 EStG erstmals für Gewinne, die in nach dem 10. Februar 2026 beginnenden Wirtschaftsjahren entstehen. Bei kalendergleichem Wirtschaftsjahr greift die 2-Mio.-€-Grenze daher regelmäßig erstmals für 2027; für das Kalenderwirtschaftsjahr 2026 bleibt es noch bei 500.000 €. Bei der Übertragung auf Gebäude oder abnutzbare bewegliche Wirtschaftsgüter ist nur der nicht nach § 3 Nr. 40 i. V. m. § 3c Abs. 2 EStG steuerbefreite Teil abziehbar; für Ersatzanteile gelten die besonderen Regeln des Absatzes 10.",
  };
  thema.normen = ["§ 6b Abs. 10 S. 1–6 EStG", "§ 52 Abs. 14 S. 7 EStG", "§ 3 Nr. 40 EStG", "§ 3c Abs. 2 EStG"];
  rechtsstandswechsel(thema, {
    abJahr: 2026,
    vorherJahr: 2025,
    norm: "§ 6b Abs. 10 S. 1 i. V. m. § 52 Abs. 14 S. 7 EStG",
    aktuell: "Gesetzesstand: Höchstbetrag 2.000.000 € für Gewinne aus Anteilsveräußerungen, die in nach dem 10.02.2026 beginnenden Wirtschaftsjahren entstehen. Bei kalendergleichem Wirtschaftsjahr wirkt die Erhöhung regelmäßig erst 2027; im Kalenderwirtschaftsjahr 2026 bleibt es noch bei 500.000 €.",
    vorher: "Höchstbetrag 500.000 € nach der bis zur Neuregelung geltenden Fassung.",
  });
  rechtsstandswechsel(thema, {
    abJahr: 2027,
    vorherJahr: 2026,
    norm: "§ 6b Abs. 10 S. 1 i. V. m. § 52 Abs. 14 S. 7 EStG",
    aktuell: "Rechtsstand 2027 bei kalendergleichem Wirtschaftsjahr: Höchstbetrag 2.000.000 €.",
    vorher: "Rechtsstand 2026 bei kalendergleichem Wirtschaftsjahr: wegen der Übergangsregel noch Höchstbetrag 500.000 €.",
  });
}

function korrigiereMiete(thema) {
  thema.kern = {
    ...thema.kern,
    antwort: "Ein gewöhnliches Miet- oder Pachtverhältnis begründet in der Regel kein wirtschaftliches Eigentum. Maßgeblich ist aber § 39 Abs. 2 Nr. 1 AO: Kann der Nutzungsberechtigte den zivilrechtlichen Eigentümer für die gewöhnliche Nutzungsdauer wirtschaftlich ausschließen, kann die Zurechnung abweichen. Bei Leasing-, Options- und Spezialkonstellationen ist deshalb der konkrete Vertrag zu prüfen.",
  };
  normErgaenzen(thema, "§ 39 Abs. 2 Nr. 1 AO");
}

function korrigiereVereinsQuiz(thema) {
  normErgaenzen(thema, "§ 64 Abs. 3 AO");
  thema.kern = {
    ...thema.kern,
    erklaerung: "Der nicht begünstigte wirtschaftliche Geschäftsbetrieb ist der grundsätzlich steuerpflichtige Tätigkeitsbereich. Vor der tatsächlichen Belastung mit Körperschaft- und Gewerbesteuer ist jedoch § 64 Abs. 3 AO zu prüfen; Rechtsstand 2026 liegt die Einnahmengrenze einschließlich Umsatzsteuer bei 50.000 €.",
  };
  rechtsstandswechsel(thema, {
    abJahr: 2026,
    vorherJahr: 2025,
    norm: "§ 64 Abs. 3 AO",
    aktuell: "Besteuerungsgrenze 50.000 € Einnahmen einschließlich Umsatzsteuer.",
    vorher: "Besteuerungsgrenze 45.000 € Einnahmen einschließlich Umsatzsteuer.",
  });
}

function korrigiereVerein(thema) {
  normErgaenzen(thema, "§ 64 Abs. 3 AO", "§ 24 KStG");
  if (thema.typ === "karteikarte") {
    thema.kern = {
      ...thema.kern,
      antwort: "Ideeller Bereich, Vermögensverwaltung und Zweckbetrieb sind vom nicht begünstigten wirtschaftlichen Geschäftsbetrieb zu trennen. Dieser ist grundsätzlich steuerpflichtig; vor Körperschaft- und Gewerbesteuer ist aber § 64 Abs. 3 AO zu prüfen. Rechtsstand 2026: Bis 50.000 € Einnahmen einschließlich Umsatzsteuer im Jahr werden die zugehörigen Besteuerungsgrundlagen nicht der KSt/GewSt unterworfen; erst danach ist gegebenenfalls § 24 KStG zu prüfen.",
    };
  } else {
    thema.kern = {
      ...thema.kern,
      einordnung: [
        "Bei gemeinnützigen Vereinen werden ideeller Bereich, Vermögensverwaltung, Zweckbetrieb und nicht begünstigter wirtschaftlicher Geschäftsbetrieb getrennt.",
        "Der wirtschaftliche Geschäftsbetrieb ist grundsätzlich steuerpflichtig. Vor Körperschaft- und Gewerbesteuer ist jedoch die Besteuerungsgrenze des § 64 Abs. 3 AO zu prüfen.",
      ],
      lernziele: [
        "Verein als Körperschaftsteuersubjekt einordnen",
        "Gemeinnützigkeitsbefreiung und Rückausnahme prüfen",
        "die vier Tätigkeitsbereiche trennen",
        "§ 64 Abs. 3 AO vor der eigentlichen Besteuerung des wirtschaftlichen Geschäftsbetriebs prüfen",
        "erst bei verbleibender Steuerpflicht den Freibetrag nach § 24 KStG anwenden",
      ],
      pruefschritte: [
        "Steuerpflicht nach § 1 Abs. 1 Nr. 4 KStG feststellen.",
        "Steuerbefreiung nach § 5 Abs. 1 Nr. 9 KStG und Rückausnahme prüfen.",
        "Tätigkeit in ideellen Bereich, Vermögensverwaltung, Zweckbetrieb und wirtschaftlichen Geschäftsbetrieb aufteilen.",
        "Für nicht begünstigte wirtschaftliche Geschäftsbetriebe die Einnahmen einschließlich Umsatzsteuer zusammenrechnen und § 64 Abs. 3 AO prüfen.",
        "Rechtsstand 2026: Übersteigen diese Einnahmen 50.000 € im Jahr nicht, unterliegen die zugehörigen Besteuerungsgrundlagen nicht der Körperschaft- und Gewerbesteuer.",
        "Nur soweit danach steuerpflichtige Besteuerungsgrundlagen verbleiben, Gewinn ermitteln und § 24 KStG prüfen.",
      ],
      merksatz: "Beim Verein lautet die Reihenfolge: Sphäre bestimmen → § 64 Abs. 3 AO prüfen → erst bei verbleibender Steuerpflicht § 24 KStG anwenden.",
    };
  }
  rechtsstandswechsel(thema, {
    abJahr: 2026,
    vorherJahr: 2025,
    norm: "§ 64 Abs. 3 AO",
    aktuell: "Besteuerungsgrenze 50.000 € Einnahmen einschließlich Umsatzsteuer.",
    vorher: "Besteuerungsgrenze 45.000 € Einnahmen einschließlich Umsatzsteuer.",
  });
}

function korrigiereAchtB(thema) {
  const zusatz = "Erwirbt die Körperschaft im laufenden Kalenderjahr eine Beteiligung von mindestens 10 %, gilt dieser Erwerb nach § 8b Abs. 4 S. 6 KStG für die Streubesitzprüfung als zu Beginn des Kalenderjahres erfolgt.";
  normErgaenzen(thema, "§ 8b Abs. 4 S. 6 KStG");
  if (thema.typ === "quiz") {
    thema.kern = {
      ...thema.kern,
      erklaerung: "Für Dividenden ist grundsätzlich die Beteiligungsquote zu Beginn des Kalenderjahres maßgeblich. Erwirbt die Körperschaft im laufenden Kalenderjahr eine Beteiligung von mindestens 10 %, gilt dieser Erwerb nach § 8b Abs. 4 S. 6 KStG als zu Beginn des Kalenderjahres erfolgt. Erst nach dieser Prüfung steht fest, ob die Streubesitzregel greift.",
    };
    return;
  }
  if (thema.typ === "karteikarte") {
    thema.kern = {
      ...thema.kern,
      antwort: `Für Dividenden grundsätzlich die 10-%-Quote zu Beginn des Kalenderjahres prüfen. ${zusatz} Greift die Freistellung, Ertrag nach § 8b Abs. 1 KStG abziehen und 5 % nach § 8b Abs. 5 KStG hinzurechnen.`,
    };
    return;
  }
  const einordnung = [...(thema.kern?.einordnung || [])].map((x) =>
    /einzige Ausnahme von der Freistellung.*Streubesitzdividende/i.test(x)
      ? "Bei Dividenden ist im Grundfall zusätzlich § 8b Abs. 4 KStG zu prüfen. Daneben kennt § 8b KStG weitere Einschränkungen und Sondertatbestände; die Streubesitzregel darf daher nicht als einzige Ausnahme von der Freistellung dargestellt werden."
      : x
  );
  if (!einordnung.some((x) => /Abs\. 4 S\. 6|laufenden Kalenderjahr.*mindestens 10/i.test(x))) einordnung.push(zusatz);
  const pruefschritte = [...(thema.kern?.pruefschritte || [])].map((x) =>
    /Unter 10 % bleibt der Ertrag voll steuerpflichtig/i.test(x)
      ? "Liegt die Beteiligungsquote zu Beginn des Kalenderjahres unter 10 %, zuerst die Erwerbsfiktion des § 8b Abs. 4 S. 6 KStG prüfen. Nur wenn sie nicht greift, bleibt die Dividende nach Abs. 4 voll steuerpflichtig und die 5-%-Pauschale entfällt."
      : x
  );
  const stichtag = pruefschritte.findIndex((x) => /Beteiligungsquote.*Beginn|10-%-.*Beginn|Stichtag/i.test(x));
  if (!pruefschritte.some((x) => /Abs\. 4 S\. 6|Erwerb.*mindestens 10/i.test(x))) {
    pruefschritte.splice(stichtag >= 0 ? stichtag + 1 : 2, 0, "Unterjährigen Erwerb einer Beteiligung von mindestens 10 % nach § 8b Abs. 4 S. 6 KStG als Erwerb zu Jahresbeginn behandeln.");
  }
  const merksatz = "Bei Dividenden zuerst § 8b Abs. 4 KStG prüfen: Nur wenn die Freistellung nach § 8b Abs. 1 greift, wird der Ertrag abgezogen und die 5-%-Pauschale nach Abs. 5 hinzugerechnet. Veräußerungsgewinne nach § 8b Abs. 2 haben keine 10-%-Mindestquote; im Grundfall greift dort die 5-%-Pauschale des Abs. 3.";
  thema.kern = { ...thema.kern, einordnung, pruefschritte, merksatz };
}

function korrigiereElektroPkw(thema) {
  thema.kern = {
    ...thema.kern,
    merksatz: "Beim Elektro-Pkw Fahrzeugart, Anschaffungszeitpunkt und Bruttolistenpreis getrennt prüfen: Reine Elektrofahrzeuge können ertragsteuerlich unter die Viertelregel fallen; die umsatzsteuerliche Bemessungsgrundlage übernimmt diese ertragsteuerliche Kürzung nicht automatisch.",
  };
}

function korrigiereRueckstellungskatalog(thema) {
  thema.kern = {
    ...thema.kern,
    merksatz: "Aufwandsrückstellungen sind handelsrechtlich nur in den ausdrücklich genannten Fällen des § 249 Abs. 1 HGB zulässig: unterlassene Instandhaltung bei Nachholung innerhalb der ersten drei Monate des Folgejahres und Abraumbeseitigung bei Nachholung im Folgejahr. Gewährleistungen ohne rechtliche Verpflichtung sind ebenfalls ausdrücklich von § 249 Abs. 1 HGB erfasst.",
  };
  normErgaenzen(thema, "§ 249 Abs. 1 S. 2 Nr. 1, 2 HGB");
}

function korrigierePar34(thema) {
  normErgaenzen(thema, "§ 16 Abs. 4 EStG", "§ 34 Abs. 1–3 EStG");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Veräußerungs- und Aufgabegewinne nach § 16 EStG können neben dem Freibetrag nach § 16 Abs. 4 auch tariflich nach § 34 EStG begünstigt sein. Die Begünstigungen haben unterschiedliche persönliche Voraussetzungen.",
      "Die Fünftelregelung nach § 34 Abs. 1 EStG hat keine Altersgrenze und kann bei erneut verwirklichten Tatbeständen des § 34 Abs. 2 grundsätzlich erneut angewandt werden. Dagegen setzen der Freibetrag nach § 16 Abs. 4 und der ermäßigte Durchschnittssteuersatz nach § 34 Abs. 3 grundsätzlich Vollendung des 55. Lebensjahrs oder dauernde Berufsunfähigkeit voraus; beide sind jeweils nur einmal im Leben begünstigt.",
    ],
    lernziele: [
      "Veräußerungsgewinn nach § 16 Abs. 2 EStG ermitteln",
      "laufenden Gewinn vom begünstigten Veräußerungs- oder Aufgabegewinn abgrenzen",
      "Freibetrag nach § 16 Abs. 4 EStG mit Alters-/Berufsunfähigkeitsvoraussetzung und Abschmelzung prüfen",
      "Fünftelregelung nach § 34 Abs. 1 ohne Altersgrenze von § 34 Abs. 3 unterscheiden",
      "ermäßigten Durchschnittssteuersatz nach § 34 Abs. 3 nur bei persönlichen Voraussetzungen, Antrag und Einmal-im-Leben-Grenze prüfen",
    ],
    pruefschritte: [
      "Begünstigten Veräußerungs- oder Aufgabegewinn nach § 16 EStG bestimmen und laufende Gewinne abgrenzen.",
      "Freibetrag nach § 16 Abs. 4 EStG nur auf Antrag und bei Vollendung des 55. Lebensjahrs oder dauernder Berufsunfähigkeit prüfen; Abschmelzung beachten.",
      "Fünftelregelung nach § 34 Abs. 1 EStG als eigenständige Tarifermäßigung prüfen: keine Altersgrenze und keine Einmal-im-Leben-Beschränkung.",
      "Alternativ für begünstigte Gewinne nach § 34 Abs. 2 Nr. 1 den ermäßigten Durchschnittssteuersatz nach § 34 Abs. 3 prüfen: Antrag, 55. Lebensjahr oder dauernde Berufsunfähigkeit, einmal im Leben und Höchstbetrag 5 Mio. €.",
      "Fünftelregelung und § 34 Abs. 3 für denselben Gewinn nicht doppelt anwenden.",
    ],
    merksatz: "55 Jahre/einmal im Leben gehören nicht zur Fünftelregelung: Sie betreffen § 16 Abs. 4 und den ermäßigten Steuersatz des § 34 Abs. 3. § 34 Abs. 1 hat keine Altersgrenze.",
  };
}


function korrigiereBekanntgabeBevollmaechtigter(thema) {
  normErgaenzen(
    thema,
    "§ 80 Abs. 2 und 5 AO",
    "§ 122 Abs. 1 S. 3 und 4 AO",
    "AEAO zu § 122 Nr. 1.7"
  );
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Eine allgemeine Bevollmächtigung und eine Empfangsvollmacht sind für die Bekanntgabe auseinanderzuhalten. Die Mitwirkung eines Steuerberaters an der Steuererklärung allein macht ihn nicht zum Empfangsbevollmächtigten.",
      "Ohne nachgewiesene Empfangsvollmacht kann die Finanzbehörde einen Verwaltungsakt nach § 122 Abs. 1 S. 3 AO grundsätzlich auch gegenüber einem Bevollmächtigten bekannt geben. Liegt der Finanzbehörde dagegen eine schriftliche oder nach amtlich vorgeschriebenem Datensatz elektronisch übermittelte Empfangsvollmacht vor, soll der Verwaltungsakt nach Satz 4 grundsätzlich dem Bevollmächtigten bekannt gegeben werden; im Regelfall ist diese Soll-Vorgabe bindend, atypische Ausnahmefälle bleiben möglich.",
      "Eine frühere Bekanntgabe an den Berater ist für sich genommen kein eigenständiger gesetzlicher Muss-Tatbestand. Entscheidend sind Bestand, Inhalt und Reichweite der Empfangsvollmacht im konkreten Verfahren.",
    ],
    lernziele: [
      "allgemeine Vertretungsvollmacht und Empfangsvollmacht unterscheiden",
      "Vermutung der ordnungsgemäßen Bevollmächtigung nach § 80 Abs. 2 AO nicht mit einer Empfangsvollmacht gleichsetzen",
      "§ 122 Abs. 1 S. 3 als Kann-Bekanntgabe und Satz 4 als Soll-Bekanntgabe bei dokumentierter Empfangsvollmacht unterscheiden",
      "Reichweite einer Empfangsvollmacht konkret auslegen",
      "Widerruf oder Änderung der Vollmacht erst ab Zugang bei der Finanzbehörde berücksichtigen",
      "Ehegatten-Sonderregeln nach § 122 Abs. 6 und 7 AO getrennt prüfen",
    ],
    pruefschritte: [
      "Feststellen, ob und in welchem Umfang ein Bevollmächtigter nach § 80 AO bestellt ist.",
      "Gesondert prüfen, ob der Bevollmächtigte zum Empfang von Verwaltungsakten ermächtigt ist; bloße Mitwirkung an der Steuererklärung genügt nicht.",
      "Ohne dokumentierte Empfangsvollmacht § 122 Abs. 1 S. 3 AO anwenden: Bekanntgabe an den Bevollmächtigten ist möglich, aber nicht zwingend.",
      "Bei schriftlicher oder nach amtlich vorgeschriebenem Datensatz elektronisch übermittelter Empfangsvollmacht § 122 Abs. 1 S. 4 AO anwenden: grundsätzlich Bekanntgabe an den Bevollmächtigten; atypische Ausnahmegründe gesondert prüfen.",
      "Eine frühere Bekanntgabe an den Berater nicht als selbständigen Ersatz für die Prüfung der aktuellen Empfangsvollmacht behandeln.",
      "Bei Ehegatten anschließend § 122 Abs. 6 und 7 AO sowie beantragte Einzelbekanntgabe oder bekannte ernstliche Meinungsverschiedenheiten prüfen.",
    ],
    merksatz: "Empfangsvollmacht entscheidet: Ohne sie ist die Beraterbekanntgabe nach § 122 Abs. 1 S. 3 grundsätzlich Kann-Sache; mit schriftlich oder elektronisch übermittelter Empfangsvollmacht greift Satz 4 als Soll-Regel. Frühere Praxis ersetzt diese Prüfung nicht.",
  };
}

function korrigiereAo122a(thema) {
  normErgaenzen(thema, "§ 122a Abs. 1–5 AO", "Art. 97 § 28 Abs. 2 EGAO");
  const schritte = [...(thema.kern?.pruefschritte || [])];
  const idx = schritte.findIndex((x) => /Bereitstellung zum Datenabruf/i.test(x));
  const neu = [
    "Bei § 122a AO die Bekanntgabefiktion getrennt prüfen: Ein zum Abruf bereitgestellter Verwaltungsakt gilt am vierten Tag nach der Bereitstellung als bekannt gegeben; die elektronische Benachrichtigung hat nur Hinweisfunktion.",
    "Übergang 2026: § 122a Abs. 1 S. 2 (regelmäßige Bereitstellung nach elektronisch übermittelter Steuer-/Feststellungserklärung) ist noch nicht allgemein anzuwenden. Nach BMF 13.08.2026 erfolgt die elektronische Bekanntgabe 2026 grundsätzlich weiterhin nur bei zuvor erteilter/fortwirkender Einwilligung; sonst postalisch.",
    "Ab 2027: § 122a Abs. 1 S. 2 ist auf nach dem 31.12.2026 erlassene Verwaltungsakte anzuwenden; bei den gesetzlichen Fällen wird elektronische Bereitstellung zum Regelfall, sofern kein Antrag auf postalische Bekanntgabe nach Abs. 2 greift.",
  ];
  if (!schritte.some((x) => /Benachrichtigung.*Hinweisfunktion/i.test(x))) schritte.splice(idx >= 0 ? idx : schritte.length, idx >= 0 ? 1 : 0, ...neu);
  thema.kern = {
    ...thema.kern,
    pruefschritte: schritte,
    merksatz: "§ 122a seit 2026: vier Tage ab Bereitstellung, nicht ab Benachrichtigung. 2026 gilt noch die Übergangslage; ab 2027 wird die elektronische Bereitstellung in den Fällen des Abs. 1 S. 2 grundsätzlich zum Regelfall, mit postalischem Opt-out.",
  };
  rechtsstandswechsel(thema, {
    abJahr: 2027,
    vorherJahr: 2026,
    norm: "§ 122a Abs. 1 S. 2 AO i. V. m. Art. 97 § 28 Abs. 2 EGAO",
    aktuell: "2027: § 122a Abs. 1 S. 2 ist für nach dem 31.12.2026 erlassene Verwaltungsakte anwendbar; elektronische Bereitstellung wird in den gesetzlichen Fällen grundsätzlich ohne vorherige Einwilligung genutzt, sofern kein Antrag auf postalische Bekanntgabe greift.",
    vorher: "2026: Übergangsjahr. Nach BMF-Schreiben vom 13.08.2026 erfolgt elektronische Bekanntgabe grundsätzlich nur bei zuvor erteilter bzw. fortwirkender Einwilligung; in den übrigen Fällen weiterhin postalisch.",
  });
}

function korrigiereAussenpruefung171(thema) {
  normErgaenzen(thema, "§ 171 Abs. 4 S. 1–8 AO", "Art. 97 § 37 Abs. 2 EGAO");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 171 Abs. 4 AO ist nach dem Entstehungszeitpunkt der geprüften Steuer zu trennen. Für Steuern und Steuervergütungen, die nach dem 31.12.2024 entstehen, gilt die Neufassung; für ältere Steuern bleibt § 171 Abs. 4 a. F. maßgeblich.",
      "Neues Recht: Die Ablaufhemmung endet grundsätzlich spätestens fünf Jahre nach Ablauf des Kalenderjahres, in dem die Prüfungsanordnung bekanntgegeben wurde. Gesetzliche Verlängerungen gelten insbesondere bei vom Steuerpflichtigen beantragtem Hinausschieben/Unterbrechen sowie bei qualifizierter zwischenstaatlicher Amtshilfe; bei bestimmten Strafverfahrensfällen greift die Fünfjahresgrenze nicht.",
    ],
    lernziele: [
      "Anwendungsbereich altes/neues §-171-Abs.-4-Recht anhand des Steuerentstehungszeitpunkts trennen",
      "wirksame Prüfungsanordnung und tatsächlichen Prüfungsbeginn bzw. beantragten Aufschub prüfen",
      "neue Fünfjahres-Höchstgrenze ab Bekanntgabejahr der Prüfungsanordnung berechnen",
      "Verlängerungs- und Ausnahmefälle der Sätze 4–8 gesondert prüfen",
      "Reichweite auf geprüfte Steuerarten und Besteuerungszeiträume begrenzen",
    ],
    pruefschritte: [
      "1. Entstehungszeitpunkt der Steuer bestimmen: nach dem 31.12.2024 → § 171 Abs. 4 n. F.; davor → altes Recht.",
      "2. Wirksame Prüfungsanordnung und Hemmungstatbestand nach Satz 1 prüfen: Prüfungsbeginn vor Fristablauf oder auf Antrag hinausgeschobener Beginn.",
      "3. Unterbrechungsregel des Satzes 2 prüfen.",
      "4. Bei neuem Recht Höchstgrenze berechnen: grundsätzlich fünf Jahre nach Ablauf des Kalenderjahres der Bekanntgabe der Prüfungsanordnung.",
      "5. Verlängerungen nach Satz 4/5 und Ausnahme bei Strafverfahren nach Satz 7 prüfen; § 200a Abs. 4/5 bleibt vorbehalten.",
      "6. Unanfechtbarkeit der aufgrund der Prüfung erlassenen Bescheide bzw. Drei-Monats-Regel nach § 202 Abs. 1 S. 3 weiterhin in die Endprüfung einbeziehen.",
    ],
    merksatz: "Außenprüfung 2026: Nicht mehr pauschal mit Schlussbesprechung/letzter Ermittlung als äußerster Grenze rechnen. Für ab 2025 entstehende Steuern gilt grundsätzlich die Fünfjahresgrenze ab Ende des Bekanntgabejahres der Prüfungsanordnung – Ausnahmen und Verlängerungen prüfen.",
  };
}


function korrigiereBewg14Faktoren(thema) {
  normErgaenzen(
    thema,
    "§ 14 Abs. 1 BewG",
    "BMF 21.10.2025 – IV D 4 - S 3104/00002/013/003",
    "BMF 09.12.2024 – IV D 4 - S 3104/19/10001 :010"
  );
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Für lebenslängliche Nutzungen und Leistungen nach § 14 Abs. 1 BewG ist der zum Bewertungsstichtag geltende amtliche Vervielfältiger nach vollendetem Lebensalter und Geschlecht zu verwenden.",
      "Rechtsstand 2026: Für Bewertungsstichtage ab 1.1.2026 gilt die vom BMF am 21.10.2025 veröffentlichte Tabelle auf Basis der Allgemeinen Sterbetafel 2022/2024. Die 2025er Tabelle darf für 2026 nicht fortgeschrieben werden.",
      "Bei bestimmter Dauer bleibt § 13 BewG i.V.m. Anlage 9a einschlägig. Beim §-14-Tabellenwert wird nicht zwischen Alterszeilen interpoliert.",
    ],
    lernziele: [
      "bestimmte Dauer nach § 13 von lebenslänglicher Dauer nach § 14 BewG trennen",
      "für § 14 die zum Bewertungsstichtag geltende BMF-Tabelle verwenden",
      "vollendetes Lebensalter und Geschlecht am Stichtag richtig zuordnen",
      "2026er und 2025er §-14-Tabelle nicht vermischen",
      "den Tabellenwert ohne Interpolation zwischen Alterszeilen übernehmen",
    ],
    pruefschritte: [
      "Bewertungsstichtag bestimmen.",
      "Bestimmte Dauer: § 13 BewG und Anlage 9a anwenden.",
      "Lebenslängliche Nutzung/Leistung: vollendetes Lebensalter und Geschlecht am Bewertungsstichtag feststellen.",
      "Für Stichtage ab 1.1.2026 die BMF-Tabelle vom 21.10.2025 (Sterbetafel 2022/2024) verwenden; für Stichtage im Jahr 2025 die hierfür geltende BMF-Tabelle vom 09.12.2024 (Sterbetafel 2021/2023).",
      "Passenden Vervielfältiger unmittelbar aus der jeweiligen Tabelle übernehmen; nicht zwischen Alterszeilen interpolieren.",
      "Jahreswert mit dem maßgebenden Vervielfältiger multiplizieren.",
    ],
    merksatz: "§ 14 BewG ist stichtagsabhängig: 2026 gilt die neue BMF-Tabelle auf Basis 2022/2024; 2025 galt die vorherige Tabelle auf Basis 2021/2023. Keine Interpolation zwischen Alterszeilen.",
  };
  rechtsstandswechsel(thema, {
    abJahr: 2026,
    vorherJahr: 2025,
    norm: "§ 14 Abs. 1 BewG; BMF 21.10.2025 und BMF 09.12.2024",
    aktuell: "Für Bewertungsstichtage ab 1.1.2026 gilt die BMF-Tabelle vom 21.10.2025 auf Basis der Sterbetafel 2022/2024.",
    vorher: "Für Bewertungsstichtage im Jahr 2025 galt die BMF-Tabelle vom 09.12.2024 auf Basis der Sterbetafel 2021/2023.",
  });
}

function korrigiereFamilienheim(thema) {
  normErgaenzen(thema, "§ 13 Abs. 1 Nr. 4a–4c ErbStG");
  const einordnung = [...(thema.kern?.einordnung || [])].map((x) =>
    /zwingenden Gründen wie Krankheit, Heimunterbringung oder Tod/i.test(x)
      ? x.replace(
          /zu zwingenden Gründen wie Krankheit, Heimunterbringung oder Tod.?/i,
          "zur zehnjährigen Selbstnutzungslogik. Ein vorzeitiger Auszug bleibt nur bei objektiv zwingenden Gründen unschädlich; eine Heimunterbringung allein reicht dafür nicht."
        )
      : x
  );
  const schritte = [...(thema.kern?.pruefschritte || [])].map((x) =>
    /Aufgabe innerhalb zehn Jahren|schwere Krankheit\/?Heim\/?Tod|Krankheit.*Heim.*Tod/i.test(x)
      ? "Bei Aufgabe der Selbstnutzung innerhalb von zehn Jahren grundsätzlich Nachversteuerung prüfen. Ausnahme nur bei objektiv zwingenden Gründen: Die Selbstnutzung muss objektiv unmöglich oder unzumutbar sein; eine Heimunterbringung genügt nicht allein, sondern etwa dann, wenn Pflegebedürftigkeit eine selbständige Haushaltsführung nicht mehr zulässt."
      : x
  );
  schritte.push("Bei Nr. 4b/4c die unverzügliche Bestimmung zur Selbstnutzung anhand der konkreten Umstände würdigen. Die von der BFH-Rechtsprechung entwickelte Sechs-Monats-Orientierung ist nach BFH-Beschluss vom 27.05.2026 keine starre Ausschlussfrist.");
  thema.kern = {
    ...thema.kern,
    einordnung,
    pruefschritte: schritte,
    merksatz: "Familienheim: Tatbestand 4a/4b/4c sauber trennen. Innerhalb der Zehnjahresfrist schützt nur ein objektiv zwingender Hinderungsgrund; Pflegeheim ist kein Automatismus. Beim erstmaligen Einzug ist die Sechs-Monats-Linie nur eine Orientierung, keine starre Frist.",
  };
}

function korrigiereErbStSchuldenabzug(thema) {
  thema.normen = (thema.normen || []).filter((n) => !/§ 10 Abs\. 6 ErbStG/.test(n));
  normErgaenzen(thema, "§ 10 Abs. 6a ErbStG", "§ 10 Abs. 6 ErbStG", "§ 10 Abs. 6b ErbStG");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Rechtsstand seit 2025: § 10 Abs. 6 ErbStG betrifft den Schuldenabzug bei beschränkter Steuerpflicht bzw. beschränktem deutschen Besteuerungsrecht.",
      "Die Kürzung von Schulden und Lasten wegen vollständig oder teilweise steuerbefreiten Vermögens steht in § 10 Abs. 6a ErbStG. Nicht unmittelbar einzelnen Vermögensgegenständen zuordenbare Schulden werden nach den gesetzlichen Verhältnisregeln des Absatzes 6a verteilt.",
      "§ 10 Abs. 6b enthält ergänzende Sonderregeln für bestimmte Fälle der beschränkten Steuerpflicht.",
    ],
    lernziele: [
      "§ 10 Abs. 6, 6a und 6b nach ihrer aktuellen Funktion auseinanderhalten",
      "wirtschaftlich direkt mit steuerbefreitem Vermögen zusammenhängende Schulden nach § 10 Abs. 6a kürzen",
      "nicht unmittelbar zuordenbare Schulden nach § 10 Abs. 6a verhältnismäßig zuordnen",
      "beschränkte Steuerpflicht gesondert nach § 10 Abs. 6 und 6b prüfen",
    ],
    pruefschritte: [
      "Zuerst feststellen, ob der Fall unbeschränkte oder beschränkte Steuerpflicht bzw. ein beschränktes deutsches Besteuerungsrecht betrifft.",
      "Bei wirtschaftlichem Zusammenhang mit vollständig oder teilweise steuerbefreitem Vermögen die Kürzung nach § 10 Abs. 6a ErbStG bestimmen.",
      "Nicht unmittelbar einzelnen Vermögensgegenständen zuordenbare Schulden nach der Verhältnisregel des § 10 Abs. 6a zuordnen.",
      "Nur bei beschränkter Steuerpflicht bzw. beschränktem deutschen Besteuerungsrecht zusätzlich § 10 Abs. 6 und 6b ErbStG anwenden.",
      "Richtlinienausnahmen für einzelne Befreiungstatbestände nur nach aktueller Fundstelle und Tatbestand anwenden.",
    ],
    merksatz: "Seit 2025 sauber trennen: Abs. 6 = beschränkte Steuerpflicht; Abs. 6a = Schuldenkürzung bei steuerbefreitem Vermögen und Verhältniszuordnung; Abs. 6b = ergänzende Sonderregel.",
  };
}

function ergaenzeErbSt13dDrittstaat(thema) {
  normErgaenzen(thema, "§ 13d Abs. 3 Nr. 1–3 ErbStG", "R E 13d Abs. 2, 6 ErbStR");
  const einordnung = [...(thema.kern?.einordnung || [])].map((x) =>
    /langfristige Vermietung|>\s*6 Monate|6 Monate/i.test(x)
      ? "Maßgeblich sind die Verhältnisse im Besteuerungszeitpunkt: Begünstigt ist die entgeltliche Vermietung zu Wohnzwecken. § 13d ErbStG enthält keine starre Mindestmietdauer von sechs Monaten; bei Leerstand kann eine bereits konkretisierte Vermietungsabsicht genügen."
      : x
  );
  if (!einordnung.some((x) => /keine starre Mindestmietdauer/i.test(x))) {
    einordnung.push("§ 13d ErbStG enthält keine starre Mindestmietdauer von sechs Monaten. Entscheidend sind Wohnzweck, Entgeltlichkeit und die Verhältnisse im Besteuerungszeitpunkt; die Einordnung kurzfristiger beziehungsweise wechselnder Nutzungen ist anhand des konkreten Wohnzwecks zu prüfen.");
  }
  einordnung.push("Aktueller internationaler Anwendungsbereich: Inland und EU/EWR sind begünstigungsfähig; seit der Neufassung durch das JStG 2024 können auch in Drittstaaten belegene Wohnimmobilien begünstigt sein, wenn der Drittstaat für die Erbschaftsteuer den gesetzlich geforderten Informationsaustausch/Amtshilfe gewährleistet und auf der BMF-Liste steht.");

  const pruefschritte = [...(thema.kern?.pruefschritte || [])].map((x) =>
    /Stichtagsverhältnisse.*>\s*6 Monate|langfristige Wohnvermietung.*6 Monate/i.test(x)
      ? "Stichtagsverhältnisse prüfen: entgeltliche Vermietung zu Wohnzwecken oder bei Leerstand eine bereits konkretisierte Vermietungsabsicht. Keine starre Sechs-Monats-Grenze anwenden."
      : x
  );
  const lage = pruefschritte.findIndex((x) => /Lagevoraussetzung|Lage prüfen/i.test(x));
  const satz = "Lage prüfen: Bei Drittstaaten § 13d Abs. 3 Nr. 2 ErbStG anwenden – Begünstigung nur bei qualifiziertem Informationsaustausch/Amtshilfe; maßgeblich ist die vom BMF veröffentlichte Staatenliste.";
  if (!pruefschritte.some((x) => /Drittstaaten.*Amtshilfe|BMF.*Staatenliste/i.test(x))) pruefschritte.splice(lage >= 0 ? lage + 1 : 2, 0, satz);
  thema.kern = {
    ...thema.kern,
    einordnung,
    pruefschritte,
    merksatz: "§ 13d: 90-%-Wertansatz bei entgeltlicher Wohnvermietung am Stichtag; keine starre Sechs-Monats-Mindestdauer. Drittstaaten sind bei gesetzlich gesicherter Amtshilfe/Informationsaustausch begünstigungsfähig.",
  };
}

function ergaenzeErbfallkosten(thema) {
  normErgaenzen(thema, "§ 10 Abs. 5 Nr. 3 S. 2 ErbStG", "§ 37 Abs. 21 ErbStG");
  const schritte = [...(thema.kern?.pruefschritte || [])];
  if (!schritte.some((x) => /15\.000.*Erbfallkosten|Erbfallkosten.*15\.000/i.test(x))) {
    const idx = schritte.findIndex((x) => /Erbfallkosten/i.test(x));
    schritte.splice(idx >= 0 ? idx + 1 : 0, 0, "Für Erbfallkosten nach § 10 Abs. 5 Nr. 3 S. 2 ErbStG aktuellen Pauschbetrag beachten: 15.000 € ohne Nachweis; die Erhöhung von 10.300 € gilt für Erwerbe mit Steuerentstehung nach dem 31.12.2024.");
  }
  thema.kern = {
    ...thema.kern,
    pruefschritte: schritte,
    merksatz: "Erbfallkosten: aktuell 15.000 € Pauschbetrag ohne Nachweis nach § 10 Abs. 5 Nr. 3 S. 2 ErbStG; erst höhere tatsächliche Kosten erfordern den Einzelnachweis. Persönliche Freibeträge und Tarif folgen erst danach.",
  };
}

function korrigiereVorgesellschaft(thema) {
  normErgaenzen(thema, "§ 1 Abs. 1 Nr. 1 KStG", "H 1.1 KStH");
  const hinweis = "Die körperschaftsteuerliche Rückwirkung auf die notarielle Beurkundung gilt für die echte Vorgesellschaft, wenn die spätere Kapitalgesellschaft tatsächlich in das Handelsregister eingetragen wird. Scheitert die Eintragung endgültig, ist die Vorgesellschaft nach der BFH-Rechtsprechung nicht als Kapitalgesellschaft körperschaftsteuerpflichtig, sondern grundsätzlich nach den Regeln eines Einzelunternehmens bzw. einer Personengesellschaft zu behandeln.";
  if (thema.typ === "quiz") {
    thema.titel = "Wann beginnt die Körperschaftsteuerpflicht einer erfolgreich gegründeten GmbH?";
    thema.kern = {
      ...thema.kern,
      frage: "Wann beginnt bei einer GmbH, die später tatsächlich in das Handelsregister eingetragen wird, die Körperschaftsteuerpflicht?",
      erklaerung: `Bei erfolgreicher Eintragung bilden echte Vorgesellschaft und spätere GmbH steuerlich ein einheitliches Steuersubjekt; die Steuerpflicht reicht grundsätzlich bis zur notariellen Beurkundung des Gesellschaftsvertrags zurück. ${hinweis}`,
    };
    return;
  }
  if (thema.typ === "karteikarte") {
    thema.kern = {
      ...thema.kern,
      antwort: `Vorgründungsgesellschaft: grundsätzlich eigenes transparent besteuertes Gebilde. Echte Vorgesellschaft: bei später erfolgreicher Registereintragung steuerliche Einheit mit der GmbH und grundsätzlich Körperschaftsteuerpflicht ab notarieller Beurkundung. ${hinweis}`,
    };
    return;
  }
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Vorgründungsgesellschaft, Vorgesellschaft und eingetragene GmbH sind zeitlich und steuerlich zu trennen.",
      "Bei einer später tatsächlich eingetragenen GmbH bilden echte Vorgesellschaft und GmbH steuerlich ein einheitliches Steuersubjekt; die Körperschaftsteuerpflicht reicht grundsätzlich bis zur notariellen Beurkundung zurück.",
      hinweis,
    ],
    pruefschritte: [
      "Vorgründungsphase bis zur notariellen Beurkundung abgrenzen.",
      "Ab notarieller Beurkundung prüfen, ob eine echte Vorgesellschaft mit fortbestehender Eintragungsabsicht vorliegt.",
      "Erfolgt die Handelsregistereintragung, Vorgesellschaft und GmbH steuerlich als einheitliches Steuersubjekt behandeln; Beginn grundsätzlich mit der notariellen Beurkundung.",
      "Scheitert die Eintragung endgültig oder entfällt die Eintragungsabsicht, die Körperschaftsteuerpflicht nicht pauschal ab Beurkundung fortschreiben, sondern die Behandlung als Einzelunternehmen/Personengesellschaft prüfen.",
    ],
    merksatz: "Notar vor Register gilt nur bei der echten, erfolgreich zur GmbH führenden Vorgesellschaft. Scheitert die Eintragung, fehlt die rückwirkende Körperschaftsteuerpflicht der GmbH.",
  };
}

function korrigiereLeasing4090(thema) {
  thema.titel = "Finanzierungsleasing: 40/90-Regel und Kaufoption";
  thema.kern = {
    ...thema.kern,
    ausdruck: "Grundmietzeit ÷ betriebsgewöhnliche Nutzungsdauer; bei Kaufoption zusätzlich Optionspreis mit linearem Restbuchwert bzw. niedrigerem gemeinen Wert vergleichen",
    erklaerung: "Die 40/90-Regel ist eine typisierende Verwaltungsregel für bestimmte Finanzierungsleasingverträge, insbesondere Vollamortisationsverträge über bewegliche Wirtschaftsgüter, und ersetzt nicht die Würdigung des konkreten Vertrags nach § 39 AO. Ohne Option wird der Gegenstand bei einer Grundmietzeit von mindestens 40 % und höchstens 90 % regelmäßig dem Leasinggeber, außerhalb dieser Spanne regelmäßig dem Leasingnehmer zugerechnet. Bei einer Kaufoption innerhalb der 40/90-Spanne bleibt die Zurechnung regelmäßig beim Leasinggeber, wenn der Optionspreis nicht niedriger ist als der nach linearer AfA ermittelte Restbuchwert oder der niedrigere gemeine Wert im Veräußerungszeitpunkt; ist der Optionspreis niedriger, spricht die Verwaltungsregel für die Zurechnung beim Leasingnehmer. Mietverlängerungs- und Spezialleasingfälle sind gesondert zu prüfen.",
  };
  normErgaenzen(thema, "§ 39 Abs. 2 Nr. 1 AO");
}

function korrigiereEinlageDeckel(thema) {
  normErgaenzen(thema, "§ 6 Abs. 1 Nr. 5 S. 1–3 EStG");
  thema.kern = {
    ...thema.kern,
    antwort: "Grundsatz: Einlagen sind mit dem Teilwert anzusetzen. Bei einem innerhalb der letzten drei Jahre vor der Einlage aus dem Privatvermögen angeschafften oder hergestellten Wirtschaftsgut greift die Deckelung nach § 6 Abs. 1 Nr. 5 S. 1 Buchst. a EStG auf die fortgeführten Anschaffungs- oder Herstellungskosten. Wurde das Wirtschaftsgut zuvor aus einem Betriebsvermögen desselben Steuerpflichtigen entnommen, ersetzt nach Satz 3 der Entnahmewert die Anschaffungs-/Herstellungskosten und der Entnahmezeitpunkt den Anschaffungs-/Herstellungszeitpunkt. Weitere Sonderfälle für Beteiligungen und bestimmte Kapitalanlagen nach Buchst. b und c gesondert prüfen.",
  };
}

function korrigiere15aVierSchritte(thema) {
  normErgaenzen(thema, "§ 15a Abs. 1 S. 1–3 EStG");
  thema.kern = {
    ...thema.kern,
    antwort: "1. Kommanditist bzw. vergleichbar beschränkt haftender Mitunternehmer? 2. Steuerliches Kapitalkonto bestimmen; Verluste sind nach § 15a Abs. 1 S. 1 nur bis zur Grenze ausgleichs-/abzugsfähig, bei der kein negatives Kapitalkonto entsteht oder sich erhöht. 3. Erweiterter Verlustausgleich nach Satz 2 nur bis zum Betrag, um den die im Handelsregister eingetragene Einlage die tatsächlich geleistete Einlage übersteigt – und nur, wenn die Außenhaftung nach § 171 Abs. 1 HGB am Bilanzstichtag tatsächlich besteht, nachgewiesen ist und eine Vermögensminderung weder vertraglich ausgeschlossen noch nach der Art des Geschäftsbetriebs unwahrscheinlich ist (Satz 3). 4. Nicht ausgleichsfähiger Rest ist verrechenbarer Verlust; gesonderte Feststellung nach § 15a Abs. 4 EStG. Sonderbetriebsergebnis gesondert behandeln.",
  };
}

function kennzeichneERechnung(thema) {
  thema.titel = "E-Rechnung im B2B-Inland: Übergangsfristen";
  normErgaenzen(thema, "§ 14 UStG", "§ 27 Abs. 38 UStG");
  thema.kern = {
    ...thema.kern,
    frage: "Welche Übergangsregeln gelten für die E-Rechnung im inländischen B2B-Bereich?",
    erklaerung: "Seit 2025 müssen inländische Unternehmer grundsätzlich E-Rechnungen empfangen können. Für die Ausstellung gelten Übergangsregeln nach § 27 Abs. 38 UStG: Bis Ende 2026 können Rechnungen für die erfassten B2B-Umsätze noch allgemein auf Papier oder – mit Zustimmung des Empfängers – in einem nicht EN-16931-konformen elektronischen Format übermittelt werden. Für 2027 wird diese allgemeine Übergangsregel enger; insbesondere bleibt Papier beziehungsweise ein anderes elektronisches Format für Aussteller mit Vorjahres-Gesamtumsatz bis 800.000 € bis Ende 2027 möglich, daneben besteht die gesonderte EDI-Übergangsregel.",
  };
  rechtsstandswechsel(thema, {
    abJahr: 2027,
    vorherJahr: 2026,
    norm: "§ 27 Abs. 38 Nr. 1–3 UStG",
    aktuell: "2027: Papier oder ein nicht den E-Rechnungsanforderungen entsprechendes elektronisches Format ist grundsätzlich nur noch bei Ausstellern mit Vorjahres-Gesamtumsatz bis 800.000 € über die Nr. 2 zulässig; die gesonderte EDI-Übergangsregel der Nr. 3 bleibt bis Ende 2027 bestehen.",
    vorher: "2026: Für die von § 27 Abs. 38 Nr. 1 erfassten B2B-Umsätze kann die Rechnung noch unabhängig von einer 800.000-€-Umsatzgrenze auf Papier oder – mit Zustimmung – in einem anderen elektronischen Format übermittelt werden.",
  });
}

function korrigiereMietereinbauAfa(thema) {
  normErgaenzen(thema, "§ 7 Abs. 4 S. 1, 2 EStG");
  thema.kern = {
    ...thema.kern,
    antwort: "Bei sonstigen Mietereinbauten und -umbauten, die keine Scheinbestandteile oder Betriebsvorrichtungen sind, gelten grundsätzlich die Gebäude-AfA-Regeln. Damit sind im Regelfall die typisierten Sätze des § 7 Abs. 4 S. 1 EStG maßgeblich; § 7 Abs. 4 S. 2 EStG kommt bei nachgewiesener kürzerer tatsächlicher Nutzungsdauer in Betracht. Die Mietdauer ist nicht automatisch die AfA-Dauer. Ein bloßes Nutzungsrecht ist davon getrennt zu beurteilen.",
  };
}

function korrigiereAbbruchkosten(thema) {
  thema.kern = {
    ...thema.kern,
    antwort: "Zuerst die Abbruchabsicht beim Erwerb klären. Ein Abbruchbeginn innerhalb von drei Jahren nach dem Erwerb begründet lediglich einen widerlegbaren Anscheinsbeweis für eine bereits beim Erwerb bestehende Abbruchabsicht. Ohne Abbruchabsicht sind Restbuchwert und Abbruchkosten grundsätzlich sofort abzugsfähig. Bei Erwerb mit Abbruchabsicht gehören Restbuchwert und Abbruchkosten bei engem wirtschaftlichem Zusammenhang mit einem Neubau grundsätzlich zu dessen Herstellungskosten; fehlt dieser Zusammenhang, gehören sie grundsätzlich zu den Anschaffungskosten des Grund und Bodens. Sonderfälle, etwa ein bereits objektiv wertloses Gebäude, sind gesondert zu prüfen.",
  };
}

function korrigiereOption9(thema) {
  normErgaenzen(thema, "§ 9 Abs. 1–3 UStG");
  thema.kern = {
    ...thema.kern,
    antwort: "§ 9 Abs. 1 UStG erlaubt bei den dort genannten Steuerbefreiungen den Verzicht, wenn der Umsatz an einen anderen Unternehmer für dessen Unternehmen ausgeführt wird. Bei Erbbaurechten sowie Vermietungs-/Verpachtungsumsätzen nach § 4 Nr. 12 greift zusätzlich § 9 Abs. 2: Die Option ist nur zulässig, soweit der Leistungsempfänger das Grundstück ausschließlich für Umsätze verwendet oder zu verwenden beabsichtigt, die den Vorsteuerabzug nicht ausschließen; die Verwaltungsregelungen zur geringfügigen schädlichen Nutzung sind gesondert zu beachten. Das notarielle Formerfordernis des § 9 Abs. 3 S. 2 gilt dagegen für andere Umsätze nach § 4 Nr. 9 Buchst. a (insbesondere Grundstückslieferungen außerhalb der Zwangsversteigerung), nicht pauschal für jede Grundstücksvermietung.",
  };
}

function korrigiereIgLieferungQuiz(thema) {
  thema.titel = "Innergemeinschaftliche Lieferung: Voraussetzungen der Steuerfreiheit";
  normErgaenzen(thema, "§ 4 Nr. 1 Buchst. b UStG", "§ 6a Abs. 1, 3 UStG");
  thema.kern = {
    ...thema.kern,
    frage: "Ein Unternehmer befördert oder versendet Ware aus Deutschland in einen anderen EU-Mitgliedstaat an einen dort umsatzsteuerlich erfassten Unternehmer. Der Abnehmer erwirbt für sein Unternehmen, der Erwerb unterliegt dort der Erwerbsbesteuerung und er verwendet eine gültige USt-IdNr. des anderen Mitgliedstaats. Wie ist die Lieferung bei erfüllten Nachweispflichten zu behandeln?",
    erklaerung: "Die gültige USt-IdNr. ist nur eine von mehreren materiellen Voraussetzungen. Zusätzlich verlangt § 6a Abs. 1 UStG insbesondere die Warenbewegung in das übrige Gemeinschaftsgebiet, einen begünstigten Abnehmer und die Erwerbsbesteuerung im anderen Mitgliedstaat; die Voraussetzungen sind nach § 6a Abs. 3 nachzuweisen. Für die Steuerbefreiung ist außerdem § 4 Nr. 1 Buchst. b UStG einschließlich der Vorgaben zur Zusammenfassenden Meldung zu beachten.",
  };
}

function korrigiereUstSteuersaetzeKarte(thema) {
  normErgaenzen(thema, "§ 12 Abs. 3 UStG");
  thema.kern = {
    ...thema.kern,
    antwort: "§ 12 UStG kennt den Regelsteuersatz von 19 %, ermäßigte Steuersätze von 7 % für die gesetzlich begünstigten Umsätze und den Nullsteuersatz von 0 % nach § 12 Abs. 3 UStG für die dort begünstigten Photovoltaikumsätze. Der konkrete Steuersatz ist stets über den jeweiligen Tatbestand zu begründen; aus Bruttobeträgen mit 19 % bzw. 7 % wird bei Bedarf mit 19/119 bzw. 7/107 herausgerechnet.",
  };
}

function korrigiereBilanzaenderung(thema) {
  normErgaenzen(thema, "§ 4 Abs. 2 S. 1, 2 EStG");
  if (thema.typ === "karteikarte") {
    thema.kern = {
      ...thema.kern,
      antwort: "Bilanzberichtigung nach § 4 Abs. 2 S. 1 EStG: Korrektur eines objektiv unrichtigen Bilanzansatzes, soweit die zugrunde liegende Steuerfestsetzung noch geändert werden kann. Bilanzänderung nach Satz 2: Wechsel von einem zulässigen Bilanzansatz zu einem anderen zulässigen Ansatz; sie ist nur in engem zeitlichen und sachlichen Zusammenhang mit einer Bilanzberichtigung und nur bis zur Höhe deren Gewinnwirkung zulässig. Eine zusätzliche gesetzliche Zustimmung des Finanzamts verlangt § 4 Abs. 2 S. 2 EStG nicht.",
    };
    return;
  }
  const lernziele = [...(thema.kern?.lernziele || [])].map((x) =>
    /Zustimmungsbedürftigkeit der Änderung/i.test(x)
      ? "die gesetzlichen Voraussetzungen der Bilanzänderung nach § 4 Abs. 2 S. 2 EStG erkennen"
      : x
  );
  thema.kern = {
    ...thema.kern,
    lernziele,
    merksatz: "Berichtigung setzt einen objektiv unrichtigen Bilanzansatz voraus. Eine Bilanzänderung betrifft den Wechsel zwischen zulässigen Ansätzen und ist nur im engen zeitlichen und sachlichen Zusammenhang mit einer Bilanzberichtigung sowie bis zur Höhe deren Gewinnwirkung zulässig; eine zusätzliche Zustimmungspflicht des Finanzamts enthält § 4 Abs. 2 S. 2 EStG nicht.",
  };
}

function korrigiereAbzinsung(thema) {
  thema.kern = {
    ...thema.kern,
    erklaerung: "Handelsrechtlich sind Rückstellungen mit mehr als einem Jahr Restlaufzeit nach § 253 Abs. 2 HGB abzuzinsen: Bei Altersversorgungsverpflichtungen basiert der durchschnittliche Marktzinssatz auf den vergangenen zehn Geschäftsjahren, bei sonstigen Rückstellungen auf sieben Geschäftsjahren; für Altersversorgung und vergleichbare langfristige Verpflichtungen ist die pauschale 15-Jahres-Restlaufzeit zu beachten. Steuerlich gilt für abzuzinsende Rückstellungen grundsätzlich der Zinssatz des § 6 Abs. 1 Nr. 3a Buchst. e EStG. Verbindlichkeiten werden steuerlich seit den nach dem 31.12.2022 endenden Wirtschaftsjahren nicht mehr allgemein abgezinst.",
  };
}

function korrigiereRueckstellungsbewertung(thema) {
  thema.kern = {
    ...thema.kern,
    antwort: "HB: Erfüllungsbetrag mit erwarteten Preis- und Kostensteigerungen; bei mehr als einem Jahr Restlaufzeit Abzinsung nach § 253 Abs. 2 HGB. Für Altersversorgungsverpflichtungen wird der durchschnittliche Marktzinssatz aus zehn, für sonstige Rückstellungen aus sieben Geschäftsjahren ermittelt; bei Altersversorgung und vergleichbaren langfristigen Verpflichtungen ist die pauschale 15-Jahres-Restlaufzeit zu beachten. StB: Bewertung nach § 6 Abs. 1 Nr. 3a EStG, insbesondere Stichtagsverhältnisse, Ansammlung und grundsätzlich 5,5-%-Abzinsung nach Buchst. e; steuerliche Sonderregeln und Ausnahmen gesondert prüfen.",
  };
  normErgaenzen(thema, "§ 253 Abs. 2 HGB", "§ 6 Abs. 1 Nr. 3a EStG");
}

function korrigiereLatenteSteuern(thema) {
  thema.kern = {
    ...thema.kern,
    erklaerung: "§ 274 HGB erfasst temporäre Differenzen, die sich in späteren Geschäftsjahren voraussichtlich abbauen: Eine daraus insgesamt entstehende Steuerbelastung ist grundsätzlich passiv anzusetzen, eine Steuerentlastung kann aktiv angesetzt werden. Zusätzlich sind steuerliche Verlustvorträge bei aktiven latenten Steuern insoweit zu berücksichtigen, wie innerhalb der nächsten fünf Jahre eine Verlustverrechnung zu erwarten ist. Größenabhängige Befreiungen, insbesondere § 274a HGB, sind gesondert zu prüfen.",
  };
  normErgaenzen(thema, "§ 274 Abs. 1 HGB", "§ 274a HGB");
}

function korrigiereRealteilung(thema) {
  normErgaenzen(thema, "§ 16 Abs. 3 S. 2–5 EStG", "§ 16 Abs. 5 EStG", "§ 6 Abs. 5 S. 7 EStG");
  if (thema.typ === "karteikarte") {
    thema.kern = {
      ...thema.kern,
      antwort: "Realteilung gibt es als echte und als unechte Realteilung. Echte Realteilung: Die Mitunternehmerschaft wird beendet und Betriebsvermögen auf die Realteiler verteilt. Unechte Realteilung: Ein Mitunternehmer scheidet gegen Übertragung von Wirtschaftsgütern aus, die bei ihm zumindest teilweise Betriebsvermögen bleiben, während die Mitunternehmerschaft von den übrigen Gesellschaftern fortgeführt wird. Eine reine Barabfindung ist keine Realteilung; ebenso greift die Buchwertregel nicht, soweit übertragene Einzelwirtschaftsgüter vollständig ins Privatvermögen gelangen. Die Voraussetzungen des § 16 Abs. 3 S. 2–5 EStG sind gesondert zu prüfen. Für Übertragungen nach dem 18.10.2024 ist insbesondere Satz 5 i. V. m. § 6 Abs. 5 S. 7 EStG zu beachten; bei Teilbetriebs-Realteilungen mit übertragenen Körperschaftsanteilen kann zusätzlich § 16 Abs. 5 EStG mit siebenjähriger Nachversteuerungsregel eingreifen.",
    };
    return;
  }
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 16 Abs. 3 S. 2 EStG erfasst nach BFH und BMF sowohl die echte als auch die unechte Realteilung.",
      "Echte Realteilung liegt bei Beendigung der Mitunternehmerschaft und Verteilung des Betriebsvermögens vor. Unechte Realteilung kann vorliegen, wenn ein Mitunternehmer gegen Übertragung von Wirtschaftsgütern ausscheidet, die bei ihm zumindest teilweise Betriebsvermögen bleiben, während die übrigen Gesellschafter die Mitunternehmerschaft fortführen.",
    ],
    lernziele: [
      "echte und unechte Realteilung unterscheiden",
      "reine Barabfindung und Überführung vollständig ins Privatvermögen von der Realteilung abgrenzen",
      "die Buchwertfortführung nach § 16 Abs. 3 S. 2 EStG bei erfüllten Voraussetzungen anwenden",
      "Sperrfrist und Körperschaftsklauseln des § 16 Abs. 3 S. 3–5 EStG prüfen",
      "bei Teilbetriebs-Realteilungen mit Körperschaftsanteilen § 16 Abs. 5 EStG prüfen",
      "Spitzenausgleich beziehungsweise Gegenleistungen gesondert würdigen",
    ],
    pruefschritte: [
      "Zuerst klären, ob eine echte Realteilung (Beendigung der Mitunternehmerschaft) oder eine unechte Realteilung (Ausscheiden eines Mitunternehmers bei Fortbestand der Mitunternehmerschaft) vorliegt.",
      "Prüfen, ob die übertragenen Wirtschaftsgüter beim Realteiler zumindest teilweise in einem Betriebsvermögen fortgeführt werden.",
      "Bei erfüllten Voraussetzungen die zwingende Buchwertfortführung nach § 16 Abs. 3 S. 2 EStG anwenden.",
      "Keine Realteilung annehmen, wenn der Ausscheidende ausschließlich Geld erhält oder übertragene Einzelwirtschaftsgüter vollständig in sein Privatvermögen überführt werden.",
      "Sperrfrist nach § 16 Abs. 3 S. 3 EStG und Körperschaftsklausel nach Satz 4 prüfen; für Übertragungen nach dem 18.10.2024 zusätzlich Satz 5 i. V. m. § 6 Abs. 5 S. 7 EStG beachten.",
      "Bei Teilbetriebs-Realteilungen mit übertragenen Körperschaftsanteilen zusätzlich § 16 Abs. 5 EStG und dessen siebenjährige Nachversteuerungsregel prüfen.",
      "Spitzenausgleich oder sonstige Gegenleistungen gesondert auf entgeltliche Bestandteile prüfen.",
    ],
    merksatz: "Realteilung setzt nicht zwingend die Auflösung der Mitunternehmerschaft voraus: Neben der echten gibt es die unechte Realteilung beim Ausscheiden eines Mitunternehmers gegen betrieblich fortgeführte Wirtschaftsgüter.",
  };
}

function korrigierePwb(thema) {
  thema.kern = {
    ...thema.kern,
    ausdruck: "PWB = risikobehafteter Nettobestand × nachvollziehbar geschätzter Risikosatz",
    erklaerung: "Die Bemessungsgrundlage ist grundsätzlich der risikobehaftete Forderungsbestand nach Aussonderung sicherer und bereits einzelwertberichtigter Forderungen; umsatzsteuerliche Bestandteile sind risikogerecht zu behandeln. Der Risikosatz ist anhand objektiver Umstände am Bilanzstichtag und betrieblicher Erfahrungswerte nachvollziehbar zu schätzen. In der Praxis wird zwar eine verwaltungsseitige Nichtaufgriffsgrenze bis 1 % des maßgeblichen Nettoforderungsbestands zitiert; sie ist aber kein gesetzlicher Pauschalsatz, kein Freibetrag und schließt einen höheren nachgewiesenen Risikosatz nicht aus. Ein pauschales Herausrechnen mit 1,19 ist nur passend, soweit der Forderungsbestand tatsächlich einheitlich diesem Umsatzsteuersatz unterliegt.",
  };
}

function korrigiereAchtBTechnik(thema) {
  normErgaenzen(thema, "§ 8b Abs. 1–5 KStG");
  thema.kern = {
    ...thema.kern,
    antwort: "Zuerst den Vorgang vollständig bilanzieren. Bei Dividenden anschließend § 8b Abs. 4 KStG einschließlich der Erwerbsfiktion des Satzes 6 prüfen: Nur wenn die Freistellung nach § 8b Abs. 1 greift, wird der Ertrag außerbilanziell abgezogen und die 5-%-Pauschale nach Abs. 5 hinzugerechnet. Veräußerungsgewinne fallen im Grundfall unabhängig von einer 10-%-Mindestquote unter § 8b Abs. 2; die 5-%-Pauschale folgt dort aus Abs. 3. Gewinnminderungen nach § 8b Abs. 3 S. 3 sind außerbilanziell hinzuzurechnen.",
  };
}

function korrigiereTeileinkuenfte(thema) {
  thema.kern = {
    ...thema.kern,
    erklaerung: "Bei natürlichen Personen mit begünstigten Beteiligungserträgen im Betriebsvermögen werden grundsätzlich 40 % des Ertrags steuerfrei gestellt und 40 % der damit zusammenhängenden Ausgaben nicht abgezogen. Bei Körperschaften ist § 8b KStG gesondert zu prüfen: Dividenden können wegen § 8b Abs. 4 KStG insbesondere bei Streubesitz von der Freistellung ausgeschlossen sein; für Veräußerungsgewinne nach Abs. 2 gilt keine 10-%-Mindestquote. Die jeweilige 5-%-Pauschale greift nur, soweit die entsprechende Freistellung anwendbar ist.",
  };
  normErgaenzen(thema, "§ 8b Abs. 1–5 KStG");
}

function korrigiereAo164Vdn(thema) {
  normErgaenzen(thema, "§ 164 Abs. 4 AO");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Der Vorbehalt der Nachprüfung entfällt grundsätzlich mit Ablauf der für die Steuerfestsetzung maßgeblichen Festsetzungsfrist (§ 164 Abs. 4 S. 1 AO).",
      "Für die Frage, wann der Vorbehalt entfällt, schließt § 164 Abs. 4 S. 2 AO nur § 169 Abs. 2 S. 2, § 170 Abs. 6 sowie § 171 Abs. 7, 8 und 10 AO aus. Andere im konkreten Fall einschlägige Anlauf- oder Ablaufhemmungen können den Fristablauf und damit den Fortbestand des Vorbehalts beeinflussen.",
    ],
    lernziele: [
      "Entstehung und Fortbestand des Vorbehalts der Nachprüfung unterscheiden",
      "Änderungen nach § 164 Abs. 2 AO nur solange der Vorbehalt wirksam ist vornehmen",
      "§ 164 Abs. 4 S. 2 AO als Ausschlussliste lesen",
      "nicht nur § 171 Abs. 3, 3a und 4 AO, sondern jede nach § 164 Abs. 4 S. 2 nicht ausgeschlossene einschlägige Fristregel prüfen",
    ],
    pruefschritte: [
      "Vorbehalt im Bescheid oder kraft Gesetzes feststellen.",
      "Prüfen, ob der Vorbehalt ausdrücklich aufgehoben wurde.",
      "Andernfalls den Ablauf der Festsetzungsfrist bestimmen.",
      "Dabei § 164 Abs. 4 S. 2 AO beachten: § 169 Abs. 2 S. 2, § 170 Abs. 6 sowie § 171 Abs. 7, 8 und 10 AO verlängern den Vorbehalt nicht.",
      "Alle übrigen im Fall einschlägigen Fristvorschriften berücksichtigen; insbesondere darf die Prüfung nicht pauschal auf § 171 Abs. 3, 3a und 4 AO beschränkt werden.",
      "Nur bei noch wirksamem Vorbehalt nach § 164 Abs. 2 AO ändern.",
    ],
    merksatz: "§ 164 Abs. 4 S. 2 AO enthält eine Ausschlussliste. Deshalb nicht nur drei ausgewählte Ablaufhemmungen prüfen, sondern alle einschlägigen Fristregeln – außer den dort ausdrücklich ausgeschlossenen.",
  };
}

function korrigiereAo129(thema) {
  normErgaenzen(thema, "§ 129 S. 1–3 AO", "§ 171 Abs. 2 S. 1 AO");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 129 AO erfasst Schreib-, Rechen- und ähnliche offenbare mechanische Unrichtigkeiten beim Erlass eines Verwaltungsakts; ein Rechts- oder Tatsachenwürdigungsfehler darf nicht ernstlich in Betracht kommen.",
      "Satz 1 eröffnet grundsätzlich Ermessen. Satz 2 begründet nur bei berechtigtem Interesse des Beteiligten einen Anspruch auf Berichtigung; er ist kein pauschaler Berichtigungszwang in jedem §-129-Fall.",
    ],
    lernziele: [
      "mechanische offenbare Unrichtigkeit von Rechts- und Denkfehlern abgrenzen",
      "Eigenfehler und übernommene mechanische Fehler einordnen",
      "Ermessen nach § 129 S. 1 und Anspruch bei berechtigtem Interesse nach S. 2 unterscheiden",
      "Festsetzungsverjährung und § 171 Abs. 2 S. 1 AO trotz des Wortes „jederzeit“ beachten",
    ],
    pruefschritte: [
      "Schreib-, Rechen- oder vergleichbaren mechanischen Fehler feststellen.",
      "Prüfen, ob ein Rechts- oder Tatsachenwürdigungsfehler ernstlich ausgeschlossen ist.",
      "Offenbarkeit anhand der maßgeblichen Unterlagen und des Bearbeitungsvorgangs prüfen.",
      "Bei Übernahme eines Fehlers des Steuerpflichtigen prüfen, ob die Finanzbehörde ihn als eigenen mechanischen Fehler übernommen hat.",
      "Rechtsfolge trennen: § 129 S. 1 grundsätzlich Ermessen; bei berechtigtem Interesse des Beteiligten besteht nach S. 2 ein Berichtigungsanspruch.",
      "Bei Steuerfestsetzungen Festsetzungsfrist und Ablaufhemmung des § 171 Abs. 2 S. 1 AO prüfen.",
    ],
    merksatz: "§ 129 S. 2 bedeutet nicht „immer zwingend“: Der Anspruch des Beteiligten setzt ein berechtigtes Interesse voraus; im Übrigen gilt Satz 1.",
  };
}

function korrigiereAo173(thema) {
  normErgaenzen(thema, "§ 173 Abs. 1 Nr. 1 und 2 AO", "AEAO zu § 173 Nr. 4");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 173 Abs. 1 Nr. 1 AO verlangt nach dem Gesetz neue Tatsachen oder Beweismittel, die zu einer höheren Steuer führen. Ein Ermittlungsfehler des Finanzamts ist kein zusätzliches geschriebenes Tatbestandsmerkmal.",
      "Nach dem Grundsatz von Treu und Glauben kann eine Änderung zuungunsten des Steuerpflichtigen ausnahmsweise ausgeschlossen sein, wenn der Steuerpflichtige seine Mitwirkungspflichten erfüllt hat und das nachträgliche Bekanntwerden auf einer Verletzung der Ermittlungspflicht des Finanzamts beruht. Bei beiderseitigen Pflichtverletzungen ist abzuwägen.",
      "§ 173 Abs. 1 Nr. 2 AO enthält dagegen ausdrücklich die Voraussetzung, dass den Steuerpflichtigen am nachträglichen Bekanntwerden kein grobes Verschulden trifft; die Zusammenhangsregel des Satzes 2 ist gesondert zu beachten.",
    ],
    lernziele: [
      "Tatsache oder Beweismittel von bloßer rechtlicher Würdigung unterscheiden",
      "nachträgliches Bekanntwerden und Rechtserheblichkeit prüfen",
      "Nr. 1 und Nr. 2 nach Änderungsrichtung trennen",
      "bei Nr. 1 einen möglichen Treu-und-Glauben-Ausschluss wegen Ermittlungsfehlern nur nach Mitwirkungs- und Ermittlungspflichten prüfen",
      "bei Nr. 2 grobes Verschulden und die Zusammenhangsregel des § 173 Abs. 1 Nr. 2 S. 2 AO prüfen",
      "Sperre des § 173 Abs. 2 AO beachten",
    ],
    pruefschritte: [
      "Tatsache oder Beweismittel identifizieren; bloße rechtliche Neubewertung reicht nicht.",
      "Prüfen, ob die Tatsache bereits bei Erlass des zu ändernden Bescheids vorhanden war; ein späteres rückwirkendes Ereignis gehört grundsätzlich zu § 175 Abs. 1 S. 1 Nr. 2 AO.",
      "Nachträgliches Bekanntwerden und Rechtserheblichkeit feststellen.",
      "Richtung bestimmen: Nr. 1 höhere Steuer, Nr. 2 niedrigere Steuer.",
      "Bei Nr. 1: gesetzliche Voraussetzungen prüfen; danach gesondert Treu und Glauben bei etwaiger Verletzung der Ermittlungspflicht des Finanzamts und erfüllter Mitwirkungspflicht des Steuerpflichtigen würdigen.",
      "Bei Nr. 2: kein grobes Verschulden des Steuerpflichtigen am nachträglichen Bekanntwerden; Zusammenhangsregel in Satz 2 prüfen.",
      "§ 173 Abs. 2 AO und Festsetzungsfrist abschließend prüfen.",
    ],
    merksatz: "Bei § 173 Nr. 1 ist „kein Ermittlungsfehler des Finanzamts“ kein eigener Gesetzestatbestand. Ein Ermittlungsfehler wirkt nur über Treu und Glauben und nur nach Würdigung der beiderseitigen Pflichten.",
  };
}

function korrigiereFeststellungsbescheid181(thema) {
  normErgaenzen(thema, "§ 181 Abs. 5 AO", "§ 182 Abs. 1 AO");
  thema.titel = "Feststellungsbescheid: Bindungswirkung und Sonderfall § 181 Abs. 5 AO";
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Ein wirksamer Feststellungsbescheid entfaltet nach § 182 Abs. 1 AO Bindungswirkung für Folgebescheide, soweit seine Feststellungen dort von Bedeutung sind.",
      "§ 181 Abs. 5 AO betrifft einen Sonderfall: Ist die eigene Feststellungsfrist bereits abgelaufen, kann eine gesonderte Feststellung trotzdem noch ergehen, soweit sie für eine Steuerfestsetzung mit noch offener Festsetzungsfrist von Bedeutung ist; § 171 Abs. 10 AO bleibt bei dieser Prüfung außer Betracht.",
      "Nur für diesen verspäteten Feststellungsbescheid verlangt § 181 Abs. 5 S. 2 AO den besonderen Hinweis. Ein fehlender Hinweis macht einen Feststellungsbescheid nicht allgemein „unwirksam“ oder nichtig.",
    ],
    lernziele: [
      "allgemeine Bindungswirkung des § 182 Abs. 1 AO von § 181 Abs. 5 AO trennen",
      "eigene Feststellungsfrist zuerst prüfen",
      "§ 181 Abs. 5 nur bei bereits abgelaufener Feststellungsfrist anwenden",
      "offene Festsetzungsfrist des Folgebescheids ohne § 171 Abs. 10 AO prüfen",
      "besonderen Hinweis nach § 181 Abs. 5 S. 2 AO nicht als allgemeine Wirksamkeitsvoraussetzung behandeln",
    ],
    pruefschritte: [
      "Wirksamen Feststellungsbescheid und seinen Regelungsumfang bestimmen.",
      "Bindungswirkung nach § 182 Abs. 1 AO für den konkreten Folgebescheid prüfen.",
      "Nur wenn die Feststellungsfrist bereits abgelaufen ist, § 181 Abs. 5 AO prüfen.",
      "Dann feststellen, ob die Feststellung für eine Steuerfestsetzung mit noch offener Festsetzungsfrist von Bedeutung ist; § 171 Abs. 10 AO bleibt dabei außer Betracht.",
      "Beim nach § 181 Abs. 5 erlassenen Feststellungsbescheid den Hinweis nach Satz 2 beachten.",
    ],
    merksatz: "§ 181 Abs. 5 ist keine allgemeine „Wirksamkeitsformel“. Der Wirkhinweis gehört zum Sonderfall der Feststellung nach Ablauf der eigenen Feststellungsfrist; die Bindungswirkung folgt grundsätzlich aus § 182 Abs. 1 AO.",
  };
}


function korrigiereSchlichteAenderung172(thema) {
  normErgaenzen(
    thema,
    "§ 172 Abs. 1 S. 1 Nr. 2 Buchst. a AO",
    "AEAO zu § 172 Nr. 2",
    "BFH 20.12.2006 – X R 30/05",
    "BFH 22.05.2019 – XI R 17/18"
  );
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Der Antrag auf schlichte Änderung nach § 172 Abs. 1 S. 1 Nr. 2 Buchst. a AO ist kein Einspruch und kein förmlicher Rechtsbehelf. Er ist ein formfreier Änderungsantrag mit gegenüber dem Einspruch engerer Reichweite.",
      "Zugunsten des Steuerpflichtigen muss der Antrag grundsätzlich vor Ablauf der Einspruchsfrist gestellt werden; nach einer Einspruchsentscheidung kommt nach § 172 Abs. 1 S. 3 AO ein Antrag bis zum Ablauf der Klagefrist in Betracht.",
      "Der Änderungsantrag muss innerhalb der maßgeblichen Frist eine genau bestimmte Änderung bezogen auf einen konkreten Lebenssachverhalt verlangen beziehungsweise den sachlichen Gehalt des Änderungsbegehrens zumindest in groben Zügen erkennen lassen. Eine Bezifferung der steuerlichen Auswirkung ist weder allgemein erforderlich noch für sich allein ausreichend.",
    ],
    lernziele: [
      "schlichten Änderungsantrag und Einspruch rechtlich trennen",
      "Formfreiheit des Änderungsantrags kennen",
      "Frist für den Änderungsantrag zugunsten des Steuerpflichtigen richtig bestimmen",
      "Konkretisierung auf einen konkreten Lebenssachverhalt statt bloßer Betragsangabe prüfen",
      "engere Reichweite, fehlende Gesamtaufrollung und fehlende AdV-Wirkung gegenüber dem Einspruch beachten",
      "§ 172 Abs. 1 Nr. 2 Buchst. c AO als eigenständigen Korrekturtatbestand getrennt prüfen",
    ],
    pruefschritte: [
      "Prüfen, ob eine Erklärung als Einspruch oder als Antrag auf schlichte Änderung auszulegen ist; bei Unklarheit Reichweite und Rechtsschutzinteresse würdigen.",
      "Beim schlichten Änderungsantrag Formfreiheit beachten; auch mündliche oder telefonische Anträge sind möglich und aktenkundig zu machen.",
      "Für eine Änderung zugunsten des Steuerpflichtigen Antragstellung innerhalb der Einspruchsfrist prüfen; nach Einspruchsentscheidung die Sonderregel des § 172 Abs. 1 S. 3 AO und die Klagefrist beachten.",
      "Innerhalb der maßgeblichen Frist den konkreten Lebenssachverhalt beziehungsweise den sachlichen Gehalt des Änderungsbegehrens feststellen. Eine bloße Herabsetzung auf einen Betrag ohne Sachverhaltsbezug genügt nicht; eine exakte Bezifferung ist umgekehrt nicht generell erforderlich.",
      "Änderung nur innerhalb der rechtzeitig konkretisierten Reichweite des Antrags prüfen; keine Gesamtaufrollung wie im Einspruchsverfahren.",
      "Aussetzung der Vollziehung nicht aus dem Änderungsantrag selbst herleiten.",
    ],
    merksatz: "Schlichte Änderung ≠ Einspruch: formfreier, punktueller Änderungsantrag. Rechtzeitig muss der konkrete sachliche Änderungswunsch erkennbar sein – nicht zwingend ein exakt bezifferter Steuerbetrag.",
  };
}

function korrigiereAo177(thema) {
  normErgaenzen(thema, "§ 177 Abs. 1–4 AO");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 177 AO ist keine selbständige Änderungsnorm. Er setzt voraus, dass ein Steuerbescheid aus einem anderen Grund aufgehoben oder geändert werden darf.",
      "Der Begriff des materiellen Fehlers ist in § 177 Abs. 3 AO legaldefiniert: Er umfasst jeden Fehler einschließlich offenbarer Unrichtigkeiten nach § 129 AO, der zu einer Steuer führt, die von der kraft Gesetzes entstandenen Steuer abweicht. Dass der Fehler selbst nicht mehr eigenständig korrigierbar ist, gehört nicht zur Definition.",
    ],
    lernziele: [
      "anderweitige Änderungsbefugnis als Türöffner für § 177 AO erkennen",
      "materiellen Fehler nach der Legaldefinition des § 177 Abs. 3 AO bestimmen",
      "nicht voraussetzen, dass der materielle Fehler selbst unkorrigierbar sein muss",
      "Berichtigungsrahmen nach Abs. 1 oder 2 bestimmen",
      "§ 176 sowie §§ 164 Abs. 2 und 165 Abs. 2 AO beachten",
    ],
    pruefschritte: [
      "Zuerst eine anderweitige Aufhebungs- oder Änderungsbefugnis für den Steuerbescheid feststellen.",
      "Änderungsrichtung bestimmen und daraus den Rahmen nach § 177 Abs. 1 oder 2 AO ableiten.",
      "Materielle Fehler nach § 177 Abs. 3 AO identifizieren: jede Abweichung der festgesetzten von der kraft Gesetzes entstandenen Steuer, einschließlich §-129-Fehlern.",
      "Die anderen materiellen Fehler innerhalb des eröffneten Änderungsrahmens zugunsten und zuungunsten berücksichtigen.",
      "§ 164 Abs. 2, § 165 Abs. 2 und § 176 AO bleiben unberührt.",
    ],
    merksatz: "§ 177 braucht eine andere Änderungsöffnung. „Materieller Fehler“ bedeutet aber nicht „nicht mehr selbständig korrigierbarer Fehler“, sondern jede gesetzeswidrige Abweichung i.S.d. Abs. 3.",
  };
}

function korrigiereWiedereinsetzung(thema) {
  normErgaenzen(thema, "§ 110 AO", "§ 56 FGO");
  const basis = {
    ...thema.kern,
    einordnung: [
      "Wiedereinsetzung setzt die unverschuldete Versäumung einer gesetzlichen Frist voraus. Für das außergerichtliche Besteuerungs- und Einspruchsverfahren gilt § 110 AO; für Fristen im finanzgerichtlichen Verfahren gilt § 56 FGO.",
      "Die Antragsfristen unterscheiden sich: § 110 Abs. 2 AO grundsätzlich ein Monat nach Wegfall des Hindernisses; § 56 Abs. 2 FGO grundsätzlich zwei Wochen. Nur bei versäumter Begründungsfrist für Revision oder Nichtzulassungsbeschwerde beträgt die FGO-Frist einen Monat.",
    ],
    merksatz: "AO und FGO nicht vermischen: § 110 AO = grundsätzlich ein Monat; § 56 FGO = grundsätzlich zwei Wochen, mit der gesetzlichen Monats-Ausnahme für bestimmte Begründungsfristen.",
  };
  if (thema.id === "ao-modul-ao-371") {
    basis.lernziele = [
      "gesetzliche von behördlichen Fristen unterscheiden",
      "§ 110 AO für außergerichtliche Fristen und § 56 FGO für gerichtliche Fristen auseinanderhalten",
      "fehlendes Verschulden prüfen; leichte Fahrlässigkeit schadet grundsätzlich",
      "Vertreterverschulden zurechnen",
      "unterschiedliche Antragsfristen von AO und FGO sicher anwenden",
    ];
    basis.pruefschritte = [
      "Versäumte Frist bestimmen und prüfen, ob sie gesetzlich ist.",
      "Verfahrensordnung zuordnen: außergerichtlich § 110 AO, finanzgerichtlich § 56 FGO.",
      "Fehlendes eigenes und zurechenbares Vertreterverschulden prüfen.",
      "Antragsfrist ab Wegfall des Hindernisses bestimmen: AO ein Monat; FGO grundsätzlich zwei Wochen.",
      "Versäumte Handlung innerhalb der jeweiligen Antragsfrist nachholen und erforderliche Tatsachen glaubhaft machen.",
      "Jahresausschluss nach § 110 Abs. 3 AO bzw. § 56 Abs. 3 FGO prüfen.",
    ];
  } else {
    basis.lernziele = [
      "Monatsfrist des § 110 Abs. 2 AO nach Wegfall des Hindernisses berechnen",
      "Tatsachen zur Begründung glaubhaft machen",
      "versäumte Handlung innerhalb der Antragsfrist nachholen",
      "Wiedereinsetzung ohne ausdrücklichen Antrag bei rechtzeitiger Nachholung erkennen",
      "für gerichtliche FGO-Fristen stattdessen § 56 FGO mit grundsätzlich zwei Wochen anwenden",
    ];
    basis.pruefschritte = [
      "Für eine AO-Frist: Wegfall des Hindernisses feststellen und Monatsfrist des § 110 Abs. 2 AO berechnen.",
      "Tatsachen zur Begründung des fehlenden Verschuldens bei Antragstellung oder im Verfahren glaubhaft machen.",
      "Versäumte Handlung innerhalb der Monatsfrist nachholen.",
      "Ist die Handlung rechtzeitig nachgeholt, kann Wiedereinsetzung nach § 110 Abs. 2 S. 4 AO auch ohne ausdrücklichen Antrag gewährt werden.",
      "Bei einer gerichtlichen Frist nicht § 110 AO übertragen, sondern § 56 FGO anwenden; dort gilt grundsätzlich eine Zweiwochenfrist.",
      "Jahresgrenze des § 110 Abs. 3 AO beachten.",
    ];
  }
  thema.kern = basis;
}


function korrigiereLeichtfertigkeit378(thema) {
  normErgaenzen(thema, "§ 378 Abs. 1–3 AO", "§ 370 Abs. 1, Abs. 4–7 AO");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 378 AO ist keine bloße Verschuldensetikette. Ordnungswidrig handelt nur, wer als Steuerpflichtiger oder bei Wahrnehmung der Angelegenheiten eines Steuerpflichtigen eine der in § 370 Abs. 1 AO bezeichneten Taten leichtfertig begeht; § 370 Abs. 4 bis 7 gilt entsprechend.",
      "Leichtfertigkeit ist eine besonders schwere Form fahrlässigen Verhaltens und muss eigenständig festgestellt werden. Aus dem Umstand, dass Vorsatz für § 370 AO nicht nachgewiesen werden kann, folgt nicht automatisch § 378 AO.",
      "§ 378 Abs. 3 AO enthält eine eigene Berichtigungsregel, die von der Selbstanzeige nach § 371 AO zu unterscheiden ist.",
    ],
    lernziele: [
      "Vorsatz nach § 370 AO von Leichtfertigkeit nach § 378 AO trennen",
      "für § 378 den objektiven Tatbestand einer §-370-Abs.-1-Tat einschließlich Steuerverkürzung oder ungerechtfertigtem Steuervorteil prüfen",
      "Leichtfertigkeit als eigenständig festzustellenden gesteigerten Fahrlässigkeitsvorwurf prüfen",
      "nicht beweisbaren Vorsatz nicht automatisch in Leichtfertigkeit umdeuten",
      "Berichtigungsregel des § 378 Abs. 3 von § 371 AO abgrenzen",
    ],
    pruefschritte: [
      "Tathandlung nach § 370 Abs. 1 Nr. 1 bis 3 AO und den steuerlichen Verkürzungs-/Vorteilserfolg prüfen; § 370 Abs. 4 bis 7 gilt entsprechend.",
      "Feststellen, ob der Täter zum Personenkreis des § 378 Abs. 1 AO gehört.",
      "Subjektiv Leichtfertigkeit konkret feststellen; bloße einfache Fahrlässigkeit genügt nicht.",
      "Liegt Vorsatz vor, ist § 370 AO zu prüfen; fehlt der Vorsatznachweis, § 378 AO nicht automatisch bejahen.",
      "Rechtsfolge als Ordnungswidrigkeit und gegebenenfalls § 378 Abs. 3 AO zur Berichtigung/Nachholung gesondert prüfen.",
    ],
    merksatz: "§ 378 AO ist nicht einfach „§ 370 ohne Vorsatz“: objektiver §-370-Tatbestand plus eigenständig festzustellende Leichtfertigkeit; bloße Fahrlässigkeit oder nur nicht beweisbarer Vorsatz reichen nicht.",
  };
}

function korrigiereSelbstanzeige371(thema) {
  normErgaenzen(thema, "§ 371 Abs. 1–3 AO", "§ 398a AO");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 371 Abs. 1 AO verlangt eine vollständige Berichtigung für alle Steuerstraftaten einer Steuerart im gesetzlich geforderten Umfang. Die Angaben müssen alle unverjährten Steuerstraftaten erfassen, mindestens aber alle Steuerstraftaten dieser Steuerart innerhalb der letzten zehn Kalenderjahre.",
      "Die Sperrgründe des § 371 Abs. 2 AO sind tat- und umfangsbezogen zu prüfen. Übersteigt die verkürzte Steuer oder der erlangte Steuervorteil 25.000 € je Tat, tritt nach § 371 Abs. 2 S. 1 Nr. 3 keine Straffreiheit nach § 371 ein; unter den Voraussetzungen des § 398a AO kann jedoch von Strafverfolgung abgesehen werden.",
      "Für Umsatzsteuer- und Lohnsteuer-Voranmeldungen enthält § 371 Abs. 2a AO eine Sonderregel; Jahresanmeldungen fallen nicht unter diese Erleichterung.",
    ],
    lernziele: [
      "Vollständigkeitsgebot einschließlich Zehn-Kalenderjahres-Mindestumfang anwenden",
      "Sperrgründe des § 371 Abs. 2 AO einzeln und tatbezogen prüfen",
      "25.000-€-Grenze des § 371 Abs. 2 S. 1 Nr. 3 AO von § 398a AO unterscheiden",
      "Sonderregel des § 371 Abs. 2a AO für Umsatzsteuer- und Lohnsteuer-Voranmeldungen erkennen",
      "Nachentrichtungsvoraussetzungen des § 371 Abs. 3 AO prüfen",
    ],
    pruefschritte: [
      "Zunächst vollständige Berichtigung, Ergänzung oder Nachholung für die betroffene Steuerart sicherstellen.",
      "Zeitraum bestimmen: alle unverjährten Steuerstraftaten, mindestens aber alle Steuerstraftaten der Steuerart innerhalb der letzten zehn Kalenderjahre.",
      "Sperrgründe des § 371 Abs. 2 AO je Tat prüfen, insbesondere Prüfungsanordnung/Ermittlungsmaßnahmen, Tatentdeckung, Betrag über 25.000 € je Tat und besonders schweren Fall.",
      "Bei Umsatzsteuer- oder Lohnsteuer-Voranmeldungen die Sonderregel des § 371 Abs. 2a AO gesondert prüfen.",
      "Soweit § 371 Abs. 3 AO eingreift, hinterzogene Steuern und die dort genannten Zinsen innerhalb der bestimmten angemessenen Frist entrichten.",
      "Bei Sperre wegen § 371 Abs. 2 S. 1 Nr. 3 oder 4 AO prüfen, ob § 398a AO ein Absehen von Strafverfolgung ermöglicht.",
    ],
    merksatz: "Selbstanzeige: vollständig je Steuerart – alle unverjährten Taten, mindestens die letzten zehn Kalenderjahre. Die 25.000-€-Grenze sperrt § 371, kann aber § 398a eröffnen.",
  };
}

function korrigiereHaftung69(thema) {
  normErgaenzen(thema, "§ 69 AO", "§§ 34, 35 AO");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 69 AO setzt voraus, dass eine in §§ 34 oder 35 AO bezeichnete Person eine ihr auferlegte steuerliche Pflicht vorsätzlich oder grob fahrlässig verletzt und dadurch ein dort genannter Steuerausfall oder eine unberechtigte Vergütung/Erstattung verursacht wird.",
      "Die Organstellung als GmbH-Geschäftsführer ersetzt die Verschuldensprüfung nicht. Grobe Fahrlässigkeit ist nach den Umständen des Einzelfalls zu prüfen; für einzelne Pflichtverletzungen, etwa die Nichtabführung einbehaltener Lohnsteuer, bestehen allerdings strenge Rechtsprechungsgrundsätze.",
    ],
    lernziele: [
      "haftenden Personenkreis nach §§ 34, 35 AO bestimmen",
      "konkrete steuerliche Pflicht und deren Verletzung feststellen",
      "Vorsatz oder grobe Fahrlässigkeit einzelfallbezogen prüfen",
      "Kausalität zwischen Pflichtverletzung und Steuerausfall bestimmen",
      "bei Liquiditätsmangel anteilige Tilgung und Sonderregeln insbesondere zur Lohnsteuer beachten",
      "Haftungsbescheid und Ermessen nach § 191 AO anschließend prüfen",
    ],
    pruefschritte: [
      "Person nach §§ 34 oder 35 AO feststellen.",
      "Anspruch aus dem Steuerschuldverhältnis und konkrete Pflicht des Vertreters bestimmen.",
      "Pflichtverletzung feststellen.",
      "Vorsatz oder grobe Fahrlässigkeit anhand des konkreten Verhaltens prüfen; keine automatische Haftung allein wegen Geschäftsführerstellung.",
      "Kausalen Ausfall bestimmen; bei unzureichender Liquidität grundsätzlich Grundsatz der anteiligen Tilgung prüfen, Sonderregeln beachten.",
      "Haftungsumfang einschließlich gesetzlicher Nebenfolgen und anschließend Haftungsbescheid nach § 191 AO prüfen.",
    ],
    merksatz: "§ 69 AO ist keine Geschäftsführer-Gefährdungshaftung: Pflichtverletzung, Vorsatz/grobe Fahrlässigkeit und Kausalität müssen konkret festgestellt werden.",
  };
}

function korrigiereHaftung71(thema) {
  normErgaenzen(thema, "§ 71 AO", "§ 370 AO", "§ 374 AO");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 71 AO knüpft an die Begehung oder Teilnahme an einer Steuerhinterziehung (§ 370 AO) oder Steuerhehlerei (§ 374 AO) an und erfasst die verkürzten Steuern, zu Unrecht gewährten Steuervorteile sowie die gesetzlich genannten Zinsen.",
      "Ein „Handeln zum fremden Vorteil“ ist kein eigenständiges Tatbestandsmerkmal des § 71 AO. Praktisch ist aber der Haftungsbegriff zu beachten: Für dieselbe Forderung sind Steuerschuldnerschaft und Haftung grundsätzlich zu trennen; typische §-71-Fälle betreffen deshalb die Hinterziehung einer fremden Steuerschuld, etwa durch Geschäftsführer, Berater oder Buchhalter.",
    ],
    lernziele: [
      "Täterschaft oder Teilnahme an § 370 bzw. § 374 AO feststellen",
      "bloße leichtfertige Steuerverkürzung nach § 378 AO von § 71 AO abgrenzen",
      "„fremder Vorteil“ nicht als zusätzliches Gesetzesmerkmal behandeln",
      "verkürzte Steuer, Steuervorteil und erfasste Zinsen als Haftungsumfang bestimmen",
      "Verhältnis zur eigenen Steuerschuld und zu weiteren Haftungsnormen prüfen",
    ],
    pruefschritte: [
      "Steuerhinterziehung oder Steuerhehlerei einschließlich vorsätzlicher Tatbeteiligung feststellen.",
      "Prüfen, ob die betreffende Forderung eine fremde Steuerschuld ist beziehungsweise ob Steuerschuldnerschaft und Haftung für denselben Betrag auseinanderzuhalten sind.",
      "Haftungsumfang nach § 71 AO bestimmen: verkürzte Steuern, zu Unrecht gewährte Steuervorteile und die dort genannten Zinsen.",
      "Nicht zusätzlich verlangen, dass der Täter persönlich „zum fremden Vorteil“ gehandelt hat; maßgeblich ist die Tatbeteiligung und der haftungsrechtlich erfasste Fremdanspruch.",
      "Haftungsbescheid und Auswahl-/Entschließungsermessen nach § 191 AO prüfen.",
    ],
    merksatz: "§ 71 AO verlangt Steuerhinterziehung/Steuerhehlerei oder Teilnahme – nicht das ungeschriebene Merkmal „zum fremden Vorteil“. Die Fremdheit folgt aus der Trennung von Steuerschuld und Haftung.",
  };
}

function korrigiereHaftung74(thema) {
  normErgaenzen(
    thema,
    "§ 74 Abs. 1 und 2 AO",
    "§ 191 AO",
    "BFH 06.08.2024 – VII R 25/21"
  );
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 74 AO ist eine gegenstandsgebundene Haftung: Gehören einem wesentlich Beteiligten Gegenstände, die dem Unternehmen dienen, haftet der Eigentümer mit diesen Gegenständen für betriebsbezogene Steuern des Unternehmens. Erfasst sind nur Steuern, die während des Bestehens der wesentlichen Beteiligung entstanden sind; Erstattungsansprüche auf Steuervergütungen stehen ihnen gleich.",
      "Wesentlich beteiligt ist nach § 74 Abs. 2 S. 1 AO, wer unmittelbar oder mittelbar zu mehr als einem Viertel am Grund- oder Stammkapital oder am Vermögen des Unternehmens beteiligt ist. Daneben gilt nach Satz 2 auch als wesentlich beteiligt, wer beherrschenden Einfluss ausübt und durch sein Verhalten dazu beiträgt, dass fällige betriebsbezogene Steuern nicht entrichtet werden.",
      "Nach BFH VII R 25/21 dienen Gegenstände dem Unternehmen, wenn sie für die Führung des Betriebs und die Erzielung steuerbarer Umsätze von wesentlicher Bedeutung sind; eine Einordnung als wesentliche Betriebsgrundlage ist dafür nicht zusätzlich erforderlich.",
    ],
    lernziele: [
      "Eigentum eines vom Unternehmen verschiedenen wesentlich Beteiligten feststellen",
      "mehr-als-ein-Viertel-Grenze und alternative Beherrschungsregel des § 74 Abs. 2 AO prüfen",
      "Unternehmensdienlichkeit nach der aktuellen BFH-Rechtsprechung bestimmen",
      "Haftung auf betriebsbezogene Steuern während der wesentlichen Beteiligung begrenzen",
      "gegenstandsgebundenen Haftungsumfang und anschließend § 191 AO prüfen",
    ],
    pruefschritte: [
      "Feststellen, welche Gegenstände dem Unternehmen dienen und wem sie gehören.",
      "Prüfen, ob der Eigentümer unmittelbar oder mittelbar zu mehr als einem Viertel am Grund-/Stammkapital oder Vermögen beteiligt ist.",
      "Falls diese Quote nicht erreicht wird, § 74 Abs. 2 S. 2 AO prüfen: beherrschender Einfluss plus eigenes Verhalten, das zur Nichtentrichtung fälliger betriebsbezogener Steuern beiträgt.",
      "Unternehmensdienlichkeit prüfen: Der Gegenstand muss für Betriebsführung und Erzielung steuerbarer Umsätze von wesentlicher Bedeutung sein; eine wesentliche Betriebsgrundlage ist nicht erforderlich.",
      "Nur betriebsbezogene Steuern beziehungsweise gleichgestellte Erstattungsansprüche erfassen, die während der wesentlichen Beteiligung entstanden sind.",
      "Haftung als Haftung mit den überlassenen Gegenständen bestimmen und anschließend Haftungsbescheid/Ermessen nach § 191 AO prüfen.",
    ],
    merksatz: "§ 74 AO: mehr als 25 % oder besondere Beherrschung + Beitrag zur Nichtzahlung; der Eigentümer haftet nicht pauschal persönlich, sondern mit den dienenden Gegenständen und nur für betriebsbezogene Steuern aus dem Beteiligungszeitraum.",
  };
}


function korrigiereVollstreckung(thema) {
  normErgaenzen(thema, "§ 254 Abs. 1 AO", "§ 259 AO", "VollstrA Abschn. 19");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Für den Beginn der Vollstreckung sind die Vollstreckbarkeit des Verwaltungsakts sowie die besonderen Voraussetzungen des § 254 AO zu prüfen. Grundsätzlich müssen die Leistung fällig, ein Leistungsgebot ergangen und seit der Aufforderung mindestens eine Woche verstrichen sein.",
      "Die Mahnung nach § 259 AO ist davon zu trennen: Der Vollstreckungsschuldner soll in der Regel vor Beginn der Vollstreckung mit einer Zahlungsfrist von einer Woche gemahnt werden. Sie ist aber keine zwingende Rechtmäßigkeitsvoraussetzung; nach Abschn. 19 Abs. 3 VollstrA macht ihr Unterbleiben oder ein Beginn vor Ablauf der Mahnfrist die Vollstreckungsmaßnahme nicht unzulässig.",
      "Ausnahmen vom Leistungsgebot und damit von der §-254-Wochenfrist sind gesondert zu prüfen, insbesondere bei nicht entrichteten, vom Vollstreckungsschuldner selbst angemeldeten Steuern.",
    ],
    lernziele: [
      "Vollstreckbarkeit und Voraussetzungen des Vollstreckungsbeginns getrennt prüfen",
      "Fälligkeit, Leistungsgebot und §-254-Wochenfrist als Grundregeln beherrschen",
      "Ausnahmen vom Leistungsgebot nach § 254 AO erkennen",
      "Mahnung nach § 259 AO als Soll-Regel und nicht als zwingende Vollstreckungsvoraussetzung einordnen",
      "erst anschließend die Rechtmäßigkeit der konkreten Vollstreckungsmaßnahme prüfen",
    ],
    pruefschritte: [
      "Vollstreckbaren Verwaltungsakt und fehlende Vollstreckungshindernisse prüfen (§§ 249, 251, 361 AO).",
      "Fälligkeit der Leistung bestimmen (§ 220 AO).",
      "§ 254 Abs. 1 AO prüfen: grundsätzlich Leistungsgebot und Ablauf von mindestens einer Woche seit der Aufforderung; gesetzliche Ausnahmen gesondert beachten.",
      "Mahnung nach § 259 AO separat würdigen: grundsätzlich Soll-Mahnung mit Wochenfrist, aber keine zwingende Rechtmäßigkeitsvoraussetzung der Vollstreckung.",
      "Danach die Voraussetzungen der konkret gewählten Vollstreckungsmaßnahme prüfen.",
    ],
    merksatz: "Nicht § 259 mit § 254 verwechseln: Leistungsgebot + mindestens eine Woche sind grundsätzlich Startvoraussetzungen; die Mahnung ist nur Soll-Regel und ihr Fehlen macht die Vollstreckung nicht automatisch rechtswidrig.",
  };
}

function korrigiereGuEBekanntgabe(thema) {
  normErgaenzen(thema, "§ 14a Abs. 2–4 AO", "§ 183 AO", "§ 183a AO", "Art. 97 § 39 Abs. 3 EGAO");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Seit der MoPeG-Anpassung unterscheidet die AO rechtsfähige und nicht rechtsfähige Personenvereinigungen nach § 14a AO. Die dort genannten Fälle sind Regelbeispiele; rechtsfähige Personengesellschaften stehen insbesondere in § 14a Abs. 2 Nr. 2, Erbengemeinschaften in Abs. 3 Nr. 3 und auf nicht rechtsfähige Gesellschaften ist Abs. 4 zu beachten.",
      "Bei rechtsfähigen Personenvereinigungen ist § 183 AO der Regelweg: Bekanntgabe an die Personenvereinigung in Vertretung der Feststellungsbeteiligten mit dem Hinweis auf die Wirkung für und gegen alle Beteiligten. Bei nicht rechtsfähigen Personenvereinigungen gilt § 183a AO mit dem gemeinsamen beziehungsweise von der Finanzbehörde bestimmten Empfangsbevollmächtigten.",
      "Rechtsstand 2026 für neu bekanntzugebende Verwaltungsakte: Die Übergangsoption des Art. 97 § 39 Abs. 3 EGAO ist ausgelaufen. Bis einschließlich 2025 konnten Verwaltungsakte an rechtsfähige Personenvereinigungen unter den Voraussetzungen dieser Übergangsregel noch nach § 183 AO a. F. an einen Empfangsbevollmächtigten bekanntgegeben werden.",
    ],
    lernziele: [
      "rechtsfähige und nicht rechtsfähige Personenvereinigungen nach § 14a AO typisieren",
      "bei rechtsfähigen Personenvereinigungen § 183 AO und bei nicht rechtsfähigen § 183a AO anwenden",
      "Wirkungshinweis und Ausnahmen von der Sammelbekanntgabe prüfen",
      "bei ausgeschiedenen Beteiligten § 183 Abs. 2 S. 1 Nr. 2 und die Fortwirkungsmöglichkeit des Satzes 2 getrennt lesen",
      "den Ablauf der Übergangsregel des Art. 97 § 39 Abs. 3 EGAO zum 1.1.2026 erkennen",
    ],
    pruefschritte: [
      "Personenvereinigung nach § 14a AO als rechtsfähig oder nicht rechtsfähig einordnen.",
      "Rechtsfähige Personenvereinigung: grundsätzlich Bekanntgabe nach § 183 Abs. 1 AO an die Personenvereinigung; Hinweis auf Wirkung für und gegen alle Feststellungsbeteiligten aufnehmen.",
      "Nicht rechtsfähige Personenvereinigung: § 183a AO und den gemeinsamen beziehungsweise von der Finanzbehörde bestimmten Empfangsbevollmächtigten prüfen.",
      "Ausnahmen nach § 183 Abs. 2 beziehungsweise § 183a Abs. 2 prüfen, insbesondere Vollbeendigung, Statuswechsel, Ausscheiden und ernstliche Meinungsverschiedenheiten.",
      "Bei einem ausgeschiedenen Beteiligten ist § 183 Abs. 1 nach § 183 Abs. 2 S. 1 Nr. 2 grundsätzlich nicht anwendbar; nach Satz 2 kann die Bekanntgabe an die Personenvereinigung dennoch auch für ihn wirken, solange er nicht widersprochen hat.",
      "Für Bekanntgaben ab 1.1.2026 die ausgelaufene Übergangsoption des Art. 97 § 39 Abs. 3 EGAO nicht mehr anwenden; Alt- und Insolvenzfälle nach den besonderen Übergangsregeln gesondert prüfen.",
    ],
    merksatz: "GuE 2026: rechtsfähige PersV grundsätzlich § 183, nicht rechtsfähige § 183a. Die Übergangs-Bekanntgabe nach altem § 183 für rechtsfähige PersV endete für neue Bekanntgaben mit Ablauf 2025.",
  };
  rechtsstandswechsel(thema, {
    abJahr: 2026,
    vorherJahr: 2025,
    norm: "Art. 97 § 39 Abs. 3 EGAO i. V. m. § 183 AO",
    aktuell: "Für ab 1.1.2026 neu bekanntzugebende Verwaltungsakte einer rechtsfähigen Personenvereinigung steht die bis Ende 2025 befristete alternative Bekanntgabe nach § 183 AO a. F. nicht mehr zur Verfügung; maßgeblich ist grundsätzlich § 183 AO n. F.",
    vorher: "Bis vor den 1.1.2026 konnten Verwaltungsakte und Mitteilungen einer rechtsfähigen Personenvereinigung nach Art. 97 § 39 Abs. 3 EGAO alternativ noch nach § 183 AO a. F. an den Empfangsbevollmächtigten wirksam bekanntgegeben werden.",
  });
}

function korrigiereGuEEinspruch(thema) {
  normErgaenzen(thema, "§ 352 Abs. 1 und 2 AO", "Art. 97 § 39 Abs. 4 EGAO");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 352 AO ist die besondere Einspruchsbefugnis bei gesonderten und einheitlichen Feststellungen. Bei einer bestehenden rechtsfähigen Personenvereinigung ist grundsätzlich die Personenvereinigung selbst einspruchsbefugt; ihr gesetzlicher Vertreter handelt nur für sie, nicht kraft eines eigenen Einspruchsrechts.",
      "Bei nicht rechtsfähigen Personenvereinigungen ist grundsätzlich der gemeinsame beziehungsweise nach § 183a bestimmte Empfangsbevollmächtigte nach Maßgabe des § 352 Abs. 2 AO einspruchsbefugt. Die Rechtsfolge der Sätze 1 und 2 des Absatzes 2 setzt die dort vorgesehene Belehrung über die Einspruchsbefugnis voraus.",
      "Sonderbefugnisse nach § 352 Abs. 1 Nr. 3 bis 5 bleiben gesondert zu prüfen. Für bestimmte Altbescheide und für rechtsfähige Personenvereinigungen, deren Bescheid bis Ende 2025 noch nach der Übergangsregel des Art. 97 § 39 Abs. 3 EGAO bekanntgegeben wurde, ordnet Art. 97 § 39 Abs. 4 EGAO weiterhin die alte Fassung des § 352 an.",
    ],
    lernziele: [
      "rechtsfähige Personenvereinigung selbst als Einspruchsbefugte nach § 352 Abs. 1 Nr. 1 AO erkennen",
      "Vertreterhandeln nicht mit einem eigenen Einspruchsrecht des Vertreters verwechseln",
      "bei nicht rechtsfähigen Personenvereinigungen § 352 Abs. 1 Nr. 2 und Abs. 2 einschließlich Belehrungsvoraussetzung prüfen",
      "Sonderbefugnisse der Nummern 3 bis 5 fallbezogen anwenden",
      "Alt- und Übergangsfälle nach Art. 97 § 39 Abs. 4 EGAO erkennen",
    ],
    pruefschritte: [
      "Rechtsfähigkeit der Personenvereinigung bestimmen.",
      "Bestehende rechtsfähige Personenvereinigung: grundsätzlich Einspruch durch die Personenvereinigung nach § 352 Abs. 1 Nr. 1 Buchst. a AO, vertreten durch ihren gesetzlichen Vertreter.",
      "Nicht rechtsfähige Personenvereinigung: § 352 Abs. 1 Nr. 2 und Abs. 2 AO prüfen; bei Empfangsbevollmächtigten die Belehrungsvoraussetzung des § 352 Abs. 2 S. 3 AO beachten.",
      "Zusätzliche persönliche Einspruchsbefugnisse nach § 352 Abs. 1 Nr. 3 bis 5 prüfen.",
      "Bei vor dem 1.1.2024 wirksam gewordenen Bescheiden sowie den in Art. 97 § 39 Abs. 4 S. 2 EGAO genannten Übergangs-Bekanntgaben vor dem 1.1.2026 die alte Fassung des § 352 AO anwenden.",
    ],
    merksatz: "§ 352: Bei der bestehenden rechtsfähigen PersV legt die PersV den Einspruch ein; ihr Geschäftsführer handelt nur als Vertreter. Bei nicht rechtsfähigen PersV die besondere Empfangsbevollmächtigten- und Belehrungsregel des Absatzes 2 prüfen. Altfälle können über Art. 97 § 39 Abs. 4 EGAO weiter altem § 352 folgen.",
  };
}

function korrigiereUst14c(thema) {
  normErgaenzen(thema, "§ 14c Abs. 1 und 2 UStG", "EuGH 01.08.2025 – C-794/23", "BFH 26.03.2026 – V R 46/25");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 14c Abs. 1 UStG betrifft den unrichtigen Steuerausweis eines grundsätzlich zum Steuerausweis berechtigten Unternehmers; Abs. 2 erfasst insbesondere den unberechtigten Steuerausweis. Beide Tatbestände sind von der materiell für den Umsatz geschuldeten Steuer zu trennen.",
      "Nach EuGH C-794/23 und BFH V R 46/25 entsteht bei § 14c Abs. 1 keine Steuerschuld, soweit eine Rechnung an einen Endverbraucher im unionsrechtlich engen Sinn erteilt wird. Der BFH hat seine entgegenstehende Rechtsprechung am 26.03.2026 ausdrücklich aufgegeben.",
      "Als Endverbraucher in diesem Sinn gelten nach EuGH C-794/23 nur nicht steuerpflichtige Personen. Ein Steuerpflichtiger wird nicht schon deshalb zum Endverbraucher, weil er die konkrete Leistung privat oder für nicht zum Vorsteuerabzug berechtigende Zwecke bezieht. Bei gemischtem Empfängerkreis kann der Anteil erforderlichenfalls geschätzt werden.",
    ],
    lernziele: [
      "§ 14c Abs. 1 und Abs. 2 vom materiellen Umsatz trennen",
      "unrichtigen und unberechtigten Steuerausweis unterscheiden",
      "Endverbraucher-Ausnahme nach EuGH C-794/23 und BFH V R 46/25 beachten",
      "Endverbraucher unionsrechtlich eng als nicht steuerpflichtige Personen verstehen",
      "Berichtigungsvoraussetzungen des jeweils einschlägigen Absatzes gesondert prüfen",
    ],
    pruefschritte: [
      "Zuerst die materiell geschuldete Umsatzsteuer des zugrunde liegenden Umsatzes bestimmen.",
      "Dann klären, ob ein unrichtiger Steuerausweis nach § 14c Abs. 1 oder ein unberechtigter Steuerausweis nach Abs. 2 vorliegt.",
      "Bei § 14c Abs. 1 prüfen, ob und in welchem Umfang Rechnungen an nicht steuerpflichtige Endverbraucher erteilt wurden; insoweit entsteht nach EuGH/BFH keine §-14c-Steuerschuld.",
      "Steuerpflichtige Rechnungsempfänger nicht allein wegen privater Verwendung oder fehlender Vorsteuerabzugsberechtigung als Endverbraucher behandeln.",
      "Bei nicht eindeutig feststellbarem Empfängerkreis eine unionsrechtskonforme Schätzung anhand der verfügbaren Umstände in Betracht ziehen.",
      "Erst anschließend die jeweilige Berichtigungsmöglichkeit nach § 14c prüfen.",
    ],
    merksatz: "§ 14c Abs. 1 seit BFH V R 46/25: keine Steuerschuld für Rechnungen an Endverbraucher; Endverbraucher sind nach EuGH C-794/23 aber nur Nichtsteuerpflichtige, nicht jeder Unternehmer ohne Vorsteuerabzug.",
  };
}


function korrigiereUst14cKurzform(thema) {
  normErgaenzen(thema, "§ 14c Abs. 1 UStG", "EuGH 01.08.2025 – C-794/23", "BFH 26.03.2026 – V R 46/25");
  if (thema.typ === "quiz") {
    thema.kern = {
      ...thema.kern,
      optionen: [
        "Er schuldet stets nur die 7 %",
        "Grundsätzlich kommt § 14c Abs. 1 für den Mehrbetrag in Betracht; bei Rechnung an einen nicht steuerpflichtigen Endverbraucher entsteht insoweit nach BFH V R 46/25 keine §-14c-Steuerschuld",
        "Die Rechnung ist nichtig",
        "Der Leistungsempfänger schuldet die Differenz",
      ],
      richtig: 1,
      erklaerung: "19 % statt richtig 7 % ist grundsätzlich ein unrichtiger Steuerausweis nach § 14c Abs. 1 UStG. Seit BFH V R 46/25 gilt aber: Soweit die Rechnung an einen nicht steuerpflichtigen Endverbraucher erteilt wird, entsteht aus dem Mehrbetrag keine §-14c-Abs.-1-Steuerschuld. Ein steuerpflichtiger Empfänger ist nicht schon wegen privater Verwendung Endverbraucher.",
    };
    return;
  }
  if (thema.typ === "karteikarte") {
    thema.kern = {
      ...thema.kern,
      antwort: "§ 14c Abs. 1: unrichtiger, insbesondere zu hoher Steuerausweis. Grundsätzlich kann der Mehrbetrag geschuldet werden; soweit die Rechnung an einen nicht steuerpflichtigen Endverbraucher geht, entsteht nach EuGH C-794/23 und BFH V R 46/25 jedoch keine §-14c-Abs.-1-Steuerschuld. § 14c Abs. 2 betrifft den unberechtigten Steuerausweis; dessen Berichtigung setzt grundsätzlich die Beseitigung der Gefährdung des Steueraufkommens voraus.",
    };
  }
}

function korrigiereUwa9a(thema) {
  normErgaenzen(thema, "§ 3 Abs. 9a Nr. 1 und 2 UStG", "§ 15a UStG", "BMF 01.04.2026 – III C 2 - S 7316/00022/007/023");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 3 Abs. 9a Nr. 1 UStG setzt bei der Verwendung eines dem Unternehmen zugeordneten Gegenstands für unternehmensfremde Zwecke voraus, dass der Gegenstand oder seine Bestandteile zum vollen oder teilweisen Vorsteuerabzug berechtigt haben. Nr. 2 betrifft andere unentgeltliche sonstige Leistungen für unternehmensfremde Zwecke oder für den privaten Bedarf des Personals.",
      "Die Finanzverwaltung unterscheidet seit dem BMF-Schreiben vom 01.04.2026 klar zwischen unternehmensfremdem, insbesondere privatem Bereich und nichtwirtschaftlicher Tätigkeit im engeren Sinn. Für eine Nutzungsänderung zwischen unternehmerischem Bereich und nichtwirtschaftlicher Tätigkeit i. e. S. ist grundsätzlich der Vorsteuerabzug beziehungsweise § 15a UStG zu prüfen, nicht eine unentgeltliche Wertabgabe.",
      "Die neuen Verwaltungsgrundsätze gelten in allen offenen Fällen. Für Besteuerungszeiträume vor dem 01.01.2027 wird es jedoch nicht beanstandet, wenn der Unternehmer einheitlich für alle betroffenen Sachverhalte noch die bisherige Verwaltungsauffassung anwendet.",
    ],
    lernziele: [
      "§ 3 Abs. 9a Nr. 1 und Nr. 2 unterscheiden",
      "bei Nr. 1 die volle oder teilweise Vorsteuerabzugsberechtigung des Gegenstands beziehungsweise seiner Bestandteile als Tatbestandsvoraussetzung prüfen",
      "unternehmensfremde/private Zwecke von nichtwirtschaftlicher Tätigkeit i. e. S. trennen",
      "bei Wechsel zur nichtwirtschaftlichen Tätigkeit i. e. S. Vorsteuerabzug und § 15a statt automatisch eine unentgeltliche Wertabgabe prüfen",
      "Übergangsregelung der Finanzverwaltung für Zeiträume bis Ende 2026 beachten",
      "Bemessungsgrundlage erst nach zutreffender Tatbestandsqualifikation bestimmen",
    ],
    pruefschritte: [
      "Lieferung und sonstige Leistung abgrenzen.",
      "Bei § 3 Abs. 9a Nr. 1: Verwendung eines dem Unternehmen zugeordneten Gegenstands für unternehmensfremde Zwecke feststellen und zusätzlich prüfen, ob der Gegenstand oder seine Bestandteile zum vollen oder teilweisen Vorsteuerabzug berechtigt haben.",
      "Bei § 3 Abs. 9a Nr. 2: andere unentgeltliche sonstige Leistung für unternehmensfremde Zwecke oder für den privaten Bedarf des Personals prüfen.",
      "Nichtwirtschaftliche Tätigkeit i. e. S. nicht mit unternehmensfremder/private Nutzung gleichsetzen: nach der Verwaltungsauffassung vom 01.04.2026 grundsätzlich Vorsteuerabzug beziehungsweise § 15a prüfen.",
      "Für Besteuerungszeiträume vor 2027 die Nichtbeanstandungsregel beachten: die bisherige Verwaltungsauffassung darf nur einheitlich für alle betroffenen Sachverhalte weiter angewendet werden.",
      "Nur bei erfülltem Wertabgabentatbestand die Kosten-Bemessungsgrundlage nach § 10 Abs. 4 S. 1 Nr. 2 oder 3 UStG bestimmen.",
    ],
    merksatz: "§ 3 Abs. 9a Nr. 1 verlangt Vorsteuerabzug aus Gegenstand oder Bestandteilen. Seit BMF 01.04.2026 gilt außerdem: nichtwirtschaftliche Tätigkeit i. e. S. grundsätzlich über Vorsteuerabzug/§ 15a lösen, nicht automatisch über unentgeltliche Wertabgabe.",
  };
  rechtsstandswechsel(thema, {
    abJahr: 2027,
    vorherJahr: 2026,
    norm: "BMF 01.04.2026 – III C 2 - S 7316/00022/007/023",
    aktuell: "Die Nichtbeanstandungsregel ist abgelaufen: Bei Nutzungsänderungen zwischen unternehmerischem Bereich und nichtwirtschaftlicher Tätigkeit i. e. S. ist nach der Verwaltungsauffassung vom 01.04.2026 Vorsteuerabzug bzw. § 15a UStG zu prüfen; eine unentgeltliche Wertabgabe wird dafür nicht mehr nach der früheren Verwaltungsauffassung angesetzt.",
    vorher: "Die neuen BMF-Grundsätze gelten bereits in offenen Fällen. Für Besteuerungszeiträume vor dem 1.1.2027 wird aber nicht beanstandet, wenn der Unternehmer einheitlich für alle betroffenen Sachverhalte noch die bisherige Verwaltungsauffassung zu Vorsteuerabzug und unentgeltlicher Wertabgabe anwendet.",
  });
}

function korrigiereUstZuordnung2026(thema) {
  normErgaenzen(thema, "A 15.2b/15.2c UStAE", "§ 15a UStG", "BMF 01.04.2026 – III C 2 - S 7316/00022/007/023");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Für den Vorsteuerabzug ist nicht jede nichtunternehmerische Nutzung gleich zu behandeln. Zu unterscheiden sind unternehmensfremde, insbesondere private Zwecke und eine nichtwirtschaftliche Tätigkeit im engeren Sinn.",
      "Bei einem einheitlichen Gegenstand, der teilweise unternehmerisch und teilweise unternehmensfremd privat genutzt werden soll, kann unter den gesetzlichen Voraussetzungen weiterhin ein Zuordnungswahlrecht bestehen. Bei einer Verwendung für unternehmerische und nichtwirtschaftliche Tätigkeit i. e. S. gilt dagegen grundsätzlich ein Aufteilungsgebot für den Vorsteuerabzug.",
      "Ändert sich das Nutzungsverhältnis später zwischen unternehmerischer und nichtwirtschaftlicher Tätigkeit i. e. S., ist nach BMF 01.04.2026 grundsätzlich § 15a UStG zu prüfen. Die neuen Grundsätze gelten in offenen Fällen; für Besteuerungszeiträume vor 2027 ist die einheitliche Anwendung der bisherigen Verwaltungsauffassung noch nicht zu beanstanden.",
    ],
    lernziele: [
      "unternehmensfremde/private Nutzung und nichtwirtschaftliche Tätigkeit i. e. S. auseinanderhalten",
      "Zuordnungswahlrecht nur für die dafür vorgesehenen gemischt privat/unternehmerisch genutzten einheitlichen Gegenstände anwenden",
      "bei unternehmerischer und nichtwirtschaftlicher Tätigkeit i. e. S. den Vorsteuerabzug grundsätzlich aufteilen",
      "spätere Nutzungsänderungen zur nichtwirtschaftlichen Tätigkeit i. e. S. über § 15a prüfen",
      "10-%-Grenze und Grundstückssonderregel des § 15 Abs. 1b UStG gesondert beachten",
      "Nichtbeanstandungsregel für Besteuerungszeiträume vor 2027 kennen",
    ],
    pruefschritte: [
      "Beabsichtigte Verwendung bei Leistungsbezug bestimmen und unternehmerischen von nichtunternehmerischen Bereichen trennen.",
      "Im nichtunternehmerischen Bereich zwischen unternehmensfremd/privat und nichtwirtschaftlicher Tätigkeit i. e. S. unterscheiden.",
      "Bei einheitlichen Gegenständen mit unternehmerischer und privater Nutzung Zuordnungswahlrecht und 10-%-Mindestnutzung prüfen.",
      "Bei Verwendung für unternehmerische und nichtwirtschaftliche Tätigkeit i. e. S. den Vorsteuerabzug grundsätzlich nach dem Nutzungsverhältnis aufteilen.",
      "Bei späterer Änderung dieses Nutzungsverhältnisses § 15a UStG einschließlich § 44 UStDV prüfen.",
      "Für Zeiträume vor 2027 die einheitlich auszuübende Nichtbeanstandungsregel des BMF-Schreibens vom 01.04.2026 berücksichtigen.",
      "Bei Grundstücken zusätzlich § 15 Abs. 1b und die einschlägigen Übergangsregeln prüfen.",
    ],
    merksatz: "Seit BMF 01.04.2026 ist die Trennlinie zentral: privat/unternehmensfremd kann ein Zuordnungswahlrecht und eine Wertabgabe auslösen; nichtwirtschaftliche Tätigkeit i. e. S. führt grundsätzlich zur Vorsteueraufteilung und bei späterer Änderung zu § 15a.",
  };
  rechtsstandswechsel(thema, {
    abJahr: 2027,
    vorherJahr: 2026,
    norm: "BMF 01.04.2026 – III C 2 - S 7316/00022/007/023",
    aktuell: "Die bis Ende 2026 gewährte Nichtbeanstandung ist ausgelaufen. Für die Abgrenzung von unternehmerischer und nichtwirtschaftlicher Tätigkeit i. e. S. sind die neuen Verwaltungsgrundsätze zu Vorsteueraufteilung und § 15a maßgeblich.",
    vorher: "Die neuen Verwaltungsgrundsätze gelten bereits in offenen Fällen; für Besteuerungszeiträume vor 2027 darf jedoch einheitlich noch die bisherige Verwaltungsauffassung zu Vorsteuerabzug und unentgeltlicher Wertabgabe angewandt werden.",
  });
}


function korrigiereReiseleistungen25(thema) {
  normErgaenzen(
    thema,
    "§ 25 Abs. 1–4 UStG",
    "A 25.1 Abs. 1 UStAE",
    "BMF 28.04.2026 – III C 2 - S 7419/00016/022/023"
  );
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 25 UStG gilt für Reiseleistungen, wenn der Unternehmer gegenüber dem Leistungsempfänger im eigenen Namen auftritt und Reisevorleistungen in Anspruch nimmt. Mehrere solche Leistungen an einen Leistungsempfänger gelten als einheitliche sonstige Leistung; ihr Ort richtet sich nach § 3a Abs. 1 UStG.",
      "Nach der Verwaltungsauffassung in A 25.1 Abs. 1 UStAE ist § 25 UStG bei Unternehmern mit Sitz im Drittland und ohne unmittelbar am Verkauf beteiligte feste Niederlassung im Gemeinschaftsgebiet grundsätzlich nicht anzuwenden.",
      "Für diese Drittlandsunternehmer besteht jedoch eine Nichtbeanstandungsregelung: Nach BMF vom 28.04.2026 wird es bis einschließlich 31.12.2029 nicht beanstandet, wenn die Sonderregelung des § 25 UStG weiterhin angewandt wird.",
    ],
    lernziele: [
      "eigenes Auftreten und Reisevorleistungen als Grundvoraussetzungen des § 25 UStG prüfen",
      "einheitliche Reiseleistung und Leistungsort nach § 3a Abs. 1 bestimmen",
      "Drittlandsanteile nach § 25 Abs. 2 abgrenzen",
      "Marge nach § 25 Abs. 3 bestimmen",
      "Vorsteuerausschluss für Reisevorleistungen nach § 25 Abs. 4 beachten",
      "Verwaltungssonderregel für Drittlandsunternehmer und Nichtbeanstandung bis 31.12.2029 kennen",
    ],
    pruefschritte: [
      "Prüfen, ob der Unternehmer im eigenen Namen auftritt und Reisevorleistungen Dritter in Anspruch nimmt, die dem Reisenden unmittelbar zugutekommen.",
      "Mehrere Reiseleistungen an denselben Leistungsempfänger als einheitliche sonstige Leistung behandeln; Ort nach § 3a Abs. 1 UStG bestimmen.",
      "Bei Unternehmern mit Sitz im Drittland ohne feste Niederlassung im Gemeinschaftsgebiet die Verwaltungsauffassung beachten: § 25 grundsätzlich nicht anwendbar; Nichtbeanstandung der Anwendung für bis 31.12.2029 ausgeführte Reiseleistungen.",
      "Steuerfreiheit nach § 25 Abs. 2 nur insoweit prüfen, als die zuzurechnenden Reisevorleistungen im Drittlandsgebiet bewirkt werden.",
      "Bemessungsgrundlage als Marge nach § 25 Abs. 3 bestimmen; Umsatzsteuer gehört nicht zur Bemessungsgrundlage.",
      "Vorsteuer aus Reisevorleistungen nach § 25 Abs. 4 ausschließen.",
    ],
    merksatz: "§ 25 ist ein Sonderregime; bei Drittlandsunternehmern zusätzlich A 25.1 UStAE beachten. Die Verwaltung lässt die Anwendung der Margenbesteuerung aufgrund BMF 28.04.2026 noch bis 31.12.2029 unbeanstandet.",
  };
}

function korrigiereUstOrganschaft(thema) {
  normErgaenzen(thema, "§ 2 Abs. 2 Nr. 2 UStG", "BFH 18.01.2023 – XI R 29/22", "BFH 29.08.2024 – V R 14/24", "BMF 01.04.2026 – III C 2 - S 7105/00035/008/056");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Die umsatzsteuerliche Organschaft setzt finanzielle, wirtschaftliche und organisatorische Eingliederung voraus. Für die finanzielle Eingliederung ist die Mehrheit der Stimmrechte der Regelfall, aber keine ausnahmslose starre >50-%-Grenze.",
      "Nach BFH XI R 29/22 kann finanzielle Eingliederung ausnahmsweise auch bei genau 50 % der Stimmrechte vorliegen, wenn der Organträger zugleich eine Mehrheitsbeteiligung am Kapital hält und den einzigen Geschäftsführer der Organgesellschaft stellt, sodass seine Willensdurchsetzung gesichert ist.",
      "Innenleistungen im Organkreis sind nach BFH V R 14/24 und BMF 01.04.2026 auch dann nicht steuerbar, wenn sie für nichtwirtschaftliche Tätigkeiten i. e. S. des Organträgers oder der Organgesellschaft verwendet werden. Für den Vorsteuerabzug bzw. § 15a gelten die gesonderten Regeln.",
    ],
    lernziele: [
      "Organträger und Organgesellschaft bestimmen",
      "finanzielle, wirtschaftliche und organisatorische Eingliederung getrennt prüfen",
      "Mehrheit der Stimmrechte als Grundregel und die BFH-Ausnahme bei genau 50 % plus Kapitalmehrheit und Alleingeschäftsführung kennen",
      "zeitlichen Eintritt und Wegfall der Organschaft bestimmen",
      "Nichtsteuerbarkeit von Innenleistungen auch bei Verwendung für nichtwirtschaftliche Tätigkeiten i. e. S. beachten",
      "Inlandsbegrenzung und Vorsteuerfolgen gesondert prüfen",
    ],
    pruefschritte: [
      "Geeigneten Organträger und Organgesellschaft bestimmen.",
      "Finanzielle Eingliederung prüfen: grundsätzlich Stimmenmehrheit; bei genau 50 % zusätzlich prüfen, ob Kapitalmehrheit und Stellung des einzigen Geschäftsführers die Willensdurchsetzung sichern.",
      "Wirtschaftliche Eingliederung anhand der wirtschaftlichen Verflechtung prüfen.",
      "Organisatorische Eingliederung anhand der tatsächlichen organisatorischen Beherrschung prüfen; Personenidentität in der Geschäftsführung ist eine starke, aber nicht die einzig denkbare Ausprägung.",
      "Nur bei kumulativem Vorliegen der Voraussetzungen Rechtsfolgen des § 2 Abs. 2 Nr. 2 UStG ziehen.",
      "Innenleistungen als nicht steuerbar behandeln; dies gilt nach aktueller BFH-/BMF-Linie auch bei Verwendung für nichtwirtschaftliche Tätigkeiten i. e. S.",
      "Inlandsbegrenzung sowie Vorsteuerabzug und gegebenenfalls § 15a gesondert prüfen.",
    ],
    merksatz: "Organschaft: Stimmenmehrheit ist die Grundregel, aber 50 % können bei Kapitalmehrheit plus Alleingeschäftsführung genügen. Innenleistungen bleiben auch bei Verwendung für nichtwirtschaftliche Tätigkeiten i. e. S. nicht steuerbar.",
  };
  rechtsstandswechsel(thema, {
    abJahr: 2027,
    vorherJahr: 2026,
    norm: "BMF 01.04.2026 – III C 2 - S 7105/00035/008/056",
    aktuell: "Die bis 31.12.2026 gewährte Nichtbeanstandung ist ausgelaufen. Die aktualisierte Verwaltungslinie zur Nichtsteuerbarkeit von Innenleistungen auch bei Verwendung für nichtwirtschaftliche Tätigkeiten i. e. S. ist ohne diese Übergangsoption anzuwenden.",
    vorher: "Die neuen BMF-Grundsätze gelten in offenen Fällen; bis 31.12.2026 wird jedoch nicht beanstandet, wenn noch die bisherige Verwaltungsauffassung angewandt wird.",
  });
}

function korrigierePv30Kwp(thema) {
  normErgaenzen(thema, "§ 12 Abs. 3 Nr. 1 UStG", "A 12.18 Abs. 5 UStAE");
  const einordnung = [...(thema.kern?.einordnung || [])];
  if (!einordnung.some((x) => /30.*kW.*Vereinfachung|Vereinfachungsregel.*30/i.test(x))) {
    einordnung.push("Bei Photovoltaikanlagen ist die 30-kW-(peak)-Grenze des § 12 Abs. 3 Nr. 1 S. 2 UStG keine allgemeine Höchstgrenze für den Nullsteuersatz. Sie ist eine Vereinfachungsregel: Bis einschließlich 30 kW (peak) gelten die Gebäudevoraussetzungen des Satzes 1 als erfüllt. Bei größeren Anlagen kann der Nullsteuersatz ebenfalls greifen, wenn die Voraussetzungen des Satzes 1 tatsächlich erfüllt sind.");
  }
  const lernziele = [...(thema.kern?.lernziele || [])].map((x) =>
    /30-kWp-Grenze des Nullsteuersatzes/i.test(x)
      ? "die 30-kW-(peak)-Vereinfachungsregel des § 12 Abs. 3 Nr. 1 S. 2 UStG von einer echten Höchstgrenze unterscheiden"
      : x
  );
  if (!lernziele.some((x) => /größere Anlagen|über 30/i.test(x))) {
    lernziele.push("bei Anlagen über 30 kW (peak) die Gebäudevoraussetzungen des § 12 Abs. 3 Nr. 1 S. 1 UStG konkret prüfen");
  }
  const pruefschritte = [...(thema.kern?.pruefschritte || [])];
  pruefschritte.splice(1, 0,
    "Bei Photovoltaikanlagen zuerst § 12 Abs. 3 Nr. 1 S. 1 UStG prüfen. Liegt die installierte Bruttoleistung bei höchstens 30 kW (peak), greift Satz 2 als Vereinfachung für die Gebäudevoraussetzungen; oberhalb von 30 kW ist der Nullsteuersatz nicht automatisch ausgeschlossen."
  );
  thema.kern = {
    ...thema.kern,
    einordnung,
    lernziele,
    pruefschritte,
    merksatz: "Steuersatz positiv begründen: 0 % vor 7 % prüfen, sonst 19 %. Bei Photovoltaik sind 30 kW (peak) eine Vereinfachungsgrenze für die Gebäudeprüfung, keine Höchstgrenze des Nullsteuersatzes.",
  };
}

function korrigiereUstVorsteuer14c(thema) {
  normErgaenzen(thema, "§ 15 Abs. 1 S. 1 Nr. 1 UStG", "§ 14c Abs. 1 und 2 UStG", "EuGH 01.08.2025 – C-794/23", "BFH 26.03.2026 – V R 46/25");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Für den Vorsteuerabzug nach § 15 Abs. 1 S. 1 Nr. 1 UStG ist die gesetzlich geschuldete Steuer aus einer Leistung eines anderen Unternehmers maßgeblich; ein nur aufgrund § 14c geschuldeter Mehrbetrag wird dadurch nicht zur abziehbaren Vorsteuer.",
      "§ 14c Abs. 1 UStG ist seit EuGH C-794/23 und BFH V R 46/25 zusätzlich einzuschränken: Soweit eine Rechnung an einen nicht steuerpflichtigen Endverbraucher erteilt wird, entsteht aus dem unrichtigen Steuerausweis keine §-14c-Abs.-1-Steuerschuld. Der BFH hat insoweit seine frühere Rechtsprechung ausdrücklich geändert.",
      "Ein steuerpflichtiger Rechnungsempfänger ist nicht allein deshalb Endverbraucher, weil er die Leistung privat oder für einen nicht zum Vorsteuerabzug berechtigenden Zweck nutzt.",
    ],
    lernziele: [
      "Voraussetzungen des Vorsteuerabzugs nach § 15 Abs. 1 S. 1 Nr. 1 UStG prüfen",
      "gesetzlich geschuldete Umsatzsteuer von einer bloßen §-14c-Steuerschuld unterscheiden",
      "unrichtigen und unberechtigten Steuerausweis nach § 14c Abs. 1 und 2 abgrenzen",
      "Endverbraucher-Ausnahme des § 14c Abs. 1 nach EuGH C-794/23 und BFH V R 46/25 berücksichtigen",
      "bei Anzahlungen Rechnung, Zahlung und Leistungsbezug zeitlich richtig zusammenführen",
    ],
    pruefschritte: [
      "Leistung eines anderen Unternehmers für das Unternehmen feststellen.",
      "Gesetzlich geschuldete Steuer für die konkrete Lieferung oder sonstige Leistung bestimmen.",
      "Rechnung nach §§ 14, 14a UStG und Besitz der Rechnung prüfen.",
      "Bei Vorauszahlungen zusätzlich Zahlung vor Leistungsausführung prüfen.",
      "Bei problematischem Steuerausweis § 14c gesondert prüfen. Ein nur nach § 14c geschuldeter Betrag ist keine abziehbare Vorsteuer.",
      "Bei § 14c Abs. 1 zusätzlich prüfen, ob die Rechnung an einen nicht steuerpflichtigen Endverbraucher ging; insoweit entsteht nach aktueller EuGH-/BFH-Rechtsprechung keine §-14c-Steuerschuld.",
    ],
    merksatz: "Vorsteuer verlangt gesetzlich geschuldete Steuer. § 14c schafft keinen Vorsteuerabzug; bei § 14c Abs. 1 ist seit BFH V R 46/25 zusätzlich die Endverbraucher-Ausnahme zu beachten.",
  };
}

function korrigierePkwArbeitnehmer(thema) {
  normErgaenzen(thema, "§ 3 Abs. 9a Nr. 1 UStG", "§ 3 Abs. 12 S. 2 UStG", "§ 3a Abs. 1 UStG", "§ 3a Abs. 3 Nr. 2 S. 3 UStG", "BFH 30.06.2022 – V R 25/21", "BMF 03.03.2026 – III C 3 - S 7117-e/00003/005/058");
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Die private Fahrzeugnutzung durch den Unternehmer und die Fahrzeugüberlassung an Arbeitnehmer sind getrennt zu prüfen. Bei der Unternehmernutzung kann § 3 Abs. 9a Nr. 1 UStG eingreifen, wenn die Vorsteuervoraussetzung erfüllt ist.",
      "Bei Arbeitnehmern ist die Privatnutzungsüberlassung nicht allein wegen des Arbeitsverhältnisses automatisch entgeltlich. Ein unmittelbarer Zusammenhang mit der Arbeitsleistung liegt nach BFH V R 25/21 jedenfalls vor, wenn die private Nutzung individuell arbeitsvertraglich vereinbart ist, tatsächlich in Anspruch genommen wird und das Dienstverhältnis wirtschaftlich mitprägt. Nach dem BMF-Schreiben vom 03.03.2026 können auch mündliche Vereinbarungen oder eine entsprechende betriebliche Übung die Entgeltlichkeit tragen.",
      "Die entgeltliche langfristige Fahrzeugüberlassung an einen Arbeitnehmer wird als Vermietung eines Beförderungsmittels behandelt; der Leistungsort liegt nach § 3a Abs. 3 Nr. 2 S. 3 UStG grundsätzlich am Wohnsitz oder gewöhnlichen Aufenthalt des Arbeitnehmers. Ist die Überlassung ausnahmsweise unentgeltlich, richtet sich der Leistungsort nach § 3a Abs. 1 UStG.",
    ],
    lernziele: [
      "private Unternehmernutzung und Arbeitnehmerüberlassung unterscheiden",
      "bei Arbeitnehmern einen unmittelbaren Zusammenhang zwischen Fahrzeugüberlassung und Arbeitsleistung statt einer Entgeltlichkeitsautomatik prüfen",
      "arbeitsvertragliche, mündliche oder durch betriebliche Übung begründete Privatnutzungsrechte einordnen",
      "entgeltliche langfristige Überlassung als tauschähnlichen Umsatz und Vermietung eines Beförderungsmittels behandeln",
      "Leistungsort der entgeltlichen Überlassung nach § 3a Abs. 3 Nr. 2 S. 3 und der ausnahmsweise unentgeltlichen Überlassung nach § 3a Abs. 1 unterscheiden",
      "ertragsteuerliche Elektro-/Hybrid-Bewertungsvorteile nicht ungeprüft auf die Umsatzsteuer übertragen",
    ],
    pruefschritte: [
      "Feststellen, wer das Fahrzeug privat nutzt und auf welcher Rechtsgrundlage.",
      "Beim Unternehmer § 3 Abs. 9a Nr. 1 UStG einschließlich Vorsteuervoraussetzung prüfen.",
      "Beim Arbeitnehmer prüfen, ob die Privatnutzungsmöglichkeit Teil der Gegenleistung für die Arbeitsleistung ist; maßgeblich ist der konkrete unmittelbare Zusammenhang, nicht das Arbeitsverhältnis allein.",
      "Bei entgeltlicher Arbeitnehmerüberlassung tauschähnlichen Umsatz und langfristige Vermietung eines Beförderungsmittels prüfen; Leistungsort grundsätzlich am Wohnsitz/gewöhnlichen Aufenthalt des Arbeitnehmers nach § 3a Abs. 3 Nr. 2 S. 3 UStG.",
      "Bei ausnahmsweise unentgeltlicher Fahrzeugüberlassung § 3 Abs. 9a Nr. 1 und für den Leistungsort § 3a Abs. 1 UStG anwenden.",
      "Die BMF-Nichtbeanstandung für die frühere Leistungsortbehandlung bei unentgeltlicher Fahrzeugüberlassung galt nur für Umsätze bis 30.06.2026.",
      "Bemessungsgrundlage nach den einschlägigen UStAE-Grundsätzen bestimmen; ertragsteuerliche Elektro-/Hybridabschläge nicht automatisch übernehmen.",
    ],
    merksatz: "Dienstwagen 2026: Arbeitnehmerüberlassung ist nicht wegen des Arbeitsverhältnisses automatisch entgeltlich. Zusammenhang mit der Arbeitsleistung prüfen; entgeltlich langfristig grundsätzlich Arbeitnehmer-Wohnsitz, ausnahmsweise unentgeltlich § 3a Abs. 1.",
  };
}

function kennzeichneGastronomie(thema) {
  rechtsstandswechsel(thema, {
    abJahr: 2026,
    vorherJahr: 2025,
    norm: "§ 12 Abs. 2 Nr. 15 UStG",
    aktuell: "Restaurant- und Verpflegungsdienstleistungen hinsichtlich der Speisen 7 %; Getränke bleiben ausgenommen und grundsätzlich bei 19 %.",
    vorher: "Restaurant- und Verpflegungsdienstleistungen unterlagen nach Auslaufen der befristeten Begünstigung grundsätzlich mit Speisen und Getränken dem Regelsteuersatz von 19 %.",
  });
}

/**
 * Wendet ausschließlich auf die Social-Skelette fachliche Korrekturen an.
 * src/data und damit die Examenscampus-Webseite werden nicht verändert.
 */
export function socialKorrekturenAnwenden(pool) {
  for (const thema of pool || []) {
    switch (thema.id) {
      case "bilanz-modul-k3-36": korrigiereEntfernungspauschale(thema); break;
      case "bilanz-modul-k3-47": korrigierePar34(thema); break;
      case "erbst-modul-erbst-506": ergaenzeErbfallkosten(thema); break;
      case "ao-modul-ao-308": korrigiereBekanntgabeBevollmaechtigter(thema); break;
      case "ao-modul-ao-313": korrigiereAo122a(thema); break;
      case "ao-modul-ao-347": korrigiereAo164Vdn(thema); break;
      case "ao-modul-ao-351": korrigiereFeststellungsbescheid181(thema); break;
      case "ao-modul-ao-352": korrigiereAo129(thema); break;
      case "ao-modul-ao-354": korrigiereAo173(thema); break;
      case "ao-modul-ao-360": korrigiereSchlichteAenderung172(thema); break;
      case "ao-modul-ao-363": korrigiereAo177(thema); break;
      case "ao-modul-ao-367": korrigiereVollstreckung(thema); break;
      case "ao-modul-ao-384": korrigiereVollstreckung(thema); break;
      case "ao-modul-ao-371": korrigiereWiedereinsetzung(thema); break;
      case "ao-modul-ao-373": korrigiereWiedereinsetzung(thema); break;
      case "ao-modul-ao-375": korrigiereGuEBekanntgabe(thema); break;
      case "ao-modul-ao-376": korrigiereGuEEinspruch(thema); break;
      case "ao-modul-ao-386": korrigiereLeichtfertigkeit378(thema); break;
      case "ao-modul-ao-388": korrigiereSelbstanzeige371(thema); break;
      case "ao-modul-ao-390": korrigiereHaftung69(thema); break;
      case "ao-modul-ao-392": korrigiereHaftung71(thema); break;
      case "ao-modul-ao-393": korrigiereHaftung74(thema); break;
      case "ao-modul-ao-335": korrigiereAussenpruefung171(thema); break;
      case "erbst-modul-erbst-532": korrigiereBewg14Faktoren(thema); break;
      case "erbst-modul-erbst-512": korrigiereFamilienheim(thema); break;
      case "erbst-modul-erbst-513": ergaenzeErbSt13dDrittstaat(thema); break;
      case "erbst-modul-erbst-515": korrigiereErbStSchuldenabzug(thema); break;
      case "persg-modul-persg-7": korrigiereSbvKomplementaerGmbh(thema); break;
      case "istr-modul-istr-istr3-07": korrigiereAStG2(thema); break;
      case "istr-modul-istr-istr4-06": korrigiereAStG9(thema); break;
      case "bilanz-formel-anschaffungsnah": korrigiereAnschaffungsnah(thema); break;
      case "bilanz-formel-sechsb-reihenfolge": korrigiereSechsBReihenfolge(thema); break;
      case "bilanz-formel-sechsb-abs10": korrigiereSechsBAbs10(thema); break;
      case "bilanz-formel-pwb": korrigierePwb(thema); break;
      case "bilanz-formel-abzinsung": korrigiereAbzinsung(thema); break;
      case "bilanz-formel-leasing-4090": korrigiereLeasing4090(thema); break;
      case "bilanz-formel-latente-steuern": korrigiereLatenteSteuern(thema); break;
      case "bilanz-formel-teileinkuenfte": korrigiereTeileinkuenfte(thema); break;
      case "kst-modul-kst-12": korrigiereVerein(thema); break;
      case "kst-modul-kst-1": korrigiereVorgesellschaft(thema); break;
      case "bilanz-modul-k3-35": korrigiereElektroPkw(thema); break;
      case "bilanz-modul-k3-29": korrigiereRueckstellungskatalog(thema); break;
      case "ust-modul-ust-161": kennzeichneGastronomie(thema); korrigierePv30Kwp(thema); break;
      case "ust-modul-ust-164": korrigiereUstVorsteuer14c(thema); break;
      case "ust-modul-ust-209": korrigiereUst14c(thema); break;
      case "ust-quiz-ust-5": korrigiereUst14cKurzform(thema); break;
      case "ust-karte-ust-14": korrigiereUst14cKurzform(thema); break;
      case "ust-modul-ust-212": korrigiereUwa9a(thema); break;
      case "ust-modul-ust-224": korrigiereUstZuordnung2026(thema); break;
      case "ust-modul-ust-225": korrigierePkwArbeitnehmer(thema); break;
      case "ust-modul-ust-232": korrigiereReiseleistungen25(thema); break;
      case "ust-modul-ust-234": korrigiereUstOrganschaft(thema); break;
      default: break;
    }

    if (thema.typ === "karteikarte" && /Begründet ein Mietverhältnis wirtschaftliches Eigentum/i.test(thema.titel || "")) korrigiereMiete(thema);
    if (thema.typ === "karteikarte" && /Wie unterscheidet sich die Rückstellungsbewertung in HB und StB/i.test(thema.titel || "")) korrigiereRueckstellungsbewertung(thema);
    if (/Bilanzberichtigung (?:oder|und) Bilanzänderung/i.test(thema.titel || "")) korrigiereBilanzaenderung(thema);
    if (thema.typ === "quiz" && /Eine innergemeinschaftliche Lieferung an einen Unternehmer mit USt-IdNr/i.test(thema.titel || "")) korrigiereIgLieferungQuiz(thema);
    if (thema.typ === "quiz" && /Was gilt seit dem 1\.1\.2025 für Rechnungen im B2B-Inlandsgeschäft/i.test(thema.titel || "")) kennzeichneERechnung(thema);
    if (thema.typ === "karteikarte" && /^Steuersätze \(§ 12 UStG\)$/i.test(thema.titel || "")) korrigiereUstSteuersaetzeKarte(thema);
    if (thema.typ === "karteikarte" && /Option nach § 9 UStG/i.test(thema.titel || "")) korrigiereOption9(thema);
    if (thema.typ === "karteikarte" && /Mietdauer oder Nutzungsdauer beim Mietereinbau/i.test(thema.titel || "")) korrigiereMietereinbauAfa(thema);
    if (thema.typ === "karteikarte" && /Wie wirken sich Abbruchkosten aus/i.test(thema.titel || "")) korrigiereAbbruchkosten(thema);
    if (thema.typ === "karteikarte" && /Wann ist die Einlage auf die Anschaffungskosten gedeckelt/i.test(thema.titel || "")) korrigiereEinlageDeckel(thema);
    if (thema.typ === "karteikarte" && /Wie prüft man § 15a EStG in vier Schritten/i.test(thema.titel || "")) korrigiere15aVierSchritte(thema);
    if (/Realteilung (?:oder|und) Sachwertabfindung/i.test(thema.titel || "")) korrigiereRealteilung(thema);
    if (thema.typ === "karteikarte" && /Wie wird § 8b KStG technisch umgesetzt/i.test(thema.titel || "")) korrigiereAchtBTechnik(thema);
    if (/Vereinsbesteuerung/i.test(thema.titel || "") && thema.id !== "kst-modul-kst-12") korrigiereVerein(thema);
    if (thema.typ === "quiz" && /Welcher Vereinsbereich.*steuerpflichtig/i.test(thema.titel || "")) korrigiereVereinsQuiz(thema);
    if (thema.typ === "quiz" && /Wann beginnt im Gründungsfall die unbeschränkte Körperschaftsteuerpflicht der GmbH/i.test(thema.titel || "")) korrigiereVorgesellschaft(thema);
    if (thema.typ === "karteikarte" && /Vorgründung vs\. Vorgesellschaft/i.test(thema.titel || "")) korrigiereVorgesellschaft(thema);

    const kernText = JSON.stringify(thema.kern || {});
    const achtBThema = /§\s*8b/i.test(`${thema.titel || ""} ${(thema.normen || []).join(" ")}`);
    const verkuerzt = /10[-‑ ]?%|weniger als 10|Beteiligungsquote/i.test(kernText) && /Beginn des Kalenderjahres|Jahresbeginn|Stichtag/i.test(kernText);
    if (achtBThema && verkuerzt && !/Abs\. 4 S\. 6|Erwerb.*mindestens 10 %.*Beginn des Kalenderjahres/i.test(kernText)) korrigiereAchtB(thema);
  }
  return pool;
}
