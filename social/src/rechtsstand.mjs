/* ========================================================================== 
   Social-only Rechtsstands- und Fachkorrekturen.

   Die Lernplattform unter src/data bleibt unverändert. Dieser Layer korrigiert
   ausschließlich die aus diesen Daten erzeugten Instagram-Themenskelette und
   hinterlegt bekannte Rechtsstandswechsel für die Veröffentlichung.
   ========================================================================== */

export function rechtsstandJahre(datum = new Date()) {
  const aktuell = Number(datum.getFullYear());
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
  const auftrag = rechtstandAuftrag(thema, datum);
  if (!auftrag) return "";
  return `${auftrag}\nPrüfe insbesondere, ob beide Jahresfassungen im veröffentlichten Text inhaltlich richtig und eindeutig beschriftet sind.`;
}

function korrigiereEntfernungspauschale(thema) {
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "Fahrten zwischen Wohnung und Betriebsstätte sind nur in Höhe der Entfernungspauschale abziehbar. Bei einem betrieblichen Pkw wird der pauschale Nutzungswert dem nach dem jeweligen Veranlagungsjahr abzugsfähigen Betrag gegenübergestellt.",
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
    aktuell: "0,38 € e vollem Entfernungskilometer ab dem ersten Kilometer.",
    vorher: "0,30 € je km für die ersten 20 km und 0,38 € ab dem 21. km.",
  });
}

function korrigiereAStG9(thema) {
  thema.kern = {
    ...thema.kern,
    einordnung: [
      "§ 9 AStG nimmt Bagatellfälle aus der Hinzurechnungsbesteuerung heraus. Relative und absolute Freigrenze müssen kumulativ eingehalten werden.",
      "Die relative Grenze knüpft an die Einkünfte an: Die Zwischeneinkünfte dürfen nicht mehr als ein Drittel der gesamten Einkünfte der ausländischen Gesellschaft betragen.",
    ],
    lernziele: [
      "die relative Grenze von höchstens einem Drittel der gesamten Einkünfte der ausländischen Gesellschaft prüfen",
      "die absolute Grenze von 100.000 € getrennt prüfen",
      "Freigrenze und Freibetrag auseinanderhalten",
    ],
    pruefschritte: [
      "Gesamte Einkünfte der ausländischen Gesellschaft ermitteln.",
      "Zwischeneinkünfte, für die die Gesellschaft Zwischengesellschaft ist, ins Verhältnis zu den gesamten Einkünften setzen.",
      "Relative Grenze prüfen: nicht mehr als ein Drittel der gesamten Einkünfte.",
      "Absolute Grenze prüfen: Die nach § 9 AStG außer Ansatz zu lassenden Beträge dürfen beim Steuerpflichtigen insgesamt 100.000 € nicht übersteigen.",
      "Nur wenn beide Grenzen eingehalten sind, greift die Freigrenze.",
    ],
    merksatz: "§ 9 AStG arbeitet mit Einkünften, nicht mit Bruttoerträgen: relative Ein-Drittel-Grenze und absolute 100.000-€-Grenze müssen beide eingehalten sein.",
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
    ausdruck: "begünstigter Anteilsgewinn höchstens 2.000.000 €; Höhe des Abzugs hängt vom Ersatzwirtschaftsgut ab",
    erklaerung: "§ 6b Abs. 10 EStG begünstigt Gewinne aus der Veräußerung von Anteilen nur bis 2.000.000 €. Bei der Übertragung auf Gebäude oder abnutzbare bewegliche Wirtschaftsgüter ist zusätzlich die Teilfreistellung nach § 3 Nr. 40 EStG zu beachten; bei begünstigten Anteilen gelten die besonderen Regeln des Absatzes 10. Eine Formel ohne die 2-Mio.-€-Grenze ist unvollständig.",
  };
  thema.normen = ["§ 6b Abs. 10 S. 1–6 EStG", "§ 3 Nr. 40 EStG"];
}

function korrigiereMiete(thema) {
  thema.kern = {
    ...thema.kern,
    antwort: "Ein gewöhnliches Miet- oder Pachtverhältnis begründet in der Regel kein wirtschaftliches Eigentum. Maßgeblich ist aber § 39 Abs. 2 Nr. 1 AO: Kann der Nutzungsberechtigte den zivilrechtlichen Eigentümer für die gewöhnliche Nutzungsdauer wirtschaftlich ausschließen, kann die Zurechnung abweichen. Bei Leasing-, Options- und Spezialkonstellationen ist deshalb der konkrete Vertrag zu prüfen.",
  };
  normErgaenzen(thema, "§ 39 Abs. 2 Nr. 1 AO");
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
  const pruefschritte = [...(thema.kern?.pruefschritte || [])];
  const stichtag = pruefschritte.findIndex((x) => /Beteiligungsquote.*Beginn|10-%-.*Beginn|Stichtag/i.test(x));
  if (!pruefschritte.some((x) => /Abs\. 4 S\. 6|Erwerb.*mindestens 10/i.test(x))) {
    pruefschritte.splice(stichtag >= 0 ? stichtag + 1 : 2, 0, "Unterjährigen Erwerb einer Beteiligung von mindestens 10 % nach § 8b Abs. 4 S. 6 KStG als Erwerb zu Jahresbeginn behandeln.");
  }
  thema.kern = { ...thema.kern, einordnung, pruefschritte };
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
      case "kst-modul-kst-12": korrigiereVerein(thema); break;
      case "bilanz-modul-k3-35": korrigiereElektroPkw(thema); break;
      case "bilanz-modul-k3-29": korrigiereRueckstellungskatalog(thema); break;
      case "ust-modul-ust-161": kennzeichneGastronomie(thema); break;
      default: break;
    }

    if (thema.typ === "karteikarte" && /Begründet ein Mietverhältnis wirtschaftliches Eigentum/i.test(thema.titel || "")) korrigiereMiete(thema);
    if (/Vereinsbesteuerung/i.test(thema.titel || "") && thema.id !== "kst-modul-kst-12") korrigiereVerein(thema);

    const kernText = JSON.stringify(thema.kern || {});
    const achtBThema = /§\s*8b/i.test(`${thema.titel || ""} ${(thema.normen || []).join(" ")}`);
    const verkuerzt = /10[-‑ ]?%|weniger als 10|Beteiligungsquote/i.test(kernText) && /Beginn des Kalenderjahres|Jahresbeginn|Stichtag/i.test(kernText);
    if (achtBThema && verkuerzt && !/Abs\. 4 S\. 6|mindestens 10 %.*laufenden Kalenderjahr|unterjährigen Erwerb/i.test(kernText)) korrigiereAchtB(thema);
  }
  return pool;
}
