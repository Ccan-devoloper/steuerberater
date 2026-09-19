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
      case "istr-modul-istr-istr4-06": korrigiereAStG9(thema); break;
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
      case "ust-modul-ust-161": kennzeichneGastronomie(thema); break;
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
