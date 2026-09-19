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
    merksatz: "§ 9 AStG arbeitet mit Einkünften, nicht mit Bruttoerträgen. 2026 gelten ein Drittel und 100.000 €; bei 2025er Sachverhalten noch 10 % und 80.000 €.",
  };
  rechtsstandswechsel(thema, {
    abJahr: 2026,
    vorherJahr: 2025,
    norm: "§ 9 AStG",
    aktuell: "Relative Freigrenze: nicht mehr als ein Drittel der gesamten Einkünfte der ausländischen Gesellschaft; absolute Freigrenze: 100.000 €.",
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
    erklaerung: "§ 6b Abs. 10 EStG begünstigt Gewinne aus der Veräußerung von Anteilen nach aktuellem Recht bis 2.000.000 €. Die Erhöhung gilt nach § 52 Abs. 14 S. 7 EStG erstmals für Gewinne, die in nach dem 10. Februar 2026 beginnenden Wirtschaftsjahren entstehen. Bei der Übertragung auf Gebäude oder abnutzbare bewegliche Wirtschaftsgüter ist nur der nicht nach § 3 Nr. 40 i. V. m. § 3c Abs. 2 EStG steuerbefreite Teil abziehbar; für Ersatzanteile gelten die besonderen Regeln des Absatzes 10.",
  };
  thema.normen = ["§ 6b Abs. 10 S. 1–6 EStG", "§ 52 Abs. 14 S. 7 EStG", "§ 3 Nr. 40 EStG", "§ 3c Abs. 2 EStG"];
  rechtsstandswechsel(thema, {
    abJahr: 2026,
    vorherJahr: 2025,
    norm: "§ 6b Abs. 10 S. 1 i. V. m. § 52 Abs. 14 S. 7 EStG",
    aktuell: "Höchstbetrag 2.000.000 € für Gewinne aus Anteilsveräußerungen, die in nach dem 10.02.2026 beginnenden Wirtschaftsjahren entstehen.",
    vorher: "Höchstbetrag 500.000 € nach der bis zur Neuregelung geltenden Fassung.",
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

function korrigiereIgLieferungQuiz(thema) {
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
  thema.kern = {
    ...thema.kern,
    antwort: "Bilanzberichtigung nach § 4 Abs. 2 S. 1 EStG: Korrektur eines objektiv unrichtigen Bilanzansatzes, soweit die zugrunde liegende Steuerfestsetzung noch geändert werden kann. Bilanzänderung nach Satz 2: Wechsel von einem zulässigen Bilanzansatz zu einem anderen zulässigen Ansatz; sie ist nur in engem zeitlichen und sachlichen Zusammenhang mit einer Bilanzberichtigung und nur bis zur Höhe deren Gewinnwirkung zulässig. Eine zusätzliche gesetzliche Zustimmung des Finanzamts verlangt § 4 Abs. 2 S. 2 EStG nicht.",
  };
  normErgaenzen(thema, "§ 4 Abs. 2 S. 1, 2 EStG");
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
  normErgaenzen(thema, "§ 16 Abs. 3 S. 2–4 EStG");
  if (thema.typ === "karteikarte") {
    thema.kern = {
      ...thema.kern,
      antwort: "Realteilung gibt es als echte und als unechte Realteilung. Echte Realteilung: Die Mitunternehmerschaft wird beendet und Betriebsvermögen auf die Realteiler verteilt. Unechte Realteilung: Ein Mitunternehmer scheidet gegen Übertragung von Wirtschaftsgütern aus, die bei ihm zumindest teilweise Betriebsvermögen bleiben, während die Mitunternehmerschaft von den übrigen Gesellschaftern fortgeführt wird. Eine reine Barabfindung ist keine Realteilung; ebenso greift die Buchwertregel nicht, soweit übertragene Einzelwirtschaftsgüter vollständig ins Privatvermögen gelangen. Die Voraussetzungen des § 16 Abs. 3 S. 2–4 EStG sind gesondert zu prüfen.",
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
      "Sperrfrist und Körperschaftsklausel des § 16 Abs. 3 S. 3, 4 EStG prüfen",
      "Spitzenausgleich beziehungsweise Gegenleistungen gesondert würdigen",
    ],
    pruefschritte: [
      "Zuerst klären, ob eine echte Realteilung (Beendigung der Mitunternehmerschaft) oder eine unechte Realteilung (Ausscheiden eines Mitunternehmers bei Fortbestand der Mitunternehmerschaft) vorliegt.",
      "Prüfen, ob die übertragenen Wirtschaftsgüter beim Realteiler zumindest teilweise in einem Betriebsvermögen fortgeführt werden.",
      "Bei erfüllten Voraussetzungen die zwingende Buchwertfortführung nach § 16 Abs. 3 S. 2 EStG anwenden.",
      "Keine Realteilung annehmen, wenn der Ausscheidende ausschließlich Geld erhält oder übertragene Einzelwirtschaftsgüter vollständig in sein Privatvermögen überführt werden.",
      "Sperrfrist nach § 16 Abs. 3 S. 3 EStG und Körperschaftsklausel nach Satz 4 prüfen.",
      "Spitzenausgleich oder sonstige Gegenleistungen gesondert auf entgeltliche Bestandteile prüfen.",
    ],
    merksatz: "Realteilung setzt nicht zwingend die Auflösung der Mitunternehmerschaft voraus: Neben der echten gibt es die unechte Realteilung beim Ausscheiden eines Mitunternehmers gegen betrieblich fortgeführte Wirtschaftsgüter.",
  };
}

function korrigierePwb(thema) {
  thema.kern = {
    ...thema.kern,
    ausdruck: "PWB = risikobehafteter Nettobestand × nachvollziehbar geschätzter Risikosatz",
    erklaerung: "Die Bemessungsgrundlage ist der Nettobestand ohne sichere und bereits einzelwertberichtigte Forderungen. Der Risikosatz ist anhand objektiver Umstände am Bilanzstichtag und betrieblicher Erfahrungswerte nachvollziehbar zu schätzen; eine allgemeine gesetzliche oder verwaltungsseitige 1-%-Pauschale für sämtliche Forderungsbestände gibt es nicht. Ein pauschales Herausrechnen mit 1,19 ist nur passend, soweit der zugrunde liegende Forderungsbestand tatsächlich einheitlich diesem Umsatzsteuersatz unterliegt.",
  };
  normErgaenzen(thema, "BFH v. 31.05.2017 – X R 29/15");
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
      case "istr-modul-istr-istr4-06": korrigiereAStG9(thema); break;
      case "bilanz-formel-sechsb-reihenfolge": korrigiereSechsBReihenfolge(thema); break;
      case "bilanz-formel-sechsb-abs10": korrigiereSechsBAbs10(thema); break;
      case "bilanz-formel-pwb": korrigierePwb(thema); break;
      case "bilanz-formel-abzinsung": korrigiereAbzinsung(thema); break;
      case "bilanz-formel-latente-steuern": korrigiereLatenteSteuern(thema); break;
      case "bilanz-formel-teileinkuenfte": korrigiereTeileinkuenfte(thema); break;
      case "kst-modul-kst-12": korrigiereVerein(thema); break;
      case "bilanz-modul-k3-35": korrigiereElektroPkw(thema); break;
      case "bilanz-modul-k3-29": korrigiereRueckstellungskatalog(thema); break;
      case "ust-modul-ust-161": kennzeichneGastronomie(thema); break;
      default: break;
    }

    if (thema.typ === "karteikarte" && /Begründet ein Mietverhältnis wirtschaftliches Eigentum/i.test(thema.titel || "")) korrigiereMiete(thema);
    if (thema.typ === "karteikarte" && /Wie unterscheidet sich die Rückstellungsbewertung in HB und StB/i.test(thema.titel || "")) korrigiereRueckstellungsbewertung(thema);
    if (thema.typ === "karteikarte" && /Bilanzberichtigung oder Bilanzänderung/i.test(thema.titel || "")) korrigiereBilanzaenderung(thema);
    if (thema.typ === "quiz" && /Eine innergemeinschaftliche Lieferung an einen Unternehmer mit USt-IdNr/i.test(thema.titel || "")) korrigiereIgLieferungQuiz(thema);
    if (thema.typ === "karteikarte" && /^Steuersätze \(§ 12 UStG\)$/i.test(thema.titel || "")) korrigiereUstSteuersaetzeKarte(thema);
    if (/Realteilung (?:oder|und) Sachwertabfindung/i.test(thema.titel || "")) korrigiereRealteilung(thema);
    if (thema.typ === "karteikarte" && /Wie wird § 8b KStG technisch umgesetzt/i.test(thema.titel || "")) korrigiereAchtBTechnik(thema);
    if (/Vereinsbesteuerung/i.test(thema.titel || "") && thema.id !== "kst-modul-kst-12") korrigiereVerein(thema);
    if (thema.typ === "quiz" && /Welcher Vereinsbereich.*steuerpflichtig/i.test(thema.titel || "")) korrigiereVereinsQuiz(thema);

    const kernText = JSON.stringify(thema.kern || {});
    const achtBThema = /§\s*8b/i.test(`${thema.titel || ""} ${(thema.normen || []).join(" ")}`);
    const verkuerzt = /10[-‑ ]?%|weniger als 10|Beteiligungsquote/i.test(kernText) && /Beginn des Kalenderjahres|Jahresbeginn|Stichtag/i.test(kernText);
    if (achtBThema && verkuerzt && !/Abs\. 4 S\. 6|Erwerb.*mindestens 10 %.*Beginn des Kalenderjahres/i.test(kernText)) korrigiereAchtB(thema);
  }
  return pool;
}
